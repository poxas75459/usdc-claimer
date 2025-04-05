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
    "3ccZBwMEqxmYrYuCauDhHfCFqYNaRf7GF2zXBtKe5Fyom1UEh1eq9rnzWkwn5YcgosKVRNmdSnmzHZn8FHEaQMtY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Nrpz5cn9jJnJfgyiNmXmNWgXU8pqnwWVuzSug4tmw8Uo5y2JwnhbMRbsnyWJfYYHWoeFXdu1N6z76oBYALAfYzg",
  "key1": "67FgVwhXxBSW42a5kwEVnnq8SMALHyWem8Wi462KyHzJkKVWR2JcXrkXA5kR4jMbKdiaWeJV7PUSTHRgAUuxjoHV",
  "key2": "mdf6N5FgA2EaD3wMTVemENuJoagkmdcV3pBdLvyZynwHHDBzqUewVbA4Mc7Z92AJcCNyaNKvKA4ntTnstQFofnY",
  "key3": "5zWtyvNjpypuqg934RDiyJo1Em3mNeB7LM8qP6TzWePqKSTjmBTiEPEyMnMb9hvGXPDDR4HkQgXFncD2XzP2nKy1",
  "key4": "2854o79fCxHBKsYZp2JfWyTaYsYmUG9v85V8nDPx8vhUFxVDf2mbt5e2ybwKyXKdkrZvkKg88JTsD79CZ2SHKiZm",
  "key5": "67RYk3Yv1YGXL3fKPF6qSPjTsvbtfZ9RWLi1pC7ct28GgctKnHYgu4RE5ku5RRLn31JWqXnRXEvya4GdDx7pQYfM",
  "key6": "NJUtfpS7FconMzdsmU3YnpyGmiVU2U7E5cqNKPjCWKwNtmPbrfCpSdZS9wMcabAo5kx8xowxsVMaLZJoX9w3mDb",
  "key7": "5CHioWM9Tq1dtkNtShNsfVDPDgLtThUASyMBHB47Q2SAhrSUTG3xNpgQJ8oeNZNzN1fGtPdvWJgHSSzG222596ja",
  "key8": "5wXu86hKTMNCUbwpgQ6WyufNAV5ZXH5y95iw3Ewgb8VRMm7pqpdBk8RrazkQtz29rSmQmzHmdbWwXs8nuByWH4Cm",
  "key9": "5yRw62nejG7PKVVNysP7n4WLcec2wyLFtBQCN6kNaVx4gFLPVDZ8Ewv3GoiEUo2NgUzmEqEiWxuCYTu8PoT56CWe",
  "key10": "2LFr7oZNmxRmSp6EVdRa2N6jKpK7G4EsRzHi6ZpYVYLX5AdH1Raxj1P1dRcDkdLkPDScffE5zzDH7kH85ZrZEcvj",
  "key11": "5rckrAdHGCYZVapEHuPJatm8CHo1WVZdpztXa4zMcJSvz4kJxpWypKRozZUnjHAHytf2y88GQ8ksi86Nv8JVuJbq",
  "key12": "6qeGAK5iq95KJQ4Zb71XtXLKFCPQab8SF2pn5miK5q9KuZsCE1vN7Mkr4dyP4XaiHhavBsfD1qG5K31xuhTVWiB",
  "key13": "5J8kr5bnbxYKNMajSuFhc2vYqgokmaeWzDnwwATnsqtvarfasiBAmf2WUzG4nWj3NspMYaXMdpCCcvd5tnQfRerT",
  "key14": "5MSH6P86oW72Bejk92mMoTPwYZn9RUkqar1f9WCj3kdNXk6vp538WgfLVxJVqD3EnkzL2tkeXa5Qa4gaJwF121QL",
  "key15": "4F179wdnwAbiTAtNXyH1YY4EChGDeZ1FF4fNkgEUeGC46cgZ8BAB6eJc9KYF4azMqCGuXu7sfkfu8kDWTYbnVUFz",
  "key16": "H35gHfZPnnSuZth4ywRbGPcUgwnLHhHCa1EAK5ceawGuonef8VR5KFK9ETMNeNXHm5AfD6LFUDYyNAGP2ZyvWEB",
  "key17": "5yvBF2nJPab3NrkNrBKgrM5611oboUi6wJMMjjAHmzWZg6G2nume3SLPkXYRvP5BpiA4J1ep9j86iZqMVMoLe8rg",
  "key18": "vSgSfr6K9wivrkXiWfYHnQv22ZpXKwzScrL5HPAvz9h8TFkgtJhzmXWrXqnWczLDsT5kxUt7zpH4bh1G3WKMofi",
  "key19": "2uQLzmiWF4nttXmUHBxu4BrJ4VV5jeEyPDELZvBYbr1q7BhTm2tuhWzr8vLodARBB9VgswG34rh72BmzBYcNvuv8",
  "key20": "4cUfaGZzG6UAetrmcRvHNGLJti4J1vqHkAvyDtJKvT5kWo9b8z9rMuaJJDwMuN5i4VnZNtnhi8v1JExuVgiKYhoy",
  "key21": "24TSj8NCzM3ciVa3sEqJczJBreWeRSNKMFr75rZvAx5xzL7rEQvNSL3fNWwnYswDnHbFdT3bGNf7TA4EkaNmm43L",
  "key22": "2nE8vqJjsVXe65U8wAtQojLV8CV99c1b4fD9ryVb6vZGSc2xF1VjvuXf7Njm8Hf7MoQUTGTDDT5ayEPB7gvQcb2R",
  "key23": "2SoeMp34sa6FLFbrW8xqYJdGy5FVU6TF6b2dHC9FPJ6EVW4sGdDwTN1jJzRC7DwG9SFPtgZ1GZ6pY6sXiRdVJqio",
  "key24": "4HNLvmCM6KoWrsrBfP5VG7MXA3kroRbFEmkxcuRxrRoWtoXhjbNPzZSb6UKSgF21Ao7ygT6oueycrvJZBgMMt5Ay",
  "key25": "64iadkJzzpPGzZKNaJ2kr4gtF9E9Yq9Q6VK1sMoEvPvqHEfkATkZK1sTtAvwfd34g2pYFoQYQoe1ndQuKbGHgPyz",
  "key26": "5cQYMzHTixEf6cigHsZpfUT1Yhr7LF6cgpkWkMF8Hb5CTtGavdtHgWCfGG2N5pwT1E72cP3EaLyJnD4vBPR6bZuX",
  "key27": "3xgMu4uLXnB5QXpjFYUfYN26Zd3j64mcUVpAubpRDovzKCVN4KSwhC3iYzNP13kaGyYUjhE3qXUG6Efn5kmzxuzQ",
  "key28": "4ZTmu83JnFdB2eH2FnJCgoRQQa3CZRDtw9soYCf7A1cKk1SkK8S1aDsFqnac6A9P4PXzKse9R4sMod1RpTEjy7yk",
  "key29": "2VeWT8SmWtsCudE2oFZBZq5Qt7jnoN9YsqCdbXEs8eq9AY9kqhLBhKRf6phMyBBNCjGmxVMdcJtexBehKupFE8R6",
  "key30": "4rZFUSfQWLzzp7GJjoABsVo7q8AKeptCHb9iAZEsWxZ3YzVdriemyegwHbnsteUEmfpAoQFT8F8B4Hs2AVnoMyoU",
  "key31": "5GbtRqPh1pJdrzMzi8zgRqHeinKjkKkpDJHkjCF9KZdGwS623wokMAJGzn8gViLuUyZvs7yysP1y8J95hWfHrWWV",
  "key32": "4BRWtPRtFNzcixfJxepm5UeHrTzree7wDcyjbdEzj8iyfJ5MqeGi6vKxnmhMfNUxgqoNsWLuiTTscHPNn7XZphPm",
  "key33": "3tWkhNDctXbyiM9onMCsASPDrZ6iksbAQ99bEEGjH7iVDtXnNCwUYBNdCaTmqgifHzpC6Hj4qFuzZs358U4cthug",
  "key34": "2PHMT98fANYcizyFNJDsr1VnG2kKR21EHwPnhhXfehS2uFfm1WDVgAXqgwF9cLz2MJ3oYuYvQvyYgQSf9QTivpdH",
  "key35": "36k3hfkrYBj1nytRzLS83U6hX14cfK4ZiRXZ4w3rz5qgXXQvLKyMCanVSpCBcwL4HvDvfZDBUcti4TLXkDJ2Jsj9",
  "key36": "2umTAyNyqVhxbiB1TYKqssnzoQXs9eurKr9JcPAwqDkPvTVq2nBchyPqFFdaEHfZWGp7s3EHsDurCfBpLkgmiHmQ",
  "key37": "4Bvkf8Wj322DTknWtdofgDNM8ddSo5rs2JJJoNWZR8ayzrXaGGjajEFNPUWkYw2dy1aU3Ln5bg9PTkNeF1KGCvQD",
  "key38": "3E4GLvpri3yWUQmyGvX8JPmi3GY7kJYqMaWRY3Y9Lz7P8w6822rVaAjVycJDc1DwGzQQdaPBbi9CnhHiNe2RNBRr",
  "key39": "4kWy3g8ZYScZrFyayRE8haZQYJv4xLqhQXDapVPXWEuxfKeVd6CaGXQ8hiJ597rq8vAtmVAMbeTHhvG6ztc1u723",
  "key40": "wrYn8zuEcZTDEfP3eqkKsYi5XuhskdkCdZZvbfD12DmAWQVi6hheVPusWc7DM3ZbtNWBz8PzUkWvxqDcTGJrciC",
  "key41": "3YDm7Z8cdHkk8zQZmhVgaYALe7i4iA9WNNDrsNStQfKTr8bmaYna6HN3o66AQiFC4W4fu8v9yWisnBWjxhgirn2h",
  "key42": "5KokRaytry4qVfG68FpqAhSfdDRbmMhJbqk86Qfx1VYeG5e1zoWr8VXJDGnJSkTJoKNQSfnhTvwPyahZU756h4jY",
  "key43": "35GrEtAeUMHMhVHDvNNkgnehPP2fgx4TpEB3ez4L2u8C4NuXLsJdsiYHwDiDsJT2enwhPybkK9oCYSKzpuYMyCgy"
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
