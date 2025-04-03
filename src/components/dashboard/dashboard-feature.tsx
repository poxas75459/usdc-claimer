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
    "3pkCeVAXApryivvtS3acWnwhTGmLfzphUuv7ePc5fpYhJ5jUQCMRg6bDY92pyH48mLdjz48Sg6NkPjnBdX9YBBSp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZpaUwFGwi8WmeUuTVNoayfqPVv29xRb4szY1NJ6PxKxUs74tZ8gBrZ6VgomKTPEeB5jj1ALeGJ6zte1ELdtAPdS",
  "key1": "3jmKvZjuMzLpHeexXSMhpVo8e3fDrwns3MrDzzuVVjf3Qj8CRszxfwgPtf5Vc1WvbRuFvDpk5wVmmPXDAqt3ngAL",
  "key2": "3HzFwev1WKCsHLpCtYt4iEcKDfc6tNZX9XFjPjY5gCgVeuLDTQkthfkfn4Npw7wD654kk8NpbBv3NDrsUedRX7oE",
  "key3": "5E2SLt3FpSNYDQ9HQrh7qo9P7jVifmowDNUWiJbLeFwy6c8En96uRuHYCct5cCvArQ7ZsrgH4HWxFJZLXCmAJqtv",
  "key4": "p7d9DEYgJmgw2jM1cTmb2t2qzviewwPRcrAP7ucjxeooRL98CpQgyVB9BMZ3djMNWjcG2MyXcHYhWBHjt83oY8v",
  "key5": "3CKksXVVaKde1DKSjSWLRbmsFbT8jhD5s2Yi9dLZTZwgUANnEhYk5d4mSxbs6F7BaJvwdfV2RkdT3prWvQRLM5rc",
  "key6": "61t6EEMeBf7UjXc2tJoPtzgBnEARaQiAiSTDmGwW6VTpBjf9SBNgPXhdwa5TQxASE3ErVcWKJvGJP6TWKVgPDDj5",
  "key7": "5WCEaHsL63ubQWAJxFmraLcbnDXoBTjUvJXSqePqRg9GzUhZD8tZ4evC5QG8pk5dvVFg5k1eBbx1FwQrSVAn2a2k",
  "key8": "Bc1nESa9a5QwWzfyHdRkRjJittsZjMJbj7QMAqn33pDn97trxnfDemj6gF6hgbtnRtuv9mxs32R3YcTqTybE7w3",
  "key9": "49thpcgVNqKZVgQHi92BfiD9pSoKPbkMiydvD8XzGskfMLjHivJDJ3radKjZEccvGX7U3E14w2sBmdzX5kFuemW8",
  "key10": "26wzBPEEqHTMrLPPVke4yApVJzVtL5o19WCY99ptVYRg9dcQifj8FsxLVXeZszzN9MmZVEFW4wUDcnbgXWTPVaom",
  "key11": "o6Sd9jZw3HAD8a4657RTWscBGw9KiTJ6Yp1KQpbdtPrA1ydb4e8Wv9CKVkCXy3VrzMvHW8NWL2rQdx3bHJSokqN",
  "key12": "4XtKFmnbNWbwngZ5bFBCHJ3V3JhWKyq1T9UNoEPaJy45DvgWJ7wqhP8v9HWXwMCgpGGeSkjw3tHRHiQy1GimKHjw",
  "key13": "7XvHG5PKHtRZ8G4taN3UfX1PRigSvoBD32H94FDGSuhB71vWARd2paAE1SvUW8Y5bXg4GZUrjRfXDZwG5h8gkq8",
  "key14": "4xaHPxvqPVyHcpHUttfppk1fjw9GQxV766C6Be7Z75NGCvLrN4WU5g7f12ThuebDt3LE9s9EVTN8CF6AUdPBN7y8",
  "key15": "2cM33FWHBq7Q19UqgeShEKum9hqfRD7SGQ8UdN9cfHGVnwLijxyCNH8d5mzs2jfg9V26eHg4FFFur5iBKbhr24Xh",
  "key16": "2nazFHmsJva7WGVz3Gn2Me5zzxQwPP1PCQsnsRZBsKCEjVj25S1T6gD2oCRZR7suZ7Ad3Dcyr2sN6PuTNezqdAHz",
  "key17": "3rNwtiynJLoqjVv1z5h8fqoAeqJYjXN3Pr6BPYv5mM6yE8qTYNru4uDnstcfp37U7yLVmRswW9ydEYtBouY7z4UT",
  "key18": "4AkFwSjoXw4WuMnRmCmKL4o96t7GgLYkMVeYw6NDPF75ik3WqtZrYcwK1tWqQBygcQZpQhZKYVApLNy4RCqfKSAj",
  "key19": "35Nkq9aoCqYPZ1DK9zXXV81mHkezjuK495fna681rVnVniqaARSqAgMFpbFefuWii8pVpZtA27mtXiuQT5wrjjc4",
  "key20": "5L4FoLog5pibPvMkswgeLRt34eMJQn9WvDm3xvEi9hqD89VfyPQjudGsCSqy7EmMRQwQmsiRWu4p1EGvhrWhtReB",
  "key21": "2eYw51hhCWweH9yqWzQf7aiJbBsUeXi9nPMAvBKwbGoeoaV6cLercvZVa2QKmrfpEt1Ku8kuPfL5no3DznAm7Ght",
  "key22": "pv9qdbVTxKKnjaTFRTSUpBckT5hhCR95K1GFjFQnGaEzUtSPK3WzxBs5MwkH6wsfzf9apqMxpGrXfYPseHFByU7",
  "key23": "2iATnhPgnnq3p8upDn6UryTFeaCKNLC8YvRSDaJ15G1rHTjZ8vj38Ssrvhx8mjj3cnqSwLcKWh2SHkVHh5ewTvaP",
  "key24": "3Sdbszkhi7uKeD9ADJJYZd6tyiaFCBK9iruazPVB3yQ5cdoBREaQ7F3ojNHXXt9W1eeaYqSYDgoGiFAwMLqEyTtp",
  "key25": "3EudBurpRhp16mBiWrz2MrGNwunrpbHgSjJDJxZfWtGCcHdsXgR681UjKX2tEzJigCKjsR9XRXsVDEvae6Eg4JiR",
  "key26": "5LibftKrqx64j1vxqubLa2VGcjGXjBcU5vb1aVb7XicpFV89CnVMFtZWjrxHJem2TbFW9AFfEAYt6P6FBDtwKZNH",
  "key27": "3WfYZ8zQicJV43ViMKhHUtiQLiVbvfmMAnoDzjD7A4qHa46G8mQw16SxPYWSF3rZ9LjzsXeqmX6udh6pGTqCi9v2",
  "key28": "5GidBetPAfLgtUvKpHWfJt4JzDDs8EHFQb7Za8j38Hm1aqAe5NThdbMeS5GnrLQCahs4TxN24B7GySegJkKbdNzk",
  "key29": "PnYQRnXjZof7NfXZUmN5By4v4TxHL3VidwyNBQ2uq7j1Zy91ydNAwVR9CTRVuMF2phiCqw1vuTfGQLb23oQJY82",
  "key30": "2atCW74CwJLH3d77zyXJRNiGjVovNp6FPe6KqfgbyhFR9yF6zLW7SXm2FYpd1y8sES5AtNwPAdt91Cu4UpZwGFwP",
  "key31": "6wHzZ8wD1oqRzHpNZ9PQe9z3NJL8CkoktXm3qZk5LMVeb7SiarWdWaU743MB3kgmxin9phXBfbsQA9dpnjEaV8P",
  "key32": "661AeRpVdqbgwADqadVggTak3feMujxW6ix18NP5vtFTio5CiaDJ8T59CW2ogjzZZbQUAPiC4WjHqCYfVyPNsSbQ",
  "key33": "5v4ihBBKMjfLrXy2799B94P3Qswxtf6j2fRdFvekToZ7D6NsGYr1NumkUvWg8aw4bBnD1YKJkLgQx1Luz7wn59sz",
  "key34": "5KRg4Cfdj4ohGURxuNa36rajaqMzZmarUUPdMRhp4Jte9WBormurYSBu62JAdiZmRzzkh4fEbhpoDQ53TrpWrruV",
  "key35": "5AVLGdK2M9KKvRwQMsbyabUdJnasZijGWvBnf9mCBx6WwM2bjZf7f7jGJXbN7vuRNPwdkkaB3mCV6GxfEtZijhWt",
  "key36": "4aDfNM9kFZ8GiXgv37yziC1nYrCboVJZpBH3W5DX4gYXEtG4E3cgD7Wp95TBZ8ZkVnjdATZYeGt2Fds6u3TjNbi6",
  "key37": "3Qr9YKfjYCJpMa7Xddy1MZauQb8vcfEzPVUYYMWyszkSy3hSfSoiTn1ETDgJKbT5RPewW2ifCwPUFkpuV7oDDWhm",
  "key38": "4Q2EsjXLNzef8zUqPYXqsUAwLnEAtqHwte4vj6qvNTgv1ChYt2Y8y83DMYShk6DpY6o5MSnC9oAiPKJRZDwKAp5K",
  "key39": "4vepvNXSASG6oMZ1eiXoxabUXQiMqJaCRkN5WEnbFoKwQoBJWRuEyb1MtjqReAEZt1XSkpQWgCyZwSKRhWgeFGEE",
  "key40": "g8DBSpGyAwyQ4upqNZviuy8XoUG2JiTs13Ayos19aM5q3x5NcBVRdSU8V6sWwMgdEzeVwp8FfQ1bxmW3UT4Vd9R",
  "key41": "5y2jRiMr3zpEQ8aC7gvrSopeK6aDeg3PZ5a2uYKuFMkh8kH2BDccyAM37HfM5CknM5oTEdzCzn57gsjZHynaKUU6",
  "key42": "2RWuWoWrZtsFLaCqHqVUXMVemGHHGGTbzAAgpuTtZ9tug7dgn8Pd5mfvmntixpJENvQbJkCpi7Pf3nzbaegiK39h",
  "key43": "5uxjs7b3ZFdbnkS4Yko1YBaupYMWUn5EpNMPnYvCo7y58FXxtASsd82gNmxxNqZAb7JXYCdyp7QU2inwroaLJjg4",
  "key44": "7bGT6RU5xpPJxzZ6wkwf1RbwnqaxV5KBF3CwSh44avZrWcDxEahb1MhY1nTsiQy7qcUeAGprXDGpqqqWSxtz4Hc",
  "key45": "4sAd7qVFiobtw9P6aGH24YhNqCREgRU8LGc7aPshpYJfZGhxV9RmV6dfGQZfs7WpZj22ZFhEW2RhgChZ7JbzASdS"
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
