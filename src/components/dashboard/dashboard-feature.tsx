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
    "2jiiR6cABRRmwuVWwY9WB7DVQiAieBvzUXuRjEw32FQX28erFG1EhMPTYiiqp9Q3wuYayjzrpipqFkyBUCJQnMpY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TqZzJwmm41Uzi2ZTr5KPs2hjhCvEZpNT28dWyMmAPtjJVh5Q6gB4oqjFyBsoEN6BErwyqm87D1qwCPgaq2iWvAm",
  "key1": "LKrYmeoV2kvzdmfbSni6ieqkgNP1yvfv8qe7kjx6TsAmn1mW3Kgy1HkSeLqFEn2ZgjvGdbepvmMrht4L6TasUxz",
  "key2": "3AwG1kRpeS1ppQ1KWPRRojmSsEWxEm1163wKBrsWNL6BK5xDWKmrG4PgGj9WfNN8hEm721rmZE5nWLMJbVwKZSKM",
  "key3": "4ovUjwyVqvbQXKUrDS999SFBje86svN9T1GUNzhZA9ivDfsEqEgYJoFGB6NrURuDwmwJRBfGSamojm2XUdapoFB",
  "key4": "3dfBMavoVu5Wtu7vEivrtPr4MkhvNBDfGhehAQt9fiLtxcLGFuCd3AxxaExUttuyRBRBifJr3b1s7KhH7qCVdoxg",
  "key5": "2F65SWyHJEWPVtNBD2dtdPZhFTKcJUZMQWnL6dUxhZFBj3ZFZSaLmLWuT8hNW2jjNX6BrxeXregNXAF59thxnzZL",
  "key6": "4997YrUP82truscme8QExnpTBUTSkSHKULtL7yaS6UeNutngueW9WssCQ4ozicCoaM5JQWWdHpniVVLgygf43ky1",
  "key7": "2vyn3JTznDyPBLzq9tTsRnmrkXgmQbHSCZDssYEfJmx11pCTCnp8KDrbKP3ArkvRLqemUyKDSevi5TdJDqcCwZGu",
  "key8": "4yJ5dLYuYNrbSaLbVcpe5TRahiriiVp7rXmvvKohi3rAzmXaj444p1hcXLv8LSxgvJNbeSmytCMcRhnii4dicfwt",
  "key9": "3jpdJiaAAEpfAGLRxRpDw2XZowAqBJ9ejANhPHAWweb3Chf4V5oqgGRWkcnxCPSY67UZ83bTRXeEdyy1aFqoBoxe",
  "key10": "4esFmBxN7K9tmecxJgNTECWGZkn5gvXnThyPr4i352rLvfgcgSsat1MmVSmeYywzJPYAhxVsj2HNZXEZJkixjaGj",
  "key11": "5xvN7oYF12B5w3x4zUx7eRnxyYUKB9kzzxSh775PrNTVjE3RXUUmUigaM6cA3mAeBdCbcMLcQQMiAU9MifDxFZon",
  "key12": "2jX8qqewnpJnKXKKdXapJrbmTGSDo6QN68CDD38nsodWXMLPCZoDcVuFnr5GiEq5oDojJX4YZLFs6yoD2t2zMcbz",
  "key13": "5KHowSmcj8ZwkFCzZgwjUqfb1BFUiCTrjCJjfUSLqoarKw8zQmAUvJN96xpefL5axLkDEqKMmgRj4GyFC391FyKs",
  "key14": "fpttzKB1Gy3jFXCVt6FRjwpcMAQcSt3t2tmP29vjJC3um29hEPnMriuH2ctoHnEqXCeVBHGFfUdnVZTWozv9ZqE",
  "key15": "4AMYmHBL1HgFZRZXZAjyg3nXoqjGkfSb6xQZu9UP93soVxxUjc8dHSDWKxwPBpRsc4BttbwiD8DoncnX4kRwZzEP",
  "key16": "5rUA7DvtWfXy1sdaYVG1N7wAR48qC2GhGkpiQamV32kzgiVhSV75mNCiHS7gi3JQg5qvMJ933iqH2JXw6J6MRobF",
  "key17": "5KeGBbQciCGUSyaMhxX1L7sJngwwmLAGgFnCZdCXFY2qtAz8HcaQJm7t5s5x2vYAGfJLyqxCyRt7N6gA4Mv12jk5",
  "key18": "4Wj8YKsn5i62xYLkkBVK5H4v8HwUHvaUR38DiFCVMUzCBxFBey1oiX6YY6CwZZxTbkmdR1znyHo9fePTY7FwYu9S",
  "key19": "5Pbc3rcimePGzZveFTuWPq8TXhsNyZAxaZWvyLxQsn2r88qMX6kjnS3zz2sCh6cMH75bmeACuwQRKYvr1J5Z3UXw",
  "key20": "4T51tDEWFAiXjLdq669KfaYjN99jMWWPKZ9Zx5Tab6k9r5pKUB1vk6oJkQaHhPwosdfL7cCm5TmCideUCXSNtYcz",
  "key21": "4pin68Gnbo4x7FsRUyjZMX1xn9DHtb9gEkUj8uQ9ozSMq9LPpziPhqtsLJqSmSq8CGXTSDAiCb15xpxNsr2rwE8C",
  "key22": "4KEWv3pRU3f4wf8cVGgYRhEZeSNvhvSArqdJU1SiXsHtagu8XPLUqH5xGdJFuBZDFnwSTqBisqmKGXs9YMWrirF5",
  "key23": "4LVZCKyVv3TmnJenLBsU1cAc5JzpKyJRkGXRx89pfiKDBRHMDQ4yvv5kwew6RdZPGtvyGgbMSmXbecFoHYSEJ4WE",
  "key24": "3i9r8bN3PLp9XdQBjwsVm5gJhEfXvbfwA4xQR9BTH4vzhG2suxDMNZHParHDheukRWwL4p8brUrjWJvJqDFbLhPF",
  "key25": "mehdyDwVagD1MSMVCTaXt8yTi7W4CPKoCbXYoeicgTTwKGMnKRW1QepYE1kZvLczymSrXFN7M3tSgTQs51hGQgA",
  "key26": "4fbVtrEmM2LNHAGxjzbwC1gFV5yJuemCE7cDg65kfHZQJRB6GVWj1jwDLL5ztqbVHuEDTVXQQxUwH9ir7tm2yBgT",
  "key27": "5RRetDkcB3SBV4RA8PdyFEcdx3JRiDUhGFepDSrfCG4qd192rfdTQ6NXKMewUPzEoT6WiAPTtCuUEJCBKtSK4TfU",
  "key28": "5jLXWR7MWvKr6ZLWc1Ms7ENYXgSZLohFXj7nRQg7n1BnZ8jvN1B1nDQJmVc3ojWfPfKxGVLRqNFzAGYV2UrjTCr",
  "key29": "32qnUNPp8QuDN4ZRRumVvo9eP6aSMyzpgp3FC3xeeqZf2LjoVonrS2SugEgSeLqdLBetHHoi7a6KFJ9d8C9CJZZm",
  "key30": "hTjNSeqHWgT2KNcjcRogm1AXi8B5mkiY4fLV2ik7FDB2SScimqF6HrP8UPDbt7fSAw3daTNYwMr4e9dwFs7uVoz",
  "key31": "frCDrRFE8BPXq4hxjwRSVac9y9KSDBN5xjAKpX9WWBygyLUjjcqYXJRJ5nR7qrgsxdNavgB965YYfGJvLZJGRfk",
  "key32": "3cQxxYGWao9uFXDQ53LmfdmJQwZA9g6ccHNgiqMu8cb6KvmYa2afw895XfmCeuuaeL1474WrgHmBGXTsYCGfvUFp",
  "key33": "5bQq411GJidirELy12sxFWAu5DPAF5WQEY3JiuPtQzk7MWXV4VhMwncWUtuVGMfibjMdhikaiRsh1H2KLjaCyYuA",
  "key34": "5bTiAKKaXbYfbEypBchMFCVnyN7iJV63696PLyvYNRa4qXy3w5YX4XbxibGaqqdpYgsxYbnQ6ZkmpcwE4sEWNXGe",
  "key35": "2F2J5GxTbhR32i9bQbWg3FBWuCNQeZEyxZkxXMjeZNHRW8gFneyrDgNyYCbfCZVsMq5FaP2jbVs5jEiPkvxeicyp",
  "key36": "57imnKBQHAP711q6hYBn3A9n1AtKHFHqEd6DEiUTFRERHHjuk68fU3aXqWwADLFg4GoHZnnJn9VUkMTdjnpbdWwR",
  "key37": "5PuJ7CvZdLLTqYBeL7BLL5T1vJoJc5fKwsUgAoP2pwKmJqfsqcGE9R4L59YFaNVc5hbDRK7V9TgBoUHDVJssDper",
  "key38": "v2EEfJfSS2XgPsG9izSDUJZx96coATV15pnrDKUtdBFYQDJHTWWebM7XUmwHc4nog9syJhJKF5FvqWX9Acvw3Ry",
  "key39": "5BDH9aXjV2sFZ52HsqWL2UVbu4e63C73hTr2i1i6aG6bK8CXvtzyK6zzFzk8UAGNL3bUmcYyQYK5kwGesMYdAJT3",
  "key40": "43C8GXjsQbt3HGc1bGhT9CeCwbgT26GAAiW6L55TJPM61JBsrBAyCpjXS2G2WVqYRUQygfJkvZvJeW4zWZ6Gmo85",
  "key41": "5aVz49uokgFJ8Xp4c3GpW8N5HYmJPmRn6h5Lxz4YBG1zKPPG2uskS2sjcyQfbtDdVTqYydg5dKBiscEzRS1LV52M",
  "key42": "513ktrZwpAhVMmBET48ZHW1ruQH5Z1u48pkcd4WaYX9osu5Gz8BLaegQGehh2w7bya4cf6fJMjM9Z7FQHSW5x7sn",
  "key43": "gFrCr2x94LaHvv7kTUTWh4zqA9WrhtGHbsoiLZcswcA3GUcb3FwaphM4WJYe2HgmFVFkbwC8Faty4Pk3LPk1aiF",
  "key44": "3BnnbN2h5Fp9nnyKnHtMKiuMtmBaCyaRZ5nQ93Uan3sd6h2oF3xcENyq8vtXbsPQUYcnzaAdTi6W5KT54n7k1hAJ",
  "key45": "7dszAmoyHxCwEjExzENd5a6BpjDPUHpR1fGTDCNgj1spK9WYya8k9aaELFqiijzkJAc8fNLaaWiLW3MRDcK7biy"
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
