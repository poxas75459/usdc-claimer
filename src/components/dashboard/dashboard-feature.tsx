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
    "4seT4UHQhEnNvoDuwDiVQq2mBjLoVUZNSXfdQZ6VM7JmwBTfA7utj9zhv3iP1D2JFixrmgvQn4DPFPfdXUd2Z2Dq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LpTDQpgS2ry7qREy5hh4J5eVhVtzwp5zgaPywcHHgpVKJWa8z5yimHeAZUpYNhWkWtq7gYSz9wTTGd9VugW3AyN",
  "key1": "5Co1J4Xz8o8u9GiWNBiiUHKDKyUkuvY5mmTjBPbsADsC42aVZhsN6zgbKvmSz1E6qrJYaxW65Gn45ieSt1NbuU3R",
  "key2": "4orRbQf4sjvzd1ttf1v4dWTxCDLux7xsmaHvJJfApfb6y7G9PQZo6hNdUAgB4NtmVFBFKPyWUJsbXBv51fhMS3bg",
  "key3": "58PFo9PjqPoemYznri6Aj4QmG5KiRSkHW4NmevrDh2uCpPqmbngVcXUYgv4ErhCFj2UXWQvjmfd1Vier72BkpP6k",
  "key4": "5gaTpWoE8aKvnDefNZcPaXdLdb5AvLMpMpuXEPEEBMNSxaBNWLQHPJDybCkc4xKVBCpujXcyvLzU5QnFiEw861Vr",
  "key5": "3aeaDcZmnjC9sjUQdHh9W6Ba8rrniLby2P4SNHKZtDQkPZ2wB3osbC3tSZrKzcKSPu7TkXxCFePeT7fBuuHyrnGN",
  "key6": "5bEZibWJoYi6JQoPYXrspgeBeck2YLySuwM7jqwP4V9aYdezL7JejWhWX7E5g77PTM1FLhamCxLezJuGmXkkTeRU",
  "key7": "qNV4Nv5xzCG41EaTXRqzN3DpB2S9YQqbcyZuhDB6YZamkYyZMyJKynqRJQmMmhrzXdqGzqwE5wc6qmkUZtgUqXZ",
  "key8": "4EPmVGq7hFGy51yK8Y5kw27VZhNPXETrP4AGCZbJbAYRDe49L4vUiFjr7FxNuMrk7QJJShBEk3Ta1epzGyNReYGt",
  "key9": "dKCAyoMmhWVTusVeEE6AAEKz4sPd2CeEhPyXbNDgx9zd1mML5T8bJfyEUmy8qSLgwY72RHV1gjqSu7NsyA3ncC4",
  "key10": "6HRNmYp918mj9ZvEa9iU5rhrYiVypBSpyh5mFLzRRgiGp9f87uMi64xDRKAwFT3BnE4ovzu7SMA7cYZSvTzrofB",
  "key11": "5pqvJSUgwspq9HtkZW5Y2AHuXC6TYw8oDMGqjAm6Z3wyLE5Dsxe5G5Bv3NqFx4TEd7cUyqfFiuiUqQ5N6zxwnUyW",
  "key12": "5KxvTr5NEoxW3B8QgTXRA6XEHnKasoXnrnGVZpASRRvLrBzmbQmFVpXCxUfNpBReNJxCzKNGA1xnMvqzB6f4zNeQ",
  "key13": "2AVs83ieyBnpkpewAQK8o4TadZYZLp1SWFStVykuZTB9h82DdgavnDraZCAxfkdLYs6oAZ39sQ2ikuhqph46vjge",
  "key14": "3ujFgem6Rws1Ko7WtPVpLB9hDfcHLPccMCU82RKEUxoMuSKgYAP8euNdxHRN8EDUVzs1s8NrLeBj3XgTuo51bint",
  "key15": "2XvM5b6dbz7GfFSHa7fpGg1rW14ZX69RbdMsdbY6EvHkZ8dx9uX1npW7T5zE3TWh1UeGY6bT6iTSy76F7ezsCYkV",
  "key16": "35VKQZsf3PaKESFYXGKXyrEE8DLvhkG2cEgTtmQFgSnUjWS72MjvyDz7TQBH8fB2DtwTqUPrVnjqXxkF4o3buG5J",
  "key17": "3m29UBhuMQga1gCcE1Sm3cKAqACv3fLXZxvJNbUEh622HouKnGwsyRRZCiAnx5Pe5t6bRM4EptJ7iRz4TzLbaxMq",
  "key18": "5RqFC6d8fB8WsAho4uFekjRNdKA5BwJf8kLg4XSrLQAp9F7YfLMwLQyRFCuqP7pXHhcgGWQ2rcwqAR3yzXuBj1uL",
  "key19": "2mS1jyUB2TdYtEMzdAFMgnDKtZiyE9NMUq3tzCBZx9H7vwGCj31mgdAYmeuCjeMrhzQrTgthVmMPJkg3XAHzrsTk",
  "key20": "5pcg3142XPLSJq1pfcTHJfRTp8ouLigeBVMVAtMTHRd3FzXYRxXZPp4Uf5T1gY97JrNX6L17Emb7Bqu8HmHRJwHr",
  "key21": "jbS3FFZp8ECxz2QtxJRyq4KWyGS5THToH9SnVQCq5ovMeZpXxK7vBYgZpKdhFFeSwN4AzTmTaPytNofHCXTc5ke",
  "key22": "4HG6QTMeAnP9Sg8RzDEjoF9Y4UHUywYe7zSWwH7PenbwssPdBrczLDz7KCSfsShHD61jQS9kHNiiKvJmNBnqXp61",
  "key23": "5MmFkjmJBzjw6iiQkuuVJVPn2wURaj1wqBr8JCNREmDUyPdY61MsvNdJgcG2Q6WXwQVq7qjLhSi5fnEdN3B49dv7",
  "key24": "4BxLAZ4QZbPKN5be5AntbCv9srGLwc6oyEQavLo4YuS1Z7Q9w7AaXQBe85bKBGfeU6UfZQucGBeppWYYiStW5DVM",
  "key25": "3DnSPviMEmiadZRTGwRAKVr5o1CmEpQMYcybwmZVAZWZGzzpzXDUnaWcnWqpvhjy9FwVSEc2SAi4zPxyYnhFGR5f",
  "key26": "2BHYtbHV8CRZYh8SasyTUKh2MeYpgnCptSXwtf7KfMamSiv5jwftEwvZXicxop2bQMitTxTZwpSzTbSqcnZRyvp7",
  "key27": "2VCgwPv7Fj3dzeBBbZKb8Y8fW1TaURaZisNvX5baLjVneHZTXApFmBnvD7R7DDBVopexpu4uHZCQXoC6ze1pqSGz",
  "key28": "k7TPZsVFLJFuErdhuQtAWGRmvdj7KB7ztEW1yqY5EV8FX99iCjS8VL3SA4ddc8eAasGPAPwo74nrF2Mr1DvWNQ2",
  "key29": "4r3UrXFCDveEBKiPGPG1Uw7EDNDeqZdzbiEz73sU7xpQNHr6ojoNYgkR7FgcfRq9VPM6a6V5sv6rhESbSqZ25gh3",
  "key30": "LxxwHVbez8d8PVKYvRRTQ93MJs2wU7RxDAc6ynhMG27NhP5prmhPdXrX7XZeFd9YcHGujEbjFubUPQw7u1bLkLL",
  "key31": "5GrCnijiPQmEAy5zwkenJf3Aot8uTKpEc2M3FikFWoUxQyhByzLgHx8Mpwn2vfGKaG8HpJ7gmVACSaPTk1vDcBDa",
  "key32": "5apqFfUNKQJqkdNp6wB6A4trkboZ12RVzS7VqisPV4gWd3JXLE7w5mDXnHqnq9eZk6Nqp4HoykXjvQAsKqpcuu72",
  "key33": "4RhXtP5DdjkJkUb3Z8tTpHj6xroGf3aFK5mVtxS1MmjNiM9S8yzpvVKceyiML3AqqSMA7eFxoWGxwhUQzS8LLGzd",
  "key34": "4mWRoL9Wev7N3cF6YioxVFGYDARiyKx6NkcqKYu5VkiyuYuUoFFrmtCBZu9PU5uG8yArX2VMZeLc5d5oZLSpAhD8",
  "key35": "2WEvkURqyUz7BtLePftpLjsmeHfaASdMjciK3xhWQ1CiPn8aTogE9PF2j2stkdCwegCYcYRmReq1r7Jsp7FzB6TF",
  "key36": "is6PE4Bhh2y1iy2V5UU143xYSU5JNAsT3221vViAdLuZWTzXHDhGCrPVogNUWCXCNPNXcFzKGaPBiCPR18Svefs",
  "key37": "5MSbFoE1QDwcwjvmK2mz9eduBNiNveGybBLMLGeHvgrEPuGBK2oFupAbF3H8aeqEC7F9sGKHD4fQPdRnjSFaUZ47",
  "key38": "cM9ikadFe9g9SZjvNNihVB9joaSKF28htVcy25PJDynmqUWcnAfpzzmRVNYqYLE1c6LVAoUjZ6PK6mdRrAkiKEY",
  "key39": "62EEneNniR7HAeaJnSy4ywJtiDER5yk4nTvPeYLV3cUFGNucHKNMnzwsgwF3KWtWBbq8iP28rrWV5PXvUXC3DtKp"
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
