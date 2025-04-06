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
    "41hre6WKu3pyRibeCZtLXi2KE5isKvMEWkomL7HVED56K5SnNXjJeiixNSaaiQ1QnBuJhPo2NB45T85g2PxwLoxp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2V7kUFifEozq759XYYzcCWHAFhSShDyJphvhDXUWwbU5oVRQJEuo5jYNcRvbrLgQqVZrNH8bTaKLq1gsQw3HboQq",
  "key1": "2UfwQxRuKRgNBWErbUbapAMg6JyvK5LPxx3fsqz6V9UkRY3F3XeiL5y3Ey5QbdGCDi2aPQdJ8cyQZnnnBbFuBEYR",
  "key2": "64d3ExjiG9gm2Bx4GBkPJyBrPwp7gsDPeJugTd1M7sn74dN9BfcwahK9q833ZNJM2pWVKemLeRhKhvJ7LGVzzRbY",
  "key3": "i4DeXm17AELNYv79uZJnbCbcS5WtsQ4S8GozvZLD5VELfs2x753WuDPphupGFwLjAMrzkkfoMAM1XZsoK8TSZ3v",
  "key4": "5L9UHsXx3QqK6GpJjf3XeFgzZC78eZion6XFF2qE7pdG7PyT9MHknWzH7spERzi96QER1fd9WLo1vUD26sbW4nyF",
  "key5": "bkFWmbka2pzH1eLHkuGzH5HtHu9piLwy9G97Ep7cuMieuPE7nY7tyvjn2LB4TXp7UEW5jmXzx1dp1CVjaZdHDUF",
  "key6": "5xWt9tQAakP3dkXwb2G1LWNCGbsuXQNbBKnYq1BncajruUKoHXD7X62aEqKh9uuYLDvvMT44vQS5eZxbJ2RT2PvW",
  "key7": "28oNje7bENKSDkSGk82KK547bEaU4c6kdQQGK5DRJr9bZrRLDLQKe9z1YX58TpHRoAqTDqhmUQqRK3vj8z88yijH",
  "key8": "3QHc1bWn47hvDhWLBEWYu1oxmJXUD3dpq1XA7tBqpNVPfHYPJfBbjDruY4kUrLA6TXJLhpnsCZXz2HoqRbY4x7Qw",
  "key9": "4aCcsZuca2SuRCxKRvqR1wWCUivpZUecrRRNm9z973db25SoDgMvm1sB84pDKp2cxJjQg3ubmrKi4SiDzxirvrth",
  "key10": "4tEhRjE8L7A1nL6ECpPq7EsW7mYQFPQJWkUZcTwBwZWpSD15p23xuERSKjQ3wEtHqqj5KffvQBjHitcsnJ6iiMXN",
  "key11": "4pUdmSxKh3qVHHWCLqjnqaGRk772dXgFmFCPtNSqR2iTRGMpBR6g5iaR2EXhb5st3R2jnSWDeHkM6ondMQb7tA2E",
  "key12": "3TFffg6hxnQUVqixMMDfvcWZdFBQipr6HNVhuD5WC9fpK1zoMiQrURyqakgs17GkEMX9tf13oUyxc8kQh1KhSVaL",
  "key13": "3T7obaSz3QwTnzSNTdZmpNt2ro2PH9VmoZqwQHwU6o7WjbdCNW3J9LxSTCiRxanKzBbTLA3pzGq56njPh4ba3GTo",
  "key14": "59E9w5PwPsmuJ8iwLLRrmbNPnm21MDvn2KS3Yxr1eK6H8APdSD3resoMSAM3eJwt14YbcBX5ze7SjUgKfb6vKfUv",
  "key15": "2fDfip2oq2V7fW7QXtneKjBr2aCMUMBvCQ9nXZZx1QFUEpqa22zysQzsX1HM1S5jZZaaDZsA59nPnFZmTJYKuyes",
  "key16": "4F4io1kK8dLBPx2HKSM1vNHf6ehFA1F1fE2bGTP6F3qFuXbMaQAyZpTvnZRAE56SQSX7RkGZJ7qRRhZQf5ejoa5v",
  "key17": "5maoSgXmhdCz2RK2Gprq4vx7sQjh91kSpg1Yf1RSEbL97YJgD8fmvgMjBssy1QhbsDqMEfPuzLd2uDKfNFBno1gF",
  "key18": "3hqDncRdcj8Vqgm9nkpMNzy3DFYRrVvoZMAPYf8HNFyr8nJBdKS1FvwjVLekxv7HPpg6ujTQXqwCfJ6NhBQqHwhg",
  "key19": "2kZtiUemS6HApNPuowpaSMY9BvmJNxtihooHfWpCSJjiKGgmu6Nm5xwcGrAJQR5pN9Rua69m1gnBwPXeYkZkYbmp",
  "key20": "4r8wQEpeYezke5vSNYu86JznKPh6wiapdwbipWdh9bZxLVvEQucu8eYxYGVbKwFyD5SUKEJjvLxrnwsnXq6ssQpB",
  "key21": "2cmD4sgUzJkaEzoWJk3UCCHvGoaQmhbWCiUUPKVvWodepP12soAwnabZ14ZndMsNJXsBz6bCFd6tWzkpENvgPdVC",
  "key22": "4DEziGRt8UYg2rcT6SaWUZFMKWbqeu2bMapwXatwbtUzYzzT2XJWcGCdbqDuZ6a8UMRe5n5QKwD82wGdcmVvSime",
  "key23": "31NRcecJE17mGjUsHdXmUK69z4Wr6gywwESVwbG2ANM7up1R1G62rqkRxBKKCdJwUobK1BuW7Dwhfq1jmyWs8mJ",
  "key24": "4Gvj3AVLvUu3sJdtx5dsjDgqqjb7dby3yj4Xp9Sh8HShpVHEAyU6WDgKHG761RNdoMoVMaxe63fWmjAcvwREGUsT",
  "key25": "37yAyjNPdjVF168i7xXLGpm5myU4HaZyefWVvrHvN8h1GS2kEreMTP89g7Bv1k2Jjri3az4u7mMyssSFxXEF4W5s",
  "key26": "5Dz68peDo7eZYuUkN4ANXBqR3azRVgXZG72P5Ay8KnCUYnLR55pbibPLy9TY8Hj7718wpgTxwBDM8dJGXhbBmVfs",
  "key27": "37pgNuTKwSB7jaza779thhPeKdpGJKjp7sgg7KZYNYWRgjtC5UFH2vabrnMjrU38aUvjaUqDiRY8wk22XwjGXutm",
  "key28": "xmVbpVR8sGq8B65HUtMAdk5mch77uY8m97AKG3jH6MEKfqDV2bo3HSs2Ko59iZYNndYHQ5hNs8cuLDT5yYCSwex",
  "key29": "5H8sggv7cJJAn6s8ABVy4UW8W1B3Azra6iPVcQCsHRFT8nhrK4bimumKmyVkYgkFkwDKmpnHSrv3HS5ksfbScuWa",
  "key30": "qGYKrhwyBWb5vbJm5Uq9A6SQ7wiC8maZS63Nw8KMvD6wQ29MxxEJhgRhgPMV2V5hvz7twFgmc6SB61oqTpaxPYU",
  "key31": "23QGUCJPCtFfCVKTLfYrUC4pF29N8DKmV1Hk4TShoMXzr8AxqpKn6yLMPvPz9252scRMN2E8gP6CzBXTbPzFPU2N",
  "key32": "4bYoAoMBdzAQVyT7Ri3VMkjjYfYE1WqoCNWKDTPrtHAb65pScEsgCMWxrwJDEmaPnexjeGhLoeNUqkK5U3RjyjaK",
  "key33": "55QzEsra8tvL6dhyCoKvRX2wHfv4giSgsXbrdeZuWUVaMwc7vHkcihit5A595eoGD9Xky9ttLY8gkTh3v5gr3ap8",
  "key34": "3zNH6BWEm1eqCACzBtJuPSjVrSi22U1m6vuEk9h8RtVvuVEt1cjbKXyTRf5n5jT3bt4vh4KeH5nUyfvZfyMeDfCZ",
  "key35": "4dquZXC1bTGTWhJSzEKeRqam77Uo8E7xQnkvs8MSD8eMrwYLYJPRpuDZUbBVJ655gZ9WRai3iVm7qhaeKGrRcbRD",
  "key36": "3gdRtwUkSYvQVyaY8BfUxDohxTRt2ye7zw3PNCgzcXggnA7dZPQWRuudfbMDKJ9fELSi9suoS1wiSP97yYpHsQnt",
  "key37": "2Q7YcsyJDDd4xtmWrckYeB75eXWAW3UDhWi4rTtEFttMcTuXqqBD5AryHrJSEqptBa7wWhxgsETi8FC5BhtZNQ9p",
  "key38": "4X8EuVtruf6ohKYnF7QwPpZsu3AfF2sPsy3Fft4dr4Y9WeAQUaahWoKb5XYgwvdG39emWqumvYf4VqyhSxVzcgnh",
  "key39": "4mZnmHfoQX9jrw4iT68mt9Eg5KnmUkTVMz24FhDbaVDasj9C2z5hPpsCRVmwjHhsE4W6wVxQR6HXkgAYxnNzVUuH",
  "key40": "VvRvfHjXCeNEstQ3WWEtcH5vbGCeXDgfUp3nAhASiuKqHYhaQGu4ceTmzXw8cMymMQurePu4JT4AwrEwheS4YjK",
  "key41": "5RVP7LsvaLWzTSyLyP2K5VsDkQLzvTqTdYYnMK1ohDe5jRzuAZy3WMpDNmmkdd4GR7jPtafWdLcjXMeVBcKnTcDo",
  "key42": "32PnnMTUjCDHcePe75naYkPQqpgQ3GgyiDcFWjd5jGG3oi19rYW3P8ebmzsiLmkZiHTECyZPLKzMn5Ku4x8GtNby",
  "key43": "5yMqAnJmdfKRUhbw38MacxM4JNdBEGcrPa8467KqWeEeaEQ5j6259ifK5uMbsXmoKGST4DkRHczvKmvRbSSYhGTK"
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
