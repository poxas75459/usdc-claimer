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
    "39RD39ppspQZ6XYsyqmDcMR1y4muGZfG7PithGTXC8ntWfF8Y3XzmR1AAR3F9KvinJkrjL6MmmARjTiZCia8QNFN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4e6k61xaW8SaYWURuqdnjcJATFUynt91aMw5s3r6RZTB9GTnpt34AjZbnW5jy7SojZByqnjV56vzzXHjK4FnGrWb",
  "key1": "SZmkxsu9ECf3iGUzbgwKXnUmhbVLwhQ9KkRCi6cZeK8Q6fbVBhgyfE8sLNZPsUxBDBSKfDMyc5TMZ8nT6iYMQGk",
  "key2": "YoVEVS1X6bsMTMnXZc5jBgmGEKA6rEzTdfL6HSSruAviXAGNj6y5ZqsVCCcVpYBh1QP4LvpXtvdt9fGWRhpJEWj",
  "key3": "2oCQHS4sc1xe8jyPhXARW3UMeEm191adasGgKWwHZGGbmFRGT4poCgxtNQzwL1FEB7E7ncZbhnHENSZWKPJdyvVk",
  "key4": "9t9K85QXkqJsrxEMMYjxMkzQsX8qy1fg5MKFNobT4GhUviYx92Rtyi42FDeXcqpNGgJkPEmX3Z7jnNgvbzhHVNM",
  "key5": "3KGb1ZZrcTk4fASSt1sCY9vnHHuBKiVZMSWd6M2o1bR7M58ikwcncGUSKe7tJewBnjHwBruS6tzDXst1ZztqruMu",
  "key6": "3r7MVhVSZJTGj2wts2vqnujct6QBSTtEvGLjJ7NUMaHrZe1qLSj9rFP8hToTHBGopeHL4gku7tDfPg6cX74Wg9b3",
  "key7": "26UUstDU4LZ8RS4dWeQf8u1uGXbriHG4nCMeXcuaQaikrVuXBmVcdH73ZoCneXeC7BD6voQ2sX5u36AHT9gWuBtA",
  "key8": "2rNPvGLKA2HgNCRmvDdH8CgG5SEW8EPLqpxP6dFnRW3EFa21RuoewjwiDPq1saCeXEHAn9NU7vM5BhkhSGoSQKja",
  "key9": "4dRbx8eMdQmtYVFEv3gpet4MtbkSZsbYQXLfbvDFQ88t1fhM57furgt8Kyn1LamtLNKXoc1sYZK1Rre47mZRZQGk",
  "key10": "2TFduzXFacFVmMFDQrsyFh1y3oyZwqgHnywPz1WtxMZTEwT6mrdeaeRJMqUx1aWXq2ya17oonDmd9iMMFqQhbk78",
  "key11": "5mEWnJpsELisK6bXs19WVT89Q11vhXLcZe6f9isgG1TeaUc7iH4aDyADrHSSnTFMdAUc6G8RFniCH5ka4JCTd5yp",
  "key12": "3Nb2hNicQcRHu2pUGFazeadLAnV13tdKpBajQFuvu14sDJwcvLknkEctxhoRDX1LaNRAwiJq7t6yeAV2Wui2nV9M",
  "key13": "2evTHtaLwSJMwNHEkaecZx3PFVZrGQJZjFcUZPVRGCbUfvPdXQg8yRadDU46feiHCC6btag748bkJoV17kNZ4xvD",
  "key14": "5arpwFHCquxzNKAEyv94VTu5d6BQMhNBhNfqijKpdZjCRMzze78ymAuzxjZfVbC73KZtQJcvEDLw7dYSpDkpPqwy",
  "key15": "5t1JLeA4XH2kASmbPgNHFzPceKapZ2JiK37PPGDeHJqNxGnykzLHUX46CQv88zQLsa9zGYg86iuuMCWr8whp9e77",
  "key16": "38S7JAJYys52Phg4ecNvttBqF4GmT3J7qh5AcwUWzwdBN7ALU4Pbh4zeuzN6QY1WScW7F6HViAsZCEZ41chu5tcR",
  "key17": "2QYixZUu1QBW93SCeEmo4BtTdvaJ9sE67HijqQR8qvdSEzCPbatmQuwTyyZMAWV1HfimPfPW1Ng7H6iGwYjs2CYB",
  "key18": "3WfzF26c74j9J2gFxy2xLcxsWDnxNdV74UPmWAwC77wpzQArQSP7BwLL4gZQB42FHkjT47qrg8NcGT7dAuozHaPT",
  "key19": "52LfiT7oQV7T1JoczzujNQgUfpFfkzFszGQMnd2Wb1tSGbJeb5rxh1PXPBnExXU187MtDdACTgThHnDTu51xcdyV",
  "key20": "2AznmXUq7wKfaHS7Hm2rPKynm3Tsv7BvGeNuEmoHcGMWrQpc7jxco3nG48SLTffmWtwb8XPGxFygCqGCM7MKGco7",
  "key21": "2wFoAjHx3Q9e37ySRisgUt9GDxVSmmkXb8TnTbdCejbJiKx4ubeGAueVL8o5ZDdB8xdAjJAMeLSrMzMjiVHBGa47",
  "key22": "5cLXQncN4wfFifnoNT2gGU8WKags6ohEo9hqUzzucgNpApBRfyZa1DvBa4TFmhxQJHanfv57hxRscUDSZDxcsa1Q",
  "key23": "6RTJ6rjvuh3Geq5VFRhPVqdyjVWPpafR6ojfUyvqwBMjJktngnbEwQTEDtRuDwTUSDEaGAkUM6W9RuHjJAUf9zN",
  "key24": "5qWWcbF2JtC4K8xL4PwmJcPLJabXau6p2zYR4TFwSeDg7XP9Y5sZxYF6oKPzdNjnTNXegfECxG5mp8Aq28e2fW29",
  "key25": "2Fd199CsMkq8jcZveV2z9nVMhBCK37VpcBdkUGBCL8xgPXgXixG8n25zKybuSQke4MLHiJrm1qgFoRsuxUDFtwzK",
  "key26": "61PUvtD4KqZJqtBc99C2dH8rjRX4uRarRPTFxY4yJV9A97A2TPEm7kZjLmgX1T5gJUewEwN5ypDS6wxty58QMsGm",
  "key27": "qAZRFnZGmLfj5847F9REgKNzcWr9SWUXLsE52QqHmbzdb5sbNL8JhC6dezdZnrg6ZZZgYBQq97K7YxUTyKYNjqF",
  "key28": "3kv5ku1faSRBMQE6LVARgbQWy2Hyn6WTQMBHU9p6kS45GhyVzs6ftNnKYizm1EVPQUbXsYapvbMVXvrTA63KRbs",
  "key29": "2hbJaUw3CEcEL98EpsSxL67Qf8JWeEGoB1Rcv5ZyzkrtG7aUE3456nr8APhgeNsiW1E6mBa67TCVgJjxmQ94FLJc",
  "key30": "3Dg5rxYCaT5vWGoysoMp4yRNEwKgdexjzKVNdngFBARbbmJdqANbKUgkCMBpgws47eW2KtXjP55TsBfvhwRu6Chw",
  "key31": "2K7LrAuK1R3MKsHTo92pa694wzTmyZPGZUfkZ2mKtYhLrUPc9DdYgJ6Y1xETHY5EjWdkijH4i9EJoLgLByTJ5sAC",
  "key32": "4y3ugUaKRR1j9btiohM2zvXzr5NgA1GGLJpMHzvYjGSUgF2wZF1uZLJcaW3i6KmqsaNB7vVdxNsuns36CJAuNDzC",
  "key33": "21jKWeTncUnvJP4gXvg9kVFbJNAchDUoonnMTWRppC1zZGDRzgTpmW1sfCXBUkQpAbjaMUtgqACFW6idtxtP1vdH",
  "key34": "6AhipnVPwrBvVRXbtmpfhk4yWp7m5hE5VWPkUZU2warBJR5Lsbj5P7a66HesNTSNasp5KFdBHPbksG2sYfuRjBu",
  "key35": "2NTKUqspZMMCnT8egfREFS1ZWVzwDGJT7AsM8DjHSoVu6XHs1jKhFkzT1TDppCbrtEzV5nnqRTcZ1dUVpQoYCRR2",
  "key36": "5pWQmHUaaPxAaM2kxNKFJu72jYwoDG7yBsGmUm6dG879ocCZvu2Spff9apXmg8FNqxeW7aDwDVJs6XUMAF4VRRGP",
  "key37": "4jJBorstzu33qvArrG69fGdeBcxoBZKnNBL996pz5rPPdH44FqkT3ossbHZa8WQBnEVoWRv6eyDtkLs8Bjfg9g9z"
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
