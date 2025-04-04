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
    "2d5ZpByxm8RPeLQYVMemwB87VE39YknhRQq94DZWRcRnEZ929ZyEinSb78CU6jNF3WroFvpj481N3im35gbqxDLN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Lt8yuNtu3ZMH4Fo7kiSym93mXyW6C3vfii24xxpTeABkXUDBDKeRNJXww4ukpXD3vQk3EEAnWhxeSTtvmVHQH9q",
  "key1": "ZtUovt1WF1wehXRyM693Xe27Vokmd7nNwyLdQW9EkK8HSEBcAw7xZRUWFShQxCzDdbdeCsGjagHN5A5KYNFDjDj",
  "key2": "2kx76zpbuL8PAMn5QEXh5S6vmDBVk8UhKHCXiEcWHUXtfoinn931Pb2Yrpgbqn8nWCgeSp2KJ1y9vRyewBqJQxRi",
  "key3": "2b2NTyRopcxFA5eHtznD8DRfRkn2Ar5pXrqJpG5j24yjXwR93KGrs6Q79Jzk9rQb2iVTPZHESquGLVvbx653uH4L",
  "key4": "4WRAviDGd5t4LeqiLRrC6KhqFkSzFYB2aNNjN6ZD34fxoofbPq1rhzcYgvQxwC34FxAVnqRbnoq3Wvtf7TnBLAi2",
  "key5": "4EFQJsKLHmYK8sGaLGqP3kSxUk6hWpqVScekfPjJ7qhLz9gahtT2C8Ramiccvn42ycxiVQSpq4DZR8f3tbYMqeyP",
  "key6": "5PJ1jDzGNekPJsHzgVsdDv4sHwBwGZRLaTDMVZ3P6LAizBxbSSEPot2JBrK3N8bV1s9bFfUNKnuFph5BnT7cCVW5",
  "key7": "5uoaLdVxHk6zw3vJDeUvLbYbWwhXbpQY4eW7JjdJso11yMeLuY3CcnT9ZzLUdtPXhwCBfZPHBKy8osjdrAJ9CBeh",
  "key8": "7Q33kKRVeM177Uk1yEEnhTjUk5RyhBaYEK9SCZAmkZ8gAuCqdm2qrMgYEUwSW1cdjTvDCGFq9g1QfuxbUeiCbYw",
  "key9": "5XXtHLUnNUv2LkC4hoENbtNSriBGLPGYHrpyAmm5v5x1J11jvXemP9n4ckHVwkPbNKXG3VY4csLgWkpL7UKtaMsD",
  "key10": "3f2tFDPkKNsq38imiWbtaQGCDka54R5PMmgX4WzN2UJPdrTBd8Tnb1YuLaLCXz98GWYnjBEfp8W2pUuvGryHydBG",
  "key11": "4wdSPbsKM2EbLDJBdV9UVkf7VbQ2YX4voDnk3hFJhvY4ch4ji4LaYqKFnYPJ35osP5ChqR2jL3xGMrjTXcWjVChA",
  "key12": "3KdhSEtbQ7g8veEnaS2w1ja7wUTZEfXVmspYvwGKVuiMkUm2Zvky1G1HFg7SPp81UjiHUECZJxaei4LrovgomsZz",
  "key13": "2ywfomjD6cZp26huYjdTeWXX4sHoJ38Db3rk4KuRa3dTPLjFgNnFMxMR59n86wUvUQG1C9eKE3KMrzxzhSgSWkDn",
  "key14": "4mzx2JkmfkUXn6EjMhRoNURzreaK4tyb6PdrCxFkph1wTJjMbss2fwpYVMHnLkzBSCbf61FNjCWhVmvAKpHGAe1J",
  "key15": "3cBoZ1GHX3sy4HKHTCFSiAnAh2SmnWBwL3Tf7T1jxANeXe3sz1f3c1UrnZkx2ipVnxn5TZFKvEw2wuXpbVLqcJWZ",
  "key16": "p7B6m6Tu2cXTcQpdc8U36tKt6MeagjPtgXr1cg7qKELBZcgMsqs6bCN6e33hy9fpRP5wQHP43yVrEydyrMmMwfa",
  "key17": "5oRXaQwiiyiJumhKFiEDZiXq1YNP3xCXKXKDy7bBFRx9PivopFD4VsBsgCk3bVAVABjYDfSiCWzVpaUixCU7n4Nq",
  "key18": "2uBphTD6kxLerPpgkgfvjmLLy8iiknC1pXMRdjABeQzek6eLxC9EkPovyqvfugfEQiQbrh86kYy66kBZ1yuHFTaV",
  "key19": "57wbjgDCKXr1w7v7z2TpZaubbq3vnPngS6VjCsAzrxNx2WQbVQptxGqHjfKgapnpCXSrrF9bgQg13TU9m5wjLSW9",
  "key20": "5mxG2YvC73riiEtt2r6QUwNQvKVkBJfttzzGt3chrVFKWpn2YdH2HwYpXrCYq3w1zfeebuqr4mtvcNBEJX3hCyvx",
  "key21": "4S5wZJ9Amu8oLecAFv26Jn39RsaL26shrNiQUWRHdZVSLXMEiejkbCuSAiNL5zAQzQBUJBAHrzLXXruPeRPSZPAY",
  "key22": "4Lg7mv3s656pA7e9ifvgUYteToucV5odUMPbsqsp3rXLzWrMF4SGxWjSRcxJ9GPQp4LHHvMHiMeESiaj4E69hYqm",
  "key23": "3HRkztvGDsjrqNhdwrdvC7VQj2SiwmENGqigQwoDTXV1xR8Z9UydEDgeNBNnC1TdcLcQA71ixJ5DMg4qAZRKhsEB",
  "key24": "4NokYi27pNrTyCvA8Z53HuSpqGKCA9a2WFBwBFWF2oj1KK1E5aK4qCsdhbKSqnV7nAJTZrNQjxTtqzV4sVqDDTEa",
  "key25": "2Q393WjFTRvpeENPHaD4kKZvpwdQxZJy5SB2HK2GDdiNCT6658etPgpHSjBabqiT8gVHdSVf4UowFJ2N4YE3TMtk",
  "key26": "4m7xjEoToycYvPq2SG5qXTPfe98X387RDrQP26aEVUGMQRfrYaMoTqqUHzGXP3SVvVMpVpMgztmxa1xKsfyQHsmz",
  "key27": "34mFMzWvzTqGf8TriMXA4vhjQPPYLuymXaYhHQa6FWW9SMrtXp89vZHxnfFGYRbCzvduhYwt8yv7o9cB34b1LFLp",
  "key28": "wKpEF9RgjAvd41xwKzoWQcBUFwBsMwaQPxgKoWXHBSbHTyx6kNFag2hFnFazqtEWKn3eridMFfEHmi7m93AeFdQ",
  "key29": "5pLqzcMSfLuzFLQH2KLHwFUgssC4KP7AiZWMVi2336VANNsakq54wF5HGGFv6HxNQpqq52NYepsSFHaqWHReVQnY",
  "key30": "5fqxyWteEF3uL5zVkHTYy2ScjzY5SwFRZLmHHAdaHVzpvZKnkQAvJeu66W8uMKirHeP3wU3uW55cakZ3iWiB3c92",
  "key31": "5heAL2YtPj3FkepAKnSV6otC9BYo7N4UdKnFXT6oUr3h2SN1jPivT7GXDgVcSN66KyxJEfcENSTxcmcam8yxKERv",
  "key32": "aYTCDKMNZmdCDFsh1CxDcRNTwS3No3FoBpdsiQomuGJEw28NKS1MUFw96RNCWm7CKD8SwaH8HgMEuweB9PFQ56p",
  "key33": "31awBS9LB25MUv4si3mnU6hP2akjM6pjuR2AjXNsdzdaYuDBLKMqDvfiCLKPYMMDJrWKsfq6itKrZTMAERDdxoua",
  "key34": "227iipevAm6K17jhN67TjvYXs23QdMQPbq5nFHEFUz6vVrvJE6VxtmF8xqE5zwHu9EVApByeh93hLRofqGFSN48a",
  "key35": "LBLLcvrqBRWFdkCu1srqHg9NCTGoSCZYU4xdfrsanzMSAVPsVdsof4ZBLREmzhRkq79cSdfiHkqRkBEJ6ws7HHY",
  "key36": "225g4MDXSGUbQnNByptWFFweYqfVRkQrzrXETNWjTVVGNpNooHWdcG4ofRGFdZmd4iGokya8QCTHJuaYAwwiXTHF",
  "key37": "24F89LcsjmiYuREcYo9cJKUXWdHQR8hzkrukjYEqbBdTrjcE7wxVJxDpvfCMqeXyYeSAF6Ds7TQYMKQKd5PavNgX"
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
