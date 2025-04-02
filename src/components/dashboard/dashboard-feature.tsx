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
    "3wgykSEukiYrZohFZrwRMx4nu8TnSAqrBfbxYh8rFUqFnDKUn9fsga2EpKo861QqJeRD9yhJbLZXyoZLjfK2asn4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5r1v8GyE4bHqMQMD6A3duzKKdQ1thBnyESkb25N2dRDJytRv3zay64SkYw6yw2H2TKdoMG54eLpR1YUnKyiMM8x9",
  "key1": "3ZvRfhR5Znwpx8iGmAz1LbFDcCBCuAedwki8RSvNHPxiM5dTUmtNpr75gWF7YLnAhiPPXeSHkxptNzKtMJyYwoBt",
  "key2": "2BXjgqFcVjc72jGqJ3vgKdw4eSSmtmqkEFvALjPVAXzYw3AzGmF9cs3ULkVyUsd7sh883zMoZhdvyqpXtcuEVqdr",
  "key3": "67MB9yTpL9i5wCc45Lwd3xv9D4m7dpwwdwKwPMTLZEKLM2nP38NdrQNgjcjVsMyNzb1AWd51TPEri53T48jkiQh3",
  "key4": "49zSXht1wx9AFMFRWF2Q5BBWxtJ5mL12kPRmn7Hov5AvR8cqehR9GqP1pHeZTmn7qBAnX9PXBnzm5b7WEkiW4obt",
  "key5": "bGn4HtwATQjvWYYeDKCkbLftkdmXo9GzEd8ikm3RF6KekJ9nTu8BXN6QmwxhSQk943tatzp1pNcdDCerQW8mytf",
  "key6": "36wVgGp6LnPSqAGTJyxZHaGkEptraAYFJda3FyQbAo1bZYy1hTS6FRXBjATrnHrH2W7GNZqebu7EqEEAFNYgwCR7",
  "key7": "3vK8NwS8ZVRrW3df842bM5rAB5F2srx7zPq1ezFUQHYbc2rb4AvwXCXkNboyieviAfxRa1AM3HhGYczL5x5cHYPq",
  "key8": "51edy5FhwJherNU7qTp6vB2g1t16z25aTYJGE6ddvguLZhY5VczTp5svjrf5MTL1rSbDqDztmNQNPDJciXmuVntJ",
  "key9": "22pmU5x98MsoS2EsjfZM5swzBScmXLuQNpyAQ2VXEChmyGQdw7c4VYjjjESRuLYcNNLVHwBZXvz65rPAYXri4hRS",
  "key10": "61VVEnYAtvG9MuV6jsmnmsFwJ2iZCf9ZHwn7jZYnCiVaXq1Ahf6jgTTCySZJNhVCWNhhmyQHumqFiJK6njDaDiA7",
  "key11": "2BJR9zw725XWJdueNa7FRaVFYzvhTQFBABnjoRPMsUCxERfRVidzNxk92YTbnm9f4XvuR6XJ2ftskMPDiDJeo35N",
  "key12": "57dCaApjYJeB5XyBmHi6kvu2dFiHg8cf3tdBb98axmz9CKYEV49kRKSPeNBm9oq2LHQJm1jSPMMbtu5Zx9Dqtagn",
  "key13": "5hryZphiFg6SLmCdgZJeaMkZ5FH58hX3GHLTem5ot94KpJ4fV4TEinARtfzJtAKosSUCs6xVRRskHS1dUk3a3zUd",
  "key14": "29FzytDSdrYQn7FrhZw4rc4716eWgLxy1rQmR7mmXRJso1QEWr5ujn4g1QyjpmgCPQn7wZD66jrBSpvV2NTsG7gM",
  "key15": "3P49qoA1bSCAr5hQjDjEiYLsKAnvQAFw1DnV2s8M8hCK7FFXMw8jzgLh3pEymGG9ixvCBXvccy3VdnFaViMwj92Y",
  "key16": "5xzmwGt3eXUKNEHThyTiWTnwCpJHwzwDyujbtf2KJbNw4MNV1ZDf69fwzHUfFhFcnSrvzgNnFQcc9RT48rr41JPz",
  "key17": "5ejejNQ59KRsndxbTpQ8K8PwjyMCpE1S4b9Pi1qEGn3RjvEFNfqfREwytA833K2xw4HqE2UpG7KeiT2JKRWA6azZ",
  "key18": "5rdcbDrwf1uXw3cNi5L3VhX85b2dF1QP4WDek2iVKvukEKBhL25Yy4cNJtpKdfxggGY9M2kMAxp8H9cU7ESG8AbS",
  "key19": "2iud4CSAAPA6xwnBbQECuCNog3VG1BdEWs1LH4SyYwDagzw4rwxQ3UeAe8ASyfgYxmrRSe89m3cXSCP9BFT2bKDV",
  "key20": "5DEzysMBZc5GWdtQv86cHDdsCmpyUi3zbrJ6XPUFRC6NvgzNxjxH26ceKknn1EX1VqS8mv7n6uL7FHhtmcUWp4LM",
  "key21": "5aup3P4kGbkz9sRqPib79QucPxqibDQRY9Ww4KZ1YJ8duw9Nh6dvQUB8jjPwfx8mVWq6yLBocZx24tmvopNeXXr1",
  "key22": "61xrDVd6mJTPr9qEczctbu8ymaZ7CVcSSgvG7dswaVwZc6u4XgjbQzK2N7DkYExkyVi39d12KvmgcPCTFbhwziSE",
  "key23": "5Tn4E6X9a12PMMafkBsxEGyKPcVuKSFQXZLN47zVh87qMhFe3psgHurZZWak8J4pasRqwmxN9Qq29AAV2TJfppue",
  "key24": "t8mnGzhVtejozWjt2rGNPKNBobJ3oVZ7mqnvBN3E62Hxx5iNnoAtyyRmjEwacCDXw111QEYqp5a7bTSmcDSvroy",
  "key25": "3Z26MUBiFh7MTWCge1ckLN2pmxtF8ueYyHb6bWMUTLrZZZqdtQP1iBwbzCAkNScEaBEGupFuBuo9YvJuKtMe2EeR",
  "key26": "Erxc1s1ta4R3WbpDCWFSP5wKHZjK97TDCuo4BmgSMpkn86mG3o3svTMCNfc1pjiwpgEwySaeivcbTn2R72XU61w",
  "key27": "5tf1AmjpQw4nVMZhWY6SkRVTEFgV9Qk1EhTzjhWZ2q7bBFNi2XnaZqTbwjoxbSDRYfJVuT4KRQTdt8LxXzS9Qddb",
  "key28": "5Z2b4TUGTcm6LEFRtV2sDEbR7N8TiscLY6Cqd4NeFfcacTCx6QirxuFANXv52qDug2Hzc2yCs3BCJj6FX76YskN1",
  "key29": "2BBj7egr17PiyAPFa8Dfe9nRizYq2Xcm2cQJbrpitURa5U639t1vqAQhK8hCpYrs9QnA5sJ5VJhQVvTMYpX2Cpmn",
  "key30": "4dW62bt9J9DaSLa1xwL8cxD9QBZmT2ua2sSE6N9QPY9iAGTDi1wA6rpNuFiMmd6KjNtvAbhCfHBiZyxjDAncBME7",
  "key31": "3ATJ8njBJXE6ZfbqMjpYYK68nbVkUYvPDk2WWDWb6haC4GFPbF8zbHd2g8H5pzMmXW1Z1PBkyiw9ucVdoAEvNZFJ"
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
