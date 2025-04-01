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
    "2p91AvhwRf9As1DyPFEC3t5Q6kwWJCx9Jd9bNQbp72E91gaF7aHm2J9inrNYoL6gayXcVeJB7sqFfpsXwLRqo82C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36tBCXa9CorDMoeVxEo6Ubm1bYa6A8WxE5oNUHPRCTKFfko4D5CCTWzX6tQXogB13pHbJTgX5kDt7Q8YWyfgy5LQ",
  "key1": "2NT24jFWesaCQwnadN7EzTwRBwQzx8euiqhGFCCGMiGN1HHKyVBBpbxydUbsxQRpcD8bhC4s4uBWogJdYaJsMuS",
  "key2": "3PXzKEdYR9Azi1GoEuEUboMRre1KAWsnLxWyz1dNukBeDTnYNPeEahPcFZooctb1XrX26o3oEXV3EhNiWd5GuQB1",
  "key3": "2XPDUg9g7xVX5YHG6VLMH3GSycg5fix1WTgy1eFY6MAPGNDG8s6L3CyhZnZqzvqcva6GFmAw5J84zXrvWJQW36NK",
  "key4": "5ekq8LnF8fveznFvkbDtTP3VNitGBXoXEJcLbF8bAhCQja9gV2UYLDJ5nvFQ8bSevMF6GTtTDa6PgYXEbQpQwmnD",
  "key5": "5SS8wewPyjn5QKP1hMsqoEEUSpYHGvVB8YDp2p9NrDyMhTTwR1rSEZFfsLC8mmhyqB9CGVwKa1EgnX3NTCK7A4QE",
  "key6": "Dz1B3V1ffvm3QWaSQgRdFjeDMm76L9bCadK5Ffe3ioqrwWPmTuGwpdJWz4LPtGfWRiaZVhNVJm6gFq1CbpbuLJE",
  "key7": "5vYb8bg5SA4QDaW5zELv4BXhLnFx3nPxdn85Y7nZzqCNqb4nKrP7NTKEhrYbCTWoHgwMLGhrNQnuSkXFyZthQeTN",
  "key8": "NXzamenbkA5tnuWFeYBz7paGPvmzztqFPnWjSZf9C96GR7viHTRwFFAorAwyc2H5xysLZdzP8HSxr6XvvbRJiEX",
  "key9": "4v2gLh8xFfmkuzgpGTg7Y83cRaosfTtaXwK1miFCKbL4MKjpwsq445RBHJxhH8xqtEZgjpJVnc3jRWPtk7Gu3Cc3",
  "key10": "3KGhSZeJGBZHE3cYHSMSuXqdJS1qC9ELbcBxu8sYNiLdmAStmoEGxU1kpAZsNycRdi5tM1bqUY6H5EaLCicrcnh9",
  "key11": "sgXMj26iZNxLtPCsRF88ZZ7Ljbp9npM97mHAUbeXd5pEmDXT7N4FqjRJHidaW2xWMhb8gp1zb6NuTgLrEdE7J7g",
  "key12": "5eedD8ic9cMadEQ9Bqu6hx5S5TLjRFC6bqmwvkb7Ec32NorYvLHZzbqBNbbmCP2DqPZNXGpAbMpDFb2XXTGLrBgr",
  "key13": "65iAu2oGkzhETGTChyyxnSwDjxLbGKVjgSCDeHebjtD4jCdvwf88MinVMaQw3FSn1GvzRBP7M8eizac6CASEa5dy",
  "key14": "5zHkETquDnXcZ8SZSz2hkBGwmHcqiaZq58AWdEPYGWNrin7aHHgo1BtCGxjXqr68SoPoGzVvMNnHUTvRdfwiC2bw",
  "key15": "3yDtLR8CaooC4Fvs3TGSQpr1Sb1yBqjXBLPHpPU1e8GJjL52eviZFZ8qCZN2ihnQzcsAesFWrH7DNDV6nNNaJuzZ",
  "key16": "wJuUsHL3D4DxrJYTEFYTg8nsRaRBXWki69f5CUxKh4z1onwxkzpvi6RaDY96wWKgUjCsjFvVF7GNTPnSTbbvMP7",
  "key17": "3EUY7TSPBdBr3CbwAnXo7Cz3kCEvhgWzhF2C7cYhE69ReU3dYiabWboSacvsFAg8BVpR9Us8Mthkwq7GNQVhbJUS",
  "key18": "7H8Ak3zNtNjFid5GxadTDwo6W63e9NhUWev1zo1hCzAPEeRaSZq3f2JvqwWbgDsAH8cspN2uT8hi3vPsXZjjL2z",
  "key19": "8MwqWoG6u3KUJGgpYru4VDoaTdQjENV7nTiFobSLjkg2ANjA73qR3F3v4rgnrZXQcz6GARxxaVWiLM5wAhtp7sr",
  "key20": "bCGDDGCZQzFtchGBz17R9ZcRQdF4z2JkBLjNBBXQvN7mwVMpzgUTFUHuJhnx9LXZTxL5jQHc2UEeBQHshv2LBa5",
  "key21": "2Q9kSFmMatuMN9H5GstZ1Y1gQG7VBKk31SoPWuBco7a4DSC5SyouE38E6xWMzGgw7NSkzCD2vgTdToZf6aLGqL27",
  "key22": "5e9PeodQdtP2qAaNvMtUug3Xa89Lg6TFS5c9w5BnkTdEkKhTYRCrSroPvnEQWxGVmvNseJ1k4zuYJxMhvYT46p9G",
  "key23": "3fhvmca1xJovbdGQxt3DYEdasVGpLHEkZPTeDorizsh5ho6PjMpBrFKuGP2m6stQy3dCdKZhmm5qYqdaUbojSZvE",
  "key24": "3sFRFg9DZj2DfrVf1uuSWmdmnaJUVvptsBmragCLzQNzDfiSZM3WB1zL3pPY8iWwSTP4fuJqkJ8yfWS8eEHPfxw",
  "key25": "4v2EmYHVKhoFXHvGyomQEDPbFJp7yEvwYWnKSybhPrWYkNvxYSD7ekKZtjHkWxUkQRPT85UA46gTdFCKtM4KHRUH"
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
