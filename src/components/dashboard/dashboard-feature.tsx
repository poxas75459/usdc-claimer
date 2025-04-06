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
    "3iNfEiABZ9a54D4VGtRBTJ3x5q2rzAPkurfCor6oboiq7KPsRZjWcszPMSVsFQqhaD4b1LHzAJVxrYvx2g1td282"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oT34L6TqgZnYiKiURgz8aSj4ZsssLHErbBLeWGSDfLiyS2ZKQQVPzQgr6B9tVPffEjrz17FY6DMcHE8TfZ8A4Ma",
  "key1": "5ygbQUin7oyVkUpx8UQtSfVxMfxyb8CyXTZTz49hHwtBJrncwjZKQo6vhgyZ5FU3mrwJccQYNGeMCwSPgVGm927M",
  "key2": "5vg3FH1DJncwHYW1kYTKcADEDeyEuP99koiqXf1LTYqNihgHDX6Evozz96BMdHmeNRT3CaFphwgbxQqkjfQK3VoE",
  "key3": "vKfyhfDewKWd6aM7bZ5yiVBhAmdeZZSRxzHWuaWEsiD7rRJ25gZg9KSBKCVugh8rCeFfHrv25A5n1px5z2D7RHx",
  "key4": "47KdkjZqVX2uyjK45kRibgw3Q7AKKvSTZ2jp7boaEWRHPsmSKws6GvmeEm9A96FEMG8YYKM5Nf33YQNWEdRTaJaG",
  "key5": "5W37qnCAsW9nZyt3Kk9updxWr72N4cn9P4L7vBGU1jJyy42W2SD7tmnnJrU5PzPPu6SmjGY5c8CVm4AiLExGy7Pc",
  "key6": "4nHUvJ9NmtjqsGNxvNCtxQLJ2SdXdxmHEZNfKUTY5ueM4K5NuqMv74y2hy3f9KEN7dRbe6SHgJDLTPvKfbr5YtHT",
  "key7": "2gfiQ64DokB9dqRinwHb2FFQ2epEZKaxxBn5zRLL1vof8ikB2eSvXhF1f1n4rXnHoNpjoA1UuX1TD1v3KHApZTA2",
  "key8": "j4C8eGQpfbJDYAHuyYajaRD4o7Fkbut75gmQtxqWJ6U9XZoyacssDBe25XGpqDzjixtXWdDWVZPifM3TTUFhCDN",
  "key9": "YUqEeKBwhg1vokXNNfNyj5AtGwpk1AfhvkpRMhKhjuYUDDRMRQZz44d4GNxn1QZ6da5cxVBiZW2KkrFyQKS4qbX",
  "key10": "LGXQXbagVGpwKGh16Bpf8GETpQQareNVEHGihFRQrU6YaqqdkAekzBsmu5x7AbnMcHDbm2Po91wdVqW5yG9pPwd",
  "key11": "66fiBPJBnafERvG44dzcismKFNizqCDQ55bbANKqXyzdG4pyHRCMAM58Uz3V3ooFSiCWhDKp7r8anotfKgGaDmcX",
  "key12": "4LnLzHoDdnU7ffQNYzpPWqJeFdHAY2purUwXEQMHe6D9hMVzUXQk75JvuubiUFaBkxNHfYgnW3HDtaa8KCVRR4K9",
  "key13": "39AKcGFCxMeRHF4t2Q4Nss4e9yh5im6az4BK91874JgEV3H7BngNecwyqJ6QHYqTYJLBC7bHDdzp7Xv8vpJVtdRQ",
  "key14": "MiaV5GSm8mjQNQkDS8LMGfxRoJxGEgKca13KYf17XQWQyh1pnZixLvauLMXTGagu56LAgCfcgcaj5QKCWPmcgfE",
  "key15": "45ZkBbjgrKtkoniE9knKKhwyqV4r5FFioM8xsB4wo6Vy56sjLvkhQGxeTHNMVSy1Mwjdz84JnRpbUPJFJhfVTeyu",
  "key16": "3ChcDRPANj9ijJXKT3JhrVHFNbbXJFfXS8Aw6bVYRLnjw3diAhdm1bbPioNCeMeQT3YVwPn6Yc8aa9qWZeHhABc2",
  "key17": "iA71988HDVpine4gM1nTKYqQ3nsFtcqPg1zK5XDH9f2irzu4bnf2HezAkaTthhkRkjaaiY8sTGCAnYWt9ziPc3z",
  "key18": "29mdKAuP4Xw3ZRYRmP9uf29rZXNpmPR4akDaP2RmgRJaX3S657RfYk1crU11teHaNSqJrtjva923qLpru4XQ1xhH",
  "key19": "Pxyo3DRUmdXH2yRcM7UHcLRN6L5dr5oBMf1D5y5KX32VSiRM3tbyTHehk6nPwYKdcJf9G45hdg6D3NPFerjNMdu",
  "key20": "UA8FCYehZAHvu4yH5V9uLhBccSCSXLUSi4dDwSrdWuxGUpM8pgNYCpviS9Lafpokn9CTHHrjBmG6tuPxYMEsec4",
  "key21": "5mmHkkXJixEdeEQRm2B7B3d5SsNAYEmV45bpHbxxi1SL7nwLzqG3WaBGgbDreMtK8KdPZfqZb2uoodmXUjPW3Gg7",
  "key22": "2XUfzE54GEGBgxQPrZZazZC8569B7E5wuYk316MyuTQ7CdF7C1DCrRvyCW8yKNjaHaZ2y5MX5worqkLUcQVHRqJP",
  "key23": "5KUPUK57XQV6xiGktbSRq2XqWpu9uEQWr9a4uAysDBcbw6Fgj32YfM7wEsSBLYJn4zLBFiWDkazBqbyh5EMrQhuA",
  "key24": "6SjXYsRfpPY8yHknP6Pwnm7LAhnPV8FJWE3xHpN7XRJwcTLXFwLxRhF4SXbB6JwtPqh2Hr217QQ67CK4YJ9iPjj",
  "key25": "3egEUtMkboZh9A7jodTy1ufrqdu7rUqJDX5Z2gdjWYUr7nyrcw7QqmPgP1YxPxg7b8aVtLtL3bUpf5xnEePYiCaV",
  "key26": "2LiUkSc1nrm77AqKNvUFH3dZuSFoBqPkEcSAQTuC5sxVNJ17uC7fh5Mt4fDTtBezqfoYvvp6VKXDVkMpwwnvZrnf",
  "key27": "5dKWoNVYeyikcCHfyBZXNbXH2fjozBpXCvYjUqphodrLewGEZQ1mHxgKYR5HF7YfGnbfs1HdsTEtpcRLeomm927m",
  "key28": "2BQUKTVb2kCeGWrwj3SAxHGpdqxwwngYEf4cSJqokHvzfbBrs96P621SwXNTWkkbucuRDXRKL1t8Zkx3ewRxKwJo",
  "key29": "3UvxHJwGSvizTjnRS8v1fJVZXKgq4hcaWXvrVmxBAYWqKSxgLnbkx4otyvJdHZ623GFeKUYaBCggMh7LmDvyfNgQ",
  "key30": "2njrW63vUW7mqsuoAAd1jPmS3ZPspeLkGHckVTNWkz2B2qvbUe5RoTWF6KbXPL3W4XmQrt5tfZfSdU7CvZc4ozKz",
  "key31": "4M6kta2UEt5yi9pudZDDeDCYZosQ66RdTWxCJoPQJokakQ8VT8d8etdtm93mTVHf7sBPbENJxdv12QQ4rGiGSEC7",
  "key32": "3xBvg3pAAyebFDEgpYtvhFxsE9VfhwuiNSHKYZjLRvxnG3HcNyLfxGmQ7JVo3YxXcqCWEeY1vg5AvNoqnHFzzMb1",
  "key33": "3nSnRFFL5eJnDcN5vy3XEiLTkEWNLkuHcK3cYkYkJBp6ERJS4Qc2e2K5TK7wZuAQMBJapNjg2diEA3yweNS134ow",
  "key34": "42vG1WqNENCcNoqYu2MuD6AJXGHbBa8VdPEMPizfi5Y1o5cECuKFdvFJ12k5DZaigq5FPjkRSyjy53oE5wymf3AU",
  "key35": "67pNWHfWUCBtV3EfjBirZkhwxFoFDSeA8KK8V4Kv23XAJ1pms1ZDirYr84guhiCcZc3fhx1hSnEEzWCpZEM6WdjJ",
  "key36": "YLvJvfRh23JFnd4GetKnDk6cdTNJsAkVXtHM7iXnxq41Z2288qwBFKwSUbExruefRgfyDZVUsmudJqbG3ZdBsWK",
  "key37": "7vbRJj93DQ8GkE4bHrb5hu3uGcypZhC2Cuhk2Hpu73tNDac2sMHRox6SwajGbzMWufxU6CSvCAQv1YHKx8KPRR8",
  "key38": "5v7mpB2nCjs14PULERGWeTuCwyf8zh4n8yvjQsqChEMEhLMqEb7eRbs9XQ6GFJHoM74G7RQncp4ZZrxvVNKPzka6",
  "key39": "2G9BZHjCKosJcpnRo3JHxssYs8moJbLLq1chyHdyFyqophPCyvC9UT4AZesZTKMFEyQEWZWR2Y4DYVxRrZF2mtQF",
  "key40": "WLcSYBPyp5x7qxyc3zYWcnp4kbtoEwX7GmurnWSC8Sqge6CpjkmQoHMjZwH6m9FG4xrSzVEgFwRGSudWiHg4HaH",
  "key41": "7hcJLKQ7U2BEeyVDuMnZrSxmCF81rQMXxqKAMzDV3vYf4m3CZXqh89ymqiSKkzLmQakxc6swRnD5TT3QDZ2gpdM"
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
