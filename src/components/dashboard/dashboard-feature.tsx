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
    "3C6K24AcR8TqBsWhNpsz4HJjkLctdcK7r3aWgTuKZXt4RiC2wd6V2hvDK7AxchQECkYwwS28uc19EGHzxyFZpa4X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fko6XNZWVD22ouvDvGrY8p3JsqUsrkUihPQ4Xk7mY4gB3enSHhALV7QDKMAsD4mkgF7zngq3j8dUetwpFLg1WfD",
  "key1": "5hRLpfrDaFCYmEhCMxRnT2LhxjPeNZWbbrdQBebHb3dKijvutf3TXg9p8dAkJPXdT41NH5VxTpPNKoV6o8QyAvVV",
  "key2": "2rYEvjohQE6ae967P3xNZtQWS3o8LdCczdBChCfD6noFDQZg2SyptxvQtqNVUynnd2ED4uJF6Zmq8qg1bcHQWwLY",
  "key3": "2E2Zygsn1A1Z3ktwZMVQhsiyzsUb7T2fPhwfxneDpR24LXfxk6Gd1rCadsw6kcg84jXzsEh7f274bBM1vWfk1Z8P",
  "key4": "24CoEuaf1AGmyZuAPEX7F2Z3EEQY4jA2jNvZfn1S6gjcWSpeD7L7CNKAheus1PXPAXjVmftBRF7zxiySJdNzBzAA",
  "key5": "4Pt74jKN6jwhgCYcS3FW4JbUxoqDkuxPiQiCpee9AZESxK1WjhXo9J6SpWbdg99tzfJ6Nepfdc4Mzm39F2oWqndc",
  "key6": "3jF4eZftjs9TFWxQNdBpTT2KLw58F7Sa8LMSUPSitrm1TTqTEfGEL959TSx2WHwhjtnM6PLBLPEg8PgMz9L2Z8ME",
  "key7": "4qwgcSgmunRVffQpCE7DwuVz7YDGnQiSgi2vQUGzn1zc6X9zLBmDc5UvDndtrnX9wyesA8m8CLbcNSoFqURALrG",
  "key8": "5geGrqN3ZRqDa44uHJAAiW3C9WEHPvtirn2Wsh4k2qieo6fVLx2Qtbrjo5EMwaZe5ctg7cZKKU7EYKShiqwVBGLH",
  "key9": "b5HPQ9ApxRacFbLq6hZfxeTeBdAmXVacyDuFcZneeJFDRxtZryN8u5AWZoavswgRNJyV4tyeteVpK1vSJK4Kyby",
  "key10": "PvNdKg1kPMzcVKpwNgHGHrSsAMa6tEjZE5jJtrrUsRqSnemFat1uhpjqydnjLHocvRHxdCqeAuzsN5h6EC5KCii",
  "key11": "2pd5v6UsAWsF5WYzY4K3hEipMdg8PSdys5TRE5KT9c4k59nGry4CjfQwngFJSwmbPywLzoTsTEFwLzCX4xcuZkev",
  "key12": "2GTHVkFeXv14829cwJjsbgYEHFv2WdSSHfKsfH9ht9CuTKrhERKKBQpmKiGjUe4B9JV9RpgWUnzSqsRz967Szx6G",
  "key13": "2CmvwP7VHFB18BfrcBQTXBM1biRBxWehFVLWUUPd1jLQWuBh1uSZCy5VQcfYrHBvzM7Rm7c5uJttRdihUsxquwgK",
  "key14": "4AuJutDV6bgZau8xjjrMMw6gufQ8AjGHau8ksMKCSFHfpijdRTZxcq42wfwEME4fGHvmF9gVSGrnuKNSRYdNUKAk",
  "key15": "4exMjddUne9UJogvWiYC9E1yiFfc8K61hPmjEqMy6cvcXib4ruiZm5fieA4r43n4sCZqN3mHDqHU3JX5xPkNdpeD",
  "key16": "2ryUAHtub9nkM4Upn4zZC6anUDwS7GoHXw4Jad2yVYRxkAkZzzFWHTrsWSphnuC23avE7bD7iQFoo4TSEKTLkhfu",
  "key17": "W2qEP81qy1bnDwJ349LatfxRdvVXvQ85kbhTqYRdvaaZqrcPTtbkN9qCn2zd9eT4pX6CJADwdcNRfM2pCcTqFtP",
  "key18": "3YrWTbyVhCj6oPiXGmtULyByhxRPmxxiPHCRbvbgveYTgLZ3WbKXVuV58VxpTyFQbndQwjfE1c4bsrQxzqDto5VL",
  "key19": "576YHVnu5J4RNd78TEJ1MuEncMDkMfj9ixfiUkrrdB6ZCGaGuLepsAq1pZjTAqZpUKMcdXPCb2dSsSD6VGS1Dh11",
  "key20": "4UDz8F4yGxHmicpjaS5d5t624eVroyr4ZmaB2oc1XjoxX5cLRb9TsXENg6ufB74bU76bUFr3PdQS8FGNzJWAokVb",
  "key21": "4dJHdUKshqMVNU8iwdLJMasHyAPJ7Tuh6fGrX5sgKKwcC5D63SG547bwDDYn2yTWrST77xmitJKh8FKP86V3PUN8",
  "key22": "4UedyP6FTaznSWwtY72Uz5oTXxY1VdbQSGzVqHzEok7Ff8FV2jQMWyrdHpRfGvnNYjS2QgnYTVNHYkEN1ojhRkiD",
  "key23": "44gVaUSXR3xRpdwc3RcWC9wtwM7YjGqQA3njzBnERTbpNuKznLx2mTrprPvNscx9N8SKoQD1q9UEHJv7LLcYYecX",
  "key24": "6Su7H1bmuycY1SLWBzkBCtJ8GmHZie47KahTQB329rtgXJUGvELGVHb8ATtnEsbeDhcBb8GAUomdyxDVnYGWufY",
  "key25": "46YNwpMLFzgnzeZ3kioSwgpXa5e8eG31adrpeM6149CmTVtyCUEABe6XwufgQLyAYWHCArqX9PntguuSz5LJdvzV",
  "key26": "isV6UjmiSt6vvZYKyaFK6JNBwJMGKf7vujrgx5ifcfThkmxzskAx3USMDJ16kPVh9RqrXKamTdBpC6UWTSkAuY7",
  "key27": "Y3hZgGSNoC6Z3Wri6cxYxXHBJHQN9wKDtVampWLs8TTxXJ9FXh1GKVGD9PsPtuHxn8ZDRWDomGLJiw7YLyBdh6W",
  "key28": "2dyPZ8b8cT3AmM5dFrinfyhjft1pFuVA2R2xgx7wUUXjtEXma7jaRiapFHgxa6AE4rJiypoh6oRn4bvHkpTeH8JG",
  "key29": "4a2M1irMjR5s2it9dhsewjPti6pmWEyvcwd8VjZ3Pacsqfd1hyLzpoTDagprbh3zKP3F3buWMGLUjCmNyBGDf5df",
  "key30": "XbEdA2p4uatTa4JdAHjxifMJ2TAXnk7iP2KfDWmE1FgRrrCyq5E5omr6pcTaoekuauT9WT9GBiUDV5RfgQpKjhU",
  "key31": "3AZM8barwTFNLEyWaXqth6bPJQRbHpLGLEhnxCiVdHJFrGpvsjvayuPQPs2VL22WnWP2BbF7gmMbnWndHd7fbFz7",
  "key32": "2osq7XurkvPb8cXURrrRcw78nwmjTrLgtNdBC71v5DgECGVknEfcmKxzvz9uqm8WUKY1tmvkARPvcUhErD324q9c",
  "key33": "af2Yy12NCub6fuw71j4Nys4ZtTsQfNecrAuUVraBJJVcXEFhMnG1hB7ZA9GPRzhn1m4dk3vk5FR8u394zFbZW6W",
  "key34": "friAN9wadKSzmB8kkjEG72VHQoKXSDJnasp83tfjj6KMo7nXBHfsciwibCHFANYKrFFzXKvHPHhQRtqX2PMN5Qa",
  "key35": "4PukyvDQBAxjdWG3ZzCXMycCWDHLE9Wy998PNWKvU6i22hryDDTdQhzSUT974Pzh7JMatUJfzkV1bS6xW6sEULKf",
  "key36": "5V2yhFJQ8jn9XYk2i7m3MA9KjmjUUR1fa5xnVZUyvASUsEeUqSHUB2oHgeE1rFrMeaUGiqNHJKy6hGcgByoJNSHR"
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
