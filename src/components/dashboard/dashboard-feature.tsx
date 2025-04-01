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
    "dM8ggqGHcyusYE97MQuMW55bTdNTLsCRtbM2oFy7qDCz8CYFaQ1YHKDTpo3ocf75MPj3KQUYeTMUhEoxb8hh3SQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tuACAfu5jW6pCyyC4hfAcEnk1bSNbwHUTxHz83NLYttJuJ2EbxvbADeGc5VReoiHQwL4W5XuBrzVjCGSEiBmi5d",
  "key1": "RQcaEmkw5P317eAAspQwDivyfhM8ietTwkYyFnhtzRLahfpuZ83z18G4JbpX6jVcADyYTwAxtbwtMtctFFrTg22",
  "key2": "2sAge4Rtciom4tcQPDSkS6yaS8GAoWWcFnV2F67ohP4CVBGAiqcNd4UydFmmreLVZQJjpU2E65ytX1FEJ1zHDLQN",
  "key3": "5S15yrWUeGdnJg9yQ8WihU5vmpUjHdtj4hQ2FeNqdgLvk8N1ZqfdiUjWuoFuD6Tsje1CGwjTksY2qVi9MHn8gZRP",
  "key4": "3oRwfpCg1A8U2726fme6poJkdhEndAMrGBz7amsjyqzSdmSjx1ikUvwiHcVH5x2wynyeyAadZrdMSRY7bDw9rCBa",
  "key5": "4mYUikzWQ6nCHPMqXDVnc5xhF5sRNjCdRwPwc4Q1Ctk4oe84mAWwfMUYsKdoGNEJmi7jXUX5ss2Fewod3acU5Z5g",
  "key6": "3TADdUrNWRiFtx5u6tmGsFYZzq2DJcm7tFwkZr11uEr6FriN4szTHa9jfTrnP8uwQQS46eD9QN18wVqnDpbZBip2",
  "key7": "4SsrPjJVYje46smLbcfMrnqShcotdCjA7rZCZ58zLa25LigdQPyisPcEcKFHWRVR8dodMyJMCmTYs8JWuxcV4zVx",
  "key8": "26NH4DpyxSDzGUkEULXpp8vjW53cCa7V8rj725xmzf7vf1oiW5ZJ3tyW9T57AzG37PPb5TSXsbU3mjB9i24NkKjM",
  "key9": "5z2jKNYv8m8zFgpiuPvGBA4bJ5nPNfNBWSqzaB8g4yQ7jMiV2JgjD5LhFWLZ4FppLTxXitRxP7kRjRxocYy4pMEH",
  "key10": "55wiYTcB6EovtDkZ9jTNzthu6LtBPJQvBTHADaBM8aSvwTcGcLMX4NVRCd5e7TukNSFJrbsSkMjptVdysDoe4M1P",
  "key11": "5nYVHnLh5jA5qQqK3fLGn1nZ1Rgp3F5YB5bcs8jkNgLv1kDi3zio59bSrLZac5HkbEbbRFTFdtUxyNhWXYuxSDSd",
  "key12": "3zHkjMoY7Yc7YWGajVuEk72jUjsJ1FcgAAxTb5CGLHD7zaiziLzuJyGgjXE7bj9bBvA1TATJEk4hU9TKKxa5Dn2q",
  "key13": "45DEFDLNMDVDQKLbEeoZFvMPLNfBG8p6SHpFddFgYJF9zsvQsZYFdxWR5yW65c3nnhF6gQJfXp9A415AkB7nNFc8",
  "key14": "AZUPZFmwjp4UwDRQ6yH1hUZcHWfpdkpjGqaLsaTx6X36WzMQKiqGgS1EWtACDX1pmVF547vh9aVJCSF2gLAGsbj",
  "key15": "PzFBxWSPfKhrH6BHWEZf3iZhrQDJToR4cheSisqTPUFCt4qzE2f3adoKoKRdpakaCJ8Rg9GZbBWAdeAN3VczLD7",
  "key16": "4xkDMGWxiLoh3jbcvy8KCUwy2o8nL1WQzyCjDgvGcWoQ6YJHXbRoKHBm7xYanxXg6zbvXnyxp8vKFJ8vRPTeywCh",
  "key17": "2Y3rNPpENDvfPQk2bbNr6axKuHLGgdQ3kAycdMvFoY8Xk26GVAPMRfC9NMXt6LLZwizADkbxTEpwYfNidjRGrfKo",
  "key18": "4BE1fdKfrRvH1Ejqzywue926gf6iN2Sgvgj1eXyfbkALRcuGWDvybgL4q4YGyiGUUowbFLTWk8YqfqHQ3m4tANf3",
  "key19": "2L42YoCu9PjjWLRFD7QnRbnt4PoEtw5NiqNZ2Pma8bJYsUveWp4KPGAEAFZpqqGVpS9UHb3qZaWZPwRyaeMPNYSh",
  "key20": "WU7jUbzXG1xK17dBSHqe3PeqLpjP9Tquk1XWmnpVwPiqXb1i5mz2oDznoUcx2RoGzdDWBx1XVuUGMU1KgP8pXi2",
  "key21": "3YeKgo4tUEqneE3xwSuAsscsmEHkccVw6tVDW1xhniuCZavGatQ52ddWJwxrXoaF4x3L83nGTtqseDXeGnHikR4u",
  "key22": "5a7dhiHNwZLPZq8HBBBQZY9ADrXfmt1SNF3UR4KAtoWZkq27JzvqCSi2TVL4BQX1VpyC7RtYPMjN8FP2WcHvzGZ9",
  "key23": "4iEbKBe3e16ZtNp1FEoXCjBaVETtE7pKYv6ZDFuMMPKv78UfbzviyTEqbYvHddXYnXuAiegc8LwpRbsjxasMMC65",
  "key24": "26ncqmskBT8tZs9xkZas2GpXcZcGBXR88p9zbGcPAVBLZSZb8ecVHFxwGfcHSsWkzXrYcVu7T3v4RaJsC8YHzwCU",
  "key25": "3QLjpDCPp97bZUigwgNHGpqp1xKjLsefRqU9WAgXcCBUxZWxvXauMHzYxEL1bV1ZhLm34aSULL56wzwoHKhKRKnF",
  "key26": "2CwRzUPJZsCigR5PkuRbAtwvdA8JUsCCzFA34hvt3hEzrEMukWqCgm6mKKpPBUUttJxuVvYi5f7mAZ64DXj9Q6WS",
  "key27": "4LawvFqs4E9YmCVp2vN89GZ1rMgiuBz7rgb9PQ37npjFq6GpT1SLsvV1zkustjqXDisnTNT5AAKqYjD5ZQymC7w1",
  "key28": "3PvszSWYHmDuZ325W7hF9eGYfrJexTZaw6Aa1T6ucLZ94rspdd9jHpttjJig8NdXiPPMj2kfX49SGzh3LRGir24v"
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
