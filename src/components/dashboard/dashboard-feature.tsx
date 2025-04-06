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
    "SUP1a2JfcTvKbjT4ZyuuqrKHxqyW9rLWKV3D4dmvZoMw9FdvuAhacrXzoJWyyi97SCMbD2PthbAJxM6ooraZzrU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5a3zoafM2sNUXBWjUukroSTnxetdh8bbKKPaAexPFJneGy2G5ERVSsD3qCC7YuKkhL24z5ftGwD9G6ih3mYc2168",
  "key1": "3XuhA42sax7FK6j2DTDAmMuQFbEAn4hrJvJhFD5yEYRyyXXVdB6RjgToaxUjoycBMd3WYmS4cFi64hcD6wmGq4S1",
  "key2": "22yLEw7qsuU9wPw9JPvK7TdtB5UG7CmMQkXdMnnHudJkFkp8CDE2cnkrqk1vfmh2ypDXcsmgPNQMYrzkcmm5eNHQ",
  "key3": "2wnoQ69VghPAKf1M8VuDFBTsT1qnMEGWZA71QLDYy5XZrdrfLMi7x6ampiGP3zmsyq2PmftuA7zvC3ESmeQHJKDZ",
  "key4": "3ZTD7dPRqyfn2Bx5ZkEsaAdyVNNe53Sed9MVVmkarEgFUuG3bDBjP2xtm9zKS3nzUKvFJBc5FfVx2xQgt7RL5ka9",
  "key5": "3kTQPT1cCDmaNtGY1qvrsGdUomoTBMQmKHmco1ztdw9BdZrHP2EcZMeHPhHE4qDVUJwjSdNxtxmnvX6gPgGKG3y4",
  "key6": "3AighFt7vXEFYhNWQiccXBvREUGgkb9JjALE2hGEcG1QWK8wKCViShnmfHB9cg5girdWGGbtjyrTs9MC6nwC4VwH",
  "key7": "qtLZ2dBEWCs3z3rDBAtwuB7QzFYzzvw4Xui3i7MNgcChdT613FZT1vLiWWbAvwPhwHVpF3q7DguKCfrYcwfMo2A",
  "key8": "5wPEXPySYUmsVt4YyKJxupas76XqhxNaLC1kCfPP3Zc7WwyUTBx8uz7LJZbBn2CkLuvsrtBahES9oZN8NQ63BbWS",
  "key9": "Vo8qeEWdtuGG4b5XaJzPEQoj93tK6vLJULSsyJZrGYGd8d4CXugNwacChcDsCT131J8V8r4abjw69phKDbkSBMn",
  "key10": "52jkHv9efRk4VueYrkphEXTmN6vPC4wtPYHJqeiZ8x8bpGDRgCyHgMbXTyMJnBAYvPWRh9XeBurWcVeNaWpjXoLF",
  "key11": "4nJJRUWY6xWgqcXBDBwzH1AAKvF7UZsQnZkeXEfWyxVptXvCiGRBuG7My1myg1Z2Wa8mCS6aHmgUtbh3MvzKGvwQ",
  "key12": "2PsypXeqTVNjSrWiwmrX6UxqUpXv4A2uSFVPY5KaDeDcGv4EHXe1sw25Z9obqmdTW34oHWSZKBh1FfcZWXFif9gY",
  "key13": "4tUypgwywq9m59NMa4ge6VXpo41gKqgBJVGqqiR4PhB7VbGvGSqqeQJNAjXQUBZaFe8cdgaTobfvHgjmEkNqhkYp",
  "key14": "4PSSTd9tSeVDiG8TnE5pFNLdqcXWaM4x7N4n4T7jBbiZxDeAuBUn3PSHnKuiqXtFrvqnVnYKs1eyrHF5C6NEb4M8",
  "key15": "3WApG8xcwS7BcXWwgedbR1WexNVS3saA4hGMnabFzSMFx6gZFvMFQkjjkRsYYRgttrY1TWsnEaFc2pdtL6rnC8LS",
  "key16": "P6f9TBxfQH63VNYfTUSZcjoKcuNpGQdA7BwVyToww4Mz8aiPaCvFTrNAD3mHS8CVXZTxL8y2HUoeQqEHY8otAQR",
  "key17": "4fcmYSU7JdVLPQ9KH8mE2FM1kB757cYYnBwiLg7VS5K4tM3scb9LimBPjTH2zkwyGe4dd2UdkD18PUZabxVKteH1",
  "key18": "2VpLruK6L73ZvwkEEgv6g1VY2tjkNzLDv3zMM5aQHvQ2WAWViMimPwBBU8djEaDxtnCSBsuTuk6KVUv9wRkzKGxR",
  "key19": "3txq7ayK8wxNUFj1GtU94inz89CdPkL1MteqZGaZVD8Np3c4kT7y8AHhqJv8yDNt3wQkeGqqw2AoW7EZzFP4AZ6U",
  "key20": "N8aTZ2DuHrLEJBm4FT5PksNkFuAmgzSN8oq3622rP4Eh7e2j73HUuoAZZDBBjmLodvsGNBnDhnVRM1KRNcp5H8i",
  "key21": "2zefQQ3hZUdEDz4vRks73hmBPutGVUJrH4a6rFjw9Bq1JYkChErenw4X37VNWJMqqHAm2b7EDoqrW8i2fxmhiFVz",
  "key22": "5AX15jaPJStiBSXRMao4wyTyYZwMxyYP6bqNZbBBG3a5mThC9FfgLpnq691Wi7LbgFmwVeWZ4HSwfmfP1hLqWC9x",
  "key23": "vBxXXiTLQkNG4iKxcB2LF1SJEGF7oxeARFQjNogEYgb9c1HnfvvftYq5vPCyx14qJwYYTRE6QDWBXgUFbVmPKbf",
  "key24": "3mCjVAJUQrxf4zfRWb4Y3A6V9GPv6pypVDKzP4VyBbMkR1e6rojJsjCaQqVmgamjWK1N4UVm6XZHjxwt2eguUPUi",
  "key25": "2bwTgxRSypiaPzYJDuamAK4yH5APy4kLNoEtE91kSFPWzSmjHNnQ8TfnoGcJXiURPaMimFEqJ4iGsKRY5WQhwXiy",
  "key26": "pgcRC9xDDUKhq8eQhe5ByzzDRMAoxzhxzpiP7YzyTA6DgC2rT42gKhjUx5kZG92hKb3EXBKBAs1RnKNu8P8m5Fx",
  "key27": "5H5iycoqQbwnyQXSbosZ1GwzuuqV5Z6JAfrM8kEz8nM9bm6GEVyE2bJCj15w8dHcDbx7dJUeXq7bFbmdpmmgCmYC",
  "key28": "YynK9Zv38cZfpHSeNdWziqcuoZQSVbL6wAwUmqUNd7ybWh639WAJUTXz5gXGtj5Q9kwC5RZRANvaReJK8Tqvof4",
  "key29": "4Aws3WEuN1C3eMowMyiigtk1j7AMh9ZWxqYo6F4zWszfznSidCT7cEsnNRqz7NDuMn25QXRRm1y77pAkC5tJ45H7",
  "key30": "5YjMzR4SqaLuMqby5bNZtKGA4A2Dy75kEAWd5dGq9HZGgL1GQ131quERLmiSH8rwaTmsJyaFS54LoHuY1AzFq56R",
  "key31": "fLD4qoVQgmB9NxZZMjuCz4ycNHnWu5cCLn6vrsbTpV9EbSzjPeKD8DtHUcavHDWaZcLRyL38a3kigWG11zpjLNo",
  "key32": "4f8ts5fq8PdHTia3ySS2MVU2riAyqQnfyTLvqFw4NrwJMKmSpn6N8WmLZ8gFxQcC42XwxcXkUjArtHcNTUGQwyPN",
  "key33": "4EeXsDdMUEfoKfNxMdsWo9DABRBNKTkpP5SfK12g873m3NAN4VdcPx5rWvfc5iqDCnEc66U3PeMJVKTg2HcgSuDk",
  "key34": "3A3eYJuAR6nMkQZyGEsL8wVGxGCBKkPsmoYBhCrDFY6gV3wgYd9CFULdrih1c5VXdKpw3ZFa3XMkasMi79gAxgYJ",
  "key35": "5zWfaNsN34tmfL2Xxz3783Xz2QA1MDEtB57cioFMYE8JNyRRdpxKCeBoNWpqb71oddChuhZ2jb1YBdjyBh59mAGk",
  "key36": "4mkMZ8GZ6S7hoCSvb2pgDTDzC7xUUS6ztWuSFApJP4YCKww7gk3oWMrHYNGCKq1SbzbSWJ8djM3g9ZGF8Usz82KF",
  "key37": "eXaZzxW3WsJvgqPUqQEuAMW9UPER147sADUwnYwnp8Zv86mmBri4rGonV1TEoGaMUarFqgRTkYCxnixobnoRDyR",
  "key38": "4vDLJ7hP1BN3bUJPKedbkZTP1dut73LqszamZj59c9zQLN5wZVsuJfqJyTLbwwv3uC9t8JNSrsXwgVBDAQSoEzsf",
  "key39": "3w3CH4pSRQN8hVhWNZktsPPVq7XkZyPKdrz9uCVVLYk5Ws7jW6Ly4A5hEB4xv8Ww6ZYuWes1bTgvtjGYBsSrf6oN",
  "key40": "4UFQUWFiFtNpDYzd8FG92m6doBYxEWkboX22YdSg6gyX5vAgCrxeQhNekSfSdG7PDuYiF8CfGpoF1nNCkjq8SKxt",
  "key41": "38EUN6oY4ggwKVrHF4SareQkCAtiguy71CrGLYjLt5Xx3uQsQDv3HUFXP2G3oUsYCk7DAbAwCjAwPe37AU6ZZDh",
  "key42": "3WndoKqLa44j2MqMqkQc3TGutFPkGWt9s6oYEDi7UTALKPJoxwg24N4PWWhdUQdpcSg9X8epXyN4oCMtQ9GWuiHL",
  "key43": "52W3bU3amdcuKQzw3phewfEiasAseKWBLAEuQx7j7u8fwEcitvwdp2NUcvBna3KWyEXsz7sH7iXXr85WYqBmhpkD",
  "key44": "4HyGSNLeEy3xKrVSGZtkFfqRsc8JupR3hvPfxMcjbA7VPZoCpe2aHmGsDn2Xc7u7qsJmDetgGQFLCGQUruQ2uakf",
  "key45": "5HwmL3FqakYe7MLGZWsE81r25tzyZ4a5QhaJWPbREx5Q6deYpxeMKpJkU7X3PynaNEmhCN5YK5x3YUS6dZ2DRjos",
  "key46": "5vRbKc7VMq9djTvoPzgvqFGJdsGXtYgVxmeD1VHx8QBdKWJhimyNxR51tsgTbDFMg5mzZdJC1sAW8KiH2vCJJwA1",
  "key47": "2mm5XUrgLLAarYDhdUDtwrB7oHp81wDjcAP3gGxbuooWVNvdDqVvFGto5JujFAqDsk6R2qKqfLobsYhWKJpnkUes",
  "key48": "58Va8QPdNVGrWe55k2KMY1t1KamsUkRxXKc3wfSUEtw76T8eBwV2Gs5GS3hSHTsgq3b22d8Xf66YyHxew8gZU9WE",
  "key49": "3gi7wr1HD7Vek4rLoA9gjyL9wHRAmoofCyS1HDZVBw3rfgX8NeZYCyFvkj2iUfgxHz3Mb8w9RUDtTymN63HCs15P"
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
