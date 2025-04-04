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
    "54meAtMMEoJXMP5e3zspUFvcjjjMc2kk4oVR4V6iQEBXpB8hcLzEc4HdG13mJSwKoABmsq8VYJbf8uoayR8H4x94"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Lt1QudsF5qbDEnNLv5YaKuZV5SEBfb1cByM1vnbzGeyCrnFfyrm4okioi8QXoXFxMQz3rgVMgWFHmKC7Dg1jp35",
  "key1": "2dAZDtFXHSEy1hJihrj7DmnJ7yZt8KgjSvF2ue1nZVdZw2TJWbskkXSiK7Q4VdvriqaYqXTPJb3LeoMCuzwET6B4",
  "key2": "4T2VdTRvebwYvxsrrJhFoqD146MCR5M1M6YvxCubRte65hFFsrBa2Z1MLHhtjSLcEBant6unYDEBM8KBAS62VG1j",
  "key3": "5rAGcBASSDHAyAsCJFvog4F8nEGtUrt9Ux6xikLxqvZ7fqigxb4c2vWprt3gKcKRug5qVfq2yHpkYfySDLVtNgL7",
  "key4": "2BkHjYPea1GeFsGhrpusZZCPp39zBuruWX5LeupMKtgixvqvTEtvK1hGp2HwdPfq9jWz1iRt8kbX6F3JMAtXBooa",
  "key5": "3ThXRz1WcVx33RGQEC9V9PimYGrLGvv2jMKWbgPYHsFBfdQZmQCSWbvvDGvVsyZq94TPWZBvWG5Erp4a3cV6wasz",
  "key6": "3hvtazqdNdbmqCDt8eDYnswRe9YVfKFM8n8rrKNeebMahw9MJoesy51Qs6Xq6mLvaXVQ8evgPLDnFeXRYYwYrhR4",
  "key7": "j96Vtxvoqn7AX4UB5iSZGXq2cK8muK9SHo4i7p95EMbHwoDEHTHfZmYcqd9cqJJFyc3frnTWoS7HV1dRhqJ7EAW",
  "key8": "53tvVL1AF9pjim3RNTDxoiwTvvi9DfnSdSsvWZxm3Npzskbm7Y4HXZbSsTmrMxRjTeZKbcDr8U9CB99vBsj4Mt8J",
  "key9": "648oeYTkfS7zUq4TuhRPtEmU9VP7znJecQ9brd5mbsvuZCECzgoJmpvDmH2vA9Prv8qfobDyYFNnShPBhTukyZaE",
  "key10": "4dFQtDnbyy4YJqfrZEFeDvvyputX9Cmsie3mPZwMvPf1Y4JWpdui4axxfCc8ihAcRu7qJB4cKQxAaoDxa2cdH8Pw",
  "key11": "4GuGsQuCFZaydxXR6aKYDtATEA8KiqTaYjGKnC1vxVTeyxNsKqvuAsxJWa8bhmorFBRCNidoFUzGwZAteSK6Hxnu",
  "key12": "5KoYFkwzyTbEgKEyPXG7x7giSWEupnjFCdcnXc9fADSkYvb8pA23Hx8Zmy65Lk589bGhmQ3JUXQqBydL56iQKu4g",
  "key13": "3mv769TzRXFcnZZvrPopNm2hHJkeF9ZGJx5zF34yiZCd1fEZ7gUiuFU6RhBEX5Hd4aCKbgp4Lcn4vJWio7JXwpss",
  "key14": "5cJxYrZ8zWi5haXkqwCxZnaSQXLK75JFWkXNgohqqXx5ZSDJ5PHYdpNzafMePX93jCHEKvpeN5kWAkc7iaeUe25D",
  "key15": "2JGiZhJzSURZAk76SMsjzAuoJS2djpRLTnhaycjnVsM9euJxzPEDModxDo2KYCKZFPDjLyoGLbBhPuT6S3htxceu",
  "key16": "35VhQBQR38W7hMG3NzV3oYv48DZK1kVLky5WV4RP9hM28skBtzH7Xk6EwTr6beyQYupv8YwXGar8hucwjqj8iow6",
  "key17": "2tJVwAApJJNMM1iBDffVD6srNjFSHdC2ZTSeV3P75apZit8jUJKW6xf3U8RxT6DAWR9MHi1iwQpwh3fn5FXYREYb",
  "key18": "4m4QLXVQrkq6qxUghyWX8hXys3yuZjx3RtZMy73TujfdFKDLfhMkW14dLWivDYNyJjAk7hcDd9QuQTcvcdUT7QHV",
  "key19": "ZH6mnmFwUgV4yhiVVkLF3VGRFBzA4PvbPqpP85yKH4ncqx3rKJeBukKV8JUwrXtWsF5e8js4C61nJEFqG8dw6rm",
  "key20": "4NKiDiTfoD4VWEcHQPwMESFigCYzRJQHzkwRtAKUtMjbAb8uwP8BgMoGPvydECnVsJaSfyZKCSeqDyYmgE3dZCWi",
  "key21": "2PUs2zZRwhwDAsrmtZKXZA5QnsYzXGZzJQCd5va6VRAZp91ozimSF1wWCacW6UGG22puk8V6Gk3tzDFkErHAC8hp",
  "key22": "2jqns3vQmQu2ydBeNLZUVB5q3R8feR7ZmbuCq4Fs3V9ohtZJ6LPfokupDRvzmQrbVQwJcGr7tXjFSZzogb4Wpy43",
  "key23": "3hUr3KVG5LFZWVFYnzHSLQ9Ji4QA61Agncwkh9yeiir8RHeE2fqQ5VqUYgB4Zx3eKypZAfkAed3QH1dGY6WoKENr",
  "key24": "zQZz3p1mbD7gzyhKc3fECRmDXb6F4vgtSTv17snGpGyRxuqQsUKaqW77tjK7mCjDf5UsEwpZkBbdFkASrEt6dMo",
  "key25": "63fuasPS4CMa1wzxjS1M3tkYCMgy9xpihNX3unSVCvh6jZ8ovcfJ8YCKwEtr8tQikdK5C8ygobPyzjPQEHNqGyu4",
  "key26": "64o7Ug4kMCD6YnZtqkX5PVZDXuARjbxvqJsGaPEzG4hra7Zt7VZ9dNDpYB2MeY18QqWrY5ENcmmqiPr4k9AjF9Y4"
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
