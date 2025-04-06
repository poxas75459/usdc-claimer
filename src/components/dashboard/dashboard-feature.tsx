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
    "5KdyjmeHo3zfhtEBhRxWyjwNf7QqCfa4P5ZUgpM6NX6HG43YMUvJkGStYSLk85fC75EkYufDBtQmpr8c2Svjz5yT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hXpmBk5cDUGkjszWgFTBvNcm5iL9EiDqhX2ShbcYwjg8wYDbbzptkE6EwQUvMhUVKCUkw4PjyyYdTW6H1BTWBs6",
  "key1": "2qbLww1iC1Bh8jX1y92CMcWinsDYpJzBniDwyDUUEeVttU3a5Qquk6599ev7aHFWhn8WbBg8mmTdn8cyJS197KsQ",
  "key2": "4RW36SDeZ77WhtbA1SpUiznUQ8nH8rNzPjMGC1jzam6afr3NS4ciyuYKxndoywk63XqAu3a4bTJnWC8DD4d9Xr3B",
  "key3": "4osUUi2YG1eDEcLjUc4zy4VZVZYPqxfExtAr3g5WSDgEpZ5vgjXxVnfjJByMfkZDu28TeqXBHAiXG14pFNnsyvjE",
  "key4": "NwHPPHCs4NRtagwUnwZEvGEgseUZ7koKe3pRAv8Bx7Uxbws7iyiVG3DzK8wUVNgthhDu63obuiL2PJQSMDvKEJd",
  "key5": "5F2QfFuDGZVkzXtBLWaTZMN1BnLiDJYjQ2yEUeeZL5gWwPuwKn6tVs5q7Rcpn9GwJCfGGta3vF1P6UpxR6rTKNAk",
  "key6": "3iEh49ydoAwUaMX4RZrzGUbqf5P41WPKWjq4rsRp77Xq3Fwjmne8UWUsrAJvbZdAWH7bQ2XfhTDASc1GCJFUwd87",
  "key7": "v18Pouag2j624wb5F3J4ojb4HyEuHLexPFvz8YpddZB6gtKLsWZMH336wqczZHa2VNrueiLPddwT75CgEp8YooM",
  "key8": "23p4whrw6kr7UxdGs2eH3SjKh5UsLJUn5kAHYSbknZ4Sfds9an3VQng7NQQbfv68GVdG694ZAZsgZnDi5UKhYL9A",
  "key9": "5q5csSQ1GMTEJNcnothw3jpmF9e1anMEb3d4ctBUVLNwxwb1YTBSkBx7qvsTw8bwp6Y9E8XRN8NuRg2TRVwubGq",
  "key10": "5kDp2je3wWjqSucF4DPxJi9jUN7NaMhsXEacY7sYYzHVrzQjmUYzAQq9r1WgGowKrqscnW37ZVHoZazXH218Dk55",
  "key11": "4EtE9pTSsmTkTkDLPnPrq4Fkz9prB2KGaS4LvnrLCv3oPUoMHwVTDvffvCXudViZ19VjVLWXyVMTuY8W95p7sVpp",
  "key12": "VrATQUXRjjSJVF6aijwnUrEo12eDxnomxU5XvGgkfn8y6YTztwFZ7WtH4MiLujwPRvceCiJBWCuK3KUmTeFXcWg",
  "key13": "5XxZuwx5wMjLPfAjmMN7XczCt6kAooYTFpMkLKuVDUbHi1sb7N4i7v7thT2SwycdbkvnD72Eg1FMfMt2poQpGRY2",
  "key14": "4XNvYFxMZ47YbT8woAsD8jyaw91G2P9kLpKjSkdkZkdb4YRNj8a3PhVrRYTSLX1NuCsSbsN3Stz96BqjWe3JA78N",
  "key15": "5yudrPgC8oUHqyyrtrZLXh2CZ83rpawuXfCSvDUuCnQkowP3zTWs7otbtEGxeoqVi1tC81Qp5EjXPPtvYo1NkXhM",
  "key16": "8AmM9aAra4uQcrncU9YCafqKTBtwECV58iniKiJdRBgaHNQWeEseXzXVmSEjHMwrZmSRsg8m3dY4LzETXRFsTL4",
  "key17": "5WHDEbhQq4csBWkKFJLNxKdrAxxFDFSkMhV5AzoB7Z2sNqWrrtZ68YKPH8iQPDJj728T5qkF2hxq4u2rQSDsVrSk",
  "key18": "2gAdEoM8BAHCyasnqJAxiZRMSYxWDYriQuQGgYq9VyjSFoNtJERaXfT7vvXQUEdN4e5vVUBsUPaFGK9hGNvAHzV4",
  "key19": "5DnNU5aCbjb3zemm23yZzD8Bhrq4jys9iPZXFMGFFZHcAgX9ah1KF834rp4AewuJUgTBobzL5ktn6LxnnbzT7Gvf",
  "key20": "5tsvF7jDjiavAD9TheKpZkLnFVu7mBQ9XNTVyutNKHFzK66WX9s3JAaSyGSC6wnM9m5cG3W7mYy6cen1SRdyBcGa",
  "key21": "23HssBW3HY6upsYy6oHyyfLDBtWKPanodRMqiSvHfhiNVUTYSD7ra8QGgVXzypiQ1T8tSJ52dxetQHxMPtC4A4Sq",
  "key22": "3EHskWjGYgWsgtRLhnFJoxnTKahW8jTrLf1zgsAGVY1yNK1VCedCZ6UkkSf8paDUHhTL88QT6d4K4uK7N1wMpgNP",
  "key23": "43soFCadEgbjoCcsSTonWUfjvJGXmM43Km1y91HVLBsC8rGmL1hMe4pX13vT1ADbYjNWkMZpkShfC6J8xqcydvrA",
  "key24": "3QMN3NfmbYq7XKsDixBRtGw7yogX16uEo2g8TjQyyaEKX8UUrJAbX8KM2M4tdHAmc6myiQCn1n6nfoiXUPAU4cMT",
  "key25": "MzeotiepDRd3u7ah7dxuMyjuRPgDnZszTbJ6MCjvZMWDoQcTdyQKGs31BzwaJSB3yNW3TX2M9C4EnsURYgGSKiY",
  "key26": "2pAtgvKo7K9kgSiC6Jo1azQqe2pq42iLyGN3bzPy8iHQ5mCVtMtmVEntXdVpjTcs71MzJrpUEbKY1PZ32q9o4gda",
  "key27": "5kG189muVY1oJ5cRFgUs8ujk5h4vc2c6npnkUqSRc4XXNz3bSj6Mn6KfKqh26PTY6MGFZGkjqNp4JocF3pFxaHyN",
  "key28": "dCUbbGePYGkh7T4tkXxuBRTe3rFfoHej9kgWiwuo5gY6fWGJrqZQKmpEYm7W1hyN6h6Jf4sRWTinjJnvktCJcKY"
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
