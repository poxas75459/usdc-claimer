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
    "4bUbRfT7TUxv1TZkwZixCbNPsBQtBTjvgLqD74fupBe4UcyjsUbE7ywAsViLQRmCSAZ8id5sphUfK4RjXVErrwp7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42o9FjFKJSxsk7v55N1FjaPydGduNLQfCDcJSS5WMiDR8B7anSRJKb8mkrtyJYDhuqMkiEamDtkEQwayqXLEWwWi",
  "key1": "3ZyUc5xidKswGuxwDBSVJx2ud4JZDjd7XvTSX6oB4nvDTAD8P2fvXRzC1PNukzh6XvUbGY8qP8Hd9HmgHaN5zNYJ",
  "key2": "59cn85x5eNRKKDytW4rkSAbN1eQfX9HvwCg5MRzgsmufWkH8X6W4msBijMuxcBTcPftuR5gisM1DgUpV4PyhxJiw",
  "key3": "4qwd8QCjgYe5XdotuAE2x93hLj5h2sSEB8CKujW23QQqDWEZw9n3vhMghXjU9QjeLqcTG52j2W5eUo4iJ3mwAmmj",
  "key4": "4X8dwVd9XUN2NkWQtaaM5qxcfmy2QgNynAUF2CQz5mXdtAXyygUbPG4grtGLq8H8iqxyqKA7vkQBT6FXoJcbsEen",
  "key5": "5TXHvbgz6H2mcALKZWNRDJB3LXKtPg59mEbxmbNHVrd2C29dxcAJ6Sy3nNYGYKJeMGv1v8smyvoQoFGP2tVS5xy8",
  "key6": "hdQYeDrud28vs7kg7uCmRU9uD9KMZo6DWcQWtvS9EbifitLqv5i6FbaAQGaUnYZ7RKCEpW865QYKku7ywF6d4ar",
  "key7": "33ETaoYCBrsYk3Xzhcf6PWzuwfbgYnv4j2dXqaFCEECvsWBYZsot5vPJo8HPwGFZoevWq7Wk1j2U3TsKyyzcJbVc",
  "key8": "3ipXFybt9oUAEqM7xZCkRXVaKty7xzf73XbwQinVpnwe1f1ECAgMk8KCEKhHGqgSGFrTNZbCKKzEVbWY57yht8qs",
  "key9": "5fJ9pQur9F7pGudg62uFV7eD4fEVDDMY5JcehRh1WxW1XKe5yVPaBRNQRMTeFNL1YtkweCK1jy7TqW9FAjHeCm5m",
  "key10": "5mGtEiRyGVE2ofeB8NGPkQzg9tSfPVfYc5MqVZqQ7NUrSKu3HsjFBFFMh2H7qyyXbb5aeguDqr3drZHJxA6V3kn5",
  "key11": "3WYAH4WqtNrVWGszJCrofn7d7umgt9vRBz4YyLorWzPCMjAHNNQeGmossaU5NoSMd6ATnHgHrciJpo34LHw8Q9Z9",
  "key12": "ecDz1RTvs88s2sfjhnBvGw5hMV2MpQvD9CNxhabAFo5pXkvv4U8unRNKT7AYHUZRWZujR1AS8vGRuaKhfCP1jn4",
  "key13": "4htGLf1UmeY8BC8pUZnH9JE5Y9ink7hWYGwPAbsMZZWCr4zFp9EeexyanztVQdEjT4TouYwG8Zb3EAncpqNAKogC",
  "key14": "4ZCUvtu6KuCycNucY7wgow32wm42mXGLVTZnuuEQt1rA7J2eTdkit8aUyjzhJZ2EiKNgwDm29A7CTFEYeWrUR7FL",
  "key15": "2kWghxvo41eDrjdxTd9Vq1UXy9hcmAuSvVnSdeJgKDJf1pZ11RdWGkAUHrf26NXnAmK5HenBLKiekfBYeDruKvef",
  "key16": "2148NVNocnZJue2fLPfRcfYjLrtPTg3m2UeNTfgU287SQhTcvkLRLgXmsMdzMjci7yTYcmX2JhBSKMLvQDMef6sx",
  "key17": "2dkuqAp1hDfj4r2a9piqeoSCCSL1oBEUexojkCEmu5PGxGcr6UMHMYwPRZTy6YcWqixbiz9Cb8MitT24YCWg8FwK",
  "key18": "3Rq8FrN2rPk14bXWWP6eNGVDzwmcS3iUDu2RYcgdAfsC7LBdttNxxQYon255g4trMfQzkhcjZ4frKmvWNraueXz5",
  "key19": "2o48S4S6kWWzts5LwweXiv2knLjAGajYcfpXGnLVEp1BxFHF9GGXhunJTTxAURyGwpUVvkaZqYErqeD81mP9wjd5",
  "key20": "ZaHWto8YvcoEivWmsqanraE8dSRqYDPpx4KeGW4bfCL1XmoYptEUr59GuLwDiVNWqBzfYPG3Nr7Z65t5441sZqf",
  "key21": "2ZTQhNKTRs8nRGgDBZWz3J2Ay9Cf28qY1Ab7aLXxzQks5GsJrvCxXKysRoXaKPACXw3GWXTqi2vJaP7VjDeDgKnr",
  "key22": "63mZf1Xuzn1Se793LNM45RGjWMwPqu3hQ62cmpSBZ6b7tuaSgmMuJMqJC6tEW2Qiijh9FseTcXUR63fqY5hPzhU6",
  "key23": "52vTCWCX3HLQzApnR5vbqFr1SRKxd6FhSd6pdM6TS6jxewJihAwco2JWikWeMJr7231RyeSYwTprHPmUxJj5Y8Kw",
  "key24": "4njjkFDHvqSGBCDEXRr829AicHhptdHMM7t7isvXJwVYDyYi9rULRjQuiaydEmrGDm79vKdY3gL91oNoRRjw7mis",
  "key25": "3x7zyZJFnMaDhc1tZ9gRjmJhx4xgAaLdsnr1V2Zd9eBPk4tJDU8TucvaD5gsQauRZjFiEZsryP3D6cxX1ARdBCT8"
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
