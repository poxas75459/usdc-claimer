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
    "5ywabb7tncNLtbU4Ldasbqk9ooqyuUSujNNrwuXKmQm57iWgCBii5khzUjNUkTLDjiixZGSktm53owTbzS2tcwfR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FtJS9QA1wfh4qpDbe6QhLr5MAPHB8WdrnPAdDGP1HZ5kXc9oioySVSLqnf4DFD2ci3TYhVykAaJb9crQf7UD65A",
  "key1": "4x181o4sXZ7c9T9hLU6Tecb82yLU1TZxQBDSj6xhC7UnEnw2wdi77vyrRHVM1qruUdmo5HYU9KyTgnXDz4gncoT1",
  "key2": "47efgH2r4ed5ubc39Zqw6See9eUUuEpSzcUzzSUUkdVfDdiZCMpxeMmoUXgiYRt9mrv9aFsHtiSuFSXUAWoYJFGB",
  "key3": "2ZWLekziKs4v9KcSENFsSZwWqMupcFYhvS7jgVh2JL7uPtTwcDhi5WFeR4WzvYpmcBTHrVxcgHLeDc8kFStUq3Pw",
  "key4": "37EJFtmbCqik3UMYNYCPK7yfXeFWZNEtTF5PPwV2xzETfpZ53nPsGsyULZKrsiD7uaNCpLvLgeoaGjfaBSbukdyf",
  "key5": "4zXBXiSsYsXaUdUecne2ddUWL4vth8CdwoygC4i2qXbn77Yx9KMY9gdtBdCqYiM35gaNKL9dY37rHdePp9pDSSJ6",
  "key6": "5siRaQSuFshEfGoY1ewNipwhxUhKreSR46x8mQCkDTLb8SedaTv54HfAZNHe9QP4gkoPAxkTHS5oG6DHZCkaY1jP",
  "key7": "3jDEQoJfP8kkSiTteoCQgKVPdR8wXVGo34B5QjTbHxLLcTFf4mKsoSmyQzAcNidiKdM7nEEbrhxoQ5xtnPyqwr64",
  "key8": "3dutM67cQmSrno3yoJhtahQnJjv8XFkowzmPUs3mAbZbSyosLQimVava2CEjqDkLJq2jS1kCM1bLnsN4E2v125Y",
  "key9": "5xV1qFfbuwUG5rCx9NH6BoVgU6wj9VFjtZhtsfjVsZo2RV3ucaF6VtEaCcfoc9cEgyRVZUBwcg2Xsqnk9hb5pbDU",
  "key10": "3XJat2Z671sXeGtgS894duPcoQEMSMNjMgKDAJTnyMAsKsVyim1uU5B9wcStFXtg9ejYUjtYuCM66q87MRYdJduk",
  "key11": "2Mdf9suZ6x8KhStiK6TnSrbgURAxEFAiVjWhwqiBMciozK85XJXAiqpK7bi138qNhp8VCGzh1fg9tJ95MyfX32qw",
  "key12": "5NJmqLBa4iQpAsvbnYPtniiNXkm4bYiBPqz8HmPtgmKNiC4a5uiZayFvdB8zVQfoAYCyeCS9mszaxc98sjMeMUpY",
  "key13": "4L2d7FwtCB96dNFfNZjXHEfrvev9FXEycpvX1dVB2jej42N91z5bYt4cZ8dP72H2RBJWWnnnTmJpnxLZhLsUAcsF",
  "key14": "4bKeCjLyB2odghrCyXJzT9CG2QhmTgKt68FXgHjTfv53WdqmXe8AygYdH1vG4BZMVgfGZerfbfnsR67XVDzC2ix1",
  "key15": "5zwULRcztkEH8M6yVyBUxMyeQba8vEzmWmQzy8VWXo6VLLxsGYsZ1SHFJkPWCLwKhxbLUGgEcXgKL6cMn6sPF4Jz",
  "key16": "4PQsVoL9ZShjEeGrha6t2snj93kZrAhY7fiBaZXFnveZhVsvdduvNpxt7uSpkSrdEgTMos8rZsrpW75H5G5BbSvH",
  "key17": "4ygpsMTTkfuG1dVJnYy5EEg3bNmNkmodXBpMrFd4kQi8VzMK2skEFiJCP26peVzsiMBFKH1m2mDPdENfyJwU5kXS",
  "key18": "2SCDgTrEN5HMn9btFTMJtsw7NQx95t3nk2CNgAZNcdYiWoXhhP5U9h9mCAhfM1W6kmp5YMawiNMzXAj4mJeHPWEc",
  "key19": "4ErPbzQ8eV4vMZRSjdCBScCoZzXXjfVHkayh7QqnT74bVXwcTR5UbymVh8TEGKCtaL75eERQBvdoTQwaQsLLPtVk",
  "key20": "59YwTtqKuAHsN8G3m4ZysnxGNgjLUZS5JUkWiaQ1vWBw5KarJisvda4tp1soZ1FKxR2Uw8pu8PabAfpKVGTdZJCL",
  "key21": "3BTQH8o1uEyMwrcodSg2U3bcQe1GLXcSjscYFw2BdWoc7m7CNwzaGfBjky3B94d44B43RL7zZGrPePNoY2RCQ12g",
  "key22": "5iFpBb5r8W32zz5Seg1U6RVw5wCCV4bg6AUoQPh131SzPp2Gz79tC4Hwsjo3xmKw2rd85hyRJk2mhC1WuiAb6Fpa",
  "key23": "3KVbBfGm2NnCGBCzEezsz4Xw55nMx2z9WvQdhdv6n6jVqowtdUUBQYUFx3RkmMS4ghZkD3Q1TvYjWYoLoLXEZzdv",
  "key24": "38KkUmxj2rbK2ao79xGmtVWY3N3WdRNgTKRh8q5U1xMp7ufABhsuCwBwLDecc9Tvzdg41PbPrjErHKgHc4iggEQd",
  "key25": "2kBL5eP2b5CXvd1spUauPrF2jV3Chf6FXEW2nGh2GjjBesqfB2hygub2zDNw38Dsr65nHrmihyV5inMQwwy9K487",
  "key26": "5VRVFjFYjaS2D6P5SGzGxMMQNkbxD2H9N2uD3g71yTx7H8QwnwZ8AZxxr6X1gHSoFCjLLiYeVjUKSEjvXULFtENK",
  "key27": "4ynb3rbZ6WRLqUZHfYNLyk76Lj8wGAE6dERG7M26WzxpGmvSYfJgkk2Wgt1eFrfqG4GEiPibV2k22fxsmBbH3fCs",
  "key28": "432sdoDbsJApLuof2sVTLq81QAEECdfibQMbwSM4Zvm6BRC4HhSrVCMMoBdFb8YPuxBJGAkmLgStqcv4ttGJwUWp",
  "key29": "V6XUzPPpgBZrk4rL4FNXBMMBM3GeWiKYfkHsjWiP1sL5WrjvGza2p7uEyyGyDsJA9DPuZ7Eqv4egEQh4oMU5Jri",
  "key30": "222WwjciAiRZZmcMAkD2ZcsYZansToKRjPRNMAdK4zpriYtXy6Frpj9EdqDN6FqTk1zyepKmyuR9114LzwTj2wGx",
  "key31": "4nhxzSh7Xee1YVKWDQxQG9JQ4BeCUtPfE8JMVFs58FmR6RfeAa5dtMypRWxkrxYZ8Wmo1VFSrhXHRxCsHTyhoX4w",
  "key32": "5yuJPHsk1KkZ57Hayxf1CyRUgaY6o2HD4KLYdbS5KYgybD5aYbUxDRRG5C5Uxjjsuq6LvGeMtkUyr13VGPjtWaq5",
  "key33": "5DorFUxWEr5DEv9ajyBkXncYzHTbBVminbYKLwQZHczat1JjQnk1b3BgAiGsW9ScAmfiSqt7pnZoozS7tFmd5pSc",
  "key34": "2PXY59qwLfbbj7561xDwqdJQVZ8X3khstSrCf9Gka3rKGaEzTktCYUdukcBqgA1Roas9manx8MRiZCEzehpuPRgr",
  "key35": "3DAE27uMouro6rmTyUxDmi4v151bMukZxndc3BuRcC1UiFQQYYzBks6SuRPt8iGUwcKFNAEyH9GdpVm5KcyHyMHB",
  "key36": "4KKJgZvusiSPZjdh7uiZv4WrNjsovv8snxX7BmGnRqFr5LY5aJm1qBB4rXv6RxU2vTAGhtvpiGf9dYDu6a7GrThH",
  "key37": "5ph6DCUCHXAm5ry7U6jnFUGRmPALCKjc7KKQgnbX4xp5kqJtzPaBYguHG5zCLZeaKnCpETdc9i9ZpGVYzKpoxHzp",
  "key38": "4aZ8eo7ebJRrzDXvtVEk1D3hy8B7KB1DpZB6YhUELwrou9b3GxC9Y6rbSWR3iVSyorZdiVEraBqbMgc3F7btJP73",
  "key39": "2MiSzPY7hRhzKbHn188wtXLnLToVqAAzuG3GF9abPdQutWaAQtgJhdCiDk1kvDEeyGGcYgjrEryXFtWDSDyNYGaf"
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
