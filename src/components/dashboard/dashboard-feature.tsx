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
    "3SPkXzBVBRTYQqc2Euf3VpSZA1PCo2bg413i59JkHFYqw4TQVwiu35rLR2Bxh3n8quoRh6ntKEZDBoYfZu8vdr8W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "czLxSokUSg1EnU2i6W4As41C3kgpdyrKhjLq3mfk1uGMaR8BV9nq3AUx9ZvSESpLBkMCAzqhoKh5fHYoPeMwYV4",
  "key1": "4yeTBb69QBsQXaiqGGSnBsH498NDE5sCjPuyyDUz7sr2rKzPYHhSkRy6sucR6eZj3VwHiNmPy73PB5oNvvFxHspk",
  "key2": "4S44Wdq1Bz6eyksEaziQJRH3xB7QNrXM2vWqc7bNDJK1nkbqKzH6iPfgaW7eL6CxuFKUBdmJSmny4oJsBcP7FQXC",
  "key3": "67VV44EKzJGts4QxaBcV43EXvcb6Cv9w3zGNkDfHTVwGJRfoQAQTKiqsnKLXfsQ41f9TppnYiQVahfZHm4BA5H29",
  "key4": "27waS9uzjMAvTBqJ7Q48ntLoQk2qFKbYYvjBqMBUubhJ1V2SvwpgnNyPvo4P8LNsMxdbjGq1CcjAvx1HvkmxWRoh",
  "key5": "2hxvW2vaYCgYofkct96DXd9Tr7WQA9egK5wFFcFzpp2u4zNX8gQNSq1i4m1XD5E1qF352rmvNoZbFdVFhzNXBDf4",
  "key6": "3GUanCmJdZhSDgLZMpyLH4RzxPGfJ4Wo6HMPXD3PXN1X7mdBUen9SQ3UtFY6FqrweGcdZ8pCKCq1msM69Eh3SXzy",
  "key7": "3XJoRwQ8WwzhxKjtjdrHTSPWgEALoUzp4qsFULz9TosiNumfuY9ZRY6SAjPQUarvk3TQivBWzT74GggY6oUq9jYS",
  "key8": "4PPhGsekmJdV8khseTVkvXSytvZtFkCmygZ7KAT1BwvuGuPZACtjNuhqZ7VLbSYHqdrVCRRsnpQgWdMo1GdzB97g",
  "key9": "5Cidf3f5oWRTrypEU7qG6F3cef6uQ7FbK2K5w7EiZhGDz6LMDKBT4Bagr3H8qvhfWdD7Tz1ZkyGSaza6x8hnu4RN",
  "key10": "csHe3Gqqbu4uGToictosbkrm11RaG4WCrsV3JMQKYAnYgArSpEyigywo6Pt6nCxnJiNhKjDtKRZWz69c4x8CYau",
  "key11": "5ZYc1SH6T88Cpu6btWFFok85kmZkYb9bKXAwedVDjn2qui1vgGkzaMuNzpBwQMvBsEcddEdhdK1oAyGmRWHtdn9z",
  "key12": "t2hQ2LwruxFxLkPPrM3gs5VqaeQ6p1arFekRTqUyXZQ2n9HdQZBA6ygKPwtBgw9Tm8oMjToyyQ1NvTHi5ZW2MV4",
  "key13": "3CaYFc78BntL1PXGukDb4MQ2ZJb3ohiSP5QFot7xsJKi5fQS8RB6xQQD3Q4PBhWb4LVTpCLedCwYzzJC1ctrQGcF",
  "key14": "3GGHEdnNZbu8c7YjFFiihhrPtMvzkrDD2dL2ot5gA45kf4Vew2gqZHGYsGEFcRDXCiUo6ahpb7Mg8oqsM1K2qWk5",
  "key15": "42PhrRFki8A9ysBed4E3bSTca9YsRkp3R9A4jYed87b7ZvTmc5hqZ4rY8nqTS8Yzv5VArrszif3ZryEwVDkSp8Ro",
  "key16": "2U8Yzz6FGfGL6VdC6C9MHwAaGNe86YAJdFYSH1nR47YwfuYwXgijCa9u1nAx9wpny2cPpDY4RrPHguBDrVUuYPSJ",
  "key17": "28JGLU2Dwx4NvfwZ7gEKYwQ24bAUR2uejsFEm2nR8wnizcqZnkcqwDoaKLvPywoTaFWQPfjNTyeADGHYffJ1XncX",
  "key18": "3K9jyr3zvG6BKL4rvS3CdKj6m3t7nfHMtmD4DU3YtucMpqyFQr3Z8fnje8sGwHDgk4kdes9YNkf6Ke1MRjGr2uL9",
  "key19": "rp2waDx9hXpBVBj9tEsYzerNcqi1NieCX94oWcV1Xm7JXN8Pvke1d3xMoXhq4Aij32CrqK2sUz6ytpzh4iss2Lj",
  "key20": "n4amsayYHHQ2jpHBtzkA5H6ezYEsVhjhdNce9gMQ1LXa8jJMjYs8XhcBnFa8YxSe8GgATBBQ2HaBHLmMhRxr3Hw",
  "key21": "2G7fZA4GBmHqePbXkFJ4dgdK7MnCjDKXtx7swrGzNGg4kyvALwPnaVbpFxdv8gykeTMMD9QdTVNnkrDt8d6Q54w9",
  "key22": "3oM4CbQabhabfCk4WShFyK7wETdFnx5bSqQY9MX1yx8CZeao3iGN6zY4uxbgv4gLCUAenJGSgKvJWXpvpKjUK2Bs",
  "key23": "3vgXxN4JiMszaemF7TTxscgjXZuQ2WPMch5ztLihGrTtqW8jKPU2HCj4RCGFf7XNj8SDXDtnPeva8shjqBzoZDTv",
  "key24": "44NgSoQaT6MVEM2KLKJXuW7cLG5BE6hqXLbraSc7gwCuiaLC2RajY7pBbhDXtPMJLA4Q43ibowvtDVGEaomzuHzH",
  "key25": "4bLpyatNRnWiFSvBNZygbiVRccvYV9FdHWEPYvoAkEjaw4UJqhECqyUVzP718pqUhVh73JfgMDZrm8FQ53V27J3h",
  "key26": "36DQdAB9JcFRoY1im5Tr9rS1N1AMnMq2rjrKkWzfFMmHgvVAxEDiTBo75DVvyry9pHw2Sxxafp5ynbsDHJsSJD1C",
  "key27": "doeuufejoPkGjuxgFwX2nueyv63n9xcNKK3CrfmyDPX5MQ3mZHcL44DuDQ6hNJkZUqkRSWG4i1iFXhoWP4ttM2i",
  "key28": "t1DKt67fcPGkWcjxUprASTDDWCySBRPw7jYdXyNMTQ8ogTQq9LGzAFvFaJUig4XCUdYQdqK11SpriyatTp9zcHk",
  "key29": "3GJAK4uyo7SaZAWUVH4NRTLnPQaQgzPwNsystRQe1W7HR7xLKCUAfLEF155sDdMrnhChvHGZ22zN8fkmyBDCmMqx",
  "key30": "a9zV5UJ5UhKtcbJsoRARpLAm5YutuFngocujLH3CpmCztsGj6eqApZyTv7hQ53JpbbXT9Mfa9aNhNG8811o1iZM",
  "key31": "5wtFdkqQfm2FM6VLSnjD8xq9mvvYTMveMZcoWp3PmjEAoCEzhNwZ2kpZZhajL5DzePgZnhQCKaRZHtiAGo2tdVtm",
  "key32": "4HaMapYuF4KdE6st6NCTtbB4ggz5XwjheW4q7Q7VY4vK9cMXU8DZcPJwGP3ZABFhphLoGcuG5pgi6QByxT6rHcsZ",
  "key33": "4yPzBi5UZ6Rdrg7BtnG7LXHVpJKkYfhgELS4Jk9ZskAz7Ke2q9HKtfvMs1ZuUuyMaXqgchHkeKU62eZQx2LX3AVp",
  "key34": "5EJ6n767ZxTTeJUgGuLpFQZ5RyaLWA2moig23Z9FEzmqmKSvwBfJonmucx3nnBUwi2beYVzfmBEDXP2aueEnH2bY",
  "key35": "48JWVRr43S4VGT9cr3ZfFVGQVxBsGTjmiDs2WW2rrm4XgEKGq1G6EbLmX6gHDFPiYzYd2gJLezSyn6Tf9RXCNd5d",
  "key36": "5xWpSpkTKPWXHQxqJjUpVCqtbt28YSRc6kPPkxsG3idsAWkrPBW5kvM6mnwS4663zYxYda5LwvuGyzSzdDHkjvnb",
  "key37": "gKHVaGNKYmaqTueLPue6h5MvRFRaWYMZSNWrsThuKuHThrDQd3sXGP6L4S9AzpkaxGnxGVmBTQzwLdrfgFCqpEd",
  "key38": "2QDUgkJWgy7MgjNkuuNkxgWKjHyVPpN5vFEbvRaUAgRxvmAeiiL3CRetixSBDcWUreFVxVrAoxdaaSnRB6hz5bX9",
  "key39": "b9oyEPo1fdqByZPQWxkLZ92gPSngBjP3bvYT7durABxCCGzubfjiXN1i4cTppBE1WX69RdUpiDXfsG7SPmPsZM6"
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
