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
    "5pkzQMep6GwNQek98ahzx5GWTrsbKbPSkP52BSAUKsW25TdKscD2FosKLyWXhYd95epWGRd88kRfcUzuj5swY2Xn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NaYx3i3WXPW8SpbUDYVNyVnaRBg3x9VfhXJ2qth5HD48XYvV5W8zbBkwrrHRkRattayj5tXewKFbNNbdZ5NX5PK",
  "key1": "4igFLBTKkRN7JDJBEb4Gfj3q4uSwmPQzjJBSB5dT1EpNJNm1BHR9NfauXhnrpeGVizeVMM6XDykFD5fdmboGbrsT",
  "key2": "4t9xK1SwSWXGk6XczJvepzxUYaGqbcTJw2zzSM9h79tzkSmoYHKwiufmz9mkXdZu1zjPeCJ2NszQ9PQbWYYTm47Y",
  "key3": "DpEw2wFB2GpkvX9wcV7Styz2ry1XBhb8oyqP5osTBQnhiomL8shUpV8yDZRA13EkR1Xeumr6tQM4s7BdaDPXeYp",
  "key4": "3b5J8HBsKgL87sQvpZ8rAGWExvTBHT8GKWjPPnKMdrn9vsCkhz9hpf3WLhNr5vUv65DcTwdbjXLXnDTp7Z46sz9o",
  "key5": "4G9sfHnVj3Hr5dTE17ohB8sPdj2jBHUF9qwmwGMDsFsNe5Ge99ibZ9x9WGHZeLfPU8TkgYu6qsrR9QZTN1Bznrov",
  "key6": "4QvmX4N1wBK5ov7aRkDbJJzkXis3FRRaUVts2LLA8riKPAYdsY1v9ockByWZ7CjxfqrrAhMDGJEA2MVYJM1dUdBu",
  "key7": "5ag6ofF2Wqr2GmYQTPtnMUyMB1drvWc7nR4ptumHps31HUK59t19S9iTM99wPbtpBrB8c8oXt41CZ2kSAYTNCvjS",
  "key8": "EekAXnzxvYGXSDGGbv9o8uTC1htrMyJRHVDaTM3JcmfXuz2usviZTV9cH7KNggrMZSf1YKRXdKo72KZfw2HANdt",
  "key9": "3vrXxXptewkMrxkxNS3XD2j8Jhf8T3oB64VTgWtaqkjPXCh48JXoqgL24ryyNK8cwGG2cT7AyMaMTKo8sZStcQCK",
  "key10": "Eyh58WTz2ExDd1bMT3Bi5MR5oRFn1RQQjEKAG3Zmk9EzM8eQY77XtQHRggtPrsKrKASvpoLC2wubwJX7jhcdU67",
  "key11": "woHhkLPGirFXW66tRLDJi4mmNmtKb2zgdNSxwWcCTbJ4WqeBdBzjKZN4qcbrDWoNf15SKiFQTrH2oyaCsSo578f",
  "key12": "4vbVJdWy886aR6rRtD3wxzEDWuapMkXiXBs4WxvTsBRdg6FYzQR3UNHkNu6b23dMayF8vQ9jSSW6zretA3sdVn5D",
  "key13": "3ZGSsr5rUxJu2FNZo8aUWrzrES3BuPdFCMFiQkEW4CsZfYL6udEW2UX8SRsEjzXGKbfZURC2LnpmoQ6GXiuRFJLC",
  "key14": "5mix5LcJ7kNcyKVSjfgPaujw77adFcWKewR84WEn685K7r7prZxbvn28sKXK56HJ4zB97vJWwu7Nzic414okAi8Y",
  "key15": "51ZNSS8jN3i8Ug2GzCAEouKaB5FqwHgSspQn5Z8SD6NhyMFFkSpJe3SFQE4C4CYkvLh6w8sZQQJWatcTjzNjjzWa",
  "key16": "2F8ifS44d635uEEaGxh46uBkyVafdmzFpyULxbweKX1ZRBwGyg8twZG2dQP5exmeL14D4F4eNVxFWEiQzXgpP3Cs",
  "key17": "6xZAF3xgfDUPWEnb5VPC9RDGVJZpuDhXoQYirbYcSsJry8asYPfrY53JVZdZdbTeGKBUtUts7uXPuKCWnTwPfsz",
  "key18": "2rpHaYC6TyNS2GSZmsBsH8XxEnmUBwkAiq3fgMxRjZKdD75H1tdvz7s4PTsNqjvyaU4d1Vu3fKUbFhcSimV3PWw7",
  "key19": "vgyLcEdLSePXpgRspv9v9kK4FXnbCATBJgNWRrT5Ru79VUnjySMp9xVhsmjLicEUkivRMF8SsnuX2UYahWW8d8F",
  "key20": "CyzZ4xhryaXAKbV6a9nyt4h3wKtYNKNhuBxLMKmV8ejcj2J6ef5NEqAxCTZimWsLYa3SHVcpgVsj92j8PfZW23r",
  "key21": "KY1VzmDDRSRJ2REEVcZ94Nov5zE14xgTAtJZJXy2Q1otCz2NVHRgTyuyYgsQj2SWx8hTaqaj3SheaMm7xSfC2ah",
  "key22": "WdApf6xoccJdnL74atVQLBfrB5rAGHoVfNqBE8RXNMe8gU9FCxKHRrJk6CuQUG3q4BVsfBpnpUakZV32eeqjw2k",
  "key23": "2zWxy2MeuuVTuNiziossLgrUWvf4hqDDsvPqZWHnPPUYb1gQ7W7Vh9BGHib1Axg9kxsqZHxBtg5LDJfYFyk2ytcg",
  "key24": "3bMcYp56ix9FbdebimPnCN43y3fuQLxSEQmxd9jx38cdvu2xQHsqPBszPwUqccaF9Cw6sa6cuS976BFRJXLSXcWS",
  "key25": "4w2iBHfTwVPBT1GvdibkwksL8eFp8vhdZPUR7gFEpJSvFSbezWsddDWz21jacPWnwgiZ9pM8bX5UsC3MRfieCnn4",
  "key26": "2jo9Svfx6P69NzwbyMvdTDXDpmyZbqdYuTUB6GRxVsKDzX1Ve6eQxkY8KqoPM4q9qB3KZmxdiw5aTos5SM5H8LxC",
  "key27": "3jt5sGtcEfShYM5hC9tjT6ugWqBLnUQG9rRhQxPw9kpnj7hhaLfJRJ2Dw49cQeDncvmr9S5UWJTph758EGYu9PoR",
  "key28": "3ahjxkC9U7vRwzpjWsoS9M5vcGA4hvxA87FU16oY7MiPGX7cuzjP8XLEBCK6iKaAcKPKd3HKEvpfm5fqJ1zSqFKK",
  "key29": "5WQmTx16PYzhHkSmPibPxarJjcEbN9uN3KotHzi64TAfsR4de4G83ejzmezkQoKPgtiSQworMw9qqxoghpZjtiad",
  "key30": "2i3it88GiTgwgcjuDpNhJVTfVbwhVhq2vHGZNuvJtphr3Z4MWRucB2iDh9NhvpQWdNrPc5Gcacw1Trz7TyqF3QYD",
  "key31": "WSdinKxpvCH1wWPYGrc1ZUewMbd6TUioZbA71xJSkfHrZ6pBwWS9x7XjBXpAv6ypxjPa3R56dEt7mSZc6BvYwfE",
  "key32": "3fgY81iP8GTdt8nmsavt5CfvskZpRgothjndA2cLT6MTkcNytAKszHgLQKQAYr5SRtTfQrdGc4jnGNidXeKh68by",
  "key33": "HqrgVxBiuqY4UCHfkfuJqDphFeX5TcsVvwvVYABojDia1GCQpZf8XySfc8aibreBr8uwnNtk5k6JeJQ3PqQXKhe",
  "key34": "ryCaNz7DLSBEtKq1fY3VBmuMPrgRbjtiZpZbDJTy1d3EKwuChmYjbJdF2j98BT68niLJZYiXSSDa9jypUz2BS6n",
  "key35": "5FeQTpG3Xu3PQP9Nrajp9ieQfvb5PnJj1e9ZdyD8KooPq15uxna4tkkpmxLybhvCm7qVMbrGPJtj3ruN8Cc46Md8",
  "key36": "4KwwEnK3BKtTchNnDbB11ShQenuHZLruTzRwYn5EoHRnZPGK45UQFFDPTKT8yqbaE3Cj9KLvUsrbgay7xLh5V5hG",
  "key37": "41YH6iqEzfBG1RheKfgXFYXgq1whoXonk7drzXT6SHCwpAt116SspafVpEQ9pWKwDQTBaQsBrX9cwXGueNshKoK9",
  "key38": "4e4rSFhrQN7GtPZbp28VVBfqNs1HgFn4JcwDknZqzasecamktSfVr1NC2jUFm9YXZ6RMyG8b1VuxqxzW7FeHULr2",
  "key39": "ufpbewNv4A95gegBvxqd5dcdHrqJurtpFXJEWNnZSE3jVgoJ7WnqQJaDoQcEmYMpJFxW8LZmGA9tr7qkxyKLQb9",
  "key40": "3oTDjZHxZN1CpK4UbqKbQAqfHr9MA7Habc8UcZjKADSuK1pQDsAqs9urpCUbSBKMNJjTjLvAKgWwPLyKQAoQvUNB"
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
