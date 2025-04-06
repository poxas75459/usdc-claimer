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
    "5d5stDYCR1AzcGRsRVQbX471YW89WZqbQybLdEvukwrYAKi8KTPXG8NRh2ezKWUik7is7st8kaKhC7KBy38Xv2kj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58bbetPe4rkr1X8CnVw2oY6wMXysUp9rnEUWhr1Csyd8CYTAHKFbtBVAPJmHcApr3qMnj7AA7sAMpaXqTcSsYEFe",
  "key1": "4JcVUenMStqZQhwaAYfPKTLEtB2BhPuqwk1xQyouHjftC3WwHUZdvbqEVpEF4zhemXVAT7APaYCQ7GJy3fyRum1E",
  "key2": "RjXKDt6KYYN4yJmiGQ64gZ3un5VmkLd2qnjmW59iPQPZuUScCWCsAvYVtYwtQfhqnrVGGPe3cfgkZmgY76jKHRc",
  "key3": "4rtbNELsfrtEZswFLn1woqHsbTaJLmtpTtTzLWJyJzcx1CMkYzPszUTanVG7NrgRN3RvJH4LiiJ3wv5hgFJwRkSA",
  "key4": "5TUUSWS8REM1Y9p4LBR5YaUCRxfSNqW1ztoGwUe5TffBSSDpbc1qEDCgxubVdP11yuxJpRipkXBSxHMd2tDqvwyn",
  "key5": "26X3nV9z3ib7HFrgKqjdMMMahLdtvte9iQ9WrKHEmhD9VtVWK4JLDnSBxuRzt2w8zBEPcBVdsGH2qjGLc3gMHdEq",
  "key6": "2tBNFJaFmRN2bpWx4AHLnARhA126W6rVrR18kpvcsiQELUv27hWeCwcdChaLC1kTZWhwMz5pSZYnBuFkShBXknMr",
  "key7": "5Vxnfs7mDzMXg1NoZDphHfa8rzcDHFhCVHSqHP83dCYGTUahA4AGz3R2au5QqrdSm2DYxSNx7jUMn7vEz3WkAdhE",
  "key8": "53Vag3bc32RLF58LCNAtiwRDjN9o2cQAU1RGHBiJi5Lk3vvo6RMgFjiS7C9ZPNhLNSiJRW7rM1XbCRr1M5GVSNWM",
  "key9": "3KGDi8c6zGd6sj5B4VyFCDUFzzz6eQMupro3V22pUyBp5XfMy4XC7Lh5HUxEPXisMwQvrLjLgmdUSYuX8EA3vpUn",
  "key10": "61rk33HXszDCaXoGB9CqY6EYU2ns8SetkAvMnKm8ZXojh9mQPSikya1ENtoTk6r2r31phBCifKRwnVHcLKF4F39g",
  "key11": "4WPzZX78orfEKKARtJRwkJ65Fb4s6HjnpwQcWvZ5EY2c8FxHiYtnnbYbiFNaE5RVMeavyFieExGN38cEuLZc87FL",
  "key12": "2Yd97q3mKYnY4LWCh5DMDFWjqnKai9WAjbAhmfwsaCiu1vDdvwf2LZ5WZ7bbQ11Bst7aiq6FgoZ7cwEBWWQu5gEn",
  "key13": "4D29WdEou2VfG5Pr1UPseH9wonC2wfRtNdK2U3VCcNZoidDzRq3cGrEQ8ZJMnfizEkj5BM4PPiFHpAfGAveUZN9Y",
  "key14": "41dytSyeD2yCMq5EyPvAh53Uu5j6YdpTiAneQXYZHaHfDssJpvrnaUXcuBsQdeTTwe4vacXcuFKPpaDHUxsbTmgP",
  "key15": "5BQ2R8jsStrQSJxknsGTrQHdKRLy4nSQsiFp3nZmNc69hWBZZC2vmfrAGGJhpgKvsM8qpZPPBSUDyoEKJdd2dQgA",
  "key16": "29ruLNLdMrx63gwdVTLaBPdoXDKcXmiB5hxMfMQERgyxSP7TmXTxmBJzYXAZJDFWxBiYxe9Mn98o3b8LTj69hVVw",
  "key17": "2U5WcpLn4Yu7KzSFymTabtoQJcwicCTCQiq5W1nS3TZuNtVb6udstXEWyG9asFECviRKtfgyzWrMpFxzaxqBjg3V",
  "key18": "25XsPKVptKbp2LHDr3jAtVjkwRtgoeTF4ct9FwL7mPYKyiPnPa21Lc51pZLfsMVX6iWDFBmSzwub6z3GBmZsJZWB",
  "key19": "4ChoXLyoE1dsYqXQr7jTYevE6bqn9VL28A4NTjGFaZvEYFs5dR1sa7hBUxtDxdS8UCjACW8VGwegxaNNbREJeoSq",
  "key20": "5HmjCVif3TVEJvG1xpCgoi51N1AcQgeL1fQWv2CRJzBv1LQ9TX2FMnGTJkZoJhB1qY2bo2mP9rYqVetPFZ82nEfg",
  "key21": "3on5JU75djMT6FCgCfKrK9vqvm9fR9VTydCbrT6aeAKijhWSsmMmb1HaUBgrbJRopcNu2ZWznpwp2ynZ5AVYrdDi",
  "key22": "3QKrPq9XcU6eWG6CSo2rmTF8DtxXPDu4dduBy5afVQmgXFZQpXU49QiStd8Q4AXm6rB986kwgm6iF5HRhtcnQ4PE",
  "key23": "2rxyCjTh1KEUD8dEA4QgDudf1QRAxdeJKBf4jTYagF43LzobxQowoE6rDdUrv1M2ZFQA4Ucr6Dw2sW7QAKa9uTR8",
  "key24": "5dqG1HQNEum5P91aY6PUw7qoG81ZNaUWohTUno22befiq4ikiuEJezuUxF8onoTayPo8bHs9bMWzBRsVTkhHKNQg",
  "key25": "5Ks2GBnJXvKnHGHiBSNgwjTqTisaYjY2C9JeuhDz3DYCvQ9a5yAKXPWzvmbgkzbgVJiG9wYEQYNu67BvKBAn3CuZ",
  "key26": "5fH4eh7oCgwEAk8mvwoXHTcHzmT7d8gFnXytb6wSD63MnnopbmD8WYLifdKPrxDQcXVXQVycEx5Yow3XzSq33ezv",
  "key27": "5CfT8T9V1LvFED4mPyLPrVK8DL46oHRKevK3D1DtbjUyfoMoatg3usSNxR4v8jSq4MqEmER6nrZdD6SBeqDLiCZ2",
  "key28": "63mrP9mApwTJiuDzBsHVc6JV7aSrGPcziR6nE7PUYAzCepDAvNytg8p5WqG1m67fNwkyQfqB1QBWmxmfwFMvUBmV",
  "key29": "CGw9bWx6twxeczm5kDHkbasdMkyPu53gMaZLExcQ3CCog7dKpHa1dUhuZQTo1XfZ6oSa9sRERGt71vHhTXSfEgz",
  "key30": "3hNk4vvVuNAhQvtqcYWtKxWMbSv8Gc4GjMjTScZd7R9ydrH7hUSFor2cJ4UKu3cNfjoY4TRT4KVLjvrRWk7H1u5F",
  "key31": "4LWBMcQrv5zFza6Fs4kfSZbMJnSTzqyyHDjGhbZaCrNhrwnbUhabKKi7ckQtnxeKaXaGWLxGScrANaq416Eg5d7F"
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
