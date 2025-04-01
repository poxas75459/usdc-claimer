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
    "gVcUy9H1BiTvVLtxViHtcGBfCURGQcdMLeCzRc123xHASTsk5L8q79A82Pz9w7BqC7ZdzVHojdtmTYcofdYkC6G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EaRiBTPw83g1q3Kvi1uYvkZq5DD9gqh6KPmeHUiG5RNtaekeUNzZthNQXdR9QYwRu8dBf1aAkLF2Amcag9wB2zo",
  "key1": "5vqcne7N4s3QSWfWkqvN5boebaK8qvzMjkpurw9XhSgYo9crAufLZBsD74CmxcakaC8CdRVXH8qR76ZFsruokTFZ",
  "key2": "4DQ1zQB577uEuA7B876vANRtPdyPJcZEdwDAYR9KLWBuHK99Jjp8CrbSMfJpL1TafaKuKGRCkktGYSCfr1DnysRF",
  "key3": "5e2ZQHrFX5w64arxCAoYFGxfRGE2BEuy9Y7Aw9mdczpE1FKEQoxqYWnmH6v38HSQBVYEztskPAjEV3Edk8GwGzU8",
  "key4": "5Los9Jh1Dpk3XUUvvUnFQXjDhWHaGrPpHvyvLkLeQTeykdjL3gXsQv4t3V2xYe4tHzTpcAKP4HQkz8XKUR4Dn9mS",
  "key5": "xbYBJ16kbze8Ab6oE4wDDxSJV9ik9UTcazDHFx2YNzNT4q72QNPs3AaMb2wpYoceCbjPJC69sRNd82XbeXxBDXr",
  "key6": "cZYucSnzvzjhUNTRbyMsdvjTE3gTphwiBtjYzgFJJceiGabdFw2aJydBW4bWgerhru8DAjaWL3QrVo91ca4q11N",
  "key7": "2fQojtbyGu8HYcRUKAdW5ZpDS67X4pnXkkD653DSeP4BjQswXjEv2TqT6JCQjyb1XYvij8FygNiK5giFvwsMSUHq",
  "key8": "4gQbo5iYJPLku9cWuP2HC2eszxg8qxqwq8913GKUVb4XC5PQdT8dSsGW4BXM769h94danZVZq9Puy3hPa9uiQdr9",
  "key9": "yjMv54szDzddX1DVFn5qwFLZSs4iwVFU3i4W11RtXRVN4RiQtxsuvMQ9mSsVcF9sLJbXR4yrjNDEaYSp7Fxn9su",
  "key10": "3Pa1vRVGT5PSTfNJgQm1ADozK6yN2NZgiMLVtYai4oaCbzAoYVeoRTcQgHTe7oKWArnopB23Hcxf2dVkS9vA6Bot",
  "key11": "5D8erMJYESxWJWtwijyWoy9A2hcKUP7k84SsJmkMsjwiaePbC8ApVaXWBYn6NriDpsinxNnhmZWzxqfqzwGerPx9",
  "key12": "2mWQuTgX52LMRZaRGRDi45HY2WNaG3a1h5LJyBa74c5FSA9Pw1styenvQFLr3174k3QAyTrx1VSyC9Hy4DosXVL5",
  "key13": "2Wv2H4gDupm62sBoWpjeYPJroxnGw7RcKyk3i8dxB7WL8cAdeHQXn96em3acEahDaGPSM5bYtt1Spf1fJPfTt2Ex",
  "key14": "3pTjTGQTtBXM4Y4Em4UgzDWzFbYV6Q2sJEJqkBAPRatUm6sNaa5tXEpc9v4wB6EXarDyDmbMnyBmApfzFF1ZipZo",
  "key15": "2P8REsK6Erpmef1DhvrGEqUCqy53MrR2pyPyUzRTz5Wvg5CrPTrQJ2Cq2NQSHY5d3ywyuPboqEpzErnwtE58QMpE",
  "key16": "5b2ch8ikHDCdcu2d3tH31c1fueCgvM8kmxasQZwSou8WzW5WqdKm7ZzySdEqWDjD5zBCL6CkEsyVMJowaP4ZKkyK",
  "key17": "4dnCmPJvbRe6H1Ldr56hq6BUrc3DNDAQnxVfYDbrGJdYgUPrxxcQaagsJWac5xz2eaQNXTnQtwLcgywxYsmH1sjU",
  "key18": "3gJnkeEWPr6arHnR87hMpxq3ZVKoFHP2V1uNGoFfAiQtVZpa6SSV75KMYLByrAbXhbwuXePcYxLb9JBzLaThyDmx",
  "key19": "4oPFFNbNHgG1cjjRJa3MgeJfSDkSvZGd7rRSA5EQoJtHcftdvGXJpQkss3jvopYcpBJAj69qycrByCfLAV8Sg2sV",
  "key20": "5YUNJMF2C839zvRr5PYWMPqkz8PGz3ZQju3PVVKqLyiqsBKHw94JSJibkAUT2eCuYk3gPmg2L2NDoV5j9onBHNeR",
  "key21": "3vbbCQVFjHKN5a79h1nyfbVuHTWDjcPamo956ViUNxKkgquCwhJsmRHYi6gshTyiRY8siNuZpvRCAwXa2RZ11gbm",
  "key22": "23R12aCqbryzkvNLsuCmn7XzzxdAmFuwu9SZ2Qrd85Xzpnv1xKDvN5A455hy1imUXavx6bzUcah5jcLo96eZUDJs",
  "key23": "3WbGaSsm7yMnazBpvCwBKr7sXYXPXX9HqpHfsm1PJCXDW3gx5Gp5hbHh1X2M7HU7zWCYAGFoPsbf8iHy3DcGq4CN",
  "key24": "4Z5nHaEKSKEtVq4fGcCBnsizEtV4UDMA3kUU8bWFRe6EwW2Z2AEym6zddTHCuwWZmHSZYreLoSahYjMoFoipAgeY",
  "key25": "63GrbDtkwKZwyEnReZ2t66iuML8JV9ssUFFiKPSYF5v62w7yUNJH2SJrhZ5gdHyUtNJ8D3mNuFaJXkZbr5tBpY9m",
  "key26": "455xQ2z5XRMUuC7fXUaBtj93xS5QiZBFuBP3kcLRDXYE2KFJo1GHCK6aBhyzjHu3VqbZeFYmi6TX9RVgZ2LggQtb",
  "key27": "4yMtWneYYNdYYVhMkZN5ynJTnf2m5gDK1EPr677rcHjwV8v5ughVwEcqZYWTYU7oi5X9oqudrBoLB6kU2yfLUCo6",
  "key28": "2XEqMBaJ27f2WsmL248Y9am9CzkLQCUEbo5JwPHDVhHdA7vLrm1LQ2M8DDjYa3SU1kgreNURpk9JQHbKH2CpM26C",
  "key29": "5opX36jAcTKBcQoi6Why2kJWWrCZ3Yj2GTdLfdpmpVVme35MZ1Sw3xP87MqJy75GGH6CrxTVwKN7MM9LGr4uemEu",
  "key30": "34z1Mypi1XKD4z8M53uBmA2FMVGp1EbELz363pxQNvGkaxrWtCq9mQnfYiX9Mg9WTzEdofnZwYGtkmoijRn6oSXV",
  "key31": "2xYFweiRVmaBDxTpmfHXwAgqyxRgW36QvRv8x7Edd44EM9McKFjRvxMHcUeknVC6FyojGtC78HWsr92yDfFp4mbH",
  "key32": "2FYjfN2yfYkk5NeiinXpyHHE4oCdBs1n9k1CM19L8VMKChWpdRXzNP9pRb1U4cW3PRQ4c9q96DTDfiGYuwK3THkU",
  "key33": "3ChRxSyfCmvhbmxM4f9y9ZfjNksxB8RhBMeyJSPYgpxC1aPWvncgQ3RQFp3YbzowjXDWiioP3aXecZVRqnMFkr1X",
  "key34": "4dXxe7pd4sutCN6r4ogHMc1vUaQWuTUs8cCuQHHmHVYc6wi5D4QgAJRaHQqJaErmz7pfsDFB2wcAiFJBZupSuXam",
  "key35": "bHbLc5biSgbdXn7R7q1YYfyrpV91bdp6AU7n5KWiSF2Bsusujb4QZAoWMiq4vXEF65kwRxCah78DtivsHAJvyKY",
  "key36": "ANeCNukMCxhybyJGRpPv2MHGkeDWjeVv8soL8UaL8gigvtqWVAJTfgzYmz7T2aFzWrEMsrxWkZXwnGXXFabTMpc",
  "key37": "29g3DDmfyLZiEfku7dutfjUZGpJYbPEpNoWSVBuNeoUee2S9WZKQsVLyShFboEA2N1ES3xjEqivw36RCzLeaGuR1",
  "key38": "54SAM6MZERJrDMkNeMSxGryYkVjzMmWWG4ECgrq5niyTgmQCweoVwH5jMb4cxBQe2M8ChSX3A89Qyy9Fs1QneQ2x",
  "key39": "3W8ZKDFpsvNbG7NSYtGRjCArYLQzFoiaYnJtiQHP2J5EEmo8yrYK6gJ4r24h85UNCni6paEcRv77Bm96C6x8vV4J",
  "key40": "2JwnUR2zNfH4q6KsFkeHPgX6wngiVMRXXsu3yhNBXwpP82mrR4oJyUayxRrp3XKsjGmWk5VmSD3p14aD3Lf42N5z"
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
