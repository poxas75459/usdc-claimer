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
    "67rpTmdTyLH3tvPcR89wsz6z6paYHLhdGKcbgTmoVEHdcdSduShQM8WqbzSQF1RbfV1xZ1ASxZR5vBoqBqQfie22"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QvxPKmcLQTJCb3v4zcK4Uv4qozKZ8H4XSey4jNF61ohSJBWFVcs82i4CrU9axw3jk4d96H7hsNeygBHikqz2KxD",
  "key1": "4zx8gw6TLLSXoauD8w7Rg2i8hRU4SANUnsc9vurBfnFPoGPyKDUDrDhJHrT3t8kFngGDoFoczcMJE3Tgg9ihb9FH",
  "key2": "d7uW6WSQPvFgbifVY43CP33UuAxYNdeQ5NNcGY84xXojETi6FoRAvb73HXdq5ENACJeAdk4cNzHtd5axgbtZrvR",
  "key3": "39BbbKdXQt6zMsz8tXeLnGgEcfjhdqiaQmnWVp8D34zqgtGPgfHYpa5dtzMwN6arYwLKHKDSms1YAUohuxKUZPze",
  "key4": "3RWSbENbvQadvXFvNr7TQe8gozmS2uDux3HND1KvxH99BMTGS3SvMiLnt4RGcWMxNKu4wWQtJT2GLXncB3a2XECF",
  "key5": "4mrnJBfgt88Zt3KC3gEU3DzN2uZY6Tmjr6gqzuvJDUvcGLwBCuoqwbZtm2ys9yoRvigsfbWztUiKnb3yrntkJ1kN",
  "key6": "3xJQjmofg2xhbZBuw1xQhdHksopzwHquawH9vJ99cSfuvYt3KFdZ9kAXPyJ3GJfTKfMyKVEDq3e5veP3uU7RCtSb",
  "key7": "4Axvkf7BZ2hTYeKwf5o5Zh6SVFnRc5ub4QLBLN786TVZzTnzAj5Aq4p4W5GTnCTHfExfy656B2titc9ZEbCgAVGr",
  "key8": "2e5qqnmNHbPH6oBiLifDTPSd5vCqxDwb7EMAAXhw61mAVvtpEDZPJXBJLxAAc4MH4CEgmpYynjz8n4bFB8hpfQFy",
  "key9": "2DhuhLCygSDUn7Tto3fBadd5BSg6LeHj4T4PBZwQyuuKMv6diS5SRYwrvxnn45ywTRJbmi7Chi8QHFuW4N6qYNei",
  "key10": "3tbafnb6Dq7sd27ax2cpn9L8os3SgXT6BLaHQu4yP9ezssoZcjLpBu7fhUe2JDNFwoZ5MX6gTneohtrpsSJ1UGe3",
  "key11": "YgJeqcscKEwchT9RBjiGH94w8mxpwtwFPu2vbe9udBf8WJJfYfBZ6j2nqPiWaQWceDB1cnY2JtDD3LYpf5GroMG",
  "key12": "iFKL8G9FYo3vF88B1dNjrUQQ3x8gUevYPPdQGJbHCT9c3xFLDdSZr5CrmarKCSUPKvBS3659krR1pm3oaKq5MfA",
  "key13": "xLGHBr3cfRkQ3r3TzHZsynRvjAjXZt7w8fsAMRUXYWsB1o6JVydSgjaoxWiWNp6K7SQ1G2DnVj5ox2YiHqpWcuw",
  "key14": "2jqB7cqooJZ11bCSLR5ZJq6LEriwVNZNx5BVtDTyGteDccRvKb9SheiyhwKFPrrg8GocFzbEEZzFvsuKGewB7KnG",
  "key15": "2BCixE97oSeUMAVN6DXV48BoV6S9k8bqaZTuKGBAHeUWAgK3UU1c7CrRW6Kx9Afb8EBtrtDqaDvoTvSn5BFK3vR6",
  "key16": "5yrgkBcaCPu8G6iC9prqySx5X7fuVirDKJ7VqZXEt94ux1vn4Z3VSN9zoJ8W3ZMqLmn5AkqDDots3e7CpgK8Uof3",
  "key17": "TwvB7kZh2awkC2UWpN8hHCX189LZKsEaH22gFmfM9xjfdPCVmvuZ4dtHx7tvvfVZ6Y71kRWkJqKsUDoK9gSh5mn",
  "key18": "pQJ8e2bqAMdwFjec8d9frW3bddM74qt3Uok2fDmuGSZ51Jt3Q6dCnskMRZHNY9M7kS37sAmTXavsWLU1ohixRyH",
  "key19": "5RPgTUuks1TE1Cj4WMxvksPD7Mzcqqnwrj9Qx9Hiw8bsPFAr4LsExczM54J3VXrEGeME4iJXs8XaogSztBjmSC4u",
  "key20": "LwWrEeuH9G3M5XiXBSFqnAaUdgcuyPg7tYs65qntr28BTETkCGsMxfdbnyE2Ed9F7SvThjN6XPNkCAcpSY89ivw",
  "key21": "4kRtJThxmRpiLXjihBytna4VL353k3K7CPEUcY34yrbZ3EX8AdvnY2htHUWJ25rWz62ANtEbWXJJAic7n5JfmPon",
  "key22": "5hsWdBH1G7X9sBnckGhShgQg5Jys1buEBWJA3m3qycQedLtHw2xwxJqBrEx5VCAFtZAja1n62oMDQm1w5yYoAFBj",
  "key23": "3ChQKTXVZhTT33DjohsLtbwDkUevGKNC38BssRBFwWnQsLr7fSyiUVyJG1PeympYA8Sz3G8cmcZqQtQMvnQE8bPR",
  "key24": "1VJba2b5FLThTVyzTL5vL9cwVYyCabubf97DVmTf7v1dxG7Rf9djmUViFTKon8fCjuJSb4MBa8PduuYEgiyuXUM",
  "key25": "4SyTmyXmB9UErgoeQU6FXVvbbaEAc9zeQoriAzyticb3G599drz3fszwAqVaLm2RaQPa4UbaUCz2vpJfjz6Q1bNe"
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
