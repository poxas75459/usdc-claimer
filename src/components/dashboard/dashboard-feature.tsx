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
    "3tBigFcstbkcQ3P7ZKTKv44sJFScJacPYMQHJuvUA8pzAxpEUR5kCbpqZ7hpMSrAB6bw8JivWvR8NMe9mABagqe8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WEnidQbHQsmXJZ49yzDEzCvqGQ5uroXZ87hKuTzAKB4Ho73RGSL4AmswtDXHrrkonCyoXAjf2SnmZefkowZesEA",
  "key1": "2fS1RYA5ym3wEkX5u1kWYsEsgAmnseA6dj2va8zG95qxRNY6W2eyE7c1o2UNaZn2VeU3xtnGw9kwyAwmKA6D9BNd",
  "key2": "28toBjpPXBiJUSih5zTLifmHawYjZfBpZHZo15UJei9ftugEdEq58Fas7YwwN2jBHujUr8FoZwup8hS5rURdJeDw",
  "key3": "5KsKxfAdVafwMqgSje6HjKo7wS1njAKenjsDNg4q42SuKrWyVuJ2NHFY6pjWffRQTmYR25LKfV33BdnJ4hhMcaCi",
  "key4": "4Vfh339TrLA3BHKfKm2XFuxUTTZjAJ2vakuu8AWQJBCpTeWcdpEcUdXgwC96L7os6mMCBrUQjyPcPo58DVy1ubYa",
  "key5": "3c4TRjhW4qWfQonndg2ijBP5ZjPS9om8Jqi51om7Ht87hU3yQbogx5WmSejbJRK49Ywi3ibackpomYM9s6iipbnx",
  "key6": "5zERaJ2ngVDQc1rTuoNwiALbXHmoAFPoNA9QburUbCL1M7RS9PCSW8ALzPLGLt7778hA3JKz4Y4iXkp1yweRWGa9",
  "key7": "2HbdGwuRbzBvnt2XVkBbKWBkwovHHRXVR59fFwAE72RgQQVnM6uv59pdRCzoBWdnHV3JUWySsdcPY2pp8KB8Kuic",
  "key8": "4DnDC8aqmMr96axqXT6bUrwH5Cxp4pMf1m2ckRz77YmKH9p27TggJMES5uc6hjWomC9XiKEnTvUanPDwHUN6hr5N",
  "key9": "ufhqR8YQquS7CR9NWZMXgwzXxKwZ6gThbZLtqZ4bRMpMxPgfCEi8xdGrfxpjUdJdXTAsGSpiXaqK2p89cRhyx2o",
  "key10": "4xhtbyz86gXx4odBsY5PJ8ouGPwZD2ue73cFU67wXRJyokzkR9QGtNiv4rrKFMKnNHQviuP4PVcqPihWkk8aaXCc",
  "key11": "5Jvjstxx9j7Jrjoa2Ze94DvBCEckA3WJV1P16Qu7HP36PsHH7imwAgnSZkdzMSqyozen8973pEGBQh6MEGPGVNyY",
  "key12": "5JY7coZqVh25dHEPgybaUZT6bxEAvk1xabjzC6MyjMRqvZ31hHGFNCpkqZqL769J9z3bLBtr5TgKFCKr657BmUon",
  "key13": "4bwRNGevWdXxc4Goxw2Mv5BUAidDopJqNWX9hw8qs3u3yFQaWXdpo8JFCShXuCyvT9UYRhsT9Maahet9KoYQV4u5",
  "key14": "6EqHugtrHDu9qERAPZ2GGAB3RTMVNTpJUg3NGFnJTCmosuvH7U1FptdUKuYcrw7Le5YS3Jzd1C55LZDvxatj19C",
  "key15": "iLM52on214Xg26Eb8dQTrPvdwCzEkovufssJEyMybcca6j83eue5CSpsLHr13amFDxQGRd7yrdQ7iMGD2c14i2U",
  "key16": "2dBrbAMSuiB3rbGhU4oe9E6m1azLFUoUJXxodKSoycUsqfYMnNn1yMcS26rDq6Jqrv2doWkNGNt7c6t6CgN9hNm5",
  "key17": "5NVGNarFszLLVXEVm2EARckmoHf8LqNaU1BL697jB3xN4epHyBEcav4PgevfmUUAvaJ35AtjywsWAjpfpegY64Zn",
  "key18": "AMdN8adywYU8XRTdKPqNJshgaNLjj4ZQoiJsDTsTgdtKvaNmGMeEYEnmiXwcsLrXjnf4VokC7RNRQmFKxpbejXF",
  "key19": "4FohCHAYNQk6MbSSNf9H4KLTHz37xvTSMY9cUyGTV8WbKkcBUTy46opteGHsVmBJEfkgKAZqDSB26ZihvdZwhLKN",
  "key20": "3QGeY5YToxiu9Dm6e7G397STMkknJasTg15GZQ3omgA2ZisancLRYqnbenEEZEmiDPvYDDi4Pch9ypPgmabgfrkc",
  "key21": "5pZKHa7kj7WuyEV4fETrZzQvuGXim3icZDJBGuHTXLyp3sfQwoDxZphxhDJVnrw2EBnFhBTMy9wBEkwNicRc2d8d",
  "key22": "5o8oTseXwQZG5RvBVkn5nvtcVE3FEG1ASKRZw1pzry9xXbbBvj51Lhx21ByMESFbSremt51YQ3T4zXcZkFXggRmq",
  "key23": "5wS1vsRSvuaxhHNKK5GSHofnMKs2i6yyqQcuAsHxzyvUg8bqRLFzmctpCBfk8XbGxbXz9QR6ZUKU1ckkVYPhSnJi",
  "key24": "4HikECZbxR8cbejRwWziQXVxEXa5urr3emYk27STZr9ZeFZLwEkotET91oWjLLGdpd3aWQS25jnPgXSXrvouVPP7",
  "key25": "QhQUkcJxAUBP4ucZ5R9gLgGQAWVUKcW24VXpC7VE7aEngYBk6TRYXeU21RLRbLWYrUaiFtUK4eeH2KPrjwjMwKk",
  "key26": "xGVznDnQoe8LPBPboXSvHn7Pt55r9bsk9UcGoKH6ye3m7KRrXgZGFwtUAmEktEnAMf4qJb4jwKRCLj4hPLW4YRu",
  "key27": "jZvz5Z3voqgy4LcJC2Nys4Y9dJ22Wz4XGaRU4L63t7upoJAap2yL8v9jhhJcFjAYvCrk99iajaoDqb9Ba4kJyUb",
  "key28": "3ZEHHRyELHSN8ZVi4hqzV6Q9PBCaktLSY8a4oJ5JCaL7MGgCAj9rtVQBvSjMJjCXDwNDfPndWnLa36PNe6YtQH4n",
  "key29": "ngw3k1sQ8uMWvWqo8wKT8txZqbTTVUhBjfVE9BhqWHZb4dNjBLHFb8LsJymU2ku5U5kmrAJAWuBP1yXxr6BG29h",
  "key30": "3j1WJ1jTUEQU67Mc9kZLto96C5SK1J8cu8LwMT2gtQ3jcEJHtDu49mvZmJbA7NkPsQUNoBVij44DAmHbjBuXMZ7J",
  "key31": "5fUddbLKmuPcRRkceGvLwiTzbrhALn17xoTdBjtrNqM3CV8Vb5U5GL7Y9HEAZKQFZQmsNsUnzMyjrdVqpp3aDk4u",
  "key32": "5Mzj5XhsRaMfWrQRfnCqHL83HNWwzjyZr89NKh5K6c2szzxTsAR6Vqz16Pym9yaPEMgJAzG45eYZLqugRX7NA64u",
  "key33": "2a54rUDzysFqm5qwUQCQCcJiwX8Sa6nw34VwYjw9SKyAVRKJDJ4EUTpGVU96RLapjzjTxsaRcpZqEBgESTgZcXz",
  "key34": "5c3Yi1uHDdG1t3rg4FstTh9fuNZr2tpqKE2c6Z5xAz2axFp36NmxM3TJDRubVTB9Z5Dirs4crkvMU7dvYCH4KQJu",
  "key35": "36VDa41bz6cJtomcE9aQRYreWpsJWQJptoBkYuR5sh1zXn8veSYoN1Mf1yT5ZvHpKLiJ3MaDpMuxeZi5WdiYf5Ls",
  "key36": "4wZCe5oMMrbi1VR6SGs4CGS12QT1gY22iivo8Gv8ivP8WXze35yXQ1kKvSnQvVLauu61CTAvJN2nw37vEnwLZmF1",
  "key37": "WFxcKe3fksfDuNk6oZSec7W8zPceWNBKuffnPpJfppqMnZfee2JXAuxxh7qSJcYp1x87j2qw49u2aUMgC4cSATp",
  "key38": "31DBpEXbmseTZZHzS6EqJJcAQo6PWeqgeGPHrSPrbziU4aUeazANTadkJ1TxB3DrCnjQxnmYrMfr7qv5TWARu8tC",
  "key39": "4ps1fahaSHmUygSHKmHxhHMJgiUtKPaSJi9zbrAcCWNKK2BDB6VRpHkqjKu9fgxbGemW69MRGoTGR2z6mU1hBkFw",
  "key40": "R5oJTRA6RVgZAqceNL4QRGznXaMXdfPjMMNADHXhg9oPWsQ7BeXr3mhmJ3bPkFH9cWgBC3e3ZH4191UizY1AVAd",
  "key41": "vz1vHwtu9MmV2xGB7dZd7L12f7cRyK6XDrATRnj3n8EuA9hsBCk9gYxi7TTZYVMFG4J4SPX2bPkhuMXPXRnr8R5",
  "key42": "31kq393s4Za3X2Q6D3AEkQEa9FHRLbrbTxT2jcve6LNLE518T2x8d6h8z7Y4z61WUMbNowY3dDMA6yVYHNHfhb1B",
  "key43": "3wtQ3KQMVCPGzJBUcpxan9HBxiScJzcVhfjCBcVzxptQa8fjoeeYUuzHVW23LYmxdwXEBfDrb7pheXS8xnbVass6",
  "key44": "gbsqs63MHXtd9NpcdGSLSqXWvGYTW59kSE5ACvktvmPVP6RRriQAEJnbU6DvWiZ2QhHCiKxDGvfoYHaLneMZyzu",
  "key45": "3AGZfCrmH2DJ6894Edydk6aZeVGvhhe5V4PEkyX4D6os1y8z6RVrp1J5ynF8cTX2JhT9Pv6xwSAu22RmGHM29e6H"
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
