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
    "4GfnBtuxcxMwJoXSNCTGoz4koCm6rAuhyqpwW32cF3rpWmsE5iuU53Fcei96EUknDv9oBDvs2qz3vLm6zVB77YUg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zqgXizdNaWh35weJNtVTzBAT6mp4BWLNrJW77F7gYktWXgpc3zERpBWGVkHchDaNg1qaLHkeyFmxTLDbrjfzkct",
  "key1": "21JGmQ9Rg1A7DuWPWXpDsgAmX7r25iu8inYfGyoukvxoJhBN4Scaq6Yoi5jX6ZreWDf9J2TZXj2vFqAijwZrTZbZ",
  "key2": "5Jk8zb5C1w3BKd3VCxj361fTa1hsup8AVizkHjrUgg7unjGgWTvcwrGBKNocgCvyJqHTqCP9tFdHtAo7y22zNLbz",
  "key3": "2Za7MDgn5pDqPr3FsZWcvHN1StGaD9KgYJV5ssCyPQozW6oEi6heng3FEhUMFnquWGqH4ct61hX2xULuSrJopfkc",
  "key4": "25AW7h4QNCb8HCbYwPhNiDUwxwQ9z4E8VjePiuwSV4msgBsH3rUF7n5qYmuwGEa5FJtVks3s4cfRJ5U4z13A2z9V",
  "key5": "32aKWVR4XTdYoq9JjbHr7ffieDrMXkfdc33d8Lz8xuCyUUPPUu53XUpmXBCgttteg5QRxwRKB8hDHhj2ojw1W4q",
  "key6": "B4rjK57F2Ea8rLvKQrz4PpeoyNpKHmi1NvJseGNeJqteK7s2pTzH2PM8Qf9SsmRc7VmMFBbdbgosQLV9fTkrg4U",
  "key7": "235GyQPNeKRMJsh3RH6QLsVv6c9FJjMBDvq87V1U24qjQx78mrA83EiryoZ6osbeTJ91prqqzrfftHxrKosVMAM6",
  "key8": "3uMfZYesPWd4L3VTM5fEvGHt3vuwypQ2yutKTNHUFpN9bFD4kPxXsgHsy6BjhVe5DoY3bgXdHGH1ToKetnLL4cpy",
  "key9": "2DPRqUwRYDGMv1JXkQfTsHy6KGpDHtQbZ9VDQRfo1RTJmLz5Jz4DqmGFSuRM77WRPCD9kcVHyto2jMAvfYn1xY8t",
  "key10": "4Vns1WySyHbAU1MTPSPisraV2KaUx6AqCUU4jFsx5ofEmAhjxXiD8jgicNQRGuoWXVSEYzd4Hx1Pz1M52WGdZY5U",
  "key11": "4YNFHSnhAknorqjJuh8PsUfQwxTCy7U5nto7zogwwiVEPjWV9jndHH3p1QfGcMA9r9e3yns6XASXgCk5zpkxn1Ev",
  "key12": "2KfKuRtrigdseeuJGC6cYbmUCrz9te8PJtmnmgP376aLYg8dgwAczTHzkQVSpMtC6ScviQdWfaajxnZuob6mhi7c",
  "key13": "CBCMN8HoTPRmCmjZtnud2Q9AzPiZsQvbr49YWoESqzYKzGL6Y1i24LkGb9aT7cWYtx1JYaTMU6ThTTV7seYj7wX",
  "key14": "583YydjpniC45RS9RG9UrSa5NvnFpKgkTv369TkbSAScTnhSBnooRxLb4J8AKPxgX93ugePDNy7eRo1H4GkzrX4R",
  "key15": "3SsoJ9xH6rw5qHP3F4SW1EH3h3Kh64EAJuVfkvuMMGPCP7samM1dU1mUsXCwVVKMjf5owhFSeKGDFcvoRr5evxHP",
  "key16": "Ld4YDAgDYZGN37HpTFfR4SGwWTVNdUGWw6ZiVEg7ZLCf35nYQ9BeNKLe3N5Wkze9SsTxFca48GVNnczSxiFEza3",
  "key17": "5sFVrtY5KRRTRqDCux3jY5MbF8zPCjewnyuHGSzdU69LBCPwPoCefGFGEcRCUoknhu2zaB4paRWAjPbyz97V1bNZ",
  "key18": "1TZLaS6fHHGzkJN88M23WPwhocR4f3QVtZavFGc2h2nmzHa6PYGvJeEgrCko3VvpjWg4nRBJTthJn9qMVCUtqTm",
  "key19": "3DSnZFeZBYHpHhVDMVi9FtBScpBFXbiawvJZaAyjmsbt9hJbNq8pzyERyKx3F2dgHEtbyXaeK1ys4mKWaP9FPohG",
  "key20": "3L5aNp6LdjcfgZEwdk6qYU8xWjk63bWws8mD4dvpg9WgZJn6fXBB9QMkeW3Jth9tKDYt9eEW5B64gmz3787pTFxW",
  "key21": "3nCnhfe76wqo7wzyETNBrmfZg4qKWQ42DWSBRFPYEow8ZRoXxE6H2jsD8dvt8dPK9zT7LzEVWY83MkvrMKtCU5DV",
  "key22": "o6RAoUz3r5pJBJpSRXe5quGFyxZrguKXn4ckZVm1wR1LzVKW8qd1K9fqHfQ9cL4ADvnzfHxitFcmfKsxjCciRW9",
  "key23": "3cqEGtrdEUrmmvwf2L5b5QZWZo1oqJ2BTiqY2DRzfYGNsD7Uqmj5PtLXHyZCxqd2QMTKweWpzJYRtiCw2p1LhFs5",
  "key24": "2MgJ8HLVkuUb8rx4XhfnJDhzPWFy4r8pNNVgZSwkBxpfksJGzaS3JTD7hEBgtZDoACxPGYJniRSbGu67EyksYev1",
  "key25": "2d98C6eSnK3KGK4cQ2KQbwhU2kmVPTzLA9zLdht4JowQn7ZiuyNKEVf8cxg2iff5G82gUN1zDbAGWrd8VQehSooi",
  "key26": "2GPY6shoZcYfsVfCL22VfFfsLGWZxRV2EFZJkAVfE226L9vGxJsdcvjjKRGoWsy2upgzcwe64My5H9L6EPaSnX1H",
  "key27": "5AS1tpGg4weKwbf1a2S2zzhbfLMUm5GtMboxXwbqfENxzyqPY37F28E8Ems954VPbLuuGFa1ptTawP3AcCiv6fuF",
  "key28": "3BzurZ4PNrnWFL73SGgLS42cFM5kcEV2ZZkNnK9N7ih8jEs4hKNG4nhjfG3T9fGZBdhM6Bgss4Q6FZWDaNUC39CT",
  "key29": "4Xj2GieabNT55qN2Yxhd6U6eWPS5ahMGohtQ3SXRR9PB4AuCjKp3L9WmdggxKYhyWNuPy7rVqh1NuDBaXYgMnXYa",
  "key30": "3nzX37YDYvh523tpjTFPRkVTsuimAqAMg73bgBgCdKLTkTdzThNfh3P6Ppy8B3HrF5WVyyHbWe9h8gC2sQ2sqkzW",
  "key31": "3YsuwwGJTdbANgwMVsCT8pD4iJCPjfSCwp4Z7A2wFCkq2NMFvvFfinKT3e5MJGipvaeEXekxnw4Z1rLmYmn4i6Ab",
  "key32": "63Z7szMMWv2ZCdCsRvLUcCUS8xuG4oFaVNNAemjTYayXfsuMydECFZF61x2MyinX91PSr3Jvs6oPQ1SYzvKekF9p",
  "key33": "2nQ1zy4u4ohguUzZ11wHgEJMoHpkZNKm1p8ZSRsFutkvKLtiS6BTyihAobqViEwJreHhpsY1NWbMLBh6gMv2H7Am",
  "key34": "4mfCiL1Cuvf2Ze2VCHZBZSNs7MuLt3NDEq4R2GF6wtZBYps7vAPeDqdRryUsv43qHNkqvKU45qDtkzkW4QpKqHH3",
  "key35": "23WCNHc5vRUWXtTtGQrLuqCUjyfQegXX7iRpL2Jy23p4nBEANDCq1WZW31NxwkXcHFTYAQVUgn9P4MTNMr2b24u8",
  "key36": "5k7Wccp8K2eDoa75kRgDSFVwHhkce3iYyiuPJyTxafg3Pk5wg3bwENRYQEDABdhbDhW9KpezNeuEedHXiJvpz5Bo",
  "key37": "2QkUrz5LpT3pemz9rcAKGgzBcBzLVi34QCRAuDgH3C13mJED41FrpGrQxWXeuDpq5qjHQd3KpKMruEUiTpjQa2Xb",
  "key38": "4QiUBgXZ3ZGTqBhjQVipKBVcHBJa4voH4mcv59HhJG49Z9ozBN4TUTJbwxx29NQkJUNUjmnwNhDbQsu5SYX7Yqg2",
  "key39": "4bhgq1hPdufC6CaJWMw8Pc9Hb1DNavS1Lk34H8YUgm93nxppZxnsnRNPDcJuVayxLzVrJbUnaDvP2a9B3SPPcJ83",
  "key40": "29GPCXHRqBYcD6scEFBPm3ACJDwaN8rNqokhnVrwtgQCnH4XSQejyQUefNwJNQ6tz5vVbpVJ2vgEKdkwcmrCW1YX",
  "key41": "39udM1Meya9EqiZiVq2xGzs1f1hpWrssxqiYUuWg9RLHPY2RaBAxoDJ3fgQ5sZNwvSwZVQYp665b5NcJmiQpAo3k",
  "key42": "hpsdT7JdmaKGPp1caLzirQLsyeshzBn1Pc6g2MWEZFcday6PMmooaEboCi3uo87oni84NKteeK1kv33YqGfoKNk"
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
