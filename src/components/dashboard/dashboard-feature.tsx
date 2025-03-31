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
    "2ZJtN8fGWWjM5dsJvfQtUcsVjTe9VZzZRPWSdeopMPzghK9ce94PF2X2F5KG3iYznCPL9uy6ENcKV4yvUH1Pmi73"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tCp8ijTtvriN3L6hNDvAZ3RH63z8JndHMUtEzfWJevPx1y3DXi6CEiNtrD3DUiK1dUkVq1ca95Jd9hn3EujJHeZ",
  "key1": "4Bnm6ubxbq64M4zcqWVRrSGPHejJyzsuvV3Fou5EDmLNKsLbxRG1GFj6qSJ9FQ19Ui67MhojZTHSt382KCkdprK3",
  "key2": "3nUFNeCUgChN7doWd3YWhf82LHPGTiZ27GSULaHEAdiemBoBk1if593uVX1hiTCMJt7jypTQvy7ViZVmNeRp72n3",
  "key3": "2qFAszcxyFRTHeX1iSmB8BSjmc9d1pNJ6WF4m81qMywPKeYarmmnF41kvhof1HPX4hFVsRskzWPwxknJ1opD9kvc",
  "key4": "4vHeHTfxHQvRdRZGZrSXJk23cJru2HyerTzFSaKy5xhCMtBrQNFjAZxT8rvj6rppomRtp17Vwh72nbvn2qvn9tcA",
  "key5": "E5PkZ3Yeth7GcAxpM9xDgpqTVxcupsKYrzWQP5wRKF3eBjW4bMhAqTvvwtt45UzgwponzbANra5hXetBF6L5YS3",
  "key6": "5r5QT6QDycAwarwqN26JLismoccAm2kGYewcNw8oLwGafoXwpcmikPffca3Z8DhBaK4CiBnxyZZNUzvfvscFHVfX",
  "key7": "2VTrFphhytk1xHPAYshoHmaKwCPV1tVXvaFAFMUZmDTLchJBakaxD7LNidFaeZRoqVDtzu2YnHPmtHPHQbbibhbZ",
  "key8": "vCRy2s7cZhZZK1FA91qeinZe6mxe2agVDLq4XBVsZ91hv4hajZfBWQPvSXdMz8nMq3DCv4vyCBVr1ZgWbwszSyX",
  "key9": "2bJrrm6NRvnpK3TAWFmwJMPYcSskfKFnYnXH6EmKG2dLNEZoETHHC5sB8UbF6mhJWKeg31xxcivrDSdbLBnggZHC",
  "key10": "4zzfzP3nKxWBkuhr9EmSF6ZWPMs7UWme9uZX3g2RVLXgw5ti6xCySf9LffcDRaywGd9rdhsiCkzxyWJHwXUVomeb",
  "key11": "5bwRyM79UejBMgdu6SEHVNe9zxLzkmNRD1kBRGrh9FhuTx5Fx5ear2K5rNH4shB1uNPEz1KxEhuGmYm8LZFrh9tF",
  "key12": "sHzwcjpa1kq2W3e85ieg5dL6mFYa8DDdqgdd68ZzPjfUNi9qVCpVfHvKefV2PqjRf5iQfb2zPTBPLTUwDM5DCjs",
  "key13": "2RC2yoD3TMzAin9FoZ4Y3f6grqSJZKW8sEvNHJy7HBqBU4C8H34RF8iCEW2QqBUhbuPrqQErAhUEK1TbxktXKbYt",
  "key14": "3vMzDPirf1KpKgPvHfERPRbhhWfRJTNNMD2K9iZL8f7gKSaEo86SvFKKNmHzmLBzdgyydtyGCtu86PeyMqi4eYY6",
  "key15": "5Z16MD5gwVQEniEw5P46Q9YR4WySRyNFf2JSHqc7tNFU4EipwDZdAq1nbp9oyU1Y7BGdswSkx1VSZRwTjrf5FG3A",
  "key16": "3dMrqvkQFTiAsDrevPebM3YoxvmPqd4Y2n3QRAB9iyXM9k7wrhp6WvJXCCPTJyEta85wVVmH126nfpMis5gKbgjY",
  "key17": "46ToHFn19UGQ5nuv4pMMLdpuhsYEUHyjyoz2jW7YGHayQVvD4ahnrPh9akZNKWgMCYBDoQBq6AMpEv6oyTYfHWYF",
  "key18": "35poJYq7vEtz1Xuq8Gbu1bPChgzDyT4HBQhu4KzXi9xWVmvBZTcGmg6senQ6nLJgLgCwaijANaDRwGMu5NCPs79n",
  "key19": "4UrUiRiiK95JzC4qvSsqGM4gra9ntiKWd5SkH6P9ucS618q5YVQssbLSSqRU8x7XomxgNH8SvCqRoaNWm3GUB6YA",
  "key20": "3B9mAKLhnjSsNQhhtnz2EsAzWCBi3aBXHqpRAxm3WRxQfL8Ed1AifsjfhqF7nCMqw7vkLwP1zTT94BfhyuSWurTS",
  "key21": "4wdFCKBA6uT2NRbhVzRNoDAdk6cmibRWXxTELmDnVzAHSH6HdNN24bSH6UfNPMr6uzbzstnNtEpRpiMqsV3dz8Pf",
  "key22": "5BinbGxwm1eVQfDNUvtapxzhb91h2pMfLPtVPeRow2qjZoqCfvuVEbEpYuRAyTqVvmH1EBU311aqSH5fcUiUr6Tf",
  "key23": "4cvCiKWPrscS55PdJMbhFrC1qxmxy4Wv4Q1hnnfYmtk6EgAkTwaDC7qhtLNK4CdrzjT36mBc5kquVNHqGq5qNDTr",
  "key24": "45rihXMBirLmSAhnzTtM8GzcfFCd3bhceVA5mYzQvDipUjtmLHbnMj6F9eu97S4Jgo3jwgcc3wwL36SoLPDaauNF",
  "key25": "5Feu28WvBaM6s3v1o3drnJTUPATJ8ZSVQeFpgvrDceENMtSdoA7Jsf2NLmT3ko3wJhVd4ZZ5Nj2JLZGmCaPFqXtY",
  "key26": "5Q1Vw8fZruVEQJRuCH5C61s8kxvDrGsjKedrgf1hKrxNxGtze35DFuQUQeKWi4v6n3jvYYT7Tz9LJqvZfz7qxrMb"
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
