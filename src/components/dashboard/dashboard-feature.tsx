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
    "3SJHL6FzTFgJguK2JcdNfRKunspNFGCdfosc3K4YM5eqvGKbw6DTo5cgViRVXx31M5BSegXu3xup31Y3xYFgXGtZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EnFj5ksrSMmzQ6KgFckrU1dDCQgjKia8Me62YHhxuK76gruMqMGcbo3Ft9VY22TCfzmJraDVyq3oXGyZMvYtjgu",
  "key1": "3SajdLc2VJB8JRXbm3RvzkFFfSyZmnP76h7xzUVenCamUxWSSCjxZV51xVpfBE57CuJd4wDKoQNqX1GKp9WcoXT7",
  "key2": "4wEzyFtusm2P1PQt5oxYRagcSXVUi5fvgYybVv89JPaP7VL6Ckgjiwfay846WR1XiBsTxt4nZHppXwmBe6116ZXt",
  "key3": "4axMQmmK3o8EGujfdt8gAuqEV5FSi59YioxooAGPLnpAoAa1sPuhsdbW5iNmiuSQ1oZTWqbwpdiqwPQY5GBQZHwx",
  "key4": "4RrJmutgS6eZSpLaoLU8TTAvDa5XzkKQQueENSBAwueX7WQbNynXsAwpVRs251aaAQZLZqRB3qxhnLGjE9pkd5Yg",
  "key5": "3VyuUzJoF3hfHLpLYodRP5D62mj3o6skdyjX1hbJ29HSPtQvcNCymEoZw3xtP7tzafEriZYKDEeh83tJh1gnP6x7",
  "key6": "2JV6wBcfrk2j146Eu73wxGxKBxfvVKwspedfh4fuw8bXG2PZZGuafuPrrLbF2ZaGwkSdrLiRsRRLfWmkhjxMDh1q",
  "key7": "5VjwwrJj7nHCxSqob9KmAxWE414uXYZpFhuefR2Vfu1jxwAwSWA54eHKZwDEs3RpwzCF2obu93ipkf8V7ErpVtr4",
  "key8": "4uLevqaD9t4zZcDStQHy648vnAYZhqZQpfdLJQwhkTtgR1xKYoG2sXYuGzXCDd2MqtrGYvPEybetrTtzyCvWufEH",
  "key9": "cCThT21ut1cZfrghaHXLK56mi29Mr7wrwR23p9c4YjUa7ZiEfHS4eFWNbD7a3nncegi1VEGbXcv3gi75jwKGw5n",
  "key10": "4gEsKWmj64Uyxhid3JbMCLCHZzgaH5sZZ7gE2LYdrCy5R8fkUV4uWMjzrjVMmwLxdfyVTXi1XcwhjPytuU5f4WNM",
  "key11": "5RpuGjMC8Z9Exzf1CzdAK3T4SFvLSxgQyKrWogxRsi4NQKX6LsM59tRFhzSxS6EWZPptwSaMUDEZRta92LoGv4eJ",
  "key12": "4atBShnvN27nPYjt9MKAWgY8xhcppXzk2XCVF4TTxGofSbjbXeGuUiCJqp76VsvubB6pi7ZpxJcW5XxACMh6mnu2",
  "key13": "2hnCWLNYDpT58EysRsR4uHPZipMzDwScDbJ2cFy9ERxxySbZBZ6UyaeDzQeqs2RXa9cHrj78EUSbniasTgu8kZFJ",
  "key14": "2MbXd7hGddTGDdhdrPyu6WX5CLziMasMok1NjpdtUi94FPrYg1dh7V9BS5HywJFprPXutjDtZqiGBBjkwJUiPnPH",
  "key15": "2HWu1q8S5AkBQDhaETCfTbj11udALHLRtzHzTqSnJCEjNePHg9VpnTV2n7gcGi2Sdw2VLgjF7LPiqgtB888yUriL",
  "key16": "3BvMUiKL4uFsPbzZqcTmMKA3LjD9RHztViFMcg5gQdQNSuphkP12u6prPonYuxFFpcfb1amYEFXLU8eVJNsToUXx",
  "key17": "4toMjF6QZVAxAci3dnGNpZTwickySPmPUkbnRXK8WYFxhU8E7yeJMu3fnwe4ebmxVsP38KPKN7tF74xiSRpqwx6V",
  "key18": "61mrpzRmyL21sCv98MGTaGvUSuSDKQGXxbGsmKegDybXiCcDCzk6PTQNmt7pNCiYbpBKPiNjwrhiNA36cPYhBuAr",
  "key19": "3rw4EgbFQVMD4t7dL1vVZ8ZvrmYWyuZuFke91K1dvPKQrXidx9QUmWd2yW96CuNbYBh6P65Ba4RxCQpEghf6RCc1",
  "key20": "5ntgjLcvFJcfLxg8NpejKUsXm5y2jN6HQAEyzUoYTnhxJVWLhtPVYrmF4JmxjwZ3mGwzwyVaXb8UvNhEyoBbDMYm",
  "key21": "5xrri1JbhfkZ72iD1jJ2dtHFb849iHumZae8kHGRv69ZkrwcCgooCg5nzvjNMkwse4KFwS2vRacufLCB3JtmmKdM",
  "key22": "5ysNDmEBf6kShWso8ZiWvnkSreoteLY1EXLbjBqPnmJRLnxx6aAVnLSxHwdCPa749YK1C7MkPFmYAFuPKSyXVz5F",
  "key23": "mZzheGNkhAQ7x874spU9vNVCidARrVXNuk5Js6TrroWjamwHza2ijhF35HP2B9hMcVLioNhKUvGVcSePacNQCuP",
  "key24": "5Fao9TcwJ78vXfRHoqxXXtrLZ7Gmi7TJDDbhb2Z2PnVC83z1PsedmzkzsVeQdDCtodZUQ5nmXfyj4nf9YspF9P2X",
  "key25": "22pG16d1dtrtFZf7Y44pnpcSUdqnumuakrc4HftQn1kEUKtuyCvVUZ8KYw7qq44HDodK6LM35bnT6HCA7V18rRa4",
  "key26": "63NHbUgqvaJWuNtBnigUKTnrVavDzcTv2uMMXsL543as44vjq8Vde6e7WxmrxFdKdJWECYbSFWU4EnWwxMm5Gdqw",
  "key27": "4jGzvsB38QW1dpUh7mrp4oXgwvvSViBK1S9JASA8kwqy9vWVKEBDN3okCxjb4VXPFE47EsQBfPQ2JvtKpC1kwd9q",
  "key28": "5ejP5WLAFiZ7GZ31t39yqVbDVc6XSHqzFL3jwMyZ1hRqdCa3JWNXuXodUWxNMcY1oNfEyXxghRBxtdSVqTziepRp",
  "key29": "4KJJdAgfCfBwzVxm1RwY9CJEefnudjGdYHMe3sDW2Kmtvo8MKXcvDmF39TEFnNS6cuVaVDdfuLLe2J1bZ8ncr5bM",
  "key30": "2QKKJNoeeQvXWtMGvTY9qjtxAGV9eCyvgoRf7TTFsFPGGz72JR91W2Ag6vZbb16yjrSjNGQGCPzVMYeyS8kFx4yt",
  "key31": "4nUd7kDoDTDGX1GSTpXhuUyPp79JN6npbrhQ9qENqtyhuHXZsSXUtA9qvngkjN6KA9NXJDdA4RFtprGQ97UsD3ff",
  "key32": "5SAWjGCZterABx53VjrMsedsz6iR7HxZLZ2As9ApP6ErJivaGGeLVnuwUJt7dzf9A6sYYwHYwefcnR8YdHyjNMrM",
  "key33": "jDQUEoGySXVPRVitDg9kFbiNvgAwfs6Mzs7zBAf9VgDyrDY85EiuSyZuCFaTMUMBQxjMNRyfGMV8q3Fhe96CvSH",
  "key34": "3HQp4KRb5e4JAB2kv5QiGHH1YWTcqUwgtJqiGsC2wzy54TwBuYsmvyWHDopd563ifCZEQA5xhxvkXPZnC4gcox1",
  "key35": "5VCPGBk2PWf5C2VBhxVNz2Cd36CxsJG1QR4uHNWb1ZrUkuqp42sniQ3hs8fw5BqZRonYeHYGHo5YK78C5CnwTCAC",
  "key36": "5fGfNby5xyioZu8pLKB69Y4WedHcspRQmY5AdtA8Tw5RVqRkQn83W9cx2nhb6WXd6sUfcYVgQxQyUdrtTR1C9tyt",
  "key37": "aFyBkvNSjqKapw7MSwjheh1usG7R9Hpag7Mo22xWa1Ed3veBMtux71EZMCSAax2nXsWkbVt9T3WVZcbGn4F9J26",
  "key38": "XypMMLx1X4jVqjLXsiYYaFPpRhMHVHx7E6RvhP1sJBBq9q9TPgHy1nYAkQNLgzVkPuxutFC1pB1Xrdu1k8Jng4x",
  "key39": "2cZvQjfYTrLxTR5PDnQx5L7MMM1B4dAGizgrweWftT4ork6Aetkm3SizWYdvcNRZK8dbjHStYReAYuafE4mqrCqi",
  "key40": "h4gXW857GDAFHdeLtAQTqmUhgZb97NbbBFjZ26RbwfqYTtHKRPKNNbEzGZjueJ5FaSM5SECYVRj7vawSM9mfNvZ",
  "key41": "58j6tjpQgLBHvLEyTptXHf1rc78WGKpEBE34QL7GE65mGyQLA8tLVzYTXDdCW3kx3EjUjgKi4EYBbeZheFL9rgAh",
  "key42": "J2kgMct6tD19MWrRk7XffBc3kidKgGPTFaAjssrejQtvF8LT2MNbVuPU9ZqEDQdpqLYtPA9s7ggS4uT6JUAbFEK",
  "key43": "3cZ6pgpAWuPY3p5iTzcNKKAWEGKrC8Whqci4YkXnK24MC4JZ9wcDgBzBghWoJciGdiJmnNZKUcKpGyi9YXGfYnq4",
  "key44": "5NahBFLKwFfGtYSnDnhhzbvQ5qjoxgi6geozY4gQq2Wr3RxVDFsvNumK8gKwZocDBnuJHGN4QQt6nYPTJBhsCW9V",
  "key45": "agYi9W6B11qeL1Fj7bQ4PZ9ZT4phm8BuT7LdHKHogTNst5FF1sDAQhZ5oVzRm86LLFRGXuspYLy6FR3vXiyBTHY",
  "key46": "5t7yJz4g6hw6XSJ6EesiM7z5uxWm67nZfeaBHofJK28Hw6dTgMGb4DVqMxujcYJmqQWUTkDTLgRVSZzmn9pUAcHm",
  "key47": "SjWdpptv776tGq3VNThNUus7LX1JmkbNcuq9BPfn3fGbMaMiFypmBHKDDnfBHx5XLHRg33cDjTjEJWVeQcWqtcG"
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
