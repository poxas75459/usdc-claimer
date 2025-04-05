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
    "3Ef2ZXfCCo6HRAC4n7st7vfts5a7yviipgbHqfhwqDpTKVnXTHpRNvN91rPDYBN3HJHFmmBhvVn9rbzsj2QYvnLg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eAegYBN7D1LH98tqeXZ8vwFbPZVrZZknNHqebffoNVgBRdgnutrmXUJRezEguHLFi6YtU4UC6dCCLyJmXvFr7pP",
  "key1": "Kmpiu82NrP2tQBm1LDUz4hA9REgiwRJnroVN8zsSCUJogs6N3q4m8ZW74eFcd1Rst6GA7UQnhvCEpKgu1CbFYEo",
  "key2": "2eJiJrDepFtivWRPVMqf6hxeEtc1789R8YAq1v5Bi8ERvJs1dhaqzph2tE9BUuMrrqX2znKAStK3s5AmHyCwoAbX",
  "key3": "3zxSbUszvuub5R73cxaNYqG4vigMiFdSDdQRe7RoxXTn6Z6LfndCQDy7PfDVVEJjMgsFZLvUKeGLLLDiYhrZZyJ",
  "key4": "5Vm4BLygXCRTwbiqDB1foTu893MzbKrV4DijDS2YeUBb3hbzamohKj92W16GJKhoGAYMv4hjmdfdq1RuVnESDcaA",
  "key5": "3bp5gdWEzvXEkT7n8BMqJ5dVPH82S4AW3gnvzNaojJG9xf9oF7XAcTCLVvt7pXouudSDeRoG5YKU2vfQGEBbNhm3",
  "key6": "3iD7fX6V5Ypb7mgoFPhC57ULmfUQu9ohnz5nomTKBkwtjJE7hDNJ1xy2ddADtK8XqRwkgTj8RaAqaBx2FSP5wQPQ",
  "key7": "hLPQyPEvhYWGgeLhuXyxzSkgvWHjCkg4k1Jk6bV1arjTbonV73NRtHQAa9LNnZeCX5tSXoZb5yMezpvvb21YWEG",
  "key8": "513yGBBbViEu2hS8nRsLmavNxSNQnk8z667wzVR36ASkMYffgv6HDnnK7CAQTz1o7emCNuB9Lmk4KZiKksYp3QE6",
  "key9": "5hKgdY87ZRmJwgCXS3Gjw2FW2TU8GfufXXcXFZ9yvKRB5i7o1Z8N9KRvPVJAZr8Bqms7SKBeu61Wru5oPShFBeKg",
  "key10": "QshPrde5XfKHz8rbmckQfihRGSj1kaTsignCnTsi4dS5WL5s8AH7foxmAXZb1KEht5cgcdVuGGYzkCso6dDqXjn",
  "key11": "4qt1Sx3spDsYVg53SziaZ5yAnEwUqFVQbvmKjtcvcwSmgGTyLdqQA3D4Y3KMhA7LFN4v1cPZAi9z567XBTe4Bemd",
  "key12": "zRBcXTsLJw7L15EAmg1Mo5piktFtbrB4MrWqpepUJbtosNmQmHauCj5d5v5JE8KtxTHxRAxnXXPp1v4unqELm4K",
  "key13": "4hgniBb2JQ2K6B9fhZ6YwviEtDEgUHpbwAUb4jj3gfb9khfKfMDFVmGMg1LmCirUtou354EHyFycSYKvnoyctD3m",
  "key14": "zjzMgDGG1yigsKSHiPLyNg8QtJMDqYgfxcJwvBu91YB5wuCWkYnnUY21UNp7KbHLfkyccmjg1rYwy2idQQzNyXo",
  "key15": "4g338ewboPbBmLdwRCdz4LZAQtZaoUZMKvhUpZnphLh97CVyS3RSBYNpovX3M2baFj2e3otKddP4ACkdUwchi18s",
  "key16": "2Ft3JytzQfzgVXPerM7ZvZ3YBwG8pu4tbf3btcSEqUZ9NPBezroaGYXhkg4jaEvmFTNh7M4nAaYs1HA7mNMLqNvu",
  "key17": "yMpDKuUV2CWaET5xG6EHivpnLrKzzrUAxgy86vZmN7tKxC4bhxrsM3kt5P3KCuHo1ossdqJNNGoN1FJYjLWEQPP",
  "key18": "xz89bjbkHtc5bdGwghAMt79D7GzRVWgrzrKY3HkQojJBh8GHQ9jJi5SU1irtsswbDMDLq7E9M7V53e86RnkU6fW",
  "key19": "3kwdcMsqzmSM3JKfDESvqBVdN54UTADsxBg2dvdVddBK7AJxkHUNsCw2tvjcd1cBcv2vduCsgcnWVBDPE63XrNun",
  "key20": "5S4dkSAogvMPGF1zFtEWT7g6VnPLmReR47QnrgqF8UG163zrNe84KhtJsf4NjHaS3L2bb7TJ5jtM1PH4TrzgdXWP",
  "key21": "4FrqcvK2geTcjfsNJCMnP8WESdUXg8pDwZXTNgWFjBZ4zR9CS3BeQtM3i6paNmiA7sJ5i8sL82jFN4GcSeVrg56G",
  "key22": "67UPLB2MeEaRs53QNhfF5hwWR3d7SEDXXFhreM5JHFGgJbdCuTu7sBqiBi7SJ4rUrTWBbTyyhzdFpBh2tYSKZkJF",
  "key23": "eTqJDEyCu65hWjS7PcKR5MAGxrufnjU9smhDwwKQhxuUYoB3dHaJwg4wsDMdGSL6DR8BuU1eaYKhXbQPkhue2qJ",
  "key24": "3YyY6G6vxSKpPSF4R7rqFy6XxrVvLTxXFY5FNJWCZtfwHEy5W4MfikFZJrWTtS4SFwk38mje7cEwwHfF8cMUWap3",
  "key25": "2PTLfNMcG824mSw6MvLF51a27bTCHxf48w6TNPDPiK2Lec4DFKRFut654Ey1pS3mrwdiUf6BxnBwXEHp64gWCnGQ",
  "key26": "2NozAndXr4VQ4YePCAuZAMNmJBv92kAL6Ym7H3faKmVTWDy8sHCjXLa53Czz3gcMWzpbrYCHoXhQRX2737iufAmT",
  "key27": "jn3LSnBMtcUdghAsfaNRAvy6Dp7aQdZgf5tyJQsGpi2h2yD6iTvv8GbhzAHA8cCAH9bEMdMJ5udfYUA7ppDraUE",
  "key28": "2N1a9UXVmrNw3yjKCUHJSmSVk9fL5Dmm7zYYGKqqKLW9Q58DCSopft2jVP6benTLks2qsnT4KX8Lcc43meEwDHxe",
  "key29": "3mXnLkWz2ypdTYA33Qo5oSwYjdUcr3Spayi98bTUJTEfLYhTUGtK6UeoSd392gT7g6sMSwUg8c8ZaK4Np1eeBihF",
  "key30": "3E2RA6iBjCUi88GU54sy4YcQEbujahBxF1N9QvhqpyaNMBZXFk12pxFxMRLcFd3FJqnPSp5xqpkKa9PTSDEubPrR",
  "key31": "5uuzv6KKU47jH28VJCP1zQP3YegBeXV5Uyo3aJXm76twdcrXVTTmMyr7xmk8hX9JTTcW2ymttdZLEUpLMuRRsFaT",
  "key32": "5AQ946vZ19AkKD42MCL7WKyiF3yiP7pxQhwzWqoRZ6ZgbSzK6X7j35wQnnsNbPocck82TLUZoGXa6mWsBPtPLZV",
  "key33": "3iJXjDEkDyWsBMQKNLAgP8RRGbgGk4g9dVW1GzMmAieFPiX8ZMPzbZQ4u3gBVWHtJ5dzLzivmF6xHQgZzvVy6V2G",
  "key34": "5buekmhURXLitEfFZpi7W6Rcfp1CPWJKb9YkmFuhn2r63nxZnw9SNe9R9pcQ629v1jQbKFq7unDWE9K9ZERY7iC3",
  "key35": "619yqkkZifo64hX1KzMBqmVUSzjFwM1gF6PjUFS34bFxAKy5T6yh8JW2VdNucBDGCa2prfoYgteN69NfXrnvcSqe",
  "key36": "sAX64BmQP3QPBq67XjbLQJ3CFZZL1Srit12PrGxXYupmemnVu58DpjLhcoQBrfuVyXXALSHkbDFCy9mjM4rQpMk",
  "key37": "3jXkMsMDtkkqphCP6pAJgLBdPbctq52H9b8eMt7FsbSkota3jdk4YZXtvAAhTKkfRa8r3joz2xkoxvVkjLGMZCH8",
  "key38": "1FEafPdf9R1VsMcTdYhpjMJC3LBZr2RpvMiVFZXvZgkFGjf8LDBQhNWa5RYWdgATMVDsWWqvc9QpAjpb26ph2aw",
  "key39": "5wfcvC6X4ks4auBSGUopZi6C9F3NJ68MvchrRBPwqpUXeyEKejgGuiVaMNC13Phc7vWUPSXvj3k78LJLuPpJ5qLW",
  "key40": "3TiY7AGfG95uir3iVpSRynnEDV7mXnKNeUJUUrheAVgtkVhTJF5KEEdg15GcLELdXTX88iGFuNnpnejrC7BRQDTG",
  "key41": "E2QB5m2H2gTBvpkBoJskscHZHfLHtkCzQTyJg8LPnn3YF8VovK3pAbrs7kviEabxgbzz8eMjGGZPSE124k4Eh2M",
  "key42": "25sNktT5FiCjP5geHesLdeTdciy9XqEL2x8gGWuRVVvgjBQKvq9tu5z6TkWieBdsvr2B18Mbk9VgXce1FSptL6cG"
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
