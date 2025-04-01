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
    "SDjScJEKUiYZbRbQaE4mT2YsCWyYyL215R43ZCZRvQwtcFYUodBJMWQu6RmRhURzQ1EHX9wMzdoGEqr3fByggWx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nPJKpJ2HVn1DgzK9WzFXF2pB87F11rDk22ViZXiqii74TysF24jgBhZnvRPhLDLzcF8WopHUdAQjenawEj2oDyF",
  "key1": "5fJaaVuAkEhrEf6u9et656ZECCijC3N8uYHDhUkUeyrfSzpvc9HocJXPwPN6fPnPp2Ze1QKN5mAHkw5VmR7PJAXY",
  "key2": "5Uw5cmpEikZjHWg2szje2GwhXqjs53TgvSKW6bDjUYaTLEP2MWggvfuLLY5JRT2ky2pY6Wtf6mky8bCd2caxYJg8",
  "key3": "HVsqyoDE4FrEqZHSsgztss2vzJ9cbgqGzbwGKd4q4NmyNfT2TV9cGMmJv7H7AaJYhxdiezdFm4EkJdX5ZbeDzcb",
  "key4": "4qc9QTxKmrhvL9GLCLotZwygQ2B8Zsf1ChREGsM5TFfXBAJtyBT2wPEqFgz22H4octxRPK6JjEZcgCioTREJMpKP",
  "key5": "3XeGBapn2ZmDGG9Ysu3xs7QiEWkWu4eRC989KKw7cQQYi4nw6MfFkohAw5SM22LQy9nyeMyz3CJApibtGishZ9Ww",
  "key6": "4WaVTGzuYneLmdo1EbJ51RcUhCJsaEsNmADGTBGH61x64L9JWXthcNJoKEiymPKrJEqb6aWZaVNRo95mEuGSNd7N",
  "key7": "x4BN86y2P9mKSa56ETV2Rvt7d14X4g6SiJrJ5HpqEsbvhGXmcPPzNP3EcnJr7tFe2yKVrTJ8vcgNKhGDcX2HiMB",
  "key8": "47KqJF5erEsALjaxn3WmTZ48uX5VjcwK7mZ3cbdPTLmhFzxDbagRQCgfaDQoQzZmGHXXYcnt6JWFTyMoEmQxwz9D",
  "key9": "2XQu8Mg28dAAJ7xzvKSH99JGYfMq3ZPTfNpnx3hCTgbh7nkr5YAcCLp4ni56big4vc1M6xJsLoEJ3GvS22r7YNCb",
  "key10": "H8EmJZNdqAKJe5jtt3FHrsCyU7BmPuoxkPCosGdgCtEh3xT8Va1YR3duUYLUMqzDU8BDPtZyLGxEJc6mcrbx5jF",
  "key11": "xHtQNLcSBLPRNaeswndVYiBeAnJpgXQV57Jhs1AzL47gJ5GmUAzTuDzGrb7AHb9dwQJ3EvgEPbvCFFSh1fhuP96",
  "key12": "5N4fF8QvBFJPLdubucq1yaqKwieN8zPJkmj5ZnQnZUAZNbbwRNUHvtoLZ9b12SGBbY6tHcuMqNDrFg2hLzh5yUVT",
  "key13": "3H6TRe8kZt5WGSP27yxyusV1b7Khv5WZWGgWnR29NLA5XKPcP7g312ZTmzJKJbctUQrZvJ7nDp2iNSHxvvcFxW5J",
  "key14": "4x7U61YSMZTs5aaH59xw8PUCm3NiNgyPppp7oQpaDy9WcW1PAAkiMQHpodSLZgr4qofogvgjyhseRTp8Bb4FUYzG",
  "key15": "63sg3qK5zLrU36y8Yts9dNTAjTth4fRGC63WqGw958eeaw4rA23rTsiFp7yZtUhsM3CNzpFYyrQ1EjSfwFGEPqJX",
  "key16": "65xqUr8iYMsiKgtWUPVMF72RtR6FL32BJ2nhyfhRsu1HK3UuhBvHpBPge7Ku5yMxe7ommUKpCYWQd8pKMxY6RDXR",
  "key17": "5692dsrUX9CKkVBVeeL1dhwhiAchR4ejuFZf4hVw9ij8FP3DcrUXHm8nZUWmvhQJHHDe2ZPLpaRWjisFr5XKuoMJ",
  "key18": "43aGf3CFB2AaJVANjorbUzVJmPHQAojWzA7N1GtQH11KPk2RHR6LEXTZ4eYSCtg5TVi1VqvnJtsjn9cNMrUrm3ef",
  "key19": "2JmUKdu3Z98vjafZgbWYX29t6KbKgz8ijZ92tWS49mFfAKbEoz1KMsHLDcmTpUFv9usV8Jzu81jnrmffGMJgq1bE",
  "key20": "yCbizE8C7C6yKcMkQD2ZB4P6D5dqvP4fAYjfs1FGDSgDw8Yjrf6juQKah65NuKmmhrvom9EP7rHjgkKA72RvMND",
  "key21": "5U2ineejgUTzxNkMoEwmuYmrL4mmAAWPFD3QZ3bJ9dYkWqznbnBeHCFLAn62ptPHnMbWLhzPsxPXUPfSdewsaLqq",
  "key22": "61fmpvZgWGEpeR1BtvtvZBY8z5KumzmTRW3utpw5qafBBSTJX3bsBkusLvkR6W1dgnyYzXXcRJK6maD9kRPSZycj",
  "key23": "54d7rYErC4xxMxJrc1Hc8p1hBKxjj8UNoooj2hpALxjFVvRwNxQYM7kKkRropMCXd1xoQLfvd3wsbbkWyxXjzhA6",
  "key24": "sg4tQktFVJuy2TVUegZJneTjTxK5pojwYwDKeAUiV7uvTWAz3EJSw5MyCiRbt4F2dHBF1C2oZBrYm7cLzDP5Tqx",
  "key25": "fLNy6k1XQQT1B87DbCaquR268f3qEsnaATo4fmRYX7qBWUfS1hCRANBgEy7xa1Kd2crZbjTngHL7tKBQJA3UkL2",
  "key26": "5QueQEMxzRAVwVHedGDQPnioLZz3hyXeFRwjJG3BvzAf72DC3xA7X4hY2ApxU9A7bx3LABvYyW4dreBtcFq1AzW2",
  "key27": "4LL2mWo8iR5n1NstvC5MGBkxHP2byCiQMQyyALGoYYbdVnXkVY3zadXudGqyat4JEjYgxbwPtvfAX6sALkpF7vqy",
  "key28": "2uGQuoFDgCBHNe5AH2d7A6xX98xWLG9UfA4z16q6b6kcRCYjrM5eY2Nha4JLFt2iqjnYUaJNWY6TvKE5jjViSJik",
  "key29": "4dmfrKxjQsySxvbcDkTQZFugQtXZ3SJeKLkRZNdhdAx8EyJoGEzSupCYTBW19r8sHoG9Ejno2FCb5bBWRSkok14R",
  "key30": "62bwBChrRDyBnPFPkDpcUbYjYHv9YcrgPphHyUCV6qSYX881ZAJ5mm7sKi4ueaNFjByb58kViJLZKp11V72ENYLA",
  "key31": "354bV1uhA7f96HFnvQrZpNtsdYmQoJfrX1TEs36Bypo4pnQQnr3xn5kAm5yKvwBPFbgtr1VBCc5WSp18TzpenAye",
  "key32": "3RRayYgf9V1nMow6iM9J83LsGnZyUxGAT8YnypNVDLMvBzgr1RpgcpsmCAeQTXdvR3iLH214Y7dYurWjM3uyLgJT",
  "key33": "2aqfxbVuHoH5ffDYNNBHSubiYKYv1fY2fY4NRN8UHnoQCBdsZ6Pw7pvSU6m7bRezbvGpDAC2k1DgRpHagbUuHNMb",
  "key34": "4DW3ssfnQ4pt2pEJ9YA1Y9vqJuakpSVmPtB6TtwXm7UiWzYMHfej8mUuCas77YRFmKr8NfT85thSfHuskEgRoih6",
  "key35": "vxdAoNjymKThXdQU331xzSZWEM4r4tecQXfDCpduEX1V8U2GZ1zHxY3gEC8ni5S1YuoQMKFDKL8ZDjTM2WRp96B",
  "key36": "3aX87nxzbunoGgog3hY2dzmnJCrqPJGHwBe6ctJJCoaM2LQLfE9rNr4H6kEnWU9d8wqfCY9Nq7P7QwwjhnvxvMJW",
  "key37": "X17hATuNDbE89tpLCN3gMv8u4bgChieJ5R7nTjfaQnaULMrM7S2xDkyFDxSWLfv8kVL9EsDzToZBAdxz77BDKep",
  "key38": "21hyi5FTxndF6M2FbWuV8Jj8WhwVNf6QpQ5LKML3kFHfayWzdKyCDC5cYAoNTmX74deEg1AJjjnhbXvs35j9YEaw",
  "key39": "5XzRnesEtdpJscYFigzdDkrULhUKphTAPwiqXQ8PoQ98a4NhLjbEbVKqcGvsWwGJezooTMujurPkpGyLKLbtC4S6",
  "key40": "4NLn1wjnyQLhXx7xXGnYJGRyTQ34PFxhH5wkGdtX7FAMrsKdgsT9JyR5tLKwMYtP9tKBPkpKYt39CBoVisrWHwSb",
  "key41": "3v3Li8N6PHKSTBPGAGJ5rVQ1FX7ZdLx5Mg2bGnSSiK3SZPenaSpgEyww4D2H9u11YWStosZ35nFQ5StXytPnJfJE",
  "key42": "54vYvuFcHnGfFWkrb2bxuBaBEBxjbXXfZ941JEFjr8jfRsPZz2WvZhm3GYJ3gv9vXfCB8q9xZE7e6CjhAwFMZNQk",
  "key43": "4WU3TFWo4Zm1zNN8XihHQhgmd7xi8nRovroLWPVCpjBdMEQn5LchzhSVcACECD7nURPBSs6QKL6711MD5RP3EarE",
  "key44": "5r7V5KN1esFqRT4QNvV94Gd97XPbV8k8u4Az8nRGxyqnQ8rx9Ka3THzjYxMTYncphUFrZajo7Dmg5g3xS1DEet2u",
  "key45": "5fKrvYft56epiFoBzqXTzgwH48Zha2RALP3xAiERi1LZjqDpPsdkgZ53p49uNX3SX8SNe2phJfmr1BAAD6g6bnU8"
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
