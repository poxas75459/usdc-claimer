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
    "4CWkbiHDwEZjq1RUzjJJyizCyRNNDP22vPAKkkfkokFWuWQJ1a8rDKKfpUYh8ad4TF6V9VZ4swbhAq3uG6q1iZjA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qkS1Z4QgxkY2J9mFX59QrPJCnpCv5wkqmG9A3RNW8h3P79kdUUrouGjXSkf6e1C5tRFXJoXNC2odvRJnCuRxLRQ",
  "key1": "2frm7GToU4696i4t517Zkcm5Druan5aA9HprXh6gcF9WhSwYiStu6E7KjPcFWQ8bnoaBcfrfMWvZeNzJkien81VS",
  "key2": "3UdgKR5dzoZBhSwC9eRxMHyyyM7Wutqk9LCkUw7M1t1kEsYCoGmMe6P1eQhLzqmqaXqmP9rPn2Qj5SsyWpjV5KM4",
  "key3": "43BpUFunU8F6KmKqa8M5jXc3Nkr13ku6PJteV7zpKZPnTVHmjh2zNHpx3BrZzbX4CrXbukshWjZTugbMyFMRWusr",
  "key4": "4bP562p8HQRaSvJGbuDpwr1QAGqiJoDc9JhB5SkGcJThCa7XxdM6Us3UKhyiW45Z867fRqCWrd2qSdjXUvbNX7jx",
  "key5": "4vwiusroKSWCakFuLjvfepsJgh5mYrk2offKNoMuDQxPbcBdrYYvtEEypCTzx7bPMksHZqjqhuT59CR3sg1o1iWM",
  "key6": "5May9xGfbEmYiqkpa96kqEgEToiSVoufkJGKm34L7aHLUiCuGwue8sMUs6TKBER3brEetX7FspBzSG2M61Q6eCpf",
  "key7": "WY1WEXZY6mDeQkY21VG6AgYBC1BDuWEKGV6TpYU8hRBqBAMUP95PeTZj5JfkrskvfoJiJSWAfavm9iuEaaGC2YA",
  "key8": "5GvrHtp9iVpXu6RCsgsseWt7QQHJ8D928KoKCQRfbUqPSRtGLTW9xwW4LnogMWiYZ8oAFNjhvACPKi5Y83zfTjhh",
  "key9": "4rS8fWASwaCaNuChy54GVFdFfAyZoopjU7Tg1cvQRQxpwkQ7L6WGtzMYHFqXrbkB7zmnoFELE9j8TXcb5Wt7N3xE",
  "key10": "BLk1WiCbKjUS8hWhkuvRtBE3Zhig3RYt6Tpu8X8bNcinRbNZBNDTnn4wMfMYz2qwEJRoXe2o92c7NKBKwwexjiQ",
  "key11": "xPNdW4EyfkqFivUL5Tc5m1EeWmqXMECHVvtWiwt6KfnfdVLTfrp9v8eiXJsMK3SRqD4n3VSzRkH3isL4pzupgNT",
  "key12": "2F1uYQWeRVvuk4bJ5nquDkLTMFgXa6txWhYZW8MB7yHcoUjReut6PdZD43EZxhUWTmAuKPMjZmAAPLBp6TzX7ACX",
  "key13": "FX1We3hAwG7nTcTVqMpjnExwCWuT1XPeksANnCb3c95rzycyHjL8zXLnHbHsVJvAovQvbX1McUdTMFs7HPsjQS4",
  "key14": "tKZBb1MSpFCdixkVEbQ4GXGnKNYWUNm8SC85BnAbfbMbs5VC9PwxwpSGmWe6q76mReJqgcBf7c3dgZwtB1R7Zq8",
  "key15": "5p5J9ZQk2n48hCBCawpugdu5peCHXM86r9YDgb8YdTu9cZ1cm4eefmmef1pB4r2qm7nae1rUWs1WjDWBZTtmdnsE",
  "key16": "4cN4of2Y9b31CaKYgkGFnrCAAWYFpy3c9Pin6PQNVQRnzxbLcQwTLb6NeFTKKXTsta8xmPZqgL1J3zbpP7CrD3gx",
  "key17": "2HaCUQmy4duEd2mkttEsDoLZVGG2aoC5vn2Y6pSZ8qpgkntxWZK9yTyrUGTTYLzqxDd2E8zsTdHRmVmCsxfgjb9Q",
  "key18": "2ReXmEyTErBAcg1ja7Sto5pT5Rs8NoBgTSi3K4Kvz6kvzKiKUYL1ixJH2vV3nn2ReQ3XEhC2HggvpDjo6LRdgjyH",
  "key19": "529cC8Jj5oE9KJ5DYrxkxYZuiDgWRrvFNd7bdpj4Lo4Dpx5LP4oQkPhjbcU5qrwSj1oprHJotLq9LKufQhgFakTp",
  "key20": "4UcXU85x3VpqeBQgnFUBsMjw5jae1Qe9eEdUEkRr6gvpuXQ4pGKHpgSmYu5BhcFr8Kvey2tXSyW4hsr2kfzajDHh",
  "key21": "245Jz56paG6DbcJuGEFBCsemwiwmZBqyDrsCFC6Dh92LgjDML13GU7KDWNFcFWLbApgJzXE4pXzk1jweaMrp18n4",
  "key22": "5LoBzzbWZLiKng7BMDNzoAGioxTRk4F1weRYsRAdTyxDPxUS6qVJe2KmiPrv2LFYKzvCZo1xUdafUdcQ4cmdvYpU",
  "key23": "3rdExRJNcNmZLnHt4ECvP7j75axa7FWb4JVhbwCCFvD6XceBR7o1HhLKQSTbmhFE4EPM6WndipFQwpdm4WhvkMwR",
  "key24": "2UiQ2C6H67KgacU4MDXWS1ZnfJrCr6En9wfojSpAuVn7PoME2vaq8CiBaoHWZBMY5gaXbWsbgWBokeR1Mu1Nmkoa",
  "key25": "3tHmFrECz57tsukf1g5zHzQ1yGa8gp6xoUYSdZKpRvoYR9by2CoG8BX2VR82N4V8okY6ZKPe9jEWiXntnz2kRWus",
  "key26": "4uRRoHLbJt5jDrJxGxZs62mTR8BdHvLbX9crLTEF2xHN8KwCcFTTm9uJ5y76C6hfhYb14SCZeSofr2aufE3BQTfn",
  "key27": "2Fcrr5BSodnqSipEaY9zmgkKT1E9CSQMdJhUYPVkzY2PhkkdjK4TT89RioLPrgiDLY4P5xpWdZMz7GCdq74Udeaq",
  "key28": "4cJw7fXKPdGwgXSHue21ckQGDD6a5t8EG5cQfjeRVVNQ8MFQs4PbAgXA4bQAzxtVQwfp9cgz3vzGqPTzXz5wpUAb",
  "key29": "4zLdrZc62QKinpschaLmz9tG74NU1YV84p668weGmahTkSw29WyUmQBkpM5Z4ADFoFurr8NbVpPupvicgQaZakPg",
  "key30": "nggcc59FA5K61wdhwjeQVEqkqZAvKE1NFKjhCQzVfUiAvnaA2Qigd1HKMKBk43BMnRNuS9gnyxqSWcjdcqg8aL7",
  "key31": "3rqR4MiojK3RR6MvjxcLyYZT9hSzEoEvViBmCML8VPxrfRpws8wycYe2dYFmVvQMnDZyJNCCgxDQmpiLtJnXLVfi",
  "key32": "5hzR6hHd65dg5Uz9aJmukvo7ccgnQh2C8WYctKS17LKX9SCcb9Qbkt6pq6zEW3LknXa2UgEk32DttQS4d57yDaMe",
  "key33": "2uaWJ4BA7tULefKbfLuBfC8aJGo5bxnx7n2tcXYvXXfMyLdAU7PRCK1Mkpgc8CgWM4fD3eMEgWSeEmz94dpvfBbJ",
  "key34": "4jCc2GJz7TuoA3dWWhoZVVUMUP7w6rAPMGPR3WNwM56e72BkfGZTdeuVpLaL3g6ZzKsdPxTMAwpHjQ9ug9SmcUwq",
  "key35": "3c5CT62P51o5MpocmbkAhSDvibVu1YSMgBUgzJqEd7vHr2SxFmWhkzMQdRf7CnnCSdWUxB2GcKVq9eWCUcm4yvkV",
  "key36": "3sSTdkkSvxooExTYc42JK3SP92YKGar3KkMV8ZTzJmD6tr8bRwgm1Y2yd8ABfd2YXLcF7TgdcsHwPvyXd3iP9mXZ",
  "key37": "2ep8K1LVWg75ubZk4pWbVM1KryqruwfMdTRvGy47iZN1z1cybydanKwWYMCTvMdQQ5t9ksH1z9hwD5SLPAWqk1T6"
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
