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
    "3AP2oEm6Pby5aXZLu4KbhaYTwrPxjddE2qJzpdsNvSfwhC8VXrU39jvAEUrVXN75j83VdZPYgmTBLdg5LCeK33uV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cmVSbDsLgkBG7SidFC5zzuC52XZpFeQbwAxnhr95Y7Jn5f751QgnWZ9ZN42A3qf5BVsEA1RZuUt2YD5ANhDodPz",
  "key1": "2Z6vVLfKsfzjJwHqaDsv2BZSAT85grRkzDiNUcFuC45agr2p2U11AKa1pvDLetoD5TUvsVkG32VSLsMV37kSdHMA",
  "key2": "jGYx2Hkf5hXh5Lg8T3obabGHg745BTCtzDHiRYmVv4EEKHeM1CNG9JE7CmvfLQAA2NxLDz8sMwsLdN2v7LGgpgW",
  "key3": "5mqDEmFbcjNtHLKnUsnaBak7zrqprokCWRTbSHBdcdpTimyjJKxK2DZDiEZYkrzA6vMK7XPjGiFURGNTtWNw71xQ",
  "key4": "5Tm4NYzFLAiuVvyC6tMdTSYXgf6FLFrZpaUSWAn1XGUiEAgx5bYEg45MKvUyphvm9kQwPc1ZEivKcomWKCRcwnjZ",
  "key5": "5SjY8v4eayrDDcbX1GFmbd3NcCJo8oW7X5qbvvkNDu4HTRtTSHUa6x49wN1BjtRafyevWo4ZZnnM4UFRwj5ncmxf",
  "key6": "2hW9ztstR4Vo2di62QW77qCHh1vo8KuXjc9yB36xLhhCkXkA8sfFmTDWpn3gQBHXSDc5x3PifVY6AWWV6X81jxdj",
  "key7": "3wPdhTQsiLNuGPQFVPy24KSeR3XEsDHQ6sK6GbAhEjhHQQQ3VZDw1opseDGXwBxdXHZGZaBEB5vDhHmHxh6Fc6dV",
  "key8": "3kxvrsW8psYJrndq8vzGT5v56xkLbe4ZDEy5Mm8Ur9GVqDHUnkrjyMiN46whiYTJVyoCkQWK4oZXrAkEaMbVMzGA",
  "key9": "bsYwShq9Nk56s3u9eiAzFgckB7mLrCgoQSupaBNM9GYgp7hZY8Noj2gdfdCry79tARyZVofHdcWchGDVmU9P8q8",
  "key10": "388aUJkvBQjfaRbcH8AZJJsKLQCvm7MSQqnybiyXSa6jKk9bZXUCDejeKSXAKj5cZxCkbbLdKCaK6mi7CH7UDdon",
  "key11": "HjVeAfUJJDoYKEnQTfyFCbwS1HbcHjp1wpE5xnWyUcTyZeucvCj9Z3i1YC1fHEqUVhzYXaEBzjRnaDs8kBpiPoW",
  "key12": "3HvT3fQqegZCg9fHxDcNY1fbw2EEj9w9NQCLS1foSr5Yt32jybovsmSrJ3U4uYAGXmGTNRr3AkUR25npJArUewnV",
  "key13": "5MsEubJ3pyM8S3w7umegRi1CHakzToZHCRAJLyX9akFR6sRyanf9AVrCjbTzAbvfpP7pxpzPjHuMwzV3bTHd3UUT",
  "key14": "XvdcqLr1DJge4qLhvAomne181q7QCr71pLSicd5v8YjWu1DngRGJkJK5Se7QzJKoqjTVsyZ51GaFJAzsQNAqiz7",
  "key15": "43Amgt6JKWbcGsQgxm7eeonYMWte4cNULZc3Z3kH5tCCg5ix6nEMoekyyApDNxWz7DDXEzB3jg7Lvu3hJJNcHbwJ",
  "key16": "3AegbrybU6DicgtzHttXZFdquKGRqPgkFuvKDSHfW4AceuVTSai2V2CurigiTkwjQXtsFDUTtwYV2MZcB3gzrK7M",
  "key17": "WvUuEcNh35EHpa1Xcbm7YMxdTgj5p35QYx7hdTnkztBGZs4Z26b8TFBzc1JcXMfEqJmaKpbzGMjhQeaqyCUE86s",
  "key18": "TNXorbnWfBKicF6QMV1K5XnBWu9FvWqf4hXj4LA1rR9WG47F1X6wNLBsNbUjCoRoMQP3bP2cPkYrx8NqoSLxE9A",
  "key19": "5nUAW7b6GKu1fYWRcSQpEZd8NH9pL54hpZVZJWfkLUvZU53bSUEHU6YccpfiqBfAzEik2V9Ck5Lh1i4yZumDqobc",
  "key20": "2LnAkNC6bL6dTRaS6SKJAKZ58Udsk5oSvxbaC3m442GoKno2pNDLAiHi7Lj48ZiACLnsBDYhnHFCeAi3KS7AziDn",
  "key21": "2baZ44zovV972btoyWBVBnRGcDxLoxxqDGuycCVbvuLE2pgoA2VHHS1DHpvSVLgNKFsYMxPmkto7MV7TEb1LubSz",
  "key22": "4oP7amKYxELARwPy9WHA62qs2wU6w9oG1FQKekQ9hG1FQrY3qsRLfTPgdysjDdGNDxf2LeMjSbKVNmX5tNFkfuJ7",
  "key23": "2dox8DyPPvLA1NVYWmJrW7oLr8td2qDUcRypEZj8uk6UihCv69uvYfNKFiGBHShgc8QteJic4mkWpPs5kKQKygnj",
  "key24": "4fQGF5WkGiuAWHBBxjhcApd88N2BqNZsvzuJXief6WR1PWjX3ncaBHxj3Mt9LwnPLWKSkyqGRhxEePrYWZ2nKC6b",
  "key25": "67kb3CKgQhiUitgWSCj5N1KocKeuLjfswim2hoWbpDvdRinMtq4pDjC9wXV1PSAEsWqMPgTV1VoZhDdvbfKU5gNW",
  "key26": "HTzxzaqcUdEXsD8GRvppb4PKADUrRDFCt3tJbL6frqUEL1zfiw4h84u6mJmYBZTnhMdGuCp9rY8Px56kwhojz6R",
  "key27": "63BBSv5qGvhUjnYrDnLshmXjK3Hmiocfa8SnHEFy21giwatzmHDU7EXH3LK6vE742n1ejZRLDraXwEkSjAoRU2FP"
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
