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
    "8XvTr8fN4nd5Y1zycTH9tr36382VGXTF2kXGKUU7Ep42TBfby5C3ZFh3qS6PDr9cUaUcXXGCwv871ryvyZwsUft"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FZ6z5Yu7KgmYK5eC6DoAQWEZi8iXG7PkJtainaNdJfHrpPYz3C8RWDpQJEZHN5KffK2cV3MprDSAezzTaYfU4L7",
  "key1": "5kZncP5roAizXBzNVLqvhn5bzhzXkv8aFaoZTJNagYy8XRQZQp79rFqUriwT1jZahawFjNBfSazq5iMRjQSJZoTt",
  "key2": "4Z8jLV1ZhHC6JGDZAxtMZdQ34qd4hLKKSPPnAb3y7aioGiNoosBiASy6KWBu3JoAvEkK75T445UFJN91qjx7xfLY",
  "key3": "2GpCVpi7CAzz175Yw9C5QJMyGhyJHN5GMLYEU7VJzFFCickiHoTJAomNybw6AwSpofzrddtx9LQUSUEarePMVt2k",
  "key4": "4GLFrYDvh9jAPHwVPRgcV9MjBUDk4xQ731dHQAGXXwTVW4regLMZzBfptM36MqJamPBBU5n8UCqKWoibRsmjxe63",
  "key5": "3Bnh2t7hrzRmbnC13dFLv463tzhEagxf2cNEUQw8VhRuuQiKawiBULha7j48wTEXwvg8FWrv14W8j1uKSaKReXwp",
  "key6": "3Ckcm9j98uuhKJMn8pdeyjprkphF3jEWemWnMCaSoCim9Gwuj1fvs9mMNyHTn1ASJqTVoX86UBGSTHmgPh25AMoY",
  "key7": "3twEbLrjRg1PWWtrx5fCcs7vMNPGMr2ky2M37orhYATYPNN6HMA2w2Udonu6R8P8bNqwU1yZFRkaapTSaB1SQ56M",
  "key8": "5ys5iaBaA8ixR94xsYB7DbwuFpMJmTZT7i3PqQ4uVFFQG9MvBV7ftNsMikHUBXthtXf9khMhAkMBgczqn7p7yoJq",
  "key9": "3XdpYewHNUjWHa4zotYjGSiiyBqxyuyrG1yMLvszennrsYgPEmWAgHRSR2BLgZ1faVGbE8S9QRTiara7jm9PeoWS",
  "key10": "hifNbEnpKrmkuY7XMrExirBSfFJeYKJbEqKe5ZxZXd1bbZJBAEySBeGUc78tkA7xU2Tw2JRE3KpStxxDQ7x3pQ9",
  "key11": "2eMPY1UEJyw8YvUQvHiPtSr5Cuvmn42PNSWKHfBw1tFx8H7nc1XTRfP9dgp5C7pKM17m3AMUpM2iRbBUk9cFhRiE",
  "key12": "16hoSzQQyUHvyqhf9uKwZvzKHg736MrxnT4b5gDiTr5rFQq6nmyDAe1AQZ6hkkUGTVvEhF1LZnNKpxmpSmJ65VM",
  "key13": "AzSZZdp8yAZnvXqpaQD6kpZC2nto9VdawDQWmJ7Dy1e3fPjnxFiJT9r5D8oBLDVEihtonMjSQA2hRXQTLEBkzD6",
  "key14": "4JWuuLknxzTYbkNXoro8Ae9Z4kVHGXKBUVxYVCi3tbKrb5DdqBxTz75YBVWSuS6t7aZqQ82uuo6pR28mmSnomCbV",
  "key15": "3S8finMxMjeAYTvJCauDJcfyRf8EuuuVZKyu5mhZvVHxwatgSrWzFrsthv9sG4BWFipjtd8XtBourNJcAr3m9hKa",
  "key16": "5o9e3wwgV7YxNYJzQgtr7AwgCDmuosFyiLYznC2XsfrwjS5FyBky21fDUqsS39r3bPzfwgEdTJEFJaw8m3sVxRsG",
  "key17": "4SjMFaUCLdgYw4a8QSpRMViqaXuQzbb4ieXTeqMkHLMpAxtTPrPJ3yQnwgz92JQcaGEormFDVFWvALEs9ZbvHHTK",
  "key18": "Xorniq66HwztLLkWZHvrfaSMWk6kferA32tHQM9fpjmUSA3GS61zYNMF47zjqXb7Cs9UwonbZkuCdRBUkrv16cV",
  "key19": "3T5jfY7L5sZ3Sx8sBtZJYgJar3bW1nt9U5YBF2GzbdffTU8qpwmarcQpP8K7EMgBsJMuNUjcY2yCr4SN4d37expw",
  "key20": "5eSjcvGzwPCSxowmE22MK1nSbMtNVVAkjLNgb2rs3Pk54spgBiMcCBt3SBnaPksEGdSuzvgqJsF6CWsYTkS3vh5e",
  "key21": "28RUXybLwPUgV5gr9HrjRJpmJEj2fdRnUi5pchiJRbwiNc3moSKwgWwuMw558xRwbRP8CqbX3sVXeHAu1dJQPqva",
  "key22": "4yiaWMnBWFHJrxhhadNa9p76mJLrU8opYiGjjkB9uhqJp1sMK5EBpuQLv3GnLFhD1HYfhVE5Q3PdojcGQUxCHqT4",
  "key23": "2nY4iuVJpBCwBo2NbhBov32ta9WxFxqiWvswvLDZxuii5eyJYV9qLCfE1mMUKQSvMajGjmcCscyKNUGAD3pb9Xh7",
  "key24": "44D8dmuRzTkbZTVVdA2SsBcJJCPUAzkxn7qMayc8Yrrmh3ajmvE2T9tD1FF6mfUkQbLHDYQxtUgWqj7kq53hBSA9",
  "key25": "672EzqcCJYkUCpjmUABqtjLcFEmvVGD2LQYDy7T7jBnRpftGuPvQLvXmdTWj3jew4BSHRbcc6DWU3z9ADPGXDQtR",
  "key26": "3SeygkZfe16Z1ziLnkZxZe6Kx98s1a52xQspLeU2EqdFLiogyn168cuSrAJHD2vkKZvM1LunfQyHFAcxuN6siJ9b"
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
