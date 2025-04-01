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
    "4SiiEhy42N32xDnynxA8aPeKZhEp7FKVPZ2Jzc9nCAsQ9AME8fF53k34C5z7einL8W6G65WNkegNFYEme5Y3axgw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5K9QenX4fpTj4whumKJMt27bQPA5JEa2qB61n47qjdnsayS7mRcoGQukbxZVgxDAgqr7U2XXU55nS5BcEgQroYMG",
  "key1": "3ktCyUKVzjVv7f7r3SwTqAFezwSBchLwvHqE3SxXQDgUYtKZeXzkiCnECLNYQFLhyP5D81pDF4exxtWxQ5BJJ6aq",
  "key2": "65TCv7sG1aLi8owmikfzV5tjagzvNs99SiJ1R6H2p88UJWgJs4osJ5hkAy3b3LQRN5cpbDtYaEFSLa3kVtZkN1oK",
  "key3": "2CQknRAA4TEVLjpru8mTyLh6HhYZ2DMtkNYSjP3NvTDnYXtcu5K4x2LuKGYhtg5J8xi332qXRHCneNLQHxWjhj3",
  "key4": "2fMomGLTBPwJywajZmDjW2p3AjBczY46T1CBoMFER8fcJBWtTedyScsAztysiYgKdDRTe78qRBRr6fkfQsQSgKfy",
  "key5": "3spGLGURV5AMR1AVq48dXmh21NA9VnMXwrAJqr8in4FgRSugMHLYNSHhhmuKCnDiKZwQ9nBnwg8HrUH3pmbQADKp",
  "key6": "4CBeFkpeH7h1KcaW3zNRsLtg3S37Rm4LJMuCWth9HU5zoPNJBUy7i18znPYpnhsryABZXdpCmj8joG4KwQyifBYV",
  "key7": "3RkzLE6NtwGN8kiJWaKUwG9zvwf9WCDcyyFWvJ8RDHm2HwJKsCMgNa9c3y9VnRqB6iFrcMCDdUDmX4JBi5f7XDN4",
  "key8": "5xLZEz9NPKGmmh2hLWc9C2Mn5HpeyxMmpW4WVnKYaQr8ctLskxL2UqMwcFTNLqaRpthQBekgeV44hhLPcx3m37FH",
  "key9": "5r9AsDDDLBkBrNZA6LzgYi9AGo7oVFGa377z1SmcKtksKrxtdyyx2K7hhJPWiX439cMNxDairt67dUtoHZtcQdo6",
  "key10": "5jcTX7Aqi273X5w1qS5ehQQiBxERs7SFQPYb6xBHMGJVgFVTEUsUvZ1xhB7EbD1NbnPsAU5J6bEv6MeVD1QhqBDt",
  "key11": "3kQsUwZttmUceL9RDB9RRNV3vgftV5gjagioqmygK74RrRkWLGSphka2C9xwEeTW5umwsqvqboq49KqNiX4CZv9n",
  "key12": "5tTVQu65dXL4hxNvYaKTryP3uBCnd18og4osWcmu2ZYFxLsq7kWa8J2SPW882rZL1WkF3DiqU6ReRDz9ja5MRYUb",
  "key13": "5FPP4gyzrqBVf2qYJsxdZ3GyaGVKRUNGi3rK8vwoZ4nRvWCZHzTiBKtANbzNywP8gQifziRmGAPkDwaXFvHL6Jg2",
  "key14": "342bp7b5Z8M7bnWb92sTcNoyVDwJwEwhUeUyqGRkNMhfD6pSdTveQ4EXcJbjihvt1AKmkcntJ28BmEDctzwTHPzb",
  "key15": "27azXx48gCko2xJ5K7T9ZtK2Ck9uJZJvZ4M6zVdjzwFo6W4uhejb2KJmnbueReQCY4KUQsFdAu2QATneBx34FFCp",
  "key16": "4LuAGnqZfRvK65AMsqqBo48ynMYAe7h59u6Afp9o2KB5qfGumWBzrwHBj7MtLedcs4VCGFCxuFyCfQTZcFDqNZPr",
  "key17": "23ywk9gbmBd33Tf83xVrNa59Ya8BKnUg81QqwZeL3VAN23LMQd7FMvwd9fWMmJygYhsMNJNzNoaVsJCHN1U7KiW5",
  "key18": "5qScwhdaUs8XvabF53BNsRGEwhYRJEJh8RXNSC3LoZ36fXNsEdYXXfe85kifxYYWxMjkCYDnb1gsXLWK3Au3465p",
  "key19": "V9KriGzyYiGZ75PDQMixAEUTVLsonF4Ke6Ge7VFZtzMt21jJKfQxa999CeouTEujoZPCbhNNziqjJn71wCYmm3d",
  "key20": "3cjH5D3uWQh2yYa9F3T3EBkCVA1Wyjek1rkjbSsAyyM9W4sDHVvWJh4uxdnXgiR2DX7TXc2Muin1qSKEJB91HNXg",
  "key21": "5tuKtLs4Qyxt3DkVrGSunCjwD7yWXwCJKniECNF8UhqCeXhbU5dZDtZ1HVs77SLqk3tP7tQD81ZmfXvLGJrqn1rQ",
  "key22": "5AVN2qFhFe7o9D6zZkC2bQ5VWT2mcisArxEzQN2PFvJzC5Yitrr7mVUJ6PzBT8ZyscnL876j68wxmhjJFDC1GFsN",
  "key23": "5GWt4U3k7Tog4PRfvauQWk9aiZ4z9XJu5how8ZHTgvp77sok8CM32mgu8vLAQnjvX8MmituR6uLc6iuMYrrjVz1N",
  "key24": "5oCB9XVhsWeemEQSc4FspgMfcskKriRVTABx5YX7rEcCzvxZiWeUnT1x1S86kqaXLUCXCm6y5Ck9Qj8HVmz8JCLg",
  "key25": "4uPcBSKN9D4DQ3ZHooWECJvU7xFLmD5QdzRLkaBCF1UznHSCyQrcfArSh2Sz3bmgg7yqvKXS1nK7MP8GfUMgpiXC",
  "key26": "2Jn6tgsfZStpkawiMwn35tmC4h89dUKe4iFda6Ue2bJyoUNyesvNW5cwjsoHZZuxYYctWa2uLzrScWBX5Ur4sBxk",
  "key27": "2rayetn1XwAgDEFYbozVEdxcRaqoRJ2rYS3hPJfRsKbuaWfjEQEDVMezJiPsAS5SbzcQhch5hGKM1puAuGLhL9C2",
  "key28": "vBv2k54DAdDwxgtDgn9AQXf5aFmeATjpMzbRxRH9W9ofBPUa4fqVjVo3ntNZPjiSptQFJo7usE3WaT1AgdshJ2p",
  "key29": "dpJKDzWxmqJxz23sBvFFL2WDicbq2xaehsjBQhe2buaEYMVHkjY78Yy8SwarvmMDMXDqCuPruHFUgbGp5FXFDHK",
  "key30": "Dpd3zVv4KTrecwcYcQ2byqziEjfcV7pW9Nb6S86sfMHmQ3eC2Zu1E6JZ1G2PavmwjBfgn6unUHmmQrmb8cBkufe",
  "key31": "2eVsksiWpP88CMjTDVYLQ9Lwh7wpdtSB1KPBmum2Fap3Lif98ZCTGqeU4uMV5CM9ZzWJEJbKCiDZqj6WbGQb5DNz",
  "key32": "26eVhsMvbnbSzqRXraFAC5TUiRm1k3p2FdFEiTu4rjDGTwwBFMJ88Fc1r8ZqY5ULLqt278nxsRGQ9ePYzyQ5gG48",
  "key33": "5ZL4TqTJfSEFWcUJpvSvmUHva4wCReStdnLAzssKMymHpkrEizeEw8kvV2KZn35qbQejj86m8gAMDtJ8GRXmyMbU",
  "key34": "2wSzJTZ1ETRQz9SLMSxiYcMqHkb6psnDZC436ucUgQwBCb1YxKxjoWb5BdcQyoAh5WPLpHoNTya6MfWqiif7sxKk",
  "key35": "2gVyydmNCbQK2ZbtiT2VfcrdEX7SUmv5h1dz4R26tRuQWBQCu3JBJedNwpgVWdiMYaS2jSTtd6VCXxVyA4JwYZW5",
  "key36": "4SyGpkquot2273ayPQskgmP4FqVR8FwyXSmrUwhw7RvKmyMHrq8ADb2aTmNiGY7NWtt29wrAusg69CCpqRioEnVc",
  "key37": "4UTUuf4wQUc3AMVdAVtYSUx1GUTCy1BmLNxfttijMLTdkZ4523o5d1eYPztsd26p4rYFVYQ8yQaaSXbbEqAWjGXF",
  "key38": "5Dqz1iLVx4WEqM3XYLZifChqA6ztKbpAkvgs1AH5H4XFPmCzF9YvXk4TRF39D6Bwott1XwQA6yg83DhuPMfficUU"
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
