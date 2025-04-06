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
    "4C22rE65DcPVtxymyoUJDsUjjF1K6bfQnyRPgyj8seENSEAd4BaKsN5dwFFSwh1nWPi4ng9VVK1zLbu3cEUsqqGy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SV9gchUnQdZrT2EsJxmKpnrpVsYuM34JddywRCfBu34Yfy8ckJQymjtQzrMwg72tdRn2UNx4BMSNXiB7H1c2A6C",
  "key1": "4Feh4k1auyxkBd8nPssHW556MSitvpu8xYiagmNQU22Yc9mcS2RdfHzKDWki2GJ8edT9km4kgDtnRS1nWNTPvv8d",
  "key2": "5JM99AaznUksKYLXYTijUV6xcMMHiRvVEF6bwYWxqwhxnUcZd3xuzrmt1xktSgpaW2uifMzRJa1RNsrg1cbbYzG6",
  "key3": "5orP1Dad6VApRvorM1WnqDtco9ydoCrL2Zc71Rsh69NpdoBTHALS8abZjcRMYD3pwUoRL6SqAn48zvWjSNAzSgUq",
  "key4": "3Fg2MRDezJKpXkGAfab7GnKVSfHoGAAGZiaRU7tjNRjP6d18SmiNSSSEGXr6E5wwnbYtm3broT4U7SdGPieBp5AC",
  "key5": "2HPoKXYM2GWrSSsEpFjfsPJuWNc6H7WG459SRh88G3PxwYRurJEs7MXLTZdkgzKu5DizFuQ9GVYCBN5v592y67di",
  "key6": "cg13uGqTzDdGnDivZaoYobfbZTt6UUyLMUZdq8REGP6auZ7To32za1ch8ekQSh8cPVCZjzL7inWbAmFeMQxtdoh",
  "key7": "3BbQndW9MfawhJoQUWxV6R3CYfBmw67mfDL5UCptAqWk4NNZmvpUnx4QwrWR4GnusQUKEXmemLqFXdvSJMVRDvdY",
  "key8": "5sVsnc5T7zdcAwoPCt4Jg3HWfBxD11RkTyip19JRPXjKCBzbQVn1KwrNyQG4suzkF44EXbUs1mHBsFu6j6HAbRxo",
  "key9": "2HaJ4ZwcFaW2TWFTiTvjgcsbcVfj9BEnXXSdZUJCd6ydA8XtvujuzNCNT7Cnd8CbgjxJS9ubyKbxASiyxY2c3saW",
  "key10": "4HDijLCAwzCtRQxr1w1b2eTwMjYW5SVsAs8LX6wMugsPBUTZZT9kTj2R992mDSBJrEJARtaQLFUAFov59yXppzHp",
  "key11": "4Vh11kMEpoBzLE5zr7bgubSBMS6S3SLSF3zhuR7L41WXhgprebNYPjQYSV2EkBBKNaAHDeDtZuDX5ZshzPYePzUc",
  "key12": "QtjqSUw1WTFPtbjV79hriC9mk4Jvnd8y5hN5ivt7Nukx6DkiYsv2EJ7QMzv8zzUKe29xg77t77g9K2GPVZxjnc9",
  "key13": "53SamrYnX34pNxA6VNiY78XxnMBAwGkbJQMBpRufTxJMsRm86hxMc1DMEWqvzgJVnqRizSLngRd2dtBGmXxoYw5W",
  "key14": "5Ryu8nBKNrfqNYoes4naLqR7nVpaVqMHvhJqFp8g9DVuZUqCcykkCKE2GQpkiDzjjqiqam9LwVrDKf2WFuTA3LqL",
  "key15": "5hY7Ts9xkYahQcGG41o4HhBQyHiw2G6otbAgPnVaFQErcg9RgRh83zCEhUMqyrd5yQWE1Rrzfw6eCyhcTUnsWVp2",
  "key16": "PK1qwyesfMQb8ti6P9fr5eSue8DF6YtuQt74kCYxJYcB81cGjRVhZ51LrZZ6AhXp1ukNpPcrVVeZnpS4xrLsHf1",
  "key17": "3rnaRZ8aGhJsAU38oacL1E28mRhWjErFf3jrsCuAWMihSkxo9UWagrHLtXFoowoRzKZd5Hamwnxr7iY5bVrKYsi5",
  "key18": "3ptYZkmdG7mMkNvqrhUFoTQSZsHMw4MWfxz3Nvz8QAjmk6Ave5JWTBmeibbJBkVJQoSp8i5gJe5KxnnphWz3iTJ6",
  "key19": "2hjsasgTqgWKznC3RXCKcxESMqkyD7fTYvSBXShp6wEr4ovs75VdMKkWnyScHNCnqR3ALFnFNXEnzg7Zft5bG96k",
  "key20": "4VhS8zSVavNft7mbuJj7TBQbGBbbPocKFy591AB3xK4w5zkiaVuTLt9bM1BcdQJAmoc5ysTVBd1E8yHhGJUy8sKA",
  "key21": "2Rszixs5hJ1aTuvDDxw1eA8sWBphfVjNvEhZ6ghZDZTH5GgKyxbndYsdjX3fFoDE82X7urai4zyLQz1tq9tQyuLv",
  "key22": "61ECAouMWqQbNLYCCAcL4VjKQrV5fBUiBhptoNbiTUKC1DNA681mmjpTFvQzm9fzHLWBoaobZ2TQWc4DjZmGNvwJ",
  "key23": "2HfeSGNkNvudVsEM6vozp9c8h2wu65pHeZney3gdB69iKuPLic4jmro3rLFio9YNiyb3p89bWTmJJZ3qi2tVVfeG",
  "key24": "2tzZF6sDkghYP7yf4KfvUMcvQVf3ZXw4WkKUgDeukn2NwhqxgdBgrxQYCgjhNjhzzU2h6Dh1oGtrZWtw4f9W9hra",
  "key25": "38ohV2DZL767BBfkbdt6FjvofGZhvSSvk5K7vjMMsVxq9LUs9NCNoWhyi6RkjKDR19qfxoHWuNJ2xrvsjmSjjFrx",
  "key26": "5ipnV2X95eymauxE2ioN611XSva94ZDcsgWNq5UogU9iStgGCe9VTD7wwcbhYmsX6teRDw6cDE6JHwmyMmTyerUT",
  "key27": "4w17wYoueXChvLQGWUm44YKZCWywXwAi61TiMgZzMrAVW65C6tgRecysQjBGNwvo4mjyUUYyzL86aLQqFNKQscky",
  "key28": "y93rTxtZebEmKaDMDe6W8TcYTicRf126HkbgpQhujRDJE2kJtmCE33PWSHzXW1x4DYAhVb3a3GtyPf2XMZPVM9K",
  "key29": "3v49eRQ9gP8rxmw128eTVsemaeCPJbrWCokwXB4tQn9fLTrGiQ7VqRDJhjxdxPwWGjz8TDNpjEkF8GhF1Ssd2Xhz",
  "key30": "2iTK6HzrzGteWu4dqdQh8LdwNAJvBY4dYxV846itsoS8WvKhrhPMXEoEJx1wSx1xjJs4TpA7Zoz767X9GAP3c8QQ",
  "key31": "4SKmYnJZgaH5GyxSjLAHunNDkwEkKtESCdCvtP2UFjM9ye6ZdtsZjDkwcj1X3f3qF7fYW8gCQeZJHk8a8jdwJHAS",
  "key32": "WvYJXREbnchkiv17tMwBuPdas5AAQuDrxfFsVcEuLjyy8ntx9JSBoR1vmzMX1RhBaKa74ezCWrGvs3Ng9U6aPSs",
  "key33": "5vJRhQJiwyGU8VWHLyngDmi6Q9EFdhjAxeN5LMDNKgdSbEqybYFk5Pgj1avSDLmcCgdp7S9CaA32rG8Cf2LcQ2UY",
  "key34": "5Gy15bgMuGFRKm2Zv1L6ceRsjUqG5eiBLCpVEAU6yKp3nozY6rjtMZpxkARwfeXVYZwUCGpkDifgjVBS46YoGGVX",
  "key35": "5LW8FRbhK8Me4uRKh8L1nsp4QCfHP1BDG8NZz7GtFV9jkHNvF2r6SmMcwfjW2t2LvPiaReDVbGJMS81NrArpc77h",
  "key36": "xXVg4ZmJ48pHfUWMf6o1NSBHXHU61xmhcnuFefSA2416K9vZqdWsr1yaxj8ZHV5HYCqKqj4woCL91QCtTJDJQ4F",
  "key37": "4jWR6W8JRnhH85cK23Ktvgey6xTWfcKHVCug42dpW7weecP6xNsyNWzsFU82HajLKoF9M9keNBY57zAitCbAWfAG",
  "key38": "5eWC1nQkYb99MJYWAmaiQzxHnx4oYVC19QsJ7UrJDEJiVJ7uUQbGWkdrkqohP1WMEwaGLmtweCNZLHhwQquq6cH9",
  "key39": "26pW34EPFXgVZjjJ51R7uvZNE7sGyNyAZR7fFttpq9XxGN72fYuU1bKYTk79vEbDd9FyFvfxpzWiy3HWAAgHu79q",
  "key40": "2kPxhYtiJrxc4kfwxqfdgwGSVL5g7Ezrs9hEYCTpFeKZeBEobFrMmap38xBQM376pgs2vxbLL2xC1iuTHryAEfcu",
  "key41": "4mqAqfzjmLNUiq6LqffFaz29yXmwdRcUkvyDGv4Hs8TM5SRc1na4KozYyFnDN8CUUr6cVed2Xc1FMvPXeuGrgra9",
  "key42": "3q4uvESbpKDnK3ahvsZodPzUNjuu3symWQuwTjmeKfxUzTVFRpV7pu8broDB8nnUfFWUv8cE6kbMwbHXXjRcJeMT",
  "key43": "4jG67ewHauRwV7Tp6TyvU18ktDdVYqLQxZDLy7UK8sPbWDNTKPErW3KDvxmikgGEaofg1jWT5rX3uLZehFKnSpP9"
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
