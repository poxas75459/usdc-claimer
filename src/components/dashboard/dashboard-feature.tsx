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
    "2YoJrHHTKxRU6vp8KeHxzq9xhDQu2BEjZgYLtHuzBvJNmMBoRFdMGNLijFFQitAPy5NEoghkueVb3PpRN6aHs6s7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uYjRiYPM96UtXSpzwdgGAd4NrENWBqL8mpWdw1fh9QXwthp45gqfsVg1YCkKTxB4usdtZLk6fDxJnCExJDNxMAh",
  "key1": "5ziN7DsazcoM8o8MMaM5ZjkwGqxkMuWjug3Qmn2Csxv7xCAaj3v81uWrYo4AGC1u2mabxetXkhFZhViCQKtDRxCo",
  "key2": "mU3DEBsiMBseGdbgzAoDtCoaky3TWMmzLL7mUVFA8Ai2Z2N92iMC7YTvk64RqzzFKERu7vqArmTCce4KhtFqEzV",
  "key3": "59fR3f9UceKS4HcRbpLaJV6B1m8jvDVeLgLn4NrYAzYQZDxKpps6e56XyjB1SSknMkPFH6uPcEUxtRQh4bD8Xbdn",
  "key4": "4nvksatATcUkkYKy9oUraZhrc467qNg6UZwaR1aZPaj92XpVS894jkvu4C181QmeiftvQBVJggBSw3uesJgV4JMB",
  "key5": "PbcMF1pSmp7yRJuoq4KhU5disGjbDsPSBapkzsd7N3Fw4w1K9QuZcKkxabJdqAj1zfs516FoTbGWqf3cMdz1Sbw",
  "key6": "4Z6sootWSUqoUCZh5if1D7QiCjZdpTxWr8CLsfEjTLtDsFqAY6M3z9xxX8yPKvit6jr6xhmHQcEJEPTDBLGDP7RV",
  "key7": "3jYnVGT7oBqKS6j2AWCeM3xUVoefPQt4jVJJ362NXkiewzHuK9WNGEvqBHMeXX7BABVD3KFzmYi77BaZsvijUx34",
  "key8": "65DDr89n1KjsvYijVkKmLk6Y6qTCnPxZwMoocUDa3c1TntmHirrqQ715NU6muVj4S4SaEtm8bf77BtzmhHNVsgCg",
  "key9": "3EHpWFpWyv4ihA4VaAAuH4ihHDdbiX5tFWSKbH9rYwECM49kND5CfxPHfF4SPX8VDqU4giwVMvwQSnEPqUxeQ5as",
  "key10": "2uxg4T5RmoS2d1sP5vKw8z2Hve2jh5v7ntbLj4bfMXB3P34jwE6GnNvf26W4zM3X3aAsDSmHHhXcPS3SzHvUUyiR",
  "key11": "3Rje19EZNUxtWEdF2j5gWLjXWN24Qreh1CuxQDYcAPWSjFepcTPKZ3ZZQhYgQ63aHBfvZztPnAByvax9XtFbyWFL",
  "key12": "48vNJG6twqbtCWNvSGz7SCHvikz7WMhQXNPdpBq3zTp3cU3Mr4m1i2xsHBcpsHT3LyrCmX9tiwz8AgCt9G5tNNAS",
  "key13": "4VUmL4GR4YhhsEXaEkHB8h7ef2hJw4ccb4UHYddT45DLCA9Eho943auowbuuMWwQMyoPLJREznUwkjfq2uKfF2XB",
  "key14": "2t13tFvyJFkVz3ZQBf181FVyarAPasqn4zV8hVP8rN625UnpE5S9F2zKYwQzXafx2q1c3RLWsukMnFNEKXMNjQ37",
  "key15": "2c91UPoBjzmfARFfDcpPZqgyXEJ9PonGCHR1D1wHe5JaVg1HhvcKhhL9wpMMJduizgVm3EoSg22Q8vP6C7VmyW4n",
  "key16": "4nTweXe1eQHheZSxff3Wn9hMZcG3rCA9AVXXf8inVu3XYVTzbcZmHhQNKeewgYx1ivLE9xERV6N9bYV8o4bNgsVt",
  "key17": "65da3FCXwL5nyKqPCGphhp8ppGSP3X4HVBBUyX3JSjD5EqwCYSiR37VRydtuwMjhagCBCsqkNkdUWHdj2UAbVrRj",
  "key18": "3V4XEPkptfXHCaNvfkK1nWwWKdFrFrTZddwnB9y8x9WvaJChKvQ9uN3f5goqS2MHUR5FQDjwxF1xzPerEGeP5oC5",
  "key19": "qzbQxJoesNdyrsSyabyQ9hskDk1zKfdwvVM1ki7uTtvbv3mnS7RDN6kWdoPQtp7UXJr1Kpo8LbkXTcQEchwWfEv",
  "key20": "2qxpeD8sohzmD76XJMSbRXU7Lw1LWf87m4dPqzVoRkpeDE6UMYgqmMgV2gzkH9yPUKEdkGo44Jo5BbPTVRwWA8gV",
  "key21": "5UHRNvt59pSaF1LMTZSWtRH2B4k5qWAuKfSJjJQVLKDYUDxVgUCqJ3Sb83rJ62Vrj7uMYHyZVmZf1XSyoqCiaCcS",
  "key22": "2fzYf8assPHAQihbxSuCQuNttAJSJ226kgMAC8UUedmrSZUwq2ULMyeGbNPdXZbyGfq7puPwiuHzZAXfYap8pgKd",
  "key23": "2CaU7JM1Fr8Woa12XZ9EpoZvdGSvBRKaziUh7FUoPw81vtvTSTqJs4RL3uLfN1FJq7tim1tQWzMarJbWNDSkXRnm",
  "key24": "23WpDpggeP9ue4iiRRs9jmjb5mWrvbS9zYubQJAZQf6RW4jd75QgXTGEPA5dRGBJDU9cjCDhF8Knb4KGbR3jWFfL",
  "key25": "4HVKGLHX7sPoXfbvRK9D7hZnoBynAuyqCTSw7Ugx2j2RVbYXhBLaYVUUnswL6mNpZ2fSNcvbUDBDP2mtZVbT4QVR",
  "key26": "4qwqEiGoaNgCrDedv1brthT66vWrRhLJkaNx1Gqsfrc4Hhwg3Dy41zKwsa33ZX2mZuBuxgqcgznXapvreECJQNgE",
  "key27": "4dRqRF6kwMEwMDhSFop4MjFsXk9ktcLGzkernQTNsYiuarWu8uESeRevXM9XenwzM1ecJbV59ShCUeiqx4kAgMe2",
  "key28": "2rEcaqEwqMxmjtBR1deofBs488CfnEHyir5d11UKEeQgD3bXLZEu6dcWEJ6rdHvmr7Rxc3VWUNBFzgeDMsjiVyMY",
  "key29": "2y1gvJkUUSecFfxvq7ZiaqScirEHKpxWh69HQdMyyuBbTX48EgYmbwMf3bBFm1BFFmcfNkR4dWdh7dQB1rgkcp1T",
  "key30": "3N8se3oMVu9rYB1sC2RwBvjVHKBPVMto2D7Pu4FXaYnnYQtyHzFVhcxkzkRQDjTx4ghDhppBjeGMZLS94bc1Vh6e",
  "key31": "2pA13U4YcXNETrPinV3kkGe5CoURSsDvPmNFvjV4W1zRpMKp2JDE7SRRHkrj2WJiyBxJg8epsiGTWkvAAYBxuRt4",
  "key32": "2UwzCCUrVXtTdMF9tTYhixGvCDWrGjUej61fsr2VmirFU9CMr7RgiS9XrmGG2bhSP6A56sRYUwSDGCSqPTgQDvUU",
  "key33": "2p7hRw2evQkS9s2BFAdiHjRD9zo5YMRN5dsL8jZZpvBFsbu2SRj6p3H3QjiVgSDibaobdpKMc9yY8EXk3bGgBoBc"
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
