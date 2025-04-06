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
    "5KKfxJpQpQ25UBJfK36VoUUftXyCLj7RmcRMC1qvi3C6uRhPi5FjsMP6NUdRrtkRPQ7gQddyhotps1YcBQDV8phd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VJnAfW6ML9R7eB5v9sGLg68FDBNnBayPxSGkkfcQ2E6K6SZ2pZKPCM3Z2wo33VF44fzna6Ct2SJHmgwggotCNB2",
  "key1": "3KTNuQvWHYepMtwkpzhiWzaHMstnPMvb74mKKzavU28Y8vYRmH8HgrCNZLViKzewKGdui3S7aqVu1WKvVDntowmM",
  "key2": "55JcDGQwDZFzSv4gxzHdmVi25Nm7Jw5wCo9ZeBAXyfmKzVQURG3QzPR7xVkvp3e9LjjBrSWgUmLwYpX7HhUWKkLx",
  "key3": "yCxmJcbyHFFiWbRnsnPJscV3QooXpaTwqUfPXTPKg9eR7z18uNGyBKPQtTXxeELLuTCUdiVkuhAPHfzTsEYonDt",
  "key4": "311exGodGxJgsTfuTEHzcnN8T9rXQLbtYHbNoWacxMVUVBHMBapusvueB7BhZd9pHKhnH3Yd18d3ZaiLyVCS9kV",
  "key5": "2sFfD2oQwaucFAvCQDDaW1do9NjBhK9MpxkJwx5b2Fc1uCW1YN5YBStgEfZigTM9WBAbbYh4KSzRdrkJ9YCDuVRK",
  "key6": "2n61F2tdqTF5VhxqtxSoTHnXSpmFmJHGEEK8ktXYkcjNV5ncMk6XScUdhmeWEkSDiGGAdtdiNnDH92NtDE9M411o",
  "key7": "3gaD3YnaR4WM7FXpfkRtTDs8WjfCeMX1DGnDqqbVHwbZRkrTs8P5NVtpD566c6RTHtfvATDF4kuT9bUzEmb4byfs",
  "key8": "2hkajr1kopgdQhJBhyLcSWpKasZFG9wcGeQ9qVySd55AjFaFuVjsPpuspc2pxDcNgZoDgS1EFDbDF5jkybsdgyju",
  "key9": "U29kAbGfWvjs3qJ5o6sEMvpq38DKJ5HVVFsWvR5NwFPTpJVrZys25Kzp91x1z79GQDwDdrZzPJRWwRVhN4zCzLS",
  "key10": "4WoWC69pvuiuYZwYUJBsDskh4HRt1ztXPkAEVhtDaKms3DndXL8FZZ88K1QndaTgqbG58qqLrxDQAhoCUY7qLEQa",
  "key11": "2fb65tATmZdWKTMfcgZMFotSLkQfJKX2iXXL2hPANs1wpNuZeLRFqDiG8GeVes2vw7zLSqsWDi3fhLBhx5zRd36o",
  "key12": "ePeJiFx9AcXG4HiZaTW2Kwsn431iR938Avnms7mq8SJp2tbzhxLoafZ1xcmhM4pQgGcCL6GBpbYddB6WKNTeGAj",
  "key13": "2iHFZu5d83SUnsfUV3kowa28rb2rCocA43MyYavUZw1NSRTyeJ2oNCyWH9kfayVtBrp9zDtrHLqcXdYgykFxec4k",
  "key14": "5gw6aegoNbamXv6dPmig2EYJC1PdFyLx49o9BuMN1Z5DGmfmAqQQtk8bRWN3ik1Xd67q8aVJ67a1ccRkNyVhwP4S",
  "key15": "1c9CjNgbcDU7SU4Bb8pHWxHs2kqEf2Pfgn8bDYpTT1RkoZoFU2SWvjWjXo9NJ8dUbu2XRfvBnfmod9fSBCLeWTf",
  "key16": "3rAeUBMrzBabvgbmq98UsuzGJvQmPf7r4ZGnw6xmkcvUB126Lf6dTyQzkv5Byyiy8JBtsEz3mPj1yBjP4327F8qj",
  "key17": "nz5qR4knKikTUroL6Qm2WGsUXzf4NrVFSwaaXHBe5VAcY7d2L1bMDJHUaezPVC649Vhm6vBZy4dvxfucjs5wrjd",
  "key18": "3UatUEpbje4U23bU8DZTJhVT8muCeybozpw6sP7ZVtzax1pmCaJb2noyR6cvmJpivJrvTdodLrxB1ei91k5oBae3",
  "key19": "2KN1LGUyjzQgGCY9B2kSk5QLoCyN2WNChRmxjc4WKWc1aWiEKj77YHPqY8aADNLJM4G3LNBiTpwpVFuWtGtKyd2e",
  "key20": "KQxj6mX4kb2zg8r4AFedH1o9esXe36NzKg1SmEKRcvp5G3GowqYzfDV41B1s9o8LvFewCd8mfneHcFjhKVbsRji",
  "key21": "RYwiQmDQdx9FiY2RW8z1tQakkJBkWZ854emGmu9EkHMXtzNVUQR1ehHT9maUh7R32qQQ52kJgzbKrGWFTZUUnaJ",
  "key22": "4WDqX55ksUFRS7CrUitjwTZFu8pXh3AjNFghhkzRWxJPPpeGxn2nr2cTBwrGrA13F5RwPm3sygbPzxmhtJKEsjLq",
  "key23": "2axDyg6zXWdbEwK2R5DSftktvvs5uFy7Runcjh8GvmzS4PDBcdLucauhzx6GSyoHxVwXqhC73MjGpZQNadpQEKGb",
  "key24": "4q4koPX54iCC6EJSnvZgTK8sVuUDxRh2yszWEe9EKnCnxqtpPpGqMHCLeLrDBXqEjXW5s3LQvJW8JCmV3vU4X2QA",
  "key25": "3YdHbumoKAkkJZw1Rux9zK7YYKsT4azrXUhjRrLBr3LX5xR5gaRsCgG6Coq9YASqKuZgFPAn8n4xekMNaJeCpuBg",
  "key26": "2ZnrYy9ZnqjCFCnH1i9VeungBKLUXhWqgh5qN7LxQLQ6VHMAovba7VT1vnXufH42FkxYotENtL1YFaXRYWovM4hZ",
  "key27": "3pG8bh5HJg8nxQKPAnmLP75c6GMwwunsVMixKyZznCQyRBcvvHRAAcz3pytC1Jcm5VeMY5Hc1LRopN4LpdzDz1dk",
  "key28": "2aaeUBBYgBKu8iiNFGLwAFZ2qWx5MG6oqRfaM3PBg1suEhYsBoiRPYfnyyerqF7nRDpSHi1LsUgGWWzkVxecyizo",
  "key29": "2weV6uBB1akCuqTJDNygHjtwrEdL6EhhUgaZ99vgf8zfD8HpCG4n1bXcMMLR6vxdZAT8DgdNP1yjKmxFt3JBoXHD",
  "key30": "2ARTTW5oSaADkvmVw3rED3KkMyumjk1rzkRDZy6WCRphWA2UDxf5pQsu6uCGaCebL79petdT3X8CFathm8M2WGp2",
  "key31": "TNbJRu4cKiwq4vdrNYqtzpSuQBSK7knGhABjQBEfK1YbjciLen2a5WeQ9AGS6uYw38JRBFp6s5sAQmhRBLCdHLq",
  "key32": "5VsMUZCeFsKUcYxbt2S7b2xuN9vCooaGdDWCtTrPsWLraKZHdZ5xAHrzbAwGMYXeBchQJbmRCsD3G9cr7ob99cfA",
  "key33": "QN8fneRhQJfFBJpWxFL85FQ73zBYUDmKnwNuueDYAVaeQJyCoVCpeGM8QKcT7WE4JhifWaBJ69sQMGHV58tyNtP",
  "key34": "4QsAfYNzmiNu2Hzs8aQWnHywEE527acMwHTugrHQrKkgdCYvwhuNDUrzsmsWpk7fB6EwkbUck8oKfMMgJjCb2H3b",
  "key35": "5d7RZVR7xbJB9WYdZ7LEMM3SHuyYqSn4JFYGEinMT22xv9QscqNVo3Dh4TS6mT3rhKXgqqvy4ivXDcJ2Gpr4AM2X",
  "key36": "3GWSFBhRdAyQiNWaCcLjkJzv2HBS7hn5nQxwVoXv449DXLCnzXRpuVzXwFHWjHc7yQAFTW4opKKWAKpqyxiinmZm",
  "key37": "2caNb3vzNRnYebP1aL8zD3TYbEJQLBYoTMnobo43GDzJXRZikrTohF3fgrBGuKTvyj8gAwzH1R5miyn656jYPUWS",
  "key38": "fr2BEELfM3YWghyqnYq4pHTK9ZkLGCBB5DakV8RdXhjCUokkTZJWjsa7GH8uv9BwekknNi97XNnQrTvyKbnMq19",
  "key39": "4zYyHr1MMjpwsrCpHnJSuhrT8hAthmaB1cfh8NYJrkPgc4N35KzE1hmZoiuHeRv3cJd3rfSRfnxtbhoPtPc5pqyk",
  "key40": "Jj6z32CHf54WE8CrW92C9irMZ75ptE1JS2fRdcPtF8HVLpG1mhEASwHHsik437fhxdACF4uvtSCGCexrXfQpJa3",
  "key41": "VBt5e6mgGKBz8cjdu2r2fjEe8y1sfjNnDgLwsaBo37z2PmYyHAuKK15aaA5X9XrA3e1inHbjqxkvgNqLxhyy9Kp",
  "key42": "4Qoo6r1P5dPwCGpkdG3YAiwnKu11orhBxmkkjw8k7ARSnqAUMwdRPWGnwhDenn2zn7V3qRS98xTdj6Vk7NHTzTGm",
  "key43": "s6q6ccfgkL1rUD6EfFUugACJagTyeE7MHXj7St4MB5XiPgmUuC5fW7psUoZCAaKdkgPVgoFpLXtFwtANU2hNg8k",
  "key44": "4LjaABrH3tG28Zrh43VVJ23tAo73xPfqkM2TT4ZjPbNQ6isFbityWU7qvwzoedgMKok7HnZ2hnEos5dQPgp9U6j6",
  "key45": "2qvumtTc6BBkCVwUg2UKzAhNtEq9VArsdp1k2eWPy4LwV6bYApf8rxGhGmdQWFrBYTicquhoBPttbvnx5y5sKcdp"
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
