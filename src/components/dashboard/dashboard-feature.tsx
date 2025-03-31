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
    "3XeTtgUMVpBnFcS9h29wcyXuVgK3ZqLv72WwkhDC4NwMyaKh23qfosBeQSfKEKFCoAg5XgzVtGik9NsMFEZ4teN9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hT4Vb4PYpkzUFvX3XhmPBjJu2uDSRr7w7NKsEDS6e23cQaYkuJkfg5hPnpG4fGjTpcx5hm8kCukGiiiwtM4wfGD",
  "key1": "3KkvzgErSPyFzM4efC41mtqdEc5DPH1Mz8m7Kzcdn2JjErBgt5s7vHVZ9j5vvPPaUX6Bk3UhzQWDhQnFR8qqMzqJ",
  "key2": "63mYXvBsBu9tQYA9epFmuyRy5vY6zu8JBDLrePrxUPTmJ3H297GPksxncGBcokCs6osesDigeUhhtJoUmYH2Qhdr",
  "key3": "2H3inDAq1vwkHW1me9nRaBhdRQHKqDzUoH5ZMXRkcq1TzLBNQnvxU9orS9xnxzbWw81xQVvFMqkSMZGr27if2VWX",
  "key4": "44MQvzdy3GRPGFyTVhyXDEgWNi7CtRHgzdzaMu8NubKpdyWdFouMvWhBHdQaxxxi24WURzpmiwt7ie14hrNML16D",
  "key5": "cAeTk8M4NovGvD3hqd4QtRMwotCvopoVDKT6VeaKqpoTpVidkf2EGKT1zLxzYhB1AGAZLAkyNUG7FUTN4A2B4s2",
  "key6": "eSUqEBdrnbDCTRqMMrjgVqKwff7MtDmfTM79Mf97NEqKVvL3oT3Jz1mDf6YXarT3mTa7TGHS5U79Ehgzh2W18qw",
  "key7": "5MBQdkbyJyQEy4CZgYEBRR1aQJzJE4CJuSbJ5KHNbJBRri2pyDQzwzhJY9rGK368nrXd3jGJKBZtxyvfT3ikajkM",
  "key8": "nAKRsTqdmPaMnGodehgYi6N9mtCZ2nVgvN4KcXsGR2ctyqCKAjeZHexCySp4XdTR7sLVtryNbGqGHF3YWZLXZFa",
  "key9": "4Ju4Mq5LFZsy9u5BnmNmQjaJoHFEBmx4SCozfNgZULXDUwxE5tK8j8xBGWRmgdsHnEEXiZYhXxk636JgHudon8Tc",
  "key10": "2QDpKuF6HrYdRKQqQHmtfpXxLHuMazt5jZRjvdiisKYPxMJ3WwD9tiYK1v41XrMfUFcnKbVZeeEbyNBGFJFAfaYL",
  "key11": "NoazXKFtkD4fPCuAxas2i4DQzYntrYwqdbXY16HPw1DPcv7bW6dRcaFJZ6845jcUy92LFmGqZ1Hem7xsEpqAekb",
  "key12": "2q8PZDnswUcMdBEvZ5KTPn4hrNHoUMkAGdGDgBvDvnKyYzfwEMW4x9FMyYkMS4PqFD7tx4xE2vfDLPr1VCaUBFJv",
  "key13": "W4BCcSmQGH5rZUCdPR7BH74othTdw5x7FSWJ2tcxGNzn6eh9ovd9mkJ34GaLJXZvm5kYBvw7DQJNA5x9cEmaHVJ",
  "key14": "4Wc5kP5E5F4B3UZWBKticjTW4nePA7G2Gi3AFVRJ6L6QptBj1aDvKapomQvM3LCACf65gCDYr8DQ1rrvWuhBuyUp",
  "key15": "4srWZ6KBiY7EF2P1d9A2Q7pMMWL7e4JHiTZwLbyQErzDwo78crTkxbXdafshhJopw9M6VewAFN2PN27vzUemTxk",
  "key16": "811PfdayivCVCbkJ5jrRrSSPrXXrqnkinsJEqtd5D3cHRU1Gv45qvDSoBgwnCk7ZJRGmzdyJyfUaM5XFmGcSzrT",
  "key17": "4g3CGgASiSjocehsKncsPXGRSRAMUA3T5uawKuNruuix7jTzRxiQcTLkRMPTZfdMcYA7G7BXd1Yas25LUu6yCrvW",
  "key18": "iKmQ97udL5XKgFG5MYppCi5PcMcxGb8b4pXaSjyZv7gbYmqeDRCqMeFe1jzmGHHAJDSHvCFse1QL41Yr5vDEPrP",
  "key19": "5vgiKTKVxHoa76GxizA49LbGJtWPXnDpAE8Fu8zjZ3VmFgTpYMAdBg7Tt1UJAhmQSwRc4ciCwXCovwZbRbsTw9kv",
  "key20": "5cP9oVsS8JTuspdFHVQQ8Q8riBn8yBj5ykFrBKdag8Cc3PKU1emrXipxZ5fgnD42jds1JJnWFrJCcooSTtbR7dti",
  "key21": "4CsniPsQNMQbD1LNqZuGSoxQrUGAp7ZNCtfkAJVjgz2caytE4ZiGSmN8Qedsc3x128qGbg7afCLXycEnwpFbqLWz",
  "key22": "qoAESh2UugjwmDERK4k4Jj9zFdhDfyzKd8HiSd9CJ4Be2cdmMNSmR7xp6yvWCKSHtq3chWT8UwZc3BmmC8N1E69",
  "key23": "4JWHSjM6awBYYyLh8fNxdrsF7BL3EiguuYfTDAQ4y5fbq4qQoJ8iZ9aDwTyWXWK9Pz8yuS2FcqRo22gGZBxpf4qS",
  "key24": "2AQEDtWzUVoVP5wZxD6CnA3eBSV6QtrhuoPPh1PfvnVAitPayFdS7C47TrY5yDajz6G7vEZxynvsUqD8VLLhfFi4",
  "key25": "34drZUAAcajeZT3h46NjrFz7EAkGapS5T65RwZwCTdqaFX4GQt2RynM9CBUwn9o1tHJoCXP2TpMgaA8yQKa2h6in",
  "key26": "PHgpZNmo22ZoCysJTembA4BrYwhCDk8X1PnjXNi2GiZy2cMcPKFRzmQS8xEq3YtkKFjppZmu6qz98MFokdhjtUS",
  "key27": "61PLd1zWE6xC87Xi36isE14YeBBKcLCQtfMUJVUUJfEijkyhYDWzgdtGY3wqtSo6Qez1GwbvkoSt3RzUjNmBzUik",
  "key28": "2ud1sTBmxBaETBGa4Kbwg4co4pU4CNeZVuHPbnv53LTJKhSur3NNd1d6AeKhQFScirMbnhDbeaM9m7Hdq9YP1LUZ",
  "key29": "3nddobPe328zVdfiE7ANhRxKFQB4f4mA3m7toum4ubYcgo7L6F6A67GL7qhhde3xdATSCEYs1ZHsDoth6FgpV7YM",
  "key30": "4zv96Xa7nGj2yv27H31un1pzzg7rKvntEidzczV5JwaURuVnX4JHMp9LVDG3ewE8L9pYhN97LW2qvkEpkgiXnixC"
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
