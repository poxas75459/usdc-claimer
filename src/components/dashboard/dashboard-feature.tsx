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
    "439tsRXy54mjQxDSN8rVkngPMJtPyogMucLTzCZ4Df5vNwQ5s5BA68q9jy2wJF33rzXCwjsE2xcDwwjyiqJrQBur"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VZijYbbN7282q56kCpTpRna4TN6z81ecGkqLPsEGNy3fhNS1UtwYca441QmhUpVsCRC5GqJBTYwCtpYUydLRKD",
  "key1": "4Q2As8ccebNa2HeNSAWJoXkTiShcAJPrHD9AuWSdgZ4GFZuhGaxxT3fKRGsBB82PuqrLZPBptjJ5KpBX7CmEZbGg",
  "key2": "C5ekunxQTze5q55jYUzNdmyDxJKN81YrYNpC5riDeouoNSM8qJmVrBkRqd4fLs7F6H6noHJAUYyqvSx5r8uppva",
  "key3": "3i3GtRKg5yoo9Jjn2F9bAYD96hiVv8z3GragQXsp2TxLDEYx1W1J1wGy5wmYv7RX1RJVEWZW6EP6p1sq2eYMagpW",
  "key4": "3DfCzzeX2DBeUdaVELxWTAZFFXMbvdfh8zkFW9SAbQry6ZZxri6cTwj1bPi8c7WwKrT591YUVne146zGhSkdyght",
  "key5": "fiyUj1k8fD56YUMvbhtBuu98822HRQspEZbFyzDVdKyScPszVzE1QwnHof5c6QJueriy3HdVrq2aXDhMFEewd1d",
  "key6": "3LJRrsYynRrQx7Y9U3Z2PCayKU1U3ynKbzt9hKmZLwZyqwUAiBWiaonTb5xHPxVxQSWwVQbi8tpmQ6uhzZocEynQ",
  "key7": "4eRY9K55JT7RSKyCqAAJZ9urgxkvG6D6th9ZFurwRdBtyWQUoo6GxcoL51xbsMVeKBhvpNPKAf632nfLpkFSyjYk",
  "key8": "5irzbizTLEJWQnBeQqnRZNJ8sqj1cpbvXMKhK5pxdsAMBPqkg3UD1jHEyzBYS9Zq5XPijofGJ3hUvjbUkZiWvua6",
  "key9": "1pbU4P9nhgTdhTWBkZxyouo7vXgBHcn1L1scVBMA6E9bjuSoPZnVFWyiMrHFtdmYdjRZEMbdGw7zZFnftqhDe4",
  "key10": "zrz5LggdgdpqjYtqKxVwmvsv6uGnbpJ16c68mE7cfCpM4i2SaQbx93P4kLfb2ptmBK7sMJoKM4XvU5kKohuLeE4",
  "key11": "3Ndp9aJQKqBjBRpLrA2wNBd4XG7iy1JfXmSmCoHFcEbVeMrS4xj2UYkyKeKdrjZiMk2n3uEJQ1jqsC6bcF2ZoMHA",
  "key12": "21sKVTJPcoZswmpU2Ho8dxPDpc3femJNikrxvqA4LvRVqC1DA7rGDLkMoqghp7eRTcDdRRF4J7PgnbPzZ1JZtMqs",
  "key13": "3ZebkFCPkw23gzNhdhV6ZdnXhzLz2tC4VXCXVkdZjLibttCQxjx5PA59QKFbTa8U7SZdwU4T3mL5gr4wp5gRH336",
  "key14": "4WZjsZzzsERoyVKct2r7uAHynMPnj8stfCXKqYtEmQePv9x7GmyWfdQWDtmncV1wgndNoSr6tBWxXpYgzLAUP2KV",
  "key15": "4nrXTxrKaGNZKFfSqeaJVrQGiCnRCgwTjAicA3MAk9vhMt4Uq9sCMZU2NtEffrqkvuCeFF5MiLLJRPhQaaq4qxUn",
  "key16": "4LKSyEXkwUydQR8MyLzAaZGGiL9zmo7nGpx7erJh7PgiKdyYosk8y4oaWGa62qWD7vwrXLq7swf1zog8vLk5GSxc",
  "key17": "yY1MPSKSBqcP5Bc5UiWH7QsmvqzXpuLWET1H8y7PQTFxcXC1dCFgPTRq8bRWPwbUdpe6y5zkhK3CKispBgUf2A2",
  "key18": "3FeXKCC7raR2T3nqhti2Nuuugb4sPmRmtEdfCFE3H8eRUUzejtb7M8BWDmLAJzt4TyeozoY3Ty2u5gPd73L7DRY7",
  "key19": "2VH3JMRTrerDpcqyEkekTUq97GPr2dWQWLNZ4fKTRvd152bjbDCL38bth1qAtEiKPr1W7qK4LrB6uPgnMcY4iSU9",
  "key20": "2X3KbXRQnCibKnLjSBEDuPkWLevd4puSDV6z3nY9r3quoWTFoyNfRjqDQVaJTjbernFfoKFGr76ykWqiP4nXdWhE",
  "key21": "4ogG7pvnRdjSG5Grq5k9A2qNLwfVFmtPYD7U3JSUxxsvADf32c596pcbbKvckkfADPBsq96Q3FhVWCKxxCwzNaNt",
  "key22": "36APb4ba9C9Fnui8SgzSzguNaPuLob9w7qN3Y4U5rdtiYzCiTGkSmZ9vu5NofLsiczhkAHKxvFWRtoSZ7xDhtwn6",
  "key23": "5DnYLxQzspidFUrBAtj1cHp8J4mtDdsumKabwYnKKSVmWJgNPiMzECPqergpX6XVCn6NLVhddP5jewDUx7nYCR3K",
  "key24": "28vPpciExfbZZQd5EndGuNUBcqFhCQBkPXN94QnrDZ9GwucbmZVqTctFd14qGBXJhK41Mv3h5XGsFJvzcTC3DKvR",
  "key25": "47uzRkvw1tpFijJhhzcV6zmC4tg6SE3JmdTpyKZpgz6YuPGUMY3n1uFSqfgohk1dgGSVWosfAeStcRXeqzdzCYFn",
  "key26": "5NaSQrH6VgBp5BqXurJRWKeAdiCsKMjyKk47PS5d1sh2zz1wQXDpgWfUs9oDm71w6aUYckF6tsGEYe3TWUbkxqB1",
  "key27": "4CAB6Z7f7VYD7L8LSzJzVi15MPJvvCmGyQNmciYrv44uJa2BzsUBNyeEyvU8ArQtzJ9U5NsjhSt58VqxSkdu6qGV",
  "key28": "59oNLPDVT2ZexT3jTKk9R4tQAJMKpVYCgGGzpyqFd9Zq7jJHUkQ3oLM7wtArgLuCYwpRWTdEVLqbEWBhPSXR52yj",
  "key29": "4BrTUqYdH956h7iRFPSWS6p4N82vqJQtVJhUWbaKLSRGzY6cPCSQs3yCKDbXLbJR8rUBVFk8YNvwNZk5owMD37VU",
  "key30": "5bLuWU4r9AER5DtUoYLpisPSk3mAcJ8Zc3nPfUkEJMHAvbwRzBNRzfFoiw4tfDL2WYZYYyvZC3Z6TMeGaLFEi9BG",
  "key31": "3AhJnujhXRH3kJTTM7zLCL6ZKvX1P1DwtYR8hxEktdKB3v2Brt1QifguEF3fFr7PbP7xLtqW5qb12CZqV6z86YAY",
  "key32": "499KL2MWvNPraYHtct7cYWjtXUXe9xChZj5zJanT6uF5w5nNmWrqecyJfkpJsqSAzHrECEUNPQHR8tKeXooK8Fy8",
  "key33": "4FeHd4AwBzBuGCCLJGPpVgoymFduQjyBVoxVeicAmS9pUP5YtDF8sSvHW9Ko8wABuiYgLeH1Bpst83bKuwhEkS5r",
  "key34": "cWWgsN22Sr8rjJHKdous7WvyCkdDhyMCex92EQW48q9Ce75GaX9gLiSQeujEReHFijXvBNGyt1M1KyUAsdEPttH",
  "key35": "4dcBjxQogvZCag2cZv2VvqN5dT2jWYY54k8kUdGsEWm9Qxrh1vMMUWtTkoRDSG4bY27xzKShWHiLCeNfjs5377cB",
  "key36": "52VtcHdwPHBrqme5nwjPniMsGDMtpiNgroqcGXM1Dr4hbjaFZqN8MVFBDLq6MkyU5tYnwb1d3u5M132cxgQcakeU",
  "key37": "4rzFLoyMZptJj3xoR6DnhU1T3L2Np6Sv3htmpHA5JD7TWfKRRZqNCpSXv5Qnwbd5FUCpXF2tym45s97LQMW4J53f",
  "key38": "2m9V4iuLVM686P4Ygz7pySqUMaTbnuK8bwfzdTif4Uwb1JbdwH1eVS7w8DeoaTVTKtErBymGBU2DkwMXhMBaGDY7"
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
