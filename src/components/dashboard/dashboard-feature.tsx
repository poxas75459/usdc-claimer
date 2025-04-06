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
    "4PxXPumTb9MmBE2t8U97S4thweq1M9JZhvuVdhdwChabppK4yv3Sgkwxd4hQXGUaPorre5v2J54MF4UFrx7csZ3e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QioWgZKcrZhGuE85XPH9nTmkUP3A9jSp9WYcEjEWZW5aXSUzraHEKHaeHfeJEakSBq44kaTBn12AxA2XB6GFWyw",
  "key1": "51LQMgZC3EHqwkHU27iZ1Cv1anqWp2UaqXj5YhkntB28PTJ74WxZzpPwPBr9aWDfjmZFKB6r4iER6XYkV6yqQxwu",
  "key2": "4ZNA8gj2EJiVnrUj7rFqSisWPYF7L1ConBSocHB4Trz3PZFetf9yG8QnswF8RbuGxWvkUYH63fmNRkA2ytLR5Y4i",
  "key3": "3R81ipy36QQDAXWwjDZDnANNok8rGF8sm34Lcy7x5WYtNYDrTDrFBiBsVc65jgszVX1tZR8QBCbE3vCDj1YFAtN",
  "key4": "26kDA1DyjCK3raTiSezfsPhUFRWsuLfEvpgyrTthaHN5JaRfzFMjTgYE1KBkNqzz45d4FVHnzy8iPTyng8fA9JeN",
  "key5": "bEtq26TUnpcT7njM5pCKjzAMCzSRJrsZ24rFQZAjGwGdN28LkXEXM5BQ32jhrZraP1mxKb7sCT9nN5ZdV3kVZHr",
  "key6": "3NreBAGqrnTfv7vRSKZ1zo4hyjMHvWTeJCrzr6PUjrFNYxYYQzyMkeyXiUrw4yQ4JQ1hBWaRU3UZHDappgn7TCww",
  "key7": "2Uj6SDRYcARjPgd44UhxBNujgKYdcajEdQ68Hu3gK9SxipqLnR1jC83oQV2pmbtwFkSdzhfCuD5AFBKsEEpTLvyL",
  "key8": "2dGoT1wtZnPmFZrHHjg371XeAgShWKj2R9cwdeB43GD9PTnhYuwGAsc9GXFAGh3chU5u71aZDCQUmsg7E8vvoQJn",
  "key9": "4zYr2duABxzCc967LTQnJzCcXVnubfbKnE1VL2pV6YPSFC896pFtWkmJ7vbwJcMPGktN4rXxTLwPPzg6EySM7xkK",
  "key10": "5tXMhTuePQkfDjWmC5iid9bWLnPE4vus4p5BHgQUTvcnBe35yUTHTQ8B42akBghVeq1Cx6FYYQ9asXBeQp6zBw9y",
  "key11": "weYSRAfGif4RxTU9vB2sMmNTbqpCbp36CjypdDGsBHPQWStMim453D6PSkAHP5soUEUUzdjG5EdnH3C4gaoEq9Y",
  "key12": "GMthBRiRKqgLzsF4qVdv9TwSwnFMynfVFZdKgFVuJHXJxnmBvJV8A9iHQRv4bCSj1XNW2QJiJXPd982c1iLKJmR",
  "key13": "Y1wPrxqfSbA7o3NoqGc6xoB4BC9Jzxsr6vwAtfHFUAhpxfiMA3GpRW2WWQJV6BNnhJ4E8Qi3d7vVtAzJkvusVQZ",
  "key14": "4qzkx6z5DowG65jYd2haVrUQFPi1SfTPQvxQHLem7kL1oqsVDu3X1wEwjKVdSxTm648QUTy8SdQarpDWkgXgKhZx",
  "key15": "5nFDU1juCVXhMqHcyZyHT8ao89wYoeFGpqLXQ9aN5r6fdV6Va5APM5SuzHfkuzwCzLwY4HhZBRJJqvQrk29bphTd",
  "key16": "U9deqBkvaQ5AxHvgZpozFjtYpwJ1zspjkpdQDduoibaxhtnxipoXQDUc9dwyJxhXn6fdYaqnyQb8MWP6MmJdEWZ",
  "key17": "3GZACy3HcNUoLS2q9SsRJu8DQqJUPgnkDAiVHSfa319PKKzKWF3Rzqheg3FkdRdjGWzbtueNF7ofrQ2a7fQW2JS5",
  "key18": "5N487ygRmxQ5YKLtDk5HBn9eXHQy2E7FT4ZBCQZXDSyP7t17D1PUoKoAY57vHntrn374K4ThNtieuvRx2N261W8f",
  "key19": "kiJRc1JPnrSV7rJqGHWkC7i4ArUzXHCriiCkyNM3oP27aQnmgWyDL371wCH5wLxpn6Pe5zf2GrveG4rJspVFqss",
  "key20": "4cGgDpGM9R2RZRc3H2c2xuqQTszmSVwMvyLLcgNNVAHZCeMBcxcEnjUj8dTdoGbY8PAygXFqHqM6w71eNEeBRxEM",
  "key21": "5v4LmMGm2qABoR67PWkTiZSSkDKMk8dAwEM84Q9V27dvDooEfBEF9LEMoTqE8FmVGARfAbz5KbWqUCP8Re3mMNPD",
  "key22": "3d2nhQ6PZkJS9fCG411juyu79gczM7f9ccGgWpYB8HZ5EGsnrD3Cqyt8QPLqBpeUjC6fR4YgoAUUkF2k4jCnc7NA",
  "key23": "3d3MsfFBmbPWUoQ8565eHUWupwCMvMad6a7D2pURZSYpa7VY5TYnzEQG1LL7DNKUmXeXakXnp5xT4omtS8uFFxrd",
  "key24": "5LRWSWjkQ6YsVrDFJVcYfNws7JMGv9meaheUkfdJAeKWScxpiBwz3dsQzShJh4q5uBBE6Vf8139jqEQwfcrzwwWU",
  "key25": "3hawt66oj5hwjbKb4gFwf8Tz8T3Rs2idkNzqpyBje1DcEN4KtTonP4YnzRa1XxgBtqW7C9x3y5d43caC9nC414qk",
  "key26": "43otMNRnqnqpVQt1UptsRUHAoqnJ6B9HcYms2y77gnjJ74cpXJjiTWoPnFKAJCktGJVYBycsCcpBREHA4rg9fFS6",
  "key27": "AE8n3dYCQWCaM66kwkvYXbuDEow3Ao1WfBPLj3dvzy1ECcayz3eRsCpgeHnvKZNyhcztbD11ERoYg9TubYCxF4c",
  "key28": "35qraAeAr9mA1VYGhpnEiPQLVMgqDVDpNSSV9Jq5XemJpX9NDRWpNJc8TUqa5rMNTS61WPoiDq9BqzSE6ZphmesC",
  "key29": "3KNBJDUn8TAgi8bDWkSUkLAv2m5kpdvZSocVVYmpX3ARxysvjFzQTAN5vr2zAjrUATmeGy1GSdNxSQkenhZgw6V1",
  "key30": "5LcpAyCUG8Y2mgPz3qav1QQJqJUSPaMni2KCsgnWn2avu3YpNoeXd5Djj3u5MubEZGvvJzRK41iNVDZJn3V2saGC",
  "key31": "DJnD4cTZ577jgEFeNqf7d8ddmBRbtQwYoZmS8ysredRwWLFjminRUruBFkbEF2JTVtNru9nqKFakVSpfwSGKU4z",
  "key32": "675j7vS9dF59ysbCMNcVs89ESGwEb4g8cLXG3W94WsDsDffn9m76RXGD227kSGbnjAYU1cPJEZN3NTUyPoumLemv",
  "key33": "N1D59ESs9y1xPN6tvgGj5GqsGNgDQrcK8fe5xoqoDoiuwNfEVvQHidLYgJ6FgmzfKarhvU7VGcdoV85riib4ZQS",
  "key34": "RodexF1muzoKrswaM434w6mAii8QL8HBx7faLwrRFpCDLNTCpnHFsMfTThLRGkxeqeZcnNHnWZo2czUoTGXiBdo",
  "key35": "5gR7qhMmm3oqc8fE8xsaa19opVUgLwJgmf4LFWkMvVP1aAu3YLCVQfhdkoUh6Ehc9d1Mda3p7m8jkQsaScD2CC9N",
  "key36": "bn87UCTqKGpmWB6imis5ohsYEcJET4oQnU4u3TrpV4esDo5LjUV7yVAWGnqQcRkwFEBAdfNX8nWRBjDEbQDV8sA",
  "key37": "3vEjbFFfc46myw72K5Xdsf8NCwYn635eJyJCRP7XV1YzWGzTE26zTB9RJMQfSVxXjmcjyAg6JfbMYVaYHeeYcux5",
  "key38": "52EcvQia7a7SPhuGNBmwQ37sSLhKvMMDV8XhQhZrY6AnRKTeaHQ6ySjenH7PsbyCNGFsJierdRB7kYhK9pfPqHvD",
  "key39": "4gabRu4FhmvMjmDcdkRon4HMmuxguHwmK2C2xYX4nYCvfnMVbcDJjwsWu3JmWpAz8LBHy5DSccwyqPjMdiHRh9Sv",
  "key40": "5yJVwt2ySubnyC4G8kT4cGXpJT5HSBAUPPoBDps9pxNgVqDVDdBgtfZFz3gkE23yDbVWftYf4cvFyoKkboPeU56C",
  "key41": "4WeveWBfQ2g2JSKcTMNaS2bTdTXd7TaVBD51BBBDycybX3ZC2iWZPrjZvEow2Y8piSNvxQup5aXR75QXH34rU2vV",
  "key42": "3FdGNTqhSCBayx71jbZRxWnD2VJF7mK1phTcri7M9YgGgDdXV29sj66XDyu6xM3JSNpvwWj3DvvKYyR5derzZtxC"
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
