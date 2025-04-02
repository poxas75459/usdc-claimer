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
    "5dBFvukm7XzngK6fiBhpcHbqXsmoD6ezwzSTzHG3ogCGVjJm9gwtcJXVbN2Fi13vj4yLYnAcvTcRQjjvHZRSxdpr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YDhxp6LBr8Q5E2sE7K1HrPvR4zn4kSmH7XZ17ot2YbWM5YTDdp2rixWbFjpQhMWRvd5qHAAfhyJAHapeANmEayK",
  "key1": "3BAAtEL9jVwVwdDCFQKiPxCR5CxuBFkSVuWbH1qYUfPUoDqM34h1YeREnirQhZQT1pxJe4ApFt81DLynEjYVB5CX",
  "key2": "2gfxDmbbEn5FrhKoRmxUmtPbNaLS2KMgLy87seYmCUmfUuoHmhHbV1Fgf5LRmMDrijmTpMJMQoecRoj6Y4w1M975",
  "key3": "33yY38jGBPvjQewfXeJE8o9pU68QnfLXG7kw396TMXDQAHqQx53LsDScZjS1baJ3w1hp3y1fwS6nY8FRWX964RsS",
  "key4": "2vfnWHdNjHmZDDk6QRvFJckbVCh7VR8z7z6avcg2dqgP7Bas9T4LWv54sfLLrds4dZ8DGfLA4ct6JHQ2Nsy5W3go",
  "key5": "4nzb7DbmQEaabVuE3WpVooXnM9rPfZrE3AdgnwiAVYmft1nztkJhUy3ZUEpgBJ8nfB8ieN37YatApMcknNpyd55G",
  "key6": "3Cq77cMdwjTdkHiDZDRV5N9YcDT9x6TppW2QLKryczKf9MqCkbbioUu4fCeAbC6zmCrUL6aywngCethYpq9j7qPA",
  "key7": "gQYByHMP167ct5BjzGNBUiNkxUcHHrcPnce5PdP4peV63RabD7rvc2mbBKtXHDk4q4E9UzdVuGQ857n4jrWJNyv",
  "key8": "adzJANxw9kxfeLzto6shyF2z8vcbMjx2Fatnsj4p8MzrryYb7AqwEYTdG2goe1nz1Xq1Ms1NfAGAxwbTcFJS9r7",
  "key9": "5B1cFEw4ePCDdEjB8DexKCk3H3briUVHZQAjK5JVYEkV12uHJsG7i9qYSGyHzx28SSL97FRZqrheeJyuuC5Xt3Yf",
  "key10": "28XLiNaAm3u898ouupRS41MMrDZL7y2z2ZqovUp5yERyasPeNC1rN8ct4D9xkvTp7ansyVwLra1mam1nh39ZNuQ2",
  "key11": "48XcEVW1pTfBspyvMztDwDjvw1J4tDsU38wSFYpysfApa4Q6agM6GXWFNUw4KSuuU3SxXnFifj82e7uNt33r3Kps",
  "key12": "39MvwwfA9JXkSFibH2FwXUxgP7HN2b2gUTNpv7eiuJQ2zFDoXG9ViWENuxg1hSvnbwhpsDTooa7g8jLbZ8FmTKAd",
  "key13": "3YD2VhVJRcaFbAThJAeKNMdcfhL7vWc3qg1tdVQLJHvY6gdMaBVrsN1yzjfFLTVNT9QYuuH27kKJpxCLFS4xSYW9",
  "key14": "2fqNmv13c2gYKW1iKkK9rebXir3JMyJYgDigktwdq2qsuszCvBHW6cxggvQgkb9cwoLkpbLzGWrkLFigxwEwbG5S",
  "key15": "2bKKzi3KZ69BB6r2jLzan8EHCrFvwmNtC5yZmMAz3xMN7LdzERQtBv4rxkKMkcVZQ4ow2RvET7ve54Xh1SnRkW6D",
  "key16": "2BNG9NeE9WCEVWk84d4J2fKF5qBn87SPDMnJfwCm1vVvdhxFcUg4hEGfP125oZJ53yBn6scvQYyeyuD8RZTMgU9z",
  "key17": "5PwbKa5ptimPF3LnxTLfLTLr3seZupZ3L6nyy2c75FHydhGxdzyaTVFBP9KxQ11Y5D63DqC36aRTMuSm5xXEXJ29",
  "key18": "44eK77Md5YXen6pKnKTfyj675tcLeWcWSKNHAkTewyNuXgw63Fm7YwvNoHZLyG5R4tgAPxT9uy2qAjCBvzL9aMMG",
  "key19": "34j4gZq6Ck2LBksMB9jYtHdgrvoFNG3QfxS6sv7FPE68F4bhfRb2wjDaaimQBhfPH5qgxXn1aHRq5co2kKnsbfBd",
  "key20": "JQ5ZQoEpT2nVCMbh9V6eaiJ7URbxcoeetSZZD115UTG2rez2HF7gq62mduhLTCHgAMrKQ3RhzCtQR8nJshaouvM",
  "key21": "4Kk7hW6PytJVWvU9ReMzfBpQP1vnEcPGXU17pGfzz5YKrqBo518wyLjeDo3XHjLMjE62DwxmGgchxPViVTi4sEpu",
  "key22": "fXPE3wwJDvhCrwsZz39G17j676bZLTUiYX7ktH7ooEPNkgvvE64oLg5Rs1RGSXAz9DN9yeW9qfDrL3o2KB7F8bW",
  "key23": "XhscEdjVANNZ1Aa52XmGRswHKifEayny72A79x5YSyLfUAktpbM659i8uWxoHvJoYAzLGzoxWvc3Dt44yToLUG5",
  "key24": "5KtwKiCdGHdERdJwyPkbbX9MvGeqk8vvurGEQ3WxBL6qjhrR8s8Sa5pAwBmzzr1uvpKMBc1GJQtvAu2wYHuRrgvo",
  "key25": "3yVYSQ1Lsdyh1DW2GFEZmQJFLYVeTwPVkdAppzQuqmk1aseQoaXYG1idYJZecDJdSgD8oG1GbAw9Hb8dboxTZENU",
  "key26": "3vjUjP6d4JYQM6DW5mN1kir9q9e1Bdr9CRi7Bby98PQgtQJPRye57Fh8YaPfHRo8n5nn8ECaJ9cCHcTVoH8nVhXk",
  "key27": "3SwxLVZhA3E3KU5jQdY47j7Xq3BNiQKifbQqetcPK5PvfUaq3bbcxPH2s49pb4VUtajGHMiKFLUK83T7AmHsAipw",
  "key28": "2BCwfZEKsstXomYyVu8jQxdGaT43paL6PGEFc9Dxvw567N8pynQhz43CwugyBKTQhNggopSrhoj8J9Bozo7yJRPH"
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
