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
    "4RzA7chwbdoN73YBhLnXydk3JGsVza7o4bQiTEqQHYRa4jQF9iiTJx7eshBxN3M1sWoVjZaV5gxqYko24scvjpXn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28seMCtXhmKWMSa62KZnuEknejj6pzwPqL1LLyEwAQLXStH8zSP9bhfZusptNzmpRULoQAv3JwGv2mpkcJDi4dJr",
  "key1": "3fV77MoBfwriAYaDb5QAKafa1R416arMwg1786RG929e8MFXTXL449ZjyuLGksePCXdNBSpG29xvTedPixVrNuUC",
  "key2": "uTmcu8Ku27dnVgCrqGZh9PeXVSvBBeckGWjcWtfuqVyRQHUQDxbjjRBFxBAhYETDDMYbSuuypezNvY2L7tUKqRv",
  "key3": "2LrHxkjm3R2GdrRNZCAXX6i3RVsSppUKVanvWKtWuuiAMK2VqTS92bJrpgTph4jPU94bf1iGPjfNmHywZXwNr6wG",
  "key4": "3awVxDP5NArQ292xrdj5WFDnPUYQj7o1WyDiovnxeHh1Wr8K2RBMrdSPjbqenfpjvVoGL88c7YPPmYxzxKu4vuBC",
  "key5": "4AAxQ9au6B1yesPvspssw7n5m3KZj5iGbCnkbcvZrdqe7tJPB6ZJfvzU3Y6nNoVDKVZBUiYUP8fzaWbJK1wRtQnb",
  "key6": "wWD8v2RivJ82CZoML3tFAbJho7JMu4Wqbt1kvzfWA8V2HfwYD4JggRiFGB1VVbpZHSqpaYv4UD7mT17pHaRz8YH",
  "key7": "5E4dkdnnAcXDePhKoJ8fmYm26zmqirPp4kd9vRKzkNYLuerSqhDZjCndHhNEuKymJYCG45PV7WLtUgjyxzriDR2i",
  "key8": "57aA9j92DfHHwHWSiHQQy28RvQmrkC4PQPjrfoez8CJ5S3cuVDTVikCYSzsBHTF1YAsosbvPheS9Gf2SziaU9W4A",
  "key9": "3sBB7X4s2Qr1EQ9av641Ly8GCbYCFDPLtf3nVTuzdLWnV7rV1Mb3iHjUbazjSt8FsBnE3Ybu9vzdafe3EnLUYfn4",
  "key10": "gkoQW1tBwYck8hdG8yxxdVvtAQSaB5u4sfsMbcjAvtiJ28LdtsidSxqSkMe8NvRd5irmJiJvUutYe6svz3Y2cqf",
  "key11": "435NidK2pcBh56py1RTLqVaeqwyP57aDeAHbUZrukUrHvXiP6wtqYi1fZEy7TaVcwNxWGui23mME5iUwQv4KPb7W",
  "key12": "5EoNgWKTD97zvMBULjeLXCZNvSJo6U7nBGCkQZB1jyCYhr4GpFAjV2oeSnt3QRXmTJnwHDbQUTb86a1u6QPanrmN",
  "key13": "2sz1of5c6WK47QEosqkdnrJMLdc7oqfgkD26DhuR73PAfV66mEK5NE1F6uEH1RNebWhwcZJXJbcEQk3Jvk6GuaGY",
  "key14": "NSQgN7VEJTsmXKWXmfMi52d4XFfFjTDmJ4bfs8bW9Lwd3ce818jvZyecxgehT4UbuggLvyZ3kMcZJu1KmD3SR7H",
  "key15": "3ynWMgy2W2cg5UFM1otdiMA7HUZGPURnpPY1o79sTFeBJ7dd89C9iK4xQ7x8MsTHuJuvmmxATP9Y13UkswtmAjz7",
  "key16": "5CR2EBzY54atvhjFYCSAh6dhK4WddHnmygyUciFZLgPEqVdDUUqjaMbcKKn4FR2uB51GTC1hE3B83aJyrrevjWS6",
  "key17": "4UyS3MYeWnJt6yr4KgMSM7jboGM4M5B19Eb6ee1kHdEoFFfLVkmBowUbLUAsUz1SrJpSXUxmnm67v8A7DuR3Fi94",
  "key18": "3oVScx6wVYKNwxJVLUNdeQtE2fDmpReAiViYPQBjDQwhiq8eQVi4gEA6ebRvEDeE88zpWeoNbefnCpoBej8EZ2w8",
  "key19": "3S5KT4CetqgEaA4yDhvREoYpTYCXAuNnu7V12yvgbSefEnG9vhSatmddpF9RycaJ1MRjXzhb82K8z3n8Jnc5WhWp",
  "key20": "4rfMfgosp1jCnPgSXofLMTv4HqHBSAXxVJJvYbiD2NDgmRBGSFc4v8W7RNh2pcPasMq354nnM8XzEqj2YWTJAzzL",
  "key21": "5dd6c7itYJDp1arH8ySRk5hJ5EuMi6pSETrkP6RE9nxpE1BegNp3caHrcYLVYo9SbG1ExNWTCXHk2NJa2omStd7Q",
  "key22": "4hrCnsonETEoWH7AmoYkwijw44wcB8UgazQWmv6xX4hcaLUvgvF2w5cEvHNfqiCZ3PEk6uyct7cJUkUDxuFvXfZX",
  "key23": "39cTWLt3e9ovxswfa4ek5Gs27VYVfcer3ScVkjUrXrywkDq1nFkFokkrbpdEYwqqy937UyvFESxRFm3RGdVDVX3V",
  "key24": "3sG9RzrvWz5oG2m4WAcHsVrTXj6hayctA8x7AoCvRyvzUnmSNfbAuoaABaZisBSZi6Fb6vZzQ6y3f7MhTJ7nh7bi",
  "key25": "3gkEdLSCDD7GeM858LT5TUj8XVtu1G8oEY6Eu12s4L22QuPVX6FmQfojtoGwfJPEzMhgCWZvTnv9ynRPhqfB53hS",
  "key26": "5tVrXG7Z4eHcACq9ad9vZq53DqgHXZwpqfBtmt9skBMn7pLkBqMu4Ya1cN1PNwBT8ghfTQw22dNkXrEDzgTczqTE",
  "key27": "4eNBTeJTb9rDQRJ3dX1v6yqGnTu7yMmyTc28Qb4i37mYtibYiZAiwsYnVYhexkDN5fWwXxr2N4dutocWfoXPUp4p",
  "key28": "wrkXkLdS2fi5vfaTXwC8nj7UXiA1biqrAnMaRaJo4NTkntrCNRsirTTfSGodVjZmZkLybamg8Hh1pypWHQEjbPo",
  "key29": "3TXfwVsYo7jghCqm8SuHTmYycXwYh4QrKh4go97i2FuAAnCAKJdVsL9hK9SNcDrJNBzbxUd15bYS4Ewb8S6HjnSW",
  "key30": "4EZGi9pG1ktfYv39hnnUwLytrTEqC7Z3c2dgaKgqpMNhJ7uk4bdGojw2ZrWsUxSEkuYpWT1dcvKb1Ck6ah1yijVT",
  "key31": "2WamU8rJFQ9f9pMRSRhg1sDVA3SDjYP3ouNcF6QZgbbEFaAhuDc28wqR2fdrzakqvPsoSgyeJDvpWgrCu2gLNLBX",
  "key32": "5cSGX6aQpVrthcGBGfhF7zofyqCXwvf2vCsNedaWisWgLqs5QBazddknsgBnLJakbc6fwyXYFNfAHMW7FpZoPH85",
  "key33": "5ZZXTACDxA4ggB4xjpiqv7ALcASp54cPzStJsPmYjxJPmVXqDieUGzS7YAHbjts4BfXkLcMhmR1VGfkwu1upSFtK",
  "key34": "56du6CiXpYoLpDBw5xYPNHHtiQZTGtTfFdnw9evoqZcnPFTyh31AYvFY8xFBPDFgWpb1kBYb5EZc3t3jS6UZJAco",
  "key35": "5ZzoeVyTy5oScmCDtNzF71oCRSUU2gSLaNNgPQGeV5mjR6Y3epexCzE4DV3Lva85b2b5TLeFvakzRv78FypfRz9h",
  "key36": "25X5AtQ4GLthVVQQrNeNeHV3VNrHjj47Af1hhac3t9EgV3txEsL5H1Ah1wNhiGFtb3xuooem4SaV1zvELmDHpZ3j",
  "key37": "5bt3NdZ5i57hEji7FfFcqw7Wt6TTHJNYH4xRdtL6TYS3boKXay7jReX9McaeedJWZdrwCgoywE2TNefHtproDWC7",
  "key38": "4obJ4WzZrf9pmDgHLtVF3iubJNMt5hM5rTXRVXmTw2r5a8AzuSLDQLPj7SZLKX37dgovwm92gVVFxm2BJCWNWXRT",
  "key39": "2YQ6zYfcEXYzwcXnv9CZmpmc8ds5m6VB64z8pD1eRBrMHsb9nge6bPNAiKpbzjC1ktPXYtGFwTF2jskKUqrJsH9U",
  "key40": "5eQ8z9AsM1oML1o1pXExWC7VAY4V5ZCvbTiBgJ4DqDzk71rY8mZBB73qzSJ9fxXxyFBW5Hq8DtghRZPAGTMRjSSk",
  "key41": "4kajmG8oHPWBCajrijSXgpzbvBq37PVZhFukzSUvb58whfeKjya3t4AXeBXcm1MTNdSA9Q9ZsXY9gtzzkTKLFcAL",
  "key42": "4Wej44MAvG85F3dAPySaWyCSmmFXf2nX8AhwKXzy7ehygMtdAoqNds7gpEFpdLDKX5nLh9YL29JDg85kgxj5kEZi",
  "key43": "dkdd3dABEzVcLVk63SDi7n1yHRNC3YL2tqFmJRrwiTcPAMFmuAvXUXzjFN5T3Ttvp4y2KV5RELNtTZnqsKt1fjD",
  "key44": "3yYR4gZpVJdRrtt1dxFRCGBDqGkeYdE36CZqzi39Tmi9M5GcUjqYV8FuezYFagxbwtgfgGHE91aeRXKSedd9dGhP",
  "key45": "ZhkunxtGJqm8GW6La2LwVFD41qgQqpwcMN7QG5DWw5wMrifFGibE7mtFtGvub3FpT9y7zs5vtrYgPFpPB5H3jUF",
  "key46": "2LLrpy3XFp51bZWecM7U7Z93PMpXxW8XRScvQNWkx3w8bSNgF9U6jWqYMND7Kkt7R5n8YQht7tkc6ZG3kZrPv3C1",
  "key47": "5jm2aNMqmDtiXSiZFavsGC86QCwF6WLUf8LiDQG6GZHhDjCLSSc1AVzAbwfYnNKhPR1pHNkB5x4F1Wh1vqazDCTh",
  "key48": "4C5dLiafBpdVWsKnHtHYXsVbYK7hQVeivK8vSU4bRvF6B8Yn5WUnKVbFFupCnttE1V9nYMi2gcYHKChxD7bA5ttB"
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
