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
    "2VBnmXRsd2B5uHyYCREcxffyabuQKEtVRnrsCfR9tMkktmAzQMsQC1vh4Mip9Hrwkxs39ZmpXM18RmJobbaLByLj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SfCn6Le4QZYNiojLktJ3xdkGBvSbY1DvRysf6PtEySqH5WbSq5C9azWAz1NsariXFqZhyvhuQq9qKY7jZtZmitG",
  "key1": "2mRat9gAnqB56CkspR2gNmvDizxoonatYnJRhpzsMpjQYhNfZ44j4kHi9GYeUeRk2EXw8ejzPF9N7x2xW1tRA4xX",
  "key2": "5ap94ffYDJqWcC5VYuGHfPZaDG836Dfv8xcG2VGAreB172s1mZtj9TCHSrAhRAmU4vQWJ6jFVoBC8Z6noTMymS3T",
  "key3": "2sDYkEB59rw9TJ3HUQ3pFPvXqFhQBvRx6nR2ydhJg8cs6yF3aN3MPo93wR29JuGoxGgaSpKKVNRdeCEBa8wzqHwj",
  "key4": "xD7bQWG4owLnKqPoWSvrg9mtrqubCLM2nuPEt2UZAAFf1fQSWqSodoMMs8A3n7KE4qsxNVfmrsuzw6dqMXLGMki",
  "key5": "2nyUmwxbAJyVhEcW4dCMtfgALt8autj2TnRZCUokKpuAZ64HagVMVSDHe9JZxfJStwnPgEx2eKKsXA3Y9DCewcVv",
  "key6": "59hxnpeC2Pq1yiwtWHoPJkP91fB5vdiFyqQNDXNCXQ3ZG4kcighPU7i1i4WrJARSGPSHyMA7JxUZ4xUMGK5Ukj8T",
  "key7": "4DT9Ynd8dCwkH561xDDxpEp33wSniL1pzVmAjE8HE6fquL9yVuHPdMkesi5g7zDMP1DJG5hL32S1pvUHJyfabj9B",
  "key8": "5iS64fdUnh9dpa37wxWBVuyAwVhFJbsg4P3ZGMBH3DGN38gWS3gJiJJE6LEmzWXaM2rBPzjmU5TVaPVLWqPyiyjW",
  "key9": "2QfEdsjV6sRUv62ftVRNkjTswJPCG5o6uK28Huk3NJ5Mh4WLXuYXVsRR4h8tp1YKTTNxKvFQRgEj6w44ENta8HWr",
  "key10": "5wbLMnFU6CPHwR3hfp72NTRfVtwvZdjDgtXM7c171BGJeJ7uskrCkg5zhUbJ1Wzbf6yfxsrBGGbW9QhA2V5goWSd",
  "key11": "32S8J5QSeQiq3XHa6bS9Cv8ojmvemKxFmME48GLzreR2PYkMB3D2whX2DmkpXcVud4YR8p4zmC1KTLiWepzcsFJH",
  "key12": "2juNZHK5AGZmYoVJFHrFxoeEcuQhCEB1MdVRKboEqjcMxYqSpRgiAWdp49mXWy8LxpVxEvDKvwpohCzBku6drVQS",
  "key13": "3bC9vmTtQBD8CHb9uGtawavCd15BxUe5ANsMQjwUq26d55ECxcfaFcPk78dY1C22exsk6ps2S7yxzXpy6SNBbuzi",
  "key14": "2B8FiU9SVNjwjqYa6y81dvEYCwxbCC2NhWPg6yVHDpBAv5kBzHoatY8zJLEeCrwh6Ejepf8NtTNsDx1WjbgR6ZgT",
  "key15": "5FKVExtseggNFLtrPxrz3adkoDvre8xpaarXmVKrbzwhAQz5BSSoeXDZ929t1aEzsScdZ6xbaJHKGkYTUWRgXUYR",
  "key16": "571LM1rhasaT6r7FxmKrVQSDTYeLPaC8cMNKawvcSRCbiobtRcYm2zhUuEGq5zdaWEKN9jQKK1uiYHZwAC3U78YN",
  "key17": "51MEw7dVUNMFe5gQgvVJm6cRr2x36bgYY6mq6k22DPptWqVdUuXH82R2XzX5Ch1DWn6Mcj4CfNrgABjU3cY3HF7p",
  "key18": "2K8uDUtJ7mCAgPTV7PNVe8cKcxrZ919Aoi4b8T9zT25MrokS5imvKnUpSbH5FNpqVnB9mo2ChkxJSFrxN6qMjFxb",
  "key19": "4NHswpKQhDzthwmitDbxeaZ8xYnUEYLokTcbUUZFCZD3dDFK1pstnNWfzrbqgGBYKBFcMe67ZDkNejXu2khanXHV",
  "key20": "zhJrrMECGpsiMb8CqPBGRdct8JasDrk1ZSV4jJaNjrADjpf6RxHW1MA1uWK2Dnqpy1xQCctZz3R5UNmjkBfMYK9",
  "key21": "2S2Sn6U5JmgrhhGbjGJNEG1vPEWMyHahJXaPFUfc1p9FcbAXCR7Amxd586opmyzMF1xKYHnwmTDrWyn1TvsV6izq",
  "key22": "3BQTuPzUe3evnP755GPaQw3CVYN4FGc2bpAcNiDdD4aewYfTA2PkxaaMQsf2LBt4PvLepRS8vtQmk7kqWuMMz9x1",
  "key23": "2zmjq7LYhhu5nn1ZHb3vwC3YwWQJKDEDgHqxt7bVAkN9jJU8U1sBcZstEdaKDLvvHeFaMiJyFuRZ5sVhrpGA8CXV",
  "key24": "4abba2RRDXGFoWF8M8NLnRpXGCbohCB3KQ7K7VUzAWVKX93Ah867wiAtLy5JEw98x6mGwrtZpwX6CiKw49do5nLA",
  "key25": "Lg3TLymiczCrNRMX9DhmEsnHy1f8CpGy3dUwJacdD3bahb9EBPDQHju1VrTHqmxWfZLBgBg3F5kQDGyYva8dhgp",
  "key26": "5XsZ6tW23QuKA26eg1Hy1FDr5xEzyzcbrxV7qwhrUg55huRP1Husev6K5ep8vxLAwMkHUmN6zX85cRa85S47JVqN",
  "key27": "2kWyNnWudBMhBdkFtweyNnmTcxkaRVw7CUBuSsHq3vuPnQfnfpAK6EeWPxuZ8TPSH8AecDG5sLG9hp4Jtr85ZN4e",
  "key28": "R1MLZgZ7a33gRokCzakPv2wAEofk5KMPmnM7Zb28pin7fGZuKr9tG75Ggh58k9YP7gpskRebS5epYJ3KaVHEJts",
  "key29": "5pNrKpfyeDgBaD5GxWYgB1KpThoY4BKhFEMu36SP5Ne4TyTHgLKNHEoKLRwjxZhzbCia2waFHntTD6ez9S2dA9mX",
  "key30": "3vMKobjxthqVAfaLiEFWCzuZwt1JXkVhp6UDBqD9DjWy5umZAYUzPURDxdW7KW8K5A1MLVUbPA5gBA9EiXwjisos",
  "key31": "4jGYL4ea9SG8LZdKhxdcTXnEnktymkqVLb5623C7JjBdXEWNzLWRmbLqu2yFN3zKeFShiFHZW3anpb31KcURzFSM",
  "key32": "3MeAFAmtJ3TcsQQuSXMF6TuNhkUUePDaxPcXf9bBoGWTz27BpurwDFjuEHprC7XZJduNkRU3AQFoxCQMXSqocGQ1",
  "key33": "pRupNQ5GPDcXLkxN5fUwhvrnCf3yfJgossiL4CnGr6puCHV8pNHNj4tFQAtT1ZhsEZ2EAw1V6bnXLHfX7dAKg5x",
  "key34": "2LVJ5yqrbS6XVoD7Q5sNx178LSSdCqnhCCQVkaSayMyXRN4GkUeYP333LZc4jZmcAoNYxGmxucn2fJeWRMJpyUwP",
  "key35": "4MCpzGrmyyMcNskBv7stjj9Qg2vqbik39uCEtYeVsT5k4Mn8VwZrZ4Y5GztvZ32MtDZ3XcpH7vZpvguTwcinsBEh",
  "key36": "H1oY6mi8PKGg7fr8Vi4rTCQqk5B5jVY3LuH4VduMeuw4b63vTYNFp9s9LZYfiEM2dTVHZLkF3bWAhVkqXnMVowb",
  "key37": "2H3kkZ1sgzGi9f6u96zuf3Jdqgw19ptrvCEa2fWZXXhSstFWWwU3eEMNYCsR7Ed5Zmv19Qrwu7k6Ek3UMzsiLTF7",
  "key38": "3Ah3K3jUZyvifzF4K12T1cFqkU4KPFwCLt6NuaeVwDAUE6NuxgYFqQY9u4MEn92fyuPM3UWQV5VVBwuRq6CXyecs",
  "key39": "2uZPQ5DQyYKXg4SiHQJmGzbPHRwDBRDLWZ3RUoYwHK6j1XhsbGnirEJXiZdospPiRoJB7N3RiRTMHAbdVLKQ9Tr8",
  "key40": "5wcGaEiRqiKVpreDzH9ssnSVEtmwhtR6KeKFPmZ3SgqGZdY3owc7meChYvhbatFdhjH28APxMioWw7f2qyNCaSEx",
  "key41": "3LhpALKdW9nmRT5J4ZzDQnt1PpVswMrhNFbzEpxTUSHcZvcnYjDhsXAB34HXqDyhL3y4j1sHEA2LZ1AYi2Uk2wEz",
  "key42": "BkVTu1kMXV9L4avxMkzawq6ku8C1Q1tubXSbd5ToBDsyAFeaA9dzxhmsBZKACkxWya8i7tYiDNr1JBGp2gq8dAE"
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
