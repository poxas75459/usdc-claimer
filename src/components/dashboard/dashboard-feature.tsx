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
    "2Y88PsTgMfAytSrDjiTEqNPhwCMVQDafoPnvLopVHTSHpaohnBygXrinM4UDEHfPbstHDyKJDA6UTFFdLcY5tuwQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zT9DHEnQ99x9d3wGqEZiRXDuy1qKcZexKSCFmqcYHwCxoGDFkPCoyeAp94gQ4aVjWmdPRvmfL3k4bUH6H8k4FLa",
  "key1": "45SgY8XVeJ6ZVs8vzjeY2LjtsJxjkeB1VhUiz7dW81ZQ7Ru27o4GFH8zzQ63m82DNPruqaPuRYucgY2mVb3JXaqZ",
  "key2": "45TaQM1jprvFg2VTSqg2xFevUa4Kzetn1ERrTqRGvonnPANVbykMn2fqRapCsYZttqibQ21MUNYHAKja6gjRymD3",
  "key3": "5Y1A575ZkDfLzjy8gjQh9gEvsqaqArxiU9QxkGzxFmHade8vrojztrAamnLbKk2ov4jpz75DLi1aMvKZm6thYTgP",
  "key4": "5q25JV7ze5331qoGoR9norpT6SxhUTTN3AT4MQPsgAxDEQEuLQnVJVzvbxoUUiNs6TGjTmzNWuR6ySfxez1opZRJ",
  "key5": "3ySptwWDesj2Hnv68yRqJMCEtGuB7AeHoPGWjEwVpDEY3yL7Ru7S22eJcXRU5NKoGHgC8meKW5sF15YJDLHYRvTn",
  "key6": "4m4A76UCA1ZgwDFcD8wMySBYPTqnHsP9AMTRD1GgSWXE9S4RGnxWSUgAkbCmmViEWkUWHvKrdrD44JXYx8qQbJto",
  "key7": "4Ri3oxeoiAZUpDnDLZTrVqivFdWv8UAHf84BSspNPwrg86gdcdVfyXUv72hNu9PrU4TZydwtpkubED4wYbd5cGSU",
  "key8": "35ahmJmntY4fkdFKQ5WJCXaDaAdNi2WxNkioc1h5RzPUkjDU71MfQvpsimDuYZrKqfA4PxWRMm1nLTgPqEjGriCu",
  "key9": "5QYm5Xbznu6TSQYYAZAzW8EKg5D72b1GCBC3VB2ULnGjPZ4KHj74pPmeJ7cPsmb1CdeQPqk3xN8A8YKJFU6Bcedc",
  "key10": "G9KeZy8bwHd8Euwpc6UcqKDFLLnYGVdi8wuguDHV8Hksab1usRAc38QoBDKMQ8uzeYCFzq6CjtyLNzWJ229MkFt",
  "key11": "2WFYMWUa1BwGHy4Kr82v7F3VUQJxKh2CYJVSbFqW2u3tAzDLhfZUWw68rmAA4xo2T5yqoNwmM7sC9AiRQgJrimvK",
  "key12": "2zV3Y9tDogiKT7rTUpeA4DeQNJTc9yzLsXBoda7yxp3dS2Bp9S77svJY6pApMxhzcLPxFhxjD6YQM7Eq2Aya7ZC6",
  "key13": "g9KGSjWrUMWjea6V9PG9NN4KG4ad6GPKDxv1rA3RowK64MuezorqLV5qPUiZzAC7wB6XPm1jbi2wxWcHnU5CWSy",
  "key14": "3wxTzTSuCWVEcjPb7w8SVZTXE5jurnqeZ44jvi7vDgH2hYKRCbc8iMWqdryxHYEp4XRYnXMFrVHdmX2W6ZorSQKU",
  "key15": "Jhk8Zbw2Lh2GsHQot6N6DuGRfrr8wK39WjYDAnQeiV5XsN9CG4z3ke6jLGD6mCTNWq6k9NqP52Ky6y6PuGhL2qi",
  "key16": "gRowELPYPicZeHypJmifngtFjjnDx4Paovh4VJ1nLNoVLNuMDLQCfAvTnL44PspgqnBcJY2yExqJsZfWxqNu8p4",
  "key17": "jYgdUemdcwNeEHsgwY1WtwnioLGbXvHRvrHpi1p1e5NVSBkKTW47vYiSKb5xNUCveDMnLwaZxA2cJY2wBdt6ETb",
  "key18": "5dwXVW6UMq2Mb8Qdwb9jb74zDFDv9YinRvHDNp4JPF61VhgB5UajzgBJaizcyyc6Ke5KwmY6RCZytYAZXfqhy3f9",
  "key19": "3TvJpH1aKsczbsTKoT8V9tNafoLd6nhUTDJUAJK5sEQdCyHvFsUKa5wRkxBCk1oXUwPtYHt2x12WNomEvMRcCUSB",
  "key20": "5G6UE6h7rM6otW1exSba5Sec8DqQwdpbPnn7rEZKk3G614o4GWsjy6WED3Qistk89fcrtkUcdzFkQUK4g5JHdLF5",
  "key21": "5jgbfqypWRHfFGKtNcLWUNrvRzEiGUnxhEcpqJz9bGBDpFeUuD15ft4i1Nh1U6eaCopohWSPGDiUoPij98JLUay9",
  "key22": "5Qv8wPw2Uf9a8AHw4xTCWZ1m1cMCEZuvnSEhd8NpYYjPgN67Kr1uh94pcjaCV9RiPm8JuJXUUSRQ5TNfhwf9NN41",
  "key23": "2LAsrdAqF7Zk5twtG3p1watDFNydxGWNbfxttTrPkzrUP9NEkcA7EepPxDLWryxbF1MGFT6DeRYYxTm7RJxsj1rE",
  "key24": "3Hc75kvQighfUDpRf84ebV49xrtbDXS4SpAES53GnwcL11RsJUSsa8rjDtcrZ7RWRgWbdBb6ZWfDfJrWAwB1DDhA",
  "key25": "2LoMDEoEjy5eEZ9R4KtGWG1EPPyMVsZ9azynt3hz1wE8RoSeUUyYYtnivM6ZohE8P4vQASoepgpTXtanwzxVUwP3",
  "key26": "4ruUaBkqsXxwg1Pc9DzY7S9gX4GniAedxdzPmoBmjw2HSNLRqB5V8JNRwWE2DRfUdRLFEgwuhLXypsajcMwH5ZQw",
  "key27": "551jtEkEBn8VwjjYSFedmxwvyMk4LGdPXqwnmr6SybKDdEgawca9rLZudNe7dMcDVCkmdJ6p5a4EneogMEXmVaxn",
  "key28": "3p7UChMLYnHpRRDdfkNun6HYFAHeo5DNLUUo1auDe6WAEfvCYf5i87qRARUSp7zPTq1hH1F8K1ujwRWriJHknGnf",
  "key29": "5RUMP5AYtziB1QTEqbyKQuRwzKhvXUnipf83fe8QcwZZdsXr7LhPY3CmBjvLWgqP7sGb7RRfckzpn6afcavkZUe3",
  "key30": "27MHPb8kSRf8pgw47Q5Z9nYkZydeLf538yAKNoNSkdKq6zweZwbPpL7ADsSAAH2VN9Vi9edZpXVFgXazMGxSpAGp",
  "key31": "2DfRjzWFpY3X7cQjjBcXcUsW1znzRiuKuq6gKYpnz5fpfF4f3ysFrY6HypGWnNABSzLE4R7QfTJ32yWqp5uWwJTP",
  "key32": "3vKMZEAN4zv4UCZF5xSKXuZPVvxEJoCM31bn5m7hxnp5gBGU9KXAErd5tommhs2UyaMhVhTcCFAkVJRCocYUzZK7",
  "key33": "5heKT3KTZYrsSnvaU6ganJT1FEkr9GWLMrtUYp5FG2W4784jAg6Y96TtQEaSHtRL4HMEwTu6tXFHvu5pXGUKu5UB",
  "key34": "3vSrthuBr3DCi7eUNqc37MaRJ6DMhGcHPtZ6YTM49eYRccF5tt84SKADTMZtoPNADmNZ9kKGxc9tQoSdTfKHDcKd",
  "key35": "2S2jbqJMv35tCMkLsmFUX2cce3FaCygU4d3RLAiX7RRs2LDmBi8eXVSjVdJJMEq1dmvSz9dyFu5saWWcAQirBdUp",
  "key36": "3nUaGYw6edBhpJ7iQUjbF87nd8omtL2CFKkRnxoMwZoxeLjw1QX8QLa9YbwN6pTVD6uFBjf3F9m3XoTubTZFwmaU",
  "key37": "5FtoXEFpALDCPwdN5wGTf532TLBKhHo6msat7MQLxdV333S4z2FntuNFVLHozpCgf43kQNKrFQbhiTk2eCNh8yaW",
  "key38": "4UnmdLcS68Tz2W1o24SoLkPv3MnWuX7z62sagwMkVLxewFg1tztkaRqRcbogEAHWuS4ez8bigHQP4PFNVkqm2C7x",
  "key39": "4vW8MvDtvWUTkv2XgpsTctZ1WYkDxS4G1Mrk4v9kW7vd7YYXQv58vLrfhP4r6d3Mdr7gxS7UCfD2CvQ7HiJAz5DU",
  "key40": "7g1mmQEyaUzXTVQLmjYXVqD2oziXyoJL9d5YvSPvAJ54jfssbzVz6Aq7kt3e3kadv557gEh2bAHxSCgzL7bpDDS",
  "key41": "wNEn48gmxbhHqdt4HCCAaveGDZC5iqWkqSCJ6W4s9Hx3w7hTos3aY1eWeuaPcJgMNPLa9BR16S5VEEEdCaUAMWJ"
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
