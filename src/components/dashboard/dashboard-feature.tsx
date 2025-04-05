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
    "5HJdcjMveGPuMd6fsbPeVeDWPUxKjd24bnSUEbJr8dZDXmSN3Z7z34PvdAr2BCfHpJKhTnwKWNfeWEhJSZhQHGND"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31rcpGkQypszFmu8cX8R35JtreKJX45BAk9Q4K9zwp3bxcnFiMYeZz5zUPrkb359mkgKgVf9cdGqvEznJU17E4qz",
  "key1": "2CYRUbvJi7X3pdzuZdCq9g8RXC1ji8ibambqqMmZPmMRY4CbrZgwa4pmqH9euQry5z8aKRT66dyiHLtnR8t7LyFk",
  "key2": "3CbeMFYbttLR6wrsX8CAZSSNv5nbtWoRv6xDCT1YYydjyqjUBh8xHsjoNzPthf7PQ38ZvHr7vWWVbEHDUcLCEAkj",
  "key3": "5cCW5TkQyufUMNz5yXz13GFa3H2friJrr7Z2NBMdXuvVPm9KXD7DRyymftYA2mtbiVHkR65MqBBZuSEcirdniAhG",
  "key4": "3BBpCqbnBtwnmmaUC9LSSYzqGw2sGXa6E6488euL8r82hcRmzm6bYvv93m33sj2HDz9m1jW7rzxj4gMy7iSkKP7g",
  "key5": "wz33qxUnjBtfn188tuM1t18bpHZ5HksQ92Bxt8wjFHBoXfveecnd9pcear24zeHMmyuVb165dYS5rBWeAotiZm8",
  "key6": "63TeQyHkUXoW54fCgJ49MMsENaPbhHe5xdervqJcHbMNx3VWFfUQTHFhz1vjHNCHgB28Krdm6RNzqNNf73UvCc6b",
  "key7": "2jF96YvnYamyQvTRyb3paA6p4msh9UjcG3CVN73ahYwwx1HngAPKGSuAFr8zgA5HTV986a7F6SdBe7zuvGMJQ9uV",
  "key8": "3BQCxFifQhhwXv1oNARrF3UoRqNCAp91VAJPy8FiUyVAxbwoeub7F3cnyZgX6n1sfJ7fNNCV6DSkjw74uUZht7dt",
  "key9": "51PVa4s5E85nPqU8GTeYZ2uU9HUug1u7Ao1vRiPhyibPUz5VQqaCEL4EFgZeUxUmTdYdrx8xSAtSKjBGVPcG4M9F",
  "key10": "4fsD5EiHZQrEFGDeFu1jJ5jbuxBneRnPC5c2GBBi9PgNDy5QSFPq8Jmd1UPNW5BmsaJi8nfALq5TyJMcLYsmYCt6",
  "key11": "47Q48XZU1upQUY6JLB5vakNvagJetL4MmNcfe6FrSosaDWEbBHhiBqTSNcoLa6VDuX8GaMZnDg5L3sta4yLnCuDg",
  "key12": "LdcExtBLJMw6HtTvZYDBcNmUS71or24hPayz7EW2DszjLBfpNCFGLyBDka382YjeWS7S3mVcAznL3nz7rpf7voA",
  "key13": "2w3QsPEXp6mwsksYwWe5SaTms7TmisticczMkgM6ZaWiJF2ZXKLpvk2CPBsqX3ZJvnau2C6koEEVS4K46t8PjK4Y",
  "key14": "34q4zfDAssAdMLvzKAYueQmd4w1rXmKu3FeT3qHjy8RKLCopCuy3CGFZwUGEPvvctJ4ZQeQsu2pd29oGifWPwG8Z",
  "key15": "4XkxSQ2BnimKFNuXBVuhmprLWTZsemzxmCgyf1F9XQ2DkpUxhTbwgKb6SMrAeUDNjfUtki1Pr3Gm1q9hgPuAmWGc",
  "key16": "5efp81srXyo9k6dPDK7tJ59xLirhfLy7VBHNzomey6qwhH7hgsRLDAfAgAJGqLmbf8Yr4QrtRQrEd8TAbkKUceqq",
  "key17": "2TqYv8z7Hw9zByzou3tYHrd923ArgEiFpcd5MP7T274JLCWY5tbxEwXUeBHybeSJVTUNkw4tbSJ9jXxX5irHjdqT",
  "key18": "5pv4J6bGFxv3HVKXqpHPm1ouf1eNgT3mo6Zt4KHWfWv78LrHSkajiXJ9L6bUS97xAjNG9tnBtaMUUWnDpeTTXCnX",
  "key19": "3L6wyfDM6Tx7bQWLRZfwSxr6aBX6yL11kQRh6GjP1DQBpjo1Lz5mCydb5JsXVrYpDmzsmnZbTaLcnzYSVchwGx82",
  "key20": "52owtC4zELU7Ga7Tp7wLbVEa6Xv9wufHuKmQzSD4roHsN7QW2YWKrK3EURHmMEEqC4CAkiKWWmWcZhcAzWC21cFy",
  "key21": "Cd3HLuSFxwRguBtBXavtoPZn6Ys1RGnHM3i8VKuPNGxtgAbr2DKLd1Rq1jw1uMfS3rPuiZfUnx4uUjXUcVQVGUw",
  "key22": "3aqgtGFCuDA1ks6wc4Uns6ZgZg3VRm8Liviy2Qo15ctv1Dzw1UybBhuApbAtcWSftdrabgeRAscRDP5o7VvGv64Y",
  "key23": "3CBmtoyN7Fg2DFYzUdYBe79aLypSRqkX47eJYatVGdtTBADD5a2y2dMDS2hGQCwKAiCUNXm9UYp1ct9bu6vpDUbR",
  "key24": "5Ftye1rbXhtzXeh2LvgPDBv4EcxjrQgXcKpxBAXuzdiRpwi8VY8hLZYocLHY1C49FbnuWkWSYSmNe6is1z6CF7Cx",
  "key25": "SHddHqveyoN9EN66JCybjsCzk24cQQt8TTtvA6ben9rg4TnmsvHYBD7vj3pi6mUAqXuJcgVopvVzGFKAEYefyQh",
  "key26": "3L1qK7982HcSnhaVyxWYvfpA3upV1fsvUFUYXWj1Z71qF14akezunofHKaeztfPBw5CdwUfafJwXxNeCu9qqw7Bm",
  "key27": "3ZH8KXAVbuDvgbwzEnbcVHpqu2yBidsNAjkKSCvjaZAgmN8GBBKyAcJTyLNgiSfg5RJV1AVhfUojED7fPBCwaA51",
  "key28": "H1uHQMTSJegTkLDvfyR2eRv3ZbX6mpt6EUcTm18hw5iKKPVPeyKDJNn9fj4SmCbhBjsYHojhuDoabU6rJnRU1Gf",
  "key29": "3cTR2FJgNHn1bokHfohCYkdDvziGjWGrtjfkSkiWf58CG5ZzN5SCVHrDNPwbZ8zYesJmgMzP9M6xfjD2DC46zqbt",
  "key30": "4FgiVmU9BXDyS8YBNgv6qJqBXdJZgyYv6eBuFxb25pDkpVZtdZHzCcgrvSpLs9fs6zm5TMSeXx5zVSGGJtLpq1Nh",
  "key31": "2XC2cHZShgvFa1PqyTaM1uXVkok6izWzqz8iEfH7rZb9A8bu7ewtdabrk5a7rdHeugV4Rh9WQwQzxUdXEdDag7ve",
  "key32": "35NgC1Gp56v6wSKVPsdDvCzChPVjcGxE8Lumt8Sj8sHC3uuvkwFF75MdDLekXMytV6u3MifpF5RiCWvYRsALnKgT",
  "key33": "2Fj7H45gxDnTTGK1Wounp7gtfoabcMnyDohKWhbmHoHuVhChByLnhvKAs1F1kStSpvtd7WyFziQUdsBfFi2BZdBT",
  "key34": "33RJ5kZWjAmo5kNJkiwbt84nb3wSvrZMw3FKSk4sP5AxpBi8ByUe6Q2FzvcQdzQt9dqJK1mLLS4JQCyenwPj1m2x"
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
