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
    "3ZeUVuPTUYd2M97DZNhyiGVjm2Ahd5tXRJKy1kiixMVuWXCkZmN219AQGfAKApAS1R46BKJStfGpdbAPscyEC97d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "521kceKuzMoSXVYXx62aD5s7WFWZNLA4M7BWBbSkcULdfeHeVwiqUUELpn1iR4StswPcNkZjaWYs1n8wz3nhtaTR",
  "key1": "4tXGKiMFzXPP8nor3iZijah5bWSDbQ8iESwq8NStdXoqGwFHr3RqL9UmsYxngUfcB1kZjdFxMpVFbSttwi51mr9r",
  "key2": "a9Qaykcx7MYb25255TRPmk5HG8Fu9zqf34FvEU2HnoaWLVKPRhWQpqSmGXtQwiDyabtkLZNnB6GRP22MSvTDEps",
  "key3": "5ajetzozjNsPULg14GFU9hUeTG9Z4Sv48xqrzFwgctgDqy2vRb2RvgXRMmaAznsTGw7K9AqQhkm7s37JF3P7Ke2u",
  "key4": "59C9cx5Pa3P2QYLtgLWPQmwWxCCcoBzNhtFjCSfFAnVuMjfNHDCRmdkqtTGxafpvQRzDG2zdtgADzkkjKjhtY6bK",
  "key5": "4bgyfmWfWwJYMroHCkhhPMFdkXfnYmuBZTWHYLGpgSxj1aeYupn66yz5KANHJbgSaMpLLaJhKdNu3g1nLYDMDny1",
  "key6": "2oiU3nNjN6zcTuqgCATrN5ww2a2FXv6igjDPL6ThVxX6TSDhWGCEvJyKByUaenQxtqV4T5G7rKWpNQaAVnMLCoPg",
  "key7": "5rCiKwo26CY1k3quc8JPdEFbxujDkyUo2Su4HCoFYFvRcf4t4eSA7WAFTBrtCQoei4yspnhvFsznexBko733GhtH",
  "key8": "52XBeGdNMA5sM92pJMU3XVraJFNzySA5wiTdEbF27SyBAidTb71Pw7ZzAQLKbbGBGxznc2MVvJAca34145c1hddo",
  "key9": "66wGKt2e1tY94CxgQGnz5MerH14xeXXE9gJcfBLJEozsTfygA3AeZP8bugHxewsevNrEVjWqLMqGGj51hhMTQQeS",
  "key10": "22iUmgF4RPRopSATtSkY7JWzLiiaKNgJ3BB193bgimYpTza7W6ay3XvUrYmydwxWSkLGY3c8rJv7sD31ArhBmG8f",
  "key11": "tgh4of1DAUGKFe89xiAEAVGBXDbzV7Ynaoj9ZnBqD3pCDWj2erUmq7ciBMTHM3QJsEXE3hMtaPRGotr3U6MRzsY",
  "key12": "2bGg4VsMCt5dDLUMemWGsZx91D7iqzrC9NpNozFRXA1Q45sF4H7h9BX5SFEPSoS7ZaQxgq1YCwu6r9Ng6j1vxC8G",
  "key13": "2u6D8n8Ysg7VRcfGNE7LWKk5dxcEDbE9RWQxurnA3V49wEU7FmtHJ6Zhjy8MEGRN49UvPyoZjtB9bAzBYxXsZJoW",
  "key14": "2g4VKzZjyh7DD7KWxibAXSjnFt1Rv7VYkvYtT49ZQ8jSFCwG3aebxrmTyrcyBGB6YAVT8wmbU6E6fY9XCvqs5Gs7",
  "key15": "5DUjbTVsDvywWg7TNQb5s4JXycfBfgCAuzbmpprVvmeHmTmCc2BJG6kP7DFVi75D37VgiHitMkFQLoVY9mcZwG1o",
  "key16": "2QZV3BguBsetmDrNhRUt57PCYkuZ37z1zyFPWCB9vM3E6FMbxUYUsx7HXnz8Ve4audamLitsNRssk8GoFN3jHY6b",
  "key17": "4TdjSgVRFqsbKUvoonpLMTicLAmKUZLdUKFzZfCasJQDYBmPWNRGCTCJhHskB3FqgNVsg6WCv5c96iXSU7xp9Gtb",
  "key18": "4WQ8m85Q2dudff6y5j8xN2jwP7chkNKvXq33BjwnUjUZag6TVivGeBfuthssuLn6tU1aGsQyf8YwSPiCwJS3JBRz",
  "key19": "Z1HkDtdRytb4QkNBqknJqKeZ6pdRwbBUG5wT9L28df85QFSCRmkdZ1GeNxxnVogUNr5EBcHtnqGcYUfHfKBLHCQ",
  "key20": "UNV2nATj3NnNTjFmrLXSvuhyAShVEmDYo6bqaiAs4kSXY8jrXVmsDvSe4sEZMicd96MMMKQ3pTSGhr9ciPjLZLv",
  "key21": "5fnffdXBEZmBmseKNcuw3aG1tAiXPTNaa1Wfo2SVMPm7scBQBDnnKUCY12wuGx2eXJ7d4GV8PsGS7D3XYed2v5a4",
  "key22": "4gM6zPFyt5T5bh7CMq6xkgj1GkaLby4etinZqTYimoZHUkkAk2GPE2tc75Y63KVcQGwBQNuNyfJFVSLkpbJzbmeZ",
  "key23": "5CnQyEpsk49XrdThFj636x56dfk5kQDhdJ7SoNHF6qAZsykCqnBFu7JA9fcFspoUU2dKbf9QPUyK6UCPiryuDDZz",
  "key24": "4x2b6mj1JmDGCUkMyZA11LK4CpqDLGng5qw281XBNy2wEJ54NZeSu32deegx34tC9kWfsmPuedDWqtFtvHYRjBYm",
  "key25": "4A7UzNepf75RdCGJqF7UrmxhQvvizavrarhxo4T2MNSVbG1pBjd6GVjAnvPpBhski3N6rWo4DsT4n66WJgLsxsHC",
  "key26": "66s5VfPZXuoYYifJ5KMHgiTE2ornSgM5KknDAz9GvRWDsoax99bBLuVLnhbfgcdZToK1JsN6tTQ3kvzZ9kiatNVs",
  "key27": "di7Z6RjXbZtSHzJLiLwJtnir3HGbJA2r1B6PBXX8dbBtH9patyTkb454pLztncP1iS1qRC6DZ59vEUwGMKhYEwR",
  "key28": "57zxpaqfDRHMPt77wrWGdnAuCDg89AgVkwU4pq4bPgoXr8F51AitDrzco3hNshR2GwpkaFWt3cViFdg1Dv8MPPfL",
  "key29": "4yM34BB2GzpRV3YgpM2w7opbk7meSpdLvkpyhYjTusMdGdg2DaPsMjw8omoFYViaDiMEq4oFUcusoPkpnCmrA893",
  "key30": "Pc9i1Y3175jRxTVPBvbV41HXscGCHMh4KTMPaywE7qk36bjZGjCptwU9aWMLmGcQpLjnJ86KpxDHkNpiUvCUDk9",
  "key31": "3x8jFjBtdt5KC6LZ2k16fd92AXLLu1sgrynC4tj2D8pCoe1hAsytCzsbC84tKkCwvUYcHWc5FmBPctS2N8R5z8o8",
  "key32": "2oy94Db63wDaGtBFpPdqi37ga9d3t9c1ukvnkhcKXEhQUJbooKtqZQNV1rE4zzbT1xiE9HRaFtFmey5LJW3eMhpL",
  "key33": "4k3VBf7uBPjKoLQc8bad5AknZUqwNAF7AoJ6rt1VJmkCmk6E2JJnhffiW1JRQ8hLoCU1W1rdi4chys6MvvDDtf9L",
  "key34": "2LnWLgEn15a3HHVAjqC9QXUtvvBksKQHfJhL6ZKX2fEWbT3qWWzmx1T6At4xeQR1pcvfGMf1wVkSjMZVTtMotrip",
  "key35": "5kLFJKW5L3EEbeCoptFEGEzZgQ1TawKZTshGC85WRgZUfqN4t15MnijQK8U67VbhXVVtNDHFLYfXKL4brLuaCaqw",
  "key36": "5yUMSbzoDSRhq3VGY4UL95FQGCidFHTcgyku2TGBwxbDGbNpiUGS4MwUuX858DURmupQ2vJGXhZVakTfW3LQTGbe",
  "key37": "5XnU3KwrNnzAQPmLExRhTmuB1GdZfLkQfMpJTsv5Pum2dSpMqSmU2Usj5qpFLFWRkjFwuTTY5R8YHuwLidshZFBw",
  "key38": "35fE2GFi7ww71AnKqjtGtqo5zh7K51wgqP5YqPoe2RfFPwmQSBDCuzea2QsxfnkQCTUoTKAeBppra7zwHHcytzqg",
  "key39": "vFrao93YChMw2oTVoT57jVwWYRdbkKTSJUmfz55PefbmsqU727TL211RXt6cr88eHtg5WdepGLKVCnSEEoptBdd",
  "key40": "2NnZkHC5vZKoct6gmDwncTkv7PP17981Z6mRk3EVvtqaxmFJykWpya6FCkvPHgsbbUS9mfCLtDqaa9YBvqAhC3YU",
  "key41": "34HuwnRaJAGRKrSHWVnNTwiQgFH2nNE4rQ61LK3HBartQvqhGepw1F34miVuR7TdYB6bjikDmDD296HjG7FH6aPT",
  "key42": "JarHwS9L5szrB5i6eYVVJNye1D2xLLvJSCr8UhAPXXtjXF6Y7BZ7mStQZTdThGUq6ttcWazSChhFModsMTP4Las",
  "key43": "GNYwTL1cxgg7VLriKyGaCrvKDrnLJXC3ysX2n3D6bz1fdVPXbExReni7GKbw2De4RCNSg6k79iGQHKW2Ygc3VAP",
  "key44": "4SQzGNw7WDE3hdCVkRFGobVHR4zESHUmwn98fdrpBJ3NY6F1cU8jv4eXZutAVqmZUhE3FdHZWhEtQST6xW9QCcBB"
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
