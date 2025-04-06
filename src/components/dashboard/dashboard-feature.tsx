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
    "4yr5Bf9a6Ef1LakRw3cmui9eV2TCyguEGbLoHMeogZAgpTwgTSVTJRJDpL98bWyXbspbCrsnuSyGHxVihmi7Udkx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NgRq1GmMHjM8wcdiZeu48pnEHwzjMeMndw2zU37oTAHquJrcnCBjVPRBHQg59zKKtpT88LUgsk26wVZD8nRgsET",
  "key1": "3j1P7MYiYLB8BRUNDFMhuUyYTjZSYfHiVN9DfzT4Un1i9FaF6N444yNm1EeJNw9ca3j99JRgdStMXCsC3hnquYHf",
  "key2": "XhercsxeeMLCydBiCszb4MTuZFmm79h3dwCvSypzswwnLUwYxNGNgDouZxehFYyTcTaNZcviWuphYoWQwZ56vGu",
  "key3": "4wCtZJmnrwanXjRybA13xV64sTAmdrXaTP9p3EG6wfDNZyPmFaDPp8eafZs73Q5rqSCc1udkteDw6wsD61yz6xQs",
  "key4": "5b35oQ8oPcNjoYzyTymqy8DA1HErmT7JF29Ey7UYn9WtS924ViiDudDYjmHzUAr385BBM764gbbNtDRb11xF8hDW",
  "key5": "2519fRkSCnGMaDmKGBGFjxXs2N9p4Zsx8UERKLV3S9r6uYh2oMM8Vwusx8JqPaokTggNyuiZQ27VkaJ9GK77amwe",
  "key6": "5Lrkb3ZVd8M341yTXYqHTChWcXKfSPZFPBoEddU9NLqVYS5amX2Nj6A8WdGgo3NZdVBdgzjzsUTDfTBJcDs8PsLq",
  "key7": "2fUeGrQWgzgWeT1UjKMaKhUAydcs1F1wacAEyd8Zz268Gnaut1WTV2cPShfVPJUK1bACw5zXZuvfsxXyd2AwFpXb",
  "key8": "4PzxRWq3KyyGHgQrrYsTxKNho2STqwYvKQ5P7Wmvdh3s5N2aUgFGpyXomBBzfDjrn5T2B5BJ5qF2yAoa8PzfETZx",
  "key9": "3v5i8ksAXbgCdS4kVKQ4MBqz4Z5aKe7mtKrdmNvCdkpVpZhCdFXYA8ggqSoYNa6uaCdKubCnDfE9kiDu4HbNre4w",
  "key10": "2mWio7DJHAW5VdBxL9imp7s5buD7z7aR6sdJdyLQPxWW2wfANaGRvBbNfW4RfNJ36f5adE7LtvXHdxVvCt3ZEzcv",
  "key11": "5A3DENQnuphYSWuizHyD8wnqNeHY6ZeYDJSB3wZfZ1sQaYLjAekUf6zPB2iED3v6LaoNFqD28MpxgEf4TJCGuWyU",
  "key12": "452iw6vqPfNw5c6w3Me1HaE1gQTL2ehMyKoe4tqte3rubdwTgR2LyGNUextPFbw5TBq8XqMwDCVYoh5kry9mEo2L",
  "key13": "36BCozz9JCvQVjk8wZeC3edebehtjaLk5amRropsYbB5Vz3HEjyxciqsPGzGTi8AWk8LKmJW5RKAFwdjCMRnCCwd",
  "key14": "4C19hkYQ9y5tUfxCm9meZ4fftwDkXu2RhEX9m2YJQj41CQJFPCsw99DRT9Jdiz4S6W68EkmeySKysZ83YjE1uJrA",
  "key15": "3jy49xqUeN7dTW2KxSqiABKooPw15bDJpM3Z59YXTP8N9mgAAT45JneTVt4RQKQxJ1Jw6wmfMTVUBB7LZqgq77fs",
  "key16": "5sjoFUz1o51B3MBhnejC6LYZ8oMX9X2SGU7rwo8Lpmn3zc2SxU22v2VhxvBRy13xu7THZ84ADJRXQ2s1LUA9eFhP",
  "key17": "5Y7zzghHuBwAmcgX5hTgJRh21cLVYbFyfVcw8Ru7YLK55AyKZ6vP587yFzruTywTDfECXwsqk4gkZ9VHqchQG5Pw",
  "key18": "3XWyJYw5fDqHZWctSXSMwwPF6z19WpR4pFVm8ojWLmEPVtsNeSzPRJ9BJzrPCc92eEX9eVxLCEu7kgg6oiYdrVZ9",
  "key19": "YdKdb8C3PLhB2qGugLBduKMovw8ii7RDDsTt6xGARg2XF6PUDAxdwhVCQsM6EpehMcEKd4PiHNgQ6fuFCmR6ym2",
  "key20": "t1WQA7LAss5SPaTsKafam1RvdaXvKaCr5owc3ZX8yXrKyHNt6GsfYV3iRdi3aBp6q2H8DuxfsnuWq9Cd5E1T1Cd",
  "key21": "hrqsnPh9zamcvRiKWa4XnoEHbg1mMvg86xtjSV5bfePd6G3USZghiXBnLk2wgmPSqg28sEWeVXHCkXYSsgPsyMY",
  "key22": "3h7UQ4ecBAQPuw9EFAYTjb8G3LMiH98BdLrDWdAdFjwKBFabHnVg3s7AynE3dRsAcquj6e2e3PWQ1dQy8TM5UCiw",
  "key23": "2jVdWmy7jwY1MwptBHwepcC2SNeMoXsE1srqyc5c5TJZC4ACV7bEidu5w8DrPfjzxD6mNELKeCm8J5VJquzSK2V5",
  "key24": "5tVe2Qnn3EeNqgUz5vzcoT81EG6bjFHPh2JLoBZquU8fyGqAGfzGcNumQdHxTVm5t6u7s3T3oPwrFspvjDozwd7s",
  "key25": "3SEaPHpTmJPD7CQVr4sduc7EivXcVFoFPBDCHgJrBruJRfjXzKJ3XykkKVVEfFmAkj4XTgYWFfSZJ5VvUicd5jzE",
  "key26": "hMSwb1HVztF6VtFDEkaRDkLVK6HK3QzfRdCFSB1yc1KvhwjijuewXQRJJxyAfP4U8mtE7LNMAqGpAP1oEBXiUEj",
  "key27": "4cvaNJijPCGSDxMhMVtPV19LRQzWQiAm2kDpgqE71DBFDBJRc751Yow5AxgqQmxLYeJii15yaLMsi4xKuaNcdu3u",
  "key28": "A1M4jbbrAWAx36YFmWNrcNhgv4DD1xBPCq5wD7u3fDaaWV6AhLACHzpGfLzV2VnzBjVRJGKRFEc9BPXTb7N8GHo",
  "key29": "3dL97KS5iEkh9ZEdqASWMpGQu4PnfcmZgBAGCr19xPPthJRPXbENSfnkS6W9pYYqkx5Kr1wpbbirqXU7GKMzVHKy",
  "key30": "38xMKk6Sa6p9Xy1QbNzfWZ1uPHAeLEKwttud2po9xVa7UgraKZnve4RABTVbVwQxXbr1KAyqbHhGNZr2L52sP7Mg",
  "key31": "35nqpAFSRvp66ZeoXLorQZt36V9FzjEiDTSqVXjP16zTujekL4J23RPQ6Nz8MjqK1YKbYhnLJ1DoQKQmeBZ2Qamr",
  "key32": "4eHBLWLeA3mFNz5x8nRVMUS2uUq2XEft5xvsa7RwVXG2m4qdmDxnsRYC2D1mFkYeXEzMWmRCP2M8x4E4HbaDLEwC",
  "key33": "2p2bVnwhXv8z9kXvFDtw9en8YFyHBphEYc95RMgLuzgSzgdRvLRr69iCZqBXDhNq3nWTeq7CQRX8RfqzsmiAeobM",
  "key34": "w3owWBPjLitkGpHxpSTKnJzp4Y6FJBzmDERHodbuCjNZ8jb1gFMtf6YWhTUVSXkchEgrm7Zreu4EckX1wgEdXaA",
  "key35": "2wtCkrYjAgREbVhvJmi94T3Y3UtVzWj4zYpSbiUHcYtaDFvtqB97mW1jKvGxzt54zT3BSD2qN8NdVucnLsDUnHUj",
  "key36": "4H8QSk2zQjW3jZFtjKb6zuevqSgK9B9ZPDJ6N5T4SUnc85Uoa8Zx7ei6gHBGhDgkNxnb6yTSFkefXRzqa4SvWmaJ",
  "key37": "3uZ863fFQzKc1BbjK5HedGEUTJzziv73xeF3baPMQ6VN8aig8nMcnJzVL3jzpWqVpQCvMEZGB9ov5t99Py3A3Tvs",
  "key38": "53bR7i4oykugGvBLyH8NswaVfGntCsRp8yBMT1DkgPive97jEs7tYSP2xxKKav9GRdTUskVoZD3LhaTMgPapaimg",
  "key39": "27UMWZ66hy1rpr7mnbLiGsx2pjSjfpzJ3DasTvkPMbxZGGgd9ccRxfuPLQmqjvRYQ3grX313HHnbuiDDGEZa1iCR",
  "key40": "5DvAW6ZEUgsVEAJDTpHc7x5FMC54Y49pabao4NM6uZC5Y2iycaGV6YMfVPJHLYNCxv1qmsV9A2sT4s1F1s1cptqF",
  "key41": "nvgoRTBXjDR8uU9mTJCbpqiztcBgQLCt3EmoJwzx7UU6uB2d3CndNDhePaLnSirpRoWzruRbenhywx97mLwWB1a",
  "key42": "o9uV72cLMw49maudN9ZzBkNvEr5Wgs75RDaoEzLHVC7GDfPsj66uZgGZ4i72ZsyqQWp2fJZDGfYhi7yEFn7EFBy",
  "key43": "2uEtyN2w4aeV6hE6hb9WuoHvM2TQCa2oTFpSMNLuKhRgQrJVnMqvv7Uwqiv5t2dricZZa4No377Mj3e8YmoVA5jB",
  "key44": "34jDrT5DoKgP6tyXP7BdSTBDesAZWFqVGawdjfEqqDLsTz5aTPfFPgnTZoq7DnGfmho6VfwyBARwWkSpxUsXXjet",
  "key45": "Ts8G6ygBBgpYGpjY6ocj2f69KwwoGYwrpxyk98xo1UgMn4j55xHueqBkkYoSHhWupNxWbnE6GzsWQYLNCdev46X",
  "key46": "5sjNF5msn3xJttBuUvNM5irsTULcLmNoopZ1L9n6k8NskEmD2xRAFL3GSsWH8yrERohzEaXJuBzha9HEPcF3KZoK",
  "key47": "5LQ8DcpHqFo5Jnz6iB8UWcpQJBqjL4m3ec9r9vPhv26C7rUdsKtYEj8AaXQbEMvgw7pJ48xUTPEzoyDBajZ7Z23A",
  "key48": "vG7J1w8UooFGco7sp6PA3pq4KqZL5KGqEMDSDvqytzQNESp2mZAnzZG7o78K7XGSPqGTAq3EZz2gJ3QA8SShCgp"
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
