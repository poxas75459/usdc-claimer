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
    "a62pP3ELsHn12quhSxELBUJbzX2GTr9faKkTdnfNQ5WqphK29owpvYLxtQcgq9aM5f7xuNNj9r4pyz4ikZnq7Bu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aU96fZMrwDUDKf9koV8kex5EE4zURAwZxC6kZtAQDMCmbsr5gfipUTcqEK7K7HsnsjXhyqhHxqD4PYMf66RpgF1",
  "key1": "2ZgDLH1KBgCh7RrCxMmcyCsNgtj1Xx9vbrUuJWP7fM6cNfs4Cuw7HHd9y8krx5xUK4CpfvuReYbKKB5AhvPsMgUu",
  "key2": "DRmbaQXnVTfjiSbpSTHeKTHpsFjcYXoDfgjXL2tLkp7fgyoJ4KK4hy8UqQAriLJtVXqt47Lhyco3vwd5XyaU2PU",
  "key3": "5TL5EoAmMP9xgUV3MT1zK9X2AX4EqXQJGjw8CmKHyBmHXML4zFVe72XH3VE4ebCutm8StYXkZW8JLUmdzc7XsdEL",
  "key4": "rMj7R9H3PtMW5jPZazA1hX2UH7D66KcMnm3HnvKAkQHNxAQQS9JsLDCZ2XLAJkZM5a4XKBapuAKnMuRUF1cWoVN",
  "key5": "5384TCY91ozuyADXJ1avvffsCC2QHhYo1Xki99qAKjuV6t9Fv4k4kYpsPrxvTTCDjwbbKijDqLt1uGcrCFk2aUGp",
  "key6": "34Faf8QTqhiPSTciNb3M6RWyP5JGGnTrDDuiHVM3j1LmQq6BxhF8Uzfbi1cEHzPquJS3tpbiw3UBBnWP7A4UBcwK",
  "key7": "4iABkjuMZdRs1MB6Ku7cvrQpgXThBgFCVcTu2xpxwJ1USsYFuWaAZGCmV1J94wRAGSAZWTQgi3hMZvcWNXCf8Sh6",
  "key8": "4ket8Gs2MttTYDm7QHiwquGb9NwNADM9GxYZcm79KdNvLZU3YVTPLS428QjvGaGjsuvFKhqX5XbsTU7gAAMssnWc",
  "key9": "4a2QFqR1EHcMLZuanAhJrFLgKpsS2yi55zL5iBFThdcC4feJ7SVevLs47pDBoGw4NoDsVE7JLGCQgCSQdsD9Uwfc",
  "key10": "4DtXjCsaD7E4Dg7eLjzgaUnrH3e45R87CF5z7eBnjLmsNTPT3va4az9hiy5HpXVG45TBzMSvBFzLuefT2vgsMN2T",
  "key11": "c85RBv6Gd6h26M3B4V2FJ9CinM6ArkxfHBGaSz2UQWJ9h5TDxECXMsRFBraddn5DnvoLJtmGSHMju95VoQ7m42N",
  "key12": "5DetYXpC58hMpoyYjyWcf9AVoKtv5G9Jm7uvBPS7TnKuh7ojy12nnTzZnRpF3kzb463JwPdoaWFWqyYz35bZvEZr",
  "key13": "NJHYNMGYnZ7FrcymHKCnNq6UStjngTUkHJEcnUZpW5Kysa4xMUTC595K3Q8sRHTYVS7Sjz7yu6pqFyJfMUcdAhz",
  "key14": "3h8rADm9D7z43KNb9kbJFS2PAz7FrpHfyLm9uBR1XgEr4bsDTYPrxDzZV6vA85pwVJSNk1hQhVw6pEWpFiut6K8n",
  "key15": "2DBjuQqDh9Wv39YUb8PHkH7wGvq8tw2P9gBSvpcUyF9Bm2CAQF9yxpkCwQZZTnSE2yUJ9W7MMmxKcz17tEbcdXHj",
  "key16": "2kAqY6WqzX7Urth9ouPQb8KzSSSEJycX818NXfvD8qCe8Dgic5Vy91adCgVsJEFuNhWLpsaiZse1HkxpLxK4g2bh",
  "key17": "ArkvR6VorZ43HGFHedv853TZLtPFATngvMooVnvGkwFmMfmbXBiRTpj9FqAZ6qXzJaLgdFKjTxkist7UfsT7EF6",
  "key18": "KjQh5DZHLd699ztM3sFQhV6fhXrHWsSjwG4jFEWPFhKLU34VedkYmbjHC2m2KNi7a5Tg1mLN4FTL5QNW67bRxFo",
  "key19": "2jvGNiiuDQPNgMasogEr7kmXps1ojZzn4PuP5v7QE5qQ7mMCb32KM1RVpFZVidE6VpfyHhZYx9URscdZUB6xwiEj",
  "key20": "3U7Qqzio6ZC99Tn1F8pFNRrdbCfq3JB7qpCXcKesG6c98sX1r6FdHKZpinn5bpPGuPDPAZVuqAFhW69g6yVUC4h5",
  "key21": "38yfJ7oXgWUaH7aGpC9w4KGDJwg6vTrKvWks5H87hd4QtAu5f2aG6rW9qMNPZct9npSK6WdDjKWF6btvcMDD2BvL",
  "key22": "4rtGgvXEj4DJTi29h1SESgScYCiqvXpaYWPzaHTZFfRD4JhcW9awy1sQ6W4pGi1UEvZwzwYd4woonSzMVpgLhETW",
  "key23": "RoD6tbt3woNB6JzrBG9j5d414yBQTfaWcxXdJpP9TwpbKesTCwxjRaNkHYP8SaHdeZpuWmhbpP9N2Giy5pXXX5Y",
  "key24": "4MirZLmDPJnWnciw5hYY7ueWu2P78KX8eGBtc87K89mTXZGNa5MA25xNkjnvYmJbLz5F4Hk5LjZDs7qGsJYSnhfu",
  "key25": "3Mx7QL1RhbVqSbvUjBuSRGxgsj9CT3dcWx6rPezafJ4GS2gmRQzdaVTNyFUezZ83Jkghq2sWYCXYjVM2xGCnhdXN",
  "key26": "3N6itQ6xRsbkStb9A9WPDHQFnEMMDTczFtQkfDQzXe8XZmfH4G5taJ3RHRAbSjp4VExP4Kr2RSrCPvyMrCQzE3AY",
  "key27": "2KkNntTJb5WEMTtXN9W3cBnhwHEyEsuSGTQQKyWTwDnkwWoEy4kLkXZYWeTudbpmUkznEL5T7jWMBfkYqZQKq636",
  "key28": "xSdW1tGuotzBVJuYqRuAtpMRR73ojDDe96WCr7zvkZNQ4cpx5e4XSk1wiCKYi7JtCSZU42AuVgkdBKHc3BW1kWk",
  "key29": "sdrbwg19fxZ84wt6Ycwrs7J3USCjT4BBd2p8spDmHpCuceFDnuYw9Y3BjpkaksQPogamKwovyfNC4nqhz2AqMDU",
  "key30": "2KjSmCLRYmgxheiKT5w8JGdDfwN8QxuXkgbmvjde5dd7ujnpTSyTtjZiRqhYRRBjzH3hpeHofaCBTr28MHv7tohL",
  "key31": "8AszJ1z2qyykWh3KTZt2gs6tJfBLBcHfiesxu6aBDyDgRXbUqGrCZmRn9pHkCW5kGjwSts4ouUMuphhK4vf5sCJ",
  "key32": "5iigME3BE4npfp56iQyL9zggszainefVrNgSRJ5fWFHNh1NbkVVmQPsLeMroRz9PhTKUi5BLZXMC1oCNqNVAR6xr",
  "key33": "5VP4yozJgRa53b98E94T5F3dcWXcDMCPQQmPXHNTKQeycYqVrFFGScJKKYBtKD9TfzSSThCW4ShBmgDgWCbATgJ8",
  "key34": "3bjYCV2mbqdwaqWr2nzMkd365nXDNgx8F5y8LH9BwQV5CokQbMavfkdNV1DyTce1ghbnv2mDCh2WNwNLYy7Zwc6V",
  "key35": "238EXwi15X3uciaAdyhnyGKedewNM2gEXdPbvViasALGZFRGMirQ4AaEH1CqXFoHJFRfUYFWjbkbsDFKzmPhnAiB",
  "key36": "5AMyX6LKJHdGdGsmmqYD52kCHugq794X9vwoVzhTcY3YkD2wFbiHCtXM7rDEGKEN6kvSDbcHGDARK26wYnEXmbBi",
  "key37": "3pdB9o2gP1dhaeZGeGtAb6KBpedmPrxqyCrYsFiGUdVeY5NDnMyPUUDpc8knJeAN7b8UuSKtoA7b9AVVigEqpJPE"
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
