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
    "5fgfQcryziFL9UZNkHLVqscb6NRqcd4trtEvPTXJ6uQhUhL1rB4qnA54QACt116nKeEUJkJCREv2XdKXRhHzr8Br"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YzcMi6pG3nLGmHSKKd2bKGnakmmADSdoBNYmWuUUUk49ijmymsuxvrSdjr792oovdLYQhyhpGVraoseaskWPGsx",
  "key1": "xcYcNxBoWZEssW16z4YnrdV8sK3x9fSPcjzo7jjrXqdx4jgrJYRVsQGUZKxeaRmESuyDiMccpCkmjRRSEt84r8N",
  "key2": "VJ37WtPt42Yp8p1Hef9A7A5cM9i9VjmZibxsTDB7g8eEMBHMiUJhQVJqGyJ8z99J7XMFGKjz2beibLkoC95JihV",
  "key3": "2pMzahqpZRckWzgu88aMuA18DzFaPqv9zWCUGv8cMDvwggLzqwHSDdT4CzhWGv6w5nSxTtsPU1qethy1aCZdggzd",
  "key4": "3rX9Nnc5GhQVcwVfP9coufzZ1J7uj8UJ3KLnkPFb2QTNAoyG9Sbsjp7u5J85ukKJCzqH6LiZfePUUMdASeuGE9fN",
  "key5": "2EXfL5FLwc6bJm2G2q8LqEGHvFpMytwCwgqZUHpv6SoqVshnEUf8TEN3FSD5Y4ihioT1fdyW9ZVxmHyyUiMxscnm",
  "key6": "2TQcXY4mrA1FZ6NhVknKS8pNKedcCvB67Gbwe8KDLnrrh2KfoMMi8LmDjsxi365dTGkvToAVJfhJT7RMUcQkuvxV",
  "key7": "5pJFkg3e2qdcsHuLAPWNGgCzjC5gYUKHXo8omHFoGVhkg3yfExPnKrCrUTfFMjgrAqKzRjkgk5gKxX6hHHn2nXDY",
  "key8": "4mGDqRoM4USqW2i8KbP5kq5Neu3cSuPpJxgSirmjWk42auFbkNcDDsLtyjifNRiQfsmVQL4GnRFUCdGG8foxUMeP",
  "key9": "44mLQAS18m7ZWgzCiN5RwxZ8LRMj2L8ffx425ddSbR8nsLmcDDn6tFzYMKYMFZq19oMsfxFVY5ZDvMYSBvjgYGF",
  "key10": "46PQHuCGattvjFoisjmdQnKSUD2uRSWVgCv1kDRJrX4NnZqyYCbX49u4JYqnYUwPZLDeP1XdvcQz6zE9CsarTvJY",
  "key11": "2XWaXopwoewnUQaE97pkrkH5rL46R5RLxK9B1u6SauevK1rEnqkudJfk53mdfSmnaFirmf5xEh9Smjt9nCmma1vw",
  "key12": "3fDZGPXUN92Pj4Gk36z7m3urXY6mUTywVAEiKo18D8WdgMK7nB9SS1dPjWBLUZdruGFs4zinDiB4VxR5szBP5fkt",
  "key13": "h4HeqheKRP9mbgn3BdMXdNAQLofVso6UuuShyap2eNdGJjYGC2m6bSV465saVvHn5ywRk4QCM1HnW6p1ZWqttQF",
  "key14": "5HdxMBprSnpkfYF2HM9DtRqXpooF2vAotfwBBdSbUkJZCw8KZQkVh89HCfukSxGT9p8q6x7vLcYuxuJYuvzzoMqn",
  "key15": "2uyEmmveGn38p5GtNvvCnxeNERc39qVaAqdEEtXmn5tQi7fgN6UT4iLos2YDEXhw6kDcrDEwPBNzo2iALx4ZEe8y",
  "key16": "4tFM2EfJgAvWPsigzuBm5kyqahRrwTmKqstgrTX8zB5Bg9oe3kj9W21b3T43J8oxDhbG3cGaJHXu33xDreXaCWTG",
  "key17": "UD6zdVthr7teT7xPLByR99eis57rZcaSFwNDxzvxvNFyciempVAYzmv3aQW3sNA8GrY7KHuD2YiPHPaDZ6aQ92n",
  "key18": "4JV2sCN2hTD2dnDSFbusPVqXECdgtVZ27m8iPAqUNEe3mnsmZgWS8yGgZJ3tp8rY1NLsTLUVj774jFjyU2tMDa93",
  "key19": "4df6CZQvVABhwQi23XoVFUWnBJ4oYfkYR3B6XaaTgKxfFcE3NqMJbjL6MTxNwXqCCwpYdhbnnesTxcYTuN8unJTd",
  "key20": "3Pd28Us9vwGinQYugGG4BSyKjhL7L4c9NZtgUT8SimYK2P3BBWXntCbW6YuWUnR2mTUwbhj48krMgu5TWLnwFhoP",
  "key21": "2se5h5xxTkrVfTv7QYAoroZNDZ4AHpRGmSSVG5aFNBAw1kXwVXhTttouiyk7r7f9RuZcb3mcs5Wahoacddej1uE4",
  "key22": "QKHpryt5Yk4C3FcqTb7NuSxCpeCJwM39StNjLAwGzMQ4eSVQVy3N67TY2csuxXRGyFt3Ag1PycgfQWpfUWikhsF",
  "key23": "3pXprh6FwTiwwNw2sUA1ijjP2KT5wBY8HyCRYi8zr3ncg7XF72u5Rxgh6hU8wQSmcsjXWYwmLtKHijRJphq4wgkk",
  "key24": "47KALQQet2uXsqB7v19fbDXEeQFn2fwbiSNUj5mg24XH7zx2TzTyjGAj8hiBZpH8ZLFSqChJ8ATpLz4equYCVZjV"
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
