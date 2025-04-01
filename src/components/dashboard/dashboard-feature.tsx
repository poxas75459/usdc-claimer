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
    "3ZeK4gJs7ATQZor3xXDgsVLRf91Kwvhgb5bjFS7vH1Yvh8VJ3xPzQdga5YAoMEUvPpSLmtD3Fx8zJ7GLc27RdZwi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YYoDbRiAXHoSVjWA5YHBHH6RYvibvx5cW4LjrnVBddGBCPPRSUgui2cDdZGuXEdTSaS2QYZNEWdvqsBHLrwUckW",
  "key1": "3C8EL5cUwG12MdnPxBaTR5cWuc2ur8SQp5mtNhdvgxVocKkwDRugKgto13Z7EBXNbXKHuKDgdfH2dckYD5MnU9ir",
  "key2": "52HKjKHXCCGkNUEQ38jARyAwC95cVTpbAr8tiYGMjUUe6tWfosxQkdKsDHZnckD1zxTR5VF26CXD7xqw3AVNcjrv",
  "key3": "3iydPJhcabt6wtCG2LgvqcXkT7ME3j9BaRFnpXwvq7Q374CovmPS5W4ZcGz8XE3JRr2ngaypoH5CSS7ZBke1Jeq6",
  "key4": "49ipuFMVZssphdtioxqFUdbMPLc9dZz5tu4pUYNmL4C2aPyEy1vTFvb8SrbRpR79NZHjbtE8TfHQuRti1BZipQh4",
  "key5": "5TxSxWSJ1MqzDrV5F38phUnVAd8Vf3N5X9XXPGbvzPaMFvxQoqK143X4dDoDZNz8HWBwbfiCCwbxJeo2kh5QMrPc",
  "key6": "5FWVAs69mWUNCqBtzHdC3wPSpfSEPs21LZFHdm3Eh1bRqQyxdEKRK639XgicwzV669ehQn25H5ZVnbJhGNcveeoM",
  "key7": "2RL5SQ74y5UDRfYViByRKtngxC6oGwzgEaTAef3M3gt9ngS3vGYGaMWFFyXTnERNNcKKzCESP7mYRSsW3qZVCsTn",
  "key8": "61WzbtwVwgQoGa5vMMxJ5JFSNoWjz191kBij1e5g6ySk9ZyjjmrsK7EQGhYVTHBUyBo7yJoFFBdKKsicWm21Xmx9",
  "key9": "24VrNcyNgm9HYKPUQrgxcRmdHiyEWfx9Grg6CuzyTWoGw8KN5XnEaXhJa765dMpXgCyS6yA3cXMfB8sdZZV7Tmnb",
  "key10": "3wnDh4uECT9SZVvuPSMbhPLMNkWghSFRxRqCaj5h6FcLKVsuKteXEBuUHUSmqntgpzWtAHcD4cgBHU35LN2c8EEo",
  "key11": "2ZfCxaD9MM15XHzYy6sfebBfBzyYMvf8MNJv873uNTZnHczuTun9qLYECZWfZfSWM2gXWVMDbMYsCnYgXbX3wCW",
  "key12": "3BkZPWzhxia1NJqS8UcnUwXPLTi5qm5bfhhcnH4rT9uM1VCQ35mTycxvwjeBMVDKNm7iYWGK5C5QK9ad4ZMeqAaw",
  "key13": "4wcTXEXjJrtMZKLRBzv6X4CRUfvLxoAE5X7M1wkr5FtAUxFtt5tCS64kspX1nF6FXfuj5WxJCr5ciHDY55D3xEb7",
  "key14": "48sn73amfsroH8tdvoXPp2H8xnkvJqSXGnEHLtJW9MVVtpAxezNAvNziewYoyKXod5E7sp3SxYd3jPqGuk7tBm7G",
  "key15": "iczXLvdieCK53pdZ1Q1bnH9iCNE7o8fckaB6JKmpDEPx7jwM8mrtvF3AxL9RNh4SPhRUrQDjNySnS6qN6KDV6LT",
  "key16": "MSrsj4F44dpcgkC64Jc962kVMZH3kpf6hCfoyCWfxp3PiANcRyGUB9S1z6fL8XQ1W2oX22NrqvZpaMiuGpCQW9P",
  "key17": "5cJ62pdmScmBCDXqoKckeioayujaoYFaLRXmFmRxR16nzLbSBjGdk2Y8a112HJUdNCUrrbRuWRwgY1rHqtL5hezc",
  "key18": "3yTmokopfSB3UYPcb8Ks5tqo5g77wxviWdgGQ5iYWETQ4NNaG6tRAt9CCg9QjRTHNwYqPkQxoDqpRx9zwB8Qhz8V",
  "key19": "5ULFTKmHkGdphEjbY6Jr3KmdNwdkKBK3xSbxcZTrUq6tXUYrDf7MZfdQRTmJJrPzkR8ztEUQr9PifK3CQnqoAsJV",
  "key20": "2fCj9ZK5JN5go1tvDiP9Apggcv5HUg4ZNk73sRHwcavzTnfA3iQBVXZ8FjnUkMFRayZZcuBiQa533gsggoJXqgZ7",
  "key21": "3tC9pWjoC3nsrKW4dXMwLzceWyj5mihBQhU8LUxYiHYoaczBjqyZ51HJo29oe1FGvHKQRP1AUca5SY7mjBsiRL8K",
  "key22": "292hK1yYysRgNhn3Yb4HF9ecX7prxXX5s3mkM93WkKmTjgTeHcuXACi2qBAzE7YNpQeYzTMkj8CeTSbfY648YZsL",
  "key23": "RNAjtj7Gw8cUK2r8hRUogHirDmv5bJGMqJv3DbRcUm9drfVdrZkjZfb2x4DBxrQNHeG8iteCZst4BLrCt12cvF5",
  "key24": "3heyx8t5GEetqkLF9ocvXva84pcGZX5dVULTJff6qAwVNG7CtjHLTXtTH8VBvpw1oyFvy1VpceP8jwwhfofpaFTj",
  "key25": "4DzaLVHnwtKURbeN4MuJwKMzDvf8b1gh4FK6V4JwyeNNd85iKQm9wSfLrWwAasRrZtYGsUBa62HD6gDskFLACMav",
  "key26": "3MYEmLE5mh3VnV2oxesvy6rB6SQ4818mi64NJhBiBs8Vtm2fkBePirwuo3RwCtHzqrU5oDkz1BJrdU1ir2Veniek",
  "key27": "4yBi4JDMdCSo4SoNf2qWwfu6hmqZ5C4FdAhriFBCdBL6Lu3K9sWpLqiqbNsRSxxx3vAv9noJGJvdk5qcMJoXUkvE",
  "key28": "2amPE4U5Wrxq7ZTETaonC3NAbAgawhhRCUVwCz1M3rLnA3mnN3gXkSYNHbtcD5uZP1DBgdG5xUdfgJ46Ut85x9eg",
  "key29": "2CuF8FNZX17fJhDvKJkUYh7pe6fSBS4sALu98uDAWbkP6Ju3KjLdoarj4Xc5rwRo9CjeXyUTwDQdDJZTDZB8oL3B",
  "key30": "2DajdGaKi8BHh4tFmrxXnGQExeasqZLQqZzF6k9AvWZ94zJVkfP4LzP3Wdz6nKVfYoY5wXoxNSHgYujrMhXR8yVp",
  "key31": "4wa9WvFM31QbgzPwSRJZ1L9n4Az2NfcyhSiVva6J8qF65HxCzeSoiaETRofRhWnwxBQZEENnb5qYi6uYEyybsWP9",
  "key32": "3BueGaAsSAmFwQXeLJKHCtZDm3xjeqFKtE6NLdgxeN2zxfHgyPkkvwx17uAisgrruvBgeZzdjud1NYFBWQ6JnMm9",
  "key33": "2cqiqZs19SRXH7WVgzu5uhiSJgoPFj7Gy8WbvWpCteaqiNXpJb7BNkTwcAtL2jxGpsaS16gVMRiZDnHB2oEBhUUv",
  "key34": "4oCMwQf5WyG2ko6DLEfmcWim3JFXM4dHek7z15nNbHFEeuRzCpbM8WXpbezEdVmjELujr5j5YpGNPB43ietYLE1E",
  "key35": "2zdD8s3rqAL19SrJYNvC1ipzjt4RNyRmsgesKNWR5AWugwsHpMbJCVBTNajMbWZ85YZJh12CRiJWhKrAwiLv3BEd",
  "key36": "4TvuapFX2v8NKxyXpq9kFRYRZgKmWTb1aJ3W4uaqzF9ZYzYStPYTbZsMdWVNT6iLNMza2QBuoSxTs8FFmTYYgr32",
  "key37": "3ggqjAfDjV5WkU8f4eQs3DsDnCgXpccHu9TEEmPEkUpeNHCbrfTQf2xJzgFgRRYbUNgtMZofcix3DtSdWstyKktL",
  "key38": "3sAdTKkYmCk3KxL4Npcgbq9JdEEjM4msE7Dh8HA6d64hDtAYFqcaW1paHvJBzLDCjc1mjsPZEY2PEvQPJ47MuJUt",
  "key39": "4KQtikNBXvuFdTLwiRxgPeWKELY4zRLLAMyfXjZV8eXomtJcaqewvYiCYHaQ4enrKcpiKXnuaAE9883Rpffb5mRe",
  "key40": "535AKQcW7cNySMoXKWibvPf4k9JXdXBy7KimJn5RASXEzcTkgbJyqBcQwkkeJ7aWpBJtkUy8P6wHpBSLr1cwrA6X",
  "key41": "38qVpqofzj73wLjj83he5884nyy2UDqn35e6bRq2ecQSVqRUJvrspA5f96Z8xPt1Wu28UrkDtxRUtChvG3V6t2rV",
  "key42": "449kMdvLuDP6a5wcac3M8viApigbaRJCUBg5bBTfFkpvd5r1QPdB7xFpwGL9j9XRj3L5XvTvbYAE7xgq4QWJuwYZ",
  "key43": "2exKuMgLzkw7B2kfC1zyKpTXpGZC12FKVSogeMQJyyUQwc81irc2maH1DgjAWczZQvf2kN9za2TmNPSSDSohUoU7",
  "key44": "5ug1NNU27k3WNLBkDxo7Xy2QzF3sn7SsECqLyfZ74pfnsx8MWQH4Nx6sFZVEP896C8qEYKcBZWTRLe6QHMMsxNu6",
  "key45": "5PQFiT88GqUHEKJSnQjgHBRFxj5A4WveiqiQTEWvjr6tHPzLeSx8dPk2jBWzwGqcbKnjMWcKqUqd2fR33XDsFwvG"
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
