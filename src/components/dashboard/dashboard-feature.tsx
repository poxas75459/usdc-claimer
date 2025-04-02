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
    "4VN2nNj9rRpZSdbC9dzsxUrQQgZbrWYeoeHZTvsh8Sb2h7maUupnkp6wdm7PJ8ub7HzYkg1cvRovi8we8abhwFd7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yauP4x1z9F7a9MeTRHaLit7P4zJm5UmsBrPmTy5TjzAGTSL13XRLe4wBoDBAFn1nUSjKGEsAAka5dHFzQk8BqYM",
  "key1": "67Nja48zzhu5Fahe1834gjirrqHqg3mLrX8x9owaNu6QNdMu88Tb5iDzRra6PN8Bz1Z7qGBztXb8qgqFhMR3cZtu",
  "key2": "TMXwff1sZNHYHk2u9nWaSKaNgCFF1zAqoDM5t99Jgj8TNJjSLrhkoxrTYrzXWkNDwMf9pEvz8uxsjeUn3eGtm2C",
  "key3": "61bKJACVZZHziedE491zHJYSFEN6yJcQiixQ73LdQaBPYTCkUDj5bdnpyWtyovmFeVHnjcidgCpBS3zcFotYoZUE",
  "key4": "4w2U8varQgKWxikRckSyrfAwjKJrKuAS8oGUuXqRy8iL3gy8gwUxhpqczL4DHQ7cN7S9j27jzo5QJ8YGRCg5BwTy",
  "key5": "52vQhWDCCn7ixN61LHcuUBq2XgxLiWZndQXopBbBPbfM6MMHmr5Zhtb9987rSaifozozmBK83cqxgg3Yms4GLM26",
  "key6": "msJjPoQi4Coh26gmuyJXeicyu3eBtDavD6XFZJxjh8XWc9kXNtUXmgVLopz68BGvCS39fNxW6hUrFTKrVMgwmgA",
  "key7": "5ZpHBPtrYFqHmnUgi5jbAjJH1QnLH98tm8srAfau5mGWNKG1yncfcvHvHJ96ZE25B43rbGyF4Ux1d1Phov2dynqM",
  "key8": "5BNeEPf27EMpFwdana5BxrSbQwsqcxcWCRNbGb8KmpWVD1SrhojP1b7ahEKVmi8qicB97vz2de1R7mjRWxS2F3dg",
  "key9": "5ZYdDqct14XtfPXwxSg2YXU5wMBHqreqJoSFPjZhnoKcejdQjUf3HMDotEP1d6PZC2ryGYsWqtzAssPe2GA6s3CL",
  "key10": "f964DZEjEvKJfaQqXhJte6LJz2QfQengMiWucGhyYeFDWHZEDU1kZECWLMxLirvTa6L1mDXbFLni5x96wyFjm8p",
  "key11": "47Xh8BoX2XJuP9RTXn7wBRpUYNDiTPZ5V4qiiUNv7uFYRMLuwfAZzv4FZkrJksytyDHAw4gX6ELhFAfjWbdTvah8",
  "key12": "qJtgV829QjMc2v6CaPTa32VFttZLpjtjXKHjeXzyPUGsbs94LgvaRhpjRBCtojxXMgYzmFWmuT8y3VjyGGpU1Dm",
  "key13": "3hqDy7QZjHKA799REJ3RiThnyFS8NMQv78QBSrw173V4AipSutNfiK9Q1nTyWcShHwwEf3wL4ib8YSaHXYP6kunK",
  "key14": "3f4cuADhd3icGo5BLNoYw71jwCYFdMnNZTsjHnEb6LKVGVr64ee571cxk7w1g6hk5Rs8TcBpUdQKiRYgcDdZFsGo",
  "key15": "L6X3anVZkN8Lc6i9rkWbGF7SnHjs2RZTsze1X91CDoZTkCFJGzgJytU3WtUMFfTvhadYrKW3oMJX3yh73BPY72f",
  "key16": "344qWfx35j1BJQXSWj4iW6VFy5bqEyLLZZpFXF7wdPMDaZFpCTkL2qYtPEGLv7LVyAP4SkoHa9reXfHdvp8AX3sT",
  "key17": "3a9FiusxAjLUgvcTq2rcTVgbvpETVxGkfbzTxSDps9TU5xY7DRZr7VUDuPe669P63BXoxqtBh6pooXTPyJkd7Y8Z",
  "key18": "4yH8yzkKwg48W95sT4q1yhK282qCD2o2SbddTQ95HNi63ALmoign3fheSg1igzyChTz62n8BEZGN3fSvzotm6mwp",
  "key19": "39PHkgQ4KvBcEG9w6YVfbsFKNvb4UAPusz3LBD8FtwoXgtUB3PjG3vWTjsE8omae4X6mwizurpy2QojG9yygw9Nc",
  "key20": "bqzSne4RnJavKoWei2zLsGRfzShDLUWRSiyvorKH93xG2Js6wTsRHX5z7NbcDUQJNF8ekz1Ak9Hj6damomue9z2",
  "key21": "2LL66o35DfJVvveZfQbPTXqwbBw9HiQ85KR2P6xkhzkJrcnNw3WDVHwQfXGbrP6jBtYBmdZcr2NDX7MWQx1AKwe4",
  "key22": "2Ka6xu9zSw57STtBcquY24jVuoFDBuEVQTyGDz4jGRVngP5VyJB5xBkdvLYKtj1LVT9NfESfKG2ieEdphC4AAXhg",
  "key23": "7XHBnQX2qxYukKdotWLKFj2u9Lbn7DdhCEBH38ScaDrmy3twJNw4zaJBjhXApixQPAvGUinDnfjgWgkEAdMNzXh",
  "key24": "VN3u8SnWgMuFNp8NqFfcQvjebiho6vuMx2PSkDsv62VHkqd7LxkgtEK343AAYX9uYpUrxPaJtRxKbJ7TK3nGdcW",
  "key25": "2AtZMP3N96xH3Rqy3fKgcWh4HmFkREtHngY97Qq8Asp4Br5vD3a65voJyymGia4YtZNaUfWyi4QmcRTBWQYN36F9",
  "key26": "DLT89MC5iXbTuTnx8DcSLzbQDbqeTi1ZadQfQYbsrBs3pZyHoy658xzWvxYaZB3Nbs4oNWpzPcrz6iXdMvRC1dy",
  "key27": "21CpyEoyRyq4kHwSTb7CsXM1dqy2F9c3asqHt9Se7dtqRrbfxCSL9spKJGuyjDd3g6AkenXpxYRHn4XuCQTvpK9X",
  "key28": "34G88vRP1putEVbVU6oLkbiMYm1SQDjUgEYvc6TSNCzrB1GCsqUb7j5BLqoFHwjh2niVc8em87nyD3fZgNHBJLYW",
  "key29": "23FtxbX3LN3Ccm4kLNLBfMFcKWp55YSpXhCYGssApxNHff2iiQjZ9rYoEyuSmeaxZiVVRGxh2SsvVAashdNhrxmr",
  "key30": "2qP58FLeMw3mUxFskjrFRK77ea1bsSXCk1C4F6GfQp7VRMSUviT2nE13Y792x9K57X2EbG3AHLD3hUMjS6NGtNt3",
  "key31": "39y2VY3EZ1DhRTb3qVwao6J3QEsQFP9mJUJYcfQEpStPrwk83ztEQTTjATE69QxsT3DZEFwwUJ4suv46xoh2Edk8",
  "key32": "2EqtpxXEKDzytSHfnD5jexMWw1evKVznf3hATijbbvxecu4mbmanZuvmXoXTz49GMShuz9fi4Ch5N6z3GQAAtjka",
  "key33": "SX1YJbWxVpFacyW4n16UiY88f7PXe29bJPbiTC8znDSCE2qCMBLqTBs4L1bH3U5arHnXC3cWbgpT68WfyDpjQAa",
  "key34": "2FnzDJj2qXKmzouLMosmfQh7f9seTdtyqHVXzddFv4iw78e9CpjwgBNKjuP6t2meH5iVYTMQ7nM2ZE5kzNughQrh",
  "key35": "f331GUkq6xg8LrWYZWWKApgndskECYUSAaefnmCYerVU8GL1xeW3ovEbUbYynNBeuteSh9419NYJCquv1zqE9ps",
  "key36": "38mRfvDtE9XmpSVME66KzoPKLeBboYqJEZrP4pr29i2gPTBcjYoLgJqH2kKdvY36rjBwoLUsAh6KdMA2Uszfmjus",
  "key37": "5KCJnZj5bDWAsezJhHw1WBBsgqP2ATGunj1rAbEsPPk7Nzf6aT4Uh1EiWUf6XXpon9mmaeYhH1doXzFaDE1PSFkb",
  "key38": "ZbWKHZRTHYo6XrJds8XkiGom6r5u1durxw7DFuok3ocztzFtQLA8YStEeeDzfBoi66NJSyfYkVSQ2s8DPrSVN23",
  "key39": "518VR8GNfEXjAdLXgE1NbUgU9cx7jMNSbrYgxpCKtCcSUuZxS88N4ZxPn4vAoPsjSsNGggrg3N33epHoyh1c3azH",
  "key40": "2cDj5fpTdwJFnspKVYJ9HG7RN3Rp389wX7YW3Fwu16RK4diarBmYUd9iCNTojR2Ngki3K24rXTM7CyaN9tiGaVX8",
  "key41": "31YFHWvCs6HSiYtbaWFEBEPS7zU1L8BURfDKDBHhpCaFbLJeGmkVSBLeWAWtjxMfuKoZgxfEz3LvhtFNoUvQyR5k",
  "key42": "fMbhW7RMSovKCiGP8r66t52PuMWESfLYKD9xwsWLbV9k49YXpF1MH6yBXbNanEhQ1zvUCvtafaJcjxGa97DRWk2",
  "key43": "57ji4Hf1Y91pyYMurD5JuR3TDaiya55WHYfMkG5UQLvxSG6D1hnBefqrm6yTZeZningz5HrywLM2awrb5ZCtJ6j1",
  "key44": "5atZ8VfZndav6duZBzoBe7o7YgRpisZQTTyX3kevKe7CbNc43zKnNV8YxJyNUtj5nTiTn4iFDeRLdKXAKcwKiUFP",
  "key45": "5iAD8JQzjun8wkdVb24UB1hZG22PULUKq5pcPdB37TP3d3sBhYyojfYchztuh7jikFkriMH5krY65n5V1eGCZoCV",
  "key46": "4Fe9fDCGXgmFWqXUmnLp6RkiZmaeLk4CvFYuKNq1tcS4XkmHdgFEGZKwv8aPwqzEjjfgM5BCnpjVa34sMikUBdHH",
  "key47": "5EsAZzWA1pnFvn2d5qeEgM25BbvxFhC2TMDunna5sAkxM8E7XGYLaf9RNqu6VffwCTegEmvuBoZThPiaAFfb1gNo"
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
