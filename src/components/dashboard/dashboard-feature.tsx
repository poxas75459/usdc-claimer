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
    "42fmCcumbUU8qsE9aV8AaWsfTnCUn73xTadytW5LgdDE11jG7RhGH5m3byA1auTpiBAPDuSN1J8PNme3CBE1fSLW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NFZhTSav9Tc13PmgiageH19oERyxfAKC2d6f6NT446pyw6ZnYMmMM7WJNiHwXjZRW3pVyjWK1LhM27TiNPd2svU",
  "key1": "3ajRHvUHRkZS4DvkowpyLmxUstGXnbtC9itFEdpbinjvxvdymvRckK6bCcQ7jvug6gS8o9tKfW31UUbmiNtK7E59",
  "key2": "4ByurxcgD7Mdha47tcGLQ7pSmy8Ywp2kEvBtV2ewMcnr3mYZKor2KVjDWkLur4fCxSHtmiB4yrZ3Xdpt6sVCMtu5",
  "key3": "5jq3XNUxLX3xHmnTe87ZTPRYe7brUxDtN3hhdRFyqcYGxeLGksxWa2WTTKcFQVwh4W5zMEXccNHSFfcdgnNT9DXP",
  "key4": "4BuFSiMz3XPGDTosY42JhsxpAoBtaH529CLajydCBKeihYhQzXnchsFTQF6pXGnMXniPhqJ4W6ZGMvMR8HJ4oHej",
  "key5": "47m25jUUiAwH87DiyifK3gL1oZTwmwxKrT4zab5JYrRwCt4BbLzsab7JMtz23HnJLZYxdjMLngiZufzaYvivGZiE",
  "key6": "58xwpdDgC4zcrjDo7DnxD6uDxH1h1XojCMjwgDxuWf48qHy19owCjyFfMYonFY8UzjbBNe2p38eRPWwo9i1aHfbK",
  "key7": "4yHdsXduEaYhNYku3h6NdKEFdrxQTBXcxwWmooRkeZdAVeJRLda2R59EWJDtnTEvfQMsfVSSz2ckeY9VToX7TsC8",
  "key8": "jddsCyoToniyiL9qSXZHdpDn1qMtuXFGdWSLeotXP5Nw3tmD9m1xVVDniZmeAFtx6HCTqfRDL7em9a3h8UYGGQy",
  "key9": "2HCU9ZeUjxhs9A9iXT4tidsA1qFFDVwUd9fMDjeXipbyZu7fDiV6UcXW548nDhNHuWWGEdtidaDxyNkPus59SrVD",
  "key10": "5X2FrCkLd3K51B2hjsEiSMcpsQBUdJvsmxEP6aDkbVp3YZpUfzYpRrTYENwKRJ3qGbipf7J43WyZyRYGTQW87tPy",
  "key11": "5VRW3hyFCYo8BsLwiSb41nUyVeT9T7HasKfZ2J8SVw7dJEzWrKfVp54LWKUgdg4dsq97SndN9Wz1YgiShRUTggfJ",
  "key12": "2ZEL5sUA76LzXHEA7BvAFAeGRww49icKP7YRV5Gy5vKUT8Eg9gGhmPYo4zuedGSrhovpNvXpwrvuToRT4GX2weyJ",
  "key13": "nyEKNW4L2Pyw9bj9dNxtwUmXsEzJ1uAoSRXmWCzMcdh6Ro19cVMjMWzSsciSjYKRf4XGYUL7WUP49b45Luc86jk",
  "key14": "4Db4ETDoeRFyDE9VWuRrzJF8cds5bKbiUwpnR9yDEcDpwVEzsSntDbaSvUwWvJkgCAtj3NhVaM1B5Bk5WtWB5P9y",
  "key15": "38UtwDfM4XaVYFbKVBLiBPqe3oxnetLQgn85FkHPWWF8WzTTaBcoWGhcr1Xb7TYUebctoqdHeSYeQn6LyLPZBzEX",
  "key16": "25dWDQrT7b44Sce633xdCeDX1WHFVmDwRtTcdgVG2JWebd5gZHRg2J6y9MU2RGa8ZQbXEao8UPNXQEfWpH4fdQN3",
  "key17": "5S4KyM79cBnoR7hBHxb6Xm1iqBk9b3ihrxeLUneWMvc4dnWMuqKWwbTSBtPwrztYjm9K8QGq9i1tivQ2zKXiTpSN",
  "key18": "26nUvZ3Lz26zL61ZncDJNhimiEBWMvLQCeh5Jummems5EmSXYSrEaat77Yw6Pn7uNLeJjAJLt3YPDh47zPQnLYzJ",
  "key19": "rhSysUfFGA7AzKqdZfqtqKBc4Yof6ncS16TC6CWSooTSFL2UjoYtTZpsd5MGs8nUcX4B3eTUoyxd748bKkcRE7w",
  "key20": "32Noguhdnugsydy9zduhqxoxbRzPBsedi56UF8vVGUHjHfzPxRDuugmkzPvtcTHikHeAwW7gprSHnvgxVLe78VCS",
  "key21": "2egbBj5VFcisxNU9mt7iwNiArrnAXSB9fGcYSmSX9zeoYjCAXBqcjL6wedbj52cFnTyevwjNJAnWRSxFtDxZGLuV",
  "key22": "2vbLJutovyev3B6XNLL3428B8Ln1Xp6o9RH5gWV1Sm34RSuAZou8asUxqpgEiQoFCzHNjikf1ZjMfbkdA7AN67Wc",
  "key23": "266E6HtpATyf5SZ7cszzkFMW7FNWDR1jF2i7ehB14comcQw394bnKm8H9fMqhSxK27B4qxkbfZd55WtBeUkWhQxv",
  "key24": "56fkmsNf6qPmTD8YDkj5oL5756Mu6TRiJvA2xtwUEup5Bn2xQRQpCayXupi45sc8tzVZUuSCMCsaQaQeYzYb3PBo",
  "key25": "5TkCjvw39xPH5c9Dn3jHYyE5pjiYCuZZ1gx9eyn2iBNt4y4EZGukuDEYQweW7Rxavm9EKVi5nEFk5khTDV488VCn",
  "key26": "5gPe65Jnxj158dJTzAphHbaKUb5FYmzGNgjb4J1M5ukfzj9NHcbUG4ajEvn7D8yMoAbAv3RBJab695iJWM2axxMi",
  "key27": "3GuvWifzubp9DjjmR2YYZU2mrNfU2Hqmuicqr5VoBSt9cciYbTjS2kF1HfsbcN4M2syYMk1Te5KahDp1uDDgDK8J",
  "key28": "vKRvG5uFYt3HtHSxJsJ6aVjVaPHx2k5hoKQuoWfhy8nV5GmEGAfCkKkVFtMW1pcWn8iQ1figSoNWX1riLdwjJP3",
  "key29": "3XTy6BDtf27UD5ma6aaNqeZ6nGWdP3tdRr6qhtYFdbN1sqCNHVmW9ZJmN6AoWP16fpSCZwjecQwUmj9h7nZBDwzj",
  "key30": "5Q9Ry5BVv1Q8XFG5Tb4B8AzgDvdxAm1Tkxbej9TS3peyKSpZYFr4oevGZyP2tCGGZqWwYoY9BXcVgCy4BJDp5xLv",
  "key31": "4hbyBK4qPNKpfdht8VGY2YGwdr1MJLngji6mHGH8Mhyx3qUHSHmYPYpiSf3mTk764v1i37U2HD2ghsdM12D8Qbi5",
  "key32": "2X3xofAWZ6sdnJZoaNwhm2DdSAzCDAEqrBBBQ8SEVpogGcmULHGrx5z3AwPu7XeCKcRSykd41zySxwdr11V4tLK8",
  "key33": "54roCRnzPqP7VktgNkgsHi14bT6Q4wFcTz73eNknNdXPiRM1FhvSqneEnw5mbcPqir9NAt1PtBDNyg4gVF2bsvZ8",
  "key34": "2EWaMC1ev4Sk3qJ79KTYSEdD8JnHx3rfXk9ATqDBNGznrK6cpJuG8FHjM84qQHoK3eATGasaa4gmwPT98HaYgm49",
  "key35": "W7GTuYkZEGLtUZZ1kdnckZbSYhpjxi1GxpaGQLH8Be1zo2DMvU9sHzEXaPyQVzV23iQbDRsVtxkJpvgPSrpNr6B",
  "key36": "4wAZpCTbjXGiKbxsxCbRAfc91GPJVitem2VjBWohKWXNMnARu1yDBAhgCPQinoSwaHH4YTRqEGmNgHx1frwapbKh",
  "key37": "5ZxRNsgv394UpTcRBu5oFfFUBjnmt24dHHo9yiEbzPKYvTQ1bbVDPm43nqq2BqjAEvL3M5oFYqcrbvwSnJpGrbfh",
  "key38": "4crUxnGq2uv4Jw4pNzsKpYDn5fueZfPn3YkV1A4TTFL8TVqfquHNF5C5TB4zsBg7TiReLRexNpB6XxLpBqvTQvhm",
  "key39": "2XHh2Panh7GZRgRHg9vjKxP2bF2pZmcBSDpkVoU6Yz9YZyZg6L43yEQJBm3QH6UmVQh3szL8bmWxm2m6sSJVeAXa",
  "key40": "5qXKA5RxQcuNs34GZmyDhiR7e6LY5rFe3zKqSUy4Wt1cfRwPKFA4Dy4jqqDPkoXetys8gsztERCwPzAjn5mWErfa",
  "key41": "4WPVN3AvnMaDHzN8s1sBaM3y2ZCRFwFMzpEzy9dNmR6nwUZdisDse6QAszTTzbddtCRmJbvhWRsiMP2WWkLtv1LR",
  "key42": "2HHFg5bzHCW56pUbstuwLHpS8rxyb6bEV77FgVHgehX6RXfUSR66KaanAdLd5WL8K2JiHLqj9k6MxyYEhpx6FzZE",
  "key43": "5Zc5ERjs1gYRyTPTBhtd97ctVGpkFNxdk2bNa1tyJDpXFtsox9LBAohxmkJ1Y7yt62oENTWwdMC2bvmw6ThmBn6Q",
  "key44": "3KX6rnb34nRLZmJYhUqAe5dSt6jdVy8LpwhFpEKozT9g2TD4D3EKUV4zRYeBxaz52NF9Hp3HFqDtaAod3qtpSUpX",
  "key45": "2EB1R88KTcwn5N3rYWvcfs23hwL9iYeD9nw2jdJfpGKnj7h4tHx3HXa2rD8bRbcgC7g3Dd4yd47FNP26DgLwBZWL",
  "key46": "Kw7REXhXcxhg3bg81JisKnZye9xz9bRr1he7hvYUM5DYyqE72LNRaP761rk4sZSgqDZwWLnLBRXn2R3xBm3Znck",
  "key47": "5cFnErCcgL4bfp2725Bxvw2xRcdJqMAQ1sgEpuMEnvGEThVfaMjfyQEVVYUQ6gBDZVMnWNevj5kiDZkxTVqmJ5wS",
  "key48": "352MVjPRqkCR5UBiiQVas7w1wC4mduQtWimyio4cstSLjhsZV4FcUFtKGBKXBfNHoqapht3PwC67kRiFEHeFqAN8"
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
