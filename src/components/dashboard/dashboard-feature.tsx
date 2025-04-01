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
    "3pTXGyNZhS2VBugmKzxnmSfG7bsZaspiMNh5UaQcWJUnDwWUWJUDN1DbezZrhAVe9R3MHZZvQ7dyVroCn81x3MPj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Q6LFeFqsy5u1pFk8W3HWrjCBgSuF1dg4qVcDn5FpRcjmtYvXTQpu41BfvBVw5YEgPXLGLPN7ChbQubuTcmjs7gG",
  "key1": "5aefxzAPiWaiiDhvAbPEvss9epPzVhtCzvAQ1MMcjMtKSt7QFKr3Dp2qXjTtCFb24tziz4k5DkX1B3NyKQ8Bf4bz",
  "key2": "4BjLNAABtwAM4KbezRRALp2vhc2FpXRqzypL34o9ap9LUimBxa1Msqy79p5m47Lzy7dyrw9AnanHTbtrXphZEGGi",
  "key3": "44ST4GFNKjSMc2xikBdQDQxf9XbXMhC99Wf8ms3QhRaDzczoENUiFbkvKQyANt65AYWTPEfTpXuuEZuC1FwSo6Qc",
  "key4": "sF4yx9oaZDaa7fu9cdsCVtSLVaj4Ln82wRXGgG5WDfHh4zm6SsnWJr1dvnFqcCjHsEZbuSwXAAxBunVq5S2Zsz5",
  "key5": "3ez1xRt3VKvue6eTc51PXDwdcx2zJCu17E9uuuATN5scxPKqeaPxmKo1iDMxHkzjqrFQfvoYwJkVKKRP7RpMFEG4",
  "key6": "3wopFU7uyiwXPmD3wtV6qSdU2htaKhLGPvfRGjSbrMQWcyGQn9MnG4x145ZP3n856xFfNBN79Mzpn8xyxPJCHg2L",
  "key7": "3SWHaMkKfJdGBBzSE3xcE6sL3kuzHhWpeWrcnePYQCwrDtHKnVoCBeLUG6kDmYgGAVow1EFNhyXeZACFy9FKs3vw",
  "key8": "3uLWpEhv66SAQmUm5zYrE8mJ5CzGD5tBpWuGrrcaMo4zxp7Bia4c17C5A5nHWsHvDY7WXK1LBfMcipmcB3Gq233L",
  "key9": "3zhnjjn3XgizjPu5hgyvywZF2Wc23YP27xK3p8dWdmqF3KPJfMKEgK7RriSMFAaYbwA7eaHdGYMCfxuh44dLNQvG",
  "key10": "4Z2vSXPaHRiTdHrGzW5NgTH7nM9dCgKWVK5S94MFmw4G7TwRgSS8JnbQhSJhcS2ftVf53GjLCBWw4HjgL5s2fB1U",
  "key11": "2fjqDqDfevTEhjyg7qc5iiD6xfBL4iRPn6q99to334P7PSCxwxqCZnuqBSbWNZE2WuHwJhWFt6CGoF42PqiwpowF",
  "key12": "31S7vrBE91XxixpGTd696W7gcjn6CzBjv7WHcKKe2DtLpjY1v4cN9ucrcG4qd7rqY3LbnvBygqNXRzbC3owkAofP",
  "key13": "4XugYBRonXa5B8uQtHACkZH6QeoFYZxe7ztCvCZceMDWBMSVLgQ7U2awPPUvYFH8SmKiSGrGfpoRDy8hg7bcF9w6",
  "key14": "5hV5zWWsUPqNxFWMKjaHKsyLzVYGWZqGw1VKpNvwweKngxFSU9g9oNmuWcJgKxiNVcmtvMuSaeTiDkynPb9vrovf",
  "key15": "5ZRRo8MEgpgPHf8BN6viiXwtG4q7WagaDusnxGbczgoSs2iDrQqhCYE7ed1wRTuAUAiqFMTA91NKm34GtN5AaHBU",
  "key16": "3MxMPBvzeGNxkiiKma93oc2ZTgfdCUBE6daoU6qNxhGP7TT37nJhcHNX578B3QPMUi3bh9HhGi2jQ5fvkv2jEoUw",
  "key17": "5KQ2119uRAzuUw24erp2Mfk6zD9aTEpJ7saJkND4RaiKiMPzEEY6VS2gpUzvUWWCJ8aQz476k9amqQSey4Ys72xX",
  "key18": "Kj5jnQa77QKs9poyUMGZS6unq9A4xoe61UHknpPYoFWQfdDuE2GyjqHzDfQNt5ZUREYdRh4kRG4JnggvwS64wAo",
  "key19": "5ddRTq9tLmDg2Dwzt1iyhZiRRwp5xjPz9jjypNNBNWwHfZgj88W1cyshtAotxfm9tcxSgPSWNP31iKgqBNVpQ4WS",
  "key20": "b3MtvGtJW9je3WHa88jHEG66LBmjxRZScBD7gYUxohTweA5DJU7XHWuJeRo8gJAKUzqG9Uw4nJogueK457CS1R8",
  "key21": "5H8n9nrtQQfnvKeApNVwva4CQm8nLHhoJPYdB11yX2TEMC83dq1Tzmg83BNwrqL4mcCrGBZAAbjGPVKDQYwzmoor",
  "key22": "5dQ9ydQhA2SaFNLE1Eh3jpZpg5gMbcVuABGqW4LVRFAGEiXsasToURkFzQpVAqLkxAU8pJTwexAt85Snzr5XXATn",
  "key23": "4Je8MfoYxoYiTp1UtGVcbQEL4GpQtmSGp5gVvUyw4hjP8SVmV4SouQ71QyY2Y7MtuQoCAEvoZckqegvXFJjb8KMm",
  "key24": "xo7ZQbvLTY7XXPXBuBDMgMazEHgZdqmHrHGtTkxVwi2GDsfncF5bvrE2tkCg5hzzrtNJJ6wwZHZbaMb7Q3a4qhj",
  "key25": "2kYNEZQezLFvpA3Mtr23bc9QjJpLsKPjnu4KTK4h81iNFGVFkEJFERyjmKLEnCbsH5JCYGt3eDg7iWAtHHwbKfhp",
  "key26": "2VKeLU4pUDLdXB71tnkq49SSPVLrYxaWsmsqX5bAmpZxV1zh1mUqNgGJunkCydUkUyDvxymnQwCSgnqtQmzgteFy",
  "key27": "39uCQ4WUqvcTYpWnHgEDRjnJApqeU9NshqokTUJnCwwadycojHFyp4KGry5vqHvwFLc6LajkWh5N2B3tFeBPAteu",
  "key28": "26SxTJ4BAFDJd3Qd9KbegcqPUXGpxvcgkNXjBQjANMFFP4DTbYcm9sqYEK1nRHTcJrKpLAhHNFaGZXDTAbKYqtdt",
  "key29": "TzbcDDRLFg8mLTNRgP3tYP4VcKSBfiw1VacuaQFS4GwHCFsUz71ceaY9JfhGvcXL5BNkVxXkzjtcGDiKGtnkFdT",
  "key30": "4ZBz9TPdSjCotBFFcHojVfAyUzTjn7cnhB16f3a2ZSJqQhi8FaBsgMySDYm5oATsMQBWetuQBDeP3acs36jR7LAX",
  "key31": "2TqWES64MKVYZnP9ixihAMsxK7vMG6TyYkQUpaF8ykigZJdNkKthDRx4HKF7YPgMNKGxtFVQiJkePJiFTKGm3jfV",
  "key32": "2aoLgHeQEuawKgPCY5mcU4z1hQbgMQPkRgAGmLYWGXSGv7CSCmKFuZV6et92A9TL8mTqfHAcwbRqzFsxhHAHoMCN",
  "key33": "53kMJYBgkyhRSxytUhv8yHW9Az72Mp3cMEV3b5rWCg6k84CV25LnfscupCqXnWKYNmvi3YbqejmMCvzEcKYpjYDt",
  "key34": "3W2tSVmffzjQxLGNGASd5Pc8NKk3PGXMzGgjSq6Hoj5DuCJo4AygoCEnWPp7UeTocxEZU2urQBtqaxufaTcaQF1k",
  "key35": "4GUMYvUs9LSYSjwKqBGgDcSbGRug99iVM1KAHnakkuwvZRdWT9ewfcJWAxv1NTvnQAfqfaaJkimwLQuvaoZ1SLaL"
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
