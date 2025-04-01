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
    "EFSfqyweGt1fBhwb7XUXq2AP7f84seNPmGRD1AM9kb9q6MP7xFzShzCxQk9UfUFxGziwASHNeipDyfa3H1VDBoj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fsTjV5EQ3U7wmTUNEFByT6Ew6WFVRPJQutMatbrWcMbdW1nbgcvzdVmGubgxUn2GATHntAkHeYCVbriK7itMA5P",
  "key1": "3sqvwk9a2aoS3tEEGrTonzREg9wqqDFBusu4X965f4Q2rkMWX5R8snub34N7oEF9VdttXFcDfehHu1Uk455N4wWc",
  "key2": "36Hkc2NSudVm3ggGYyB7fsHnjNReoezfJT32EMHMjeRdrBUTdcbKAmSRF5HcpGS9TnLU6tWJ8yQekPzDbzUdhB39",
  "key3": "3PVNGzti5Jpk8C8nJ8PmYBSM9Xg4UQoeDBdcXYPw9gULurfmYpaEC27fpTmb7zTYkb54A5yw6g2D9Jed5d5xDp42",
  "key4": "44fJopxiwxijgoo7FBzsF9MS6uurwQBunGyNky6pmpUVdRj9AWbSSvJcPHde1LsmsVPvZCo5KeTVxPH1gVVccmXp",
  "key5": "5zMNkwmfpiJecxHHFcR1uw4k5wjmurH8meRfDzDzhB6p72j5RKwkv7VtHkMWC3XvYL1vwYo8EJ6x4QXr5HxUcxji",
  "key6": "4yBE5mmzaB5dEdP9L48AfgazPSdhCdKLWWp2ZU9wD3pvDRcazHqUut9xGTfqdQ234QC6GSMA7dn7K1nZoMLK2FEJ",
  "key7": "4nU7DVBAriPqkJkAVuTt34gG5fxqtbkzaUxmSf4hMx4fWpuNNUhfWh51uQ1ZjCvW7ByVMBySVgq4U9qNUNzpE7Ve",
  "key8": "qw81KAY1Sviyf1KV9c5WYYHG5VqbVB5ZfB6SRjzMbF3SMvUaZhomy2u6Wm1Dsi85ZnJn8mwPX7HX5jcWfTiuruc",
  "key9": "48pfiyZ9zu6hMQvZ7MdAtitVj1xeQWq3DpbnQBhWZzBRLV5SkCkQKNjpabmBxi6QkNqDHQygbT1fgR2a5ecJbwqM",
  "key10": "2ErkdTXZqz64dSXt83p317oeKegoxDbK45A4wMQh9FAcHF9wB7QJXoR3zaQbTgk9BAccMXhqXgr5tZShRVwvWCXx",
  "key11": "3Rtr2ZeUdAEkvCTKPyatsAzo5Rci3Dq5W4guh1BJxuH2uDnbbrWE4SeEKHryrc3b6gj6qVnYvAVTZZ6cRJaMv2Ux",
  "key12": "5okCTfCV5UZiXzGLofewzsUeQ9RqMmAuGysU7NKxP962pyMtToS4SEgqD5Sgq5zKEEPUByJ6N2PPGSYmf3QNLCGU",
  "key13": "z5xBQDC1vCChJJKjphW7z3rqT58V5yktuo2fbtrTudPRM9HdJ4Cd7X1ULvkRWih6uaPcRj5eWmoAKA8FEqQc9Kz",
  "key14": "2CB41hM7qzi2gk1aBuNV9xa68oMfRu5TAzkfrRkzPMq9C2qu2Acruzg5f5Nz1xyjeSf1AH66Ya6e769erXTjn6ta",
  "key15": "9qtVG8hgt6rdi88A2rMrivPL3S3bCyHD21i5ayafSPubQg1zKEcWLibPSAzZoxbY7AMUBQS4rbN9ECXCC8B21U1",
  "key16": "5MnxD7TfEMzVViTNxzKAtcurDqTsrGd8mrSR8b7VN2EF2yid2jQpfsPF9EuLqXZsgwaSjPbLHk7rzUgKuXtKiELq",
  "key17": "637oLjJTiACiPy1XUrAVYEvudHGYsYbFzAKEP7RgheHQExASoE2fKTHhwg3tv2n9LgRwouvWwojgPbL7a4aT3RaL",
  "key18": "4mGip8rHc7LkQKvfK5jN3pTDS5tbwFukVj6Zdcc5bsq29BMiHWDL2vhanRovwPVZUpaaQymgKjcJiyHvboCx5mQb",
  "key19": "4dzRZLtDwiuNzxipinBKkpEsQWktDueUVZtcQFmG1wjT5yPoafpRnTKsmsJnCGsmnDVdrvUXYEDi4zaZXsdKx4W3",
  "key20": "WPEBV7QJdipGY8R6FUAqSrK9iHaLVsCmjaTsEz5xkBBcVc4AL3pf8f8uBUdjU6SeC4iH6cfRS4a3dW93am2qnEn",
  "key21": "5nCqsyzpC3bciNW28SRJv4GK8vzcg32nyn8Gvzkv2qpoNDhMaa2K8iH2iQhczNzai9fVGjohXUBLcdN8KfXtMcui",
  "key22": "4q5QRqX63gZJLfxWs8QUqQsnp8mXFxQJRAtsLBmKCmw2QgeC4ZohgiLe6myF89rKchAfdb2ZJXjhN3TGbTHotT17",
  "key23": "5iPgYgLBvkQabqYic9L5AJi6uC4FFSUxkbVhr46usuY9R3KZeEnPVRNpJ5FipdZs3cRwKXBicNpupSNevdj8qh5R",
  "key24": "3ZjeVj9dy8F2GFjvWcubxkV2dBvkQThaDk3ibJrGLuEaGwV61P3UsPWpHuCn6x8y8LPZpjjbUrVEexwc13TessFL",
  "key25": "5smoP6bXd1z2gVZyGxNHjF6Ak6QTzzQZJosftvgm72T3GViWmQFTrZsXhefEJrJpVRFMDg8ePbKXz7dVnqDU7w6P",
  "key26": "3dKadCvrKw32PEdx9t8yCYqU9p2iw9b6gUS2h7eojagFK2TTRBXDZJSVoqiRJm9rWkM38mkxTSE3VpNq9BnKzhFf",
  "key27": "524GwkFGpLQ5AffrJea2sQQSegYfsRzSMcPaBW2oM7cS9Y1QfNrUAu4f1TSwWWEFM2E4ocr7ESwPEUGaMnS8K9Za",
  "key28": "4axueEs5NVp6ic4zPjeB7sL2JjpawWP7ZSBN7o591bHWUTVZium2LsZqDqiGdR2efMg1JqjNVk6yzcHySBJGBvx8",
  "key29": "5WYNm8JAukPJrtsccd7bqZszuWPQBPj4WWjmXyaES6g3BB3ty77AeER2nTW7PGERzscwtkaq52gBBmAYWqKgUeZR",
  "key30": "ERRAzkgFJUX63o2ViGRCr5DDNY4FX38bJpBzqtUL2RNY3AoE7j7GU15zW6SAnGNNk15PFetPw7B55EBiiZeUKKb",
  "key31": "2zTfroTFRJkiEUsjgU84d2sC86Y16m6BjXa4bWrJt8byABhQ1bL9MjknaCRJBjZYDVJdHYE9suVt675QhmWgDeXh",
  "key32": "2NzYfMYMLEgVbFBF7SrGW4nRyqBfNyinM8voRS3hNh7bHMXKJzDYrUx6Q1R9rMnfSQTRnCYrrNXPtQUxkCnSdjt9",
  "key33": "8dxbMKpT6fcv4vSza3yMUYtuTssAe2fXoVL2h1fEbpQnVZtESs3M4B4FH3ur2se3GMNNLvTx3Bw9pjzn59iNsDz",
  "key34": "2jUmms8ajRPQQ4pHy7gAMHr7azQH64jHkDERb3NcERLsAqdzZ9tbPTJHC5U9xuJ4CnvWC1MF926E6uKdZqXaF5Q5",
  "key35": "3MNGggk4aFNBueCnXf8wYNxx5AGWg7V7JSzqu3eojphBkoWvq933rt4Yk4s8m3cWwWo26xYCWofZfUSJPgN6UDEV",
  "key36": "39s3cwATf53kL3rUCL4G6FVRQEdGipBYBwCLS6H2ch1cWsjXVaLfgKfyJUpJXZFneahL64NWtVAxcpjJw5tEAvpf",
  "key37": "2aaiunciKTg5hPU1H2X5ccVjdHwWWKpsxrKdDDRUNVG8mR8hhKK8Zr88yDhHz2GekTmNRfoCBeQjfKcquQCREZzj",
  "key38": "27sizm7ED8PQ9j2JxFosSrNpLFimD1GaHbaN7JmfQaCYS2SDwJYBVWsk7n6BsmApMi6DyGtJ1JCWS2jzoiLd2XZH",
  "key39": "44cVnzybUrYJx27trmPiSABMsVxjjtPowHdUXv7b5EMnFCNv2FDQfS7EddJQibhMGBajpfYoXue3TRfNfZkDxF9y",
  "key40": "2hv6mGnk3eYT8vqdAr9Tx62RXLJTufcy91VUAqoJGTaa3x4QQtVLe9XnUMeTdyySmusXoVA58AzEiDvLb1xWZs3R",
  "key41": "56ZKQ1gwxNgQkjYjip7xzPWKdLTNbaPDjsyYfBTpXw2tBEJwARPT8idvi1q2zf9hqa1QPHS5TUvaECCpYtTFW8nh",
  "key42": "4ErRfLjdan8GDGvVLNnLAA2P9DGwyn11uEkAcLg7hLWyP5X5rFQfrWSGnE99gQdegE9cqEwgYETZRu2J3UW6pMtQ",
  "key43": "3k65n79wTNVhoiwEtj8s83j4WUNcUz4cXsphdiqWpLx7CV5c81uJfFLUdmhp5kxZT8RfA7VKbEoTcyPn4FiReSbj",
  "key44": "2a4iZtfR1HLPEmvjum56x2A1FcJbtj5ncahZ1wSo4bZ457Pm7KsNmEgrtR5VeWkAaH7DxPJMFyXkAcHx9upF1DUD",
  "key45": "5TtyZDTi6AoUdZ4fKbjGJM6rv3BUzcs8q8sUto18GcZA83pLeD83kWpCJsABQuwtsYGhmATj3H1GHQiR1yVRAZP4"
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
