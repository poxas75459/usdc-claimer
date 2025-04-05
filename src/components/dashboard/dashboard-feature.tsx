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
    "2Jnb9C2qZcwvrCBPHKGeRYxpNFUc6rskNkEgj9GhvcHydHsnHQbpdCCkqkwVdRwgFYH7QQ8yUgHaps27TShw5kV1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eG4Y6zecBfg7gvtEGwB8kgNCeggG9GxgqwTL6zWKrLMVHSPXaDuF8oE4NSMMSkRtYRWV4U5MirjBxiedjrZUFEa",
  "key1": "4nLff9Pnx8Ja671FKKdgTNbFNLYK2rjPiMpucsuMusBUeL4gfUhjPh1XP3Gbykq7V42Mk3CQqRYAhUv3zUa8FRsM",
  "key2": "4yMKBCv5TxRVUpyB1oAqsuKMXBYDSqWZQjMrEwJKDvXZwhVk3jnCAxLA5UTSvrZpx6cRg3iFV2K8JrnbUGHqbprh",
  "key3": "3ZAkJktrHs8tuue1M4vWA5d8JbaTrisqr8KL9ycooUBuP6rrDiULZiZ72BcpCWBFpgBr2GbdxD4j2Mqgzw72yyAy",
  "key4": "5igs1VNAZ7Rw1NgVtqpqyUzkZfq6SDLuXhPw5fve5YpU3T2MqN3ZW54bGepSjwjkuYa1VBkrfQTVTn7GRoeRat6k",
  "key5": "49Aeva5WN7kNMhnYjc83NkYdwevXBzPRxoJ2zg7o2NqnsxDkXdNt3hRDoUCfBwBDmUyzFdJHv8TJnP8yJckyWK5P",
  "key6": "iqufiPmJjJPiFeURWJAGjJUiUZ9N8t3yB7hwT8DdjsaHSk3GrY2PDsaKAtFWwducAzZnzDBDRne8dPDuGkimB8R",
  "key7": "2PuATDtn5aPuSHZpgW6wp4nJfEjh1ujMFu1z6sqymJz2SWFXwKceqb3PZmaTXDzibnnVvdGURrF6q2X6TKW48UhE",
  "key8": "5CkYavCNKDfH5k2LMmoEBxivZCFEd8yornDCAQDEoTbhV191qya3ypDRLcowBSqV1Fanfyo3PwbabD8RcXkrV8ew",
  "key9": "4AuyAw6yxJQjQxKeyoRM3LTUTXJUdVfERHrBb5kc2CiAaVnCKYwBzzDKe1BTX3cx9bM7eFqjB1KQqeLjTMie7Wmt",
  "key10": "51axfYN9AQasfJJ7AuS64SPk5qZCZEnHjGQGNZWWLzhAkXi5VnPAnN1KtB9ev2MyZgTCNNT3Apxey6h2GjdbGirk",
  "key11": "FDA2iuheRJFXEf6f8UT6kv95Ucu72VECa88BoMxnSu9BrLrfVzUAQxqMfZ7n1p7xE2N8CbYMPePBU4FuN1JguEZ",
  "key12": "mHHdf9aUjUgx2PDaNdQ8rG6NBRYi2TyM2fWupTYWQtjnY1kT5XkVzDBCpVhthSNoAvAmHDDMc4AFs7LoRw9PP1t",
  "key13": "2Pv1rbEHG9x3VwdpaRdN6i7zXKYGA4u6T4cjPGzSTuNqVpjQVTLKy3dEGc1e9rmwwuBsXwaLwwhvbZ7pEBmb66rk",
  "key14": "8TcPs57cftABG49D3DrNKmLUBC5wwEG9XS4v2LDskuoVMyDuGi4w6ybBFwu13bdsywQmXTyCNBPVeEA99NQtvSg",
  "key15": "5KVSmJ5nbntY6Uoi52i1ACiB7usyKyNMRBNMMLQuNYhgMKDp2QMpjMyVrnpugseVEPZNgoffrcXziJ8zLV8stDRw",
  "key16": "3hQ48R1YgE8HTnWReLTJHkPW8xiEoCxGprPm5wv8MjX7C1nnTjVdk6V65oau4zXXSue2tUVU6cc1eDuDhjsWhKQ4",
  "key17": "4gLdTUFsy6NHwnsNSHxJrH9y1BkqmLfE6dMrLC9tVUFi8qCKMqnW4GACoJhHtjvpYG91LeKgeTXYqXwVRVDdrfSU",
  "key18": "5zr8Y6Ea2MLd6ZiA2nEv6MasfGG1bUW6zD9tj27DMn44mbQgSJkkHQe9ysdeBwDoDNeG6yrbAhtj93iJBTedaJ2X",
  "key19": "4SASYwbSZPedag2B79Fp2ELpHKJ4opf1nhw5aKE7dUFpmyqnt2RiNrD3u4eKazKH7UyS3usHkBsEGSWWnn1aoWRZ",
  "key20": "4omt4BqVq2CxF8HwUXjPJNhZYaJe5iRBJ1iHU52c5kXFAt9ey17DVqQom7rJ43b7TGG4omAbSwqcm5LyJSR82HbU",
  "key21": "5s3kuZQy5KGSvLJfqjHsetTrqUHUxiJiAr4XvEvF1oeLXsFRmF1g2bYXvMqRPXDwo5oDjit2emosBHdpw8dYQ9Qo",
  "key22": "6SQygJjgx75VXWU44LWk4VRqfFhgpKy7syY9KKk27AEWcq1U9HyzRUabjRXPE8vYRrVkk4mWXGWtFHYefqcg95L",
  "key23": "nina3hk4wokQUzXEdQ3ottCfrW7q4aYhRxzz9DiBhCbKJWv6m1EUbNJaQa7CTXuYA4RLJ7NvWXatKtyXt11Jnxb",
  "key24": "2gCoTYMi5zHrcgMF6xkSDtfcsUdh5HxmZz9gaaLVjAe4pJZ4MzqeLSjrACHwQvwCL4HjePwsyMduEuuh8reYTRGx",
  "key25": "27nCgzQ1EyDpHu9HVsJGdTtZoTEFSqu39U2om519Z8Ce83Ww225Cq4yQQpaZgPmhgVjGQhXHwFJCZGduJfpSXHcY",
  "key26": "5NhSxcTruR2j8nrnbe3DCAWZQkwV9hbvnb7VwNbyGXhRV38z7aRhdDuUBbaN89yzf33JmLwXLx8zGfYSJruKGv8z",
  "key27": "5M2ZZJ3MosE7maYCQfRKVRiKjpGMTbSYzskY28MMtJ9w29jGgdQVCPYJLfT3tqpWqRzS2KFwAk3yP4isvYB8oqLi",
  "key28": "4QrwdtdBeUpTNoi3koAkFD525iGQsZZF5ewGnEfdW462fF6yBMPrqmrckae4KZdNhb23rNKgNwnjcyPHLTv81XUv",
  "key29": "B8E9AZ5gjYAtyYZz2U28jaZ2sauTx9E7RfGAZ3a8dXJrVuuawHy4PZKSiZ1LzGH3dcHVFuaV23BdWbk5dQ8PSHh",
  "key30": "5Sbxixmkh2yBehpyghx73k2yE9igN4TyC1E7kAUjsNsLLo6KsLdBMajVGZ7U18X34UNQF7qWG9RmZd9Ud3ia3SNw",
  "key31": "oqm1QDa6DJCuvzQ2ac3kTPjAV7E5TUQ6Dy58vSHj56pPcREu1Nv6uncYm24uZM9cew7vvFravQQpKAeuUawrFuD",
  "key32": "3RQAJV66KLncCznxgUuibrZVpfneZyTiFPn4Hkaxobt8Xr9i1WKBsMSUHB9oD28DUUNLtCSFbt79z5R3cUQEy23H",
  "key33": "2bJ58fPYKGus9mRZgdwEBVQBpgDni4BsEf12LHGxMJW7P6Kh1Nbbqjr8QEEmSxyUfGqBmohyYyVrnDE7yzX3FkW5",
  "key34": "pAA9tBxYnk8MguoMxUaiB59QCZEKXJTGF2DES2LjZmdQNtodr7zQhv8gneUsbuDQftKJm2XdSsjzrPMnGCF2YzG",
  "key35": "2JoeoRinvck1hTTpgpspuXMMax98a6BQrSn8LyGofWm17nf3dGKWbAp9bSE5YP7zW2zVSgVCvTFhcgZow3V2V22S",
  "key36": "4DH2gPgkL58EXHYKfZKaTvTY5yL3v3Nhn52Mqt2S9vo3zipT3zwZZJHFk7MzEF1XG8jjF45U5XsZBzVhFrzqhwpt",
  "key37": "4ySPwNmoAqQdAW842q3x17EHUgyMHoKKNLArtsSiz8QiUh8NpAsFuuwKhHAMAYDTLuUs6zhZJBKWT8oGNBtsCUrv"
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
