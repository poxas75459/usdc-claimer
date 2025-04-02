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
    "34PRDQvVYMiNzGzTX3U9f5BMj5ekxNJy4dYMUkrJS2xXPcYWsLC4y7pPojeqFRmvjddSUcm6Zvsb2Cuo7fNYHmWd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gtYTD6vk9odDyo5HUUWK4xNsb2Suu6fQsQ5GSienWQCWwZQZfQr8PDgT9MMQzzw1gnTWA3B3hDJamgy8KuTxiPo",
  "key1": "4idWs4duMVaAxRym9QRMLTbaeDupcpYtLdw6p5FA9Pc6e9CESjZ1QqNBcPBxCujFEZ52CWnj4NqyJJWFZTtGBT6k",
  "key2": "4f6Q3Sa7X3NaSX5Dkk1SPdkS6fiapq76nEJMXkoVFwNHaqZ6q4vdrqZWEnNRhZnn2bLCzZhwBaknaC8UqE26FRgc",
  "key3": "5LY3fDzFQ1WKQ6RfiFmmepNFDZBju4p8cDnFvmtkkEwhBdr3YwtAbq7jtmHC3eXMqhRZyMwc4NrFLep4GowBfmdy",
  "key4": "4VYhQcjbniJvrQ58PFDo6iGyV6WjYWsscWEjz9UQtA1KUpfd9gPqdpDnYz9XvAEjPkerf1YJ9Ex8JJ65xbkL18np",
  "key5": "DghrPShZdR5jAfhRvMhPmPm7chbAUN5LfPfmVFRehjDCmrkqBmGdfdehhvwiocPrAuU5zZLCL9EgpbQxSt4NYA2",
  "key6": "2NacgqiwDBBaKcf86m463Nmzq5GMGnpzh3hJA9xKFxN79E3NTf8ePcoXTrqiSPk1rj8YRgcPVZWjRpK1QzdmaTA4",
  "key7": "5QvFcPr5jJ9285RViTbg6vtNrJA3qDjzN1xX9WEzqgCKCrwC2MVKabK5Q3JgJCuMWT3DKwot7aJjti8YLKRuwwkR",
  "key8": "4V4sRPktUPJnpNWySF4YCWGrm8tJCnNV2W7ajYiBL3pxNQ9A4J241TgsTYxkzUmuhZdhMEXoMFmar6onbnT62FMB",
  "key9": "3XLgX1E8KYtyiHXD5yCMdiK8YDXt5oxqFe8BxhyyYsxbLBwggu8exsnnoYzmPkXpvQSs6tLgiSxcbYXi6AqyW3aj",
  "key10": "2quMyuLtJ8eDak9Skjvqge8LM1o6MzSPwnN2LdvdYJbEtfJoWovnsYAfEHr32NyGDjdq7AHYkTBuUMrTmBQT2fZJ",
  "key11": "4s3vjpiSa5DJwZNF7AYMhiMbahJ2s5NjdmTN4WdDrVVeeU8YTGb3aqHe9JayuN1fNFyTAqd2WQrQFgDurKj52Tgw",
  "key12": "3eo9rBL7CRwENNzjSn3zgTwwFVWrArrPm3R6CM2tcoMH25pW61vBF9sL9YAi84R1gSFQGam8pZ1EqwF4qc1AwYNq",
  "key13": "5jLnJ4VPiCNiRxoeGxNVG8LwRqjZa4Ro89NQ9MEybvmP9iA9sHSDiJKuV3VRsnWVyFCjLLhZBNcv9RB9uAKFbdu2",
  "key14": "622f6mM1NQpKeeLYapesNcEKZutwafUmhNghyDxRg2umkK1BYT2znYLvW7mSx6bt8FitkSGYLw7AZCefWXNCYG5B",
  "key15": "3N1NHmj75EMPcuzY5QdeFWZX5FpSVJ9sJpfXxRNKcw4pzNR6nQmKYLHEygcx2pFpF8TSMgUd39jKrA7wxagbyEb7",
  "key16": "1dVWDFtStBvXhWGovmwKDNd77df8GWW8yxWZvhZHF7NAVKHL9tCpMc1rCSr2CpzSW1XoqD4xjmbWuCaAqAu97jW",
  "key17": "51WXRDVmPw3bj4fkgWAYukFszC6ySkQZvkKqrWXFX7JL9Bu8McyRXvQJ7RgnBE6uuT1kh3kBsdv3ha2cMjHRMZv1",
  "key18": "382ZGreiHQuotwRdyarAYDv3fN7MLsUydqzLwA3uzVMvR9R457nYAmHNHqxamhZR4FzYifYeFHGPqKkH4u9cag4u",
  "key19": "2wTrviwxrgKVPmZ7fGTx8YdvAkTbbfpAHaMTDGxy2B5FZDRgkzaXLNSj45bMQiaS6MM8knfv7SGRo6eKtUgaJmZh",
  "key20": "2Y8dNHg8M2AxeNqcs1ATcUHgjQLdeJfoYZrFoY3rh1Fp8fFrCYqB3RJuYDB1MA8rAPKb8FTSgExRRT4H6ovTQisd",
  "key21": "3CK6wNdMrJfr8rhgnhYSucvKG6M9C4JpTB1JSrtzWQ1hBefRKKjSWG5kg266WGfev25dWtGyMySyxJxofoXtLHFD",
  "key22": "3HYvuNwKzSQfdS7MXsU6PNh9VoqLN9uGQQXAqorBZSKTk7TKcugaiDNZDbNahoWGhx2F8wiqrFf72T66DPvAKSVg",
  "key23": "32bBC8bQFrZrGJMxHcfDuUiHbVCpC87XfmWJVGeWXR2UMyyRR8mZj2e2Pjw5HqGPUGYb85rGGkpak6ALinJWWiUk",
  "key24": "5HM3y6qrJJLGsbeMAvbomxwFs8hP27Nz9qYzm2AF9y5GDnKiy2tnS9ZrubCeB1zEKpncPf4vy7kgyB2jTGb6hb42",
  "key25": "2AortNx6qxCe9qKUr8KETeGUYP9otsx99A2DUZZFUUUAa8AANpfoYkxW5KMTuzJiUPy6qtyzLfqb1KtHbiKF65kH",
  "key26": "5KZVRXxA3r6JT9FyjVGnayRujw35KHZjXrFho5wVxwMLEGcerz2YANm4MCSFmf6cytm3gzhv6wpfDt1F6NYpRFYt"
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
