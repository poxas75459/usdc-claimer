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
    "5rfWrJi3YjNjqwby9n3pPPqAi4CKvkCo7qXR7bQpGtrAU9V2U63WCkMD3eQAe5m1vyQshGW9cJDXcbS6Sq2pYS4o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2utZerpesRNfc9nFz3j7fUtof1vkFZH59xP8tuahxeyd3rXCUfk5LT2fTqjt8jR3aFghZdot8MQgWuYbuzASdzgy",
  "key1": "5YLwZFnvsRcGuQZKvsdZLACpqwfmZgFUg2NgvAbtTX8opRfCj2PKgQCuL6yMVzGTMHr3oNW9ka9TcznUc7pS6KWs",
  "key2": "28V9z6vcXsKRfoxR17gTYESU6NfZpKEk36GPaYhRxKChr4Lkd9yyWCjAPgiLbjABXjmVKTpxojDzp2nGh4XeFe1Y",
  "key3": "1Rp5hQj13dTYNbNemGTp3xotYTUVSnaZZSoBjpUbSRS1txjRX3D4Tv2T5xSbQpLqX2ViiZKM8UAVHXusfeQWfk3",
  "key4": "XPQrMpCN9rRxqLU1wRZFLQ2Qy3G8NrQUWpWcTrPWQx3xMYY69DiknUuzxn8QCymcZyYpx9aFY8Q92YjGHQRjgjX",
  "key5": "3KDdUMkYmC57sEtZjUh6nxsmnWZLA6yfPRWqYBQ4xkTYnqDYdKdGHsBAcQneuaou5VRqujL8TQp2C4emFDpiu6N5",
  "key6": "eRvKGfeQPyNzfn4aP2eJQVua1qw3dYCe47sNzyGp8o3YYzpXA9WFNZrjsZbYyb5cKNt8Y7QGWwA3Sc7xpogezBy",
  "key7": "3ReUx99STtzBfrFVeNmjtvYNtTr3nhsMBZZ3BQuY3KfwE2o4wABNkXmiacxca9AyhBcTBmkdbNwKFtfdU2ntSWhF",
  "key8": "Zo3AusLYmRbCFeAA4zhn4gS1K7Q1PQ1uQ1iPpQava1vtWns6Ek8qwDQ3d5X6MEiRsLHMorFhy8nTCXUeSBuF4mo",
  "key9": "3x1ZHQAg7jq9W4sQLjLF4MZ1BAyopPfwNjnCRbZ52rrVPTB9pzj8AzbZa2XnKyLU3Zro4pGw8bbBENimJeAD63eT",
  "key10": "S43JwDRGEwfDeF8AfwHPwnsRCYdLJNNwbNzg3ERfVbNAahC91x9wxw4GLZf5i5oBDNcFvcPGUwTaL3yiEepcx1c",
  "key11": "3X5HyX1xACc8mUVoaSfscqRgyKpM22dJFZHCsMRAndQ46a7UNGF3ng4cdjbbVdU5Pmy81WW7BveQH8wwU41o217E",
  "key12": "37AXckPFiUErpWsEUsGJUKaLwuPoQHiTrKBJKnhSgttUyg7qYtNuGJqKyTS7BiZfxYRSbccExvT6HFKztsngFda6",
  "key13": "3uY2iqaiH4jb5P5AWwRRhjY8JaUM7fPoVhCXYN3ovQkEDC695BaMCv8h6P6CS8kGJ2Y7BA7B1mtP3B2ZW8d7afnh",
  "key14": "Tqxvc96ECAF2pHWTpocrgfqeM1cSjJkxPa31pjvPmNRTYgaqzLt4PpWtR5Hqdo5eDGdCNPZEPeksMsz7vV2NGz9",
  "key15": "JP3aFLniLtc8qnzy8fRe1qWgG35fRATSqaw72GKQBW7VUtwX95eY8PqBFKcUtVi4dk9HZu3kgGFvSxCaY92BskQ",
  "key16": "2EAAd91uHPV31z99aN7zN45j8NNP1owurgd2RWKsrVfr2ssaCMPRF8PkSwcfUY9c6RjcSzNnV5MxpfnFm91GTudX",
  "key17": "3UJ5Y37jeb2wfdzUkdeyKCCzvRJfv9xFv2ak98ygY4aGWofmqnfgkPcZjAJrhG1hjBijtGRBgqkN15SkSfYioX5Q",
  "key18": "44AFsg87kAiE6dyWXudj4Hg7WWogTim8yYwn5D9y5NpeZF6nqdjAYh5d2Ud1sAfyZoWPkuvmVCg3Z78hni4L6orc",
  "key19": "4giqnXpVYnRAnJMQbMmTHfESNPERzRX2nmHdDJNWLjDzsu9PahFRNYJk4DrUN9zU4nPszd5tssyQUPDMoKziVPbp",
  "key20": "2vQaNq58FjDX3NakNxPZUWPc7Ny6UgHFSyXvEHwGk5JawhcAPVEGqQj7xv1xV6Aki2eiB4owRYhtAbQ5fhZf6AY1",
  "key21": "tcZCkNCsNfZihVU6AwiK9akm2sQ21zr3RtftApf9o9Y9PdRHu8nmQpZDw1vqu1ZqjY48BGpu1YYQjCbVXa1GrfC",
  "key22": "3mbP9ro97sKqR5yoLVw1RuaEVLy8CftzhVynio9ZYsDVPTJQ53CRB8PMFD6yS1X82a2VEp1xJ32GwW1nhvy2rLYa",
  "key23": "5CU3rv4EbYS1LQUonCv3rT1wQCHyh5nrLiAXvaWiPCdw3nTtvA59Nf2311zpFx41ePGkzBFG8y2mnFqvuCEqDjCb",
  "key24": "37Re1dcPYQGYZJaKhtGuxUMwb4shY3jTNRrLFb5pjJiu2ULczksQauw8upWTWdNn3X1B4GLNKSEFXcrK6x4YpZH9",
  "key25": "LBbyxYMPz7bBE66QNpiH7kkK7LAUCZSy9GSs71p53TKPiaSfGMBW8omoTgjQbh95zCpFzQtUNpanFLYqTeuMBh2",
  "key26": "5mMwhu9sJ2rxNdFYTnPrKQpWKWChzga1zpABj17x2iCN1zpYnN39CuGyJs2esdBwJckGWkuDXZ5ErFjuEkr9Ngkg",
  "key27": "39gP3fedZdUV7z4HUYCPNpWEoRt5Wz12s5RcxeYdqBWJ8Am4bDngfsaAErwfzjwrtfQPUyLx86caSaZ7zf7mBvdQ",
  "key28": "4iF6TerUuhpcTwRM3ToURDGDLR129CVCm71ChHMrwQAx2eajfzWVwwan4G2kXYaSHicyrDrx3vs1sks6pXfymPUt",
  "key29": "2Qs6fTSaoUF6mrhqr5nCvcpDLaTJkU3gTUS4t5eX34G2rzWkxHA4S4uESm2yMJjGqS1RwKDGueTBSPxekUav7hUC",
  "key30": "5eYBBv1XzdvHStuwvLsPJshUMrBHKJoQdArrLY8HEKaUNu5EpPmPQkrS4v7zWF6rtMM6oAQmrb2nybecgonZHsnn",
  "key31": "2bXhmb7WjUoFV6ZXfFekvRziwaDYiWnPDWji2kLBMfASn2J7MtS3CHg45iG8JJCPdfE6M9ytJVcwepeskxiUfLtv",
  "key32": "imUUSmga3pcmiVVjiifmfjUqo8GtBJ1zc82oqM9wfS37a2YaUzpHsDWPeX4pdogQAQas9VHS2mztxu8sG9Tx5Rr",
  "key33": "LvdsHag5uiqzh2r1wB8XgKj4YcYRDSnZ22CR8XnwRMTyToeBcdN1Bx3ivpy9iSZ1J5pNUTiTJ54kcFuXzm51KYf",
  "key34": "5RSiLVAGT5jBePv4PUxEJVDcbSN89iGHAiMakphBaHs1Hx2mJYDtPjf8T5DZyr7SmFjGRPTMTjsqqjdT58VAT4x1",
  "key35": "5njKZi5cYmwHfGRGj1TQqWAxueRWLjic8D7NE3amige8C3bnZG6iXYwEQcsMZsB6aLnHtCjTJNawC8xRQQU8xGPw",
  "key36": "5U8TQUDyH2f7LQXypkL2PpSPDMXiW178TsLBHaHCEBeUUp65xFk5wath9jfPNrSqBN9nzR6hYfhS4PXTVyewpk7q",
  "key37": "6jS3A86dSrXqPTMT4xa1JL5ApoywUr54DE1tQioZeeseWPGN1tTg5ZELo85FAGwqp3yJHFwWCuwHYcbZBPCeR7c",
  "key38": "5jvdP1nFEebSaMCBhPRPabaNk412uCdSEAaAXgfrnBP7GE4dEU21uDaUVUFF3tH6xxFed4ghzjTkrW7cVQPdMvFN",
  "key39": "bu7g837h8i6eXtgtDcxKddqUaXme8QZtUrBLTjMUzL7S8CEmuQdRzF7qfHhh6FN3BsF9FaefK9jY7qou6bbD18n",
  "key40": "3Vfsg6d3HRJF1M2mE5ztFBGnusVZBGYJQQW11nXU6qZPmjaUViPpf3NcD8HWjPCgLj7u7hwmuNN7NQjvGpo2itrM",
  "key41": "KNYbsBJqmNtR2veUcsM2vNCokqPZdsAQrQj3RDtXGBkxgNrSaBjbTwyKHftNr4NTVLacxjiQVyJdFn5kgAXFkup",
  "key42": "THzATMf4KrXCPLXXQzUxYqUoJv2gQ6vUiPdHwVyvwR4d6Y5trVF2CtEv1Ber8sedh5Gw9NKU7U6SpyzCTeujtyM"
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
