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
    "g5YrR8yiisguaXB8mZ5q9dXFGKq1pGWXgRZyoA217EdwvMxTXYgZdh37H5GqeYAjU65wz6PCsaHM7PLHnQ1ckuy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZJJmdd2WxEvWCFEZhoGns9uNJLgzFhMeDpQDvZmvafmr8bz3AW8qiw6VFsSgEiz467cPyWxJGW6Ghy4DcPF934n",
  "key1": "2KaNz5XoF7mNo8k75kHtAS69QAqyvHquxoRkmGQMiLit3JJ8Kebpq7FETpqBomT31bNu4YwPVq6jX2YmoRRuH1LH",
  "key2": "2zCWWMdGMrLtsB5rXAH8ws3QwXVfBQoC48j3XL3RurUvioGa6K4uNZaV6FGQ9eFSSbQu4LMDhaG3PGayvZRRytJg",
  "key3": "4jPCZkM618LcjJbtzRaGzmvjYTxQp41jSsvcga2xF2YFQkLQ5zJnXviWTsWgijQyE7HRSbYYfgWnZfoQPPegtkG3",
  "key4": "3Bv3xkkJZwggWDspZN2gQqZeicr6Q9iFK75rrNwpgpSeXyrGgfbPovbitonkpLpRx6G5y8P5Ziw5xqG3jMrRsEpJ",
  "key5": "2hZDpftsvBxsxMatqsXQnKtrqdTA6wGNEwCrqkHwymtGrxMrs68EeJx8pkcMAzFACr1pbgmARoeQyHepZ3YtwxGG",
  "key6": "4aMziAsQc2ydaHFZRzUu1p3RjYnrg5L9gnSfvn78D98WKb8LeuSvFV9pnhueAHmgqbt5Dd8KtwMJWHHafL8GzQns",
  "key7": "3JBxPueSGGEzLchQnipQXxe4MiAv6xp8iL9HsvvWu8cRmxZwDpeXkfoSeYXogkWzRw8RFwhEciW9okvfw7948bEy",
  "key8": "3b9LzWWt47b3Tcc7bZwXTjZxqRBx7WyUajJ2xjrHwUocm4LgrWCG9dE6ZaDKNSwfErcnk3HPDPAGxaiU6WPSDQab",
  "key9": "61XS2rTztFDJCkoJJCuG1MAeUfjEb7AjSVdGSE84Tm9xDchQeuqWT24HP4YNVVxgjsaQmv8b4rdgBD8Vb7ZTYumN",
  "key10": "33d2T4DqQnCxECBtbJnTZsmaJkdY9UPCr8StU6mpL4qVnrEJzS3fTkVZ4CVVDRguep9Xis8KyK4hfsyShzhfcEsa",
  "key11": "3ZSMFqFWRTp7Jcdr58XYPvTaZM3nzUdhXBDgsJzsJY5wKRHmbf8FdwJ69LmAQwcsD7R5C8CqgYWQAK28KxHWukPF",
  "key12": "2YNC8mW2xrus96kWiwg5D5NKybzpvsFhhgW1VcVK9kowRjurNFmmtsiqiiK3ocg4PcPWb43RCXWeG9cPPLiD2srm",
  "key13": "4637aR5KskoSr7SJCBmhAcpZk1pcz9VconQGsS57wNR7nfANfKLsVnUrrksXBcyK3YrVDoYhBeTGxVNBgYM5askW",
  "key14": "2RNVrqXv5QDQ9nGZ8QiqshfrZ3e7PHVYS3HTHm5F2dkGHtZVbdCM34LavuHYYkGVrZhHLABb6fHXZax8Rt9oPCpm",
  "key15": "5pEjmbuvwUBTB1UshqELHmxMYcCLMsBjDbNMVJKYnDbXLEGNZijuL9Juv8C8EGkmJpHcA1XHUAabKqusWN4ePHDS",
  "key16": "4JZVbkvsoDccSDtJj7Jq8dZy654JBcHpj1ftGYfGfiMxh2nXVGNHbqoNvWtmRM7QY2kuScDtcBkTqieehmCNkyxw",
  "key17": "43p9fAKWFsRoFkiT4r3cxB2cr7gHbeNTm6ghU5Hg59w77am1xqdGBEBDPBEziAYFrdsEa8rbfKYCsB5QpGbwsq3F",
  "key18": "2Vvga4xtaEBDTXz9pM1WwpuHUMgJMURbR8xyycx3bTELF14AWWztUrVPBgfhZNqMnbttb5hBLtrYVj8VA6PrgwJZ",
  "key19": "5vU4xydKQ9QTZa3vJUs8fPGeEUhSwuREubwLmNyzcrhJ8yzDRctUEyUcFyki2RVCRRiZFbFTo2uKnHFvRqJmAaDS",
  "key20": "5urgaQQzNJTbRqnejAb6thg1AZcDKXa8KoKYw6ofZhVdJDBmMkUXEyhcJEs2XcNnzWP78mKUQ3waeZkzDjA8Ud77",
  "key21": "NZjHvsAgooW9v1MriSqnaPoZxJt2KfQ7X46DkjXWir7G5pQEAqCF7MYzaBR7XZNNgxkjAykY1TwwuAUvnqvMm3b",
  "key22": "2wJkkkJ3TuUsvYymGWSKbHYVwXRLSbW3e2VcnQGGtNm7LZcUmJg3DD2Tu5rEiBquDP6H53DwdDKesFfAkPpHxhNo",
  "key23": "5dH2v8RjwqryCv9xttc2N5RtVdgFi8w2MT6YokruEf4Umd7DBjRi9NFsE7enzh6cfeL2bD2S72bctW4ohcwsKMn1",
  "key24": "3d9joXeGrf3HgisPCYmPiFxnzeDckXDsocu5PHhpHcVm6e8cz9HiWJBS9ES1vBxFfi5KnSb4nEdu6nLTCU5TPbPK",
  "key25": "2N5q1tpRshUdpwrPCdVFrZtfYEuiMapsLMVvnCPcqFdVVFXjP5f6NVxxcd3u2zrh2wyzDaKHwRHiDPCV917mWCAK",
  "key26": "41Fziutwzr75DrNQUmiGex63bxAQ5xoKhWKBbfMAvKs1dSgbdhSWknkCFK6VLsfatxwdb4DnWBhzwsQW9KGDU4dV",
  "key27": "5js1MCdJBL7iEHK5LgjAHKYSqUYt3ou3FQ5ZzQYGC84ymikWwND8tavrjaDZizfFKj7q5qVYoy3P8j3PNZ5d7kGp",
  "key28": "rTmEfUp2Cbyu4eVtwqQbZykLwd5HpBv5Kg1vw1dttNrssVsokraP6bo7LX4S4PQ7LGoTmcwMojXBhaBxVt9dNQf",
  "key29": "31gE57NXyRdiZzt1krWgh7pBuUfXAQAGWb3HVuzxainWuojsEAjFo5Kcxnf9hp76zHCbBkyEfuuuhrfFzFGeJHtN",
  "key30": "58Aqt29JwAU5ds8x2K6nGgJXjSHuVtAGhbN7Jtker67bSrvrKyRRHRgMBcipwSb6oxJpqBd33LAg8aHAQ54CCpRH",
  "key31": "2onQpMuAUo15huZyXFpbjJ5S4AD8oPrJphFN2s5KNztE16PdAeZ3FPeUkV9vfdBJyPSzFPnYRUiQ9DWcd1aEP2rU",
  "key32": "3vUDF3wFXajdQmmDjKJZ2ZY1rqJjJqgJFkepXb4GQG92YYLTAtxqygXpzY6M7hZxoXroNZvzuiELkfYFMQpdUhpL",
  "key33": "3p8W8WzihWpHjcaUi1g5kDrVotLNEtjp2ZGqBRg6tWMv5W7R9Yhv7YoMxE6uzyM6KaZ9uZek9dXLb9kKTj7NHuge",
  "key34": "5UCao83CCZrbzb5LLzgebaVbvxBf1gByEFZ39QfT4PicmSde8PvZ1W1FyCQjL4jJpwScoHNaEyVfeJJHcR8XN2D5",
  "key35": "oxaeM4x6JpwuTxSQ5auhAAneneeXLHFfEL7jLTDDriXae4GnYD3CzisACr3SSbXkWf2FhhDr3US1q94L2bV8KWX",
  "key36": "24qkypAMJHBuURNtqZ562DUkaDPYHuAkRGyoK3tKhbvcyhGDzU6JUJiCZtAvJGbCSzWVJcfct7smED2YGVHFFuxZ",
  "key37": "qpmdsMVocs6p7dqPYbFVtuvauJSoTh8yYn1tGzw6kVdm4doMT5X9hDsjeahzc2KnC2uh6ZvgDAPZyFYmkYUMkuR",
  "key38": "5Td99M2E6JsCsvdANDoFRLejCU8v9hTjKzXpwGnFWCShyXnB7seLoSBJ4Qx3Ha9cmzTodgbCyiJo8wcHQXUrQrDW",
  "key39": "4nXdK2cyy3BW3j7MVcMsy4dxoTwT7Z9xbgyoGVaq4kYPrQb3ZzKszS1gxf7pfhBnp8schgD8m4xZZQg2inrcTwEa",
  "key40": "4XdP1X45pAvHRUMT5YdXr24m3vNn873yujZ5iJoA9tYXrCUDkEwMCbKixB1H2MSGE2qoUDL2X2eJhoc5UZ53pjxi",
  "key41": "3VmAZjuFoeHHr1K6WtgLx1SkSvtzwv5313JMpEpkrR7h8xjX4oWb2XCUoC7CPzQM9J2kHQtyLuqtb2zAhLxvgwVq"
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
