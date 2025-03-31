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
    "75M1NuWRwx5rov2GB9wMzjNG6pShpvXYkSJ47dSNnvjSvsD7M2D86tQTJyhS6dvfyyvYTj8s4LfbAtQpHore52W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4n4NGW9XHMAARscpFUvKbd1HndvxTwYMNPTZhsERrqjxUFgyctM9r55s6x1vbpNyreFo4LcNExTctLkzte25E7BB",
  "key1": "3JVXzbXZGUcEbpUebUnUSzTUiPnFuW35UBtMAMVTgkLa5Moe2v7vKcNVu4uYXhT4HeWFieBkEUjYXNV6f6FiNaY",
  "key2": "3vuWuUSt7q6jfZEeL2H9mFKvC6j1Z3jNT7C4bMcsxZShbfQQRCikcivhjREBHxKC4JjPoGNEUjSsutrf9QibDH4W",
  "key3": "2kf3LrL87SxmhAVPLXTX9dUHS72KTMGtv8ckazHFeNNU43z9PFpGtoL1W27ktoNc7adhxhrYzWmR3x3pp38o8ZYU",
  "key4": "Xxjpw4f8BRfB45CiKrC8GBgvMU4kRpBjKnbJiXGCJeD3gXSexRaWhjqrmNewXQdbXS9SBtnDBBBUBHqNm3cVFpH",
  "key5": "2RSwStTQPAVghfnV3XUty7QYiefUVnYuEDZYWdJFmyyJqXqr9gguhXnG2EYkTsv2Y5WtLwHLfgmDD7WAxgTF5rk9",
  "key6": "3p9jbfPFWzgSoY5PoQy3P9YxEtXxVAXaZtA49RBhiLtAEUmzkTJoEKNuDbE4QpUfGc4gWE91aV4CUepP7Te3eJMK",
  "key7": "hgihkGb8nZLUhzqcD6DFhSvQ2sNx2xYPj5S1AS7Y9cuAvZebWjJSV4FDCp5fcEE9sSEvBLfABuy4Mf2bJoeLSNU",
  "key8": "4Xgkbm5hgHiy1dBbNRvNQJypTbTHLv7zu8uKf7tK5VvEbdWLvzU9PuttTc34FoS6Ph5cUj3jjhuGEEno3yWZENq4",
  "key9": "53465ra8VFPVEgfD2t8c6eFkieAxtXoLhvMddMiLoSRcjCCDqPwG4kHSDcSt5dAT1rhxDKcn35LG44HJ1bWEyizD",
  "key10": "5T9d7aGKcLiR9HSJWtwQs9BDYTaCpji7T7Lr1TN8QY4TMbXzJsyeM9Z3i4YesHPv7Lcq5gLnz66A8ZxykLKzQTF9",
  "key11": "5cmGZPCWi3gRf33jbrfQzDdbk1XcsDPnu9k3oggVds8NiFWBS4ELgubD6WLZ5U8s4gfyDTo2QqbHgwjVrqMFdNfW",
  "key12": "2wFxwwQk3yp9jfMfmFzCnPw54x3JoXqMc8gN4aVfh6gyjGPUM9ULCFfaB1jkuMa2r15BJPE65xhimMpKWcZBzjzo",
  "key13": "6DnEKJa85ELqvvUPQCu88MdEFZqUgcXmLsTbdMbLZezJab2gbkZ69iv6WSunAd2jSEke7YMuks6c4VEkBH4VDqW",
  "key14": "5VtfSnCcCpqRGjk47NqEAVfuHYzf341utEK1AxPh3jCWsK4ZqWGh1241bhXBMaipWbwgEqkRgSLim66hVe6Ga3kC",
  "key15": "54ehjzgifhydujDohikDYx6gg5Jr1U641Tphtk2Y7EbfXTmjiEY7sc9AGFr2q2fB6NYbzZA7Pxu1x1PdVjwwvGX1",
  "key16": "2jRPPX34YAUqFtybBf7bFGvo6bdNmM9kPk1oVvxrNTyv4ynBGoFY7QtcDtYEGzHTNXf9M6dnPMKVAzKKuDPfhGPx",
  "key17": "5i1BgzfQ7m1mT4nXSFwRtJB6bGTBrzqswPXojevmVM1TQGQn4R27u8abW8Gp6DY7anjADJwjwgHwpAL2WsRTKqHK",
  "key18": "cDR92hLMgHRuT29cQjGjuZAQFajzUWr4q7ysLLAgmsg6VkGAr4cS7jd6SrhM5PNcJtu7eqMNU6DQCKTwUTpK6Jx",
  "key19": "5GMg6zyEUNEWrix7hASjwZF3qEvD7XuYbuMxNQFKYfUhLHTbH7XDsziehkGh8U6KrfAPRU46whTrRGPyxx59GePj",
  "key20": "442nyVwzwL3mcirXPa2Nyzz2pP4m6FHWtutK7tHfoZ53LMP4RkkBLAnHT9Ygahjd6frW1yRCA6gzZpRBMpRahxLy",
  "key21": "4i8HCJYnB8Gw3vwRiGUZy7BUkujg5Ba4nBqU6AAMsxH69TZ7opLE9zGMtHXN94owX6Pe4GnRet3doUs8pVywRDHy",
  "key22": "3pzNekkjDrgZQAd8LrUp4vkw575yzY4CnGTCV5RgGMLTpv5SZmHreBiFfvmHvfHh2gmKjKegu2kLwjdcujHqmeC5",
  "key23": "5fhpTi2Dgbj5LMb81ugNzie9L7BpYmUkqu8QpuNzTpeJchEhPFN5PBh5tWULJpMdQNu4DQ6purTtVFRVxHULTUqV",
  "key24": "5KurLFHBwL4sjDvWY8Hxs6ghLVGrn7RVzeizTRYPkJkTuTzgsD77yVkKzenu7u3NaEJKfEFV3kTvqTEHg3pPzHnD",
  "key25": "39tATyxxVCCoM5hbtkBLaTww7BpSBpsxrYUJvcpCdF1rL7dNTBcU31JhUQJv2uiywuAL48G8TkNULu9RZhRwEcNL",
  "key26": "4p3mZoh6Q547UfUmEvugnSp8jMUipnf8S5i4hvW5mPwgjUwjQdwwR87Mq8CCWFsfUPCvNiJZpfvXkq9926295yrM",
  "key27": "5asfJ9XyLmh42tCXFA9Sjynn71x693kK5zQtQXXEUJForTWHuSUt2bYb3mn3FySQL4JrSA8tpp3q9WB9H5BsEhdC",
  "key28": "ys1XYuwSokkbgnJceJF1NoCG5VYrTTpWzhx2miBfoXBNxbHsBvjtzhXqAwiWSTQ6Q4ayfKkSUKszBrC22ANntBg",
  "key29": "5Te71vL5DgHevqyqYzf89vDXcHatEb9YZg5TWDMH32VeFVAqk21MEcM43dLFZ4uD7Rq3N9RJRrU6hXbaBkNThRAV",
  "key30": "GZ9HMDPG67D7HiTdRrocPaFSMUEi1rHCuzDjkeziQvirqUNvu5KjwNxgY4E1tRYD99817xYPPbFDPjq5oF5MyRo",
  "key31": "r3o1MzvTXuhPZFf7DqDm3YEdRujFQdzRTexG9tD2JD1mW7avri1GnskjRzHGsdz2qaGySmGqPCZVqsopQJthrN8",
  "key32": "3QaymR4fdvNodW2ApCm6eyQTTzv6EMZ8jhaiKUxDjeE5yLUShk94u6ES12BoE5gnwCisSjEBe7xJVAnCC7i9DcHY",
  "key33": "3hEBtMv69TXTvNBf4JUUSV7ieDh3wFD5v6LZvLfisaCgoJatY1QDnppcMcsxX8yMFpzFv7b169tdJZUkMxdVUWy1",
  "key34": "2JKhQyJtFhaKZwMd6eGWtuDEwpNPXNTh3T1s6bGqvXrSCu5syAybGxHufiiAfAX2F1aiEGDQuGmnavXhWgAHM4Lh",
  "key35": "jahVBEmxTapvgCX5tQQ4fL7wYMmwiK5o1UPbGF83Q11JGYyMHfngC9hfxm7zE9W2NV8i9TE9CJS62vZoGWQfWvF",
  "key36": "4dXpd9nTrqEheVyaCLVnyjJufh7hRzP7iaB5VRN76d6Aou6YoFCYnQKvVeDw7PW2CwkknVu8cBgaSdMY8pZGdXd9",
  "key37": "4QJnXfQs93PooDBodJeKqabw1W5tKW4FjNB4Zuj7P5Ho9rc65PsWVo8mCxt1whtFQFisDDXuhBS1zy39ZrF9sGq8",
  "key38": "38FXzsBsMsBL86XXhGTN6jLMZmosxE9S2SjKP1Zdx4WheAXHAvr2h1rBRdfyeZV2gzPRB7sy1bxtLjEm2ZGFN1n2"
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
