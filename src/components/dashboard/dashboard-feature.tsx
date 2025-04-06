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
    "2PwRmRYcz8Bi5yVHVvw3v6VAbenEtgY3tEoDrw8zApQMgK54X46sjVdfB6FkkWjdKvnJy1RNobFkyEwuoqwwAnWf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NX34UHamq6X6t1uWHfLRWGrWB5WqmY3DCymLXCMfhPDNQfUFtB1Z6CMn4RUvrE3eTs8hG8J9gvo4jmwj2NvR4Bm",
  "key1": "qwbraKSHKRtAHfTHTmhXi7p17ny8J3zZGHVtFuHvQCU2ECQFtacazKd4Rqc47ujq7DwJPGyJKfsqxZJCPMYxU3a",
  "key2": "5vHaQnLaLi5r4xgtucLR4RGvH7jf3GiErZZqFdqZpnPPt167wXmJvEjfTVZpnK7SdK7YXwsd82UB7XyBKrk9CNDc",
  "key3": "33xgyYDLHkeHcy1RTuPkK1hpceoYuzCcC9WbTTzAh9hiaLQBwbFkTUZdEz52rwaySnV83LDQ1ssLQEPtsgMStdL9",
  "key4": "4SS5bBAiE24RKRKo5Pfq4qkR9AcPKZeTgFRZMP7toqEnxMNtXYvmvyet6kijnsrjtwL44h8jHVE98zyVhwq9B5ry",
  "key5": "5Y5jXGNwTPniserppxYViA2ymNcrT1GbDzJBrYotTfGTJCPcdn3AyonaAfuoKfK9J77Bvdt7bU9mhXebySFAtCVm",
  "key6": "61LwHrSQpEUYpRspy1qZfk9ZnBk51SBezb1dY6ZmniWnVkDmDiTw6Hx5D9uwHuzW4Rhktay6zgBCgS7QGo3UyvLk",
  "key7": "55LozqHMrih587Q8wrb5p1PziA3gzdbqtoFkhRvF822KhjVALstDDAotWM9jeGUVEAhUKGZz253RpuAothLaCaJY",
  "key8": "62ZQjEGU8fcfbwhoExsphkVMfxuRnEHGqaZbDjhZyJpMCyKovEkg2wj27htofejyvwVuPNP7HA6dSnh8gmKHDyAm",
  "key9": "4XmqQ9wjDRrJpprKRSotYT4avP2JLddwefG9j5yyv4ApFfpifWGzWPyYGHAYaPYZHjA8r1KrbFw2tvZMM6HpHzFK",
  "key10": "3pWd8fwRvi6cPdgbywBTdKJf44aa9sRzDCUqsFRzCfCcqgQpfqX6zePmsdCzBAaNtDTDNnz57WBncyBLkK7tP1Qr",
  "key11": "RaWJQxQo7S9GEQmp8BJdVRDymtYTfnDprkSubdVGc5K9xbwtygEnTNPSKg8uqdyNk61cWgcJD433UJfcv2S53dY",
  "key12": "66fBvL7o8QVYZwE5wRVbTCckFAgbVVxJ7oF99GfqbuDQAuqeLq413FCjDgkaNQMiQRBCg3eqEfyQh1TvxWudpdk4",
  "key13": "5tWxbjvkwmregebao9wQScRoeuvjjb7VK6tnLTEDZtqLa3Lj6qqLswBDSpZBVihcPRxToLks2MkFpV5nYErc9VC4",
  "key14": "3mkpbe6Urb7ZwTvDLdshLTH1Tn9w8D1y8w7WaMsmCbbnWSJYt6hedM9eFBYGr8Cv4vkWM2J27Nf4SCsVMZXQLouX",
  "key15": "4NGDnAYaEMLoJA1w5FVM4yE4dopwsmMorWFq84thDe69PRouLJ2tepYBy9nL7ViioyKACrWqdWDzoanHgmcPzSBZ",
  "key16": "43y64JEVxnpYW24P7ZQ4oBUrWo8ij38iF6dndbwhtbCgPPUSzKkBQcTnxv3n6pgxBQHV9752AQaCxkszMHcftcm5",
  "key17": "599CDacBhRXcKzobXwYdtUFz7iUkbhDHx2E7dvYhKMmFcBtrS7UyzhhdCrj3MuHdqGmQVt2HqvtsPNLpdySvbU7u",
  "key18": "56jhnXQV6eh63kmzRchBxRNmWqtmbg377y6qgfKYXV8a6dmYxzFjGVusNaizh2CWEmAsMFe7ZiT2KErwLB2hnabm",
  "key19": "66GUWP9X6EeqDVzSZrNf7gtmFkTtJX5fZpbzh1STVWD7qxKjtq9LEfJgargtJoFAZFL1cAYvMsTcc4zQZXAM7wSU",
  "key20": "5A66BHLdaRtYCMzAaNTdHCAYR9UXBKLxWVHuMHvVbUPnGQNRdRiH6x2Kq9oUnzaJHRdQ7aAQhfxZwykdHb5L6fRt",
  "key21": "2kr2awqtaHKDasrQFw7AdBKUUxyTVD5BQPUzraeDquWqEXbmDjrZWpmFXQMejZ6H1Rbx7bVNXM52PNSV8Hs4UkRC",
  "key22": "4q3SL7eUSg1S2Hb1W76KFt596RqMNT9dBoCZApiy1PRC3AwEAeuWPm4iqxgMYYk1BJcQAct9wy8fmNZUPay8jPVN",
  "key23": "4LNHVuVqQ1Ukw8CQvvuWekbdgEeuCmNaJjHnF1qBXqWDGjd7LxxK56KAzjVp2KnCNCxhN4Kc4TsKqZAPMz8kLfZH",
  "key24": "65oixgrnqqgqkjkLZoDUi7gYWdfKsxketsBURwQv4LxDKKni6vzcvjeXWAPaUs3GNSynazA6CJ41sFXAAbqDxVRA",
  "key25": "3zCKsSiXfVYL7UFFJpMiZNDVi6UPWg9sGdbtBsVZ5c6tAcUt7peMYDLmjbs7bqDNnounZa3Xu7CzUbwj8qgxYdac",
  "key26": "LqWNAP5ZrvV5aqR2HV7KfS54Dq2jSyWvahMtUnWRiAfhnNtEEoMk9EVFe9EzcevEY2oJgDJsNm6HhL4B85eAK81",
  "key27": "PUfsMESraq8E5ypdAjjnRXrCYiSgGKm6sHunxkg4wkdUE6mwYyVEb2kvYvNVKwrRuxzBRaFy87W8CqLXXmrAkuv",
  "key28": "3PvxWCgwj5ujCpV8WxnLSLUjUknpFa3CoMA1hsKpXbUmbSRe9GhrYBGEXCJDKCM6NxRaVENs3LRq2oHEoZutiDkR",
  "key29": "42aHP4spZDy2ipyCS7izuNbDs52Vag9M4rWH1wWSQn4R5qSXXjLYS9thcM4uRs2pKxbvrwTxg7BNK2SWPiYnEvh7",
  "key30": "42z3GbVFkREwM2rEdRSMLb2Q6FHS8ogEXCiFXr2bNJroVUZCBuMhBZiGor4vvzizeaqkVf3Gn6F6C7YK5dwm7nw4",
  "key31": "5Tz25kniVr1ziAirogoEeJkuLDqHaaspX1pta9qqYPSYHPr5YLuQXB8zNCnYMXYwY1rr83zqqiMhjo5KWsxfFcJK",
  "key32": "22g7a1gCQKp1n7d3gRVdf16v6TGi23yuirULp4i9utM6gMKU75aCR1WyKGQj3qyXmMeNySosxaLiFUutYdpKn9Ns",
  "key33": "34JNcoeDdLgVwMhsD8TMnCZrtUjggAKZvUie8faRGvGxeAoPDxHEzeLT1k4mfs3cVo4EMPN8z2WZJMHjRAQwWYqk",
  "key34": "3nbg2Kmx8kfgmnHX4RpidfeiTwE4LDbzeQfCySVamnGxdf789QxP3m9dW2pBaLj1VN3g9vVJKGYdhu7VkM3TEFf1",
  "key35": "Vy2hJgza6oyNHzPKwoaTdJttqhgjjYUyV1Addy1eNEzsZpzVJeN6GvD2KbDuGNwTURquq5MFs9zNbrxzp11ry8W",
  "key36": "KwB4AHY9em7nVXBpyYbhtqENNL3VUDewCpiyDsSfQGd1EiR4UqEqnK18mTPpFx4izmkt1v4HW4a6Y6V9Bz1vdQ6",
  "key37": "rAttUkxZJMiTneMHT4GVc4EhqLMtrg9MbxfYewvRX2GaKydxg5zDbzB6c7QzEsVHFxrtqRQpXVNx7x6EBsTZuMn",
  "key38": "4t3znsu67xPpgVAzG23SREC1s2PZUqiR9Tbe18phLztfv5WaGwn9F48oTQnKrFm3MZ2SUk4zw3ckzbFzEZYsG5Zu",
  "key39": "2RE8RmoWqXiZbg6C7vBCip7KrV1o8HByAhftioR8CAtz4hU7Bbqds8vc9GqMjhMYkkMMJNbwr1jte2pp9YuTPGHK",
  "key40": "4666uL4PTidoTcAMGLGNugsNNvi6ymHdtkGD1Ra5QcAhuUZqf5nDHBNA9sdmc5GSt138syzLfCVn7BV8yoxSMvHm"
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
