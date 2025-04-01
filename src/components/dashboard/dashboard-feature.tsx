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
    "3aYMFpmtagtomwJ36VTaFSxuGaRS5G5wYcyvJWGBwKstdPWkJbGXbJp9MaJP1qcRm7AfkJCvf3MPA8pWyMXQQX7i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SkTLmLS1yp6VWo2uXbpixttQfPK5hueRpuuejV1ctXrNfYX98npLeo9dcsiCJT7FM6mSa9DppHoSJRYZWmRBZjm",
  "key1": "5gsefN5SWat3eSZUbEVLndxCrYDnNA41N6VpT5WJierh73NwxXoSWHBMkkSBcq6vmDDXNcvikExdDqV1dSJeQ5mE",
  "key2": "4Cekw85NTdMvmSnZFcSAjXScRqDvNtcsWJnkjvxjVnVG7ZPr6xB7wYRMTd1VNvorBnGV3gpZxi3SgZuFJauCADsC",
  "key3": "5WHfjqWGkssmWCTy6HhTmxryUVEc59jCg2yJMgA7mxZh5RmnzvLQXhkrmTo9ykPXmfDXFP2BSxxrJ3RMzWF97TgC",
  "key4": "3TqPesh6SNVVzyMRoZEpSz2vRrGkr4fDYBYkT8otmwaMTA1DceUJ11YpbXBjhJkD9T2BeRrfsSnYvQs81PXihFU8",
  "key5": "38gvvCjdxFTWpBwcG61zMAZRdNaMtnNAUduqDspxWTUXbE3EsY7ZxN1dvzq93unUY7BKTso4TFkL4FAigeNuprpk",
  "key6": "fNJkUT9WGZJPmMTy1ZwxsyEzFA4MrJAaPWD3ukd9c3cCLP6SnTBbgCkoKaT5ge8nu6ab5wXrH2UdgwKuuZ2LcMw",
  "key7": "4BzSXofkGMYun4j6QtsMdbmmx36kMbC8GkL9K8c2KTBFyxoRgA7YahXf96kCzw5qvjnyWVRfT21uRnEparqaJF7Z",
  "key8": "kMwh6zxHQVrWW9n5iWNxqfuVgxfmRjaLpwKfHF7cvmhd9ddH4QkPyh3J4S18ZhXoUN1GZDTcZgHTgMRS96m27Vf",
  "key9": "2GbYqzs7MYLhgdxWxaCVnCV84MKkW3hKryPWTNDMuk3w7qeCMQG3RLyZzfTjkLqMuPqey6DMdLUBztJfYBwwfTxG",
  "key10": "ohXAzaNZtW4W6nFuuX94HDdcDMdkGHC6nPDmbrJnyV65BYVKZLfsVoyyDVHqHEa4sHkJ5qgfjLUoXESdvT1LbiU",
  "key11": "5WHysvYnzFC8HGrBo86DYQPLFz8oi2ApCid7hUvdehibNws4LY4JHjDKiLKTronzoEEN1T2dStRgMMwciGgvKPem",
  "key12": "5bcyh69z4xHihYW859dZH47ZZc8s1RBtm7imMDL3XjmRXXU8qG7UPy9rU8x4vJvbYd9fN2Gfow3ErEUveHnPBHA7",
  "key13": "oA9ypjy75synbCcB5HuGc6gh4uCN98NwJCdfUmnLTWce8Yms8p9y62kV3mqy9mn47MkDccrhuNYA1BHBgC7VnkZ",
  "key14": "39HrUEAFV3umw1Jjc65Xo5q5Nk3nj4hGzkQRy4Vy88F6fQd7f11P42uSeykZizf8TDufbBwjkZvEMnLVbe4paFci",
  "key15": "5eSr1cJTzwciHL7Wpzsunv41VGyxoAvHDy8MyX4C18BCnt4oA7SEhf2KdW6WtWF8UchULEQR26M71tLhL45bmhST",
  "key16": "4RaidP9nTejFH9mhvRvGZHC8f8eZMeHRmGRfZ1H5y3jxjrwBgau4uKTQiQ57MtaJfNt8S9pfNv424ixYVZ8QyroZ",
  "key17": "3tEuDC8z9BofeHEG7eUg73ArAAFM7i6dMkKgJHDuic9EoEVF3Msedq8piRz6W1eqhULP2pKnU6gfwjpAPJAstC6a",
  "key18": "3oMCBovR6iAWq2X1oCaFiNu9bx6hkLUGr1ERiuCFHEgjNPRMEPcX2p85jUzPEZj1uRwzhybk4Qza3TpZjM3vAefd",
  "key19": "3mH2H9aN7kVbJzny91CHYg7NurQ3Cj1sgwoLvsSVG1zXKhS7MU1aoEjNQe1zAQENc8kGTndNRHYCBKMB7LVcXCEN",
  "key20": "37ob7si8n8ZyZRzP34ZbcsoMwQgv73LZh7Rv2dT47tLFoESS9QVneBpnerRW8LYBsgLsUbrbZpJ3tTkWXh7Th9m7",
  "key21": "65kUwBiMBTGgJxEgpqSTenwg2UHb3AgQ4RQ1ficAfRJ2d8igKxHc85b6f7HPU4ZVPiNYgEaFz5Ur4idr1q96H8i9",
  "key22": "5x84amUqKmow9R5WkWTkqedmrFtXRAvxvA9JUCD7wmB1KUPR3TG97vkt5VE9QPfKSvUvJoUGdpjEGbcR9YeFmnZt",
  "key23": "26CxeDJGxmznsGWuH4oodKmkJ4SkUnHFn3h7EM5Xv3t6GRnDQDfY4viAMATmjkrbGq323Y2McYQYxM9U6qYqoRcU",
  "key24": "5BXsFnBbN6umRDKZZewps4GksnSf5icnA8oF3zMpGmt7BVgSfge1PwBDMdBesFjYELjZJd2hdUz5SSqdd2fGXeZe",
  "key25": "2t5PaEtJov31RzwS9R6T9MewN2j5rGxPYgU2GGbUpUXBR5PCdQHozK5eA7p3n8ofEpwWX1pkAGuB6A23DQ2gK2yA",
  "key26": "4SuGDFtRW1eBmwLTNnb6anYUrumKLU9SPR8QMihEy6NbsZyqZP2ieZpAqsYcDRmMUN1Sz8wHPKTPyBxxFMA6yaGU",
  "key27": "dXXyJ73Ugk1HzofBG2qhVCo6TVb4r4ST2Yjpa89irjDLmt24dbxWvfUL8kbZzPUPzLXLc3ZB9T3o2aU3geSoPG3",
  "key28": "2k8Qzi8xwSFg9qthVzoafkA3e5eafEHoTE6SWY95nP491N7CoB5A9HAXq86WoG7Sk4FeeTsYCT3ZemJivBBdWbdY",
  "key29": "2rdgUQh3bSHv3yJVzmeWpdM3L3dgBz1cDYmNuhP1ATm3WC9dMjAmbbv4AqALh8D1vXfangyyemaLfWSRkCn4ywza",
  "key30": "5c679iK2pJDscdm5hoTw9HqTKHNjChFqhL5DnS8mURMRapUSQScuFH1M7hWC4j6KJNwcJiiqn3Wj9LBkAq51j9PY",
  "key31": "2juxDPaEEUa41dxoxUVtzXbirXSWsBGaEbWmmaNgHZDkSZyju336TopJvwxi7CrkT9LjtPVXKa1PR1ESJXAeYWtm",
  "key32": "3v6ZqbbiKfhEWyikdCBkeqFDdgy6L5tev7w9qWvkVrUVegpagCJDq3d6UKwj28gRNwvFMUkiFoPZkqSwZ32EnenT",
  "key33": "2yaa9Pz3eZPsat1KeYmL8k7S6UgAZW2ow5CGZpGSPj94WVCaYsmNSCfD3zGRm5b4yxhCUxh34GjSkS3qhj2YXL3E",
  "key34": "34dSFKd3qTRogdWxpCQdVBRmRyTskpzLXCk2hpJUdN64h2sd23YpkR7955ohVPYkuDSKBYRbmWZaErH7ENBwhiq2",
  "key35": "1evrmJRbNWW8qztwBHLbGfBZp8YjyGx7z4SLJQ773dKXEo8LdgcuuGGvMtdnYNCbu8gkd1GJUYVqb5aSkvLEr2R",
  "key36": "5wS2x2GqK6tnk69DB9ozDiy3DbuyfKCxDvdxRCfrJthzuZpiej3AVtm86HSgPSbdxGHJGpHj6dagtd6PUnicmU5X",
  "key37": "3xigf5qvDY8tejF6ZkNK4NSn1t8TKDDSeDAw3iJs68UR7xmKgPNKRCaoybue2r8yD7LgXTRgMoiHrvGoAtPqS8Yq",
  "key38": "4MVQY8VBC7vH2KTgNNNnCsc9TEdrbBps2x1o1FMy3Wdx1cbZA1Af8AWEJnULtfLVw2uV9wdE9jhjdaikKExHGjq2",
  "key39": "42gz34bpd2467yrkWuFotau5PQif4gnurYWjAENbVEb7vwh6coSTAj5PrveBZGkDJvd4aRn5TkpXXpuHX9XcmtqF",
  "key40": "31j11babUEXfGV9gAZmifPA53FZPXMbmsBNoKBZKJmu6SBqW6NtGe2VPiJZRUxEn9ipSCSFQmRB4xXEELqsbvSCF",
  "key41": "5qEfBzECmg1t2mpjCt5cbEGEeF6ZmfBk7Ueev3HjrQ3j3xuKgLVaXaCi7YWaCsFCCgYQgbRxTNDthPdEzfvn3GXt",
  "key42": "4eFnM9yjfuswhM2bcNuFFoCSYz24fGSnB5Tx5pTG7XDqVCBDmECdvwJajouxsqDiQNp36TxFsa5jTdyGrbJoLWmk",
  "key43": "RF3SXqhF7n1xoY7dwvo85bDeSciRfF1x71rB2jhnsA45Y8haWZf5QqhmU1ZyRBdCGtyZYMXMKdfbeb2ubC3Z7Xu",
  "key44": "3V38undsxbaWkj6LFVtZxdrnfoNCnwushnVYf2Nn6ea3yU2yUobpfFMjdc5GfSSBbBwZzRzTpDjcLGoFFzQSEMhv",
  "key45": "71ba1Sd3hSLgcATuXjVyn4AFub5HbJDcn8sFeiCVcFr8VAz3NeLArGZHJbAoDza6jM6Ri6VBR3Pp3rQTYZ2GJ7Q"
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
