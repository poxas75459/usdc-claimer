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
    "5Ek94bXXLksKDsy2Ut6rCFpQvkY8PM18kSsdkvn713Sqtqb694QGE724aPmmGhLGnfZDxGnAgHzYoAFKvN1c28XD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WowQ863ibE9fhpLjgJTtRuMKRxXAUdgqWuh8hFrvBAPfUz5Z1xd2bbQZLjk6oJeSysWMGojPfMWdX68hhkz9kCF",
  "key1": "46hGYNTFiHDwuuuj8Us5dSYH3xTwdcfmG6jbZ9ZBu9bvAKcpQqPPuUqMauUGDGd3SyQDY2qUpPke71ZYpGYxdWCM",
  "key2": "4SDted7G8SkXRrKxjsqxKmCZhnB41DyEbxTE7jnSehdv6TEVZyXVuowZt6KZi2xyBsXyMMMBQDTrPXQH6twjGyhi",
  "key3": "BiM4yyGYHNNNiVdBzE46XJxHeLELKGybuBQZoTfn2S7hyAfe8wExDpdQfn9LqtDZaGhG6GSQ4Wr38nnUuE6XzPT",
  "key4": "3wYZ2XQcj4FWGdmkPdVs8b6deyiPrhfdcw5qU4QEjEQDZhpZChiBiGq6svWoW6LXXZZ1h9FmZGrbQkVxA27imjxA",
  "key5": "5QLJmbFpMVejs1aUU9JWsScopQUwjM6iLAT4LKp8wR1mdwEWjuS7PgMHTqJaPreAi5cZRDG4BAGgfkRm2426cEoB",
  "key6": "4ib5vSrZhbZrcUstoymVWoQvRgsv4348Bhrs8A9AhULMvrD7XQNx8r7gQTpDNji4UC8a6rfGD7JnByozmFxXZkpn",
  "key7": "25LMeWLMdWJpQ8Pj4vy5eUqhHhc93nQYZevBEVvAEqvswKqr11UhavYDpbvRjXwqtmuDWBy8hCsudJaSCU6kQnCK",
  "key8": "5CwVcrWCxAzHJiuA2CvUrd6Kx5WTwx7JMAouCGTBL6Sh7hu3zysnPXgbDwbk93vB78GWvt8KtyTRr14q6akvKkG3",
  "key9": "3fw8LehW7bfshNBqJX2XRHLUMAs6ncZAq5jEay8FAUHCgLXeDKb91fGmyqZMi76ojNedMNM7UrEhhaQW9xduGhWj",
  "key10": "3VZaYb6GC78o1JhdHGwpH4oCvzv111Xd6AmCP18gRKt2NHfUXS5VnmksAR6XmL3wsKKewTKwchuKEwZ8xWnmWnYT",
  "key11": "53hPSzWWbLQ1pN5YjpFN8xridQaLaWWZptwy1KYzbQZKJ5srPvxJxeDfoEmNkywecu8Njnrg6nAmDCYWqYEapX4M",
  "key12": "2Qvgw3ZwVo1fTzGrWVQi6aL3oPFK2qS2bvCSgkpLPsfYmem3Lgm8z4znda95cgH8sXBwCfa5J29KmbapyY6GRN7U",
  "key13": "34RQKvCmBnV6w4pbBYNjCfUTWvRNGuPys6edKV1QfiAiJVDE53TtvbKfDXeYtT9bh5gmxBwXgAk6LFtjHs3HzLdY",
  "key14": "5Spt3k993NkLHq9htwQVWZxoZf3zuLkJXLjMYsN7PxJnbEzFR1SpZ4wUhaFTLyp9aR2LsnpeA96MZCKyfuz3bCcR",
  "key15": "4B3c6aojYhvfMN34yw211u6yRab7hHgQVzuPt647zzdbHnfjnrbwbafSznBrpZju4GKCzx8CKfMBuK9tTQQbYsU4",
  "key16": "hFZrBhv825o4bkRLXefVQaSDantxyECCmdmefvfpbrRkGSYLzx9F4tvj85CkfUaMXQN6uk7F8vV3qR1E9JgHRoy",
  "key17": "61zN9m9SQmA8E7WqwoJA2n55hcTRSqBjZ9f4nhuspDxh5nGQKUhSxseK7CNYf1g2FXMHr5SmAVq3tU5SQjFJXqDr",
  "key18": "3nhHLzMWaPMFQrz26NTrEKNhhKF2sRAKfJf4YRjFaShn7Fww6E31zxta1GLcuFM3Ad3pQMAAyuGc5vPYp318g9he",
  "key19": "3R3ZTGB8nny6igd9mxdC2PSXRQoXiVtHPEMw5eBWYrbbnFPTP56mXJem7Vzm3mpKTDHU9RgcmNQpwupC9adzLa2N",
  "key20": "5ZpQRNWt7HNB2qrdTWhtaNzAPGQzbn8k7qqF75be8K9eXuXeMnxGcKKKczQiwqYanTtritiZ6vGZG2SPdpnb8zvQ",
  "key21": "uyXWBHkaFQJUskfkVAiG3jzk2g2jFj7psRYPeatnVnLmGcCpMtDSYs1qV1jvCpsULUfRNbqjXdG4pHU1jJQw5XQ",
  "key22": "3b5xfNcarn6ettnF6MLv9dtMQvFUSLwYufJ7Nr6fvmT1CmUaNAXte68QWnLWrcgxrQaQLNXjoVgTBbrSjpqKqTBq",
  "key23": "7exQWsuDcUTsgjevDSQah7GadjLteGateXuFuzGFDPb1zgrraQDjYcARWKW6zFn9GVvKCyf8puzeLHDoY42tC8N",
  "key24": "2ZgXeD8KcfeG8u13y2VUx7m59cU1AcEHttb7MbiaLFXtteq1b33PjWJdbE9F2Zb7iwbG42xAgYWGYDMsrkPBMXzA",
  "key25": "3zDC18FSUMPxaBP8njJuv6U64UDD7DhxUGWzHpfHY5QTFr1LkDdqCFU68kHcXxH2WpLiSpYwb5UEbyQsxWGXMrN2",
  "key26": "2duAsmT4C5cSDdmHi4VQb696P3aGpLcaUPVy2HoVzADPeuVuU1qU2ewX8rGeNfDrdkYbYMxYvBYjzTdy9HPAQtow",
  "key27": "5VHvu1Kcwg7NhCx6bQhJZNSe1AdtfXF5uQEdq1WUokr3mJapr5ZdnaLNwqhjCFTmVeVoMiBirEbMc2Y2hadpwrBh",
  "key28": "2wYS23yjMWCx56oHnrzuozMYPiWibw1qgCCpSC7so3fpBaCe44JeTxdTo3MB1RRWeaWrNR7BUTfq5w6wZMg8EfeC",
  "key29": "4TAGcsJRomADFQPyYY927yWexSrCPJJro9RuRF8jjsQPM6Jse3qXMiyfoAgVmVpgFTJiRrzbxcXNc8aAyRWEHEam",
  "key30": "dY1ZZdTrms7AWrFozSe1yRFDFvdXgstPfXj5ZenqjwfbMdp7BxFFTxGH2wmEG15R9KsSHqQiYHHfP5sBusZAZCx",
  "key31": "4rnLRmxak8WHpDaTMM8b4Je4ZCDdYBCLz7uH35KBdZy9Qujw9aCFj9fVThbggXSD7mF2s2tS9wLztRqzVeoMqMnt",
  "key32": "R1q6zeFsxHC8mqSPMDu9gbKkEWHw4cFnQpdT73H69GjL5A7fMyywMA4cX2eopMA3we9p4yheG9v1ptAVfAiC1vM"
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
