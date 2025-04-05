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
    "4ej3uH8RaJ3yCKoGvRzdYntbN4U3gSwZrX4eF6TzdMkChj7LWVoRux4r6PtRAWWwGcg5uaS5fot8FZVDfn49JxqA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dk9VvwMEEmUyJaaNwdZv4nSxBBLE5obukf7Fdy9nWDwNnkaumCuKZT7Pg637jpZeZwQpMHeSSZSeUhAyLishKQf",
  "key1": "4wfQxH42YjgodrXgmVXXeRnwhyzyr7VWzpYYydRW9eaKexH4QXjHAvSxGFcKZS5Wgpm6jFXw7WM6gr6uR3RAfdjY",
  "key2": "3Lwmq4EQUaLjr92taVG1nkPJNndVxA6C5ZDuq9fs2eN5Ucza3UCX7cY5HKmzHQn48tRZx17HU1vrZ4rxwX4nXUjQ",
  "key3": "4297f5qPbocMKt8dojA8F3bZ7vBUZ9q2jhFPKXD2JrLE5twAACoqQEk5EN4eWPrzCVSynmsDJzacGzpzYWRnPSDY",
  "key4": "48rbScGXraQEduQfKmKfFnHTfWNnHjmGwMV6MKpDFpSrmKc3tjhGmeUhZ3pwj2smdFnRqS5sgq9dHV2wcFxrPUgt",
  "key5": "5WvEv3oRVZ6r35yska4FDT82KK8fgPqm3UQd3fptWvzxfY4NtPLTj3gXbXZf4RB5ocivwWwH9so7zG7HqCjvuqNU",
  "key6": "uMiDKLjTLSnmacT3W916ANMA197H7T121vPs4gSrqxQSr1SrgBz6kqUQJULEh2QCkigDebNKgTMpiFoGucm8Jaz",
  "key7": "5prRFKFobWghA8z3an82sXumr6CST1oiJziTneRviyiVyBwMsMpBwqN2vJmmymahiMGGwWKhdWVZVoDLVLxvxEsk",
  "key8": "5tyek8TrjE8yrG9LVsjQ5CvikZK4xRffc7PfQUXxRSthE2RzpXgLyJbHvJL3Seen7Dd7XND4MBZESVT3vMnXWtB6",
  "key9": "5a3cbj4yTk8PiPY6Hk4Sy1oaJmrVegUV8F8f244EBiQ3orE7TEvJaepXFFgqqPUpE9d1Riz8uQs3vs2Gqdqm8UVS",
  "key10": "4zhJaP9Dynd2raYDqeRJADCZP1EXMb67fc1UsGZoUSRMuZKdWjEdTPWEyTvM9GEdnmRwpZvPduoVQHxE7n4sVstE",
  "key11": "29jNwoqMKDSSSXEksKe5RJrQ7hYfYb1wkP4WxAdtKa7gwdADubvXpfyHaFkjAMuD4qdZR2k8hrgQVHU7VeWCjsNw",
  "key12": "3TAL9GnJEHeTo8h5r1VdTmskCGNdjx6ZBepxpRQZrNLvxd9wciDZMsQ9b2EQoZK2YRL5Q9XEQGTHimyK267FRcBk",
  "key13": "4QhmsSZAj8jCTgYi6C6kM71RPcDkqSMSprfwmKD6MiWHcSxfCkb9KaxryWEg6r6hDj9SgJZM5uTQBEC43iUEn8FV",
  "key14": "zs9aTRbhFB9Eb6j3PCHht4eExin6uDJ3Y7m8jmAvqC4wtCai1mR6SwhBDfcLiyLEbT5vVve3U5nw179yLYKdRyH",
  "key15": "5deFm2VBgxK9dMoWaQ1otRCKyKfeWB72xPE3CqKytURzqVpYN2FxQLGkFjfbgXFgRCUGLcT6spT3H6d7d56h7Wk9",
  "key16": "2Bb3mg9WG7NvKqDRbwdXjkMckH3guXFsfcoHd5HEctEXE52dpMgxQvFS2EPJUe24nYJCzucwNGFvvBK2tZaF8ovS",
  "key17": "2j1sGDvwKEzuBpzotLZofokE6cqxQzHBe4NjHhSu9HkdGU5ZhWbUUktKG1UYMvtbYdfMBTJ1zjRCJqGFXF5yuoRb",
  "key18": "2nVfwvZX4RZ5myrFbRaZtwKNmU9TvYDiPnUTFN3zPSGD4yGFrK179V5VRVrR9Nh8gyarM1kLrMXhujRXiq1AE5iK",
  "key19": "489MWZaxSa1JJGJFUZDUd5AsbMqK838PjrgGa7zX68cxk3Q9EYjYgBh3RSP6wtGHJeTuGvUHvhhchSjEk8e9wU86",
  "key20": "GL3Jf3TwcsFaXdCQzZCr88ZZoDDypZ1AUT2XC5S3y7snz8AiUarEcYjrasu7nMi74ueTZYrJEyGJnwmHUpWaaFY",
  "key21": "3kS3ZKzJUY9hZnjxVdSanxVLUxoQnj4cNEPibmHCvsDTYLuW9swQUN7mjUMuA7ExjZqRU3cwmUndJGa6uymVNo4J",
  "key22": "61w5uo32CzSR5BGZCDREyFkM3mk26aJ9Q9tbt7U5xJAbRQkbdYKYz8MrmRQ28m78fAi5RoHy3dt1Gih3YAdNEYyD",
  "key23": "4DA684iYGsKAfpTDUVRYrHpg7ZQFrdLEKuH7dhHYGfzUyg7dqfvgBgwdrgfqGBVvZY4VRX4YdKm1ggVtgfKxfxrP",
  "key24": "4YhjnWGAdetPeMuQqLAZbxVvVAyMDkkunt7N5bbrzdYac6NU1b6PC4NL1i7aFPRfS98vB8syVNTVPdBQoMfnFkRh",
  "key25": "3UwCMVV6J2fhdkf1kiDvrhbsZWFFgVwfFoC4kcTdXPrXTnow8rHFx6TZ4SZ6NBSrzLVG2aRkoAx4muaP8yXeCGT9",
  "key26": "2rUJDmAmhmkF5cTCBYxRBftdW9qySuB3XA2xfdEXVMFv5wC7GFheDsHBCdb8YaADPYJiJdcncbrpmEQSQQ1N5Q87",
  "key27": "5tgm5hKJzRqhG3QgvZ46rBBraXXU2GaASVcKDBbvpi8SSDLhvwjtN6FobH9Z3o3QXdZC1SudVMLGfBjvso8HPD1T",
  "key28": "2FS2A5eDGVw632D3e2fwWWTnpGiBv1LopmNK3pmP3S3M5uRwFqKDArWrZEDtc75Tja7Uhbv5tDysU96V5RWFuQY9",
  "key29": "5rtXwvCvZ3RPnKSgvptXnpKJsm32monjTmAWt6aGFsdUBotgukB4bFqn3a45TfMzdomaeE5oFV3xPQqVotDw6vo8",
  "key30": "3wP5Rq2812hSuuhXwBFcsHxKVFbHBuYfJ2fQMxYwL7AfxNxxtxx29Vyw7jJoLBF6qriLPqtxQC7vMPm5hvR9TdEG",
  "key31": "3dW6dQKdS7h3FcDA2JQbifnb74TKwZJmq4H7JN2epKShKy8BmcMvXB7jwknvwQArsVotJPKJPu4RJAqnhcyR6Qy3",
  "key32": "2tteEksxKGBnU6GeVEYbYvFb7nwn5dY9iU4j4xUtuNc4VnGpUP8NfG2q7xZBGxuvYr2HUyw3EhstosRBZVkJPaFu",
  "key33": "2ezH3tyEE8GAQftbDudBUZPzGNx7zKJDo7umMZu74Xr9fdubExHzWU4eNBAtvrUATvsSBnjovAzVEYXM8GdKNRUf",
  "key34": "41sFEpVxorGaB6M86VCw38w9fFdoGb89kcEr8ch6YccSJAyNZMUU9RS1nJnERKCXcENNpsKTKzAq2P7mPWGNPQ7D",
  "key35": "4nM6K8fMonGiMQhprikR8xo1DsUH1uQe4cQFKz3nDFkbnsk4tfieEWRY1U2YNCXyJjGMDhx6MBvG2rYMtCxVcUdE",
  "key36": "hNG7AFL9MtTx61ak95hxdisWYTPkRqPZcU6pYy8zjRARzDso75RFN5XSKZ7iip6U8q6PvoMYX3M4wmkfybifVkf",
  "key37": "3QCdNJ87stLrsqTmL5tKWDjbM4HNS1XHQYbVctdAJrwHaZf9PNxkiwre3euV5jwdfijBVxZMij47yo3s1emTzv9P",
  "key38": "3MZF8VAuh3dFNMQT8PZeSmKAwoxa3zPs15L5tCVB326koaa3xi638nWUqm9twSubTWDJNpDP9RX4NC5HsidkMFXk",
  "key39": "tc1Nrf2yAajbfDfdPaW68xBhs1qZKCWkwr8SLbsRqyb9Rdejjwzk1QDujw8NiTV8s7xpyh5kW5anXiFv6vxDrxJ",
  "key40": "n93BitLKuTDvjNRCAucuUadCzYDYt9QCiG3GPEh7yQz3GrBRQSYtTNvekKrkRTSXKfEbi7MC3rCanzNEmNs87Mc",
  "key41": "3nC4rBkDtnKVCq69fsNTL4eHi9FPgzgsT8NJbuTff53Lm9WAsUDwbnRZKxNTmzUPSS1kJBXpfYRUpRQsMzSpxygz",
  "key42": "5wFmovr57t7n67JrRUH93j7aJFBPVcRWb8N1g3MpNg659XCPiGnVEafWUCjSFUdKS15vQEiDvu4Lg3YHH4YgFmLG",
  "key43": "PTyUa54cVihqhVX53jXGHVsrgW7mCTSfLhTpm1eoPV5SnVpDYmfjWDWkub8D8yPSUDPLQDCm7WbcqrFhWw7RNdW",
  "key44": "2RJwxZbGMdchoayzi9gfTDQ44uVAxsiMqiVwuQFaC3BtkZ6yPh9i1C4XRa8v57j7W7LxLrK3fM1B56m346Ne9YZT",
  "key45": "JTPrdPgwfTXLSPWJGda1EMHmAcEgGSzGG5KkqjhToL5QgCRifxXqFafqQvUKiMxVVJ4GgjX1JqyHfoZ43VE18hd"
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
