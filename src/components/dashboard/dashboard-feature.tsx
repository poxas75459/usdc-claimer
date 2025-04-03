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
    "2jjYDZuTzupCu8cWHhfLtrGPaZEvU8zZsaTBFgc4MgQErCEhvY8EoYKmhTSxP2rDhtQvEPM5jTa4LbYeuN4vY5kn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "91D11UCJ1RWAu6QfE6FQ4x9mNobuXXskyWgSwr9fDLvEaGhVjDivuHcic9vXNPsX3ofNKVFjJfGhvdj4hmTuiZM",
  "key1": "2w4hGXbKr2NEbj7ed1yH153ZEntXWCG7ctEs5SjcdcMWXhDHmuLScae2jEu3zo3hK1bxmpWBskkLGZrhHzTypkhu",
  "key2": "4fx8Uqc6KoJ519YvKnURj4K38Qvnjr54qD8MTVMdqjEcCXX9vHrcqjwVpLnLw1YVCsVc99rLPoSTAZiEpaUMoSB1",
  "key3": "CAnpnejgff3di5uu1pDvx2Hu5AcuMrKk1ZuCtCZE5kREdQFkJWjpqMRojDus3f4bsR5dxGotN6MZpt3fw7iPf63",
  "key4": "3t2kGezdK1FbNKwJQKuBL2ywC8xYdktL7ohb1HgM9iAxDUXooWbKLg4dhChFJxsvw1WJKcFqXM3r7beqVgevYjJK",
  "key5": "4zRJiUAjgjaUPNg8J7UprSnJCPJXniPsav5gX4jAaBetvxswXuxDeDqiRGrBbzYwTiEhSDHiHyKXQPN1rdHuveum",
  "key6": "2F2AuJju56NdFSt8uSCEqVGdhwSpyApASxNfxEZsCSCMijiK5THmHfN73VbSvSjjSg84L8EE7dBjwP6KCZDGayAN",
  "key7": "365vW4nMPnCBuFQQxq9LrNFYAfB68oWY9C8sSJL4v1ZKzrwx9HbHevr8eRameRC1yDBFBRgxUKFcbRpDEJ3D6WRN",
  "key8": "3ThhW9BL3EY9eGDVQoZUTkazgmaTk3prx8aXhHRZwo7hC11AiRJ3JmDLoNpYtpW2ACeVcmnRsCfz6VdmiRyriPYR",
  "key9": "5ciUPApxdkGBkyZztTp9zXbRrjFZNWfLC83A1ZmMuRQvKJQm5Lu7SKLNd15mB9631aJDuwy2FyVDXvDYx7dawaty",
  "key10": "2CqfygCMDySfkY59X5WKgpPJEYKEQbDeLLftoUKjgQoZHJKoFrmyGAsEgHTzeTisRDEqUsK2JimbF54ewpWwwZ1y",
  "key11": "43fCkFTwJxoqWiggtBFBTsaYJaB2T8eeoc9N6dSSWu2QpSMkeUyyx9VeVnNgaXEW2zdCpRqRVMTrdgXDbs1ucPCV",
  "key12": "3vssM8YxTTaZbrqoJDCp4hGC9KX1zXPNTUQGSZczWBUyzEJ1DYQBrUDmyC1rvSfwDjiU7Gbfief83yLCMhuvYWeb",
  "key13": "654b5esGdfv8SvGFKSYedhiuNHB9WvywY5EEcdwPNBDT9ykBULznnzws88dQNruhTp58XjtjVYH5XfB5erNfL1Rc",
  "key14": "2aSd4WnY3tGx7B4ctKyBsrMnV4csiaMtN7KsAaWxPMo5d4ZRB2wH3YR917a7qVyVkFnP4HpNdSKUSXtN3A26vhF7",
  "key15": "2eAuZTxUwhD68zMzbAgaqqerhxXb8ZqARGiNhUzSseQvXj9fRqpStQHWZawHjRkAPGqV5JP85fYuXaAeSD7rwYjy",
  "key16": "2fHUi1JRH8LpQSnTF6h2PYWpMRZAJ2w5qPr9HuKW7j8SrcYzZmkASmVfhMh5PmxaFVTTfDgrQjMRxkp9ewS1nmkp",
  "key17": "vC1EZxn5ccMGrdoNW1wEvPSnQsM11ti7PkqYdzG3JnqnK2G2Po4faHS8REJdZVFjwfdKJ9a8bNEUvCriTPmkSA2",
  "key18": "5nnEZnykfKC6FTdTcAQFBr5A2zffyajdkCXig3fKAm7rfu1JAU1iHJ2XuBaemY2mYUW1gcVMSqJnB6WEuZe6WjTs",
  "key19": "5oMpUqnxz6RiFRNkHeNy53zEfhA4s8A9xueU2R78kW4BdESWPh6cw26aSLfDZpuV2fcSHzpdXQxA14EJBqB3Uum5",
  "key20": "HR4jHjUVi2qdCZfpZVKycWBGGP8bmzD5zFfa187goi5G9kpLjxndMk6faUCGAPkpAQxq794CCcE3cGNbhHe59pJ",
  "key21": "2mmjQDBcwfL3YHJyswLDxm9omRuyguwZ9h1smLEKtzXh4a3JR3aQt2epbAwPejYCufHRkSTRmX4EUPxXHGtKgLEC",
  "key22": "2RqFEx2GN2cVbftEuUXtnoG1AqyYPagd1uQqHPQEY4VD82KzUdpUNDhEak8MGEbsUU9gVoSbe5ZtyxBzZuTVFu2q",
  "key23": "5E3EGd5dDnEXRC7pitN5o5sBs9E2vx7xme4p8wy5LUU3rZTBJdaPJGuNcpLpK6ms4gAFybmHwHXF2gWHzKgDU1YK",
  "key24": "4i3CjeNAqiGwHFJss747mrHjMWUcDpjGqe82DG31T3UjsPuu89q7119NJ9EebLGBZhq3fbq77qSJ135c8MMB7Whu",
  "key25": "47sByt6JGhnL2nUXUf1Ctwuo2tmqUE2giM1vtu1bkKvhffjrotBxUWzd9YbtYWmy6fn6Uc7FZfoJ9Guj9Hm43k3w",
  "key26": "33nRJUMYU3XmbEW1xwThq8BYtYrmaDEdYKpwknUyUpF28ULs7kwk7dCbrYTZCCRx3vsCpERfeHnQFXiyFb9yyYX",
  "key27": "ayDYWeoMCuef8jSPxS4reyvncmmXi71vPZWAi7o7NM4wHuzjxpSdpgmQik3Cm71ahg95S3yfiGJRAoAjkud4hLw",
  "key28": "3gHZuBWb5MDZ4mytHDLR9vdYw8fPPQZ6Sr51zmudX6yvbqrJawTXML362dKdWteFg9zfz8FwwSGoR6zZUkucUVmp",
  "key29": "5pdaUfa5Avt2Y8B84dg5tzAtLB4J98vX9FrAKgPYd171xjLkWKUt4dpyVp38ookNNkg5NgHqwMvk2uRaCkJdsDEH",
  "key30": "5BnhQzNDsh1SAWtgytY3GBCUtjUK3xXtUs2x6a7MoaBk6EVxtRQjABs1boizbp7nUY8fS7JSsFT1FrJPphe66xj2",
  "key31": "2dnh7tMz6VSYLYJKWmGVtC88xzVtB7Q7B7hwbU19hy3QGzH872z6hqffBC3d3TFnsrpfCGzZ3eSbmANnRhdzcy87",
  "key32": "2REsRHFjsJiqyX9yUi3s5FDEJWNM7Xjki5qg4gTzfSksKDYA1wwDWpeJEXFqya63m9UT2UvTinYGWa54cz2A4j1w",
  "key33": "3jcB43gSaTqSg5cacerGUUn8ctsb6gwWjCXkjgp6Nbec57wHMTiufGbV27pQQgrfPbb7sAJNjUM94tzCpbZFhh3P",
  "key34": "51CVkstvtZB31bE1tM32zYDJJYid54h3iJpTR6YoEBJLhKqH45a95qVWwM5gkJVksX4yGkbk8vB1FZzZ4xC52fZX",
  "key35": "3wP42EN3YaUsDvvPM3JkwJ6yxBNaVXVAbcj9iX2rvXFdjyRCL4gmhzsxqGTbSSU925FusN8LwgqiSe1vmfGZSanW",
  "key36": "Ls5nWkxFvhtTQzkv9MrvpFamHnFeh7RRcxRYYrPG45XPy919AwmVhs6WAv4MbyGPGtFmNwj9LniEyRMuXsVf6zz",
  "key37": "CPAEgDo9EBjdkfjeARh1CBdfXVnxjq7RAgZx86iaW8pqU2LRgmnBeSAePtPZLh2bB5gB134qfXZbhqKgJr64Jsr",
  "key38": "5gpCiKgB7x71crtvGsFmiFDBYEsFHShvUuTrY2mCZkts1ohS6L9UGVPsEiRuSWzdjQPyLv8CtChkpDm3Z3QKh7fd",
  "key39": "3vrJRC4Tg33EF673GUqZf4jQDi46X4xTxMnmAQp4cbqATj2VyDC5zqb31tRVLKyLne5Jv2W5BNE6oJQBRUyHhDU5",
  "key40": "3KHQMefw186rpS9HoBaoDQkLcG5keWY4jMdxVxCEuW8vwzLvyoeQgehZPLEMoFzanVtycqMXCmYKfEymc91ofE1N",
  "key41": "5mATRhNFjAXD5HAG8GhCJdaEjj7KM781uvvSzsNGg6bWzMYCZYzVTRsyGC9cFzatjr9urQybVjmJj9EeeDcY39Av",
  "key42": "ME68RVfRKkfHYHjYpdgPP6umEUQNUmsdgK1Ssg9CHHocJ4mJHoNkqiZHygLDBMM8Gi7JTLrTDCRdSWF5XgPYUJ6",
  "key43": "4tttp5Frm2dWs9fLTy9ThJBc6d9varjViJPdto16HyJwSPbBb3T3BuSsrh7wo9cbGnkKTrNeCvcEbzCXt76sDFeF",
  "key44": "2rsquNLdjfssqSsSSkojJBtVFg7gViZeUXWQkjrS6JmdRUwUw9C3iBz3rVP6cokQ9xvcZRmbNTVWjkx4dbp6owmK",
  "key45": "VSxsroMKMCkKEu9KECDsEudwLztBxdgZbBLHYz8NgFRtLuWkiCon7eYHxppCSRgh9uS9T2qqZT1PVqHTUJEwXAZ",
  "key46": "4c9F4ghBaQc9SGsegd4XKsSDis5FG1HPUBBjxstpWL8pUk2xHTEkjPEwRgmaeQRnETzmcVw9EV7awiMezof39euz"
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
