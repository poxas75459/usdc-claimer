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
    "qpZbNuLkkRd6ZEDjrx5XkEtwSuPQgTaSyTnJzjNyPka8JMnUSNPqgnMrku4gRhTJwArfWTzM7dthk35n4pHQrV5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33AYG1RgxCy4N3rfQvKHb53Xi2EFbUUY1EFVdhm5xauQVqeUCa3j8GGx7z4LPbqACBE5bhMz4o95LSgqQWAgQnDf",
  "key1": "51FvBVNCNBuH1fBh1wMhQzy949PT9NJLqaLGyUgqWhYPLDRrHNE39uJFUT1a1yxm9pV6vy6Sxg5nb7s5xV4k91pv",
  "key2": "yfSBMhikh2Y38SGbAv9x4nmZsakGpVmpkYnD6GaJS3rqN3EwZSSQhppvgvtK2nDzowTR2jXaAdjxeAj7aFN3s5d",
  "key3": "4iuUyQdWS5ikWxcNPkjmx5FiDLuSPJaVe1BQ6KJy6nDQiVZPYUb14KzzSwHRRHavpUzkspdFTog2VMbXYvGitYUU",
  "key4": "5WTQj5jQm5XqfQEeFoE1dfw7qg7y5iQoMqLB2FExPWGNvt72rFrmABzxRNY3nunLQfrKP881eJ7qWdRvqKNCjNKz",
  "key5": "vgx2ja5CbaGEmC4r98dvVniLNqEZWCn2yDYWA5MhFsCdyzTWzSxkbMpqhRjvE1cbdvVM2DaGsD84WtoWGHaecDW",
  "key6": "5UyMVr9cYCyME9CaVujfPWiQdewC1zQUhsiDCtukwZPYBzeJhdVCXhZMLkh6KxBFCaurHd3i4nGeGXNaC5HFz2Eb",
  "key7": "kYT7whfMXuwqApCEe2sbHJEmEUiCESWkmm7CtHXZqpmEEwHd1MwTdQ4rqbiRT8c4ce85Z5WRShXubjr6ojforR1",
  "key8": "2ZixNRKzhh4ToMvWeratmnxbgheUbtxuCCapUpPpxxFE4NXY724VKhw2zEPtRRTwCUKgpcVjJtVvkMuiC55jHSZJ",
  "key9": "5vEWn6WNSXCefpYBx3jw5hZ8QbaA3EGdBSuxaTR2YcVAk4nRSqBAs4zgkJwd5Jbci2FvSwwUQfbeGoMFfh6D64cz",
  "key10": "4N6aRK27ahAhQgYJYpn2itYp77jCDWvVSVs58b6cFbQActWpv11JoTZrGzmCaGJfnnuqZK7pjM7T1z9eDpJuuQMe",
  "key11": "4uuoGXo26Td9hU37mJwHNjGZoKvUBjvGFvwYV3DeXw7qTc2TebJqHfgYXGbiAs8cLezS98EFtZYHqzjuJfsmFZo7",
  "key12": "38HCtbpFSrrAG8ACciYJF3rbw9QduwkjvrRyuvwcNr8SwUr35rAh6r1cyuDLjAz1HXyQQRoV7j4BDTQhCdAEqdba",
  "key13": "2do8diTXokj6jrwAW2JgXnoprQvKvkwSsnQ4uyWswbrsDDiqTR8XcKYwyuyvARTX3GBw1XF4ggVR9TdxJmCk4wFm",
  "key14": "2enxK5TRKSn76b9L7DsgNssM1mL2NHh64dZpCxt997QqeFF1s4Zkdhv3PtVJj9rSJp8RAUQiVCuiomjjJ4uKPm85",
  "key15": "5uM9qA8ve3HxdbWHxatE19s7Sx4xK947jZTKYHE7w8X8uxvs6xYddmXRFwgZsMUqeEWGKFJ6wyb15DXNiWwhJQ3F",
  "key16": "59JQJtYz33cp4bRzjtnMV93WEcnUfCSns3Vz6dBZUtbqn4Di9duNBh2S41SQP19iQuedqKRkC2tJh6Rifu14fx86",
  "key17": "5TKrYTmJ96PwBu6mzXhG8QSJnnYio8j7dLVbeRVUk3SKCP1iEPEt7ax6FBD2kj7s2RHgmany9EZpzLMN8AZzcvgZ",
  "key18": "2Hdqp1BwJS4mN5DcRgnVW9kViwnLmQnqmBABNEUGbiVJAL19rtknALvgSyoooQwscrAYnrzVDYmQATKBq1xgjxwY",
  "key19": "2Mi7oPHa9tiL7Cec5oGJdmo2dCyiei5qEjxRqzR7ATGTJmFdhXKW6igZxLhfnvMWcGHZTeFukMyq9ygcanjmFaQM",
  "key20": "271R6xi1UhEP5zguWQFPp5L3fpBgAaJpdPC7E8gZHa45Na8sFCyTSnNRrdvyt8mCa8JM1JLU9ZYG2Ssupn41nqGv",
  "key21": "5RnFkQ1UsGRsseJC4XDW7TgX9DQrMcxzD8fszV436aKLo8Mo6UPwQW1wxWstRXABL6ciPRRZf3722NttJ3LCg2m4",
  "key22": "3hAoZhJrxzfh6sJeireYV5rGqX5rNHn8Y1emTWQ1a9VE9Fms3S7Rw2K5Dsy5agKbmiMmLLAaAr15gaBjdhhzhBvC",
  "key23": "4xPN9xfeVVxrEvpqpimxea4hKA8EwD1RLPJHapc6XKvWzJLWDcZMzPxFBMuKkqaSEZydyiBuvZe8ULG58LcNyoxZ",
  "key24": "2NMoeGFrCaEfzVFeD6oECdnmbxtzufDaPM7dD6t6iWkhbF36nk8wV9B79DCFCMQeV6KBPa2zPHTcfhq2KnAoZRVk",
  "key25": "326XCVTeTLX2V4sXPoWcrTX3EbkqRYQCcz1nQQk9NQLGkLs35PxsYoWFRkRzu1TBHkxBZqnaM2mxtQAku62FoEQJ",
  "key26": "4uLup5BJcP8xPz5As4pWE5Txs7S2r4J2Vj9b39iST8H3W2GTbfbFFHYxe4WLwen9NfuZr1y34ed7iWdYYSUt82Us",
  "key27": "4CB4ZEzHHyFmeXC6pFXiHcYzuomWxwKE8iS97aPHKHAjxk55bQ5pnyVMDsq3S7dxNTW1oYSqimCd29E2aaktoUVC",
  "key28": "4c8rxmz3vYG28VFREmcWCagb9roSGdkcx9gfaH9uyo5kg67eQAKzA4FUeNonrJX4VZ9xcfZsJBAUFDn8pvpaQVyE",
  "key29": "4uKPiYrtMsD8b5G772C8CRG9DcniUzUgsMMzkjKcDJg4iySfJqqDbo52Vt2VWnhCo3P1U5T9SZXbe5YCPNQVfPww",
  "key30": "jRsRvzKMrdJE4Zo1wEiQWLjEtpr4SW2G6XSD3QtUk8qf5Pxnz2wtQjDbgx4sHDdRhqWkqmhLCN87iBsFEjzvDRi",
  "key31": "2GVvKe6SMyvTmxwiQR4eVuEMWcv69zNAs8LPCfS7xF51iXbbj6eSa2Qrpcd7LZUAmBMocye3sG1cScCwGsE6z65",
  "key32": "3kqEXEZyQy1vYUb4wLhZXwdDjkdZu3NUWwxFTkxcDraqv1XdSXDc68HqSDmbZDcGTRHzdTVemp7sWYA2reKwWjTp",
  "key33": "411LgAEn6QtfSwAb4FSxz6Yk2ARinb2ReWrArvyxZJp43j4G9pLkjYLqGvGkdxuCP29bNjm6gjrqHb3AhkMUYpKe",
  "key34": "3DDQv7Bk8TCRzAMfAbRwxi3QzaWfmy8NEvNkhHoWJjwGXZqL7gTc6pY6ZbfPF6tbhmzRwXVvYdzfKvJdRTHJ62qz",
  "key35": "5ostuHYYmb55cjrfWtCc1nc16HAGzCfcgbaRAP86g48gZgEA2Bh3yVg3LmmCLk2fpztBqumMeF4WukEiA9oypZu6",
  "key36": "2jG2VQP2W2x5cLGFyn5HE1yZLQmgo8NoHztJBn6zxxNms6esBuQBDg4M2Ad3LtciTurrqC52jsDHpYETjRPxzSxN"
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
