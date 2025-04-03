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
    "3tAnDrSjjQKHY1qYdBPbyWsW5GfZ56UX9g1vRJUgxXfypZFg5MNR5PqJDczunHDyyUoPMjWHC7gygTedmNNPcCBB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9prBTi6JskKUcEznE17MvaHV8CBx8fPXZbVvFq13TAJ4krQ2mJxpgpWepSPBifX51V8dLxD3uvaYbNtWyLTNEvW",
  "key1": "2cUSKttMUhZWR3aqv4cnLJCho3i62HRHWY9LGp9VfWHbtzgwtmpoPVNxEpmNSKdyBAWwisiCsTpQtPWbqXPCU1Xx",
  "key2": "5NVaLBrjLT5Q9K1HDcAMGaEAPzfB8QeFbmnAbYKn6zeBP4BXaRmnN4p5uLjdoYBudtTNFkKseoQucTgT345Ekkk4",
  "key3": "47foC6xPZsQ3dYq86AojeSGHZSpJoc28CA6kYipQ2F3J3V5WCCeWHSWJkpCLFqMpK9Q6vbMDqmtYF3rh827fLSA7",
  "key4": "4u3A4uNCc4gdxdpfJQYMDhxNChZVis7tZXAZEujGpp6xri1bXjK47QxEqPg9ZgvXYaUXTWQTr5aPnf6cEw7sGB1B",
  "key5": "5Dpj9hzxXdpTi71mMauegvwsrKgbWVGFSoGcSQQGGqjCpka6xDjt3pFP1WkYq231EnuZLg1NRvGTwT2gQezwsgzW",
  "key6": "4iYyufesehb4NboGSV9gL6tUyFScpPn8yyt8MkFSX5D9ygKsAUpFCbbnNBU1sYSh6kxDRdtK7k3z8fQmp6VVvELP",
  "key7": "4RpLvHLx9upibPtsW3p2N9iYBvtE4FdhrFcVuHCkW5Y47X7sFuUUfncrD51wiKyVrftvGYKn647SLTbm6kdqFFFr",
  "key8": "5zZRLAUfMaZbbuTGrTj5pY8tsGuwYKEyxDh1qnCRPTA6dN78wVPB8G6Ji1YimS7uznGrHNabxa6zcfGfnKi4wmPF",
  "key9": "3bi57wya4EbKdoqukDY1dnXjH4KL1da1Np3kj5emgDEVsvW6rJQhtGQjAtSHuycSttN85927UMwMmb2dywBPqPB9",
  "key10": "3HtK8tkvnWCGDNUxtnhb9PFALio57AHaGrqxH4APaeJngCu7jyQLiENuz85eH8fEVCiLu6AEZJqDkpqfUyssxAKr",
  "key11": "Ty4PpedXRtQ4pCU3B3uoSD7Yj4aaRnZZRhz3fvzLykAVCkSavPcnp4GPoU3ZorMyqQFPPniqxiCqajgZjhKTe77",
  "key12": "5WvD1tgMKxUxQHXk5VZLbZoDbnWLWZhgfTXnRwQ2AuC7RQEVmuwfmN4MmrprytBwBakG8w3z1EdFmvBkkgQtzqDU",
  "key13": "5sbwzTAXsNZPXhVvSS5DwevY4Skwa5APy6jcypsncGysnE1PCZ1bX6JGcS1XjE6AQo6sWERx1zS5uKgVeyGXRDA1",
  "key14": "5gQsnvnxmeqPx2aa9CTzc3yWcATbvpFtKu57qq4zp1R5ZCJdA65QdcZZXmSTrvGQ4jWhBYSAajWxwueuDSh2zP92",
  "key15": "4j6Spw7EScd1PCzFCi2Fq4XvoSzCQHXMGDBugyGzcA2aqg1AYUQNL7bMGomgUf48SwCvRdAepZWXSbAsNdMs2tKs",
  "key16": "5CSzcnMhHGFhj9mBRSxEQYWS4S8bf8u2Sy51hpipwsqkHBpmysDBNqWmV965RDL9URTkSpJKkTQQBjK9ywxzQUK2",
  "key17": "2ZF7egL8Wa8SHB6psoZCPGKu847BqPDPbG47XtyWi1WM9QFdFJWSbAEqu5jEo5hk96iTyE6WjdJVDbMXmBiUATPV",
  "key18": "43X7oN3zzhnSzszmyBirBoT7c8eR6ZkGdZvuJm2rE8Ug4KRdpzPgbzq1gtBJgR6SYQMXvMEmmmmbcm6eJ8HcaWNM",
  "key19": "51HAapm5xNpHfwnrVugmsAUp81iryrsixoCT9fhnnvCySqeoMVCHJMsg9H8XM99LXsAQTg8j2BzdbXHhdTXVdH75",
  "key20": "4r7EaoZejSgEHv1tAMuubakNDUYAzV31WydSD3B22pzYRG5NSKJAPhdoU3UW2QUfPajQAgV85RYV798vkvuUGPWe",
  "key21": "5vf4ELZsN39s5vFqCV6ocuVTxhi3FgbWUEsGzQ1pCAmVYm2UYcaiGJRAyXkSfWfNQN629aGmgyPo3XvbTfu95DDF",
  "key22": "Cy7gRL5WkQoY3kjgCLq4FQ7WtMFzXAzqYTcNuQcPXn21R1SaqatPxpmP3yex6yENLkynhZ9ji9r822eieVV1K3E",
  "key23": "34pbsiG9eiApQzLq3dPkWew2NzS8jG6PtiokmuPWHigkitBMSV2rDdztu2jR8fg9yzuAxYj2DDE4tajfGBAs3DYq",
  "key24": "5CLfgFKgRhwecHGLWA5CKTn8CcJG23htNzjQat9kp192WuW8jTpsRdn31ravgW6thj7noUL3h2bVaAtT5h2NAuxd",
  "key25": "3979rZESLMYBCVoKtkqTYmkoBJsvqwFp5jM3s1bH49MtBBqchB2jSYqXMpM3tC71zr5bj9ktFfrnsPM7wLhxi56y",
  "key26": "QDSq5TrwgsrDV1w9K7CGzfgppV36fKH7Ayj7FB4oeHkQCVehkDXLoEkqUjcwpjH7FCxksd9SKgvQPgELzyNwPMi",
  "key27": "4fGsjKCrCjm1pm3W41jdMCcB2RtLeozWq825xzkN3eD1JSYbATb2mUWww3ZSzRtLBh6rhsqTG129gTRLLu85Zdma",
  "key28": "4iyGQB7qBhb8mQtgZ35gAk58VtbucFAdjCS4nw8BsXUe3A29ss8s6UF4dvG7mcP1iNyyKLPEcuuduZYeGFDnew4e",
  "key29": "52H7yZ7jFPm3vnsA3GqTn1Wgd9mUybkKjQRfR5Hw2aWjGbr4rWUPGTwVoCFp3vXZ17ZjQ9wqW9MgYuZXWLEb27HF",
  "key30": "4o93fTwU64smGUxSTZPxhBECYo7Qcu28MWcwsXccbn57Shxi2aYTCNww6T7PuoftHrZCNpCUhK67oATVTG9KDgD4",
  "key31": "4XHKTZPB8hAgjSeEqiEG78ugcKSfRTJyp6npghp9moNgURHyKp9NihqGXXvAekPzyEwGK86HLh3ooc4tZ8h4sXSj",
  "key32": "2Kx5e9tPghdQEjn4fZ7u2RdFB1ktkC4K38Ry9joFJHWw6wyBaYxh4jPU3wMc7rNRo7ZuyjDFLk8MgqjizjWSgQLs",
  "key33": "4iBQjoJZGqwFiwuHYgsXALSrKFWV5RsLFsyqiQYipwSvGWqfbgfzAtcTk51EeAmGRSWmHRXybRVCagCDHiVPyMkH",
  "key34": "5bv7AokrGkynugCxRydoawuxnoEyLjjYxJVqKWLoXcsckjTHDXTrFpymzESn5FZs2Svii6JhPJtFS41xgQku9V6D",
  "key35": "4i6rksKWPDVspFDtQHJoycFUbv85NL8gCHAv2pdMif18W6U1mPPREYL4gKfHyWvipah5E8jAyGPynwuoUXiMN4Tz",
  "key36": "64A5ZR5WuepCFDQmpCxDSUjYZ4AXtMhoGSJQNVcWzZtD7qeD4qeurCWhvDz3Yus52KnZwKUVTh1JDkF1ykdVmnKX"
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
