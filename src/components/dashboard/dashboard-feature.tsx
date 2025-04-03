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
    "4f3R6pVdqB4XwXqQBvDQA4NU58nXHYFGbmErkMGW5ezAoGeW6ydLgQ46r1K5AKE6x5t2JgrXQK4j7QTtEBRQZSdi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cNruTEC6QJRYzBHFnDcRFNedXoLBLViRG5ZqWhkBP4RS24ESQVQqTgoehRPwKCaREqEnwKdnK3Z6E6ZVg55KkHM",
  "key1": "356ncscunvy4s1SefyQFxXVbwNgHwRN5jSFmJL1YAVvsDWptBPdRo5edZN16uL2XmRySbVkuJWzjvg18YfcafPpc",
  "key2": "8TGrCsFP45z6kKYLsbBGgZaR7dBa8KjD7oGtDztyVDUh2auuQA1bZ8Ap3po17WcRWL12wXNte23rfKDFK9zJSQP",
  "key3": "2BoGxQw21aQTp1gjJ3aHbgycJ9GiJu4gFCBE36axE37H9kULm4GUA3iQPch1moaE6WUeHkSwyr81gjtncW9AuNhv",
  "key4": "64Luk4P6rq67RRnkTYBar6CdUrveaYEu76jL5qnsWvTM4dRKVLh2Kje4jifpyxTGhv74BomMwdHkQfvq18tb3gUd",
  "key5": "WwnKLVXNzkpGpxegRY92cjdtUkLCmi6ShZvH1wzkDc1X4Qnc2sXdcVX5GoZ3NAvyfV2bkocnTSLByNVzX154sjb",
  "key6": "2WYyquceERXJzhfHY3Ppv3S8Jq1ySHMHVP6K2Ceqco3u5eqWKpHfRSxApfgCr9M4WeRUnQqZ4P1TuPg4NayUY6mw",
  "key7": "3vicZ3MwNs8qSYjQev1Xp6JELK1QZE1YqTb1mgEXjD9XyuZfciexTCLfmwVrG2AbnghiEHifpdjkp9in2yrpcp7Y",
  "key8": "4hbs2L95TDKxs45aPKjrfDvRh71KKPgM4X1YEYSt734Dt4xnwhRixFVHsWqWdqMuqJta5V8bhxPmaGBi3LXf3YgX",
  "key9": "2qYa4ewyXakRtuRYAvYicJxDpYoQDx5wH35cEBmB6kEnhkrecRHVwsitr1teL4H2DSMuDuMzxjeV7n7wLs7Tsf6v",
  "key10": "5ZJXzmq11SsQz3YNCa14kvvzhgpNdyeCdm7MUDTeScF94HahPziLkyAq3i2NbWwynvPZj5ot6jE5FiVrrGM8iApf",
  "key11": "FJ77iWhHyeE31fGEsiEmWgnRHrnnjXfKpzzhvv9g8cQ7N5teG7bSWFYkjqu3ZDAG7zN5cTyefEpkTVnpmZvfW2v",
  "key12": "3zYQehz8jf45xzwKnTGeuhjPpHM1YxK5d4Sx7YsfNyeG8mfsE2tV1hJnK1rWDUZUZqFeqRrPJuJetS3K4kvTbYRF",
  "key13": "5MqpLBJ4hwzPmwGT1UNFCwGu51TBipXD22ntYbZgKNc56rq6LTrcTfSSQJC6gY5XxsDj485ZAViR7BRzRfJddKSu",
  "key14": "QBLqUQJ5kobVkoKW1xijhnT6fWLMFc3E9sFayKzL5uV8UdsqRGmbiswFgj1YuBQv5mcCoNPTrPyW8cHbZQtNPTt",
  "key15": "uBJbpD6P9AgWbFtWk3ceiGECgdCQeGE6whMeVY2jG7b2fg1G97WDcx11e9BQgSBDDjSdpaWTc9y1QGsT3zkZAip",
  "key16": "kz2B8kSk1gK5UpkjaqMav9MHfzZVwRXHMYDFHB33SphvrNPdLvDAMuGPNHj4GG1NfmWFVfJCMk6fKoQNwZ1HXGw",
  "key17": "419FMAxV9zwTXfjJXCSk2E6sNsPC9GYZh4uePXRTmr8F2TVwroGE9MvFdCGhydGSXKoSBhQjw4AhdzNZCDGtYyUw",
  "key18": "3fH66fmL8HbK2K4BKA4gzrvUnAwuLmYW41LUv1aLiyq8cZrzQ52xy8D2wH7rmwEAyRrnPgbhhuHgDfbJ6q45vrbn",
  "key19": "4d7fWy1qJwL9TRYqa6SgHhPQqr1bvYuezecNnanuHDcEdRijRuNVAqaGaohtC8vkm6w3zvSzvX2MgCP5nHVE25hS",
  "key20": "4yFB4VziF8NjNbV72oqrpjHZFuR6waUUs2ts4rgL4gYCEiu4cXnXP9hZSS7RWSpipUCe44pHdZxMnPpdyN59fjpT",
  "key21": "48X1kBNH1VWzqGnw5ifLASQKnD9LDhggYikiE5Uhm5R4JWf7m8oQTzFSBa9c4BsbSsB4BXrUuJv3hTUSJSVrA2z3",
  "key22": "3ATbc7Vf1sqicWQ2mUc3xSMBVKM95WyoDJ3MM4hiGSNJANsnY3SDpZ1r3vkLPSpECt61sWtTsqqafEhFHFvo9gh6",
  "key23": "5EeWMFZBogbWuEwhkWxq2SR2GwFZ7gva9KTLFzR6QLgNb4WKVc9bW3NCJgd8gdxG8PSc45USHjeMn3xD8q3Xf5FY",
  "key24": "vEZved4wCufUYbPkodCiHtwQjoi2uTQyMiyjPLV1Cyb8J1xP2cSasrqAnMbdr3bwZiaCWnZp5wv2hnA2HGYTAMG",
  "key25": "5UghuPqsNPvw9qN86wZ1dW2A3XuWyAvZEyC4tStdMM2gyDe4mLohfp8vANq3EhpAHnU7JzQFNQcAz3GtJTnKePqW",
  "key26": "36y7U7vW4nNpX1PFiDksbQMFxtTyExb2VbjceZsZjuC6Fdd1YTyTsvacRsgnDTJiKjMdcjpoXXr6XS4jzLJfdHPM",
  "key27": "4FCPwE6YEtBxbvLWKRsg8WkY4Y9FRvuyP3M122bmEhyZDkLGHeV84kzefUfJJbPmpRKdWeCBW5wwoSMuYuQEtFmn",
  "key28": "2Xbehfb1FgVUNnGK3KPiV7TQuDPfsoyC2hbYUfNhbd3ppayvuLg3XxwFf8tMXCEuRZAHUeqAwYcyCQ6h2Z86g2pK",
  "key29": "3tJdEmPo6zvDkq9ZRsLPrAvt6cMxBf1AvSsZxyZN34RT5Wa4ro9SrazJdKHQx3cLZCUx2MGgTVwgr245NM2q8c9q",
  "key30": "297LJQYchC4GCmZgGcJa9krATEW5sHjsZa6idncxsg9xA14LSjiZGtiGXe5pbvvn721VN58Dx6z1WN8AcU4Qf45P",
  "key31": "vM45Jw6hK8zGwmwPFhnyKuXLN7X8CpjJGXGCN4LRfteRx4MM4TmXdLyXfCJCvMQ7FLH6eEbgLnmL85tBkJRxpYp",
  "key32": "4tZEnNq9tsoDNjFeVt9G4vqxxzbZDfmNT5Ug57Kih8R6JL9vopgXTDc4v2iC9uyzofDCaotx5jaKG9DatswMmmsP",
  "key33": "4uB1wW8gNKKfofaQR13zSWFYofAPcY3gBFh9KEE7SoH6iM2fjgGPhvWMSBrVUStB6QSrW1mLVA4YoC4MZDyRcihv",
  "key34": "3DgjhsKu6i1mQ6kxeKN6YnZANDGUeA421hHAAWfy7w33yy53rD7M6tBEH6DZufiDQBKtmiru31aQ9hnnnS2mjTu1",
  "key35": "63HHUiNvT2DZuNKShzenK5Nk4QQrtsdPBJuMPe4QDpCLiqGue8MnsSNsRNa5vFXXjHaD4MCC1awt2s5TUtexvfF6",
  "key36": "4eT4MdDcqdnceKNveqcfeKbbs5ASgMddRhYCagPSd7RvMQNv6LVo6B1Up2VHnoCkiJyJkLfGPRUH3Wwu6M1TK9Ab",
  "key37": "qc5Z8Sm879y64ovhMZYUF528CbRVJ8tWAduWPqgiWR1L1BxvMAjijh5uwfkTG3ArwGQjCvyALy5sZc9pBdgX5C4",
  "key38": "2poQnMEAFUL2YTD67QwW4Ey4yPzH9rSsryU9tLGL2dUQu5W3Uc6uZo6hHvkWZyxkTVEx4GkiBDbd6gP4EHxkCGUi",
  "key39": "3vkiXbFYoXuLkVtTaU8inC65NWg7niEM3RF8LnCxgJThH21ef6Yifnk2tP9bS9ku9MvTpq99jvAYKD9ajCcUQjUF",
  "key40": "4ADLCzFwx66PCNAJXvoC6BCALWqNq6u73XjqcAzjavRSX3ZMoP4zM6eyi5UR4yh845zGoJ9mkt5Nqn4vF6erqHpu",
  "key41": "GNLR1tyKzNHQmkRnSavZrFDhJ6yfcxtfMjsa53PvWgZWrRmg4Xi6HujXEvXeU1rvWgtK6kVsNMVYGXZ7Kqwgi8G",
  "key42": "5qvrZ86x6eKAJXan9f7P7mKSHzio6oNVkXSLjnCTPkCaYepx8P4ppXR5rRCAwuKNvXFu6Mps1ZCWytHoQrz68LCu",
  "key43": "5NZwqFv5KnPdhuiKuhL855aqiR1VF1TXFapUdmieiLdZcMyzGqoPUWkXm8Q2De6WSkgFBiGe12QaxURxbVtq4Sxs",
  "key44": "2uHNkTEi3oQBmDpKwLxnsD81kiNoJwjEPjUraXT4J741DEDmMbbVpjehH9etMPnBFS78o3Vg5qriyjUFGnMmzPyE",
  "key45": "5Xov8TLkdDfPTbfXXa3TZqcykG8BERhLodxe8SXje1usUdkwtvti46acTKrsiJquqe8jPRmCkuAGk9hP1KghKJaN",
  "key46": "4XFCBKJoDRuM9w2bChWZPYeEVEXJ1B6rg2iqDUX8CVHtwJHCnpw1YASMdYCfRapU3hWEdFLg6SuRSnhHhJzSN6B9",
  "key47": "4UoggXYmnFmkjBa64323LrH3H6hnna3dKthFpAjfeRvHk8Gk45iBZVtisyqJLeMNfXCtFednYd7NZLqbfcdq9iLg"
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
