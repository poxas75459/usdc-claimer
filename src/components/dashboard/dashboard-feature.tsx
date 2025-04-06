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
    "3sPf52EnaGVdSjUC9aSxdkc18wMuZuTvQDgzeUUDWF3b9jZHUkwe88y4oUohdG3XYZUCMezXZgncei9L97nbiVyY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JUJ2V52rYTcKQvuSXrBugrKS2jQsb8Sdjp7KUC9rfEFHvHtoAeqWr448yjXpgo1UjX49L3UAr2L297aCiE9Kbgz",
  "key1": "4jRSA8d7kj6Wmwxexc6AGADkfz9Yk1djzzom4xydRExEec6hsLdrJJtsrUSBuwYSdUjTBunH4xtFS2uP5z4mnHYB",
  "key2": "5twVGWx1jMBMZWJMqojW9hvUPZFuXSU522oKEMtmom7jzEQy8mXEQuaCsT67TPxD1uJ4xqbUkLPtmbDqcRFTVRk5",
  "key3": "23p987UYDqCoQ9T4RiybLuKgHdXsNHNUEY5jJG43xZxosNayB4ERWFAGuhr57ENHSEJ9GvTugZat3zAjWHjYX1pc",
  "key4": "28KDz9bGCKGLe3bw29wrKhhufF68P1anwDfcc8u6s47nThiX64NerUYUdBmrWsR5Q4ixTfeEfb5H1sQiLocMvAxc",
  "key5": "5mk9QHmjoqnnw5bt5rMNQD6zivaSZLx8rpC3erGYUa3y3mtw8Hv5tDu9jAmCV8jHkidyAY3AkBsjvFrn22XF5fDC",
  "key6": "3DjRAiU6LVuV5hpwLAZNb8TgjU6YiDusk2VeZ2f9HCvqL3po5PwgjunKwKTZbFAJ661uGAkiW2XJWPH1VADXk4DM",
  "key7": "4vJ27tzuTdQoHKSHGcrso6giMhP3gC43rpWUihcVroQptoGuwBbMM3qGmj8Q8n7cfWrApP5mWhmxQRJFBgJUCBUR",
  "key8": "5zafa3G3uFTk44gcgGaVWYM3bmzsgXgrJ86AVqY4KnTghM6sH9RDXoukKck6yHrvCEL8jk2iWTy92BpyTQaT1wM5",
  "key9": "23km1UD6LHZykRtfvCSzRPNW7kihBLATFYwDbGLM255x5YnZpCQ3Kj7858erLi5rBa8YY6c1RVHYt1auFgRTEqFf",
  "key10": "5tg1HKLPbJ2RN3Zxgczdtye2bd4xhfC2Bnb4szC6nRYe9Py1UnKq7Ta46r4MeELpqaHkvTSnGst9NPxRyYiDd3bE",
  "key11": "7nbotJ5QWJVcFEGE89kSd8CRnQ8UPj62mS3b6mjS3qJmWzzbHMEaAKo6d7YC2bKMih8Gk38DYncPnoAD8mzWcZG",
  "key12": "3cx5w8KqNSns24rUw3zgDWKunuN5mUDfPQtCSr4X1rVYSB1FdEYw6tcULZ8k1DGPnvxjRRVHBDFY9WGLtJZRbzKP",
  "key13": "2zfnp87Z7ZMrjVGM1TfdoH8C8r7zDkFcBk6poZhWwiKDjsaiyocnR46SeJBJw36LxtExWX69m1EYLpwRxCrsaP7S",
  "key14": "28VSkszLZNjeXDVszu8RJWpXjRF7Skeuo7NBufS5gtR5j32jUibQZLh8yvpHFwpQNLuWevVNFciWbNv43ktNNXZ1",
  "key15": "aV8N8JwpeQ4jqGXG43qRdMzqk4tiRZxFqpLqTumR7gSwKkCELZ49khC3hNgBPf7ifQ54reyzQQJT5k8c7tPXyJt",
  "key16": "4B3cGDkc5XrD6M8vAeCNCEnm6HrRNujKP2bxTdi1MAim8K9xsbS2bDsEpvXX3T5uVy7uUEhPawPnmrtx3Vg83778",
  "key17": "yjWR4DndJ1z13dtu7WV9RyLzyFet3a9uT2BCiViT9tQ8XcxYxF8eZWABT1mRfesxuwG6XsvtXN8emaGMctfngFR",
  "key18": "5XHiEQszdxZvXyP75z2g5etLioLq1sCbF8yc7VGZfUK3EqsXHS75NjGm2eji9LEqZA6yzLgiK1gD5vAse2NoBNqi",
  "key19": "3X29zx8RRiVv6uEKjZvQbAAqSgGfYcBC3MQ9yFVyn4g8B31hVQb781y8seF84U2Lhu8iMJ7oBXbTPdtKxc3Yand1",
  "key20": "2oFZJvRPCCjAe4YQqQHjaRjNEGxHdVqJAdsXpUExgW2AMtb2SCTkjR1E6mshGjWuLQNCcxrrQor3Tx4s5bSckZkj",
  "key21": "2vMgSRGkVGvaAVoQbo1gSnyoNBGPQ8S7iF9D7vUq3mGJfQNpmgaPWGKVC5oj4rkApgZehxhmupnMjb4vz1TAQe42",
  "key22": "3WJUWWuh8XEXY1jsDg9gzBHfzkXUFyWGJtgKrzSERtUWYUkcs1Bfh7oh3F8oAAws5UcsRSmMRr6Qgm1KCgqvyJMH",
  "key23": "WYHZkyjpCXTqukfuWu8daUFJcRrSXseNMJDfvQQitP4pPdhANAoLRvpXJMWsEjDhBMRA8Ktz87MfrfPY9r2Puq8",
  "key24": "u5StFJnsTMQnbdQRJLxcPHbCRQQd4UbeydkyUGVwbuMpERvcNrkDRhi4nQc8ZTDXXa3C5SaDK1ZxY9omgQQzXdF"
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
