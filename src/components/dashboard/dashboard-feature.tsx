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
    "57tqRfKjPShbjXf1RfZ598unMZa4qBqEf5xwoahVGcr9E9SnxP7ZwanSE5qTqWgF1RPpVwHLQ25vJvaGGFQKNxWt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Xux3UP8jj7PZve78rmnkKZL3QoMtUYg4if7qd97fZbYqdkNdDYtHDazd7gN3gwpn75GcqtgrMV3gp9EuSRjRXig",
  "key1": "2eeBarJjEHknsR4HSssLr5sKDH5GYb9UiJ77n2sSuj2GqUZ2zNDn3j2cehuUKar81ZQdxWhmhCEyUvnEtACyuY6W",
  "key2": "3AC85FaXx9HXsyxxhrMPn7aozVXA82RwJFGW78pRwWE34aAizGX52EVDk3jA1uHQ6uYowThDbFR6mT7wtmAUuK7g",
  "key3": "2s81WXb5FLR7v1m42SWkceozjAZyHbuXj6je5SGpoy1WMuFsEaMYtfDQAY65Dc4Nxx64MXyMjA2sUyiq69EwcxAB",
  "key4": "2yRbYY5c326Z1Zm3buV68EcuNL45uSSXs8o5BKxcznK2oMfARcFmvgDgg89KHWd1bGx3Yy2zkbmgS94kLWZkk5VS",
  "key5": "KxUCMssii5H8ZV6JBr4KXVHVDCG5SmNEBWT3MSsooyHX3vgNLW89cPJALDXEPLhnWj5e4yTvGvFbg2KUe4P7WkM",
  "key6": "4dyfGpAQqWhq6Cewc9WUCUjFu8k66XBzK14h2k6pxkqZ414iTmg4TzVJxhB6GXWb5cmiev7bDLbykB5vouLkFhQ",
  "key7": "4XnjtYQ8XKUdtT8bu6uqd1Hp6j6fZJxZAavejD6Xu2j5rTmQgvGb7e48xKU5PESZTtDZ6UZdSKuMVDhn5j7X6TqD",
  "key8": "45fQKJqzknbqCVJiUCSC2XQqMGKb5Cmp1ZLk8gtK2Cg2JKfTzMzH6xNfShyjCGUaBx1YYeSkigaavM66vnBaBUeo",
  "key9": "4EXE8XZsQKeZQhHFD3M4UYRXTnejwJcGztEciNiGqjTzjhYxqHvv9Zx97YmowYwThu6B4QL5xTTtgrPbwng1EgPg",
  "key10": "3bXnnjKtA9YAHoYUsDsuyh9acNGvvijdGFChne3qcsRVDWst7AfavsTy4aMGHWeL5r4y5U4uQ24D1DHDvjbjxCky",
  "key11": "5JLXkHzgzDfXqvNgndUGXrYzpXziL2dL3vHZ7FLmRiC9mszuYqtgx4zVP5fwUcc8vjzAECDwZdfv6qXnuWjhP18K",
  "key12": "3L9yo6y4ZvBLzAZqZQciTms3hAyjM4wHHwzgL6WGiAciZwa8MN4ZvPdCfG3H2T6cdBMAxX9nF2dv4dAcZ5jHDVg9",
  "key13": "3t781wKrL31aXwugKZSjnRpjDVJf1BbqS4GtLiUEhQbWDm1iMC5GNMzKNyoZ3W5zCBRVoTGPMQPeDtirAG6gqy6y",
  "key14": "4gYZRKk7SKm2Dzu37KamxGeSjjsu7RGU4pnc8wTMip75UmTnjxy8yyuh4qESJbVGZh5FJSHCuZKrsafGNxsGTXVK",
  "key15": "4zwLygmLzZ3pMLo3G2t8v7y3CHoiXcwP63dzakTw1SL6L2jSa9BP5vJTcDRx1pMGRT94CTEFWkfHtqBK58svkbUA",
  "key16": "28zKHeogSWdBZHgChvC3ATb3eFGNkNndfKvuCSdwSydgmoCcJmRjVNDfFCbC8ZsWhXnYLbb7Vp3J26tpLhThjYtj",
  "key17": "4TVenMvm6sr1L4gvoaZkecDRxKkHjw5ce2B3p4RdMtPy78WmhniEZBVstMKNYoMyNxCUucQRBLYEfbPtgTFoLzTa",
  "key18": "2cKQRw6k8ngpuoMDJuMrAJFhVv78KHrPiFTccEjhPJG7wZkE2Engc24fVKYYNRGjen2ZxJmfk8Uq5f9UiTAncxm",
  "key19": "CZPw44gygQAKFGS5HiBG35A49TG5wsHWD9mG5VCrGT3Ez7epDiyeTEP2mSvJasonTALjWJ9h4AhTriWMn7Vjjmg",
  "key20": "oqwWwzdz4Gw4dSoyg5d41cvwdVLRRipYWtt2p7zjSNR629PJ3LgvTujCJeJM3VpA6i8gDJcisPrJ6vV3E6wtBmi",
  "key21": "2MxRcmJmQ1VXMDuosmiCmghoUnktjd7j88YPN77BzrxskH3zLWWaGoecJTARsdaD1KXGLv22itPARKLkwB5wMmis",
  "key22": "vHSdnLAQYUz2bBiDD9bUaZpHbsqvGCYVV3Chyt5gCJBiKVT4twHHRAzjmVSZDjoh7twn4KmqfsFS3WFwA8DzhRH",
  "key23": "5chDt5dbSsseNoKYknsysXii4Lfq6hMidmVzj3B5Vcrb89B49xXniAUW1stmkoqKNixCwfK9kda6Uz9q8N5ceexn",
  "key24": "3BPiwybGLuBFdfnPHJrqqQR1Cw9LR2uF4b3WRkKe1mkPaNu1kiFp4FBqpAobHte6aMs7kPwsp1k7chCGhr3pzCCH",
  "key25": "48yJbqs6K23gMcAtGUmbQaj5m5RvHZLg7puX4NARyLpTv1R7xMPEHH4m6YP4wpzq6YUcA99CQAsPLA6SZTfzFeGA",
  "key26": "4iznq5hEGpCfYAeyoUWojGaK4MqPE3cBQ56bbvbdX4vpHQUDhoyetrV7HDxdSZkikPgLvBry7ntzme4D3BnAZ7Dg",
  "key27": "2icjZ2Y6zamH5EpvGDqUQ91pww6CTfkFvM2keQEJUC3ttddmxt3vu4UWLG43JJiytkA8L7D4gTEVaEHUX6ZnTxjm",
  "key28": "XaBQHWqHuZtt7RgKeQynDnkjbq7zNyYzAfwEpFDFrsG7SakayZc5hTVARGfRu9eK4cajxBWo9SjsDyjqKpKj4Ga",
  "key29": "4hoWus5AgmMcMxXcLARCrYDnt57gQq1SeYZ5eb3PEmbHFsL5oNXNqAQyf33iRkAemd2Wn8zYrFuGTedT4ByqLcB",
  "key30": "4VaGq3S65kchELJjwWYUZEuGdXzAJwm4yT7X5MqxrzzfjDUtu3s6Da4hM1hUckygLweA5iELQ4aMCad6nughqGkC",
  "key31": "4JmHkKgVzHKA9aMRyc4rwTFdXpQZ5Lnw8XzLoG9Krpd1pcZ2KNVSgivuxMWwRXyaxxWWiD8Dg4u9ypCHPCmuSwrP",
  "key32": "TU3TKbK93rFo6ZFZdntHVjZo7DjyQmb6UWTJWRjoX3CVmSjRtacRXgo9KpUcJAHPA59zhxhJXJA333zLWiFDVaJ",
  "key33": "3G3B2M2qKv46mXdAL7NAjBVnRd7wmAEcRD91w2UzDu6EVJorcBN2Sr3mbBbSZYEtFtBTe1pVzhPSAPTm4mFHpPwn",
  "key34": "31sthzHcjyLcvNm4UbCLpCdnSafLbj2PGBjpX78MAfczxRtAriGpa9iU27XsUqSzr4XStkFi4pyNK55apH4dKfqj",
  "key35": "5XiwRdwyXPtFNmgpZwa7vqaKv2jvqXJxvXJLHmV9RNYSjQPgAM3MF9jtLtDwCDciyPKS927GiZ6YPqciBQSZAPUC",
  "key36": "49c6tqjpbdRjT6eYqfK9JUmMhbNhNmhcqtvT7hUipthKc37rUXeg8vsfsVLhHFQ33XhzjWxgtcw3J5sxdSxMnhVE",
  "key37": "4X2LtntnFTEvuBH9AJhPSqf3QSmpAUuSjX5tV7E3Aht77QaRG8U4cRPDUVSSBwQi9KLi6EG1yZgo5ynK7tSidtLP",
  "key38": "37ZUbiSZZNV4bAvRFYSfdV1Xgnp6weWqFZ3qaSbWwuTQih6153XDFrgCoC3jmxmNpeo3DhHZXtzVr4CmLSnkqRJn",
  "key39": "4WtzZ4oNHESBbCVEVfPrBn9a2k7ZwFtQX3sNQJooGMt4VnrLDpoSJbgzSFmqVA5tASTTYiK1D9uhZZnRxJBjbjA3",
  "key40": "5npaRHtTAucttaDY3BmUAxX2x6BDSNP2VeVEKkY8yV9t1GT51XYNELnNCCQyBhbi1pRyMGukEGjV6jgjwULiNfop",
  "key41": "4tEbjDVYEbnoMb9WHHybE5WPSSLJAr1askaboyw51qMhT7zrYZcdEZSfR15skhZmrXgu4jZ4WBozdouvqhWwDc6w",
  "key42": "3CzqtQQ3WTMu2nigGwSmL9RqVUtREXbQDHYiKTuu7mGUvSwDwHxxLPkRweeB8Y3XQa5soXQDiHnF4t7YhQ6xdxEk",
  "key43": "2FMxNPRRVYrguPZj1a29zp1SfQfyxdtUoS4ye14g3KkSnA35WYaDnRp42pjaYAmvqCPtJUiThdKCWqJQtf4JPmgm",
  "key44": "48FQ7vJn1GNrRTS3Wuk6tbVm9FtpM3p8k9XGJ552adcHwsHzrvhEhif2LHtQxnCbJQjAqwPa9fdmEeqfJU3svUZc",
  "key45": "2gocx6oSsGV2x9C25DMfkyfmkHrW1pDAPcNkv5ume65TwBxMxHZHs2m4tABYgPYKb1v6QAR9EBTLVzySi7Q4yYYb",
  "key46": "4sbeAXNNhZ5o66HdHR51cbftbj4hEyvA8pnDu1QAS31Vp6xuVV5dLs9tZ5zN9Hoje1Sk7t54JiGek8Ud8aMmjYmv",
  "key47": "4hrVvkW6Bhczk4hGK4NBAuQDQe42vLyTXS3HohGcC7APgnTBxqbss1hJ8pimXBjZUuShmHzNWGi8CYShb13fQgp",
  "key48": "pdqPHVnQhGdx7KWw5wV6TWXQauvhZFtYxAyE7HPMFN76Bq96xngSHF1Ys6KuJh4j9sDzwxHHrWM2rq6ckS7gPeM",
  "key49": "2UFsiet6gCpZ3445C4jYtcKktDksRmt15zeXav4TdBmN2t2A8YK4ZDfeHLo4gDZtWx2SEoUeSk2ibHkxqZEFhvkp"
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
