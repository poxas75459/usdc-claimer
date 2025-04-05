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
    "64M7Y3bzUz9pWcUiHrEkTKzb4GazPRrEEGvLM32BeTtkUsd7u26aku3wXUquxFc8juRN9aPB4qw2fBsxwHc9oDLK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58EcFCp1oUXhJNN2A8CCehk9TNz5uogxE17d8CvbwiTDmpd1wwQfQcr6eBvd5pwyfHBBbbC2B4TNGegcxkfkY4rk",
  "key1": "H79sDXpTYybNmyvdXe6wfMJYbgZjBB81bcm3YpXTinPEc4AdASdLcGGUhMtrd25Mbe8Mbsbq4pzxn1rhNtaiEdn",
  "key2": "3o1Fbs1pRAn9hzcB8HA77HvmVJVb7sAWQnh7rszLMbLbjyuF4tabEYFGbxh8DNJNjjhMtSjAnqmXAVjaom5WQqya",
  "key3": "2jdVjhVGCddQ9sM7kvz47qmmzYvxTDzmEPTunjCWCoZC33aK84woGH5qLgZAQeKiufU7FB15CkomW74zsWZKAccu",
  "key4": "4RzsFyRJDfqyBo2myKDTFu5vmZbEMAgSJJhM1e8KbQjo2VYE6zs8YG1gWJXfgoBMxSXQzRSEc7e2Hn7GLWG8FBc9",
  "key5": "3ANjyavRQWNVtfDWeDei24YEmXYxepvwbUUUdUu9sXxWJK6UDxhhaNH6cMa2py2vf15ZxkJj4uCiEZVpEZy4mHKC",
  "key6": "3skaCV2EEhjrfnSCdZRo4W4kho5xQowUTxwEAaEWC9KVoDyoGFumenZiYJd9M1GvHqDNnC241NDT245qxypbS1iq",
  "key7": "5rMu8jVf95rmHNST6Ubds9tzs8TosRQCnegPy5DnxnqJGYYVSJ86xP7kCkUDFYGQT55U2fvfXHU1JzcziRLaW1a4",
  "key8": "2ZJoznPSK2zj7BEL4hCoEdsXCRzevxowpXvwfYJchf65hDzybK6TFeabRTVafDbeFCw9jWANGBcqwbrMyQg8ooeC",
  "key9": "5pYLsH31dzWF4wLWwh8pZ49NAn3wzQjVpQjEGUk4nEzaJgWcTKSAMKsrCN2zC8JsS7YPdHJsCEisDQXxsiopPdfm",
  "key10": "5nEFdD9bv5N1vYGUFF6ksGXWEEzM7jbLor4uxW4aEauXT5JbWuqncKKgeVDZg3X8i4mahPDDdNMiZfzJqbrgkqa7",
  "key11": "4BT4JEHkX7GRigjP3TcdZX58YmUcufRewqP6BnpYFECNqFXpJaxd6NY9RBpxvKbmSjr2aQob8x5pf8rpBm2U3G6p",
  "key12": "334oMqHfSvpR2unn2UpYAE6MkPJd8zgJdYkoAtnNCiEbgLzXCA8bP8kEDYuDPsSpzpJLAXMVdoVYWqWEy3hoVwYK",
  "key13": "5bNRyYQd7EKMKkPeVYuAz99ZuW5sNBEgkZzCftWTgyqvpD27DCYA4FWSV6NvoiVUKhp1hFJPj8mnf1RNbB31n1e3",
  "key14": "4SeRQPM563DiwiFFWya9vEhH7g4PXybyV1TfFHbHGy4RWhq2CiTMgxVjWAxwuC3FCcVoDrArcV5RRLNiLjBD694T",
  "key15": "3c5wCRuGut6G7d4H3txYw7B5VJCdiPYu8uFnu4RAerSCGQ91S5ecFbwSm4JZNSecWtJMYxKNQDjywKXCvdD71nNp",
  "key16": "57ZEVNk9eciBqVvUQ86QDTPphCKVH6SVx81cSELJnHTNophX33YisQWCsjGrpdrPv3vzeMnDqzY2d7JYHPsjx8vC",
  "key17": "5Z15wRtm54vq41qxx6Bjgh1S5N2mXF5BDBqMGmXbmeSPW7cHyhwjydhBGXe2X2XNLSQH2AEPnZW6SoqehRJXAzhB",
  "key18": "52a3CDKaRAnKt6aF1QQHiEV5qj7G8ZpyYwSDK9btGp6Pi8o8tQ66FjTVskifpwagAEMgXB7rcrjyeBwj1gQBDMZK",
  "key19": "XRcPfbN4AnWEBrpE7uSRXxKmR1m2eo2iLrazs6oUzsH6f3NpBFAVoC3AGUtSGVuPSBUYdHnvcrPBwMxK68igZuc",
  "key20": "4V9ZUooA1EoJfoJRLsq23upNN9Cdrynd1djSkvTzmCxSHMKNjNz4jchQGB2yBkcU27yn5PzVqv1iavbk1H8c3aaE",
  "key21": "599d5kY9n12SuuxGNqxtMufPf1Nxd6Vp9m6tKobsBRVTAF2nD7gbUkKnXED2cfQFLruakTdFLvbysRg8iXsQFzNK",
  "key22": "3NP7NyxtCnv9wMaT5LXXd5YMvGaMNm1fYMgP9N66U2NuuNATPGUgDnvj3WSzCNPV1QN1PKB7m1RHEn18xkP2eH9u",
  "key23": "rTBVRZTF77ajxyeCj9uk9qRKh44LhGE52Ju3b8cdX1dWrZk4VDuNLsHnHMJeF6zQQE1Rceu67Mx72MxZfsqxRtE",
  "key24": "2HNu8nQ7wscx44JdnME85wmzZjTcsKbDjQKY7DQB2wQf5Aap3SPGwYPJbBQ65zGsre7uhPgrrMMiza7vRSsCw9Tm",
  "key25": "4j7k6YY1xTkxecE2AH6MfMGYMox1SrHafh578v1sY7CKHvNoCr2trLd2JRsuygnUQHoG292p4TG2TNmwXvtj9jco",
  "key26": "4j8mUD4frtLGkKSfu2rme5sJXsxS4QS2uRcCceSaHj9UX6atpZU9SvyLpgVZqZ6tyJLKskX19MHwAK37RibTf8Tw",
  "key27": "28JigAFmfrnGmdApHtMii5AdfWXM6dNZzGNxmoVutLvZH3hBUwS8sZFdCD3cftoYGS61JKKiwN9EVyM8bXSZqR5Y",
  "key28": "2yvHECpiQzirX3GDo2FYwz32CxduxBkRFMKxpQrsaKKX5k9UH5Gnx6VnFotaw89nWzbQ79ju7CB8nPLtqwHrFRCM",
  "key29": "Rzxi9yd4GCRkwnQSANy3v8egH8ZYNfYmSE1SxJetjEVRSqWozxEoPL1AjR1CXWsXvhK6FcWj2EtRXRxv2TqMyXk"
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
