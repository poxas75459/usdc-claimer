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
    "564vQstTugQaDk86XyR7KBmWCJmxFjUfAxfcBXebRbNXZzcSjhkQGaDdgJrzg7zTKr6GNWQsYCPrAvG6UTPSFfLQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Shpkn2Vx97rHsLzDfnN7EB8eWqapAjG28ZBL8ps4YwZZA7LqaF3U2LDovNuE1qnZrqVFk1vCv7BujNaAzv7j3wJ",
  "key1": "4tJ3izXPNyuDZCL8qRR57Y5d162ZpZZhP9Mh5ba2gfA7znh54cek3iH4kQDMdvpg6LBmsb3rrtp1aKq8MfG6HWwP",
  "key2": "648z5DGvAnBvrpS7hakFsWhoaXVqCC4ToL21F1fNDjstXj1kkeFxNr2rqEh4votpEcjwr92u4KjGTSkN8ZbcDLrC",
  "key3": "9QRBbJR65fJvuG8WVmfkvf7eGyB2gXybTEDbkbSpMhjALgYDT1CWs8Y7jUC77xr7xcK6oX57a3pUmcceu5XUFnh",
  "key4": "4SEGp4MaTmWqEE6kH1dg56fgPaJFYX1Wb8yFQymfA6X8GwjT8aMRKfQ4dAM2b4yA7QGcZaPywWHeBv6TzwN8xUKR",
  "key5": "61YRykb1vttomCgDBAcuah7L83HV5VjhYqpoRz6PNmReAN5QxsFFNbTcBBwxQMZdFq72ncWoAdNLP5FAELdAaZnY",
  "key6": "4efCKEEKKuyAKYCe4n2YCVhDmYst1MzeR4kmicuzntdWKUaQiyUbBJtWrGvtLsnjW5ZVRbTR3wMZ19Z4cBPFvwpW",
  "key7": "7fS3FgxEFZUoMrQ79EHDcRFmsb54xvMfh9A3kUVyc9E46XMWn2JeD3KWk5LQ8a1ZZ3ayS2qT4rdcdqALKyT5U6r",
  "key8": "5gM9sgVx3GUX2C1CUkNTFySzD1j6ncpuGwimDCuaMrkuVkf7NrLihaHWdeWbFjya25kC7qajmtCWfTxPdCUTuphx",
  "key9": "2MK1TqYfhasHgu82kKtaHMLVDwoYTBu8ybMb2MLbZv2asUH4bNV76qfACeyDziu8QTXQqEeVoKtirja1wRPTUgeY",
  "key10": "VxHTgdE6Qcyg4gRtyMhg5YLex6tLCa9gndE1V16CbD5QYdy4BGDhfsocsRYa134LK3H7PFF5bys8mbVyYWocWSK",
  "key11": "2G7wPpPF3PqQD8Y8u7aA32Ytt1uM3tLPUbGRHQgJqZu6JH562qyrupNZ8do4o3KjfqSnUquffQoCuYe8WUic58bw",
  "key12": "3Xx7g9VuVKCtnmrZEDCANf6Hocs8xDgb9nwqfPStDjVAzRongXVqaz38qyzaaxtTmJbUcPC1655v27VSN2RQC27J",
  "key13": "4aKW5YoLucXueoRE5LtqguyYG9M8LHamkZN86a8gjz6qtmtYBGkG46miLUmfbyCBShiD6VLHWU41Z5D1jjLZb7Gj",
  "key14": "411Tthr6J3A8smibWkFe3uAgEC915CrJwjZKjkqfc6VByHDSAF225McNo4bZSNm3jzzLhKJsUJ9xgJQtpXvVSfqA",
  "key15": "eUBHJv6rZN3Vo1Nw4C8tgntdS8pS8sKrccTTnRdRWGXDzHoXFUot5zotmqbeh5NEP7kDoACxZ23gToqfCaXFg9E",
  "key16": "2Bq8vZxeUqKzJeVqLdKTyEjrRrzoUvngCfik8JRNHxay2SeM9s7z2LNZaEVqFDmbRRiqHEiAHYjZt3DnfcYUNPm6",
  "key17": "4inb8j4QkWoHRwLy4KdYTvHSBwDW6FYnLSgVb8Y2CB5AhmQUQwtVwVjwVvDNonEac3DU5xgUpSa9Euz9ScAEXQ7o",
  "key18": "2MG8UgEgjXQdSQLFmngsExcDYb8q8iSLFuCagvqm1xbhS7ex7Th3SghuqBsKcVv4eqXe7nBa3BWGjH4ccHhnpoX2",
  "key19": "5F8wJwNCSMvx9Y9uKQSNjw9bNcMs6xry21ntYnwKGmufLQoTjjFCWgMemNUsBh3SvfS2muNJGyen28nu6dWzYHZK",
  "key20": "5MmAbJpNdsmBuyPeEyYjqhA1PtUjHsn68gqtz3e19S5WVy8qsGgVRLXtpD4zGqyCPv4xcEsQMoKDGxceqGE8AvS3",
  "key21": "32aMjuenDwsDmvDzXP81cHC47VDTsVD7GqxhzvCrZq1obTavbpD1YKU98Py2bm1PB7MpM46pEQZMKzMe8DSsxYbM",
  "key22": "47ZTfyNcvNSFLB5CAZAbXGJ3KCNLN5BEJbYA4VHfyUsSbRnQCSeoKhvy9jHskYPxQMse3bMQuBYynkP1e92aQJYk",
  "key23": "3dWTnUvUDAFyPmAbZSh4usvLgLuWAhYmtJ9gaHeSLFfvyVK6xoeSwxoe84P4ah9Zu8EyapPnzxoxjFPoRyCJqujS",
  "key24": "HTeBXhzMrr6ZFCeqemthi3iFJL7p7dqrBRcF4d1Rberpe86FhUyyRCaKtjxX7TKVMvTxutab978QkGL6GnUMTSP",
  "key25": "VcGahNSJLBvJedUMWn3PBmYJmCc7U46fTCrjrD5H3MXeHYAQEqdJ7JLqGftGqBsQjur9avX7Yiw23TrDVTvCtKE",
  "key26": "2RTuxerVPCEmW6TBBy1WhchAFFvsemMW5gyqCX4dC1yWV6UXMm6yiNhdYYg4o7oR8kLg5HbRAhnGNeGRNFk1hyqF",
  "key27": "55jYrZGMZegsCsDrcrzKNyBoFhiQ3Xt4XPfk89Pq1pr8mkEoBJ8TKvxXKmf4vqWNkqs4p9ecdPWPEw26ye5PeW1i",
  "key28": "3XZhMQ7DiGLG2Ak6Bsah5eGhKH8jcFkvjhxBdZhWBNLdeVvt2SeFUYAWQBrTcgL5CiEBH6g3ZbQuNk6qzjBsDM43",
  "key29": "26qRaKd1iDej4KTVy9vxVfgp3yzs6XJRp7QmUvxg98zwewvQGjVzpVsXbp3kDJkSjfPjmaAPD9HJ6KBRWyp2TPjS",
  "key30": "5K5pyZ2pzCnXdncMHPDuXx1DE5ChWCEGDLasUGe3MJ8bju4HWAoziHx3Dc99Vx8uicjjEsdm1QQxSjbLFkgJyCmu",
  "key31": "HkYFXNoZA9UrUVHtnqVgkLRx88j4bcpzpwDwurnbebsGNgQzfKBppELyzMV15oB6MNTxAg3eg9fTJqFhDirCqCD",
  "key32": "DvRiU3aYX877Cau2fQUfEGqxTXrcwL1UhmnwtLVgYy8XRK255FHvtYY5hTakKEqYw3UqAnxmnR6GhCu3XNErMAG",
  "key33": "3r3G4xAXvh4yneJqnD9hNjaiYvTAFnB5vCC3Wkwp2Bg3DbrdbXMqviCmgGGwyrazRhbUsJUXNob2sRLk8b2PLo5L",
  "key34": "55u88BpF5c2LpxFvigjMQD4sPkNmhrDKeTpNqXdvHGC5vXQabjUBAdyJe8JkMdJrJay1ZK6q6D44KC5mtAfsv7Ew",
  "key35": "5ivGbmgKVduaX9Circc5NCWd65VTR8fwGTXBryaLqPGqsg9tDuHPMKjCx1v1YfNkteJ5CGUPmxAU1v696RNuq8nV",
  "key36": "9cXjimnKWJjLimPQL3hf2KsU2kxyEGW1FGG5m5voKdXmCmQSoxL2y7ds4ZuHgeF1URpWfiKhP8AtZEpSwpwJsTu",
  "key37": "2UEwvHBNcNJ1WUp4NbFndAdHR3gwg4k74tLKbiw3HkSftSzHJgfK6m4WS3cks1nha3k2eemKUHnhhEVxV4ouRcnF",
  "key38": "WYgo9aoP4zBvBneAjMV32kShC2cb2gjppY292yTzuMWPxkLfPsmepxWvDvpTaJW693r1ygvRvrTGh4jAukwgjrs",
  "key39": "3MAk3yoF9DUajhW7v4GNrScqWkXmzjXu6bRP6SZfiNQDWz3FwN48w7bpjtUYU431LvNYNBqfrDQvnY3tHU6BgEjV",
  "key40": "RL9q5hHedoYaVGK9JgJ4mKpKYVQuUxTAzJKSQP5U1cCAESqZ4uTCwxVNUeaPxwAbsfPu2jYs62Sj2XgHm1W1g1t",
  "key41": "2YRBc43aRHsTxMmoUcBmysJdLbcF855uqt44A1xAksDpu6unTY7oRFaiBU4QctHj81UshPMNcHRQEhsrASqWLynC",
  "key42": "5gUWWef9nrK72hHnoaWrgsh2Cy6VjV92dWz1qfWSsDDivXCPvyj9t5JTqnfudbxWLVTMQumvsaGbitTAR5cGLbpy"
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
