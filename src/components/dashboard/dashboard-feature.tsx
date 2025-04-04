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
    "2iLr9XsRedBbcPfT7TXoPY4Uh1xSUjFXM4nGXNqRQMk9K47yPXMyPrKmaceB5CrjMPHDoNJdB1AKTKZB9Q7KYM9C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ogengQL1VGRRFGSfbMXfXBCDhTkAmPuKZxxHvqLEDNhxLS8RymzmiHMwELzAPzCdWo4nFyKGnwSdCRDPgHnVf9y",
  "key1": "kYsMBhc5MuQ2wZvqmRPrtDgfy45zG2JSVYpWTaD2enAaVKYh4X6oVuxModuq9FDpZQPyetdAAch2Ev71qJMPz6D",
  "key2": "Zq9ENBHt6ynthprD5rnmnWBVrupvgNQ1KKKajgqka6mBL848YgKArLryeYH2oknp7rdX2hCLWLyvtCngbiad2Yh",
  "key3": "26pHjWFJPBusc7XHa2GkSWzSCdKCms3KqujQpCkKT1gNA7tqtWrA8KduAQC2DP1aomcMc54G833UsvTfXLaQMXH3",
  "key4": "3v3ozPcJm3eNtXCXRGA8yr6aozfJaoJ8hWUt6ynV7a7U2M7EMKBWxgsofVdxZxDYWDouAvzDyADwMd8KpmMEjyf4",
  "key5": "dcmqrJHsmMirww9wcoA6tJEhKJgWCC7aruBHnWUPtobTJyd4hQuZuRNa9R9j6HRMc9zVCd7Yonurg4QP4DMJ4qX",
  "key6": "2dMULV6Kmrb3vTs7eVvGrTMNpoAssMhmSgfNXg9SYTrYCSRU5VVvNKRGx1QAirNHWTYWxM1ZbQzbvLiVDCh9Ta6e",
  "key7": "vsxqE4fS5rFXALfkhfj4moNQJFv8z4AHkJWSn7wsQofGmMRtqYHyD9CaKkSjX6Fd726rHwXNuf1SERfwfyaAKdb",
  "key8": "5B85MEd471z9FvSFeBJrsTe64bfrA66ycbTPovBRWP9XBSTdKWwECPSqEGb33wQbXo2SQ6sc7mESDJQ4JuL5tHa5",
  "key9": "2UtNYyQeY42wr4voA7ZFwqDbRkxohnfe1bfaHy7uMkk8njxy7RapVvK9YviPZbHq2dKHQGtpUtR9ZC3y3PjgNkjY",
  "key10": "MvHp7DAGmbHVSRkobPH7HtAWeP7LmwNU7Xxn7Sujsq6xQF17SU5qVuWSv2JcaZ2F5ViMiFYe3m769UW3r1tB83m",
  "key11": "q2d6M9K2HByYzngNmLUSs2MJwnHmqcXYiUP3B4RiJKCn6qgpF4nraBtHMSq9JDaNizWTTHCRHmpjkcuMZxLJZTx",
  "key12": "3yrr5nHmYjwkVGwQ97SkmjKfXFWs29pEdnt2YC7kgPWNj4QpCSFAZBQwaokxy7s1LBjbZdHRtf96XUQhqBj3Vm5R",
  "key13": "wfNmGksaxfu9s6Je52GHgGugGqofXP8WHp4CYTHn2KekYAM15aiV9SpiVqg826Rs8XRu8R4bFQt3tP1VfXMYwcS",
  "key14": "5Uci2fbanCe7Pae41KdJj2HczvKf1HrX8cZQ6GhWq5byttdqwuNTWBk7knoVZT5b6zSxirxt2zNWgzXpYr9kouxb",
  "key15": "8yae9dxpwUJgEDNwiYDy6cQcPUaZ8XQjb8AyKVzi9YNDM5FPsTJAkYXdK1Fu9hedXQgT1fCLYFDBJSyUb3yK2oE",
  "key16": "4Vx2v4CWgLCYdWh7YrSzamuvZmHuWWdWUjx7ToA3sguad5ZGSQZUvJhwahcMzyHmKqTycS15CYBypxwuZJRKjBnG",
  "key17": "3Vjzr2xBQY9uq51eeUB656qQi43LvbcsJeXAgPN9RM8H1sBEH4ASX1MpcdMvLJF3AP2VQGW9Bin2qb7FyfWXN8iL",
  "key18": "5iv56xJMdP8wFthf7GsdKgk6jp38sEiDwZQbmoo1iDDPzhXD5LD1qFeU4pvrpFJh74134MGi8AQhuw12DstisurD",
  "key19": "3rzD4LKUDQuTFvGET8GkmBewxZQcJBCWGPFBxMh97NoChnA257Y4f3cjFECzBnyFmoKH1GZSGDjrJZ9Phozt8yso",
  "key20": "4qAwgzbpvu8USzm7PkLPrMshebS8wbwBJBbtVbr1afnceYdhKhAujonQ6NgaDSz1DsGH1Egdvnc8vZYao6g74F57",
  "key21": "azwNoK5iAdysDLChRoTqzQWAcWYRrBF3mXEa9mg5hjureEo6wYnmc5vgLG4tWWjFH4wn4hecGwPVJUh2pgkoiTK",
  "key22": "3vM8HCBjMFfRM7PMbLpVcFh1iZhwPni155m6LHmrd7Ha2q8ahSTBUj338VkSrAX6dxhpfZZMCCNBRymdRsX1X4Dk",
  "key23": "41qHvmTLJtgtz1tc4M8MjktNLsD89QwyK8QFMf3hXn4XkFLpVy7iGgu59jVxGYAAY7yYei1dHLADk1yf3kD4bps2",
  "key24": "9oUDtPPjUNca9KEc53NtvVoxJ13s9rDMXdYvSdSxjws1pSg3b2jRGFLEL6Zc3Mgwia3XhZ6vzLBdciDUZwJF2Tk",
  "key25": "3C74JraioQCETPwL8zR8q4R5hJCP53fHjac4Tbcw1n3mmYewCSmSMCdPf78tMaRiyEbmq2f8t76m2mzot4S4qfhp",
  "key26": "fhUq6X5yxAjQiywLzxcD7Fg5Z1DxizH1WbjLHzbouucYhtpUh3LXHwtxWYAhvVYmabYNeHNVYpa4YV9YBbbbr4r",
  "key27": "B4C7UhWNfGua4Bd3H4gZjJVvcKDsEwasoPVdxnGUspWAJ1Ykm2ExihUv9xS9NPzrFaxnL5FkgMHswT23ZZPpzX1",
  "key28": "4ffMogQkFgxnVGRDWXHfLQSdJecB15a9SiBB2dPcAbKuTYuAAvBGoZBMUaL76PEuf3Pq1RxeCe95jGoTS8bcAp5a",
  "key29": "2ZNz9q7XN8sb5sf8wsMeQafjnYUNbCrkUYp1ZKLzHyBoMsrEa2ht6mbcveKJZT9yMwvMJWbY4Q5WySmDeSzJ7Usb",
  "key30": "fL9rvGYBe4fZqiLhRPEUhqMkoJDkFoZrGf1oGZb7J8S33WfZpyXPKjJ19YwtDuyw4tekkUhSeZNEuj4uovnfwpR",
  "key31": "4vnegx9ddBzB2BoAMMvfs9UXpEiZb1oqjSGmi2EQMZyZAo6VDuv1bLPqPk17ukG9nUGSLSLF9wycGxPqVS4dGBHY",
  "key32": "5iqDV1sAjioywZpKtXEQhaFWFqSe7yiCPyW4h8zhuKgdDwPEGEdKmpuYLh4uBqJnXryJWeds9pPVWo6WDvKduueP",
  "key33": "264JxJDb4x5tajqqFuME6EYbdSVc9qCkBUUF7AWjgaBYkD4mKLaTbhacXc3rJp2s1AiM6dfNDiiMYGD2nDEuosfy",
  "key34": "TAt7RaQyPy83uG1wMT5LNdryFK3LbEuBqNxSRES3yWwCXqArAxahHf3mfX2XafLDdMbDyyGYWByLcKuhsHSFtf5",
  "key35": "31t9TP6EBpDQNsPjPMx5nAqvfZiNZNCPu34i1RpYdxiB1vuJhkPt56j9gcvxu8rBkzjsigrnpCA8vM7RSrSBc39x",
  "key36": "UuAFtSXMLbraBKUqJCGWnRWtqoJ4nvK7vxUci7kpP2YWbAsTUHK5w1J8JoFHAQHSxz2upJYGChSwfggqXsU6yEo",
  "key37": "XCuEmRrT9zDypbjpkMq4u4khd2s2rmRagN1DtZKfkXEFnXdvdRStW2yTNfFwAUiJVWQpjSJTdAxFSCwhUiSLi5S",
  "key38": "24FqHWhniBoXwf7Pi51TH9Z6GmvScEmvMKafvnaAPnGT2LBgdocxMheCinjXrhKcxpwEoyaqNSurA5QLSu4dDrq5"
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
