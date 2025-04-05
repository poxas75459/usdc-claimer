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
    "4hY6GAdj7LbN5FsbGLSjoPHTLvteXYrLfvRcymwWTX4eLVcWmAzPfFtVayDPbqovfZpaezKo91obiTShNP3DJepp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bzqD9NkYdrWq2vnzMD57SpJT6q4n6PqBymSTfyiXHsdN2mhWZstCdGFFfAygkbdKHKo3oNhyLD2QGBjBfJCXQhA",
  "key1": "3wj16w1d4prnhiRMBQ1uWrpmSmWELjgTHCdPJeeF2YtPK7EC2PnuHsXbvnJzxv81knmTKucWxddF2KyLhVfo8iZn",
  "key2": "2Bvj3U3hjGse77h6ghuPXrkspiwAacvHuJt2LcxsPTQiEeQ13pnFqzg8Qn17NwhiVEHMdaQDwfqyJsDtAbWtQ43z",
  "key3": "4rWo2MWc8bzsGJ4jtVqysojPUUHEq1VRxuJR9ENjMriCnhVt2xWksPPnhK6zNLP4PbyLb2YeTENfggsJZTYEzDmp",
  "key4": "47ws7rVMiEPnxAJ3KAYZVVn7qpBAvCWEgZL1jx7qtYCmkwM9vU5U4EpL6a2dcieqggkWdoWvHsABc1ZZr7LK1ZzQ",
  "key5": "2c5Jjwcp5upeVQxjxy2M3DE31mtmnReDXVQ3LjsfCm7srqNv7qh2osumPDsxvejwjHpAF3i41ZHa6x7DqLCJ1VY4",
  "key6": "3itGgeAZVx8GXfMmXmZ2HLYQVLpFF6C4Squowhf2sYha1Kips9Zw22nA9pZRCx7KXFA1C5NY5KoE4DL1USRvT3yi",
  "key7": "2tLE8gyY6EAsR5fVjyQpG3qbChHj9D4RXnVCP6JuTtekv4ytky3yUv4j3RUmSs4H6AbEcWh5T7o3WQSjAR6HjxHo",
  "key8": "36WmdNDQsmBcQXzXPF3D3pxUidJZFGCnie3Ww5zLzkRqNGnQ2bD9AKXjL4w2fMPuBF64Z6QBWSnbkgxwmNNKiACZ",
  "key9": "BiqDGiSrQDtoFjs1W7HYgtMx4FA4NUkgSkJmpryxM6sRqD7heVEDSRXhnEDa9LgqCL7PajnWENRbB9qdEjnAedp",
  "key10": "4VjP8wBeHLVkYdV4sDnM7tRXzJLHQaeiWF5qBnmvGY659xA4GWfZ9JRQCCxBzVHBEJYKcuaAPt46MorWvJWar2iQ",
  "key11": "fSvQGruU7fVMAbgmTq123RNSF2bfh5ePMjBFFbSopEBXxersmtE6oufn4e4GLebUMR2QNc8Gv9q5MvFQaqfRXQL",
  "key12": "3Sv6JK9UUvqQ5HmnjCg5WotHmzMyseyi4fESj4uqg842pWrkTGsAboqKVJSiMTn8C3JBdo1iHLpQcGeSAYvjJFcF",
  "key13": "5HgvTGcX3sV5tmZE725nZkxUH1qEVzAuWN92K8JorAeDjrf4ACoNUHnmgaJSvJ6LSSkmVnFpC93TqWKSWyUGR6dV",
  "key14": "3xgenJmHBqD8kh6HrKLXp5DyRYT9UWtt91FhbbfTaFq9woKqADXvZUyrzChn97twowkWuaxSwDDPrJqEzw5UDCJK",
  "key15": "625UtQtyeZvxNiDGYcJ3ABfEjBkRgt7vs9TyGFkcLc7edDtNsQR372UmxUjRUeH5KKsfGELKU34wwdKSMt5J2AaF",
  "key16": "4qtfvG5Y2gTbu8v1dW53wdEyUEk1iAmb5sW7LzA1hLBLDWQTibAvEzeMfAE5LFKvg4TCGrU5mfcYCGXAEnXZNHeo",
  "key17": "5h8kpMgdtacUmDgu4RFgzbB183RYy9xwojbnifkPn9rXiiZvZeZzvmEMkyNrzeepCMTu7PJu8PzdAJMqQdSdN8CJ",
  "key18": "5GB33Kk4XuQfw3YdR92hPVT4ff6vW5kp5a5kMRhHZky8sReBByyhb3kcnRxSooBXWJtiCCULqGDjZCFaXbHNW6s4",
  "key19": "3GzwZ6ymq4QJys748KpoVWjbtMHH8raDJnTyM9esfAxBgR6V9RuzD6LmvSrhMfyUtkf7J81qpEoMfmuWmQ8fZp9D",
  "key20": "2uWgyf5FJrRXtHCCwNVXtZez1n1zuGC36nYNUdzAEQyvqpgdtbCXXFpgUm3VUKHPwUejpSoL8EbT79WDz6cLZQ6i",
  "key21": "2BdaJUUWjKurA5WmYWn7tJEvzxuoaJkeqThnjHkAYNdyw5kSMe2H6cENeV8qZ4TeXbpTNptsYcdn67Enq1LYCCVV",
  "key22": "2SyTV59ze3xYs2qtUBmbgk5KaJWFuXQP7BqFZT5NqjsibSecU8wpStaMQZWPdLwwDaB95UgNwaAuorQkUeSMi2ZB",
  "key23": "4buokkrKN29HiRQDpxajusbtfMMjn6MDDSn8TKRKUMEU1rY9hdZr2J4CVZpsR6NGGnW24oTq1nbCZkHNTin9ZiWF",
  "key24": "3UAdyNmGEYEHuKfeMg9s8scaHvJufPrSvowNPfdo5wZT7nPD9jKiAjQ5Q3hBDva774EJGp4cE8MTCizHiYr7aj3V",
  "key25": "2J8sP9kWqYy2Lpxpkht8QidJH3V8JXpqgNuEax3n1JZcJHH4sKrDcoR8W2wrgX33ut2y2w7KtFmNU22AKh1ouBAF",
  "key26": "4m8ah5Gm6m6WDh25SR1nfTdHZn2qG8ot48N1e5T3Rjz8997ujhkMy1a2PLHg5oJX8PqoFL1nffpRSms9QwpapEai",
  "key27": "4Jidh9RvFvgPdABWqHs1eabuFoQk1T3WZPEygeAbbzW9kCYqXf7oakX34jytVuFmW8HZsPBUwHpTdeFZo9R7igK4",
  "key28": "3kyefYv26NmYofGeGXtKFPjRjMRsuVK24A76BSJRpykzfx4EFk2VPhbRg5LtyEQtp1UR7AHm6k6HL1Ki6T9BGqnj",
  "key29": "dh8o7JhccfZT7fnyrLPfv8tcrEUB1GCKzvjJPkSYFytTxXf9HTZV1my7QZrVp3yxMnNWtKwj1Uzz1aA1SgT4Uc1",
  "key30": "N5MBei2hCaZWEJJi9b9Lmr4KxxQaWkxn6SrJw4eQumdkRGPGFcfi6vRsuHa8uUnSSQRyxqBqBLrDSMgSkpjw2xA",
  "key31": "4rWps61eijDvYi9m4wbSh1jEuvhrBaFqJmUt8pHjJZDAUDsBfPy8MSmsUo2zuPCWXPaWUd2zp687XRvGvC8MFngY",
  "key32": "54HwQZ58jEmuru4WPZWRMxmUkQDqTyZAA4WdMRaMBzf48Y9RSvVxuxUfrAdnTsYm4wSxuYqpHYCy5UCS6xpZ3kth",
  "key33": "5Tj3mCWGUrEHR8Um8bA1WG7ru2CQDEKYsS5eWjXyyrJnPqEjHEWqQa59dLh4AFX23XAmxx1obkAERdHZHW4dcECf",
  "key34": "5MDVm8f93rVbTxoEofq1vXamy5aT5Lyu99VJqchQm46phGoBCaDcCHVTVDDTGT8sCFV8UVWSYtxfPcphsWyHzwYR"
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
