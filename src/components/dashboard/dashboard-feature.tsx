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
    "5fpAUUL7VjzfY2oZTV3iVQBTWF1tE3ZsQPSkLC8HZxUGhZUPjLdKBAsEbMrxV45Muw8KufTc4XZxjh1ofGPBnAaP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FmezEAPXR4xvMxsk8YSNGHNLpkuqtK4HCBNLbxGA5X2QhP5p2WSYTKJv7btEPj4Gc5Knig9Vaketdd44iaJWxN3",
  "key1": "4V7ZZ6TTLFeTbic4i1eUzmkKgnLPUEx4xKsYSCfHaM3bfMohpNKY2z4oGMiyCRgBTjGzX71grAPYq9zvmUzAuKNn",
  "key2": "5GQqGdm68HRwD8szoc3KW5Wh1jbU5fuDuuSDUxEobFdkkwmVWrFgA8hZK5rvu8BgZZfbkhxXihqELxoAiw2aPreT",
  "key3": "2LuhRHNr5q3TKrXHxYxQhXn7vuMKCKMvybJuzFRePyASEoGASrCC7AVy2AYGCDq2BChc8zyAediSNTPU1L4N8hZG",
  "key4": "g9eh4jACL5MgJSwFCzGEPQgqBfEvwCTNEQcR83cD2FC8EWfGawhPhZoFK7oLTQyzijq6uV9iNuW1BaLb3QyszPw",
  "key5": "3jNtgWZhMGmPmkuXfMRfMmbpPVHVXV6aABrBLmC2nDC3rE3N4UVBQLQ9tpERJDYHqFD94XZWxFEE51A7hxv8rBQ",
  "key6": "2cP4bRf2cwWZm1RcRnQedZrv6wpoZF1JwZfmMsRADnnudRtN9iQAh2pgGPwe7Z2yuxJgWCS3ssa4Ly1BHNTHB4Q8",
  "key7": "4yRkAqqY2DtmknbeNbGZ2cT5ZFqaRX93aqZtqYRYEpL4a2V3Qvzkh4qrQuVp5z5xxCyEkZW3Hpu53CCkyQC4BNw",
  "key8": "2tf3MQd7GX9yRvtmULWPXqGtP7wUru2hq91kmrzif8WsV1NJ1iP3pbi3vk2tgiNNmywuRgy8kaKcXPqKkKGgPm2k",
  "key9": "5tGraKjmrzWUf8fFtrU37k1Q1HFqTd5FzpMysPisgDz5w7YR7rNyLPGeqT4S8hicca4LjhXAQo3gKmmN8z9aWCoy",
  "key10": "4odFv1M6aj7ZDTUm5dE9LWYzsxaib82ipSGjNeU2GtVfNzTrfhgP46sQLfK9Bd9ggU6sqryn7tPzZnJXrNFRRcvW",
  "key11": "3bLHMNowC9dLDhtHrKDEtiQWkU2NyndxJKkj582jd9ERt2zWfXfUtPTqrSFrHmRf5CSNY6EpCETj5z5dAq6VXEBM",
  "key12": "4Zc2iAfR7QmeGpHJJVxXSpeHi68jDB1RSaNubeHFqPRCN1fcX9cyDhjXwYbcUAem7gFPTka3yk2iKQC8KGofZJqm",
  "key13": "58SqdPyFA5uZgCM3HZUjVoxXPx3e2idX9FJc2pY9SeUuzzJyann4D55baP6kgLjgYyAZYDasJ9qZzJur5hVxr8cf",
  "key14": "2xH6TrgfJG2E6hg3QY8RM7CtPtnhtAimZXWVemM1Q4dBunasbm5yu8UWbevR1gdasgGxpfxKiUFqbxsUU1P323X6",
  "key15": "2JJh7B234M44v4Ui5o7jAz5g7CA7FAHYa8DfC84TwPav5WsJRYWpeocAWmQ9bGtoSM4AJn2hVw4yQDzYgJ62bTaw",
  "key16": "2DJAYKEdBsbgpMZZbhvERugiSzoK75QG8uXp51tP2UjqDt6iX79YkEvGZcu2ejJuvcNNoyMTibUwgVkGLM3KSSNS",
  "key17": "4D1WQFMGc9SuAALAp7TEon3zU6ZP1UWAQuaNqFWkM13c5uebhQLj1WKQPPV1rGcbcBR3dfRbmxz8yvgY9XKc723A",
  "key18": "3pBCCD9B1jgQ6c3pHFcK3uoEBcJwKpv9p55hSYYu7PgEzxqbKQxuZVDcJTryyZ3e3EXgd72813n4eEJWhKHRsuqG",
  "key19": "2F9SKVHPMiE7UtbtCSN8KUeNRGGE4KyyKeq5PBsUyvNNvvCjL9vDRD2BLwCyDp2sB1BPWQdCWNc1JzsYA6y1VKqc",
  "key20": "35aNHqrysbnkegwyE8JTXoEJ5apvj1n9RQRvQhZEe2H7oybB3fQegaoffkGA1MDPcj8s8QeX1y6Vd24HQUC1v2EX",
  "key21": "67ajPAo2jTidKp8Qxdx2yci1MvxfRfn8QeTpFVniMXZ57vZ6ANK4ouQG26bN4sMbamzLMiAC4Gp9TfqLqoaEHDhu",
  "key22": "3b7wDdAJdqXrorKKMBcvjZQihKtYwJNVyiFNLVZJGDznbek4RTavxcLurarmc5xQDAttV6XhdGTiixueP7m3p8xc",
  "key23": "2Cq2g5hBuD7stwWzy5RW1smMAipE3H9nsY1GHu19j5cczN13zUbPD8G9YS12auqWnqnwfj4gzmiYaSyszNmZWPfQ",
  "key24": "334qCGweAffg1ksT8ZduqPTvNiJP8pLjbzzjjV4C3oF1f7eBjcNKxJYQSGPp7ffPHe6pX48fVRdsFRwSBJQJfWa7",
  "key25": "3cVwmTm1EMm9e6HnJroxZpkZsb6AtFHpviFJUzh23oRGKt7LgXfmxZNiK6U3rXSkzkiS4kkBhJctABRmvWZNdejM",
  "key26": "2ecakBRCcBJtj57BETGGZFckWX9eipKqhrN93QxPCM8muxKj42wqX87mn4bASWctbG2Cfjx4vkDF2vR6ekDCGD8P",
  "key27": "3BBg4QFhA8BuxBwzTaGesVT6NG4vroLzA1EQ7RyWWWR8g94cf3JUNwuuvd4n2pVbHt2sCM15CzKz7AKg1HgTUjcG",
  "key28": "5FDi3Exk6couaa8YHGdypUfSzAnzkpqi2m9KE2uJPsmnpkKvCah3VzzXus5QG8zJMMign9pqjLtJnhqBtLZAJ9mD",
  "key29": "4JdHcFEaEk5wTRvpfYQViqUgb68kG1rPh6Jf8fhJfQFX6qiuYni3vfraCqqo7Tcm6dv12mjbmm6dxXw3HtwbNhbF"
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
