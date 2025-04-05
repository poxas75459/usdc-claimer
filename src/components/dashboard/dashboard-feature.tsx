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
    "yJYJA1WmREWpNURV4ZJhBzwsDBwVG3DbW4nnGhEf13ZK25vZbY4i5QnMQ3dZTA1rCwBPqWeChKNgLneizLkWsC1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qJc9yaExn7suVLb4tz9FMwnNwvfxoiAdg5G8xAsxsz64SemGiFqJR6MBdNcZb4tv2JZCuEchTz5kvBCohHg4Wid",
  "key1": "3GYNp5gRGpQ6335YqyVR7VdfmDT6jTakZzvdNmoWYTzvE6RfPXnFrh7J5nwQFSdnpixvsQoFtf5zKe3zRUbVH9Qf",
  "key2": "66ahrWzN7Wafpa3r8tmtMJrY3gzcCQuDc5xWfuNCj8pNeb6FxLd9Kjwmha8QiyZpgvqXwNLdvcmSRfsdYwzzFQ7t",
  "key3": "2EfW3aKakPcWbW6bbgm3FiFSEnCRtbvcrwzpaePEohNjBha8rCWhzEyq8Rwt2fdQZDt2amzCCmiJMPp1iuRZ1dNd",
  "key4": "3vzEAK77oLZB67wmEmo8fYjQNJKF8LbRTfBG7HSCVnHc9z2YsCGwZ1VnW96ffCCFNhCsPhxsHxjsyTnGo5QacvSZ",
  "key5": "4nizSQzWsp3q2s9gLQDSSR1dsNBSqsMXmS7XXGDg8Sga9Gz77JCKnsPfxUQuVEokbmyRkmYNJRuQgAR92AYceBiH",
  "key6": "4mDobLJT8UJzdJjb6g6BdTnMYW9BK4aJQDhJHLCZ2DAgJeWnsnYDYZ3aWreFQ9SQ4rVWvYr8zmGzKyjmSaWLpBAa",
  "key7": "A12NYe7syQnfHi8aCkFxKGzxGSZ2m1wTmP24FU7MPaC1cRyofeeNQSmXPBwsGh44aZLhqWY6XdKftoXAn1Dpku1",
  "key8": "2y1L5xtNwncw3xAzrpCagEXhAS53ocZXqAXVdHe4NW7p6qaQJA6WkG6CFTiAtD4cHzpwXaWUHgtHvd5njmujfCCi",
  "key9": "53TmCXnem4az8Vd2APf55gWAVxHuLivJbeE85Eg3oUtenfbqcvgopyTCvyxAnrwD2uFx6Giv85oibLJ8CfNymCZb",
  "key10": "42Vr4529HjVEsG1ZXHKL4NW9C3UzowrQRVDx4CSXPwFPzCFGXrnPq6TQnuwXsEv49jp1TqZzQn4s8yz5dZRrVors",
  "key11": "3yAvuhfW3G9Ccbun7mqmrPyY84HwLSW8kZq1YxhYHfmEsJxh22oFXDzrBu5YbhetmHPxbsCrKEV497cWuWWaoyLK",
  "key12": "4yiGhFmXATauEYJ8KDYjnZNJVMtS8BKAFmwupnkS7k4oe5KtBxwxwFRsj3rWTDQQ83BSq4cBahYqkXMuJ2AAHxTR",
  "key13": "5JgMNCA8eXAVT6CvaZ54ur24xbmbj4MivtfJstQ64aWqjSVXGWnxki9wj5qbLcwBeggkARdQqwQVpuwYg6tb6HEB",
  "key14": "5Mo2P128t858Vbk1N5beFD4eNUb36LbFMDb8hBeLidGx1nHih8Xj9f91aVRKHDYJ3iTgvfeDuCAxsybCM3YZbhba",
  "key15": "4jJKnjKXoZ6UWuQq8cFXhZYQx8wtptddu6ShWYpJEpPFyC73KWQ8GwNGsYK7KzUYgFEpbcPJMFqJm8yi4FCdH7Az",
  "key16": "ymFFpUSie3z4MgDXHmGMV6oAioDGdT6BxT7uptY5FNvP7Dy8hTW2deAK8zDspGGcGRiqKdJ7miqUar3UXjjZnyt",
  "key17": "2tS6hyQTSoa3Wdpeoc3XGEzAy3oon1sKF3kZ72Cstx8nKm3NF7J9c82ZaoCJqN64RBvG922vpy5fEjQ5takjiT9L",
  "key18": "i235RSTNMtLFJwcXM2tLMmWBBLCQ1eGDMkn5Romipzwih9uTd71Gc9tPHkF4KNEk4J8McwB8oDapMy8vX2ftrdp",
  "key19": "m8cQxsV6XEfeqXexyaCqSsiPQGxjEgUf1kTwBUhV4YgJ8q2kYwDUhXPkk1rxTZhtSFsPPpaM5knZkgPqmDk7tKV",
  "key20": "Rdhb14dXoYnpXmjijaG1AbsxEfhw77gX6X6UnnNK8SrMyKoGx8ZfnicrHxP3aRd1qEJyZKwTKUJMEu7MDzH8BaG",
  "key21": "38N3XAquaJkkZ6akuM2Sj3s9Jkv8AEsfmDbg5JBjtq7V5wQpJy8YzNVxxm2YaQ6cLiEpx4jmNu8nMk3Fg53BiFXC",
  "key22": "55PA6PGDJoKei6nZmJiQZLhN6WqrkDsZbUgKVn4Jc4fkpqLHMfL8ceH2wm8iWaXDjzTxjZtKy2iG6Cffhtz8BrhS",
  "key23": "3zZBz6TRJUMYJmpnhAJDA7nN6UrqHBHGMq3jJ5A3hpy4PGZdef2AnrfeTVMUhQax2Ro5w14yjrqoJx8HexE98r2a",
  "key24": "4yAtSc2goavd11nBmojXSTov6D7SRSuMGWdxqiANmXSk8HGpX3u7R17br3hCMWKSU4em7DEqya6H3NnBC7tYKDS",
  "key25": "3YPPbeE2edEBY4un9agr35iBH4o56UKCHmUG4CG2zuvnFAd7F2LDwgPRLLAkG2hsPcpGsT3HfENRMv5XMAcTvVQQ",
  "key26": "55z2xZ8hco7mAvMkYiQDBL7V8JxZ6ynFbFLKgzq7SAkD5omUwjYhgcbtDmAGWVNYNfkTEp6xzgEynNQmLcLUEZFo",
  "key27": "MeyS6hBC4gb3sYPFbDXXQSyHD9GomuTa19jykywd6GJW5YM4EQowbQZnkSYpyfFLYcrYC1Ht6WvWzVWp7ro3XVN",
  "key28": "2wVLqBz94dru2dGAiqS81ttvZLkLh9hFdy6hvxZmStnQwtqaEeHEuhRb91z9oZVvS7J71hmzZa2AV3FK1eketSPH",
  "key29": "6i6xR4JLkXBV1RmMFH6ZxWc7BLinMRDn5WidvfW48mjJ75AsPsBpZXNTRtTsp1DG5WtgJ9LePDuwpGWqpLpmCKe"
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
