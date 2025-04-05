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
    "2fXDfQ421vP3DyAAHnBsePCKGS3w5e7sNgxxYEE3tZaMcpfhHq7qc96ACH8vgroujP7RYTmTw2CGyphr2QfdK4vM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66PvDodhd1B1Z9pe117WGn1LuPyUKHXfsYEcX8a6uE1k36Lm4w9fgJhosxQLcvxqU7KasK4Ao9SWVHi5ZKEsc5Xw",
  "key1": "3afqJsBCd1X8q7Dv7TWDvdjFG97ayrxRw4gTQzKydWyW68zmLRdmjmUNmRsRJzj3ggPmw5MCoyvdbfqYVtD78Q4W",
  "key2": "4MFspX7S9kBBhoPFzqqzujPMnrebvVHoPcWywrbEZFgWfQpkHSSCg3cUUHbrdGWw5rd3GWjUtGG7be1t1wfwXxEq",
  "key3": "51C4GJHSyGLLpihkBk9NtB1rGEgvF46zpZNL9LwfB6KF2m8g8UV4ESruPaHKsUfT5brNrkxE5k5if2bTTcB1S5qV",
  "key4": "35yiPfMNuTLwKTegwRmCcDSHrqNwQm7oC2tp8WAgAxXr3cmzhDBSNUwwmeefBXoL23c7EhCfxhUA89pyUjTUAXxE",
  "key5": "224Z76WVwCYro8k2Uw15AA8zoMMSbLW6mhLrHxWsBTzvqqhHLCrTyLi2Mr4yyDXNCQxaUmvQD2jCqEhUnGdmuehw",
  "key6": "2DncTwgN4ieztwwF74e9SdJek2gAiPHpdLEJ4PAfwx6cNTRtYvxZpmvBhB5L5MKRkQNv2231ceELAWVMzDJnoZ6q",
  "key7": "3MTUqDUSWU37kqUS2DcswqNpYp4xoAjJDqWNA42pNpEJCgt9Fxg2ov9bSUvw7qAVY4zMSTWE94y8iT418eUVUr1y",
  "key8": "mJbzm5UNVq6dnsXDKZnCFpNUyzk6K1vBdau9gttqBYAqB5gGPKQGgQVHhNtqeB1PUmWca7KLB3btN7fj4F7k2VL",
  "key9": "4yF95okxUQpDKwTBEihkHebS4vL7YKogjTLx5nrz3ZNQFNGmyr2ksCYBcdXMYFz7HqoMkfCG1XeWtmCQfURNtdQc",
  "key10": "nvwaE1NDASigJX3Hd6kWKDvcp4KQp4vvCqkm26meTAScjRaRqWC3iujHfPfwVKrGUZSVpQj4m6D8UFLZ5hgoyUY",
  "key11": "2Lncb6AdTFSsWyNf36Kvx2iZcBBPsrSx8TMqbRE7U77rdRFnEmvdpEFBjQSjCgySaojDBoGf8jNy6jNNtj1UZgLe",
  "key12": "3AhVeFVi65L6epwJpWq2MRm7VDTFeqFpaDHJqZFv7eZBoLGznnRm2SCajccGuM7dmtMi6vFUAyEJEh2EkFJ5h6is",
  "key13": "4zanRcFwWXK2Mtiz8tJCzhqgCYxaT8du4prqteZ97jkN297kkdvmbmSv6ZuiWEdgQDWLcTCQxQiNMbuBbvJukfmy",
  "key14": "3McErdGZHEEYj667MhHqYEdsRqetsMFKsvGnWMBBUopJqraTaVsLyDEvsNwhhH9DxsYEerekxD9xx3x8BGVzB3iG",
  "key15": "4YKEPfSQVLSUuKtfi6wgzt83EDiFWMfumSgajziU4GVU4nEbLQ4RQa1UQZp2w9y6nWNp5DfVJfpouQAYoD1MRwPT",
  "key16": "58ZzS3kfW7AFjXQJEKeL7LeJBF9mfVs5F5CoR7S6UTo7nfMH74vi5useDCkpNcmzMmm4YAYH1E1TpJKknQJeAKnD",
  "key17": "5jdyLoEj8TSxrFvTu3TphUV3WJLtx2rfYMexYrpxDweeTwPhC8bPnekXbePkBkbLMZWHwJXSvf43XBZ8gYzg5Mps",
  "key18": "2tuCmVuEVyUaMyiN1oi7ecQ9vYJUQtrQpifvsiviCXkNtEfCKGWXGS334wwADgwf4pJJvx1RMwBRgME67mWspKLC",
  "key19": "2qVRydSZJm5BZVjPAXeEZ1X3XYnzaCyZoNmLRPEgkKGv7Cwtfto8HvTpsQX8wrqPjNC9VoFBG3wgDxVgFP8mWxGZ",
  "key20": "2bDjD85L4x6vhX1vY2SFtukc3ix48ZZnMmNJhLyFS4nbAmkEXDGXxDjfPxwN8nCDjC2JTyAPBGpihLz7WySuRg9a",
  "key21": "57d9UcgSyHmze8k2hU6C8mdfr3GrSmwvRXseZjnTZqSKxTJBSZVYMqYvm3aMTLFsb2oGaKBNJciszYA9TpyikJyf",
  "key22": "522Zh8D4FdJSsF3gmf6VfNbrxDUE51TKzJWXEg8rkJr2k69XiAhwEQAVMuscXaZoJQfQDuJEsm65npuXGif5JYaW",
  "key23": "5YfNETzESdf7VGBKLXjixueZxfmJToiDgNyV8jfeCy1w1vEC6ayUdSdEhZJ8ofnb47nnAwZ4dWdz6PpJkbu9Wkjw",
  "key24": "2gGQWV3fmmGgvpxjjwsGCSNiA1YMd7Cntk5Z1wvRhAs5nWt2TsjYub8U2NiqMsagt8pucUBSKjXFoJ4wgoNiXYyo",
  "key25": "55MwzegaEMKBEWXDG2Y9W8eUTHCMTtMNmJ6iVdUgF9yfnPsJZ21tLK2nXQkd9oZa8s6Dm4kK7xxx1fy57mzQdHVF",
  "key26": "3YsqpGSdfpqALpEWpwDnDyAvJ8tnBQD7yMohrJcWThVjkXJaANi8zC8Z2DMd2Jem7VpcyxT6gwnrw6EarWjLpAdm"
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
