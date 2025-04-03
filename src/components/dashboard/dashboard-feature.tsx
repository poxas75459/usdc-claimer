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
    "2kwS4v5fGsmwzTuw9T443R6rTdFNzER5ptRbGahFzZGSEU6sMk5bxxuWBQTjwkBey8RpRTSvqmPihoPqhJUC7z2u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31rm2KoNSf3o3PbhiTcLj9f53YEZLksVJz714KHsueL8uoeTQ1favh94vFq4HMok46qhS9yug4X1YJk9SQXuMXfP",
  "key1": "3xZZ6DWxYe9kaK8pLXd1MhpKvLSWNfhheTLqcrKoKtNJr4Qv2R9SWgBmuqTwyTghViXLh7fb8sLDSqQSkvSF1vab",
  "key2": "4QkcHiRw6MCt6sdf32TYHrNc7ojhRfwSi9NqFu4VbQ4kN8xVrJPmWz1SW6VKvyzZjWNUYbWcuwyBpfuqb7eEjS9n",
  "key3": "5kSDWZDaar5UXnh3hEKEmDgBDrzuX2obG3PUs4r7r7PaqHv9rmxQnBxm84Xd3xBCQpMxqZ19hTByi17nRByP1qRL",
  "key4": "5qVZmWj8LCTdU86K92G1TmoXH8R48bGCXByEGz1wZweATVsBeB6dzTYkdYmZPmMpVkdtK5EPePQCaBnPy5VGUJ7A",
  "key5": "4ftCL8Cb1gFT1vrP41GrCTWeiGYBUasLXXx7i2DEqLfuZoqmnLkgtLWEUcCtRBcKBhuNMe4G3WzDZN37HnGc7KxH",
  "key6": "4WXvmvvHes8SthZdU5VE1MsaBrPgdmHTLwHmxobddZ98YU7RGr8HAdpwrrL6QyMCB27Vn9CKNCuyfQoPMotn88bp",
  "key7": "65Hcj2oCDvABDbMQ8oW8jPopEGessvi1FHNZwmcT64QAcaczVLsyYRLjaXMQYNrzY5a4CAvshAp1DacSFaC4Juyb",
  "key8": "2dmmoZvMRt58Ns5P6cSaPFGDdGwVaybw2MfUCZhgRCHe5bHzUdfGci3wLMhrYLxpcxFmySr6QB35bgW7jJKasjV3",
  "key9": "4M8cJfvWv6Eyb87PhMTuouZYaL32hZi4CfffQr9Zbh8eQqK5AJ1rtbkb6FwWYGwk8anrWWTeWS3QAMwXNXyiHQ1z",
  "key10": "4DMyBydqqaXBkYVUTKMHtsJy9CBbEFyQNcXLU8bbkqxf88G2pqwqqvWG9cHhWWJ1sYKL1XzgzKGKLw2Uav5EgeEE",
  "key11": "4jhZMek9mZULQut3vGMoRkfj3GbPc45H7VYQ8HDJY6a9q8vWhL87nsq2i4rhEvB6azBwubhzqCV7vqLf5DMC8KSX",
  "key12": "3HLL8nA4SqwvkaqhsjajVqePZoGxiq95ttfoGg4ftzxAiFapYiYzxoTDbQHTzWH2PNmc6XGbnxELExYf1m6S9u9G",
  "key13": "3SNFcXbvpB1EjPsrKz86Fjk5GMJDbRDPhtoQvstR1uk1Hqs3gVyAFyD6vkqnEw7QTWDuzo7uUfM5trwpdATNGfdL",
  "key14": "3SKT815T6k7mTUMT2dvFMYRWLS52hUWufJjrdU9R7xRBaiU4awzdy8F2nGmnq2NUe8XmU6CarGQ3Sj6ohC1fgtFZ",
  "key15": "3W5Px24pu1jWA3wE3tD1nvEksaLrYCoN1nvF8YPmp9FVw6zNW8TrV6EoJ4czmAtxw1tjagp2BLLxxkRAGXQg12mv",
  "key16": "2KcmFzG4c7vb23zV3onwQhhzVDf5T2PzirmnHxjr5iHMtKqM3ACCxTf1wWZ4jwFxD4wC8dhA6MbmcWTfyPiFc37c",
  "key17": "3yza1Vm1JSDP1VQAycKYEjgXQNwWytTkboSsSbVNNrePdVTxHFUQJWveNSame4xXs4vMcFDxs8J4HjZNtGcQm7bJ",
  "key18": "2UVfbNFrguciwJfUTfWKoTqJYmKPDJHD155eyudXEDwwoKo2BtVvhnNgam3EiKkPahTr3Cv4JNTFUWFKsghvCTGy",
  "key19": "4DzJS3eg5ttFiy8FjeVrWU4EVAgtrNgz6WiWPh5CXgec62hFHX24zujriuXnxY2ZCp6SgWMzQsSX2dsNKo6mS79e",
  "key20": "2pYcEF6JtQTHsjmYbAX3jprfdDhLFx3FuPsXf6HdCN1yocv1eTmdnAjAWA25GVcJ8UHNvfK9kynrzaJ2w91KPLhR",
  "key21": "55jCRTxGXGcxGhdZC6DVCVFcGw5MhVA68b715zAudc9A7TDe7ar3MGGH7gZY3GvCGnT8HkuGmUAu1Yrks75uvz84",
  "key22": "27mmzeJmnJ5HTGAvygRwAn9qNy7S5GSeHwMnNdeKum9QHrcDj3W1gYGDVkgP8GYktqx1c1qgHYg8cXzUzamKmSQJ",
  "key23": "4Q8pBL2AYLeC2avzmXxPY4nanjirKexSCY2zw7GCqN1GuPQX1wnZqx3aApHMB8PwpAgCBTTAZZfSEyWnkip2WpLr",
  "key24": "23tU6bZFUY6WCWJrS2Mucw7tMrZAez7YTXxNztjYQVjq29SBfQrPbTyQKBqVDVUQbwR7YeryBcw8yNFyVN4iR4N8",
  "key25": "ittHdvyn3H4awFa4B96cSJEFRPZFumG5oqFfeM9WBfoqKQPo2C2zS6z7z7hF3uvoL6whuZ8i5mQvrg9GTP6vTkw",
  "key26": "5rSz6K92tCfxgbN3So39oZgdbGaQHNweTe79UqtwLimqf2sjcJnWjwcwYSkg7m4vzsQQnBugWxF1bg91DKb681Be",
  "key27": "4CAdfPdqfsUBXtEjvWw4w6pXJQL2ohRrn49cbk6ZGv6ZVVK7QGYxCWbrjj6Q9MHErDBHAroXdkmw4hGammtXxMG8",
  "key28": "3V5SFVeUV2x7PWq4NJGoZecpuPEqRPYhgUfRo2f245AZSW3n8gvi9t3pcAAMuXBvMkzxPx7iam8rKG3joiB1EkTn"
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
