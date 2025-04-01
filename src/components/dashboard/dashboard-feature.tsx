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
    "58RESrapR3ka4ZeXLJGAzfWDuwAEjM9313ecgyWYi5mqsAkduNGUbWmurwZHgLvhB56DpVdzeDC9TFdisKaWtiLh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FnqBbfSutJ8dDsztW8XNfNrcgRSgBmH7BaV7EuBEnWgQg28tzZJXETQSUJ36hch4KDCso1VMcDYS74ZJ28VFm7E",
  "key1": "2X95o7DfXJ75tZCxRLcUYhabFmwmUFD7P4X1SksZN9GvRuWBKaMjjyPQpVFP3KP6C4jtKq8CeDeP5xT2KrxXSphr",
  "key2": "2dC4Z5HDzAJHYwXGKc8d5ztu3tpLjAgfju1sSQ43tCRfBeyMqsorJXPwdo7HqB25KmdMtnHoPG6MoFVkj8JLVMso",
  "key3": "2igXvNouFVSaT3uyyQXPjCEbjVQ5kUPCx7Wq9Vi5gPoYwnp3Q9Xad8uqP1gWRMcW3p1WAFLai2PWCjAjHoiVvZG1",
  "key4": "YxrfQbFtfko58js4MgRA3YZc7TQ75p1Gop4dYiVnYNee5ri1CHfBmy3n2KkeC92m7ynViMu5KHH97N1MS2VykeF",
  "key5": "3DuZuBcJeehKjphAAmHRcBGNNAGUJbBjjsgzV9u81Y5Y1BqFnPR5VPGyBNy9WyT6y7Zco2GBBr67V4YEZhzZTdiw",
  "key6": "2XKzcVLwpBynNN7f1kAVsLUzFEvsddDnyhEGUEL8YyUMzWc6DQX1s8bv8JR7h7ptrJfX5HCM6hYV9BcLCXP7pBhm",
  "key7": "5dWuGcjFqwEHQTJhqAmGSLRW8qUzeQ78T1xQrb8ws9ZbksWhFb41Rp3FQ3eoWb4GZFYn4Vb5xYU4s3VEiskEEGoz",
  "key8": "3Bor3i8A3N4wDMN8FxqKg8rasQKMSN5UDmd4qxVwGohUHByySZy7Brpk9QvLzRSo8DLmVZ3pbVKnUHcSGmhoWxKM",
  "key9": "5VKbjcSUst2kQT8AUvNhGiRMzcsjwVbsp7F1cEK17YLmsF66hJGJjMbC2ECnCuZ5S7KDwjpLWAeseorAZ49oq8Tc",
  "key10": "3MJnEKxYV3THBWJszYLqTmoxdicvdeEdmWtkCj3NezBUTvATSMDSyqZSJJVtZV2M8QQr7ZLd6YUhR2fFSnYfTVvY",
  "key11": "2YNjd6kcmVzPBaMTqW29uya8W9a3U8G8Jb6xUEj6qdEHesouzkUVaDhKWceaDSdGaBGm4XhfF7fZePuKG2s1YH7W",
  "key12": "5hM74RxXAh1DRVKbr3bW1KBmmvD35EwUCXEgdHgmS695AFN2Qcc72yEE7p9TnaPqpsfQpS1cXWfXDYZCBtTaemQz",
  "key13": "3ZZsE8AfsrqwpX842t4jKc8ZY2ewwupBpr9HeTortnD2AdpXrqWKh53cFFesGA2WChQ9hL7SMJCtG9uMGdJjGThj",
  "key14": "25pK2AaYwus6vjuQESQKc2uUSv2XYYPj55J4KgSPy5uckMbksk9yniS8w3744dk35yEJAaXn6RqBvqiZxDoLLw99",
  "key15": "4Nw6iMeRpo4S4GyfHh5LFY5MdamSdwi2N7ThdN8N7rr1aNHsSLc3YkJFHbMaX95mfxBnaon3czFDd51bmYhptbrm",
  "key16": "5kSZxcPitbUo8iGcQqP3PXR3Mj519UZ785tyBo3DQYSkyV4pWK9jSnYdAsf7HBgUimmSvcwYzRXCGY2kBj7R8Bno",
  "key17": "4beV9SpN1QtqZbu7jRFcTW4pMLfFRH9iQsDqsfU4YLP78quNY3izfmydovHWMebfrNJ6FGLeSQz16j73dHtABnFx",
  "key18": "3GA1wYhz91YtPkMMowC9QzPSdpSMvvHgq7Duwze2euUjH7HqvzSwoGA6NVQ4mSSQm1roVn12j2YyFd43QGoXeHEW",
  "key19": "2JCtRDubsQ9YDJzhLmR5qhHR1xg2LsPbV4VcwWxu5oaQBbF9vo5NAM9mTWzKCgxWrDF5j99i8vsTwHrzG9Csyutv",
  "key20": "UbrwGQgtWra64dFG7js8HyoHQDAq3DHu2dDB5PzJCWFMYcXaq5bCC7LKuTkCuZHMJ2v6yH2634PkpHkPNAnSrBy",
  "key21": "26ume719DC3CZjn3cSv6GVJt5JXdebKuq98u3CtgxRQMRAefJaFYtrgDbuGrmjQj4hsT5mGBVSCcT526gWyNm9pU",
  "key22": "cEawQs9r7Syh2A1vKJNYfc7h72WoSHGqDC8ouNktQDy8AinpgRWU8aMtTA7jqYqTRci8rqwsNt1Z2s9c6yjRkY6",
  "key23": "4AwjpS6xAUizLZcXSarbZ9VpcKi1qnQkhByZHnutUoP5r64WasKv4gFE2QLmHxyyuPsLafCNvf7wRrUi5Y6YhyPX",
  "key24": "5gRJM2SUkG9iA3AcWVkMermBhwd1YT37dkJb3e7cu7UU8DTeKYBGAvm42xDo1hpi18kuExyKqvkPj7uS3dbF7oCk",
  "key25": "8x6ZZTYmWNGB4MfhLscBaEnRdJTZmNrwH35NzvLLSGyrsTqxXMNWxKkinRpVvTzMdLbNrFZNz6QrAQ2x25TbCSF",
  "key26": "2ZSMbkfRukQTQmRoctCfXuRVFEoBVMGwsM82HHx4vpzsp7duz9zWE1787igwx5UUHbgZ7Ppa6S8GpzxdABeGQAnZ",
  "key27": "5cSK4PKjYYH6N8dzgB52Bmrg8vKitZe9YubjAMQkwzE1DXVeSNMtzccbXVEymHeEcPBomEpax7QZ9gPhdJcNbNd8"
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
