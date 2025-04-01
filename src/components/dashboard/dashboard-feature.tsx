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
    "3uK3Lsjwftz3qStLYn7gWpBee6bsg1Jpu4FoRm62Qq6j2LXkv6SK6rWtgqh9YtwyCoNicAL7E52gX2eokERakVZ9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cMDMsARtS48BXEdqXHiAtoLVfNHyj1dxjcmR6MrLVbmySAFewqos2E9fc16JH6KeTRNgYjpNreB8hRppsYxqghH",
  "key1": "4Zte4crtXEiruNhZFGAp6iymTZdgcYwAqfCoTbju3uHt8foKhftHTqzk9xGupugeFW3HL2J4tH6MdFXHenPUjMYt",
  "key2": "tCj7TGWVZdo3KJKkSrTCxk6qjCdNQqronYWtQLiNf1eavi7qzizgCn1cbTxazGFdvGWKrakX37z5E2zkp4X3Rzf",
  "key3": "65kb7th7em4RqxuqBfZA7KmtCKYerxPXkJWsYNagbLsfg4LASD1KwfsircnDWPZthY2qxLg1CpiHhFao8LDXew8B",
  "key4": "4TWh42qjXmg1mWrGkL9WbtY4YDjKUzN3zPtBPkwZR77SZvoRSXBqrcrULhv4tCgFDMoxxyyYtwj1hQtxA6R8oyj6",
  "key5": "3jqxbz6xYD5HxbsBuvzqYNR146EVNrCwojaFurEy6LzoSVY3pWDSzN1T2nLq7Z9c9T8Hcv9YK5ZpXUEeRiL7tj57",
  "key6": "5e7Gm6sMat9AkPUWPa5j7BSCzccPZxH4pTyBzE5eoPvcvgWKgx2LiyuK34nUw3Fpkmxaen6UZakVsyCchtDMq4QA",
  "key7": "4aw95CrpWg2bjaHch4BobvufM6p41HhpX4HPrZNtbEynFQG2YxH5pPHep9FF8HaVyFH2zrggfhQKcZXBH4ge73Vb",
  "key8": "3u9HiVC1nU4UZFfW5AeDnQuAxwWmTM5m2fdH1DePG8E9wqqroRDREd12DrNhqyscGYhGzeryxK7jZ7GaA6rEyNpT",
  "key9": "4cM6HuvU6L8Dk6eN3zoA8VpACYeuGctwnR5gSgdYTJTMbRBGFZuLcPcVq7uskJ7JvBCafyfsyQa2GbHBKrXeikyK",
  "key10": "4XJiz98pgKMffR8PAAG6eNGKPJriVvPHMMJFmnqcThQBvciURo5KxHsEzAKSvZ57V3b2fAgRLp8RnaskkTgEL15w",
  "key11": "UEp8rA14t4kNXh77foFiEvm99xobUm7HhmsZJobJeNxN473eifQ3mdennE747dhz8NUB7Gj1TSz2bpaVp6xfox4",
  "key12": "5qVBBg25wQ3Db1QVPVAU3ucHLBpCts34Tt5Tph8viRC43VRBk67Gmy4Wev2M4Bt4xmNR55VeHyWarsAvQ2xthSht",
  "key13": "4tW5ydBnnSrCVDQAmJT6N7iiXD6c8B4Z6hBS4CZpXtGWsETJTiJvNecMnoHuRXb1NKEyERs7fA56vyENYfATmv8a",
  "key14": "2JoeJve5C9AyhsHYrCjB1n2QTSRghqjV3UmLQDJYKkRHq6Tu7CwnpK8zdiNZnFQsTfBgjFfKXpWeBfvQVWRJDKTk",
  "key15": "3RpnSdeAEkgqZduYvKK8cPv8ixBA6VxjpE7TNZE2UauDK8FuxyU1Cqp3VFT38UPL5xbqj2sDXAsyDnkn5omBYLu6",
  "key16": "9gnjRwyHewHDZbUdzJAhJhUzt3t7YGAZAgLT2s5vzU5q9dHdKwXcYRKGANQiqfkBSMQX1tPdw6VkiWBbKAQQfyi",
  "key17": "3g4JHkQATRgeaVNd7t8Ji3jT5YY1eJJ58NsHbqg7ZJFwquYUXxsiJsXcJEsWVdALrirYcMSpXNqBQLFboQbQnZxJ",
  "key18": "4ts6JYTytHXXhwVJ1SG7R9ZrMNcTscr5kMVNJHe84PQx9M8rWpEXLsw6NyEaRE9B4TvycS99Q88hvok1SBcs8Dzs",
  "key19": "5Yqq4jbjiMfsH9o8245c94xhwUNiDncjhdBMoYrZ9Gidx1p6AZ9fKP9Gs34bnyuXem8UpWKYKAhLgfCWHzjDZpnj",
  "key20": "41pqyAZRwYpX3mZwSyWbzV9TrpGmUvKa8AKkaAfR2YKPpptnjgHa1VeAF4NnjFMqbGYdh2saELsDYDZ8P5MSTFeX",
  "key21": "5SCSVQbgWsjtSuRT7rHnciAoQNySckgBC6odDYMGf6c9NxB2RFq7suneVkvvw79Q4HHNFUQTp3T5MF6fsx3qCZwx",
  "key22": "2Vte7XMwa3uZgeWsVKrchqu6x6kRRJqqY97pajHthsvFu4rKXNXmsuQbN3JQ4kzEuoygzDQ7GoqxbTWv5tRnM2Sr",
  "key23": "3fFeSecju3pB1LpSAuBWieNycepa3mY8UfRUSNrS5o3WsdY88aTp14NH81wfhZkdStwpiJeBLBEDL459J4cRbbap",
  "key24": "5CmFmTVdkd12VEbp2aGEKsDYBTQmKcmppGHUebWor2MR8X3p9Nk3GRNSFzwg4c62nZUdsVQ2CqtuEHKahoUhxFP2",
  "key25": "4vgjVts7nFq8kGHGKZQdQCsx3Xwi3gywaJLxJ5MAyuXeUe5KAXgPQxDSAW6tgQ8wKjfVW36XTYur7Y9HWkz33Axb",
  "key26": "qbL8AKWHXvyMdiqsStFc667g2NHVRzxBEy4vzUGXx23DW5WA3p9Eqj962m8Va3TLMCawVh5KQtKZgA5Z6sUtoMX",
  "key27": "3vDgYdZkqz8kgfWEcgraGPaLCoA6pjkpKujtvMFaXtG4ms4SEyBnR3dfYGoHXMYBTegrtLd5wPWCbpPiG5qs8xbH",
  "key28": "316ySJ5LkRbXiWyAvmQ6CtsuJShcbZDvq3NRM418JBkGP8S2DzuDMd8jknBAE6e1YHTXg8xxfLZpvbHnp8ajDbeb",
  "key29": "285hS7d5JvoJ63XypSrMaZvhZvqZ6cCAyHp4BjXQfVQpZsWhoHs4qceiqmmXJ4RzyzybjY9xf7R42H611M998RDh",
  "key30": "57wDYjZ6kSvgTVFHUap27ZjpPza7ZCHMo4fpXDaxprzGzvczoDPH7q418zkAvBpJCoiXDbfbxs9KqDLPqTEWCs26",
  "key31": "5kbmaiCW9UfaRfgz8Xt2BCHdN5hrb15Mxk9d6PHnxCEoTBTfGDK4FFe4xVPGUXyQyTdbWpwgbYcvEtWHYGRrAEm8",
  "key32": "3Vin3ePmLkrStzdK4zAC7yd5rydDXjK7qihAc1ta9oWVPXHJw3bc2xjJJDE53vhKWuHSw2cnkhHx81yZ79v4t6xC",
  "key33": "43BHr2BoMEhJwrgWVeAaKjrqkGy5JdVoLWZYafQSLKUVynxJWqTvfqhydULNwCKjU5GARAaZY2284BXAX9sQo6Jb",
  "key34": "4rZsAGouButTi46wem9RANVD4LdF9BpYkvvvV13J197eWZ7NF6A7foyBFBZjYqxBkGVQreRmFPec9C625YAAifea",
  "key35": "3RH8bpHe9TDLb9fFYe7PjTbgQRkYdsSxpthbfoahbvnHFqZomeEQ1MT44CW58tifitYyyWkiSRYPY1b15eyh18hz",
  "key36": "5f5YifgryZt9XNcgT6T31Ksyc1y9zUKJFKq27MjxDgeKLQufA1cN1yPTSFdwkYaqstHK9bsAUyyize9vLMyDyXr6",
  "key37": "2JJJakg9auqekWk9PgfhLZWDMqxXyfKExPWv5P45WJghCLpyxT7QTDz5PmyZSe2mjAgeB7QjG9i7bFATKXLZc4mc",
  "key38": "5ZWgL3HhBQX6C8XsudvEVbCvNLmrj1yyR6ajsBLi4TsXNqFAz5WJ3Uzn8FGw6R81pUgVDpu3eKKJYvn61oKmhNCb",
  "key39": "3YHdftTTKH4zNerDm3uzZdaob7gNzQdnzFHBiYvnEQGuoJDxD16QNZo6f8mXY8mUsjeFcp5u5QFhW7VxAHzL5ou4",
  "key40": "59bebiXyHzdBvvKsPF9J1qKNusvRAV6cb83bMyTRwSxtnUH3sfx5DwyYdUQHcUvvNWKvui6xu2fy3PakJy4jQTSy",
  "key41": "5CkKTdttwXhUVL1ZgEb8ZNsr6fyjVrCCUXQkfd54EGQv9xzKtKLJjs3qm3e8taVop2xr72nZgiNqTSSnPpzNXoAJ",
  "key42": "2LGF1SwM8E2XuEbEza1KQ93WMmxVbxdzkmAdwfg3x41LVv1wEwcDmjT8E5xxupcmzAGdTBSbz2Pv2hZFCJfEhPmi",
  "key43": "3JEhqjck7oNn8uwvL2yizNs3LVgUytJSYGnHEX8t6Ct7TvcDzLfxBfTkt1r1gNi9LNbmfPL2TByD1q4W8qFHcfgR",
  "key44": "WqwXzSy9fuciwcNUmTVUZRYw7PvVUpZQkCVrj3yazSjvpjRkcL4WCMzEZZExnzYebbEbgjhmrzRxt3SvnPacoiV",
  "key45": "4JGycShrmxJLDYg4w8B2bmNiAXGejdvCzyV7DZET7aYG9xWeyaRFS8MxpgJufbqS9acwEPtT8r8iBfSsYcLxCtvU",
  "key46": "5jK2TuuuXYM3sv6UmJ48DX3Vdbyu2CsoqjYRsMebNm2ips3NjmngxLSQmy61m7aBiZBjAry3h6CL6wvGamGQueMD",
  "key47": "3cfnRSQ6TkEiBZqjGMbuFzS9MCeWyKxEk5dFKNp3V58W8RwE8KVxYyboxX7teeX3VMeydNhP2Qo4UNPFSswp4GDY",
  "key48": "62px6WKqzngwpgGoKUfPFU7ZT8WUtMfxsodfpqDDiGmUKgSek5QPzrZ1EWyAosjfWartq9KGiwpioHmiTP4mJHtC",
  "key49": "52FqF4RwAw4utTmvYb47WDcKfBmNzdFhrT29HCs8ngxpSK23H1yWYWSHZK1qtjZuWX7hkh2v5PZeZpjyDTpehL8u"
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
