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
    "5MomH4EANZ5wozTgNDGqVTwdXDjTjHi4pSqQxYZ2qBaXk54X4rypnFz7Q54DV392Jj4mdNG6WRehWdzVp8XTTqEV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HbAX4hgHEC3Vafj82gNdx7JFnCLmH3g71k825hSchsTpFBzaMCGYiUEKUxR7a7poWJ8hNECkj9UxVR9yjBiWkMC",
  "key1": "29zh2G6xf9EwUpNWqdDQZmgybwAzVVYNiEnYaf4ubTHk3B78F1UX5f7aVKH5s3foZsLFAoomnehxoUZYpyaaChZg",
  "key2": "4oBV47fnkiP57Tbxmrho13mrpJSxPS2dLkHMHdhMqYsSwPfuGG2z7XKfPkBaW6ayPk3HZuvioESqLLpy6uuxxnfy",
  "key3": "3LKi4xVLic8LHYMorY9LZTZToNva9NgGRF3zRNDkUKLqgKq2ZS7vFBrmZr87YLD9bjcZNKAs6UvRrkXoh7jVfz1H",
  "key4": "2hz1qPPjhzMrd1aYzkdT5YcpUSGbpoXWwUtwcEsLaVNMUKmGdwqzstCaJsLqZ1diDfj6c4R9ujDkmvZdAXdw1JDv",
  "key5": "Lwojcu59M2Zn8GYqSRZrwTCLtRvVEgCij8694WauYArcK9brBCi1PrKT59LxsriRZq5q1RrcUrXnMRSJ16q9qi4",
  "key6": "65SwkQMwF9b4gPN6iuVQAAXRm25eGLDVT4U6K6Tuo81uuBNuNqqg3qUJc5sG7tqSpoBfLF6QwfPtgphdDyb1ZrWW",
  "key7": "rRJ6c2f8idmJVF7BSA691jCdqPnnw5iMCMkBTBp92eQT23cN2SFEWP5Xu1vRtpF8tNo867SicAFeU5X8KQpaBGD",
  "key8": "2FeTQTiccW5GUhvxYobKYJZPEY54Sr852ZSFqornVjfYqYxtpYa6NJWk4Y8TZCsbqWP4QfRHtSNnbpaGZKB3tWfj",
  "key9": "3aGAYcNqoCtcrAXdKtoxquwNz2gJrQ6p4fW8oFCB1GbH6BUjTN6bTMsTMUu41XAuSwqxr7y2MqFwkbW9PqGdJsUC",
  "key10": "86pNfzhZb6HRwwmkU8ZXmBqvRgvR6QKGzteV2DdM8Xa9NCATh7NUJAy1oPafoRVyi8ou3wqCV8ziRNTX4BLGfFN",
  "key11": "5itxvJyMx3oxnxmAvWc1VYeXpy35vqBSwrD4BnEPBLRAMuT8p9i2VKBRFxjpb8D5ZfkkMDRpuJ6z9i61YWwxT3z7",
  "key12": "24zqL7NBNK516jpVXkbFh1f4xWXxYgaMUhDpo1GRiUDBhZavFdntMCyv3sTTCpLiSiWXTbJWK4XJVN71oVZDbXU2",
  "key13": "4K8CWSEgTktyHXiTkWTELMYKRsc25TNuhwoeFTdeip8iahyLSimswoWabwET3Syx4TbavQNVZZVL4qbfQmSiM3op",
  "key14": "3RU9iWdnJu55Y5GUtHVuBBT6XAVLxKXofXCrzznRZwppxnewGKaoKF2x1xUojfTVbBLtg1x8rpGLmHWvZaaVAebb",
  "key15": "3xu6Sm7Q5KPzmaRSSXYN6q4s69WZNqkcJzmGw6cpgiFLDmZbzzCJSKthx5mnERLpsM4ncZQsaJBB636dJ7xKeqwD",
  "key16": "Grvog5c7Ns8uyiXmJSbyJafNp6erti4iidrtdC3RRvmwHRW7FiQ2wrTuJGwfKywTtQ8oqc64HL2WGS3TPDVQhNw",
  "key17": "4B8GVdZyWisgPRNCE9Sj59VEzsSyv6Yj2HC3HNrFHji5BwE4mDsp12pNHyfNi4bgZKXpjzJhxJ8ESCngBJTmvFQV",
  "key18": "3QsbB4PHLShhzSXLRqydpMQWmoga8FVpeucqqNe4mRhaL2gBMhcvacFFkLCsRhqUjLgZ2Bznx6Nyz6UpPU1pr3aM",
  "key19": "29r2ysZSiCaPQcpGGEVMCXWS1X5YZFuXTFJgmXRngWRsFDAjcvdJsLHBQMSrGjGish2zX35sP5CaQU9oiHpgA6Wt",
  "key20": "2TfmgbU4uKEpoYmBzDERYNeun8XU9zCucHR7bnw9nfz39PeaS197dJjx9PsAJ7VYDoSJwDncVq1DiM725i319w1V",
  "key21": "2ZMAQRwUNqT4GAVR6E4zoD8QXVMMNSHnsat6ygSKEzf864LhP9QPgpJbB5iD4HZiwFZArdN8rNhecdzhBgwQ6xf7",
  "key22": "5TbL78TPjPALcSjzSLwfGYEYACPjkPbLMrEA8Jgbr4G3cXrjJdRqmMDhQHA3r9GureQeUG1qKHTGRwXvQEardxwP",
  "key23": "5hzuFdo53dUxed4xYxYsoAq1ncQ6KumgcwKKRoqTiXwUDsEa4DixT4oZkXmX4nZ57PopyVZppTxeEuDS5GLwnBCC",
  "key24": "2MZxsdpLxAxRRJFiLrrYzbMrZzvgPSwN2td9PVbY8Yo2XAQhzj5BNp8pG8rdHpw1hmPzc6Q7n5ZfVnEbH3sPNJeS",
  "key25": "5GJnP4fjtT3aA7r9i77bLyDgYgbhrwcMP4B6Lo6KF8U9hC4ZzS22BYgy1GXXYNT8Vy6AMWSePzkJ8cWxJEFCUJL9",
  "key26": "6XaH25eshUuS812nuqorMPt3NNM38CLvw4nHywkesKbSkGFpVFbFE3zQbLvouFb72gkTV5Lxsf23Y9qaJnafovq",
  "key27": "5tNsE21k52Z4o8MPhDPihDHUipMuvjQsYw3RKxiaQHFb1dVtRiw8MFkdvuTm66u5g9iaVj5qqpBfFG5mV8ZMJAJU",
  "key28": "3GxFG5aHd96JXJ3gQcg4GwaidWAbEFibtWvbSizu9gTVGbNef8EC7htjN5S63iDRmhff82GxRv6o7Me5qGRUBCSz",
  "key29": "mUSM5jHLqxnFEDMqo4tuJW386pEGQGY41TCDKZhANYQjNr38rLX2DL6J5ggmMvpz5A9MGCwh5gQWKj4zJGBP2kF",
  "key30": "5qpUpGFvJGBkumQsPeFXt8N7uaCfiLkXvbudqEkoFgbtkA8YjHpouF6yqMtfLcans4mzYQXkjgypeDVfz9JfhqjR",
  "key31": "4W99geo4ypN5yTzBUNayPoyNwFmRUHCqShMfiSwRH9erzvAYPBd4oo5ypAixPNtsxkM6MmyhNwHhnSUB6RbXW7Mr",
  "key32": "5vRktsWp4ezcW4BKidYGLXEE4Zziu21if4VC1ikQdQ28xnuCSdXTMZsTtwHhm7LdK5KKy7wGdiLZ6U7Z31MsfMjj",
  "key33": "3LQhadX7NNgR9FU5Eq42LJEnNCMwG8XXVjSkrb6v1ABWkK4kgkSxxzzUbK8peyND6QjEmu4NhYJC7g4bLmm4bfKr",
  "key34": "4NysKZJJZzKj3fZdoGnHVPwVm8bpxJVD5MB3FmB3Dh1nbiMsVQEfgzrUfVondm5h5qLMEXbQSYdhEuMX57DPQcZy",
  "key35": "5EiUbpAd3Doxpa8G9VFKXbvdtE9L4RbncCBhuBWT9CtfTXCk5gSpZPTErHpnrKPfr2uK1nQaUjw55Wiej4166GZN",
  "key36": "5g5EcQzYfiXBNp3J1UKsci5WRBXjEobMC2oV1cGGpj4sVwipJNzQWojw778VfLjt7uL3QjUCziewMxyoFKrjoAkM",
  "key37": "2Jxous8Enfp94NabxZKqDHL5dNstBof5znGtPFBvwaZwJ6YWCVy8EDSoE5TAmyjBdGG5N72ZHFVStXYaqU3ifb5K",
  "key38": "59RZSNnqLBqUPNPqDZWThD51EH4Qbig68u4Wd2k9JvuetYi2rrLtVcqZpgX1kzkyiHoAGYFtSU13SzVy87aKvU5o",
  "key39": "3PgyXr2yzuHdPT8Tno4mc7QtWFGYJtsjER3GMAnypFpsmFCSeDsG2DCcmvhtTjpevNeeqiQomjxyqWCwQXuSxrVN",
  "key40": "sVPu9sEKUmx2jgA7ysZtigC6wMggybRxfExiDGcwkRpezgUA9tLdxGELKmomXJdA73xGGQ1F1hcgXMcetQL5aPp",
  "key41": "JAoB31CRC3tNW1ziFiNyL6p32G5kcVSmwGrCyNG6orp1yAg96FEkg8HBKve88x5shA1XZ1mxCo63huxtKwkpiqW",
  "key42": "2u3TUZCo7BkrHe5HU4Sx6FrkRVT7dAR7of6WqjYsy3QorNaAYTnrP55BySqiWSDVkHXkkNsoHmjBakiMcn8JyZHx",
  "key43": "AzuioVouC6mCoLHgSLd7rESFvrkt44DihwVHmFRiLrpeB35J2WxNWU8qYNp7oFt4uajeDp3MwtQBVEkR2YH3trT",
  "key44": "4LEKojqW7RcH2QTri6FDoaVCTocpbvgxfGS4GuCTStaVK9Nsjm9ypZbAfxTadD2ouy4humH8Kbtj1CKkmrDk5AJ7",
  "key45": "4pFuHFZmdHdMCVGNSjENrYnULPJrVvujZfDGRKvmfC8gCu5UYLNxas51ztdChf9zKL1CZ1SrvdTuTGYBqkpc5jDS",
  "key46": "3xCAiS1bKr5uZCZpr5s6A83MUUcMWXjH2bnvcwASrrygA3jdJtE6q6otxFCXAgY1QJJM8ua47wv2ZKgaTggDAyh6"
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
