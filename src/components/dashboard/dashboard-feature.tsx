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
    "3QQ9z9DgwU9KUHXAJ6Nxre1TVDHUyiBvrJqg9rK8AYSvADhmvjCQUGH2yQrnaJs9ah55HVGLLJtcrec5Byycb5CM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3E7ALHz7LfrcwBesLFnSiHStBr1wUjR58D4DvnZaNcHxBMdQgZ8CyLWJyyykoqpTjByvPafg7UEcMAT65dKNX5Kw",
  "key1": "5GcBsuHnzEdEWDjHyD5fkZ4Hw7SpqkGGucRGqYB2rU9HFHME4xmsLNoyxCv8fBuXze74erDndSrV8ErFmo9cNa9g",
  "key2": "23pxNZbEXnLxWfeyMyWqpyhkdQWgkukd3wjbYhpkt7TEZA3e9Dr7NWJqMsAg7k5GwfhPH7UVdYP99wemu5KrPypS",
  "key3": "31gLv2udUWXgDUozfFw77FKnfYUDG8weqJG3uzLB3aq6BGrB7Cg4UJcFJmgx4jeFMnSAEqZmBtjfs8hp7vttJ2HL",
  "key4": "NWwfyZUyfVfLTqvREw5H5ELE47x3uDXLdmvre2qtv2g2B6gXicdQUMn6JM4RLqZP8mat14cxwVC6RrYxUNd2U1A",
  "key5": "67quUehheezJ8jPP2PAoejgA4gQARv1rNVdmUJJkkuwNhsmZJhzFLjAtgYNtVTc7qgo9R3ywqaACsvnaFEUEetwQ",
  "key6": "2GMNUz1oKvQsm1tBJPmEFb1tHd4acCpiifXCVtuuErSsBmHQMbjRJQqV1aKb7DcvVreqFMk5WjfQUwkVc5Pk8yJU",
  "key7": "53XqqcQUCxKZj3sH9oofrjQakA47AAiGcBzABVqk8y4PqhbirGrWL8ibsfafu5JDDewSCByWrM3JSmCkPnVd1bF",
  "key8": "34FCVwpuYeNaMG9PuLFqysmFESDNyEEmDPPvbQno1nHrBaSRSZqFmSTCyvg2QBDHgma52ErVJ3x5GFnYYN82JVyG",
  "key9": "3mrDwnMfFmyGuKPioZaGZcHc49hfJiqfAZTMmyAcmRkpuV76pEKmvZcPXMmroZGuzvgfTLH5xqxvCZ5Egt8kh1QR",
  "key10": "F9vuZ9JZ85CaDwYn4VQAVRAqDbfop2L4VpxjuRccuXcaK7NQcj2MAnaRPm3cJpnDmV4eNn4PfX3EJeorYncfePa",
  "key11": "64yZrAJQTZBeDsFviHotTyYECQ8fY4qfv7ixW3g9BYa2yZp13XYLQS5uHyB1fgExzzLQQtfGnJJZDwq116v9LSyH",
  "key12": "4z23wnCSCj5p1jzE5MmHfvqTM2wszeJu1qMQmFUXEiwz99PzPzbHkH3Pn9SVnkgtP8LZdij9kfms4kMA4Uxj4Vx1",
  "key13": "2vgGBz77TJjn74YHT4rQ2s3QhMgbpcfKkMFJVc4UWmAVZ4bgywX5wN9K4n9P1mo1idi16ZKmL1k7MDLPpMp1KHTY",
  "key14": "2axWEeLqTP4zhJqGGXG2S9RTN24He67qEMbhwbPfGnKJM85Q45RWjPpQFvuvrbiBz7wLqLJ9rikKkxp98wusYP7w",
  "key15": "3HKn6TWSMhwmQZrBK35s5wShyxiKZpHTaU6YCzGTvov6PGqBt316kFWPEw1i6jHYpRiP4b9jc1urhhtq9nf7BDBs",
  "key16": "2efpkzvPjFn1dADKTDpKRH6Mtufd6YE6B8sAfjdP5LauESkPVTTHvEnRZh3XxWivyR21px6Sm6rVidGZ7ZfSAecc",
  "key17": "55hxZ8Evr83kwkw2Zgg9SnUbqkAZkYbxdEfMwnctzw6A7egM9any9jyUKXyxDBojR3oD8fhTYZTmWKMRowcpDN8U",
  "key18": "5yLWeqNdxrfCAzujq5kz91U7iExddne3ACyzoNDijZMRPCtteXijJxQaWALAt64UNq8jKK4ooFW7G7SoWACCPiwE",
  "key19": "VVmx2Sqy63WJh2h1cY76Sya41kVU4vtqGFRyEyD7F8ESnXwS4FRK2LGt6gNxmgRz6kVD8Vnf2TLzUi4CAa75jY7",
  "key20": "4mKu8Cxq9FnDmr2gi896ksyeC2WteXRGyyyxQnAQ6KBYpS4XGwC4pyY75FaciLbAFbN7XZCodNVgRVx23KawL1HP",
  "key21": "joHvnL9vTHVw5B1WULJ1zGodqt6comcsk67oyqckwhPJzYgnGw5VfENKDYg5v3YrphDC9PdpRxd7KbiJAhFdmGU",
  "key22": "4uP4t7hMC6Tyoo6TRQtaPCLSBwaowuRSSB2Z3fyRY8GsgJrsTTdnCDqoWp4FbztdhCAzxC2jQ3Jy4FuyLY7wJ31Q",
  "key23": "dMyJ3VYtxNPa4irhuXL71mu99VPcLAYSdhwbMqAB6h5QDMhTiYu1RwgFBbJiVoZHzwaLxhAsiuQ9vT2VCJuz1Ep",
  "key24": "5Z5ayaYfebfFR6dRa2rTdKvcnTM6XBPQKSobUBmJvYHcBapCFdidRc8dkiTaDCrQSZEAoiUFrrY6ETRDbhN1FKkr",
  "key25": "34hdWqBRFvzpDT7j25DCjbLyt5gq6iawbsQYp5JafgaHXfwcjv8WqbJhmvZ7yXFFGGoRB7tTRUzt4dEkkfw96kqp",
  "key26": "sEcPAsr9L8yBYVgrv3KDkgUCjVUQYqwBc8fqiDH1eiXYoknx6nwtySff9bJ2CZEJkRm8hbDQHsAzhmS51JAFGVw",
  "key27": "4WgAmEfkuiz1PZ61pbeBZPwN4BUseUFXWcWrXMVDXK4k5YiEWnyVX2h91w9US2shaH7QBs7SX9FxNPmsdwBxxwTm",
  "key28": "5KM32UQTGLDqf3BAxAarcsPKrkDgULwfzEc8vvj9PH8MAAsTz5WFSoD1Vy8qMouaJh4QYaVnd65sFgPwMHSVWVqg",
  "key29": "5ztRamPJY4e3icLTck1tNBB47j3vjCbZ4nRyo5UQzC2cxqYd1rNudtFocMzDjoz8NqUS5zYj4bdQUGbSZNiAqtAb",
  "key30": "2RenSsD2kHzt5Vb5kF2DaAhb2fjUqjmmKAJFFDvKah4ktk44ReMbWKGGw7eXoSrm9XxY74G9LQBpLYK5T7R5omNu",
  "key31": "5NKW4LREJALsjSc5cCh2hqgj6mJgsAaUp4nx6QAQKtUSRomuRKHHHKzbT3uqvTATe8uf18Sk7Y9fgA8mYGhktY4S",
  "key32": "5w58dL59kiwiizkbeFVTHXSrBajbtrgTyWnJsiaCQyAK68aC8eU98xHhofvXeBX5uBLXAHFsZXDm63AX1eHpbSyY",
  "key33": "4NppasMnGRi2ZGZHBGsJ439oxCkWzd62J7ud1hiaRo483Vw79RkuuMeSyAU6Vrw1hakLFF6yt5nwUKo4kT1Y6tc3",
  "key34": "3C5TeGiobW4MK4Jjx5PZYx5b2MwPgoV3UbEgjSbS8eRmAQvo3k1QfSi4VtU2qztj7hR7kgNBKg2WweAzzFp4HMiM",
  "key35": "5FwKZLatDjWop29TWbNPzArASDWvLb9cpTCpgnjW1xtueXRsTtZbyPPdNs5K851HJxXYoHwQtMzcvRCZCXf19gzA",
  "key36": "4wgSK8uTSHGX8zn4SX7XPphYJRyswjxWci6w8pxCQyLNKHBwqycRDTbaDbvD95QGnmdBK4rp52QbbZ9MLm4TwKMF",
  "key37": "3zwq7DgcZGiwc1QqpiGC4tFVohQMeYVUgBeGsTGokFvi7moFvN73qV99yDrLYJ8KiTYkKmkjMzzXCpbsofsVqawo",
  "key38": "5v6xJ1opoEELknEPmbu6qmxa9ez46ZpykhyFR2rVYgWwR4jZJPPvbA8aTLZvPm51o9JdsxXc5p3sF7qGCUjZ6oiK",
  "key39": "CMDNypQVjEMwqk2Ntyyoor8EUrtEFnMB671QjnwaMDDPrnUYAThre3amD9WV3M7F59XjpDcWr1Mc1ecosruEe2o",
  "key40": "5riNowFQ5YZ5ngW8zFqAzyYfz5oXaRA2jRANeBf1caj4cykHp83EyftxrRK9fmcUe9bKNhFqGAGp5FmeoxLJeDAT",
  "key41": "34SgnArDvUQJt66EL6aFZzxHPD7PDYWF5keJYkf2Raqzg1G1jEoRB4FraudBrBs9mte4DYxRp4rHYHRhRoaKcMat",
  "key42": "5StGKzPFVrLUNUsMJ92PMGY1RxGLSze2YQVgVs39gUEhgcBufKphNYHAvVsuR66EHiuzKmDDaSwKkLPRa8Fu6Rki",
  "key43": "WsSyqDPSrDyCHstwRw2sG96PETKsWwqMHXcVZj61XBCS5xkpoHYdX2c4bGHNTPxyZRoyckX6uGTuSdBzThkEA34",
  "key44": "3LjtpHWCtVnw25WAWhqn3FjQRTq7cx1FCt67jEoyBJ847c3EymeQK4d22hxgdCcUwTM3Hfw3Y48z6NjrYUaAurKb"
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
