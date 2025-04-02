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
    "5qrC4Hx3VAgCGF2qMaLkkY7xGHn6V3ZXX8TBJ3eJGDPWaSnL58U8qyecb2p4W3M7GgZQcxhvcBBAVeocKBB8nvW8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5i3AHhyYnUqMWfXFsCQRWPFWFrXjzis4GpRCVEupJz1UffJAJPPcLvtGzbXbYFDJP9VARDC6euXTAietjJS3h5N2",
  "key1": "sG1FyLAHPpRJvoYjcXyWhaUSA4zU1Hc7W46LgAkDYqdS6Pku4mvvVWtcFyyKgmQHinVrsfywex4zxwbiL6Bshwa",
  "key2": "fnXHRnXTQgPdhEfFfTjJMtCNWt2XZK2M5fzuxCko9iwFHvPVKV8ra1VMqXEYztmCUVXXav7xMXzM4NJPLo1Knye",
  "key3": "x2p3Xjdo1DBobEyuwowSU6dqie9BwfGotkFQimsedL9Cg3myBEWMbLXbm8j6aUsNKrEs7KJJMPSQsKBsyEMeP2k",
  "key4": "5YRzaMw5Q5BJ72xWSevUzYG2JxsgEuthgqJAbqxmaVfL5iC8Shfd9EFVzVwYtptcwqoF4KaTrynipJEGtJAhgm7o",
  "key5": "3bSuUEcbQB1auCPGKZXCAKsWEAHz1rQsEgKPkwVbFkMRmZAFNiuQQwViUnp4xT7tETDNMj9MkqDP2FqsuiDsvBMq",
  "key6": "2RwpYrMNmgWi9eYNHKtycTiHoRkq5Abd5SZNoBCFzzTC2Wze5itvBj1REWRGpx6pLmC9vuU6LBm8QyEvJrawMyPm",
  "key7": "Y8vyMB34eVQGWn8uhYhjjTV1JSqSVzBV6PfKg96xmoQwtXup1D7WzBc8pgRaQup6ZkRRckwmEEDf7rwCeRtorqv",
  "key8": "397SCmrPZ2kNgNuwMLZiP2DcFT21GycBzmk6KSGZnHGgyYNVELEZZ7ddm5idfwNRh666se4yYHDHxNmNBhZFHPWv",
  "key9": "4VoK98LkYhqNZD9BPEkizLwEbWBL7SduDaSv288tjgQLXvwy1fzSQPS6F3AgLgcN9FX5kzspQiLikWp25PEfAUn4",
  "key10": "5LZVLFWqx4J5Limwi4s3UQUAfsBV41EbfhvHa5qYCp8CYvXoYt2WAGnEstWQHdS6CRJcnGqA5eEXZ9NmVuFiWyxH",
  "key11": "5nwtqyd3PfrMbKM2GmiRDp5Ty5iRHbvTvDEWVVDksxTZFckWg5mMNNaoo7qHFLvysEYofW67qbCTiqxN9jfog4Va",
  "key12": "5Jh3m7KaqHuTRQ5djhs9gac4M1BcuwTa9gvq5axse7WbnzDeA2MchitPqXH6eJY5iUU67bwh9JsHD8a51PVCzQ3L",
  "key13": "zKNFEHRDXSqnWCrcdi4HGzmaThtMrPe45dR23tX8Br8MvFgJ3XT9F7kvWTGitFRFijjm9SF6BURCoScCqtZYYKS",
  "key14": "xtTZp1GBnA2d45Rofn66jDohzYKm1qFKAN5rvS1SNqVXeorY9uLxr9EFP8oiY6wreFuN13mnQ4iXQP4rRYhNhEN",
  "key15": "2o1YdZoX1GRE1fF5WbdPeq551Kp2kuapiED8sTjUrWVHU7b8xzbnp9cg1TYJeTrfCSJmkRyytT7TWDzXMZYMN6cu",
  "key16": "2BubM8W4sHcyCSEgtRHbV2BvkzDTYoNszjfJ2fpbrsHoesxdsni3kfrccbbHEKXLn24R6fTDJNDAMDfkEUFwsr8B",
  "key17": "4GcvTUNgXaUBofTk51fp7jXKjnGnDzGoAMrPHXfqTsPuab4wXDLh3oeY5yeWaqcQRBnZv9EmPML2zmRE5bRFGtwW",
  "key18": "33fgVYsbeaQUy9kPLUoQRFDk1FTBrhQRpjj6J8s9WzEwmbYm5nL5yyfUbm71gddbtSYFMKsc3wi1qXejbJ89zoi1",
  "key19": "rdVHhCd19HH3jbiGyBKbpC1tMYvkUghGZ9Bvo6aE4H9TbCknMaDhXiFb7sLE5f5inb2b4hG6ybLCRakjtto9BgZ",
  "key20": "5v2YyLbRmJCbmTAr6Df1fmx3cezBAnY8nrpwocXZje92s4r5YJ798oaiHXqZotC4kFcZYodyvhZX2QcEeJQFzMdu",
  "key21": "64x4V9KtRgMCiYs2jy5KbohUyLrQvLJKjo1MFB2XqBN6u1Kb2QFUKhsHb8aiS5GQ1YgyAkLksK6Lhp2Q4PpD19df",
  "key22": "3tUF5yiMPXjMPaLqaAtUtatUAB5Na2MRQpRKPpGfvYobRWoum8BnpVr9Thxa49Z134BgnYj6g4BsV5ezxVu2ySHW",
  "key23": "67n2rHyDCjSWFiPU3rKix9VSjFzcRoW5ZuHjT8zqgJfv3dac4aDHwXNzJwxGKjaPUohBi1x7ycMurGEGAiFSdmFk",
  "key24": "58jM1ummGtaWTB2Yxpi6NsHgY94GFZ5fBamSY8GWZ7CZHNLqed2zZBjfFytYwTG4FwN7iWdDxPD1aCVq2iXKBHRf",
  "key25": "5tQxRh4jNGT8GT9r7Pn7pPjKCorMnxADPz8uXVFe8dd9JnXG4wVeM55KC2Ps5TAVVTw7Q6WKcjBkEsYEpXa1k8Ak",
  "key26": "29T6T6TFi6RCAdDUjzfL5vhALCfdCoKfNwR6gnv2v7J5gmnzm5kYCFfsAMuZ93zG3HpXH6raouiGQ25bZwNhUr7o",
  "key27": "5ZnzRXEPG6HF63of7XkJdtBQ4Fsh43dtYGfLk84BL52z1Fqa21UpTJekYJzBec1yfNXEbZH98rVrfWcZZ9d3bVc1",
  "key28": "4HjzE4JSjaMFdyELhVNdmvfPx8RUbexuDc8rewNsx3CxwMCjdrR3aLFMkWkRGtBjEMRLSLGR4R2gkGkmiCKx5RWp",
  "key29": "kSX5qsbQSZ1VYDwBr67WsH8y5KG1YyYkUYxjnHwjmVZUWCDucPunjYbg7jNcemQvmGojRYsrx7P3rcis5XP7Yxm",
  "key30": "5xUL7bKRukDYHaMXiDzjUGrNj69zk5QPsF2ssJU1CSjuTMzNDDDoZHVH13XpCcq1yFKL39F71vwpQbMK6YVr1S2R",
  "key31": "qvye3wNzguqwnxVDuVRFZuKqfzTcrQVbnmNWrhVDakxmVCYBrApyMZgDyK25npdvfu8ZM1YzaFWn8zr2GUb5PFR"
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
