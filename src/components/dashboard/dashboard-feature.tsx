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
    "5uMpYoxbqctoXPt8T84LgWcPMQuhfQ1MrWX1rDjtyp3VcuwJA6CYEKcL8vEYptLjiZjvJX9AjwrfwutqXkxkMgmE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sbKokYwPoHEF74DFRUaCry5RQSxs6qPTHp31akhydmYpXEiScTkGwRBsfmFmMUaDHv1KiCWxSo17XZ4rqL4VyQk",
  "key1": "52ZAgCXFGcfoZqkXDmXatepyQb6wDVKAW1tK38j3umadLdTmsMMsk6EZ35Q5Ucrevug3uCQr2ndAAVLcfiYamAKC",
  "key2": "4jGFE6uvvWjXfVBRuiHRVxDdvPMX9zugmdf9comPaaY3U45cDhJWxt2zJ19M6yayutX4J1CApWgbTNGRxwADdpn5",
  "key3": "3bM9qhMBu8Xr7xTdPGohgMhtteBWSbCVoPMuYq8FyinFu2Cer6DbpL4hBQwzL2agdRp2yPVdCe4BkziguU42JcBS",
  "key4": "4BEYMNTxTnsq3hjtBpVDNak2tUTs6DHwXDr3voZE2rLSAMKzcLUGKebfU63hA3KBnDaH2s3YFz9mGo5A7RFKecYD",
  "key5": "akoPWHsYqiLepknZXQHRn5kq1KLvFmTVuB3N1gGonupkxCZ63hVntwPaqQPXydj2TKgEmHaEkAd7AAEy1ubMTr1",
  "key6": "2rNzE2iXfUpFkmKeuFv4bGnwgL53EkDpdqVa8qBpEqDUDLU9sw6uE96DjmUFUbaLQbupbMgxBuh68QmGz3VwL8yY",
  "key7": "4BaPwqhyqHi64ZhWL1TEs2D9vqkeZVfzjVSKHyFk4CA4AAi661Pyv92QEs2inkqr5kDts5v1UxsGGpLYpUkvv22K",
  "key8": "39N4e7RAvbt3YcVx79c2ak7Sfj3QbZ9WW3gHY76DXqtt8R1ekweTFb7kuTmbgdZGfpZTVyvrV7UReQjYQjsDXdfS",
  "key9": "3krS9558ADkGZNB2QYJB6o5cmeT5sfXxbv7HxUQvzffwQ3QMK7pQsrewWk9ZXbwBni9mNvonpAatWcRMr7Gkekbp",
  "key10": "2FMnwFcPeziS4MtkTPTQMQRqpj4AS2yJyoUVaFSCXYGFvZEsWSyUe5YBsygKFoc7KFzaE5bmuteV6E6R49CAGmLM",
  "key11": "4BwKcy25Ve1J2D7JL3FQW3kAThvwDkuSk5ezrXJ6Gxayp9qNDeHWFnD76gBbdmQfr57iVFwxWqn8n7NS1qS4K19x",
  "key12": "2aBtpdyE8N4Gm9tUe2XkYnqmyCjss2Q81QYJhb9q2u9TQ1WPYhxXMnDC4HbdyZVjzF4o7HJwaHydCoPkQca7f5Dx",
  "key13": "4pxsDYgfDZsuSPGTd33tPwQATmJAgpg1tG3QKm8CJdggWiGR682ma36kg6PqvwowYFaxPsYZrtwrjV9J9682y8Ut",
  "key14": "3yNXHKmAVrPctfJ3ysD2B6PHsaR24G6QWh6oxNWk7P4iiBurSKYzNiJH9TgfVx8FrDTwEn8MWu2vbUXF38yGu2KE",
  "key15": "yDFv4EtmVAUzPj15grnHnYcJvGiGXqFWaCPXw4RxH4otSyaoUhVymByrMEdBADSjL2J6ipv6a3oyZwoWTB6Cir8",
  "key16": "787kSew4aM7xHH4DBvnhvKmXTCNLiWb9GeL1gDsJnhsN1nzNxoaxaZcC7WLEPsCjJuyTgdBpmVgQQpuisgMBwDx",
  "key17": "5VcuHtTFTxpUieDi1kBo8dAgaGZyXFNmw28xny3TJ7V7Ec1cF1TaxGrCR5wKX9fQ1PYFtwtkzq36E4Xb2QiwX7b6",
  "key18": "38wEcry4eWmiDoBMLyAqsEcFCUNrd9DVTvMwLSnfxbaLqstBYwJM35TMb5rUk22G86pYfVuTC5vkXQSDjTNejfo7",
  "key19": "32L5GbtfJiWYRafebQd7L7Q1euQwmVkmkey4mK3FC3ATBChYJR1EYWcmYNvBFVDsPx6ExG6bnV3ZTDbgE8tyt886",
  "key20": "5Kdh2REsGGQhQsDXFy5RnE5zVZQxx53rv2AANShaELL7gDn7mQoVd282D1paWf4AdZeQfL7LpGngPfLfguY3JwMi",
  "key21": "262VnCuvBQp8FrEzYtCpZVvmAmoTPfYNzBoRtTHkW11aWm23qx1yFjVYApzFPGZiwcSEEkdHt6HHw76t1SjqaKSh",
  "key22": "9UQ14YYHLca9srvqhAHGVMsq1hqXZv6x17jEW5JKZAiUpYbVqYyj5guZn1EyQyigtykB5r58mmAgjP6R9QsQviU",
  "key23": "2CFYNZBHWSvKxbXTR3f9AK3fPxrZaZUWjYLBcs5HXX29tyZpgQqEvb5NEcvRQiujJH1aQwgGmBWLkF4FTSM8Xgic",
  "key24": "45ftciMeHkmzdmtTEgBDGGjdz3eWHpudM6z132bQkkrP7tmXWFx65npZKJC4Br5bmUBRPmVKiqh7pJzTn2RE4fuF",
  "key25": "bGVPZb6GqMzkF2KgcibhfGW4Mdqr25Nw2QMPe2aUgA4JcpjL7zGGo1KE4L9v9hP6ciMJ8e6Q1a1Ade3RBCLFnK8",
  "key26": "2xXbcXwkfCwv7XBgNdSkyG2wgzVWtjVBfi5LUX44gbL6zhYAbvC7BQfzLjubfRgRtYjUP618V83TR4CHebP3tpwX",
  "key27": "3xSMpffgChS1UjuNcao2SLXCZzyZ8BbzJJuhQBkNmntbDH1qCBNd8YE2scrScfZQRZcL3NyX561ds2bMLd44zekg",
  "key28": "4YY3U2aqCEHGNApU8XK2JLHvadxGjyY4GzfuB2HjZ6nnGBknYa3TcURrKFQW8uAZRjK2cnmXR5EPhhnf5DwRWB7e",
  "key29": "746XDzyZ7PnUwbWPBTZCbmK3w5w8QXf3xudMRVRb9xhb8ZkBChCviweqSyDACyDUQyv7xCZDXyDVYrAxCo3ewgV",
  "key30": "4p6FiGDXkuXvEiisaVfHBBPMKNKTWt517zbipjN51BV3Bpz3PDxsaqa1bBHxfi7P5k1ie45QM2yQWrzLMm4QKrLr",
  "key31": "3uYkJtHH1H53aNFB1Gj2MfH9TJ8UNZCi9K4y3hfF3UWtCSRp2UHyNhkuXAQ9RhJg35zd3xYezNqep5ZfeG89Xwko",
  "key32": "2LTaztAzomswwteUXoRM2rmfSyBu1wDi1Xd2vwZcq2umD6zySecY9P7pYDUtvbzwHwNc6ktpjENiJ3szMLnrFgC3",
  "key33": "2vbGLtLHBzxUg4kosdL5HmKeq7t3A3aQgcUS6WN42aDZ1gDKHGmdVV7bm6oPGeaCvxUZ2m23eTD3uD4ZcXBF126H",
  "key34": "yb6R8xLnhZ4x3y3wgk8dqvGSN1DX6bT95B68F8RYDpx692PuALZrekQCkaQnQeS2pxpoSiQhNTNs5L6svTKiAbf",
  "key35": "2cx64g81FLCNtJUCHyEy4CcXpu8qgQqus9kre4SV5N8wAvTAHXbTRaDf1ngaKghwDbzY2qCfMHataRRwR45VvLXz",
  "key36": "5Z2zUrWQXyfdtzMpBVGp5PWQtc1XpR1oZ8AAkxRwzXwtNZtq9qESDrsgSALHSnt9vBkMcXqNdyLTi3arZxjxqPrR",
  "key37": "3dC4eohFwPjq3PQRHf3XBTaas34FSafWgMKLkXCgHrqVQHaJ4NViyfD1TRNXeWnEenS6SDuvGcdXvAE7hsFvLYwv",
  "key38": "KkCEtmcXSRD8v9GTDr5nXGZKFCz4Y8w6Nc3HLXVi2JcFfkLfNEu6FXfGJjWxk5F49cdgzRmZVsZ74T3sDmUtSZB",
  "key39": "3UkKKiJvgo45g1hUXA4FSCvbacxDDJkbmQENEAw23qxSddsuqwseuoQDX9q1cLNEJEojyqMVviCcMp2a1xGLpDBN",
  "key40": "wL3m7Z3ffu3NwjmRWB1hwDxXymd5m1zgKnM5CndSkhnYdRc8tCK7XJQddHKVuRhZTqvX8qCZiWvw5NQkJfqCY6Z",
  "key41": "794JDzMYT2xghgZBgDhV3Hvw8ojFG5AwuBpbVbnbYsrCb83DXUbRcZcAKpjkhvzkgArtxNdanEYLwKc9KvxBNN8",
  "key42": "3WhiQhGX2cuutkDJBigWvUuWCG9zYLv7MGim5bGqvSi63B8iQjkLVvzmgTCuEk1928pJ5Q113A7fA1N5Rv1qZkmA",
  "key43": "UafRqkgNx9Hda5KQ6kEZ8sr7mYafZMhmY1ENTFQq4dLp1SyVJJUec9LraeVLCaz2zVnQtzQMApR9nmKRuUpYzG3",
  "key44": "SsF3CHrJP2isjPMHdQmg1M8qurNKbozCU98HZs2WJJn8L1SpBuhWqhpYwUjRZScRZx8fDmfvaeMhXqP2FGrgAKk",
  "key45": "31BCwYGiB7bhZ3VzgGn9opUuBfqaZ3ShStwg99rWkbbZt4uqdXKf1Cqxmt4G97PES9X9MPjxgNHfogJ4pkgdKiQA",
  "key46": "65DuENddVxKBCk18zxEEqT9HfPryGHJzEF55wn1m57kMeSxYuCwTzDMAWvYV3aRTy9nh5r4xfamrFJShmCYVuCGs",
  "key47": "4exH7d4P5Sf4DeXZoPkWALQh8bfAJSYLmpy4ZJ8SmMH6q47ypYJ99TAvfLLzRT9HsfSRQG3MfvDYoJRQmdZkMQZi",
  "key48": "VTZQS6x9NgbkU6Rt5BDCg3weiGwhAebsXHC8n7LdqYhYtVkLXdXBq4JypTs6DhK8rrXrmSsKf5mimMeWCZQVCG1"
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
