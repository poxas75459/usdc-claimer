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
    "4sDH4cpda8awc4ciDCSCRV5oipx3EikVp8vnzSMXBppZQd2Po8xdDM6KixdUT33pFYqhff1bsU35dQMMyRK5vowL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52gd2HTYLnY4tcoA3B5TViD7eZ8UJBiPJrWJnvP8WFXprXbio6a3vRTEsnCqQa97qBUyjKE2m7UZp2RQwBLsx2r1",
  "key1": "3vv3Ji5it4eegwr7bAtqRkHo8kW5geWiK8FLeGPia3zeMCECVwsc4RnwrECAqLnPZ6cNcRpv7p3pHXBZVjYe6CAL",
  "key2": "4vLndEFcu8iDVLXX6z4SruUc2csDkkrqMvmvh1f7dZdP1cxTGG43p1NSQTjkZueNsEqcWv6vRHTHEaY8YkYmoHef",
  "key3": "46amtDZ6ApCaBUjxKMsBNo5BjHPnZggdU8DA8h9pPbrmSYkT6bQcGjF7UPhhXUpa2mxaFanikLPyyUptFXKa8tDs",
  "key4": "4ihwsm5CngqpnR6KoDVaVdjx6aXTvZs69RojvF6JHy8Xk4rc3h7MaSzydSC6WULnPL6KVaBhqYCcK3xeXfgkgaFn",
  "key5": "4n3RXRYF9ozuyoiwaWuDRvCuScn712LywMtKgMAjkfynDoYEXetCgrwYx7opvHjv6iV1WeppSMohnw78y2n3QriD",
  "key6": "JfBMbBmH3M9cPWsZMTo26YY7hGz3rGV8Hktus3yxF9411Sym5DRzKBuzdGMUSajmvh1Psgj2mYS7k81Bh3yt15w",
  "key7": "2MWGJuf6zg1FtsKUQ6VPBTGXUn5NgkPrenMKBgc1mRAvQWxwavhRus3Zqt7soo7S2A4FmU546i2eoEiu6DhzuJJL",
  "key8": "DVgMRpfsoKCA9acbKW3PeZsQ98WytHiqPbptC5HHGBDE1sSeBHHEzqrZA5awdm7EXn7a2kEzdfRtNLo2adS7dNC",
  "key9": "qFksLu2b5JZGkwrRPqUam4Q4CohWZsZwZz1MDaWmCo4gy7EK3vPczUGgoBxDHeyRRhr7vhqpoTxjGLV6EuNixv8",
  "key10": "iihfaVvDF1VJbUzmPTi6duSXSWfZjYnYb9meVfWt1guCTumHoD4V738S7WK9UXhWUVE1GAEL7To4x4Ypj5o8WT5",
  "key11": "TM5NkgcQeJTCN57epguN76UqwaVdASfD3tEsaYKTbHcTYhWzvAW5RWVYDuvNELx4cyRQXdpctbPYx8jxzdhUjv8",
  "key12": "2En9Ho4ADHMNq2aHEzkazQ3kCLNzRfMBvaGpK5tmrAqcJ8xJotEkfanvSW8ZkvKegnc1LC9AGBXgevf5nFtwhmpv",
  "key13": "hhZx9SERMEp5mQ8M9PLKBCXL2vtuKUvL7iWSJFfZ9m3YCjBs7LKABH4Q7aySpfXVyoFrc9psn9cdtFwK4GuhmRc",
  "key14": "4NjMPQ5twsWF8EMencUSo3qWhJToareRnbPxsuXGMhqNSD3AepHRxf8jGBdGNqm9Ef3TZwBLJ5XCy9s41xH7iFcb",
  "key15": "2iAVGe2eKMpzqyGmoNrTPUMgMhAB26YVfqztexhFfTXvVbFGYX4cfSHN3mcFg7qXTQJq9gYG12FNtypoZLzACpxT",
  "key16": "4JNgGxHHsNW6oed9FNTKY9s5EaWXs64usfggm5R7WZSFUadZ2zUwYPHHfcXypJVLhEcNcvuH2vk2YhGrpK8vcgV9",
  "key17": "3pUd5NBfCeaZEkhmMcXcPStHsCdk4ZFL9zNoGgMffjVWpzSHzMHVJFwkxZvuRKNKjnoKNt2hwVK6j2ePqwcLuQXx",
  "key18": "3j59TFM5kCwTWgSwQz5PfQg9gNkbpLbUmTwqWUMESGqP8sQfendEtroQNuigARtKzkzraXzY8BVPXAUjsP1ga28Y",
  "key19": "awotgFtyUAuBLbHaie8nGmzUiddioQKQ494d5kWXbHP1jbNLkK4eUfivB4cofwkdDvvRBw2ujYu5uqneuzcP7fV",
  "key20": "2jyZs3XYfCMVvXoATeetSqJWctZUHPyiFwv1QwZ76j67GPmwabAFRu1QdQxs9JBf8XCyGNsXULCFkohjoMiMcony",
  "key21": "3TDuZDxkdngVE8sMqaj4s4shJgdLADnJLoKncaS2ma7XAxra8CYZQESkV6rpg49PBot3AopyVgTdotKbz5tFbyY2",
  "key22": "4zrbgkN35KezNaeXuQ13dGSeWuNoYhRaFdbcixLXiSxwfFz2YmcfMoqNJdBVqnJ7cNmAvEYVPoHePNSLcEYWwGGt",
  "key23": "3n1Xkcy1HEtuByZYAKn86jZQkQBBff2jKqqdmF9o1HDYT65ctioWMqNkPGXaBjD9MTvGZFXwEm9hySzXdEsFaAns",
  "key24": "2QWujBXaGjha6G9o5oaTufaAfgaS62kU9rqCubBu5usPtvCj3JdgiuBZ1z2qQu36hDjfAPUSPXQ1kymnVHcNrQdo"
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
