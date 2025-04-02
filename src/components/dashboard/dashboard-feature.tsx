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
    "26qDb8CpiGx25bjzt5ZYSFoK7om4s2Tbfw8mTi5jp2hpyYABaukkJvjJkqb518LaNeVrh9FDDx3aJPeX7fzwnQSk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mx1Z4obJZEoVZ7dJ4czgrMac9qr5ra6aNvku8WfuUWfb8kXMy4ESMfG3pkZxcEAVksSAa2SZiCHBcZ9JnhssvB1",
  "key1": "3oNQsrzsZ7W5bnw4FzK5NPh117kPMPirjr777L5yn7aoK9t7zWkCmdpjyZw1gG13SgnyjUTaQrSCFikwfHkNKPiK",
  "key2": "2rHN2f8EtK8t2Y9iGbGfKUyMajU48X7LpUpUUwhPhz27amLMSBtEeBtkybHNah1aePn4rCG7Hf67K5H26xEWeTTM",
  "key3": "XJQG9XvLpF3CLq9N4mmfpVpdyAg8EdSAGrYpnNsNSxBnv52wQqm98izDwDiTxj4ZAfAFkwPMupgkdU8n6DPzv8v",
  "key4": "3m1x3aS3vYkN3nSJhXG43boYU9pmEujVtwJCapJ6DYqQ5rWepDkNzw6nRJn4Uop4RagH8oXQEqce3745X3hiZL3W",
  "key5": "5gvuTp2oVJKMyavenukHq25VXmtgJkwQ3JvtE34sChb5puPzqr9YRet2ogKH2v6wssM7iR4MM6nSi6bXoSgF5xa6",
  "key6": "5pmYHfkPPNcgfBFbb9TP6hrou2LazMjkx3HRyJBArfPioJqLQxweK4h5LzbjcBG7Dsm7Wd5TaekrWwy8ccEHEtxj",
  "key7": "63HivxrcdTao7nk4b1ByECmSHQHkADUojHU4HKN8kTGoELKJx6qBXv6N1gmJqucJ1Hh1miWEyModwZqKZGUS4kug",
  "key8": "U5WA6FxYR6WWD8j9WGSsq6LcdGzebCnK4uWXyeZ67pZ5EuVrj69em7hufA9KBUbQpKRTXfWiS52HFbUNWs28tvp",
  "key9": "4AL49QTcLv3tYmtqrsTfiiDsGUvNNV7McG8TCTWz2iTLJJNvZHypoxgpAG79EcN5FBgir2CQUz7m4vhwrW5BsfqN",
  "key10": "35XYibrtG6Jy84ugcCuQuctKE71VXVgWw7yazxRWqqzLo4Xw73ymVzN2YiFLpMTGgYEitaXVqPk6EbLTKh8jAmsT",
  "key11": "K1p8EmE3BFHYziHrfmwcqsGHhfmNDmbjD7XGet2AB6aqUoHSwaf24qTJGNQF8tDGkypTkBv4X6XuWbRXA1AyGU2",
  "key12": "3nj3Zg2MeJejMHQN8Zo3WsfL16fWh2qZirr8qp772En88CmVxgLgvbywbvovT5f2t7PMoKLFpHD3G7L9y3qpMTvN",
  "key13": "3s5znCfxhf2QT2HArgWQrmuY9oUxBpJMEhyKcLPRvZfL6icLjYqzEDZgiU997bbcMPrSiUSdZfGzHrWrHcURSEVt",
  "key14": "3NZqp9opBRWvwLEap7XcecoY17VTqS1GJASkmhXoCVYfpQNkZ8hvavSqqrQs3TEGAB5pRhm7jYja7o2vHkhXHDip",
  "key15": "AMg8i1B2GXJxKiy6sq91uMyWqU5jgUqWxuEpTmUFcfTTZDQtidXdDUUzm3YmngBtQK7F7D6ecegA3EiA5qVdUZU",
  "key16": "2XApP8dAX3uq9vGap99Y8r1egvKsHKhXjj7w2DzVGo8p3M3kizX47foKzKfcLvaC8xQLVHh4ksb1Mo5trGJR744P",
  "key17": "3fWCshVSThEb2gdkQBgiotVXkqbaztPkdLdcqWwUNCtMPofFVFyawUMDzS9TTcRWo14HNB7GcBE87c1brPMrT4ZP",
  "key18": "2UMuEKhvu9uh9S97wnHgEmneyCG4cJLbou3S7gr52tf4w4Gtbs8WNqx4rpuq43YjKpSFnYdz6NnPtgXVrBfwWKcR",
  "key19": "3bY3SZ56Hoctm123KPxgqrWzvfCoLhWtTzc2Vj5QXYtULEtxQBReWGAhhvHVeUNkdR9mavnJK9dwMJVHkER7RPFZ",
  "key20": "37YpwLgMmTTsb1SkSeAZmqQLZTCaB8LWBE3qc3CPy3qdqaS7HLYj8kk8UxW2NZYyPjfYGDXeL5JPav5oZwXyuxof",
  "key21": "4MoZebguv1FecWDc4LC2M74qcZ2wTKjPGBTMBHUi8J1GugLLqEXDMCkEmqLVYj39ffccFeUrq7Xg2wRVN2edw1Xn",
  "key22": "LZPGYQ7QKQZEN47dnDwJz2j58MX5UJzw7Vhj4TaNKFVKRmS4m5Qaw8snSKFJyUMeMNWuVysnorAtPDgv2gt87TU",
  "key23": "34yoRNGMAzEftM8PmQ2ecETFmw73cpQQTr2psL1qA3n2di6vr2fNjBAGvxQod72ztTnC1b8HK4HE2kdAQ8xnnTT1",
  "key24": "5cY2cQEJ1jdgh8c1a5Jfx9UY36yb4jzwXbxBC4e6GZMHLHpgVPsfK8yhs8eeZoTFxHpN9EuD3XPkFXi4p4sKhE97",
  "key25": "3FR3gLQJBuX5fWoWmzYcaqQT7LzV1JjCfZ2TPPFqqmhDsJaZBQrLwroKnzbWcc6G1gv4UAYFH8koJdTQec7YvYys",
  "key26": "2QdrsAHmZ53knMDhyFtriaSivcq3wrpFhRKTtGU3Hjt9hmWGyEg6xUDgKNVQcw817KXU9SFjLioV7XvajqkxKuzK",
  "key27": "5banrCGjrb5WWCUPsavNSui8HXZ7as4RzairvrfKgQhA4DWwWqmg12NMjdtjp96USPUXipwb6pkE7wefogv3gvVh",
  "key28": "BAVjRAKX7q3v4zfeKzDdTmadUGcQdPxkURVQp23kkq5MaqjAEKP94wqtDJBu2RHh3NDW5oxkhVC5cK1KKaAQ4hP"
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
