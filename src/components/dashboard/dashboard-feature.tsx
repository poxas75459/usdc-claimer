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
    "35oGzxc9YAQjtGjYhoDUc7kQsMDuqv4FiE5wLCGhZ9jh4woAogaooSyokpXZik1HzxVBidinEUD2f3SDhqz9UWin"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NFwP9TUBa65MJkTS3BqLPhx6PFukaH2kCJH6a7Sddtk2RHNdjoLVfwa9qwzKF7Ge8ZbbCHF64NX4vDr7uKCnCiu",
  "key1": "2z4idL7jg3RJUSxtiEvauSaDe8ojNsBU4GwYFRrE8dWixrs9brYw1KvFisEvhVJeFw9jXbCtWyuAryRUHjgtxdNP",
  "key2": "AG2nSu3HrdiGMn8wZUkrkzkxTySbFsfDfZQW7hX4ghHSqjAyJUU9oLi3enSZA1aibSvUEFuYeRCCLffYpSG8LEU",
  "key3": "tpHZqc1Pmty5HDo3AqBoTPokkTBmsTRe9yR51kwRyUKzNvVnFpvr2eB1kkRTGfUycSmYFf9q1TNLzXBt53QK5zh",
  "key4": "3D9wb1V63vpmpWYGSeQFHSFA9Lr2AYjDQDRjJ5cKTb8zJA5DF8bduNukmsVAUEx3seQmbYiGKkpEcPKzhnmS6R6J",
  "key5": "UeAS1HvYeKVqAWFBZv8vSxyeXNMJNobKc73PLHaKet1sRagQaZh85o45n4ndpkeKyLcfrcarbv37VS5q4YauwoS",
  "key6": "4FCAwRCUJ3q6fgQ8nSejukK2DvN6Pt9xetH7TaLASVi4vnQwz4i79ck1AhmAXyzTJkZmZRKf9ya153bHsLUJVZWa",
  "key7": "4XhLSGLdoWVh8PCWEcFdYcMPj7FDi6dMd9MoEjuFog3xPuQvxNiDgqWznyLt7G3NJYAeazqdVxXusZYBDUpqvnHE",
  "key8": "3r3BXhwwsR9iz29RxjKK6tkn1UJmQo6HX26CDh2GtLSRKzM4ZpZWkjor23UEf2rx14VNmwQvKJdUiNQF3dCACQLX",
  "key9": "3RY5qcxHdKoA2zcRDTmjPFEgPRD7EMQZKCVjFvtGFH5fncDQRyQhcncoazcyYA8TuupiwM6ynvNeUQihSctzM78w",
  "key10": "4Zd231cqvsjynhskL6EC1DWtH117c9nU4G8StFTvAW3a6wnrRhDdDavYuagcqVsTeXpCuzXZyU6aKG4pQXM2ZU4r",
  "key11": "kx1Lhgbvn3uD1tzBxXAy1jpAUQkJXTfqHG5JwD3pfG8nSF11o4DtQdjxEYcH9m78AsrKHYDWyJaYAacgtM4u1fu",
  "key12": "2JjfZ5r7kE6FYrv1uGMZDSwjP6HTbCFpMgusfhgk9eSrP2r4nEd5MUyU49C6PkMAW9DnucvzJyqBC7KfcDYC63wK",
  "key13": "5KrVhueQ28u2kjfJGJ8VLoG5aR5nLnrfWatZk62CXbXYLirtALDxE3EatUzBXXS3ycqy778KBzSqCnqbChwGZtN1",
  "key14": "5GWMMqoUcQKDNA9t9dUhYUcKCACRZvVFNVP9RrwJ83sXLBYS4LHGQeTWZcCbrMSYoUjk8gPJ1DZefJfivitGW2kH",
  "key15": "4RXCdwoiCcTFVDxgPwavE7mfpxezjdooThgvrktdLpukSTM5kihQb1V6MJntXmqybdGMgbwHVQZbUAXZtCxeawS9",
  "key16": "4JDL62TY8sGtXzfqzSZnxiGWfPr82xJiM8A6ryvYhw2pk3Rw9gHKe28fV6J74huMcQxz4LbSrZsCdZQGdUypMF4Z",
  "key17": "2HyQCz6PxXnmaT3MTWCBfrAjRpUfQbBGHGmVGQcY62AQ6fuEP9NEgooeTv4HFkwDeKKb3LzPwcFwHmNEfCJQ4R6H",
  "key18": "2P6SbjCTbSN8iTSPb5D75RXLRmAvQShwPpRiuqpTtY9RYVEnY9n99aBkzT8PP7CvRUr7CTVRVWToppTqnoD7bAsF",
  "key19": "5qdfdVWVcn1d37BAioUi2HeB7dcHb5HoGtA9ppMu6wQFhM4MBLhgPvut7JqdrBAyj8YSe4H2Xz4tnq28FzdP6fAi",
  "key20": "2KXNxbnmkBwXttVsTExx1DXXg5gntSboDw9UqBAgRFUhhUoRayBZNoxzespBU4ajVnNN2kYinzfCAEhbfmjf7xML",
  "key21": "5m1epn7iwLh6XgwypADTYDraJd79MiLJC7SvkrE2cKvLssPeeMHgA7TKSnjVoDLTMEErmHc9fDoJFUAzi3fizSsP",
  "key22": "peycei73SERNr7Gn2fpzN5EYXbrVsso43eJsQuv3JGwSHWVi5LMxQ7Fff3x7ZmWyNssJaorDhbTjHt3SqmSMMUr",
  "key23": "ohZ3e881FTQDTrb4CbBfzf2QwqGxvEFUu41Arx1rY6TtC2A9NsxbGmUDesuJWvyHWPcKwdSLL5zxTFKteepvR1S",
  "key24": "3Z7ffzQQrUcEFAofgVzN71pJ3hemM2KjsrT61vRubMz4NbAvwazfLK9nBoTn6HSjS9Rnj34SWuXAN2PEhaApFHxh",
  "key25": "tygR15wvnKyG3wW2NohrcJDpz5wr2qRy7juAVwY7Jn51XFKGLmJMX8UbvWNkCQVtHcDszETfiYVQiVvJz47j6ix",
  "key26": "3ZA36pgLFVbV3upCDEBt3qQBDXDqhruWvjZuXvYiYhFkBmkE4hudNm8SuCReSimiEp8bRCkrYsh4Wv5WmaJXGMDt",
  "key27": "33SZ8vkKsZj4tcCDMdXt1KCz9cwKYV47PWFzKeDn55kctAfPHojMEiSyVNAEkFttAecDt5y4AAsTjsw2pd7MBA6z",
  "key28": "2gELLDURyRfevcY5y1NgvGnhsLREmeYUVHP8yKo6FSJexCBvJwLcaESUkbTi5CN8bcyABimNwvMktf3BKejzpbM",
  "key29": "5X56TNdueav9kPeYigH48krPYj4RAkhwVk8YzobK15MD3FeH6bzFvEP4rqwuqyWjUziKFfpF9o1S4gcKVBiD6GUQ",
  "key30": "5KNtz9vibYDkPjJaJhgTfAP4NKjEbrTzTzRDo9T1Ck7LSNeJVbSzxT9PKDXwVCDqufragvBVo9BPeTNAukujwJbZ"
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
