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
    "53P95GRfHJsKQ9r29RYQtZoegDog8fKV1hvgyzwuUA6XSoqyNj7wJb8PGL2EzCiofRtvnxXZ9igZmqVW1hyziNGa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DmwkfPhcqktdjMH45JU86vJY4ABCyH2FJ5aoQth6UUmKPzfkPGQr2Bj9bjW1mByNGHKD49WqChPMigLRmRn6kUi",
  "key1": "5A799bCNgHvhThQrdsy87qgenkH2PkqcUsv1dveYdi7wQPmWuaQsRbBbh95yBDRtdfX66cqZNGVmuhX2uPkAprho",
  "key2": "5ZprTDHuWaZV7Zc5EfrxCPFybsDMBzYkHAKziFAstEnx67fmi8qjTybDozRPguDSUXjH2VE4hSa9vm7954eAfj3Z",
  "key3": "5AGYfvPUJy9fL4oDeFotjPi77LQ4Vu31k4Pq9BPA4kANXRNJRrHqhVtQjnqHmUEcCUaqAm56LQuGyzXR2EqUzbP8",
  "key4": "3Ddoi12Q2eZCaT1jWS67L4x7ScLH2zQoSepzAgjt4eKWQ32ebbHmW52bmbAXD27FGbc5B721MKMGVb1ZS5CFdtSw",
  "key5": "3wBhSGeWhu55PghWERC3eNKESEEGp4rb1bduiVdh6zqzyoK7RC2W1wjcXXWLWCDecsn8yVMb6Hv8vdrRLfYpektT",
  "key6": "4d2qX9goFRVV8EcoQKeQ8Lv1R8AYPj8gdfU2fLwaJFjfKD3aCxnL3Ef3u5szts6vMi9xttQy4GVdLQddPnDLxbWU",
  "key7": "9nSpQEfZxz6YGip4jfXfn161MykvnZRMPVVNiPqpKkhQagpCzmkBmC1MrvGRwV3q96ZzoMVy2oP3sVfq1wKKFHZ",
  "key8": "2P5wNGmyGBYbPtbeKkiRtu2xph9UZBaBv4nsGwzhDSTV8xq5bfU53Yn2uAoqB82iDdg3YzAkvXnmhcG4h8ExTL8j",
  "key9": "4GHSBnyYinxcf4SnyRX5Cr72xTZmwKQmhVPiTVJce9WSeYs11Th922JRjA2ccpJVGhCitzeuVszjcKSo26N9RNnZ",
  "key10": "34Bzi3QzvYqazXijr54tmVUX3areRZ8dcXpJsSe6Mz2rUGcHeXVrVU756b5PDLd48qwJJZb8ggfJ8hGW2uKY3PKt",
  "key11": "5KcBTvfb8gnMGMyrcJidiKeDw7qv6Yph8XVh5NJqiTjvtQVNVTu4gq5TXoG1hHBkDeYKzVFTNtRCPHuZ1vQPyuNZ",
  "key12": "QmigSYKj8rpf5K7mKmS9fqxeKje5PfrQNXoabrku8bf23HuQDU25zesyvGwNA4bek2hofvZAnzqfbRJQuR5DdEJ",
  "key13": "54dArDMvX2cq5aYWVdopEsQsVfjvAcP4A6Bei3xPKaYd3TpTGdZeqgFghzRFq6UyPy6FJTKNKXvKdiC6xf5Z5fNz",
  "key14": "3YRNQqUofXCNWit5LGao6EFPnRdeqX6cpzLHGgYWiHWfnLh1hK6gBwU8yecHoUvKfJHCeRh91QBBmykqCwMhpKzN",
  "key15": "uiXT5zjX1SSE38YsdYsYAMTsAiAJtLCfset1vyRswtygXT3HBZkyZYJBXUCqjQGr3iBb9KJCmYRnZsmceEYc1U1",
  "key16": "4zaCJbJBWWoRS4RjEMSmqBd9BDMhXj4eZN4Wvqqzt6FD6wLtLa2sXFgpuHNsJ91KW2Lmw7NUPA7f79mjBaFAQdKw",
  "key17": "3XZwv4hpusa8ZFzbEtSVYEBJfaA3J7AYZtdcXL8NrAbSK9YKgZwsQWaJiy4jYm69U4xLDbDzbVtoGnUnF4e6qeK",
  "key18": "4qfeZMwUWgu3eJHezwgphyAbAkbqHAT8FsJ4ERz7o9XiHegFawM5FfKBFTtancd8Pe9H7DKfzk7V4bhqPCcHqhfK",
  "key19": "xoEs8iQh8kWTZSh6PpT2mxJcZspzAmTJYWwNimhfk1unifJU98nmLBjjmQmHXHJLYzar4teufniftMYZ5tUC3qN",
  "key20": "2QQqSAXvBJ7opZ1zsdKqj7QfZ54KfbTVbGwaFCizpawmUiesoKMcNLgEMcqAD55ChHeDv7mucbUKEYDNb2KuziY7",
  "key21": "5h7uoBgpTLG5huosn3JPsRodHwNWd7TvUfNozewPkbNp9ucJ9AkWaNodYaqbgg8oBiytauRUMSRo1z6WMA3eYwg1",
  "key22": "5QrTtbp8oGExi1BdZvP6Rjs7C3jXAMT3HLqYFe1HDLgNDiwPpRxVxRZhqCAk9T1bhY5t6zZ3rWKCQC9299fMpvDu",
  "key23": "k5aer12uKMiKHmyyfg9ULzMYkorrvbA87SLNNrr2pSTryvx86r4UBemSZo8msNGAYCcWh1PXsjBWTDeckNpn7QS",
  "key24": "3cxcuw4oGX1uVAhvi2wayNjoCxSDT2NaNcC3D9pzh1jppSSnnNSE6iQ7h2EHMKd99BWoBwBBi1V6fXgsiSGiLPMf",
  "key25": "43Ppn35gbDuCU6b8X1sf4g7QvPqDUrzBdt6bW9MvoiThRGCYVuRonNtsXJrXoizpjYq6rJb6WoPYVw5qeTQ1uN1W",
  "key26": "4MMrDZLpbKt4p7P1NBoySfSVcVnPVxFvD7R9jvhrjhnyTVZsRNd2f2EbGgPF9XDshdFe6y6rdjtdZzJ8uq9yvE5X",
  "key27": "5jCtkMwZ7gjPpJYFE9NNXCVGe14wGse9MqRDyCY1aoEwNLoDWHCDKTc5Kmfsoueb9LkydoiJcgY5gA8FRQhb7vRK",
  "key28": "2ioXXzmUGK7YLRhTMkNnubXK3PcXb3q5tnWFV9QpCv1hN1BDVGEtBzM9nuJpGBfTpZpwZLinRyvgFFF9fPeBkRYe",
  "key29": "3tCWXonJuo1ciXugxXkhXrQk7PEiDnJHNhAUE8TFrDkZiRx16NJYcTK2xHRfVmWp9roNqfnGgxKVVEZnF2eVekwf",
  "key30": "3BdgHogoaui9nzAxTNaoYvtw9fMm8FP36r6PHKSLUuET6zHMCfDb8Go1NJRkDLHiyBL5cA7wWev3QsfwP8gFUNZm",
  "key31": "CSKSyxcUtLSdn8zZnma8NEQvSVB6aZGH8BHSmrNjqJsQTk1mndnGqBwBfQ3JSVSfZqbqutLp44Wm7eFwPfbLLKM"
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
