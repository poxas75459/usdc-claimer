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
    "5CtE9QNNDaUPwRbgyoXvswEUYvchaL3aXw2rJZKP29xv4JhrFg1r3YH6CzgGCQhNsuXk24czgTHt3ND4vZpoqcAB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Yy2UbfttZteynShh1f7EubSyAZUjuxZit117kMtphV9ErX6PWfhnmJf1aWWXG1dSK9CgwTqptnTAuWS9WRCeZrQ",
  "key1": "25bw3iZkEr1NWcSBg7HL74bGoWLr29A6PJJFPQ1MkyYFkpWTJotyTvEFCkXJ4WPeL2sdJDQ9UmxprHh51VkBx43k",
  "key2": "eSRu1FFtmE6ppgUtUn41xVk6WbQrHkAUMxBFp5wj7n3LSKsbJGZmywV8c8FGVmJXthw5nUrAknB68kZndioHnmX",
  "key3": "54Q79NqaPXaoR8CucbhrBeTz6SuejLtP6uvBWwkGCKSf96GmRgDKPhJNmNQfNEJ31LE6tNCPA7mF9Viq1pQryPUw",
  "key4": "3dREjMWtCWcFVJKbpaGiqWeSKkfnBL6kBqep24RQQ77t8RUhrVgK68v2v37h3vLtLkVw1ijnGD7UBGty3USSNgJ8",
  "key5": "bt5fXoGfGa56Yp1Tg64fKUtpb1rvMbxbNeBZh3iD7fs1GZk6MmHbk7BJUGGAMEZ34y7jRTavEcCYx363HGKB6cq",
  "key6": "2sgcf2qs9G5eN7SmQqGCstYbYKh3X7XNpfLerDHK4RodCMxgT3vdcDcVLHKR9ag4p8F562JuBGTKtasE1WmfHjnj",
  "key7": "4ZCYfKW4W8nvVKDggdzxBpauray72CZEz3wcYiNefkVqEVFAx3sPDZtoCuYycftxpTPKQgL2kjKkENnnpwGU7wYR",
  "key8": "4nKG1BHHAmgJep9V9EdSVg2MT4BnvGtSnrPBm7BbqJVyv6Q17CAEtW81xhKArzCee3ES6Pcgx4HAaAPrgLVmBiQb",
  "key9": "5VMpoEXKx5YDJHmmbJmdeDHbtPETZ1tNac5MzLm2j2BWscSYb4xcEaxvgB8yfTmCf5z9QTVBa8JFk8YKMffgaK28",
  "key10": "5sVKANxMtrUwnUPNi3KDXMg94KJayftURxmdgKzftxbDnZH9u2fLWAoaMg2iSGnPrTrV38Z27CBr4mPTvVJ5XkgW",
  "key11": "4SYNn5FhhGhHSwJiTdovMEEozCpLauJdvrgsskRHpzm4PQDUXz5AjBNKM625nKE3rBz8Hj7Jaaom2y37q8xyff9g",
  "key12": "5BhSvoxw717YqoVKKxDZzwwZPp4VBUq77wviJq4rTqj2ASRxdUDAcwvXytmZdnaVGQ2o1PmLZWi7sK2RfTbUz3av",
  "key13": "3V9bVUKyGh4A2Yjj2Dc8rwFhEWEdazJDTJ3tQgsatXKTf9VACGKGaw8fK1in3emf48dmhaaXmuuQtQGyTQp2ydPb",
  "key14": "48zUdwbPyfQEHPxtiWsZ1WjAk3VCj3nyEmzv9Ucf9KeAWuWFTytatFPyCRQoJ13JDuA8d1VfTUquhVbLJ7rcCvxG",
  "key15": "21DJVsoStf3bTJUqwEqUAQR8TRqPPVALvtf2qoDzp6hMnk2CuoMRgpKZQRDLPBee8sd437ubUCs5eHGCnDuFk134",
  "key16": "5T5a8kmmTsVMsPz1h8B4sFbM5W3hJwTLXefYNXVXKAEfFUSv97u2hPbczqohKjPfmFH8zguBrxjppZfNTZTJtuWC",
  "key17": "4QZ9mwV1fUjvHVqX79do9LRBNUZGpUc8aqfkAnjn6sd3gEAQv6NVJz3jzUKThbLQo5JzZenRtnvL9tSXWdyMpzZA",
  "key18": "497zP1Mm1wManHvcbUniGmSztM4C42gtjUX9nHiWiFvbYB6eZ4gHEU5gWjt8fvwiHVkvrMm5564LweFEybgWq9Ch",
  "key19": "2gbjSATGDk3t2Fj9sVo3VYZTeoTUFxGe4Uzr1GmDz6fiHVR5BJ2sB8nSJuy9oWubADgvt9uE3YQnuPb9y4KAme2Y",
  "key20": "3k1JEYTdinKL5eJc45d47hMfhcYUWZHVvbzYXs6vTmTVPon8h3ckmKdr17vQveiPQHEBQdCkzHx6eJzMMo8Frpa4",
  "key21": "33wGRweQZhc3WH41N3hLRuxEg4pF1eekrTafhSoD1sydarwvxCbQFiXWeVLvVC8cb15bvrG38akzi8A7Ncgw2MhA",
  "key22": "3xK2gSP9N36i3X74gbnHCUwd49zF5Ps6KfrUpb2truDQqWTD2cPDFc9TXSFhz8kgB2uGP7qiPvU2JbJktipFGGCg",
  "key23": "5KqsbLnedDEAwKREcT4Kwuyx9PpKpGfLk2V219bYh9fKoTnKASMCZm3aHPQgvCzzfTh7EkWNjSxZhTEwms6gUm68",
  "key24": "47EJWVTUqy3RubCJDFpMfzaJ4KQwrJgnyRRphRFKKuCdLyeu41GfV3A8zyJUhDEjJjai4m4LUB7zBRYUk7UsC38t",
  "key25": "5yq8AKdNj5xCgRLeZsxJKhzxs3XScrrzzToxYwNU75ZnyFyWV5wVshFyTaEuJeFUX93ZQHBAGB2nX2EkfJvKskrT",
  "key26": "644Y2z7XGMAWvDfuGyCUNenN6zLPAd8FGhDVPmm97CCZ8JZakQ8CDpuexRS1cGxLpup56ot4h8N2NtfGU8JZiWn5",
  "key27": "5nn9WV2nqARGXSURCiMBUjSUCe98dQuUngDFScPaSWDVGP6ua4H826igUgfCuQhbaYKkwQUhtPzg8Zi8fiU4mtfm",
  "key28": "394DfVE7LAhssRzzLSi9cLE3T6EUd7GHWT1tMc5CF66s4QMzYi2ypsufWQaupHDhbeRLX3H4j4HKSecXzPjX5Kbj",
  "key29": "25CSwGa6TmyhbraoJyY4N2LEeaUMPszChkmfh2MQ8aKwj2oGQa7vje4hhEPBm3n9GDqF4v1Eg8hyKjyP4ipNW2n8",
  "key30": "5S6CAtBRQraHF8k54xTu9pZxYj1YxJm7jswUoyMzWMsBJ7Fsy4PfEt6WcmrDpBvnSwR9uU6GK6roZbu3gfopzqWA",
  "key31": "4pGcaCeqPP4XVwCF2SjvcVAVmds8aSv3h82AAwzYFf7kqBqzYmHLJV2xGfy5BqbYWXdbjCd1YZuNngYJ9eUTNZCt",
  "key32": "3LZozo9exuGtHo44eDfzKZ5uHsraPmPDj1PhJ5zXdVmFv9J5g4h1ovuTrNigkdWqagk36ZWCUHteTM1S28GEguTS",
  "key33": "peaZKWS58YxwD1eE5FkiRqHbo3SceFABRJffZ3JY59n1peBK4ZvUrMsroabvZp2hEuCATBn8JcGX6PtXAcbwewD",
  "key34": "3jfW5YyJKwG7MBeH8pgrTTbEEUzagcmdCFUX7z94J5arr6M4DDLLfFZGbdwZ97wx9s4DMyf73VeqLkgnNdHgg8Fq",
  "key35": "mbC1LfHmDsqygYtpKYMMDns2Gwg2EYYvKj9xDD7R4FgjXiKGr9V2KqU7Dica834dK41qsbCJZzcHMSnJe52Jc75",
  "key36": "3gPX2uYUonxFs55HnFwToj8x273xJq5AU3BLEZ8accAzuoXJy9hhhHab1QeHHYK9ZLT87uCpaqK67NjujZRY4iEu",
  "key37": "3Boh9kji7fNHUALNUUaF41j7Pn3DatPdpS3FNhe4KgxTPvfbTu4V6YYvBkLdsBugbnyPqovvZMP7T9gbRiD7Q5iV",
  "key38": "3xqTSeivdBQDkk3R1LJZnX8chMTEeY1ZRbx7XSNaYgWez8B89HKrCp7CqscFdDJ83MnuE5UPanT4YkwjJ3iBQYjs",
  "key39": "aic13gbzjVjQ3FsSt3L3yzWM86XCU6dDre6BmRngGgyYrA3qVRTBom9tVjrTcj6KD5maoagjbR6dPqbWB2WpbrT",
  "key40": "47aJGN3BsYXGXu24b65DTxXovznZCSTwamrahKjok6NhUSXomqVdN2SARLHoGjrv9pnEZMCEkyE7C6grWDGDcJTU",
  "key41": "3p4tCHsonvhz1AVquQjNufoSvCZx8dDF7PvRXZvj4B5vhUkFMcVdm5oiMJJMbZc8AJiHjLqPUGRybQUW3KeCskGF"
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
