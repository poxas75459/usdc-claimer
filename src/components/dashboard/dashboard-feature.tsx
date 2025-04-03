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
    "43vWn8SQe7ciQUTvBqJo65okTkDFKGxhYRAcDnL3Xd7x9TNCZaBpfMXVdtyJgG8VgyMCEphH1zgjD51xm5xgV71p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2U2tbym4QCeXsuNejwzY8sgD8GhwKs4RszJTwQmnspbLM64kBfbh1GCaAqTBNMe1KCBg5ZhnrE5XVZbeGs451qZU",
  "key1": "2AR7NxbvK1a3d8s4kKk6ZhchqyhWUxanm7i2V7C1aLFDXvoE8LGf9Rj3YESpfzmtPPzWrJUPWiCSCB5hPiTZMvC2",
  "key2": "5qwNjsNuNfdZJRjQPgFjnCBsBbGyidMEJDUNHEE8rxEb4nJ8Y6EiobKruKErJWQRbEEmtYtk5wDDCwdUmATAzZe1",
  "key3": "2fXzyP92HURjech5b5Zn6PBVpAq533ntzoiLw5Fcv2yRmyaj6ae6ThSKM2eqMmU56fnyjtjftJ7kT8ytW6senPcE",
  "key4": "sw2sHncS3YGuNnVjyzCjR1FD8LbXxFa49NpSaxVvMT3gLdWQWEV2hKqPXmJ1mWShAvH5HDfAXjkDGaFBcRYXLqm",
  "key5": "4g3p6MUgZJkTg59MUrzSMcmLqteWVLCSvpvLPdR1aVb3n8ofBJdKw79aVTgcn6VNNW56uDm6admqNN6opct474DA",
  "key6": "2BL4ZW7wry5HYWHwXdds8rMwhhKyWnfega6hGKm5nZSVwS7ipYuZngFAf4R7paBhpZKToCqYSRAZ3n7NJQubtNXA",
  "key7": "5cV9wwS1giWcqHiXekE9w2N13qAMyp5GjkzZcuiZuJD4QPj9jkkgYzY8F2UPNV538bPsqKqZ8ojLeU9AjiB43rSy",
  "key8": "35usrXDfXDcSv4jWY6dPv3kEWqwuoMrjuaDsQMwocjempcX2zdK3BfDGPWdZeiKUmw9EyKy5SANKRtaHvbEpJeHV",
  "key9": "43P6tKTWXDavvvbsEzupX37pJcok3KgKrkBkZrYPANbps6ntYDJPEwUmNfT3G1BdtKkQjun8FbRcjBwJDt5zGJxy",
  "key10": "65Q6X6eGNVovpYiZkWr9wsd5ehjggnGw7BtcGCVm9qQwXYvj1UpCmURZPubSdjh7fJmQesW76TVENLg36UdTR8cd",
  "key11": "4K17tLez72Z8jct6QhKPDrDKDmy34Y2BQRY1aJU3bzBDXtZ7RUNEcbWL3WaW5gZxf3Rx1F3NnuseqrxP99xHRpjw",
  "key12": "3i2fcVCjH7U82xG3VxtUSWF1CBRTibiETXNdtPwm8c2dJ99jh5dUap4rcQhq1SCsdeqA76QZDkJJHTT3qE7TPiWQ",
  "key13": "5TxPhqTJASRSBh66Wq38cU1CRok3ddZtr5jSo3CiQ6Qz3wN6EbJKqxdZUgpmRT3gzJNK79dAUtm9Fd5ddC1mDLni",
  "key14": "pTzcqsnB2NuJoRKqckKKKYxqX3rXC4kQ7uKPidNSUsyBsex9W2vXQy6MGbApPT1LuJM7g3eTCQP1A71Giyz3QGe",
  "key15": "3epnXTPxjRehDYS8vrFa3Yo1p1yAw64FgdD3iy8xSSdQ2VnJCpUedZsF86vhsB1K86uvARgYchou8DLfdicPa1Ev",
  "key16": "xqZoN2mDT5heJMQ3LSeojZMyTwt1xdy3yMktkPJbfh4hr33GfNx249ojdkLSoacsF8vznNoaUuVkUmzG3nWthxR",
  "key17": "5r8GFLFJ6jtiasoVL8uSJR4p2kX17Y2NUgA59kUF6qKBhQr5DakPfUhXP18tqKQWn1maMwjZNb3u7AmohD9CREHc",
  "key18": "HCyqjKeR3NLHDjHenw1zfyRfHcu2YTpuzVxZ5PrugUJyxD98Hirxs8FksTcTTbgSKd1LfjXULPrD8YfWbNzFJjF",
  "key19": "2hr15CXDgkWWJpK5YwaGs3biqMLz3qVrSkVmEdHt3S3jYgyQ9Ha2zdXECMX9LZqzYmevNcxyP25Dxz1Q3o2eqqUf",
  "key20": "6uLixAmWQe2DhiYESnzyzuXpahJYEB39Mfw2KcrfmBknMBdctNsA9ogDanpD2kv3JStX8LZaHtdya8w6N41fJU8",
  "key21": "4kccPfufKkkkY3NZEQzhBAk8Lzr18C1imKQ9ZAiinmfynx4kkVFCsVAZwmp4fbQtv1DXcu1TjqKr92AytrUoJtPb",
  "key22": "5HAUoavVLBHuXJcc4WBWRiDgzC89QYW7BnERD2wU4SK1FbU8QGskSkEpLDgnCeABobZg22A72gKyUwEAiYosxr4d",
  "key23": "47PJ1EwTibXnEE41qVuX4e8WhFyRv1nfprni1LhGJwTZMeCwzC7GWwkpCSJBPrrsTr9VjPvX7g2VhqjY5vJwewu5",
  "key24": "2KpQTZDberQPprMVELWFKoM9PT1wQuCGpZB2VYHQx72RMNF76FMhWmT39VYdXBB45qCG3id52HiwKq2jFb51Gh1A",
  "key25": "4pXXYFL6X69aP38DPCyKKY8p1Fho35A2Dfp1653Y9QGcikuSLPYNMLFy72WVPStgfw7oxthQMBdk8ikrYnY33Nai",
  "key26": "259h6o4Utqx2cAwMtZ8Z21aiZvYaRSLPFX1YZQAnrc5R6Td1tNQvbDghAodKD6BhPuTchjdm3iDRavG7J11qk2DU",
  "key27": "4k4XXromeN8arLXV2sNHLUtJjHVGt32cNMPbP2au3vV6a3dtqQcxYszf7uc5n4Lwf3VMk2T6STqFMwxn7gYxTfHc",
  "key28": "7VzMQVbWFR1NqLy6M2fGzWqsoFK8Je8AJeqBAx1PwVwAVmuEoniH9W1wBpYKgpVFKyagZXrAiLv9JNQn5gFNdXu",
  "key29": "5AT9Lg8NDns3QCBsGMkgwmdbTCoZcWipEMsKa2RwdTiQfC14KDAxuFeLbgNfJgtQm69AFjTR1ZpX6AKp1rCBK4RN",
  "key30": "25DbZhMtds9NmRCkxvrtvwdLZQnVGMJUyModNs1x2ba69Aimk7nQuvvx4z8eJeXmzwgEtbM3SQJN7FkEVpL7zU9P",
  "key31": "4feYKyhzaHjeZah72WNsvod7nPrFySjME3nit24hykNHsaGeTxxofF8RGpFXyRRDYML9vjXoRxTaN5vjkmdJhz2f",
  "key32": "4yy8jDSNsCSjdyAcskvjLC58FbHBGDQWyuayBysDc1izQfw2BwoVaX11P5uZ7xLNMKbSLV2YuRY1GtDGMuwDRxtb",
  "key33": "4qDdjutJYRDmFb9CdjjoZKyEEVK47HM1dYQxopHPyLDdZsTU8T5AAxqtWZUydCXdELzp8wW5PjD1dawjinXo1pgf",
  "key34": "UFmu5qf237GkA4kXMnu5kusJVjuTiJsqUGQsu29xXZr1c3ttpvVtXXUebbRumsRKBLhoztX6h9xWSo2bKZGfacC",
  "key35": "41mKbmqtXrvi1YUGhGYHfNnDGp8H24rVHL3vNJgs15YQnfUupt9fSVQEG5exkGswz4DENs1DFvRNrW1SDumpY28X",
  "key36": "oAeGtjzST3qaZHduJNWhaUPatC359NPX6WQHYRPiX1iXS2ESAjmfFWDvwHCcGRQhxZm25spFyvYGbKNc5u36mm1"
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
