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
    "28CKJFpAhuCV4NEr1gn3S4w352D1DJHyhkZEfZ97qeDsj5JrTMJshq7YV5bLY8EzvKKa2NzJ6hNsgY6ncn6nhHoC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UvBmAvEiGNumaQvA26YHGmpywmxmBBiMrV41degDTTfbCvY4BwyAEDQpbJ7g4DwnkZV1HibCqmgLxvBStoDBhBf",
  "key1": "2DmBeEnQFb7uqDbTmgy5pdiZViFFhXahx6J3D6jQTeHuEBqJjSST4QvtZ97xKNFyLfpwEMTdB6SnXuLG1tJf7Vft",
  "key2": "4tjDKT4BE3i5PG3GPezrLGTcAowNBVsbFVCsQi9rTs1UamQ3ge46QEsUxUSPnDonUo4mgMwzVHZhNiUbfv7PrJok",
  "key3": "3ZasKiRD2mJynG9G5HbxN9X559MdCzJbjWu6EzxEG6KQu1feuobwAgTHTRoWjQejbHPSNyHAwEEkZGBhMaWm6t71",
  "key4": "3APPRPykZuD8iMm42hfWAovo4Rs9YWbdnFPS3i9m2N7oV2Q3V7UtPx2eHc9A45MpCcoVYoStT3mGWYVuoznoQq6i",
  "key5": "4xr78suz4BBstGGRj6jtw9fLGQRzGwuNwhkGHy4DGxpzgEsqN3eLLSQkrXnNmHb9qEgT5CuYipHow6ACDVX1XWic",
  "key6": "3AzYYehLvgR1cyjfKZqkggaxk1cs2U1XbM9R2hwdANPTctG2dzBvrm6wxpqmoivcbSvJb8XF2RG2yhm4WQ3t33QY",
  "key7": "4aCndpH5QynCAj3Fq4H3KcJCB9QHLaBZ3Vqb3uPaczwdk151T88czJFRHG1fcZLCmiDv78hgyF9piKkNU7VY2e4m",
  "key8": "5sr4J7yjoVLtmghtnuXoNFgR5LWURjou3HcdqVtLjkAFoYNE1W567evRosVVFMCnyYtujYTw6QajkQf6gKSKHDLE",
  "key9": "5Eut7yHy5aXdmmaXiiMHo53bfJGM1zW5e5BpCGrTLVvbG2SA92WfDnvVMtDe2buJSywQ8qsMpR76vw92q9ST89cN",
  "key10": "2nULrCWjGh3bkGXkMTZLFLCKUjGxXztS7P2p7jxe7yRNFwGVkEysWj4S72vRQAP2n1xEEaq6MFcVyrLWLQ388FVN",
  "key11": "vDFQQsPYymLbGTXHxhpZ2AgaN1iBQwgZBpggUp4FUMTgjhwtxedETBEufnfp9Pjf4oaKQAMYfFnWLfT74kEqoFe",
  "key12": "2rgNxQt3CDmvyCnfp5uVaSSYWci1ryZhVFz4AJ7rL7DNmgvnzhYtGHJFUQ7XB1WA3z2QKpXmu3sSyz17zBKJvhKA",
  "key13": "cwP2ubCZpLhEL5PF4ggSAM8cBW2ybW1pg3mxaYti1RZc295CaLvqYq5mziBKRhvjUqU4NQvwrJUPpB5MWxgcj6m",
  "key14": "4NVjquvxYaa8GWXX7ELeXExW6CRS1r5E7deAH7gvwhGPEHJss48EgjW4krhyZ4YKaMPmTXT1DYDWK5q53LoNhRew",
  "key15": "QNmRhQh2DSXnjgrrGxHQcDbpR3WWnYi9v4sf9GZ4okkrPGWyGEHsYyC2vybEQXUjdgZrb66akkcUg639PTMePnU",
  "key16": "5xkuYpGqc5Y3XoHST31VVmD33pGsaCLUn1H3hy7nByTC4va2coZhr7aesnbtayHJQcVsaUoxxEypQrLKKg6T8Fts",
  "key17": "296T29vyPuioTcs3da79ewM21483Hw2R2sp7FyzdyWNS2kqyFkcTqUihJRGUGGUcpmRGhSvEtWXbdXEDxkbUkfnK",
  "key18": "5eU8uBN8TbxQKe4bN3jHZnmWqwD5mBzHZw9EfGeQ1tkD2dAySg4kcPYaGXKv4RGSGmyHzaDwigXdr5LiHjLrdnNd",
  "key19": "4uvpaQeNgug44q7UqcDAuxnmuowDFuNkhQfXxW9vDemHY7F6wDar2S7qV9nmGz5hSejwBo5yQuduDuGAvz6cwfrF",
  "key20": "3eyWsYFa2ypfTCuLTfBN7CSqXUJ3WaxoUKUvimWqaUz5Rh14e1Q2X2PmjHEL5zJxUCKK6ufvNV22dV8S3vSBF33J",
  "key21": "hUf8fdCmFvQG7zFKUWAESsKTcyE4QcwKTK5fRjsdcLfycTudyKcVPJMcumZqCXSyczNacJPNTBcPvhJWVd1bH4t",
  "key22": "2w5BUTd3kxGLpUUDYFsUDcraC4N9pWqyvhRKdkNVN1Zw9y27x3BMrVEj44ZFSu62HYhc8eB2mmscxX5DwUPyb8DQ",
  "key23": "7VGX2VN3wshqVAttDEe6dqpCUs7huqGozWq7bNnKQAfnPETJiCGjq57yNPBbhSqZmtgumHbuEDST7CJd2ch4QJX",
  "key24": "3tJBhxrZS3sD2GCduTyVDGJXRHQPQ9W9Yq6MfuAd6hxzyBnUpjRe45zyKXmZENzAD9zaEmBfz1FTVBFj7oEJYxpc",
  "key25": "fDxB1ros8XPki2RUjw3TL8STMwgp1EZPfcqkXRG88DSqsM9UkdQEc5n2H1LXUcPB2RtSEfYgESj3cSSwZVKzviw",
  "key26": "KiWKXZmK4mtYr9WUbmdmMAfyfQFzGT3S2FrFDiPREqp1RPPxgFVnQcBujPQYPPZrBtGBr6WwaQGtv82MFpi6DqX",
  "key27": "54nhq1G37rAqnJ1691ZGRZFRpWUa6uTqmnhYBjvLfFBUxLERSYYVNnr5ABMTCEwQcQE9NeZdV1sCaCZ7V2m5xTV2",
  "key28": "2rdg8ce5xtPQmsXTT9jpquh8VBoiXbJ988H2venbGLjWtwjwHxjReXpiXEq13zZR2DzUxM7F3ycc7uf8dMsEPEZX",
  "key29": "3nwsatZTZvGTvxpViQSRg33XG9ZrVhNTK48VjQWyeJBUyG7LnEbF4rEYzFvSivBPURY6sbjhyRxUEm3SCEpyXBrH",
  "key30": "3qmASMowBqscx7oDGqSrA5Ki6VAGtbkWMcAMopuDvgQuHchcq5Ryea4WQrbsNyFKz6kPCMLdLTcTC2TBFLA2pnUw",
  "key31": "wmd5U6vQ8B1WtW568CCSMFhHh7j38tMqMhVJqopj1FHBJquMu5TgvdmgjjCnK163jJRG6fgqncPvHmPG2iqdZ9U",
  "key32": "4HTVCg5KnwxYe8PZrkJLShXXvQTGx9pCF6RdG49TcZqQVVk5rJewNHteWiTV6giWQwUsm3zbyyzfXDRhXvVWod2v",
  "key33": "64cs8CX2sSEguFzAxpN3sC6uy8sETjccT6X5JEWa3U9FyVZWrPonArnWHJNVzcoAz8hdSERZsGdBwmgBDckf3Bpr",
  "key34": "RkgmwQNCYLPw8so36Taq8eg2WdxzytepCwv38Jon6E8DJnaZMEHwWzeqhxp2ZtNoWjdFGritwnnHgcHYCEP8xYD",
  "key35": "2d3TGJzve1Cnnk9zUsueqJB6E8JKf6vp8jAkSaGNTxRx2VkV2HkCm3nBdwaqPakTPJYjoWagFxSNrG9UXdMsfNzv",
  "key36": "4chnFwQ6BmPooHjePv2aX94AbJ354i1BGLaffVT5ZveRg9mGMSmWiq1M4hxNq8ZeTgrtfyfX5v9iKC6BvZZ4x5Gy",
  "key37": "4ZQ3Z7kQns8pCrF9wxWWgtnKmfYMCJhN3K5jm3obr7WEcgZjzz5MsJ1KmnCkqRGkDYM2HcJDkNArWEfTc6xRGj2N",
  "key38": "LGXyA4EVHZJh9wyZyk8KdmDhXbvcNgiVBLUTtp2PEQS2T7D2eVZRNUcAh5LEAW87bvdbBi4pAExtjTuhZGvHrTo",
  "key39": "3t2MgTrFi2v9522V21zzxqSMDKDzhKjRJNXXUkmV3ArkUvaWFpphYGeEtcN42XnvLF5MEYUFfgvf1tqf6XdzrXEX"
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
