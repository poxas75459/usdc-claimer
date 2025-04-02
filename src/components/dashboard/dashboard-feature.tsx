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
    "4hcdahqMoAEimCrT9huLq8hGvoHiAyzWV2mmUjEVb6r4pPRE9ARTC1Gq5vXENt2ZrDDNUq9x3kAW2ZNcneLrvoXa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5D2oBbEGMzWm8S5iDUEVDEScL7fypWogDPauhG3YfoMwuaxsHvLD9KuhyMmp25ZAsuAFaBDBdx572bzoL4UGF9PQ",
  "key1": "4aZEnTRHNDPBhUBv6p5KrzB2xrBkxHvV4m2zkGd4DmTyUifWDmsE4Jxk9BdoJJCvNgGeVLBFs7BUjgUsH2T7GtyM",
  "key2": "vJVJmqomCikovnZFWtQcxmn7hwXXqtErNLkmATZ9GnmVrAxFdKx2gaq22ZGdFaivz3QBv2zX9J1Cn2cn94rUttp",
  "key3": "4wTDyiy3MK4wEbLJ7TND3QNS43rSEjpRQrzjnQqrtUGecZrh3dbgjA6G3EG2FU8LL4uZLmLnYevhRKUXwnho3hu2",
  "key4": "5Ctz8fbHHKz9P3Wj1WH33DudZ5JdgVoupSQ2R1TByZpmj7ePMqkBrHfyKVGzBQQwMiQg3ufhwhJB82Gv2JMHYVZL",
  "key5": "5XbnxS8CSH3mGroeqyh2BjHN8g94SM1aMAGEky88biXkFu51YFomVHisWVRMvtFDURECG6cURuquuiRyBdYxKyVJ",
  "key6": "3vcyNsDyYDLyfSSzBFFTsAVSJkd7WtYTJLe9iDSnMu4rKEFXRTrMaXs8Any3nRd7dS96DUKfNJiKy5Vh1mk7HkGk",
  "key7": "eArREZ8k3DSBAwcMqzbuXLu8EFRTB7PjchmzJ9yMxoZwdXFntFUdK6CBeaW4kAYgWMXVPmkMy4X4ZQtZsDtpzDk",
  "key8": "3vLUffLdvaMMtRwtMndq2i3iBYnVeew7PMkMRFnPiEgDvQDv277jgG8Lxu38RR6cVmob1LuLRFRtv2Pdd2bErZQj",
  "key9": "wcfagipcLF2grdxuga4NnjqbZh8vsCe1FefSgSyekAhF3g3WKubeDrwPjWpzzT5HrmrVabeXgnkb5UctCpY7iTG",
  "key10": "44xySHA9iHYWYJNPL2xC2BQZGMkkXULKibShX2MkL78AgatJKoWFWhkkvzfMuFzyywRYt618dMmvz1BKU9Ljx3d3",
  "key11": "BaenSUH2om2ofwRsJ3VDjuxpSsa9kZ1GkiEurftZruyr3ps21xbfNSMhwXZcew1KbG81q6aF6LZ7kvscq6aBQ6K",
  "key12": "CgebUBhpi2ytDCCLBNNjPX73cF8qkTmt9xqnN4XC2b2NS2nVRSuCni4wm34kxy3Eu14RerVX8NSd4UYM7nv1sxQ",
  "key13": "4RkajELMm4xibEETogf6RBBZ4mfwmHTYjUTDfNta1raXn3K8uKHb6fiqakcdXwQy2k7QRzki2ZKert474ibnMoBN",
  "key14": "4yKwPPkwVqECirxBvRt9JRR9dEhG9hJbegf5KLwdWVfGR1dabviecyLVmSDiTKk5q5YahN1zUizbpFU7Au4VTND2",
  "key15": "3xTYQpZCPQPVS176ToVaRgGSjrvbAkmiPFhB6QLesjYUKek5CTRo3q94ewACjNb33ALWjTwQUxcxMhwdktLKtuR",
  "key16": "389onegrKYzbvkELd9M2JH495WSXqEtn6EUbiADjxZhadFFSFPK6JGNNvWErfJZrAwyyrD1ikHEMeLdYgASsqDHy",
  "key17": "2BT6Tn8BGnYsbCC5iP3hj9Fz83BnVwT1Vg5Cb37eu4Fa8LME6htahKE8nhUJhoCRAU3dMTvqmxuuJUhmQFXuwDpY",
  "key18": "58EkpizFMUbfV6CqSyMNPvLV5E7wWdhgMGdrX2LYtRwhtSLM8nws56E2sMn3Xq6yYe6WqsYk4bDEcJUmYHg1NLXE",
  "key19": "4BEiTZ5T3u1pHEvRhBbMXdDR3ajh59d7r5Jad6Y7z7oov5oaBEKQXCmf753fwZipMZn45NRBPUjoeUJ4JD3LwhbV",
  "key20": "2JeWtyVvRJbBm6PxW2Bs4P7WwqdFjGD1giMxaSmWZFah9jeFys49m6SXnc8gt3bCB1s1PuEEJCfErtzo4oDuS1wa",
  "key21": "4zFZYdsMKttJjBZqcar31tcTHHYfF3hHxrPV43wF2RS93k7EELhNuc8TKqDLMcqY7to3y4wHGaXRG5ztYtk8xXpD",
  "key22": "37ZFjxEeyRdSMdy4EtQsd2FHcrgig9MU5B5m7uBVQ5mKRcsimTymJTbsX8HPAycz6RtikH1kTKQvB4fh9hMY1xaE",
  "key23": "52xiqG3YDN52T2wun2ZTY9iYSYq3dPLLMij1CeaWhypUZjFxcABQhNixPztYvGVMgssWf274RSCvDUtZmT7ukBo6",
  "key24": "33UUBMZtrWzhPYx5ZNPpVJkfj1i3WHyPDuoF4NQkup1hn3yWZujW3rxmLKJT7JkB69MxTR6jMt1mEUaBvsfu6UhL",
  "key25": "4J52LPuEUkzPK4GLS8WM1YDMEjhQ1rSGTvgjGBzPZSs5pvJVoownGLh7XEWBPbKSBVygZS8znCGesg45EHuGhe79",
  "key26": "4YewRDeo1uJ3RpQ3Cwpr7EPLZVzrT3YfDnnY2EgTo9CoUQtDZucwWVwFmPizTUwgH2ZHDjQqVb9Fd5Y3W5b4zbe5",
  "key27": "2z6Y5NmF8LejxxknpgwspfMgzjRRtcmXAdzwpbQ8jaBCEjhqSeBM7rfiFAn4iUkT24NZddBH7tLDrVuGGr33U8oV",
  "key28": "625bRzu3HvPwJKbWrGChryDpFSuFqmiRDYZKCiKFYwFoZbYeNYdC77Vs4wpSFEPJFpQ3azSiAJG2A7tyWyZSCk3N",
  "key29": "5xuoH9VQSHG5fc5u9eSbFtKSkf8YWxHSiBRaqioAgrREzQvybvVZZVPgMg4Bz1JeUatAJfpDEChjRUe1naeY3qFu",
  "key30": "5LGAzuQ9hhHa89pMQ66rF8cfyuDnaJXDsSfPdYiVaDg15kwn9aXDaKSXPWbohsstdpHoxK5USQmgrPmMYckjKkXo",
  "key31": "5Y7Sei7n1wht21PG8AWXZBWu2yBnEZ5Yz8hX6AffUeERRm7YpH9Rh8sLVpRnB12WXEGFhahj9j9DeeA3qYfMWiSX",
  "key32": "2GYvwvbmBXq29BqVxqb71tizkeYvFcdEiJxfBKwLANWfovPFZRQxMwB2qNrZrGWz976oFveo6s5R4FUbSikqq8mC",
  "key33": "HEHJtyCUxYRnLrdYutMqG7XGRh5d4F9S9kwPAVdBgAEhNRJSdPW5qBMZFc52GAaWLJFujSSBNxCxZAUhBQiAAmN",
  "key34": "313VJFeG4aCKzfayUD3sAtqm7FAqtXDdibyMNXx6m42enKyRPdtGK8uBKeVs5uKxAWrFG7p37kA24pZbpaaoq8PS",
  "key35": "2rx4dcuvruXKr1YNktuo3rgWvXsSKRjNk6CwQWn4wDN7NRxkq3sGfjVDZLfcLECZeZEst3KshHP2GzKaHmsSRBnz"
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
