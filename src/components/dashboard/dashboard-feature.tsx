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
    "67iocJddBEDx4GWFy1qqfsx9zR89o2SAYQ2YbHCequrpssqc73qy4rxJE5GCe35Y3Qv8Fh4tG462z5zeAcJSaRfA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BvxQomJvXgAEhNenD4QCCiS7trSi6fuwnwdLUjiEtnEnvczYjN1LK1jL6CTopch4wn3LtzScqbsxNiEfHQs2d54",
  "key1": "2NF2rDjjrkuTG9N36mNToFHGXBMSsPsjCr9rjWVtFEusGzWtS6pba7TMVi1YxZ44m539or95d6GeR1uNNfr74yM7",
  "key2": "5DgCtsbcwPBwYyNwt2pcNcbKhj5U4ttFRXiZ7amE8xdtfyurtyUmJjUtD6X8RCxrNk6NP5CQr2g5aa6jdBJE2Ccm",
  "key3": "5YhsfyR6hyatRby6waoVJTfkLU2h2UzJcYJQPcPRAEWqJMepBSto9w3Da4dvS4jNLU2WfEZiEsHdvtA9m5ckqjjc",
  "key4": "2WXLK7mvcPih93DF4gx1VW3qkCT9bUbyRXqFeipZTqYYVcerqMFZDRzAgGLbnjAG2zC9zqeWJS9MCronfdyTcJcX",
  "key5": "3KXQqaMoGZAt7pcXJnWHh7GkVf74XiyjuXo1BzYZx7AnmwxCgdyVZYjicwD2jwVTg8kxG9AFLge1NTUc8Tvcutwv",
  "key6": "2hg6fyRjsHQT2bsQSock9k9twceFxHbdAe7N3rewYBvR2P7puk2mZ6cZWz6qRmCj5GySbFRUTGvD8n99xCnd3vas",
  "key7": "3HfV2dbQmJGFPbJn18ZUyeNgDybrsh6byjLtarWfhpPB85oAv9CTmyUwZ4Bt8fwSRK1672fqnQxhhpYZAdM7pCpV",
  "key8": "5MQZwMJNay269tMFm5Df68i7XK4AbZ1inATnMJW1VNYpiHohr4z35PFnhFvyy3x7Vm15XqWiCQ5zpenRszoVUTni",
  "key9": "3yeXaGYtEfBMb4VPcVbsgphc2sts3xdGAWNFArg3xbFDswPumVfh5Uk1n5ZVukjZXNfJ1y9FNsfJovt74WoVHGvX",
  "key10": "5XWZVDRVRRJ9VJAHuWAxjjG4Ufyp7PUyR7a9rk7u2XhGpN8Lcymb4Kd78y9oigjTdnmFgQdoCqMGyktQDDtvCj4b",
  "key11": "8dWPW8DGQCFwrZUTigDqGxDEDKy6BjRCpb9wS65zBnmJB5yNPhB5aTpuKAcATJLRLuAwvDEbqsDA3aSDqH9sVox",
  "key12": "4WYbnxHbPbJZvyb2gRGMUuLDMf1ubqLWjsEgxhkwqfzS8m6xnSS2eycapUbSDKyhoNdEEe5WkdqxShsYw6rArBvu",
  "key13": "2ctNyhGXtENH8kukbu8QBeZEZt4gexDHXoWcSFtMADSAm9oGuVTc9oidptehMgSevRY8S1rbrnFJYknV9HZnyJZs",
  "key14": "33qdmaoyrJmdQeecBttMcLhbnFZZhSCSAV3BAci984mYLoocvYcMQozHFd7aKDDc1qsFR5vC1as8HnmTHWpSd97o",
  "key15": "3reRokhBHgH8FPxNAz7joKtvB3xCqzu2RCNRY7TJLg7GZ8n7umDroQsEamdtiz9FRbwD6SVPCSN26HnAHgBpbCqw",
  "key16": "2cqShu3Dy7bNZUZBPJuUDBACpn5qD4rSXRJQD2oyLr6Y1Jen2A42iXREDphFqYwr5fNK9GBPDDSnirhj6ft9TZvv",
  "key17": "FtB6wkSSzGgwXfpEE46E2hHrdXAC5RhHjtfAcp5d7h1a1SdTodWX3vJgzCrgy7GntPoCp5BpRswWMSVC7HCBiG7",
  "key18": "3qu5SzqHZ9N9ze4G9m5NhHxrsD8BErPwQMQwdeqyZ7WKrzgwTJWM5vjyfxRbABZV7WV37Hns7uB9ctWEynibCRJo",
  "key19": "2ngdV8p9pRGsFXWBiD9ePmyq8u7nbxNwdEeA2W3HDV95iAhVKLBtdrJWQavrr3TZPSujR2aMa4hBNKJHkNFpGxZB",
  "key20": "5qVwceHcFqsggHaezDciRQqLhkpEfQrk9Pt4MHC9TRzA4wwja9zKj8NHXxyzdXvvZRKQAGV8Y3Mh6iPzcbcZWXf",
  "key21": "3GJb7v3jgvxwDFZ4ag7u7MTrV2Vp5VTfNSnLxuhgVWmxzhNXpHxu7WS6yxbjCcB6vWGW9g2Myym3rXGscNJADCpB",
  "key22": "3NiUgaa46FfYdc8RX24T6CCKHpmATraszPP3xCn1nWoMxN4Pp4iU6tivKm6veokmY6m4FLqbsqv3SEBSqerf25ds",
  "key23": "4PmFSUxVNNSgnVnc5xweCe1YWyCT3gC3ntNQS18FFEiS2vtkrgbmEAExwMrJp1JTTDwxiRMFpQrUTmAoWKEYGFQ5",
  "key24": "5qYFV4f4DrzL6kkjBj3vXYQBvrr2bCmEgHRYTGHZEQ2xKSaxaD8A9pTEaUCKByPocz8hMGDB2BzDuXgJwsGWTjZb",
  "key25": "3cxWcqN6FBtdhe9QHhFhSXpkPwJwZeEavjgBqX31UA1ecrMd3BVmre158zFnDRtARD4pa57zt9NrTp9jqGXJnFFZ",
  "key26": "52fqsQ3xrJMbLMZBzvy4ijKUmMfxXwAwyhQU5Fyh5NzBDcjK92dg3QXzuoHBXuADVWtj2U7iLbazMtPTzxH7hSzR",
  "key27": "2mCyjoyc5ffULMApkbvpwbHxJBj49ARriJeibcoNpFxzd3vTnFq9HET9Kz5Fgao5AueTCgJgUARRcngQPnwbQg2P",
  "key28": "5nTjHvLAhwwPAVkXmijDnx6mvYnyNqADY8kBLCo7N9tEKG8x1hbZmnzJF2MJahLomHB4jk2D3Ph4qX77KaiMUgYa",
  "key29": "37K72bv7mCriHubqBd64Ew2iSHXDrgfef8iqJ3c4PYeDWRg97YtZ65obuA9QoKURhC1DqdNGEGaLpi3W7h9bUxVc",
  "key30": "5Yqr7YjhiWPcoMiz2HN41XbQZzPH4cd1UTp2q8JHJcsmKJVu3NcD2N4EWXGaN7td9eVH7XvcEToLhV3cjcAnWmuC",
  "key31": "2zTbcGRShRUUtggq47v6bpfY2hRxT2amQ7sxW625eJJ6UZpWJ4sPwpHp5NJ9XG1ZNbKJ3xtYCLopDwn2tkMuA1qJ",
  "key32": "5ijTSdrKMQnW8ZXi2hTrcAgCsKvCUnGmWMDrRwLa9CkPZHohkqHxvgGamkwdpYsjMRVXcAknyhCcHGTkDnETwWHL",
  "key33": "5ExJgW1QfEVDkp3VrQYtqKwt9MEcFukNpJmbHSJ6TFXmq6FqXc6zSNxFTkd6Ei7Ck5482wzGqUZWE7N8HQMUQrN1",
  "key34": "Mwmfe8UHY2xXDMQtsiy6bXyGrq7rr7p9WJZfzJvGLG1Kh1qEUkL5Tby2EgMYZRM9Q5erk7B7ZN6wJGQbF1ouHG6"
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
