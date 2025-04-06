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
    "4CPGb3NEaGajTa92GmYgX3D7yHknACkgDWEuPQbASU5NWRng9ymsjGgwqFwZsq8UozACUPGGDcDkZ5bqqBLdLBuL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VCFAkPfb13GLiTipkyoiRRinHGzCT1Q1MJqLCHPZUuiEiVGL5NYnMLHHT3yPkKAio85muLL44e6fo28k35V5KCQ",
  "key1": "2LuuZNmirc88sQARw1UuEBnSETZESv8YF4uDvCx3BgzBbD3Ekz4Um5VuxNruma57sDZY9AfEf3ShL3de6YSTvDBb",
  "key2": "U1shDzWEtbzSMfzJpBwCVT7fcjXRQyXTaExp22nH9yZ2mqs3Hihhz1Khtkw8J3tdfX9CxWEALfoRuPPxty6THYw",
  "key3": "5SnCRVdWyBJNrb7Y9ySgWJoVwKvDPQCsKGnQGvAuJhSxGXvz5fWy5LcEWC8J94gayUL8hFo2D7J97BhC7YeB5QQz",
  "key4": "NVSCr4wFsXvCiiY7f6ebXJfSkBnht6RBGTicKJXjgPYkhcm18iAUi89WSXb2vGZqWqynpHxCNNd1DnyEjWDKvHY",
  "key5": "61xupUYaGkNQxaKqzSxaAXy2iFC6p68ndGG47ckmCoDMaJFb6F9UJz2ah62bE5Wa9BowALVU9ooGU35HyU4bueZN",
  "key6": "121qsCdy6nHTp2hgoGp7HYrHTLjHkb82ttdC5JQrXCyHiHKAhzcidN24yUQXFZYeBc7SJkChbxry3XZqVbyCfCfh",
  "key7": "2uLPKEJHxd4qamRnuJUZACRM88RWcxQLFQWx2mPJBVuzMv8i6bEtV2M5wKKMTsUKXdzXxgmKQsSeaZtUUPN7nJTX",
  "key8": "41FZJRqbrfwsFfKX3XohPJC4XdPCC1SHVCP4m81WK2i2f51TPxKNijqoA8N7yhSkfyJiinarLod6QA6k3HnShxPg",
  "key9": "quvfecCqnVEkat47156cGRZSx3wWmKZDkXpNSuwW6ooGszKv2T3EXk9365BdxjuoZ4Vsvyt44QEgx2EaHWp5sq6",
  "key10": "Y99DUnHnqhXcnFindDdDgUJDWvaBU2JQqhX638KB5NuEx8FgnwDXZs4QYmnmFGQntR4uk4rShpCJ7zo7W6jG3rM",
  "key11": "3NUfcHhAugxZnxymWUhjpo92EkcJCxzu6pwCT9PWqLfmTcGcXbRSubKKAr3AXrd8ucxGo12t3bvJm1scUtcBoZCD",
  "key12": "48cQXL27BVbE2YLzRnB6evuPXYGnR8wh8oFw5HGq5WQ7FHGARGMiiwJpS1thyoqHoeTtcFNFjpwB5SbULKtfdFgd",
  "key13": "4hUZHc7kenkDW376G8k3Gwp9C4JMjGSdHqtN5hgbDYjNQjj4idw6bXKCN8niwZLyw6wvSbFo4MBwBcBE31nnJif4",
  "key14": "2jBQCmDzndxgjQfaN3CMw858jEwBG2fzAZq8xZGi1bxD8KJfYkEwSY9BULe1rDiM8o93eBCCtKTn9di7RrijqkrH",
  "key15": "2ShYodJms9GeBHHHJw3cnUxZunCXaF52R1yYNjwn4a6RWovuE6eThsxmxTsFJM2c2sPUXPGWkdQqLf6GmJqpvcam",
  "key16": "5BQQxq86AYYniN46FEbYC7YPvWEmhaxpF7zfyvnQKHaESZLy1z2NVmRqAn6NiG6ppDhB7ffH5KSGXHUqVoc2wZJ7",
  "key17": "5PRc68LyBG6svTmTdyqkRv2wJLK6c5XM4F3nis6B4UAa2CCXJKRo4xkyzBSsu2Wk1Rhmd2e3eMHWmNxqpuT1D5YS",
  "key18": "42jnAK1fe1Bigo2VWBp2bWhJWKzj48ppUKWfG1gVdjs5fPVHDXWWDVYfR4VKcXgj2KnFzt8nWWJk7jUENvVatzaB",
  "key19": "4CqE4NZN2oxtytXHNBYRPsM1J3KwTYPCvVRRXFdzAWDVG85SUvToyQK5Y9v9SocCf1HzmrAKv1J7oawwiPBcRRWu",
  "key20": "2nEN4dunh8mxifrN4t7CUopGTQUs7ekt9uLPrKmHwB2V2WcFEGrv8tdLU2d8vw9u5zVUdn5dxUQTAJ6trRmRooJ3",
  "key21": "Bvj4wEjju2AZji1qZHaUQNvi19SVceQdyTzc2YyYNbnrukQDr3pJ4EyjpMPjWD4HcmzzhmqLAtZpqLseUMJnyPS",
  "key22": "5RwmMzmYvBu2fbYUtf2V22a2TRrwrBRcUJEh6LUYoDUez2Hu43c7E3wEK5bjHCahDZNJwSSoh4vQqTH3Hj9XqUs7",
  "key23": "2JHGWa8XiaDUFHHoN9XXoaEuviMtaFnyfi8e8HAjGvKjJjycd81JuH3ZtFVP2mhQi7tVbE39Poz1xqALnNpsBiiV",
  "key24": "2X7Rt7YgtnhR22jjGwRTwWmm7gBu77aLdamWXS6jcY5td6LohcS8YVkppcKrn5NWy4Hq8Lr4zJ7dwjYtJi7Z4w6D",
  "key25": "4SAB9jq5NfxwrMYusbzyqeWfSgwu3sDHoGbpgjpGSPMdYShVbiGzUcRVmrq5t7y1pkVErTXkqoJkUaaEj92exHgi",
  "key26": "3uwjSkE7ZnrbX8RVGqfkAjJfq1Jr7PujmkpwBrkYuX74SB2V3MMi2qACUPopjZrU6dgSEFXoDmfKm2ovpoMJ892t",
  "key27": "5muztg7acYLBgdZbC27UozKrkR6Gfy7tt6QR9fPeTssmS6WUjwotFDB9TvEoHEHqaV3UZ7oD8UzoSxpVAEcX3GHS",
  "key28": "35pcTeK4grtPqCoPkmfLXsPeCPp64Nv56SXJUy46xXsmmxcs7kMmW1ETqce2n6UFCyPSaNdDWNEZkAPrKGXgPgwi",
  "key29": "Gih4MCzFWgYgAXpdKr6QHkvx3TpnuwXVZU7QabjQRcR6WTLPW75ZJsSt2wTu9q3hvYs54ZsnbKo4R3S3dt1BGUg"
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
