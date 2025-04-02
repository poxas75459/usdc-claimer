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
    "3AL7wq9B1Q9TEHKGGVvk7tYKPW9CTFh4kXappGd1h92w1nfSZ4e9QhCefLfwzmJyXXUWEW67nUVEzeHCVG4wK7Fz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2r65zqBpz7STFrAjo3253Zi79578FadibnrS13HA2fL8hG3LdnzVdo2kRFnuBGtFavT1yeMp9pK9XVVoS9s6mJBc",
  "key1": "J5XoKaYTwLsG6kigVLa5fyqMzFuU5h1Ff1mvaJdcid5aQL1NKb2eTREakUTiGnKgF5HDYsiq48YPoUxUxPaS7tH",
  "key2": "35HVS7azTsgy1nsHJKQFBV5mJYhEVQsd7xiUeGVMLPEETv1qG3kWn5iUmHjjpYKSFi5Fdfims1gTiSz3s9mVFJWS",
  "key3": "5MAgspkHtF1oxJGZnLi48sN81m9oFQeyrUyqCJw4hsbEnJ5QV9EnbFopgPKJiLAj5ZpnznnaHWxgssZg9nVzgkyB",
  "key4": "3SMMjDgesNBUCN1atMoMcbaEhD7WgRHZ4FR4B2kFb2m9F5GU6aidWTpxs9ViZqZiiL2o86Fu65EoDP66KuiGhFPS",
  "key5": "2L9JZKUdDDwjt4u32n8nprDotW1kMTRzN7Km5hSytPz4BNSYGpT5R2AAYZQTCfzCuDKyBbJwQbbKNEurpCsRiazD",
  "key6": "PzoNLfm71ErXzYTMd5VbPNZawWH4hmVNJ6F9J7sHca3P6sowfsShCLXiJUJTVF3N9dUgTrDGqRv1CJWxYoqy1jx",
  "key7": "2EcrYBA992KzR9DFn1SNuJnZNjRRrrdrc8PLH4twBq3MFmoqNv5syJdrUxTvrAcYTXWLMT9Vf8Ahz1f1MPSAGqg4",
  "key8": "2cbCbM7RGyLkzkMwYYbVQUxCD8xWjjyU8PuwxQkxBR3MfxCpvJwC54Yv5z8xfpuvWmvSJczwQ328os7ntbEfhWbB",
  "key9": "LWeVpYCeFhDJ4oN1TemQiCakaBXfg2U7bPaVtC2GxRbbsKHCrGtSURGw3UZSbdaBvQCevGWNiRR6Gsp25D3Rjvw",
  "key10": "2qh7SBP7wXJueu2bdG6DY11YwNXC2HbmZzFSU1HaEXTs62cqm7fabSW9SkYXSybhuVmR21SLxxrk9iHJDjgqnDfy",
  "key11": "3SXZzuGENKrGHkQCJbrBWeZxuzwfmjBG25SwKrtPPFXrPJmDzHzb1CapNfa3UJTKopWKHvEPsAxJPfXjF7RRTKeo",
  "key12": "4S4b3xkG19tpq9xPtP5tLJvb75bjdgMfkMVKRW3NUFxw6SLABKmAwwmkGb2jeE5Ajs1NuJJyxehR2c1CjpzZW4HS",
  "key13": "53hUQc8JnPawwpg6vUQmi4G4UzouGi55R3ugJcxRtSjNZxSVPgQYLcsCbdWaFR6V9cLygzq4sVPWzipvBFVGmUgK",
  "key14": "2EJChFAMUmZYCop9rNzE8ULYZjQmjqZuDuHewnFCrbTTmY25abxHkDZzCrJ39mKAuSQbC2kiHVZ3gFRwh7dysero",
  "key15": "5C4ECZ3h4DPm5ao74kBpUAerUtCbqvrWZKe5xc5kZgip7jWJzPsvJ3NaAmxjAoKqxqj621N6tDXniJ5k1Pc1B6tY",
  "key16": "4dWrjh5vyLDrc7CdjbDVT1tkbxA7tR5kdW4Sa5z63yUsWQiBMkqwtAX9Ls98BWpQy3pQBteiRGHb6fn2eFVHbykw",
  "key17": "5vs3JZ4zjpLBt28xhgmTF5SFwrQkCUymjFpyF4GN8CH21uyRoxZvJdY9i7qmwKg4SWBGupRUzzUtBxQscqqcVRS2",
  "key18": "5qL95nPox5fa7LRaM15ZGf8vhUdTkgwHxKZrU5zuJVGfRrqfVHJCXKQq8ZtEuZVff7Bj1tTMZ247egRPDZUwCeUs",
  "key19": "YPrjbPFCSqafAKknQ6yYEFKutzNdrTkpu1QGSNb6qqUmC7zbujLuRYYaUKYrcu7j514LMKFHpZ8LEsL6BJr4huB",
  "key20": "3sfnVd5ynsTvDP5jTBunUDJccUTRYZcTPfZ6yDhvMCECRipFrN3GZvR1RRjPBPvGXyDkkzZAyFkbZiKoWniawJYu",
  "key21": "44kke52Bq6ovj6uqHUjbNWkW8CUUG6N1sh9nMqgY75DAn1tEEUAvP69Zt9b1J34JcgRhLD1nLeN5sjHJKjhtqqHn",
  "key22": "3is3cFgHR5tCo4iNHhp59w73wS1VjYdNNG8ytysGCBPn4cfzArhjGj6oxUnfEZKkDnsGjjdtvojtqQg2oY4PKrKM",
  "key23": "23PQfuCGtmeT3ivu2Hozi9BdJMRWeGKwY4r1Zo3KfwP2axnryFD5RMQoA4mfLwjGfW9t4gmcirxgVEpgebHoRdaD",
  "key24": "1wUSgptZi5YMMpLMrGXaTE762RwVQUJt98215fFZNfqoN6UpMEys4npK4jMNDEY4dDijQvCdceCbjnTyXhXE3Bo",
  "key25": "5oqSXZveGZ9AbeBRhL1AmwBpyt7p8fqeAXWDG6wKbWjGjwxT18AFT9qWbQ8qB1r1gaBck9puGnVxJk4rvxpa9MT8",
  "key26": "2MvoZuBRjcVWzNpQ9WWxjQQxhdx6CcyDV1EZGynymZxjVp36Nquo6tVJgf49nCXpcxfFgaK4ibzg6oGWUFYj5Zx6",
  "key27": "3z9YXoEWnmiWfNzryZwKXpvoK5NbUzH2TXYprLebmfKzaVyh5B98GxxzNnGkFUYj3Y4qbZ4TYWSXG4bdfxsxThEW",
  "key28": "48HFdQTSkxFSbhbddr2r1JR77m9rF8i82Sqw8GXLxW2XVoxN9LPuxPCJdxaYEbBTCXRaaosmBjpWANnzAp4tdNaQ"
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
