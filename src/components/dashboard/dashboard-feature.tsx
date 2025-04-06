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
    "4NFqk67G99mbpYYpfcrrUPi7MfLm23FDquCgam5dPGKGxgGpbs8aDcUVNNQB1NiHxwzMFGnraHMV6tgzkkfW1Ny7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36W2NqchnRghWwTrRgCzKBcxT1tks4FqEwYSGE9cYxajp1N9YmFAKGxeMV8uR5He52n4MnX4zEV3NaJbPvsAqwJ2",
  "key1": "3HffKQTySv53vRhBz1VVsPP4R6FTQsqFpfFcTBLzGkxBAbkNJ8FHezEjGSiWMhWuY6kT3Kq3k7XB9xUsV72jicej",
  "key2": "3j4fn2AuCUNSc9x7cJfuoVu8csB85DY5Q2A8hk5icETAVPaNTwxveh4vGsVedXs2Wn2rNPqxneFtSSqVvbMrtuqH",
  "key3": "iqSkecCeAbH8Ar9A6TqfEYRZ7kdNGkFsvkBj8kXNmNguNjhbqFPdRNQejHYidwqbditsPmqUq19czejq2XKvevL",
  "key4": "jmJnkCcPLet885X4QDdxGcKwqVohdEEshHZa283FbZHS56UxZTDcd3MHsRZmfnabS3owM8B3YBRB6qpBfNA2oa4",
  "key5": "qPKXBpH5snWkP1BkkHDjr85j5iw8BBWfd5eDxNX4MTVGoRATKtX7kxi8JpBmQNeoxptAnybf8TsPQk8dCcNNLUN",
  "key6": "3VV3tqShNGGK4J8WWfUhgyNZaSx3MFepLt5uUBhdsgRqFuGthUsMsPY5KRSMrmmJogJnFa3DrQwG6kQtmv8ZddCo",
  "key7": "4QawFiMn1SWWunEusaPyDUob5gC6gc1To38hBydzQxjrqoBL7kxESFdSxRfFNjcA4nV2wWejRHNG5sucFqSUXgpp",
  "key8": "5CVvHvVFwrRjKqpBeigdBZfgseU6HYzB6KPnkV9YXEiKqJUHXmXUFdJm4rdghwUwLSqpTXeFf6s7KxZLQbdu5RQc",
  "key9": "3ejB4jnVonxqR7Kwyhh8cqdS9RFRJGZr4XgXoJ76VhzNT7GeeH6YMSgkS5pCv5bdnjgqJtMz8n4xCmJLDu3iL8EV",
  "key10": "5S5PFExH8zRuyhTcg3cGLHUBKCPbRF8PgtS8NWEAgCVEQFEyCgEKnXvwcnLpkQytTCdDwBszgjkzcN42rrxeKtin",
  "key11": "oJ8h2Pf1woFcrgNnfipVN6iCUQVnLevcu5ZmURjeimUsi2fX8XEq9DTpsK9W36nRYwUzgzv2CnLfaoaTfMMcaTt",
  "key12": "pqZNB1jv72NEHiBdUAy4bDwREDhjwLjTvngAtkYzkPXAb3DCf6ghW3Kx6kqNidUY7sSEEyyv1c2QHxjT5MVGZrT",
  "key13": "43ytaJJXCFaYciK8z6VHBNsuZPxRS32WqgfxM5TyL2xTfB5kyLx1o3evFAeZFiXhuFj6HGnJESGnWayU2qKm4xDu",
  "key14": "44htMoSFBiEc5fijXJnjD2BR6PQG8XvinGkJmtWrEQTqrsMbNsViCASTCnF2xhGBzTqx4udVPkjvKchtQk1D9es3",
  "key15": "Zz42fP2kHB6aRWwm8HG6syBqxjCE5VAtfMxbrHHGVPFF5TGxRJfTCv1Fw42Ng1KuMCLWN4GcfB9EN1PF4fwE4vX",
  "key16": "mAkBchViBZDLnxa2CZQiKzbfQdtRoVKCTi67AefVMTirt5oznu2pheX7uz1QVZRPbYjbNqdF4S9rGDEPzXkdKcn",
  "key17": "Zq4cGS7U9NhDfy93AmaXuKPa49oGMjTu38U5NHzquGiquaDQT8SJxeUewaf7hFuWCcpMA5EMs82kAByFVwKdtPz",
  "key18": "3rg48AFnri2EZLECH2ApVo5deHoW8Wxp1um2gn6SbrXmx5EUyuX24FHPQ9pjuEu48QKvR7JSDJzzxzkxspxchL1T",
  "key19": "Vk6uBaeSP8tbQMyGiMB39Kp1hzjbWefBonVSpCyqyiFcyy5xBgmgeMPQK1N2botQL7EQgdk9rYgqzuGPreG6UJc",
  "key20": "5RWWoCgh3e68KvXgChh8NTyjvZnea759yqeDg7hDgxWJXDgZabHdiPr6q7WoQm2Pa5xDuKatSeAQSEGTYRhNTZEY",
  "key21": "3M9VDMNfEyNTb6XWQ1z6VEeyc3eRT5TjGeoNZU1PWLcVqcBX4o2PgjrjQE5v5hb5fHvmcfpVS8XPAoX6ss8C6i7h",
  "key22": "2ymNLsAzZ24Qj1jRisDViuSNwLrTVbydL2yKSMBWL6Afsfc1WD2CAUabptREFoL5sLQYaT7byvqRy62pvYE1xJ7K",
  "key23": "3V9yfBxQyRQ8NR4dkt1fMnPMTm6RJY5CPPgAHHcNYANafxSAQu1KeF9XZ4ES4qvCbWGjQJWEqHqJFSpLgboUkYyv",
  "key24": "4CZjp9VToCHMiVMHbD2hW6gY24KrVvfBXTEdeH7k5bKSRckJ2GfAKY99YrP2tEghYGSior6UPR3JB29hqvBswV4G",
  "key25": "2gPiYGRjdXn662uBYc3iR1jmNqWA4E71RZx3oNC9D4zpKiRz4WU2CFqhzMUz7tX7tBAJnkSEzeVQo8tk8dt9mitP",
  "key26": "2x8QSMRkcGtJ1MoFqYEPrjyYuBmkcxF2bhotZHVsJX1HeyKzq553oSbWTGrh6JhP6BHxC3f6CcRFPAcLZuZbt3ad",
  "key27": "kXPTMqU9MacJuHPQjXAhgPn5fXjFGXtrqRD9Du8rVXDVDD3eQQWiPhY336EsZXrtnKbu1NvmLnE99pDPBWF5aRf",
  "key28": "4UiiVS8HsXQiaGhz7ZtEsPxwYpm46qLXKeJdjDx3k6UXmafnJY4JdpyXnj7v8wvZohS2oGue9TZur3DXbAPCp94i",
  "key29": "oy4uJCmgKtKKxTZccGuoZqok8YYRtJVPiXv8Cp8aHoC7zA9KDTSw3rt1E4esdZbozofEW854FgSq2NSvVK5HMvT",
  "key30": "38XUQiHhN8qcpnZtTXQVAfk3Kb6HtYojreytT3FUjjeeXcJKcAGQezQztfH2GgT7TtjC4AH6XY9XaqFwYgw9LhRE",
  "key31": "4qxa7gaxCwiDQBoCv6CLo3VZ2yj3NG776AZcXFmetZxUffVdM6bU6yiwEAXsS2VqLHmj5Vit5roo9kc3fnwEprJC",
  "key32": "5SFM8xLBRRP4CmsSx3jTDtdqcDvTfcMw8Dw6pjy5c27v3BwhwXrS7ez1BPDFKHxBFpe6vuTnGLK1ko1mFbPcjq5H",
  "key33": "4GqYe5q2FbhV8dhLVnfWPYB41xLYELrAQFvp4ZmcFsbyE8PHgvqD4ASLp4P5ufVfYmBR6zrvdAkwsCpuWkuXpfqU",
  "key34": "3WxqKiWa1P2PG2REratrQ65nKEmYuVRBXvW1gytA6NnytWSMrVDyQhM5iT9gT3HKSvdeE41E2JwnvnfyZcXQKjp",
  "key35": "5UuB9mjdRuKsqnadPwUxdRh8TJxRJkF3qVquAT53L9uxHmeS2S6vcZLHndq6kV1b3wyX3SPpSdu3U6g96zFGYQrU",
  "key36": "2ncHGLjHa8zwUpRtKpUML4ahZ7KfktUPAH6tvqjFxqrx7zzCDWGv3h9D9z18N2y1ky5oG5b1HjJMkMfm9U5xkJYg",
  "key37": "3airk6R6icibD6mmhiAfbvW5y7y6NXi365rbQJomWnKtshmAgTyTo5MRWUUpp9hZw3QgDjtrEeoqRTExfMURxmsC",
  "key38": "2T71vsbUuk6PNYGraAoLhSZUE9t4M2zVA6fMbRyoTfthGGnKGtZkWu7GwJKyYdWxFBdWNWLQG82iieQDGKwWKHA9",
  "key39": "49ZvayouryT4Hr8vdPysxDHm6c6qMatrVMsXm1DxU2tsnvxtTkkKquDJLNRLmwTHPvT7uvmjq1YktdraQbnJpa1o",
  "key40": "4Xp4UfchB71WUMLf9SXF7KjuzdkA9riGgeeyzUg3ALB3Wcke4ps3hnk4iXuktWervkhvLGivnY7wHmUG45vV5H6Z",
  "key41": "641G8UrtDJ41gEAuo8foeYB3adgeJKwAvarc5Nw3P6dxmfnhsJHvSx2rFPpuZ4GoEH1J3Lum5v37vUULQ4euHtvz",
  "key42": "kvwkFmkWL4HyLaQ8kZLGvHQNZ2V2qPyt4aaMbRHAFPE3xNUqWT6A7T9hYNJgDeR6YkD7d6hZgqSfLzbfC1VUKR8",
  "key43": "293K1tBcfSMft3z7t549PENihbrdRcQR1qUfqHspkCx6MypyaC97Tx1Jm7GMRunCVNjkxvW9Jq5fBKShM7tcs1y3",
  "key44": "44bwstc5HwAvibXgttuytbZ248GAqNAxuybDbTHMPhBsRhnPYZXq1GmyKu7iirtKdNhqbdbGsAPuFFGrjrMgiZ4o",
  "key45": "5sMVhKNAyZNHDcnndQaJw1GHexaBtvdZXDsJrcCKcsAVurXq4oWTRUXUgGgpYeJWQ9ShQxsfXPQwenSLLUTyMhPC",
  "key46": "3ZSeZPKynv9ZTkG3owJwsW4Du6sMsNdPEYFur7gCWxHMon3pnj1yH4d3F1ZPZ2EswsDD4nJzAiycFxCNYhW9Znft",
  "key47": "2XxvQZ4XmDQwTSD9RQ6ARYoxpRC4uNn8Ao86GeoTNLyDUoaEtB1kob5s89gVaY6wizP1WT83WhbWozrqrXmtTgKY",
  "key48": "3KAPBDq56UDsS3NUggLdfht6rpRi7uHQwF8MDq4qr3a8jJnhqoV7AKEqxpaYZGJmay32bnqxq1YC19bcpHthPbYJ"
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
