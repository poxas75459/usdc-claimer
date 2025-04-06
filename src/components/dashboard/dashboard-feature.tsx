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
    "3etb8y7eRYxdLxTFHWmhdR2qg5WzWNxXiWBqDQcG3tAQmr3F8eCS5B47cvCxy9DasPxdzFeg4M2viBAWeZG5QDbk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2U19J6AxSBsAoxnTqTrmSUenAjQthEvDTwopakrHAgYNjkvhYWWDAigzDPbG185qWAyUbGh4yenrLjZ3EAQAxLFc",
  "key1": "5xExUPKFkkYuFVH1W2rUBfz3iza2ksdbw5dV4YuhHzkbVeiQvBMAgWoeSbQ2toXKxh6ZuNDxpnussvDHLp6uh64e",
  "key2": "4FdxY6xTwpg2NWMqGToQWZfYitaP7BPT2duwX7NW23wjy7L6JM6ZL4LX23LDCSEwESsDZNjodTEYiMWBSQbaQMTz",
  "key3": "2bUQUhbsShGYG7XN4ywPU4nL4xEdFoSbGZfNZ8gNuJWkRkmDJiwNA96cNE4wFRQCy3GZxrD1KhkYFfaUKpijEqYb",
  "key4": "4pdSRXcvhLWy2BFgqKe9grJiKBA1sSZ7NKw9fW9gKiFpGZ5HeXMKuSx1tx3diDZfkUHn9EFLQxXdCQkdJFgvXhC",
  "key5": "2Azwk589K7g8M6S5pSV75Ud5MBWTf4gCQZ4ZCc19nAmucmKSa5ytVa5Msnr5Vo2jFHFFrZwA7xuwEqyLAAf9SJPa",
  "key6": "xiQSpRMo395z23VGsnfjRYfRrrhYEm42yjV3fQXk9j5xi36cH5PL2t5xU5y5rJAjRhaKNTRzuBa4ComAt7cG4T9",
  "key7": "2YrLXYWnQ8i5uXiWtqxzftSNzjDHWAKHkDe92gMVDUStX3wQEfM2rPEMic5uc9gERSQk8QHy1b4BLSKq469JQCa3",
  "key8": "5bpm5JzL7ZAssk9kdBr2LP2w5tSpbZduZ3Lv41UKRm1zJmmSsjjbmuxFZYQG1y47ByjofxTHoLpASUoWceWCEzdf",
  "key9": "4eVakg9hmcsWau9PLhEY87w1mCr21gnoa5kAmdootKxRBijzC4zWcgMTawa2tLoxsbjkFQHJJhZaX3yLDQgZyWRN",
  "key10": "2v3sAHjdj7MSV3BBeUEkFQVc1KzXMnxs45XcafyvEPiexih7qtDyvVdb7u9AdviCB6BWTULef4gTGHLE7Hrouqxs",
  "key11": "2f1SjjTiRgTupEmsebTUEEjLKvf7QrhiNTBHunESgHb4KeyQerHr5n2Da7ZebfXd16wrXRm3bzQQNRXHUSCWZcn9",
  "key12": "ndpNqp6TgteHFmJrHocXPpFMqYb4F5yq5PMr9zK3cQ9x4zi4soEAEMyDBL6AXmx8yqvavJLsKdcdsmMJfbCxFL5",
  "key13": "2g7oUaK29XiuGdjmUoohLntb3xLXRgH56XWWNBU3hsAfgwKA9TKRgLLPXRDpNa9b5RJqhUbKSpcBgsyz1D3PA2sM",
  "key14": "2rsVcSSia7zcZtXvZZWhTw1CeQYRXXA8yGTzeHExVHoXSFPSWKZjV7QrnVCfKBRPxcEm17afDoe1eAzLTaJfVuNh",
  "key15": "eVw9oGxBd5682DLVk4RHbYLkG1ZwRAb5dxU6UqHvpVH1ZZPK5z6PTHCFu5puS2XGkaTGsTnSgH2xvktx5UtUccf",
  "key16": "5LHBLpyq318e8m28BUFdEZTD7tAsGKmKGUgX6T7ZYSvnM6MADDPFYjJzK4MfbtZvxYR9ary3pmvB9d8ej8zCXcYL",
  "key17": "5bDZC4yveCux7LBCpBjpHAWXGgR1mVnB4iPFyYeDMWF3hp3PgVtEas988CUGEPEsNDh8Dn7k39aBmby3MekS5FVq",
  "key18": "6793hGzDSZMP7dj44rLtNZDqwCM8NovxGsMDvoxNqf17nN1wcYx6cgLsteHKymqAZKgcgMiiUyDEStVw5qqUGgZC",
  "key19": "61Xo7jddtFuLNyMmxMwjSaywcXdpThjSXEXRQ5Qid85MRY9CCXr2Pwcz7wkm1GR9CUpqwQ5DMfUuBhczZb7LbL8T",
  "key20": "2RAq6wn16UJJ76PFThPVpvmwpLaKaV5sAJ1ZpXtuXt6aNdMYpFUQYLJB7LpE9MdrnXbos9PD4UqY3zkp3gesGd4z",
  "key21": "5iVQFKA4rYHBKfCBweftcx94xXtVZ71WZyMS3zAnGmDujUzadJaWEV3MR8jHSt8gtXg8A9Av6UYtB1a8LvfSo9un",
  "key22": "5HP9a7Tr8mM3T67L6bUkboYDnxBhx8nTb6pejPp828Mb3rkpiH4miASdwBeEkQbsxspSufYhSpF1AwhTCtAfBJbk",
  "key23": "5ZpWtDXjVuoPppsMKyDGQoyTJEhNPZgdqkw62mxjWYcd9x2Go4BgmwCkqbtiPBjhfrLVQnGGa9enpZHtGKemjR6T",
  "key24": "5LDzJFKwbECT5eS5ZQBReFbKbJvwCDJK6iL61H82jnD7xjjYmrgf3rDDmbf2fwkq8SDPGC7v1wXG8NYTJzrZ1dkk",
  "key25": "4WNxoYoBEd4bVRpxDQfzKzgczohanWR4TmgHGNCBfyvjegKBhWkSHhWQN38tmSewMBwGRH6Z3ZnS7DCi349mRBeP",
  "key26": "4uo8wqKFfneiwdmLhCG9V4FqjMLBycewyNksauE1RE5aamBSbQjsE5vpk64T7wvKpYL5jnDJzsiBefQxLDammB5F",
  "key27": "3DB5hUyoidMCiiADKNxqMRBMQLA8T5XGHubDY2JoN9CgViCE6ZfkHfcG3Td44S5wdGb6j6pQabaDBthcw2XucFjo",
  "key28": "5mXmnXjMVFSqYQFA7fGfyX4kj6CJeBqDVYYRJHZdX1Nqv3skt9X9BeXJJCFZGanQMEp19phPEk1CPECm5Gy4Kwjq",
  "key29": "XxnsUVFRVUgY6quA1M3TF1JwRvPt8CYX5mYuvLfdRhpoCP74kKzkxyxqi5bPmULjPEMVvZxh761v3ZJpVsUYgK6",
  "key30": "4EBBVy1RAPsHqPxYFND2wuH4GJpZQYUyhc5d3AMUPgA2LqsbUcfVta8sjVLyeKwabACsxDwYf6KDNfF7Rw3xmTce",
  "key31": "2smYCmpHvYTW6uHjNbtNvNbKpRcShLqbKNKKJmEF4DcZ4FBqt5Lpczb5KGNwBFJbyTJezvNbe6MtApwVVf3Kutoj",
  "key32": "5tUn93qETDfn5pt9ELGinKShv2fEfbw3Fm8V2LzaKxWyWj4oFe6kRRFkCNBd5sc3vvSsgYHJbyydgezkfnMHymeU",
  "key33": "54hibuADd2yDrU55nBmbf98GNTRpmjZPVYcJ41G1vrDURfQsz6LG1bEeAzv2nDnegqmd9oaHZ5GTsvHhT3tk7D81",
  "key34": "12A8ark3ndA8gEpjNEGYBy9FMXRZXtiV8MTV99D7X52qMU2HSX5hrXBntLY4Zxb5WyFopjoSAMmJyyEs4vYJLSP3",
  "key35": "3dxkELm9jnGGtR1TDMgcEn6EPEvjd23tQWYKDqCDHJfW6byjnyJpq4eN8SuG6G3Pe1BKPsJptXwQ9ScDauFoxyDT",
  "key36": "2KigK5SKw4UX81bGvBbnr18KfFSg8GoPyzAHZ4T6SCzvCbuHnV1viKHSUoB2MHTi3z6TyiHhGTbsNmzkoPp9P1KP",
  "key37": "AgbBmu1kPspiw71GAA8Y1h42rhYSJWUTQPPmXs28RSjG9ssx8dfDGdj6xhdqGJTgw3A8iS3mpvL5xa34tjSqVZJ",
  "key38": "2eNsnNa4d5C4JZQxi4xcg567hPxKhBLTeB9qiFgMFBgqJRABWhHKApptmdn3bdfXaL2zoq5186GRwDKP7dmxhc5j",
  "key39": "59M1h4AyaygBESdJ7JnNLcCJG63cMHMSjp445QhZQjxKQX8otwewCmhqaPT3b92PdJP3RcACdLU5ZkX2z5FieVSR"
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
