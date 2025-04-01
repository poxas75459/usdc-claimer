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
    "4Sfd8ibNWcr7VuVCtyM9onWBKsvkHenhHR56rmtEJrcBJS4fVf19sJquR4nbUrtLPfvfaEbJw46k1WZmWxG8GZ8m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2e2uKnaVocqAaS7jtcxjovBLRZxv2yW11Q9S7ZwnKkF31MhjgrqkgwNidpAg9QUtJMpT88hyp1DP9ZQyXWEJnE73",
  "key1": "4BFwq4KV5xCiq3G1w6Qcumd8mU8sgmfjKSHRBA4RPzXg9Tsh8h5ZEM3ioHrw5c4Gh128RyatSkWjDUK7Krvhtsmd",
  "key2": "3eyprZ7WJRhY2zgY3rr4mpEPuyWTSJd8yGavCUbuFNwKiKX3UYNnmAZZ9dXBzLzqQDArwJHUvPLuVwGMSbd1Z14e",
  "key3": "3tXo95AdNxcyAiT8LXJesGG9QRMbcv5D4tfPdyRewtWFjpPDhFp41qtTqqdnVTgV7XQfKXjDc8UDqUS31CSukHAa",
  "key4": "3ng54M47FybR7YQ7jemc27mjPaGWEECKw2oCJzrj14GeYUQ2k4GwSryn7Pfz1NxJWPPfd5PAjGP2xxXZNnUmwPto",
  "key5": "cFmjnZ7tpHZVyU9DerXQcBKumqiPQgVUjjBgTbsuWBXo8D8fLaau2JndcZFexVzkiJYE1p6qfSK44Zm6XaKq3cw",
  "key6": "4eo29NJgJLqKqS5kLARS6h4srXf2Phn2aRDWiQeZ11e1goZkJgjhHvWadBRjnciXMwVCWirMvPngkGXT9MBMshbv",
  "key7": "5SQUqB8WU2fKcz8MipFR26PxXYHAt7judpwpe4zqHFMR22aZUYHNjhpbFnEubZgrf1snB8qvoVs6f6Yhn7KfECwF",
  "key8": "42Gmse6sewXXbVHe2aF5Ru7NNv2W88FZtfCawKdone4KyczvfFhuptmaB22WXi46BZTNoLGAh1saYMLHCMRLG2yC",
  "key9": "57ZfMuwCkEG7vR6zU1qUYzd5aw3i5yRjbSQmJUPUMjPuEdfsiG6Qjb8RDCgvqczCDQVHVzvePKo3F1FySvV3d4Q8",
  "key10": "4kPN6PNTGYryr5NUyBbn76cgdmihm4Fc4CMUYD9sJdzPaXEKqCk8P9rj2KxE57QvgexY1fxsvKQqE4d6ELPvpPre",
  "key11": "5ZX4RbV1yBDY3Xuou5w3rkGVVGggfAbrZUjyAyXNGbM9AEc5q1gz544mvQiKrp1snNJWCnMudcwMTqBe44TveJ26",
  "key12": "4gXB3KZtBfjSMdcGQ33AbAoJPbQKRUJmn5rjcF58XiK1oUwkk14f1vhZrPnTnQZYEMduezZdHjQxgZntygCr65VQ",
  "key13": "3svJ6RNFYKLafRkQD5nWzyR1MxAsE4cp8Ehmvo4CrMcnaMQR77PypALJShGNdFHHGyc3X6sVa1mFagLwZ4nT7C96",
  "key14": "4w5tisWG8BDeWMnB4J6EfrcEBfZi9BjG8vPi2aENwUc6QVXUM2ssHmQohcWU8ezFC9croR8Gzpb3PJrWWpFsoiHi",
  "key15": "3wuEEw9qvXfJHrjDZZZZHgm7ww6AsWEwMeT4wFhpkHjhYKujq89V1fGrsgvn87pxMeyR1KHszbAVC4tY4DnxJxbA",
  "key16": "9jWEL1SjSXthVWfUcdYEkit6Etdtr7FmngnWiVaPHfrLqUg1uycMtArDz3TQDicppC18nP1Xa5FWuUu7x8dNWXq",
  "key17": "5FrUwwyN2MKhj77BDkZbigv14ddDYoxH5qXjCuRNqXpdioKvhrpXDraJAqs2xuHUC1SaEd1VsUNdMURimuvhMJA9",
  "key18": "3dZeSQ8nrKiSv7UUzFupVsKg492GWZtVdqYUKhoizMtCZdq3VLJd8aTVEm7EjtiAwojx9njBZvJRDKsJ1cAcGdYA",
  "key19": "2vn2VvfqJM69X6ArVHgDYaKH41RqmS5BNv8sdZEvM44VfB6k9GCQdfkM3V6Z6pjucTon6qURR6v7ukV2dcBvDGaq",
  "key20": "4upPcwy5EHXdhBUsNuaQPpRrCotP1cSb21cha3fm8nJLPs2wPd9WBNGsDEqi5N8EATTnR8W942TnzZLc2HFUPfgH",
  "key21": "3XXbrKHMCNsa1YtGzeq2RrjY5pwbEFQgpCpJWw9fMETbXaFGKhyPmqLP9BhBhgRJ9LSgmiDHs4NTBverBt5Bs8VD",
  "key22": "2G1WWrhxdEZudtcU46kB9b9jpzmWNNgNqsTA88h4Z5vnm7zpMGNTZkhP2TogBKwycaAi7UvommtcQB14Kjok7nwh",
  "key23": "3g6aVwtS5ScpCEuY5siFZYqoCZAxBa224XbRGEgGfxmqGJaxPXrcgv7VYpPuhSPJG5CSHDUcFWWe9VcjmzRdqfu5",
  "key24": "49frCJCHmnGSwWHgKVWCHkbDgvXZtGZjLGBniGm3Mkd5jJQcBxAW9xss5YwBTGUom3i9SEDNps6D7Du2yh1BfGJo",
  "key25": "3thp4YXZsHR6jwcBgJQx9rLptuweNXoWsTUuQygHwkT19jaMP7uzf5RDGUpSr733BpPQFrF95sb9PVnoEYsP8ooZ",
  "key26": "4Wtka9aBcNN2g23z6J3cBRXLLLEUtbUf2gZMjCg3HNVFbFJjU7Ery1rLCWCYhx3FuTh1ojaiMd5BFAbCozHFswRZ",
  "key27": "49oUYJE27CxrED1uANh2fZAnz66fpDuaJxAZ68Xpk3n6mjAu7nLzm7vas7ntkmWG8bk2DrTRg7TW5N6w1gKMiksa",
  "key28": "2JWJKFWDXMo5QoVoVJAWLRYVshkniazmQ47Zw25gbgMbMw5x6D8KVcjC4LxjoVDPaixHQdiAJUW9BZm3a66F1Ku6",
  "key29": "4GM3b2UACErg1FUn8GHPxpK7ir8ycXWCR8GGwH8QHwVTNTgirsvKdswEBBRJ8qGNFuRscKJHvcYpDSGqGYYiGysC",
  "key30": "4pDTMsn14SMToMMsnSRT1UMqPfiLb33CYJ7f6CsjqoXkNdkStqfWVRm9vxuKjsKFd5uuz6VTL2VQPN166yKVtcyX",
  "key31": "5SN1AJYz4bZydaXjjp4tKfdALkJX7JpUzHY6dAF3HZcoN4LA81yhdAJv1USndAviXbYMcnHUeYwgYA6FvU9MmiFX",
  "key32": "4uyofWQBc9n6CZz3LQuJPLcnexEE5VAxDf9yMtgDf3gq8zBRum8Fvi9ctSNH8mBJhUgMvSAZkrGrvPrnhfGTaD1v",
  "key33": "QfrmYEu1NdawfaHN1B1KssPiubZmnsjS9REzJoQwyfSLTcMdD5LHVdYEo22VZc4K6Gxjj3rs3QPU6gvA7wcomGg",
  "key34": "41HCnCxpV7FoFrhSMpWCZXgZTucQT5DHNHno1MDkfGP7e2xSVZgHDiUjPBbBYgrryR1cDTTsGMgvnRREXzQ8PzBg",
  "key35": "3C7zPrm7E65fqjyDXQJ2QjmZf5PuHhiofqh2tmstfmb7uMaVrXhYt8LNxUzdijMYK9aMU7eNVmpjYL3hTh4TqPHc",
  "key36": "jENrXYy9ZeEFWvWzM3Lz26uUpF8fWYUVXrVNSTfXKvrVYy8Z8TMbohrxmr8T4Ma4m5Z4dYeDhSirHYquYyh6LyP",
  "key37": "WU5KQggWSUuTzjVHZAq7CaUbgRbTs8daU7E9Q3WmgQTxG5NcmSvWqDgnMX35nG5QAcWrHeYan9rWY9V4po27ZVS",
  "key38": "4P5r4Gix3zpajwxai8KftazJ5qV8hPod7nsxvrkraETkDwthUGtmFi8P6wLrZmnf6K8Y85as6vd4v7bUdKLBCLNL",
  "key39": "5bRzhSP2TG9EXAfDFLRj7aZNwG8uZtkq1kHKtBe8mynHD1kj7xHVm4BXBu4d8xNkkec9i6totnUWTCkBGp23cw6D",
  "key40": "5QfHGc11TuVvmLBf4Shg2PTvfEyYmxFSwS72GXCpPzv7Qttz4btE88GVFtSHJTvdAwqSdNU1agHDAmxfBKWPubqr",
  "key41": "3ERqW7ZfWBzRyCgDzH6PnS5VPWPR9Zs5JfKHdbwJUmDcrA8uTuQ62b8zUqiF8ANP4pYaMLCqdJDfhA12A7Wk8eXS"
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
