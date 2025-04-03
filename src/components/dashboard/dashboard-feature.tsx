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
    "2zteMTy1v7MwyhCGY5GZZtULMnD67YrNgFNFoEsG3AttfhTBT3i5GZKL1LWDyDJpLRg1m53SwbWCZtVmxBGTFC1o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QXbuiaTvgSubhipYcHbXDTCwHUB68QLAx9LRA7PA9zGoRHcqPPM7mBVV2J2GVLKJjCtLESwAXXm1hexj94tYuYQ",
  "key1": "3RCargYhYEBmPftUMTyVA5pf8DHypEySCsRWM8PsTK9Qsg5gPWqp8K7M7HUn3APVMetYBYzdCyZY5DmcBepmoG2Q",
  "key2": "exYs65TDwTo18BvT9qxXBSAQVn6bxVMSmoEcqr7SF91eoK77mjJCjkMAh6qQ8SHCrLUJDx4Yst8gm8CoSEaGdbN",
  "key3": "2Mkgz3sMAYKwx1AwS6Y7eZejA821sKUChXRixRaovgJoXbjNoH9mTDbJWTDc33ypHEAWRjFWyWSsTNtjAfrufCcw",
  "key4": "2fr7zc3AiwR1XfSXqqVJpZHCaiXzkwGZeiY65uryt7FMxDLTUToC324fQvnxakbnhUGVoJZXWKHfGagmW32VvvYA",
  "key5": "3yM2QVh91CEjpGmigLNUXY6gbkzUAxyn5ZY9eNVyNJ4R6HW8U4rbbusJpwzXXKNVyKviwtEMmCLuSQW8cFjxoxDu",
  "key6": "57SfGYmVLdLjtDE7Y97u4UwjE14nroaaTwcLnoHu6BJcD15h5fBzQHwCXAsC3Uf6JZYAgAjz6HVU3j4GT7CBbHh9",
  "key7": "2Ya1619TAfF4zhq9SFD34WzPiGWSGgW8ESj7vDoqqRcnGukqkiq1HG4kzCDGpAusn3AKcDoubC6m4A8uyt59SzzH",
  "key8": "gYURR3qUG8W3ofQZv2LvDfXezU1xs7LS8yZycT36D8WX2PXWV5iMYi98XCn2kjGGSQ14n8kz6LT2an9DdVXkk8t",
  "key9": "2xKkMSXCs2kbqwYquaS3REAxXYUbfyd3yx3MrLuCewQshuDh1uA7kiNdy54PCQnpcEnPbY2twq9HzRrNHqSs4SGb",
  "key10": "4Ar8CS2BrxeF5jFp8sanAHsgdX72cTP8U6wXhMziXvFQ7SpTtGfDvmiLpHipopeMtqHCQkydpqQtYZhhZQvq2YEo",
  "key11": "rziknmFYqWdSipyLqrQfEw6fK5EN1e3KFp4uSAykYHuXdnFar5g95hXgxJoxwXasMYo77DB2kkX3fWugLKEMAda",
  "key12": "5NmC19oMD78DNeQHCn8UmSFo3vbbTqWzGeunSosZqqqUjgbxoKMDCuze6PbqEcR53ob8DzS4ojpWC43hPokwwYZq",
  "key13": "3QqV9ohjmr2uKA8h2AW7vwSN65pKepey9ibZiqdYBtUk4u4dn2rvePtHKGvxgyDCSckwb23WXe4tkF31NRuzQTLW",
  "key14": "3TcEnAGkUNUaRQhZnBoknePCXi3ozh5xXdvpa6iFKU8NTccBS4KwoA2A3jMj9mmYkD9TxsgHsY4HQ5RWEUU2S5hz",
  "key15": "42voY6UtKdMeiCJEdCpJjAdeAQ44ad4BvGerPjSWkA4ZpZJfXEHkUmbF9HqmHsPwjHrFP3iyC3Rp7AdNeQ6A3tcP",
  "key16": "3Q85uHpK6jdL5Ar6yP74qQ3W5Ed8AjA9skogtEGdWop7ZFjJV67Msq6dcpg2jmLe6LSTFTxWSPDb1ri4dgpBRH1W",
  "key17": "3FGy274VwQwW2H8XrYAvh7jfYLiguocn69JcYFrGAEqahomThNnt1busYX6cbs22LqdyiCdVAe9JryL31c6UyEg9",
  "key18": "3xQVyGVkp78ykioTZTrFFPdWnrJdV24dvcnwvDZgq6VMMudCDMyvmyneq8t12dUTn4vjxtGHE9VZVKHHFEgLtUjq",
  "key19": "4TyEAYSPYXZnZzybrqrzPmDWwrUqv3uwyVjy4wAn3FcHBDofFezGESqfj98Ec8yfJ6HtwVfNnmybZzw4jfCAWLpC",
  "key20": "26CE9DXWyLHHfDC4NvqMoGbidri6LQiWmWR3svsZE8NHUDfdLxTTJMJnwGZdbsrpKjvgqdQrs8bMJMd2FefAjaML",
  "key21": "4NkRMrCZk7DvEDgacRsU65amrPfzre2zk3qKq62AkDhExmDJie5Kqa7VqBxoMzehH7nNY3eNCwP3jvHktTxLUVpR",
  "key22": "5WgLdi5YBMf66oPvcEYNeCK7QUAdRXLVmwAwDrYcLRWTLpUcxK3xt7HS3LzDLnMjqwpxQpTBLgVbmxFKB3KB2Lx5",
  "key23": "2wufuEQENoFAL9BbveYp9oV3E3RYwJfZztSg4Yucxv23SbafaNG5hrAzfh8YsQGxDpNLJKtyXuJTjwM8M8M1YeiX",
  "key24": "3sqH6w8x3XjwCnfXtmkwkp3xQphtjAfB3MVpq8wtfPWLHSr4VHEHBxVnSTNTathkBMrK9d6cSyPB6zm6XHPyigYP",
  "key25": "4ENAq5bT5gri9F5WtfYZ7sVk6mkVrHkEHGJtP67ZbCYX6QdTdXyMR1hncDUbhdPaZw1ht48jzk6pG7z3DF5uM5e8",
  "key26": "2c9VGbbW5Fk2brN1ZgxaNQTRTBLp6SuUnoEPtmD1YpKh4PHnFejUkPHbjQftG6KgRJ7yDM1sT11vRyqNygRADFck",
  "key27": "GhrpuPjWt7c6QrZWFjjf2LJFfPwJrKQXgHA8n3GQE4sb8JNc7ExWKhAYh5cVStMwVdEtBuYWe5iHyUgE4t8wp6J",
  "key28": "3AQavXzDYQXEPrAB5z2iPm1zXYJUyNhvTZiRmfAhtWW243VAB2K9F4W7maVPFMPkVTYyVXLi3EwYQTshjhVkobKK",
  "key29": "4SknUXNJ5Srz5V8fFVYhsGX36KEwcRCZ19fipQjkHcr2z19yPmaZj5TcCeD4JPZkq7W3V6G3J8vYrHy2QgnwFHks",
  "key30": "55y5Kjfi6mB7iTaHB8dRtDiZQtTUD4ZpasrxVkRum8xQTRJo9U1PP1dMUjjf2m9yJqX9JjoYufkrE5as4WLbapE1",
  "key31": "4YsC74P5J5UyjEtznW4cHVpyMx6LVWoZVxiu6NcrC5KNNfX7b28rVCPB3xy7BR6pJGcuY9hF4vL7TLYXzTdB9VZ5",
  "key32": "2qBKmTdRGab4hiQnSBUsmZmUXGESgPY2ovMbyJgiiYkv8Da4WAASmiMf5YRRJ9ohsCLVqrXt3LyQjDraa1JBhWJg",
  "key33": "52hmDdTjPYVGmMzNBKk4eQQsJ9EmwGENn3xyUZTAAFg6FMo5c8n4qqJBKW6swiQxmWb9MUEBWjNKND7M4UsazbRv",
  "key34": "2usZYseUBWjMQoAyQuuZhNN2AozE95ZxWrM6ecC4J1LgSpLtbBvUUmX6734bcadK2VZwouAEGxqeDREVQHLEhb7s",
  "key35": "3RwFwc2mXRsqypjkMWvBe5AkTrVKH4WXDYzRR3M2sQzTUbse3V7KeDFkiaV6oJewFCr283cMyudizx4qKtKKswyz",
  "key36": "3MzPShreWVMou1eUUFVdEjJ5RSWyaGghTQf8Z34mBnnJMC9b3U5cj1VcpJgc5gCuva776W2mXYcfQTnXzV2vEFXe",
  "key37": "3cTY9vso28VBVsYsTXwAbR1DnNEky4cczax7WxepRfCrTNMMzM3eMFPopCnAQf9YLXAPWKBLQE34hjbCKgbFwNdV",
  "key38": "2xgR95d5gKZ4gQ3G11zKzANTxgfEJPP1xxnqgwiTJsenaBzRbBzWB2HMFkwVoyZLVid4fEZLRdpLjH2tTWbubAc",
  "key39": "66j9A7zcZHittJstRmebvuEWGNrzotC6T4ae2ZCBE7XBAqeQss444AWy6uJRH1mPKfcqUnXuJTFvBi7V1XEJMK9W",
  "key40": "5jz2ruQfdiCJH9B34NyZKE77DjgTB4P3t4hcWa5XZBdiBXoUfuk7Ub1a4rFRTPhG2hGS1EeEKkcRe8RTZA7hHp8q",
  "key41": "xr5i2KiFajq5g6rEbWUpuV6iMa5oH9nA5NCEuEBBHN2KVWWKVzLuPYLW1HBxqbsEcGNnJTiqedvSDBs76BmbWWK",
  "key42": "1YnmAJLjMHr9pcZSd546FWeDvFCjBiviraukAQ67QeMMcbsSF1AJ39Ttn8jHPKHGagWnfxd1aj6q5WKR7uYzwn",
  "key43": "2bY1XkUbtBJ4jXTCvN36G6y6RZjjiLHnmYSqU8nsMkKuricE3xQcMR3yBdF8bgaz2MbhFaoADLy5UgQby62KJ6oC",
  "key44": "4nZApWGFG2g6r3f7QgXiFRp1KNNhAhELn6q5NdU6q64b4ryrWFVWNwym3jZz61T7sFzPie84eie5Mpj5Yr6uCFGU",
  "key45": "4rmRzmsGAT4HEAuuBoA93xmcJQ3HtBj7mpHmKqgxmkAonRuwKhjhgnotpcUBGkfhp1iQUeV3qGxMFaGrg59tyyAq"
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
