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
    "4b9LqcNS8xg92DoVJTHxdEJMjjFQL2uCXsbRmdcANTD1HAjQMoAxTAXVqon16RjabzRvhPDnWFK8cPHNMskfa8iS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zfwvjLZAyjr3h28Ydi6JF4UWPikFqydVnuBC54FArwbCzz2PJuSwz2uRW5uPdcu8z5yq2eFUHbVxSaXy77odfBd",
  "key1": "3FKptrFRogugLLcztJZp2AsQhbjpMyCN8xF8FGA6Hihk6GfW6RqUwqxmgwPiWMToZ7sDJkWmT66uB1qPBkYTUjmC",
  "key2": "2S6theTLYFMqAxgw4gAST3sBDvctWqqjNhc9UXvi9PjoSPkKKM6pdRt5HDXpKaemmGaBc863EDWxrYtyk8JnmLQv",
  "key3": "o2sQhaejHznnAqag5aEpcqBongevqCyhB11Yu93aXdvojNy5Vnbthsshqqd6iBWgNnpzXjmT9PsGyBYaXpWvqxc",
  "key4": "5mtZ76gxiFjVguXnzLbXpiNfswnREFd2ejeWZS9byBYm9yyFiK5GVxBsWTXuSmtz6jUWqzEYuRCydQe1SHwSUq5Q",
  "key5": "hzcYnPvqUirdoKBpoHUSqbrVdNxRyUxFjpbr6ZWX9sJKjEzfeR9LoWTRKaFV7N2sGqH78XmbmDjeiNroa32ZDm9",
  "key6": "4Sf91K9SP1pHEnktwVyoJ7YV5jZqridf299j38k4XF1YvFJzZwZ2HKqcaQaLn3JZkvTxAZnF5Awwh2qPMXAJ8MQg",
  "key7": "2YbPwWkiVGeo8mnb2mgmfueas2DTmqB3LKgVksavbAAsRACzHZCdUHD6ePoofocXJSDxE3TdzULiwaHnz1cmXBnU",
  "key8": "5GFnUUN6FYdfup7mNsKME8ZPFdrPW6PM1tpjVvFSZaGFCWaFADC9ZQ1prytFp2Q81BDz9opZF2CCrmnJ4kpxZ1NG",
  "key9": "56ZzgHtdwS9vTDHJyXdMpZx6pTdZ51m8mQ5pDiAxW9TJCPoH5WCaLCEUXbS77uLzv2wq6UnZHBLjRTgf1yJdRq9X",
  "key10": "2ZFKqCoL7jnAYyP49iSdtwXcaV2xERjZb6dvR3Xwp7XFJ6tWuwjcihm5Gu2uNJy4ESkH3BQApRGHQwyJpkoRnPbz",
  "key11": "3waMqGKDrGvxWBsoGKQS8kZQd94UKHtpfWgXZ85TrmHpnLdffHK3nH9w4xXPahX2TMcNAJGQ6ZRiCzweoZqyhi64",
  "key12": "53gd5sEK7pzVe8pvcKrG6nMFihfzLxG7e8Vyc7U9ug2Dct7VEbwbjtWWcZv83qLRW7egh38CgSsgriwUP3D3dUBm",
  "key13": "27sjD2mx1264m9b42ZfCCyNrP2etynfkpVhDF6NwhmHRtYzbFzTxSG6qaWsCjtGSC4wbsAwxZCR62GsKX8pUpasJ",
  "key14": "2uiT8ChfH1woAAynyDGPkbvjU7oDVaHFSybF5bAUr5DoKuRLr8m2NrKAqrRbuUFy2xu9hkFw4xwGAXhCyeT3JgSz",
  "key15": "5PR8Msg6Hm2uBqPdaBsFwrcBov2b8AVf7NXRCuNhLCNtmABBACrE1SGgZgqXbkEaRTmMr5eWi91JetYeLvUFLd6w",
  "key16": "5dvoEia1oYWkACin2nYH4UjtyuYr3EDrBe9zacwsp4ywu1rBHtZpsAY55Qfd6yUcHoiyhqXSS3LMLeah9L9k5H5g",
  "key17": "5emDRetfkkDWmnzByyDe2YtcwfGW42kJUbacM9Pyu2NjHarcQUtiX4QJwGyqkczucdcaT24s5YA8g7eei6DCBLz7",
  "key18": "5kTDWB4porbd2inkKX6V5HrSg9FSC6DTY6QG9vbm2NASFE23QDboVnBs73DvekkhqDWx3yqMBcTx9ztW4xfPNYX9",
  "key19": "5JL753LPYiR8psYiC4hs7NiGFN9nJmXaiLTwF6cjRxoWsnaMByZJ45jceJdC1m2EquS6rsMVDjh8RWBbRLmeFYuS",
  "key20": "3YZVJAq6mzhJB9gv4t95A15NeKaJNDC7SzbeirD2eTfsBHfYpmjMP3b5SGFwv1hyCvBx4JVzinq6ZvhEwqvb9rGc",
  "key21": "UUnzANoqbJYDiM83rzE5NjGU5n9zG8JbLtnikV1bXnvHJj95iAusyQ27FLf4f6bQqi6xbMCYyNFdfwYDPW5iiEd",
  "key22": "3oRSsJrZXvFzY4u82rG9SQeJjNoJrXn9PuTxFBNPmtekboKC9tYBaJ7v47v41BpLaV1Xk6uirdRXoxhKy29BdERv",
  "key23": "3LRuddYqypQVbjFJNXniwoGN9wU9cdnfsujZPvScH8TbxBHkZtRMMgJ936GFAVjHiR82EerSHb7bAcTStUc1sK9G",
  "key24": "5AjpgEtv8CDkBhoU8ZavH9wVyJmjkQG6HvGPJ1bQ4GWfNK835kJW6ZPCmT7HvbcB87uMcVDEAnvTLhkLLSvZwgaM"
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
