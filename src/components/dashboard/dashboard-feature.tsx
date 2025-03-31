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
    "2mNLax1g9RefWvBsNPbXiQ1Eyz4PcrBiyTtFFNTWG9Hi1NhxTmATqmgnXmewUai5Gx7FjMccwzrSqRtx3YTDqaLX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TccN8Vrfnypq2AMxRbUawhq5fsaahk7LRAj1ZiP1MBYXvKvdWttrkPww6xftn2KfXwSoxSxne4pKawoRsALdviF",
  "key1": "59pMyY6qSzQiaxLMhtSvAS2Wf98pSbLPVwS6jmztFFnio4EnYKdeYbXQcwwZ9U3kBoUmQFovt8d9jtkMkNdSoFCq",
  "key2": "2LssNrBMgntSuwwQTx7GM1xkJUs4pkFJ3gR4Z9JPWPLgXMxqUb6spV4vzyWtBDNSkYfhuVTVeFgHnMrQhkhGAnqk",
  "key3": "D2YW3dKjxxrsewSxCw9BqVHmHzAim7GgfVEJZjygf78n15XSNYAiVN1buaqiBBVrf5A9G15tMTR3UkfCNkfk4NK",
  "key4": "z1CE6QctLsF2fxGGTqX8B2fHm1K86FAr1i5y2G3AqdJjbnzaboJip4MC7jnZHe6r6Fy4kZtYbHAomPk9mXnnteg",
  "key5": "4n7wPezTrvnb56dc5uzrXRiJDb4humi747wmpXa9Qpu3nufc7X4eLEytHFgvReK2U53J6fcmtFbMnKKNXvMPveSq",
  "key6": "5qi5PA1W7q8N9i5fMSS8i4bEEAJA8fivSpCKpN3wE1YcYS5kVCXKEUhzxx1jG7s9zZ6ibaKo1W48gqirC2rZDsng",
  "key7": "bJkV81PFRPSMR48AM8YW8CbFYdDKrJ6n6VMzLFJnBEMUhHYREePaTPx54NQKdgRqTomGq262DuoNMgQUV7LRwWw",
  "key8": "38FMt8wH62fVzKVXcAwjhznJ7f2HnB3PfooMMjmdzrrMrLhHmFAagaixn2XBK4i3CpueoApsfUFwZLATcNMfERDz",
  "key9": "4UGbf3deH7DcFYSEcFxfxwvTE53LLvr9MhjRYgfSftPPoYWTL1ZhJoDZM29rWUKTgWLB9eaSZar8dU9P7risvPSR",
  "key10": "LEmbS9eRg9GHaL6XQLHEzX4TQvt3ugehSyEaMYDqQR3YVrYzLp6HGaExkqP11h9TAhbXn2EZ1NgNJ2oDYXXLprr",
  "key11": "3Erv3JbPM7PAtmLYR5p53tSzZFhg19Y4ADsqvAfevqUpdHHoUPBmDLKHJVE94DLmUaFGwcPhFEA1FjvcpP1fRuZ3",
  "key12": "hAYoQ2rxocNwzcPNg9mrorJP4Umc8PiW5zZZuHy66FHfhtY8xT9xeEQpkiM3gwgzXHq2kR7NV7UM8gX9UWbgMTR",
  "key13": "2r6DdNyMK4y82pj63oxoKxgPjWUdvmimKMa5LWgSkDrpFGT8qAZ5U9bfSt4JjcYfugBedxnDPWz7Z4WmgW3SjZ1m",
  "key14": "62e5YqwG69b4dixNJ22pgLu2sqJMfCoJV8fs19t8Did7jcVxBBaD8mLHADzv3KytFhqjrrJmTSEDrD1TgGrc1wjJ",
  "key15": "3iFMpnLtAoVvoXHt6wE6GJYNngepqDLTWF5XCME7b8TwHycH47bbhuM4Xb5247zmCm12ZfDCFJJzy5zyYYeEEoVY",
  "key16": "4ETjX4x9CtQyLPWAP4AUyHENNGvdfKJz8z68gZY1KNLVehgzBR7T3GqjSqYsccoTvkwo6NZtyPY1obNRk5ianPgc",
  "key17": "2GpAJU3FpN2h9eJugjgXD1nVnWGGW8tRvXiVqesrMJBntSdhZt6u3Vi8DZt1XmwQfVyjuLjcvrvDvbg3VnLH8135",
  "key18": "9GCqkqipQnejejMFwg5PJtPi4rfjsQeaH5Bh5zcweGDYCm1U6ehTHaHmC9wzofyZ9MrJTW8HQapwxWjq3qX2UWv",
  "key19": "3RZmpzmmk2SNqchAzwn9Yz1oAQeWJuqfkTvUqdmcetK1fo3bQzve1xuCeeuYGRbuxHTWzEi8sYSF3npPYwW8fNty",
  "key20": "5cyAEL2VqiCYja5epYy8iBfZifadYEnGRMVyELKk5t5ZY27QN2b3tXzd5kuQXNV4fhkkyEJb3B8TiMK46oEEaSZV",
  "key21": "3cUtLrnsfH6RJakkUSc7z251B8B2kyCQcgx5hs4qLAdkQbr4cL52tvc7FsuaAL5UtsL7cmxQ9vdFCxnsX9mNfDew",
  "key22": "3wTTgAtmwTQ8ns9nsmfQTuDFL1rtKe1Nn1dpE7dT98tctRvy3dhNcsgghhB33wxR8BFEwwN3FK7vemFyQv3hm2p8",
  "key23": "RqNrQkYEF8Cd8paMKm7bwizVj6cuAeJpV2MXZXV5C5wr7Uhcmw82fLn3VYgdbsspruzpuBHdufnS6HwuwF2VzFB",
  "key24": "2hqucuuZQQSWoSBnq9xsUL4HokQqfqiGiyCk7MJSxTWdi18L5CQt1JzUYeP9fQxNEZwuGyy3brMSRijVKdpNHAxa",
  "key25": "5hn4BZ7DQp4EcDx16nxs4uKjBuCEYcTfwNGvuyz97wF6RSBe61bcyTQBEGmE6PrVHSZesKZgWCt87krZV89gkkRK",
  "key26": "4nR5f7e3J3cfZckNrfMzQyV1NRsvBNuAV6Efseo9zp5ubev3tcv5N14RH59HRFW8KH7R699wAgfdNgJXeBGpsKDF",
  "key27": "2myT3ZcjK9vRgs862Fjypjp2YhXtuF4g8t7UaxaZc4iBS8Fnx9VLbdmrEzuGPcQFohVTT5iUzhTCjRyb2LwaLn2K",
  "key28": "4PntUuM5xQBjvbTG4V2BxCmAvDUdabU2K2XcQh72aodmfgpbDEu7ThK3bCsgQJgCeUPtekWSSLaZsLHXNBxS8pWE",
  "key29": "2UpejHLyfn4bxTvZhnE5LRAUM9SWLRbjeKAmkCZwhmxjqekx9sxWfBPpqdVUZyZRRGZY9mwpc2ctmWjtMKKTuC7F",
  "key30": "4VsVt1dpp3ocj9NVFNLFQQ1t9kspTNHbHaxhzBPe7PvRKsmMLWmLbon1H1mTMQthSk83LPbn264n6GihDWXRzM9L",
  "key31": "5MTTVYCnFTnrEEH8eQeE7FpBGMVLoUgRnjtvtPD1AkkW53ghvCGhSDCXEXnsysBL89tAveuvhCD8PCxZYrG5dAg8",
  "key32": "2BXafhhTm8qjM8Rs5EgWaueM3jd81sjfKuwe6YiUviPWZf24gQh4tvdvhyfLBW92XqRM6DMdEy5nu8BrodZQ6Kxm",
  "key33": "5XrEoM85h9d9rbUXWNigPv5p9V4Nzn1V5gBV5UhD6bEKHK577LUfQs6Qn6JFQEMDB46Tu7JyyZBe9skSs32NyCZD",
  "key34": "4s2At2bLzuNxXYXBEiaHpJrTPZHgAxEsMJKPJxNwrxUi4PhhJJs3PwMy5vpJWJg9mC9ZwnBasGqZNr4AtKkYSJuB",
  "key35": "36SCk37cPWVyUojTU8VNt6Lrjf4xF4oDo3tmZQhX5b99qvxpsAQgKMKN8ocEnqfaxjt1L6ZFirjvQKjXsjR6txaw",
  "key36": "23JkzkTb4fYnFJHyPTtjpE6MMewPrwDfqE1dndYMhYhVeMLopMSDn5NwRJ1DnFtYBh6Ne6N3BhDVt78aQdw6Rb9T",
  "key37": "35vy9sMMHa33YwWXb6MYFwemLrrGBRMQL35TVSctfrJXE9uwG1i2Ns9eGEYx2Zpz1x4H1SN2KzLv72FWEaFbNLjP",
  "key38": "3tLfYvtmFnnnLcJniYGPs2ZLNrKAVQ2MQwQMqQKiF3sdTy7YP2YTbfbZb18f6forEUGqMNgujbPM3E2Rhf67nUzd",
  "key39": "2NTJxUkLxjH25JBXdRGs9pZtqpwDpuUFSSxScgVf3boxM87Vzsd6g3s9982M6AmSPQTKEePXqwYiGzVtsrLB9oDc",
  "key40": "3nvc59HGneLoRj9DFuZZk7TcUfdjjNhMMiReij5cpDZ5rxk8dhmdHykrLk7W1iDSis1UeqZFNFttd72z5RFWwiwV",
  "key41": "5wFoWg1BF2ENEunDdTU9eE4ommWpsuGkxiexvSkESr2v17k1gcAsZJ22GYeAHVN2fbNeDBTrMZSBwQwuqHoEn4wU",
  "key42": "287VGWGzFCmjmt6hQ1izkWqxuQEAYvF6zndZUCUbf23PDBxUJus8CgoVesdVmaS1fxGGM3Z21GSshydjumVvcy1W",
  "key43": "3kxSkXvwB6Fztci35qB4Kor61P8mJkzGam2ztvRaaYWWDbFs3ztmRjWituM7tVN242KDosZTiMfJkuZBiMx5TMqC",
  "key44": "3FdRpBSH8zHqUgfjc3mf6a7bnyPSZDxtE7qe1YzoMoDE6TganaVWhR3o16CVPrkgmqMSxTJTnbUA7kUhoFUWbHkT"
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
