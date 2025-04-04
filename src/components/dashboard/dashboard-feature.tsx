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
    "4WXtozGBuP81EvVFjvQBbt6v6zU2NAGewriV94g6UBkrom4JZMvF8syjCjLCB5nPAGXLRp2pvPt5xnPmtfbEfCUG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NoJVJ6eGXRaY2kZPqj3ELhLJTVQf3kMqdnfT1S817wu1AH1XG9NCBx9M5b3AEhzSejbdTVb5ZPuGobpT4Z7Xkb7",
  "key1": "2bdZNm79oxLoPGNZiH4P15eyoHtVa5ZGvMQ9HdsDrEh3GnHWXuLeY4xB58pKCMNbddJ8UJvLVMw9faPJDSVJ6tJV",
  "key2": "2KH7DLG1u3S4H9or8dNa9YPaoirVr6hzvdQNU5xqSEgQh3r5LEAsfAiQs4rZKdgCqVFb5ixPRT9PcCCqeW7nGo4F",
  "key3": "4rwSMytWzCBXq58ghLLhwaMdGcv6qJZAXyZeqGiXvpQmoCRgkwUMmD8coD49yuWAbBt74AEBLJ5mtzFFV11q9Py6",
  "key4": "6RUkZTZeUXhvVTH4UFDc6S8Bf2tfb3MuKb1vHTka3PvvtBTzWyBhJgVYgvqbQPqM4A5YutYSmDBUBY4Xuvtixe1",
  "key5": "47XWS2hc7zFLEUudZwHP4GCSKuw7JNhd71QMJjJyw4MXouaEZV5rDxBp4LPpGFKdosyP4YBXJdhpDtuKRgRE1YkP",
  "key6": "2ToVhi3t4pXg1c1giBviGi4Tw5BhWoiRHRbumCTusjPW8EDAfgbwCXqDRrccppFKaQ8r9Bp4yiive22T7xSxqkcV",
  "key7": "2tF3yK3pUDmavuSrxfGQrTkgpWnsSEwyg9eGp4KpdA6XgVkgqXYpJhr38xwemQnj8rTHumFFdGUotutGD7mBMeNu",
  "key8": "4ySRXA9zQDsLGC3iie4RdMdc3ewTTHZgwHLH6nLjberYdZd5jnGeXH7xB5CLCuQ1obkXAEeziFMBdC7PSS9mr92h",
  "key9": "5MS5usa4VPWt1vzEMr1YQJBJvDPCQ9Qe1AZxRuiLjCrCJHY9LCodsq5AHkViukF5TTKNZz6eiDLhnB7Vrypko4T4",
  "key10": "27qRQS7VxRLTXg7os4VkHyDzvVmNUfg5tjb4zMEtTir4m9o2yF3CoLRk6itvz5qJTAB6uT8t3KFwPirRP3CXUqBY",
  "key11": "4eaD2Hw9RJnqgRSJLSPksHdpUtHvDjTVPQyyPX9hVAiTgpgroYXTevknFCG5XhRjebsZbGByHg7ie9GUsm13vLSU",
  "key12": "5vjgszzbgDrnnKfcZ4gCKfEdpRTkJmJFRzwXiwXhFXvv8yK4GqUF2mx6vj9pJuxH1M1b6jhDVZDXRwACiMdRwKcy",
  "key13": "4P7twRBWyzjDunzXnLyJsnYwRCZiLNkwsW83FyTHribqZR5qwiHcBvgwLckNdpFdLeyoRjHtJxW9wKF9cXF1mxWN",
  "key14": "G2SkegGDvfbuWQ7GoD3opUvhAQqsCmZ9MvEU5qpL1Ud4i951FuU6HeC2DHTiCy5DmEDg5ZQyVViZMQxu2va6XtJ",
  "key15": "4mowSnoismjrEpmbz7Dyfww33CcrAjYn1Ch7ZdwvDquXoWgEdLATUX1wpVbonbzc2NMYzCpzQ5c9Tb3KmUrj78qj",
  "key16": "482S83ZwB9YxQUjQB2ntFkgrhs3UcjfggMk2gxw1PBRBNy5iTuKjZyPmYRaXEs4yQCqdbi2TzeQPbG89pzEL8PnA",
  "key17": "3BPap4uRHF86SpUgbpcSvEfrd17J3rxDFZUvTXLJ7pJA4Upj8S9CEbiTvFh91RB2W7XQzp4o1VGbLqk6P7BcYE8M",
  "key18": "5Zs6e93K8xRieSDYf463Ct8vN8NPuckTNBTFm7iBx5swRVBBXzgmddP7mL36aLB6GGLPGty31ZmE89VUcFcGgDPK",
  "key19": "kGA55qRi8r2wQ4TNUxS7ATN3BcGfid7DL7dGAg96iKpqUjAjbqVUyHErkUHN4yPfcYKTdJjaF6Pf5GLw24N5AcK",
  "key20": "3pX2hXp8svaC9AhacWJSSnGcKduEzaXVEADFGzVY2BjwyLinCyXtptmob5DYH94vBVybFBgQUdyGi3oXSYRDFk88",
  "key21": "3xBvokRW8DE42omKTHDLFxu8EmjHYTGbFvShb7fH6n1hmRpqbpaxCPAQCDr1mcPLNMWmyYNhagUQJCVLvi3UgriS",
  "key22": "4wk6chYQ4DwLumZVBAC5KHiaSFYSysCh9pCvCTKx5HbFG9Fqf7ZkxNVyFjwppLRsoQZmRGC6tnmssMy2zDKGkMX5",
  "key23": "582XkWQHLvpz38BSntjykSRJ6mP6DrcY2Y6wP6jVHnN53KfMGX99bWU2CEdbgQ98Vh9GwjXzkyLciCmaZm9Ncbej",
  "key24": "2XhUHALgWJ2AP1VfThAgAxtidpSyjbCuypjRa3VjyjYrVQyVsqUD2Wx2QnpEW7Gqs1U2iQyQevbR3XF71pdgAP6r",
  "key25": "332is4WFS4pi71kkm44i75ETsoY4tg5C6bRFHUh49t5xwfvby8LhdJbNAA1dhvbYQSvhj12VPaLgxHxbEKauV1ue",
  "key26": "mbrgq3dP7g8e3iL7M3ThYZRVHXstuq9vnBKmDqfk9yfjDcvBnLiVCwep2dShxoNuhTcZeCx3FbTGsc6tim6PYs7",
  "key27": "WMR6gsvKpNFFfJDhZxYBzix9cTeCSpKvBrkAFKMUeYHSoH1XT649fZF5jUobJ2QcZh6TRuKeYPm2tgTB1pbBJdz",
  "key28": "S9NJZWUXB7fuHfJW9ZJoq3KVVorLDG4sKXrDT8A4kNBvthd7DBTp7WQaEouiWGPyUKjasrsnxoKGnH9eqN6GhtT",
  "key29": "3YZous97Mn1J2oUxUCEpkM3JzzsVDbpbZ5Kc4DqfAVNaZxUsieLFuFhjrVrHDvmL7CwL8i6nrodub1UrAte9qkFk",
  "key30": "3Lts1q1dRL2c8RcGCYVwtpHX5PdCgWQrqV7cP3bq2Uu7VaFwJDagy9QYMDZENGVyDv6FZjy4p2FTHU3aKb9BZeUB",
  "key31": "4Fh9FiuNWkRsGgSo74UHi8r931nFu49ijNvjPhBRygHCTMQhBkJcai8AWsNC9wSXyQ7BnPEbhsQS9kJt6AmNL971",
  "key32": "WQLhCBBJgcs4rSayaSZsszL4z5QWpfTRgW7M5ehVZdnQxkgxo2BFktVELuGca1s6RTPeTo1Z4AZY2KU49uRESxQ",
  "key33": "Mbqkfc6JxS8SFDhkaAFtiRmgMTSWRvgnEurDqLwQ7miri2eVGK94a7bfAYG1cAEFX1WJb3qu28a2xAvSCdRBy35",
  "key34": "4H8riGU13rEmZ7uGjhXgsEezTZFN75m6nXeweW6UvQLg838Yyi3BhQpLGn7DBu1LuWgm8g9mdCzDZsY5frqbieds",
  "key35": "4E8h9B35J5PaprkXDhMW6LeeuXupV9STyTr3awZYcHQ5HyRmCYJyDBWFuVRbHNNaR8fsZdt7GdnPAyLLTVPYD6rJ",
  "key36": "4LhAEnbbMvxNUmndHzkCkhjPjeyxRHxTVvRkcYfoEhNYC7LFPnFcagyMbpHJQkSu1kQgppjVt6EiunFQt2ZJShTg"
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
