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
    "3wMtUNUkVvrDgz47MFJiin7iTySYMGFdLafyL5FyMwqzuE9naNHK93262cuYAnyy8LSNeRYT16u8Jm2eybTTcJKr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Po9HihiTVDPhmCiWvuM3gEeSMrHaiqKxebo7vZT3nCF74huowjuerz4aexs9xBKpjetBT6B2QKjS6vJcoa8H9EC",
  "key1": "3tJykzBc82NJnF1ns9eNsiHzF6vGRhgSgJzVX1TuwqroTVEw4nhWhx6gvN1MKqPEUb1eKYrcQHuq8pv3hNrMeeJv",
  "key2": "5ERYKPqgVNaMpNNFJTEgJEGKZgdVKmTwS4S9rE3JFuEbPEWXV1JhYMijEAyQBQWzUNPFjHjvDzdNXDshtE5e7ABH",
  "key3": "5UzV5oCjv4zkGoZLj6Trwkf545JVCDFsQMpBKDAuhenDaRSAgbwiQqNXanrztNcfPXagGogscMCxyHbzXVLprJVh",
  "key4": "YsSv59ES9tQ9ZAkgTCpu8DzJPXgiRjAjkzDMhex3JgfR3ebhsnW4A55Uj3SbiAmQZQHJQt8o9daAMMK1vHgCCxW",
  "key5": "3xwQLDfLytRAzf6qVNqnt1d8Sg5JZ6rdqVSEgZPqwE8UNKJjYs7u3vBa7LEcnfzqgvnMbZRVrnGn37w4ZQk7U4V4",
  "key6": "5rR2Pmxjy7twByp9UFUECeBEnYR5FtJr3JK5Q4sPwhq9uHjQY6XBkv7BXsA1UcPDqhdxgjpo4Ae5DDMCwTxe5g7T",
  "key7": "FZQ3NSetyYA4m9u7FPuAPRCGqVWQk6hnuARg2JTwtqYz5wXRGavhNTHeYzqPZWutdSjdT77YKKiFksqYWunQCtJ",
  "key8": "2mVEYMbrf2vDcuLNv8t9VrkMWNni1v9GLftA1g9wauBKsv9GSLyfg1Sn5rn2DWddjvW94uJCei8yZtJxJqZtW8oA",
  "key9": "4tAHwNHfLRV5yBTGfWZaQxoi6gh3R9CpwbeJMSaPQqUiZyh8Wn7aQVKBmVKrD63zVN3qv9wmy7rkykVG6xRQPPjq",
  "key10": "YKntJXEEtxdyWHQBbBLyvzcyXqyW4oHzpz1fcSHNDPPRDg8hqDS84EFsvioqJYc9nwprNp5M7kBs9hybjG1NKuM",
  "key11": "4YseprThFp4gNezLwFH42KBdv5tQonsb2RpXrvV4QfShpqeW9rhvFbTeeAR8HK4T2JEmcNGgQ1SsamnhfWXmMyHi",
  "key12": "34yjwwNpDLQbSPaNzkRFXV4Tjx98rJwKiD4nWvq18E1jKUrBseYq9ZYqn2y3awGL4icYgibnTUkpCbEV9iNnWp9M",
  "key13": "EqtzNUpPPYyH9mJ5V3zRnYxorFB6vxDijNG4DoHANDLTPp4HKiZsc3FcYFzaBbwWrtCnEs3TRrrU4jLMYkRVfdD",
  "key14": "3vJ3NMoScUptR1vSTkhGyPXMvKJJRSz3BpADSiwiG6iKfuZcNJUXjqSdR1zZ4Bupkf9FbZM4ogP3aEmo5harxa9",
  "key15": "UcmHr4s6scvNXNPScpGXKhmDLeP1A52NE2qbPzDn6VLhdcFPsBwCPazqTPWE61Tahip7FWxCdG6ri9DqvFywLBc",
  "key16": "59x8gF1QVZoXxywRh1qPmxxAUn1UM7tDMHxt83aXw4j8QG7KvzNhxg56ES12fn3MZ2EueM1q6BuwyoWCkkQkX5kr",
  "key17": "5vnx6r9YwKW2M1jUA8ZnAy6DX41CLa6AqBadmqc1G4pkHT4zqujkoHmQcgksWttvDBtBEccyLTnzSTS6Usa49UMM",
  "key18": "5y2faqzHvXL9jtb2XZRmAgE8w6wxnSt5iDxNZh72d2A9pbUffeH4APfpi7o3Ypjsqwsc3iMBrQBmfwJvUcHmESt1",
  "key19": "2TTjaNHRvFDuoc3ijVisHgf4Nx7WVK3x8kdYHavQ3VUDozLLBokTeynLuTZ1hcioF3HmjDZgH7w6oAnTRw4c3AXr",
  "key20": "Q1Lm1AAA7ub8HRx7Sxj7UteZLmS2N6mthpakbrxB4aZMYCLsAexivTm3czC94B5HzeRPjADWw7soi8diXnYnQTe",
  "key21": "2oSKhkE7N8ttjYmEg4LvnMTzqhAuR9tnBozZsx5eLHLEWHT1GB35ASNuuH9bCjfT5nrgw7ij6JET4BMbADAEJX6B",
  "key22": "3F2FemmWBuVsRTF3ex8ktoM36nMTv8RJuhUZPCkeE5Z1FED285y7fVKBepwGQbXCvHiGDFgZ7u4gHUn4FcEJv5e5",
  "key23": "2qcyao72cXWf9qHrfmRYpS2CKwQa6ftqXXSko3GoBWjFmsu7f1jyE2dLpNd7ccAnQiUrGBF5ZSpGxfgp4LbLzwwn",
  "key24": "rBHXyJHRaY2oghdLwBV3yYmP63Nx9dq6SY7qg9ivQJyRm8a1UFQH2i6EGSHZjUGMn2ZHMxcx1KtXy6jLBAa788w",
  "key25": "42qo1GPwhyMiTk7yKY6XyrewApwbotJbpuKNdoRB2q6Mz9tyVsyYaq8RJMCLXjuJY9YsQPPzVoHYF3vVEWRfK46",
  "key26": "2TnVebadNruN8ravFCvXQ1gWfPB7HGbWx4VAWk4s8AA9g5HQ9k2T2SxqLRiDEHXTj5Qt17AFnmqtfMhCmbnyKZyF",
  "key27": "3efrQAmH8HgBVp2myNMo69p4y2bBFq8jHC6UZpogDUW8kaNwfQ4zhyhD8fmn6BhttqGe9nqKjsDNaMPVmAaYAs3W",
  "key28": "5XXQw6Pm5cBuCwz5VVZtTasZ73f1HLt13Khrrg3DZLvWP2fe2xZdsuNfe4Y2Gp115tU96mTCH99PyupqC1Tbnb9m",
  "key29": "4sJUgN2u73Yq8fUScX8UuykowwiQgChKW1QgmU7zWqkGivq3AvRegBTbhFGY2LvZFpq7qatgRpjcn8zTNskExLN5",
  "key30": "t37TGmGioQUeZAoCW1YhQqp3rfNEeuNvp7XA3cVWJn54ee7yT8C9LYsxavDU8W5EV8VfHMUq4e187MMfTqsk3rL",
  "key31": "3FhgJaj1RzLMnWTmVyF7jnXgs9zwqzEuPpuscWwPa5UKZN2WJK6v4jgzCZakVr7KLsxDoAtNgm9zwMMW8LfTZ8MG",
  "key32": "5VGV1dMnP9oTpyCCGy16AJGh6ipThVy19BKTTNGRadYYYCvoL9Yy5QzR4vRCL5ASRpx2nsFvCFadyh1teCfMbpHq",
  "key33": "3eJFyHdQYXT4vGfPe3TyQV8nbHtBzoJTERsxFPBz2qQosMZMwgPTcckpBYCXWW5AMGDWotQ4EDHd1sZrD68CHj4Q",
  "key34": "57QSLJ9u5Pds4sSQ9d1GZyRhZvD4fPYShJ6B1t7XWvS929SryH3uySXcV2wSKCvLEec791rJa5rbkGx8FS6xGEd7",
  "key35": "mBGdeNfEMVHZoYCoSgbREQYJKAShqUqLcDeA61bmyUQLm9hHSsz3V8g1bZyEsGDkTv7xFD9Ra1xdpXsg7wyN5eH",
  "key36": "2ugJNGWbQGqEpfBxTNYdDC8mrJzQ3ipjRnTtoZvCLy8oizgqKoS2owtjCyPVm6YB5ushYaLNWsgNSzozwVbBPaHf",
  "key37": "5wqcSZYB9yZARmkN6gwLH1jTNJ5MCGNTSpMJ4V4Ce5PamgXfwoFZ174jmGezbwWsXWqvW8o34Uwhwj1Rmb8SmRLc",
  "key38": "4nNVfkVxCKsz1SrqKgVZTDdRxAfw8XBS2fLzVrm4yNMqGRXoRPyeeXQMu2BY9MVxo98boH6H9psbDVExQbB4cB6V",
  "key39": "3Yd4GUWm7zWRqiRobgsfV13WjejgnDmWchk216LGxNVdaPdYCV81S3kksEQ1RKfRr7fvx7wB92veAxMMH9ibB1gL",
  "key40": "2kDgvEvP6Jt9RRaiGErVjtezr7gLHbVBn5VS7BnCwU4ngXjeyPPX6vksw7WrJDWcSvwXo76WEKRdbdtCwR1Wydmu",
  "key41": "5YBWaAVrbjBcNUPwzLMzXYAqLm8FWGNYSWxf1k2kyZpn2gJec4v52V5CRid5rqEnQxJEf3VfrZFuxCmbpHG9GMhh",
  "key42": "3LDZNkEpPDShmDiP3wtkReGsGJyeXPmMDboqymZZTH8AkSiyHJ9xWnJf8ZaBp3xwAE1ZiJC9kYYSULqapxPSUfQj",
  "key43": "wx46ds1wsyfgp91PxVbQ6YsJNEeNsN8QmAaf3xWmA2m1oZuPMrSEUEWBgpoqv5rQCsNDn5R9Q4EoAsFVNPjuYHL",
  "key44": "49CQMCB1Ro8sKvFuhTB4oFTtkdVFUq4EPaAmfexHQshysMEVtD8D8qSweHSScAqK8HyoAa1EryDWo9X6rUySHZRT",
  "key45": "3h2P3gAzG32uLe786dQD6fSa6gMuEaWhKuqUVZJ1wx8irpVvJ16omYtnHrcmfnihPTPqcSHFcEBK9EGGzYSRLnfD"
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
