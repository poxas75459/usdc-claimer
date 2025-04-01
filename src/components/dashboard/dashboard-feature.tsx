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
    "5CJJ8p4ENiKQhFEjERHeux5dREQ9HLC3qTHc9Jnrn8U3MNDUF3bfuyok1RwAX5JEYcD5vDPUZoePURjSPeJqsmSc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BJjUfaaoNt4xc5wbsgsJGPdTCd6krjJeaC78jXKra47CEKJDEy4V5mDC4HpxUEfndBz4CausvBvhGeV35UzHLMg",
  "key1": "2euepdNhCeoeah8J1KqaCtJVBWHiTHH98JLwZyGe5UvjK8L5pFHx5FGb6bCht6kiVcBen5huX4JJiyZUPiA9q4jw",
  "key2": "3PNYsYVUMdpRnoUGFfhkpYerubUCw68iS3zGk7yvrDsbTmwAQCmAxMLsTuKMk4Bizmhs7d2qTkLQ9idxtcSeJAtT",
  "key3": "4hXWfb5URPHt1txeMKyDReNUXnXTr5HvSMnXZpggYj1ZcVvQMHKqYgm3FazfbkCFuAMTcZUKqfMmjVrxZrYmKTM7",
  "key4": "q4wG5HCsRPLpeZsWTirYqAYL1vsfDj96MDkvNtoWfP2HPP4ZkyYYK7suASQ2WVYbRtVkcT3h6p1nogL5kNT1Xfa",
  "key5": "hVhW952AfT54ceMeb3EkSVkJood4buJKhJuLD3vpd9DAstT6MdWmM7HFZCs9jJTEwaHb9nW7Nbkqw9zWJy3BM6g",
  "key6": "3pzmjKu6oYDNyUnjc1CZGfeLHrMW727xtxgBNhfqTDLmyaiKftt464FSfFyKDPLxotAY7YWuY9m9QWgdbF5PE3kh",
  "key7": "2ocYpnHLdKPVGopr4y8nDHWSZZbKhEYeTE25Hdxv17s65ajgJ6PEKvykV4W29KptATFTrjm1Mm8TnQcbDfAE9fo7",
  "key8": "5rEfMQVPKcManN6e4s4VzSWiBSwMCf4kCqBuqD1syygSvbDrksjYjKHH5JCjcofoXim3yeN4M3Ftn4fXNjtMyAJg",
  "key9": "67dg7gExYWs3DAwiLBR5bG71QtuEFs51rQ54kJ9ucTZ2TyRHSYSHnYx3iaH9EH69sEH68qf91taXb41sdnXsa5ei",
  "key10": "3RUNWgT4ArCN7BsHXXMMDKv4bZfNdJ3sG3z7gpV27n538CjVsuGAZ9GY6u6hxYZM9NtYJEXff7FGjHpbiHwFfTQA",
  "key11": "5XdgeNzcSW98GEoTD1gXWUUabZMF1yoqkY8NuzHKyZiJ62cgPrsSRPWn3SZ1KAsNNYYj7g5DVckBopgjuMED7WhC",
  "key12": "5Px6ZtV636zM1s5a73vuxdbPGKz2zTxsDyk8EQgVNJ5zAsVQgVKoN2xcwtht1StXFyZqoCFHwZMSKPkYHLR3pPNf",
  "key13": "2UE92RYam6Lr4doJQkPfDZRS8NCTfx1WUYb4FwbUssRGPAsQVYa6E7FMhET4oZ72KoyWqVrEP49QgP4VnpnzK3L8",
  "key14": "2o3BTFpRGhAjSoKYJsMpyWmFjGcfqQsVQamYzZi8zYoKU4iE36Hm3zChnsm1T1oYYuPPLn9CA4U83bA4fkKAmswf",
  "key15": "LQJPy9MnHP19iDBcKzmzMqWiyhjJtvRjnkeQAa39GC6Ry3av9EmAPKKhMUfM1beDVnHJScXZmoY6ftTJj8pL6tF",
  "key16": "5aRmZRRKoHWhFBfkyHfthQJgaraMSXq6FUp81ZpGQMDmBHHQBRTrf2X6yu9a6z5xZnCXRMaKFvXtXgpmyV9x1gLE",
  "key17": "4Bm8JJvghxknUT1fS6MrvFBsqEpKQg6giF6vSzVWRsVM3gpiRPAcPmmarRHbrm9rWD53VexvwVedAVQzJri6hh2a",
  "key18": "3x6x8UjYCecHNVj7s3RGPkwGhiuxJTxzjX8itvRpBq3qqtiBan1uFpEoghxZKnxmdbPoyT9koRkVe1zGnq4GTkxz",
  "key19": "2k3FYfZ57VcJV9HqcceAJzrBc8GJhsTZUed4EzNaZS3WfoNjAHoGTBwGSFNMHqU8A7V74fVWpKjPZ8BLBh5yFuZU",
  "key20": "5WkLNdqBh14sbqEi1zC9BCU1hTUEYH22aUBtYVZmqe2otJYVhfaHQKy6jhzaDYuSkvLQXmaiLp3yWDicRjviXrTm",
  "key21": "KGnhjbvVBXDFQAtDKHDqoB4Pq4eYwTyYkjdqqYwV7kGEfg3Xq7qwp63SXP3eFJChk4R3pBuC5mnPwEb4mTwEPtA",
  "key22": "LNGkEsTqJeGqMAkcNkNq6PC11dRMiBvKLLUapoNgCu9bFsFE6KMNPkooEfEdWnqw6DcWn27hZVmAnnXcTjmjPL7",
  "key23": "3n9rDhoWtTjRHZcBqbMiRSHstTRAfQtmPfWSWz3NW3k5sX4zshsTBig3QQR7vUuhTRtnPhqgnthe5mdtkrs5eALf",
  "key24": "2uSU9QiaVizbTDLGVYDJaHzQY7o2PTjZL8bVcSjFKVJMf8Dn8Znp8DrHTwfggHma8Agt56H1ZWEUir5Cfgv7bTHo",
  "key25": "4a59AfCK9XtdU5owkhAeES4ZgMY9t9GNKg2Q4aErbzBSgC3uD6dSso9HEah6J3qnYDAAgUEk7Lhisghuxto9shnD",
  "key26": "A9827xaeQHv95X8d7cUnzqEjbcmz8uTtKAVi8TUemYXY2D5DMjDMKP25kWnbPHkS2XCCnXQy6qt2mxp4VF4JJcd",
  "key27": "35oWzTC8KSos91CZRuoPgwnzS6UC1trEXJLMWzjfiHa5S8moAYwPzzfBLCrVZU6eSzgJhaU5v2aMc8SKUsoowKNd",
  "key28": "5Dj7wn8EhcM8VVULR2YMjR7EhifYDUYP8kWTEyGVzD7ey5wUu3HZXPqbEMCBJgLZDJVXNXCxd6eyHfN25GYDNiTK",
  "key29": "5uJc1MGwxofTT7BdQ36r25JZrBogXrwdTmYYpVBcD8aHoM52fB881hR1rVXyo6g9WRShJB1dhznc6E8L2GVboAR",
  "key30": "3aLDgAGfLrLB26MCqjQC2P43mCYroJuatheJ4DVyMxvkFQosVSZs4psisGryKtZ76FGkJtU7jBCnrdyoPxsgfi8F",
  "key31": "3bS8yZTpLnLrUP3vfwcmaV2ZCdE58vUCWWxEyTLtBcCVqukyKNtERVGoCzPQjR5TjbGWHArzz2CHH4Bvpiz5VRg2",
  "key32": "5J6qdYDqigeXGVTxReVjgz1Y2pvivpyQRXDN3NF9PCeJLexbc4sj4aEvddbdBGSJ85EgnUbzGW1pHXwTztqEH4Nm",
  "key33": "5TWh5syD8LUCf5NsD2CQXgQxxF3gCPUbcMVMSJ22oJMzxNaW5Gn279h8U4TKhwDJNgeXrLkSApw2EJn8dyQWceZF",
  "key34": "63RXdhusc8yxbsbpHY2A5L9Et4uJt4MsRYuzUKMNY291eQbotWr9nKZw1SsU9hxQwkuMCP9jq52JSfw71fNm31JD",
  "key35": "2t8rLFwwbiwb8RdRb4E3coLdvHLS1SPG56duAvXsmBe7q6yZSe9DDwA4QRP5cLmaSq61QBCdYwCuDpLzPo1RuoQ9",
  "key36": "9N21a5inG4UU1utEScn3juXQ7ENQ875BnuVZDTcxbaA8kcEFAxS8Qmbn6foPDdfbHj7j6c3BvJQDXoWKjjetzW2",
  "key37": "ha64vYxPt2cbgs4xKH7FnzbYrrW7mvbg59M1DRJ1S3A8sg9gwdpfkrtnNbij6Gxru5FZbugX2SdCLSgPP7mYvoU",
  "key38": "2FAMneZAz9KsfJVFxjZDAUshkyzBjFiKSFeAoexsp8iPujb4D6JzdGT9uVKAZnFjHSBuD42CSHfkoDJzAJUDaYBm",
  "key39": "61h55vAqM61YQAJhF4m2GxT32ZSCVhhyozEvXg6ov6iDz3ttT3qxEKxzp4oYKdABXxSouDEKkPhKuifTW4QdAhmg",
  "key40": "eTgDjvSbkuQ9qwhPZpLxsXRyGSZH6XyorKcPzz9TeMRQJzZzu9KAr1fwp9BfQzb5HJycosRdMCrXcZXnb7i8MTw",
  "key41": "5Do1rJpXGe3zvx6ynRXHEptpKYBqHKHFibBZ4RYsJ4dGouoz3AfWXS91KDARoQDkSew9TRXSVvXj4nhAcZn4r8nk"
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
