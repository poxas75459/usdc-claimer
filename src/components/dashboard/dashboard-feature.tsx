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
    "5Whc6Cqx5X9waPHQMJAGkWcqoAMG8u5aqE8cDNmzR9PoPyyk28PXKS9ENArXgzU4AfKhEKM5rTyhJTqVqituD8fK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51Wy2XnZP3y3C6aFqokBmRkAESWtUckp7RuBDhHA8JepK6JqvJqaFm97BufMGRoCUzXK2NnYiTAx1N4KDDbJS7a5",
  "key1": "2MprSR9LfpBLJdbSpo3X2pciDUXZEFLXzrS3yo2aUjT4cvq7X5VRYbHn4hbGo5g2RLKZw4FgJjVkPGhCKwa82HQR",
  "key2": "3dr1oxyKywqcZRrfdYtReWU52S6Xaw5gEy8ewKDdT9sG7v6wZ7U2utYvkiZAMJoybMP6TQBcrPUQRZFNbzeh94op",
  "key3": "4GcmoRUD52gbCaK8biy5DonWzKB8zM7nXGBSsxt1bsWKvQryNR1GE6TM63eMXBZaQeQmkcAQHexVrDA2kxo5gZAK",
  "key4": "63pob8mDibKdzEmhGbRKCdNdtQdiUA3D8mE2gxSXwx1Sg2hREJWnYC3eTkwEFEyofZw1aDX4ma9b2bd15khmnRJ9",
  "key5": "42tmgBojNMbz72VrV8rWGSoim4ZQuw2myMdFV3tapBNBksAvAuGesMbXwSyy1U52tgnGe4RU4panJgG5EMieqhx2",
  "key6": "4qK3wXnBuCX8APtYuhPP1am5GHRcYcYQLHHnKyTN6JbeiPi4mRM28dejirAKZmkkBXvSGNrp9rrQKoJXCTyBNLoH",
  "key7": "3RkmBWBTJoEgq7USDfvvVzSpMCHaowmi1HZ7KETVkmRLXGX1bN191jgTKu9weKgwuvC8X1gX6PLBLCp6KcUz2FLv",
  "key8": "3SkrK7nXLHq9DsKegnJPcevDV45qZwxMWqVcjyCwRM8n4jvpQkDhni8MFYHLHsJ6cib6jEfjXUKkabyEstfvjzqX",
  "key9": "2JN5b5hbAWe9gnjdnP6HJrnPpEazNYHHg4NJrmQ6jspwPW23HRTecyuRyk9Tx3LAxH783PoQiZgNz9eGyTzDHeDG",
  "key10": "41z1ZNo4TK3kSAQ9dC1gqpdhHBSz5deZTXSu2A49BKAkDNnbRB6EFvSYXm1hvbF8MaJSuwQ9rvHhCtyihgWRnBvw",
  "key11": "2BQgZxWebWwSmBTua3CtZZpvkUzLM7f4fXocH63PovCySDNXKFKKh4nqmgXtn58yJprKS4grhKJGwyTqN9MdAidc",
  "key12": "3sbditGWvVvAxEhP9AfZTzYC2cEAXfAsSFdcF2Vk2vRSC2MTZfMDpY3Z4p4TkBnrUrdmDT9rLgdY9q9855fhoeo6",
  "key13": "5nWyzRXCHaPWsQhBnueT7rkqP9brDoD8xTdV4t2rtNX63Eyf1GbZtTcscfp9hU1abt2mkMBbekKwrBnUvwQP7R9k",
  "key14": "22YtBVSLLUjeNuFFbPF9qgMdioFpHcX4GK52Uz9EvXQKsXpzUaSG9aAzdowS8wYAQBxqTgZ95xbrVW2F4LqUmcTz",
  "key15": "3ozipVUtBkeNxHyXfz7DB3jwjS4greNYmsVrPJW4w6N5uDWN6LRrPRiPrdytgeN8SgBUvexjiWaMPfjPMJF2UbFy",
  "key16": "4mqr31Fd6WuwyKcvpwfF5SyxyxHEa7xAoArfyDe1LXsRURjzrDCcoHYKYGDxwvLu74dLQ6esntL6J7qEpYq8ZSNU",
  "key17": "2BKth5Auq8ZhckkmrjFLPrMVdPfpKccK2uUuT4YAXYMmFonvXXjE6ed3RQnEXq33T3Nb5CcxLRtFdCqsWy21GeDq",
  "key18": "3SNbsET9RYJjXVdmWadoacC1ymJcHuho6FGte8CiKSvZTfFy9HqCh28h8nxwT1WfeiaM53pAdXBCrvk1UnuwSGyp",
  "key19": "PSZ57D27fZrkru6Q1hknb2gwTwSvDnWs1smSwujB1rHma3h2mUx4xcEnJE9vPCLHvDu5jP5p4NmPQ4pG1F5qFeJ",
  "key20": "sEh7BiTBaiUzoj91cKFstCJ4Umvd74BETENYssG9xv3RmaygtAbF256QvHZtS4R5nszyRQtwmtPwKha9knKdsTQ",
  "key21": "5hpRjnwEPfFUCHW4AXxGNEDy8jEGJvUxcZKoKCy9efYV4grkqMhED1vWYhYmuwc6QYdUhRQJiuy4nStfuf3scPmz",
  "key22": "2q7HdzgC44fSKJ57vsTFRSHbMv9eNKa54JMA1YXj2MactzcVgv49ypVsC9xaX6yE9JqE13ZtVxFzFL1nDaoUQ18u",
  "key23": "LvVL1UEd7ACLnrV4n34hyKJE2uAMaSsCsnj9gcpFN7qpMC6pCcSe9UZWFPpkqWBfD2qnFwzjRRc7i6udrkNpGU5",
  "key24": "i5ZD2s7nb5crWJswPf3m5AfFfEdTkQ4BHZBanz97CD4kEcZSgh83pNVzkSipdyBPAmcEFC9X4ukUqUQPDzrEkYu"
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
