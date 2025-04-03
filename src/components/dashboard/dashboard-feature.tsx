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
    "4Xh5YWaQ4niu9VrkJKFzMVxGoeKTcDVmb5d6gMx3xeV4UX2yrKrxb89eXFZPt8bTW4QpzY28UexJaRGArWfpcA4t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nDeJpuo8ZarVf7fjwcCYbYVtCNhGKfiV3SsjNYEszZgdPjJx5WLMDLbTNrfaB88WWNVPdWZusC9Q4xaVt5RcSuE",
  "key1": "5FwMAzcddWZwxqqyZXaWQ1sexNCQ2sLguQ9SgYWCq9ZH6VxCk9G5voaftYjTZjakiCkPtrcXwsrcWd7kAHLjRVhq",
  "key2": "2D4gxdDiFF9iakQEQwtPVn5T2GftzLuoHWxN6LDoDzK6YMT4xUFsrKSAGZ4WF33KQfzM746qicP4gsGLEpWvK8sZ",
  "key3": "5ZwwN2PqdDuKJaUEKk5KKt9dYY1c8uM6nkhB5EjsnqSKdVP8TQD1zP9t7BH3jxrhqFoMEqHCNxsit3jcPtFtuiFg",
  "key4": "34pyj7wajuZiBCwyu58HkZ6JN9bGgAToMp4yryJprZyaHH3ciZCkVssWCsv9n3kJUftqfsDTbty4Htv6kYKsxcy8",
  "key5": "3Za6SSmMAyXcWjipEwEEg36mEJrPciyN2LCm7Bia3HXHYj1BY9tNh7pmfy8gLHmyCtGgMknSkSDYcPaUndDGKvLk",
  "key6": "3bpxrf5ALyczrjDWFcFJpeaXXZg6DFeowAewPkFAedfgXwkDx8Wmpay8QEZnbdddTgRSuDTtxLBxZDLNAWE57ud9",
  "key7": "5gFmwAPSVF9Kh2fLuVjeoF2KzBaor7UAMG73Drw2Ev7pasAB6q2Apvh8zu1M1J1FoYdSzVVhv7emVc4PS4uHsXp7",
  "key8": "3dX4XJN5Qu8ts4kuxYkHUB1eRTjiBG3qjPT1ZJPbs6YakdUCm5TNQPFHdF1RQaDhkwK6Jg1mBu7jtrcTcpjVvspC",
  "key9": "2qdXKJEgbK2igqH1v6Cw4y28syRx9SFkfW22d8ZsFNZp7PUa2qutS7ga9kihtggq7BXxxMTPoL6cRCjBonfakrY3",
  "key10": "31Wn3NRkv27qTW2Ce36wExMNdLRbaQWsYDXxw3yWw3xQeXWanf7wm3HDvxCh6vmPrZxHd3kzMCGc6kbQfwG1xxxy",
  "key11": "24qFE3KF59WCM2UeGpNkLoyuPLFh4KeqwoCzw8spD3SZwHaYeUFhzRoTY9BY7ar7n6ooMKUe5vgxTqAqewrSsB1b",
  "key12": "4QYhSGRQmcSZJTJaFfseb8KdaL1o4MyovCZBvXevSGWHJN1h6toAsRbAv53tpGdUdYkutmSXsWVvrruw7CjNAEnr",
  "key13": "4uNTGD8oNKaCT4XkJJEAuCqZdGReSV2upEcK4ej57Zp5rRvqvqqwXuSy27uMJnoJkiXq5FLF2NrVY264mvt6qfjT",
  "key14": "5P3EhbVM3RHrM9Gp2TbpPHrRkKhDKg3zHBojRskRWhmni44pSTuk85n5Q8jPs4a5EZqx4k9S6AqPZn5dLWf5mEEs",
  "key15": "5NAap9ybBvLn8VPLmYMKM93HkSStL9jfi4KQUubQJb4WtfBryKiS63qmtLDMzxtG9ZM8DEMnpdQH4BZMWF3mKo8y",
  "key16": "4VaoRrVGiUmvxDeQLH4NNyUqBvkruhsiW1j71oFy7yd8No6rXExHXE21qPWpw8B2yNo1sZmZ8rPw1gv8Jh3TEbnr",
  "key17": "5W2nrLqKfhnFpv8xxu1DQivTzpEKCcTZHzyX3pspk9urWXV9zSdQJzLorCFGyFqqerLS5sCyTLr7uXXddJH6StwY",
  "key18": "4WuPyfqqdcJsJpY2PTBx4psmYJmTwtAyNZmGtxLdQ6cHmq45Q4EWxVvw5tjtvpaRJKYcDkoXJHueBaAzjMbgKmA",
  "key19": "39rpsv3S9VkaJEs9jAeb9c39dVK6fTZWeewaf9oXdL9Kk9cmFBDRSkef4a65Db6Y3Ju3DnArSmTde17wmb7ft3T3",
  "key20": "3NqjUa4pP61LgE55PctSwnaJD12mPxELdLWgXJNnHY7GwzBMK6ZsYQWQ3RDCLEXc5XqTFP34kff2hLBQE2LViYEA",
  "key21": "5PiNTc8uHiVkbyf1VywJier9jzNtBSn5P6rLAhbuzviHQFR2cuBEV9sP4epCB2fQHuZD32xrgEMyKxjpapDDqsBg",
  "key22": "5moSY3epKH5CXkax2jZUSVwqz2mAK5wxkk5ZWFiTnq4ovhCdAA2GUT4Q8iMMnwXKxnQE2vxbFaNoYNLEjiekedZC",
  "key23": "5QScfbFxvT7B1RBoWj5A1JLfaRZe8zF399JewXVXqLz2CjMjBdcuGNazCN9cciNHxPyXT4eHTX7jKmhRTzHR45XC",
  "key24": "2TYXiSFoCD4kEobfQhZRed27EwwqdosDvspuxdBYZ8mFGkBZqcTNJBFVBjrsj86DtQ9KpcFBtNM3NszPwo6pbMym",
  "key25": "4zdvoXFeJfSaTo6A1T36RerbGTiez4ZnwJgWEPyxKMvfx5oDc9s74NLxRJ7XFxMVwBea5egaJheenKqk6UPTbt6n",
  "key26": "dM4GHViM2wA8iJJjPq3qu4WJe1wrqn3MJKwVVN1eQiJNfUH5GE19JcfzLWPkLLfmtmiTBVR3YapTT8yEQCKAn82",
  "key27": "5CrMT5y85DY5txiBVPpZF4jtMChuoPancaTb8EcFjGnzpMQmJNSfTqN47znPGDyQ5e2mUrk3PkxGwnZKN5secmzp",
  "key28": "2BpndWsy1FhTMCubxMEwtr9WN3xxH6Q7W3cLp7B7fJUYm1FojFHaZus5zpgcyUvXa9MBZ45NPpkT3ntC1jwjbiZB",
  "key29": "2T6LbMZ5eT2947oCrXNNuZZQoTzSKMJFRij2EdqYFRsHu6FqhbyjuyX5Z6Za1XHAGBVExm6TepVshG3bYiPhzCGj",
  "key30": "3rSpK89PoY4gAwaXUJv6MzdFEsMBhX5uoSWgMdSAiszWPKNBqZvjCfhcongtJRHqvs6T9SoLRPTQ2soXnemrzaDh",
  "key31": "4HtXRsfuAdUbQaWAyqHTHWNGkhLrRvAQQaK9HeiXvySoME3cZ5tVFgAF8x5AfscHC1HADWcRwVYN5T1mNmcy3MXW",
  "key32": "2XonJX4EV8Zj4fzRUh3tgvTg5FuJjGWeCJ25846NwB6tbKvN83rcAJmurAVAHGyJJEAEjZRAj6C7FBgvcRNidzXG",
  "key33": "2zCvqgsPLsg5LPbdgobG2wLUiHFsGEnAn3M9NyJMU42WBaeqcm9GTkGqbWhDiMULTYacp35QQX11gz9kEtCz1WCm"
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
