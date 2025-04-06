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
    "3vewqMrBLM6gf6ve9TaA7aJ3bmWRhVLXrsbp6wEztorMLiteATREkTdwk2L6c4g8GigNTm1einrEqVmRuxJCCh7E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qzgxJVnnuZ3tgoXtetPzhY3r3qG71RmUGi41fwj2yqFYjD9Agjk83ctuV4Hk8LpR6CfMgEWMQLNbXupocXqhrtK",
  "key1": "5gXqvzPpfXmSWCG3ADVzKo5oqpyk3UqQ71PJg3La3T4XHGkP2uZdpq2fXvJvCwgPN46cJs6zKJ4KWq3z75fDi5Lm",
  "key2": "6BHrcD8S79zd3kLw6n9u8YMui5rnxWT79UrHEYgSroESLEheeQPkvJojRonTWDyyfzWAr4sY8cSpGnzAQvQJYL7",
  "key3": "4YkNpRS8UEBErVMoC3jtd8ndjdfoQv3iRx78JKrA6k7xY6ZvzHMRP3ZaKE6aUQ9g6oVxA9fJYHtfU2vFjtzQxqMK",
  "key4": "3accUTv5tBVd7pf562tJE5aJMM6McoP7aFu9FUfShuDvSFzn2zQqjARjVg6b5oiiVLovEPvPeV7KsKyxei88gSto",
  "key5": "36AioQe7PAJAxfsC7N1boxME9DeVuxhYvnfH9eMJt85kFPrcGHL28si51YY84yHH8ZPoZtvsceDsrLXwCkrwdDAn",
  "key6": "NdDaR6h2Ht8jkLxVip2D1am5aUMPFvAuCwL9yBLTUksipnhgMyBc5auVWM4tb7iTBUs5fEkdXxDT48FALd4PYNQ",
  "key7": "4fj7Af2wcJHt1pQGUFAsUA1jstKgnd1gph1ZoKrARw4C2ZZDMasG7vmEptoEPgNDYLbRo5YnLoY5D2WxksUZ3z52",
  "key8": "36GD9vZAYjsogZv4ht3cNwJfa3LDeDLfMCXehPWKDiVaBxBkpbDtBxGcKHaFeCenXNPdtgehrsh8vjryKy75PbFg",
  "key9": "62YpJ2JBsfqxDG71G9XvaJGg8gsmJoLArXTCMQPZbkpNCUzPNEoeLpfjcp1vPQbwZgkJSDUmtcYHC7a1258wbCjP",
  "key10": "5WzXD7LAESrSVWGT6Uuw8vC98yD1UBqddxyHJyZfN3VB6eubcinwq6QdcNmwELedeM8qdwVoVbrvfJYmfoh65f33",
  "key11": "oJGLXz17d45guXqBSN9Js6U9Gnw1Eu835U9aGcZ9X7M3Yjj4iqdS6v68i2RtzD2F8birbpqWBq3Qo4xCxHgY7G5",
  "key12": "2Mfmj3z4ZEPfRRqRPAMhs4mx2Hnc7zyHUj6PjoxVnBrgfNbUDVeTSraEf3nbVB4t5ruTzHjqo5X5SJioUND7EGwu",
  "key13": "2jEG7m6WTGne1tHExDrbibeh9jo5WVMpYcBzYB5iP7HyezxRJen1GyTKrTLa5AZoq58oAMChHs51EadQvZP6Crnc",
  "key14": "5sDqtTrwtKNuAZC75wgHwVB9Rx3samgAcxcbYREy2E9jHUe1wZFvuVQxQDoyS7BwbK5Uqupk61pVrYQbtBRwhowF",
  "key15": "5AFSPaEpS5nUXKN7fpW6zqS51aAfFd18UEUatEAFHJyNr2bLCDiY8CtFPuaVgVLE4BDJHZs5zPjNDR7iuh2seXyi",
  "key16": "2hAPDqSLyg3xF2Y4whfppDbZHAspeDaaMmMd34tJ7xgU7jqGFbb7vk1N6JrYLVdhXq5RuqtMD5915iCdZdJGZxej",
  "key17": "2EBzMDC7uGnPf64CpGKmrdPasramXrmYbkaqoNpw5rKP5m3UwnGrQH6poTkgj6WkC4fadkkymW6UHs5YgyHouk9e",
  "key18": "3vVtyQGRGu4N6HEamA7rbpCRAT7LgprsEYmQ8Nvw61QU6Vk21WoXtQ6fkxWemkUPefWnDEokRYBBhXKBxkwmYxhm",
  "key19": "3smpE2ufeRnFhFzr5LaJcxhn9JwbQmfhapLCssnXMXYarhGMmHsRicuT2KaTkifLJZmbjB2iUoycPCXyP28jQuBc",
  "key20": "Uma7WiyaKzPp6ukQX4mzuBqpy2gw87vpKdpPNBvkcxPhsDpPRgWgmCK74XZRp53kEEZbd4fvqks8un85p1Q7hny",
  "key21": "4iUBgsgfYBPjXtQUMranwkAi5Y8zEXZ9Qhq6tv5QsMaF5ornoW8bdQPxgB3MRXXF9bazz87DQr1zXsTjmkaGD1SL",
  "key22": "39wHPYfKgQqA6uZijCxgeWv3HnHWHCC8EiXJYavrysmEJhNfMTjH9WV7uKhskLhm3j2VSorgR3y26iyTocYuZxCX",
  "key23": "WzzyVwHFoRr37QG9HbyfFxcE2YCcbcsxdsqteGSxYxyjosdTLde4ZtytEwuGAjeucXWuZYGpsC76JvGiYYPp85d",
  "key24": "HqPpfCJeAsCjJarqgvCstxLPySqGvBJMDXEnYn6zXQakVawfXo2oHpNWQpKbZVVosEAymt7iWk6Y61WdTXVQq7b",
  "key25": "5VEL7oPcubrLt3bLRNfQPrmUs2NtrL7vE9h19EWdB1dPpBt5m4suVZ4keBfsbGHVhcqSZG1NLezvSC8P5tasiBU8",
  "key26": "eD4P9Qpi7GZhtUKAqW6zinRDGZdZHsJE97afYAgmTzaPniu13mdCwoEs368LKekujMMF3Zm2hpJbjy5tbo24t1Z",
  "key27": "43MgAMK8PvRJxsgTi5MJH6szXr9R4db9JDSvzVQvDtbm2FkihzBzzjQeo7Xy9ZqLf23Wiy1Ve5xdQSUEDw7CNRZq",
  "key28": "3qqmJMTQpbbCoZVpCm15gF69tbBSDibYmXn8EihFWDaTbZVkj2MCPQ2Ym5eFJdKbUjKnbbtSBkV2cRHjfLyNWXq2",
  "key29": "Xr3udNjKEfJqnBKJaEQgHTWgLmPAErvkNCdpYWLBTyQjqm41boEJH6nnb6MSvZerjnDdvKFFR4NearftuNsVtNb",
  "key30": "2rr5TL8gMZM9HNaMjaogqU2TuKfdeiv1ghv5351mkGs37MPxzpVd7otE1tyhBywrQQh6QFfWxeUdzA4x4THxVa3A",
  "key31": "2GxGAjfdo5muGoDpV8TdPXskAgtK9GiHXpHCi4Tpu8DJNVmQALmPCGpJw1FAi2EaAB2GzXX7ceWzRSUBguZmcqGe",
  "key32": "3v51ERFgQrvztxXjHdaiGR6GK5U6dNXKTxpHdTazxuUu9vE3oNyQ5vzfxHGhp9gXJ1156ZygLF4iW4W2ng5qjcZH",
  "key33": "2Mfc9kBKzKKrqPXXaRD82bJ1KQRjQAfsEiLM5CCBfx8EnkyGAT2vQfGi7EQhvt3TjtmTEPs1nrD6nN5G4syUKPbp",
  "key34": "5mbCSp9p1DNQQX2QNytuKoXDiFpiXca5u1PgeYbZYkEQbS2F5axN3tA6vwwq8RV8sMVPcLtbbwgrNKEoPdsB72Df",
  "key35": "61fSrMQk9SxujhD3YHPtaye5pd2MuXzeezrZyoUm2GsECZe7LScCka1sStUdaut1MMBWX3uSkQV5oAktPm5NpQDv",
  "key36": "5HbUoMJdA7Qk85QxNWnmUVLJ5u9uop6SyXRZUGNTTqr8SERwQLvGmTfzNxGJndr1V5F7YYPX6vLVk3w5e8QkbHKX",
  "key37": "izQq5Wdr77X5TqdUyvCnvStg5EuQxtTHcrUhG4L53Csohia9bPZ7cZHH4ovwiLoQx2RsGz3uwHTatFccJtjzyZQ",
  "key38": "4zMGm2PWC4wh2JsXsKpsvFL8iLMBojYA3uygevs8ewDn2U1NZVTBQMKQmVVFpXrgxnW8Gnc7bpfe84B8Rvoge6SZ",
  "key39": "44pSJNsg3RbcKdiDbBXg236nhjhsZdA38iFkQjazzUTtRecoWFMLeGVxdXTxaLPqnW76BCkKC6hDdBvdtFY1DHTx",
  "key40": "GrVqgcmG2v4CgwVDCjreh9yh6FhEzvMwXpxnUBRokDCAedHoXa84Hneso3TMjZZCMbbY9xWWtP9r6cz2PqteEpA",
  "key41": "2FGF7V7spaME8EpetKjoWheYC1EUaagtzC1bbx2c37wjXy1JcBcc16bLU9KLp2GrVB9LAjdoTYHCxfPkU7rebxKK",
  "key42": "3xHrdxMjC9ZnMtaFCQxLxVXFQaMHoSTHhymkn9QCzD95GEUCQ3g5p9JqnKApYKnfmqLJRWKBBc8k73M9T3hX83M3",
  "key43": "47CVYk9hVe6ziPFZQT8PXQ81fRMkMmgnA3BzguAQuWCiqhgFrTDqnyvDRrUYPAkn4EyTgHzPLJuj2SecWNTPZ6KZ",
  "key44": "YFk4Pu7KNf2zDHyyWqucaSPQ5kWwkGtbCqWeEUGrVAevYRaKy29GzHJB4MZ1WTDeeRAnVrcJK2jfqb9wtMRhswn"
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
