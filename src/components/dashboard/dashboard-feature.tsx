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
    "4eV17ZA4pKFDHaTQxLtj9Sg4KaAiGRDRy4H3MoiRsDQunD6xQuQiUwJCEbwMMDKdmNeeUfZdJVgvHJiinCkjfPqi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZLS3QRYDYf51z6Kms6taHk8S2HvvC7VCAnvWRSifgUPMLTN7h2SLpVnqkZhbiD5aWRN2BQ5vyTxpmWCvXqov7TC",
  "key1": "4dnZmCVJ9qtL2Ef7rCjd48vs5PAk9rq1A8m9rC3zMo2jzV83V8MhbtM1rYoaZCKC55Hq32VoTVrs228Qs4WTLArU",
  "key2": "4BHYpbvQ2Y7koKJ5vmgr8RyQJi2a9gPBjEs3yGLCaqqikfhBhm9sAbEyoPqhRpHtxsvGnhXqqcCw9tF4KKoQAGjE",
  "key3": "5WeGgEGMYVKvbSPNPeisUPZTsrgLjsbD7CQ6Hds4BmdhJ2PuvnJxsE9WxNiNQ4HzWvvw1kmvCbct85eH5AGLW4yQ",
  "key4": "51RAYypQWHbntAELLDGbVjv7XTgZLezowUkJLF75Y4JnphfF4Y3cqgKRgnRmUpvyr5fwyDGovYRqaU5pVqmUwBWx",
  "key5": "wBL1WyGF9dg3BJfXFJSEHGzeDLj2FJyMN6Qat6myhyQ2BCxEPVBBKdrdeYWuUyZKCceHEqYH9X9gffqLHJGjvH7",
  "key6": "5rQ6QdiHAZYaBrEWKXjixwYMpK8dHorBEr2RBBsUkfnN5ftMpfaBb8wzVmc4dbvfsQeApw46SqpcGFCeCWinnAFw",
  "key7": "3Hr7pDtouvev4sWQM4h5S1n6EM3ma65DMxQYYyVu1txBbcMjq5MPntFkCY5QuKtNfpDK6nHbGYK9JPapznPatGu7",
  "key8": "4dr2qtX6jAM8oRHHjq5fbRw7adZHMHYpX7nzuERx3nbWTDcaJEqmr7ZyYzVAMk3wDP6rKmGgAavHovwPTrxk3EjG",
  "key9": "2tHZprmE126PiBmhT51Do6hiBFdvvjwve8eVpdHGpujSAjonRSNjZBAffF5bMSMG1RxHMWDPYfvUNYbdZ1fzTz18",
  "key10": "35mF3ixiFZZRuVBmyLnajYTgvdSEfK3nFrB9aeZtgK2ieCV6LYgaAyxVZQo38jtwKj7xnGFG7YfZFv4zRbdtfyzh",
  "key11": "4ALpSv6V7PHZw78usopNm4i9LL6oXmzvawVBSkfmmrHqR3PSk94togmHux5VSCRkfgMr7SDv6xEwXoiPcM96SRaK",
  "key12": "5VuocUiu4KVCmfA3gCwTFFwzVfTM8hh3dCwWKp8BLom4c1xY6b1Fo2BvL7HpzJ3wfhtyjsLHeKMWay4SQwNhmFyP",
  "key13": "2h4f4Kf3d9JNcwiEoRXLysvLNkGM1sjqtpzr7PGkeuX4AhCBeYSp8S5dqghkvQgheQ4hoG9qVehTHh7yfpGAvkDk",
  "key14": "NZqAxBBckzkCejY2dxE5RpvHAvqhggXr3KHju5kz786cXsboYU8eNFyMTbBwuLZNUJiMMitdmhXfFGvDPhMZM4U",
  "key15": "4bTZVPxvY74baydh3jLjobwGmnXLvMrKd7AH3zTm9xNUzBqD5xcDfTwVQEgHv9pa99G9G8FUoAeUJfG8SZ37ewZg",
  "key16": "5YLHyBxEMyyeJmMZDCGJhmN7B4b6A8yr42q5GoLkpa2RrcgMvnWXo59sgniVpKXaQ8Dq73rutQxkP3zbkjbHVBeu",
  "key17": "4LjKp1kHPHrZPrXTjmcU8Jy6p8ScdvxbTNCdWDbyXVpvf5e57oafaKZMgTxgEwT5ezj3DcVvDLMQkSWnNxYd163i",
  "key18": "4QxTfnwAW6EnNmZuNuAyR3HiVFQxMQZHJryZG4sjnWamLJnAsGERhdmjb3Eznvxgq7S2TJ7S2uRCwGhGVH6aFSYN",
  "key19": "36Ke59DAmQYL5Pz8TpXX3SVA3D5m6qQBuosJxeKcHSicibBvopFgJHBzQvUVgNXYZ8AXVWE9iEg5J78Jehtx3pHy",
  "key20": "5cNkHEVmiMq3eoqKXJiQKZ3y1eQno9EAKi15SgG6v6c1U14C9F2VYDFALvjSHWWCdspJPeNUJtz1GZFnCUkVFV5M",
  "key21": "2ySys5kxwf6KPBPiixkGWcyyApsFEkwjyAfL9rzvQir96FFQVKVgsp4hHsY5JHpouNtmYsiBN7Y4y8SJefdNuyQj",
  "key22": "w1yos9upeM5mNLLN5v2RgFqTFinv7HWnwTK74E3tKZDqjWvvRTkfSXfKLDpDejUjrhWV9rzoMW6EQ9Wpp6vffb2",
  "key23": "4uYtGka3TkKwTyXWu6dkXF9QvFKMYyHXYTq7jUQaWLj2QRfebsMaaU5JeBoYRWKx91enbZYomX8ocwPp6DtEjKvs",
  "key24": "Vs1pJ7Xua7gdDvFmkccZovS7xL2c9ALUXcyDvzCPi6TR1JvdKa3LsBqHb5wXeLUfVZrkEzZdqNvnQXhjJdhvCW1",
  "key25": "3eVdFv2vyDQpacrDWAp17qVzFq3LY1qF8gcyPtqbWc6dsGDv22XYj8ro4PqWhhx6T4VeGswzyfppH7zqATNHobum",
  "key26": "xXK7gitgB8Y1kn7cusdhLhPBqoy6H8S7xTS2fEPSWzKLKeiPnY3wmLLRbNCqFXVhLRLXN8y6uHgpATRciPhQf5J",
  "key27": "4TaTavpfD5SH5nW1DfmSV2mdTeKT32cujH5HEL3XaCN5pEZAXxjUJ4nvzQ3PUVVJLwZTBCReF11j2wJUY7TWZorj",
  "key28": "4ZU4zvGra7inoWnrGLWPHtYzMbtyvHa6Penw7vztD5GmugH4kpxgng6jv8KVFjdxJMLDpprJKf7PDpkxuubTB6AQ",
  "key29": "5d5rLu3MDRnP3uXLJCH28QTWvvYKWCptaBUaoprEswSKcZwtdZC3n7hEd4JKsEpiiQ8vw62LfNvjyZDFTbyDz2h1",
  "key30": "7MWmGGbgQRNkcR5rcnUcacPoQUXhZDYUxDFfoB4EuB7n9uLj6uEWxkBYXaveaoSmEFPafWJeSAGH1o4U654XYM2",
  "key31": "2ou3C2PowbHnNEpB7QwWuDjcCMvR3LgmkEzfpCdN9dRMs4Fn5JnC3rbbSvCuZD9Td53rYytbZ4fBihdT3X9SwDi5",
  "key32": "2yxjeeDBEAdJpusTN4CFG9A4cgzuaRQnTgaGp1aYJWVYyvkzC73MvCq2nJkFUmZxuGT5zEjxF2fFW5DG222TuVuq",
  "key33": "4vGhqmmxhWeJXkRbPZKCwwt7YTWohRcqtdXixw7swgZ7HTieUC6We5D3W3ypmHDyKSmj9qU9Z9YfSYdyzLUT9LwS",
  "key34": "GYpnkMaqR9jgKTF5TkcX5VosaabNnnz92PfcrzLZNwCzJacBJ7UNuMNPQbPZzKq1ZHNas2BpWT4ZXtmNn65pTVF",
  "key35": "FeYxrpgLw8EcMzSnQr2T5CJPMrnJoKNRTG9C2C6hTLkEFw9UgHK5dTXf8YhzGUiVNjmhq3r9vE5LUUqUERZgJgN",
  "key36": "5Y9i1faEpYr7QxFof4BExxGwAmbGAtBbQSWzUNFWgy7zSfwP6qH8Dz1MLmZVAJQa6TUfYRVKd51pM1HUawRipKAe",
  "key37": "2DgUXVG3ExYTcY2dfqdPymf8zHqSTp2Z6Nssq4pYTN2KTBaH5m9SPrzkwgaWPwrnFZrv9jnKqXGWAXmzoiUU42CG"
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
