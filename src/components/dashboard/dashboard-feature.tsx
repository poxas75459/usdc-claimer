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
    "v4ub54kefd1aRY8LPFWYnmG4wkKAMsd2pr9RLCEEyVbXpcEoTbJ9L3z6PQnxswP5w8u42tTTVyRCJQZdXJZCZPT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UgiXPuKcUS7eQS6PQVy1ZyJ5sGeBg7msXhXE74eKmWGE4WaHDuWrv9gmD1BD2qTwnfGjr8s4jLiM1TUdh8zjGVf",
  "key1": "5SLfjTSWMZ3bNLG8iYvwtx1UuDc7FhqWfFzMbgEUGMyANXMJVtoksUYsMTq994Re9bZBaa1fSkoN9d6At53pygRJ",
  "key2": "7n7V8Ksvu4XfDWX5cQPqCA45MFvJ9PuTEJEi7YunvBEp9yc6aEv4umv24o1LrP1xEBhngJkVKtwFgw6hPkFAN2p",
  "key3": "3mSaUnqvtPCgRuMtGmZ4QG753CGgBPhFypDLR6Nhskw1SzHAN89e9c3MTWQmXuKxaX7sZWRTkyGsDHFgivAbg3Wp",
  "key4": "5hb1E1xhEYM9MAJjqxopeXisCdVRi1ETtpCg66ippFQXRWUgonARrgmbWBXML4Lt23Dho6DwTTe6oD1fe5pryxjd",
  "key5": "4Yt5a28WdRMnhkjyYXYCfY9mdBpq6gFFvUqJv4UeW9VKmTDwVguF6EgmBjgrENNnqaXGe4x1VtVzN4hPmXqHneC4",
  "key6": "2PiKTFfNmZxHkwCfiCePo3UG2zmSWf7d4TaZWFXDxR3i1cLLQ11MnCFZ4YrNxxmQSWEAuwfDkNHC6UiiA6hsnnmv",
  "key7": "2PboKHWhctYxzD8RHVCPLVJjNgxbKBDZzkQTyL6cXEuEoT9w4GnwRtrpmyLE1751XCpMdwd6Mgq45ckK42kBCKMJ",
  "key8": "4bb5TEXCnSkh243yvAEXXpstswkz33ZCnoWSwxSmWNmJD2KHfuEWK2K9RBEfvetFnFZa1bpQX2DMuphWyScBzAbs",
  "key9": "3WnGqL6J7vZ8bJDFpSX6ujcm43EfiJHeZNLvbuDWkQroXZb3xcb2t6KQDM5ZPTVp5QTzsUSDMp44CCwqJCzUSZHv",
  "key10": "3Jo1Ng9rzPiXsH4CkX3JGUFBaQg9V24EpsCYkrip8mu7EQNtP6zvNms1MiTHB2EgSgGg5fKpMSkca3pzryFJRqsS",
  "key11": "5o4ShXUgs4WGCgJvAf6RLoRRT48QM3aBxnGc3mp5AboqPCebC3gcMa22t8yzptsr1qXF1mtt1mD7s8h8xvaKCBgB",
  "key12": "32TrFrBryq457qZLcpD8urJX5iUiAShVd2MdBAnvHm28s5sLgHsUXG9zuMKR4zAeXsWsv22sSuTKX2bYmkbhkLYr",
  "key13": "GeLprWvget6m7Pw9JDMQ1CrFYQTvijeqHFXdKX2kixJwBfdQB4qTjB8neJBC5hLiNy9AqzWVzniQHNedE7fdfdi",
  "key14": "4BcmVq95cw7PzThknA4UhwmxcAetgEtyqL6sesSqupUVUtX2c8jX9rxfocFtznThRM1SCfayaM3euP11hsAnuCSZ",
  "key15": "4hEs1hLiJ1a8sQVNMJANmdTHpy5gbJxA9QYkuaBnTyX6LFvEw1oUun1JpsdLfE3niMpcqnC6k5fijWT4a7RubpCd",
  "key16": "3tjfKJVk33BA3CJg6SrAodGXZmnt8AyqYQHH8YwdjGQ8V6eGyLqcmzYnWJVTPC4Jx1Wwmp62EAa42stecdFX4xEH",
  "key17": "2gboVtNCKpAnXCPTXhub9Nxv6fecW72neiQcvbzrRGvxnihgJoGcK57wTr7CWYmLPHQR5usTohmdRoNK8HGED3oc",
  "key18": "3VNo8XWXJti1pMBcotv8uVF5r2nyJLvkGo78ymQFSdWni7amJYT51FGW29Xc2KpSRdEqREWFyhM89fTFukrQrNoA",
  "key19": "4JNkPDHgEAdTQxJVPGwjw5esNWFNFZvorLCqGmvQyC4sDp2wd2dyMXmbcVA1uoq8TCzV4v8ogjNPv3koFRZduTfD",
  "key20": "46K7vywwAbPdXLM3yEbYa9jqiQSiKEW1LvcPyNKHqv4Bo6Bb4CEudfifMYSzgA9wMLmynPk2P4cRSuLXU2n9tzhh",
  "key21": "5RjthdN21QHHecVsM7kGcMaJzaCRmVUxfUejgAtwpPTzCaUPR1MS1xLgEVaSqs4yS3qHngsZMynB2e9aXPfQ15DG",
  "key22": "5VG2tnnjufJbven8zdvvsVvUxin3Vgt9T8m6LBkqTxWStP94Ja74PkyaK1apGLQLSWrnBktPCgcfpdaKit5s2Usi",
  "key23": "3HcTfX6uiGdBaVBypBi76WJVBmC3GCWEe2MRbx26mV1mwqtPmoKtmsPLcYh8gYa7yNbmJf3qsuMMoLTCznxv4FRa",
  "key24": "M2bVvgKW6RWZD99Axm98CVyQQbDLySp3SW5MtciFh8fETWcaCciRmMZWrUUrzisnvNbANp1a3tSixhgMREtJfkf",
  "key25": "5vCsYK8bx7dZ8XU1T18tHFotJTX7yXsQU8QJEtpoo4Rkeety2YzJnr1LvLPXv4nNxf6BCLbuzNeZGAf27Hs3WHFz",
  "key26": "59T6gngdF9RNvqqyseJoqup61sNkEmGbn3z7CCXNYxCftLVGcEMm2dep6GgYw5FZ9WNu91piFJXSxveYTLpkyRUK",
  "key27": "54x6xqJ5x8HuU7iETN6DRcdGuVKMMTzkdCTvj1qzsfc9JoqMVTokefrNYY12uevRJXPP9J1QLptvnxgxnfKow9EP",
  "key28": "62sxdySyj2Y6PY7RXEURRL8WtPXdiHZVoeocZs2ybevHYH1jripkjTaBQK1UMJvaFTyqZ9nvtr5TRePdRMLqdKFH",
  "key29": "2SbGPVPGNbrv91YhdhVQL5XqGm3tKfa4RWZ2mSq6KRU9g1kQjHnNhRZf7wfokejBiUbC4ZVtxTAB7XMmrsfx9Q2u",
  "key30": "Agpj9dArz3ytdGzhvMkD1ag5oS7tdHEp6yR6Gqn5QPzovDwU5oShfJ2XxibsBoLjEgFCm4iBfkY9hViXRnJNeNf",
  "key31": "4tPgszhDjdgx1ZBzxGDpWpc1Qg7DaYtMPvJcN115HNfq1SKDvp7QSzWGTptnVSr2cDaqR2uPfBUpA9fGXxorvWjw",
  "key32": "2eKhVRXFGeztHDG1s4m8MUqqyvULxYnu23tKbVE4bfKSD5WXrkJcNm6GUjELGz9AMMVn3LmgxuJoFzafhzzQkk5m",
  "key33": "3TZFyHWErp3NTceFN1SHaBDeRpxvMgWYLGRAidFWDuYuyqBak39r4S9yTsKyPKAnYSyYGCDhx9ugG2zLHa3JP9vm",
  "key34": "4cGJSqGJhYE8wUyT4YF2dFsf3krrpCPo3dPH7rsoougG65njPvMdgdcW1wjXB1tLrfVDnsfv2RRWVBfRqPoNobTu",
  "key35": "2512qBW7VXT5QTvFAFEFx12ZLYmXDnynK8Ai932ojqabES8MjqWgD5odrxGrTy12C22UmP4LSyPrBoXB7ur4LQjy",
  "key36": "2AQ7aWrGsCRFHc86WCgpLiW4QYSmscpQwiVqqx2d5DEbghAp8pHLf4F44dUbJe8e1Ryt2mqtudZZXqdV7zbxtBnD"
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
