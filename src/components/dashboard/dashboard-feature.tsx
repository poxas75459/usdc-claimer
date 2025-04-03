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
    "RG41rJ6F3yvGBaXpbxmGNsDw4T46XVAg213DvT5syjcQQMqTK1h65k9PC1B6S3tPyN2C5N4JsxZHA114MUaidpb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2f2S9Dj6aPFZY6PGDvVGhkdSsjJNUB2hBpphs1zRhpuphiEG9RXq2wCPC7Ahww73oUT6vyCMnUiFhgsittkg1d5N",
  "key1": "2Mfk2nTyUMbCXMmH9R2WwWJSAnXgEHEHP88K2eJ5Ry7FLXvenSyVBZKKk6GvZYyboiWS8Zn8o5UcvQHfUHkMxHaK",
  "key2": "2yLpbd2hVy9nyEcERkHTeru3s3YU7hxuKpHcqWFpcpFopdEAV8zZw9WL7VCYzzzkcak7Aj4qYphjKdaumdMu3imN",
  "key3": "5bkEy8zYYbydq5y822R1FKEowif9Z6APUk6y4VHBgemZAG2qqu45qH4KReV6qbSWCxNg1gFirwk8UhzVd18ahZ7j",
  "key4": "4adWyLDByZJ5pHzs3y4KufH539RQujv2Dk9f83r2baL6TfAahSFXXQ51f3gCbbvfxbqrbuyYsmXdmkKRPZJsFCxa",
  "key5": "4jtu77RPU5rEirVZV9CgmmFy7vh4RU6D2nnwhnGyw4LYrsKNVgebGfohS7NSPPgK24gCwgBuLQXBrA4bhXDiS8VV",
  "key6": "d8ZQxY98jid1vXqiHRcHTrLDCuARPK3xqojNLEToN7Vw4XV68nQ5EUqJNRtwtcoydLeM3H4B7qbjyJArGKUGcWE",
  "key7": "25Q1xMkHEXMz2QPfrRkZTjqFp71GoNtRZR43GsJUWmQrjKGL3N9Sb62USf2Japa9MwM5s2Qkx5TseD8KZfwD44Yn",
  "key8": "3gGRsh5YWSkBPAo4Kn9vyK4Zri4UKSuy5PuRb8mZgRWHFqMpigM9BTxfyLSyFiQ1HHoNRzvpuxXo9sDepw67rmZn",
  "key9": "3BvZMyq1WV5FbqQzFkmYhqBpPohDdhLVGbucBJPPRfh5zaG2uLpBpiPRnbCpgcM4kLTCyakNENXmqHKHQDkrkZpZ",
  "key10": "3gQk8Vk2tH9gDEDvQ8FrycG3bMjPXykzV29n6VgvUzpxVn1iNL1TMq48XwvTEbPHBJVZ53ArKJcVCUuVeohZjbcY",
  "key11": "4L8buY7LQ6aLVyDakw1eE7CL7idxnm2EYhuRPBE41chGsHX1M8yrHjfQjqUsyMYTjsRsDrwv2EJ6DnHmMunargpb",
  "key12": "3LhLFwdEHtUgLf8s6iULhWMWg6XCo4RvRN3xMN5QPGSmwD3wGvpnzL4b8A3dXyazpKaJWCA7d4RabZrhNFqbnzCZ",
  "key13": "5rTmKazyQxmo7fX7Qbt3uc3AxqHRa819wjAACSQqRCQihRKoQTfxQjwek4uhntndTDjwxJCTpfHHihTJ7vcB3EqH",
  "key14": "4oZtpYdvyE9rX7uWeaMXUWD73ZrivJT7YhReZRAdh1N7RRHGtqT747ivmNtDVwwVSZKYchv8hUFDkvMGKapZbyV2",
  "key15": "4HnDqAGdG8Rn1LNYGqx72wc5vxHwyKKZr2EnicEZP579xUet7cLgCfBMSvt36HTHv5M3NtKZMLqwybhcj9f78eNW",
  "key16": "LnonbNg9KKFZN5Sdrjw2f25NwgDeMkNFunhnLhuUyQRbfQnmDzhp77xgRMBNcb4MFkngRzAXUyN5bQNuYYWjotN",
  "key17": "5noUmqcXHXti72X3vxsqHAcDK9cdjkAG8FyiWqrjBHLYQB8xK8zuD2zYGx8W32b82FGZdC5Re6mhToQreyAEUL8m",
  "key18": "4dpegFRgxceCy7sj9kNadP8NzQLaefPvEhHSQxmzBf1LdrWMUhEyPjnynKKT3ivizMvi37BBPd5ECednH556DX1w",
  "key19": "4zghVt5pGBW984M9bSSEDgsy8tVgC1UpBVCwbAKMVJ1P4S6WgKeL7jmMrTXnUjpk2HriqEvhWS6Vk882U3Lrk3iQ",
  "key20": "UiYTqacAVFUmjTJrt7DWAQ7q97hzpN8hqB4ocdGoooD3SZokiasMUjykNnVu2HL2sYsFYv2JuXgP6W8UrSTiZQU",
  "key21": "22mUdL7SwezqXw4yUAKCv9PsSUzXtyhANgzPX1wNgNhNLP4Q27TDaPMoYEatCR5wfNYRfMRDBqWGCgjnG6Bq7ewg",
  "key22": "4LkF8hEfjZSoVeGKcKuoz3tvafYwtd8TyqtFnJk46YYwwvE2Hk17wUMRpZKCBZV3XNaChQRcNHu3nio8WMrCZzhs",
  "key23": "46PoZnH8aYf8RiqDRjp7gk96yCtzm9pF1pWa4Z2wMxeNma7Ugzk4UFJi2mPTSM9kSNYqTXSpDC7VWEh2q9ig6eFg",
  "key24": "jhXyyX1wty8VkvRVVuCSWhC4eCCX6b6uxKNbv5baRRf8C4pn5mSh2KTh2qFdBicDL9LMphkTXsy8jenZfQmhBQz"
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
