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
    "6UtHYWj2SZKSp97ewToeEN3WhLcD1FesobehP9fhXmMRTN27t2dXkfyjqvjvZf5QEt2fpserkgkdbg9FNmgN228"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ud8E1Wecj5YmPdp8NfbJ4KSj63k9YCeLSRCJNXkqEGKC5YKm32JX7GgPLweBQENaCGJxGNw4r2u1J4ihvG6BW4V",
  "key1": "2DRn2rXdLiARyNRVZB4ULdouCMm5SVzhN3arb176sERi18fCXo7jdkJTKqqE3CMr37T5Las77YvK7B2JmBcPsxWh",
  "key2": "iiS5Z48tYtYmBMu73wBG24VGNjCN7PASx5uXfEZ2tPs1vNfTvfoK2yqDywyw3k9FJNd6jv2TooGWoDyKkkdwmzM",
  "key3": "5C1NY3tSqdzg24giAVZ9ceHF1SiZA8bxQVSZvRVi18iXb16qAVor2AJD8VKjTDJxeNdZYqE4ncnUbYLXKykj2yXr",
  "key4": "3YSZVfGSdQQQHLEweNhi5n2Ca8R1zmaTszygcRUu9jv4qcdxXbhKgN3iBryWzsraEdgUAgJTnbdjcFMTheNLrwff",
  "key5": "ZzMfoFqHGSczvgaHSx8PaSucqzRSHMbgwFmRDY2mrwCDwbbfb1kSY5iQUC7Eg5ssdeJe77BgV1tqpCYmsdpAfo9",
  "key6": "2GwQYsj8sfR4HAmsBiwEGiJuPdjuK5M4Up7qhM5tWurFNjz7aTP6788MtqcvRnJkbpYAiLHNF9FS25ko5bZtQyyx",
  "key7": "536WUWDXBM9QExbhQZJhj7rPLc8n3ocRsgyZgP6gYfD6vucKmeDVCmwcLeSFqQZTJZRFVgyuSAbdFMHCmkq9jAfE",
  "key8": "2RUbmdsHSGik2JEVfRqDSZj2XjYFimuA5zqRfi57doYhsQkcGDWViGuoDquYsrm2bxfyZSBuHYbA9GLRZnoLt4af",
  "key9": "3s4EG52P81EaNnTBvoL4koz5pMvXfGGzep3K66F8KPbKQwvkxrzKdqNKrdohq9USeD92CY2SZh8jm8mJpo7Qhizg",
  "key10": "3wQWs2qo9B9ngnQ9cTQGQLDDmuNwHDkuNqqn49B9aT72XbHPSx5PVxPMFiTFyc6GMRzmB5w6mAYXnvznrjZod5rL",
  "key11": "4CAYeDKGfyPcgqnpkBj9Mg8XsdGu8vFZXbVXM9ctTSjdi7iKQ9mWPGgLG9PSkcdCzgKPiy3iGm7fumpRG4io5FBs",
  "key12": "4hTy4HSGLuSX3YtTTQTKfrrRi69aFVrxxMkZQGv5fi8DYxsyRMmmscdESPdpi1ugPY14WJWQc42UcLwDRpj8sFLd",
  "key13": "515Brh4RmTfwqAAKQY2Toof57X34e2HsJm9h4ELffnMijierbT679ULQFJBoMR96wYwyrPvToga4GVm5fkEaPJZE",
  "key14": "5puPJVasoGEikqhXuP8hcxZNLH7XMsZx3BahhfJ8GKKepxj3hrBHmbC1fNGrEx7bBF4teYVzo7a9Dp3AyAVNU9Tg",
  "key15": "V31225VazY1eNuirU6W1phThTBDZH3hsVwitxNrBnvRZicdm9Wq3GCW6YFYDdfTAhi9xHrKdxDghmszSccqihor",
  "key16": "2AuftH9gyjEfDcWRoDwBxaxivQTy73CkTHtp9cKyJ3J2dFwUpviAfV1s6hkAEdCR6nirybDQGFJFMw2ocfZ5g2Q2",
  "key17": "mxFykQTMRD9d5PdjHtTfAkumoGtXTsEYTmm1dUTdmHpd19KkPMLUYsYf5NbvgNUGPvLW5L124b1NcW4Pm1ge1Nc",
  "key18": "3qYStFQQKsa66kcj4KqPucrC3QQgdGuGckR8D6pv5cEBC32quz3RQW3weRB8WtBpnWZp4XJGzHK78uWn8R4sh2n",
  "key19": "4XVHRVvW4VchHvvvSXFdW9HH6RnxwsicwPGqJCtFPKbZixpbxiSFYDxwHuTe7XGSNgRLJ62H5tLgc9RiYWHhujEv",
  "key20": "c9b5pAiGVGiwnf7nMjzwLaD5cQLogRDepw6tGs9H9F5sHzNrAMpcBQjR6GHTbrGryBFMHGQR4Z1wF7kDfwgLG3h",
  "key21": "2Y55v8aN5JoYRgpF4ymZjzv4s3ULyDpCTvSEuESxSwTNgxBh8WB9NV1wCG9wRY16GKejKHPGeQ4mr228tQZ3bW7w",
  "key22": "5JNQKU4F5oA1yUy8FmCtc1Gt2zpdN9UainqiY7Duftvm273Xcpre8rpsmVwe58cU766uwpJGgsiKAnD5nYXWW93D",
  "key23": "3Hq8FJJCFow6UnB6ePGbAPcnzwRtjzLqYwUonQX4EkPitA2YKaLMAjTXD9WNTBc8JSDkpG99fiwzXyDG1Jp6ZKCS",
  "key24": "3EAwmETZ5iMpsgA1rGD3ykNobwhHSBfSLG2KiMADBGVNdae8Lyy82CQgAGyFADutRTd164RPiPyLmuFx93sizPWx",
  "key25": "5W8KAc9MF29Lv9F5UYvSCNhvVShxUhuuTzAvgZvbyDkVTxCAA4fVibGt9NRzAiqKX7tQqzCfcLA73vNW1MKy9EMF",
  "key26": "3oErMHTc3LoukBbrXUD1pSx3yhBfG89VpvxyjAXWVLK4kC9koSMdxCWC4sGVhMfv5Qr1pTTh7QQdhECRPsgzBHmj",
  "key27": "iZvHAPEbWo6ATc37GMR9nepyDsA6qNFG1F4vTAn6hfpVDtaQuYohfxuGnwV89dL5LgS22ZKvMZAHP63D78oUDZZ",
  "key28": "4JEfXHjiQmA4hwTASxG2g9c22cj3uvo9VuSVNV9SfnSQHBBeGxm7ZGJkMNywqrAYPcSyYKvXy1RkWG5hSYWy9gRB",
  "key29": "5DGyyUqEe1crtTq4kYpAALwVCgrhf9V7jGAn6DBkVpkqAJSSceFJeXGiXW56GLeE7ASWcAySLvWpsKgez9bESTtd",
  "key30": "3sBg2tJusDDVbCmBVv67Ltwj3DAmrMViGF97W1oLHVWbxysRU3gW2TiwZsL6z5y5HvDetMtCreDs48hUcc5Jno4V",
  "key31": "Scsu6jsZ29ZN3ZMtQcRvenANJ9FHxsSEJY1zEU7wjaDE14agST18ApM5gWRgD756g8KT2JHYu77FC5zYQZ82WdW",
  "key32": "2SAU44b48vUpaGqQ2tXTDQKW2RQDbJhFhN2wivZN5v4DHxrPEEysJvzvTbw3oFiMsQGZVKVAxssUUJNS7UhPMJwq",
  "key33": "UPDaf3vyMkahWwWSop6zj3wMpZXpWHMs9MAocCTL2h9VoQdRARJC9zJdWRmTPfsNJpd8NpeSxGuEMRtcdN1zETH",
  "key34": "5Ewf7fZKjEHLqScoGnYmp2j7o6up8a8uccNJLXcu24RCLS73Bzfs9nDgGLffKp5JsvSuEKcdMxbXBpoaPi5pB747",
  "key35": "38wimofys6bbLxitRqCoHhXewqDrZF8NHgyVo5oNKiG3hAb7K9dmvJ7KQJEVr7MrPM6PNkQFcW5eGkk9X4xFynYC",
  "key36": "2e2TXHtMoBCEtAka3eqc5bQmBTyzQstBfQCSEr6rp4pegpDcN1tbJYw6WXDkzBbq7TKKi1s72th5JLFcBmJdjQ7",
  "key37": "3k7oAFmwW9bKacZUptkxNwGAtMam55Mejm6cxo5FadGV73uXbw1qpzz4isVX41ZgiGy8PYwMUAJJ2RqDm3Ab13ui"
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
