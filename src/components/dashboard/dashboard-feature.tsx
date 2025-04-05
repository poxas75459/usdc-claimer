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
    "25tsDkQnh4dLzVz4o8EgMEogHh1pTPxCXL9mVwTkeBfXQGV5FNCSvnPsMNjQsp1qmC1ZH7Gm3F4Dg9oinMh1U1XM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TEYj4LQ6JVbLyxnqXEbmvJmiLTug98V4RZ3zXX8jixRdHXLSFN7xd7DNPTdenn5jwwtgERYhSwC8jx2XAQFUHAW",
  "key1": "38ZuAxfLeoamcXxT7Yi48GeJpGdCcExYvSaMWxhZcf4VmyMK5Eo61U2DP28cbzepp62ocYu2ZZtvrL9pf1EtsJmi",
  "key2": "2okmEdi3S4BgWbmkWVjRwZzPMyG8d3Gp1kZMsNwxUVu8Gkyzd1mbN9uSP253gTZoM9KGApD12AvDHbj6yjSYQPry",
  "key3": "LQypGu3LaiANiHtjTx3dNqurKv1pDYU7k4v2YiqbLmAiyCPvb1rTYXmWVTWLHmZNsEQtdAUhVZHiy2tqW7XdoXr",
  "key4": "56x9sW93TwMyHYszi5EHe1JPHBJXRY16o4UV2VxHAwYwTx35Ycqf2igSpAw4sBjje2JYDWnguMF4VNNk7SdgcwGi",
  "key5": "5g48w3VxgtkqTSCsCV4e9wuXhPB5wp9NVKb6YMJ8cjtsFXCMXAMVHpYuuvEnxFoH4mkN3gRJybZDpFQvifQapWGH",
  "key6": "d6dMDo8bpn6x41z6m4eXuFgAaUvq7KLyvMznNjcYTGUypxkjtyqnvQoxTK7FskJvJqps5qJd8CXWuTj1MCwR4Xc",
  "key7": "2cCeX4kyiNpJvSGVdWLBhjun5xwoHB6qKHsQKN7s7nirwiBASYmRoV8DE9RVGwN9xym3ucZieGSBeXVRFUMPXjtn",
  "key8": "3TXUCvtN9kPzd4owKsQjzxRndY2afWCBZbNcVPcH8gEepdKg9KegXEG3b38noyALcywBejaMwWjvLRYoB3GrZEJD",
  "key9": "4eY8FoqC7BomwyTUA9Y93dutMJmqJfXP2kT8mujKZNgZxiLXTgeRaCzZfXJPmJdgMYADSpFtTXPzNvrLv6Rcs9BL",
  "key10": "5wD8vZzWRtvgf9nxshbU6bSS5yfMJzwP9RzPsboPkzt6yETR2WdCphtvfxLcLSzfuaNn4Puq8GxRQadHqWp3tqqn",
  "key11": "qEvFam8SUDHunjNuEgkZtend6MKryzaxGVqkGwic5qtT9b7whzSYnJ5qdhm3pzSeFPaqjzxwx5NAQHMkNYn43Ah",
  "key12": "4wjW7t8ekNxGZGM1AsNKgHXKwLSvs1iGZhJSzMfZSH7aZFRwphnWDENQyYNxMSPnFrqJKnRD5xgTC2Nrv129o1e5",
  "key13": "5tNVVA9jKxJypuirgPB7am4ys81tDFL3LHz6t7tRRSsyATpTwptLGHYKN3EMCj8xi6iFMUxVZEeSaVvsif5H4q8n",
  "key14": "4gXPpjMnrzQKWwU9sNt8RMx7yR9d8wtAkkqjBToQqfvme9G2zj2Tt8n7Bki4C2iQccGCFLGnFoTBzCLiBHqdnYcS",
  "key15": "2zUw4L22Z5GGtSbbaJ5obxFd7nk89ZB2GEtCqsFSr3JWeM62TgwTZHPCi8PEks9x4v2xEL9PzHLVq9fxuEf9i4xB",
  "key16": "5P4WZZDDTANog47PvF6vTXgTTbiizRakNkXP7KnXAkzCYFAw371JhC6DTXyCv9PKJqYB7T5zeik9WMzw7umYXev5",
  "key17": "58qw5SCEyAmdizbk7MFoaEuW4NiDx8df5bbUXih6SUiYMr9zHpUTCFBRzsMGeGjnPz5Gb2mTzijAjJKZQ9B19tRQ",
  "key18": "2g689bJauK8jW5fz58iZZmh4qedoGmUSWwDpbxYg2gBdZiV6w8qBmNotik1TF7qEmy2PKMNXrddd6tcghSSTH88v",
  "key19": "3NzUwgdB1KvTycCC5kvW9Hx9xc9NXeWHf6HDCvKybEFT5zEshJp4tk7eme8gmdJYqkRBVTqr9kmVJJ9MF9PdAHVZ",
  "key20": "5aFuXFzcbk4n8LW6os8WonDUMiNA7eSLhDA7Nk3GLP4utCdxpTrauMe2Na5bTLiwp4kCHNkYbcoPvRV7pdrEmF75",
  "key21": "2av7CresbnKW5nyE7oDtHjLdFjf2pQ6qxvXeoRaVMAfEqTNpci4MZFVFNxpUgnS8E3C1uuqwH1nnMRRwWsD8iXHw",
  "key22": "3y7HdZPnsHPbVZdTNABJ5YB2NyYUYgrNghn8faGHS6tTASk6gnpVkJkX31Cbj2VRUMBDw5eMHGJc8n5vPK1XVYcT",
  "key23": "5skxPvxHp1dWT55VfCqTNzurBw6PpSa9oDWDWAqM7h7Ab6V5KFzqCSb1kbtGZzNzZ4gjoPZESAbEeyNENuA6t5EL",
  "key24": "3e4pmM42ChRZutqStfCvC6ccfM4H3azF9e93478GWDnaS4TDuXxUZ2mDTah7KHcVGwG9ase7CpJsF5GRF9TGyAs6",
  "key25": "5ie9iz6f6eBFgXyXvqMSkpVjJD5XvPs7udy8uPmAuykvq5uUjyMhZzduEd5DGZdD9CNcpJZz4fjGoBb1wsFGpMDz",
  "key26": "61gRq3g6T9FWxag1gX1iowsqWfJ1LjLjqpWtiDxrgXhuxSjkFFDZ49UyqX6D4z8ACyvReWEgzmbFEFQswhHttmjw",
  "key27": "5ntyYKTemhHss83NYR4HsragqvZ24w2P7NFnKwDthgPVcBzHtVwVQitquJMp73BAUkMhXfFgnirXPhQDeeLjsMBw",
  "key28": "d4sCMDM7WT7xAU6bd3FU31x3jHw1WtQJhzFxvHLWBAZkhUL4Ytvd1dbsmkpDLxs6mXwxVWqpVHLX1VkBNLjHKms",
  "key29": "5hCbDqNnbxM69dzaLtP4aPFr3R4bjNYQrb44mXxyKtwCNgTQjyyLxcs2nbnvQtLTHC8c173pvWj8nLogHnNog6nK",
  "key30": "25RWZxTPeoEVehcbtaP6CnpoZAR9DHTKvMEyqfpVDoYiSZi7FwpB3YWsYtcM1TxzEvqXNDp4zXWbZnd5XydfAbnd",
  "key31": "4AQn2gTZbXAY8X4e1TfHFALjy4TF5fgSBXfnubbB5HTXxkXQ6MLi9abXx3TZ76PFot2tc7UQtk8dnNkY8Wan1f4c",
  "key32": "PWw6teYGC24pu1jQfddtopS4yNfW2AhrfeRkL1B87xVkNPCYJoY3RLXgtKyeBqp8PznLyUTozQqvWWoApkLaAUn",
  "key33": "T5nCbQ415cBKBBKWJdPz6yBSHDQb2Hxmo7YWWAw2o3ParGcEmZrEFPr74C1JaLfGHpo3QLQGaYzDUBrfAhzAF4X",
  "key34": "5LVWhuhmz3HkYDQYnFrytYQBeTPwDMJF7n5BPfMedgGCUPyzidsYfY2i5ttNH6qbYHGDSQ6urHsdGfVBfv2QAfHs",
  "key35": "5Xg7ea4cHQuJb241n27RsRFi8TwGTq4RdpgrHhbUSU9fqwCyx5nrQL6KFi73cdP3fxGiGhwNNn7paUkesszoFL3e",
  "key36": "4K4fV8LLkTBotkvdXxjbsGNGBUfmetZYsZiq1Q2hit72ERQb2jPBFa85GvRHBD88gkAyUkZYf9grdP8LW9XR3ak4",
  "key37": "ncRY6po7wQS9frrHzvcksGia1MUbLWL51BpbgwHd16xyvHSVtHHT8qLh4hQN89CnG4d49L6hZ9MzGmGsX28HqMQ",
  "key38": "41XNVyb2A6yEm8sYZXSvkJUuyGJ6DTzwnygSkpXSsdhPnxWwCkGoMHdD6K9Xv4ztEWdAU4JwzhK923VK4LBycibR"
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
