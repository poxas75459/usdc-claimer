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
    "3EHJ93D5C19GSUgy5QwFY7YRHswymA2cFY6tffbCabNcxD7S9BSMi9svjbJSuKKnur6YV56bruH38hN61kJCf5XB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46A788N34Z2Qoouby3ZjSpdiJyqPUzfCCCApncmSj6L2n9pzqUGmRYRu8ZHotrhuPxtSqPQhXreycBQire4WeG5c",
  "key1": "2ZbPGrHrrwCysGvcFzdBTowBymY9umerjBPKFo3Mi9GQNLacyG18Y1oUBTdxSySbjcShHWsJXA9ATykvaf9tPjmm",
  "key2": "43y7HvXrVkFvXVsVA2TQ9otyvzfT7abNov8m8UKeLQ7qhvuc466hp1ZTAXt9ebiK6sWkWcFwHtyTPTdnVwhXHAiM",
  "key3": "58wou6HwAdjU6MzEu89oM2dd6BRHrSkLQMvyHRvRqABDWjDKd8c9tu7EVuAChjjei4iKrcZ6NEEGmB2GizQzLcHT",
  "key4": "34SEMo8aiYRb1bTkRZN1pTfSpFZpiVZ9Jr9mRxHNUrcgF7AJXTg5RLWwdScvxcRTPeJLALW3271jzq1n4FzQYhAD",
  "key5": "5BC4qUkVAmiuazNjT6cKwxavLai9EfgNNipNpjAosv3SR6kyGtoxQzntgwkgx5TJbbe6Cu8GHHwMMCpHqXVjtRgn",
  "key6": "5GDzbk8SvunpYz4HMS2SLfZBoigKGSYV5WbZLVVsuMvePQsxUpSwm5ryEWZRZKA8DqqMr2kkdTwkAKhQZ48k42V3",
  "key7": "3cYwdwHExu5UAXRzp3w81bZgJL1yc2ChX6y5LCjp1XCC1ZJS37TWNpwoqBEFV5tYv3QP6W4uxj5eovugcMZzJY3J",
  "key8": "4eeAoz1AauGP2r2vQi5tPMqTGoc3PWPbEMZqywP4hwyqEESsg2hY6y2Qf7Zhh5vGqhZXj9KCQWVQxQge5QhnQcpo",
  "key9": "67ft3wEHVrBhy6tuVD2sWwALLJYw7zToLiMv18uEkRRbUAyrzXFdDMCr7BeWyAyCEVfc14AKcUzYcgxEUArjHfCP",
  "key10": "8UNipvrSir11fLvpzzCeBtNc6TSxyiMkkF9mQY4KcNGtnAYBHdM6fF9Vk8k2T7NVjZaToQsRm8sefpBcJ9JaubZ",
  "key11": "2Wj8Ve75N5UCAiM8MhiRszxawPtz9Z5mUCq8LKL8ZeP15cnRwMEDF2QWNzzbAXZNWnoGpZy4FTC2DrjrdJZCdCS2",
  "key12": "4RQVGpy6ZH77yxQ12V1sB3JrwQC8X2FKfeWQ1hw1UEVZ4hFhBzpFzucwR6Vh9F4XUGohjqNBzpfJC9UWHyYBGCd1",
  "key13": "4pQrBySbn8WhTe8m1VAS3iwno5guc2JKCWxGit1gaYNrabLMtcWHFutRsVJAcY36w7YuhunTu1nJWtEdNeFiJjLt",
  "key14": "5EXBqe6esMd1gMBPQUeDs3tvEZR2QiXK3m3mrsGGupetAyENKduQLztG1jwGMxxCF9DcGa8czYSbBQ3STpoaJYZf",
  "key15": "2pbmdofRcAyDiXqDTqb6tNLGwxosK4FwjonKSVU1cibWzpXJ2axkGeZP1K7QGGMbnw3xb61iVkTu8uh9CUijjiPq",
  "key16": "2G3qB4UfGJLTngSMtN9VKYCc2Caeaod8KK1xwdfaMgbMJTLd2aGQgQaTjpiRTzARd2PCk3TAmeJqe4ocHugd3L2x",
  "key17": "XY95fmePFwR8wg4yHGB9cU2icDNodVEge5fnVcgwEjrMR6tPnRzgFXhn8KrDCVsdsv4uKYw9pfjN6vfBmmMQd2s",
  "key18": "4c65rFNMhyMdkjpTyttGjT8WVof7daNwsvGcYqNzhnF9cCsLPqNTqbKWNV3cAXomdx4H1WyeyDnv7qNGut9jnLkg",
  "key19": "4dHQ2miEiz4sAyWSsU56dLJNPDYrHTG7gebuLTWGzDH5TCNhtXo5SD7AqXfCCYzgcgynBS4hHsu3ttwBPjkhV9Pp",
  "key20": "3x3D15RRRzjRbGCsx9W4W5qgbkqMNMHBcG3D3nx9iGmTZwBa3rnHZrYfHGcNboNxq1HfTj33K2jceJBm1r4kPrah",
  "key21": "PtAFUtiHRjcnB2H5Vd6rHCoqA5wCeSBBvmmfbikJmxyfiZf9CVDyYXgs2DYVgwXAoTRRtaCiD9p7bymqP7uifxP",
  "key22": "3fQU2R5ALk77cTh5UkasGzMGGzSeXA2Loei4jngKg28g64jbMnUwSfxNpSrf7dQPmx3zjhKVGaLKBJVPPXY88jG",
  "key23": "5YdyNo2D8keXmX1BdV8q3YYf3XnCcutACTq9GBZ7VQ3ReS7fQpxXtT5u8uenwHbLpvhba6pojYCUMWxvfubG8Zm4",
  "key24": "2uFyQrivqTRsYRQinYKgsCLLgYGW3wyXoZzGqrojkDiFthjRcoGDNzM8PhqT4Qa8CmQTGijymnhL2G9QgMELeXZj"
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
