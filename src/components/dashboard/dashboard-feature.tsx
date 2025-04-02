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
    "56j9VTfSAsApQEkSkxFS4QtqwPzmUJNDZp25ccr7DLfkUeRhj1KLMZWbYwjACAjNK4w6NaesHmSpNHGQ1EH8aA5o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RUSLRCAtrK65QR4EH7YJTtEL99UXCPrJ9WMUEAnWFjXQRSAm1MoyziRKQScd9h4NyoGCskyuagpPJpUJfybmfvu",
  "key1": "UbuLQceUqEVhtZsbruydPu26zsprd1UCF374eEKf4FTpPvb1mGVeE7Thc69sYsfxpvDKUg6qza2d36xqj1sKL5J",
  "key2": "4EtDtuYAQRu9nDZTQynyp7UrWx2TNouMCXEmS2WmHvhyBTu6HVPVLk1ZxYJVi5V2hqDXEgt4GLgvzW1vhKybf4Ad",
  "key3": "4joLjViRGMMjBLbQ9R9MmoLC9kfYyxmH3sZJEz68uyygJVntGTjcHAJvUefDoncMwV8EP2KYLQ1hnxHunxPnTUYP",
  "key4": "5xVM3rko4pGRmJMvYLTKxwsDkZCb9TP25LrfF6ebBumGvhVhxMjH1CsydALaPVqnRVPYQEQY3YRmhCk4dy1RjD3M",
  "key5": "2MAx9fwFJ858zMGyUTrC8nipXVFNRxphmWnVYheYmmKP2Z7z9HQCYY7T7SeDbg4eHzwcmjSe2oKnhGVmVLPzzuwd",
  "key6": "58AMTqnpgUJE37xbKkQTkxonjNGT9wabh9TV3E5SwDecUzJcBaSySa6odWRLwZbHrBoswLKX5CHWvvcRKF1aAWqp",
  "key7": "61m1cQadqqPrhcuzXTxcgTpLvVkvuSFcGbEGaDGan1xae8vBUbKsW15B4vW67vhgpoXnwY9ST6yRZ5ERR2MsQ1Db",
  "key8": "3XXFmVAdafBLYKUDA5nYvKncjQfi5d1MTwUEe4VWyZZGKfpQDahCxr9vFpCcTpJGjgwkNVV3jxqNUtzbViCEcUP7",
  "key9": "2dLsfh7JcukSRZtK5r9RxsQsBtzthCCBi2X1wyZC8Ho4Aenifg6fds4huLMqza5BR1JHEWH2bhsJW7s4sU4q43zk",
  "key10": "3XCRkfx6NpWTNZ7cXTqZh9jAruDc8Z4z6CCgpEq1q6dAGZ494vVxXG3XmF3r7qC7hEeCXohAoLHU8MSNQfSwTcv6",
  "key11": "2DZcgihyrfJ196GGr6ZzD8nyTv7cgd9yQB1aWWGWW21HUHQPGapQbNXRKDzhcSre7D4CdV5CJaUhd6uAc2FfdzmN",
  "key12": "XTFqhf1gazdWoBKGve9PbguMfmBinoqM6N7Kwx7oCrcroQEEoLqa5k8gawz4QiERsUq39XdKCQKxv9RFGexcizu",
  "key13": "jQVYxJLJRFwPQwRTvQZdmkPNDzdqxqffcsNMs4nXmTFLTCHEqtvdpCk8fegdmjUFcFZM5MWaLaxcmTUsK4QRXxP",
  "key14": "5Vc1sMK5dZrJERr35rnG4SGgbatsAtQrMQmGi5MWWfhWJsDs3XxjgwNh5gUJhMWM9CmKys4FrybEgqArg7r65JHN",
  "key15": "zxxoBBEqiTSd5oKHkTgipFeQauZw2ov5kEKShQJ7HzeHvn2fyoTYfKZNCd65vwf8CPfcYFtqGDahaLPaTCAdag3",
  "key16": "4LZoGs8cVi84FPDS5b4MqhA34iJFowmxxv9Gq6fTPU8muAQr5qdegLxSE4gZ7J2SXKoGzYLdphFG6vaXbetEvxaP",
  "key17": "2mNLHR4mbdX1TyEqXzJDntwffpJU4wfgdmi9pWGoX58gGXz6VKreqCvB4fvZPbyZGKtbwkjxD8oqgEr8L7GKMNGo",
  "key18": "YzsqS2BGiDDd141YXW5ayTtUmcq3QYiZgXEtZCJPmizfWkHwMpfvj3xVLXQmv8D2ubuLQL69ZUaWJYWAthdQXT8",
  "key19": "vLF1sjoQmKvbkA5Xs6BdkvFBzqE76pVdiFeMH1M1mV3Zvxze4p85ULjAsVNtyHSMLwaajLXReD88WrCf3zsQgFM",
  "key20": "63LZYowuMeK8gQ2cEzT8Do46QVzQTuMXTXKVATgQg7Ff3JdP1tpGu8zrWSBRFJHsH6u67bLVjN8Rv7an2euwjtoH",
  "key21": "2p7M1MYUwm8SParNsHgJy1yJRiBNdExUA8nxbVF6bAW1CzoBjXD3q346GRLVFjQpE6Lmie2hDsEG8ADfT4ghJoQp",
  "key22": "2sRQ16Vq3CdFVMXtWYzU4cmCHDqBCtasuM2DxoVx3HKvwbih7JHFSJpw9KGiBhF9Nj7BnZMMW1zgfwHUUvgZWLg9",
  "key23": "2zDfbZNkuwtP8nKWhzuwNayNufHsni44o3ihYv644B1nWxYs2E3Es6ftMmaBiwN4SVttX3FKrfcGW2NLq9V4wU85",
  "key24": "9rNJnV9GN5HYjLNBtWRmL3dhpBE1FeU9CSvUekcB7cJWPNhrmSN6dQjZGAPFdf8HMQwPBzYPkVxVf3MgmBsMWDZ",
  "key25": "3zDq43PV8bjuMDZFJDWwU7biJzXqzYc9QJDBWTS1tJYyDBbdKyaUS3Xwu7XjC8Cu33nXqv8hbCGWiAcqxKYNrbNt",
  "key26": "4Nx8Lr3ThZ3QnEhtiuHtXEGxx24WLfoXzjUrYh4SxTTDAfN1XzM6XYrUmhbZthTzp2j6pBRuD7xidjxqETz9N1Yw"
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
