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
    "3dsJfbcmsdZ6U1bW78sP4xPK12DGHkWYeqVFpFWimuUgXPo5EcVGD5op2B7LgpwqxRTwJjtVJXAmetH2gekbLvQp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qHrCsArQHoSM7pKnjWXx9y5RCtsxp8H82n1QtavE2FeyJruwP3rzAWxUKvB9TuTBC7Hw2xv6qvu1p6pYXH6tnsv",
  "key1": "4BRgCFwBrGo77TSJCK71R5DhDHwxycHdXqXh9xsYeofsaLqp2cMmfwNRA5nFXqmvpBQYZJJLdQtDKzDHPcP1ue2A",
  "key2": "3PP7ZCZ3Ww63sGkP6whh26RhxoVNJMDmVxNsVM4gWoSLyWSF1JKe1JwxXfrTyxPJLJe5HiZnGFTZMHMejkpbZgo2",
  "key3": "eURH9V5jbCfYt5iwTJsDGsLR53iPF7mRU9KFCeXhs329ULTJaGViKBbxp5iVre3qmD24LxpHck7wWWREGuBTsE8",
  "key4": "48YZB3eqFrLH9Mqouk4spYttrRef8APFtAxDooSzM23RUV8co7BsaWRV68fQKwLpSgkRbovt4Dk1YDZA5sfEzg9W",
  "key5": "2X7biTMVZHu2vWFRtspTQJp5Xm4Szyxe4SiWPHdDznbdWwxu7qnHZKq791Eog6U91o2pLGne9BBS68c2g8FCcFGS",
  "key6": "2zCizqKLvz9pC5VeTJbJBSCX2LHuUZJnZ3GNe736gEmM9D314MoqZ4iGdrnA8KgrVJMwZwMYFUhPdt1aMVBJppyW",
  "key7": "3Gd5bxSyCjfUM2xCbPkLkVuD5XUB57E4RPM9gZiiEAWAkcqcBK6dycv4169xxnbxsuPQYCPjKDXK2AdZNiToBGgd",
  "key8": "DbbtUPFweF9oRa7bqQTNM567tgZQD9j1Xn2hEfFXuALQjCYxra7YQLsXDii6BfAWshAuk1R8LUgsCSbCqNzmwzR",
  "key9": "5xnzHRmV43LHEupcb2UA1fQFLTQk3nJb1MMmYde1djD55Y2N3KLLEq8m7upAJAZKyiTbNtuxWUcWTJhMjFiVSWX7",
  "key10": "AAWpMpAzkSttNhHjKv8zrdUx64Zk2j1PnrHuqNRdk6PbNLHa8ytRt5stDFE8h5kiUMBYsK1waprmpxzkWcBWs88",
  "key11": "23RmGmAHg12sGjQuXfLCHj3aHLhC2rYqzhR6q8mN4pBBQaa5sdHzPdMH6XEhjC4PcCA2hmpwXEWxxunfJYVEr91Z",
  "key12": "DHN52bXQxLUdzE8TZDbDwUyJxWvMAEcb1yGrqYuWzW5km3KwJtpZiRunvoE5zdumvKwCNEwFe5rUcFTjZUGfDUw",
  "key13": "583nxWWE98ELsmdcn3XYTdYfWVsZ29Z3umdXyaQgbH4UYDm3YJdyV1qQ1hvRLLJvDAfGZPFkq3RGCvp4zx5azYtc",
  "key14": "4ziVvbXX84vYSZz2P4U9dkwhWbEzFLD56PLqm66KEoXKi1MTK1pj9gShrWDaz6riAsiChExkjn5r7WLXm319HvCL",
  "key15": "5L4UJvqrtzArteyCEhNSK7f6aSY2JKAoSggNkD8f5STthvbV4fitHsrUJZwaWMHC6WKodstzCYY1ZQSsqN9NZetP",
  "key16": "2BVrimE3WMoRywX31jLZjbwXnncSENQvfTLNSB9GP6mhk8xW7BW9TSGefHQHEU3b9brpNN7PgnhGtaKtiE5YP8np",
  "key17": "49wN2hMzndskHszCG73UcHvRcGgzhksBz47t4Ewd8nWhnHxtUA5YWoUxQKYE3pp3tEjnxUiyTEbzHjYMRatVWDgu",
  "key18": "DZbvzDDnkUapZTSUsMX2o2TWKVXv2qP6VFJH2d61f3tubikNDJSmJZmN3ugEkoeG24LDdB7cNBertrXFPWN9wGk",
  "key19": "k3Cf39DDjb5xShEBU6eRtWn8usjz4iQGqoGRfSWCZj25fzAWQxWtU1keHAD3h7tN6PAENkAs1T3i3oHDdCwcrBY",
  "key20": "BtMYQZPimbkftEu9rMZKKEkLdCsD6vYaQxSFczKxwc71g6SEnTTjnLY2rhFPycBWCXGBxggyURR1uRqK1tfah89",
  "key21": "3YNJYLG487CpCvaTYKX2g1NVDLa8qs75kaXXfz46M5EvyhMvLZZ28B2yrRjtrVTw4JVYUKPqeoEDzCHLkYbzhZUp",
  "key22": "4QgngRtfKDBwqCj96DiHsXPQANrYL5Vcb4Wzm76Dj69TTidMvSLsTKKtiWwtDY8JTFKRkzqCAdfGCpBYf7bb4xGm",
  "key23": "629GFCwmWHBG8EH7yHULHPadiv3jkMfumpdN7bpDcN5HEmP7ujNAYvo595fJVfS7R4pboCP8G7t7om1SAF8Ghxve",
  "key24": "27zP2xb1mwWKTNnCB9LrYAfV5ViH5TU4SUVgWUwhZVoytHoE8PL57cKizLxoVy61m8xNRCuomcPKATcvVBGP6oX6",
  "key25": "5tRixSzmKpdCrFeXQDpqzAsGQfSAnDQeTmF4vL6e9CGF9hs4A21mJWExoE7yQBZufrcqbh1JuGYEC45RbziDxCWJ",
  "key26": "aPDCQ2oynfFfbpz6XWBGNXtmE2sBbKb6MUygj3unvBsPJhU78PwsiuYSJgGSccN7sXWkukKrQtVqa1nRmGBSBBS"
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
