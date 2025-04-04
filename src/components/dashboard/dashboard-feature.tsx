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
    "hufE8J9poYiN5CTWnrkTUXanVmw93AqEghgbXoBU2H9EXUt5vZCt562pNAruyb4e8i2X7xnVB1yJdSkYeG649bz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hVCDu3s7qbuSEN6cxvey4xzjA7azZKDfu2oZbiDm2KNvGGbDSRpTphG79e7Ydxx9ZhSaC4dUowHgRihdGWyTF41",
  "key1": "SmH7xKM5y2dRgCjnUGqQRqSm596YgdkKqBZZ5epbsc36BPFnLcXWTeADDkzo39KVfDgPQXnXef3pUj2mgn4xvbV",
  "key2": "4HsZaTkMWz3nXVNyJTF8URRGHjtjTXuBcSvN5o2EebtKy1aj9jJHuZ7rewAyGdCqvMMybsicMarDiUV1EyBAXUet",
  "key3": "4ae16JtTjJnAqiuXA1bbLaWkR5Cevzz8SEof9RJNMe7LhzibrToHusKnk9KzwMxRgsF5e8sAensVc8eiqrwmV8v7",
  "key4": "vUdpB1YwAu16oLqCYyk4JzwKnMuSB5DxRCJFUKbMeNPSDQ1UyBPyo1VGz2phSvxtNuwhPGLzjuL8HQJe7NiKpqF",
  "key5": "4U6LSmhFx3DsBDLU6L183xaz6sHKzGmtaAb53LzLwUQHBr3rMpqMMvAgAN6bvxtbB2SmyZ4n376Wgk4qgBLErJD9",
  "key6": "2kkg5iNcM2QXFkXbyKzUpcdh67ub7DGK3ANdBumn7MpgRfAtanmHXppdLy8gReEpGNboiTRqXEYhHJoajjuMBpKN",
  "key7": "ezDPhiMqj7BavKECjXhKZs4zPCgFTkR5d8ECeeg5yiBFcXYsjecZv4rZcKrk5tAMxzFDqixJY6MWG91CdudWRgx",
  "key8": "nkRZqUxoybpJSYZ5ThJutccAWghrNdczQn7cBkSTdxwn2fajG4aq9rXr3Aak4CC1jAxt8ZL9ecmGQrYWty3qRTB",
  "key9": "3VekYroFc58hh8YPuRtfozcUFp3tL9Kicg78CFzEdUhSGhXZW46Up9gwgD1CiBE8GN4jR91V2ttRaGPeojrwCr9J",
  "key10": "3sXUymEKcTjD8dc7sMzv6MgtwnyL6txdRo5M3YS6Lvbzy7VPH8BRMiGWAbzrun4ceUUPTKLgnyMFv4uXH9z7zxqX",
  "key11": "r2WpNQTX5VhqWBDSizTEj3aVWmaukjhNhzmxK3sV6ketJg6yb5e2zLqHBD58VGZjvTKm7JKYWRD1R4Hd6x2K5Ff",
  "key12": "5Yei8swsS3WkJTKx3dgx2xYoFN1rL3gryHZZ3u8jnUbQ118ew41qNm758R632iSEuaWWKjQw99VC1F8A9Pfn3A1b",
  "key13": "3j8KdejtbhTt9th6e7URiYpkqLDKTSakpFkWV77fmxfNHfc9gaMGojycni185GBHDjYNVT8gCRnJvoDtm4uMHRw3",
  "key14": "2pU6di7gypGPKoMNpTTjY9nTphQ73A3DEvbifpFSVU9YN6A2NptdxuXBmb3YGXQEU3KvzZva29AkZdU5MduJKFNw",
  "key15": "2H95W3nb5VrGcz9y2apWxY8Da5bg9kR49m439SHZ4P6D2mrJ4f2rikLwYBLFY9kpVFgAReHCCA7hJYbBDcqT6fXp",
  "key16": "7J2ZJx9cyTNJ6steHfMVRP3vb1zH6Pg5kwKz5Swq5DvLounGZQsTcAM8ZWaYWYViJ8PP1Qc5g8UdjYrXejyWYms",
  "key17": "3gtAvvzE2thHZoYXJwdX1PnTP6XMxsy9mBShKmvC2kdtm2vZJLUFqJvs7bAML4nBQdbGwuKHvKS3KpvfzGKvDDQB",
  "key18": "3RpPCrW36thSBaFduBXFhGZGpTdTfQSMZyGFt5xsccWv8LL6ymZ8UTo1SANZCZx2WHP2FnqPhydLjm8tUCDqxhVX",
  "key19": "5NFMZN3uWi2X2XPHozAJR5kuoXfZmytbgb9ZDFUTm6EpgLQqiU1wHBwXtBsAXbfjpGohp8nmbtonQAom6ssza8qp",
  "key20": "2PWo3dxbnLCoG7CdUFetnNp3ykWvDPWjb3opiTtrHtKVVwJDdS77XXFtHKnR9JrxkNtSuCHaUJSQhQ8KZV4vXA5s",
  "key21": "2ee7GBsZRKD43urf1giYhN9fEnGkgrbVrnLzkGT8iQA3dTe2LEySGgjuhyAUM47iLDnNAGMyLAYjajCaRWaYRM9v",
  "key22": "4Q8amaXztg6695xH6S92FNuVf97jU794my7vbt7BwcxmUrg9zCs17FAmF7DRw6pD3PBDttJK8BR3DfG5MVDGXrPA",
  "key23": "25Gu2uiC78MYrC4iJVDPDNzEBS9W4QsGjMLmEY1nBssywiw5DYFBiy5Y7FCktcCamcDXsRP2YjrWH1suvKR1Co92",
  "key24": "4uo2HxQosNB9S5x9kRDw1L9cUh2xFaut5goS3Cs6airMPnZpCuJmXKoMntS9nyFSfyB2hTLXdmJwL3W4MdvH6KVG",
  "key25": "BpmwkCprsLYhXiEfkLK5vejujKeHygryU9WCefL5QbHyQfjPwdF8NLpm98rCUbYT2k5VMTvmpF8jAhp4TNaQz9L",
  "key26": "2w7YYG3jAjs7FtBQUGtLA8Q3TsA8fCJNgPGasYESmqU5M7h963JbsEv213oszVxvGjT99EFK1h4CmYi93Zm13gyj",
  "key27": "4Ngh31NE4yVom7x7mDWxfkihwwGCrixhNsfoGowY6xEQZZP1vwkpmp55mUYqbWayn3gxdUw2r8kkgyQkaURsT12f",
  "key28": "5AejbQkTW1Asqa2SeXQWfzqTws9MLW4Fao6bK9dX8f32VB3RjJMYDnRLZqJLZADMzrQ7D1cdCoHpid5QfyMQmx9Q"
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
