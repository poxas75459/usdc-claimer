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
    "48v43v6gRnogKruVU5zfJZCqNN4RNo4HWcAY8jnER8pxDG3gytbeRmeufyDfs5HDmJCK54GFDSGGWXz9B8bHy3Aa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gxKMqufiyPzkMThRLxiYWznk5eVdxU2s3B551BEV2s8QyEERmWWZap8Sj3fPxXjypmtPyoHtr72r15XWGrn5yqc",
  "key1": "2xxpzC3HE7DeptALV9vJfd7HiEuC5txd8j2tL5vb3UrLBFuu8wzXyRTK8fBmHxQX3ERqNWA1RyTiKtAMZ851fsx8",
  "key2": "4BeshXdTaekKFqbCG5sy7mSnQ39g9v6tksZYHzfRWnHPpJUZ9LTA99qbi3UJTRZi9AF6aZzZrVjQsCyajkown9hh",
  "key3": "oEv1M3TC58tkXmbXDYhpiYpxiEeRMLr7q5VbxWDEwfzKvAFLXJ5SMmJiUNGLFrX3N35kgQz3TrTMALsDowSuT77",
  "key4": "52BKoobyvD8joBotoYQm5KSt67M1KKa1sNVryabN72ZuuEzufv9FVML41LZu2EUBxeaEA5tfefbW2df4csAAnWDf",
  "key5": "4NoGC9ktLBxvD5AD4RP3sKGYKwJQjWSv5JPMa8kXh8seqY6jqYRD1LQWj3R81KSc564mfP1FZ9ecLKR8ZXtDWThJ",
  "key6": "5ujdQBwF4yw4E6g5y2pcrf83ka7Rc8qXJDC9JVqzTuvzRE4EYRsYqArS8CKaSrLMPrhXhSowrywy3vZFKYAvuhma",
  "key7": "2eoJ5TRErL3kT6RVciZfxkFqXYkxtPGaF7KKxGmnmUxu4ErKr2JDKjQ2cBzVzGisxV5bfN7g8DiV3K9EUWANBjfJ",
  "key8": "2xWmwzNrBUwdsTjD7PsCM4ea7psU9jDpZy9jyTg6DvCwsyXG7XyCvhMPzxorMn2UBAJVepogiqJJ3ASP7kH9tECA",
  "key9": "52bX6TtMW9Q5AA6z8JcAoLBGoqxM9e7trRkA9swCKvFZXBdVVuSMN8rbTGPxRTRvkaPFt1JLT73Ua2pAkkp8eTT7",
  "key10": "2sYsBLPZJRLLPvW8tGx6oH7geWthJGYotb8jEmsZwNjmrLxUSz6fffXVzn3spEPMR66kYhTqVvuDLnyu49M6Bnk4",
  "key11": "2JdXXUK6Wf8VxLwPiz3WSFwejZcokoZVbV39MtvqSkAzv4Lf6pE7CDejpJuDVJbFFkn8G19ezXdfEqeSpQGj58r6",
  "key12": "2RHZA5GMRerqzMGMMy8chrPK99qwx2sYm9MLTzmHh4dWNWoyhPuD5TrVvuRvKTFKu1ZWv1NCfwiCnX51c31Jt71c",
  "key13": "3NZdDp6rcVbUvvBQSW8XtBDhRPKK1WycdwZnKAHui7Uvt6B9Nw8MTsGpjZdEo7whoy5t64D7qyXsPRagRoHMMkBY",
  "key14": "4qcwoogDpBPk2hV1J343gdZNFxPX6FQLf1wAhBmHPzgJnXMZw7hXRQr5aUFJndy4pVFb89jV7MdexYw7Cx3cu2ku",
  "key15": "4CMQ888eFJAH8N3VrpMfeeaRB6n1nzgiZDorwVyp1ZPtJxaX2WQ6Hga53f5ERJU88hoVyvi3sM5nc46mkmmHZQQH",
  "key16": "4W2xCBESihSHCMzSkjQccgyrS8dAHyVjCuJBYxsT26yxgeD3mKhUxcXw2NeCFGUzYqxgFwert1oFUKeE9WpwzjYF",
  "key17": "2oJT7sEp7n9JqB1W6EhywrBnwZu2qWCrJt7Sb3SSnExgNob5BFDdbRL1jud41bXkA9tcPGTzuBwvBHARcveFAiiA",
  "key18": "5ikehDwMBDGjUpDdqPhBL7PC1d7VDduDU8JURaT7Hw4saqfpFLrEXe2wyzKGV59pEsstieW2ezQ1HoHSGHLmBSwh",
  "key19": "yPuu5jB2sHcAm3TpcEbUu68PF3tJf1ZiAN5yGVfEqRT3r8WUuBFRgTkbRciTJeYyqqLApBndGEF9EPJAfTc8vej",
  "key20": "4txg74Qfut3LWQsiwZPJYoahGWmvdN2H7jqXwPLy4fk1k7jms68GWqS5SyFUeFiuVywvYNYrn2CorkEtmpRFG4dX",
  "key21": "38dzk65KL85UrCoLUHJ6i7hiSrSTmNwVJ7j1LpLiHVpejb5sVtuh3Ao68jgXP5zRibgQirNtM13MnGdiwKEczN4Z",
  "key22": "5q4EUeQcB47kzEJNZm12CZPdaSv1W7q7MbvVqseYDCGMfMYVZwCKAVhTxmEx3FE4QHm6usTdnLxbmNfPFePeME4T",
  "key23": "RPBNdPEU3WwbjiQgrNDR9pcmDTph4rCv18kPs5MqxTRSD8FuPXb2YFDBuCvzH1uQmYYYLHPpt9jK763Vqg61buz",
  "key24": "4GnSVjb4CqRhfVJ2RmbwSmHbHpzvoBktGdghEEo6ppyazjU9d4fCPYhDgcYdgmfb8iMnQPT8wTJuPTojASBcVzyQ",
  "key25": "4txJXgVneEUyoP3GCNP7ysGhSakURB6Q91zFxNGS2F8d3JFgCycRTA863UxRLzoaTWHgcVBx6JXRUqNryTadffnT",
  "key26": "5bWMteCCutedxyweZEKMX6t15pHMBha8zFUAtGpy2ixMgrVdzcoDEDBqbcevc5Yumm9YH4tGtDDTAQmHdj2G2bYz",
  "key27": "rZ4DBn13FFBes5Q5pjHYc6Fg3uuKm4j9tm5ejkAu2auczB4SUEekjMEXQx3L5jweohoHkWT5kfkP1Zkjuv6pvZq",
  "key28": "5yivf9pJszrLdkXQPSvK6RyMPens6ajaqt57KswMVL6EKqMcoaAM6a82F7arC7Fh9KkpbeesTBdL2Cx7YbeP65ow",
  "key29": "3YzmUr5fLo38JedL5GK24f5JYc12WzjvJru9fQAE4AW5BjwGMYqLTJvkt5FZSB2gYUsg65zXgwDrJRoUK54XWaqx",
  "key30": "3xepa7WAif1MKCZHdBaBbS1doXgzijwg2TjkyFeyKDyXrbUaZA9AWjCRVtQ9SYsTmujqrRSnn7KhZtANXgHh5B4B",
  "key31": "3vQvGuY4PP2Rv2GsdtHPMqdk8nJdNie1aWxNmHzjY983rrkDrE5BEPVMwrxhrsy4YMjzcPhGDsPhQHanpKqLNjbG",
  "key32": "5bAiWA52q5q2jBWCxtu57nH5xd879F62fbzfASCzuhr7tJooRi3V2HbFaKkr3nDMUmoQkBqVxzydT86egkinkSej",
  "key33": "3HkK61PerreLSYdRF7JNvj89EYYdKbPv7CLrbPGiFJ7thaan7BFkZZ4mtYdN2cYxcmy8thCA7H8wneuEoA58ja48",
  "key34": "JfXpctbZkRLnnmRHJtggVVfg2SvrGpNTTaEtK7QSRxLDikoaQZdXP72hTybfKU6Dypd8JLjWjCXnfbs7g7XSW4e",
  "key35": "3R6mCE2YLR1MkRrmJ58FC9BHXtrfYZD4DHKVcdTfNVGQG1vfGxvVEDPsduAxHFRnFXYnugztZXhaJWNv4sjmeANz",
  "key36": "3qg3QuhPMihfdw3CxhFu23djGmrmXp6jrM8LE6KhGp7uB5NFVQCrH4G2pQxQTZ8cRwT9Kbjgd2zQXMdHqBb3jx7N",
  "key37": "4BGEoBHneReVgE3bLncp71L7s9znJZ77RpN42A7TeBgSF9YmRsoagdntaGkAhWdz9hEH6DPh72db4gTMhdjCi5jD",
  "key38": "5s7qBm2xJNa79BPzPxmxXBAZZzSFHSfF7EyBUgS8EA6hnf1EaxCQmPzBPG6XsvtSGCDprMWLLz6wt6aJWfuQ4sxy",
  "key39": "5tZeW9pgFWLcc37qXzDYGBeKw6UUY9QiMi91LvBEfuvspHVa5M6QrHKm7sgWMBQ9Dd7CxbNzLVGpgnjeSv144DnG",
  "key40": "2UWxGLdPM1hisNJ3KMjmL7AaP1Xg4zyNthrZd16j74pCEDW7bwNUuwf9VRTFjGkRW7peVc8m49KyzXtR2XDJpf3N",
  "key41": "45pSsqYhHSFGimo9pD4QrgYh8oLSje6uFUQzWjv9zNt5iDzoxRrC8R92UdQCXmNkrT3taKLqdaL34fXVUxrfRHqw"
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
