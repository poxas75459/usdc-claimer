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
    "2jq22fq3vaCSnB1Wis2rHyNddpp8A5CfXuuJyd6GMtHp2u7CXDeHjbn288jYeLKnBzhRZZXtUF6FMxRMaJq7rfJE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qJ1bswZeaHCfBbjRVNp31nF6yTCxE7k1TWwN2XnprHsxaqkpdBS4A4BEjNGnbomWUQBqPD3EybL2EKLL4Wbsj6f",
  "key1": "4CcpXpgSNYkBA4vH5nsG9cxgN8dmeTiBbQz4rYMPoBnYE72MjHzhgu7h9sCoZPXPULr9ye42QW4QGYqGXtmDnNT1",
  "key2": "5Rpkh9DWvVe4wWUMiGTdQVvgnXEyijEZMcXw9TEcceDWR9SoAqRp9epwD1Uap5TR5SMUXUFpidUCB2WZqhEEZRvZ",
  "key3": "2jUPkHoc2xg4NDugBZQa3g2CZasGi54phBd6NSpTjFx5jz3rgNjvS3nshyDVMEtdn5Lfg7rwu2RUqgdCAVkKVXVk",
  "key4": "5T4SMrf28t1zLsdp2k5D5fg2h3LWNnt6xbJUzURQo1qGnZqwmHHeUD6TdXN6ouwxJBz3ZXErSWTppUsz7yN7T1gU",
  "key5": "3HHLRsPWvZ64NGR76AqN6GaSmY5dXJEGt7Fb6S9w1TpqoTY9w6tAhZgY3YysW5aZyfPz18rUzy97diMRS8WRjZD6",
  "key6": "5RaALs8h2RFe9tw7quUTw8kSG9JnVw2WWuNqJFySqkAT2P4YPMjzyny9meJkSDfmS9JeNxGqid4dkbrDZ8jJEAVr",
  "key7": "ptEZbE3XebUDf9gMYCu4YnWCQDydY9pgsX3h2rJJhEF5vnYNsSAeMsHkAiU9GCDdkAN2UtTxBAQ9kCMC2UjrDnc",
  "key8": "eT4dKp8Vh9DUedLz2hkAwGifusvUt6jz8veHhBy7MfdYJLRwGQhFD2c2oQfLUqsvK3SRyWEq4brnZrXdK8QwqKQ",
  "key9": "47EdH2RzVDfdz7Vv6hshtKZmsuAYveR8mjK7ZNG1yEm9Nqx6WWPagK2s7YFYuLPNc1vv1oAqjeQ95EDK8cSubzPe",
  "key10": "3qNhtvQxTBJxwKAAC9RSeJ2PkUEoGxAr7NUSPnBN5n1NruzWKS2rFV9yUEVxESafiND49PqZZ3dpg7ih1uHV3Wf",
  "key11": "26NqesVPtyjK9jyLAcFETSs9WyRkvsyse7vRsX4JxF5bvNSgUYksWR4yL7gY1XwNH7porw1RA4Ad97b4xtuGfxF9",
  "key12": "5bXVFmavANH2N1CCwV6Py1x7x7h7rRCyyqKB8dvfxf8KyYY87kMEziYimTn9wjPXhfAR8E3KNxsrKYM5EBFvdWtF",
  "key13": "4W6PTZaqhMe4HqtxFMjrRrdM5W48UvFqCTJVGygiWvBtTX7b65RBjeXJbkecvs5YZtYH5CiHbTgR4d4o9LBpfvgv",
  "key14": "eimHhe26V4cMZJA6HViQPratULb2Kfe4WakCT3SGLiTDPFUpV4PPX5SJLnRhtVXUJ6XLZydiLaBP8KuPxHrQ4wV",
  "key15": "8jxktdzZMWaNK1NkxpMTmxnnbg8XCxbepXH4DvAm8DEE7K2PxQkNvNVbKpdMScdNwaihfsNVQbnQsC9xPEdJ2Aq",
  "key16": "4c2NuSCMSR7TABFFKAggdUbkRXkwiAdruR9KEM7dQSpc83sULpM1hHFNFX16e6kQJS4gkRC2FAL5GDaNrEebZZoS",
  "key17": "rbNwyXVDNzFAcZ2wGyVtbLfaVsXJzzJWZuCNTC4Q29zqZQbH93vBmKHvzTR6mvBgEFJFCsFw8Eq3XU81dxHcLGC",
  "key18": "3ZDuuii72CNPqrWEtiML6Z3ZAJtV1Emav8yV4T7YgsFoG1vi2UqiEiq6HpCCDxBXDnK59KziUMxJtMFSQx4nyQa9",
  "key19": "5LhMPtNEvH8VBcroKPYjXTkN9aEBmD4uiKWuyPbA68Q4UghG3VHpvytVkvQBdWMRpQ333rA5VFLv39wh3rtYtXBM",
  "key20": "3kct2zez6ud6dmT2LSRHFbbWjHiubXJdcoHNU6Y2XnbSpLFMjueKvnnPDDQFPGjt42R16zhf4gDzUqHUF1cgQmnv",
  "key21": "2qdyjso7sRqLjNtZys6b9yajNJF3P8HLUMaw7C9csKUL7xo74SrtDGFsLSF46NZG1pEGrR2qJB1LNrkeM8MoMvTX",
  "key22": "bdi2z4qab8fo7FCnqsPPwsHZDwGt61EM7rq2DnSepZV1bqTJadABHxndxi5jmifJgiSVQG3W2UY4ssBxFZPhdR2",
  "key23": "57H6nCi5npeqK1mtTr94vENLEkooefibkeKVkhr5EQ23q9E74vWtqgXresWLD6pjNcPRScWBTjTTJmBgRbbCjT9R",
  "key24": "4WMx5z4f1CqTU2tAek7yJsYU1FX4Kt9o1ok9bws9peqsVVKLJ1ggcuDnW3ZN5yd2coaPcbHErZxrGsNpcTNWt8kp",
  "key25": "32MosePziEGkdZZ8q22kYqUi4ipM5d7F3Ana4ybrC4McQKHJXCF71vj2vgHc2LjNj1w3sqDziAo9WazoTkiHWEBD",
  "key26": "5uzRdLicfwP7f2wkh94ZJcQqeRWfhxiy3KuMrfnPQRB2NtrXqEud8SPRz3ZXnVPU6Jy9cEo3SLqXfryeNmNLdsbt",
  "key27": "56jrk2gQ3LWVfJym3vj97JeTBvay1pb3r1TcDJvpJN2XcYV6ZJTBHtxHr3FgvyecXPQB2bauZm1R6uDf29F9uyLE",
  "key28": "4nwXwjyPwZVtrbaEQ9QJmT6muVa4gjTkKRBYtzHKZBpSU35NQKvDhmkUm6REs5Z1pcrPpTp2TAWnTW5n4yb3YHAW",
  "key29": "3sqdq9xFR6inCG37V6c25AV6xXfMjcxPmihDNWmsdbGyDKsqzNfVkztsCCnw7R1VbHvAhQBbrSPBTUnh9zXVqJGg",
  "key30": "22yxUkPTiFcvbELZT8s5sGw6o1pF16XAscyKZQcLorUCjmKjnqULb4QLr82rsyvXUVXVZrzPs5urJc6TQiXhHKXo",
  "key31": "gJ5MFGdG3Nmo85qVhYxyvPEoGbjKyCMxRx649rCcK7jox7K1dBT6pMNVxEAbdMqgeJkWCMyPFoxApt2SHCNEEay",
  "key32": "2SP5fhXhwPGhvWa7DmVZu3HmFhQeGzXYwoXNV3riFA3DgSq8gHpEs2saN2jSmkC5rupmVNbXV3SSNwDJB2aATis6",
  "key33": "4j1xJDrYZKUuUurwGPPgG3SHXKphhg6iFaXWqPNDhfodY27tm6k41c2gKsmHYuNnSkvhULXxZ2rQ6NUqm39WxJms",
  "key34": "UsSKT6h4TrHZnGU7GpDGQLbiU1adaPbzrWzjgzccM2aETcChpr3PGW3EW5FFTmSa91oKRV8a6feLKfbvgYvYd71",
  "key35": "3cWcs4wpM2UyxzgTHp5MqzTxVCY9wetvSqfYaxpx1vu4v1GnAZBwpBRbqfFCtGa2PqKYDKALAk6dBig1d9XTzFPg",
  "key36": "2AFQS53VyGQvuutpo1jKqdbWbgYF75wH4n3Q29yPVA1RjtfuagehaE3qhERgNkHdwN5tiy2jZdZD7yAuxT9TrTo2",
  "key37": "3y5GNZvHUf3F3J9rS74sGScPHwQMgQshvs9hDT9ppQnYuJ9FowJChvCMtRYXsEW1r6HXuDdwWrvkEE4vcJsKxsYA",
  "key38": "5yKt3Cf4jisLGupCuw4X9m2LsTbsBBVV9ksMtboRtkMcJvhnoXVhEgYHm4LgrFYJ1V5qua7BUAp13YcGzHf67cv6",
  "key39": "5JP4XX94KqfaneLax4up3BPbKoZEq8dePDXXgDrUTZxBeg7rNS67fGAPfFnQ7B164va3kfoGnRebKj56Ho3Ajmds",
  "key40": "TBiUe7YXrDv27k9YqJ6DqKnpaq2BnCaMrbRVm3h4sjyi7BaMzykYLYBudXtRWJXZqrmvyatk7mgXkSpsvmmmqKH",
  "key41": "2662eNShgV4aPNvornosJF3LpxMXFmWwCX1BVNojuCRmm96F2SSX86BEHEb4RxXT5ywKjNHdgRvGQb2fzgzfAwy3",
  "key42": "mg9CJUkPP8eABnH4Uo1foFmQ5rx687qHPSe9TxsEEx7YWJWzDPQjaaF9LQbqU51fuYcoh1hXEe29T65q5uddNh5"
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
