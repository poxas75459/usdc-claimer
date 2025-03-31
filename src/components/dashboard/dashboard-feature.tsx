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
    "53z3bS18vtnLB1urBGoG6iE6S5Wc54kYq3SbXJr9Qy7QP1PQ1jF6XPr121ymAydN4n2wHoNZPuTVBS6GQdAsTDFD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mrDMFQD3H6faZPHLPQ7oGwQ2Q7G99mF5jnrPB8eLJQ3HEm31cdtCBUXoKEkvx36JSXr65yPo35woeR1yMp9somY",
  "key1": "3h8cibCnfePUrq9eY6HmE3JgcJtMUtq735WAsUa3omDf5sLy85qr8m3pG4QfkU8gTwsYKN6pUH3NoPkpEuJyjhxC",
  "key2": "6UyjzjUrfRnZKXQfoasatHGiKyTpz96oD4cRXjoHsZbzgzvNC1cZezKymDH2iEDQwKcjzxTgvMiwCHc3s9Es5hR",
  "key3": "5Zw69GJFwjAfzcC3THtC9Nygygi47WREqskzBn2tMYiufpLSMPL6Wvb7dygrVFWeqkygDZBeuB2o5SMniA6xzzah",
  "key4": "3a62afp4DjiYcRzgkML7AzJVK3zk63rstnZ6ubLnNYLkSxAXYt5cgYMUHPKiwQnDHyyhYCDkQSr6h2ZtG7XFy6XW",
  "key5": "3acQXFLnGWRyEv2F6DX1cbA1F9szzvP9J6rqCQG5qsvR6En5zuadSatez62U6dHFnkWjtuSd8S9NKotQ4gvqDGAB",
  "key6": "4CBG1ShkAoqGJnyogCJEkPcNsi3omRYwrhANPiurYvNcpvmXyLjs6sJWnvYHanGmmv1m6PNS9oDmdeepfzsPzeVi",
  "key7": "2rqtMH7FfCLboFw1p9BhXX7NTXrcUpA7BLUpYKJnqcuBX4zurNq95rBzHW1dMKXZERZ55HAWkips9CieXrmfrYcN",
  "key8": "2Rs6EZt9D91bK5ug1YKgH77rsW3WpquSF3uEXU8E6M88nnoZperw1WoykQC9oEdBqT2MHnudR8dHYpmH5D8Dd9NZ",
  "key9": "29PrV1iPYHeFi3FaCq5hPzw7SYKh7P1nnaxH67Mqv4Vs7VBNq5SxhuR8mCg6V9obFzqsvYr8n8AhcTwm2UnNfmgQ",
  "key10": "31WVDPe5JA8vD87ZCzXGfmrntg98Dhp3PXVsKGxtse3mWmjb3Rzw5kqCmF2ajez5SWPzvvRrvHeM3dsCQW5LfTnX",
  "key11": "28p7UQMnT4oCgfggRtg59zerBpwxncC93tg1VhPecMBzRv1mcXAAnh1FrCLa6Yy4MU2jjTJp7s2ztfCsJxpAF67v",
  "key12": "W3G89W7uhA3TxFwNWLSYDnsUNBXypYiaoCvxfJg9Tn36Lvvzx61htNddqpGr9ybDf8VraeQeDa9okUFBZC2PhDu",
  "key13": "3byVL5gVWLYJE42R9kZt2cW7WuKaqUH4YcPhJzPYXu7Vr2sVjiW6vhgP8d6ebWWwLN6gQKtuhaSTEWhwSCKP1BtP",
  "key14": "JK4s5iXzVvr8CWybaXE7w5RpG4fp6Rn5xbWjt8SBqxrysF1Zf6bwp5C5yzLpXfw21ikmEBkMC7uiq72r4PaeKq9",
  "key15": "3ycQvp6rA5aGifhoegRcNnsHi6TgE67Nw5BTHCKWRcvcD2cAxrq8VXVcT6tsxxE1AjceJNAN5xLkmL6Nh6TbjLRp",
  "key16": "5Edu3wasqUisC3ZpwPJ4nZrifepDQqAXtLau4tURUvPnKBy1acepKY62uzQGE8WsHVn3RUoi7RkVDzS5hrrSjhcY",
  "key17": "3e3JJBSNA7ZqCe3SzCY999w8GtqKqd8nmyEdUuBgzrRUrn1cQ6fCNgWc6csUczntDRxuDsc2geJmdG5AzAKF5nTy",
  "key18": "399TrJ7GQFrnkq9bxCJNkYnbpSoJr9GR6qMpC2qnELL1XD3aUDw2YNpzmePVq2rhpcZnLNMcFkpqS9v46sXUEuTG",
  "key19": "3MJmSjkjpeVbQb7cGKQ51FmDgcAQ1Y6sAT7pKTicp48S3fGMCLm8E1ZXATQk1YyBBwoDu42m7Njrd2QTHELBUkBp",
  "key20": "2Vbp9NfAqebGuqNZrWhbgYhAzXjwSyFZVNLNPzueYYuqxisLchc7m4Gk21b6NVr4Zd1WkraiDtSDVCbTg3Mk92ys",
  "key21": "5CUDx21C4hsfkcU3q7pzwq6wX2rRsJejg3BRKCY1px597ZDkCVPzZgk6ytcgVPMA3xKCYWu1JTZGFQ93FMGn3GNK",
  "key22": "VCk4nNYxUWRspa5S8SMtxHg7LRNF6L2XkRW2gGMA8E7iG9rN46afx8rMWWi7waEmp1aLdHF53eTJ47GnpgbfLeH",
  "key23": "3WFihRnmWGoTHDPcUq2UTWxcguNfd7MVSiCsGxk25ThTFJFBmhi6QmRAZnmkSfr5KuUHbx6xrJeFnLC5sTzEd33T",
  "key24": "5LbybHCRtyhLGMYtR5FVJGnBLc8ssPc3Wh87nPjXmMEaCgheD2fQSrrwkN4cdcG2YrB3dRjMFNGuFmAdddere4p3",
  "key25": "4mL2Cvkuk1qwi2cBTdWzaiR2tbKyxoNhc2CazXmHD51iFdw8t4T8RQpakfihL4tA7Lcvju2Jvd85YyhB1GSQZzj1",
  "key26": "2QzQweXpy4xRtbyGy8zhcMg31qDNQkaRdhYKi8b9Miz2FLw8t6jNQyAddnAi2sP1YscR6benwp3RoQmh4vWHHb7d",
  "key27": "fw8MnyThiWd8mw1nCgEmzUr7AMNA5q47y4TQLA8AM4DTEVc1JRWHgT5ujop1rbGapinEDJVbme9AFX3J7ttyCNw",
  "key28": "26oPEzAfSQiTUCHt8ZZMjqqED59vDHz8WvEojXSa8reaYcyraG8tK5kLs1tyMKJ5vsa3tnP9Ln4iT8Snt3Zhi24A",
  "key29": "3Qo4fCp2mYQWtVN9Cgem9kgN51AfE8W9ocj3xZDC2WFUTp572rFaYaKgfvEkhHUmP7zWaZgw1Kjwz6U2s2V6GrHq",
  "key30": "4WDgZMbxz642VrxdKr5CyZYphCx7LnqTYTzFsnnapXnHHAfGhJVmm1ooeEHsY8MJK6FUgRTZwffF9t4btvLsS9ie",
  "key31": "2h36V5f8wumZUZihh19sKnA5UKarkZAcQvxwG4cuHuf69EqyyFPGm9gLrQPvKL3NX6cCWKb7xsEizCyAuMH7pELx",
  "key32": "4rKAsbEojF1E6T369ECwK8fz68HaXRVJ5xwM27fB4SZUaKRLnQdFRZviRvBqaEC6BJqaVwRogQzBitrbhCrdbKzT",
  "key33": "5efGAuDBQL8oQYreMSB1RCWeKLHrKpSBRBySDi91ZFxSHpnhFaAPgEUVdTrYR21FyS8TRuZV67tioBiG9m8Up4N",
  "key34": "4JjzKupTNSYJZkENefeXEve9a6fEdK7v8yDgz7jEbe7xcf33xpLyd8Xd48YX4hP9qvKGRNjFVa9XQr9uFvemyKpu",
  "key35": "5RJ9653HoT2MKwJRmxrCB4gaiREkmTsfXWKBGziQQnvFzaWmZVVzYHR5NwmHvSxQp4ki7xbhu5h9eSKWkHHf8h51",
  "key36": "4V2jdZUJCW8ToTm2KTgz9oNBxUT6hrkFb28CXbA9jY6L5Nd5k8D2f2eYvK8W9rFHRrSx6NaVaouRMBzJJuN81no9",
  "key37": "5QaPuzqkMyLPzWCbXuF7ECVWBHgpaGSKri35onazbDcbBQwcgguW7vMzGrpucjo5JCkYF4CwhjNiDdh8FcXfsPsi",
  "key38": "2uJrHaC2ZTt5iC3WospVs4zGXKWbxvrhPH9uYCox9JENYEsCXvFPtqf4Q7R9VPpuX6EQGGTJymaaJcLBHM1AN9D8",
  "key39": "zhcn2GGjoWhrxyuzaQMqanZVYeLZkADqdfaa1SZzgWQmaqoY2reAf2hUHNmumrJx6ExvtF75w24oY6EuD1Vyqub",
  "key40": "5jrpMkdfbRMRkfLG4Ve4goQXStAHUtDVk9faAmDdrt2tQxVRmMJfdpWf5dSHJYDYCWuidcEtyg5fhLdkwEcUH7gq",
  "key41": "56Ue5JViAw6odRrxPJuRdfEAX847cQKNLhoueUnqbfqv188NBYz4x6juHo56K12s3TM17V1HAUhUFyCeebyB4CCh"
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
