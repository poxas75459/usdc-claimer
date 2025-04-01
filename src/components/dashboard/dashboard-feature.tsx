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
    "2uRsBu1Ex358PZqjDyNvkyULSkMqDiGWFVCpMkcMFiPhFBsssw54P4wH1zvgVPYjz5DztcbGBRrbgLTYiMXdKqGE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CHAuJEjnBYSvJpfLXEHzR4XLYhtR4A1NCuYK91j6s3r68vCSucHQgD6rR9A7NumXCVKnef4W3ph1JF9EThza8Bo",
  "key1": "z5X3FTb3WM84zEodAnF81zWV8LwCE9kuEU3XHpui6YcarCmfcVHfYmpFib2gSeQi3jQ218NachhotuxjHJekNjW",
  "key2": "4XK6RNcGamhmVsjvV12X8Dzz4fDEDQmSyt5QP53Vb7VfiJNqGAEqk6TxMR8Ex8fpqMXWfFaReJG9tA8V13b7n4oc",
  "key3": "3xm6ZZFt8Jdsatt2jtP7R8kSc72ptfLFSJSLm72SvsZd4fSfDXNAwkSJwcx1UADDdZ1ox6dWkimYMcs9dnzFxyaY",
  "key4": "3NifffsP8jrn23yHs4jMv36ZmayTik1ThQXqRcTYD2H1iVncE3FRfj4eRteXsTuP6rDRh1W6stdepKQ4FScpGw77",
  "key5": "2sNFae4Ceb2EHKpwqkNCgJUnfXRCaQ66zefPhXJ7nJcSVqYw7RB49hyNRc8VSp1egDqWZw5xeDKk6TsqERGpNx9f",
  "key6": "4meSphp6XZqsJtTCa6veh5MupCsHvESUYC2iqsCtTfsZPFVkDWFwiuzg3YSsEfRchLXg4aNKhhSACbXcMu8ZAJ7p",
  "key7": "2ZXFgi3bEaK8Fh5A2GzPtSGg159PdVBGjtMaNvuBMtmTkaCiwcdwbRtqsf77MEcSPEW1qewXexXWNwxezjUn26AZ",
  "key8": "45DU7YXK3J7Hbwr5vrwZyUpMA8mn3ycZkkeiVywLWmcqj3HDvVfTY9zy2SEKbbmCAxgncyihHZbFGTyLyQSd6SfR",
  "key9": "2n4VpHbtAQBGJo8zWQcM4HHx2oNtXLuJGoqUXkMkHeF66MPN9YbayHJH8eCwB3Saeso2zDNqJ4XFJCzEthDpovVd",
  "key10": "3NLBxJnRWPUqvXTvZHW2ihExPJHovZzeRYbrUutRd7CxvcCoWqS3Q4yP3gwPNo3RDJa5XiUmf6xTCbvyZe5W9Cea",
  "key11": "EGwtmDb3gUVnt3PieZhkWgZgumBM3s5JnXHsKZakT4KtXysPpAcUBTFKER4roRrrpYhAzJ5GYdxpac2zkdopV8U",
  "key12": "5Jkdvo732Zceb97YS8vY19ToXj6UYfYEByJJmrKCJJ34RjPy9YDFnZHazJYPGYyQVgEXMttMvNcg7t2S1mx8Z566",
  "key13": "j4N2RPseNhKTDFHxSb5P7m7dFy66PJMg3MSgGREgpn5msqcspaEC9b4qYxYDrScWZnuCoNAZJfWXAJdNHJ4op3U",
  "key14": "5v9X1UamRuVowyco4rKCWDbZcdN7L8YZwfR9dDs11Hh9x8ttT1ADdUjRZH1w7hALyX4WFQVy3jaFGy9FAjXr7Qrh",
  "key15": "338v9UuU7zazVv9VjgponYxJPZQdik715BSYB6h4mgM7hynU6aLHU6RXRib8CwRbKase7Tk7WrA2i8HGxVASaLap",
  "key16": "t2r9isXCrm1jBUjcHd7GLtop15VqQhBMnAeJWUfSrkoUVCAs5RFpoJWGjyz8B1Q3CEeKgN5fk9Wzv7gFC7ctkgQ",
  "key17": "5hsS12zDgHwWreKz8RxEvvRCqqaaX4GiMvN7WcrBP2Mf5CHULGNv4Tkq4zKbJyqU1126p4DU8Tsmz2UPLDqWRnSi",
  "key18": "5tUG4ud4SbC5R7e1z5aWH4Rjn89EiJjQ5NidcxovfziW9hVWoBkCcKszqZncwmNrsQRkmKRm7Vt38tYMd93KFcJr",
  "key19": "xn6ccvXb8VzdUG3RzcAVNwCP2rCahvWrkfPzXgRZHHWt689hzbGpgWn5mkSqrn5BqeeEzt8sEkbqU7bgKknRjYF",
  "key20": "5RNVE28TQTwbAhByKg5NLmV1wnjuXeWxmWy42tNPhsXNo8UBr3BNbX7QbT5oFZJVd6eoLRz3wqamePerrahpzUBq",
  "key21": "4SUK2MFtsYMgGx76PLLbugFLD1FCRfVw4Yr7CBYZpC9txnDhqeqe6WkgvpQ9Ump31SA1paDQ5wd9YtdQSaFNzxcb",
  "key22": "2CjY7YtmxmNgPLLxWmjMK8GB73TvDu7xB81Gm1ZgHxvisXwnkw54focptZcMMvsf6Jk2Tvf1tbR21udkk5D9o4xB",
  "key23": "66M7ChFwRRBMi38HmyjdBB7f5XM2GKP4uZcSdv1wSXW617E3xH1vo9efwjnCySRUTUqB9x9FHwBtHut5VPzjsEVL",
  "key24": "4V9c29VVH8jtymsWU2MBGaxMZbeFqoAbNeGCybbafjrTpvcDZqhAzrCPkoyN22NHVFoZMFQkYXzqfBFFjJe1by7M",
  "key25": "4UyiCPSXcdNBsYpnBRGyHL98KrMMpNjyMgV8s9WpzkRKWVJEaaPTbWZVSTiwvMURfZac89rmR4hqCms64mRMydoA",
  "key26": "3aay7oufeHcc8ecGAQjqoy79FkpkDQDTPn6sazrREroEQS4NPE7iBXPyoUfRYhdULe8U7JJuy22o8ys9h43UcTMa",
  "key27": "2t3jLC7uBJHWpcCw9ZLUYy7xfQ5tqJuBRKgbxSfNa1fmqrYE5W1pmeLdU4SCjzrR6Lv5XDrmBRgipp5Em2f2eqzV",
  "key28": "2rVB9bujWNeNgY9pe2NBBVVxjRn3RAhf3FHfZcXXXwJUqNrYMd1c5VU7GX3PizXgKUnh3X5AjZcwvwSdC9Kaqc3p",
  "key29": "3dGVNLJpYaonsCvNbK2fp2RAGxxHh1sw9tcyCFpGy4K3Emcg6dr8ACDfc1RucxGPyXKxAV3xVuHSRkrKW5qxC4R8",
  "key30": "u1zZNqX5cfi7s7sPvpe1SNmqkKuHf4PhubNtT7UK7825T5TD1Wcs7TBT242UaHitcVoGDvEMfz3Y8CjfCVg6CUT",
  "key31": "4jF2Th95hWy6q8RVYb4VAEGFXzw63jv5cun39vjfUWnB8UEASq4Z5Uh5WU4GYP6uwV9gagZ5MwTECLQqm9m4nE7f",
  "key32": "2ZY6A1grSsBGYZYpb1nHc4Lp5TB49VHev18vxHL5n7TjPozs7geevLFmB89ZqXdn9gdyFcvp2DFKbB1ZsPeF5sX7",
  "key33": "4U83anAVeaZWnmAJhBXnq8w1JGKBXWivxu16ZHUi7b3jCzwfsUEvP4BAV83cLWwCMSH1Dz3va6GWumuwqiSKDn4m",
  "key34": "SgfvqCZpH8wgsmCcXp3aSroMKwaRFDYJHtHuibZhFmPJ1xNd2LJBdWxrDhVDGQoThHRHh8agtiyLK59ysMu6ro7",
  "key35": "5dxV5XysFgnQ9MCjQH3FzvhRzaYjVZXxs9UdCJGTCCYoaB4LRXExSEk7qaXEr2VxmR4sp8e9fNc3cPh7k39QjP32",
  "key36": "3WcKHSnqjnH48XKFvSLSzJoZnqGhTexsTPgJr14pcTLgAEmgqqGWnRFrbhrwiJa7X1TpggcF8jxnrQmLG7FtxJMB",
  "key37": "mEKC35HDb6XDaTePWGSMdpgLwuBhtZh5HFgYi7FEL5f238NjWdL2WQPbopfTxVR5ocmkqABfeTY1BM9QkrL4Hic",
  "key38": "31UidpGR7BRqb5s2MoEKJBdPGqr88GM5StyDw6ycCPBWp1uDsnYiH935hqvBKNcU6Fut3QejdDEeNR1g8bnhpLbw",
  "key39": "5NoRmhH67yZ5H6pz9jXjSdquuoDFwZwoB9Mnd75xtzBDup7SSgn2AZkuAm9bS4paJs9jDQLQYKkr1R5qAqNYPG62",
  "key40": "2Y4G7MKUao49Bh19yGnCmzRwsc3BC8MjLa5Xvdk7H7VuRz2c68dYPrG3yjcWXtLd3Bw9U5Lo41UMZsfASmQ9S1eC"
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
