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
    "3jz1nnRxAkPo1V1PYsSPxhq7fHqFCjLtWfSrEA9eb3MDWnmqBK67uB8qehA9fduDgXeEPv1Lh3vzN9ujctaZrTC8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TYKsToTbhEzdcq5hwVCfe7iMg8JJxHmM3RhbFqux2B1SPTxcL635y7TGC8KySfKxxh6ESF72CQc4or8b7TJmYpQ",
  "key1": "4emLkaiEPcAyJG6CqEXuS3VATvgpf21Y8KZAx3vvgvxqL1cB4CCsVNbJQD7aXXDRonz1B5JNJxNusPdJdZ7QPS46",
  "key2": "fgZPRavXewjppQdMufYrHPoxT28cfNZ5PJyC9izFNj4ms8p6Cq9ZUZUYB11qUNExtJTzaxPb8sXbbkqGmj1sBsP",
  "key3": "qQAaNTQLHVU3j3CHHJ5Wz98XsQ5iqWC6uDmwkEr3GsC2Q3yrq5rG9i4FN6BKeXTozbgUvfKSjnofa4KwNw4x16Z",
  "key4": "tTLzjTyX6HPfCP5oh1AeJSuobQCAfJep36beL4taYUfBxsutWb2pMexJDZNzLVPNNBxTSTAC9c6FaEpa2N7ayUm",
  "key5": "wQspjnnKQccCZoWe6r72LJHvaFFjY7GzowMdyUsMq4QXbrv9oH6Macy1DNaXw7AwGHr2LWDs9jcZdTic3YATr33",
  "key6": "4jEnDYETWF4DaAhSUC3jKt4zR63BSUn5xecYaYvw7crCQ17tkssTTxBtA5WfhgnPtj6LNLP2Q4L2AJaTNTmv99mj",
  "key7": "4ozJkWVAk6uHSEyQ5p4p23HSFFwYXjNhkD5MDfyjp6kLhq7nHdcWug1FQiRcAS4kGjGkewkin6h7389a2ijjfYNu",
  "key8": "57Muio88R5X1Kh5e3mwMPArtih8ZztkWVeo26FwXzzcTPnxvsso3PKY1hmcJtRTvEKFpFrSZidEqjRjurWR5DYRC",
  "key9": "mu8KZH3KvA4wPyWoeuaN4m6qzo6uJnvmNoJrGUp1RzUtdhG1v5LAkNVjCBU5sMghWBkzNbu3z7K5wZgWg5ggHuq",
  "key10": "4ygt4GXis9ntByVLxuimPuMyn3UTEC1nxzRvPvCV6pTEBTM3dtLSAAFAAjqJgdRVimzpq8bq92MhN4yY2utEmkS",
  "key11": "32gCACFWMXvSWoW6ajoccC3vjr57dCM8rJEnT7kUjyibDNzEh5DQ3MZZjFT8RByyZV1qn6ZgQ11iD7NovzvHQ4WV",
  "key12": "5nXbxJJ7SytMcQMo1cdwtaMpH8chDXzz3FqmhRsBX7xJqBP7Zt3LUJrEyPhxx6aAD19SoH2AvgxG9ZpqZTm5Dufp",
  "key13": "3cDouDteG27NFrVmv2oazCQES2wYdRuQMUYH8i5gV8dDPixiit4bGsYCorwVx1hhHNwr4zRyLU8ueh6mV99Qp71Z",
  "key14": "3xHfH5Lh3r8cWmcShPrsFoK72cUnpJsco74HQZsdJKh5MQSe3sGPgT46i7WMZ7RNzxrjBKJ7A19HqPc9tTpNgfSD",
  "key15": "2bW1CKvGMEJnqjm6R9ypJyyYwLy1wHHxd2mBqdV22BciPci4cACuee5Z9zNaDHKGwXqDx7iSFsS36TJK3D8Wo5x6",
  "key16": "2qxhHCnL5Tah8btXJgi3o9e5TFyjz2mHNd41Hy4zPUrGsAQT2j2EVXtSqD5ddp3u5LXRfhr6NmoyEjm6mv8AxTjY",
  "key17": "2g5NT9XkGWqPqCL6M1y3xt4kixu9ktrMcvYnC1weCQUnjsUmExdhqZ5XJ52JuafzHkEkdCSB3AAvaH6mJuARRFbK",
  "key18": "3o6CpxCUt1XrtQrAETVRQPev2nuXbEm3YEeuhsTUfYAXQJhgVTGSUQKFCs5ae71CS6cwJVNFBCNA8tgsBAW7Yo1X",
  "key19": "4FuDewhGPWzDY8THEAvdjyHjG1xZVNjoeLyFeLdv75ewHjU1qANj6J1225tP6Pyr1wDytmmwiYrmsmfcaJZFphAw",
  "key20": "5YmwU4nmuZyPMAzzNoywhQB4jJ3aLQmeyjRLrb3pjMcWjFyKiMQENVXmHPs1CuTpoUpxcSB7SeSiaG4eKWLA1wyD",
  "key21": "56YuHEx6rYF9wATN1tEusRcujVLrxVEqzUBFRxwRmcixPtzrRjcgi3gz7fKfHDCFyoEhmUWt9qNd7XU2WVbkYr9",
  "key22": "2jnZyVNPWJZM3rii3wxEzTYGWpSHQUqMRoS2MF3DwjYvN61okmdqAGwgHnddjwVCDQM9YFD4aWNK4rgbTNRpTnJG",
  "key23": "27ciM5c9kFKBCBsDoy5bfXbLKxcpkE3WNSJT8aE2Jq5X4TZ8zqa9DZRAb53TPFAh3yL7mogs4kLzU1vk96Rxz8zo",
  "key24": "59MEaRXpjA3c6RKkYasXDdGNnJUZYHCBEQSQuXAA3Trh6m1vKdAmqsrNmfLZ6eET8neU6UZgbsBDKxqX9EsVZxdv",
  "key25": "5zA1VAdevDxQ1U9vXXNRiqgQ9UvZwGVg4ChDkityDeknDmrt9WnUmWCdtmSvdHPdQThFeEwkii6RwPnPb5Trvn1i",
  "key26": "zGTeTfnSRh7gxqy3WNWkzmoHvumpaSx9xYa9AesfkQyxxLXDYvUnyAU9CkGbE7Dho2bSWpvw7DEmDJ65jBfT3XJ"
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
