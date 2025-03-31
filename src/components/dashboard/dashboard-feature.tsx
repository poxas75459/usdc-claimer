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
    "4eAymaDFWTn886yFhRJYCK73Pyj3Qvk15nDCLoSu1EtCasLzsf8u8ByyZHTRticUB94WNDNJLUi7Cr6TUqRZQvtW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3s3HqzUXpgZoPkk48g4svKuSca2J9veV6F3yXNsEogL2PJtnFrzgXCLEYPPHf3Je8hd3NiZxHMdqUBptq4MAbuXD",
  "key1": "3LYit9TtL6KV3rcbp1w3zD9k1vK9MJK6onGirW62BdBX71XLHdaeXa7JJScpKMdzabwyXDm8NQRihDhHQhrvFnZH",
  "key2": "4ZENZAHuvokqxchWoNZSnHPPCv555tKWQAr97gUbu5nbE8BPLSMNaGXU4dx7EUDLVaEGA3Ctbu2oxeTBwBNH5mD3",
  "key3": "2HxrpBGvwyEdJ7sybM2DErZYmwDyLzv7VPQwHRFQMfRUZ9GrTYTsTao7ELM7XJNSQasSfPhNha1swonh3xJufnFf",
  "key4": "61mjqZ88hdTgfpCfozKgBx9s5wZpjzdYpat56yEwKxWQhx4H1yPFRp7EWV9D6juN477oHVo2hoKwCM4GLF84r6as",
  "key5": "3TbQyErZYdRK5vDyYSnbU4HTzLcKNrmsKtTbmTtRVYcRYmRLjnSVTKYW4w6hMQp9FW5qvfe2RVn3koHTXPAFAgLQ",
  "key6": "4nR6nsZ9XuP2v7G7NyJJGo6wvQXvMbZNBgamLCmMAh3wRvuVF5C2xeENMjXZXg9DRkzjwj7ULq572ZCw6fmKiEUN",
  "key7": "STnqqvVeGyFsDqRqHm8adAV3iYNaDrV145wadrHvNLP715as2qEs4foWtSp92DxvnJagixNvCHQPfdC7mdMRioq",
  "key8": "3HR3tnXupW687VGpbgT9fgTcoi8waH851GeMEqk38dFUZKAsDNw1RLN9UPJoVBtC7aWrofjDhFTv452gVJxVUPqC",
  "key9": "5q2zV97FUUc3zDMsdDkcFhZEebhwVfGhNQkGQFLrFVU8pDUGRWLc4UKEUqZRUDqdV8aTp4u8S32wnTnUdN1sQTmD",
  "key10": "4kYQRjtQAbiSiwemhRH9AWDJu1u8QTTfzNk7xC1N3veFyYktWEsE1CP9tNaopKikLqkCusAtnkaGhKnciSY3EWmH",
  "key11": "2XuY41g86ah9MkhAHa9y9sfB3kEsMRZU2svYUjaTZpFG1ysv6cc1TmkqsC1PrvSTqK3hAKu1F9DVPPuF1NCtMhmF",
  "key12": "2E4e43hiv6hvdjkvL1H54Bfgveyn9asW2wB1SHDrcBxNWnudCgYASC4TNraVHjBiYeuknonJCEX78E8JR6kmEsWV",
  "key13": "5owodjoDDqMuvDP9szr9B56TYoxy4zd96gd8VVWfQ4SLVofNUHZ1AhzCmgohMXs9Pp3kdab5qFYF23dfD8aMSJEE",
  "key14": "sfRCbaz18JmhVc6DeYHdmzWhkEfmw7tpPfdzVbuonabarcQZ4yu1bSWWoPR2Fi4932rw715chdGmZoAZE4GGtHT",
  "key15": "4dGxZxxXcCN47aUTWVjfL2rruUiCQHbPpsf6zW6mg1BPG5hjxxumHTarXFNrTXcPocGRNH7FAGHdb9hd7aGjBXWm",
  "key16": "4z3uUErmWLdaYkkqmb7RYWTzNpguhpxWCuXCwm8oeqFEVNccrbnNm7MGUxWNBaQSo2P9AXokEcf79BF9kxR6VwxX",
  "key17": "4XUAUzS76jvcyfvFJEuFkBhJTT55VjxwLrtmksKPeyG4HqXDprpJTpjuS9vKeZZZhXbWi4ZKdEcEXvWt8tuX7YZh",
  "key18": "5ghnG6akxYdnsb8GMHy9CXAvVnL843EFPe27ormWJhGyufGYLHERJWxhmb9iGRzssW5dghCzbUTkQbyfeLfUgxk4",
  "key19": "3sowzHM949vSjtJebzt6mhGxqHJTCM3whoUD9waiPdonBeCUAiHy4MMJjMTv9iTbNqkXrDW9ZvYxMwYeanfm4i2L",
  "key20": "5wLCF6HCXyjYA1sQSEH3cyTLKrB4eXKPz2ULEZcyJt8TSitjUrhjzqwhovDrPmVeabExHwYpPkX5BQg8h9vH5HSh",
  "key21": "SK72TPa4fnDkuNoDJk67LaQ8BAepXxV6MqA6mWNLuNJrbCQuNDX4VEVz36PCP8DYuhsT4F3cXq6t6L23uJZZ7fW",
  "key22": "4febptSJ6AUErw35epoJYqTECHjyL11LUJozBSfus24ynDMYvrjt5ssqupmwBsuWjhAZYg9nxSLdpB7uvUcn2Yfe",
  "key23": "5J1KaK1og8Ha265ouU2ibYgQU1xjtsHNe2Q3XpH935T5H637xRjzw4sqB8H21uuGFbuNysjXH3NP9XXQeEn6s2QR",
  "key24": "5JjrM9Bi87PenapyVhTE52AWqebvoRRmGvGnp57M1iauzBxCDL83Avj9SF1eEkCBJiT3HGymT6NoAKTKKeWuPg62",
  "key25": "yo5VfVUC78cu79KRJp3NgoWgKuHExzxHf4Fa4eAtf1gyB1vNCzMaF9awAYWppu5QRe2UqQ36V54JwGB664erjpL",
  "key26": "5zhvxM4dGEfk6yrTzUD7NFUAKQ9kexjv2FsKBz72XpqJ4jS7xSof16mdNP5Metm6jv4DdEAzb9XofWXGHFePM1bE",
  "key27": "37UA8sDpWBnSXs6W3PjgcXtEimbr6mA3bx7mZdnNAbNGqTwcBpwSP44DkdaNt3rqS6Ka3VHjvhQEsntxkCBf866t",
  "key28": "2uyQ8EFAYhsqHRYpCLC3MrhvRqQLqnLosLPbDAbsD55fzhwjeo5a7fRCaJa8Vc6UJGZgQ75zUZVs2RkcHQSVbdTP",
  "key29": "46rSEbzDAwiARLnww2AQACTjTtFPpfvciCiUZ3toWQwxuENxNVZ5neWjLRjwG1thYrCBYe1jaFEUZvozVwqnbW1n",
  "key30": "5x8snQZqWJwKMq2Ca5XkKVhp5FbE5EJTjzjh4Z8bJSNMSeJYV3Ak8Wad9zvuwzHximjw6vGeY81w5SqbUi9JiyKp",
  "key31": "4Km5x2MMZMs5vjkfNAcm2YQqPzZJ1NA2rWi1PThEGiW24NEUqXkSD4vo8XCtLefZN2vtEpRy7JNDuuBDqACc5L4c",
  "key32": "3fpRi4VeJbgGfjhHSu1YM2jjyM6JrEHWanUE3bXGbqS6H8aZpTxZzKfNk3WDVeFMwa2jKw9G2khuPjPqkEpLFM2",
  "key33": "4Go9z4gAD1aZGwo2gY9nYj2UHqywSYjeAR3wcKbRoxcKyojAJGVDTK1fEbkukdMffxZ7fHF8qFRiyZsqu8v7JTVX",
  "key34": "318NLwop1dht6pi3twE5TfwzyL8MjqTFyxyaPjJsDRdyPkFgYW2MZEbf5jncAQfUsY7jv4Nv5QWWDPBN9sMC6427",
  "key35": "4gXi1PAgEDvStQmBwoGeeKCQV7dQwKrxJtYsUCjNs2MdHfmp9nYvrmy7F4kXjdSY2sGS9Bj62VfNfEBKycXsnQVh",
  "key36": "3KkJJsVScS5NAZXiZpDgMyZYxsAsvXcvWjj13gbmUfm4DL99Vbthr9zFaS8YqbGtRJ24tQCWkwFgjau5NzTmwMEz",
  "key37": "K3vpBLBfTVgkqaLCjti4fkYt8x4yFY36hCWWwDWtcU8tu15wVpFBp4QozkX8P2kY8e6JmDiTh7brChCj5p8yUjp",
  "key38": "5NSuXa4dTpmtgj29sjeS2Vd3ES8jykLPA67pZ21UtBZFdP3cEW2V7GASLqnf4dWiCv6W9SWxkjbgSLcbkHv5BjXm",
  "key39": "2a5kthGpW3tNxSj3j3Uj9yRQXifzdHFqB1DBA9EHnP9chRB3n7zNGNwD4cF49iF4Wd8eYdEwMbAgjhWCuWWDXYCV",
  "key40": "5BWCLgAzjthXyShSGfjDKZUpb3sPWLzgB6jR676MwzwTdECBuj7USRFJkigZHaaCPNJq8NU9N2XCPnGsZtYAoeoi",
  "key41": "4uF5VLimUhSsmskr5AS8xmNnyYPRm3wZnvtMQh9L4LgaPG8sa7bRxzuak7bBbrD67DJFQJGxchNBwQjstv5FbYpb",
  "key42": "2JhjQpVw93yw3ioBD7tEx218SeWAkopn2wqdJsNwBZfYgph9spAKAX8G3XjLEe8qZP7K8ydDLWdUtpmcuMnKqsyX",
  "key43": "JpxzZS9KM7wJ2WxFVFTBsGXFKykNrWABEVVPB7BHwDztA7S196VxEGxzcsWR91zfTMs8NyLEMgP77xWT8FvgY7o",
  "key44": "sEwUagBzFdPCyM2R2emj1sPXqobGXh81L889FUz2YJGFGc13ZQcyeLru4mmvdCMizuqLxzm57xhEWRp9rmLLtxE",
  "key45": "283xpxacbpArWeULdoR6di2URwtLPDVbQVttpB3whgKygKFJjLShGPM5Nm1pHz8RQZ7JDQUr9Qtwp8cUiurf1aQL"
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
