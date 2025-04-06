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
    "7B7Bh1eHz8T8Qh586FWbi46Bq8H5D4rpx4rxtLZS3wAuZmcTzEqe9oZEf3geYKEpXMtxXUbe9zYX8Bdvv81Te7V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bLDNfZ4u1Zmr6NGWBBbGyAG89SMg3wUW26y53aDToTRZovnaBKNhuDXAmNngJDoC2tGzaxWyUWELUfJjMxJiEze",
  "key1": "4cNFwJCYfY8EwxjvbyekBUcB2PSEtw7jUtUWUTdGRKuWtXTSTwMp4bbruhxNAPCQy2qav5jjxtCE2epsm2oUYgLm",
  "key2": "26UsAMxi2M7NKQavpWdCTRdSznMQUfpF9pTdx3uVkWenhsd9xCcNDeq2r8r1XfJztNeTubHBjMJAn5Ze5urdd9vQ",
  "key3": "4fvndhGrZEdmjRLWEmsdRHxAXxcbr1fFr8T1rnkeQV15pYxg3tEgSL9vHz43QLuu3s3rvDnP5a25wivMTzWHa262",
  "key4": "43VgmFSsMnptc9bR1Qui3gxUR8HCWTp3omtF3jkXM3HtMbttE2Fia8F9ACkARBdwoxSRwSJeyyqW5MNdD641XhBX",
  "key5": "3L9sxr1WFRro4SvQ1V5TjydUANC1Cmw5XJPXYGNnHMYkGkAw46SBHaeKg4mPmbyWi3FtfzRsAdb6PUt4x3ppiofY",
  "key6": "2Ug79ofBeJGxcsEySGhtYEjU7fWVKEnzbn4z4kMXYo6d45nskyvJrc1UYfNHJkP7RupHvKcS4mTBCGrebKgG9Lek",
  "key7": "3SfmjJ3X1qiScqNGPKgRfBNHk5GkoK4pNtezMT5hgpnYU4WWqnsHYYUeeuTczigV9LeQVYeiEBPV24FiPGuyRfir",
  "key8": "5Fidr9Ww2z5hFThVUj3DCjYnKCf8aRjCSVGAgY4v2k2WBs4gTRJykWE3MnWpH2q8Ak1YxomFkSDLDC8PEzznKwav",
  "key9": "4PmU8JpGHh1mo3iUiJHC18fFViLCsT1Y5koPDa2CfY64TfdCTz5JjkLv9XsGaFdYsj4dRu29Z27VtpHn9p6c89LC",
  "key10": "2ZXW1CbboP8nfYGs3L8uy3Xq48uFWWDCUJ3XvGcJNz1xfTzc1iWsLNdXGL1bXGz11AWNHNNzXZnFQzTR39pUwTzN",
  "key11": "6XyoRbnvgC4rDUkbE4cfYgmijAXjMEeoPgX84SsopjQuJyxcRKG4xgsVsUdx2Ngsz9wdNv8gM1oUSMsLnYNRQTC",
  "key12": "2VY7WXbAETZhK7dpLr1b7Y7nGKnhwjk8VdzRiNBG3KTLBnX6xCNs7265NZzx5DHy2EnmeRgszpoAjndX68VWv8PL",
  "key13": "3Mp7dzycXYcqYADg3UTXjwPBtkiNEoaM644qNR8XPDkvR1NEAPcsAENGmDdh3zWAGVEWysSYFcrndA8MQpZDijG3",
  "key14": "4X67HV3aCh78hePqEUes9yCFZbyz5Sw89Vz3LPTdc61En89JMJgzVc3moQq9i8ngFdVykSB8JtB5iuFPHgQNuW3e",
  "key15": "3X7AnJxDaaruvdPt2ZhvDunnxQ6PAvhNoEAc7qh8g4wNgR7a9t3sTmeFhoYPpQE2WHAvVsUEyg6hfMpG516QkALZ",
  "key16": "2iEKKT98fPaffTHw9XC2xMyg8U5HUTkWWbDZgsR6pzPH1hLtVm21zBXCTGA9ELNJ8iKb8qSZFsSiTveoxKg4Uq97",
  "key17": "52DHFNEj92HVef1VJdKoEFjcfpdPAGRiMdSYTJVypyKeqVTRRmXBCYcgY8jxksRQFvPLX3zkHcBNLybD3cAiGVQ8",
  "key18": "zwbiL6cLPjYhgN4HRxVWXJ5oJjsoqYnDWfnG64Js7QmbfVLuWqmxY9Ux1TbP6wJBGx68WoR1eyxVbvrVYfBaXQk",
  "key19": "4ZCQr8B6xcoxzsxYmkieXXMb3fCz4VEk35QSUwkuWmfN62krBnS6gsqbhrZYs7JPHpZsDfRXXeywokGUjwuozxp3",
  "key20": "294t637CQHBcvhssXUqwMygDASTYn5RX56qXRZ7aYkP99d8wHWRxcXnZGxiCy7rYT6ZdHwgiHsGLmVGPdfCw7gVm",
  "key21": "TntHt7XLP1KRqYBZqb24VVLDsjnsUN6NTZvzzfMyuA4rQVL7zpVTQWuyPzrHbrypWq3RsoLJGaoDKM4BtFmf1hn",
  "key22": "2nmYgMEM3ufRhxsY6YprcigQJsNgTRSdnkkWxuqZKLY3rCF4bXcvg4iXhLcbv3fGriJuzHotztTFDLj2ivnnLuNk",
  "key23": "LYkX9YSL5PoxrGEvMi4DzUpKJqQ6pfz1QaLdWyLRyrTrRHEoeTcUDGTT5nRngCvcJgTx5g4yP11ox352K2WPBgJ",
  "key24": "2WCTT6yoxAVKwtvfit6tr3Z1HzZPVxRP2u4cffoUUrm6DXrJaP49ZtaFZD4HdekRy3YTYSCu9yi8YEQK8Vd1TsiZ",
  "key25": "PvKvLcF1omFAfvETHsmajuuPQveikzC4gsZLyDSG5QuTsVf7LNK5kSv8Nox6LhHJFWBoY8B1WCkjpBYWPqcAn5F",
  "key26": "3TJ7aSXtNYt1cRYzyuQ4BkqW1PvwgARbCppznMW5m6Za63P8aJRfvKUZRAdpmxYv9LdLWBfHU49WGUzgdS4zcwwt",
  "key27": "3a86mrCTfNtFgtcYVPVKsBL4zBVQC2mpDjmK3c91ybAN6cvbenu1XPwTKp1Hd2LTCKnKW3HETqfetDNAtL5zUbKo",
  "key28": "2YRft9YtDStMhvETffWwfwN7L7NRuCoxQMSwZ37fNmrvs6UpWhf7Fioy1J23DgdR5XKbdWCZEXMcoGt5Q69v9LGu",
  "key29": "4EdFDnbxpVJ93Bhir7Xp6gyRFD87B4Ws8s4Dicm7gyKPdnpooxrUchEWnN8c26GoM2Uu3Hj52U8C7Wcw35ZTZ7Nm",
  "key30": "9hMqqYqhZa9VmB2qUjeCJb4rTwsdpTZYqkQZgpZscSwCQyccBUScCYE1XWufr49PVtNBXTNso8fZZBxKZEyKjZE",
  "key31": "5uLk6FpZQ65RWeTvDH6oUZuobqiaSd2t58FrFWPQHvmoe4vA84QtAJWqboZZsS3Y1nQa6yUQzzwcCBrD1ddsDyM5",
  "key32": "5E6NPFr3h3NxDgyQY1LHg2EtuRdjmShiT7D4VKvPKYNMEda8hykQmPEwMfPbjzjqZbVzdiTxZGF3nBPC2QUe6Q66",
  "key33": "3X7Lj98A19trZdFLyVaiscTSi4XYAeNkoYLhCtdypXP9ArRhVFYE2J3NCuo6JUNacAMXjHXLdqmxnFUcFtSrtAWA",
  "key34": "2RAyNojvXmVp2gS3xNL7GTqbhKMkwMEyySJKdyQcKtpmK1sV14GUhWmm4qJ9PnJF2rTdPADgFTPQ6AB5tXY73C7L"
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
