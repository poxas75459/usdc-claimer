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
    "3cFKgXz6LN4v5cQH3DThGEsSQEgnSLrd8qWgrtXAtHQP1SSSSPBSSyeQeyzSgeFSmPvZKjnM95AAkLNCdyi9Gstg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UwF7GYVEuVELkGwKcPi8ju1GXwtCcb9M1RfQPSBmHYMEthJaPa4vR8VuKGo2rxfw6X5N4YzgGuGRtT3eE1U5dpo",
  "key1": "fTCNvgWmxgjPDV4Eq6cz4Gh2XTvCjgQwnuWXnK8GSupsdhXJnPAdFFUsd3Ac1TxmjbLCw7pDrod6Zpvb6fvWUsd",
  "key2": "4Cavv1X6jCDCXJFnVMw9FoBQwqX2jKprVMqL4uZDnVuiHMmxMrCUpSmZDpJEzdqQs9tuj36ZgK1WYy9RiuQoGvg5",
  "key3": "5QXsXMBnNoyfXe2S5KNZDp8M6jo1YduFckmx4H7R84vXYycv45NpFS2vxJ6MdWXB9Eo7WJDff3UGQCNLh3SpzUzP",
  "key4": "5xK3fHk8sPKEXW6kcS2VnUf7MrG33cikyTpaK5wh1jR8nxux6485jzmLBmf2Xzg48Y8kVB9jc1WYMHAPGqYZaEyg",
  "key5": "Bqsx2BnW9LGffBQ3ucLyPJAzjs9KP7XDQhTBorvHnWExePRmkurtZ2eZZiu2BGaDuCyfaZZAg47Atph4ergHzZA",
  "key6": "5DAM7nEhgTNJyXXqeT4HQNtNGexXf59FaiYYDwofQrWCGizdGNgEx5cyg6BbVme3KPrDbKxbzxgdKuZEyMcRaN79",
  "key7": "4mKYVUsrexPC2BsguQErQPEcP6u8WmthimoTTEecXmDhn5kfaUcWCX9LE5g7UCmb8jR2D7yFBkn9FKQn2Z9Maofp",
  "key8": "4HeE2aJ76Qnumq8Trbu3GnyQ7x2d2uVbP3kHNipSCKCDrAYKZJwoDN7PM7LiLzeY2YPDinQ8qPrRKrkhWtydH8Dm",
  "key9": "qkqQPEnN8LwmeDmQXczi2yYuGD6JPD4KZDrEWAwvrsQfsZrUQEdMnGQ43aGYdMNhsxctnFkvEAiPznjjtREXewa",
  "key10": "XdLMq1sVo6yZjgbCSRccEYtFg9hPZB5zKfUsE4r6CbNzLX3w4PFMAENMg8RsFS7gB9L7LRvK5GuF1EiRDvtm5nh",
  "key11": "KejmjCYVG3bCKpD28PoyrtEqYZBiezpNrAeJevzS2JAsiC5Z4MNKrqcYS5EDwFhwrE32EknauH6zkapVzufTyNP",
  "key12": "5sMR3v2YDFZ1BJFKFQp3rqcMNEzr11hSN6W8L4g76d1ZLL1RKseQL85uqRWLoBcSZS4pvkjfyHLuUGr8hj15Gxn8",
  "key13": "2TiiHUQAHqUL36QuSjQscggG7VRCfecWnU4FEnksBHd1Vb1diWcLCqpeC9hJuDGPGeMccCP2ysREjmzCrNvYDx3s",
  "key14": "5NyRFPtHNoFeQ3jhZGPD9PSaw7gS3vJhp2X3UWVbiZwMkev3TW42qM3BVGupAxbQThuB4Fr71LQkB98pThBfT9Q8",
  "key15": "pXaQ9nKFBsTmXkcLgNXrhavPBPstGB4chP82FKXqQGh3R3sZf9uehBVdBusnZCgGj8o4BfNykZT6BaQKSa4ewJ5",
  "key16": "2E4qscREvhQ5QeUzLa5Ag4TKN7QTPp65E2tbozCEH2zwcCoeUVioG55RyLFwZxwhAeXDCSw7hgWsLwTVgUySUQ3U",
  "key17": "3wrjpqCdjz3LGmARbuP54kSDEa648JLsrJphER73HLDjEAzXuScW2cdk6176uq5w138pmANVSgKty6gob1TNsFMT",
  "key18": "4TpVApx8nMVDTv4nRAYR7imRinLovBGMikvF9KEpup34gXhxJLEaXGUy25X3U3zRDMb6j8kFFYthAeQVLdhfYGf8",
  "key19": "bENDvkFXxSsd8gjSgjSruf96DtiaTytM9mKTuw46PBL9p48cRWEQrLv82Fano2ayampC2n2A1vr7oTMXm1bvViH",
  "key20": "4KFYALCKywhAA54xA8VchzUsah1MzisAREHntJxgcXt28k5BGt8HQXPB66Zyi8Cs5mTrdLUuHAEf8pGZUdpjXfGm",
  "key21": "5vSPLKMCqPJWKjLrEv5oomG3L38BDACRHBC1XDsz8WpAbDNTyFYTwmtawz2eVjwLzGTVUQsESWJSqYtqW8jLtzuQ",
  "key22": "nDPsytwbjp9ttvDrfkMXaFwvrkaNB4JRHBpPzr79ecNRUWH4kvtiA24tVurppe9wyfVUzEQSisyYDZPzHuf93oU",
  "key23": "4FvhVGJPfSV9rV98M67nR7hwHxyCaZHjnCPqCNrD4XK4LCzqhEYBcTkTcyJE5gr8c7PjiFLuGAbZot9HLWrES8ED",
  "key24": "5h8yrpoVS5j6vyt9XDQPXYwFuhKGVbsyXXq8qJbHBfiUBRkijrVozny7vJijSxHHfV4J279FCgVxZe7Z7D95LwDt",
  "key25": "5FL9FjQKCMt638smmE7JSt1A64K4QHBsRh3pQCLggcS1bKLrkneCDhW8Qd5RPYKTywCt9EFrPdFC5NZD49VMSUHh",
  "key26": "Ji9UDDdcxySNBNMYPGh8bN1nNt7aVCem5WQmLW7MznhikKrUtJAEcjTfsDqrVU3U2wMkbSdtywZCEcwmeyHkyHM",
  "key27": "5gugRpdzMQF8rgqmBeEfF7kurLaAySNoT1b5wc5JWS3bVemeVbZggW4QvA1xLJ2DDNdPhUQEQKFnULK8UWemeWXn",
  "key28": "4tNTKywsNR2tPdCpUPZrcjW9keuQEe21Mhj8HrtNbuA9KrQkLfFwrJHbfxHhVSqrPF5NaJYYEXpHbp7unjDaBXER",
  "key29": "3ttGoMBxzTDi1Uc6uoqwELJ93y37SysZizCtpao5e19oUjkaf1XKNH5NkscEHfbqU5iYcFb7951AXTShMPaDArNV",
  "key30": "BLpFSMWwFGMFz7zxQnCq1J2PXk7yxq17c6EHpBnkijGUeBtE7EQ8Sw1DC2Cfa2eE41ihEztCEsMZHXk5jxRbaE4",
  "key31": "3zoN4BahZML95iq3dWNq1io95ALDJuJLiqGZ6efnu4pgp3CF5KxRhryHkuPxfdizz1xo9HFepXvZ1yHUMjes9LD1",
  "key32": "QzYH65AnBDYygFNnXNZRhXM29SJ6vDmdqesFG15FWuJamCdfRQmeS7F3MunkPrAqBxRdb1b7AWmB3MAzKRH4HaM",
  "key33": "2o9iNrH9bKa8GzdXNRV6SBieAsbFpsHXGTYcHx6k73JApXiDGwpgnz3vbSxHv8hvHWALgvu8WL5j7SEFT6vmRixK",
  "key34": "5B5bJnjEv9t3VRudgBhN2Hk2FK3AUc6SGFUbe8rRosKTPUmggkJ7xZyU33uSVXKUWL9MhYmcR33uBj8wLo1wh4qi",
  "key35": "EYCMjZ7GcxRBNENS41KF9JxPAz5at2hDwTabHjmdChiWz7GJA4S2Vg8gzontnCN8hyAmuuSDrsd1QdLG6Lxspny",
  "key36": "3fmhqpvSohGXmBU211aQza9At1J3NUCc58AT6qNytEeb24k7P9tzkuXvKpjEfqMvs8bvY7SdPvC7hghYD5K3PT4A",
  "key37": "24S6PeNK7PCqvf3q6Bq1ovQLuwBwNT8H42xEwEkqfSdJ7yFqH6QKEJii4Ss1nmJoV6QKCnkezeYtFef7CKsu6RTm",
  "key38": "4wNXfxkuUimCH9vZxJveXFVTv6JWoDztmZat6Kr4FLd77HFLc9uUDRcenFwVJHy41wDWDkUMYb2DDbypS72pp9eZ",
  "key39": "49tK29BXdbhU4VtS5hX5ajeUev3Syu3hjBXja5fkvPimGKqScvz3t5jNphY9t4ZGf2eQWRXGmkhGUNFG8zwPjDY1",
  "key40": "5pA5phMAuV8ZnqTooDJyYbfGnSHNVnJXyZi1UXotmHt48fhhWJgdHuSRxjXtxJBA8YyTrKdW2nBjxz6rsyNPW94A",
  "key41": "wB6VhQNmW8a2HH1UoGwL9xzehDhXGKXbSmmAKDpaJVhsvPmyxy4CGaaWnQn63z9Wgwx6yawhn9Riia3zHNFrUnh",
  "key42": "2QMrx6LuZkcgywPDGfXmEcPfJ2fbT7jrMAELvjMuci14KYf6PiDxNKUxP58MyToxSBSthXVDCKokfB4CW5PiBixH"
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
