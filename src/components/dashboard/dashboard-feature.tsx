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
    "77UJxypcHgnxisLgqtyoww8UT3gfqbR4uFy4wp9d6WFCAy9YhJRChZfoukeNmvu3294w2H5JC8vGLAgMfhspjQB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TFr9Hgnok2o65yTcHQEJHAyV7kBvZz2JtDpvzv6ZpRfBEqUvAAjCN9ymq5FPsX7wUzmHzb3oChMjbTQJRiz3PPX",
  "key1": "4wAHbBVZatbVMd6CDRW4kpYTU5Vm2EGRFeKukywYaMVbQzF5Kt3GszEmXeV39eyXBqKP8KxELpCXJ5PJfpiMwW4t",
  "key2": "2S2M3XBwS1XgoQZDeuBvPShms8GjBt5zpq6fst39vXzZmeAs6Zhcw4zycanBeBzajkcgHMpiAL2LYrp7cXeQawat",
  "key3": "2GW5bmEqPJLjmJChn4zi1ZV1HijiE4zXXfZDKH4bH4jA8LoVhyHmrGcBhuYYMt9eruo2E24yCgUtzuyaJcEBUKKa",
  "key4": "3ny4Yr7WUxLnVaaSXxCwKZWH5pKibLN2TtXB55TiCesCEQFhR6gYdwNSVjqZgWUk6WyQUj43dBj9W5ufmbvdfVpt",
  "key5": "3kGwvFPkRSo7FULYQsQoYF7TBxYhtmnPij3sTphKrnWsWsz9HAS2tZJ3qhPNwPcuNnb8xjk3rHXY3D9JV9NMTFkK",
  "key6": "48wnAeQzBGwzgisLePssEuPHVb89yHo7zeygCPK9hKJqCd23B1aH3N7RbbcfsZBeV4qix6c73UP5ca9Abqim2wwk",
  "key7": "2BXbtaXxfXTPxSqJQZQwMbotPs73gHdbLVHZL8mGvn4n23kpVYqHWJhX1AfmvTmwvfvQzd6zKJbf8sDrq4iQKBWN",
  "key8": "4fax3WJgo6tEauqmMSkA8wN19B4PwzieSAsrS2TgB4y6gdBhPw5PVaj1YVddgLubfdgpmP5jUBf8kunnbXnVGkFL",
  "key9": "3t1UdzRw4nf2wtiD3Tj1sdrhcDjSYvDUdS8VsoHfxWFF1xt3vTNKawWPxwzFp9A5wz4AHnxasZfJZu3ShBZ3ymWM",
  "key10": "3hQwV7hca1mJ3EuQ2qmZYxmpKAUvKJryQA6imb7N2jux5aVEaqXr37obKqCVPzBQboyeqmSLF4Pxav2AdUZDFNpe",
  "key11": "2QsC12CGVDjZw5xHyZHUQmSQ8Wm2ncfuLMDTeGhvb3KC1tpL55XKfjk3777qaVvULuAFNWuVvWamRbXMSpQ6KwbC",
  "key12": "2N99Yqx3K7aw38XYhnwvbLmsq6hSmbMuFmNiAsWQ8LKYLdHyiBWA9j9mk86sNbc7SsywHEKFJ3hFWNsUBw9EpAfM",
  "key13": "4xYPnjtknkxCxsSm3rszmiYUoGdThC7bPpzSeJy6w1pfgpbzospEbMX4WKy5tBdsp5xMj4LPQ8cXjM2kwnd1Emvm",
  "key14": "62K5n96ETFBYiWdmci5ofMxBASpL61BW2wwvuUaaFa8mvXrJtb5HpUypTF8KZcPt4HfjBmAsH7kR9P6uAKTfcTBm",
  "key15": "21aQR8uazx5b3c2a9wE1GYFNiGYPeZWyEf9qMVyma3hKvbdqw3mWQnML3Q8vpvBjfsUjCB18UfkJr3UgWUCar1Lv",
  "key16": "3rBC8gt9kFavUnkN6LyjxoULVPV1MQWyZjbivoB3RQ4Ux1ZdU1jAjtVeiaGaFq9rXTzP1tzBiCioyqxwkChUYeaN",
  "key17": "4dh7kJULr3htD4LhVWeg5jwmtcQJPuiRZ8cKmwYUWfzYLbfFmxHR9313aCygDrdpijqoYtxVpSU3HRJ6SeypANcd",
  "key18": "2ZGVTiz4V5fdMoqKuphZGAr3oSiCeKUwC78RDa4abEXAr1PmCSABWFpSGjTCK4VWkqaeYzoPBaSAxrQ8BwbmozV",
  "key19": "iR6wkbMnq2EQDHiWxn3ouY9VgXc3pdjouXq1xNYLGiUeHSTkm9U4ZeF4GE5e1V3eSrmzJ3Hgr53WC3yEfrTCsFn",
  "key20": "4a1s63HFm3DyMwr6oUCZPg9oHDED6DgvoRBcYbEsJbRKGuUa2NHTLMggj4xwTSc4ANSq8Mh56jBqrhUQKn4WW8Ws",
  "key21": "51253nnA8rFbYjcCsTokk8UAp437R9Dsvqe3VNmYCmSGNtH246oWpmvmHPSr1BABpoE4zQdwsywVAteU35pGCTkw",
  "key22": "3ujdgT4hV4ackUEjTiS9QWvQpZSegBGyEhujHdpqiD3y7EhwqDV6SqdruX1apo7VUNYfcZNTUJ6pRY54eCmmssDa",
  "key23": "4HqMWsTqWoeGTgHUPQfvnphv4Py7yn2eMXyRuMBzYQ1FZuLwBvzFcnVftXonYaAAWnU3GGkcP9eyR2z2D1NeUbzi",
  "key24": "3wMzYXkvqLs5YMSQpWfFVbCGC4wNMJBcxwQWBngGRig5dyUFZazi84HRcEF4Yp2Jb5DatpV9AxajJepWbLo7eMjn",
  "key25": "4BJQbewcBwUyqz46vAY1AMdWvikqXQ6aDRnKMuAViRJ6uawUandYzZQvVALb7N4nCH54UWthaJdTRJC45NaQY6yP"
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
