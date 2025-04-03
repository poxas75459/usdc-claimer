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
    "4Srbveno7b9BKcL5AMc1WBcPP9rLzRapXstsE4hAaabpvQgBndfxMozJ4czW7357Uv6FnNHcd3ZR3GjSJuC1c9mh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AiRWuDstLyLNEce6W47g641TcL6R6CPwZ2bRMSdnHrYfCVRee98HNPojG1tQfrDT1MT94HpfKhKk1qVYs4zKda8",
  "key1": "4AXwZTFmNJkYCBEVeteucVBCkeA6u7BfQHqfncTYeVtjBvFwcrnQHcxAiCvkFBsGQyXYPFdbQiveuwK2vEJLwusd",
  "key2": "3vtWUiugLcxkDpZLUpGdMtp1VwRzYxBAgLfp9xP9dSQL4hSQA3SizUhhXsoniutFwjtoHy2X2LxLzBQPjrRhBj7W",
  "key3": "644xYKS1ygtzQp9k7MSmakYYNgYgyNY5K4tBxr97AxSdhK3XTjn65NwofGyHG24Z6cYFXvu5se9wZkUmKTrzXFbB",
  "key4": "LXEFvEG8do8EJ85dbYJXGEtaif59wLiw3q4F4AG4qgUzjJyw4KHnkucND8HPrtmeFUvBGn2BKbrEUJvtdB8deXn",
  "key5": "5kY53RMU1ux5o3w2X355uWzW8jmmwXZDDCLTyKf8yx7mVy4Qrufu4jMrnQ6CnSLZv5SWnt1wbYN5fEo45wT38zsu",
  "key6": "4wpPVZNY1i1pQmswR12tNrQRz4BipTQ3Q97mvKjyFvqgh4QQqduXaiCLcEVMVuTSHDnwkXfEjirbNxENQAZGMgHG",
  "key7": "5cAaHzELiNpmet5Jv4XfymgmXZ8hE1fQArx4gwnDLsgJHYGXzHdaBN2dmK7QBRmsJ3QBo7AePXQLVVqDVPhHoJUY",
  "key8": "fVanHMPfNrUoHJxU6up3dCowTE5PguNFmzdmAXuASsJxePdERMnAGtVVkfiEzxBwYvDdMbqguyD3WARrk4tzPqx",
  "key9": "5U5CzaXZRnZgz3hLBckfgG9AxhEsFhCfYPPtb5Zr4dPDUGKkgzmPHBh8ENEV7e6qtrjM2QvLCgRYTvhtrbVHcD8d",
  "key10": "42kyP1XEc8cYwq65jfxo8rimAt9dexmrzxWLLd89HtnUdB9hSLDK6hom6fsnVfKNQN8YPR8XDgWnuyoNdA1Ws3sL",
  "key11": "2Fe4AdXtFMNtT8VdzbQVwf7ZStYo2axUoxT4aWfWLR5izGPjkXcAZhQNGFJNMsmnEnMXk2AimoBFVrmvp8LuC9bu",
  "key12": "2SZNy3B8ezmb5JuAZGQ1bYGvZeFaa3A9zE2XcZup8DauAfWRC14GuyjkipwsVfVEkjd7DAiNHUNQH2kRURDtfY61",
  "key13": "3ky6iCBr5jY9SQdKzczeNh8HC3vmRXiEzjLY4EqpMxEuZzZ2ygUnjAtVwdW5uXcRMhkiBxrtpDsHYMzw47QehHZ9",
  "key14": "2b94Mr8yYcQpbpaDXrBXKUrvv4Dw3GiVWJdtLUUan1DeqSnFe4mk8CZLmoJWBfCGNcFJH69SiEiiZKekViRoiXfW",
  "key15": "4YePEEHwgvamFJBSiU9uMp7VUpR6Mav4umgXKrtuiBFE4FM1zMjv3uxRHueBYu9g9PBpw32oqjUHUUPGVtBhfyEZ",
  "key16": "5K5V7bcZsV4STkvdBVYSWXC58yLBw4dvGDtgTDnbZZmbP8nWhXi5PFSgsTcBUaWc69Kj56RGKKTh9YBDZ9X7breA",
  "key17": "3vHwHAubRsFtZLxbWWLiqcHpVPw9nyvWBKH1fEBm6WcStPBZnvE3Nrmm2p7KuRFzb1sAVCWusJ4kZxW4kJxSGCL1",
  "key18": "5TJUPxhgF4GKmgpMEw6MNxNSwwqov2LctzLX6n4CxRHo2R6dYSJWNmtuBu4HV9wo3s2Ayzt6ZYivJmKHa1iDm77T",
  "key19": "2QhhBzVfqpsHAY63zUJbFDgQQsiQQArcKsEEGVqEW5krTs8GbRPgHPNDKh3YKDhXtWWDdzX9cNc9qc2GkH64USoU",
  "key20": "PKciLN85oCrnWUL7zL4z2YSWSnNwkPtV7wXbWoZSrspDw38JoKsQNe5UqHXKzGERKaQf9fzWu4HhJJ4wbJdhPQq",
  "key21": "5oM5niTyXXgrN49LsPVVL7SRgJwnbcWJtobLiGjyQMkX9fATTLjGutLd5P2VhgSh6UNH1LY9MV62GuyvS2PpUffj",
  "key22": "4jcMQhMLVbPS3EvkT9rxtgUQ8zPNBGKgSZyGkVQj3DHEe7rEzuBGJGVzzzCRWzHhwQ7Dws5owdkZUrMRQiP4ktNo",
  "key23": "3WwrhYR68TzA6dp2cpbU5M8AvoyCZFsXUmfUu7wYfeSuf2y4AX7932enutrKqnPeU25mWvxY55EBbXPyU7NpMqVU",
  "key24": "R9etpefr4gyDdp3HPnYGfamH6A9LwEworU4r2ToVPvGLR3jThSdu8u2Vpxpzcs9V5QCssD9A19DaBiDwMhwiAS4",
  "key25": "5B52oqfRhrspMpaAQCV9koBfZz2V3V5q5f2CnQyqL5E2Vq53hQwattyMwiRFEgGswgKhuPYvxNotc2PVaXNF3P86",
  "key26": "2BDcSVURR9mck9jczF1p2qu6HX4qdzhyoYe2cD3fE4ujt9UAxHEu7Loamd8F1syAxAMYjWSnVKkLwPW9ioXcSEev",
  "key27": "4Y2HzbKnJoXn5J8pYMzCWUyGDeyDKsP9m47tZf84UzYnvQuMSGQ984kavrbzZgWwYZjHzKVe7WMFTX59KxyPyRVs",
  "key28": "3st9cSdQPKm8kzMjgc86u9Gs4KqqhNngFWd64oRsYLUhyQ8MgUNqG8o7i2FGnguoZpdf4TUWV2UV9WhPSNcaVTeU",
  "key29": "2yUcoLRzFX7jFvfTCtWtb7eZecDP9zSierziPkLMbaWrMKcaLfEpHzVDXJyfcCznyBnytmXtCBsKHB3DWiseYCZS"
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
