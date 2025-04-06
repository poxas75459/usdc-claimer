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
    "51qMYErLEYGT6zDYJXMkahQ9dWo7aHeurQBCAsAmTh4mC29tfnCk9eSV1Axe6Fjv7tCu3zvXbspPiKtkh312k13z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54ijCao6HdhNvvNg6RvnxgiGbdFfD7dqQ2iMSmEntA2nnDqKHtyntWQoqdSzmZPnunM6PQZPzQQ4eziRRy7DVws6",
  "key1": "5JqzwYSwmdDFqQPrBF7ZM13CGeWnRJb6xMawjVLtkLG1DqVKzZWFr8M8RASZUXGJw3QyVWT8GjjB6vezKytzZ73",
  "key2": "4N5obyiQejRPssLZXS6LvmN9APHERWkMkL7n6vcJeMWWxkAMn1kLubvDDHEAfaJV8pL9yWf8n3QXxLBSzPcet75h",
  "key3": "4zNhFbjB8uqMDiT17XD3VmYhRaVNnLNaAnxy6PMQdecXLhtVpVkzWwQBxsvwGpLVgfGzW5peW8gFyyypT5QGpMTD",
  "key4": "2sheTo1exuoy1acVnWUkRfEBMiJw6o7SCUkzKVTth42hEyqWkZQSHXakmjufFnC9ySUnGBYtr3daeawMhD3nk685",
  "key5": "zwfk7mH6UBeepAFsBCVSq2uk3hGypDD9fRhouwtaQRyZSPsqWB8SG9XXjwY26we15CHgSeN1HeTLGcCxmgdBusp",
  "key6": "4yKWizic3MGLNyQGUGCmNKeMFWFBZb8G1PoqvE6UTjm4Q86f87vxoHqtQ6junqWu6P3aB4tH1NkXnz4EYkAx3RME",
  "key7": "2cz37ApNkBm3Zi1Qa9Cn469HSMhwTMg1RGi6SXuXFNCMfYMdGnNxYhzdcptt2QogbSmrHCYE64J1LhKovvCiQVC8",
  "key8": "TQDfXRcVmbMa1zbxNWKLU8PRtQAWUqgC4dWEMSy1PeJMZkkMNUTvW27qXpyihpeGQbtEKMAim2PykA21M9HPjby",
  "key9": "3zD52Do1buX6pupvEGBAPc26mfSV6Yhcw3QMLPLAiLhGCoMuwFNnEEsNvQGa31sdVoBNoZpuKuFh1WCj5heGmfrm",
  "key10": "5Jg418x5QdAr7wCvz6F4CEhh8XXLdt1YByw7A63UJS7Y37Sgdzpoq4uhqXjnt543Z5rTfi3EdctKBqYHLSMCvLjH",
  "key11": "41kjooXsSnixbVGWnfbqPDLwgcmNeMNk7auWqxdFxqx9keMv6n5ed3qf6mfp3n9NsfuWf8JzaD1yPinB3QHJ7tDz",
  "key12": "2kGyhUNcX3XAnHiydBNxEuD4xJE3efaM3GafpoDHW4Gbw5QFx2DR2RpVQg5optSwPxYoWgcactUJSTTK6PKYhuyb",
  "key13": "KGwB67PW6ab6UdRMA3fLKXKb5L6VKF1ZQd1zpT5Eism8ZXaQUyjcwmSgsxZPMiQr57ugVgMQsLmxh8x6ELcYNJ1",
  "key14": "2H7NTQ8sdmHrktwumPL12aHt3K5VJFjFHSQWzPfm6YnUcwhca7htTDmZn6T9Np2kc5qFQsXt7h5o2EQaDW2d8jnT",
  "key15": "2N6fnYoC5L7kSurZfPtYVGJ6dFJnjkJVsGpwwZ7cmLL8XExmD1u5EYCxB9AAov84kBg1vak5Q7e67AeT5QjiMT6f",
  "key16": "3JMJQzBTsNzXz3FzQoC6LnY1CFeZaJPyyZZspvaXCYhtLhHfrCx7MKnvzFBWUcpiVZ6wcvXWRYd98pyzC5vw4spu",
  "key17": "2rciHkkuedydCRPz7Es9qVrL2Dgwgqr9vJspQfynwuydyWUHvSqwdQgHoZ1T9EYF12tZuaEAEuqTCbYQ3YmYAMjc",
  "key18": "2wtABs9rLPbEKHJ7nNj2VaVa77vhNKqZsaqBqr51tZKFk17GsaYTdLGxr9Sw4RmJXWXkdLyRoeiGTdoFfpFiFwX8",
  "key19": "J9bqveHfkeTPrwb583fK7UMwYmbXC5a5KdjNXeigEcqVdgFurLYusB7MbmAmFy5EGfBzQ8CmNhEAA6pLSVco6Xa",
  "key20": "5CLJMXm8NxGimRKyzz1LvTVNqSpNpX3Bxf7qz6bRGfoFtacAFsSWTwm4776UPHJGSkN5YWPzcEAmTrxzZF6EcaSG",
  "key21": "2DSgrkbDEZCRwn6FdqGQFJ7XXiNsPLC6NuX3fvTLbY7zuNL3mPoKSZyKMNL629juFhJaJ89Ar3yhzTWeiYk4ddjz",
  "key22": "3VyEthLbDUsoRcFTNd6VkqcvgFZe6ehSw6Ax4fnM8TtKi5hcdxSmN7VBE1ZaZeNvh8mxFiwVioubdevitbc1fJTw",
  "key23": "2FtjLXiVSYN6DL695553ctsL2QTQaZ4bD7MC4rUzKubVE3uQmGXusnrQSuy1x4rWg3woXAzGWXdTRBsB5JJr61Lb",
  "key24": "2AkLMPvAxv1hfKPP1JcnYr8xy9vKzEeT1QDTTBoLMEVyayNDwq1pHuCAsDKVnBH4H8DKqShCGv84LtEiwdT7VA15",
  "key25": "4mAzXBZ2W5es4KfMN8VUYc6bikz6JcS2BDjKW1Wen653z1PDSyedBtKHD4XGRRPhch3sKjhT84FFcmDe5FLVsre1",
  "key26": "5DnyWJaQQN6pGGTZH4dDw24G245KaXdThsChh7sUHAwZc6QuNH3M18BToS56VRJimrRauDMsKkKv85rbe7n8k9kC",
  "key27": "5NqEjs6PU6rk5m9TtQ22oH9EiFq1w5azyATiEdvSZoLmU6YMS2BeZ1gBuPJSgn8ng3dTMQGEWv7Nt7veom8F2P1e",
  "key28": "55PworLcvDXfXc86pMKVnkZ7gsN5sTVM4VZGFoJBpm9avXLJhvQqPBVhtpEithiuUUWnTwZrmU99iNKXWptuZYrq",
  "key29": "3tFoEoKdazoaTqZ9Gpy9UxBJ8p3BC38zUmUBV76L4i4pNCyKxaUJjXmjEvhbUaYxqTwsYphbJYBoT5F4tr8ZwgMD",
  "key30": "4bigMpgvmAWDum4Y8RdiysXQA9Djds12GjZPMEumDLdDxitA9uS7rfAhCrdh8hTJVkaY1z9k8Fw2sZKaqBWufm1B",
  "key31": "59eNgFd9i3ewK5c8x12QA4Hhzy8ERkBLyq67iBFeNXtpG87SiqnxNifw6egXumXB47FZuK8ACwFnjY98YA3bbiNK",
  "key32": "2LPcc8dkE4sCGtkLctWufzTeDGEihEr67GEPYuppYbpf8rXqxg3AedXcQHjCu4BqTKjEVaok1kzKSWaHanyhevoE",
  "key33": "4pem5vZBfrEv6ayYnFuuUAKY1tNW3VFPQFHnioFLnVaEzaUY96mh29QgCseJT4u4ayB6m44q5SF4HiUpGFf9W9ua",
  "key34": "26sqCWchfUAoWfxrzGhvxaXnLYRRBuQXeKkwwt2VJUFa9fJjhBH51cbvCZuGWu3jqMtcGs1hpUYTNB1E4qn5vccY",
  "key35": "hPTUWgEH1aMZ39d6bgGsqksmZ29xKKwK5od49FqXDxuYofjisbCx6cqEFjDtawXLLUDKf2tC9nkQRwFC6uBi2KL",
  "key36": "5VfBJuZyeLUVuifK8rePhMxD7NaEazoCzYS7RUooevc4LvY18PoCxWQAxMyj4BVZ3tjwHpCGPYXoFJE64pQdHnyn"
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
