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
    "28iQzN6WmM83dCcaXphcHBZaScCvp5fCDvkzxm9w2nV1eyJMXkK338iih4y3geyvpEPzrnMJu5qh4tMr5ReFb8XB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2E3S2nHQmT9o88ksrAAFiZJR4Z5P34CCxQ65QhPBanHT7mvpAGouiBNipU124rY8Gji9izgkLUifsgHJ39RRyS5m",
  "key1": "5YPVyadMy3kvbmkoCQ3isuuDqgWixNs1ye1EoDU5c6A2wWFfcxjXZP9qzTHst6nF2Wpg8VaUvwER5PDQLjCruY7h",
  "key2": "4rHHUijh9ntw4yr2auhrEGYGLpyiSH5vrry6NKMgs4JbRHaBgxBwQsBB5hSVFdP5AuoVJbT4pkHkHeAkW2ozsUYo",
  "key3": "4huUDQyW7sBpVd4P4cd4oYVRy1wZj2ykQHsgXUT6DtXu94yTDGST2miyAUbev9GZu2sCM7tZ1Qw4pLc3hu17RAZQ",
  "key4": "4BKuwCuSsxsJKzkWw9vNrg7y7KKAWkyVLwXXs3R6wTKipw9Fj9ms7tj9SppZhgVu1mS4wj9FrBjVVz9UREenZT8p",
  "key5": "3sQ5vhAM2FFfsMTDJrg8zY8MgjnZN3ieR5kVWkrPj75Hcze16rw6ww7r86ugPKoevyJzTzXp2S6Nksp31JTWnfRp",
  "key6": "5YkTQzFExp9mC8as3FPoGDCUoPToRsTMD5Pb9vrkF3R4GVkKq16Fc4iMwiMBMjBYWa53bfgRPQYWVYwG9TSEoLb9",
  "key7": "njRGhgSAsdYL1mDrxJ1YRT8oo2qh69XTkoQeTNzjdEFTdmuHFnUWnPjkVFyWFTdWTdisf5SKcxyNZ3wHDhxf8Nh",
  "key8": "5rCYiEAnyHz39qxZF7Y8n7qzd8Xo9cfgdrKaMFuYED4QcFTGAsLxyB5ojeyKMAdHDjYJyUGRKT3B9MkWzHRwjowj",
  "key9": "2rqYQE2UrKPWv3TKzL4C4qrdZxiYpnyxPNCMRsTZZv4nUgqyvXVwujzP8b2dxL4fwLe6SQS4RWXRdXzJ93oDELgR",
  "key10": "2cPviZUuzfK3Pi34b5p8UBLoKJSvBcfKoto6bwmqtW3HUzMh1WzoaJ6sPJ7nvT7YiHJmy3PsdNGScUQVCcChqr7U",
  "key11": "2EwLeEZH346QzzqWys68wb4X3eC8yn277UoTZRvKJo1C84Dh5w24DKDy3t26v4Toh64XNnRNAMLfh1Q4exg3zir9",
  "key12": "3HVfuRGpNCd5sAjFDAjAWsG9RRYSzLiUsJ6r2mExqcYFB5KSznDMqvx3eoohEFtJdoa1DgJxjdy1a57cYQK2Q5Au",
  "key13": "4cf67bvRWxDuvkZ4zTi4hwG9fxPc9yRqvufXjGJSZPQZEtGTEeLedzsQtCjLN2X6hUCmM9c1RzPH2TWyjNowerLs",
  "key14": "5JecPNzAxt3LNQUVPKPJyGmRDXdiKuPHfuWEhSiM9VgJeo6L2GeGYUhDFEGXgDyWDg74mHx7WMaJF67GQbv8KErp",
  "key15": "UbvPjxMKdtRsiJwkumoJj6j4sRyZ9aV4Va39152SnYWVYzZV2ZFTw65ssaKMv5UC4gzRSvGu59a4BoQuENDDqU4",
  "key16": "4u7FnBHB6C7qKiLaXjk25Hnif89McF2R4Piq6T2tEpWEfiZrNjeZfrxquJJG7mbyvSxDdpm8Q7GBWweqQQufK7wK",
  "key17": "4WdxnCdjmaA9fFiH5qtfcCSvc1VWqznytxxXJQvbo5myQrmXMBvF8L3sbCAEZAUd4v6cBHLxQZCeFoFgpb2npLKW",
  "key18": "tkQShiRzYj1EmUrGvej1GGBrm4rxPK3DP7Caw15FYY24ehkZPCCcahtioiYFrUPehSHSUTjS844zyLsUWza4Ukc",
  "key19": "43PCwsdHquxHvvVjWiGmK1bX1R6FCGwCat14wRBMZ7ENFgWa9fwNfhg4SzwotJTJ3DGsuEmgeTeGph7BogJ8JTBX",
  "key20": "2h9CWhpqZmGh91RuLJPvP5Efd7uJXNKZhgEbWmmfoA5yMHR8ig795KtZBhiKmS2fKFF1B4x7gJaNtoPdC81zigi5",
  "key21": "3D7gJqik6u8QyKJoTMK8LWpiKh134cGuLe1mELEupVZLzQ24WXVVvMcp8aQAWohUqkV4sFLSq3WJxeAKDbt2BPwz",
  "key22": "4UCjzHuGNMWdKADJboeTbSbEJVdNUQQVgGK23XfzMYLJipckz8oNRTVhwwqsLaQURm5hjFSRV6uYHZVYZ2jHxn9x",
  "key23": "qd2b6BrFG184F2KFp9YLWAqkvPPJMPWC7oxaY25KGQbhuQNBLijDS9vnXb1KiktQgoqdLiDvCFJjBXAcQpPhXDz",
  "key24": "2uN6htasytYcjJ2EPVY1YZfZNmzWMsbskAYwr2WWoB6RF1QxumJft6yX3TKaE3Pstcj4kNtF2cFzizLegFD3q4BP",
  "key25": "eXZQFBVnaU2ns7qEm4cFY9TBUCRUcfPobrKq7hMo7zhDqCibWoEmMzsP9L2Zan2cqpgudDGpKC1qiS3obgMmRFv",
  "key26": "29uVpryb8CmjXPaSG2iEtVtngS28Q3S4GfrJcNA9uEyFQRN2sXktcJ3YjNxvcoKF6vkdSY2iWSdE6j8f5UGiZ6FE",
  "key27": "45JZf4XYTqFqBmw277SZtKFKeEgUuvVhLL9nuvD9JQrRZTHSbQHivrg3yyPUCjP1Uzh3jzFUfMhPVUNTL3ry9xRz",
  "key28": "36Yc5ks2pTYiCBfFizD51S2RC83pL4epfRwEGMDbw4oe88eb2pdBJe2DtSpqXodSB1rV5gWPqFGnNYsJdC8YYizS",
  "key29": "27nMid1VWWaYAfjpbteFKfCcZweLxXxUwWRWNU9KfXy8536rwzgJQBoC8sv8JJywz37i3aZdD6phybatJ5ofW41T",
  "key30": "4UVifhvUXeJW5KRGBKMUzLFpgZE3eNqmwQ9hyr9oRReg6jcvUzt4GQNJr8FJ2eNdPAw5fW66NWRzJL3xAyoLKKsH",
  "key31": "4EU6edEDrniAf5K3X8hMkM4BMAqjzZJYoqFmBrQ1RALdv6ii435pPwreN1xaEUnSopMqAjtcXBkxDCk6nEhCFPor",
  "key32": "4jBd8TtpHZgV71Gm6GyNBJafFNpx8wF4ApEJ3uotMqbRjsDJeEv3dj55ACBD2ZcRQGSgW3zZ2jMkA7ixMhM3psuf",
  "key33": "5L8x7BugXpcYnBCr6C5RdJnZsBP5vJMA2CCkQxY89CAmuCHxsdgkNpv5xhQoT3UxnaL3PBwnA6Q7MPiGwD6eD1oj",
  "key34": "62HFaat4SPUxsTQDJm5wAvLo7t27SuPnqwtQtsfN4bb4AEKi55LhQPKwfRM3d6AwPhWY7nv9L9WMPgy7zHZ2ThR5",
  "key35": "2cLzeV7HxaVBx6sNyNWkFT3gNFBxTTX5jb5MfuYNRqsAZqqbe1CqipL8WNySNWXSjDtQRFH4W8NMKbfDZ8Xxzt5W",
  "key36": "NU9gy3RPisHSUkwEtZ2TQma2Rbno8ChdJBHyVqjZEjsgherPdGbPqm1UCoEMDmYjbwJfEuJvHQnmHQ92aaDSLpe",
  "key37": "5mgJHRFZqRXdmnSyYsT5VfBKks1oEPZjkB1jwVVRXsukgK9gAacPEFDFRovH3jJ56vJNxaZZVJnSGJB2HA4TRWaY",
  "key38": "5jZsVP9L1aeXcEKWdTNkLrRUXTMTK47dmRiASHCxtGtEB3mN4bNRwytiEZujN3MTeSuhGi9WgGmvXjAcJmvGadSQ"
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
