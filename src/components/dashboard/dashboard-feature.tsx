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
    "5Yixz8a8YxqbQqx2ch3RmwSZszUhhicxQjtetiV8hTG9VeffwGiWtwJmYfo6rYCqjSrGb16s7pdf664Hh6peP5oB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Yns4MKsewmMQ87qC6mCpkZEAFGSQTzpDK9GcdEWb3RYntEsm6Xt5RTsjdgthQxxKcycJYDkE9kHcgXeAwEQPs9Y",
  "key1": "2iT75PnPoWhbqN9VTwTz7TePuZqhrA83DyGgo557LTDuM5FURxd8ZZY8gjez3ULckiQJxfs5LDFVdhVKkDH5XrSy",
  "key2": "51vxyLgTwQXNXJdevsvNiRvd4o6GHYG6aaDZpT1Ex7eK1eNefCUNrGZ7CWjvDBhjPiCokxGfaDpUC7bY5Hzf9SZ7",
  "key3": "4bNFpxtLKnW4VgvWxphosdpC1ifmtdsphdgXy1KDY7mu19oQ5SVL3cygS1k7G8Dw6w55gd9rAt37n5poZqV1Ahmu",
  "key4": "46hDCqCh42Lh1jNKcVW67XFtY1xST2zTcjeK6RdAByoy8pQtxRFRVC5CFfepesAM18CJWbysxQkEKNF1XahtvSBM",
  "key5": "3C4igZ2Dgnc1mmUz3ouDsRLXPz3phzTeKJtbAqsB1RRFaXX3PdrCNqnkx2JkFyWB5nn9A5zY1SPBvurik112fG3W",
  "key6": "4RhHREYnKAKWCAexXcLM5pqv5xqofe3b3dJjbCh7oNqmuJGqNcmoqNkuuyX8dMRJGfkeA3tMhUJ4E61qS2UPFWdp",
  "key7": "29bcxMKX4G5p1iQmG4P4aTYKhHtQrzPKTHZtB1FPkKLLzHjr9FaJCe6685QV7iiP2pmPFtMLdCQbi8FnHRRXxLp5",
  "key8": "4t3hvqqyuqQ9RQWwoN1RzKhckbudskViQ4ZBSELw7tfvhU8smerv2EWWk4cm96BFp6aSNknHjXJrhrsqKhPotZjv",
  "key9": "vAjhBgrgMcsf3se9gmZEpLdQvKcewXaEDWYcdi1iTFcgpTSeugvqg6PMrZfiNJMWNNHBKGfbVQkqys4TBGtgzaC",
  "key10": "5tt4fghkK9VF6qSQtseWgLpvjUhMpLb6qy53PzQhnf4T9DEcmtsWjJMMGeCSdhRpp6BY7LGmTs99TMawzxpGEsCJ",
  "key11": "63FUeqmLdFtnWQR3pmA2WmUMb7bxparkcjH2B16hr21cM4QQNPtgpdiBoFXHkepKUZzzDyvoc75fy7mLd7XFkQP2",
  "key12": "4aLVTtJtdbUK91DmdmTduXoAt51cTCz6z5cFpGfwdE9jabaDs8aYgh7MJSeeGCbNv95NBs28y6TvbYJfqJA4vEUL",
  "key13": "311Jw2b5c8doEkjZXefMnqN8xjSCo9UrKSEhpQXshd1UNXLWbJkbEsNNEPS9nL33NqGLUYZPd3gvxgKrLjhyTem2",
  "key14": "xTXoV9zjz952LjuuwBttWnDRPtd53cpPHxgwz9NsSoqYksGJ7gizCqNTRNEgzCaz65CYvmsDX4fVQ4WGqPBFDUV",
  "key15": "49FGaqfgTCgxJw4i49UiEx4FFMaFGdMjwRHQ5Mc1RpAQSVt28e8AwYF5nY4v6s6d31fv5gdPeGA6ugnAn6NwFUCj",
  "key16": "aiQti3AwZQeYaDW2AkWXhyap4DXBZBofpKv7to8MWbEhmQwUth8MmUK8SPXnrDfrQnEq2s8Wyresaav7MzQziKZ",
  "key17": "64YgQHyea7mSZWm8ei6n8mC2eQSLrakvZFYNDzkgfTuk54cdcJX4JmoRJQnXAKFfCBEtvybfY99miDKCmZfijHv7",
  "key18": "2tNYdfMQtxhkvXQscqU11EQnz4GY5sw9KB5F6fihWzJNMndPvU6DcaTnFMQfLLAMeDTPVzQ8eE9aLhNpPhFyF3Cn",
  "key19": "2qqPu21AET9mpYHH1MvRSNnPoEZew59X11xmt4m3kSB4HduhS4xsvb7bRw6p2q5Ez2UBYgH66wePaTHXtSuMyo4m",
  "key20": "3GpyxJoVcSBf6SS4EuVN9HbkmXF8Ut8KKybhqCDzdj2STA3Eqang1cWnCfJnGT1koAvNUmNCiedhn2UXeLq7HTWJ",
  "key21": "49pBWKJgNuaPNRTvmrkcD8RxQpYygZjAp3UAZmdo5wKtXBszxy6MtcvZ5f5uhYQTt4MEZTsUghD2okJTzp4FZ8rZ",
  "key22": "5cK3gDBqZjoMYJyMraf4cZfgDsKDr2brUmKvimjBk29Zft4UyYRfxsKDbU86VZWZWpGJq7Ws6LPUPB3HecaXzn7Q",
  "key23": "5uDWLm6ZhDz7ZGQKUPtz8qskgoBHxcr4VYcfUfbi93827j1TiudTqXoNtxCwEy59x1xiBy6buorYFwXaTpfNMs8Z",
  "key24": "anaDBzixySFJYZfhGGGDhmGGZjeQcf8FBtFfDNAkB5vTcnQuF2UrtPQU5pKKvgqjpQfX6n32qXeSM5GUNUkhXiT",
  "key25": "4GdhyTz5qubrgViWC16QbARNMdUVcjwPUT1WgzxsgjrHhqaHFWbSVH3BJkW9sxdcQbyF1cc1rZfMh5an5D4cD1cq",
  "key26": "3HLh2jDYP4bj5DkawN2LXVcbSxgnbQZEsg74Hy7UVsWqTM4V3meVHSFdLyZoEiTGt8PgP2Q4wc5SaHVmunma5tec",
  "key27": "EwmpRMqduy1YnkNYTdjJEhtyo619b4uW9Wf6GbRncMxzhtFa348SW2UbYVJikzbMqEaFZtGcdYKvca3KSDeMP46",
  "key28": "23aYx6zCHR3pt1PFYGZusvwhBWh6i74hCVR17ovohCYCysyZMzAfkerBRvT4LwNF4FBjuEWchVkFMi77XAG8RLAd",
  "key29": "cxuT3E6eJC4w6yhAtZF1rjsnMeJZaziqZbjjEBcsbSBocuJdp3qyXgnMZ2qY3gZs7nP85wcEb2th2dthqhJmWxH",
  "key30": "7ZHBX2gTyEbTyZbtjEy9wfvzeTtEQhr1roWS53nVBCd27DMKjz3oMcw3YWUwKwNHgDpPLGcGFZkE2rHdtw9NJJ4",
  "key31": "4VjC9qenazi2Cn7MEM29DJbcXed66ZxccGH3Yf5v9eaCMgt9Lb8dAsWKXipjrJrfbz6eGiA1UH1ZxZYxkh6JsirB",
  "key32": "m6Zs9qvHBXpGEbDKnZz4U4ppyrXfmJFpiZiDemxDwUMeCh52nFaVM66nNpr8U46TbA5YnH6zMhK2CiB7uVQMPiX",
  "key33": "2SbUGNn7oNJah6trD78DTSj3y3g4cCEB833a5cLHASZFs3Zh2y1KdxZj8YpzWkPcV6kWLirmspuKqPUo5RBjkTYt",
  "key34": "MZ76yzMpy2Av7hvo8mCfcSkQkyHd1hWprtLS2ySw5sRxD74pjWztP57h8L1qCD9bs8RwSaTRAh5WAcaXo4Hmxme",
  "key35": "4q1GUhVEDKTTatpVa1Z44faQVF1An693hh7jEc5jBgBoqLPVgpy4kEUJ15TJyPUszusXgL2G6hBovkysWRjaJ8ey",
  "key36": "Up4KTCCYQKZVA7aqnmWy9zNzPMYEJB7N1xzba7gSgBFEokMpudVaamE7bfzqe5uLnjHdMntxKPXjMhgcokhdQWB",
  "key37": "4H2DK6BnP31EU57MFa8LwpknUgTKS52PRggXQRduocuBGeuYzDUCHViE1Q7jXMaW3nVKNMp5P9QCHjTrdfBfeDXX",
  "key38": "42RFzGSXA6g5TWJVxHL8bb1qJhXAuskVSQWN9niKrXQ8JK2niU4tGcvACVmvwy5PTuQB2Br8JMdcVPQEdqzyfj3a",
  "key39": "5bjkWmNv57cHT5HCHxykBEKSs8Jf36WRDMUyAKTdeujcxvNhJpThRSQozuaCAUhfxBkipYeLuCSRYhMDX2GU9pmp",
  "key40": "59wFs3iNr7haZKZzpwk5tPP5DsfmjhkNAZTwjS7gJtZqYjUWyjQ6cMQPPNWZeeBE2389bkHg5zm7GMJ8zswcYGrM",
  "key41": "5dH7EZX7U4LR9BPxWVNPTyEYFikq6tpfYWsKkkEowLtJfovfUybjPkNa9Yqcz7QpywG9kJVAGbJzcPST7uhprwZa",
  "key42": "2ApNEAYKg8M3tTn81ZGFWxcQiJ3rekcBvVXtBn3Ts7FbRSieZrLo1AvBaVkzk4suYdRgoVcaRf1MvdZpWxHBKhGY",
  "key43": "3uxXwPNUkpa9KvkFYJZe5GgUecVgY8weoMYHNML7aLdsiLhrJX85hMZq1MsVyRMY1vRrfg6zx6KNDgcTKaeHfvG6",
  "key44": "4rMyZQUWkvhatieHouQPMruARxL2au6dNdV3af6BAVfKsG233St6AZebVf21ydPD7GnytWba8R3eo2Gjw8mG4QRc",
  "key45": "3hRH7xB2LYXn5qkBRNaVyCHmogyt6Vc3YHJiFbizY6Y8JjDKF3hGdvK7F1vw33UAHL8Qgm7AWYkvVJVAJUtvpdNT"
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
