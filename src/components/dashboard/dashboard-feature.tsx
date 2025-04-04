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
    "46GZJ4n78GZaJ2vH4Yjw19myA5JHku9kCFRidcKUYnutKf91dzJNB9fENzFW2ToEpUf2ng6UpDXEocfgbxB6dhsi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HG5c91zPtGNUz5VbC2KATMDDSmSstZWXMeYB48SxArk3tBtLPkd5pmsGbQojDvQ93oVGcwftBXB99Xz5umD4fJ1",
  "key1": "2bTguLVQz32g1Fj2HXHZoFfUDnouxHAswbsTuUcceH2PDwkETJWBYRbfa5dAnacYvqVHnr6az22q9tYVro1fe9Su",
  "key2": "5WSJMVXBaSeyA5XcjJkz8fNz4gdjdSWQTEAhdFq5pr8EPQ9CX3xR4LMh2rLmSNnkAGi8mrtFdyrkM2JFCjZNn2T6",
  "key3": "m9QdKjUPUdyrsyiwAhB1atExjNZAwtccyTnHLTDtSinJtHm6hMDUyFq1GoH4AjxDDoerhmQksDn1dP6SgXnfpkh",
  "key4": "5GpUgN3AmVgAEQKYSUELHY67kx6rAzTMpzvck2o76HxjuXDsTFCDYt7UstfxgNZmUNvWcx5PCWQdvoUDY96b4qGa",
  "key5": "3fWpKg4Erj2DAnQYxGu75384wD5Y2p2zq5koZuoPxviecSfpFLq1eCiNMfL43gAqgSQehVJTokfznK1LEPjWtTca",
  "key6": "2TfcyRwG1vLNshFmUZuaEqWjkKJLA7o3eKAanmvmpGR6CNu76hwcGauZ9DwHyYD1KeEF1G95cveg7z4kDdUtqUBk",
  "key7": "DcRiaz63taZVJXGbP7nYgDfxNtXhWBMuPfuDEqc3L38f1fgWLwHE9njyr95gpgkHVR245ihu8h7S2WAqmNiigCU",
  "key8": "KtMwTeqkk3KECU3g3YDiPCfKy9HgRNfCXnAhw1GBEt8oKyvamPQckFivUugb8G4UhKJQVayLgoKNjxg9QiXmzEq",
  "key9": "3hUNNkvy41VqyRfZbbvWr7XKXWYjvCADui3dgbZ5369xAYhWTGcPjjS6SGTpogm75ioZH4J8ckxxwQa7kZpmuwv1",
  "key10": "BUffghBVD6fi4neD4hSHR4eMTtiGbxmhtGDKN6NnpK7zNtB9BVAEz2sfbf6adniYvbcVPBCLxpHd2TeGoV8AFYw",
  "key11": "2Z9rsgU3VGni6WZs4XD1AbqaXrfvvey48ewf3dnT1u13sMaUqeTmKym8ibiw9t7pfACaMULLoo4AabJ8Y8VTmhn6",
  "key12": "R48H13zfaJsxCQryGxLf2SwSukwBTjjVU22bsoZi6EXBT3uN5HfjTQyjWhJQfyNPV3JKw6t13RBQeZZWgunMMNi",
  "key13": "5Y2DEpchw7oTWZsDRnfbNnavV11K7b4M1eBvoZ1xCxbWXMyf5w6sdmhWSyyKaXcQ2nZNmgfxVANDvCuBkBg8Zbo6",
  "key14": "4sPPAMPRPkZDwCdxCMbxQbfXRwyzGKkq3L6bmMSrp9xefjCGN7uyLtmUsQFxqgdXKMrcvbWrZK8YtUUvmiAh11Z4",
  "key15": "qCXc8RmT4xrcBW6j3zyTGGJCqpSYVrzBb4qy4dBmp7BNJ3AF5gWNKJEnZnbC2cLQTnjhPYssrcDk8DFUEZEYrRr",
  "key16": "3yQsj9QYLbv6pqK3YZpeUTsFEJsdVSmUygJgQcvsbjchGneWZyFGdQDNV1WqSgYboPSTrrZhzu3GhiXaRKWSQmkY",
  "key17": "aRKbgrrNfXyawYaMJYiS55J142akuSQ22ZjRqryaKmfXxEXtyhd7zmg6AZpsvG6nRtZotZNEFwZcdLnYXX8Dr4D",
  "key18": "4NZManQbxGbVnxZrB7rKKgeZ7kbVosvW5fBfBzP45YvmUiEthRY9rLSprwzGtWFcWysXTSKjZgoTU3PgrM2k71XK",
  "key19": "2yNhCEgJGBSBLgAZ5PmUrmDjFLVJmTVkenY4Pgh91rsGKXaezbBx9EYx8EjhdSFudYpr5oXzbMvd1jfiwvD6SWrw",
  "key20": "34FZNBWiCU3tFxtKJz1CG9vH8zyy1BSxaEVVz5UL9BLB2ruLUb2c8kR54Ah1B2Uj2Gwgs5d6oJn6MAR13Ya6NADH",
  "key21": "3dLuwT2Yi4XaHFQrhSXb1hgQM68aBMS9W4yXtZYnNN2GyvQSSZAYtyjQhRhRgde8VvKMpfenMkrFic8J7k5RsbBo",
  "key22": "Ak7j39jo7yrkJ1NSuiH8bb7TMzJMekA3nSZgcyykYnqpVBfEyZxGef1BJ4PRHqjrxFEnksfgi2r5o3VckhSFe7B",
  "key23": "4sNQPEqY6cg6oBwWgNuSTCN625MXDoXJkmAcgJf1fzh3ANcmG3gM8RjJSegYUX2g9vmnNXeJRjfi3CTTCCStRmQ9",
  "key24": "2FtoQQT2nVX74GfiytTMKPXv487becSXQDKX5WYQgUpC48YXrjxbodcDnkZAg6i5QE2L9887E9UpM28WNnGnHRe4",
  "key25": "4EDXYkZUwuM26EvssyzZ6wWUdQKDHnSeDKpTKDJ5JVoQqLHFx2JFFvMforZDkcQa4qvN7HebjBLjENSgLxnR7ErJ",
  "key26": "5nSPRoveBygYZKdn62p34nRk7EvkPhQcZH9ZncfSGzQC6aKwyYzukGBkt4eFxK6CcHRdaxVN1XniFdPxyFyhfPvB",
  "key27": "5VrAcxbDvsQrf1NFz2k3HF9EW8doTHP7EhPWML597Q3xzbNQhGhVm6taF6HhEj51YYtgyuc9eEAsobJxVvXU85NW",
  "key28": "28whKivMbf3XkyFXNgChKzLhs7VyLLBHzQijndQfGmJZrpEebhBEckd56MKxGLfT9KBb9D9aF7LaaPvLnV63YmEW",
  "key29": "3W3MU7uxKk8XpK2EvBQJ4cYftYvBK8i2nATw3AfXVocpZLEaaQojmAdgFTeY4MBXDRYq73pYfBsWz3kMQnk25vhd",
  "key30": "5xBXkB6Z8k3tzCQzD2wVSrof7ihvJE3y1PndnbXmCKJYgybgJMP16hJ2HLU9agjtYWYxV6Fagg1nYjtTxb1ymAjU",
  "key31": "3u1e9WmvLs1qNN7YR9fKbkN5jYfLuTQG47dv8LdKpomnRo1BKVYCwkPVDKsBtUpbNtqUc62oksGVVcv8CKUBpRVw",
  "key32": "2nmuoPyiEAcKFQT9xX3ido6Jg3tKP7e3yrrBbyPKz2oAzJBd5cxNawNU3aPx2uWwpftZN3Nf4E7y6m2NFestHXDS",
  "key33": "Ucvx5DrniCnfgch5R7ym7pPLdMKAuy7xcgkJiS5mZuvPw3nBXTSkcQRRoMReVZYr9Aghhd6VzLiuAmLos4rXKEe",
  "key34": "4tc3QC1Q6a6W5AzuZh4nGVNdyoVm539pdD18gPLip1wtf3QGjpi3bpKQZZAHuez8RYo3tbXayzDgKGGF7rE62KnF",
  "key35": "5WNg8qzkSFA7yV8kc5UrceUDnZB1q28TFBUsBxLMgqmUi31DqB5Z6DHgViMeJA7rpYrh7MKiThuAo3c9A8X1ZvvB",
  "key36": "CdHVo5noWEi7jjpaeg5hiDwXCxDcv6qv5msuCvu3PzxyqasQ9cyAgKoX867R9hCX8ypfs4kjtk1bVCuraZb1JJS"
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
