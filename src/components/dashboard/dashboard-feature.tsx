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
    "QfBPRHCJ3QZddc9qttfjcAq2obDEjbBWej9JmbTjcLeRvThMsZB2WzPSxdWYpeBb72PTYv1BPZ7FNpP8Wu15uYA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22LDV4r9bnNYBMdtAsL8tPEKe4TtcFdmuroTLj8kGmUPoVm4dLHwXjQ1fP5fZyFUnFYt9HPitbLw6TtRPjcF9MaX",
  "key1": "25AAdAqpw1axR7EJ35YxfQWnibQjW4id6ttQcB6WpShS6GU9mmmQh217yLWRXT1jNX8ZjJDjSht4dFCfr3ayFexY",
  "key2": "3gzHtBk2ryH9sQ6nEqmPo8Y86UUvL2tRaSkvDqh5xHuoKxSeQjCyifAWVHvWdM9jXSCwhLmVDA2w1uqeq7dwGp5h",
  "key3": "3b2YuG6jAqKVSx2Mi8WNFVsxJhjsACqM6Pv55AN4Js7S2H12miadYdzqPVKC31yMCVRSwwXHmzZJpZJrYLxTWMQZ",
  "key4": "2aSQGzDwX9Neac7N5RtbxQxr7M7WG3vqwTPccopajGdk9KEY9UPqutgGUhthD9HDrF7PXc8cGd8woxWq26h5tFXd",
  "key5": "2zUk6UMoX3M8E9B31Pv9wBts6YL65BbYAiNV5XHkBv614tqVEZm62LZQsBa58CA8Y9eSMJjgGBjwwt8HcbZwz4wb",
  "key6": "5yVMsb75tp4GdTqMg9GcwEanQ35n666Fg5Mc6mFZ56QH5B5nBrPvKEjnGtAYtFsXtZnse8S9QnxcBJ2N1pjS8TeA",
  "key7": "62LyKPCfcjMZY7ff1H6GRVVZAuXau89jGRTJhh2krSohZeH3WLWmpi2ofRFgcMuVk5JzEiZ79CBxYczv3g64LpbK",
  "key8": "PBWXmHv1ewMVE211UPgBRPtC3dcQ7ZDby1JiCKaU4uF5Hb7xTV8DgcXD4wb7YMBzfQLbYEtcgiFnqQVzA4EDsdc",
  "key9": "4ajN6MYofsZiv3vazoiX3gL3hFX1CZyj5fGVVchh16QpA5RR11zc8EUJMJk1EYeizgbwuvi5eoio2jMwZhoMmpmU",
  "key10": "2J1LibX6uwwNAS8XBTpMqSvuK7aYdsRdMbXSTprPytqTGYqeheyB8MC2JfBpfgV8QGfFRahEctYQa9jiBFSntFg7",
  "key11": "5Rq2nmbFkDNU7AhXsPhwH9YCESbNyP857HntC6M8s6Wku4iur3TL3oZxJkvknPYdTACAUvN4pFgWoPmyoFoFzxQ4",
  "key12": "4V3eA9FfrcQRcV2uVtsaWKfVVmUC8YopW7ptayHbWyCiVrGqfGXTVF9aebSJifsiRmaWLBuW7YDuKujb7veZAoLe",
  "key13": "3RsgvDwQsXTWdMiqceZP1dVUPLgNVW3NhoMkYmgb4vVM7GgvJmed51ThTuBf2JVJgMEa5Vz8pPgLvqEePHcA7GA9",
  "key14": "ctCBQdesQsFKjwjPtRWCYG44bKXn5TXqxpg61UqXAQUMfZbSB8MQiQvPkgQpjwBSg1E3N4pQwsiMzdhQUFeipXR",
  "key15": "3WJwPvmgMJkKRWGHmpMqn5ru6VH4DRuXQzPjwFJMuHRyxWRKMVPEhzN7Vsh5PLLSYJUKaBJghJFiiqrUqcSy1aLu",
  "key16": "S3kQZSo9NRsXYhB2iuZP5YcCuvkdgCeXNdt2dPEYtSxNFnn6RgLk8PWhwhD7KJfZq4yWdfMdpDp2wFu1vME4dF9",
  "key17": "XkjfJehwZu1wBo3SLX54g7ivG5pS7XYRvTuFAMYXEKDbFVohGppecpTS1jSCy4k5vXPv6V8YyL6aGj6iqaJFCQ8",
  "key18": "3wEWwJeyzofSM8GheVAuSC5QLxgsQBkUV947Urg8EhJkZuqdgWC1n6QoWc6kD4pDDBAdB1zcRaDXuKRMz757ETHx",
  "key19": "tgVpfqfKV5gFtUMh1mLXmYGgNLYoBWFGzNfcd8ajkxQcuUibjULCW6pwRGBohSLtyznsQnpCiCynvSXjLGWcAtA",
  "key20": "B9haoqshw7WtgWJ4KvGus6PDuq4XKvSN59spwjNLJPQXsinZAi7FqYwLDEbLkyybHVBE9x6ZdFuvQHSCmzKYmLb",
  "key21": "64omffQLSxg9iYpH9DjHYExsPxSjvWk1JLvbq3nDwMyJZcUKG5Ko8Td8dBE4T4f7CDqxPopNo2LNdSVz82SR1oHV",
  "key22": "QTdDRYdC4zH9AVcv3N8hftsQq24PqNtr6WH11gb3StidH7rxHryKKEjQYwZ7v3GQN1w7AXeA6DBTNTxAQ8Uky9T",
  "key23": "2hf7QyyWmQZXQu49kFX6U965WpHJ1BDgotp7kDRiN4z3SMRFAFUfWAkSCuxJqycdH1BgrRQTaeBqpzuUgAqHrB1u",
  "key24": "65cmen6Y2B5yHeGEhEppYLuM6jtqwVwU4vmrW1wzRwTGdz76NwsV33pqhNCkxMJSiA7Uw43sjACFpytokcvoH8Gz",
  "key25": "44pm1FfNrMhpbQGLQdy93BcF2RBMnnpqo49Ma8kfrJ7MUCjpxBReHJEu9WCRAbfGKX5xz2PeRL6gtxrr6j49T5qi",
  "key26": "5a9wSUiaxw5n9K7HtGomsxV7TaDg1ku2VHZCtof72v7uygdZW945ubmd4ey5Jx5XknQRxd1THxS7Ft8mysR42dBZ",
  "key27": "2g7SRBS4yNGdfsjc8jQCB39CyQRn9kF1gLv1nfnZMcURLPxPbc5NYPznqNVHxKEPdvUh9QAyqBSUjQs2Ss3WzYTh",
  "key28": "3XCRzmjYew5f7H6p6gEpWb2Q5x8E1F5rgvDbW2YR5wKqS3Cnm8z9XpKDdUpHMbA2VeQspPxsd9pk7PRkoHCpfi6Z",
  "key29": "SkXmy53pa1HP255SmwqzCQx4VfDGFa1CzmFh6EhXqxvHK6V1qy9Vr5gsgS2NXEs6gGWxxdoTfPVEnWosHCkfER4",
  "key30": "2xumYryNwtHSFfpCVFoHnQzc74tP5JGRTpb1EZ1W6ceQ1hqvm55q2EhQLD4wATZ9MVLBkwqqbSwHrjuqTYwxLf4T",
  "key31": "DbLSUz9gkAdyXn7LtUryt8rJFJaDq6MuXXzhfFsJT3iStTAQwWgVVUBP8ZoSDTLfxZu6L1UHmFB4st8YFCawEGG",
  "key32": "3tyJHxg6Xmn5FFm7UpZxqNBF3sZhfPVdPMovY2H2jtrnbQpGnqp8ikuEtEQ9N84Toh6JrvLUrkhrMb7qMKbQnrwh",
  "key33": "5JYzkhGKaE3nSyayV8WRXZpJEaSa1NAX7oPDWFE99JB632NiQ9v1429MHTFe3BaL5U2XGmbVHc47rKAvSKLyacku",
  "key34": "5wpy2wti8c2AxPHpbVf85g6xKJADxTHsprrrpYVAnZ3CGwhaHeVHBnMPH3Cx2Z12fTUvoxSZCmS8pJ9mcCjfUzMN",
  "key35": "5HiUJAChDkyVvaZPKDRoFQNwZd7aEHR1u8iXuEmYmD5GPUFSpDRPZdcKSAJNg1V8Hpo3dzzcuFGhbQtJ4LeUs2et",
  "key36": "2TWneidGuiPg1aK3FJJssXCxj3CLjqVwEayEr1g1PZYyVWyDZnDuDX5V4PKqzq5wSSFERRtrcf6aWghkLibNAizC",
  "key37": "4Trb2GMaa2FZZJkyxFi2u51KNPM3dyMfgp67n72VDotPVGwpRc2FWQypcpuQVKYVpZ77G1n2FwRD2KveigTSJ5RQ",
  "key38": "44kgwh2Hzw8wQtn6SNQLgXiMLRppAPuSQJi9CuoZKNkRdE47ZRALAqDp6ZNkt525N3jAAbj2qjAo88rbxPFWyJLR",
  "key39": "3gSpt5CtC1P4TtYtum9qNMK283ZG493UZRYZ6Az6WJ9B8SqtWbqv97PrbkvWVb2qbUA6VNKevQ9t3L99N5hcKxfq",
  "key40": "4g7LPHTG67hStxX2zyPhVpABfi93NavRmMjAfeQ7SqSVo8z9TMMBZn9jTGy5R8FUHXnhV6U6iSggN58c8JB2EUmT",
  "key41": "4QFMtxb9szx3UwJfYxJSHQMcvo1yp2xvUhT12gP1HEj3KTo4rACSuRzBQ945Ldd6sByirRy4B1inJZPLNEz6ShSk",
  "key42": "25LDNmpcHjHg4VcxtC8iHYbrAVPYmUoRPxRqVKQewH1sTcrhnRTW5HwW5L6LJ3RPM8Rfotcpk9L3N2CTM6TiNB92",
  "key43": "434ZLaGTNR9AUPhXmtYWvJoPz8zNs9ie36Myg1Zg8CNyVRoxPY79F6antJMFj97ybPeNJGPaq1dTMYGaV3UbuNnK",
  "key44": "4s3oNYSyY5SiDQpd6udX1hJ9sBbgWk6wsJE692UKuKnN85xKFVz66fPt2q7UmdDumcii8s4yg8fjLA4AMVMwNndX",
  "key45": "55xdUaAbB6W4Wy6DbEtrhYmh2VFtdG3bm4Fxs8RabkmVQ1nzWq4NJfvS4QHNsSysfMR4vjXPP6Rk1HVrNm6Ki24W",
  "key46": "4F7TEUyuWxvWRdXySWKZaNVvsgx97WjZy8YaTz74Gq8zzxcyo5Ka7jVKAu1rgVttppyzVSmPoDPsw9f2ZwYkVEdU",
  "key47": "4CwybejY5Bt4qvHr6dxPC5K2ibppR7yXppVTm5HaJQWYa7VnwwFWcGz9qcSnnkeMt1CFL9Vf29nzHmMbFZAZT8gG"
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
