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
    "4qf75cvbxpRVrYaGgXevhAn8kWNEasSC7Xd2R6DZVwmgazLBWkZzTE9SVew9miPk2rVkfFoiMyCH4rGDfWvQS8N2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LByAw1Gt4p1Grzvi2Bv7WwriWu6qgR5BG4uqFXn7PTBR7XJk6jDx4CpisfKxqswH5a5xYNdFocWyAdktuMcRgXe",
  "key1": "2aNrEAjkDFSfgosxReNN3MN5BP6ecJkubnHfAVCxJRPwJ3C8Zbm8xATCWBCeTugjH36yaxMkoBQALdhAWyE9TivB",
  "key2": "4br7DNqmGnv8toCjHWkpBsbzqGBuWXg1syXNwzXCd2tkMrHCkpG3mmeEaZNqJ4z8MtbaoSUtHGshELwGEw3DKyeX",
  "key3": "3b96B9EbD2d46UbBWceq3u5bHQvgDJ8s4r4SqBaxVsTetfT4GPbj4BXQRX5ytFpzKmFBpcUWC7WpFSqzsjWho8jG",
  "key4": "5TwSTfTZJGR5LFGDgGPKvkfhqnYJA4xwk8RuRZtYVyy9pNxCuGHU1VPsgoxTfrBzD1pVFbV6wusTeUgXeJAYkRd2",
  "key5": "J8sKU7NKhGUHdKvYbL6E2CM2qXnGn9LBB4nbV5wV1vDfoYCT9k5iwhNcGJ1GUGZk4td21ATX7rzSoNJYjDpw3h1",
  "key6": "52KaYgBFVwGJ8bhgJ3YhEbdXp3jf1fntZAr9x7NTccqtt51ih1duQN2WTSHkvAVqDnMuTskGBmKY7Nv8gUHpcLcb",
  "key7": "2rEfY64ZE5q7MfYNhHP4uU87RCG6BADvUFpXcTJwoK3JoPx6cZLYd8HJUHDqyhDpCeafAgtu4V11xa78MD9q8Bfh",
  "key8": "4Jr57n7m5uncJgBz8HFXutbHMQZKZFXANKLn9iud2cKHMYxgohdeTDoYeTLjSf7HdxcVbwfpmqyabGfTM7VmuKRZ",
  "key9": "3GvQw9fDQpTUegGGg1xVuKeMoUciVPEQkxA3jw3owua1k1odSbQVBeKsi1DN7BtTaHYAmqcdFvM19QcBSh39pQyp",
  "key10": "4HAeZPgUSfPkiwyGhnMm5Et21SH4pJrtswqLDxCJ2SnULxo7ANLWu6b8tkXkd3Yp44ch97SKYMas1Vd4RFx4aWbk",
  "key11": "isYQCKWkJEFuz4aZYXuZbp1DUgzND82wisruEfHu47rdYG6SVMpNyaFF7yvMkAzBtFnoNCrvdnLqfa9uN4Z9bTC",
  "key12": "286hTde7x2C938VeVwP4hiG7r2YGxFy9FpmVdfjr2kHwhfpqjEc77DLB5eDpdjnSwXB3K1YwbcbA3WbaPnwvAYf4",
  "key13": "5o7GTBYPu4662Uq8aNjYeqhMfKQaiTXDt6ChMztZjqYhbef6bWLe6AcaVgZ4uKA5ozKX5Yt9BPsgK5sTP194Brch",
  "key14": "LARBPkLBXtoTKKH9VtyVKxz4hdmfwwnmkzsdVFCeMd4ttjgq5SHA9kCffTerW3BgNBUqHKQtKdczzWWLnsexppx",
  "key15": "Wm8Ft5G8ju9bnuvZwXQqKQGJYeWE3a6EESpo1PmjbsyvjoAUozvmxaczt46rWWQsCENoiLKkeUTmfHKYqNcSCiZ",
  "key16": "5qH8MFSeMXYLwCxBw4mYvf5MtrTHvrRLtbmjHpZt1ppP1zDUqNTFBj6emMjcyvoZt3iUwUYGUXJwvwGqKZHMthNw",
  "key17": "24iayRRd6GH3Ei5UN85j9S6ZaMQMLSH84qKFCrMTr8rsnxzG722hGiyuMk8FyRubqWXPG3tmqKh2BrCT36XSzxEc",
  "key18": "4jshvSbS5eq9t1ZVQU227aRtVoGec8nL76Yb9z2XpMuJATZ6WVBgiXLE4cbiWfQCS2WAbW9weqAn5oGGj9ExaoR5",
  "key19": "4X8VUftAT1w5MJpL7NDNWTJBXPDrtHqRwKzpHJdX6VXBhFpEmyRDT2W6PDfJNJLT544vgCgfHXX2Hbeky97qaU5e",
  "key20": "4hameRrLVBpvcoq9zBYAAnhGjSJPWRe7GbccBYWsEeEJjPLKqhKZWLHe64EKjTrwHVKHmBt8jGgNBt9qBYZLyj2w",
  "key21": "RMeppVqJsfxLpoimt427ojfhYs3rjDpKqVdTJ5SMhsg2tvmdYaYzLr3k8QEhqaS4se79gsLAUcUm8nrRiF1hriJ",
  "key22": "37AjWNzC111RWF9ejF7W95FRcgd8LByf97Lt4TKLXjTSCq1VvV2k47Tm7ADt6W7PxkenPmg1FTfwaQrbMvVwGzG2",
  "key23": "3qHdTWo5khvvjKHLVFnpT9fe89WbVYZdbXDKk1qr1xhivXnogFohXJq3awg3dV1m72e2CSG5iSQUsJf7pcLg4MfQ",
  "key24": "4Mwxaa8aAbXdZt4bjGrgeRso2tVtNLPGmVyFZ5J7gdhCtYC72A3eCAyzttckiqtr2yvvr2qy6ay5qkTPQyJRe6Dk",
  "key25": "36k3SYXRNrfbjk2bXAvHBFFyCrxfxzM3UqByaL4CMSTiFTMsvto1GmhhtdKvqEyAmU2kRzeVdkX3yULT2oWhoKg",
  "key26": "32ZeZXnDzZy6gSnGdf1TgmEmrvNvBgKd7PXMegcKQEZS6EKZQqca6iUFboA9pfs6LAKV9AekWnTjvGVzuEQ4dw7p",
  "key27": "325jQyDoUrA3LYixdFZekK1bW3wBY2VqfgJD3kXkV7qRDf6YR1SYkVQkzziGsNHWVGEL8GDKN3mperwoWdcjbRi",
  "key28": "2kN6KJaL7rE9EYzixoGZRKQbMCsCjxjtP5Lh1RNBp44o9WarMtfsv3hDauDfTj4K2ApkTb8QVxEYotNa6jx1Rgtw",
  "key29": "2GZ9SnBJfMmxNcc5TvnV5Uv4HTmgqXBjuhdSdjJEuqb4cV2uXqTTrTwM1ZrMtUMxRbwAgmLfgJEqSpgyKc1CJYNo",
  "key30": "2aTLFV3uv9E5S5EExmJqmJM6yVsNat1yRD1CiaDUWxAXbFLJkUtUuakG9KBWYRD1B5vC61S1XKsTXfa7J8w44DVY",
  "key31": "3Esb7u4TBZ2V2d5HEd28bPbGtX13z6NpXkx77XDAAmB5Nv1m8cgemYowtFBNXZ9XEvWgXg2eee5RkeFSZL5rFEVr",
  "key32": "CY5JdKtfLsQRz3vqh6vGWwFzLjTxHJ3HBaSAeM3hp6LefdoWr4zQgBqVqgq5hMz12H36yn9ShQciYH5TcZT17Db",
  "key33": "5CLJEhJQAMyPVCqWND2U5yVLamrF7EuiuEMHCsaHW6jNcmFgUdwKe95PTVfCLndEbAk5KMvqJZUbSfWzx1CPTMUL",
  "key34": "4YypLUo1XZRV3UeVWAwV5Hdpxs6fHqniRMRKkPXAsNGCewdM4x2fjFaosW6faT9kQmZ6eJGZwnPSwGsYhtaWT6Wy",
  "key35": "3UkpR88yqgnaEE3AJhS9CsUdRWtG7ijBFfrEc5eXBkLHSKGwEcmjfvkVWfFAfWbhonZVy7pzuyxs1DnQ1VtgJt2q",
  "key36": "4zZcrAkQ19Zm1THhJSzoB9XZT9qSi9GBEH8vQSxHsZrdAckxjm93TproRwfVco7fsSGi3RZvGkyfYF8eZnhN8H1R",
  "key37": "5BcEjPzZixpq3HrjkANMbScb8ediUX3gBLy9iteWapPZHUuEKZxiBiCragV2ZXiZq83pdJWsRUKmzyLkKPDcEmun",
  "key38": "2vesCJVJ9Q8Mw6YtSUrBKXUaXxm5zufbX9XM23tdNMH896PeQLK7Lt3grP8Tv1t3C6ewEjYd7cSZQLf6SynTjGwV",
  "key39": "3o7q16XsgEdRgMLJ9kLUSg7eV4xL2wix21p3AX2qByzt971NQXxHX4QMdobJ83WU3myekXstoYshr8zeL4gG2GPV"
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
