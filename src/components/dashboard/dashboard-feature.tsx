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
    "283FF8dyjWLiooPCLE3uRntnXG3HZ3hnh2rvo1NmsEP287vPKMmM4T6pTCGdYU3iXMw9zoxpwJUGWsb62rSiu2PE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2F8VtTR6aJfy6Q2n99TyKqcXV1wN18iFVoYQxzxCDq5tcWUDSKfVCchdyAGURRXMWWZa5rtNNpTBfBtJG4yGnavY",
  "key1": "4As6CLgjz1gsTWrjoqWFxAMt2skW2fofq5nagrhNr6yxFx9jUMufoDqVCBYwrzBZ8Eb16CLQmLAF2Sx2YbBdaE5q",
  "key2": "5QigQsu84Ammm5Kxj58TBgSUZsRRHSsx7GQuhbP1z1WE2531fYNWMGXjwFUwb7nbuyh3nvNw3VJp3xKZyD7L6SHg",
  "key3": "3eTxFKzktU6tkCiGueQHW37jDah8HFPaauHZUE1zxk24X1AV6ej3yL1TVV74Q2SehgPY8NRHqXzRiV5xVRfFGynb",
  "key4": "2mrQaFh7fCBRBUZ5QocABJ7kipNaY4YnomwjMVvmCmsrvsSsogUE6y3bVGifkaRtw2s76KFP53Y6TtR6erT9bUsd",
  "key5": "4A93tPCLyDG4tqXmvUtyh6KEHqjaCcfwYhgntuuYZDxXjRWF73WX1HxANz32g33VRA7JSc9imw9tLMmiRqbqJzdy",
  "key6": "n1BvBvNSSg96CVHfQjkJoCyR8bgWBoh11LY4R6RypPKU7LG5HDmvZ12hdzTD2DZ7bYZF5ZqcSVReTiNSbxSPXNo",
  "key7": "589nKRNz3bHJUmUmmSPaBjANn3zgsoXcN7L98QfjS5CPvHC3j46bYyXBGgJ5mLEBRkRXyhd9bwA8xGbZFf8VjKh1",
  "key8": "4bNkCuwgrtmWGypfxNNizbftuMtP3Wfz17jaSRdrgGtoDT9vnzTvYLM3mP7W8AHBRBmsrriAengMMb3qCW5aiTED",
  "key9": "2xXFQkna43U3EsPKhrzjEFdddLNDjhRV4JKfVcHiAUtTvmi3biPLtMnBM3wGMjYU75yHpN8dCcAo4yYhrBsYxLXR",
  "key10": "2eTfQrs9pJCXr3c5tYEUypTBCo2zw6FmvvU7at68ScyU5KEupT7tkxaEkUnTcwfKLrDnBgqcifB3ooxiHeAHcJN1",
  "key11": "2aJY58UwhuXz4t21hGpXnptFkizjTotQ3T9jWTj5nRGt5n7gSDBxQ3eWfwApDHtUAAUDRWDaWZgnq49ajnBwdnqG",
  "key12": "2CtsBkzZLTZyJ2zJKu7KkdonRU7QE5ZYZHcbCqVvXZk5XciEpnm3ysrA3msnco6wyfq46THmua3nWNgzHJrx88kH",
  "key13": "2sgKGxxPeqtQSF393XtfVJX9T5VGTZRoNCnd4wTeaaKaSvwHezV6C5Kivqe7ZCxTGzXVHBYaHGdvNwBqm8fcAA6",
  "key14": "3pvag4dBU6Vx26s3pgGKEPMp1vZtaHekALfjnEgEtcdbL83W46JSsijonh5dChBZ3dDjyrzmG8ebiKHufSa6AqxP",
  "key15": "5Gpc8PABh7bWvN6nnuEU8BVzm8LATNNiUkZmaTDDKk3TC9ArBz4w39qm1YMtdWr7XXJ6pT5RwLrJJ4wNB1DHauLD",
  "key16": "FRorgSKNGUnQyKXeMeUUoHzBKFK8BVjAY1hzi6LiW2QKSjaQXmVGJ2aEsWAzTFqfZaMXqjf7U5AcfjM7orDkJLq",
  "key17": "3TUqzn7ML7cxXDUZj71ossZ7BWjQa6Hkuomr8GhbggA2wRgaTJxzpi6PDPQTTyAiBqQHKsLTgMRkqGagHJ56mi1n",
  "key18": "PmXCkPu1egm7Eeaj1wwdzYkVBEw3xGUYyeSE79pj6pMNBUeS7mrnfR9qL72UrCtFSV2S75w9jxKvrh9nUP8wLkT",
  "key19": "4QYMhTwt3WJrGGeAkuxMhzgh6fHrzUuz54MmeT5EvPSvEHCPQEgVp2YnZANFpSXUfc7m52hgM4XGYs1tRHYfqKvb",
  "key20": "3ULLy3tV5LWUkKyoztoCoxmvjrwriQEHvXHAjvr6E9vZcApUibsq3waHTXaYj9YRPRps6JZ164LZCDTskwfjNJRC",
  "key21": "2CYKw5UnKLtzccaSpzyvSkto4erzVMZMfLnm8QhRnmiNocB7wNq2rJb2dzYQj3C8f9FyMXrG3WkoevbLAD9UBF2N",
  "key22": "3UjHgVWEUq6zqYvSqepvRQm1voF682Dvdonrpg4KrACynxVaDvsgEFCU4kCYDjnJ44o61HU2EwBr47QsZ7WTULJo",
  "key23": "HQRMGErRnwkCFe5mb8bqY682Aj5yQBvaLk71ta9fX5xxCkKLcFr3ADkv5HSYZ4kxojNtt1mBnhEGsTHuc3hiCbn",
  "key24": "3Ef2Mzo1z1uZ66xPDnZirBwW5jgcSyFEsPwC7AZioCQuDTMJHEjh4S5AoeTenXWRRiRQQ4eECmHQX26iKfHWV7vN",
  "key25": "4WtWEVK23greEpN2cFujj7HbvuECr7h8vNLi1jrSHSse4QE3ag8RRataWBBoSeYfPQ6b5t8fGQQaxCEN9s8VnwS1",
  "key26": "3NXqVbDGTUYeRt88fSb36yKMGaSMznNJudLSeCQL6DtLkKWBGfVvdbXoGz2MrDhpA3LXeatf1PWxiDCVkBrw5pLt",
  "key27": "VUTAXPAn66MrQzYi1jNXcQ2T2kkpgYQvNucLibEPYkoSFLD5TySkeaVvXDue8Hme1kKGNfmxtqeRpL6W5L3gwm5",
  "key28": "5foatZ39ZpPqXr3AdoZhcM4jT3hSZKTjFiHWa4XtcSL2FrVbsFnMV6XjStKCSy16FKZ3qDhragnz3T5u2dFq4FK2",
  "key29": "2nRUe5EoJEnoZ6e8Q1hkiDrNE8ovuiijQW219xfCrA5V7pMkfXu8EqZ6eTQaZn9QMKqv75pZCP3V6ETjs7k8ADwX",
  "key30": "3Xf2Auf23VpKfx2okDHDzTeukh6XGJZj8aGQHEHs5mHiqUrhod9RyGAQ2yR9ZWf2HCRSxHsDwzJ83NWXKRGVCn7R",
  "key31": "42vCifJqYPj42t5fMo6dR5ewfZraZ1BpLyMftQbEwh2GZfA5gZx2HSvPTFByBjvrqonhfLz2rt5ie2tE9Kj6m9BW",
  "key32": "5RnTxsV2W22raYMtmb7AjoDQvn8rEWdLmq5X3NZFCjyWYUyusjS4rUPdysoR8u5zaeGjG8CKoLs8xzjAkAPp68ji"
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
