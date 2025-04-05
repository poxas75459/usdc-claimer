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
    "3AjAoJPtHgDVaDRmLVtgPU7WwoDLLTak2Au5c1sV43eMobber31ko9ieQpxMKp9eG2MehWH5BRVm73bZUgiAr1TK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26GvvVGszcBfNZqbQKSvdY1cJGkP3i9nUGDBtk8TPf2HqA51Y5otU56wqWZTH1AfP6J2MyXr9LYiLNdzQipxEoa3",
  "key1": "3L2eDnmz8efDUDjAtBV8vmSXafBPw1iAsHaX9RtukMy5EhEZ69nJodNbHSwBZjxfx7GNoj1STrT37RRz9iW7VGEH",
  "key2": "2FKcAUTBzYrAtXmtjvdHHhh76EUtgDQQb35CGaoFLHn4ziH3uAB2tJicU7puxHTm8E644xQxDUHts7qQKGSG7Kgt",
  "key3": "2iD9qnEfCv65YMpAryQzv8bnruShskwmVTde1EJHiBaVzcCghhQzcx6GQGgpLxA37t1f38Vb4TQx4UjcDUcnjJKp",
  "key4": "4Z8xiesnMN8kdsUi5CKBxe9iGXT6xLfzrRo6uDfzavbUR1rvcNtBYC7X8sssztNq1jE42yk2ZUxbjs2AXSTTciMs",
  "key5": "WbdZd1kHmkFP6ivzq6iYGeTjUwsfsooNvVASc9HHfKK7c6UR2gsSit8YVCEbaFftWWisWD3nikevzaAt7ofoaW6",
  "key6": "3Lku6jpjTxzHFjsP85jdFgoyKZq3TSgKAy4jKd4TQHNeEAqpDAhUCLR2KMGK7yuUUfr7YLbMhjSDavTgWfMWP8hW",
  "key7": "2xbhbg2oRLKwScEhjn4mzqshTrCkSMtAz4Xvjtwg5chMgwR2w1piaHB6S9dtVSHKorzFgq14SZAEYP2adcAAH8hW",
  "key8": "65GxzAJy8Yh6FZoePaQD4cUJmPSAwDzUk2KPwoA9Tygkhw8sPQoQN3cnzF23ejjgNmPXksVFrh1aiLAjSriwXxah",
  "key9": "4dXbYoNFnof6CnT3xF8gjtd7pbVeCnGbL5Xy8GvUzshGXttZrG73XhVnhZYScoWRDD3GqVT6Rpw6A1MYdjYoucwo",
  "key10": "3cSHYDZ9KNXtM6nF6iBsBmRJGqWfRx4ntWSydHEKRHKS1waGDd1p3xGsxnXAaSCBjQRtwQoUSHUz8fAEaiEu59hG",
  "key11": "3XXGhD4qQNTFESrAY5KrybLEGh4Q7qNFZgdYhtRoHngZtSkGVqgviTUJaQ3A2TdknC8RKccPS7Fj3YvBwQg1waiU",
  "key12": "2NhamyDE5W7uoaSdePM2VZN4hYhsePY4h9YJmxUGJJzxgXbVwizFk1WnGVFYNBFNbPkse586Ld4bmo4Hiut9UZHU",
  "key13": "4DHK5wsk34N9psVmKBm7ubvaNSPDesUhiRpH3xHin4JkMfx4aovCoa72G2frhJBVTkbYQQ3ZqcF41S7diskc8Hn3",
  "key14": "51Qrgixe6y5dCyer1AU7KSwk9kkgxxL4x7fjyzz38H3Qsc2Fto5TFbmLMnkPWcUaqY2xef9cYrst27LZmdL1tnv6",
  "key15": "2K6PUfzzcuDwkfi3ksYoFzY1Xhure86tXw2XHKHsCe9MoFMnZgPJNfy1K1ayGstvTZgrvtnq6ja94wVvmq4ce4kj",
  "key16": "2ZanBCy1oVZzxXboLytcPsPdtZxzwBE7gea3Bg9sU9DQq7TAcVLdab3Yc8rschuK5mW8x8YjoGfg6CcTSrsdWeNy",
  "key17": "5gQgiV66MCFMzFbT23Mo91dc31SizRcXMAvd77e9Gyc5nAURkBJx725ggRbcZxT17xJsmuwRwJQMPvRu51qWqEs9",
  "key18": "5gqXenCZe8Trw8VPkyJND4xh527E1gjCMAypcotySQ553yQo1iTKMXmfqaKnrcze4zyshj1MU84kSwQsQ18Ezqf2",
  "key19": "28W2VjjM2rSrtn6QmMsih5zTVLs71edTymSYmnK9AbMZbZ3pwMJWweSTPmx6XfAbvdjfjoYs2dBLvsEwaCS3baH7",
  "key20": "4WEU9raWJvixn6hWuaSwwDyA31cPsgnXp8MyX6efguNWPnFP1xvXVyqmxLZ4qcudfLhEB8HtGvHa1wXS4gcvSaVV",
  "key21": "wFjkCoe5iGgobY3oisTLaBt3J5znHv7ENUPxpX8VkxZtXMQpwbSWULj413uRiyPiJemrxG9oMSZzM1LkrDgmeDb",
  "key22": "5SeA1yfCQ18k3biz9qmzfbLrnd5QN35TTjsrjcZjpKsaTfLG1MVjFp3kHE1o2wvJCdPHrczJduv2ernqCt2nLJNU",
  "key23": "3nU73B1cAowpPsQqgvp9SUNWM1BbRPwTrajteZUovj2czTWeZ48ZjCcddepstfLnzvDiHQBMkMBadDjj4QfKEeLs",
  "key24": "3xY7dtvv4Tr4dj7UegSNhTvQdeqiqVCzKpjiHuQrvU9veoi4uKQCJjPDBeccDeZR6hwrC3BDkpwaRrE98a84J9z4",
  "key25": "4UBuggeaJNXXEtRgzvTgFmG29Y1uWpfCGxsvkJsCeBxGcShqoQM5ZHhbn9ktZ4L2Hp87R5Z1pJq1cu1LUhKHrF1Z",
  "key26": "6KrKQgsLS5Ev4M4SJsFm8zW1V1bXpY6xbZQQjeBCRds8izMHWPuNJssGRqmAFdMzrH85HUe2MwZ8UeET5UpJnr8",
  "key27": "2ns9LuW4ybsuVhh3g59LRyDZTBGmx3FyPQFqPYwhuBdhnW8wYmeapAxvM2yJfmrXLVapRyi6nB8Dhjv3Y7fb2RfD",
  "key28": "ADWrvAwbS9EoD25nQhm7QrBdGX4t5mwtmikiE1FYouPjcMpRfzyve6eCAcR9c7YtK9yoUDsze5sjZ2ZG5WPkahg",
  "key29": "5UKf7oCkBhBqL94vFTSAr7M6myfTKi3PWY6vjKLcZjYaVdB2X9VQYJWJSix2DPzfJkQ7g2BgMjcRSegnLMbSzwzR",
  "key30": "4BZ2UUcAP4c3mFsKacAsv8Yfqy93zS3ko77Qpc4agtr34hmpVGVKMzTupR5av2Hb6fKax7ZnR8XHamRTJTAAtift",
  "key31": "4MNHAK14Kj4PtJqR1NRHVHRKNaH46XExvyL177ivZwhvWZ5U5o3Kfx9anKUAE58usAXE7YCwQAc7bSodCfTy481z",
  "key32": "4MYuzZBX4oZpB2w9nNidq7NewKNRxMzj6XKTP9uPUUzAscowTQHNXneksF4U5KxRjKVC4LDSwNXv9kH8CBvNddC7",
  "key33": "2k9yhM8xtZ6TYsfovs6xvWVffNNqEGBu5RtuNJzhNvyb3yA7at5pdV5mtbjegHXTcSAcWELTgh8zwWp3AynYCPjw",
  "key34": "4Hq6QoG7ZM9LDkqRCMJS5neay9K8R3KdbVVTxfxgXP48angGZo2jgAdy1sjJ5NBapJPcyi6H4gnAWEwvpj4CJbxH",
  "key35": "5fCzFhkcWsatdP98sRGuggH7kPUpRNVVDSJh2ornKfofRF9vLFfHok1QAwJYv5N2Mr6uotQmyKtKv3vZsQZpKNw1"
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
