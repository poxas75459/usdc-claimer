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
    "4v2g839mgfPzezi1dS4Y9sM92A26Z7AxETTv2ff1CsXwhmv6RWNKH5PVKGFP22fQU6a5cFoPZzLXWMYVyccecXv8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ys3Z8K94Y9MakXkHgLcXFzNSrWEQzNVPYXxgp3H6ivCHvWuSKsQdXRNfDHFGW3fp4U2nMc68MWdLPKmbfdoxvjA",
  "key1": "5aVfyHnUq18GrX6CWGZXMeLc8Zgo9N9XmByHcC8rKVYqkYwu1nYpA4dNpUm2Kf22XnyYobJcUvp3AWarvsYt5p89",
  "key2": "4Hs8eyGyJARW54fw3VM1uAb1CTZ1BB81Ufxw3Zk5v2rYdqPJrqGDAwFbNSx4Nctx2LKg7FXqscKWvQrsFVFuQAQN",
  "key3": "xHdikMcLt35DBxcYtpPhXx6CmceRnsbjN6YrWDUdiLJWcmwECD1bzrkgQe1Ns2SPDW4roTFKGTa5EYxavRf8JQ4",
  "key4": "2CmcEp5utjTkHkVwbcnR7vn2eM3hunW26EdHGhPgBdk6rqNBZvq1wE8t6G3BTsWWqJUQdVYT9kaGhJjaSjebfaCR",
  "key5": "5oFyNBbQw2tvXTKpUQ5iLt8GAMPaPzR7FJP2VSJ9PKppY6epDhRD6WggpoLw5dtgJNMB3ND49QPHkJoa6uARrhTu",
  "key6": "2hfqC14E3KKPbYaS8rkL25pNJsnTcqN6ZvWXRWLZRzZqr4iyKT4oh6dNKAcgtTsYafSUFqcNYKjq13xUqk5bhuYB",
  "key7": "2sE8TTfkjaQkXoMnRGWaeDM1iJU89Fx8JBqpyUf3xgJXffXsWRuRoe36RYcG364G3nqaAuHcFhNKt6DkvVzer4Mr",
  "key8": "5mgZwKEEQh1ZYJzvnrU76cCncYbpfX49AZXrN8zWfNBaWZGftbfSzekrpMY3xn3pbhyUoMw6pHpU1Nwz8HeXavT1",
  "key9": "4hebkRJ77ghUQrPY2TSMsmLLMjA88QQRTK3k8sN86842HU56dBw1Fqd8KjhaxvmsWjvYADdkKBr8cqhkJVVsFGhK",
  "key10": "3yifVwVBc42Hf4kZ8q34PiuFRSdxkmeKPVawnpcoh6TwD1nDPoxZVoeaVyz5ezu4AscfGTNmfzoUwPAawJuAMgiE",
  "key11": "4EkwU5u7z6CQN4natnjPz4LLoSo8nku99mLZ6BsZo4KSyQq56uodDhN3eUZzjHfcMdLGhepJjpatJZzsXsebxuep",
  "key12": "2QNksRnHiMwWAGXsg3G8Vm9xGJvrZfiVs984WGicJGhiF8VhXDqTymJSFHD5gYM6cgyM2H8iuGoaKkg5cJR6TDS7",
  "key13": "2JS7KHXEgpNcy94uK2gughqrTPcyY22S6xLGwTbF4cT5rxc9mXi8u4LQDd5AogoZdnJ7fKD5n2hxhcDinBtRuHoz",
  "key14": "3FxzduHWpBMMLAdHyFTPqVRpb2eBKTFcprreovDPaH56nxWnfykLuv5ykJJTgFUjfbBHvyz4VtpCcT98JSmYuSwG",
  "key15": "4zY1JWCBKrJ5NZDHYKRPEPAdx2kfeEjZdegSgXLr9TfzmUKvLPYdFYqcHcFdPeafTjcLwZZVzDdAHnHR7VPLpbkf",
  "key16": "5vSaFVFbjmBwsJxxcQq4y3ujKaJkkC9oZuTmKcTmo5eRZgDKpMq4DcE7WKxEv3MFDkm3YoY6pwXAuqHUx7WqQpSG",
  "key17": "4m7Qz2JFEdxEuCH5V4FD3iFwMNSt4WNCSA3Q456Z5Qrngejz9Q6839SaZMAQLwRw3D6bmj7BBSFVJ8YyWr8gXgXH",
  "key18": "7jd4HLVx2Ka4EBqXS38dqN9KBG27bEqCDm7TqAUZq8eqtT8UNLcewLsWtFPHo7Mt6ATf24BB9xMgBDXtLGp7AgP",
  "key19": "3cEwdP3GvMB8brYi41WELT1stbaK5yceYyXGg78fjSBuTQMqgVzhYWeXbp1ThCQ8NbywP46YVWMduYdh2A3DvED5",
  "key20": "48o1Ys6kYGX53TzP3r6o74o2LkjBEhVpsKbRP35iB3kcbbZAMFPu6SgroqMP7BqgNys4XFNqmJ21aecxGvE4ydpD",
  "key21": "2RLt5GCaC4jajuVA3JzxfCK7mY5CmkN3nB66yaP2FteaL29G5GaU7iqpmZGxrjGBy5iHhqe4JvVRyUxangLi9JUe",
  "key22": "2PCPTQPNBUpNcCjgAUqENe8PhXKfGGjsqxyu7JArdpixt7RhcK7LKd39xdkjXr7R6n5i7A6B987B8P2ysARLX7Uq",
  "key23": "3A4feQyJB7rNVfo2Fxr8E9hxb7Nfpv3Vscij2w69tTefcmQtiu6sVfAqJhRnk9MPTM54B7Z7qMr7JfvxYKy8i9Nq",
  "key24": "4rF3WS5GKryhvQNMMMnPE2qAi6ZKRgx87DRk96iatA6sA43bZVbKc81z2LQ6vTcyPsfsuQeyD2gWe4dVwJJsCfKr",
  "key25": "2Cc1GhYYKK4TaA4i9V9m34wtcK6MqMDiAbK1Q7kqQmX1RCbqr3Crirzs8R8Q36m3EZN9q3XD7enexHGWiC51iyfS",
  "key26": "HZK4D6CGfd2YaRpnBB5e8jSsLuhPrcY2vMsxoBQxaGR5pceH5S1KD8Q4aJDPaEyPbKqCdUqdBdtttRPKQKKxfBg",
  "key27": "5kTMt8d8djJW1AheLLYWpubUKLmMh85wj5YBwywgC2QRH762a2xQoLr7hWxhVC8unMTq4GqQUXV5XoghTddNjFoq",
  "key28": "2sDW1EsyewZxNmmZbLUbNG1jPo4SB9F9EUHMwk7AqnkkpfeAkdWu8QKtMbAy4KgoQwtkWBy7vRrceccUYhysBj9c",
  "key29": "ibbJGSzH9SiYxYmH8YTunhTez28s2SM8giuanLxazouQ62xqMTN1x3t8tkXAn6KZpmqhBCst4fwk2STTz5W1RzK",
  "key30": "5Hi1LCpbXQmZLWiz5XxeCWajiia5yYcW4rPVVbMQatK36Gmr6xjTudTuNJTVQdYn3awmuR6xpX6CDK383S2syddR",
  "key31": "2YRNQp44PKaa87c9qvwyQFMG6HitwMrkZLnxsbdiRXJfzy48DgH3kxqnkrHrTPiNSx7VypoKbSYfrPHn9iiFXCvU",
  "key32": "49zobqDyK5GXHmmcBxJ1jjS74NyUPQYdE2XxsGjizMnLPJFrmjr7KxWSV6TY9FQc5wvPLtRBHpXQEASc2T7B3f7h",
  "key33": "MgLVR6JcvnyrMEcvA3oDXc8vERatBYec6G9RFbgrCwTX6r3DrxteP56EKQaEUEgK4C45SknStrjZvf9D81UD4Mg",
  "key34": "2WFdRwAic92vpA7ig2hhzU2pwhWeB5yTwwrLyfmseRa8311dgfUA7HKsuzCXJABZfB7tnHSA5Jdb79bmhdBLnjNT",
  "key35": "2oCJkEpKkY8E4nvwSCZdccgkv9FNPVHZVvxp1Ywi6sjDqfPUrem4o2qQmn6mowpRTod1Sb2dkzhBz9DTtCk7jJyG",
  "key36": "2WFRDdoQeTnGXRMDQisEYgXgpqobHG8RfPH2NWwQ4baFgnvnn8FvmqWVpJixdLeSxhhugeXBFjYT2WDfxPa9jEuv",
  "key37": "sFri46xsc5N7fMtAwwPmgw4PQitgwQZ3Yrjmz7gewHiKPeeMRCm3PfJuErNmia1yvijpdQLPxkMxB2CHpuWq2UN",
  "key38": "46kGWRBH5kmWw8LSJTpZEZuJJePtmtQ6EhfYMANcGpZM39VrsgmsqBbPYHaZA3gaXw7hP1WQYafw5Zi6ThwrpjR5"
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
