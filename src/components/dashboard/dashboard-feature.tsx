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
    "25WYDbepioccBP9TKmUY7bu9Rvotsge7wdWcnXypgPQSg6vf665bQZE9MqGYNsGwU4qzbvYncxo88SwhmJh2Xcrv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "356vLaxwegGLPW9grhfwYptT7DJXwbaU4FJqEgmWxzD6jfEWMUnDD4h6WLhSXLMztVJUuYjYkYCLH59WpAh3EsXR",
  "key1": "cgaKgjz5JWF4QR16er3B2bX4ikUWV7BYSL6QLWHEo22fdFFeqcVMATDeh8852GWe55YibQHtzsQkQe1es8daGXg",
  "key2": "2BpgTK2kmqa5gR6utm78E3mtUmSFGpgdTUjWRjzbMWwyt3huLcEkTKo9euzosqWmjFHmjHAvNQVqhB7PAdEMdnMz",
  "key3": "5K5ZbpUtEXCKdpgNVRF5mq9iS594ZxkQ9VfYpwumtgQS23CbVDMZ9Qxc5Be68S8Jiukv4ke6YMEMveTPP67g6Pyq",
  "key4": "5TGfcy77Bu4BZVLAkbYXtRUkXtWmVusshY6kfos6uEa1nzpVkGk9K3asdPGc5MY9SPLavvkQPEzHFJ4Wu2xgR3VV",
  "key5": "2Mv1BRoUD24wD9sbUGY3weKTd2qsaSokooSp7NW44CXVJviAwjfQN4snjn6z7gtuHTRWCfRm7Jxx5KAdBcgj2iT2",
  "key6": "4yTJNiFstCegQ5T3kEwiWLASggeaPWViV8WSHtaPyzQgLBAZh6wByxprzNae9RxcbFcxs5a7yP3VvWqfgPj1wPbd",
  "key7": "3EWSXYxZcydJGQFshwPbpzCogAWgy7aRJRgy9NndxjJuwppuk5LzH5bNkVfJv8SK1uFCjeeUNmnUcaQfyUaa7iYR",
  "key8": "5SgG3tsT9b45vuWGU1rbN3B6JTeCCSGSuAv1iTbC2EJqRxe9iwcE7vhDhFdzqPYskJzDdLqxQkCwVDC3aRhiyRfZ",
  "key9": "BQoj52CVGZHt7RdgpwuqD5VDQ4BJZQ1bkjG2SiZn653Cr9vzT8yhpWBW1eRUdkPLNN7NGqdMsirVc3kpRKC65av",
  "key10": "4KrR6n1SULbPPbidcYo92ReaKKFCCTt5sbmJHc3mdaYh3KtitmrL9hwRTRuVGQYSQKsQn46Y2qzGy7mdZrDwZqJ8",
  "key11": "5i4euZPHsxf3NEUrDCVgWb7sUfGZti7dtSSWoAX2rcCwNNEErc3QE58ozQ9rVGZc7VmFm3PN5X3M2rQowRpC8Qid",
  "key12": "5iVxTvizSorqFjnMSuD6sYHB7gSwp5Rj58yqjysNB1kDsk6bRVohQJbqNfa8isw8Y6CRAmoCZBFiheJMcQZ6MPKy",
  "key13": "C7RKcqiszZLnsMMG1EakRwhgqozBMu8MMSthBKzdZ9ykLceyoEtPCn5LsiU2UoeJmJJN7veZWafihgvNMWKA3qU",
  "key14": "5fA4kuChb6DwcH6APGMU6ycVPu4kp5NexQT1E9s9wJgS9ZUyxRyqay7N2s7WgePdHgReRVx5vn4zNq2ezxps9te9",
  "key15": "2b4z5EbEeCsqhreqF4iNCP3GPJsTcvC8qvajLW4C8913GbMtxSpoCkaThvj4JnWErR4v2K1erTgwzfUC9Kk1Ni9A",
  "key16": "5GHb3zFYmSkQisXWcbDRTG6ELYQA4hz2sWdVsJGCobvpKf2V7XZzp3qLhbzsovDAoAmuwcf6q8KvP8i3xpcXf74R",
  "key17": "tRsk17qqkhNwEbqjGgswTPBewK6grkCch8ahPUhxwocLprZk3n2UN6DumRs7mmUXFRq6mu5HzuCEsVZ5jyFvrie",
  "key18": "4q8JRhdcCUJvDFPWKfxDUbDCjL2zP3Uzv4sv9oPezmySYb126P4dTUhTWzKuA18Phg2TsgT83iHkqAkaxuiceqSM",
  "key19": "4QSQvGvb6dK3Ro9SrwW4aGUaGJ7pzYDe9eoTCQdWfDsYg8nnLmt3eeB28MEyygY9s6DnrKQ9iNDSYmZH9k43BdGv",
  "key20": "5u28X3FhkXox2JeoYqZE4bGZg2u9g7UpR4EfoJEJ8NkTmtVLXRTEhqWEp2T4TgX8hdHX6pfkMKP4YUgJocR5SJio",
  "key21": "BMxnAP2GttKVMwWdsoUj9jXiVJzetZrWHeJC1U4DS67NC2CrfjzgoV9buCjojyfUEwK8vP8NpQfowcLvsajaFaJ",
  "key22": "3HJP6mPM7mvf7gNWPNZLJe5knAQtW7wLF8rTzbFWgfBmFU6STc2GRR2oF1CK9tnNdfjSpLxT48oAgSx4ogbDeuoF",
  "key23": "4EuXRr6PEN3EVEBReXUVsMrpP4qRfHbjBUNUKcHWUhvhwncSbZiaEL3MtsCBm5MXfTcb21TCouEQQg5dQpStNQfE",
  "key24": "3Yc7NLcuRhFxYvhtr3axn8napfXX9fu9jXiqouDLffDpexMhVcFTYBbAj5er9qfq7NMTD62AqTph6RJ6nh6CbuGQ",
  "key25": "3btmyvdSXPKqAK68YFk2vd2THEmq4ntmcmQjgrcGEng7c2SPJHAVU26nUdaKHbxXD6uKZRzCdVCJs8d19wAHd3e4",
  "key26": "2rc4toRjyVEfLPP6HdYxTifar3Qcz7tBF3PDV5HELAkHtSCDxS7PLaYZpwSoxjRka1fYH3EdeMwUb2YXbncayYdL",
  "key27": "4GGedoAtjdQXDzbbgLRBPZdfQ3PfyvN6TzEtGfDHpBzAgnmowemdU7d48fh59bLqo3UaCSgG7pn7sFEqdFNQ7AZE",
  "key28": "3JAYJaU2Hrk3n3XMEA3Si1MY7rYA7Yr4MxZxVRfm3zRgHGf9cVY1H57XZPRE5qGt3NZdAHjtcHrFkhUQdCEvS8LA",
  "key29": "Z9uF5Bw9qEF4z2YqqY6NTd8WDeLWAQ4iNuGcrXRwMte1v6TvDW7sDDvcjwPDNohsvwsT4SZMkPDtHP3HZzqU3Mw",
  "key30": "2FbqGMaFzV2cTY33g4zNjpthzK546Hc9v8WbWbAjVv9gtAPcKJ7ScHvUs5um9MgXzoAZCCVe2BHhVGg572g32F99",
  "key31": "2Gvkijm5pctV6UWmXMCStLoveHbLRnHyZrkrL1NHnsgwiQT7VLEY5ToF7jCnQm95L64PhgL5QbNUK5dzXVwL2N3Y",
  "key32": "5D2RwjvM3Fb1yAjbNsJYv9zUemPJeUWeLc7KW3gcp4s7CFHwZZ2vEWyeiEcXFiVjHBwX2EqAiYDWuW3QZRxbTD89",
  "key33": "2y1gF4JzAXdtQVFa53God3bVzuZYzJc1xUcRtrCMXa3z3EgFwUiiAbD8TKTvoDmannLXZBHNmouJigmZWQZom6C7",
  "key34": "43LWiJ7hZZkk5hVrceTxv2knGsvB1XWQ1s9MZ9K4Pk54ZEThaCNidBQCxtf8zGVUknP1xiMLdcvnDAMpHs5ncUVG",
  "key35": "3wV553x4oTmS88qPVyLSVeMwS65x2AtfUhoXkr1xc1Aftey2pb4VfiorY4GY72M8TVN2FDiL13F34A2Pt6BpFJNi",
  "key36": "5YdmNWvkujxuMD2K1zLK35T6VE4y9DErABm6eKwdsgFpPHd5CVn8HsGDj8eWTFBfVKJcPGLNR7FqfAreW8V655Ve",
  "key37": "4QaWbYkSYHmywzdWK1FWuxH1mL1E4AN274TJggfE513nZtrr8GvY17ZYy5W3j5dzZTxo2LHdrKBgrWg4P4QttibD",
  "key38": "ypQ5DhCNC3nW9gzgJvwcbWbLr5PhKS1NVediizgtaap3cbPfLZmsau68f9RUNaqUUBUfQa2hQp1YF2sPj9zb1LQ",
  "key39": "55TeYqcJhwvxehV3WzzgXkEpiV8QiHjjNcCTV91BBpsLAUpWG2WkUncRP3MqDASngfUmqnWEME7Pw5USticeT8K4",
  "key40": "13kEs8fi289NckEcwkjvePeuSuynsfpeSs8JAySuhnJ3AbVoxQMrGSjVWxtfbvChvQqgi5UxSCmBwwtueRx41xC"
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
