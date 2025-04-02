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
    "5eMZc77HqJtTYupkQauQsnd5X4qo6fQXCqw5ht533guGS1YYMjrghx7XtawzqV3aC8mHe6pLaxguefw3vvUAaF6X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gRtDnJP7kcXhi8r9Sp1DW5EQ3oJ4pjD5YjawPcuNnfdg7Le6AoRwWL2mHHCtdQet9JFXKpM8AyW9LYc2pi4MJCj",
  "key1": "2N5BLULSSHbPtS58GJS3fM14q1bJwDQToRYdDqG2WNq3Qvryr2N4K8dEaPwmqBXWQfxdGbPYDqadzHQg7gjotHPn",
  "key2": "2VufLcBseHHaFX81kSDppAfikHrDPSGrDoJc5DTdjARPe5dsBp4Mv2TJFArJ8NmDQiz1Vj2vo5FzmLwvqd77428P",
  "key3": "5cy6i9TSok8Jj2sYaX1DN5ttb47BkTTTgyTyQqhWf5TSB32aqk4TY6C2PbKEBYQ68TyHbkpU1JswsUHW3n3H9mu2",
  "key4": "5UZzAkjoCn8vN5kYSzF9uqEDLFgZJWUZhVYsWy2pmp9XLS9odaX6m3VoJib27V4bRppu1zNAKGWyh6vpDd4dsEM2",
  "key5": "nYpog51UzoUkn1PYa6zg33udCwpwsafYo32qUopvsNRgZXkmmbcDkCVr6RhwAvi4UqDKxMTR6CEb4cAKt2u6bQU",
  "key6": "2m2um7CkbRReP4uQfWEMPVpFqruvUPEYaBgJPCHy9qkwWFdRWZk1hyHeS2AtGnU9yZpvE6b9oUqzGKd86kVWQyq2",
  "key7": "3YVu7GkHJtGWDVpdb1U1inNwrkkbsJrFbKqTQGayjBZT4YSoF9gkaPKhhPMxbfny4RJfeAvRPZAVKFV93x7LeVAE",
  "key8": "25Bur1Pwn7twBZrBhrstRmjKXpmyE8fLxciuPbr6gLi1nEoAcN8BMmnqgdThomCSPEbtEiYEzU65TKhQB24wFsBH",
  "key9": "5PhJV22rGQ6LNNxbUh7JZHvzCXoEF1AmZyKhhN48UTCiy7EuXU9kU2AQEzKQsxRNQ91vGDRL8XhYLUZcCDGxaFb4",
  "key10": "2jEM5WC7rTtiaBDP93bDJPbQGmzhGumiDmR1es2jyj3J98wszLf6SBkGBjM8a7nTeHaJkoNTVM53JRvkSJezCFRe",
  "key11": "49fDVpEndFazzgPQAL1pT2tycQ87o7Pno5mwndWAAdKfXwVYzANZD3pr2WgPhDWUD8EqDxCssZGidgw9E1eEkiL3",
  "key12": "ZCNFw47dnnxrrtnKGCJTthDJpHRSjEYUmWHxq3diEty5ToWRXnJ9j5YzUY6BeeAm2PeZgSA8i1isA66XerYxY7L",
  "key13": "66u9Uo51f5LLdYh7Bn8LeTEHS7CoUj6KU32QNvTzj2wdLT71g8xn6Rs3Jp14pB6u7fMZZesJkGbfy4RWftymTJsi",
  "key14": "59FtuWyXxWG1AVWUJ5ktYuYHRwpsBMS9fqQPvN2oo98eKCP3narcTGVdNW77ZXUGnHVdwuRo478FkrptuR7yzu1Y",
  "key15": "2xhTWCmFY26zdCeJgj9xQRnm21khEetndebbYCB1Dox1eAnPRtB8CW6ZMKK2gAW3bLpfF2v4J1DhEfbss4Y2Fyjx",
  "key16": "4sk23pWZEWuJSKBqXhJT4NRRcht5ZRj1fbaw3xC9pq6JyLR1QccV3KV6ExWVh8MN8jZMdZi4XBzD5z9XDSwGJLhM",
  "key17": "3Z9eV83vUkQS4EZnrpcMDhJGupK5yfJ2kNNtcC8ULtXn385GC1ngM1dMz54AGXXLSxEQFdEoonqZQX6JocEpLJkR",
  "key18": "5BNwyS2aEzx5LzTMtyMXmM5bSjBJJTJCRDNvcYvRWQ82FM1pLF2s3F9fgKWcYWqLbDVRv7ixchgJhS7ZdkQsu8T2",
  "key19": "5FpnA7wxKbhMrH82XstRuDZoogjAA98Ag6CaAPbq2z9LkMNQtJSpXqPCDCdFkC5RNqfUjCjPFtAx11NCmcs7vjsz",
  "key20": "48wDqcceUxMWvqG5mbRL1zu59S8mTLsBQUcLZgfCYMJvG5uoq13EuUFXn51LXNTW19rmHDzEV4phSB2WPPJPywK2",
  "key21": "35Zu3nmZR7XbjkNdFNLPbNwrmi8JzeUXRSX4v6HQP2LUAAVfihoG2Fhthunf5iMgkX9vf7R94PmS47E1NP5tbc9H",
  "key22": "3FXzZjX4jyJizDouqqQD3fH5d6smtxxAHENxWe72SekE59uwUkW17xbczu9PTfwKC7bK9zzTzs5obAXZEvEh8Yn5",
  "key23": "5JTdVBiEtC3VL5rdjmGehkaazrx9PuaznFRJxgukUykqTBMdeqrtwFgmfN19zbqzPDDHNNLQsdxW2UFiQKCDdTuW",
  "key24": "3ShYTbNC9Sg8Lfrp5KBo2yyHDvpqrSfHD793diTiWB87bjFRkEQGnc6dAGtVPwYKkoMknxs7CJEyjomMsozjye3C"
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
