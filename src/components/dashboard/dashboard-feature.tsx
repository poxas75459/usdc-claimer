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
    "36JDsHHkTTabzGnPxzAGD5vo9vVxGqjC1Y6opKQCuFWNfTzmt4xGJWqa1U2mFkxhQiVQDdvaPAXXZWw63Rh6Tj5j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25SFoDZ3dk8b9k6Mm5FN235niiYUuy5xBXu7pgzwrewaiPi9oAGhiMPQ56sqkmeUiNQBookHdDGLm9N5FBtLG5e7",
  "key1": "3WdzeeFPEC8CAj2V5nQq8SiCKxhJkEcpmB3AnyPn42WmMn4vXqqQvRfU4wrBpF9ZVz7TCR17i7NhTb35b8mSSY7F",
  "key2": "3GztZdwnSnGHMHBhiP8HfkRLwWycaY1UYkGHXxc6mC5HpYcQxyEGj7H4FWxWhA4qmAbcyAvfSU8tXyTi5Qra2FZR",
  "key3": "3H688HNtmLiSXCqYAJ514oLe2JnDBh4e4YJ7oYG4VXpSiEyXqBcth56sPWVhA1ZSYHXAWPdi2jKofNZdBnyEn4r3",
  "key4": "4tz6nk5BGxGsmTFzZ3GcdXxqESb726rrWTuEM7ndL96xfTRLRVD3aWRYp5hZ7sJUFjjeo2PpJyhjYeCfAc7uaT5P",
  "key5": "5KEjWtTBqaKJLUB1yRwVUX3QY3oBUNjvDt4kcxXWSQHKDpnMEip2N8S4Y7r7xMV4B8sxDmMX6y64s7BWDLKysy8b",
  "key6": "4zi6NPv187NzqM9FFLGjzncgBAGQ3KXKgxJmzmiAuich7RaoXmiwgLhStM8MXFKq3tBoh7AbuhZ6hAXvZskfbQHE",
  "key7": "36qq6kEnXPyFbYGkj18rdoqkj53XiR5TUbDEwCjHPEcSLpMxtFfXBGT2CHdzE6MMy7vpGyXzaHSC7WpBWt6e6PRs",
  "key8": "5JsC6KNc1xBFbsJmK83tAx4fcKHniqh8hziqusqLyvUszcy6h869Tggbed3cwrTjC22Pawpyh2qtyD2yXvtEyYqP",
  "key9": "5BVhkSQ2fXyf66gmxFoSXBqjcSXUXRXPFAEQPLyaAa18tdGdW7748q1aSTohsbu2HU8aaWm6bKcgwRpAtu25WFbc",
  "key10": "4Bnp2MdCGCCbCXCy5CVK3KKzCq4vUMw3RFJ7pDJKJWRqtvadhE7c1ZBJdBhh67LdeSDvC4AksYJAj77QAJzmrNuJ",
  "key11": "2WH6XRDkbXxwba2dVZSXkvh3DxETwX14CJFh2fq691Qmi9Lup99it6AGfkE9HnByMFx7YA77ACK1B2LKXgrym3oM",
  "key12": "P3UWQTDYABjFJM18ZGmYjTbgKSASjPZFQofxnU1QxMqSzA3pLabFAvYdWunSQR7pgq5WWmECnzNwbE7xku8P7Ko",
  "key13": "3gNWPbq2KsA5tvMRTdoisScGFyStTQJaKCNJH1286JbWUjptTEtiaCFL3j8Z8QTmCpe1cHKHqHNKNNzj5wxFgKkU",
  "key14": "2tCmCMnRKiw68sEE6LmNKw2z4GcEmDbZpLJYBvEtkpjYbuxDxJPzkjE4vHcTdCBxhbtkqzeeAQ8QKBhgw8W6oYa5",
  "key15": "5PeFc4rxFk22teDZvrsWmTKRPKbFRcmCBAzNMAXYDUkdzDCpEUnhJrQKZJ1mYokN1wLH9f2iQ34P6zuCdvXU2SQu",
  "key16": "mkTSVfZQGfUQnZbUZ71R2KNXcKD5rzDRhSoi6MpH1XTTueZ4uA5ZKCHD8mQRTr6uNL8VRjoknDUYGNTGs1xMria",
  "key17": "3ypRhbUwGfo6yxeq3ahZqoKMNpFx2D82J3neGogAcmXPRMGby3xBXDAP88Hcao3A5iUZNA7P9coZ8txNY7T64GwC",
  "key18": "4LbK6XJWXiy58X5GiCo9KVxD5s3SUVneWez2L8s2fQgfoZKhAngWruPvCQK81c5Mted53B8CpNb3bAJPU8SHWuhj",
  "key19": "4nGovEQT4ibHomg1vLkBMBzpqb1qdoZSkKdYs5vqozfm95EAPoD5CR7wCvxztg4GJsz7diTCqXru7L9PrsjXsw2Y",
  "key20": "55muiqAj2WHMytJRENUVahJMCSjDnN5qFUqouVteErVnWjAAFBCuH4on57fzYDrRzx7U4PsdfHeY9SpBEgcbG55m",
  "key21": "4DWofPNuaF6SBfGQ7JmsmMop7f3wGghSGn5gGLT8Zt1gqMSY8BVgiK1CQSPoTwRAM3vxGhxwmFZZCh5B68BVxxKK",
  "key22": "5see8i1iv6yNsmR4auj9mF4Lh2qbP9af9RA3h5opSzGCtQrB6YyBds99FTUiiz7ddi4wuXD5kX4kaxNaNJxhjc1G",
  "key23": "3WeggPwjsym2o36C1hgGjkNQs3GZ66xPuTbCWMdi6bnRxFfv8oZykkRo32Fv37E8dN34FstfhvA9s5Eddo8RHn81",
  "key24": "5hxZqjmZVpqmRwzmZWSXPTT5DAY14mxYnXKSrFKr1hrCdEfGJvXsorp66nKSW21NfuLRbTfpbrDLHjWcgb3wGHVK",
  "key25": "3zhE9MXskQWkvVsb9rGnSqibCXV5iq3GUdU3Y5ktNn6WcEqJs5S4AaDWt8a2zkH1rdwDLdPgzbRsw7cGHULG3aYF",
  "key26": "4EQANEM7cJRV1kj7YsSTQtzE32QFqNJAk7s9s4GfUvSkbm3XL3o4SQprwSb2w7pizjJA6NeTdhQGHEPGcmPaC2uQ",
  "key27": "2ZgYBt2qSGPBqfHxTAfHTPgKFPhi6ppJFcDfVb1RUVLJJfo8gFG1dHRLsMw2jE9SRE2B9bPKEZeQTbMqwyAoeXnD",
  "key28": "4kb6r4uiy7oDa5wX49o7A173zQm4YwCAARgBJn9BnfwvjyRWJNMtzDHZ3h6pSt5rVzzaHxhUzseLhmfPakEZjXgx",
  "key29": "3Vri2LHG2CNGdLoXJiKpK95VJLRrEjujWApwmgtNUC6c4zmfZCw4NL5EkREDHaLXdFVfRUvZ1EJGm2zRfFVbjYHm",
  "key30": "WTAtCEXwWoLqKwqYp7rHc5TRP6NrWsqPNZuPvZ9oRdQKizQSTRhTzhopSpvoXvebnwqogS22BKxtEMJfBVX97DX",
  "key31": "2jrLDvKR7dAYTyQqKQrhTXWEwqTZbganfJ1jtBuF9PaQDCuhBADrJoPzaC17W8EgZJL6i34PRdqo3VUTy4Hki6ot",
  "key32": "4hw7nnppzUxEZ9E2u4QRfkxAXEDZDGGf5TAoR9Jv9RqRbqwyXkgrhTkoQFR81zrGJ3pAC5dK6mMz7UVzXxvubU2L",
  "key33": "2Xa8dQ8FCtDe9qsyM8ns4f51svdndDUMx7c83ekTKT3yasSZCAaTYxjLdFRTsHajpZb4GqNk8nQ8QkHhWCS34wQ8",
  "key34": "4ihNxuyncLfGUUerkkgEKGQZTiwg3LnUtiRpWRamgH2ZeaNSTywQqTwFYa2VhuCoC3Bu2kXHKwi9HMx9cvb66Q7T",
  "key35": "3aYy9DYPUdPvhbwircvDFE8FBDwJEadTCkR8MCUbXG1jFFJ2cb9fr7TitqQccM4Qim4P5dNUdhp94Htu7hZZY8NE"
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
