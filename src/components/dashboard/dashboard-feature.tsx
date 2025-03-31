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
    "3jMFbXsysoR547DPdEgoimem8CZpTmDPceZLVpmX16BH8UXumGY3RgdM5of1qWifNrJXJbRH3pw7GJYC4HPKvU1L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "588PuswWgSCbwBCdXpyCDGQFYXUcjTWxpypHexctxHg9CipxGPhZ1P43r6FgzeHgpwXVxMjzJbkbUEo41EwvMM2B",
  "key1": "WPXYPrMVdmSuUGNLCdyC1Un7VdgVLa48cduvNZsMh3UHRhKsEBVLnPtA3BZ6QByNobEbp4DeeHrmnAFfFdykbMU",
  "key2": "32p4d9RgrvQqHkc67Ge1EwaKFq1ZjQKzbzSnnr6edERwVqZbUbpnQoNX7bqGuGHf2rgsqeBQpAYYM8sv4aw3dDbm",
  "key3": "3XUFYny7sHGY8DX8YhfhBnydyhiGwCVALN9SLJU7hNZaTUaC12KdNvSM7DdeR6hTqjjuK2uXveCnMBm3cmL9Exw4",
  "key4": "29Z4usKBDvcjjQcP3JsfEZa8SMDzdQ8cscYkLufs2SeAtvfq1rEwYuuXHxwpnzH6eRCXm86D8cD9MbP6rMKD4Hec",
  "key5": "3UUstX7NenVHtq74gbSJHMAgJvyj4hEsFeP3aUrZQvzYaXtfmbkNrrfYF9hWKGLABVBoM49cUPvz82yTkjhYt9zn",
  "key6": "3c8sVDzVHbCP9SLyzeSxdxbawM3yn7Mxp7cxLy7BHGLYTFRPz9PN3dkeXuy13waEmFhiTABkFWJ4deQXRDNu5cuq",
  "key7": "63XWCpvQvDb1UaEvNJ2DxEDXFMTwAbpCEZF4nv16WzVVurLTySArVCt67PoXvUfRAnPXsz7pnEvPmk7ifyUJ2Wf3",
  "key8": "3mkir6YdMZfPLhxrDE4YjEaY6eiKbRnri416psU1NMMafECYgL5zZM88mQ84Cx4tuDw5Y5hZkCkhwnTUbW4QRgvw",
  "key9": "5YCtu5M8oxmvZcADhjpjejTbLJ49kLMMWefn48soMQ6mEPRjzSFr4mTVcP4i8RM5mHCnVXfA2jiESBit4fUPRN5W",
  "key10": "56TGDfufE7MXSkiw3xgUd3KwqTY4ontikQcRyJHJNTSbpvKHYCukCK5vCQgk19mGtxZL11Va6BgpMrYdSs3iGSgL",
  "key11": "2Yni5jkUzP9wvBQ74sNgTijN7vsqZFVB2sMNTQQyzGZWd4FUczKaLdiXpDKEspSjD2QWgCCwwoqGkKCZwrjAp96y",
  "key12": "2NE3kue2XVMfugtKKBBy1uxfQxy11rCu8UQKzAVdowMZVtGEshojsNqnrg72kjXr4EUNDPpt473ihJTy96sPVLgk",
  "key13": "62zHUZKVg6myHmfpQX95qc1Z3N997o5TAcgzDF7n4hMaJ7EkizP37Jg2K1TTxhJ7u9gWcXWwG3cVAXbmYZE9Npr",
  "key14": "5FK8qsytikfF6vmtMZUuafEuq3J3TTuzeSo2WDBdnMYi3XmxnX8zJbKtGnEWuAYah1xcJt1poPVHa7xDo7bY8pxT",
  "key15": "5aCtGMtHMwrmbQ9RMvApSiCvvg1HPXs4nahir2CRHwu8MG9GiTXif1WPJA4HiAZBBc5z3vwhz2gqPMmdLTLDMscS",
  "key16": "9AE3AiteSSWTx6SzFuDs4oiFcBhZxSE2bkFPMg3WBAi5KLKwabfiDVXYJFajBLtVumXLcDg2vwzcYztyWqR2o9d",
  "key17": "624gvf88kMY1JUyoVQmiL4BcnEMCjTpdaHqBPpBCJhHzE46VHuRc6VTPPPMnrmQmGy6zUzH6m8cshhAW7WG77JaF",
  "key18": "2rmBaA7Gxmz1fyHDA3nLBCVqJZ4C79LKjpCoCAgBK2nfvFTs7uhWUNyVuBtLsMp5SgZW5vMQgbdZwgmFpoGH1Di9",
  "key19": "kjEgBqyMNJoVk4yBMFVaKtkSh32cPm38r854Q8gFRLzQyEwc5dWqnpwQ6r2Pvpq1gTyPt1QZSaG98MpSXNoMkbd",
  "key20": "4yds9cfWGXFcUVLiPnL5e1KYofLH2GpzWc8mjcBnpKj8eS1FUSuPs4x11pAtg9GdmbDRRtr3MoLRnrMyhZtfyZh4",
  "key21": "2Wz3vnT6a8LA67U1oLVroAsvnKgjHCaqHjnWe95vrUGamExnM2r3otCxj28eYkCPanzXB2AgSS8bQa6eheUukjCT",
  "key22": "ZrdVqi1UbRrJLZp8ickjDE1fwcjPgRupHg7Ee5VGXzP8me7sek2iBS34WNDeqN7FpKt7aZM4vEe8Lus7LcaymMB",
  "key23": "UfhBiAE2z8hRFZTB2F5P24vbRSUQQ2d5eVN5GgM18zAeKE8dYz2qfh2wtAj7tCHRa7hsRZB6oSquqQz2k6cFxyJ",
  "key24": "rFV4c8rhdpvrbgbpWRY2TKhwJRqj3GR4rvNE1Szo79YTwaFzotJFh92CcA4bUcE2xeRn8epnhhq5pB6TzJJpxj2",
  "key25": "4SiJgwJZXmocRmak4hwRga1mCefoccjHkx2be2RK5h7CFjzLTp1ACqq77vcirsjxaLBCK35ifwtQCsfVz4ofMNUe",
  "key26": "S8HYKafLQpW9TV8phZhA7u4tRAqxFWgGX7hi1ZLFcbuZmWGWivdTxLpy7djezTmvrZ4tAN1hfvmYGCZ98jtiANb",
  "key27": "377xwQmLdRejYXu1YvRd6fuj4fcDwUEpjtrqRQoKF5DJb9wi3Q2zPsH3rn71sf4cmUDQ2jHeGTTKUKDCfDF9ERCv",
  "key28": "2vhQ9fMX6E5cgG4uwrDvQkmJBvqw7rCyT78pcHabsz931zprHcczubucAovGPkDpzxBvCgaRDd28ZF1YTdo89Rad",
  "key29": "2usHh1AQpgJ65qXu6QoEMYvSCyWher5AwhtQErXZLvb1hpFu8rEp3J9FTVx95bFpJvsiBEbhbb4dvDFjhq1vkfqE",
  "key30": "4Ge3Ljes1YPELwKZCZJ4MH5KUwa9FGRFcXFGCrgckk3iQtQ93Hk8KAji7Evy2A4gXGYsVLdhhzPVLqD294TXi3Yx",
  "key31": "2axPffqFzRswZorrfGq7NcRNDNsvpAbrQQQuVosgFdixU7o1Styik3oZj4cVLSH2YaPGqTQD3xKTcniNPV9F3k5h",
  "key32": "MdoArDddZ5PYhTgSNXHL2dwMyxNXmQVyxs1jnzkLkvjmQp1ftvv45cYkfQUkJcPg1MGTgpNT7Ryfud9VhTXzebQ",
  "key33": "2F39zA6dHnLXMXuDiyVnys3dXXyBudaQ2GtQvkek8r3umpPaurtTq7RKFW2fJAuChvjNJCk1EANWkEwiF2VaqGPd",
  "key34": "2xJhXNj92xT2nmkNC7PF5XZe9rtkkaYT1Q5A9n6nduoGgbHJvTT6Qtn6kKWwvWynvTe4TzrrfR1HGk9MTUWGSKLi",
  "key35": "2sRn3E2n8K6EhSTEo59hfRjBQWfe47w4WDE7nmtbg5gbTMeJUZvba92Rk5UJfeXkUm5ZJrb3CqsyaigStzv4PAKu",
  "key36": "2Bekfz2fea57S8jsLSyB3omhcTvKnQBW8jeTCVnCHu3ebVwwb3URfpTjNTs2wXJLPwYpYSi8qWeZti3fu49YDtEE",
  "key37": "31eyE57zbrxg6UyZsLF9pqsu9nWE1xrrN2DzmnmkTHPYGczUkLHnKW97u751887zKAyLv4oGrvcJgiCQ31xCSAcB",
  "key38": "LbhFuSp6P4jbr1gAPZRm27JXqjjUnLg5r29NtoA26VbXSyRuze8rzpRSKrx2LQktiA1dPtsx7JS6d35cnuGLDdN",
  "key39": "H3ZmNitmTRX8zspvoWcW6Fg1wkxebfrazifoJqNQkm3rJPFE7BeA14EXi4jUxD5aFMr4ffS3dWd9Bnvzv5Wv2dH",
  "key40": "cUBXVjMq99eg2RdfgXm4qRHSbfYN7v8DqGgyEY7sPiwPRD8YRF4meEQXzFqHy1NjLhuVFt3KPWjvsW6n6n14D6v",
  "key41": "4Sy9Y5KeD82BECeXmwkkx6i14oN8adXr9fVUpW8KLsoRAZPumXQuNgSZAmUftpys2WCgfYChcYk5dUjgSFgUM9An",
  "key42": "4ozQvv6Lo1n1HqJzTAVyu4qLKBZ8hRipvkH7koG2jD7fcjhKqE8zGDstAWMVPHPiVHVeuvYt2qHSLegaTnDDGFAq",
  "key43": "pfFz8rYf1TyxesFSTYTjBgAtfRxTSf8gxV9JRYBxUDP7KjJpqhpbJMR6MreVoZgMgKPPhdUZF3EfwaPjWozf35R",
  "key44": "2er9VGPpUhrPENGXDmAA16eWmztX7qqrRXfg24ssaAw2gP3dqVaZTEZFXNiHCxQZAxGvkDdW77bJwFZrgqG5DMGS",
  "key45": "DbRACPZETE4x96ov1wQcBEsNaZL832Nx8dk7A4NBWFzAZaRdpDLNj4qo5yhDGDHQSyb2SBZV6qSQqGpjjiMKg97",
  "key46": "jVoTFCZ2BFcCPKB3cre5oVZ2iv1RCrrc51pQ1g4MBY4ikvZX4maM6aaA41Q872Yfj2JmNQZ66E3C7uqtcM4oUTL"
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
