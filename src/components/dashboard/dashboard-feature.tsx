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
    "3eBTp55ja4iYAPKPmv7g6BDWdsk8Tnxeniy2KnpkM5cyH9kZFPBWagXLZupe2TfRzXKauuAv1kg66QF8Q1c6aEJT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yLC8woZVqsqeJ1ekHfVxzSJjYiJWSNVkBuzAb5dhj5H7purGrvwh6fbWENh3cAcE24dXCAVoaHPS5Z2p6VXfCu",
  "key1": "4Xv6XarnAA4HZ5Gpv51dkoN97DpaXZye7FcY3TD2iwmQdEVrdcG9nxjhf6LCZATvFT4Lgka6dBsJExNh9RaQAUp1",
  "key2": "2ZQELexxAXNLBKjubtGEoC357HrYD3DTAYwWH5Qsu8uej9wbZNGJ3oaJxWRAtnfPd2P86oNBQg9BbHTtA2Lm2mHC",
  "key3": "4c4zgofZjjvfVAmcap5Gm6GxRz7WaRTRAFFk92Y8MPppMppkQN8ceW1N9qgLzGDXszxzMbQh141sZqta3z9uoSJM",
  "key4": "2FJufxjpajLfZvigdqNK9ut7N3LhAtSs1m7LebLrvdbvd97kcoekFKGaBMd2chYPAckvXXaBUegTurjxzzN9wFVa",
  "key5": "3LuGyHG4s21K26daW6TuHTkXNYvVECbHVKkVEohtAzgnRwDQ8myRY9AQtawwbxXG2rkFdnw7dZ8U7LBMQBZjMfzF",
  "key6": "5NwCkv45dmdHf9Xv9Hfi4eusWipZYPpfTkyhhuesLkeEHqUMRv23nvdy1X3d3e1KpUoAs4Hum4bjGSAeeeAMizaX",
  "key7": "1pxVttjWWkKxcHmNU9AEoXFYEKp2oYdA8YbKHfcERxxYo7ctFLwZhjSAHfXX7JNRskMJNALX265ks8pyq2derfx",
  "key8": "3v2zSLffe2EZviabnxQg9LufX7MLdyNip9FVdKNXSoEnn3hb4NgDrcXCSJPdf4pWLaxrw5ChqgqdkVPoyMGDQVLN",
  "key9": "3cppqPVKUMVSsDJ7VTCtgoVFad3SYk43pEmH4ZkNKJ32EM6DAmisBrQXB6myNpFxnnmjjZEDhjaVoJiyVDprTutU",
  "key10": "45jhZer9zxrvqTVf4wndGQJuMVR2CQanf55VoqniKXT63j6knzU8rPBsJ2Pajh841XqEH1Xv7we1xuTmyU9KEG6G",
  "key11": "3HaXWgT7Tj1MePQ5SwEcmD4e1KPn7q39hLZ7pJcRwdSErvetbUN57yq1S86tQVvMv3WaURNYw9fYJDeimtexJCvJ",
  "key12": "eVjQUAeQpRwvKAD7KAjw93KVQuXHNaqPHXMAuW4YVgPVDhAT8hPixyZD26o2SBGwYpTYEXGhbQavptA7PntNJP1",
  "key13": "4SS5rPN9HFtVC6a5wuTtXrzbS5Dg4iqgisXfgnSMb8BKL8TYPMQ5f7i5hKXhUvki4unX7sQBFdjD1T2nc6JuoEEJ",
  "key14": "4exSumcjDLtG9YJqjuNktJbBTxDxCNtbtwsRKban7U23bqFMABcxNxhdUQsjSvxmh1AfpVua3CW3LoqpWkwMLc1h",
  "key15": "33aKMDry3GqSobXpe2RfRmKCXFPttMPnpXvN7iz3WuUXbeeWYZL3uaT1oHjYUfJcCVaMyn2r1bRCiGEYYAeDidUz",
  "key16": "S12R8UbcVmBjTYRJJdq5ipfKakZGKqQMhVxrULqunYpzn9zYw9k1tJdDSgY2rYyQm6QHFVLDv9ujgoeBttfMkRa",
  "key17": "25mJJGHfS7FGF9a7jrQ9y4shAfw2Eq6izsQtdSeF789uWXbfCvWoXRRvh9P18pJLdTbG4CZczqNSyGGC6MYSN5UB",
  "key18": "2mvVjXsPz9EVPKjbUsHnsc3st9SNL7BXb57XjBupiWuxas4G5rRJ6jKVtTnJNzKm4spkwDPCDqFT6trdJRjL9sKt",
  "key19": "qj6ECK7reBLqADiPZQr5571FkaqJdXj5BEknq6fDB6deAetRXrGQRU4poQP54vdtapZTU9iRWS1i89qGCeLkxkE",
  "key20": "4gYgPwV3Yt9AvuTdrDSwH98pZsrj81egF7RKts1NhufKbygFiEdkKCkMU59pHX98ZrMxpSyiebuhgPmfEKkadeqW",
  "key21": "4mmaBXfwqsQZqftgBKcVJ9Qg7wKwXjM3RxFWWFQyyhwmqXM71gmXkyu7z55QbBSMKiG6KdZb9ireG7qemipTfFbp",
  "key22": "3My44tnLNp6HuRsTSwnfVH8xXhZzkU1fUnpigDJv6nHLhbVKnGevH6b6Wziwk5JHiGg4KvCUgDsa3mBV31HYLo2E",
  "key23": "246UL7bygrPSe8vvKCeeRmzhVCP2R7fQ7dbXjWWkDUJVvkvmFpWMXu76cdNHXX9NBa1cXDWtSi2oinx5pwBfUBqW",
  "key24": "5acfh9LU6ULLe5GXocvWRd3f4Zt7ScohMQT3rsM9nkuBZStVvHGRz2ngQrUhtPLcvjGqWJ7VW8LF8z7SaRS9wkaM",
  "key25": "3tnx3dCUN1quK81L71HLBBNXiwYzq55c3jpwbsyfRXCsyzBJKmQYqArm1vHfsNh92LrLB6i7DDdt2pY7AfVCgmBm",
  "key26": "57UQrGNQ5tMWnv7nVFK9ggMgExDXPakQg1d39QaNE5EJ7aE1sB4Ry4MiN3zBBqvjFfzBqjvzPvhEosd1hVhLujoT",
  "key27": "45hseXStd7QY95Eg95BsAz9MnDW8PkupCWsZXbmgycS6JAzQ9b8WNGSTphTHdHstZysByhMiufFy5uNgpST5G26f",
  "key28": "23wiNiUQ8V2u5BxQ7GPudDMgFtcB5k86iVL53Y6gnKdFtbANSsnYo1BHWfW1oLLQ43UDRxmFcyMgxdNhfCzpeuwX",
  "key29": "5qRGavTfL9XNrebwGCu92XfDzWGCzNFqiAn19QYqaMJVwsRr2btpyB3FVPsWFpuee4LYEJTT4SQkfXMGNyLCmetB",
  "key30": "26MTyYXXxLpaU1HgdKX95rekQjvMYSrakgEcECwneLF1s8yiNf9kTzhk43oXH3ahBb3ucYwq3nHavKuRRFryRoux",
  "key31": "3mYdN94YpDUoMcDojR3Co7RfBqJGANBh2kVLCrKPNzJSwFPtdYCyissjNMQL9Hqp6EkwNBU3dbv3Lg6hNWpTrySp"
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
