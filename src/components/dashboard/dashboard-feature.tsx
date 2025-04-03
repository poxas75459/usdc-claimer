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
    "4FjoXXY3HN8aSRscfQbLFHNMUjfqtgxYJTLW3HoU2JMkt648iWfo5k54JfYk4oAPYZKCU9cJJpRdFRU6j2TJnifG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gdPeJaqfZVA9gBtuJ5htGYsFPeoAVfzTEha8STNSeMZoqQ1U8qtUgkDFikdojV7AjAnyhekDb7gyLgKXauqLjUd",
  "key1": "5oEPzFmimnDyQbkbyxpkyGdL75A1gNimsQdyFu2FSFsRKPZwnzMz66QraPCov1htCbng5DvpZpGC3Cqd74HZ3K3J",
  "key2": "3SECq6SmXNbGeAtpDuWLMxsGV97AZoDYPtQxrJdmPyhRrxRrdUNKpoDu2Gj85QBDdbfQWFVa5PyGRXRU6Wmk9JtQ",
  "key3": "2crrBQRxSuUjb3g2mecMNn3WPE9i6p2wo9TiNx94cG3xRdbyHrPSpdnvSsJZssviK2nxYRbd6ow1hx9i9pnQhdPE",
  "key4": "4w5pUYbmhB515EopHu6raznBdusTCCwkTcxfN18wsA6j2t3rQRg8scvGuHtERr9dwYqQjqZeD8VeBoDz3Uw9pvqB",
  "key5": "EXqTeGxXPkEdhTLwKKfcJs6A2S3DNVMpT8sN5n7tUiqkviBjaG2dxzGyG3S76bkf3NTnC9hMqVXx6JBEFZtVYiv",
  "key6": "2p3c4CvuAcKGbgeHV2zUVkzNfVNoYgg92B1fLPhXBTp3sDL7ZmamtRrt3wdiLHrpPFrjaqi9DKukgMJG2NRRpFeq",
  "key7": "emkM9KcvcLxj3Amb5VYpScvRv44XK8PWA7PMqPo2PnSuEaybzKjTSVW7w3sSgBHsy4A1Hue5i61xB2LwdhRwQwk",
  "key8": "4kd7GzpT5BqtDdbNZ8vAwz1awuu6XzPCFEGM3wnD6wurq9et1xmja2BswUYSzkUtKVEyhqzYGLcxy4Up7dCmFQB1",
  "key9": "2wydWcGxTAzdq8WbcjqYnQYn3GQh8CJu72B8AAVqHM3HQBzjzGU4MFyYRwXmFFYZQCRbcSu3pThMXZdAd7KS5FiN",
  "key10": "2PcBKfbJeottqGia33r1LsW9Q7QK9jdYu4kwrSDKuL4gpv6Js9WKe5wKy4d5ZYpxxmWGk6y4D9XihNJem7wLoTiV",
  "key11": "2arRWhHCLQDKbsF4c2TBm6KMmmXAwbntP7KTvBXMQMdqcYWz7Qy4ep8Bhxf3sXggWepBUJaAtiRqLK5akt1mzwnr",
  "key12": "4zoYxo1gWPhteiPo4U5bAbuqUfYCcV3c4uZz3PsSXUa4sNS1JyUSniHoDdb5Ex5AVra8NP3KRmXu4GZiMR8nzQRR",
  "key13": "4n99brFsBUJt3VD78RagcB5Ga1pEGyX1g8uenwvDCY5xuNs6gEJ2QhxDkByX1pWVhFtsGP7aCL1Ju1xZrH7PipSe",
  "key14": "64kRUM1LWNk7VdFwBJYYtARr2bq3pYSBVQBWPdY8ZnNQWrahDVf95Tep68ZaXQtEoTHprW4fttePZp332Fc3Bwvf",
  "key15": "31onEJtmjxpGuU3pK2m9jtgoCwHs6bFdqGmTWonTFDZikdmFKj2ttMvv4bsYpdF5rMqDDwQzauYvKXCiqYfQVJSt",
  "key16": "3onzzPAXMDjTMGRdQsa1SJxPYWPcyUro92EZFuppFFH8owYctLaAGPJ1mKSahr5dhvMdUbW6WdEvAqivSc4dC6tE",
  "key17": "3zEaYfnMapKRzsJjFjvmoPoBwRjn2jePD3rpYzWLgD6ywqbYhvneSAjDgMJ8xrNLbHWW81toD6ybXQGMAdYFWhkG",
  "key18": "2QbscSZFpGs6e6cqn8g51FXFPwruXM4m5MWwqreBE9C1K7PtnDT4BovE8EPMXQtgeUNo8e3f6iXyWNJUnstwBhcz",
  "key19": "2wT61pronbYqKFvVnGYDv7JNQLLJcYfEB9eqHUe8BGz26h5chHGyJC6Rw7pxswu5YNK31hYQoxJ8my28YQCEYV5S",
  "key20": "4NNovYyV8X5uxeCKGMJkBSaVLY1dWt7rPv1Tw9rtf1F9tXx7jSX7kzpnFEgkmtrW7nJg3ymCVfZnuE9x5xJg9RF1",
  "key21": "3tbePePf1XFyZHi5tShsTY9SNTJSDF2rQFHQ9Z8hoHZ3bJ4cWPw3KZAaGYBj2qo3rLscCEmmVVxoXYvwsmuNryQc",
  "key22": "5s1w4E9kypF1GBBm4s7Gg1RnSMEcjUNDvZy87EoTqo8cwTythrVccxEasGPcnvHG7kGFrvt4eq2wBDZ9jcvSfEMD",
  "key23": "4QtvhLAFtqN1Rew5R3uy2DxGH36VKbG6FJ4yMrh6ZEhEq6XZii12PfYGyiT6WGfPSBW4dTPhYUgfaqKPNEj69eNb",
  "key24": "382fNvPN6xRvihL3BdQZPdxvUQh5LEXpUrr4W7vnQMb3WNkV6qnyPzbjVAFFKjhTVZCVYuDeYmvxKRbZStSsyjje",
  "key25": "4gZmUMmjkn5B5yEQmzycYzNddnGGLe8m9SwsYv8EbB3s97ARMbqqoUut3HhkQKnUGvcPenVEEWeXRjE9X8Gtd6Yn",
  "key26": "5ARCF9Eg9PbTLa992dAUPfk3FVGzsw5mTRDWbrV6r4REmu1p4QG5nmrtbYBusYVfwGDT596QeDHKMyK4Yxu2HMTA",
  "key27": "2PFvSSiyGsVkTio2MUqdjv1d4LHPxQ9swT2iKcqXtgVKnGXMSwb2A8qw7WKCixv66hiosWmsDejG8ha3QTMv6XUP",
  "key28": "3DVuwqQtvCCduku9ePvWCnXQy12w5vh1yc7BEKcTM8o9paVy6TNeQM5bcKiNHMk5zwKz1B2He9Hh9BhbK1g52w8M",
  "key29": "RM2oXcxHtsj9xeP9t5oSuWov5BzmH6wom4Y16XQ4yBhZCATfvmLexNp6e2dZ5aog4QmW9dFYs6cUjsJDZ96axbZ",
  "key30": "2XMnNxvUPK8zRkXniLMqEsq25fBat73RbEtxYnc5555BXUonLCn4jt33wRMypVMC59RVRN6CiYuCaQhjP5szMpPx",
  "key31": "3WWuwLCYY4K1D7Ti2c31rYCYEJe4eeunvMdSrRLqkPToo8Js4KR83uxAkXwrqcS2jZfyi3JbMVAuC2AzdJM46DX9",
  "key32": "51uU7ferxkTmJTVSa4gLRcoNR5kjCtUSgzQJ9t5H1v9JN5YXp2iARCoe7wB5UcJZDoqc72sWNvJJv8VxE35TaYhZ",
  "key33": "ztY1G1noCKzcse3JJmemL51rgfCgzmYeRn6SnySVLhebZZZyR7T6dkqsWrWUFUNsNDVYDACwsgKPd3nfcY2xH17",
  "key34": "2kG9iad87JxT1L7UDVxpTtnuaQ7j7JBRvrSux9DMm7GsPtgkhfqbVNLF5XGXFeyTFsGSXPnxrd6jsAgWeZWMnAgD",
  "key35": "s3SEumnmmrU6LPKc8UTSPNJj7tJ1AkThGAtcJ8tXxMsjj5tvxGTH3fnowXCLa4W1VxdePdg6aS6Mgpzv4RoSJmu",
  "key36": "UQFkdBCJe5kvmvuEfzDqd68Tz1jfkmfBfHkPhpvdtgZS4ycNtN66cPnGkB7xAz98Gz5ELQJ5aXVxR9ZRv8oznqV",
  "key37": "32VLsMcJz1uWmhn1JzA7abw2wogf8Vb6uvyZjZtksp3yospUqXv4JmaJbncQ8U85LuXLSoLNxJVV3zCe3S8SgMZ5",
  "key38": "5cuoL6U3TR42p5eEC1Mf1PWZ8Aoafpxo6C9y5oXZD54RFiyZE2S5Y9ebQhNDV5XvYkJinyw8xE39BdS9KCGzAxtM",
  "key39": "5VCbwoZeic9tKWW9aSjpGpZGzSNRGNQDcC89F3ykMD8HH2WruF47nc8ifmScosetaoDNHAfio3aMRuxNq3kwKcrq",
  "key40": "cruzTqdjpEyHjNe7zZcRkJe5QKiByabJgMpNh9hgFhh4hyENXZ8E9tWkPKdRVuhFU2xbC8fmYKREvYojwTCAxcx"
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
