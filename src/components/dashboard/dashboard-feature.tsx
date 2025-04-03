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
    "5M75Cs6A6eh25Ne6ySDfSF9XRMHY5b73ugQMPCQoffB7ejZUqeTYRSMKbDXhWWT3xHRozQ6r1rWYbgs4C9rNCyt4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VP9ea7SdbpGgzjH3E5pNmzupXWLwhDomV82TmztNdqQiUAsLC7kZHrcUupA7BgRMsPStFBm4aWCZhWnQcA578gt",
  "key1": "3Xy6FY76CSo5Xu6b24c3JmY5fHFGS6DYTuCVwiQtN8JwxjEky6nWBF2HP3rx4JAcSe6oopDxGgZjRoF8ianYRyKQ",
  "key2": "52sbBHi3Z5EVSNuiMBa4oKujDtNjMJLY2PqzS3gPEVTiUvHx2BGdKffMdG9n29ouEoySGjvRM48gKUJdGrqeG5Bx",
  "key3": "61wqdoWYvJRyWbAszFnqS4c3r7YtWyUaKrw5vP1f1KFUPhxEvApsaiNgWQopRd4ThKFMft8YgKzdpFZQ3TvzWJ8b",
  "key4": "2XDnFaTRTNiyMKqiLqDzkMBsZUrAp6vbbTqSyPjsyyB6N7y99pCV8zeZAigNqpymoKoCqixJYV3DDTB8TWdM25tW",
  "key5": "59JJaph1wTPLe3ZtTd4AaF8QA3GjadpfsPrNb418oULWGBedp6d91n4BJNAMEPbbpCBZahmGVkTwz9Xa7MmoeETQ",
  "key6": "2G2LxrXoUtDVMwhaSpFrswngf1zfQYT9kRD4Yy7droGEy5EGq8w4kE1pptk2jfzWJoo74hUBpqZ4xht9UgQTgGHk",
  "key7": "54o3fnKoANfkTVj5WCFsDaLBZG5NfB73fKztHX32kdDgfkW6xQM7KewFihbLu2VzM55NFxmTSurR77m6h6uMhrJ3",
  "key8": "moqtgRidrihGsffBoJimxMYUgajNuHgSvcS5CJGsLsTvHZUjKqGNK3iPHpd5mnUSc7VjfbPHGPjRjqQXnWodmBA",
  "key9": "HC4KFMEZSVqERJYELUpxN9Tf1w18rz7QWeHH5o5juqwFR3eVjVMvMKNJNgCeHG8Hok77AdZBaSNtmyxEE4RBz85",
  "key10": "4RnwFZcnKy5gKbPdwsfJuMDYwaH9eth8aEfWCqLc94syhcz1LbQTy8unjqEcY5e2rvqA8GHeHp5KHWHfPN2n9vV5",
  "key11": "sUaG4gU21z8PRezwnm4jo7mYMdErsrVpPTktG33JEYU6yREwAgCr6seiCHKshGtroJKpMncGCqmZdqeNj7Z7J2w",
  "key12": "fWoYEd8j26RrmCY8DrzDMDadivEkcK2GZBtKAqDAr8ZSgrhS9w6Zswk9DRJgKCJ1y9a6QpQ62DHYR1MJdWqtErV",
  "key13": "2ak7r4iVpasHRC7vZ8PGnetu31Aa271MvdN3yc3ppx5DoWxt9fXXK1yb2vWTn4PK9k4GVGvszvdhwPsvHpxwMaRd",
  "key14": "3G76HQJu9jPpGuYEzQdNgRho9bwGzCeSe8P4gUBi8AzAXbxZPmQQmasoHyLuaWSKaZChAUvRA8FreCNygucD8Atv",
  "key15": "Kq2Zx94nH84DEXT18aYBWAf2wKec7r6oYMPxsLVu64BiS9khCFFpkYszttiKmuJj8q3pL1ajwLbWuY9sbjVuh6a",
  "key16": "28EEpnwNqm649CQHVs1CPQExhux48d5oyjRrabatkjGovC1JS5WY3jsLqawemgsizEgSmPh5oZTeTo9W6d2kqCwX",
  "key17": "2UTJYGnZRV74N8D1zksc5tKK95dEDpi79Vmr9UG8ZJG7U4esBQv8nT56gB2C5cL8MHawWJ2CLHPxBt7FXXZYqzgQ",
  "key18": "3tZK4TT919nBbu89ASamjgWWaXgyMh2Ao59WrXhzVPKjF3sp6CaQjgAWp4G1Ns6PsgrYyaAdXg44hucb8kHP8BBB",
  "key19": "3zwuL8mDcRDxDfEzBHHG1VSpXHee815kjtdXAfQP2FN4HPrtAX3a1yyiwPcmkbmm1QBW7K4FgTRwP8uBEc9nTo2T",
  "key20": "32K9eJqWkXo3VzcnY6vSjiaHmVPGHjmJHN7718MzLgi8BwNdoEd2faByuiYHNe6BnbHn29FeFTA7av1sD4S1vru1",
  "key21": "3paM6BFxtLzZdhtSsvwNgQqwuGQ1QbtK6CBebD815DLnGeQqjUzhJDC8FGteNdTBjRNH2rY1TESA7KyLyVz2tVU7",
  "key22": "47RCwZNE1YtRKE5xG28bVvgcQyYdcyPNwQVRmVeR35kcq3va5AgkUo7Rgb6vFuBbB9fzGy1YrhUjob6WGYKmNU29",
  "key23": "4LSgenwDVyXas55dcj1Dv5xLDLafv2LbtP2X8dNxkFe8eSUzSV9CGEF8myfoiPn8bfLiWSk3BrWiWKit8nuRP36Q",
  "key24": "5XeFYyLpGiHityVr3EgYrwDhhf2uiJUPcMAHVWKrFb39Hkuqt145oBk2T5ctGKHbm9uNH7HxQXWLXBiYsvkBLfo7",
  "key25": "5n9QuCkd7U8ai88ZpHd9YFW4p4R5u6ymGowcAeCFx5M9i8KrbeX2aQxeW4GMnDh6gPdLXnV99DhtYyvV7zxWNQCL",
  "key26": "65eJqG3EUfA3kgT1yoAERQmTgNACBJywk3QrirFTnKBzYGW3MbwPCAHDWhA4SEHABJahcnMGY3LjnUCvC1QLt8bz",
  "key27": "3uEHwSqDX6ARHgnKBGK5EWz9opLA8LXYr35KE89nSSzgH7eJmXujjZX2DA3TyB7xKaF28uJCFu7D3oMAYHB1XpQh",
  "key28": "2NUxRDP4DnUoLVhCn7qeWKqGumwx8tsHUQdhWTd9TFRopDwozCpExZYDu59e1H5VsjK1zHawfVbEnuJQgZ4Gfzib",
  "key29": "5SQ4j5hPsfDwmcSzyi1u2jD8z9Cdvw9mHM7hc5zJ9g6FAHDogaM8rqBb3w4re6jMibL9Dg3U1odgBpMAbqLPiHHM",
  "key30": "5KaesEAxDLQK6P8sSZTQKMBmqeBxpeWRDYkppv2Hsfjoxc8K4WoXktGZ4csrXDKRjGy5dS5d64gQqh8NpsPkmsVW",
  "key31": "2BnsPvEBn1f8PbNUHdqBEsxqreNAAxT3fx2kgRE9ecE9abYhcsVdNFd36movZHwAaP5BKvazbzn1SeCahcPmxnTU",
  "key32": "5SXMzP4FuonjWGZeM9UjGSD8VGNszvtEPz8dhGKZhS6MKq2ZZrKSVhMsXuVj53WMQ1gDdaf6PwFYigb1EozxpDdK",
  "key33": "2oUe8T1ZVn6TD3HgiqepyZRKmXRBYTL6BHZ5qepw5CqcrBQMNjJeTty2tFLxfXqDwL2Jv4GELPoxNrgEeWdtpLPP",
  "key34": "5S2o5Me6urB1Ra6tZp8TwXP8YeafDmLRteiNWjtp9nu4Wo6sSdFqm7CWtUx3jR1aTFiKFMWKMj2oiom4X1NR2yVF",
  "key35": "44QasugeCBjGAePtttPPT8HSFJ1gwxPBHdnaAKMurNGnCVCV9C6UGWYetuRUY5VvozsZe3XeLL2jyWi3aPkUUgeG",
  "key36": "QGDLxw39xQTK5BioPHycqQFRPwM8sX19bx9g3nrcf4Xu3PFuNw9LntaK5Zy1FrggRezUfZgRpNiBQJmjURSEy9B",
  "key37": "2YtvAQWPAB54V5TdhFrz3byrfubL5pyX1Nqd99JemqW6eoKWmEecLLnybGFktfjuEcbBa5d5KodzFCrhibSocPay",
  "key38": "VA8pApysoaDK9qNnXrobRx837PjUd5x5VSRZiutAnKjdGdPpQGEb3Z5seJEHgN8Tvz7dRj9471XWVDUp6DLCkUS",
  "key39": "3VyV43ifAUjWhJfnWesc54gkCRWJwYUxUGLNzFzgt7BTuLr4g4nAnxyZPAoGe5a3KYurgpPUQVvdJKyGoaQD99HW",
  "key40": "5WiuCMWkJMsqJk9wc5B8knYtVVwzxsFLdoDYyPFuP1a1Nt3SLSmna7oekJMPeja2rf7q4emxKASEH3b9ZCNxrycp",
  "key41": "3VeuZqLdmAbCy6qedLKNdv13wQ9QXcShqBdpE2KTmPwGwZS8jSFFHgDJUZwKGgkcuSQm4Z4yLcQQBVgLyNAHP8zd"
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
