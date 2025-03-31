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
    "4hZ2ZW982D7QMVejHbVUvTq3XnYUCXN5CUWkYhYHmuKRTumyZYt8MbCL1jXC7qmRGwxnnjGyrKgBJ7c6VSVhhR6L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oCjxZ1fwT8o2BvjVcL3eXwcAZY6tiz6KJcVx6L9jLQuks3u9RjyscDaDeCMhLk9bbACj1E68yWxd2v5HRJDxkjL",
  "key1": "QVFKhAegKbcX6mieNapAZVy9T2uMf8KntAKFHMn9qxpn3wHaWRUkLFnMLZCrRPq5gaLii8ZYtHzjHhweB7MYHRw",
  "key2": "svfy8vkWWZAP3LVZYDsdNDASapDjbCvTPSJjafARCy31LQQWpcQ5iYX1TrC8ntRyLtnrqXw2fKcihNCXdR57XoC",
  "key3": "4K8WqjyKSycdWuAx3TaXoYhDUyGZjLYvU8hHKNg7MDLE46UPYJXWcbEQ3uK1SCBWnSnFGoukhhEjXBoet9ByZJSz",
  "key4": "663sY4gRsvtfKdLn3dscDu6qpGwToq37Z5ZPDAcN2RSKk8pPBT2ov4J4z8V8Bk38AtDzaVvfZzZyePrCmUyeSq8H",
  "key5": "2sTcTRhTz9fgGrwrfMj1DmJBSU7G3edXiM2m9yzGzfjbJqJxgZcUqnHshNp294FgWg1J4CJcryAqVuem5yjbGRf5",
  "key6": "c8ndwcESJtQNSMbuNePepstGqMm4j8CMkiA9JhoSKfStVyCXsXnUJuvDnJAcpt6Tk1eUWTW4EFJPSRpvQAYk5Gx",
  "key7": "3CZRpiBmBFX7NP83ywWEV4XkqCmg66chhmTYAj6ozezeJXgk9DuzfSSnXRBv84cVffPrx1d8CHYPkpTr64o1tEso",
  "key8": "24v7ryA3PCuDNRD9DQDUnM159hihtWoFn5bRKoCPnWCqeKtEynY7tFoyJqM9c9PLWwW8Fk7pT8C2hDwd13HBe5S2",
  "key9": "21nUmmNWEcPdS7FW8Dyc9N4U9n4xmukwrnUPmGTqerQJkSbMbKBqJ5ugB7gmneDhMEz68kHRN4wTrnW2gu27Q5QU",
  "key10": "5qM4cQGi8RdDQD5zw6QpEDtrG7U4zRGS6ZLvAKHd1vPsgekuCUiBHeTZXzGG4ZfGtKcdPYe1mHCR1XttyMwVky6o",
  "key11": "boMTWiDSECPddGPT5YR21Hq2QfLLuUqWdXrLKvn45FRKxaH3T4vapNWUeFAvrDvuZjZNAxaMzvACqiRHjw1PD7j",
  "key12": "57CuuLrZtTvVKU4HH44Y3keGuvXLhpNjKkUvJei8aMWKsmJyJH8R8nz3Px2dpFhrmUheipGmod1EqtpUeo6fcfST",
  "key13": "3Kkga94NRniZAxWQwHEWfUneyGEd9xobNjoNMEMVVCjYbxuJiWt5dLkaqV35Pf4KBSad9suususjEjgmr9gNcgqY",
  "key14": "5cx79HDfoES4rqwPnAh4fX5bokEiShH3jJfot9dmgupwo4DEapiCc7hrk2in7icMcR8nfRyx2hc2BzwsjSWYUwPJ",
  "key15": "5k6p6F6fupmFFRc9gHYnN9qBwGYtQ6DBGGMNjE7FcA8iwe4FbwgjBGVutgyUimbh2okva3hQeU7pHXzaxWRuWDai",
  "key16": "5fGtVDmjqUPAiCA6Lmhdo4XrCBQj73SBBJgjG8iXr5NGNWyjYTRtWY3DC2WVFrDdMKsLwfdEiubWoiAWAtHcARSR",
  "key17": "qkjwNWMye3fSdNFbQ8R2oMRyTUcgVhZBV5VrRP2fzMekZ4i7H2cPb5g99acay4BaWXpxpUScZKKwBH6Zc82ZsmZ",
  "key18": "38XcCR3jhnbw9bFAiEzoeH6hZvWzyTdMsQudiPM8KooEt4ys4S6vANCLy4nH858TG1GAJxkz8xfDddkQ3mcihiXN",
  "key19": "5NuiqGTS8NXzfCge62EmMSedhU9kYx6x8PF6kT6UbN59oBaAgJohxJTXrd8kgCxNDmTKzoxuTvFEpadBC57URsow",
  "key20": "RvgocWEpSsSeR5U8vTzcXMiL94dKMQWHkRtaK8jJuCYTzkTAnfGqf5RiExhzHm3kifrfDE7ewmYQt2QuGefyXDZ",
  "key21": "5sjH3eNP2w8m9jprehUS5y8ejHXwaMVUrSFFjeyRA1vvXHUH2x7QBoZMWLSMZ4ifgSTqgobaHcu6Yi3ACDPDKMv",
  "key22": "5Tat4Jv97u773qpT2GrM2NJ72oqedQMScZZL5bqemtEorNGcHhfEx2Qf4egZHRfVYgbRLxfZBc951fZcW72QHYK4",
  "key23": "56jyvpJrtaEP7oPTaJ5UN7CMF5gDBxRsFibdNoGQffuyZ4Zy9fueSP4NuNcie48fEmk26xZX6syHvEVupLxWNotS",
  "key24": "4GjUoca73pL9do5msWxqjJ4m3HtxTijmXTQ7RtKGtkWRKGFKcGPRvhaxvcM7UEaLE2tEXUxPEDLXh7J8YknqpSv1",
  "key25": "5X6xxhKvxkAsmBbmwJcT4BKjro6sx6SrNk8seTu2svfPHDoeYok4D4TcVRwtP8mVtnyjnwccZ23KN42vu4QhAvgw",
  "key26": "2YzB3aKbeRD1L4yRNnNKHryxbCfKvtERAyffuoz1wM1dUEAJefTJx6aTVK9tsKd2EVwyPwg31wda2ZN3EavZ9KZ2",
  "key27": "5uwvjgvC4y3N6B2gvrEB1tvHR3DCTFnzfVzoxuvZYqGg5CaRsuTHU3G9Ro3gmtzZ3TKXhf3NbJQuGyP4MV3jzFrn",
  "key28": "2SZ48PqpdFHYTQfiBGK1DEqkanPL5esVa5g8fphSLppE3G7nmdyy4rdvuBhH76RjX5cTSGtDZ5j4eiJcgnq9HG3U",
  "key29": "2q2Bf1E5S85AnmdRBfUwzAPDXheozsenmoxJM4vJ78YsBvhBrYmTdpZ4CgdVM7ozRiKEUMZUSHXc6iDrLqqWrZ2d",
  "key30": "38gsKoJ4rNwsYFRkjQXguU2AtqqRRxN6MCAKFSNpPJd3PojiztxQcV8HgbEqFzmQ2dbnfFHaJ82fm14Ag8p8FwEd"
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
