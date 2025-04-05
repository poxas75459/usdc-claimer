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
    "4SFHMWtkgAqYc5eNetiDKi4aXuQxtGUnnVZbWqCpmxp6o1v2rrN5e1fyubBCvN8Av9u3fuFbiW35pFBvhUS5pwn1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SQ9aeuPR5MuRxUtx7hLiQT4CdRGJ1RG5XvjjLVmAVuPhVyAamF2twUttvQSddoJVsgvvmuw7QKtSFFF9esvQH5a",
  "key1": "2FskbxzGZ4K2urHFnphnie8yGrFFPnKfNDfvETii4t3Hzf6QD1pXHc8TYzDfmdLtwA7NDp7xTYELNeZDukMMziCp",
  "key2": "23TzjzwrYfWdnTxczKHNBY6oPBYAc41DgvN5D74PKYQBXB2CVMULmCwrJ3TahyjAq4Cvkrqxh5nYrqT4mabmJSSW",
  "key3": "4tRXvJ8k5qSoYTwN6XFrFwxwYaTRRaBruSkdF1FN6C29wcJE5KjEJ9KdPH3Kpi7hcrdh1JY7D35LcS5cVR5DDR1g",
  "key4": "25dc9upKzpKUnmN1EsuyZrK3LVUo1PR9e9B5CNkNMmEC8vRjv4zGPjtwS1sMVq6PsZinQJmd1f5AUPUKuVs2XGb9",
  "key5": "2xamW2LETSgzxWDW2nnFnX8sEJTh5sqKkPSBsGXEqHU93Lde4SVNLZ5i2KysDfyMtqp8TR7EJVVqJYZGbSD7qeR2",
  "key6": "xH2CnQk6GH8RRh1sFTB5fXbs4Fuo7X693npjqTPyqkBN1hsqaMoMFHPpWnXDfUCrPtbpnM8nhxs7oL2AKZwPXXG",
  "key7": "5FphYVBR29Kq1N4Q2ni9sTWU7dzLcKUAkE46kwEC82wNZUCED1D2U1sEEvxBZuZkqCLhakLteUUEWd5UZCdEUSQ5",
  "key8": "RoW5Tz3sETngrAiGuUbCyVkE6LKx553An7AMr4JuZPF7MfoRcPWgYbDLNPrtoUiXKiTeAhVdgcTzHYP13HxAjVM",
  "key9": "2xEtrn67AGqSLa1WWzLbmq1Djrn9Es3sUp9tuKQRH5RQfcsmPa22nPovVwewiZhSwjNc8G24Kfzmcp52acf3WJKD",
  "key10": "37yF1CSZncwofKF23eTm5fL15vxDh6ENShhjBC4vkuVPMYAHzmAcWJnYnf1nFxWGZpz3oU3AiogaLvmakDby7Z2x",
  "key11": "41XV5y8MQHutY1W73HpsVUFhdCj9Mur47wK8RGg9Mb1xZq4xVEeTu5qEWgGLaeyLg4pUu24WxJtKHuZdLw81pQgW",
  "key12": "2BShJ51rc8qUwkZfekarGK2is9npt7DsscRK3wx313HXSfon25oPLRP9WTRtTwp5Ppy94W9GGbmmudfdX491DGjk",
  "key13": "51isNnihDoP4MLPbH5oyDe8eA2rj1aN2Ba8PAPmmWWqSWcFYfBBNJLyeJ7sptkbyT2DvZgzJrsC75R4h3qzT9ptu",
  "key14": "5pBvcHLu3e1m2oWkUnscZeAkbvpde5MdJWuE5bca8DVndAKccC4mU1AxYqicJDzuSt3uM8HJLm1hsjDvmbN4ApDT",
  "key15": "3xXhZzWwk6zbhR1kxHVX2JxgB1tLVGumWJYM5r15CqpD9ZgJJxQ7Yq4m94CR1NDRmkJigtLHBTCaPrVNpBuL7o6W",
  "key16": "3CAtYbiACrDe62Tx4aESAzSeSDx2w88PWi1DS4Dejie6FTMKZ3nB3rvzjqfgxSdguAb4vKNeDLC7Enfh4qqG5iPE",
  "key17": "4vaLKsjYg6uSXg6ZYGvHps3iAMutAsoPt7uHxMaLSN7ZAVz2kw5tBBvwFLxwYkZw4o7VBW4rNAhPPv2n2Ybjgbgj",
  "key18": "5oNXuKzwHR2zbNyPE96ZZeW8C6FshuJoft9DGANSeHzPN2yfp587h9Ce2s5nswe3ZBnsU2qHHiuMpdGVT1TVbYxv",
  "key19": "2pxNN85BZhJ7PsTHsNE8wpyJ8Rfir4y9g727hRe6mf1vu2gH7J6vZwv52UL8qn9txn6BTNxVegBUTHRYw5B9Shkn",
  "key20": "3AZ6v6qeGJkENvoTEhDPX1VegeWf8kGdd4yYcfuVD1zabhhesm6gw8n5wZ41zpWD6k95k2YWw86WV2Ryda2dKjJn",
  "key21": "38xJgBD3F63HVtrGZmtMzzR7ZC8RMSPVRU2FcPVLdLj6fcRhQmN1DhtGGJUEqkXEF7TyF7G4MJBYtBZxvKsgAdBq",
  "key22": "43uj4oELqmBEykSenhPPW9KfnmJNYLSUxPKhhjrPjoDTUmRUt1qU6N8tPSkSioy9dJxeoXFDStmNdLAAamoDDVjj",
  "key23": "4qPe1bmKfTshk36iA3SNLeVcUaFp8UwFCHtCenLjUDHTi4Rn3gDp9DF8ZXQDC4LmwD6HNxXFKDvwoV9HfUdrpaNM",
  "key24": "63Jf9aCrYu7y7zThP2cKqMd2YMTFVY1GEAaUT5QTFxPwgej4evQiwjwHMSkQZZYyKYWoL4XeLvV9N5xo9Xr2gUnS",
  "key25": "3xP6UT21YkFgHT9J6QzGhEuwCJWWsJmLKdVVYomnXZGC9tzwkd6PupA8uLFHP3mjSEVGC8DTKJuzjp6QNpKdAoDq",
  "key26": "4ytUmAT3vDQsBas7mzVeG4DDYLRkn9vfX7PkZ9rNB4DhUuf3LUPQc4JVqExAezqHNqHtXvjPhCinkY5Da3Sn8qQv",
  "key27": "4if9RoKXbFDehQsVS6PcU9d5iENo6FTUnFsNTtuZFCQZidt87yyMmccFDjU2hPMunp1P4nDK8d3iDQx57MqBEDGR",
  "key28": "ETWaFMGxS4Wywr6aZwWUsX7JcPt5PdV7k6STHnVrDbsP94uVB7bsKRMNWjv2WuL5erhaTJDhinF27qjxbcWcGLv",
  "key29": "58WivxEWFbKbWEa629Sn3Wg3aLouBeX84yhaFFDuGEVPWc1fKS78ixGaX9CvtjaafC7oa9uZjSbT6wn6jBXLCqNX",
  "key30": "2mz9f6ec3Miv6C438tnYsNMmLEnNkZNcP1E483iBG5WUByr7NtQC6hqBtyhoLbe3eENGSH2LaJvhjEocgvGsZ8X2",
  "key31": "3N8Du7m25L5aiVoJcSoaNkyTsubXzmsSvE9FcHhnfwtzm4cEAUJ88rHtZePyQULRFm34ceMeeCJMsvRjsW4woQKk",
  "key32": "BsSoASFfPGq21abn15D4GAxFvL7sFRX1JXXDDvJmv1tG8tj9oU8WMuVkq7DgGFbgm7gboqWAjqsUSQxEbtzY5RS",
  "key33": "DPMG8h9v3KkGqfGRkqHFnKSAFAM59zuSuP3KCyTvnT8uzDeioA2hDEPFk4hLhVx77TLbF5Nw1BhraAqhHyorkXT",
  "key34": "5LUKyYz8HPb4XEch5vRiG6gbwPNeB1fZi35gzZJMcRG9MEYe1kCcLaQQVVJQ8i6bRw8iWwErj8Rme24wiZP2ySnB",
  "key35": "2d35Nkci3RU3DWiyfAX7ftZSaPKAFwSm6q6pX8Sg2ScKpWGiEcRG5LXJTri6VfewhU3oGRyX3jyMe3o71e51sP6m",
  "key36": "2C8j6c1hUDw3B2C7YAwdk2HrECZDWHrgBpkJFD6SJRWysdqVncA2sBQwRfvKLxk73FfN42i4psejD6CEAUj8uWEG",
  "key37": "55A6zCBwKqHdGesXH7ruyeuK5eCNLXfrkKQzBnXhpqKu3EcqZFeZWMKTqP4i29424EBNUTmSpwFvrvkgbMpfrPSe"
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
