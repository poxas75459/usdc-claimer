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
    "3gaksKmjcYwjvrgkivQrwgbxHDnY3zbkVmbX1BoVqvUAhd1PdrgFdLBmcB5We84hf8KfTCAu8gTzyEv4BeEjC9CD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MBD4e5teKeaXY76cY1cwRh7CZfy2qZqPbuJrBSY4A5RyzvP2yk114fMbKn1ocdwvEvgTT366fZihTKgTNypBV5K",
  "key1": "Nr88G8UyJhioVWNyhZyytsxiCk7aHSR5rMKhEQUn3H9J6jEjuv8CJz5KbzkbfdkVoSrYegURjQ918hGEs22TjaK",
  "key2": "2pTvg6xWjngzzzXYWdBsB3Jg82AXWpUvUhM1SUQZBPQEXdjUt2ANY9fFYM3XCxzTyko6P18tkksL7WE5dr4UhY9N",
  "key3": "2JPJzhwzzkZYf9ZGYF1iWsk56odyH6wjjU2bLm3wscbqrm3iYC6rqA1ZMacaDYvvdSGvbstHLNKVCvPf8jQRCJtN",
  "key4": "4HSAGyPbQzbtd1kpuNf3XaSkJoZxFWKQgMJeYZz7b3H9pmhVJCsdJhvsxyRo1Z8E2tm81x1FZ9VhWdiQAmD1uj1B",
  "key5": "34ZkPHfXCfPD33JxqCY6geHFfFBqaZ3vcaiCDwKyFD3WcrtsDfcvjoS4NN243WEY2aGFoRF27pVc6eKeg33M7BgG",
  "key6": "3LTb2BaqVcVTs877Y8XnPxv1Di33XX4bZVpszSxSnRv3C4CxzEqzdxCCeRhwP8N1nrjdxUZLY66o2WyiDH4xt5A4",
  "key7": "2hBHPP1p7Ps22EVffmFaZZ1sy5dLZUnEoHASaprPn2YjX4HTUa1J5QiPwRnyYAmWSZJLaNTHLYbR1vPytk3ZtJBC",
  "key8": "2xaBNkKa5dJKbQi2hiqkL35HaJUbdX8b1vXDVMhYHrGR3XEpqJtC1CjNbVPazSMbkHKUNzptz7WURDsfEg4oWbuH",
  "key9": "P67m4HMc8u9ovVn9ENKqsGhytCyBva2D9yWdQEZJYStjQaMuKP47JjmDkAspP9Knhp1eSxEJfL7SzPsWpsU2jwf",
  "key10": "2bJBdbaEQ3bkmVm5jDAFLZ3FjeJVx7WDtPMGQmGLBJ2LZMMK7ynrPrGjoh6gbfyfJti9tWpJiXcKyhkVC8zeTTDF",
  "key11": "2MKSkcVuxCXBQARskjtsKZFSi59gFonZ55jVehFRuTQg6pcAHcvSXBvhyuk46Z343eYtAzaU4tdt7igwUtBF8vM4",
  "key12": "5aJZLkDWX7oisgMoBAg3Xaed2mQr6NekJcR3q9GfET2SMg68sUAHuVVxm6MJV1owStLTsMSFoEsu8DZ6ZxSNoX54",
  "key13": "2deqWeA3EbCHwEFVqot24Hew4MvhTzgjrwNfXoYufV21sr5oXcL9vkTkCEb5eGJP4hXB8yCFHVbCRHCM2nh71XgE",
  "key14": "FaQSnGBkfQN1ULLeHVgk29zytzqAzDcukGRRnM3n4T8byXwcdwxmPeDGMUUikN6Jd1rWpvpcWQnGk7D2tZvFxU3",
  "key15": "57ezbKrsFbzyWAKn7X6ji1yUAM5antbiMPsrocyN3kYg65jCCMbnK2eN27impPSwWjC2XseHLtQ4KjUAwEde8FAx",
  "key16": "5dZSU2ZPjugLCgRSC3TcDkCREZ65s4wpa2keg3Dar21ZzxosbXvmqxZyopjLsBZJDPHP5LZNtTspgejVTvbpqJDA",
  "key17": "RfNYihUxZ9bd1GQUX6KXXfsJXjd3WHSbxG36RFtTdMAknM28JxdKTDdhWRUbyNavBGYpDLJhAqPgmuCc4k2xzLz",
  "key18": "3CPtQeZhFFUDzA6xpSojQe1uQuM6QjxS2wwM5FLvosnH2jgYLyveXjE8BEVJAnCDQjCCSEU6WWMjqE7EdFcE8kv",
  "key19": "k8chpcSdtT4B7XSeziyKEJZgeBviWV2rZ4nQu75BuBw4uSkLp81b3BCPeKFFHBbhYc4nWX2d1mnT71Am4TN21Ey",
  "key20": "58vGa3xMTP2pnaVzqD7KofMyinJ7JeZEu7XDKeyr8yRmdkZFAecZ16tjCSpFAHZzCu2p7oNtngUyTevSFZHg1o36",
  "key21": "3rmAMLv5qmqH3v24upGQ3TBEaA9GgLj5jz4Eqf3uUDgSWyEUvEHHERUyjdMJzzHsV3cYq9dyqDEqVBkQdNszR2yg",
  "key22": "2CbQBYkLkfMFcdqeXnMpSTwQT68SZmSuLGq1JcbX1yN5GiQ6sfpr2MrEEyGggLUH2kF2oeDTc1cgc8JQs3Tkg9Wr",
  "key23": "5R4F7HEJQXD7Wy7JuBitrYJCHuYgTX4yudkxj2DjS4LWmtJfP8pq8xY2PYik1XCSFAG62Z5v4mcJEgHZ9RKpSmyJ",
  "key24": "222Z4Jwrt34KzKvgYVCv9tG1M8XLQbsKbB5ZMgoUkHpsuzHx85fUtnrer7bdfHTSdMXjTbCH7Bp3GEFWUrNbb3Rp",
  "key25": "45L192j2gVRthm2o59sG1xWAByzXQKGL9GtVWN64t1Aap3QFi1QACvrThWam4cGQRxS6W9j4arfxxsvncnfWdPnd",
  "key26": "R3gPWY9GBcPgea4gvMe8MoMB4G3DjNQejQd12so8N5LZ9nB3nucZQ34GHHfyKXT5dU6X1D978tuDba4oFkMBYyD",
  "key27": "3UHinGYfNze7E6qH9WawUqz7iLw1Di7HrY6nKi4cWnTADdGwU5me7a6Brn2jxMZjVwtGGkHiUhHzmmJ5wLdsg3t6",
  "key28": "2ccj88M2KYC3UXyvWBTAmugScTKED2d9DJwh5s2CWJAkLnQgh1xWMzyagtrbNdE222B3GSVrGA6MVkjrMtxihjtr"
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
