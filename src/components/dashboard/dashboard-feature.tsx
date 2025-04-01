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
    "TLhyk3mjZXtJjL7egamdpzsswsWCbxHErrzkLXDcFeVY9EhAvkP3ZFTGA8cRKmsLegUJyDUxr4bUwpUkNrfN1LE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HrzsUJQimhmqokaqWchRRZFpudQQ8BXeegJUKYoqknDcMHjR92icikAWSnYdV4z49TvccJxEfoLuNfkdimGufvU",
  "key1": "4LRXfnKJ2Aixb7mDS21ftayoZV5abKndBYNR7eVAdjrXNMKjH65Sycn4z8s9bDtcxtiXboWB22bJ1Cs2HxNemGcw",
  "key2": "5XWDg6YX4XgKvqVPPArdvqxCakKGtf792kt6swoyhRQ1AjARZx55cBhkrAuLU1RWDBXenKTQ6pRnF1Xh2LecDUjJ",
  "key3": "3Ards81m1wph1YohAQ38cMfBtVUxtEt5YYtPZfNpgxwbAduoZ9mnjcuHARc582TLTKgLHizhg4zCpu695qDH28aV",
  "key4": "2q8VkpEPkAwLVh3uSxeyEEQpi822ALwykhBqCPiFxcvnWEVpzBHvrF3ZiN4EiGoWpNN6vCGbbdmpdZRtnLcwTBCH",
  "key5": "2efry3WSRcfGGk4DrHiBaQJ8UD2vi7jPmQBuxecdTCvbvNSCsGvd1zZDaYjkR7NoAPGyqBin4B9wbBPwocPyuHxH",
  "key6": "3uRWBvc8ahp1pJWCPFFyugzyAcJq3CngfxXEYjUidsB9qgnkdrr4tNfg4kNG2sdLDgWiGHCUNbHpdNyGG79Pqmss",
  "key7": "3kWqx6PdRyJfTw49jfz8Jg1xBYYEtjWTGsC3j2vqGBdny2R79vYJM3gi3GwQgXkRXZPY2mATqjHboYtmqagfNoXf",
  "key8": "43tCsa7LVr1mZbiFbRW2wyBC17EeJwzhDBfCTsoGQ6uNvsGZkXRvYEmXLejgfpGXkjndcd9He8YdfgVkkkqThosE",
  "key9": "5Zo7WXALkD6jKbPkrqFjTstewuLvTKApWu7CHrUJAn3JWnRzaMF6nmAYZYvpC2AHvAHLQikpc4fuLR43Tbd2525u",
  "key10": "5R2nc9qcQoVZ5HRuAZeqwzmwtautNvdwBmbu6yAmSxGAqcZwQg8z8b5n1RbnbjhpLNDgH8zGLr7cLHL9BkTFQiVa",
  "key11": "5xDduLU9vayedXKVHjd4bSi2BTS141u95YAjv2REWjNmpuvVsbpVQHiJrDP8LgEudNKnxKWZcVpQfSQgW9GcvuvQ",
  "key12": "3CHC8sAd2CE29qkTy2AZhExK4Dc1dJVLNFhkFSzmWgdyRkSscfyPStng234Q8WUrQmzB7VTqd8PpDWBqsh156vFH",
  "key13": "2iNQhJ8euCfmdaAMri19G7BtBhzy6YZ4jpzmSKuLcWQweUmCKuq26ma3feg9vvxDoaJ42kY8XNgumm13piFajHKW",
  "key14": "nrpo1Yhnk2gkdTjHVLErNYovYqfVbzmbYukXa7afwwEy6DDwPransUUAVSVCiYEW5LNdkHEcDrzRhsgVBnzEVLN",
  "key15": "3aUc3RmSUVJHWTeFyAbUCa2afMvhfJfvMyxFSwuUFAzcM87Tdoxms1AN3KUC276M5o8BLSGiWbE4PRQ7hDjZPNm7",
  "key16": "3PX7Qox5dBGbgFnkc6n9dwXgsPBQKP7f3iWEznKs5NKAp8nYKtijK6NdUz9vsQrA56A2wu8tTeYA4XGsmN371B2r",
  "key17": "3S3ovV7mELS8YjRZ7dXAdebspEYceMCr6L9XfyqKpG6sn3FN2KH2r8krNQz18ETrADHqy4D61ac9yJvse2gZZNri",
  "key18": "4XbU4P8BjBsU63Ais42zWkpzd5gmebUtZzbxPjG7Hd3H8JVvhMzvXaD31fHrYV9W3PkDu3czPzYXHNrTEuiKcDfz",
  "key19": "Bze35pm4QqabAD4PyXorjVg7bCjz164tqY6tLoUpJdqakiKdDRMz1qUScuLQ1UzP33bwpNLVRgPeoLYY7HzWQde",
  "key20": "zP4nsEz4TecVY3ff3JNBMNzh7wfAP5BotC5rwy5MNRpzFmmtqSZ1c4gtCx8Gj6JHW8DtKsD28dqp1j6cVvNo9uF",
  "key21": "5n6eYRUkbqkNMaKzVEfvHLW6ekmMH3bkuGgBscxyB1P7qqpAoqfWDJH1q5M7x3uEopRqtTv9JDcLDNMweL9KPszV",
  "key22": "b3STUfVNRCkNAjWG9i988Vdasraqs8ftCMqxt1YLRWeaDwUcYTmUjfawysRswY4ddNVvshRt1SKn3WuT6uazQuj",
  "key23": "5ih5PT1eVwdTAJ6qLUJtxh2ViqiZLpHkuWBqdGt7CHPtVwQ54xLurTndwadQ8XJBjPmcWFpYAUygabzLzE1KU5g5",
  "key24": "4Gi9Ep3HsspyXyXsdNpKnu7QnwaXBbKc4tj5qdojHwxgPyYaNQrAujJgo6qAWFJtXJF7AFDQ6KWM8D5t6HUWTcei",
  "key25": "66wNgEqKvYxyPsQUEqD8992iaVudU58jeeAkTgn7CS8XfAiSMH9ZBndzSxh6NpA1bR43K5WQsMHRBXCL8Zw2VJLo",
  "key26": "5Wkf1W6FDmvDXeXXutG366ZfSk8o5awcM9GcoTNbQXqAHiYwn6cLSJypN6QrMPV3hKvk8sbHcMqfjPXMJamRU4Qy",
  "key27": "4q9osXYHA8DyaGdSubiQk7jTaaHaRt85wQfVPT6tgy2ZpNPmrX7jV2RApBQE7PNxgnzkHhKukin5gTxuQFsGeSnH",
  "key28": "J7r6NqLY8BhAXPd4N7Fi8tGZRjnf6MkAgvDicTUcRcDYftz43qnrUcWmyKYHADy4iU8Exbws6ipURJAHQMqY4St",
  "key29": "CRv35koRDbHXBHywyBMuWgrQbb5WbuuU6veoKqb2XP3sdXczyUESqq9CE1HFrZh4qjRqvuHrAMKKvvziJRDsHrA",
  "key30": "PfNshWHpRfgues9RkZzGLWPgogJbsjXMdqxdfX95H4GG432P5YSDz9Va6amh6LHGWmjZGccnZd8hSStNcpT7FaP",
  "key31": "2TKLSH76aujG2CM1ejTiQNf4wk7SyFoccYTrkoinECiRahKh9DE1dGsULbznghnUr7eWQC6LN5RM4Y4ta3gf1RDg",
  "key32": "XPHAwzT5r82YhGkX4zowAo9FYC4yY9exhfESmgs4rZtzX8HfSMx3C4EwnLqs5nFMGZLGj51AchGjm31rL6xXJfu",
  "key33": "43X2DBghvGYjafYSgC47vw4ntpj9SWsk964wUeRDsPQMiD8B6cDEfJ77FJjFp2frvCGApkq2JMFYzmxQQjMkYzUa",
  "key34": "3tnh4r1rzzrkEY2qS3v8958GsCySyFye8CKvHdQythpRayo1C1zS8AaR4MHwAuDNyJueocsGRc4ooAECBi6FiZBS",
  "key35": "3jBtDbaDzWzGDoWd9HW4U7hRKmaoA8xFLVBkB5sJxrnhNdi6a6L562Te9kH3KTu3dj2GeWRJ2tX9BXNeEDUWYtNp",
  "key36": "5HypU9NZvMKRnTpAogwENM76CBnxANWmxD1MMU5VhAkEQ4hhvocE2UqcUoWwzQwCyiDoLPYK8ACiAEKxp9Dz14zr",
  "key37": "2Hu5s1qvEy9Ln6QWe3MBVGQ4uTSSgunyS11n1khKMtNxxzKnb74xvpsJqM2YipjyXTVo4L6AJJnwGSuANiN1owFM"
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
