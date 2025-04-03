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
    "3iseoPT1saYLDav65PUeWrycLwDd8ZJ6Sf4Y9E2KgqYMLn6PM58TZLAUsFDKHmXNiNUpDPm4Qo1a4f9gmH7SkMez"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MUD9s7XmMB5ntmCuPEyJ3PyRcyGztdJRAAeMWhfL2QcQw4LP7NBjVNnDjbMjT2oVYsdNR6Adwz5gAHSoWB5bbYm",
  "key1": "5B2mCeazofsByLLjHm7YHD84m2Pxqkq6cMqNSubDqPr5dNHqSdmYbwrvBMG4DEQsWwYyUHbKbPNoJaiyyWhAb9Cv",
  "key2": "4RbPkfjnVZbHVUf1HV1saLeXt4msB8pBCZDmj5Ygvvmhb5hHPCeujh9woEqJUsGRTyCzWEVaS4UyBKAATjBBX7y1",
  "key3": "r1Gn1zFTQsMZ2Zu3uCqasiFRPwd2GnQNMxes7MkqWQbdj75Tvz3YXW4vhxC5PoaweX2aB8bRX43e6hmeuoRhLDM",
  "key4": "2xv5HVqvMuVADcXiHKeLHrMGDMgc73CGhrt7nzM9g225hmfSH9j7znwaeW33qktWkaYdAuMjAp6fLfbtu5DmUWyT",
  "key5": "4CT4ieRKDYf7dmHgMnjqd2qbsnBzA8ppUUw4vnZzBL2eL9QXpGQRpwrZxTjAJ8EzMUwbVxzQ79unXAcvx9Xt9JmQ",
  "key6": "4phNBDUZgMFBopDMuy8gYRHoHXTwgvvuDxsi5ndYEXzbnLAZvMSnyoXesB5nD9vwyhAFUG1hQyYUbujP3aUnWf9B",
  "key7": "5DxCumS4yqfiyH51yBCmhPSR5F5Y4XMMeH1eFr1TBjaJrMhBoNP9ivRNUxWXDx3YAcEArckM1EX9xF4RND1tMmVS",
  "key8": "5o9vFDNtKLkFzf64pTGVYGHf2FX7q7vBeqGUD4wgdgbpja5cvCvvywgN1ws4JYvumirJLTSWe5KTFr1fauHcGAZ7",
  "key9": "4Tuv3J3ajt3LKvgqz9cjA5PgnFt6rDdqGYdyRMiKqyZNjmBEKLABju4A4wxupr8D1ckRM5qZ2wGgW93t6HNesh4L",
  "key10": "5KDU5fUTcinCRS5MDfmpoioSLgoXr5enQ2Z8AKzmTVR6P9iaN4FtLifht4Hd4wDrGZMZp9JHprDCPHGZqLw9wZ6b",
  "key11": "616HYJdatMGYQbs9RCztx6hxU8BYrditPigFK7Wzm5NX7TjxGu2GhCwzyfy6FY6PfnDR6vgGTpJt8WV7cM2jnd4F",
  "key12": "5rRLBRxDfsAqPo2A9QonouddwZAbXMw2YDoLNqi7J2xPKLxwys9Z7AcM7YVUsdc7T2ZeJoWRK9bQ3TL1vw1C7p5y",
  "key13": "4qmKsaxTMNVsuU16A1w6dufDiff8KeXuKN8cby6DXdA2FBZkBZUpUNy2ePibQJAJpTNH23Hfwd2yAzoZrCvYJMyp",
  "key14": "YZSfE9uLr2AzwqyVdNccXBtReEchGPevJxnjfVMcjyTbE8V7f5XN7diqUVp7Q9dUuepH8XfaUnPYq2j96Sj2ZWN",
  "key15": "3x4MowP77mGnKR2gxY9DD6LsJG7EcDbwaxf4oBhwwBZB3gd5pnxg9ifNPVJaZa8vwKGazahD5xhGvMK2TmVcanex",
  "key16": "4ZEXSZHj55LVQ1s7Tfh5VhWXBQNdqoKmey1KHZqHa4ptw7YYEsH4uW7E36y7nGQwQHDzPyYnexrrtGhWFREmo3eN",
  "key17": "2HobyESqp6ZiYriMwkmCGzwYNy2V6VH1XhV4yAmqhCzwfztgYGhmCC8eqic82zRqdLJjSu2UNrDEekgSCN1RN9eV",
  "key18": "3NMFh4T3XWn7psW5em26pYmwgzDqNiGMvGYUwYDidj7X1zg6y2Rb6E2u6jyGvBvHEzi9xJCsDu36HFs1maHt2jNm",
  "key19": "QXjW8KSBjUGHvfAZqbNRLVwN5Pb7nqH5cbJNCptTbX5JQ9pwPzgQ9UcR71oBpZ7ZSwzyXQmrbHEcJ3vPrxeJRUQ",
  "key20": "gpyJWNPuiFVqvR77XV1UZVvQPHucF9L971BA8H1zp2MPeKeH2bWKa6Vxsqtd2uH7bKSoVpUANKxCbkQmjmwVFGP",
  "key21": "65XG3XbAJpPpxTnyWefk47QMzYcepNQVvwkDA1QdXegob9CLY9aTh7nu2orimd5FP5SJFAUDW2dhLaEuVzTdSA74",
  "key22": "5h1KvFjSYAc4raCdS7fkQ1RRnLwXrGTJaeMzbjms2naoZ6WUNK3vbhJtNaxEKukAiUgQKeF3Xws9UvdBaqYjemYG",
  "key23": "3TNuYBtKK3SZSTqGuCZAWyutwojUomBhHmm2rSVWJs5mFvuRXcvqk4i16ht5SKk9vdfG36sBuk5b1Umxjjww8rkj",
  "key24": "32DAyBBN1MUk4rv1eekrDgHLQMN9fB5Fu3vMdHw3B5Fk43qKaSuMx1aKYTDKNCcEefSM24VTKAj1QXgYRtKyVcA5",
  "key25": "5GD4rTebpdjCqtQC8wRQPHwTf1eK1gFaHevY63fqg9i4iQcWJUUoqTXP3UxXyD6DbScXifPXWWvyqSeLzMzsUxb2",
  "key26": "3wg5YXsHNanruzESfgzP7q7GuQAjMmcLCnZkvwBb2agPtA9LqjH4SMf7omy3hjeWM9oXqABdXA2FbjFohA88uGfy",
  "key27": "4cRFEaQHFNMLRFshLroxZVU7vc9WFyvWc7YDhXbzR5qhnnsE9KZbXzcBNzBTkxNvj93KCnyhGnR1yPXM9Q4YCVeP",
  "key28": "4Bi6XTbcaduvvg4R9ZWZq3ruZMxdBxgu2jZXYLTGiSByX34EzJtHbhHj3Cj21o15EfYLUiEC5VW3hmyTVPrdandp",
  "key29": "2DbnMMid4aF4gdhKqE8w1tNs8wkJbKNBqXn1V3NmT6LpoAdHytaXyGEPBart2TH59unzw6dfbz1RAJQwPmqxk5Go",
  "key30": "52QAoJbFWP5VSBkvEwTbuyx8iUbQWbfysGhgaabw9zn9vbFW5LLEzt3ANrVx3nyPy19X6oZLQwpfisrMPiCN2X8a",
  "key31": "5kQ46N1CPF7n7gUkuz6ADeumyKZWQMzKDTPg3rQ4XN98bdY878yS7csGSrpJcdSokviJ7HyE9VsP2YjGHzYPbga",
  "key32": "4Apb6BuZM7koNVoBgdVNrXaB2pkceT9uCYb9WG2cCUA2CRXDBvDhmgP3NFVvAP8J65vs4weLWNThjKkhNoSf9d6j",
  "key33": "3jBeDJ6STFAEmtLaH7m6Jhz336tKT1D5mb8b9CZEDie2pG4Nq2USX6ivULZ6ib7kcH3uS4Q5GMe4GbdedaFvvAiL",
  "key34": "3EdtoXUDYR1tidK2CFu5JSDaXtwTMmDRyf5WYY98EcRDAEEgfgpq6MiEvkbmawuFs7YUbtrNUcHSsU4KMMr3xQ1U",
  "key35": "2KPMf6eyLyKvgkK7uRKzNBQWCv9Dqp5q1pEYaE5rLQHNEmWLWdteXdrotKm6W8nTzANWFAy3nivaJWCsVvUH7L7o",
  "key36": "3ZPCVeRBA1cQwBjHvJsqcjS32nqErzLLLTNg5vmiWQAVDjMjm4C9vpxqGy8bumAVXHPT73GfcUcLo3ak58Ky9C9b",
  "key37": "5rcfoRvkoNFnzRtXW6ZBSC39SUM1QjEapcW9tB5yLEQ2zSGKGbJF99AythYFfe7wjPQgpgFRSKSLAEP9etm7HZgp",
  "key38": "3MY5x7haRxiZcnaua5wX9Nfc9QB14ktZYqed21YtYX85RqxoubFJPj3QT9gCurJyU9CYSJ6qPqbDcktU3bt1WWQs",
  "key39": "4eSMnSAAC4VPqzkyBAGwzjxztYJn3TZhDWJfUVrP1vCsmEQZKL5VXS7CGoS94dui4sL9QrhXcgqCSWARPX6nXCru"
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
