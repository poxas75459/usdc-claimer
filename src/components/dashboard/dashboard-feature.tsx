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
    "2xKViCY6vRiifY2cHeFA1o3fn6nLdDwPP52XFBgfnYK8LoWWTPtSn2ppcXQT1QBgZhB7h5hL1A6jEyoHmviTWYR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jYQmEnQf5TLU26RgsVWCRS328Dt1swSkXz4VcVqs9ykiDwxpon7Dsuo7AAjd3FwRzsoJMrBvitVjKxDByTStjqr",
  "key1": "43EvL5ko2Vy6asAedG8mbU9AhAAe7wTZn1vQih4RLoyxvebjoxeAQpNXpGWHK4qXRcZrC5TcWiwJv6LWEqZpKYeg",
  "key2": "5txyMJgUFFTszvWkvsZLmxbXoGZiiEHCqBC2zP1gPLX6FRixTZw745agXhYEthdPfSq3Ng86qND3d25KMK8pAdNa",
  "key3": "4PqRRQ1RjDftqiLQFEKMzyX8ttnoU9dCEZBxVRuf2qDnRz8ZbXiyZBWpJ1ZotLHd8uuNo68UK5WZauVNWHRvaj7S",
  "key4": "5LUbZEFkPwt1uxpQSkqdgcTUetjy6qGcDSzUDVLNh1TUZwBuvqqXwRLbQdoreCXPrb6G2KQaNBF7jqUYLmWSx4zt",
  "key5": "5dVZSrbzgUhCoLYhK58YemQMp5faKgVAxRmiU5Kq2NK2FUPb3L94yKcCpwWZjAkyLrzxVrGR7CabBGicCdcS8M4u",
  "key6": "f65k4tcVmtqSHQvZKvapieHSezPGT9dk9nJAc2WrX5sSKb4oLt5PdaezNfyJQisvn5CrFLT3ibmcW3z1g99ffRU",
  "key7": "2kCDLpZi4SdCcWkXakM4gbigG6Zyc2MUb3mcYuhcqx7aKexkZEJPZfQK7PkQ5Gx4WT2sVFcpL8kPzmfYUq95R74u",
  "key8": "2VowavCBN7fUxCWJd45rcYqenDh4GH3irioyKoEjErH6zApdcdH35tr5abq6UcKUH6bQy7Zx6d17A9ckFCrBtpiU",
  "key9": "2nxk5AYUKB8MgsfWoxGT8nVjzPPPZyHEj75aa9g54CY4iRtbVjucrsaFhVZ4DRV3GZtbANaZhBcnqQkFQW42n4m5",
  "key10": "2DJZXgUzRMofa3pDBwyiZRBszemazBznVrtFSpG5JBaCCaotWHPCK48pvbC734KWc8BsUyfVMT5b8sUgp5Y7emUB",
  "key11": "3grfQ83ahLuXKQMLLgNR9sZEGHQRzZWLHgLPnKZtLKmrsxPsg4f8Bj8rydsCJP7Xc4ieyFzgc2ZWD9iuRSseesPt",
  "key12": "3xr4dXEq4cpJ3qBA5tgtNBxWXx5Q3zQJiaUyizu7SdHzXKLytdCKD61nfqqDa7i3VZ8fTqkJbH667sGSDtS1dLhc",
  "key13": "343Unvaa2nJVAGjHgb27i6ifbuurTawh47cLqPbAVpfZn1M2jx4aX1yJ1QBhjKmfEMMhCfjSz7y2P1z435QNPCfo",
  "key14": "3po6cMahLceMPRLoxFHeDXj3Q8TuFLZsGzmwgZYVSz1o2DJtoWwDL7iHKMrZf35aJvUm3y4YaFwt5Ww9Sv8zEEVA",
  "key15": "2zKLCTtfiq9i4bo16saxqMCaVHm2fZGMsR6jwcYAfdhD13ShrMeUJFASd4wtnKnvAYUovmdxCtJC9uiBuofSb7P7",
  "key16": "2R6FYg9sbnD5mhx7SXjto3fthE1VjHrNNMvV534FKCkb8BJa2Y8S7p81Jg1hPLFfst4bm75eaC2BEFJYCGqQ4yHJ",
  "key17": "26bgfvfuT6R73fxAP8XPdKdsg71L3i389dcuZ1t9ETJrf6ZzENSTAAXqrviTmNUzdw3efL1wrvp6NP8GGD7xQY6P",
  "key18": "5EEgp27KV8CgfckVTF6pFFS1enjTNQWW9ouTn1PikMD4FVpqVtSSvhXEmDBa5r7db7NDaafnsGcxHUbQethh2N53",
  "key19": "doJaouGULkF94nwj5dnq6WSQC633eVdbE1XRLJhY7gWCWMG6eGX8Xry2mTsxhf1nnewGxbeZ7AgZH17fQeW4Ct6",
  "key20": "5Ec5Dr6AaC65fujHEtC9KQLip2z4yhSMcAkB9mQ5BdN58RV1bBU4HX7qA3rs2i4fmoe4C3Fb2Uvf6EpFchVKezA7",
  "key21": "24JyuXQjKYfdihnvLWpra9JyqBuKHQrGssHFMPpR3Y2fUHtgsjCKToohdemFaLVgk79ByP5vvnD2fkrwdLhZrG5E",
  "key22": "5bTYWtZYSsHntFzg1jiM9mnvcdByVUUjP8h82AzCWUg6VLmGZs2f5ZKWuyHwY2MpsQpicSraZDqm5kdpqTqFH86Q",
  "key23": "3mdD9U62ncg4YH3nWBiEtSdQpCA1fVWY6Cyez7c3gqsHX1hx61c5GupRbLs1U561BXBaP8MSXjzoZAQK1m2cs6Xd",
  "key24": "2goqPN5FYrE5bJzTLLN8onQi51p3ysheqrwmRfL8CeKk4DPqfYVeJo6kRU4w4S3GStoy7coHpcvLL7zEcBnhD1yX"
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
