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
    "2345eLhdSPuotreDyzqCRyAi2pzJBaqaQAYj4m6Ey78EP7TJG8iz7sA4dVsncQvvsMNaL5o6ingp5YCQqnVDTvg6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4B5iLWa4vkERqMahhBWhfE9hNGnFpTtwEPhXY4mTjitusGTMrSCozLg5bd2ALTebeyvPF1DngKTEcCrmR3UKj1w",
  "key1": "t9ZAbVycv7Z8srF1ze2hKZ94WgZGG3G9CNXqfThTVDCtsM4Vf3o6KjPycGzFjtdwv4e7JNWBvTosRmFhwrApbHi",
  "key2": "3DHdTj4WZrf4R9nmaDYmXuUEnGfYmmDBJNy9MndXErak9QyhDpAUxiRcH7zVpvJsmVtGRsXxTDREP4zmF9Fd1D2Q",
  "key3": "5UG4FuB1ef9ctZXLaZJFRMzRk6mSL4otKpdTbPeVfkbxB5kfcw7vVicjKcwnERxeK8L2uct1g8UhFMbKP4K2GZ5w",
  "key4": "5LEM43JQQvtqbGJc4j6uiFyEupHRjhrhiwUAZQT69m9ysRY5LUF5xgFTskFxQJ5hhTLvVezbnZtVUQn9FwXYrtHx",
  "key5": "2vuhyfgyx96BKpapjbykmoKEEZGFwp9fJFmebBi1YazdFf6ckk2h85ZPFcXQiKvNrX4djfWwfgAycFmK8tpzrAQD",
  "key6": "DBMxtxN2BXTUcTScyHSFQ5FRVLaKXXmiu9wHF1dvcZe3YtNBVGa7xNR4tCCtFU8zdmVxVbsytPiRPVRUx8kqScC",
  "key7": "GZUbBsdzRe1rtm2hzk4ZXMyrTv64JVU5VWU2vfVQaTgkKmdxcFaZUv2gAG9XxUAawmNYCQJt256NGXD1qFGy8Ax",
  "key8": "2RkMsR9VizBVacdDPPuo3XZ7itKr4kNucrmqxrdRRBmcLeang6wgRTXYfDvx7Ds2DXur6nTqjLNpJuEB58auHDPS",
  "key9": "4A9ptDAEtVFkryrHVrH4s2MoSyYhjF6w6sNg9iaHG7UUaHQaehbhHcwCuneun7wZSQyfYL5NBVUftUDQ1j2mL9XN",
  "key10": "51c1ZYBwuB9PMsm2FmxR5MKDwGbnN9Wqqq6SZWjEvaBMSP1Sy4ELHHom2wDmTddpAPjGJQTqYnAdAJrMYR7yPCH4",
  "key11": "1AGmeWzt2MYWDa85ziJtVhTbW5GQb1zbDjXeGchiwmABHZemMJNGGsZEnBy8QGrkd4XdFFHEndGcxvtF13eoArK",
  "key12": "3vjVw26zBESimZZN8esPMT8rD63HEJgYJbr1ZL46Sj89B7KUwnePCqQSvaZ26vah2eeyMNw85eq8Py4CBqD3o5J",
  "key13": "3cKtx4tZZNmUotxFR3gEYSw1y2Mry3P89gnEAjpP1rzkr1Nx1p4fkqmVBVcuAdkCK6MD1twY4P8L1atmCsibfDrv",
  "key14": "5d4YeXPkhrLHzLUovkn6TY8haasKQbogdZ3tXTp8UrVWnGhu4D8ymJkyFJHX7CYPm4ixWveL1UBPiefC8eWQctVp",
  "key15": "2MoGQHypawbnKG5yyZt4SuHTj6PaRf8azJFcJDJT6ydQZ5twBV6kHxxa7URr93jLNcYGS4af4ukA4p1uCfWuGG5m",
  "key16": "3AmWswPREATJiYW2gYiCUG8icHPEsg3weh8dZu9TEKjVwCoaPzkaHi9JSGW5GszzB1KgFWikHcHWJbC14er8aJ6Q",
  "key17": "2hs7DBrh2jQAQCzoZKxphn2iYy5FF75vpqF9EnatKEivjtUnguowTUDQ3QornzqsXHcgnMnez2424A2B9WXQx3ny",
  "key18": "2PyrUV4tJmKt35Kj5sMqccjvsgNDfToWLF8cCcc3m53UP8gzGE2wNdsH7LGZzaYwzbS894ADpZFvby3ugChDqi4q",
  "key19": "2zRXcHW2VDHRRBwpAovmkSpz25tV8XrvbAuqXgASCXw8JTkbTxLVjA5wErJ25xR3rXsWeD4mePFUCaRWozbvfBSi",
  "key20": "MavaT4h6nH3iaNKmy8hmvy7wm3T3wGbkt6Vy6jqzkrpsjHB6DLV7Ed7JVbAD7LTzbgVCQwxXoBGAHHxh2kTwa1x",
  "key21": "4NJ5AVLQbuPoFoKmxJQHxvoBzato2jFoax3tRtLWFWDfTmgpX5wTB4fJuoNFRN5ePyAybEqgAEViaECLJnFDS8k1",
  "key22": "m9ZUQ6MNJc6vR43cm6F6kkVJB3Dgy5YYR71kuyfd9WDoSuWu8xWEC5gCK7SDqvdgouzbDkNxjZFYt1HFNG4ECMJ",
  "key23": "66hUcRtfoCRtco18huY2E5GSfPHZLwEgPZh596hTvyeVoL1eYbNm8RBW8fT2KrRhNaHtB4xz2knae9VtLpVJgh7L",
  "key24": "2vgeaBPkpCMPhdFByUGagDDuMfFVbiFCp5Y3rvoyzctJTkQFstfxycZjh8fcGikUy1h9va81iMvtUAJA3g5tV2K9",
  "key25": "34rtstGacHo87cAiosjAMdLEbJcbuFAVbz4SpDVAVJpDcEBH6hMxGevY25p6nJ5UCSiP7cfWhKP8PaYjVyJvwcaQ",
  "key26": "3L1M3Mi97deQ91AQGSepk3ruqHrwDdFRJnSkkZEguCbSwx6ZmAqwZosD8ytNRQVcJSeGqCYd3Nb3UcpjXyp9Anc4",
  "key27": "3eJgM7ppG7F3mxcjhUiC4Cp8aik7cBounHqgXjZK6G5HGoKTM7DMmGZcm7TNU1NRVEXBp5z5YKdFcefH87oAAxHm",
  "key28": "3iSRoEW7Nn8cvp7qwA9Udv6UQmeXkdQvZ13Kzf8eJCS4uWe1hTLT8RyGw9dCgnw2iM7r25Gd1SMbjyrViAYicFvj",
  "key29": "4uXuWaGuXN1nGr5VMitCtp2fPtsZ4yxB6Uqf8PUbPDPQP4bTzuXpvXQutZfqygGMcPLmR3G9R4JBkBLN9Bb7DjWt",
  "key30": "3SLXCH835os5iFJMG6WstjV26rQRFgzCZd7NAuuRKajBhjBqSkyqTNgCduZJ9c7SFHQemAsVTgtCiGP81uSucp5q",
  "key31": "4MUarBWWbP6zPX9ybCfpWPSWYrv5Jz14zpKWhq5hG55syqko5p6zNNzsddZxSW8jp1cAk4YbEVjPHy5kqpEsa4fo",
  "key32": "P5zfHcZS5nGesuPYzdkZ8VmiPraNpRNWYpraYCX9TcrFaMtoe9P4U2euKuonGyJdUVvGLHeFgeQUuLr1s5krByd",
  "key33": "59W2R1MCrSXj9xyU1PcoKYm8bjJPEDtN5RMWek4TYDAUK8BAfodhGSGa4pU8VzssjHMfCvPxSNTyMvvnxiAy51La"
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
