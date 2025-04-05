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
    "35eZZei5BNBbH7zm1fxV93TarmF8Pbtxb3ketGehNeAKtHyG3YfZfYBHkccFUzJnZbtYqXJ3WGUerQXVxiMpFCMn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FMkzCun5jqYXhjZdXtEaFSpBRipqw6P8ghYGfPRzixcMTDkLxZnewNvH4EaP3kpRbwvGqWoX4JZPQMzDhDw2mQz",
  "key1": "3nSMhxV1KKWEoYYLpjMC6MUpcH7EURnmu3QheRf8uyfEkm8a4T7acLpPM1p9EYyNS9V5xuom4nXRqwKmN4b8wsJq",
  "key2": "4iyKx1M8MvMQRHxmd7M6HHe9Bz9LjkwL3wGV26ujExkvzJaK6PyrcsELPBxNUzMWqNQc54sGUxXu12mPX8sCNVN1",
  "key3": "TiYvAyjJid7JfFjvxhafMfZ1WbCsVy2C5s5sdBzRPJjLo1GYqAL9PZaC6TVcUKmNU8tVW6KyZhAp1GkuqKDvAkZ",
  "key4": "tj3Y8VuNTt6hWwggg6EmyXRRXfLnjyrtjSd8ptvG3n2RZXqKazPMtBcUtn1hthNHq4G6gXVKcwR4ChdPkV8evkd",
  "key5": "5JQFmpagpAngF9VtXPoW72G1sSAk2KYESfCkvBkAfomcER4Fdxhko4PTBzbgvXNnQY6MFgaPeFUTLk6qJBvzHta",
  "key6": "233yuxHtDF2amRCT1nE8bfaEHGN4EbHbx3h98ubc45CgQoYbN22VtaBCCUHMXBHPTb58r2RgukziuZYMMdgcUu87",
  "key7": "32iKzTRB2qGVYhgv6JTEeH9SULRsUutzixzNbZkb9htXW1jPKxv4V5UfLcDW3NNXozsW7N6wYKNVAwkPKFw2bShP",
  "key8": "4qfuySDW3rbvdZF1bsV4fCq1FWwvLjeSc2aAa7Ysjf2ro72AdKM2sYStxZevtE7RdfvYatR4ekqBniJg2SD6kmkb",
  "key9": "4khG9k9L5h5QbZevjRPbYspvnc7xTkANy6wmocpA2i4B1xrkC1opwTeCM8V5MRE5o6Q7wUJ6hF6EqhcNKHeHaUEt",
  "key10": "67E1vjvVbwrvPcgYRHSA7eK9F1B3h2dizdPwY2JyWCoHhw5raoh8dvmMazXSdspDQ94qGR3EFepdMFQpKsYPF52c",
  "key11": "4E4o1QCrciW958DUFJbm2FjEnfNYaJvg4arbnhs4jQXGFaQtZeAZ53kNqTCBzgCqFrYoDhG4RPueuZKrTnoTpzpU",
  "key12": "32xTUKFZHmCha7EU3mpZSe9e6kiCGrnGbhwBAe7juZECNgSoG5EYYna6a6pTDZ9uup7MzuePjAQ6dABCGSNrYCXz",
  "key13": "4KWmEhZ2LHG6XoQvseTHsdruZ1Ao6Nhk8cenpveKEZcmSXVD5fkyRhGbA3jEFGjHd2oQjLj68UUQLC7ZHLaNUA7u",
  "key14": "Gh9GJNTgXwnmpQD5MuuDUQRKas1CEQrgqP3VjARA1u7gfF7ZMt57wYRuLSBeu2vMWdRgVjwRcarBygJk8KLrydF",
  "key15": "3bputne2XffGXbo6FrTxjwfsDHEp9Ahd7tQzPiPSBYSE4SGSMMtG413nyNmMDs6PGgXH3aMpk4poJMidmsiE4Nz4",
  "key16": "3TwJj3kv2A71mkwH2ffHNFQ8AhUj2BxLo6AFUm3jLTe4SMn1rakzJZVqHn3kwNs4SdHtKn25HJnh34yWpNfw1Se3",
  "key17": "S1ByPsXDCPmMziKtnzZZCPiiechgHZUEzn6uzFE34eBBsQ51uStoC7hW5etmDkoE23BtbozenmtUfAxVykwezyr",
  "key18": "5ACLeGPoS6S4LYEHeHe7fdmURkpL4JqGj8iivo1rJhzqqUxX2ATNdTc89QPTG3egFj19TkxBswYB7SvmkakZGTUg",
  "key19": "2XServveUZAnngWT5kNmhYns7XfK4Cs65ab84TCzY5UUuadgPXzY1HAAq6bNx8HHLWRc17gNCr9ZWeiDrrkPFRcZ",
  "key20": "FCeUZsVtRxynLB6xq9U6KD4DBdgtVNnkcBzAgKSFBrwpezqSxwYsbwRi4S5cDMGDj2kuz2YSKKd1N4j9TGe8H3B",
  "key21": "2NGyM1N2jJNbFcgtwneG93dL7KWzgUZsRAusExizsCmh1fqrEVMW2wNoDBfWXUxEFYGav6xZMPUSWPPkbpvGyBpY",
  "key22": "4SRcEyhTa8xUZ6VXFHbUGigpdq4T4fiTmZQZWxbTxhvgvY36YfrfjZoLUkb6cPZcg2B8ZbeQdKbUM6XeYwkNm4s5",
  "key23": "Rrd5vxBc2fKrs9vWFL1n8RpG9416XgwxZ6adtfeNu2eW4eqJHkZtXVYqsjUYKCuYQ3MsYDibpUpygjyYb4cUDLD",
  "key24": "53Lm1gQbbNbm1yhmoFWrYvWio1seAzx8U4MyfFF6gVxgJFQWJPznCUxbsREqrQPZCnwfFiWsnzjb3brUgZTTTDjG",
  "key25": "2JwrRaFKwCAbUQUFQzkgHDRdCpxpKkoAKozVf7Yyx9BiUj7Nd3PXAVAEXdUrKjutxhCzcc2TPnHcJ9sVsMgL12f5",
  "key26": "5pCoHev7qGQJ33Z6qBVRCUa7QSAeHC6CadfU5Mggmp7KAVqCjmMwuXRbudSxft6dxc8S9wtCKxvCW7L89LNBq6ni",
  "key27": "61x3DQf4DMVYPFghqSnUwx9eyFkUs2cJD5Xy7ifBxYrkgeUg6nRRk6zCrTyzymeqgF2KAUhZ4J7jFV6BHJjyfmHz",
  "key28": "4guVzqu4k4WtyCMVUwUE5Vv9yDySUivwU6sxN2RZHEmSzeKh1V8BtaKk4JVDyaXVfUQLw8QNJyv4rNH51CxxE2hn",
  "key29": "25PWLHUwascrkqU3WgRTHPuuk1miiQXZmpCnVGArT6APQJMvmQ2hJVWtGECWb68xGNjxwRY5np4665bQEAXa2vUd",
  "key30": "2RXtGi5zuqdBb3534gHQs3cxir6Uc7Cfm3KYQduS8qheDzuNKSfvS2tpQnBuhAqkHPZ57fH1PXBETpXbF5XtRX65",
  "key31": "5vUNWQSmd7bNjGriwsjaQjeUDUJAmz157VVMdkiXC8vX5KcUh3V2R77RYSNVrxBHYpkLBWLzELhuWdVZ4XreKVBH",
  "key32": "2AZznV39kNsut5k3XL2sLefcA2mApLGDi1kp4UM6sVBtWV1oBXBZFupSMNT9mGzb3ycJ333mt1fbsKLmTfqPGvCF",
  "key33": "28MPoJ8fDgWQZxEg8mwvGmUiRfQgBW7hf5WPrmVs1McjTe3RzFjv379DEUVZYp4WnmL19W8pzukvWnmVEp7gZdoi",
  "key34": "4vtcydbTVpRL32SXDnMUJAQvn1CWmr3ypnTX3NTP8Qm1qBindxFuX64SkviqPCG261wtFdk6bsAEoRXY34B61sow",
  "key35": "2ViLJzQqN9WFVP4ukR6RuvVAT6asNR1XWTASraC4EVQD1Fy311PGywshCLFuxnu5GpLBDS8vRgBxBY9gQujRJjFr",
  "key36": "43CgHxFRgxbzAPWUHXrzRHgEPcpWGdZuYHdCNAASinpggDLQnT1WmqZ4EJCuVPw8eQ4i1icDnNYguLRLKDBHXRL1",
  "key37": "2WWbL7X3bTPrDXBvA1MAcuxVJESGXjSgBrs3Je93Mo8EnWtuSNdsRfpRCg52ZcBcVAKDcGwTgs1m9mhF2dr2guj5",
  "key38": "3SrniW8t16yxRatuXXYiGsjPwJKvWRt2j3BqsDVWh5foZ19nFtYFWP6fuaZL4gRHUQAK2LM6NrQtusZfSh8U82c3",
  "key39": "5fwJ1Be5vby33r8nwbf7RmyCpRZdKxnTS3W3k7gJPd1suguf5jzXUubL4opx7f5d2npc5YndiA27kJrk9x8tBUJ2",
  "key40": "43iJRZKw7FpbiRQuEmzrstQvxeooN64JS3APdXVbTxJQq1EPjAm51hDCtwffH7onZsDn27wegVR17TuQ1Qh6o2mY",
  "key41": "3zmx49YWXcjFU1eUeMkN5ENeRV84mE4YmMHqrFx7fCquBGhCRBY7KMykKRYErmsEBtq4HkD8Aegxdpwo5DxxtVwx",
  "key42": "2GHuTKxQqDYm5ybeCmtAfETr1PAjb54Aja17i1fF731pTo5znZvBmfXAU9mn2jTNMr1ii8szZcyxr7hEbaw6jTjw",
  "key43": "3fmLrsgQ4LYXJYjwxsAKxpMsGrmeh2RApTTsZ9cuQK25zLFNHgEFiM68LmC1Y7Y5qBF5Gzw3Nqw9i94rfjRtqFG4",
  "key44": "2BNeVtcPvW8gUrYzqLzqAvVBLoFqF9ZDyFfqpsLrLs696HeXkZrqcsUT6ozSxeCQS7G11WRdQV3kjpHhFyCCkqNm",
  "key45": "5iu91E9UzRZVFrtNtLUuWJFQbmnzpGDKmyhV1ydtS2ohDGR1Vyx8LBLqBQABr2ATxSMstFi6UccgmWQtE2RtnuMT",
  "key46": "3GXbA3neiMct8orSojbF9Aj2vzYNcexkMZEPtDsneKcRXZ1W3bJYHXqkpL78beMsfm8Cd3TV8ZQTMsKq1XA5tVDU",
  "key47": "58ieQnhFtzUSaqpE6kGmcSXPjAtzdKHkuhGBj7bVjGcqvcoFhBceaqWCeGQWzUDWMBPuwLpbj9cvZeNJoPJ9PDhn",
  "key48": "2hQHNBZFKAyYsFQQ6N1SZLg5kZhEcMnG5D2wBeo8MMu99e5pSSbrWKh2it3mEYVqxkmRKJynxSinc34QaQC4ryqz",
  "key49": "S6y1SwnsXgUUZ86PQNtVkmdPVezfXqCk742u59QX5WS7JQTFuMJQK4tokN4R8R1Z8HEPU4Y2WHs6kobkE3VxkoE"
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
