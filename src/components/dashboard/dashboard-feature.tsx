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
    "4AkRBAKZTjiFs7ZST8cko35W3fUJRJhYynjGQn3eSNUd2Ewxp9sGn97N99Q68JjpcfiMPyQBfro9mJWqMxD6Cg5t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cceGWKpZsfUyPo4JzYnsSiVo2XG262miSw8wRDBRodRSpukQSkW9txV5NFdtyDooD59t78XuTAGo2mtMz4d8ALa",
  "key1": "5Cb8epdKPsp5U6X3682H8dcfm9vqzWDsYM7uwxRyCy1aqj6jRZn5UVeiFLrqoNwqDrcfNbzRC2j8qb27hUYUobks",
  "key2": "564U39UqvUEFB25Z3TxRsyMUToPzUxk5Tjay7HEVK95dHc5SCbnmE8oU5mMqkWdu7RkFHjH9MztGuBUzg4G9ezRU",
  "key3": "2K6yJjarrkDq7jUrj64hVZQb8Q5NSVbhLGWa1iSmHEgSLCpHAMux884J9A9wEBg51Lj63VXGgavC9MGgaiHy1Ry3",
  "key4": "5q7seTVsDaTX5QzeEY1ARGHezZV9vt3iBH99NWFLhZ26uuLw9oBvQjkd2ZNaDhcj4twKRVngb2Y7JFLXeMRPuKBS",
  "key5": "4GF8oEvMfduHpSovqeiLX8wReqmtM7yi6agyhY5L4mroxmR8fG6vaq4entt2HaMFusEbJ44EPnDsGsxT45MDE7u5",
  "key6": "5V5i4noqb9B9BkKLxjrjrj3fqCiuwtG2ZAS6znaWc8nQAAnF9V1gskVJrKFo2ypCtAhLwA1YzgjyfSJ5cFnq6SGn",
  "key7": "2iKf3YHBxP2ixEhKrLc1MeQxSndJdcjoFBDdt321QF58UKf6JMCKaweaGfH3ZsrNwrCKwyfiBetuj4b9tpEmZBxW",
  "key8": "xRJ5ZqNTLexBD8kUX2ckU9ndnn4rsrL4WZR1wuMVsucsMxEJsXqHJn55Y1B2m9EsERvrAnd6dFTDoUZTfaLvvoT",
  "key9": "afM7nzJCWmBgwNnVzg8yF9JSxq7BKu6Cx6HT9zu5nEtXz1PxccxDaoKqejRPPCQA8MXTd9h7yLQ3AHpTvpNSsHA",
  "key10": "3q9XZE75kRbJDPZ9Xuw2QmHc4B6P1Kx9HyDf5qU54FFFk1MJ4Q38GWwu35mLgUTDJJpEA3mGMayaiUuoFSPcWXXU",
  "key11": "4ZsBhbMnSioX3Bhh9Dc8q2RaDwYbPh5Bt7sfGrBNSSTjvMGUBU3aLmFz44uByWXofMnAkaBhFEcApxPZ9JkBG3x9",
  "key12": "4Q7xkm9AqxHFcEv41U1V5xnXQZSVn4GJLYGGV76gcce8evLRyYUwGDX4B8PaiUsfqo8mGJxhuQZ56w1NqgNruojN",
  "key13": "2baeNcBaDThjVUmmPmrgAsBXFTYSrpV4GoRHTUY6ecb8sPtxqZuVy8Ext4MeeWTY6jaTG2YQVHQZ86DZ5PK3bN1P",
  "key14": "4MMXm2KPqafinW4Q294Fv6cwzP1H7N9JpCf45uqDKsFj93ebvdY3BvZN5sReQfUNEUcuX3PTxaY1XdM9uNSCxJeM",
  "key15": "4uZMFCs4Pd67EvWEaTVUeF7QJe5DuLfk4RbgWSyhnY9e9PreDdApiLVSfoQmD8JAYXkHVwNdeyBZK2G9iNnZT9ny",
  "key16": "Pby6tTYRaZSTfUm4x7bVPDsYhoDAbLJtupUv72H38PmJcKTRUyzL29eQaGs1qWDSvaGnAQwWjaqk9rVkxi9cmNn",
  "key17": "3KGVYBFWbfXxsEjwLgDS4ZhRS3xWHRbNCoYsAGL3N5n7wzkhtYjqvpm77WZiKBrbxZt93GBcpeKAbT3xqKkikAo9",
  "key18": "21L154smsSbpJUmsM9QQwLiGWrBkc6RbqvXn2KCbkLKws1Z64fPUNhWwem5cmiLZpEhpptwzwiJJdvmVvriDbrws",
  "key19": "3rjL7p1nvTqn4gUEaiL2Z5sM5pjK3UdcMNsbmn1aEiDedUTMNGpLczSr8NU75awGw5DkNEgoto24DQLnr2wbBuwM",
  "key20": "mdgHxLMa4NBgQdWuh1fKrMKDPKy3UEiYaWxq2EHgFJpfBn1V3vU1QtZuUfAttBNDgxCkaf6MuWpsoeXntcbXLs2",
  "key21": "4TmCL9LTEtwtZbpRnfa31btVP7SH4gaAJwtetetPVHdmYnThUpA3rHWV5g5gNUNU7YbXfGofDRpDQEN8GYwzLs7c",
  "key22": "4vBvXd444cMbD3fFk6kLfbYZo5P7dw2UBg9d6FWEW7Jwy4jsYK5tR3Z4yWjcvJrtiwRDjNdE6HsvNtR8xa1R3PpF",
  "key23": "26iSpjcd3rupvyCYQdCaWomwV1KKr3SJgDY6ZXUJ9dFJmo786CKew9KmguvsUgaDpW3vtZXbDe5CYwX947cU8NSY",
  "key24": "3r7JqkRxVMDbQyFRRBMDkLdTMuFEQJmk8am1dezG9xSHT9pmvDwCLNyCZ9S3CUyCggUqYi3V7iBSPx178Pq5d4RA",
  "key25": "bkYCCQdd4TYW73y39oAty3qvQSeJ6QStPtpeMiDmBQyPwpFFYbEownpA4UwY6G7iYCUAFPUvFaaLqxuXuArfBPC",
  "key26": "5oRn1nBk5RRsZ8RpH6cmKD4fYDUjH7rBJHKirpUvpVaeKu41oox7Kg7i55QroqBi8CGobkwB4C8suE6MytBVAWsY",
  "key27": "5xDBJuUgA6ZPAQG4RZwqshKVFKrQVKLmAzsxpZA8qSad2dzDUHxRT2ud8MoFrY5TFNSd11HqrQBGebotnCKuGR4p",
  "key28": "5ZiLsYfvJokc8Yq6C34sNEzL2PwLbw7WqsUWTd2GVXTRatqz1vbQTX14YbTWX5rckhR2dAGeRYg75pcpVbBBjJMX",
  "key29": "37q28PZq3MXnKaZ5nnTMjoyLWN6Ra84D3NZ4TPtpX8Hi43h1NXSZUuyeazUvGz8XZwmoLHv8ViESAvkipdvoE5Ub"
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
