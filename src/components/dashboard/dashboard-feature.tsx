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
    "4bzfDVRBU3YNhLsy1kAJuZfi7qCsDi4KR5yN3GBcbDsi5HG1MJMtZVsUsXno9u2W4oAvnSsaD2rMYLJAgjMij6Pn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nXHuxYijSXFz9VWN95VCocQxaj9LbhEAD5wHsmFMbrpSvG92qh8i1GurpWFdNHWZLkunPNQVwHG6Cy2y9AXrb3u",
  "key1": "5sDXhm4yPzKCxPQGS5DKFeNwtKSJ5fUgezzdS5DGKWALv1B8VaEszLx7J9BxjzvccbKVGF1bYYPHDeQhRGNWDxcG",
  "key2": "42SmkSdYEASqtpEu6J87Myx59NnGq89FdqyyoCsyVU9nKydrcGeB7mxzVud5CCCbBxbvQTMniCsnVp7RPjV9X6w8",
  "key3": "2F8xeMDKR6NUp4En5SEEFDubrkB4RQc4MTtaXZNdREwsS4aRLgZW4UQwZz91hFjTL2pxJehMSuMAVeGvPLAzL6GX",
  "key4": "3rkFt9oBWfbrY17RQhDkYu1YM279KaJbxs96ehBcRWXasdSq5FW23BEGT5iJ12Zd654DefeiTHVJbRajJ2SuHy3X",
  "key5": "2GxDifnxGuvb3cMptA4vqxMtPXff48jTPb1vAbKvhXYuNCFEpCbPaZHGbxKd9jNgatREvfqP61i9SPwyNzk5Ap3d",
  "key6": "5YgoUK96dpZS2xYigazDHtV36gTZVpAZo7Fn22Dmt1DBVQWSaaHRq9pAQbr3vRTnSFbq9yHWhtTYheVNLKcf2167",
  "key7": "31m8G5DYP1dDSrLrXUujuuf4eHPyPHyBdVGrMUpFpJqyJNNNVUWWzyqmhrE7d1Xf2msay6B65BfzMpUkLdURY6ru",
  "key8": "66iKKb3JF8gEC2YUfNMhZpYm1N6TvsTk5mEyQ2yX5UVhRbcXSRvRcwm6yTekLbtPtFmi6cDLZRwK4jW7TDAgt9ti",
  "key9": "277yTkrRPzxED2JBVpcRLM5Bf38mPLHFbAZAgHwAGhkpR5WRH8LLv1rLprs447kpeX89iDeaxBgsmaG1zU9PaYiK",
  "key10": "24ViTvS25sYXFnMpWoptnzYj8g3eTy5Zp9wGK5b3yWMKfmrAfmJJJ7S56VRHh7YwBseDeeLk6raq5aoE2cbHrQfk",
  "key11": "TXJfF7EJxYLPULPnpKkRVjDjSwVU4JZMFMbT3uACxrtsUj1WQejWUwFYnksJR9z5RmKTPXpgvivXmpjGXqk9hKg",
  "key12": "yJLHhQpPQVM5K1AZjDU4eSMVTcLY9Vy4iptU7R5UTfnCdoB7hi1pKg8VQLhjzNWUzqUsRYsNMBp9CmPjE3Jtatq",
  "key13": "4ZH8uadZUikFvEJnm8uksPp6sgkgmwbt3VmbqNzLPPZVtripqjhaV7sgJ4nj9VVy5qrg7SjB3D15JJtPaaPbuNpS",
  "key14": "3SJnsBUwygCaEdxEccptaJhG8Ru8NAetf23LHDyH3exykyb22pBj1BswS5ShsgfC3bbBFwWhkaF71mYesCtePUcb",
  "key15": "43aH6PZV3XmLFpD3niXyNqWobBapVBVtThbdG47Hv4q2LHQSvXNhQ76CAPVRqkFmv4BYuN8U6HJHAgWZB8YBHXRM",
  "key16": "5PAjs25BZTtgQoCXa6TbwWaw9SfasweBsRvwBShWuDiG71BssTz1PnFjXU5ftbpT7mJi5dWK5kNm6CdBQZ5t1MwS",
  "key17": "5za2RzTPYhxMDHhmjh33tSzrc9RLU8EhyhMuksE2DHPY52pV6C1fL8hdHcCLGHzoWKFus4bfoeWHAP2psJXgGUXR",
  "key18": "5Cb5fUFBzKdsKYAgXqDq446Aw6RjvLqt66iNtiZ3ASG59yNXw3J75iDDY9VH7x3FEWmUJXUkXcAfnh9nXNtmW32D",
  "key19": "2zZeAZJumS9gPvjXKbvyL78bZ2pHoL4SNNqmdKN9JoncCJjgbENwkYavrQaQTBstzYhp67koqgfdjxEVdYK3TZSk",
  "key20": "2EkmSKbXdSfCQzxprxz1PEiYokiEx2eqWXYHGzzhwzKzT656bedXwQR3UxzLyi5LtV4dwFA6rYrApLGtfpBGeg77",
  "key21": "2PvSw5cx4gRxVB5pnLtL9WYcCcJPvnmixeW3vowJFSzotoquCv9nm8knd6KM1WBjsvPRPwju3UvZAQithe4kqt3c",
  "key22": "2oYbxvyrKwcc2qjUG6dHt9jr4ZTWGXcEwBNnYoUyxMAMLFLuHjkb2oVZvcvRacpWZK5WiJgC4UnynECXmhGhXz3V",
  "key23": "65W5LEbvr8PURMb4CNY5PRxnSGK6ibYLRVZCaWbyLe33h4SXNQiR1rSGrfCP738fMLNVgwypajZf3SqEFEKtxQu8",
  "key24": "61WGfN24pheVKqhk6aVCq4hVy7Hs98Pqp8oPAcoPfosCotnyY9SDaJAhtu4axvvfTcCnYFACSZJRaZKutSRTdQD6",
  "key25": "3yfwBkQUC2Hekv659G4Ra7p2XyCJPZGwRbNnjotfHYeQQTVBdcGt5MG1FU6WhsoGjbLYiG5mF3peLJe1opkbaT31",
  "key26": "G2MN6BeX2CPwX6MKmx82RijTx8hnfVK47GShoT1QkB2mZHM1mtdVMmcUknQvvkSsTqH9KtcnwRh5FqzDATkgioV",
  "key27": "26Xv3Sr2dVTSctC1SW4n1mc9UvHT4upmuiWZeuB46pFkpx2YyuFvzgwwpFwUg6Th8pQitPaAxbCucKjdV3qqQEk4",
  "key28": "2xH9uKsPYjsc2zM4QKGXGzKaobtSyLR681Mdzm6NBrFbJcRjTAV1pj9gHD9egCnnThSLBVLKxZm5keg6Eyb2k45E",
  "key29": "2R2dsaYgtLhLkeaCCe3qVnyfWJh78nfdV83rh6Mjq83MnBkXTgExgVvCGSo4RpRz7fzWD5yd8dMstt4FDYparGCV",
  "key30": "VBBEsYesshxUmUqNxtQQ7b2a2GmRnKEJ7zZNASJ9qk21D2JxBTVLSUxtUMJHBvVFRNpzBbyyt6S3VM2YxNw6yBw",
  "key31": "61yAEhUHCsM6i953DZM2jfkEvZRjdk74msyBanpnRqo495zwqtyYb65zYwuAbgdUZFmd9JS5hEFtH4JqhckBJEbX"
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
