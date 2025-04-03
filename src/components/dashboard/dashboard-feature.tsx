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
    "2wwo3fc6aoVSKCgk7DHHxU1geNdLSik6AMKtafSuAJbK4CJ8e1LX7VFfWDTSAS1p91rhGtbaVxDGcvSmfwYsUz17"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3h7FAY14yMg8Gt16YynK1zEtEftqQ5AwuoULiYjnzGA4iwpTdpajBmqPd8khpoGSCEmrjR6VKtuuBXrYgGDYAGgG",
  "key1": "5FT5QL431DR8fcBufQWq9MVq9fen21L7LjLeVsMhWnsz1HaNkUdY5LkBowQp4qHEwRz9y3Do4qwjte8H9Wihc1dY",
  "key2": "3FNBB5k3xs7gMBzZE4uE8wXbCuypK4MknkHko5gdGuDNoxK2yhjT7QL9aGJufStDVqFMhUHPEZTaWsykDXbaH5KE",
  "key3": "4pJ7N3XdPxrohdMxKAVmpFiNX2J3tVbBLYmFj8GqhCf8jB4YPsGRYpeJizwXTQZ4PEKgav7wVLDPyFXeUtGMScW9",
  "key4": "35tey9GFDpyUz3GtTB95ZkdBWH8SrZLYiquPrCGtMkWwxRpFvn56JzUbQ1qRJFHdowiLPTp3g7ZaGZJGEwZwgpJj",
  "key5": "2unLDACjR6v6ZU6NnHEzG98ZoUcWyJ6wXgXut6jxT737pa82SG2ewUHnkBHNCDXfu6xpCHv8vskvgwJquHsEQGan",
  "key6": "3qzFXG1SSCbBXHYXoYm1X6EHC4RDYV2VVTsK6K37EH6Uaym9dnhKDSAswov6pjLnfgfKaaW6UqdkMzY4fd8atM7j",
  "key7": "4tq2MUyWmejnuU981z94zGRhNHHsegFJgwLj9ZvcuhAhaMLPct4ctY6oD84NhWZbV4CzsSYzxuxCjUW8xVTr8UM3",
  "key8": "5yyr1pucDFdAa1Mr77vJnM2xSoyFqRPn2avEbxGiTTmSCwSCXieaLTCbYr7gt3fEHavHzYkxxu28TcSTca6hdBFL",
  "key9": "2cuqYS8uw1uSQWAsQiQPU4XEVk2VS94npDCciBfB83L8eZAQCPXv3BYs3js3AFXdETXpHGVkwdKM5rNMt2yE2jKk",
  "key10": "2s271AT3tA1p74WSpek1KKzjLNVq1ENgUhJBwHQPiV522YKzzQVZGuiWppV6acgrTHuc6qs62xtEJJ6EDQ7wh2n8",
  "key11": "2fZiTq5cAWxRKQujvSDa7BAR8AJz1zS23CWXNuHimnLJxvZs9taQSkMi2hG7h7G66LWqYyNEVsax9mLAqafLeFax",
  "key12": "5VZhKAikwjNkpPWnsZakjNLiMfNuNoebZb1xwZa8y7koMrRdyv4dN1Uhdq5921zxSgtr8aPH6BLzTYHjmqe6asky",
  "key13": "5AHeFafPanRWdBLMzQtRjyfQH7NAZjTWdw9nPpBpkMHoyDczEUqh7PhSVNyXWKZqzGKdzoGSee3Y6PhSMw5XSfCb",
  "key14": "5xwpSyA8nBLSF9yeWvH3m3UrKsbgQufHeJDqF9xAem2b4V312ZTrBzqnLZkH7TsF7qrwjs2vYo5wXsZhjwqChc71",
  "key15": "4ybfvkYBtyzFWFZfD1yMoZ1vSyf4b29tuS4p2afzb2wSBBaHgBQnmR9TdPpjKEGaGAbR5UMLt6u952mN3gRsT3wh",
  "key16": "2M8RVT84GbfZwbHqLzHYKFhitfjqeaR3Bs6KFgV5529wfexwFgGLC3dPXAFA6FLPbXFMkNjA4HzVdSei8j9Gz6Dx",
  "key17": "5hX5sG2XorK4gP6zgxjJp2yV5Zo1fVE5y5tkHNj4uQ1aLba8VeN2QSUzDi2uSzpmxp2Sb19Zq1pSnJPT6JszfEVF",
  "key18": "46oRR1KiNFAtEHNkdog53NJWikY7Q7LVtH4mgamXLtEBPSYbZGcRHPg7PNEe6n2GF7XKNuU3MbNa1dgbdVSrW7qb",
  "key19": "kVPs2AM2kTg4CE3nDQCnsJE3wVY5k5zsK3i7aqjDbVghU8QsUgxfyq18SP2q6s59XQwL99dzsz7MUiuLG8U82UX",
  "key20": "5Z47Y7NHrXqNUD8CWGMPjKHKSqkbKnk15RL95jgjLfaQBGAffTw6D9EKMK6D3hMvRFDDdDbjrCGYAwjpn1NrZTsE",
  "key21": "Bm3pbXxKDQSv3RRJ2FDm7NrHw2DA6zm3hd9Ud9mN7kbPSfWw3poPDaxAS8CvUwcARbZ1ceDUvFoqyogRkEoH2fc",
  "key22": "PzyFUq6GWeqS317kGHakN42gY7DrU7KG92GVvY5Nbm4oovmdxKFJav3uLUCFm1oasCnKxj1DU6hK4PK6Ptf7fua",
  "key23": "3fXHireQnzwQyGAfrV3pcPUM827rjDo5f88JMRbZUv3NB5ntdjG57FdQaGij52JzwKDSWwWnx4wNFLNPstwEtxih",
  "key24": "2LM72xmgBsXtUwPELrb5e3EH9NAyvovMWHmMZqWh2HgpXV3DbSNeALhStZeWYD4oAHa7YcKxmMpwgNiCAqyoU278"
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
