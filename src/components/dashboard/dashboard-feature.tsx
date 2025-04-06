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
    "ZUiUYJjyVU5QzJLKzkXVw22ZzpLn4hC1QbbnKToJegFUrdW9bRUorDHfPresw5LuuuovxLtFGbVPFz9mBhdxznm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NBNPjntE4gxCAhpvw2BX3Zs2Vb2MCwXCFS2YzyxjymRbb1uBGHjULzVeJbzDU3dpK47eLr3wvFVMaun6kCVoPAu",
  "key1": "2vXiRxaCn5yjeuxmRczkJKaTL9dCH95pNugVqxhEC1d17VtLUku2YQRYPqAJrH7nFnkoGdQcbnsgWpwoJAmr1Y2v",
  "key2": "38fgkpv9Yyh7QdHNZdFk4GGkfmFzD5ozua4HEF65vJVAcjFQ9N4icpVkgMsxCcsy23JVSGwbz8EFCGkWEBJX5a3v",
  "key3": "2J4MHspXfUVDodg5wRYWxUT7fiXmweNGkNr7EdEiKUwBuvpccJdJqj6zHqNaeKnNa8Ry2WuHyfh5pEBhvwtvwLu7",
  "key4": "3WrkRpnaGCEThhk9EzxyxQsLVG1C6nLDSXFKiwY6zBWwJ1okkbbz1tciktj3YQjiKTemBpnHCs4A3hyUsQNYxSn6",
  "key5": "5jKdFCNusuRyf5cYovA1dVDMzemH3VNuh4RmotwCjaeTo1Cbdxkxd2QoKayGvVTYc5rUdTrysqcetsU5kLVgLTSu",
  "key6": "5mo8BYcXHkL2P5QW17mHN4oYZELpn1RS6essUMQn2yX1ELC47CrSiqTyxUcsreFwJkxzVHG8zJwkVqR9A5TusqcN",
  "key7": "4yYExt31aVRh2D4b9JuV5tEC3UHwWW7vgJvuroM4Kpfc5gzvZXBPTzrgFdhC9pQfdv6JMc6Wr1qJ8gxGF1Zx1Xu8",
  "key8": "3qNVBGWPBb8or3VbgDBKsKnaq2rwDEXe6FTVbLmFWPJRsGmfMWNK5UKhuVG5xsXw3xKzmCMHmtDBbfFsSqgWDwQ",
  "key9": "5kzDtkej682pCBp6fcGFBHT5KQ8ffqdLDyNTf7htfcM1f4EBDPfWMQ2WVe6hUqSPB62pgz3ojZUEF58nDXftNzRi",
  "key10": "2hs12NpU8F4rMyDffJ4ZFbQnYY55fnh13mCBqdsg6wLhBB6iZqgqFnH1MQnqyR9P98MYo2Fo9Kfp28N1UnkCReHQ",
  "key11": "5etra5mioYAesQ4xxjhERPKW49EfEiofVmSFiVZYHgTXvGyeKk67LnEC8LiKWQopUspe8bTirEtj5KMPqBNJVSiz",
  "key12": "5AhchSZEss49G8DXsCnoLAQP5jFdLVsb1Q79uLXdzagKRm1aZ1mPY6jTPoKbUtTFanxWRCXjfEjUKiVXqzHRV1wF",
  "key13": "35sDf7yKB84uhcKTeXLEE6Mymn5kmLjC1EwKyu72s4dcAxwPfroKDYCNK3VUHV1WHgPZPg4GxjNMWkpgBSfMR2oh",
  "key14": "42wHYKPqFmmVd5aQKhqFCTTMyXdmQC3cXWj5PbQq5SATe94KYHWiUKPp611rkJ44b1SAjuxcxugFGRpyXnWkujsX",
  "key15": "4R4yGAyYpL9Zrb66EsCi5opoyd4NwEGSA3W3tZp5BtH5LGxWJkPswXG4sW1PWYrrJK6zehGuXBCFieJPMtNJ7xXU",
  "key16": "4ijSgpP9ypL7WNiUj31k2a2A55mVogcQGS8vywLusknUw1shyEYceW7HGsyyEo8GiRTj9GtBAsnjhQp9TZD6EStF",
  "key17": "5ppZsvSm6BjfyE6Vybn1bzA9JMrDuXYMMZXYj8AenKLJiRvcp3tXpFuiQ3Kxe18Qdqv8TGckgHypYGFrJFcobrvC",
  "key18": "2ZwKqnriL1gPVCX7wfL43aFKq88NpV63X26Z8ExNz2U7KxxtBTXT2sk3Mv2xWvNbRmjD65zE8sGUMU8Ww9JPQ1f7",
  "key19": "4dVKPzdn9AYVwFKJuive1xYd8GxC7CE7c4dfE9bPhcmm58Jg6P8qtbpf3oqxC9pCVnJ4jyRyzCiE7tBghBhAT9Qj",
  "key20": "4nY2QuuYfTXXByNxcm1ADB1qcStugqDGiW4qu5v5zicHc65MdRxx6DcEJYVFkPyGHSCoDdwYhdCwCZ887KW7ESg3",
  "key21": "FtsgDzB7JvSgsAixqN5Fypxwrq3ZtvYeBNr3kXyPKPeYuNkMn5fnETkFc9PHXJRYv8cpkkrjjHMLeMGeWjeiHc4",
  "key22": "5c5nBy7zPLNMqeQjWM82CnXTxhVWXpHmGEwQXS4P7hR41C4rvNsdYzCixWKR3TZhrAK8h4zK9tkJpsbWskCYECYm",
  "key23": "had7jejDZ3fgCJMnyZhWapSZw6aJ4ridBsqew4LwZQ5eahaiYXSSYpN74p9JUei3pm8A6NM3HNB9LumMPLtBpSm",
  "key24": "24qBRutTGnVwhrhJa36jjQ1sjY1EFr8EXHHoR2oZywsrDgskA3zGErYE9QjXS9qY3gCJqoSbz7jPTMQapJYm6XgT",
  "key25": "mdUi167sd2RVsVQW7eXPs7KDbyk4nwhAifCwrhZGBhymmRTpqTqNzaTJKCND5Wb6kpCiXvPLUEFnik5emgKfhp1",
  "key26": "3wq7yNxNmVfYk4qbHiUfx5cd2W4cdUVzZbAWt1i2CQ3YVyGCf6kJZGvxzv7qzfrjok6MqD9f8x5A5ob6kX1yfqqa",
  "key27": "XMvLRhc59vS11Xx9pTGX6PQ1yV4tSC3GPX1r3wdY8HdSXaRWLa2AbhqWZJGWdr1sFJALDfkRqpLWxHFCL73AmKk",
  "key28": "2MQRT2tZc5JTfL1Xa1iPZs4Krf6MQYnup7a97wRGmtCRnJCVFbkcagQmZAjW97jBFFvdBPf2LTkYdUgH3Qii8ECF",
  "key29": "a2hCpGpTrri8wkjKBHZ1Gr4bK9NC87juezLRx72tED5oum8h2RRAhL67hBA3xoVHditjuiuPx4KTKoEykfPXRWF",
  "key30": "4a1h7a1PnYpLqgGauX7th9DaG6zvJaZpFAX9gYSc5sj69G8GE9raSiQxtcNrpmz7AR9JuFAgUAVy7xpfM7QtidJt",
  "key31": "s5PCaSQ35RqKu1Q7gxsU6i2Ng7WTAUABL87tppoxfBuT6wxWTMumJYdcEW3sHqBmr7sm9vYS4zr1wDEB4yDDtMX",
  "key32": "5c7WJocFayvXjb1RT2qv2en7YHahe69Ghr1yQCXFDHqRL34DXw9zQDqv61EMsCh8Q4NUNC7uUbhNsmkLmCsdboHA",
  "key33": "3PbaSXKURPyj9WCjd27S21TiFtez8D4FtHDRaQ9SXr4PhutnsNBhY82pHZ4K9hQPjrg4bJ6tJGE2hxxNTfmV2eyy",
  "key34": "5qZovXHipqpzae879yksFcAjUrNpHe6pizqXevNRcD3fj8aE5ioEGPVwm47D4HtHgesZxf6r6FErwoTotPH4CSBP",
  "key35": "2QmqykZkEsmrJQ1ebsW5rJogqnstdUyEwnzFQRYf5uHw9ggCbQpjC3ivtEj4Q5E9LSFdSemnyJERC8ajNBeSFBZx",
  "key36": "555nKotYnyMnJHzuiQXFtecLKtg4g7Y6T9WLPaaYjv9bb7NDMn8LpKVPHUKsEts9jkxYSEfTAZ2Uf9hyWexQUREc"
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
