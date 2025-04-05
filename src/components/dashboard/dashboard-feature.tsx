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
    "2r2UYz7qDTYc9NTvZVc9zEKT28Y6Aess3VybmHBdDJesaVQouMjmEdoLLvF3NopxLh2vxpHpT8xrLDA7RNhWT8X2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64r2Goc5t8jcvsBDbKhrhaLKTfTVbjScq8X4waFf1m4ccEJA4oSTcqssPAmuf4wZMnzH5eZGVc1re6Ue68sLyj8q",
  "key1": "2NAWrTwFrq1Y8ChN8RHMeuYzNk7bRMtb3PM9UVcMtGidprbRdJFGGj7Uw6ZNckgTwr94gzjCnNtPpREzFNveW1zy",
  "key2": "2MAb1kYb6Qqj2kbg3gYa2vNotYgEQf6EseLWPMYBCTTERidKKF2t8aTxu8NZVfoWiWcGGXpMn44LvVhQf6UPneHS",
  "key3": "3BdUcjLVZwp2WarjnUVpKU13hMgw7BBhCvoe8P2XS2jLNnxX5XNdPw8dLdGEWA83369fnoV5mX1KpLENKMnotGzr",
  "key4": "4T3FqRN5TD9bod5YrAutEMcq5GzsTUiNzDtbffegpXu5wNVkTMoEKYWfzLUcZkZ5kM7qN8FN6Xqzvhx9KDUMSTGF",
  "key5": "5ANLBNTUcUc3s3J1rx6xHaTCG419eyWRB6Y2zj4eLue2cKAAS9DY6HTnX3HAK881oxPJxecwN27Hb8bdtV8NcGy4",
  "key6": "2wUWuLy7TZz1rPz6YvjxS5QjuLVNgw2WoTjUem6tD61xPzPigx3C6yCmk1mwXXrk9it4WFb5BePyq6uexBtegFBt",
  "key7": "5V4rmzNC6PvYbC7Ajae1gQz2756BNHocmqTrqbuJPa2YHTsZ43fYMAbWwLGV7P1sHzcoHj6Gybr897CKGYZp1Jrj",
  "key8": "EGtJXzLxYEVKo8bJvhm3uhniDpNm1cjUy92uDZJCkrA5yV45ycKda9m3hYddq4H7Y6UcDFmtmA3ioYj1cpJUNyY",
  "key9": "2L6D2xDXgVJBVJmkQdhsDF9T8JVdMnhYbWjXhGwcdAWiT3DJ2imqo6BY3uQWZyxWrPghjQ6QhBYXWf5hMg2r9tjq",
  "key10": "61itL2wdbfbd1c7a5aUpjpm1sV8iri7qZmpNoZVKs2h1k1bU4hLFZ4dMAvz2NR9kgbj5rdXpD71vG6d61kjVCm2P",
  "key11": "22KiinmT2hkpcmhuTVDyWoYHoBNVfJrcaiEjhw4n2KZ6KHhPR7aRRHpKfE5WkRxzBrBCpuuBX4k5eFVuesXCzW3C",
  "key12": "3XpVKzQ9rGnRmPtT7bhKo9H5szgnw2nsDz9zYCz3eDmYw2TmxFqQc4oEapv6B1ihsZFh6vttw5foaWDjg43REye1",
  "key13": "Xe2baKAxGQDyZKWkMLWZBVPdTkW4no5arKxsvAtBztLxDa7APtEtp8g6jpqDqBFqcKXKq9zojgjykq2cfkX1SuJ",
  "key14": "3PCcry4eMRT3H6G6TBKGyLZczSYqATrdC5m1tXPVux9BL8uiXzVNjMXhQ4ZJ5Am1TkE4SNLwBNRbjCJ9EizHn3Sk",
  "key15": "337BbQj5JjPQLHf3jheA2D6cUde782a7zJgMwhymJ2hzmg7VqAXmk1S54aUWJ4cgbKKrY8ip7v8yXZLbNjuQierZ",
  "key16": "FNESfsnxZ7x2PAxWjwi2FqMv5JqPX9v2FQwnq5bbfxWEyma3bJCFSdEDDoijMmeqPvQAjf6DK1eayW7gbNJtZiZ",
  "key17": "5Aqh9cbe5gsA3KsVJBF9ts6P3tf7v7irDTLMWXAgLfQ8QECQMFW9FjpcDVTqfo2BMZqY8ruhCDP9smt8k42Pjg3f",
  "key18": "3hdV5qguiwEwomRfrp4orV1xvYzZ9wyP7FThJw8hdhbb1ktKfUmUePPaXpdEgQTh899eMknoKjcS8sH9y7vsXyt7",
  "key19": "3SjQfbmgvTUyzbQroBE7rnZ7zkaY9sWrU3ShwHiTpuwhSLRr4KU4EtaShfV4Jiizr7Zg3HVxDbhjGEf5T4tNZuNq",
  "key20": "2NCJEJGMVAcuRQ1ub9r3oBrrQ1J4nohSHhK9aoHvoaXxaBJxqP9hkMUbBqv8ASoWgjsyJSER5Ji5cQaFW1QkkENF",
  "key21": "33htYTrRkHHhrFN56kFq4wxBRio4peecqA46rYZCDiE7NKCqWj3M2QZuHC18md5ReRV41iHQi9DBUnkKvUFnME2i",
  "key22": "3Qri1woPEPBH9MWqNuRC3x3husRGaGeBWJQsStueAxHh4uE2TCok9Dp3tExZ41LzFkqGPpUSGMahqMJtt6maeHr2",
  "key23": "Vh7GpFr4kVjjx5EpY82hgPgvgFD2MccA56tu8ZCqmEmLb5KNk9xenqmZ3ML4Wq9TTHw5pMmTosBsgCLT9YJFhSA",
  "key24": "5tBsaKPdhXnGJtg3Zuf4466UYrMfd3XvkGoq8THKKTvkqH5M3Kjvkrjy11URNgxobYcUk64wMtTHdjK246f3BHyK",
  "key25": "3wgTJRghiHUbUZxT8UKj9GZFLnMvV3ms9ygujwJ6D2JHLX4oy7x9DWsZQjS3XuZ26BesC652HKvwTaYGTwSP4xa3",
  "key26": "3oPGtqTwTcE2Z5C6rVsFER45W9qtER3dGrycYMLdboSUzMz6V3PSUnSRRHgoAbVjSwbUuYbJnUxcnXsXyRHz2ULe",
  "key27": "3gXutSZygNFFsLebNq5eR8b4LTyg1TBKU4BxEmx65amS76EuhDUVwJLH3bnBSoMwonkvQxrZjT3pbdwjFgXi7oRG",
  "key28": "2FHzcwXBkcT4dPk3b3ycDxh813LHnQANrTgR1WZeo4jSze9P4LKXBA9uFPNTyQtGi98McNQBWQaWYhLq135fTAvj",
  "key29": "2a8cL5JytXCuwCZzgWqWSPZB9qDShBELAyrpFE5w71Uj49s2bX9pz8nMsmFBEXyYeerBnUCgmbCyE2CxMSiuJAgL",
  "key30": "4wreXe96kniF63U1TA98kenxPMokhd5Dxb1St3VgmStXXxDDqrm9n7QQaBTHey6UfgeQpADYsGDufB85AkwUbN4s",
  "key31": "5Sw3GRNupWs1qH8aH6p3KcETZ2pcj9X5ppND9CVNs8DJiKHd3pFohf6w3DNkWVtcpXgVCTfuUFKmskFs1QH9Mzcg",
  "key32": "Lbr5t1NVDYE32h2zp69HouCtJpVfLVvaoTqbx5zWXqqcQHfJ7uBFnvM73iSbRPvYabdBP4dBaC6vADhdoBqygRu",
  "key33": "5pcLWuZBYshtXQpeEyrCYyKAeYp5U9QoGqcV27k7dTsGGUiANBr7YVgzuBi1d9kS67YSA572J2Y1V3SnHuArzAsH",
  "key34": "p7VDUURUsNCJriDrXSczgg7KMujTJU8vGtmr3UqGYshsGWw2RTSn2Lbe82H21iQ8CpRaNKxohRBwf9Ky5urFpeW",
  "key35": "25djouoB6W1snyaJzoMnjbpfSJ6ER87ji9WP34ZfGH9LFrmcQvC43nUx6UFJ2BfMcBBsw3srmB66LEhbXWhtej6R",
  "key36": "3BLEWE3YEtQ8ANvEjw1JZBpUVDWFauLvbet3RytDKhJXnQBQb46gh9mHvuv9qoJ532rWWGwybc9PyPRaZ8gm8c1M",
  "key37": "1D6V59Z4uNnuv7hKRnBhdxoKUXy8pHzcxmYsoZ2txQGxCC4CHYb2xW3JLaPPJPHPibhaeiQJXNGP4a2dNobCW5u",
  "key38": "2Fhs14TWkDkafLKfNTrtEjQxbqAPnPLmxpJfq4bZsTPxsWEXqCttpwuCQzYCQA1hDDpZ4ZajweLQxFKMKL6Y3nxz",
  "key39": "3LiUkjaqNwfbqWnEPEJHAjX8LbqT6Fy3PPzD51smWT5hQb3ySvoW1pCEESthDqrvrDpiQRfp4UgVWrqcydC8Z9nn",
  "key40": "36iYvKJbFcLPFdNG94SK1yd9kQ1J1JBtcYV6hGfPer52i96gGFvf93LopMF2s8n9x7aUaMdLjeBMjrNLLTXC6VpP",
  "key41": "3M73tDJyXCTYLREvqrEYmQ89Gmd7WE7sNZ38qmfNKiL9ZgnSM3reDNtpE7euvSDTeo1k2MmDpeh6MMzaWxkggh7x",
  "key42": "5M15iEo7VQdAzx9zYkVd8rgDW4A9awQSviztHictCqSruarJD9Fa5KFnPNwKH4iLi181fNa45PowWP9u8QgWoobJ",
  "key43": "5fnn2CLXvdWzbQdzW7SGGXTQAzFzUTqpK3s57gTr55cYV5jEinpQ6VfQJ1U6R4uvvKvCNvhMZ1LrQpCCGZ1bqKDx",
  "key44": "2B1HxwiGEDiHrqrrCKDbfYnTXHxJWLDGtfFAvXZMEEYUGvri2YydRJ8MEJaGaVuAuWZuDe9TKm1sefMq1iSPR3V7",
  "key45": "WfBgevPc8XuoLTspBCS4PgSf93Ag1DRMH5vtf1VcLJSF1TV85xv6dnbm24ECVNkr2rxw4XdCCLiP5HGio4wGP8Q",
  "key46": "2kgsogKB1F5jTfNGHqvH59AWVsBuCEjFC2cQETYqUsAWELETQW1UwyY4Euz4YgXGpjTRnyHsGAf2CeUkzZiU669a",
  "key47": "34spdJNUCSN6wfbKv1dejPkepbxowJWQEuydjnmLeJgoc5r3sUS2dTmQfn3mDJk742b9NHYUqDpXnEZypzutnKk3",
  "key48": "88883KRJLJ4V8wf7hMYt5fjQE5m9MockkmmeYbpRokdrk5fFUE654Jt5MC8kzSGywJHYJWqGSEMcscUE6Abj2s7",
  "key49": "2NWDMC587xGECtQfq7aetFhxKwcqV9GJ1ZDdcFWcgGVHNmSWhRcfkGuWkKSDowcbNMgDCTw3b56hZU5dnekG28zn"
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
