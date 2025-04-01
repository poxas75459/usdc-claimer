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
    "VfEGF8XRfSKwsKKy8jL9vHgJB9MvRbwyc4j7VLA24eG66YpQEsuJkcJR4pgmUxaQTQBc1sZivpV6k3hj22BChfD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UDMbSgnXyk8pzmSVTFWQedVjV3uiqjmB7E37KAjD7T4Vo3jNYEc4x8Dc2EAoABomy61EDHWWjQqt9toP2fdcBJv",
  "key1": "47mVsow77yPLRoAP4q8bEdoNzKEfDkqZSHiiy1xbKc5PRbVsAjGXgi3b5sH1PgHcqcjV8QWsXZVZ9nwV5Nre6z3p",
  "key2": "2aHTRfcY4jqPWLxpF6Roq5fWmcCg1RLqe2U84PpRPkWTrnQR3ZpFpna9saokT28aRTob8dznSiAf1ddsNYkDoYgK",
  "key3": "3C36hVNjTMazjpqSQ1TmWCztiBKVXPfrjuvwBtXUtEior46r9hcVjs5QsT2YFEfMUreN1xf5rAcKVKahhB8VhQ7N",
  "key4": "54UZ7ukDmg4QfojYnXtoiKfUteYN2XCVpUzqe9TcstnSZeSM4sZsFS7CZrdWMdc5zeRTB4oMBKnSqz86KBcW4HdD",
  "key5": "tGUJRieGB5yZSLN4iZ7RZ2Wi4mS8ZMtHeEgeqBwEqumr8hVivCavtpGFQNeNRVo4zFrDRUkZmSx7TU7dzZ33BVV",
  "key6": "eJH1i8FqQd3TkZbh4RS3gMYMoHoHKdrq2oTMgMv157jU57fP7c1tfksa8cBjiVf78BHDaVWKiRhZJuZjEnS2a2Q",
  "key7": "3pGuNNPPwVnBG5ZbN3ttM8YKSK6vSQeqRVzwqgBoi47TdTNfJUBq8nq3wURDVYi2DS7xviZUY4bQ1SXZyZXFCsnP",
  "key8": "2tcF6kPQZCurNaP3nprCqyvFSwoUTa7zA9UN5mJRqMKrBbnKivUGii4uYPm79e8KvizCKniK4vUCLCzBSgPreeE5",
  "key9": "4pSCMe8Aw16uNoEGJLefNbpT3Xgm3g4cWK1ZbyBPo8oCu5kUxCWYrz3otkbCnr2ymdtzoMeD88AorayR8ZGEK24D",
  "key10": "65fv6euLeHnwHPkD5C8uqbmU6BQ3xgCJjtm5nJ56CKZ9LFFNgHYYMdXp4VCQPP4gymwjpKm1iiZtAvNXe4nTpSCk",
  "key11": "5oQF9AUiDWFRF9hjJhyTRCn1e8ayCFmVtFZ3gjeiA3jZrMnEF4rDWUNdCq5QQbjkA6J57jnoXTTB64jCJVbGSaZD",
  "key12": "4FBw6Wkm1eRFKpToyEwUMxRHY4DRxSSwoHenM2FjPSijuZ3Ap9gw5AG8DMjMPYHvRNGnxQxUjtsjjmxwsAUs362C",
  "key13": "2MmYYMDCVXfreQuoDx8z1tjGoVmckJZm3n4hTgzJ73CJMEBsXLoxjS6WyGkqou79tRKQ6UF3gptQh7LnJKFChwvk",
  "key14": "4c1PVtAfw3n3jmLfAMdZ3PcVhCwRZp9RWSc3zxFRYqsBRcew4WzeNs5HxaPZZoQJpwBwU94wseyfvnJL1tz2h826",
  "key15": "7WTLhFpoSzLrraz7j1y1f9xMBLk7sEyYAtksu3VgX6bbTkf6uzJYzNCzg7EQyJ6oh2ezKtyDnFWET6q1KZ6kuZf",
  "key16": "3m9sGGCJXnxBFxxhFjAX2g6nJPz4SvQq5CJySvTZ2fdNrBVdpG2dnmEBtyXroYML96mcib9pbj3F6FMLAiSUPy2h",
  "key17": "3vG67ojvJQk99mQzt9ogyWdev2F5KxLvZmVx5UZRmhc6scafe671kEfYaHTAVcWfaJNvxjRD9fqs8G2rcRzKd68T",
  "key18": "3fToAgqv9Y3cth5P5zfvDtK2ZqmUDFbLHLmzou1DKdeHE9hRRMqskRbKJs72xbtwqkgWsbvdzNRf4Q71HpYoU9Xi",
  "key19": "txSLiGwP4Mhn2CfZ9QfCBziothqkoZ37nKPnhSpBwCWWTd7emgEedpHeo34D41pXVRpLqpyX4ucrZzkH6PbQJFW",
  "key20": "4FkdCMF9tfEM9a8k7gmPcrYdCD84N4ar7o82BmFcTW1VmozQPrbJQuhrvXebnojkVq5sPUP8yg2FWKhi8JLcUqUe",
  "key21": "BAQH8faC5ZR7yrgR53eqnhDx9JLHjLNJ9coGhC3sAmbyHLc6iCuWy3xLcnKWUMFNnv7pyePij751JWofZU8oK1m",
  "key22": "2S99kr9LqzhmM2RmZtwrJydmwZEDyHukE4PqKxymweGMHajxLinSyJmW8bxbcnotk3ocBm99SnWWbGtNByb2iusy",
  "key23": "3eGpQd2z53er78jSJiDeLCL3CuBx4Bbvt7YFg7AgsDftYE6EQt3bBtMTGnFUbc8JsrJrc4nfYA3CxzT3H8KksfKY",
  "key24": "31Ati5o3TUGbVsUk9zGioC1CyHTXCEe51EKoNviG73n6PiZa5hgHJTTY7uBuxDcXFtiC6eMQooZPLqeW1Tn4Xrzc",
  "key25": "3TUpS9g29KqAeBYn3rJNpoqf54aXt8QH7x83dFGtWC2DKJVVLjmgt2Tji7EU6wU5yvBSK48T4C4Awz9iUrz6qLnD",
  "key26": "ri6gATmqnWWGfWiuoJkHp6uigPmvdGVp3VCVBc3N3WkAXiopUgMRCYy2YgjFzH6pvfhQ3ezjxN8ffNkvSjpgsaU",
  "key27": "4WSwHTfpWwCgQfs9xoGLMhh8bdoSGaVFXsVASV7AHZKGT4bSW3XrkWYWq5pmFVJqQ1Pd97z32wTv26FFxcwLDvqS",
  "key28": "4X8MpALGvA3p5ArKMtKTJGhXCqPUa64AanSRfnnZWYDf3CkV1YB3xYgiAXfjCzhByPce544Qxk7f886defaiuJow",
  "key29": "4iyRdzYqR3UkK3rjxoh6mS2sFFkx3uRJMb1jYDoLzSxPmAt533uUtmdEWcJoqa4u8FkSpXybnpMcsgUe1ojxGxM2",
  "key30": "31EjSZuL1Bja81UuQA1TLMzi89XdHXvS4azUsvcZp6sUYC8DAAEXZ9f8FJkXQ9dDqursYGxTfKYvoBSribBo4gji",
  "key31": "yCAWFvNorJ7HV9mLf9xkebZxdgc3TUE42bfSQAejzLktd36BHH2bCXbmYa4ooG5owbHcXYHiHiRd9HfNng7JZen",
  "key32": "4iiQTATpV28ahcm4HVGAnZ8Vc91Hmfj9P9p3GpJoWMLWaZPEeDPPyxgwKgKjBSthfJKaLWQRDrbKD5yTFwFEGKVi",
  "key33": "4X46zrQo7cNZKdTwGCB6SHEhzxDhUdEuo96nf3tVGJSqvxMP6mkSZcMgRb5GRGoqMhkteiFs8RKnJBBeQaH4UtYt"
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
