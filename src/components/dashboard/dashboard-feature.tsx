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
    "3xQridKQ7Ba16J3y4edfEEx5DJEkZaNJBRFpx1aLkfPfju33ZxodpnF72a6a6HuNMHScuyAcTc7TxEb4hbDHU4QV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wUy7XhdB4yCy2aUBefvZJQpiMGzLiz98B7t7633NyJW5mCCbjNYanzekfNUzXMUPUek6Y4YSN5MpEp5XLfdTmyn",
  "key1": "4NiQuz38zkkdUFLnzKBVJXvwsEK9StXWJUY1mVESue92XZiXN2pwyyGGnRNrqbXjgq4dmh8KntJKkG2RoqvfGQPu",
  "key2": "3ns3i54ZjCQ4hfHTwV4BKPADb6pWFh5TxcMA5ABSjyRVpqCD2YDHhNQpzXwKh1HsETx1v2unC9hegWzDvcAPJkkC",
  "key3": "2nRS1EdhQCWjVc2prwvQHvL8F8UPuzputv6dRDvTLEx6vSC41K7jpU7wDDciivbfMfrKnBPfr2YZjjGCUKD3gvwU",
  "key4": "4BXDrSFrSUW5GDSUdRc33Bx44haNF1eLGSVxNVAphGvG7ot4uJNgJ9p5yiM6VK3ENaXYotnJBLJmxfwg4uN6sfTy",
  "key5": "3uG8JZZnYAdUWXZkujoX8RHwPcDYJvTMjaP3HsYZ3xFVu6X2Cy1HAPeNdQesXyYeigpdT8ADeXtUJbrvr18968aw",
  "key6": "2xAEL3yPJF85wEHAxw2dzcWcmYAiffDDJ84BUYZpNxTepA9YJpyiDDXikDCfcD6o2CwXPRdLq4RyiJxPLCB7ST8r",
  "key7": "4MLadWmvSJUeMbN9Jj4pvET51CoPc1bWvKFh6ukh5zFPhSTBrfG44ihxz6uxN6GcyVP9Rcki91EXxouVFg5rQioS",
  "key8": "4uXuN81Kh8pNFaruEdtWesuDHCLWfuZkxfBiyGC6gngzGjEeXGizBE5kSJEKkYdaUghWvZCfu8jznfBiWqdRrYjD",
  "key9": "4evDS77ujp9NzLnjyq6DmtQyYccSDqeS2MWdnuTAqRgeMvjB2ggtErzDUck9nh6tsXsyb6uJ6gYcTqUawQxkP2F2",
  "key10": "3rwQK4mptkoS83H2VguwzVzMMXTcrx9g21sYn8Qnje4cAJDppAHjwQ9XpbBbTRLNeWk1reMDMHEyZH31Pda5W3gj",
  "key11": "3YiCvxro9WPveRdicPNpdHohVdxQ2pWh9cwiE4wv5p1PeRETjHAjin1wACLXupicVpbhczrsRDzxh6wgcEgPomWP",
  "key12": "5f5BvNPvVXndzibUqS5FCsaxktNDJLMxYDXJLd6aq7LLT67it22RmC26uGjQ6FBPhbTbycT6DN6NHvxmsYv3ysxL",
  "key13": "3tPCckn93k5JfUHJ8LDE5udoGWQxpW5rChkirL93bKdYEj6ZwEvtYWQdsHJeZccWRtiN6dLx4oTKUdZ7S8aUEoH7",
  "key14": "2EhouhYJmUb1KpY7L9Je1C5wWVSJ4Vf5bNTCTkCHTqfpkbPL2s2YJkwSqa54QLYdwqTmu1y99Ybj1hkkmWHmGWDn",
  "key15": "4bJ6MSMK7XN9ndJjpMtvp4h8tGRfChmPDxSb4DwiK4i6CDPqT8vW6MVE4korUJxoQ6LN8d4TUx2tE6q3mSbYjcdE",
  "key16": "2knb48jTUg9ywQFerEjyAZRA91Z9AonEbdd1DNyUiRSkKATC92GwRNoCvdJhqZaTX46MjyEdgcnMgp1xxLYPTz1k",
  "key17": "bvBHiNa6yy4jWKj2sadaS4typeaya36fihPtKQnizNwBiJx2qnWwrRCj4faUxXs3SU8WuGbuZjpZ52iSwxPmXuV",
  "key18": "2vm7uGAXKVSJCPxRJaggp6Qp3YRC44i4rtdjvAizPBEgPA1QAqzuDRLSByT4zmotagoLDXdkfvbVStiaPqJSVB4m",
  "key19": "2M3SWDaJ7a8uVQCu3RjzrYLAUNnPSheAZFG1CzBHgj9ycZL6X84eZV8YqMmm9D9EKrHEiQahdubUPSDhFMjYhVGU",
  "key20": "4vHhz9peKTfdqmUEUZg22tJVLiR7YV3fQDsRMSwqZeEYgvDv2qW1Sb4wqTzEaqjJmWvLCp7mHJXBduQZdSdnC9TA",
  "key21": "2MD2eEbxJT9miZRfmbVaYtD1Gpi11yHnM2j6F6LSNXZCfrtDA4JhBvm9LgyQz2NnYhTGChkUdcofXraxma9UZpgZ",
  "key22": "qJrcavhkSBeWV9giKJpR6vggZTztg8JXfjSynxNBHE5UowEJE3KowXa1Sz3vq8vNTfTk6TcZnYEDNYShPPUXYQv",
  "key23": "66JTaYDydSxEGYAbgN1SvFvLEkZ5qLW3Uzvuc47B3H6ecKhEDi1hLjAffvaci2SQ5SPfL9Rbidz9fdsbahP5Qm8q",
  "key24": "jHCCrqymHL6BkWPnSnmAcopiW9a4M449r7DGat9xXNcXMAFU1KDy9yhxUTomGMHhMFrFx3UMhQoFjTNnw9mUWMy",
  "key25": "xyFKuhVvNnwDZYigugyCai1VE54HUVr3QFwgGSTrmgYBZMakwaTBpB3keKLYgNK3b5XSxfywYgTsWifK588kMsQ",
  "key26": "2rszQFmxbmcek4twwYYk5mv8BxUzVUMV6bgTGMLQWzGv4K8aECzy93JuHeRJMquJNkeQanc2auqeT1cZMXqHVYQK",
  "key27": "2uZatm7EynJyBXtxydPQLEh2q4tfNUBeFZYYk5op5yZf99u9dqdkpcK1yF2PA6PJysvZ1Rubh8CfcUDQ1hengSfF",
  "key28": "4SA87goeuCr6PuJjAStGLBWF9YTMQSLyKR5N3QkPwkL6p8yPKGnUgNKMayDAzDXuD38Br5R1p5nTDZ2txV6Keaxh",
  "key29": "vQrq5AkHtEgJjwFs4jLhjQVts95kzEkDGhsQ9i8kMUJTVT31VAnhqsjaUTxdbxbQgmRJLAsLv4F83WosQgVTmZs",
  "key30": "5Jo21EQQ6nckF8suG8sS9z85wSnVqdDNCiUqSfEZnANhobCxabMgjym1jZiRLRs3hnahsKraBwiXcrraYBiHHTMQ"
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
