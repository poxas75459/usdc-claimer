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
    "5W9nJzTwzLAecDnx63KACJuXLFQgBdcZDfySvSdBMeJ4djKXEQeGUxbrzexQRW5F3DXajm4cweq7MjZfaAAuQCs8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5br8ASuPt8jbuAJcXED47gc1dR3TXGGUpXbiikgcN7MBBrAN5jUaBEkEmPykNxEeHNSAKxWN7KEVkHHGwutRUJ9r",
  "key1": "3jBW3fh3BzTEzVYyMjnWSoH65i9BPn8HoVd7fTr3QvFNUTph6zRdwNuQTvsDjk2VncDCxVQNYz5rEw2GyALmoExT",
  "key2": "2Zbii6q22rZ1pVAKFocK5fv1nAAQtAEubQnW3Zogh5RCXcZrnNZpWTvwd8ANHniSmss8WQWNr2tg4WoaPFXsDEXW",
  "key3": "47hMjW844r3cTGGMvwFwm6QLFZN6FMANRan1LHAsAATSen2pv8mE2XBP7bMkexC3Lar8argfKzBGtMuD775R6Cvi",
  "key4": "3fEv1irqMqVehsQ6pYrfTfzMmUqMS39h1uUJJZLSNhAZMurxycPRJ19SYFXDhZSN8VccjVqUSZ8m2ggo1B8L272q",
  "key5": "2LfgtfWNAUULUesWkpQvgnJFDt46XZaf7YbWNaTStjnc43bdtAiD6oHgUhTTTyNXR1nUe1Vkt9U8vCi6wMy5zBdx",
  "key6": "6476vD4CP95eAMrVwimZqW1Rxv5r86xWsk1DVLj4p6Xj6FwteBbtcTYDqmw2Wdi4Dae1btHGfhoEwV295FJWoRWt",
  "key7": "4NTV9D2wkDNifPuCd5eoabsNu38rznGcyf6AyhS3Gd9WFAdB9Tr9ZdGxZbfDzpgb8z1hwhkKTjAVaQmZfwx4E7CF",
  "key8": "5hkJKVHaFe2AvixnVbFfmv2LXbYmAPtHHd86q4okdAL5K4jieVNAR14PfA3btjnbaQmYStDEo22V86oc49ZdXEct",
  "key9": "by4Sc4yhj1r38VCaynB8BM2VSEiSQRpc5uShiGyBazBv7yzjwgaRj3tRiDkURPj2Undn7rrtMUhtLJvRGq5RGNU",
  "key10": "4Mfi297gzgG7oLB7S34hDD57cVmiiyVpa8HxnAzurv3ty1QJzAht3eELooeJED2ntQc4kk4svhPJqy5BqznXB52s",
  "key11": "AJ2mQ4RsW3W9yGC97KFeC5RysiUiyetUrzmfofSD5aoFAEJd5kZqQHQNp48Nx8G8nAAwBBVSAhj7ytCZpLxhaD5",
  "key12": "4xrMSeWs7YqkvZVPCrcXEz8MUEdQ54Ud3cyvtDoMMaGDqw7ia1Q3BG4Wmx9iM248yBKRRgB2qBLwyezn2ZnwkcPu",
  "key13": "4RTyE911HviLJs2zF4nZAaHYQqMwYMymcajvjiFr7xuzBXBWx6oX93keS6JY2imy2jJFfbVwnn7eFFKh9nZRsn4",
  "key14": "2Hw52zTYsyhGcW8byEipWoyKsk35wR1gw8h5zC8CkCZHRoJH9Q8ur7XdMZwMXNVgZperum9BKbXr5Ytxm7ofdscp",
  "key15": "559YWJCmPtJJvJsxVnmmSiBGqSd2wFi7AbD1Xj2syBYDCz7jaFxB78XDVE2vEy1JNNSr8xwhxxr8xNeVuamLnWo5",
  "key16": "27DNj7zdHHSEac1HNeW9mxsqtWSbYBF8bgt9h3d8cmwSk5KPba8HVuTxVZEaZubTiqi5spFuoDNGTfPPH548dTVL",
  "key17": "611Ry3ih4P52Zw8V6BdBbCuYnS2NURrNravRQKY4joDBbVXjEGHpegLexqXNuA15ufiQP5oeE1L4WAkBmrD8v8bD",
  "key18": "gYHLGTZ2VjoXnvkfWRkowqHsvjBtawRQ8yQUSJNzdJz4bpwXYAW2ZRRDgC2BJ8TstcH2JAxksrzxRu6CkDqHR5k",
  "key19": "5t9Gr6YsV3xu3G9ZJARiLojdcmGECCyuzAgoLaUGp32zG6VZSKmYafNcs35BythRqp2REESdpXANRosg6bMTfsTE",
  "key20": "3fC8pfB312fjYA1E24jZvza7QcQYo5v52FmwJFWDaxGm7K2KuPHmQQNm1gEvk31DduwZAHQV8k1N49SRNj6T8VxN",
  "key21": "2Bk9ShR6cCTr3TGHbk4X8XCCM1qMHb2HchRi4RuTyghGKh2TDxnuFxw9MSibU3DxNniC24Sp6bqvyaDFMcHnJEmv",
  "key22": "2R7gpL8JURvJsvxTc8a79Bv7XrcZYWmgUGUcNvv6WJjHpw6ibsSm9saa2y4xzmhdHrBhE8294uryb1M6UWXqcaXU",
  "key23": "2g5ZVvNsNN4JTMBBXwLSfp32w11s7iGN9gbiyB8SUPVzoVhzfpigDg7Z6RbtR8c29HeoodouREZWz9qP8ZBa2qvx",
  "key24": "4oxic1CcRARDUxwtcL2BmE3f2NhaHCFoDzZsr9UkTF4aTWQJAnjA8q2RuEs1qYjvzu62eu4wJFWBkKqteJMPKh6n",
  "key25": "kQ4mwTXA8aAin28o3sqAvvRL3xNAWfBV5tioTif72AW8NNgqnEecraykqkfSXn6jesiVk9cqvq6NpgoSMvTvH22",
  "key26": "5NmVrH7yC8KQ4AKnbs7mpoREDZtjsQ2YXBGNVuC64YneyNWZsGKWNmZ3F4yjkx7Z9qsmswfCtYFN7agwjUJo5Mz9",
  "key27": "4EiiWZXPAGpdYo2nuv9kAGsoTorKdcDfHV56SBkCFJhHRVoupwdb9ZaSyLv7XwvjGz1F8x7DVaTaBG35GJ9XG6LX",
  "key28": "2DwEqhUawovzMpaMVBSB82X8u79XaMy5UwKcwNkmaxmSwWP4MF4rPQP5r1T9bRnHNho8d7TgBUJdH9WB1DDSQBjZ",
  "key29": "2HrR4Tjdz14pasowRYFR7vDMbs16QhEgmU49pRdrK7M8vp7T8agFHgyDSizK92jiyrLX7Qwbf3XvdN4fgNiuk36b",
  "key30": "2XMUXPjXFCi5qAkwmzf3WX2VZpbmUd7LvasQrvcDX14bzKVsAGP421TjK7PD9p5EPzg4uEEVsrZJbBbcWpBaiWXn",
  "key31": "24bFHwGTk7WXG5BQqrqES6vm92NE8nMsvVwsSVqJzqhfQ4559tNF4Y6YYkVxAQz7gjjgpffMxeMxYUrKTbTofDHN",
  "key32": "3HTQ98pk9KZkgvG2QWukQA1z1efwi6tpGtP27j3z5Ucnm9we3ZzdgPTbzYEos8SwtM4FAJCdhQhwuSEeHYBVKZzB",
  "key33": "2aU3LXgAyPz1WxSnt2Ydh17b6ZdNBM62k5RUJyFaZirEqZ2kWewkgaMDgeYCK5K8ZEG1fbekDQMEcbjezie4kYCX",
  "key34": "28QRctP8aaZ3uM4YhKJSyoTUYFyhEHTPxzd1NRJa8dqxk49tsSR37a17M7rkXfN6fMvrRzD6iyjgs63XPWD4vvz1",
  "key35": "585Z96WFCguXfECssofW8fg11roiwadHTcgGxUXZn52ZxQjVMfriyXKjVRmsRSYUSkoLaDuxXf1gLw47zuu2asxM",
  "key36": "2fes8rB1rzBYqBqJTsThKB5m7D33VMJxiLtPJNooHHM36LDAKyPYcuizG9ZcXRGjoVfMJKtikzrhVGKHyWRXJmJ6",
  "key37": "4MSGKADgDCFKneBmaDrHzdozEKCrasgRn79xjqcxxQ8yam88YupHSDXPUiqztr45MPMJn9C6XGGZiqtR29xJHvVC",
  "key38": "5y9soQ3eTRuXnsLur3qit4qN3z41nqzsheEG1RtsZYquTYPKxaSjTDve56aM3dbANgSHBwVqNqeRmgL5DuKZqxW7",
  "key39": "HLhX2FXf25cbMXxhWXSHHx3uo7sBskPyoGqCtEyuu2G9m5ecJpAtKjE2K2oVoNnFu7SL8QN7bBbK7zwNB8bf1Pp",
  "key40": "4xixXjYa5YTGJZWqGgArvzXdmXTq612MeNebSdjEpZAU4ybabsGJJADkPQnN2sAtV5fr3Zx8kBxyj7GrTWzg6e8m",
  "key41": "5oESMqX3yEqNTMTiiMVoqTT8iGpMDnnBzU8nwd8uQCDJDaQWL7wmFg8HsvLwmHdiDGXJdWXfXNUG6NwcaCwRhuyt",
  "key42": "5RRnXckxL6U6UKidKkV4ipXyfmXr2XNBepodkVnDisyeSb9ryRrrPh9nmhRxePE5WwsQBRKzK1JiFK65rAPxQga9",
  "key43": "ASSLUtpQ9cUQ528vdbgD7NVAfXZQz3B1TWprSVj2ELPD6WrtdgH5WHXvGnt5QxH17JULYnQbeLd2thdKAaG3oUr",
  "key44": "2tBufReoLdi81z8uDNXgwfXgenoagTtLg8eEsMRfgrLp5HPYCA9gnAWnDUZd8UoNgMzNaQi2YyTo54wBEJWquVdL",
  "key45": "nZfFegUbxQAfHF4RA8NcyT1iXU81iyzAY6z6PNVGmdafq7MehAayDwLXiaCJAQbsr3d92Hcpk4YyzzCmcarJ61S",
  "key46": "g18htC2bxaTW3yVTJL5odQexgc3xKxF57gscCGY34geHHXChQQW5CNa5hsRQgfeUsWHLf2DsJ1xKjh5pGuHK6hQ",
  "key47": "2sVegFs3ioq8jBzkwMomz8c7PcQZzGFCNiqjVhr5VXyUPGEmvTBhTT2P1K7fjKci3yaT2Edg27NSwsgH7vPMXwjp",
  "key48": "2nKihFUYtsCDHnFwy4NJJwaxNMYuEQpoE67WbXEDKx4JLwmmxjR9xCLbCtSDvVoCAHLoyVrxhyeUgzxFb7NAqweh"
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
