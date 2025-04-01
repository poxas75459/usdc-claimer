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
    "41Jvyx7VpcBZzuDqYFEFQPXTwHxCofhsVAqw2u4DSgkzTTpULYWwgbRN3RbN6ziaGLhtQz6yRfmsvvPPvCXnn94C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SkarhbBFL6DmWJzRADceQ8CLGEYd3WyNPgC1bPci8j79vnVifMJYFVtcjz2fuA9yoDLY8WiBmsxgkXvQepDoL1q",
  "key1": "2adEKuqXPWfV7A9PbnmdLfvWVcmjKrrVaSmHfx2KbbBUg5CvAkoYXc5iEj7yTD3NESu1Ky5Luuyv1LRMa3xy7mRd",
  "key2": "5uZU61mGftArYmYKzuYRAAf4WBaAMDr1482qvgK2oTgzTndV8ydKo5QK8mnwSBCPHAsuTmsdp4MB8BmDt1EfpHNE",
  "key3": "5UBGtaQZE7mPaMY8AM6zFwHtmL93Zvm2rmc5StGZwJ7AwWgyhjis5sZemFHH4XfxWxp868iUGicTLN9mJ1BbXAy6",
  "key4": "4WXcQVdDuSoJy8nmNZ2Nrpi8sVp9qbhCAa5s67juwk66TkhkYoSxnZP5w1xUpoAS6QTnAPp9Fr752EMXQpN6ZtxV",
  "key5": "27Lz5etcjJRffqmPfsUkXJyUbpuMmbBmzfzo94tM35KmYh6HDXXm2EVjJSeAs8sdfW2KHTiv1izd4egf6n4v4sRN",
  "key6": "oVKARKVhCXQZCAWJMprJp3dLVdKror41RF2HdoY948mfShKtHTBhBjXHV9YMRj3ffqXmX7XTfGk4CVhi8hYfuPd",
  "key7": "r4F8P3c7S9ugquDZ7qbq5w4fEkyZVT9r9usV236sp3CFJLQRPY4tnwrycgdGBjuvEK29s429o7GhbkYGsD256Rf",
  "key8": "XQBWfEVq1bwRoriaNNcJpKTAsjeAk3rjfy8FHh7xGinbDz7LobfptmB4NWpNYp8jnGza9Y9aLCAB75MdYWckADy",
  "key9": "2Kw2m8xangjjxdQ3LPmpZwLUFaaTj4K597JHCrnG65btRrb7nsvDmvAVMAxomtF9YhvLwkZFQ15UgFwL92LoqM1H",
  "key10": "2WnjXFSt77kMKp6b7mGZWescMvTDr482zyTTTYCFs3Mmvch6oMpzGmNHa11hmznMzJFwdz9VVi4xeq7XCgLrtgA2",
  "key11": "4Yu7uQNe2BM7kmJk1AwvqmEmuVxg6V1HPsK6u8rFKfpFwy6JHURBuRaRYphXsD2vnnXxDvVPPW91s9UpAaajXxFC",
  "key12": "2oajr3bC4XLGojgdjP79j1GET7Gjmt85o6NaXxbtdEGepxMgCwsaKPhGf4iKT7uZsCe4Wu1gZSQsqgctiBxFzcqm",
  "key13": "4Z5CLGmHmgqGnQwozwug3CpBp65heokB7rM7vbn2FtGhBXkNbw8yoYGp7PG3z4yPMdLoh7TLGQ3PhY9uSivtGxLb",
  "key14": "8eashdDNVWF57DmqSsfBVH2TfdvEbk5J1aJ7MTFuUSwNkf9PG6LmzrTPKQuFBwACRRX66kxG2MnYbtKxUVpeaeY",
  "key15": "mSNnLZs9m2C1KR5p3run9L9od227uG7gvYJDNYSCjcw8MWBnBp2w3tM9VkNJDhTAexBcdZcQia3F2J8uQiRdktN",
  "key16": "2LfHoVQgGCdYVQbs9cT62SB438X68ogMFE3qMa1kihZjNTtNPQcn269Z7EauyGTB5TCiG6b4qXQUERBTLoJxgCAf",
  "key17": "2sW7V17FaxCFEs3oHee7woxrbQJzQ1gqJWYxq4jmcd9n6eEEoNLdn4QUYdHCvRWbmaxyzVecjbNPXZ4Q2xDp99Wk",
  "key18": "2tCrujtvrvtqoZbGEdQZT3xByJHVQa2wJ2NVk314yLEn4MCx3RGRzYTF2sh7kvjBSyhHAwCVxQ7rcrw33EFkdUmt",
  "key19": "26GxoaSwXpP6anAHvsrc9vVFXc97nwqmChjGqa2yUkHnB778GQDeCuL985KkmKCNQPU1JjTJTPk6dWPk7Zf5dQSw",
  "key20": "2KhpnPeG2VpmQpE4TpXNfWYVkt7gwubTCgUmN65cwDDrQYFFfmxs7fFGbPhranfcGADRGRcyPU1ztmLbCBM39EG4",
  "key21": "56rPJcoFtXmgb6pA5unYqqTVy6JrViQf6kJbFRiUv8Kqtr3oPkAcLBGEgN1K2CXxQXTcYCXpaX2bRgMyp1kCVXp9",
  "key22": "4Y6pGieDzoat2Mbd7vbe1bBDyzFrDNZ3JvUdNdmB83AjYyhAXxTZMu45kT4PjxXaGZET9pBftarYtE1kcCgaViQg",
  "key23": "RTExgy1dtEAnVzkFjmwKCzonf3MYYRGK7vehbffgFcXq1ze9V45YAeJG9ukiKRUxg4Rjyzgnt7PFbhM3BDC3JK5",
  "key24": "5hdfiR5ukiNY7qwFvuqSfz3C29hCSL5BqrELFva5ndPNqtspWjhC6q656CTYPyiNPEEqYVqEFEAs2PgoNy81bUNV",
  "key25": "62dTrHqUpw4zBLMk2UWsNPUKnUZY7YnxmbNr1KBpKPzAm4AFaFjvXDCnmRngrvkaQncSEE9Ajs59btzxmbZJhtQp",
  "key26": "3Vpe3q6ZYo8xFgwQjWwJtRYn5TDpNgun5eEN3utpzBrhKDQa5Dj48ixUvPQmvFDJ2tvK5ACAAndssPtLuVtR9Zwp",
  "key27": "W4BeAVfzqHnHZmxtqq1uqGjYTPqgKGSFQDKrL3nKmfSnvzRzRGyKDbKGAuc1RB1LXircFYpQFZtuxva5zQX16Rp",
  "key28": "3SMAButUHbJWBYzVBgzj76AKgizvpEzRotZ2QmvEUEkVM1rWgS7nz6oN1dJvwTSXApxYa5NpYWnJLwAmL1tXRbLE",
  "key29": "3JCrYuRP8GgSeG3A9hBzYcoA1EBcUT6t7LHztM9VWrBSN8pPhnNQ5uoi9PyJQrPkvAKqvfPJkhWJCtkTu9StWZQG",
  "key30": "3ZZHY14vZRqBNbNdNqpcz6g6gVwu2sgaS7d2gSNgbHpTF4qVJtSyrXRB5viafpt4fEPCcnWFyFAP6adCARJscG2g",
  "key31": "3yD9RBxmLApbQPetuwkELtyyqs4vYLSjkF9Ho6kdfL91i56JR1XXZoX24D1JSisZetB5xycRrcp8iPHqmXi37GFx",
  "key32": "51zB4yiFsAiRK99HNSLHR9D9Y4nESmiN4mcXw1DsgyW1JRu8Bc25uLZ2vLukznYCvAY2nN37A32tHi2BC26JMvEC",
  "key33": "4m2WzfgepyqpepPS8hWK8zv6Csuscdn7TaLXvUPrpKf7yGCexZbiHqe92wyE4Ru8VE5QNu23S5CibTQjJssM3LRE",
  "key34": "5t3zBFKe9HRVHFUk3vaYyMeVE4MPSbLrii5bodz66wGDtiyHhJgsvREXQALV2dk4gMBhciSJwWUDm1otQjTzzk5y",
  "key35": "3Uph9vs7CLxKuaxTRCNLVo7WT2uhugW9WRHUCFoUDaNQBXy7KHfQy9bfxksQhhrikuXtugA2ZKWLj8dRDaRcLJnJ",
  "key36": "385nENBNN4TVNnuH1Mrudm2LkiR7YYUYPWXxPLHZnvzydKiM14LuwhSAY1JtWEEwJ3ikDmPFPYbWRizxas8yWznM",
  "key37": "53fCygPurvzRTym8W4PWVtY9RaVtjT1xSx6CzvPZhDz2z9GU7ntez7MPeXQkfTTdG41hh73sP9kWLLYRxab8eCsQ",
  "key38": "5svb9Y61B6fazvrDLJrrwrYqAzD16mdgHpSQekxNp1pGFxrY4feNSyciW4wn6K3UW9ip18ECiQiGMNGqAcKRo5JY",
  "key39": "43Y3hFRvVPcifmccw8qWTWeKq9gaSA9MEaS1hxe1oRNMSMD4wfS5tZNvorJrmmteF98TLe9mWT25G2nykk4v4Wzs",
  "key40": "iD1YBm3vP6budNxzWEzVqqqdgETrBV9ovNJKtkoZn1oLSqjBZayGaWS35J56iRFnnaK7dhV4sxMx1vo35D6HtC9",
  "key41": "HSQTc4ojNmYX6TgitEgzyCFe8gxSA2RPmdtWBdoxcjwqK5C9qQu2omsPR3ShNdonTvpRfd9bZDZPa4XtBRYmNjd",
  "key42": "34ZSsXs9XmLpueWUxJCEGQXeEM7QGzs9zoKByTAnm7sc1UKAWN13cSa6qz9R99pPeqym4LmoExscfvDGAx8Hi4JZ",
  "key43": "2wWAjSC9g27j6LJyaBhA5ApcJXgzdNPNLomBaJynRT7N7r36se6ABTt1v7RQFU5UzSzoGZZHbtHDdsk2HKCmFY8c",
  "key44": "2kCRCrXhFU2WkR6KhTANpXwiCi9Cqk13WqGM7Gbqk2fDWtcXbS3xQkzQy1upoeqZXaRHpg66EVH2YBnXsL2wtcir",
  "key45": "pDC6fDupYpZGuNNBZS7vcATBmaQn3E3VX8favH4QufeqWrCe1syaPsikKoishHcCYnXN2H21wkDRsJ2FyEbBWgj",
  "key46": "4ENhXT1NeTdBRGvS6NUGvtsjJpok8xxk7tiRn1YMLdHfoPMScAbkeVavy9VoaUL73JLq1K8oyz3Ar7ipcLffTU1Y",
  "key47": "LqBv3Qjs3TWmZXwcfUTsX11pYHvmcTbE14Z8eKuCaatu2XMZXxRY39vnRR9mW6xSUdGzFqW9Q43h9m66zGUu81N",
  "key48": "2LtiMwJZjRxCcz6524Kq6wnY186zSzecuygCB5suYZNY1FqxHFtqvVozcpycWDWbW1ocL3L5zFHy8fkoBxdMWhX5",
  "key49": "5wtgCXBFdpDPn4pn6pKpcG1KWGGFuZtn6MpdfRKTFpWUn9uW1CJwCtx4HEmhxrPg26m56Ah1cZNGTGyY8AU9SRAj"
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
