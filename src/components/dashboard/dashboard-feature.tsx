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
    "4dptXFNAAo73FQcHbZpx2j8HrwSn9ZJSw9fPf35QX2RF1VJFaGqycVGq1yf5UvKV6e7AUEC56zkQ8vYuUJmjPPXp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nHmr2cEjKDSbTG78S71WcD7vn45oWURUkv8ErWvNB9wp2kBJFDGDevVWxZg6z2hx36VMxdQPvifZBPet4xTXcic",
  "key1": "Akk12aELGWzdU2Ei7EgYmBoTDYv3tCf9AqWhQWaRbPbTgKHT619nydFFXqoH4t4UPvMxvZkXSKNfnsPY7AYBz5y",
  "key2": "2VEjSrpksDWBupinUn1JwKhTmEMY8uX6JkMgD83joHLYoCzA9pDGRY5pLJ8t3SNCxbJFjgAwDN9bd95kJBq6rk9a",
  "key3": "ay73GEJzpgTkYHboU6KjFd4DZSvbcGikm2sB6RNJLp19jg2CK7tsiepEkVLr7GHmHLgxi1oB76JvpM2VU7yXqfB",
  "key4": "22bBcQxyHLm5Fg76KvriPwRvroEN1wA8oXevgvamDvFVzZopw4EQx9VwtZ17xQWq9p74X9gQbsQoSc2Gfjoe4Jkg",
  "key5": "2TMZYTbgkmPiuJS1pTA5auAkvszwUVEyQsUR8uV6kQiE1ksmNecLobzeJjaoXQC93rv1BWNqck3Aj3EJVyBjxTny",
  "key6": "2xAMiSZeVYjmatmnn7kZdxoGVYhAF3yCNnGFXzzxDtmSHH54cRjeKby1zM5BTnwj8rQZvZJSUuRuDFB9Cu2yBNKn",
  "key7": "2JBt63RcnooQ3fHuR67orAKWKuMofYv7PSBzZpW7ifjQMwRVQzFmSyKtH6iejwyix2AVPRX4HWx79EqjkQvqtwSY",
  "key8": "5rpd9q41BnBU4TxhhXzCgSasUBrkFgoik4kfVXWGy5ncPKyYCfJ6h1pGRkGBt1UEka7AeRWZWvQxm1RMMf7q8FLv",
  "key9": "4h9gRWkDsJB6fmn67BxApPbrbiYV1seLzSfYDiMJ9WzdQ4gGW259Jj4f4boRktY21GzpnXSBCFXVV5TCnQgd9Ttu",
  "key10": "yF3TKe7zcfX14tCmaXAecuoBAA6N56Yx1SZQ27Rib2VWV2VGVBg31Hr3wALAh46SCtBCskG5v6jSNkjwy1at8Xy",
  "key11": "5Tm91D7bQswPVYKFPCkqwSUnty4t5KUdw2pT7Uai92kTXZxH7sBoEeDYqaqdyCJwbxeEABXJTdYkCMnJegHeNXtS",
  "key12": "2W2rzkdEr2wVZt3xAFpSezTj8D4Wsz3gftbvSvJfh5k77eq45aWzKQHf3htyHqanD6AEFdT9teUm9oHSNgk6MpES",
  "key13": "3tQe2Gvk1wWHnYXtwUQTmYi4G7HLq9wcKEE52exK9p1CHUsXFRezy37HMnKMFq6rJt8zEAijasGFX8DhWyB3zMeK",
  "key14": "5HzDTbT9FLwzbwtGNeVnas9Vp3ghkeKscut5G8ZuoXasbujbbC61K4sQ4thoKDTzYGcRDUXtGSF9tSk5sfaHvZPV",
  "key15": "54ugTqzFJfBqNrJQh5jHDHfSFN8bsoeJMRECx1e44Lmydmgwn6doc8FN1egS5UnXX2wwNZYm81ZQNaRVw4geJ47w",
  "key16": "4nXkHPbqHeJo8dPCYZp3JgTJKSLVWCDxPjHaHejjfrr6JgZMLCAgPXtrpS1TudfonsL1ttwYYrGvKBFeQzpRbRh1",
  "key17": "2RJCoXb4qwrokDPbq27YnW29Qj2fSvWcQGJTWkoAivEwBCCWdt7JxmtbBe25zR24rvW2TxBpWXr65tweAJ6c7SQK",
  "key18": "4CYFtS1vBZ1obzqpGpo3M1BwJ2bVjig2mzxYUaj9TiZ2jsuWNfRLTSNgLgKN1mUDiCfiLSuSL8hAAjxm7nn44Jci",
  "key19": "3DYzRTHiNM4rcGKUa2dmvo8dha1MarD6fGoJjzPKVrfgh6idm6opesFH8LxDec6HN3TDyrgy4vN6h46PTwcoA41A",
  "key20": "w27v6eBTkGrMZ6VLAAXT1FxTaDgj7Ht7WNuFZkMr27jPE5TScQyi82X5Eo6BgBEGnK2T7BvNDU5yqWyZSiDw4V2",
  "key21": "4SizHYpZn7XYiSTgdQQdLhsJPKNy844DCeQAT1vuuAPhHEyd1MYUcp97ukwXdynRjQGQuCDmsArYKMA8NuLVXQyH",
  "key22": "65uJ6boBhWuzpQ36VdL8aGYF5Xy7f9XDXGfTCqBqs2LAsuzZSeTFYK21nydxiyjTzuXW5u2C8Dbb24pXMRL88pb6",
  "key23": "5UtmSoiaUAG5nn1xHKUwtJKg6iumz5UDBytmTNQWZAK3Wej6jrKgTJwY24Ti9aENEHx8FFDi8yjmu5FGtjbRkSp9",
  "key24": "2xhmGakXsHNQbkCe6ZmBTE8pfpaTXinQ3YUzRkwwHBCVPZnxEGAsUu8hXDmZR9xmjnfGPXWpugZ18fC7vqwPrYmg",
  "key25": "2cee2MjmSkZfTgpZdwhvpifuEoZs8jQ6ETY6vSwWF7hSamuPMBHCrUx2Wqi6QgG3Kd2xE5W5VBCYuBrk4CkNU2SY",
  "key26": "eG3axaxJAd3GZnX8tKUoCG4LnS8zeKwvo13v77hENbKEnAZTzRRN497qh4eV9jnvNx9nbdr1zWZqby1aBUY2zbb",
  "key27": "1Q469dPPVt2hc1CrbpBEphQ8GtvTDytrdpL4wczNDZXDJ9gqk2hyoeQoD7wtm8LTdYNs1dWe4KFqimKeh23Kq9H",
  "key28": "5tLm21Pttte8bfi5mCtoEv6beJPU7NfLZZSek2k3gR56K9JvAHB1LzCYuyftBeKnXJ9mD1aWdG8oi9oiAx7AsnLP",
  "key29": "5U7k4VMhaYUeAqADUzgDtojg9F3Acipv7HxsKucSvTdDPJ3AxG9k39LBdQzDnRbtyk79j9fy3ECoCHRQ7XEruQ1x",
  "key30": "2ym71zExkbhDTEa7vbtDSuWNtVHTDtPhqsBxpTuCtwm5JFA5jacV8CoxkxVMmT9zpgLjVaKPxp6DkgZ8ryEVMKnN",
  "key31": "2rt8KpJZEmbpfvGE95cQRhDGZsVaagwZQQkQf56z8XgtoHavEjvrx2FRCmswt3gU3CnA8FCodYX6rju9KYvtHmhi",
  "key32": "pc85queDuQp1KtGA7wVwHJa3nFko2jcYegVo5TthhArJqHps8v1ahBEiuqZW31K4ndzQoMs6oNL2Rqh5AhD5sdx",
  "key33": "4ayHC9khNLykrs7Xk2ry8RNfXW41e66NoZnzJxhvvkQJAAvPWV1q5B6Bmqq7tc2k3dMPoGoPUt74ffvUChKYWVog",
  "key34": "2V4cDVkFFWqAXGWieZe2T5bgPcuwKeWyCdSrBHztw1x2fSGjSxAY5MRBGFiPNWEGTHBHY4AMYkB1BofuvurCrCSM",
  "key35": "4hqKjroc6z74PtyreC6rvBoDJYAMzXJ3KT4qCi8oJCVagtxdGVNTKK2Xm2MqGPixAomDFKdj5qGZcT86NrojfiHx",
  "key36": "4sJa7Thtbr6GDP8kMHWZdjJhVNp8QoKgYFCYgzrzXuibS4eDkeEmECiuS7xasMVYZfVYEoemPuBur6Ed1KTCeXqJ",
  "key37": "5LjY32y6Ge97uwkx4Ax6fByZNbywnULLoUvR6hdTkzH2SkmLdTvNjvU1jM37G5waUAWuA8oMB9tRhoVwUp4tAuFq",
  "key38": "4L2Ehc6weTTc9mCcUbpgvaMMxs4JoPcLzr7PTzraJheaUmx6nkCVBHawD3Q7PnpaSWKvQT3AMvtYremvrk7o1sx1",
  "key39": "2ppajNBxzNkPJLfGPqEhPNnUPQ2P7cZJJawJnVf3G3Hkmt89FDvGdx2FiwE8QHVLAouc4WWkCX2YwR5HGNawwfXM",
  "key40": "5jf4tBQ8crffpwZ8f3NekQRoEeKkWsDhr7X4VTih949CeHG3KDV7d7Z7W9x4QKmNFZA9osYaJgT6QfBz5m72ydMD",
  "key41": "31V82wmnqML8pkHNCDAaDCLCqmGdUtE1AEYKuJzdfgZD93NFa3WuXg51U4h8SZPKcsGifLSUkQ9d8Ny7GZrVU2nv",
  "key42": "5teqQbXRrUmy4iQWk9ir7KDrchZj8PzHhpoFf7jtHqTTWJQjvnXnX6GbUqXBtVha5nQjMcYK9N1YkYucTqK39r75",
  "key43": "4nzHLYD72vLnHPc2ktiLLZEqoDekb5fnp7PoRuBtdRPPDGHKQaTqw8a4bCeEva3N4yqktecquUUzAHg8e8iHF56D",
  "key44": "skzHb9T2gQxc31DmZ71yxw7uGYzCkuND9iYhcNXgAuxU9sTE8UXLUpEsUFheJitZuwDWRvG6DbMZvSkx48R3ruo",
  "key45": "QT9RA4Hhdbxw1ZnPpneBottSxuPN3SYwG2ebwszNDfUyntcn1odUBwyyBnHbqm4M3DUQoMtN4j1C3K2L1WMCyCH",
  "key46": "5N57KVwucnSBFi6dRgYpuA8CEnbfxrN4kWyZb8DWwg8smFKhRHTDopV2voMave3KM4ZdHQuWNZntBeCsQb85WcaC",
  "key47": "3poNfYNhxkswbC1DWcwqoaU2s99CSz1h4KWFXtx6o6TQDKNouTaUQ2ByLPkchLWuQ95B1GwatHSmhLRNBU5DKqHB"
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
