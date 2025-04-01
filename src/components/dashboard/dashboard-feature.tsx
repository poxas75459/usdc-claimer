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
    "4aPHucAPnNuwgATYaEYUKQR6b5LE67XZBM7AUEmdTvGB7ZKkSH2s4Upf1KfzGiY8EytMhAZXCFM2fPrygk2MDNtT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KpVCb6AMFcE9eJygxETrbU9HyWeMbiFgGWT5C17PQfCENvX7fizGusKh7sk594GJ6qU32EFSTG3wdPnZy4nMwyY",
  "key1": "5DMcFJQT43jFcv4mf5BeVCJBg2oGRB5GRzpJktWMCuHg3SXrd6tS9tANYa8VBxA9CEEUwVETRbPYYd8JUhmLWpj5",
  "key2": "2J5DKqsavgcxCfHCmjqzHfQJXk3j54XLSUE6xeHGbrMaNEpGaDhZYNde97KoC8WnYoDynDoL2azWk8jETHzZ82it",
  "key3": "66yEFfewvUFpVrkeT4MAKm5jBt8pgdds1XQ6LUmmthKehRGAVD3raoeuHGvMoTZYqgb4WcEWfNNiFHVC2qAwqaRk",
  "key4": "4CLo7N12iuUxENTRHqm32SqaQBNeqmEPsp2XUC5uo5WGsiQg3U3NAj7dm9AKFpHEyxVhSW2Y9MCPYfjQxbW3gvmd",
  "key5": "8zHsRzyyW5eHEP8di2iNwuBpwPnvoQQALcS3RaifuBGMKCTei6agWsDSyFPbdCfeiLdFCzGThaRLP67hz9eGNdY",
  "key6": "61Uc3PevbhrHvwjfGZr9Bg16RJ1KXj9yUJ1XACBXQiM68Z2ZnyfnNrAgjep6L7nofDsPFQwksmDiUc91wCNL5nio",
  "key7": "43uBDpRTFsoPa3wuUohouftLH8EEDNfR5TzfKRecGJ3MPEXriDnK69naepNPFhTMXxPzs8HCrQZ9pt6BYnjbdML2",
  "key8": "5jTLJbPCvTswAQVovXqXxLFAib1UuA7JXNdSQ2DRpSUUv3nZYqk6KaqTmVNoVvG9AixFnimEYjSF25PAXFYaXgYp",
  "key9": "6xVvhXMteYk4ubMyLMSQaohQjMRZbLS1okvdGjQ944UiQsL956ooPtA27H4ddyWCzTqMMG5V7xT4zzh6Yxxe31o",
  "key10": "4kA3zqEnQmykk6Ef18WA13VE4RURKqqdMXvFu72SATCaWe2sJSQQpn8kCZLJV1ibWWpPR9nxozhigVPngCDuoC9j",
  "key11": "4u1gpBEtF9DgfWDobHHgYbjzuBgaKMZd9Rpo9VdS3Cog9TPZ3SLx1W25SH5idrV1jojtpGML6mA4KHitxJbRQvmm",
  "key12": "49d99o5m9v2mfftx5SrnesxtTprZjKBk8uxWJsr3ss6rmTNE7yHGLtY4mGYXcaZueiqS5qgpagxJ66wi5dLdmvbp",
  "key13": "25tPh542LjUfr4oD1JKKzjZ78WznQu4g36wxZzqZ8LSELKk1V3nVMbJE3deGz4RrPVFfNcMeeiKZ7JQibuf2NC6Y",
  "key14": "5WyEZfPsSRgoQVLJNxz8saWQSRoNWemFUEXRPsGgRdJnSeM6kwVKjYcKhbUKGo4oemPm26x9fdwFS1xGvLPR6chi",
  "key15": "5HmgeyG4Bvgpmzv1kEdFdY2A5qoYhd9oCBtf8W63rADZfNYBvbve9KNpVHgwKDnFMHxfhoWc6mh82yAwWrEQqooZ",
  "key16": "4XSNKk4MzShcmzfizmfNHDvJdV21CAKha3K3QDGWVrY1kEhYes6sFChXGSHPJGaq3gcwysway2ELcWwNnjL2HSM4",
  "key17": "3Ya62U4j2BL2BWSn3DAUuVcpFwELKpCw4U9bLLHdwHGw9dRWb1BnUYyc4HLzABKV38kWyQhCdFkuuBg1woGc1116",
  "key18": "2xq1uYQKhhPwMqEiCnRDzEFSb3tG8hZPKpoVnDDCMZtdHqeMmKpDnLKTP4UUNBUQQgsTMH1gZpL7ty2RTQKvSFk8",
  "key19": "39MWhw9XnjPbqWEEZzgrXWLNq5paG57hiP5N2RLwu5H9QZrFHmGGRseDkhhJfXN3YxYrnkwsTcVKKSbQwrjsjKY4",
  "key20": "3jzXPx2HPJAjDvz5eMRb9e5yEgHYakpABmJGUNqwV5uqBxWA5L8wUTCxBJ4JDc3HAF85ep1SJrr8c2WY7y5HTTM",
  "key21": "7eVAP2gDateFRBToCXFt8kFpMj3hMjs93eJWQXHFXLUy7thiyBLVw1yJExNd2qJMEHZ1WhsxLoHB5Lfr6cW4T76",
  "key22": "AKigBpJo5vSNm9gqQizmwYB6K4xnvf9J7X7X5DoaBDsmQDGuNaCxKcmSoWTebyHZqi8PEybzHmctK7aTZvQf4K1",
  "key23": "3MfmV6yAd98HayYtjcJbi6eTyCxNaphkGUV7WTufqSGzuXUkkfiY4iY49a7wdbBe3Hg8cadvkNYda1NQ422hatf",
  "key24": "35r5M91PMmdNdugqdiDdVUSfBvAakdV9GmmiuNWTF27LbFfYy3y45WQdHFSReDUqYx89c86jc3ZVP3uWDsqaHjYT",
  "key25": "2V4BEKLuUCUSEUR7RGRuH7cqxH4Y9GMZhqnysLkpsUcHw4D7Dzs4HDrGundPj86FJmFuMvqtX2SKpdtazg9CSV8R",
  "key26": "4vaVUNP78YxHqEmym6YMK5ZpYjGD5jDChzto9dvR1LpMKr1246Pu8KNEFwkuQZvF7w8br3Hm1txrN1jcxtF73XY7",
  "key27": "4YebNnJMmDqL4F7ZPGpQeVCXFsLmK1j9q126hZorPse71Zi4WUacJc5tPp6Pv9R3S3qGXbJRtMYkfjkL2MwyX9WV",
  "key28": "4WZiMzjWbEgUmW9x825u3vhSi1QWVVwB23F7zrxnGJ9y1wM9zt2KgmPgy2Dwo3iS8VFs1EzsuU3TSgHG5KwGM4R6",
  "key29": "3D1xiMc3W7r54NnLi23T8AGz8v19LF8NJYjgqzRb46aqnEuRF7ZNQHCJyizWZ3EkWqLQRKAA5hBUUnTpZfH9cW9m",
  "key30": "4aF9CQkbr7GXA2jUd4TxMJwaTSP9NDHqKYNhHcze5gDPpR4rmdzo8euXwRVu4gwhfsX9ds4LuTJVJGL4nVTQ78Ut",
  "key31": "dAFvzguxffAgCPvZxrZsU7u5pLanANcBD4fbbkm89AGyHEiEDjyBiYQwLhSgtrkHGxMQaXeQJtAQYQzcNJoodFs",
  "key32": "46gdvLNFA6AG78U5gd8HR7Dyo4eN5hBrqxrXVqaHKfD3HRBso8fATT8UrqMh2vk8nd1rFcHsM3c8h4Kq74etrQfH",
  "key33": "56xve9kxHHaecUYxW6cP3RSG1RWMokFarpVfVFbBVJE22pZUD5ZXaPpjXJ9d1beNGNMpDNrCSaK9aQGEg9TkRNyu",
  "key34": "G47qjJxXoQxzk3SVL3QpbKTcisTNFME2rhTMub6VkF3oF8kEoCuEgniu6RxQ8jYm7b2LAHzpeXT8cxTDnT1Louu",
  "key35": "2V5u5ActkGkiHFQectQLb3non3kws4Q6T9UMZYCwVJyjZtwh25o5J5kFUpHBYwY2orHWETGsbqHgYtT41EymrpCx",
  "key36": "39LHFdYhWo87AivVqzg24quLuD2RXWcBfJyoNFEpZkXoZPeQAk1kYNonfzsszHsqdhmTN72qtm6ZQtNsG8khVXq7",
  "key37": "4iJmgwnqULAV99kBKc586DhgCkumwn4TY2zjZvfpzyg9iGtUuTFw39oshiutdU9Yqb6G4CUX7f9e2gKZDqLBHwYM",
  "key38": "1aTBoLKY5mPE7GSuieg79537ve5teYG1DZuFYgSdSJzkxLyF38hA6ipf4fXsaZHYymoVYzYd1e8y5c4DiM8MFTT",
  "key39": "2v3KK5MMumxxAHArCcXwxmjo3Fuf6NaPLSrvQvWkEs6Yf3fRWWQUnr3HkQiuX4ZsRYhQmjy3DAJMb8F286z1iedz",
  "key40": "43tF5L2CFo9HqQDV7rPbUYWL8XKEi3rUUwNuZdwTtgtFj6uRLTWwDwwF4qQCzKJ9TDjDMQYPahfU1dQas37dW1zS",
  "key41": "4auPXbqB7Hfo76HPDTuvXDJTNtRkhxsvV4gbWnbtVB5MmmXvFZy7SCuXx6478mABytAW9K6cM1g8oEfCanaGeB8N",
  "key42": "Q5Z4ZeQ8htcCb8KpLK3C8Nhbx2js7xEefUaV9FAibhvtvv8rWdt5EuY6LdA4FvBZVhZLyt3gedtavkUEDkyS3Dv",
  "key43": "55kPBUSD6c4w9EjYfUVf9oN6H9znptCnvzsTYunDBGRF7HA4fu1CfGM8aeLGE4CdEUafXiy6xpYKKfmoo7CJMGVq",
  "key44": "47UEk4CAD8o2naiBWzP8NWnkEqhHWghwAEqESFNLJeZ32rzkkPxmEYKUfX24qv2tHYGGd7cXo11n21VPCNm6Phg1",
  "key45": "3oVBK7LoH5v9j1Khtu9XfCRwQT373LfHMagQxCH7S2HNcWpLqEHvq74H9LqJ7RN797y1SacJjQZvqb124M76RgTA",
  "key46": "43fCVy5vm1odVZJ8TBPR9o63jqS7q7HNpc51d1yq3kqHHMs4fUj35g5EoRZL2xS66qcLPC7xXbAzRREBJmvS6qAn",
  "key47": "3zwjmCeqoXUiwMsEWfSCmSGKTp6CrR1kcuzFS7xb2De2GtLszk9bwiB1P84j3UMA8XyyrY5EjTu2vhnZ9JMfUorG",
  "key48": "SjmjT3PELJSSt48VRVWRyhRPRzQvLd3D75AJim3WELyk45ykVoTnXXyeAKxmztRsj2wXtssbzbyAFrkyxgPS2gR",
  "key49": "G2RqJRWd6CJ2MmghK9XE656dauZ1w1GViz7pNnhxQQTzw7zvidA1uvYgrdFMW9j8uzz5smgfSaft7J3qzmqt8rL"
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
