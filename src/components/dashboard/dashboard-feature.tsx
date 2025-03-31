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
    "pcLz1xrHLZRAch5e2G6cKky6nAViHYkoPauwHJfHizYZMKY4BMqS1v3peKRd6SqjjhnKXwxES4GSNu4bMnsqd6U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4r6GDMvGKVDynzp3B6JtVHZohuvPFYuD1r6ThLJ4zN5Ga4yR94ubLpMXxgejd5r7AzNjhVZceiPMW5dmU4KPVhSN",
  "key1": "4KuEAZSEMDwAGDA8DLMVcCZLNvXeRZ72f5zZiD46emZpCqZTMMokWzpBPCsSewY51susAZWq1UJ8J87GhzoAGA9n",
  "key2": "3nFE1Mwzk7pFpyMwdH65NQki6KacNkfnQYaYJuhe3Co9GXWzrqew3qSRMGBeCWp3uuRB5cBjaPgn22khvRbX5oFy",
  "key3": "594gFfxAgTP8LBB5LnvrSwA8uEhJo4DMpH7otHR26bWCQP6dkfYKtjHXYw8zNyegTdVSdWxneQ5HhcA9Yx4iQDqP",
  "key4": "k6y2Zi5f19VhmdE5fGbYnKTU2csRMamF4SGpkTdE2XA8vK2CiPQctPq8uxWNuvLJydFAuxp15188M8kiToUi37N",
  "key5": "7gqk19pFMDFPPYWC7QcUKuQkYemPSAp8P55nK6yfhT2vBjH5hKSb2wjsgLrpNrmbzhGauZr2tzbinYT8V4hXh5N",
  "key6": "Hre6xzXJn7MzCb4jvKtK2f7yWEcUJerMQp56L72p7URajgYhM5vWM21pg4i6Krdshb5d7w1in7dgF9foqbYMToZ",
  "key7": "NhymHy8jY5A6UoSVLqngd7AvRD59morJgH72N89zEHoMBW9v6rfmCNguUktJrXQNzDGc4hhHJeN45RXvZB7ktsD",
  "key8": "4pWtwhGcy1hpxyDyBWacpAvdGC8qK4aqeTy1N3eLiYAQfysezxRBxC28mZPVqW6GVu9fhPseUJoWYmoAoYnb4oMN",
  "key9": "2tZ8Z4ctWiaLUSNjQSVzEDRwYx7yUPfN3fME51hK2VMwX1ayqYJjWQW1xdSfWqXuWCexv69v28vYv36YwfypEVA",
  "key10": "5uZ2ujvW4a8ZLdWGzfLEw9qP8aFaTCtDPSgdYjNG6ghaRfBQ3da8qhWUwumDHeG9T5LwGYGLRwq7YSVGUsVGgwkA",
  "key11": "4SehZJMNmoTF6W5UYxFCn7iT1ucyPTzFhvh1AE6eWBqNhXX99TdBrytT4AuEoNMPDmTFWB3azkurPqqY2Qw7bhvz",
  "key12": "3rRyfMqmEJXk7LDeCxDuef3rEJ56mPhjkGu2rH2X2PK3GWgeipnRWQCXHaQAXCETbf4thbFKwKsFaJYhVvQ5fhgG",
  "key13": "z7gbqfsE6h2dBLPrAxo2uwp8xMdNcwNmvYCC2gCc9rkKZbA4LN2fogojdAUVfqjTLSjtxn6BgsyUgTC16BxpN6n",
  "key14": "3VE4LQhhwwpeykA72bM9ticvTJnTUWesUWBetBkBqso5zPL7iXR8S1JPyB2auQLGcaV2as92V3jENQdz7T48hYbZ",
  "key15": "4fMNwZokvbubcBRt7pTENQeG8DcSn7E4LU7DK3GHSzN8uyGLSh13RXoYiBTNiwHqn7td213pgHN4qvasK7uFVTuF",
  "key16": "1tpFwHtLFHusVyCpFHtHyt5cotHhKp21FEgAbEEn3DqCsB5mbzn3BKpV4ixUQa1n58uZhqxJhLswvjR6a4hZygx",
  "key17": "2sxf3Dcfv1pCTpCrhdVPCZ3q2U1t9jw5mtdM67wJPLtX2WLKcfF7G87BParBkDA9yDJohQPknQHSaA8hXWAzvgo6",
  "key18": "5yB4y61HQjxkoCNcVG9QkTmiMvGYfaHwFa3QnH4Tab4RRQcqFYenFwE4ZPAXDXS4J1ibBkR7XxVXyd45udRQDaDG",
  "key19": "QtPF7Hi8ervAiK3YoMx36mVjRxieSKFS6L9YZzyBXNEJCT7vhMCVQUQifyJFeXYnYNePTe8mNkd4oGwPYgLwbs8",
  "key20": "34rPC2dFt4UxrZVi9ujNet6gLgE5TWk6yvKgASr5Qe3dZBnyTwKVbL9773Zu2J78vgBUgUyFAGPFFERiii8toSWV",
  "key21": "sDu5HFEALAyjNgYTcpRFL1uYK4qnF5F92FKWNGMkkzZ4ubT7THbyHboCUGBWQpjPmHMT1MxjBGqKL4bTvU5n8CE",
  "key22": "54J5qmGpo4buJVN1Bm2JcuJdv1fLrbsBrFmugiBCyaFH4W5wqFN14BQGtUpV2jbFuNmn6msXAfrFqeK661x4yr9y",
  "key23": "2XndhNC8HvjMxFw2CQj7zQmYwA9MQXnhyBgJyxmv4ECc6NjfSFrSESRVFh9MkVLTT1v1vibaR23oNbAiqqZczKHF",
  "key24": "2tYarETVwBY71DvakDWvvfVdYB4j2hZ53uCH13VoNfbH4cdPuLLn74hDc3Xn6bNgBChkbuoCkk4EQiqJcDpEqn5A",
  "key25": "33btPiHmvZ3RsDEwvim4FpFwquoQ7Buaf8jgJgB1qUNDBDZexE9dLoauzyfm3K9wuqNn1FKU58mth2hrMWRRvAL4",
  "key26": "5x45NaLANpBb6RGwKcM44ACzqKVJ4rYM7948rJfYnoRKJKA4E1bRqJueYhyzMMbVj8VhW2FMEnESNKLskNQavTZo",
  "key27": "w2SXC2qgdzk98REVeM8WPGYGQJ1pCkrHEHXK7xqFQn4uR95V6bXqX7e9j5562encQ472WeSDiY6MtykJi6FEo7G",
  "key28": "VqkAPU4jVyPrSvQpxWxMNXMCEUvh6BimtUbJtk1WvC2qLnkjsTKmmH7LDeZgqtjTCgGnRwgvQwEHXLf5hXXYzMB",
  "key29": "24PSvGeezJtX5UPxe4i9t4TLJKKDbpVRQLpPsL9oZ1BQSQMRXd4SJM91UmS3E6Ubow3L7xKa7Vt5xsMS4TDDjbRT",
  "key30": "3R35wGkJJ5rykCnBpkPvgto25qBv5G4ddp84Hkev6sGVwHxr6nwkzd2N22w4D9BFAk5wxUSjQEeg7gPhXfqWhdbV",
  "key31": "4gMdEunfr2hSaZuuMqBAyfNRunHSpANY4R2YTtnyW5YxALDW1UTG26VAxckcJpMad2a3xvJH5GYWsp7KXL77RuX9",
  "key32": "4fcD5GVAE3FYDHdB3cpW8esosh8FpCN7ssWJRaybNiLmSxP9ynkuKM5ZciqAFeBoss6BuxUW2zFVG4s4rNW5eYQQ",
  "key33": "xjqo7RSvog13Ref9sjtqDusff36gfy9wbDAk7WuHmP8LSjY5ASktZmsgSu8tWxU6PGTdYsqewiBDhRjA9qNwJ4P",
  "key34": "5JYBsNDhqFhuuYUo1npyoxH2twaNusgyFg6BLmsJhop4NPyfF4JU7dnoViU38eXuVvAS4DUPxbwH16YjYN8n2tW8",
  "key35": "4coGvXBqPm8ke1yjoNeLKHAUSvSR5fFthoqjDCe9hUdNvyf9nNkivVcmgJoRv8c4WL278yjQsJDgaZaMVcVuuAnj",
  "key36": "2CGrvzr6JCpijNsckQnRxijGE6n5QTNNF98GMMWczo6iKABkDevz1U5Wr9BD2zXa723zb1tu6TDpPL188DaxCGD1",
  "key37": "3v2oGBvQ724gAyrHHM5FZrfoY8knQ5G73kgMXJmiDVo9DYaBcY9uUnX4KrKTZCuuCAPkV8Jtmd3GqJ7xJwsVPyWM",
  "key38": "4XQrfics9Rfs1J4YXLLgRpiyrHsmmesAyuyLh7JGHW4DdovjhHnH8msEmvVtZhXxZrxDwy7PQ7utUy31jrGiMr36",
  "key39": "4SDLdzULKv1uZXDLso7CnYCkrbSTfLLiwDkTzeQNThYmxtS6Z86DoStF5ey5tTYUqK79g5F9Wdnf4YPZ2Qc27utm",
  "key40": "4GMK9iRJYa3iQa9nhnM9BPGZXLg71M1KKA11tCbs3jLRQ8ffM5eNprzyCn3YPbefLDhThjHyhSCGnnNMHM1c6Vd5"
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
