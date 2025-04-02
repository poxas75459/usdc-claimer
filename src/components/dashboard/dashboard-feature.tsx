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
    "ZBo6QxwxhAGxmyJ7dLW3ke2KGnFNyEHJo3KG8Lf4QB5VrVh3gsqonLuAS6U8PE5J7w8F9SRkSCNmhZT8pDCxjy5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46f9iRb6qEos7ngSSYbwFhxYcBSD1KoLxWcswzVYeC8HHZzJT6ut7xc2hHRNzPBNarVsApzFsyUvHnpCQ4dHoXLR",
  "key1": "ZZXyP2FFpVnSQsazMmN7qQK1deynBVzETUULhJdnsWTtobr69uqcmQZwqKu2ectDJNKjBj95RTzSbRgtUFhgdDY",
  "key2": "aY8Kqa5YPYtpR1mEcMpZj8pMBa1x45tYUsrzzstVWahJ1Cm4U5FrcFA8fuABRhQzANjRA1AmMHQETbmCYp7Zfbx",
  "key3": "KLMigWXhhB8TACS8ePuFWLqeFbyVRNdEZJovF35nMJRrMR36byLRHScJVXh8E6UnAcN9yDbGrvwP65JGjyY2FC7",
  "key4": "a7qvLGJPhJkSkhSHA3nqbJdsVKVor2YGkVmg7EXqKjgWVGnWF9FpCt22EbD8WADMddwfCLXZo3r9nrt1bDc2M6f",
  "key5": "hcLxLrmEpwAkoMmAoBUXdntTwJF9S9rBcA3Zfc6fQBiy3JLgk7Z2n7MjP3yg1RDdhaTLimrEnRkKDK8fBx2ESTN",
  "key6": "2eLD6nwXYyhZ1qCs6uwC33CKMW92cRR9n4BRsdMypd8Mbhp8VCP2XA4x9cfnhwsdAdoSxZNHHnahnwA49kqY2cM8",
  "key7": "2zS668Sdq6NrVtrZVZr1P8zKBsmhaGAjfgTSENY3Z72Gt4vovbw1MLdcZChRBqwMvPhyo82avVwwmah76S33iodF",
  "key8": "5KVZCx3BuKL33kZjCzYvxkjAUUczw8cyWCQZReLviRuQEoxznxBRUGmVkmCtqxADJPWZUCYKk8PfUdNpCZk212ou",
  "key9": "4dVQUyxjp4txqQ8LqxiLqHerfZ6UFrRUDHGU6vDuQBd6GVyqHBW7FBGK4e7sPknijjhSGmymSvCRCHuiX1tQ4Cd1",
  "key10": "63nsrwDYxGjoU9N3RbEm2AjE7WnpPbUwrAK2jBVoiKde54Abq36nrmKdRnaySVqYVX2AnfyFkMJvE8ovRkikMuD7",
  "key11": "65YBLExRGnW3BxKvryQUsuutbj6SHfkC8fMQ8rFa3kRvt7iWVRNsZ3TVwFDr1PvBQuVCxUnC7hNJZh6xb44s3zMV",
  "key12": "5rzqZFTh7FMovKdT8arLDkNZaNi6dTn9jGK745FLLL2G7qJ12aPugZx5AiX5TAGUVba2Ejn2YojVRwryArNYXaRs",
  "key13": "3PcczRQReCoaS23LTeERQVnBRqftX434GCDDqkqdndph43QJN8sSnhUh8ZCywxbqqTtVNPJQStSu3KNyYwWXEjSS",
  "key14": "4JgRzkHrep87isEnhCjhBQwZjjbtXxS5vLMEow94ZEpWJDMF4Rshmq4dbTmoTKE9oaRhKhcX9maXUzub4GrwazNr",
  "key15": "2ciAyvs8omkfZkU6qhkxbeXTg4HASPQJjthEiY7xDQCPpV2BpEDhKGsx59WakX7NpBzLX8YbDggxD44ZCVK6Zg79",
  "key16": "5pVcik1CAxEdg4m8FLxvbExYpFF1gTbV5xx2gZY7Hvp2TP7dDk9hWo14YMyfuWHZ6GKXJFksy6KidCfWXq2aGopT",
  "key17": "gS3ptvjx3iPdYNGoiRxhfEtKm4VJ6F8LhEdFV8BeUo3Ffw3SHd9z3oe94HAriNw9mnFqQtF58s4sHG1f97v5MQE",
  "key18": "2ibE9E8Rdkt8KYz3j4jVNDbGDEyrBng3bxywcB8CLAEB91pdPGDcgLJKFi1md7ZjLX4RT4uzjkizy4jRNoRqTBwN",
  "key19": "2DNLGKUTSdxJKKpA7vAxdPB9RgxMGjKG4TRYkhXKkNpAHg5nQTbPv45T4wjvbWai7TQxSUE5BrCgMM8KKVFRJAmz",
  "key20": "2p8XDqxXGqmrQa9MVLdXDHMaM14Zhik636nNvhf4G13CRhAUjDUW2xkBxsfLWStXrvxQBH96CDRcDSJfny7qLenf",
  "key21": "KLP6cf5MTt9BnB639xjyKaVEphtiAy2Go4hXKxkjPDEPXvBJCGTXs7QJWqMo42xdZ4TJ9iBQaEw7eaisAeZCQfE",
  "key22": "4mqziatSHiVxdnjPxFSZ6QD2mEAmocdTBjGQzcnM578UQbSmHzvVinRDEeuJCYeyb4jcvToYPLKa7s534yQMHP5G",
  "key23": "5ZRx1stGf9J3Pqw4wxcrLpfkyZePyHZa62wSoBNNhqnZEVSvBvhpMHKk4sExhYjHsJ1huY6jSn8hrzBqiR1kihLN",
  "key24": "4hq33so1cWjujzMBUbLVRAyDLZoUmwetK6S5RbaiL31vjtJ5yGdwXKechdTPjDWc9vFxsnfrMQpjexx1y95GDRgk",
  "key25": "4wZwMH2deMNfdar3K1EHUZoCfPZjMf1zTWdb6je726MmTWDoYBGRmPErfmcQRQYAfsXGKiwDJHjck63wt11ggvXR",
  "key26": "4R1yjxdJTiYYyFhSGisZ3BcdT5CQjRefPvjRjspJYCutG1PFpFJWstA9quvomKNikprhGATF7rpY1KydkCuLFQoi",
  "key27": "3x8EA4iAko897EVJwMy6vSk3R4pSdyYsbbHtRzuHcLu7DZrgxuVHuhcWhSZBjLVejZ1QBrE8Wu92f57YmvPNtqKM",
  "key28": "39axkKk4qMxoiCrgPjfkCjpFV3w8PmVw3rbxowNh71cDoYShTBNwQqg6chYeUNPih4etzxnhbdRne5X6zGjfYFsc",
  "key29": "3DXs5AvRakJL2HsGa4AAtnHdi7KQmvDgynaj8rYBjcmHtw4imewAWV7LD3e2xbi5SruBV2ZnM4eQeHWADX93AyK",
  "key30": "4oacZe6Fooq2TdoAU4MmDKn5M89oXTtEqs4s4G8NyGNPtQrmKA4ZeeJT6FULVVVopRkC2ptHgdPYzLDVagtxmJD1",
  "key31": "46CYLGtXUnNP6Har5XoFRqS8UCChZYJr2iFYC2Y6Dq8DpNbBSbRhBfVLnBEfGA8HmA5J4Wy2pPfSzYjFcuz9zzY1",
  "key32": "4EHboqesfSo26MwjsccSWmyn3rB6b3i9bDd1Au3zKbFGufvDJg6YbucDcSFaLidACPRCPbjDfHDGQpaTfvxHhYxC",
  "key33": "GJ9N68qcLaPuHWi91CmwP2SpvNaaV7FiokG3WW4MMK6m9oakEfXh9LUp7gA3FCHzwKrcvUPTM3dsqFjKTY5Ei5t",
  "key34": "5ESXpCbc2xw8Np9GKHvFwBa6neU3EtatLJioA43EsLPCkQiokMjzgnjGkezyb6sbNf3HPUSkQnATCeAe9CoGt1Kd",
  "key35": "2xPDiBQQ7rNTv72NfBAkxJfsMQ3kftuBVxKqEh21bJnrsL7evCeuZVFkXp9bPDsbDEaaH8ACaEUvSZajk9n8WK27",
  "key36": "4fKNX1X6AXV7u5tYpGkEqLA4mRvAaKgaymM2knBKErMh3mMdh5u5TUxqE338bWArTavM7P3sagNghXYSr1dMrWoz",
  "key37": "fYrJT9p1ZudozwaMW8RKgdkzdL6BqyQkq81ntTfBjeHgAv2Heue7TR2YJHBRYWRyWDBTvH3Z6rCVmDq5H58QWZR"
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
