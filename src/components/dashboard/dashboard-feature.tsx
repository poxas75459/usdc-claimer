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
    "2nPcmQeZ7n8KvztYCbTiLTv8BECeZYosis2gubhWeNqC68MESDPG2bSVYFYpT7xQikFa5URiFWth1fRr2CGPHHRN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56HfTEC27MJyUp4NMniY62qBYwJZTPhQLTcyfWyqehW8wvfq6ajpJQJvFvamgzeB6KeFK5zdxzNgDB4HSo7Zfbc3",
  "key1": "67SGESzkzrbYdNPi3BPhZtM89yVJPjhSgMYhwQJenBiyVkk4RZK5CxRVESugsqD3xVj7txZWVe7VY5nQX4QX4z8f",
  "key2": "2PbMFvDonQtFkTPAyFmTSUVwCicfMQgFhqFus8S93kgGR7cJ1y13VK5ZDjnpkmNaKPVzcf9iHGn6sejj9xctAgCz",
  "key3": "4yjgTbPjGHLA85waCaJayoC1gcMdYJUqNUJjGyemWNoBTqhLocrM5UTG9qKkAcre8ZSDdH7WDjoWiZtuUrynjJRM",
  "key4": "3tzuAP5AMUUH9Tm8AndrqRshFNKyvgS6wHDH6uQN8V3aAfnD9JfAsCUhBLomEXCn5jCKfEMD8LLCJjSUNhwn9f3X",
  "key5": "EKkw2HLnoUo962mHGporXnfL2MyGQ1qUhHwhb4JzKKBsqkK57k8vZqiohEE8caD8ygkLDEGVb9xgfnpW9uPSNCv",
  "key6": "3RYkaeHB1KWAFDka1ns6cVjyLnL7RC38yhQGMZr1zDbACyDrzttctzMGCy3QqeUdiSdpPTiJePjY5cpLZHSttS9p",
  "key7": "5zyvCVzHn9FN8Lz66Dy3G1BBg5vBzNnBbZqLcnr6oTUYRdUgB6y3cXWGyXxb9GEEuABGTD49Aiy2xhxe4kXBF8w9",
  "key8": "4HHtpwfzxkgtdmkPq3FoEjbqB9sGpniQD4cM9QLTp9omtxV5iHBNbsYsRTVao2D8Fjdrifsykx3hzpLdXxwp55di",
  "key9": "3gFSMKsAqeL8PhiBxwxe7gUBHXfunNEfph9t2whXWk8i6SV5qsov15xjfoWFAqdqxbGZGBqU1vMobFKc8oLxoRiN",
  "key10": "u28fFqHVnfDGuBBNpVCAizRDPeUNRm74UPtHpaDtxGxCFs1Sk1TAL3GaEGiWwqTfnK4dJMfiCQZjhbJz6DTLzWU",
  "key11": "4hMSL6sua7Yba5FQ5o89ebP9dVREm9RNBmr24JLiUnTvb8CeDZZMpfeLpit5Pofp2o5aDq7GQgiU6BMBs2DKaKZh",
  "key12": "ULa3NuNWYcP7Te8oxmhT62EJGEWXtERNwxuLzVg7ir2KaKkDYCUNLMyFCyLXfD8uVa9329gRRE5uMo7Eq2rmfCk",
  "key13": "3ynpDcBpod6xYqKwbNGMwuA6cBkqCnS3nvuuW8SX2xTP7FXtZT7JDCSrSzWSwkQW4uPq27foFKTvqDZGXtNWC9gA",
  "key14": "2jEPRWB4pg7CxbzJJtwmNdMm7q59Je9Per3RoH3Lh3tS5tuvtP4niwvMcjUsFhUqHH8o9JvSxwYJrRK8eHUJ5EXk",
  "key15": "5REcV8xqRcYKNZXKCcpNQ9iAa7aEgmRCiq1hzAQ5qxNse8RPhUX1ZTYzeYR8VBRPzaHxYLjhN1f26nHhEZaEkueR",
  "key16": "5i5tPU1gJQath25jJske7dHFXpzGdFB7zofBT9RBBK6qf9ythsWeLtPHd5RheVxkkqh4o61skrigzcNja8nGbF6p",
  "key17": "4uuxWUqxg1KijT46XCEVZtkE4GMpeH3kW4xskG2BYJnCGo6cQZ47twGacMW6saUXkK5or9AVHDRBHD1qWwiRZH3K",
  "key18": "67W6vUZP6DTTgs6pA7Zk8BC15bEDpm6NpH5E6s7gWTALBpgtjECKpCAzndXDBu39eTAueuJQnFsEzH6KK87KZe7f",
  "key19": "y1CHvN81hrAppbeYwgEu5cURWq9VRijmohcVosGwpNt1bezmqDWqddqVaMLV3tJyEhKy6AYUukh85ze1y8qvgnp",
  "key20": "4uT8PpBc2bzMcwsd37ysB6LU9Jb43xjocCyy4GgiGocgxnhiWQC6ksSSxoiY5HggJYLoQuKbqUQ7B7e6hMNJiLcA",
  "key21": "33beGVAaPMzmxA1joUEkuEQUGjoLrYro3eDBYhGkttYeSsGxuuBgyj5d6imYWYFcBewetb732xAUarZbq5QAxiVw",
  "key22": "A4DHXNHXBZ7NJXkEP1Qd5zqE1ozSNY9b87pdfk96JbZgmUF5SvtwaNFuURSRatUvXRUHojvowkR67fEVtfCnhQM",
  "key23": "4vqhsuD8EfsZpJEYh7WTVKz1AuDfwAbecjfTUwZG2pqtSNHzm88652FMEb49Bxsi7oxPfMeQ8rEdt5WnJVzHqhsY",
  "key24": "4FUU2FtGC5DtjFZx3vJoJY47oYbgn21PdCk6ekJYg5QWzFb6NZfxSu69T2LoKYP8tTBMXDAZGQDHhLDUkH3ChKgV",
  "key25": "3FALm6t4eoZKKoBrCDeTc1wBN73HQF9mG7Hwu8Gr96Z6Bn5rVxr2gGFdFkxf5U2vq5mRh1ufrjVUF91BZh4UzqR6",
  "key26": "36oZYg1h93rUvwTorjwmYqGRFzY9hCuQb4XGQDpDwebKWBZxWjurnqaPRYs1MbCEqU3BD65RYKLoqvvAdH1F1geD",
  "key27": "64332jkmGZi3DjLixYptQt1CKN9hLgKVzYzxQtcqFrk9GffE3CVej77udUa993xhRmvvrqHgUXNT2d7TUGdpRFFT",
  "key28": "3kGvvrbGSQNEiN48iNd6XwLf4BNjfvKrPGHHh1G2MDPFx5jbr39WgphAf4LHvRDr8PpL2QnWepdCjxCn3Gj9KEJ",
  "key29": "2Le5rMbkDnk1R43VordK24YjYBudYSKsvwq4eiLz5Kf4b7ykfCXmvT2L68b4knhB5KcAUQUnSnNt5s2vwsXb12eT"
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
