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
    "49fgDUiPxw1pjPz2FogLrh4p5q9RPFh119wNcxpTCf9bSZVFNXF4dTYwjkFQrSSaRreVt6knXW4PtRs53MwKW4hD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24nsfrhLJyQA8muktvdspoDEm2rT1GCKd8WbvaLqsCWoqRTFbN2ZMoy2YTWw2eh625RCeCNvaJpWuCDGx36pWmXx",
  "key1": "5RXj6m3pC1sXwFt7KDmNpq6ZmPpkwL1vBxFz9qWN8cbpQTokL4LvtPJT4mVXfVGMhomxsNHgEXMx3hc8CmKEWtPJ",
  "key2": "5XzxzEaKUcAqwn7MwnoFcFmgCho3AB56hgwtVhpYLUsZfwE1UnWkE5tFwpkg2byLuUyApDiNrSP6sx4WLui2zUfL",
  "key3": "5xC1X5VJ618ud6LbmozMYiZtCsrgpybPYQuGvhewQTV3LCccyT3dmdwxbUZUTKPxyh3AVDtQVQ1NbeGKXdpHTRnM",
  "key4": "Jz42FhR4e3eJcU6o9necUz2f41x8GDCLVKeW6KaSMKN87MkwoYyz7w2bHBGDq41jxSLy7mJg592gNrAiUvkPKxY",
  "key5": "2QAEjtVddNxjqosphvuyMJh3vHuwBeprHDZqSY9popgqSLzexBHvdiWyYEb63LvgVSu9rJvwuMarWT5GCCCiq28E",
  "key6": "5MfRfLnA7DVv4PkmbRGWaeQa1bPUC2TXffGyv2d3JJXBcQHQSNUujvMkNTSGKnCRGjRA2cKZEvMzK1Jdp9taRhrn",
  "key7": "3iyZ3BmSq7Y2KKmsaMBxhHtsmF6Rx9agssUaCfBue34q9DBqgiQFMidsf216Nk8oAzN1tp8qJuNf5An82h6qtnbj",
  "key8": "WJp4dYiWgrTANeeFgYBozA2qLz3D2Mo9R18nBUQfrcb77VqEp8md1FRWWFCY4zq6rmBwVQAyFR3mACLNma9Pgd6",
  "key9": "3GRUmQr3TmspWKHM62Mi7pG9xw4kZjkNcxpmnsFvxAnn1BahojTngfAjXWYJdbnPf76od2Uc1QCrAPtqptrbLGtf",
  "key10": "647k5hxbR6zq4svm3azqB6BA9uRbpH5FFyZETLaxmacXTHEEYqWH6hbd9UqcHfNFVwBuhVJ9dJMJ5J28F84kMUmU",
  "key11": "2PTKXzctTrCbTawDSDXLNa45f2iVAj4YTiwi9V9AXGjxmbVueUaD315yXnEMUe7xwFqxakxarNR25iLYUiHhinz7",
  "key12": "26SfMbxD6S5V9jDadrBvKRFjcibCdxf81KReXHgZciriEn9e8zNMUosLeTF3XnTsvqv8WyaFoR63Br7oXj5GhTP9",
  "key13": "dmDpKJSCy2G3sdBXEM3PaBEDhtgMDKvSu7UFCrMkjnvjRKNpqQJJEqQQ2cdyz2zx2MPCurvkdSCuapTdN3JZfLG",
  "key14": "63apoFLAvpuas6sKfQysXmwzJKXmfp8UoCJExQBUgkDjSvJFzbnfKUfjJCSdzii7TT4hqzawqkNwQZan1FksqmW",
  "key15": "4GRQ1CiouF72QMAQcU6jrMZNiiMcSVN92aspFfWqVvwQRkUoSPrWdoCDmtUNxgAtFRFMnMGc7JKgKa9ANKyPazmw",
  "key16": "28wa3MtqbxL1ewdmF2CZEMMZCFxUGGEMPjhkfjt3vruUTYdVkbfCwHnViMbkUGEUD7XxdmaKQM7C4zDNDQkKgpPL",
  "key17": "3Exoh5irp5SFeFVvnPTHJrDkzd7oydnosq6tp1HSjez4QWhSZqEP28eiqxzpzfTt5HTc9sVhSsEpj6YFeVECxDjc",
  "key18": "5KMY6uUnupq9x9YHT7KCGb7fuN6bAed4Ty8zCThBPyHC95JdYnEDWPsEfx2NYZQ2dUAAyvGX9peDF3tyBjefdyCq",
  "key19": "2UoZnSprvH8P9xfAGXBxLAWV5ZZz51oCcwBxcMWyfhwirQZsvVr4DVjg8F9gLZHCqp5Q6wqRmQjZY8CdWb9wsJP2",
  "key20": "5Pe3gJeHXLQDTEQqw22UNfcxCqmnnyJdGP9JQZQQXEwh9PttjKv6tW8nt6zkcmwA5vZG6NTHG8KdAuHK5a4AViEM",
  "key21": "5CieCdjubigJQP9nqDZ3LWbiyFX2A21J1E6FPov2Kaf15TqkAK73Mq4WzfsnSmu5T1MyCKmnswjJhnXkh5qmvjfN",
  "key22": "338BBAmgZFPwy2NFpbCPCPwpTtiD6giYuiiB4a6U6psJvywYg7vCoN56S8RBBqsYnPYy5oyaAaizLEeoPyUEVnKb",
  "key23": "3VUBdCp5dEDSvWyiJT2eDPr2DSYBdTfUawehXGhZZnCXzrYTzNwPBxv3F8rFLkRrJqnWWmfVtUH6s5rZWceTrPB9",
  "key24": "382xVdZVBgkHzgvyak1psB6aafZbQCCjvKo2i5pKWCigE5Xb429tdCkqUoJovAAtFYVZgB7RgS5wM5MJCoC2YMX4",
  "key25": "5J3mNtuUB15MbdGNRpnXhJwssXgcx7mTJUdsfFeCsG23Kr5CDGvPJTifStejceHEDt1eBVea3BaMUPSGcbJYKiRo",
  "key26": "2SyUcQAWzRWkBRxppo3JezNbXARaSu78uiTdHj8hHCnmtjc7n7S4GyRmS3L9Vd3seB3oSxLNRJfxcTD3k5oP1Eej",
  "key27": "2HBfsJE7cwZrj8Q33t8C5jFKrqV8HYxdf5SkJxyaakyoG8Hs5rMqYJhs7xeKJ18YXBtuPqn8YJ31cUEteovswW8Z",
  "key28": "39ysj8YUsJNTyv98UNED3MErzcweUio2ix7XoHLqzzYTER9N5Vm62TTGquw7JqGsb565ninzw762W5qb3bjYGnmR",
  "key29": "3s2fUxwyUCvktGqf4qF53ajispzSR9kHa8TNQSE3Pyw8N6i8sQUJJZnP6Ws1n7QaNCKFJcyk1J7Y6FbSkwZFxmGU",
  "key30": "4veTsZM1W8TaubZrr8mUvswknAFXvCRLJV2TNFrC1jidVwTF6DahMPiygZQcyokV9MU8v74yFh5Wbspxh1ZR3tD9",
  "key31": "4ZoaEkvYBtCXZirCwzehCT5MaP1GMYjqWkRzLnAqgenu2FS4akk2vqZ5LaZmNz6bqHjwUGKetF2uoqRsc6BMsUDC",
  "key32": "4gteQkCG9W6CTRQfxgiVXkkBGEMuJcQNu3TiFcvBf2qBj3PgPt6wnVwnqa7hjAFDpM3KEai6vLrma1c5K934eoMA",
  "key33": "UA9pGsiumFKmyQC2tdHuFcSZau9dSU2TcAfsgKDm3hvPUqfi3cjSET6F4GKzcMsEewiJo1gPVtJ8xyfKCfzbCjL",
  "key34": "5jzxY64Q87mjJ5z4Rp5Pp6mgi7oATbK3RevPJpzWneDL7GrCWHR5PVGyVXQjQxbV4ySSUuPG2KBYamvXdXQAX72J",
  "key35": "2XaJCRxLAv1CYBbCvuQpBLjyLYgGmjHkkaDwPKg8JyQnS9XVDHw3F3tbZaekEi3KCs5EJzybZhyoqKuhPh95ufNu",
  "key36": "CNjzAJCtsRNFD1SUPmVYAVY1jGXHa5jeL4SMUjR3emo3Lk8F15MeCKsQbd7xdMjCAc2QCz1hkCsLvF3GjHerxgP",
  "key37": "5xkRHgTcLVW4P3eYgqqFMW1X7FYQXnB6zkWfXpq74PjRWmg8n49Pv9HFvCdZuhx9mVC2SKn6snQoccnEW1Neymmf",
  "key38": "4SCBdDgSca2eMrAZ2oxc5MdWx87Tr3XHv34y939Hz3ytgnLdd3Y8F9htEokja6M8oCMGQAno4FobY1orZ4puRwSr",
  "key39": "5Uz29sgbW6u29BzJKAuPjgFDi2p35UmULKs6v5rPG58CPtHhf7rHzseP7D6PeLVa6Wr2fZe4P5BgSpjAzwa96ZiL",
  "key40": "2vsqfG1gspxGGSbZVqzr4juk3NrMUnzJywuZx9XAASgznRK3CharRWvi7Wnou1uFmS1Z4qhjxJ36mfqX9X9kRjuw",
  "key41": "3GYhRSsHv4hZVfsYwVGyi9ogx7HQaDTezBbyoaodW2pBXxraWXGC1wFc97e5bNEbGZveiDZrkQC53ojAgXKjCi8r",
  "key42": "5EfVY8uQmrh4pam1hv74AxBJ8L4vCbu8BgNCKaPcjc7TXWidq5h5Vfcq31yrhnn2Ma9pwtnMNxrn7ADWr1szZwXD",
  "key43": "3UrFUixeuvf633do36JZE6mMvL3korr5kZY2tzKVV8LYy45qUDVzobSkoN8CYxn1uWRgJfZpkS2mwk1NMhFmWrHH"
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
