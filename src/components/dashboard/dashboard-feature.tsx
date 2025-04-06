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
    "5KQGqn4eEbKDiR5b9hnJThNGo3djw8TxiZpG2hPWTMiHqxiaCMndZW6pV8X7dBSkFXkdGhhVufA4b89gSXunPSUT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46gZtEqm3MGwBZ6KtMpo6GSJARNGsbZPrRwfVe4XSWEPWnZpK5qRCcY4Sap2T3abWFEtiGPva6boQ1FFg2hfXJ8N",
  "key1": "3ic9tyy6bnmWxArj2MoouRgBk7Nri4Wb5bjZUBhPD9NidLREsfWBQ7PjykC9fxcHneBb4QSArodyu57NVn47vXpE",
  "key2": "4RrWyeHNVzXpo7rPLNmEKTS5f4W6JmmyH5NDRAbNppm6mHnQw6JuzL4g2B2HycNkMJbbjAbPUgXn5EzThRPuKujh",
  "key3": "d3CAoQNYEJqgq6DznS4f6gtXANRWsQ31fyLe8TC4VQeGCJ5gUieWdnyG3oN7Xk56xrs8qXLq45XUvcQmW8KyC1Z",
  "key4": "2EUUgNGH1LPN5BpgMVqPowCDNxNtkPyc9G2fTrLUj648qDvTEhgsxhgZDjAZZiG3CdDn79uELXXwszE7RLazeYN7",
  "key5": "4KJzsyJNvKLHSRe2xH8aPuFcE6eyG27riRNFrQcLHBuFHRJt6dFGjiF2Q61Rieowtkc1krocHeVVzcLzFH8u9drs",
  "key6": "2Go5aCdTKmvpi72bMcUqV6YfjsjRHtYsaGtHtFU2VRUfjuRa3KUNJZSTymnz8T28gQ5sSfbeL2HqF6AzzUqp9QTL",
  "key7": "gtztn3h8ft6Rxti6YSW3W9kUwi8KMLcKYz25M8zgDsahHVVF7SkxT5gYWkg3Fv7L6nLgAKEbF9przcSEtJkZk32",
  "key8": "2fkBFUqdY6u1dxS8bALPJ5vDSJLASBmAhnYLnXRykwE5ZJUpGh7SvQnViC6h9SSjdRwcFD47VDvWVBPSKqA8KoUX",
  "key9": "3eRcbHuJfCpjzRnitkafmPZkEywETisffTkt71DN7FmT9iXjVwaS8wbEbGL28MDy5wRd1PJkcEfDtJfYvEygwwbU",
  "key10": "2iRAgrByLUcaEvE6jUHFRXp7zPnSP3rvs1A3HXsB4sjZSepDbP61mERHKNF4HrhGQP2i33zhzroFX814mP5iVqRs",
  "key11": "gY9NHyf3joXgVUcgf8aLu5payGMtupPkMHR1eowsVscUPQr6rDDhCbG9jWu64oaxNnN2b4qEqSmz1dRq1JLq1n1",
  "key12": "2DPqbr53DVnns3umoW1QQBbXX2SiuSK76aJLN2cxKFwAD516VCTWos7i2kbHwonni5A57H1uPGYsBvUtYgeJTpp2",
  "key13": "1ykJx9S7YLzK2FhBGGBWmke5mRwVCchYdnoY3eyJCEXNYJJfgeeBdW8YQuE3baxvoSJQQoSRwy5ttuygyKEqzne",
  "key14": "9JVpP4j5skPoqm4yqY2xFGta4ojkgvzzq8AL8gjtAGRnriDnPBJfzNiszLG99r8o9omheMo3HMDLN77B25zxZiG",
  "key15": "2fACoLZRQYMwA8YeccBtU52ZBkqU7YrLsTsoUZRoVfwNgvAQRjuJXY1y39J3kPG9wqMifw8H4qbC86gQawbJHmrg",
  "key16": "3W5xXtwxQLksEZby99wwsZM6NW7YHcqe2wkkHbw5fr2EvuR2P3TLCKrr3AyrqL2KDrFCDxB57MqTKsNMh9fsKrF8",
  "key17": "4VYLMWDF9f7TgMxyfNqbutPSL5Y7VUfPdS8SBGczCgmcW4cZnuLmD8HjfWTgBe8qtuM573LJ621vJybFHhTor4uZ",
  "key18": "5EBCg8iCU9C266ftY7sUM5joPgbsfg6tLRgSENKSPkBLjPh4d6siWXQ2zckLcjRfH7UjcweJJBkMR5PrANzXFr8H",
  "key19": "3a31CpzVtab7fNTuPaSNALNNH2DLffNUVNjXKxiaetNNSojFggokcnzqNg2y2qcEQCm4Pm7628KbPnLs5mTsLJsV",
  "key20": "4FepBEf3Wc3GsyaQ1wx3QGvXit78iPQgJrKcdF21TU8SDG2qHYJUMDvDQ28kEtvPkxvdDJQ3HnxDm8Lkd9vNHo6x",
  "key21": "2UMksJnahQmTrmgDGuWpBGs2ZNTadU3faBqghg5ZoQrHDGsKziWdKwXRaSBuLeyprYTAwoocbGvJLcLEUmz57251",
  "key22": "4gmzswLgNvYPtEpX76qTJ7abPYagj3BdcksZ8MWriUaDdNYwAQZ38FEY9PVh6LLmWqrM5QReMSs34BnHL4imj7DL",
  "key23": "2smk6XCLhKt98Sb3cHjJ95Le7EaDuQU888Zzeug1WQSyoweAjp8Q1zg3MSuTWSJrwLDQVGNkSmknS7qY8Wj15pGp",
  "key24": "36z3yk7ioP7zg4KLveinyoCAchmbm9WSg7p29HHxHac2QmGvCYtbXPPVXvsYg8VNPScdz1y9e3oMVu4WCTu24ZRK",
  "key25": "4JFRWPhP3kfpNknYRFYyRaHE3iApjsfuas1BFKy1mnZewBfGGg2N5Bd4G8fxEQ8UeqpmNSEeUS3sYCVbNi6YcuQo",
  "key26": "MivL6BujWT58o4YYYMWwm4qjf6bDhxN3LM9iToWJyvsM3Y8ypL7LfJW2XtZotWwrA9wGNqqom72xNPZbQQNtiyk",
  "key27": "23o5KgyQueHLiDSraugiZaX73NgR1LgzSbuSDV6sRfsPTooLVkAJEzo1Kh7TPcgnNn7CSVXYXChBnw5qqgHgZFu9",
  "key28": "9vxmJ7LNumwGRHx5rYRJWBoqctNGFzJYMWerxrXrcCM57RWLBi3dqYgqrQhHGGG9f1Ayp8JJgX21DsjZ3rWTDRm",
  "key29": "4brtqcaKGhFEJmiFcGT5MsMFzqf3ZM2sFfShE6acWPvS8hgsDdmzi1NKdv9WWfPcq5nHwiAqHFgeAGK2Nju35kiP",
  "key30": "y1Y4bnocofxzVNEFdbhsHYBwfMD8kz3erKoF45KisCZiAq6WrmDWxS1V7k5vvWi1vZTm7RwFViqXmx7igrYFxfX",
  "key31": "2i5Rktt4c314QvLwndiaPs4bPT9WkTAr2bywCn1em5Zbxt42WFDZK27yS27tnixWam4U3kdqNyXbXLQLBjxeSqbK",
  "key32": "2GRvx3jzT1exAmjRjiJhEFnH9mudZP5yTqYsP9o1rLuVcLuLdEFooaCd5fGghzcj3siDNXDpWwsV85PAbRVRQg7D",
  "key33": "34CC7G2SsKyS4BNn6BmhoQqrTbFRXxDvk1bE1QBXxYPC5qZ9dZ3wFmh9JhN7FMNvvJQBieq87xP6yZsXfVy5iz4S",
  "key34": "2311sQeehjJi42oePc3NXnXsDpyQDUCNjrtiE9fQqkbdDynd1pUezjV2uDRJdcFDKoU5oqfBangXZJNKV2M5SQmQ",
  "key35": "11AScb4g6jLbgnZhUTXfhNJEUdZQGCVPej7r9hHsSsZtaPz3pmZGxTE3sT72puo6bsR2rvqVc6VoKFzSafC1rgi",
  "key36": "3rGwQAAFWL2af222pMkaWBcfMAPrU3fYNCqicrkSm6fYvszG5sTNjEtkVvCeE2X698sDHtAMbTLxv7irCeqyNscz",
  "key37": "5aW3DhrLHGN5b3XaZrrbYDzD7XgRBc2nigf7fBZyKUMXgWwdhwfWsvCpprASWDmZuzV1VhTSbvFhPspBB8bLp8vW",
  "key38": "3NANJkn5WT7A2YpgszSdx5zBDYpWgxAJgrgdMbw6MomtH7Qj5KBfoeVX2RfcuzyChzCMAgmX99yWRj7eKYL7bcCD",
  "key39": "56e6yP3cNYvfSMpFVaAvQzS7VwPyPXbbVwaSxSBB8WUYtYiLj94FpZxDRh8k6HnRS5BCP8EPgXmh6t6VG6wTrTxo",
  "key40": "3qJdEiSmZW7V2595oeV9VTi3fThAYCQ7dh3ztBbBmXSVohpeb3qfqSk7PLW3rxy6NNaEhzGDVNFpMaipSg2ontAW",
  "key41": "283djxmEeA1ffn3yGAY9Rj3pBfryzYTe4LKB7n7Et1zveLsjvY3SCqt5eZ8LdApWj3Jgq9UKSeiPP5HyAikTSfrh",
  "key42": "uviSMmvahuGQThUoBbhESEVJo53AVXgCHm613nhBk5sA3NkbqdZ66SQhmx3Cds1ki7WABWQA8qkpVLPtnXpPVr1",
  "key43": "3v5BPcPhSRG9z32LcWezcgxtXPogo3xnNWzphXpRBqjWXUHjmq6LaC3rwkbj9Cmhuyg4z45VrLvq1xQhTxpGknpo",
  "key44": "gwPZ1QAS6dzMqnGqkUaz6uZBW3i59zLti2hqfjeFzvD2XtR3b9QmruFoabH4XJv8y13We8y5C3Wydgz2bB7FHz1",
  "key45": "Nufvxzawyq8m8CrTefWski3wAMvy3XSQBodBJTrSpdDZcqWx8QKiTZF2BUnQBacZMHXoyF9uAFVp3mmLWx7jrBs"
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
