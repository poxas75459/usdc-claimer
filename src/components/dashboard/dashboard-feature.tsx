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
    "3BCmtwJeJDSwJpkaf9XqtExg6ZmMjhR9cu2fWpKTH6vJytm6MvPoxJzewmcVs4qKK24SNtg39bGFdhogXjXjzZY1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4itQdDiqRJj4x9L8budsuTwrXa7wapttC8umRfb7RDvQqdn8axe55gvePcgehSL97zG8PvaTvvz74cQWsDWjh9XA",
  "key1": "25TA5raPNMeUcdfAngqQZWavwXR8CmpZkk1jgfsBcAmbfzmEHfT9zkeytPCSt2EArqXqL375mk1PJXiERzDXf5og",
  "key2": "3NRpCUz1UcpQZY8Ajav12d7NTJNzU6PgAQmumq3wxbL1svbP6A5hM251rL5MFvSgK5mWEGL8SeS5ELm9Uv3uszSu",
  "key3": "5AqBaRBpuuXSNRd9t8Tp7MLZ1QGh8uVvaKYrDCys754jw8VhJSKYTeubURGpgrD3nGrW8Gh1euxnuhezGUxdxj4z",
  "key4": "3kyzZZEUQZz6h5VGhPFHQSyzhQVyuaGWvzCNmdrnpVoMRaJFLheVubSeSvBoqXQL26htvCMoUuibkBfjRGyWCyeb",
  "key5": "5PsobHBYjVL9fq7YaBDEqUjQP6N6uWefCMJTxxbkbZC6e6XQYframPRapfwntb4GVQgxm9QDdccQCosgPCb4bXLs",
  "key6": "4BgsY7veUcu84n4S5pqYCzzB8vBuvTBa3eUz94XRURJ5P7RpY4De5b3HMc2LtohxH2Jum3VCJZrgFiu2xa3qddMr",
  "key7": "fkdtuaPS3xc6iXjgotBsfha5jx5zveRgqwpK3X61ec5uaJtreMDbF84DBER3yrGg2syP5hUUJ3zXV7C8p6Pp2Em",
  "key8": "3UqaSi5xoXYPGEuqBbx1B3uzMPANG3SHsrmCpTseRyEiT53Xxe46BguoUtXAm5D7v51M6NXCoTv5HDodV2qBr18C",
  "key9": "2yb9rFfn6iTyTGXKeSan5pZ3v3dtyYM3SYv4KiZB6iP3tYcyaTRetmr4YmMfkTBaCZahg21DiBswzRkwGqNaMdgq",
  "key10": "UJhSnw7Qmf9LkAcps4HPqCE6XN82jYZxLEwj1RkAJZT7W4VcJHieW37dCd9QZ88HY3ybUZGPjuNGqdrwJicntqf",
  "key11": "5CG3rVWG9Atz2cKjDgXo2f9HSAameTp35TD7X44k6GKvMhzN2HvrXcf6JmTiixDFs7trtX5R13AmrqtziWjDkgGU",
  "key12": "1zjiap5mYRVEF8LSWGnxoXdAgqcjENYtk4jiAZ28qYZsuG9yidddtfbbfNi3DBwoEn2xp7cx612afqJ2bczTJJe",
  "key13": "3CDHcR7G2kLSCNJdQDHzhqvfTZPvgxK7N2P5k7jgguhnNSKTrCN26Ksf26EvfDw855Qjs76WbxVYVgVDc1RRz9uc",
  "key14": "3etP792cGxxbGrp4Fx9Et3KJsTgin1ehzCVRheg45wnWo8Q6engL6kzLS3DXMq2B3tNuNfCnBCNZoUVhdjztjPga",
  "key15": "3L5HacgRNmv5SAaSTjEnddLvnEzjEUJZGZpVtcxS6bEr5n13MFFmRibUPGdn1bHGymebPe3aYSBsWLKBhsBdX5QJ",
  "key16": "2PNutajtaei47kpjEUwtYJLg3nsR9ZokheGWk9hm2HJv7rKk9BrFzChhTankAAuMzd4HyksY5uFdkVokmcvdDDqW",
  "key17": "4APG1sscPE3YNxnjEb8YHn1o5yWyd2xKccaHoxw1vJ8dx9ttCDyGcByqGKrAFfaPjv582Sa9WoDL8dFany9MZrqB",
  "key18": "2NdixvCqTRgVo2YrVmds7P2n68qDVdAEn5aro6WTkbJ5uzJWM8ejd6CkTHXfGEFWcbg6SRyUyxsvm5LtBiizsfvC",
  "key19": "2SovnRb36MJSyC4YuY2PqYUcBEmDDXpWr9pjKtSfAWbotip65om527KuSaf9jqxHkkZFhByAsqnixaR38jQqSYxb",
  "key20": "66KFJgazAZB3yNCZVv94CAuMXYcen3X3QCd6ob11749KGcuBJh2fPsDph5wcAE1s98ttZ3EyDyGcpfrBGiVnqLhV",
  "key21": "27LmWtvEXRKW16Lbhho4xbqMpfsCKdaGpUN5aynRkK4ebkbVJUD6q6QPAbd9wMJt6a3SeKRuLyEuds1aX9xky6Cq",
  "key22": "2n6ckJyiNHg7pGmy38yd9qWi78TNF8iErVNgENMZKWwJfg7TAfPr55M98EUUq9XfTK4UeDvhbmNrHcGBxKWG1YXb",
  "key23": "KeFYCmQPaKx7qapxxUiVSxPZCVZFTb9PBvfvjR1Rs7F5tWjKEdwCTuDd78ZrMDmEJjAt9P1hCBDdamrbtbGNyVV",
  "key24": "2T3BSdu8HdMGNeWAyBZSrBRowwNYXvN55u2ovGWFQDxjiVFnb6NyAigpcsTbcWdtAYaqHPr2HeuNdpwRgkc1eJRY",
  "key25": "3oTAWoCK2dXoMRpiEMS8UuaszVJewFHj3pAfCb1muA6aXxWu2Na8yJJjVncUQroLPpPWo42rMraRUpCdbWTkSqMP",
  "key26": "3HMaoXfCpbVbAYLqRkS2nfqM6FYWuHMHuLzkCPWZ8166E553rooaxMz6kwfMSEN3h8PvzRS2eG4VzQL3W5AoW3dj",
  "key27": "4FoFpCkJcjQL56k6kThVyYGEpz9e5vKJRwqvwAzNwUAKarFjMkd43goZQRAs57WeCmDepLvVwGWbs1F8kcTPHmDs",
  "key28": "34Y4qSFDDgBbGMoFVt8FzMRc54UREqoTt1haQAWCd8XhvSK9HkWQwhvoUnBs6jekmvxtszSskbh777bC24jWuqmS",
  "key29": "5H2uwDCRoNvk1oXbfUBTjoGJ18KeYDLWqnL2y4j5NF66iChCvJZ3SFAL72Ev7hH4nefTpWMc5KCp2G7vxvcup2dY",
  "key30": "2RQEj9gK67EUQFQMKUqDUZ27vijx3XwAb1qpKDPG6TqGc1QGR3PVy2Z6uUsiVn6v8jjAEif2pT1eTSGvdhHB6vBp",
  "key31": "2556YMyrzuoYysai2W9YFM1ypCudk3FWZXAYYhCAdFyLdR9ieGFPk3zJq6k3hL49qQuhFHttvhRqZ3ihJrKLVYK1",
  "key32": "432tW3yvK4V4gModitQM5s5XTwwQ8doTHKvr2MbCm4vZzph8zo6jXFwAVbaajBAkw7Gk6UD3sp5tS3AE93v2bpKb",
  "key33": "3pVnL2YstWEMTcMuh8etZTqkogzYbLKktgdW8qzELfh2ewkK2XuMt355YhdXuGKdMioj4hnmBEYbQYfjS6CSsa6W",
  "key34": "mjnfpw9QLmrxpwzUnZK4jfTg1gD3EpiHrNN4bdLXgtqxNPQ7THmARVri2NeDyXZgFPZAF1J38UZHmd2bxKW67eG",
  "key35": "3MqaFyxSNGTbd1W5tQKXrPsXF35DpgzhcKTFTLHo6r4UjLSfmJSvGSyxqUYsmoF8vx8VvVNaprvRYSVLnQ62PhjJ",
  "key36": "4FGcKsjtowLQsFcQ6jX6iwnR7dZEDbcGa7yJRndMts7A9Tuvd9ijXZBoq5XzFMEDCVKwtTG9aYLSr9dFb6eRyJx5",
  "key37": "3LoLhtB4BEsp8kuPeRuXh5eAe92YHLKFQdzEGnSw2c7uaisPxBpBNr97bB6CJpoYUrRXYmougKt32mKedsUCbUkM",
  "key38": "56cnyUfTst3KikBDKch8iAtF7TBx67PRjuP7BEX7W5wFCdHByUYAxaFki57bQm77hyHFNnLYeUdCinsWVpkuG8ki",
  "key39": "Mw32EgmnAuLVnXNyXKgqCD3VaLM24ZduvT7GQCGqzUCuf6ZZv2nqdi2miXZZ2epkTcordXo7jVHvUvkhiB4eNec",
  "key40": "2wRkKqf9G2hWtmnB1Pqx6aXhWWRgpvAxiERezFuEB1N3UTbzubNBhMxaAgkmM4knjpDdZzKsjZpwoVH49sBdJgzz",
  "key41": "kh92pFo4v524Lq5bLCLjXUoXKeVhQUYjPW6KxXJycv5D4ncGAW7Qr5MVsbYHVe6WXjkN3b9vEBb1Lvc6adVhnt9",
  "key42": "gnGHkjJQuGJAuGL3N2Chw2groWeJ1skNLHWTxqi1Us93uaNCJFR6SMdD7BZxdnuAQsHEhUCy1QSPSV81ZMhwoz5",
  "key43": "3WEUeUYZy8QdvvsM58nQtKrWno7LuLZok2ogRuLSgseik96MrN49j2P59Wury5sHnoCKKbQTMYGkDCQ5ERt691Wj",
  "key44": "TRc3m5V3GgkD8PUozfvciXvBg6TSBxSpAdfCzAWhhtFkKnZ7ump868yU3vC5XsFiM5DHV2x8x5diMMh11g4BCcF",
  "key45": "4XhYqwqtpkxEEUJ7dYKoa9sFQy7byiiYKrmDDsb4Bk3sUBXX8HMPrc4XDbLvZWzk6bi2KgS1fMzddx3MZyHg3J5R",
  "key46": "4SBZt6DmE3XJVsowYGfqhHeFDSg3NTGu8YPVB9h6A5nfg3S2wP5icrXERKjsNauYY3bG7sC6qppaMPp4J5ULUexj",
  "key47": "2tCPMKKS6TPr7u6qKLsSRDZZhz1ueGPKwD4Q4tRNW6ENnCBYAGRVQJv8bh6tr2ZgtUU7YVMXttpxetnSiw4Ld83B"
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
