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
    "53KSzTWY3FdpKghoAwijFEKsVyd9g3BW4verLLMKwN1aYHyprAvZQBfVwVFvTChj1r8hjWtmYjkGMww4ufaBjfT6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41sYmDu1DJByjuX3CQG7JADTjXNRjuwP2JB7ig9HwpvxG751nNwG7aJSFA2Bw5Z7UsW9Jg6TvDJsfEnqEBuW9BHX",
  "key1": "4VGzyHmdq3uMYrmgxPpog9gkyL6hsdN7KnHKP9JVcrzXe2CuLGTE1styKKMrwxqKSD9zCmW9ZcheTErDFjKN8Kc2",
  "key2": "4UpvGvZhN1TERFwpPni2SgjiEBRHf2zg8f7vmrsLQwm66pyrws9oB27stTA5MJ8QUfJZ53SHA9RAcpyuFhNXGb1C",
  "key3": "5AJUnLHjJfUtiQoWnSc7QvqFpZFZujpkAy7huo7ufmpZH9AY5geWDTmkZgCPQScAwBhPnP5kiqVTmKpgte1C4E1C",
  "key4": "57U22iRZTENGtizVrwtMM243MAQ535z6JT1GQzMnp6kTcMwu21t7SxErmnoDeZBALCEtDcrgB9Ch2u3m98ynzCuh",
  "key5": "4eCP4bXkKx91BM4NJB3G1nB9H3Mikfdc6FZ391berHMXpwm3kuXJKtAe1HdnjfDsMep9DVBqsik7L9gQ2JwWS3My",
  "key6": "3xFyLYn8QcYXteAScd4LGkWRgM8MprijW4g4zEQ7scJT56ma7mLttifzq8KiMEtAJ7JEkYF2YoViM9esb9rmaqKk",
  "key7": "4UxpBgTVg99fBUiwx2kVmbeUjRvz4sGLG9ojgXeUs52g8xPfPfq2jBkdGJqE2Zcdzdn3VjuhtcYvYreVNyJT8NkB",
  "key8": "gBY2JEQRDeWF2HkTQueNM8tKRngtKnuBnvuVj4iySDSDMUG1dFErtqtTxQWr8SsL6aQbbVpsiG433M76kY5Xf9B",
  "key9": "5AyPG1WLuJ8xuqoB4wod5CDFSJu6H5QbFRtKZ1GurQQpkZzenz8MUZZvvaMJJmjqAZr2CEajNrXG3TjSh4gzhn6b",
  "key10": "5UFbHTKteb52vvbtAswgcQGwNP76bG132316zvyDf8t2BfQm5WVRMCGcySYMvFGo1LikHx9w73gLwwAbzYGvrMBX",
  "key11": "PeEMufhasMKyFNpL8sZ97trp3J4NqGo8C56SKhDDr9sdyyFkPApfrFUS5cWtmH7yp1v6jm6NtaRs946WuNgBSHz",
  "key12": "4mFUkCpotjxhmwZogt2vBzvayMEHfoVyWRFf8ubjtiQLb3eodJ7iA3sZMVnQDjh1u6u4VvMCbcXAzziPEunygnhf",
  "key13": "5zySKZwHu21NzZMu8qA576akb8JtZrQWaZ9A458bvqZ4tysoZLnEmB7M54qAuH5j8gpqSRBipVM9VrBbd7h1ds5n",
  "key14": "Wbs9eAjVQJkuxXv5u6pq8HbuyHUSneXGCeMNpt1Mi93zHV2pSDEeP2UVLHgrio987WjMbMLDnZfBw8vVKWLAR1B",
  "key15": "4x6FE1uh79FtXxurt3tFVut2THRfpQoYHHMEbaBV3K9KbhGMtAM895SUKK9LCUS4SvgDSvaPLxyhVc2uPEKkH3By",
  "key16": "5ekPSGAXR3t8RQ2rcji4yVfMywzQqjjfasJR1eb5S39PauF73n8yPFDV6mcq3ecrVMZAWF1mLsvn7VdWJdgvi6Zz",
  "key17": "shgjKT3UbrWFLVW4yWaADW649JnXZkPNoYTJj6uiZoBfu6DHsUNFD5Ne3fdDkXgC6T9xjSFoUeE9wFAb4jebo4b",
  "key18": "2hsd7ogEDjCCpzTtVvnMCSFshBKPYKfoaxPeXCuJnAoEQ3GEVSSWf4k44JKLznNe1AUrTV15g8zfSSFRyJfipyfs",
  "key19": "2r9WctbMPf97qq7ZocWGai5HqhMzKSUft4xWgE9Xzzo5jrtfVULpkp7TvYZcSAffFQmpYTKq2GLXsVtUWk96zrfk",
  "key20": "56gtsfhCZ6fMvZcFg19QdwQNEPu23QzyvYtRP5Kvk9VTTeCSgQ9P7ohUayt7e97w6f3wSvk8ca1uBXR5HGs6R6YB",
  "key21": "3oXFQA9PkmbxW9PkFSZDDht5fZDMYSyEmq2RkcLQXTF2wnqVE7iB4Kv6YuLVvGW9qHiKcmKCD8wCvB5diLLUdjGz",
  "key22": "4rq8LxHPEKJ1V7ggxLkVFergc4aFrSUyXKR4G9iBWXuAX2ArUT1jP7UePQKZYpJCJtTWFd44EKAaFhXDQ8gcf2uu",
  "key23": "35zY3Ldfo3JSFZx6VB6Fhw58tR5fiLMVmnYXMXNChFH27FbLNpm5zHczTs85u6EZ6D5XXESF4qmDjop8K46sZuVT",
  "key24": "JDQWSPoTU2Ks8oZPsJvXYbJGybhutjdPjFzNVUH4aMAjpkyRUsSLNV7GbLZmkugdn7oW1UxKtsTyXpDBtLuM9Fp",
  "key25": "5yrKnnsYgEtwkSiAWe1KvvPEic87YYVRuEdKxaXFGSbiNCviz5pHQozWPUTcsZsEeU7Guntyw68vYo3Pni7eaWGt",
  "key26": "2NQ1f9nJqrJCf8TndpSE6UTVkr5Q5DaHYtZJxLxHEpbdPsdmRBcALoVNgMq4PbzyTbrs3PnnApdGfkFhyUvY7Khq",
  "key27": "4SMQaCkfiF9yTR5uU7dwZyRGrqvzVWff6hGR3TZ8vsfdzoKd4ipkh4my38PrKTiRja47kuCLsWnjgfREHhbh37nv",
  "key28": "5uYt1GH35b4eaNPc3Akc8xz9nSHZ79Ymsfp1zmw1Y3KcH8z5W6xKqG5KqKKyA6E9XtyCVRqTVdoq5RTUvTmnphJW",
  "key29": "2gA1VUwnyR963ZSYdTtArZdKtLj2ffBRG83ReAZG3ttRE3qdJpL1z2dXRxoC3pwKDee8jSHW3hqMbKhdCCo62sro",
  "key30": "2c9w2zxVtNWirzjApvLcZyTvmPDp5QjgWGt98qqP9oUoPQTdCFkGHMm2BwiCKfz4ckAdwe2DryBK1VBkwJkFBpov",
  "key31": "WRfkG75wQHbLDZVdhJnSnCN1TUVDWVXT8o5xd2xdFYPZ7WzFFmT7KUvaX7379iUFhz8HWF1RxiWHRjyCThcSFRY",
  "key32": "25LjFVLP3V4XdyBudmLtdVpQfjuei61Fqf6rxsCFhdq7jzgxVcH2fijW72hBN6nnnf5s5vrvXUYwJLLuhRf2Nkip",
  "key33": "3yxdiGRc4qCyvZ2phznAXda7HszPPtM3dSeMxRMSZF94tCaUeQfbYMjynKXHigtodNkjxMmGjG1wMBHg8CHLgdA5",
  "key34": "Z1wLVbeSkkHTMvTR6x9vpWTNGYJWSrsbFSMhtZffB9vYFGRni79NFHv67o4BfcBzyEA2b9BQvKErBvT9y4EUetT",
  "key35": "2giY1epECzPstbQYa6wp8TdQooUmrPaZoCycYQstUp6tfLH1RT75Rx6yU3QN5CEBzBEJdcJfTfhJCeLbzfU9nVt3",
  "key36": "67qD5uEGwDM4iz1YPm6xHfGcZ2xoyjN1C41bgSQZH1Fr8gMKKybg6DBsYTYzCWwovMgL1zLH4kpDrEbfwSeZMCtF",
  "key37": "3TUgr4qxMd1tP78g96PFBqrLu1Kxf3V3DXvx9kHoHi1CPvVCjTCdiWJ7D6rsZ9UJG2yYbQvqwvvf9WE54LNmMq7h",
  "key38": "4ZCpiNjAxLXmApj3efuXcBg8DvGrcVZnUCA5tnr3iopSBDoKMyVfUxLr9yFGMHadoP1DbFzuAxidFG3KhtM1WKCm",
  "key39": "2yQTMyn95YqqMt37Yr9iUiKE1gJtcEsmBN6ApMQZqHtuZtWqqBYTbpcZACFG8L6RpMD23KUXp8DzqZVdE7FDFFEc",
  "key40": "qbsW932fsuJEk5QcFVrYtqACevguUfCHE4iZDmwdM6rCy38bCxbAaMiJjWJ6sHN5mHGyCbbmUYqFVoYccg2iuz5",
  "key41": "67fisa2c2UWwjPkQXccUWjdyHBZEJyMG9CRuHeWGzspb695h7bg4e9UJ7HUyYHVKJt7XpVw2pmj8qMEUawQTBCU4",
  "key42": "3WDJU5H6VjQVyq1ZHx5ad4ohYBgRan1Jj7XturnNbETchnSzJNphk1xckJzJQ7sr86pSFGPom4AvnWXoSjGinERp",
  "key43": "5xkAhHVE1fFXJNyCegprn1wrGRf6KGHCjrHJqbxK6PqfQymdXppxVLuF1kCkxhkLcAErWvS44cKfPfvp1EnbbJBW",
  "key44": "3LdatK7kwSbD63SBnBZqGAHbXddKmBpQX3ino2HKy8kpHdk267kdzzTWw9rKuuCwQyLXt8CDJFtbom8YNKgekurV",
  "key45": "3EMxy1jvUVCLmZn922eMq2Tf2MvBareTnB5KUHTLMjMoEAp9VVWsj3eXvJCwhLNDnfwEkjHJ7rYnA2iqRR9MffpT",
  "key46": "4zEZvREKUWdzMaw17w141K916UBxUmWhNFG8UU2q9LdUxz1g3TT1ZKkX7Lqht8y6FrNxc6X6xJCRjCcVvE7eYDye",
  "key47": "xJe6yBMznWqY9u7aCamDiN2KfQGJyHREybQuJJmA3E55EP411QSb6oYwP7qnzYfMw5CkB1fQPA17q8fKmPxm5ZA",
  "key48": "4HE2nVV9ve4omBDkdFjhYVsxnqZZdaJj1FwdnLFBoBWpiNkuvjNCrC3V4e8fZZrqDU43C9BMv2AkLHXdiHQQfH24",
  "key49": "2jcASyqD5BRjZQNgih8cqGQu934YsRZBgStvBGSYV3ktkcHmepLbhkDik9zLTC9iCxZkLaNkTUKBQPiUXb7creRK"
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
