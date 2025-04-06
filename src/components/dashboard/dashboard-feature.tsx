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
    "4CMzM5e569ks9oFQtYYEpdNfDVri28DbgEabo39AM1dz3ixcdD8bfp9umDUTrF7cPxpRGepwUCy9yYdm25W9xx2K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MP25dNhCuWo2D1uZYBTzMzvfKHaZbrbm9JcB8YocgmeuKuCnXYjm86PkkHH2ATjFJQziegnFHfUdRB4btgsD2BD",
  "key1": "2d8yKcZyWSCcEFhmGXtUZeAQ1fdzEUoAAsaWce3995EBCswk7AgH3PDzedEpBQH5s2z8rqpyPaKruydh4XDeViQY",
  "key2": "3aPaQvnY6iseLNndVG3okxFs4MpdN9ms1PPjbmVXTnCM1R7xJo8wwn4dCos6odSMe5yYxojsuCSvKeYTVrmxjx42",
  "key3": "3Bg2wTM8WH94ZCoMeNUqxTReJPDdVWnyWhMrwKhymASvN3VyAyrMaLSDE9WV1HFvSPFJe6RFBi6w6zFxX9GBPnjz",
  "key4": "4VXScDwRyqrDBC9QpWrx9d63zXCrfc9Bb8u27K1UKYJHePLWAu3ZbXswS1gtSdnR8YfWrDrsc65GBdNWaYGidEWF",
  "key5": "Etz5UkvVkcpjp3ctwXnhre4kMXaGn33miMw1pxWuwBceeHN6TdpPRDAbZ9vP84gVx6rteivFJNspaMSWqSYSibD",
  "key6": "tnpT42fmtJdwzpjhnuTMvt4VbDDLfUyD5NTHzbB9hEkJiUpz93LMCnrjh37tPgyCJtxFZGaquQpCLFkk64DYytt",
  "key7": "TLiyeCK6RuHUsXovjP4b3BvAq3mrWoNCRfsdtQgGY1VFnrrXaDf9qc6TcdjZfMKQeaPfb2apJs1UVSCFBtk7UAK",
  "key8": "4aUYNEFAoe4VoUt3NCBiebtaBkdw2T991fURMmN99w6GGrxC7KsnaTCiWewfGX44Z9Xf4N8NFqbP3PisX6YzdxYB",
  "key9": "5vF7f16vJTQnur7dFAJ1paYHQ2DM3ZpL6rzob6uizBEGTe4guVQDw9HzvM3phVXSvHBiCFhqYtkWgSMo46AwPGUU",
  "key10": "Lv8tkUWdykkXCpqcgjnSg2pnwxA5b3AQE9YhDNsUpTBk4DiCNEMp37eSbWaM78u5dATnZUtbRjYHQjJjrqyCyEE",
  "key11": "453jorVFCBAA6MBBhmbrJuqDKUVoMrbx5cT5eiWNnnCtG9NdjvA1dA9KSu19gHSJst9qvA131f4trrUYFPWaCuwC",
  "key12": "5HGDrTsLj3dbGiFWpwvfX9u3BWvc9epduBexZe3XVLtEg6RH3QCsps7k7KjTzkiUFGQFe5r6bqVazKWWZKxM6Uen",
  "key13": "3ryY1Xdx5dBgunGDoqrt2Eay2AFC8tuUVku3m5fJ7zPGwtT8Zu3QdnT6HEZpjCVC8iJgzqoUzSYfpHSroSsgi3PU",
  "key14": "5jWeV9nZ6RuH6vWmL5BwcQFtHE5RdcPHf23z7EZ1WmLPEayY9F4cVY43sD7438gwKT2EyTdTpWWmpC1S3D6S7LKS",
  "key15": "waikYne8CvyhWra4c3NwtRKxEyuoHjz3C3n7N6A9b1XFojNhz7j4RoMY6CHgjMqiHPbU8SFmxyc6hzaMk9G9UR7",
  "key16": "LWp5RAKDKXP83BXrZqmDBuF1DXAb481Eip4aWH5KQoaG5nBeXAta2Ma8bPWERLtfprUSj9fgn3CRywUvBtE2G11",
  "key17": "5LsCsXmgBo37sLvbPxiRkgN56y2mE6Sak4hXaDM7Nxz3QetpPpqzx7vPauAhN4KFwSZYYq1WPVsTwArJkwvFB662",
  "key18": "3xxbAC8bSFVoTEcxq7Ax5Zd7ynYy9wVAhfEg5zk9Cp3T9FjgiNZrWQZFoVz9Y3o6fChoqRbSuhGybwgdCeHtTSsA",
  "key19": "3qgxcC4YKHM7bZ8MDvw58Kr8X2ykC1cCpiCT8Pfn4zyD8Ap5Fp8zhPbY7W8d2NeQ3FPazm8cUvZ4f9DMfAfUqf9g",
  "key20": "2jg1GpajwamnBd95EixYW9oWHhDRgthtXkyLhtSbu391WjQj8AUxbQzbjmFsj7Dn1hkbMNaJVN2FLprZwFhGNfCo",
  "key21": "2w8YhubCc4pLVgxftW6gyis4ribV7WDXQ8GkVwMY41FGdtsrQEkXMU2oafoUy2y8HqLH79RyH6zRpGsWgRzbHCs9",
  "key22": "VvcNx76ndYdrK4tcWMK5Ei2MjAGEFf7Jj8Po8gXatuc9Y4ScJQP2jtqTRV3uxQNBEViW9trQCAdngNo3pCuAepk",
  "key23": "xBedXLhAi2v3oZdS4zgFt8zJH8VpZ1ra9JkomM9MTAXHmo2NzaTyqadLKcfyMfEZR2sB3bBWK3TuuQ76smJ9Q4s",
  "key24": "3TYAumxKwoXaPMCRLu9GtCTouyrpQV1EpCsgbYWfL7v77qHsv4k3hHYz9ipoXfzJFSQMVVGMeLA4rcLmDKYrXPM8",
  "key25": "3CAkj7nzdGMAvuJUdF15jwFMGoZY7dejhfagVtYGbPfyF4WsGj7swSWXb2kqjazXUupFoCuMEc6d1pvGkp6ANdev",
  "key26": "28ACjRWNi8nSVTB1Xdx5ZFV6WCwhgf5tmgXZhh28cbuWzdmRwJ6WEwBWTivqhRsTmySDJErAHbAbfMt2kPNwY8Mo",
  "key27": "5QHMs2qrAQ1FrcDz1x39zRa8n7PftscK7cqoX9UMLFbXM5WwUVj7BjmxpZXCkYMtzhei77SQCqdVVfLhTN9Ldhm2",
  "key28": "4SX4JW87Q4KHXs38rMKMMo4wiQgeKfTiMCucy9k7i8UwWQfKUxTDHc1GVtsYy9BGBxkVyrMMFTY2UpCQMFpJTksP",
  "key29": "2KEYUhbtuMhsVZywXQ8VF7eyK2C8MAsyktacdhvE1UwoaAVW5ofqyDYEDh3QxQYwfYpqChLp2AR6i52VRL5aUPti",
  "key30": "3ubn3vAzXYa3DodjtbEgi1abVvZRNLuGXCADr67NPbZysiuDdQJN4jaAa8jzJcmRh2bjhrnN1scvqE87t4rrcSZv",
  "key31": "356wKJQcNeiGYzGMZ2HvesYZRxXQD7offQzFZeWDFUomxTdGorTd82Q7NZLqDrhYuu4SPfF6LwmPHPJKR92d9ky",
  "key32": "2ccqkMQ3FCxpt8NVDfxUNXwKs9SAS25hrM5b9P964XsZWkE9GQhHUPn1jTTK4bPFeLeW6uL9jhvJFMmRtYvu4sE5",
  "key33": "3sftfaVBwo16yVVQxVtbCSHVivUKktTN516HoCvMN4MYSFsvm9KrPowAmVaGQYH4tJDRa7pQye8F6N5PkQYdSdHJ",
  "key34": "nocPTvaWoZjdSn5WbwzdFv6pX65eGcREjHP3y1RHTpVyJif5B8DJSDSxXqyQwA54MuSPjUnoV7X7FwymoKvj1ZG",
  "key35": "5mC3kPWVT9EEq4UcwTR4jCKQ3hdDpRVhCFZztvjuYTfPcS43QL51FxNJpGKkUQV3FUjT6CzdGwKm1YvcLzEwcuUt",
  "key36": "2ZDTVFPyYpQFhRHz3kfJgSRcCWCPoMwkP6KryggU2K5wLQXbbk96wR5fQGCt62DyDQ8Gkv2FYZY7zu6WZSCD7LXZ",
  "key37": "5SrgESSomWM1uyredB2BuVCob82N9BPtH3ycrngvkeP3MqDo96sSxL56uPn2dwjiV8V16PaFwJYf9jrjvhmjhrE5",
  "key38": "5XG7xzvQhKduM6QutQia8yRtgQveZjYPUSDcvQEj8JgFqmTB5tUrzJBDQVW31aqpC8ko2GyVrTW4Fuwjf79G81nY",
  "key39": "3QBnLN821Yk6VQd2oeGCKV9RovA4NeVJDQkWoyG7xZBFbhZ19jjmf7yB3ViKNGy4Cmsw6RuFLXFyYE6fcZwJhmET",
  "key40": "9SgMpn9Cqx3BUZDdac1bULojaWRMpHBkEmaoEemCy6fNRNmVt3ESb3mEP4xUMLT9k5qWs6G5PpsoUCUnoN5mimf",
  "key41": "34bGVDgUmrKhucbf52iyGzRvBeCH4ZnGoeDDaSr3L6nittbSw4gwjeBE6fZxwHUbsBUVvwSKDmJt63FBFGBUNkNd",
  "key42": "4pjrwHqwM8KjUwcGR9QKgBWvJXan4n4zdW1SpjvwewFifGQADVWWc9BhDk17t98q6XVakmHwu54naRVgb1zZk5eY",
  "key43": "3Yua41HjGibMNErt5wKBoeWRmU4NYKeWsEwPx6Ys3yfctWENwaeh4Lz19th8U2mZkcJz5Nw7gAxN4rydz8WNGWcX",
  "key44": "G4mrKNBKKg7Bv1DfsAGmN4F9TFzqH1RWcGBsLSJkhoayNRvNiYxoBuZZxmxw8dUaFR6HaySb4PGhpd8LD5jP1ZG",
  "key45": "5Y6C8sbtoms24JN5ro7AAMcRwR9brimPM4QCkuNy1DbsRq1tLsShcJM75keHYibgJmVHyucb8ZApwgHA8ZCJT6bJ"
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
