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
    "63nk4BkGwwYFRGALmAAV4ng25iqXXuRnpHm6tL7Ho6d1UnWkULrzZyBdThUe4GQVyr3SmavpMAQgzqbPiWmap73R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2d1gRxBBBBZnLyC23YjUnKj9Bn9TZuBJpe9zYjvP1tdXhfbM8cvMAS7Nr9pjEKjhYcSyqrWj5RfnRRGe3ShAqvVT",
  "key1": "FuHbmyFHyomzPESWYEGgMgvB49U25CgK2Vd1KaiLQbmC8VoYWvUrvcaHc5cdpmWVPBf5FMB14LZRRoxCmJ3iMGG",
  "key2": "5Gzr27KpRftHtCo2J7m6zAZ9cxcU6FW4Wpe653VYekkjvNGsoPPDMsvkoFtkCTJqKgkrfZAj1VCJWeBZrx1AokY2",
  "key3": "2eYpbFNFg6M49yUDiELLbrvGorD7TX9FXNwZQU5FtBxw596QA4auEeqwwCqNq333EdmThaUrugB5C9PnFspFGFcz",
  "key4": "3SNMc3dMhVFwsn2AvEE3BfqTV9qLzGjG4XL5JKGJ9QxqupsoCBHTVw5iBy1bHxyCupEjAVzMsvEHU9U999NRuDzk",
  "key5": "mYhqyrYBzQHGTM4WWPxfdkPFR9Pjxf4F1X9gfayRxK3sEwTEfX8ZnpurgP7vfJfYBsmYCgsaPXciyQX75qjE6CD",
  "key6": "h55ouKKx8YpJVXzP22F9NBPyr55JFRXwX6GTu4KgmJvTvqZrnTNscpNn9B7KkTbbE6R5o1UjmaSJZdzn2Xg7gPS",
  "key7": "AvufCTL3SekmAkTRrmmtDBeBW398r35QKpYMAz48HLfXoSpjuYBfBrWbmquXt9oDnaN8eKxEVh5KFYzgkFsQTgm",
  "key8": "2AZFHdJBvDdXJJqtRh14huyxNPYB8aTHS1VbPTPPe9DaKu44AYjpGtBvnXReEiYAU6jbEzQM4jJJmet3WZjq9rnQ",
  "key9": "4Yr8QT7UxcHFb1WYoptivYrcuE9uEnEJttmmSBJbNPKDcTe2eGDtqiRPc8dzHhnCAbQD5bUsqpdVEeVF1QSh1Zy2",
  "key10": "5Z4DDpPrYX4PCiwRNBgzXjAhU8yhHWAsRjKPPpTQ55rPLpaUY9godxfsbB9EGGyJTL7E8SBrvYvvCXnbFkKSDN5Q",
  "key11": "Jgx4vYsNYAFhyxH8iSkHQuZRvHk8vevV6Yt1Kf5CU8hCY8JZH3gws9UybeL4tKAmSvYJrmxRufYfKuki3BtZrNW",
  "key12": "4yeFQfhWgCRZeKEWqzQ5UFEnyyUgD2aU4iMbc9cHTQuocWAxVnC3qcq2jLtQ6cUeCEQS9muSitCk7VEqaynDkekb",
  "key13": "371pk9dshMzxVTkKRjLUEqwZudgPgy7QkApk79hPLdJF3xzhtpQuAxuSCvvLSpVwG44Uacv64V7UTHRhEisZetAh",
  "key14": "3KPp9FwttPr4ERh37S69eKW1dE8psw8jRiuhNztroBMt8DWRYTcdL7vmbjrCz8oBWzo7V6zA1qtL6UQtHfLue1TL",
  "key15": "3YEdorVzo8BfA1MLrCf5eNrcebVXhkmkn6zPX4N3S2qsuCBqhkRYEv3t1KQXpMo5qYat97WSS4fymXpy9ZBrRZrL",
  "key16": "5ZpWZRKoGj7XSGbsq5y8oTuwQQJDKEHzyGQa1YHwW23kmUdhZAqSxWT6p6td96aPozM24uWyemor1X5yYrc21GoY",
  "key17": "3oA36sxH9MNVNpCSykZHCxKZYTQHx4qReBxy6RFwWp3sdUvndpPkY6oTWE9xKJH7rhp7G3QJ7WE2SqKgEjubAFES",
  "key18": "J7Xv4ENa6GAJQjBAAAdEUMipAt6UtK4DpqpHap9GqYGpauhTyD73AzgddLQgWgq4XQFYTR7afNVynujhb4iPn33",
  "key19": "4cU369zt9QFxzScPQrumYv921pzcnvTK7xf8QTod5VWxPmbu9gU6umn93wGgZJMzbU4173Ye94H7Vue8HtzpQxyW",
  "key20": "UXfizaRWapT7XRXqNDRnbrKpC3c78bTjXJA4GWhwvKBexW3BqwL7rSEnidgTEvhdRNMkTaup6htoaDYk9KyZ9it",
  "key21": "5yjfhHyArCoh3Qqoh47LFBZVownpHpEk3eCc4iAVYFbdigQj8k8XeWY6MBqPyVPyJddcdoW6c7JmCZNF9sZhkEFi",
  "key22": "nE6BtFTsMdekYZKvDJFQtHokCsSwXiFuY2pbwfi8vTqci7DY6ryaM2scvNhkcyVeJJ85NKSXFKkBcMywhEPb2Cz",
  "key23": "5kNcXLMALctAZvARgN2wwfwEknLrK8behjh7WntE3kHiuEXaToYHPBe9w9b7fcF9xHJqpLYK6oiFTgaDHkiEWqqH",
  "key24": "2XJgL6t7GduotXtPw1HJXzKHevUquvme5YuLaNqJuQH8pqZyQAUTVXGqQR8CZudCVBdXctS95w75TwCkDdNevNBH",
  "key25": "45boXQssjnZxiVLB1ss8fWimb1srWca8xNkvAXkuweD6sNpa9LDtKCyyuqhLW92WzM1QVwHGmbdv9uomo9AKasiq",
  "key26": "22M7SNBPbms8MxAixfrvKquyRz7X7WSkknfTU3Rtu5C61xXWbQkY7ebEpZuUsUWXC2JGtDQffvuPy3cSXSQpzuMc",
  "key27": "FxY2iinHM1pj2WH63iahUv3D7mKHz6tcmLzKiZNFZSihm5aCvKGFLo4SST3nU9auxmJnGutgz74CerMseJhT4gP",
  "key28": "2KkVJo7yM1bbRk6dGe9GDo7oVihN9iSMpeYuj1fxyr9iLFQmLwRisnz31AWMgxG9UW3eXmca2ogS1anSTHika8gD",
  "key29": "4xt9fVmBcVQuwE6YhoTNkFTSpizSyujZZ9A9px9paAdyHtDhm9d65ueF3sDUFEECm1iJeRHJcjW7BqBn8avQ3h3R",
  "key30": "5c7irqHBDMBjboKEfxFtshwFgDwg7Jj8dmSyFHvYihovNoagcZRXsFPcuG2WVGUKfsar9L1fHFMQXTogvuk2XmoH",
  "key31": "5fJXeansmUGnRzphq7CeFVxnUNEGk4pxXnVNUm3GPHFgutVnHznuaJqtJZjV391eRjvGe4LA39F6sha9vveyaJgc",
  "key32": "2D4vFNFx84aAUKn3rkHyhEzDcDeX5D9FrzBv32MyxYqNK4B4wrZWYyURjKzzKx9bzuBaYR5YgVSAmB9p7YUz5uRd",
  "key33": "Khtsj6mq6793HCKeRZD6nwcmB9hryHNQW2ZH5dxptvRCGiJfxr989FvzPg9r8yBKV4HHQHeMNiG3vZ26PVnbXYc",
  "key34": "tVqwZW6d8CgevJFWY3ZkV7p3KYEJrKqvSWZNd4SMbBQ2fuGcd1YQ7bHmmpevYfE3oDfsxZtFW7MKNPeEv4fsS46",
  "key35": "4pzkh93qMbtyYssBHihMRjd1iPqFxq2Y3H9pJHBrgSSwgH3maGfVXp36VokCzMzqGhoXmjQCFJEBMUr4zuUZpzCW",
  "key36": "56566ibnNEjKZ7AbqERkvPVx3Yh3Vr3D7g9F3ZrucqwA4ajcjxxRtj47qbiJ69YAYBP89aL6AbhSkqv6RTS1T33m",
  "key37": "2PJ2CswDThj2iAFEzaV3QpburBaQu4G83PncLXhDANVjU8tumxxgAcMoHE5YAk38PABYz5HZoMkK7HDSpLkxpBxB",
  "key38": "5cQnXKuwwnJmp5wwCL44RG3NP9u2oNpzSfJsRCwMbrSDwTo8iHPMvQVedUN5PQs1dZ2HAQCZjyZcme2MdHGzeQ55",
  "key39": "5DpyrTe4dvbHA3TRnmFGemj65acChNx4aaHA9q1qDcH89wd9QofGMa5iF6pVzX8HK1suJy9RmQboHvuTuJqpMMnH",
  "key40": "wdLCsigyBYmXnS6NjSgX5E1tiHSsdYXzgXgTA2dQvJJHLpgZrN9wAsaP9UNqvBad8fLHEzkNWCBuxncbwQ9Hguz",
  "key41": "291JKenMQwkWfQABwpEe9mrGhYUYSo9oHGBGqpk9bBPZEkAvaM11Lm8oCiFnE2uz68jSRxyNCwQUyM9WTyVoBQSa",
  "key42": "462qFsqMvwnLcxwLX753PLZKyAjoLT1vBY2r1DwJ76WYW4ZNAaTAo7tDviiaA7nDVjEnAAomgJzttofxMg4C8S4z",
  "key43": "4joFHMC2iU1ZsVx134ZDofGbbfym51h5NMheZLfMjNjNJfo2QajMmRojBvtTEmAjnQ8KiezAamZFiqGLt4rq1qzc"
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
