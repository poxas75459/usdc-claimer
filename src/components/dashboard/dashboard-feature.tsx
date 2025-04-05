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
    "5adTE1yMXyzTA51N9ixKjy2Sbv2h3A4SxWbPzzXM4hGCoBKngPo8jLRAFC7wrLMU74H1SfN8S1eMXuGfgEsWqi7Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gXrYUvay2mYNGYvVcZy2f6roVTJMEAuSZuf33AmZJ1hKHT1aYahAhodXwyyJ6gBBFUn5jPuaVxcKHUifG8AYKCX",
  "key1": "5pZmzqPg79qftyJ2vWsdjbR5cJXVffpPNGDGmTneg9kGZPxohiApNSf24LRirE4eGdSQCDn31UbZ3ag3X2P9X6Q",
  "key2": "kaFn43SGEyTzcND4NGW9m9rgFjLwTDSMfNmBdFuB8zQveMVyQpJTMpV42vPm119FxD6CnHHaJteB3jRjkQaxVxT",
  "key3": "NykjQkwGewvpFsue41VMTvzwXyKMHx21CKBPpParGjA3xTDzCB5MxdyXeYCnvuWu3kevTAwDKPRJydwrTECtUSo",
  "key4": "544ERBV36sB48XMhZGbfrARKd976fcb8whFVAUUwng6uCSPs78yC3kizZUpvQQafLN4wigvvX5cjUqdiDn1vur8d",
  "key5": "YuVtZXrWmP9eyZsuchW6wzhkJRfqwVcwoZVaQM7sv6tJwosW92hJN5yH3LD6hWDbr15iVy775D2Fxmw7C5n8a3C",
  "key6": "AEsGC9hBbLpGRomrMMgYmAr7MeJzBbrPd6o2cJjzhgKw3x6TvHbFe87qu1GFS2mQRpkQPKoUwk4jecCRoiYiVds",
  "key7": "5aDJYFaF43nzJs84uvGaPdVYjAYL5TDPFnmE1B3Jeaxhp5NXitiFEDZP51kimTzhwP4mGgq1UU4aJHseYpJgpKPf",
  "key8": "5MosHerLpB4ptsTaXVhJPmaonKtRGnm5zA4SSfaDRHDysTfipfrQtg9BfWRKdTuTHRGzx5HjPN1kh9wasawWnihX",
  "key9": "2hst4VEBRjJFxgboMNdxA5V2KeXxf1VAikenxaddzc99LdGCsJNwA3auKF5N7kAgtETnGGgdJjPFeHWgDUq2SseG",
  "key10": "5Meyu81tU29zTqAcxeFVW42Zs2oFP7nHRrGvzaFoQhsERiAaapAmb8WPjhHFpmQ1RdAQg5qpAKuQieb67sFxtqt6",
  "key11": "2CamC12mVhd3BexEDrKkvGdz8vFo9opEFXHPTCjqzaGguptvA4CazqKLW4Q3kztQjpnJV1rfrcB7De2ZJifwhshG",
  "key12": "3R6T7v378HfaxikTurGLbwD7FHNmTE5KJJq2puWsUxF4DPHeAppgX8LoAPSQ3htLTP4iaUwW8zHAxDLFF2nJrXEd",
  "key13": "4TyXZrS6GfUR5i9ubFA8S6x7kb2GK6uSKoj7XcZ7jTCdn1KmVVQRsnhxLjSt9RU3N196FmGNQ8SLhmb4Z7uEmaQD",
  "key14": "b8YMwazVcNbjFKnSqMNCxVcCsnhph8iSTyZSGxpyMi6dnc57rKM35BBzvzKFAnRP9Afraz78pneNYXuehBhk7gJ",
  "key15": "2ACbdYURJQM4dvHPMVHCXL2VL8w3iRGoKftXPXhKRnq5btjsX2ATE2Du5ovrYffioArNMMqFAXcxcUVzmbJd5uG3",
  "key16": "5BJYYqvY3uufgifyTG9U1uKeygYEQZnE3mzxDziGpHEof2m5nDTX871y4zFz1w2e1irq1UXsEMaRbCXLdo6CEumD",
  "key17": "27cP54hz4AFtYqjgASV5JrWmE1UbnqKrr5C6U8WYrvYgaiQHkTTqEx88Sciq4foksCsNBLCo3sRY5Shb3L3WkyqE",
  "key18": "3dbReaFav6jLogX9iPR8Tk4kzCzTFuZVMLV5pD8AuuDR9BvqE4A5AxiiFKXSPXERi9SUY4J3Z37CT1zFKNCRyFbE",
  "key19": "38b3yjdeD46Nttq74tq7NNprE99Fg4UrGPrypbmy4yVEwiy57jgGiU8xTFczsu1fMyNGghrHJuDFFJYiSqf5uRcU",
  "key20": "3zbbqu5cxb1XFTpuLwqqP9Be5EFAkTf4kDo7VGBdVBV87oa7Ah77XjrwnPYkeufeN8F1qeRDieJyvmwWERd6261u",
  "key21": "sRUYBmbcPcovz3AQn11fZcvdsnTLVwP22GQq7ybaH57QgL11k81qzVU7ff25tXxN2knbdV62y2f6U8DTvVDHVt1",
  "key22": "4THbEWtPMN95quXjNBmfaWJz338MUZgaFh8KNhDpdwEPyqiR7xwfk24n7sgM2fV4hCCwXcKUFdiULJpKxTi7bZiB",
  "key23": "2RPtaXGuoGPzoPod6wqxRx7g9XEPBUvqnfgFGbSPeDtZ7F8iwGF6BtJ1yhtmn45U8wLYAt6FMxpscmZNCqVFYmpe",
  "key24": "4bjWnGtYCmzGSe7zPyt5uZ7YwzkrzG9E6iXQ1H91Ayv1C6LfVwdQ2xtgRnxVV5E3sY1wL8KGKV68jF4RJsZL6FeX",
  "key25": "2kVEEPF9SDMNbPpnc47VVzPW1zFyTBFeWcqDbcCpGSZBPT9QM3U19k6coVMHjTpw1VwGgj2vmfozQruixQ7PZGv8",
  "key26": "5fHKcCxByYDYU29B5kMneVXjSmBiG8jA7J8EQLnJ9jDUrbFDFkEejat2uWLXJcnA43FDKvjmRvzMU1zsgWjpwcJe",
  "key27": "MHrUuk7U6jme3rUS8wR2wwPMRUWrNzfR58Qqj7vRntFVemj944MRJFiAsUzCp6M2vNoVmE5yLjZRScttSqDtzGy"
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
