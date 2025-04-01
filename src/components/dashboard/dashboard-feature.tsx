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
    "2tcDVnj3xdWfUh5q1EX8Fw9BaQmv7fXtZvtpUHHFCkeJwSAsmFKSHLHy3T1QepiNiZCopuCkqHGQU69iXacBi8jo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vGRZHYEeTsWKWVtgkitDe9rN1vAT5oqQVhPjiJDnsMVmS6oRq1H6HcBZiC7iqfphKVS1HrJUzmZRoHZXtpXXPc1",
  "key1": "WZC3Crx3r5UAVeqQJN7cMmHzVrzLPXQb8fDLSWXFboony8nFrzF3oGPPLUpfjVXudeg7VyRFQ95HpGQBso7Z2ST",
  "key2": "4XB6n1xxeBD6DN6B6rbSDnFtJE4WH3w2JGrDXdu3hxY9XfRYdDmazj5nSXLBBwCq3utXUAAA7YGpKeHSGzS6YQJx",
  "key3": "4dapT6sScWy2SJ4SADJzbkaFjmS9Ldsu1hZvJJV1JfSEBocPqSaogvSk9jkUEn8w7J39N87p1tRK8hWorwPww6qy",
  "key4": "5DtKR2jnVj4a4k2Jnd87EAVHrZvP34DadZNeKC6BcyidACd5Y4tmGsCeF5WEBv28fopt98iBicfm8PPdbXW89Xwb",
  "key5": "5xSxTkrqBuZ7gLeWc6nYxy7C5517LRFpkg3wRMARKaMRhSFpPq8WjeaYJEcFppfp3fjFv8LoQAM4DSsAWNeuNAvt",
  "key6": "2gxKgkGszfSTtifREYVVAYKJRJmiTobLEoEhPdeScxPCM3Vs7hJrBzJSeKQMW7sCuuwFY3pYg4myE9EMJwfNbcS4",
  "key7": "2jtrJToofV2n2gU5EFWjGBiRdMYizCPMzF1s8tXJuDKnzEGj9KW5HzPguMFRCjA4WpEu2E3huop4v3ouoPAescNK",
  "key8": "5h9mWBmDt4H2z62tUYRUbGzES5Dajsv78Xa9WvJRfgq2V2ie4QkaKNXnBWX198UxHstQJtgWtjfFpyVFSQGiXE78",
  "key9": "49RjYGRku7KyGZMH9dmBii4X43rc31EyfWJHU9TQtBkgigHrctZ9Q3e9diwagbE1TDeQ2Wx98aXGzaqhBWd158vB",
  "key10": "2pwuqufrQKdmiBCr8t3nsteZ4Kx4dtr7PBnKpKRULPZsow156md1krJuhdY3XrkqyTmNkknm5GkS2BciwevJE7vr",
  "key11": "3UHJpJd4qQ1FMKto2L2JypCK7enhGvD39Pk5MYuxcLKzQyKcr7wjAqf5LFs8oxvqs4PenE1M9x14vcTaWc1CYYc",
  "key12": "3ub9EXo1afXCQh5xCUa2tDZzdUmhx6gtfJhfLGMD4r4FykqYubDGBQd9j2ru8r6uKxFGQwpGL6PuraRVcgQuSiTR",
  "key13": "3QN2KgqN7CwFnQY2HY72FVBj5CouS876HgorgPrPMWrZwaE6kjmAcRZ7mfffZi2QWe5L5JqZ4XzFKPQZGjFom7R7",
  "key14": "4zx3HfW1ducq4tjmtZJgGqsQXtPjpJVRtgViVPAjAuqZyQBfdKy3b6rWiKKKtv45GCzqRdYp1wVXtw5FbmbW3nkQ",
  "key15": "bKCH3rrNaPjouJwvVGj8XKC982z8TZfbeCEEx4KZi1Q9u4xGKWZRXLnmS9veTpsrcKKMtzS9D22H9rEzmHy6YuK",
  "key16": "3Dx7g8667H8gnnd7CzYZGoUwDVjvZ3mELWzgk8nbnKP9i8t4JEy3a9GHb2jptbhD4NP5JzNdirdqvPq4qWztksTn",
  "key17": "2k9XAd8sKtBMmEHasEp1AaaNXimxL8S6pZctCGdfxxNDTbke3Xx66bCFwpcTfvx3nBiMWyJgyHVwsbXzrMbi2Ghs",
  "key18": "62528nLs2SM57ZKb4E7mgT4Z7GdcoUFK5NEFzdisn5yxig4dogYFKjtijxyN59BLxF8upft7cPmFK9BDSFg24npf",
  "key19": "wutpnH8TQxNaeqQR6KcC3ipWBXxUfYCpK5rNfaN9Vrexh6iD3p5NyYHCxbCYXYTtiaCAfesskpnDP5EACa3xoG7",
  "key20": "3sCvx8ER9TT1JtiRTv7wvxaZoyobHNffbokFtMKeskM33sfXBHExrHDRtMLRvji7NuNViCyVSYsGqPnhfiv5BmPs",
  "key21": "qWPbcTxey8UV7pkwxvqYr29Znx2hKLakgrmf6HKqZnLEtnQY1vJToDvnuXoofMS7NKVrFr4QtdkHgXBD4CiZtsT",
  "key22": "3tmBuVrNHct3QsnToTnXYw4oR5oV19exb1Jhcnx9rQ7ZQkcjmUwqwQ3kQ9oyVMCmVGkBgRNLd9wD9p6J4Khz7nZh",
  "key23": "4K4buY9NNX3fHjLXDEnaww8L25fjmu4uwbSGre5KzCDvJRFDjBTm2myH78G2a7k7WDQmFbv6235MxwkCTN2AwTUM",
  "key24": "3po1L439zFwbANsSnvbsDj1TSccyJ1GdWzdc2itNfWibMZ5P2G9CeFRsvQMBtviVeGwt1WC8YHR5nurQJJYH4JYp",
  "key25": "f95d77Sv8UkDHYn3YL7uDXYTBCusaZ5eVJ3D9ZUPDwV9W93PAHUJCzHaNzp8Cf12GY9aVo6iuZcVskJG6ZGMM4V",
  "key26": "3b2VqtLPPUDzvRc9C9tEBvWVwmLvPo1Ziz8vUDUhYaJjmdCFq2YToExRVs3s2pSzoHSnPbKRfmBEcxG8h91ERBai",
  "key27": "2tKUJ7PCAWD3ezh6pbiQE2ff3nS3VVvNdVbJexCxb6AokZgAUyqgM3K4hRfvrC2egsHUDPSo5aLdsxXrhSmTaiM8",
  "key28": "4EQWV9UDCum7ch7W8ngY6QupQ1ajfnVJyLwqGbPXAgWpfMrEVyk3YB6L9qEPXPSHeTm7A4XLbjWfJvX89pDgxpsE",
  "key29": "414Ph54P7d8phvsCGpW3Fx2T21myGJ8djnTDCyegwcFTxNznLJ69gx7HsyVCxUSnEuGj8PWWiL1qJSk6EEk1gfDq",
  "key30": "55z6dvpDYBhH8jmghw4GbXVtWydEzvnPn6bBmRY99KagXahc3g1ZMKaMf341n2LBwgikLfqidy7jzqx3irb5rCKg",
  "key31": "5XYV2RMq63tZ16aKgSxvZWmhqU8WPJ4q87sWtFAtPpnCDXLR8FZzx5ZhjRe9i4Vdu45k3vJ8j325TyoH1vY8qMsV",
  "key32": "2UTnaLn88P3vcUnM4GhBLoHmdWAu2cBTttGzU2koqmwT7h6MwzFgp1VzfihXfHc61cwvzPZ4VMUW5pAiMy3fVadR",
  "key33": "3SKQudDjVHhugc8EBbzYAafv4t1aMMKzrLsr9iVCs8paoerZv6s7nUrcw6cEPE2h2U1fnwfwHc1SKDN8e1YudpZh",
  "key34": "5bUJtNjGiBgnvfNLdasaH5dXWjpKTB2dTnS4SkUtWvHHRNQXugcSC9sYXkamrNPvpzXiCFqSEDh2vGxQhxLAa4MH",
  "key35": "3H4Cq8AhSUqjPFDNf4cjoGc68WVp7taCrCeqaGqJTdXZaPHkQyWttoUA93Sme1jGY7qt95RkYh2iuHtVXMNWe2A9",
  "key36": "4eV3nPiT4oLo4u1QgK6PUt2NhRj1hwzSZX76tuHJVqHvgCcsM9iD57rikosd8dRhSZydSxFYwmSJZJ9hDhys4PdH",
  "key37": "JkEKEaHbRzPszUGqN2LgXj9zfQTgNoRLbfpmkcXYLqwnKMcDwNvG2V7D6iuYFU34xZtbT1jt3CKzK7d2f6ePGgE",
  "key38": "2pRMguj6rfpQRD23AKFBsv6CqhRoVWm4qHotrFqShACcy5EQ1dSKEoWhVWCm3GopDKUJPKoXZH6F1V47ZyFi1BcA",
  "key39": "2Dzn7X6ZPYL5rF856Q8BLVeTYPD9KEPAo9FdqBcgQ33yFAzAUJjSsLRmkQgAWfkE8AJwtj4TeUWZEbJvkvVrGdTp",
  "key40": "3seXxHiSotHTc7yPdh4aBCd2tUBzqvo8pZyMxFtuLUg2QQ7dbV59dFbcESfRLCBYBb52tzhBsVsQEXZjda6C8JCt"
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
