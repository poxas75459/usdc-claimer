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
    "62yn3eMjZoL3fKhPBsMZKagAghHL9NSDorukkbTvnuN489foYbhtQZoVAfmYK8FpA5rakYVUD4DDHsKpVfEo8Pwu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qxQ8URshqFEaeMgARRmoaZyp5Zj3TsLqvTqB9WT6rN73zf6oJ17SBsHeaEMkEPLJTAtpFoF1YFrNR71YphEJCFB",
  "key1": "5bsEB6XuU7TRtTCwT7tUW1XcvgSdgeB7RX8V4u8xWnNR9CNfkuz1E95bW8QDMTmCBvsWyo39TYRGyPyJkjFVj7j3",
  "key2": "3ixd77NmjhQxpDyd3ohXsmLnCyZs9gtgfHdRhqnge3tJWwCqKt3q8H8wj6NGJmjzt4KhXHwNjJaaLkcqzxjYepGr",
  "key3": "23428UbsMCENYAHeKabyoujuMUDkCq1Doonbiq8RoZshtRPX1pJrTtALafu4Bn3j2UCjLd819vUMLozn5NVDXkKg",
  "key4": "53XFfhZna1WpaJRiT16XTLrnQus18ZjQfbob2kURSmEgZpqLXwXKVJonvHzNZRNDEv4RnGd5LkfPDQ6YWjEXnsPp",
  "key5": "4CMo2S29hCZyevgjQ8BbyHshTcnZWeFCLKG1QApJHpScoYQ8EF71vjibV4FUZU138L3MMKMoawMmqdeKS3ThGa9i",
  "key6": "wvWxohQqUAiyyRVRt89kCoxhcFYYjgrW3By51a19vDrNj9wuZrJ3RErybKoswhqEbmw7pHZDBdkJhW9fmP8UqM8",
  "key7": "5DFfffHuo3yuqan4kBRoZ74EDDLorV4YRdHtYspyKg1xA2CRRvaV9xbBELKawKKABrk1MyUfeC2PEckMezNHYjDg",
  "key8": "zmPR3YQGkeeEQx8M9AmDfBQRkzGhgPWUbvmw4gzXRhqYfY455BxPezYHNz1fASzpTwTZVVXcufijF35oer7KrzL",
  "key9": "38udvJXhoZFvNQqnTBdBrF2Y22r2DPLfuLaHwBjJFWKHCeqdHnkfdMZkTHzzapL6dPC6BCS8FXrNBPQ26DGZitxt",
  "key10": "51Byr2Z2iK6R5WPeNEzeczxiZ7QugQJPZsUJdmfpDSb2QVVujcokx7r1MsEyWk2EEK76UfFrkoYmCzLHAofBe6Ym",
  "key11": "XDqDKwJVegjv8sVUw67HAAf5KErwXgoGHZ7jg1V67qJfR5DRjgvCPQ9LUv1D4bUFXMMucsXc9ZoUTAqAFuCshxf",
  "key12": "62Be1hteNEx1dWUo5Gr7MzW29GekFGmKMteKQjQPnEc9zb5Z2r6hviYkGBZgd6cZMuuyi46fbCE9w8of5mTHBLGx",
  "key13": "2W8MTBAFAvWFtbGktv6qVkGC2ihwyG2GQnR4j3uSMFPXcrDiiDeFk9AZfYpMgvEsKhx8mdoNCTVWpSMzsze4EZ7a",
  "key14": "5CKHL2nHCZtrEAPzjsrNrUbJ21geUb6XH4rrEyGvMQxXhdUpWqckAN8cZLLMq9Wwdpubd8RxgLenzDXeDToym8RY",
  "key15": "2eMh94nM9MAmiFj9q66fFbzqqR2BHGYSPJJeWEcthHPQJZsYwtGmTLKQJrM5tvHGDnrEudAvJsvDNbAsCx8wnE3b",
  "key16": "4wuLXUcoVRsFvoav1ch3PvLurHkhFKdnBcsXhaqu4N91Xo8xC6voG15GGNkFsHMTFzn9NPGsGThsLfYE8QAdw4bN",
  "key17": "5mKejpYCUq7Z8W2Q94xFjckhfYgYGVGeb2Jze5b874Y2ngGbHhwesamkM8hCUh3b3DMZkusjiMWLYUkjQCw7aGyz",
  "key18": "54MVvGjuFCAJU6au4e2zSiiMVTC1uMfg3Ji5BvzujFcjBe5EZEeZXMNozGHPERaXBK6mNjnBUkXCdJ5chCxzCb5B",
  "key19": "56HAkDcWwomVaC9Ha2AujbM34ZrLWqqEY5UHHi6n9nQxE7818LBuHpc3wZiZHCAsTzUHEG8f4pwFEUpCU21uFCUT",
  "key20": "TjL5PtW4ogT5dBtcCQd39eKvmiXd3ex6mvkFUwoGnNN79EAQRQZnU7URGC3qEj5d4nGa5z5EtpwDEakA7jZnRPT",
  "key21": "5HhVw1aqFdHaKbbwYMWS3QLkv2ZGyUCJng1AKMvnmik7QC1gWq47dNm8pPpkoUCKEhvPP7xuJG8wYHuuuxxKkDup",
  "key22": "36fzCiwAn4UJxAdYUxW3bziz1zNAj3PiF3fK86tLbqVfdG5zPsfYcxGvK1jxfQkhomkADgYY77CZob5wLjGzvaX5",
  "key23": "2o6SAUUUxdXp2JGENDDY4PhHc2Esh4QMpdYy7og2QfqH2LPpApnCmY7ZRaxy4ub21BHubb3AQJEmVW31jh9JuYTY",
  "key24": "MqjjxaXPiJJFN91XFNqo47X1hvwzezT7VaVHi4EtVc8iZhfA1UFyxJmT5sHEsPG9kqYhkzHNzqvqjkz268cygkK",
  "key25": "2p4sYbGwb7dTSkiDejquDhD5EuvoJpqML89WdXPpNfHvTkUhy8YC6hKitUvH8vfjUeaV6GyfJVNcLuG1BLFmQnur",
  "key26": "28VkEWhfiPt7b2v5onaq63qsYVaA9TnWDzFp8mngygKLPcPMkDE8JJd1MeToe6nrMkAHbYCULAGsCTX2A49eRShK",
  "key27": "yMii4dcj4UFtiA69di4jvd7ytJPf5x7kWiP2EnxYS1GnPaA4zFns3isTJbuEkn3odRQBrxzs1EDiryEmdPX93rf",
  "key28": "dd3rGgQysoDfsnXJehMDe3gU6MAEsbkTs68eHRHi4NNGa8FMe1hNgiQ3DkEf9ynumKvTVWeLb2eJWdAfRKug9Ss"
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
