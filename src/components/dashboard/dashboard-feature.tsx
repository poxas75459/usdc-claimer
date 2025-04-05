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
    "23vaQurDvoTNiLpUHB5QoPiaraLLhRKFxr3rWoZhgogTsHDWB7QMsBdmbct8Qh2U3mjCyAnKoFJHREv6RZQrRHXo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4d5E2965YsECeLPgSQHcSARjcTBDdMfmHT5QFMaaVycUEm6qXqHeuu93Jo1Q7p4m2M6CoRN6reNciDveLagCMgkZ",
  "key1": "4fE6PZ1i5yhx4uq5hsn1umTTTtWpg2roekW1sWzqbDbRjyiWYNrkD1RSVqwXDuwMryqugBC1YDh4CxEUhPBwu8zA",
  "key2": "4myimxaVEaT3g1n3Z6eMzHZtHyQEKYZ4sXUbWTEy87gUbfYxDF4od1kGU93q5kv3RrHH4TsQKkfwDHCRTpKatsSV",
  "key3": "gS7R6Ck2A5jZKgaYfKu5V2majQJsHtP6D4QEUvby1Xjji3eo4qMzS9df722FMHTymFxobBKUjKpAyy7Eq46f3ky",
  "key4": "2kcoWUHgd7eKnjitE7BAQqi31CVa3HC6rLgBHGHg9SvzsavVabAReehbo8wNpwxQ2LTGx2WDYWH3UWA8Mp4vz7JR",
  "key5": "4Mj46ocXTWqY7gSkddWYsuhN7qaVHnRevEZ72KMfYq8Fj1edMLrxMjnRRBYved6sDLgdZwaVx5SWhjHUguAoZNAC",
  "key6": "3MpjziCitqrb4LivGWNcTxU3kq9X8euB8UvsVG5xN1H4aQowuBRSYCnXLPcTSQGdPQ7sQ1PcLiMxYiHYhndavRp6",
  "key7": "3nURPurWo47SZJNEJoJs2m9WmciBbcKy9JJtdYszEPgGNToRWzSSVQg7ugpBnPKMs4E9rop9BhDDMnJEnpH2SR2t",
  "key8": "5KPpgUaN5cNBBvZ7G1iGsBnvwnauY6RdCLAyUvgN2yJJP5gXLCDW7eXvCeVWUaQ2DWKbtuaFxiTAtr6g3oa6zX7X",
  "key9": "4uz7wMDR6nGNV5CuvAEFyGCbvLYNvrayn9fVAUfj4hpbE1DcwVNJZQkj5BoWJw13wpJkvKsa91wwnh44vqmNtq45",
  "key10": "4YqweyczSyV8PBB7baX5RLaWhbhJGZ2iwDxw8SBtA3aHtnD12csqLUnqszNYwcQW9VDHahuWJ4o61VMJJHFX79Ro",
  "key11": "5DtYswDZ9nuJdEgqUtR9tTJa6Eikcg6GXnQqeF34oR4TPzX6QykULYSB5Uy8pma8szSoGv4Pfnv7hLKQq6tJj3rR",
  "key12": "2H6SJ8RsSuvBH9eJetrnENbY84pvh3csYrzpgGyH5gHhgDzN2zpyNaAG47GrvAZ5wpLQjdAMwvb1hymbWiSPsPx9",
  "key13": "53tjfQthwDUHNcGdMKizKdDT8nc2ayy3F3B9nJHx46hGWxTJ9fKg6jZMoJHAxv8yGyHa5DMf7BSTEuqC6pbaggZ6",
  "key14": "29zg9Uf9nGkEVK2xPCsmJueV66euDjixcyzmpDwyPGSyWzW4WWfBafwZad1uiTjVHy4FnbaTFiohfVkpeJHEHAKB",
  "key15": "3C5GkkVhAQ81U99oh4Hqo2S8F8CesDr4caaHAmamTh2buU8nJyP2Q2KDQsC5whcbg51Jj2Yh5nKboNz3tq9YLPnN",
  "key16": "4TviTBKtbF3133JonjTJD8ikkuZKfxTEMxSsauShAkaTmRUzakDpBud7hXmc5gd8gJRNauoL2dveS5roU1ieQ1H1",
  "key17": "5D56QL5LR4KTdRs817tNEfU48UR8JVpU5jmmszbduKfFmCyoZYLMMuPCCiY1cbj69z74VasCbnMBiKJGWSbdHu3f",
  "key18": "3YHdNLs2jxZUYW2CCB9QyCmd3PPcJWYbp7dL2QDb88mdG6PqDKfdNq7MstbUAZGXgx2FhcKVZLbRdrxwj5huhjFG",
  "key19": "3X1Jkc38tC1hJM8gF2r4di5LDBAhF9FBqbLuAJaaC8nK2WyAgT1HCFY5oz2gGRi1hcZsGHUJka8iBjX2m3F6EUaw",
  "key20": "3pHS6nfRAv4ULVUo4jxw9GcLX5BGgbj7runcVa5EHZiSiYgQRoeYWVDgbRUdBEm4ssAniLPyRf5ynoibie2MH3KV",
  "key21": "5VRdMw3z1FFCoirvCZUpJ9Jrtu8StSryBVyjpRg1h1839N3Pe7AjxgvkWvJhXwUvzpqNbvBkfVeRNV8zUcvZyHdK",
  "key22": "49nDgzhVUXnJ3JY794EuELN2JmD78h8C9yEqydQ4ArRkboZWKRN3kGP2o5fmAsC2dm1bzFuiTMhpRc3iX9BHvA25",
  "key23": "56PyGWwU8EieKoXCiudZwEKzZdWFght5uJeUPPtMcJrysek4vYU1i1FrL9xh8d1CJ6rLf7FXPq6m3FjfuwJArZhK",
  "key24": "3ampSFwwnJi2LAvMTMkwkmfeeTRKF8jybkq8QqM4rHR17sPmiibJNE6fSgD7jZgdDLw3RtTwPbYMbN2qorVn5tfn",
  "key25": "5SfQ5DWTAxyb3QA8Xk7NV4ZuT4NLJD4JsqheQjrTGpN9Q1tLi8X5DSUvCPoQTkYHbbmjSYvHtVbzaA4Qh5M2HfGV",
  "key26": "3GxWKhNqU1dGQiXXzouir7eVKi7iPGofMJZsJyGGgLTsqhV4SnjE4wx2rojDPBcso1Vbu7bQbVuqA3Td3gWvTJfv",
  "key27": "5r8wgThPBdS8ZnEK3Gdras5aTRSztn6fr1i553sWcu3dRw6LJSHUnwh354UTitb5oFnbjs1uP2FAaAcCtkBa8TBp",
  "key28": "48d79iZHX1qDnD9wSicRn958p9sm8eXPJC7j3wjJi36HWZkdDWewj259BEg8eA7riFJBCpKYB6eLjpuuBQyjxS8U",
  "key29": "3YvbFWBwgUNdSPkXVTchL4R4F5YZ9jgriFHQqMA8jkGdjSBCurtzBN6TYaPnG6M8hnLWxweKp3MkZmMCMDF3dg7Z",
  "key30": "3CNKipUpzSkMnkz2EwnyhqPkr6CGrJ47UxSH5ESW71VZQHQQifCAXSnG5x6anwc8BDZBLXzkpDmiVZgQqRtP5kE1",
  "key31": "xwx7aZuX6b8yJS2FgRFwjjGDmcTd1djBXH3T4Py34VjQAHAEp7XUn9ZK354RTttcbnXpFhp4JYY39x5wJP5hA5n",
  "key32": "5JXESNn258uPNsLkBdyAmXZuQ66QCDV1dvv6iSYiago77pNwcKwkrJdHdZvVEKxYcxLxSow4jgQbPLifipTPCA5i",
  "key33": "4aQAEuBLdpjT14KsH38YBeBmBD2YLz8iBZNU5dfGu9NwuHQWXNVYirGskNq9ZoGWxvPcdmtmWwZ3ehPFgKvUkS9o",
  "key34": "4nXUaCYojH7tQDJkxRXo2PrvecCNiNBEu7xzXzgCESu25nCwBDN9BLqZVGKmDjbuqCFw9YMdg1hbJ8CWuk5Ln5P4",
  "key35": "4zLKxdexHbYF76czQzkstphXvPdJmA8t7YyA3SH94BH89n74hkaetAdZZ3dhLDqLxyjbZV4XmucD29nHkN4PGKos"
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
