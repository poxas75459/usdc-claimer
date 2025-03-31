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
    "28utkPBh8K3FQZLunhLKYmvaR5ZRwosrYQTMG8BTDdTT5cMeo68BcqQXYhWprP7hW9PC2zw35D3aApgZWvEtD4su"

// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "37zfhwmZdujXMbWMc5dpe3yjvzgFh6uLdJztc3AE4FrDdbWanf76LC1QjuvAHetrvJmkZ1ANBsSsxUFBJG4VddkP",
  "decoyKey1": "5fPrXbApw4LS6bHPEiyxE1bWhs8wGFMnY9vK97bkUFX1YLeL99M3FJh5dGBE44XvMbSz6WsDNgpuZ9WAoashTyjk",
  "decoyKey2": "Lhc6DqYUqMMK4Pv7T1v7qPMzZwTVJEEhxpgMWnyF3Pxg8ApSRGxSv8eC4YzW7es8UXTNbRG7Lk7ceGkKSJrDs8d",
  "decoyKey3": "22dnVbAX2f3SNyfAAdpECxhs52SVai8rqPGApB6sKHMiqLYsG69q32sdTtYT7VGdAMwLvf81jKgnVEQoRGWFrqkD",
  "decoyKey4": "3qVYWufsoP8VHYGzRfMYwnqcP1vKuSBs4nt7tukTpBez7BxSCsx3URFFwbx6JBBjNcXTK4giy7cUM4YKrupSkA3G",
  "decoyKey5": "24K1nG3ZAqDgeJhFzGeiezowDxXJThPWuVwyuYypBGiDs31qfR5cn5d5tBXw6i129YjukhCrw6ReGhJmHZtAaWcv",
  "decoyKey6": "hPhqLPdJzjFGQ444FMFzraafQyGRmPD8AMdncAMZ8zNKWd9cS51wcDKW3hoSFCHHsydX5LFDmBx2He84qp318q2",
  "decoyKey7": "63NmWzYEdDqb4GYzFdSXzSev71UmdoiU6VYnU6DE79LNXfuh8qJiapEWixMQDf1juA4E61fAUzHCrhEYdQGXL9pF",
  "decoyKey8": "28XTHt1nwyDq5KZB2xvMXQ3eWZ1n6CAV6xBQMGXSDNdEmpkzeNkZ4TquhuZVjb7A9751sAQSQWJBVrUoJYv2v7eu",
  "decoyKey9": "5Rs8rdNxQB3PeFCoGqnGCjfseyBAX575iZHdvywtSdUkqQeTNsKW8moxjB77PSuXCfkz47urk6qAZSVC7nBwN6U6",
  "decoyKey10": "LsQF3zS1fjJFpPoJE5jF4k7FVJ74Mws57XnVD1nUaN73xsFmMT7zuBKqX9dwJUzSQ6FP4HpPozj8ehXxH2Fv6WE",
  "decoyKey11": "21pj1QgoCyU75d7buYkbm9oLBzEtak3fWNhvT49wBshmNabySejQ5bgi3DtxW5PKjaujaQXwdbJ3dqSr8heJ1jLn",
  "decoyKey12": "42xqJhvH1xgp7ZwYNFepqbDGQ2pbWhDVUmcapBEanGusKwxUYKhN6QuaTyhqJ1dZs9Jq96ZyJjMKmEGjYDSSAWPu",
  "decoyKey13": "436LdwfZz6amh4ghhBFftCdzqUL3tDNQtmBTS5M7si3vrrdP4b8VuTXcbKW2RshoFo94PZRGQhCfmCw5npYes2Wp",
  "decoyKey14": "45tDNJoxUEv2om3cHLQEsYS4odULHfrCcSGLBDb7Looy5q1XdcrYuemP889senxyuJ9gfuF3xHzkJcDtkCjUvLGL",
  "decoyKey15": "5QC3XEKgxLukb1M2hokKiQ9CzE6pXLREfGygiZMB9gNM8aW2jcym3hxKP8xkEg2Egds7REjrd34SrxmBnvQmP2KT",
  "decoyKey16": "2GmBYiX6Ph7xkjN1zsXGd6sFgRj4NsM46Np4nYaVqxZVcdmMgVAC4dt1aRdSGKQYpGR8rHBeHwzLxLzWuJiDwYr6",
  "decoyKey17": "LBnhe2rY6GMjBEBRKFpm6N5a2K5MwETLWyfbRxBEvw7Htsb7W7Uu9jAhzjXF83dDJZkZKJY3eLnQVzP9VnXHGbw",
  "decoyKey18": "2AdShffcDp4vhGiziNaVB3CArEQG3GfT2gVbo8xGdENyU3EJd4J5JNWy29TaaF5KsuyQTmpKnRrAaQtE4wcafF9B",
  "decoyKey19": "xm8yy2sVQ8thtxvxxLK1kucGYXnood9Ep1JpzZrMg7TK2W8AD3viGY2Yk1vUX3spk8knJqyUzqjcRvp8qAaUE4u",
  "decoyKey20": "44CT5i9vS5jQVGsRVK75JrjByHbMrjrkeVbRoEG79pqnBUfzDowP6YAgTpRQYVQJL6y3CocHeRDbT2xEsvsNi2qZ",
  "decoyKey21": "29AyY63icncF78nbLMWjqZ36vM2rSx35DAsdhcvo9B5tYYkTpATMse8jFpfRoH5ir66A72B6JyBnoRG7j7GSaiUE",
  "decoyKey22": "24W1Ki4W8ncSsuAGqnfwKJUVz4sRm1XLdfTHkW2Vfot5847gbqsfadaatg3kHQdA1UtoiQTwSc9Km5qi95NtR99z",
  "decoyKey23": "4ZQEKcCwNPo6Kt4kBTcSz2cvW28TQZmhuYpFCcbfZmpPUkKJ4ZusXaqkBwS1n9c9WBVLbQfjorBKYpog7AxcPqTb",
  "decoyKey24": "1279tH5YCZYay2WLwtnzadrjwBjZKfa6eyCdC6NNfrkFzDgPc51g7tahbGDecXeH3TeZTi99uMcjWSrZ3Ky75YLE",
  "decoyKey25": "2gjkTv6ZVP9abtM7sfmq7VrqmgG2iDBJFHBhb4EYkzxEuKenJKwTpPKSf9HaQge4jGkv8pQH67KyXfk3GsGv2UUv",
  "decoyKey26": "4sx2qjr7abV2M1MbfZ43r2sqFsVHEvjnXLAk8pqSZs2brohhEJDisaNKDy2pSa41HXbTJwFzV1z3YM3Kq95iwUUG",
  "decoyKey27": "xA265j8StUENxwtZoGa71H1mPgtrWJetToTjAxLdaE61jHZGSzBa7HhV6FqhYyYA2iYJg9vBn5tsuvWKthnGVZJ",
  "decoyKey28": "4DL6SMatDnD3tEJbge72MmcU7f36CdPXG26tSGqMZQLWeWcfmwTxg2Qz9gVzMnraKq25HoLbM1Gq8xfHWdBAE8JN",
  "decoyKey29": "37QwCaFH39Lej8NDboJNvBnFNWEJGTX8fK31wPuPNtLQ4k3PpdnhfKEzwTSUnkZ2HM43DMVWZm9Eb1iKHRTJ8aHP",
  "decoyKey30": "4StJ45N4TauofzdbMCUbDiga5DRrNvmY9KSG3oqy7oC9q9tMDAhiFoXf21UkbVX6NepCxAAX1H9aDuAr1izH3GR6",
  "decoyKey31": "2srctfyuas7DrXzui9LdM4hvKzVbZQ5E5XjESf4C1aumMxJ1QzZgg3PJmsdGzfDvfkiuhC7wH3rg8boQcbnddgMx",
  "decoyKey32": "4QaNemnbPXkDxvibDqVDxUv99gjUyG4AAwj443sVWjUBTN4uTESRUbThP1x2hkpxDyzpkNkYJy3mYrxxcmeotm3Y",
  "decoyKey33": "5gG6J7gH8LHcEXoD8eGeKVGAUYAvxL9mKPXm2Ug9kYp6BYM91fffzDePDSUH8o57Z52qH38ghbjZmTod7KjxHSpb",
  "decoyKey34": "5HziGVUHZRW6Vbt96EaUmTMFd3VKCzsfL7whxRX3x22bcftcx9s2h5StwRFUC4jFqvoB6XWYj6VYns5ZbWSN8LwZ",
  "decoyKey35": "3y6zQy7zJtAtt4UVhLKA3dP1X8jXafpm8nR9wWtVotmnSaPCg2BViysGq4v1eTSZEQzqrgYK86HZUNGoD3rbujqf",
  "decoyKey36": "5SxQgTnutZnPFibpKdYPvk81eCWchuuNvZz66YphB6TAz8KX4YA9fSquYNWRvVJaQ1yNUnqCFzmWjAiha5rNbjP3",
  "decoyKey37": "4TFp239An23qtSvaAcLUQVw5X97qgUZf8erwmg62K8VtDuS2txfLVUdiLnQP36UicZ8JEKz1WjxowA6qUkPJbrxY",
  "decoyKey38": "3SYwuYFNMMS8Zc6XE8f3bivgcQMwT4XDKwxvh4ZEvscBBURhjBqRKe5codj57d8koZm91vxnNXv8vCsDQ22PzipW",
  "decoyKey39": "5VuamyhCbqKjuqnSLZo6WrX3YAPubHZdZo9mZ9ZXMkYYvDx2i7HxKYXebnwxuf4GE1WXzXQ72NXXmAT9JUiV6Pke",
  "decoyKey40": "2dvMHf849ggMpHsWo2MaSM2LdQhwpY3UgTrMGZCJokXrgmwCrFQbqMGKxFjbnirRvhfPNCwuWZWHdBWkLFRVwjPC",
  "decoyKey41": "5SFFAWjJ1dx2dUmyo5SezvHuk42zjs6UsPPCt7sTtxXAuH5PXWRkAomjMFyvsjdMZv6zNHHRffJmVz3kDzAfiBLJ",
  "decoyKey42": "5LVQJr6kjX1x5L1NJnwFyVNjA5YpYu6yMLrMv5XTtkdkUkif5x9nBymq6ytsxSAondcuoQnnJXXYcM8RSDEKnt2q",
  "decoyKey43": "67RHLoeBrx4U8NrDqVHshGNWMuJiXtPVUJmG9pcqqr4SHPJHVHmkxWw7hWfpGCCzoXV9vxZb69HpiduXo7n4GeN9",
  "decoyKey44": "SjpBZeoWi474zAFvo6q91kevZcZwpNStFGPoJY8pq1d4nhCv7bKdqtJsw7TzkdJeGfdr77RtEM8HXTLYQWQvyEN",
  "decoyKey45": "DqfM787gcfEh5izu1VsVryvFgW4TnTiRmFSqqzdchwsWYrNHDvJJYmTUJNqfVKtj2YTdxSEKUXfj14VEg6RvvzX",
  "decoyKey46": "3awC2wJgiZ4RwA9CMQ6VwWoi27HywHq5zaAqevXGU31rmVzGo3Pa8Xx6N4EVLwtqXJquYvk4gLpgFEcN71yRShV8",
  "decoyKey47": "3XLsAcxVwfnrDDpQLeRvzoeMqWRKP64WUxhVzjkS5DeAL6rwDhF8SuPGv6tVFS3Yg9hU6EEJMC21ubNnVbDTSvCr",
  "decoyKey48": "3oXbT3Cx4Tp7eUAmaYryhxvq9zuvg3QLgjywkbzLQ4WNE2vLa5UafcLCCd1giE5v8x4XWFfXvPxsZXGrNxDxTCce",
  "decoyKey49": "28H9zABhch79fjzuPtaSemn7WGUKAQ5pg4Do3W2p9dDKzEZdgxFK2u4aMFynwfr8Db1TVSn1HCN7sZhhBUKFwXTX"
};
// DECOY_KEYS_END
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