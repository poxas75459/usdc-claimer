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
    "5bNPyj2nwawUq74Jkw1eFdJVMveYyoA3FQ7fAwt8Gja545H6jyxKwE5PCGFKTrdiSL34ACFtXBbmvEfPYdFd4Fmf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3j8A7UWzeAY4zWszv6Ck72L5xVmf1Vzhf7oqoJEf6jSvEgDUFoho2tFNib6uPrR7bD3cmhAiQQQxbLcrsh6ccEwr",
  "key1": "4x3XeSDgz4r8q29CAbU75tSA5KhgR1fzh6m2by6kYqTzWJ1N3Lba7QVLu7kdB1K9mdbsRhoiWhgCEANoGarnQzE7",
  "key2": "53ZLVoC6a5QdqNq3gcLNKTL2nNwAdyzJUvELmGis1Q6nbh3UDwQ7h1S2U4t5JWzKthLznjLwerETriYG9y6PFAS4",
  "key3": "2L4ffKHTVcTSJr7bmR73MNRDF8wmzTAxZ8ZVStw1U8LLyb8EDGMqSWfokazknpXCr6MAY68PPQkZb9g1y4oLeZtK",
  "key4": "2abhfKDQ7PzjiHxP53Sx5yngmHxVrZhjodM3EszJ82r4pndWzrPecSk6heynKgx1UvpE2Cp5saSCECf9hgLcUcC8",
  "key5": "5d6QJqrVjxDnpYxFVEGzdmsxq26kkVVGW3Ct6sPStV1t8Tn6NG25tgKX1Kb8DSTYxZhMcBG5RmQabg1j2fy8hxvn",
  "key6": "2tdCA5fb4n2Qf49iFxKePE3Uh4e4j5oDf7DxurrKpRYh6fJwxt9JAzAVPpag6XAeZyV9ymdBKdauUymHMRjjBbiG",
  "key7": "22fRCzfbR2j7bVx7xBDE59gZFwCJNhoakSU7ebFUpoP7TUz6ueE9fd7n25CbF7f8yX9gfnoFCXH8DEGM9Qsihyzw",
  "key8": "4bjxy9bv2uPcCfYmdXS5JZ4NK9nBGCeZNDc1CRjkc3496P8hJiW2yp569EE9V4RiDuhwpqZCP8NNVSgpgNmhYVBm",
  "key9": "66fyNC7xJLorXXL72UQQJZxiCXpvkHY69VU27mH4QGHy8qPde4TM7R6a3MzWhm6zPxJsFfzryEZkv8qzeQa1hfG",
  "key10": "28AnZguwcQx6FSfQyD71MRAUug3VNZxReektaT9TzJeSoJf6joEyP14x6rsbpLCdDs7nxAViRkxTUhJ16m8rzAxQ",
  "key11": "rd5wfAuXvbESFfum5zppp23bspotVo1LDcSMbTX8UmTt7uuQPuPZgW6DUVct7r19tkLExRGYTa7ixDbLJeyAAuL",
  "key12": "2XAgc8Hu3ZURq7cu6xCGL81r6381ECb1bWHjRp78tbLCNiPo2ba38EpPzWwzUfMtWJXv1tzr7z48KB7cBdrcrgea",
  "key13": "3JsgoQtKydrb2tzec3FpSyUn4Um1umKiknpdX4w2VfAyEUZ4pr88aT7h9gV7rHhWbCZaZoHxyUhFYtpQRx12ArRS",
  "key14": "4Gdu9dvbwGnoAEGhKm7cV6MKVD6eJ6raG3rhJ6KuATD8cpCoB83xg42uUh8jCe4yYZ3BDuyQiQXc31KqPdoXSrnP",
  "key15": "4VJJFcEFpCpWXRHM4H5sNw6sgcx8Csr1fgHscGxnHQoGGCjegxKa8HuWeyM5ReT2srPR1tjKUxHw4xrkoeQpKxXC",
  "key16": "3oFLg2yKyTKzvXC7CkmdiEeEFkCK6DcvDF5zEQP8bodJcLpb7KHQirz4Vy2cXD7mXvtFNaMnJjYvMswqqxNPrUEp",
  "key17": "5W2bYhdKmHKRkieLA13XW54JnnzEwPVATMYcgyKnwa2dyEnJmHMYHjUeWMTVxkBHnX3S3YgjtdQt4CuSrhm3C5Qw",
  "key18": "2Xs3dUZ3qrr2ZUjgmFURLa8Ki1zrNiQZrPms1oev8hRyuy3XifGTuJUViBUNaqazREcAVoWNobrEkKk8pHMPnxEH",
  "key19": "34wxYbf2VqNonMpxqQdvFJfRs9N8bZtzqHuAuHaFu1WyP1yKqxyvqdfLkVee6UKxMvKTcaV6KGidYS2Uwz9WcuPT",
  "key20": "2jfoxAnT4QGC9dmUR5ZPpdnR8Wvy3aZ4UEoneNAwf6wRnzRKbvXwYm4tYrEXP39RC9xLBMe2xWz3NBijN1v1qqsu",
  "key21": "5tcVLzhN77acg4vKw7EKgXf568G3f6h5RQSB1CuAE8aP1cJtN4oZipy4xyjfuoECXNYyoR2tEkj8WEQymaZS311u",
  "key22": "5qyWmTcAw8NniKfEbHWyormwvKeH1DpB51nG78jh4FdNjbRCNkEHue7SdNg5nU1pGdUMAW8gEgMsWvH5TyJXcGFu",
  "key23": "4VjRMsvJfnWsLc2qgqsY5LALQ4Vf3vPtV1ByWStJHhN4wDpMUwZyhDKLbxQwmeoRzZQZyEAG3LTfLFYBDJ3FsLsS",
  "key24": "2vWZT9ek7NYy7TqCha78tN4qDtd6TVKhA57ahENkoDWN7XSoSR87cTk4jWJFGKxELtr7hQ982yA3FcFDxqneeC8U",
  "key25": "2vp2y8kMMQy82uUkU62t52CXSbSgwDqzVzGTsK8gZV6qfG3YMqXsXh17hcvDMTN6o5NzBeYihnPbXekoMYzi1GgE",
  "key26": "YDyBwXvZMzaGz5BETZ8GA5yK23hGUUNi56HF6W1aJBHV5wCcoXVLdkkdER91wmagQYLv89suj586KhUtS8ZMkUt",
  "key27": "4NkEje4QQtoPcPLT9ScwtfWt3g3YPA2zsAtUNx2n9C51x2AUGQsWnNdYncRLYS55q1gnHfSyLZK31cuW6jsTPqRW",
  "key28": "4ahhoiji6iZfTDUz8Z2SXcYpPQZEV2WD4rtoMvnRaaKvv3m5qdsvHPrn7udfVZfhTLFa5Ps8fvCwUq7RZC8QjB4N",
  "key29": "3mGNXcR77gdB18QPbpeaENWechyNYcaebjP91uJhJijKLbUFmhKxLJKmhCRdkAXvwrvSPdJVPTLs6yohJDHbWhCc",
  "key30": "VFmxQUE8Tb9E4CfCn5MWeDCuBVvcMrTd3XGRS6EFMvAPP53NhK8EyucUgK5nwPa33EsMKGtj1ivK4mQShruVUsa",
  "key31": "5sdVCD51ooda1PHao6HWLPypWH99a6SsM8pWj4PPh1HvudJ9o3zsLYdU9S3U8n1pje3LmZcEM6hGCrvmm3iTqeXJ",
  "key32": "3oqhKd1qKjFu2SedJQjML1Qsh6uCj25gHjw8a2B4anEJrYphnb85bLU1gTNvgMukAhw8fhd8oCMoCu4Kr7TEwYuJ",
  "key33": "45VwLFCnxNjaxsvBHmucRLKtEmxVsxb25W6zckBzSk2nvEu5Lk55v8ZB97DVZiayMQ7ya2gkR1aaCUSUn2ciWbZw",
  "key34": "67HScFwFgU7FNgUbV2LyXydGTNwMCL3ZmJGDKR5RSCSxLj4jpH4A4EiorJFzYmmBXbvCdd1fa9CErDJBng9vDXwx",
  "key35": "3FAKk5NZNmMbNKgBX4gcJRNYkFXVzw6NrRTieb3KJoMK2yGYrj4ii4Rqp7aprGz7xWcXeC1V91PcZVbufdTt2cv9",
  "key36": "5mJQ7T8VHSVQC7C4iKkx82uYCEckDDGBAwoiHxYtj6BKNRLa3kQsAmDoaR88GDQBL26Jb43s9mSFsvryxEE74D4L",
  "key37": "57PCxKubWut6F2o5XtMhh6wUw7EijDqHYG1hDnDfaTbKtNME5iD8CseFcB6AkArM3RnM4C9HqAzHcsaTs8YqKAfR",
  "key38": "4zWJt6BuKHWqkHW6Db4o1YQHMyg3owhBt2F4x6jHtSnb3y3FtbbPaDKjNZkuT4XRaS4mtSbFzPVi9r19RovCrLU7",
  "key39": "zzJmgPnY6cYGycWUEds4BkrgRjvcDm9DsoFfSPV163PeiFCpPQHS5AaHqvXwokFU8JutCEHA2tbobmzfcje2bUC",
  "key40": "63TPF4HuwjHPXdSvaivdoBQmRVT43UtThmbM2QPz2BmUiE2MFtxc9nxLgmgrYtVbe6h6tD22WxMJAVMPgAbs9SHM",
  "key41": "2LASX3AJPkkShvjrzRP9ghMAgsYekb379eNu8RwLyjRpQHjTEihS27sChoZDpnep21xG86B38hcphVWQCa4Et4Nm",
  "key42": "EMBScNnhPsEZkR1kw8cgv576A5DCg7QRUpG7yKpGybAZbFcrgvDMBeqg7zgKwFs2rSmsdqW1Hjjfe3iB7aW36wD",
  "key43": "QXTVU3DMwHCEHme6K6Q8azwsDVJw3SszgzwKXNkYPcoYp5vj6Shy6zab22e6xvgFKxSiTSV9AiewNC1VcCwg64P",
  "key44": "3o3rDsP6gVvZhcixHrVA7QBASi7cjaAnRqodQhFxZSQkusPnNFsBpQjcqJn64MkYfy7xc3ML6CJSX42JAduGEPur",
  "key45": "GzPw5LzLgurqCYqyPQkn3Yw61ZL19d6icKhgkfQ2uX942t5S6YQtEUSqkBHAqUSeb67pG2WJEpheqnWnSgRFwfU",
  "key46": "9jZbwkDkAcxuGuMAkDdqG1hwKtvy9JqQeAiMo7nsRPtRMs5rE553rJqKFrxaVQQ5Dob949UhfZTj4HHTrUCbVAp",
  "key47": "DEiKgj1L3on6TMFWRg9Y9ou2rftUTy8cNCjyoZy2QbWjUEXihKSEJbBjpaiYgHuHzvLvh69Pr7NZWJaycg68uYm",
  "key48": "2DsRWSrYXLvRfmKSSpKdvGAGBHsdFLVJjR7SVHu3NEKWWKVSxBAig2KtJfvbfmWRnJPUHVgUDvKzLVAXyonbCHtn",
  "key49": "5zAbFdsrG8J8gXsrDQaDMStEdBbXBjpEaz3shoLQVDipBQLkTCnJ2EhHoPENDPuNNvHCCgshEakSCg9EDRRiCEYf"
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
