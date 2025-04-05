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
    "56WH6QpR4cpk5TCxaXxy8v52H7A5sG8RTVvokfhwm9vpTgJd7Zc15x96e9rwpUeEN8a9Q2ifpd7dfSfwehAKEg5k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21fs2E2HQfFpxP9Xo6qSr1x3UEVTU2Th13U4dV1bJPU7Fd6PUGPoGmePPubUdhjj5H3LnPwdU9Uxz6UpDViwj4ew",
  "key1": "2mkwnFizY7uanHNThN8BTreTbC92DreLDDRYqF62xQpr416H1Xb3PNXrt72spDWCWgBwEg25LzzsNJ33kUrRWX1z",
  "key2": "35m45gbFyfKduJRqBHcC25MQ3JQDUaNYxuFHFWkyr7h9ASyBWLfzh3pE7iqq6MZCtetWUv5pYwrywWeztvJUJQBu",
  "key3": "48nxxpk6aSUCnBjc7AoZLwB9u3CMkJDAE7Kgigpmmqr9FhipzFYchWq4coP2MGuA89CwcubnU4iPkcdZt8Lq1i5H",
  "key4": "WxTDkfUrVoBtnF4Ckeq2Q7zhzqj3UYaF6cyjKD9wJHu2GZUu69Q8o4rHJprvq5iHouFMFPZR9oWH2g7us7FYgfN",
  "key5": "5S5o9eYrFHbrjsLq5y67zsW3y8zyvHrt1XrKmBRYT7qoRgzZmMEX9nQRi4ryFqv8TvQGspjybjdLcd8RuCSqvs3Y",
  "key6": "4P2kUaZsjEnUBAaJ7bXkq7DMwVAvksqvoPJjMHuz4bKotHa1FoiAKztCNtboZXpTtXyw38tbncADNpt2wjDSxxYP",
  "key7": "4itkbdfnwn2aGcQ3gELZtiX4Ew4jA6zcB8MMtQSSJPZPtDeZFajkDhZDjYv3jkLA3WFkW8qH1p3fPqfPNpG5jSGj",
  "key8": "5EdYpxr2HXcqAeXRP3y2JDyVFropVSNnXKA1Ecc9NEz4q7pEPYoTSMZkU82QaDzhDJ6cBXTGN8k9sWJQV9fxUDRs",
  "key9": "bKWG5BQaiBfHQ6N13jyhYxiv23JzQ1rMqoUjaicTtN8Rd41FXDDeGfRSgwnsAkgBM2CUKBD5z7rpyWCWQSh89rv",
  "key10": "2GHhsqwux55gQP2NmE8kaghSKnjQE28dsDUTUMgUfitJkdH4BCbHRuYkqUoi86hFXswCEgfZ4XC3wh1nCVRgyhez",
  "key11": "2bA83mYnbZcaWvt6AcF4Htut9jRnMbz7fs5wXR2jLubybxf48xqWSsaa4zfsndWpTECHLjyb9D4W9S2FgtVdzarr",
  "key12": "2qH5swBJgNPJHK9XK93tWiauBevUS57fHYjUJJSxpFakmcWD87iuxg9Gcq7JWBXReppLTdmK2u1NUiTZRHUgUQWM",
  "key13": "3v8XvfQzi1JTxiyFoLu1GtcPHfpWNKYgevApcCkiUuDMQnP4FVnk4R39okCq6vBicAnhGWtAtMN8zqnB7eWtxV2n",
  "key14": "2owdgDHYJgrpKkYX9bwFmFMW8yDpznmxhKeDzVfsbXj4Lvh4zr7eGcZCU1fwSzxzEKm7PJEEbPD8oittxtrJzqFd",
  "key15": "4ECAeC9DchiotWFeW2sTTMebZyFuBT41qyXLfjdjW5Wsy7zRQBbUg3PnFtMRKHTReqCY1t9ZS635b6zFBhiKvN1S",
  "key16": "pAPXDsZbpegNFG9M23GRJErG5U63UNuTZD5cGhNUV8JXUrfkvumFCXDKXmU4pJNfzpszga9iKt9Efy1ienCCFcN",
  "key17": "4wzqoDqMkaU1QUu6M1sLFnP4tHfTYnFbehEL6UqU2M56dKCskxrv43LNESfWkCPpKc1R1DgRxSpjxa7H1m6htm7g",
  "key18": "3QFu4TdkTXroq7JjrT6baiu7AF5ryXo8PMyT6LW9hGkkbJ2bAw6CTqG7wTefd19E2M3JFZzru6GjyPwmbyhFHJQv",
  "key19": "5ePUkyNWfM37kHCRP5VGUFgrvScvcnfcLaAT8VkfmpuNZcHkGKCViCmyKgsAa2YXHiEgcpumw8TqtsZ2ugWz6CH6",
  "key20": "3hCWuYHMbL4FgKT3dFErrc36aLfEwq2R6R6Ht1m4b8owPzxq7ZhLmy3f8Je1dpaydFMjpdeqM6RtxKu4CGjE4eom",
  "key21": "3Xb5weSH1zRQND6Xu2xwpkecGcg1N1z15Y9huYqsxE5p5KEasJH1CgYYdK4jfyXXuTBaMPwAuwNQtZH4WbvyZCEk",
  "key22": "5wx2d3f8tnasUB7drGKoM53vR1411gpVCVZ85ec735m1Efh9LUiZG6dyrfeA3u6zWnPAMbWSYRQyYDz3ad5XKvM",
  "key23": "2eyAzyN3R8Diifw71Q8111kVbpuRPVxroJGiwH7jZkb1uLdnxdRKbMGmvyVmUW1KNz8j2ppK29rQvLHA8p8zi1r2",
  "key24": "rKu6m8aVsrSDt6GmZWJG7itzhzjruLe5P8n9scUJjyzGs1pmpuEzwEzgfR6Kt7ZCEZiZxjaFCdAiXyYncBcwV3M",
  "key25": "66nxgXQJtgiLFkKr7rcppncoPC8EUJgthzTiMd29QwunFNb3BCyf3CJJ3STNqimLGPeU1CCE5uqVZ2Z9dMR8PqqU",
  "key26": "2fb8xztVYmaRRCyPnxL1mGGqiFz3VvLXXWowAJQc87V6Z8ZK4qJ2pZbTvEfo3HcHDzXeGsUZtXb6D4DTsc6F2HCS",
  "key27": "28AN2rVwcvsTvqixdrN81ibUixcStJW9W9uKSLZzTVVhVfp6Br1joH1EHjBnbJ2Z6Fiy3KtSffo6Tk9CYgycJ2b8",
  "key28": "5WSDkKGVXDa1Pev2FJd6mKXbRKc1tVf2bpsAGQNydLqXEL3i4k5Wjdw8jpqG3wo7sK5WzayhoV4UiNmp8UGXK3DL",
  "key29": "FbnbyfugSWJxAawKypCbd4z5eRXk5XdhGAddeH5xQHeGaEiSVCDMJ8AdPFteGQs7zHrJjPocnAo2crThZzBGL2Y",
  "key30": "mBWioRk3VCYW1DftK8tpX1QzWnMzWDHhUFMLFmDtyoP9huA5vdtQN9GyK29USb2NUUKJxMqQMeb1oZRo8df1aUU",
  "key31": "33b151EK8CgHYD4SHEEyJejMV7yfHWzh3YFH7vaTvcVLZbenF5ZGre7vBTvGMq8hmXPv7c3cpdXKBz9Wa553BTSe",
  "key32": "2x8LC3bLg3XnSTomB5JaxpS78eiuVSqmm2qJAL3zYxQJJYmMs7ViLFEB5apPpK5kffwHrphXmonsX2Hx1ZLoWEr4",
  "key33": "2afDRWEYDqPnKkUXGNGydxTnPcGWmUHUEUn6DzCRk9xE4CwvfafBY3G8SRc4Zo2RJfKCXHpAKpv82U1MutngQ1LS",
  "key34": "5a12LqTYkZUv8hWekQ8ZxwfpyqJ1tLXnwzs8ARFwhkSYWBjnWfdauw9ciAT4dnk4PTTMy8YTPYqYVFUr18aPUNrJ",
  "key35": "5uJaASfyNfjxsm3K41ebjheicKECSbUJiirPU1B4Xt6pjs8KvD5kaQ5HhUyZBu72DC6YyqJXWKpABn8cjB1H2WAt",
  "key36": "5Y8MY7tTNWY1gzaXXtaLTrzG2DhQac8sA7EujLXcKFSeZrcmg9BvTrmJgoehBwuhbR2PtdLbqiEezm1iWkgrvYgK",
  "key37": "3A1S6gZyVJo1frNCGQQR9SgyATMDJQ6HTP6LEpCbRw9XH3BghLNfE2qLia58Y92CuG8WWimZdSDFmAQnDuYyYuYu",
  "key38": "2VJDjJtkNW8C6WmjoFBsdenfuJAYwP25H4PREJqRQAniHRYmCGHR9SKK6Wi5JA7XpUx2AM4PB8rH7XANTNjds38e",
  "key39": "2yKDhRueoH4i2ubg82hTx2P9gC9YPq7DmGqMzxcvtbVsTMxjyLHRteZ58Ff4oMemhXDRqSfm25mZn9pCx4EPeu1i",
  "key40": "4LDXtkRGEa3JBrfFRCnnnTst9piDKSfw6SJ8qLvjHoviskT6MLQparJ7ndeAkn4RmNEyTQc8YuJgmP8oMCVCN3hY",
  "key41": "2TsE7F3qV41BEq8zLLUcsMZqKBja1PGF5WLxzcy4qVv2zTP7q9qBCSCABz4px3Do9GdkYqGbFi9mQs8woMnxYDDs",
  "key42": "4GPreaHGekJ4ouMWDJe1aqPDk5UXENLbwS7VzpzzpVt8HeFyzdAYCMbUd12xzp4Z9vjEedJ6xxS6yeZeGr516cpQ"
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
