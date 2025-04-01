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
    "51N5h6tuQhLamuBfQUxFUnWv8edn5kqxkD1bgq4vM3XUBn4ESdvRfLSB8yByqcpRnZF9uBG5i9BvmDedMQmEQdV9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22xD6nCaQTUCV5k6UPWMvXr67C1PQwb2LC66Za6Y5J1zeVWYdjQHJkTRXhurMvBtHnzkLFXiqaDLVmKz7xYUpzuc",
  "key1": "3ZqbbaDYLfUCThgB7eD54XGB2XoJPfJ3rTNvGghcQThBosGzfG4cjWsEayXqqZmuxvKyFZhKkiyBYP4Gf5SDdJQT",
  "key2": "5rqTukj1SutvN12F1kRKM655GTB2RZESYhSYVmsLDvT6FY8fgGLptSXtBSTx1iv2MJmk37dtbtPFTR2ZUzZgBfPT",
  "key3": "3QiLcU4UPLeNYnqLvDfamRCGRsoi2iobYmBXWtHnzJGJsnjn2JLXACPowvZGYdM4CdL5igVGFCYemW28ZNLCDZz",
  "key4": "2ywE8ZVLAV7zJbjwDmf27SA33KQooVAxxEqBQLmEizFJDxYknN5PLfYoPf4kbveqQvAR1ZZGBL73DfUHq7eKBuTd",
  "key5": "2QZCz2Jdwuvm9dFWhozLLf7HFeiw4zinHWCHxHHu1J8vYof4Bdh7AwDmVNfbhSTTE6uchERCgzT6nBvFCK32iFcF",
  "key6": "4bCjusqNCwjDkzZLmyRHw84gu1aY3ZQgFa8zAyBekR4K53bpYfXuYnKUrGTUtvWRSa8ffh2XcjRKt83UruMnQzN5",
  "key7": "5VQsHimpkt8JJKarCJakHvXVWtpJB9F3wG7nq5QAQdJTDMdvcUTq63TpLsAURJKXLcdo6AEMBR6idCFw1thBfQ6G",
  "key8": "5MfgAEQXGkympQm14YbYyVreJPThAfmid9JVLYDqNegiSE2MPt8abKa17ToykZwG8dQspHCTSxGtsCCXdUrzE7qH",
  "key9": "3nwva96seo9BycRjjFa1dkxg2LKktXnhCaZytaoEc4MuctU6n9oekYwC7uD6Qthf9iQ7TF6ubLaWpNGYJh8KhD5T",
  "key10": "4HmQUngSRcL4Y4naBgGMZZpzpxzGxpXFQv5MgNbHGFVooPYg94n3bt7Nhd7YGfpNaeoiK9FBWXKRSd32amYpCree",
  "key11": "5X17VxBGKhQv2UMJjxChX4SUGeWoeqinwR8z5xb9Xpnpo9cTfroGMvy7esiTjeDK945Tc4rmdtvRfS4p6vvD8h8x",
  "key12": "QwtQ7uE8aQZphFYecBvErsnWKbq3v86ScfhrLSyehqCkBkunpzJ1RKcNtXEQNNdXNnVWUqM9tEpbqBXXUQw8ccL",
  "key13": "3AgBZGxU31EDycSXYseo7CoSG7ser71ueFoNZiL2i4b4A4aooTvEppBoXVHj69Lu9EFmZdEd6Pp7R3oTHCW2zGn5",
  "key14": "24nVJUVXGHct69XJbbqHx88S4eKALtxhCwomFj53Bjxv4M9aiL2MzCZd7Zyo2TzUAGZyZa6LL8zXQPCFzUH28eit",
  "key15": "4gNjYbeEcH6vaJzRKJAAKvVjPsUwjbjSihvXbH9WAni2mje6SKHi2W67sQ6qTZ39yFNUYoA8tZoTG4vjJ8i19bNA",
  "key16": "43B8u3P2XTvS1bfo8c3Tkb4LRUrNYkFFwLdv8JhpbuTqnyykZMJvd918uyMC48VxdQ2H5ez1zUQKdcyD3nJjb2hu",
  "key17": "3DRqDUipGBcBRQwJZGvHKyQhpFf5wp5X8ie9qBuENv45TP9WTSp6FnDHgmVmXwLFhnFSiQdAFD8k65cWssAMST4b",
  "key18": "5Bk36EAyn9LJ4kTkf7z3ToWKiQjYGj48Qd7Cdcps6PA2LhE7YqD69GG5o4qgwvowXev8yJZbRup3HN9vbJzhm9Lk",
  "key19": "5HDQrHdpg2GbZDRLAmvaD9cqmk8ZcBGY3JzpzSe8DwXoeLD1T9jgSuPaZ8i2MypsS1o69cWxZwR8WJawLPKxsHv9",
  "key20": "4XCgXLK4jMQqHb4NEgXEp2PNnAr3FMhJ62658jwT5j3PqVXTab5724GL4QuiPNRnGymbycANP8Di2qBSXorRJrF5",
  "key21": "5iLJUcS9BuvDjcjin6PHCM4QDFahFaFQQEYZ4EsNpJ2fNVLApBNEsSP6TEJdBNNMedv457weStyBwBHSmuq6DrQu",
  "key22": "5X5pAFk8mQkRwa6RHNXm5ME3myo3G1GgHYE7khViThf71jBjWGYtebd6Xn77rPgNUVqwCQi7XP57nFicQ9t5HGBZ",
  "key23": "5k4Vcch3QuHU8rHsb9puqeaMwd3S9j2hL6geWFid62Jnqh961SwUdBvUrZ3oCqDZPPD5U6LYidKTjLQrPTK2mrcq",
  "key24": "3QcHzjobPjRZYr15hCjJAwxf2xKk7NBGpngcGvdykLq8SgT8EDg4Uy8kvma9Y9ZpNFCvKYu7pYtMywir4ZM6kWFX",
  "key25": "c8kWxohLkULzQNBUAfmCJwxBgvKLDYuhi9YLWQbcio764Rbsae1aJbyjv9JcgioKk9dsswZ7bjDnHEz4xy97Mgx",
  "key26": "3ZB1zf32CG8vxmHYx8GMWap77K4WS4Wtg8NtssDZp4apsiaisffXDrS7tNMWzKo92RVEWMdzoKoSwPrUBwV7VGku",
  "key27": "3GEixTCGpNTfM9TAq22h3Tydk1JnXGtN6a543kRcg3dkT8DYtxerQFdptwHbJKS4dGM87MQLVve5Qf4kkBfLyCd7",
  "key28": "5ncATQNxMUEfepx1oHKdLfyj5Lo6cACJbPkPBRAdXoN9woQZ4WxN71bprbgsDQBfoRh7Bzz3BVof9yDkWFqmirG4",
  "key29": "2bM2A8PTEnHth3bwv6j5BiePjpzESxLMAu7wvpysgMtbfjRs9zT2W7S1HCgQyq2dPcAenpg6LVYjnkM8pgWVZ3AZ",
  "key30": "hH8P3gMhVVrNkngKJku3yBHRWv1sTG6z6i5Urv5ayaC1sxsLHwZoF1U5nUdygrLzSNH97gVq2q4bXw3EjjiAzT6",
  "key31": "4g1CRuS8K7eLzuGz1JYTFpvb91WneuA2fa4ymFAbTVKgoDfcrmTqFJnJ97e3Af7vyW7g1mrsHDXXS4uk7nuzhArx",
  "key32": "4fc4c2hzYVzbVTEqaw36avXXnzLuZdpg4xmuoszBuH9RFnG2wXmXMk7buYAKxiV38wyxduRzhWmNaJDKnpa3WT3d",
  "key33": "28XDSvh5KaZde7LUWeb6HXMB6wkcXSEC6xFmyAbAqAKnsLYpX8EpbNEtqzwGAWb6oARDEe1TMtkDZwwTWj1oPYxk",
  "key34": "5FBmFC1TWEZoEdqBrgBA18uNYywafCfLk4jGfb8vAVPeMf9YT72ZT3Q76g1pc5QtMFrzZoqhXyFcKdqmrJTEdjK5",
  "key35": "5zFjvuM2oSP2NVVigxjG3kswWKprNfcjHcUCDWw3LkCdpdB64eNMqNpT6Hh48VmqnM7NwYYn6VbTnKzKGkQBgJja",
  "key36": "4EDEQXKrPHyp8jDweZQy98cwK6VyAx3ntpxE5pYj4uLJdwuPTeqav5MMJJ5ojPGGapqwYiRWSHTxKdw3NMAdhoWs",
  "key37": "tzRoTKGtwCH2LU9xxzTHntBpEPaJc9ARxNkDb5a629tQcMY21M5H2RvUQ1ho43oRBGJT6YX7v8rCWat97WHKNhe",
  "key38": "2mvJNiXpQHrD5QWqm5n4TXKVFhU2xQ2ES6hvFhQ12XZLnJF3MGRwtKzNL2KKsqpSUTx647RfWaavRFAykrxREfzV",
  "key39": "3VpbHWQPKSx2zSiGCUqYVebhbMH94Q5A5tbMtTpf4rrLuM2X4qMi7Pk7c6WWhJw26cMEkzVKm4te9b1eNT9qQoGE",
  "key40": "3YHLeGpT74UaqkLeeC9jTxt2Y6AsRH7BTme9nrgCxx99eRBf15zD6LaWA23jc8tPRKfHg6B9P5Tw4N2MmFH2PjtF",
  "key41": "4ay84AtEjZXstBjocFrMCJUcLvzm8beXsegj6rFuiPH6qxJHRTwtRDcdmG7mCCsm6BJMWpKHBefirRgnVhSQ288T"
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
