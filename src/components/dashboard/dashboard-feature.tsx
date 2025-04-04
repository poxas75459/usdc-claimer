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
    "322XndCpxK4xc8fp7KAvUqzUbnvZQS9JWJdoTonvNrwSFr9yvj8AjxjxCnpprG7kYpykvD1CNTWHdZWK8hG7foy7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jihA79Dohh6WvwKEFDqDbsZdZ6MaCMk3d96cwuVuPvYoPifutBeaLjfLHYX4ryTxu9aww4f6cytGrbFA56zQfrA",
  "key1": "4hVHkU4mLEnt2DRphHN8ydT1WVGJqUp6shUxdZmxh3sso9RUJkCGtcnjqWrBVhigyAftyj8VwWbt1ZDJobBjYc8m",
  "key2": "2fCDLz6NjfzwLtdgqyhbArhUp6wQLXBAww7fX5eeCtTLW51fCxs8hAdm4BCw62XGd67vFyZ4po79zhnoCF6NBkJ6",
  "key3": "2cPjaRg4VrQHfUz5RencRF6bX7K3D4tWDyE88tsgn9abrczkzwRKs6NAU3ydm4szC7pkoMcgv3oSmrhCGfrAFMM8",
  "key4": "eGHAhRqA8uQ7ctnVPThxCLn6GHWinBzeQb59aUMfe2Yt3xpZ2axFaQQ4H1oUeQLLHY1KxzvYVMSBemfrLp9FP99",
  "key5": "4snuL8vtspcsguyU6a5e41sDhmRadS9aKXRqzUBgbdVij8xYGVbVnd8H27DrvrwEKudoEniFaVDgdCFUzCJJ8SUd",
  "key6": "5abdLjtLdjgWpr4Ffq36XA4VFsA7pyuTcZyk6Tsvuquvw2sANK6G5g7abbW4Qsa3FE9m19FCgwZnp2taK4Wb7c11",
  "key7": "4AA6VimA7shU71RyCaTko2Wvj5Zd66pnRAkDu36ydDtHqUCZ2kVxG2RyA5D9paq2zGpY2MCdnKnq7e6H8uEuBgT6",
  "key8": "3XvpeomSGqA2yex5w651Kzyv18CB1KXMHfJDGKuCU6BBf3sAJDYswsn8k1uRdKitkxPAnDrDDyYk2fKn83qBG7yP",
  "key9": "29cV1Li6491M97dv1UmRdj5u6mvquiZpbw9UYDCbBCY3jN9taZH8sSsxAgNKj6U5BRzKg4EW1D4vmVnj57BAnHcT",
  "key10": "4joSKtP8GuTWg9wHMccCWAe2zDB1KMYvNYC9A8BQyam6VEw9Ag1GMKr3b4VReoJk4D1Goe1sKceZ7u2tVBwSGPGf",
  "key11": "3NEKuznEbUcdr3hiHe7M8BRFh7XLkeQoUZvfAwUNJNpEfUmHpP8PC1qPWr7yd7AbFWe5yJYuUvG3vWvM2xxgB4vs",
  "key12": "3wgRw4MZrpQ8ww65yJkW7d3SfsK3VtgSF5Kpf5M6nwopBDTkxtvszkiJnfzori89SgYDnH6YuJ3fELzH1L4w4hjN",
  "key13": "uYRStUxjCeCR51AcqDoZaf2qivEjqBKrznPbo3FfFfYrEzLM1xztBuGCARRB17vztHfC4jfaPzXX1jdUoim5jW4",
  "key14": "3Vd41bRtBm545c3BhQuBxvyyCGNfkKTsGyNG5Xah8RQLrRyg2w1hPKajDmfiA2jJq8yepjW6aRMEF2enMCWmsoLg",
  "key15": "4XSLFZgAjLHMnYeky4VWhxWyaHu5PRwgGVvPFYqtoi1we5V7qQyoK7Md1SQ6D2BEz3okz2XH7yVbEd9riR13nRnV",
  "key16": "2opXyvopDAfu7sG3GQERbKxuHv7qhLV1Tmtv7sdfmjxpLU1psK4wVDPEFwQx88qbWQ1BuM77xB7pL3goxoW7eTmi",
  "key17": "LQcnyapvGsVxWEDTCwZbFwou24co2muk71FHdq2NfVbH94UVRiD9iVqhZC4Butzh5ysn4xayEzeBpD1FA7X1UWz",
  "key18": "3oyQZk6qHqR5vCctqvoEBEQPvFa8QePext6Q3xJsW3ftjwETxAwBfuf7bodwa9Ty9CcTx8588dpSrHjKmfptLB2N",
  "key19": "5WuZn4G39x8WoHYZ72y91iMSEGHywBAmMHrVd9RFD1GX4D3AyDBrZACia8W4Z5sJB4GS85ce2MuBZ8YuQCZtEuyq",
  "key20": "3J1x4VdVbSxabWnZmLPTBfV6uhyMRaQkKdHwbaAqZFY5kvsWdJu5pukb6SFPg7GnZM1s2yn4VsjfiVd5wi2qtABt",
  "key21": "48toY8PyJvuj5Wbb8YHAVpQ5VzjW6wnEfMrnqSjsm69evyLu1WmqJqfM8bCZ64fY1mfV4hb3Ly3bXQkDG8fWG2rQ",
  "key22": "5fsCWCJqarGJixaWq2c2tFxTferkzAhoym5MU7ciWVgJ9RrVYbkaxQpGXnzif2QwHnf7LuBX6CrpXZ7tjmWizyiu",
  "key23": "41sPMmojpKMmVbqDWxMSfp6wrECXRch5JYhKDykXqHUybMqY9sUCrj8PiZjbPBZwtEdMJWvAyf8ZV8FzgDk7uiDR",
  "key24": "3hSHW5ozBWvQTutx8fXNHDCKSpxaLfjJWkHNBktfmaEKUb5xdTSuEPzay5oYg1P7YXKANC2VwXxcGkV9dfqNQnjG",
  "key25": "mmGBfrfVEx6baGCzWn9G1FimA8MuU86imhZR1HMHQiwQH8dZbFeDNPpCq6rHt9J4c2AZt7tUHiZ4vZLm7RWPUq6",
  "key26": "2us8mqqpYaCzmMkLsLBQRhPPymXWdT6dxSxNRuy3RnUfEhVqgSjDZoAzJGtsUSxsvgmCmxQPLp41s49G21vuTmdp",
  "key27": "5KwT9nTdegZX8WunCw6FgvrA99jLeJ7HNPJokcQZxKBzSpTwfNe54nkZPixGCSQQUZWZ4Xra7EYebVEbEfD6FaC",
  "key28": "nMdnogxf8qKDxQhn1V8uiBv9oA6tTzRykEGX6tqLScghMJmNC7KPjCE548hPnfNZdLiPfCs3qfhKEAinPhd5rkU",
  "key29": "5myUmRQHLA8D61sWu6ekxHnvZ3NXLL5By2y9yHVnv42yr3qnL3xrw9SFFrv1buFWF8s7bMXQWA73iU4KwHKrCwR8",
  "key30": "5NsSdyG3iLDiYxrAyMixfshdu9zz2BkYxBb8E1VrnYd6Pw9TwtaLXKbinXKyJ3pCwgnnNKt496Jpc8TVbjrnLd5M",
  "key31": "4HqWZpyiAFtXeVA6uLg25hbwQzcVRYNT38Jj75tJRhAB93YatSDC5f7wsCNvHVRV2FzAstHJUdFRXkQ3odgdCDMT",
  "key32": "2rmZqtfd47rbsEdutKQGN6czhZGGAKZnG9RwBrY4Mv8ur75EQRTYuTbCxtQJjSFPsiRvr1SWQVVeKyZ9EiJDfnEc",
  "key33": "4FsuAJuy4ki9jde4TFFcgxuWCNLkjhzz34QPATCC526ePdfRJu8YVYZaxHELE7BTXRKijiXbPbLoTmwqjhb4XsE3",
  "key34": "4qpkKaJtPSxisPgy9bKAnhtrj3MATjb7riiv8YpiDsa5kErassZpf4ufAZvKAVDksfLMkiRuX1u4McUMRmk6rKnK",
  "key35": "4WhaSvJUKaGHhNqVsoHpYbzDoSC5GA5baiUqAiH4qhmqGuwoghvw1qoomj9RxSKqY3a9ZmrwAgAWVDkM5SEtEiXE",
  "key36": "3kiCWh7AvLfJuwdtccM3YN3ZYRLXx461MJC8UcWX3HacrzhMedJTSNTeoDwDA8QzYV88bX5LjAiMtKRKisqsaGtX",
  "key37": "2jwAa6Lu8j4B9Z4R6gkzFpBeLZDG2nYRFT6FEKX7AuhEm71JwHSRuFWXvPhKs91iL8qHT19kqxmUSs1C9gVxMdCi"
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
