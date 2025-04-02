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
    "2CaCYvj59NgC2YMM6P7VXd2buoGS7xvezKQ1YeKuS1DNV4kWbqA4aMyi6iHcdgt2UUTx6n6Jrn6JgChwvcZDin9f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kHm3CrM54A2FWmhNY4skugMdtY942PFyMvvf8Dtdpg96VCjsqA1wo1xxo6f4hvn4rfFoT3ARZ56nQiYyeGyycY1",
  "key1": "o6fJqiE7yLaE4eQFs2qvyQCR1ZkdMTPrMMELorNRTCXyC7NHUMoFqBCVUGJE39dRfJikew8Rf3MnHjetCzowZpM",
  "key2": "5QSnJv9KPnzqTHAaqtynAZReN6EXgnFkv8yCaVtQ2YFinVtdhfba7Ucfwh8LBpvVg667T46srm85toDDG4VodGDb",
  "key3": "USFb7dud4u2SwjuPP1k3pKPdjpfCguWcc8Kk6Fzx4iDWAmw5qZRkUc1LAYry8Sw9nRqkweAq6jnD7EYMn7T2nJg",
  "key4": "35BrQG4R31icNXuxGYFGBHvCewcv9YVZe3X1GkXyvtrarxoBoSCj9YfKfAp4tik47VmLt1Bs9obt6hKkgsVGdpEy",
  "key5": "3e43kE3BZsz7tWQAiqYuCodmigFgk49AWvr43tjTxwFDTGroNGrCyoT55aEU2hrow6RMPkwSTz5JAreMyHeRfKW9",
  "key6": "2dhcLm5fUYT1zWQjPypWKqKM8iuy5ydLqFJ5JXnoxGCbFNJi8BPMV2an94coEGvw6hdq5DQ5qBvDPoHpG1imTzvA",
  "key7": "N153TasEzMtYPU9UuhL6jCS7PRqR6Ya7ViRgx9QcowiA522X3ypm4PbkDCgHUa3X4nWBU2yNne4sihHFDKmhbFt",
  "key8": "3YPu3xkpJGzh37NPKq4rrNPTbCe8x884tZeMXeVRYYvNotZWiqwxRQSsTQeU3RZQmbV53CSqdbTrH6CnzugkNkFQ",
  "key9": "wkBgVWcgzYZYdNg89shv9X3Yas72x34NtfLJMkZH1BFnQc3pNUPBTsQAfwfnfzxBtHnEVSboVUjQ7fYugPhzMEp",
  "key10": "H1gNzsC44e9xnjg26q7pEFJEznP6EwYQEqn9cV5W6FBVDmR1EzewzZiJ3yXKfb6KdejsSpazX5iUeNE46uvmhM8",
  "key11": "5rr22mgHwAD25GXRfkN6wR6w8C8YdRGaF5PqyDhq1pw5otmNyx7ktQD6DJK6LGuaz36zF3a1oX4ot8xEgS2s1a6",
  "key12": "3dyoMpNDsN55qTfBMa4xEK94fuRsbAb5HunkjEZnNacGgRFBnJCc7o51a659RU2WhY7YfiRbX5CFtQGmbgvsRfPT",
  "key13": "2MT8zxT9nkyXVMyytrUavY12squt7RWoycoVD1VdYBiEETFu4jCrpwT9j64HiQ913WKjFyzCWet1Grpq7SHcX4wH",
  "key14": "494QQSh3TiQ6JKhe3zMvgi3eq2y3mui3TE1evdHxD6WJuk22wxiN6tGBEyHn6W5T34Rrcu1Z6WF2DonTDhWk7oKA",
  "key15": "3aM9dWMwsVTaT5jcuNKe5KzR1tTsYYVjVQRHHaK33Yv81ELfJ9fEsVhsUBhhMcGxGwfUbUp8onAuEky9M2vTxKG2",
  "key16": "6boJcJDQnZJDHZZDyXNUS4ED7vxbxduQFaXQLRrEf75sTqF5KSoBrQ8y1G5THMzNh3UWu4ZFxs2gSXezFCe7hwM",
  "key17": "2CKbTNA9PDx1rU4s9MqxqyDuhk5UrA3Z4swnV27SxR6w5fWLXMDjqRiMcaFqC1oJ81524qD31A4PPPyDeLs7CREV",
  "key18": "2pMv6L38Ckwy3ocfarWEAUTtZyTfVRiaZDRWJJBBm6WgqmRTNMYbkHhPt39kAn8xZphR7pBWVHmftkBXux55idNf",
  "key19": "3jYiZdZYVDUUSENatitPEjqTM2LFPB6thMnikeVUCJbRvfsBCjy2HfMVTifKSHStSQJ7JKunRjZKtwAUR2yvKu5e",
  "key20": "5LXhvGNU1kh9ywfDpH4JUJ9KWeS4kA3Z3E2dmJ42Sd1LQvjRWP9Tjk53LLABRNJ8qCa81sE354oL1nqRAyDHkecV",
  "key21": "2ucrc9fFL5HWqDfaAMbmxjZ7JP7P83L9qAmJ4hZ3VHH72GQ6oW27Brcy12p8pCLuoSGWWAsK5xbrnGBqhnUAUAUd",
  "key22": "2Hw5YfJ43Xawnd5xKg8UVsKengfjiTXLLWfmJLg3EgXsLpXsZtUBiQBjqSVFLjYAxRzwveCjzhdb7TwqXXH4JTCv",
  "key23": "4DRkyMKggUPCMjjH1RCFC32ovcXB9nGbP5L1pu9o278eE6mGTq1L3TAwWaWGuNZ2QCkLdds3jQqyQHUahN6pzjhS",
  "key24": "5j6PQeM7ZDjDFGJPT66ee5aQWfHEWEfFp7pTb4NuPz7sRQbyA7eWjbbtd9kxVdKEbaA3m7tYsa7ssWa8E4BEdVxv",
  "key25": "3eNzaE9RpJV1ZsqKr9ZaEkTbHEUMUMBUxtukWUCvCn1nVzz3E1MRuLSzpwMes4FRS7j3gpnuUKG4hjMevTdNzHF9",
  "key26": "5oTnajAgLkz7nG1iW4bMqh12JsPW1o4eR8RQaSRKtKSrY9YTqeS92w7biFyKArvdzxKhkqyJde6bfTvTY5UBn23c",
  "key27": "2oWUZATRms6bTpbnpAzpkDo54TRGwU9Y2wmPihXgKgfkqa6C3aLKn8Z6AGWkgkgf4vvrokkX3n9gCKGhYvXuH8Lk",
  "key28": "5wLi33m3ok6vPzNmwAmJBL812Fg43KuwF4HeEgjFqnrYc3LZzYMhoWN23P5pgcUonsVcPjL11MhBSPCitjMoXByZ",
  "key29": "35d1sTLFzQSG4bdNxYpsiLC86YSJGEgnfwNA7fKRz7e6HzZkVUceZCR4HFzH3CndtBX6WNWJ2zXcoowCFgewmP39",
  "key30": "3c16dWzp5oTak77nd8Aq16bngRHcA35HuXr5deVsg6UNTkbtqXDKHoMFtKVawwUXwgz1HQGVie3K1XcaWcHb3ks2",
  "key31": "28G9JQNn5MMam3fXKvK9uRQbsbPivZASXZkCdDFaGzXE9CpwxLf1cc8FddqeCeYJgjDwjZk2BPM7Y2hD7kTegpJj",
  "key32": "ptH1DNkcQp9LT92obawBHqCu75B4nE2ugo6Qi16CrwRBG6KGJSRo2Crae2ihKNTStWFPRTdbNYdZpXbYBcPNVeL",
  "key33": "2HRmpoi8BiW7ey8nVEwpY6Aoq2uSo5FaJYp2unxG9LhwDYzit6KDJRK55baixRjBqpkg11BenBh2bZhJky3j3UwC",
  "key34": "5gNvw53hUCX1Ff64fNeqmXHiVQ2j2Fft8djo4rbcwirSRMN6zj2mbYMJyHXx8ZTLniKfVVgy6FaBUX9Cmnmyi5Me",
  "key35": "tUaHD4a4ZmuoSNNYox1qReEk1axq4pAgdrbYDDiyTwegX9GFDbpKB31MYgKvYXkk1pGno2G3gStKo6Nt79m5CUg",
  "key36": "4uTz9PA6D1FkiDz91hfwmv4UzmzCjUEXZiZ3MJftGFWMAkr8bBcK6enWiCrQ4X9UmhzLEadGDJL1r6w9LYyStqxF",
  "key37": "51BY6hNnHL5ALm9hsr9R9peiTGYbnUzuMMP69kZGx2uh7X9xvKiwoDHJCzND3eZw4ynyj8CyUFUygUZGNEGf2qmu",
  "key38": "4biktSwDyFjWvJe9m2Mc5g7tFAYjjUA6oRig1bReiS1PsXekfm3qWXVZvo6xJpKRBgc4CfCg2EVqaHBuZSdc2nni",
  "key39": "3Ehwzsp7pSCPeVY7kyguNeKTK8BPJ8VdyCdbtvbKBhNDrFryxRFUFdST9huxxad6SAEBtjin4metBv1v9FaDE4MB",
  "key40": "48J8WtvNgEcyYQAwAxwLp9SEgLzaDuoGTZHZyLqjnf9tYhRQRKDE98ACJvzdVXZfqFbU3WBxrvxcpvfF4KN39Do",
  "key41": "5HNWMoBFTXPY66ZFtMJ5vfnCLBmqH5UU8pFNBDcWvaRPdAoETNsqxmKoZmJxcivHVNRvdKGMwz95m2jo7rtWBWvV",
  "key42": "xYrgkbfRJ5YMamr73cUj2xBC9qe9c5NvfgNSdkb1RWYsAU1ZhgHFbgdnYc3nAGcE6zhurMPeP6GEj41f8tQTbFi",
  "key43": "4zXdXbTD2euxPUMAR1BfCfxNnBfPZP1WsBmBq4VTEiYLgJNxKAEsosShr7boop1xqQLFMKtxBmJwKRGcy6cVNmpi",
  "key44": "2ErPjxpxh9ijPymdjWuQkkTRrq4TM8DxXiTPt8zypcQGn17CKx6c11gM2mKGpWk45hwMJFW3wGXeZQG23iWPk3aK"
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
