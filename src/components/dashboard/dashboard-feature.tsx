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
    "5tGAAJT99Wzg8hDpabUvDTK4b8rWUwDCnDvkELRVhspdJyZoSFwo531NBhHR4i6niHheSsp3N5mh9UkFk4RmAzLw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LMxXg6T2kCejvxtk7ENQfQcfoqVoVeW3QzsYtEJyGXmpHv57awcTQhDds99DuQR9Mwni79RB84YadBSHpKgY4jx",
  "key1": "4HQXMd9mU3znGkKZX3Mk5TvqFKHqudEwMyYQjQTYgHP3p3DnV2LgDDddQywfHhRzHVw2WAne5GTQqnUxcuXN7CqN",
  "key2": "2mtvohqDPAq1J9JMSVuFPgsiswV3c195zjCuoi5f5wLpFwtnVLzvSz7pdaacqBHPBeUJ9qAaSfmgqFJB6BAApvqU",
  "key3": "5NuZBDetPzxTkhAV7WQ2Cpm4cTwiDdcx82ZqVC1ABvvHhPoEAB8orTGkjXdAXoPAGMn2a7bBmJaZaCh5s7y6Q4Qf",
  "key4": "V4DBES4NL4mHqqmEPYAVVKN3kE6N9gRXZbxgRuU93BJRGEq9KBQ7GVfVGQY7a2Q88sZjDbhnp2vjiatNU1EaYjA",
  "key5": "433B78vUwSsfhJ9h4xwwtK9u8BpAyQutJCcDgLvboXW4dx6vEWFcjWekwzXjXzoh26Q6wLogEfzyPJLKNcoYzz3M",
  "key6": "3KfnLo1koyVcVkvjt9XZLN3SfsjgL11sNPVGbM5oWxQVd1TACqg6qdHpfpabmsgz56yZ8eWBvML2oT1SGHrKRbPr",
  "key7": "59jqh32upZGHkYTs1shtUxUx77b4iWgdg3DU4prJwLsoTVmMSb7RkSmGk5wDo1uwWwQXJdxC6Reb3acQAxnKUL6K",
  "key8": "4yhL3kwnmnX3sdH7Qv7QjPreUkxZ3NBFxsCVNXpymRgY7EU8Av9bWp2LGsVyVUY39K5oNjEDKnycVvXgHUe41bzu",
  "key9": "52pDfQsc1mSRb8mkK5S8CmsxJpTP8CKhM5xjp6PK42kz49uEziL4pxq9Swr3VgoToZgQgCgfHZ5eryuEnYBe1YJz",
  "key10": "5QjK3Ss9d41vsr5Fgxefraf2bD1wqdAk7hMhGPj1s8JoPkXp4QGC76n1Y8N2n2Wsn6GRE5ZjWQTRJAqUydRyzTNZ",
  "key11": "2uszUD5vG93hTYWsAzSyFwuq29kdaHF8vw9iib22fK7fkWuzZt331nfZLpjJeb3KzqnpkUtX6q9tMT6qK7kQQ9ay",
  "key12": "3eouAA8VqcLcuoXP9bNMFmSMznGotXFLJa91bnVP3bdQFL3e7pFLBMsvo1cqv2hwUbzY9J3cs7NUDsx1YETcaPL6",
  "key13": "GKPvCoDQkE9tvnuU8V1UzHdi2eBvwHBcrDuN14rjq9BP1BWVcCNhZqgkjf4hi67taa6BBXUVFyW7iBDBsWbJDbo",
  "key14": "5XEguX1TfB4ccefaWf54ZHDqpKUGdzXVie2uYEukgz3pcZ4TXwg7GaUQge4xZnXJkR34GC3uQhEqkpwCMZXUoDVG",
  "key15": "2UCWHq5WnsFEA5z9cPxXBe8h3NaZ45JPH1R5qtg3Gj1WktXMj1vLNAbLiTunzBZRYX82aNQG6hoG2BZFrRY7yAf2",
  "key16": "3xqx3zGFa2XrK36yvvxGqQ5rKBqRNezofxeNgtkvMuq9dp4oBzLQJ4cyhsr2cJpyUytUn5Lg24DvaASWZqAiYZCF",
  "key17": "29GVAZjVPhtWNozwk4USFHHFmRZU7W9rJSPKFrsrCuDzXn61op4TLbQUSBFhy9Qts6YTiQKHq7RkZBAg5f65aDi1",
  "key18": "4ZkN2P3Tkk7RxYhCK4oBx8zgFMscMTA1wjqZBStFFhnqxwf44GrQcynPGaZDA7FuYo4on5gswmsdRPnc9QL2jNvg",
  "key19": "2Wp2V56qTEmDCKonuQQ1V8iCu4u6Da1E3vDE2k8J7gDWskauuNXMK64FjdU4P5fhFmwDWBxavQ7nATnBKJcEUCXY",
  "key20": "2wb9RfHa2amsfv4JRrVyHGQXfnZDY9Wm3h8Y7qX5VaPmNmC8pR6nFDDAZaAQ2Lu6AeHjuWbTZ7S6U39wPrhMHXWL",
  "key21": "wk4Vu83q7HQk6Au5fUrhuwNvzGh7gFaBMdgYhKJdBjKwmSQfur1QTZs8he7vXVMENhoo9Pf751BXdK7zMnh6Ysc",
  "key22": "5keNd5XvBYCdA2edZNFNxr544E9chn7FoSHucz1LwdMUAeikfJ2Pc2rz8XLmNZv4sDGKtgPceXTc8i4dwQqx8gpF",
  "key23": "5UH5nzSZQLDTyXunAeNHF8wM2jp4xfGyice2sQeZDRCtXw17zVrtyiH8Bs8cLdqFGceeUGxRfJD4TbmfMCD4hT6a",
  "key24": "4B5WhLR2NmkbwNQhNKPeBtFHaK7DDQWpHxGvmeChj34uk93DWSzckgUtYsUwHoVBqamoHxrmkrBNMqSz2ZF63sZc",
  "key25": "4g1dgm9cv93kFMC1fYyo6nAzPx4yE4bNEhwedPrXXwcpRzjrCP41NLUaFMRR1ka9aLrjVK4mrLNpnhBf3NtTgKs2",
  "key26": "57BK1ofvdTr4rYVDBAiBoRn91eHhheeVgjJ7AvphgY33aWqeGF64ygAihUEgb9a4SKXv6qqf5PNXnNuWVGRsje4a",
  "key27": "ycM4Zz4oDka6jhi2UTDzGBCQaUsz4EBh6SxfnHzjrnEDP6oPrRmd3BE44rZGQE8sMRFDVMM4L6ff1rauoFc5gKs",
  "key28": "5TNkmWR2qfwFKPgLCr41XYuGMqnppXQHV7h9ajcxdJ8PScr6H9dddUhtsoA8i7n99BWMqPDgAfxfehARKwAFHHUn",
  "key29": "5YBJGKHjLzw4p7HVsTeo1CdRHbwdq3GaunMkDLm66y5DCnPc5tyeQfYZ79324MSbfUpHbCgP3KroPuxdUghhFsbi",
  "key30": "46CcNxPM2zYrSqonm1jAYbt9id1KqwQ72f7Y6dLiwyWY4UTvhapWDjJgVCPpohxfiVkcXNNAR1a9xrjdgAzrTBvi",
  "key31": "3WzpK8dyhWWFxLCMsdRQiMFutVQZwu7pwaub4e386CfdW2uT7FYKMgfAnEwRBWUfS5bzWExaM7Wgf3Mxub6AicXW",
  "key32": "2qNPMJvd64TAVa5pdPdidJF5qz3gB8ae3Vuow85Dv8aLcsFrTGTHt5yREma9QncPK4sFbZnFsWZW3dyWwpD99uaf",
  "key33": "3mqHYdqb4a6i5ncGNwb93BkWQGSEEwr6D5bov2FuXaFcnYXxDrxFTzdikUPHcc1grES53qpwTgGQUo2vDUw281A9",
  "key34": "bwNBV78btkL4jRQuFJ7cvph7urwuHPTqCW5wAWjDZ3yVTMFZwAPNocBQSMq99BwKcHQgtZhQMYYSQEeJE9Sz58e",
  "key35": "2JfH3acEacbzsnfga9kPDqrDScfG8pL5zHmxEgL4Y4hPCkvhonEDF9Vtxo3H5SgVfuMNmxcaTXe1L7DuECLBggXF",
  "key36": "5Sav9ZvYPAa1Ee9pcK1escU39AjY65q1UhYvCRx6TmjWFjux6cWkXpmS1yf58FNLAtYx6shqZPJuN9hVKbhzMLjo",
  "key37": "2Ba7LfoxedQ4xEuPoTggQrVdtFU5fjrg63u26ejjRSUJTkHePtmocGhzNXpL9JHkG6JDVGSf375zPZjA4EdU3PdC",
  "key38": "52qAywscgMo6u8KPGiHRSykrzho7Ki5ixvYRg4wpDE31DJCcipdCYTZNc1NfEhQdsAezNzX3b12mVnaoPooNm48V",
  "key39": "pnUVKy6HrAz8nSrGho75PPeeivt1JtWV3VRCAWswdUjQt8KD2L4LP4ibCLaDrS1dQWjB9pxZkNHrxxkHsXGPDdM",
  "key40": "2yPuJUnD9q6Yqo1RuuBA65DBzwHdND1CWJJNG544NaLSpooxv6WYVM7bTxXRtWTYshhe5EFo9GF3YJzTUZVwQ5q2",
  "key41": "tHRVg69Wp8sfWqbkBuErS3MNCTziDojHLRVY4aEDaQXXcaZyYqg72zFGzsu7rRH4AA2vLaMny7qV7B5qtyR6ZE6",
  "key42": "hqTB7Rew9n43C4ZBQWNq4iUUymrQtDFvocK9rjWRfbY8NwJDeqvdVNKfWQjoPUNkhY3tatpReoCKGizJdhichBs",
  "key43": "554pK8f5ia8nizSFkVNWhGVw2DCDYzRNLPYw3kEjwC9JP1V3o4D3SK2j56apsWRMLH7YndYwXebAKqt1k6JyPgKY",
  "key44": "WCJiu4Ppu3fJQ6sPxFDRTAG8zXbHhtEDc94qC9hvd1GcZVpU4YLX9wYz4NVNP2bs3wCWpVqYeQgHp9hxunsR7QF",
  "key45": "3P5Rz1dLXB4Kb7M7tGvf9apHhS3V17yA8sghyEiynZD5CoCRMqRDXnNqUzmAhAU18UXHXVBdkqYSH61Rapj2sahw",
  "key46": "52xwjniFDTpwGhUVLdCH4Z7BC5ufYTfkPopM15Hrjgujqrc4w6dFRrr2PBh88z3hbrTnxm2aQndNkUgsEE1LwxSX",
  "key47": "2AXsdLVneSye9Jsw1KENBAECyFWg9b3hozV3b2ukg3Zid3zoEx8kWjdS47qUL7b3PhkQhAq5fjHmPnUNdGoUNHdJ",
  "key48": "2YyJxv1YdXbsTJY6DVhuwrR2KToCL2BZyzJ79YHXGB9dbQiGd7QJyUQ3nfnvX929Ev2NvmypnU67qDdBRS2etEny",
  "key49": "656VTD1Mb5gRYh5Gb1GxAZqU9TkZyATwYHnRitG3ZpaveWN4d9Bm9AEwTysz5f7SKpr6MsBu6dMSP3CSM5zmttSn"
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
