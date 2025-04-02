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
    "5bWe4kEzJhZcDjssGvFY1dDShbR7dUJF7tQuWmXx9Ur6QYdhzinFnM9EyGRVWPKz5p9V9Usy4Ax7JW6hGYAr3JfW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MXs2YkL24qLjeLrRGW3WJY151Ezz7UFuFV1LArA3GgQ6DrtGSa5SoZaHShCNkA2YDdsCbTmv4c8iUq5N9pG5Kds",
  "key1": "2sn9RLMktZyr8zAePTtmwmLaf72Djba2WYy2omGCbcps3PJSwt5W333sWKSZCGRvif8eRduTUKUnsPES4yohcGF1",
  "key2": "3nfcrqCYZnEq6i2TGnAdeyf5qahpxneYPrpDqcU9mDKrqJiyw6p16ycZZFKKE5wXER2DLxHdeHBBREWBsLDcABui",
  "key3": "5dy92aoB2G8ciu31G6wpYTxq67ozNNybQ9zWKohdUeMECPmNrKmnCJ8gVCLxA4KEbVmncqiN5gaJQi55HKpEwHFu",
  "key4": "5kjXAPdx5im1WbiEfLUH9mCyTo2tPbCZ6Ad7KkdPSGqvoxBda399G5xzPbTwEqQN2so3JXtFoHZ7Uf6gVgqv7xUt",
  "key5": "35ho1pNyQUPSu5ppcj8yMHC4UDNMEdcXDijKCCWJbSyTteyM3A6uANjnXm6Ndq2x6VBgCi3tF9kRcjYwcDEtn5R1",
  "key6": "2LoxABoMyEiap7JTcNu7uhAvCqKhukaFn5UoopebG1ANhGAKs7D91NUivyHHqfcjv2WMhszhHrpgfxHe2xazmSjH",
  "key7": "4zGVYeSCs821FPqn4NxMPBwtVfEbfvqEVQDrvt2c9bBkhS9rPLUGT6WawiUc9YVRKfKkvsHeDQ4tAhymtmKueWat",
  "key8": "3n5kFaDAKMJHvxWuGFt3hjTawzaSrMSsGGu4zkpUWdYXuoaeDmJjPAsSrYQrAckVpVxjinR9ubsbVBmUY594tt89",
  "key9": "ueCnGcXNmBF7Fn8giYh5jjV6yDCSKDMSV1qPSQBFPd3UJZanho3N8LzusRp46wzrqkYDzoZUvCa7Vd4M8yQujsB",
  "key10": "457oCghWMzAfp2WREt5KVhCDQSarY92HY9QDsjUREPxVWhrukCauR3WkVpGUDMnEQrSAbSPsriGkha8N3BFXRmx2",
  "key11": "38XtBDVocNT8zJvFtwRg3BMLK6914pQAiC9rpz3kAjQKBD9GZW5LuKeGETjsQoYtPwDWnaEvZndjiMhL7GdsjXJj",
  "key12": "3EfaCX3Ppda6ky6bEXWh3qTjrSZVUN4UgCuvgxiosSzi3JLfucfEKw4N82XKW2fmCZzuumehnDD1jWXNAcZrthSC",
  "key13": "5ACbZzggnGmwVMhkWLiyMhDWY9FKt1kT6zDFbtmMbgA158qno6aNtXNnQkwMsGKmCehKjiFqrZM4f4B692cpGrDj",
  "key14": "5ayQKBqKE2iUFpVeJkXVsMscxJCBAQqsFa2tDQpF2CQ191sbEdbafRozar3vWwpa39bT4DSF7rTQedDig4MWasuu",
  "key15": "hRy4ikKSVsLQAgayR3HvCBkrQjiNPxTkazRbjEu98J5rGBYydFz3N7DmbubuU9hLjRB8STV5kdcakrcZEv1FRFf",
  "key16": "3ND39AjYC2rGeaQobArxsgXxA5nL7MJFLXoqif74s6FQ3nbgEHvLKnDhmmwpnT2dUSpLs3EHKMuruyTfEg82iW5a",
  "key17": "2QjiEoPocCcQMswnedFVcqym5mPgq3qorj5TRQZACP8Fdkcg1hLL5W8JUz8XQHDUMgnxxoYX8PNNWLb9vdyhvDc8",
  "key18": "558kz4ca3GPbpF85aAtYKagoP6oRtcsvLC1yjqecHeHopv3Ssf1zW8hr7LsfxanqiUnRoHyDqdA2eZiS5SV8BqLH",
  "key19": "2RJaKyqQ2nw56yGuosQmuqc1dKmY4G2ntmzdwe72oNjJ6BktCLHReuohjDjSHsmRf9gFWtyvN2yFtXsLkKQjZHgL",
  "key20": "7PLH9VQFzEQRhF2YY1b7k1c6WFVcYRfnNdFo547VHKCXntZCMfCMJVJD62Uio1XRJP9Rtkpmtw19zjB2pm2RNqR",
  "key21": "q7E85Hhe3ATCPJXYyX7Z8NZrvLN9fk1Ve4dRK5X8evVs3vw4PuUDTJTiQm7bdJpG7gRZqcUQZYUMLoA4YV42LEc",
  "key22": "2qXu9NkQMYqWU2ttdDbUeBo7aQqT6faJjNjKGeAx62imDWyjE2LoayKC7Nu8dVDxV65ui92ZXiJLSXPV8de4uWPh",
  "key23": "AqJPeoEDFtyoY7q69vpyC4ymWgQ7SWfta17MhiMG2w1ZX36NazRnzZFKYvcW9otPZpeYWtZ6uUQktdjwCojAzsU",
  "key24": "qoTLAfcxAmSp8yFeTbEW6mF7Mq2pY7L2wc8dX6YVBrTCKvmQwPYjVCp2cDTzi36Vs41jsUhFp1zsh9f4vNQHZtV",
  "key25": "2X9fqmW6zpQo53V5mQKnDYGz9FpPTj2ZKce6PYCEP74MKyqwsgrNX7XCtjCamBmszjHHR5jgR1oEyDxSCP3ya8HG",
  "key26": "5Dh6o6GpksEitV8meYQNDBKnMghhJxynssGdtQrXBjNzWd3rR4xbzFKhdVzAecJDCjWKw1my924xPMeq2J6YSiuf",
  "key27": "CsLDZuBybHMTbPoG8c4xe9uQmnvaw9edW4b2J2JaTs7PBGPS4fKmaA23n4iHaVM6dkM87WirNmbgyFnq6Ce1FNJ"
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
