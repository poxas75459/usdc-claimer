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
    "25mE9qjwgNgW7g61P9ZC51vec6jq61ydnPAvmQvZNv8gG5yzv1KL3Tp7jY4YcD7CcFuKuhv78VaAGJDV7qMd7i9i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rwcNe5wmX6Xvw4a7aLLHy4bwSQC28eajxUkDtVJ7MUVGLhf88DAFWbxFdDbUtgBSTTMSFunVokX7Bd7VBWsh76n",
  "key1": "2RNhvj9PJzum1RkEqDg4NoaHEdBX3NnUaTwMrMDe1MPX8Y7N4QPcMYt5uj6sa6CozFtG7GjzPUwNLUiiAZELi9GN",
  "key2": "4iFX1ncjNiwYmzZSSS23Q7Nho6uHnUwHfvr5VNjxFagJtM9iZUNmqtXyeFE7jFDkYgVNNHF5hf5Zb2r99sMn9Qrr",
  "key3": "4qTbsXtuSpCvmfg6PuKzdX8rQsDfxjzi7tf11phHnDMvbfxSPN7mV9Xd4PAtzwoPEET8LHERK9FVP93oGBVdru5J",
  "key4": "4L6v4Jerof9kPcujSJdSg3xvDg26A7VHmZg75DedKYcYJsiY3jenGKHyMWw3CeoDrpukby7QJQzfYKyKhf59JZiZ",
  "key5": "3uyhkrk9wZoLS37SVUMYetbaB9kN8ZQ8kUgHbKHVLsTNDRQuuA9NyxDdZ3ZBsPGxxfVoNNyxaDpGiYhB4xn5MjpP",
  "key6": "5KBakPdtz6GbDK2qMnzexEXsBe68nRfNMAEQqNeceXtFuDT1D52jAjxua7p5WMYcKTxVFrMe9ABfTxeXLie2KZFk",
  "key7": "51Xmkn9AkeHp2y6uHZsLSG23CiTsqJQyjPLNRVq3LRo6z1R5UMCf5Bz94ggKFADXDVZozTeywnd9q1Hy6979ZrjA",
  "key8": "61ri9zpts45AhjBi8pmMpMULA8N4mGwsmaxZ1fdD9TwW5jFsWVYat5wnA5QV78fp2epcehSkDGBCNFcgHvd8nERo",
  "key9": "2TYJP9svKYUFV6zuxYSTT99yrDyBY5Sx63L6bhiw7ubp6Q6aWez76j3btsnrwpYKrP1XbvAZb2rPEqCoV3wVuLMH",
  "key10": "4a5Yu6EtW9y7N7TnDo2mQs2Qnzs8qq1Fns4y8gGwSLmkTASSvSHEyw6PiKbykfcCZF4iJxLFr7avJyqY5VZ2z2cR",
  "key11": "dyJLWLZhTB4iryd9HyKx7hxdhToEG5oZBWJX6LmcwSgky8S7tMMx1j5j5CwuJRWhyhLoWFmJgeGRbZshAKfxWxC",
  "key12": "4zViV5oaz3MKYPmhLkQcVxEBxcoBzgMf3UYgagULYnQi4ppuygwfeJdcAukJJQLdrXwwDyqKZCJT6tDquATEF3mi",
  "key13": "2xeHzW94j2TuLBXjy8kt2d6SFGkvefKR9S2u4AotYPz2qd4DoDBiuMpKasCERT7bGvVDUq36h7CLBWBmB2vW49YK",
  "key14": "Qe8qJsMYMPXH68fT7iuyk1wbTrZkWVTP3bQsWfcs7hHdKEBgQ4Ph8pGt3wC9aN1a6fxxjELc9vpXphiJpES6tiT",
  "key15": "3GqDvx5QSSFUDEhkJziumBCQR3B7TuzYBfAat7XjDJRg8d6VDQK3KCvrG5L7ZLeVwwboTKN4hjVVX3pSWuu52NuK",
  "key16": "49ViKf1nKaPT9ci1p8Dkfhev3V1vPMacWHnaiWZai5S2a88MEERVCJJUksJRx9Lbp35nHaGuHfo4DKE8AuQKsssN",
  "key17": "4SfP2PpYaC2eN8YnrxmVToMizoCDU7fvwonkVwWcr9ycaitynpjkGm2UWGkfTsjALHLzopbaScVx2Ad6fiiPEaau",
  "key18": "qx3JvxaxeJ2xHNrzzxGSmMv5d9Rb7obHxLF2fxbEXbF7r89bHRe8BftkGiM6X7xwAj1rGq83vkt1tov831xthza",
  "key19": "ndsqkMrsZqCE9BRnsm2E1J58sxaVDQnyaeJWk6u2zLCMg7idL46Yt6DxggmieHHKk7z1tDG8Rng4CRz3ax2tXRx",
  "key20": "4ScDo4akma1Jc8LiawVk8cXVEoEaPM9pyXpundrQysBpvhzPxgVzeVHHjx74FJAeu9i1UBFjetLFMHdU7m614NhN",
  "key21": "396iLZp9B8HLmUyu6bUYK5wc3kar95dS76qmWzFHiwXQzV1UjmeYWp9P9dTAFRCWG3YzLMrwBhFm98ug2rwLh88t",
  "key22": "YRYZS4dY5Wkib9wPidUSPbqPMxzX23H12XSpc4FpHy2oiJL6EvDvEVCkouPqQH5eNian2VBk6EmxZusEg5S5UPB",
  "key23": "2J63PamuzoXiyP164fWsAfY9P9iam6xyiAzdQNrYKAsbB5PHVizKw9Pk9PEDnKBzdyHaYFcbWVJXUVCn9d4SWYZc",
  "key24": "VZG1D8ws9bCUgP9CCUDxASfq7Pe1A7W1zbe4GHXcm8myKxobvfWG49oKZBtE8894c9NyJtnr2fXubqoqmntd1Xn",
  "key25": "5ZEqV4iJ2L1goeAwCegwZjpBEe7Y1S3WSpaaCt4La5KY78v8UvzgiZLRcmQu4u7WjFccw9LSRwQoN3G4euPVjuN9",
  "key26": "3GuLLUyi7vyw9qxSf46zXrH24WHz1pdeuhrBUHNgzooiLAjmrKMDyRMxJt6pPrhVQ4MvGcEXu76922UrHnzwsxCZ",
  "key27": "25PY9KsiKmsrApK3v4FkuDmM9k1Wr9y1VKyMQEWnkWqkZxxonMM2iXSKZJ9C9PZZqAmE8z2TiFgnF8wWK6yw3EyX",
  "key28": "5W5d7mM2herpjVcGJH4tEvExuRkj1hE7BxMz4F9efFciHbKjdjbn3vHVtE9tLkdFsojgjE3ncRbhNwmLJCHUvTVZ",
  "key29": "2DrVB34jR4M8ALsBqwRNCFVHk95Vjn5qkekvLizqTLA4ScGdFMbojhA4TPXPBffHT4hM9G64Amqf1gLf2kgM5xno",
  "key30": "dejiXpgD8q7DqsMA3b5hSkH2vAT9KVVYuy6JucnzQKrDyRKtFYsZMcMQ4jbQp9Vc92UbooMvzVPm71R79XKiway",
  "key31": "2tN1eJvmsdiWKXWnJYix7qs98JsvWLtv5BwRDP9RizU7LqxU1Qe4yLfvmJAc9CyLTyD1hrK8DCZRaYPCWcKYPVb5",
  "key32": "3Kj7t2beQfw1bWYqgTDBhdPbLWYwtXz3DecoersnV2Dm6qqm6mUWDyzYgwSanew6m9meLuPsfrpiaqqoPTuPEazZ",
  "key33": "29Cuzwg277eCNhm63nsAcgHaSBAaUtmcNVLCWjRhmeuSKfqSxzRPbjuD1v2gXjBjRTps8qKY4TnZmF4Kf5pPmt49",
  "key34": "3UEKnDFoZqf9KCJWp1rXT3jXC6zGovEfir4pACmYKbz47RBcE9ihgmi6vvVB7u8gqzuksSb3DJEAcers8RMnZP3r",
  "key35": "62EprJo5QJU2Y4MjZXf61y7ecjbQbSeN9Dz8CTRHtJgEGJ5ptkCCLMexNxq1FbUfwEPfH25nLv74HH4RfMzxEmQ1",
  "key36": "362efR8Mr9q6aytaMxnfQhmpjQgA173DLjZM83ynoUnsN1qDm8UcEa5krbwDpZjzuVLcaW1HiTWH785S4PLo3AaF",
  "key37": "3dChtcY4uFNHAbnQqFAMzEAgCVmeJ5rLqL7pLPgfLRXYaqrRitat39uukN1Um6ixrsw3ZUH1VxN2gf7xCUzgFbBD",
  "key38": "66Y1CEHwwsZgrUrxmfESPaAZgytQkcDgg78utxtCfZzaqzaEjUFJb27YsuKayCpV1KDvQzdwrfS1EGj2U7xhuf9X",
  "key39": "8bq9n5RR7hBBS7p1G6PgXzego4Aza3uMSwgZawcCJGwjz7K84uVrBPzLnjHpEc8LLcPecgMQcg7eRHrDDtkw6Q6",
  "key40": "5xC5CdwikVVEqa2vLkoXyV7NXgnahgKDAVoVEaygHE17Jgnvp1gz1wFweU4WUiC13dx4HuMJZ4VgeQeCpvM9uQe2",
  "key41": "SrLWY1KEzM1WQ18s6owKQ369caZB1uEHbYU5SVT5KGkSp3HxdUwwYGpLduRJgEtc1KLqxD8oxWoMrH2Tsftqpad",
  "key42": "mgs3PbGeJKHvooZGJNVcuAnKbGiCbWy89cweDzEdn2EcDFkvLWZaNh2cTUzhCQtynoXUTWfydSqjZaS4xb4hhUc",
  "key43": "2ULqkYhVKczBwKtdJoxBzETcxn2RLyhcdy1TS8sd5n6PpC94aidSDmL8SXBPYfVT3oqRdSVbacdkK2V7GPgrbc8a"
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
