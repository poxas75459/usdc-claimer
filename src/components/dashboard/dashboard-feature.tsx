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
    "Yh6mnavfJqVPyV5jcr6fwHC5nbHVWS36X43FZKAsEPE9oQ6dGk6s5bkQgEANzyBpmC6LT7Cw6kVPFxsdfzdDgQq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pyDQncEVWzXwNKcz6VenGe113PUDghQjbfV7CA8oLNhtfKVkwKwgRvLm8g4yWMJGLuvWzgVcRxZyXdrmeZbgJc2",
  "key1": "5cd18drce4WL8AmAkAjijBgVDCbr9urAnZfd53ALjzaML4g88cKXsGPBqRVhUeCqfsFpJubEHmPRKaAo9yuhb3FC",
  "key2": "28yCSapTTdGj9w8hQB1iRSzqrLsEsMjg91HQdZ748HhbJe21qk8bJ7egaRYdzRawDeVph4N4fEhNFdxAjK6hmUtt",
  "key3": "4YCef283neWX6KsQ2MCD4s9q5yqesK9oSzV7yzCgXx2u1tCQN1cKQPXKVpwxhKz63XsPLPzbcwPxu8QPGpmmPbba",
  "key4": "5usC9NGkhQSEXovuffqr1BLt3uT9euDMRtdETauySMkv5F3caYoiJ5YbYiDE3qTmpgZgnCWzCWu3PDV62imDU4Nj",
  "key5": "2aUAYjvHL6HjWjEk9cmWS4H43mtgmbT2Vh2eu73kUMJSt5P9uxa7pNdcWSLELQJLBkoH76B8eV66mySwFz2uoxLL",
  "key6": "3zbTiwqJci42rhNfmapVR49STnz8d2XhMfEeRRbQ2txoZTKAkv9JASBm1TA2bPDgbvQZdLCqv1KzfJNn63rpAcbw",
  "key7": "3VEtCGee1HQ4GokQrGazJuGUCvLG9zCYohFLibiijpYw8CQB5skbLFTqrX4HtKungY511bGDapynPPXzuyFVPunA",
  "key8": "4pZBNW9tSu2GTQGUdueyyc3bbAFKTpTNLyXkWYm9MdffXBKJS2PigFuQn7EeCF2kYHL9tZtTnhVF2XwGkphkaCRJ",
  "key9": "4U7Sh2UAhk1SLJfVP1DdUh4RqmsTuWeJbm9KUp8CzCLBiA8B8Wz8ugJ8VjxPpJv4tJirXKArBnjrxSZhjksSU1Mv",
  "key10": "66HJW3AjEAJmDozDT1fyvkuecMJBZ213Az3vXShcoyxZScU7374QGkprgf4CVCqqpyKz7pzWW5K1ipduqEFq3dZq",
  "key11": "5i5EnuQqKZcrBbz5SqnbobeKcG4qF5CMWezdrqBPBVMPpebcALiT9QYiVKNM3nKi4HnHm8ms4ainK8LvsL1ztST6",
  "key12": "65dbfcrVPastCuQbszKG69Lm85PbX2PD88zt6SAtyz4C5GsFB1XoT2KY5EvyUwhnUx8PGQx3ShZRDFxGojjrwt1k",
  "key13": "3iZCV81GZFB6XswZg6AR6X2RvnbPD9fUUQbx25Vn7DbKafzoT5NUQvsQGNLQPgXdTNAspvQGqPa7owy7FvLmhgQo",
  "key14": "RmY97tbg7XaPFawHtLF9PXfnjDoejdMFYYSDYHfRQf1vVZWECxGVGdfkBPVyoBPAr8WQ2MS277FevEAWnaPmVsB",
  "key15": "3cKZ2T2AeL1gT6kaVqH1DLSsu9RaimTN2xiND3CcU1jSNJp1X2foT6ueQCzJcZonibAVs1W3y9YWYA8jnE1pRY7E",
  "key16": "84r2ZVFeNcuq66XrwUQXqpJEkQ1xKkKcjRU31ZW2LCoafaMqGddogdm7FH6VQzWDvapTzjqRWdCApYVn449SLQT",
  "key17": "4H9tGBzARkVQ99J2ntWMwGRpeiFNvn3v91Jbf9i6tEB7fSKAph2KmSUBh9jcycVqjU3Hb2fbJ7qU4hR3vFaXLHxg",
  "key18": "5d5LbzGaE5rQ7jAC57TmdZmzGsACNm8VdT4zxyoDV2kCFXBwHoGyi5z8X87NXPSrnt7wecs9vM27A1sGz7rKoxhP",
  "key19": "P4bvAUBhyDconQU9Sd7At7nQK8B9WH35w8kEdPoyd9ZxGttYtMRaSumLuTTwYyP4p4mzsRmwqimkRArb5oHnWBT",
  "key20": "5PTqirGiZWeCFiVDSok7vYcghaH6ZfUFV9CGJ7TPAMTFFf6kHLBCNjAyD5dVU2qrH463XyqJ9DaZ9qKmuXk4vvZU",
  "key21": "3vzyD7NSDS1vq5bAMzvznzEg6XFihb5szXaZgHSCagRZ9BkcVDTTvVtGth6Abt4ZfZ3zQviv5u8MMidgwCEA181n",
  "key22": "45xEdrGiLmdVUnKh4neZwduwvn5AYwakbqNWB6pTknJSfr2Uk6NxLGAifs9HNCoCK99PodwVe2LrjrYEGCWYEfoa",
  "key23": "5kU9B5QNXcpVWqPioUiDURVGoNT4khro968rDqxzQ3tXvAopBMnnbP3Lo5rSNcHkaddUcuH6Tu5jdohWa36rrDHJ",
  "key24": "4wpfdfu26b9xvgCb1o78t6YPnt25LguvPKaPKCfdfoGrN6LEct1ZCwRKAL9tAWbkKJ51yw2udsyiaCgRKEd6MxdR",
  "key25": "5RUyAKJoNvmhXrbwgdY1d8KJghmzTfchtkbFaNjHFcmtKrpUHzVeStmfWjMWfnziQUitUUgGMsYT752pwVbbyty4"
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
