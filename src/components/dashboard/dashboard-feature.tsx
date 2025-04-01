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
    "3jcexNQxwd4TAn8YCtYVGRPwtz6kbR97gTdHBY6oQSFAQXYQHAM61Bg1tcbctnPZV9oHp9zL9L7NkhWJpsHjHT7n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pcqtaRi7y6rgMaf28cUwES8U6m2QFs6xXQ16FEtbNAEjmbCzhWPH8bckMEpAEYkCq13siom5jK6U6VG4y3BY3hn",
  "key1": "YPAUGczag9DhrpHeTa8sgmaFgx5wkqzHUC3z3eUyKkriModPifwYHMpgbgogEYjrhctaTt8qjqQgRwATSYkEg5F",
  "key2": "2teAMfgrdZSvm9uxkgheUowveSANeGFYMXT4HU576SzsvdGeT3eMSUKs1Y2D2SrpVjjkCSZ6UZuS1Z9jr26EAvUA",
  "key3": "W5QMtTQ8nMyghKyaSWF9oq3FD3xnLesCjVDD2zaZVbY5QE2jK1nFmZXsbUDvrxoC5ZzJ6c2vrU4tNJ6W7CAsV9H",
  "key4": "FjhfTsSVhpKy7kKnBjTSAFwYrKGFWLuJqd7b1BbP7bY5Jdd1o1FHFeB6KGsfQJ4PQKkMqBHXsJZpjQXYxBp79iS",
  "key5": "5zUKHwxXxomu5KgZtT61YN1WEr7HoUdZkUKVz3ZB16WM472EfAGfgKWQqGgTrA1EEQ6mY8NfSJXfwkvCnuQPRRmy",
  "key6": "4oUcBuwGxPue5kKXFBHPi4cDzsHPwPaMdYAB9GNRCLUeqaiJeL3Y7RhJ8bqHZ4qNeZaQfzibzWrtpiCtvX34XySX",
  "key7": "4NvhhvB7n26gpdaYrrN87taRzk2yYJFCNeE3yB84d9gFh8CFinGAfrmRS3vScjaZgi8t3CZj3fWmxMmCKw3WCVXZ",
  "key8": "3CvurkbmK963diobk9BS2QUUJWRn9vHf4e3k1UN436x6dsDbsaT6ggUyo6Y5LHh4zovL5eD6xEWrjqGWJ5TztoQE",
  "key9": "5uYaVnHCd3WEpXcQQyswYCxBUmZ3oBgioykwYqCsMXC72F8qu5E387gNS83QfxUWD8CssUuQeTjoDcV1Dc1DLAHE",
  "key10": "3dHuLcujJgCuLY5FspKqZpgucwBb1WVx1dEmzLYShEQmx6UuHJKPraS3cjhpfRooEfPeBxJDt5toZiqQmDjJdL1j",
  "key11": "24MgRywjHXEM6wgWCifPUYUogsWaFBmsAkN4tyLNVbPMDa3BzZTFcAViNXUQ2p6QgzY22R7RZrbfJjfA2BQie3JG",
  "key12": "3Ukttq8SfUgqnJh9KF6MpA3T1ryuhoMQ71JFcSswfZE3HVeRQdfwWNdAdsyHGTUhUbQQ2vuo3tMEZZzmx88i7dL1",
  "key13": "4UZbVNYMAZ137md6VdqRqS4djEVsKbrwVzF4VpEUYiRPoMrsFXBFj4b2hnzK3YoykaXRbnykAZF7EjubQmsZMoBK",
  "key14": "5gZd2171fn9rAwMzB2Vi2AJW1fciF3iK3aFbfj21XHumB2f1PKuf1ZM9o2mMMSJxoiGv7hokSXcN5axuM1Sg9tdY",
  "key15": "2w6egzNJD7YE86BMGdyhy4Qojm99DiesZjJJJWGhzZzW48vmMbg8zUuFAs7BNqGeq7hkWLTtLdhCq8XLNnNNu4zr",
  "key16": "2H4Dm91VVkLmEXAHR9gditU9aown5Aq1je3eXTYaHT75U42SZPqVjLzUqfUharxyiLhgrervuF76CXJfKjgHPJLr",
  "key17": "D4SpTaskhifzqc8SvnFBgkEAzcvjBSscKwSDPv8tGuJM8wGdJvRhB7D6KK8cgw12YjqiMXA938AcC7vXcDYxSYT",
  "key18": "3XKxEXbqVCwwaBxDt1BUVACmd5t2PtjE8MTQndjz7UBHH2eDajZuLuaFMyLNHP61wHc3TAZsB6zfb8GVUVjSwkta",
  "key19": "gtZQ69T3dZ4rF4NdkZdRfJeFMJEMd1ZtrsT6XXALUXmNDB6StPJzr6jQxnZKZvRyt7f1GL6RPGgp2DyJAjz6e23",
  "key20": "hpyBjEnSDnWPkns6aJhTNmex5R2nuFoRLZJjZZXcT1swcDrKBvEEisuHe9CydSF26TJg6roEXz95u7emrT9LJBy",
  "key21": "5BC5HCvDoT2rBvCV32QNV6eWwMB2ojTjG1wutmjuhXxNSo7qE8J4qYYRzbWdtU1fcYf6QqhBgmgg7JVYJzR4nvvu",
  "key22": "59dj4q15c81tjwmHB6pMAWwaXX4ymcVf1fTuqCWAt3jtgGFz4aeN6im3iXVeTUPTmpfz3AweftG378XGLad7VX1M",
  "key23": "572i1uE7cZcsN4s8vuj3UCVgFdPS7ZuTWR96UmRAdXtos7qgK78GbV3WJRWddQLNauzXuCokDtnvCZ97VwbzUQ9p",
  "key24": "38gpdQPSQQMCSKKFSYL6T2iYJahtx2UvWAk6Wv7QsqsqfQjDDEip3kNmB31Jj4QyMaing6qEJ3kJ7Th8T1Y3jM9Y",
  "key25": "4Dwm4tcSG83aRXFXY7raGN6sTFNs5eksuHWuSkciWQPbTjNaWXmE76Mj1E4rCsCybjDZaXt7CGbDcFYeyMbTADcz",
  "key26": "HYU6rfg7u3dfFiJFYPAp5WfHS9UhkgcooMitpyE5Svj1N1QQmDdD4tJBawPgj1w883Y8k2JSHn1Rtu3nL5WEog2",
  "key27": "22imGkRuVQqDMuENDzrYGcCT9K78fY5kzUw6zMe6qhE5nDnRQjaWcNcTFMciDMThgVjNSh3VsRejN35Y7rTcu8Xa",
  "key28": "4ywrGcWipPQ9ZCkWUMCKc3ngmmj8rCjqXKuf22biyBwsw5mNwgp9Pg8DxnsWAMq1PUtAzAwe9WZxCXScpcUqd3A",
  "key29": "RTrd8oKfJjF4nPN7xEAYFBzZD2i8pZ9Ysh16oL4ocBD6zj9Rb5Gwy3JDEvApbNECAjN1mFvUKHUsdcfugaVtzvU",
  "key30": "3kWaDwW1645ZzYT1ddAg7V8VL8KAG8d6L4PbBkxxfevK5WFx8FhAQXxe2rwi15hAM3YZduQKJ9tjNW5dRS4UXbmk",
  "key31": "4wMDSHpeTH3n4Cjg8HPwsB6Vh9YEaYs7B3Pm1WhJYb4K3M4Z3gXe56ev5qBi87muSB7iF84K64JWXEk63z5CCzy1",
  "key32": "4RFJxKZexCTTN2MjDT4H1xS4zBXeZAMFADRVss88Bf9PopLJSoi9bPzyvyYkoEaB8DkopyZxVi1167gC7SWjJ4fx",
  "key33": "3PtMRfVoM5MshaUDHyTE2k32Wo2yvnjFUGPVsx1aLsSVBiaVnsjPRgqEb5hGJ22chMs1CLGxJUteoFpzM9ZWbPUa",
  "key34": "MiCVtnCZzJ6KG1XSL93yKC4o9Q6HBSyzp9nDZKKwURhBR9EzinY5JQaDR1ej1boW5TCBJPoa55YL6uQGRoZt5hZ",
  "key35": "5j1ZKnnbZuxWgt18EnZbMgL18WWH1Bv9As3reoLZk6oZU3kECAF7S3fpbQTBrUNhMG2qitmANMXZqhxqciKt7yWP",
  "key36": "3AwP3M7GufoqZ7H6z58RqtFRKuRnNLaTR22sYC9VPgi9qYUCd1Tog1ngq8v52r3v4AeuyG5PvswBPZvmwAKVP3YX",
  "key37": "4GtR5xELRYbLWy25Jo4WabfH9ZrmoPbVHzP8ppjYTPy7V7rPB1FFkGvDzJHvf8duftMShakug2USedpjhZHLRYGM",
  "key38": "2ZtZCtgbRemL8r9eG67ZjN2krSWYZskKscyH9LQFxyrKynw7X6nMhPCdzqZkmFgcJvygvwvqTonUAAipZfoxt3Ma"
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
