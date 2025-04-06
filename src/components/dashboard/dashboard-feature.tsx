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
    "pay5B7fQTHypa94UAuLp7ABHWK93upqYduW2C95XPVux5eKB19UtYb93SafEd4qzMHSFvpDrM6f2kZCrDF6EJQL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PXVspdfiCKbcz73DhPWhd7FkCQFapBMuXGRG4jy2GtcsLg7m4FsFeL99UQpbiyPymuNcYX5aSmVtA8jenVF5rUc",
  "key1": "433Dit4jS1KcYqRniNsWjXFF6SDEiVJLXN9Jti9iY1cHWJVjgNzG5f6HwJH7yux9mad3rWpFsQc7RJLczkmesumX",
  "key2": "5eXccY6fucjPP9yMYqZ5qmcPF9q79e8BCYuoDpEC2QxDTXYDqNQvLQA6s51FHPfR4Zw8ZQpHGScF7EJqaDZFpAHc",
  "key3": "4ioLz3TQMMPp6VH33H9cJeL4esS9uTjFYhFVFDMZJnmfVLgVetNUFD7qtaiQoyM9brgsRXyDPtaC7eRW5rEcD63A",
  "key4": "2MRyervexn13GNKj4VgtjSu57jEJRGmVB9F45kB4szCiHxTqsNUNafRCq43jzBn9YRNXiBkrnrL29mxdA7iN1AX5",
  "key5": "3AG7SBbuF6jWHPRQLnKrEY7D6Ba2G1zR7xRNygRKSkwLmjnggLN3Hsob7h7FYEft2WWmRN3nW9pRMkLDC8JXWXyR",
  "key6": "ADSSoGci5f6v8qEcoC8y5yQA1upoMgjw8iJGdxLYu3U3gfeiVhzstvKervnGyiy8Th7d2gVft15TFwZCg7XCJGS",
  "key7": "4Eqb2ivSpEx3NoR5utRNAXHoYofuq78CS1aMZxW4AecHcNKCBW2zrj8Ugk6s4q6en68qXrzVqunyDVFpc2KaB5U2",
  "key8": "4fgxBhnK2a625puNtYoAMv3UWjPGjwn432yWAXpZexV26r593bFQ62jFXMAxQPTunwKMWRAvx1dMb3ri3LKTQB31",
  "key9": "4m6xV1f6VLHNmEvhaxEXbEWzUNgGa8vVV3S77HAmhHN747ZLfyCMXq8bQYNnvp9wcUq9MEn2tS32P6ZR8wD4gw7T",
  "key10": "23BPsm6dNifnVwmsoeqZXZaWpt59Wq8LpqHLk8bmp94EAB63rjtepz2azAgPxr3sGatLUJG23SpcmnGcyGBdCirN",
  "key11": "2DuU9okZLLVP4XQpxj2JSze2wUNWN9vMkKbf3kaEUSCUUCzdRH22emvZQ2KS5SzCZz3e2XFuan9aZYCQ9kP9HpKm",
  "key12": "3KhbKi5YsgF3ZuY36XJ3wGr3gcYwjXjk9mzi3Ab5iiQyxEg7wTiFEYmwQSrU2U5nDH7sjihRzBfnqD2hJH27wGn3",
  "key13": "3uhAwMKcsgzLx3RF9RooxqLtLvfMCDjUUKsogP3XcPnJpbEoN8NqA1MzazewmbnTEtMJzaNh1EDgZSWTJJTkMKzS",
  "key14": "2z1PCs2ciAkjA4s1nPDsuQUKAe5hsDxWpCHruMfJURow6gRDfbF24TBeFhgSup5NBW5CDTLhRiEMNo4uhiHsyVab",
  "key15": "4GjVUvWamLL2qN7A6nrXRTHwX5QZYK7DVPaZm5sVxnbTPKc2bKSVWPdSb52q4ddjy65RB9BftLnGFHMvtgJUuY3K",
  "key16": "4oZvfkKYLZHJivfPyc6QdLWhHGokwcdCRAgTPo1KwzsCAcMifh2MhtKmsHZtqAw8BoWa4V9sogTrMHUe5WSJdCQp",
  "key17": "5cPmqfd1SNtmd2iGinz5UoYLddRaFGf4YAJ4pA6bD31D3rFDGViEFXGSAKyovKrkc5cVWi4net5jegR1nNbPx8Be",
  "key18": "4oHcrEnmg3PmFdZe4nMJBh9s3iGZcefz9gWJbYXvDue7J1yXq5ND1Gfu9iztkBQmriJgqcRj7QC1cHcrL53LfWi9",
  "key19": "3oGBn6ezLVNuu7hbznrrovZK9EaJjt5Y1S44XPCA6sVEa6mfTzuvCt3do4uuTZCksvhRdn54BPPBfn6VjdBE2NDw",
  "key20": "3RTx2n7yU6BHk2Ybdnafd1aFmFoiFNnu6DLhAWDPRoPiHwXwHUV89QsQ3MbipZVcztFmVcTJkP3HL37AMGrro7JK",
  "key21": "5tLNj6KYCSte4CNcrS7GGD7rLpZL8at5ej2nnr7e13CP5bEzqAMRUsH6w1afttRpAmPJNES44RVw7yZfqYwtrCC9",
  "key22": "x9BB9cJMX24AfMUssQ5rpGJ9AKVaz4gQapZBxA91P3qfuqJXEssfd5uD1W1zgQV69mt9F7VaBDFbwooVQ1WRfVE",
  "key23": "2D6j7DusRZFJzAA5FZUj3WQKahGdSE4xo51swDzkgU6TvAjS8Zp31YtnnQ8DWGFWNBhrGkgGg9XGKdoqp8MQvS1L",
  "key24": "saJ7aukh3Hh9GxhuLARCztW2EHQ5PjyDNPeaKg7bkHac9AppxJBnR4NXuVnoTyBKZjMMAgTiwJP4uZDSdmRDc1B",
  "key25": "LNoyEQS1XrwzdazvhSELX3GsUweViJyrfHbWTdXr7mpFyD5NzrfkyEjfY6dGZQ97ZLdK7pisfddhLeZRL6CZNS3",
  "key26": "2DNFK8AerdvgZq3aMKynQYPJnGo55Zo1sDSWk13TXaYMFuQs2DxnWwXSbLpHrKas2FdqJ7SPrMh9Qwg4VVsKLC4H",
  "key27": "4vFtxnexKXNgAMtNLKEBtCskyBrVSgqxRyqFPMVE79zYRZMo9EH4eH4DRtMXdURRj2wQVd57inwY6ArMSQxBUT7M",
  "key28": "3BcbAT1cwTsM8UypHDarJwzGJzjnBdwkKUkg9BjLg9tEd5ZDXS6X7c7EgsD7XAVXgTj8PNoq7aKHt8ydJDUP1NkJ",
  "key29": "3QFAVBeuEHDkDHyqQL9gwesYgHHUDe9JwvxFpw7yTHfMAbk2v2qntYJZZux9VcrQHPukJeESw9qpECVSeg1zTAvM",
  "key30": "67PwX3Si5EQp2fW85Sq3BtvimjGHnQuGLV8Hwe1vaewjgaMujuqpHncdUUCUsm2YEX2DMiVo4dr1c8GBb7Rnysji",
  "key31": "65dtP1qe4ZfztKnfKPRXarmTj6KDaezSdfn1KmCmkD6wuM1tBieTx9jX7L3CGRtMxdjwRHLwZZNPtMZ12Mdx6tSM",
  "key32": "2sncmfoo48eBAJbYZkQ1EyHYhELcwhv3JUMyoLGLjV7wYVdaaGpQAXqdnddJg1YRLGeag9iBZqWFsMpD1KUsjg1M",
  "key33": "4mBzxsrj2nk9Kh7ntKWUyx6VmnCirNiaTxfKxvAA3Tmy84odAw55GePZ9QJqcvSHBiAM61vVM8HB1FYFoJ5xLB8k",
  "key34": "xKSkcKhQsjBGYdzq1ZYLcWjCtSRajaduymNfBEF8pfLmHyqyNafojM26ZvG6iXXWx9ocrrbkfguBNSBeJ672hRX",
  "key35": "216iovm1WeQvVan9rqPB46EQhbHJ3qZPkaLbNTZLyRs2ZjL6XwcVUikH19of6pKSwCvvsMfizDVps9EQRgwRBqGm",
  "key36": "qYtSX4K1e31k78165PJnWkv9jbKvVZ8MB82vdjAZpu5bCLM5VGXqJTBJtKb2UkJi5HgAvRfW2QwaH2Sj5huBR9x",
  "key37": "329CM84cJF1ATPGzRioi8qX83SWi5ov7HWjodRDk6zVgpmSoTNhsQzwS8X2T5vNqr5UBpdxZf5nndN7hwSUxmKWd",
  "key38": "34Qjk8FEupW6zkE1nfFMRLA8L79aSwFwGDv2VEWdTukwsnBnPM1LP3sP1JtGNecKSxgAMUwZ6mMjdPbgvwPeLLeN",
  "key39": "gtkWCUsu4YzYZDveuMVknGDe7Xqdwpbf9j8R38dA9FsPfHKE1yDmLk97LjDChr1Trd2xPmY8drAVUKmJzjbtv1k",
  "key40": "Ge7ssoPdgKJDTSxc6spSi8BCbaN8vEcRgt9jut2dyshoTnfRZEb4HFxZQHpvZLbrtHZ4xzJZDaz6N4zQ6nRfHEt"
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
