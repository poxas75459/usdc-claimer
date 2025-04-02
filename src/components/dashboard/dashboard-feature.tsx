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
    "66CHsMYaQvus2Z9BegnpE2fU2jirbgyNMGHRLJZZVvYmTjieD54VKVD3MQFAzqZpD16uYDuFZ1ZJ7U3a3dbQKYXY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Xv4NH7cxtur3vPvGYsnQz8oTEmLSYJKavibuNV3NotKbcc1PPn6ZQKAFUjD3ZB65BkP5TTfFvZX2xBwDVjCmTgC",
  "key1": "25yCZcYTZZEDnaJxU7FmxZkxLcgTh7gP5k57RZMhJasemdwABmz1gKMzY22WZKiuJPFEennd6oQR7peU5sSmbssK",
  "key2": "4cHjL7MRhuuvwok3sk4jEdrQGbPMHwyL4npV6gWLBUFbKNim8tLedG4Vka3R5eTwWZiqinT1njrDvmHgswPjwjuS",
  "key3": "5pPXUgjCgy4VG2LpsT6Z4vXQHqmSAWfe9ybBdYJBH8YqJJhBYZoukR3NzcDp6nnGXu7SthW8bvPgx2VjUGxmYCPo",
  "key4": "2sYpvZ1A49vv26uYJhFYiBLBdgZqA2ANN7Rq6r7pFCiFG1ToxQ7MznoPpxiWP4W2LPX3wKRr9mSrcnGW6qMgTPVk",
  "key5": "2B2FVQkDJcowqgHGe6x91hc3yyWmuxaGHWQd3247sfv9vEKhCg3SUH5r9U6XNq9oWFimuZ4Bw8vJTUw8gNnt1Ams",
  "key6": "2GXpNJ3gqSdsJQRNgZ4o3KP9gVKQJTXK6jE6v2YTchx3seri7gxNtaaTJhAiAJDKVf1xgccjAkRtY9LasnLv4xDp",
  "key7": "5ToeeRd8i8d8Wau9kyX5jAyNvrR1heN7n7h8c33kPj4ErXJASVou4e78LpUGJ7sERMrULTCW3r5s72x9FYZDm3b8",
  "key8": "ubKRTkqkn5A8mQ9AY5VXkoUXsSU2DWShkGdFHx2oBptFd926XU1WgA2CJSuj89U5pkDQWgknrH2fQmmC4rAJYgf",
  "key9": "2YC6vtfLBbB1BT3MfxnzuTv9z7M5knZn9gCY823Kz3pt5wt1TcNLMJxzVvf3fw2tnD5QfKVB92WoLeSJoRkuapRi",
  "key10": "5vKAhKs7dVBSUcTsU8D9BBZVxhKUayCVQmXgPPbqDBbL3vjDqzVENECL6R5MB8xXNThLvgZK4UFdRrje6q79vGaH",
  "key11": "eWDZd4newykVjEax8FYM714U3djwhRpQ9w7mqB4TdpnSz59RCDfhTrvHcu3Vp4KAqrsdCajaKCY38eGyYuhUUTB",
  "key12": "TNWCJbiErieRqrcJaUmWKKbmNtKpSyJsuvveANnr5YyFH5EdqkTXDet6cwmvAsZf1MBRpkbdk415rCxRHQ7Qn7x",
  "key13": "t2LGQDEtCrDH56UPrgYHxeF3JckLeYY4zpUp6dY5yF2XgPDkAxNwBnxWxvEbb67gTi6fvXysfUFPNzPDKobbrBt",
  "key14": "5DzeZAK4zPscprni3ZSoFgSa3kogVvAy85ahnuLKZKARi4z7uxWj84MDVh6Fauu5zGErcvNYfoR2E7JxsjQttJ3u",
  "key15": "5KXn6RoY5rr4mgNufyZM9ueH91m6DwhS44k66cFK5ms34xhPyH3Lm3CQYhV66dKUwTh5e8ACwsoD8J1nz3myskRG",
  "key16": "592ZaaGSMHN9j6fpm1whnMhTKehnfmvt8bRm8pZbCqBuePMEXv8NXevrLMZYxLS5hJgHtQQvbEZnp8n8VARxUmTJ",
  "key17": "3pNESerGLujyw6BnecFX8bCGpUSCmWkCVXRbNDqQMKHjFwPVrvunMWPRn94QFEi44hFwJy5xKkZTmuPaJMAycvVG",
  "key18": "5pevaE7Qdn1CPHpkh8QQ5J7Cm1NQniSZqE9W5vr37NFejmLwWCSsaACs8dqg9JwSqCM5fGCtc7NqgiHFaF4iFww6",
  "key19": "2BovAs414xtmJHWLYpDyNjdM2hsxnR5X7GtQUV7aW1DNjsVJKdh9y3iqPm4DT4eUXJMHFTqoZ8LfLcriavML5Rmb",
  "key20": "2UQXAmbp1fv3gncL2w5mNPVyse5FVavnjNy6saxyH9ehDemugLEUbp88x1m3J3FGFNZUptzjQLtFZ6WR872inVzQ",
  "key21": "uad5kyxRQ3WCByXgVnDzPMgSEFVqtorZxtxSajmS4hSgBcmEdTYbXST3opWkVFLN5YQWdtqGfqWBVErMLAdGiZC",
  "key22": "3ehGfqMhHfRYCnFvtrcm7LbyN7pGCCJzbaMn46oazA4zp3o6FucJ4jML7KpvVa7vY4MTEG74tVQE6KGvjvXdCaKp",
  "key23": "rnNrvgPYQapk3woL93pST5LoJzyWzzpL8112D1bP77u5H7NjZJ78mLvHRB8xRPqY7p7MiRkEiBygm7JdmrXnFZH",
  "key24": "27TVKV85UTpsh8KjUzjQn9vdm5ehNBBcCxjgRPywW36tGgiN9RNTWV7mt1uk4uujSYmpsh4odF8mbtHcVm2Sck33",
  "key25": "qVj6To311LC7Jjj8oPXW9zRjeiy3y2uHphv86TTEy4B9ajnpbBn33fMYPxAZX14kR28MkLF9x5LT2iC4srqiDRn",
  "key26": "4pCPqZTTpiquSGkgTfGUmucudtTGCWM5eFASNMSUxvi45c2kx1hVoYCLhEDQG64AsMCopFRFxP5twXbr4qUFgdwf",
  "key27": "3UetefCWBJCnDzrkdc7t6hGAeCxfqQGGKAZBY7Dn8gkdxZgfAvGQoQf8qyvQd6PKKCbansWbqecnkowwkh16pNgJ",
  "key28": "FjTy7a7QQLySoEj334T9R6dNQ4zHbgTFKpWExm8U9o2yugotDqk4XLMPY2Q7WfsEZ4o5gsEGHmN4Mv6TnB9ccyn",
  "key29": "4xN2SjV5X2Pr61yRJvexMxB2f14Wb3XJUB8koA9Ek3QwAgHMzNav2tGagVtqN1cMzMZhTigjLzFhoEJHcd5zXnYx"
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
