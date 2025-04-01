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
    "S6LtxmYMGWPXpzT8YLveBQArNwLeVmQfaahLMn3nayyGghUZ16xxBi485edC3jELXwb6wSc9HP2GHSSbDSFKxs3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62MSuYFandLBf9acKq4xSYu818NN6Fs21Ge3KwRX5yaw48rNk7zDhMHoGGMit3RgWncN9KiWAkypwdETNjoUT745",
  "key1": "2Vg2dTW3fNEnMSWpSpgA2qVjZKT7hdhtJuAcsA6kn91bCy4vjKpcfniew7Kh7bVXB2r3FTAHukG2aBGrcUGetn89",
  "key2": "4f4JL9fzZFDvBg2kNdhkMnFMtNDHVcZBjvB7CPJBbC1kLvsDeGmVGyuxstWiXasorzVwH3F4Y4o7mUmnyQoCudtW",
  "key3": "3XfyDdp4zh25QV7N7scskt22sijeqSwzyjea16uu7hvDnGgcxsdTLyRFDJPWY6GFNe8iuMUyohyjDiZ2DtGqJmsm",
  "key4": "4zkVJhy8fuK5e3LUTg8wM4ZP1HciyZLfjvB3WUASds7uzSWdG2Po97TZm7bq6nRXpG7fsPaUuWsajT6MGR9ujkZt",
  "key5": "5oVVodRgi4LRmXe44MciohPm1np7kNsRFYThFoXpKmApPFsvy9wstjXZhLuaGPwuStQyZ5imHZYE8t56rzdvimYu",
  "key6": "2wDsQFdtmDS3qf2AcNxPpazE1E1NeQLBbdSq8ofzpfr6F8d3eLyyucYBJNVA7UixV7XHntjgfzYCwMAae8kgSaY2",
  "key7": "4q6kYhCPf4oCWHr22dy6TfXFSM5qSYibqxvAnZbgs49XGLYSGH7m7NMao7HMGRUdmwUzscL5k7osp3JFWFcoJx1L",
  "key8": "7XwUodSZ29RNaFJc4BtUkGFFqti32Xa1YYTu9xKx2Jzp8tCz7ZTfrunKDy4QQyYJd85CrXgzzdJURpALDCYWSNz",
  "key9": "31AAtCmNFtNcdoRcpEmDhgdVC9HJR1uyQVtZ6ddHKY8dWZRHokxDzmtUYTYFatSPanMakie3wqL2wHU4d6ZrPCrR",
  "key10": "UwELvfojJ4fXdCENE3v59jF5urCUo3maNcqBVbZAbJskAYDRrLJik3sCe2xFtKNdDhnvD2f2iHbcuYoJhpbW3mq",
  "key11": "3UUKRWw9rQA27WtAum73uUuvMYYRpJk2u4RNcTwEHdpNmrdsDo2CwTudcAjDRqTZfjNATh3byBzfhqUuuFYwdLNZ",
  "key12": "2HGiPog7HmaHgvVH1SrAYSTu867gzHiocSve55Msdq2ufcTASmKCVtp63vr9r9CcS1v8h6Xe5e5CxvJL5B4yPYcX",
  "key13": "35ysVJUM2RuudS7dTE5KGC5HfSk3uFf6SRRPXuwuR5BNkWpMJWPM4L6hbHpveZ2wpECjxhi6XUQj9QyTuzWGvtHX",
  "key14": "5m2uX6P79wBJ9uRhEw6SyjEmgCT4jEr4JgkHmBEySCDf2Zhe4Hgs449u3Ppyr9mjmD1VVd3qQd5Yq2MmcFfihHMr",
  "key15": "5WSYyVsEaEGzYRcaQ1TADJB3M3hsTbZ4L3gffsniSk7L9bndNnqL9tByxPPky5Q5w79A9RVSXLtDgBHmd6zJujNQ",
  "key16": "49Xm5JyVi6xgWqs47zhfrMXA1YhsPKZpufyS48B1w8nwFcvLHEdS8dqBVHHzDbBgQnmmSSnNuQKdwv7ixzEQFn1M",
  "key17": "2tRBkgK1CGMxpVqfDab5ckUR3cqaGm533eBmf5v3K9vi9g14Lshm4wXurQ1p7GvvcQnHsw1orfzgW8QQwEDNPM6c",
  "key18": "4zBGvEa87JwtUbjTrqjv5dFVgm68jsvKC6SDDHgvT4crocyUFpKACv5mxdL7jQApbXmrcwxucn3NrVonKAeRaQ1B",
  "key19": "4iSNUyk1ja29N7yDB1JnzZmrFogUwhSGzmDLGGm8ZVXV1p71aRfStwqFMzNXZrrvce5s3w7hrYqiXLcUUYhwGsGF",
  "key20": "3HRjjwGmxZKxuEu1DnLw3BeTYQMZ36ZbE5MMrYqNVtuXQHZqGct5cLrSQ3LMYq48wg3Gy37fN2MkQ6Sw9NPtLqaD",
  "key21": "5VyJgHh1mQ7Vy7BmpKWiXNCbAY4qqPwidgcqSbNfDb3UxjPaRgD4YqyM8E8hgb2z4XTRbxC5cLLJ3ctdScv1T5Yn",
  "key22": "3Xu8ye87gGeUPHBNbz3tSa3W6MQ5BP7CT8q2HvoXwUC7xhv3DWYzq7FnY77D8Cqdk3opLq5RHKEk2eZkuayFKTsF",
  "key23": "4FKjJo53a9eEGSabN4nwsTgbcerKgPV87GM1s42FaydMK1iaFfDmsUanLSMAr3Ejxpw8AJEnqRKJbrN2wstCTMM4",
  "key24": "3ASADo5xi5u8o34abhWfMo9AJvstjk7fZAodJwNoZDrLsZNXSHTLtUpKSG3YKLLCKghjxySm95nAYPCjnZtUrt38",
  "key25": "3KuZ9W96TDE6QMcdtj7f9sfXBPrn9jH8MzkoLWBV6W55Znbhz9UsTfXGBwkQpDEYhKRLmXcfC2iyRDoJEGpaXn7o",
  "key26": "4sWzuhjwmy2U5EVaDfCBugD4TXoeF5U9FMSUB5cDANTpVUdKvLYuhCLz7ErPc6XrX3F5a3E6oYZWRPQHKZMxiL8",
  "key27": "2XJhdutbbxNHvrCExPwaLnhkPssVemzWJq9q2SBFfzY9FVdF7N7jjLGos3T672sWnBN9vWVgUQyG7ahnGaVwAksV",
  "key28": "5HcSD2jYbVhuEfzzdyRLjvMsXcC4izE5eDYRRaTcrJubpVGeGyc3kg8WpfPXzBQ7gVsHowD35uYa9iqv1FzfX5S3",
  "key29": "3ajR8M7msRyTHBLHcNKRdGPyZGD4KdtZoRAVw3pZBqGH7zetNJkHVMZehHKatCoCeegoCo5Qs56yEVd9DN9aMNon",
  "key30": "37yfWjut1m8GXwLp2v9vwVd6FpDk7FoyR4uba6kRTXyvPhfmFgCDcqB7HW4nE53FbS1m8wRx7djq16HDTvRh1iUw",
  "key31": "4AsGQ8xQehMU1VVEac1XPbRxDBcSN1PzrkQZmsrdnQc8P7oAsk2cwyWX4uFahyK1zqgaUE51tMwgVwxpXUDDPpin",
  "key32": "3Sy9Pk1oAyq12FdhpXHoAR8oMuioFZxpch2oZovGv9QMzWLFsxayQtpUAM1aNq2tZQUhTPhh8H1s7Cbs2Snbd1hN",
  "key33": "oYq1wxhc1YfWPkAfrfLpw1P7eKBbBCY5DFtdEXbxbWyuD2bDdhFd1MHSMHnGGPJ3zfr2qB7fKG4YjVf5jgVTGVn",
  "key34": "6325bhzhq5EycJQePd3ZjDLUHTJ14F3yfgBb43uS3QV2zAGjb7QK7qMDufquYmsQpmvJRvJ15XzswUi8gH1r9DaK",
  "key35": "5b3ZE6bxttogSn3ByYrQwBvPEGJgLsEdPjGDKGKjmq7w9n41DLPyhdknjR7i4osKw3iGtGTPjcLLgf1N6zAx7BwM",
  "key36": "3W8Spn184BR4d7k79VG2whZX1rEtPzk33arEwEAPv3ZFgZsn3Ctp1vesRJTNQPpyfyBrbKC4FmT3WpmJjYN7axso",
  "key37": "4Rh77Y5iVXQhRX32gJkk8nmYussCDLMqCv46qxGoCifgizE5rDk4shML2Ta8Xgiq7sL1j5bVLPbJ5xrMQii3Q4Ao",
  "key38": "4PbxrAhC2XhuQwQorbohBrgsvixvxx3qxdmzgjMAEUG5grKpwbcmstPN5PJFrAbWK6UmdpCoTwjsrnHCWBazJQeY",
  "key39": "8Js6yRemGtKDZVWYoifhwcPJQNRy8KfDwGRQbjvhNGMz4oiXfbtsrReybf4QemwM1DdVWEAbDFoQbgmrSq7dgme",
  "key40": "5w1CukuNKRMPzrztrZRoXpQvaJkQjMV8V5yqVabvrGVN9SFrk7pH9gZDR4E1TNzbwZWzm35eZZmS7Xc7oQStz4oK",
  "key41": "zx8Dd8pJMkzFwSccrYos79wTFis7kq1W7goBExqmdnrHp2h8tH8P3PaY35vZRNpuk9jXbnBgPHFLi9i12W8raHa",
  "key42": "yZY2NrhSv3wV5MkM7rDsNs3ELLjJh9SfMqTa4V6nvwx1vctYEkLszvtEC7jAsXZiAXxvDWJWKZyW6nnkvwM2DZT"
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
