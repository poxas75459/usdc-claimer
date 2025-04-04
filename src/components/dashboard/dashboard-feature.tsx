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
    "2jeeHG8xDCHyzRvziQKY2geHPSDyDt3jDUcXfWm2Kb3pMUyPd9YTai5LDzWGqHbkZJ377rYbJBfsW81iwDeazi7r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ivzX3LqT7R5vAtuakBVNhLeZTZZ2PUjiLGSXjawjUMyCiXuj1U6VoxZb9t9m9poWwB7zqM8RKJhuu6yJwfFBpk6",
  "key1": "4vAEXeYzAGCuvFFvKtWmEjGcwkUN3smQ6wYbaemZNPoxfjQDhedaxDRt862cp8Zfn44PGxNXjwVa8yu7ieTEAkU5",
  "key2": "5Ax5JwHksCHBPcBBCRL1G43YtwZBC1GRvZxJW6cVC1Z9SLZ16V9LvLoCwd9B4bnFu82GGgY3nrCd2ezqvVHVe1FX",
  "key3": "37nTzpvtScS1ykn9oEzxB2xnEkywp5EsirB36wRNcsHoohWxHvkWjn3mLfEPwf3TZYrHG6UhdBfpYKhaJGZE4xxz",
  "key4": "5e8ahgmeMeaLCa75H1b4wiuofbYwz9ZfreWUi989M1378RFFb9KUaRNP1W9zT7Ve2zsUhxtLLzYJPRUn3C1WWiro",
  "key5": "5RCP7JoQCk1MiFSrGFpvoWZFHgye97UCxiXK3rxkHR94NRvMsuHLqAkf5majXFZJGXqFDPGrRNwKY2x396JS4FdS",
  "key6": "4Wx6RTeDEPm515QyDkzdGvexQW7hHh1f1U7pzZWFTKBfaMCg14DpTKpHZ2jA8JUMGa3mkfvDP5aGvZNLeW2zRtSq",
  "key7": "47zHT4BKmdvoLwLPMZXbsew8NujtjLqCUzEtTXi8VUfnBdh3dc8i2RYTg8Le7XvgZUiTrXtzmPhmerrXjVPD8kKR",
  "key8": "3sg4xp3ZCk61Wh51BcRUWCnAi8tAfR5KEEv8J8zV2txiRFzVz2vVhSu2ajAY5XxFA8as874rJoMthwcprEDmBncq",
  "key9": "3z2uCxP1zbcY19dDwXbJ37iN74GLyuicsgxGF8sFXTUndznoBS4CCMjyVjPnPKDa7FfuqmDHhmrHh77dV3tQFVdx",
  "key10": "52AJYUiUiHpSpXXTJeJ5etFcWqiKYejH3YC5af7TkXXS6559q2HPQbRqPY5m15ohtWghKyGfhE2N4xh9e6cgz6oA",
  "key11": "3j5AifKjCpG33VCAaAdzgahNWWDqYKNUGuAMV18J61qmdwsx5GJmy2xQ2qi995GM1hj8Q7AWMN82fJMrTK1DfJFw",
  "key12": "5PzSuJxX1CpoKzVJcAx3chQ7doDN4uau3bjdJH8HQQJu5m3H3wBZYd48zGA3on7ELy73qJUVB5f7r4p7U8BftUFS",
  "key13": "45HUSbpVuWBkjUyPZggEvB5NG5us4UHLc6EtMqnuCp9QbzS3wQsLmjeZnz7MP2eoc9VDwjhx25VPjizbWxYb6pKP",
  "key14": "yUuk2nXFoFEzuTwm4ysp7obeQQGjefp1zAzqRHv2D8mqg2gEEdXPpRjfGuq5j4yvkpUfmb1aLjeRuGeLTGLBVvH",
  "key15": "chgjVqzBS2gX2dc9wEKRqiMVSnfqMwBZxP6DFHFNAhuXnEtvannzGWrVTYSivXEqtJGaNhxS7ddqTNnXbM3CDkc",
  "key16": "23L2JHqv9eZoqU5V3gwnLL1biQrFEXL5qZeWjCWJ6RSaTCNGPRjqS3FrHA7izr61GVXViDhuQGJe3oR3AXtifmf2",
  "key17": "GnkaizyhsxNfUv8ufSet5TNJmSc3wPCodY4TjehYJpTmRnpiSSTgKSQuYnBXjJUgQkYD34XS7mV6vS8sxZT8LPT",
  "key18": "5MFBGVDnRhiqJdhYCPMKwWB7MEoba7UoCYcDhVc4gq8ob66Axhdy1tZSK4RZWpL4aQmnrXn64dBuvDdexZn8AkPg",
  "key19": "5RySVRx9Hp52JZz4Ga9LCQGhmNbTicRVRS5VWvzxMayKL2PgPgZvEWaQya2Fc6M1S3uoxCS24LiGiV36Uv31fhdm",
  "key20": "3VuJe9R8G6DaHk5cessEf3EQGdpXDBbqL1aXUkXxNZSM9qHfV6tvCcUU2LKHEojAJ6YdovecU9YAXP4sptM4tC96",
  "key21": "4xAUfKZUimQA4tSG5Grmb9LqFmUEkjh8VbRohdykrgtJZ2G7t7Xc4qwtHS2WrZ8CYWsPceJsiUks8KPYCncyCMGg",
  "key22": "5Y8hz7USic1dqbj3gZsmPZj7E6A1DUNYm2XX8BqRaqMX72CrH37CP5R3wM9gJnpwgSFc8kQgePrEoEh9TvBeyJsQ",
  "key23": "52Noug1MZKBDhagyKKwD34n1e522fdEkyxczrJgW7gvESJp9UmscgQZQQkLS7YEnABeLgMDNQE74u2RokpQcwjoe",
  "key24": "2rVhwt885mRZKygZ1DKcnCLAXVyynEQG93ymzckvzxxwaspdTE7jEJGbKX8LWMN5ELVBetSkkxcPwbJH2rLWakS3",
  "key25": "39RCQysmWVu68MFLr4hnMzyBBQVdxS9RFoXkuWTtNy28TFRPdKFp2B7JuEiWYbFUr3jXoVXqFfDwG3skhFxKCDfZ",
  "key26": "2e9nzjpmtKx3m1ChgKg3VFTmS5dxPEkidv3Lv9r8C15qQ6FLSo6s15GUe6vRKjTjgXEsC5p7QqU2ZmV9SPYmqXZC",
  "key27": "2YhXz4anYCGQ5ySxhiAQwpV6Qc9uxQfKmTBNBfaf7mpLpWdcuaDzD9m6TgxzuBN4DLBny1LUjpc6EPAc9MvKpozn",
  "key28": "2JskHqVJJfate2RFEeUJjfMUerfCqQHZN6Y7VpgiRhvMdCrheYrsUTmQneWJ5ogRth95hNzRD6QHmr6TDG6Br5kH",
  "key29": "4W3aNsPcLEknSiYjRdPbjn1Qb6GFrS9Umpx9mBd9NWN8nUTd1gtHw6yU9DbSG59YhiPGM5pY1w1eYbLvvoefwtyL",
  "key30": "5VbYsGYea61diiww6rrHeMbs46tnVqgKCoq65DGX8sCAu9VpLE1jTo6CrisDQhEepCiQkKUVNRt2sz9HLHSRvahf",
  "key31": "3Bja1k2J7BHfck8YP3v2NLSgyy7RzKMfj77put5KbsDN14ZtsjXyyAVW2fNQREHJeCX711WuHDXYJ5nkG7ixtFxz",
  "key32": "2qE8eLLQDHY6UhfP3Jkuwcqa3FYTohXVJtFoxp7ezPpt5mU2UHxiRz8AEsTCTio7Pd9V7hTdgpinmBCNcsFTziqi",
  "key33": "2eT179bnJgKArC5s4Bpz7XahPXF6TXFyf9tYzkLSj1WZcU7Jepusshu4sU2Uz8EUVzsh1gPvBZcTTyCRSUsN49yR",
  "key34": "2hjVnsf9RtdE3L6wPoc3Wpt5Vi9JHRf6AQ1gyBYPPbecXFd9oJbHdZLxiFV9uLWgS979MjXanYEiPxAYV7BWovz6"
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
