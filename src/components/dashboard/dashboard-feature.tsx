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
    "CvfomysqWpLNXZxVNdHMBdx9YK8To3bEFJZ64zeWyE5R1pFwfaNv2U9HxW3R9U9KDMNjBbakLvpByccEGgkBmos"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PA13ukL5JUuDCgGS2siB7hvfrEV6aErhrnsv3Ybvca1FRod67yTk6ABzts3KDP9bgFErxWutNVZrPJuVvtMEMjM",
  "key1": "5cJvwhU9a6krpAt61DVJLraG1C3KWjBez3bRfWKVRFktnzoc4QeNvfHMdijqFsSAcBuaQPKhCxPd72u9VqgZGEyu",
  "key2": "55NaT7JtzhYNU73c1gBkqbZ5abg4xSpMPvJcY4udU1FrXWiTRRuwoAfzTXBWeC5t7wXw39JeXbgwdo8mEyUdtqMu",
  "key3": "5UypFomHZMz74pLfL4tCMcsSgBgW6vctwazHXTH467ypKHRxPzFhXsaGQ8Pt8msjaw1hX2RpPy1S3Kw3piKUKgzD",
  "key4": "4sXr4Mp2Fht2gZo4D1PHpgFWhuAR73tp9sTd7qeAGYqotn59Jw1ESRoH2RYbuP89LMRmPhfZu1XtZYeoZeqCoyR2",
  "key5": "1mthpmD1cSF3iTxD4vD3RrCjMTpV6YQp7kciNVwYMv9CAc1wjeUQki4sd3KqAXoaHiWRTyFVB6xe1Aq9Fi64GnX",
  "key6": "4oQhSnPDoMu88S6frrb2dmim54itMPPWNVQKADxXHNNDpMq1kBi3AZWfF99jrMtnjuP96HmupVWVfUF6TH6GmF2L",
  "key7": "3ZaqrnFv6v4APmdiJpuqkJ2jZJfem319uQPfJ3VDjkw2ZsXH6WWYyHuF1C5GonZszRdGhK6wjei7XF9RwE7MQQF",
  "key8": "3wgeCznJg9qBeWnLiYchQferdxSWunnYG1dgmVV6swKDitVPewq7H8yKi3qeMvXLWu3Xq4BnPjiUSiBWt1Kt8D28",
  "key9": "UMbGTZj3SpK6xkwceH6C1qFEV6b8yxqwUvne9XMMsAwLd7i42St4WxTcVeuVaxNLRkDxTgrYKqszdQasuFH9hCn",
  "key10": "49RdBMMGk6bc4kmCqr7yYmSzKFQ9khmvSCe3T9oThCMN5LAHKavQcMVeeeoDnGH25ZG7xCPnJJVd4tKqqH4UmST7",
  "key11": "ZUiwFvq7hMWdneKG6PPSVSaYjbEC6vmKmGCqBNEFQAbqZ2VKshYtm4eG7mHpBmuGrUTw8nWbk6n9wykZxjuPPkw",
  "key12": "4UMdDywkv1tJ3uMKb8DDfKKXbL6ouhT1JPKiVuy1B46PaiY5a6BtijVeZA4vKnCPmT5XR3Coh4qkw81nha6oR3zX",
  "key13": "5XfyqHU6v36tJnHFA2RCCgtcoHWZi8nitcH1RZfFp9moJpP1YgUCZ4tx7TYW9G7pPnYS52iQHXpVh8p6ULuTLUk5",
  "key14": "4asjsvvUkssttnFyX3cScKNxRap7FaP2r1jXHwer39Ppzw2q9wyZA4B4MEF2UE5rDJWw3LKL8GRiCTPBMT7GdaUD",
  "key15": "36gHbWtbn1riorEg3aS6Yh4S245Z3FGQCJndySHtfvgnDAxKcBED8i3EznVLZ3J5mEEoSgM89PYe9Wz5iSBvhqbT",
  "key16": "2RiQY3bxFDVqeKY3oEtxUdDrjnTftWyU8Uj5EQ7Sj51DFF9wzw5JccxQBMV6sCx23BACWBaoP3W5XeigA7JY9ctW",
  "key17": "3M9PwLaciQ8quZpCWG33aVJN1NPWSWVHbCbyoL8wuUzADiXpgUvTSDtt3aBt8xjzckXnPXgTjZYCijZm7M6g9E9Q",
  "key18": "2acD7VwAHbiGecgpeaAqyFhVsKLWjqbbajdSAAHvxDUPfGfMKygPimtbanEtM8fHRf7Lvi33DHb9qvsauEyXaMXy",
  "key19": "dDZ7hRAR3SQFBs2PvLS5oTZ7nhPi1rHvon7LGrx7mpoaEepbg6u3A7T6CZMGecjjfwYBzWBVVdSY7rnnebXrWpF",
  "key20": "Rm56nk2uC2wcuGJKYf8N6hVvxnnWNKP58Y9FMEME2v4hWxMSt3HbUZGiKZ6U4AJPaka2Fv5rzMtWeJBxiWFTMvN",
  "key21": "568V94JhAzUKWTHjXtWSwNvB1HDr1htq7mny5S1rbhDba8xrKhBhrBMrCgdgMg89z6icGqTWbqaf2QWXaj6jvoso",
  "key22": "5B7bpCWoTknMB1sEGGbfYda1gypxXv5z8ob85W28s6HFhFPSCgv56F4EHCU8m4XRnMc71Jpdne68HtsDBV7F7YPn",
  "key23": "5m39RocakQmKK5MfDpPRK98GqJmPw2RBzc1Cn2EtDzq2Vb8VEyWTps9HdETKuys2wPiZ6A4FNwXNJCDSCpfyvwog",
  "key24": "4rxAnre2LyexEbYPoNADimYB3kv2d7qPKDymAYM7Nt38NfuozoMUabBKEL2pssPCW7kdSq4oNh8UenKH9wUpEsbJ",
  "key25": "5KAC67jS8K7Nu4JYPCmBtWU7EhUUyMwzuEXxqkh6z1oRBSvtKRCbyqRhhydDRDdVsA3CaGytFty1mx8yJiEBRhpb",
  "key26": "4mqpdnWRbviZMfCR1hb5X7NvxrXiGoNem7pHNKX6YQsJDDhLhfnEZ4xM1TjG6uYjWYKLiAmxZSW3YyfzgSecmuji",
  "key27": "2CTGQGsz94e62i3Ve9GDz4me7mnmwMq8bKmpX8Ji9siuGJoq3fBrRntrZNPZ3zFEZo8ij7ZDMzsXXV8dFHJu2Xtx",
  "key28": "4WSth96jE8a9vuHneUxz3JFTcmqs639YyZkzegJcvEgn6Ysna3dVQ6LACK3EnqYbFHfjcynmkd9K8MjW18n8H8cV",
  "key29": "2DHG5Enr3kqZ1WwtaibG2RiBQNwAcNv2981DXnMsjEw8BPCE3KBnaVUjxEceBJFV9bwxQEk2UECJvRe9EpoCT2dz",
  "key30": "2i1RxZHkqgfXhA9w9byb1GzWi4npHDZavY463WQ33AQijB1UjmYdTbrGyD3PBtuNYy7zwXC8FaFUEqMfzLPYzX6u",
  "key31": "36Rj8zsTnnVUP4TYZU8Wdcxm8iKhFdGiRiK42xdU5Btb9Wrc26YPXNnfJGwLC2nqFrLyqE9vNexNHqFwRZEMik6r",
  "key32": "5sNf2rPdaMfnd1nXTXeCkRrTR27po6bqFKuaqSgjCn7tHTKhzuzmHMHZrssAm6eH8fFFx7FHP2BYgXgQZayN1Sth",
  "key33": "d5JwXSzfBU66kDPdrBCuf7QXxJnVUxNGBgsLDDbZQUhfKoDdnk7rkVCGcvDHrDA2ChiyHw7eFMk3wtaS3HBMDa2",
  "key34": "2Mq8TAJef3Fpe8x8yYCkQT2ZrAzMPRfjwYNS6T9Fv2cCSugDrju9HggW24S148yrABdNatzxjNcNeYQAd49SAbiA",
  "key35": "4hSAP56adRsSLCPBjDP6pLpMedTJH9aiRG6giKhhfhkV8dvfZTNSKpLHqRFn1HkmDmgq3rjiThdrPb9G9SjsGPNu",
  "key36": "3s11V6NCETTDKDoRPyJYb7sqZEd7GEQnMuXYEjNmMmaYZe3rLA9uLcEEqsGdQGw8q1kAXHW2G8sCqTBDN51kDgJt",
  "key37": "2WQKCy1Aqz8dX4JhaqUv2YZupwWNLUXDNNq6XSs9B5JJ32Ejd7J2nrvyJURCFHK4FTLyKnPoi6BBqi5yXSS12ht8",
  "key38": "5cje9V8zSPEyssUmP1EX8g47HKfu9uD3Rh7REMZPYfgThrcAtrGCk8aJTfrvjJ76otnVWxut843nZSXHsPr99qid",
  "key39": "5ZABcxUUxkgJRzooN2m4GWMfkU6w3UKeL3N7QVrgqdUSZLgaYeQu7CvpazFxLgktKw5xNPErZaEpVR4Dhscxt2vh",
  "key40": "2pJQamRcTBtc3cSfUy7Zeop1hXA3a1Keayqc574cd85M6HyqCmmdN52juNCpBvsoyQBTcxnjeAmJLqfgpcGCZYW3",
  "key41": "4CLYZfJtU7kwuyr62kMtzu8iGdD3QxCup11FMFWzQR3kYy118QtvBLuKryVUm52ttU23AmY6rANpJLWRdR71M7Dt",
  "key42": "5yRfxYEhr9qkdseUZm4VyW4iCRTt7oPtbL8wfRFt74tWy2QzJAMfRT1Ys6sUGM2ovMXr1Bc9WGRsFAU3ich9CdmN",
  "key43": "41LqNRoZG6E9KcKCfUpTWbowtk4e3cW1Ab6Yd35VT83WcjYMqbqY9zBrR22NV7gaN8roRV3HZuYwDd5hDxMnFjJp",
  "key44": "3VpYEZhauEqG9ibe1bTmzetQsPWEXgLFDhuceMe6vfjr6vWn7WiZC7gb9E6aCK3DnkRNDZcMNj1Hq7gmmunnRpGH",
  "key45": "2pt5R6GSoSi1jw5MwLaxHwktmA6WpCcvnK8V3nhESo1fNjtZx1DNckyfApp3gh8fZNaXWciP5Fza6TTYxF5LdNxN",
  "key46": "2tU4Qssz3ec5BY3URnUkVs3aSGaJGvPHrNwHsmUe2cTPdDzWt5STpCRxGirWG8boDhiKzr7Lv2Px1io84P6DzXWB",
  "key47": "4JkB3Bh2Y8e4RKos5WEBZKsfgc7gfhoDE8zfN6aiwReDetQGmo2FW683AzwQ53oboWHN59sfedVof8aP2t4yuEyr"
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
