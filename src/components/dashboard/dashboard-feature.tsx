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
    "gxUaznQbdeGRg9wHxJgYYQbmHchphEH4rxjYtXEjPjPvjz8vVkCZ7aQZZgVcFzPt9ifEk5R18x5yzKXFgz6XxNh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DhYcDqNtNVW1NPadMKDQADAaSuUZGo98DrRkJX6KDtHBXyff5boNPvkTgKRWfafXyQnSHpFWZ38MRd1hSuZtMoo",
  "key1": "356z6edp33xjW3jsLvTWNrbwUedaE2f3D1ZeA1X5jqY7tnUWo3tvydsNg6nsqXASWByEouCUgfXc1uxokiYmnY24",
  "key2": "p3bwVCLoNf1seFfM5X6WVFjwGogP449jDt996WRHxLVivm9vdW291PFDF1F49xh7Xz1KjofxZUhWL1GsACkfiKj",
  "key3": "2xxZgdPBdMgaXUvLEUbGCdhkLXMnJu3BNxBnWZnUEtXduv81AWYmVm33Y3VFUp3SYMD6jy9fFHfiNMeKcHSc7KBV",
  "key4": "3L3ADrM6gFVZtfJsRB1h2YeTvLsHCMidSpCy4VLzZ9xafVQXgWxR8VbweZEFwaei4srLX6Zttuc7BVsWj9xc8M9v",
  "key5": "4bi6aM34y3xXHyPsPPMSywTVoX8CYBiUGGeC8LG4kqdbP7Fajtr3c4R1qRzDfCZLckEEbghLZ21T46ruQY92nzHW",
  "key6": "4VyaPWHHQwJWQaoTZZEfit37TMJ5YreXbxdq4iDj99WCs4BPdBHRKEP49GQciRUngtAsJQqcoiV3UDitgqxRAAtv",
  "key7": "3TdPhyzN1J2Md2aNLaCYngkxsPJBNXkxaw7EUYoU8N8fXdGKisYB5PVWGvCmh8bXNCpK3cgKLv27UiYKWTQMfZWn",
  "key8": "3YgBTGubuJFHPQqQy4USfb8Jhyszenjz5mAeyDNTHtUpAAKp7MAAd7ZCh6U7Ldx5m1qQ2jCkwUBvwwQUqDXyY2GG",
  "key9": "2Zy8kDeTUr85cFpHAqUBpH5ru2TvLSdzcxguPSRBjVPu7CWt9wWo3Mc7pZJCFaihr6uBA5i3eBpqqxwTL2gbRXnA",
  "key10": "QkcF1iverMaRdYcX5kZhDbpVeoy5hubhMYhsiNwCRTrk8RaBqZYszBM2tcRdZW3CdNKxZEr4aQWrL1ZYsmH8WBk",
  "key11": "4gRPzqhU8A7TwYbjaLdY5Dm1b9kyhA75BP2iGeQSCB4tGskNCXW4g7AkGx8aAUZ371DPE7wAtEnafrcfWZPAr4Jw",
  "key12": "5YUuLT35DvErg8NvzCLBL4L5sp5gdTdtnf4DB8ZqkR94hTTfk2AqzPTNMrfvKQMRpVSnwZoDdtvghFwLm7BP7fiu",
  "key13": "ZvEU5knjeP6tdLHmE9PP4SSif6JDoMTy7j5LKyYmpCJ48WJZqthiD2Nh6AQRmrFFerrdL9YDP37PKcm2semuD6d",
  "key14": "CM4LhPqbyELiJe7p2Hbw1zV75bg2revZ3bcmhDzfQtvpZgszhLgP1rQ7AycLS26msUkMAwvsWJj1yRpUNDnWAme",
  "key15": "B2beDP7SRKm2BrdGRLh6qA1N3Ew8KScYpbxNo7UxDDygWseyruABF7LvRugpStcT17XHCS5gV9NBCRSg56ZReEF",
  "key16": "4wLTdJXM42MPxj9ZY2Y92QQFBeojieqr7yUazE36fvQfUrgJ77cUB64MudkrgAQdNapdA8L83waaNW5C4TybA5C2",
  "key17": "3pX3Jova7SeMWnjKyYxVXqawLXJD1MDGrAbb1GthLBekGQCVz7gq5Ydgwcn1b7wseCvxtSU7KUbiDM8EZm9y8ujU",
  "key18": "25QtXu6zZ2e8aDDuwnE4YEaBYM3FdoZSh7UtDoFn8J2hsR1yau68ByZN5P63TJH3gP8mPpebqTaKeaYxV4VSEbfZ",
  "key19": "4ezd7JrCT9Bi93W2CPSRo6uqGza3eS2qdiiDXTuHMSuhKPEW6hqEz1j8dC5zPiLsfh5ef9xzxY6rkGHhStwLiq2F",
  "key20": "5Jkcqktw31Z4JP9EE2m3j2aDwzsBLHQPBLLZpBpZTy8fVmcYjjpkDT9Y1ekMZBKf9yQi5h9SpE2HqMqtmY6GAPJP",
  "key21": "49YxaWR6eCGkeaMauUCSKS9qDn92ruk3ydp8MXut1NW4E1hHLq48Xi9G3VyocUuJMFasz3WamTC1XK2rCkWEvegc",
  "key22": "3MHXVLkLVTaVb39SM3V3AtS69GgEZ8Y6gBESB82yqjXgupHGcJawTbT4hwyywdkNQLbRvZbwAWcysngXgNcqZ7RS",
  "key23": "2NqfjTaDnHZYsKpzHBxWfCusFhM6ssx6RuTzHZc4DB5Dmp8m6ZTygrKCRPkUrnSFjH5vvU7ych5TaTRVib61XBbN",
  "key24": "457ARyREjG2D9NS6t6ngnMauRkbXcsKETTxcnieFeWZ9DVUysNmGJEgXnyReWn5c39tjaUCZVudam3JjYCuuGsnV",
  "key25": "WDZ2tyYmXbzBgpzZH6HfCjVPWPV97uBd8Sadi2df7w8miMsJ6huyqPwJ2tKVwNhjT4oarsj5mimcX98ZxQx8Wqj",
  "key26": "5D7rWFEK1yo4V2DTQMwL17Hx41ypQ54ep2DzGx1JoLFEBzjwPzFef2NeFP995yfovF1BTjte6LTVYN8JCBtc2Pvj",
  "key27": "2mB1B36hbF7iAT2fPZLj55MxRh3t7qjY3PsiU7LjQRDTDiQ3HwiMbw2e2LqZnn49pU716n963ToVJ6b8YSLYW5kU",
  "key28": "5t3QM6wmsZ5fdanHA69DfPKAPyweKqcGEFaSxLSAQ4FJWgVSGBrBLBj6CEKeHTu9WBN1kHfoMRTuH486YdfMyu1X",
  "key29": "vTLDSWzwLB3GnPHQk39WUpDYFiF9QyqSBhYmNcSCn4jGNCMZfMADWakKYT9uBnXGNWMLGd4vfN6Aaf9rkL4tn1C",
  "key30": "5bewgsm8E3SFqetE6hg6uPdFhX5BhhoqMjLrjduUiZnVNWAELtiQcR4tDmYkXYDsryDCocvL13r6E2n2rUeV4Az5",
  "key31": "5rkd7yu42cMvB5bndPbnFJK5DYZRKT43GTWPLpYdxyc4BPApqwaqXD449tayuiexZCvEFwUb4CYYJJHD1GLdbP6U",
  "key32": "3tT6Ueytq8aSWdgSV9AWFanzgrVcwM6mV8GjBNLT2oKZn4zAMZKEKJ9awT5CeXYJrEzUx5NquAFZCxYtHqsEzzh1",
  "key33": "M6SynjAzTiW8ULqr3moJKEUNTEx7YDCwgoNkHKny8Cd1Vo8eQ4QpG4ttLiCLqB41e8MpCrS1v4e78RcGmQcsvdV",
  "key34": "rrMRU2qaVwqKvXicqrMsrfv3RFs2egfb2FSeniAFfkfHcSSWW8iQBnehD8nPXm1zM2HuUYKjWNnbuzMcQ1xmZXK",
  "key35": "LxEdHPDmG9HYQxxAAVyP5W9g946uiZZvua3ePUafV5qvc3dM5F2tJ7C6j1MuRDJAK57kJHzpsy9NYKjHwpesbc5",
  "key36": "2CukwPuogixVyBEVZCfVv35jwksTTr5s4nA6BwgVjkntQzuWCgNvgVCSQYALDzCzxNmXv3HU5BmarA8hXgZEmWj6",
  "key37": "2rXuoSNpu1G7QuwtFyGkXVpTwtva13fEUXGFDup2heCrXg5rSLiemrRpmn4HhKrXqpGgR4VkrEe4QSc7d7VMVqm",
  "key38": "3BE7eorqGWP32pY7r7mgUhFPh2j274zjddQgvCFBsiaKDKweDrffR3knimT1Bygx7zsYZ7N2Pv2zefitJsiRBgJs",
  "key39": "5hDkKjRE2BEsGQMqLcEZ5SethAekijb5FeThhvf1x4D8KpdP6nvV5M3uRT6cFuNHTdjrpAfjHikLZwyBgzAtU7Gs",
  "key40": "5ZogvEVeSuucVxzKVumvaVhmGsNLQHzSKChA9pBZ7xS5mp9uiV53Kue4VtmMJn6GEjP4LjgBKC1WGbVimHPghdRL",
  "key41": "638HjZixoTMX2CHo6QYGTAGwdRQ45WaJbSe6KZse9KKaHoXPQPBuWqQxkCx149Nt8zL3jsa6LcSBMZK9rF1NPBFv",
  "key42": "5trpW1q5eFscpra57U2AwUR1iiNkqW49uxdmZfiqB2jBFgb51GpdHaJ5FQuhdBBYj59NfHLS9GrPAGQuyNSjcGNo",
  "key43": "32v5wYNyRhHgmSotkpWkj1E9WP1h256BWkLDg1Zb4Y5LtMNh4SrDWfG1H9gFRRt3D1pFGoA3aQUoBN8vBrJb6qFu"
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
