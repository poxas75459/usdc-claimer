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
    "2woJZHmPtp5Gws7SrDnuw8Q2FFFkg7t26q6kqyAeg5dtcxKbi63V4pe6z97tmB75dQMQrfds3tcwGcX3zXDa4SdF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kca7w7MHaWr7gSgJXV15JwCQypSNqJcyEATrGEXcgDJLCwrwb3EhXLDbgWqoFoJY9zCd7Ajahk9MXLE9aio9FHb",
  "key1": "3Ai53UzdqKbxbPuShkAHSykdX9Zv6oKGDwSqWhhRf7E2HsBunEnGajLdWW3YhKhS8Gq2BCmJEN9RLzXYANm8kmZS",
  "key2": "5jVcvY8uirmECmGNcdiZPcyQhLzaaVHhDQvjq39NwrXYitGxZCs71THreHv6YHXDrBiJQPSzdbSQKz1qvch4wF6u",
  "key3": "4KGnR8K5P7kW4AfLJtUucpcy1C9NPX1dHNMgn7RtR3drzDszFP5mVCEfX1dMUzAyC3wHEXWBM2AjoTzGUZZfJW3g",
  "key4": "5foXd12cfu5NTpta4RaQRzPG7E1cnAbwThbSKPYP6JxmngBEhzZcmfbAz4d6BQFVgYaF9EsfecgMCqdWTpfqtJmY",
  "key5": "4cddMQsL37tZYT4TzJC9git4gHdpzoxJ41MMnCkPWQDdshtsGxVFRkRYbePYq9SA6Cxww28dRV9R69p5ccsM5rfP",
  "key6": "46BY7bLp2WgF6wJ1iDeQR5aGWXBaE3H7uMV64NMKavLHqKGqXNWisZXc11ZEXatrGHPTXBMgUAoXonXTCdJLyvec",
  "key7": "3x6SH6iPTHMdHm95QsF9NHV4TNaVmU7kVA4Y53MmY5aCgYajSgELZHwKAMW5QN3oRqB88dTs7aJjt3hSbuRciBgP",
  "key8": "62zWDqhyvGdX6WjQazY3CYpXUpkgutbAke6Dz7PhyEYGkh5ZrXoERSCtddxhqtg1LmpBgndEFrMqr8dtMYQZ7Roz",
  "key9": "3zWGFBVdapymH2SxERst4A773VFJePscB5vYruQbDFD4Rb5Npuesk2FDnXXnBrJuFQZ2oaNrLB3MKwTiGV2KoWxH",
  "key10": "2DozVdqSTSkweJ7nzVFTmimuyX4AL5nBFCgRkgr4on93p1cZMwYB5vxRAp7GG8SvEoeGYr1vJRozTwFEjXtqNUR9",
  "key11": "2Zuv6hnahSc2w8WoxGEbfKmyA4ggMh4FbPtb2CDyTCEsrmCq6yzhFFiZKmQCeqcC8didn8TDBHYEz9nkq2pjgnx2",
  "key12": "4JtBgjtoGqvxtcJfCFPeEpavo8Dg3qNPVfSijyfv8P9NRUSFbjLx51fzB4BKt55KzKAHnWv6mncKo5b2g4kvV5Ek",
  "key13": "3WqBWAkqfETRbSyGKFiyc8kTZtrY2ebWuAWZb25Lp8UyC51vMrW1JzocYE4A9aF1xMAwhyGwumyNQam4QAawwbbX",
  "key14": "56MZwYyVWcMBrCY74AEt6NWCKDTbv844GuBAmfuzkXWVBgUHhuzTNuutdC1qBNuJmThUqcB5xdkqw94Vtkd5Bxe2",
  "key15": "ti2gTi1FwE43QTVRUjbU7xGWLfaBfZ1c88Ug2KvjgwLAmX6qWDWf6zWvSWf6Japa6BV9fy4zsbLsR242KBmQskp",
  "key16": "5fC8FNhsZ3qm8RTAXugQNC8krQqrQQPRd1DFZAniQFmM6dkprvYr4jmo3L9obfNXLN5J2WRcN1Pa92AAe7Tt4AC7",
  "key17": "3Dsj35CwoaH9cE9jiDggfKAsbdLuA25qJH8xmyDZ3iR7kN9is7nGgq9nsB9XoJXHsdLBKxPcPTGYjhHb5T9cmNUY",
  "key18": "mVoGKUfKGcfdxnfka5x9kFud21CQDvm9tQHxsADybqvtZtEdGewekfwWqiAiEwgYasgKWjzKdcR5twPUscDT8Xp",
  "key19": "kbKaRAsnEyRKknHe6hQmT2gfC9m5b9gT5LiyyggyBsEafDL4T3FCMgFze4KNBcGivNnLzuwQFWnuYgbxUMUDvgC",
  "key20": "Lp8SSsJ2MF66ZgEy6st7hjd7UHgLTnjVm9NuxYT94CLaWKx9bq8GyV99LwKU74tVDVc3rWatsvEzDVWfL5sV9qL",
  "key21": "3G7bpZDLWcBDPquBenhoLpF1vzKF8ym5zosB8jHdkwDyrZKU2zwt1egDfVenf4YwG4ZE7P5bwgMHbR7nmfLq3c1t",
  "key22": "CjfgRJ7CXC4v7D6AWzCTAPXnLFNWxDd32UBbyr1NREasU2VH7BnUZ4MU2F9d8ctc5CFqCXC9DgsSNTjSaUyBrgY",
  "key23": "14LZ4EhPYVZ6c9RngyNaPsTLFqPwG8Z177mF6vMEQVANA1qDKTKbosaDZGEWAntkBXxmb7TxonRbDnzFr3YEUEi",
  "key24": "4ARHjvBczizM8BXf8BsBAxKMLB4dpyVoMD8itxu5te6H5STaLhmQL2jH4e4Ue4Gj69xFCBkKLVuYMQpYPYZ5q9jp",
  "key25": "4oB6TeteGoB4grnKG1p7FcZw4URFQUzWLve4cythDZYHQWorMUyqKfRomUs4wNdNBDqF6kXso9PxrjkL4cE65TWs",
  "key26": "2hrgNKfwi38Qbp4m2117Fhwt4NcjLNhM7irkZtzwyFzuwg4iAgURq39E95fYBujp5oq8hAvvAcHwdKHKrVWfqMJE",
  "key27": "62wE2qkdsCYgfZ6VgQYc8kE6TUPx3AgZm69Fs5B25cWTztBvfFRFTSXQV1Tx3NxeSE5f6GrCryem4YCN7XL8A4Y8",
  "key28": "3GAS4BKESU1obnVNMm5NgSFv7MysCury6zBgY5sTEk8xFFibqD13uL4q2EJsagWUmgfTpXxXEoGGkADTbxUdrK2E",
  "key29": "42irZ8TB1iJKT28uMbyHR7brEV2QGMKd4FBkJouUYJQb6f5JdoSkSB3yvxxjk5N6A9uFpndxJTihX1QChRNSRfxQ",
  "key30": "4gpSN6NbQP7RsrfvcoA82ZcPnWZotrcxhjbrQiSf7Q7UbPiEeEBsoRzxLuAnJ4fSL7hiHxEKYA1irW1dz2U9TGE3",
  "key31": "4wd4psvtuPNWbK4YutKgxTcyDbSUTF44CzYfno1Kr3tfnT3RMgn3GTrF9RSxwDSJSDEgtLzUgZ5rYTSoyaWAZ46P",
  "key32": "2KUe64oYfc8uXydWRMxyPgZKDWKnXCe9io9jA3a9f3BoDtXFT7HGa97FWA6ReG1jkNrwjA1b1Dq6ytFQCWRCa8ha",
  "key33": "5ggbT5moQ6gkVCBTKEsz8z5UBzLHpMPf5nGQ7rS1RnA3xrg6Mms3QPhYscS3FaGKES2RxdWPqJDYvuxF35AebW4L",
  "key34": "4mTWLV7oZyY8RUuCJQ1RjBMWDiYDY3xWnqXHafVAM2TQMMrPzQw9gfi2SwD5pCZu56bpuaFSt2NzbeCmcrqogDGd",
  "key35": "2bX5eGrzR3Tmj7sSqRyFVBkDgq2RF9Xmee4mdDHfmh5DekdTFzJJjZaDwkc6jL22SRpa2vk3FvyBAh5P5kTmNApV",
  "key36": "4WCwvX6B3wb4c7MbzRjC2DVEJDRtF9JaJZKaitqxpWgzjxQhjUwAekX6ui7KBYj5Zb2ame3VEdZDCQBf9tefSVB6",
  "key37": "62DtmbfbGdRnovy9fzu4BDdfzXrasRuWw2D1T41QCj4zTqxpi1AYb31NGCVLobuC4G4bdo6KBPjqijtSQYsp66vY",
  "key38": "4rhScHtsZNMbJkybcSXqLcrC89HZdKXk82SYYRLgYufqtjF7emGYHJfT2Fo2eYtHwwe2iSZuEyXiTWb85BWr8uXA",
  "key39": "77jhKJYEtKNU4ALSQLeK9QhviM1QWLgAycG4PiXGNRzxLYiQ9G3keWb3FEzJnrYfZJ2AYhVSKh9DWN84dDgPbND",
  "key40": "4aacwoqL6rYnzRZvASeDcw8tTuUMDNtqtfNYGjw3JkaurN1nYRosLqY9vPm1ZLL2mnkmwKkfjHwAQ8RbLheYZfXE",
  "key41": "3cJA8vrDkJpoZfxCR7q53wjYUirM2u9sWvyG4zbb8fYQRW5zzMU4PzzeFt1Q56W5caRtJ5mSEjYkzGVHneggWT3c"
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
