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
    "49K3L7ectsCgPi4nce46z3bQdwTUJYsDAdj4utKdJRkSEb1DthR2eohwnGaoTViojygFJ4DiaaDhSAEAM1DMvc79"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46sQRrzNszqeeo83AU1Ests74PB2EbAYTGnFbHHYSf4nPNGYioxvBrpEnucGgms9B7FcBCBk5eh13n7qZxbjmD2G",
  "key1": "62JV4q9eDzeufwpvt2u6hTr6GSiC7pB6pyLcao9zZVXNK8UMMViFgZB8acBkvsf2hHmJbFVPwXdJSYYUMkysGk9J",
  "key2": "18N7UirCiDQDNCZkdH3w4WQuVLVfV1mUhngGZhEvtktwAzbT1oZZYp7w6bfKbX9aLqn22m35hfcvW5ZYmCSC3KB",
  "key3": "3vP1dqaqCSSPK8yTFnkHCTr5Z2W9eTb8W2aqqTqxrVihumjmL7j8VpfXj5Mn4Mh8gY7Wkih5JmThHiAuv3KGWq3S",
  "key4": "4LpWuZvsEoPDgqsqicS2i6Fdbky6qi3xjh89EYyT8yVW7dSjJnB79E1FnBb2a35dqityXRpNkeQdQMoXFxp4bqU1",
  "key5": "66fcDCFvhRpApLCrAR2tcMP1r9AJnUYQ1QnyiRyC3yRBp2nyMNPY2R8CdeAQcEnxHQoNUdfrH2Dy7db7QdGW5H3b",
  "key6": "2XmaRgxxhZ35VDurfb8YhMwJYhy3kV8Up8NcnzE7rtqeR4ZwCpynFJVBn2GLM4oiQEaSmzHJtoSmM4UPERLaBUGd",
  "key7": "4FK9YeoMCZKPye9rFa1mRgY6fJoieGGiCoxWXkK6yLu9dpg12mneVege1AuiCr7Jm5a5a6Z2Gp7UeewMVo3xXroK",
  "key8": "5AUVCC8DmZ7kNVLHTnoxNY1eSyVXKt94EVFDq1UkT1xcE88QQrgRVe5payV5BDTcagLbVae2Gxe3fZBak6zbwZ1C",
  "key9": "4egBxpYBYzPuJJSDcBAtVwwFwKrnbeYeSrcvyYzr5NiwJthQKZ4A2URcRd8yYGiR2tghUyPRhK7ANdGZBvAbZ4PU",
  "key10": "2222mNi5z8LFZ2Y7oYzst5rDRWxQbcoapcXULpmnKSAXa4rN9zQbsmrPdwS69W8WdB9he1a94XJpktgnuY4T4vvY",
  "key11": "5fWyfEGW3VadaxPWRetAnFPTipmwuaUiV9AY87cAfxgLikESGbM9jZaTceiFifhjjRR9m5oBSQEyyvNVin46oknp",
  "key12": "3MK8vFkS6Yqd5sNwhZbEVBRpM1SrPXZN6DW2dbsdcGySJ95YYhAor69h94HjfoKaDG26TJUJeQjToSHJMVWbQGvx",
  "key13": "QhFUL1fqyfPJSCCgPToDSqRSUuAs8kcP8z2CxEVVu15JnvDscvcsWpZuHMKPEr5gnj7yFc4y6YNvUt2iwBNi7oN",
  "key14": "cEbuRqU1LrEcS1Nj3v93xMn2qjqxb2fzG6exEwr486ConzswfFoH23TyeSbeMg95BvQSE7FAB1efLbVVfTRuuDf",
  "key15": "5XudzWm9YYggs6pjNCZJhSQQmQCeCmM7BtfqwpzNjdgZ8zbEerdiK9RPYDLYLvMknAX2uLtpFpFhyiPATzRGShkD",
  "key16": "3ubcdqfQ8z81B2dbx7d4V5mrWn7eTnPwFyYRBXAJghGvFFAz8KqibywkA7yPH9A4gJPyjrWF45NCKJj9577Jpozw",
  "key17": "RAZuDvn4LSBHCkem8Etmi3K9yaQ1LKHNHS36gTGyevyY9mvEsMTcXyQZL3wp9zPvBVqC4hh4rXpeG4s7UsX1LFn",
  "key18": "txJZJKutWd6eATAqW7cqqWryY48qYwHivHaY4eZrzabJZkysfgN8cjdBZPY8pgdCSLAUhhgsBmHJxf6VGcC5GS3",
  "key19": "4LK9rKBF2t1gmdzKHNWYduTcCpNHeVKcPtjFjmkoBiSBWoHGRjWDvKe47JCo2Qvif9hEPMNWfWC4wx4gXuA9EgtQ",
  "key20": "2EifwPDRev4sqiph2yNFeh2hZ9jLxQ63RE1DJFfQrNBv7skxWCkDYPhLQJSCryDu9zR3hAxQ7amcigm51MdvCzNy",
  "key21": "urJPBnWTPpKKDpK6SAyzEWCfeGB4iBe41NYQWdbHcWCWJqGf9DSLz9muJgAC9ar1CUNqLUfdSBMEAatV39wABYC",
  "key22": "3VLB94SynK7htbsJTdCes1QtKBrHsQbRUUDuJucDtyvLQBKPFCfKgVUp3DYDFPiSF14PvJfH8SPRSxVswPc6ifVr",
  "key23": "62fhbb2j7jmofha4ZesZ1w4yu1ofpS6W4uEJPMntRLsFi1mojQPbrxs6wXizQnJDE3NfHjZYEUABct9CGdUkxHve",
  "key24": "32Ji9VryqdGW8cqDztvmRytjF8GiacWZWq1i9ZPswJTTcZ9VgVosgBkq2YtUEnmHaEzooCzDtXMZKTDFbvty9Geh",
  "key25": "3sqAtSDgKay6tjaMmGkrbxk9xfLj3KyXPv3JDf6C7B1M94djG99ShFoxUnuA3rXMaDCfM2EgZTAPJ2jNHLE8znJC",
  "key26": "PRaWWXEwxcQkJAqqBRWqCVtGTEUoygeHQ35nzCRAFXKxWyB72WQHKQas63omDbktomp6CBHkz3wsPs2ABdxREGv",
  "key27": "Lrw9eWnnM62FU2mU8DN6rudA557RSQ12DTQNHjw8wjp21pumPzJmqJXYTeyvfJd5tp8hiYz6DhBjLoRTVgezbYF",
  "key28": "52LPfLWVtQe8LBNUKQy4yh3qBy2G3DomwvL2v4xNBgcvbrrXmscRTixLwMXgviymJYp8mMobVwvjk3X89J8hB7vk",
  "key29": "3AbmhKtxy7rsKCi1t37B3s7GmKB8fLEWtPFU8mnYt4GB28rbEG9osTzpDa6oH6LUt7uV15gfbASYdGbSJc3hYKRC",
  "key30": "5bqsyTaXk4NxbcdSwpvMt4m7jLu64r2NquusoFt9dtCdRPmqcn2A8kRY6g9nsbskavhFTmS1cV1FLgjPq7GF93S6",
  "key31": "5HyTmkaQDCZBu2mfcmdFwFf4JmGFNVitypTbrzaE1mEF5EfFYDzhB7xqi3eSZVetmB8VvCgjdEk6e2vgy3VUMjzG",
  "key32": "3zrBBaHG76ztfPk7vss6VqTvszA2ZfPUdAVmHwEsr3qn3Z264Ygm47YbHTZCpHCqtHUZaMmmGVccB4z4ufC9iuP3",
  "key33": "3k2siBAxsmEnAUWH6YFj6cNw62Wp8K5TyMj84Emf2WCaTXDADZ3hnQG2kiiBFKz9a8WtSJ2GMDa3Gyk1MTdN4GYj",
  "key34": "3XDZxLwm3eGxMjiFYh83w1vACGoSHK1Wp37z67Afhva8ZTRs8wntkb6EzRUi8L9N55Nz28X2yG5nNwvYmW6b39Yr",
  "key35": "2HUCfQEDphXcyz6CCzSKckNyLe8vTHktu4BA5DmGS9Bdi5e62xcnQ6D4vxk5xKoAdTVPbaLsiqtS2AtChGT92Ys1",
  "key36": "4BjSx8EBtA7BpAiZiuG3kmky4M2gqcJrdwJ2Y86AJyKkPm8VRm5vrHax1AP9yKR3im3uBfdYJjyCooZM5s39RG9m",
  "key37": "ktZ4Bfg441zGsdb9hkmeVh4XbzZeNuVKtJF6YUFXKPMZ5VgGtfMwhguXUe17FV4zF9pqQgXNEAUwNFBpT7YKRQ3",
  "key38": "3miu9CPVYuxSkiE8SVhwkycUHiwSomWfLuVfLPr2NrqxdkStswBhEhnmd9E9XHVXfVCda9zMtQtNJsaphP91EsfH",
  "key39": "2LWRdjp5wPeHL4p5zgURS3wUT12VQFMSxokZ8RfHyaWHsnpGhzpsAGEaSLm65Z1Ff1dsdHAUN1qXSnKQNbtUkaUs",
  "key40": "5krqDNBsesst32QU4HwJGGJfgXPuFCWbPsrjFbtny2zocXFXdJcayDgTp1N5WEW7yhZgPmQcAfaJkEyYs5LUoTwc",
  "key41": "33hXhjcWCpQa3QSzxKrFx8BwFgtjsBkXMXeFffu72sr7jfSFDTECis2zV6m4Muef4AdNLKVpAQYdU8qsaiAZQunF",
  "key42": "Vruh8SKvY9bAp7GfjFfxCez6o6USPr2QR2MNGVb2pefLPxCczqEjroYxF14YrDkRGZTgpggDdGkkBJZUy7fZ4eV",
  "key43": "6ZMHocRxfgFKmEu1higWDfKKHNq3xfgjZGZVeeteSVxikxgSaz75RTwLLB44npR37rBhAJpjhu4D7oMpqpWySn7",
  "key44": "2wayYDs9k5PnKuKHxxco5bJX353ysdG8q6sFopfhFVK5ozA8BHYTrGKdkDX1jm1CkZPW9ewJkM7mwsas1VEnM2QZ",
  "key45": "2w6o2SkMsdgWM8KRcZtd7GgjhQtXrLJKyXbCkamVT9rkTnP9YDeEtYrhdmCRVLHgAFtPZPX4WseQdXBZXE24QGp9",
  "key46": "5pEcpNZHr12jzQMz2w8Qjc6gCGdmWm4NGGboSGzEBxNKfhFsHUBgpb9MJon8m3zGdMR3MPnPWeXsciAjiHHPD2Lf",
  "key47": "3SZGiy2LNfv5z6M19yiHGSnTPyy2ibGeqodnEW7ZC4bcF55kdC2xLbhjtyDxVfbQCKrWLdyj5wbA3wF81rJx1qn5",
  "key48": "51Dhc5TbZoXqHSDpmEdp3SVHsgPivQ4x83AtfoZmmm7BZ1uezYJ8VkKwkKS33p7Ck3vzDxYPdQMJ7nz9AwhQZ7Dc"
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
