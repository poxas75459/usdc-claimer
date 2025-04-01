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
    "3K96e1xXsPYYeEycuSMzmpFyLroaCsrjx1ABDimUU98fY9ggm6tfSZdntskDuXcvP1DfKRgRGknMmAyPzJaFkSNz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cKynfgQA1D1mSUsrtb6Yv8x66B4disq46U6bXJTYrtrhJWtEhLuhFWEZSSFhHFtRsJqbesQ9iNMn5cpe5VppEDF",
  "key1": "3spKJery4hAvGxQYEbsfA4X3RcRYoypMwsUQ7xPxWboddfiED7jZ1SAwDe7h1thk6E1ZvDh3wXdFnrVwSnwzj6g5",
  "key2": "2WzBgFiMr9Hgoy8Lb9QZB48VG5VA1h34d47dD8mBbKQtyw9tURv2c1erbVdqyKF1yeE9MM33vL2XPigVpSdMFEQR",
  "key3": "2Jstc7xH6m3iwBbXZjm9hzkLqwcsaPansCTsHabP4GuZ6rYWC8swvLniUb2JPB6g55dJjdxjF7LgqGeCRh6S7y5T",
  "key4": "hLe8tE618iTH9nZbk7RfFLpCEii1jAePzPjWq7u973LZo6aFhAs6ULYRAAh2wyNzuaFSa2c6VYZxGcSov3kzd9g",
  "key5": "3RkVxzkXpm5YxjBzzcdcgpTHBMDP2gyo6PBrwuDyAiT5Cf5hLew8kF4PgomA6JatcA8teuSVDtmrqUq9ZeTyZjQX",
  "key6": "2Yc1PftoHsQ1aUXBhYJKQ6TWF4ZEwnxTy3KCNbU83XXkKk2fJQkC15ZahbriFTEAgXHvc9KsvX9cgPcgurSe7fA2",
  "key7": "3yK1H6B66abJ7xhdLbLxcQ3zxqP6BvsjGqaYvvCVsH3iW7cpJ2NYM3im9CJKVGVNpGEdCm2jCTJvdJHviX8KRXQ4",
  "key8": "4wKGPiKkqUUAiBvHjzvhcjibgzinjFJH4W6EJcrPdUCZ6xBHW5UK6x1CDUNkS1cRbL7PfjVtKC2jWpbJT3au7Mni",
  "key9": "2azSTXJajsxhRqN8ZqrhaU2p4a8fDCu1Lw2TmHtze2wCWeSw2Qe6AN4y1eKpgN43jMLFSWFqrzpz4wfzubWCErmn",
  "key10": "4CjBu4zZaB1tryGDefXpGrgodaZXiQrLJ8wtPvWbeJx5S6eaj2nHgGm7F5yxNo6sRZMpKmtQr7kJDfbSp1cf212T",
  "key11": "57mtbqXKx8eSkC2T5obT1bbjthuemWGsRaHPVLMJxhiMh7zDsVeojLMZnD5cwNKdVBGvr6QrQvaQW8UGf1rsvVzF",
  "key12": "5EkUPMxf5UVC4bMHsbTWm5bGJ2eGKqKq7677RgH8NPRz5WmuBXr43DBjigdjDv9JJLfaV3pXLcr5msqX2MHd3z5y",
  "key13": "33aJzQ9SoCgD2bMPBrKsb8pfPcVh8jAgxvNzEAuqhSfh92HASYugqSFxPUabQYdFmPTJX8FVDtawBaxMj1eskxkM",
  "key14": "229KaqVMmmXePisKjih3FsfLKAH5a8VfxqpsgP1XgYeznSuh6qZ9hb2wPU7biDTF77eusaBNjBS3tsPM7wqNzoQF",
  "key15": "2TgJzP4J93An52ghNotb971kjus3kimisJs3s5ntwxFuta1ivrcrgb5tRto3vhaTVaVrVBr3UT9QSMY9SbVozVTu",
  "key16": "7JwpGEFn9AG1DL3LtAuVnQck6UH7eKc5EHwQaizjzjCDhm9q6WJLWZj2KU2RYaJzSmRpaVkE3e1xmwuyoCwHoMd",
  "key17": "4bteBsA8ymznkKisySYmWUjKNzSmds5asje3iwuyoRhQXEQM57yqa5vE8aJjBF13fcJSTr9VNWU2futyczYJKFwU",
  "key18": "55bkcUU8BQZURrtw2enoRMjXUBeCf65fV4QxWy8cYUSFDFQwq7Ynb6AKKLJTiztN3cMMardeKnkUJXfy4cbq3HNz",
  "key19": "hhE5sbyVyY5nteKrviGzYTHiwKY54DrmXcnfXfcByhTi1Atg1VGjFEKXGBnqFcKsxxtPHYiJNcgdYze9wtHu1PC",
  "key20": "62hFZMEGemK4yjd9MpMTa7EyDgjhEJt4FH8SB3QqiKsAdYGEh1bs8jJVcRLyQ87EP6qs6GWgm5NgUGVeMMVVvMC3",
  "key21": "5tcyqsmayvVh9VbAFBkeiMV1fnSFRAgJT1i23FR3dqEThNfBuKTwtBWPxDCRLRenL9W3wp3K6gCGWXWLWVdpYQnZ",
  "key22": "5FEyHoxxxhF83oz7WiDUmwkKSeU3fhz6Ri12KNZzKqShzJiyUomuSctd4vyNovveTKg3DeTGK6gvrNAa2qBxnckh",
  "key23": "GGmueqx6SSVvZjqxSoxENH4me7j2SqPDsUTEVvRt91K44zAYZfMotz51aLE62MDmyVQQNQTVjurfTPAMtPKvm55",
  "key24": "Uf4npoCTzPvS9w9hibWH4VSgBXiM49v8uqr7x6NqbuYch1WAvxr3noNA6YAKzjmVsjmrjdw7d3QHoXbPaRWwomZ",
  "key25": "4CH9wbqirwbp1J5QpJjxhi1qdh4nZjgypB9a4axFsGTpuzHXS2eCkjhe8QB5nhZhf4u2DCrcajciwmvsKJNsBjhB",
  "key26": "4pURLERv9pRpnND8ACUcW8BcEFKVHjWkx5TzaXmcQhsUbndacHrVdpUmhL5FKk1aqCCef1aCuKJZWRjwzcqrVyuh",
  "key27": "4T15EpzwBJaBaMG6HbxbPZtHjaudKn9eyppHsWkG64QAuh7DapM5B2WuHFJaFYngdRUEFcLWoDYDMp285obo9EHE",
  "key28": "3rPKAn3VyrjnqaysFyhgAum8Fqc5XaXqS5o4oYNFpqdcrsAQxDC7FuRkubCtopy7Z7esrzfV9SLUSFcCLVz6XuDp",
  "key29": "54WrWEvcGcCNxYXznozqKLMjcMP5eu8TpVchyd49yZDpDbkpnt1cXrMd8eTmsMXuE4ra56N3dyNbGKAzBE5Xp6Zs",
  "key30": "5dbWSekCfUbDJbLzPfw6b51ydUyTDfkQyxmR4DRQiHoXAS2niGWUr4EGyJZqfgQeGV29YmK8VC8iosqX57io9FB7",
  "key31": "5aAZ5S44qZgwX1mmPngbN1AXBjycTbrfBF68ozYPyLk72dMufvQAaArGxhy2WveFRuxjXFi2hiPgVXCEv5HWYY3C",
  "key32": "pzHtn3Y9qwoHVHiSnHCTA9o7yfn4TyMfYXqJ8PyHEZFPbZTQExndeV2CbspjmGorwUPjntPyhz91cBz2PWUfi8a",
  "key33": "3KqDtKBvJftgERkXznknJNzzfMmXJgsaTYs8brQ3eGJJ75j6kZbdwTUj9MjvimTvyESW9Ve1H7omhnj2J8rAXBEw",
  "key34": "5W1eScjdz14QfhF4iAzHA3933qdMoSojeUWC6aufXRw1Lkmqie3itVbJYRFAuD9PuDWZGELux8dbSUgrpeLq9XMq",
  "key35": "2oS7xGaDSUG1767a7nfwMZjc7pftLs9o3pi8ho7WMiUPfa5N8Xo82EB1P1TDkrp3kzbNLs4TepYHZ82dYESEunbb",
  "key36": "2uZrWqKXWAEsnAAcTgTvWoAREMACJxvcgF1vTvD8bme1mDQXh5RA3GZ1xtiJYLKUSApyeSfRVcqWVQQXe2J5FhFr",
  "key37": "4A7K6SgZPXmVDYhVZxxZmtWgd5fjasTpBHC8Nz4hgMoo5xZ1JosW65cBwqP5g8Qo9ppbRzdbiNsyyvfMhn4dqeVY",
  "key38": "3Lth7XTuCGfygsLyL5bpT2JYwpSio9amZbTkYVb3LFTWPpcqLuNnxXfLkqvKMQpjxsbX47LoXtJYtWWxVvJmWC9L",
  "key39": "2it7gZpRyckGAmYX35cHqFAJgLNo6CXLk3WUR98eQiQjNioDKZhL8Vsry1Qh7mg28zWnqnDqpLRJ5T1nUNM5qzE2",
  "key40": "PSEzfXnbLqjqkwEViMj2GqAo9gJMBA42WpDaGfH8wr2ixwqrqW1hoVwJY6PHfBnN2P2kQawYZ9ByaU9qC6z6g9e",
  "key41": "2gjx9fXsjwV76Ep1XDA9BnEye6tcSthehUXvtdDRnQJPX2RzvznyvtkRj4jr1bffirA7oBgLzjJxfcZDTG5WHKQe",
  "key42": "2dzUiNU7aT7Vq4UJvGVxfVummyUZyQ2VGK1JK6gB2Cc9uPZdcXVF1jGPFc9ybtZAMzECnKdNo7Pb39KsaYh4m8Fu",
  "key43": "4W7CRxjbza3wi18gjBkrRHszD6qfzq2PdAdxz3yha2PUoqd4Z1RyvUjkLgoAQ5BNtVwMKRE9vVigYsLvzATDsHPh",
  "key44": "2pbYzRQJM7yepPZH7F79Y6wr9Rfubnn5P77MSx5XcRVt63FvzUvzkjPd4GVDq6AAfTJi7uUyABUKdkPdjfpdmY67",
  "key45": "2F61Y84LwURqWHXrfX4YqeHZHC4bcRDhzCboebDkLCUa9Paq8oTLNLubjz9cMeLsE6vNUvY8kHEJF2u7ftVx5DvC",
  "key46": "4zQXer7m7PY4egbipHt2TBuPD9A9avjx8Gxdm5oYr7YD968T45B1ZcAY6EXnLDg517qGExrWZmBvge2epvndVaCm",
  "key47": "4cQVKZq8yN3FyXppx2w3G4gSNrP1LbjytYXqkspz7zwmfoBBvKviff4TVWQ716KbYSVdGVsx7BqpzW5CiuA3u6Ri"
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
