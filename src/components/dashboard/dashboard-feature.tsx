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
    "3VUyNn4qhTTNnq9QqBE53ZiqRsn4r9fKcDxS1NiRtYvkV6n8JgJ1wtf4u4B8Z2mcvYqA6EbFUvam13f7jG87nz4v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42vLmEnJdN6fQuvVqfLCGXfVnkmpk7XWjUwX2dUc5yDbYE35DHc7ejotbbsZHYynWoYcJ1o21BRu5VqhVv2viKJH",
  "key1": "4FdCQNzt4uJ8fAj9ReqUiTSsSJeypeqzYKkm1UrPC7fWX8wiy2yxduSjthRQv7n2ra5Gt6fEKgpRbjfxiXL5jHAC",
  "key2": "4pdtfSd12etVXoFz6cMumxnaCbA4onFnhSgAkiKwdAP3uHK4WZuWrM9TMkwtmtKNTowHfVscCfF8JhJ4PdWVdm39",
  "key3": "2PP2j4Nq5nfiHvVUMddSprv4QpeUqa8ze8hih7ejM4sJ6NWcvzGXspPM6taxk21KvjT4GTCkU7CzfZRR5wR3hSxv",
  "key4": "7tzPGqiG7N8Q7d9Xko4aAMy9fDvDcjcaGVZGXjFuwAdAvbYWFLfGDP9siwXBj63n94Xc1Z5evPqjE6S2sw1MZm7",
  "key5": "39QJ2y3Uid2Qj46iawVbiEjgYr3ggXHJGHv9vBP7EbyoB6YqN33KoXnwDHc3SfhoB6yAZoGpKEyyaPTZwA2NoKst",
  "key6": "4VJQt9gacmCPuAR8jKxVf9xE7WEN5xs9htPsrjaEBxGcjhHpHGkovZw4QDE3XJjTv4eXuAxWqqxSg2wGZ51wFVzY",
  "key7": "5y5q8ZfbbsGNFqoUr7mQe5hTaFkYxp3j2tKgejE6a6SifFh1iRm4jqz18b9n8QJu4k4xQPgwJ4wTvqqyNEgfvM1f",
  "key8": "2vr6ku5sgWMfnLTWrYp8mVCvh7xPkrq4tRKm7SVC2aQoKa3dnab2s2PtyL145jgVfuU4LF6GmRkpCw6D3AQgPAKE",
  "key9": "5ipVNtEMVgyvC28S4R3rhv97tJYVBLguJFXtGtutXo5yJzcDgCbaz4WZ8mwWrMzo8tZKgurBn4WSEgrjaBA62oZH",
  "key10": "3PDAhy3c748rHZ4GRU7JsvKd5Z749zdFaGDMQ9RFqCnCAxmGL1GUuqkVJim1MmuZYYEVWZU6ZD1BYu3FUBaBce9n",
  "key11": "5YJ8hyphK6CKxtJNQEbYKHQCZfDvVQ56rykZAhRS63wmjhz1LtRVCGDUJ8B1JefrgkZeor1xNHzpHeGvq3zYeBTH",
  "key12": "fbczucLjZb6g7cKVBM9hi7FKRkxe1C5xRVRFcc3PBUSJRN9qdeLecPZnFUupNH9NxzT37ExcPqEZpU5DSQeeNxU",
  "key13": "2hmLHNGktzCnzM2Ss6RzyDLJB5cmUtisJDkcV7Fd5kzaaVNVLWECH73aur5cUi5LuxHV6EsWcbddS5jbi9437g6o",
  "key14": "2u1WMyUP3G3RKcSLaF9Ni7UxCULY5fBfU4iDyR5gdwa2Hx1MbyKNLiNdWF4kHPDC5mHF1YBhCi399xMiMoyJGnCi",
  "key15": "4FmZDs5Hd8LuSMVcEFL2TEis71SgW9S3yXLwq24PmEfnE5yS8oy3ab6JMzZpq1xCjvThUTtU2KaVntg6CTJa9119",
  "key16": "MSsCuRasADsnYZ1tfe3N1GXFXka2veBWabHhGAakyo6ZMsxGMejLfbk6u7eE28oo1fGA7uVjxcEGA3MhJdaTdL4",
  "key17": "pZkKqv3Yz3w93qtXhao59Ct66gNWL4svTqTFcqP2D2gXqM3C7HxuQ8h2CLZJ1LHpg17umYzpoF6pb8MaGDxxcmL",
  "key18": "4UDBXkr1Czcargs6CisGw5Jp1M8hX8QtCHcYkm3vjtm63CRvSF9wN5kcpEWnnbkW15PyUQGsDtjLuap476nN21ff",
  "key19": "3D7Tb4U2a97x4N2cTsEAj3wyYjTr5ip96tEMAnq4FzdV6fcQx1HEcpGiPZLSZ22rqymiFywmFwkrrNkuR8mcdnjn",
  "key20": "4jzg8AUaZeygNEyHzNGPwAf5jWPecD7y1HUdxZDDYhdhs7TbedVxbAGJNL5UAnZi1oTGf5QKcvqp1LMvQFw6j28W",
  "key21": "43GcH6cSgFnM3BeKcLESWx2gb4dzFxk8qXTVFXAZEYJAw2R7zRcMNP53s5iLjrtJG2cz5scg7KqM6PJBK8MytjtY",
  "key22": "3cDKz2b3RjCtmExxBWgwC1zf6hnuLZZeKJXocbxcList2mJ1Q5Cqo3zD5RH8MnZCicjFWmrkKKvEc6RFyB2zL1CB",
  "key23": "59JFVPq21JmygxZvfUbMscBC9DF5eKwvPfmh2CHWcNJ3vAKJ4QfbBPeG9nDmUQaTaEdAK4kHvpCxozBxNTARk8kh",
  "key24": "38URq7yersbX4JmrqCwoE9rpWjHuZQbaNCi42fkM33hodzHQUfXtRGa9893yrECe8nTQCbLuKeMLXU5YWaooRZJb",
  "key25": "4VnyAw4yuAPu6CVdDYnk3WRzgcFEZX8vpAZ2qW7znGdDVhtMW8kx3NoLUxhbZ7xWrq4hTBNwfQNCjwLXTVzTKqyN",
  "key26": "5amTovn9wQUvXFbkVsGZL5SwyGkEWtMUsxtrjbJwcsojrt49sXPWqqiFpEAk6hjsmu2qmkqt5VsyiTajs5kQrEFh",
  "key27": "5Gohjavz43a7jseyrYwE6RjJS49ErwbdeDDqq4FoFR6QM9N2ccgjAAX1un5HwMA93fGDKuyShhhaFPyTSRUSCCpz",
  "key28": "2x1pvp9DeMLT2nhL3F2FfUeCFiZbu7hZxDX6xufvSnHnHNQhcXKXuM9d6xLKY62SuowitBrPUV2orR2HZH4f6YoW",
  "key29": "WwGpSeGgWdH1TJQQVj8BsXWCaVinXE9hGuBtKnaozaqFP8N6aLs1gUAi5GYJnFgi6rVDWsY3egBCJR6t21AzFSW",
  "key30": "3DTV32565ZhC2PkgFDZ98wGpDUfhMuvoD8f9AXLSPF15e7xMZZumpkjYFrHETsfmg8daGhSiGo6WVxKW79Y9EpBe",
  "key31": "2M15tvkVAwgsvijb9G3NdW8vhzrPrFhCytxbWDbJaHGkKYhAdsM5izLRpc24cpY5GCNM3wD17t5Vi1yrszdD25Ab",
  "key32": "25qipY678npgTwwTj5nCsVy9RQwe5DQqEQi2qFaupHunDYr36XiXc5tttYvk4uT8en3p58QmandCLLMhmYhBS1m3",
  "key33": "63Ymg81Whym2oYa1Y9WHtLjWQbCZQSZWNsW1kb5vPoZCH2r9mpHWr7U14fSJMtRQSQwhZkQ8GvE7g44kFNCrhkFR",
  "key34": "56tyrRoQk53eagAcRnFrcnZm8T7i3RPX2nTSJXSUG9SLDjZxPfkQf6gBWm6Fo8ghNcXSykn3KUTGF3iGukPY3gkm",
  "key35": "642KL7wtHvvE3scq4FPYtQxM14L73xUjy8661a7aQmvnPUT4Uv7R19HwWEZDbQGcN5s7P1PjWxyKMYmH51Jkafat",
  "key36": "uVdcx2yGv2Y5YcrQvFLAPeGXFsrYDXLc1USXoXrBoweGZ2x654n71MyugLN44eJvFQxiJBc9Q6Dvw98o5oQpMYk",
  "key37": "5MAFzpCKFDcMxh1aiakQQV2e1gqTYzCbm4SyyDtsb7dG92xK4VfY1jwaZaf1CUyd2mjKoVZ9YzQrku8JLT7CSqYc",
  "key38": "zMDkSz1XiC26zdRJqYTDu4HwVzmKE7M3MXjW3YNULAVc5xGy68hRQM6GMJyrBrtZf6FidPC6uGzsqD3TYdx7qWp",
  "key39": "4brhEM343w9UJyVw2fzAZ1THu5RPGE8ZtST8bh4WxoqeQHrCH5vepfjKZWrzjB2QNzpn9i9VuhfnvGYrk2s4WXjf",
  "key40": "Pghd8Sfd7d35SATDUAJiji6qBwwvBpUvKfsKhApVJMQ4vH3DYaHG4RxEUyUGW25w3LUsp7bUeL2wehhSjWdseMo",
  "key41": "53kKuvSBBpDdBeJy5o9ue16ornEjw2DftCv8bhujpzmS1emYJobUqoSwpVmuzEAFFDkyX9r7JBRp4NCL6KKmhE8i",
  "key42": "3mXsYV4T1vwXu5AuZty6obPEuPAwU86Pdq2dWNAQNJJjKn9Dgx1rPqarHrRefRWPbNAk6SbQxva5CfUosys7uEFf",
  "key43": "3EKhhydtRy9rxBnPqJFq8SYjCcmCE1Kj57PCArtn7vJ2xCqiBpd7efj9yhrr3gY6XVUhx8tPNzSAFQaUxphMkrzw"
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
