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
    "4fEBW4F8kXn8QUTT3EPX2RmbAc7in2gah4Aha5vT1s5K8Ty68hLK5kzJ3a7YqyqK182bzB326U1mpoJTUUuG3927"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Gh13ZsNTZ29PVvvXrVjtsGmLo8ViYPzsEzH24nBpwreXx5GWu8vfekMNkZVLMvpG4GJsLF2HAD79e3pzY5gBcSM",
  "key1": "4betax5RS4uoRdqudrWg4mSX3BLW3STdusNBmZB1iXirvy2p69VhWRUVhTixVkVRiUWoHSeo9udbqMsmCvZtHtY9",
  "key2": "59fNeKemfV1y6N2X74LWnPwD94gTLe3J8A1yX7x2CqVkWkyXhYBByCajd619WQ1gKt6c2vGQcr39EH9bkSwggeFK",
  "key3": "3nozPRpxSHXxna48vSN4Q7ry2sfzbymbW15JxxvBkE3K1QviRqWbowZWp6CKCMDe1ZhNk7Kwajd951UZxMtd4kFu",
  "key4": "22uq1gce3A8gTmapu5bzFKu1uCt2dbfEJp2nRmxNRTnKJETi68JK1mSakYtbMocnkf1janssvFg2vMNdXU7XLNAB",
  "key5": "5QLXRgcquMc1fJTXezxbdzaG4hN9ZEsYB8VBV57FnYTirSxKmm6Bh6tvctaNYgtTYUroRrSvbUsQJgsnYuN6nxJH",
  "key6": "2cLQDKcf5PtfKfPkUrdQ2RTiWCCNwL1LBv7PT2234VkU6zjchBuo7nnsfms2t7rusakqrMRKLfmptoahHckDvZvk",
  "key7": "3kRxrDB2SQaGSzrSYiMsVbnTzjwZbQ8jugUpXBR7vaKeerba1arzw9Xnue4t8hv79H62gPsUepZrpzKW88iSoxb6",
  "key8": "54qpjKygG1DUkRaEYLiTdMvqEV5VSsFicoqY9fMhsC3hY7GNwXmK869RU38cDcyxUFHsHQQEGEhyNqt4pUwmeXs2",
  "key9": "wAPYAhuqWfZJR8VRCPfM6TQaqGTyWif7HNprbRFRaRPHvnTFKASbSBAs6qPWUDAUUbPh9WjJ134u9ErCscTj7EP",
  "key10": "4EBpGQnsj4z11dH5jpfgrLfCLBAqFJxd2NPyLYUruUnjTRPwM87MdhYUX1gMXPJKA44fQQgD1bsub3BrFfq5nbRf",
  "key11": "5ijteRBSymGBJ4HKj917EYSknBY3kaFJ2AG8wqhaqJzWuKokvBAbkRVksa5QBS2wre5iXFiwfru6Tqtt26g3VjaR",
  "key12": "57z5e1XF1CuGavMBY2X7D6BVfMa2fqDuSCeBC4juLk4TfAMm6TVBJaGXKTwjxd788ju7v21uuUDnDouPs91JJwmv",
  "key13": "VJ3ssqCpjbMNe6uXxvUcyYYQHiUea48xZtk5tNuxEKJWxipMBWW6meBuqSaKEk3yHDa5T5GkZtppzqGDvv1rtHr",
  "key14": "362az9S2mtxeoLt119iJjnrzFMddWZvxYvqJHK2PWmcEBsjxNZ3xkqzaqzLZbJxsbBUnFMdY7Uc2tXYHyutMgNYf",
  "key15": "5wFYHkoD7CFyoou1w7nQFHCsWfgHKwAD6ViXaTTJsoTp3faRZbt88T58sHYb8R3trtWYqtNUq9yNP1NuS8cJKLA4",
  "key16": "5N9eMDiMHjrQ6Zuh5DRGZnZMKkjBNqVZtpwj9FRAny6K3H5H8NWq9tQbxu59gGs3UTkujpYT8kU9PFjt9hi5UBN7",
  "key17": "rzmMGtAHr2bFmyaF1Vjym3FfYMfk9EqEFt1DdpkQQ5ZQe9RELhokZu1t9sQdAoPeP1eE2dfMYK5cXjeTgmVwG2h",
  "key18": "3NevvgqMoG8Uwbo67tHbNB9Kxjpy6tNC2yDP8tFy3K6AVhmpafmND9an97g64Zyv2dhTfHyrftv7ufEniBMLqNgS",
  "key19": "44dzPXCeh7NyidzmTz9GT1reMhfeczgTwbsod5uvZY8Vf26g6S27KBFXVWCS3kjWQ5TRrmYiahrCSEmGyikqo1tk",
  "key20": "3EZJhdRK3rFL2AitcaEizRAkQg3X3yssMQLjj6f6qq7cam8Lr8osEGU8sUNAxMxqDi53TUiggUhfeipD8ieY6GrJ",
  "key21": "34AYwbFjJMgSs5bRAWUsE4JV1Thdb9ZtEGHf6JigMBJyQuJ58Yces2svgbGCpgy6eTzu6UtiajxpuGs2yreyRzZJ",
  "key22": "Ngkq6SDrCiP6w7aFkviNrBbikDvjhmkPSM4bQahxp5zH7BD61tLbDzgCBZT1HhJBHC7VgtnphiBib9PNdu3u8kJ",
  "key23": "4FuLutzCS5BFdQnkFajvhtke3UWoCBT1UV6pVjcHXfymiyY6iUQXaYFKBwavWiFRxd5L1bsppepjQqpGUTSXYdpN",
  "key24": "59wPhzRmHkzBQD4kJr95pjYghxP441PTTpEnvMi7K5gyEtcuqryBRcKWasNvw83yRgrXZbrT5nosXhrVJc1Z33Z6",
  "key25": "5mdjXt75RQ1Ww1nbhKQjwUmvUmB4CEUSXH9FMjxPHk4jynSNd1xoqQiF7BXkQsPmfMbqiorZPu1hdcTypRF1PXTu",
  "key26": "3qLcycRwxbL77b7rqqxNdPVzohnTqABhn3Yy1pqmjPcukFDtWN1gNPhWfEuKRqVSov43At7XpCbBm2t8dH8YRAJW",
  "key27": "2JtXmMJ7SYffTx5BMCkXJFVbSza2Aq3aSK7ysiMixHoQWFWAA25h3dkCf4RnX2m2Fv6icqfdhbBDGBNt4RrnW6qt",
  "key28": "jGKTu8DK7z5KuYJPvGJdyyjRC5hYD79DAHBgCkMVr8BTtpCvoL6tadsM5R7K1UhgnFSTu9288upTNhwQ7XT1JGy",
  "key29": "3xUGAdBavKc1sEcT77Ym24meq19B6Y87mvsvcJ4z9it3p4QNvD9h42qqWh7A4EKoBiapxEXzWtgZQpGNDfa7Tfq9",
  "key30": "5Eeztey5BvFocRCvfvJ7yTyCHuRQF1cRhn2va9ePTYPcxo7ZY8v7PV3DUUEvycF6RWz3Ky2EUFgiW6wSBMJKUt5n",
  "key31": "5ffCARRhCfMngV1j8Yi2d4w8DrYnB4DUeLmMuVBhTfaRoYe36XthceSrnWbVHURdRL47HD9uMLzxPZv9Pa2jTcUr",
  "key32": "8WWXv22Q6NG3qUFpgj6M22no7Rgw2bPcwciae6SE3b3F8ka9w3G62eC9nKwY7Jdqafmp7Mm9d5RWMxx8du49pVh",
  "key33": "bo86PBjpHbJD9V6hb7SkfcJpZQbSjJQCFDpDLBMcD5CxJCS9JtiWLieUj6v4JQedcBsHmNWn1iBHYNYixbWGYBT",
  "key34": "4xv3kMNxeLyut1x9REZcZTLqZYc4TNNqnZqufrHPAZK973hpFRPtKwpBNzrpbzE7YcJL8zGv32PW7EeNpSXZwmW8",
  "key35": "yvCzJi9jPafL5GicP7p24BrQDKgE35dNwx4ftbwaKu1KVSxzQ5j6yQbtioMoaAL67dPP67nibquLpGqULnUGnU6",
  "key36": "4uTF1yfCqeWrav8cxRDxBkRYu41Sq3GdigiMGyecqWcHYicxKeVbCn375SBRS8SWqFpdkMUzDWyt4wJLrDBDYdpA",
  "key37": "uyMfL35iyBUkmekdrLEJTekw9fDcyyJVRCcAPAKAtWb6sMDLoDJxqN9mbMXVXGohRedT5ghPcY8eyW5fxwTc96o",
  "key38": "2eTkuhu3JQ9oAkLkh7TDmkZsbS9mRVpT3ELY4v9FZo6FRJwpeRfuLzAyc4UKxEFFJA8WGFJyN12rpMXmYWUZXEZY",
  "key39": "129ujkEFaen6ELLM63KyzWNVCyKU3HUG8uLMCCW2oqCZnYYbZDAtS2jyKoTtjgkw69QkGY3rAGX4iuwE8ymzdVeA",
  "key40": "5KC2HwTDmfDYijryHqG8FSYfFQNhXxF5dteDYJ39eJqQVWAib7Up8vRy8ijEaXT3BnsFkr5JAaBEEQbu79rFnRGw",
  "key41": "ghHEjqC3QkvGVdHgivGSGR1bcuLW6oiyrKAwY7M2mrf3hRJMZBfeATdHbBjWkREfMKrc2Ff1eY178Up6FJKuF73",
  "key42": "5ST4BGSBFdJjf77CK41SLMe3WdpcoszzviCqiJnbm5TAV6z8W71cYi75Ewzi3ar8BTWTbqetbHpwvb7aQhi8snCf",
  "key43": "3MzyCHd2fqkfboBZZhQpBKLUmNRpA4otzdHnMzCkQS2D7azFVvyjHvt8DK1EoNkdsEejdaBrr2wgcGWE3WtRSZGp",
  "key44": "bjKsuCgCdDCaHRmb5U2kLSxKVAK4YNujSPFKDi8n37VwAevjKfZsETmstdbK9Wep1SJ58zYYdwtjHs4e3MvjCku",
  "key45": "4ZkhaDLyEZUwwoiXZjqnQ3jXUe1wFwu68qBZENTV3rWZaUU77CWqbYF4JSnJ6xuwxsjPnN2hoFDd5gPy5SzQMRgV"
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
