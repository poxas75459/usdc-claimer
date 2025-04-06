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
    "3zed51ksJ892a5Asz9j7NXYTyxKBSAAEVrrRmeUXKfAawqFTzQ2AocTq3kEd7Jb2FvAhjVpJakBekEqebTUA8DHz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56Lqsr1ZtdkUbEE5wVKb2LnFLaxoVZg7WUSUv2hte7zj8R1TsP1bxd9gRsd5hTFGxppZDiQPSo595aTBD6xA7rGW",
  "key1": "472evdhoLqTAuBx9XcHFec5yjseyWrAfKXP5N5WqsDpNiyGfqTrcHhC8mT51RnfZM4zM3u7Y8F2vcowRvT6hkYyv",
  "key2": "2mgkdZ6zpqpFMxJxq5fyPFLULMfjKNKXwvbSLgR42oqmetkwdytyDHh1PoRSwJHCohYvpenCi53Q5sbeNvhJe7bZ",
  "key3": "5BbsHnds7u8as88zY6jwbVjrKoX1dpTjS6SzwvripWXsVyaLSxD1YforW9o6jM4dr8V3G9pTxDnitGvEXAaj1KuT",
  "key4": "4MHav3KKPVVZzPgEHR1tPTPC9KNpQDy98gJuYyaohCGiMGE55SjxPmRqjW1hiZFmx9zXp2RKdu5FsQxLWWcu14iv",
  "key5": "41QZKwPD2qoJ2Gns5HddonuRjfMgCk1RRY9PrMbZ6y2VTFkSyFHPeZrtCzyuekmNc3SW9hqqn6yshdZUCMvZBUih",
  "key6": "4jUxFXh9yVN9cocFjAQJFMmX6yZiHdizpe4CRNLrSYsPX62pMxY4Ck7kmRtsuh9b7Xq1ZvsHTCeAdbdzDm5XuiFU",
  "key7": "4BK1wpqBTiTah6oJG94wtaPZQ3L4PcoLFH77Bq9gNphgortifn27mCPwntBnaufKbTgMM7RLf2SjFVd1nADaEf4K",
  "key8": "4A8DNeVU8PjhE4wpm2mA7Tao7WHtV9pqz1CutMpW3M795pzWfF5LsU9WfxuEKz3Yt789Sxbwfdg5REPiXN8JzLKz",
  "key9": "5p5QngEqtLpvYSMxGCHbyqCHHUKixFX35K3WKuwD36k6Dbp2cVHxMfRyhuapTxaPZaxbHs6SanPuMAjVF9RVqNNZ",
  "key10": "zQVjqyXTD3Aub3cbZguNcNAPhbKehPnSkLZytiqmx1K6oe3fM1mqVaPVpZQ9BzjYsHZBNtYHWa3srJpCW9a7NVB",
  "key11": "3hbF2HDFUoQ42Q3WR5DaeMg955yZGZyd3xTzFPrza7YWZnBWewQuqUug89qzoc2XstmMPEH8PaYG7Q15PiRvAVjC",
  "key12": "o6jif1rntd2Aq8DhNruvvpjhPaX2SviAtMqBqDdPWaqgWq9WCMrrq28AkjfjuWmxXju2EUNuEZFxNihALavWYPb",
  "key13": "5TEB8nhfWPLf4TiHXXGGRbdWoujxPsp2m4TTj375XJNVexUGdkb62Gq3smXVAMpjbXsCbKpgce9e6jyz8Z9GuLeU",
  "key14": "ppjwGAqXS4sFk9Tm9RMUfuzwarJSUkfT8xiCkHJ14EuLiFLW4ZBw5WF4P4tEB68YGrFkdrwomoPNbjJf7Sub1bx",
  "key15": "5J3B9hXabXnSg1Wq12kvQozebofDVcgDWqKb4h2r5qbmdskPiusc2nGrhvrA7c5ZEXqNSQxfitcoh7jkCJiszfwJ",
  "key16": "4tzghYwfiftnT8qDRSKrWd3NHPu4z8KNBNLpc1GiDFqwyva8QpxCss2WcW7jFf5GX8W58fnKQt1VCfxETAAx99s8",
  "key17": "5DGaoq9Taom1qVEsckH6rT14kt3jPpuhusXZoSEHWt7SD8UrsrpozCXHAKU9drfVdT4fXeMveyCbJHXJajhN2XYF",
  "key18": "56eKuYtF2gnvBzrQq7Ah1nNd4tefTN15WpEw8r6AYZmobuiFrrM4dYsKJmRbRtgWpYt2hzc5jUs7rghf98TEn6bX",
  "key19": "2Y3fK79rZvY5TDW5At4CM6pYLGyRegYmRrb3cfWcGbjipUpjcuvJsJuQiWV7qYvuQ1VjaeynSxGTipHo8Lpq88dJ",
  "key20": "3WtQYPPREY2R1v3yraM1CWHP94rvDxppKxYFNroS6QMSp4nuXit1B5uaTTGQcJ136YqPS3Rew8itqfRd167gBYLn",
  "key21": "3cQL9bETugRTBbo9z2sM9udvzfQ8SM73Y8MUVjEPMn689zZXExW4xZWaWzm8n9doQ25ZMPjajhe2ga4yeSHqoRHy",
  "key22": "53GUHyECvQX27QdiTwZLSuQXCpT6UomphKvkzSyMKyvkcmyu593nM8skqQRTHMHZ9yspGEMMi6L53PfP6qxA8wiR",
  "key23": "FSshRq3WXyQRxebWJcE1hju8tvUCgnXbvhpWnA4btUtHExVg2kq73Zxr8tJmPDy64UdWEnMgTgnUJWWVSLtWfnh",
  "key24": "2kdRnC4CgsyBkzjnRSZNXtDWfYw8AeHCB4jEDavp5EPxBzaAiY6V6dRakukAmAnG51yQHTjyRbYLFHz8Fw6D3J43",
  "key25": "jwg9q28UV29VpFkRnXNmK37JvdydJv5vCy2kw1gRXFvn1L4KLPf5AL4h3FhejZ9rZADzCbZiUcidAjS3rH6rJ7g",
  "key26": "3brGZi3uTkTGGwscm75jDfJfXLDzrfNEPrw1nhKMnEtA6n9bARPDwcGnUovpFhjuRBTAqzMmxGhegKBKdm2HS99o",
  "key27": "4xL6W91EkQ5Kh2cqRzcyywe72jF9QvfDmXFPfbAESf2fHUDmvKJuySSyBx8Dv8NNhMw2K3zteebFfaW1pTa9ma9a",
  "key28": "5WaeS1BCLrCuc2TSMGUDCZxsHSZfJCHRCjPUqy14wDfak8d8ncQEBQUXYfoZGTan4Mgzk6NE9SwKEEj2xxWQeUxZ",
  "key29": "2zfgyN6LTqYAASnW15LRp41uMpbCY5eZdgHwGynJF67U4Bon5Zg4WUEHCxDp4PSazsXCNL8mzWrrrrSAGuJU9WAK",
  "key30": "22aCmPmazRCwqzQqtHgaLdMzuekwW39cKLDC2SqRi3NrDCWFChkNN9TWjGcJDUYgUYzJCnySV4MaqTbaeRYZyenh",
  "key31": "56WSigMQBZ4Rrz4EHyHaJXX67KZdujN7bA2ookimWbTL9MfMGFkaTgCatmTjo3LdntdR32B6qwpXyx121U2FYkXD",
  "key32": "4C3qTxv7LTqLscsxTC9uHvuSM2GJ2tZTfmvB5RvYFsHqdjoRUyjXwXc6qJ4jPz73YWtqXUq8qYGJp3trYrjyvACE",
  "key33": "2idhKwZwCJY2NizwXwwD7PaJBhjUxxaskmFePGJn5DV4vGuvnAq2pHYZuAA3TDTUJNzZ3d69N6UitLdH54qrN5L",
  "key34": "3o1DNQLjMkjCDymqxiruATspBNsbNyP31t8oxHimrvyze5dw7dmWCxvuruQeQkXrPVmowKPFX8A6z7CK3AuhNYeQ"
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
