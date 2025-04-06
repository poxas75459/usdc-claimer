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
    "EwhzTybrG2tRKvEzCvNV7aY3mCKfDqDDCCAj6cde8QzHy9h81FSAewXC8C44SrkedverSihxPJ9mSD78xUj3N4G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RBtqgJfNCHDiHnDv6PubSv52cAanAe1GrjJvLLsCd1NE6t4dS8s45hsBA9DZRzQ7fBmr8SupA9e5FVShiho4dT8",
  "key1": "2QRbQqYVWUhsaMBWfiosjAh7a3qYrsHLg1H9rctYw1nKKkhEiAYAKKX4V8wM4H7edSiTPHPFgQD9aXNhaQXzxh3C",
  "key2": "PFUZph13S7B4mBG7ykCsDURkgZoyXViV78JsKHFRcKWjYNbq1t7XCAezErXUhWf8UFonArGJcyyEezsuqnGXJsK",
  "key3": "2JwDw4YMbsFvJo2NQpQM2HNYC7e9Fhh7HGeh2isawjZdzFJsrbktfptWzF3rD8SBTJhmn6Tqk9Pv65cou1msNTKy",
  "key4": "3BMm7rMiLgQ4De9jXT7iK5UZK4vshZNBWfN8fijTX8XNhgnUxC1vfsJkXUaFbNsi3R5q3XsMQp6T9ms3oPRbczb6",
  "key5": "3d3zYZ3qyeaSgM3p9V5eiAVH9578f4iNAhCtWEZ86GCeDx8ER9bNsm2qu6jvkggY1RMUeba1wxqnyk9wTuVqkSxX",
  "key6": "4sBFmC6qMAnQydKShVqS7DZWQCWECgcgsqNT7vH71WrWdWXxrNhMvyotYX4DebF6Ra5PXx3CiuQRKDr5PVEGvtec",
  "key7": "XA6MYhEq1mXBJFaaW13P8UPocaYUky2jaEPy5cwLuN95m2YkayP6E2U38duVTjTjWZs9iYtVJnaQHKAtVqQSZm7",
  "key8": "4SRz8MqmXpJJ2GYFcdz6bhUFsoPXbckgkUPfS6QqGrSkJitSZHqiMKdecmrtZvs9QSeCoiDbWG4vGDrXchBDD47J",
  "key9": "4YYYL9g4G2L7JCE5Q5WniP3PgvUgdtTbCmGSpKHawvSsVJj3Ki44GkhMWuaNS8Wfmc6k8xr4Ay2pTCvKnrczX1hD",
  "key10": "2LVyi3Tr6Qpeois22kcmTU776n8yCxWvveUr1GpAe7N5C5oZ9xPTZy3nYP6BDj2s69ntQhnccFcgf1EbmJnnqz1n",
  "key11": "2HhAKp7iobMDy3mosjpjDWxEyAFrNn5iZLjWqxumMftpgW3TQCD3GNq9ifZ4NZnoWfLeUdJt8nzzd3pGcsHFVEvB",
  "key12": "3fKbWYona59523tiu6j9tzuxC8FQZbU88v699wyBnyA7X2D6fbMjDLAuBH3CJUHJe8MPvyaxG3CZcRbbo13vuwfg",
  "key13": "3y1dLn5ocWhgSDhLBQU5GZwYaL4Gpvzpp9mgcCjbq5P2HWazMNKzUSxuN6b6ep7mjHD57PVQPgDUftnSHXNawzZp",
  "key14": "5wcveGBuGw3SUKVFi5MPPnVJmmv1uuwGwZPu1wfcg74nwfyXQwmdZQLFYKaPUapLJyfKMi1Ncr4BxMNUXW2mJSC",
  "key15": "48trkwp2zouZsZun8nJ8dgim75fjiUW9s8oLmikx6898MdV66r426y67Wr8PnvnMoHFSmMaDxe5thkaBtUkeMfnN",
  "key16": "65J8iHiQowQ8Ymu6E11tFTMfcx1NUrTtmGz1fvQ8FAzpgg7SGfToLXin8AQKZzn7vgPvbqUU915H3eXCtEDEs7Fo",
  "key17": "3RnMVhhShkbMPo889QGVAhHxd8o3LTJYRcNETpcUY3eP2SNdJzVwEJiiNV5nDqzMV3UswxVpdtck1H7VomC3pWeY",
  "key18": "48jwgmPMtZNDhH7tfrw2jMitT1TosGjFBRF344Bb1A4kyZ2hUNpvvX4bWr8KiAKJ8cKEjwSfzc3rQkovsG8oX3Ta",
  "key19": "2AnNGmGmvtDtofekkcmL5zPY7ZkA6jubRuYBt2r26GamBQuegyRzfj5n4UcT8co44B3u3NyHYnzLVWsdNxa5EDc7",
  "key20": "u9AbhAfnagP4eq5rsasgNGufxX8txNxZjQC6sR8EuwRSCHZ5efUteLNWrkN9c371QRPVZgHd2oMTfg8gg3NmRe4",
  "key21": "2L3uz3u8HxxRaKBHqkVLK5KTmReppvfb7GzwZd85brragUT6PNKENU3gmTTsK8BBVdf3zLGG1kH59Q3z2ZddCoF9",
  "key22": "2KuvMgMCUjD7SEYgVbVG4Ue3Q7aHdDrp6eM3FsCQqAroAoteumZVMrexr4AndZGGgYU34igqppVj8rMBhEJVKh1A",
  "key23": "4Zae4gi3YWuG5P7qssEYUFYwBs98WMZbuT1ZbGVPnxVar9AqHdYXzaa9nXgqYeZwZQTFNfFdN4SQStF5BAvfyrFp",
  "key24": "4yEVhxKfDqKuTTF2Xw488oufRX61oJizkwTchsrtxDQbWJtzGyqPjYWDv1ajMt6VNup1X5dR6e5j7dcJ5VPCcgBA",
  "key25": "2TnWeGiybWTbNZ3hvNSvhcuMWu1wpimg4hCefWegMvjV9sw9sqAjUY1HfkmTNM8dw53HhtrHdgH1EboMGFztEtVJ",
  "key26": "22UQc76VnXGWHv4UfG8eexnfrCh91yhioS5vqhCm5DxTM7NbeZpznaVKw9xK9oHRq3Nf6aWryLYwQ39ouFpQd6Ed",
  "key27": "55yxheDEtqmjbN93Ppz5KEp8kVsaU2U941cDgzhn6Nm6cwJCy3iFwmWzEFLPcjNwQSbJjyjTDkvu4vK6KLwN6Hqx",
  "key28": "4nSVBm6FqxH2d6hvuttq8zeBK5XDVNBmNvTrnTk52hizNVfrrmSjDA5ejFUKHadsN6jGprQmwr1fBYKUP6iP9hrV"
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
