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
    "rRo7J6KxfvtehtrAt2vQdhVTVNRWAYYZH5uNFL4ELTMCFixx7SzxVxD7tRjhmd7ShpRQfPekZemE1KkaSzPXqtR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jELQvdt5iSv9mLdXrUFYW721VqweuTvoL4VPp3XmTonEQduGp384yXkCy8SBhQP8db6Rahh3zEetYEHTpsaF2Ps",
  "key1": "SpRxtNfueeZxsXaD73aB9baB4Nj4E47dJXChumRbWWe4E938kbQJzH6HWH8jhfUy6agCP25ut6WCdNd6WAVsena",
  "key2": "dxyZP9w2VsrpeJViUTMij7dHtHS6UcKbo6AvfDyNL1T1M2uxD3JZ4HR8HS1T6zzNE26v2nC2cwLXg9EzCCpeS1K",
  "key3": "3wF6VFo7QpXrkiNbyrGujvycT5BV69WKzhnPwZoLLX9oLHU7oQSJ6Ffo6YC5ccjox1fMaJDkA89HJRhzYQyhTor8",
  "key4": "3E9VYipHjkDrYFav2W8WrN5vo1fScErASbW2bkLc17tTG3X4duSifTv2EW9pWPBD8xK35AwD2KhYRp59VGr8Qj5Z",
  "key5": "3zQgGeGHumhJXq3GXfGswnrN7aQt36oVazAAb4TedgBU5K8bjy4zEBrMfNDqvBf3MfwTWnV3JADLRAdafHqnQoer",
  "key6": "2WPfmDLwLBdpPGe8GjpsFPBhu1PTptErTwESMrwTg5SMDDq5ArtnSFGgTH3xuA8WCr5botTxvK5252uaxjww6nDX",
  "key7": "3eQLauF5oSNKGJUgTpR5AxasB681tH8UdyywSv6XGJedgfdtLPYxCSQ3vg4dEZWHCByB1xKyNCTkJiemM6ByqcNq",
  "key8": "3AaCDWiM2H5719n9a3cMA8Xtz3xajdpW3ZgB3gGAYNvoCQsARXxRk8iXggkETzF57LexHbi2hJmEVRf5GSrkHY76",
  "key9": "2FpAfEzT76uTbUB42X9aMJ1ewD9Lnx2s1MNh9c1T47anWJS8jLBx9Lg6tbNW9ZExv3gnUcZVxAGES5AVQqZhfHCs",
  "key10": "nMRrKnGa6zx1ExyiNH91DYN18AkvGqgkRFbdKXX6PpaXh5dd1HkXZqUEbjgUaLz4aqrNPKJoWPHNzkzD6rJHF7y",
  "key11": "1xj27sCDNerbhb1eEFFvabkHUwsQVHSxRhqDbYfkhQX2WTrx1TMkf8kFmWdJNPrAyMbYjE9kdNb4xWSurjTksST",
  "key12": "4USVt8HufVgGSNWavpFRfs8nedWHgJDVjXu4Yg1Bb53ANatH34E2sVuhGFyBXYsR6ucPiVSqCnW1uvTewPEQUFYm",
  "key13": "eYrdf2Lna1QiEiJ3zsAoJeNG5bAPrZczRsaWrV4ZotXLwrQUKb5Q7YXhLXPJjBDajSzmGCmJTSgarxC4HiDAbq4",
  "key14": "3h8BL4Xch2atem7LgwaawMCpxnSny6GvyQ4otrGUzAhdVPcibsTBgMRRKNYcRqfaMdKpWG2GXdrujbSwSuLcZjpd",
  "key15": "5LMK5Krkurv9T2FpAy4sxYDrgWPSmbyCr4TirKukCZFXwDyE6nuTPYJxTvi4KZbiK8EPBuDtMyR7RxeM5JcPMHKX",
  "key16": "oPpga9iNtbAhRmjM6k8yCg7dGEiXmASeJHbQahzrwvkPC5Gw3hadtEMKLKt1fXicmpQEn2PZNTqghGD3ucpKpy8",
  "key17": "3jv2WP7zfcq3B1Gam1hCwVSPyJcwkNPi3ZvCv28uxSdpmH9mti8PBVLdq2w26V3DuzKpJk7KB3VMXaAJxCUmwc2G",
  "key18": "2SRi3DF57oHMyD9tkKTpa2aPT9fAcU7aqcdsC5d2obW1NXkoGgAMyPGF292zA7iY7N4tv2C6dSeAv7Hnva54yF1x",
  "key19": "22CfUAnFUoZG4VDfm6tzdCUv8JpigmrhWt6FfwRWBEV3pfRNJbxAu1WhtAH3mj9zAbxaVXWtdZxAWTR7oWU2hkFh",
  "key20": "HHcq5c7m8E6kfLZ5171RsPgaMFV9gusv4gCQzUqD1bPUMt5c4xUxYDyyCYWcavcuRQVtDV4prbovwFiKrkxP6qq",
  "key21": "3VJz6QYY8DWYMv2jfVsYuEi6AD7ecg4YJdZiNpjwAGDc7KTbXi7k5eCGxiqLi9Fs2D6wr3x3zE6Fe633AnZJCNoH",
  "key22": "2n3UPkCHARR6DdsJZQBp5W6REDe24BBuk4ZtUVWechcnboW4DrFhGC83vE7hK42rvXjBPNJ78VDFkkcfM1Dmk8Ln",
  "key23": "GRsFx51yw9kucr5fpMbXH9LTAbjBdvzVgmLkmUfShRBswpBUkphfVN3FEPUL2JDUj1VayuCd6qoihaFA74Vg2RK",
  "key24": "2GWHZ5m5NXr8R9KqPWaCQvxJpeaBeMWUnfDRfFqLV6mJ3LkMGXUnyvrCdC4Jnq6LL6GbA8fWtWMyevzLZscvZoh",
  "key25": "LnK5MgAJB82sEqGef4ggM4MSS2PFSYJcs5TAGQoXqf6Yxx4P2AAHrQkucAxLoYJnxNZ3trC8E17jaMgzyBraPLJ",
  "key26": "a34sa96ZmMYEiYaaYAWRWSvUBK7KZ6ffUsgMD2PaggKYFchSgiLgFYE8hQwWYxHxYv1FGggrwyDvE8kQEuetB9u",
  "key27": "3bDJ6Hfa8GFXAKvMbaHYse1g4H8n8EPueW2LThggzUXSvSwZYX3r8yK5FtwrwYkoV1dpK77ne2RqK1RiNB4gKYR",
  "key28": "5UBsqaiwfS1jvu8YCGLcGB65LzidwkCvLnKxaxBeEyBDMUADqfm1RUGoJ6GSyZEGWhNTypxJN7ES5uesW7Tdkxhv",
  "key29": "247ZBuPzEAa9xZwNy3vASKX3VQx2ESYLagFP7MGzNUosf8ukvu7AGMDLNSUQ7py4j7sudeXcUMJvTBTxHnEdBuKo",
  "key30": "e6x68Tbh5GxS9d8c7WMhwHVmx3EuCbWXgvrU7AP8QmNjFATNgG4bky1sh2zTaXL4Qiedf7L9Ma47oFfbUybXPA1",
  "key31": "5hbkNKuSwwwd9hCJ9MxE9C44a4sYUuVxvLbJ9aouCxHRFp6vTZibBExpiNY49PYNs9i2d53ppfrHKouuQnQLdmER",
  "key32": "WURtRSEiVTuqvRXyTV2YkVvA81B51do7kPuf4kPfMFmHZWJ25hEnFbSf18fEmMTiCo5PQ76gEVXehNhjdK5aJaa",
  "key33": "dv7atxQYFsyjoU8HC47PaqnEesavnUhEScsNf9a9LdB3M1Zp2oMLdi6bd1WTSTBEJgFm2dKe3qanXeiZ186mbuS",
  "key34": "4N5kPh8ARmed5RrFHYQyz2sHvkZeNT7UMJ1Sktu3TohHzeA3o8NrKCRAG9KdZkaNV5bPDhiNDa3sGCwtsbgGkmWz",
  "key35": "2PGhn8xnYj8rdHUSvNARcRd4dx7BK1kDP3rZ7wGau6bt1aRAKgwwCeXAi5RhTxnX7fJpnRnh1h9Et5cJRmvuZCVD",
  "key36": "2xWYRtDfQxfAtYCTh7XYUBnDZVZA11DioDPGZsEc6HkvtxM1twyqY9aAFt8fEDfVuYAVm9anMV7g7fAgw1Y3xwC6",
  "key37": "1219QJXWGkbzgfpycL4LQgExfHJva6A24b3ns9ZV8D5E1ZPfUpYagK5QfwKJfATJ1qqBeqiVbSjHtXKJX2kCBWw5",
  "key38": "irFjN9LXhqJgvMAqNZTTKCkUGreW73A7bFeMZqNZVuhiwyg8mxwJmf8vzXKeNeRrYmb8RwRfa1GDNx9xfqCFdoG",
  "key39": "3BqPht9cVznhk1R65nXy74PPJqsyvj4EmCLzVD47VmHvBMFSQFeQ6yTcVaxjmm6pHjoDpKEN7x2W3U6KskAiVT1d",
  "key40": "5pbUCHpeKmj1GXsmA68NQEZdN5Dt6qAxcznYCMQ3a28x6oaF4bsebkdoXLKnrcywVJxXEwJtUqnKoBHweRD8kvn6",
  "key41": "5n4qxfF7kmA6SZGmVZHv8Gnn5dCHiLyKGtB33y3dbNcpkU4LSZQ4uqJDxyo2AVC3X9NHhtrU9NNJnDjMXRZnMGEo",
  "key42": "5qS3S9Hcsadfz85YRBxEye3gDVzNNni9f2L4DorJoeGVhiedvAXW4zB6AetMoZ9u1krscZnffjn3e5Eqwn1yhgN6",
  "key43": "3gDPLeZtiawx2ASm5ywTBEf7ktL8cjFoVCekYFj49QAw6FuJ3Qi5LsDoJ8CPsGSoCHns9ydpCS9PCEGASjqTaLmF",
  "key44": "51YRSca9jUf1yTd5TWGCAhmWMLXqW7KhHxL3yRg6av2S2W3Mx7LNbLJHi1KqfKzRfRNrT99bHHuEQaq5oWitXWCw"
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
