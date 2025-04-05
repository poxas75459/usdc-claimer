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
    "5cTwdfugiAvhsXaDvcMmwoQqgPSEE9UaTpC2Ryz35GupQ7JtkRY4YsmQAwyzi47K2LTij4xsYAZ2PNHbSMXRRxHv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Toojh5WxsVQS454D9eNyd34LJKEnUYsQgxEhTgBhdETAYPqzBCgyQiqmDeCh6wHJa68Um4XqEHbYpGUVvjjwQNj",
  "key1": "3KfgpW6FZAP8ykbKZe8ECQ1ZioHUYLXBNmGZfG3vR8CM9Gt1ENnJrQZdmZ4nTTnwANStnQsDBB9FvhbSriCWgi5T",
  "key2": "PDuNeoT5gu9i2u3Hj6M7C5a1ddmEBNWbziHN2VpRWDqTagtRaFhYM8qjtgpikHCLEGhJoQYachyT1oMhqWQyufg",
  "key3": "4UhLMTVVBDFwv47X9ibEqkz5AViTJuBau5SkCAFWhhum9ukfn9Mb2RPMUs8AUnWtXxW13S7213tumZ2fAQbwWajD",
  "key4": "3PU57m6Gj6cTXwqo4NcMaeQZT9i2WWU2SKjvHHKgf2ajVv9FXecpKbvJ3qgMnnNqmWSjV2quhjb9xnyNSreeqZS2",
  "key5": "3C2mtFvBk5Qy1bJdmXiQNn7KVMguhyWkDo2fBuUX93ZVA9cxPBgsvgTV6Ape89mVZEpxxfGa4KXkNonE61EUTxWr",
  "key6": "2TPZDAaxs3YQUZi2wqTLDgDod2dCdFNV4xNTuSNWU31nK5kXXMu1CfzvDqjf5gLNWrF3dCioDJkFAe9tZjtyw621",
  "key7": "3SDhSTkPHmQBs6w93tyNiTkKQjCVJVgEkrX7RVYeGDwo3JHqiAP3Zvei4mFjUFE64RJvtBfoWv3rpQkmj3SnNqmS",
  "key8": "3bbdcs1k5tWeUxCHb7JkNmj9KahX58yX4Kw1vaYzTR7R5kdvkFsigMmJpjXPSGY8wk5mScWRBab3pdk66SFv669Q",
  "key9": "56onrxcawrrycAFBENSt5fqssWPwXU4d5JrYYiCePp8zSpKBDkXMPebjCkeuur9h27EQYmmBfpR1AL81zWFUdt4x",
  "key10": "2L9g5FTWPR7SHT4fGq7WfQQUE9HtMiz27hkkXb6T2iuaZQz9gm7B75ApCQCM9RXwYkVPtahzx62ovo17nQKGQLWe",
  "key11": "3GHFUaw1TRPdrsj8PUMA2hsNHWA1xGq5DK9irTaG2zSEU4NEGGCtP7XHGY2stw9SDrPy9S9Ua29nRt9rAtGJkuCc",
  "key12": "3yDU7yuYX8p1gZzGgsyqX15ouJtGo7WFvqGrXJ5X6PisK7W6cfrMaPy2UFze2eRyfGTusgwqGhoNenq67AsN6H4",
  "key13": "4yT44QYWc8CeYsgnSxgueRmiXQwHCWFkgVVUy2dzMotrVDer8AbJAmz3a2DxWFkaTsqfNbex6zb2oSMzLkix4LWo",
  "key14": "4spbqUBSiCFbgzziChGDqLZFsLpSqCuxGU3vyhbZVK5UHWgWcwdDJf7SufpFR6hwfJFoZunFgajVaETPZbYf1QPx",
  "key15": "38aZvio7LZgFPgM7WisCbUtVCb9Q6bEhLBbweskvhpdp8yUMBf61kiKYq7KrUYK6RHGjYZiWTSsnRxDHnLuiW7g8",
  "key16": "2mDEUyW3jXxCcXm6J3QRWpxDLgYTwuLmbEst3tEapbQUoqhGXEh2ZdWLjiG7oGBm74m9muo6MuFUWdeUiEJszZNz",
  "key17": "38wKsWbBm6eLuwS2xxHtHrGtLdJBAwoRdk44sknysLiimyzmfNsR92ErC94T189ePUwUNtVFqnhsyVZdaBx3db6P",
  "key18": "2XbtCGvVBh7xiLUDCqG3xoF2SJzL17PvqKh2EY7aAP5QmRkGH25QGtBL9t54MxCZmufnWA71gNKm9VRzCRofK7YJ",
  "key19": "2V79uF4GLS2fayD1wPpQ7rTPiDDtNLfBMsf54r5UScwLrXKmo684N7yjzzBk4WLnpvi6Mbj5LouHWa1FdaZRaqGJ",
  "key20": "u1xuTUUtezYTeT72SiwRWCaXRX61Sk87HWXzMkm5Zxyh6dMrevvPfEiVNCTQVFauvMQqRWXnR9n2aViCFnwuZc4",
  "key21": "4UJS1yUSAfm9VkZGfPGu1he1tchDRckxo8ACQaNEhSKFDQ84zWyVWCFtfcvHfXFtsXiZEBYACgnAviuYQkchUQKD",
  "key22": "4Yhg9pJRHi462cxfgtmD9rj6NxPUAsiaVNTGMNJfXEKU4BaQNQJSDNQkTCFUCzhCs2X18ToWwkqr1RyyBfkZago2",
  "key23": "3gBSjvVXs7ghDrgJV2FBd7EpyL2Mn8kSFPnVv9gLkHKNf7KhPTf99DtbEFnsyx595KWtFxKvjeR7856Psc7JENcd",
  "key24": "4jksK6prxPQQE2a2Zd4PxeB33Y4SnLEiAADcqLrqoHwr7vGYvHx8Y6x5Z1ESLpUnTTj2VtwScaEycqXqrjcZu3ex",
  "key25": "2FYqV4Y1nh6Bou2heQdZdiVvSNaxLMAyCrvnFhUzwVLJWwsFuXWhrYBKYZ7icubxuvjgGR3xGfmzXfdCWY658Fxi",
  "key26": "tCdocyQkzEenJbeYFmLCNcKxBypMA6ZevabWZfQRAshGG3tJvmH84gnw4qwH1bGjYaUMerQFYHr7xMe5NwLAfpL",
  "key27": "ZejsHhWzg6pE5xnids82JcZrKZqpR8de1B3vepEMg1Kk2NZN1dGJWqT4mKMS3V1o3n2wWevmxiHvNikNWE95ei4",
  "key28": "5hJ4pFXmtf4ofDJJfBsUHDNXCyQiHnBxfBiYWjFQf927CKHoGoK82ra7jaCB2HXmZPTKcXdm24jFMTijYfyrnSBz",
  "key29": "4Sgwbr49poLAuFachSxWG8Jc97Mcd79hZGWwre3CpZqWjcwUtFjzGfDWkUVFy9ark2XjdWSP1dtv1G3RHZcLpzcs",
  "key30": "3cQczqeXDrmMtw4tVQ5wgTf1KFHobWx921GUj8r41rsaPFS79JSjcRkodU82jVefZ7VuasZ58fa6X4i3xYtLfbNJ",
  "key31": "4xDfMnkdXEVF5tkuDCWytY4D8xsV8Ec49CS7fNTaPp9M5X23tXmfzDMhQPer7szRQRXxzr4iMFpNMPwH8724Vi2i",
  "key32": "5eLn17apoTnik7xEDD7YzzMGsRWkv9hk6CA1gvtMD5TfYd3KG5dicVhohFfPVPsPywBc6rmCw7YbNuKrQViS9hZe"
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
