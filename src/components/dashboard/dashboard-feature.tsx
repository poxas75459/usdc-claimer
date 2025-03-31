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
    "gCjL896t3L8aQQ1seAwrkiikvNvyxwu9EDC8wfeMRdjxx3MnY5RKGeEQbgv3RJWB9YQazAe9sG5aSJHvq9eyfxK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XVcSs4nvtF5zEj8Mn6wsWqeU7Ct2EefPcyo98QMz7NzSwho9hJSHesxWEis9R1pQ563Amx9VBPazUdDiervebUm",
  "key1": "4tS2CSVLEgxejp8yUmAs9JfhVkZZLmJnW9SMRzaKfGUyRpvXXjakCXXmh2eG9XKwzHFsyczPnoKYNVDzKtSmbtrU",
  "key2": "2Y4FA1C6aqxvcLmfuYqtCnB9QyBqC74Bt48j5cQ4bn1GCxw4QaiWPSnJ2jtXyyfPRUBgZCX4ghw9HR5Mu5iXjXHn",
  "key3": "42SuDneuFJ1Hhf2FV6n5j9vLtWWAWUSNDgBwERzHWqs1HMf8tPpCD5fuJSteX65W6dkBpEG3ZZ54VhZJSo95fGUz",
  "key4": "3BbZperLpuVKxpnhGm4bnKnZu1A7oePVznEPtsGKGnHK9qfNgJpQQAhVQDJWB5NRxvaNqBthMAEXugGZXhq59KSj",
  "key5": "jQ4nFRCEyLJXKXVYopEKCqFbnaazxDPFzaxcD2JqgP9b459r29jk8dktdggmEYNqt2MWRHWFc8gRNXYYS4EVjds",
  "key6": "5veyDtDhTfGXZLT2TnaSrAW3Grbxc47jcnMQMpzdj8ue3QReS8xriqtzzkLWWXfy5s11noNgbfVqPXTusFidqT1K",
  "key7": "3GBM7WpNuaCZUqPEKk52G9in4vcysTCgL26yDZRgGX7jC9G9PHsrvUtZukt172Pqt5fxspBEmrfo4ompehKcDQLr",
  "key8": "53mxKrdXAUkF85cESdzzGHghYQ9BshHJZ6WgYkRs2e7aaauzTabD1ZCihFghRdM5BtMSHomZD9foDns4mrRWTzoM",
  "key9": "3FMke4UMV2PT89v6CtiPBduXvNAv3up4Bwt86DJjfncA1JHhv6B6RZrX31eM6Pfvj4WXadJ6EiFo8Jem88qgTnNV",
  "key10": "3GaiTYP1a8qsuJk7cEKyARaKvfwHexUf5TLzXwxE3JzNZd1eMzAPZuPxKk9YCCbmeErhKo7wmDivbjFVMqbXHW3t",
  "key11": "3j8og6ZPDALpxqkHpTCuQPKSSkiSo8czdqVu6RAzdwhNLYke14uszbyBVmMiy1FhCa9uEEx9hWCsitv5TjDCemti",
  "key12": "a7CdbfsrHT4QYfpi2BW8H9JditRA8JMKuYUyaaAZUSXyqudK4RLbLNCi48ayaahQWvMDHQosmSc7fTpV1aNZhvr",
  "key13": "3XPEw3HqqVa7wS7LiSXBCVHGKXt16fVg1iuWWkxQVRixnsVhyQgmJrfPyKYpZerzhja8JC6ZJnBJoKJaegQNoDH2",
  "key14": "4PeG5CtRfpHcWksDxEhfPdUA6HAvq6kcrVCS93JwfPdLh6mV5n9U5Gj2hBFw8vVmcHvxfj2ddCBkzDjYhbJUikpu",
  "key15": "2EN1n14fNn6iJPyNmoypTUZzrATJYYEBoy3sPn1SBj9mHGrhjFTjFw29EZuGDGx4YqCGuMG1eopBAYcMScYj2tvL",
  "key16": "5616QE49MZPMYXv17q9yjni4Yt9H41Ri17u9kh3g6bKRvK9ftmgiTbWUpCRvCfbM8huPLEnLZxEGkSPqBn7QQ7Eu",
  "key17": "2JQk5DbxhAMcnbGwY5w4P7MbpQaZabac8FdUYXj8yYRpuAecqV5WmirGFKuQ4Td2afLnL7Aq1udesscmrEP6iGW6",
  "key18": "5PD5ja46KGUfDrQ9hyZpRiRU12aMJzR54ywdhYHX5hagSMv2SxzWcRhBLq53MY9SQkXyDYh4izFWP5RNyVVfJWHJ",
  "key19": "4uDUQD59NvVAJnpMfu8NqpoNbncGNXS572KbWkGajLNTdHGTPq6xKKgeZN6LZAjj3B782FH3skiBthpKuPKCvnux",
  "key20": "EK5DmgHdfJ3awpSivnT2bn2qFg3yHyG2CN7sqDxqMyixGgMy27KsWfAPw35Re4GdzL7EE1v726ZDDfo5ePEC98g",
  "key21": "4JhzoLhDX8e7aDR3XvxSDZjRsS1VUhjPB94vU6n1RJ8VPoocngEPUPmqfdDQdqy5dyUqdpkw8ZaRkyw3AS7g6YER",
  "key22": "4Wa2QDLQEJVG7oF5MnwBSn7WihiG11kqrN6mR9HoiS6DNUduLvbPHjjKUNEGnWGNTtBChUh68rgdD8NtATTvFno",
  "key23": "5iF2oUxupL5AcchTkd1UQL2VJ2GnxqWqHDTJAuGuQzsvUBdKw3kSr6ysAvucw9qzNv8bqU3oF7bUny62H4iSK6XV",
  "key24": "41w1jF9CgsgCrSW3S7db84pcvvmecAUWsLQDHfZtRMPmWUQyhaxbwuZnJGEw9ALnMKFu6ZVtQTFMFCWAQXk3CExi",
  "key25": "QUUgqzJsrsD2ioYzEjoz1aVVx1V4Vvuk6ZMJkkkq6qg4Yxqxh4P53wHCAd2tctNvydqCeHVr6RPojRQgSdG9ZNU",
  "key26": "2cDHCE3hjNnHmu7Xvc5tVNCYL9NED1wCetXCd8J6wqdCWydMhFZWihTVYyjRESmwvCbiL87xKPT3czvtU5c9Fx8Y",
  "key27": "5JB7Yn1CTb4tt2VjUSzNK6Yj9tp4LYyjATH82HL7prx5M7xZ9RR1Sif732U6Z4QZBL86g2JCYyMbMNZwBfmmmp9U",
  "key28": "59hhbE8Lv7pU1ksNDvmC3GU94gMRcr8RNpoVBo8YbqA2PR2sPq1iuVf3GkJszagNNLp9RyKesvAC1B4GkjF5zwDg",
  "key29": "5Y3Pjm4w4SZ5erAqW6ukKWPEKf4gQJXsvzTzzZsP3mPdYPaQFPfYkbb8sqxySwmztedGmcBJeUVQRVGJz187KHkV",
  "key30": "4nb1HfzUa5Q7BZ5N7ZDxAHqkTVcvyC1q4gJFi3kNygVwBcuishZaxN4Q7DuzaUG28Zi8jRUFxeX9pfYASZpz9iKu",
  "key31": "2gBYqFNNyvU42pGgVwD4o7qjYn9LTbjTHd8JwC8vohEtJS6wKnCPLf1f9tB5HS6h6DQqJ466x2P5BQNWfJBLNHbJ",
  "key32": "hgDmQeHhxkY5Yb7AQuBbTqk3cqWmT2kdmL4x6o75bA8xnyjbf8J6weL7Mpq8Tug4ekGjnBv6x4LZXtejpVPnmK6",
  "key33": "4sieuiyH2TM8F96oSbVoscFKqbYsnpjncH2N5f3ToUbRdvDedctU5vqoWemTQusuT6iTcykWFEMsJXcsbG6P5nMU",
  "key34": "4izt5KM5DWVBT3xNxdwb3Txv6bnRAn14rw7Q4BN2VQRthvhxreSeFrbs9fj2M9kvfP7GVXBVmkFgZNGbRA59iC5N",
  "key35": "5oAkZs29g9cYvdPKvYvd9Z2v25A2yR2bieta53Bvq7opSTmM7EHtMKRaSi2FKEtjnHXc7bEhienv1bg7fDUG3frZ"
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
