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
    "5wxTKdzEFDonESo6QPCw9yWVRKGa2DgWorL5v66tGXEPmn8HdieYBxQc36orVy8bsCtfsZVaVvdT214s7UtVrfJ7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ve9Gx7y6HoRZHobTSDx2c1W2hripQ1NqGjyvTwbPrVvxdkwfqUTyV3VpWmss2pdN77TLe3QGuY5FM29gJneGy8j",
  "key1": "w7DQQXMYYJZgnR9XRDm7UpfXB7yst8A5rYeMCnD1RWCnn8WrKudXnifSz4Fn7ifjwWZTsZ27zerUpGXqKyx9p1V",
  "key2": "53ZazodMZ6Ym5VWwXN4wLfyNdi6y5YrjBe3h4n2XrAXPyWvMQ54QRBfWHriQbttHJ6H3oLuk17K41XemRybLBmGW",
  "key3": "WPJssgbBngBRcCvLVwXiWWpEXkuFttA6trePtEwH1Nbu7yHRPsq4PpNypzRHD39k1CJ1DE5jEu3oax53yj1Xm5u",
  "key4": "4LE8iRrPWo1cvRknrDknAp5CFDerb8n55me4WfdCLHAAPAJykiZHKji1P74KVwJb1zdmwCVEfzP9sRgz1AEQ2gRq",
  "key5": "54YXxoDXg2vhyKCwJYUimHeQgZoGsk7xfMfoWS6b9EaXgXSG6zyRP7w6Nai1icLhsSJC87B2S12GQ8yHnc8dAfot",
  "key6": "5hoeZ4gqPUhdetDYzFk5SAzKjXReCzq5wXTeJAXETuA5kiuqMHS6652wgtDithF2rQnow6LrhpuGKeeuHN1Xryod",
  "key7": "4cA2JyySRKmptU9So8b487UZwZec4WQCCTdNsfKX4JgRA7jnPiTtyHuDi9rXKGtcWYzKUAgP7j1Q7fjeGoiD8A8W",
  "key8": "ApN7tQGfVL6a3VcTyMZFXphXqeKwLowNomtVFzrX3BaBoyV6KobLCTSKdLPyufWvuPQJGWGXWDHT13GdZ57Mxmk",
  "key9": "8nXHxcTdVh3MJYR8MMmVEQhaKS5x18HbDYetpy5pL2o2cj2ooJUdXfSPKGGqLQVUMaXT3cLX5DYMrPW3VQhKzK9",
  "key10": "SpKFcr5kawVZUPvCwusmaZYMDEGSdmZSRRg1iMTjES3VzJiz5z1wwi5MBeWCfBo4GXrcbbKfFE9BevJ4sr8ppDH",
  "key11": "n9gawLuAEbuCUr9EqDpuZYyLJR1S4AERCpBWY63MbQrYvpD96w3WkHTfVZKGdrCsQx9PYNF4gD29yj5DJV89M3g",
  "key12": "2w4riHSggGCWEBHRnjBQs9AHnMZjEs1SkNEDYm5udPKq9n6qDASpbAkYW4ekTANjeP8H5icPC5ZFpceauPBpaKg8",
  "key13": "49EVn4Q4onMqrrTo6gyKNGQZQtNBzyZzeTBbgnq9eYRmhv2FT8PdBtBsTxYzWG6ZZH2sH1Y6JaRMLMTwKuMom6nX",
  "key14": "3W8av3Q2jwxKuD2Ndao21kdYP4Jr1s76ZDNt8JWtNwrrMLdgq7BL4ofUJ9qSFwNpFzbX8G342HDBJST3uvxU512z",
  "key15": "2Xorfa4e8D1ukDeRGy8gFHcWFKqJw2sgZm6JbYNKX3oETRqiToY2RGw8gr7JsLMHiKnCgAa2NG3T5jcGW9b9keey",
  "key16": "aY8uwV1bTRbEWrofZa3TPhvCzriuwE9GckZMzuGcGjZjeLuaqggSAz1g4KdKZEKgzjoexprpbj6ipkmquvLqkkd",
  "key17": "4YjHbw7Ff2KCfBTa4EeTW7MaVf6c8BFiLhd862bU8gURG95d4VL7rkf61CpatNWG9fd6hreLtGUTLJfPfgQp4F1v",
  "key18": "5WdtdzadMHfHPcEBSUvQEAZEqQtUJkz7tojatVMh45tHXF7BAx8asmwm7enLt5YxytesogkCe2UjDyauekGk8tFF",
  "key19": "smnnECz4qQwNvjB1c4kwkZjDRSDQAEsAJZQa7M4yGutrQdmCKtFdaatLxhizjcYWUpECFQg9FDfSuuTLsaEHUWC",
  "key20": "3BVDo9q4ef39CdooeMG6md8gVyu9vpuVGjaWdKKMPKnwEQutKQFKVGvtS4rDM3uqeAE583TakjuzmVQwr77u3tJY",
  "key21": "2pb35mZiNhXqJ8VeubPEauhNrtHhuahBt4xCk5WppcJaBWbTjZvnxXaYgdkkSWr98bh72cevFMG4LbpgW9DyimRe",
  "key22": "45EFspaTXFXXbRtsN59YJHHHvzkxUUDTb4FWQ8dgsskq3ZTwZJEgsZqpDCMrorKjG8eR5GiFbHFtBZmZSuzV8rhb",
  "key23": "3ugFByGAGg44JL5NktBPsCr5PwkBVeVZqRxYSVy8ECHL1ievsCbTjHBohPDvSSGVTrJizxVhjWb3ekxtQ5HNRdUU",
  "key24": "2uBmncqPNERT54dgqsmCrYy1WX1nwBLoM47hwB38zUAUd759BUJXx49Ki8qB29YsyJm78fEskjNXFr6tS4tuzGAN"
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
