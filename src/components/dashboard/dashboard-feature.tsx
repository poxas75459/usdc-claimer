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
    "UdDNC5PoQGpCFWdjVSFFFKE3rLjEvAcingLcdTeaHLsxBmqcWqWvHrRDDYFj9fdu1RSMjCMYDRMpouqmLBPdBwA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pawM3AFJdtX6D2bg8xfvdMmYGxAUp57d9M9MdPXKmzasFxaKEBCMDWuP3Lg4eqJMsEbxGKbijLZuhjJpgvCfR7A",
  "key1": "2sKb5gnwMFvN7sdfgS9HgAjRz485QgmPaX5UPqwtLPBGThpjmUyhrDQ2oKp1a5U9EMHfpBQTRBu1ouGCzUxZmZZj",
  "key2": "3p4AugmoTadmF7vHREp3XWBsxmeSEs2NeGWChN8dyLXLZDriT3BxnYvcDeTZxerkVSnNbn6gNCnpPDe4kcUiE6mZ",
  "key3": "2nAq79d8nYAmGoa2Fdeu2CGA3b9QudsynjbvpGarnLyUE2fL3iZZ1oEKNVirhRKm1Hx6SZWgiFTy1XSKMGHLCFoC",
  "key4": "RYBJ64SPLr8MswsTiQVK3XE5tiXPTrxGa33WQXeegnBzQFjCeBBmNsqpfgfDu5G2PCSRut13f8n2ZiBByvH23T6",
  "key5": "5ZQc6PZ2C16933NTTfMeWGsCNZ4CSTtnEnqVsacRiXxFUzF3kQ11paNMRN4FkjrVHTRgCy4e1UDsieCpmPmv6JEu",
  "key6": "3QLeZ36SZahWEcYcb2Unu5cp7fTTwP3w1bPZW4PTo9PsjQe1gXUsfDL59mcHvkKTsSV5xZEDW5dxn24yHw9a6sNR",
  "key7": "V91TuyFM37CWmH9Dk6ScPRjxynZk6ZSHk1aWnRcYBCPh77JMypruGx5MJFqgnguQpzmkvM9fEWkqXJ7AuKecwCZ",
  "key8": "5xmYaNzJqewq2GNizwpGNJjuSuF5MsFtnuazo8Lv53d6uGiXZR5VKJBo9BVoYKR77jz1sptW3sL95NwDVcLfn9Xy",
  "key9": "4vyd9xQpSwATuLCkg2wMFb6vNngcvJgP3DK7JRS5c48ydQpMcqESVwWEzD5cKER5U5eadb3KxdFpNcT6qgdhQ9ne",
  "key10": "2FtJtWsfB7yfMQ5xiqyZLsYWmphUqaMiDvt2uN643ZBeutrnjvvvv3cLTBVY66UxXvG58B1eQr3AK61qPfHjF8gz",
  "key11": "57hSBTiawmjBVhue83zeYZHGL9ME9v4kzGrKF8spPAhnCBPjQqTrVJdYtFNBdT8aidb4ikC1CT7UpE9MXJTbVyZV",
  "key12": "4gfUhKUhBvuh1kAEb22bDVRrXLJHRcnrptdHu7ZNb4dCgTRGpy8sqXSrSmy4AnVLhcANXLeDsvcu5zGzvaXPCyNa",
  "key13": "A4dHiCkrcvMasjs8MakDsdRb3qEACjnheRwSv6V6hSvAUKtR6o6i1AM5zrsSwHapYFAwSCMqSJvYpB2eUbQ8jj4",
  "key14": "3LTUCvRARgd3KfkY8GEJbEtFWBNwX94SfkRwLYhvxdqikd1zfFLVjULQ7p1zGhcyQkBcPbx1Bs9N7mvmW5ZCG2ZG",
  "key15": "4VJc7beW251ozpch5pSpi1BZSNC33EYe6CUCapAFvVzE8y26bQHoNWGPgbuTQfHnte62tMXHeBdS2rM8KrGx8trV",
  "key16": "2WZYSBqxUi9R2KCxQnNwM2kKuXBgvLWx5F6YwE6iNsFH4r41hs9vE6BznH8fpjVTS4AGd87aqwTzA2HSwCrXWnvb",
  "key17": "4zUfqCRR8WNar2zgEXgqZ4c7VNk83pLA76rMJTBAxgeMtSYJ4dkRu9MKnRuShToamyxjxR97YjuCnuU8owrWTnT8",
  "key18": "5ARoLFEY1Qx1Swa3c7QtykWxd2jeboQfqDFrADcWKE2u1fir3dTRLjQNL4RE51pK5xhRiMpwF7Uo8RhRmS2xaJK5",
  "key19": "2KRhLJQqWQ6gCar4y7QrMex1ug8Xtrmpru92Cwwd9qvL4PAFzYEzqed1VDrTW78zEPofZ7k2PBe3WjFsxm2eQSPT",
  "key20": "5KdhmPTneRMUWKuoC7GUkT8EjBSSf29TsfTfkS1X1tSJVMWCJYE4VLMiM914KZV48jptxwGUkFojRUmHEw2meqF9",
  "key21": "5WTZrQ8BVYEtcHzztQZDqKvdpnjquU75w9wy1t9UTJZX5k5voAxS1MuFQTaQPUa5KN885s5zSNbe44EtzP7i6rm9",
  "key22": "5v8xmvskraksToTgRXX7Up4fpPBAytsDcmqHFBabQBzqEkwp6zYNarUMyTGk3mENc3RyZeGU9YTU5m8umYxKdoev",
  "key23": "45Ps1CweyZuJ1XnfHWQnTsk1Gi9jPTnaGtJmSxb17sgavRtWXQmB4JXErxdormRhKheqL5rDtQUs8X37H5ZkRXUC",
  "key24": "3x4Lxjq5WdR1pVgxSYfZxgsT7GsDmueNu8LpSyzPoKhpCXK4SmomioH4Fmx86t5923R4eCQttQWPo7pX5wJCkmDx",
  "key25": "4FQwS3YCodnJLkkkoLA4VhkiUWvjixukwESzkCKGqu8VHUJe8FEFQMiv4kjchfCacctErzRuEnfigLgKokaRbFDc",
  "key26": "5taXk3qXqW7kYLBEQYx712bbjQseXRYKQDJZeghYYGDhKM4ueGC5sa4HPU6UZ39GAa6RGZw2TZo8mnasVLAzcFw3",
  "key27": "37QUoiYt62k2r5tkWXaiFuVavakhyZf6WY5FuYKYg1erPjCcJA7KqRegcGNmjBXTZWJmJCiEDwgCGLocYzbed1zr",
  "key28": "86xbypZxd7zCyaYg7NpWp45Vr1vAevaJ39moK43f7vuswBrX7NGHigA1LKYevZ6wjfngbfa5RMfzmZCCtdf6m8a",
  "key29": "2tbGwHMzymrfUUm7fWykUunJZ2hsFQZrVWzSLbfzXrxfytPbZPB9KUZJ8gQZLX4E7TvLhPRo73xAvMm65b6r9QqN",
  "key30": "2K9PkLikP5SpoiQ7AQf5owb1vu4u7cxwTh4tVZw1PcRWXMQvihWRSRzneBQFLgjyCScCTvEc3EZAq97c69aKrsBF",
  "key31": "4ZqwCSH4mz4tuoqPocXFG2Z57aJeULRFj4toD9DQU6xP6wgfUWPcdmXV67Gbo7zH2bZsnnFg4Dg2k6cgVpVvHkEQ",
  "key32": "EWoNnh4LuZCsZiTwXU3q7w3jLrpydtHArE7oD7dhNu9pZBSTiFWtmpxeHsWhXRGYeyqz3avJJJf1A1tMSnN8rzn",
  "key33": "4f4pDwB6CF4pr6mow7tQRPw1rzt5tUsL9tLggPTUgQgfJnZ24gxDJVHnPkbFqPcP5qWUMVzBvWSk9K1A1fpxPqz9",
  "key34": "2G11VKbqJBN5fAfVZifVWowDYRjGD2SAXT4t8hwqg9FPFuGDTMsXrn6tJ7tXWfQdbom3k6GCwu7XFKapCGDP3Ryz",
  "key35": "bQyBb1HkEpEA5ToQK6WpN9fxmpAK1aNsi5EzWb9kaX913Cq5p1EPiGWNr7a1bBnsgFnWZ3kfez2bxLzT5W66br8",
  "key36": "i5WZAjvEd6ws3fNWmFS9x1AvMJdfixdoTYwwvuXPshUT98yAniLT6rWTFchRX78EPtJzrXpR6PLBD3AM1uzeBkx",
  "key37": "X2geHbnVE7o6UBrkEf1ThT1ga6uoE5LApWW79hCVxZKiTCnqWSDKe1B8ojfzC1N5fSVmkkjB98VwY254UDEzP1p",
  "key38": "5KG8R2GggW1ZV6N7ECpnazSscPrRTMgyyRagqXUpQeX8Bs1zAxWRHUfXm1G8cGDj5Qri38xsmfTtYu59RobG6CeM",
  "key39": "Sy6ZZEg3DZ2rTkyoquDdKjMC8qQw9Kj4CZbNBddEhtCKgvmhHmULWbTS6heSgwnWVXTNsLB4nroSBQWR2iwajtL",
  "key40": "3Y7m1CtYssNKhYUNAz7pRT76a38bJGnYpYngRyCm1QhJ3BKZgRX8VHfAt21yuuDJZCZcLaPpqmZ2ymCQLtQTZG6v",
  "key41": "4xaXhWQxSS8636LB7nYg16h98WoGnAJVGgBn9N796TEJTysS21qej66r8ZD8RQYJEspJktQCAkkbngQzcXdNsqqw",
  "key42": "5P37NAtNDHRAtHy6us4tLTjEDvu7maTr6gJ1ZZMvxwg2VQ8MjCK4HAcS466NZe2YLms4Ahdxgb3kGbAyhwqUrosL",
  "key43": "yAeJVFfwZLnpHtTd4LyXLieapuAXsjL2oRkU6LzqoJ6DoQ7YCHgGXCs9LLAQ5HNnHVHCh6jYRKqFMmDLgX7Cdxs"
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
