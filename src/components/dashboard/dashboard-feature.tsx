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
    "46RCuMoKriceTr4DSQfgWf97kwALSaGgA1oAaozvyP9VwzRHpMuhCErzGCuyoLo86Xc2134jqQai2pnP3cKFHZhn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "655UjA4NPN9TVTFDqEqogHHGkRpYSnF1Zf4ygZfMkr4oqBfedgxcmb2bBnUkwchvCJYkmum7h1oMZhY2XUtYyiRs",
  "key1": "3XFq4G36wCNav7oxUn5E6CXJtw3JAKnD2dwhv4aBF5mLEACQRbzeUkwJfFz7v6BLGpeYHPKwDsEFpn7cH56r8ZuP",
  "key2": "4bnmyGiM6sJsHJPun3wTq5NkVhrs85iaLJrGN34ef3dhQqTL4vtWkxD6rjo4rRorhRH1pVt7ZutADd6UPxCbvQAw",
  "key3": "35TomvK3hPfSjZjFsfdvxfuxhuy4v4DqDmEwPHU7zVUCykxL6WYhpwsFuC2B4cu1coqpiFd4pNr4nGdnzoHBMKuD",
  "key4": "2fhYv8okYWX3iQMaVoMoEWBvgTkiN59PwXcbmYnxr8svpx3C9QbR4SYLU56MExgY6TCNaQcwMEi2rPiqZ9m5s87F",
  "key5": "2tmsQ4bTNRdiMdJ98w1BJ7hbDsqiMjWjEx3iwNYC1uL8ySkTwARvfWgQdhagJcfH2uKuMVU9nKjju2imyPgUcN6e",
  "key6": "3JB3xaL7hkDGs19eQcade65xKjQyYvEYVS1PVFYL6U5mKqZUmvXzpR1nXQenodJhwFm5ATzoAyDkEcTXBVgvwm7R",
  "key7": "2DxMzs7NmY3VXw72SaPqMXo6LLZPv2SpC8wQJoZ5awFoZMKt34NF9hJjynrQqqdpVUgycaUBGw6GJ8bULfzAwvgk",
  "key8": "3N3vT2PUDngciNoVtQMbfFdxz2cPDVzfGF2PTw2G8ZpD91zHQY6hutwu7U2KN4ozKK3J4NC2vByvYyqWhUH6R3yr",
  "key9": "3pMxrwM138g7T1K6NPPnEVfX5PtLLH7g5VvFXdeyK9oSi2pEc4ihNs7KV5okhag1q1Lm3bAweqDUWRtcUeE6aQ8N",
  "key10": "26qv3J2krysQMgQE2dSGMHfad1x48mtAEy5i2HRx9H9Cwh8qxzhay9Zh5L79BgCn95xRqWY9F1YjRqS7fLXzJMWR",
  "key11": "3PtbEa7m6wQx2ncYAx36PWtGXyEcW61FbDXS3yqvhUESkMWekHmRbJP6JyVzcNVD91bYFpaaXSvY93WV9uRRpfF5",
  "key12": "5zFdyj794hVYssk2qvMbNewbZVaMY1KJiJNwqktwSLbjXJN2RrsfokKiWCVsK1L6WpyJZKd3AVXb8B9Pj747hRMG",
  "key13": "ZqkozYGgufe6a1Y3Sku1Ux5CBrEe739H6oMaQxBoWa64rGd4BBdqrJqnUzUxAxTZwnS8HkLsE9qHM46ngey6dJi",
  "key14": "KZafiHiHYx7V6sxhGwh2yPeAV98nMxFT9FYnrJG7xkg6kwokWc6bYa4r2H7Hi3NmMJLgZgT9qRFs6x95WnP95cY",
  "key15": "5KSYSGS7ZMuJQvcYHWgsaKGMfCaMMZs3khGKw626Jy3GWXwBioC3k8M4c92fKUywfGA2GK8Rs9KdbfU3X6wEK5wP",
  "key16": "271fMLxKrEbqU1hW5ai5ykf5BenL96tsS1kocqJToyNq6bvW3iGQDXWc4oAHVfika488PQvPDgtJWZG3qShUBKmR",
  "key17": "4NM9FC7Xkm4b44MzRz36S8CrV8H1Qj1CikxcAMwQvc8kQDjs3QUmcinJBodg4LH1sz899WSGkWQYhp6PK1xYmc2R",
  "key18": "2Br8pg5FxiLekS31jgkJNNiFJLgznsns3aMTbBRRP8AYrnoBrgB2FGpMVV8yM9GrsVztLaZj9Qu98W95bEFaTpwH",
  "key19": "5WZbTKpFWSk2zZuBNzYRBPdewwZBE4Eb1ocFoh2znY8CsW8TajUhW8KSxzq9WnxXcLpsobHQydMVcR49kGLE28yt",
  "key20": "PTiESU9zdcwC86QZu8PySnLX4uk5JVY4vWU8tgztWF8FB7cHVDPBR7Nn1FsbDNjY7EFysmgur5UUhdz43h3vpcb",
  "key21": "2dUBQQ8fEGvQZtEwfJfpCEoDPmKuu5qSB73eJXmNC6WxLgdCqwEpa5hDH47G7N7jfdVaGgyFikXqtLR8s4T9TGdF",
  "key22": "2ohPByFQLrqX2Ee5s8Qr6neJSjdMfKCD5MCzmU1G8pb2h7Sx1j8DFsRtujtbfEeF2HBStGxHSNb58qCG2w4j95nB",
  "key23": "5sNFsnNP4YH8kEdrpR6uNjFgD1LZMRVPAp13ijZVNxkqLbZmTcV4zCTbaeocHSNj8zWcB21E5EGD88pngSNhe664",
  "key24": "53UbZQkSNEFbKVcda7voMPK63h53JFjNLCEZGniFoCBRMNSXu7DxWnwMCUopLujhoX7prYyHuvSMnvgr5YPMZc3D",
  "key25": "5HobXLTEX5a1Xihh3HsRzmuYvU8tSHnW4nUvqyLGj5QSGp589zuSXuYSqbHd1aDpiqxtAv3GarB5zxg8VE7fUQWU",
  "key26": "5EKsJQfQPfPLtikE38aRDSTAgpzjhP8Tfg1T9nQ3q7G3xnfGoVzUuLNcyGfCVF2EEyGGrJaywqfL9w2vofwH6pq1",
  "key27": "2MxJ5xaM2ZafjY9v5g3HKqB2z9yVA9zSJm9hrSscdcfKDHn7jfSGaqZHrK5kQRY9Xc8bdJyTN1As59az54szWD6",
  "key28": "4zgG88ucDb55zf8Sx3JPMUjx5os1QRcoatJHXvoaYStCbh7WNVUPMdgPWqvCED7Vj8fMJmVEpUXgd4oYNgU4xZW7",
  "key29": "41BAdK36ssF6cHGR2Scd281xDjfZvSi8SWJAcra3W1EQzNryA381Q8wp2xi6pannAm8NbMPvTyDdzxL12c7excuX",
  "key30": "4pJuXcS7efo85XGHuLv1XdZG8na31mgvd15yLrpg56tBpMZRUazhC5RhvCA5tSh6aFwyRudrxjrVvj1dC2sxw51c"
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
