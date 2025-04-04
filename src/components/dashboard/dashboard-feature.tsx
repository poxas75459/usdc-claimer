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
    "5SuZnhqUY2jp8vxRqZseMWbgywgocs6acJf9HFsC2ua7qcWxZDbAQjkHXWsAhbt5AonxD3BGtLXnUQBoZXK375Qz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36aiPvQhi4NXxb6eQYYc277v1N2ZYF145fGQcobowmviXQQhkVbikk54v9gk2USFV6ef3UBtwGx1BtaQFDY2zst",
  "key1": "3d926MMUcjmnm3g9PxFoK7L9PFoG3WjMJboY18WRCft2SeWftGsQ1BNuGBPpbbY2YKu71Z23JCQvNgMo95hjuQdJ",
  "key2": "3uESdBVNh2mrtGw7EjqSRik7tkzBh9mkrGMMYgNjktw6uzZKU1qVoEU9nHMXaL7G4T15ZRxaB2WjEaH1wR1FbGCW",
  "key3": "5y6ow33jq8EGQzShcyDguDE7tppavbT6MoGoKfdM8rDb9qTKcmCs3yAsQ1akPAqARF26jjZG8rhW2ih6ZTbDy1VG",
  "key4": "FZKE5ae4Zbhk8AQUZ89NB3mRi4cote6tPKZS8gbnjvJ2nK7zUpvpb4V4Pxe6CCw6yPh7EYbx3TASgvMn6FzjyUj",
  "key5": "3WSFgAgfymwPMWoYBsiQ5Fb1jkzFLxPNg6LGVYB4jDTFD8MwFXVv3ULYMx9qrBpTUyVi5DKEusK1rkUUzNdvQDqQ",
  "key6": "y4yVgrAUoCsQDDp6rnYNw3aU4W4v3ZwNUYSajCiDZS8LGQD47xLyC1jYEQw59MHu2aRW1KvojVqTfkHN2FYoEtD",
  "key7": "4hGaShk8crHMrKzgBK2cD4nXUb74s6DjB6NHudKM66gERQEvt4MA91xp8pyjuP1VnFEFPHhM8dgsNZmE5GNWiBCR",
  "key8": "4ABnbLh1ozHDzVrMYg1zPk5hkwpAcKmmCm7APjkzG5UFnzAwBnHSCPAyeN6Bx9jExp3VBBZbEkact2pGVy5D9AM3",
  "key9": "ZwgyRXgZHZwyAx76dfk78sUSP5KmRDNTaRSED6Creao23JSC8xXPpCXKYH3isTeoRWYgwK2acHFoX7vwLRgbbey",
  "key10": "21YUSRcsKeLwBVziS8fLDeq4tQ5zuYAqGRsyMjZ1tm5nc7gZtKXHz1upd6C8RdNHbk2QcPDxy7zs26BjmkPmUuaD",
  "key11": "2CGzdGM4bSCAvz3XJQHprtx597am22Bp325iBx7CnpsYpkmx74Vgxb4R4BLrzGWx5uBho9KgLRMNHdVneKB5AsRG",
  "key12": "53s9NKSLUqXSHp6RcCGemLjZqtkMNQxENuThLrHYVw3dA8NkUiX2WGMfLWpcj7sqpaPSAaCNBLVrTLGqXEvSLBTN",
  "key13": "4wgKTUvppCLNpp3CpfvNGvRantVYESs22p7Hhe8izTHn1q39YrXz7B68HKUUnzQ6RK8duetkwhQ5zKeLvNSKH8Lz",
  "key14": "2PwygN1HdZPSijX6Nq9gYiKfGUpRKMs5hsjYwiuzP8h9bmEJR9GsLF29m1NzzcjjgC5PtfeSjY9jUFMUZjfVMAtq",
  "key15": "BPKJLZFQQhd6LXEMyYEXkPDaVoqJ9vhQEeJqjiqy1t8qZRotiK1uWBzwi9Y4ahodNL9ieJHLUCWYCU4FFV5FUDU",
  "key16": "4SWuuE889PoMahqS1DAwGxwCMyCtXEaD6BjE8oLuMEDxkynhxmXGVUopBpFkDjBcBmjKp9niwki2kFr7C8CquGzw",
  "key17": "pcWJTLjucCUjSEBmReXfYRPAB6DrDzPzLzsmaCDqA9jKrGa13uj3SVff6tpECBZ3tRvMLhStrVKGzEDt23DmXJc",
  "key18": "42NHrD4ZxmCXf3bnAggrj7aw2SgCR8BSeJWjzbMfo8s5P5dQngR52JmsUqs3JB3S4dT88F8BpgPVF5kpFW2KWhC5",
  "key19": "5PLBu64oKpkeB1EsTUcJo5Wq1DSEWA2MSWik9ZFBD7fdrh9sgMw2pbqFN5qrG2Y7tNwYrqAnSeKbXjHXEomidhiE",
  "key20": "4VP7fDtDLRVWjZWUqnUqsLqTUV48t2FRTgcuCFgfQvS3c1gN7CSzPYxBDr6CxxrLreubCMKP8j9MxKHfWaHLtc9s",
  "key21": "58QaGMBhCem5HDEpXAzzut6UFgiYwtNpjDuD6xh7Ft8qshBhpXXasQ2NcQkvdABQzCTxmTyNE58hCYQPu751BTY1",
  "key22": "StPrwAQMjfbzMa577HDSjoiDctLF1V8d9MkSsp9eCD1srKVrKcEgt73UBzXby2FVa6nt3cSQSnLsUsWxpucSBbR",
  "key23": "4iT9oSk3NL8pdBJqWrNguPDZXoZNSfWE4bfC1UeF1JUEtXbdgtQRgQtYaTG6habMMwjg5S53V8zXE9GXe5bfTjyr",
  "key24": "62Ww7ZDnsfgWXcxaXFTvLm9p2QSindkFhzWLgaiwgCqM3kiiC46rbhFjZ2Fyn6yK5t7GeN6jktC65CayRC3sdqvh",
  "key25": "yGPptn26q5ZsBV6MvrBM3LP1YN3WdZSDumuqCpbtctVCucTuRjS5VB8Y5b6BCGqnQGy7p71QYaPA8gYBa262zot",
  "key26": "5pjcLVwSSeRwwRsBXpXq8S43j7RaJCuDUKWGz64XV6PugkbU5yHLCJTyzsGszs5wUFrvvgdkatAi1Q8UA4CFY2HN",
  "key27": "3jVGQt4EJdUkzzdn2ihMLMeXRTZv1iLnW3soRF56WZhTd9RYuyJbcPWCrYYueVe9tv7bNkcDTxyTSMNHp7qzf7bU",
  "key28": "2evo3gqAy3EjESgirDGykfVrDnU4F5x4eEvFkumd4kQQrg7wweznkEP1gUJufFPgQAkAHv3u6ZWmSn3EfezmVnj1",
  "key29": "3nEgKjjPqaxc5FshLN4zu95iJ4Uw7ZcWrzdGg27L85zaHgzoLoWTefjzNiZP5eRMcTb8MRGysmwGGyuayD3VpoFA",
  "key30": "zk7SjUSrkcKWKhAHR1SpgYUgDjD5dEjAPx4RwhCAiGgtLNfCptWqAsPzLUx4TtbZg9jybeRn3NsyzeaNpjvA2j1",
  "key31": "vsfN5S39z7hG5shHHLneLrSBW5x52f4ZWAbSbw3oTJwqY9CddT5y1nh3baZaNQN7rVqKHHNWT1WLENAoFeWK4bT",
  "key32": "3vURJcPfQk2e6reFk1iNpi6iewxzPGEYmxZqwFrtzAptiQ54awVkUaKxC4TYqyqxbSroTPjchRZJPzgSzMaLMbpQ",
  "key33": "DBuckjBRNMyo4MwHdrqKiPheL9SEEDS6TaDBYtpbCX4YUVeaRn2gegKVt7NEUXbyAqiALbWdKoC4cZJF9HmbptH",
  "key34": "Tjww5EQ3PMboruPa9BtHiUAX6JFQ62g8EpVjMoJJ5KEeojeMCSWN8XcsruwvMsGdJPdiCe8vYVCFijLj3pBhZ98",
  "key35": "3XA9xb3bUt876srXbHuKJDyPqEBEkfSMUcdbRTGxuDkE7d7uvGgmTQiCSFqYx9acZ3zEvokF2vguobzfgwUFZxmc",
  "key36": "aKDQEpBTY7ogsYp8mRfK2MFWaHcu4F7ahvqpa3BMrZ2pcB9jAQZ4k51CQWSosfVdjfF73E5JASwuvVzkRGMe1gR",
  "key37": "uW1wVc7YVz3QgGWAJm3y5h6t11VqKVWV1deAkJaQDtt42FBqtoQ4KCbsXPkoQ7RMJoLQZz23W4CUSofJSZR5DgT",
  "key38": "M3M4Y9yXiaiEwd1ShC53MWNBbpmc9L57hr3iaXjyV4X2nJwQjjqV8KiASf6H1FRA2csMZg1ZLgrEFUHW9MSoBER",
  "key39": "2R5CjtNqFk65TLsZCSmXQn6TM71Z5LhbRxHPLrdCaRc9kEN8XzAdYoRY4mwUy6DJrvmuFNGvcGkgBoAmnCT9ZYik",
  "key40": "4fwLAUyAeu3CbccQotw9Y8hDmKgbiPwhBFPZZVe2ytznVcPU2NCWUPCPJWap8JkisvzNfbBMePjL3iq3ePJGnpLS",
  "key41": "4VkWNoeBPSxfe6a5aJChhBzymMhCBHFAgfjgyz1DsVUv2zCrwFHfUzTUvdFcd6Kbgu2xN2U5wChihmjsy7h6LrSo",
  "key42": "36BW5H2zbGnK9pc1wZy83dr99yW6yZoDvd7hhB6TgNqv82h7yZMn67isTNov9sxd5KogC15e3PdGTAFbZZVqGFwt",
  "key43": "KQ4sHVdsZPfDHza3v7pxW8Jq3ustEtZx2Zw3bQQuE2K3axna5RPsryxzTkXJ8aXe1UPvhjfAwdaQgpquEz89i4G",
  "key44": "2xK3NPGkNrLwzj99HJykmwKUp2XjdJckcrJEteM1XUqox7B5zpx6tSX8xxVqWzC7AjFrur8qAynhvzGtAzsdhDjh",
  "key45": "2AgMSoC4cBLRwjXFV1mFH4hYAUeJqadjjnbuWp3tyr1MTV1pmxgXCB2KzA7agfV1qqqrrTVz3moqpG6hyD3kSP3R",
  "key46": "2qxB5B5yqFcje28GGvZc4EfmWASe6e76DLGg1ixi2fFyp7daA1Pb4U7JMLtmeAaSkzUTvCLoe3SQWEDZXZvdDjm4",
  "key47": "5zEmEccTtueAjcffbeAfyEBcE1EZGv94tdNRy7uCC1Qiifv4bYrZyUu3kAdH2Qf9pmRU7xxoqnL7cw3G68aVjShS",
  "key48": "2Z6qQaAQ4zx2ntWnrqzo44YhCsJgReMUrNy9s2coyyCa46mzLmUAkhQ66DXymoakQKLWwQiK1gKrxTdT57y9oTsu"
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
