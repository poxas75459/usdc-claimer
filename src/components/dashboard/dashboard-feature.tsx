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
    "3Y21uaWqm27irtjMTtrTMeGgYef82KvJrHZhGbreeFCVWVECnVbC6pwYMvQNMrPRwZuARrbPEFgrV2ZcbQYAMRr7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5A59SbfvwLBTUhFLExD7uXqJ3nC97xxEHN2rRM5Ps5oMbkCrxCqfREaTxoWMxyNoRkbQjcd2c592u45LtEjS6S8c",
  "key1": "4aPxZTdkx3qm2RuJLefyzHvw6siadr5Yw91tf96Fvw1gqMiXvii47PYAS3rjg3H7eY9y5V7NMTtUdQ5WLkL99PR1",
  "key2": "X8G4V69AABEZFzU7FbQTCKjhyuVaoDE6nAdUP7kH18CwmqHj8RJpbLX43CQZQAx2kaGBcUFZUt9jxeSJZUwyZLZ",
  "key3": "Mxodt2YmD1pgRQkrvS4tsVttPRFUdHVU6wPcb8E4Vx6HmMraA8Ajt6B24ogx2ZsDKsUqFPV4XdMYWkdHG7wjE3Y",
  "key4": "3AEmqUD2ufi1rnSRMUGm65WUvuCBxC53m6m5SMiEETWmVaDTNJJs69ZxGdLbfVpyUZJEWxjYq8oFTwLJE9FZEktt",
  "key5": "3e4uFkn2v1xpAUptEszzRZ9UUm3gnanf1JJ5v74Cq2Y91qCPcYMpjDMXdXiYGMGaD9ScoVczdB4izYVWu13KmJ1S",
  "key6": "4YDDNxSRXn9ELiLRYcx3hjqrEmDwx5dKsf93dc8PHgqhNd9fLXFPpe7Fhg6UVL93Wu4tgt7E8xvUx8rnNoQhWnq",
  "key7": "2J3D9FrtZnXZtxe15cQVpyZR3Ugzz4Qv2sXbfVFDphHo9vdTKpdpVj2V3Z9NMHLpG6duBrf1NZpX8jW71CbyAJDS",
  "key8": "PL8rR3dJyaYhwixDc31xVp3TNhZxhaPHJKGEmcb6v8pdbvov9nSYNoWURgJZqSgpfR4GmpuVzHqyHakYdXTmtQw",
  "key9": "2rsTJq8tTzn66DyptL5c9TRuMaXbALE8Q8gR851PMsZfzHdb3MeG5ED5cf2hDEpnm3N5wZfvBXvj6qJfu3MuaKcx",
  "key10": "341RBN2qiN4DPRephAtPCbrFHHjYmLDTpa2V36DthL9ThifWx4k6f7o8AX8L1DgiY6aDiEA6LX9piuF9c5nX53oV",
  "key11": "4MYf9zQXYznFWK7pwR9SFTwwbN4iRmsLw1PF4za8G23D1LEAp82XfwmiKmcrfQS6bT2dFh8iMF3cLxLVFXT8UC6r",
  "key12": "3AnPtKqt2gDpcRbmMw6gWAt4NmNtp7zjcTBZzQEYTJruLZu2euip2JvobZMxQCPZb8w2TTkYp1gswrYkaNq4qnsL",
  "key13": "3zVB8ha1MSwwehCiUTrvy1A63AXAzPc1grWfYgDyoHKigDc9cWLA7b3ZoAf745nCprTxeoDeUwCymcKEskNnV4V1",
  "key14": "nPn8oHQ9r5HMsTYHqHxwxWBoM5sVM9Q4khQ2qXd4ZiRkLbzahC4PM81jHWEy2mZstovoJK2AoNaQJtRJyvxCdVU",
  "key15": "3qVD6EyxKK5RozA4icxYskBRcoSiaMLjxesTPxFb9vBnJWhWCs1XAcvnxsbckAhQLR7NxxUj3r4PsFHt43mHspJ5",
  "key16": "5gMHsufrPTum6gt9Ub3Q9ijDBGYwkGenFpN5kgJyvp4y4jCUUgwMQFMT3jyBnp6wp24DBJvbKEQQ2ehM6Tr4isG9",
  "key17": "4eegVR1eSM5S48VNtRLo7YTtaUKf1J39T6mhCLKfVvNAfY9SqTgwQpmBFPUczNSsiVy7zPHTWzpDypnzQc5gLPLi",
  "key18": "2fb1vEvquyoNZMmzNYUMccMWicASZg8zk2rgieimoQhTNyQbCTLi2Fp41DR9MSoSYFCEHUu3wAjWVg2s2p74rurU",
  "key19": "VVDFWrTcBjXfBKJt4TDHpy6nNrSif8JezJcr2psToiHBgPHhTPimk2RkYiKnBPnKFxyp5oyBViAhrqAJ9BdxiCd",
  "key20": "5cnvqwUpw367bBdu5MhdN2xHHMUKM1BRqSmxW9V2MHxFqi2oqNws9SdqS1ASwVvHmx67APvcyadF1auYQfQ6Df16",
  "key21": "5P2ihjbcy4oth6Ehi6wLNHzTTqxtc7yC4EjUCc8TUzETkrBXjU8A3ErnfmqXGDsnVTZh2aU1NfR9L8JUjWozuGvn",
  "key22": "4ySHBwWCgHxs47RXgG5i96eaNJDG2AqKAdrprPVKwDsjKozB1VeVCXSJ1aDD9mYXFpFu2EFchqcFb1mpFVfQJMny",
  "key23": "MAkihYWVPXPjMKWFBX9zwsbvHGmuRGRAyzaDwKrKzBxFsr6JUV8KwSoUmS3ZWWwab8ZyfPb9UZ2yUh3pz8YgkxH",
  "key24": "WWbgfDJF9Jh2F9DW8ezm1hEGWCoaFx4u3m9iV4dgt7YZNHGNfSh2o73QQKRgATYz6jh3yuj1UjqJfgLVsMuE1mK",
  "key25": "yu5vaK6eV8tii97qtwoh3HjXPzCvWTWPCjvHVgtaxpNAquNqc4GEvtTqySXnXBjiXcibv5xCtav6BD1gihn6YzS",
  "key26": "5Qosoc8YFrCbWJ5CLnPtWxpeikPXAbJwXv6aP1xEePv8s2EtbnmMmgmcetLezwiRypAU4GGTJrXEsmn4dffWgtJr",
  "key27": "3BpmU9udbusnzZF39viBZpQ67orMrTA8WiswHwDGXLh6AEwErNdyiWYbZtqGij452B1ZQdypVRzwkwYUAYkDWU2m",
  "key28": "3VRw5WYAmwsxK8yFTTzBRcUMgrbUjM99QkssUaa4PTtxysB7bLPnA1YkDYEmYvbdQAgD4de53QyFqgv8YaX9gHw6",
  "key29": "39PerfBFAMaGEsjuzu6nuHZbNvLrvmtXk2SMaGnpg1qXCWYsr1GAAXQ1JrR1FSdNte1Mcic5VJa8caFuj4wGQ1a7",
  "key30": "4BUPn61sPKfB1g5qVYgVV7NeBDsEkWYEn96Pmso5HCxFYSXUgWnrVThwzVnibGsGV3KxwhyubxTmy84cedMW37W6",
  "key31": "41QQjBS38A7nvmmFidG3XGFYShPPdZeJ71J8ogYadHThQ9YDJag6ZJxXiCo9dVVyArKigY5WEqGCBtYuTPvBReCq",
  "key32": "Lcbk17yFb21GeuytAFgduKnsUvX2tE8EK8a8NHyaHde6RuCwBVEfRorsDqTwYcQiHCoe2DnS43dEQBjM3KFmH4W",
  "key33": "5uobFDLZTp7iPN8zvVYChChmZxi1jeS7xzMjQFz9UUKoZgzJY38jbRz7ToApwGTPw2LrN4Mvf5YREw9Xn81kngy5",
  "key34": "5m3ytkLbhwUgnFcyRC7u6kHH3UKLRnjR3Aq9YQnaBfavKgsqnX2f93J61SnNKyhtePXNAmsCpJJr78gBAg6gGvVm",
  "key35": "4uz1aAmdBQfb8XToppGshCfTQB1DnMdLvdPeYsW33da7p5xECHyCpnPJXmYyK2D3ZgB3HjpiVh3n3sRdUBxbMJNJ",
  "key36": "4h1akFsCGTJMvW6tFCnn1cnLE1c6HgfnG3DSH6JCpgmz1X12BTQkQj9nUCMQbNpeFDrk6AxMfrDe5BoZqKNRHzwV",
  "key37": "rd1Jff4emnEZvFaWEpiHMEZxqviTVxUMnaRz8infV92vWKWKm7gLAEpQWe9S37MqTKSxJZmeMEeBH4SkPrGSrvu",
  "key38": "25BBS5zosAbMTo3GDKdEH9BooQPRq1ZxEZ18xP6ispJGS4e7T8iWVmbYDBndYzT5qAk37624Y9oJqiNxFusnJc9u",
  "key39": "2y3uzaYBrcDWMTN1VEuQ8ocb75kJsdu6rrNrf9j1bQtPSoay5DXiGsmWZgeLUkj58MW2gfAo2LtV3cvDENTtjGNF",
  "key40": "dvLR7jdP9yYemqR2exxkmJcZzD3byM1U6QVoZ1iBP589eKoeXixehXsmC1a3wr7wpJhNJSv7JAtXyHjGS6wXajj",
  "key41": "23beYjLDo1fLBY6fXewtMJQgbmopFARsQnfzhC3rCpprX1mvSxcLSJWFHTD5vaF6EsAwSbcZ1jKPtqR1uXGsDLZq",
  "key42": "38VVAB5qb4KqxyNC6jaHTEYDFhmWAns3y7pjf4eMZBmviWyou9kjTWhFvweb5jBfxXqmC7mDRDbsZi2jRQdncex7",
  "key43": "5M2Z66rRE1sQ1Gp5L45z9KyYaHbzioXQdKfvSpC8zeAFTefTFHRop4htxZMKiZhWGapK78Yp691B4hXU9mjxMDMj",
  "key44": "5KDsBzWYaUzqkCYmHy6FEq25mLKYAdQuLMd2U2wNvZ363vUhNx1r9M4To1J8BjrWgB1T7gYqcXYqyQMbPEE2M2gf"
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
