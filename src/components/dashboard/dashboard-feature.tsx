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
    "4cExN5UMsxkv32CMJ5t9jp1MYRU7FkQqMHjeeNnZmnpj4cHVVKBtgYDw2YevjvmdPGBZRGPBWqDC6h58Ead7Tao"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4v5YNR2vv72eQZcxD45b1voqbjJ9enAt2bcc4TXwTHQcuAJXtvUZuNEUcz58u4SHrsu8yG4r7qznEEizkWWYeZgu",
  "key1": "gYDqpzZNMXysih1wTq9e3Ak9Zmbj6k8gJWSMW1V6DQyr5AxqYwwtY2jUFZgUzwCnjEq3vA8a6HBQVjazv3V86df",
  "key2": "48RrFN3k46w7BTK3RPNbrUK952iMjE3GnZBP3ntQqNUWix2hXMZf2QXaSS7iLxC8V4rWag6agS4R5wwUN96W65fV",
  "key3": "35ZgAJPEo1xMXRBG8huRp2usfhskB5sMsj3XqeKj5zfxqL8ea8YVQ2mJq9ZKyyLNfsVvLuJCMQU1t2skMUxQ6KYC",
  "key4": "5ZnNs9FHspHUz5VkHgMrw55zXACmReHBrZtR4s71CHBEs36xxaZHQbgATEoa5N2oYp3T9EM9nNRcMRt7MYpC56nN",
  "key5": "4LeujK4XqLHxe3Pbg4uMesNWHGzKwixGjwUsfeh3rfzBCEoffmARx2ETSGSVv1tT1nd8khKA1jJiuiUmZjKz4ZmB",
  "key6": "351sKCa5cX7eqmjTVXNKo3yxHbwWVdCQybgjrDPEkpCg2J7fJnDrL1JECT2iDK9nPw5yC7LhURPvVjmZRjCykGKa",
  "key7": "2oUozucxNAknHJkEBnJ3wiZnmYtZKWrUTdhtbyNchDFXLhiXEM4orKG1Mw8rzYLjHcuv6XDwTgqU1KYNJW4KySbQ",
  "key8": "4CaDtee7JgcFP2ZNxr3JB8ZpBhRD1VFvMc6C3dwmWFMT5ned47UQC48cbGKA652p1AM3zivKn6NsnbV8xfFNmAWJ",
  "key9": "WGApHfaDVp47CdryXLFv82aDqvZtP1b4BcDvDWCj5XtxHa4wyXGuLRnVvJGq8u1bPiw2jSWNFgCu796SoWX4phJ",
  "key10": "3DwghzeuoyGEnXByKYMgVwH6MCvAhSb7gpUtfjvv4WQM9wGTrd42C2RuZKEvh1ZPT78T9dADp1BTaNosqi88M8vv",
  "key11": "2YapzNxVufht6Ab62SVeidKQTANPiGvkLTrQT3WpWnSA6CV3do1Ek6imFrYkq4ukGqP46EVGgQLDnsomcMSWifCh",
  "key12": "42qxX7NH5RAoY8PpDKhTmKjCqKAJmNNAvQqNJ4hN7uVNG6ASm3YFQeCpwvj9Gntbyp2MUPDsd5C7bTFyvG18fmRo",
  "key13": "2sbi4pk2LFPUbv5XgNNakGaf1QUQXAWgqSY8JdUNGrU2dGeEkZmmgnwMYbHDcie19yi2B5SVDjCrQmqjL5MnKSK8",
  "key14": "3JJZVmJKDt8dY168ZUd69HA5QcZJE58J7FN8iz9PRUuuNVdvdoSLz6SaDFMZ3xz3w8Bu6tgKJmdCrtYb77Zw4Wkv",
  "key15": "5SSiB2wL98KU9b5D5pYSCYKtd5HTipr9zLPhxXRmcmBvPN6seyYMq6FN5jjFY4Aj6zzWUrvtK2fxQmrQXse7T28B",
  "key16": "3qgEr6zya2HCQhqCYNck2wqqzSwUhJWRk46okaCd9boRn61RsNBUrC8gomSZLjnvYCSXHihmsnuZKwvUjypFoqhz",
  "key17": "3Gtqi9K7eh6bCDfiFxu9PhzKgEH3vDp3cXAdJQQnjD5QCrxKiqKSDJZwKLE8wicYvLXST6FMEGPpWjrgV9yW1sHe",
  "key18": "5DpfauxXvUsurr9qf849aUeNJZ7y4EnA31EnEAbJBKbLteRKwm1eSM8sVjde5Ugce9ZkwLgeLShNj6QvrydmX8M2",
  "key19": "5c6wpGNtTewnJrAjehPgW2LZF4Z85LhzMDo63kQp6mv4Qi3ziDx2QzCfL6KEtwRY99tRVA8FoQFJVaT7oA29TbG",
  "key20": "5fZs15EAk1gkDY2FVXFATAdrD4XTgasT2o3aNksXeWwASPnj6RZoqU3EFSmasxeYpsEhoNXan38DD2cdsrumThdh",
  "key21": "4zy8ZxKkskxKA5m7vsraMsWgtEz9vt8EWHgt7Suv9XDQwA3rLo2bo97kVcZqHxvdGgM5PYTz2jg1aR9PyETcC9Nr",
  "key22": "5Nm1R21LwG1PSJJLmtecYjDCsSGJGSxshEpZhrcuZ6LY22qNGWdMV5a8iJ25KWXgwALtrAHUvvK7oT4ftk7eNXhf",
  "key23": "3mvPPUcG95pS6ciBwKFqBRNLyCWojLgtAga4vkBi266F15uAgF2MT2b7qTGGu1hTjNtqDGsw3Wi5NsVBNudMYdec",
  "key24": "4xdmq5xR27aaayf4kPTeDtSqywwiyCWqQcou6HSuosWafnFNnN623GCYwckRSWNr6kbJmkZwUTsssWXzeURN5piU",
  "key25": "E6UxjJEoCvy8qN2uzjMEHKTW4bNKPNkZKNCNNTojm3rUCrDoQZpq4nVkVLUCur29DoGAfxYar197LBTgLWkzbMw",
  "key26": "5s9LLBKhaGu8FHq2TmSBFoiHXp2forQQJb2Bj9xKVZ3W8968vccCzz1KUxvfgGkwZZ9UuaQwnPF1bHNny3tALddg",
  "key27": "c9XMimxKjHdFE7x8tAzWsvEG9sEB6AWAienHZgV61ZZUti4M9JdgkoTvKrfh1ZqPqVGZpo3aV1H7eCNrDfrUWYw",
  "key28": "o7EhvNYnzGwterGZdxU7m83mG7kXfeyYGSitJCCzUBmDdqNEFCm3d3ArJa4F1MwJrMvvnpWw3zJXQDLLNLvu4WR",
  "key29": "25AY1HCp8n3AA3amEmqS9tFDjwn4G3WSvzqZCaG63tntcxqw16S6xApJRCkfvRLxFZZBhBu4ADkh7apRCkUkb64x",
  "key30": "3JUxnu4MKwM6DASutx2QMjPYRf8iAQ14QaJAypor44tPtm4cFkqPSHXuQMuoRd3D8CeM9rV97qp9KWWHgd327PST",
  "key31": "dEwuPVEwkMxD4sReiMuZkXovdZkageY7KYVbWWtorpRNR6zCtMrndxRNTHqrxiPG5UM8E3PoBQHfiU6umZXvBc4",
  "key32": "SKyopubRwtrcPjkvgfoY7d5os4HJ6tS8v19QVMnUhyyXV3vxX7KNXHkhvMtxB8rRhHHFKGbXQaAdXfs9fYAJ6JL",
  "key33": "5Aq2GK9U8tEFTSd9WZ5w2pT7osFBLERAvd4osWnhKwb7xsLcMx4MpoxNuHd8qEEnm74qsAtTVvJXtDj1v85W6geF",
  "key34": "JVxdqtFPXejkvrWtYJYAyZsnCZSdottJFyq3UVft5cxRSm7h9KCW5Kd9TiggoKqKQ8urNfQyqBjjKsaCHpUMegc"
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
