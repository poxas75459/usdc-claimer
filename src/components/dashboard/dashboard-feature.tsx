/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "3D2x3tWNJSeVNVofJorp2BMzVyYwggp1FYafqHoNp9na5hoFYCPwGudAAogBAWgrYkZprEmJZ8TGWy7ok6Py8baf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MTNcZHL8ueXwV6e6QMQUUJGjwCHrh5nS1CXqPNBc9RTxt8NYcyzgaaC9zmqHmz1dgjCSmPbzagaWH7p7nk8Esp4",
  "key1": "5fLnKVXhoBkz11DMMKHibStgbFAVpoKTN6xwK9LHZv6da5qx879ELv3Sb2pJXZMZ3vhDjzW3urHG99qcGNPQcjjs",
  "key2": "4WTrhbJ8y3KH2xU59kDs2bTRvgf5vGnDgfc4UgN7BVFN3hxakgRkaNvn16fbJENCzhnr7i9sXjMcoyZjQapdfCwa",
  "key3": "5UrR7izompXxfb3YDbL2deS3vLf26MPLjNjnQrefzbTV3iRuHFsRrpYWoYdjzyrDujFezqVzYd5yp1JXXUwtWnxp",
  "key4": "5ZLvwweu7Nt1ajMXveLSv1a7qvn3Nh3Te2Ryg5wvAkia8g1RU4wbakNm63kXZjqduRVyfTbvoxrRh8WcJj6SYVEj",
  "key5": "3wSE2gk26Mwuznb1F1km7fi3wSPfHpAeLHQYXoADd6rnyqz7XSEnGCCti7AvJzAAGgJwEzAkxLhrFhMmUPstCaur",
  "key6": "3T7243oLJtRg5LMgXg22bE5n3Zaf5HamsqsoLrAPYzhmQzhD3xretoAhERSAEhdDXKeHKahYQPjA7qBfMPTmAPnG",
  "key7": "3QXsh3ZahxkewY112SNK4QZzgB7Wrvy4ym1z15C1o7dF2Vq4q1NpaQjRTR3sPZetDr9M4QQbiMfhFGYBUVvup1zH",
  "key8": "MaQNQnWb8GSS6A5SnJPBAZ77HqAJx1JkxFufbdh6oLmqLxfpHAi1QmtuPCcqGkEcdEM8KAfbSQ98j5nCTCZdsYH",
  "key9": "3j1YAEP9w2Yiq13rNpQZdpAYCs8SkX5Yku9TsMaFfpQhJzkCwNDdFmPdCnR98xp71nt3KQ3HV7rnBgogAkKZ8oQa",
  "key10": "2hj8ESoxUdDCTWjqWZLo1Vycp1DU9F7RwTXYWnhUhCehbxe4L6bucgzYBK67FTnh2QHi59rQebCA5LsC4epedDP8",
  "key11": "5gymCfb2P7NYevHAQibJNim5xpMq5WYdEUmivif4tDdtFWnt4PjkR5icJbBMYaSQM7zwiWFRUrw6HsHFxJi4V8JD",
  "key12": "43s5Je34EuvRpzcMgf9weesUSKcdASvutdxfEE9nSjBmMf5vfx1Dj7Eajq7ApTwfNsTtPqCeGYWwfzidRmFH6QYz",
  "key13": "5NpD8knZMYjzXGgEn7NXegJZyadGaSQqYsjKGSakcZyhLjYWPGihMbzFYG2jK1NVgt9dyMTv9wpsVekFPBCHXrwe",
  "key14": "2pzpGbGidUakmsgTeNc2TW1w6ncduyn2kjfGHqWN4s4EFxuY4vzVPtQY9hBYDCWpqwKUXECaFDicD8VmdjhPhUbH",
  "key15": "4BQDp9XqKLyETgYtfosTkbnScD52rXMYPqUySUk3ZEJeH37KhC9LszmBUjMAkeGGkqyaaxfvSxsgtHF55CXvtG1D",
  "key16": "46Qh7knTVkCCYJK3RtzN8MZCDHwG3Zak6oTFwJxMwzHCQRKY2LKqXvHKSDpbEHCZv9HCXNaF32zyNfaXZ36jj9YC",
  "key17": "3WvAs8qYY49MvJpexooGCks3qHYTgrR1z8wXMAB87Ct6rRfGzqcosFYtsSdMXv7gahguqnSXkynruQWLai15FTuF",
  "key18": "4wyZ3WFBg88LTpRee2se2Jc6GX8euZqS5UNXUxus39ksVT2eSnXSkjg8ZLWtS2MgDAWMRoPKbu2zQW9P5jDkthVR",
  "key19": "5a7tcMeEpMFTmnaCnL2haCv8Tyx2CR4p6wTEjkUSYZ9C8ggh68gJCTFeDCS9M4VxDRMsLJCxKRXZwHGCodWjd9Zm",
  "key20": "2dP4BPRnzJNQEfU7cvdX916DVFnHNLTmJH36tUHt9VUjfHRs6CifRJutnDL7EQFVj9VfLyTZaLNwJqaNEX6kWKVv",
  "key21": "2dBgJ1Lmej1MxEQDmsBTBcAzrxmAoanmEAY48d2Dupdx1CsobsL19hfbQFjKw188K5FfosM8vWrApvRKYsF6BF4P",
  "key22": "3r7hg25vUjo9GFkF5mRkYJ2Jxo9CmKimopntn6zwE8gYmWiafVv3mh7QzuS9TnjooNn6nm5bcoUiUg19EGHrXFFW",
  "key23": "5Jwt4aBPHpdxreAP6JdtKMiqyqExwSD7TkRg8cSFvv2YG4TdYAJScPwfPeiSJwQVRxmPKNJsx2pBaUWVnQXnEzTB",
  "key24": "4yvVH5meF7YYMmYSyUzL25kpd4wyZqoGBEyXKBvc3YEQfgfi13nfZRXoURQuVQrgL4yCN6J1kYkMkMtBBJxjHKak",
  "key25": "2qMjkUsyJw1yi9FJeWb2mzH6fnkG6RpDvGZASkBhDMFxD71FsQtMuK8P5WFWgFaXA4FjXA7zjwvimST46JB3TSvp",
  "key26": "5932Yhp2vjVEa4U58GjKzncTveZ9NzWyUtEWB55aCha8SVRYgSE2xg2JLTJgUM9eDAdgDaBpNgLknnsJLbkZkAhA",
  "key27": "4bfCAx5wsfqB5kXcU4v6MJtfRzHQQExwcV3pn1aJVP9Q5WjeH2xmmiNnnDqm8g1XuCujozTUYkVviDgin669fnd9",
  "key28": "4i4AVR7kifuCQXgcByN6dzdCgzWFZTveTb8ri1vjJ3PeQ2N8GPJFRgNgxaGWGkSXxey4hKWn2iPBjmna9qvnBMso",
  "key29": "5akd7vu7aFBzZPL39kJq5kmiistHhWD8BzskBrve39E3gP22tJcCg2otkeZCDkBE2chejZVS4vmN8ogiqgGTTGHy",
  "key30": "Q1reQJoVowfjpu9sd4krh1cZp65zr5mHYpaHpFxqnZ76iYiZEReubCm3XguFp8MTiZHA4pBJVYQ8KWY6GfmRkd8"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
