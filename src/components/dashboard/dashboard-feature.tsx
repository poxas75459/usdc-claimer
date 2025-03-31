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
    "4hKwYAwjc4Hb4J8j6Lc1yZnwXPfF9fHVD63QX78PFZZCudUXsKunN7aFxLm4uP6dRwxLdqRHxPXDA7NZ6mZCXzJg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zffSGZ5pi2MPydJiHH8G25oGkfT5d6UquCS8yv5JqS95ktCwP1P2VXf6Lcy2Pr9hRPXbdynnkm83BS2VSeLex4K",
  "key1": "3FKpCjXunf2zQPM3C868vx5WxqpcnAr8n1rW4XqfeGmjvzSowCj8To7H9nr1yZKdrWvVQQQZ8tPG8Zft6MtSnKaR",
  "key2": "4DycwiSzCbZQdA3EKRhb8QKr9x9xZitUzAdsJ4REQQm8C5SNXJk8KPtYE6kRnYpdFMiPEZa9SYDi48VE3b4Su572",
  "key3": "3SUoj3RqsFUMdFDyqmVwjsTTFJfTdZcMgssCAxeTSxUNPQNoqEiXHXpsF8GkvSKpyyu6YW7VJfczeXgeJaqArg4B",
  "key4": "58kyj6moqV3rM1TKZ2tmE4Z72rzRtafMGP7AkVVeyVWWhwwwgoxzNWoWSMh6V3N8vFKAwE7nhqDbwuz3LH14SSvK",
  "key5": "5dknYZp7sYoQX9WqJvGavJptxxz4t5eBBa7KCDCUtzLB5kEqZBxkncesswu81C15ouvFZsKEQwesv6kDKtTMxW2P",
  "key6": "39zMJQW8ALQw2usRbZBjPFfnRxRdDSfRPX3s4qNxbaAqHTUL2rqKkvmxuTsziE6ZWEBW7VzhHLwdbyJYtSuekJAn",
  "key7": "3sKED5Dk51bH3XgEekfZHTsT4H4q9Z38qRDnH5VPVJtpAUvkNHK6YCSJhBjShi5cAy6p6uxAPPsnBuyHNvVsA3T8",
  "key8": "5u9DGiYMEQqZZUT9GCCr9Ba8KUcS3TRMDHXiR4298JFdGntx1pXywM54BJDMgZEp4r1Fx86PvbBy9e3iAe9iqp9R",
  "key9": "47X68gMvkkMwDM9qGjEpSEmNA9mZCTvfu8jFuiaDRVieZzKC5BGiHBiQ3eftJTywfzJUmxYEGeWNFhv391ZukkUs",
  "key10": "32JLvMCJy53VS9m37A2ciU7TEWPELskqKfQDnDzknajW8iMfCpHrLPPwToBu5BB9ByCxBQiLjexGPJ4ECC8whN4H",
  "key11": "3VKMp24Uhp8kf8emtkkpQzYt6cdzfeMeYdgcbvZryGbqN9EoGr2C4L2oQNsu4rxvhRgiDxx7Cx1skAobvhRtBGNo",
  "key12": "cXLt7zb6HuMA8GFhfyrsVCGjhtydESeSzXZ4UykjRUx9HWtCtxeR345AwRwcPA93SusZqbUgrTZ1PG6NSKcFvya",
  "key13": "3MVZ2JmV7rgUnNnxG6na9Zfs2BK2DPx7dxHVYnMTp914czfu5KmkqVxiMXAdgr2nooQx3NDA6xvqyuurfhD88byN",
  "key14": "34RCQZ7Mh2zLft5x9op1QcC8uSiX8B13VyEvLJ1dLX3q4jqkA7c6qRPCyMdda5pMqEaeBfRMf3WnVwkQyrQbiLqP",
  "key15": "2T4ZeW7ABCgteo9qwXBCpVvHsw5Su4H4NRvxxvStky8hYakvHj6MJ73fgLzHHmfTsQsfDN1QSd9PRk1SWoLepaJw",
  "key16": "4LPA8EcwtdCYxbA6P5LiwyuPNZUW1mB1ag33E6MnXkBtM5jpBzroHUseeRpwWvHJmA61rgsAirWt7Pn7LTtG2Lme",
  "key17": "2fbdb8ygRQy884HBA3ZrChyVSeQ6CeejVGimavutMN4BAA9w7De7kKzF7KJvYttsgXXYrzmRWrWWAPb6iqURNkg3",
  "key18": "3CHG6akz4aLL7khmUkyGjx4fH2v4fo6YfJSAvrRGh7SRJhPVcACgXFf4RRgLabSmkmo5YUTwYU3ijXFCMysDHQDT",
  "key19": "3fuq1c8mvC362xJz9XEL3FMap7TwyAs87EGogECML7GZjLPUjUPra4mMjgHrmHRPsNh1FrmNhQ6ECWeYVGwFtCht",
  "key20": "2t7MssbEvxL89xExJfTtUZKzi1b15wCwbdwTqnDdJdA1iMKRC5Y6U5MomypuSEkLJEV7q3faHJ9fKEC9VTPRogYP",
  "key21": "DkJMhjEFfresf6S8CKrrartWhwnCLu6nSPFFLwJtrHWv9yWWgeoSABLMW4qZCjCCnnphYjRJ3ppYmZkCbPe337v",
  "key22": "iGtyEbF3M73xNg34Jba8csX9BUbTopbRKDFAoVuKb5hFKALDgvL6zvgpeQ935nhrzqtxAGq5L9L563252WTxju9",
  "key23": "3inFmm6QN9pyhfsbU6NGKeAEgm6o17NXpn8qELWWgkWc2Xi2qwMyeVw9h58krsuG3y6KkLQyKm834oX62mBmcauc",
  "key24": "2xxpacEaFGi5gUnJ1wp6zb4VyBRqwXGASRkz6aUR51mATn5zpp6hnMT5rVaPE6fbSJ91D53Bie2V8wvsdmjDMbLc",
  "key25": "2jGZNbNNjzU4SgBQvjRipDVyhuU3cRbapgfoTdCdyM5kanp3dxKw7Phn2tP5o8mu6h329SHKhbn5zbEsDLDpmAmf",
  "key26": "2g2KDiwKJ3S3az8RAZSnQBSU469sVG5iLkq6dX17EDpzCDdwF3NQFevAKNE2L7QYV6gwGXZ9hs4zuTgesbY5ksno",
  "key27": "3VQfWK2R2hxbn48Q7jHiT83q8wM5nei8aPHYuGBfdrVxyZPJ8A7PfnCxeDp6yEPAS54Mjd9s5PZbz8hrTCu163EJ",
  "key28": "2xybiqanu53oEimYMGsNtJ6kVqjnkRnffTEeFXeY4Mm5svYGC5VPbfHNqJ36GkTDZgRi5UZPUx16aAqKTUvKfvpu"
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
