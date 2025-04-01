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
    "4k7Nd92G4NVRjfSHSP6qs8d5QwZQU9mVyU6GcEfqAiovEPqtQAGAhuKZUTR1PbijQRQRRUTrpaMPreUt2BUgMXNY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Naeq7xPfif49RhvVC66KF3Y81uTH6zxPQ73neRFYGBSRgZtjDgr28L2zBdiFy9R6KWJzNoCbMA6xUB7dKGB2knj",
  "key1": "3htVKFeVTCYuQ3Q4SpZwZqvzWVS93Ln6Ufqc3KRb1Wp6r2PdX66RNnBwn7aPt84j8DpoKi4xEUC1JXAD8BPgJjWY",
  "key2": "37FRaS8Sv8gJCQ3giPegESqXCMoRd8LnXAzCRcQM4H5bxhesrRDUHkQTfvaZbbkGG2bJtSbbXngkaHAXEdRFWhh2",
  "key3": "3Qn3ZSUgje4Je1iqTwQuMcBiKvQTZnf9jzyTtdZ7SHSNLE1SVYBQGRd5TXnyETnaxmupUgb4NRrTzfFkP9m8H33k",
  "key4": "5NjpfCm8PFNpzzV633vRAjQKAxiZvhtsx7Ti4G8YPCSgSfe47pN9ekmEuBveQS2UXzTZEM8UPGjGfY8C7a4RULBR",
  "key5": "3c6oBiefrEYGArEssRRJD5gxopsAm4ZAoh2aiyLwHsU7jx7FcvGCiJ3Dv4dwzmGhxSrpo6KaeDEQRpphwV2pVpi8",
  "key6": "5HnzENn2ANSsxraLDLzpFCoukdf4yC6Ln98NXQfxP4tuNVwC9gBU2aTfMzWM3wgVpzvhptWVBi3amz2TArn7KUWM",
  "key7": "2SyeRAU4qkcAXT32DVXcZ8NnY2sdTLVAmyN85a3g6hdRjKdpJo2jEGd13AgC3BLVhKv7VyRnJ8TzVWeK4d2DpmK5",
  "key8": "3kM2kgmKyZDY9nyLmffh5nWZGFn8T34ptv16TE61ELLS4hVCRqUT9z9NmLdTT6nwfFMcf96KgdMzELWWBBLkfsJF",
  "key9": "4ud4VHxRj3i1qaaxUAwsYKBwH82YGbjuywyTEPC9RjxXPvToSSzhXxC5dXiy9dtyrw8EpoydYqyUmXf8znnhR5jn",
  "key10": "24Vfz39dHYUwPnb8S2FkYa6YWqADBsH3MuvZiwW2u22zhMbLS7QGf5ZL5Ny5QtbZM4H5cQYEPV3MX3U2jaB9fu62",
  "key11": "5rKfwn1CajaJkfcb8CJ3BPaiG66JXh74Uj65N347HMU1QjYiTSz3irf82SwcFfXi9CsQ1vrCQdwg7y3pNP2BcQh3",
  "key12": "2dYa5yqRTW1Ymxy6SnvjoqgsZA5UiTBKAMD7Qdm48L6eFQ1G5gs5bQCQU1iEnaNMKQ2oxukvsMzRQEyDEDEXQj7T",
  "key13": "33UFGiXWjK8bkNVChzQKzcJRWskoyTKiuUTZuPRjvNXq3vF4SNALv2GQLWdKJDKgDGPVv3nfxxhpQhuqo7LjLnmT",
  "key14": "2aerXKifNXxSVuSAK1yeuFLXo5dxngR67X7sb9WD7XmJQSc8wdRJ8iotdFEUatirNowdv1m6NMEisvuYQQQZYoTk",
  "key15": "4nwiZQy9CjC4fgxyvkERYpSKPtPnX9ywEGPoLLgW8C9K79kc2TTdZAsmxHGWawPpKFQWdWHXwtYhYTT879mYtUat",
  "key16": "ujZBkx8E8xG36FmX7NtXeYa4fJ27JB5geNXgiBQZPLzvhzqEDJnUaQYXKew7q4Ydi8NjzWt9KyrcgZJuT5zmvPS",
  "key17": "KahBWWxg5AmY62sLUiSTsbrM6gYV6r5YaR83wr5GUZKuQmV5hqEiTeRbpxwhfVHHgjozddCGEqW1Qg3CuAHnSdM",
  "key18": "283Gh38voWRXAtor7gd3r3Q8AzDLkfGX2its3kMArfRFX4C7JngFvZr4MoRD9ybQxQHbWA4NTgPrgWcy9Ujqf4wi",
  "key19": "4nakZFxZQK4Ay6yBadnhpnXV6VbyjRyBqAAGUVVRHDsuRGmHAzrSD2SmEBokhCw1nWcd66KDRQwEtKfCxLnh1non",
  "key20": "36fZWqJok17jtBuiwF896kAHXdQC7JESRXLHVWQ1U6zFHmHVNDryHD2yBwShNUetRaN7xXXMzgsyZ4vH4ntk4arx",
  "key21": "U3FSr4wr51SABVaprQpx5hbD6A1CZYhtqKU8cgskqP5H5fv9csHHft9hRmhZz4iuiagQpfh3zwvK5aL8smQdBTu",
  "key22": "MJ276YhWCipbEp34kqAUnDWTe2KrdFXxWmr267Ua6nLp2KakxxviF8rza6v5thQWJ8K6qnnN22nQgRHvA1zN8mH",
  "key23": "2ScVPWuFJSKVxm1CqmyscWeUhQ5GpM9baHKY2nKLhY1uQFuGqXJYmeTXhf6j59vVkjhSv7VGvRDTjZ7QLGtif45F",
  "key24": "3S4xSJdkmfQ7nGAM1Zh4913pdTXfcvhZCyWHDRvg79vULhQiaZo2UJJm8dZCN5LF22esNPAguXsje4YWNHDCSAos",
  "key25": "4ESN2pw1gFw7U8L4n1xwEjsmfuhQobUrm1zvdLP8mtMx4kcQCnqTQXZRnLnjL1AWwnsEooMTushCR272UKLtpgp6",
  "key26": "45L5YW3sgAVKQiMZYDyH8LkBnMzqtbQLkkX4g914djYUG2mdkq1KaKmh3AUj9gUVLThGMACR2TsfT91KbKHtBZsG",
  "key27": "Yi1FhgMx7sucLDiHSVXPQPU6VdJxZ1VpvQEX9o2Ki1NNaUNoT8BiENhaWHk6RsByvas6wJaDfDxGc8aH1ys8cc7",
  "key28": "5Ee8Bso5DMCNBXXS2JHoeuCaW9gciuHBW523aJkK1Cta42CnDfTZiheTBu3jRDBU4AmhWTrqafhr1Zy3TLW7ZcZd",
  "key29": "62XuFdRqWhprzKgJRuQgunFCkgoGXyHCZWFacp1AynwjbsrpXRJ22sY7MFKLbSPvsc4EBRpiWfzv5oP2JWuUdDpt",
  "key30": "535sk9w4T8v9c7ycwKoHaCrRA34PDsJQuYRDXjHFsRN4xi4mGQqJ4ZKW8WaTmZnxzD3CF5AfeQUEnwcMbZEVed8R"
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
