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
    "4XaLaCRhdAJaxeAiwSFUwBCtVbiRUMXfeZbm3n5Dawv4sFewUJybv9HAzxjaSeDTHjy9pyFrbGJQEXg6aKvKpjqt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5diPmfCF3RuWfDUM3jnhhLnkC7doqNNZprTGS741JbmTowGqUAJEofqQWCLma96rvvArKsEsPuqRzkbSLsmz3woJ",
  "key1": "2FGkRjXMgdwtx2Vgfxzxhe3qfKjQ8VLiCbS5QsicmrA7JjghpceXaibRNqkek5axr8ctMQXcwgHq32pV2Tr6Vmrp",
  "key2": "2qXMF32R2jdSDVHm4g8VUQXH9uDekx1hGS4FLqvkDHox2wEc4C6r9kBQQeKbYQL4u5LFzGyosLKozB6y4r3B1ksY",
  "key3": "3kh3jwqygpC64JX8zJN7zWJsnr4U1drkuxctt9a8vrZNTowAjAAnSdaR3S3X5tvGjKeymwUm2YxuxbXYSbD9rY2t",
  "key4": "3PTdYKiVg2Bd5nT1TTPP5QkZyNa8FeSRQHM9NeMayL2esP4oMm145WQknrnFoNE8xxExSKuWzDrS2KQb1KeSh1j2",
  "key5": "2CSeSyotuCm1uADLCciJaK7WVvhQXE9dSZKdTh7XBsw9rpcrx6BPDZdzaETMD1Uq7DaghXLeyZKqGgpr2xresz6k",
  "key6": "TD2VLpmfcf61rewnAkHc5FR3o1KXCtc6oK3SmmXJzYsJSr4xPQnv7NVjhRzHS52zK5mh5tZHHABHypRhZQCJ1Xg",
  "key7": "4vRFG5ngQZ4pc9zPFbWtmcGdQDSS8vHuBqyGRGMNRk8GfCSiXy157EYUqurEyHMrSvFt7WZt4q5BpDQPcZtDjMh6",
  "key8": "3maeWNBCS8ufPk6mEbjDvYvEdS45fFNZu1NqtpSExRr2TyfFchMJei7RHkKySfY2Q3BbDJSsVsmYsaQ8MELiNk2c",
  "key9": "5zQNKhW4c8PHgVUYfCgCgNAYsSBio6YmjGASt1bE8A1t1AbTtVy91BAziCzUzWGoE3n8PjFt5uq2MdSj9BgHp7c3",
  "key10": "5wwysYA7JL7KUSrBCqavkqyPBkJcScrGUxaMMBrhv5yn1nekAd9n2nQbZviPzB68kdbuzbSQDVLRcF2P43Th4q4D",
  "key11": "34WZH6tzx54DAbSYcAPm6BK9ujjaMgxc8Vf2NV8PYd8W1riFDoZZ3jEbFTE7aUDRq6hxK713unEZsQRhoJ2DEPxC",
  "key12": "ZF8zwGFwoXsPSL6NCaNVUoggmuL7Mm8mYE13C1iE4iikKcGTRZiuFtaC9GgLgn9o8wnKFNVZAhJEnSQM9Wzdbbv",
  "key13": "HthGFVudF5AchoPKsfBTEgXaHtbBNsmGPcv6dsRxs7Hn6oCCw5zQhWfMDhY4wcbfCuCZ5qBh2NBpemw3Lktgb1c",
  "key14": "35AMDE7qCysG1dquYYGJC3HAgkTihFiUTY8Gxf4gpCMjB68rsQaWaa4c2mFvrpJGAwQVdY9TWGJCdz6F6kNMDf9q",
  "key15": "2uZwaEZqZBKVp2WoSN1kNioyLjFo87m3eFQcdNJPxJEVxDPJMHkRzP72aMi9X51FbqmpycvQyLEmPeN8yJdSweYM",
  "key16": "247iAxHjvc6raFGSqFJgjyup6CBzKd7FRsspw67ehc6J9uyBzgU5bEaK7VBnSzK96rPRsH3k1wX8sfjQWVY7JJqE",
  "key17": "41mEQNYbc6rB8wyrcfBDR74e4pF8zQpMkVGNAKab1ov9fzSisCB5eFe26B6JNprYXFnQ93Q23h2hNP9dfKfceWHJ",
  "key18": "3fcx2ScraGV28B9u1ejayXyD3RvUmeay69rcThmEELRDvD98zojh3U5MDFqJKcyELvFu8qXVFBXAQcKESLB7TQkM",
  "key19": "3QWGmxHLiEFaSyKN4pE9DwdKHdKEr4Cy7Vepfy7zTPuJaSBz5AordLoHvJBgjZ25XvJhZr3rfzfpxk2bJQ5nqbMC",
  "key20": "2TRY74X81karzHPE3PTxUTie3dkYmi2vUyFpg5Vj7mSG4E4EFkhvA6wr7Rkd2mZYQyAMgTPaMEPh1t7eLpi9ffsH",
  "key21": "5DrWZvzjZn4p2v1geC6Sz1Tx9Rhu8B4L2rGqBqJB3rYpwczUqfyK4q9NktVqL8c4vo2pDMieHP7dPzncCUd7vSHU",
  "key22": "5foNYwz3qVZooqEBPwgoJ6L7fKGcfKPBriumca6FrRGGEVrixVwjCDVkuCpNtrtVan1JUTPDs4W6F92Ym7zGufmy",
  "key23": "3DArR5e4SpC5APCQVq3XPfnrfeK13bAGDFGRPwa5Jm33GWYesjEP2ZVTi3pVNCvdtRNmEtjrQTfYajRy43CCbmaA",
  "key24": "3BvDnMWAtWLYw32j21D7GdXt64TXScogKsxtUQzp5D7EBFiyXbRYnkzRw4Asy4VQGmKpayWWvDMRyzuBkCPB7msf",
  "key25": "4PjeZ16YL866obfLBrLwC6inhjCKiRr7TfyBwg1WLnQrCJEVkFm8JnHYTwQtvxGKhsdtzRdmdjoGPVQzJYuJ7PaT",
  "key26": "5g81ao8Wt6KQZNr1bHHdrHnT5p2n7pGuHshFeNjhQnrriFTQHmnv7r2ShuPWeGw3o6jweXKWJaShWUC19E1oPQd2",
  "key27": "twvfxX6DDuKWbJxSuqayki6TxZsx3bMcB4UCt7pVicMvMciG6CbsNJ2GtnichCXk5L7SQWttwhzhVz8YApUopNX",
  "key28": "5ouZZH7UyRLYNVYd3r9TT6mPJogPR9RroEKufjmgfz26zXgZAY5tS1wwSzSvSsYXZYyy1A91Vvj8n3b24ubrqUwz",
  "key29": "CrVEqNJA4PSkMX4XzKQfpr4MDLf2MxFUm53QKNpS97wXMwyfJdn8hf2RE4JQFZszSW7ydNYQ7YLTTzjYACu2d36",
  "key30": "5e8nwqDssXGmieRTDskLtqs1RL15ke3abqzrzFwdPwL5B3GP2aPGs4nMBWaFXDGNrfV16WucBZNUQ7tggKm3nX8h"
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
