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
    "3y7q3KcwRKz4NP1zHjsswkkFXD2w8s5pnnSL8txp8rfXWw8q4q1jH2FLKFdJRnXd4j2NwhKSQdHSKc3vVDMNwmv3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4V7FMkK1P5dxVoP2uVTjdPAs5Fb3hUeKojih1ZvRvtNkKNfnxFQ35waFf85c6fME8QNdwgzzmDZWgx5dtwYiVUSA",
  "key1": "4WpLboPPDwMV7GNeDAr2i16XeuWMijELvzXJT7ZCDUM7ZzFtVTZ4TehSBdY2oy9RpcEMiWzo7GzCnGPooveEZp9U",
  "key2": "5SPYbJSg5MeKsGp9FrmyDZaVCwCGgpH8CQRDjPYDtRdrJicuNMXYyPXgP5V59RwwtLJDk3THTtu4TCFobY6dB8RE",
  "key3": "3ojAA9yF4H9GTCyz9tFUaBVWWa4cpdZxWtvVPjB627WDoyVPWHZyJM633ZQyUFhxAzry6UcC9MVSmfoAGwSzAuD9",
  "key4": "4QY2JU7WzinVLtLMNFeMPq6KX1SmMp3rqeNJr2fe6W2gDkUgrC6h1YbcCH7iQvfMWErPQx6Krz6B8V4rzGmUbiA2",
  "key5": "2p8FteG11MnCmzYQpq2S5eF4PbP8faWT3CaVDCLQQASY2WiNRfxWEcYV51D55o2nDX9nYm8Ex4wmB1yBneXJ7xDR",
  "key6": "51LvGNEZeM3aLf17mRs3fPLfBmPHbqmLXkEnsP54icRZxWvt6G9BXz8QqAWP3kn5NhZi85wpJW7FsD9KUbaaG2Mi",
  "key7": "rqKRkN8GKw1ErAGJn9G87ekrsDprGv6QL4ZzVzbzeQadEgYC4tmapTkUkW6d8L1t9VSSZrBXcgC6sSaq6ZjVKda",
  "key8": "3223VC7ad4iJH2gYfXtUNgBYBSnw8T684aUQxruJN6wMo9igMPTKMAiTgAx7yYJf7s8dSG9U7soDeFH8TrAR7tDv",
  "key9": "94jkL8oiMhyoaZ9rrFt9JvBLyEjmtWa97ij7kVB9q3VkgpEU1BirKAafR71XvSSAzS3z6qUaJZ8Kq5sD4A3XMai",
  "key10": "4Dq9VaAMSJSdBcCpoqGhnnjvw6YQLwh9RwMrgeTuL6qA2p1DBV33kk6gN6zXLnCRgJgKFeMyKZLGGJxgCAwDzvUg",
  "key11": "293mXZhu29wvUopDtZ5MwR5B3KQhqHyVEHGAUCH572AkVLYFxrwytJUrwLYYf6Hds9718FU4aTVpwoghUDwBxe7K",
  "key12": "3wx8uUUKguqP5bprWi5oXqTdf3G2ZqoomTvdGhxUQr18dqBi45GdfS1rz3iLCpiGfBEDAwAwcYBniSSpDneSs5Fi",
  "key13": "5XrLGzdRYboKn9pEihyFvUDDn4yjmDC4gFUAwcmh8gT7UyLATKVDCVTtV9ksZnxWHeULdZi7vbB3UhTAakqPMy2F",
  "key14": "5jg7o84pfvoGgd3f5EBT6nj1pXGohe8HbAQjambhM6RetNXGgUcqpPqQnxrHBBKNnimyx2S8DZvPbJapb2PAxsbo",
  "key15": "4mx1SqtMgd7h21W9QM56BTQJ6oDDLtrYJsuxHBBVacfuTiq3Jcz8N4Wt8pp2LeNTgdhnvrCaGG19fCuN83gbgxXN",
  "key16": "6kJkfybq9yDwSLax9iRZWroxwKTrcumb193Mcg2BWTdYr54KtHYDiUZU3GWCoEPDcCGrJ3ViZByTAKNeZCSxdPA",
  "key17": "2beZ5UgtRLaGQsWWRtccS1DL8ZWAcktcNvN4U8pXzJ1AybnSCpNHecBnrsZc1rFbR1Q33rpybew8ZXUg3sBAUkjw",
  "key18": "uRo4ZZXrzkz9YVj2S3YTQGCqxYnuXtkTkk5W4459CFTEKCeG9dUafTCNxWom7uSM81A2aUn9rQz8wofQnqVQ5iv",
  "key19": "5jMck1bq4avFwLATLyGtji4YHDFariX1G6N8ikcnNe4ud984dB5nT1r9z69fwvLM7yWTvkdDubXeo4NfYXLjfjFB",
  "key20": "4AVynbxTGTWq8fth2LGbRRZjYKcPjC1Z9f3zkPeHHd6dAoaBMY9zMJCSGY5MrcbFx3w4k9FxhqVENVubegb6Vgnj",
  "key21": "39NGotYcPUbh1YecXwYNnb8LJVRoSaq9sWY3UqNtBduA9jyYSDTarVEgnQjjuE2gfdskfEuaYLzRLdVaxtifmmtR",
  "key22": "3dNcX9XTENMSbw7PMP8ScnXKQBv1S7aFUzu3aMYmCZp6QGQXXTW1cEVSTKiLTXfiSgToy6LcdzrxF2SmPijCbbQy",
  "key23": "2qFGi7bGtSZ5rMRCznTzXFSwgbJssVAksb2ecjkmnvSA2nLPQkwj27nJRqK79ZP6esNHt9ADkrn5VZ1LErhj2DXw",
  "key24": "2HGNsV23LrQt2B6o7EG3a4GtTma3KujmdWB5eowzqZW7R4ZRyrcHV9xJHnjg83fSi4uzQZJbHf8BssW6mgD9PpyA",
  "key25": "5NH31tdmMx6azNfJ83XHvHCZZGSVoqmJaZDtCN6zwZbxXRXLDBkjQBRcYYkB8HBfXPCYsaDyQ1QTMn7cHA2XN8yY",
  "key26": "34ARaaHzoRMpuvwwRPfTVzDXARMykW8nFeb2NDcEAJyYBr4nsbekxNu6pxtytjRwA8ntxoHTgLAHVWanHQdj6gkw",
  "key27": "pjBeHW1tuFXhTaj4dDQ7mfqU2iWHWnMokR3SnZ5r9iA2Z5DjXvWPP9SW83ryq4upHFD9oDtq78pujAkBZ2TqpBR",
  "key28": "jQJZQzVFYVJW1r7R8pkmtBwjk2L17aUwj1VUfqLKQZk2zQ4XN2UDt2yfKCkty4CRrVEgScohz4tvrEHQu1S2srG",
  "key29": "NkjwB8yvHqTwKtBT5ynzhB8eJ9ZujkjHKEfuWvDhLJa5NncLD9cdcToN2Fv7YxQKWV77ENq7zEDXkHU8pv26V6m"
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
