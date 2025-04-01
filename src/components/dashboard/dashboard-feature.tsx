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
    "4YAf1VyRrPyW4XLfkn2S2U4GvXAo4kA97i9moJWzeiZqRjvZGRPuHFrs6NPpC4yQyEuhF327Gt6oWRKZXWcYtAqN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3P93LixKigZrKmk22VRaJ1H7xHCUkckhz5VfbY7647wv97dWBRF4JiEdam9Gf5wQcpYn2RBCgyMC6cnemLTJXKEb",
  "key1": "3YpG1xgENRKnba3SoRWzxkG17jNMAC151rxv5J9eb94iQLBwK2d2usSUpit4CfdLyQnnwEFeDHVoqdCgBgPgK8Ub",
  "key2": "5LV5H2H2WUWERVo3sfGyEH3axxfSVJwVmhbacMp8yZDxsPbJxYkBEzAkkbRaQTDAVW7XXsJgSwVS9daJxNra7GyR",
  "key3": "3CBcGonnFrgAhWdB3kuP5NDQossBicahz9kn98EZs3WXpk2maSCSffAc4smdNNytj1Gn6WH7P757pRXL6AK18QuJ",
  "key4": "4pKHMy9skhehckbGpNasr32L7dHjqytiDW2CSMRGx7LcwhKS6sXZQvW3x874PxmMCXvnNjF9aGrrxLM3MEanuHtz",
  "key5": "4EKw1Laov8JVHCPGtdm3Yp9jf4NpSvyokkZKVn2un3FjsJfy2u6dGL3y6Zic7XQ61HaUPUaWrzufCBhpN1W9es2w",
  "key6": "2sCcBTMyyTNdn1cVpUK7hcByeVSaqRBYvZzJhap3AoyUtTjBFw8V2BzsSZbGwiBtJiQv28HiHmprCnyGZBhdPhuo",
  "key7": "4yzyNzuPH6nyRpssjG9KQrcBq2LnBRFw9gzTS37Ru4t9S7V2TP3NUvjkMaxkJxmvgRcz2xQtNKd9voU8mr4Zodwo",
  "key8": "4pykq7PdYV6mbuy1eedN2W2jmZDFfH4UU56BTVVAafh9XvJdKV2JBwF9CMxkvj5nehxjHMvMPXDE3ZunSHqX1PM3",
  "key9": "5fYznvbDHC1oWasiUeTXuEuvLVDqY7LSsju4namNne2Fxc4oTDpLKesgXRqfk9Si1RXovH6BPotqrXVKTLWGXhP4",
  "key10": "2GdZFY2AjkjyZeao9R9BAiR43MMnDFTZ65vXMHTNmGcbwZVJ9fVDtBGxZxoNA4iWqVjm4fvyVVj86y14JBinKMvE",
  "key11": "595Zu95wyvdyhQRQeHaV4RnQoKXmHxh5vKMjryhjBLwFhTTRZ33d1KJy5v2vns4S44PcCyfYkCvyFfCJ8v1Y9fXa",
  "key12": "4vdybdtnzpqiqKy1jGYv7kLCS6mcSSVwhxLeGRXS9HoA9LagtU3xk1KPMw331JPTrVgLqYdWFG5nQv9wf9eyh1nq",
  "key13": "2AviWW383zFFF1mU8zXobNrD9Mm8EqYf9ufB31b9fQnLwPj7UQZ4SbA4CpQso8XUbyvyZjrBQrWXSdfj3Cb8Z9Y9",
  "key14": "TiNu5J38i5Vdx8iMQ6XYRdnKGhBaQFGyeRYBy2DXFKzBUB73bBNMhXaddkd195N8RqbM7nnmFWmgQRtGD41Rq4H",
  "key15": "5uZnekbPR2ST4mvo7LP1vxsQ5jkFYA5HSKj1cvpLsUkxPA8htXTZnJFVmn6GDdA5xCWcEm2Z3BweFmpSJwtmqtnV",
  "key16": "2i5GZaC8pgM5ZjAqEoeV8Z6DwMcnH5uzQ4RBCnWiWmGmqrmdJdEVWU8GPGKsZxNpdJyDHh8RnEfRBpoKcADjEjsQ",
  "key17": "5KhvoEv5NpifjuNzutjzNpU81p9kdPxzVYm6GRB5ipPCYP22PLro9NUCyZWemPy8CeJ9TFMgMQk83rRwMgHqKvnT",
  "key18": "2CQybvWB1VR5VxWWvf88iUrceT1uHzznKZQhnh2C4SCZ9CytM1FrGgEMy4HHzKw2ZrcLefXkmhHsVkZ1Ay9Zn5ao",
  "key19": "2YQDcUw2gbFZ16dSD5dAdw3JaSWD5VoPwLwTsuwSZ3sMPkrenYG4m11LLDNUrPLLNPz4SyoY1mHQGbEoDAKPjcaX",
  "key20": "LtFBUdWvJV5WWiakfKeVe1Di3ohhHZi87qpReU4vTtnzoVNNHvz2wCg2NC2KJYiGbw7W5jobFUYXwBVorQggA7W",
  "key21": "2yDzAmKXv2TsqLCTwJ1zciWnvMutY7FrtPZ8zqcUMvNQVZHv2V4d3nxRoxBtG54nmJF2P6KNFMPtmq2NWEvH76Pr",
  "key22": "3WdzKWEsAbE7JvxHGfaYgkNbSPqXEQBqXnABcMZLSDRQncfo58MKZqaFPRVZzGxrsvJtTn5JcZnjbe2ZPsEbRAd3",
  "key23": "46WEyJ3s35Ma7sAXFUAEdS8Gvis6UKpAaYAq6gSPJEm9VyLbYop8D9mw36rHoFsnAeVNgMZXXPiXhAFv3eaU6Y3a",
  "key24": "3nsXvJMSbgL1EuTV2B5sFTp6rtDec9NbHp5S7L1aMwEqtCyqrcciBdAQV6EFPyo59mido2KSG24rBt8ub6UWi9Ep",
  "key25": "2QNC6u59gHfhj8dHGiwVaC4xgnagXtrdBfRGiCVSiy54Sj37ezdPRvAEZEFzoKGmtmmqZyMRec2qyQEY4eE8UPgu",
  "key26": "3iz24aUQ8RXyWyxQ4qCpGCcw3EvtNL7TDTDt3NYVmFwGG7m7fd4FptJZ9FdASBN9LW4TZD6QXg9GaApehfiAMiDz",
  "key27": "4kEgTPkFDcSPXdvTQUfnVANaUjttj1pzpj7Lo1KugA8SprvZkonCHmcx6HtFEtC4mcxawAuDf1FTWzHo9zC4jYQB",
  "key28": "2ivFDZqKNnxzHSxXy3fCMzJ3u4BUbmnagsDoGZVQ7XMjAD5CQQNfmxUrs62cgBMe1uVdukydjEaLRveyUwK1yzej",
  "key29": "3JL1jvig3vvKVuyT7W8bUuU61sCdkdXKS3K5udFyCd1ajCEMERnHZ8QGX2pPK3duovvY6uQPbq6adxWsqvcPoYpv",
  "key30": "sFpxYkx4puaTeZDAmCq7N5adWRD7Pcm6riJkfMKd7FgSMLKaTMZLE71fppnpmFB5qnzit2KEuw1gGqJZEvyXynD",
  "key31": "2wjHfyrsxjD9kt9z8Smid1wgnN7rgLbYVeem8KVkBXb9Rg8sQEtqXCsBBHGvLw4GqGkfToBgapYE1FWdDAMhwgCt",
  "key32": "48Nd77GsqGTSUVaepwkWR99LLJ5DRiQpsc2jzBsWLzcCbUusbCXXGgF7guJq2AxKZfwC5FEKfAyYqBNHoMUVYiD7",
  "key33": "122qCU5wVD2PyE3fbKTMvk5JL12a4tYnLwBWRDGvWk6KRdPCmwQebwzVNtHdg1axVPMPxdzb4X9jp8GyviQBS4aG",
  "key34": "3A4jM79PGCn5FbwR3V9sHPhQKmZMozt7EqAHax7fJS8sUUnSCB1ViQx8zq3JLfHQjwnFZLz7YGFfEBeBWH1tvAcM",
  "key35": "3KN956vWhrEkqVgi8pDcRnX5FZEMjjfhwmFrgRByFUfW6gtA6KXRT8DEtbey4ow4KcAYbvqyvujGtLp3AHPFz4cJ",
  "key36": "5Sga4D4eUyoo5wQB2YyWATp5ohYBHL9DiqrJL3b2KaRpGsczK7gTvtzSkHtppAd1s7P7HKQ5ynvCgjz7Th8GmQdy",
  "key37": "21LyGSjPi7e6PaV3BFGVyCtP13ZdA7ma4cDW2XZUpxwrp2vnb1ZNFRVtnhiEVfRXZZnfs2RApJHVC419q2JytLb5",
  "key38": "4kWzoJAUHwUk6c7DzWhSDww2DVoBMmk7rM7yWpzHJZq92YQq2pQQNxKduxRdAKNhALoMkEH1V4FrBDJgfaB8LJdn",
  "key39": "1SJqed41uR8w8EoVie3w1vA6Hpkaq1ZyBVvsgmKQv1ajVdE41W9rFgc3Yte6R7iEXh6B41UCEQ9uHHHNBR8vB43",
  "key40": "2DkLSL9EDt1CVjcvWYo4dBSHrRy5dfCpp6oi1n7PHGgwsTR1N3QA7LnVbu2nfD58yYDg12HobhFqpvK8eyqtZMfp",
  "key41": "52oF9d5EqHSKh5wptThPFUhAwjUqz7hWBvXe5JoABnwLMb5pkTG18fYmxWRYNanMnn3BQSKRdZ169UnMxp2bh2us",
  "key42": "rtWxnc5wWLsKnGE7xmRtkaa5fKfVBVcD9qfa2vXjSzVXd2qbkatzngyVdzjvUk8VGJ4f9U33LLqErGiqq2MwRus",
  "key43": "2mnUV9KmNYt7Ps5Qf26uehv3DE76oyskp5vj8kEUh4xRX9x9wBbowYvAUiZLVatyG79nbB89p5JLAG2HRc8P3xgV",
  "key44": "3Xu9ctDDEZ261rEWiDiUtyfhzZnb4T1LfzPDooRqpkyKS3heURaHBB2sbCjmXuVL5vmwMtHmxBSyVR24NjTMVYVw",
  "key45": "4mTEGzmBzCvnJXj9BqMi7ai6DnxDCPqXhi8qUUtXk71EgR1R7PD2pXYkTbnpL4M6w87wjkY3j41UyvJyReHomLmZ",
  "key46": "5jMwpdBE3KNadzpQA53vbUJwQoJA7U6qU5i8n8LHJSZib1WnsbSPySZmx2YADcNRXDWez6qDeum4YRFXfqGDssdD",
  "key47": "3FvtKSKGs2mQ5LLf7pp7h1hH4kX6oRdMjKiq8pYKEGcPVYtj4htcEkv1VEBU5F1DWy2qUpS77aUy712rEm28KR8r"
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
