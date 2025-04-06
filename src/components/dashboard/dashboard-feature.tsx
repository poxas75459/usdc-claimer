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
    "kdmUxygpq6p2U1zgUnDogD3uG6t3xYQHH1AwoXJfNYtRCWxFBguCheXKqPPckk9Qz6LWsbXoyqKfvBwKz5A6F5X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6Dxv8rwKZ12roqfmG3RWNDBMoSHc9xh84FPPyTeGTYDfzJRrpgNixJQdU6ieX4ZTjoHRdkD3ENNBM8PaQQtPEAg",
  "key1": "3kmSKZz1BSnDikURZDxGwXhjuwAQDRWHRvAe8eyEw4JGqh4xFkBRDfgTSmQvH4yXJwHMWvbaGmAgVXMhuyaviwoR",
  "key2": "5u98HGsoRh7v3MBepeLub1P8Y8KAiL7N5mWfkjWCFs4KW7YJtsmVAEbVEpA4eEMAQ6yEMjfR7eYmQ74G9DLU3oT8",
  "key3": "4eZ9wzZ9K42qcHChhGJYfvai3SgYg3m5noDdF5AE4aBfPesUCmiP7FVMHopmRz2hbaK4NqsBXXtTvPFtSWnD9bp4",
  "key4": "4hUMF7EFdW4XEWUzjJ5Ed1JiGPHU9eiw5yAgprsfoeKz9o4t4xyWn7CUhx4iZXpESe7QBZNhbPQMm7DvqwiUEZLF",
  "key5": "27FhcEPtteM1RfssyE3stUtq8seXAtuKAEp7v9L8VPJwhqqvPdY3iJQBJpUL6pkM1g1qjCVFjET9fDUsTotvVFsH",
  "key6": "4SmNZio1p5GdwcqWWxWCYWmn7QdzXYKxuerk2kELGCxTLDBehJdfZMBYcEcQCYEmt888ycyjVqwxKRDP46LdYmhN",
  "key7": "3VK3ZjPhVJvoPfWjooA38oShwZ4oo7A3eDMDaHzGFWru5iuV56SkhzZpJNcF6g4PBC9Ni6nRsFqbUrLnv64dL4uS",
  "key8": "35M5ibQRuctaJmo3kEqMVcZG6hE1oqVUJ99yBmdnSkb7gLgYTAFtKRuyeVkcAMqW66bSP2AE4xv2T4dtrC6a6op9",
  "key9": "3jydxPoCnxg8SXJJBGAomgMuCfPF82GwzpiH9K9qQhdmQ8PQ5XWc4MGTaGRMoVkuyvFXs3GrdttyV8QmEYyDZ4FU",
  "key10": "ZRPkhschQP84w2iUt2E9DbYuZhBfkLx8Y9Kyavi1VXHYhwZ2onyJwnZ8hHXdsKua52MzQZVRGCJS2fH2vgfHhVi",
  "key11": "2XN6cqv8ZHPxDSw46jPn7w3U7EtWgPdE2rbY1izGNgsfhwf116vNSx36XNhzQdGkr3dM2BLCnw5EPBCLfrhk8Htc",
  "key12": "5DGDbfH1VziZJmtsx3yEUbBxYy6rPk4z7KKoXonMpr3M2o2tJrqR8sNWc6czo7EwA9KPi1g9PUCCzJz567zXvubA",
  "key13": "4kvsRKkAXK6AKgYSbQ7GPdqd8HT7iqMHsPZf8BkvZtCB4Rg1sxZJyPJRJd6Cp8YnuMd9wZtCE8gbuQDSd4jMWcvY",
  "key14": "2FvgDS2Kje89bV47ioWJuLCRGMrc6bhJwtEvYhsbiRyeZPqWKMMotnhtg38PGu2ahXPoyYh25rjbpuR8b6yCnhWf",
  "key15": "3R83zH25FGqm6FS6Gtcbx1g2QymskdvrYQCvbt9yZfoHT5NcA9L9Ecmh7KVLjgmNpsNJhTtqDPGHzYAzoYgnKvz4",
  "key16": "42CDSAsSTNnH5BwcXqrxsjy55vzawjZDYH3VygNRpohQzw1kTh3BMoGJtYoQNdQXnfZXmUnsikxbkEdn7fH3eVBY",
  "key17": "5rbk9fPKo4L1nsrG3kED9k3MgsxEfaaozN4deYa9S961a832QMqHkvG1iqMvQmhKjNtMeypmvC3k53JEXtcpg6oJ",
  "key18": "638yoev3apKeScns1T2VZVcFF3ixUEDECCQtkZivdKJnmhNApfRqNCeFbRmakQgtSzkFtruNLVoqY7pAmL9voLMq",
  "key19": "5cwdhZjscs2ZMgFt6BPgDYzkHai6qMYX71JU9SNiE2YUQuRBbydxXRk4jKFvgLo3zK1iifknkepj1phBNgm3JcKp",
  "key20": "y7Gf8tf6LvFLDQK98mucSjf9mKpCgB6CdhiJENmkszFFxJUzPWfAPVkmicSyFnjYJTXjR4WQPuv7WfQ6Z36wzTs",
  "key21": "3tyAiuToy4ELAiz9R8qcjpbejW9bPRwyPPwZJAEnKjHiTAqo7XVGGAsDEmPJ2PR3FgiTy1YY57PEPVbQps2Wq5cx",
  "key22": "2nG1v4jvw7rYn73Mb5SbXPo35kNMTa9Ff1Dfxo3jAkHiGLLpaY8cvvyrskp2rMqDcN2YmyMEtaQ3Kg2hAAKBKSEU",
  "key23": "2SB45JNik8cLT1mUvWrz9k9HKuxJnsiJxCPSkHmzbmir5uundzAJ1wgVd99pgyv7n4KhXP6svhTVPuVphh3YgmxD",
  "key24": "3e8s46xXg5HEFU3bCgs9wujZGRSFwfEqaUKs8T9rYd3azD9QXywyjasRdGFxXvkeJbiuvLxkdbRvVkStCBqbwXKM",
  "key25": "2X4VynogGXn5hXjEHy14pKgPModohPcHdWRiGQJ16iDdk753QkmX1BXBUL8FXyNDPJHf4E6pdkUS4gGuL1ESXWwb",
  "key26": "2crzRaJmJHu1vH5NTXgfLNzBde2phPwApvnKqMeGnVBmvLCrg8DvBfZXBdPyoSmyQmzcT6eCQxrBUbhzf7NUmoGY",
  "key27": "3rkwPYhJdnDLtdBtErjbY8S6XuoR2Tc2WH3E7MhwkF5vLDTS1hw5JtrAiR3737rG9wQJSEYjtaSenZez7k9VrApc",
  "key28": "5pN6ukGw4XJvSxApWPQ9w9FCeHPqeXEVsf5rB32e8TspUA5L6N7AHueEk79qAqqLZMw6RxHNw6nZuzmJKiRVQBWy",
  "key29": "3Jsd8Qz9gzVLHmXmadLxxygfbfWA1hQ7wcNvf9mGk4FfdwguQMzfHTuQwUJRiffHkRr8TpGqfu3itPfnoe7vUsXW",
  "key30": "3Yims1tSFvUedBPWLfTuvk2xmoN2sYJ7MGNQR6P18TciqLnyuR9ENqpLqaqVd32XqoeuEK6DVhBmTYNJf9gedfZu",
  "key31": "41hdrMm3hm8bwYvUyPeZwXzwhpbBGzF5JpXJskRjwXYk3b36TUtYzCKUMNgSfyKPquf96PRidsAHR3kj2sxXWjBi",
  "key32": "4F1oht5R1v7B6USwQ99WhXpfnVxq6p1hRM5qXytHrsK6eMjKzKtJKWgd8qa714vZJ3Pz3FfSJ6Gpyyn6EhXrZtC1",
  "key33": "4yRVnKgYEcrhVNm7TsWTD8junEkUYt6Puab163aYUPQsGVxGRrtHoNi7XnVrvDXWXakm7jRf8WgEzdWFW49irgoV",
  "key34": "bXMx7kTvRvhftv6kHzWguDGTZ9ANkv3vh2Q83xkmV92fch5AYVe51w6jjA3AGwMMQboaAq2YFcmRyQLgPuw9vxN",
  "key35": "47BrTzGLCwyaQAzzTzeMUUUeYjctRwNPY5tjL4xKRGwEJ1niQPvERJJdJj48eaCCtth1edPQsSF3a3kcSbrFoS4D",
  "key36": "27D4pRhDVkRuSKoeRKNbwrGdsw1EifKXixyfCMCCuaK8WbEB752eUNpnDpdwDBSQsjVzaVTPsPQfHQENk5b6zQCS",
  "key37": "51jwsFsPFtRHzVHqdXUJvE1kodA2irK6sdcTXdjwKaCvMNScJjJRZ1mXTLY4U5gXBJmmjXWE1ADumjsWiYhLQLth",
  "key38": "4Q8kfBjbmiQdsAzUUcGsbefinqasFcFwUukhErsrzqEfrRryLsnNTr779rYubCG3erMZNHRxKXxP2T7VyVASyrdC",
  "key39": "4gft922zazMhXoqkBgY6W6SBzoJkip4HznEkwTKfe1V4ABcfhUbaHazZ2m2RVykzXvcBdEmLfBNnSueektcg6SK3"
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
