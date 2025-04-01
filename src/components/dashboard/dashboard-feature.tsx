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
    "5Q9VUK17yWvtSxhn8UvXtcHjckVKsS8NmNgsDkrP3D6Q8njhCVuGYFd9JCqmZ7XWP9zAX4pVwrKcz48mAE4ze1sh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PnA66G29BBf7yEmMWzoBWoNiNpY412wu6G26emMrCrn79ura9a2RoeN4V1mxeFeiFqmEAEm91QvvugEow8QdcGa",
  "key1": "52bMEQvDJWsjqX53Us74qTPwrWhQAKLJZEVfCvXituqfSUgWnkUHbZPP6kWbg2XASVQvnqzvTrTTDmzjTqbZjTmK",
  "key2": "5U4X2tzbGAypnDy6qW6mVha36EPgSVC8v6M1zEcFS5Y4ceudvn1TxVpXcZvWZttmBaW79JNiTSLg7GAc3ba94KEs",
  "key3": "3tWxchzi9ih6h7FXFxJWHYU7JCRjs2uiFxH4f8uqmFde6nSdjhtK73o4k3JJ94w3ah51Ev5pvpYZdgH1tMw3tquT",
  "key4": "4pKKvgmaMypCwgb6iWR6ohheX85z9ukmjt38WFKfioEMY8mi873fddzQY2wBW4QoQ7mAJrokhSJ5mczHdmfq71Xf",
  "key5": "47DBZFWbfaV4dayEPtSBJQPnFFqBM12wsBgXjd85wsL5Sr8XDw6oojBQmiMM4NxxFVSxzfrzXRFYmXJ9rofNZFdq",
  "key6": "39WxncSfKmGLBT86SNXHSt6hqTz8kNVE5jcv399i3Ls9gKEziQcL1KsVBv7znucv6Lo5WTueD2NuQjFutKVQVN3q",
  "key7": "5Xb6V1QuGJpsj2GX8cbiYAcvPADAYTZ8UCU41A25JEH5f1k19VoxCqfyiiFFnqYPvuYASEvSsdHHePcGBZWruGEg",
  "key8": "2qPVAMd1R33bBLCEHSRarghe1cKSLtzAPmTn2aA5q4pdkA4x31BU3GtE5y2P15tTTqLwHYbMxWr5wyzMxG4tNaU",
  "key9": "5VfuMykr1WwxXqghkoiyBcSNmmdKthFB6QScuscyxQSWbk35TNoPAsXbHgbVSjCsPu1UxUwdHsHJNW9TKAApuWkf",
  "key10": "aBPXrSCzKu81g6KmLp469v4M2zYsUBpkNYYVhsSkdWsUBp5xEuLH6zHdFo5b9fNfkXGKBybc4Q9GRQNRJbXSvct",
  "key11": "676uWpFaEz8f7sJCZPszfQD8Eh94i3YezZKbiQuSBtNS6tLXB5rdczgSHHToLXC5PwovBVLhSFuoq6MPhvTcxgL7",
  "key12": "3g5ZcMj6XJ1xUD8rhgBspTXn7s4yZ4NYoaqRhD4Xee12FnnFKw6rviFHLMzoYgwkJAQGRyYeAND7csawDKeGrTxv",
  "key13": "3jbJBJ533br3pJ7FZHWmtUQ2BhSrYVz7TwkA1WaWsSy9Xyz82k3CkwQP4CcK8G3QoLcKM21qnZRdQuCEsvjR8og9",
  "key14": "2s3iBkHc3h86GVHqGZFL2uvhRuZFoAnXwmYKWPkGGM4L41CWqUc2tgP5Fn3nY5ZUKnTFrZusXmB6fg8baW8Nf4E2",
  "key15": "4nMsEovu4E54beWz4FptpPjgHzNPgcNxS6RieqakkX3DeExY9cW6HM7xWWxsHbSnaoTzLi7RP5EPLbJLtYxbuba7",
  "key16": "3Y5nTE8ab4vYyqro7xkcHMuiDH8WGHENA4AmJUKUPuxDTqi39qRQFVcbCuTetWQPeuCM9Hmpuq6qZHUYNfx2i3rS",
  "key17": "5RT9f5UEggsZrA57nuUoDRwrvwVu1i55zefhWjeggiwgZmUDjF6UzLDP2hqn6q3JXPqR5rXZy4Co2B76pvSPFF3W",
  "key18": "WtztxdxN6mww18KjKCx6u9Qgi7XHCP2ji4orWC6vBKoggVcYyS3CxPRnfvT8FY11cWUVWWPTkKWVZbUKqRHyBp9",
  "key19": "2qgFZm6nvHMgN1ft3HBVzL17jSi4r1pzNGP8WRXvQb4gqd6qjGhCPHQryeyHrmwuWFtQi4jJEKu6sanesDhMGP1E",
  "key20": "2HxM7CgwUuYWEcUPFtUeuSjwMcbJw2pZv9s1S8a4kJEbvXcZTgKrso2ukCcP2JLLYwhUuBHPtqbmqtXS4WvTp5e6",
  "key21": "5A9NKVAbv569xaSmTUyP1vDCEgDkZSkD1BRK3Rt2Ctmhjo8KVW5myHdZ3iq2q5AwHzNvzTLuoLLj1wA9oPSCPmWB",
  "key22": "5ZRc5vGYuZDQz4nwxbTKnEttGPzJxrRbdKgXCi84HDFYFwZ6s9h3WejdoW58ZBUM4JF6PVjGfAYqzfnzQDi2cDRX",
  "key23": "4ptMspC4vzSB2gn56L1hZ8vs91NhXnjiQGmSDrrJpw9sWxAygZnYmtaDcSaK7m6hja5dR7oys9FYQKXHsXkK4kPC",
  "key24": "22LmTryMBU4Uj7YxK52hPyEPzdFG3t6QzERre7vVpVK7QTJecmoh4QMtzVmegc19GiVCpgrzCi5ooA8NaoZYcPEg",
  "key25": "5NMvUd7qnAyQCG9gtguTiEry52FYQgyZWcn3Rrtdb5NUukqU2zygDPtSVZACJgu4svfBkdboFLiDLe4C5EKfqhhd",
  "key26": "3wAQ4ni87bDPfdXFMKZMqEVQtjMY1AJmq35cd1oyd3dbByMWgceP325SobYHZ65SQoLV3sFcn9ydTCBke4NuzETo",
  "key27": "3ekngESDmyefNhzJPD5vrjvUgBgfSUAZPgMaiHwCmyHghFEGC7B8kcUMrdU17h5dqaEwRCHqgyDurZ2WszMaC48X",
  "key28": "3uE3ujz2HVxPgrjAquuPdrnPZHfcQbvWzbGvJEE1L7eLyTHJTsFTAS7hjRzYYh3FLv9fBaCfMaC4PyHfnac1X6jJ"
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
