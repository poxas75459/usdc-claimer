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
    "VmfifCLPWXjAfzoD3Hq6EfX4MKacuzMhUUJB8mTi9K27Uu4k2ZG24pVta5878hjETrT1eyg4x3fktBf5pBBA51B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jvrof1KUrz6mfJtv2NzL59pa5X4e9ELREFEsx2cePz1iN8FiLHGUg1C7es9uGSqwKPq8nG5XjLjiyRSJsJLXtZY",
  "key1": "29uaAxmyXNKgZJ1RKxnKkCaztrSopQT2pciG9oaZ9Dp3hmknVoMtN5JCaAZddShdpzHafHVQSbMkpae9d3tpbd3q",
  "key2": "65UDwrr6cqWYr1A5DrkWvck8eDjYjVME3wZXVB6PeY5qTrmPuxi5kSFhrwHH8ezJxw2M1kBSgxATJjmi9RA43QUW",
  "key3": "TNJq3abpXAgeQkLStV3K8poZeW9MSs6ePA3PLyQc1JhWvW3zL8qwanHUFaXc3CRFaHXJHftznQZPeroREYC3FaN",
  "key4": "3t8udPhZBybND9VfWFEsw7BoNtEgpr8rcLXP6Kb9dVY3A6BJDp2isR74GNpQQ97krEPNNKkFYQ3syb7QoKUiNAAy",
  "key5": "EUViQsqkBgGi8FNxbZ3XHRrcM6tJnEFxq2boPx2bFV9b5SB2W31o5EbgrTwqcaAExPQFJ5ocnSDjMrgSTMMcHbz",
  "key6": "31Ftx5BeVtbjg2nEu44ohHeWr6dtPas2vwKUYEaH8GiKAhsGLtMJ5QQ1hToFS2qNctc5SDGnuQLXVuy8Dve8vpbw",
  "key7": "SB5QeTyr3y9DshY95y3vCSWEqFVJnyZioUwgnUimgNzoMkNgjFDpjRCyNzwEFUAGdRPQwzJFvKamke1SacKwxE5",
  "key8": "2YW9ZVkGyptBCiK6i4EyHSwwxz2G4zwwGr1DPLaifbRMd21rYCqsfY4orEQfnrbwGA4hvpPVHELqPQbtJZVji44E",
  "key9": "42WP31WuwR48jqupyt2EP9j9C9gGjCRNzzPcBPYzF8rNQQ7jeJTa8z7vNp7Jbz7Q7uXnbqz3wBgfP8Dms6hHsEaS",
  "key10": "7pirWXpvcQtQ9wUCbiWjJZd1disUN4p1HNEDxrgXNa28rsQoaWBMsFqff39ZPhENJNZSPcfxBjM6B2SbjELbAAt",
  "key11": "2TYHgakzt1dNVrANDs3AHXyoFqoVaCfuRHxEgxU54hHTYHmNFNZetVUiuWA2UvUMEoyQQ8AMKiJF4iWAJtKVcpFf",
  "key12": "4b8uMwubxAPUgiJAX42TyjyyV1BU8xtZW9UCbXiMvyy2R4nryQ62Hv4UMXvQWpjUm776vnPRFZJry2TBAznVy8QX",
  "key13": "EPscWvmBPQLRJZ8GGzfeM8Mywcen85JbLc1tukmFatpJzZaNH114QTg9ChBA1wCnexn3ZNBqgeUg98D5MsVNyx8",
  "key14": "35BcWA6khHNWfTrE5h8kSPwvFFKL8USDD62XgNvmT7S8b12E6AJVFhobESaPNRAWTmGT5ZaN3zj8pUWm1FaYeLTo",
  "key15": "CZezGGPpq2NeGQjg1wr5s5QuvRDwgCxSLcyszr3UfKbjQvbAVchqq6vuGuJ7YWCBNeV8BMMPdHoMiE3qDYyEL7C",
  "key16": "4nS58i6K8VBNJTyD5x7quyV7kRZUHBZJ2q8fs4DAtaKYmUb6gtAfshp9cFwsmcqdN5EuEsK6P5tKqH6stYZpxmYv",
  "key17": "4vrT2vFrEmUE8ZwvShmnkbehtGCcDEGjn1TnriTMciVUgmVso2HRyFaQkWVqMAp7CPZMTnsJRThdCNE1WukkjXfh",
  "key18": "58KvpUGbkGZZQXLva97hpSM7dRfaXSkXeKj9Zo3zJkjQoPeCBMzazuxb9sbMg62HbbvsiQnBzgWEkkfyDt5Fcq93",
  "key19": "3wbCYB94KFzjvQUu6Ef1sLHHdbtob7gTbRTHCQdcCKR2D1EVURrNGwcWUGEzLzJsRbUkzDtvk7iPyj9wUCBXAKKv",
  "key20": "oFV9bi1sRhJkWH9gSp9VJxz1rvpJuJLqLDUbvgcS3VLac76eBy1iehJM24Kje8t9QL4E8Smbug6T6CXWPLtv3K2",
  "key21": "5DQuqJf1dgtHnX4Y3NCpUTENtCeuE9SmmzRGygBVLzytXJGpxkp1JynTmxf8Skf5LRTsTvBATGwQ4otZnBue4CK4",
  "key22": "5A3LX4Yn8bMSeJk5vsPaq6o4fXKRXYF9pbPyCFhaLQLEXq3LMajqLfEeuHkP84ADg52pg4eMtZRBdEbwWTErkWLY",
  "key23": "5hZZ9rhmUyTTt351Y7AbXKunhwM7B3ECN9e1tA2bycDpQA3oos8zCU5sXodVB4ks8EvcSA71NQFsXuiXKBiM7dRG",
  "key24": "2ygzABTJYppHhUK5hbDTKfEwpi8ifgjEBs3aVoEMJnndBNujimXAisvwLeG514Qkn6pWaL9XfHish3j688xMvi3k",
  "key25": "5akk5wF9tL7aenqjL79wxmRnSeqmzqJX5NtpZnRmcMi1SQSsg74oJUosKw1WT8YpvC6ryhybkJj3bMtRVHQQCrGo",
  "key26": "4jif9ro1Pqp5QfYdcGNX1qrnAHqbGDYZ5bZqQQVcr2tMJiapgeQZxH923K1PNvK8rNkFpvzpkqiX1HZ5P4i8vMG7",
  "key27": "39WkGFWhEJvc3nhkViZiJ8UpySiEd1hHRtskPz4c6JZzYHohf75EDFRm2TAt461iqBZVyniJwFUpwizs3YFqTvaj",
  "key28": "2XmCqUND3FCbrBJ8E7TaxwcbaVCyjnaxJg2aKfC2Sm7pdiRujjLCJoXov6cs2rDPAb4UDAjpHvxu9RCdUffo9QyK",
  "key29": "2iTEbGziSuw1LJALec4PmkuEZrxzsX88Gvfk1WH4tSGA9MzavTm7cFNx1t1gKVW4xabha4X7fzWUeNb2WJQTXUvJ"
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
