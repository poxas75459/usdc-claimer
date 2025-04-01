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
    "4yYRwiUFDfTt9AdhJQeiiU6GGVoY2nWcnj724MteV8sLj7QJYDNi8NnFv4bhRFH1WuAqF3RPaGWihMk4R5CACghX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cHebYzzBoUBMS5xF7DUVwjg8M4ygq67HhPrPfXNpiGamGEHEyX9zTxZKkKh1FaH8hBJLH7SniV1ouMEprWeMpBx",
  "key1": "3KEkvKFvTHzZEcBrkz6gebRiwZWE6769gLS3hWHaZBvguTNW3uymBwAGyx2i4iEbUh9WH4yYXwyjjUzTCyPEPzrd",
  "key2": "JnkM4QqohxTQR6SXnpL5bsgLqc74mhGN4HNUtjwdt1VR4K3FUrJD9nrfVDrQJvwoVMQj3hDT4k7kPsth2HTMWkw",
  "key3": "56cCLZC91qt8oJA9ZvURJaDGyJWsfAwoAFFYCsvrMjxtqCJdvs4UCd9SdQXnK1Ut8U8c8WGnCDVYWoZftortzZ2B",
  "key4": "2oNw8C9cgeeP5z6JA8cD9e3qrw8PJbTZbCVkUj8tGqXFrx98q9bpG5Etj7kPp6vAAHVdSfdtgbEwv9WJFDx8pxC6",
  "key5": "4wqKSWT5AaX7QovGmcpqBjg4Rm2ikkAYsWHdmnaoRKpvi2w7d1mkM6U4r3uJuaqptov7QQcXU1ctcmsh6i5qMRhg",
  "key6": "2noRLAXg9JsqGGXKDquPEgAjsiH7xga6r6uDACUENS7oogFMr1VoGSGMXfUxSWMyrbgchGtnjUby3E7VXpcF91X7",
  "key7": "3MAiDXRi4aCTfpdVgJH5sVzEKjXcQDk27G5zYdars7m8cSWuQmBYE2riTQga4K6ZK1UZ63pYaGMCJwNPQ4SoztH4",
  "key8": "4U53GF6QKzDMzJmWHWEggsWpw3AEZE15XuKx9L5FBhMMPufsAiw9GRNjiZo3y1mKFt9QnaNYwPa4QS3GLzqgYf5E",
  "key9": "5C4tc4Kwjg7GR8cYLniSgXzXU3urQwyJdryTJwFisAd1u3KRDWoBgm2qTVbzqi77YiD3Npiwwm3mtbYRS5Ud3B2r",
  "key10": "5RmfNYTiXNVMgtWS47L5Um6Ue1HFncGVpqCVUBY3hXFUbDZDrt4KAYbR2pGFnLYFvDtpHBj1KV26as25Fyyf35ad",
  "key11": "4nRyTLZ1UowPM3G2xRXUPgA7U62CjK8vRF9k4yL5muBoMisv9Enae5mVdzrNLeHcq5tavb7daTNAyj4FqCRSaxkS",
  "key12": "EUP7kMRZFDzUM7NnSGUJw4ALz1Jn6zRrXd9R8PJJDw5B6iCg42JhtGCtMqcJganv5iqbcQV6sq66L1JywGjHwYc",
  "key13": "2Gcgpi6wLWsa8rMnyKMEG95HKXUNA1ZzvJJ3TcPDmhobYoKk92N735Kcs9MTXDXM3cndCCZrh2ToH6KcgfN9voat",
  "key14": "4VWiWp9FMEJzfJ2SGM4uWcHrCFgsjHxH2ZoYALcMQfN3dLCmzEcRu1DeTq89226FV2Bo4wtkraPJ1dxJNtiBtXvb",
  "key15": "4Za91Zt5ym1sBCS2gy7PYtr2rqG5n25vcZFFMv4UkfTmo5YsjuXfyqcNq1DsMjQd92KBRp6KCNjaaC29jYWCE2yw",
  "key16": "m2zuUX9gyoRWBMZBvqKpe5ToMemtAgwo685ihfCyEXN3Wcrh7GAe5sm3AQ2t7LssK5MYN639arGGPitUCNV9pMD",
  "key17": "4NCHhF9UTBn9WbokzHPGHWsY5RGaoiHAK4kPNA7tqQUvbLg9WbHs5uBnGGRDUKky5MjW4fuVQYMSQcFwHSL9SZbr",
  "key18": "4MJH6zcPyCEMECsV3gijg6DdMM3qVWtfCNsZdLtgrhTyeLUF772VVbVCamYYgWpHLQDwf9h4tBbDrrKuaQ1SPK7E",
  "key19": "2ArAnA4G371e78P22WH9FzLzQYmjchLhrMtwN2p6UFwr4s8datUt9MMMzbryYMqiDDfynUg52FAwVVgrJeD58gUh",
  "key20": "4FB2Et42NN8WUtwsfKMupGSj9MHFEGTfCtk4oJxUk5bgD39rGVvPwujkEYbhTMwVQozFVRmX86DpLZVhVhhcrabv",
  "key21": "2UE5yfMi7V1Qssxy1MNm1W6TWTpC3W437H5g5kNisspnHRhaZk2SwcqqTeWjr9qaNBGZzXKKk4UShySuHroZkGtQ",
  "key22": "3HVrZBpLRE3uhQiYXfHWqJsuhNeg9J89bHhusgJ42UpB97kcGFz74PFnPzt5h5UfsJGcaNi4WUpVTE4xAreKySnz",
  "key23": "4SjF5dYWdro77dJ1BP9tWPP4WGBVHcaqJwiJDJ6mBph6me7nzyXAoqKuSTkqREpU7SWHkrRnJUb1ea3tiEqWdZDB",
  "key24": "5haAGiwz2PK7qgdyQ2NrJVw95hfj2uR1CVafDBu3NCcafDNmyqHwqpehnS9WHBEU9inGC2v14NUNAdvSaYGGRA5M",
  "key25": "48LXuGwaBzKyHGnwMZfYWx5w4by6w9Y1VzGDVeevfn5ArQ2pu66hfdv8sSYH9VXqJaKYzH9WFoBLxXoyGJPmE226",
  "key26": "2PbVH3CKrx6nU3hCUwUTnWpF7EGuwHjVQevt6zBEwBjx11VGwivuvVooWUPxP3G3ZPFeyrvG2786p6r9nmyw1Qeu",
  "key27": "CvKPnL5WWCc48XuMnxXdWtoWtCwsWrdazxvvZuRVjXCgwWYgrAFfc2TygnQtLwgbqSTdcH7M7x5u9pHPwF1yR4y",
  "key28": "62hoayH7rJ2stkWb51pzNoW6J7RSaYUoY6JGQr12Yo8d7ifAjSS7NipKU4jSq85zwZ7UgF13mvoMtioU6BrEeWGm",
  "key29": "4dUAihFntNJdpbLszDhWTQpM4RwNeUpby9yAdSXGiSK7bukiJda51AGRTFGqsw44eiSim7om6rZhsdgiratvdWpJ",
  "key30": "59ywU4hqXvCcjozzRsQy2p3UehFAkGkNEUwNkcFUxupp4zWXr2m8Apxb2geHH7tSBHxJZx3CCuLpiHzmp5LgGFDB"
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
