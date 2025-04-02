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
    "2Ep3qvewEHen98UnKBL2PoH4noNxhePjQpFVTAcxzAq8buWPE7jzfj69NMpFH1Y1oUFvEYbNXqZvkb7KeZfRzPBJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oS5RorvTftu3m1N2BCTWZmXyQWYF2ontdSK7xoMkhvPJWTrCw5kwJKL3Fz26hjQQHo2E9bjhGSJSPkawusTjQn2",
  "key1": "5VvSkK2JwWcpBiF6D8haHGQeT4yCr2KCrnfN915omZtPWuWXWcLnAbpdfxVLiKpaUKR4t55mK2CcwzP24GpUrJaE",
  "key2": "WEa4eTZseth3yv2A766H1rHHgifci7DZjoceA49SC3dja2gKeM8oHY4tQhkwfQhGcLRorEN92uXFy9PYkg8cvcb",
  "key3": "499a5djzMHRihHHHmgs9X3cmv8gYdJa8wpPrqbJfEZzFiQ32KEA8EVCdM9Fbbz6cicfZuUrAD1WzqWKaHZGoRqyc",
  "key4": "5YiCY2VeZRvNQLnEf1Yijc7SJwN84pwQWTm24XGRczYBRb1m17EJRpWEwqoXYTN5Cfsc6VfbbroaQsEXym1sQSqf",
  "key5": "5rQwqeH9XMaPScf4fqvNEh5B23ZjAUNhWnqzU6UewXMjypUTkmbam7NA91EBDbshcrGM53Nvd3doWnLpfa1wqCSK",
  "key6": "LNF2ZC2tKRJpkb4D8x6RGiipFAzkhQURvNKZyxkroT4xsUHAUJJPF9fpttmSrsYpe4XL7Em1vVLqMTTMA44C6vt",
  "key7": "YP9mycbzb7eopUhg7pyYevodYAf3P5FPF3mYT6JKj1VzE922wk2ZSvin1vS8wTGzWdKPQYtcyxehKE8cSH2fgry",
  "key8": "bN5DtH5gvqddTReLhjG71m2aAZPXsTb5hRH3JXaNPgDB7SqXb64kB9wvVjXBBfjZbyazpaQNHLd51s3EuREnqVS",
  "key9": "248W2yKtxQ1v9bftxxQWUQWCwLBeAxPeYMhEAx2Xr4mGv5pD3kjNLAZHaxSqEaeg4ezrt9ZP93SD86mqzNfAFFzK",
  "key10": "4SYqZYAhJbrmyHc67tsKegA5fknFFdqB6UrF4qhGf6aJ5MXNAudR5f59Yq7AbXNnnGuwE2ya6s6Se9fhvXQrYF76",
  "key11": "WxcB3sfLEzMXYDVXAesj8iEWxySsDcwaWuWvBSt7ZjKypsJ1WqgTTbaDkL1RTyiAfziHHFvtfgXHNZx1W8qSoG8",
  "key12": "ZPa3S6hz9m142cbbgDMkL1zkQp21NL7SqDDSNP7qgpdobDUsjuTpizbQsYLVBxh7n9acz27vyS9w2GpFTzY7fNr",
  "key13": "4iXVUr7hMoqFPLpq1z2qB87gFt96Wd9Kjc2YVNbaYEdcs5FNiSxiMAWpgGrXuoHtiJ3bVWooLCGZbLhgBwbstP95",
  "key14": "2PVSkXPe6UVKhZ4fGtNTwVrjmQ1d6CHAj2sKV22hpSUQah3zTqM5uCpPvtnRhJ8d7iXjUL6bidiNc4pq5d5pheeE",
  "key15": "3CwNst8t7hPTZo9wAALHEYVEqjatrgBzDymPAZxmBmXLzpegxWzQoZqdjaqQpMJpoqXEAXGok8K38eBfF2W9wV9M",
  "key16": "28wigbAxxvCaoTNXEDsnYsg2Bp3cyYza8wt55SUSC5uB9kuxtDTbjcdNKFWtgCeWDXbLaDKt54aaom51ry4CrrsD",
  "key17": "3JWTpBtLV36fNPtKktYAmnFcmCgBg3TZ34Yj4mZ6QveDRVGqEiPhhsJ2QsaiUYHjLcnDMCc5q6GTLPppU3xzx4qn",
  "key18": "5vdKhjMGUUkuU8yoTCYSGfPacifKJEfVs5XEvgnyAnrf1XKZWHQz68iRVrLn48dA4vPAaU7Und9aVVFBykqLFft",
  "key19": "2RhH5fTjWMj82ZHpyAaJ8Upr92YMRRUseZAhxvbRBnH7bnePbXojBvSWiWViCAZGbonV6fkEsYkS1jFziDKFtpbU",
  "key20": "4E9byJUiS6iGTt1Sua8sui7MmT1Gvez9k9Uy7sVBSRKydkjdLGz9yrxUQktuXS3FJ6M8RE4yG1fVgHaEbmCikQsk",
  "key21": "4X65zBMmsNhyxg9fSN5jjfzYp2P8eC4sMiT6Taf7ePpSQtF8m9qVEnCp89EWC4Q8hNPxt5jV886jFp9AMFDu18qa",
  "key22": "2ZuDd9J5heD4JV64NNnFTxwjnnkq6SPhVvDV8vt4aNj4HXsCLfQqmx5Ua4HqRendcU7Njv8ds4njh9fL2Wvf8WCz",
  "key23": "Rp7MzuL7pWnjmTMjsn5bbLdCPEY6WpddvLqmuHu1hcc9oMpAP3sHq1s7xTnzSRGnEEvVkvJtitA3SyMHCkZuHcJ",
  "key24": "5Ke6jLMYbTxNsFmQdZWcqLd3ihc5S1Ktc9EieiX44bc7FiLUaJLcXrPuFEQM6TPZYS9ES83bqJuSaHEcMaogAG5a",
  "key25": "2QAeRaTgJM867ynRCQwA8K3pTtSsUEQ7iXLN6rYWEtpEDyi7ptqHvL8yHtCKa77etDZcUKjjMTsCNrDqpvK7fvim",
  "key26": "4Z7Mr7bDqZ7p2Cxhh9bpaES1xfqWMq8LiAHe9UEmd5o6fen4fqbi1whZkdtdnDaUXfQssxSRFkhZXMVCsARk1L4Y",
  "key27": "36J6QoRSP1cwu3yC4bbWnnmd84UmnRB5hVT7xNG36d1XWu3ofCpMvabEshr5z7AC8Gxh9pp8Nf9GF5VDWU3eiDu",
  "key28": "2WJN586CMpscjj88iRyqDfmQ37ERaD6vKg7turNDwgw1jpzrEkNE1TPYEPxsKhkBoCoJn61R3zdMfRNQwTCwDTL2",
  "key29": "5ugwrRRX4NRfXf4z4TMWsv4W6gsTQPVc9jzyP1U5UqcaQ3kEJ7sRVN3zLGb3pUNZhzKXAUA2ai59JLUBT6s9RZMK",
  "key30": "36abwb7r5FkZh5T65pLAK4MEQVHzwDMFKa3pPLVXW4FWPFVLs4P17KJiAFfZtRayztbfM6WZHxy6NWJHxRhbGqhs",
  "key31": "2eXk9teWwmAjKK9xMauqmZ3UvieM9Tu2bZiveUyjrTffv4ve6sp8StsGwFaWnZ3xqCqjN7Ccgp9PkQW8n14tAGVC",
  "key32": "2CBq4YvTDnospdafHmtV6JKRWssJx2G5Gxz9ebd2nrqGPSkQrc2Kp7G5viriJXH5MnKFN2sUQmMVEmi8sSgHPAwD",
  "key33": "333f98cUmtX3sB7kF6EWkdshwmxKWwowwexTXmPLP8KP6w3NMkrJYPFGUQMgxGFYdPvc3PLcwiAoUjWNCTSMcfjZ",
  "key34": "467awfgv4vcBk96DM6QMwpDBSduJfKr7J4YeU4jcbZMV4ziN1X7kMk7m8tvVmh72DQfpsA2svEEDdthWXPnPF3Bm",
  "key35": "boMfVoX3vKXqUCkYufgtDXnry6JdV1P6mRh2J8UYYqXMCHTaFeyyK61ZtjjMKShNGzjzRdomABZhacyHZxWi3Vj",
  "key36": "3Q2MxPuTWjUAAM2YkP7Vmn73EvbwPXmghA4woHeg5YhMEY9DoFV4xcRpurJ4n7nj9SzfZSmxdjWMiMVmqrzHL7Hk",
  "key37": "55PPGjrFnNs2Ffg4m7TtUfFSndo81YvSJbpQwVnGH3R9AvBReAut8idegaSd5x1tTLvdnaPG9VPwKSWqdQX5D2mK",
  "key38": "5Juo7YhXBaEmcCKx8cP1dj3SHGuoMU6gnE9viKuipJLJGaXKKKLfdt5kHDcagtnpY6sYok6vHB3uQUocD3TtEnNW",
  "key39": "5CsuLzbH8DrAgDhWdoSHBhLGDdLkRKj5UGnEXLfSM9iAS2FK4YuGx7TWGCUgyAcx3BhYg5CR8hdE5m6J5LyEcSFc"
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
