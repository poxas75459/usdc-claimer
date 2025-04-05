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
    "5bj3Si53aQznDqFNg8zisuMQFWMtLM9eEn34HgXhHUp6REARQrwc1CF2xzUVEncvyDz7zCbHzMeFrBEZKR53ksdK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kMGk9iWQHrTH3TMpVK1VHEp7KUsvze7BJx8V7LsSWKsmrfLZtY6jaFHJ78pE1h5kAtKiyKKo8kF58umGjL4axjT",
  "key1": "7UJbmnJrmqJ4kLkA9dL8DiHPzxbhr3JTqDwyJ2dpGBXY6VqDyQuqhtSQAw819tt26NAW7oTUqMg8xCDH7S3bRJz",
  "key2": "5Gfu7TfXYM9ogG2KkS7haYKuMbQ13aiCoWieNRmAHf2sfxeAA9uYb6E5yBatGoRFdwFXkDy19Eq4RKMQgnozL93z",
  "key3": "33EPspWpWQSrp7M6bjyf4oiAhayd65wLeHjYumCTUpVT1U4wSWXrGkkkGGyFWaZXscCrFeH9EtJ732Sy2raA2LwK",
  "key4": "KkSKRb5ZAfxVVymBsur1C96o2HkuLgHmhSYBXc2k47kGxZCUx3u7kPF7BZeXydkVkwa2v4L3Qg9NiRn2t8GgHC1",
  "key5": "rr4CjwL8QSVu5uFW1BaFiKxiL6kpAjkFWgeVzvtjWeFCpjxopDEihRYjMMUgr4brvyypZm8A857WaemovDD253H",
  "key6": "3um82Z4WT7CSdMR3vo7CNRNWcqcS92CFRsCH4imP43vvGEhsz3azzefZvdLB9wT9cdcNBGJZDvTvUrYxRF8DNRTn",
  "key7": "41Xn48dRn7PzH1Y98rr7g7XpHNtsEPPbir8v4XAGCp6HzUqA1sM2Z64DQo3hNdHUne9cmR7DkxEpsRWkBeo7EYwd",
  "key8": "usobQcVgGcGFRFA7AveZ7oGUVB1dQPSCqwnfYGdm7RpzAQxHtUz4TitW3bWfRm6R3cGtmsVawbWRjSeQzHRq85t",
  "key9": "5SPeeNadXNGf4n7ob8B8VNPbrwugU3XCemoaNvFvcJsBdPCvKtYGCx8bZ5j8LghrgnhJTFhHTgoBwp4QSK2vR7Cf",
  "key10": "4JpzkRyUHn7prcBgvGwAe88EoLgHNeGUQ73yWCWU7SkgvrLyKHrbobX1manUvaBRz3xd1XFQWK8MxLxcj56gxRho",
  "key11": "FWCEKm9yiPtve2C4VHDUxvkFeNBHNhEaN2jzTHDzoX1mnBCqnerXoYTK4ibHwY2LkAVfR6zooiz3Nq1EporshbM",
  "key12": "5YLxyH7DtA8Jw9v7cjmvcR6rBGyTs6834Jt2N7cB2CKFHqVCtMxctgzwKHkaVgyumLN72CRiVYmXUR7Jxmq8AN4z",
  "key13": "2BRLgo3BuggE4L9sdjXsoUJarYswVQ7piB7upBytSgJoFSXKAsCsnniuQXv7E4dhHiet1y9S9FwQcpfdHATbMWdH",
  "key14": "2gT4EBgAz1ytUPkHnW6RBMSNot4qFh1DiqC8d1hLt4ejpjEi3v3vaLFes2b6hLw6TLigazbB82xnLeQDeDtLHW8C",
  "key15": "2p1GzAeG6SY4Es9iqoKw7Wq3jqTWLfSaMC2c6r9WhukNRzuoYCYg7dLKEjqZXJkLYe4PKW68ydZp1ie5fQ7ynx68",
  "key16": "25CzQYJWWoy74fCwaLzucTubpPqbwjK4VrNTFEuDNRViDEqwMae7krKJnRGb2Tv4qJhSDGiLPAxBdtL8k1K61QWR",
  "key17": "3GWkG6jAFTPxDmvPN3GWn8J9bUiLv1nrPNZU2hEWUNym7HUm8DtYAs3Ck1Ysx6rnvzxNQfsAd9pdqAKYke6UzBwD",
  "key18": "3ZRBnoBppJc7yUJPKkQEH6Aw1iQHN1bFq6gYFFWVPUVx3pyQpmQZiz5mjQn1ZhdkJXWPfXBeRak4JQCzAFUYLMeh",
  "key19": "43dpP8iPdbu8LwPZaRuXPCzrL2mZNkm8bZ2FbYEbMEPJXUbRXM79AvCfpgALnFC4bir74V4MRQjis7jbNZDwovZj",
  "key20": "4FhrowaB2kuGFqnXv2mBqBgtSfYm22S2PTnRx9m41TTTWDgkBLrNQqNDEQobZrbiMRUbktBDh7DqKCc2ZWzUQJCb",
  "key21": "sDXyjSr9teUooYi3Kmei287MH4cyB7aGQk1imki9hASmTwYY7eiF4y6tCW7WrXJEBSXmKmwTa5qftCTC6q7uMzT",
  "key22": "5R2Cf1KC3RvA2VAJjUZubFZsa43MN7QhGotesAi4DSEWZcCc8PV7nStVNtP1D4rdF6n7qu5fQcGgq6ZQqLNQ2uPb",
  "key23": "3RCBwBzpNQJ4wERupNKWgmBZ2sQXy6nc6H47iVqxh1C1wWHRCRyqzGnEiJzPuH8cgAE38E1QwhzFQdUxvyuPEQdM",
  "key24": "5snuZCHtp2mkPvj1rFQ49PjcWNnAR8FuUU1RcZNEWpHHjFpExc1heiayf9UktyUs5n9rhjYWGdiMHgSMMdT9j2sh",
  "key25": "2c6bNC9o1UfFvYG3fwcLi1nZ3DKcLngJNp98hwb7E8rniJqLCwMUqoCzCDjhFyBCtHeh49eVTTM1V9d93wAXeQBs",
  "key26": "3uWjCKgnDDNcMuTp8zymcgBTUpuMjSMD5QeQCM6NVA5jLRpLxookxrMdcSBLxCXmaMoMqQpKcY5MbMEFpddsc9ct",
  "key27": "2cqNwQEWeuMdkUQxEyvQrCuJnjSwKpqSiF5ut9HmNpiaU6KETHXb4oD4LbTkG6yB41kywca2fZXQrDw4YDpC4WW2",
  "key28": "zhT6RUNT8xTSTKKXAAux4zWBgAVfi8niwA48eMu6n6R9fiuKQc32dVsjGyRfmUs2ptXqU677YiD72roHcitjmZU",
  "key29": "hYz4HqqRmdZF9wig5jAtzAPTf8PMHfhUR4fbBZdL76GbWeAkSa4FCsrurmJix1Yq9fwM3xmAJaNVjLr25TBZTN7",
  "key30": "3EYV9tEdEAJrB33xTiRagsbzenMrugYPgiYPVnC3KaDi9kCYrVkHGq1CRfjgS3px6ZTZGoc737jhsDW1wbY8NiU6",
  "key31": "3rNCfM9YHcAJ7d8y9obraBTtpidmbSm3MLHrAquUrNPfFCknPurQQ1JaSTmgYesmKKtpUTmA64vtikPqDUKX2QaS",
  "key32": "3yJCCtr6EcvF3Sp4JfG5fDMyqbW2K4u963fQwvaDCN8cN5SvoWmk27JDeCASSmcRQDcvDK73AfpHGPbeuiMkZAbm"
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
