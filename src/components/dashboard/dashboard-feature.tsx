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
    "2dCM6mXHgE4bTXNfobTjEkpyjpv5zSExzMiR5bWoV1XFicFbgPrtEiwJWMntrYxPEkjB2x2zSD4F47nrggjdeKLM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4H6CwvW1LhXgr8wmCQofQdiFa4TBvrTmzKqcx2SgkHsZ7GHSiGAubrwigVPPdLpgYbNsb3VjQzZxkqKJwhVn5UJs",
  "key1": "2HdU2ai1z16zaLNaFk7ffCz7C4pMzmA3eHBAs2iorac3bWPyZ9otivtNTzAqpLaGAbkucnD3da8GNQ7qiM6H2bLn",
  "key2": "5S7BevjyCY9AYyF2HQUkXAPS1ai73dT2Ta17BSrFBH1ZAM4omaP14USreaWkYp3jHsmBMzJPkPMjYzd5p1xeSTCu",
  "key3": "61RcgYj9tCScx68v3boYt8PNnVu8KKRThZ5EfhhPpz7Bk8H3fLo5SN8feerFGcLMGGzV3vHVzk4kDcbZyPubkGhx",
  "key4": "54VxAY8FednP1vvY5oF1sWYVsTD7qSYsGCNskDPCLwKJLwDYGJZPXuf9RGcs3mFeBeu66jHKP1Pxqj2BuT19NEZX",
  "key5": "3npZ7wJ3z1bEZobfZyGA2iHnDmbEm335bnBYX1udigCh1FZAtFHuYx8gPxsdjw84J5iwBdUQtep5gg3jCt7PGxin",
  "key6": "3y3F4cTRzxJ7tYTrdrDaUrebze3cqyN4sC3HQsE2XB9qSXNydt7gGBSFz95i2NEGGswLzbtVyD8E1AiQSbidoaLm",
  "key7": "2Darau5zPVvet27t7LipYyDeLzoq3N6wBrC21AtoYsMCPkYdvjkcNCVLfPJvwLwYRieBEbur25PzifjH1yELoNKn",
  "key8": "2VEfwb6uExvqvhZYdxSpRGAFL7f1HCZHgfFYQbqR9uN8cdFb5GUCG7XTs33iT2pz5XAicueDD3HqG4MTfWAj1Ew5",
  "key9": "27BCf593oG9YoHH93kEoeEF95yyBQAtTNaQjLSJ7vfW2avtBB4cF3aNCQtHNqoZpsRUGJFUXR4vCNpoNa7ovHfES",
  "key10": "pK8DfveumEBvVP8qUBwpCjjgeUgW7bZR7HAP6KevpkxePs2LARThzmnmtQM71yTTboYNtBDqYKXu4nqJPpkyNGe",
  "key11": "4GzgWeUMgmJLzsFBcWcVGadEccFepGjxFPfd72ZqmSQCHLDEHUFGYooGSA7m1hnzxKE9adJ7is73BnXonG6w2jJD",
  "key12": "5diwQqzLrPWhVQQBE8WNR9LdNGs1iyeLY4ZxjWo9KJBFV3xsm9aUz3FeRrUAw5m4WLXFRiXH1XNiXYRVwD2WZXgF",
  "key13": "4AVwShJYVvVNt6LXhXbB8qbgqaorHAuvyxuPXEDKZv9ENggFLCaveiakEPtWBV2M5kjiH5bGNREDDdBzbwxtR6QU",
  "key14": "ZfwNC1dKmvLeL377JwQTCZdUoaQ1oiP3q8ocmuVg3BEUFrZjJRYtbRReesFUFaKisyFmEF7uKtoyndJgMzYZUVK",
  "key15": "5JhU4o43xaaA8EmN2GQYvgyb4dPAFgBMKDoX6JSgVhGKPZCF8vPFkcFgy6YS4cPSF8jYbgKVZQeLmwbTU3Rv3KuA",
  "key16": "kQNaXMyZyP2FZgSkPCgRQou586XM84YVbeaSF1yZK8omZ7NRP5huiqQMsKztiFe64KuZNdewEogFgDJx9Lot8zY",
  "key17": "2NDjfPmouyALP1oaStTUBorbjEQPQZvytd8J6ci1U7jmdikhpZAm6dvYmJKmFkeY5yrm7b6iwh1rwZdNZoKbngxU",
  "key18": "3ksgU3fkAvGCQPmrSitRDsmTeNWkpEkHATCFAXUF9WFnmUNKxJovyaLr5yTD4PcC8JGfPHBrqf8pXE2nZeaj2Th9",
  "key19": "3U5UyDZekCj9uHxGpVTqHmWGu8yCV2dmDw8xv7zrsRBFcZSLbDH9VXFDnXcxxMsAi5jA5sBUQdLKuTGLijGrGNEX",
  "key20": "2bgmAsVS2DxegKdAFwoaSKyJwW6gK1Hmb3WXYzxfooLFdJw8cjQYBZWp3w8Nf7KbgDmMAb3eAmSBTQbvJJqRdF7a",
  "key21": "2y2wQ7gfCjY1k6mzXxextv3ET3Y4RcDMwBQPPaYrtH5sBkxJeBDg1sh6Ssysyz5EuArFg9c34poWohhw2P3hbPuy",
  "key22": "5Q3kt8nPRDw6yaWfudmBTD9Yhd3DQkvKNsZRZnBNE2misQdpyR5RzkeDBowCRSA1urcSQ1F2eh1GczcTrDJzWfJa",
  "key23": "3fPFaSmAvEaZ6s2FLPacJsmS1GcJqd1SZeSuvQ13ir5sqMY2WgLuKctgopQr36gBkgKLNQ1eptrsCAkmDpVEBQ88",
  "key24": "2B3XWCDC3cRFtNTMp1tQHJ3zEwvJJoyopSTcRzauawt7ejjct1q9FvmefT44TETqYN7bVtZPmWuBZbgUwnGUDfBW",
  "key25": "eMmhLDaw5Qj4cH11ZLzhX9KVTLfY8SHRYh3zbeHX9WddQG6VoeyoHNbPFqBFx94UjMfWdwjnYJgXxY6jsLinKii",
  "key26": "4nZkqom9ncGhgG63wCCtCHs93tn1qMmXEk83RZDbcQwXiWEuV4CQ8qRP5TTRkktQrfDewCRy8Wa6vtHZSmAgjCeT",
  "key27": "5oiAiVxvhnCV5HTEAJsagZ49Ex1oqoKWpdcxKMGsJGqdmV1qVcQudz2eWiwpby8XgkHw7pgnXKVaHTWLKbrc72md",
  "key28": "qrLYQf8ymTfgnyJzMDMomgwzNGxfA64WUYFunDm768xEYE9CxmNbB8DsXpJjEuxjCRmoWq5BSTPiKet7m4Aos5H",
  "key29": "2FsJwJjBuwXe1XeuMitcC9mVNh14fFRGdFqGkjjk1mzaiwxHSaAdfhTqbkg7hAmWd925Y9RTVaKDon3nYGn1wYYx",
  "key30": "3bZsUJB1rie93L3gV4aQJS1cBLHtGvC3XiTNqR5tQhP8SrSb1n5YEQypMMNfD5GmUs4zsJsAKL2yf3HaBDWYoCwn",
  "key31": "3CxdvtNfH8TLNYWxcHJTotQVMoEcuTt7287csZt49CEkeecey8AWmD3nKthCcNFzeaHwdwaaXyr7jxs162fGfp1t",
  "key32": "5rTAEzqdgJW3P1imCPCbLDNUGFPasGHaX31tffaqE1cNyz531HhYF85vHRtunzyAccwPefKtTftUr46sLBkRjqYj",
  "key33": "37LQjD3kRfvHp5qeT9MzQV1nuvsD5dZEpZv9L4Gdo3E8trgaerHfwgb79Q5wJgcEZUdfoDLM1LNsEZqBjxmST4sR",
  "key34": "DnZgXvCGuG3NnB5zpW8G3b9E847DsFQ32oX4ft2kWK9qLUeZNGQPcZExo4Ty6wgnNwfRL2JmUW3NPcpd7LmpDoM",
  "key35": "245AMNkubQgq9c37tm72W7dRFdDmeaEyBkRFX1kfHnzQErAK4vo847KNBBd5JyBDqTvH2jxZPxHi6zQYLr1hKcCN",
  "key36": "4zrfun5cLiJgjDNXquiztJnjyADaL5iV2x9rdYo5fvSSu9Cy22fRUmxEBzTMusM2WjRPNjrGz8MV8pRQgkuJLMBP",
  "key37": "2J6y7smGB9bze1wPTTh9fbChjwH9tEEcFW5SG6UyqTCX6m1kcJQSh1eMEpByfryrWLXNcV7NpwSEWx28MzWzsE8v",
  "key38": "2dRkcuyK1ykL8M3eXdTYgpjvgPxdRgTH6Reaiv8g2WcmJStBf61CDcoAdeDggF12cd3BKcgN1HL5iFKZwvuVEBYR",
  "key39": "2SMhQgZYDxfJUZDDVp7Rm7Rw4xvkiQmjyR9qfWgKEFxgHBNwK2x7ViZmwin62Grph1rwRKRVE3hUyTsZ7kKnuS2x",
  "key40": "2vvotAvBkbuvn6Ch6c1u5waiaLsNdbyRc8k18cxWA9GJYDEk3PR6AdZfXyGJyXTbQV2eVUPRWb2TzCtq5vdAMo9c",
  "key41": "543hwKS2zkV9zwgAM2g7SyG8XDrW792cPYFEXeZ1w6vR945qFmq4Mmd74m57jT13RVSfpeH3BdsU1z3HvJg4Kfuz",
  "key42": "A8eELP18o1U27KhKAvq7F36dgMJGCyPs2xqEEY1zP8gY2AXBxxnU32vtatLXey4e6NxF6g8ygAPFnzgNgHkjah3",
  "key43": "3ZrVyTB18mNyMRgyYyMs8x6oiYbc3pmdzdcjQRaJTdKNa7gGCiWtjehE55tnzvJXgQk1aNgqD8uro2xvcFH14Xfa"
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
