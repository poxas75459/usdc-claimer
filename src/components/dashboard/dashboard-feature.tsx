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
    "2LTU9zJxNw1U587FELfrS8g6y78JK6rs7nePrYBSC17t6SsKgxEyjozt7uhVUkeSX81gCNu7nXz37VpELgsMRhC1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FS14J1RKVYo9MxxKFgY4MRRcCExv63WrKX7Y9AF4yRa1M5L4afCUH7dzGR2k9xBjjffiHfCZnq1ym3xeCo8NBex",
  "key1": "3MqFgDwJ9N3oZPhN9vv5QXQfE9RPWVX5wEjiiuN2Amjt8rz7EMN8na2QqEkRUKug4cs7bLfjpbW7kbSreo4rHCS6",
  "key2": "dXP3B4pNddeCJWGz9uVRCWXxygNWEZNdDqUS36Ka8kdyJ4kppktpBo3p5gqKkD2gbVD9641KmjSMEF6jHY4sBuf",
  "key3": "3SpE7bMNjANYdGysoU3Dd12mMxG1FchmD1fcvz1HUymw4SaY2QdY5njb5RrBWmzk4WwSuvbpiWvSWSz29a639qGa",
  "key4": "UEgDnUFk6f7gbrH1eLYBTyzeGkRrZ9WBzTPukLUJAQWzpxtzx8ByCLC6xP5AbLm2RGnTcyJmpaiyTSQbQCJkSKM",
  "key5": "27hTktBAN21joHQycZSeBuja8pB7LbbhWhxRVWs8ng92iZ3aM11p7MEHkBV2kt6edALBtYnhBvHxAJ2EL2kLi9EZ",
  "key6": "63hzmRBE1VHr5jR2eWNXHX8xjGSgmuZK246mDVJfYPFMZuxvzQqdt63m3HKy9wc7q3PSSY13tRf2CFjHUPXVMDQ5",
  "key7": "2ZwxBHLNkTea5o5d5kWCdw2WoUyM6cMz4uQ3eRciuaRfBEipby2WMKAKtxpQzGoq1Mj8SXb8zFr7ySrQcPkywWAq",
  "key8": "2PJq1oP5BCA5pYKoBxmTEqxAUYX6EQ5MZQXNAkRbDPEeB82kdVfqVXrjKXJehabh4vtGYG3bj6om8uRNrskNZDUN",
  "key9": "2JDyswh6uf5iXLYeRoH2aArxxiY3MEMBH2qkqkezMTaXmm7UpgcwxGY1TPjMKnaPPpjziugnrt4jC7fJk3EvfHnE",
  "key10": "2BeRvUyLWfpthstNLva7ULscHo3jxQ9fVLH88zn3YG8Sjjve1SKor7G6B9BAQuWMDE3qe1oAyQ4p1otbEEu9YA8",
  "key11": "4n7ftjd6UB55EGYFLWqYEdJkYaqe2wihhzDJBJwbCi6kuRZ6eK8VB6vUrdy1nhXoHPoQu8ZnUhcgPuQWbmLpA4ci",
  "key12": "4oWVTUYXbYHE5uCiDsir3eYHymUb7LWrnPBAtRDgqfRgLg7oP2oLgZJcm7u8PKwbJTfZaHwC7SFfzKuhXFqNxL7Q",
  "key13": "5FvtzyoREjjpLSjM3Tor8AEBqa8skU33hypSs4JVASb4pdm5aabxEYDd7AhAiaLembADme6QARHwURbvUtL6qGRV",
  "key14": "4pRCujhpzBzVMupjBL2Y17b4tPX2zd5SbaLb7iscrT7BDNAm4EFDixh2sc3er6oUoz5swhtUYCZ9vNjceuhHEaHB",
  "key15": "4R75xUm2HufbEC7xuj6SJBVQ1EY6D1KzgYuxrgw7L1h5zcrzBn1Fn7UYrKMZV7EF3wjy8R2CU9rd1bP2BMhemRwv",
  "key16": "5jZFZPHv2wtxREdLEV5Q2eLd1RVbos8sf6kwep1QTQDLT9p5wUzG1qwv7J2yzmAJq2E5ALkTNkFDTDarAzdkydMU",
  "key17": "pFwsuEMj51QQQGT9YtogJ7rBEXhEWfMY5s7cEujGH9rdW5pggzDFCN3Ho2rgjo6hVjnzmhLbJM5yJXdsY1VNzAw",
  "key18": "3BwinqcV9xJiqGC5TpS6gMwcpAdVWMGgyK96hvr77yrssKQAyrQi7s2qas1UN1334Hqb7Dz8qwBHbwNo3ajfXH52",
  "key19": "3quj5MgtCgz3VcgXQVnAyQ46gV4g4mdUNsx1ndA7ZFTQiqnBVKPzXxgdnJwqTqovNrQG49j3Rt2S1wHRsohLAPv5",
  "key20": "3NK9VrpxrzWnoM5thZmC6rT5wrWuLHwiCgdjkeJ5yLZaCuLhptEQH6RvQPbRYo5iFnF987ppBXxZnHTNHzHz7bKX",
  "key21": "S6TmHVEJtz6ZFtmysBhyvKZth77noCDsjvMEuKvddRaqehnDWuMbkGkkdPphVmzVesqtJcCVT71A1sswQgxYmzL",
  "key22": "ay25SMknfeJQkLk4iBH3JZKGiwxrgirDyfUv25TiGvXXyk6uniyJM2LXEve7CdNmLsoNTWcHniPxRN7t3FgQSmd",
  "key23": "2ZK8paR22z2JmGexdcjbAfs4QWAz5Vnzx9KYordvPkjRLmizaCtH6mCuT8FwsWyzi1rGQ1G5BKsS5tqjppAKGDEk",
  "key24": "4NqMz6qw6YoZy98EWoHfQJg7MDduECcUQcvqa7roRqVJzL2PTQv8ydN4SkR7GtP5AisEVeBmoj1DuLL8d4g7Fzqb",
  "key25": "2j2RsuQ9jT4TnELMdfsMyHhnUuzvjcNSsV7hoKWWch9b5bmau7sibp3aqy9UramS9ydbVwKEa7bCAKY83TS87TgR",
  "key26": "2L4rBRZCjSxd4hvz3ypeBU6TtLWZhgavkiRZLrTZEyGDCXD7h9QXD2R6MwqTARdYd3ZqF41fBcxYitKEDJxRKgFi",
  "key27": "ZwbD7oGceUPR8eLuVm5FgDETq5MQVYdquaA5E2BHheERprkh6WGCjPffP8V9qmn4Eg5fEQJvbu5WXLqvq9N1V8q",
  "key28": "47rg63cUKFJ8Pd4fyotggUKzPQW6vyjf3dRrVBmndpjJvQ44WKc1ChNKsG6HvQqVdfFse5ZyorqJcr6rTueo18B9",
  "key29": "3bqrvqqzGCPmbGHVsEvcKYgp35GUnWHfxttHB7T4b83kQbv6zKyuPyZs12b4DHDCbJVXTSwPUtwjkBT2bPRicYdF",
  "key30": "YKVtXwDPERZ1uukdX2wi8fEmZTXvCC28QyMv9EGWNRHjQCwK7D9XL6NxrycKGYdiNHnv6jb9RfwMvwSVKuF47CV",
  "key31": "BuYWUqn3zmumXS12invuPnpau1DnjxLLxP2HobvDk9p6powoG8sWb3Dt8fYdBsfynGhfE8SX99basY2v5zjjHG6",
  "key32": "5RW6aWPVWCned7NLEDKFNm81TcrxYDWSsjeSQDRNDZrfCWeJHFsb3rPMXVt8pTmtCEjU7azBj2WF2xWrAHykq5NY",
  "key33": "ps6ZQroWeVRQ9VhsUmuPUmUmChqEfj8dx6Vgzq6oWbaok2kjS2iSNfcX9Dozsw1soXVZMyjjTmzGYYvv2GQny8a",
  "key34": "4PZPpUkAmcTu7shLfPzDkdG1yda8nZXuK4CDRPRA8sM1VnWhgGsd5KHxhanyAKBvsqemXqJoWhVvupGufJMRCYNT",
  "key35": "3i3oG1Pv62Ep66FiuApui4uT4ndomwyZ3aKs7FEBtzgjYgsoEwaXuXpwqEk2KCsCVJaSqXE9kiNV7hJ5Cc4BMnDs",
  "key36": "4yAz1TseE41LCbuwY67n2fQFRrJJRF9AxVj1F1tJNQPceTVtvHMgJWi6dVT8mmsfLbnSqzE9AS8sbNjNc5M2KZrM",
  "key37": "5jEn2XSBVRBVxKHpTCdonG4JqfJm8i54DExfwbGcBZrXi9tNbzWzoRuDvt6aeQu3C9jz1zCFMsj7b1HJfE6gXj8v",
  "key38": "5VBjjuSiFXS3B2cNACkXYTAPZ4tJ8zshqnCmHRtQor7cYAK8GPGnATUEAH8QZYEjHxTHz9uH6JjFmVshEsXtjzWm",
  "key39": "25c68RdtfC5XGg9zRSWWCoa81qtPkd6oyX1HwFtnw8N2iDWnFXwBPpGrRSQS4rXbxunPnDbbZsY2tHBpwMketbR9",
  "key40": "2sAVdpPemxE77qH88Hb456ZbV5B5fD7PL43U9VRPGv8i2Dd1em6PgsnymTsNjzxijxSs5L69rPAF1Epg9pu8d34U",
  "key41": "aHRSLz7VRSd4TTbK7yGGYU4h9T27VpLKS3qE91iy5nshA4Zha3GtvSB8wWqcgQNH5eFy5q11vTGmANcyLW9SjtB",
  "key42": "3Z2Wxbi3CPLXncKpWSQ69TKMVnqrdcpW87wNgim84HjHSwAqgzKPDoDkMNcYwazHJnLsn7iGe9EmBYJxuA4XNNpD",
  "key43": "29JZ4SdF6SzQpPKsxHQq7zTaHgPgK8jjr2CP8LH1pAZ8at2cRrEf6UK2RFwPb6CwPFVCuqxoMhXmbTuQXgvYFnus",
  "key44": "5DeeerJwV6uR1QYAXrUhm4LwwR1BNDegKYJZc3q59Qit6Z12z1xPXkWrPGbj2gY8Mb1FsmDSACGsjswrjGMoSngc",
  "key45": "38ugecadRnSYMDir4GHZWfM5pUG6ZSoQuLbqqeoRb3HKuZ4u8WDzJVQjwL2nYnJtWngQP2XcJEWBCqqj2MEag1ih"
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
