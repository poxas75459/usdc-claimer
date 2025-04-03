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
    "5gjdrBWiRk2PE1ZoE698nLfwGqHHDcVxVRRCbCQgX6HpBeWY2YyBeudb7zZ4N8QwjAVD49w5uwHS9agnt8gMFTd7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JUQUZCabhxyysZqGtM2nGnE5WormbVzv2FpHNPphWsp5yjjcxh3AMWs6FVwVH7RrPtC86oUG7NyTHHTwDzHfGHi",
  "key1": "1UDiE43K5GZ3Jx7awU7E84Mpdykj5K8bdf5fhMw4GJKLbJpEYfMGdp5awHg43SoMpTGR5uzfhKWTnFSuyh23mf4",
  "key2": "43LD82f3Ep7EaDujuM7APdAm5Ftmhz2DZ4WRbQQEhLHjsi3WM7J4hd1c1goNzWVr3qJxuwqvyyWDnV4YWmUmzYvD",
  "key3": "4DgnDbvbgwMgzF3itF9Z5P21szqKWR3CczidGqsNm32hbnBuCotkKcHDR6SvLyxKGVwttJY8pEaNBkwziUJ23wp8",
  "key4": "2761EWEe2oNYzKwY4jBvUDPnp2SVdGr1j3RBsa7Yc8U8YzDSjzkteSaZnDstv9pfHn5bL7GAdaVmbAFHuPCrnv1z",
  "key5": "2uEh7Nshaz8dqDufppwzMtnv6qJBdYbX11VLJMiJrdB3FhDerwcyE4tJfKaw8zdz4ix8Z4gfWY6viYc88oYof3Ze",
  "key6": "3SHTZ8TVZvMBTM9Z4jdu9FQEDz4MJzERhYkzQi6RgR3kxbc5Gc921TAJR72DT9FYBQyxgkzpNNrZmTJTfLUAF1pH",
  "key7": "aNTqc5Wvbxkpxm2NJwuPVvg97Y5K9yL7fLALzrNPcwnF6PPZovGN8WaxpHpfoAkkavyYriHqZYhogDTeETKmqr4",
  "key8": "5A4jQL9w8nvDjMAPhipdPohMbkg3PoGVrCGD88q4juKqp75YvRSVxT5qWEVjLoTe5zDL4AMCGPJVqUqcn3XXkg8k",
  "key9": "PJZkvZE8MbWeHiNAfsQDhBiAKtSAfWEeVbetSxanQ6C6oEE6E59i2nt8LRKi1gq6ZhQ9xDNRUG6f1YsL9TiK1m9",
  "key10": "5Uin9fnhnfeiyvKgTk537zZeB5u4t4pjdeUY5REqLBkmpp57v3F8ZHdtCJxeBwjG2nKuLNvx7roJfepsHa8n5Hj5",
  "key11": "zStFuJjKF258j2Hu3PEA1VdsUmKHqo3fheXQWBZaRWzvcZ2i8QsYXUUCdfswoUvP8wdxBMDsREa1txgAMs2oMop",
  "key12": "5bAkPus52VWyKugj3s1qiqWWGnHVsNDnXZNiFH1JLDugYCAL6wsxV7hKFtKuvvjCft3BFdGE8BkaaxMLNstdm9m9",
  "key13": "4fV3eAPADeV2sg9kjyU1yfU5e2c2qNnq41ynPNaSV7NEcsfg9ZVgU5uRc9iDpZU7ZxGHqVJa8KybEqbze2qCozyX",
  "key14": "4usno4aH9N6aQRCcVR1A5PhcSe4HZ1mEw9H47qunoEZWnc28Lf9gyohftHbeR4hD8GtgzweeVYQtfzf2AqeCVrMb",
  "key15": "4AhGvPhQJ8yUPEk7n9rLfnR3XoWtXZ3QCM4ND2cPxEKXGveT18YNDZFY9moudtwtexvkHR6HY6nBrSuYXdxWjtxg",
  "key16": "29wKa7iNW4q3YTJcYF7bhZ4qKWqgNzVvCY89CgyakWuqWE1h3cph6AJ8GgUKfqKTxW4k5kkrcGi9HLS9K62Gdieh",
  "key17": "45oeLDqSuDU2egQ2Qg5cYEKfPctEEnLJdLBWU2hTED1rYMBEM1n8w7NR3aGsBHQYH96JsArvQApQKBz97yQfTiFH",
  "key18": "4MRw1Hs4VX6pcutxoj4bsHnAim8DbvgNd1McLneaRjd5N1SEQGBAeUDh4hK5A1oXA7LRfxBN5hAMv5ZqR4HcVLxp",
  "key19": "e7gnJd8pLR4SiprtergigAkQ1FAPiyDqT1q9F2euiwb4c8Gd5pwLV7VRn1C8jXHcDrXEy32B3k2ixKYrxmABFAL",
  "key20": "5bgenE93S1TfMRfn9btRd4o4ShyopdnhBqvSLv7cwwp37BGDA4TTkQ8Xgnc57JJySpeVFsH8gQjL15JBQ6QJNYG8",
  "key21": "3ohzMKr6DjcHDaffEdLYAczJDEJ2bVtEJtRw2WroS1mDr7h4x7jCpLwFPKLEBdohDKjDU9oWaXZgL9WEfM5kT8Ab",
  "key22": "2wtKCFuUMjbBffocGfXeabfhZHv9UWSiCBi5qstZcHesb4uUzTDcuG2bWFW7zPXCgxcv3UcHfwhZFe533B3TGsah",
  "key23": "4UCPJ1ZxY1kjUGzDgMmYyyfiMJo1ZMJhr6fiViSHXMh54iWqPGHgcUP4zMEX7uptvqJRJDgDR4MWDQcHBbgN94Yf",
  "key24": "4KRC7eBFMqF1ieqTwKWeTAi6L6UBeLot93PAeFNdEYU9P1tWeFToCMAQRBsnddJM5xjFVS448nWa8nHZMuxiajBK",
  "key25": "5ujDxM42puNLT2Yok4utQqTjd1jCyXhYxPYUC6Nv2Ma8zdRQGBTU6AE4XiXZAHLYYw1F3Shzau23DNaFeBSzDwiM",
  "key26": "cTRL62E3ZMMWuJ33q2vZAun2ceT9kTJGd7g3MjRJSakoh77zSgMpKFbzCYMUw92R6Y6DsXiriPMtKdJ6JkY8b76",
  "key27": "3EC5pPqTMTwFqeygbHn5dupVJ3ueFAFHUc5T2hjEg4Dt5C7VYjqHLRJhBXf9D4eP6rx6SHPc3531889Yo3nm4ac4",
  "key28": "3xY37sBhFzoPdZ1wrMve3PUeVW3AierqJLj89TV4gi3c8W8UiVAEpRWCCbZZZNw5cFVQYQuqSBJSKZYbRczbZtym",
  "key29": "3Buxhvw6ydv5MQe2aQuRKeTRV2HneJbzXk72zmFWksTXaHXD1Wqz1pzXVHD8Tm5x71PNvjEAtvENMRmDsAr9PYVL",
  "key30": "2gg3kYv2tpcHBDAVZabqSQBvw3k93R4X9kPW12PDrT81vtV48QCRzB9XCHrDAbs6PxremdYzhKE61mJkQ1oJL2Fh",
  "key31": "2TTvBETrUVh2HueVRytHAyRuXqKq7io5UwEVT7ML9EedwB6pfAKfa94AUr2rTBBwUDYiJ6vTXLR9APR6zapLL58w",
  "key32": "sZK4bMVghx8AEmFW9oFk66CzdVred1DXStVTrhx3iGHLaZsrJzqhKhXE9uSQNQsnUbhm8iZGkkKDyYc9edEYmeX",
  "key33": "3pRdzC9SCbRDeMZfo1HhK2zLSevRPVDG2LoQz6BoAwQS9bGeXQJGhAste8yfNLDANfjVmmF1SxmaWuyhJyoNfYBZ"
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
