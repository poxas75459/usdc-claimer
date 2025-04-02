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
    "5GFLo6h72Vi4QPZyyoYXdoPAQ2SqaDcHG9qMNZEGBs1ThBeq37PybMdhpeNSapCmHFSeEAjDkTDJCSUUztQJFJQE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2L5Wb6b9P9Wjx7BC6nCcGeiccrtNDbET1d2pEkHN85bNBqJAYdUgftMzfwmMC4LXG483XuvtDiJmKXp1F289o9JT",
  "key1": "3AjAyirEPfzSkxdi2HhXqvNof6NiKFncxWwJMNs6Azk5HeugHxkioHsPidNJLmHS2BzavwWL2U9yp9bu5zBeEUoa",
  "key2": "4ApF8hdsrf8Lr74yv2Y6FhFQVnH1DNshFEAp6WyvNyBHnPNs4w1skAH3TgSb5xv8JJSQpJLkR267CtXWNY9Mc4sU",
  "key3": "4n5FQe2MRvFYZQzUQBhkcouCA1WmEQVD3vzkyTQjzkXpz1rpHSzsLACYuX2PWd9rMkFkC2axxy1Lnm8AuRviCCSi",
  "key4": "4cFWzyZaaiLJEins7di6kyboFk3W77kYCwHurqoAJvqAEL77YVXCvojpsECwSYVvUPvhxkw5dTqcBeEMJi5ViEiW",
  "key5": "5LBAufyp6FozTPmLoH59xiwgN1cj3sLzpLbLeBrMVGr92uBnqSEwi4ZahKH4VWZsShic4EcnUbssppMNnd3thefY",
  "key6": "oRXNsEy8ZhDbZFtFrUXFyDedkb5noDAGGdwNgo8NMi8j4BmWYypzLfHs58c4y81d3K6dQ3qh9Y6kkn5TA9g2F2b",
  "key7": "2cesDTsYoVKtHRxb6d6qrahUPSDhpixGeBioB6M7Rb2XguB6AGh5e7NSBL9WFY1qgqUb5oQuytSGXrrAnc6hfkW3",
  "key8": "sAEiR9kfZkMzhztVFdaCiyjaVG9KsAG8398BAvpXCjaRUDP9Vb8reK1ZVHFYfz6imBP2Rqv6m8joBLDQsNjuhza",
  "key9": "2TEKbZn2wHdZ5t2Ump577LrjBh4tcAsgiViMLwrAvLAn2eBkxYKLg4gTkVY1sLKpUUeEHnCbYDz8vqRL9Ff1GgET",
  "key10": "UmRbnVPUv5fRKTszqqvsGq84DcbbcQY896J5uAFx8ADN8YcPRgkPogBuM5Pj4Wsu1wEW1UXmDEAs4qufhSFXzBZ",
  "key11": "2k3PzM2gQMtEzo55NUjHMpetWLkN2xY8JbA21h3GWx14HP9EEa2CqV9D9kHjMsgQnPKSQCDh6aEVgVrbFmhEBx7Q",
  "key12": "3nth6Npy1D6BmVPybdkuVeWSZ1byHRSw9kBktWs6eoHfkeoK11rbvSZGqzWsU2C7YvcZhWHZtG3fB1TQgm6djRUA",
  "key13": "2Pc5NpLq9wq64G5a1q4mL4f19nyoRphEMJcfZLBqV5FyTpeCL4ieYMvkVPyRwTT1xYxy3nFzSXoND4zcu9e4VXN9",
  "key14": "2mjtCKeUTdPeqCeCBReSFgz4CKPYkwoiNgmpqwJhKsYRaXtfwyPRVow85B5X6Ekk3cVzipPxy5scaip4veNPxkSZ",
  "key15": "5MvstVV428wdzcvMEWe4p9rsXJKiM7sBRbiMNp2RwDMbPNyfqaXt6YrLvpviAzyBaRD9Bvjo5cYZwbEbyDd13VPZ",
  "key16": "3S8tBuuMkSCc1vM7z4kxgRd7UrtxAXNghJjEhH9BhKdBZudweKaESPr9tR5h7gpcLnYLr6cwZgSdXSr3BFvXG6c4",
  "key17": "3fLrjP2GKruV1b5gTU6vvCg9jk7KQNR47FKithxVL6rxWBi6tg3GBbqwuUVhMewHp7eaqMg9AAwYy1HN8LgXF6SZ",
  "key18": "3f1GaJapDN6aeE1aCub5nSiYDCzLBeEoFVe1jikFMieoiVrSpb9Rb3gJbVuyw7iSYmYq1evyVxWtxu6xz1bQFnXz",
  "key19": "47hsCpJXe74bsK9SWkrSREj1sfNPfyzjxKsyrVTWQJdAbqyQY8Ky4qv8Qaoir6eCrYhRzRtNDDF3USUiHmdfxU3o",
  "key20": "4uGWQqnbepRwLYnhqqfR3rm59ignP7hHMqbPEnPTiJs3MiaBFqy2urvpKng6ovf2fSkVEsBDmXvATqppU2aNA8Eg",
  "key21": "3mDJLUKkr25BZQqeTxSQE5wUP1hA6nD5Sw1cMtJMZXb4b41QPee4FDthLRfLJcwA2hQzAudCbXWMkFUdcF6CpkJN",
  "key22": "5Nhc25CEYih9TUkRDkFxyi47p9tsDtwgx4XT341jV7unuyUnRJFjhqAEZaK7U8U2vwqnQMG82Jx3hifUnuCFuhVs",
  "key23": "KE9Vt81DUcB2To8qh9CVWVLsKxxCYpZkdzrKmEgzvNrXhqDoPTe2BqhFwnXHU93VsRNA9hA4vWXLuG6F3NMQQFh",
  "key24": "2PkoDJe57ZnkJxWYpYTWkQguJLqKvU11RH6MUj8Uz8FnZbPkY3oPXsic8dDvZVUHEXKe23vWjEw1SWDv9XY3yd67",
  "key25": "5VY9Kc7oHsEygKhvXpsWX49yojZcoaht1isucEcYfiScC1FhDESKfu9JK4ua5NJAhhhr6GqQaSwZ3WF2V8i9M3BW",
  "key26": "4ZzHjv4uLoGAZYPQ8xu5HvcvN5EukHi2guoPXAmCtnDHZ29EnLrNgHa7sUAdPUDaY5MygWWfSWjem7CvroUZZkRv",
  "key27": "3Kj7WCdpGzdqhQjm9vQ85kVRYdENeH2pWhhh9E4mp2v1v3r48PW8tzN2WEbGNTmF3UVU7k42foAgcCz1biXiL3Xd",
  "key28": "3kpmaDvh6D8wC3sC1ApAPNDp4so4rYJp6h9HZetuWAQ3bAUodqrxG9sRm4sEsqNfzqqgADZHqJ7ZPtz7GeCNPWyB",
  "key29": "3SyVHYTBcubjNvDgNcCUHSqjEJpZiZnnbgPJLKbe92ANvg7bGT3JWBgjgRkhzemR2ZbqrHDzFr3tMp2RCJun5kzK",
  "key30": "4pZyNs9pZDFJb5HHQmqyqYvRVUNwXqfN55ytU93KvcbpdbRdpbJqLoKbBvJCfU1KsPTguSdxvYyKFLw73p9SpzC9",
  "key31": "NWePoB79LdBf5PJ4X2gAvVzEwH7U4DzhBLgMAcfB3FPuvLMNHXJfVLL1h11UBnEwt7KnacYaVABhZgHoZMMmS2n",
  "key32": "KZRrCjZxr6npDcjT5ESWLjM62hMHxtJyDKNTwCA6p3xupSt4JE12BWdED4SyJRT37D93PMBaZEAghTqzvSB8RQB",
  "key33": "41cERM3F1f5uCupkZzQhP9jGAgAbsNhFeKqNnngjkb2Xj5JYP7pSXWDF9tuSHvgjtr6XGLL7uLid5f662weXebR8",
  "key34": "3vhL3CThNWnCLEDMtywEkHNaTZNHCRezpsVCHpdtEX5EfinRcTG93aLa6kzetpWhkXQK8Es7yfVAPABuWzaZ6s4z",
  "key35": "4MyMcQieX7xCvSmYmVbAFjWgEoJHZgFZtw7XQmPMJALdfvMPQZ2MQg4W89w9hHvDfjMauwUCoJGLtS93QZidfCE4",
  "key36": "23Stm2TvBZok1HLMPLyJFXDa8QHiGrZfBJxxxPAr67q4LmYxh2vneTvYA8o5etLutpkLHK6kRBAdyi6yXk9sU9E5"
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
