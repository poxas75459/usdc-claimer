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
    "3EjpyyaX4LpeyhFeHdVdHp9hxZXiYxGqGwFmJXCqWS4FC3qNmLWQkKPnybKAaLZv8VpVNz4khLuN3SqfPd1azcqw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Da8cRW3h4tpQrTd1AfESSrMHXThDkTd4dCJd8Fuchy1ZUw1vPg434fXioD6X3gBYGyDb9j3VJUP4YdsDw9YgWAJ",
  "key1": "2KwhsgHAmFvwvw9h2dN6foQvvZS58wFy7hFVCJy45zdYRTGGzcf6mqVfkMnEjvZmBRBxTTYow2S6xRSH6EGXqxAV",
  "key2": "4ZybqksSxZGCPimzPsX4ospmVtGTCPxAaFtuziqTmPBNSiEdSvcAk9Ag1aNDqSnXWQayV8BkAYiZ6ZoJxYj2ydvr",
  "key3": "5wgrJr85YiStNxNQvvdLa8m6rEn9azKzxvwmC1getXk5ZgppzMyHhKz9u1fk6S4LVCMxXkYHD82dx63fg9cUCoyq",
  "key4": "44QCuvtUNdkZhxLEQd9paPzSNH5JxSc1xaYckg8iENb9Th4Fsqt8pGJbHfyx6112ZG1s9HemcrPwfASsVvo3vNCe",
  "key5": "M6D1e9fkPFdtspAD8xAxSub7UeEi8Z5NtZfKKGbYQ1nUn8bNPcdEogEKQWRt7hyp9beyJMbdsptqPhqNVixcHXe",
  "key6": "572f2u2Gy7WKK7tKZ2NeySjtQLXRPEFXb6KVpixNprUZbBZ9H9hiqDyvpyH59PY5YFu45WmNob8RahAHiKUA7x7U",
  "key7": "4NmqVx9xEgAS1xvadfbDqPneLLwgecKNv7WsUkF92RcviaEK1BYkPLMWb5kQwWVEBkUyvonxd59sJNTs6ekuW7dx",
  "key8": "5cKTJka3UvZvx7vtqAh5eCRAjXAvwG4wBaKrH9wNo25G183jRZ1SJeaiDD3HGjvGWQ6vPouepJxZ89DEWJepXBWC",
  "key9": "3i5EebtXEGC6Y2NkhVXDokNy1yVsZSCrXpSkYEjJgKsnjAmzE2ycJ9Wx6pZuwdDYz1LF7cuYkQJzADRDc3mg2Kz6",
  "key10": "3HedXPKRKZP3ntSvQriGfxpqQmYVjAtGcg6n6Wr8yArFyysY1hwJebr8UQoHNr5KSeR7UL1AfR5wpewLiCdGHJnp",
  "key11": "3PDUcP1z8Ysrjgy3F5NnzVbWiFYkjBHs1QY5jmQEbxVFFmvLYVuUVqWs7ewZYtfoKxnwwgBkVsfUVXRUpsjyfyKG",
  "key12": "4NYi1hMNZjBofP47veq83UknwrZpgCRTrnSPZZvrCLsbq5CHnZiqaBv5gUamSGv6RvAPM2GfjhnvPBUqULnTWZdL",
  "key13": "5tLf5PU65AanqmqYndsN1DfWEdDJ1p6hjwi6z4Pvez3ioDqmAW48PfWR35kLoZ9m2AXovvxYnFBc5miSWqtK6AKC",
  "key14": "F214UaiDnBZkPGZszuCWpicevHeF85UPSTMHU7snkez7X2EgHfD48wsze6GtD1rXS2AAdoSZosEdH1RgjWhSZm5",
  "key15": "2b3nj3SWHS58X7cQtpLv8v1PoPxRBH6Y9DPzmAMiQugVU4vFDVjEswKjxDJ1FtAgrGrQEbRu5i47P5MXD71bDWZt",
  "key16": "SrbvfGSS9dXB9vZCiSzkUUFPcQRBXeca12w6py6kfozqizpjBSdpv49MchXwjCu5Xy9rhbs8FQxiYwQLi1xFXqF",
  "key17": "rdnZtPZGDeY8o7egJeLHRgC4xuK1beDu3qW1buL5BCxRnY52Hu35nvw22KtoHhzNW2JexPyrZFuLLGRnawMDR19",
  "key18": "4s5ULU5eTsys8zEn7zeHZktHMyy8bJGU7imJMDWpk5r7fMph96DDULWyZNyGsYrmMuUDVa5G8sw5bHYkDsniBTa8",
  "key19": "5KrdwPHwzUv8gmDN41yaoVtWtnafeTqTa8iEtkiGYSNMCuM1iindHdzxx2nu3bRFnZj4rADJcVhbocZtebLKvrcT",
  "key20": "4PLpiQCC5czgTpEqtwbq9vNC1YfKj5euKqo28Pj4SREiuvD1eBdQKje3CRRexa2JGQGjccLvYvxBvRFfb1bTCbFT",
  "key21": "5EXzT6zVRuTEsWKEqhxiFbxmcMfEhodKoaMzMTw1xAUM5z5bnQv4v91CKDzbctGppDhxsSqRPPvmyMtQHHcWqieM",
  "key22": "65vPJUeway2mxaWmmLUnFj4fbmjmmAPaufmrDjCm7Kd9gh9ZV1cUHrjNLZUY29zaectfobnj5G5kci4rwtYfvPjz",
  "key23": "QT5tWL7jGbNJCLuCMhvz5wg99z1vkjmeR2v8naEUNKb1SwkHeYT3fnxiNk97svBuL3aFa8qm4oZpschP44jdtnR",
  "key24": "2Vkv7Q5s89M8tv4myk6aFG3v6tBt9HMa6r9nAohP2EXtgcou5bN6HgeEhUX9zVdmVNvTgQ6kmWAZgwhVYzBenebQ",
  "key25": "2FfBQeoBeMa1CJB7NUKQpF6ZDs5EX26sB9n19s9c8wQRAGAqNcz8iZTvoV6ebyy8YVkuB9ULbvKdakFrzivWTiGs",
  "key26": "2rtjXuKGtq2dPySeW8meiExuF7yf9DYYGhttAhLVGafzhzLAPfJcquSLtJTr4o8FDfGrUWqmowKtUE2grNyESAqP",
  "key27": "2jNA7JXJeAfbTh8P3uUZBdAMBH8e3xci6RmCZm24U3rwpFtpjoCW15V5nUfAdRfgUFPeYBNsHtinX2BHAAH5teBR",
  "key28": "3a7zCs25QtSoHocvpj4raKrm6hipCu3yC5DSn83NAwdFmdLdfBcLZF5XcbgeGwYXdD6XKwPbmx5UQpEzcrNd5r6F",
  "key29": "2s2am6vuZrh3cibjSh1oywFa5oV84KsvCKpExuNwvdyoMe6d6vgmBnnLw89qeM5MTpbSZ19UZP5w8uXxoue9sNsL",
  "key30": "s1TLA7RJEYKQeBFQS2omwJa3BY1nUbSeQbr82ip5XyswoERNKC1WpUQdVhqirSs82xu4CJwp4wjo5MJZn8AumnN"
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
