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
    "5SG1sG1eGVB7EMAyVmFcNaRyZJcdrLcbtjd5kjvDKQgU3M2kAAnzwL9ccSPwcHwMhTdSMM6NE5XtVhGGvrNCBibM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2owvDS7Zwgvk4nMVooRg1F8YCABb3DRtsNyJHx4LmbHDxwjNwgnQ8XFTJHxPZ9nW9RpWhTQaFwikSCRgxFpXy62n",
  "key1": "2RFXf4eQSZbfBRmsdMTa21URn7H65jmqvPvVijFSBu6JVghSKjH5o3wnvafvQxrjuYtF5vpcsNzERQRogC6F8gSt",
  "key2": "2kzbSMFCGeL5PUngcSfkSbzYjPi2zbrSq6RUa5jB9jBLTzY231j9ynfpFY6GY6UnZMyTskLpET2XnZRKxWKAZ22W",
  "key3": "5YVegRNTMAcE7UiSQ1LFqJVAD6t67avySJWHs1KrHVRJ2aYL2v5xXSHMqXFNoVbgpsaeNhEpzGxPAetfsJt9TnyS",
  "key4": "2jdHj3M75sVsVmuLGapRgEpXR47NUnnfWvbj6ouXEKWWTmCM82AxdEeyjEpN6szsXTUcdFV3osNhRjS8A52V2aE8",
  "key5": "b57KzYLwQV4HoJfsJbiHXDRkDYgusu8o6wWhF9wHg3Jce9hLvHL7eoYk6p8roaop596ggcv9wzArThgFr9wEHXv",
  "key6": "2iqkaSoQ1cLz4e6BiNp24ryhhp4WFBGmpVe8GtjUQ3ypkKWZTasggW9v9jFEY3JSf9CjB3UqLdX7ZtfK3TsmoqWB",
  "key7": "4WZaEBArLvrHp8YazA5L3ypmKWZ6sZNsf4ye651BafYrRYif65UP6Ls73CDBy6ZWLCndbQprZhA2g3syUMs1n1Uq",
  "key8": "2SQJGMny25woUgLWLJfxp3zRfKd9Ay8tG9JDkeuxPuaeGsVjktASfGXVfKMuNw8H26Npu8vzykbeRthAmy8bKGFz",
  "key9": "5r3gYEjqX2FgqHA1y531xwi9k7Kq5JizUF9Q1HYjLgMDwQ7MZyhpgfgTWf3qCtgKQviDXfy7hb9Bb14aQ1AfnQRW",
  "key10": "42vSrSzojzkGNZHppE5hzZHWFVr7HEPgnKGMrtcJt5v98atJa55muSzTmqAfMxdLaPMVpoGK1bEUKbEzs3L9QR39",
  "key11": "4RrhztqkkkewPRGMpxD38vjhQHXD9ywxKVny5uvQ8Z8pvy4sE4cTSGpT3SCuRKxnyDTtaCHH9kxEiz94QYAS2VqP",
  "key12": "5tDQQ4bpawAB6xRQS4kQPxsNRKnwC4kbsSv21uLzsCUt81V2dgh7bpMB1fFY8E48n4dTSrZ2dF3fSffzzNs8ujBC",
  "key13": "4Xkg1BG6R5opFes3EhAfPipD4zLSPtyck9XPZpEVH6FyXDXZDGzGGi7duAXcMBXpcziV3szwWNvSLtoYcwuPkQ62",
  "key14": "tbmh7Zm2SaLSsddNqkkR93Wxp6JkTMAgpaKtvm5Lw82DGHMxWnq1pa242GMp1EZkHbxg8emKnhpsr6gEYj7WBvZ",
  "key15": "2zttsba5d4N7rWY2HVWquE6kRizT6CKEd4pXBzqtQRLLMjH6iYPRrY4aeSb6zpEdZqZ9axd9ooDFrA7Nqm4fmX1w",
  "key16": "QKkVceLZbt5ZoqPUivY9tYFHqgok2z74oQx2cLugLCgY6uhdsawAtw2m6pBcsDTWQKQb7cFkj5K6c4wQkSm8ocE",
  "key17": "4qVtqqHscgQsDdo5pHpuhBLyp88bRmGdtGYMcUNbBKVhGRvHNihfz2ADHfazoEJmMeqXsDWtc4Aq2kZbFaij75PW",
  "key18": "sGW4gzbHoBYxD2ftKEvrnzQo1wuvaR6ZiFyhcv1Jt7Uon7hKL3PPgH7S4Zufr2gVe2xoDAgYDn17CPfzyvFkwKk",
  "key19": "5pYxtNiByj3iLBdmH3UpFAsdwgD8PHdYMUxmQ2Mmi3EVqqH6tzjdAFVzYYVgA9eYjPaUERJtCJ1vLgCXCz9JCd96",
  "key20": "2eAyfkS1B1qDRNBWJ47LcyNEChnzhmiPjs1SYLv3rvJbZB1uVKwMRfq4YhwhjqjjddPgo2Nbe39ud3AV6WBXa7HX",
  "key21": "5H8nZ95u31LqLrYwSKe3s1B3DdPkdRtR3MFDxFSFx6BDbm8kdzqXgB4dTjU92senwqFKSjAzxgDg5rFt7ASC5bZz",
  "key22": "2bbAhfhNKKUkMF14aH8fnhwMH26eUuq3XwyEyQPJ5SbsmBPEV8YQbUyfKpAewZkqmaT8bdonRU9JEbipiws9z4XX",
  "key23": "3AYqVfesuUyK9vQQ3mPVBqGdLrZA5PY4tLYYGMnF8ZJDttonMCdHYdEiBMEiFVvSpYoxYwapniG1n5h8oosatD4F",
  "key24": "2Fvke2dNvJh2oePWidNa1yhQSGfumcavnJgQqbxms7Jug7zSPw4wqTmUFFNSm6LMT5di59zvcYFQCfomkBkCSm7e",
  "key25": "3akJoXcmuJhGWZUR5hQDbtk5dnVVZDK9UeBqZrAK4Y46qq4evcVovMLD2echdn7ahKJPYkMRi2wF5k3GAz1xSQhj",
  "key26": "46VPQ8d2VPPjmZ27mKfvrR4zqcm69R3xLxQBVLJRj648mB2swsDtfT6j7e4bXykapu62QF4Ax46MRKNgKdm23x1p",
  "key27": "5ACz4kDDuT7zmMR5hC2MRpQVnqFCcFdtjovPBz3Qg9iusEUBt6asW4PzvdYcZQ8dYu65ivPU7ygdw46ScK5egj6M",
  "key28": "2nik8y7yBiXhixpoQgcyuBmoiiN6FnwrTuuYA1XHGj2KEphnCjyw73Qb8BXeSaWnFmSUU1oiDmUuh3c2pBm3KaYz",
  "key29": "2VWt9bjQ5CF4hsZVUgoxK8XPzf1QrZboTmgrpNCjm9a15TncxSqPyjDFLyBttigCpc65mEad5NehnByTsbSwboLk",
  "key30": "2qFbc38YgfKDogbsYKvuN2CUtuwHRGk3iUuHiE8gmxm4k9FsJyXyiT8gm3JNavmr6mGuKkYvis7vPFmNzvyzyjkQ",
  "key31": "5K17NHe9EBDbMzVwseN8cRx3dFjhDfGCn3u7iF5YFHz2oQpBHYVa74xFQM2hC3ppwWaTfAZE55es9METUiAZztNS",
  "key32": "4C9K2yba6WjSCk3pvCNEqZG5sFzqvZguWaZMNaiungLUZ2NLJ2bWaQNJyPKPtP7b2U7e68sV3QLxJgBsSYLf9jiT",
  "key33": "27QT3PEBtz7ya7AYSYzVX2LVt2CEjcdhPdCwfLv3EiqEnZ1AYMLg7FaMZZhkAA6xUqwgSAdpXCxH2WHwwJ7VCfkN",
  "key34": "34RfgC7JQPN9W7jBppwzs3CztYWC4vvR7yHJse6PnCNjykLHYDJCU6NrZz61bqELxAWGftEcjqkjAqA9ZnJdq4LJ",
  "key35": "5QqToLRknXmVj1L8biFi6TyxrC8PdVr18YjuyGh87iAmJfwL7RwxyvUHcLgbvQJBn4VWoKt2hac7HjdKwZJzzpBS",
  "key36": "2bEAb923xrkSg1Ety8cwGCG5Ld7FTRqaF8nxbg4vtek273H4FcrFiTAgvoUrgMp3xCgZZoHiZFabauVkMJrrhULd",
  "key37": "TZ5VbkRS73Z5u9uENMea3FLqvE5GyPtQPG5iFWucFLkVVaLpEBSRMNgc6pBStyqxB37WwT45deMMbK8jYWR9QLC",
  "key38": "3m7sQ9qNad1C7AFd3v3Bjsx1AwSEHf4d3BQkhb4A6zm4WkKn5JtbzcFVEvhP2PGEFEiR6k3DEZRecTS9j584HqJU",
  "key39": "3bMmrtujXoQLPL8CR44Y3HScUqjL2g12yvk1gUsPnTvqfkqeAbcyWPmQiFYZrW3U4Xks1VG1hdCMBjnFqZKbDTmh",
  "key40": "2oFo5saAsAucMGar11cBqzWRnUjicm3UEiYtv4B7FKdwppkgTnruahk792CWf3dAQzHs6w4aoro19T6SyfbNyQeJ"
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
