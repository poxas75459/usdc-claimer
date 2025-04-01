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
    "3bWJnzmm9qcMjuucWZT2EJ9wseazwzegymcjB3RTzvzCZbuNbGu94k98B57LYt7bDbhxe6DT2nfhsfEMsepTutUr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37aTjaBqdh1P6VR6CTNBF8qsoJPWKrU47DTATMBLqvg8tJQzeryUt3oppo71W41kpuPTkgubfRtGi419jLCfyZTt",
  "key1": "VYbDhuXxdiPvs1YXwCVfvJcypkR158EhVhHTRmGFPwkHxgdrPFWmXfGWQsXUtx659B9jNRN7Sid1f65dwqe2qhK",
  "key2": "4oHSStuqBSHSN1S1J4XNGZBaW7akv3HtqRjoM7UEQwCT74isvYjgQEHnnn1dhNXAns9MkxetRnYqciSgyjNM1a7v",
  "key3": "4yNrLsweV1jWKjdWYspaSsi2LHmSW7Px8vEwTthYwpsPNj4nfBjRgf8YhXz7Kb5MQmG9ZVNP8PUWMFAjq22QEHGe",
  "key4": "5q8QC5E2SnzVLCANchYcxWUDcziBLMptRJCRtqJ7ZvPwXQMitCWr2GXZ4if4RgBv7EZ1mR3znAm8NWCC6C1U8p7",
  "key5": "4EP7etpsVCvDkPEwAnBJnqMTD3S1Hd92ZfZKyc9CDxsgma8CWEiDx4jwJMugmwKUAEk7vNko3EUjkA7BgNCZp4kn",
  "key6": "5xRgKt7LRhegwhdxpj38nCsSfmmZXJ3KPF9DMA4t98e8PPkPDPDdRmBRgTHWDzBkjF7PHuM2LwYJmU1W2y8TPdiN",
  "key7": "2eebGF5SRu1y1akMuZZPKBVxCAJukD6Hn2VD5WGKUhnmm4Zt1xqEe2YYA3gKnF9vHoG4MnXgFt9BUcc2ioESGdBD",
  "key8": "GCdVCi7Bwd4JNxgf4EcSCoXEMLDnkD3r97dTU12AzQhGNp6Z7P9XP5k7QMBb3w1HYz3UQboD8hNwf82jfKNfXW6",
  "key9": "3aMUt7dJUwNwzxUYnacymR6onNw5LJtB5vNyqUcKipYVMbZEWk1nJAaGmEbEoGkjM5JtH7BXh3TAhLiwu8vuk2UN",
  "key10": "sJuKzLpKMVAwGAAynoZh7TH7EkhBYNeuWEciof3niE1AEd9HWD7XNyMfckgtUvtevuBUNdkA7SDe7UwXsEqGnRQ",
  "key11": "492Fmk8fkKHtxbFfQAY2m3yyrRUfAJghS5sgf1Umbuzr9MmrpDxjsuiJcGeSXL8PPrxjJkT3MCnWwSVNpXLzDW4i",
  "key12": "2xgK21P29PYgzvWM2LD1YF2m42htFWRZhw784rUbfgJQgtXCT9qQkC3YJKUu6Rt6xTNswwJ9UG8EYEWEr9D76CWi",
  "key13": "yt5YH3Gt9eTYiyRApqCmL69YF8Fh8PDv8kZ3WUhj1x4heBdGE79tTcwZC8MGM8cs7onBbRpNCdoMcVF7gUDBH4d",
  "key14": "3BEdUUDk1Bq8nXA4D9qMHP13SfLGqtjGJ6SfHy9B6izpzvAovo1kjsFFo5f5EhEiDLUYd3twZ8dozLkb7aPzce5F",
  "key15": "4TUF959GvQxU5sbgzJnBokq6GqVo5fGHZvwzLL5tfxN9LQUimda3PNYVyAXocba9ndu5B8oSxuMyed9FyTdmWs3C",
  "key16": "4xvzxHieEqR5KeDmU5sub7nTRLHq19sbD3zj9cEECw2LMNPY9QfsoT1NQKUzewsFFuLwTYqFxTrPT33RwLhfKVze",
  "key17": "CT9fgUQcssHoaiDyqadriDFWjWtdGtSEFBEhNLBpqyVjQcvMfFLUVcb3HYWGx6iu2nptANLSukv92P8crRRekqY",
  "key18": "4iS3wgWwVHJBndaABf9WgnqgG2XBLAgcVhWgVMp6EGVZGnHEyxcGEXr8HEwhocRkk1R97Y5bKQeqGxhpNxeXu1uR",
  "key19": "3vpDQfqsJi968NSzB3huH1xMWPhqpkzz7P3BxwevnAYhFzJYVuZyiToRMr4SHv5vCGj629d6s44d7KxfSbPNepRJ",
  "key20": "3AFVxa7Dt71HszwdziRz6RSaqJL3ik3qJtsAiw1zsxPujqJHqzLoFgiTVX6yELcbxvVZn6L2oXUyK9Ust6F8VzNe",
  "key21": "4QPoBqcRYGyWp5NNeucWixuBDGnPzMcLZBD6sUQPgTXeERAWiDE6SorUCJh6SJ5Xy7S9asWMXSXxp9tkwL6Y92Ea",
  "key22": "2SmNCHRyngfYwz2LdskGpT3MjB3VRxmhRsV1p69y9wQzWpx2DnfJadmhaLyM9HAHfVmF9ZPVyw77mZKitXmfaFCa",
  "key23": "2C1aAwQKFkxaXtTN8CQTYLaUCPfAqFPGirKAKpddNRPm7tauAqHSEjmQNhU5ArnfhVfT9qGupZ5Z2Jguf3FGQG3T",
  "key24": "5S56wAQPv8dvgDggCTfzF28R4aRb6RLcdR9T6hjrYg3CJe6yaB53dFssMXuR3Ef1KP8zMye8aPmbXpTLVZAqMJvq",
  "key25": "5Sc1E4A1pzWQx1ZNm4gT9nAxnH2DtJWV5VYvu6oxux3JYTDnyRCVX5APdJaTda3NtTHaMWkkJcDGjxU4b66NWhED",
  "key26": "grtBx9kfe2fQmV1qP4k4B9UYgedpTvSprFkyDFHZX274V3vVvhf6aMXHNFSpXYBW9qGDwHZk31iodsLREBC5UxM"
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
