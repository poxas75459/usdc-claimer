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
    "Vi1vH9nigDAcbhw1AKQtbqpa1h484X9PupG4pN3Tw2Sk5KX9s43cgfYaehSeq5MbkqS9fJVAyybbvvQJmC6UJTb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32WMb59Qq6hj8GWVhR3RYTCAuiCueAu9Rp4NG2RmeHvjTFJFnG6sfkBQ4hbhMP9dUMLNDYir4XnCNAb2GWvSpDbM",
  "key1": "zBapXwZoiHPqxLBhaCjBQRmkvNXaiXt9fbmM4X2t1kSJftRv3eGB94ANXw5YTyXVYYNQ2BxTR6JktXBpqXVp47D",
  "key2": "tsrkjBG4mYR22TKEJT5tNTSeASizH43UAdMC2pEtWzoJLycAMTrzk7k6PtaK4hnqnYPZJ9yxSTpzW8TCvRYzd54",
  "key3": "yw6zkPYiLPQEtC8h1RdaTSxCjABNgih3RSHWQDrLyRvJcajErc3WunFYNQSJMVviS5sunFjVhQoE5E3SHebqJAo",
  "key4": "5rNsqF4ptGT5bxEjfZE5pAwxhs4HhqhJHsfK6HLdjgan1AVCd12wgmGYGS8ov2jy47nUoBghFhb43ZdBPnwoSbaT",
  "key5": "2ZQxWXUHAbMBJfSFyXvaeaM4mMiXZY562iCAAotSZHCb8GfjPQDeMEVJnis6194o5poJG3sbesigZxuJmk1jYFZE",
  "key6": "42isTi2tDBAp2dhS2AoPC2wBymTvkCZJxGWbh3wTvpFVDUbx4A3t1VLc38wee3An3RACmoScrb3FcR5Muh55Nz8q",
  "key7": "5NBNsb7XwDkWYrfH2JPMevAf8WHSFkzAWmZApvHeG32SqNa3GCxk8XQfX8wvwYo35cPV9wNCWAKKFp567wd57hvj",
  "key8": "4hBeyni8B23QmcPcAgsg6SJFKbiV1CpeYCVqB1xDkkNzH1Pm6JfvCoAsYt16eoR3Yh5wWfAPTtoXtY7W6gHEbuu1",
  "key9": "4kPY6PpVS4SN7iNfpFzVquXatd2FM4xWQnKvnMCTSiW1o3t4vy2qCZnTMtJMR3BJ8wjp6QmqHMwAqRKraPYevW1W",
  "key10": "5EPeQqGKdD4o5ejTKk87qfHJZbxSwZJkGfwBxa92THubbwuKQ58rGADkqzWAuEJNiNBqr6ACm7UcyHPoSuxCEndS",
  "key11": "2q9PA16Yzm9P2kkYPwWiPS2jtGsPdyYLEsYfREuuHsYhiHqhEN7BAVt3nyZYCdpxvSr8NyFtjzytDY97Q31xn8g7",
  "key12": "5c1hTYAULNS1VEZMrniAKdLfRvom17cCaNaWLGH4PxtmZVm6d3dy7wENLrUCSLHTqpoAKyqc8VE3eCgUREfJGGDK",
  "key13": "4SJda6keV1kNJvVtpaJCvAmAoaf9aL94W2kEvRCWZRP8TcjazgVA7icMBGuBLdnxqHgmQXs4DwoefbrjDqzBkU8Z",
  "key14": "SVwTRwDRSJEenUtxMZcYX3mhqvG7F57ozhJJeUv9ZT7rhrnDCA6XqDM4of8xZcZTqLQeCKxhoeD5YatDd5G8nzr",
  "key15": "3N7gc3icJjn8f3LfhAhhJUMzZ7TTpn1uXNgpXiUZSsAtPnWmLzc6yoEevSmK1xv9YHj8eUR3xqK2Ai9WmkD3BzVW",
  "key16": "3sjwbmKUsaBfx6ehmwNgF1jBXBiHdhWzHoGy5FLSm8aaFYHF8U8MTxCVmtYdivU1BaEjX6aGhrkP3T2xhHzdRFCw",
  "key17": "3xqhUuC92HwVfzZ5L67in6Y3umLzCnog57o5XH6Beyw2n6o64kQQEV46RRyr6FotQYDZUwS1yc3mhPx9koiBAzJv",
  "key18": "4vuJo69cNqVcQGMVN5Kdki4rRaYDWQFkpYzg1PDCskUspy6C4iPnf74KRq9BVUVDgG7JqFPkcwkMBcF5Ti1NrpiL",
  "key19": "X31UurzSqHiJYPctGfLFuFxRhMpykPshEZKYCfd9PggpBgZS1mZR5jsWzorcjKLT6ZP8XbLbZCCN29bZZHTMbss",
  "key20": "38AkWBa5P3Xmm8TJPQqeC9BRc1sPQGPCUgh67A2YMv9kn3WTwiXq8dJCjHBMCs6CeGyapy3SAsnbQvEcX9kHcDDX",
  "key21": "5ESd21ziigMZo7z9PnF4h5o8L5Drdari9NVqZrJFzPg87nn1ZG4F4cVC34kxPFsN81ATJEm3AQsfZpuCHtZJXidi",
  "key22": "55aanRXUz26P2VsmQcKHKuHye1W68Q9EFDKCirYePt1QTvoS4Wb5kkhkBh8J9mWY6jt1Q3iaYJE4377bA2vabRB2",
  "key23": "5zocjweVgGM8EuEEL14eBU9BV52dX7TvaeDP7QftR91zAoPJFPmEFQiNtnC69yd2eEswui171Y2UEt8PzSswzvhE",
  "key24": "2aD7jddpKpEEyhKZK3wWov2m1STgaMQYQqGDaL5AgvcMcyCvdAtGJjwRFrAfB9RF89DucX9H1wcv8NxXQkzf9HiT",
  "key25": "4zNfAXNhrLfnyCmpN1QQzZcYBrSMfBQ6bkosAtvzMuV8N71WrFs5qMwzwGGetVs21sL9YyGN45YM9FnTGPydf6g4"
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
