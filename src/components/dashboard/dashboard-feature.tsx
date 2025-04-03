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
    "5viUX2MRwBaFKQchpAh8xcHHfBYzp2XUJreYwo5WxSKvMFZD3X7HP8KqER6bCCZQbQGU1WPC22Lf1wusSG2zyw1h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2n1ovWdipy3WiXRLjpSTsQ1H5AkjqAsYtuKujyoJr2zHNp426KMnMbAUnSCba4m8Ewvnmi6HfHEaFeHiC7GJStyQ",
  "key1": "Qo8RGzqBFPHje8oTohwag2dQufsxDy4WLJB55Uc7zgJwrn47gvi8wH4bVvcqARUtgJmcekkpjKe5rT2jwCFwDaV",
  "key2": "xSJ2pYQzNfBBdso1WYbLTMfByP3Mq2mefjAym2LfbsprzmvJNpL357SsQApqNd8W4Z4b2ZypnjrpJHQj45y29id",
  "key3": "2ERdKWP8YS2txeHBGLQwtpc759QKnqgdY1acZscTAUKXuPgfX4tmn823EaCr9vcYw13GsqimxXiUAMFyShRHyuo8",
  "key4": "2pd8RrMv69RcZhC34wy3Xbf85Jfd8fSmVCJ1PXFwzC5b88UV4DiGHfDh2cgncXkttAoqTAFnvo7YHTAqHKhe8HKq",
  "key5": "3ZaUk6CPvsnB9eMYLxTDnfv5Lh354ay5TSwkUxpzjuH8nUvUb1CYnUs8r9aJ15n2tPLoUbqEXtYBZ5paJt8t7s8s",
  "key6": "39F5qWSmYooEUWcQzgbqtbPATrRsoEgK6jyt3rFGRiuEYjA4RoMvCjFtnNghZjjsBHAPdcbJMnfNZt118wyD39yu",
  "key7": "w2GHuwc2ViHX8jrFhHWxNNyVFRfrq9EKAxz6jGXQvwieJoNEQMF5GJjwatZJ4tWAMYHFHz2H7mFRYA7amyYF6b8",
  "key8": "2qqTMvspQNk1PiCr7t52j7dQrcFHwLnqYLnkJSujMakvQ8gvT9ysa8Mqdm9wQeAsdfB1vevwQWuwkMKxP6keyVJ3",
  "key9": "2WZx64HnK2yhtVnyEpVUiup3FeggR3beRCfRwNmJ3FMXUy2AFBZofHpc5tHCztP1tLS3z1Tokdgi97xRSvEWf55",
  "key10": "4zhSq5prZV1oLdCdpUGHAJGv1BbAwpqzPf6eKKEtFCCNPHXVNxewHoigoQhT4P94zXzVRLKEew64bi6wfb2NBRRf",
  "key11": "4sQAApLHqzzuydvbQ3YWvFfb4KDDTVdZCsTLQRGcx3Lh3NQQR4WTZBNPDBE7NshUcmyHt9S2PUsCyLrdnK9dCp9x",
  "key12": "NM7uKDMz1rWHELQg9t89wowuPDw4DUay7ZzyEiXCSBq88Sj48xMM2kPNCMYoYV41X94PSah9p92Xj4t4pQmJ37q",
  "key13": "26YuLDNHzzGnoPG1oTWmmJR3cv37jF17rkJ7wyL13gxQuB2AdTzS8TBLoG67ALqrXkw7a9yUBRvA1jdhdwnYxVhb",
  "key14": "3tqVDhd5FwpqYvYyecJvHDxco4VsEGzt6pacTWFNRzPrABgD3X4Qs9bbe5Xo9TSUr7viXeiB4G168AZYpgw53mSY",
  "key15": "5cEXtbvmwY8d4H4hq1sRheLK6jVs4wn9TDkHYegxRSDfkwJH3RJb4EKuWLPJEgq2rXhARYShWoVZjp15STDau774",
  "key16": "3jmcbqAwxb1oZ24NCd2oL4GLnwCyg7Lj5Y9h1PUwySEeVwVzATxr9E55FSZYGzK64YzzJnZCya9cCrTsV8keRTdQ",
  "key17": "wbz2YtDpo3Lgi2jMC6pC7Zw4BPvnkp4kpMEV1QZ3YufrQQD5F8TdpDRJvpsaPWfdmUAXDZLoHZ3S4NmcBgPeyU9",
  "key18": "4utNBQ9mRpEqtsQrbKUZGs7wScs5GhpYxEQCMVrXr42cZDxoBZKPwZfCKY8WdbEFUrfXfpKq5V5f5GgE5JtAhrE1",
  "key19": "UKT4ZGtQgVsvYyCB8qzDbJDnJPqVpBGv7qGtXAyZNDxhfsAZRXPTGFJG5tAhC59zQGjAqKm6TdLVHkeQDhHoUyY",
  "key20": "4TvaSehJeL5TQ45G6rCHn7JDK5TKfXb6fqpv3H4N7jcPiU9FL83Lix99NSoFxnTcSLW2NRY9kzq99XSi2eaocTJ3",
  "key21": "4G74XAi2BtAuaeHhdvhaFThAvc96msBYYbBr8qYPSQre4xSFGsbn9mpdbgymmhrh5j5qdYeBbJAngqojsJxYbtLj",
  "key22": "2J2ZBgkZVQ8apPwdVtdfbawG4TwqYJrDgh538btvGBFXaSDUKLyU6h2i6tGkHS5pRnrnN5ZCNiSkWQ5UaTUfcUE2",
  "key23": "4h77H98ankHqtuahzbDceTJ6XSrSixWzEK4wVox16BnmBLNpA5LNrcfrQjheqoEDrFyeEKdbXY1oX936Hm1NUDe2",
  "key24": "7XpSNJ3CZcZ4kybRwzZS56yr7SfR1oK8re3vRUTku1vXBKXQXyudNYbJnWSqTPDo2N778fsJvj9g441tSVLaz7J"
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
