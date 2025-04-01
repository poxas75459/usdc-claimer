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
    "z8n8SRx6xCNEnCgdxcCb9NK9d2ASHuicTSdqaki9tsdw5wGjTjWW9Dg8HihtuxNXwseiYqPCNRDzifV9dYGHh1G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vE6TcVWB61WgJPx7dKrRF1V4oBFSpGATDU8MNd1MbKe9co6fUHi2K3KgvGCKYC3dujbjxsw6T43oppDUsujZgFP",
  "key1": "4Mbx9FKg6aDSM2KiTvN7STUErMRQQ5FK67zBwyFsAiZipAALswY7HhjvGaToJpJgBCYK4YNdvzNCqA6HSYYsc2Do",
  "key2": "2Cavv4zHeWYsUZoDdxMcfZY1Nc2CTZj17bAsNWcw3TGvXhTtCDEBPiW1xbrc1gCZnr5DKuFLxF9rS26NALfQruWk",
  "key3": "4ggFkQpJfPW8jrwC5wSJy4rnsUY3zjgpVW7JGYeUqQEbgYWWpKmist88VN7Dk9o8aFcXDk4yCGBHhRx2M7jhp9dg",
  "key4": "2k1hJELJucSsazZtAt9BFr32VY5yRHHFNgBVqjqJmav1R8JKB5A2x4m14wNzeCfEc68amq3SiVin2Bo5kR9TMHWW",
  "key5": "2cmaeDnyFbsVvutvExVdtPmC9dMTZm3Ezi6EiQgo5GXXNgQnUi7zXESeTUqrpUzxiuTPpo8NYD8ufA1NFFhEPJZw",
  "key6": "9cQRUM6XRRB7c9XwpbWsGgpLRTj2PkaAGejsdRTz7mmiyNc5hiys7tJXJ1qrAZUqv3QRBNVaYAJ7rboehmwndJc",
  "key7": "4yfkKhLZeswHGsPmLsuDM1d9TBT36VGfwpUnJKwxyHnboXbfvY4zJAo7PZvTQqUsNiAoefjBAeRThXnF5Rws1shw",
  "key8": "3g9kbyE7QXYH1UMhnbsFPZg2C1SjvLNHVsBHwV3gT3iDykUrhVmp3bQ5SvXZ9XxBdZd24m3T8b8ovm6Ap5ya4CxK",
  "key9": "5vza7hDsuCsr5Zz2qgWqVEyMrZfcXYQwEE3yKP6nqkuaKPZfg9ECgnQtApf6wLvu8Dgm1AhuLNqu1oYkeDfdFjAW",
  "key10": "65uiu1DuuKZkVMxwWaLchkRfWasE9gahUvGEyTtCUHCx6fBsSQUACy4PYPrS5BuyHZqwj72ucnRDffKDzky9qBoo",
  "key11": "4XXtuooUVtSK1JPv6qmgHAc1EHbsS6sXbncJ3kjKrU1TaA9H2SoMkcjBBLiTASvGaQo8NmbZijGxkLfXijybtCKw",
  "key12": "GvQdKr4ZYix6JeVJG3KhCtPQvx8MHjMGnRV6bXVcnTCvzhSKW5EkaVtCimzAxUdM3HtBtQEeAVmoUhB3JDnUKtL",
  "key13": "4usYRv2dFiCq7fSiJsUBmBd3SRenAuCnv2U1q2AziJt28i8sfQU2QNaKs1u4Q3tPVoB4ZMMimkh4jeJGc21MVxnU",
  "key14": "8ipM8Wqh7Ao31pkGzohWZbCLqvNqqZMAT4TF7Jw94WworkttPoYNFx2xmAHPaMG3Xzo6RAnxpmFkxnb6MWJyT8R",
  "key15": "66T8c5ca4vYzkFgxAufq9hDEeH2Hg52KbnaCRM2t8N2WfLth7FNXUzXQiGf7JjreVqgaquMVHa5FaFwaUnD6NaLa",
  "key16": "2oCEw4tQXxWzZYdCCtRL6AdtG3Rd2TobLDUYQxM6xgdSHaksz96UB4UhYgftgBArA8otgZ5smxTriW6ruxBEtueU",
  "key17": "2JNqqYG5p2CLdMNdJ6TzXfopTgRDzTvzU7ZsGFrtxaGvvMBUQnJiuCm66w85C6ZfND384Y94hJ2gH6FCVZuvFtBT",
  "key18": "61eBe1iUi3ba2DZbXzdY6SMca59eFL9r2gyz2bxFh1nZs5PUYVpxe3u1Sm7iF3DeLTcQrqUZ5VKKS66Q7UFMQcZV",
  "key19": "2E8awAo69HdXDHsc36XrCJqY6sd2Ua1BszrndwApPTqjB45eTNVkv3ibSAp4dy3pqixWBxZGJinxi1495zVBqTvt",
  "key20": "3RecopAhuNcEb2Lkpv6HpNUwcWPfg6ptCkEYyteefVe3DDSz6ZuXoA796beiAVK9rfNr9kNqHBBhmFHN6z7Dqesi",
  "key21": "4zwwjSU5ZWKxVz6WnRzUmK86WsxBaVHcqj5kFwvkoiLnTqXvjPxk5Ncjn9Lt6QnkS9TZnZNLxtud8fE8cW2uS6DN",
  "key22": "2vLsMgrtUpda2PodsB25H4EmSMu2MGZEwsnm7Jwc6QhDdPZzEtRztSkvRTi5LErRLqGU5RK1cXrodK3sFNzMEPmm",
  "key23": "3JaE1rUBefcQb622momc6kMdPD9owfjPKVrpzC2PSRM3JhGjjmA6jH73b3USbXsGDz8QfQQj8SXpMP2PjDDXQZAd",
  "key24": "3fkoty9xPuF9AEJFrMJDEkg2EL6N2khpSJDpSBz6ozpJWgzvLvu6WjK4o2qZoL2CP3vy6doQV1x3PXa3AKGCyntn",
  "key25": "2aeHFfRFnYSgsddbjDQNfVDaViXx95HfQXMvAW9KLmcjVixAsJDpCWNXDbnd1H7ktrxdPeDu4V53rZTtmWp66Xa2",
  "key26": "hvs6T5CNqVaEPchEC7r7FtaMDFbrxDNxuPjwQxVSFetSjWSbWEif65rNBR6WFP4pb3WDt2P8GU5jrMW5cao3YZy",
  "key27": "e4JZtU8ocKnoq31GAWrmZSxKfYNXxwUDk1mrgJVbnyAiHzYWEy1rDyhdLKpeCLjvmJreiy4GiojaCSsedVqv7rf"
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
