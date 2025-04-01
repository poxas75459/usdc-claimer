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
    "2qQGc1STQd39HQG12yEczXMUa7GPiJ1xwaitb95GiukJYce1aKGWKozyehifumdPPKorZdbDmMhZj2eRnhN4xbot"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4USP4YUNkX3juvbSw7nsm2CWJJaiitgN8pFrDc5zEsPF58F3pRkkB9rhhNuvQZdxxnazjj17iqe7ybqPF1bq38n1",
  "key1": "4dKXj1HttS6ftAoHWLnKxgxxdSUw3KMLsjvhZjZyMppPyPkTyRp8wBXjNb726bQQJ2UU7UvJkAxFRTYheJM2N4uy",
  "key2": "2rWE3kNgXcHW395rwtqHQnwwbKTNdoz9F11TTWzvZDVgW8yaMjD9xuBfiS1Am1qpZwnSkqKGwYsB4c597NKLUUgg",
  "key3": "H8oxtvxLuwKLjHSmSnkEHANyVcmCYz3WsVQJaGWWzxUrVYRx8WGeWu9M1a3CS2d5JpDbAiq594nxQGUbt1Gum2u",
  "key4": "5QSvozRrYRmRhqvu9qzUKkg1XfmFtWhSEjNZyYB87ddXkbWiKNimQAQ3CPSGyz3wmnx3abpmDThdZHCvaR5BNpDr",
  "key5": "3ayvbRD9yiybCTUve7wxcz2g7t1C2nj1dVBfffAnjVmpEpb9XhReJvMexEMRpKpzEeJ7NJkj1twbJc8AqBivuru1",
  "key6": "5nvBGnXhHwqwZeMviWXeCTESJhfF6s2NAKtMEy4kEQu9RDk5zYAcwHAMvp653EXSp8E9Gps6kBnew7jM5PaBCSAz",
  "key7": "5mZJoVQd6sbgtvbyPH6tgeKMfwHVm5vZcfGirsvXFnPpabQsc7FETUh5LPxjoo3RyMTm5NdqbiKRfkpc6NivfjJd",
  "key8": "2PMDZDdpC61BV44QBgP7ibP65t64EbgUoQt3KQih4dmexRVGesKZAuCa1s8quLrStQbzaK6pyeMiPnomdesrUgGk",
  "key9": "63zSDcUNRoLRk5h5dLyPbNzjL2NKeQDSswXqpLUVBqzs4zxA4cbQ1oHRvngNXbkYaYwshBNgGR6Z1hTvrwpLuoJm",
  "key10": "4hyrcyCHBVHKBEuCkjLKBMzcRCzvPaTmt3A1MSrj1Z9qEdeiRFiWpbsXD5yN7nqfSSF7ENvvK47Rves4UkPxNnHn",
  "key11": "Dv6KqEkYNkJEtZ33xUJiknvjMc1Rp7VM1m3b5o91AFzVsvNKe1c96Gu16KiJjhyouE2BTF9yuWYCVdbJrhBPNEv",
  "key12": "42HWgmoGLSUr8jVeMd3EyCoyLHCfVwxXC6dDANfE8rLQSX7QpaZSuE37uGb2ox8vYy2JT15Mj8orT3FeJnvjQ7ce",
  "key13": "2fyXGsZBekhkUjimY3EiKna678tu1VnDbC9gXf42GgYDx7RhucjzyjdAqtY1bUYUQVsR5oTsa8xjZXzeDpa4r4Q9",
  "key14": "3v7uXkePyzBHzFAhA4WdC7gBSxw82aYShZjZMdynMeQkYwzCye14Lntw2ARbPoqnpvJx4FtpmoT57BPsqYoY9wJB",
  "key15": "2A7FTYbYY2tx1DBZJrtQw1rAoLU5pJswHZcMygZUr5hTYYnq7Jq8HVP5MBxDibdC1XXh5qBsKQvUvjUXTivhSxL1",
  "key16": "55KtcF8DShmZNKmYrnxBjaKtmYdHDttZ8ZePPcuaDAUx5eecTDi65qP5toVDSJAhtR7CFSYVuffiNMaFrLzvhuLr",
  "key17": "2CgZn9g9b3GPnMdNQSxq1Z1M5YWihzM88DBLge9XkPjaRWvtideynDRp7grAHUDoS8KELqRBhTAdnSzJTcBijW89",
  "key18": "4FdrkxgynX2eN1F3nwJ3wtAzcWrF4QTtKszH6vXgAAYCqoQUWYRKbK6m2xbBBtzKe3qquArQPpBRRjtgjbyXE8ZA",
  "key19": "3s7c7i6DWeNhUkymPpVpehRiZ516o9PUA8SvnVbkYFqVX4LKnLfTgaspWMzis9fHvpCNpcaKmm4zJbFQN9tbRWS9",
  "key20": "5MRqpJJcnHbYqmHbv7W1rRo33mGSHTjq6eStvYpD1dvdezBXj9jzTMtdr3fCbbsUFDGDb9rJig8rWwV3w8XPRRwd",
  "key21": "3fJeBnxbH1VJcQViytyAekiZwZ4DrNFahU3bmTxbTnRa7h8bUNEGUNikEfCfGQSmLb5ZasuYKD3FN5CXcEASWfka",
  "key22": "5VQTWcmaVNptyt1RMj8BdssRw1aesrfH4T3bt2xSHurRUJqxCr5UTu6sjfuVy1XxDxXktTcGHp7M6UJSRVWAFZ7h",
  "key23": "5BbFiL48T46N3DP7QEqtmSSmhhYyxHQKRoXwpaYdjfoxSz59PC7tM4V2enHcGnCJmBbzmiwNZmpyAdtozLLxpKQH",
  "key24": "46txwz4BVKtNFzh8dyKFWKtpEgycNqEvFEqYNWE9eLHdDdgPsCg5NukVu2CWC7hSgDmWFbxdLeik3XjjZ6sa6jVn",
  "key25": "q9XQaCpZixGwzFNTR3GanA7pWS9biEWTwXtPUUM8Cnjb4m4zQUvomETfQtMLDVcyYCbXcqXftWs9qa1z6pNj8Q7",
  "key26": "EosqbmFDWTWzZJogNpbdEftRkkkogRZQAGt7ipKJcjJxNNvmnrDrMLDbcSKXQPF9syniAYMqA6VNfL61DWtJxUg",
  "key27": "2hcZgkhGdLdeEQBhfVLbKodF1jEnqieiyKyUtfBmRMZU9FVF2eXRaFpWScTsHmxDXdU7nCbatFe9Ae65EfNTRnEv",
  "key28": "2szLerW8zmScGEcWRrKifSRK77pv55QTxh6JyPW7nGAPh6srMPsfufp4HYWakoZEzaXjp1haUNcuGpCYGwTBRBwM",
  "key29": "4WT8uEtktTntRhmUAS4FAJ7W1xYgxNfhxTf6JswtTTKhW1TqLUYcuKPf3j87GRXho5HKmmJA2Yt6eRZJWoZ2Aggy",
  "key30": "3NeErUSgwZ29Dub7LCz8RrzSTb6H8WHiA4294rPiW5SF2HfLhCFkey7DJGCwpxo8bkRu2ymzm44kPfyoxMWQnxEw",
  "key31": "4kVodeSMHShEEUdGzhCsJGq2JvbX2WgYDmiAhueRnAh4Vbq5CTDwxwHBrSq7qhSeUsW2FQAsAptT4BrHJnWuUX4d",
  "key32": "2f1Shh1oSnhR9GTFM5AAYJ2bXKxWWF776Wm3r1TWrVLaUi2Q79WVLvDdyyCS6VrTUNxXWNDVFcfkett3RubYLbYy"
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
