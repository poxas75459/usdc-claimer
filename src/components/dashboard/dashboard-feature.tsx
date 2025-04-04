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
    "4Y4ULAS35ZQ2j4QNA7G1GF4ULdy38SnQ1QS33HgbXdKB4Rk7WbupDFRR8JYWY73UaDmST4wFKSY4Cpmt9TD5YYtK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33hioc1pofG17eL4zPayAGjZ9Git2QB6RUJhrvnAbhezxxdAfsSQvfrxvzJ1uruLk3EKTsW6EXdTU3tLXxiPvYrj",
  "key1": "4cUnpquvrJgeQg2tUrunJvLGSsBeNb7JzKqMX8WmPiD3UYE5RwmWKTTmMMgma3EfvvFnZ418fhSHKS3uayyx7t8W",
  "key2": "31s2441vvLvfqG9wgJ1R9RddEc9NThLdahtAHvH6VarUmYFMTZancTnUqDevseKfikHCqikuQ4H1eDX5PsxPCbcU",
  "key3": "pPGtwmjRV6EUFFDWVMh1DhiNiPCn2nYRE4PfkwU33NAxt3VTvHELNYC6dYegJDW8merG5SnR8kiYGnjPWbsVMm2",
  "key4": "bPufWAcJRuZeAUPV9yXpvGRbREuzKhtLn6rh4AbKCNkuUs95YNtsLPSzQQ7JzTzNBjdCYiCsj6hGeYxVWq4gfeX",
  "key5": "TqNCP97grJN9Vkf6KVAPReABSfJfMZVFgLtZny3jaKSeqtJagNMGpZdokm9fQ4CErus2UkwgubLSxZE4SQXyduQ",
  "key6": "5Jf2sSf1AEF3wmXb5KJZHDCF8s5Twwc4cVfv7SdisBMMqomCPdjy5raiP84oMC1ihhCt55aLcGB9qNg3sph82g98",
  "key7": "4fqBmfGhr2UFnHLpELjT6cue4WPAUvSkymjZBdfi4JBTQiD7d43Wv1TEbiA447NVFKXgUMsUgsjGGnyuUoBow8yY",
  "key8": "4K2fxg9K36Rxb7wxH28wJDFrBK2wngbC1VAga1Gq5617tbXYLjdv1zPGFJfWteHCSc1vWZYcrzyxATwTvAwebBqg",
  "key9": "ovd5eZAGEGv9qmkk8QGBxGAZWe1RPfToDp2pqaHgTujo6m4kVc1X3EeAAvhtFoUAugz2Bi3dwfRKGbxbzNCN3Kw",
  "key10": "3VQ1PgJKZT12kTxBb49oiDqwPPT7tMKmcCtKE41KWsxC7Ydf8qw3D3YH6w3R2zfGt6DmP8yk6WpSeeFFYhXR6jbD",
  "key11": "usoFUXrKtQhRRQackHT8BhFo8VJt6LtqY13QgWSDep2JrWvP24L9pVD8j3ouabUBisGAdSpuXFnWWnqTHaBRPXE",
  "key12": "EEivcf5MDyW94YMME1cfYGwwwYACTkjHbvaRVpAehuzVGjrNs31raPQLLYFKwZQJxz1cjpVFF2MtFS4yfzCXNvY",
  "key13": "2mnGSRA74uUeRfPSYFByZu41QY8AAaeuLhsXZxTeu91Wr6vc6Ho88dGnqkvBghMSnFLcvb9VNmHKfz4G6dAPnZVD",
  "key14": "3E5ocBvdSjGtUsnbGGLRgXEQU4sc1z9pZoju1qbS3xfzeH6qCEA7LhfB1VDU2vyRrVganBQNicFQXWtaEJdfvCv",
  "key15": "3rAJBuqXdtaRTRa3vE8ipXZDJwiFFJzWEN5R5iBg5q7cQH9ETwykXnnEBtFTBGJgQhVnfCW9RhLbGttNQSBnUi12",
  "key16": "ZvgnRKC68DQrc2CeYotXqSwXRYCrXZrVpSpwN1GLzmgGud3N67NGm8bVz3aGGafi3s6wk16keTriecacXFr8ryn",
  "key17": "5MsK91pSkSCaRJ9xUVSzisG3Q62cX6jdnNerbuHW4Yy2eV2NbpLeXk5E7PY41KZE2Yar6VYGSPbPfNzYD65f935M",
  "key18": "bAk1Exe41H2iRyBmz1KUpUVDJ69qHzuvBLuXJRk1f4rJiJWap5kTiDN3GYketYD4UTZ7hUXSGNJe7YMtwA6egt9",
  "key19": "WYbfeQf2iXLXbxcgCHkf3oVXoSzVZE9ASdAf4m1wUKdj8RuvJs5NZTSBqVahPhhQi5357NbneCsoacGCqG2VYQc",
  "key20": "4L4T7rGbhhxoJ6u6zVEG4s6yi18GZAzUEwbQP8MnoB3kERJ2JLzFjU9yjaaTiJKsUYr92aH7QNfYKWR3JtZvipN1",
  "key21": "2twbLEKG4tYKnafAMst2nQ7XuhxfBrDP4Mthgu1fipeGYtjf99s8Sa1W9yWujvwQsqZATDX6RPwsaFxtggmbFgek",
  "key22": "4irN79aypefytvU5G7LtQHJF7FbTzr6SdrNZcFLBwJGimrxp3rv1NhmMv3v3CmWi9ETfH54fLv1ank628hFQc8Gj",
  "key23": "3AdT1dPLV2MMeqS4oYiKnLzWpnUerurn2Sfx33QNS95CTkAowjxAcyUUcNwCTC6CdfJmCvdgPtUMHgRXLBdy7YcF",
  "key24": "53jVjt81c27ijNYh59AujWcFtKL3VXm92cb1z4PcctnwqbjXb3nyL91yAbkV9dGSUEo1Q1Jybco6Eqty8TusXw7W",
  "key25": "3D78cVqoDnGUhND9Cm32CVmWNJPXChSc83DvWJQcyzKzcvTVVDTyikEgH8CAGg1c61y2zEymntrxpi8V15pgMuYL",
  "key26": "4eJWuH3P1sntEpwU9tDVTiNdH6PzVMocUCRpDm1KSVn4Z6n86ZNr9EhVLwbUUxhaQ4CBa7sW7hLY2BXaGiKzdRAx",
  "key27": "4WdnWNWvNKTCb7LnvFzCghaDt8xDA7UpZj1qZyHpUAVFmviyZK51LYpAk8GyUSfj2HKyNYohmKwdCAKdcb3NovD8",
  "key28": "5P5Q1og3ripdohHdsoAjPUp7iukqwffR3Az2cF7DiYkfHmikwqdb2A35NNPhfz8wUzj4s3y96aCLw9Qy9UuYqhhQ",
  "key29": "geru6AXjPWfqdirNPuyirdK1YZc8FEg1ZZjoZBcfi88FT2kUyAEV9mdFzmuua58hTnAEhhJekjt4AC5xk4e51dF",
  "key30": "3sVrnahykLenkoKHtntSja3Je8xLthU6rUJucRSqsNkoWnNEa7Zq22hWdvXZnkoWNaQnZHgA5tHBhvrZySJd7pzV",
  "key31": "EkNpJTEMo7FKTgX9zxtB7ShzJn5SQ8ZARh53UBPEQdrof3G8UVH2sGZy1BzrJfuhqwQcp3MoANgGssfQPLswj7m",
  "key32": "5MQ9FsaE9PFuZNUjYcfLmCNHLhTH9HsLJ7rM19UfnLGv8KcM6cdL7bivpU89J2rZAZvJ48Sta6gRL2D73ySW3Nxa",
  "key33": "2aZx9HqJsBgKkF2SGATf2AmhuYSiZGTGs5GXCNDwvhyLyP8H5BtxiPntR1rkgJ8dLvGMtt6qTP5DouYYNxhEVn6N",
  "key34": "4GLrosgfPxiaPm6sHB3cop2hiyTqSZ9qJ8kvP4hYgKRTRH9j4vbgBbUPcwStNbqhCATUEaHi21BqyRzp8kFpwKpF",
  "key35": "5kUXPP869zRXCU4uC1ifZ5eKBRVnkXdrAn3czTSCUMGcGir8psmUJrwGrU5B1nbXutb2GW3q4ZWtnGUm44wbwWfR",
  "key36": "2W3FAAmXtbQoEG3xSvEQpUTf4pKkZuK6CKjwevsjJX36CvudKe2wjZwPLqrNStVvaEicKb3GcPcbVyNZeCKc19yr",
  "key37": "5YZbMQoEcYxdWQVg8fm9Rxp7DCXZQvz9CG87vgmw5A7MAqBpvHh551VqG1WBrPMXwcAatXig6KjSYCSwrMfcE7BE",
  "key38": "3NvqRhjNMDi4ngtezSjSuJXaKzuLzCtDZjnQ5qwGEqjbGkxXAt59Ya88RwrvDw5i2ppNSp5jtYJd6SVMuFKAdnUA",
  "key39": "4PofuLai7gEPMvDo25sDgyZWW3WVMik1NaRtg1BLkqYDrXrWPQ79SJAH8xxeK98K2hNHrgqx2ScoMrsqHdSh1VWj",
  "key40": "28UvRjWfeFYv1H5jpcm8T8d2X6Xx6rrL6MR3muFzuwQbcAd3iyrqhsSbtVy2iHwqcd61PVtjTt1XA2aJYJ6U9AUA",
  "key41": "2F3vh1wD9YMtKDFY4joBpG2Rt9u8Nu3wgzAW3C5Rb9PhoNwrPdeqLhQHK8vt8nEfjJQojJzsGBXXXTSPsFtRdqCn",
  "key42": "3N8dJNmPyxiLHGccL1RvnmFqmHCxrc9LXNHzouJv1hu748GZ5LPANKL7EzK65yednhxE8ywnjc5up9E4mhVjUw3u",
  "key43": "4Q98ZowY8Fz4xXKsRoJ9eRtcqgsVbg1CG7cvZHQKFv7ASd2u5c2j96qr2UTcBJamZPPYfRTeMaQQ2WW4FxV9bYPz",
  "key44": "andk1mshAxy6RnAUZmgBKCEmzoCXqsHL6ayt8EXENqbt13bHwG72zVYJxtZ4WCBkQynhGQewgp1PDotBv4PP7og",
  "key45": "4DEE6XTruY6RDSLMJFjjXBYTYaTUhVcbu9iaPZa2LevwUpmvPGk7vUxE8yNXcQzeyUheAtBJNbyJ6oZb2zwb6Dqf"
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
