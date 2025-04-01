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
    "5RzzPiLfmXpwfbphUmmAXQhDzWzwMNm8J19g3rsC7oQc8Dkwa6UhN67mfFHyDrcA6oyhYJPf32NBsEC9LDcu9Lf2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KPkECLWp99yHuJ9sKZhKuHToyeyuRe2nn4g7XuPPU3cECstqdmLdonPzfoSD2GQXjwxKyBouHHiwDqfahXEpRTW",
  "key1": "CRLFZ32RR1LwfyuczZvvYiKdo7HEZQjRybwAAgk74hvenPVHbXgzv3YfPoZaoBSYMCkEJPgLu9BncqHHkmHAAXZ",
  "key2": "3B2RiYeEP2u9gnPTh5mWP8HYutiPeHDHCwGPDqHDj4Fi46zk5fpL31nZaeGfzkoF1AK8ub5QVCkmrMJFd7wtsBF2",
  "key3": "47M31rVAxuz6xhBEppZXbzHkBK8emudUUgNHG4GRnrAEhcUsKfm1tYStYN2KKEHHGjMDc7z2fMKBvN89e21ktuij",
  "key4": "4ZvFba3D2j2kJ4aRtPUin4kq9Zhaqvv7DsYPEisUfeq8U6tHdQWsDJm8ukbTZSzR8ip9YL3BR2Erk7uJsC5KPxC6",
  "key5": "bujZBYCWrDGQVtC2UThAUuHidqGiuvmifzPZhosZ1KGX6zqrUDLwYpLWeKgZ5ed67Hy9tMrmGBvs6XBdzwVCWoN",
  "key6": "4nhLTV3JDDzYPYA1t6bdmXApJDFFSyPqkekLjgg4JbG7y9DpKoMFy8P7oCbwQ7CxpiGcbXpV5AsWWqFtoBoh6JEd",
  "key7": "5cSwgdD6t2QXz35dpXRNWexmd7gCCeq29BSeSBQ6Hs4M7oZi2wf8vLXvJy1y86xyPZbLtvViYVWHdUjNCknH7wyK",
  "key8": "2CVQgnXwHzoJRG5CiRUNdn3Xo6pCU1rSePMPxhDVgxSVEs3icJLtWJYdvmesZBju8YuXusHHchjvPYUoiNkuWxzp",
  "key9": "2H2dPsRA4rvsqfBPBqrnM3cWkS2srvQFXKHqBDNHMNCiVK4dc4PU7Vpr1kvPRQhx2fxhsp6bbWgknz8gSk3QDX3R",
  "key10": "rUui97NDc2ZmT3QEqeRudhqqJnFx9fADpxcMq6jddf3GVYuK52Zg4ewX6H8W5aL6iYeSpqYUWQDpEY19u6kaPAR",
  "key11": "63kRPRqSrig2qDjyg97nE8xjzrhQkLRrqNZAwzCPqzfZwTpG4YR5qsH8B9mGxHCDHmexnxNvUCHsCF5mQKwtsVgY",
  "key12": "48TtT73vp8Qv54cd14cRP5rWZ6f8HMhHwM7Q7cgBAXBnPv6DWzGHY4mA1xqMSjhNuYEN5Cr4CqMnRJvnVMnjMJgt",
  "key13": "4WGe2nLC9xonbcUojb9SvrLfQXtx2woq6Cp3BtVFH7GhLZQ1RdLFZoww42jJ2gFFLS8tzVMtGdnrYZqkSTysa1CA",
  "key14": "3wQ8rAHhPfRK8kFSSGsydCK71998xH6CTSZVLz6SN6JCEerAB7bnch6XU1L2AC1ZejNPKn2aZobQodiKL53hpGpp",
  "key15": "4ECup3cftBuJeUKS8TQE256VY26aEXdvk7fwYbpSjPoM7tD9SvUpYooKAr37Bav2VJB89G6brsUUE28o3zepqHoV",
  "key16": "5re9DQgjumxSVBerFXdYsjhwPrhG5aC1CFZWxh1qTuccdSkxiZCzX9VCH818NmUo58U9kj5aaQgK9W19Row9mKub",
  "key17": "7d9TnQykV3vhwbsQEaboJBHrPgPpHoRSmaea5miZ48JHWipu8uHVUkSifYDQ4ZEjtCFvZjJduoVnMcjWG8WAU48",
  "key18": "2CeaHvhw9BYsxc2Qn688LvscJYS7EyXWXZjyMP9snHBLDJeVoPK3kWwRMvVnT35xsa6cMT3tiZvhiHWb8dfq5ZsL",
  "key19": "4WTkmhF2ejSp2mT9bJxab8H3wT8nxZb34P72qggT2RXdbCaLPd5GEKsgCkndoNzXLNMW3UEz5DbdtS86VPA6wFNa",
  "key20": "3AZhTtX2vECfumGdb9LCoFuAgRWAxRnnxXavdicJvdjqWo19owoHvwZdayM5NF5AjiSKTTwUoWkRmNqQ862g5iDV",
  "key21": "xUtgHFw8jy2aWGEnE3dyuDMRo7aSKTnrxFiWkMYDu8Jc6EnTprfV9pNofA89MHyjBt8MsVyoezcT8a3MV3STS6G",
  "key22": "5bHk9MA4T2czqHE5RzBys4CS9u3UJ5T2ZWBbM78zCeyfPB9r1QFY6HMGPZ8X4eqfEyWkpudPbCDhk8SF1AFeoyp7",
  "key23": "bDt46561Br5A9ASsVrnY2uZgcs8njWUasyckwRnF7b2FNayZHV2aecS1z1xLpjw5cxyQmVuCWyD8fGRy8M1ztBC",
  "key24": "25McH6E7ZKkecZL4eFjYE6ZTxFkgEGNT6mwXRwF6nLFiFB9wbrPE3fQysJGaAdAuP6muRj9EFUcemec13W1jtzG9",
  "key25": "2gqcahfvS3FaYRTSP3siXmwxSgM7zjhuzGYsaszcHgebUJeoPH9aGYvb2kjk6EoWjbk8BZY1bGmhYmPbaURKEPhQ",
  "key26": "4n94NzSzcFL2E9syFejEZ7FT15kbrNNZWf6bSB2owx7hZcY4yZud1EX2op3xakT1k3q6tkEpuRUJXFZiYsrHdy2R",
  "key27": "59x4s5XqV9DKkupCrSJnBZxg1b3RsAjrMWeUr6CTW1QuD6KodzWKctPDVtAsxtc8YQ9egJ26FCBTb3xjDT6dKERX",
  "key28": "NNdTaT9azYE9x1xzvdGZS3QfAF28zw317Xrv6FD8Ljfh6n7onUwPCHr486YNzNg34qvPxYMH8vPVkVwNPsbCcuf",
  "key29": "48x2auYDdbNnknpLDyZqT1n46F93U5ynJ7p7fq4qmp52BCxZZUquQkiQcyqbefucz1Efmk3uutevVRXE1duDZJfv",
  "key30": "5djXKS1q6N4ybLBMNMqdjmELxqbvM5BK5grDvutkoyNyD2MswagTKYLF7GPvyGqeHByB6YZsE4gLvKtquApZ4jGA",
  "key31": "4636P1hSuL1et4DV7cgpf5btBVANg5RUeyQNV11uJ2S9oBJSBRET4GKCbK1yt35Qy7VPEA654k9EGTheuq8Dyq3g",
  "key32": "3FQMS7pE65uu478UVDsbcpdyNmhFZBSugnEdXN3Znh8tgTzFoYjqLdvi5y4EM4iDL7JoXxuN3aMY6MMXh6uaiuMc",
  "key33": "3uWUdhtY8ETGBEfK8w3LzcUs398BM2ByZvKYKrrgAipoJ47rJgC29tB2MCJiHF8vCVsConnkeWekdPTnPyeutoT3",
  "key34": "2kbeANNEBW3J1fFHYfiqeNLcKPt4Ye66cbxjdm3KSAVrirY9nqHJmBh7ivDmAjJ1EqjfrR6pqBx9tt4Auuv3jL3D",
  "key35": "UDxnA9PnQTx9z9api5Rk9t5Koon7oQMv91ErZyFc1Ld6C2XMeWXhPQ3TU8HGTonqKkAoX1NqG3t4RdLVdURTh88",
  "key36": "72XuJ1smGYTokfedSX5FqN9RPAc7iEVBMLCUqU5TSBGqmahKisYMAER7YbGxJP1AAf5Tny3QfG3Sjh1ACqgtD3j",
  "key37": "2mHPn9EnUpF2qT22eANKktQPbqporcxzA1ZBUetBY5VvCREZQDFWvSDPJ8psokczPyQtUxDdVvsfqnGf3K2Nn41c",
  "key38": "467Ruh7XvkU6QYb8NQagZBBzk53uaxrTockcDz5rdkpjvihmst9KWM5SmHBo7ufPz4zp1ESJrG8mm4PkVYD9M8JR",
  "key39": "4VzDStKbNfpxLFhCKYUBWQMJA834QbKUWCypdu7WmYGP3vFZGUJb6cxddDt4QQmyHCVJ7TsLzkeyYW5wdLAosv2S",
  "key40": "2sVvjmNHiN2Nzr91uUcE3sVDqfJyBZyRVEwXkHH3wertsET7QrVRPhkq3ZX9AeqTDrfzspisgfBp4SNrZ7KDEmRF",
  "key41": "3a2zLXKa1eDPynKKZr4aY6VNMNLN4uAyn8u2AYejFB9q6asUvRRiebD7VDkVfwE8muLzJeMMuJjAtdB6zd8Rkh66",
  "key42": "3wE5Uk11yQ86rCUKgBSMMM6j4znhF4qei4cvCp8fBHxqjvTTUxfkUNyw2LaS6QL5YbeejcDPTBVQzcyaCmJ3PY9i",
  "key43": "3EE5WFQM8GJbDoALyUHqKgExNUjtUExnLyhPF3hV7KZb4XE43y1BzBeSspBBJnh4Y2GqAtM1NW2KRyBC7riqLXdW",
  "key44": "218SefdcRFM1Tm5NNRM7ojydvabGTyMgseZ3rGLEMJzHs9PVmPAHHhpZA7ML5fv9LxfV17G6aKJVBSA27vcoConY",
  "key45": "3DzmHASPrZpxbmkmi6cnNaE33wtrttVa7j8vj6YoEA4qT8dRiR2pRcEt7rf3Ex1VsUQV9xAnpsgQ7BAwzbCHcZoJ",
  "key46": "4v9sErRPFHMjMKHsbrEyy3AsEgpZ1VERZBMwun5n5TBiYLuFMeJgSR6g851a7vuEcjHAKW5GvmdW2qKqXM8riRFp",
  "key47": "4F9bFwiqkVJ5rmUtkWBz9qSprcevhod55w9i5tsetoc4acQvVcapMmCRHEzxkUaRsHyi4WdMMJScnYKMeProcP3m",
  "key48": "iefkQ6mEUvNWNhWiPUuSwznFPLuGDBha1sjEdp88mZQWiSDabEcB74EX3XSvGpDgbNpz9oSqut5zVESwToKvcPb"
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
