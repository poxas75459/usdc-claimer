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
    "2VjRw7ekXmrg68fhyLjuQ4Pkmdt4MNQ3UG4SASs3UANnHpLNYhiRyuWJYigPf1V1KBUp1REqovZBgCNKTfN1KdQW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cQUpj7VLZmVwHDWrRgAJFpNwN1c52FxEtYWavG4Bq9pf6pg543AKJYeYkHBvvgz2YQDwNha9uTHQKXzBDTA5wra",
  "key1": "5g9m8YWE7ksXumb7tG9N4NLvjxEXkeykoLCXRBo6pYLhfnAQxWvMSmBwqiaqmqvdCeuopajNzENvXgcL4Rmciszk",
  "key2": "5r58zyFyHM1ebHwgT7J2hm9ebsxii4T1pCVcBX3S7d7zunuU6eqpbJxqeVip8C1gF98Pmb9A6mHGrpXeJGggyJvv",
  "key3": "5sWRQ18fbZM6WXJUdvu5JokM837o3TBv4dUE4cpEA2KUrXrNBf7kVHbAJtKpmWsgp8yJxiFzgT5wde9EqBKHG88E",
  "key4": "dzKnmdtnh3LKPeEVrLVKK8CQ45nbAkgMCCoxsPzSY5ce7XrGZ8bTBUEMhgs4Bh4YnydB3j8STvs2LjNy32GXY2X",
  "key5": "34q9M1FjWa5ksbkyywax2GNuemh8q6ufTBzDNCvKtiACYStYJLQiRpsFsAGxaj9HPYZuurmhm1aK8BESZ4U9E2zV",
  "key6": "eKNuPUoND6w4obQp68yDhC7nHrSt1wpSRP7ut6BLE37CpHJ9qWPLKG31xFz8GCQiVMe5MtsjNjvKciPbGG9nejb",
  "key7": "2orktpEZeVNQr5fjE3zLVS7NRDTfQMADTMcgLQhh8sGWcTRDtLBife1VikjpvU7dfkuq5A69FPBtxhF1UjfWWuMM",
  "key8": "64StJ9xP9qGRdMCBsG5VvQPA21eGn2D4PUmkPTfd19Yxe6PKR9uMyap5NcGEf3qs97KF5qkCc19BhdMjyG3ysFLp",
  "key9": "35LXsKb2zULjPWqTQ5kZcXkBhL3W64moqCYwQCUkKQkuzkJYVuvwSPsHevLR9MKZuTxC7KNHJzY2Uv9oMZZpRpW",
  "key10": "5ubmSNirUfJjRTjopWVjSGNLay3C9v7sPsy1RU4ZX6ZUPhH6Fo2zmUCfJuj5jYWnP9VAvkChMV2oSucxTPSirDLm",
  "key11": "2AToR84KYBLMhFEw4R78JjXkmEWt8i6YNhSPpHt3FVs3gZ4WRgc312Jvfgf15wVa6ULr1zSN56Qapxr7Mhbkd5w9",
  "key12": "2ckomx4kwjTYRaMdEfHwKtRjwm3wc1hVvFRmZ6xMjcGewgfoJLNTCh1SRN8QksX63cRJtHdS6Rs5JCPRF2fY7Tte",
  "key13": "47TwWAVK7r4zvhyqpLjSSzhAxh2a56EKnXHceHyVpWNSbxDDtmMGUu8DvSyHyKEJtqqcx9Yp9ag8V4b8KYzsGd7M",
  "key14": "5n774XsbCW83PCJZs7Pe3nBDTB1gA1zKi9Hji4iGdTM1EvQBVDiwYqFkp4pYv8xhQkTrUoL8WsHf59qcg7LnwsoB",
  "key15": "4vN7TGmo1ByfTu29HNbJMcZk54yBj4w2z9hFJ5guAN8p1BkXhMMgLrJtKZCxMJQ3cxoqDco9gsta489F2hTap1sf",
  "key16": "2PbopDNZ8vSMTwcCrPqEPGKjuBrzumPDHMtsoToRQPvyuN2hoyeunTMNsNbt84s6E3FBod53ua6WEAtYvDZxgEsF",
  "key17": "5Eve2v6wsNFbKYicvkA1tZGuEsA1vZTBXZHp8NHxapgxD94jCuyjG7ZyoQNshoopoVXGEv4hkTDjXopd75ShL1r3",
  "key18": "67W77cST6v8s157RZ7x6Rz71xrN1615SWmvjyPDnfQozYLrJ7px4LghP6c3pje4bMVsySQYNKWqTPnxXKQd85bqa",
  "key19": "2crhYVXVHDVTs4jfnvMPGe1p5nEiiUXpWsSJLTev5uU7H1e8CxVLQtEcKptgFG8Vkgw57fcWUo9s3LeQZc6T6nRH",
  "key20": "3yi1w1a6cAWs9U8hFFJhoSxuttgmaVpb5WXXXb4t66SmShKtDCxEcVDZfg7a5JYpsDZfEtjbDyTa3tkio1XsH81h",
  "key21": "MfijdyQPa5LUPVrqS7AzHeJteuCvvYpCSgwhPz5QEEVR99oZf4vrebVnLcRvgc2BrJvshaJ7FnswWBxykUKTfYD",
  "key22": "2RLPqJ4JpBHcvUxDf1bzrvgAWHnvijbYRswVKd8PGDb1j7sF8A5Xaaw8wcRx1ihbKrTtVAhkMwpe7GAwnmaXjUHf",
  "key23": "66NjXjCAcWRiCSsXnhpd3MhSTjbiQFFg6sLvSbygsTxCSvJUuRZ5qncM24sMJLLTCypb9S8PiFuBSnoAxYPRXHY8",
  "key24": "2oZX2cbqWbgtLahshAH8Pq57xNuMU3p5omRHnUAtikpMxKAknYEq4fHheNVCBnpGGquCzwFFrPC5yMoEybCspvVD",
  "key25": "5UmRLucNvtVSoPuQypimkZzageYnbg3zuXeqsYvLm59fVZaPwafgtuKzma2CBXoo32bRJHA32cXJvw3d8mhnZNs9",
  "key26": "5AstuPWy3ZYGAwizQz62oDXvqjiGqshxJU6468kFDyBXo5bkYFob39pt664XtBBg6RrLNpDVVUnDFj4hFgMajYrV",
  "key27": "43Gk4u5hkehx7rK82YBEJUCGrUaCK7MqbJWs5HBAbUb8tZp9viB7EqWUuwSGkoVrRhypMrwdg7Z1xCXVj7gyZwVc",
  "key28": "3z5z6ttk1gP3ZbyzyYceCQDUUkBufyhwajDnFTBm5c5F3JEGSAjwqDh9str1CH5MeEbQKFSqbasbeFHBC74ccWDU",
  "key29": "oTCoHh2TWt4ci3tuyfDgGsmPr9LythJ24DN3SxsMiskwkqDkduF7iZsJWjng3Pd1334yJydm7YcJh8ePVky7Mqr",
  "key30": "diPpxWQJBtXei6GeKU6aNNAZQLFxhT5H5t7cx8hUTRRk61Avs6fTCgPp9NjWo8rAf14RW5fmyDXWCjz7UKNMmuD",
  "key31": "5Asvj8VYfTCsuqEfjzt423ZwaPo4RnAsn7qTTyX9hMiSHqsLSX7pckZV9R4QjndpV8gxEFADrniw9hvoaqHZRVCc",
  "key32": "2YQKqcmDC6ku3KJT5bbsz1TPALqMDhRWjAMq8RhYLAPcQ8vxW33vvHMkJuQgaooBvn4gaWxrRhm2agF6TffT866n",
  "key33": "2FKbnrFBoujuuLNqbZgH2of1eSj2DZYTCBNdwf5hXi7R2NVdLQNzS8WPNd42SRzCbbYZiNgDhmJssXhJhH4tyQY6"
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
