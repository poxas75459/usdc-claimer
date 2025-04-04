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
    "5v2cyxRhNYhNDZQ9fZ6tzNUSgCGq4fyZUh8CZrqkFnhsJcRaKKHh3ExjcuD334PQ3er5GGh3SBembdrpfjm6fqdr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AnNUdDSjw2X37om6mW1BVQ3qwihfT9wGYc7kdrMurB26iAGb6ne4nXEQ9PYBcRS85TB2MXSDjDYUrBmesdTpMjV",
  "key1": "2iPhq33QcwsdG1BoScGTKSfERetfkJNrj9WGLvaNAh5nAeH9uVhrAd9PTNYkWwjwpBM7rY4sUKzftMjfVP9gJM7D",
  "key2": "3qrD1NvQJoKc814AS5ycZ4NtFvxnpEJoFM1e64sxbezN6askDQto39kXWvK7TNYsfhXGM6qAuJRVVt9ZKHzpoWAD",
  "key3": "2x1mwm8C56peNB5gfQiRFzrEBRQDMofCvMsvcVi7ShdX3t4CEd2GUuXEXqzRrUcmG9MQG88PTWefQZPY55xnX3cq",
  "key4": "656Lo9C9nXoZSb3Yf52ZwgYpTyHW54dw19NguvyeS2DZhuPB5sZARDtvQzem36vmbEBbzCwwGPzhRdUyfaCQuRrq",
  "key5": "4RHjdZFooneBzx7X4cKHzhQySEbfmFUMwPiXazcCsuePXfbUPYVpgHnTVmd3fJy2P24B9WcU6bGfpucKQKN9FG25",
  "key6": "32A6onyjaoR5Ax5dJQCsLJoLAvCVKr4egpDm8qqskLkoLtscTbErynKTpu38aY8nRHkytpT1M5KNjAscgrkpqJQW",
  "key7": "3MbxwvLxMTZSq1hXaNiAKw3vj1UTo6V5DVsg3f2G6EYzby3qkh1VVaLED7CnyPcRmmfCa1c12YGbtNetFCjiHtGX",
  "key8": "3KpTtz9HqQtifLHgrUJRq3dHxVPxt2hkB36gUVz42fxnw1NVcxekv28MhKSBisPJo12uWXkb4G9ifUSrgRswhXSb",
  "key9": "4Ygw71mAGMRkML7bNK7o9pAEQEVmfU4XFc31AmW6eA3RSkrvoiGcgoQuFGqaNuF6isgJwsDELgyo1xMpCJKMumTF",
  "key10": "3MKXSwawtW2rQKfRspXgbYtBGpbpWwSYb7DFsu4LcZ1ktcxumunqDMS2RexCv4mdeKX3fTJDyWM5qPZaW9eHLxtn",
  "key11": "3VDnx1oJGfopy3iyo99XvuAKiBYeLhQem9RrdGwhdJNUCztVDsqDnYbKYdAHV1tFJ4Jrnwn6M2PRFmyGj7kijX5K",
  "key12": "2gjtT414Ba5ThQDbyRDUXUAiu9S2iXWGaGjmanJSedNerivk7wWnVbzPcfMiEwGq2zd3T9ccabwgBECgxNo4yfAF",
  "key13": "shsftAXj8drkQPdJzZiiMB6FqFa5L5tgf2JLDG7RBsR1eQHV636RQWyZkB8Bjd51EEqUwPeWF9SVPRmQ7dKkneU",
  "key14": "5VQzdnnw7QgSAzS3awkUckUE1BZ61neu6z4uUv1CC5ixdMJyQ5MqkRRTAxGfAuDr23ow9kYg2ZXSmpF4NQLGVXNR",
  "key15": "26sm2btS6tNSSKBYs2wALikKEXw958JxtRHvWhfwR6zqi6k4LYayWmfiwNBm7aDJ6NSGu5BW8iqHv882WkiTCuhK",
  "key16": "424E9jnYaHjoZiam6KXhWQ2sQqYh981Dyz3w9qi3HDctcC8GZ5B3nY7ahtyYjedZF6cA3s2UtuR8Vasvb9h2WiJf",
  "key17": "3RjpwPwdnRfn6T2mzAKbiXpx9Ph9bzwTMTy7uy4vcdcCgo2XUbcpmegsHvk2fkFeukAomATECoyjST3BC6UpBfzo",
  "key18": "66nhCoUZNQpE5SZoqPjETPwLDRspr3PexcphzZVT7qNw5LHBnrFSixbftZeprhbngCgCMWBqwqfuGWqScVUZqcsi",
  "key19": "2XSoYeebxChPoFESX9bsDmiX7bnsUmpeXaww37M5UZZLdcFEqGK87DZsQ5eJhtE9Rgk8oKcEzkEDZX9pdDoeNctY",
  "key20": "5K6PM9Cc4x7gqBnUfyApThppqUvXNofJEP38nP62SpDqpLDqiaxwuE2TMs6oB1PM4k1fs5Q5wHCuBujUgUvVLxMG",
  "key21": "5R5g3j78rDX4163owLqNQ7uDf8KMMm965GB7RQrV6pvaieddE2YC84X13YytHyCeCc9woZPRX39o3n64wo2xLndH",
  "key22": "5cwfZnumw8e2oD8orFBg3QCTNgx7a4Z5eJNt24RNV1vziiUfpRZDZASf2Qv77DL2s1NvryDcS98m3cJCyrchQzNp",
  "key23": "4jfWyevTTnaNdVYVYbaFVNwC2pC2one5CZrFdAhfnhZbApinvKfHrRhbVwDFmyK4KYEgMxC27d5BYHdv6Jj7cB4L",
  "key24": "5uz5zHRw8FFRw9bHZ1PSdfWYoXMjX3vxUVw4p1eiE5HEBwf9cJU6KX7acWKdPsEbyQ3AA68XmtXJAfzinBGKCnir",
  "key25": "2wEsJ5L94iUYDU72LidUJ7cBwY9e4BFV6dveaqjkGV6SgXULGfJTXDuLgX6WK5Jo2uet1bDuo3SD5MqT1vgpZxd8",
  "key26": "jf5SKoavx2DMfFTaXScZMmbLLqjxBQ8MK65zqjAXo1JDKKcRVneEztkie21u2Dwn8Lx21jVHHdZm1GrXb1f6BGx",
  "key27": "2Lh8FrpJ78JocfbWKzkCukoYShBfYPHs93WeoAeoJzRTphs6F6VoQhaNqLtTB3Qd4ZGFvGGgUAxzmv4dhRENwXM1"
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
