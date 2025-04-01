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
    "21sw3iN4CwMXXFdVKBr2y7iEFXRqSsSMp68fRCDkVAMrK9WegijCC8qV5GdiGS2xTssxt3uX9bZ5vrU9v8Yjdkcu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UMFu83u79CCxuJBDSruojqRqTJhQ4x9LHGfiGxCwnXEdBE6WYvc55DYESy9Am76dBwFKAApm3pYhz19CEU5hwsw",
  "key1": "D2pkTRTe77KCkBazsJxnnLAUueJcHsmUmGCMxubf6Zhf5fMVP9JG2oUBLWabZYAXdXztyaB6zfX3hjAJQBTq7C5",
  "key2": "Tt5vabdpgURqwQ5CwLJ8ucY7ZD4Q9AfoQ8U9gFw7niC5ZK5VdthP2a3L9hYqSVkH4qcztrbsxCLtL84r9jn5RFq",
  "key3": "Fh8ztTCRtXxqUhq9KnwHBPcgDY5MXmtoxfAL9Ug69F9JDoe1ZiHmTjKDpJj3hmYXE1ZC1wj2rqDxN5h6km88LdV",
  "key4": "si7og6cRZvFov5sV5Wo9YPsU1nEyGWXnGAXN4Tsn3Yt6YoeK8Z4gXZ7vPbabzqjVP3TJfJBqPCQwuPb6tAUgzeN",
  "key5": "2bosbbELZMM6nuJA9EouzkSnrSXscaNGMqNYHrPndbutXGeNPtg3TWGmBNKRaLA3V3kE6SPxwhrJTCdUaYJ2vVhZ",
  "key6": "3kdoXnPwAwAovtYwzp6sxMBB83mCQSrB1fnuLuR1cmLEHzuG5iA4TzEd9LmamrQ3cxJ6ih6gSRWcqU1PvCfoN3iQ",
  "key7": "Xp1Pk4PfbEgUJk82HsNGeJjquQc8RZmbiJLFoXYdkZvd4j3kFBYWYHb4azSfZm3nJACz3mRDpVW8taA4L4trstw",
  "key8": "64nkDeWfpk3746834Betth3tya61FGh73TLv7jiZp18UZYiRmALfCKABL8tXxk197ScCwY4UuXnWmmYg6Xk8zq9U",
  "key9": "58svbWzTGDWsrtPgVnj2ASzhcXomSAow2EEPSYrH1BeipyZy54k1ffWYvoXoVLuk5VHsaaqKRVVJbbRCfg6n9mEq",
  "key10": "nB2KmNqbcwoKNLFrRkTuRhFCEj2uNsHLiSfGdauMTnQve5KKG5gBatXjA1nexntwRFMRatgC1St5Qc5M3QWsnQr",
  "key11": "3ouKTqBvXCq6f6sgpr4x67P3eo91DxdKCAgpxAPpiqy6D18WreNsS9iUkAMR718bGYpYLGhfkjvbUuDKjCnvN5U",
  "key12": "3fGWNPxctncFuyZVuHAdMxbStsbrCyHqKEJe6SqyJsyNqauFM5tLyAufEkzGnvxgvsyDvmgQLiqCJ7YzXKrrwfAP",
  "key13": "3LSvKEiwoQrrmp4ByK737E3GjXnGFSpNRmGqsj9y9H8CSivR6wEHWncVGY7kPzrU7b5DhstqiXb6pZ3gww6gbDdF",
  "key14": "4brxov2gddXUFBREJDDqQcNax469gBXSNzsmJoXmjNJKtRDt2rnyupX49B2nGuxTqWWzBGGWeN7B56guvZm8a8by",
  "key15": "2rN9Xsc35Ja36KUkqmgCjkT3EoUmai4RTHKQrHMCABSH26e6faQ7RxvBjkYJwgAtwioWXABNmSYxzPv4YYEvSxoS",
  "key16": "3e1AMbitNnqaEciHJEazRXmUtWhmPP1wvCbP7hfTC6wNwCCEdgQmtiFs2bqQH1MKrYgvSAGqMJ6ZrNzDSzhKsYfJ",
  "key17": "4WChBvjTq4uN9ZiC1stLVAW83mUpZaRH3P9ixLYPLYzo5zkRmQU1o55YCG1K1s4xSH1buGiFbbuvHN3k8m2hR5ho",
  "key18": "3Q39F3rchJd34UuZcPum32aodyV9UTA8HH9TffnQVnaFYm1TL2BCp7CF6co5Hn26JYjgAPyQdcDeZPg485hjLGu",
  "key19": "2GVSBUjesuGftWhfEgEhcTPRGCNAUPZ6F3p9c3gLDt9191NrykMr7zPSHQoM5miHocatMxGwJ1wnegTbjkzGyh57",
  "key20": "YbSd6eKHGW5hVcSxNB6avyQ43eYw9u7njhZffUXcuJNHdTtmqMWbotdqhUo4ExRfKqhQXbtWA25NsCkg6fguADs",
  "key21": "3Mhs5gJU9UQif9g4dvT79uE2gjY23CXk4ztiS2vPpgxzYCAvtmWrddBgdhb6ZjxgFsABRzpykjBS6SNFgk87y63e",
  "key22": "o6MvxJWs5n5WnMA9ghrvLChAQXoV8AqbhpQBfEXV8bSULw6qVp8KSzRHpLqk41pt3C8g6WJ7o2Eb91zLdFybcjK",
  "key23": "5rsBPvH6ZVqe5uS3ztHBpoue8w7yhuAJ8vZBJebgBqNMeMxHFM49EbvAe2hCNQMxXjNyhfVD9DJ7VppbbtC8H1wg",
  "key24": "5qSVuFXoQZ7Vmgr9FYfGRHWi62NLt7G7MtZmQYYCG4HRm5HhFebhWddRQVV5ito5tvbfrXXAoMpNbJm347fEUrRw",
  "key25": "2jJ4oiEdMEY6abrmKvmJUXKk6qFBy9jnJFg6NqWusXrJYMeWU31ygPMK6G2vAN5NkaQA3KSpiZXHh99XQKpsKV8n",
  "key26": "RKaZ43Dtfp5bGzkcytVbCtoYh1ua1eVuyEPzrg5Fh2Ua5jjHYtBbew9jDBoxJYCvcgrcWuywam6jy6RCgZCbCJG",
  "key27": "4h4CtcuSFawBZRMxp43QrUcK1ZtDRRYaVrJh2s6G2ATse6gSiHDeArWchA4qKakyktTD3N7ftnxCkL8Fmdj4jktJ",
  "key28": "5JgKtvUuP55Vjahgr7yzEAEuAYAYo8bjLdS87EwPEdT55z6xfMn4vHTrBaaKYAdwU82KtjGbdxeGB2TEx4ozFWoS",
  "key29": "27ErnhkroAL6V9sY8AQZ38zDHHctsvzd9yKTEujCDq1vGqEwAMVcuctboCH7empQHqCrYghGNJaGSFiCfCXxgzKo",
  "key30": "2Qde8c7wcD1K2M43UrmWKLTmdjYHGCWuq2UrGM1Dr4BZRk4escqKT9BTsZybUuTno1EzwBjXunN6fW1a447Q2oNJ",
  "key31": "2CrUAtZo4X1eykZRBP4pVFnLzvypXEcC67eKkk5feibjeMAsDZfScz8y3R5wip2dA8YFsRbsT7eLxxiQhUWYXr5q",
  "key32": "36qqpEhhNZy47tMGUCk2XvKvngyLz4XBKmEhzHYssZY62QkrtdUfYznvK8sLpy2AtE8aKjVpBCb4iHGh9sFgXXRE",
  "key33": "3ySf1QmSnFK37aSNMSXWJ8ExQdQiVBAsDxZ87XZ18RtNCAHeWhk9ifbJ242krRpCeNvacNw6RkWoevK9GLpSftGt",
  "key34": "Rye3HN2ttAR4D9EDu6ziaj1MvvXrDTeyQ6b8pUAsHXUCgcWfT35KAEDhKSGp94i4TjD9RrCe4TGKkPNFe1XYSx1"
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
