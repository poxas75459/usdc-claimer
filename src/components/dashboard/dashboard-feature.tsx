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
    "3avPRfLC3MxFgersRaEBMbXx9HMVNay3Nt8tpLhy5yrBDqk5QVGCnnUVWDvGJmNYWWZFBmuiA89LyHW2nH8XU1br"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5c56sZ7B8yATWnLDJi2eRg2UjgWCstq8WKpRXbE7rtWRrcfvoXgPVhacZKeEctE1D2Q85wnLw87fB8LtpGbF9cWw",
  "key1": "mCnVRGBfLUdx34P85FGg5V117caTV72df9w1Wr2DdC1ZchGKNrGc8pQSsUp3gV5J7esYMzF7rT2qucVZEue6sQ7",
  "key2": "4U6BHKsJJSVbx8MvciMFmdP5DwsfUK6K9JDhjGN8JzSqWyFNkoyMWSZKeE8kUauohonzp85b1f9gq8uaYndaQhRX",
  "key3": "3ycu1Gcypa49RtiEmB49UgxjdkHXEhAA5VQP28tgk4V4boJGSRQJTVhdsCo6Q37x1frH39eis8Mhx7QNY3uganmx",
  "key4": "4g4q659iRnPfYvkB3JESffJSBhkvma4cpiZyDGkbkBs7RWUmTpQX46xiLQECvDeKjmmsk1W2u6kRZXdUvmW7p16C",
  "key5": "2TjVRARSieMjSBndAMjVgUF6V8CFiJfbg2hzNDoKn8UBGk7ZSJmUiC12a5E9ZnBEzjS4BiovWt3ipWSK7HCq7s3P",
  "key6": "3dAFX5NNbV1hQwqGhdALQfzdjEbfc8sjRZHpiMd7dZNNLtvxh214ZHKexs5CG3qWewgtD3dbLvjRPpQZ3meaYqgJ",
  "key7": "2nxoEWhbsStP5bE5Vku3yoPhUrazFgDKcNFf6Hfiw8CZ1Gix9uTBvExmjAerJhu3a8S2aivFbEchPr3rrUPQwWnT",
  "key8": "3ADt299GDFQ5tCjghWrpbQawsr75asNSvweG6AcYtzRgnPyrkz8GJjvEv55QyM96QFvXJRJPHMvczW1T4VpeXueE",
  "key9": "5dMMoaDb3RYq5geZSUnumKy8qoQE1KSFnGrGuaPyykRyrS68xV7aRGFHAxvbwHwjTpDt6rv5ZALfdSGqzNzpRC4G",
  "key10": "4rrvm44NEpbB9qcYCt9rtjRWDJV53de1sik2YkUk12GpFJXiwv5k2CE2xTdsyhvP2rPkLEL9pY7hqqcthFeDZuzK",
  "key11": "2srB7fttgvYW3SbtWfrsfV83g37NCtMqXeNkgWKfuGoCsL8NjLtqkj1W16nfCLw8vzcSRBxeGFtboBzLJW2NSrRZ",
  "key12": "Gf6csRmbj3LvKeo6LAdd7E7BWseRPNkr4mZ4n7Wrr1BM2nWFFey3Rwn7Lh9bDMVNKUYQe6Y9P4nnMRgPr9aCsXk",
  "key13": "2fwDjXiLvBZaXZGvL19NkBX4fAhSau22eDc86m9MtnEhwhbn223W4w5nM1PvRzhtv55fmr9pQgZ9TVrA9i3m2KGy",
  "key14": "4S1EW3UEBBPYYiMh6KuZpXfwxkPkiCRGqTbdbGfyYDjFpYVcG6LQ8QqTZZfZyqKrJaEih3TnUSRgfCehHC5UZMcy",
  "key15": "654hE4gRUFCv5RcDyNt78j2auaFtAT2R1aaDMuZk7BFGuZUFt1hgG19G6Bcsa8PGYhDrxYUBadY7nkVMYjsALZUi",
  "key16": "3EkNs3rWv3DDATgj96a4k4qdDta68jdTYW1RQqYr7ueWi64Meg8mpERWWMALr8iB41ScSzP64rcxp6ZsEysHiCuW",
  "key17": "3av9H6XvT7UStdC7JZEQ4VuZrm7H6V3BBJzSDHNmUZ7NW8wRL1nhYSw358nTzv6j8GyCsD6naoT6kW88vb1ALzfy",
  "key18": "29We4VkZmPg1FHdGVkcDt2rxWu35NmjAvAuhWSUSfPYdw5FDB9q5m6g4TqkCBS8py67tc2pQZUTP2kdcnCjaCzoU",
  "key19": "C6fEnmVQQ1KmM8AUyXn2B2eLGLQcNKtdWiaePMtHUX1NucZWP4C9bxY5uHAqkqjs8jqKG1fhoJRTgT8cMHn5cE7",
  "key20": "2rtgC4JQrYqxr37QGMPJjcnXsCaufrgo3276f4wH4giS7KprsSnQ97iMjBd72PK7xsGRhig7cNpJJqc4aXg3icv7",
  "key21": "3fxYf4nS6Q5r2MHYjdHF4R2tTxpmpfXxZ6JTWuJH2qRHvGxDdLPymZtuZt2ks8CF3NWcsJ6kDuQqYAX8gfF6VJWR",
  "key22": "2eXCmtTi8GyM4JoyBbVKtqGw7nnKCCDXAqMrU5nyGTXrzU2o8GHwL8TXmZnWDQF7V1QhrJxqnETAtuToToixkZdE",
  "key23": "2TbuS1oTLszaYN4QwxN2Dv1M5SfrBEprYRci7DZNMctDRRnXRRK9totFJ7bRaokYkZ45vYjGkZDnywym6gRfzmUo",
  "key24": "46iVnKQaUTULi5zhgsjKuB4XRjutPJQHMiwV57PMSbTmuABwRfcXurYoyPURypxpqKg5dvikEug7cHnQWnAJmjQh",
  "key25": "4FL98QsW6N75t3V3dLuv1dCc9mbUmZyJ6B5HFx4x9JVzBPqHPfHaUYznw7Hu2aRaPQ64546CeA5v2bvE7DFMspyp",
  "key26": "4kP88HPUEhMuwUH1Sa6EBwSXXW43xHRHNLbk1Ri4HVgpcFvfmmquDRVHMP1Mnag9m6XHyhWkc7V9q2gzweyoQkRV",
  "key27": "4vXYkZz74815rGt2G98Jfk58kscS6LwuaRQwpobbuPTffTzii2fFUKNmbCYyiXu4ffLwgManuoeRSJdRYebTm7nu",
  "key28": "tPFh3hnCht9bwoWDNGqUGB4zuwN52Y9ntVWnJuF4PhWzczLWp45UtZ8hRfrMvmp3YWy5vdGhiKhK348AU8DE76A",
  "key29": "3PKMYaKVnFysdBveSWnMh3SVQ8Qr7Fubt2WX5g1XdG8xxb7XEoVMRvVFNnrZ6ts1Mny2xfakmn4DdTxUgpUm21do",
  "key30": "Jm1wTnX2LrsCuqiUGV3MxKGH3hmcQo8CqmTZw3shuXne2Zq1s8ZgAakV6XqtpPgospAivPLdqEBbGiPM7kMWgLD"
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
