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
    "5Tw3m7kdvvyy9xQgSfdWsqno7tUmVXVsQQw5j9EwNgeso8G1jXtHxcmBWRDrGqgPArcTwaUWYsqjPbdGF8WYKpKy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57ZMURC9EzHEVz4GuzzBxAK1U2JfEN6fydafDkWHWjAtrbxMaACeCNj6f12j18KY8aMVHdL7zx2nA8187A8m85Xf",
  "key1": "2wZaUrFUstyJFtCi22wfGtF6Gj6gYyF3ABLjrP6CXjp5sT13JGLo9HJnoDcnprbQyJ4K9nQzAUuMRBTZNSmrys3A",
  "key2": "9344HBCZJ73aGnH8ndU8yD5QUrHLkW29jvnY87evJzsY41JAcSQFat3aCJCktckoNXAmEf6ugkfH3RvqcTo4T6Z",
  "key3": "4u7QbUaxksfQZC5s8H48uWi3v2EJhzGZCQszjgQFGDVonGLZoGzjFT8XLinnxTDiGN6nX2rCuBxJ4BaiGV6Cyg4u",
  "key4": "2pr9h4VtVTmEn319MgVHcJaQR14HfWGGxeHR1Hd3usdvtbbWGgGqpLg5hktgGPPnCT2b5vkbHJCsUshX2F2Jb5r",
  "key5": "5wSf1NdPXxyDaSkJ9RsKJ7Khc5PQtkdy43ds3NxJ1ewBh7FNiaqqdLwr8htrjC1UA16Ky96P99HSJckY5uhuX8Pd",
  "key6": "dy8pSbh8AKtB2eyvfo5QG1K68CuctZCveRfNYKcHSFj4iDz4SXqSgj7ipPfVnr8F5FkjLxKJR9qm1KNoWyihpgi",
  "key7": "2wSE3WrA2CTCsBVMV4g6u2hT28GXzYcERXqhreD86LeoeduXkXPqDTJeeewuciKrkdbEcbyF1ZvnrrnxBdYJ17fK",
  "key8": "3ckdf2kDPfPoQBow1NG9rNohzrxS92ECReCzsGoe8zLAZziWpYaDbAbJZKh1KTpW6cYnKK3GqiCnyZdf1ZfCgTxg",
  "key9": "3SM9gbygDsG4iMxtzmxaLnhS8Rx4ELbusDkVmdfCmUGUBJV6teeGRgQFkbGLALb8zXSRLHtP1jHKByhogV4UQ6Nb",
  "key10": "5qacjqoTiCjDXFGetQ4FwiBvCJsoL1cACnpzt5s62Mn9nycf5eTbkgaxWnTrrqA8zrLvzVTt6rK6Hmxsp412S51o",
  "key11": "2pwbfstgNJ6rjJLEwZr4xAfebdvwhaY265b9QBszAMRzsC4AZ7nXzdvfDY8AULPy4HCBLD9kWtqupXUAR3x4SXsL",
  "key12": "8KGAzDLuo8Hi7AAAiaNL2qTj7V7tLFEYdjB9nNfBwvWeDsaLPBBPu88y7LiWtVonCkdZp7K2KHwyUWbqUUAXoK2",
  "key13": "2fYwtVgsMrH2SqB6goApE1ckD4WRAB4wYdSiMTNC85Dm1V3hzLHAo2bhisfvC9jr2iq7atHPPumVfzrB9edixEjp",
  "key14": "4sPt9ceXxZxgTgBD5SYEUXF5qWC6NPamfs8BEQWiGGhMnFoxZdyFV1mxwzo2mji6XwLzzeVh9nfxov2navSQQwE4",
  "key15": "5VkfjSFknhzwF3vZU3JZxraRgdVKYLB5VD5brgV2S5jBczikHEmJsmf37dcjHzfRk41HPdU9g4bJVsPvsfPeNzRN",
  "key16": "4P5eUj7eukHboVhoVsASop7C1BJKqjZzYV4ohPUM5tdGbsWL8GEv9icgAjeHYXiPnu619Zu313vPCoLmfoPRiG55",
  "key17": "4nwaYAtkMwkk5x9DASdx2TvgzEZJqPTt6NdKyEw86AT3ZDVPfRaLWQJtKXDNBnkMq9JFwwE8i2BnjkCJ8ZiAZWHA",
  "key18": "23gczSptnGQ4cgPHDNVrLfzF9iyWdFgNyo1CjnNLmz11H6Leg3QpbTkVjZydzSrmcq1tGnSnTmHdz9bKEQVqZCJt",
  "key19": "2A9eq7oNBfqsCMHvbAEiQcn9ojbbqqieRcbQ5Qa9xmM6kQauzRpXtVzSMJ5fRP6aRQ4DwcgbhvBJXbrFjLRdvKm5",
  "key20": "2jcewXzVDKZMxmjn3qTPcefCK5VG7yD3YwfzQjdBFCy1px5EZH969C4AT1DDRUv5cFKT71EfgrLQm31kLYMwr6Dr",
  "key21": "3GFqGPBM9EcLj8a5oVMEEpNhZnHu9Avpb1xxjE1HuJvhB5uxSTwcTbEqCQnmBKLkWV2MGEZmV3g31YtkCoiQKqFa",
  "key22": "4u4c7Vf8skQ3pnYB33Fcyf3KU4bCMewvxesJyBu7qiDESWUuFZ6j9UtDU7CtugftUeBW4yjAatS476TpskmTWvXT",
  "key23": "4qMvmbxFY3Yb51ksTkCCNy8Zv8wiv4xGzfeCNaVTSKhWExLLZUnummeSv5EpGo85dtbBy3Tbb66nckCXda79QK5Y",
  "key24": "5oMrNAjKV5raATzQaCyE3WodhmDhYC54J7VyfXRPwrGwLimxcZzrpmFbMxD5AeemFzvXpQLopJ5QcDvRg51xULKr",
  "key25": "4LoBFZNQiQJVHpPz472GCg5U1xsumyjeKwfm11DnpCDQQZcR8666KXc8VSfSX1PXNy8Y8BuxNTAFdaiU1XMoMKxd",
  "key26": "3oeKV6ZqUzfp2QtkWJv2Z4D3VW5ENgmDmroLt1JX6fh5nvmHQVUfdiSPd3cC8gMBxVSxsfNgvG8Q8V39L7gF6x1J",
  "key27": "StvzpNegroMJFSUuDoT4zXM8bP3BwJRVaC6bnMbNCuAArLCHkCtNYKSU6FWn5fZ85acsFTESrrDpXw7mejh3Xq6",
  "key28": "uUfc3gEFUeupjrZ5hdShBYRMqV8DW6aSE44kuYdvfqXt2wYdt6vi1saxKExPCiJHGxXmC5dMNpAPQ8KP7vnqSis",
  "key29": "2RfVVgpBwgurTPfGBDy39hNw41hpD7uHX8RaxEufEb9HFbVo8oRfdVXQpSvfqY9KmN92RkXaa2VdRZSsCLp1hqjM",
  "key30": "5Z3kJZsYEnxNaUS9j35oJ4MUKPa6ZeK7vYEX1q3Sw9ZsaqYo4matstP9mzTcbsYtaGtp6ct6FkHrWdPUD7TqERZd",
  "key31": "3Q8jxDW9d3YCTVyMmXFvC7oUnMreUvMonJr2FbMDExnjF7UUnY28uTJ6V9bVxXeTtLm8Rz2zjvzo6Z83zCcu8vrz",
  "key32": "5X3BAMQAaurnFXHuUQFzraDeoJUp7iVByzoBJEZLgHDbmon2XzeJNaRawvbvFcN5hRrRm5vxcvtn1oMGUf5Fbk56",
  "key33": "hEJRgvARy5pi4wro7xeSyUdcCYe8WT45GHU28Rvxkm3HRfJ1qL2KY8s8kEPhrPQrWWDB6ud3cjBJBdxdzPhFCG3",
  "key34": "3xaKDfahZJ6heWUvH9AocxvaRrq8jd7Nsj5SUxu4z9WQRwmWXDpMNukcjz2yjZ46GEeeK3QKVurXESrGXZoSHwfk",
  "key35": "2bD3pxftUP97esg9Fqw5TvkKXeqvDJw68BtHN2dLvPcqEfPX6GiTbJDEN1p3qgG9hG1uKGLgGanjKrQpKmPUeHWC",
  "key36": "39qBnxJvD1UrBF8157qfPHL27kJK9fr6EGrzgAqdxqtkouiD9J6G7uMA7j76yVn1iaJaBspna7v8yqd8nY52dTxa",
  "key37": "2FdSc2F81pDXyTZjDbQmJd9iBgUYL3VzSSj1xVUM5zMzC2JWExMyyAUJezx4r3xMVVJNQUPhHrCWP8dS87bNp5zL",
  "key38": "4VyaC9uJTiY478Pr8eqptuHWfzwK49n46vBixNL15jwtuqhvyEsXxoGpDGVtVYXEUiNkYAp7dVkJ3j7tjSXjuQyh",
  "key39": "49GxHazS4wfo8jxZEpx4UHwpiNJQYxCZ9UL2zntxow9jhmgJ8h6EFwsNWu7Jzu7MWXTL1NGYjici3erPdNXfTne1"
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
