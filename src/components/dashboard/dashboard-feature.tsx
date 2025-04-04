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
    "5Urfmvjsxzn4o9uGQprQ12HbPeztsXYh5JzHRKmUduGRKx34dMALvBERXDwuwSCSzkoiadutnWB3sUBJDbnew6V7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Y3Qwkqv1F2fjExghgvhbCrXSDTAei3Hy9RJ7FdDAFHMXjPjo1QEPViETFaFRmYUDFwLMBA59z4qNnvfHgdCD8ko",
  "key1": "3Tc4ebraDQiWkwJJMRmewFE2yuShBvjAQuPFSEpfY9yokHheGZrTZCy9Tz9pVKUur67rwmXPSNaPLBNqSH3K57Xc",
  "key2": "4vgmUe5pMXSZpbAN8CTakYfrnxNm7qUpKX83qRGPt6vfSVBa8VpEbsb8d7zajocMnoWCvUMBSUGRMvhybcSLuZXU",
  "key3": "2v3tAzX6wauz3YcM56WX21KjcgRsJb43jqqQbGC4R3wjjXSLwUjPBE7uXHyqdZpT2j6GhNemUqzCckdr9tiGRCB",
  "key4": "3ySSSvckvVHB7hBeAUXdr9nMow5sugnjPfRy7nLVnSQjQctL51bGe9ekPHyeUtGgf9Xi8BrZzKvMBu7KedQiH9ev",
  "key5": "EMAyesBnpZQobFLsRuvMEYST8TKJ823TVEDxirUhncGXrV9ULUaqi2jWGrZDewPzTNZcj9Sz8uYhRNR83P7EqD5",
  "key6": "3gEX4Zyrj8Dx6v2BDBXECb5Qza8Vk4EbrAsPTJN4gsGqh9E8ESkDH1YqZHsEyEiBsJ22RzDFgR3Jwzck4u3gCy7c",
  "key7": "4JUwNvVTQdLk766C2teEDtzDC4v74uL7tSuzE8fe5TccKEdYG4rhnFhqmh29vR7NUxvqsiTGkGWKFL23NegtU8TS",
  "key8": "4696qxT6DmtcsM7px67ymHoPjazWv7WUVtmBRYjpSyyyPB3CEFj4eNrqPzyRgEWG4ff4JLHJsAqyY4reVZepHTnX",
  "key9": "4cJs7QzmUKcf4uCqxdpDrimSHfjeHZBYvBx9gwRtWmghrnzuH9Cw3M4gczrbUsWQ7uTZerWP2tCyJgEVzGz4rgeq",
  "key10": "2NgkakmYEihs8XMCQUNJFLEYDbD9nWEtb5NWGkVXpHb2WSgZXDpMpuukb2zEeDsdXpYSCMzwuVqA3sV3CBUK3GpZ",
  "key11": "5qxipGMCUb9UQHPjwTQPdC9QUaCnpXtjdGZSgKBeENssBWHNALJcRui1gU2ozhVCjH2Fm8k5SLpBggGUKn2nWxwE",
  "key12": "4wCPquhMYPhbFEkHa7GNNBFLWM9P1afdwLKQu1b2wZdrBvdxLd9fQ3NDGMSEwEs2FK6omyBw3k8bxV13pG2Rq2PJ",
  "key13": "3PHyb6TrQgmKzZPZuHXasCkfXvjbTsNfraHbTz6WBZnHcLhmni5TG8mcf953iz7izRh8JFwLCHfP2dxgDrNNdrZi",
  "key14": "4cG7h8YZx1oer31TL4fLGwVnM9UXGj9jG47EUTq4tp3yZy1aKyNagpWhcCyPhptB6ZxivcGJMTojJqL8NfmCgw4t",
  "key15": "yxsJuBLG1kLMF8VUnkU5ZjZuSrKto85TL43nCgENudQLvPuN1LfYqcsXyibb6Jk2LfXJrw6P2YNX9BTpQGy216W",
  "key16": "GrwrD6owpJL62A4dygJDFaMyMAK4x8UtgxVDPpgrLpEn9NCYNqsbX3fKJzFBqa9eu3jfzFTKoRwCu8Mzkc3RG1X",
  "key17": "4mRn1N5pTYNePgufVtVZNCYzTcyBvfaPCK3B7CuoD2xswVtwEYaj6xoCtnaU3Hdx5fJeQbb6RN9xqK8uMkrWFS5L",
  "key18": "4qC1Rz4eSU7pYZYs4wYrroNV8BEXeFRSusgecohW7F2uWYyoQH5JR2zYgQ6bpbHME2sh9qUNc3CRw382FeiXFthw",
  "key19": "nFuaXaMD5MofQon4RtiC4yj6JRYQNiEG8XhLTTMnbjarSuhfJKMU9ZzK14ypRXfbi1pJpLp2Uxn7maCw5UygwdN",
  "key20": "236MFVWa3JSwoANBNG5mA1HaprvhgEScLND5VLsx5tTvricYqoFJMY7QY7CWTdKb5yQUWWndpWGtaGyx9szEfRii",
  "key21": "56geo4C79mZszXBXXb7ndHioKw3Yx2KGzxyiqXZ8NGXhjuxV8C8LbWWUyuKTe3qv2Eih7xi18fB3AUfhmDy14aD9",
  "key22": "23n1vgT4N1PPF9p9Wz38WsLi7Ye3hS3XaU5dxuEpuCrFZcX7QEpdSMSEUUmYD2vJfLecQ3p3H6KWWQbDdGDUfFH6",
  "key23": "fq1Egas7kcxT9z63hJBBJEnLfZdjJdyrTRJ5Yr5PS277BdNZ8i2iczpBnrWJBftejaTELrm8GFAeDYF2EKPDCUf",
  "key24": "4CjRyGp97EF8dr4YBh4i5GRfMb8cnNNVsTiTSc32bHTHfh6eradLTD6oxRFSuuDNKpFRPWLTecNqhFC5dg11wRD3",
  "key25": "Auod9oVuNzpzSwG3evvM5GmyyzUU71yV7QWh5M4TSwY8SMaku9xau1LAh8JyieU4MrsNwWMCPvuyxCCkD8NBAyG",
  "key26": "BVWMWCBqT4cjrJoGyDttNNZQX2L7nbEv25czDqjeNBdkJLSV8Ur6LTYqRZTDGjDw8tUBEjhtaQa9PfJwoXy8wke",
  "key27": "66fgrLDRqpAjZEdyBxg4qUM4reXGLoAq1XgGdKyKWhAsu6CJs7mUGisryLACwS5aHXcbJ9UFjU3BHGxohxT3ATNs",
  "key28": "sA5ihWt5yC69qfmZYVsCEH9TZhJNxkkkWQRWyUuxTux9pzGayXBAqXAAKhWK7cj472Wx2qDgGFTEaAYZ8XwTWGF",
  "key29": "tMKT3FrCQzMpi4Dhk2MJZibRAJzuo9RVdfRxSDQHPfnJjvzyQc6woaZBdrJ6EWRpDxCu9cEpybrunE6kVQHFfaq",
  "key30": "25Zz6RSZn1f4yBuszZgAUErD5LPGtpjCEGHJpAyxAjZxCuzq99U73SHxXJG87yHzY5Th3W5aWoMQHj7oLExT7jLq",
  "key31": "3yy4TKxpadmXKS3WAekioW11Y2BBkJ9JKamFigd2NiNQJBW6DQg1pcwoK2vkRb5gY587NQDkZLGHkPbeU6RBRmU9",
  "key32": "rj3rfx7AhTUdnfYkiVfqod9ox5JHmSFMmKR1p3h1KpdwuFYdr54WJDVbjKt9USUBSbmMu1rht9aRgnjNBtgAwJo",
  "key33": "22cZeRr8of88wLBR2zH8JVRSKgu5whxnvKRQaNU6HQznqygtXcsgQdNx5m4cgg4bXJW3R38gCyhqKPcQq1yuq6MB",
  "key34": "2qP83ANSJ2v6svmq3QvUrBQi3ZLWnnackN9VrqMVYetiMdXa3yCnyX1bKk6vb24bE1kNxa96dqgq6B35WBq8EhhZ",
  "key35": "22ZHHVdHpPWSNNizomN9CveQ4CmvyQBN2ExjJHxgMhEAvUXj9nYZN3F2sSxpF6djBRVfNpHuqKVZusd5wemg5VJh",
  "key36": "RYfAYKvMBsvRMQ2LgTZc8DNNy8GywnQZLmz6XNzYuEZJEdy8kZNNRpU2kQPFseTchdmCPzBh6j1GeF5qzHRb1rR",
  "key37": "3RuyFj91ugNWaHGksZLFkqaocCUKYZReXGMY9WiM658yzDQDpycPfjpaoQ7Q266QY8t3mZtFrvbsdfgGdVWj8eiz",
  "key38": "2ApVKWHvHWFFPT2AQ8T2cZLbFfBTJUoVM4cbtb5hyDBNGo96W4oN4cyMm5pqbNjB3DLsHyfcQBkgHtwRvteBNLWN",
  "key39": "2BTvJqSV9gYKj5y9E9PoLi8J8TbfDXq22sdZm2r3MpgyPSSbcY7yn2NZvvRw7pxrKEZ7KqLncSGjeErKdkNsXf1V",
  "key40": "44znx1ZNXVvNKuoFS93cnAKVsaCiym2eTwnL55ZuQRrdrZcohrjwvjBB5LVBsMC9f6NfCkUntuKBHzfmfxHbYSgm",
  "key41": "2FKWaovWgmxS5DJHSz55e7ofs5XygWosVFE4tJyvXq1T6SuTsowh3JCk6U5C8cKhdSGoeCymfh7vNkLPVLKTjuYu",
  "key42": "5G14VPBBLaQJSEvPvLykVep8rE2BBW4zzC57nj2K8LZL1VCVjZMU8R34MELRDdMSvqPAWSRSwXnkC9ddKzatYmA8",
  "key43": "5bjRPJk9c6qV2zkpm4sFSy54skJaHzYKxWQe1nH5e7VC3F5KcD7uo4U596WaHnE2rVkHHQFMiAoxpShVLxy9dRNb",
  "key44": "2uwbPJBHEpg26X1xV19cU7oA7qRLBwP8cq7zceYTcXARNuPspvNn1P55bfsBabPwcZ2zhQAuxj9ekin3hEw7fp2u",
  "key45": "4n6hguB1xtF5N2i73p2v1PLUSmU7jHobCZ6ttwKHKYuiP84DdkX7SZdj4V8BjpPii3vm7PhNzN8PBvMon6dFLjGk",
  "key46": "4xe1K9uAj1znxc9D36FQt93mfEUWKbEY2dp3wSPAoXWabYVi2b3riv4RBZTLZS72YR5xi5iZLjkmVdWwp3MEy3BC",
  "key47": "VDzyrNtq9hSM76fmEaB1x4jpx3RQeheWsj7EYo2NbjuVKfRcYpQs98bCpJRwDvZvaC1ZZLRKz2YLiRBQXfx9Lx6",
  "key48": "4TQdnvUhJBJCE6geaq9J178ZdaSabvzYEe9UNPVUWbsSbg43ZchHxLSaraHybEDEhUj4oD7P2ZnBkmWvvxVR3uju"
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
