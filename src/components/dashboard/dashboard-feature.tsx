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
    "1riNL6wvVUpQJcpncsmzPgumkydFEbAPKrAMGbBZwXq2DDTNC8a4YYpFJHY8HnJ7u9TEEsRG136ooAsGcSoQHsd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57vC4Tei6ArX1vMp95sPpvEnSJdAfKXUuZFqsLykG9skLQSLruAxAtmJjycP3SF7o5D8qzpjHWYjwB6UpA6Rddsb",
  "key1": "2SJArQgNhSFKWRnRgpoF1Ve8qB649cs3JAuEP8gMcc3TxyDYXtW6LW7LhuAdMioj47Cfq1ZMziJp2ZVHp5uwVWP2",
  "key2": "Z4s4ZSLDRNTmdY5ibVtwmF8jPNtJeREnwh4FctVeNzDd1DMbcgCaAz6igSSBJi6WjPHUAMqE5Do7bUz7E7L5DXe",
  "key3": "4SsfKYcA7XVcjA618qp6Str57SvbEAmcT1kzAK1Qq7MrYKcqDxk4zK9A6WeFHFJaZRKV3vLrUcFyM2C9XC728AqP",
  "key4": "61bQHRd5s8hbRQRhK6fJHqBNrh5hPgzpzmf36QEvV1n6S56bvnU9gHGtnKJj7wS9DKfX5n1WGeYxYCzMDnxaTwrH",
  "key5": "59x6VovN5PzRS6czdKogxRMSrUHKJpZ5vJMff8rHpAmLJcmbMYiqhs18Jh4F8t9HMHQpRXeQzkmMapprJ4U3Jv8A",
  "key6": "4wN788PQyf3eRqupNAUaM7efFvjXdSESx6AFxYXZG7vMG1u635KcRChwgXmi1gS1rFjwBoBSGu642Lkfj71mKyQw",
  "key7": "i8btE6yZSyV313zF7Ft1E8qTSnJjCJoSmpnUx9Y4XJMkgzjVRrHmrAmwg3FVuEzNoQPo4uEfxwcKS6xVRzWevNe",
  "key8": "4Y7W4wQEsCFWj2RH3ab9Yof53dUKv1tcRm7kTDp4arBPAy5xgpx7kkdwAt6akyK3aoFvKeTMaTEurVbDP6x68izx",
  "key9": "2W8hDKJ2bvFZunqHNRxKrxsXhNkoALTdQzqDQu6iEMMr5RLfwRjDXyxbERJ92fFAJcWyj8oeSjrE5LoiiV6Mrdrz",
  "key10": "5qtw7RYsYobqLT78TQZyYgWQ5iW4gHK2sL13fkUP1VQcLnMeUqYdiwKQ6Rn4sudVsmV1UxhTYDpUZ3mLRWGfSqgJ",
  "key11": "4j6FbWCyLYSW5kGStX8fsk8HHCstDGU911c8fx9fo6MAxvzmUEDuteGW6YyZi66PSmnKBwPNbxvPjbyZyzaEafex",
  "key12": "66gBENigX3xN9vw1PiQbdSyjZYorxa3bxyiVkFvF4W4Y5hQeMv4noZLg9CgGEccpKSnVjZF6wqk9xwnFrhHXu112",
  "key13": "2p5gMe5uKBuV6U8dN5iSUcDZaeKwamFvwZ5RFKxqG77dX2UVn5jQPWFukSd8gYuciRpNQgimAdJ7fX1mBVRViwNA",
  "key14": "3cF3fKkPZkxbMUt6mHURmtRngnjp5ADyUDjAj3N3gi2bATRJKPZnpzx26sWZGpkAqFz6DQkTQwuTQDMXxHikik1N",
  "key15": "pQ591PwboEUJ4UKHK4ZxcQ5fZc1K23aZSxpaXgDcAfAtuF55QpLJHUfMibKNjQeaWociKTLKhQGmEJr71SiPzBJ",
  "key16": "5vuUNSwH3PH5KP5eqkXnnYRdJiX5bXwmQsxhMNn6yttc1RYCqsLFfSBAVAg29zP1nft3FBFHKUtdCcZ97Jwq6fh4",
  "key17": "3aPuVVCZohdy9uLtzxMxzrrwji3av65jxxKC3puFaYe61CxtrxXNCPCtmHbU7xHiWbHfo4oEvuEunKJmRWU6m4Po",
  "key18": "wWFpAwM7XcbxK3LYQCcncRTeUNyEPstswn8tn4etu8EqAhNCNbefr9bVCCGWoitUzgaqkDC4ChMQ4EbjEpDfvxT",
  "key19": "3m7hvzcgdy3exQ75APFJtQWhTVeYPgcK2jJ7Y3PrSkivPcjQaYaayHhpX9DH9uWKtHgBmXrvkrhkwzXzCewg3Zoi",
  "key20": "5UySo61vo1JkkAExkLZ9YMvHkQLu3h9aoUmNQk2ZRJfHrfdo1LPL35UY8qafCo2pAoakccFkZVUHKfQMVtL2Q4WP",
  "key21": "sc12jiv6stA8YAYZVUeG7BzaZkk7YYVTGtUbjcnhNFdbvVWAbUm8fhGo4UcpShmQhQvg9J3sgvNsV6nbzMvivUy",
  "key22": "53KqXLjs34BwKSe98sfesrTQe4eH9pe6NvdHzxqQ8cHfMymfr2xojmGJQQPvBdgh8t1ZznQKK9edLMqBoDmwUMfx",
  "key23": "4dKmydWCnr6d3EJ2woZXPQgUd2Z5suRtWv3edKHbYSRNWYgtSwSfiq2bkrJz2DxnfTX8s2cbqXu5rhmuEZBbVGfc",
  "key24": "4EpPqrBGHispREgGwwp2MQ2eF21synmkdYrV3AxJ4fENdPCJYkZdViZafqtLzoCpTZ8LdaSWcrZBkcD4DaEuyCy9",
  "key25": "5E6FD5CxVgynw5cgxsbgZFaA7hh4gupbfXAk1z3XR3BGwhAvwtcKafscQpPecQr6kPXbvofCt5qqLXze4cXyzpre",
  "key26": "4pywjZn5jMaX85ysScF6P2S2SVW7zSe1DMfpN3L9mAhrqF3Vtj4jf68ZAtyz29yWNAcFUZuzd3or3exEvLoReorv",
  "key27": "aLrhAxg6stcYa8CaQAFPkAsYZvTz81R1pvPLi96swAcD29whVW7ph8vp4GdUVqKKYjguKm3s1a6ewWQ8dLPN2uQ",
  "key28": "2ufR8KQvbB9mBpmhpcNmfQ8T5oApC3aoFK6LL3aQtzMxSidVqGiDvazkNwFdrKYeFtER6P4yVAgLAiT5ExkhQbVL"
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
