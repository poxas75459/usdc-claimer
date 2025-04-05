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
    "3fGXGNBa5eQxxSLtZeEXsnWX7zwSfAb8dbpzdUPjaaqxjQXMW2VC1H17AdLauviXk9GkbzhWyBYnD9LicpFJ95QP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XmzkRRUCAntQg2UmrWvLtnXBkyjSCXGhVKYqcy13h8aov6XDMFU7HneAReSNKHGfz8Zgwiz8szZaRih8bZCQS1y",
  "key1": "yAbcLeKJJK7eXoKeXub9wisRbc4zTcAUgy6B6nH8jzmn2Tj5hPZXujSXxYCJTqYAZ8hJTSLqpKx26yDHAKG2b3E",
  "key2": "hjJjFwfPMcWyp8K35yc5RGV5jPDvNfbRABDkeyaNZhLrthmRJze9xmVgnYCUwbesL22MgPNiQEbtJyerqVLUTGY",
  "key3": "5YMM1uWbA1usb9sdTngnz5NQaYin9n3upVsEzVUuta8VYg6e8Fzicdxr9NF87CjwFaggBn8vp2HJpWEBVzkbbtdH",
  "key4": "2TokAoLdWjyiSFekKwvFVEUprmpP83fjfBhq1aiM2PZjqpgxdMxaFScTAw5aEDySJcSsBUvjq1JaJPCVdVoUWbCT",
  "key5": "vCetD4p1Kj6x4Uj28aQnYA7jzm5hPRJt5LrEgErunVafkhQsD1ffz5QpiBJdBihQqaidN2PHGayzH1StcaEZqiA",
  "key6": "5vp4VZ93MzrBquYPnPrBwybudunoNaJPx1ZpshhV8dmBYg2WYEFecydewszymuFbb8UokLSnHRyC3wwdvXbvwpBW",
  "key7": "4Lz5rWbxSPT6oSiRbwrsekyDhkoBtYSr5avd1DHeG2gXDZbQRoyrUz3taiGoPJuU5Zby5QHZ7dftBHCCyuRnTWMW",
  "key8": "3j7CzYuNwUVjLee8NUfeD52Q4dMQ3PxfoQbJPiSUD3w9QX1Rnzb4iiHidSMTbVbaChwdGPKPyZFgUoaQP1UMhaxP",
  "key9": "3qV6NUxtU8vTFTDfLT1vV3aDVWDaxBmdJHWbypLfAqVWygokwrq2hGvPzt3RvWPw8agZBFqethbNTbnF7vqjCfNu",
  "key10": "2FK2bXT4fUVoVXabtSt1GAPUHja4z5v3Bm5GJK57dzCjiMGX3GUMgYwWefTFSs1CNjat4uwpjicMqj8bw2Qoq6LE",
  "key11": "4wQc7s22wMYXzuY5dD4DYJjeBrygJV3a8mAspqpXQLAQadt5gQ82Lmsnt93HvYrA2K9x9v6abuMBFsWNfhGpZao2",
  "key12": "3BhPB1zX3TEh1PpLaEeuwkT4RNBpj5W78x7kJnXSbukuUyorYv8Mnwy3jrDHPwdxVb9RRmyqkPD4AHUm97AcgyTt",
  "key13": "5khVBMoc9WksKHVNAGzVJByaSpFc8Bz7qUDrj14E78J4WF4SrzbYdftbqorXduycZkzYekLAYG42TXXsVeueg9WZ",
  "key14": "22H6WUgN2LzLRoA3y4SnEViaD9KRWQQ6NwpLdKqexvRNzn3ULzuk4V2qXepnvE3mcCinfrF9aJoc8KHoKUaJt8fF",
  "key15": "3xeMP5i85v1cYHzxSNf336EbeobZNamnSyP7UtaUf7uRycoPkhEuL8YL1PcVtGCvqc1i2h271W3u2cp4zf1Rg5wW",
  "key16": "5h4QYfQTSMGeK3s3QV8Lhk5rMjXonjGeWH4auMTR9NQtSjLUtfwBXVdirzZ7Jb7RATHsBWDTPjDdQj9pdeXWFAsy",
  "key17": "vSEfbbjhfLgt535bKC9cHzvpABV1Aoykuej7j5g6a3HvATxZC4efc1CrsNwqmiKJRw3t4gy85hvW5ByDhpNsyJN",
  "key18": "2ZF23dC8TwdQAd54KiNYqt9ayAMXvphobNFqDHYefqJ6Etd1HSGVQE4gc3hFpGXfrzDp3NZzSsFTY9K3xNE36T99",
  "key19": "3bfUV2kkCCnsqF9MsHvLPXK6tgFCTT376u2n3cUV617nmZSYyaiSXYjEV3DbN2mgwzF2yVswEzkuSHA9BQh6hAFE",
  "key20": "3Uf5yDvKc8MoM9D7D4b8gqY46M8espmYWchKdvuX2vFLeU5fzwucbrtGvs3GR5jXNfqFdoVQ3AALgsZGT1WoFxR5",
  "key21": "35BpUkJCXww3ioF1GUJrqRsKtRMEVdNRqqvSP11xUmyeGAUMuqHABiodQJJq9oTUPeqS39NkAdjrC3AfQDv4pCcv",
  "key22": "4pa2w9ENPpaEWVugNk6R3yHznQXNWaZ3eTChakWZ8tZnqwQcJJZ23eqGUp9BuesMh4ikPEknzm6eo9udJ7HgQfvK",
  "key23": "4wCiFRujd1FHWkUU8qT6pyV5WZFJgfLzyEfv4JmsiMHfAtyoSEQz47sdayWFP9ESuDp638wj4K2A6xevqRCTXhVE",
  "key24": "5jJKshWM6sdfhnogHz1UCCZdnPxfaJWWwe336tbuL53qKFozaTrw3kvwq9ojvK7zeQc1ZHU98WKXs5yeR1j3e6TP",
  "key25": "4knYwAecejezujztxubNxpDQLkw5MV3kbHTuztbViq1ogQCrvWgWTuseGyWtXsXgwMNKNv8MFZXqdgPnQ5NXxCr2",
  "key26": "fJZpSBMszSHzRCZrxDXk9kWEeoeiooQUpna1HRFcXiKNnZbKkSJtEG7wYk1ZemZVP9NQ2iv1p1HCQYkDqdZGs1Y",
  "key27": "ZFMc1CcVqPb7Zrb4cUC4P9253hx4HUc7W4mBcDCmZz5wFN3hbytPiqYPtZHDVmVcpEs25G7KdiFTSBYRrr2BDSj",
  "key28": "3TJjS9yVNjTrkboMgyRDmsKDubH93Bmb94VT2F8ASjhgeCYHGuRW4T8oM4JV8PhffKjMKYxccsM7sviXDYGD2gk7",
  "key29": "28njKCRsHAjBSpyYfZNQWDdzeoSkqpZXBWiipYi6qHGEq5KLZbCDXQk8mqWghB8SwdyN4YoJyNMPTQSKsaifbum9",
  "key30": "2YMoNBtP7C6Ewp5WBDPK6gKG2GmDuYcBwb1RU6QhVoTcgtPuMPvUhU2jnfH4R6XjiYK8fQNukJJTFZGhr5qg3QpP",
  "key31": "27S1k5T9N2cN37g5gNBYjMcYSGSoXLx3eXzb9wsGpWJwpuVtxd7BALo77iFqjWf6cECyQcgXLwLwxkHcosgqPDbU",
  "key32": "2qKCLMjLMBKNXWDBmexdrKB59arX6GoVoiRbvKHA89Ajx5PcykkZtM4pZp5W3vPN5gtnY5UNQErRDJTGLG4qPYSX",
  "key33": "61Tg4HcNbwVB3DzW2GSBqrdkdjXKFX7Pk8LxoTxGiKeFYN3YSdEHMRdaSurH1fHz2JXH6LjCY9Vcddj1kv8BE5HR",
  "key34": "5qbiUXjF4jswJwxm3PExt2T8iaJV6gadhK6HnfUKd96m2LUr93xmmN4yQ9ZixiDCK68ERyAcdE2ey8CUTkbUmvno",
  "key35": "3VK4opMutKA12TVVLLNYPVXvk5sz8xvX7q1PuoTwci4vkDw4sWRT3i2mK4DxQxiWdo7TxyGUeRWCPCnpRsee8wYp",
  "key36": "2nxwAKkdjMue9QyqW8aRMwbqpUr1UbKdwNXLYZCEoY67j6PCfsYUuvGvzjJhBhWGVwQU4ema1ZC2xXhQfXC17o5y",
  "key37": "5oBSiNV77YMsySrDzp39MWBWAeE6QZHNJNBtEpSobQN5awRLNP7sQ5HbjsXUcVAACUTzCETPV6fvq2q4aRgfUhyw",
  "key38": "pdoYQ31Dvxdk7o1ATvsnWCmRn226WxDLz4876ie4TkA3u5EDzuyfAQMtoPLyJbYJwtmZTiymfSdDYPJdhsCyQAo",
  "key39": "37uY6g4cfYw1tZo5y4F9h1fSFy784UVyUchhBr3Uit1jfi6DHxTqQ7vyxJswAsV5yAADPeZYiS1A2bhCNpThENah",
  "key40": "5m8fgYb4YZZhrVN4kCa7gWPCLLGjFsRkKSZs8NYfJxDKZSBcDsGR71u38GhZkAnbGCgCG3JQLoozptmGFJSY19AV",
  "key41": "7pYMwhwt1kPB4bdvTk2oa3UT3mPZyxQtrGe6NGfEJpnuA14RYjgR7VrmsVbadgLnVAWvcqnqWXUsZ5Um3crxdRn",
  "key42": "2jSva5MTD6iwdxvQDZtCYPd42mzp5oggiiiznbcKnPzKE7LAEHb2zmUm2ApvLsBgCMPiiDH3iUwZqCv1SZLojEXL",
  "key43": "3kPUu1GTYMHXEzeyh62HrG5hCp7E4524LSziKKdA3ZgRtf4teGonkCTS8XjJV7pAeoWDnQDs7YPJmA2p45PpGeRQ",
  "key44": "2mEVTZp1x9Z1gPtTbVFUhzfnb9x1HVGMu8SphJhhrtdpVzoPddJqzDGKryCodzQqUpj68J2DsgdygGEvaL74ZM37",
  "key45": "2dw6vmsTevUvrhDYseoJyJRuBTLS9EuzvJXdvZPCFtA7LPNfwASKFR7Wkx1ohTG4AGgujfGENAkaBgBwQYeGzTBs",
  "key46": "4fUqDuGSC7DwfBcM3e5ME5sRDcL9esajsHawF5KSpWmebNuaG82ioHkPRzrnCbQ9L682cnNBRKZcVEJwRndhrk7R",
  "key47": "4XiiDoSVBVGP2DjhYQjd2KWQhVUhCfaWYzfH25oeYNfqgNdXKvEJrGWg8ivUuTe1ji3Npw5LQ4pifEWM8Y2xVXBh"
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
