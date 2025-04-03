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
    "3ECuHdns36XaMkqF2pzuCU1bu67EnCoL1C9ZLSWXeEsfeMGMTHeMuoHSgY7eLiw7qTue8HGFPa5o8HZE2pDFqMpp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DApDFAZreKhAtsrfNVNvH6axSFQoyEfLKehYf4oUGvsSSxf6UV1PVtrS6xcMPkndhHEzekvVLjKwpmtuBhBzrnE",
  "key1": "55jMs3k2p9ennabgmZsvVLfWvCRSB1SZBET8VJHJSJKA93UeM31wU6YiKjLJkR2jnxEYoq64Cyp7gdQwG5fJA2oQ",
  "key2": "2r73P86wMo2k64FdeKzJjkoEmntZqZ9qM3Fe62Zwo91X6NUz97bWU7745iA2bPxTunbKQvBHkRpY3h5iphPedGr4",
  "key3": "3adXoDawTeE4rZWZZU2RrQ3xRfRFNFgrUK9bYozzLHSvbfaTGxdCrkBfdU6Rgh6QiyPuhdRHtNNUZJ4QTVoV1qjG",
  "key4": "4Lds7wBPxkttr1K7H36EzSqMpUNeTuhCD2eeafti3sY3WzX3GURfxuA8egzdh1ggDpyVoFjbXVyHqpXnJkd7M5y7",
  "key5": "2DxyBnFkrvaWABYGf3B3vM19BT95xqcuStRUhVJyS65JDmN7KU4fKna5GyRBaBKo5aawTDpZxrjbzCXTe3iNr4PC",
  "key6": "J3QbEuatqoZPRQ2szgxhirhYiexQVWPJTXfaQUqAVGW2XL781t4fz7gbpvC7sR2hP1ppgvbQeV46ouut5axaEB1",
  "key7": "RUHJ4YhMAB8iiRuAVPLVu9SbgKU5qjiZj1ofxDFVE1rCnquAfB3BZQapDpFPQ5X7KxmLU48d4dky8rn2yDQF1io",
  "key8": "5vsTkrxsw6ZKB19Uxz6rE8mZDdufgT6jbUCyM1vMK9MTqbwrgzewMXcoP6P5jTbCVXsEBfMyQgnmLcm16sd1E3A5",
  "key9": "4CpQjkw6TcFoUXojW65zRVEJPYVHoiiunwDtTcZz7YD5qPmLbN6tfDMPEpLnQoZWaTqGdDjCgqoqoUwmKqxhu8N1",
  "key10": "G9oSbu5o1zFof92giLViiQfmbBRUW37ahZCo1Vsg1vMCDSs5f9YvwYz2p4N9BHMKaWntBHfXG9c5SLWitAUDkPk",
  "key11": "3PoQzWuUXvJBsdT8r5aVRctnGTfbjWtcYdJATh6f9bYoJGPdh5Py9h8UXaKk4Q81nKoXwRhDPiB4yraeS8DwFK5q",
  "key12": "2ziSDrDP9GxDtnBYqSoF8QhH5Ag7mYhybZo2jXwys5Y448GZzDU7JgNgJJddYti8qkA1MiQ6NTrCGCiSHu5Wz1aq",
  "key13": "4SjLTdRPuXy8oWex3FafhxMXihvhfZWJX6qThoxcdSH54E79USUAyiFLYcNNZaBX3nuV26fi6evTbnbX9nfrCYzJ",
  "key14": "5NS2ez1ptJVyxdJnTU4DnVEKK9Vd8Udq4EYgQGGy73GVD8k8Y7Y6VPRf3hCkrKetxVLgicxN3W5uZn2jJZfKkB1y",
  "key15": "4zhCkJtEXMX778ybAdXb91XWWoHLx7R8r2zxnE7pTqNDV2JNwKmznAbYMztcfYcRDLmb5m1jzraBpks1ZK9zMs3T",
  "key16": "3zARCxFBFFLG6H4HEJ13jfHJrm6MNFdAvTa2mduj3QRscJfRKhaCVPnE27SRx2GgvWzqLjKhhHxhwMUnV3pkC5UL",
  "key17": "4uRXTsiw43ZJMwYeqHL1M2gLeWKEw7ru7ed87P2VKCwb33ssuZiimLGAYKeN9AiWXaAuvD557d9kgv5ooZxY3c5R",
  "key18": "4fagGCoX7eiFBC6RUtNwMiQVP2dng22wg5zCedDjxNMRiQBQD2h5xS29Y36LtbYg6LBwtoT2J9GmFawsm2N8SU2b",
  "key19": "AThamDJ3Ksbpi78gHiPvLuBKeBUeRwLvEjCWX6sSksBSYSoV381cfu8n55V9mkqD9BvFT5es72DT4XjUwZgp9U2",
  "key20": "3Y8tJY82KP5pRQQrXnygU6AZFXTcbbrmJaT5523kmHzw6LBAUHQm6pNdzRxjwaxaFZz599ZPwaaBmqMKnm1Vsdv7",
  "key21": "2iCRPyfpgu3egLhn4KNc1Hn2kfZ9oDUA4njtXLZXBb9TyZEMTZJapHoq1dLyTNQTUZDXz9y8vSX2561gqhwP6d1N",
  "key22": "pPQWFVVvFTd5y3MevhXMrHVaVt8bCSWvnPGui23beVRi3rqHmbhmnMMJxqRN7yD5ngFVyFZYWQrYrWjtDgFrWN2",
  "key23": "J8wxcLhk6wTh8fnXbUEwzSPGHgvXApG3VPhQM3FKAttyLgJr9BGrYB9pzct9J1M5N3BcyP9gvjuESpbBmH4iBjX",
  "key24": "5f3C55RWLd89gjKb41o9viuDyppyuQZvcLnWdYdKBCs2CrTcTR1sBYihqdFfMGqCRBCzru6ErFpdH5PXqZ3FuhA4",
  "key25": "3evpsJugaYZiqV3ET8vQZLKy5QxrGRNjTzb4ttpCm5MQst4QBXdcKXiXSKuwLCHxBmBSLrMwHozJLcCAWmXNFGxq",
  "key26": "59nXBsLQF4MNc5T1jYNm1wJzq8agMffFuE8ZEy23BCgg5GWVtecY1deaj1HrfGVyBLirYc1PCgvm44gmVCm1VVNq",
  "key27": "3VUGYoBHEDb5JsPjLTPqqYnS1bLJQnDjYwotUZNHfC3J8aEdo9nZqWV1sm4JLJ7MdRVzTt83yZAUustNAMb6VbUc",
  "key28": "25EMWG9a2oroKpxWrK1yoNHqbugcuPqdeMRPk4twBy6xv17dXHiWEW8889ZZB7rgVvRCjL67vNgTnrgxc6PcoH7t",
  "key29": "qvjMBqca7TA3kNRBYqAsefctrvx2Ai9DXLApV4ukE6NMDUNsdXq4mDPEgtToY4HFAUWe9ftGCgCjhboVWamPm6H",
  "key30": "2VSXyJ1tyKaB12YyhjxMhU5QPT7zpcWts5KM6ExivR8NWvwrKp5UkFu1XcUf58g6wcGgewi1zeXzen4RapHqsgPm",
  "key31": "5BWhYUMpbHGcuX746x1EByPkRsNxcVAA6smwGAfqZ5dENwQ3QZFzQjzikT8938iEBBUU77x6sU4MAZUsAh6X6wG",
  "key32": "4cMcTKwhismE3tPsoYexy58gXmF1cryc1ZNGZ1WFQrku4EPvmPJa6ExhLsBqYNP7uttBSA4MTqBrdhpDi2vckPsN",
  "key33": "2Hd5Vhs5UhxmCANZPrzMvX1Tm2m9SzQMzfBxPm4vTCiFoijSUjRoDEUb4dqhT7QyrhyhPLdYQx3vmP6QGdbRurBG"
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
