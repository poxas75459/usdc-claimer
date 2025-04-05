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
    "3mWJr7Fj2hgwEDuXF9TJBESf3NfskWVRpksNSqS8FMWKujeSBQnPNH68T6SA3jKcgeVzQ4cew61YkoVLhBu3Faaf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67BHxrVFXb95w2TNXahrR42JR6n6SmCqUAoeLTMMQtMmZnCWgHfxUK1GLoBjf9J7M7AyvUtnSw1NCE63JPS2VBUJ",
  "key1": "59zsdssFSP59FADJMLPyUe7s7KCQWCFA8ndX7DVDac9Wd17dsbevv3UsHMdCekEmfgufo4csfdoA3YEiBCi57AF1",
  "key2": "4nVP3HXuM9NdFSg5KZKEdqtWNvSVhvgRMEeQpqJ4H1hKQi3deTk32wzWJzihGpPzRQ63jcHxNkx3FXPxGuxCfxjj",
  "key3": "3Pf2U22oAqoVTEn2ddS4vRtwJZXpvT2FhW9A9b48JKGfgZqYBFDwPZz5E4whnDACEidPsjQC9cSfwo6CzwKhDTEK",
  "key4": "5k2rSzYzzqnEH9knpJS7RYnjwtbP25bJQ4GwpnTiQQpmae6VQeYCz6szALrXfgaUV8fiYqSJzw1v4RzFyBSQUdmp",
  "key5": "3r3Ngac9UK4i3ZkdYAQhMPv5gFwDHhbfyzy485iZ262GjLgnpJkkVo6JRxT7Hi69W23rroFKh2aaBBHsoakyDuc3",
  "key6": "5WG9SLKZNdp4md9PWVwRJTowpKAtTTiCcWedJC54m7tXmegaZ2ZqDNuG22MFGSMCSCBz9C4MjeZN9bM55MgtfQ66",
  "key7": "5P7qwGxdEDWajxnPGNBj8vJkKWS8YCfEwnLde1K71QTf4tuoA6j2rxVFxJGbdaFuVjbKsCJfwrt8LHXz1pge1aTw",
  "key8": "5m7E9rsEefAsgvXErdiFRM7pmMm7rDgfKoiSv7SsUmTnir2UyxxzSipxGa8HBNUtyuEzwdr6n7Mio4bTRPhQpbHa",
  "key9": "3HKWehJQMJP2mRYZ2zsu1iTeBmmyCWFsmEeRVPyQjnfti4QUkEFgEfCMn2MDqrkzw1CLqpDEEhVJd22yvYvAZ1cD",
  "key10": "4rpvWFasjLZDkKSG7rwV7NB4kmKhVd9z6hZ3M8NmmttXXUsPM5X8jB6Pt1jiPdLawwdwM5ZEomLFmgkGAwS2hHYQ",
  "key11": "5j8t428YUZmgbfPEdm1AJ1PysrCgj7dC1TAuBQ76W2QBxSmUvnz91R2nirLx7hrbW2oseQMvYn7JuGJfKjHoxusZ",
  "key12": "XG2unttme8iz7LNQscUtBCmxZLBB85WTB3SNXct5HTjYmMzsRDyvA6ywNfEbTPp5tYWXPJM8qnau5oWau35NHv2",
  "key13": "5EixH5XH1g94g7BjcTHwQeWVnvCfQfc1Qh5PGnMWNsV1ju7uKWH4GmQMxLofe5o17b8Emt3MSAp24uuhcvQbTXba",
  "key14": "3jhRUMi2Eeizcaj95PEUggrbtwNCC5jLGCeqMYG3ssVFkakFDkHYRSUkViAXWrU11Z13j9XvFcRkCyDKP94VSE3P",
  "key15": "5RPcnTP1RbAKGgDYpyeE7ts1sX5hjfs8BBDfaFxPipHuVCerfGHprvjegV5qoL3APgyXD7EHGQEGhoQ2hKgbLqUM",
  "key16": "4iwe9pJRxPrydEnLHqrxuLigAAnoBghvEjyf8NnGFfFm1QoHQu87TaH25LEyAEaX8ehWXfYVhjzPSu5J7Narxdw4",
  "key17": "pAj1Eyo2yG15rBqmcb6fCPyeXj62TEf9Tz9QVfPdEkAW4xZsG6U4MuTVVY9aumG8xrJBcp7i56G9BTkUL3JwWw1",
  "key18": "4jfyQDisM4RWbssgbiUQDRz1ohH8x1LTL4A9EhsKGUz36fUoc1ZPK4cvGdQcZRbu8tWczB84qxxod5p8AJpqmH81",
  "key19": "2De2J11MRbPGAExaY1RSnVbHYAVNuzX5tV5aTqoLUU96nNpTFN7jaEQ1po3XtsgndSwtG6KmdJt3GbGme9FgJ9Z9",
  "key20": "3HyVwko8S5dzYwd46CTd6qY2baEeSjxYjCLe9PXnSrtThtXedgFSJBouPeYDSMLKW8JREG1P2Pw2dr2aTBP9ez7Y",
  "key21": "4Uk83xRffsjq3TUnrQMsFrwqzZUdE9d67sGQxGLCoGDAyW46JQGkT8464aCXDvNi1o9r7CHobFkyhPWFUt4xTpcg",
  "key22": "2ju6e1YDHry7ihNpXpCREkjgQhGzw5NeP36JfXhfXU7wLwyj2Y2MMK75gCYUqxUNcz52H8UDGHY6sbBsVnm96A4M",
  "key23": "2ssCD7mySqrygWFufTJ4Y3ZQKi6926Hd3KoxJFtj3cJxjNkF81JHzC7EGVoY7b7EYsdKYgzRcA6ieti7ebM12bqo",
  "key24": "43YTHHzkkosuMe16wuKEjnjaRZnXmjKzqBfSPFoNGLAb2FRZ7FhncjWuRRFffzJLRa5A6RqWLQ8qLDHiMwcsWSiE",
  "key25": "EVxJb5cjP9NFLZgbWnjwTJhzcWz3PQi77wCa9RHEe3ThEEevwGeYHvrGUCALY4frruTLeQRf82dGSSSdvtCLxkZ",
  "key26": "aHSYMRov5uCMnkp5L7CzfiEeEpcz4yg8oAnPJPjig4bZwSMEQwmYxaW11bGhZJ73VtDFfv1hvPTzR79bBc4ASci",
  "key27": "4MifBBQccSssbHz9iAK2PpiefLYKTvw66nwXG4ATgWgotjpfxEizqiwVCSFnm7DhUJgeUBKiVBNgcqfWg4DGHEWu",
  "key28": "5njorQKn1eXxXjePd7UtJwrpK6GYFSBCWwJ3CwvwdfSBhFFmp1uAGy3exrVkDgvUT4DMAadjPsJyyAUenmYP5UwK",
  "key29": "ciT2z8za1Uk7Fp5Mn7tHQwfLVMwC7ZyaYb4UaDz2X6GFXqegMbgBwk14iTGkFdqxaCkLASN6LUz1zBZtgACGAiP",
  "key30": "ybYMqVN5KFK5WeiHP2berCR1nZEhwhAH3m39xb6YLwpzTUQ1aHVf53FKkbYty7eQf1mAbD2q6QtiurQQRY3Wvzt"
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
