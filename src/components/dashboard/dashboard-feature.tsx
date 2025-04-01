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
    "27as8HKq9nsL9YWa5RutibzSixmWwFVEjVebpz8b1wpRYgjPWsfLDGh93AcB1a7EThJwzUKJ8Zhag1AcNze46pug"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yXiSMmQETNJmSwrDYM96vL3oYgRmCtZZ1KCNqqEjoWUAgg4f7qq7o4PYt3QyUWG6AzPcyEdkhjZfksQmdq4z1dp",
  "key1": "2nSg461NhFvVbbVNgVcZXuFGoYm575Wasbr53DTuZXFenMk7ihfonf4vCoTH8D4U3MU3sgqEtHcKuWL5WeZNZT5x",
  "key2": "67iZMeKjVMgrv5qWNmLbzs7QFYjdkJptz3kNHXBZyqKwjvoDr2mGqkog633hEQWsPTbpravsrnJSMqCePSq4jNN9",
  "key3": "5Ery1iQBqBq2FKDb8nxdxzNhU5xR6E7aSGGqMp5TgqbPoaJ4G7xvw6DLk3WmZjPMbttt5tnKXbqgGhyDUGQXe1dP",
  "key4": "4tX3ZU2is4GYFYSxTZBb4qrJMAuMk8RqH5skfRkMYi9YRDG8PYa9vu8mZybrJaVLmD7pVxEuXfZqxZ55BRMyR62Y",
  "key5": "3h3v6gYUc67JHpdNCL9SdzJKX1YhotqmAeZX5yULmx4zM5LoAvFug66CgWDrT7AKsTDsgYJ12pRanpz7QofAzRn8",
  "key6": "46Bx6G4vJ2xJLBqA36tD2uAk3Dg4LWYbunysQHmAaUisN2aHpsyd6FcvNUDB4XU7Eqrib4HHgb4RUTweKpmDMxB1",
  "key7": "3s1LQwtifp4Low8AoYTN9CCtnThqmyTTmjSLAGk2cZYaXVqVVko2zft4t3aqXpQ5jxLWXQrm3y6Sv7hfi7TMmhZa",
  "key8": "5imQszog2vweYNsvSrnG3pkeXWZR83ZYPihWGvqcVEStSqs6fsBvEV1SpoDS1VLmBuy1n5A24U42QHLiovthaGqT",
  "key9": "2RgkDhQ7Um5jGDFcVMvkiitDKJCocp2T1tbkzgFTeC8bC3Rzx3aQzxu1xs7y3VNnputweSaVhXddDYn2m1piamja",
  "key10": "MaNjSsuh8NW8bJceDTSxCVGUSzgkSQ1o3rK3xf6ubMoj6RjKDmmjYGCFhF4RuTh9qfPPXRec3L4Ubpp3BGtbhCX",
  "key11": "DcADk1eL2uyrfa63v2uMYh8EXV9gKwd1gPEjrGiwiHgZGrUtiMFC1PVbMQpRPbBUAkUTLm5BGQA5UhSYSWLAZ8T",
  "key12": "57Pu8otewP5JmKHQSrMCJPiY7EBPJ54JZVeFYHonQmhrS3QZgczuiho4nYhbZZFXBhcZWCceYhRsZy1yNeqRcn2a",
  "key13": "2Nspv1uTwjWREMLX5sgq5wr5vzj9uXT96s1LJTaynseAd9vhuSRqsR2S8RHCP4bgxaTtVggKS1XexCSS5oe3bBsZ",
  "key14": "3g88YRSBTg2wguomwTiPTNwJPgQXuPVoMvqbBHQU9ok9u7iL8ggLFLNAgqPuo8bnV2C48iaRbxCDHNoD6v52SEz1",
  "key15": "R3khYKpQuBAB7HAuNsyP1wBT7krtnUxdaV3CkaF4Z5m1S8CgxdwrJFUFbXuJ5XV6ZLit6qiXkDJiZyCBzhnUJyh",
  "key16": "5R4aqjtSY3s4rA3MM6RWRZ5XQyHypPBETsYnBVzk1tae4gFxYs1w3W6LkmiXketvbTgHPu3Gyh4DVnRDnYxhU6N7",
  "key17": "4H6eaNJSDGbe4PP7pyNPPBUYacAqEgf27JgW3nDomc4GQkLYr97aGEnXTvCU5p3gS8FmqUrPBZcGmmHfb3BMo4zh",
  "key18": "49QWDQ6nioaFhPxKK5i24EtE4ibecUFwBoncSDr3UMqPwhBs7Prjqj3cjGY4YBoWeyNbuu4exwUkoCZ1g9HC4Fge",
  "key19": "3g21FYBEpSqQUFTLjMyyjE2wRBEuYYshBj7ZhcBmysUbk2iYHXiBfxAmyYdThjJB6SviR2stqYazzVsHPe1stRJc",
  "key20": "4jSNxw8DJfHQiiW8n5ecW9ApMgZ7KZPp735etmnrUN8ccTA9HoA7JxqgPqXWXYF6a5t8SG9fwSjuUYGXnh29QUAi",
  "key21": "46BxYBkD17i1ptcGuA4KhdqF7tpXxv1JAZ2xPFCFrMgtghfXpxYE4MHHJ2qJ9pbCjyruPfpyh12smk9vtwVtcJZH",
  "key22": "4c5FxabZf7CFYu8WvYJ4MNm6HDHWemhCb8pxzVhZ2B6Eqb9jrb7R5jNswz4g9qGpB8C7DiEiefL6DUPNLDA5uTcw",
  "key23": "258yfME5m1x3DkJ4V3LBfq5TfwYtzuYNsaJbAfRGiKp9SNZzip9LCPvV2U6eMEAMmfDqZENZcVG5tU3ys6diamzQ",
  "key24": "2EaVXQt2c6Jw4PF9VYmF6aihk9w44qC4fbFfbVruwfrnXwsNhDunWkoBEPBwNcgeKxADrXLBWgpcWqU2rVSgnT7D",
  "key25": "56twHwsqPfCDeBRjsGRSNURe3sxN4dpWAb6NqAV8pQMT2qYE9rbvFB2vDoJGMgTcCQficoe2ctkkuVMrc7WGxtTX",
  "key26": "4JKchpeDdvvt94GVCdgmozuu9aeeLmRNV996UtSzWop9wYySY9b6DpDiq2fvqgg6bzNzxdkXEUsdLTBg1pskn81o",
  "key27": "2UzgM7j1MgbizyCTuYAVvrb2pBrJg2MgK7v1LAsLj89428yyjcLpRqJDDKPF9UnCFhFtYCjyyomkkatFpCVBkh4u",
  "key28": "2bDF3UUVPZ5EFMaLnJ85aSdCEpNyroU7HMD7hYMNifEjFn29ark6tSSqnCv6FzBfxyWD1xpsMeNeJGRu1LbsQvrD",
  "key29": "Gsp1EqQGPtKLLwWp19AaFLDGz5ExbE5uVa5Qvek1G8ZSXU9Jckr9VEBE5j1PicA3Q1SwcwX8nXQxCfLM9RNcjoX",
  "key30": "FcH71z61CHBPSTUjK4s7y32rLCv9QkSPstfvFPwhbAY7hPVkmu8SQ8tPjhXVihJBFMVuyCNiQVqgdjcUYsR5gDc",
  "key31": "2UuaJ6FHniLy7EXimggZKHe3FFE9BhkEjDdRtGvHA2Sxt3otqTrTqfGnG4gArzjonGaLVQrGVS1kFUtKCNy2WiqX",
  "key32": "Q5QrkKreMCVYCcn5UwQhKQh2fn9btdjGKBVRCCm3y7EqqTYoj1PCsqBSpZVvtkEK5p4LMzwnbBhBE21xt5Mz2No",
  "key33": "3Cp6mN7K5dVD34h4Zx2PNzmBezp2CErTy7dkY4PwJZNvsFYLHbReorziSAP2hR16XqQbGCBBFSCsTuddDzVakdg4",
  "key34": "ScSvmMKJL19EauaKqF5H92wAQEjvvydhZmDdzZhz4PTSD5qAt7jSNSmRSE3BoGo9ZEbYHj7Q2TBzxj7F15wPUgd",
  "key35": "4cW6qoUpeekmuYm6ZDd3fY15u5ZJQo15wnfW4XciEGaLZ9ZjkhbV6kWeHdWfswPRUHVFjoSs64xhtYsjsLHzbGu5",
  "key36": "4He9bcKo4foTnUeMBe6QW9DHiBCA2sYCNf4Sk66cVtozkequaqUsru23sFtu9RZwgQVsBAjtwkuamxjLNTuZV133",
  "key37": "53W58S7dRgWFXEXnUYjWXnALR2Vho8zNTZ7y9UyQCG3sgPTsnNY8MGSJUJM1hcA88TJPLw991i9ooPK6wVGixDkg",
  "key38": "3qAZ1EfnuqfGgDmputhh8ef7CZPdkgnHn1L5tKDdxBdb3c7VKFQMThYgZviUqivbkFRJCwcoKohfFRfp4Rv4L54h",
  "key39": "2JvdxDr5q6EYkSHFKBz9bn2eNdCxCEn7Ukt7sMscTi2Jes789ZonqVgrKwchKA5McmDxGBxpCGWHLwFN72nWYm8K",
  "key40": "619ixKKLQeiZiDZpfwkeeMgfX9TcaihtKSg3S15T4LAYf93sga3aouV6XpAVSzL7rzVk1fJ5s3mzHMFLK78tyzeL",
  "key41": "4jiFMeCFnWhdnQLw7ExYCxjUfGKbkV8oo7DuT4DDaioPUJMfVug8Fuvazx3WUyrWcSbTkPGpYKkFHtQDGXzFpah1"
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
