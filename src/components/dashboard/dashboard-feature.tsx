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
    "3mUbaAugeZgLVGKo1pLteTPFoyhMAyDfQ9GiaA6oirCQUw7VMfbuTL6mMApaUfXeCjwqof8pQ7iggXKNHFXe1VKQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wZXxziXYENqARNHT6NZf298x9ksJ6f5UV8rwYA2CCZXoitBMrcsWNjuPmzzxVPqv2zAEe3XnfTNhnzdN7qCpmiH",
  "key1": "2f4Nuj7Fd42NFM9ZnWDJkWnHym1ffNEX5hkcwa5jBaQkSepdRN9EAkup5BwWkLqYJJMTWavTNMDSWCZJxVXHXG3n",
  "key2": "3jnLWJqa62LqDQrum7DLWbENQYBSq7hr8K8Rvr4DUnGsqS3xttU22PaqRppf4dRM6MSfiiXp37E3uaZ1vC71E6LA",
  "key3": "58qG543MRcWbxsRsWxk3upEVbDBrrV1fzoKQ6HXhhCDNhyy8ph9uvTrpuWhPdojkzWf2C3XkYL5DAgESWq76qSki",
  "key4": "4j4bA1h7kRNUMJYh6bDSeeq2kujkMJq8ZVzmfxFJNDqPJjXNm66e6SiuhwdMLTPUwvs6SVboHrnhDvKc1JK3mDC",
  "key5": "hewFvynVruQ22zsCjg3hcoRVRw4Rxape9zH7F7R5axPzkcU71LETkrdHGYkoskRQNqgb6LdJPH81PR2FFE873DF",
  "key6": "3DPZ9M3qK8indCjNvHS2nzHeFd3aPALP4yaeWsAeBLe1w8ueRWaf87egSGgAp5ewUdQaQcgdKT57cKeazUJcF1Go",
  "key7": "4QpTUzX3eLTkpkNZXu1LpcrZK6XKRauB2unAfUhqA5CvaaRLoqEByEJSsGRsTzzg15JcrvNX2ZjUrHabX695xdkq",
  "key8": "7VDrPR5TeFq9ymV8V9cq5WDtFaP5o3hEX57Ja5khYU1AyGKsmLa6YMYTbRWQV2jmkQgQKcFVzGUvnUoTRqw6RDA",
  "key9": "2PLf447PxpCYWkPMJDyEiAiRw9Vp3Q5PsZaxjKf4qstj55UG1arg2soKC5rNLJ2DB2ABjwZgHUxgctQ6giwitkPC",
  "key10": "3D7dctwabDFquyjRWJz7TnZzyJfvBipDqcAypVwJhGyN2ddtkBV3mtsHW7kad2ERTEGvNGqazXKHqNk9eqKB7FSm",
  "key11": "4HVWAB3gXkzVJtijdqrmX6EoQjTzRpmeyk2AHQEYQaTntZQ9cEVRNiHhKQGGtG4WLUieR3YfM5qrEx6LuMayieQK",
  "key12": "2hEqe6r4uNKQS3ab7ktvhzphYeMpFhCaKWn86uJ4SrL76FY24wJXrWLMA81sgu6c9opAiQ2MGHSC4DHvM4nsAsF8",
  "key13": "5LCpz8CLkZ7c871ngetNaGUXzJD7x13ketyxe4CFw9c27wy6XwGwz8ArkRsFokuzZAwpEhdYvViuj4p6ymx49Z7n",
  "key14": "JxXZuKbko629h4t6SNsYLdGR67vnQXEHejLH2xXRmfzBL3Mj3PdQvVHWD6ypQS6XmdqDZaCTczJzvhSHU3zs6a5",
  "key15": "2GuMZ4dUtNLiYDAH4rZJfK2n6zz8pmYDBRuoRwoU2y7mUSjjd6RY8bQVDJLh5swvmKynVyW685TPytffYwgyCTWL",
  "key16": "4pZw53x3x6ZCZaP332tXetZqVKVCSuPZTfXhmEL2stcU2EqmKdYwrzsYyD29uJzTNRZJJTHy3SeaQKziHpaNGxZj",
  "key17": "5FnP1epMXdxvXEkL7uKZADLQBWbDuNNJcTir3rK2wFVgFue5SYCPgdcur8nThYAp1ZrSiTYTkvvnaZ8T8mz9tnWn",
  "key18": "3jH2jRtwrK16cpCMiX6i3uvHQoDS5ejMkR3iPu2WKPvPUsgFtswP8L5ZsxrResQwQTz3rqZpxujAT4Tb9Dse8qns",
  "key19": "5Y8YRV72RPeu2VkfxBrzXA3J5GmH9oMhCggA7EmuP1eUhidYJXtUiKGtG2LKANFztpJCodaDSt8pk3gKnJJE7j37",
  "key20": "4VwTkVp6TSrrcgYFCugTsm8CfF9VjcKz9BXyFMFsDjvJYSeBKnKhdCzBsLW6vkW5krwvoiRmTbEif3XKQiaNtGKZ",
  "key21": "4y1m9HxKTYyDkAgcfhnqdc2wjQXt1cM9ATcKYQbdx8uS3LK5YdDssEDLYRdv6qTkGDEwbtbhjtGmVL4pY3gr5X3T",
  "key22": "3TowVsQKfpx7dPUnWZRpi6zVEsSNTfBySJHxwLEaNZASN4ggC8HWg4Ju1fde8ByaTrGNcPujRQe8S8piDYE4JPBd",
  "key23": "4drkro9oLACxzq2GTyPXg2RvNxuKV4XrW43EAxtGm4GL3P7W6UmfkYjsufqpCQDbCyzdu8i1NRXBu24wiuK1qLkF",
  "key24": "2WV8M7r5iLiCukodE5zbp6TBGkRS9UqzgDsmB7qkWG36MXLM68wRTYd5imHcY6QzJF7Y1jbXPV5oFbfJs9XCNSBA",
  "key25": "54p8HAtwRFwafzY9V6c19n3w5hBJ4FG7qttndaM9q8nDcTWAEh7fkG4sxu6isVWgvhGjz8GxX8NKY1FyGiVnEUr2",
  "key26": "2UgMKi1kTsJvqg6eE2zdih45NSb1PfXyhZ5NPKL4jjEHTz5CDSs7fChf6AbQTunK51ynZswD9NwqgFJqmnSZMKTs",
  "key27": "5sx2z3AZ25HFY7DooHVimjdNQRshBR7xxDjF9R9FUNcXsMwaBKauPjXWiiVF9f9t9DEXcEMeC4twR4E3DiDsLf3F",
  "key28": "5um23D2Dzw1YTDv9ME4ikEFKcCMfSzdobLvsTDqfxwkxUajaHZHGq4AhAWpg5k7pRVEpdHk5zZSm7mY9RR14C24L",
  "key29": "4PF4JPoEFUxxdKLRAkLz5en9urtYGsRuVGEYPBUT1nW2sSH34NAY7QZZVWvg31FH3giBEa8pasXTXfsZKPWRn6Ch",
  "key30": "2Tc15rR66HJvTfLqXQEZSkUmXvsH6anm15SCFPwpKfFqMKN42zRuDSTZD4aA2tzKPcwdetNHTeeFiLwBLdr3zria",
  "key31": "3PJMUkgoqyWbs82kMEucCEC78Kgo5557gvyQ1qUDreEmXRfqJddoMFvfuHvs5HiSdYhiXhaUpeaBArFoe9L62N9i",
  "key32": "mPmi35ZLUj3M8xsJzR8xbB2jMqSWQ2TjyLNdYEBHdu9SznikAtfAFj27X2GJiXtDHGnj6nUV7EhH2EL4nR4zMmR",
  "key33": "5hvWbrquQBUd1V44a5UTzE4Zkh84evwEop7aKzMmXQu18QPRmivpwXULd6TCVLUkPBbPQoXFS2SXGhNnrvDSYSz3",
  "key34": "5aBfYDYwG1PmyXjq25X8UfunsBtUyyezF96YAQXqNdfjEojSpw6mxNE77sGF7PDFVDb2YxEfbtmEJrVLjXoHphJc",
  "key35": "59YVNuGez7Ezp86MXESce3FdpNhNbjz1taj225HmimCjRHi8mvUo6BUHLdCLbxMHidB5rVpAisbNrwKpDxyHsuPb",
  "key36": "4Qr6Drja1p8sc5UqQhMgpTiTPFRdDVhSvVtBNGCcFgyq441qjqCZy955kutx2WyAYPVKdvK2JeG6m9o3iGwogjru",
  "key37": "ZR9ZsBo8xCTmdumTjyqQDZMXToVWDerYiCTHEt2PiC9QgsqwThiRhYCRZZBJL5obVdEsGEtzkEpDQEtwJxL1FaB"
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
