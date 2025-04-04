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
    "3A2HUARAZNCnjkUPQr7o646LE6R4FP1EHSM7NihNu7uJ216YCbuqT6XFtV3kaC2ftAki34jDpVaE28DqBsk8VM5T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6A7GScRZ9449WSLkoipwrkV2fDQcv9ZHjgUpi52gYGscm85RVv7fUcADKVHg7VX8Sa4D7wBHkTWMo2AYpvYfYnd",
  "key1": "26LvsWJnEi895J2yo25YNQWXecWPCR6JaGNmQrmtsajnozfRTZsTpXK5NeGmCeVjcQ4BabXqwz9rmhcAUwatGjVL",
  "key2": "63hdCkv2fYNYGXNMoaz9WFL8HPrbUc4oPVPEiDVDBUFXuh9yLNLbEgt8mHajU8JWxAFjf3seuWBakxRy78rR3wnk",
  "key3": "5Pq28JNbVjuY2HJEvTnhKH1LjHkpU4MnxiAye1nVUH6bQhquXkcrs44crvAXgzEtqqft3iCNReK17aLHBcrarhhF",
  "key4": "392RP1inFs3Bck23Jqx59ZWAWy8kqk46ouavS4pDHc6d5JgzQe15mdgPR4VPBo4i6nXFngLnfCTra8tgHt9rBgqW",
  "key5": "5PnKMkveBVmzQ66mBwAAcnUg7ZFdYtm33nyQEezjWxXEXMZdYDFTFAKZutUSPxdi1ouafsJR5ZtgkSKBAEnVWs9Y",
  "key6": "4MtHGBttvoGQTwL8oJR4GhbLKgH2tHfTsWtePHFtZ9Hmr8PiFEpNaVDMGfxkjXxwqC1MBWqNce1yQxBnbHVCFugC",
  "key7": "kKoXKv9u3gGdjrFRn691GNksyGZ3L6quLRFwDCsiXq2TY7svoyVKyEPvuPmVgxZhfhmXud8egie1viiD1x9r1kp",
  "key8": "4sYwzUCPxf3CWKoJDjp5VwwNSQ5Pq5deV4BtxUX6odHBnLbKhVXzTYg88iW8SyAFShn6e8b4psdJmCTvxRgWfiwm",
  "key9": "31wWC9bztiRM9uKXf9YZLTp8dqpQf73tc6gerbApdCCBz9d6nHHi3zmE9AXTjcNeWko3CBPCqwtDKbAjvLq7TL5J",
  "key10": "31RP4HREtrMr8fXqriktKvYwFe2gaqqg9jqWKqNWtTTQHsdfkPFGZk6Rd497XiU97hYLuNWf1FgPbM28R9ZN95eu",
  "key11": "5Ktgfeg4L9hb7A79JURpBQYgVF4P2WTBVLLx7Dmug4e7QLUhZsvd3kz4rJxyKuDRkJoQ23xEMrENuQhPyKDA4kWz",
  "key12": "125CmmV7nBpBpeiRJyMG5ENTM7uTK1wG1WisrJSQEoNMGTY2cpT4xmvLWhS3fquwPdNCLZb1jGf1Tutj6hBWxeet",
  "key13": "mSkmfwgfhBFzPZQ2ZcDrY9mdmrFNmR6cwoAgsv8MqseUqRvSvkKTTkgfu7XXzvEL5ZyhxyyJJQP7CR6aPEXBouT",
  "key14": "259YF9WfpJvtuf37iPNQ2rHzgBbo5GbEbAhEy64Hiu4DKtCYRN62zT1FQ7UhR9afEsKXQ8JYuUBxGyYaHFCmB5s8",
  "key15": "V7rjdBQLRUCPUgT6vB6Fz7xgrXKeFtyXaQh8Bsj3koGRyMt7ENqPR3qWu7BDjrFjKH26fQC6a63Fcder6CJsuYv",
  "key16": "5FoRKvtfJouX3yzgtz344ZLH31Bua9At23XXw6rsapThfDbXMwhVGcEt4NB8vdtkDeYTZav5XocYqJ58f3R1v9xy",
  "key17": "5h1wNniw6RUMBPwajpwAc1nTiDSPzPyugfqNo7YRdbWGqTou29UQDNTVC7va7CwZUTkt5S64eRp1KovJZmWrMYGS",
  "key18": "3Dm74UfWg1kb5NoX9SYCq9qHHf4eNLD9Z2tkqV5QDjCC1LUrC56YXJbBsb29PXPu87JL5L1pRxaRrzBzeSuQNo7G",
  "key19": "2tAgnuJy59AsVByFuijSpktYi3jN6pCfbGvQCrMi4CpPLPBbMHfzTdgL3wNapGaZKeMJbDVGX5xFy4B1rLuJEqGc",
  "key20": "pCXkDzZCTd3rXuPEwx2EAv2TuxbjzQtxYAgG1kjLfTSvKju5AMk5GX2WqfWQEFWUD6E3JuKsHouEwJP1mfFHGt2",
  "key21": "41VUv3epXhhT57bNCa4t28zapemKuknB4tRNropszCbtDTtXPSgy5rMdc3LVrn6ZsjB6gMPT1WZS83ehUJMmxBEK",
  "key22": "2na5MQSE9gEygLvhN8Bco4PTVewnKZr1cWkxJq3mV6jp28p9uoSgd6izGoUKX7sKauZktfowKzAW5vkWQKYSiopV",
  "key23": "NMAXTCHAc5ag15S9eis4EQDwmD6RScPTVRYtvDQ6aRnG1Cw2G3jYxQPo8EQcz9wqy7QomJUCk2twR4Sx1rpnexq",
  "key24": "4LfPULJAgGJjAF6FoTL5vrhndUjqEpAWtY8FipHRDtPUdKQSyU8Nx25SpEf5RnYata6WZMKrGooiZkYf7CJn5VwL",
  "key25": "2HqsEvTtV4ysd8HoRcVSga1qv7d8f6MWmKAapZtV8k912UB2AHn3XAJ14jVnkiCfmBUQNqKLdBF4xFZK19rWrbfF",
  "key26": "5qomksx6g2YadQriHAP2aW3R2YtvY1icnMg96Wz7pZwp4FVuUYizzanxE9Dau9SfG4GJfNRoAVfD9FVyjtEE4HXL",
  "key27": "2TaGxKWLnJMJwrPL5Q2Rv69bxfWUYYM7EUaphMGSEP9tfX1vKa4aQ8sm353vp2b78CqcYQJnexpU6Jexs9BFoceB",
  "key28": "3qmjwSDrw12tWGx6mbPp63esNFx3TqHF4vwgGWcmTQ6c77ymvAFPcf9cu3KmK9Yfa9a4mnzHg2B8P23SgbrTAnU",
  "key29": "uyUEHJVXDFKiBjuVUD8yiWAFW7hGaMGDqdFjkDqBE8GNaBA1emek1dFF1SKDMSQiNc3hw4djRudKMeZjeXE7RHp",
  "key30": "J8RsSA9RHwUf8ajNo9iTyfnLW3LhqLKisHHtXujKA52dUHDqWS2GXVdzbTGRdCrFH1CsBqHfgBmNAWd1qUNRmsJ",
  "key31": "64vd4WvL3mGV6qXg5SdSncF1YPfZkGnMQMBkTUeaTUkGCtPjCwcvgffieUGztnS48teuW5R5jAMrLfPv2a2ovDqW",
  "key32": "2TFHR5kuDJLQVZrWyViLsp7dQ2TrP4268Q2hqAMu35eKyZgvjDA8jVn6Wg2behg4yJJJRxq6AgTHKD1tWukEXBWe",
  "key33": "4m4DZNECUg58NgszXHRQQu8LjHiKgfTSuovULJCKiyhiVw6SQQrPYhCfCsfRhW5XraHYxBrqeqg7rqpdZWnzP3V5",
  "key34": "52GENHhYnXemWUdAW5T6XeYnMLGWSKbLJmoaDUrm2P23VFH1SsjHyC1o8fLgEvzkSnt68aCEcxCttmazGo5Am9uX"
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
