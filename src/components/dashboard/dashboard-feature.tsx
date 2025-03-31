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
    "Xy75wEqxSnth6RAGZTtKnbYytv8SRZqEBd77Lg2sDxKAwA9oZZ9WE5ibrXiLm4iNgCAWZ3eHgjFXGuQo2Q2sDqH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GzxMC6MRZRpMgJGd8ZoSfkciE5kKSTjFBLZ57oAqVNLp3Ba7vxmNNPaah11k2FzqCRuhPHN7ndsQ9KsPYnupFyf",
  "key1": "2qbf7LXnW5TndZwn8B2WwCc9Z8btrHZoTE6q3Mk55odwg8ER9y1RdBEV1dgd8Unsa5DMwjLH5KxpsEcGosvRN6MC",
  "key2": "5rHsmPTnSp2kH1qJhZ5B7C92LUfMWX5i4SGrrWR1VqjTVJiD7coBT3uvc6AsRMUMsq5oacG7K2YEPCtMCAAFNHmD",
  "key3": "2tZBnVYFU5iHYtqjDruhVypw1XTihj7SbN2sF4tie8yBBfUvFoAWtug38vKjVr7TCdvTtot5TSFMFBJvP8gDsAXF",
  "key4": "2CoH7m1m8dXWn2jRDoFjeDmGyrN9S6VPkaLa29SBiReJAiNvmFJTkyqNL34T4FFM3d9jmb47z79AGyZyyt8Sng65",
  "key5": "4NovBkSE3TzPeXXZwQ6mjwfoSPxhS6Pc5sQgys9myAh8vCjH2MddzSKbxrXcRdnqgG3cyGnBnimiJA5uvLEus7XB",
  "key6": "492xfXguq6anS9N96JpQAHbc56xcGXmndg7UCf4qY1uyc24WGZaLVoiSsZACmcD7idddPehBr2REqGf8tj65ZdhR",
  "key7": "657dLA1sokVKeeQF9EkaUwLTydPw2F5ZW92GdGma37Rxy6aaZeebsJxN8dPJHeR9onV6m5juY2UfH9Q4Bt4P4i2m",
  "key8": "tr8v1FUE1zKHmJdeP7bz9DGuU5fdufnpxc3Rx7TfrfmQE29qc2cZAFmqyyKSdWWrznJiegTb7hs3vWvBAqC4Wof",
  "key9": "283fxxFzrWmU3bkZci1uTiHd534MC2vVNDHMKjXWr9EFsXjNSqnqrbYkt8C2pL8HwUVf4Z7kLN1fUQ2GiNUmuYQp",
  "key10": "2TK8CTaXCaavzc4EJoJLi8vQrETsj7ELqeMnRWNDskFQMB7tqLaYvRxxiLq4rDVacC7FzjTC3PBacyTkiNce865o",
  "key11": "6zte5R3ngtX4vVizTSvhZzQhU22RzyKv2XRgbHrT9ycSq4WCijQZTCV1LwJA675mv5eUDGUUYfGZi5UwfVRV6o1",
  "key12": "iruVF8nfe2coWA87WVd5taTiggfhLsuv2CvCBgU24gsvzKfSVcCyv7WqeG178x7YdMxJKi2NH76qhZyeSdVs2Vc",
  "key13": "24EWdykCo764AmSM6s2YH7rL2aFUpwCeWBW8EGrwAsmFNtEy7c6cjeAeyrY2oSsknEDJVYuD4gbZxnJTqamJcDG7",
  "key14": "3Uhy4EmNPeWnTUikujwezdmMjHMPKG7t7A8cmuu3Q852BqZrShvFreFgrsdpvpMAsL66pnqCqmG6uFXAPTBwbmaM",
  "key15": "7GoPoKdoqFhQQ9wyf5Z9itSYU5zcknshJwwDtMQBbpNpSvfNVH1KGnFhGS8ch2kMSF9m1Y73C55jV6bsMF5inPz",
  "key16": "3HkthjrjyDe7xJAf2QnSuD1uYRPGGEXaecF5aehxC7ANcVpNXymmGdMPZ5Dfo6JRMv8D3Kcvj6BNqe1qJYPZ6JGd",
  "key17": "2pMkdduQawzCS2fwBnWJpf6HBvHQxTnsPa5kTuYxsaZcgab1wy2sFeZjsGxiS8WV1SFa3CJqSBAu8Tk9c6z8SkAR",
  "key18": "2ruhsGXMxhDJwJfN6CgNLTq8xUV4dYyhjmDnLG2JUigKvHHSvonAiCgjucgX3LqJJdbYHgpYeYbCd9m4scj8zK6E",
  "key19": "abzEVtbLBdko9TahKsb7cp5K25cn6S61Jp8UbfiALd2ersGN8hegQfmX2NLvyUfRio89Qqarvuu8XS8Atekossx",
  "key20": "5XZMHtn5V9A76RKTUceMp5vS1UH4oFR3ggXKduVz1NLFWmEcwbnKgK3HU2vGTnf2a6YT1DNq5rrkqjTiTKCbaFX7",
  "key21": "4uv4Az6ohvBWHwxBCizbqMNVwhYzYdPfJTWQd1mgogpdBdJPj9A6qZpCa8x7xtua8caHGxtbHMRtLDWVXmwcht2k",
  "key22": "2DbxTzQCnnL3wqRjx5VywCDVyQ6CpbmaBfL1tFmZAnqiUmNnGv4p7JepvEBNGFNoKJu94S4VHJ4Q2sG1QDApnseS",
  "key23": "2AyyKxPxehKAZPurTNp8gPg1BfFnVBbChkG93QrHHSTaKgnCSKDTwS4o6hc9EoZFTvGVBS2uktukwHp6KHq6tvWH",
  "key24": "2ueDr9C5gsXeyAtx96pK26VXg8ZKprmnE2kTCdp96eEtBNpmgLM1cwWyswV4Ms1NwuYFFUrXj6sRSTnYaHDf145N",
  "key25": "4v4Na618zNjMpZVi5Coen8KWVUXoBqscyTipr2L9aiVjAMM45oPucQHYQL5XyY7FwGQNmRMyHX6vtPvUjDWk6HvB",
  "key26": "4pvYQGpvQGEyxGDtWFdw9GCe59ZYzL2ZMLfH5L1Gpcuf1ZhPGDEXF2FL4SNALjTv2xpq6En82rxmQKyTM4pUyQZM",
  "key27": "4stEAQtXgLdvSCeDTArTFn6esziYyovj5yENufaJanXM9wSAs5o8Epq6k52qiwX1jV6rxgMAkxUGVnRbCrrV9J1N",
  "key28": "2XsZbCVtbKpUcrU5toxb6DBLwAiGqv2LxPgUVELiEm2UBmUV7vGiz9pukme62zw6NukzJXjj3owy7fGukZqBEmc7",
  "key29": "53n7bbxjCcTuwc1PfSQHPjk588AnR7XAVdMZPPkFnnvZwAwtN43oJYebxZuZhoa1zmiAo14HwScGWdrQfk1ibd28",
  "key30": "4LHmnXQgD9WsJZtZ1enVAWM1WGXqQiRY5mgS2zjjkdKi2TsNYGUJLxFo1LcHTT7HAQmgzjiMAN1C2S4eFEmMro2d",
  "key31": "2KpgXLBmVECgc2x3HjNNord9UsYbAe5DRu4RzPCULqzPq1tiguXzvFvTyVYKNQMbevXtqup6Bmb2ZAMoRJv41VkQ",
  "key32": "39bX9fuhTQTj2NNUXr9v8HfpEGHgcoN2xTqd98TZKrzcYE5VCkYc5RGvRhf7dzGT3h26yNEWmjXw8R6m7in4sNHm",
  "key33": "5SMZFKdPR3AgUJSpMo17g9d4Wdzy5iwGdG6KQEpEaWYC2ygK1sU7TF9vgm9uNdjNMcqhBNc1QM3Ycu1Wh2Y5VeJX",
  "key34": "3GbtU4W4dXzfugXt7s8Cqe93nF9kQ84EcKvJ5yWpTd7H9RysG8hUT4HnNmDLd99knt9Y2zEwe69xmZWc6NddpXp3",
  "key35": "2Nj8xpbWoyDS515y6zgx4AafB2MWuWmUWp6dR8bYi5VGTM6n2My9uJhkugy8Hx7o8VhXCUcUDXmK7BpqTG2jsWdT",
  "key36": "pNqgfp7AhafrJzPGWcYGg27vvURUhF1u69uk9P82Ypo4Zm5EhyiUW3gBSEdSqZjFQRzHApNWLBDZwyZJecUaBa8",
  "key37": "27fVduKKY582Scny24akjr1gjeZcatbmoCVXuXjFuFJZk8rRfcto98ZHyMoszoPP98vNkUPoRVJrdQn7h57bVyNt",
  "key38": "xVF3Gk2ZKk3y71QNRcWP4NdNiAcrp7MMmY2JG89y2gqVRm7Ea1PRsGRsuvdwzjatNifK4u7Y2z5RShxj8oizE45",
  "key39": "YuhfDHyCYfoG1URvfSZAV83vzifTi3QdNEkGqnNWQvTTC7rBVYV6EirtVBvVYHD6rmB5pgb2Kei4XegdWCwKc5e",
  "key40": "5ZWj9D4BQ2FTXE1FkAFupJ3dwEaLYNF9ZvhTRbY3DVUv5FaorTEvCYqcTGeYBFFAFMuWA4migdSZKifMrGE555KD",
  "key41": "4zx8vrD4Hj1A8dn3ERXx4pPa48tYwTvshGY7NpqrfwcF7T9D4EPjNQb9m6wgnrcU2Zkpr7t63QjELJ2Dc1wnpeCY",
  "key42": "4ATpMtJrjzhAjAmH5AugmPjKYPuYpF4uY3CbsGudPFDNcKxTsJoFWykZrrmJL3cBzbm5WZmo1JSG591w36nFhG8N"
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
