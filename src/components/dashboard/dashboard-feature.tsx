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
    "D3AP9UMzF6iy6czogJWA3nnCQWPtxJfHXxgBBFcnvf6xsB1xbAXW9w1dQhgWGFbXYEJkW7rdcaNwCtVvckWY5G8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5E6MDHsnJZmGtdKVqFPCMy8UhayN57SEmXenoVx3FoAzmPPJq46qTYvpsVuvahneqNTBS8bnJPemwhDftczNRNh6",
  "key1": "5bkiAnwGcVhewiDtk7qCqkM2XxpdfiQDc6WgccxYJDffsqHjdqgNE3WqH1duPaqEad41hjqmjm1KPZgDkbzpo4Wz",
  "key2": "3TRVisZAPxhiGtMVbqeK2JqmD17EKkJNvagGd5QqpgnsR7pHkWpzSou1VFd6hAyrrLCSK6Gw8B5BnjJUXJ58FGd4",
  "key3": "5ES7Ni7WvwpZqCaAio2Fffcci8gbMg7LUc17XYNQ8WgcBZbMJLG96NweyLfaKseNJV7Sp1UzQi6phngPwRAZJxbB",
  "key4": "5x8toGx8WGtCTsVmq3EZfpp5RALFMgDqfB1u3Z1CFzcaC8EkfZtAemLZjnjsC2A6GFYNviVKNHJmJKiz87vYsrBc",
  "key5": "4Tzj156vuFG3EDX9XfYVNBTYTMvkSBsn2ozCzF6guJLuLtY1rXBF4Cq3DsLk5BbLTujq4tKkA8y5XYcU5rTnqPEC",
  "key6": "28zbD1263hAJmkDCFeAEXjyTXPxb69JNbbs881fTsiaDu7uQ8XgWaKQtqxyChyt67SqoTtcLnRVmiYv3CGHZdskX",
  "key7": "46bT6v3F7PkqgnF2Mio9ZkPEGJG7qdYiUBkBDgUuS1m56A8JBS5yPidc1chTjJrjD7vxs7XbGFYoBMzWkyRoaRw1",
  "key8": "JBKTwuBh3c7To5aHkcadTcp5TxvQmLNUectVppmLSWHjXoxSTaYppi7dBqChmJjAAAbRKwcLz1VLhaePnKu4zmK",
  "key9": "4rjK2CYcAadqfZaM5foSnNa2RJTXukwDFqHSAq7A8QZw49gUZgsSP8GJzhTbCJLd967dWzqsbcWF4pZWAGXQ3PmS",
  "key10": "XfJ3psnJqeG7uT5qcds4B11kdzarfxCon1iwvA39ipCm8yPBbWZYEgY2Xxv9GWAPA6jjzcpJQzNgC7jrtUitC6f",
  "key11": "3cZxDyd9GWTXVy65UNA5ReJhUnVaAc32Dn2UnR9tUvgzu8kgfNCYhGeSGSJjxKMMQeF1c8Kom5qRRBDpgb7rQvaS",
  "key12": "2PZzhCk4ThdgkAVz4E8Xd2Wd6B7qy6A3G7pNZvbedHk9WUpESH9hsX2axxmPLCPTkCL6VA42HoUEpt6N9QoC3An4",
  "key13": "5rkoibWNUqFn2UciAJdL3os1YVh979V62Ata2Arhi9tX1c2tLUtoFwkZaUDyAsGUWQmue5SWs7BTNUSn9gsvx68X",
  "key14": "2TLEQ5yKv1TJEiQ9kTJ2c9cbiRWCe3QVCvo1fZLNGxBsjeCxmvWp6fGppzJ6YnzaD9RRbiuZFXPzPGeahzGXFyoq",
  "key15": "3tH8rLHeh85CNThENLGNbRiMc6sy2b99zFS91rrmdsWLYyihC2kxkKtwzFXMAKvWS7b4LSViJxuhRAZhFaDMcukr",
  "key16": "614kPEzsoaE1b3wkkmTS5XqAc9s9E6x8uAc2hBLCoUkvKTVjDK3J52rbQTcSNKaEapnrL16KZFCWdVd5bi7rVz6K",
  "key17": "3pUf3amtqD5WTYmbDqDCXC3RnTnUhhXX3ZRvLsrJuz1QXBmsPausmJzCE6ffo49xh6Lyu31zxgKo4pugimAKSSBJ",
  "key18": "2Leui9cXrzwvhiwNUC1Wmz6d1gMCG7F6LVVgKjhK3i7WvfT2n3st5zfZ369o5JNatK3uRWvrLm6zajRuY97zjYGt",
  "key19": "2xPLnTiGxdxCnkisdMNuVmkMAKVmg5kVjDBnJcumxoDKBrNiaGkVzi2aVWRQ4g3ryDKGYWqghsnXfqV1AqdzLZns",
  "key20": "3GNRDa45QZUKCM6ktn35SnCJzuSnXwyzmySxQb8wiURD3jPhj1zdSDs4NpUfxqjfTEXW3aYgRpTYWyQQZRehohM9",
  "key21": "5iMyuU9rSkPkSmE3ecsSrLYWWJKjc5uYTeFs9kCmA8MLLSKF6RYsqvfYRBBHYt4VsUxHzg2QFHreoE8KJH75gGDf",
  "key22": "2ToJC8jEKBgYLTsYGxt2xoaqy1nk8znwFy1cmEopjJANZpoEMrzysWCPu8X8nCkwsGVbYm4V5x8Yg5F8Zf1qo8Yn",
  "key23": "5Ft8pm4YMRWFu7hY5WUpo4h81LPH8hNeTiDaBfhCdwAgvxjPsqgjBY8MiohGTHcGjBDTo3iHhtMrfUnLGbfgGKGU",
  "key24": "3vXVhdWY6s2fhydYVKxbMvJLKhoEGkjmnzhu1dEg54uQa728VynFcUkh47fHg5qrybhs2SDRkciNfgVSF1uKjnqU",
  "key25": "4efTVC9MBdokFJtjuwziuhPgTGagPMELdDf4R47SabLMjcbiY5zm9e8UN6pTEwiMXrwR1zET1E8kobFTUSCx3ozA",
  "key26": "3fFm12ddfLeXAnPzrYaKF3REPvBoD9y2biKbz2w82bc32AAs17hrqonF9uBSs2HwUY5R1D1MhNhyqMjNa5RnKZgk",
  "key27": "4Fa9xU2QxCNEV8H8aX12h7a6heF6aM9eUmp62WhYGmgn2ZwXCxfc56eEHY41PzHG1s52KQBeiVqhGHcPgkEhaeUq",
  "key28": "9wdKbpvBKAPwddzaK25RiJD7Vjm7DMJ32to9XbyWx9aAkbi86wLDYtk5HV3WnE3D72NGWpDieHJuiGjMXVj4VGv",
  "key29": "5NM6Ar4XiMQWg3ojtdpHHNAMx7PpbhxXy3r8oZ2MqKj6xPQoepfNtdu45YNhQk3skSdT9DyaRgCkD26xe86mDmCN",
  "key30": "3ReL88bFHbyoriBtaucuYzjqM9k2oh9KycnNG9rWD3dXsTG9F3P4BSDMNNdUXTwZdSwzKgLYag64qMJjX3X8nER8",
  "key31": "5FyZH8XNLEjwr5m8JvdgJac28hkYFcZ959NQey3VAVvQ1Px4i1DEixBsYDc8iLaKpRwEyaMcWbFLo43ZKWEipX3J",
  "key32": "CLkBwbLxeaoF5gA5csBur7mpti2wexbzvheCPXuczTeui9rUuZfpRHqKkGWrRcJnQarEmqRnD1rHcyyFPaMeB6R",
  "key33": "25L46LX6SApmwDSpPfo83itzHZFuxG6iU2ypGUMY2nz4udkLMMig6uttLRFVrWm3Ye7LmRN7hLcXaACTePCmKjyy",
  "key34": "2amNNhD1SbAnjfkfU1RdkRFnh1bN3x25ac7VAsUqSk7aetZYr5B2F2kEzoV42kX7UfSqB3AGaNG2U8uN7o8egKGQ",
  "key35": "44Kr4KmLjG7VqHQR63iXAbsb9XXhFoa8M2eaJX91yjVo5XNjiU3yX5RqbGhCH16c4h2PpBfpAo5qSFbtu9e12bAN",
  "key36": "FpJjEDWeg76GG2YcagFGVdyBYXuCiVtybTnmk7ZNo7kLP54RTAtr549LKdoL6iqZtZYEVV4SAwVjo549qivNQWB",
  "key37": "2ab3C5U5XA9wHdy76GEbjQTWbbeqiAyLsrm2ZTWMXA5GmsVqHdnuY8LaeZmMfunVPT16EsmZTsssF2qdQcJBTNdp",
  "key38": "66DCtV3gmYXqVDSqdztBLt5VfguoRor2AejvibzzT3gfLLgnghqa2YLBVfm3DHZb1oH72hUDjxFbJTunLT7b7DgW",
  "key39": "3gwAr2DhghbuUGcdYnR4ZB9hLQDyJbVH9EizGzqUnv9LdodcaZ2k42Qwtg3xSpDEZYCu7sdzeRx5VMfT7xUk45Jq",
  "key40": "4mv7S2WT31LHJvAKdBR84AGJseyPUCf3HBTfP3Fh5w7HpLZ12spnG9L2G11Z9YS5UkE3LzmBsM6tLrkeCGUcYoUF",
  "key41": "4zqNFugXvd2K3ahrfi3ERwZ77iWAmqJeVAxrLkCsNTxpsB7XfdSToY2pSyhbTVEqj96WGpjkjDQCQ3y7oF3fYTuN"
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
