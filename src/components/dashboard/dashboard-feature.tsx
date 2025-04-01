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
    "aLAfHYiJvCVNP9yW1WepUiV9iYyqsG18DC2P3D1KBftCnsBaF15SxpesrA9hibGF4G7QURxdAdRRpLdvau87gCc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wZhxyRPruVoeu3W6W1uE4v5T2fmVhx7qEaPwNyHd8y6QKdKHsdCJ2r9SqUgJTerQ2emBcMTfQb7npEDi3gxa2H3",
  "key1": "4szkWyKk1T4yUcVjn3FsZcizhECUeuLjhLhJYtsHmqSzhWKZKrCzYhDBJEofDGuxeSdWaKg8DCLnggQdMwUZXL7m",
  "key2": "4D6fZJPpBSnUaT31rgWsAueY5LHT1XQQUbL9KTEDHwb8eVbfeencAbMJEuqiGDzPUCaPdANq4xvWnR6RWNmjz6tG",
  "key3": "2fPzrzxhwwnQ8Jpjqn8EtmnF84XfC4sc9guxPKvkc4CxCGmGNCDX9BMLcV588tW6TSpMuUcaM9P77gd2gwUR244Y",
  "key4": "55deoDgnNLkws7CyEnxtXsinWkQi6j8qTDUVM6fiFLX1DTKLdMGj5XpHAJF8gKfpFbyd2zWywftCivcZksosdXco",
  "key5": "wcAmG6gEa55HCoJ1y9ntuzKoVJNWam6XMqE2F8C5cApGCsxEYvHHfBxdmKcPK5k3sLnsXxiikzQYF9WP527DsFh",
  "key6": "37VHykhE6vj4zQySd6Bu4swWMWYgjuSWLQPaihUFRCoQMf3rRQEguyzfRyjxK7nxgrin6ib5pkw7aA3A7AVoSJUL",
  "key7": "3EW68bHYKVRUvCwa8JP63C1J7xYW9CqDrhL5ty1wh7du6JYxhACy1T7sQS8wEf9YURz1MpAy5CP5ZJWcabX8mPu7",
  "key8": "55Rpfngz15YWeLA6CzspsYqbH6bZyD8Qv3ZpYAFJorKwj9T2QoH4moehVSUHsQfmbnZQTu9h1FkH8jpbHt5U93uK",
  "key9": "4BfDH7QWgkL5PWXz72DsbBCaAiHQS7cvksJZiiV33ZQTre54U1bU1mnfPfwsyRr5LsLnnEUkKqXLZc72aEw5dTCK",
  "key10": "5vAcxSxiGhJaTxb7iRvJdgXqXXBoVwE41UVWADMVyh3YPKDBLCw1D6XNNVwWGC6sYUcepXgnuvzuy71M7iFWGrpm",
  "key11": "45bQdLGaoXKg5vM4YtkcNfMxYb8PU3y3iFwhd4AYHDrJ3q3Pn11KHiKc2US87k53x3QPTzmUBtKhLqHbiazPeoff",
  "key12": "3CFRmcibwkyGnkw2bEboLM1qxd8jtJxZPQJxV73puZu2AhcG6D6ow9TEQ2ccVtKoP9kgwty4VsdZdKBZSCgfi4hK",
  "key13": "4s9XATXugqhKvN9JUZRKnTJ5d4nhtbXNJicnLiqQTCpvso7YbFSWeHh13BcFZjWcMD6y5uqeB832YhHJejfN479p",
  "key14": "5sUNFeN3Bk7mw4NFE1Z5wnZSaqKVkdqd4vzv8vJFZt6ZMYbBaWRa7HeQHRdoXuLusGfCM46r9K3gSJRpT7xZdcBQ",
  "key15": "3jwSp7GDyJSphFR6XwX3WDGUyNZyWQWfq35HjF8VspVNJn5rUjU2SdZBymCZxJRUwPzoaJPX6mZV9wwvU4mjAzGZ",
  "key16": "3C456dxRVj2BWvWqB3xTdyaEqcU2wdza87Hgxv4YXRJowtWJpw96Rg7qXPYUzhBbdj5StnBCjfbFtayqnUxvkCmt",
  "key17": "2xpd6LaR5tXafBMhrwdLYvqDPhzuZ8A7BQwLPhJ8KTxi8F3ADrHbG4DQQQqW6QXB4YTWb6D3iQPWRzN9PrquQg4N",
  "key18": "YAJsYLGS8xgr3jEiZniPX6DWv11mUWuvAkAVKVgN7nnCpj4Jkg6GB3rgnMpJtTSAe6PrGyCTye3AwoSPeiUWtuu",
  "key19": "3jvuK5ouYWNKV9N3tVAgfgGzVd3vFVkRGpoxrE4dHyxS3m6epuZUbCrMaaBEJKncNXybU9NuaudpTv5K4JYcS7Gt",
  "key20": "2Ass48ZGG9cBpLLAhCgzAotkvxtg1UTPf75yMLcMW46w85d3FXdcvyyEFAzB7Xe8hXMy3zgvKf7PUxsqEZEXX7Tu",
  "key21": "4JHvKo9FmCHLLqNfUQwSGAqtxrB8rUaNkmiX4eH4vYJAmvc8LqMK6quvYkJZBcQfkfJJM1abc6XNhH97bJgUFPB9",
  "key22": "2F4iFVU3Pyqo96Qo4k1J2Bvj7Pc24d2yRt6itqQomDMfFp4CWnGRc2iQHJqK8wR2TqeZ4UUnFLSoshkH5BE7STHx",
  "key23": "5UuUUErkAzrJrAqpyr4u1SNBiSWsNGwN4NA2FrtBJZMUqREz2Uafk9n9QeFK8x3mTmDbi64heSufjHv8ErtRmrRp",
  "key24": "3GrfiwNEntyrJYJKbonp6VGPGCQ6wGDDHV7Tt81EDjAEgPLZ6YbYHcudwHvN3GzrhPnanTvWS3XHRTtCzMgA38Az",
  "key25": "5RjFcsrAdPLBDy77R8fwtRsLvPa1gGKzLGxu2w8rB2HAShHN1gPGbmrVK9XhvsypgnKxKzUHWnkyvmDawLGj9ExT",
  "key26": "5Lbped5162kWDCwPXdu5EkHUrbc36K4o2cDoisVi7i3JEWmT3C3paYxv3oKSGLoPkkXh8DyCp2ZJ42ZXmxoJ6WH6",
  "key27": "4uZ9DvEdZGSeL5xd1wXyfYAeQZwFQxiuKuXV7o5bmVCreySqghfBhaMxwF3TvZyejffMVE1f7WJ7Jb6m8XMBGvhu",
  "key28": "wzMA6kaJsW8rGnaa6NNXj1w5oofYKHW8AryXqmyRL3MCJsgWrqQgr14rzG6CxHbbH8vtVMrturq9FBuQDcwmCT4",
  "key29": "3GidBgvy8yGPEpbs6o35uADChKTr6agcpyivGr7Fu1KDuem3xxLeAeCoi1MqyEv2xsKBXXb4kozVomUQRi3Q9Njd",
  "key30": "3kgyjFht1wZgQGWVPhMMGrcnEheDcfhrPnq1169vDV5wzwrgvDo6B6GvHfe6pyPomzKddaMBXQbbfninWYz9F3L6",
  "key31": "3HBVyFpGiFjzmAwwAKDE2kRCcnJmYyaWc4BSKuMbjRs9vfvTeEHyWNa1fkLAYtPu2J1GGzcxoJajij7Sohg37X7m",
  "key32": "414qEgD1Z8xteMP3Y4V9toXWy64pdbQMaNAvkxotoZCAxgDL3tZjWVRPmbowpQkUgMntqN7Qi1dGoxMBetHsiugH",
  "key33": "4Q7aM5ysssVT86P3i4PrTEbZEs2TadBBqLHkyJhQKg5vHoht4MQ3YJoNvmJuScT6JATX8vqkyLxfjA9336uKV6Pn",
  "key34": "4Re3C5WA3ozM35vCKMWPrg7ZD1nQ5DJCRNPooDCPHDg9sKCtTa7tm816iP8PUx2XgNrPcekctFwLPBnDNoKyhu1E",
  "key35": "2HqM6pmpuCcUBdms4khjH2WaBLVStMFFMHSm32FMMhNthZV8zzByuxPQKv4PVgUgBoPos83Dxds4ZPcizf61AUV2",
  "key36": "4DrKW1QWpZ2B8p3cry52M2LyCFyuEVnLSwUjFKZLtMfGp6m1APrswFsn4YcnFLVdRdmzDxTk2wgWC1m36Q5Kyx6t",
  "key37": "oyoGrJjDLLSmjrV4yFqitd3c4oV5ULsAfX4tCzHA5U7nLTQyKUnhd2RGkjTa585ELZ4PTLi2AjqsbMxgooVTLf1",
  "key38": "G9xeCPnQr8EZESmcJwMZjDqTDhnk53F6TTJGAvWjDnL5uMPciMukQpWeEA9sH58MGb7Mvj2TLghCLD3MoY8bAVK",
  "key39": "MB4wnXj5M6wRLxgSGStHLvqqXen611dXnGbaLdXhEEkuQ2mppU3pn9rRdVAgosxkSzVW1cETMvrUwrHmZ7Zv3ef",
  "key40": "2b1no7UtYVVm49jqGvYb5Kqu9iYi4eqsbj71jbxKW2ASFLRjjQaQ2TKLoD7GJauRtL39fghjya4tXXdax3XTVq5B",
  "key41": "5fVjMuKsc3FnqJDpfptKZqYjybdQamfntu9hi2tnmDvcZQ8duecTbTvWPaCLM4VZqfY8pM5uG6Le6ZVPwP843Yjd",
  "key42": "4R7ZwSGhfWdCEx2KsfMPiFFAJ796auYd39B4SsVNMvVjNmmim2tRrUxtBG5cD38d4jZoQ1ctzVacUbYpx3ksQfC6",
  "key43": "3EWAom8mCMcMEpCsNPusZ8toLHJijKW6uTBYXmNtUGx3kTbFkFa9e87Bg2BHz86gtqLniQfcdmdEsaydxWsYrApb",
  "key44": "4SJNerZgUFQJZdFaqzqjrsoZNcdtqqHtJv41aWZR3vtUpR7ZHoYgQA2MVBTEdj6WiJiyfgD7cS6GLp2zgBdbsAD5",
  "key45": "2jXwUKyeFeTzyZCgZD9dLHc7zAdRFpS76HmA4YjQ99oEGVtWPL5295RhaMv9WcJP2DuLnUFrkH7Pf6dTsnPQw8Nr",
  "key46": "29SJLFvHXsaieeNyWMkt4kULHFvsXQtutGRRxSZB8YdmWfBttL3zR955NWEi4sqSa97ZjGoS7QVUpWfQrGUvg1AE",
  "key47": "41oNfb7UTPwZNmgz33wsCAcHdR2c9Kj8uVzt1EhDk9LH4KvHBktrtq7rPC6X2MZ5jDSFzg1NysQVVAoHeHyaeuTS"
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
