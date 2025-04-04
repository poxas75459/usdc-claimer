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
    "5XTncDTcDwujvhjD7ahDskPmkxdDtf53znsRzNsy9UnFLkxoUoDHe1FcB3n9yU4QJhZgNwVTWpyzYnotbA1r6vVX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WFYTC7QGbKGjG26ExwVEeKHRVZPfE14M2YbKTxaCPa2bpnf6hTTJggzoCwsNCapUVL7sNZMNCodq3X3QY7r5Nq5",
  "key1": "5PRaaJ2weYgqHUf54bSD1sLFmWiVKGNJ5MAgQEva6ThRWzjQiVpSgsHpNvWTQTq7iApyKcwt75UyLe8iDBZn4rh4",
  "key2": "4Sbgz4jor11MQcXDsVtaNkN1j79Xe11HUrxrVDw9AxLG1gK9JcN8gX2PbMn2uf1HKvbFBTwmkzQACidqzuYDY6Qg",
  "key3": "5MbybDwrCZkfd85nzYZerwHqu3b4JhA7Vhcr7B1y13L6zCaoBcDvA1hDKPsoVzxNY9k5WHfEBjuZ8TD1ynpduY5W",
  "key4": "2iDHtYKia1MNr8ew8F14rdTYWsEG4JZi7zPoUuEgr7pVatrVcschTowERBN899qTPg8sLGdAE1H27tnynxLHTA45",
  "key5": "2Agk3XcKamjF3nmk8WEZrvhzifLDPPWnPNhvAQrnCX7iqNpNJq678aLhspVCx4AHiavhFXYEwN2JM7arBVXAaTge",
  "key6": "47eiAMJ1UURbErdFuKoXuGMVsfmPtfwdKYWEeVbkVhJZctXHk3RoTKyMxJjfZhemFLKtqYRX55uEdb4tys3jMcxm",
  "key7": "5xjyY2Vef1g5ALZeeTgVpR8aBgPXizZwT1kK2CB41WFekNNKSHstieWobfxasHxciuKmgH9zzotNu5n8n442YWVn",
  "key8": "2oEfbAetJyCxnu9taxgM8mtXXeaweNAq7hN8EwRK7pWwCKSPKaUeXmkQYnyMJt6DUPXCmtZqQ9hbGuA3wSkcpmL6",
  "key9": "5WXEqtTssLCf7JTc8sBeWbWsurUwMCL2vy9GWcg6wnUvL8yefhzR36sQagwrs78Ly57hoSP8vf8pFEqxx5HC9bFv",
  "key10": "38WvZLG7FfpZ9dr5sbyvGtQaVs1NRUjuEKZmJjXSSFQicTeTEi3PkSc31Xh4jpoFcPAzmyMV1srNYu87xM4TU5nL",
  "key11": "55T8JrBQj618u8HENGNg7vDRTmZxLJ1BK7DxWtzApNgpPYDoMAidPbNgiLyzw59CcjZjNYH4MJ8mpAhir1kpYAqo",
  "key12": "3itzpLtnCwLB67RSW6HnYmZxiWu2FiMmUAJiicwAaDAQWZJC2udHuUBPExygcASCMrVSUdWJTw9TVSmj6NicdYa9",
  "key13": "48bZ4zTVpuatvGiiXekibLmDYkjKwx3rrj7B48VTNUqS3BrjtmWeBAwWzPT3hps65CgG8nz9fWQTARth2SwNYyyR",
  "key14": "Y5LfXtEjnrSfLyHMGX2T6944rW2TKAq4fNmCsgUoSCHjehEvmutFGvrwdfKaXX3Cge3nGw9XK8Aa4127ua7Wniw",
  "key15": "GDjjqVEMrkaEbVGpBa25Vfx4NcNBeH6Zt5rbQwJCe7CJQbWd7ypcamwMsEw1FzdRCc1St7iKnF8vAwjQWmLrFSa",
  "key16": "5UY9PVD3JWprxu6bgcCkLK59yKsmiDR3a15bQEu21uyb5TMFLGuhswxdkNtyUWQyfwgCtQkXWbE5E9BHUuSmPxXA",
  "key17": "SavmeNXugamPkVz2gsvzPEXPFgfB2wB6iHPCMxk8eYJm5EAjx9r1ZVJCt6iXDZk6E2BwtYsrj1sH4Ka5eWSNQXU",
  "key18": "52vN6uiBA6qHKmGaYQETUSxhqEEbUnMHh43nCpDd5mCA3V4XqccBWUARVbiMjYL95ZXybhdGVYJq3ipR3Pqj41Na",
  "key19": "2AUsHnVh1SkiEpndktPxhG8bqnFDhJwEWwh4E2B7pdBErRh7KS5PYrA2TsMUD6VTEt2TRUfH1TZRybsC9XqfrdT9",
  "key20": "4CoQNDoanPf86BbLAfSGQW1KQx21gqVCS2Gf7B6cabTVuwVdcNXDMMSkk3e8w9d2XWuYJ7ZAUH1FWi9USMoPGKSg",
  "key21": "26kc7wSBfqjFb3jPxxEcLXb7NtinHcc86XSht7cy2TfW75kNxDbXazURNULorJyePxnEu23vVTqT7GGF8yV6QQPa",
  "key22": "3EKdawvZrohZJ62REnyyiB63qSn8dZFBZEoEs5fMvEpSPECmeFgnzq4kRrEMuskvrJggByCU2X27x59oBaeWozrB",
  "key23": "5A2Mkm9m2YmzoNyqzBjJUcLyq82stf5cRB2zognkfVHECX4DNoytxBdPemurHKkYPjR3pYQ5C7YH7ctCoFnt6JXj",
  "key24": "5T8hF9FKavt74u16GXUz9Hu7jgSHLGujRxEFd3EmBiycrGV9hpUabLv35mV64Pwn1X6Xer9PdtdVVi8R7K5sehiU",
  "key25": "jPMyjGBsgsLx9W7vDGQ8gM9sBbX4ozjveJtDfvqMgSSWC5JFcYEawqY1H6XmLAwy4D4B1pPgM5sV6sZj4ZxySEb",
  "key26": "28pqHQm1TVaBhtjZ6EtX4Kci4aQuVMmtygG6XZCkogaQ5ZN7KJFsdMr9bTySebVX5BLtS7oXeuxonqQfDYGnPrLJ",
  "key27": "4PgHBDhaNqNDcud9LeGNgMRbsdJB6qMRUPvTXM5BnB7dKHYch5J5cNUa9bWnPmWjckUGgv6UiViPQLaTU75VDgW2",
  "key28": "5V5hJbJks2kWsKhBowJSwPWVeTnreC18QAvwZFmkaeRRZYQBrKK87msQ8UaGU2574CYojAkXkxNP6cfSAjzjsSHu",
  "key29": "2h28dBtfdX2rszYNPK5bEYFSVukh3Xaz8ETzpUX4EvXYwbFfP36PMykKWzAMq9SifaJx6podxGXcRNC4ke91J8rX",
  "key30": "3WJnHRgkBZCnsBmiWWR5pjw6FYqGRLBXidPKNA7kehi1JdgMfbkb8fUgM7THEeAhiqabVYeXimSKtdfEqhDZHCLq",
  "key31": "3MT3v5hYLn5j27jDzRh74RKvJo796boxvKgrw729Guya5XqJ1rzgzLFgbZ1GFjg3jnSLYwqhDj6uy63Khi37ApAz",
  "key32": "eDRTH5YZNZDKbk8YhoiZrTN9ci2b2pMgKNpxrJykf3A5FpnqF3rNMgaKZEK3YtbMVVL9EyV2KHcW2uvA7cHKTuU",
  "key33": "38p29AXQZdyNujQtQZtEKMNa2r3YcjGYA8g6qAXpY9WrCSdsqUo9UMRwm7fZ65w4W43f1MCVJuQXDQK3Bfb4L4fL",
  "key34": "RoztHHkQHYzFHem8PPc3kcLpfFjFVwCcyGYCXgMMkVCa61K7JpZQYLesYHgMpa5ziUE4AS5Dy5QziyrGwBNvhdg",
  "key35": "4fwKWxJdXPtUG2vDB5PFSzr4b2paEbvHdwXPbx3tkUhXixin3VYnBCBn2YuthX6S41EyjVqLMTj3sAsByK4GXWQA",
  "key36": "dRo6sbpr9kdbXV1zS62UnmJsAC1eQPFjyHMQNvkiBWYXST3ZaZLh1cUz9fpRE2jWqDaT12GYrCqnFZwvPHN7WrN"
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
