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
    "42YyP3GbfusTfsDxXZqgAjoAsx3kAsb4FzLmpGdxXNTRcWwkZqTkxN17crAFhjCH3kdwgyrDzHfn1ArdXpQBj4bm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3h1Pr3Jm6dZSQMCs7WMxZBzg5jTr41uZQV6QKnC8aT4Vt9hxNh54XxwuBAj9Zmi9UnHeuApb6nd7HteLkgWxS31m",
  "key1": "427EYSo6ShWycHf4inwbXrUjPLujZoxUYMvNxQUwo549ZXM5EfZJUsSTTPB48cbQzr1GLKTnriGijLc4gouETno1",
  "key2": "3Khq7fqr8qmXbF7K7on4UyUD6rp6kkaEAceLgmHcdfpr69C77qrc5zkHdugURqTDcAsz1K7ETR98npZit8H9XiuT",
  "key3": "5d6wvRWirSpSsWfYxY7jKzGZdWW4EwWR7UpCuMfVnGBWo89Ki9PMsL5mmpHddxo8HGgQtwEeaFqQnwgKy3QTAEGv",
  "key4": "5QBfpXxfsuUhajgcjiUNhMYQWP9mud1XYs1YkwT1m9Kcow5dhZFGM91uwMS9LUi4BFTh8uUr8UZi5iaoh1HCm6Mh",
  "key5": "35J7UVdVwH3F5D8hTRTtybAYRajxmyS7GxtrCXSzpeui15KphY1hyyxzBdLfoX3v2TXwMLvPPfjvLCukJEiyHrr9",
  "key6": "4URQ9tsRRij471iqnkYdPpHJnHwVCJkdQ3rB7Fqch2P78CmTvzP5tCopm8grDkK8vdCVHHwutpzgcQPtW6ocJg4Q",
  "key7": "V9v3briqyo5qiBLHBenp5mQqHHXjxS3buRPEJAfiwxdQQHFRvwpb7XZiEEcxrmjkQwidbsBsdsBQpoezj65rizh",
  "key8": "XJ4C8NJ38gkrDEugQYu5J183tNvALP119JFPAE94qbwAo9dAjLB5w131gDHjH4Wnyax2Ha3faBH1DQN5LNQpsYT",
  "key9": "41cLSg974UiVWbTsaVSieD2Ys3HDxpYf3GRgtpErto5WEhDcExTuz9oCQf8B7hQTHPv78x2x88MhasY4e83Gdaq4",
  "key10": "4pVn5bZX2EA5AinV1b6CcorXuVdfFJrwUDdTyXDPsXH84gTPjQ2NwdeCrc8GdtuktonvB8hr4k7QDSJHacRbXST2",
  "key11": "3fTvzrVJ1TL8iTYmUwbDU6ogd8VNeTDdnpeRWLM364Xtdmjuk3sFrNpavwJavssaj7wqX3VnTw9U6e1UCbNpY1hs",
  "key12": "qNzaLzyELS5WbxqY2V8aexGNmfj5dmvEXsZCU5wfvy6v418tiYWMKUBZAWJgcmjeg4fG2m8PjZwNZDaSuD4KWX3",
  "key13": "2y3KWYmU2kFykCLHzX7wA8ELjMNC9vAsZNk2EWU9vJncWwEFTVJ7VuGCUNTyjyfiDHPooSVGYhmr8sfHJ95uYW9y",
  "key14": "4kYzXVVbnLyf5ErNfByFe7zzBXbpc92k7tzEEwDxGY56mKSMfCkozScYYvzCYoojypwWoYoiUyTnFCVFUa9VTvjr",
  "key15": "28pB1xnHxCc3igsedwadh57tM6JdRCQABj3eoudBsdd831v7su62R7AXsyRtq28aDzuEALM53dLZmdyGfAVCMWQK",
  "key16": "2vjFvVLP3qT3nkg3p3fiQjH4nVebvDD6kouwg3BBMoxXBbGJ5176una1wSxPSvhV9DQBaMdyrcLaFohVvFesxQLZ",
  "key17": "4rF1Lc7mqDZMkFWgfW21Sa8P4fCZZBeDpinGjKm5exVjpYi4Z5BBVa2u3ExexuhqibCsxDg8JriwShEz9RHeWcgy",
  "key18": "3wrxauqsyM5JQRYpkcyxBtst9rd5h1P1kgPS9AJGFSD8B4KBtiN6sPexKxJGjAh8Ey853mZGNCGrzcjAnbLNS1HE",
  "key19": "3TrTkeTcnheJvsdD7UEXjG49KUxKVG4kEyhZkBhxxzYoMSSBky1ARwZMxNLoYkaxh1oymKMQmW41v7RKQG8XHuZo",
  "key20": "4pR7ghfH1ds8zWsW5CdrA8iiZTYz1FdViV9dT5U7ATtu5pFwrDGWKpm3oP4VNNydktXdXsVWMeXUtEYD9wGS5urP",
  "key21": "2rxJ9SfCiETDhd7q4GxH8ncE9Vvb8AUW8cS53Ug5VfmDPC2mCU9sSnHNVuce6JJR9fTATqpKZSyY8fMUVGL3oy13",
  "key22": "2JREFTCNW2pgxWE2Reg1TSSEXwExsVG7B76vFvJ2f52i9Ss6HzpWM38KX82VBP23YFNxQRzP7B1hZPYxNwD8VHAU",
  "key23": "3bs1TazWQb8q6qYT8hGTANgSVoKJ9Lfy8nzM6MTYMobfHpQyJu6Cxek8QtyoqKrBSjZNUnLy6QAzo2HQNZtfB2G7",
  "key24": "hXKyfCzk9mCEC5FPLwuMc4wXZzUY35QkBdWnFJEW4PX7RhL7ZJRL7eFcBQcECJP3UNVQkwyns2YBSFMDcjUt1Aj",
  "key25": "5bLJfdcw96yHyEBPF66zZsySExN7WZEk7K1oZEJEjbVXpyV7heneybNvmaVBZVESudv5M4x6JTftz2LUd2pz1M9g",
  "key26": "4xEKtzJTpAa17vrNbkscVT7tskqqoZ1Au1BZHkcMxRvvkjq4LparvdvRQArioJ85yqez4r6w5hYfS3EEbBEb2LEb",
  "key27": "KnM8wTNbhygCgSeoJFahNmFju4LRLykVptTMW2wjwcPZpn9oREjifLgQk6PZvDzsTwqnQUq11fVDWTLx8Cwth4J",
  "key28": "37aiTTfQXhbzShRQ41RNhyXARQ3yfu6pZtt2aAJcpPxDH9kaYx3B1TiZWw6XLW5pcf6vDV7frwPprFsCqcuV9D2D",
  "key29": "2mPBhZLdQZt3PsJcRLJTiGKXGhbbGggSV4KEZEY6oHYiu9gefgL9ZShUSDiv5uCZrYGmer52CWya4ghti4Rhc3MA",
  "key30": "5amsHYMZcJj2VBjsoL7z6SzYcRTG2XCYTkXN3uKWSADUUKbre9R6ibcyYv5Sgz3fMQ1b46cR4kj6whvAFGBR4yWz",
  "key31": "31e7u6XSieihuvJzrZ7gAfHBmVfLsh9WHnuwU7yiAvzs7SUAo5WZ613TjNens343vpMZtmwdhjZTBoYcPR1VH9qa",
  "key32": "3E5iHZ8VnRzdXfp3L6Y8tTW35NCbYobS6DkBtzwXbBXhoXPdACgaGNtd8E2iDVFwFxoonNmuDxfjJf35itTd3uFa",
  "key33": "2i3z1iobPnAXKopyvTjptK4TtXk94mpDf6aih9nWcNSCW4uxBg8q5feoBR5iXU1ewnadQq3sfeZ1jFpEV4uxSkNW",
  "key34": "5zTGQARg8J4G7kSSpNM25xac1LBA3ohbLcxuCArKKNLDLDS1bBQ6m6mKKe1Mh6wYbb159Rb9FLPXWZgZJcxxVsS5",
  "key35": "5zY1zUAN5RZWznfftjN9vXg69nLufeh8uT87GcFTYHVL52e4Yabc143NDTJREmJ7ZsbeqY9FpTXMuzQWUbEjrWUW",
  "key36": "5TuRy6uLg1W2aDtHVCrctJWyaPvFYww318UrxYZjNZcD2heKvf2RZvr3vcvQ8KrPY8VB6dZE5U59vscQLYtc4DYv",
  "key37": "FXqVqZWAQhLvb15tfhN7CKGv4DYLvZBkQ7N9nLncKdQZB5iTruRZR7vD1713obZDeQ5zZUfafSKPPHEiYX1vF5e",
  "key38": "3hDPfgQ8w18MGTaBHEbi3aBYSLWXwqPEavM1yqUC6oUrgQBqLDJVBdELniYzU9p8m5bzsv2pkKVKEfqtxRMUdUYp",
  "key39": "4fFhVNPwxg6ryVE7Qg1VrTm9XZ8hq488KtBCRwhPyMG44v4iWyZj8W55ijKHdbDuzXELp2Z6EWtRHcybtZma8E3g",
  "key40": "2DBG6AipaGbgC9ebpjX2V4Eq6LmEutzweYcLAqSqCHCGdJRqHDYyygASDgv453NyybtQ1QQSWCEChjk24DXZF9jq",
  "key41": "5JiBSD3XzVggcfk9UaCi7AKwaJiDRbpagWJpQgyrMfkhB2suvCyCTU9NVC5YAkhfSaFbF7GbnewAgEc6i3rZ5kHC",
  "key42": "4N1tfFQJywTxqTS9i6VqoVd9ieAx8aQ2B5k6dYuhYkJBYWaRwRTvY4hvLFFcUyvSqud1qa4bdVN3E5R1GQVnpfaT",
  "key43": "2NWhSz2tKLT2HSNM34yyoCNqujK5utYBgvSeGABvBdMWPqRWGkmnCCJjKfktFApN1H9hGTXBcGWMsHhKKnbDYAx3",
  "key44": "4ZH2XNPRAWGErdyKQ9PXJZVT6WjcwFb3NVshVvQmLUv41EHQdpzYG73nJGQ7T6TVA4BkPbz4N5WUydmsM1A9oc54",
  "key45": "4Mo81n7myNgv8aNHB4gze4JkXVdU1xh4HcD2Nkm6SiDWKHay36aaXXkBZmU5Lfk3sp3vyx7Kqt8uLvsHRhojMbUQ",
  "key46": "3VJFK9DRZaGgxJUVtS55tZiTAQeaPvyFQ9nwSxzxDqTfMEXZxtScgvuwdAtPwDBanGE31egPTPzyogprZakA2JhD"
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
