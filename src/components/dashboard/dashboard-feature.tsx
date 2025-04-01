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
    "3ggsLjzSk9xuNWrere2bzzkammNFGjdA3NaNyt1FzzCFVpeDaJfCbheWFPLTJRi6oyoxSwuVZQfGapTwUgUZNicY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28wiN95KbNPiptq5MZvWfSroMW8rMKPzLmnVC8L79NgLLWzjB5YXSyCk3oAxh1XtgLRaJrfos5ojhiwj5L2aZaTV",
  "key1": "sr4odmh7aX2C5g3E5iNic5f2yiAxaRGvu9f2ZQwjGQgqvRLHXNyYpfouo2oxKNgYnEMUVJg5oe7WQgzv2FoXPSP",
  "key2": "2ogm6KKT47qjksrWNTeqP4UcNXKtr4MhfhQzYF2BL7ZavJiJ1V5zLcgBoCmt17CY4ANhvKZLA38dWwht6MaqKndn",
  "key3": "2HZZbkp1FcYj5LTqyK4vbd2GsoDvUjJBUSitWapiuCXo9tqYEF3VVmfsKZ3rRvtDh6ZiyzaMxdy5D24WWRwT2qhd",
  "key4": "21xT7EoEe2bgjKaCCEizE5AV19HMtLsnMk5h28dF1jECMsvTYvvAEziANCs6zSUkoLcTKhQaj2sE3q73rmYhe6S1",
  "key5": "2XCvZFweEWVgsbP6pQ6DujpuPZpRr3ocVh4t2Kfy8jqyHLK6mxxiyb3tFjfw7YdzfTi5PoEn4AXEp1sEn4kii6yu",
  "key6": "2GrncsaX8m3hwDHgbwTF5HiwYWpWN3mNE1WJom3xh3zf66t5tuCfaRCWHCoVF8S3oVtLNkngCQnnAb79x3z6upQt",
  "key7": "4AjVmxKvubMqzCynFWymtQUDBVyb1cTySxgkmPzmtpAygsYJojv6UCRiq8eDDYvMpXoUjsxoVikKjLH6CNeTvrov",
  "key8": "CWFzH4X1nEKVB2hWyMyxejX3iaxaTmj1HPT5wmJnDMkdFH6ULBrQ8LH5nTk5Jf5Jw8PUoQDEEpVH1YLR9y6GZJm",
  "key9": "WGAwKvyJkdBPiXh85SnCm3DQtmkfsQXm8eLFNgd1RuNVT67qvQdkA8AGhyU7P9AB7NJzTeF6hd4ejwr36Pc7FRr",
  "key10": "5kkiiELA1vsxRSZLTMDdUT5XKpJBvgMaAJQyFr8GvaaTLLoCk3S7V1PFfME2bJxNni3Z9MYu3UfSGUqkgY2wUBMN",
  "key11": "pZB7ATHXuXNsBZBAAkBvbwUxzXH9CBZe2ofUEsAja7jiTa6ksskAtPfCfC7d4w9qqKUbiuojdofHvS2Wr2ymwtQ",
  "key12": "3irrB6zC7jmkT2qtHeK91S5QsjnVZUN1NKGmBxHwBTd7JcXms8uzgDjgmrtruKyfGNj55NpNcC8A8oyxNGbBGyn8",
  "key13": "5sQ3kEPhk5UAEByRk137jHA6YjeAL7LUoeqsJUBz9rzWMgMgeX4e71DCeu1o7ASu8yErnDJ67DtQZR7NBKK9gk8W",
  "key14": "5AYnsXdvLR5vjx3xDutN8BPRQv8Fkwx1rhjJg5Hw22HUnTXHQvv1czsjFVdwZd3bu8hidgDRhdP3MKK8rTvdrzrN",
  "key15": "3UjJdhGcDHdPbyzJAEqg5gmEBTPcpY6Qubi4g5JRwQHWfovsRYndJs99vc8W7cAdoMXVG8inwiErHXXS9BbR4wVw",
  "key16": "4wi29V46dCQ6PiXfTc1MfMvpGbJUDJTMe2YPvQ9BzynBQHH8fnM3buP4uKuMM6t616W8hHM9YtCDqWkUHqwo8kdD",
  "key17": "2HBn6sQ8aaNJStZvD7WUf5D3njADhphHQMTKkE4C3WcjRFKFBXbsrCQWkWMRHevjczQAcToEPN42xF6NPL5otEBk",
  "key18": "3Sqp8JfHAMbSAHCUiJUhG7Xs16VS7qazdMWZc9voj86SWoAAAfaMsJZPuGs2aefATJbmA3NyhiPuC6zLLgLyiBjA",
  "key19": "3565t4dfKhVpeXboUSDYvT4dGESrugwPT2tjCMrgEWJ55Q3MxN7owSfibs8Gk4bG86Ymt2P9ZjrF9SicsDvTH5cN",
  "key20": "3p6fhp3d3898N5vQAy5UrZdDybCFR6eWqSHzZwgicWnRTcQ3h5PbmER7dEgXbuQKUYBRMm1xQeWRdamQDxXaThJc",
  "key21": "2j5hMfq72kyBJJCUYZvpjbFHGGiDnatSo2LEy8nsnnNiWw4mj1yfscfUa4K1gZnDFmZ31CNDMZ5XVNhoKwCZ4cT7",
  "key22": "3rfZDFHU4o47KGrRwZLgZJc7UYaVGScdaMScxVtPNXk7EuTBZLBYw69vHEt2o4KKDZaSDHxmBeE4Ffw3ZaHXznod",
  "key23": "4nxK3JmsoRDGBTMNtxCvJorS62Xe3VDvj5qRa9XVvSX7xVeUQzrtynGs4bNsKxH5XjG7MrvD8vsncA14Lsn68T9p",
  "key24": "XfrAZVMUDNf5xx62b5zvm2i61qWP8BaTrRMKM3f2QSjJrzmhJf8KZBWxMct4t4o89eJkLPTPPzJySKPSGrCk8rL",
  "key25": "4GKn6rhqQftaW5E9gMrPoWNcYydysRdhLjXydYRxRxL8JE7r64fQKfmhJwyLdvpEXtUxncdSUubVt8jTraJNrrfg",
  "key26": "5BroWGyA2Hh5hLu7gtLby4TAPaGzYu2QbadswgWtSQfHWoxDXhLZk2sZey8QPDLxGasAEUWxC6PbL6wccv6L7kFW",
  "key27": "4JvonSSSJucYFeLHKciCmxcgGNK55n3KZjRMCX5Xu88jn6qFYWGSzeKF146tVE8VESNSq8P2pvnXGJFUXVC7ZXbb",
  "key28": "3HGo43eeNfintaAWDcAg1M1CzHFvsPxFUxfHSDrZQt5vCu6QSbHfevis9ezcBWP3aV3pginAMJj69rdrNGnJm3Q3",
  "key29": "31oUDSAQFYFG6Tf3HA41D3Q7G8w6EwFCHv2QNQSTQeUUWaYTDJpNeDHx3Qk7AtzFKXg47Wohbjprq4TA4W57DDiS",
  "key30": "4C1e61ckt8FZoUvphNqaKNcG6qXgtsGj3UnA8GqB8Ti6c27nEY5xEpuH6D2P3Wgf6n2QWqraXEMavXmQUD4thQ2T",
  "key31": "23tMJoQox99884fgHRUd4dndULAPqLsEWf9nETSRWdeGdtMTa3JiZFfpJVzyGh48oyGBESx5MPrJ7XKMAoYBwzeR",
  "key32": "2JzdYCp9KiPmYQaCEadrUZ6WEHHWLzkcPNCcw94Ke8JAGygGAhRHEnauJeUHf31kBo57FxZoSDxmUZ4DSCo6GNhE",
  "key33": "22doKi7DgvMP9Qgw2874GxKgduLCmZ6rWk65xv9Y4FKyDV9KB4ubBhev22iNGsCUhiprP43qLTSUJyasJdFkKUWs",
  "key34": "5x3JFE8ViCvPBnewwgkWL37r7qQNjGpq6sqqAJXpZMWYJc7FoTWyf1owPTKGKXSGMAWet6YEC1F9KQL5r1wZ2mRr",
  "key35": "4Xu6aLPrtA3UqcszvCjtVLqocCDyxttTFDyWo2AH2gNM5BZudra9SHxned9udqzgZrLHzq74q34nSFb73w5LNKDb",
  "key36": "5Acq9RrMqkzXpiA5DZ8rrSkVqsbN7ghKm5seCewMDByPmq1idtUqKVbkabg84cqnJPzURkw1RUaKcQ2SE6cjFPrZ",
  "key37": "2KArsusXZub4twb35xbBGTemj6r3A9VWyJL7XAeJMZx43C6kcT4KRQvBrdqruN6mPbCyGkeiM4CguUUvQBXNLpmR",
  "key38": "3khnCJVsygj3UUnRV69LEGGFzLYyTcgprdYC8w2ZFdgNpCF25v65UwmgnNrVEb4yaoL4aQhLhzVjNPJmRjGGMU3w",
  "key39": "2ZHUZRby1xuGvHgya1hU2my84mMQKPXqwbWzc5LcPjSkXnUx8NvrZAh3KaANs3oc1e4CpRTA2M67XBJw77Rx5fji",
  "key40": "DGXUWZd56oFtLYTWDHxujefiMkkU2TquEvXUFn957AfZC9j77piARVn7JJvHzs3jNxmFiEDWZFR2h9PamGjAuBM",
  "key41": "59dduu6NNLPpUepVpca6JPA61f1AkuzCJDHnEHgeyNuwYqYQLAmQ6XDcevSqMwzaz2EfQMddUPDgRiSxaTZ4BcGL",
  "key42": "3PFpMh5bgnkBDUnd1WTkZo4reMXBxRjb7GnxR79EEFezjE8G1o8TvsTcbETaR1ZPiKyW4GzqJPWJNPjtKeSSRVCy",
  "key43": "9zfwUQBMLdPshqzPDcpq7eVEiztYFi2d3bb8u5ksZuvMoonVv2M4iLQezbgRU69MwetkpUCDKuSzB3t4N8rmXQ7",
  "key44": "5GhFDF2xsZGJrfCd9pRRXMnY67SNvkNhSEuTQUeNFHS3Mbn1Aqw64VJWgUtHjVfZxrUqShKSFNwNGF1AtkZU27Sc"
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
