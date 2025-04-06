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
    "5L8q1mxXLpNf6SiJwZbL9cMzZ4aymK4r6qgXrK3BjE8ez5ZCLc6HsZvLq8rK2JdBAqSKJWm3Lk7W13VXxApY9QXg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MzyLAWkaoPm4jkvdQVmUn4Df6cifNRjcWXESsVarizrVxW2rBHYgFwvZGsszUVBnERJREqEFVANaVxTFgEgAGDd",
  "key1": "2q5L5ozp6LFvRm1hs3sjhzs9wvhZaMCbZ6mjadF89mBrri8uBTPqEE97a3psTn7DvWKuLiR4LqD6RJ96x1z1gpcy",
  "key2": "3VNv7WQotBhFecabbNpTkhzapeGuSByYo2RmtNmRpNLXSBECCJyq7od3ULb2M2TaoBdUm24d9uFzErHQBN1sbX5S",
  "key3": "2Fp9NZomNe9MFCjDZNJTHLSkrmT5CfSQFUipGK49DnH6rTN297wzpEbW8wkXET6gz2G9u9mWrYHb5ygohKQ4G4FF",
  "key4": "3KBMt6zapZFNF8XD1mtCwcTLobCE24HSq43thV9oPAx7TBZ7uzDeNkcZWJxHYHxeGVLg7xBwdZDcfXQYZivmiENf",
  "key5": "5GbrUWV4ozTk7iFfUMcKniPoZMZw2vHTcpMfUoWnahqhyjr3YSJw7tdLEn9n155Qem3PiiDK65GDX9FALcLPcuxc",
  "key6": "435GeAm2ZtTRqdav1PdBjWAGo6fAdNH7wyYRqhp1puwMzYrbHT74JXQmhpwLRhbY4Y97LG5SwjjwW4H6BGrK3sD5",
  "key7": "5B8HRNLkspz7sSNCPyki8a33Ju99DxhCpH7i2SPVWmE432eFXuD38LibTUP7f7ncLhpuHUxMEJfYC8uPuJ4UwQnR",
  "key8": "2edYuQpweRtXughnsHY2XzJs1DVUeUR7JjLiTWAt3ppPGBsinjDgyxCRHnoX6UgJ8ysqqJNieqMVAEJ4xLBAUhZw",
  "key9": "5Wm9t9K5hGSLx2HNMngqPqQd6WMvDWRy92JxHfJQSsjX6yi9G5H8Q5exVYooYuT5F7Zr8sG7JcP21rVBcBAV8rQ7",
  "key10": "3wTaQbwaDdWH1Ve5M7hutBWzxxbAHgWMSvFkYAfB6kx57q6V4uJvnVXzMpDmHtTdW9BU1QmMmz7eaJFUfpsiCFYU",
  "key11": "2SqrQBBSepLeUFHBzwiAkE6dGMFP9gGKL8oczdJqvVz2CixUuWEm7kzFoTcC19TjimyKSGCNS1vQ1H2ZGaPjyoRJ",
  "key12": "21AWpn3tAeTaiX5xr7YLhviDa8YhJ7vEHyUXPa3SVamxLXV3UgoKLVg2QQ9qtAcDvjfxvtDHa8FLieMGEYGi5vQP",
  "key13": "4iVR6UvYuJLduQ8Nvx16HQM1sSe2Zc6s5idtMMbQvgHZdnoTbpZ6stWMBi1sXYdY8dmW5kcq8CtyzUcntHT6XpaV",
  "key14": "2B1MRb5TEvFgntLVyGsQwHVrmZESChVkUwH68icbqhtMGvQG3A4Y6pBx2HPNkgBzaxSRhMuJHrvNEcMk3SoRAiqD",
  "key15": "62Hdp6xJaa9sVigNpRSpzCbLoj7Lzfj8Q4YuCTQ2kdk5J2JWfehjP9G789Vg49tYt7hJvTxhcu3j1SMADmhkQxBj",
  "key16": "3SacLukJobQbstPePPDeWCuhLuxra3z7RSNK2P6xBAC6FxSym9t1QFSF4J5czBQKbcHWjt8J6eoTsf9UBDYwPqrq",
  "key17": "37euZq8oRxmL217XK63YVt22oNdKa2ZT5yYdRfJWYYPMBVvhj2BA96JWyt538eZ6qQurz5kzCVGvcSeLdWwJV7aC",
  "key18": "2Lq5awSKA81fjevVmVYnoNhrW4U3ZWVDpJwCL55WwbNaeviGq5aHxVBvgfL3GyvPTvpVEpYiCje454QS3Wt3Kzzs",
  "key19": "2oPERXuMZ7mtSs2yNCrjkbCmJqijca79NxdyRiDQw1X9qr2LCvofGZwhJ4bzFV198fiGy2mdRdcYxZJiMWbhnJju",
  "key20": "8bLrwJMBJd7Ck68mY8Bcq3JBt3NQu34phuZz6GJ5BUfBRKexrsGJsXCdK6BJztdrr6YRDn8KrUmkY2eghxoKo8U",
  "key21": "3zubur4vwg7GQeJsNDfgZbKDsMyr9Uomj2BZhDEsPRNGrDLgF4NFvQoNgr1MEay8UEsig2MQphqEz9GxF56UzeZk",
  "key22": "5yeeWEVupynNtuHkHDYC35QwR3z4AgNXxmYCthHb1JinK85DEkNGQZ2TyFWAUmLUsmo31QUCPSpc5giTw5ux59Dx",
  "key23": "4m1Q3oB2DV8NxnT8RvP6VUk1SAa4FTN89E1CJmkMfwMNfVwxunRK1HDYfW2dib8Xzf9e59ui1z1n4wm8zqYG9evm",
  "key24": "2hcnkFPfJ3nMxAxMMYJT5fgUnmiPzNo1c4jDotgPxKF97wAbfUDoervaAeUbCKNqUNiHcznYTukkwXqEpUTR5z7L",
  "key25": "3zfw1J2GXn2bk1yVbqA2U6oUpUfZ7JzMhuRwxj5zwRL8impd3xWcREEi37u3oE8FqUGo21UM6roDu61GpTjeVFub",
  "key26": "2sSZZPhRcKFJw9mumKLnUv2askBKp3pFizF7ag1PiqBoewk9eX27b5iPJiY9ciskaiZqidWwNyYLqMdu8GpZUiCV",
  "key27": "3gRq4DNzQfxfTnk8yN3koQ7HipKBSn5xHTFSEeyYYbZQLkxPfCKLG2MdsRDMkmSvQdcCibQcNSL67Hk8mQjRk9sr",
  "key28": "5EBKKJ1X2XKWqXsLwc5mQR4JzWBFvtdsQijjqHeBJwZoSHKKCnBveZgtpEqwRgNYuXkonutARhpJcGS6ZPETWQr"
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
