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
    "62aPVQzKTQrNH58xxZ8oyyov5JYM8688w529sgdn2sgd2Sx52exXmP1K9MhYupgAJ4gz63DfvSn45FJCcJw5X537"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kyLFP239E2wp4qerc2PJvcccLrsLyogTL2ULr9nwLTF91NknM9KJEegoH8j2XYxt6LmaT3DdHP55ENgPxPXJ27Q",
  "key1": "54EHS2YpZrSRPdhnw9sR8EGC6xmUoaXR2AoWqC9NhBso961mQsyUvqGbLD4f3SZKTa7imzQ8UxF51sva3tSNs9Fe",
  "key2": "44JRC4Mf7VscuxPGR1McW1k3SncTe32HCzmPSdGm9WeJE56WxsdgbjtbRJ3hGU8DFaEy7U4x3Txvih89vmRTw8Hf",
  "key3": "5n96KXWbhEw5u9iPqQ6tPg2UyTaWjFop29WLXRjRmHnd88NjtvcJ3YvzBtuvtyV6Kb2v9LqVYVqK34JF4ZVMeJxm",
  "key4": "2h2Ye8osR2yUTC18dcZTZeSUSjCEXpyfEziqebXDfGfEPKGNQsFHbrnvbM5s9HD4jaSG1NJ146NcgAX5JB4fjaRv",
  "key5": "57Cu5k7d8Ha6YSrEc6HytCWWEoPs2UE5FwvAtsy4nPYnm2Ur8ryxwRp6q4sD6JoxGB6SkSaR68qRQBRziE9JGVs",
  "key6": "3LNWnE6CCJNAtJLXm2t4wwpoHmoePAL4B6bmLaz6EKrpY4Spk83Lxar1YZbwBQ6MPCTDB9Jp33n7s5VyVsCmwtkq",
  "key7": "5NXdoCTgAhGfJwCBEaGEKw2zATMsGTe5qNe7Qcvnp2YWb7zDDxJTrjHY1bcGzCzUrvaD1MhuMMN6Qd1XTEuA42p6",
  "key8": "3VT6kePAW14N4XnD2spwGCPu5S9ZTc8AhrDxFN7L3LLZeLuvsDTqG4gNdtodWMTCarnMeJiai4qHT2mHKotTqjmf",
  "key9": "3YtrjPeTv9BFgJ71WzWxfkud1KrAxzx8RQYoP9xNgfe6GmsAZBtgbkuibqawhFPPntpYB1841eSabkPYr66xUbCN",
  "key10": "39LGS1vVi2ncS8SsdcPCGYGbtKVNx4HsqLt3YNhopYqBnZw71jB8BNMm3jRW4Rv6ZxF7eSdqsigK2xUVBzUqLhMV",
  "key11": "3N22uDZg6tpeG1t2CCibSMNBhTCnQ26u3vDQp55kvQPt2BzBbkiEsqcqJDCdgFEQZmmKJrZFpNrsxHJb83saf5kb",
  "key12": "5eQKZ6ZGANJuUctbxKiwv4GccfZe5AH4xmht2yFPo9Zc6vXQ3svK3zL4FHYvS9YiDH2gcgiuLnSw4wQkn6dFyisd",
  "key13": "8RgjHxAb9oNpCuz5ygSRGvhyEHHvtfsdfjSWnX9E8L3vFReUe49ZvXhU9FZE84rVDvjN8a46JqNtQg6MxENQ8tF",
  "key14": "4HnMrkzPhTSdMaUWLQQJdZ7wwzMB1WEnFZoiuqPdasNeHXea5uLGJ6SqLeFx2afJK1W76od62YNPz64WkryHz2LG",
  "key15": "5wYPSbHX8H9dnwmnqyg2X2PnPAzKXSaFv9ZJcxbzvtuZvkwcAG6qiMiznQz1o1PRh94c3LCDNqnpY3xHDuHzAvma",
  "key16": "4js19YqZvMUAf8MWxWQ1jxJLHSskFUsyXht6sSw9KZdpoKU58ZC8atcnbznqc7cBGV4NVSuv3TN1hn13WF9D5za3",
  "key17": "4Le7z4pZWb4PsQXAE471bGQkKjPV4sEVsicha7TR2QWiroKNNEmU75TfJCxmWWCPMoFp51N6e1px9TucxGChMVW5",
  "key18": "4eDRm9gob2SGzETL6g43Mg1ekYzWHZY6gVYgQt8UB2SE1kSWBQPtugc2Xmw2ku7X3Q4Wpv6BZCj7YFcxzDNKGuko",
  "key19": "4cPuVgbcAYh7TsMMyyodWw99ACU33MG9z7pEGXdtuGhbJMGcnqGC5b9QcbVgRAAdsjW9K2jy9LJ4hSXhng8ZvHjA",
  "key20": "53psKpE83nmM7nf6k6dJ7UVxm4i1vrS2MdrCWWVaTq3acVqd4SB2sJBwdPwpTYjAvfs2qWbvS8js2yaLz9rQF2oW",
  "key21": "4S5RNBr7coCABHPGnFcrrZdH5Kvi4B7KsxvnabBAGfaVLGiVQu9BkkyfcP6gu7NvWGzeXtMzH8w9Avhdwjnx1Hpc",
  "key22": "54xKYbM5VqRqNTKGLQ71DALXLMaSGFFGzfrK9p3HQwMXMC3goCkJNK3hZCtysZBVcWtpCXng2BuxNEXZmvaWycAA",
  "key23": "65jwsvPKwtRP4a6LDXJMAiuo2JfCGzeAPLpzhjfDjnNzeD3zEv1zGtU2GfGWAjsT2VXGhnZXBru9rskpLdH1oero",
  "key24": "zkF9c9DFsi5G3VZeSVRz3nJL223t2qTXCEGgNwniek8amvwDMrGpxZsQ6e5FL37HX2aGHfSXuQq9xFBKjV6PVsR",
  "key25": "vqGmFfV7vc4Qaa9gzra79gMVC5zvXtFVK1U2Trnv3mMUetKH4vwTM2cpjMhVECHPWEy6hARNASndRrk4SbviUYF",
  "key26": "FLZGoQKnqv3GxNJ7wimavBRPo1wtgeV7FzKyqnnwRnYFzqChh7y732ENVSBSBV4f4kqs4ReijEG858yQHApbSNx"
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
