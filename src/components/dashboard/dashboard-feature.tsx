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
    "5w9CEhg9RtWzmgi8FJjeQK5xF7tcBF4sAqY4fyBjtMYmLhxphcycgLJKr6MwjpYKast23C8ujysWWdQZRnZ8U1uj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pDBubqgqvSuUCPkBZVwbakpVvVGr9DPtE1yfY3g1je7zSzc6NYvfbNJSF6LTPNfngGBB1hBLCphufXRdSqvnvCm",
  "key1": "4MbKaib4HNfztvpQLgzTGvN1kERtqQbvPXWFxBKNNaTpchu39s7ZFuUPBe5hoSDs7Z3ZhjKXZMcrcbkxotNeZiPn",
  "key2": "2bYG9JHadbrh2n1LLaQ3qXBUvQUkALRF2YuUqPyMe99nSXC4BUGfpxbquH9uMEEE98Gn3oY9wYtqhnJXvQDzXLUZ",
  "key3": "2fv4XBdNpg3oUyvryUDXRyMieZEt4Cagsiit17AUfoaWHDkxgmYZyAFHhX5dmdzrYxZgMSNPLL5hMQWxgKfKRXEe",
  "key4": "KS3Qwjo7AKMmrc3TnNbDy8cAUDqUaPvk6hHhVwoexYSA2Zr3U35JjuWsrK2aWPGxQ2T3eZTUqVQMpwPCzH8FtxS",
  "key5": "Ty95QjbW8LypE6JfNRaGWZE2P2JactJfQAXuzmj82hdPn8GpjpMDBGRRLC4tgTGWP6MrPhJVhescZwrNosTYmjb",
  "key6": "3FWmg7pecvV5dMDLMz6UcxQkMweuNn6yfPR78kKw7jfQYgYdWSC6HjxkfhUm7sAEfmZKkQwE2p7QS3o74C8aPSnp",
  "key7": "5tRozMMPpT9PSktdTFNLtnCyiEodbMwA81DMJzWi8UQmLLzYQPhzYYYN3jGsDXqt1MF1WMkek3XkQExHkhqQk3yh",
  "key8": "fBxQtKFDqgr8dXTxRFj2C93QF1AWvxXKE9QsP25xWi5hVRA2nodBDVeSTWfiH4iVUHstK16JQ7sTwiHkV4PXm9V",
  "key9": "4N4xnsfttRBSymAKDJ1AUWHAJc1EhBNPvvCqwerWFiNTzBJEz4GQWYAmjXizbuiGspLUhATKrx9pvNi2KefjjPsn",
  "key10": "6ZMPxYAeMR3GB2WWCjCc8b7F3dyfznKVZbMLyc49Di3mSGK39ynKmwzEvBM2DxvQBoBv3A1yBnjpxs1LrchTXyF",
  "key11": "2unuVyUYWHeySSJPn9Wo99Q8M9dKiwPqdLXm2UDF2z2xPwbZNdHiu8Bb5aK1UAZmjveTYW97iytcNaL3xZLfCU28",
  "key12": "2b1jV4DK5JRG8pdt4BVvFT9pBesBrkKUnYpVQ5zusa9PetnGpgquR88NRMBusPRw1yLCwHvHHHbeL8nBsVF2Ha2q",
  "key13": "5qxgqvMixv7wufhw1yTFwLWGUVcZWQKu69X3mZ7eGTGmhwbHsgs6PYNP2JJjdLAgtjMRYxVv9igUMVhBttSLUnsn",
  "key14": "2xKH627Qe3rfsrZA9eBc89DMfDiBGFXyhLKpXc31Y2mR1JyAdSdPEfv1vxn7iHRfDaVL7er148BWFroQjjxJfxhC",
  "key15": "6229WN8nypdYcL4NwfzkcL5PqHAMnoMV2dgvwLfUVvQiAWX2ZYD4ZnJbYyutouiiUZcQd3sQC14kkPLzqvaCrwh4",
  "key16": "2uHds7oWtTZAoMFbW7on5beaUoMfX6UzPuaSDdpWinkQaf8C1g35BdgzdWe5vB2p9zcSVdbRE22UAUfiMwDDoQVd",
  "key17": "3PVNuVQNgrAEqV2UjcfpxVtVC9v8wYQJZoEzXVDCkHXWQjxBQNbnx756QYtAHKLBa6wVG3tVcJU6tB8VTjjm32Ss",
  "key18": "5pu8yofNUSZSCb226PSGsccKFDmRe4Spr3MmS92MUjQaVM69ubgLVSq3kzhumgdgBRjt7WMZhjhrwbZ9q9R1zxMv",
  "key19": "2kHdY3C6ZMrEJ6w9jf8Jd8NQJUKvmMYAkz7mZpt7f4urC5v4S9R2HjBKUpTz5Pepj6xbE8J82tCoqXYrGZdGXnbq",
  "key20": "632XNqzCQyf5w9y4oyXvSqJEQxWPWm1SoezdV6VFTKVXLPDyh2ttSqHzm1YMLLW5jUe2Yvef163pg7Vjbd92VjJk",
  "key21": "NFia5WeAvWtGABwbENoqVbyvBB66zUSgkGYAUF2cqTf8nAzR2dRZrMj2tyGo8r62Yk5ri8fBNisDHSxWVU9SmrZ",
  "key22": "2rQE8ZHLnwUoT54BWxrh5uupYMYdhJKtXNouRLPvxJXNs8yH8JaZ5WBTM3kqBCYhk4b3uVM6qwnEFBoEh1s9RMGs",
  "key23": "2578CrzmFjPgfnJB2UTpRiP7S2rB2452zoERmF2CcFheyLUcDDQyDm5ifgSgWQ4sL1x6M65eP3Lvqxp99EtkVYCM",
  "key24": "5avuRNhETecP3LrjBYJdTYcaJbTnbuvKneESFvKq1DLCRynAgzPG4NWWA3Mmx6bMLq8QsiZWpLT2j4c4CHhuBkyU"
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
