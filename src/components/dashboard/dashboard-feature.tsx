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
    "34fgZ4EEsU8JMymHxZ6H9KyC199eMXtkx3eJR3nBH418j966ZZmaDQ3ZFBYgBbaz5zGkj334Cjy8zpQK48uNoC3M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54fbJkEGqCq8mj9fujZ4engRBJeoVfhgQ53oD5d8xij4My3sS1FSNF3tNT7s8cdhQNyuzHjjypXJPhuUqvSiH9Ty",
  "key1": "2ybJry6n6pwnW6FZqJKQfsB8cVLfDaNVC7WLua3HGkk3T1ctgbC4sMAiS3fUQ5nyXu1sdFTqUhSwxhR3ZxSCZ6zW",
  "key2": "CwjYhKwgd3ZPGmGrHkJJDqAqXKuPmd58A9Q6GiiP4Xxbg4tc5LFZsKkweREis24A35GLzePsyN1qRchVaUwXBRE",
  "key3": "65mCrtiVG3cMVKDzJX1e29pzWxUqK2Bb3XQKw5shuVcZ9hU6wosDAzHqFsPLFYQRanALyXtwb3HZztvgXfNg1Qec",
  "key4": "5XzTqB3M5vUR2748fJnmavvv1hqMUiSk8tF8TM4geDSxpWbzcu3YZ5QSrySzQ9YavCmwQQoUTe5wBhvCTdVWWKQa",
  "key5": "4gzAeJHimfDEcevAka8jrq4Xyejoa1c6ZAf9TUxbWGXZbL7KEBeaN443wPauC2CCfpEanZ215uV2J3B6cPb7vYge",
  "key6": "21NqHBZX1QqbS1UWFixbuou21P4eHmAJzLMfUP8bdzJLBfnX78x8ycPnEpn9Mh5v5xmw9z9wCoUxU5jGq5PqfZsQ",
  "key7": "3KTrxXMWNCxgbGuR7asumFHGmsr9dEMHurHrVKZXLf4ajywmcYY83toSK3qamHtyJHUbEyq5b3QLhNoRhispFReQ",
  "key8": "8hjkZDZCy5bx5batEgXB9MmKYsk29d5SFJZ6gpE9Wwuar8C3m6gE83fq9wFDJnA3JoLStrdTUcWqTRpk6pQmhja",
  "key9": "4mH5y55xSCf2JawvjUHij124xfT4a3eH8KVVd4SvszESXH4KjNo4x2G4c2rwzfDkDVjH76UWbSXMdFpR6sMqdDar",
  "key10": "CCshUqYfHiZvFmdH7FUetdVnDkLNM9XTS8yDEXSxKrnQ81pdr1WkWSvKYYByacrM6R8T5TvHJr1a8VNuYV4eAMN",
  "key11": "2h6JrimRkznBUbwaT7q1vSXaB8Q6NqeS22FgcvUKr6ys8g8272EpXS8fp16ScjRBG8GthHTcf8zYUwcbDeUZsSYa",
  "key12": "3wfJMLpbWoYVYJva1mgKyjeNhNCiYkiErSqWUWANodU8SAALzUqectPD6hQBuTxKhmStc5e7WnowSiuYW22kvNx7",
  "key13": "5r58xf8zJHoFNwPFzEeoUdh5h3oK8DskQVLLfXPnk3pZUgdnUWWphunZmezXLUXFL1Tuf9Zt7SEoSJgu5YxFNdd1",
  "key14": "52b5NqooPBN3FDEM3JqExWhbdoUz4CpwTRaKc5p1U5DrbG27vzhVFPBS6V6N4QwvHsUxLFd9juqkwnawjfzmACcf",
  "key15": "7b8X6NtgZfsgMWdhBPkguTZFjyaqdenr6bmDD1wy4mAgCx5wzztWDX6rvJjEA4uGmhgK5iSCGbGpFDoz75HTo1M",
  "key16": "3hiCfPABkmCCimVzLS2xSDnJpjFwMxPMmBT3W2z8zWrdJfw6j9BrDAgp2CRxhkC7XScm7RWKybgtgceh7B5qnHrc",
  "key17": "46JEEsfbwQRqBpVVKB5MqqfRD7rCSrr6oHtE5VYq9h92HHyAJWQZhqZCVMVsmJmThSYomkXGRSjmnGMhWT8mNJkJ",
  "key18": "2znFFKJqoqunkRatg9CkqZcYq8kTzvV3mKqQLUXN4mqCwfe4DFDx4zuae3nnizg3FvjnwwKujjx4jcwb8hepRvpk",
  "key19": "24hwmmZvwcAekD7Myzce6YtzSbGNbFWsaGjgAbpRSP3NjEMdfjFSJqxUaKAh2Dr7hcG54Lu6MstY7gwRYYU9KYiW",
  "key20": "2K27H33883Xt6T6HbnsWHehLLVmKzVNfcTgk3wXsJshLEPXeLDavEdZj112CyGhpNWMph2quHVcApM7ypdNeDrdb",
  "key21": "5tjtiB3QTuXXtk1JQzQseRJKDPGatSyKVBYtTnFToYCAi8u9orytatFDRkD4HkDXk22mU8vgXinc1W1h5zr4tggg",
  "key22": "59jtCUQtq2eev7KuFasr6cExs3Ko9vwdEdQG5mukMUkRfDWMkbqP3FheFkqTLyqGcSvCN8NFGBjeuD2hM59eU7Dz",
  "key23": "562TnEGkPrPRbnXoz2aBfpjQJMt3wd79xTGcwtXiBSQa2Gken9NuJpfBNKZNjHDBBmokwQ2sC8d3wjHGkut6yZXc",
  "key24": "622ZZ7nwo3mfrszMiebo6B23ysVndbDBgtdFNQi7oZ9UtnWHFYuZFXQ48w6CFUSKEEfE1YLx2SAzKjwUoix6yuZu",
  "key25": "3AwwwE7XWeFK8G7fpsFqfySJAewZxYcLa9p7G5MvUwW6VjGxSMU922od9rDTXhJaw6JEHGLzHa1fR2MJS3GDtuVP",
  "key26": "3HcBj6nPwCQ5SRATXe6DKdDX6mvmHsU6AE3Un4YHgdpXQY1H1us7ruLicHgd38gCPYgghr4ajQMH39GwG1WgWVEo",
  "key27": "5gYyNDphbT1YMLTZCHcQJkLKyuZhuJcJxTaWyY4vCdrhwo57WrSpzDCZ4HSvbBkQe88zY7EhtinM4Jhvo81ZcDPf",
  "key28": "3rtxLLa5BTZB9uTi74hpLCpCqndKfSDrBgD67kpkgqHfEZ3YMDvJwGu3M61AWDkRJmgQ5tJWGh9yQTb58RNijjcN",
  "key29": "3ZhxLvSW8qwCK8kwFRPUT5ZWmwLnhSNFj2rFECjnfg3yfRM5P793NrRPv3XpN58vUQT4YuooutdqLkiSf1HpFshR",
  "key30": "2CRztkAhBF5KruPDqVxXQL3uaB6BKF2jj3YunQfsPZbaMLD72LV56aHsRs88HYrYg7FoT9eUsnR2Mbm3qW35kCri",
  "key31": "hzHMyekc53UUHQf6wVXFNpz2ueyoVC8jKqsSHAidCDNLBQtkNs2TeQ2BsXMTSP2RuyfJHfBTEbJTroXnusVexbb",
  "key32": "affbUnnBjqJbuMsaa9DVmm2ughAxwzFA34Q9sreJyzin6o7CBahqa6JTRhkWSxHSxkVcVKBN7zApPvsg7r18t4C",
  "key33": "5nX999PLPhuhgha3d5PhnRXE5f3qF5NNX1XZGkMBof7UJ5cUQgPBPrzBnm9y6S6k2LrmgfNLWH31q7VybvP8n6Cc",
  "key34": "5oPn5gezLjhSjnU23n2qDhVNhNJFTT75PLDB2ZBiKS9k9Dso2Tm5HSnZMkZcLygr1py28aEg7ovDnEyfYtEkwFGc",
  "key35": "3Wg2GcVZiM3KSTzhXdyLPrUwtkye7e396QJxKwjXHMAStchhinsFJTAc3NrZRRU9sjyquJGPcCerrmYNRcpQ89kv",
  "key36": "258W5vkBHxhm4Co4KEwNwvuwWMsJKbLqkMsvo1UNQkkSFQwDDQNmfMqqBYkrroKRDE71QKch9WKvWh4PSrKrMyhk",
  "key37": "5RbybyvwuLaYqaXN5K1dLSh3bYkZ7XSUoXATwxmmxBciYshevVYHrs4cq6L8yYKvM6jbtds2C6wNzZu8jtiBHxVK",
  "key38": "2SiJBNGoYd8kKS8X6mnHHkmhREWxZbajqGeC2RUwwZY5dPrGbvFSGqXeMx2h3XL1qkuZ66FaLreqdGmb2yMpAudD",
  "key39": "ErZDzr5mydveLHoJzNPchLCCJhuLKHvadwJFWoR8Uj1ZUzZyUKbkMo5wzNBZgTpQwqyEmP8J2itMQZshYcNr8tt",
  "key40": "UQgcqaCrBqwqhhewTEZPHsVcksR1Qam8uv4b6ZtsGLh9A9F2TMpEvc69Yaj39cBu6Xy9xFuerKVuRyqrXTwpaDh",
  "key41": "3NpBsZG2Pgfrt8yA5TDTYKy7riBhaJ78bWQ8dvvLLuN23YGhdM4s5vQ5TBSgshGZiqFNAbSwQ3wVYfhS2tYgPJbd",
  "key42": "28jZ5Q2meN2RTgtmMURqSX2X2Rzv28EwXTzavJon3fRoJQJYzck2oPegiWZUn1j2qpibEa95dPWtjYxSHVSYCGB3",
  "key43": "2VgPut8pcA1w7mEnvwYFmmUu9BhofH4CMGpLAcKsfJbWkgKnhRBXDQUbnsDVWodQJ5gJPu7aCoyiCXGyTqyrYpnL",
  "key44": "4MCuJV5v9A99wQb4x5tRnvHUvt5pTbHaNd6To9rfm3uSWhME6417xLJqtZKKc7xFhLARoC461CQKfJGnxm4XkxRL",
  "key45": "5kGYXUEYwBGeGYvusHX2k7e7NJYb4n5Ei6SEQbb1Hq9ws9veGHR1eeTY2U5JookLDFZd4H2SN3KeaXtuNt9JZX6F",
  "key46": "3ca5ZFTKd3fUDtzmhgcUeShuj7MyXju18N4CA8yeuiB3aKB4YJVziqxfnwnjiaMsfBeAvMw2CUtKCHXLedt4ArWo",
  "key47": "LMq2NVUATwGRLSpFSNkmsWx74FkLqRUE3gthcwX8M1pF4ioCRHrdWQRnM2V6y6jCiuCnLPPwRrYZ6wR9thQfrp4",
  "key48": "2uTnX5CrakJRQfXXyfjmFQy9fdZs7gYEWsFvJRLfQTJSAm1ETNBVtfz3yfhqvYfXg8nHvE855zDJV8NTRPdhhDeZ"
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
