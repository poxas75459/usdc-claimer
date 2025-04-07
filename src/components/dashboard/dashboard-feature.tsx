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
    "5RPoVrJzxb6RtW3bdRFBD9HyJMTKaHPyH5KjnxCbBbbrsGge2pipeKgqvsMMUiCHvG54DZM3rT3mH1fvweX4A2V2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "roDt5Lgj4A2DbK2A8fttxqM1qEStkXKN1xcWiepzq3NzR9o9NFFrebnuj3Sro19EpQn83TBtmTDEg39qWDpt6wq",
  "key1": "2xt1R3fswr6nyJg4ugoHSYb6C5niTzifnEzFivNwNnNRqAHY77z5exY6tc3UE8pfwwXR9Lx8nVhykuQCysnGgQiV",
  "key2": "32gpstWEsxNuUHrBrYriSE4yPjnXRu4WSjJBgqC1eW3wqV7eG5m2iP8DXZ13g1TYgjDFohMqkmivUnfokScyTAjL",
  "key3": "5Ax3VUrPFFc5SLjX341c2SaJot2YWCxSX1chDm2BaigLfc6F143MLEmbzDMLhHbcgNKJz3AWFddtZtViuvd8pwQ1",
  "key4": "3fqbJM6XRkTc3xP5ieGj9t4scCVBNFKBsGbLfB73Hkv58uwGrGaWgBhvyZsN25k9h4gxqoZ24Be9qrcTKafbfFjs",
  "key5": "PPpEg9UZVtymXWKbji6D1fj34dkXiCbtzb6CXpsARMqVsTDpEWpMhAhanDETCaRrMJTxtb23ymXtU5ZeBr1xzRk",
  "key6": "3Rvie43BmyhvYVNjKv2z6AdDTZhyotjFQuc1zZc1mNBiV1FyVHA89C5BG32NtCGtaPPxuVnAXDPnEFJLHucCgcoY",
  "key7": "2RHHAybH9XyVzRsDyXGYW3d7M4Kdrzpohb4LW4vuJm26gaLLJ5boLKHG2tLLAWucuxtGseK7JKzHw1otFqQaGdZb",
  "key8": "437wFukqayEmfpiNh8vM9zweFeRgGBN46576C6YgToaE2r5qCQpjBRd8cDbcRowobQNCFbPCPXCAPwHWw6P6R9HQ",
  "key9": "3xXcnxQfwdMBNi9iHE4zj3otnn5PEZvNFBUyLGiCsQebgxGUK1V3aodZwiXZXmiYpdvET7SxAgCpLXNBgjbHXfa1",
  "key10": "5Yog33TzxRJVFok3F5GKWf8u7qLViZRUkz7NnJNofr6PH1KYQwqq7LUqgfXCLWvyUnr8jx1e9dP7zrGrUjsdKWqc",
  "key11": "22xer1zAweKqrp69DsamXRxN9oF8FdDzbhwrQjCpCX3LDYQ2xAeZDtWjKHvojDvg1wreigV2H1LJkKPExQzu7xAD",
  "key12": "4F8GeDaBTQcEXE8Bfs4DhECdRq5CPtayGaxpyKTUvNLwyU5KreF5Qw8aC57k2qkufGKS4wsshfjEo5yDUfXMpBHA",
  "key13": "4zQinRqRg2ky1wwLqr7e57iUT12Ni76zzhT5xzroAq173LZ4KEEx8xYcaTZ7u76wLdTY3bMzwjiStu8aDWCgU5Kh",
  "key14": "b367cJQUNnqbUEQevUFfxqoKcfgwQCFyR97Co3mqFHzGkxj5ikFg8ZVBXi8ghpMSuJ6yxV6KpWnk2dCFFzrJCSU",
  "key15": "3LWTSW2B7aX5baFohpGj5TmvWAfixk4bJ9WXJgKEiyirjtv7n9xnu5CtW9aFsCSafb1Stq9kKUiHJNQbDu6MJM3P",
  "key16": "4p1Ehq2JvGuWbAbGtNvZkdSJY99QCJNzrbXpGBgSwmdyUNKFkTN39fFp5p69QGNxniossZWv4gZpMwobmcHCNAiQ",
  "key17": "2WbMLZymnqd7atavJhERLmDuvhYcL9bJ7kaYha8k3Amg6f86PSVgPgCjvbXcZpNxKeGCEZ2w541EWGGB5nktFiB2",
  "key18": "54mtgF6eCac1gKKm8w1Uxos4BsL8AJKEXyvj1nSaxhnYn1VgMHcR5gA9LNJV66JUF5WDosbEPZVbzK9nu9Zhfv2q",
  "key19": "3BmDp2yKy9agH1XW3QnfnTs2UEoZhmSzVqjpUDMkERMXjaJNp7ore6uaoYF2nEGeM22ojEZwBpz2qNTRkC9dF9ao",
  "key20": "2tQ6oYhLyG8tp6SKTCZv27hxkGo69gpZJ5UYZU4UWMSvFqWwyiQQpKnMJ2HjuA3PXP5zmarsm39UhQmFLzUhLYPD",
  "key21": "THvMcd1wJjKWDjEyjYpa9u4vj1yWzh6vJHN2JGD82Z3wE8MkdXtEKN6GX4h1q6D4L51pgnrk3s9wL524JPcGxiV",
  "key22": "WkfDRb1vQb9a8jbYcuPkhNNLcttM1BSCsQspLJw9kSDrFHYCM3cWvVgySpVQVh8JnT9i5a6LnY3NdD6YDNE6ADu",
  "key23": "5YJK41FJht1nzKs5GXHkCVq8aBA3e73eedUxfVKU8JEKiR18FQvep4NHGfFg3vj44zpcecY3hiWr2YnKfyiZEQqT",
  "key24": "4LTtYu1MSZgpePPV5Wz2N8cPCY2S6pn3ArYGABNtJqGW1hLLaVCMXwUYQztmzguWG4zP8VexVs94R12DTC3KHnaR",
  "key25": "YybTMvqYxE5ZwP7NhG4kXkTKTkHXNeAN7jrk3AYUPUaDpjoqDD5BrjwEsafkrMu6ToBSpqASVn69Fzjwbbde2TR",
  "key26": "2QtPjFZdGYjQ1sCpnnvVik79VpfquCZAMudZSpTHWxMh5EsbjwdW6JPZVr5EsWiKyubmYWSBCVCJMcpGCPCRPS9W",
  "key27": "4Bi9iFNfXzpAGqxCj4q9SfNibVWTchjiuKoFamb481W9M9ueQMpiVUy9YnPgMFnfdcZqAqEzopgcsJ98Xny14Qzh",
  "key28": "35j6MJk2sDt98nA8n6sNJxcLzoEyxFg3vYe6EKKzcKbYa91ZTvtJT4A1EoS94EjTBt5Z8b3S8w5jSb93DVDc6cCS",
  "key29": "5tNxZFmjKYM7StCTEEdNXTboUaZCapUsrAXfFXTy4Y3N4KpqGvePf9hf89GwHVsv1hbiEJPGAivVgq53tuwjewyi",
  "key30": "vpbZm1X6BWeqwKtiwY1ecCFPyRUCaWe4qkPqd2QYStY9165eyhPf9gtFPG9dtbq8ofQx7BgkQpN9oAayNszFrW3",
  "key31": "2FW9USE1G2k4j8dPETwWxfyfVnjhBavsgCWeuvY3d7HztVespJvtYxEv3sGbyAeTHq9aj4dGpVhPzy9KHNbejgyc",
  "key32": "25vq9v5N8qHHZ2LKR5T7FNVNiB4gGXt1H2Y2v6DkSp3dZGPNNsFvSDx8R51detMuCxjWwhARjTDZFzRwDvZXjYGy",
  "key33": "NU9sTYome8WPjmzMri1SQkELbTuycRdHPrnSFdVJxVPdcj3ffPLmR82S9D7rZFAGni8JGwkQn4LDvLUnH3HqCUs",
  "key34": "4dGEvXzPUufDDnFhnyohsNLpHLePKvpnTwsx2qD1Lw7NRJW2cmS8UEo7s1SxbvDtj8eEdLTfNdWuZDX1fgYcUvP8",
  "key35": "3w1fcRDxPuHpaC4MAdGFYHCgz13p8ekPhXTTWUDPxP1froWqMNy5D3TBYtRybz9C5WuEGZokVypw4wrSZePDQnSF",
  "key36": "exECaDudhi2ibfYrRUPS29o9U8RR4xUDhfbnz8poXExpk2dnvcgJxHtaZMc5MRSFeszu6RhSsNqUYBiLpbFwNGZ",
  "key37": "aCTd6SBDCWURJPTAv5ppZnLxrLUeXoRbSLdTsQSqQoPfkzNBMXxrnCHJmT2oArmKYLuiS9w4TiPNViZtVvUqzTQ",
  "key38": "skDFZeZXexscKUezsd18EXnjfahq9c32JZyPj8j1JYfE8ifBLnaTGBR5SYDkSyrzd9jp4oHxSH6kD7954fqdNmS",
  "key39": "4NJh4L3J5nN8J8obnW2Jh6jGULHtJowj4mozKsSTRgimSzPmeYh9DNVoaB6GV3ZtCR9qeXpUgfk9VdzXj6ASrX3o",
  "key40": "bZYkfc7t41wj1mds7ATnW48W3w6kTpKpivgdqyc5Ls1wNqcvVSEFxbVzGnaKPuPLbKieCPs4UfZmWt2DAQqoagN",
  "key41": "teSkokg5VsKZKpHk8Wysw67arfJhfQ57bJkAK7vQRyTN5raRPfa2CtUFYCqaRbShy4KCDiLfdB8KRL29U4rE1G3",
  "key42": "2xa36xEc4bFqMnwJ2rwFW1Yjb16Uva72hXB51XBQkEyN9DNopqg6zsM3Yjx7KrZsjUqqo4jwDYeN13N8mKbV9J7A",
  "key43": "2h1CVJ4KLSyURtrKLavYx5Qa69HLoshhhoQi3gVfh6UQ1kAkBNP3hvWuzma9n5QQA1tJPsgcooHmHjBx7bstPq2c",
  "key44": "5xwSuqsgATrgpLgs34RJ1E3M74gif2xW6grr7FDKwkMDumd8A8ASWHGVBHVvu4Jnu5mriPTeieiHWSTJMju2LGM7"
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
