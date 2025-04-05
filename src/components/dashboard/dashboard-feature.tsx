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
    "ZRW1yE5xxeuNreH37iaiMzQ61yKDVwags7xbstKJ2ZhGC9kT8pEAuZ4fgHP5PLtYgzYJ75mHUip4Cbe1AeBFzWJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GvxC9nTHfgdStWs457mBoPzwbyPFXWftMEKRko9tyEUiZbwB5RXBwQzy8D69ihP6Hvb11QFQHRSmmBUVcsKevu2",
  "key1": "5KAonU9B87bpBNoWfJYwWRQzVjF2Tz3dk4MFfwP8hdk1KCt4EJ6ggS6AVtic9EtjhybEK32tMg5S3NxzW6LsFAqA",
  "key2": "3FK55NMeYQeUgMz1mrNLvpCEqn326Xzx6izM53bcPRwSynv3tJxdigtNTMD1yVLVT7EHFJAUa4QhqTTynmVRY4Wg",
  "key3": "4CUb8SXTsQ1NyshwVNPS4FcE5jgt6z9jGd65wW7qwNgWbCH7s1GH93eNNCDhohbhkmPayzEsYVtNhVNzWAc4W5xZ",
  "key4": "4nKaQndiR2GStTwxoZ1cGUbQ5yYhEX2dnzD54yT3uNgULwfFBAPRoBG8HNiaWosk71fvaX9stj4eGdZ3nXrktbst",
  "key5": "3r9D6XveLpqUhPz9MSJXwoynSoKQkWqdCQPdb2o2eVHMBcZThDSPHyuFnY9ah54KdDFT7i8eeY3Hy9nr7RCxSLUd",
  "key6": "4f1fDuddJa4D5oagSXtjJz9jjs4MukLXiFAQLTuTRfb52Fzymay1AuPg12mATyeL8ENc6W6aBqPtsV8CfATjqoTa",
  "key7": "4vkmDGLyGCcGbKotzquMKiTyfpgHRmYWY96nBSB6wWBa2iiUt6kDFk7a6hShW1XBqacVof9tM1S8tJN93B7T9ToW",
  "key8": "LkvhzsJwkQXat4MK3mAeChTaU1HPAFnU7TziLmHLY3QWf2rwRVqffa5VVUdd78FfeChgytdW8WkThsBRfv4S8vk",
  "key9": "Y9Tsdk6n9krbDQkyG8vBSSATDSAKb46ZCf289pNYtGGA4yTzng5eut7NWZRc2W7hyzB2iimyinJ7jHA2FPfHVuF",
  "key10": "4YXt6B7wtRzpdCoTyft6VDidhjnAYL2hthTDq5xuvjm1FCzBfKUE8GTauMsqvYUCEN3achAoNb3iMJYuE1vFjdq1",
  "key11": "2gGrUfHKTitDFSsRhvPCa2nMXgkPVKALn53V3m3LsgjtnYfYWLKn27HDBckgRBJCWWCamWbm7p6Hvq2fkh2Wt9Ur",
  "key12": "4AMbSk3oPedrZFsThpTXCToB9N3ZhbvvzuyELuPqSQF5JconC2SAkaRDsM3pq87x5hjXh6w8iNqoCYa5tbooQzba",
  "key13": "jCYUeBR8A1HPXFY9CqCFYgHMcvBjsrYDobXso7WjtqUrRpHrpmWcsgm1E1cMkNGGVMHbBw9QxWHSJgR5JWZaFt1",
  "key14": "2M9u2btgdHXUW6P5Z9GVYz5AE1K9RfbWC6wuv1aWezg2JEZ8B9rN4TnAXpsAV8L9K13DqTG9rqLz4YxtMbM4pCdi",
  "key15": "PWgoTwrZUbsf7m58GWjPMCV3xW8vHSNM4tgTGfUzPPdtZHfvaTsiNabpWVirkdp3GH7sLYeWt42kDSbG5NC9f4S",
  "key16": "4LraZpT8D7MLYwrcCJE2Vr8D1V3gQs3E3wCtUWMvEPZr5e2A8eQsaezcYWgNAx2aXz5bbPw7Z2EH8acq1oTygBFq",
  "key17": "PzDgGLx87KkDr33MpDtcPWZiTVyQwK4rkdbkR58h7tzZdcHuiKs4pxKRr5eocDXjSXXLwh1u5nowza43Zf4WVwM",
  "key18": "3MFUP5nodTxqj9nBG7c5vsJz37seSdXyD2vsuidnXNTz8gzENSuY1VTVaPqxKMyvHqtSt5JVTbgmbGbmpV5px2xa",
  "key19": "34wKfuZ7xk87iNSAqbFPoEiBQqttUteb29Yg87zqcQa9hNcmE2twXTC3ye21ypqCXmipZt2JvfLNagKWgnsnMZ1n",
  "key20": "63Jn1SYeuRmCH4uvzNV1MrsBpkkM2Fk3aErnZX6uUGBxzv6fTTc8LAozTUKRaa82fhpfj8HhZQnpo6YgxptyTLvK",
  "key21": "3LErbagdYzGY99syRY7ReDusz3DY7GeB9THQeQMwpsVF4Na9x9rrvd3kw3pHkcQxge1HZa9knPMWcgGNr5RKcnLC",
  "key22": "4PGkvAb6V8wrEo7Fxo1tBxoyg8oEHUQU9FTYVFAzE7oBdLVniZrmY8LiDNJ8UqDn9mbNay8pnmrJq1TYSY6Fk1Zr",
  "key23": "41h6wkc4uXv9asLrMtBTiQQMGke9aerdJ929pintEwBTqWVzcEht8iuMh1pMdauybeXT54kVneAyoL1aGdNLC8GV",
  "key24": "38dpNyie4nx9TLFV5M1zZUV4kYKNqEoxtSkGJU56ErhjvMjGo9Qj1bPjEcDu23YbtnwvQ9KrtQK43FYGLUh46eD6",
  "key25": "5E6BpkSnrQEM2bYsg8Mn6e1W1nEWsvG48Vy3UKCJqtPtZc3GSB6sSfE4j11dLy98oujE3hj3VnGHmCVkMZobxVY9",
  "key26": "2fRA2AncGXEmDxhdtjqWjghFBFjGMoDFKzE7duXKZjZvbpnjNDBUh1Tuphn3KfJeu7RpHkbhbNLSP4aZkTehf5jg",
  "key27": "47eXmTRgUU3CYeHaFuXQ8b5WEQsCWLDym2d1VnZ7yWDJ9DZh12AToZXXugPFkmcV4DgTfu8hQPdyRPpj2mRT6qZ",
  "key28": "3ioddHSkDUtmi5bvuJSSxMwVehRrjTMrJ2HiLP6S63bgaG25HwRTqGxN5YBXRK1h2bFsYCXe984bdH8fL7ywJ86R",
  "key29": "5RtqevCDEWPaeVu39oeDnY6hKEq3PEvGdNJNvFnQLmkz2jZNvUPPnWHQyYAmL3YhHhN1waYGoA9ZrnmHJk83BjdR",
  "key30": "XddwYH922RXXSD4gdUWoVJBApL7TZ8n8LhEtsgcZkpdA6TpACKXvV2ZowGwvvA2dELxBdiX4HbfnJZWMmvYNGLg",
  "key31": "y5s76Q3ro4EFzcL7S7skRmhSXfYFeJnZqHjt5JN1uTwzxM9KDbo6xTpT3e6BiMxf1pKPhXs7yRrvYuD1bkuwaJU",
  "key32": "jTNSTFJTvLWrNoPwkfh9bF4QGxtjG3jN2SYjbyogHgFDPJDyhEh3wCmujGsDPRqGNRA683haykwXXW2gr5yrUn7",
  "key33": "5QK273gezSHSFJbfeppNTj2BzU2Dy1H22VpYHsK1uQjCLHenB4UWAyPLQkgAVqpPrhv6TjRZQtSt3MY9oDQnY29o",
  "key34": "58mqbc9VzARcQyeuH2M9gu1Dtmfz4RcMJb1cWy8CFzW3syv3KLPEXCMWhQVKMvxwWeDoKgCcuwJdcV7BRByYzad4",
  "key35": "cmLV51Ps5vStLC7AfQPvTj7ZhMVMRiP88hqX5qb9q1QhEFJS9eSVYG3La7qBxdt15N4xLyMwEf7NCjUYBFAncE2",
  "key36": "2zo1cm773N8nkKdgQJRvXmMSfwU5mfS7aorVcCEJ2aqHPrLLqFrNmP6VT61EQjNamunqFaEHGqZD8PTbzLeS7CHy",
  "key37": "2R2ve8auSorPUjh19d2cZVwyXVtCfFa4h9TPY65Zw4KDEDKUkJFKoNj1gSbG6Z29XLDjd31zkCokn1vLioffxPQ3"
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
