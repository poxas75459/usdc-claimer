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
    "4Pup8rVeU667SMFteHhZRLyo1N4X6NhfsjchA7f7PteLuouaWA8tx5opWrDuMQZ2UyZK9Q4bzeuMEKe7fkLWhg5U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5586PcZgvC1fTHxFmtMTow6siaE66M2PR6R78bvYCyNtrep9SS8Fi3nsRM57uh3GCp9EXtCNKn9nXPuwoKrnqw9R",
  "key1": "2TUYtcaN3VzRkxFy924ymqNxzKcPmCGmUrfmtywSgswYnRgNzyTZXf8Sc8rkLiAfHx31AdnSTmcHr2PFFMXThjQH",
  "key2": "5piUQ2KzjGtWXkiUDBuLT8MJwm1ad9dubGyYxgoB5QoUk3WpPnRHoCDfXHCSFhDijHoJthYr7i86HttxLMnkGCr8",
  "key3": "4yYi9ph4Zjyj5vEU1oFJE9XJS6kxe6aYSgoAwiTunb7uTDwV8r7wXtq4k7cZyFRZGenoeok9XBy2ykf3Hm7TrPKb",
  "key4": "7FefJrMtXdkYy9AqxH48k1vcS5JdGT1dzxER9JTs3nMYsSDpht4KsYYSCKXzo25868cXaduSzRFAAx9nLfAHAq5",
  "key5": "34qA1GBLGpqDhCoZZGYNbJcKu46GBm1FkYQf8xi6fibr31MMnXy9sx1vAn13dUFEUK3xsLRZUC8or3mHEH7U4pdx",
  "key6": "37F4GK2hihALBepkTUzvKJF7aZocoMryENWsGHReinC9tyqYaeBSS7Z8fXyRhSwjyuCa54dz3jbKLtRoxq5FcpmU",
  "key7": "5JkcRLikKVon6pFMg5SaU6VNLx5NuNcp5Jms7A9QWJwvzdQ4fBY1TLEo5vuPijv5mheXE1vtkM28rjpWTE5uV8VJ",
  "key8": "3kHwrLgiTnAfT1czGzKVknCALUbCwTmhabmYQo3oV8v5U1Pg5h1WA7Uk9ip5k9LzudHeV2PSeD8MBj1ucnfG7UP",
  "key9": "xfdqQb2pLyzqhKgwAept5dapeZXcvgjY6dY3trFEHzHjphRhyn2V6Bs7pqqMZJffAMj8Hi2V5w84qiupTMnbNmS",
  "key10": "5nWF232yKadiEKDAA21zfqQhnsNnKNYkBz1FxZqg3dgUzCx3aC8Mau66yiXLMmCnVnW6nN4bWXfxgFFPA99eBg3v",
  "key11": "658Mai6YTXS26KNoVYSfnpdcDgnewmoLzvhst26dW9JRCV1GLhEJQ4vt9b5HxAUzDzorfowKY6Z5VvnkaWjT7tPX",
  "key12": "zqtSmHvWLbNV63iabwjsNe7yfuTH6JcwN2JNk1F9ZfwfQrvY62ab7srAFyfqXSbvgDtybWnVUMYn46x9sJ2LsbW",
  "key13": "34St77uUbz3tiAJDXTm35qdWYyDbs8K7Yx3JssosS3KanCcDX495GEe5vQdR7achgcwmmNEkqr3T9y9cPSYh2Uru",
  "key14": "2Ecy88poepXGMa6RjnzNWhAcJ9dCN1xvuXHvKFYQekJigCDpoNNM6mweMELGKZAVjB2NgTjYWaCPyy5JE1GeXJj5",
  "key15": "eCqCFiAaPMazB8PMsT77Xu8DPZeZKxiDiagHTpxGHmEeQwFJAiGNCSnuQtcGHRoTHjnuK75FJZ6uugGHFsxonLp",
  "key16": "3PcJfgPL8befNr4srndnPnmbzD1PvYyiPW2GrSqDL6KA5khonMeBucaYLYUCYUXMHf19hZW6CpAKcShKBJTLGRcy",
  "key17": "5QFfYMS11HxaQMrL2FSjtwQLMnGjrqGUoGsn9SdNyxxoqCMHV3EBtGDpo1Rm88SJHGnQdyHPjdfWDvL7xj2YnAFK",
  "key18": "4aUWisETbU8EzFztYv1c1P3vEGfg4b5DtBxC87v7WEiVdfSW79GhnYhGvVM8NFt9Q8UrDzywDKKK1HT9vCH83Cdz",
  "key19": "3huKBmQgXwTGLCCsnwnSjwLNNmQ9hoRT3TX2tTopsETCqGfB7oU5P31Xe2Uk4QTbXNaZ4MuJ9hDNExnBM2tWqu9V",
  "key20": "3k2EtBtMK9TTxBC6o1fCkhK1Hf5dE9EQSL3MxLLsaAsqugUVSBvJLnneF5rCfXSAABHDhhY2HqPdT5XVssEjSj9H",
  "key21": "2yiJ1StaYAmeqZNnzjfgi9tqHdwu1ohKoiWSbGykcXELTBeCXgzgZYJZRL6AojfvQ8z9uZ7SLmduKejX7NTVJQBF",
  "key22": "3zj6vGzKXMKHvgPLJq18X7qnLcMAs28toN5q1KWKZpNWvxieQcrmYCq2G7oA1VXHv8BymBsVssZQpnUhGFkwmJzC",
  "key23": "4usuCVVoJB4Nyqswg92fLCazazqvfkhHS23mE18GSGADjQWprwvv1RA6HZvBjvB6ssV7HZV7TEyusNnRfmUXmnXD",
  "key24": "HfW2XwfTNgSY6m8fXCxELqoGu5D9XmVbPG85PY6dYeo6YNEW1xKDjjDrwvqZktnE86JFWcLmcFvjvF4uaJpdKvi",
  "key25": "Tmoo3wxrcmXTFrSmhZiXfFQFJXEPT6bCPJhiBxduXgDgcFu81Ufr7BvZPSq4HQ4LnoGoNvqSHA576CLm1Qhv2GR",
  "key26": "31f6pGw2v7ahqcPEE6dZVmkYd6JHhNLaby4MyWA9NUCXUxHafaj2wokYwPckH7G3tz5mpXaCoP5FidddYpRPFo6H",
  "key27": "kPpuKBHmhzsi4Z1TYh9UTZaQNQfTrdg9PJ2MA7CcojymehAAZDYgABEsP75veKiKLNcuTxFFhvCfUMtBryB6oBQ",
  "key28": "561Qrm7XUvCPi4RJjETk38PUv7s1YD6hsFnyUwnkcGPbKWJaXpsWG4L1F9mVhFd4X5F5EpQo5nRsDfCvvM96gBdi",
  "key29": "2NEdr1GKh3ong4P49uPkjpd3NL93AzrENHgJ93G8A89R7mwimSbsjET3qFBLhsSvmoRjYU61ZehuiF9V43zMUeJc",
  "key30": "587uHVD2Bo1MDfrdRmDbxi5gxb5HFHm47B7jQzb46u8FC3MzctU6sB6a56sVvv5Mr3SnzpPHj5PkdneMAMgMYbxU",
  "key31": "2L1TqU4uaLqZRLHUoPu9TCzkZD8iUYs8LrTSX17YnmZ1dRsdtyHLTj7hfzVdA2tF2f5zWz1XW2HcdWRB7uoJzDKx",
  "key32": "2Zncka79j3dpceDjgieB3dRiSK9MuCUSP53P7Mipg9yj4HL63dGijUf3Zm6o2sRJvGyXkatt2p7s8iJC416DBy9y",
  "key33": "4oqsS5eG1R36nYU4NH5mvF7vfx4c54Z2UtCvuFPnC4Hkkw2heRhoBmJLcGTfQ34YXkfahdsFdVwPhr5DWZ1fGbwv",
  "key34": "2i4khbssFft75gi8hvui6U4VWgXHiwPtjfsp8cVMqrjxEHjyQmwgZTiG2ZvyrNTijR5yD73bVNGjjMgNPRbGjrV3",
  "key35": "2dS42ZqP1GiZgm5QUghYu9GMZRQzdJjc8hykfZs82fiG2ij9p9uXqT1ZDbckWzZszwzQee4St7mt1QZbzQ7gQkXM"
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
