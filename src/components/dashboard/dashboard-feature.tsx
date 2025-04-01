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
    "3xE7shYxT7aYpgCRVGCTnapHPtBmsejW5Ld5i6MsDzVPGBhhAMdiF7UCoEBZRME31PTEfCngHzCv381EymRTHmUg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Nk9ojjAa86otCjXdC8j5qpP5TzCeV9vHVuJL7kJZRBY9XThmTJSxmuT3o22ZycS92Yo5gfD32p7C1DpxTRPbCba",
  "key1": "5msrVoU5WnxPaDhYwBSvG11tugTPvttrNjBkUGboFaFTfuTVp7ukqFKUyP84Kk9z9QGaxti1nMVysv9N2Hz6TGjC",
  "key2": "2swZ66VLy5jXqn5CVM83YEDYszgvXijbFjqoGGTGE6D4b4r65ZpKzfoota2MdXoSnutibyzPwRFQG1PLB5PHJNVq",
  "key3": "2c5eASHZpNwpNYhsSoZcA5UVK9RYAbqJ3Qf9DMMCj5JJiYYy5uFMC9eMwoQ1VZDLCHpWN1ixS1U8cSNjcGfhHuE7",
  "key4": "61CyvgBmUfs9RVBfeuUY9JD4DwxjD2vvLPDnqRtd8DeNwqmh14iKRoehgGCCrp5TTwZDhbHpsFaAZ4jXvwXNou8q",
  "key5": "2x3193bf2SKQZYzCtgpwKzjzqwPxywLDoY7QfDvTNkHGmckEpQQ2nHbEaBVB1fAviSXXbNZoNUeT16CoDTjsVSgK",
  "key6": "zWZoraUkHKwV3WEum7QiHcYz5dbyADBA5tX6n36W83EfL3CVaTCBM5QLMerZBLdJshYAdnTPqS9YFtJ9Mf1B3q9",
  "key7": "3qfUWjijXKFvRcAefj1orDkKGNJWZeBgSBWBeZ3gkfvuzr4BSYsZvXMMV51dikJdJpWGTwXRXy43z3REdoNSUUdq",
  "key8": "ZNLMcMcxpcGCgTXVw1hsMRetgZnzYUwrLgvfjXMXTdWsqWLWHkPSDDxmRnLC2uk5tu4hC4Penyir1a8UqyGK3Pv",
  "key9": "5qnS9PPYuTVsgkiWjaHVuUkYatmntixcQGCkJH3uuMP7TxU3w2yatC9YoJ1RDFWF8eUVHXDRLWCxAY56FbDW19Py",
  "key10": "4KGMNYtru3spcH36vN4F4LvETnu8j37cA6VrLDu2igT1chmqz3cnLiqqqeFgG3KfYJePa2iRzr78BZQ3NzqtFw4o",
  "key11": "5AddAxbnnYsTvr6hAQhiqoxTRW62wXphYBiciynbCvfT7TPMeXB9NbEXS4hNwm4SoCCF28BmdRbpM1kGynAWgqDn",
  "key12": "67jffmxMfwca594Jq5wWhRBeyCUYwtn3v8YWHodZanLLjwdZ9RftcYSRzjcskTRoXpJzWUnRUqrdGBEskeejTAv8",
  "key13": "4xdDrcAHUiL96mVWKnZgfwhC7RPRbbMpvMMEyFEphpQNjhuxTui149CnpEg5SBxKDKUazTfEtRPoTNv1g8GqgRRy",
  "key14": "2p3DHe8Ey4MXwAd7kBV87HvVkZSzbivw3dWjxj5SUM8baZNix4XuCUnZGCwCcggoDSDpBRNCBf6zMHFp58vdBhRW",
  "key15": "3ZFJXXVpayRu8kp9b9TGYPRkN7yF5QYCQWjFL8V6oxqVQPMbfsyZTZRugszWEWxxZ2xgXn3HJy63zSPLUtx4Xsop",
  "key16": "5K5dKchSuVMBJteZuG6Aa8MSgiLZQJi5aiTt81R328co3zjjPUDJRPxsAWV4eSwx49uyfZFekp73rALy1fv5z5FH",
  "key17": "zjnFTW7Djyo63MA3kBk2cGELwpwoicDFaKedD2uk9mwtrtgnszXTRqYKyD3w9vqWFd8kUHvvxeDb6iQeSRGxmu6",
  "key18": "4AuyH1aD7JsM1dQWeMjqww6veFEk5KXmqcVGkieDLtPz5k3qREo7KfPQnzawTcFPZQUjJNaLp6ioniWWdWKtRaUv",
  "key19": "2TGfkgfxKpgDrHu3Y58UnLfyrTDCHN4hW9bkmYRpcCBe2fo9grsdZf2UBmiZTjVfy1gm3qCgAvAohAxFss9TnmwC",
  "key20": "4qM1EgV2kkYrF4yDw1aggbdpRVXM4pUKwhT5Jn5KfP21cSZTftvnztQRqL7WuUgpVxhzmnwjNWTyPLTzzgjpCjwL",
  "key21": "5mt5RCRkL4M7dtS35P2jzLTcNagZo1qJoSsM8qVdGkFBwZxNxChBRcCMqW4oCKEsHYypTvHxkSTGfg8go3UB1tPV",
  "key22": "3zyyufyE1axPsD7qZvSEytEJbV9u5fCU84nfXtvG2ahSqqaACEMEd4iJ4R64EtuBEVyidSdLRDNyqzbDbrTudKp9",
  "key23": "38wbZ6xjHACBB6DKb4eEsZaCi7bHi2CHCJZjsCt7HqGsDTu5sSCc1QN15tDCio7Xd8WpvPg6jG5ib1rxEWUK93Th",
  "key24": "4zrBTGywhsgHkCjKwfPgV2g2ZFs1ZaQhTJcVhoDmfsWjnyq5eYYwKGspRsoDFJVwxT1Ec4JSwJQFgpbRmqSSrwk5"
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
