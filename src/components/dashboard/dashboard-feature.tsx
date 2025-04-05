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
    "4qD91GCnoD49r61STvNiPPfqhCQMj7ZV96Mk6oGpZS87JQRPUZhvg6dSRfoGaR4BqZVFcgoHs48nUZF7idck4aj6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eJwdgorZnNJfyBXAAxekGA1tKmNgBNGxqY6Msxzymc2TkvkD1GL5ZXQsNsAthyoVujkm8KcLjyP4BswBXwjZV51",
  "key1": "3Bsy8SUnCj44RM39TPVgYFEHYhGop1sqKgYMxaryjJra4BsYSLu8MTrdXUXZfbuty1uHLUCdiuVtwzsbxBi8pUCq",
  "key2": "4Hdkg81xp8QBr8uHvBvQE4tVwztVdiwGRz1iQadvaBPjQu8NJiTmTZeQADsMxtAwRVb1JpoJrK8N2eErfi2Q34Cy",
  "key3": "DsV6viNR2tkjkhCFMYbHfigrT6agcXiEtnWVxwkU6bpRdsoK74U3Z1AgCNpSwXAwmDKu1Hfc1TEVfZGMYwz4KWC",
  "key4": "3bGoQ1xutiKczKmA687oVivm5z9XvRKix8JaaQCRMpkRuTtTpzdyog3cojuEEGD9wn33VzTni6WfaKLDd8xtAoxz",
  "key5": "4nvZbf9HvEge5bSviyuvBGn3XzdmG9oinTw1TTMvyaCCjmaQQmHjne93uDccTwtCwedGMvb4ozux9aWZMxeTdLGq",
  "key6": "458M7YtansqoQ265rnxVMaiMeMfmFg7XcJFgxUencB279mNzydwwPmR7tS5evb3GWqww44c63oZ7jD1DKX3H1pnH",
  "key7": "dw8NL4G6mcn3ubcwzi3PHRKw6FZ34NEs7LxgCTF2McbnQeybEJbphyv8AMfQ35xKxKu1cusQ1sicNXprxkQHJhf",
  "key8": "4voU2eWTp4Cd1BVdsYJBycmDrAnV6qnoxq9r6hMKPXmWgMruKy3h9HgQkr7xqj9ZVHqiQ5UyQF1S9JTyv26gXpVo",
  "key9": "yxbgEZBVfsGgAYbRaAL9KVW7nX2Jr5SiHLcbLfKCNchzfyFxasXCtderRtoijjKChWpVf8NKNzAgy7S7dseLaW9",
  "key10": "2mu8ajwHRpdxq1K668RpcwpV2vksbF7xdp7wvorwYRCHqPZRXPzGjNNAQZ5BbHDY6ct8WLshxbg21jCQMoEquGKm",
  "key11": "2Q27RzFWW2MyyrnZ6NcDCFNCQXf5CLVr8w4J7Gh3LJzbWTSf7SdZDhBwZU9Bz7FyULnJjg695hozQkqX4poLpYxm",
  "key12": "3azHS1WW8G7VJyj1G1XEFf6XbSNfk7vfJ1FqkzdNDFWvTboqAdJtTWoG6LDKCRqLvPvWD1aHGhJQV7LUWT34wMya",
  "key13": "54ksqgGnPY2KndxQpTQ3tgkQavvgeQqKj4iAEZdeHHxP95eGefEW3AbRZiS1dKavxrCmHUAxXX9bbZ3MUYLJEhrc",
  "key14": "3em9eEoHr6yR31UGf5JG1gC3QLBkosL15JevGqm5sUvUhkVY68L73Q2wjo7cMQwZFZpAh8cSXMq7Cuby8YDDskHb",
  "key15": "4THPL8ofDCpTayB6ZPBJuWkUoRoxogpA5VLpKPrbMzqUzyPmRgCj6u7E3AfsuDNqVSt6Kz8bvFk9RffKGrnMrqoc",
  "key16": "5EgZPtgjXWiZe3jVUVZqA7hVtfWjiV34k2GbbduP8rc5xpcEgcPDN7rVxpGLPTCDJx3ABVyYg94RKPQs2KtQzBLJ",
  "key17": "tezjUtKxZSTHAWPtS3mD9t8ZsRiVV3WW1wRFxDjJNGeaVqwBPet9CK6jLYnCMBK6XHg3e5TYVCjz4g4MZV9TcEK",
  "key18": "2YwGFdcDGkK8Upn81sWqmRgEkxfPoRqscgYi5FGfSsoDUSoKxFbVVe5WK3RNRcGxe3uuGSQTWkYjj5CSwyzE5db",
  "key19": "369MoJhDDwmJSedtnzTxinyjyuvxP22CQJHXmVXhWe6t6GSBNvtLsRZgu9RpLf5MM6Xau4i2K8ioGQoQKF6ukPoJ",
  "key20": "CvDPdA93QpEAGtZJfRUWpiBQ4zT8AMmEzQY2yKHM9x3cBcmroGKM7ZHQW66xy4ojn8pefc7cNFuwRHCwJr5Kq7e",
  "key21": "2vf2sdPXCyTd5j495KWd2mRsRgrEuYHZiG8mWXv25rA2sYnq3CUNWeBZqmyGDPRGDTN2X5KhXm2H4jqkWDAkXEMn",
  "key22": "23q8MreMN2KrYTU8YfCdj41EoteCL6iCAMVPQ1tNixksSJb1dSTYEcyhWLLM777rjex4EX8WigtsruEgqfyRwcsP",
  "key23": "3LSjirCw4MM9qLbdGkfR89werVttgUTWG8HC94N3c79vzhnvH2GhUMXqBb7McrFwfBf8aKMP4ehybtzV1svvd22S",
  "key24": "2FC4umDTRzvPr8xhEV2k5u9KbyQVUwkSFqASm5zve7zgp86bVV3RBjHH9DNTct9HvgosAmzLFWYoXf9MdMuJ39q9",
  "key25": "1gGCpoCmGZSzs3eBymwsiRZMFZoj5oxwUDbyFaweH1xjnrmoFde8hWp8wWd2C4vQsLVvmAf96KczTx4u6D7qJt",
  "key26": "47Yvr7qVJkdA5CBixTjYCPHd6HAAFpM9H8CRf3Y2TxkjdJNJearzG5x3MvnTxUwiqRStzwYg7hBzSdGh3a4if9hD",
  "key27": "4UVUmdDLL7ouWYbTUj7Z8EgL3F6TajMamESmCAvQgm5WXTpcqYCrQ9VPnX4m8zfNezqcCefoy4tF9mk4ndJHFNwS",
  "key28": "5RpNrvuX8mvi2GzRKipJfdDuTiSnKTiJv5Xtwz7xKpvzVfyKJJctcEAU9GSZBJ5WHhmDiSp1gGEMK85CUtNv6U3U"
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
