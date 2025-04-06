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
    "3ivHgejZverYYRVeQekduZsgqTshBSv2Gh8ckJie7VVfMAQ9zAo2ntpNNWsqgWH8TRFJNGB9ViThE9Jmzr2uVzoA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qpAqqh4GFHmGQqSJD7E4oC1fPnWKm5ZjgzAxxBEy6ak3iANrBq5Hw9eFBjq2ZfrAivgxMvXECeGbDxoiT4GV8um",
  "key1": "4G8Rgy1zePCDFpcH25Y6UwxyS1KQkh3tUfP3odQCXsRWUP3yBoiGo84eC8UpCozWN3ua7Y767gNrjEsvz3ga9Gen",
  "key2": "34oFFMJxPY4L3wgvoXa9Xw5BYKDXrrADcWkJMWQQtcsG7QmN6z669d92BPZsrd5qT7bZhDc927tJtFYVBjpNsX8m",
  "key3": "2EfaF8aHLsixQeE51L2AkzttnbX2njqEQJPmTP5RFKZPjC4HrXyZRDto5Cn9NC9CisfaTq9dhWbunPnJPYHvHXTa",
  "key4": "3dmTkByMUsaWhjUGRPACLhck4vx3UtqkUL2AoaGiDUMcY7MuBMX3CFRaSpwXhsT3JDJWmfdxF3CL71Y9QrMRAuSW",
  "key5": "3YxGEnwHLwey3NnzDysctwhkQRYynkDbeaHhyxUrM2YdX1AAoPEBKWfH3QAohnCUN3EjdtQusMn1Jsi8DKZzSSNR",
  "key6": "Fj19JHaCZ5kVgPdxZRPVUpdXeLVeCZ3YfvwE4gUgaiKfrVXW3rxErGNGTMJYPxW6dnefWdTCfEbxMhydPeYrjSN",
  "key7": "2UyeDCuYk4toNvcX9VSqcRVe1AGb2r6MhuPR2tK2qGy8gNrpvjhxS3ZExbTPmdutxJKaxfHgcBFTUZgPfsqgmWMS",
  "key8": "451AofwjkyS7hGAFttUcK45wU24hKGH17KPW2oEpeNFismouijJ93HjQzSkuReKxBY2ej7EbXke2ffWJVw41JNiv",
  "key9": "66D6kA9KhHcuqVY8cYJduBjoJbXqeFR5Q11KG69aLiNd9AohqEJKzjqNmWvev3SDdLdvW5qPD9NkzRmrKLVTABUW",
  "key10": "PSc2zj4UYDKVoawX84SLVcRPJ2izaPV8ovgakKstLwkAn7Ev12uS28nRzvYFfaHVjujJdvrgFV7TK68NSyimXdA",
  "key11": "3KraWHe9NHut1rq69JWNuRS23ZgVNCSZ14QzfDbTiY78p18dincnKKPrnLQ2pLGbPgyScqE8QtJcmvxiGz8CuS6L",
  "key12": "4RRApzKsRsuU9rvZXqmbEWSRPBddvDfEyQiNtnyPFJxuDqoEYjRuxAxpooZFA6vqo5NBB9PvLrKWie5k71VHn9XH",
  "key13": "QH7VdB1Xw9zXdMYf4XCgEv2rBWzF7a7DN3mzhEK3KErhirxFfxiqrov3fbbbAnsJKmnWmj7QvGqrHnWtr9zmJXv",
  "key14": "sw4A7BBAvYaX2K7HQHH7CR1aNvHG6BzmZ4myBxjNqRq5scaEaDDBndt8h47v9DchbM4AE9t131ZHDYoB6YyfqMA",
  "key15": "4N5uKGMKBa3tb5hPAXgzVzoVM1oUyoJSGho6gEmDchf3Aua54HuE26eho1MrrXTBuFuGzNzPJNY42cgh7nZJJFFk",
  "key16": "5vfp1fxK1oV7BYzaAjq2mN1XBcpU7ACc5D3yRT5JWLod7QtJXcZdwodfW373SD1NLdpgRehqAwq97YRnXNvqxnKM",
  "key17": "61BAy4ocHCL9LVNGoJJC4XpR3JdnYwAuth2ZY9NZHbNwHdx1KfK9hHSuctzaVvw4SHkqNPJme6G5f4tD3ziauVxA",
  "key18": "5jdCkVq4vBACGwJicoPoeptmsc47gwPNtPZpyQfdLEj7jUD8BrYBBnipb6KvHfdaZ1MKUrPaxrNQMD8vdQNYkx3L",
  "key19": "3LJTHv494YWHsZcUvwKwkX4AAyKEEjcBuV5L2mhXfHB6KuhXWnKFN2hTXmfrtPMjTiM5KgXGCYcJij6zXk1GqJ8p",
  "key20": "5pt7BvXwun4HsRSZcxDvUNAsBZqHvSPQaVoxJG7Mt2aLa8XtEapBePogqb7YrBgoUmRLQUAJnMSQSTww1JWq6yzw",
  "key21": "4uJxxZubDw5PKnpLqJcPfY8Le9WP2yXwgxk4imrYrqPJMkPgWcNyCS5irMJHxzSDVsSyRt8DePSNsKsfAFp15TCh",
  "key22": "5oqghVk9xszb6UMFiqWe9cr47TG9Yt4bgbeBYoPxuTMkEg4q9HBWUbxNV23uSTXh3t4hxAN8KHn3uH9ad9qK6MbM",
  "key23": "46ojn7vSRyDxPnvHnD8PPvPk1WLTLKMneoaPEBdAREFbQVTncXb3yTwvPDDhrLF1CUqUkvPHyVFxxHF6Rm7FTnDe",
  "key24": "5K4yWdG7s15D9GV4X8Y4CfaCPxSL1ojXhXrZH45MrWZNxR5ngrt39ikajUEinhipsqdPPAkfJH5mrg5qAGMMZx6G",
  "key25": "4My7gRzJRxugeLZnAPdjzDpFCQM5JYPSR6XPhEquqoSDpbR7f7zoj7p53HWZPVrsjCCQmzv7UP1n9M1vMs1x4C9y",
  "key26": "49R7ytyn5CUUsPh5t4GnV1r1Ygj8Q2hSW4SiGPUd16Q2PbreGGwSiKHCu4WmYpcsEb1SWcYjchQKLjUQZWiETwjL",
  "key27": "63Yw1YvYKGgLBDNiizAaYSnevHWEHApRgfXQTdN6mAuSb8qbGtG5sU8o3bNC6FVCMBhrrAFrbozZ8xXRWAdqqTgG",
  "key28": "2tFqLRUoP1eHLKDgPoamBFhLAm4ZHDfYUuf5opsiJbyT66vASAQgz2D3DRciDyVhgMsbAnqaCpoAqJM1vsLvk4kv"
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
