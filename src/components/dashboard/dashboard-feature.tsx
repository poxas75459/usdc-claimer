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
    "5HHJgfEE8cmgw4YapYGdwLEBwfBgH6aP5YJPEgKS2ZtFbkHzpNjWr9fdKoQxoVXPRwqRs3ikufwGZFkgFNG1mu8N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3scaY79zxe5fxQ8MgfMz8fHNN1kxuB6vdGcXzuVyqA7RRE84TM33TM5eixzZHWT7X9c9XDeRPb3xTM3od9tMc1fV",
  "key1": "3LiXWcWwYf4bAf8xjyW9h6Rj3ZciVGAdRWuqDGmBjjETjA1cX4rXMVZJENk8GgcxSy1tHpDMokQ7swZGNCX58hQu",
  "key2": "4DPyQoEavRAY4qVRRqncAruEHS9bmGT8FaJJWCX8RTMpU8eX591B8N9nKYBS5TdPATEoCqphPn3cHTP1XM12apZR",
  "key3": "5eXJn4ncBTwbYEWrmsCRJP26YFMMVCcnAtJqrrFkdWs4BVYibPKLuecGiFKrNteDeYHMgPaEFtJ9ryGtMnPEL12R",
  "key4": "5jbQZ32WshwvJDpx5KB6qzqNs7EeyAQFCQWUgNDk6NeW6Voq8YxdU8sWtMbjgA99DV3Fh6EeyBNCXa9hTFUxR458",
  "key5": "3UJqfW935sGtY4HLJiuHj1MaoEdJSmbqqzzGupRzfmnsebU9F84DAcdJaBrPm8iWPtfVAZ57MJwWpNTQE9tnbfvW",
  "key6": "LfHUJeoWnsbyxHVxKoPwnpfeFYnnsW1CC1EdJnRYPkPxDJVFYGHcFjF2kH4CvNZoJ7UQ5eSAqtrsaiNhJBWmmSC",
  "key7": "678a7pmA54BokrNWFZTeqzstS9FGjhNHAMwBqW9q5JrsneEBLqCZdvsyEEyTWiWHXratkWFVKCq4vm7CdkJVDHEi",
  "key8": "LGDqggjcC5PUBYi59Rsya2Ne9ptB5SUMoNfRTVqyjRwHW7BQGRjPoNaWH9F6uCPFW7LeTfzBCaaAL9t4Li5S6hH",
  "key9": "4jwJPuRcQQnupLuM17JM6J96WqQwd1ZFCv9aqRV9Tdvj63B1Jg93GyrjEcKGH9aqtbnZb4Uv1M734MB8eeWu8P3A",
  "key10": "5BMQW97MEiESysXrBLbu3WSeSNpB2KMay7PwT4sdXNBTXKedomkHSfuUuHbygWHbfuwidCqwDs3t9uEJBm48YPoV",
  "key11": "49deFdQHVAK2n2Tb1U2UshihuJPd9k9hWawkdxQxFpPNTJTUzKyyU82wkAQvXSoxeRF48of4QJgTxhCcMCkbf5Zu",
  "key12": "et2oEYUUidhkxKAXVAaHjp1s5Q5TfmHz74nfph5536hs43tN4Efn2ADoGm1Eevmfz1LXKcHqQrZVYgaZvQGbAZ1",
  "key13": "2ywKnFgmtvH2rmgtA6FgXLD5fJiUetnX2Z5P6sByHbcHZdAVDFCxmzEv1fJ53NigPQcYuJrMuF14YhyTKGMAeYki",
  "key14": "2AQWDDBoKERdMU1h9j6WonjCiyNMkJZFCo6HEPzeaMyTQVMarRiTM8APAxK62KerQ1mavWptcHdNUoc5Pdqawm3y",
  "key15": "4oVPSsnn8mVLm6D764dS8DY4s1NY9uhY5ZJ19kuVMXpJHg74xo3QSoP4sXaavL1gDD2vaq39nmSqohiegAxhq47d",
  "key16": "2BFdB1MWsga9q7oNZCbbTaJg49F6Xq4Ybpporhap6Nq1AMz5QHJvbFwXeti5tjJj899PX7MHmoFETZ8NWADQQGuc",
  "key17": "2H3ZKUYUqxi67XZpcbYh7NDLGiLpJApck4eZZyuLsH4MwYWV8ygb3nYJeAC9qVTTUCHQ18VqQPqRb8PEEJrrnUhC",
  "key18": "2g31SN8pxW4mR8X37f3hYi2G5AXWbzDLSAbKrubgyHqKs7isUAkj27nWGBY8Zq7o3fRYr781vLtggJCGmPPQa9NJ",
  "key19": "4gDrMZJLf6xwXvXHjbKFvrEFLDGFMyY4jN5V81AHC6a9FPjer9xdjEZbokTHPUb6gxd43DcngJ7oy2whEPXaEzMV",
  "key20": "5nxCRAXiUwcBCK8GTtwHWZ3bBiTn8Z8mwdvFxerh33sKLzT4qShYqPW9sRRvR1H3dCe5FRWXXezXizZh9gcUksNH",
  "key21": "5RTPoWPuUMJ2hudTt77k13eVPjXspnwrmzw3bJUZWiwatL9NeSu6z8g24oBr8HJMeYfXGzAbLdUYFDHS3iYFth8U",
  "key22": "YedjdzB71xUdzijQR2YCyFgfEJgCNyZ5ahgKoZZXNrYiKcMmZEs1C3VQPuZys8aZxcR8QTwSjsXeFgWC1PwYDTp",
  "key23": "2PTpGRRxSq9F5ReJRHWCi5s88r6XZWQo3JsKb2dGBcMQXh9bYsfVx2bNXe95Kb2WxziVrGQLQb7VT34PtLcqyvxW",
  "key24": "4inUbKMCthfGyanUoN7MEBHmxPaa7h32vGaucRtBAuX8M5EeZLRsZDUh8sHmwj7GtmcKEhFJSgYwzwVzzRHdVypa",
  "key25": "5xpk5Eqoh2Dcw8Vgwp1YDGoiJJ6ujPhMPSomF6cQyDs9T8g3H7MJr6VdmfiFprwvUJ7CLTmzk21iDmZNQQkAXZX",
  "key26": "4aPUnTjRBh1Bx6NtWkzNB93Xp3YzwJZH2JBbfdB9mgCsLJAkSY8RF8VPSLinhyHikSTzFh1VPWMZXKzHDwWTrJQT",
  "key27": "3PQHbNFdnkNwBQWnt3cRW5SeKqAn6i4UifAEaRhowXo86TkfipwHGfaSsoNGexjUE2CXdoD1GAnzxNVTF2efk3ZG",
  "key28": "3E7WgAZpRiuNmZjxitAYALUPay8JQkpAzL8ENaRx6QypnzogAn43Xau7eeMvifZ6Z3G21K4CnkdzdWheZZ62Rgbz",
  "key29": "2TdVHkQQ5CaxWVzxjvwShGU7HFa4PouC12vFexULkPUnWpCRVaggKfzSatCLmmjAs57XFtpxorY8hCLiqTvXnEXr",
  "key30": "5TdmaZmMTXmtbu3QMH2Hni7WVf7ynjLkXBvJNDXrXuYnjEVPJa41bzUWypJm9bLnDyBJZWKY581jCgCMpLVntsd2",
  "key31": "3ZzmyeiAcNnYsETNvwSv1MGDHMGsn9RNGJ9mrTJqjJzYsMd3xaYyRfdxUPL8KtnVzSxUyBsvJ8UXEth2pxiJN8B9",
  "key32": "54gzzfcpzJt8RRt3vsVhCoXCcDFLsgBx7EP1HHxUYvnSpof3BmLusiDvFLdQNbN2byJgzTNLtC81zPHe3JutLLob",
  "key33": "64qTWwUgSYErTXjnS6EvRiDQLHWZJCMZPxegUaPE9eBq4XTZg4hT2jzySKyTMA5X6nyjjFm8UhbWcy2dJfSpnAoz",
  "key34": "TDbggsVy5iGabNLfMr9U13wTz6Z5mQ2SV6K19J5KGNWwMxZXXG9qecVoTPon8gjyZqSdt38oRdyarrFQtneK2js",
  "key35": "D7jzP92zSspTXLU6wRBdmpaTcxg7Yj3yZviSNK2MPsLxs1dJJUjGPxvoqTnFC8ApzZ1Lb5bjxB353gBUDF5g1Xx",
  "key36": "GnR2KofAndVkfpnuYi19qezNzkvbY5ucjh61R4wAjRVKpjrAWeWTT9sudAoTTAwpgXwQVXUtyUp2rcKbGQf7QKf",
  "key37": "3s8rUQE6ECTbdU6XgT9j6mx3TLGj6KpgZ3bLrDydTfk9gXAqtCgGffYumfJeYshn75YhLuxSL5Sf8LcW3hP2wBka",
  "key38": "URKFVnNcEhDPm9nxF3b2dw7ZgtRHkghiWnq3MLoGmC68mkLnC4XAoPfhZLYRD8LUPbb4zDCop4gFULPRpFoT6jT",
  "key39": "2mkctS7sbTGErHHt2sALTf6xXoEuiUJ4FM3ZSiCA9TzvGa3D14vbjMVM5iF3KjTWggrc3GhTviKTEPYX3Gx8J8HZ",
  "key40": "3ozjMwrHmbRD9q2xjVbPSDZDdrFXKEE4fxVSU5GrRrxgPZDXDrBomDtCjhZUxbsfwchTZknWEe1duMqFmeiQq979",
  "key41": "2cZiUkX3NNXoSwJ8dftd4sdKgf2LSrfm6yu85ToZE9nnrMm6yUFEcUXv2zjQqimXhdD66VptsrvucSVCV2ZAMJWx",
  "key42": "CZCmD6LDcyHk4zVgqW6GA9Gf3M2PofapdUJsvrSwT3Kf8wTnMCMfHBnihx3vNbF2RK4FbBtcRn29P9MYgjKFgua",
  "key43": "8chvxhcBsXis7T5HcuA7HjBzV3HZPmJNfbX9GUVFQ3prrbwP8Mc4EDc28zHQA5WsQeT4h4bBB7KpmSXKt8UWRZm"
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
