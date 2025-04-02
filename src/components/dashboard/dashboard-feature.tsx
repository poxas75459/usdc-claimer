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
    "4qaYJYZyGZ6H9dhUpVFERNyD6C7mkWnki124GkuWVqmGxJ27dbMChQ4wsYJh3eWLYJnVbKmQR4MYkRTBPFL5c1NB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Uqi1fiPhVLQKrVw8Qmoy8FNKUTccgoUkf16U6e2AkcGiFwNqnhaMcAPsCZG41fX9CiGgWTXvUEmnyRqtm9o4RiF",
  "key1": "4iL9NeSbz8YsxN5R7Nb4vDg2ux7cHiQxxQdWVRGmFmGxu4j8kHaTuBjSfN8EanqxSoMxQ2UoTEGJmhsdFgPCaeD5",
  "key2": "3QN3Ym6n9wfF1gdoeNHXBK6fMe6GNGgpo3ERikcYZDU1PAQFtXMGYxzaikb427XhxMYwM82RqXB7aBKGSHZDfsaR",
  "key3": "zUijVYrSDrCxqtgdJ6bxqLW13VCU3eWGMswTXHnNE9gJ4PTcvXq1TtxjcVGypdFjCztoqxDX5PKcdtyiiX9YRFS",
  "key4": "2kuZNR9uVfrB1MCkpcFHKVEM28kHHg65Y3RBzRsBXrEbTkuSxURLUMU8cuqysNR2UHtA9JjdYtj3wFhDSLr64H9M",
  "key5": "3qYixiYBqcJed55645vNdyCjAyDdxk7xDhRgrNZSXYVb5nKXAcSx6PnKss7XRhgfj1Rwkpoe9tWDJgTYZXjUHGaD",
  "key6": "5YY86vGmKngbtxLU5CFu6wwpGkZRJ5f5Vmwk2J8VVAxFdwGNEJjjpCLaKgwTXgtdbJwV5jx6YqwkoiJLc3JBcjyh",
  "key7": "3sFiUEJ2JZ4vDBHNdfxBmEwNEmopAwekY5CGWAvTtqGvYHs3HdAfaAKJPtvJ5HQhGBzRfTaG91qwWHxMBTjJXyrq",
  "key8": "4ThS272y8RbhFQGVfqsLYongDJsePqHAeW6yoQ8JHcpNo7Zx7yTB34stjP5uUzBYJSxB1apxaf91DyamJWtwq26E",
  "key9": "2AmRzV1UwA2rzAA4EcteZMtz3qYfSxR7pLw4iBPdi6HSpKznmu24Pm5o7xSxMFMuAkZYfca8QuzqEyLLcsheLmis",
  "key10": "63E5n8bwKw9vTLiRyycd6MvrZSoJ6ZVDMCdZmHe38m1ThZFXu8RxW45zwHqJDeQiQJfEERv3Z3do9aLn4X1TBZcg",
  "key11": "3RWhutMJEtUS45ELAqQ1sEhEXr1KE3GEE8MwXCzY4uxGGP4hzXoRPxrnV5kfsaHzpGbWruLfWPTzc2Xrme7uDxpg",
  "key12": "xLvfVxAiRyqMGCknb6EBh7jxipU8SG6HV6BvRa6PYfBMT1oF4wQnwUkRzFQUkQ6hXzPC7wbCnHt5D1EA3odKNr6",
  "key13": "2xEhcBEZHojQy4aL22ffTxDVa6N4QgPCw46Mqr6Jpdv8s6TvGy8a4Y74GGEJuPKT62Yu5rjhryAqvige5abCbuSG",
  "key14": "4u1sAHrk42QsFixsvQguhH9cmTpgimwbR4V4pULBRU9M8SHhhHQaJks4ZEos5AGw1vd7bnQg9w6F7nsqpUqvNyd4",
  "key15": "2t4eWw8mLVDvJpidhuaAX9NGF3Rx41srGQfgCW12wNj3CZRJ9Fmtn8WXafs7qyCHvX6JkDMw2G7MgnsbKtVBX6hP",
  "key16": "5E26tkYZctmre34F4pGyBRJZH9cn3QGPm2KnvAXdiG7iQFjivV9BAgCgNMc2GVhr8sQx6971Spq7keQf1FzyWmUo",
  "key17": "3S3FbCnXreEb2XCzhFY8KvF48Bo67BFXxjQnUgfHsJxVPh7F6NuHv8EVSzfCNGGpjYpvptV5j2Kur5LbNRWiukQN",
  "key18": "2KjiAc7yB47sctXsDH4aqVLMU8M9Mes3tNUSYZTDf863PW5dG7AJa8EqGXFYWuPV2g2eXNwMmq2PchFrwT7W3YiH",
  "key19": "3HRw7uhyoFqXqoYvNURC2Z2ZUQhhjBcuiqUkn4vDqt5YQ5ovAUBQxgAdyNcByuuwwZwAmJzmEwfUSCPKEEdMHjc5",
  "key20": "2k3QJzut5HJWPq81A3Enh5qngVjXCpwrvQBR2Pf3CcxJFFAaHXvh85ESQT9usTmqduRc78WNE58NUAtHca7DbhC1",
  "key21": "2mfpxBMGFHCqwHHjiHNsYdBgRFP5dUvtatFKYYKuNCN5CDUB1SmBThojSgsg2A8pAbTdniCtNRJKSwTjdNQFuFcF",
  "key22": "3ovWaCtWej3B9GooTs1tkVcdw6SA2d3AQhSjvtAYs8Ms2wVg995BAj7PuErg9wcfMhPa5Aygbd3FJFCpNddYk22h",
  "key23": "2RCHnfCtahzcppXkoi2TRKMRLbQwLewKHXw7kbMonerGCZ8yJ14VQE6CGLzaCjSun29HbyUxJTJmuDuTKFU3gaYp",
  "key24": "2iT9wzcR3EppRLm2Sg3RAU8EMwqzJ51qcT94S6KdFJkbcDjQCRoXMaMkCZszEGUi3mi9SNDyZNVRHBdV5YCpeLE8",
  "key25": "5QY1sQsmU5LHAjZqqcBTUWXgwz2WCLhvXo2Hzw8aQrQ1uqL5ecdozg7Txh71n3Cxo5vJdV3f793Y4ug1pYeJ71hy",
  "key26": "3NgW7FQPjxScYrVes3TZXbPheuyCJjWnszpTd1ZoEBf6MDpUaBtp5SowS9QbLau2pEASF1fkfxaax8ehiUSCe9zp",
  "key27": "1PwZsRAKd766hVnkjsyLG1MvszKBo3d5ojhPRAcmVBJRuVuddMAYNACurmocPF7Lsc8ArgRMkDFBAHEDenBinDH",
  "key28": "2GL6Rt12LxLYbdTDWuLLvxzrq6JDQnXx18YDn2rFQrSMmzKfsLnW4odjz266mj3T9rwrNSHJ9W1U3krd8Rg1DN6D",
  "key29": "2q8JxtHN1zmfUH6NW1ZoH6UrdqPYX4iztv97dZTNtf8T4K4iUy4mR2FL6kgXJhhMQ5f2RAioa5DyJKGGvShUQuJ2",
  "key30": "5sGq98XjX82qyj1auLX9UdVooQGzAvFjNEyiQfFKsVPXAWoHLJkgMMWUTZNofZ76AL2wFGXg1weN7VX3jwFY7knY",
  "key31": "52LLq2viJZVZ8JTRE96kpYYYXWWpNHHxjxyKzeySu5nFxbtAmXSUsRekXTpvgiyqQgfv6MiH7HymJbH5w4j2F6Xf",
  "key32": "5iQAvCyAjmmiCkJpYVXKk3nAv1fjngQBh4Chwrn5zD82Gp1KhgzMCdSjG7yhrsHstH39ZrRohiqco8faLiLq1G5i",
  "key33": "4UEfrznnhPxUApKaP84aw76H5skCAGdZeQNSnkwSAfqHV7KXW2ZaBH8g23UYynmNeWrnWvas4KSKwAZsyxipEemM",
  "key34": "23ztQnnhwrdvYsEchxbEKPR1Md6Mwfdwq31NL6SZMBaQ8PjsNzKPQtJXaVF5w8iZnWPFsPKJvwqgLpfXfYcnYx6o",
  "key35": "5PVowKo3YmxiGMvLoXA4DDHpUWLAW5MKGtbu7tYjsuaNTm8A55TQ5BYfAGp81mj6KzE9D6XCYig5dc8VTngBPUSi",
  "key36": "4bxDBT3rMFVPuvamkQky8g9wXhYXooa9To4sr3cFWrtNSzAfzR1jXiaLVeq8mLSBFmWESG87Aqezw5gKKxdxai1B",
  "key37": "iVp3eyriecLF8getb8nno4uU78SBrN6k7Ut93GNwBWXiestnWBspvn4PaUCK6w2BfTUbRBMoiw6tDkKZFFLPGCo",
  "key38": "2kq13eyTjJTB9feKUSg6StsFTTLQzP2R6ZoZyGFqdpZqUzeuS7YzguE6GAbLgWujHGHc9KDQKLuyN8KotAKoM7pC",
  "key39": "4buqxEyvLeUHfSoJbkZJSskqDbK6ZSpoXPggebNUrui9QxQzaAzZsMFFyxaSums3kn9k1KsFdiatXBtf6Syn4yWj",
  "key40": "3anBRNeheNYXqbHrEBK1pRMU52tNfY1f2SsUPoh4QfNGuQ5qaHieatrvotrGjfDdHmW1goYQDsrXwLPHn5FMSQom",
  "key41": "5WqLHAkzFfEqLU8mA1T84A4qDjR8RRzrsX36B145EkJdatpBZaYarP8PKmQMritzmDSFopjkfbRNzhbnfGh2p29g",
  "key42": "4muvc6QenALusFxyvXxaNjtwgzeRoQUqXMNmDW9vqFrPfX9nnZfXeKzg2UKFCBmHNjApBDPPb6YERXmKNvEjBdCt",
  "key43": "5z2NVCfLDteGust8UWhHeTzbTgWcTrydPELHhUXWUsMYuqxTRmaqYcoEz9wWj6tFnjqceLqFHonmpyM6kYMLFMWm",
  "key44": "5x9K94QmLk4giz1DZCY7o4SU6KkTpqzDLmDqdXXcptb5ViKAtBiGk6GdwfykPocDKrWN5TwH3AjAQWR3qM7Cm9Wy",
  "key45": "5U8d2coC1ATQBMAsxXpmdnX7JAbxNe9ZVrZD3kUdEvCvRxS13aYA1TExhebWhALXoRZvZjn5akt4pu5KUPLs4NPS",
  "key46": "43j9P41YA3fMgWvFoneJApxxhFpHdMcGh5zMgJDSiHhT24Gn4P3HPwEnBBDrpn7YW7bc1WQFfgp2nujDFE5Pcn3s",
  "key47": "5X92zo4s2S6vAodKXCCKzNe6abRSvcAavPH5jp7Ly7TsS9c8cEneC1zLEW92ZH271RwPp8k9qez7DSPhgQzjEzp1",
  "key48": "2cMUZpoRr9pVNP3Ne23xyGLn7PLYEse4YpTkCM85tD6siEfSAwtVQuuMQCTGLfTPkZHuy1dnTi6efEytR8o4Upmi",
  "key49": "V3wQWaRBEGaYaw6zBM4W3TBrUd3Wdh27dsFC9HqvxhtFWBsmHZewf5XbWZU9CGMFyDCzZNgMDbdFDgBZCbNJq1U"
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
