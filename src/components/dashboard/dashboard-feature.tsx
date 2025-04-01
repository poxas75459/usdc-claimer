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
    "3GNRxGhFhA1jK7zMSiMAFHjRjquRHcxo4jyRWUWBj4TQWUURPLEgx2WG8P7ibiVxgxQyy4j25RsC4biyXDzGPvAP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SJgkVsLV3GwknRiUnvSFsN4MWM9khxyL5cgZ1PjNH27PSz4FWCiQnM3qhK9UvV1cFS1mUC8sM1JWFBGQwojdTqK",
  "key1": "3ztNqizxQ43Z2nLQs9wX2hFSC7Yan4tohoYEKMXz82FTx8NwZ9BXXhjWa2HprkUjuaKU8mvrwKEdT9M4MqrVPvZc",
  "key2": "2GnTnrEYqG3UWSmEJdEz3fsHtspsmYQf8gmUJxS8HpZTdDhMcrXcM58DMc2nXTgX7TsiLD6x1tYU8ypNzrXRHDDU",
  "key3": "2xNY9BsRXCG5Vuc4fRzqdWgEYZJKarAnJPKdJLmGTkpp22MXpUHUbasMKqHBpauW6waevj3xMRYjWnbNvWuiky1T",
  "key4": "5su2GQTf39gLn5pM1hRXSH3HHDAKh54XVJAKQnUFadtnPjEWBHyqUQkcQqkLxUxJnw3phumhuoppeuTjCAU3ZHuq",
  "key5": "4aHYHG1vf3ZAwNz5JngE7TrarP79nk5XvHv7yiHASzFnmb955uNxVEAN7UpmTWGPDfyqaQyq7TemUD8zDWtEZBGo",
  "key6": "3iE5sf5RNJp1Z2mr9zT5UPfLJdcZsh1hj7UWmYuNGY2cB5Z5kCFvgaAy34NrpGCEvuvt9wA1vmNz52DGn868XBiJ",
  "key7": "5UVYqexWUDCFiKARsm3AxRATXQm5HCWmh1nHhKoeBYhkEcVdKPF5PcuRpDwHZ55jYbPxEApnGa3uRdb2fnLSCwU4",
  "key8": "55W8oRfHNsJAdBqXpQJiscbUUQrJRQawzmLJrqKw8LqeBnRoqoRSmyYsJgCnMNVLiYsK4aP9WPyCaGVWQqHJ5PLB",
  "key9": "3EiGAFgtmF6Fveuz9cso8qxppWwfb46TPzem3KjjEuJ85nqvKgQJ3MknqnfkQSkARbvWsY7mzwV5wWGBqmpJawvp",
  "key10": "42YTkHey2ibPv6fUa5LU4Nrz4xsGm4CNQzEJxG7xyBCvVUZEFoy17VDkvEUJ9ePGvB2Nf1GzRWwUbW9ncjiXEzx5",
  "key11": "3qxiyvnshu65EmyK1vfKN4KabquhBjhtnbDfXDZAcMinGF6EKziK4awAtRr8dAVBkBNhHTqTCgZJJkG8Y1UNzJSW",
  "key12": "5MreNZdSucWFmuU71ELkFd5uf32ioAbVSJ2eXtvpmzXCs6W16dxUpp47V4ZWAR6bw214b413Z9csCKMjz5MuPs65",
  "key13": "2ZTd3w94NRbXpvRRR698TMr5jr2Jd4UQYXg6yJiAxi3swuoSWsF9jR6bR6JqYyjgVfxbYfSTfQr9NpATGFcXA57a",
  "key14": "5qKZpQgq2d5Ettz2W12ELyFbkF95jAWjL4DSZGzn6KS1PqGcfaxmurdhAKDCPSbYtPCfaoDV9v6pVfumRVfdPmhg",
  "key15": "mQj3tJvaGYtqtqfr9VKWLKvshJRXqmvmwcCB7a2NkTN7brz5ipHr5fWLoMunZpfehFaujt8RqnBUqGf4XZ4sUYr",
  "key16": "4W6g4jhrWeTeHU2d3QuTJzM8iciBXqDqyxBHdngeeudappBsKPaZyRv5ujNjfQ7igS9RJtmKz8HcYoLgAwnynRwq",
  "key17": "2A7WiheRYAzddZj2PVMYvYHTWuboE9V3MdGY2HFQuV6gwRnX17eFUshRXrjMF3VihynwQPrSDWSvgZyAB9HxMvnx",
  "key18": "33xuPWbRAvrha66Y8axNxsMgbBSheqQh6PNyHryPqtvRUm4s9pXnntsdxHoY685yMp3DaprdH7QWWFdLTLoMeFwS",
  "key19": "5vWHnEWZ79TsyY8jFKPHYR2VFMSnPbtZhgabVAUY374qbej2vJgjAQCLAizZYRBeFNjmPapPvEYgNiQDdusDAHh5",
  "key20": "4waUGNK7jhVnaq74QLGLwsEMivkyip8K4W7DJkM8kCKLTKSmbCoBytkLZMRnH3i6LTkGfKuKWy7otWtPQG6ZHp5G",
  "key21": "3dAX7rEU7evoiQVnRSPwmm5Bb7oTnBAC7KVrCEbwKBgoEhd3EJevk33JZykRnhdTRJxGcypqhfJpRSKEmX1BvBoS",
  "key22": "2GackRwqXuyR4aE9o3cTcFJ5fXDA5hacZPLGWYErP4FzJdjPaaRMTZ4XsCNocQkKEiMzmT4su5nry8JypMGNxoNQ",
  "key23": "3jfX5vkyh57hovVPUqs36FwsMgCEcRKAgJHs93HFFxe9T9rg3bg953qVREzLT1jEdrCW3BhNwXoRJk6cFbcAkG4g",
  "key24": "fEit71DWDNgRFvCXCjeTBiDKi6ruVpx1ADQvLq8eBsQDJjk3e6LH585nvZfsrYJMKynHG9chXpzQky8hqBBZBA7",
  "key25": "3hDUzhhXt5bU7Xdfq237cKh6mrgHbUp9bzn93CP2rVHGpksvWNin1jzDRdTtRqwtDd8Vor8unit7wWmPW9kVqnkv",
  "key26": "2zTvRrEZmWg2ohwZcSedpVVKFsNxRMZWUjoRkhExFdqVzBcishSDYVEj1UuJDYtteHfbQycNtBkHbtJGmUhMi6Km",
  "key27": "3rbrZT2mnwnag9bWiphZ3MujrbFqihmaEaPN4kyFYyFFrHAJ8po93hczPWyBLbs85tBDgWvUoD6iVsLFHpAY5rie",
  "key28": "22mTj2LNHLRcQnt5mnRFi7rRbE7uwQYkgUXaS2sutwhv9eEutcVj6oavsshYWogC7rL2SpE6JHzXSzXgatuiDCoL",
  "key29": "123wL4Z2QsVgz1EFmiuGsdQZWtKhHmLqhVyPZ3hp35pXbxEysanELPe9JCkjoaYohgiQb4wVKAW8EN6GiwTTA8ND",
  "key30": "2RjakEYzvHWSiKPYP3nqnrt67MKJZLn5KTPcdm1xLPSxTrAZPY84R7df7G7Bz4FHRsgHzXpGfdmh2RKsqcgtXa4K",
  "key31": "3wAgGsnxTg7LsaLVd5229A2Bj3wSBE1xZnzBuhbarHRAsWHtnxspZGSskrZnroWxbLT7DLUCJkuULzrXarWydxn",
  "key32": "eqgbPnuU4Dm5fvKj5or3s8uCwB2UdiyCr8HZK6YnJbd91osv7ajxet2W7SHGhRUjfYfCyeGLB1xaz2S7wH4aJdM",
  "key33": "5SJz3WxLCedvkJfe9pug6ipQiGYufUn8ZwB51897BtVmugGjh8mvGEK1anU2zkrRDebtvtTU5egb2AirHnXw23G5",
  "key34": "2jPycAU5dy38EwsmmC88WxizfDYYUuPXnhXtVDHAGRrnpWEhi1yanXLZJoCY2FgJ6dCdfEoboLY5RZ4dW5aJVCan",
  "key35": "4AjYQGz5ZEnEmmEKn1Y4kv6meMhFDuDrwBX7vowMokA5YPja3NmEGecGZupxCy4RxUw5oc8sXAaWziNhxrw5b2aG",
  "key36": "4damuiuErhAczqbdPH9UGsXYfMXdVrRMeEPS7YXNgR1mj6kz6nbzrDZMi5uabz3A4dyKAr4tuBCXucPScmqRvb2T",
  "key37": "5ja8Ev2ihUEyDWLSLctBELy5dYU9f4c5WLmCgV5ZRWdxgJj4QrpimdCbuAHqtRpb5zwYU38z4Ne23xev9WxGNNEh",
  "key38": "2UvWWdJMAectJ5V8bvoXhvFDrt3aeUXPirzxLZFexy5tnBiGm5RbQQhQnucQcv7qAh5Y5J6XVu3nVLN9UxTmGPxM"
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
