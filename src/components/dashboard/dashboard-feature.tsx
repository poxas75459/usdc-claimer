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
    "4z5MiQdskSGKNpULsxFKmw2WuCHdZkvvZ1591K5ek3iJR7Hcau7TQh32pCRnxc5JiWX3qswef74P9duS5bhbUWfX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3n29UMbEQnpooZvGbKdeAKRMfMsNsmqKu3sx7AdGwAi8ZkYD4ptNkfFKc3NzWhbhADcnRb4BoGtSvSsAkLymsHQB",
  "key1": "3Bj4Zcd4zJqwhe1mfXkAhu7epjBqAFRrPWhF3fbLyGUMs8Mv7nDib9dZmb1fiaqgEoRxvh2fHti8pAsrjX7vbiin",
  "key2": "5hsmdGUs1uBaaizadVqzsqLTRDsdHiBnzuRqQGPtUFrgrPw7r8bFECYjqNE6VwsuzTTWhxz4EyxL2Kxr1hRKbRcd",
  "key3": "2oQXFnTM2MUD2y8SkHwfuPbg9fEiG4Wq1s3uNetDdgjVgtkmniYLd64LahGrD8aSpKsgqFsCpg3EZSAyUsrYHUAB",
  "key4": "5dGKjPHNyfU1usvmUH8x3cB5ZAVHD5X5oA84XU7SpDuwZsJ6V2XgDBN7VBe3SNur3AfDQ6Fte1kryBqRNGQ9bd7f",
  "key5": "574JkUkuGAG9t5SQFdGi45V6kj3tW2ctDGd2Co7acuD3MsmZAk9vjxWCfBhFqa9Tip6WdiAqainjodAj8Tw9PyvV",
  "key6": "5ZMGLwGgb6x7y7tVruHJnR7ZKUeui9enZFF25T6fZETAxd9qGTT8tuPyXqyvbTaSBo7z7MEt9b7o8xPne27Lfmei",
  "key7": "4Xcf5Hho8wyicv3B8PdCdqmi9T68zC2i6NyJmJEasiXKq3XRaohDU24noaoxwkCD4e1axHnsdVEz9JAnLjxd4TCG",
  "key8": "3qTnracwiBcuvDbCppAvb6Y8xDKvPre167UhxjWXkWbpAykJqmkCemdbVUaSD44QjkHLPLxtuXhrm9hc9wJ5SGfx",
  "key9": "Fto2gDRJr6DEEgtWme5ezBNnart7B4QTDog3NqUeEnK5dKxUd8RcFwYvsBD2bu5grTZZLqfJ9Uq7hZPjSibgXXG",
  "key10": "5iCxuuamKtkK9m2ETTD8riZkkTi3xXdniRkTCuoZquphpaJeMWY58fB6RbX36Ej2czCLq66T2wkukrWhrn8RHDmM",
  "key11": "2LfRtdt5tcFhAnYB7Cu5sMxWkJWv3MQNBjVCB1RtwKf28WmD7i8MN7dkdcytqSQhoULJEchczwcwRKZHfyUbXegL",
  "key12": "2yVExBLCTkmJmrc4b2wD1F8AgVnPefJ8TZDWKSyENAQkgB9u25v8WzcXvMGrvZPJygVYHPam6dHyiiAGUqrGgKp3",
  "key13": "4T47LUWt9DrApTdqBw67SjyibZpD7LtpuYiyMFt2akEX9DzbbdWwgdk3U6Doz7mPk2Qh9nQLhhaBfPkhmrutsnXd",
  "key14": "5iZgkpQmfj658QnF1CcQUE3E7frS8NgjpUvbkejA1LKpGEcAMbbXpeoMtkytnE3thNze8yWhtC2EKTeyPesVfrjt",
  "key15": "fCUP3rkHxsWPunNSj3Ngb83o3bogtDny1WE5nTHKAv18eEwcLF4jo8gqVpkdqDsun2Rjjh2JPb4d811iUpMX4uS",
  "key16": "3yfW12zD7cgcS3Esbdhtt64WdA1HC2R7UceLe65xP1amLpXNinnw7FsdjBoofPfRrb4PuEt2nLDTw4sgdujXocAN",
  "key17": "4Q5r87FfyM6xotSySn6TRB8rMFa4VXv8fKGLC197Nr8ZbKbZWzmJiBp2w9RfGjfM3ewyMsyEnqtvfs32yc6y6it3",
  "key18": "2Vobak4m4eTKRthPpY5FiM2GNNULqvQKWM2uxvpLugWrqbRByKS1a7r3LVCojJZ12QDWZcZtdNc8ntyBGSidS4Vb",
  "key19": "aoAcaqtfdttPXEJ9NhWQCfkip4sZKRhKqYcitznZGfkDfzXdjFK8nSFKptueAo86sL9VupPWu3cCLWKw9aRZYSn",
  "key20": "3uMrjYCHz76U2tFmnhmhjRwR3uuhh6EdbaSMa5TWdJgP7WzbBjVXYjfQ1atbXMsLE8Y7LbPoVigV979KWmG7js7V",
  "key21": "2vLaPAmW6bbMpWs89g6Hd5dn1Xkuwpz8Tc6Q8NmXTwcYqqyoYqfVAapZZSJZgtvSM6verWwKzQLZVV4bCzE13NYe",
  "key22": "4gv7XYR6uDS2CJnByS1T2d7Ca9ZNRkDwyqJHZ3E3c3J84d4Jg8D3butX2MwM5HgCTX5xX6wMK7ytcu8757vYTdtY",
  "key23": "3u3NF2wiV84BbMzVpAGpW4vq9eZFftarRZAy7GH7ZyiYohvqf7XbdopDjpN6NX7JunQ15cvrF4rWiZcR9r37n9Yd",
  "key24": "5rA2wBLs1wZoGpWrr93Y8PvTnzQThVk3CiMxTTPak9HwuTHxbyMPEWxTQ9czpJCHKU3CVYH51XCVAvTjkqq9yB19",
  "key25": "2NrexHVAxsrJUeAUibLV5gKE4hLiT698HNhjxwe5Jc7iTAbTKqYBfLoh4zVXYTB63mgEZHp3weC56TbeBtok7ee4",
  "key26": "hrhhZeFkUvCZ3ronarYoGxsPa7tzhNffGEj3zaX66nM3gm8GxkFNAAqGx6HWYdQWn6nfV5cK2HpAT3354v7P1Ta",
  "key27": "2Kt93Csytnfv6AP5BoTYwqg8Tzypwhc8uBrMQtGqKzAELkk4e22kxQnqSrXDjvtPYpPvQ2tswbQf4NVjVfVyVh4G",
  "key28": "FUgb8n1swVpho6XYxeSfi4pabMKAxzCCrYkYuZM28tyW3EjHJpR2k6NkpdzVbQeFgUwbtbPnE5DurtKF3YQuRtW",
  "key29": "3jBM7NWmZXhNP5bGsQDPZYLms5pxEBoVBAa6c1JtDymagvRVADQwBV32HpgcHZYYg3oQDZ9gc485j32UCwLQnhQ7",
  "key30": "3hXrFgjXYvJn1hebG1svZvNwYMJCPQgJLaoAZ2wuBHTffgmiXqD7RLo6zi47cJrun6LyiipPbzi8e8zrMAFSXqsN",
  "key31": "5DoKqiAUc6kYpiHMhrnpy8WrmpYaLX2kf79X8UHNNa5e6kWeYBB8SxQEogFXwNrp9zUQkkh1Ankar3hBXiMbrzUb",
  "key32": "mTjQkwdhjaQgZEogyhoybWVPHucKE7C492diE2PmiUQicBztzAfkNebqRfuygPvtfmjmQrXZiZqhXR2ejRhdG5E",
  "key33": "8CbFJYu64ZSdcBYnawUVb2xzNygUBpaLXZYxRpH3sGW7tSzRJRqz8LuSbjy5uWrVxqgu5eyKXoGF52nmbiruQ4M",
  "key34": "3XqnHHbeowteXrFmzJgyseHB3v5LhuWpgBzgKCLNMDHrwEh7caM3bArjrfiMMovsm7vpgzfs3CDWYLo4BnTotUjo",
  "key35": "3NDn6V3cK4tAMUapKQdUDuJZgEYgNdojE98c7GFRFJRSmebTKKEZyAZWyGVQJ3GMCJsSmfaXbJByWSfTB3hqPrbv",
  "key36": "5PSVoH87EUtfE5un1FDmCydwC1BQGtFfDNCEE2LfdAkA1CXrHdUCZRrNjAq48TMBU7t4moxcGSYQTy4oD4BRitcr",
  "key37": "3ViuQtbQuCpZyJ1B9X93pq7wpfwsespMWAYXSyzYVRxUdFisHgG3fgX7aUbq54YMKDEqw6qFHXTjTPuYmW1ZSFL",
  "key38": "5GUnxpFPx7PLmNhprQPP8WwqLRxioFTVcZSnFpS8FoVF94onSCrhdbSqRGSnUquPV1NkHdRPvDf9ZvUshfYqzFLK",
  "key39": "2Yv6Mb4vWPpRiHDKNJKnRk1bhPeA5R2UVqBeqtHkXQUCxQSRo1QkCxmDTeCDwLk5SsY3Dg2Bi2UpmTMxARZGkW9h",
  "key40": "4UDKT34ZTpKXN9jR5QG5gajQAtzw1jMaowM7gJtbrvfWM5uXBs6UR8a8QdNaqQPDDHNnaKQwUBGbSr4xFmjqbKDD"
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
