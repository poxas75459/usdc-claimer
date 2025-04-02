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
    "5nLbsMhKTiox32aDJoueKg7dRqv6cNZXUfTifW1Abkm6cA1zYLSTZm97Pb5tdZxMXgnpaLdKpJJ4bYQSWSjk9cAN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cWR8H2aAV17LR6RXGBZLQAeVi1T9R3A9Lgg7UWVLqHpzeMSzw4cy7Utef7doAQVKYjQVwoKjsgkxH16SHvRazmk",
  "key1": "56b81ittFKtWwefxYTuHFB64eTTtY5h3gEnhGgswVnVrjWjSzjSp8y2wMmvzgtqcEsXHeGDgeyeXAXmVb6D3KXEW",
  "key2": "5DsJiNAiJFkoKULpgYCxKeFXQP4gfuKVAUbEY5CXXJT9S28qDVWzwGAurrj4gxeLAWSp3txFeE5u4o49AQ2Jh6LG",
  "key3": "AhhYY62q9bEU7wyum44cx8DwbC7jbs65HKkwmBp5VsK9GggLEGnvqMQVD3GbX1LgqcDoPPuPkq3DxDUNo2rzLV8",
  "key4": "3bgv9u4ZRju1bj2kKDxvqV9vkPJzoSJszhzdU8mB3MWveNEp2Sdb2e13qxJgxwqxMYvZ6woxxfahQoakQpJRDFpw",
  "key5": "dpTBFEiDhKV8RhG5GjhPNdDU4qTAhVPUipEass6pg6n2qSW7daD1Sv1mtUSSW2FRReG9cP6EHbJLabR65uHNrvB",
  "key6": "39rmCTYCq33GPjXBLumThDwDfLVapGdrhJo9uWnqhnXnpY7quVn666foDEUKvpCGw1JoBJo3dHWEEEkedfMYkDWP",
  "key7": "2ah3EHFuvjNXPcA8cRpP45s2kAxbao5XCxqDC9mqH68gpAXH2kh6pkMLWUgRP4V2srYVHGJggtbhmuGN6wuFrMQx",
  "key8": "FKKhRk4qigjqWyxsgHRPQAaiCtB9RyNKrVoyY4gZcjHpurzTkkbSrWKi1NVhJp2ZPuCFyXnoM2ZxBvrDcAnTPfq",
  "key9": "4X57Cw1WH3GyH6RPFKhFoxamrAaP9mSQh8x8YQCX3iyiwzDoUuwXJCdYCN9tip97XVzdz6dMD6vhuJMryFy4Q1kG",
  "key10": "2MrJANi8ikKGyYXMsPxH8M73y4dgsWzi5FQf4fsiMnqzvyrh8ep3LXdAhLvViRs6iVcH9vh8e8MFxVvCDmB3w6uQ",
  "key11": "5i8uh7x9pjZngSCRKf3MCVXCLfc9cdJZVxUtn6FQwXTBH3jcivTPvDdC7yxaMje49TDHqKJenBik1z54dZj9pTbt",
  "key12": "5ScKNFUABZFGqUpbF8nYPT69NArkUVyZjmEBfSTEJV4KCRWn2dKHds3AnE8sDwYJWs9WSBiELnP7vvvgNHgRPPEw",
  "key13": "2DqCrCfMrksPNCy1YH5R1Yd6adgjyKYieUVE2eeyWcPQJ7Dct3BcyXFx1x1RSiWzpnjbBhmyn2GWsuvReCsKFkBd",
  "key14": "h8iaAWQXuje8XDK6JQSfxgRqjjjDW1N9KfjRKWBGvYr7DNiWrKxyNqLmRr85Jvqy9q4HZxJr1oxjf3GM8r6x1f9",
  "key15": "3TMb5EK1M4aDbpvaV1acinfL7Aa8byqUv8Qzq996umYRSQaymfTSmk7u96TDYnM3wuxW5WaF7uFWCiNxbZ8xkzhS",
  "key16": "3UtvUWMM8PGT4QtQutqnYdQC6RnvxHRQ7ExXekwaJGaEqBdRAzbXKMtmHTQNPKgPYvA2buRQhnMbzsxcc62X8WQ2",
  "key17": "5zkYsNcBHL34ADghWWBRSFSyXRNHsJJYUFUbhcCtszL7pxv9UXDFBoDGoLtt8rLPD48ct2DTW6uSipJuE3LGNeLp",
  "key18": "234i4Yhv3LMqGV6kEfKEu2yzAajuFbp9UZKLMNpyje1ci966eE2UT2RrQ1E4RwiBTcDsKZ9ZKX73yFitn3YruUB4",
  "key19": "4tQrjhymK7aime4RDrbMN1HmTCZiJFV6NiEjHnXbwoSi5uzQiBE7uyUXS8oh36iyVYNVfksdho7L8coYAH3vaDhk",
  "key20": "61GmETzskFMCzeUvkymoBLmcx6EUHiTS9A1gXufmNrujr6Goq8poeW5h5ePBakGYtbWeMPyQBiNa6pu7w9mHcQxu",
  "key21": "2JobdPdHebmXJY346fX9LRLV22CTs7XY7QmkefbqdtB4xPT7unXKN88g3fDMEVxqQgmtKLJ5ysW7ArEMuHQoZ6RD",
  "key22": "26z8CDJ3eiwgrUsay2p5UjTYGsYPPw9wgswpJ74YaPMjpHdS8bPCyGTwYBif4st59EicjLbNo4kyB4mXeuNRY4MP",
  "key23": "6i6GgEmCnYQisq5vbcpXWEwfGd997oXPBeFUVCoTR9cYe2R8u2b9aexPq96fa5WT5bs9PXQ5GXCpynP3qnkSvKw",
  "key24": "5b3DF7ZRGTywDDU3qK2yp1a48mCvD5rdHpTTrcDRUbS6bKXvczf7WhU4zqU28Us68Jom482YaGbTzae3KKM43e5m",
  "key25": "4T6aRzYCDviDbn9aUeB9btqsBEkZ2bRhsGZBpc6rRsecukQJjqccvqouf6crbFtXVhjjsd1rEXthSvGdN1dhdRKM",
  "key26": "2aV7RynWD75zR4V1cst2m1GHhnuas9FBMkNSVXg5h6Ns7JEqkrRPW1Lk2xzH2dwVSgfxP1iBhFsBDRBRa3M6X2EB",
  "key27": "3GM5qYitss2eaQDZ8Uex9kasfGztTBRnJLFwAEwFeRzb2ebFshMaWdEVPf8A1C9fhj3N3YonPLaeBhrCTb5qZ5fM",
  "key28": "4Meg7Nc7sfEskvFqUUboRXgMxg9kejcixNZSuVnJ8KT2tmYK6Gfeg8wd6nx8Rbid5DrYnbm4NY9k8UzL2fjAiLYU",
  "key29": "4KmRQCneKXnTdGsucTbp7HZGJtPsypgi2Gchk7PfZ6MAv4cEfPgKT7azx3uX8EoYQgWtX588az5w6skBpMsQgNX9",
  "key30": "2dxy21KwQSeDfHsgsdvLwbMCVtk6m3KZuNANjUyxGqxYzokyqG1sHPnmeooXwRUDF1Aa9afqe5beiZ1gQtQQ1Xzy",
  "key31": "53KUCFj1vBqiH8f5cmWyDspZx33wJLR6afwr5B7xJnkJwS6VQqyvdJgs5CCyNs4f8YnGuTo2GWVcrEweikoeTFJi",
  "key32": "5UNt95xnf6dza6uGYgrCadec1wPmLYoXY95nXN1AZVEbcLMnx2v8WXUJmpafZMjjaRVwdWL1LWR1NcedKyxqu4Xe",
  "key33": "22AdWUcsMSjwDA8TGbyeJPqQvK1Eiw3NZcjkdryt5e1XZEKvNYHdoBFxPQ9hThY7quaECAzJhLXArezNLmZxt5AE",
  "key34": "3tw8ExLcewHCuFeffaRMi4hTCicuUKDEby2hzqxaZT3hWyffreqGRKEpSk7oBER1x6JZU3pWCtcqpsC1ddz6nx3E",
  "key35": "4Zonp88Pp2XNShQqyQGCwiNyUCdwntRfsiRKX8Tz9Scn6qKfosm4V4SKa7iV8AamU3Z3nY14PEJfUtE8Heo7nv5j",
  "key36": "4XamyNpLUnWLZxxNn4e2AmFFYngKBPbqxgpDfcnMPDVj1CtjFuoETQSttj26DkgTm5jtfpHEiFFcWAWycPPJGG9k",
  "key37": "66yGz33JsfbZxSTnkZpFtRFMXf17suDs1q4Kivah3ZQDAtbsajfJrwQPXGmWeMdkjZmQnUNr5DgKeeJZZnE8GJ2b",
  "key38": "4naPKo2fvQCmgCkVEf4WUtUC8fCia6dnFXgz6GEyPJrMfkSDtK9guiCCgtSH5AmLJ1eSAUNV2o5BE2DW4cubQMoE"
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
