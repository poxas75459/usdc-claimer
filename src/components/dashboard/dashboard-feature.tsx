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
    "LKgyymjDppq6UZGYdqtxLeAtrPnT6nPVxfzwx817WLaErUpbjcctKDWEyDFXe18kRVu5sLkQ4UQhkxE1irRw33x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "73wkqNvKEAAy7Wap4W8XnZEmrk6TeBiCncrLULGTS5NFZUohqFQqkaeduGMVQF6g5JuD6dCiN5gUWVFRw8tCcD4",
  "key1": "2RZrfiZLZYekQHLRLtrpcXWCMFw9Vq9UUdwnG3EHoyuWZNgkod2viqmLBekmDaBgZrdu7tFJCSFgSmA35ZH8Ktk4",
  "key2": "26rD8VXMnsoegRuAhbWMcsc8ACo1KJu8vu2rxtrno7JfecZPKnDjYMh9USQDP2JG7tZ5XcnxZQ6nUiaKY58n5kpd",
  "key3": "8HQCcckAhaZnDpnvkjDoBM5ib2x3F8PncEjVsdkf2Zvm8J1H1GaL95zCnUFGuWp481QmsNmt9kSceJqAgv5UMit",
  "key4": "x5xzGGhhHbSKJGUFfRUHjizgE5V97GhHHFgpVD4UpDBFQ1PHw749jA7cDWHfXPC8aVLGdLGcuUMyQ2cUaaS7Rb7",
  "key5": "62wmLA57wn812kDkZXg6unhMAYRTSdiGra96H1aHPZNPcuQnuN87CVRU4jsUdp4chQ2Ue8C4w1ZaB9VU84YukaPm",
  "key6": "5sRgDVqp6apX3dgXYw9AM4qKQYfsCc9zDj1LBL1C5YLYsUaTuH5DjCzRHyUvG1DeKcnXj1P1ECbH4JLUTGAH5iTv",
  "key7": "3XjQ938ectwyz2p6ht4nw4KeRmq3VgvGg4Vu3SBA4FxSDrQJLUXGerCmm6we8wyWnqkCAC4VTvTw24Q9qaGUK3Kt",
  "key8": "4bnPp6WvmqeacjyHVs6JDaJYBB69HPtgh2YmPhC22LxGWYc8oSQn245qsyG41sNeLcUNMCYd1AdAaak59CbWyDNN",
  "key9": "3pnV5tNVBiFCX6Wooms3yUgh3CSLVGxhN6x5aSgJsLTR87Y7GQCDbTeva3vfobcQkJJws5KNxEtCWckpbKnk9fuG",
  "key10": "4xrWBNW6pAdCUeqmsqz47knfrx2FUPpTAcqjMYbyTSeU3K5q95QR45nsRroHYEtES8emxjkgZqGqWbRx1tvZCbGK",
  "key11": "5CyxxmGyZwJHwanxYiidXvVcbt2AvJ9g2vGcWwL2gf4QWGmA8P38TAhkWuJuTqyiB3bWYSbpJNSKsrFz5MWszLni",
  "key12": "3TV6SHEcP5KnGek1tphfxES42Cj7gw48crM2jr4Cqc9umS71mi9s7rfRqq3A3rU7JJ9heSTZQvwwm2vWhrgfp1HS",
  "key13": "4j1AbfNGxqk1PoPckShqFVVQmZxRnVtA3Q1Z3p2siAq9NfrWJ49Q41hoYPtmZvwgZ4BK87oKrDKonra16ZH3TACz",
  "key14": "2KZgTmf1BJg9GzV9GdagAzzbbEV6qiszN6gikRSTj4CFHsNDzJ6h54HZEG6tZPDNoozfUtufMffSKnwx9kggGGFM",
  "key15": "5ETrbv7qfxGi54u8fmntWr5TWc376VBmEzujK7m7iAiB6L4JG6TuNuJmzsF8fDLU6Uk6x4nNxStbdwyzCMC9Pq8w",
  "key16": "55MqhL3fBSH24cSzXwtou1uQxbeEGBcd2vbdpRrHfupH4UyUKQ9rZCNNQyMG5c469x5LHPSZvPfyHZjimwinmMHn",
  "key17": "4MY7QQ6Yq7WiA34NcB5b9YwZxpCFBurVpAUD9UCwXPNbX48aJArwKnFPmEHShb7dtF21VYWVQxAzeZKwg2z2wGum",
  "key18": "63G8AW9X4viJmcfh7tj7SEAXnDeE8oyqMYQudNcMN4dqPp8gHZWxd97VViLwLfuW43H3cfco1qXXsYWbuc6xFqeF",
  "key19": "2ER4hJ2TANe2fN6ENKk7t9m7MnLRdQECH2qwm2vf8MY9NSom2Q86jhCJWkdzhaaaK2sduenCiYra3odJW2Am1Y9L",
  "key20": "mR65cGbGv9hgEM6fYva1JwF9VPXokteQ5ywdZfo1ogCSHPmfQyPbCtYkuu13nHo5YL47pNTffjK1kjh44wwfDqu",
  "key21": "9YxEqtCdbcHvdhX9qn3atse8J7JZFKuKnXye3838APPNh3quK3oJHSkUyurQ1gcumdtubhDHRnfxW2DU6255PC7",
  "key22": "rDGMD9V4wqJcWZGKbsDdcJTudFVC9P2bgr723K7xeCTdN439t2QG3QeEd2DzyJGGYinxeZLytxy45JmsUz8KzmN",
  "key23": "3tu2hAkuWWQheVtSSn4gThSoRi5zpjP658v9EfzUpMzgSDSC2uPrLzEfG2B69yBakPQ9J14D6gpUsnqgn3GLk7tP",
  "key24": "2UAJSve8Qfi89dgqQzCgCtc1iode5Ma2pHCaU6rFS5QabHFmPXQS35EJYN2TEWBEELEzfoyh7b6RecBv45cKJwL5",
  "key25": "4TM7KtVq18ctfiorhNorguyKL6Aa4S7nSEaPVPpfasoBtA9JNvuwHgeMxi3anvNr3hjU1YCSzhzT1zSFS49rjnhT",
  "key26": "4Z19ss5kSUvTSu1QJQRw74NEfMqZrcC7pDKofL7tx1fKMd9buZuS5LBs9SBsUnBVWHQRTYniSi2xA4MNDc6mpYN7",
  "key27": "5xouBPW1FUgUhbijYRmN5RFGLH818wFv15taF6BDRks5Cj4tbUhDKM9g9JFKvXhYT9PbjpGiVJYW4XMR2ZMFNKsB",
  "key28": "5vfFYAcBi6kUpLz3kx1gZYZKmcuycTHMyCUNmhhg45nso5pRDWdh98ig2XLfR4kqQorFqEzzQL3v6m8RHisQaUfc",
  "key29": "2Krke69rvvdJH8G8qTadiYzzRfKbe1iqcyRK3DSj4YrKwngV2C4GK8nFNgkkwycxAaHbwgvuBdbVddvZKMoYUWUk",
  "key30": "3Jho9Znkh6ZFSQrKnpQf292Mqf4677eNCtJp8GCwzojn9LwDk1hPYqws81ypndTUNDq32j83mXZKwBiy5AjorkoL",
  "key31": "3MiL5umGdBPzeA8CjnmFT1mdGiZcum5HxpCEEw8w1unQ38UpqTvTzo9K2wnacUgp2667MT7YaWpPWVPGxvVm3pRH",
  "key32": "YsycXZq1aLuNSqh68H8dcf4ovK87Hca8fDk7fQHccyZKUb7SyCrcAsgruMdNgavFbQDH4r7F4Xs87qvia7FLsNL",
  "key33": "2bUhpaLMJydnhaBZw3tZn8q6qsMwnCStWnHbYyKYG1MXpHgmsyjaaSK3vqfDQe2YmAD18QpvaYEWXHKxiq42m2HP",
  "key34": "3NXSWKDvPPCQ8PfSrjrUBGo1zjnUjtUNvsynfSQdWj4WH4pEUuFj7PUthxEFkr3cBz3fsFcC71brByYy3RxyirwV",
  "key35": "3Z51f2DvTW4khStFy7JD51JnzSRBTWJUH6XEdakw1UVU3vNjeEFVprRb6mkLhPfRQe4MxVQBmpegobmmMUkS9KHp",
  "key36": "3YmFJuHaSSWczMWc4RZwznSgLXUSpxNG4X6oK1xQk5NPR6Tgwj15reHTuJuBBvHdNGSZexedahwtHJTTk4hRT24a",
  "key37": "2Gokuwhh1wt7FwSw9WrnXcDpCvC3imhF4wZS6xEQfz2mfhMkRCM8S88RQS6uawx9jwmvjeGAP4Au3BSJqVj8StEt",
  "key38": "nD4ScCydYSYfwqZij46WQUspFHX35fYJ4cjbr5A8unnWC1TsNvHPND8asJaDFNXBzTbiTABeXXDFqHhJ9Lxrbi5",
  "key39": "8kgbtoFfdeEVqi5V1bRypoXWudvEjghyLLK4cFuzTjvgNyB1hFjK7nmwTXK3zcfCizMrmy4YeMWQKyXFxq5Ms2c",
  "key40": "4HPxpoNJsqZznNRT7pRmjSyR1mGqsjKsWnAsiEX3cNTX1V4WFbzaPy5LkAJT81tGLDhociV8jnbFZrkYJ39tuKdn",
  "key41": "67QLgSCfx9VuxEWC4EUP6y3GucmL5WbLrtJoHJ4214jwtdmMYyU48PKX56kn9zkHMxNxbZ8NGkwxhvnaZaL1kCNw",
  "key42": "3otKH8GEzBtMqgxDYL1Eex5Eb14E6BGfAGJC9ratzs8jMpNVpKHtmEeYEE1KMobup97Wn616ersdrZkLvHZ7xh98",
  "key43": "q7bDunL29zbnYPRqzRsZHz3Ewt5zmRbdbN1qSAxX2Mu3wviPLaZueceac8sSepAha5ZbJ2KxvFn1yoHZCzYjXMe",
  "key44": "4wtDti62CpXzBhz4ssfdKQLax66EwRHTpBARZw66wbXdbGV8UhvSRavJtjCycfA3ewZUCwtdwxbSUfwo2EQAJcR5",
  "key45": "2BPL6HNBwAt9cU5zYSy8QbgHch6DPq5GcuA3q3iTKTiaoWV6Hf1aMskynueRnfsZ88irsWcfeoFRBVVQSae9vBja"
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
