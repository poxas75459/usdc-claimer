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
    "2jbaGicgNWEzgTYfpvYNMGXhTLcM5SwySoJTpZrspBtwjnQR2ooZbAhuPt7ZgBdkqnxsw3oD2kFV9Y9rEk7uHX8L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JvCzeMDpNm4Mq2oSgeaQFbyccZbCgfEBZZ1T17MmLVpHCwfDxPnS4HduoJr8UvwngG88NfvayQv3G1HxZebKS9a",
  "key1": "3PF3eiR7mVvQjW1d2zJT57WnKQp8DyVFWLvzbuMBWzApUG6GwbZjAbTd5U4K84DHg1AF7zURC9K2L3p2im2iYyeP",
  "key2": "5MwYVTSJK1K5figaduextcpyubiDpP28Ek9yCokjvqdAB3xGHZK255DXGWu7t77Vput1iAnbhVo4F2GMSJ6rF7F5",
  "key3": "tyujAhdh2Zo2JrkBRXezbiUvuwaQV8s24yQScJyFL4NLFVsAXawm752efQXNwB8u3dncLqQYVQiSCW8HvrbFmNT",
  "key4": "3CZyhFppRq4Y7BjHZkDtXeoKvNRRTaHpU1AriYzbCWBvoFgbBZmq9NTMZbtR9xV9B6BsTQsBeinVx44UVFFzpcJ5",
  "key5": "5C3zMutJDs1oTCXFQLcL2ZeXNGFte6LcnBJWXJngMPxN4iHDbWzhCABNBWUckoP5LSdzMmBfs3jY8P5rnkqwAUYj",
  "key6": "2gDoJmZTV3WgNPgtrVA8vzBdKaxYowih2VpgEwH9yYmFc5sNP2q1VtMbrh3Yv285WW6bPzG4BXysYH2GRW5Fogee",
  "key7": "57JnBrSQFHdKosUxL4AHYUKUUCApKMYHKT858ruYKGM7hmujrDiJvzsHaE9YcD4hfunrmsqHZQfQYLmvbVTJ6XaN",
  "key8": "fVS5K2MMcQcVZ2e7J87pUibp3uFuDM9Lb3aBmTvPpw8S6V4gnbax7oXP74YRBy8BzKoJGRxqqkBoe8XrG5Ppitd",
  "key9": "3srx8cEP4Rpv9FeLE1WDTeGhPhGYouoW7dwRP1yPzbRCU9nwtuHr3MhJcnTwQYJ8NHXWxQfixjAU5WebjhxRZbiJ",
  "key10": "5Xnb97DxgrZNHeg61WrCQfXzUEsmTTLxTFK78QBgLd6GcWwMuxQmCBUaFK6kFWHSqfTpxzz3ksjo891VGWE5LQs6",
  "key11": "3WaumbrATGY2LJX53TTUPwap1rFU6ZHSiAGcWQs5kNfeJ4NppMtQDoBtyNXT78eAAzoFGZVqzcwFeg1QAK3sBhaz",
  "key12": "5gpSjtHjCvCPaSBxgZpS8B3i5GbTpiB7Ynju8hFjG6Ut9t7M39FbshejGqQd2MmhWf239NcwDzgBCY5p2AV4FsU1",
  "key13": "4Z91an5yYvddgKVqJ8dGUQAsEXqKq891HjAPnDg6Xw4CSPeiisnSWx1pRY2bmoMn8RoCjcnm1oSYpCyg7C54dBe4",
  "key14": "5HYRcixeDcwVM8Sn5VhsZvouCPf8PRNaypBD5PZG3da6TARWuuShXsKBsifRGxsb2mCPB9xJohEBizWE8a5qiquK",
  "key15": "5BsrxdsE6MZezvuiibfQgS8kFqYqvJTKskw4cD7bWcNf3kBsmcrk5zUakkoYg6iDkAJJBBg569LfwC4oZUBm2tCC",
  "key16": "4GAVnegvS5p5H31j6ZgugKMJLjpDXqSGVVBhEvCiGro1fcZsjxGKfNxKnSvXi6t35xv8QujB7EuPkooXFgszRSTV",
  "key17": "4fP68KySnWcET1KAxubJCUDHT19aMKuHgrE7h5f21umEmNCLNzNPbqBjzsZ2hGnc4eY9uF8jsJzws7NoXLm5r36D",
  "key18": "3SEx3UsPyyqRTWygVxA6rubEKBJ8ynewSpHZ2KpVzuCV2X8J7uqHNeV8MZ5L2e7eJKh6Y9ZNnsodT7WmD8cvuDeW",
  "key19": "vpD9CrG1VHzq4rceoPWgcbpEYLYVUJhMq6qYZP8cp8wbMfyjBzNQBYhMm4zqMSSZGiZdPrr1sM9cxKrDL2sbqt2",
  "key20": "5RyW29dFDGQLsXxdEmkCGu8JerVX3uUPDfxXo5mscJ86W2ZpdLByZX156twQE2ENePjw9zo66CYFetxAbXsEAAyW",
  "key21": "4FPQt3mbgixZojQLXfyuEMrsJLybUm2BRD86tzk9MJK2DJ5kZEZHXJXjrdpVoFHDD7JQPZz7KbQSF1tbrVkVicUJ",
  "key22": "47Ccru8NoyHE6G7ZbiGMqiaPo7j1fy4U8UPaSm9q1dyqX1KctwiPrty1BwE7zVyvufuuX8AJ6prf1spj3d7FfEjA",
  "key23": "4UJSkz9q57bzKSmCwEnBNpjbY2pmjZVyh5tmAo3ZbGctxo3Gz8Letn94wmmZnZvJirn4VHYuv5iMEuQ4caWqK1q4",
  "key24": "4aGLGLrdFfJvmbpk3m5Wq62Gz1dWUJWzYFzwgkbVm95Uw6pLm3KATuvoJN1Ho3p6oMFKqU43RRetJFMdWSVAbU7q",
  "key25": "2PfF6hqVff5pq84QuK6DAb9LYE21H5YcBz8RioVzn7xZtrk6e4xorVXm4BxRVj2w2fj9C1h5scSCDWPCFjHvZD1w",
  "key26": "2jZ6JfNfehfwa2kP6dRcg89TqiZzAbDjhSb5wnGFTopir95YodHfGo7QEfzLi4CFnepbtYbwjNbsPwdJM3M6shnQ",
  "key27": "5b4jA3tGP6hJBNrvKesm83mooChL68vzsf6ZeW4LQoFTe59AhAiXbJPdsnviJdKfG9sHWb6S5gUqWpoJzZK9H6KZ",
  "key28": "51wXuzYJX1n4Ca5LJW4myCx2UZAyi1CabnfwHHH1JBsEx7JBpPEn5yUeLUYXrs5CrL2BKZ72yjWCaFCcnoAaUvxh",
  "key29": "3kiASgN9recuZnnfzsncfxU64NuzK7SaKhS7NKRiD2U7HQABFyeihspYbqLZu6pTgw5LJSEtNCNizBh1ToTqiPAJ",
  "key30": "3jRaWBoPrDReepeiqopb6ABEbGwBrL6Pj7Xnx6DzcQcAiARumzKhTCUh6DFEk2V56yeUy3qUY5Ge3ZjeL2BCqM3c",
  "key31": "3tS8X5ZDH44LGkSaHFncXWEnq4qcNnxmRaqsZFgYLaRjyDjtqMPg1k4dX53FKh2YzbsqLBCRJeAN8aP6H9biZ2se",
  "key32": "3Q7DWHybMLk2xtXyWWcevusjjLL4FAny5bAxgwzw64V6L7TrPvoLhkpXqj1LqtBtymbnm2piadtoebULYWds5fBr",
  "key33": "3WL8Ysr9reSVSyGmJczzAgWuGQfNEMM8Z7iqQN3MH5UdoLMp6iB8vfW2QdYw856fuUuMvNjyF5qiq6Qzt1zNve2c",
  "key34": "9DYB3UyrEnHhdKbTULfgwqC27NhzeeSkF93Lyg4FYArHY7u3EK1wyvfKy2cmnpWhan3eRvyrHEosy5joHJTV2Fx",
  "key35": "jkYfDn4tk6qghmhnqmBFx5dFGTCaFmY5nxrwscZHnFLE56G2BD2Rtwe5uWgS5j2McqEaAZkz7uqm9nq9cVB596Z",
  "key36": "oq2ja7fCUdQ6KVAJYLd3zkWHD7jwaJWcUCoR41caoxXAheX6QNUYQ7xPRHVpyimcaAxP4ERELLmXkjaRsnf2ouQ",
  "key37": "4N37wzLimqTPgMvn3rnUK18feNyEjYM5rbuxpMATLcwHDUAjeyWYZrTfBSr2SqyT15qpMpTTnXURUhtWuUo62hki",
  "key38": "4hgyiGMVXXxHq9Gt1FpY5R61fAHiQoBAZCuRSfrsm2d9Skh7QTSr7eu1mEMbgE6B8PUEpMipLZEAWNn5JAAvuum8",
  "key39": "4cfpdcQdTXGFm3qrwUyMDEPCiBpVsHQDYt6t2dwMxF95UDqsEPbzJMxEmQYTCc7RkM5aJJj3hDwRYiEVwGyNpvAU",
  "key40": "2ntH94xwdYKgmfUMpw8Q9E1f6PFeo3pchojrgTePtgRLYDB4YoRRBWJTrUo5SdE1CGzUU1knD6i8aWFH88zJzjsm",
  "key41": "2zEvo9buYu5C5WfNTNSqZFpHfBctCYhtYR5soi4eF1Vq5NGPK2b2H8GURUANXx5JcVxwMLv5Aqeg9sr6EAUF74QC",
  "key42": "52WAg3T7QRqTsiPxjxJsDXVHZUxK9vHPNcKmuHDKPuSv6WGvK9fTV7edh5Y1cfFpkzmmQMcS4NBgpnJ3RX4rHpkM"
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
