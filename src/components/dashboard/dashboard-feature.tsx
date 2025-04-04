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
    "J1jrCeWPjpnW7we9QvB5Fz9A3u9xRaYSzDCkcuYqVbz2fnHnBtB9BjyUojjFkujaf5s5b1yNaDb8BPUGKzzDUHj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KCotf72VyEq7HYqJCvboYobLgiPiCBrZ5jDdiamEFrMu5Qx1Thw7dkW1WbJR8kgSEK9zmUTvvNy527HgaFnhbMa",
  "key1": "3J3ikeeJ9KVZ7W6RkWodgc4FVCrRSFrzpS91e1T3tLtkUsQX98SuwHpNG9caxfySwJ7KTrc8JKgPTrxebMtyyBg1",
  "key2": "52vSQsXDVyUQ6sBbcpYD7gnTYgVEacKgHsAV28LQGaSfUfA1YVaW2NwG6Y2bcX6ZKTQ6VqXkQDNzhSYZDgDSaaEj",
  "key3": "3L7yhBZnzBQUU39DhYuoCE62dW9Hcam37kjAb4D9JLhXteCAn5SZH747Ui41z9ecE3qrjaEfsKaKWmyJFfXN3347",
  "key4": "4n4semGMwDbNGiDaak5cX432hAXip3GzoZXxoKkCvNuecWkVeEjFtWh1Bdcudg6AWmGuD3foiPKco3iCV3dfvzSp",
  "key5": "5knREdEZ9vPpTSuX9DWDmS94eNhsHoP6ca4Hn8rsgJ54hVQ61D62ZGeCUus1KXW7XEojGvm2CU5asCysY618tUVj",
  "key6": "4jJZ6QWnSZnLyaFjpd9kynaE7a6tqvtJo7Fk9dRkejUeCMLJTcnXpwDpEmKd1QrnAgVMVwHR6Z4DKs36surJvXLn",
  "key7": "2AWVvsQLt99BMEdPP9o5QW6eyJLUpZ2vRnEX624kPpy4GhGx1Yv9fiBmos5WYV2RmgMBEsR1YTqUAMjB9jox8aEX",
  "key8": "5ygrqwqNPDqE6eWguxYqoFJG3ShMu4JM1tbFeBnztvsNVDkfPLX8rMejo4z4Hs3cqBtPw69mfeYovpsLKpnP1Znq",
  "key9": "3JELWCKNdjiqqtQBnvggK6YociyPXSGzFs8h97Xfiez6B7fEMFWSBo6a6w7rent55i2Yr9TewdCZF5pYKFNVEydm",
  "key10": "5Md24gdd1XQ8ZAa96WnLxU22MrQJ8dacRGzaMXy4w2QJ8tiULwjmxGabqX61RYkBvNyBdEAXctaBebW6Wxij3Z3x",
  "key11": "62BwFHPdc1MuN7A2sun9dXBTMbDhRGQoDqvrM8dxacrfipZQqFk3Xs5URmDzUw3SGQQY3qBeZh5AcFzJX8eSMM8k",
  "key12": "5Y2aTBZm11ii7uCkKu742LmqJrUJCzKrKB29xAkUjfaY79fhYMzwE7QmojE91kiMhSGAKHHq5McBWvNwQUCkJeJT",
  "key13": "3TUt8uFUETGAbKarBkjMffamVWCzUE9SrK3k73da8zyp7hY4p3ShTCpHcRMN6pBGFahqpX9yzFZoxbV31nDgw8QT",
  "key14": "3EQpJQ4ZP4uMCvRJzWJBdkphhYMeEsJNeVs8er3N2erkVCJCPn8MpayHWM3fmZHh5c3dA82yMr65Dux1u8nXnbNQ",
  "key15": "ieYvAW8Thdqc4KufhEq9KedNiQZbHzAEaMkb2BnbFnZxv4orFETpv8nRNVeh8cPm69B6ZxfU6gQ1sZKVCaW8C9Z",
  "key16": "3L5LYhBwxL8Ua8RNGv3U5ABXchot2dPUqrM1tozkURrVPV5WGw6zgfC7f5EV7BKUPr1pSxrwT5qzo9xfYe421HqP",
  "key17": "mEgvbUa89dfAvBb72KR5Kh3zm7QS5TTDngKeyKSkG1kLgR1LADfq1Yz4bVzpzyNGunsn8smXXq3wyAg6vuhWeET",
  "key18": "3tzw4uLCv3Cu2hmRE8cKFBjs53DnWeppZTBXKPzfnXQsGvY3XMgmFyS9mNeVuTFSwZuxPoB2SZpMWKDm83omVmFJ",
  "key19": "5UZZEUHiCvXHRLqH4QnLyhi15MiXDiYVp52nFxBEA8Lt9beg3XTLKrWsb7ymfceEB5DGZnMJ2Wn9AmEHA8NysfFW",
  "key20": "5X2Jumbauk5hyferxvf2daKKhApqtRqQUJ9tX2AhXpGh68ycqYqoDqR3HVntaE8ZzijQEDrgzH2im3vDcVHGioxv",
  "key21": "4eTZ23Gi95T2x4PqkPDAtehMp8vqbfokdrWu32ze4TUcgRB5nAoD9dLuMKMbTrPwvckSWDJH6CkjfvBypij4cu8k",
  "key22": "4BeZ3QSzEiqjPuzpbTxvvThcy9bZ35hYpCB2aAwvQdWghdxUzF4GuTwtHUf9KPe1fhB4D57YB829pySbcQsFJUx3",
  "key23": "4hBKxhGMwz671VxhSyJ7Gnqf936CHbekoaJfK2n7qUc54T25KLCf19XsXSS4nkDzMGb2Yh1JxP7UxwYcqJxUpCHB",
  "key24": "67jmTFRSZTHG3EC812koC8Jb2rgCVA2oAmXQsVXNgJ2J75FuwhBe2GuHvWzQEXRQxDLNjbrdgDdXHm3SqatWqykv",
  "key25": "3oddNrM4RPzPXgFneYHSwEjHwjs2d62t1SWQMG4PvTWa1Mg74BGbA3goo36nNMvXmSeREDEafCHtUsGDk8kwEQsy",
  "key26": "449RQY6VdUVyixcCFZKTYHkvqQUUpR9o8828sjhpg3nHX9JAxUzC8KtVgnWT3DQk4tK39CFm6risXZojWRL2g7fV",
  "key27": "Rs7tRmPK9ci1c4JcGoNUZeAkiqHrD7CDwV1M5ZHd86aGM8aDeYsjaBNMkuXxKr5MBwQaU91DDRKL2W1eRaVjSdB",
  "key28": "4dkWWsihHKrrXsd9Gqqvok7V53y1rbp7SFho76UzxqKW4JH1sbSdEBerK9CPLR5NGKP3Ds8ar8d1ztHNBVYDs55K",
  "key29": "4YdhrCcYddAGSzi2Ld5JUM5GtN42DcTaznKvst4DCfLJNoSXLqD5yczwgwzJNpg6TJNPybTVjTJn5T4nyKY75A8g",
  "key30": "ksBLHyW7iDLo5iawgNVcJBHpbkbcfWLxcbnPR5FfLKefTDiV8DreaKfcQgSxyaVEr5iJzwwkNBMLfMm26mtDosF",
  "key31": "2wT8DF3Dhgao6CtBNVGif23VksD2RhP1ozpRYDGGaJkWuRUrMsgsQsSNRtfSxXicSX2bfu8oXMvWzEgdvzhMZuGw",
  "key32": "5dj1ALrrV111yVV3m9nsYTkqPLZ4oakS8mUNSw9WVSGfa7P8SnEXHg4mpdi2rEwNyQ8QzsQLvFoTDyKgyjGfzWRH",
  "key33": "2CX46aJedFeHXRYmBdC724Yvv7tRQpYgbS1SpxNeZzToAk4cLg1HL1gCCgNceRvC2PwKkczKfSYWax8ovAsYW5iB",
  "key34": "2uz164emJcmYcBZqdtZBNCpzTV683r24yWMVVoMrcPNYX8yuUCwVBoqq86gxxWTHCddNwWV9ZijuGTuvtkbr358R",
  "key35": "3KmEmtcDErLypr3KVtp1gh4C7Br2hn6ULk2anweRYTg8Ny79H2wWud9C7WeiHtuD3CLMkTwtCsGA3qrSbLRG5Zwg",
  "key36": "5nwxkr3t7YWrv4LzdoJ56FJabtRiU9GGuzYBACsnbt9K38PM9W3w18VJ3GASqkCsXwKurM3dU44Gp6Zju6oGbgk2",
  "key37": "32AknrfpdSk5vTUPswnYZro5ScHBTVTgjDqyZS7obtkZgX6mXsrdv1SnJmWquazz89B7Wkwf3ohKmwXzuNQpY6vq",
  "key38": "3KnT1tMj3Rv7GGQdTQWPsMkeHaU5zTDowKDEGrqm17md4h312PeSzB17pRLuqj24qftRAjMz3auaWhoPJaxXsSg7",
  "key39": "2gfdmVFNHTrERWjg6Q4oJj1azeQE4U39ZsMRDUFLjCpGSfQ3VF5CVP4TbPyTD3eNvSjFndyLrGZV3gsP711rV7Ln",
  "key40": "ka4tz3hRmf9sgA9qN5kCnn889HLzzzCGnhgCkH9vWMpDKkoNvjreN8TXzvTLvrbhtu6XwX1t9ksDjrWHsjwXEdM",
  "key41": "3x5XgiNhxsMUzEURADfdLg452fHo6zy2DWoLZe6a1naB7XSV3JtY9d1b51LJGZqqrUfSniYW5BQvhPy3tv6JdBzP",
  "key42": "28B4seb4iN1AwPGusYYZp9gPApvD476yTPJ5DLq9vU5SQYxKpqcGVqMiG5xRzucnaziBpdFhj22hB11CugZ7VMV7",
  "key43": "298ZNHaezbYKnzcrDcN7FXv66zGAMS7NCh5MHqYykLvqVs7WihkQcv9TLo62A7iswrUrZR7B2SCmm3RSe3kLda18",
  "key44": "2XeKSDFwMC3hBY4LsusbcFX9ZMwwzU41HZXRKUijBHQk1LvrZZRk5iH4Uackch26Eer55v2F2DvpBvFT7opSvHY2",
  "key45": "2e45s7XkS5o19NRgnNJD5JHk6n5GfX4LjHP4HHQQuPUByGiDxJshWYfYgy1qCGY7UiuXuWN7VA3bKMtgTGdEmMRQ",
  "key46": "2ujdYJAHN4xnqQzNRJLRGo9WGLrvWvvHPKgQoogAXS4CfmCbj2bsS4iBPcoiQiarZXniTsCGTNwE3aUn6vEPRrK3"
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
