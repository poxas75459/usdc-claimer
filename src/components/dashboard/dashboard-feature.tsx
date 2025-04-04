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
    "yfeDZcGnicbsLKjPVZDnCyxWzi4c2gjTZQXLNLzbUSiCeU7Udv5r4o8g6igYhxEhMTSMAGA2LTdwUeCheudu1L8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hTmudKJz1zDjGBBZw4Pth8CvJVJ9RtCe3qMn7kuLxJBuYYEAj5zXAn2hPsDiK6o1svyy5uL3ZKcSzerTh8JsrDs",
  "key1": "3kDRQXVHHPKWP1vx299L68hsNNXDJqBNJDSCftHqUx9nPgooeADxw2LJjLPuVCKRCeShWv1EXR2E4YDPGQMxKNiq",
  "key2": "4X8WwmaeWJ9EmmV1a2TZ2uwkUpZZWdvGeJttVKzMjSGuJPjejBZVKzxbbNHnhQmhxpvqqFVrGF1xXrn6RwmVvPdw",
  "key3": "2AUMa4VfvDnbGDYXmnf6NfoVc2j8W4Rvd5rmaTTChJPE5DmocXyh4BXYiQaUgXvXgYH1yX9m1kWa75n4SefMqJhB",
  "key4": "3EXo8dAcv2BDZpZQhEmjCDYxFVxGBmzme91Qeb7hE6s2sQcu82gZ1LKJJEPZFBzzsqzBogTsa3NpjtcXK3JBZyUC",
  "key5": "53RhBky6anAfiTvitwyKVCw1aeXusNue78nzJLEmcSDh6L6WznrYbyxnSiAkktPXUx9z5cdyQyo22C39Hs7g3vVU",
  "key6": "4ga7cy3RCsoa2iKvW7nTKSxKuPH3Gbc9ncaJvD6K6LbZSxnpdN87wyFJ4A9L8MtcxfLHF1V1Rj6Ddh9a9RrzcSMf",
  "key7": "5o2eYXm2audXsbuqiGFWPeJYv1c65z19WYVMNXtFoMnmJvGjrDouUh7ehVac2GDNexVDZeuiXFKqRBhwGq2UWWP4",
  "key8": "46fzmq7uj9uHxHXG3roMdv9Qf8nSSAmHADB2RTzbkxMNhw2uB3sSnJBaqaQmefhK4vJX1X9DptSxq341cTVCRUQC",
  "key9": "4SpQf8GMRUZRTwG6Q8jhsrcecq9dHbDLp5GeEhfbHBjk64qXpLqWTmBfPoy5EgPcMWqNNPABzYQybPpSxQdkVdFS",
  "key10": "5HRQpDTmTeqR2Au9EXB1TzauyT2deX9m3HrhEP1pbJtCg7wsxn1GdsnP1UB469a9h7kHXEx2kKdJfpZEzdT2Mzna",
  "key11": "5vJvnL9HPzGT38pDiZkhxoiyBeWy6ZdcJaViNVY6P35ZPG9N6HSDF5BKn3x6yunM5ftUJ6VKRfczREW5XyP9vUHA",
  "key12": "3zcsJesikRvNrrcwfr69s8ZY1zCcX5Grm7P2oRXEaywVfCQ29MdtnEmTF9ud9VBD8tPE7yn4nmjCFyuduAiZi5Bb",
  "key13": "3N1UDoqHavakZF9iWnDCC1QBWQwV1HMC8GXB4pbmR44NtZC2X1UANV6Gjhgjc8WwCiAecxt8Qw5YsmuH4d6McGbG",
  "key14": "3ULiExgxgRuNgWf4My93EAPE89fcivruiGuxoie8iTPPCHs2hrikyytJ5a2M3qcg6CG4kdgCbtjx3Si5KDKr9vbR",
  "key15": "MQ7mYCRjVvAEqZGogCrbx5vr24iV4cxEMgxmzpquCjepxGN928QB4kPQ1npyzyR8kphF6DBN8wqYzGdnErBEjMT",
  "key16": "5dnLkZ5TLW3LEJjsm6g73P6zY9xzYANFQEWmx5rtGAe6U1NV1Z3MgjXeDCsXY1gQ4XZbUU3t4DenBnrwDMymmMxM",
  "key17": "ibRYpEfgZbdBhjRcdPXScEto9i8oGZXBvZPvUyikbVe5DXz3cghXEGPPHyuV1bszDb7szHbJ7JbN3E8tJPAu1Ko",
  "key18": "5NLxeW1b6XznjdNr8twGwSVH7LuXKwVRy5ga4EHNfFmWVcKKNkScvd9H2BfoAf6EQ7g5Ywv11veAh7aAQsbWVTQQ",
  "key19": "3v9r83zRXhSLYiGXaLKVWKeAXEf2se9V5XMh358E3tYmFBgdBS6A3Byd85GLdx3XMCWgdivCoQtWyJ7yqUnGzqGj",
  "key20": "3eE2zAeed6iGcKURf5MkQuxYPxEf8oosQU1szVuHsNPBb5tsEKpfdMrcqVR2sM7XDfACEiKV5RBQuFfh5ckJ13ek",
  "key21": "2zTpAscCiot8eLZDNWcdoTZKoZkVCn3y2wzh3uEtGYu46QP4SzcnRbjGDD3SZ3XZunx8rar8wtMjV3Wm4axp8H9S",
  "key22": "579R61UNFQVGcQYGNbbSvTetWa9bCJJJzxy3fR9wSHePRQ7y2SFGtdfzFfyK7RN6gDQW4qcvFkvGJVibc8iGjaEZ",
  "key23": "4Dq2F756mq5qK5ptAqWb7JFQFWmKRsEcq59sRBbSo2deHNfwBVefkvnBWhWd2eKLMYDsQHieGZwudyA7PSJFYWD4",
  "key24": "5kSx8nggHZN4UcWw6MdjkfdH6jP5js8DemPBMWprBJHKjWzq5V9nYF8aDNZE8r53Nim4Q4pLjCn4W5EPytNdyn9Z"
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
