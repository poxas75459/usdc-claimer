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
    "4hmDnLdKEL75pyarsnwSW2sBTSrqBapwWJeb91ShnYfwdC6UHEKE79KQb5G1XM5baw4TYiVDyWVzftRsKM6jhGer"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DHQQpnLjnPjSUR86wdVSfA95C2JyABRpk4X4MF6krFZc1KFaPfDLAENms5iuFjB76qTF3hsnBf8prtoHKACb8ra",
  "key1": "59XouBo7hYaVQv52G3N35AnYsak5cJneMBwZPeRNqwdaNByHs7eskAvFWtHdHyxWLBwK5iKC35fHmmhE3RFkrGK2",
  "key2": "58g6AEwBGxRtoYBgHA8vF8kPwrDy9Esvbs39TbsiULmkZiQDgMVSpUuWwmNZxBSPjkHnhQ2CCBvCjjMKncQ7pHMY",
  "key3": "4s1HGL11Lxc1hwCtQaZQMfWzeuzubFs4Aa2BsvQYFbnV9NuifJqhZFMA7boSPxtfdnqL83YfE2KviMJjpic5uRwc",
  "key4": "2258P1wS433soFUac5QX2uJZN78AX3SMYeEWdr7FGydDAkBcbLBkJSF5gN1RZAJNowSffh7fX84SsdMAsN7SbMyg",
  "key5": "5GMwVDHK1yXEKVctPUHpFcrMhzRvetkFRxh3RmKcz2mAvFWQaBTZKxNBfhMKho9T2D6geTZDXXUiYF3SrpcqXxqo",
  "key6": "5qFbg1s4gBGTb72pVX7RKJmokGTdjBpWcANEYWPw4VhiuCRBm6y3MUQGYW8CAKtR1jH7fNM9PhKVVs8tsAp92kwH",
  "key7": "3X4ubyz9EpfesdamvfEqRmx6rjpBU7YDGSo5miF8owpLVYg4N3GpXv3CX2bEfEp4TYT7HEEwzhaLFU4j7ezPBG6r",
  "key8": "4hM2cxrSyWrLPJzpo2PH33RSa5EPh96atpDBNk18TodddgLtXdH7mBGs39haX9BQY9pScdsViZFjFcsz73qxeegL",
  "key9": "5UE38L5BsYBD1hMfqH5gM8eXFomKqXVSoJG7UY5GzJ6NMgu7iKufSSkzrZBsXpUe7CcHzrwNmw8nNtU8nnfhLXxQ",
  "key10": "5vdbXR3rGKNWpZcWyGAktBBAq2JvUaLDGGQH9UQzfS9foQHn12xCfUy8Q4PUckbzZMqPeiGubsLMbQv1ZsqjA9hz",
  "key11": "59JaXgsDLKnMicF1s81cdq5zqc5oQRZKTM5JmEuF3AatCSsJz7CugPRBPRgQtiKUeYBim4Lr6RTjDajDDztzitV4",
  "key12": "2FZ5g8RceNHt3hL1ZeHzzAJCsALpXwW7VFAc3TvSvQQeNiq8XaarA1K4tvP3pj8FrsYrmimLfkhjgdiEUcYWhDjx",
  "key13": "4qLUpF7rGyW4k6UhtQXGwurxvrLG9Tu38QjyTcn8aqagp3pDNLxM9oTaWPok1n5349yC4LCLV9HC6g7421z1RP5J",
  "key14": "5kbLwLp1j39vKHzV1JXPWnazopfhUk3LmZYMMMyRYi2Qc58jo4eqoBV7JtMjRs6sMcWwgnTafVZz4wJYh7vgYZX3",
  "key15": "4qnkGf271QfCLDKWn8jRDtzfiS3d5aAWWoh4NxmS6JEBvjwR8SnLiJ3wEekBpEbJYpF4hNMD6STyQvPL3YsYA8Dx",
  "key16": "3fHUSc5E7ny7XCqGoJZXcGgmgSYjSdTPRhxpc89E6QKJucWWWVDzZRbmbCJbYTGfgnqHvYgaWsPXcfoa4da8rnMR",
  "key17": "4SgT912cmHpStnb5unfVfFx13oXbBvkNT2agpiFMoiMBFXcevXHPgcuxeuEqCkv8FZqCthwXq2DeXJnQKwQBZ1jZ",
  "key18": "2NNRNpVQee2pWwgsUzJriLupSMm9mGMkCxxx1jgnsLsko8p1Q5MZt2pzuBH3QvGJTjkjJBe97599dJW4MvCM7kDN",
  "key19": "4wsCGyYzE9xT6hzzAJzta6iVykEBRfPvhrKwA5FFfQjxyyyR757zV1EUBakxJnJmPdPkDYPTrNXVf218CFGvUGBf",
  "key20": "2uVDAtaQZsDaSnRu4HkpK9S6YshxMBERvmjeTpbDqoR4q4i5w5eYXJR8DiHN6EaezKkA1iNnX1utp3mdES4Le5zs",
  "key21": "4WE4jABMumcA1jMm1TTm9PWLrmq6HoCBWf1yS5MoBSF6yS1mr57VqC2WFA26iwZ8fXvutaRgTD3kAuGSLRSBeGeJ",
  "key22": "5ZmECbBvswWrZVLHca68e9JmtPNf34PeWZeuQA6Ej6QcbziAkt7eWAnzzj3cHXvRj3f72sHTK22ngnBWjhejzTNR",
  "key23": "28gE7bEv6C4t5jLBUEzgHggYVJGeWE9hp573xwVzzm5rijfoKMjhhaKMd2GC68wPuM1LmCZWMakTH4a7NGxbkZ8X",
  "key24": "3qk1TUPGkLhqh5tcpZFymtmAhTvmLTz8SFJfwLZsfUxW4a5q27oxgmbicg4vWhNorEJ79ZVEVSVdbBD1eUknsJpi",
  "key25": "432zAkZTmuiAEMa9GemYr5CYyZNykE2cuPmtCm4iJynd2mmeDshLb9UiRSpwdQXeeVi38YHiWyt4RaDVjvjS15ed",
  "key26": "3BvLoVnLR6wwy1PNZ15Nqtdcta5bYUx735DDXiFKUeo6nsAovgwgg1qLQbBsMvodg58kUmYoUApKgLZXxnkkDEnR",
  "key27": "6LxYTaRGxxBNJC5nYkRjp1tK8LDZV4a7BTUhAFaZ95FnBRKanifPWbq5KuNcaoGujx9bdGFLmBiS3tV7XPLwSFE",
  "key28": "42p5sokufUGhVTw7bgbuL52Y4vLWo2F35KWPYpxYhaWkGfZxXve1q16r7NB81jpKpzZ59JCYohVucPCnfJnavCm9",
  "key29": "5rfwScPCEEzSDuwVjwuv9UM1tJoKPq3WCtUdb5RyX5UH2fhcadwpHvXgum67eLBxVzxfa1Xbe3My111FbJKkuLoh",
  "key30": "QJrSCegpa25vRirG182auDGTWFXjCkgVv6mLTvymrFsYJTZvg2Jv7qHHEEPdX4AuSv5DPyJ6GYqt3X11HD1eSgR",
  "key31": "37PNRCbi4XPzA3bzDo8Cc4NXwuG1wGb15H6fHs7xuQxvQvn7yhVAqja2BiRtqKpXw4Jxj7vZMGx2CGedKoNtx6uF",
  "key32": "48v5R8BWXmEDwgcMtgUC98m6gsciYod4V5D5JDg9hY5MXUkz9b99QL56EkKtCd45Epv4u5orDtoefa5tfcCU1qRq",
  "key33": "5WJDt9YazNKLFe925cKLXpJYL1AzJWu1vYvkQ48HbvrTbYikqMSk4MTLFgBKdeAoQ1oY6udNJU5HXLRi8Lpe9tLy",
  "key34": "5nsqescwRFeFfRaW6sm1zgoTjBhZCUCsvFR9Emr5QuyTzivac3feJEVYoEg8Yra68NGgrNgyudt56LMKzWMJHGMu",
  "key35": "3rSdQca338cEeiPScwfdaUpcuSPitjshD3VEc7Bn9BbpmQTpGVe9sqvCy8DPDn1UVWYEusujqqadL8pswYTKetQ6",
  "key36": "3jJUpkFkVKtGvBTHB2jyJ7RGEK5GXTAfxcvpJHuZmJCQSeSYcVR7RTxpbp5ZgpJbiF1dVUPy1iFwhZF11R2VLa9p",
  "key37": "5xA8Xd2G8yCgGMSe2o8q1WQNAP9xKuhVjufBGtJQ9g4o1kV8JEZTYVBdBnXhYC1CLtpf5QhKLjJ78gxui4VFPWKf",
  "key38": "5Tq7VkB3vcRjh4AeunHNNRPEz71LDb7GsSQZRCcehypnMzRQG5qWqYWBeLodySzBEmJFrqZ39vXCcGW5nYLoV9ii",
  "key39": "49Ta2S4yRvxrCNnKz2iCAGTzCiroNVntXnJFDpCTcjGd5VMcfvTznw7UyR7HdWDKpZkotntcye8PrVNRtmhcFttz",
  "key40": "2BeoUiF2XqmFsCJAxyR7S2bKJX66LZH55DMdmXePCcgx811m5rWZW4Q8g1gcK4WtqizmDextD94Gkyi9EWrFxUjq",
  "key41": "4QJsBnneqFCvUkY9rfiWWvo3KpEqm7hTxeqDCRbc6HiyJtF7AiuhFZgoftKfW5BQcVgkkwF4cqrByWxkT879nfM7",
  "key42": "3v9PWfAwTwXk46HXEuVWYBMQEgkRRS9kUz6dKNUuhS2S2zJEpyiFZdmBtKmqhGXv5NRxRTc4y6hMcu7cdQak9s6W",
  "key43": "5DdPnRMUrH6WW1DJpAtdhRf6fsfzqpMkm3DyP47sZESPn1gTBuxeJSjCV3j2sjAQRhRvV9Y11SzYy3vRa1QpMvh9",
  "key44": "3nNTJy6kZtxQRmG54wMAkmEqNSJkUTYaakgkzUBDfkr6eXtDGsKyAL7KyUpedChNqu4cu432Kp7uSjnzMiFzLg3M",
  "key45": "43tRACmFxPqTkdV81iRXg7rKtGCdSWnsgBhaB5KPwvymuxTU4nmPKy1mYh3XBFdYU37GufxWVT79WCYXXE7EJo4c",
  "key46": "DixiN6AbZNvRrUbSVeZsfU7wxr9r1x6yECCFxFC6xbLaLePqYzdYPeQ86kzpJe3mN5ftMQbdxoYJsjSeBiYuF4G",
  "key47": "3YXS2NzpH8XbTP1YAKbRvDy6XUZk7NtteLShf1jGeP2ZiBTQ6tb2xjYnzCVqDr3vxhBDtU67o44npZskYAjZJXsA"
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
