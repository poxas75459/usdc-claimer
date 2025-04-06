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
    "3QB5JoVjEmowvYR27d9PEtxwn324AJuasHz9pJCeg6LCyvrwRQY4XaKqzggp5okLTNvSEerLUvvSyegqEFUTrJqk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ff32rzZfdD71A3GNRwPDAx6AkDn2kyRV5KUGYDmjQJMyKSKTzVgLLrSVy3DZ54tKneKHZnyEsaJudazmKs5SLBa",
  "key1": "4a6RyDEPaejaqNp2cVM5TQQoX7DLCnTXz2JcLmx8Gbmb5J5nDsK3xpGP3eMCToaTkPHNLqitDmZPknpkbBXsELbu",
  "key2": "3houttE3Lo6LcXipN8tLDSmeGCkzkoT5FgEQmRdjpj11TTdPf1oCcRaJq8NAVTEhVbY85wtkpE67tFmBNVLfctZ7",
  "key3": "3c5keC9tgmCRuHrSaVSLpcMGQ9aTDkccDu1Tg8wjXNkoG8j95W1qEsLJmZtjCZFSxSZrYVyi4jpbgC3UcNBxcuzo",
  "key4": "21K5U6TvC7ikJJEiYydxbKwqbvZcVrLwV85jDogNJvxAQrZHMFMVSTFJt9NLU1F72DeSYfUBVBjQjPGBCQCBEKZ7",
  "key5": "4qY3p6bCdwk3VS7bufTwnPjZft4zmzQMsEJAcxMcWXQAHnm7aFSQZqrAGrFTt5UwApjNa2E2AQ6guezd3j5Kz8ya",
  "key6": "3bxyEM4bTFQAEL97Y15dGsSa5qNWuxbbEUadDFQDKVV3fnxCpZXDqRbfxzFre6bUxBxcDVbiTXX8ouvcGC7LcA1A",
  "key7": "6519hF72gFHCEZTuY97idkQGbFVmSeuTrUXDY3pV4pRup8CNzmyFd2fxXPmanrMAp1T5A7j4xLfh5j98r8GCGBXY",
  "key8": "CSaUim8bmicpqrBbnEVi6nuvzTWdo8sU8ggePxFa7AZ14Z6Ji71uACNBJjj2DHu66SEDLz1iFVkuFurotUYyQBF",
  "key9": "2nGRPJKeykbj495WQeGfJZwwZKXwjbgrRodSyq31vikAMU663Yp5Gu2FpbB5yxZWAEc42mQawj8Svn4JU3q44dmC",
  "key10": "AXVEntdnFRVUfir1Rg6txfd19un2ms3DhfGfNq67MsAxtThumY9cpA66iZ2a8AwHKrtPdZadSekepUVCuhSSwu5",
  "key11": "3UUV6jQ3UMDtkFVQMzgXThiAaVxFGzzG7jo2prFPUF647jgY1BoVE6PJHAh1m5eUcAHNmmBXEvqDWs6GymAcwLYc",
  "key12": "3vdD4ND7txCvUuBN9RxVCAxurk2T4KreU3bBpBUR9Mpxx7SKZe7KHw2mZDyzkk8s38wththb1TEruiohKgRfkjNJ",
  "key13": "5Xg8jk7S6zGwMGrYThUEXt9XdXV2s5Qvs7NcnAnRgFBGWBUrAWq6k48BBLKZhjSJtKf9DiPd3CjyBf1hY18LMunq",
  "key14": "2p3w3AAnj44BLAZJgCjS4VptqC8g1Urw4PJiGnu4H2faYHpqjksHBrRWMjtmg6ZCPutPaMV9w2xynQwRFinpe4Qz",
  "key15": "3aj8i9McFTQmgnsmaYA5xw6scWWmG5HwhotNTzvAyZ9bRAkF6ytywk6e2voHyr6TJCAHVkjX9XLdg8BJ7rnCQ7XQ",
  "key16": "5nABg8ZCVu9KWgg1oLDFi49d39aQwhpbpjY4mRGBgqB3Jum7cherRo2ZDdFgeUCQ7LSRgYpoFCDLhcWPpdmvMXq1",
  "key17": "5DHk1wFzVpihnfp2VDs2LBhkwavaEtCqRQdSDfifQCepH4BkjAjDpZsXLV3Ny3q9tqm1gKdv4Jm9WwhP6hbxGMqa",
  "key18": "5CLcZYzms3MxrnYRouNd9Wop84wEfGU4DLFP4UEmcwKeYy2GyqzgDgpopV5xfvziJzpN6NE3rsujQnCmsZEE1Lou",
  "key19": "4wgLW4T3SZFTsEBCV9e7AMVkwsu8k5vm1GUE6TkGWFq5uuKonZEuB6aafVRMky56M6jApvvvrexiopjrQi9Q9yVJ",
  "key20": "UaSNgyZzLdEmUwByShqWUZQ5m9MdW4LpVaXxhVP7xxjuhH4sVuFrPZXjdkfN5xaFRYqxw7egpFFfBqNxT8WhKCM",
  "key21": "rc36k4HkQTjW9dAxZ5xoD5iHPGjkuBcafC5FTzyfekrFt94TvZyWAkfoNrqdaxhKFaisR9WDP3kwGt15kERNtYq",
  "key22": "5WxDZXHYsf89i1WTCtS3SAz1aVUG5P9NsNKj5GC5JpNsUzxsFubnvU4hfGXKDasFG5W9B7ApHVgdidYUBMHWNhKJ",
  "key23": "669pRJr2vZy1GRWUf7v2QQGo3akjzhSWchAS3aX83qR3g85XYBAXqoAgzSxXyofxn25NNa8ukpqNJzFk95g655Lb",
  "key24": "5GWJUURh4dZfPMXciDwsqyDBY4TekvuFxXkAgoyqAxiBnfEfEAQbJ8XbXgwHTNYbAM41MSg9CnAUy3VymaVaLNqQ",
  "key25": "3HHbsP38mu51g1bJqjM3PSh9NiXHqLAb5EoDzsdnFowSadeNC26fMnT74Br1BigH3maF4howCVJESUrNqh4dpFVt",
  "key26": "3yVXtszjYqabDcAH6NaQ1Jp7EYM3B3M8T4Eonu7NJBepZrNFJ5ZvFPUUkeXzdrJ5P1JSqipvzDP6rzvpVL2E6cAs",
  "key27": "24AQz8SWVhqhDKJYoC9zWPDabXhDtkZL36zdMsd4yD4Smti2xzzSaPFSEsbdWHEd9EiuzBJdNm9UxD2ZmaH6GJHF",
  "key28": "5QLwTK91Y1ScAGoLe3faTCYM4me5EZfhbdBNzxGSbqE9E3kcTFwLZLq84wMtSAhW4jkXtEJ3LMbSTDegi56USMco",
  "key29": "5rD5nXKk5Lt5R7jmNJ548FBvJhghuTuX14yKiGa9QodVKMPgzAUjzDSgbr2H3fESRazcAZDF7H9C2z5Nr7JcV2CU",
  "key30": "pgem1W6YZphsTVLQwC2EwDZyeyefMY61YneaRqGyKx6cXiQ4PXPEsYL6bFGXJynnrq2M2cgy1fLVFm8mWpZzG1C",
  "key31": "o1opxrnd1cGUR395BxM2cTwAbWmX9LEFe67HCMX8vjNWoZReiCLFz4BYr8XqqcNJyGrcPkz2ku6hoKsWq7CEexh",
  "key32": "5ZdMhs8bsezvZA9kh1rvzYo9uyHdebPC7Gp6saBVy5Jvh6LYSfnJymqrFCJtET1C1xx6iDZ8rkpe1ixJzMBRDgA8",
  "key33": "RRoYCWiYgeCoaGZYjpnUKpBq4sEtEM2GqyphcybcqjQtMQm7ceCmPphGXrwoZpBLfzLE2YQ5Nr2yC9DgVhHnqwz",
  "key34": "k6BrcKQbB26VAWczMyMi3xyDW5BDgQfJgW7mEbJGSZK6MdcxrfDt5v1b6ZSJuGAb3VhXeC8x1GtrJfzy8teQ2ik",
  "key35": "65WYzY3C6nTPBJjJvVjxvEyZwLmXmyiT4Q3AmkP9Uj26DNuhV7qpxNqfD1MGZKq8dmY4CjwCTAiuDtaBD636inQT",
  "key36": "4JA4PsCDJUJhJ5JwokiMUcGVMQfVzoUBrntHKk3s5cjat8gXGhXFrhCXvra36dTfZB2DHbfVy8j7VVRHUqX7owYd",
  "key37": "49fgdqFjJ3ZNHfomaCeMB2nBm9JQPvvUjoWyTBCrz4gV84dhbmnteMgpvCk8MiZ9L43iEQnoQ8x3uhaSkNVjnQtR",
  "key38": "4nEB8xXBtcita89KbqwUT98CWaddEfLcQzAuaW9UBZER9bfjhfuffWBRXuWVs57REeetwjboB17SBVJLskbPz9Wb",
  "key39": "2EC83x2rbT6DMbYBDtD4CLz739J3S4poUQ1v5yoYk6hD8sKcL1pLAjARMp84NEpXZvWGNspAaBFJAi6P4Xy97VYg",
  "key40": "2obvNGA4FvRmp4wMSsqQsbt6kdgMapA1uRokNHrLeoUmXHZSeWVVBnJ1sQ1bBqjCSwhDih8CK9NpbeUizkN3LtBt"
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
