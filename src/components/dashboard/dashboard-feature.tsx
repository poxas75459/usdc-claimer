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
    "5nwgoRSX7yxXSBmYpbd5BTLoCrukmHr4yo4nSYC6cHy2SEP4wQvmmjpBR5TSUhGnDjSBXux5zQajACLtuep7jkpk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4usaT3mkVncxR2YfPqSP19VKzs5NHptMnyQZ9XWiE3tB2cgk9x6QqcVXHniR1NxxPVYiK1qCUuyvAQEupmbZMUTM",
  "key1": "4yUYCht5yP4aav64qs72XA2tKyBR7kMaft31rkDmfTtRku1H8NKJ4WztmAvChHGYpfq7YpuZrzmKRrVcdpSDE4Ct",
  "key2": "3igTpU2k4LxtdBB9ALtoZF31cerguoBJg4qYbApUP4fRHF6UAx93cEdbNHFeAV5SQ6fyi7dgXwyiq5s4DKWUNiL7",
  "key3": "7o1kdxCyQoc4enk1SDksZooTWF1MEvG9ScmAreeM1BpV1Hj1URb1xfWe79RHAbU9ejvJZ1DKWYsZxHNs4EBk1Zi",
  "key4": "3r1BZGrRdQQhwh9UXY5mNv5LgZHDYy2oZ2SMcwnMjm7cYkDBBukCk4Cq6NHnyGLZgMotwB9MLoZrZZeHjbmfbCNq",
  "key5": "54xrjBkC5dvvQ81EQ7VP9U1C7CAp4fAUk483qLmhDVYcW5H6Dxrm5VRBfpTiXdhyrFdo2zFqF5bQswmH7zank9TA",
  "key6": "5PVzJ2T2CfzUWFcvekDu7ubnTapD1BVCAM846jG5YECEi4wFEq1cMu28e1f2tEYZpECXxMJcsgATLoVqHbTCaJmJ",
  "key7": "4GyBx7G6SdrG9ma5afffYiGWmmQrfCC4zfYTyNmQaABXjvY2hnShRTL5XJ5mxWJ7V7QyMxTK5bq3uF2Cf63DGKWx",
  "key8": "5wupG9tqhWF7gpmk2mtKgqUsyQumUoKwvpjH1zB95TERcKk1XPPADjRy5aKUtDDc6HLE4Nni1ctLUygw21irNxjW",
  "key9": "4kFGsgfL4KR3yXU53rpRGzQXnE9HDXV7ihHdq9kBBh9QiC7nHbUNLxog17woRQxkrvEMXHL4hnkKF7HCYwsZkf8B",
  "key10": "kYkJhRN3hKjUxHwwHWkWYQvpShTrkQYNr5omy1fXi49M1FvdZUpwMD45AEEYgHWGbMNPi2zGppEpgj6Tg2aargq",
  "key11": "4RmgVUkRAeJC6CewVGiddXbpnAtY1V5aChUaJp2yvwCwCs6cEYgvNVqCb4XaxCz6VCuy26oaKkGyYQo37mUU9kKb",
  "key12": "57KaHu9X3ehUB2NEVzzpn2JvtCiniGPZCMFUipA5mGQ4wsUu8vz5bTCJi8Pzj3T2R2VqFiXYPWrDrJYAkSej7RZP",
  "key13": "2ax7EUiWbUNd1XERC6wzngQDio3b3f1D3hGpNuYT4N9V2VdCWkibPASS5GFVjdQq9rZ6kzZ1iomHZ5yeYzbigeFo",
  "key14": "2GcBR37RQ9taTFibnyVVH3PfLQHtgRarRjjchNJCUs4fsa7y1aVKKBvgZww9zzdSXCGuLZWvEPN54SS5Xc6zEaMy",
  "key15": "3KPD9A5fcZGpc8zcmzfcTjYxsBe6knomV3WosynRFPCdatp8Qpw3hL1XSkpHFEChiKLgERHW5sFkXRCqa9hXep5q",
  "key16": "2Fo4Uqgx2rh2isYkiRgbzinxBxrUtVFcLShCyVse5VfpJAXaKfbhAmPTheyoD3y7dLYsFxEr1KLbqc8H3hc1UhCE",
  "key17": "2AzpZiqxp41dHSKYMzFHHVvcjaAbrMNCAKBhvb8ctEJFPdg5b6So4UqDr7ifGZniPwa8vLm6zgtga5Ht2EMMQpYB",
  "key18": "uKqjUpmx4m2oX2vpnJ4cD2CY4ktqCmKf4F153UWz8CpzSLs96QLw113YjrkLqk7SoCb14ozXfQEhnyTygDNNy1N",
  "key19": "2YcETX3BdEtputcPYm4C33AdXmD9CaP4oth6B3DCT1wAMRYmfdXXUUx2Wv7HzH5EYdmUUUThVvjkMbbPTNboderB",
  "key20": "LLGsx6q1FDYCu2vyUgnyWNonXyYgBhGHZaDmJGFBJyM16NvgBLv2RL1j9wtZjkTce221YuZjDLDNo8etB2QAPnp",
  "key21": "2UGtAuZg73jp5uQp3xNN1L7YHwTe2zNX2skfPZ3Po2Xe1KxDnKAvt9DMysViKDgjPC4YTZePFZGnoH4Ue4jVznUJ",
  "key22": "4bmgvXegtBjKw4py2eHrMTau4b6DXCT6uDmKe5HzM6HENZ2TJMYrTEZn9ShAj2DMvybz4b2vYA5r8KUeBpEjAMrp",
  "key23": "597dBKFK2BNupKV5c5biGeYnhSEhGCrEdqi8BYrEzbaZgnu5WmZwUarbMB6ezQ1TwCx2GrdbLLQ1yYRHEHUiLBj",
  "key24": "2RU2TMLU9xEZmiEeJGzHdVE8hT1wALMSX4fMJ7zFRkxTuUJxQPg7uNvo2ojdAWnyXAr19gRyJ5wWh2bmkiGEfSca",
  "key25": "4LTnAmf1zUVdxYdrzyzZKXBQHa9YaBvQJSUXdbns7GG4jDQHyqBQp3PVLJoSYckPTuUDrGAVnGpwVeMcisSQ4sY7",
  "key26": "5Ub8wVU9QEBPd3nfpVd1eJbwJJ7BRtKknJ4mfygQ9hAiJf65WZohwKfut4guoZ386mo2oavS91yvFGoxvjojabyD",
  "key27": "23vL95AZEoUjVmh4XuyFKActCx1LujakxeLbp1ZLpKwTGPviLxeKbA2wiV2U1VitPkepYXxsEHnB8W4ZUHMS86N1",
  "key28": "4sVnby7CDUjuajYw5s8277qRqWW2GYwswT8zEUEeCEPEbQdH8kZwrddfkpbcJP36Sm1Pz8p62ur4cTz9NL6LDRxf",
  "key29": "2fHsN2FYMtxzSdkVZUjgQdVMCWEk78DPiZ7jLiwNUVnMdVbZQhMYC1tGXwVezwbYXD1BaGCcNG7r5W252NP5Mh8t",
  "key30": "4qQGoATc5bCRnYMTfCWfjajkC5xoui7trapTkChVNHHQR7RWFNmUsLEZQai8EgzpXRumycZdJmtrz8zobYjNCBM3",
  "key31": "siaR4zk8KF1a8dcmaLCoU7zyYcKcepcSRhJUbJ2HYUf1rpb3Y4G76HrG9qUz9vJh26uBx3E6zhQkBhaNn7dq7UL",
  "key32": "2NgR2WKpDcc2uMgzJrDPPHMDjS24rFfGa3RcPXjDtGGPHwVWnNhReAKegRND6ndDsbfhWzK8C3k97qUcibLjCosd",
  "key33": "4ZjeABtzFHMLX74bnz3SWagB8BGNGjun8tz7QFYkjgnWhMBTZ2v87CTDhaN1zJ13zrXRn7zBZyjTEmCxEuJi2U6f",
  "key34": "4tpTUmaGUh9cR5m1FXXKnguiqTKa52SmzrCEm88kHDpNUaB7Lvcbrh35ZS2nw1UzFjnkL5J73M7V8RFandB8xEFB"
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
