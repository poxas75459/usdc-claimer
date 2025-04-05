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
    "rNyPNbvYSQWH1y97AySYbAPA8E2QHW2C26j6PHWgb8hqwVwETdee2uAsAHVbaQ6bKBTRRaNxKhQfYHmtSD95sTP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3S87K8MmTRGSpCfixis77iNjJyxtDyEnSqLChJ9CLRwUKRTwqqhaqishjpeYBFTN6pfBjHAYhLrLhW5MRpVAqqTG",
  "key1": "2EjcNMJ23BJaQ8ywgdh1ppTpSZLpUbCgW1Bxq1hWL4wY8rUiqzze7FpH7BEJc7KZCPWnMoTPofYdM9jigCv82yFg",
  "key2": "3vofxAmzMjXWvVphHJE83GyBbidD7iUAcXSoDeQPwDU6q9cQ8B3bdbRe8TaB5A5YhPWeomewWtBTt99rerPEHJ8t",
  "key3": "63xZqJQnh3aexH79gxtMPubXC7Ew8UwUjR6D6voHX68WiPexfWPMTWDhc4fpZG1QkpQwi3aSfEZUfDVkryNZVMx5",
  "key4": "4foELLBy5ENYXuh5q7kJAErwj3fVnuHKUqFvu8YFwr1rLqX4qqvKe6q3o9Ba5pLP6f9gxf53pp23Yg1FvNQsJYWA",
  "key5": "65YFi2oCySumNB6QeLqsaKTBumZ9u1KoiS7z1x8TyRkMtT4APx5B4HFr6yczDRX8j8MXyYcicdPbvbfFyDvm5qa6",
  "key6": "4c8UvKGc6AU6rJTUooMY2b9CZVAjkPZWY8pbR3SxDZZhDhuFWAuHzqrwpVKVVpCtNzKvisoVYm4PRPnXkKotySdi",
  "key7": "5rxk9JiU2jh5kVEjbCWB6hcF3pHbjsbYm4122A7tGeNave2GT6ZHfsNuD49NUzfFPETvsYPEp8vSwyJ9TAiH3VW7",
  "key8": "4NtSPWNxQwN8nfbPQQ9RKnAmXGS8261sDB2MXaVMkE6QASaAnUjaSJUTZy316raNmmnbso8Qu7caafEcEsSFd8mx",
  "key9": "2z3MkvF8kPbW6e2jADmzXTKppL7oVip3uVEbF7upMzngUrtxELKc96nKtT3qjWp2uSkgVZWH7s2Q242UF5wRyMEZ",
  "key10": "4JsHRMqQ26WCVfm3myu3bJ4GjYvCqj3gx3tKuFo4CSJm73PGWDgBCLFT4AZdJeQC3ibXjs1WBaGy1Km4QaiS5z7a",
  "key11": "YWxHe6oKqCBnpJZTEWdthHD7ARzddVXsWfjEo7woYQX5hpeYtnEvZYsnKyM66xpmUUrC4mjxEgW5A6njrfzNSMQ",
  "key12": "2pb8fgHF56KzqF49mGyKcEDqSXuZi23XPb1ZMhAaAQY8GWhCt9GsEahhRt4fvqZ3pjHhorEzCaxwoqmBBenYnQrS",
  "key13": "665ma2HjXx52wmyNRgFrgRJ9LDhu5TmsPcUMc1md9gejPoHrTXYFrP477B7WmYLmW54jQkBYbPQgeWDiDHxJ53Mw",
  "key14": "5rifraPrjsxwvc4yZZC5cEgyE1k6yyCr9q1fE3Y2xMwDDH59VQRS8ayLvyjGdFKBN2knHe1cXTpdnXApqeZDvgxs",
  "key15": "3Vuh14s8zZAw2oSN715CyjSrvqPchNyjBJZp7ivxTjfjMMKCoMkRXAzyoMnANcF1PdVu4WL3MV6gxB5hSXm6zAhi",
  "key16": "2Y8cLbrwofnaPMVsdTZt3EyULtxEfXPQhuvi8xrikf8o9fe8nHmC3nLhX8V4nwK3Y2roQAgJDPBue7tfEH6YEGhc",
  "key17": "WAtfYpGj7YAcbvCJMThpyW1gfE4PR8XsxDejHuoJiixZ4FqhsaBNAD1YsQKKRkP4unrHRsNnAyr1fF9kDxT8bCV",
  "key18": "KbHkadrBTL2zkoUz2q4gx667faijT4q7KAdJK6v5MHnSa1tkyWG3Jbmt18vgoRZsF3JFn6r7zmcpaLBBaWXJ5EJ",
  "key19": "2RRy77zqLx5GZrKTa6qPUh64qyxA8K53biKEt5B6PKWP4tXHfYSHR28XDHtnWwoea5n2d2qXfjXx6RK74qbeHYBh",
  "key20": "2oLQuoktoZaa4aFheaydXYFJQZUxagebaYx6fN5Mpsa2hina2759MgC4aZpTH3NpusLa7e9PeABYLpF5GJ9v55rv",
  "key21": "XSaZXHW4KPCz6A9n4Fc9Un9ASWACbwGAGXFGTYeLAnFxPLvMES7jodgkrY8fa6mf93z5frZpA88eHwi3BJnv1tz",
  "key22": "3ss9e2ZPfSsRGu7dJtcV16CBx2ssTBirrfBybQGP55uwfdA69wShUz7cWJBorFS4p76d4j32UawYoMRGZuv3Q35C",
  "key23": "3RngymGL3Zmr5rhYkyQbPA5m6pDjVen6VF73bUSCDm6frr4XsLF1xBhKwrRbL81XDQLdpwYEE7WRnQ15ci8jaZN4",
  "key24": "rPh6VuXJVM7mssAzmoaMWnAaj9mThV9dhvuK5qxNTHmwGEvpLj4hmh8B7tMY27abvcfxj4ZbkQRQt9Z1ThryhXW",
  "key25": "21sZwfBfRArdGXsaa2TaFFL59N12QCKt6J1XsR5ZZYkiqCN9mu4RrGS7ksdqNU8RvEMN8ks7jhhXrGuuonmcahb2",
  "key26": "2p5foBE6TqGjG92SkvPjNffytVVjkjnsCN8TRa3gNP45ZWKzdvMXSKnE96JSU7HAdrzU3iJWgE4LzXHswZHRa1iP",
  "key27": "5KGakahsSAmd8PX69qZqQb7JHDJoebtgMSsk27CPHLppXVhP81YwWX1js2qPW7XKFEHJjCuXCHgpRay2f6W6WrV9",
  "key28": "knE9HqZZqc2pkanjAj74hR715BcAGpKJPH4PtJdk1cro7wxzYs6iJhkQ63oG7MUHG6knwsQ8qTBimQqHRFsZTGd",
  "key29": "2hKNWTYnA9Np4uxMoJinyhfgikxmXg67Tyu3NFmkBkfyh7ypmewhqHG9j5ipqfucLRqR9HWn3tsjWLgtpNmJKpU6"
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
