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
    "4YoW9ozN85WPrkxq6qsxJn9vHZJWnHYpKZ4Ls84VFQNmWeKxoxNBonU6mrExsdy2yh9JZ54MNN8N3mKC8eWoZWUs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61Kq7tKeqnyYDqt1UAgHScrxLMBHaCAEagR7NJF65jM56cAP7oS4gB68ngpipR4xrcMRqWeuFJQaKEoDUKNgKyFk",
  "key1": "udGnFCSsrH8hwKmSKZF5fhdwzebvneAe1TLFWVxLtFufWQDpxghG91mv4ZhrthJKBYxLqTfdZVyzrsdxmoZ1rN4",
  "key2": "2Aq6PMKEuork1f5JTZFLFMJcV3iMK4VJ3hub8AhuEgqy1Nsr7hj6ACCA5WEMwsF5kofg4rZKLh66m5Wz3bT7rFd5",
  "key3": "3KEGdsLxPP8FVDqJ6b9wccV2sWFUAp6FJoLkAFHujaYKxMQCZ4zuxRBgyK1TfapspLqnKNow1sPqCrb5KpbKGLZZ",
  "key4": "62MBNnofrUHcbhD6Evj6WZC45BbooUfPtykDDUb2Y5m99zPzYeeTJYK2bAbhykdbKVVzRWBv7nJbPUGHtXWxgEEd",
  "key5": "5YYVpwRULBqSLYfFj3vVHvUfYiTMeUZWXb3wt9odU17co6swvp5TkbQZNCuPTS4jWGEP4guwyHdsNugoNFYLPtJY",
  "key6": "3FmNDe1ihiN2KCtriSFTiiQ4ArE7V2gbLkACETYm7tYGHCxKrbsfEQ29V3VAEz4efVrD4vpAEdPwsmEjD6rkHpup",
  "key7": "AtvBqGMTV52SV2JPZ78QRrwBqqyqrZE7PWLbSnPGpttnhMtkkp6GUTSw5wKjkyBHf8fjeyotcvJ5y8LTeuEmeua",
  "key8": "52j1Y4SUpTDXu8Yxh1nxXUdALiuxssmkGTVxscPv31qfHjQxTegL5APekeifip9q6vv2fVHuw9nwEaaxYUovMMiY",
  "key9": "2ERusf3H6meP5kUeyJgvZf1BmeNQ3pDCjc9mLkLBsJ3cDzaHpsNKS4hCJqNULJuZUdo2iAeiqaCGwnTWJ1G5YPVU",
  "key10": "ygdCvFALKKCCQb3zpc87iXsC6SSbwoMmjCata546Q6Fy98uHheKWct7byNKJkS8Ve7cZ5z177vBtSzGsUMhkV2V",
  "key11": "3tGaxBdm8ddBesfSgSznsq4yxpYui3XrKwkeyVTjEXA62fAUBvAwbck4Khz9F1VEcNFSR178teQMyNyuM4PnVXmd",
  "key12": "5Xb1Q3pADdkNEVusTiSTdZTjpzwzQt7N24YZjKP3ZtUBYexdFqtKhkijQ9eW8UczkvnW2zmWa61RxEUJSs96Xnek",
  "key13": "25nWpF1T2cQeud25EoCkGuYDyPgmZXNftx3iTiQoJhTby4xXYqXYgonarg6RiMyfzi3Cx5ntqFVtwGAPuAt7aU2d",
  "key14": "4nydvmfzvYUBPJamGHoDQKpVQDqPuws2X1WsoTxMx8JzMnr6qMFNHrLU3ETqcmgpJMew3RL3jL6acS3L7qi2HebF",
  "key15": "n4VNRD3SWsYFkRNBdKQnZ1mYa4vDQHfwgXeGLLCNBmaXEvpFm4SpGewkW135tcCt18R23zV6zE531ZUyNDFKCKm",
  "key16": "PEPVC6uATbhk5B9yzcsA5jaNq5YHdDRcUdcLQxBQot2kebJsLub6ppuv1ybTC4NHW7NdncYv1kjhTwBFuBJGZcP",
  "key17": "4qYx7Rfc75Dkmv27iybEcrHBk3ADxZro5GbrS5FkSJWBnh8icTf1967YmS3jWrFrrEAuYtFVxjNYZczLP1SXyfXX",
  "key18": "48VthkhmkpLr8mSr5TaMR3mH5GwD8GmC1qM8Fgtfxz6zydVb1BUeq1CKjMWYbEfphL9QoHCN3mqCAK6BuU2ydbzU",
  "key19": "2QHb5m9n6vPUeXxzn2jT733FgmjdaHzytFRF2a2DV3wmVXPk2Xj4PkEvj9Cb7b1Qd6YEXGywgcDVbL1LjPRB3Lv6",
  "key20": "MGKSceK66dDT9W89B45rmNaZC5qGDR6WbJSnJquFMrarMEk9q46jDhxGKP44Rr88XBjsw38wDZ8gDjHRQwvELGi",
  "key21": "3rQA8CJEWNJ1qC8d51XLTF815YKq7zdoKMwE1f6uUD9duVsLUPfRXxSThHREWQuJzBiT2JsyPx2r5M1f9qLwzi5d",
  "key22": "BUYjw6265VnizMq8PzKEVVCV5JyhaATHkXDkZrpPjKjRUW9dpHXkPAkN69Ja6XrKoyUyrBFBKfMs1CpkJLAjhUC",
  "key23": "5UHMsxUuTr4nf58FUaiUWBW6M2RGQAYAaAXbF9jEN7qfk5ZmfBdbPNbcA8wAf9UGgvw2uefdX8RXaxEQw8L78Sa1",
  "key24": "66hqL4TaJw3WvUTctRW1oJ4QShfuG1H3E3rn7WDrvAtJ3Aruz1sagHq7iHPX3iCiYbFdLozxjJWoUk9B45SAqLc2",
  "key25": "NU31ySscaQZuZgD7jPMNccTLCaoYCQouFQ49wWPAV5TvFoGMbPmhEdbMJJbUD6e9LJACmvt3Z28WXRfuoNjzLTX",
  "key26": "3wnKnmZCsGSubEzYkMCgzPKWEpyuo2XSKJo1rDGtUhjc1qVaLFrxiMyNoRA9xLxpr4UDcvrcXhV7hVKhFMZg8QWp",
  "key27": "65yGYF8Ei7ZcQAdvNMEabwzr5QpGBVyK9QiKpB3tD2TPZhJGX91Uvz6h8ZZ3S7sY7LqRFQYrvCGQPcT2qs9EzYYR",
  "key28": "snLBn2pyvmuzqPTzRaf7wpcxDdPsjyaDUE7V81jE8P5miTR4M5KXMXagRNppz9gG4ob3ncs5jp8txXmkEaQLqxY",
  "key29": "5pZqsPgZjEeDcEhWeNw2JhwNQgcLheuGdadKXyiW1VHqvagoJ91RtYFDoDd7Sf38nbpKH8opvqAmtL14bJT3KrMm"
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
