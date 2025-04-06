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
    "TifUxXqosT4nVqsLT4jozoqJuEUsSwNXqTKT7f8H87JSFgkgcGxphZXXrAQjz1cRZFv3TX2M56h1PuqC9YQq1VG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nmXNme8uW24FpRF67ezBNK3JY6suTG5QHrRG1jkFhRXX8vcuJfpca5U5j3h7M1xH2DrXU9Z7MqcuSPC2wwCcwg6",
  "key1": "5Z2VrBa4fDGNvt3q6cke1UrAwLugEenNRHvG3mTB2bb6gUBuxiZr25biteRmd4uQkw88mz6Ddgn9NrDWiQ1p5YKh",
  "key2": "2SxmPh8ptUgZgngtehimB4r4PPBWgGM1T3XkbufBg5jSqVdTVP4LVtUzGWHZH4mXAcssopZg5JfEuH1jHtnNfRZD",
  "key3": "5VPd6Q8DtEnq1VrQ7Luf3PKdYtxd9Ls9UBTpXERebzhzJAK7P7JLZRjJWAsvuZdEwPWp5VzaCCvgQTT7C5xkNdzG",
  "key4": "4cPK1daDUecmEoNL4qecdr8Ds8fRgVzVSL3FRwyNxW74P1zgXS1NZCsXwugrgVtZt8cg6qt4oA82Un8Vz8YzmNCJ",
  "key5": "4Jg4rx47SUBuaLDoLfMp2DceFjMTkkAt3CTvbs3T6go2c1aDcMB3FLnD6At6xgN1n3wnPYBn1K4FzVpLqRRZTFsc",
  "key6": "5DK41upPWzHdZSPzSg1oqjLbigk227bketXte855Hvdku6uuYVnDrCXkRCupbWBw8en1jJnwGDFJgB4XnR6LWLSs",
  "key7": "3b1cfWUNrs3ekMgQJ46CthQNTqQQA7RtcHYmcxcrfJu8X28eefev8P3dsfUgzws1M5VuESrZNG3UiUA5NKh62Qjp",
  "key8": "4ea53GE9qANwB3ohkYBppoc8LMmAbTzgDKhPGEshbpawBpuiUpZg1PdwHn2GnRnF9angjHJVJByP1TCpo9ovE81Y",
  "key9": "2sRbTZMPvuTFQoFsafXdmAh53uYFwyUQRy8yyawWoCAmtsjnpEcFrLRNEb7N9DRfT6xkz66QUFHxx1CX1BG3WXHF",
  "key10": "2bqhyXsXLQmf9kV7JUqaMAMKrEiiUAYZktrqPVEhvbCsg6ukdmaaU2viiTt4PPg6cmbr86Xkjce39kwAG1dWkFD8",
  "key11": "2mkVpn47GvMJnWq1PLGXAEgSZkV7taX9YQsAQtd1zMmm4sTbds5EUZWkXKtF5Apfs3TQHMzm1CQyC19LU3HTjaaX",
  "key12": "oTEiwEdgoB786WLe2MNACjwj6Z1xvyr2PmrdGSPeAVZ2xsRJ3siyVhTmvzY2CNeiWm8Luf5R7ypibx7idFX4Uiq",
  "key13": "3CaHLbNYcDQcmES2ssRVwbzpwu8ZMLvDLww3k5PBaYqSHkF6WXHfgtuJ6oZG7MzBkjU4Wi6Sn3jiRuQRrke2dED8",
  "key14": "5SqsVofvFf11K3GuV1Ro5eXayKv6mZF5QDUcGxbKSBbHe6MszJSXwjz6fUGTAhuUo28fwCACZo5tBRgWZ8QyrHB1",
  "key15": "4t48fKwvvrhQhy915dVBy3WPDvzCihkvfacSsrvkz5wjwH7FKtVuAhC5xQ9w2Y53iAGj8gFmvppLJfSznb19udVT",
  "key16": "sgF2nScCXnwYV5uzbAiJZ7C2mmEdutLs5eV5i1HSsGmdUqEWtBN7V89ycxBwCv5Wcn21TXocjJ9NcMq26QKU2LQ",
  "key17": "59aLib7SrG2eCBe1DHYaLq67k4txHitPn3mFBDe32YWFujw7jYfsv5wm3uvwKqy8ggU2wxDVNRDiM4qn3wiYPHbV",
  "key18": "3z1myAYnpy4CtnVDhzutz3sQGQg1CdJwZLKFihex4ezigdVHr32xceCmVhaxjrdJK2FuFMsMd67ztEKgwW2ez6TT",
  "key19": "H6YvHaeJpaSHYbAHTWpbNiSvHqpKShqUcjMHq8QRKkFsfF8LcwHe9sEXxENjCHaozi54wSj9NeH61Beko9xXWa7",
  "key20": "AWV92wtkapGZWAPTt7j1J3o9bfBoDQkbRCprHrsW8jVY1b3dJGyG6NjXY4KMA4mFYvVtApC3NNQVHVVT3G86sbo",
  "key21": "5oZE57zUxNFYyELqcrnvNi1z8iGpNC6mrdw7HpH9jd2GNo8Vsps7Jnj3kNzaUuh5LSkBXpm3bxHqyHPodEVDNKfS",
  "key22": "zMqQJFpCbi6Rxe47W42KeUvubhizQMQLMwpsp7v3NwUtzi1WyKr5SypKrM4z9bjkj1TvinQu3zpzhUdfJGV7NVG",
  "key23": "5JBfSBNPcDu1fGzNbNPtyBBshkL9DDfxR9Pp2qJtpf5nU5rZuARxThgrRzFYwQqzvPupCQq92FTPw1Hprw2zaSEB",
  "key24": "4L6JuFPEiWVt1tsXQSmaGdoz8Mfn46QjKtQtxKPz1Qhcc9iAc7Zw4P3QrExwB7B6b5nwuFvzUfY5oAYJVAYL5RwL",
  "key25": "2o2a8dbRmZ6G9TPZJPYqDVE6amrsV2skiQM8hMs8PAREh2ChvZVKLbynMp8LhEHDr6ufw5rJR7quTUtzuhEZeizF",
  "key26": "5nRWGxqmbT8E3fW1dv55mxhgkcLFDRC8jGCKuszcreRwj64rWBv4S7jbyiyvmf2GH5Mqg6KnTSjBgpUiMQTQ43g",
  "key27": "8oNvP9kERrV1tVXxiycBZaWVUCt9J8t7EgtAdAaSwDRopJw9bMbUwMhw1XTSxkaGgAe2GXQ5FUJNT9QRw2oAcEh",
  "key28": "5Zjb8GuDtUbKwKyC2CbjHuRcuEfsFAsv9WsDh7oTwXWxVBfMFfLuMhpAvoS8oxUjeerv45Mh9z5Gb64RddmjFSs1",
  "key29": "3UGFvvojGCuCNwoF3AgbYJGhFGRLatmFXBGtvaUX9Q2xij82bSmH13LrtphHovngqLTfxoH1Lq89gQ4QodfdFUYi",
  "key30": "38zDKNgtfxxYaCc5ghoBC64Zn28c5ydTg6ZFhgpM7PfgyVWw3WwrDPUBUr1oBoQXQY8R15xcFMMEpkvY6am7KvTZ",
  "key31": "2CeXfZoZrk1unnG2M1FPmhFse18hsnQmnK13FNwiXX4T5fNRyexixvNS3Q416vXQnqw1PdAMFgBWN1GUkN9RyKrt",
  "key32": "5miNzrv3PCTXo7vMFAt5YrBiRNRr8HLuRWvuWtPLuA3f3XJBokZBzoXoHU3C7LCe7qmJoWtVnr6pyBGnYH7LNPbD",
  "key33": "27i6XCggeXuYHtS2tyfpXSh5vxiBhaDisXMV795ggioQubN1CHW5MYm6QoDUH39973jMkL4oqmmnrkjv6tHpiUFw"
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
