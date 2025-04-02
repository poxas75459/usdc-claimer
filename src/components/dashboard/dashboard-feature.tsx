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
    "5rAnTtJjuouXZZ9oitMWJsiHNY6P3A4rXRxQfEYDCYqjF62TBKV6mX7BWvm4XqRShKXPh3twXk3osbsed7jaoCQc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61HxiPWrGUNyR4n3yfM2Z16Riqa21TFcDf3ouDnwcC9h2FNo54amZj1SNjF9ruEAQzw2HMSfewhmmHMjLgQ9dkLA",
  "key1": "37QERbKHiAqAfR3yNvvyrjA3e5ng2bTAx4v7wLCgod56A3pFzkX1rXoMuo5p7rskf5rJEZrSWe7bN1NKfr7CwkDd",
  "key2": "3jkkwKPQT5j4Jr3SD9moo6Y7Ju3YHyLBfw4hcrLQVTxnsSaQycQskrGJVSDXioeKTUJ1kVRD5h83XfMZUv8Qaa9t",
  "key3": "3AJNw715rfkjBULzbkBLmwQ82ZVEp2Aqntmgp5YX3cBjdMgN19XKqQv7f517yoqZWesX8UwdaE4k54tcGanS9Pdv",
  "key4": "4jD9HdLeTVButq2UVcVnoJBsgmpFujr1tr5Kr1RbaeRNJwNxbbmwwjnQTDHqpQqX5XUtJ3SaaRdpE86JYrrE9CGn",
  "key5": "61ETX5bsyAUBvNMNiwCuJgr8AVRi6zKa9eb9o33gZNsvvE6Pgwj9bcPH7XAmw3MxAwnJV1vxUrNwhWZTSS5o9NcX",
  "key6": "4GbtreveDYhoTLJoSZphNfFJQs72fsXWtEpmhiCuPJdXbbmBDMp8u4NPTtbEYD4YAKNVayrbwvJVkhg2WUmGH7fx",
  "key7": "3PAXbQA3rg5JefFF4mds4Zg8ekSChiwm9KqSADbRj2r88YiMi7KkW98J4oSxt8r3p3TVrxk8LdGYLnYCWri3aDCi",
  "key8": "eeeRguC8x69iTQxGA1rMpFADEdESPoDkxLuEsYio9KD5kEWajnJhxaHdMXD1uV1WYumuaZtSM9gTag7Dog6dagS",
  "key9": "5LynXd2nskPAUK4S8Pbxu7kmWFuTxejq2yBxz6vbxS4RRVL6jiTaMSYjcQxxT1tPeAkZpzhmJVHeXib9P7bBcnvL",
  "key10": "2TtQvsDcPqa2Ys8KrkzLe2oL7hNvyc379XfxFyGfAucsne4bUpL5EBuPFLenD1kRww218V1XVZZdiGQp11od5Zxp",
  "key11": "3pQ2hjSe8UihAaxYUWNaRvyPYc4b445LA2RsfqfyXknxi4WFMX4a8NJrcDxft7eXrCXk6dadVpTyocLKJArasjMH",
  "key12": "4vZ451zyZApkaFFgujFG4ruJqXVkqkjsam1u4DAjudKFjaWD79cwohXMDACubZoJMjz16mwqZNyqMDvSSYmR2ANz",
  "key13": "4zSot1MoaTfUY2rzTNTheoBbMnzu5XkpNqE8YrjefGaG86DnZcu4h9o2BVvNhD5PiHfx1tZgHs8MwcaX6GkBwSpA",
  "key14": "4eXBpnmn2BjUQLVSqbPmUiKrfcRBY3dagVNnrTPpK4AxSEKFKLznzcQVCrhz5TQ5iy5en1VqJAUXLGSzgKWZTaYR",
  "key15": "5SpmbDyrcXEZ7P3oY8Botm415ZVhPbXmPbunsNesJRJHXjr3cHvXNJEh1rotGr4wj663DjA2XKsMLvHut11LXTEu",
  "key16": "3GF7HdooeZL3wTZsnAbTYLZ1FFurDRGjUXWBBRSN8if59BzLoFBYCD8fua2HzaQMcxLiJwqVKDZqJVKdovs1epCG",
  "key17": "R71U9Yw4VPjkYaE5tZfkEztTPrnq7cckQsn8RyLbSWibt8XJX88uK3efKGXiNTDdEYr2699nXjKHqwHCGCxb3vS",
  "key18": "48ekF1RtfwyRxPZFkWGTyjyLp5Xw4C7nuZGE69RBigUmjSTVviWwFggn6Q51w9HYDzSSQdnFivReVhgGKpM5w4aW",
  "key19": "9KTdY7wJ5xb1uvyrsRUNWswjTxnVQtRVcWCraTa2TJfDzyVPxiSeXjFscZu4q3zgoKuAEL8eEF1bYjguWWReRXm",
  "key20": "3YpqDR6EgCrNv7fDx8snbT6dDYbXwnZ2FLgiH14K5V6GJupooGxDi39KL5zZhabbu9CivjveXWHNwbJFYCqgmwQC",
  "key21": "4PhmFUbG7uai4wDBvnabPL2Vpfueh1mRru97RCk5ZuZ6BGKfJrA6tD8nTgHyvYjtmT74deyEdxDkF637LSmLequ8",
  "key22": "1aUZrDqJ16FZ59sZKL4KiW4ea4dx3mSkYPL4KDhrwZhSDey87rFMt1KyBWGRFNaTubDzczu6Ntk6eiQhVAfJhzM",
  "key23": "3a1jnwpaYGbhQkePLUM9rHsK4MoVsWyqnJpiKeh1c6htBiKV6UrNnq7DpWGYUUakDaGMMY3LrTKbej39DRAFeAqk",
  "key24": "4YqYSsWEy3RVHdDWDdpRKbJA1buq3c6fXFjmGGGdebachNPNkLGkoZstZ5WBSEPZ2awsbpULswvy9CeDPasgGWzt",
  "key25": "RvNbeyEXW6DvqJNEYtw8T88VSYrG6KZZDF5ZpcM3z6H7u8J66nyTxc6SzsPEweU4VAhEzNwHfvQfGNH1FdznNQM",
  "key26": "3o9mJoRHHPwnjVSTckarA24ovBnyAU1VyCJNwq1a9twsSqPnQd5hhVXb6gfuVaFa3KcjzJu2hAGw2Zyu44pBY1bs",
  "key27": "2hwaUk8geKiKAdD1U7wr9be9yF58WvmQZvB3ufw1mjPrCr8qZNmmWTKaqewBQs3fUtszGYN7XhZeMmKQ3yqEi82P",
  "key28": "4Wmz4V129GWh5ADx5P5zoSY6CETxC19V2f78RFN2ggLsJMbSR11W9tsAUhE7ZAEXHacHPv5rSuFFqpHTgbBYwWVY",
  "key29": "4rYn9KZsrd7MkdjXX6XHTwM6aJ9pdWXz651eni1Ud9SKqGKUd9uqN4L4am83ayvWsNBf65FXfpg5e3pqQ9CYUchU"
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
