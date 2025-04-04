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
    "65dov97hRRswX39KoAxvkA4H6zj72uG1E8zPeob6UST68sWf56K8i79N3pC6MHfYSa23zykScHmmm5P6ziMsJBvC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MJhhoQdkys2FgrkRRXsB4PhgxMJqj351GTxbgnzt9jq4bqBbNc6zA3MkAJsbmLZ68VgoJssrKSBB6hewSWMeJRn",
  "key1": "4Cv2XoHBmL7bnpB4H8mVuSUQkx6CFkSQtMkk1t5QtMDBkoZY1aJP4wVuVye5K1mwB3NXPbfRKPbUGfq2315x8e2P",
  "key2": "66We48bLgztPf1zsc9D3p7MGWxULxXSQU5KvwMKTQCRSgXBQQ18c19oWGDeUQqKJNZR2qKrtoyfGxrGDuwVBJwvb",
  "key3": "4uJJpWNxfaJV6RgTswjG4H7eVGCzY6Ekqu3h33vEcH1w8C29ZGKMA13FTv1BxDFHMbAmmyTci5YBDV2YCgEJEbVT",
  "key4": "acxBbggdaBzBMZJTCwkHa5gv3GDrRkCiFJXZDiXRdYX1fKLcuggzvZY13WZBwmAUc8i9isseo2ZzZMB83LZEzHu",
  "key5": "VFqB2xxHvWgK7qgTRpPnyCKKGx17bew9UxYbGbbT1NrtiA8t9LsY2hX3R7mS2bKbqMWDf4xGqUfzUD18t9p9RqA",
  "key6": "2u3tfsAeTSsmnfTFbtnFZHnjQToje72gs8T2ddegUXkfjM8nvah3ArdBj48bAycoGdX9dZqhEcXLdJYoEYkFmxXs",
  "key7": "3x2554tzkKFo7eWD5shYbjpeAWh7WUXR6NcNejAyfjXkr9HmvJSR18w9rffvBapUwtE7yeD46CVq6qaapD1KWJpa",
  "key8": "5F1vin48KpoK843Ay2YK9iZ7cFbBSuqaFkaJVbDARfCfpgRw9V2yAnZSYF4QmWvMtDedQoErDRSE9ho5HoVtqfxG",
  "key9": "5VWXTjJ2Wx8pYDcEYa133BbyTW6eJVab3gBgzqyjRcCcd4EywvNqf8BXVhcjqrJLGzfjrXZ4Z3BLzak16JS1yCjZ",
  "key10": "13JR5AStZjBpuoniSL6nRAHwuveoJMZdMAuFKSZ2KNHNrGK5Y2DaX4rRoszF9JH1Mrz7scpd8JRGRPewhfTFqp2",
  "key11": "2VT6Ld7mPV45XtgVdZxeETgP17P5k8WKcguLsrECnWBCUjNYV82vkDQNm1koijj3ndducXeGAunDhJPqCRKXLr48",
  "key12": "JFiBYrjZCwnH6stuWxAhFLUxD8XqdyHn2bDMoVw2N3oWrDh8qEQNAPPE55boX3C6vCWvTMLd31Toyyg7Z7hWfiK",
  "key13": "62P1uQg9B4H1MaSjnhDuwr8JZXFifE5iKPETcwYzGaaGPwQpSHYbMryKUQa9Tn5cNsQN1SSS7mHhf2Vb7PbZVs4u",
  "key14": "3dAFhLUPoAvq4cVNxxCzRHSFYaYPJC7wageXYZQhBRrYzZuKJEWWTsQzrYBKdbGo3orDiXrkUUdtVS3ewYFtM4Bx",
  "key15": "37th9NUDmRCneWZXLCQpefnqjpe8YBJfop4M6ZBD1nKUbPecstzKeS5zbggp5VzySsaDPBn7xF6u6dXjWbD6d5iB",
  "key16": "59u1kLB1taQdwhXDxE88sKCmST3QyatthnNx1BtihRv2K7XvrFHLk3viZU9HfYC35ehHWWA7oBe2ZqrvvEvRdTSR",
  "key17": "5Js9i2LTqKTpZGbFJSd6SiL5Md244Y91vg3CpEVJoDb9Z6zYj1w4aVCwuHstDLZWcAsiRY5ERYRUNaJkZ2sh3hyp",
  "key18": "61Faker1QzrBYd37dh2BacV93FUh81HmRq6hLqD627EgjQhZt6ktvjn96HfkACixq18nDE67TCZGd8d54e1bvBpF",
  "key19": "2HYaMwL4QSK3iaPwcgzWaiQV9BmBwDjsBpXPmGokw1CWsS3gMD1oEJJF32CyjTxWQ1RpPxGgWrShw83ccSQaJvSE",
  "key20": "2bFrXmZvaUPTanjm57WZWnsWzCqpgPG5DmXQMfJ5Gr1jb7gPRTBZzsYoYGR4XJzXA8qQCXUN3DCwApJv3SEmh9s",
  "key21": "298HhVata7RvLAk92Aiw68CKaa2Z4zUwVK9AH72tDPiSnLtWHZkAktGD1n2TVcrUuB8gtW92JiZ7tjJdwywvDCoR",
  "key22": "5EgQxY7npPtiJgm9unKcZJBaZmYmxskf1BgWsoFxvqd8jhb8ykVXp8LEuXnQ352utDNQDzdyRqurAwmRX9cmtjPz",
  "key23": "34iNNRfCypkbxLWUxZMP55yQQZUxwojkYiBfQNHqYshsyYPjtvBtCfyC2QKpKEffr9pyvLi2hVoN4mjr5UrN2B4f",
  "key24": "4ouY1dS2d5WfpueKGLtVoJhdDGEcNMHrBjAz89vpua7isYUvS35Rsd6yby6y2oEWvBEUS3G7aevUdYBd1AyJiz5b",
  "key25": "2MsfJivZsmxSuGjyZdahtCDVuT24sLjjoXCLecgzPu4eE7PM86t3wyJVRgt74bLvoHerYtqGb11x9VLbqyYd322G",
  "key26": "56zgTHUENZLEg5XqUtfaHFeZaVNn3eEgdu3UXNhTDJh18Het73mQTVau7LppsTWNzLdM9UsmmLgMoa1dc41V8QQs",
  "key27": "61nYNGwYN38z6cdQqeQEd9c4g8eXAimG2RdLmDV8A8YMGa3PqjQawh8NER7mSeCqEZAuqzGzhHdeKHdoN6BJb9vM",
  "key28": "5Lh4Rg6WKQVrrY6H1X1vhDSQFwAbGwexVhD6vo6auz3pVbHkEnrT1nAMcPCJ4WWhbZfUGYxHUZUvxrQnXGdbxeeY",
  "key29": "2DZxSaBEo1eieqr4m94t4d6pxM1KDtRLs47tuV6uFcijnrA8SpLjtwoc15BdP35vqr65tAUeHvuGGq9ohisVyEh2",
  "key30": "sjxK7NiFHbPqQ1q7xybmqy4dKT5Go7iv6zSMpafyGwoLvo86nZgJo1gZ2wdLVm629bhM4MSkkg7axppZ94QXaCW",
  "key31": "4XSdjTtGDYKQZcgqTScQMRL7YqQRdksBbax75brD2RNTnDWpF91Yx7KF66F72GK2yqsRQNFzqcRQBRuW2kUZPGxo",
  "key32": "59tLpYcHSQFJmadjhvNeqoRU9g2NQR4rrFopmBM3HNFAATNV2At7WdXV2Umj6M85RjSFJdvpTNMRoQtRkAn4fa1N",
  "key33": "RvieitiKE1DBGHv1rLbXWCffJ2CaMxpLq9CNnwFgkhNMuQraJxyoEE1DDnha94iGzs7FzfHrn3kg3CKyedNdi4j"
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
