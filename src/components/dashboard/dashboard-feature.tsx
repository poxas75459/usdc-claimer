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
    "4d7K3Q9wNtPM2FLWqTLoe2g4SbQ5eXVCayj6E4mqdX6GGi7aERYZiieb9RnS5d2SwUVM4z6Xcvp1AHh45Po9CJdZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51Msa9XEjkYzHgfiAsz7kJMN9kw4eGRuajzDGgAbJNr3fM8rEAMLj6s3eoRWKVdBph67Jte2ZxTqohbXWZJncJqg",
  "key1": "4MQ32wXPRKLs1koeBtpvYuUyXweYSqer7Ce4cbQBYWffHFcLgv1kHexM8zmniLFmeNaZgTp6GQHMPR7CskW4Uk8T",
  "key2": "2m2oimJTXKo7dvN1anvQjgDDfZx2F29W5oNiu5JoRPVHTBaQvziKaZ6aHnKn9SKC8gdDNQC4jry8ZXVqhjs3pVe",
  "key3": "2wWYYo3UTpUjcDMY7QMaADkXsthmzzw7DW5TwsDSbLqy3EnLvGR34DCterMXQYqqPXp9G1hyP13oWiAjzjccEJin",
  "key4": "2fxPYVN2mhAcFag3ZamLj2CxiVUeqM4co2wVXtv7etUqq7iLYh9WBRrZz45FdehZd9Ai6vjxmZXFHZ3qkueR2Qj4",
  "key5": "5xdzDjfaEdfsq9Y9DqNQ6qEY48mXxqisUrDxpyHzbUuxPCf5JQH7EPR8u8YvjLuaJ1uPZB2Uq1opHhC4pLTf3j1f",
  "key6": "36qyTL582znwHjY6u6AZaETyuBwX1qexJF8iV6cXtGWUYXYWKNXDFpmmDicDU4hh32yFpDGLURbPJaDngdDztm2Z",
  "key7": "YcH3REkNNmKrRKHTAZkAy232RcmY7rPpmfcigZaStMf1NhZMNjJFrQXFJtTFbLjyo7LBaX1NhdfC6wBhG1f6wUi",
  "key8": "o1Ndik9y8ctC8NEPphco96ZRzReigaMoNc5tezyoVmFfk5u6Aehww564zAe27xXtBv3qZdJqQ19m473S7gnbU9N",
  "key9": "36NHwpLw8iX5h384dKc2zxEmeN2SMWde64HcfxYcQx5R9Aasy5wY4f8eorHHNp6C7GSWipLGq2dAgrxfBoHkVh6d",
  "key10": "5f4vY6cKBmd7UMSpgpmZSgnAZRLfU5sVqtV3YETjTSp5EaC5URuW1HdF1RR8v4yrUuHY2Jz2iZbmeHBYfYbEQh7p",
  "key11": "8K2z2hdsW5YDy3mCnAFC4AvgWwLARnLxWwC3aL21DE8WjR7SLC1K8Uomo1zW7bymXbna27EUVk7YM3jnmvQ6Wiu",
  "key12": "5pTpCEVNVCnYDEtS8HBre7tCJUXvJdnrLbFk6czJVL9Lx3ArZcpDQw8WbX6vBizGW9f7s8caa4XmBcVRMVEbCcgk",
  "key13": "5PCawAy1tpYZm6h1jzQk1bi2wxcfBJXWh1NcSSZH4qxx9wuV2xg3sFU62CXVQ9K1ByN9KFLD33Smr1rucjgB69ry",
  "key14": "4sBdTXFpkfpRqb3iZPeTJ2v4yNroFfKVjWaihdLpK89vfXLyiYzLJx64XsHtVbMLvMa16V5EELfMCMipGCH3nMe",
  "key15": "2Q7ssh7dXrfoS4YUE3Bfx3zbHuE1GkSnGERqLrtP7j4QXdb4pj6a7vQbkXPMugoGZGvxT8LgzPnHNLgk85JWwPe9",
  "key16": "3wWN16AYHsMFtc7DAShL3iAh1dF7EtVc5yjTmg6kECRCj6cQwro96BKAnVuvZCHSREeojx7sZcGxTTU8b8FyhcaE",
  "key17": "46kAo6snnW5GuYqnuw25gVoExupCQGhBfN836cXCYxaBZ3trSmkzeGQTxedrEyZddc5brmmwTHhYxfpkmCr5pCxL",
  "key18": "5DATerQf1acxmvwzxCY4siHVXEmW4GZ1sWFsKqgtoMrkS2FxLBpi19xJwwUFjWo2vnJgfqbMqmmCd55UPMs9MXMU",
  "key19": "TH1VRYAiDevTEjnqvyxPCd5h2S1HjpduGwz9NZwVCq4HuNGQodDhCtVTHN1xRPMnwjFKbVGoTMtLbFWLKjHob6F",
  "key20": "3QgXAeorFiXt2M7Xdehe9BxcdAyzuhgQjhbsCiuUXTgp3tRMMCoDvLcsx4x8ucFz8uczyZfT5vgdL8feyuVossSu",
  "key21": "aRKYTvwwE6jvRypxEGQwES5pHZjhembrmEV4PtdR76pk9P3Qn4Mryysr7uknxaDF7n9PsvKcFVHmnTdKWUAV67s",
  "key22": "3wXJGdshgrbYRaWYLW4hxA7otbNSTFBFSUC67pc4vpGLTUUUVVHNRSwVAxKZPhAHyt6SG8sCEoEACyXGMorFZ2sD",
  "key23": "WjE74VJZF9FNo2xVTUE1hGbxT2qMkW6cXGAZBVegTk8dtWqN6ksPcmWZraswhFiTMWhapbUSi6WwS3bdMSMVMaD",
  "key24": "2dmiHErvmaTzhcw273bFZrsB26wFnZjscC9cMEhFTuiqkoEW25QnevoHp1wdzuaNzpSK4xEJX7Sqivn4q9FRHVqR",
  "key25": "3baG3ZGUixSZrEX8HM3jMRNQT189Xzy1xnMYASZtgFE4ABamJKEy49m8dffQfJ18G7Ls2dnhcmz9M3PL6zrwnGwN",
  "key26": "4ZB23LcEEX8qJgJzfBjUrcxCe2CQJKuK1HoZoYqvdssUuBdxfemGoxu6BWaZ5LNAzThhWc1SC9h7p78mEpRBjHDt"
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
