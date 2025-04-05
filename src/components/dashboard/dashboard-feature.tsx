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
    "4dNkgVruJcfV7hRPBGXH2K9z4hLtQNUHvFZBnDEDPmL2b4BANHXGSYbeZLiZPauNat3rctiJKE18J4ixfXJXgCWt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bVRwso2oqNjjjXCkZDRCUUmXNqmC8ssebtGnWSx4MKynThzpHQ3zTBR2rJ7eDRuR7NAwyqnUCHLkmCknFgxfqDT",
  "key1": "vw1d38NLCNSFB34ng6wgYshATtvJL7BUYfnN5ynjuu6fup3xSsnpUGQCKRPuHTkDoMv3r2J3dXWjXK1AcYtgrPd",
  "key2": "3KFNFDmX5kofryh6QnYqGU6DqmJ8M4FQKTbAHvfDhCgHmT8Pv3H66gzEyXNFyk5FDPWiaEZ5G5SQrjgUxpVn8JBj",
  "key3": "JfGKrd7R8sEboF2JJFF18znbshbTipDCCvHwoE9FBab9b92TnbQMWSXQ6qg8drM9vZp3MXNscBiHq5BAUosQyVY",
  "key4": "2yQmK2jmM3RW1B4T5S1Z1CuM2xeBMpv7fFKojsz8efWoHrU9XcaoG4RX982RnYpncs4Ne1TBkVufsCygTX9qp851",
  "key5": "2eLJU4674WAXxcLkLTZ2NrR2fseTufwcHtQfyLjs5yPjdXMnDuZebWZUaT75cKLcUXacbZ7VKQR5aee1ajyFcyWf",
  "key6": "4WKmReUJufizXXiFRD3pwWnTLp3dZRwTXjh89MP96Bwy4GZYCkb72Jbyszu22f3EnMSFBpM2enNPzERsDsuqDz39",
  "key7": "cAqSdgq1bdJSnJNZ1gKTygPBQJjcJtiLAf3XDu2XoYkmgh5XaiyM4kCaDXfWMT4Vo7cEPLCJ5TCYbxqLGBG3339",
  "key8": "3pD7qT3PQDyfUExXYc1xDS8i3xEWudsPdEQrPdWAUqoboFEnohwQWNxyBWdGHuZBnnXfejF2LqLd2trFcSocQS2t",
  "key9": "FAp4BrQ1wkWmCS61T3nZTMLtiiLtjsbnLKdGmCeTa4Ldb8LJnBGdMVRtocpJdAabyqkENSRX1XDaQMGvCs1g3fJ",
  "key10": "3ZGbDwdJCqtX3fGYv1D3WH44K1uGVtcV34jnTTGoRritKgNHV1wyrrvZoR4dJk2L2PSduUqeTcDqZXW6R9VnTnXa",
  "key11": "2vcxU3SpPq2bR4gjhoLzBSgdkiYEDh8XozxfusDBbSJ4RRbJBQ76xA6GLecN2xGurt2bsSEU95MYmpxvQjUXUt1A",
  "key12": "3sgv5cvTKsmebZQ46aokf9wxsYDHeKzAySNeBwNtLtPX8JwWQQijTw7SVfRJL1Hfoe1wJUgHya7YDv9zrahun2AB",
  "key13": "334wCByDf3fDZNPDPhkApPGprJcNZAEXmC9TpzviCsTC7aw2SHAThTk98mnBCm3TjKp6B2PYXriMF8XTqr8Bwmj1",
  "key14": "uM2Umvo4EVKSZLpHoVMG7Rk9TdRzafTMptLmnNthYtEF1u13afRisckhoBRsxWWybQp2KCPsn8L529cP4Xp7qrQ",
  "key15": "4Wpco7t3dxSUUwxoqkHabyAVQ5hCvvzGnfpL38wXeSUQjZjWJX8PtyRKkrwfMW2v1xf1YHhmK9XfR6CqoZn2zYhr",
  "key16": "5u3j6oYUcEX4NZb9b3nSGwyJdgFrAEdBsbZSXcvyXxHxoM8kG5fDpqvP2Cn1Y5iQjHzKPDjY7p2FzmboFZnFyLd4",
  "key17": "54m6VvM4rQ96xSHvpnusbcP6XYUYLg1phajyRDg6ZZsJqE3TiwDfTp1H83nbCNvbmzhy8y8APBLUpKPL71euYVux",
  "key18": "3VgidnvD6GyDgmu3KgSsjz4LibQk9EWg76FcaRFuXAGWqvR1kL6WM469je9cxp75bMLF39sTF5ijXfYxqeHwZvAz",
  "key19": "3BeDnVD6hEuCGEwWnXESHW3AoHFkVvKwfYAfAo4ufJ5GQWEMefDCz7qm8fzRD6LMCZkZ6eNhoR7JbA5eLyokfZum",
  "key20": "2F4RE5uMbEavREVHbDUSJvyTCUjsgrBEo7b5B5dd4jp18htmJrqGLbbYhHGLEWTjjsTK2d48nn5VtbbvB5NFbVR1",
  "key21": "67g85ePv5kdC8F9PvSoa8dquKnKiXraRNRNaBSusBwEmjDGCE1Vi33QGtVAygsAKcu1WRw6j2zCe92MDB7jQdkUj",
  "key22": "yEZhvqF2reFMyVV7hgdiGjp9UZTX9dqM6Nf8LVrESMjSuD1UknW8p6M69a7KwAu2kiVy3CAonSkYBufpAL6cebL",
  "key23": "X9pRyvCN2xEoq6zqSoyKrThP591NFaC75DEVhwnt2HUoYcXr8gPoy2W31R6kXEZvV4TGz83m6nPjFx43H8haDq9",
  "key24": "ZRqh1MUrrkXhejPnALKiTLwoKgP5dTK1nxSi3kqaUAbBeW7ywDUWwgX733bh2pdbEcjpouRXrbhQZ3wKcPpwKvp",
  "key25": "5jEAoJkkfEV176tk4aivNGMgEg95mmZMcDjRcpRGNoticdEi9T2aZAgJYS9DbT2qAXa1XCEWAidxEczV5yK2fuN2",
  "key26": "4RDhFkVLwv8B73RGgx9dXNwzr3Cpv8rvB7ATUtPUydkdyexKN6Sdtg9WmXGbKF9rqi5gY1Rw7PrU81wJyByGx6e1",
  "key27": "67Upw4oYdxyLEtL6uJTNknsnkVvhbdo2uexmtpVSSy7ew2VRB8JCsPBFAFV1eSe9znFccaoE8zUQhQPRXShQAEix",
  "key28": "3sNAP2DYLLRiqwSdiZQ144SLmf17Ro4omRRDFGwHyeko21tJpr5yoHLVZwocadfG1MjXcmijePBgSJGQir8Akz6a",
  "key29": "LTXJHcqv9muTv6dhkBqokLVow5YrYh42gt68YAod91458ue3nxRsUULF9P3GFuM83KcJykaEVr6pFk29ZMAfMqA",
  "key30": "vWYTGpAsT5NyTC4PSR9kV4iVyq6mUVyybRysRaXwDgMF3G2kB8UkxuBmdGBsErbr2JJopMqgbAzdjf9X4SqqQ6Q",
  "key31": "59wZwFXqgjXDybNpSeGjMVrbmJihzsjsDDV8jZQ7LpcgG7EcBVJxd4aK87ZaWDG8vzNjKJpDt3Y2iKd2aDX5z98t",
  "key32": "2DfjqSHd3465pMtAwpbfWfhK3CqiKEq5NaVZky7mphP2pbhn6yLbgbr33HoY9hCyY7xrCQSUMW5ujtkJSUuiiiYF",
  "key33": "4BLRaG7KuWogfuyAAXa9qyvTvMBA1SM3aj59t3R73UBarhAjPoC3DfiXmS8SPzWZ2S15ceA17pgdNLVgo2aTs3dG",
  "key34": "2qTBdxjDWFu9R5StSUvLvEr2TKd22GAVPtqgQGGWCAuQfLgySD5VZqBkXLsvTs5wcRGFzjw2jS5UTaVna8bEK5z7",
  "key35": "AuEeBnF5gx7mAHqA3714z8Yx2dLf1VZhHkvAeRdd5tGhjgJ7wk5mnRQrKSv5Ngmp4fZC6qA7GriZbPQkyn2xA1n",
  "key36": "2K6EPF6ebXKwApV6GA8k3maRDx6t7b3Ht6CkwAnP9gTJNLxb7T5c3Jw1L1ht3adZNkWv3SA9fakcHbQqKR4JZaWd"
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
