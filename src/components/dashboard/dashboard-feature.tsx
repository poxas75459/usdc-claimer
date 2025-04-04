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
    "i35dzeLGkZQS5T34TjR291DNfddwfu7XmkRnyihmmScweYPZnSHYf8bswaLLhdhKsQGAgP3T7sftwMtD2rzAYrT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36mDb2mSNbdDWmg4unudc9tZhLVc5HN8NBRnnDEfRSzPb8YLH2wapVQ7EZ6JVgDBqpAvq1fXAaDJ9HvY5FjcZBRa",
  "key1": "5wPwBmMLPGgT3FB1Umck8SYd7vEvwgL7WPX4Wu7b3hwU9y2HBizh4KybaxWRRBLef1kgs5cyFoD38XzxRjJUkMGS",
  "key2": "4nb9C653HSoz2cfpUdc6kcEhP6orKbDFdVkrj722DxwCPRcABxZkg9MrTMPNd7dqjXQDXr6tcJDNTcnDGKrJscJm",
  "key3": "52VYTnmRr8yg1sgcePhRBQFLWZDjS8g5zaY2EEBAhzfqAnxMJ1sUKHDSGEymMwwxEwEdnuAcjeEb1x5kijKmDeU4",
  "key4": "3YSX8kDX77PoZFf91WbkRLcu5RMAn2BdeqbxxLmk9N5NJAuZ361aTrkdtT3i4izDaHxgA8WcbRx2ABUExLbK1xN2",
  "key5": "45dLmDBmkvmN5S9RR4TCMVew1uihpJCFrftcQyZ9Sr3C44nffgRpSsUdTWyZvnHGFZbfEvdE21kDnyJHDm71o7zU",
  "key6": "5Yy3WhUUPxqKCEJnBsp27R3nKMeF8AKdEraHXSVjsTMiZ5CYBhqwQTtN4VZnARoFNZbnKeY7rivnpqCMS7AMLcyx",
  "key7": "65nnFzry2AP8BH8phBrFKyxma6qzj1zVZTx5gdj7HyFw182KPHLCu7zbGDCz4QRfEYEXbkPBe8CDLqhkvjgpnzJx",
  "key8": "5MKEiTb9VhbZxVhLMPkH4gQM2aUHLEb8psbVYjswKfxr1riymuNro966KF5ZfLMJw9dqD2TkF8f9ZNP972ZKisxT",
  "key9": "5Z5byCBeEzBJKVyrfT5SWUxnLFFMTaGka6Rhin7DBcPHw9Z4MMkuLDYwvBTXar2NX6SWJJHCL1AnxAA2yyh4oQMK",
  "key10": "VXnE4E9AQnPkdVV8n8PT3zKp6XYoJcMx1LA2d2ByqRg8pzAWz8VkymQrsFjVaKVNG5PWx79vaiHRX26QQu12UNj",
  "key11": "F9L73dWzdaWMmpjCvdg3LdMJ16qe6AU9KrZtb96WHP7wp98VNZPo2soBbrLB37hxUbaFv4cGToR6oATEhszC4wJ",
  "key12": "23m7pzGFP5Wz88h2WqJZ6MZqejK8fNfTovH8nd8Ekf4uDFXVxpDZp1hs89VouSF8Wr15sVWwNxumQenHQLwHk1kQ",
  "key13": "5V5oXZJkjf17K4p6jvL5ny4QabpjoetCjQJBVJRfHHDjnLGJXCqMtupAr6nyBsnh9Mot8obYpmyXFCXJU71kDGLH",
  "key14": "2SAcZ7umiUrEgtJkbNwrmAAWwJL3gqNoMdhfGK5QQwaxEqD8DBP5LhUU3u8RBhs3PbQtvZ4nWeKC9VmpXQWR8NF5",
  "key15": "4dP1K8JVV4JF1zrSriKTdvhpzpNY3YWDSwa5fBNXDojg7qo5vdZF1yQu8c8ijtcKLfXWx4nSG8Ev3esfhqHkXqKR",
  "key16": "41gjd43ip7MqKEbhHL1RwW38Caoweh3sZL36fy7XVHBg89k6KEhetydSkLLjta5xA3CbHnSrNzZGsTkDcBGUiY4D",
  "key17": "sCtfLPgkoVAp3PTimduNR5zNWUGwW8HjQUqgxSZiRGWd7jTUPFzafFf7PqdvNU5vWZgMnVUxTDKmv81TkKFfsqu",
  "key18": "32t7TmqkY9paj5sJLVbQJCPfM1zUX3vwfAfZxNauoTMPWMrd6uozauCedHRLVswvrDd7jNPezwR3z3M3WV98UmmU",
  "key19": "2g7JMJkGBApyA9MQDAmJafftMtNRQc3MNkFqtEtXW7YtHNswUYmzE1VM1KUUvh3g9pMwy9LQbcP2qRYydWLdx1Lr",
  "key20": "4S2vdWefDreZrA8fCbBj6n7FkcNuJJkknKJZmtzUknMAoeqTmvBCrnwS982nrNDNGFCdLqnEv2h5gTX6FwHx1F6i",
  "key21": "3Y5JLeoUaq1NZzRk9RQ2N1JPCLaB1HS87wczCq7M8DbH4VUK4ShvUvVfBcbozqzWnMeuk552puV9UiWkfaPArJgP",
  "key22": "4thPP2xgkWk6NjVUES8Ns7N6jkhDX1oAek5AEw2d6RCjKzoau37W8S5Y5cyxf54hDefuy7syKTQAACEruYWiNsZY",
  "key23": "4WrFXdvTCs1MZ1WYWD73doWK9QSf2eVfrrthkzmEkbjpJsfP4nBGjy25oKJEf7Yh5YBGWVVM1jsJKs67r94LsikF",
  "key24": "2oxAZK8e7B6dwUuL4131Hro8xmiWTN87vCPnQLsWDSzE3tbTrTu8HjYuzPW68XPdkng637Z6nYVsc596hpYFArt9",
  "key25": "KHMCYc2mrRX47D6v5zsnuRPfiZpkJuE7nWe9MAoGdEQmwiVs7Yw9so4xMweS842XcE9j3RZzntcmAHCojsondh5",
  "key26": "43f4RCBmGBAcos8dawPFbznzhCVRpVkBNbccYxR85x9XciBBxi2imPnc9kKruUBknGuGvZ1Kmt2GZt6FTDwwDNXc",
  "key27": "ohh6bhnXkBXSgUoCg4Aoxdr4fbyJE9oJsx2y55eRGiM332imUb6x6uRNTDqLZhow5g5VzKamFzkdCFsbM6bT6Bx"
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
