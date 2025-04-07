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
    "34pDneV9haKQBsQknNEMxkCAZ2xMqbskbyhXUXYUGw1MYu8DsnZiTKPxj1QtHZ8Fuqpcv56x6nbaRcvWirWPECws"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jhpkqaSGrKmzrJTMXWQoJ1E9bTJy8GbKiKfS1zf49pQV7APBhdDS358z4jeHDu8u5oRg7QdHdLFJvpXJ3xEGUpz",
  "key1": "5rXxj2ZCtSjjKz9GCcRWVzXUUue1hiUCWEZA85EAo1u9vDnVxFRHqnSfjBaJqbf4hKLagRkJAPyExVTqK26gstSy",
  "key2": "478DFEURv5FLiSmuw9FpXVEJfgaPtxRpZmd9vewV2V85Z9T48ywWRLemwqtDpmG47go1n4ixPM1YHqhP5H9qJvE5",
  "key3": "3HKJ3763vhwVhRfn33h9G8bMKaeQ3s5YGNo9xadgiPFd57vWioXx4qx64N5ww2cLq5pWyqZUQmoRt8XRhKhbcPcg",
  "key4": "HyWCnHQyXF3DpL1uazJMV3L2c6TDm7rKMmzW3Zx3vyYaYh6WxDs9WZDcdjY6ctEK9HdNYp8xyGjbXLmbtuFd1Ds",
  "key5": "DtLzuABQLA9oShNfFL11exYKt7Ki1TXagBkvZDPvcP5hhfE13cXhZpPcWJufjSCkiZ2vSERjEQMqaFc5fKZMFv9",
  "key6": "6UV7Dv4bb628iVjCHb4QNHM5GRiRvz39ZzHgbfUravHZs3bhb1fXxaX1FC2jEKK221e7KwiqdV9qqMMtuLGactn",
  "key7": "4UaU7k2mGeqtvppzgxgowFR6vsM7yeFJaY81ve6jEPuKSyeKSSr2xuGsWt2jmqcjhbAn1zLiTV2wBoKGVxc98mYE",
  "key8": "2KtYZMGeAkasNkNWdwQL5HN3Yerz2mQjaBpmCAUo1DqgoMDc8gxGTTDn5uLeVEShgqy4LdS8GQuMARytM68mWEQ3",
  "key9": "37e1jsNxszQdMz8Fsty22v6rVW2imm4gnzrWPR9ysiKtTNxLwGNhaMv1Xy8EfH66kQVK59DYCoc4KyFZbHEQfGqU",
  "key10": "5bnpDN7FEwNGuXqq1PVhX6b4awgtkPUHQU64DZXqS9gewpMnu8ZJpnfy9gxu1JRrWZYXqVHEcViGD5deRixpvZNv",
  "key11": "4b3BGJetbz3oW8efu6sMNZ8CKUGc46ca7KjtsKYBDpsScFJ5vQ3g2KL3H1bJv79FgzNWesoFAdXHw4DeUm72NKuP",
  "key12": "3oW6UKNRoC8Pq8ptvEVYUwmgx6fVkAj3ozFNLSCpYT86UD895cq6Nq6HkD3Xu5iRBtHQfJoUQmzBLH4oWQxroSzq",
  "key13": "5wMJTdffhK1E84oNiiq8uQNKi97eE7CbMD7WJvFnkKdASEs6SvHXoaoyMowCHtor2Gc1WCW9s6HzLAxR9Lx6LUtY",
  "key14": "2jedxxsFJ2qm65E33zsfZyK1SEYSU3E2fgmsDH9RrnPmWZ6XjChyZY9w4HJinW7r8LAZzCFsUTAXZ1JRcqrGht8W",
  "key15": "8zz9vZveqA5pMRaXbUKjrTH76eC4JBMNfb6pcUwCzZ9xQjxAWvDQtvB6qUQVS2BH4aba4QVtyML3fhComgCF1ji",
  "key16": "5L621HGywPHTh2sacP1vzicyP29V2JXgrAF9usdhq2usgtBmwykTbn1hftjGp6yeG8KZvG9aS3NZgQwZ9CQy8X3N",
  "key17": "4N6M2Trrj6jsPWctJqKsP4EyovXq76vTgcvvwWoTjSUnfFsbB7MGvir4z1tijy7D4M6LenZzNx9gkWhLKf5Bj2uL",
  "key18": "3qGMWv47cCF9z2WwCYQyziGn6SbphCiSwya7m2V2ofFtcgFZSyXsd6QPY7E8fKikaeu9qRp8sgg8UcBeoabAPJis",
  "key19": "4x6Qxg6w5N5UbBsjsqcv1E6bgWhvBe9dFLakabwmMFXh9ewXEsenmMrboEnGJwbEaq5JncXpeA9cn1mwoU17T9Jm",
  "key20": "2nYTZMAjAdyhcRmG6FfoosVGwTWHC9G5RBoChwHGHrai3SENXnGpn2JFQfVkdVcxKnHULhcM54qxoy587gdmuaJ1",
  "key21": "3XRNbj86geQCzGnZ9V38C7VvSouBs5YvdQ5b9KTbUizEkV16bjt3LJjYn8We6tUwXZfiZ6fh8jpDZRQhrKrd44fy",
  "key22": "5Nsds1XRTU8hTvbAK8WqNXrgDUN82nNwqTR4Dp3ENxnspQ7n5vjz7oDNEZSqAKdVumEzWfXDPQkVjjdMcjoEMwbD",
  "key23": "4kdKuwWxg19zW1Pi9RNh6kPDzbVmUWYKdNNEEmavDRHSGPirqeYxkwdxh44E3a34WzzyiAyz6FpoSyZdPdwRDqaA",
  "key24": "HuDjJNQQynQPNsmsZvMk8LMAdhTfNsjm2fTD7WLr8N55nmwZn1NW15edW5GZwJ31Xm9X5Qo5Sq7gfouuUdLqFCZ",
  "key25": "3E44gwYPBusb6KrF9u9cGiiVNirf7XBPo1xiumVeCo71fdQWeo9MdZ2MefHsCsWjYwvM82aXDAryApwWYnpDukjj",
  "key26": "3cnh2iZxjonTa9CZ5jj9HWEXk8tKmfAxo3ETR1BeXk3HbyJHtbcxrRoJ3KVjDXNK46UKgs3wHebNxQbGmKqe5Qfp"
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
