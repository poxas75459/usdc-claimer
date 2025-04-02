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
    "4hra9tCeMk3D1CuofgeaUmVKQ9wZHNLBLV2CZF93fTSvH5cEdipHpPBHsffYs9jEj1VcBojbwoNWpYFjyBDPttrA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gSAzLFSerHxtnozv4gRu2aajQThpheVRN2faNNnL8Ujg1vycp2E8kP7Ak9QFy3DVSHgvYZCviFAyU2fBCAWNHue",
  "key1": "5qG6p3J5LcoVtMpfnVj3vhMvybbMPYjyZ6J6eMrW5tAQoBW6rCYMdBrnRv1Z3rjm7zFf6vb2jeE9SueqPaB4XuuL",
  "key2": "4ACotxz599VXQgfKDaaKNoSNq6b8EkUYBGh4i61NYX6sKRk66fouN6ZVyazAWFWMy4JXmQdEyg58xc9TAACfQbQP",
  "key3": "27bnXuVteRTmzR9E3mxdEWqfgXubxapvbGrsSb9vsMx18Vd5yy4aRxTXNFjEY9L64cHZJcoNeFF7Kv6z86e79hwo",
  "key4": "4JDy5VkSfyqMQaQrrCmpi8ccKzYF4VAWBeFscBy2uQygwv1dB6UbPXinppurBDdv3qvoqei3AWJrtehYzA4fUM7e",
  "key5": "Jq9mF6Ctnijeb9LMawHyfsJRhW9qyknJLi4xaDVeP2sAizwtKLrEK1utQ9VRRmRiidKXkU5sAjbwJYxtSq3mVCh",
  "key6": "fkcYaigmNETpjbojtFRKkD2p4w8QHRapZ4oMy66SnfFWqcggKcjd4ws8rLNNnojwtzFEKrTETHHjarbN5LPzV8R",
  "key7": "5codzgvKhKfHat1vAcnkWV6DrLJwKLK6QBVKMvdoz81Kn7WWzKxEQfDco6few9tFvwoc51uqVTsxVLiYr8j5bZ8i",
  "key8": "3u55Qo91pxKpkik7QkdU8CLtXueL6MZW9WFizg2ZkhNPTc6yRsMKVSqBoAdVSX9vekUcBrtLK74BU7xjABeoJgpb",
  "key9": "4rX5UCNr2cifsoNLSpD4phDk2qgo2CUqfYsaMnPJYKu7ySdc1DSYYuzZeJ61Xyzxr9MGDdeW7QtAhMnBbbzzezsg",
  "key10": "2QbNpMJFRnUGXNEqXe6EWXjZ3AZ665SCs1soDfdbFMrRbscTyK69BDQBLnK3JH6RzKDJuPD4wWd7y6ftvVuqhqrr",
  "key11": "2JwjKy2t685dB3rYY1oPQ4Pox5KDuYyiLpJXFFk3q14kHZstjswQnUJ1RXjjekqaoLk6qY2BXELDM2583C3bwf99",
  "key12": "2bbV4xJBxXGa3bVtSH7cAwfpsc1k5eMVqsYnSr6DtyLVVGCeLP6iDnHkLPKy4y6DeSaBW4KetWqSeHA6U1bbeJ3W",
  "key13": "4FdZ748AaoFGBSV8KbSMpKq5tb5zfEYWQNXTNgEs3VhSH9xzmjJXpPbPeTNtrRAmj87xqVeqUMkrT5sohrsT5oj5",
  "key14": "5xPegAJLCw4WUE3W1qDpjcRbyUneQ3MtWvPVy2RbioVhiKv9ZCbrTPWfx9QHBXFqU7MuHfp56wGAG6C54TGsUYwj",
  "key15": "4JdEquEwNeg7SvM6ZvauyKVGzVUmdQVBRdK9mhHhTc9XRr7VFQvtT9QTCnz8UoU1zsq3B21CvdjwsGrjq2iLXZFc",
  "key16": "3hr684oEoqBrFBAkTe392VbtubPwEqiifPbseVLxdf1fZ7QgTrWJPmBnNPTpT7KhzM2LWsytmmdxg3zfjVzbWEmE",
  "key17": "57VLe2eon6U2JJM32jJDgsRzwWNVvXviwqnM55uhzepwYKeWWisuGMzDpVgTrwNP4hJo4McyzNTPTiEsgen2rNTc",
  "key18": "5qCFaVvg71e4A6NYUQo6N49GjTPzcEuyRBsCM9sN4bzpRVCAo5quSrqx4JVz6DiT8T73y42JR7U3ccXEqck9vLLb",
  "key19": "y5vVTS3bvddMNZZ9BETk9ECo2RTHJLWcbiU5WUw4NPNuxid3mWXgHCL4kqtEFAq7yKBPQRJLiYSxT9xcj2BxGJJ",
  "key20": "39N1qnEEKAw4QNKC7rEBvGHiPEPYtYwn9GSaEd38pDQqSnX9XBkzD64jGPWA75qbR2paas4sPL85TS5sfUPxZDiy",
  "key21": "x7ZqAkksMhVdezhMz9pQ3yyWh3NMpJ7JyyKnJNuJn5hw4gvmcojAr7zFMxUvDiKpBhZop25FCeotaPSR7AL2DdK",
  "key22": "63JTDTcB4DxGyPVWGyYc83J22sMf1E5DvRkaUCgdLTDYiUA3CyhTrCUJTLjXSLPAW125mJQfoBfRUKdBzzdPVL5G",
  "key23": "ch2A13CkCdSF8gA3nku5q94avKb6wbTD8pudQr8A6gqftrpVhYSgM8E9qYQs1ebdZE4f1crgNgQ6jGMQbUPQUZ6",
  "key24": "3m387fvEU8e3fTooeF26wjL6ruBz6uXKycFVNHkT7NcbtYtixBGLv8ZpRNETcTKM5zcqfbtN9SnAVFWxVaspsLko",
  "key25": "5LQWvt8hY7b5BF2NcvwKQ7fuuUWG8HrMaR1WfR59ZpTJgoeT13riPFsJhqhfMp8P4qv4kM6ywY56HiNHxnetnJns",
  "key26": "2wi57kTcVYao6tZRsMUfgpnLLiKjHpmxJ2aju5d69cxmTqDwdAqpKRVTo6h2ouDLWur9N7bEsfUboxzPF4a6maxi",
  "key27": "29iRfZG61sJsbMszGPKEpG4ViF7KbRQmNPh7Lr8eQkQjDFAfwkAymSY4RWufAUFpAUqykP4y7JFu697W9T6Ku28Q"
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
