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
    "vTmCJYhYPZvHSe4ehxwUYVdrf8qfeSPfoLGARfxZuyD8Dmpim6NHxzKNYeNLRe3FB6GT2cjJQN76YSt3JzKqXke"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QZC5UJR8H77iYwobDzqZUawZPSathbyGgUwvmZyBQzLkFKjQCV5YFTfVuGFUXN238tGhBBQVypFrXsU2ErnVgKw",
  "key1": "5bBh5fbPXsEP5mZGdPgoGiqbK8mNBsK5t1HgjXqJCKWYwZigrShjBKmotsy3BQCgKrRESWxBd5VSfX3TztMcsrj6",
  "key2": "48Us5RiL6mW2Ly2JVrgpFqDVzB9dkvTkoQkBqMCEkjvZC2u8UeKWWRQ3TnyW7VEN1LMsygmXVck3ACFxhiztz8TZ",
  "key3": "2Tm8pKt1gfbRbQC8gXuGkjFz9U7Nr8KPxwUsquptN71HVG9gxrhS1vAMkQuAp4mKpQwdbfcXcpaGEKA67SAgLfc3",
  "key4": "CRvjcMgo3o9dAhU3s5TyhRgCDFNShNwm2vNadkX4jTi5Ys7rwuLLRF6xDiD8yyiLpeQ8eFTijUU12NMMALXQQ8B",
  "key5": "2FmrtXLpK9fq79eNLR85aJ4LZLH1tHZB5viWkgP3NnXyr85JHnHRNhFJrWVdyyrge1LDjij3SPYDFnvu7rJPM69P",
  "key6": "52kUrjz1bCju2vhNTEc9P8nhavYBQZHzcC2b93Ag7X8368SVuboQDTPBNrdCQME2RTrcoYPX4pPPP1dQuUdS6U1D",
  "key7": "g75FjyPwGFBiSQbog2u55PANdC9H7oq5nUNcPbHLyRHNpfVBmRQ8aeFgg6cmKQfausXVrTP7f67siMuCMjKjjYr",
  "key8": "4s4UaXJjoN6wD1qemrqMDJZgazNeK668LZQspqT3EGJHJ7yg2L3EjwnqDYghfbF3T6sy1AJTUEGAsEZ1wzJgTTpW",
  "key9": "bqKQhvQxgiSNp8bphZnVTC8h42oec9Qx9bCjrGpR1D8KaytY2Zcj7tfVoeiM1d1hPZFhLomeshrqimMbEW5unuA",
  "key10": "4yiQ6Dqhc8ZqhsYWgVDerMtjk9pkgDVpnVCaCc3FWvHYccFwbXfCdWnBS1aqg2HiaMDLQZbFziYL89Xvd2Wbxp2w",
  "key11": "58RHKsWd6YFD3RDmU6e7bnejPFR2D8rau7M6PdpL2xvP1wJRa6F4v6rhFziFQJkSRYVZZUhQB2DjzZkBvoqjisvP",
  "key12": "25wT55dEKrRJEeCgYLfL14vcwQiUvs6N4ETQibLHgm7q4W2venn2Gj4Bfuu8AogcCsftQ4KiXdfPK2gcdJiF368m",
  "key13": "469UDinrFXXXjH4NRvkEbXmnkfqsh2i1JpjhoPJCCfsfGnLvhEyoF4JYmShGuVeLVFpAqkjoxV2C6RpHrfcqwnPq",
  "key14": "2V6oYkYXavVFLH9RC1SCkNwwuZYd8VDQgfnFvJULXauXLfqMgNX9gxyw9gmv2etebRDtRCVH7SHi7gaMnVR1EfnR",
  "key15": "5VkiKbykwEd2wi8nRt1RUgJuP2YyZmyJXbnF1AyUtACSsbra59ykGfCSrGsViDXQJseCXtW6Yjcaa56QtQHYP9pY",
  "key16": "4xZBatrKKZoxbEGAEBQj5c6RvFHe6HN2YjVKKactTvuz4VcQNujVNxgH75gNAACApwzdyXSWS8w96eCbTJWK4FDv",
  "key17": "2KmxLv8qjf97gTob5mfzH7e1gQdk6mTDRDDczYTpL5cGfosV9AQ72ddiKaT12Yrdta4Fowdce5VNTTpZsJpKZ8qL",
  "key18": "4XWWYqNEUwWzK2yJDxYLYxpR5b2wtpevJ349RgfBpvAqe47yegsKJehFPdpUKgK8Yj7ibk9rTeU1CLJHpZfiHov6",
  "key19": "4BbQ34cQ3rBWHAoAyp2jSZUzrnwDC4j3LHFHycuW1uxDqCN2tQawzizY7w2bfYcyvARp7JTMbm3jnAqZzos5EYS",
  "key20": "cUd5adBcGTc2ts1q9LhyHkm2YxqVYyBMwVoz6b77QtZKwXGiXHXYxF6k9LCA7hKb6HRn62NZHoD4DiQkiDv6HTM",
  "key21": "3icT35FEmXX2Z7DN6CaoZGTDtf76eqHh2F3DhMg8ydHz4zhYRHLCqNptuv8oBR5fU7g8cSp1BbFRSgFnaaJzdVbq",
  "key22": "26Y8qeUzwsCdzYR6pDjatQpRohQvr2zNxeN4p8Y9eXweWbRuhBM3BMz4NBom9H5RvLWfNUEDH5fuXCUvZftNPoRw",
  "key23": "2gxfSeN9d6UzrYvQwRpanTEw2WkDPPz1GraDLPWUyVLfuk1wAGZriSMbajAAi1trPcFGF8aaGVsHuxxMxww6oeDV",
  "key24": "PxEzsatd2KDoHZmS2rMzdmGZnHEgN8GP4f32gQNdxExskbbK15DJmAX8SotqVHD1Qc9ocRpc4ZDRUAXaedcy9Ga",
  "key25": "3GRJYEoXFZLjv9cUKy51Q2jPcArPfppuTvw21mdnsAVajrBBCBiBC8gDyyopryrFXYkcoeZ2wfinCw1gGDLmtgqp",
  "key26": "29ypJt5PkT1WWNDr5S68BkcingEi92fWCfkTCCMPEip9E8dZD6ou1A2SuNWAEuzrEuCieHT8ZGCPjUVkDLkSpEq4",
  "key27": "26mNx63SGvSkukvzaFP8SYcvogE1VkMgWxHDLkBgMKqg5AQXLyAtD5CcCsbLVkcaSh6UWWpcFCYVWzJAHLckYGJ1",
  "key28": "3D68LhtkGB7HYpQk2fjC5GFs6i492vCLUhprXzPwG5ifkjDSNdwV8SL1Co8MZShbDkhdWDgLcJpX9CdTbSnuwFuS",
  "key29": "3W3388raqpDHeNr47r2M8eHMW4ZPEsdjHV6K9qaKNqttLYsiZTjwQriydyo6xM338hgBrPQG86Ss7wa5VMaCp1Bt",
  "key30": "5hyW77Q9T726ky8fkjT9WoGdyQpi4cKqv3LjxLks7yctnZaaewvVvmy88XX2cXPPyF21nUwZ4yDxqyHuBgNieoqz",
  "key31": "2PfTvHwQHgbyyQKZkWdg1oAc1hh8T3D8LGzguj1wwRkijkczkAzdiQN4xzjiLhAaHShsvF1pmb3NNTwDFR28ueTk",
  "key32": "2EVGjrktFwXnavjRznk6g8bzdnFDZeWCUjNjaAJcCR8tH7mL3BsTEDcojstZgURQHPS4vMdREHiHPBvHB5qW57Zs",
  "key33": "y3CcPytYgP9yVeqrTcgGAFUtELmCWMNSTJ5S8xZgJbZZENWK7nVMbFQcxk2nUmPtF93eptNS2LQiZaysTjYzvYQ",
  "key34": "5T5WkjKP7mwH6bUocwE17Nv4hd4B3odAPY3LEXXXoEHzHRGqPwvdWUJLNj2GqdczLYyX3Q2ugLYwL9NJJqhXEv49",
  "key35": "5QGyWUS5A9ovfshYebsWNXg2nSBSYmg1vS7u4t7h9EXCAH8eXeae9YNQj6iNmJxfzwSex3MxrLhF5gnBJsWm1DFv",
  "key36": "5Yuw1zrGTKjwurscouf1gXj7qdK6J9sgVmXZWZqnMw9wZ716PQ2ENbPV26r7MeYm6gWZtKWyeLMJRoFUdc7xMCD2",
  "key37": "2y1ZM7oC3tPVvoXFYu5iWs83v4Mv4aMuhLgbW8utVw8gtiHnSoJn6KofDJ1ogXbJ93pKccPCkTqTtL3TQ48G2ip6",
  "key38": "2XGDbg4npWJrdxKkxvStWybGfJSTfJciE3hdRMV1ddBJvDrrduUzYEr4zj5A5vTxLopUNgUuoMcMGpieq2GXz9ni",
  "key39": "2qMVhtyKww1SmxrwCxv2TfoVWnFgWyQx4QLXoDLn6BeNUjypbC6auM1ZmCLhrixNcGMPCT7meWHqXCPCUqKimLR9"
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
