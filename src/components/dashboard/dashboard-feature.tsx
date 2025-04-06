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
    "512zd7GKYXRBtaUsaq5867rGZoMB8CRUiAdq98gPy2BWFakS4nk8qAL5MS5WazYgeTvZNFvXG7CnJjVcEuaP93Rk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oLbDDk7AFRwHV1Ra3pSUarY62VeExPo87fMju3yRfsnPMuwxGYMXiSxctdyzGskjTHzBv4T8L9MU8xGXFBN2Ymy",
  "key1": "5zBZBjyKPaAg1qSRupZsqrDwp7pVLxUZgghWGUJwgFeDFNmkBSaDvLZbkbPe9QQ77gizLYBm5ia5kSa6rovCi4n7",
  "key2": "5DgbbSKvxUksLZJgXWGvSsCosp5WUxwDff5wkkhiyt7UTm5QA5djVUaMwkBRfezPXWYuYuK2nY38Yfc4tWWspV9M",
  "key3": "29Sac97Qn8GKXt2P5wBraTVvMYTuipdMZrdKFEX8fa2AiKzHTr95P6uQMeE7G8pGpTRBEPXtdyihJnC7BWV6uQQj",
  "key4": "wWo99k8hzonp4qXJfAAgHcEaC3xAQ9QnyHayELEuck8xUNJZs35ehByjewGMFBKQUSt8ejb1dB8MdPmpxFBzymp",
  "key5": "5L5sMUkgoP3qkwjpT94unFW7RoQ9d7jQ75nnVcZd587dafegKteq7Dk1JsVjpWWkYxMhb9DQVS1T7SWCKXy2EKe8",
  "key6": "5YSoi5eZFcnVKivJ2LT7cSDYXagdatH47tMxRACyXngwK26bx4nDcDcRAUr51CS3AKhPC2DByzAAScuBDakmAdQW",
  "key7": "5E4tiHKa2jvVSq9WNQKdoNCYuLSnj3QYECQTqQuhhkSTJwgU9htUWz8QMu8DRhpQRx6xr6tacdRHaTiF1rxvKLqd",
  "key8": "eJcAMy4UGa2eMUmZ9QnoFViYh1XQLJjMrodKq5xBpCzeT4rJ9D5327DBd6bYyqB2YiB6kiqENDRgWGXMCstkzRY",
  "key9": "4sGUPrGNpNYVQ4iLyWifQHGmJJa3paaWETuDc9K5RRVbfXMoCrcdwjwePbWLuhJbT7vjDMKKNnvZ7Vvp32rm8ymE",
  "key10": "4LSUER1obpDy3Q3xBCNfmjGBa9y49QXxN8Q8kXFYmJ3Wpk3d2nj6zE1JNKMX6cb6f8tMfvDHDqwxxXkpxbFqgevw",
  "key11": "2ZMSkrLN9taUQDXrVNCzPHzdt8PjiDJKkZpDfwN2aFmGGuHXoaB3bZUYikrZN4exUnt7DmQVrfL4K5JP64SGAqaw",
  "key12": "4D9qeiB9QdTLSSQz7mHMs7gVEEnuCWH4zuW1QUMzB8Bv81Myxy9F3i5CjtPjS3VcwbeU4v2apQXTcoPrqap51Ys8",
  "key13": "5TAfJzDfmfUUDqcTztm6MG9ZtxvM5joDtzKy7KmoukaK3BtNCpyd5CxszZ8Vqoz96ngX72iSg1RW27GhdTP4DUZJ",
  "key14": "3G9vahVgszFxbt5GWbg9dpxaGwa1tivnJu8jYYzQ5R774sLzps5ziLsinYsLAA2QvyqmrSj6Qp8NbUzpa7s9TVn4",
  "key15": "3q8jQxCiCQt5oLKGM82cShoa2Dyg7eUaiHRhriiSdrnCn8ZLsUFwfquXA7oReeU3JDqxbscAfWePrk4ZjdeXEY5L",
  "key16": "719P3yeMT8GArw61josB9jBNDh9pkda36B7VR3n58SeSgipvU3UDiT6FmzMLB9ayfh4BBpKACu7RQoJgX4dLGh2",
  "key17": "5SPsVNtRtqY3Unt5c2VXMyFZDt2Qm31cNsbDijGNb8BCpFDypm6q7qxs4NqFuxGQKQD8d6pP1RtENVpJZaB7APeJ",
  "key18": "5yszNgziM5vbXwioxEGZwgTqbPFjDSYitDBJxAPx26Coyy13xxVaEmBHiM5fxd5it2MePU2GA4JfjgM61yKmkQVL",
  "key19": "5vVhiFyGVebXDL5h7oAQz6quqW2PDJxZX5cQpGBoVs33jyDsVju45aRBpLAZgeKPzhpYjswdMoqajUk3ef47mSvA",
  "key20": "2wfM8t1NjBCuyMSCe8N41RKbLBgUSg7cKqb5YiJifBfjGQGPZ7ppi3a6D1MjLa8G5V1BGMVULEb34gFDKjLzfhnV",
  "key21": "5CTVt8HCCKmRvWoRq8uCNGPagMyoFUisfN7fgicve1KnFVrz7bBSWwkacYmnhV25ULKvfuKQEZ1Hxe3RNwVKJzJg",
  "key22": "ziVk8ui7nHW6hVrT3ohcCDxu1zq83ZZxkHKzjALGSJ4oCMwFcUmkwUqJiLCL8CMAjdUK1MJJ8fmH3deu2pnmEUo",
  "key23": "3wYb1xJQymrxxLKVqN9J1RLQY4peE86X7SZgVHamEti7ukjoJxjMKtM3fRbXdsFZLyhVM5GjyUU5LvH8ZkD2AD3g",
  "key24": "4YTR8VdCi3F11txeEGDUPpdC6Ks5fTstqbAKMVUWU2SUtKcGHLLfkxpu3bMo3PuQpvC21W4rGYanYLNBNQvSCp3r",
  "key25": "55ecmSf2HxeJT6GvcPDYYMvZ8Cmt7YJhGK5m6XnMkYXYz7pMit3BofBhnPVRvoxrovdvs5uD4d6Ne4wrQNQFMW8J",
  "key26": "2Jm5uoKPaZzazstsEc3h7omKANBNvKFjvAxzzo8xpUgSpvdVnicpoTPB63YvLRQW2pUa2EABWhSaHmcetND9UXqR",
  "key27": "53DRGS4VrrZR989EHLuFwhRdNmZH1QBWNRy4wjWsZ4gPzmJNxvKMFfxDwySXnwA8eMryBA5NtsKVD29RDFrFmcVF",
  "key28": "4BNGUKneZY1J1ccnZ3h3JpfK1oi8gPQ5uVNuCef1tSrYjZyT64vmEepwTxKAo4tm67ZZ37PAF6x52VL18VbgSu9W",
  "key29": "4Eim8mcwRWfzQzktcHnxA2ovsaABD26eZdbZ6osX4w8ar1sdRoACvKYo7PMssnxVgbjwGgeNEXTzgcw2tchTPUXE",
  "key30": "4ynYaBWJq3k3to3QuN5mpFLjvGNWeaJqTCQtAvNYUbc5Qg6PUYemjFKnaQJLBa37qHr54E7jx98FqMqhB3LyajBC",
  "key31": "5SkGgD8BHivf1AnqVLNRwNB3VTQDjBjk1ceKzszV8n64vpSGFp1m73SbcpLmjDwUcsELVhQG8Qd9eRrSZBt3NWRF",
  "key32": "3vxCcRm7TRPf8oW6wURfcpCB3teUy3PmeXdp7XJeNUeWnT6aGt467SCYydMnk4BnhhNpB936aFhG9YE6ZBcqtz5x"
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
