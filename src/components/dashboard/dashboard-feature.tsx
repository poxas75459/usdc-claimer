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
    "3Z1mYwT39EoYVYjtYGjaaEq2uWP6rwG23WZr6egynzCspfoWxTgYVym6NHLzvm6frx1cJjRCoR7ojdZSBVmoaN1H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hZGFcMUTTtXEDWgR8SNCSTm7HT17qCrk96TzgAa9hPtj3FCmXTGZ51sRtQCp3W1Mphrbj1P2643XQF6ALhSKDXR",
  "key1": "2ScyuBBPQSX28tKDMCjV7yQURxFe1B8xAdJGmywvxTxAYN5PtCbRZFMdPHtBL4SRNYpf3kkxwRZRqnAPx3SnjCNi",
  "key2": "2phkgTDj7FQAMg3bhtU1QSbxSaJgBtoznfPdxSbzC1Df4fD6NbFHS7C8WzdVkntRwqSGfkvjWBM24eqyv34b3DgZ",
  "key3": "2xKZHdpzTzLy3YXaWps5TpzWEBoqRgAhj3BKipmM5SEePDSqxqxbEZUNiTpgYwLeZ1KWA8CjAsWgHsKcDKFYdjt2",
  "key4": "2Va3rU4zpP8kmkKEjzriNcgT2ENku6jQ1AhyRBLpFZVJFUFBKPhJtGHmu7rpqyhZvu1G3QjZTh1v4guFp3TdQk9r",
  "key5": "QATwpm8PyKWdzQBwtTWBJe6Rz9qXrLGjwh26hJRzi9bf2f1bosRs2znFNxUApkVgji7JeuQ6K4SjBLU8SzAarqN",
  "key6": "3e9gXsTCSgMQUkN3acBmJx5g6BQzKKAF894YiJ8DGYdrgM4Ce7UihyrNj69VChehikGbEGzxtktRJxV3t4LR4Kpa",
  "key7": "5xwKSRDVi6v7u2dZa4rqXRQMVKTgh8v4NVoCu2dmKnJvupsGddru1PTYMDzQ7KxGBDTUJhHCxEifbRBvRxSzW1iv",
  "key8": "4s5yDfZ6UNVbtkLM8o46btto41ZCueFoq8ipwYtXJxvDQ5VJgVzibN6ASTksGfeBBz4SBXD7T8BQcg1n4xRYKTN9",
  "key9": "58TLgqz9Bd8TG6EpaWWv7RVwWvBWg1u1iByvkxr8X5Vs6hcn1Cze7JUC8vRMQVCPoxd9HkkKxWTRKmv5duaegVHe",
  "key10": "4xXNaEVVMKXzXuTzaosd218D1bDSYrvShdauAv6ZB27hiNNKhcZhrfAhghq6nZjw7FY7d9VpzWviZLaG2KK19auF",
  "key11": "2CzmKKSwkw9ZyMHx9V8dz6SnnSjuyePJLpmKmuaMg1bgU6spuxuf4MQHUor1v99jA1TeVpmNQsDvbfxaborttST4",
  "key12": "3PC5NHZnMHG7i4KSEJQdXBbeffyy7pw25bgMgMNLooC9jhqQ7dxQsvTAaKT3c9jZRgQaY2xw8FRckzR2DHZAp9Sv",
  "key13": "4YJJRMoidVs1ZLMV9qmeZEMnsECFG4NSvCjU4V5paQPdvMPLcDnxjp891QaScph5GuHnj4EPFVjTj4nVwoZn7vrn",
  "key14": "3NbfE61fBJR5LiBcyTqyqpnkQXcuKX3jce9hX4CR8dzLBjp2hxcgyt8ucv8RSw6U1xecQrRGYqffJ3WbWgdagHzZ",
  "key15": "4JqoHSDMZDekB8kJWasLD5yhGhiGouqgERtfYHaop1LRGrdfKVHnvGZPxMYhQxx1vh3MarDzAeEEAEdWcH6EAG9B",
  "key16": "2sFiRJjnpTA8zY2SfGC3gNDsGwQyUxnPBuMJf52rqFbE7QABX1d3Jv66WifZLfZQpE7Q3ynR5vx1P1LqZEZAJvZG",
  "key17": "67NTqdbpNEFLYFd4hqAXK9jpVgVBcNjkJvdPSEa4Jd26ZamQSCJ7MgNcxMekVNsYJxTh8eXQAkz7VH62zuKqSHPG",
  "key18": "3wP9JCrjg5QpFhHZZ8M2XbJqBNCtMHh99jrWssJ4AGqXYBSEFBy6b5Bu9qBciJo9Yvrw1uMdQujuEEyhybJyNnHe",
  "key19": "36VK1fw4YeMmDued1DuepQFUTzwHcJkrrb58wZLWTwM7KM1Ww7ppT1LREwfT4o4VFnhx9bnyXxkXSEi1AAtv8iUj",
  "key20": "3YCvwa2rjMVkRGwhReXrUYFNL6qLt78YBti6qBScEqwBAuGRUSbAT1E89J3Af5gHBqnSDAvid82wVgxTwoAjJQrS",
  "key21": "4QEjayqFLrkv66MbTRQq2K3epFJZDsn1B1VPcKWHfq1CVSz2u5PtHYWxDWHvSo2w3Q8sVaRE7ihtFaXfVzD9k91X",
  "key22": "3G8SfqQYgzEeNfhsLb9JoyrVGydMH8v7bZPxR6N8A1D15X1mUJmYZKvFnpHTLgt4im6PmR1UY3W97Zh7Lp5bbbJY",
  "key23": "yYzg1f695Stjs1a2L8idjkTQaxKdZDo9fVtmb4FiWrtSHHwkfxDgqoqSLLYyHW4itJr4d1d3RUmiehsd9KAndAb",
  "key24": "3HkWLxK4mRc1ycHGVue1ofwSnD5bxUG8SkbjBLhckv3W1iGat8nN6NjEEFZxE1PMxn8bkAxj2pov7mQbAMFiqSdP",
  "key25": "3QYEE1Dqpcz16tcFt3vD4vybZdwQSiRLCPquQjVRvbJHubMTrsViPUy9zWokdyvhwWocZjzPGvWv4qKkYzfPZ65M",
  "key26": "2vHAacvjQzRtQNPmm5LcpDRPb6uKkRaHhwCzHJDR3fsyx7npHkUwHxgVRCX2msYhFUFihsFHej3qDdUnax3UQ5HE",
  "key27": "5P68hJsM4CNRdfVfiphYg5gEhzojgKprKVMcw2Zgv3Q6KFuFaeDmS3A3Cqy2YekmJJVXtUv2n3VJNM1t9pFPNNXd",
  "key28": "5n8Wea6SerQ5CYobnS19RXV8Bc5SFCpbbZDtDXhGGDP8LYytCNvDMXVv3sZTYzsH8s9MsQG669KWv4Znyxiep6B9",
  "key29": "4fted2WGfRHZkjEz3taVxken2Z1EfTeYUeb58z4JgCzm1Si7PPiemCuFZsi7pBsWCoKc46oj3yDRbAPvtB7Wc9qG",
  "key30": "2orcG3mhoxW7e63BGfgfaKyGRatWUd81tmHFbHF3oTu31KbpJKEbhtWFwcExkFnpUUq28SSvGsE57ehJSgb5BYnu",
  "key31": "47hnMbdLY57A1x3tUSnCS5k5C9CmbcNnVSUs5LXfWDDaaKBZGigCkvX2sJT8etRGmc3KZQ5E3zWEy1MnkCxzjBtS",
  "key32": "2RTbY7XSB5ujaomVBrmVtRBsJDXWHvGy6QqcwcZCzGFosD2Xn1FNGCEJWrc5Ld4Vad9EpCVWWLiSe9F5Wq3p97eK",
  "key33": "2JMibn4WHEkDGWKHPWGM78Dga2abRHmDeMAkMFHiioGjwhZaKfiGcjdZrPGPeJTNJYtmqXpwKRqmPcNmXJDpHSJm",
  "key34": "5fHNk5tTTE1VWu12YqkZtFrxTiC4wEFAcSdWa5ZnHU62ovXzhjcGzBTQF38VBY9iiKNmqEz6MUbsTksDz8rcSCSz",
  "key35": "5RECHPoon36EbE7puefHcREVbry2Bw5KarQVSvqGwf79GmwwU14cjkvEeqJyk1hr4GCFtJ6pvRhzinhAwcHRWUQm",
  "key36": "QzDdZT3g3SyXmmuUUP15KLUfrtgXHToqrZV7zZEGn4g15xqLwAMPAp7k3CR7xHajTw61JHsnCqp37nMiUJZQ1Kd",
  "key37": "4GByzMjqAigogU7EpqhKdFSUZd4iLiCf6sGKZA1yNKpvewWstjfcrdftgpbQNAaTu3L5RrCU8K5r2hWdBaKModUD",
  "key38": "5V5zfPnpkZUjzS7Qu9MWPLPrcNuVCNRYiCLBu85kA7WdYpUufWMQxYj86Dh8NqUeiLYTKct5E8T13jASUpzXNysY"
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
