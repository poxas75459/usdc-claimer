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
    "5gUKP2LqUHhEUPeofxSEuEBhB2QC16R4KXcMsPGv2nBVnTSKg6mchC3hPQxoTbyvS6gsVd2QE42prcRzgGEgTeBi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46rrCoVcpVBFYLMouG9Twi2jGzRKdCVf8fpg7hh39nPiE37ZoqSScBLFHjCik7dwA5oGDvSgMy7cGEF7wicrEHHc",
  "key1": "4MBoGjbS7g3nrK9oACy9fbHBT5fMrARcUSeqbiiwyzKv1hxX1gprAzMoAo7duVuoEKySesBQAk731QN7rZY1K4kc",
  "key2": "REdx1NBbTNi2Z9YfFaS7kba6JTMEmsrnCMC38iUvPHpETNwzzBxG8vQJkBDnm5S3JLUpa56o2vJugt5jnYWeEJz",
  "key3": "2u2PJGdKoNv5Fc3Daty6wyoL7QjovPhabASMCRZx1rtcm4mxyPWUDwLgXxLiJvGwSyFuKg92j8KeiYXRvMCXHac7",
  "key4": "zE9PmSsdKkKTCN5EjUuMoTYhgSQUwpyv8PevwVPcHeRzo41DitJPDyzbGwSiTRhyfLbwhnHHbHs3EGQRJbdAXqX",
  "key5": "LyvDS1cPVVVTwttxXoSNxkWjEneN3zdU8ekysyLRijsP3cdKqvavQtcwXuzomTkLcq2CBauiwTVyT8N4UjoeF9S",
  "key6": "5FTS22wny7Deyzo3cNpdc9rmEKXBy1z8XYNkaiJogPtnYie8zdCjkf4xmDBxf269ajvMSoZcaKe5kWo9JZC57edi",
  "key7": "2KFjSGQ7Wm3sQ3T1t3SCVYxbNH8ZrtBaapTMkLwnmArseSLPxQmcij1mdHVLsPzKFQzm3oJeSyT6wB4Xw9NGqxNx",
  "key8": "NFF2S454Etz48SXDQCBc453ZjQ6eHyfyDx9TeXdffVcimiSW3pvfuZWjHqbNouypEx4caxcZApXTrDxxcDjTfM7",
  "key9": "sWBRvfbLat4cJg6PrA5ZnaWEtvYRoPvx78gH8RHpc1pLoSWLCe5HtYWzsq19Rd8eMLvkybUDLAmRdDvFRWZ1H5T",
  "key10": "5q5nLV175cCf7YoCnCvALVekH8Un1zNaLdrSE72uGuu91RK4TubX9HmbhPdtXhjGLT6NB3JAq3f9Em3uB7ykYGGP",
  "key11": "e3wTBHLRprMAiEwuv7XZSYAhebUKtuiEWbb9VBW1a7rXkXRbpvc9NPxUvAmXapDnXMMxzSgFrqCU3BHzXvYeQbf",
  "key12": "4ywWCZg9xiM3kzPhbA5RXpJU21rDQM9RxiZSjpDLRviXirbChZ5qKhiCxjkc1zRsNz9caYcewkmJxD6NfTpq2Hjd",
  "key13": "E3DWBo6Lu4kPotEHxVnkB7D8eZEvhiStJSVC4sFBs5P1PXN8tbzZQf8NP49NDzc8AA3mqXK4ZWsdwMisvvMpQ46",
  "key14": "2LMx9uPZNan3CS57jSm11bM1uxqTZrC8TfQthkczRZDD8U95qd5GRG4D1qAtGjqLPFPhJd25oZZCNM6hENZ8e3de",
  "key15": "4LEU1UKvq5AeD2g9Kh1uwFL2dEvFYviUnx3AVTB6aFbFzapLTDsuroHgdM4qYxcbvUGxxWnMJ4WUdkmPGHZ1TFKG",
  "key16": "23YcsXTSQRDkg2mgPZs2onFLPEct5NQkifJxKumZ39a7RG3QHicGTYFTjaUqaut2k7fEQLAsnHx9ucVLUuFhhEYA",
  "key17": "5ffg7u3nxoNZtg5ANkFreKB1nwQx3Q9FCborhPkpfyRadot7b97vKZBVn5esNMf2Ydj5sUJtYB1TcxWFoBXDFk1T",
  "key18": "5nXxoLFMNxHGgT6Rtrdb5VJusRyxbjFe16YtWteGVyqLvkuhHriCZ2EPTWipmPLC74xmLn9Z22MK4zydfXUrZRs3",
  "key19": "9941GKsRWmtaGjtt5fSh7LVEvDxkoSfbBNfGEKa1WrYzjvZbMX2pEU7jgHsaPwAgk1UjrNV1VBAZTcfNAgfdmHQ",
  "key20": "2P6ZnxAPv66KYPAmwBDkuXK3sSEbKD5P9kCcmH4uHYUQcwiQaQsaqw1K1Y72MbpZ8Pmc4pBt3KQzmCdM5RGCBQeW",
  "key21": "42q3W9E3CWyifLCrdLhrDbcFc4jA8H33UXn9wYFWdPVhSRMEPxZYVhmPKqPWUPY4LaYi6hHpeSGp17p44LBdGpSY",
  "key22": "2YC81xiPZ5yFW9mVi5xM4WMZiYZsYHyxKdJ9vypEijQD2YqvjdTkMiFcPPMfJMFK7k3N3yu9GKxXGnjDeYNK3Q23",
  "key23": "31aL8qKqbx95eSP5vtRn9GnAjuXqHzQjoeetkKqgb4zXRQKktfCvTzgpicbiHtATQChRny1KWgy1mqSyEHd9BkW4",
  "key24": "4xN4PE9ai4WpxskEevDfRUDow92hM6cNZx9r5TA1CTtsiRystdxEDB7u94be4XE1ZFM4QkX5hk8SnvzkcTFghG32",
  "key25": "29Mn2upYugEf9xcaJ7G1BRuTHJs3NPo69bEHYxiJmj2bxxjURxda4brQkhfncJAkjLcwzu7kRywNMQtpPPTnMaft",
  "key26": "5RQWJdevrA2y3diZcQpuQ8cjcKAA21bUnwdqpoKjEQi7nqNzXNfJGj35uXGokrkzAokf2eA33W1Hftj5jhWdJqA1",
  "key27": "wWQmd5Dbw5xHfQedQG6gEk6MuhTwfhSFd6GNotLvLDXjp5SYgqB6ACzWaMYRbjmqpbTiGnHWFHusECzHfB8zzcc",
  "key28": "2HG8dJ7DvSjSjZpL3NB3bRqzknCLyKCJ97gG2TeQUXP9stUXv8LXXAcZpLwP1wo2pr7rAvzpyBYAZQ7yneh2zxHJ",
  "key29": "3JBF8fjGFxDHrca2WAagkv7cjSNHGLuJ8vxftp3kekeHf8JBjnXyhqSTFPPTWYz8mYWHF46Y6mcpBuUyagvWcqwJ",
  "key30": "2Jr4fMjCX5dFUkfC7r5VZMUoHpn4qHTdAH2X7pwr15dJgT544tiyZxHi3MCbePBn23DSyccs4N1We94ntUxnekzw",
  "key31": "326pNY3vieB1GRnmogpAG72xZEo2H9ryKthbAoszg5YvD2qnG8ceiGH4YZrBKLM3FWM9s7cuRpXJ8efcY3K8HsEY",
  "key32": "5vTSNhn45PS2NckP5A4ToSpq6BQp699DEALh9EMdQxMWnaFy7u8ysaTMm9ueBfZNVzakRXYWGiVqi3Jfs7umuA6b",
  "key33": "4GTuEQV3C6WpcaC3Wpag5QMh5WQdMm55P4E17opy3aw74Ju8AtU9cFZh1GhW8AaxyGZg6ZKvkz2zYYNLN3smB1gt",
  "key34": "gt7F3XE8WCdmzpLZaTKF8ULRUB12DswUEooPER39jagvtCfnkQ5hWSbXtWyKyVnHitPGCviVcPhFJpcJXXySnrR",
  "key35": "5Js6p6m49SwVw5EMctH4Ui8iReNauWM2EGdeHsizZDE33Ni3yZbAicVgMz7qnn1RhPZiJG8a5vJZTiABKrA3VoHF",
  "key36": "5zsw1GAamkMRaPU3dFXF8t5HVumKNxPu334ZEJhMNpHcuy7uGSrh5W52AfnBqe8Fu7etfRwNJmNxMbmC6HB67bfi",
  "key37": "gToeJZsZFpJRufRtEJHGU4cRvqgk5X2nssyREKvKBAnGJNULvF7u8Fh8ddQYGjqNK4hUCnFvNefdBBWeMtVitAK",
  "key38": "8c5RUiCzjn84FA7qZHLVNhyJ2oDAQTUvvU85MrbWJEqubJTSpUpoMuchWznNZMHzwLEULHsKQrESs4Xci3gKrWy",
  "key39": "SaQAb6TmBmFV8MyEkNaWVj82w89E5nfYGYMSXvfrNo3hRi7fNFrDaixCb3mMRKvYHyKCw1AbE9K9dFKbqkrtCYq",
  "key40": "4UxMUEFdHw9wwTSCNRgXusZcc6HKJW5YE2LaxDoPmzhZqiyjJW2bY4cwdmKjHJNJtrJp5LavuyHwcM4FYweG4U1D",
  "key41": "5nDocWfDZthEK5hUiqJV97aJYbkj593PwDycg1uLHSEP24tA4emKV9eNuk7rUoyVWxeAi54SW2WkW9vXAoWVENh7",
  "key42": "5XEAWiJ8y3DVBqPRZH2DFJTNsJFRg9dPh5FLM4tAPfEh7Y9WeRhfCEQKfA3CwR9hHK3grCqYDnr8aVybgJJvL3t4",
  "key43": "3gRTPhQcBtreqbcnRWE6cn9LjbZ1hxf6S2nARLQEoBqZF6aDUx5FrDkrHDnJyGrmKv1uTUHh3GsCrqydpuwWd7VE",
  "key44": "4VLFHx8ujzwAkEX66qZaEskNtLyfL8cLmCvVXxxs76b7PyQmnvcyDJDUn7tb28ZRZuMLehtBSoUZzB5FmfUkQKtr",
  "key45": "3rgyKEvVLCV9PDMPeED9BEsMgoBK1HHa8NEKBF4UTqwpw2QiT3u6WZFp7VGjZoNzCiacum3BYs41bgVBcqMSrzmx",
  "key46": "4HSDucakJomaRXgVJ6pRCk1jhwTMAT3Z5EQSGUsPQ3p8zjYAQ9jBdX8ykKK7a7AnsjqdrnT95EpDk1QgX6bwkQR2",
  "key47": "smJruErciDRduUVup8X7UJ8CHdF4AiCFBAQ2abnx6ehNwHMwWRRkijX1xKhSmCQETeUWLmfLFq9E9UwT6FJieBf"
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
