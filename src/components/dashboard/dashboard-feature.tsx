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
    "5JKWzhZez27eU7gt8gcSUEvKFPKkZgvv7sRbd3aSAafvCRSWSUpvsignYbhvG5XYArqXZxUCVmmgkSAw77PzgjhZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SHHWwPtTp8vXfvYhALsyR3AD6s93ZSdC4dfEGoEXEtZnwRf6cQDEsDz1scrto1w7mkg9RhPDAwRoj884gYazmpn",
  "key1": "5qhp8g8L1DM1jvdkG9fYmVUyF48oVFdRbdZygoqW3pC8pcv3NmR4huCZrVE3JdHatB16x3ACYCE6KjQVoVjCTfB8",
  "key2": "2rzN1AS3tHxzepXBzSYf72zVJ1xEsFJgSNS4dPNw2duz2fs6xP5s1n84z6own7ypF5NHo2gPf4s92haekmwxfwUB",
  "key3": "57czSo6xRSNfF7sL6GD7W1Df3jTRthucdyLFt3eQKLbHrxNsWesyXPqMH5tywfQndVpFFVpPrKsf6HTq8ReNga78",
  "key4": "5BBrgqKZ1ZqkLcsv9NYGaJ4CPw62gkujLoVRfs2FRkN9VBfSALkhqBLouGRkDZaPXajEc7Q8BAskuGzo2dwvGuBj",
  "key5": "XUrSQosdxZD1ux8Mbv2DuQi7DHbuPWoszh8kW5Fd8wCVknLxJx7L8mPhMAc4Rqf1ArfzZPm7RCG4ovwJz6ThZqk",
  "key6": "5NR6E75HNMUeCzNg4ZoVvFsCkbQ2ABfm3QQfptK4KamAToFqLUBWMw9mquYTCyxcXpn9fxq8H8JysvqgnBrMqHrL",
  "key7": "LBDz4MPCwuK2hKxkb6KL6vUErdM86wRfhH8AtC47iRbHhDYFGubQ8dqErjbSjKx47jPFhEPW7AzPSvi1kECmaSZ",
  "key8": "2GemGLfTXQ26xy7ANTNxDfUAYWNcaVyDiLCf7ME4se1hnJn3Ay1WVw8CDyyF7t11govsLyN5QNCvyQiUUL6L5Wfk",
  "key9": "5AiRYxzdQBnh8zvPVgM85XgLZfqs8NxWpHD5mwxUKsJDja6oaZ7RNaaw2RPrgR4cekpMYuoPDE1pL63kLYwTUtDG",
  "key10": "rz4d3dX3or82HwSTNh7K1DaNX8jnQycEdc2PuVA8AdcSSq9URsMT3RD39NWofr936TbzbwmYViMVpA5j8CRvhHx",
  "key11": "mTwiipgsKcQPy1CBtPBtSyCjLrfGMxrf7QbW4azRjb39JMwopkHiMaPgAwBjY22ocdDfQcBz35AdJ7Rpht7TU6M",
  "key12": "5AM64UqpsRD33DPVXtYSLgHfkGztqcbMv3eVAb2NP6DWjdyhjYUjf5kL6BLhsACaNnW6Fg64xTR6BQjUNeQe8xmV",
  "key13": "3o9aNK2oQpKpT8qKCaysiLfxUSHwLs3Fijs7kHRdw28Gdhv4waHzazUsmRr9zWuEFUQsAhEAuYT8zT78BcGYxa6B",
  "key14": "3wUXqUDLM78Zg2oSCAMUvvA2uDztmnWEoupVJCzdpQkAAugktQuX35wReoAeFChoA5Sf4pTQNeNGa7dW6ZufaAeZ",
  "key15": "41WQryq7vSFQeXffE4GvQLhpvPp34Yn2yXvZ2N1iP6BwGNhmisqWUnF4XyVGq95EaR9FyahrEhqaRtXaNquCeL1",
  "key16": "5bDK3CcvxG4AwvTc6ZCeXz9wBzrXFcM4dhf77JQdmUZvRYPve83kWcyMB6ph4foREF19KqUVtv7ZeJKQbgDj3k3t",
  "key17": "5NQoZKVonA39ELLe1SaTe5xz9RcE9WUnVFRzWe5q4T2J92cvtHpiaZt7jPvJDBUAR5Z4QrGHTU2qJS5RvhDu5Ku3",
  "key18": "2CRRsZrRLAWQGrsFSnsTBkPUcq1WsWQMgyyfYLpZwxNhBYCrZEiHnPshM7u7vLG27kEZ9kYbE6cENZ6UEiNokAev",
  "key19": "65ugYxtGqTs9v1Nj9V4LkAcpULgic3kdX84WzfV1HTiFTxcAm2GkhASb5wBnYEcBF9oQMkzqeMMzUX1UbmdoJpLZ",
  "key20": "5tFzMKss1FXB9GoHmyXKUvaRSzrYAzm4YZnDqhXbcmfN8cueAxHaYVmHhgXvbVb1Y4T7MexXGFV7DjeJ3Lf1GfFh",
  "key21": "5vKy2vat6E2dGfBnrZJaf2uaa9N5TBwpcS865g8isYKuqj6oYz3xUbES2ye6WBjK4Rrw8HZRGUAqtoCJub6uh8Rx",
  "key22": "u1pVXqu8K4mZ8dBF8anqLmzyr4o8QAzu2KphWiaShvjRZwMFDZQzRtgL5k5wqq7whRQZHFa6i3xknoAr1bnjyXW",
  "key23": "4FUwawjJCJkG7PisxUgqPJZnqJ3u2Dmabv4BqZ5mrkqnRrhJjnnESzwtsgRaUkvE7f7X4UMzWYDAokXBpef6QAj4",
  "key24": "2DmEqpMGdKhhE7WQxfBiFnVLFMMukGiBHZzaTJbk9eidkLZGbaKuLYW9NZFy9jDB291d5AxdUCeh8oCRF6HP8pgZ",
  "key25": "24yLC2K8gdGeStQZdz1vxN8YGkfekkMmk9pRzMJzVkrV9Uug7CfJDoPSTTCtjSTu4DYTiHpDhdo6ETPz7dRsVooG",
  "key26": "3PMEct1R6GyLCMPxh6ZDPPwRgmcFoTjkKSCciCYdWrCRqGx3r5j1Yuegi1oXWQ2Un3x6AkyZKF8iksQmeS25yUQJ",
  "key27": "iZUXWNWihQHSLmM38EUAbKGbUJGhh8pZQQ6tc7hvHidspoFxsQ1MAA1X9R7WotrXTTVRRDZjMJpPAJzEyNVkyZj",
  "key28": "24VDLWXgAmhWe5nzY797osVyicXC1Q7zoo2FWpALgu6UjEPDcyTXAViQ4Zj6G25veU5jXKgHTFA9UanrE7LSwGww",
  "key29": "5wMPCCHKa1MKWfoz54a8vULw4Nz7HpvjLc7neEwuAMMgXUBmHBByguStHnHy1ucMecncZXn8zg18UC28WCLqKVDW"
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
