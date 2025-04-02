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
    "46kSY8hUhLeYvM5Xb8suy69J5bGQ75TveonLcBVYkVCH9pbMYo6H2gjR42dRQgiQbmKMsr2U3Kp4DpGNrycPymtj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "271qVxRUru9MVHPUBiuBM3xKq3z7CkGyCvYXvmwfPZfiewFtPn1GQG4aQN9k3uCgZ7pJFjzDYxkmuj2P1rAdMHDE",
  "key1": "2rEYuHQNWKgb1ETwMkJZA6qdUS8yL5U4tZtZF8Ewb4BWq3vczy2XQ37ieVzjfkJcFqEu36dL3HN26ubs7f88fvCS",
  "key2": "3UWkYhpMs5hYkgxyXTdNEoyafYxaNBwSoviUYJcNsfn6yFqCHQMgipL3ezQLhEdW7RJNL1attfUtVvxXjtn5kMzR",
  "key3": "4qFeop9N9CMeH9uHq4Bn7LYqV2u1pdPAvQQYbpG2e7J3mxkjAjRQ7tn7CMfQFUjNDGYHmtPRa2jmCckMnsCiVXVB",
  "key4": "4ZNuqtjdYhBpNNZi5FnVdPvT3tjk9twfZ8EQJQ6jt8FkS4psNtSzyuzG7hbvNUJCB6XowBr4HcwLRMC317f4W66o",
  "key5": "pq6jJpSDyYrtFZywNwPsrEdr3fStWyagHD2ZG9a85n6HtmyAZvPe8JCBzz1ZBudAgZTb13PumVGsDbjMpRX7jvo",
  "key6": "6RcjAuvDNYebEwpTt8dwynmHTAQicsDYacHTdCLfDX5ALZh6Rhb229fosdVD4RkFwfJYdJiB6d6S81ghtf7zo7s",
  "key7": "2cwR6oq4e2Mf326VKZexpan772fwARigySAVq9AqL9r4btVkmUzE9FzMTtLHAqLqcroDp6JcgKyccB91ZdHtkVXv",
  "key8": "3ECV7sQwjdHdxZhYdLMr7xX9gwZorwyuDSz6Uo8CoSMfg8kQbXJScg3jsV2CjwtnuYpgU8XWdnkFn2ZTxGgjxbww",
  "key9": "4asonjUeZJALMm4ktJSLn7xPFccANYnb7gKkwAzpALYsAHT5LDUq2YevQ3FyvFvWkK1WUebB2tA8jzmZu527gkGs",
  "key10": "4hDAKr3z1n65Eir86pKjRVakaMMtMQDUrVi3sgg8bLnNAGA5yhWrKT93ofu8kjUiTvfNfM29By2yV1NuQWHTWrLd",
  "key11": "3x3chWcggSArgEjCDR16nuUKQPuHp29kF7iR9xvZk6eckTcssHvj6J6KCT6sd1vHHbhVgPaFfTxw9uAqwC8vUqDb",
  "key12": "2G167eGuMKJaEkfFrLA97N9X1zYqraJCDG8RUHbfRn6RhiYwpgjxXL5NojQKZsEBDd2rrSLRfztf9rEUDbnbRm3z",
  "key13": "2wtWpGscsyrv7b4chss5GqCKaooown1byWyg2GE18xPqQSM1FqcugB8oFZfCH18hYyVxPDMdM5eTVyGq9HHYWkP7",
  "key14": "5ANKK4v1owcguVvhYRM4caE2AQKswctSzXydmAFNAqMoesX4MgDFCrADs9cBiCzDjrsrsBXaKB2iqMULyZaDNraa",
  "key15": "5zGA9QBwK9kA84EbK21hCLXfkXRhUwzDSLJ9YHQZLgoNTJuE3FsxXvoK8Kc1WXSJWFPVK1PG74RHtbKXqLpwk1hQ",
  "key16": "jwHA81R6KXhpiKoA2CgKkusL3fiq3PUKRWAXo4kwYGR1aRBypRfu6u7AeZCTdGBxZfL8r1Bz4Uimqc62CJJcAyc",
  "key17": "59qa6REdoDeLdJBT6ED9nQTxg9LdYryyEdh77Y2PhoHiWapTTLQp9PYDiHWi38tbeusT4cttt7nBC4Qoic6Dfpc9",
  "key18": "ZJNWcB48m17c5RRi1cMrU4CBTVF9ks49QpTSFnBfj4EfBRUvuQAfvVwXqTMWWp1GXqCSQYdeDKdRD1b5jrf6cpE",
  "key19": "5teQqNjnVGuyF9aC8PVNpWaPHQFENokrUmT5BvocHZtxnppziJqqQ7hmpR1iFGe3avmFiEW85zdrqmrzyXwaTim4",
  "key20": "4K14GdYbQ3iufPui9ucxYijRz9ZHa3nBfLSz2GVi7CSNpYswiu26Jo1orRRH6SCebrYmMsRPebpcGKDBiGwSLtW7",
  "key21": "2hyVQBPExwDj2U1ck2JZKV1iWHBxf4kh3vmT3gAEfudb7qqYuGyLRqxCYxZHebGjZk23Zv7FZP4dmazZ6U3qxySE",
  "key22": "QtgVW47UuLqhp8x9zkVP45zVftb2YQCX9AmgkgRWia8rhNkb8VUNLD5mDqom6iu5BNuhNaPsKfuL8NocU9PrjNW",
  "key23": "4AM7jeuu3p599jk6TqdxNQX88zotAPbiQVdPiMFx1y9DNUuDoFdzg6N7vY4NpJVkz6EPTM3vzZwScsVkM3PCVHVP",
  "key24": "4KNCr1B5SznicmmVVGAFsVBuRYVLVnrwt1jCk2cGkV5pp1nTPZSDQKvh9vowqbqeaDR9kH228nEfXurajL5N6KGo",
  "key25": "29qF2A5oZ84xxjCjxyXopQGnZqdedzk6dArqeJ1YkHvjiEdVPoQik4Wf6YG2hRfwj4PGDKXd8cCbekhaDBsEjmmz",
  "key26": "2iDjnqYdyZgUTWcUF2CUu1YDERTMBNicQPP5hTw8BCMPsQ6x2gKm2kawMmKGwNAZUCiS5SMyWrMHuHc4g4RPYExD",
  "key27": "E1Uj6DAbZ6BRRZgP7RU5aYhoibJRhHmykRVCmaAQTreVv5bKsqNuEPbBPqHajHkx44QvJ4v9WEYWPhLbZv3Nj6w",
  "key28": "5f8Cba5NyigRQoqsN8pERejPqdcZFTK9oB4kQgvZ9PHo2qjnX5BkhesxvXaM2uhbSW2EBjQ32QR8PFgH7Jqpdq6W",
  "key29": "dEeaoALeVsQR9Dp3haKzjRtLBNkvSy988mh1LaJHzvxMizmHHMzmfFt9csExqUNEiaGenFSL7p549nrXCVRK81q",
  "key30": "2VxqPNUmSmRyEYc5jEHP4eZuu8BZYs9PhiFfYyqJ1SBRt2bbNQzxrhfoLHp3PK6hq5HQ4AWap8AVauzLQSAZ2m6D",
  "key31": "2apQAwB5cd3k6kZvxVD2akko7qnd9GQShDyEn7VYiFnr1exfJvxXHoiAVULnQ4FheLUDG1bcunTESZaqCow2SKwc",
  "key32": "5DhGU7Wm8BVS7nqKxVcdv6anEiVya5J4KiC1asFMaNy6pE9EpcEptFV9VpaBicjwjt7oj7q53d9BkHD6uLdAKBqa",
  "key33": "3jrN8LUmxqVLds71jRjPJvZ4XqcNRHUHSc1PTEzasdCWuiHEzUGF7KhfuxuhP7xTqek8syrX6RZqZQNpYMDgVgkL",
  "key34": "3kL6PHj7Fd5E23DnszFpfUbet5BSLuBddnwVvCU3B2ExjpFPiugyoprw4yCoC6Th3Yemr1ZVFwTgxrmsYJrg7ibU",
  "key35": "3uZptP2VKUAessvMQPmXMdCiNHDFCrSjVn8zVxxST8fsoYYDTg3iFE9oTv5jB867QThQTxGuD3Fr8PDwiHxK4xkb",
  "key36": "LMXp3CAuoALUwMakBVujkgMhvMHCoj2anMSFY8CJpvfSMxNcEJXhGGL6svQK8emvWJiZK4QjgJSFqHeABhvwKa3",
  "key37": "2FLm88sMG5pENqCvem13hTKUukosJVxuDajjPynRSrCgQ3CpES1DhEWgWy4CJDTg4Ws2qP1c6dDNp4umiqGWymhN",
  "key38": "2G6UJmzuuPgMydsqVbd19mvzdp8smZ1h81FKneSVzN7xmXbmSSmJ6Yt7YktqX4xb5uNVxA2mnNJAHrQmTHdRHBj8",
  "key39": "2NjAvhtFVUnquFJBdkDLeKGqQUrti5eErGqmD8jEzGbnMNx7yVzh9sWRukHtFzkWE6dcVPzsisYzcN4nf7sahjGz",
  "key40": "2Ucay3TCCENtP3tjZqvjcz1x5AYh1xggDbUTtQib5jbv3aBFLPRGjNP4uapjYXVZBMA8CpSPLfm8V24No4maurBZ",
  "key41": "5gs8Xfak9EHgqnYpdzkjCo4rQfWPni67h6yJTgSSJhkYq2TPZHduDnRYHD7UqAwYTFWDFJcExkXh2F9TKaPTFUAy",
  "key42": "2YgpXuKz7c96nBY4mnC8LW2ToFCnp3XfXZg2zbSvDfE5bYVdpQEm94U6SPFc5EjmGe1tzwkBdhzaNnNq61fMfADW",
  "key43": "2UyEgLWLqB3aCi9rFLgdMdbYB7GDMCVcR5mFPL1QyR78ufzxDNTkSUfUiHYztD5nV4hoiSDaPf1fjJHmybYVbJ2C",
  "key44": "4QLeQudFXN9dynpE7jcwCz3hzNdamvYVXyrNDGbR7QGw37Chq6Vz3aMyS2BzxM5u8i1bP3KdNXoPndLUWxx73HVZ",
  "key45": "3XPLGGewB898T11MGg1mp2FcTtwt8rCLgxjbHERxzYj7EBx4urZmJWJ35YcrQwdRGDRV8kDvrdRJL3k3zYBpzvJ9",
  "key46": "5fSPEroM6XeXajaJfS3DzhvHpxt6s6pt6Uv1iCxqTXV5AaE7TkTDs66xuuFku18g95tNfZ8QvYJkfN5cgRpmAgbz",
  "key47": "3BiyNJNwSLLWRtQGMK1TX286uFNa2NoeR7CNJKvSuvWaFMm8ugFnbbHvyX2u52vNEYa1YErpQXFL73gtSiZBZfKr",
  "key48": "2Wk421UhEApt7wfmLz3dMVGFfBu4AcZRaXiLBcdHzArPb2K6EC6vnco73thTecRhSJCxb15scExw6u47fDxzVDFB",
  "key49": "2ED6tCmBsgMHPZMYvwPiyCJQwGE5GCVTnVLPDEP1fnVLAGPMRxffaYQNmgtdLovZzsiGUeHpEfEaTJyRfiAdLXeW"
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
