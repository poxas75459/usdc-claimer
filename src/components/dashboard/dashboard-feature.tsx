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
    "4i4xrNEacKwCwhSsmjth9z7u1X9vkzABcsEdrYnse5NwQhrPB7crr3sNSz7EcbcogvCBMCQp45KHtKSkhAUDDcpF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37mLnhbTyiyeTEf1WSU5knjiUCfhqWuNEiaeCKRKs7ViAVvDrwqeetX7zrvunH8Zdnb1gWo3oMXzaKvTNkEVQBvy",
  "key1": "2GFwGwTVzxjWzmLUZGcwuDfD7HLyEhPnr981s8MUTNEE6ymTHjNGcfLx2TtgbCJiAABpaagvABJKUCCgDtBGuhNN",
  "key2": "5xmWbVPqzBhiaAnaVUW2hmdmCapouRbEFR4iWxG2ygGB9G56mdt4aV8G7CJ19CMcnM9GFtPXvgrrxte2b3Pu9cCC",
  "key3": "2J8amyEj2RszrU7UPZGPyAqTCcaYLvTKd5wJjXKNfErxsyLVhsF5bAePEi1Xfa1anRg9zUAKzyFp8S3qqBazM8Na",
  "key4": "44L6NWr1r5Y9zyMbLmCr9eK7sjs2dspoNgNNJ35yJsVNXk8vTWqSnnMrbisgT1GGeKQNQqRnQ82W6jjhisLjPXM2",
  "key5": "6s27B7Ve57puBd3FF3pR4mczEVTtMC3tGP5R8pZRYCbfd7rhxycvoDdyppx5Hvfrrob3PofvzkSXzMxDnLSoNKk",
  "key6": "5cco4UVRuqsRueK1fLtWxQSGW1F2rGcUaA9LgAgnDHZdKMZw96uccuZvKH7vSWUichcGhzds4S8tqzKcsQF768aF",
  "key7": "26iSkeQonPkofT26qLpeDtMdUrpgXB1Pfk77KKuBXNoZABhUQ3poxoGqL8xyMwVYUTJqa5UeGmzfap3RLSVcyVxn",
  "key8": "ip4axDPSPEqYST3UtXFRGXGQeaEzk8RNd7dt7zt9XCJXkdqY8awdGRJeJ7DaKGGNgrVw2xWSUAXd9GyJ9t4MJny",
  "key9": "1jdJmxarfoGuMuowqYH8nDiBLLiZkRE8u5snasw8ZwzimdcasBM1FAGXorrzkMTg8HjakZb6kkWrkZHba2Un6T1",
  "key10": "3EE7LQG4BagAtmuHBtncnmBMtFXZhKQfQa1bGZ61NpjAMVetyEMDMSyvD189SXyn2d3heAvBsDdDHAxRcpmj8ZDt",
  "key11": "3bndEf9pdGnvd5xvHoERNA9np1ub5HNaW2rAavMbSCCcJeDeLzvN2b35sBECSG35ZScpiDqj2b4EP8jYi8idFrFc",
  "key12": "4scTfWzsbjwLhamtsGwi1cqEsHaSveRa2N85HiJPPdnyQc6zSDWfBqWPBBZKc38UkjAifAL1XuFxBcFoRQMndkMn",
  "key13": "5fonLhnkmF6XUN7nL2cUz5NabXucGxmU23zz4PuWjavK96i1pc6j1rUuHnSoMUcV2EM7rYq2emsUuoStqfybo9t3",
  "key14": "m93Uy2G85LZKxAK7YvFrHSMK7ZJStvWKYBESw53KTLyidZhquaKHXBpAmLkYoFtG5GDwydsJyBvS68dqo6yVbFh",
  "key15": "r2eiHk4ydiby4dyjzDxLp45RKPZcS24Vot7zv1EvCQ6YTrG6QZcaCfTByenuHMsTZZv1nzv1Rr1V6JnHRLEHbUE",
  "key16": "56zmNnmYhmbXvzU21ND5iV4HSe5cJ9h7SncA7fUaNi8e1A4CG9ppN5RXmuPJtUF3QhcaATJ66bFWs8sT1JvopK9e",
  "key17": "5Dq8mdddZiySQV7AsiQXxUxidcrNsSTLDfAwEYouzAV94e8KPUCFq3VMPHx9AQy4EgqMikEM6oXKC87Pirm7DBQQ",
  "key18": "YAEcF1JDbEcmxCS3cD8gtGiRgtZ7ihYkY3aQH76CcVbvVTg7eUxZAX5dGRm7iCVHKtS1gsT1hSRhZKiXCMUKr3o",
  "key19": "4zRn6cR9ErYaVtMrxeFKnkFyoNQyggXjR5w4AVLEJSC91xuDmUnSuCcTdNBVEzqbNxDpxgC42qq6YNduzZKSAjsa",
  "key20": "37mhYZM9BGoFPLr8joxSDuHTg2m3WwtmKxtNZYxqFepUarbPoAyDQcWPZR7WMAPErcnutHSHGxKLTzVga5Kmoi3m",
  "key21": "nc9XcZ9DdBzopDTBd4rTtb4sWHZFhLhT7DT5v6Bk1aBcftxodsWQkGtVEAPNpB9Uput8VhE469vHToqR6q4TDtv",
  "key22": "Wt7CYyhgANMtwLfFUSPS5hjMNSepY6ajyn5U3ALN2Nooy3wkrSU8WtWdUg9Mgy2oNGvjY9eyYaJ9sSBV1AzyUgL",
  "key23": "3mgxgXoxS3WXSsGeFU5uAXw5ix19KE38U4b9ijBd22kNou2aKMV8r1a8fpKNhMvC33NNMo3LxavEcKvuyMRA4u62",
  "key24": "5EUk1Pt6YrnoAFEUjPHqXX9kW446nWwqqcRUvxth99BTgUXFXbX1PLavtUywyomzb1HPyDENutWPcbSaQ99xocnj"
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
