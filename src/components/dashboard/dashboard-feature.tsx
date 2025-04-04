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
    "3bJjzD87k9pJ3Y5xHsCSTRPj3ZVHu19ZDnvfdSDMzszBxpHAgah6eauyFMgwajQhgfFAgV8gi1SmrZ8Bza5aK8TL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YaA3k6S78RBNg6uytodr71TnPfGY9gVRSMfJZYXp9JBCDTwSMKb4MuPbCXLDMwvhUpVcxHCA81VggMYBwd7M4uK",
  "key1": "3ACEDxUvw8U7PEP1KsMhBREawKRYwW6oBBXRPwnv4mdB9gRGZmvpP1s3Vurob3czyX3GPc8V8HpgKG3pq3x74dD3",
  "key2": "2veEVKAqkcdw8UCaW2BEUSbtg7fjbBnxTbhUtZwqmei1hg3s76KRtnb3NGHmc3cJjMjhoQLn6gpMmi22RKh3ycUk",
  "key3": "2n8JNVHEbeWnJ8fg9Yo6PzkYQdP9zcATU5Y2pvhT5VMdvrZU3we1Zbd78nDiRiPmfrryq3qkXHGfZ3TUfTLHPTpX",
  "key4": "21N8N72UkhR9fetiEZVAxBxwfSor1Tv2x7PdjMCscvqTBzGCcnRiTMxjaJSZP73825jFv6k7t881VAagmih9vLHk",
  "key5": "5BrDeoUT5W1W7VYtredeHYfCmMHrCkdLDdSaxupgNy6cfbdSeBTcxkWrRWxQyUuSMUZKDuzjYHxFSNveg43x1tmA",
  "key6": "2n1bexCmxGijx99jqhaVPnCFFvE7rSfBduiiDmRGKLbnSLGbbM1fJGvFyfKa78GM94NCuuvmUse2qxnnwZoSrkCv",
  "key7": "2gGKV75XQgUnRqsW7t7Ax5UnHuuQpqBfxU2odaWvEuFTLa8dyFTcyxayPD9YBFSDdvfxAspjFRAqBhuyDdsXPTqc",
  "key8": "sidHwX5HApfLwYeqz8xNKvZGrtrqnfiaV4rgVAALCpT7Csqi33buJRqPCbuwDa9JgYmQhV5PG6XnLJGNykx952V",
  "key9": "4gAvde2JdGCpZL2MEjw2RYBpVPLdyUv1mVXqapSYh1yxgeyeqqdDB2CtDgJ6k1i9DgLyLpz7GjMTw7mg1msKnwkg",
  "key10": "FNaSep6Uzvu2ytbZcAnkFszRnm9nkfpSEgF4z7yt1uVz3xF7qTtA57szVRVrBHWNSf3AbgRcn1ZX6HcAcyFR4vQ",
  "key11": "A5UfJWwjezus3rKo4A93t7mWC7sMDPQKzYDDu5kkiKfsVV2Dkfw6mFQq3NP4GKECQxCFb3RcGLGA3r1Yd8h1XD9",
  "key12": "2bL1VTqq6Q4MmmzhkRNPaJBXcjMjwMRUBZERyn6jJN4MdrtuawfZs5DfrcpqSows2oG5TtcpHF98CaqskQMxw3pv",
  "key13": "4p8ueupSPW6SQkEJRCx29Pr3Xte6sNq1Gq1GfXgW96GCuEPXTAZn74vPHeQKCJbCQV1TcKys5UQVq6aaN8hYtVD5",
  "key14": "vgtXwPFKGWFgnKC5u7SuUMUspn33uMwDtyqPVyCoahNAC3ov29SGWgNq52H6DHFg84ADhaLBXq1gtCWumWmuXoK",
  "key15": "2FozgSQj3Mm6EuNcf8gJED7kxVHBw1x5Cy4WMbu1K7viTY61cnbsorMK3xs7a2EF3xF5aMMz1ryjjsGxeHeu6xHG",
  "key16": "4KdYKzcwEq3kFwXfb41qVS4WtPP37GtiTLnHNNXTxst1ASq9NmkksmvFg7sxK4aRDfhSTrdAWrAh4pka4o5hkFhX",
  "key17": "LjXNvWVLNKZK5NH6n7gnWGPSQK7v4MP1Kp3KwLHAcBtfb2JvVgV3YENpUE1DXtEKA8vZbWAnjGyLfeyaEYx873F",
  "key18": "8R6vU2mUZyH7EzkYQuQmNY7oaoNUpZKfGHP8RNL4ejfvEkEvXC4wuS7Vny5EUyAWrjDycUTmUhQgAq2Bq5pNJr4",
  "key19": "2eprHYemNyygRLZAaa78P1NbB4peuTa7d2Vn8aiAEs1pZSA2ngQezfHFxPBYFwKEixGyC8pyokVM92m8aRFrDffo",
  "key20": "2ZYrYAbuzmoX9K9q8ordnFMsfhNatcwaZjb6y4yLjYpmoWLwiq9izmEq4ZhJ7aooySRvRu8WnvcBsK6qDGN8JPac",
  "key21": "21WQX2G5YWnbhyhMyb9VCG2QJErvAGpPGYjvy61uPj88zHAVNySq78dgZxSeGMfRqeoZsoaP5EjB9Cy7vpYigWyk",
  "key22": "2xhMfqKX1PVGZHESFJGmxMU935JWBDHwgg9dosad6RAqC6oTahD9LuvLnNWEaUtgaWkUWmm2jXPvLtQtVUKQPpG8",
  "key23": "3vtx3yAaa4ppJPyTG2RHpwCAFTbeeyGEuZzKrZVeYzRHUNawymj3KkEpxbibFkJMFehxSSSra3ixKN7XqoGHWaso",
  "key24": "46LdGmyRmkYWmWF7kaxSavftE49s9wwFCMPAiDNSJSCtoWJvk9jQda1NJCs8aF5NhocyZ5V737XdsUtxxSxWmYSo",
  "key25": "2watyeDLyBiwqxLkDJSttJdHBRr17o5ocgZDC2BuCd8UmDjJFUjcAkpxKE5PF7v7MdLtCpCyJqiGVfHaUZSHSXQq",
  "key26": "yWg8doUPLF1o3URWF2jqwmDYrhcczmzxKQoMdEhANQWvrNduzxtpbrJBsEN2acvXZYrF17rxxF7XBd9i33h35Qu",
  "key27": "4nD6kXsHs6pkamqVixkN5E1QLJL63WhyMitDSedX39n4p6N1mXREK1oQHASuxkxb5RXMrQ4f7sTmQkCgh351Hb31",
  "key28": "5QW6PZx9pGDwqdsUPLkmCCFcmxmcngs1phAd3AyGHapjZv9UQmDhZahowj5GyPNSt2tcVHfRfWbLdqhzSj6XMPhZ",
  "key29": "46fyGiDPjKFmyz91rmVANpoEqmXR3cynV6nRuDVqjUeuDivX4y3HmuCr3ezFeTfof84ttixXLR5siEsXnEjKRbnQ",
  "key30": "5BwqTgxd3kuRE4vcuDijeccVu8FLF77tzjj4nY7BePbTGUoLWFWDYfgMcKuXwzpdsPMDTqmYp4q4dKZFpAwp2RrT",
  "key31": "3pEumNVQvSb2rFyEs2zX7kMbMVexJMuk6uNUXF1zRN2EWqKAjmiJ49dYgXXj8km2Mef8Cjf8tFX29PNcQVgaA3Vb",
  "key32": "2rbXLU7vtqCSfE1p1sD62sDACxr2bL59pmA1SJM1xQZUoBTwRuqadmswbzaMx6aEBUVKm4ghTaeu5mtyqo5Babc5",
  "key33": "2NVeJh9ArQMJvpZ9a5aHSZoikY1oyJR8tT4iJsCAgxXF4BvvJDHPagWKkGHBkAs3xo13pXDyT26n6ZgwN3duc6Fk",
  "key34": "2jqWMBfvFTx83RDGumNSLi6Y4C5DrsRSruFKd2k85Aw1dP7Lgf3w8eSVrHf5amWkr8PHgpnCM62qvH3XK3tkXwNx",
  "key35": "3VpqiXSU2fuwk4MFaFjf25PYy7WNDV3VVk3fFx7A4AmyP2C21fv26msdoDkPrbzTjcihnEv8WvmJKpuvez1LeFFb",
  "key36": "4ycUDJPS3DsDg8We7vVAxgaq1MaM7jPNWMtYpwq518niBcPg61tbJR3sxQBn6v5dRj2pDp1xGEnL184EjDV4mT4Y",
  "key37": "2F6mdFPTRm98LF1diRbSjY6ziYp42Ugky9ytoDCFeczF8HB7rB1BYHS6DCfBGkBmTiwjVYa3E7Z1VDDt3gDrWVhy",
  "key38": "5p5bJ5H7cNmXBEx4CwUXwAip6KVj94QJgvJCt2qvHtfyka19re9QKNdkdkHtuhDRuB3zT7GM5sepKY6Y3qWQbFba"
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
