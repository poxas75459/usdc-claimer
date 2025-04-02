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
    "5Q7B7Wu2h5GqDmLMQgPkcfQs6KL2GmgC7o8VdPvqLCJhNkvK2TvyxwLPCYmpzmHNgnHhrNFn4osUVXaJxEaJzn2y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XPQYgksuZoMjED9j5fZbV7BpbHFAXyxm4Q1bshMV8aCGzpmomGZSzHPHZeqp7zgH4t9DnY2opTQzPPaZz9pCJJz",
  "key1": "3NAtBiymJPnctd1PSb5djxTvSnJdKJpsFtDnbJQhyjXgdfpFu8qmU2QjxWPfJz2XxkwtzG5284BT12CqwdHk1iaW",
  "key2": "3xYATrGKMRboVYGYtSVHrHWDQNBukK2FsHy8ZdqBaNcUhtYXieqRFGcUpvVZbqs8iVAaFWJxfXtVXoXb6f82B8mw",
  "key3": "p7A6FhNwHD6pvTTCRiP5kw3N4eiVLYeVtv67SVsq2EGaUBoDxcfMjosX5PyHEBTt9E3vJv3ykBD7BV4rf7BKv66",
  "key4": "4zXXRvd8bxDyhZNXzBJzGojZAyfahs2EvUpUY7nDaeegaa4DG3t6XnQNgmHc7fKbcdkujAP9BuHMWMJUGnLNjSSE",
  "key5": "3APYjuRFkDXTZBpkdKnsUKkhXHKUFNoxhMwziWCiZV7EYabnABy897H1Dm8fxH4gm5TKNMrgbwu2EizYtTzrN6KH",
  "key6": "43mNNwjAj9mMD2bk3x1DKFJ6KECQVP8q1EjPptgbZGWg4nCroqTpuLsM7m7sQMu8yvJA4DpaTztD1hDrAZg5MLEH",
  "key7": "3UsYA3kRNwpHzhaaqHRjEbKvQETb8UkweyxduNV8r1uaqNmrAaXqnVkXnx84Xp4yVEhBg3T1gcE84whKBE2sS6D1",
  "key8": "4JVYmbBLEK3EDFQTsQ3o1uQx1VugLrY3zW99yxNEkDpEjQG9tymfDGjXbpeou9fFf4GekmzRLpQsa31xGecFSL6w",
  "key9": "3upD67GTKiG6rfA2wZeku3wZDVepttY2w2BgG5G2pCxYwfx64rFW1MG77shFRxusjPYkx2FvNRNWYv232cddfNbT",
  "key10": "2xTX6Ptgj2Y5dEwuQtQ2AEhvLnRvHxJCykP5XfXcGjAichmgR7aM69zicT2Tk7LREKvm9V3mmwnzpV7vB8qpnzFn",
  "key11": "EFm4uBeEtsSwuYmBchoHSRySuD7zWwYa11o4rgcTWCfu22okrHUFYAsdJxAzyTmdvYpXfCdGgDj5bAVswanGoZs",
  "key12": "wMLUZD1gMP65wEVVqSWSWvbiBTAFAWArjpvZFKtTsoFeDMFUrZ1DPKQ43AkQi3ZAWjsgZd1asAeEZP3ZeJ17XHS",
  "key13": "4HyxaaH185WXDG6uQmdrSNRJxxvP9JfXE9WqBUBsJVLSexEVpfG5Fj7M1xdXDPLQCLEoZh5aG8FoTKo8vhY9YTEr",
  "key14": "3eV6gWbZ5pkdz4MGuav3EohmHYkfk95PscghNWhDhWwSpqugLsJuTybyz65JHUnRtStuoDSx1w68AerUY34Jo43a",
  "key15": "Wa2rHP6Pm9sJaeCLRwEeHJZKPXGnV5kbxY8mZxRsWwXWQk4Cr3MAmejs316dGaznzpbdiXafrTztMSmBLn7fVbM",
  "key16": "34aZoBD6yVuMwNmfvDqZZ7hpxEkNEi3AUw2WPdPLc4vg2YivF7wxaU3rbvh99wCtHiYYqz8pEKaRWuBe6X1y14z9",
  "key17": "3duxVmQN4h6SVi9k1S2Ga7JGMiK3aZGB35Ny2a3859QNcDV2iUJJijdYacLAjF3XbeJTu2RVvg2rQJFjjbh8KPVd",
  "key18": "5xoWWHPRun4tok8isdjFXi7kNNhapdwNBFA2UNKzpButGQfwCbDnDL4uNFXibC4CPs8LJ9Axjmruo9UmWFowP1mK",
  "key19": "2UE3MGr3ywP2Tu15pwT7oYD6zNm7khCXwE8iGzDWCEDw11tBMDaABZnDuPYsRuLe5DkTiKSBgxi8hJEaLogcky5E",
  "key20": "48sYo7K1AYBKFZv3eM9sH3m7WtD4fd3hpTeuiVgTBLLXW6pHZDmMGR8XQCJw9aKUVE6pLR2hV2S66nd6CnwkdqBZ",
  "key21": "62HmZ8nmmP9eGJBRz4T3mpnHVDMNmXt5xQtZSjG6DYH5wC12NB46PxCL1ovzmP5yENskrHnLPSW3fRs6ebvdeWuA",
  "key22": "2CfcZXqYhqPNpssyJ2dBCvR5cfnTYbECmeNhZXT86pvSFcJiE5tAtejNnTYS4sKJBrkRwZfPADrsp4cDB5GuvaK1",
  "key23": "2qGsTXxv2oY6oxtHFrRYLW2Q199QvH5Ta34YV9KnA97E83tz9Qc5KfFLhJVAJty78B7hzb3o9uv8vRZC1xgTixiS",
  "key24": "yiWAWEEQmfQZeAGm2NmSnXGdMEDhHeyadcAW4rT5JqJDuN3MYiv39GEAh3iQZvAzs8RnTnPwJUckxfQMJz2ySCF",
  "key25": "232YVp4L88jAmVHK5HmcrAarhRt8fnAeUDMPgpConP8dVyjp2sfmUtv2pwyYURnpwGGjLN4esyzCBbTQu6XdsYki",
  "key26": "UabsLTA5YRSa3MfT4Zph8okCZhWhRg3oL7iGyAaQmdf2ozQ1SzGmniN1qQhHErtNLnYhiEUkwpXvEyJwTescbjs"
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
