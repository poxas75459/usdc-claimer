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
    "547AtnGNiUgjKfngBqLH4rQgmw2hiHZGK55wesFgtESqLoeN9cvXUBJCYP4D8oHvBC9NJPDvXz63enAEYNnermgh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iadhRdsS5pfx4B9xqhHjLBHPWU6xccn77foXsigKCcdKyTNxsEM17dD2udAcuSja1ZsxXDDa5ZTpqvhWz36TFeA",
  "key1": "2Yiwj35K5VQ6HjTdKQHt3uDqsfdZQzAysPiRLebXBvcs4huCjMyvj3H1k4GdbqYHKKih8vVoFcdoBYZ9dANVWpx5",
  "key2": "5y28ZwMZBzNTtecUiMafSwvE588EetCAFBUeTUUoRfRb3YGAmVY1MVt2GgN2RV4HKifk5pjYA6nGMBrpLbFhSWgn",
  "key3": "2J8utzGfazYAmK2Ejyoi9U39Tr969JJMLVeQh9s2HN3D6MyN7VPb4WMLwPpHwYCk2Ny71gaggarYGm4fEuk7QPuJ",
  "key4": "3wX7r5WS3TxVcLEzRmf9bUrzBoqFMQpVz3vK5GJKjAnWGJ2uztojxwTz4MZV6ZVcJHvtpokUNKCEcmPK68Hv6XUV",
  "key5": "45rtNFP3JuRaXvYZFov3vZSPcJTGRE2jRs5b1MkbQbbQ1zADemnP2zRJQxTSt5wDfATVe7FqUEqB6CkuDjZNv5b7",
  "key6": "3aPBQLtNw1G8xdaBdeJ1CroDXZ8pwGGXFAo3gFXqTsCeD2VxbyP76sj17s3GFT2VkHxHCXZdUpztPb3v8j9DwFT7",
  "key7": "4pYg2UL99Z5JQ9NjEDqESwREezKQFAYtkiWaMNNKdJupNj4p2ibS5DarPB2GpXeuyax5PQPk6iLbEZk8547dYc6R",
  "key8": "gsWK6Rm6cFV8jvuCtm4jGvh5j1htT2VEuhyrWkNB58tAkcXMsryogC51y2FF8ACKPsETcL4HSz6NWEbMmH5ssSu",
  "key9": "2xo3fbznsVrnUdNkCcpx646MxVbC1kvXv5c6SHXj3NXNwGYbqR8rufH8atYjzZ7XbzKzT7WZ7cz2dZMAYpVRDYcv",
  "key10": "3FGdfxwtw7BBLX83czTAxhYYNqvcEix4cKmaGYhxfxqoQHRwB9oRqz1UzEfK8qhuNtv9p1BTSPUzRu7edk5e8Yfp",
  "key11": "4r6utgGCFvs9E6sB1p5YtvibPazxGip7vxpFrzhw3hJqFB19unJZLHeckkSd72hGFVXJcuwPmCdPV9T3WoajeEKo",
  "key12": "2pjUwahFMEBWCwJHec5bukFWTmChNd5vNXJrtpF6Gncmd7i54CuYHexC3c2Yqu7pM5DuWwBnSBTFigKLq7KpZuak",
  "key13": "3NPqLdHZ1EgTBHM5FNVrCvduuWYTief9hTWh5YQhQ4KJs9q84GHSYmf5ZWDyRKMRC8bu4WabAwGKd7eFE9vUSwnY",
  "key14": "3wDzzyz84bZvdpxgWrqE7R33SotfSLwVhnmgEkS3uXTwa19EfH5MQN1ZypwX767Yxqw55qrfsiV6u5CPgJUptQbj",
  "key15": "5m4a4YVhHNsNi6BpnVq3cARU9SdxxTZvQJfZXvU2kfpbzzoVrxK1UG6rCdTAjRsLjxjzHWJtUNegZQuuE1ussSbh",
  "key16": "2S9jbPewnE4xpx8e85GnCv6kCtYFNCq4gFcuiieXRUVDvntTNm1rxHbsRFQPHEnG9sLVmKHQcCGouZjgRFwsUPLT",
  "key17": "58bEX58UTDHdWXgL5uR9psEw4GuCPkqLH5gGDbw4BdZ8PyPK8n41ZR8gfHWgwfQRpqdqvZqDz1Wd5ZocFnp8gftD",
  "key18": "37Ez1gPbnDhaEyiK7ah323BuUQcvzB3wtfV26LpGK7qEyADN4Rhr3qp9yYdCwaNncV1QvFXZvFAEhVWaMRVQrsxF",
  "key19": "49LU9XuK44ZWBjk9nsRbMDTgFScv8tqJRtZeQ5ag3ztnBhAU9VxP6mFfGbsUCHtg7Ds8W8oJcoj1ygh5BaQnRwft",
  "key20": "3n8aDo9PbfosEhE9JAt3mXeKzGVWqu3sBUotneY7GTN99782aXRsMVadsr8qyA7vn9mczRsLSXXV7JtzjFiDAgeh",
  "key21": "2W4mSHMyiHk31wUARJ4HhanF4fr3FbFX9n87KA9FSQQVcxC2pEqRZUpxLDiBDUEKJbZyvC6wj31CwBHZ6Svo35g8",
  "key22": "2CodC52vqxzUZK6Ufcayu1nwehNzTScDZc18v3XDP6g7TMe6AT9hboxM8uSxauwKtCQ95rxMhRxZKxeKgj1yXWBY",
  "key23": "wS11AK2afq3rjeVn5BgZUTZ4X8yoKgkGGTCaDcYc89k14EYbEBLC99hk9jgxaF1TMkSYHFB774AjQ4NUDheBDcC",
  "key24": "2r9F3Z3MFJ3qU9pL3eda6sYpppfY2W4g8o2c6ze6Ek53BnXforhdu1LAnHBwuafaf7TyGPtDuARGWWRFPTBK6Ukd",
  "key25": "FBLCSGHgBcWtyCC52REjh6GEiNG66a9ohUhCkCbkdA1aULrUhEb5p5smPsmYnzpLkGSfnF3rVPtWZNTQbRx1bq2",
  "key26": "61KDStHDWDv72M3DjJehtpjKz1q376BWYWgVdTUbMqmTqKJvW39kjt1WfNqzvvGYhD6SoDWTtgQmZDKX5EbCipFg",
  "key27": "3hXbxPfYubrHjK8oGP4JUp6QhABJtSXUrYtNnwqdUT4K9hJkpDxwDWBDm6q5zqnqBrViK2P3RgLSGDFZS9KMDoVX",
  "key28": "35jV9jyXMn2GPtzZhT7V92wBqGgRHwLJycAgDBHNKjs2h9iGPpJ7hedSVYkhgeQbxytdhuT255KvoSkEhSAdXVMW",
  "key29": "xNJ7MW3XSg6ByVZjyxYNGz1e2hc1e893pMvXGsWbEs9PF8z1mBM7XY3988UHdNejZB7VNA7HpJu5ntVRVytXGpP",
  "key30": "5hZgmAAxzy6Y2QW3NpxhEYhCztHZWuQBRVKLoYbdRwqiCKNb3oycoPShUeWqUUX9uQX1fnZM2Hydg4jBEaCnmr6j",
  "key31": "2boXZYJKLPUEY8jm4rqiosjfYF388CGHfhfKEP8SXa4AGND1J5s7vBXkiYP7eC63VnTy28Bod9gg5WyJWXMJD8DW"
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
