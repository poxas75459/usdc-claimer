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
    "3tJmJUuUqkGLF5V9mzZtfsZGv4yA5aZJVQFH1czrPAQ1NY3VisDGV6bF7tzRn367Dqs2yEfmoTHcG8CvHY9kkA8X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mmCu9nDYm5rWhvYgUahEaPDu1SJy8iXcdh3TfuDekX4McyRxV6BJQGj9PM4K3THXkTaP3YthRmCKJqjQk4Hjtmd",
  "key1": "49sP1Pd9i4GuFEAmgNuPNFEVQDPkinU6pUsQfELW1JuFt8M2tguctTnZL84Y3g6n2YPw4cRNeJiVoB1WfAnDwHGD",
  "key2": "dfBHJFm5aw8JLaAMYDTDbwk4v7xcGJKCNfecUmEpVD8TtgJ4R6WsqESpnnS1Lan9BwmkqiXi38P2nhSqP3DGaP7",
  "key3": "3F9GSD1F8jqrimmv7vwVuvTRN3kyNkT2ABzw1K3MBReqnDD2C7y8pSSzFAJTNKSqELm2HvNgsBPQHeJhUDsQhVG4",
  "key4": "3mbCwHkxKHoFA9kFqMDWM7UoipzRALLHoBzjMBG8cpcYzvx1uY3cg5NStGXBN1uZDRSCwv5n3QPAPGqL37TX9ck9",
  "key5": "3Z6kSTwhVHcxpw1kiDeYVerd1oaFaVTv4C2YfXHDhgVvvB4n8tXK3CjNrn2sLNUM8QuEqNgZQxBzwY8tA4XM2Y2g",
  "key6": "6up1iK7aSWa6jCtggFUny7h9veNm9tsdgutLEXe7kjzuVyqn2jjGRFkyQmfVdydeG3EwYzEj33AazJ2ePYPyYqs",
  "key7": "2cqnxqCkRL4GDJTnwvNsWhwJnp9qBuKxPq9Rh2nZX6n8QvnQshBAgPsiLGnqCKvxdBvrHcLsK2rhmwEoiEKUwBb",
  "key8": "c1GgXxkTsyRayvBbfgrvzu4ZcdpTpvnpo8LwumPsfgPNjSevkHneo8WuiJg3bGvoPqj9Tyjsr2YkWkExqs7Njto",
  "key9": "2jwQ9KXfjEGXmPdEJmhZbnmAuyuMnUvUCxHUvRVECaDVoUKuMM6D6P27LzUNjdGUVDQrrVLxWawTjTPJdMnF2jaj",
  "key10": "2vVQ3DsHTJ9qAjVutPge95oXwjH91noJqpL8gB6AmzRWbJhTU7UYNbGT8BFuAcUZf2QyqcNMD2rKdnk3QyKctD81",
  "key11": "4ayaAWF83xQgJsA2sdyY8G6NLcFmXUn76JqBDaeqiTYcvdps5VBeY3WmF7EdVMwM2jxbYKX7xb9udEdz45K9oQXA",
  "key12": "4QHoK6XckVT2SfxTp28hZtTAePR5QxszDBiQaCJgj66nD2itBN3VPWV9tqdcaw5fGR1v5sjrGfNzc8uTwSTkv3Lg",
  "key13": "4ki4KjUM3kHff62skFuSrs2y6SdX44c5YDmtqCa5yNJ42UwonGPBrwCUd9gHNJFjZHBCoE5DozYn687KvDv5Jbwm",
  "key14": "2S4a2DFjFnXxnkthiRZPLznVU3Ph1veEubUhd97aYvYB4yBmvV6ME4V9Jf2f3NqpRSCc82oqv4aQVKoksfkXWP4Q",
  "key15": "3juP5GENP5SrjwKPEkTyB86Z2zCi16Bh5CyKyc5MGTiBYzjsDEJSzjZezBjZsRwCwQUgMkGJwJgMCcxMP6hBQN77",
  "key16": "3FypbvH6GSBtSvUWVdeHzJBfM7ghCTLA3H1rvzkXCVrnDZfhaVVt9H49n6gYJqiYrxs5vKsvwTMyP87u3gtu9tqu",
  "key17": "3LX27KidMPqG9SLNfCqr344k187su57DCBLKn7fhhTADEurfax8trLyK7dNBvoS2kWqec62Qpwvai8LStnYLdNX6",
  "key18": "3YimoDe62WmmiDARZJQPGrdWFG5JuwknfddfVehWcAjnBuZPjPGFUxjujZY9oJdHe9oxAUpspSJ8tbxHvo9s7SAy",
  "key19": "67F7yQBNUsxZc3pTNxnEzsAqJE8EfM7Ey8jEKHz8BphL3TXUyz7FNanFQpUFhUN9J6QJcp25QGe6Jct3Tz9Accct",
  "key20": "2xhLAuknSddVqn1ijqjuAMLkHkomsit9dBNtzJnrrQDammTCh61wyqbrw775b7t1g1gQrMLVTLGCX5mQxJGjvrbJ",
  "key21": "26Q4LotYtkYdacXNCNJjwrTn3srNMVGTPmwtaX7Qmsk7ULK37pG9wvC2mbD9inffVMFUyAn4V4bZVjg5wzXwCbXc",
  "key22": "TjnBjqPorzaL46R9jvdYzRuyGHkxB7hnPbutjLh8PNpMpQJtRQmstUoqLmQhjD5SS8p7PDQoxnZKUosVpiUKXHF",
  "key23": "36HtchSiHrCd7CtEyQKu2ARmpChHcDAAeBTvN5cBnc1TFM4gif1Swhhqyqd944BBJzNtnv8HGD7a1t8uQPLrUvum",
  "key24": "XTi6TzcnuAWrtRKFeW5gUYhDXAqLuLH1nCZJd66jmQMyE2vF2SbGkZZuDJwcZWA42ffvU5S3gkVKJXfVjom9FmH",
  "key25": "4nXiiB8Wa6ywB8UJLoYwjGA6c7peofEQYurScn1Wkrp6DvcxskTWNzRP57YxwChapm4W8XwMeF6TvoZwoxbd3S7t",
  "key26": "4n13PCa4htwCWQS6HDPqKmWaRQCtpN1gj5gounPBACCUZSdwXSeAx4aNWrmYA1WVwbYgcY8gkpY5PQnHio4H3Ayp",
  "key27": "5kufr2ttTULA5YMgDZcVGMpy6Avw2iYXkEvDBjJncHZZ2Tpp3m8U1ovSrs6bn8DQJnyQXv3oFtGDaBdGvD4qziq9",
  "key28": "8iUqNuBMh5k6hJtj4v3KWh12sACM1QeZYnDVrSEBfyNwAXvjsoUJudH3KY6VcerRhQe3UfVfYx3ZZuAX49dTZA4",
  "key29": "4ddMYuLChcuTKGMdAUBGN2a5zBd7iEyWCbgfQovKzBq8gj1B9Z4YWgwJZVWgnBQUyabMD2pJjE9JwpbQp1RjM2Bd",
  "key30": "2LT5BrZgKxBXRg4M8WmjGD2a4fsBmkoCu7xV3B3jGPnGMaTU1xcw6NagyGhkZ9F6LfBJHeBtbLJdJNgGyvnPPrJC",
  "key31": "5hvjnwMYVyu8gXdsX2vWNmtxZcZntXrAb5ek5jNuXxSY33qYGbKVSktziYZmQe7e3JsCfC6gurEb1yfWKyyP928k",
  "key32": "2R1jveZ3GVisZ3Q5xN6U8qECu1k2whB3SR8ZmbVkbyH7V1kcGwWih8P4mBjFVdW22besAD49NjQkh83HUuphaRS3",
  "key33": "4aJ7KCyKXSm1PZqz3vCeiuJQtemL2Ap1udK9XLupoM3BL56nmxrXLpiY9EW2wNFZTjerLZgUtou5qELDQiwBTPht",
  "key34": "4S1oHcw6pAcWGfXDqxv9KgmbKWepZvq1AcRHuARUrzz5qc5pGE3NHMhUrb5J7pft4f9KZJAeeU7KsoShZPVR3ETJ",
  "key35": "5XmYRgfN5Q7azNFEJBShLMfm5A9baM5aKSzcKCWkY4Xbh7vJXGX89qSh4z7bQUSnVNZxiSdxQoVkvqjLK7Qr3XDd",
  "key36": "3xKRXiGLjPBu91z37wh31z5AysXuCVvkrDcTRreAUBasgAynebuuUpGsD3m3jifZE8kg5EEqyxZgvatMEXhPZ6H7",
  "key37": "3fCowcsgqPF39a8hksDbqC8yytr5vJbXXPNvG9awFT444417m2R99GAuuKTQBH3y2pV4m2B3hakKh3WUSajZYjQw",
  "key38": "5vUhL83571NWmHELbcaE2D6Mo75LeM2nyssSuPHGnDGDDxQAeta96nzhqdRPoQ54w9RN73ge1rPtcgGz6p8Ut8uN",
  "key39": "4v35JdYEMZHwsszxJhH5U7aF2F3uGX135DNwXTetXBrtDr2L23WfWiBUQzkSqhusWQWzcHs5QYgP6fBnMdkjgANy",
  "key40": "54WbEYKsZoqVeifnKLmoGveM5zpPH7dGrqq47oDEHhE5niCKLPDQG7U3VMxcbGUh9NmqQ4zzi3VFWTHsfQYNXy7c",
  "key41": "8TXJGneGB3AFstJYgHTxTStv33oCZJ4M9VGbzYkNbf7geC1Ag4C68L4YCa37Ub9m68W9fm1MXvQFAEEdP9bvHHe",
  "key42": "5Wkj4ahxMGqLP4rtPrHdQCjFpGCEirJ8GSxbNgA8fsQWtm3DcbX41maX4aZBkN2kJveitRLeMJfjvGxkTdH31x8z",
  "key43": "55qb8UXXa5e8GXDZe4GJ9U89mSsbVRts89LLnvfJKj8rVDfUrrxPWpofphHQ7ALP8srayvExgEGVmXbMZRs5yUzx"
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
