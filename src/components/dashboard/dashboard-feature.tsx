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
    "5MgjyQirTEdW6wioX8yP6aK4jHH8DV8tMq5Xfu5tzYESkzn4QRFcKHMqAzP7aUf1teFbX1y4KVYLrwmNeSz1mrHX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sFFvPfV2mfZc26b2b8hhhN4angfRsVHVm7SLAnFbCDDQmJs8BFSLV2ob268WpXDgJf8Kd1FwDVhrdTcGfPN8t6Z",
  "key1": "5a9EMNHyRGogstX6dzGHioZMvSs8gREFLVgin5epKNGg1ymy8C46QLcgq6TjRNMUHEMwsZ717JnUKc76MCrMjY61",
  "key2": "3vgJsWSGW5PrrRd2HPjqsQW8Y9VvVjWjJ8GBqsgYoDygtwv7yZu8qHiiuLvL9XN9uhneBZ9JBHRD3G68nQscsgz5",
  "key3": "3nw7sYUVTpYj4vCHvXKSL2DFPxwXVcmVoVbgZqzastkymHKx4X2QkWYHh9qUJoXwZzc9xHtdv4yNCy6fwk7qjMA5",
  "key4": "23KPYP8JuwcEGnYT7unmhzC5CFamockNsLGtvf3RXnLtYx6PdWryzXmj669G8wn5umJrvU391TN1waMBBHZfMgsK",
  "key5": "27mqi5HJRdAygKysg5fod4WcWGP5roLD6D4jgb2wocRz3nyFymBYhufGXT9DXQYyhwG2p2S5FGfmcVVBb8fktDAc",
  "key6": "2YeQYRyHATrMc2ZDZQE9EyEVpJ5LXdNebPSjKk7J9i5vFD5JUYnPL3epV7GPx2SwmWuJtNXBSKRvzvpqVXcTbM51",
  "key7": "R3iZYvUYGP5U5Dn6wPTgvpXy2tdqgbKv4SJcM1cRd1P1vyxdDjipWda3rxZDVCc3GatFM7ohCyzFuaobtVPemXg",
  "key8": "MF8wLnpNsLc2ydg63JtTc5PeeczK4iAFfZiXvdt4HDgdgSr5fbSwpREAc7UH23jygBJBYLs5oqEJJwLLEHj9b7F",
  "key9": "4FfEpaqyySAURp4bHCYzBFPGZa2sYsktPoBDRhcNYGPQevcFNnQp9NWRMfhXEdZtrGcLZzsXJr5gexpqB4icaiSY",
  "key10": "4FtCijZ4kCTA9Jbsx4RcBts8yqKx2X3uw5tWVTwpuPBov1xNq1GRYrR958eC7QL2eMuy34s1UV31qZQp5fX55xcb",
  "key11": "4Bi8NRxXHXqH1nB9FKvmEkToA65hWdr3kGVitapc4wxzhJqPGY7GWWPUMYQazUPpwAoBkP5sBsmcysgajwPtmSAG",
  "key12": "2XRD6NqspBkY58H1m3GMpKnNhAPedj3ASKpnjaHEVgnrs5wcfzWu1si4jpNwS6EpJFsuYVCV4LevDGvMAEFReJgn",
  "key13": "3DHfCLXVd5zPWp4b11SnnSrkHRdVhVgvmxEJwGckHqdjtb6MVBdtExaGpxYSwthK9rZt9xEyXsyJ43EtTN3JfYni",
  "key14": "EFo4g5t4baVgVgPvQwFh6GbJpxVCEqZBvvGKK3uraohPvwR1Yam8PgqYEovSoFaDtJDt96Uj9sddaqDWwSKbgx5",
  "key15": "5feEScW8WUHyrV3qEBtuwPRZ6nhHkN82N2MP597PswxHywLfznGwXgzCVmMKRAWaPMqbZR8bL8YWCnxi7tuanRDB",
  "key16": "22JMx5uXqbNgBPCqftsYJ3Bns5FThGHykYZS1MYSayrps7AfoDshAkPGbMeqzqv4j1qYWTsRvrb9unRFWp46iVAa",
  "key17": "4LYKemzxQ55ohbsREwD6HTdm5yno67Y89kMLXmctZbNo2jFn1EuRmawrEFRokTo6wnxexNtwGLqZCxvyXeSHm5Sy",
  "key18": "2QsXQGFYgcvEkqoFS2qSZGRFmcAJWrQQms8RCfubEj3HE1LcLbsYN3SBeQMUNxKRxaQV8hSxAumY5GgJ9S1E1ojN",
  "key19": "hAybk3Nw3jM61WcurwJ34nQHssusxJsWKAKsibDmLhneCDCpCNigFfnZDL41GyJh1VKPmwyfcGUfKBarA6wHypQ",
  "key20": "3yNuxFfyrmJsXxtsig3uzmPRh8ZGiYUDNkHUK1oqMVUnGT25sCm3isbjgXSrsGdDvL8kZHpgEDj3xtcvMVC6xc1Y",
  "key21": "3c1G2f5Jt9nWFuPRN4jJR8B32VeHspcpKsvWmDiY9fV4QXASvQn6BEjcZbmfUX2hW6BaQTsDr7URnZL9QX5UQN4P",
  "key22": "3k5H1MeoKUesQFytDHxiGGvdqUwLiSVMiRVjCKVCiJXba7ZpDFP6f19BnDtMAVVMgjK9a5ZDqmhZ9VKQqoojdfwR",
  "key23": "B7Z3C9sUHFV3kkjS7VjHjjovtbFjo4oiRvUtwTZuPS9KAKQaLZYcUbSv48ZESVTPs3yhPxqaEBUWy2oGgDzz6op",
  "key24": "2LqBVUXpVgziAoSjPxPKqoa8hrBb57G69mjQEPkLsHRTdBYZsHWUEMHLMRWJr3ZgjfJZzKpEXRshBDomemUFMZc6",
  "key25": "2k85Er7onWicfM9jhHg3fMu8W5SFU3a4xwmCyhAh6v7p5zsVZWG1tvvouiSW1sRiRP4DRHSyF4oXeqsCLqUbY2WK",
  "key26": "5mf4n6n2RRnfSEuNWFWXLhNdu2KugkNGCgCAgxtoKJqnAYHtmKS3Ph3F5Mp1TBYC21msCcStP6xbP8cpzfxL6XSk",
  "key27": "23xjEYrCGb6SD2pCEFmhdgBSFGmtaHtZHZ8orer5p9cVvysrCVfGmEzeXktPT8snfMhfs9GKFTTaU5v9rKu1r1cX",
  "key28": "57Y67uxUVsKwT8gGqaaS7fDeifExSJ7svrZm2Qo6cRXFedtRgn9W1NxPBk41tJnSdRWZii1DixqqTTn3ExVJmvVA",
  "key29": "2f5VepS3ytZ2uhDAB3tFqeYBNFtbtn9S97RuEnrQTQsTAbxma9k7Dyi7LRcDjsBWV15RFzpLqpqSQRPvp61XfvNy",
  "key30": "3UuiFrc8bWBKxHYDXJxvhkBg6bsdQXs42GG5dtW7ySCSbi6mUcJS8CM14jmosR4FPKm1xRdGNaCDJufvbjhcjnYq",
  "key31": "2afPp1dbu7Y8vB8PPSCYcBxMMQbktawBc33Xqx1Xdu4FXs5U4chVcqeMJgAomjGpeAXL8YmyEbBX9ZimJkLnQvZy",
  "key32": "5SBCN4Md6mAeXGDf5KZQSSuTZ6m9qRk42daN97JgxuDb6AmmGZGBtWHPZ2SNkAEmUw6ZmQXkwWsCFBxaTfcWoT1M",
  "key33": "5aYZFTASRpsZ66NimiNqraxzGeGz3DSL7TUUDmoZ4maqaLD7ynWfpozhGB6DNApfUXEQmeRfPPjWbjhBTycUsvQZ",
  "key34": "3GP2VrsCzKKxjHWdmoza1tbmxSNVAjEvem4jpkaw7bcBDEDDWFrzjWQsgk758hHQJ7uxpVmdc8HoFrY8Lr3M7yhn",
  "key35": "yFW8cwxYhNRbw5feXpJwgoidd1aTouVTW4grBaRqJGM4EzDVde7u8JaiHCqpf7p14tuW2omsBo6pchS2rUs2MyU",
  "key36": "63Yrtdet9SLcCyi3DaTEdhDLq1NSNDuH42JNPB5EHQthJkwxyPvFudsdhEJAJevbhwVQTmJEVkX2LW3rPuozh2u3",
  "key37": "22eQZnTAuc8zKYpq2bvECh7NrgxYfrLCcdsaDM1QMJQfmA2YBGCGUDr2JSANfMA6AZhXgVxekYh8C1hzC6HUp255",
  "key38": "5vvSi8xu96PydJZEyFt8GzCr4175nVNd7yhsX1acsvH3ofbDutewwGHRx84L9ea6ETdAVu4EwZKmKPVciQZU32KF",
  "key39": "PUMucfXnEHK425d5cH99UF9XQDc9MZm1hQskFoEvVhAsAVziYe6cWnb8FPatBDMrjk8X1uvttgNX9BE3C7tkwSc",
  "key40": "3v8fmjiTJSmaVKf7a45u4dYt3AL7P7xjYYUAQnMxa4kRwdC5QyVPVWc2VUJLZ6UKVmu3LCnCoxaGLNCW3tzw6xXw",
  "key41": "W9YpeWLnLTsvp5nMC2moPs5wrQShkicKKByki8yA2zddXyjN2YF7DwtLRFBGZN8zYDyP8TCHdgzsE7FsuAJG8tx",
  "key42": "2SLG9oqx7UW5P1TAfXiNXbYMwSGSahnQmLEfNg9QKndLziUHxazofrJ7SmTfqF41VmN4rSwMWvzXmx8m9Xovja9z"
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
