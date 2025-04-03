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
    "JbKsm5CvSRNbbMN9jFmFbVJ5CQUdebgqqVrv7JXbFxKiqZpbk4aDJ65yvP2bd7fKz8Cvtk8zMXFUraNz8B6WGtf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VNitbKUdDrymRkjP5W225YAtUFrJ4PA1yJs7q7U9LxvGmKHmu1VM2qoLESHisPKCLbPrgrK1WGB9W3ceXUaPCqR",
  "key1": "3hEeZtnHaoqybpHcG7EEAjJPvPVRTt94vBd3zoBKtSaBJ4dTvQzUJriAPRe5haHxTCKhjEeWQnELUhfjCb2G1qwf",
  "key2": "p9UAZiAWRjVpMKEptNzyq6CyfCNJYcwkKdBtTjkVudmZJq7Z8kLgKi6GJBQFR1HbAY5LaCCT6Wx6nNrsakPJDSH",
  "key3": "43eRBhBvFqcLXanZizmf3kGQKTzouyS4JxoUR9CaN3JcsJj5MJDResf6ty82pRy7FWPHXqpoeP6zF3dZKtzxBYqZ",
  "key4": "3Q4JVjvMNTgrsN8ddVwwbAzuHC4fo2H9NFXLZFBFTmRsUCDBWEHvgDt1A7vbUb4gRrM4GyLsCAfEjem5xhQ7V6vG",
  "key5": "kpSXbGeGTtVXRDyoexGY2gKfzdCr9WQCLw2xCmBFKmfxs3jAvWKvibKtWCXY7Ki3RzUcFV1DfMqeGU7yegDPT6V",
  "key6": "3aKTB7Vye3DMcRs7uMeexZgmCE3QRE4kt2SH3Qeo86mXDMy44P9fj6y3NxcuGtFdSRMzRTLNxtikVBn9YxS4ijpw",
  "key7": "5apbcR9TzwySvViVZnSbaeEqs7BnQoqW3U5HUQEDtHqsTGTMT67euwvj1XA2RN7XYSAnEbRzN6WErV3aMhQpK6Q5",
  "key8": "58AnfLm5PQ3T7xQmUVMR9fMGCkvu9icQw9Zeb5S3A1kz2bf7hYdnxKehfkC3MAy9fqha7TpanGPEbiXXtbLfrT7o",
  "key9": "49WDNEYtX6ZX7y1JMCTCkZv2ukJijcHV4kXrBPEXqFW1HNTJCPbYiQg3T9c8vrsvDZZggSNCAJqARuF5VREHiN7Q",
  "key10": "3qTWNrEyvtxXZ7ntGkJvczPTuYCuxi2uFbECNP4mh64UfhQMsWDfLLHD3Vor4ruYvH1oJ2jq4aeWBVnZGRfsCutS",
  "key11": "2bEDBatk6mek5RH85bPHcKiuJTgtD6rSoY6Tg59Zwec6fs4A6834mcrQox4EyW4SQr3enhdCULC2uktWErSPVxaH",
  "key12": "26Qk43DxHcAJCCrnxhZeqixeueLvYkGnnAxMQubg5eTZnVDPSDHv7KeLr6iKPFAcH8eruwQEPe14Aj1mPKsa2Xvq",
  "key13": "5zUPK9qj1TdUy39dnncgTGAQceMUT1moQJ2zqdtmgbxwNN8eRPJC5aqJKzZLcgkxxCoD6dom3NXDL3SbHFmBd28q",
  "key14": "4f9tvtS995ggUtjfwVXNQizBi9PQkyELbj99xE4kU6jA5UjLRJJ2ti5sejczVP5JFkp637fMwHJwYgCzshNoxois",
  "key15": "JMMMWPkXCxN2HaxZuwBbrqYpyk2GkTc9UMVM8zUJ8M5ogUd4CiefRiHujhtu694TkvXD1KxQDjLTt4GUdY5nsRj",
  "key16": "53SDFFi6mYrDepijaRAXvQkRv1ZQGWHCd6SFLytrtHCunewuYwXBb1wSpnmcTnuwifzu3hKqpSdz1t2wMrjayco9",
  "key17": "2DMbBovDTswijkJA1hokMqdfqZRFbK6LmxLD3TqYfjhduVt8w8PJ2NGFeXkN38vhaCguTJqqsqh6BMntVciRxqjd",
  "key18": "RSpmtJiRY4UPdG7atiCGQDKZN1NKd7FhXruZfBbBisgot4wfW6jxpTM1vijoD3Uhskywr5DF9y26Ce8iRphByjv",
  "key19": "5SYvoPgUTnHummNQvJ3Munjw1HrkiXqWdhexFt6nYSvbR4xdvgiZBiiZPkMprHrwhpoUeQQAexpzcvn7txj2CEwk",
  "key20": "mW2ycfdaxdEtTfCdDTe2GRTQUfovmiq5YDdjHUm3zfUrUsK3aMR8B6QzcPrLifVFQaR9sMS5N5Wfa7cwD4m6acg",
  "key21": "4TVh7zivsGWWThFFouSZLngDMRcyCGZ8dj19vgn6so6S3dMuqWXyvi9mkCr8vNg3w2j4i7M2ceg2c7SY7TLkMWMr",
  "key22": "bAV2fMHKbRWLWcS4FpaJ43zFiDJtZaNNe8JghAbxCEvFNVzgKQncbbkdGc12T7TxkixX7iUSqczkyhMGKtPaDZC",
  "key23": "5Sy9ERqkBu577RnsN59b4rntN9i3XX4XZbBkA2TWXiUrTErw2mjpFXu3CDT9kes4SgNPduxgS7rbkin1GbRL1DjK",
  "key24": "4MjSfbb8ZYb9NwyjzaENdGbrNVqLRH1WeavhSG1wuASegt5Fryy3fbPwsdN7gECcW6s2kgqMtHQHUnuLm1pJgeBB",
  "key25": "3ScoxgjNqAnSoX4HAiPYED3p1FTxFD7YdfD8CFnefjc9MzSXsAsUW9sEniQ8V4MGT42PdVb4KeU9mpB8C4ApVTbP",
  "key26": "2zdeHFRbkdfSK3JLjqtQTnHYmKTZHShisw18jbXkqh8n3eAnjqUQDfCgP3f5EfhXbQPstbJqnRYAzKy9fDNeFT9K",
  "key27": "5j3dJBNnch9iNwG8gCybVyDkS8tWzDGRoo7k4aKdhpD9ua6ZYAQkL3JjakrKX65rcFXFyjCef98gFzDThy61VFY2",
  "key28": "5hCLshBNf6hVMYxVx9CpTP62Ggi7aTvUzo88Tr9KmmUK3PS4swJCXjs2rvdmtk4LrwerLkPrdw9mCKoz4jmrjXx8",
  "key29": "5wwo9AcweBEfN7RyYEoWaXNcf7HzsjRRWbDtkwrpUgH4GugtfiGUaHprV8w7ednd6j2mTtGGn8zQxhYQNY5FdNdE",
  "key30": "5QuecHFUCzK1i49z1KyrVaEnL3Fi8siDcchaniqpmG3nyvRFcnaVwcAb3qLoCB4YMUgparutUHeKmLTAFfjS4anW",
  "key31": "2unsVZBZQqb6qEFWwHQY4TD6dppPr8Fo92HTXTUokyfhS1qGGsgL7E6Gw82Q5XN19s4cqouyJ6DzHL9ZQqi947JY",
  "key32": "5RRpYsLQEB3qV5TTQgqbfhf3oMgVTva62wo7iTC7seyY55ihPGMotabzJY9rdo4HBdZpqrNn3VcL5gV9GfpdJLSt",
  "key33": "4PsR5cw9TtfUnbXv7en3bQNqEhscbdCyk97ddou7WrKaNzSn83fa2juRMLWn1zbywKov85133b6v7HR7M3ZaGjGH",
  "key34": "3nTnGQMQuVZ1BXkrX9kFurQsWUQ4GgmAAcscoYh1c9i7C5EeTCzpiXRJxptWbsvze8A3kFBKTNC67wkYGwBbXNVN",
  "key35": "2cptfmmSpiffiJ6bYRGNtffKYyvu6PSJQxcBe3aVWLwohBSdc7uJK1586AL9AWfDww51S63zZMizQG4ieGkHWHaM",
  "key36": "28Wa8RZe5qPyTmHKyuYkp5MHmRccpEBTRipLxte87SmXntiwkCQbFYzXXJmiwApACH2b4ivThHrjZSnZXPCNZbdE",
  "key37": "4cAAKDZ7P6fZBFAB6Ku1S2DDGtW1qijzRUeEQw1pko2AH23CJk4yKRjWB4318z51nC1Z3Yaox7pEQhMaTcQRM195",
  "key38": "4PejoeBioBZnjACYsGVQQiwTmWU41srEbEm2txZ4fnADUDYnhsxaCiVHsvJKLoQyV44CsU56EML5HrHg1EAvANG4",
  "key39": "56VFebtYsz7HMdoQNBygsD3xHBG5aQ6vAX5GuqWymNZBgbCpbZfrHpPgxgMydudtbGgPBmZbAGge9tqhRh7Z9FN5",
  "key40": "58BqtYMoDQZdALQPSRd6wrXA23GSeceWetyREAzCEYMKjGaViKuWSromfk44tgMNzUgSqXqZKQVFwuzo3dhejwo6",
  "key41": "2y95L8LDZTmvBmZpHGfEv48NWR4raqq3H9MmgnevU8ysvYo5n6RUyngPtzRDfiwRnvySH6RfM4depWdfGzoSRLAW",
  "key42": "2dyTbu6RhTD954NDnwPp5eAcum27HPc8NLftFMnVrCDWEARCMjX4bD3eiNAjVd21EhpFGZhyezPSF84nNCSrYY7u",
  "key43": "4N6rUyrzwRk1F7jfUpiGpcCufYQKtTtrw5yPrTGbf7xsvZMgNBE7cCJ3tW9uNXkoAYZJrYHQBxPswS8EDyrXckD6",
  "key44": "5xy6mqvTZvQHBTRGkQ5EnFaaUmipZST6WsDrjE77oYczdaEHjxfqaEEJgVyvGLHXT6twRC3spRcViho1UX9RA57P",
  "key45": "hw1CuvzXQuNyzmqG1wudoJCoRyunysPxt1zrgKTXZ2jgvLFH4zxL8g6caPv6Z8ps4ydGo5bdyEfKSH1ZxaqimSY",
  "key46": "514qbADf3hQK5QnTHmwbgpENNNWNVHBxUHBzzuZtRf6KjWVC9yv8pRksG3kUmEij8jneV6jXTL2KTZCwmEP9YH3m",
  "key47": "4fng5RYCH135q7Z1AFwEUtZwMtx9wmkQmFdtJm6ZVfj6gsyzNXNztEbZq3yZaeWoxXi4iuMviqrVuT4gXbYEREgh",
  "key48": "J5ptJnTNRTzA7mPkqYcSiF38jxiYwccniSZtAFsL3uakz7j5bydxftBPK7CVZWahFY8QZeXAdY2X2RoXw3Lz2o1",
  "key49": "agJmp6Rwd3fR5Bk1SStHJL7en4TZYMs5YSj8FC773yYU7N1b8jUn2yrr97RzEoKK2Eg4zqBGKSUhvS5VrefDY41"
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
