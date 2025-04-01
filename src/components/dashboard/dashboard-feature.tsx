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
    "2PauCmHBYRk4avQgAm5SSUBavCWkBu5XgNqJepgR3hTGsohZbPMz3K9rkuCzX2r6YmQnMyimjHV77BbSQuKnMaZU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FNEksGUmUby3YeQRQTF94xc4EG617uyp17BhBTwLmnRXXpsa5qHaTvo477g6gkmQvh4GvCJStkMV3LX8RCpz9LA",
  "key1": "4ZUF6cRar3zzi8wHqyUcYoVcv6o8ASL1QcRGvzibHFBfmqDDrp2n8E2V57YNjFgprXVAKn4bNiGeruLodaeHNmna",
  "key2": "35viqCfFRZQfKwMFpZDXvFAkagysgsRRLoNcybJzEP7FjUyZhCf3tbPTCP49eJShEMUEk5rhz6t4irLQVByQ6See",
  "key3": "439JFwqdc421jo3LFdVos2t36ZY7LwdPDEUoTiZiQjXF1mE8zzXzNyrBU3UYLLfdamEnZH2fChwMuQMbNBs5RThf",
  "key4": "4sTcYYSfwVxMwxmRzf8jwMR59eM1YS4GAHtMc8sEhrERTqiyZ2ffaycLYf5ZTs2cWssXstmeUGcsg5Xo7khzMCPZ",
  "key5": "3AmMgNGPzL6j1r5Ci5xDHgpzwMbACHY5DdvSXk3danjxQN9rfP4RVYqzUw5jpni1NvPHGywqtEhgMG2upwVpz7mj",
  "key6": "4gFd3jrxUbNaxSbNwtH6L7PZJXkyEsMmKtXi2jNZGEa9SJ7TjVvn11RwjiKEMBsWZSgZ4MtTyj53D6cPJgY4cC9",
  "key7": "2NU8rsAXrLgaJ9MRzCNxyckY9PXbbWAxDqPV1wT6dfGcnyA5ZxeEDCwQYro6Zg7ptyxiq1n1fjXmeWstr9RTcRyq",
  "key8": "4jbrDXsTLL6SBJEUxkpAdaUYtZef1amxyQmFCyR1RJNXSx17cCePe7gbU9dryLCBnAeEH433gRchaEexWX3E5Rja",
  "key9": "3Se6RobJ93jkdk4J4cDk8quB21NCHstzzq5a3ugvtpM1TyNVCzsSBgHPobuEhD472rcdNYeVgNMhAj5ytEURVk9A",
  "key10": "3Xbv8HmAZzRetpFTXViogkQUidHYokkzcbvfi9WDgBTKmeanCJnzRebWVy78Wd33gpgfTFESaPLRgPnh5eKnZeBn",
  "key11": "7L8vv3RMSHJ5v48nYakoJ9C8VFsjL2ojX3XYsFKh5B3fUbepYj9NiuQZD6p4TnAy1TRGFnHiJ1YieUJREsuJMmB",
  "key12": "54G6cXMGG8d2fKtFnFnuo2tqVnUBnvRKWCy62Rb7qH1AyEGKnWvH6Ei7ofcJ2bFsxiy4ppTXZMCa85eJPKrQXzt3",
  "key13": "5AQszvjnwTSRMhktMyHcF6HfJfkESUvkgXkA24VkBtNas7etWbPc5bSnTDDA55c2Mm8b744bFudqMiDQrWWeczSA",
  "key14": "4F34t1JPG76MoRTRMzSprgJ53uAZDespgCmx4gKULqwuNutf19bNvTFvba6QC2Xgjeuv9JpttNo7nxkvbLmy7WDS",
  "key15": "wn8a9jq6eSGjF5MXpBFPi9J9xx5wyFGh95KWeWqJdEVjA3k71RydCZf9o51qCXrjhziLXNnRnVffkwH2iHqzeUi",
  "key16": "qfyXaL1VDMTs9TGgXn1GfUDUmvEUtTDSPhwQsqDJfX7aobMF4DpxKXHZZWfQVj5q95Xe2NGEbvVEqjN7LpbdY1a",
  "key17": "3UeYrRatyaQ2cMoecqfYae7Pup4DwFicZBMxbaE7czUnZJRJy7morsGbFN5MuHjDWkrQaoR6KP5JhecMUo4fWwFy",
  "key18": "5phsViWXQAMPcYZCzrtNeJ8iJHNUConmWtJY9JsRGBXQyyfVijWqsXgjrEUxeKvWPBvF3agECWHXR5qTTbDgkN9P",
  "key19": "2nWKVPXdUvuhC1vUWgc5tPYZSoco5kqQ9kmoDF2YBNQEcGL2ywXFC8aULjHCXCey4piB392p58aV4nFgf87spTRA",
  "key20": "2bqAWzUUU7dz1qt59vMvr8QSDPzJ2FpyBnAhfnrJhWEehtLL7GVWFVombEC1gZgyPpeLViwuZB4YSK683WEQdDiu",
  "key21": "2Mwabuvn5D2i6QHpTtaTcusD39FrAynbeYcUKGqbVssfh94pTmuRCHYyc5yoS9SY8QcVaufJFRV69ij7kDzMySBE",
  "key22": "3naLK5TQSmwxNrSkCVJHp7n3wUK6DtgwPqNJCAwhgA71gGutipAHMxGS6X1HvJS3ubmvrC3eia1Nrm3k4PcKYux2",
  "key23": "3yoLj7nyqSomGMihPyEN2unbFz5FcWJ4SwEb3F8XAdV4DqGJAHtBWMQ3RpnWVLZvmX4HTzELZGXZJk8UFU1iWAy3",
  "key24": "4NJQocWvD8E1J6XuY31e518sLiuUwmwGKeRm1hxxDpxDfJng9nKBBthyFCG3U9efDSALYKbKKWNDTeZoWhc4oVw1",
  "key25": "2oYxyHPCHzRwMk3CTBNXe1e8zrzs4qgcjsShkNEPgHsJUfu78CtPopfKdSq6ZEpPFztcMSjKp7ogZKE467G96JcP",
  "key26": "4WUeCEWRqZQmKowKEcDcyUX8fNZEqpFH8MBWr6jKZxzyAHG7WBp3hJbsttGCGZuxHPb7uui3ZXN3bH2uHEgZzuEm",
  "key27": "4Nsb4Sj6UeN3Uz9t51ixLPmMzV3Ke2KhAMeymQSQrhtv4beLSpQszTCdwFkYE74yn7GcEcb6BxRPwpjjf2PubyPv",
  "key28": "4cwfcefwbQqodYXhTFLKMh2xGvEDhcxcDJVva4dejTJQye11g9jY7U9xPggqcihnwdM4NkJC14cWKHRmMBhTvDsG",
  "key29": "4Xx1FffoVssuCejmsKWxfDiYbgoq7zahzoYBb6iePuB9xUCGzoULHS8U2NwAmLrYqPt13eJVPsm7EfBoKWrKTK6M",
  "key30": "5BpNQ5EPBmAmo27UWTNHhCY1vNwipmnttgqqemAEL4iaAzjvPY9zCeVrziPk84f2R9c3xKSVpzPv2jodnMjeRVhY",
  "key31": "erEG1VxQqDK2wVhLa8QMfo4X3LiYjPspsUXZGJXFtcJTQhuQbdnJPWkRwvyFDPyptoNFHVWcdp1jk8paug35MaH",
  "key32": "994GHAgGDaQFD4DBCWhctigLbGHP31UHdY8fRcKSp9mG7WZecyEaPXNArNRfPysZkgNZgTR1NXWtYUfNMePyNRo",
  "key33": "5HCVSVKB8HG2ZViUnYHQi8dUoCVHN2JgFfZRZn6KWt561Ra8WMoKWoJA78xsKFPPqtRhDgedgLeGYWA4VWeS2YoB",
  "key34": "gffWVZ4FRAyshiV6JpnRwFNPogU2hgBwFy6E3N5AJ79efnu2jfreqPajH32C9rzyL346jT7uyHe2SevTvYuQVM4",
  "key35": "4RiyhohjpRK8eC5j1nDqB92FsKLr3MiXV2wtrDBkDoY3ggQwYw9o4LFxxhHGp8LZd9zBhDVhLJVjTmpgnHBBTFLb",
  "key36": "e8yQihsm3uH4Jb9SbuZoBfWT3McPsKsxRCAyrJAWS5EjbfDESvnSy2EvbFdXdRQzT8SfsMpYNij8VqHnr3KSv8x",
  "key37": "3gPUokVvYPWVqsgKV5AWR2sCyF6LZRE3UW8GVCczxjjq2ygUWLCQcnFrpQuZU1Hdy4jY8yan3vXm4PziDJAPQRa8",
  "key38": "3KpwdDf9zeQKQZEkfBFNHoqdACsjse5cVqKWU8oGZy9myGwYhjcxoRxn8M4fLbmUWzTnegq8i2k8pAaqAYrzSQm7",
  "key39": "2LGW9Sj2xkLk2wPtS42qptuXeJZtcopVrA9PmTXvSupJskRGuJm9o9KaKqwvvvnCiuwwq3wNot3nR3wSwqVGty6A",
  "key40": "95CBJBf7YYK7UpV6Satnw1VxF9cZNCV61ZstCXaHpVTRMxnejavtRnwKQTPPsobWT74fD2cW85x9dkF8jq1BXMm",
  "key41": "2jjLdTvHhaSAAFrKurVVqnEPUfaVwsUJQ5AgjSmhgSuvnJJKHAooiaUFyn2VvYL1VuKmGig8y2QJbcyL6YHH5MKM",
  "key42": "5hx1xgdTv6fQT1DqgrddPZx9aeCTiVUK72JXWhVyW59aDTD99k2mvriS1aJYAmybi7t4Tw6YW42naicUmCoXmhgw",
  "key43": "5sXdeP2WsgALRvTK5NiKHvfngEuXQnzbt11NudhJCfb4ce1hEdFDYRecUgvgde2VZXfM99RwySS1EsR8e9qWV7mx",
  "key44": "UDKNcrraActaLexyLBLR5HsdwnwAZ6ZDe33AcWN2jw92wwyG6cwMnqsFNirKMWPXNen5hLVtZcKyQ5fJF9ASQ1P",
  "key45": "w9apHeMWfqa4rBAbAeUCHiAvUCEErzcUS8DazidWbBMRLxTpQjSC81S9ALbGPJJUvs2aYMYCGTmJSyJr3wN5hCY",
  "key46": "3zye8DQ94wqNzpF7Mckj5ttSD8cS1g2WZE94Hp2Ets1wHhBmgxoURn3VX4GNAtuP1ByuK5RirGJCLJKuR7pETkJV",
  "key47": "5DW4kUDXTgoiTTZ1kKGqWibZr2P5vqxYm23rsGWrS1QqYe96Wjqbhv5Y6Da66LEjoJTo4Mxam7RL7yEe6uSho6iB",
  "key48": "aPC6P7SbzzukuCpCvPcKiSP6sZTpjhSLCKm1vT9sWCutzaZhB3wYk1PTxHz7sgnty8rF25P5C1pummigsnjkv5V",
  "key49": "3Lvpc5gxYHD9zcoYbgNgbDhxa5MT9y1RqaHUPT3C9mZoQcYkGAcddLaUCD9RMc414sNKpjDPsX2Wge3yTTKbuBBL"
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
