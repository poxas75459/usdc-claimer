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
    "3Hz7BJLzE8FHv1PZhfxVkmDymaGaViTGiD97pP9CQHk2HeqUEJfBgkAxPZc7xJGXQjeNy94spVjgqGPd1kZ1HJjm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oV8zW1UyYpsHnXXCjYXhMSihB3rRTDVuBy7qvLSMi8DXtNRnAGVttV7cB7hJ8tSu536Jzxe9MZGzjo3goPKxyKy",
  "key1": "4QxY1Zc6dwtUFzzT3XrKyoNzmn1dwiR7U8f9DLXYhn9iYAJzCYgSUD1xn6HjHDNgdsJCWTX1ew5k9tP3esQgoDwS",
  "key2": "3ai6kUyWDPkxgnq4T9QPLnKbBuoqQqdkq8jS7jsr1CrBJFPjEmzpBuHfHRCkE4x3qpLuwRMZYkYgAaU3w4mWjTZj",
  "key3": "qPYyEGiPAqB58jmgNiv35EEL5WK5BSB5FeFHgzqhXPFVMjb5G5mabDC6P3cymQE7795uDWzQoNhC9SwmAPqNrgL",
  "key4": "2RXSdMXEXEZgFycSoymEypLZVZXErzKvG1gJ8cMTBRy1FSoaJgSWpN3D9Jc7uWKBcZs1aLoa9WKKr5rTcFm1EGt5",
  "key5": "2D4DdzAXK5FqMyPgXUYtgFMvDTbajw2BooSpxjqSjFUvDHSx7PS4RfYQwHeXv3qDwEXsexN1ocnD3XjBSeA2Vwii",
  "key6": "LwRsT9BujVyQsiWwpG9yx8yoyhNMbp1R8PrjkhHHRw2bLcpuuwSBezwXRnNjr99pAXwrUKHtzpBnMyvRQWv7XPE",
  "key7": "cuCz2z4E5chLnet4xWbWXhhDuF1AxxNPhGkUEctCgUkNaq6uwvdZjXCkz5sEfkXuSQgC2MzRThUqyoZWYwGpzeo",
  "key8": "4jXm4FMrf7iKo6TsYd6qMWqctpx66EdZbUSa3VV4nXDcbUnbY4AXeXERg3fuHAPyFFyV38gH6hzAsqSCxMEQ5Ht",
  "key9": "4LC4yEk7HSUEicU8MAkzgrKmuqNXqsCKCYa18JAX68oKuRKPa1k3h1sKrS5JYC2KoRT6CH6m2G8TjoRssrT65Sw4",
  "key10": "539NKAhVR9M4FQbsU8h679HU8wStsZfdNrP72YrFqzFHAmq3PXwk3aKLWdU8sJQMQ8fUrHDubgYojBLmPoL2asFi",
  "key11": "31S7Xp9t9PzUvhsdJnntY667cGMAuekEczqrS1aKMHnR1MQdtxDqxBmz8WW5VASKCkiCtRyUwaZdeaCJnEYV6KUr",
  "key12": "3R9oLn6PuAfSy5XHRrba6sR4BUYxHXnKNh1m1A7rje4KHzQSq4by3EZf8ve7JQxqCTpjs9j5eEBFbkZqCVVBSj4Y",
  "key13": "fXSVyi4AdhF5D9uSriMSJQnKvqREREjn4WR9vLNLhti9WABnrmGjUJ5NYPwo6BqEBMd8F86oYRUnDxdP7kazGsx",
  "key14": "kf4nrWSyQfsQzC86mZxhFe5bWRqksqfCjCDKPrApMZxFotcQ5kB3gk1La772dyGmMVmK5eeyshvmEJEPgqEqpW6",
  "key15": "2SszT8Su14vMiwq9MukAPSKwMKq1PUiekzuUNWt7E77UHggQBrs2LjaWqLoL6Z5dnLAsMgJfHd8pguxMd1XE6Q6q",
  "key16": "Z2gxsyyf9B72wEBd6USQVtoRnZ1mrkUSrmryJ1Lr2Bx3kck7wHtxZkRcemR7RykArc1MMfNdCuLaGAUq5nFUvXS",
  "key17": "4dWi6QTiz2fuc49vJCan5iWspdtGFV4boux6RmRRgv4ry5AawFoAEBV4UZcnJZdiGPGYMW7wB1HKYPyufBmVxoDz",
  "key18": "51HaNCGyjF1Y43igKjhJ9dbuhx9YCv1uvHpzMyyMC3LMipz8iDi9w6VxUNesqNhhNz2uR95tdyc8biqq3m22Q9nD",
  "key19": "5KvhDaFmMvr4CUNitj33WDQx21Nr44fZjMJkxN6qmqsK92GghjE5DJDXRcU3NC2JdYzD9nVkxakB7TfVy7FH8gEh",
  "key20": "2PeDxYCyBZ7WoMAohyF6RcKjn7zNmNPzgjGxd2oZtmn2ACetYJeABiy1Tv7dUaVEeBWA5VboLRiKMmp8MteG5ew3",
  "key21": "23GaNbi4Qb8JCgSnrHkNbjSgDvkjnAVmAtkU5hAowPbcwLZj1TQu7UF8sADmL6FX5MQAUr7ZfbMLSJ9N4tzR3W9p",
  "key22": "3Nx7ZbLoCxdFezjKFyBos7M9vqNAmxQkgzno7FkDsjefTkNVLfQRNz4nqRB55oL8GAtcCpJaEZrYyfj8XWhRu89A",
  "key23": "2vPu4n74cHu4KxTnQ5LVeNXeqVVNkBfM5QqjFL7rAF3pSrcKrPEyfJRCA4aFmWegmwAg5MFkFpAYTuXQZ8CixSYy",
  "key24": "Mm4RyX3VP5CWfRpAw3MUJErZSQRP1qreECPatqRGVXhLCs75aeqqAXjkg8AgBuPRySUjRwLeogt6LanB1NvHiqt",
  "key25": "397eDWDQm4DtDFiZEoBbLtjF3DAQLdq8ymkAmFBLVtSjTCVe1U7Kw4ZMJUD3MdgQHBbQW9K9SbcAEv4EnWJaJ1rf",
  "key26": "DJy2e6BZyTTz27ShpkvGHkHNueuXf4czGk87gVqPF7vmqJcYqNHqyAjgUpGAGgrApoNzzbbprhKwEkLj94RfC85",
  "key27": "wNbVFGYniGZJibRPrk6QmQTnkPkSdzS2XfUnHhDave7j9YP4er1qo74S4iP3N8ddKEdycx6S8XxaDp9n6j4JDrg",
  "key28": "3yKVFCdZ4rmACfeZuDD6oDFatHyoZoyYxudzkBcoioXVfGkU6gm5GcrLVFszcXv4USfLvqyJZL859TXtPM6W4E9j",
  "key29": "41aminkE8EJEtm931qNnPd8W57iFk3Hhi3CqRWEKfUtyiy1gXxqoDFJwXZdE6fSDgzSXerMXp6V8JJBnzuXwAa43"
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
