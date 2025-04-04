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
    "4BcUJcy8f4jELtR7AWvhb4Vz8BEhi4VHiibc4Wh1bsMc3nnkKiYLrc76b5qEGoceppd5p9kqDyC4ZZiJzM2Y7pHK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7GDzKPdFtzakvL5XBSZMGnr1LQXyRBWxYVX6qaX13BwHUyTs2NSGoZNXaPXiFyBfFnCdUpLzHrVm3uiAx9cGNfm",
  "key1": "2jhnGEyuuzZ6JYGw3dyvDkBWMuA9voT4ZoSsatnGUFttSEYUsaNXF25dzPxWxtEQPj86GuAbnhxUCGvZgm67xq3x",
  "key2": "5epMFu6Z2Angg6zSLMGTqfKapfPnuNfVLi4MuwFqfSxVXn2sqcRbriYGM6dK8zGf8h2RpytaGM46t6BFGkJxHM2Y",
  "key3": "5TDXEqene3hrkU2TzsHoSWSxdEB7JvAL7DSwnQKFbsj7nqqwiC6NFZrvt4YnRqDwUEDMspJ6uy8EbgCBp89pkS91",
  "key4": "4nRvgV4HhhmZtUnowPDuuJysFvnJwLb7BTy6miqqAxAjszUADaAyz7f9UaUxVLCJXF3vsr573gVbsv93fxVpjXQ4",
  "key5": "2nFtBgJxofbFhrDm4iZ1odYkKM21mzwt6sLR2EB87Shj3QHNibye6ceFJNHo3KVyggvrZvsVhCEqG4NKxrEW6Sm4",
  "key6": "3sKcLJhFBMRn6Vo2cEZeyAd3KkitzAcmYniiKfCbDrTyEFRN4kNXV8MR4rwMQdc1W9BGonSzCaSHGYT4zUBHqYok",
  "key7": "4QyvtNj78c5BCsmjcjRpEScgFJP1crLfi95UtnE9jJF8ZUKAe1TZ7FGJb71e1VSzdhRKBbhCcaztqewnDKZrg7p",
  "key8": "21BSi2HovtKz5m3E3oArDZrijSkF3U5kBerxcETtssYe1wjDoRyrSxnoHcVJCQUADzvDARBAZsmF8X1zwz31inA8",
  "key9": "3dLM9C1CnqkqCuR5czq9o4BTujZWM1NJ9i8vwinTKi9KfQHDokn6dgZifbNz7hYAdan8ygtC4gLzE73LSVxqZxsd",
  "key10": "haLji2f9Dx7rMkRfFxDwcg4yWmmysiszKH4o4EWQWJq7FqZHGMv5Hdz5cxoMmPhpj74TL1o2dMVXkBworfLQXE9",
  "key11": "3nTWDK6hvd7LziZn4pAbS9YBKpLWquR8V5ahrn1C5fQZoaHUC3y1CdP8xgMkSxk2sj8ZMCUiPNpP7Y4UAkb382DC",
  "key12": "8vo9xPr63qrVEwufPz4VsDvQ7h1n2wxyGL7ZWYF454p632hEtakkEYPv1BjhiTvfqCeqyx8gXd7oAWno971dCNW",
  "key13": "4Two2V9JJLuURdNF7uPDwBxoubSMVFYPyuWsdUZPHBfdcSCN9TEB3xxx2mSpnZdJBx1HpxgwWhkR4QkeS2jw3x29",
  "key14": "3Xn8RGgY7SsKDfFiXygDzEdbGYfkM5rNpobvqK1eawLzYQidvbHUAWhUW9q4u67Sum28P7rTh6UJBimFwEH7YHE9",
  "key15": "9JqQFQrvEDMN78T2CUnzY5ENWv7CNCAhFVQqou78xeWyXt1bBBsvzbfjT9P7Rvs8x924mpzdLbLJ2vR9tuj44jm",
  "key16": "3zMWC9r4ndMeCT6fgdbXEDUXKu5W2HMGTdEh329dfshDLEgLr3FeaPzDEGdMhZr9SH6W2kTPk471bhHMyfKqyZNC",
  "key17": "5Us5FENLH5bLckMjw4KwYBPG2RskpQ4TLfSGAqzN6Znyqp2oakTiLBXugQYGwm1wEiXWSZ92NTwCdXNhLrQ87JXp",
  "key18": "5BbY6aBVmmhVxWzC4gA5JnvQvBm578SgzzsrDLzy5Ckg2cqWUeiyAfchDz8CHPtjZNcnLcX9wi3ifnDvqkUa2GVV",
  "key19": "2TRFVsakELwJgKyT2vWQxL9NxoudxGvvQFcTocPin4UekZrfDDPW3hvEnrsWpZLztGk3KNf2hDuxyq11MduT3Dwd",
  "key20": "53ts1KpJnmXTuhZisENZdxEEe5CQLC4vkhUM8fbQ6YPtxQkxsNBwRaMAh4ZXSQZtLcKN27hT7W345pnizrWwgBi1",
  "key21": "66PfVDq7Y11RqqMQgGnbzRNxiXM78L3gRjKSMuJdsUj6GU4sLGJtEvUFN71jW8U2EXxU6Z98soFTUCZDT68hCoPJ",
  "key22": "4xUKsCvXkehpN4McpY5cB4tD7Sf3xAAKeUNUJdn6CJkWJ9oLXXTJJPfuVdPtM5iWWTiwBmZmuCpd49eiAUykbjjE",
  "key23": "3Svv5MztUeL2XkZDBHTHYJJJnqx8N9W7D2dVKHyXzxX7FtMjGPVkAzWP2QYM8uujKpGB9JpiUkbP6byYksFPoRAm",
  "key24": "4b8NvZzrSKmGSFq12oxv1sXrZSBA5SLdUbuqkePKrihaHgzbnoq93cjc1bVpiqY2veNeyGVBxC3sJRbAESXVaTZV",
  "key25": "2xXbXDFnQPnZ4qxA33xoogTWU1ziUrwKGxdRjAZtBKRqG253MrcFQkMRZhnGAAG6S7z2hLyWuLtLByM8SKbsgyAi",
  "key26": "36eTLtMTXTEr18pwAx8HVVr4JneArSPcB1n5Jn1u3uQ9cpM6DrvRvo6xSRMyRn5s2XgrTX7SQUJGQUcfU9kUUtyG",
  "key27": "5cACYzpgHDwkkvjPrPQhUHMPHy9kU98rQhuTX8LFA8SyJvJQQYFwgFjHAmTq18D7jHi4kih6PYcCnQiXTxHBLYar",
  "key28": "3BVKiVJKMFvPibQfsVgT1Px2CfuDjzJfkcFWVnjH5eEoB6XZ8aN66MyfZ2LQypSF41RWBwLdeMpjSqSx7zb7arft",
  "key29": "3VxN1UZXLiRpLFmDsZNuYyuA9DPHZjX2dK2qkjRcKikpFre3MVAiM88BNShqsM39HqrfPuKhmbwhnhKA72YhS4Ci",
  "key30": "2akhUo6PsT6Edz7Bc14ULY8trbEd73tv8uQ1RkkpPX9b5RPyYE82Lye79nP9YXy92W6AbaQAZYZWdvCf6CWjtbhv",
  "key31": "KSSNVBF5NdizQCnUti1xdNu1pftyQdRXUBi4RxnomjDkAmnPM7mBRWEN19GLPJEyvvtem2XfnnnKfWGPR6wR8io",
  "key32": "3ADUHro5ug4852a2AFrepzZCn3zh3cmbTdbtEfYpDvUopKYKhPM53TTReLaDgqs53YrXcefJKsZ7PQ4hRWbo9Mei",
  "key33": "3ozWSFJPSXUbrQfZgjb472uVnBGSu4P3dkwE1FpuTpVMpAcC4ENhkSTZGhRA1wNr1aefv2BAZxAfVNjWcXmiW4f8",
  "key34": "5iq9aqL11Ls6GSTL3Re3ZPVdUuBaMbwgbgDJWgXG7C5Fy9ydCbugmpNtysDeg4zZk8CsEQnY6EgJpAhsLAsxD5SU",
  "key35": "454Pr2cZtSKZxZhVVd1tcv4JKYf4tcrFBR4B7KD6JXvHjNnhESJ1jfVMYnieqHyjMRUZWVQiQvzZdt4DkXSDCu2y",
  "key36": "4otLbdm8NHUmA5uJmkm5bvqGdo8J6UcacjSAby12wbr2wmy8csVRF9psbhAUWgzWPNXMagMcnTfmX4qPHu52zA3S",
  "key37": "3Ee9ekYxLC93k7hhV3MWac4gSjmBFVzGd1RRP6vga72VuB7BR4Qds5bb8hBr9wfyZkSggh8oytavn8XpQNLTMKK6",
  "key38": "MPpmhdxx67MpYs8yCJZTvYFA9HEtqgt4MJcwbsUFHwwhYjUhdsaLht5cB3RJvpAZ959Buz34EXZtCkPr746HUSD",
  "key39": "2gn6bPkvhADyJLEikgRQVhuHLwrLcLbERViQthiMrA1PGLy8gu7B1FGnKhdfpwNs9ogHNhbW3Grp4LSCUczDoPjX",
  "key40": "1utuTH77E1KFA4vGbgP4gtDGcZiTMNdb7ErU19ncXU29Bc4M2HcZZKnmb6wMYYyogNgzSK4LxicBfTiobzdW55G",
  "key41": "2Ue7FfrHcq7HL3vs2AsXg5ct7gp9M8djs9XmMMqx9FJk7cvj6eyWcquzQ8PvDjqpMEm32mAEdCsyG2wHC8GH436x"
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
