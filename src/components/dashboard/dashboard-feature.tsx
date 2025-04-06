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
    "3LJkUgxq81D7CFvWXgLi3CStmLsv99MrPqQgs55Fskfyx24vCdY7iuXQwedh8KDttLDtTzak6GaqZbWt6KKJsfg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KXDBSM81ZKqWQ8mNyHJ938YTwm8usSMBCFZJ4c6nmR3eMisGeXkUjQp8TVwK1pWGyqwAARqUXv2ehHSa199f448",
  "key1": "xQtpURWMqDVPaxx9chma14zEUJnZysLHR6gMwXfvzGSPB3N2RyUjo8aycdRroa73vvSJWDVbUVFo8XyCQJm4N5o",
  "key2": "5TTwfcW5vBRPnyHLEQd3fCfzqusbNwbw8jotbrSQmHzmtmVJspH3eiTHToVKo4Ke1VM3VJ8p58SJ9pAGCiEpKVw6",
  "key3": "4Pmicj5NEbpuWqFF2VNBqF5YzduXZQeqce3DL4dxZaUWSVaqqDZzf3uVX2h4aQGfEMyiYaLtKnLqFttGhDHu2B79",
  "key4": "4DZdpV954JcKN6enfYQtqr1N3VovJsTjJspM86rKrRjbDBGbYrut3WqbLPvtAgN7uSq4wTL8bW6YdzZxYttbeFZ7",
  "key5": "4ZLcjGxvikb75zU3MMq5Lvv45s3BbfvVGbk3d5k7DeYGsXVUgWsJP4Vczoi6V7uSDLK2iRTKMf2CqTviqeR9tRyj",
  "key6": "5J6PvP3AhmEq9vVHrpvajWkFHh98HWgYdgPUt3mDGLXcL7MsTbYqUWbufqHaxM61SBAqVWQHh9Tk5X9sw5rqitB3",
  "key7": "5mEA5xKJJWzYuf6MpFX6HNP7bd5BntLtFd2Rn8mvPsqcawMHhpheJDq5roaeS5pBVymohUJ9gBdX4iXrA4gZr1pZ",
  "key8": "3W6CwVKTpMktHpdSdNuD2bYn4ix3X3cYCJ8aUWP5nPR5RG195nyb2p9x3vpk5m52FvbDwA18uQaB6uYKFJ3Z54bJ",
  "key9": "524mZkoExymjKzk5weNbCUrdYbWjuai9cqeCEHLVjyX7ouGTzY51dh7rGc5qACDCJtmBUm1gfMCYk54PZLXLPSni",
  "key10": "22zTfytZs3YSgV9zmM5c1eRHDMecGmFRQBjesnYCqneR9PGNoLzmft6z2hbyTVPnXiM1uicj9U9spMLRtz6Jb4qj",
  "key11": "21MxD4z3UPMghgfBBrERDMYDP7H3L8SUJtLcXNZAxe3gQS4h9xo2dxSU6r3pbtnBLxQhgvJfayhysbtvA38huupN",
  "key12": "3iVfb1k5tL4iq7caec2Au13P5yUaa8zgM3Hr67QvLA8dJTtg2NQn4qbAQLSYohCfdvrAmiTN2aTXbi6Hq4vHW5NF",
  "key13": "3K34XMC1KRArXvwwYVyUrV5U45tXZA238F8LzszZ1N1C9ruiYwEb5NAcYYxt59RYgqo1XwHTkPuqmNgurQmyy88Y",
  "key14": "52DbzHTkzk5WRzRj89GCxA8X6GmQkpRmuPUNPByaMm8xE4CJwZdb4jEPefnfnR2RjPMHSEhmBC2UfWxAMYntkx2e",
  "key15": "38XT5y7GMbYKjJAScKFmAViivzZwdiAqJCVzh3wHm5mkucjHATyvkm5NnEN4aZnXXgJRv3ESR2z597FojBvvVrVu",
  "key16": "ZryoUoHJUfiPWbuiZZ7b9dCu15Y9VcbP588acbLz15oUCW1Aq6PtbpqJ89tvLEJNuyhMeVMEp8EHupnhc3zvUKM",
  "key17": "2tFVXjbnpPZp7Zc1mNsut7jacyQhWpuEqHe9iSH4gijJtXMg9pgSrAoFyT6LX5f7fgRcCMpWCjjY1Hov3RQtCbyC",
  "key18": "3pmPWZ3ZBPbEtV9G2fDS1sMdTXEgsfNEALKZS25VZhhw7ZXLYyoL3GNUDVLXauKvgNkiq2LSwHWJH2zmPc1YyWRR",
  "key19": "34QDVUKNHxpeLARZZQwis7q9Zfe9K5BzUu9QVbgSfPmw8kXQZS4Tb7RjAcsovAhRcFnfkMSEoEjAmGssSL64znAr",
  "key20": "5bDvcfN6Peuj8ZQZ6izP4Zbqmd7AdYAs5WvCs1Kz9b9VyHzD828XFKFkUWfHHey6ujnNLzGKo3SDEWmeMVqMgS2Z",
  "key21": "soGtf8sgSzcXQxtXt7XPbKPupcTvZYc3qLTjGw5JvBV5sUuVj2stfd1e7LVp7SuFh7S89aUsaDKy7kFVA2BR19d",
  "key22": "5YBQzgiem9vySt9RrYX9JdfVfhmAYn936qo4jBAA39tgBj1d4htaCNibLDxpRJfDnAvZMyEit8jdj7iEheVbrUZX",
  "key23": "5Db6yMxXKXLBqj3AezHLXgnSg53rBFmHAdxtu1DCHeq59E7H8LkpzjGMghczgDgqZ1FdjE3fDF4LhanjqU7NHiv2",
  "key24": "5vrqTtCZaWVqP68erET7SKzwwGronfTmZ5pLPSAooUtjqRgJAzvmtKMf8de6hdgUwaJ9Gambbch3NaiSgcB3sabC",
  "key25": "3xA1LTJhiyXH9btvvyCVqy4EqrNcHBuqi6hFgfLHfJXczJrahchUrHPkNwno2gmhN5xjefUQJtSCr4BurmMReFXQ",
  "key26": "31tVCkyXbHRG5poUauzHseA5Bg7KTyAFwqnE88mybujFWwGhgLSe8gpLkhjcqwYG8hBC5quEvLwBCxhnPoVkrngZ",
  "key27": "2P3njYWUgbt1RF1jNdg3rWRqQr96MiJ2puciwfnucPLjWwU2n83veMbcH4RnwP8KtsswzxzcWANZZYkkQqUdYw6V",
  "key28": "3GQjRQH4A91ewNuyjcbCQQriaExBzuvi9J5nKU4U3qUtBYyJCiGqHv9wzoT3P7wzmXj6YK8tEWBHUAmyYFfRAPJZ",
  "key29": "axdGcUNXvPhLXtrzoskDrNaVrc49LdYcQQwedfbCFoprSPpCUKLiBLGEbk7r2kLeDaXgm38NMiBkSMDTJKWMyKL",
  "key30": "5QcWbP8Br6g9T7x5xJPj32tnqDVdv8cZKBjcRueAbwXTTZSjnY2NLbgfw8q2g375Ng6q5QunZmxnTsn1GJa6v8pq",
  "key31": "4i8c8QPuE9hAPaCz5NwFGQAvmVjEoUUY3dAzktqDZ449V4iZpxU1CWm34atFT58MntcN8V17AcbebG4rQr6X9kaS",
  "key32": "3WGQzoWA5VZ2oQNxfbUUV3Wa4KafRq4Q7wYyR3MQGgPcojoxrzYLeW6aztMYtypuHHMKpjZEhfqJUYhzDDh7og5R",
  "key33": "5ERtkvbXmGVqRus8XycSwh8G1GyvnYYJ88stpYi4Z6am3qYXxiEP2TjSn2WWn3V5zDEzvzhBUSDWGoNQx7RM4Fna",
  "key34": "D9CWRq3YnjaLVEESkWt5Kq2YcyHrSCdTHUr3GJddVwnneRsDTQrT2K3WU4ckoVec9jVVYJ7zopoRAE96SP5pDFK",
  "key35": "5bjzhCx57RDXBdhqkkXW14vez3L4BKz1dGQgda9rVPNBA9h8W7bntdC2LiFNtsQWAbLN9FfenZe1Bba3KC7zyzfw",
  "key36": "4Zpis7UsiY9zKqDWtFzPgj3726YkmS6NrgZoMdfNNAspRnB2tzs32zasxHxM8mzV19DeRZhjjGXXkeGJzi6doJQB",
  "key37": "2fRKZXDmUt1XRb1nbC7QtR8haFfqZftQqJmiV4jwUD2xXzujQ6HwVoasng3zPG6egPjru1pJLJ5zUwt7KgbVpQpT",
  "key38": "66ooVkn2GoKUpYdQLFmPc72vbWbhLwQMtfWJx6eCGGKLmPKRuDVCcTzPQCHKwSVgua2636HEzjmYfkFzbUcrSui6"
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
