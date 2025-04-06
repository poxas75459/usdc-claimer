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
    "5947vyyb9P36jQXYUqdYgCfZpK6bjq5JCBbA22GXmhCjwfgwXGRCEb3LTRpPvrPstLRjFDp6BDCPSvjw8Ktp4BnY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zy6gK7NLaqajyCtHTqCfdx9VnexDh8V1zgqub5kK5bKTcWmaAK5vRfbCftQr5YBFeqfhBqWu6xr91PhJM24uJBU",
  "key1": "4ZGyBzmxSxmLATTvyt47cpEvhqCByaDSLX3XMNdJc7WrNQ1PagbjE87ZBMbw6rzPzEJChVKcquymuoutUYJDjE8",
  "key2": "5YiSrniQoEaBx1QdK4s5nHe4eBQpJv6R3fRuDpUqajW2uWo8c9pmkLaz9xGNyUqRaasAJpffM7yKWGXidF3EkboR",
  "key3": "3wETPxGDZN4AN4ug1jxmp3v8NxYBvdwiL5nzPLeNyiCv8nQLPVJD1vkRJBEC7qfrP9H9u4hvxZacDTA1ZxFGG25b",
  "key4": "2ppLarm3nBCwKWYJZS66TUGagxYK8q2i2E8PbNVVtXAdExs3Uf5p26Ac7jdrCAbinNzva2jqFFunv6SBD2btTyfo",
  "key5": "4WkjsYawapfBxrQhXUvG63yLWRKxsEx4vw3Z6GDrdm5v7ev3heRjAiuCLNHNLHpuXBsJAzRDbuRM76qqX3cL4EtW",
  "key6": "3d2JLMoS2L9oxs4z2tzPjkBW4zCV1nus3fXX4VXnpmqTXfK8CJ8YCMVukhPF3ZNK9UGNYU4xio1Aavd7gg522zS3",
  "key7": "38DEebjWtUf9eTyhtZ2wfQ6SgRzTo581fVwDaUF8bBk9Fv8tqi5Xm4AujqbvbcLSmvh4QH5SH4KqsG7XgKVFdJpo",
  "key8": "4W1MGDodeHM67nokdxVTVhqXtRssaix7Sgv85bkmtoJw9ZbMqZRGu3o5oj8T4awJtmX5tQEQR1e1j9mDyf58YLT9",
  "key9": "3vKwmBEx7rDbCUpaUAFwxdAmpfWzCdhCMiXHxPVRJS8EYePGpxYNaze6i1vr6prsYTzpExh96wueJeNQLrW63NJj",
  "key10": "27gVXamFZRXsnEsoEpXgoRN3nw1BZ9pYv9gsEBcFVzvSgVVjeMSj7dgC67d6zjUECfCRMveyqX4XGDyHWrvCQy8D",
  "key11": "5EkHGmx3xcnAGpWA17HTN6JMu5FTCA9HTwvVYtnKuJZYRsJVmjh9ENbX7pKHosudDJ15jhGewiFF8uUtHypVWaxm",
  "key12": "5cvRSUWxW3ac4LCCFv1ToVahhDMZkwz23qy4fcBt6MUFJbSKo72UPosCcnJFvuLJQcXhFdDtjXDSCUKKibbYvnD",
  "key13": "GypdgLSRDM6AR2LJH4ofN9UgbyH9kmrC8evXZ32FdqLyVbUgE2TC84mBhQNPsg8Fk8HiK7gTsPg13okJiccSfus",
  "key14": "3zx5diNptaYLW6KM9EK3ifEN7JbLa5oUjSWgtxL1AoAsGeMmsfDqXGzSSdFe5jXBZcUoEg5ugo9tvjR18SyHwpPp",
  "key15": "5vZTGei7x7j3X9rYddYDKS3B1L9P8oCrNiemTCN5ymtsQZqbVEr5tVKg43eHBxrpwLw1aHJFNSb5Yjc5kEGVSFz9",
  "key16": "3RTeMZ3xGTW84f1S3JU1B67oAGQmJ4qw37FsxWVspdtVcfXLA1NLjtzgn9wqn8jj6g1jJAKFYCSPEc2BTcFBBYPM",
  "key17": "3TsYR8MuMtKNR1aySe9NFbVs6Br5Js2d7rynLjRtubrBsGTmHJym8rid2TAFEmMJ8K4YJFrzK4PjHkr6dstGfk6D",
  "key18": "4NjUhdxpNK3Qi2DpJ2srQ1yRuLSns6nXRbfjHUwK37jC5sZcKRVk3a3Ldvd8SJa7NpSerLjywFJ4f3ieHBhNKCDV",
  "key19": "9tTASA9tzxRsW4gNZeqnUpHNEp9MQKP5f4gtHhB54AyHzgt5D4FiJjZmKmGW1NLveLoC4YgUpr15ZW34b2uhZ67",
  "key20": "3vBDi4cjn1A4jKaudvctdgeHrBRpdetVmxTEZHWAi9ouCcJ3t7eUfedtCBJSUSPAn1F14DZKaCZAWrCWZEokEuSn",
  "key21": "33aXeRnwgv88CYF3v21M1YkHp7hPLjWNkD6Yk6NVFoDjn9bFXjL4jf5FX4NLjsgiS6qaXat9nrpRHuLKDDbTbser",
  "key22": "XtsFf6zBfBiWiMXgG9itQ7pGFChuGEh3MFUDt2gfK3VDPKSdiwghGFksaRhbdNix4eABfKn2gCXwgMMDGVUENDM",
  "key23": "5p4VZ1tjbQGgDqzAhupAKxjnseVSekvam7cc8WCjjXge81tByRUyXxRMqmdeEc8pCaM9igadk7CN31WezmmQ7xar",
  "key24": "5uGbzPLED3ktjXYAQn3g2yZaNeRhBkF9Nr112wn3d1KGhUejHmu1E73yh8pipZyCDaypZYBhvMa3LPxuinyBicWN",
  "key25": "2Xvqc4NryKG2BZBqm8SPam2hi8Anujz31N3PLhm6YSFLXLwUoe19ae8X13pZ34HrirKYv7jmL5wgx3GtKbc3NiJ8",
  "key26": "2Es5thZncS75cJchaedw5ofV56Yf4usADU8ssBNfCmv9BDvoXZFJu6Tfq9BZEKFzdUZC7afv4gEcfG2xDW8VrPcS",
  "key27": "3yrdULW969rfWKXWw7phnT5FTJCn8cVUgzKNzghMyZfkDsk5fPDqJptvVt6CoXBkDK3funJ8bWyyoWCK7Q4rXtGj",
  "key28": "3B2ui5ci6Qp9rWxQHDbi3XDeUamoFuoLwC8LFi9wYVmSRyMyDSXLkA7VqioS1DhBDVrP9bZ8fxM5vAebLQDB24M6",
  "key29": "59CDgoSix2RywqiX65dWGnXmZg84BzFZHtgVPNGxfAnbt7SzxLZkV6BnQFKCEe3ddLb5wo7NryKgVuvQq16fMKTB",
  "key30": "NnNS9VQwbqXrGw1CavV75cc1rT2tQJpqeWXVuM7ecTJW8sBatvMzJP6k1LVZpYd51XBjNTVu5Xd9WqnweCuzqam",
  "key31": "4W6H4v6xkdPwxK79Z74dYpEcZFkLvgMXQbWqRmeia74GG57DVqRiGWizgffR6mabdU8Ngkr9LTqbqpGHQ8GwnmaF",
  "key32": "2bwfMHdGMK1wD3NBs1EtRtqBLPW8kebg1fe1pyg4HjGdKV1AQmXwptGVV9kKBYZoh8eojrkhuKM4WgSYmFreJsGa",
  "key33": "4iUKKd7gL5pphWxuG7DnjkVYPUiZbpeLYkoqbtJ9nnNNqb8RS9cKGmHMvVyx25RCaYtpYyyoDqWnwxvsWbv7HFjf",
  "key34": "56TSHZNVpRv6LEUwJFTNmjp5LDr7BJCmf25UmmPTFncf2KKMU58nTBdSskxMFBkRFSaexAEEJndwwW9oysNnL8jT",
  "key35": "4ZqwTMufmQx4v1mpPxPS6GTFZ83d61hmDHSTZvSCc9viNZXSsH2vViJwgksz4XGsrf1PSUReMjBghoGUvXeA85Vw",
  "key36": "3N4eeHkdzKv8mkBhx5a4NxKwyfghL6MVZGREvEmHwD4LbwVY9UDq9Ln8QFaUrXj7M8jropnhBGprZXtL46Y9VjQK",
  "key37": "324WWWSnp7B1KQKu2y2LCoaj5WmmoXZXvXhaZnmyugXU3uW9USpebHKznVEV5keG22ndzGWciAbpmdZ2JQoEwW4J",
  "key38": "24Z6JFv3kqUeRo9iKdqGknGMBRnELaCjQhwVWx6hLxdsUoZtZB4zvgWwVdqJDhCgpoQ8ucsXDa6GzogNumuuHSBE",
  "key39": "3CJQMVGg7QTfkw7yiyvzhT8XbkvdS3P6Ftdhy5JVvkiKxZrxRbwuGGMzJTLtTKQmjFJty3zA2Xj7xUUCxeai6s6Z",
  "key40": "2eqwpes8CDt62cP8VigLqRh5zeQR9o1isoPHSu1QtDBMfsb4keDtHcUYmqWUD9JSEgRNyA5pYchyx3PcvYvXqmnv",
  "key41": "3DWhK9ZKmEHbtVmR1YvSUdf5GjuHspDzyqVY17ZqXcRLbq7SKQGWf7c68HdpcbUvR9HjhvmaSQdideZrWQvcRJWu",
  "key42": "2tJy45D9Ln2hZKo8PAh3MHehZG9MRWwKeL4EjxBZEHvZ3yQdPcqBtXAgK1wy4TS363f5oBV7Tb7g3X8oZP6y6i3u",
  "key43": "3pAvBcPuCuQij7DQWcBfQpmGocEoZ9BEP73mf8mYsnKCgrHnkahaerk2Pz6spGDqPUCd21AB9UaBuw9uDpqyPc5R",
  "key44": "4xjSzP2R1sn2eh5VRah5FAXXUF2tyTRHFpoTacjsCLYKrRWu54Db8sBTPGpRysazSCBYN7iQaAZPpVNuPkaAe3cw"
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
