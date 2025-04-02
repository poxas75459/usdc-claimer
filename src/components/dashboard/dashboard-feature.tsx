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
    "2DcwNQ51rUQ1wbKucujMBEgVYVDSvowrmjaS2rNkWV5RjxXkEqX7hsS9U1oNiJGEFqqD9TqXcUBJPmSa6y4acRv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bCwBxGs7QP3KCoApYdfqtV6fLx2zfJYv8Mwyi11KagHpi6mrjhiE5PmRTwQhtUyuiY42BAdXDTnPw9UXuLzy1pS",
  "key1": "41NE4RLNEVm6zSBF2bHMD2Wcc1N8k4FAn3435ND8p8YYwzu1okPbRXoN52eZWiQwo4NwURkA29NjN6LmmF61Hktv",
  "key2": "5Y4v3YDm4pXBTttFbcTT32MbvcErvo78tffXazL58Mg1K83X95FFN4HWfA2Ue2uqGKHj2UAzj9cgDbzgGrqLeUVv",
  "key3": "66UqNRMh1euUnxkVbg6rxnnLHTngSpSTzxYNwnXp5HzeDmNmSaZVS557NLH8vUQBRNBi8Q78SvEYBf9oGXi6H6y8",
  "key4": "2rJseTsz1bnVBqyv83wnLekHYo8eJt53QpDDE7Vs6cHuzw42vQsobBDLHL45j2BQiahYMFtVmvGUvWt9cHt6Wrfm",
  "key5": "5BEeEjeXXLWHdLbJegSinj4KqBnpbzYuip5nX9W3eoxBWcTVbLnEoFhwqjddmJvtYp6tYRT8nnzdDmkNMtMueNVa",
  "key6": "274jxFNV9Kzj7u2TerwFSefq9dfi85DYYvpx5CpBis49BUHUo29zLZkb9V9sC1bxi3uYmUxGDUQrmzJHrrSkxBAC",
  "key7": "3kVKtmb5bPCZU8W6ubXRc5eLccZF1PR3DdH4v3wYigQRp4sFexQ3Pbeb2FgSosZhSS7S8Rn4mDnqLjMtdRBjr2aZ",
  "key8": "2nCHqUa61TJykbd5s2h6Tvgky9nL7Xxmi5gpmCyD5VtHaztxAXtfLN6aKYZjNytdufrZwgeYS8dyiUF35qrMKGwY",
  "key9": "4nE81JcgCxqtVu5UZLdkg8FHgTSD4wvdsV3H234xG1hXdWxGt5SV8v4MSEvHNgX2nkSpFKkYn9DNb8VUsjEbncwX",
  "key10": "3Kg4QvbsvUKFQZtEB6DHvd27W3zM15DaYe3K7du79sudTWfvJrjnzFrUo6UJtEVnG5yJ2fNkZL358gZXnNHwwAkJ",
  "key11": "3hKqBRYFsarHnBSH34n2nvk9FxywCZdAx15HFh1z2jpFWCmmHzQQTru6Dosnzfwr4CEj1FjrY58cvpTgzcw7avvu",
  "key12": "5o2JL9W6P7ePjG498HMsFAzZfNkwgZF562yh7GyuSe1CMd1dBEKBLTxj22U9e9FXnH1ue5uW1jDgLxcuXwM4eWcM",
  "key13": "2p43epfq2qjDcxxSBrsUA82xHq84pHuvFsjNFPBZmn5UmyQYKp9jtdFd4BZr9j2HajdwSBcHu1zPn9A9kjZCEXQ4",
  "key14": "5X63HGMCJVFthcncb7A9me4mNTsxgFpi6dTKVgq7uarVJ1AHDkswcaji98ZYWYPCPD9psrz67Z3YNxVejW8tmhub",
  "key15": "4qhT8i8XiMjhYMpXpLGqnpkBvUBtpoXWk3hNKvq4ePe92AM3jEEytCXfcQ9H7iR3RVCixoAuuroQoTk8ELQchHQD",
  "key16": "2RWEpVkTDqyuRQJWvp47tbWw5RLSPFdrg1sQSwyBrhhD96FogmZD5DB87QJHSgSQBDxVfgBvrHvyP8CDcpzMCPL9",
  "key17": "5k3RFFT6ekYTYTjrKeS7aMaZJGvrtYwe6eNYH5Gc3YU29XhPRf4wmLCtfkn7nVkcPvvGoV9u1nozJFZdpXnadVc8",
  "key18": "4pJX6FhBzUYsNY7rQ2WS2Sg6u7cjnnx2ieTGMEZj7AZqZHvNjWsSEmS57CuYbxhNSfzu4LrhSpy9UQH1sSTLNePJ",
  "key19": "3qkdiLLajRB6mMpxbcFYRF7RucvDTC7c4Yjgc6596RGHwmMoDgj4Y4Vc5iGxBecC17pF4xmz12uFo4noP4aFENi3",
  "key20": "46qR3yDMT3W1QnuWaiuqGnrBHChZhTZ46P94TtKT13JmrQvCXSVWWcsjMcbpPjBsdjsnhGev9YpjXGxMHd3Ja2ry",
  "key21": "2ftzrgGHMtBYzmtxnXWpYjSpM9Lqr6fpvitN5XtvXuP9MunbFo8wn96h2VoJo5YjcAhQjyFceS9a5GL93TQHeba5",
  "key22": "5GCPGnkNgNo1mL4t7tNeceuWMgDdDYt4mH5cLmF19T4DDxGStzzykyDMPBQ2NdGdHSR2EeLkWasXnfDxZoruNnH3",
  "key23": "3ep7n4PodLLsoMAzEu9a9R8X3zvXxRQSWB16ai138GxW512nFrXEesFUqikqqdq3aP8MmksMAthb3wJ5YKDNHXWA",
  "key24": "rdduopxBoSMkd5RyueYBj5mgj7dQoje55djqNi2CcvNoC9DefZDd6FRsEJikWhZeau2CNuhER9xmiadSk4tqoo1",
  "key25": "2ngEyxtSybpVeMShmsG4pwnDtBZvw7rw9X2dFk8ZnyxZFMkySrboo67mzJatdyd2bA5VgnyyGnrFCPvsN1bUMWZP",
  "key26": "3mhRAnDmddP9vXWD5BTDtKD4pva8XqgSCunsYmk2kWgAy1bTLXf7WiLiw1xqDqLTYq9NRtA1He8msa5ZCx57G3mZ",
  "key27": "2uxM87pmuAim5N8cQmVmeLuhYB45jSAA6UTh8Xr6apKoWAQ8X4H8M6wSZv7Y5p3XfwRs2GEmz7W6P484TBvNrRZ",
  "key28": "2ffhmW9Hb6XwUSNSkdivPiubsZpnByTaixhaMgcfr6wbfC6bzr7YVuDtJgNeqjZ8P6JFY6twCc51fnDZoAasz5Yj",
  "key29": "57UGTLk1dsH3xyZisfMya86c4cqWxfKRaYMTrqwxQ51AVRf26ZeWX6GDyYTGrYAULfbjgqztUcfwS4KcNZedesak",
  "key30": "5tbGYvresKU9qxhg2Zxnhx8TuWDQmTqEa4AX262EMmonvV2EKBQVgeJbq6UaRaoj1HVkBKL72u7F1N5ZyzHUfQ7Z",
  "key31": "22rdf1ojJram13YaZfWTMJN1YAgk7t3DS9GCzLsbvrYHqnVLLcAaiNCqxQ48ceMmc3DdMxWSfJienwCjxGThGmiq",
  "key32": "3FFbq1Fm21dsAzT4WiYZMH8agdH16KzXs4w2Wbrb995GQNxPg4StqbSCtCmfQJ7XhRNjUw11gdapXySmhXXPCHnA",
  "key33": "4jfofJrfR46tFBpUJkBmEJe1JxsSJCbDG7o1p1wrDjZpPD6BtYXQ7iSyw6vwCM4iEvy66yjCipQfwX4XHecWn3B",
  "key34": "55BovLzNsgbYfQCUfNSpyreAxgSsz8KzjxucrvHPFPwNah3bAeaJpXS816rS9nm5HhMkqGB2QsjPvYn7qg53bs9W",
  "key35": "56Hzo47jyaPAvVNWTZRwAsZgau83Y8Mqcw3CgoaacpvnmpYVrxo4KZor8PZqCy7ozHu2F6N6tt4BzrwMUkARdWVv",
  "key36": "5pcPPhwWofaBKnoYFyiNEdTqgDESDLrjsqTTGkWfaTY9CX9y8jrxDiV6VDS9ZaUeRyXQZNkLgoP8hHPScUecEVs2",
  "key37": "RHQazVDePVKWxSHmtmdfTnFJ7f9BXoWCdW1zLPQsvsBWGXnMPn5uNW22szFfmbGpmkHp7svq2xW7xVfHQfVy4SJ",
  "key38": "3sfnewVnwa3tSFEFCkSZqJAgHgRBFYTxZo3TgwXyTy7s6Lcigbq2fsfPjhm6HyQ8ULc4GnX353i2fX8GtnrvAPPE",
  "key39": "2Lm8QTMqaLjk1Smjvorjfky8Bvn7REqSMTWYHg5gaoQCRRhH7rceY5wjChqohiFeRHiFLe9pjoJMJPVh66s1tvp4",
  "key40": "2kNHMYgPXP7frHMMqFnKbG7cc2bxoSUsRQFnn2eirCXe2ri6xfd1UsDiEb6BvzG3xTFMDkiPGkA2jHv2MezXChGZ",
  "key41": "4cFGB7n83xo8hEz6swQEUTC8Ru9LvFLeHmgytBe9zgLmxB6cAKkKhcjQpwweDK4Xzi1QviqbXRYYHGrNkhY7DVvS",
  "key42": "3BN3Wws3NM4WcYJiLjCh24aF8TTeFf73sXQmVN6Xhi848nV45kgmmvDyW8gBWVDVnqHeaRdAJHcSEJegKgKZjPJT",
  "key43": "3FaaehByzdbBcmtrHRgPqPqnzHRPQqeXgCdoPrZyGYbkuzf9g4Q4n3YnG3aHr51DxmxFXCWNYAx1Hs451ELUZTVR",
  "key44": "54sq2oGCCF7VshyCEb3JNyzWkNMesCQRPt5AhFVLxwLkhZ9XUKj1he3eJxjQNs8s9ERRm7nWJfJmvZ2qiy6yTQvo",
  "key45": "qKRV7dM8xWsBsxLDvQmAZP7eT9khFayG1kqFf4Uef6vjzDYfUqQWZN9pvLGnvNuSRyQjW5jgnei8HQbz31vksfS",
  "key46": "2zoyQTtHA1YF39ZpTdpQBGMPC8d9dDz1YvdSr1T5Cum3a1GvhiiZ645jzRUqwY1nE8xBsrRv2hjejiRsyMcPAujR",
  "key47": "4yS8mKMuW3Qkt2zM3jLR1xncMteRMkbqcxfqvwegKs2VHkYCTKKV3fE8sgx7D3pFT3vnmx3xQHHaeVWv2mwkuWTa"
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
