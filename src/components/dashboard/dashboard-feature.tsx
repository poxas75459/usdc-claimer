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
    "2MCAjY2woYQXgbAVPEHrmNczKbbFXUFNenCEs1XVYf9Vm7L69F2PC7YQFrFnKMZ3sNMLTkDGtgvowt6NFhxEXDDn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RkL5sdsiMHk3mCgc2JstXex1FgiYBTJLdQ489TnnpuW3Zmpirf62WLaFDxvrXC1Y6t8pYmnS99jhuNucLLAonSM",
  "key1": "3VyqqDznfWH7bidP5GXc4ocuWxc6FLBzp1FtbwTMLiozTP5QxVWmUrnyaAaGEnYbWKCweL8hGC2EvcJ6pvhVXFmM",
  "key2": "2iM6BExhCJjMMhAYp6DUFh4PEAZC82BhhK3Po9b5QrSQQwpenf2GgYHUhsWTXc83swncVNTfQFTjyHox3MeNebRb",
  "key3": "26Ea2Zemagx9hAKTxXN1FGoyxvCLk6ScuZnT9PdVcYH2N14NZCnSPtkxEtfnutdcCEEvC4uN6MfERUZYb4XgfXPx",
  "key4": "4Vq6XFkCvFVjhaKcEb9MNayBZhVQ1DC2nGm2pntwHynPgiinRwBWz3oDe8UhXRqqJqVqLCkJNCE5PRG827528sSD",
  "key5": "5yFD3GdpjP9TimDxRhf4CnCzH22aGtW4rU22c5XLFCPtJFPLj28ecTnue56tztgGsYtJ9g3oJ8PB9LkURzXSZU1w",
  "key6": "3qPbbfWzm8zbn3HjNtsuVA9vyBqLxiiYEq2ghTb9oVNXic4EBrodAPQLxyzytw4HxFz7HULzRX9t6A1oYUUqPNVp",
  "key7": "3KLgyNKtgzAXb14SE5P8fkAzEea7g1vPUPo7KzKJuXCEPhWDYL6UGZTj1sWPAgjYwijvpUtirNkzxpcyt7dMxkWx",
  "key8": "4KQD9pKFV9DApzQjzYejnKryorMUHTdf1C3q5sZLNZi3hR3mewDejx7hTE52czpjQvDFLH8n25EXF7M2FUZA6iY5",
  "key9": "5WLtPinjqDTvcf7Pbe3vs8VQb8tsAU4QKaq5YopdDhmCzjL6tH6hzkt41DorUGpcCKAtpXKZj6PfuGNPpHyZVebJ",
  "key10": "R4vmMkryhJREZuoJRW6EUTyCZZ6JAXDWnaasFA8gtmwvVCiiiXVJoSDmztJ4AP96m48TYQLdRasNT7LKadPzmhz",
  "key11": "56P5wBbpJM8Hn8L3tkTD8V5sCv5ndZYHbdq3BgNgDX1ArdceW4HhqqtxLphTJWWY5d1UbXz1XjQeGHSco5ssiHfD",
  "key12": "4MgCtXraJyVdewfTtQWv5ecpbb8Y3vvz19ntZCr7KxLFEYL4tneRzERHcUc4a2TzSgRxq6QyjjTxFWfgcp5ZchFN",
  "key13": "4zMftmK4mrhNm9HqmP1KGsiCHMEccQLqTKW4GKY3RHeY5CBhKoFGhRnSLpor5nfsok6cuGrugJXPMTJMv6e1d91z",
  "key14": "56RX4aNTJb3dFpiEBmGTYBga8ZfsxDrUd8tFpo3ATHMetv12vxVms6BqerFFp6nkEfgFGB9W4SCE5iJrtgnuCFpg",
  "key15": "3J4qahxRwDXNyrGcByDqdVmCBrKPjGmsJACUT4PKKgqF5euCTHzkPb7uX7m9prtyXzu2uGrnEmDhvZ6zgZwRNMAx",
  "key16": "2PTqPaYbBAWYbmT6SuYCDmJqres74roaZFbGGrAGemYZWHjkqrYQ4k6jL1XA5eUapxZehLsu2TPyp7AzFaCdmBMt",
  "key17": "2ApBnqFWGnvCbgdzvFc5A7fBgkCwmU17eU8fkG9GdkseUmewj5YNxJFMeTXZH5TnhYCHcVu3MWhGCCwSXGzGdzox",
  "key18": "3rkL3SoP5cgWCU7pjjcgQPnzPfQqeL1eH1WdtqYSsm1XobHbyaj3N1paJzzsHieUB5W4s2PPxLR2j9gsKZTsBcG4",
  "key19": "4NTxTCgB7Ghnwm2B8pu2JcRu1w75v2v8Sp6Q1ru5iv9C8DnZgkB9ik78V5wPXbXodpWZCt6aABFFEDXbnhLvRcgM",
  "key20": "64vwJTCxePrkK3zpLRJdFweAn97mMqPVE3bMUSJZSVfD7neAk8cdqrPsNZZnYG1JrsQyo3b1g5k4HQqbGMaM6TGj",
  "key21": "2E855thyDM4ojArMF3W7X695j3naievY7B9QrZQmVQN1P7whcjqgb33H32U1kQdADUEyjdZue9kuJz76q6PgrUqr",
  "key22": "3noQ9sztgeWZMbjujFSmrVLkAxw3yHCypkYr1XMdCcxzKhv4EhZsHb8VeqBrHfbMfZSdasCdxf481pZLDCLRnTXf",
  "key23": "ZEsyXq8L3Y3k38H2zNnEKHXjUcb29wRWiRkRKfgWcuygtCV1FdKPaCzaDqWTZihf2WSgzaWbTHPLsorfmwSjRqw",
  "key24": "5hoW9orSMFD4RGeK7WFwd1hyyrSgjY1gPdRXzAp51uFFycmze9uA7K1a4AiEGSbTQowxzwm3Et8VRGnpqDb5QXyH",
  "key25": "62wmMroANYurEV7hSfesRBhHMZFnJSjKYYb6S1VhQFg2g9bXHR9N71yLGvT85ooguZThy7gtPRjErfAHtS8ydESn",
  "key26": "4sjQyTPzse32xPPfuJNzaXa4XukCjhN4kgunJZGHiQcqqGYJJfRo5Lwp99DYNEKPNFQFWQLXnML5vHp1WFqkZqwn",
  "key27": "4zGU3fmymby4Pd4xsuy33CxcbPPDrAKkXa1Xvs8EVLXjtxS27NLRfQfF3amsYtLZTYyvzNn34saVtEgsDTmNQr9X",
  "key28": "5nRZGSNdvJQ12EbKth7QDezqsHoxLn1F14tG3MKN4aLMxHkqmhjsjir6AtuevxhJ8KUEyyJ11Emrj69ep6LdwBR3",
  "key29": "2PspwbUfwXhVhyR7sULeUWRzsmMArVZkzsPMTv1XiDRLW62ArDsXhkspesoKGEXVpcPs18nmNBwVvSGoNW9b98Uq",
  "key30": "5YMwU3maEz4B5ZhBt61QQgd9XRHsZf3mszkUDznJ3TJY6ixdMMecHX58M9BruRuxMZSLBS88pUzLWzUM51Ecfg3C",
  "key31": "4WXk1bEcJt8s8zTS4ztoUUsQjRQKNpK73nCHVmbEeRFkLMF9xz4pes8KyQwAGNZ79r4VfRoVn4HL9rGZVKZe4Q7p",
  "key32": "2G4MvRo98g9Ta9i8v72JtTGsxy5ccoSvLweogdeD1WXAxu7zbLkk1Jhb94LCE56byKanBJcYt8gB5wrFnsoU3Sy8",
  "key33": "kFnE1Fv1T51V2Azu83ru3ySrjxa8WfftkAw9LavFnJD5tXpTxpTHgfBn8wsL8vzuwvKYWMgaiyYKRMHm9Zz6TJ7",
  "key34": "3TEtDZjV3rWS3LVvAQdjeuoogPG6vPzqNENcB5zGefb16B9SUoaWbD3tSZm7crhHQEpkcZ9rMw2T8Ya5cKLWsSxe",
  "key35": "362TdUHCJrU8FFNbTsapJvkv4edKjRd45Dowxa6NcPH4reEeCWUvWp8m9nzPnMnL4N2BkCNdnjQQjdmwq3CVDLke",
  "key36": "5tVp3AX8R5v8fW45Q5wAeZirQzYyb3URi7RHb9fBpuymCc1MyZyvefPwCWPS2hDAykjXLM8CHABuoWqLXgy6kJYz",
  "key37": "4oPu4BAX1MeKvfSEhJXRycPwVSmcS8qEPTmZz82GFNhUecaRiBFYsko29KNZAQzzG6zdsT38Mv4ahBwNRtY4QXV5",
  "key38": "2htwSLoyqmYg3LkouCZ4TXMmXwDxwNjqhDarUXo9Ea39J9M6qidEoPfa8Aox4Z25mm5jpqJTLMnzsVo65Fioj3t5",
  "key39": "27UKkNck3rbYRU9nNe45AayfJt6x5ZD1vaZSUr7rRuwpQ1KHTEEsQ7WZCWPGTk755MhKZv2hgeVNQi2kXWfPUpzd",
  "key40": "4eXhWqEi1ab7WykpS2QceTunbcP8HtFsJpp9qJtLEJHjyYCmqcYiQ6G5goWh8FGzJPNfm6oS1fwgJqXkoExUjHiY",
  "key41": "4CyNdwkXPkw8DnKBipM9VrNunYqUHmbWR4SDtxb8RQzSsJoRXBteX6enedCwBFmb7rKVHjqxTRseBZTcYGCHHCdD",
  "key42": "4caqYT6t3nGPHWJWp1CJsGFbmxSj7nnRiZJ3eAxrjUti94tJyBJ8Dz6V72ujgLM8Q3AgQEsBXGfShiGpPHzvozFD",
  "key43": "5z4ocPf7RuFjxBayqndWhMsDn4UUtWYAuUpTKrgapXQ9gXLDizTeCcSF7bQ5MK23ToHXbr6iCNsh9S3XzFZjtcQR",
  "key44": "kLRotSDzkGbfpBa6NZLvwDV3WhV9RyMkKeB6e4hPDut5VAsV1aRZvKaBFhqPcwHq5NMVa3CXxZbjD3J8w2yiuiN",
  "key45": "4JcTBiCvfcFck9HQSgMYFvP24twtaJceG36VLGDGCLSfmxycGRn1NwLzJdf5NuRZUfEEWj6ow241CA73mF46c69S",
  "key46": "55n7TWUhnLrBmK7bgrirftW6ciP9MsxKdNFDXWMmY9WDuNR4GevPqVZPGPxYRVJDZzSacwQY29tyzNwvPZH86wG2"
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
