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
    "57wq2KWLVE9W6eMm3UaAWgw5rQ719YHC41BYjHrHNXU5gkr1kc5nBGc7tQQXEqRkzaZazbPZ9ykCMActBPsvx39e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jqDmJkrx8TDDzovhZnjMbnqKS1p4M7rn6j6PNeddFMvw9BmpKyMm37cKfL2QMW5EhGKqcVKxfWFE8Jufqt8YfSw",
  "key1": "3FJDQK2MTx5GAVwaVvBx7prJu84s7LCyVk81EpEwpLhzLqabE3QyhBTG4NueAw4b1tME48Dt9rKGzu3NrpniCAAe",
  "key2": "27qy9PDqK2R8SQgHYikUQE2WewxrQq4aC9ZoEdeqGKADJG4eyavgWUc3Es93cmkAdhdMpqZCSacELW9HTixbixgT",
  "key3": "5ekpn9z2N1ToSTbUHP4gyCyxUTiTcRB8JwCNxZFGnnSM3jErsNetoD4PY7cmFdWVNUt1U4kuG8ZXbMFbsXPjLEFj",
  "key4": "2UH3eCCF8vPR2cS7coVPuHLb8aGbGnzcB7XkioAYX4CiQe5KDg6A3ms5dmJwdBnrkLktwgADM1CUs4AXgK2oVxth",
  "key5": "3LcM749g2VCHa91kRTtxgZiQwcNFqumFyFHjwVtqdK7E9J7LKSbiDEUbM7Z6S7faL4xTKhXiGdtwfc6wAcTu8EF3",
  "key6": "5sbgFtVxvo9osDnmoDegh8zs6oDQqH8GBT9SpfoJEthgWPwFyiwYf6s2VufBLianf5mULpGo3DFW7VFf2znCVUFT",
  "key7": "3Y1XLxXL1kY2DFbsBCGRqFoDNkcJuugZae3TYfEHqs8nPtXweRz9RN42Bwy471SjNkqqmFhtCTZ11cY1QQiiSNFJ",
  "key8": "53iicCkWFEjqVpYqRpsa2D82Z7ADa8you2wqGCEDWxUWYeiFvqkyuZx5tasBtGU2iMTR9uMiWmyzdiNYwVPgGCrD",
  "key9": "tNATtXKK2Lnq2wifY973m2eKkkP4KJJ1qB1YmNFK8Vu5zHrYvSDPA2KLUtq4JoxjHpkQDDgqE8r4ZX9DhHwYQvZ",
  "key10": "2wK7iyjy9RtPzy7QvxGieFXasgquxvesuxHDAXTugDRbmuv6aMP4uo4U3iGW7iFySQRRy7jC3bNdApKkAKDXWBc5",
  "key11": "2ZhJiCszrmyFfe1JWZXni8kcPpn2sCMKGvTFVbYDTzM388BHp2TEfc393q4w7DkNPFKSWbuoGFoiPHK8E8Q51GbT",
  "key12": "ggecLSM57Lbb3GoZxHRtgUeomX9HU5wXxS8gk9HWXMZiPDfBr4eqaabaQCsTxXMZcNLj3fjYFQuZiCJTukQ6tQX",
  "key13": "2siGjGXhbs4dSa3T4gdPgQS5t3gxhhPKpeXEZC1nyUm4UFdwJqd1GDGAEQE4A6AYm6DNod54EdmKAPszHt37vbm8",
  "key14": "4XTX8BeUVUrb1kin3ReiXeQtuPywd6DNQ4GHAQqQ39TNge5vUeLxFLci97Y8EzDVpDdAdHadNxKGvf3WG4gAgUx2",
  "key15": "5HQ7Zbw2tqjZjdpwnLhG3fT2A4bwKqst78s26Eb5WVDbUuFRzgAnNABWMjoY3aXTHE5D5imVSgtnNHPPbDsB5nR8",
  "key16": "2XzKwWVhKDvjj7JjXTfqHrU3TxvnWVbB2PKDRnVktLyy18gKQba1MNqYtCixMbfXaiu8hDTzBqTvNaazcVBDFAvn",
  "key17": "2etWdWajVNuU44fLCjSG3p2FzqAGZzjZbTxkFsT7Y2pE7Y8gvzfaaBHthFBqbvdGYSXdVeoYKx7Z7aafcZS2rDNW",
  "key18": "58ZuaLbzdqp2dyrTxKwDapeigMh8MFCFisPTVEQYeJ44NoaR9vzUxzvN5chnWc3TiCxssAkiBrFh7BS8gKfAgBSN",
  "key19": "RTJ3MXsbfUp1QheifFDR7kCDRZrguMQQ2Cf8inbNtG3Vo7rv8nEz31Xub4wNER1eg8Z4wD5j173uYy8zTd16uNk",
  "key20": "FhyqCPozGkxgPpjKHDnfoN12z2P9zvKTFvGp4UMVfASMkzPSwRvJXd3NibmEpJ4WH13vyEBKpX1qcnrpz6bWPqg",
  "key21": "44XGVWQhdnCrgqTGLXfTDkhwxQjWNWMyMLu3xk3QfLqA1trcmo27D5yTzk5RKWSLKoZnrSJMwaYumNmxaXWK2yHu",
  "key22": "5kjYtedZMgcVxTSoUPeoHq9H3Ejju9tL3CBMkS56QE3DuvDu6uqjeZSPfJrLnBHcoVQ62owknHQ3jDkjcGmJNaWj",
  "key23": "4W1h63rQeJUo5AcVUVof2xBQo6m6GzVuSbw3Jw5NjLd5ijyYem3XX5toSq22aCA8P6qHZuv9qxfg3VpBonSZxSCz",
  "key24": "h5eZUUSZjk4QAu6FEEaSLhDrKgv9EnNvo5F97ACyw8ByqB2iSo7kd929awjZu1ag8vnM76o4xe7BHQWSCQJuNbQ",
  "key25": "4UBr4qa9iWmKaStVoerWW5x6jrVNBCavj13MhxhGEagtt822cYcQVGbS4LwEGnnhiRPV45UqxnKufJBtjaGapPdE",
  "key26": "2CG1ryJqND8PqbxA98Rk9Nhh85KJ9iZ5zFvvQxHWskK5SnjPXJGgAn8iQJd34syWy87jPpGiwcuHREXW2HbnHaqe",
  "key27": "RcRaF2rFitaNosm615G4toe258GCcMCWt1UQNddgUeuGPVsLfaZ7JQiSzdkCk9WXkq49wLLbt6Q55w6QLJBp6Wn",
  "key28": "5hiR669DxVgVXyeSRLVxETVScGXhumbFTeuzuWgYoLdNPyAntuQAHFeW8Nn5YEsdvsvZshfb5ShT9uVYsTySi6DT",
  "key29": "3Y8xFmtu3HYQGScCmxyvL98Em2nTH3EwwMQ9E6rCFgqDpEDAGpPpW8sWMPYujvP5Y9i7Jrdwx4MtpH9uGxUL1Yds",
  "key30": "5Zh6PV6gZgAJ9yT8JCHqAR5G1vxFdAwAXwtsMK5L4UmJFbUhwV8zkSKTPTpK86MkLZHsqT1Si7hgV5chqhYzFX5V",
  "key31": "3TTHkgnN2mJiVW99Uhyq7qBmiqQAXfmGk4oBinkh6XhyQSKopgy3zqXJpqYM81LKfw3xgtKEyQNnry8bvEv9Bnr8",
  "key32": "3MGB21WwTKX1vFV8YDe98eTYk4B1yamvwYqeGnyTnYKn8YFiKxSGw7D1Seh6qQoQhwWLLfdwz3gqCw7MPUSoN3gC",
  "key33": "wo6jC3zPUwNnn44EnWSNH6AZbi17oymdvCL2THddNWvNBdYbMAhsopj7oqffMJdyEM3JV9K144NJEypzx3DTf7d",
  "key34": "33Ynqv3zB18zvre6SS9AEHWWM1WBgCaYtFNbmrA2fFfnL1HwAfZDV55GPDTd87gSTQKuYNoKdU9QW6YydokvHj1Z"
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
