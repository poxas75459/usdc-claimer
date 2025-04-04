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
    "5R7rPJh7ihFAzx7Y6DMgvFfDJoLnWZg7r2FpzoVctifCt1vzCVFYp14o537nY6VQSSip9RH2aXzthQHBbBjwArN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UhhGvJfzn4wfUstBNm35fwUfB2JKNizsM36nCxPcmRJS9StQy2o1JD8LdRTRT11PWozTkEgssPxtZaz7vfdQyGb",
  "key1": "2LTZicAMSG6HaP8wSSYnJXVbhXS32XJpsB284gquoyau9rSvKcvA9K38VN3PXaxjxGLYzS7rupJB9VPcT8LU1U1g",
  "key2": "45ey3kRQQqUwLzijnwvLoQm55pwZ96pe25ZyvcpzA7ewDEQdGhMfLmyG2ghG6HoBa928qfxFjXZnaJJP7opraqLa",
  "key3": "5BQB5KCr3ey21cTThotRWXCyUy3QJGP54vAEht6DfRmmLwCjvXPEN9SEUtcA8FpUUBU3fP5HaMmXnF4Dd6oAYNkf",
  "key4": "3ySUNumsfAPozBgbajfDqG8pUhHAHbkKsftf3oNKa9s5ebJ7P4TgbS2PMqZT8fMiXNqprnLp7dpTJJUQDkXUuRFU",
  "key5": "3MXpebMe1LZBpCqpiTg4juhnRwVyw1ZuE43XATgjJyb6G7SDbjkbtpm28PUjDNaHi7KXhA8U9FfJwvY8F7UqttDX",
  "key6": "5fybnPzkm4v4WKqzPzmm38g4g7RXvXELVSY1o1xWQuysGF22TcKQScrPdeCdavubfh6X3HyPxcAkb1q6qqSimhwi",
  "key7": "4RWKGJDg4hgbP6yv9ZtNtKyR58hNrT34opuMqffK8YURjDnveaSBAZ9JzkyoziYoGg8ns6DwutQSL5xchUnf6py8",
  "key8": "1qWTTt6MQxpHEkBSM5QmTd4fHQi6PbnEQ96P3bDyQ5ztTmX9bscZYgzxPcva25bg8NgA5TTEuXj36cna4Yku6MD",
  "key9": "y4issFATCTsonT9JHwRT9Kf6rXGhwLEjTjdX2DTnnPsnAXuzTYY98wcwYuHREJ7KcjqRGXVk8yCyH9xau7EKKz4",
  "key10": "4JfC4PrQb77pNccw9giCUjWxTrp7DHTFfcoa7vbqyEm9nURs9oGwReA3tp4NTvqKv3TEvAfX4vPAiZkbTF6TmPmc",
  "key11": "qBgzC2n5PXcQsg5icitgSHKPNYydjGVNtvXTEShByyALoXWrvU5wjVFYUYQZXAa4us1KjMTs3xGyqFxmYUmVcnn",
  "key12": "5Xq8Y2f2pf4doyNwvXeQC7JJ4mYJeSDM4sMwd7n3WSfRX3dy8vAi96Sgt5T3SdkjUU3PUckX3hBw5kh4YUkunE5F",
  "key13": "4moUyTG4djPY3Y2pMARJ1C9ZuQt3ExyqiaHHyCyXeV9XFrRECMjibiNh64kDZKNdpAPKRFfra48GXvmkEJoPp1iK",
  "key14": "4MQ2FaN6DUiqApQuqDuLNVu38tt2aiQjQTDTvzao9BLKyPCATedRgnW9TMhJAKLY4VQtzXEBC21VqeEDYMx2vPEB",
  "key15": "bVG75fiq3xkXm7qXnZzAFDmigf6XqKqbEL4DZkrhyubsx6z2QeeqWSQQ9vknGWc54e5MZejiMejnrjhNJ1dMs2G",
  "key16": "66FiChHdGA6jGjWHpDcudavkdrteAKLbMf6XBpTuQjp6w5fmtDQBx86cGZmRztzapX7PvGjLKruPPeYcoKLgcbF9",
  "key17": "4ZYaTMAVP3GjqiPMRF8bdYUok3QtRiFKY6exCWDEofVdvuaW5hVH5qC1nr1uaXudadd6vgwkJcGyL7cqjn3LwHME",
  "key18": "K5kRzotA5LVUerCCVtVC9qGR5NnxLA5EfmTPJHx9DXaArjx8JegnS4qp1tPNWT1xCRY3GYpTVs4dhPDzkMga3ip",
  "key19": "2sXF8v6bavf5XfVeNi8DQnAsZ6qHGATvnMBxs5v6jwPeLzh9sseca7z9caMBQ3o8PSeUzGXV7e3RD9NqK1hfGvQ8",
  "key20": "4dnktRChwkvXK7JFnwHKFTxqdRgEdqicqJiJCzEBi4JWoWJaiHT7q7STmnx6hKn9o4J9rn9Q9Dr84XrRzeVnhNeU",
  "key21": "5dw7kSzLUG2rhyvmxHmCgRByozUPUiSxqSdTmmJmWiGDhTiZ3tgbNf45DCWue1JVLbQUX6QmdwapDmSfDJX3HEMD",
  "key22": "45BT1pbSAaZrQxEcTABvqRrk6Skr3eXMVUKSorx7iZkMU4WDyPdunb8h7ybwUQACwuwqW4ggSbdzYbDfSWwebb4R",
  "key23": "3H3k8kbNbSgDJCLmY4saVGTwzDjkRcAJKmnzuC23UvVT55JsXWc63kMSegUjwjAQ22G2S9DNeMiBV9mQ14ayXvAv",
  "key24": "2J5nuuMTfzZLTht441LYLdVthtUr8ahK8LJDt72aoLrJ1AwGu54LnfJF3yzC5HGqgwkNKKf7gwg4Pz46z2cHvWZU",
  "key25": "21TE9eTdV6EPTqRgfPY52aXZWsCQXTUvSyQ6kKW462GZNJnwGmXGHcy2hrRvPbRhjkdgo23rwsc11LVt1efo4yqf"
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
