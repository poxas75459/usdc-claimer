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
    "2UTYUGS5PQ9b1rswvRj2r5pbRRcfizGeVic76AHaQEuVQZ6D1nXBsVz3rufhkuRRmzLxfjofgi1fUmNxGBwKksTm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cRJAdV49Bk77QoxZNszvU4L16Duvs8ym9JCz9D4cC4i3XoFSoQepXuWyBSS8ma8znUuernJbrak4UHaLTdRkmGf",
  "key1": "PMZAeYoHBnyvqsvzrfGdbkQc4faSyMvQJSywVkkrPrEaSn7imMzHyChWJghWHu53SDsS9qF2uMRDUsXqETgDxyw",
  "key2": "6Cpa6kia4H6Vd91D7QE4gP3cYjyQYFGTT9t9ELDFPgFF5zkWwR6VsE6w9LMeL29mL7wNq7yZXAxQv4rrWPtThCt",
  "key3": "47TTVY215aQL4nQa8i4TtdRvAPTDd17vStLn8gu5iJGut8E9jYjFWWfvqS3voXGXmCZv1sicxZWrABpLJ29Vsddz",
  "key4": "4yJYTNb4XrpqH297swcprt2t3mpuZ1EDMKuciuqaAmrg7ryz9m3Q14VHhZEVVKamnq13ZmRK7e2GRgd2Mti1JKyT",
  "key5": "31gqkUEoCvV7L9oKGwaC56uq4MeJKMVMj2BBdwNMctjke1g6q3eDTute3pstxACNxH61z8wTDCyWqvLkPvLPNfTz",
  "key6": "63NmCmV37FpHRN56YPseCJpCszGnnu6G5kLh2v8vYBCfYfVWCzNHjzXs7nopb6kP95CZnoG56W6VP6Jcsv37V2kv",
  "key7": "3sjiz4uwhR6aS58jeEX1ALDmuCSxLrB1czJQ8JbcCg14Uqy4YLykMN9xs13oNEZKvgqs29xFk1V4pqCjcH2vkHLm",
  "key8": "3uqEJKJLhd9LaUNuLsYd34jPW4m4A7k5WmN4V32cWThNmeoUdGBp1wPvKADw8KX5u9MmB4gCU8qd2wCeupvvVnWw",
  "key9": "3FvpwUsr2Vd2Wtu8nUCyUWg9RijHDpcNF1jP3cbCMiBtMYCe51rxc9zeySjCE1NoqNkNXKeCsumwxt1gn6ZskNYe",
  "key10": "puCTivXbnme4Wm7yvZPbHzaf1Tz198KFmMCxujN9fdUELd3SwqFE2oYt8BUtKm6HmqbyqqmjFuME3QUJsRJPqAH",
  "key11": "36XDVamUSuMcKssVCHmDjJJN3hiGNDbANNk9EjsN6cTXnqq3iU7VgNt2UckYZBj3t9zgyuG17MPQB4viwEsSP2tz",
  "key12": "26oq4QayAMpHcQ1pMAPzoY1WKDHdYixz9ByTVaqG8zDbbgRvHriPLhfJikHX5QLZq8UypFZpT1Tz7HCb7fVStbdT",
  "key13": "4zGYEp6sJZXtyoCWBiwA5horUExFmtvpPmRUrAiKra2BbJBbrUw2Wahc5cmyJjWiqUPSXaTdwifqYPE9mb4fRFmh",
  "key14": "P6QcfZkuGB6M9ZHWYabvkSBKegHSpsmNGr5veFS8bW9SWJRfhd9vcepKH3upvoxzaNo8wihbLNyHnk6m8Ao8pp4",
  "key15": "2u8i3G74SsL4eZozuGkyKKD9kZ48LqkDJ3zLQHc5uowgrYZsvJ5TTaL7DitXB1q1FVnDXH8CmRwQvEzpUAKQ4M5M",
  "key16": "4vbsCNhtwhpxsNBZezTTCcpXv37e15p9T8xSCzoQvpkAiwARBvdWBCXVVNK7GipAWwV8yj42axHhDLF4mPMVJWe7",
  "key17": "5UcKnBCdshSTieSzXdBLMz2t9G4F6bmaGJfZzA8BEJJvLekr57xBG3gt3Eps9ucf3Dde6aGoaFLNySQg3mJ3m7e8",
  "key18": "XCnASYD37wZ3Q2Z58rZ6GNkshHZHKPzvnSjEGrygNmQiUtcoa1sQfgekLz7SGSLP6VHuBsnqnG8obqZtnz6SmT7",
  "key19": "Xnv7MDPqgdsoK3BJFSiTfHu9CmtX315yWidGa27Jx7k8whmvZKL6eoQvU7cHPMYhujzGjTUgaKxTN5N13Tvc6iz",
  "key20": "4rsAFhGJj49mEKW12bSwkLZecniy3bz6QSsaHbpv5uiJN32wJ6A59TXtofkGHFoi9LuaNDZCGZHqaYso9jcWTjWP",
  "key21": "26ZFy4kVSmPG4d3Nxmyme7sw8b89MXjJ6QeprBkTAFpUWb2otB2Z2BE9FYFyUGiCLVGmy9qZvBZxEK7yMLLRUtKX",
  "key22": "5umNk7KvKs79gq2mJb2UrzvTpyhv4M7o85GDjgqeaN6VjgzwarJw2cFWnDJYMr3Zk7ebBxge7KCoeA69jMcgG36a",
  "key23": "4JjZcNHTyHH8xuNzPQGdhkD4bbZLdjCtTeHbyFhEXD7w4oqKCvN5pPFaocyCHwZU7pJgxm4S2ZF7LnEvBYcd7q63",
  "key24": "4JULdN6ipgwsRhTNX8NyYfJiyD96ik7avCtBPr7P9JMBqLdvFd6QNLxh7ZuuxYjd7YyBER8mSakJ1niggXvMn399",
  "key25": "2sEoVYmdipWHZGCPRULETR57Eo7xX4Nz24auTZfd7HwcProQ7uihsZdDbDN2KCs7ecmnAbZSkbPAssfhG2ABt5cz",
  "key26": "2QyETzcnKq7MC5Pedr1LWnqC1PjbUWxD6L8aKrCy7zRgBBjzPDagKhAyu7GXm9CQz3f7AsWL6SryQ5CSNENtytA8",
  "key27": "3ZQqZv8SYSEc1GJRsJLCL9GqUbigZMHHfN2YUhtscaVLV357J8WhMrBCE2HRmXtphLQ7NzhPu5KFBqoojCCRM3kw",
  "key28": "2GfS3FmXkg5ocmSDJ92UMDLhvYS7mUstVNtX3hHPex6GyzMP1RcQVKHMPbubGmxGEU65uX37wxgadoYFQGxicwEd"
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
