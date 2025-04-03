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
    "5rbp9kDdo7cGDXELBtCyuPLFQzg4DmNnp5h2ygntEASkpEK8BVYKd6isZFFnJVwMHk77b5Ced8n9aizq9pGTbxjY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NxFFJPnASjdTWVgFYYMvJor1iZFKuYK5HV8m6CAXBSLn5eYJrU38w3GRw3Eyi3YxaPEWnxK85MsdsgXRpmZUZbc",
  "key1": "4nnBVxtbF3nmYh8odDLKwCGmR71EZSZVYCxC1Rzu3JRweELVokiVSb59cZy9toRzo4MQMHbmt43aAJpHBuMqes6e",
  "key2": "5C3hiGDadHyvFCQBE1CBYpWXC1GPNXFSwTynbAZK5nsJnMDjBdLCFakbooptfvSGdhRBJk7iSb94LcS2XBxbgSVH",
  "key3": "MGvVcF5gFPN5mHiHNd3bQGz5ijyN981D9xEZa2MuHe8XvcSrSjeJCgJpqG8K2vXvFJ6NVuHMD4JBSjmdcJBmjfZ",
  "key4": "2PyeQWQg8ijCXm1hEvU1hnAtL95JpReT9ZpczUAL5zW1ooLxWQhH6a7SmRaeHwFNpwpfQHJWRaMYVs7QoHFRgAb2",
  "key5": "4Bxt2Q1vDNDRCatma8hx2roLw51fpqFLNZ8awG8YpLwt2ybor8Vi7zrrKhZxabw36kQf6fqqgnRfJ4TQHJDXdcBM",
  "key6": "5vq628zYZj7aLUvJ71yu77dTUTC7wTfNsgDydSwNvFCohLa664hK1jEVoiJbpqfbENnjENRmCnXgCEdyjtoy5uug",
  "key7": "kk3Xbe8PfHBQWCLuvJb28LfNFKnsb2brPFx6ThGYn56viKrjgB24zgZ9pry2WgQ7r7bP14HUiC4bJb5v5r3bNwi",
  "key8": "f1t229ZvcdCYMEBiabTrvx5BexaAYwRinx8ru6G3c95J4ntGQJXuuoD6HFWgGD1sDGaksu7DCfeevQdqGP6RVsz",
  "key9": "3wbczxj6wpVPuBcathw4714FjHSowkKTVhmj1s736nrh4gMRNACi15A1TMt6KB5QjAis1CcqFqQmHazXD4iWGxqu",
  "key10": "4zdeTNz36n3KhiHxQAndmCcyzQiueaT1JqD5C5c6wuxodtYTVJ35dM7UPY8B4zwCx53AB8eHhdBYdVc1JVf5L4RW",
  "key11": "2FH1661FEM9UKkexoBqpPv983pqrDSzMiQ6Q967akWh4jkroWFhW1xs3pBGXS9kTrmZJEcbjmXDMhFZeWuuWpFQf",
  "key12": "3eojMhBdJHxHt1SPMX3MmT7E162yPRRa4XSiUCzaxiNcEybs2W7erN48TDmCsYUbyvLQsL3Sq19U7Qg5HFKEnMty",
  "key13": "28oo4gZMwaKjL9BWnYTRpkos3SVkKEfTUR3wSeQ6qZBU2WPKE8aC6HVF7wcBqvKQdtsz6dR3fC1BfMqJjphPhsFx",
  "key14": "5JbH6X8RFX6swF3KTWQ9jaYk4VefSzLyLUd8SQgpQK96ZpKYE4qy5tmehCgu26UBMTegyBf2nnENJ3VhtNHBGbow",
  "key15": "ZSmkyNfmKGfaR3VjXEHWGgZs5d9Tthpi6FZGDSUqwYFCh348qUxFGgwoE3wPsN9CedfL9fLL7Pkd6pUfi97wUPc",
  "key16": "2mZfrNzwA5a9QnE8iBhbHvV62QvqE8fsUVYJ8deRyETBrcmTzW5rroHyAzGWyQCyXTWpCbNmVgUzN6BizjkDCitt",
  "key17": "hS6rZZz8t65tYWN4GRnBXgiAFpFXjmabijhZVj8axJkSd2kS76AXWDAR1S6vxGZxvnZh4RHvmCt6ufKn8gpzCRe",
  "key18": "3T2k4QQJr9AnmxS4XhatUm34mqxDAb8iarXNZTyJwxCNfcGPQhQQcue7s1HcZVesHNEnCZ4VXn7f9eEE6JmrGAmR",
  "key19": "5Vf77LeFYCUJbG4qWoiu549reGKMsark8DtHCk252Mo3wd6CXB2K6n7BtSJCAgypaQgU6Sevw4tpLw4jcHvXrokv",
  "key20": "5y8eUB7LgAHXHDK2gfMmKAVQ5uJjHiEnhgTaS9UrBvkbGkqWxRCviJeYNQy7D2KvBTGR952AkHQdfEXgayHGV1yr",
  "key21": "3YKVozLBDKhR3uxtfY3HqusXHHWhsSWowX4NXwS7G4dNXxC1akAobsBDT4bd4moC7Dje9UZVPDtFZsKfnL1b5Bro",
  "key22": "2fLoBQBjbUZdWZ6XqJeCQmJCsqjUeK7CD1LYjV1CKNnvkbtKreNHLR6mAk44L2vmt4qr6kc2NuremUbcd2o6GNDJ",
  "key23": "aw6PgEjRVcbjPQwW39REuAmJfXZ56chLFHqATbtRgeehu5zBgKcVn3GdNMdFrpCy9P3o7dxppa7R1YcTpNtNx1v",
  "key24": "4dfNqtz74p9usixzUjJJqCMaptuj5iQWM3w76WJRswA1YoTp1UEMS4rgGwMBHQ8Lkfr51hrrF2hYcCtYFnB4AR8a",
  "key25": "3hcvizt3KiYiCXco4VtJf59VtvLLkgChtznuGnbZzKDPtgPJp3tyDpt3zxSYvjJEvpGLPZU2tGPcoRREEYEPYo5H",
  "key26": "RAURmaagMMkkB9GAHtSR6khUafJubDdyKD17smLW2fcjDfB2UywD3LepAhXwuH8tuZ5QqapfqrRV7UK93nRrNN4",
  "key27": "43q2eXZm1wnufWauCpaA6Ytz3GPJbEckkrr2N4ruDuXJCnoVgfR7eHBzHExwB3Xd2WwDdMwoneNGiYHjDEwz9mV2",
  "key28": "49Ma33r1v9RMZdQyxqC5JeFMhS9PwRew27UNj7nupKYCRvyKMTnMJ28aAN2D1abLRv39yCRxCtGWY6VQtKE5fK7P",
  "key29": "3UU82nqjRCFQPK3mFTnAELyUq7Tii2VH2QhnGGJ4YKd8DQEVyLbY4epMAHvWayTLfk1ZtqisLdgt26n652biLw3R",
  "key30": "5TJsoPjPRp9jAZYzr6e11DsjRgvCCYFjvaJCeuFb5MRL1G1YLj1awQ2URSg2gvgZbpwg3uHdNWbisWGQuDQ1kzAF",
  "key31": "4UvHpnDGD8q3ZxEkAJ2a6h113NpLbVWxRgz3AB6smFB9YvizHksNy3r1iHwm1Y3nAh5UShh6d5mnhUDTDiyREsJ7",
  "key32": "2ChB1cx538NYnisHiEmPB3udGFbrMUmLSREqEw5L7JUd9cZsv2mPqG6T5Ehc5bfbAkpPAZz6ic5FhUG8rDazvb9k",
  "key33": "2mfhzNHHm4G1XDDn4Dwn1fqSrB97BrCn5Cwxc1pS1q53yFN5NQRf62pfChSC1crCMVQV2biV7kxbZmKMQ8EuA2Zy"
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
