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
    "5WU4mRfrSVVez2o14fwRRacF9MHzMrsiECxDk8aWoudWc8rZRq6LZ3YP639c9wBFWwSsWboNQSn71gKEy22WSM4v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "c1SabZXw1vH2tzVUha5FPdkt3ipdHbnsA2PjY2Ckm6EgwecFdDAg8pgDV1jWSczAVkkwRjY3ared7xfwUTtSrRH",
  "key1": "5uGV6GZR7qJrMuTcPs47HZsb91wLStDgmvJZcHX7o5KFZuoe2wdEjzXXjvDtvizgax65zKeqWisnU8S66MwVQ1xk",
  "key2": "4FccEfF4BFWrRYh6EHp4NXF2AukTyxZy5uuJayqRPZV3nrFwygDFWGta9z7XNCMAVQwjmXbqX9XuuaT7up6xdrzp",
  "key3": "621S1wsS8RhmpXKGyT7T8q9v17xuzRccgu7VSPzaDngGfKrcbfsHP7xovfRpBGbGPTMfCHCFATFsjrRvdsp2he8j",
  "key4": "2yNXgS1yFRCxLjrT4h6nSEQD8tQq7EZCyuzmUfbiJUHFBHyQnr2AYH4hQJ7kRa3NdPfAmQ8TMTTs77xVPjDVXzct",
  "key5": "TcaDuHVPRamHRJL8gzZ7sUJRv1sAW8p9HK54RA8zXqwXkjEpTqy1MiHLer98MiWaQSzR4TajvN1VjF2pww3kwQP",
  "key6": "5amr1RuSyrPJZKgfhmei4UAa9PxrwSWaVeF441AXYDS49KTYAwpzWKaWYmRyWvUVySPUw7izsYViNJ5UcB8YLEMm",
  "key7": "5uhaph7mh9ahH8BaCiTKzy267ZRVHFk75G8oc4duXcY25TRqxMZWKbVRFY8AnZn874YtYHzmVB3xAn81HbLNuzhD",
  "key8": "2PGcpSLcZ7kLsUsnbZcLSEYEpg595e25WYbMT1JF8sEhPi6kyn38EPoezAA1NspwBwhyYv1PXv3zhCEGtnVAkriJ",
  "key9": "3dvCjtGPnq6obLJDeAtfxvKHrQAEcZGpi6qPmKd7VuQu57nUenx2zoQVzdAbSX7oB1qh6TfdEx3KXytyFtmi9G9o",
  "key10": "2nJof161f14BqRY1Y91fGQa1spZCX5B6CNk6LvCma8xuS69zXaGMbS1ttPuq1wp7nWduwhjfd8VWSxwNLwxCJpPw",
  "key11": "2hvXhSW2F2dvFJ72E8YpsJnhmHuKQEKZH3yuKHFC6A1orx7v8T8dDppjFxKC1DGY7pypwqLGJimswAbFQd1S3Nii",
  "key12": "3TxKFJZahjxCvCKAui3nfa1LofzVP7dc9SFGtyMCEfByDRWPW5Lzrnb4T3z1wBRL4WVGuHeic8bp8SSfKnjcEr6n",
  "key13": "62FrV445V9NwBtqMpeYAN1W5KENgg8RiHRWCSq3d6N27Q2uodrzFz1noMUeQ2Bdkcy2bdtAgv75rUuqK6mxBGgVh",
  "key14": "LhvM5Lu7KUr8GFbe53jGDwgnisEKGxJxWygWCd12e9MFEymdhE8JtL3ndYkRFYrS2bx7s2SK7sAfs8ZQgNQsoS4",
  "key15": "2P7xLQeVJzPDBXdT7DjW19Y4xVEenJbzqh1SmxfmmBpziHW9cyaGyDm1FX2YJQgZnmJBDBnwdmQPaRJJ86dEpZsf",
  "key16": "3MME3jTaBzv4RBdFxSahni7X2CXme4jDrz4npvFFXE2txiwqcjcSjpqnhpa9VLj2bQJvUcavCVZBb3HLJdCEUGxX",
  "key17": "2EGXKwQnmaqQradQGSZr4XF7SySiAML2pw1CQKeViH9YctXZtooZoDyCdbQoiWqAnG6ivpVMyP732mux53JkFafG",
  "key18": "3dhBFB285PJ8M3zgJfo8T1mFFvNw1o7rMZ5co9cXWqx6TnsLc53UV5yN6Fzf96v8vckVnn8M31X57viQ1FKr2LpM",
  "key19": "3JG5MXHGzyzUrQg1MCuRhFhmYtkajNsdoEBx8zkMCCZWqkCkm1N1iyt7aBKKaGCEYM2QLNWz2oFRy2Zmhv1eJp2n",
  "key20": "3YjF9Xnw8WtABuWjwNSHXNC2C379PmAkURaEZcF3B9veEC7fYDa7w4Aq7JRvPWnJxdvtmLHuhviBGvrKKV9MgJG1",
  "key21": "5i35j93LrtjDyJKXWHudVDG5zef8pwLq4jmBwH1UMw4Qd4Hh7bKpPqyZLbaFhhZswYn6zMTvTjeg43bH9PDjLWzR",
  "key22": "zmqhCCp98Ffq1kwYCcpW9rsgFBbz9fmyxSYcNwuex6uvYoHb2QftJt3dLD38DScJYb6PSDhwB8yHgt1ZJxLfJBW",
  "key23": "35abM5kEj4f4ej5HfVBYsboPDcXY8nKAnbxwsU6FmhiVnbNA7jiX2h3sYxCMaMdyucZdBu2XdoatazgRuyey43o4",
  "key24": "5soBDMPLPd3s8UYQzUBXsEfqZtyqqmDRPtUg9hWFS3GGVvxBLr66WajY1jMrC6tQzZuJKyY3ZrBUdsAfwEPNimFk",
  "key25": "33Lb9bRLJ3pvumsN1dNoQutdsSuNMU77ZGQB1AjVLPni7vrgA9oqTPqTcBDu2bJo59NrKcnZC2MWcQWE3w2JDT2G",
  "key26": "4bLF4q9P5NsexyZhv8q3x5v4CR4icE7sWHgr5tZ4TfEbKaYZ5iV5VtWrdhiLeCQ8rQmh85TUPcjtC6T58G5EcyfM",
  "key27": "4juzVrW6wpXfy2qEU61To2gh6aHAWegz8w64vj8XqWyQc4Rwh2syZkj9PyusUCBEnxgjZCKg2GRYE2KmwpV43qXc",
  "key28": "28b65TjUqneXRkkTHjhHuuHJ3f9r6sSMEkTDvrBLYNoVA4Coajwn6ET3xRnX7k4yYaHBntczGN5wscUew7XHan3Y",
  "key29": "2dtjhM2J7EfNJgYenh7jnxBX6Q1mrH8922zNL9A9HDq7gpiphBHtwQoCptcQXyaoh3Z6ksT8Eyk9JUsAJYwxYtXB",
  "key30": "4BJ7SeWcomXiAdqK5oLiPHZXiGUL4s4Kh5ESotHEdiJPohkBeRuSAxBE2S9XgqWQnVJDwhmb3uqyE1gMfCnpj78b",
  "key31": "5734tGf1vESt9MR3YsZaG53PaymhZ9hkyaKk4g61yhM59vuQYgTqcwv6nNYHYbdE7m5pfd2pGm2SVBGSiLM3sDAc"
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
