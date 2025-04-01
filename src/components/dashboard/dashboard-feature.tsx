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
    "4NxaVCnvtizGa38F1kN9nh7KeD3j3VnDGcX5XyeyZtqTuw9PtnTXgXbjWPyz46XUSnossrCeHNpfC6563eeCJZE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZFfDPRtSf4TE7m492CxWVNw5SfBnjNv8c6B8NP1X4Lk1hqbkLgGJLbnw5nw1jewCrYsYs2K5mAc2QBHntXWegNt",
  "key1": "2PngV81xDRrfdYMniQ1niGzomY57yAbGh1qUMvJZx7TU5BLSkqvCLedYtMVAB4qsDTW58aY85yB4MaYKVSmLJt4e",
  "key2": "2nKyUw24xpHXj2yBZbHnqzUHyccA5Q8E36LS75weQxM9nZVhiKjRJmmuy5PACtz74TyrbyEm2ezAXysZGWzdC2aR",
  "key3": "5NhQRa47qQyGVjzcLiGSoKM8p7zrDqu4QR2eCwz1JjfYBG1HfpH7JcpNRBdhW5j6fTL4GGLzjoH2LU3nhYKzBtK5",
  "key4": "4Jm8Z46yaA571RCRgNi23ZFVsCVEDoZXG9yf8BLJ1ipzgqGkD4a8barNwuAMcmsrRDe92wvNTKAaUJtsXfN1ozBb",
  "key5": "5PQStugpByyddFpj6QMqzsgavyzqHKouezp2krmKkvq5uuDQpSAGypm7w4BfsuXN42EEdicb9BdX98ajbzdLHTRN",
  "key6": "mPPSyGhR64rfxMFeacF72mZYPNvtsE3VGEF9hpmsuUEnktSPcLJcEFwt3se5QSR68EGGgXrj3xndiz5s13HUFTa",
  "key7": "3y8YeSKNogsQAXg24KmtTbEhFU81mqjtfBqBffT3XoKmu65UjvFnGpMYTvLdPZv2FsdU1NNegXMyUxyRR5jtJYhP",
  "key8": "37v4r42mptshPaWdE3oZtvGM5BrKTq9tn2z4xQaLjhS4tLYy1eb1Fwq77jJvUiYPoV5CK5FiCmSytrfhwMA6HGMH",
  "key9": "5SzQYuP3NzC4jHYNnnw8Lv85Qtb8ugfTP5T4LVKwrGtv8oBdCx24F7CTG5UDEdQVD9uou219XYaCJZwMLNTvrnxL",
  "key10": "aMREs9nxWpkcLYhTzTTVegJUC5QhzsUeSwvsyRgmkFttsjXEfgVKk3syPRn7cBrvek8taKfmypbgWJyuQpVK864",
  "key11": "3Uo3vpZHiQVEFCPpxuUBCqZXmv3ebPGQvzea1DuUfULKkc2emrLXEqeV1Pc6eEjGejFD12KYoZZbAN8jBqPJQP1V",
  "key12": "2w4hoxPuddx2v46HYehR5jgkpPL9LfnjpgJB4hg793AjLYvn85DjTEznqTtfM3AoxwwwXoktSC5A3Sc7HyTuCxDX",
  "key13": "3ztgG9SgPibVwBLNrsxa1oTrRjd823hgf13zqZMr9jnpYishQHh2RvvjecKtB1FecHJavLxHQa9zDKLWeXs5p7J3",
  "key14": "3XdvtD9taAHpyLmr9Ed8YiqqLVxYQzGCDhbhDbFWGEnqq1W9vRrApwpJtxruc4t4Vywjg6DRTAUy6FudSy2PrceG",
  "key15": "iuRK4AmeLssmgctozZ74rqiuKkyoYf9xTPsGS4jV85kQVAqWJCJfg4HnQkhgYEdpSB7fkq1pBzfEYfqXxUrbyLh",
  "key16": "2MkBEQSwPYq75hRMiMmZfug2rdcw9JsGWdtWwbrCvCNFLkoXjGmxumiCrbZN3VBbJnp3ErLTDidTqf3VhFXFSXSz",
  "key17": "w4gxouetoMouasV8nfPmMkVN4MR6QjZ12N6yqHU13YvhyZHh5ME4uDBUe52DnzMhXdRyAxMW8fGrinqd6cJg2RX",
  "key18": "4U7Wjk7Eetw3Ei7ogTGvPgDKYZyhctxtdDSC4aHUrNjwpnsSWYjTNopLZbbDHBPsAPhv9xDC1SbDYQ9CZ6B2ModA",
  "key19": "442SRvmsKfHCeCcydFRLM4vFGkDFrUjmvajqG7qmYcY6ST4j42hrv89R2qNoK6WfxNGgb2FCa6hA6LvWd3jFCvgw",
  "key20": "3ecyMskvL7kErgwGvkup5gKXBK11FtDgi9CVqqGPdKM6RppLcaMJSSbVyCD5sL1iPCy8v4wr6CCVTK4vziqjkMfU",
  "key21": "4WcPmr37hRELTuVDzdK9QYUTQCt9aZp37S6EVESYzf49tAVmCHzhcKq2kVBLbKL6CmgdsjZS9JgmA2We4kVpvfQz",
  "key22": "wJ36ms3J5YidnvKF6qjY5ChbVPSr3GHcVdcTHSvbDuqA992tmad3PKYrxz6fxJHSj6KtQMWmNDu2yKwvxtpPPVm",
  "key23": "2nEck9TPMw5JapfDpajeJwEczbBWFGeeXbt42mwt2TGCm6yi6chV8acYNcfxD8ToWpruhWxy6EQVMGjkg3XUK6jw",
  "key24": "4YGXdQmKxbsuWa42TrEcLQKnXoCFqz5Bv9FHrPH4VrVhpXn1Vpwe4GvxLHAjTBezU17zNrwKZ2NXyw6ym7yKpKVE",
  "key25": "4tPjrDJ2QAaVAcd4FXrg18fssWcabgho4DvnVc6M4n6tDZbi54Ld1dzmbc5eTpCNEPgcXJR7tThveYUxmkr1g2cx",
  "key26": "2akbgD2GxaFRx7i1VwHdvYgTyVoVi5ChCnqHFRB8QxLZn55P94wJNSQtpWoYuNLwSurTvokec78N6hYKgoEX6z1y",
  "key27": "5XnmUXbeVA3fpt4sL5x6TQ5D7gcsGEWgJDdXqN79dcivk7yCjX7CJX8aeFiusDpHrU6CcS1fKWEzRnTM6DdbadMC",
  "key28": "2JuY6Tjr9Ey3m5yPhspo6QfWJzqPXf8fYCBHDzE1Gahn65igk56WbcW9Lesar4UFpUq9o9o392ymoGYzUkge8rXZ",
  "key29": "3ajAJHszPS2ZpmCZniNdFSSoWmXXokzh1sn6HV29GDhq3eFgvkWAnaNcvLUHPBAQMVKqGAXRWBoZ6RL2YdUCF9Fe",
  "key30": "5WhEZcfCSNEb8cM4gQaXhK4x4s1Ju7Xa9zK8Mr7BEhWXiH6C4WCu7czGi3VV8JvTVNnqXb2bWVX2e97jPN8ddTsh",
  "key31": "5AaP2o7LVxLuCHsCiWQT7yXRu8gRDNJwhBFyjMPiG9gQts7JaHnh2A8noxBWjXmui6MrPAV6MknwUVPeQqcb59Zq",
  "key32": "3nw6T5Sw4itdzMqAADwXU8f3Z6hdFbGPK6J9dbpLihnmyKN69j3mc2gy4tY8Ju739FhEqgoueiiSepMVnAMjEDk6",
  "key33": "4WkWwio8xurcPrTN6SwmGf3y3u8BsisDWfKpmUrHwSckcFCNtPDa7TwfRwVwUSKRcA6j7qNd5qVXajJycG5RdRYd",
  "key34": "4qUD3xt7xtsTvFwYa3ASQisiLgNo1aRYnpRi8gQZaSUWQJcAW6FKJ3DHhxXxgYQUCqpdPv1hgwcysscVpxyJEULb",
  "key35": "ZHPSWoNbi4pECUBaLpTaWqDftrpwfwaCxrmjqCvc4WeaVMMRYMSpzL7mVt6zvFseL9gf28KQrCzH1UG3V8k2pHT",
  "key36": "3fpeYhB28m752ATZ5hpVMXvZ1XFTJwJtKT2uuWzZCfCqAuS7PyVgg9oFuVdYA8hbVPrREj5fYbrcDCQemqfQgn8B",
  "key37": "2EqUH678Sb8ApRmxtGLu3mjfJhCypYvKX1MBZjr4wkPe1VHit8RBVw5gx9uoobXGnhsd9qjn2JpEgsnJprEoZEKx",
  "key38": "5QyfbWsEbMApfSnpqKSGwnYkVzB4Uj3aiTBCDaKQW55tLBkuf3YdXEn6dhpBFK49Dk885segbnfKSJpkhgktS3av",
  "key39": "61M6p2RV3DPwWzgvMkKbbNGqWuXMwHJx9YPGKKf6h4AkVQZCQb4TJzzfSmsCSARxbRpvEgcRW5fFkUR56AqUTxwu",
  "key40": "5TeKzz6o5sQNuGTQT1rH5ZNxDXq4nYhaQ1GKLHTnUJozMCSpRb9QuG6RtbBVYw3MdX8AyyKf1qMJ9z5ALDx3ni5G",
  "key41": "2iXSQWqVScKEsHXWKRMwovhQ4A1BjSSne6zmJpLHJmGZTsm6PCGxz4UiyqVSh2eByxamkC5EFzPNu4ZfodZJsGd",
  "key42": "3bKj9NjSSThyZqWLuXT8H4gUjrfYGf5U35fKMVNBtGLK1ofwtj9EP34JvxA9Nf8FpfRrWQUpw4cEVDtq8iWgkzZd",
  "key43": "43u2f1BxPGiP4PFW5PB9pSnnHV6WQUxtMeWoUouTXp6S3xCAVQdoRiAczZ5g6ecWrSkkvaSFUpefNE4KmCzJ4weh",
  "key44": "47dtTnrTtzxqc49riRRpidd34Q67UtUcg6E4uNccHuC84hVxF5ctKkVKBJwvE84UEZCEZ6CVm2VZLAn7jor986Az",
  "key45": "4Hysh1d8MfsQxAuEKgfW7nqme9p2ri8Uf7uAS85xaQ82SgZw4CotJwuH5thQPPrbrovWarTDg2Ct8LTnJm7aehMQ",
  "key46": "J4XPwaFviLrHTRQ6uSEVGVPu6EEygLSdnuyfTkJryQc8Xkt4pG1Zuxc4Ymk4Ze1GZzdT9cpBGmtR8H8T4TvS5Er",
  "key47": "2xRiRwASUEUGoextnNdJkeVTkYJXa1kwtaqW5paTNZ84hm7M1zZnLxhJB91HqPSQECWkBEEBN1UuDAhKca6Hpwue",
  "key48": "4GUjt9wQsK9QB6LhuJef14cSQn9N573nMnU8ZJqP2efpKTwVJn21DPz14bo3epo1ZPYJUMrkuYD8ZLW3nFV6rwxk",
  "key49": "28cHtdbWV4kkRW78FK9CKsBbizPaV7ppsXCKxURuWMH5YQtd4zgz86gwZJhf1A2xxN5j3TScZHhw8dUf9TQ8Toz7"
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
