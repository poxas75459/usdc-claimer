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
    "63TNzY6r5XusA2cEBYyTGFmYe4MBc1G943beueBYeDfPf56A7JQfVy3GJ4rYKmUmtg8sJ4967DD4RVgf4EJkUCXp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ru8HPDG5JerDXCt3NouMLkm6NaDfrqXikesvRvudgEE85kfwwYKGYocb4exFcb1Y4bv69YAZdW3wNzQ2c7NjSb2",
  "key1": "4AXiDrnSKGeXcszoFWzQnemuHNjDZMSSvNQWkFA8KsaGCsK6JG1o3aGeuS4GXFPmmCDjJKSQbymWZHBArwWcKwqf",
  "key2": "2ZRdYSHnfacFdQsBev3k9D2L83TyuskDEyrZBSRMGfodBWbGBwbqJqxszJV6kr3fWQe9TcrmG6apXddaE9P16cEX",
  "key3": "4xK2X9bTjSBt8DGmvnwV39gP6p7hLBBocKbJ9H2kEhynwUGmxnMxxTv5GAm95j8RQnYWf6HuLRCe527YJC8VbV68",
  "key4": "cBKaU4cfNm5YUwr11w9tvDEnNbfj3NHm9VNsqMARrpWFn9Gk8GnNGjRCmnbhJe1da1XHLkLMUZQATA7FNurWwRj",
  "key5": "4UbqHfZNHgy3SP6eGggzDZ6vWTW3zM4pVmfzpVFXwReAXfrAJMBdcyjh4ifHkyaLt968jGweoWSKRNS51o4pgKEt",
  "key6": "3iVbhsN3VRsYfjPAmZRpD3vHX1EhfpvGhN3e1n46456ZeyVTz8zCDaNCSf94JqPH4xXU3CbL8uA5ezyoUSeAfMJh",
  "key7": "3cYwd646Fu1YGM22QmuhprmH8xjjGke9bLtZ6CpbaAk7dRDx7k12xWwajoJ32DNojaDZ6KagdFzgWZ5J3AfGjaDi",
  "key8": "5TPXCFY8cByEp1RqyvXpX81Qp4WwaqR4W8rCSPfoT4xH1HceanfkkXQ1aJpcspzA9f62g4TYpnAK8QE5WgCNg9RB",
  "key9": "3s799ZyHSLhWJyyXKWCKonwwVWKQ7fZ4RuTb36kmdYiJ6X6xt3oeHcG5SZn62TW15MvnLdTsB4sKDSuZP8VwxK6q",
  "key10": "24KxdmdYo6i8AXL2jnPTTBB8H7cNJyfnMhuVjsY6nW78pYCMQkSQXYMjECTnw3fu555txUwPA3iGpHNKaWZ9PnC8",
  "key11": "4L65pqBS7R3W5GqpJJRg2HokktH76inGSdzwFpZaq4r3JTfpuLkdGpSeaz5s8CcdBTbf4HddAemrQtDyKMWzJGVe",
  "key12": "3AhMUN1Vot3gfh9x5ASsEUbttQJkHG5B1r6jjYX28J59zzeiG8RzHdVixVKBbf4RE6uCh8G6P1yUbUAy5g5tpYqq",
  "key13": "2pKEKBHM4pVpmAqN4YPGa4nW3JTU5jAVMMKQ2Va4PRCFEfLss8G4Q2VpNBRc6paaLkXRXRE8gQVdTd8j9GUpMPAj",
  "key14": "4daS42jbYyS7cbcz51fBW8pcGk2dBpQtsgAPaHWwDxsuKLTB4hzV1KQ2FZeVDzpXUasKgLQbXH9DQ2VXvaHEY9QM",
  "key15": "aUNQtxKnTV5zuLecW5DxFe9GhuKpuwnYWVopTxmsSc4VgSuYftJYskUN4GGUzFcKfHWnEmKCPTQwkDjs9WPxvgk",
  "key16": "3b2k8X2Skhkc3J6xo2JD7phmReUyiRtMgUPmWcGqmSSmG3j2jb82mHRjYecm3txxJo5gPp3XRKeyouArRDesAGbu",
  "key17": "EmL7oTZpXvxYQVo9rBHp6RqmYNfiLPa7o3Ca9zYxibVuXdCScbKrcM41jvpgAS9WyJwPZX8DnEMCzByAnBuhdMa",
  "key18": "k7hxNXgVfGFGKKVVqozDvyEH5p2AXJVJDsCiHWUFmGzrVDpDyVCxHaWrsMNTizVvN1oCM4LE1aKRo8CMiaouxe9",
  "key19": "5JAKpEjjT2Cy45Y4kYmpny7yUddv1dkKuJKGGrY9KotimEAXkrYvfQcUP6sPYY7sTBzfPBHBmMT8nKLNWYXyST6H",
  "key20": "5e2DUc4dftvixqkUBf9fiyLkeqQkdwncZUXQcK2PK4xYkVJnM1iRjBZqrAv53aBWjmanZaoELh8V92EDXsQYrsao",
  "key21": "zwyUerH9Qb1Q9ekYe7G1m5ktXknarKuMj29HPV8nkdxUJW1d7PWAnrPCsB6NmYm2Br4p8CK1at9S5d534UwSWbT",
  "key22": "4erhZEHCLRox1YjyigGFP5MHGhJ6WHbFhzESrXTmcnAdDR5pYaWe2NorBARYwefAPRM4k6DgQEuYPATLeuUfJmsc",
  "key23": "H6BLsG95kb89AS3x8iJ2uZJRefSMD7wHDXC7twg2ucps2AGwmXN3z4ioPLMJRhytfMJKDuabF8JWKJSTtpr89eK",
  "key24": "4dnXUcKzyW4uGkLYZEiLBDGLzQrLoDVzRpjPkVDHJsVwnDWNktoYWDEhdQ6FUApRFDxbuhBW766kojTis7eQZf3B",
  "key25": "2L5HnM3ntbgpVBi6714HxjP4i7h7T3voWaCzNSkNKdj7RJHi2YwUB9Nnap5cpRMZjaQmjC1xURwYwktSMF75aAAu",
  "key26": "47Dnhs3iQYhN1XEHBuLocLpw8ov8pQAF3Z8W8H9ntAVKmZHcbMUrHWZq4Zs3ZmbuGK1QgoYyZYJGZrKPfLe8okZk",
  "key27": "R2dnjMUNj8mJMDc9AN1MKkJC34tWZCeGHuWGyZJPqUjGpffmSw4itFjFtiSmkc6oudE3rvzcXCSePgKp3x7695w",
  "key28": "5Va2QvtH5EABUVqDRVk8cAWvsyBXPeA6cUGcbM2jHWd8r8PaSqGDR3UFxjYAeuSpun4JGapDx2iQ8MmfqpA43tDV",
  "key29": "5gHKAV6gR5pNhpgBS793mMKykzvTNrjMvBi9EwDuRKd5zRPCcgMsiZaGEnm1hrdf5unv1EGG6UBK8Sgs2D1yBT2Y",
  "key30": "3v7Mf6afjvY2vuqt89DUGvzFH1ar4z2NNgV6wDDDvVzjLFHTcDgGeh8yEru2suuQSb9Xje63jayFsYZBwdcucMh2",
  "key31": "WmRRYQG6sWic3DQ1Ws5nNRzS9mNbXotCnesaR69gmTm2364PaS3Rn1mBTdtm8PrxLQ4ybyudwUJmU23vQkBBXFe",
  "key32": "3zXFjwFA1oHyBvVcfKWT7LRe9dLd4jqKSSWDnzRUny5UzHGwB4HxKwscQGrSDVDb484FbhxReUR7nV1EwNTm75gH",
  "key33": "3X6EWWE7yMwbfEA5kMiecmzM6qayGJmw3Hpo3mwg2hWRuXqX65ZmjsKsBiKsz7V91A9DZ4ihcMbzHoegVF5nJdYT",
  "key34": "5W2Lbn8jkTWkBoBPB4LJyPmPLJZxw7MeBTpFAoqVbcCgLMe8v2hxraCS4wXLKKaM8XCm6wyVXGyxTZ3DBGU2STWY",
  "key35": "dA8w21bTgmqvFERCCHxzyVrpSKYydWVqVoxAPwPmKrYdeTixxYsEhFcWwytCDqfqBg2LbxwKo1cDtRgfdmq6VNg",
  "key36": "3F3UgVij2pZx18onuEesZyvRUZyD6rr3dpcmLZU8dNFojt7nfmQdjtw6uhrj1qDAsobjDdgshg72QEfrcnmKn7CD"
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
