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
    "4X33wkFVNhU8DkzA8L515zK1YuWtzu2qUwnhnx7AEdoNGM6GDN8parzqspkqSaN6RbkzGehradpFLQeJZMZCSPMn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4h5aW4hjiMs7p88vxXuY6KBhAXdV5aYraEMhrriNYoMKf35TxJ87JnnKrKwRG7hLK3irUbdarEZ7tnE97LLHMyu",
  "key1": "GegpR5B6RoX5DYfDoyJNKvERShQyB6Lj8giCxak9axmvdUuRxeapNZyhk4PNoEngHt7XNBJXk8KZ2scqB4xWvGs",
  "key2": "4oFRK7hQiznr3WrS91Sv5Z7Q1BaNJ7dNDwfXXJX2cYaCj8SFk1Eu6b32bEjDTp6FHrb14bYecfiJvhmswn1XhqUM",
  "key3": "3FKPgzRpfiNjVXVuYjUXyqKhr2qZeNDz48B2AMFuiSxZhoaizVDyHtC3g3G3fa12gifewALbTEDbCS5nbaY4FVT8",
  "key4": "b9TkUL4xBpEq6F8bpyVPxWq5vDU2EvcufHruWfSwfLsQpvLf6QJLk9ShiD4TSn9fL8kLzTqgRqQ2KMfuS8nyXma",
  "key5": "4C1CRmAFBq7DCeJXnAcD4qc9kT7Vxoq6y2oQ6kVkDJPP1pS7DZEW4vQUDwzKMkUE9XufRZzaSFAypcRtgoJjD2SB",
  "key6": "4gpBSzpCMcUBGYZTjyjyiwNcvDWJAr1aDSN6FvaeHFeHirom2MSanPMKengZ2CUBUV56MR5tJ1nUqCCSDeBBRxxS",
  "key7": "eCKJNY2GWQqj5kgmytRUojKMgqRwGebiUSDjkqfDRKwezXqFScfNfDhephZaJfa5d8yEF9xW3JYKeYEAQQ4KCvP",
  "key8": "hjBHTfptfdrHmGyCy6xfRaN4DHMM1xTfNEECMHSdgRTk3a4AK9FUZRLF262a3jHc9Pww9dH7dgHX8QoFykqmAiv",
  "key9": "DZ2K4ThKEAm44m6JcSs4XgJ6dA1U7gmjeNrn3cyk2znZ7zQMNMDz6ZFitJJ1j9jBT7BXqWvm5dzbRBSmw2a2B5G",
  "key10": "46NwRgszLh4FbeDBRMsWcq9syTmrGKVecUs8jiGFqhbFw7PLanfciMPc29N7GKbKnjTwF7Wb8uaPpymZmbngNvxC",
  "key11": "5Ecn2uqjWsP6kdEX6RgneAM7qRK54hW3LU7EjNWdp4U7BSHrt1EkpFZ6ywsmZAS1G8AhJqvyNoFZJVHN1osm8CFZ",
  "key12": "2eveu7hZeuL4QoMNwuFSh4qVVsP4WdeK55SSaKpEY6ATaogrRUu7QAhWeG3n5yJVvsjpQnQRVgxtToVNLatq8zLg",
  "key13": "UijLLPcxowLdrnaFMYMiV83uPWwNPnqgUmJZWdpwwYCQL7hsTUZdxEjWK9Hzpaqt3JEzdGXdFCd8HBgvhLZsUmX",
  "key14": "31devPpVirtwuhxi9k7fbn3RWxgKc1K274UrGsvm8s9TdQV3jV2tyN492i8msYNMLkjtwmKmPYEd3K1RXuzDnk5e",
  "key15": "4xsywg8Q2ZLniXPYrBtFTo9CYs7gtDjJhEfXE73erwp8kcFTy3W5stK2nB3BZWshVtGfUsq6mwXLTWJJ1mPw5f4L",
  "key16": "2MQvz4cw85kq1y5i8UKpZSMCgZ1NuXgouWSmpUpEB77ekrUsXJyC1gdcpMX96bRpWW2fMeTWxCqtfNJ2H4E8PbKk",
  "key17": "3zBLW2ziC2pvxmG4uPW7H69HPjqTDMDsc3C1JvWtt7HYcRNAFyNETBY3vwpMc76Mo8nGSckurmZsPPy2jowcSUEm",
  "key18": "4fyGtXJZqFdwfcmzbs3QZpwBhbkNoPyxTh6i6c26VUW7gfB53hscbVZaHnaTXhYQJyNdGtycPyVejQqJYz2k32rs",
  "key19": "4U8g7XcET9ys86rWFjgNN1BnEmxFKnA3cKiNXAh3tK2iTSSrtJwkxcCSiwWVwrS9PJLYJsFLMJkMD4tLEXNKK9gR",
  "key20": "592uWveAeHXGXGU1S6WP3TNNtRFrm1wYnieh7HKF3kiyJk6D66DM4MAerY6CDbUQW67N5HNTzGu9BBxwsbhp5QB6",
  "key21": "39m7LScjhguYBMBFBQTZxmhA7zAQysshNa4ju2QQ8CHLTmbBmy3paJxkFjfjrv5EYNwfWvRxHBRZsqE29SV2YUWg",
  "key22": "37qA2MHgkahDbLr15o6mpHZ52GsD5weFdnkfedFWHbmWbW2gWiFXtW1jiGE5nKe4EmE5nDqwzFbJD4uDiUoM4PSb",
  "key23": "4jBsqRXLuGpLu1qwthJetLBCLZWumhh32ChdCrpgEMZYH8NEq9vg1bKBKVy75fZnEPgfQpmkNJiu2JnL1UnP3G5v",
  "key24": "3J8Y8Jdd5XRcwHyAg2GZQBGA8Pn2pjW3diKvm7LLGiL2pKq2KNgEk952LZshyZS2pw9KkYHBXxubn8vrAbJjPPEU",
  "key25": "5VPUgaTzNzGJ9X1foYHs7Kbz9Sn5Qu2V27fdffjsVjmsPk7TsVMwLK2KwfsRN4x5E67m68CKKJk5rsmDqTAtQ2b9",
  "key26": "4VW8sAgBJ568GhYs4XeJfkm1BRLi2tj4acic58hhPMXQybtGyzboL7renEt2BFDDhmNyDhChnU5BNKeB9qXXMNP3",
  "key27": "3QRa5YWofex4cnG91p3UzPio29VsS2yKqkSLHiGwADgwL1WE9isMBPBU8E2cWRJShNfwTEwg9xEE9SxCs974ooQS",
  "key28": "5XqHHTatiJuheKCbwLYKeq3Rq16EWzQW3qVi5M7EddgNw1RUaat76ei21X45VeeCXe4Z7iKoXEcGaffmhisyt3V6",
  "key29": "4r8gQdqxEEJ8WXQh8yg33TzPpPdfomazKL9Ao748Gp7wBvn41iLDumALyXtu23XLKuL2GctEFttzpqPTkxsenNd9",
  "key30": "3Y7u1NXA9yxh9nbTFfGm7hRssKiLZtxPBKzCqKfGM4e3w82eWit9YQHiRhWMQ9MzYspsXLAgkit12gcCSKUJ2ith",
  "key31": "2tqf5K4WbPp5hSyCG499rPerUem98uaF2WEXyzZTvaBj9CufdoTNDtCUJEhZfN8x7ePyic49s4wcUtfbjSg7TBks",
  "key32": "5pxpHPHPbQ8RSjCWr4SKSV4ewAgACuiY3sF9ErU78MrvpsYj8xxTay5UVddWPPjqYKfr8ohbte7Vzfq3QfQda7jC",
  "key33": "5NqPV97dYAy5w7xPEcHJTCUUzrezkQsCYhN3VrQwGAZTW5ryfMYwfMcNrxZbkHfzLhtmuhmU5L3ChAHPn7VjJ3FJ",
  "key34": "2qSswTzJkZ3x2daQsPjVxTzTsty3jaPNMDUgo6RrfpGZUDiRzJRep7JbujnFpmVd4VYHgp4Gj8Wwa4uv29zgC17g",
  "key35": "4MF6uK6j3zsDTEnVxnCvpi8Cemdt2orLM5Tt2myFkAUKHBVN3fGW8SaEgh7yZUNSRbJ2StdhapbriR7xWdNmBnfn",
  "key36": "4r8KecEPAfSByRJkE1fcKYqKiu35Zd6svWwN8KVXRG51cTfRthuveBptikLoVUH22AzVF3EVLpeom3PuQuvEtNCE",
  "key37": "2g3zbZc4HqLv5HZCjwwbH2Uhxq61tMJ8a4VXNkFstkrdu4bmZzQmanL5ciujZZkRFKif5D2r9Gb872UoPCCsfQdv",
  "key38": "3YLaFWGYzZo85821LV6TL1P5YQjngavHkKuDbK15uZG8zR6M34BSaXd7Cc5WNGTCE6PD9iPehZawHjAV6UA7XYo2",
  "key39": "5KX1oXeNMgkKZNMThFHJcNddaNNkMzs8LRWv9zHwXDx6dfoY7gY6XZAaMRnWao1mFTr2ECkAc81r3ikaRRAgMPk7",
  "key40": "5xttDXTBEXiBLCp5448qxUMBUSyrrvDHgRpjTbWZu66BC4njYxp7AbD1KadppgPmarmhJvwv7mYeykE5KHBRAcmb",
  "key41": "2wpJzsdzHvvi1JZMUVGFQneyR6i5T7hXdB7dvC5GRk9Ze2vvBoJJLE5kRUf5xRzMsHKDUcXYi8J4vpuZPuQdbNiZ",
  "key42": "46vvLPX5tzbThrhpWfBPNNfUG3MRiyXTpAaggcwo5mdosj1HkGjpmq8PY5Yy6aQpHVr6frConjwR9YkVtSfaVLuk",
  "key43": "5Qyrsqxhu3i3uAGuKeCQbCwR3WQKdej3eBnd193vLwbg7gUUgtMW2Gzxfu65eXNryWfcCY4mLJxHe6xuMiqhMDno",
  "key44": "5fMKzYj8EE7kQUVuQHV7E5A88yMXMnkWzEx8EnPeSKL3fZUMr1chu4EB5zcRMd3gM5DyZzZSqsKHGQ1YvHC23MKt",
  "key45": "2dQKRRTpUZ4abRkmU2FRgCturwfzZhapKScoNvkAc3FX4WeRvo1w3q6RLr3FUFwugB2H3ttvT1d3ym65Md2GetTv",
  "key46": "673YnUo4ikhNzmNH78DsdiS2WsMvoPXeH9oZHHsNrRXWHrBsE9zS6CHDCcF4gqMwYdAEWEavqrjPdYWad7Ueo7Cj"
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
