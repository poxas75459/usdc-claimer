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
    "4pyqse4smV1cC35y46qZR44qoeamfQpMGYFPPG8ojG6pMe6vtFoRFwm6cB28MTioZfEzWfNJDR2yPhmjHApnWb8X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2a5rirkXuDToTndZBhQEWLLAnMuehT8h3KKXXyXnQbH8aVZzWVRvEpGWNiEhezs6Q1UwTJA4BKezg4g8KXCniezc",
  "key1": "3mxtDcam5BtV2ru45FevbNBbZnoQUEzma1Vx6Ws9iUvY4Z7Y828NkTHLkBvST7NJnNYkD5Yio1v5W9dXKRbb73D2",
  "key2": "5Akozg3CPiuHgdB3P6wcuN7v3p1nsPi3jLmt3Nb7EqVSagSG9aXY4dBZhbSuvFGNmApBzFVgN5D6R2PfjRRkV2mP",
  "key3": "67NjV27KQKn5LjoyzUyjUWVauE3HjifQeBAKNc3MgRM2wxwjCSNSP6r3ZDKeUcfDrXHSekrZfHeTuYPTbV8nk476",
  "key4": "2JPQU2F1gsYv42E7owcQfVCBmtHbAmDSvK554XQb4BTyt3gMMZZgGmi9MEmPaYouFHb1F1GhfbFL9GRAQgibfd6H",
  "key5": "VTxwWxesQmt7jRq486taphAqnkHGcRYmT5c62gFo9VCXDCJq1e2vT6rZSvUGESbywkUweLdriuBV9UY4TjCWtmt",
  "key6": "2WCvUhxTEe56UfHqB2cnHBxe7CQfDJGnG9awUhyayyEZfxBSoPLL5SLfNuQjYGu8L4Vo9oooheBi5CwWRmiSt28u",
  "key7": "3egHbjzcYiPVqDVNhj3im2PPrjzTpEXVKbucHUt77S3o43CPByTKE2Vf5HFbU1i8bLRV4jSrBG5VsZrYcsYWrLk5",
  "key8": "4aCGNk9avBhukDMkFpw6iScBiwjng4Wo1osTmCdnPWERLosvHmtbFdsMxpcLbJCoxbK6XM3vQ2kfAPwoq6uuKbFS",
  "key9": "5ut84hPDx2ugSqfA8qBKLxtv4UfNTDMLQsG1KwMJdW6wUjwHc4cQqYZLcKbP5U5z8b9zYFwe4LmBeWjfAkdWdmnw",
  "key10": "2MMXHmB3oJpFQ5gyhG34isNik2Xi2rZh5rGaQJtNmpsqsSnQkjpemR3pnhNVqkwKsBHgWK6hi1V8vj82J1xmCDaP",
  "key11": "55USjpeiyfvsKQ3adwiq4EAXGf8nFRCD4KQopxUFSiaduzBkJuKNhQEGXWd8UWooVJzEcPThkXU8Cc31jbkVxPbn",
  "key12": "4EqhxNfMnfdPbr5HuUmrcbDDf363cR2YYB8eZjiRX6v5Unv3Vzm845ZB7yD2T7Cbic8CQwGHZKmnisFpD1DbUZjm",
  "key13": "gBYPhRyDi47Gm8nogXRXTxuoPhvHp9h4cETCu62RpbekhS31fV7zExnJEDYdxqMYSaDBsWCAnGCLZuqbr5BKqZA",
  "key14": "5cgbGH4umoHNG2RsxP9zdUNm6bo99bktTyZdxsRpLS1YUC465CEsFq51RvjbSiEH15fZCLrbqxrmjxwj9YwWc1tz",
  "key15": "41Vn5ruzoUJ7GJ6rYRJ65WUTXf8s5127gTyPX2VDwg3QAQH6kc74YCaLJzuRMQn8etXJQupfkjQp7FCWYDi3ggmr",
  "key16": "JWmZTLLQvN9qL25knZNd5wJzzZMbyWsWPuRoVhHwpRwa6BEXBFrKamdKSfQpMHcdXo2J92fF3bBJdk7sATvzBij",
  "key17": "5VkkWGCK59u5F6csdvLaM5Q24BY5xBo6Czn3kMuiTsCXUh6XUaHzJbZ9nTQAkoJkDXaKpyspwpPeWKc93gieWi9a",
  "key18": "UnrN7um43DfibtpQDuFyrLpU4XiBTh3er2r5QpqZe23UZMEovqSmH3taDhDEeX26pboLAN8CvAmGBavaXXMo8mW",
  "key19": "4BvYjoj3djAaavbaNtuJqJpwgLaSMvyyzjBSU9CRkq8Xqu9hG4rV5pZHAoGvxAbMA9mhC5vr4GEmBAF7tmS6mTMy",
  "key20": "rM4JPa8wmzSUprFB4mrnEaKEDweZeMcVeUL6TGcYdCLN3AvmtuRAhSfV3eLG4FrLHuEDsa4kDGYBXDo3kpPAY17",
  "key21": "4kR8mnmdfW1EXsNUkbPa7n6hqw8qzGhfcQNgC1m2F32dMRts1ua5MbQmHYp7Hf84N6xcKixynJAfGStsGmRBsRCo",
  "key22": "5t5nKksdnqTVnqCXyfsyRyrE8CzbeGYRaoUSxf8BSSs4PHwdoLGzSAGzywNn42sT77Fg4MAfvpv9oZkCvT4N42BF",
  "key23": "2CefYwz4k5tXPVHgozhQgMpjbPeYB81gxiwFWwynzJwHMxN3PK7cmrYZHFBRARjJ3Vws2trXXyXrLMjrCVq5tZUF",
  "key24": "5V4iCgvU1v2oWytGiPch8PFZztBYScyLzpTB5QQE2FqbXV54cDML8MG1heXYXmLzpSJrmdeTq2keBVspVVk1yPs6",
  "key25": "2c74y5vFTxQDvSi2SiJgxmNrVuZ3A9DvubY1YDt9NxHtE9GwLZYNMtWR8am7o9aBRB4xMGXEBNcsocFS8J4kjCgN",
  "key26": "62LSJgDQkagCQzRbVJUmZrHXAwNMpSknvYzzJY8QKWSJJdDRAXNTPctcp25LsjML2DkHQiidJKiaP7aNvPb3Jbhj",
  "key27": "4ivgZvVDaKUoz59FxiNZA33QJ77kTBPHgZjXUF3BZTR5uE9NKV2rWaQYgT4ieRWhKsEhG5FNgdyQN2UFTpejTS1x",
  "key28": "5jB3L4ZXinQKUvKpATUbHRa66CwNYBAG5joXTzw9QJsxxQ997hUoAQDKVcX9aazsqhufL7zCSFJ1cgmh1bkaTurj",
  "key29": "3cQMWhQn9rxAki4wXVz9QrzNQZKXxDD46SURtMVQyWHkHnjqFLmVN379oE7P8uXZ2AJycgjUhKZMxYiba5bAWRcT",
  "key30": "2NYcUCphbY8F5gsfdPyRw7UzQCJJ2virVXPb9EtiQLbP3Uz261DzHRATgh9Eb7ZiRKZjQQJLwwxN2Bz9NgMcxmLg",
  "key31": "217WjVttTF19dFbK2eATR6RTnUk3HqK3mRTEjxPhjkr5Wp4YE6CKrMUyzZrrrZHFbaTNDYWB7eNWgD6XwwuKLixd",
  "key32": "5ER7oj9Ft9WYUbu3D2W7mVBDX3KcpRYvAKapUroxHfetawqPzrh8Kfo2RoAjBn9KoSypSP7RrhzoFdcsGaxQaFeZ",
  "key33": "4HnaqzcKn3zZniuwRGAoUXyA1yNxmL2zLmAf7nqLYrP5Bsg7u6aY5K4U1LN4ZwqKuAffKvb6fkA8XXd5FUCzdhki",
  "key34": "3ZvsAGrLExPC7V7MCwAnV49sTyZzrrKmZdrBEYFvnidinFUHEuMu6TAYF9RmYYdPnRxaiTaVaECjHbRMzRkox8nW",
  "key35": "VCZAWd3u5nMmrFZNha7yTKnZ3wpumtbVTN1YSVKgZLLfNaxf5R2PBi2zc9QxAckKvk21Lc4LzH8DEVYYskb5vJP",
  "key36": "5UFfDHHTH6AwJhQRqL6jz6G9B1hM5HpU9x7P8Dx7KY4dfBDdB8FQBEC3efDqaUp4yB6iKYmNLnYYJGPrGXh5JGaP",
  "key37": "2z9GC5gdeUQASgxR67b6KXKSqcacrLYUuqriLVPZypd1cVLsbYZRAKNZsc6Fmv4wBvJYwVHgm44AfAmePHzp2Eor",
  "key38": "3W4xiriVQSC7wKVEkd2d3kQatRi3K3mNvUXhqMXqjPQvnBCyKxwyKWPDq5u79sUTAkMh6AWM16csVF6VubV9sE9w",
  "key39": "3Rytbkk1Zb9LfqXawLysJ2juqqz9ETVBkTDUUWHHKwczBfJ2AiEyf2taQUJ6FMSRpm3rJ1sTQEvxyvjSPdD1Df34",
  "key40": "5e2pr8wQDt8c6GWm7rWsGX9voZiWcHdB2jLHGeWRMpjnCYqtXWyMpMcgq23nUo76S5bgXVXt92dZmcm3B2x6N33n",
  "key41": "4J3ntU34nHPnEFsTPsx6wVXZY8rdDrJZ9grySmhe348E1L6hRxkfy1GSULkv6aMv9PXk157NgayeQ5cYaYLVrNzm",
  "key42": "uzwwh5JLejwS161jNecTiMdbxtWu22BjykUWm1KHnq83eypLZkiy1V62pPgV1zTwPo4L1ToqUDWHV2GvDKVzp4i",
  "key43": "m911gzwUmSKYHJ6VJkUxTgweUoVfK8Y1CZU7P53Z8n5AmbXezzRUMoCDWF3DzytJKMWryWV7BqT7qa7YVFKXkdP",
  "key44": "3n3N6KJnpqZFjHxZc8NhMqiL21QhKxBsx1GVbTnYL3VzXR8ecwmGYUVe36Hah8v2xaZ8pVp5ov93bvSJmHp5QxRn"
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
