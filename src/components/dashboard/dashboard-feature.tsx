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
    "3v1ByQU1iHjArChpr7XoXgz7KB2VweE1ybEcvsq4pivTTMWM6PzQGj9W9N6ibq9fvnMnpY5KUXNpSz9VM6c5rdGN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CvTRApNYFamYBf8KKyce1zQsvUr2BUaUJhU8QhqXusctbpwKDk64zXbeNV4QzpY11N4fo2FRNYAxrdZDJLbGv8G",
  "key1": "3UxZwU9X944NFk4axCCMi4Rfka7SgpyrB11ggqum9tuFCpxciiZXgwkgEMtbUxaFsDkZQ4CzmGHV4WnCXmuVedrb",
  "key2": "5AD9ErxaspJXZrDxdTHbzw2apn2PmyoVt1uMS5AEqxvngFkntdsH7822WRKHP2MdTCU8DH8a5gEAKyV5RoYfu4ox",
  "key3": "zsrReZqvgVyNwfETPJ5yS9S7McxzT6B3edFyrmZ6sMSABgokZyXZp8jUpttgLfPy6Gsejb3RJwPiZgwyqej8frL",
  "key4": "5umphhwKC4SuVNdnmsQx3jBW1kR7Uf81yMCSutx8T6VMrfvvyDPirf5uSBLSDF7XcNyHAYdnCosiJvMuyvwXnbHf",
  "key5": "3aZHr4obj2ztLya2irmFTUVc4XQPBGUozpDBZ6P9LQRm7mi1mhiQaDyyK3nY6GBdSoY9zT4tQxC91abWMafKyJvK",
  "key6": "Kyn5Y1V5wE7sfJG4AwHKzdJPVJMF7QNq5ddCGhN8BbJ3jS4FYc1rwtp9HbSCRR9v4SQgcdsFm8wZ6qtLkEHZYBN",
  "key7": "44GkihZ5MYusWGTzMjuCeumFnaGiCriXC9fyaszeAtnYPVCWjYuNwywpEGj5qCUFVN8Sjx1Dkn8eFprGivWYZjnr",
  "key8": "2MDQ8zxqAeedkPpDkUbZ1gg5EBnHoj3XuiLGT2oKFxsVWdftXXfSjELbUgwoArnJ89RWHVevew5hmt1uEbBBr3bY",
  "key9": "3BdYZhEQ7Td85wD5tCFsqb48VLd1RRzo6pqnkWqCqm4TTE6dW1XbHf6UoQJyNGUoUa3c4U2pWFPdKRV1pbGbvbDQ",
  "key10": "yAfcPErZYmuaWDzQVQoA3s6mGkzwNyJWgUHdGk9TPu2MGY3SEHajdYnZdh9o87xwwayK6E57ccxC331dbuLD2Am",
  "key11": "DceacupRKuoN69qtdnLXfrN4ooJQB3T3k4FGQKpgGnn5EZXZXvTdbe3CwhfRAen2Q4E3kK7Ha8SgRaHCfcnSnaG",
  "key12": "NnL14EjRJeRkfE2DLtWdSqudWMEkkiysFjtm2v52yxH7EkJRpck8vvUS1XnL9jW3abNUe9CxSQBnQuNf17f2bUp",
  "key13": "2QcK8NfSDWSQzAVSB4QpjcDdSFk9H1uHzTpdZjSRjXpRtfr4mCX3BQw39jFn8KBxUGhDZCPDjp36sFyFWxgTudxk",
  "key14": "3zcW9UB2pWWTjF5MPynpv371qhPysNzwL57sgcaQ67t2kw42x1sVMheHgNcTnZv2A9GdgNcb6ra9zzRLs2BTRosL",
  "key15": "4Jsaf7o8iXQKe8ojgGMrJ9v9Vf9Y6uptU53h8KAxQqbg7CxaSeSYsZ3hq1oZ6NA1pbmNUuaFJVPgUi9Qo47XhM4j",
  "key16": "3bcHQqSuwy7urjnLGxfdZ9GAADEoFngLoQRUHaTJiji4o7jdjNSFNreUE4XPHpzXgdmqT1Rc74wHu8PoJeuXS5gE",
  "key17": "36XjPVqskf9uN4R35GLUAgd6cNhP3SUd11Uo5NauAgEq6mVQQtJDJZdnv3qCJBMBn4Jsget3qfCZvWyGC3dShNYh",
  "key18": "mQkAixnBY7HNc3HeJUFXWXwnpvj6NdQshAs5NtMQdpeWUhyJYeu5r9SUQ2ARabyad9GiaJBWU5hd9axLAeiMM2q",
  "key19": "3XfqHZ9w81ug3Gi5oTQtEQJoMDcjPd3ZQrZXuu7txLPnvHajSsVvMjEwgRZukNu6z6Qump2VnYFrx79GTkGjG2AA",
  "key20": "4LPBiHmaCpVgTrMWnhJD28LfQxtsj6yK9cCCLwqo8jGxGA2Nur15XuWR91t54Evuu9rJDXNdCBdbo4WxHoxYkGTj",
  "key21": "5m7CiHmGjUGwS6n1km3T6vX7i1kXvnEtR4DB2fQtYjWq1Po6yhS1RdNJ1y8Bzi74kyLD5DQwo3bCykSPJSX4t9L7",
  "key22": "5V8qm1bbWVW4ZG7uqo8YAFK9JWKSqxa5DYUVW77rr7DJ2GfPhCYLeXui41PC96f95R1CNaSX69s71PoS8SLNE9uL",
  "key23": "2yaLDk89MsqpaxZNiJqKPCZcpyf4MW2jCUYUcejJwjhBNaonytmGqEHhpg9FB1wUAw5yX91ioKRV6kBWwznc4yvG",
  "key24": "5rjFZTVZU4vB6u8Qy7BfJctDt7Q4afarrwGGxZdNwSVy9daokKYa55V2hoZDNBK5cTEyYGXx5LFH3eCr3rPzmqyw",
  "key25": "2uKWYKy8Tide2nRKFagQ4mkoV2YEUEHzPdKYSSWr38rn9sZcv31VsPhXaXDWYamGNkb12X5xaj8MspnsFZ8UaVNz",
  "key26": "65pNZYNDvoYJ1JYejbhWHzHZjXaK8nsi8YDzmSygq3yDPQGH3ZTEMuyRnvs4HFdYZaqVHehaR3domM41qMzRc4Ex",
  "key27": "4HbiN6anxx43HJWFrPaXZfXTM6qcym6n1vWPTezQ1KSU1kSMYcMmxYo5JtVoKUZutLi58KhGhg6JV9kvBAJkCwz7",
  "key28": "2k5q3DtEueHRjk12uRdZ2hz8tTf4puYBTTbNxrxvr5HLfztp6hJ42it3W6zYnWhQRbkNCmVyjh8tq4yeiKyk8DQg",
  "key29": "5U7Ejdv6U8i5qv9MA5qgvgqxqgS9uDnCMVTavPUkFfdsnGMWkG4ErznCiQtzU6QK6mnvmB4fMRkCibbjFzkAL5fG",
  "key30": "3XpbhgsynUavLju2P5fawQLgV4MG8UBghPBwFKt36ZBe2Er4cFC37zrjGmTqSZWvHhAgauWJkTTueWKTXjGwtZMe",
  "key31": "3HEaBiedoMSapHX3zX8aEmoGj7pew94R1msUuHSmXorgoFu5ACYCTvJexE771hW4idXpLjRKbhCfYJ1p7wJnU6ti",
  "key32": "4ZDnhJDM9ERZTJAfF6iCqBLC766BCuxfGvZyABzNM9e8Qm537hEGK72D8uTA78bp4tHkvExRVA4V8UCkQuQNv2jo",
  "key33": "4zJAx3cZWrcQiWXqdcDhChb8fLpxWDHrosqdqCu8ubvh1A5eTyBi7JrWQMRUk5ha2VQmtGZNUzuyBkLh6MqMDJ27",
  "key34": "3mghPjaVbhA2FSE2CADpqZf795jb3U9P4AeN2M4xT1Kh1w2m7Z1UbS5jsySji45ETgnw1zctsdUViwGKXvr7UBz9",
  "key35": "4BGRBH6sFXKG8SwyffTUDD1MdyaHc9DeMJtxNPUAHZoK7DUWviG5bevF7XkHLsSEsGreBCEeDkdEwkXBrQgsATUu",
  "key36": "4T6Qe5YTaK3hqZUhLPBSA3cpkKFeybZnSpiDJn9fwRaQJtVVGWRvJGkcZQkupu59opf6kyjdEgLejPFnJfsCykkk"
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
