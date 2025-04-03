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
    "5tqjtZw3bHB7MG5VrnGryHEf2xUA8y48JZGkTbRhMvpSQeo6G7XQmLkkxNMpM223rBgmaHWmBsGkoPUinsUAM8GN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hsnEsmyvjR3NKZGLWBFwQZq7ZhQDySVWAfXfscxTwQKUQKSbXC6b8wJXUGM5YnpkusmHU7BsFziNAV9bFGMJNq1",
  "key1": "41wH4j1YFb17dgWHKg9DqvmxH5D3bCJEfYeYZdDziQ5ZxJyPESdKNvMEQKsQuGLvtdZPhCt8BoX3XD7pnNRYRf2U",
  "key2": "2TnZvMafYmdkjutumg4kajfGUDN7Y9xxZL47hwH3LwwEsh3sQYMaaYYyfuC2bJTbTXQWyxpJhw9dX2M41T2hwQsx",
  "key3": "3Ps3YbutBgkSQZybehDGRMu96mRcdeat3L3t43nXe5fatis2snAXnoRGDREasNLUKcmtmdqHfZJiZ9PN5rsvg4WH",
  "key4": "2Bz1EPYS64Th2t8QisFDmCZogdYXgVTryD6pYUtopWAnb36NdvfuJCsp9ueyExfSBicvM2vZ7qEn7r9gFQPA1Td8",
  "key5": "5ZKYMktywkgBU4thgfH7DszEsDbag9R8MxAsUyqLVJSF2QS4tSNQC7B9jiruPP781EqsRVRYn3up2pp2oUYXvbDh",
  "key6": "3LXjZq6cqDj2N6JgTimZUpQoxTp9uNCduDCHCFZLXWxzNqdSK89ut8c5MPRCLz47XWu88kjQq5TJ5oapTxLJ6NUB",
  "key7": "38N3pGpbw6MjTqzze3Bim6Hz1tvyYf1f7cyTsQrTWZvZzqeKNoVvmVkSdEdhJfaNndNYevqiSiGdaY4uMQtpiQWC",
  "key8": "37R2JsoLCdq6yqtdqLiWioGjqazTJdFeamB3eULtXQ2n6diyrVpJNudDqzvJgdsqf1gpKAKnFFT2mNKX8PHY7Evp",
  "key9": "2wEQjYix7fc4fzYe3vgwrF6i7LSTmB7VgAihy7BLaP5z5hZwgmSazmdidgzjcYjFomZHu8wmTwRhtp6gaUECqR7a",
  "key10": "24XHTFnMUy8oNtKMxyNmVv9UFWt6EtFQGtdQLjqehw199t3LsfKoS1MkEM3ZBHkWh46kk1yxXXNcc8F6KATrxtJ6",
  "key11": "3byvx4jZxSe24ePx7FgBoQeSKzkFtboUjtENEmUd7jDXUUqAWpfNBsTuVDrrhXmgi9LmFmY4eNg6GEjNUCwMvkyU",
  "key12": "4vPDCbbY2SNW1WfFonWz9RHStXJv6dfBPpaevC4DG3ukwGKjT7jegCoq8bFY5K69fnPxZGB1aYN6hK7syL11Qk4n",
  "key13": "56a9QuAHL756g61htkHJ3yQvwpjM9nFtKzprCczo76K9sp1dehbXdYwg7zaAPHFPko9iTAdTciJSfRThZVc26kad",
  "key14": "2yjABA4nBQ6XHxmV22voZwnsCmNdaFz8PTMp9tJktCacdzB13uFfe5EZNGbh9TVUhY8K8o1sK51BVZimV6waHbfb",
  "key15": "4rQL2rAungcgSru34WVg7qdoNc3hPzqbNVK1FdEQPFE5ZYE36QKxNLfmjwyWxtb6LuVemp9yhPB358rBXqNqgVwC",
  "key16": "V3ZNGZ79ETd4RFzGz8CPVTW9Pkr5Yf597FN2huv28npHpMtdbasr1xfGYKck8M5z2tFc4K5xSirF5m59b1bMUXn",
  "key17": "5RokyJp6h9NKnvcq9QzpFQGoo34EfPbs4QYnfkqUX4gGW8xownhmqr3kiQsLWxgfTzzhkJXTyb3Ag5ZBan1y4Bew",
  "key18": "3xv3DLLyjquJ15uCCGY3voPsgPddbApGAHnh1veoUwoLN9jFSnkxgeaYQinM8i595gKTHfXGgNvEwzKUjj6JBkWK",
  "key19": "2zWDCtqdTBbTVvchndKs1ajykGryz5aos32HFE4CSwMGFjBPGqA1PG6H56nM1kuWcDMwws68BYcjCx75Z2cvh6rQ",
  "key20": "5DRcgsm1aQ62RazkLxXsbqCNhbXaDs6JyVY7u18GXoM1f78KDaaErGJd7jvBxyL67MdkwtbkR6X1FWqRnr8GqSP5",
  "key21": "5i7xETmKbUEzkXqR12sVNZNw9TsDvYqSR3QuXsWvZKvKQGGwv9HqgVEr9yhfiw5bEhnG2SNvaT7BvHPBQgcxwrGr",
  "key22": "3XEwn1ufQKehgWpizJbioZMeBojXibkJaqweWLddKjrVcxqJqTvj4xUMTTLM7k6CXSth93i41Aqz7Zwbrdaw4XVu",
  "key23": "4p1NPHuHQjZwG54G1E9PeQEcramhEDgFyHcf7QYnHrqvTt43F4qimAcSd8MueBBPYG8YX1sa6UfoTDEo7MSDphTw",
  "key24": "4gHeNbntgfGhdYUW7Fudosha75wmjP8VdMgU17tQvhmiDcHRK7yK24SdyTsL1zpYgDYmV2xe3H3qmemostTRCteX",
  "key25": "37NUAkTQgfivFR4b4aiTRPkpmXqxWXdpW92BGYtg8tB8MmnWN59FaHXWsak9KMn2PUQpvbxhrqGGkLcAmHCE4XK3",
  "key26": "5pA456CbHaJ67U1nnwjBZ1EGv4WQZzh9Ng8vzhCF42RphmXdPSRnwQcJNLX73unsJ5ZoLFzQV3ZQ3x7cEgseTRkC",
  "key27": "3Hxb5bkq3S7L9FSRS8w8b17GWWN2adMaVeA3vcUThzDPD4Nq6v73x213u9XtTatPFEEeiAxK2Yuer2cgTqqbcLvK",
  "key28": "q3RLWKYmCx1LLoC3T5c8GBkHR47eXiWL52zqXVXSNaPbKw8gasovp3bBrNiPNmzsBwBqbvzqx46V3gA8qT1Kexa",
  "key29": "5Mojwx1betBjVdaQT7PwpkWYS8dFew66GeMRDbVADuZ87eCt4e2QZBrgYarcnG4NMYDQ52KguFYjMDKJ6DiR5mpt",
  "key30": "5EDc7duHFUtFs51sNF2nQsXaEpXbsPxbswVM6LjPkRzHyqfnQX5YNeLthNqtREiv59Pd7xtLWXpCvVhhDGizuCXt",
  "key31": "4FhM7cx1M49Sb9UwGFBFBmyGnnLv1GufWps65Trg4P4whZSJFJD8uhD72jui2wVZtwbzbAMkQcBCsY4781nYkt7P",
  "key32": "4XyzKT1sE1oJ5k8Gghx8nJcTyox1mw98K2VWPGv1vZZSBijqJuetmZNR1Bdtf5DuKmYG5R8GpaokNcE98NNERiWX",
  "key33": "3dqPEiKeMknBk74kJrTrz2baLC6c4QMhFJR8Q9rsF4a5JXV69BR3VpjSPe7RxeFaoc8yfjUtXTwz2RLynMsmXpNV",
  "key34": "kdNh2Q1YgFZw3uhEvXwZwmL7gKYtEht8eJjrcVBzVmRyjbSzRzJn1NmF75Gr1zmcUsW2Cn8bkMXobcb9s6hnZVt",
  "key35": "4WZ1benQajf22MUHkgEV9Qrvh4nXRgrL1CALbZy42DCN29mFs7DbmjnoaC4octCsNx5D9Ddn2Mqse6rG763UqfGr",
  "key36": "3qaWKCUFX651ib3Z3tdq9LTyTAbnBfKGi7Ap4xvitwRPaM3oJH3m1Sh77edK5wZR61ZBqKjTLqPEaSoum24htscx",
  "key37": "5czBLvJDY6eNY6Hbsd6gPhPyrYcZpBrRcaWUuERdKxF3CqPFs3QE49RppiSHWrRo1qDwg8o2ANbMsFzERDC9bVyJ",
  "key38": "4PkoqtZaJEdKbDqqysHQFgyMxBFUPhzWsGB7opG7dZNEDBDqjPk8g9K72ooaVqvxNnFbAzv7aeFATHBH2hUcGn8W",
  "key39": "4YgEu8ZBsokUr9EQbQGw7JPBaMY2FCnM2b2ePXwsdkxzVjx5mB84PqfHjvkbRtewKrZUrnVJe4pF6vQgZ1Jzn6Lt",
  "key40": "38pPZPyXc66jAXE7cGX8j725LdmB2ADiY1BSW88GuMkv9b8p7eQqTczBDm8QbdJRzameYX6rtJxkqYFkoPJ1BMEo",
  "key41": "3hD9MUEgadaBEY493RJULLXpNUT4VwA8dH5M52bvZuH8ggRmPg9d7TAn6qvbt8X78DgdkK2SnAcx593cbvdsrdHP",
  "key42": "5tuAyyDo7mMAWFbczgHNTsgFcWoF93Bj63Wppos2NK6WcNHzUfWyR8F4G7FyxiqcpeDGRVaSMi4kcgMXbo2e8W9i",
  "key43": "4pnTLmm1V5W24ofTNXdVNe4ZTTjkxS9CvqY8CE3M8NaUXCuhvv12tVrvnS7XMi79YEJwMSUK5rf7DwLdoQvP8Vy7",
  "key44": "4FoD6nZh5FzkNoKYeBGr7yBHkddYPs1PFXpPRNre4QkE2M9iXio2hM4nvMz2QFgTHa8ohwaR9HRyBpHeLw4iAcmW",
  "key45": "477UnZECfJqqpcremF95BjHusNr5qkBVdNvnva9MDp3B75S15phnbgW13A5qKz1j3Kv9zVsCWzRMGYn6VZoNqMcB",
  "key46": "2m8wAh8RQHPQa5GojRRThSAy2dh9AUVVxaeq5wE5s2CgW1BmX9QvMStaagyrXTz2qwskBdB5B6vG9xq1StqbQr5d",
  "key47": "4WR2CEoHKvVfJDrvV7Z84Rg7FRV2A5SWuwxy4gK4A39jxrtiDhWfx9m7YcHMfVcMLn8FNbYbYDYg9wBZbdbe6ATn"
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
