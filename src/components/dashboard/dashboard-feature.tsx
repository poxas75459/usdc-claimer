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
    "3yeEDCrZyf6SeCQjwnA9cHZ8dQCZm9Hz3mKfZVifuPCKDVGxNgJhpLVJQys5u56JaMLsScfFMZ5E7Q9Lsv7VNGAd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Rj7YhaZSCFQ5ToYYjP6dVNP6HwXwdNwmJ21hwYrXeNvmTQ5q6yQ2ruDSuyXr1gEjAjP142PfamjaLhq9Wr5gN57",
  "key1": "5bD1Nfiz2ZWzGCLeMEe5q3HXtuTrLmMksyqMRtA5WpbUqV8WehkYoiA2QxxqR3cW7ikzNFnnYg5AMPAGvqDxQwAm",
  "key2": "5iEdvU1hDX3KevorUkhUrjXmdfoetoK1Rk2k8axJ6HwbeCp1cV2dyPokSKQ7aWx6zJNdqK8ifY4Rv5BKB7rkG3V8",
  "key3": "2KkAHQn9g4KATx51g1iubpqYgfAwYBB7MuhfZdHDGeJCx435mhbMT3KE3gPKaxQE88uFpLP3SZVugj9nS6aa2TxH",
  "key4": "24jyjBjnKDkvbBSWmNcz6GdAjczxSbWXyaXN25faDdXNFj1UuMF7Pxyov4nVLwahxrgzFW3kno4Ly6gZK4Lgwqws",
  "key5": "24AmLY73krcNzznhQadYrLc7YgiM3yskzMXmjGHc4XDZtGqKKWKEDXbA3U9teEwtN9MwNJjPockNM8iTocxcV4c1",
  "key6": "61Yoon9eREDRRTLob6x69kVwSxUyzMJ6MLB6GcUGsbrt12BVubBZnE1aLouBPSPSRiRmGRomCtFEPWaV38Tkd9UT",
  "key7": "4kJe3ts5C7XSDSpWGDs5Vi2ZsrUbxc5t5ZK6tWwyWcFsyBP6hLNgHnUhRpLjQuBahJHDfydNtRkVNb7FqS6REuUj",
  "key8": "5mWFVLdJTqzdH9fwtRgY14Ecv78AtwZjC8uJS3MeXzFKtj9yN9Uk1Y4NQTc8A973mBDC8zUjvvUcpaaNvgpeUN4p",
  "key9": "5uUDx1myPr8Pom4jAgabi7FeMJyGbbYrZzkth6G1TxcYL3bJuJUgzEf9t4ZizwNWgHesjSps6RDK3xZcwSRAz4xm",
  "key10": "sYi9suxnpRm1hN6He1Tyvf5ypoLyLVc3hr2agvNPQxnezyTszUKvsEW6J8VN2c6uN86m7ezb5TC4HwtCm6fwg75",
  "key11": "5ryAMjz5sHafEa8LRPzZEPQRXpUNDQWYQpEqCiUkHrFbY6sTU1kDKESqLGsQKE8afiEB8p2aGGf3xhBF1LV4RBvM",
  "key12": "4YH8qy72hwonkHdnmFuDSEmCV3vc9p1T93Y3PVY9JMHyWWujPEqRj6L56ctC3xQNfyWpLeDkEz2pTyiQ1YZkeNeJ",
  "key13": "5tHoKgtJiNzjRFFWyW6Cp4jaKzmbAUsaGPnZmp1CzSA3FToGgf4qfDbw9JFeoEApUPtWwd3HqWYgMvmkLhTL9UaV",
  "key14": "26fGVW9Dv1yYaxK6vs2xqoteGjB9jP4izVBBUwytLxgw5A1unm8wJz2N2jLPLHRWD5EMLCMXG5XUPYULoDtcjSPB",
  "key15": "KMwVBaL82uEfoVhK7LdUszrsa2knRdajXV3TJDuRd1sY6oQsFLD8tysDj8dxrdUgfHboLB7BU7bz86jxTYxP93b",
  "key16": "4XVwy9sjLxUsixLNpv5jrTHGnpNVcX3VRM2HEN2QgP8yhTQwy7JiDr4tQyeRqzdLP5dxXSr86wE2NJVj1jrRjauY",
  "key17": "21M9FauWLQ3iMduKL5s1RFVNHBRi8j7GBMd8Ct2NUB6yixuTKvXbZCapAVUWMXuaiqcjS5v3YrH9etksypjPaGaB",
  "key18": "5gbPDJTaDk3oKpLVSzcTjcEdhCow1aTNi19fLFctmxsoVXSsx44Yat5q5dakE6FoBtDNKYXBsthzbSGdfxX1t6i4",
  "key19": "2VymsJhKBcyArFgZKfjrgitTQUW6HZJc6Si48qREeWFTDSmMAo8CgFKCW9Pbg4zCRDW8j7GHtneybE5nJKWigkea",
  "key20": "4wMtrbNgjTFQXF8uThBXTDSwQ3t8wjCRkZXEmHET1Y6SaRVS4B5oHAB13TRjYmCMGEMs3V8NacuxPv4gLxm9FFP4",
  "key21": "4oyyxaBS9BEcu4bn7LhMJybwzdxuawYB8hRkBxAwCdBhzDTfRD3QPqiFzCoeEjbWKk9BHQKJ7bvozrhwnbAS5Np8",
  "key22": "4jCDKvpQRAUTzREKYjsabxwMucCTDSTJmTSe3CSsPXFCJZei6QLzGKmHZ6UfVbnQvNF2aFwWbnvVYiZfAawHDUJf",
  "key23": "3qeRJtUXxvSnWX2LgNqbYp3Uwe5AkZtFtfUbGZrLgUo79sMiYvifLEi4An3b5B2phd55SrB3b1NaVhap4ZvWCsjQ",
  "key24": "4LFewAwzL53E7pJUb4X8VKNTEbMJiMWE5rPSG9itJzjeqFUJzioLgQzAujxE55om7u2beGRztLmRAV9q9AYprcZU",
  "key25": "56G8PDUfm53wfQSgCUteQh7ebEHZXpc5LGZ3uZX53KQiG2ZpVMV7dwQFK3u1uQEqoxwdsygDJP1GEn88Fy31VAN1",
  "key26": "7Rio8HKHJyB2bCSkgwsanpkM2RsrB2wACAs5XZjfNXf5GpcwMCbbVQ16UVEHuK4K1ARUfqCScq5bwGwgMRJPqWM",
  "key27": "rKqCZRWtoG3ShXCNxxVqq3xq8eVH1W4r7Qy1yn8inFyMH7UE9VXNTBKoN442LSoD5QbiqoD8gk6vCZExEgzaDGX",
  "key28": "3NTPyQ4dJGrA4K7zeSz1L1uDGkCUVmVXnBkf3WT966DC52SUwe1MxpP7EZLTrjio17wR92LkBhqY51q8ZirJ9Rwz",
  "key29": "cUVw2Ja4Zj6DNXE4DZ8iqP3opXoYeAzD64zrg5RALRhspehFDuwSRPtJtgF1tNaRhRfyeW179fNKMqjejcx1dRa",
  "key30": "53fSVEsxQAX11VJaZSG9eoXBvNhK4wseqc7wwYWdgDjXq4RZAxP5ruXAaBbJzYQLYSmBXuGb2Dazt4DT4agKB6yB"
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
