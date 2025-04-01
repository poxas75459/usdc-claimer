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
    "3ihhqAikdgTnQyDQKP9HFrBgViGAuTQTkaha93zwEG6taXUXJnQiG8G48npGHiQ3RNDGgBdb5b79EpqFVM1Cb3ZT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Krqdj8sB6voPme2QrD1zKgGRJd5RjkmMNUKDoqbqp1dPJkCHMRW9ByeY9TvTi1xLW1Jm4iEjBVsc3e4GsdopvQ",
  "key1": "3ACDwUdH8dyDXdyW2gFcCEcZWk5rBwYhsVwX2g6w5CyuNtVrp4CqPr6SohhshH942hEKbZpDJBSNK7FDjEH5RHZY",
  "key2": "5M1EjmWmFFANKKQNtAqpNEyLsdtQ46FsGsZSykSmBaXpG8Tbq74unNoArzi4vxUxgG52yS4jQhzRoJS8LWquvCSq",
  "key3": "2wKbhphdgs3ibFUfdc5qYzppwgW2JEA2i2feL9LKzMtritBLha9m5xdZ7ed2sSpQ9oLfsXwaYqQsuLooak8UM7YM",
  "key4": "4hdi4eVAKH7TE7r1QZrhwQCGZmn2rxCsM5amdzwxZsLQJBiSiUhs7a3v9rXqP3DeXd58JZSu1kYdNiEW4aStXgLf",
  "key5": "uhGPSGDxekzZSMmbJWqSBrEhwUNBEZ2p3hp3ByCoGXzoxtnwmRygnURxoa35ddLQiWf25NrVbCdyac4fuHMB2MM",
  "key6": "3Gh7KWayqtfPru2RDiLttxAVeBVyWG1XVWpd9m1czUMBk3ixFxVo4coY8zU5D5fNnDGeeVsdod53Sam8hJeN1t9Y",
  "key7": "632krgpnCCPUQEUpPgGKFfTq4kYAvNGJ3CcEF4uhGk4pAvXZWoAY5D2g4HD2sZrKCRzUj45SpTgSALEVzWSoFApV",
  "key8": "4k8fiS7UqaQpkiG6KwDTH853trKwsQqvkmmCuVnX9obPzu5chTP4hN7Mso95TnQMbu9Cdc1QyBYzaEFMdZuRhHeK",
  "key9": "5vUAV2XsWLU8wXkKCUqbQ5mo3jrnHNmes9nnu1Sre4zNzzHvA4nKizQ8aX7UXRw2HswzP49tyxHwj6JDfUB38b7D",
  "key10": "j1XGeVJfqJUch8fkBmtznX8EjiNajG6qGj3VyVb6RfkShPzMh1QaX9KFcYeGL4HUk4Dw8NU4nasARw6KjKbaypc",
  "key11": "4yZ1hQ5Lu13URms4EpnSgQN3BqsTTSZMYCxFREePDXBcyjAXFcUhxx2TXbQp1DAEk7tq3TXYfesa4kdkUPCeH1zW",
  "key12": "4pkumxRECdd9TbyQ77F6DHE4CwXc89c8xqj1BKhXshvLVAKthBXYyYFvVvAdoEGEJyCJwpUso1b14RUmZ4XhsxjL",
  "key13": "5aMRdaTVTNvjZQHQCAng6f6FqvsiHREfhhpXN581JHUXuTknLUunzr4a3vRZmz4bNit4GMKNfQU3zEWKnhPwdE5C",
  "key14": "4yEo1JRhexAWXr1xZBZk9bqW9A1iXpXpLfnN9pVS6ZK321GGJMc2dGgJa1ypWzYJjXuCbWKFvj8REz5VqScVP9Qf",
  "key15": "gXC2jJ1aYnjqCfCC6YQH4eVXu59C1mwRgebi8y2kXVAoQbtVhdYV57BpCiV7nWpV84W9ENYu29AdLjmPVCQ8tiy",
  "key16": "3m89PQuzw5F6oDwye1BNopoZFQNLUWbN1FmYRVDHjd8dHmNa5gULG8HCZ67vQkFZHfSBJcKDNe6uVvGVjGQwY1HF",
  "key17": "5aVzuSK8cu3dboYi8yLEun1bNmJHtR8nBVzARdiskvqQz6DBcsFZFjJwZs9guhitNj9rvqg2L642JWHqnFvAXdxs",
  "key18": "67HDj6iftamb3UXAVELNgypdtFWyaCLkUKnDUuEtKivyoxLDg3KR5sW5DYZJbjuPdiXZfRpfwwaHzWKo8YRjKBYf",
  "key19": "3f29mCdf7KxsW38VUoNPzn9xgxmmsnuTLg1uF97CSBY4iEeqY55qFuT7XiBCif8TPgYSMpQKMEBVe9TgPRhN5UUc",
  "key20": "3xgo11CgdaEbBzrwCiz6pPdAXTk1S6Qnhsyktr5NQ7TCtahgVrCmg1UJZbWkFKyo1QsWQVG3vaAQBCMBafrLiFFT",
  "key21": "3wtmnf67cwMb4ndJKBRLC6MexVdyLziNbzFcgWvwvKCMboUJ6ss53i9DUe7TxnGPivwABANqhvADrpgLRx6omy5g",
  "key22": "556JdJDyfExDLwkNc1uEbgSuukWbSoRfuzpLyvgdLPH3bybRoFBxtVnd2BZshMWmx1ozedsYsMQ1Y99zVfUJpCnm",
  "key23": "X7PmE3W8xhb6FyT5z9NtyhEawMprT76kDjzimvtrUiKBKxJWmNnTgrmiDuZ9kVnX6cPgyqYLG7yviJQW1bn92CN",
  "key24": "3RCZHTyd5i3rjEmdwJKux281QnZbJxm4GAMczpLxKfB6sSaKvJJM5cBcGbRMYwNiX1et21ryzDE8Y6v2xctxS47B",
  "key25": "3ZyvftvFbZoX3fD8EoFpP8UU1B1QtWs7duCsX3Z6WCrduzdxoXDRtFE3W3rhcirwbBPE6iZa5wMCqVdJVgc5Gw5T",
  "key26": "hrbrtZVT43sxFcCgAmeh2qGDtWtGqBBuM59BTDyYgD1v2Ujeps9jxX7UmvF4UyN9LMN7S4KChPZQuKTDhoBuExe",
  "key27": "3gAgtgwjSAt8q8mmiBhss3GsFFf4M7CFvUvLjmZsCnsUeQHFxnkFZoGfAJoHDEZFB1Bi9xuKAJ15ykdaLP6nahtF",
  "key28": "FuELP2dRRTs9wXS9ZitJNbcWChnXteKejGdi7KvXpRRCTmnr4xvMMMVZSKyDwVm4QYRWu3ysXZTYSuTpbgQkmcJ",
  "key29": "3eZvAkRoPW1Lvmo4rdJvWHf9F821ZefY3kEAyczFYoDpGKLqSyDHr1UHWaQsNMd1QHozQVrNybajWpQawdfRNz9y",
  "key30": "wZsPaqh1NHZujMXJmQQ697se8qJZ8guiLRb6UP3EQz9HaYYnB6B2cS9ipzgot8ksbqGpquteQg3ic8AudwDYhy7",
  "key31": "32rm95iXaaAWkjTvxsHNoVfHFUeMqqXiiwwVMM9xwejEh7Vs3HR8SasdokrXErH7rmvvj2tnM77baPWUSs6uiBWG",
  "key32": "35yNq2PcyXvJczw29RgtWAj44FstPsN5BAxbW9ehAzVfxVJaHMgxVZHqqT4mK564rTuBv1EobqnTSsPjSgbomezG",
  "key33": "5xLW9ABu5TBcvnp6UCV87gr5k8XX4MWiyqbgskKJx9Nrfpr4PuckMd7AToDDh5W8Nr94MdbMXbgWiJNxyK9GUdt8",
  "key34": "5q9sqXhkKRBYfH9NUMjdFauE9y5r2b5n7uyEKckJB75UAZFwq9rgaxrzhNNzQaKUUAq84pLw5866Q5iBCd93Gce1",
  "key35": "VfwahWrL8uUbdU5FvhBs832LvCtDJttenaLzV2r9m8rrGvmqLBGgWbiMGMRJ4xfKzwasMFUsyXEV6dHytJYW9FF",
  "key36": "5UwMMi6n9t3ooiwoVdoXRaxXqUy5SdQ7vLRZf4WKbiT4DmMMAjc7nCSmKJtY9aUoHirKBgAdoR9pofGpKjshmnXg",
  "key37": "2fkEtEYCEgbZQjdkdG8UHoT5hMg6AgvTwyLAg7ALXLp9fdvPfrZ9XT66bMSQibszFYcfkFHykkp2tY6t1CtW4XGp",
  "key38": "4KZcnr7jfc7fii717GcG7YKsLQotwDo1XC25azco9FbWuA1FkVES5gFLKG16vKPs5Kp2Ryruc3qJVnN7Txv4JAkS",
  "key39": "mLYPTJH3QJdeBKxyUVfusr86WArH4kmaMHGimapeqDX3kGQm454K24JQ3uVWFFsPPhSbaLvuw8cK9RRKWQF8t6m",
  "key40": "4zcrqZdF2qApmQJRRP347NN4X9zko8YQJFjzzAiQsQ8KwFxmbyJLqJ7g5wBPyKWbGwbgUGigxrAks4w8b6qEeFNz",
  "key41": "8afLkSM7gW54vPseeoehCX3KxxYWKyBqtipWTPnGGB1Um8hDVnxTknyM5p13A1tM4L98Bs5775Dyf7Pbsa9u5VJ",
  "key42": "63yRv3BGVG4Rg85ZoMw1EKkSuqpVLV7hFHWULzBjX2tFVjbFbgbS7Dfdq8TGg16SG5Nd7N8ipvVGPBdpjjk9TUfx",
  "key43": "2Z5CyNZNhMmFYTvcKuorGEYbXYDKNvBDkWP1bn4Vt42QT3TfyqpzK5W1no42W75hbEZeddppzF5h5H437B5mNkqA",
  "key44": "5x4gUdgA6rcL1dmriLuktsXGpvW3vVu1FdX3WBfPfofR2HTXQae1N4a2YDSQymxW5pzAkFqP7f66bDWP1DksPBgm",
  "key45": "2S7MiPb11gfJ6kZXnv6AyTA8ffsvpWfujbF5dWrVNsorNyLSA7Gz2HKieLF1ExbKvDsCgFRh6SbCRBJXdJDjTUH5",
  "key46": "2MEJEr4UsVnk36FgVULmCr157a1riaSKY3U4Zg8ji3XBza1tLV5wMFQBjfv1ALJCN6gmS7P7BBHJspk2dAbTVCsv"
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
