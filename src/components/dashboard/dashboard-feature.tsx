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
    "4pd7yZsPt3zUW3WrYwnzEotFFLahkduMSdVB531jYH77XpkNnyD4Bc6Z7xgPzRxXZ3AtyvZqVYFQJt1SRBhc1RK8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pPf2XAEHiQCdkSK3HRWHjpeLXxENBRUQ53zkcEpoxCkSu46ZRNsnHPzgXaW7jXi8qxK83JYPQoZ8QjQJuD94Vsj",
  "key1": "zTeuJAUpenz9X4GScGsiJDiwsffzkBgCrxAvaEja35JooySkHCgF23ee1kaWDGXTs6EffnaVQKFiiKTNM4tsL1B",
  "key2": "2h79usTU1bAxMtMCr9812ZmwJmaVcpvdgwzAedKk94uqY2tvHM1HDuKLb9LG8gXF1MswexnLqBVqVSnH2675GdXc",
  "key3": "3u6FuNDopc3vwrrzvLzTULPuREMA32mPGCSzcgbPPwdRWnT9tzgvj6PRzSwbW7dikEtDaPh4B9fpXripbL8ySi6P",
  "key4": "28FAnyTJeugSoJo8CNYhwxVJiVP2QbLZvRpkrQhc3Mip5YGKWoA2d7Ebqs8QteQyyRsPDV8hQ4gPEdnTQXZcQkWM",
  "key5": "3hWrR65cKsjUM3k1feMbWmmPoDhJi5r4VQsUguaDMBKAwz7Rycm9NK2qWdocNMg9LN6J5Ae2d7XesYdAg4q5R6gw",
  "key6": "325Y7ZhqFv8C2VHXTeVnsR8JTb3A25BNT8pfnWeJsacY4g3w13tLLqPLcTgBQTmW7dfiw6tnsX966JVVNsSuGXm7",
  "key7": "4F6tzGk6i9yswFD2VBpJZrbHizr2anqkpQve6RmEEGCma4W8A2WN75AEqMGjrUNX3xcxV9bfbnYBSdocdRnAntod",
  "key8": "5gyfbPSvzp8vwErJ7Xd4FBuyqmb9mM47fkGrjCDM2cTCon5P3Wfae9uQRRmW2zSKFNWS7tFWF2jrUaKqzboF1hib",
  "key9": "5zSNz228oLaQU2pC548USuoDPTEEp82Rdnfbw2DoQPsnLTPSDikrnj87Mv99UEhNqNL42peBz2ydXBXcnLVwBB5N",
  "key10": "4ZyHcErKhYgmXvhfqdJVGgzYsYN9bAeEwtBqepmEhobkkxvUMEny6yst6NCexEMD7BquQdyPJupb18dy4sNNi6nR",
  "key11": "5GyeJsSSCCMZEYxdKVXE1B4aZ3kEufKGYRufSE9hyG75uwJCuFaLvtx7TQvUUDhpZ8V6Bnn4xL94jkPFh6CSwUz1",
  "key12": "34xQxx7PXSLFPd84wY9Aga6iauPhEwSqqP6mgq4G6abgn5pk7xFqbSrv7stCESUCMHDyfUy5suj4PKgDUuZ8DLft",
  "key13": "3vnTfMLvdHUjy7QkJP85MAizCZDyNddnPYGwMmwjvb2pdMGEMmw4PrzmPsEcWTDN5NEAGy1YCKGs6eHsKy8QJCUV",
  "key14": "ZbcpM7P28rBxu3pAfHkQDRE8t7ZZ5HyaSRcTDAHzLkVXetjzMsNKeddCMnGkVVkSYXpkdr9eSb87dPa5jQXw3Eq",
  "key15": "nBrsV9T6FdSYvi142P2PgeUpi7mpD7feD519fEnbfTr9ZQnG39qXo1Utqh1t6w8J5PHA3zrXuyqSvN2sBpTAjZD",
  "key16": "xNoQdXcNerGXFhqQkjcArU1s8dmF8p6VkUnCenM6pwQoHiZobvHY9ehUW9Q4aaY2yo3sEbPUhcWVRsM6pzYF3K2",
  "key17": "2x7TytCETb1wuqE2a5umQ3J3j3ZxZTMzAdH16MMkke6momG96FwqhG647Cx1thq9AxyA1iHjnqMkSuZ4ZmVvms1E",
  "key18": "24rCkKiuBKTKWGPEJnaReXK9rAPDJqqbDmpCeazAAdFs3KhUYascPSSEZND9WpLwYHnG3ESBE7xEoEbYaEbh5ec5",
  "key19": "4PGt46zhvjL7FsYiVcvbk6aZpN6wa5eZA9V6BEMNotaKnvXsPhs5zHts9yGmm1YwpN953fs8PuhzJ1sMmw1akAK2",
  "key20": "4tpT78c5PmE7uSzLEvJgStBmUMjirDL3yvC53VQuU8teX8EvtYdH91wpq33kRvRnaSC1RCMi2zDVjzfL6PxiVJ6J",
  "key21": "5qiFRBdHGbZYeDDXM7WYZaKZMCu3Wddck9NBvoXwXhVaTxMRZ7aCo1bpZ38HhpyTmyCSaxe4ZYrGfbk8h1uv2PP5",
  "key22": "5AXWfYCoo6c8bjXZauPsAByc23H8gJYeraMfMbJRZxnpbWD7pxvxxxyWToh3NrES8Ypy52s1QLt55FX5cMgjn8AJ",
  "key23": "33MHfMSHB43UBEGjQ7cSGpMPBBcQM6CweEoTv7dTnUhgFX3DLATJGXLwTbmKyjNeXEpEkBTLtq5VuCTpjCEP5KZ9",
  "key24": "3HsnkLMMJ7LpP7WZWyeo2x2Sok5hZqycb2uEsNiUwPvafMhji2ekUVSWDY2F6ghsiJqEgspPrTkQFzHPVgttzDTR",
  "key25": "62Pr5u79hyLiQ39vpKqxEKzjEHNSgu3RhB34eBuRVZDhUAthMtd6qH5j2Qq66dVCf7wNjiYCozVXyHjZMJKPJCB2",
  "key26": "iuN5a7QwQgtBCEDthbyaQzqLUwq5yw3CkrmZaHRrmifak4V1qvGChsYgJFH61eAMorm5CEoFR5VcFzZ1LHNt7nB",
  "key27": "67dejWMhJS79EdPzw4WQW5eE5uqKZ62hbMHr2TtmYQRppZ2H3NruYpybKRupVoKQAaHZRR94XFyRD9JTcCtjzTdc",
  "key28": "4diMU6gVts49tBmqLimY9Jjn9skeHgGnd6AjVWQewqppL5J5E2gpvZt3rYtbMKLiBK9bJuzkubP1H5S1b6NK7zhG",
  "key29": "Tyq2CCyBTvkvWGH2cX8WgNtuNZp6Cz2HjeWT3d1mscGDNBN5te8LBQzynikzGst66wDgYtnMtTePnRrN2enY9tU",
  "key30": "3YRt4f23keZNPadHJ25UG77gx7bmkHeXiRJ2prT9XFBKoTLaWvo1Qr1y1oKi1M6Tk3rMNHiAybvfnk7PmhSY61tm",
  "key31": "BmtuGsroHG7KkrQaSQZX5TUNmbuLs782vPjCr72bxpKYjKuVbdL71yCvHCBEkTTF88J2NZUgtMmAQJrUdhV3E6Y",
  "key32": "4eiRYdWJVopoCxkxAexdXyWqQfyrFiEnNrcd6shDvt9scX3ruRLv73JPZjq24pLtLAvhUtB1GraA1qvufpiGH1iQ",
  "key33": "4iuFjbKxbmqLQQ5fPnHaRVMFRqdG8QznaXCGg8dE6HCwWQYQD3EG7ayJTbhhPqeAVJ7u4kx3FUr1hiJrwz5bwJye",
  "key34": "2AadDCzThBKp3bFksnSEfryPP1VNEnCukpZgpuadGHufSidnDgXDvrLtuxZPVU5EWy2BFNCxqkdzyQYWogmP7zir",
  "key35": "2H8awtVPyZrV2i2hEYS9WwBYRX5emot8uqtb94PWZ35E19Sy94m6tDENPMYuF2Doj3t6YYvjNbXiADKqeab1heZZ",
  "key36": "2Kb2mnd38cK3KyQpBuz3njFnCQazCaPuGVUtXh4hn9TqSfTymEareTYtpbvktdTa8YdWUti1MoXY2FKWBRTqShaX",
  "key37": "4GpwqE4P4T9d7nYDUXN7ccKjhu16ADGMcmJ9NVvKYdREnC7oh1pXtBBDQ7BKm1XNTmYRKNKJTo5qawq6jnwCFTYR",
  "key38": "3okKivCwJhhEvRVVVTsmU7tqQAJfrsy9BBsdpUBxuu8BbWjFyJju32gQGinPN5ARwAU3apfuwvMDjLwZKggCjzKC",
  "key39": "49KbtdLJVBuonyFP2QL9D6pzVYDf87daZh9aA442PGRpvVbCc7cWeoHcmh5EFDWKLsxrsBuCpJdzp9xAjQvSyFfU",
  "key40": "2ayKiDf15eALbULs43Aa1TibTyGRrfSDtvinN44JNp4CuUkooF8GfaxES3dVYnuZEfLrcQQ3BrQcjtwRxbfCZY5e",
  "key41": "5xuuZQUNkSGgJJDb8pQNee7xLUSk88ATf4vG3wrjapuuvaEMZAypvHaeQqcgkuPt6MiTzLy8bL3jksmziKchG9ZQ",
  "key42": "WtUEydEAKFKN2scDwgMcNyooDo2r2wZeXvhUk1juAr5fhj959gUZVZF4qGcDY3ouG6LYxUoGa8imQE6moToZRDk"
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
