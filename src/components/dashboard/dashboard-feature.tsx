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
    "2iR59yuGshPAXLNjsVavivhGt79C6g1MSHPPQGZBPezFcqyZkYJ5JSsdLwLPXazFmb2dBck5ef9D142Adkjrjkry"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5buK31ZAiNJQVEkmnu9DWwS1sL1AzojPz9Dk12anoTWUnYti4B9YtaaHzBoM2VsPKkAh9wvrpfU6zLcU9Pw42qnE",
  "key1": "67rBMvWReQGQCwZ6qjt1uwdeqJXVhFrd5cCjk65C62QcWBRXsAHwie1drqgpJzGah7Eom85z8KS74r7M61ovRzpQ",
  "key2": "uCRSQJZLbUiAz2L5bJh2CiFo8PA3vBrTe5K4BsxHP3qyVwoDWk454GUDA5UYnBxyJf2rH1qV4uCYSW725aR71wA",
  "key3": "4Sqx6DH163hH8L76pHbntfbSz7X9Sq4AaQUx4pGP83wDyq5SmfMLg3wPWkixJ71XABK3AxKi5hVBTAjrYjffFkdJ",
  "key4": "5bMHZEt3ksjQPqz1rM42Q1by6ffH13vaKYUEiAskazqbaD1ZLAVfw4yVGrZW7RDy9qwsXdybxhhQ4T1Qj7THsxeg",
  "key5": "4hNFy1yvR1dmmvjbsVBYutHJZxm7215A1v1yhL9VuaqDnCYwwupwKgkqnoTiXZ69msTSmq5dATHuCfYrhy6RoQp8",
  "key6": "3ZFeV1Rj5gv5sHnU5KJVp5bS72Bo4Nhwqu6v2tjg96CAZTefNRLPg2zTMZGVerVfvKYAmmAhkMLrL2ChG3AR3iP7",
  "key7": "4HMCh4mC1Z1cRzJfM3n95DtfcsxiBZxZMNFc4R2rBH5LLUnrRP8CYb2dtKQm1KPZfUwUu1JqvygaXAw1BLv99aBm",
  "key8": "5vbSYtcYfj71PFeWSb56qxicEMzAMyFDD8jFKNaSPgtg96WnL8TvKutgibVHyrkjWuEMCcXq5pUAHRDpeBpzpf7K",
  "key9": "9Cpt83S9ieQnkt4RcVktLH4SvL4bp2em3pQfCgeK3xabTFLbKRcPsaTsppWiRizHT5AfkQpGkP7A4u7g333tvJG",
  "key10": "u5UDqNdGR9QAUfWVFzNLSi4chXqQt8LtKYY28CyHkVwcGtSGjSNte1Vvst1viApZHyjd8uqSCrAmmibYFWJz2h5",
  "key11": "SnuLhQcUdo8urwNe3mkS2NxtWQHaFj9jbQmzEig1CyDzp6EVnAX8j9V8Xdhp7jA6y7KKjWbqQaNaJpK5WxkU3x6",
  "key12": "4y4b6bxDSyMBjNgfU3wnmvVKtYhmzHapPjX5waUcXf79rr8QUcDJUFqFgVYuNGDkrbRYwQK5ZDb9Et7TopwxqW95",
  "key13": "3VmJCnmthNpxAH5qA6udSn9jDeiEDHhJQybxLHrrjkhfAECGQwqjTBDZ4JGL2roAw456mDMojSS9c373a9UdRVeM",
  "key14": "3gVNPmYPRbqKmkNZjPd1suKQXEf2ZwAmWP2USmZCr59mDpiqcq4BzVn89btYS4fbxwpvxZtWcrp414PK61ckrvUq",
  "key15": "4S8YaRdBYWVWcFQ3tqDkkF46NgmzDhQFnkLNYFp5f7QdmgYxSenShP1zggKxqHP6i3XpGtLThszQuNqywsis4tPt",
  "key16": "2rqPpUXyAgSRuA6nB46d8RmAstiHCdNBsWNk1KjbTefumZKVYvdNV6r9jwEQACT3gLTsWBV8Zo1S7kbrw92iCucD",
  "key17": "3Rr99JzN9vXnJ3rwbhi2yrTgv2kBoRUtfNAFa5ZJeTDyPwFwx8EKFsHMWhdoxK79zoPJJqyKppUhzjbnv4P7kV17",
  "key18": "3VYKWpvPq6Lo8KFXGVfXJk7J8s3smBFeZfRaeBYy6MRgkcXmDuexmmvqnNXGxdi1PdfDLxJ6yjvSZcUM8a26SH6P",
  "key19": "4GGVv9wANsBJs3s7bLBNLtB7imzNskQmu2vxtMJARnFfWNo4gNKC1hKsuziNqiwaiJjeZFXbUmF4ro8fXkLxfX8D",
  "key20": "4xYaMJtTyBnQpkR6VMaWK1E44fndTBsRPsE3orLSmnrEtJGV5Xh2cHVVsz9i8VfQgf7JhjS86NbKkZks4wJLe1H",
  "key21": "5UoD4e73heHiS4hM2S68uwheh25Bb6cCi4rYmEsJwWDnURzwXvo4LfzK3ZjzRyy3Fv8Fwx3RGu7czoMc7ocx1HNJ",
  "key22": "4E29tyMd7yszAkdQrMgxG4aCHTxn3gKwXAxjNyTF1eCBPL7y8XPyzvvocYGqcQqnBpJY9mgRFTKACM2rQmdqyi6o",
  "key23": "5GBkRNo827vUE46SfCzwQKWHmpMsUVcXkqw92TSdeomD3owHWBLMMJDTRjz8La9eWxfspKoGfLNVZ7YsPi5WKTsQ",
  "key24": "3obVA6dsQbzuKt3nWE5RwC6sKdLGxN7pg5j1hyG25JixSr8RBqmGoXzP1jdpK1A4jmN5LrhPY2GUsSGCtCdwHHYK",
  "key25": "4cPfVvspJXfxQMbeh8Zm1PAHgzwZnmE26xzNuWLN9Ddjbvsu9Z6Rm3TE9PiES8LsAq9cZ8h7gtWVLy7hWTBi3PFH",
  "key26": "59c5MGwPbGXHXnAGSjhBBEGBJfw7bf4kCtzDYQEdKz9YZHqU42kQXGtCvomxnV8HiTHEqGmQdCDZDuMEVEq9xDiP",
  "key27": "2TWc784nEQWvV7mmFz7PsEkkfxLtNpBqxnn4Gw2iQeaFquXFjUqkcD93bN8HKAfPeXc498Gg1Vsyyok8tu9FsQJA",
  "key28": "oTh18di3ZDjcQYkzCgKwzeMQEG7GnsyPAjoY2AMfug8mRgcLdvBZSQjFJr3oiZLk9tMubARt3m48iMs8rXg8eBE",
  "key29": "2BwCRqTRirGCzZNuZ1WjhTzBe8AcApcGadPzoYHsSRVVgH4cpki1EeRqjLvtahurkSwKjqkoesWptokvgzsZcPZ2",
  "key30": "5QMF9h5vo89xSJ6J9zLkbtdQSiigqyEyY3C6y7mfc5mFUhzrvRU7QruTYCs1eb68UvL156GswTvcvm4hAah2sUSx",
  "key31": "4bWJzFJHyXYVPmAbzQ7Ke6ydP8N1q3VwvFmy1PXYkZXCQoczxPq6BoLoik2CfifeJfZagh8NM4jYkRJkJEqKQzok",
  "key32": "31uiq5SJ79rrfFHz6knnQFKTyTgj7bG7RAxTTDbhYkk5e7ktP1xkQ9bESaofgYQqnGxArtmRVYuDmesRayamfyEg",
  "key33": "sBzzuCfTqnjBthUAHrxU5YMLzLSCLTDS69XSCJ64RZ1ywxNykPk8udsZpKgTPExxfcAxvJQF95CwRHFvg5KCzhd"
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
