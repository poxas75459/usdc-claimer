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
    "mRT8APXvR1DxfWhBVnjuZqkZqJJ5Bf7ZZtmSBjAFJE8ZHX4BKKifZPrE9LuWNbt9uBtvm3gLNtcyRZF1iuXcWge"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GiBUWc3YRJzSUoA2BVKv9BgTZNvyLBxsXDATcq3DM8QPWGii4qhpNvikRsKwzeEpw6C8GEFXDWpTEJCTaHhL9Kg",
  "key1": "3m9zLHHoHvitYXk9gZgrwbN3cg8LMdN1tZ5Gppgm1avfpW6zE4tYUZ4N1YL2y65vJAQX1xYYJu7zR1yZ9hxKpJsg",
  "key2": "5P2744xQbkGzJo4BnsFiRMR2Y3UWB4p9eLPpC9j6gdivwFHBcf17kZX31c6S3ujbS43kjz4wGbo2jt5pCmTMPsiq",
  "key3": "3iaC9dzMzvuVvgySwCeB1YLERwcHCaxmPNDujdwvfn3MtTG4e28f8uiZ1LjjJcwCQadDrjTEgTLuRnDBbbphXBK5",
  "key4": "5VHDTuUoXSnWx8u1y4uRHxMwNx18dkc1cHW6XsdJmn3SaPuYpUe1VLQ3qrDoH6xrWCQjYeR4vZBvW27jgpHitJox",
  "key5": "3wCq8WfkeQLQjRfibWxYYZDCXX9vTZB5wPEMBrKCRhwwmsq19uy94VVJBDdt9Ud3S5XDTZzn4VojiriGLBtX2QmT",
  "key6": "5VU3QcNWVEg3z6RUhe3mJPBxoPXzNG7S62MFvmsi5Qx2wpETiErNTFwuwWE6KBBo6V6yqPzBUmAv7tSBpjdHHEvX",
  "key7": "4xC8PvnFzXJP81GoZe39pGzZJSR4it4hg12BMvqnxwBCips6rGt26iqs9AQAYLFa5RsGN1F5FLYNUfYyM7nVi9iy",
  "key8": "4CGjr2GiwYotUmUWSjcxaNXWzmkdG5mWE4GLqbjHE1GzvGKSWHL93PsrwgAJh4QH2fJyqNsSjKKCcLoivUgMmGmZ",
  "key9": "4Udwc6AqXvqRbnsfa3QTakPdpdmChtMiCWK2PPHCw3obyBqYHhPCv5bieABoQ2mdLA7woeuZRvv3Cpv3eNUumdbS",
  "key10": "2CmQYS3HkaeGqWdgqkw6bquw2rYMQ55s9fhiTUTNac4ARsUhJDGS6ZS8agS2TeZiH7WBPbsU8AoFnBkfhUdqNt7k",
  "key11": "2k3PQG4U2Fpu639e4hkiw7i3gNyHkNSANfF1MTiK469soKmvHqqqZBmuWuk2zTUuwRu56xvUvYkK9i3HGT3CZbfU",
  "key12": "2z5jaaCQZAUGyQdqqedgnmuRCa6mbwRzEzy4oF61qeTSavcRwhTggHTxA32krpr4QfKQ3jdjESmSRqxvhVsvZ3BQ",
  "key13": "nf3ZCwEaZ8qWRmHnNcCbJuRNDZWGnNS7KPygTPcusxBY8dNhwEgVMBZi86zKCTaTFcTDbKSEAM5Et7jXi4xmpoc",
  "key14": "56M4pQkqUp7AgYhnLVLcRzVGH4b2uWbgQf3xVJjaT9n2EKuBSxrAezjcPj4qJcqaCqW1NyAtuJJm4T7oHSt1gsdX",
  "key15": "4XZ9jffpV4LMp6y2BHWEG1u81rGtzjThhaFXEBzWi4HqNoVgRUUKH6ho1bGFavCCxDRMmU4b6KuZp2Zbtjc7ZREN",
  "key16": "3W2i94m5WaqugkJYsRPCifcuKNPGgmX29zk24tTVzVFZHoXn3vC31RafPhiucMGUh5ZKR4DKri7wd8yKv1vgszaA",
  "key17": "XhY5o2cLZoFLGQd4uN1wWE4or2W8YpsSv8yCX9KMA1ZoZKR8QnGWJTkYXWYvdbBwZ3QfP6V6gGm2YHqPZeyesCs",
  "key18": "4LBSg5pLg567cQTSxXo5SXZu9qgAweYavur5fRsJDFk1FGyz2w3dYds53DGbJgtzKbgjisRa5nKByJPq6AH7sVHM",
  "key19": "679s1M3QFr46j9muqpCxta7NV5mCyDSHcYDnyf6hZrvJdac4szCnK4rJx7aWjUsBb5H83iMdQE4TuFHbhrZZmedi",
  "key20": "5kv1mtzUyTp4FPSXmBRU9dY3HsQ8tTmP3tmpButKFMa6RsYkFrwKKru75jVTrhP89evScEAJFvSC7ynjcyucrzJt",
  "key21": "q4PsTHnWgfjudMP56eaNJgmx1so1c8vZM9JxWLy3M8aGXnTTttKMfRfB3gvYz6Wd5oJsNJMcn95YbgeyzWrfHzs",
  "key22": "5rQ3w1tsgRX6sSzV8zpVDXh5777tMRX8a85Y35dWaT7daZ8ML9zugi5FJo6TeZc5vPvwgQnN736fVXSdiviptZcB",
  "key23": "4TbFWidqDrpNoEx9DZy1o5pSn3yNx1scHffbxRzW5UQ2Fc9LRY7ThXD2r5TwRP7wjtSJC5pe2kZTgrx7fwC7NXCJ",
  "key24": "k6rF8gKHe34UcNQbBokKuDia3W8wxWNNVi4q1ph9fTDZVqoc9w6TktDoSSLRqMDS8EgZH1eSL7ZBLiyvjcagmuh",
  "key25": "3GvkeRpgHFBDDfyfZid87HLane3QbKfh43GFN3E6n2o7ULZDmgfry7ctAZ3tbCLreu1e7T5VWfsh58s3a1Hx8zHL",
  "key26": "3TwLoMkh9yAdrFh4nDRNhzUqBCQEkAfbE4dQbVKhcasLRvtJLrsNEKAc7CaZ8tfHzvjQTmUWXN3Zgcsvz42ptrv2",
  "key27": "2K9DHiG5QV1Dsq5BzzM2FHEN31YpAsuHT61PKFSzXh2b1J5Mni37cAE7C1T5F8UYgcTQBiagDJrRAYHuyHCN4Zuk",
  "key28": "2huNQnspy4rMqzKvd9WbfwguhFuuVjSyTbsUDAsyCy8Y8v29x8CY35JUwuBdaKAYaRhWdGeSwN7fd1VDZTc2yurz",
  "key29": "2EeSC3DEsvnPmQBSWaN7P8ApfnodFoGFG698r7Giu8GaCfcEbzdrFoD9Y91ffWvE7SC4oRENFcStXUB1zUhKaAyv",
  "key30": "48zpBw83ALRL7k2btkvgrWLFynVWLTV6ezaGf6SMrznw1GTokAMcBYnjVG3MMp2damXiWkUCnJudDJSvMe8ktd6p",
  "key31": "6hP2hi11C9zuMFz9VL58um4381BFC21f9vTHzkbcXscCkcWt15fcDTh65WS3AAs2iXGykLkHAbw68E5AmQjwNjF",
  "key32": "3FtryJR5ttn8BzWGUgiZvjHzcMNcKoDXLEpNbJioGqGG4V3g9UQGpg1nHwgAKeVqz8Nh2ZWsqJipCRxo9dP5zRxZ",
  "key33": "5hAYoMtKHuqNLzWJHHahsvdszdk7g7qh2bqkSBN9h7SseVWmGPffA2VxiLmuCisfySFszg1Ew38Deo6GCRTW76fL",
  "key34": "3xQQpc8m8KoKKkqhu2dacHnD96Q9c57xmmc4MsPVoW9WrHiBwah4sabr8kWAa3vfEbKGQnFLBQu8irgEftzfDgiP",
  "key35": "2foBwiWVajrYBAnugKyRipKvwBWsAuvPsdWEXL1ZTUKT9ZLBks5bdjqrLEqCTsUSWykcSGXQ36sMBhzzi1tcxmPa",
  "key36": "46cDT1bktEXZ5Htci2uiyKEbgKwLDkkJdT1AmbiQDgT9JBCyjLFdcFoiHT5JVCn54Zh5DPaWteoLfGzmd7hvRajE"
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
