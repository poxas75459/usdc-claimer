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
    "3StKhbpVyKURRDZA8MzA6xtRWYFQDYuPDbr5nULKuDBf2mGUYKJZmKb3rvcDLuZoTRRi8vbRw8Q93uvjUoTJrFWy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "479u2XoHFtZk44zpD1UnUN2Jz5Ca1HTNDh4KE3WaKde2WXYZuhRJVJHaTtMysctVDGXWEzQ4e5iZaG2Jx6WqyF99",
  "key1": "3wHmch2MtVKydHuSdo2PaRLCubbzTh4nngmvG1jvK3e7PmcHB7eHaxukg1Pr1c4gWokG2qxkmeMj58gQNDMRtvc2",
  "key2": "2GkHo6M7Sj2BvPBDYRDjmSrNYEFK6CZCbmgCYKbWXPzAErbbvyXg1T9hRzGeYxSQsuh4RfAYiJoxSoYcWXQPSZDV",
  "key3": "4LDxYNEBbV2EeAfvS5yviUTbP4BF576ZoBtksBLJVBNxg3Ras9TzvnWSccYMJsE7uX3REioUmWkTsAhd7LzxbGUS",
  "key4": "47cYrqdHJ8QV2izYvPJaGCSGMAUALEReUjb3BXtUdb7EjXh24QCQT5bQEaiSL2DZZreW6n6ze3rc5BfFbEAFLwSp",
  "key5": "2SachC4sLiLe12tULFtjKXEKZ6RNvH7MCQLbipuPS52s6zvsXcKe91PdXePY4xb1h1GKmwNr8wN17qJztHa12r3P",
  "key6": "3ZBXJBzSVe3cYWkQxHeQ95zL5TX5N5VQxgAQb3mewaRaigksFzvD88mcfcJvTHm3Yh4ZndXSfswSpi8DUvcF7p2N",
  "key7": "4aPBAjZLUVvheccZBrP94V293t4mJctApqkP6ARYsnue8ZRiixW1HPh2J5Jg4cN8RF9dW7LmTm8a9fz3hy2CU8RQ",
  "key8": "2Yi6CUXCVCEwbGRHyada9UHhKeKUNMjjD1L8LFkKWfRSPNLrojFS1a7E7Vd1mnc2UHiA4XprmCYq3c89v1dYz31A",
  "key9": "49iQ2kgupLPafd8xvBFHvu2SAX1B82UVxTm1aVbaQpnDNfGMipEXKzGw56EgSsXGQywuf3ghux3yWUdsi7Gqfo4G",
  "key10": "4WsTdcVgTmSJZorxUttQtiQatibdziv92cXftMXzgaLc9TXox3gb4ZijdkyC4P2WrmGmiDxX6cCKtKkmziKKsJUe",
  "key11": "2tApeK6Z8adM7ND42KwfSox9LvSWErASmXVAUxKBq8UxRocAvE8NGu4Cz9YrLqHtPNxoG44nZWHvWMXc8UeJR2mf",
  "key12": "2ZC6U1jWUP3kPFib89uhU1YuFuZvZLKM5P8S9wJr6btxQPULc3ngUE5ArDScsAryHQa8vp7NR3DyZYMXigrD2vbM",
  "key13": "5So6ddjv2MW2nRcgfASSrkVTAkiitkjMvQ1TXamv8pkc5ZBk4Vc4SVzQFK5wMrrMuD6JCiT2o8wG7B8uS6sZ8HjE",
  "key14": "51MipShuEWeZ2gfCLKbyk3HPhahW6pmjgqG2f4zQfuoZRuK2VmLMSA4d7XMGZM9MJaoWUQaDathJyhBPFeeLZWLM",
  "key15": "3ycaZ6oyHGA8k69aRFAgQeTwD2czR7xH1eVd5NyRYismLTaZP7KKWXxnixdmeyU4WMGATVQGTKp5RQcuKsF6MLfh",
  "key16": "2XnVHLKMyBDuFVXWaRf9y8e3b11ysXMaJkiHEFp97qCsjYVZGKUMRNEEv151baJ1WLrJDUywKdBwMzz2V9xKomqv",
  "key17": "3mUkF9W9zcQworYQU1b33qNseEMKSGFwTA8eQGzzW3RV2v2HdNSmBFXhvfbpriWQpmtRNTHXESriFa2msgDi8jCW",
  "key18": "3diEYRzqKmZDCrSnum6Pf5VswPoECPDwhyzUCjLUw2xC1SK835rXnzo4ayimNosVyHaL6xWHSkavAYtcEqrTcSGF",
  "key19": "4Fx3vFZiXSTCD6ukQ1bvmVZruStiSJB6rzzhPSJFjwPk8rYiruHBPX2XAJq1kLh7Px6kBSTtVx8fiXJBPP4wmM5L",
  "key20": "5pVKyozNUXxMNiDDuQ93Q3nRTMyj6w2euQx39Dv7KhV3HnSvzME5VsCDBKcsFhqsSh6xYdJ9kgv9Zm6AymiEMfar",
  "key21": "5SHB5PV1ywcaUM87LhEpQPAph7kWbTrmVV8vFK44yYpjAbSZqmu4cQ8Mt3XbwkNJp5os7JZ3CP4SZh3PNBgR8EKi",
  "key22": "4LR4USgN7ArTqxZLnYt8gW16xb7Emacw3Hms1mg36VoLpSRq3Kd4LnV74U6FFVuPnjrDf4AoZYUmvGYQpf2gZbhG",
  "key23": "ccmEz55vJb6eC88FaXJJuKBRasn3HBvN4hsPfqcA2kGqbu4rNAYT9wdXodWBjz8TbjYHngK6FNhqGc2CczEiuYV",
  "key24": "5zEtzpo9FfqQPDKhKSJ2AwNCfSZXhisqHcoDp6ZKvuCzjV5odC7S2wWdPtRzkhPzXwDYWthD4nYScAboV8uRAy8X",
  "key25": "3jCr2FnovMKickLnufRAofXpqWyiRoUCTXz8zAg3YCx3KXPjsajEcg1ix7tr7ufF45JNBCSbPMuJNFJe1NoEFVHs"
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
