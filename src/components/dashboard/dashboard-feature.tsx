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
    "bAQZEXbuyjCBJczUYGvSVCQ8vkyvzXQbb6rXgm7E9Xn81ohNb4khnnB5eBTC7ZGFJrsQTUCCapLs1nvUEELeAha"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42aLqWRQxgAGXdYxzMz3MY3fKzaQjfaBb2dZ7ruFB4p1ut2esA7fW8Wr18xTYYyRucJHJYRFsJ8ip5e8z699sMrz",
  "key1": "c2B7vTTCXwsW6pLmeq1dWgJL5hNJuPREsHKmo1d7QXrPeEfx6v7ibnFfaiK4P8xaWdLtHQ4YtNX55Ene9MhCj2E",
  "key2": "39cELkYGBjbca2acAqNWk5cdC5XqNny7CX4EKHLxiZzHjJgQ5bjfAsBz9csjRmsojvKvsqYe7nPw4ssDx4iY6AC8",
  "key3": "2nSpSsDNhM8PWG3h61cMBLLXxegrgUqTZvPZpwuaJcaMu28JyH95NGmxiYA3qPGtfAKikEXxhFLx4UvH9VyZTHix",
  "key4": "4M3X3pQCwAPZkkA9V5vrGZ7QvMQEjpGCE4FGpB4JmWJLJA3TLak99QfEnYDzbYWoTegbpbdGqJ5wba3MtsmGp1Fu",
  "key5": "3e8D2RkinvrRWe4kS4JW9BARoVPDeuuSVFMWe5y1C3D8ZHfVG3dopFxHRQYUbSvq8pzfhdu3ok6mUBhK2q3SGWuf",
  "key6": "st9YddFdiC4t3zf6Y8qT2qcc4buFKaVidQgPuurwg55YrwG6H6pRJUVnGtK4GajqSSmnifW6a9mR7a5ZmZ7Sojv",
  "key7": "3b5f6rdpt9xjc9FiVjr8qfCUGGSXpBgCLZBM11fpCm7wYEHWpYwY96cc5penV2Gcbc5TvUN9jGh6VsrJQtySDX7T",
  "key8": "5u5iigQsiVy8x25s5eov8V5HMgSDdre8PgSdxwbsa8Q1yhcKrpLpST3W3DxwDhJHe2FEqqHcFZLkew8pU1AFBsxc",
  "key9": "46FMrqUQRMQigSpoXUvTC4ed4daipoH7goSRE8nc3Xiq4i3eRyK66RNQ1hxEvKeza5xkftUeN7mnErN875iUE6FM",
  "key10": "2tCGaofe9EDo6RoYVNDwmdHc2J87NH7mkmvY7UVYvzdopxLuDKuXVWqzQ7kFYA3fsuXCGdE8BdQNk9F4r4KVcjXy",
  "key11": "5MhQkW9VKQYyvL4FVRijkDvXVXoYc8efCQf1BGCj7gQ7wb8ZEESJgusLp4PZimsMthVYaDoAJrAfkzChrUstwosV",
  "key12": "3F4kAvhZRgm5J3dSAc6U1ppGcm6WFpAxoQQmKFagMwZ6s37Amvmti77k7eu7BmZVUtvkSx6Zs7m64WuSLAfTUJkF",
  "key13": "3PH1FCZnniVxo24AoKE49oRd7hhFm4YS4CZem1p6bmyff74TrcYDVF2pXrr478Ksvj4eaJAKr5b1fZehgzY83o3S",
  "key14": "5Jn9dMRL1FDb4v3K9TYB9SRJEVTnbesQSy4JQPpARNBjv1zou12RSiMtbqDe2ZhQRb8xTjpXUGA3M3C3ysEhjvKm",
  "key15": "5Ctg7TJWDuqbk5DtV6Yi2XjRPN9inmH6HZ4hsBxGVYgT3c7HasHiSyenQyn9UpH7Uui8oCqL8sUUzsqUkraaK1J2",
  "key16": "3accQSPAAUVTMpNvGbZ1Fie6ZtPsdQWdzN6eJDTUgUSTdHjSeb3nxHkujeRMikng4wvCSRLCXxsQCifRaQgFR8kt",
  "key17": "dUN7cW48xpUeWrSEsYsXAbJzDvhQ5teapHDUmKVDPM7EAHAyXpbRMqCoDYk2BVbGNQNE7yfydXFfetUzaAMthoQ",
  "key18": "59x9KzKtdHK4yEbm58vckNKHZiuiipBzgBPioCjGCkwJVFxArG76b2TEzctbePQP9zfvG59kr6yzqF322Qe37qzR",
  "key19": "5rGa3fv3xrbqMAkkAJibvAwWvcHEXgWX5appmYUkWQXauvzPJ7KMZi26TcrYuvg39Sv41ej6PmZ9KFQrWjCP6nrX",
  "key20": "JMEatVoHM7waQmRuENfRobQynPXpvd9PmMZrZWhj3HousAAHGjv9Sro9TnrGr165KTLKRZrqwjozSLeLPBQN5rM",
  "key21": "4sT9EkWqy3zzqze3MzSU8rQzVaoMBuxnjuqC3tMgyZujgnQ5sTdSpCUgJHYetkVTFmyz5ubjUk44odxgmMtRXcfe",
  "key22": "4NYpm6B3r2zLqh5fzk9oRhWsUPkNofSQZQEYf7PaQDn4gor9yMwwjxt494DJqCur9rvVuK3qCd29JYkLHdkdkdoW",
  "key23": "arpMYkgMWbLTGZox2CgSUvAsw6SWNSwxM7vw2secRBbTsXVoW3o4UFCtrxqSJn22XdDWyArzMteAJZeTKXpkdjh",
  "key24": "4srhQ5z9dQb4F7zY6SHWWd7Eqizie2qrUZWRWVa2KkEL2hAZiXX2HgQymVfFX4AB2DqgRP8VX63pGREAjfXwBNX8",
  "key25": "4WLr8SWxBTYuopPBT3RyZM51SHAw2Ri8vtjSRH3cL66DFzpJQDN2q2DK4XLYevfpvwkCpcpvWJ1vjd2xEkdLC7VS",
  "key26": "4ZnuXSG3RkUGUZtW6roydwonHyMfypLVESmVzk9SgAewTUL4E13xqoE82dLBM2Cu2vP4JiqudNCSLLu7auRYGjdy",
  "key27": "2TGsg488L5XaTShbE4XJNuRsDwpHqwNBWs3L1jEfA3CXLeNxrt1VYQS9bgdwV7Q3a4ZdRBR7LEAkAkyN9PpHmdkx",
  "key28": "5P1gEQyDEmwaFLzAyS9arKQMswgJyAifmcqeGf7uR4ewPzR8VbrpJGbvL1pSEfC2wYkJ5KhGs3rj8nuM4XT5x94W",
  "key29": "2xh6R9yPj93v5uNq1VQ8YhpnxEbAdX6qwy7g6NmTHr4gHpfzXsbdHbeiY6jGLNUdqgBNsVVaAr9GigmJ8nnknEpf",
  "key30": "9u6Hj3vAwUhQqxzhhX4QDViAgd9f9crhBWkSnEAahWU9VjXAFePuFM2YHVMGKVVc7VxGZnxhu8oZZ6GqQiDiaxS",
  "key31": "EP9oi7i28B83gwqe9rodkXUuxH1mSTFkZfkkWoe94icQgeFav7RtLX3Qev4uuNubEizKTDKB2EZC4BGChYuqEKN",
  "key32": "4Dq42bXNQk6LLRcsPQy5tnhGAm1eEHSEHdogpfapJqGxMQFnZhXhdA67RpEofTXMKYicon2bUZNdod5yNJx96xqH",
  "key33": "28ukhqo9ZyxUbtJCgnSfYs46KupGEZx1aCD9PrJfmJ3uJeVPLUGGxnXFrNa8dvmtfY1V7AiwpwVpVXYAfXtRP6T7",
  "key34": "2KxfCyHBSrz7Ao53pDsoyZyiGPYgGvFLuG9LHs2PL7EKatfKZm4BtmEDDJqVZFYgF2kQxyrLpDjh6DaA3PhXKwr7",
  "key35": "4PTaopNUS2ava8hz9RxjwQfzrg6eHpM5bD6zY4bV9HDq7XTZyoFD5aUvz5fDSLQPcwJzxPT6SxLv7oMGKLGrsUcp",
  "key36": "MqqWL5iXxfawZMB5CHsWJH5VhrYPLY6ThLJGjtk3Bq1szCojVQNoL3zXMJZvPihwYnD9oJ97TdwgwSNTTRBPvdu",
  "key37": "26jCyL3QXUPJeNbe4UkruCGJDXEXYAKF5S4jU9yUmaDRhWXmvyLoMACJxMYVuG1cFwaAMt5SDXYFXwNqcbZKB5fJ",
  "key38": "3u4UekoEkbpybZgeXtB2EPKBwteeMrc6fc7xRA2JqVCdcod1SW1Nvg3R6SSVLwaBv47wyGcCoXJxbvVB2NY9w4V1",
  "key39": "AY3hXSVVr3nb38AUNHc9PxSkzWddeR9ks7v5rLaqs1mEPxs68weyZUD3xLYEXxDyjqHtwhHbD77bqLNmjZP8ubr",
  "key40": "cNLFzauhYagXDmkiiZgGUzmohs9hK7SXyNXPrieRZSo1Pk6KL4Cg2jJBaFYHrskrXRkfWoZanNXe4AZdwLtQHYW",
  "key41": "KwpYAUkGrbSXbWTkdqUnBHJzK8LZuAU4auRDpMpPJNSUUC6TSMHPFbNP4TXB9rYFjoSWh2hDSWtDyv8HErXWhGv",
  "key42": "4tBLxTmuFhF71hrcvpdSU8YAVy8n86nKC5FUmfLDzX1YHqGfHPJ1kPUbcB1YBg7e5QZeVTT6R2xw6z4wPT7qC3TH",
  "key43": "4wrfHKReTMYhVhj48qbhNFZavG9wdkGbWnxxXULSn9HWuYCyTJMLtkX7DTzVek5EQs2c4WZcvd9ej5xnnxZNiR5H"
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
