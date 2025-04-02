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
    "Y3by71fbw18zBHNWjazT33uaJRqCS6wh2Vf5EUsE2zKdFeqSdbKEcmGzHfTcwe6S3Cc6eLxpGuN8Fd5Von7pYEW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28PuyZc3Dpm5BmmKMe5tDaiCpra1paR8X9qKbbwkrWWnvYuFujQZXQdPvdaNzWXmtMXRzjNaEA9E5vZkA9h2ajPe",
  "key1": "2SqFm6cfbppwfMkoJ8bvq1FeqZWGySByvwWvRQ8hygwcYkhmr4zzL2QFg7VDJsYyJxcgG23LefU2yDMFbgXWxcEN",
  "key2": "3GDY28i2xso5dcgeh3CkVT4jjjAJ5rPQDDZyguNGnbFbGUP1iFzN8yteepu81BUdPPUFFdZh5qeNJZexqWmFGtdD",
  "key3": "1pBJdoyc1x3Xk5mrvHSVAd2hV5CpbZxduxDea1f2sK1dNzXjyN6iXXHQXBKu8U9iFocEvYRgBfohKFSrDg1uA5F",
  "key4": "34dpzsCghtfvvVLMwpXvkZ6JcPT9VVpscydGXkLgacBGhfSNLmxs6MeZf5ytXRZEmSapKS5FnqVEy6XyBT11dBCC",
  "key5": "2439LD3o18ByMfpafaRSoT58B8JTBo35XCagCkWAnV1sicNyZRuUBi36cufKaiY5MV1B3UjvZ81YGFQueKwJY8fE",
  "key6": "2Kxb1vXULBU5kgrFAQGoaNbWVw1RoN7AnJha3tcdEQEXK7d6XXGiDx2k8VXNGeZeuAfdfmhkbSNksYdEkECG2hw8",
  "key7": "53HkJs3vksWnwWjGvdH1QheiB6m5bUbj3atxoxaLpQUa7o4KLU6b1HG67AmGhLYwozwxRbRuNFCwVoJi7qDiJCiZ",
  "key8": "3hQxjaG5gAiyZSXoQJ9xiz4bVjpX4xCuJyut7vdsJzLPZnBDULX82cxTuRKfNYCWDC4a7skmvwdK3C2jWjtQGzxd",
  "key9": "3EJsj1eqE1V2suCcBCsPKMA7RYrr3yB1yTaFfNfjNTEGXHDuVfrbzpjCJCpVvWTRpu4xQzG6bhhJF5LmtHc2R7H6",
  "key10": "3oZqfWLeLqF2LF61S1L1r5D9APHWaN6YPR81Xbs6XtcbYg9MVbmawq89DrqZPcaphaL9s1bHFfr8X3e3UTQiyH3o",
  "key11": "3JevXErCMAiZzxxuak8CbpHAGemmP7KgQzQsFS5cjrkrxrsRZtc6KFhUcGwy4jU2H985jCpFSDSUujrGvXHHT2sB",
  "key12": "54wfUDAA1JBSpMzLtwjwDjB4RwrEvLxzZApRCULwwpoTeDuXDJRBEymFCGXv5YaEaAFPGuyB7HXB9YiMUmZbi82L",
  "key13": "2HGuvAjzSvNahQEVUP7muKBsxmbhYy8vzQAti6skZXakh4udmHCHBkpjp6ej8STQvwc3Ns7giXYtQXyQDhCBLn8b",
  "key14": "2gXSMPq6SVDhtBrW82MXwckdqwVGBCMr7aCqXtY1iVMEMKUrcHpJZ4Rk76bNh67iNSpN4rQZGfdeyZqV3LRMMSKx",
  "key15": "2ggjHs8dN9MxHacFUGzgqiyzQHjBCCKnSPdscxVm1TKKMkp9WMxHXNa5FayX3qTnhDAiQMAA5oWpLPhqN9zm5Nwt",
  "key16": "3iKmeWtL79b5La87wZpmkDCWNmXSM8QT7D592UWJ5eF2vNmvCtLvxQYVsZQ9ruggpkRYWunEtUX3rnaEx7SjG3x4",
  "key17": "98TKtoKWnH9FgehBMjL63LfgUSxrHdsiH9i631Q9XRiojnJhTmTsZcSzinj5aeSzjAM8J9ejHwiKKVtiPZmHZkc",
  "key18": "2nH3HqHiK8rz8EAokTdzGYwqfcQK2juVhsNQLbRHXoqcdg6pFPuShtECuUmVi5ptZjCws9Z6pXqmtmRa9HH1mCvr",
  "key19": "3rhGFgVSDJdXvStVDaML3BcAQnG1eb7A8T18dacTeAjNxg7pNxqppMGo47TANkLzF4YQEXpBsYgEd9o9cgNEoFx",
  "key20": "32mMixuKHC2KC4e2PspuE8LLUrBStN6GtUwYsnBuMPX2wRiz4TZGjtTTmhoYrCJonMwagivzpeQE5VJruhfhitkN",
  "key21": "Qepg2H7qDDYPSX2N3CVALbWXTottXHwLP1Qw6zLdwQZECZbSTZTuAp6FWUJvqTad6Rk1sgJnwvjwoWDZXsgoQD9",
  "key22": "3dS2DXiJmgTzMorEAhrsbtkvDQcPqa2gBUsRnGggCrxxeMzf4gVwV8QJJfCcTWD2vZtgtCzxaKbFW32W2kB229L5",
  "key23": "2Po7oEGpiB5jpKaxnsXBZQ7GgGWtWQGGdRGs2Wy4STKhRuvaKCN1urbGtyjq3EAtY6Es3r8Y1gm1JGjfFR3ygwiN",
  "key24": "pWtSgkLUjvDPN1pBLwfwjCdaAi8dJ7d2Qz6Yy3mx7tCt3ubszgHAuk1QkTHAx9gvxeMpXj54NUxuKQ3fCUrS41k",
  "key25": "2WySLEtpUfA3EuDWE6zEBj9n9aZcEAzqLVbRNPP4XjTF2UMdNrD57xLYw9k2V7DsqssR6NpKp3sBtH9UPSwBNMAo",
  "key26": "432tfZgzCSPw2R2k97NB2Mi3QhxR34ZTudz7XUu53ntPKMzgj7VY8mMRuWseoa2t9R5dufzycs1srzf2aG5vmW2Z",
  "key27": "42Ws2gtQNdqXsswyX8X2Sw3gLFc1FaFheLrLUWGRYABvTtJwU2vv2VkMQgTNb8RuvXrR5Xu2nN1dGAiGUdQyHiqW",
  "key28": "21e2GDggSwovLdSuitcQbNqrjww9a5sPSM5W9xjQdbv2JJEKkSpAcPTfyE4SyDPe3w41XsZJGSf5vu6qUzApiG5r",
  "key29": "4LEKhjCpiGX37JbkMJcmJ2MFnsDDaEAFymKWmCLxpUte1HV2UyyrFxKeSZ8a2cyohA5X3vUuxPDHfvdEum4qZ45p",
  "key30": "4SQmutpHWNforE5qi9eY4NFTEKLLvDgpZKKsLzZYmSS6eeW6Aa1Xb3Tx6VdcHdKxb43Z3PLin41WW2F5KhfemWco",
  "key31": "2b87SCJw2hY7VF3R4Sbm3uHYkUdqXr7ay8Q8TacPEaswq7oDevoVpw8s4VxhJPbCoBMRUDh934zbKKuqyMi8UcTN",
  "key32": "ihvHVKat5BC7vtdswuC7y63bFqAWcQZjxSDnDA9yFxZEAzTM9HLTgiXqkkiUNiSx4cZGiYvgcHBCqMAeJDFE6Wf",
  "key33": "9XVgdm1MnfmFtSUAFvRHjwNxQqvEMVaEP1UXHP8Sg3p9LgAA1KHJEbtcyv9y8oW2o91sBh2pPVg8A8Z7LBM3zMt",
  "key34": "3ttwNEEAAgmWzht1hBYkV9TBuMmKPFHgSJQKVLPjp7aBzkqmmF6T3i9qb4Fdo86VnC6vTdz7Hw2zW9LKs9XC1UbB",
  "key35": "4NQR4zkKrfQaVjPXEJuFCgFpBDGbuYRxVQx8UYNFisGfcThXovLjFS3XJgV7QU2Cnj38hwrfF1pRb9oeeyGkAKmQ",
  "key36": "59A9Zr3di2kbBjeJPQqY8a42KViqhYcL4b4kfg6orXXqsm9PPq86yrvPcrJYpu6eo6QfiFpcmPkTx74GTJABQ8wE"
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
