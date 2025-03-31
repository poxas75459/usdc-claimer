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
    "35WKCwNhM7zGxWkxduskEExNa9UxUFsYKfNTzLjPwQRdDzWa6sSBxRY8AuwXjR71DQjjqCAny5Pfh4PpDZFiXXhQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22cp9N17sWYvA8z3WVrCH53zJrhBUL2mhN2BKj8kG25kWpNdkfZxrkPkeNDBkCG2ZgcWm7NiHNP3VCao8sxCpN9b",
  "key1": "3UuEHC9zz1vFQwSoF1kiLaWZribsFXYrNqSkfR88xWGifcGBeykyvjpfTLdv9qsXA1TZ2mgbEfE3KQXNdUZ8zP8i",
  "key2": "65ebMeF4b5dAC4aMNLibF4BihdZAMqdbyzA6yzEwDRfV6xRfSsz9PomySfWvzX9WPmqudH1xePwZKrxmYs9TcLxa",
  "key3": "5BE8uvzcvvinwaTWX5AydfL1gGRxM3sgGPrZjMVur4eq4y9NoSWnqdi3w1kXWn2pTXs87MbYeiSJiRSGMqdpdnwi",
  "key4": "3eCA6pZiyqzu8Ka9T7zU3gYZiDj2HS7y4vcm9n1SEu5RZseyREjgrEKgQdZByshtDb4j6rNDnq8qmLV3MA9D7deH",
  "key5": "3GdrwdZ4t5FN3CAACnXGC2oGa3TeNv3zuQZUkDMwSnH3aCq77hznWLegAqt3RsnSDujRpbpBWAmAFPJUy685gEC4",
  "key6": "52kzcy14hFPvryetyYAymF16B92pfEyzgeskAtKyM5kwej1cerZCSLKdp11Hb81sjzDdWuNnCsgpZs7ADCBZWWZN",
  "key7": "nJ2T4XxHM8RJS5KGbTsHX6xzFkUPKSWZLa5pJYqkZt6Bopn4R8dPqAJ9ca2LZX2fKMdkijRPTNTpAQPvZQusQhZ",
  "key8": "5hgi9aN7J5zC3d25sQqoV8jD3JvGW9VieKHW5KJSkWcY5SjKVWUJVyWqNuSABm8H4HYyPXECG7wM84KqdY5zyuaG",
  "key9": "5UDCWcDsSfiDFK2hsTthsdYGsEMuQamMxTyHjUKe7Rg5CGzQS8HAavrneJz9AX1aB3CvmHMALe7zzc2X1xzojkXY",
  "key10": "4bWa5AUwhHTXJzHpP1tWfWVJSw3VXWGahSSCmXDTpBo9ygBkUpEDfUQ5vYmEqPgJGRRooGWSkASxC19CTm3Lciiv",
  "key11": "3LCHN7bd7jet5q4vBy8ju28WhCLuWhghXxdgT88AcP6R15P4ZyutbuPcR6MfAAqwDx9K2y9zPTpxJ3e925SrgGJN",
  "key12": "jgmmjgUAasWaRoBBW5MASqpbmKJA9BrtD1JcVoNPfpzKJU77ZcUe2HToJuVVvv8eZU8QkePAvtHRPUv3Tox7YJK",
  "key13": "46oqegWGue5hGFYvRiNAR1PSWEAD6K7QqMycuvTqmwPXCf5jTA1P4ENF3NGaiB8SrCSqu2uKrsnb9J3hLUpvS8tQ",
  "key14": "2DEEPyW9WsHHLdWrrEGsmPWCri3CXLmELxqfhrkz8bKfaT5ytKQABBPkr7jcV4sGRDERYCmauKzkFTLMbVpffAnU",
  "key15": "2KP9n84b8DN1AoxaN8oRSRCc2F2kLKPjPwbKvviMZ8ot6HUbjHn6TdyoTuVTcw4TPSPeR568f7nhH22HkeQZHH8x",
  "key16": "3XjnB3fFgWY8iFnz5XqBp1rjbL4g5NuFTibf1B96ni25ciyNd5TR3HeyDBpPYbqCVYkujJ5NxAfk36f3RPgPnGZT",
  "key17": "DvuPNtJ92bxjwsrgawoVFgo9v2S3VAvcATD9ntYEuZGQz9QTft7YmXVak3xt6xFM1WCeYGzug8TtWv39pnyRJhs",
  "key18": "3YjgPU4x7QL9WdEYGW5A6UkBP8X4TbcJqWttGSvha9wpQcKFZ759Ngj3SuzuKtAQbh6ZnFHXBFA2KoJ2ynTKnHV8",
  "key19": "5ANzHRgEH5xwjrhZDmtetRpqsQEuyQSArW4nbS29abthRVDbkrd5jqsHS5pNhVhGMrE6R7DpBKAxma3h6r88JQGQ",
  "key20": "3ut9wgTuzqyWKtmYqbZ4yWUbLu6QejN1VYFarXxfAWY6e9HWXSDNHukav2cB1DDdrhDQa7VDazCRHxKYcbx8HcVd",
  "key21": "2HhThLM22bbA9YLACLYxBJLEUfmkrj2xsZ4receaKzhUjgK7cj5BS4sR37FW5r6L67JeviCA1Jj68tBrEeJZdLAc",
  "key22": "5Nrc2zTtqTafN3z2u8aZ7AhZVUauQgjF5qCe3jArR5sdLyiMtHcyQ15HjewcZ7XGNVqcQ3fTXY2FRv7hqS6uf9tu",
  "key23": "YUs35RPdg5qMdbwKQDgg7m4TAhNGhNzAS6h1bDZtR2dnMVHrqZho1FJUi2wx8ixayq8KHehyR7TbamuWZpfCWiC",
  "key24": "hYQCn9vEh4fM34F8M243ZDpJsN4VnpGGj3JFVqMut8nMryBgFAmJqpUohTE3tsfj3mDfhjeJS1YGCA2U7LsfUrU",
  "key25": "2hw5YZoEETo1JD8JuwzFXpLFqZGc6BeUAFKGuz9jEBFPSVADF872dzRHeqrk2QQkkuThd1g4jSNzHeQULEPGEirq",
  "key26": "4SHTZuxB3bjgwa4ka8TU64sijS6k1eoEyGjNUkRDLAUqkfqWXquuBuWnhp2NacLX7MKBsKAe4c3ChuBDWsCbu5Ri",
  "key27": "2oVs8urNXdxtbr1s9DZyF1y7MVJqjpH9EFYdpXzaHVta5JYyvnH45rPyhoQukWuAyp8b9KvY5U1zYeKhwdhBVZNP",
  "key28": "34j2X1n6CrGcTWDiU7HCqmRrr2zdfc15KRcqyx8sqsU4rqULbVBZJcMFHC1y6QKUbdaaHKcxXsun6Yme9Sn2WhAb",
  "key29": "3n1g1vynhKhttmpgXbVXWEjLWPFie7RopQxUFhy6HKtK35YqNE4FvC2L17PV1GGiVK3AefKcsBTq9bXUkRanotBp"
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
