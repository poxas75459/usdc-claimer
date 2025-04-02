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
    "3kPn7D95Ua7DPrvXvcKYvZDwELggA3xzVLoWR43PtuFRgJQDzKg1zZnYjL3tPfab9R3E5M3xHiexGTWCpt5wK5D3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UwYF9SYF4otXZGmhypnEe7EYzZHLs5zABHD9wa7XNjBcnkEDwXDSRMvbL2Fi5PckPyJdp5ebFYbjv5z1XR9emCd",
  "key1": "4aiFqi3EkxQ2pLjFZ5hvFe6f8ubyTrW1qZLh9nqXHFVuMJBBhEAVs69RsG8CGJfWSrvWbSNS3Qg9rxZDLgPGytvM",
  "key2": "2JCCn5zAXfxCSfHURZkR1r24kE7mdZdCUp6NFEyiaMGxTyFyKezUkXn56DKM5meAU55VQm2KSG9QRNn8JcRKxH3D",
  "key3": "L4jonEbjguw3xGUAfGku7dAx2mB71FFsqLMgUVZPCFsKz3de7pECNJaypdhbqLrS75YzkLKq5N5EXoRzUTkXqz4",
  "key4": "3uRC2RJG5sPz8GJkHh3ZvAThLXEeamgJ2QraiLNVPBDqjh5JbhruiTVJkPjzDgJFbjAUX9a563mQfBXe7WrsBV9M",
  "key5": "5Z5CReVRoWey8SncWvDSsk2Usw1BQbozoEnXXoWCv1boscroD4hrrKbrCtwFP5wucPopsCfWMCnzNEJg5vTiy8y1",
  "key6": "i7MYbv6BByA6Azag6y86K4gnf7Jm5vVD3a14rwuCfqhE3uznhTUzKAaFRjGoP2UxSkUgXa5sLCbtHDhXhpZ5GTG",
  "key7": "2YbNa9Ca9mo4Ve5LbQLFfDYxS1LtMEEobLscz53SbbQQWAqdZkviceYUTeaJAKjeKRsybqYfSC2R9wRhvQCxTZjM",
  "key8": "2zt5wWmsFFtBACqzP1cG13XgvbxammpxieqP8YLBWFdgsKoQo5rQSwSRZi4jP9wY5kRmvtpV2EMwS2mQCHc5dzyU",
  "key9": "4U1Jw2GYyTqGWNqwjAGBkUPjBToZtoBTa91zvujcnY6WnUxXeQseaGevqHLhs3TVEdZNnmFuwYwVeSq6WRECVE68",
  "key10": "4cJNa9uiGxtw98zkzRQDhPJG6BAVc38zUaxav78YyzDbYXYTWaVMBe9W59MkYJVHzThmTaKqQfEUxJXwJkLTp2fo",
  "key11": "5aovNhNoratW1Xzww8pSx8XseusXj7YHeXmDSLbNuwjN1QhzFCCd6okYxWCU6V5GaC8LsZcoXZpiu8u3Rh85hBKZ",
  "key12": "5H451K5YPG5T4his6E4LepksZhTxqvSsZYY3mabBgaf4pJp3BuwtStNAqgXXpL1CDfVeaNkEXZ4a5rcHkkBpQBhp",
  "key13": "2TYg3FdZQzbJ7Gsr9WQoBKcb92ZQWkTFXhqb8rKUR6N2uNxkizYdBAE3pMFTCP6Ddsp1E2gxU7qdYwJrcFqTcRzh",
  "key14": "2Uk9fiatQpE3b7BhyPbtiCBe2h7YJeXHSYJMUz3HesshLgiM89h1phbEpZVe8zcgH4eJo2SY5LtVTywAT9gbAtHJ",
  "key15": "3pKSrbS6yxurwxFapbrDoUyhG6Ep7dUNwLShrgNWgXB3WPmTUngin8gWnEdsW9zcZX47jbN5Nvp7PWVgudNNfAUS",
  "key16": "2ReDyLdo8r8jVDiGY88pgeLHY9cGrvSnevJZaCiVBRtmh2pHP8ke8LqLG3SEByY8XNhsA9ffqwtbmd4m3g33xGXj",
  "key17": "2uTvT9zAdjDoPBAXx8td9pdRUBn2QyANDfHn8RJctZuGcHLoC8tEiQLVZTAjSpYeh93EqhUYVcoSrrPXDhwVZZUC",
  "key18": "4sbx6aztrDoAszZNzedBDojJVmau9imtJ4eqJDNqfhgJZxr9gKbsWnhSLfSZr6KintJwofFmwJaB63NEE4imjHJ2",
  "key19": "29fkcHinTx4iVdBTnnBMrCgMi4rBVzssC4ejqmpH4KAJ5mjeZnGLVDtxWGGe1Bm9j8usR3aS3rNZCqHEoe3u1zd8",
  "key20": "4UgziX4zexnMARuqpQCi9QHig3yGZ7C3TwbkHymbXEY8Un5V66LkU6nqLjTuCa2SoV6HKxhQeqZfkrqXWW9zN4d7",
  "key21": "4bRTaBDVKi8aVThtgiesrCNCZy3rAzwuD2qzyoxAg8wxypYKd3k5hHdvzhzCr5VgksWufF8DSWbW9bAxQshv7PyL",
  "key22": "3m1VZG8DPmesy48cvE7zrbZ6EU5X2xrQ77jLWAhk23tGoohYArDtce8y8tXHhYAKJAP4aN5DV4XtZAFG1SmVgyCt",
  "key23": "2S7jroGbZwukii6qRroQBTY4fUfX9brdbRGsueGb1ZvKSNDoE7DCfDhsN6vNeTsvg5NxxPr2VAQNiurpfofFXJVP",
  "key24": "3Q7rWT3Ns2KMwrNQpVG3hQr8r3mMfGC1iVCuAE5ugGhTsRxWSr8z1uUh7uY1Yu5FJkveSQjbQcrNC8tCUVGVWFkU",
  "key25": "5vC5dvtVmNcyUCRbugGswcu3s5sjMkAtrsucesNAxoKcT6QHY23Atmi9QcbxRgC13FATRZ2W7PoCmbWUvv9tUBSo",
  "key26": "yGTvvSVgWQDGbZp4UCLz7Z4bTb4EbkzB2DCG3dtdymrzGdLbHabdudnosFVC1Wcxb8yGVVHwhxSjVeSvDSU94GA",
  "key27": "2MkTxebvzPxzMPMez831Xjv5HWUGyePE2jCmJwX9VztmgpGEj5eeePvQhMjH3sZ76JAMMbby1352ssVD5qGhYbDy",
  "key28": "4exEwgZMCm8ZBk5DMmJUjqFPw1zL6J9phW2yhxKJoRBj6ntb7J2PwAJPahQeqt2WdpZqzGdBF5WDYjFRoUpp7h52",
  "key29": "5rHuabqMMDn9L79Q1cjximXgpYqhjPRsFaGmbPHzqrkvx7QGMNzN4cAZPwxngCNXYiU4soTTy22XXT3q6xuTTDX5",
  "key30": "5AXU2tRYk8B8TLjwN1xbvhyxod7ZmWea6wgGBeJJ3VHzpr5YKUfWabZjvnJ9AbHJzdJ5td4DST2nbsg773jD2AHv",
  "key31": "2fy16QfPaoGrcWZrihvLztWk9eDiQFLyX75cGsGq9S32gRVqF1Wc73yPUG8etXwJGbyxcZQWPaVHBAC2hrMXaUmv",
  "key32": "4W9DNqGboxHyXreu8A4uFvaeQrBxvcRQnKir1RM9ripwepM9s6NE8KSHmuTpN9sdPQ6q6SK1PDuaGm9VGZtGVvvq",
  "key33": "bsQdNiH1GmmgjMAgqCtjR8CgsbDS3rHLgqMZbSxTjdJwXeUrtg711NVv5G79Dn37KWJobsyMJTw5m8oTLdgDCV6",
  "key34": "4tuy5zzzxB6nEAvuvKD685tXtpYaAzMYAvdpDieEvDLKxqacnToowpu8U62g5b4gyhXFa81QTzACSB7yKviZoFaP",
  "key35": "5drqM2VdyPwhN7RpMyn7hyjvGGdoogs3YwEQdnya1m7Vt5je5mCsA3sHU8atnjj9cwHs4RpPQ5yVb9sn58iGAFvn",
  "key36": "2mRreLHEqLWU8PK9a95ZUf8mp6kDbEio78QzGfQggwUNtSdb7ujn7ifiwhubxsDVQZcAXrTRx7YerHr8o6YCJmEC",
  "key37": "4YtoSUPuSQH3veYoVA7djepjWduS6BVfnQiEULcGPGC6VSKH3Tto19X77AcKm1fBQ3ropDZPREzLJQkcY2jdiBzG",
  "key38": "2pusXiuSqY8VqPhaYup4Br9s6T9pFhnte2U63ocT2k1RSC5a214gXnqsRr5mc9YtC9TSD77pW6ttV35peetkRHpG"
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
