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
    "4ZNnZL6nanoGgATSor8DNSRpDhF8ESLUugQ8SNa8y4Z2PagaDRX3mZGZffzAzAdFZ3qoVna9uHgMsqaEbpS84nki"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ktE3hotNUmhhaUfdE4xciTbY4F4mRD4P6vN9ijE9Qgr8XHyrKuRE8qCx3G4pXE5bAdhfUTuJZPHFU2ydrpnhbC8",
  "key1": "xPXHa5x8oJ4EZu4Sy496U7riy1ZkfdbG3ZGEPCfB1qKtbxvdmTpSre1hf5PwEUniuvKvJYkcRqeugaXVa6mJyGZ",
  "key2": "3QqzbzzGjgnqRHj3ngCNi3MbrZPZBJFiUKCJStQN8uwu2ctWCHiyzhMGkD52A4KG9DMKzATBW8gpZ5zgZvKpeZCn",
  "key3": "3Rn63xYZirfzLzHQdFwcUsA2cHcLncBmzvrZufXxpbfjTKFqJBzDjUjCcUhGKqUi7KmGJ61yrw2oD3NFT9EdWcsw",
  "key4": "3Zancx166aDHDBQXkprhoiYTUxEnzTFvtAXknhgMn31vtirH9CCJ8Lq3cKt8pTDN96qSWZkz7ab8pt4mwvnsL6MR",
  "key5": "2FDRMc9S8dPnRaRWxCnhkJfpVis7hHoSyxwFQ1PkABuqQAa9YEqZiVfm7osbjMttnXpATqemGN1UGswrPH1dCMH9",
  "key6": "4AUs8mz5gzrBcPpPDWM6AWYFb7qEHiPffS2ATZBomGQLnooLGUpVa6prp82him1SXHV852wNuPKyS55yMmaNaS27",
  "key7": "4AJ8Wi6g22uYP3K9a9M8k2k8BJvYVFcGGV3ygLHYCiCK61H6B4rDhkZoncv4dCnhd3aqmTkwM1wxBTKBgRnoSjfh",
  "key8": "3SJkSCd7EqLDqZULrgTuggim2cQRcmn71V1QawTM2iSzVcRjRVBZVN6ReKYrPQNgaW8jpHzSNze49kobtXYYLv95",
  "key9": "2WgR6BwuRDzzCaSbXd6auYdQauMoHnKxmjd1NkxfcPweBNNzJkM99siXW1yiLShDL1xMh54FnV31gEH86s1rJWnA",
  "key10": "5VjPceKqPKACkD64VQoftgKf8fVt7TRPmtW84vVfE1wmPntp9ZutE75MGVxSjQtd8HHdpWMWx1BuDAas3qunLgUh",
  "key11": "4XjkBXjnR6ah2FaNPMFG4PH51dV1N8avWkYNyUftapcUFiNggQqoHzmdpLefcim43YPdgF2xK8uSrDE5MCAZbiod",
  "key12": "5UwLonwEs6VsZUYvNG8a88jARpLhBDqetXBwZcAhu2J9oeMCnFsqD26dmmUML9ugRiSsRzCE1MyhSTujAufG1bPk",
  "key13": "4XjwXu3U1KjtfQKryeJ644mmGKRXYPsm5JTER2D5cmfj69tDB68VikBgq6Guk6CJFMceHxSyJiREbvvwgZjUd3xm",
  "key14": "V1Z9WubKgk9PGxsCmR2FCjpF5xYB6xCBn3MKL4pFtKViyEGhspBbBpKdGeyRytpVNFAKFLeRqsMM5QAiDZyjxW2",
  "key15": "3ipEgcw7j9Cyjeqdzcb3zHuftd47f317BfYvTUZaTt74igbjTtGLnKa72fFDwcV5n1Z2DjG4q3SnJ3ubf74WjDT",
  "key16": "5Pi6D3cuG1WvGVsJEDLHYZtSBVYs7YsuVTyhm1z9Gk9MtjiJ9LcvBsvvFNLxFoSS8Nwn5oajWFAE5RMaZJA1cJMk",
  "key17": "5dBCJMz1p9jjiyStBD5ErEay53fd27EmQJCe1mKSA6EcqbyRJyaDsfW7mEytnT1YTcVMy7JRmANcBueNj1PZsYcq",
  "key18": "8e5m4ikgkddY5o8ZYaHDpJgfXiqvUn8pKE8rBKhyUYpqF42WDoh2aKXEN25LgqLeiczcT9neY1HUZ2qyRVUSvnP",
  "key19": "3CyHxpSLftbbwwvm3dbVavJLSz1uhYviwdU65FuxydZW7xdZyPsaqsfXZmzBE9KShAcuQtfVBxeCQaHkcrZqxWVt",
  "key20": "qobk6ehrgWA1pAmnEVue9Z8vZaUrrzmzKMDy8hnRf7bruypqGkTp5D1SL7QMLKAfZYefMXxgLRb9Nwct84mUaqw",
  "key21": "3wtk4JdfYqv9b3b3r44Q2h7YBFBoosb3Hd7DLCagh6ggWyyT1SDHwqwSqWAUGkSyZpizeAkaRGYW4tzDDFiChsBT",
  "key22": "4mNUfDwGrzbkpoMYbv6CRnMhafTB2y8mYVKCmJTrxgtgGcJuEdCcSxSC87KNhmdn1YhxWneeFKZQffGQTaPpfQ1Z",
  "key23": "38F4qneDAf8n4JDsYsspAdqRaJEiSuiMqZLH1DW81QNgMbbSDbeHwdEhMFPRn8YRsxAvc9YgKts2c3SZTpaYxBHH",
  "key24": "37DsTjZ67FUK4g6hsUvTSwhvGTD4TftL5PmLwHdCv1HSUPLFLyXRtQACKFZP6wFkrC5hzrEDqg6Mpu7AiKDFTqes",
  "key25": "2XuPL86Ju3iTmxKC9LDkKePwB1i1jkgby2qVxYzqUcF1XEGZ4rcf4kNmFSQWECx8anMJQGwMmH1t2puG5Z6dnosq",
  "key26": "21vtXP455gKuFBeB1xkgAFTGVQ15zwWTk82mcsaUDjL5JUbq6a6FkTkYoFhcsXg8oxiMDDkZbbRSqZhaaa2eJToG",
  "key27": "vvC9V688tt1mWJ8ZFXSFLjZvuax8ziqrkJHTa7P9sKnqg6pyXknnKFPqVBcwj3G8ExeJqGsazeauFXEnrPLjw7v",
  "key28": "2GCzQVRUQn3Rn6JoXLoQZtoCv1PEtzQxHMq8mhkF4wB6DkomALhgu7cbhrc6zF543hDTSCXEyJYC1xA2sGSyCJ1Q",
  "key29": "5YZct927i2eUDfNzinLnPBmm6i9b8rB1Rm4PPaEtGtivancW3jRvGHGfB7pCsrh4WfTZoZ68wtxPAzsyAXWvQXs1",
  "key30": "2LzvBqwF4Djj2n1nfaqJgByrd6vPERuC8cphGqowjT3aiHhDMYkXinhQsXpaVy5qX3QAx1u2t9LeZ2p3UN7ciFSJ",
  "key31": "SCnoaPjiobMsjcDnZEGANSjevz7iZDg2gSHEqjm97sb2sJa5tjSYP8vN8yD6jsqjmcxKFcquqH3HNsTzdjpph1x",
  "key32": "2zUfZ8vCYxAWQHEj1bsMcJ688rCP3qXRFNeJRThtqNM6hV37wfc2jG4Nps4T2StvWdFBUCNKr9KgDiXgSoYFaZQz",
  "key33": "26KVymEfGv4kdYx8XxZ2RYZUhBaqvN2yMBPvRubFX7BCvpbAPXu3HH4WEgeRNhjgEBYouCb2WpQ5Sj4LJPAYvGQw",
  "key34": "tvPRwi6hJ8WNQi8UJAfV7D2gUB8jgjKN4X6xLQZC66ckX1EWqtQQb6QM2Mb2zvAofGTH8Hx2H36nesDWWFu2n1P",
  "key35": "3y7mVrRorxsALTKXjMjBa65CuUCWorADyqP59QNkmS35EtnwafKxHjXiLia4mrXb5GYrQqX2r2NiWkugXnyf8Xa1",
  "key36": "eiMN5vL3D4SkEoXW8Njt8e876dsSHomNgvCnZfSRbEhFpJ86RvWc4RsfrBRZrVBxiF7cWiX5NcD7r4PzY7snCui",
  "key37": "3ZaCdFdF7YnRGuZfwWM8LHjiMUSGEuWbSJxPkUTPwQCYoBTYmnhAiQQf1eNxcJ4nXDQgF6w3qrYhQfkR3RdoAo3h"
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
