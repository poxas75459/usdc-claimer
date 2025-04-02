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
    "5cFRC66rdenSQ4j4u4Sr3KbjcXucLTxZHrqRKYgoKRh8pocTJWTfxXt2piD83A12W5EcRs3eXmmgFDVKkzT6XhNj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Wq6AkCsZrMv7jJN8FYBLtVBXaAJP7q2LvvRUwKAAW7suJuzDVTAoCnn2F81S5tmG7bfNzjGEw46MZzCKm6WuLvK",
  "key1": "4nKtK29CdfyXBovH5iFM6JHtrg1x7RgShaZ7WQeVvR3HvFohH1L9oL84T96JReBcWUBnvPNXevhvhMzWYpMXjPDM",
  "key2": "33sqXwJg6aBWn2j9gsPorRVGTHaKqwRxpCp4HXevUhj6BuHE8WUWXVrWstr8nPqPDPaGznwCxLm8DDfXmRZ4BrcR",
  "key3": "5NuwQyoMaBuAagBfMf3Y8M5WSvqg3b7YLkrPk81Q6unJ6HUneMXHLQ3YLMaBfcEVESqLfHJXWfzVxnpcg7j6XY46",
  "key4": "4ZqUs6ZPHgtoPCyUdc2ftqmwqFpntRBCCEUkafXTw8exzimMoirpu6umTpALBeEmgUyAa2gTmFGrW44ZkfFy3aPe",
  "key5": "3eHM4QeEzE5RHMfRxdhbRdrRQPbJAH3jgM6xeY97ZS9pArdpNdaGkoUno5CBR5TK4bQ9P83hWYubDi9xXKWufsGF",
  "key6": "1MCY2rttX1ovUeYPeKPAV2qHNzu91zXDyBJ6xdAnZQRuSw1wGNZ5EfBUuF1xm6WPLj8DgtAtHT46qVeBGWCq8m9",
  "key7": "4KyLnggo2it68Mk9TLSgTet7FcJKfTWYofFNcAmGn42Hv23RpbWxEkzuaFEpLff3uVGPzybSWcaviW6hV136KtF2",
  "key8": "FomUvP7JwBxpuUnTSzad1L2wFyfj1Hpa5cfVZevpbBm4iFMFeqL99PKc64323b3t4uTBuxU6F9a2nhNQnMzyiLr",
  "key9": "4nG98K4aep1nh7oNJZ9QU24TWPgV4HRhhREMoZ3WbXcTFj83xxeezAmkeiyfyqm3xZCnwodYKsD4cDGn7SYhQa64",
  "key10": "8FqVeT3BCgyqmXHgNzanHhF2acZYoaKHcQFAnCwuG8zhMWqoJNj3XRP8hjTWRtxGhEQJz29ThvofUAMzuj7BQwN",
  "key11": "3crbvsCwWZgk6HJxrh9Qu19j9ycd1Qi7JZoD1oD1F5zpka5wS7HbvHF6PBTFSubAXyHddSaW7zneUwPwQDP16Szb",
  "key12": "5bacYQCUE2RjSyq86yXPWPRENPBovBK64aqBER3KSDE2DgqU4bQ1E91NWqo3gzNcBbmvwsu9hjLyRpdwT2KSVAVN",
  "key13": "PQncH9AQ75NkKJUWVKgDzfbJqUi3UWhu7f2D7jaX9WnR4ps66HdnfPme8cF1L3DCGUNvEFHAB725rb6CBmGY1oK",
  "key14": "5HWSjHGu13jXz1e5aZ47Ywac3SS8XvA668A6wPMz9FE4YfKmKb13riNaD6vvDsCV61JoiC2mohZ3f3Rsa4bp9Ev3",
  "key15": "wV9ain3nvn9JFCt3fp9uahYHFd4dx9im6fXetZ1p8u5bAhBWNPo6yR2EAEZt6hA4BgU8MdMdKgfUT7iCjZPp8GU",
  "key16": "3e8HA8caKZNjEzUjT7c6Zvo7M9k6Bm4EFTbJKXRs657kyZdDWP2xRHqWonqvdLxtkk3AhzKuS3yYNFodd8SX9Gp",
  "key17": "2m9LNwzsVpz1NiApAK3chZkvfvTwQM3JWtXFBSfHHKhEcJvxrmyKpdhmEbrkiqcG2gZFJb2GeVZrbs4Ey9pB5dwV",
  "key18": "3TPJa26C1x9jpixYTNfoXnD4Bxq4ZSFTXrtWGG2k7psWbvkkPy54cZ4shS3AGjrppp2ZjYrksPBtuMt771RmbkrL",
  "key19": "3jBV8rJ7C7ke4KeJbTW5pPFFT33hz49KN4zD4WpBoKAeJdDV4xVJiJ2FXejvXfzxhY8VVqzybJEx6tYNWmhKtFBD",
  "key20": "5Jwucz8VsGgKZtuaxvkEg4vfxJJBMyrW6jTNduEpiBAQ2ysLvTF36u1BRy41VJRvh513zReNMoYL14nrpdN2vBHG",
  "key21": "4UnEX1N4j1u1BBmWdEe27h29HDaxouQutm64cCFDX1L1Rq4x8RZdDvy91mkfCeSRoQdAScmwvQUbKYfpHCekwGRJ",
  "key22": "4VWyMzBojPK4zGPYZFMRnZ1JsmLADK99KvGTibVceoX8oA94ZG5XyxvWAgTLc3aAA5WcUFZtEQiH3ZYgNgXcvmjf",
  "key23": "622HeR61bcSws4TDksqYvWRHXVAjKvRys8buHxWRAd4uhKTKAMHzus6PkfwRLPhGo4M41ScCdnUpppa68vjgwRoK",
  "key24": "1CXc7wfcCvDuHBYovBU4pwVwXXhfUNKS92pmmQv3p9YJpucBNQQJENNAiPrfBS4WvarruP2mKPskNBqbFz6FrMz",
  "key25": "5cqxoFaENbr2BKMftE3u2iomR1ZQFUBTAJhytcfhHjDLcrAtag6Awaf8EbHfgzTAynCg6fqCZCCKf2Svf9gaAMCw"
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
