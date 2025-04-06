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
    "pfjX7NWtrG4BC3Np42rS5ZPbTV7UFhWmjj5uMehMR4fdsm3MKKAdKTGjZkcySrRzLotvrx8b9NzvjE7S3tgKoMQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iDKG1XKM9esUJWQoNdEP7eUVouciSmyz94f9Ug9wzMM6xxtNvuefz2vTDez1TSMD9RV28YvsX83UUG4eZxy2gD9",
  "key1": "5MbrJ2BXvky8zg6mG2c4xRbe5p8NqbKiaoQ33LPcoMRbbDNYgkTDetGrXiPp93ADypi5dfPFfxWt6DZh6ZBvbnSA",
  "key2": "MTCSwKHhdaiWDNPqAQBpUaFQFGVVKSXruX71eBt86xRnMyzeymwZk3iMtg5Q2vWXPdYp7PdRruMpBaRXYsLyE5a",
  "key3": "2LQuiF1AGG3xnqXJSdxe19eriZhrwDKgcCNZ7FrdcyJNPJqMbnvKWogDU5YLXaw6r8dX4iKZZcVKq58vAGkTni8z",
  "key4": "5NWEmK273fZ7XzVzN6epFno6rDmiXTTXLhi2hpMoFD3oDpL7soU92JvrzDx2x6Gk8faUqxuVB4rYSjSgbHdRL3Ye",
  "key5": "4R33e1msqVbxxaJrZoCeCNbe2mX8yYGcrdmug34RXBDeKn9hThAXDfxfWahDpvT4k6Bydo7ECoBk1AvmgXKR9gPv",
  "key6": "EC4C1CbTp7dG5KqPXPq6uuhFqezkJYm6wjVdyaaHsYs3y4Y3z82wBzQLtQng12uw5NtBLMALb7daky4HuSK81NF",
  "key7": "5GpoBWNeXj71E3wkRn6wnbfvfuaiUiPWrAfC3DCCSNZZFP9uZVSwuMzDUcrBkYKrSQmJimLmhw9tnhuYt73jpg5E",
  "key8": "mc7G6zFsWkivBBKYCW3VztDh7nLiZdGcaD44D8NqWj8TDSB2rK7UudMESApUTDNNzcqvhejZ72WL4Ki881n5Hju",
  "key9": "48sx6UcGPgFWDwpgiCkexcGhJccpbMkZz5yCAgYWBSEqndqZ69r1CqKfb3ofT2s1E6Ejmsr9rBC8fjJUBf2qW6bH",
  "key10": "3urYg5447jDhZEBu49NStqLoux2RfqgpmvadBsB4BEpqEo5pKeeQpz7cJ2zXy1oMD1px2nQXbJ1gqSexgb1MfZAB",
  "key11": "rSUMpYif2JjQTt41yPDBptahzS8yJT4zeu3nMp2Uu2PWN3KF4KdnJXFkXm9bTD8BFRtPocpaNNbTPw3GM2XMa1a",
  "key12": "3m9SXzCdPvKgEPqCA3yQnCFE8aVx6AW2boFREP4nzY2CqMUDwhnjbjeDhw4tMLmXZRCy8j1FqQpcKvTMg1UqDRVz",
  "key13": "4yFBQUUb71MupSG1TBiDvH1gxAvQv8ibYxA2r1cdgk8LQmc1vMsWcqUMqUQ6LuUgkHfHhD4Qm3znzyUTC8xYThYn",
  "key14": "28YphDv9Xs18LK11xq9s4Dq7AN1DJA5XzUUq74jKbVzj4WcbtTs2UQjAUPDvHxGfBj13yUWLX3nPQ3CmcFShJq52",
  "key15": "3mHyc7NpRdHDkjuT8Pjb78NchJckWXpW29EREb4jNhY58znWCJeE95v2uK6SYKAWMe8fTS59A3RAzU9nTDxXkiKZ",
  "key16": "5scKpVCCvzacxdhE4RsNjPBbzESK7dasPDWwL1uajF2VL7myTr55esqGMK7SXhSmZGVWNDqHVzD7237oXikSM9HE",
  "key17": "wSeipdohYTbE6u5zNKa3JpPwaM9BCnWmt8HQdypUhK1KkgqnjFk1B2sxXg36ouYx8bYDHLamarqynsqiBZYmQvC",
  "key18": "o6DWmGqnXevDMwaAgQgrbZsFu4UjYhQDXmD3rn7mQ21KnEWKzhorrEYBCUpYbb9BoEKKbrwHNNVxcMhX1DVaZeP",
  "key19": "5faRkVBejKBvjSDuBTDe5KdfBJts4UZ53cUxu2MzHC2h9GfX5Hcj29TZxcnW5qGGrfKuaogMRLVAsLQHfCFuFpRT",
  "key20": "2UimqocgCMNDLoSbBx1pjfYiR3r14rXaMujZf8hArpSQvmTZDxZj4dR2bSBVL2rD2kEDr8xmkZe2zuDVVbqmH2Mn",
  "key21": "2V3L22ZcjgYWBS9LcSyVBgYNUEiEqju2i1vaJteMRiofNyLFNZx2DnN2W2PcHXLU6rqsFPZZssyRfbwNUcziR2NG",
  "key22": "3ptcjGcZGBDP2AAdEjxJXWHixor7PQrJRWNZS7PgLM12qNVrBbK8wicBVt1bXT1Xiw3CE6iYNi6KCcj77xNEs3LR",
  "key23": "5FsAT5Sm1oZfB6kiHemrADdGeeqMnVxNpMkYeALtEsGetq8uhv2Zee5PNAFaVQbthnT66xYPSXHA49dz35a9Nqpx",
  "key24": "3xeMeEFXF6a59FHf32v34WecFnRXurB8iSQiLQr4S1n4C9PuFEcZwWjiPK3YsTrE7uD8EWDSv4kdL6u9gtPHrLGv",
  "key25": "5DTXPhUp2Q4JVeSQTNC7ZbAhvKaoZeyMoAJsNvgGHZp3VJ3fUArp1JoKTmC6eMWTLBSJED6FjqHxdzc88cXJEXdh",
  "key26": "4MJXpD9svBqfiC3sXz9B8MzoyTuxhWDdwXZYYrTW6EULX7bLXAGxo9D9Uvo9S9uSyCC6H9pZhaCPjrLZz9DBP8hC",
  "key27": "2MB28viSbd3PQHE5DoASr92ngyJ1k4JEvtVtzWTaRcEurCxRkVubLYWoA29j7SZzuMQiRVXqQNVFkHknztQiVYsy",
  "key28": "3hQcwGacNmhYwh8J3YfEKFvxLXMv49AykLTP4E43H5XjDz9y6VLUM5uKqcF236pa5MGBz5vTUpZJTwp2at55DEx6",
  "key29": "29XwFMgv3ETx9iNMFx6DzEFeowH7vnG39v6RNKbuJgyWUuQ6NtLUrZn6xiViXLeQ5pWZ7UsedmqFfrRocY1b8Sba",
  "key30": "33bbd6hUaqtCPU3z2VmkyAS7SWtZFpFSBbFYoYkssqJ2TLwupB1jHk9poKDXXcxPLmyCmp59NqsbVtFKH3WeNUV",
  "key31": "2N1BJjYP6LxKbHFfBEcgzehczyLVyKPmwPBE5UGZqr9dzyWewdgExM7hQ1MeS6xhAMF9BW6stCBixgZaSv7MPb6Z",
  "key32": "iwMD57hNPg6oayWR5UCfPrxQZzzrsxsmTQA5dLqncf7qdXDsKKihFJnDVtL3vrowj3toNDRvfGd39MwbMYsWBC6",
  "key33": "3MRnj9NFHmfUGJgVKzcWc29hJMQ6mRsXP6ehoXRpovh7wBLNaRXwuYb7weSopihRyk4yovfCvzpFZdm4v1QcoJC4",
  "key34": "642FQdqW2iwtRJM5Gg1KVMkV7jWXg9vn6LkG4Y1TnhbGPGsDwFukZzkykmF6TqMo2w56jbhcu5Yi1fjVZqRo55kS",
  "key35": "3uNgchbBwTtiApKRjpd8uv324P8UUz5HBSA48UD7Z1Jqmgt9X4fdwFkNNRSc6Cypz27FnfQZy53Wrfk3H8NGNod3",
  "key36": "FcBjc9LCpFEBTPXKaoDjFrRxr6kP9tUHNhXp7K6v3r6Kd8zLPmBzhoi9f8vph3zXE3Pnwq1QCr4x8oS13G81sM6",
  "key37": "3QVXcRLA1dWY2akup5D8Vzw6U2xKdd8StUHg7z3NMgofw7AnNZ3RU3cnf1ib2onGZjxHF2V81spijppwePKLNdWY",
  "key38": "65CFdsApr99x7k1YLJhK7tCd9p9nDhnDkRM95PeJddKXhgFobdvGvvW7o6F7rin2vKbv657TFa3NzVUggqk9okfX",
  "key39": "4ArVee4JDSMav4GnM5SZnkanGji6Lh4CQ5XjTC1QtpcpvhiLg3x4Psk6hXoMvnREbtzHjqPFBnZWph1jAULH3Naj",
  "key40": "3geo7ASL8bBCZHABd4xRUTGUVSUzHBPjESUwFB8t43R99Csfjga92E68bR2DiMR7X1ZNhzsgaRR2FF57CaGCKmFp",
  "key41": "31dkQU8T4DWWL54eJCdAXSE2JcyjFJkihi6WZ3AwyvLQsghECAVCckzN6zBo5UF9wVfum1TmnneZhX8nhuPZFSuV",
  "key42": "4dc3qPJBtnjfZqy8jfQFEWG4hdRivh16N3Ss8AwxyoizjZ3EBQN586a2cJQainM5gWU33MLtqq8cqeE76HMNLSmL",
  "key43": "oVfoTR9kNHq1xJ32kePrMYQKmiLca6jJKRFMe3qPfWf7BLULPxViajhSE2iTvCYgyTBm8GHuFvytNVFRCLxahj6",
  "key44": "2H4KjfAFJBMPJC8NRZcL5wwBysSzUcwWU8nZn65RMif2yKBfzfToFvYRd2cbmgVBKpxoozroERjmQKVPmA38wxpZ",
  "key45": "27BbegccfxBhrYkLtV4iwXGq6rZK3RbWdjUFh1QAe7Fk2vWECo3ymXyN53n7Q5GQSQ4TN8LA5xuwJa2jJpoxvPqe",
  "key46": "4KXrjBgWPhZKhyrkRuuUyysQUsqfbibTh59ZD1AA2pxLhf9UW6i8JXGYPaBVjrDL5tr55Ka6pyTnrQkXfPW9nhGp",
  "key47": "639u9MFqDZZpqQPVhd9SFbaCVFY33PZJCJPbpQFiWNXb5Dv2XFCDKDchuEb84DPwWwcizrHbJFviFpHi66DC2TKs"
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
