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
    "6FsqJnXhnF1XzPB7XoPqMw2RNS5JDKGBYmDBQnJSfavYMrsHsNCV5xBcEpt8NiYhL9va7Zo2XA4cm7VVNbFgezr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2T1Pmk9yJ5frVT14GXVA4gFARUe4VijkgQ5PSu1iNFetXFxzYtC4kA3hkMopm1Ldd3MgiUnygwJ5hGqsutY7DuRW",
  "key1": "4Z5abvdUHBJ7Y74GTyBWUDoM6fp1B1vQuiWx42HRufqNCKXWKVv1TQT3zvz1nzKKgxGDjfX5YRYonx1a71qMtrd1",
  "key2": "32sZikTK68kkvETWfGVid6po7tb5ykHTVBbrT9HuYz2fHRpS5NEPb6CLDtWNHFxwBzMPiBUcoWqoAxFBo2PzjKKw",
  "key3": "3qV39wsNcQJzSwDKv7LJsufnxgU36Jk8CJfX7mQB8oPuHwWXhDu2gGAdwM62sk3UFahHhJqVcCJAkcAxsw1CU2rX",
  "key4": "2SwyJCVuven2WKtJpbz6bsNTDLYp3EKMKeqU8zfVcuHamXntogH5k3fkqcGRLPX94qtykr4KEcUFnK44RH42VHNz",
  "key5": "4EznXQHVyEpp62sG8u51KiTb82Lp3Kjgsk8ut2FD6kzno2wdEfPEx1bX5T4V47dBKAEWQ7r1FQhdQcxdJ8YeYdCr",
  "key6": "4yzbE4raaxAzFCJcc9F2morkkFd6KHLizK13TUvb2i5aEKmgtFzvAYgHSGfsXCbjyLyBgc2ozQnqnqEGLi6MpP1x",
  "key7": "3Ti25ndFTJa38q1DrRfqcZcBY21HqVBhFR1YfMrmxdxSpuMaKWZcb9UX8V387kEtrTJd4cPsor9FatoRxvQYBpbV",
  "key8": "4gkYZcYRNhFMR5b7y6baoiuMyh8K9QtZZfCyAWdwWhxKMpNtiBrC5RXDMx9G1Tfuit6BQtSbYamZpaD1WEQk92iJ",
  "key9": "5ADaftb7TbiTzyXmGwhqrSRpLqjMv2qhuf8bjnJvrdLJ3eVLEDTFBDnCqbDAXigzgUqoPPi7Ertg7QrpkuGdK2fZ",
  "key10": "4ecEyheh2pRMmSmtUd1LvpPWxrbcTwfwGnNm5Ah8SscKjMV6EK82ePXd3nc8Zq3M2XAVAimGVs7RDy3CqigbgSbt",
  "key11": "4WchGbiEW4nDy4f6NVaRw5MJUbEHVqY3LpQ5y1PeuYWHRLa1cqBkf3httXTTNYaBCRZkYcHyHMe9o6s58HuDTGep",
  "key12": "5ysNvnvRMPwLwunBzYSnTEAFghZmqMiKMqzDqCkimPDoJE26S1vxz45bHaefNuc23SGWAjUMRmYU1nmo7cvp4vQD",
  "key13": "dikPGbhGacMAXMmpmpREs6kuTNqhwYAHxgjEtdkfm9HAqzwM8iTxij8XpHAsYPj3tNDNrvRS7h19aFmcdRW3Pr1",
  "key14": "3rZo2fJHX8pVCj4BthaMwqiEACwpzwcmpAjUvHhdrZsigHQbPHNBUd1knXTECFjBnreRcf1NsJx9Jzx37bjUvQVH",
  "key15": "3VuNJn5xM7ZxFpCF7ZKcTRYQ5HzrASGoG18h6GpeTL63qBzZJqFyAFhzDNV5WC5L5hEnayDvQvhUNHRWSsnuoUa7",
  "key16": "36vULGX9BhNGcX4RJbc6AJVNx4SH1b6yYEeJ74GEpzyzJKWP8yTBjLPPyX8DtGqBivdF9uFXqWeq1j2kQjfaokjj",
  "key17": "54N6gq7EJJoFXfWg5Q6LLeNUr2FscurSdE58xzCNjs2GWLgUVzeCVPKm6muRn427cfmeckpNE2cWMCAUQsFeMe9X",
  "key18": "2m7Jprd9vuwZqzjFdNGEwgJfdkEFR1CEwaqRNW45duppuv83EYTHGSJQranNhJHKoWydoxTzBVkWmnwgi8A2dH79",
  "key19": "61JtwvvYcDZJ54rKGrXDkPYJfbJibjPa2MkqCZb44XWewh5AtF8b4wWvqm5pybSGdUkN6rnETocYWBiXZDxqQegb",
  "key20": "LBoEC7L9XXaH4XRdS5Fhvd1Z2a5ZSdyJw9M2Tc7skbePnDANDTo9JsHdFGyYVa1rPj7JHLwgk4m3FKJAMS686Hu",
  "key21": "UuLKQ8xwLcK5a9tMjB5gbp3251AMrTidnnwX4b8yUGyB1iYw156J98ic4LhCK986f1NUCic4n6eSWjNPYV8Hr9F",
  "key22": "SzoJmCcFFhJcdjGEw7c4oiXr6YJQkkH7wzEtCPFzsxirMSSmAT3htL7ixFJmgnMD9qF4umrjAkJT6cJ5E5hD8W4",
  "key23": "5x84j8eafKzGS6g2mR4D7cvG8X7zLXRg5yWiAar218BoViRXSCD7Jxqgfdzp9VXweBR3sPe6u19bCULiRTXDjSoe",
  "key24": "5N2uYJGnWArEQbFmwHZHW5ezgQL2hZMX8pqUog1TeypPeLguHMR4nXhC1LHpX53TStjTdnWFo6VbGu9FxqibdRpc",
  "key25": "4SmuLj6XY4KTmZzSp6WH8EhjGt47z4WDqwrVeiTyscriyjrJ5MtY9sKGoFZRKky2gKKZvofVQGNXhByFXGx2i8i8",
  "key26": "2NdQNDav5BaWmVys92k7p42xZp1tsd8tLTZPhgXmGt6hinJ1XbcSYmU5de4mZe5M6aWxAkDKvZP1HbqrqpVkRkoB",
  "key27": "3r2jHXQMEmFVH3h1yk8b2kWvePurFkQAUgJ9dT4pwUedzMa1q1uNPFvarAjx2RDNCNJXkRoyhnhnYWv6BMbv8ULE",
  "key28": "2i8Z8wkar59bwWjyb6MLjLNfWHnLYytLFGV2JYCxsPGf9UcYkRGjb5TXfJdonowpf64E9wDors8uKzFksF6QXrFM"
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
