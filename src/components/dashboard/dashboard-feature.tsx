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
    "6mPTAzkBp1L5KZWr8RZFbFQrC2dhindmUQBykums4fd5UCpdo12HajPvdANsRsapZ7fRoPFXZB8EUyp6M9RnGYf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51KF3MFDw8SLEjduvBrU2MMwhoGBCjaJj7UAXJ3F3gbTunu9iLt5EntoxNkYdNjkoMAkgDRfxrnqZfJwEjfJwjuk",
  "key1": "jgUDHHTdjYrwTziGHHFUGcqpzKcfYPnaKMiv77Gjf6f1uodS5Fxhja1LKnxG7WnzJpxRqQJGxhgLXxGVvnGHGb2",
  "key2": "3P18sH5QTEZph2CZttQubkJZWjWegGvFwngBbwMG6Xtz7XUfBUEzt5xotCFJQm2gikvZwJbTyU4o1gbUkDfgfPs8",
  "key3": "avVgRAPJ4PhnS9ELVyGz87YFHEZs47VYYgbXRiRgFZdEJWqoPFdQvC1PRaRdXtPPUTYRquCNJeo7MeaSnMZ8uoc",
  "key4": "32Rgna97D6HCyGCj6T1XpZ8NRdDnGW7zsiy9MqmX7o78u2nAfPYe85J95J91sGMq4RaXqR8RnfogBy2JD8zyNLWg",
  "key5": "52a1HkvuNPKtM623kc17Z4eCFRidpvcsbz6zBcvbKwGMZNaVTt3bxdX3zFeyy7t5utssUxkhpooRuvbFpXigGZ2K",
  "key6": "3195vCyJWH4K8KkSQDqvLTea3Rox1nqhrJLDwG62KHEdtzzAFjjNByxLi4xQNeaWV91L5WiJG87C6ynvsfWbQVha",
  "key7": "UJQpkJFv84gwCBn9RhQYynEmmYbtgJFD1akDDsih5JDka1FCf5KPuXgmmYxvAjSQv5vorwvtGG2aAF52f4UFwnE",
  "key8": "3nrrMayT6FskHspKGT33toF4rWqM3ptQFnBCzjHPfsxWBVsuBUqfTM2NKk9qmuBFwZaQK6iAWZy7zK1Xe6JgPCCF",
  "key9": "2qrnAN66LExuu4nbuBvrjfbycC8oBqQv1fkaTyj1vwZiPoKRTNQFRW6RQpApgJJdEU4KAEAwm7wMGqKvpfWguWVu",
  "key10": "49vsMmUWRo2HQefpNvVJNjC8cAgMg3rm3dFVZPj4nDBYDxD1t6ramBXiqP6Ps7Y5w9yehDjhrArtKHtwhMjPFwUx",
  "key11": "2Vxm2FMjru5vxTHZDPTY8xaRysDdsh24eouJeURELzCj6t39PAPVccMX8es81pYuQEcDRUFx9wGWbAmRgW9GDC14",
  "key12": "5jomZeD8WYsRSstrzWDdG6KgyqM3a9fdabPbvPZY6yAGP9v3NP8TEQuCNUjRQCr5MRdhoXXWaAsnxKndRydGg77j",
  "key13": "5jyQTaPcTbMKFbvKaTpDYiKKt3gUu9uynYQSHJptCkrU3RTcDe2FLnTXuZDAQU4jqQfKM9QFW9AecXzA9CFJb88k",
  "key14": "42d9VGHx36a86hKMvwLeMyvnqbgqfxa5YeKBMNf8PXmPXnJy4nWykrAA5eR9zCFXnHcgBYwDGqKV38xJr1yxz5xV",
  "key15": "3qUud5CAeC89Fqq3WETVLrzd6uvLoV9VT76NFgkxxiz1gnvbgmsuC95NbgLE1XwxiB7aBdpX6LbV1GWZSd8Qwckr",
  "key16": "5yZ9RAoT7FeUUdxuZ2K9ARVzZRCtbmjUP9ERuSUXeknKPoAzQV3vJUy4miqgp36Y7jc93uQFKt5AVW1jAi56UZR8",
  "key17": "3wELn4MQPoabHrCQPzaWLsWmsfpqo8ZYvMmPJbTaHmYvkXDdbd9pbsoyey43q95dsL6rqocNZiNY7PvjqkWRWELb",
  "key18": "5W7kCvXshgpZV5Vv5KtUTWRQFr9gQWH7qrMEYhDvGwkyoBYypK4gwXrh2nenyaqWFDQSwHJQ3LCiM7LZWg4AW3Mu",
  "key19": "5K7XX6Ejv6cxgVaKks7arzV7NWJWqr6uV1sfiYSjSCCRPGUqpmfkxqCGd4G7UHgTCDYBfMh1iZsaoWMXZAUzFUt8",
  "key20": "5z3XY7ov9e4iXF1S6y2fNe77W84MYdPXLGa2S5f49yW2FBF72LqjqksRhqVH9BbhUafScMn26G2MiCwY31n7gF3Q",
  "key21": "1GJXeh9xcrAfvpJjzPSFFRsgZtJ5GLYxz7CksVUJDwCQM2DpCqZHkJzccgk588jFfwrV5ik3Df8562Pj5ty4ufb",
  "key22": "4WqmX5i1WkgFsGuMDS3wArDtm19rS5NkRsEAjue9LSeMnNFRPuNuQwXRPL3ShuiffWUZ1nPLpixnP7f5DA9wjsX9",
  "key23": "3P3nbK3Wwjr9ebZQAyBoBAUX9omN63qerJEYqrnVKErUBvLhK4Fj4aNojPTAMpTX9enSqMdSvgyjhps5h2uSEti3",
  "key24": "oN42miuTPqtFZh8DL29tgX8EVssqDuiD77nLcz2mRpVp8MVdQL5Vueu6v1yDgjCFRymdBBRXuCk5XjVneNrSbr7"
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
