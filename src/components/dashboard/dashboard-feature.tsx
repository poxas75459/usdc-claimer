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
    "2fMRUhxENmhSiQvm7QGyZhamSxK4kxAYPhY1Ze11A5tjnwkwFuyh7LsG4ktWdyWozmk5qGB3niUZYiH4oeLBmEGH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZQ8TSjYLMT4cqpemQZbF4gsUuGUQhjcj5CnVjn2oF5JruuvVoauyJ8aoRzwtY1GbzsGFgC4kbNMkhsAJbLncCC5",
  "key1": "3RXpFC6uH8mNjYZuXHLD1nWF6JoZLNWZwwDfoVRFSnzmPw2MdACaCo4AfprJRTrWZkbzZJ9BFftW4CRiiuGCNUZL",
  "key2": "2n7UjjYuYzFbeFxpJGxxgfHNHnKcwLk6MmVqPxVstbuLktAMedtDCw1wLrvLJjQVjvkVuSnKhWmBHEnZqXoB7CkE",
  "key3": "5cfV4BbvK1YhJeEq2PnWTEKDzpqo78oyTEuHReaoHVWtZC22DGNUTZHgh7ApeWaUBKCxyoBcActqqXo547jkmK3q",
  "key4": "5sKVNPLsvysbZrNA9KbzjrM6DGqzAuXMSBmhBv72sT8mnh8Mtttf7fNJnGnHAJREA3MTXF9SkAzNk5XKwkYhqert",
  "key5": "5gWv53kEMYVCrXb1cPAPGz7qsmQfohxUyV67AmJv1fhLUeD2esSPvcN3wsBYtSDSLpooEMTppD8j8o4jq8fvZzAo",
  "key6": "2YpyxCZo276gDQ7C9XvwoLqG73irdEukdmp8anQ46rbzRQeudfiySKK35jBosSVsvDnjD7hL5g79hV8CDoGT4usw",
  "key7": "2dgC5c7R8MShTS5FYkWgFdadbivx2Evdf88K2nRpwa2ftPCRrz4RJQvmzwPHvmska8Mnmzj8KwfoTvnyLXJrxq1n",
  "key8": "3JqrK3W2HTyKqZnPPp6JbueQTyYLvn58eKALp2c8VC9oR27RTkLXQJpU8snQaNv6S3zK26ykkYWZWrVtoErvHR8c",
  "key9": "3AFcriGBfhDmNFvEXFP9LVRAv1exQ15HSjb2qL5iAcjgusQJoD8nGq8Ubz5u5QQMJbxhTc45vG5RmcH6oood67gt",
  "key10": "5caGfUgZUcYvRoPJy3qy79VBzZ4SD9B6GGaaBFiiYYmyP2KDDhwCRHSH9s3GQWRC4BXka8uyDdSL1NVNWUNsxgSJ",
  "key11": "5M8MReLp7YMXfi56xW6ozXYmUssoHNBwA2VFdeGCFhNJ5HJRbdETzcqkvy7HyxQJqjL2sDKueAazQV6nWxA2WqSy",
  "key12": "32aGFtbzJCJY5agMWTD4Ynyg4iLPUpshVW59DANvajymDYNnPDnvSdGc5yHs1PpYj8n9niNjCobhetXkzAajaiaL",
  "key13": "tgGEurEKQQXq3dGipF2LTp36y3pe1CoaDhQevw45Vq6idkAZWRS1vLKjW5sx47u9keZ8uuYmKvCeE4wXYMRmY6V",
  "key14": "3BekdJ8QoDpeGJQYpnT5dji7GYu3XyQZPUvj72wRfVozqbrDxAG36GfbMsEHtgPUUSYuB7jCFDF5MRGZ1eiRh16B",
  "key15": "2eLcQMKDyDtrDLcPCmTMbXYeLhs6YStvZodo6raJutn9UC4oB6LKWUxG9AMA1Xbq8SG4jkbVWANMoVmgzpCer6mk",
  "key16": "5BCtSXGjHsGyp4wx2yUMrTRKfxotvsoDKQxXDjjH7J5jVMFWvt8HEwQE3gAZdnMtpFc25Rf6cLCnRJ1ZimJth2uE",
  "key17": "4J2ZcSXcs3aYrpLDpGh5nu6mXen6MMLo6B38uHckEDQsiVt6Sf8F3gdvSG1HWwYKq153YxtsDuRCAaPxKxf2wCH2",
  "key18": "AXn8Wc8Fad2M2dZtaj4mqxGbv4mUAmNz1nSk5QEdmodJzQw48DLpLs6TA1wJ5CfFN7a9u7xK2Z99AzYBcs3yZxR",
  "key19": "5nqdVaZqcf3UL9fqFVHYoGMV3RNBf1zuAAvpNF3sCYgycjnZWFQu2PJK6iyWvJiP11HtULmfaU6KDYxb86cLSJGj",
  "key20": "5Ua5GrptUZ54pi3JtinSoQ9DBgZ7it6ctpmizXCfUTGUYzZcaqivEqg1QtEsvQ5UMDKpYFhyYTSAK3hhS7cSvovD",
  "key21": "3t5kMRAMP4ruuwJ7sSZXJ8FWtqKEmURM8D4mt8wz4d9sG196DNgRWxQmq5UkKEbrsPoJobWvnH2jgLrSwTQyeFuV",
  "key22": "26JnUJ5f7hBtuMimvzUyRMKkLowE5FUvegYyTyMdgwuwjoBQjJY4AmSyGhiPHh3Xsk28mLzmVGdeNKFa1hqFCBUo",
  "key23": "3hLtbqxzozdgMH5aDtC7zyxVYpSb4yuEWWQbjh1mUm5kNh5XL6AUU47jG745rN5sHeXU5NxRE8MYnYVmRv7F9Rzu",
  "key24": "3NCEpyPrZ4gaEoLUoG2VdRJ7Fw6FXQ4HEyPHvdTjAgNy8wnJSYjxok7SUsDH8Ff5ihZmtNccgJZXJcFQjSrK5djh",
  "key25": "8RNSUbeLwo1Fm7uU36KLFomgjhT3BiwBX7HpB6jhm4gsTr64fWSwf9bvHQ3XD36vyNd3hLpPFS5zioaQM2jmgD4",
  "key26": "5QUxtgWsNgeArEixVDQXD7kYP2q5PUqb7MY7EYZLN6oSgeZPaWxDr2w7cCuhjjLSDZc4mCJzdZr1vmbVvtsLQUAy",
  "key27": "4jhAJDBRWeU7f86jFcdN8mV76DJ1AcM5Cg211yYPr5RDxXRpXwt8hjminpqobRPH9k8wsmFFhncNYqKEzkG5WMk2",
  "key28": "2LVs3yZ8BgbBVJQezwt2LRBqSUP4WsbnSoaCdSTuFgy6peLh4kDUEgYhhbg6erdktMzKKfaLAKXQXBFqDA2k9S3q",
  "key29": "ojqr7a7PJ9bQUiGpKhnDp1wT4tBG2hA9coLvgKeeUKMsmHPKUezNeRL82KY7mxChneaFnvZ1ondjuW2QWCAkwgk",
  "key30": "26AHd8SJtM5XPrRnCtLRWKddgf3YexMBAA2RtHj1yMLXYLrkGx3YVK7W6XUaKjbq5RLqk4NtDozbAF4Tgj3QKhTY",
  "key31": "4yJJUJY5oJFAXn4TzYz3oanNpSryjq9ms5ZMnS1wUfW1T9WjmCnAMZjVdtNCntrq71Y4CZf3V8cwUKUB54nPQ9Fm",
  "key32": "3Nj2oiGUUD75RUvx2FJPWcefwAy6F3wvzS5MogRaL49GMVq7BMb7z5ZQCLnEgsW4W94mRAYvNMKWvp5W8DhbB4gY",
  "key33": "3dQAQc6waNaDnnoF7T1VHAaE8FLwmGUR37pgeBXauCseGA9Fj2SRoPfNNjY8Epmksyb8LdTBnB15uRe6QsZ95z4Z",
  "key34": "5LnBkAGkysH7KxdQ8XtvxAmZmoPB1veUBUpaq1E1DXvzi3CfXefkafJdRHH5RTsGW3MsXb2PzzuK5JMxCtWv6nhg",
  "key35": "2TrKbk4W811aFGRaR2gKhFX93sA68463HRzMfLjiGq6xLPF78CwqGTK8SPC5aPZYRS873WB2xPq6vc8Z2TPgBP1y",
  "key36": "gh8nLTM6APjoUXHoN3NvRMDV4a5AuYLykpNEQANN4X4X33mxey6GHK6PVGg8kDdFkWyPHUHTgqqRV8vw4AWdNDH",
  "key37": "4gCFYVZMeQ4FUFk2f3hidRqVd37MA4paKohL1LfaF6VHDAFLkwuyGLDwVTwMdLu7yAgFA48yhTXCPWiyMLpbdJK8",
  "key38": "4LYzgMDh5y3Q11xa5HiXsB2sEUYCubtugsjpvGXuwB4zeFp4jdmak7Sd3KGDihnYXrRyyszRNwTcZLGLwSRVhEaV",
  "key39": "4G9sicczhWcrR6Tad9JFTyEizuvbYv1Qdj87rUxb9nyNeJgsNU1sn9jz7xj3RDwMs6URU3MkqKSvsptSMKeaCUn4",
  "key40": "dASajouzZ13aLQ4f8QzB3V1f1a1KTbTuR89LeBcviuizWZDxgCuZNdSvbq2nDPy8PDMshxxmUCgZZXWcwDpooc2"
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
