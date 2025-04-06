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
    "4AUDpPAA6nagXuJpaRoBtVBaKN31tcm5JSmEtUkVSvjsSyGKMGy9YUqydLeNNotrDrpqnkr9wxFDXwybUzg4sjaC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vJjXM5DFNGtaN5TpvmidduSqoKCRTkwzgCWPvUrpeHv1hXvf79ZNwUJoy3Ao9sd9omiJxxAxhoJp8BFGWjk8TqH",
  "key1": "Aypax7njD5tJ7DZBBBUg8UY8vV3umkyC7NGDvuDLUntnRMMHsYv459PDjKnEK2UXbgLuZuRPsNYDmfCRUK5ca7R",
  "key2": "kzgUUyHSSvvEqoZHW9anveuLm4d1g4qGqHY6Ag3ST374mxn2XyzqcHmmwsKLRnLaGDMyxy2beEqZiDFnFeNUetV",
  "key3": "4KCzVLVvyXJUzo2arLAzt7PNtAqRCELvKBQf5QDQJti3qB1u2u2iQdyuJDgoxzUsXtQWWiuYpXx5nACR5PZLkBZC",
  "key4": "4Srn2XRxpaidfHt8aqE7Xs4e572U6iTJnufN156M6aZGj9cCQm2wv1Q1gzvK1zbukC9xep1ni76Q5CFM28kRHA6w",
  "key5": "2Zvg1yUYSVxTWotL1Zhu74XKttp5jbQsR8NV8vV3R6csr7RJLKVrG8KPDjt8oWYMDD6FtH5NsWmrx9dGyhwtrUx7",
  "key6": "2259Uf8RE9sVPg41PZNW2y46ZPMW1XLPkAEoub99cu7WHLtB5tUHLgLNkeTKL87SYxGfXvWxKotVWsRcQDCkohMY",
  "key7": "4ntjTh3oGHtbKGnAcVuy1VwotcKVUKHcrjpxxJ3xYDtYwZoAEoVdrGF5MGHcgMSrrrrgLfU66SkqM9nHu4nPp19N",
  "key8": "TXzZ88TNfq83D7gBb2rVsN1ZiHEzgL77CJxVA4HuL1xp63PQPbcy8obv2LStsFvkbbMqHLD7A4zLbxxy2pSGE3e",
  "key9": "5cRbUAtpYZUN2FYXqMfVWHoPZA3gef6iuhAezhpi6Ap3xvnkQNMCqhV19jaPz9PzR7972YaXSAB3Nj3i6QXY5uT3",
  "key10": "5qnQCndhpyiW2Vu4BsdDhsAjXgY27yFzDPKn1RKPSFEGWh4Hskv98et2SQd6ZKDk4zs7LNjNTMj7m8yUmWMgQkRk",
  "key11": "4uwC73duL5KKMZBWzcuaZoMrZ5tfjfyEswDdPcXPfMZEJBKCPquUxM5RCVfMXe17kh2YwpsMgtQpkQnBhAzVQGd1",
  "key12": "3DZTyftm5L47RA1aYsf3Km5oS6YjAXgd4yf9i7ERcha47nTWhU453Bud7cZFeG2qYTHxNTG5n91kDbuWtGAQ5xN5",
  "key13": "5PBQnbGCwbhRk2bgwftnZH9zUpZr574jVutC4r6PJpeX1CmtC9CZnPBBNo7su4GoVnwd9swaRUe5Hf8YcDM1mbnU",
  "key14": "2eHTSzXCLXqdwtxp1ojqyCX8g8qcsUMexf5s35daceKCecwVcgH8VzbdugwjMtL1Gd2sX4fSBpMa52r2maZ91Ykp",
  "key15": "3LRRGEiZoFnGB2DMPKitAgAHN7uRRGKqo6dWVNecXRMRfZg7zWpKVTHxyhgPLdLrBDvc9aDRzK9gBE8mMPbHjauY",
  "key16": "3BD5HD79dFPkkfkrCxDmfvGDkNA2pqiDBEeNP6y1YgNoZ8DaqwNaJuv53ekb3ZyMyWdc9MxGoKWn8EwQs3VDE8ef",
  "key17": "4eDDNiaKGChh6EzRabj3dByZUXpcNQfzryKACgSEhtGvgF4x5iSq8uzy1CT4GftUMppjFLkZFdYbS57zW5kNg8hy",
  "key18": "3SASaTWeM6ZsiZqCieWYGCALnEQc8hgUs45mzCqKaA2fPP4ZtJTMU1G6uLsmG9NUsEVQDJ13K6WzWvFjGiHyKjWG",
  "key19": "2zqjVTjsjrTE67p3fhMQAj7V8WryQo1TK6hzMExaHtTNYFcfEbb8uFjsH41FzSGMcRCamiJqQzL7CJpQ9Zv5NXib",
  "key20": "2J9kH1LuLjZDFsekGr2YKTqvLFVsRb11RTMdb2ZRZvYPZgVrYAAc46wShvjU13vXd7ATJACcnuwYng1uhuEUqKtF",
  "key21": "4pifTMg4WtR8cP7BNpnsUgzF66ox7p2i7AAZFwpat7sY5h9SHxYKZQsiyY9Q3ziDZbGSQKN8xpAxv6ZMJQ2wUQAb",
  "key22": "RGDx4t3NqS68bfSHQEDMXzJLgo4qn1PBeQxYj6VBsTpNfzTqcaCBgmQZr31bC5nQ9eS95Vzj3nN7yLxQ4vquUqN",
  "key23": "4Gh81j8aDTMqtnK4H2Zj6cApixrC5Jq3NFhEMyUtEZi6XFxix5PtBZcMqoHxzW2Ncw4USzyz5qrVgUrGn15n2d24",
  "key24": "4tESP3fo8JvwHNbA8XuHsjkTg7hefKyGxLy8XKmLRjeJ7VmUVqfCzD6mJ3hSXPw7BhVBcRSow7RN9goSWnMkuFWR",
  "key25": "4wZE2RbqWjYsi7LNvMxks6DcqLCjCtFEkQ46S3cUxPwxZQPywB3X1QDX1UWVKJXb5WxnoJHNicti46ywrDoY8s73",
  "key26": "5FKwr97jhRxiTZuJ9rbZnLhFWTphfpy6ERoDTFrNRtEv5FozhcbfkEoDC8CeSCCtaZGjo5B7MXW3srGXrzG8dgEe",
  "key27": "5rw2Sc5UhaKfGuuGMzdM6dkUxNDXUPMap8m4SVaZJxus2xgwcZSHFhao6wEjooo2Jv6CxkYLzJnE5TjQt6K2rjmh",
  "key28": "2LrBzLrEZWoEnML87h95aPgEQNyQZXXNW8ZkP7cjgkZ3oGrnkDSb7fRceCfMdUJJyBd9ZaenDuSqxx77KZ6YrYgp",
  "key29": "3mG1Fhg2Y72QmVtwp4UTsGTCuHDDpCMCzP5VUs2yYmzLooFh4Dn3ZvW1ycizEhQ9EH3mH5JRQXZwnAJJtFHCtBij",
  "key30": "5bpucvzjnqZGQJUKkfQAiAhGAaj3W6naSs38w1khoiqL4P12Si4CxqDrsDUHotDn8vYnPRSV9M9qFyGMmkcVfMFu",
  "key31": "QdxrmvBcwToKzRjtbBwsTMzdMJowBKkY4mQajzr9YFTA73jquBdYV61UvDEkouosDwnTVDVPAmkjXFTvFQA1Erk",
  "key32": "4ERwNMLQaVhVXQvymWuEirwGGDTRuWzoMyFktJczKVYfhnLhiEFuvDtVmQSXv7GSQyzEoQcNrHiQNoUqhGKCipEG",
  "key33": "hjPAiSSwzkafhT2w9T4qhoHNKMcpRPaxRtbdHek4zmkxK2Km8kSARnJYJhcnqFN9pzbHDo8vYxfZZErfck96tj7",
  "key34": "5Hekrwdg66NedF21NJZQCCfU6faq2Foz3Pj8RBizjKHRSN92FcT3S4LnZuUCJqHzzrx6dKTPhkkU6s9sJat9ztkS",
  "key35": "5iATxDTr4gr7AvCYPRruKa2hpZfuDf5PeixKzz5pTRQpFHx9qz1CTgmUZ8tEDXhADRv7BhZuFXjhraAzguxh56FV",
  "key36": "3qbPdj1wRN6hXyqD2kD7y1HPJAiC6JYYXYBP7fpHvy95J15XS82M6ozEaGnkjpYEZ55MbDH16LcdgYfeHVL96uyn",
  "key37": "2PNSVXB9HxqcrCb6kwUXAATLaHS1YLLS2tqXeD7rPsm1LLGrXWBDgvNbWhKfreNxiusgfbdKaqQRwhMMWDAQefx8",
  "key38": "2hzCbuTZ9Z1uvsFHscTFja4mSRLDn9h7LXhNwonkDRGWovyijtqVaqwwvpuNyseanrEU7WdkCWMgSGKHyXGwFuE5",
  "key39": "3rxB8b4GMsCbGYe1ZLeFP9TfboKXzKbdEw3BFAPmmypEegocvgbnB3MHGoDG3teetnDeK18GpWjR9YNQhGjrDH55",
  "key40": "2QdNVkWQV5Z3nYNKgjN1VdiHBLRgca3TEHcswEE5vaJrqvhM2U2stTPNAg88rdcFghQB3QhYBJPhnV4X24Sgb9MS",
  "key41": "2BkWFeqY3hkn9tew6Y8kWMdEJ8LwMAp93x8mpvuY1AhMzpXCWz4eqziG2ygwYtXt36yUwxSQYTZzdhJxv173F5p1",
  "key42": "5ngjq2hgB5odYhMVjRESZeA4MonjjK4k8vZrMqbgxsf1m2ofnMthJXXEdH95DtTSaPFU7kbcEAtjAxNL1JyGDsQ"
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
