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
    "2BAqX8sYMcrZKtaSFPeq8eE1WisACY5BrMGqTchVw7JFeFfUdjLaF8EU94f6DYgjC93dsAtBaBuoU3Xyqi6fyFuy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rbkmeLR7EBEoyd8mPW4nU1XmZd8SYXbf3xz6EjDx8y5JjXddVPe1MvonDDNf2gjRPF34wG6QEGS976RZuRT3Jxp",
  "key1": "2bczLVPK6cFkgYXS8cQRCTZwLE9wRb6UChCjhGM5ByBxnbhCgbr3fer7yeo1Bx2a3e2ngjU7v7dHMxFsRkWEDF8W",
  "key2": "29aCT4WBFmqoibH7v1XVpXvh12cTuzhDCTidaP6mx5p4WvvFjJgw6yGyxrk5mzFkXTRKzy5FcSeQUEwEBVVLYhaf",
  "key3": "2R2yNhRbs4kNzv8dbrfpNVV9WPRu3ZsQ7rLQ3jpk2qRXqfCFKKTDHxqN5id29J6p96bgdtXoY5wus2FSvofiG8UD",
  "key4": "5eKNiACQ4Mt63S5aSUXi8PVAXr9g8jXevFjQZztQ4xkGeVmy3tC8TJW95RDbAh7ZwvxX5KFg8cyQ1QMVesUeTd4n",
  "key5": "3LXDHrTwmbUJ2YqBNr9jRwmUVFN1GA2oxQ5WaYQqqTquWaEXNr5ZTVLK2N4YkP5X7Ub41bqA9SNLtdaGQm9sCzwh",
  "key6": "3dJ2F4LtPbdNG81hDJYS2aaZckFaEfPxJ9ioWSPtSbt5Cm6hxjLW6NmH3BNVithmex6HpxtRAV22VnLHxvqovdze",
  "key7": "3C7ZwySoXS98qCY4xLdzE3MBmoztDRE5BRxBYHVr1ojYsWdaPx9fj8BUipfMs6WbdxMLbkgFcTjfPvuxBxC2iGRs",
  "key8": "2GksikQ6D7LJPStxka7w8RnmPEXmYr5cAxFURGmz7ypd1t5sjjyKtJdxmuxCgxjEitotU6zizg2RYuh1J2m2vpyv",
  "key9": "3dZXQ2aL4PNF8Nd5SZitPpccXBY48eQocm3BFn5kNXj9nUxYYk4Qf8eu34oFEW3bt7LRM6rCoH5e9YZnQ6Z9gehB",
  "key10": "55VEWuBV5qZwseiu5gmC6Jf6rNiRutLW6JcaCPgowEfBZPfVshSvK8hhykUGPRXNF5RYPZGxLHikzPaqVuHobqJC",
  "key11": "61YhUhj64p6JgkgzajTmFn9MZnh6UYzFcZRKFcKb8haPa79c7HwtrN7hJnbZEq78mHsNt3ENkUJA3rGQuomJt5n6",
  "key12": "3oEQS132keaQkVjXPGuGKZKNZakq3tmLcuG6QA8YVnj7ePNeuk1YFL2WF2hQaUXcxr13ZKcPzrPAwiofXvFvUGj6",
  "key13": "3QHTUoc3jzC3KLmD3eaBEFhENUorximgJa6UAhAtHKKPknxtk7TKW4i7TX1iwhv7TuNo8ehAXcrpiMwKogCGcEcC",
  "key14": "384kAkZyQ3R9T1D7R2f9JfFdBzmPCRjKocAYgbniquYDNA2ic6QF17g4ikwgRbBtP4UUkZd2Q2g8f4BYPS83FZZX",
  "key15": "5676kZp3fUwZYCtTzJugizYQydZnoGE4UBtYH6gYxDzDGuHNHkZTBnmBWCnPJetRwdb3fQ64eHd47DJMCuizpeDy",
  "key16": "2PaNZAjojbBHCPC1Zy7SaCMqYhRWacireFCVqpQJXJ1ajJzsTkdNGYTDR43LQACQoTxSugVZgJbrw7hP5xpS4g2R",
  "key17": "5cLBpnZEhNcDx3YTPEypE2MFGwGQ6EfLX9p32CowymVxweGyhPcUyap9FSbMC3oHiRPrspCKHwa2APsQA8E6PTCt",
  "key18": "4JQabxSRPJjWYF5YPUtQuDSpNtsrfiZ6t3us6KjEncmFtHQdPSLGJuctaP28Bs9fE95PPiRec8HFQjmLTkHdhZk6",
  "key19": "3WmkMEQ8NqkxByxvg1PpXKWv1M2gUhrE6q7D2CCzSnkNJ3wXWPPz84cJX8nSjfDcc1HKrKGUYRwUtcKBa5kDQbZ1",
  "key20": "3MT8Uz3Ri8uUBqR2mvbCEygA7v7hL9voiZooDrav5eT93sjDpLfpcoSynGgsBntgYa1apf2mpimrRo4KhW9Y5Pmi",
  "key21": "9j3uqzHkp9QUwUAs3ThmT9WcfHgsZqi1kMWWwxGc9zTaX44oK3wzqW7ULvRdXFKa9Eo42QcYbAXdFC6uJvCUJiW",
  "key22": "2835YnqQCBmUXGKCWw3bjjfWeE9sM8rmFtz25FxULeTvLFUkZT4JfgDAhizCJWhAvgbjLyGKudeGmyRaKzdgW7N2",
  "key23": "5MqNF5t1XQ9h9X4cAoTM2PRxCyAPQNxu8a8X7WGYWSYMLmop2zxvnPPJ8jShGYZkVNHyD4TNSn4FmMWRRL9Vu4wC",
  "key24": "uX358MyDPVbHz5wHjrHviuL6SzDf28E9EhSQ6nR7egBnkrXBXZHP1S3pbWqADSwbPMoGH8ZQtEWgXpFJMk2xx19",
  "key25": "27gJuVzDeLo7vTnvdePwggzAwaMsa7acK16M1Hb4RJSAHvC4iyxpAjYHtoGkibeU6vvV1JyBCnPJzi8TyVLC7Kar",
  "key26": "2xzzVgtBNqQdkaxWRRmzL1wt4PnuNhiCpf5FsSYGLmGFszZMuoHxPPdyS8SSHgY5hgRkhw5yVjB7kQmhhto3vfQE",
  "key27": "5VgKNzkypbskU9C89EqU9TtK362p4r8DbTG7xC8HBQVRhwjE8DNjCrBxMtYTTpjT6hjMZEsku9Dudyu3WofwxMeq",
  "key28": "5J2nizgoju1HkbD9SmuHXgFBZzCXbod1GDhnKx6bJ5WqvJ9DM9p7tpu2izKxpmDg3Ma8McgGgCXA4ueyqbViDgM2",
  "key29": "2qe1GEnCk3PfK1qYqTsD49pNxgh7a8YowdCX1gKupRZXNfJRA5uEsxboFuKubmJ42khRbvXheF25RNQHJLuyFhYJ",
  "key30": "3ay3aTkAquqHeN1MBqXPBsiEwFJ2uv2ukrgQAYegHxEH4yPCTBREJMVN5fQgXDERUNop2ygwDTG6Hm345r9nk6g6",
  "key31": "222MAGrdocyTbV13dDJwJzRPTUkrce3sViRYNBtQUKDw62Q6vjmYjmauraydxSSmU1cEgoGJvhc1Zx9FqmRaJCux",
  "key32": "3bskHDrQDKqr7y5c4bsjnNXpE5p4oVdPzzX3wsZeM6rRJ7Luj4VjsUEubGnfoVpChsXRymRiGsEpG958xAw4qYs9",
  "key33": "gjUKwvYFNkGJqGCK573jQgmraXsiFyhe2Pt4uo8baVboxJ8frzKWN1Svh7wNLpV6zue1TTnLz2hGe1G8nWYWjCN",
  "key34": "3Es9huzxJYAGFukWH7B6DKa44EtbWnDtdtpe7xQMUpbfe41xRS7LTEaA88NuLnYjFfEPkF5Mf3oDL6ZKfYBZC1fC",
  "key35": "3zfWWni58vuWgmdcqWWcwVB5VsME6PjzLkMSJepAa662PtH6LnpBfAUrhAh29RUrjAKQKK2YVHL2FrAfjTENw4ZH",
  "key36": "4JVZynHL2Mgp6DmM6JvcCJCKvZVJEFzGrguk4Td86NsUBYnGheHtfkaGUFckBdnH8cLPkZ5jzvZznTDSfn1wR8ws",
  "key37": "2U5o6RRdwgSra7taVc8ZZE11733p7oum58QTx69LLfsHhJq28Mmhz1TbQgLwwu57Zpxs83NJeFrsHXaWXzGq8DLd",
  "key38": "28FFhT3ta4mRPxwg4cTLc6yPuSkWnnFMv5ULPrE17k5YUNHQEjwD4GsYD4HTQhTykfF9oXFk2XKWXp8witiU4siC",
  "key39": "3u4PmPhjoQbDB4ScwdrwatT3H4MKcK7rJmcZsbJQtC46Qs3Xiabzpq8oVJGs49cmhYzvnCBTxKV9YNy5aFrZrEyc",
  "key40": "4eCYKtc8BdQQiR9qmnBVoE2XdN1dhj6yDn4WwthSEUtmY83N7qK9Mf42VaXNY4R9a1ZvKuqHmnsPRPZHjBgLzZA5",
  "key41": "4brvzcFyEmN7HAp48rppvnvFhd9N5ygAo82gMjuUqymQAmtrVRai4D4Pd3YoaS6w3pynrDvyX1gU9Aj9hiiPS5XA",
  "key42": "4bfU47yXMx4aHkQQV9Lv7Ygk8NSDRKae26AEqJrS2QxRYa6vckUuzLm2CzCuTZRMK97G2Zqe7HXiN1RVvxtKFJJq",
  "key43": "2w9qnXUKN2JbtXH51PJMjbimWGopjBui8yKn6yk7ZGsQC6jG4H8zKExavrKqyivYkjwQ9cbMXi8oFFQebhw7PgPF",
  "key44": "45hbqpCLGFihXzShx3Y1qQX8PF2qsiLxWmoYUpG8AW7MWJ53xZjNKoQtoArPhQGuXJWykEz2UHppzh6LLc9ZCk1V",
  "key45": "2Mz8KXpEETYfT7jh95Kr6Ahn2bXwRsZFd6x9iib95iMjGEFaXPs4szVnjMqqcrNFgnAYZnsYCaigXcvwLqt2BbTA",
  "key46": "47XgLRwAaBNZ6HUdEMFUe5Xd2k9bqUH3p95v4GjZGy3wb2RdYqL6khrJar4iVv6S4McxszKfbQbh2u3dbxL2SvXJ",
  "key47": "2t1FZQfZmADEVcBYWdTEasZpF4iXkrZdYAAEGwZr5TdeCmqDnqBAjnyD2SzpCX6TYd7tsyEu9oMsgSknb7G1t5Ln",
  "key48": "2muUjQ1i9fCGSVcvBNZ7cHPzLjJ9YpujWrR6quQsdEjJ1WDV3herGmHqNtFiwotqevoYZHT5EDBgrqZGxMr3GLBJ"
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
