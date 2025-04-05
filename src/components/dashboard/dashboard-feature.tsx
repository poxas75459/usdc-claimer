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
    "3xzH2aYy6vrkq97X6noH5nSbQQeJzVp4ySUn5J34gB4Jht7j6nsYYGYcEK3t2irkkDCn8kx8gaoTgoKq7GEDk75b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4btTWmbTcFigs4wgxSfabTy9EtVNfXETrVeCX1fziAJKrQAeJqfW4c3rtkdgQn4T6Va2d5HdUxJjhP5nV8cB3SFC",
  "key1": "5wREnB6hcJAph5YwDN8dtFsnhwCJNyGjTCndqXTDfcDassMwSG9AUx5PeBMo6iSXekkwZHQY5mSwAooU7ipyhkr2",
  "key2": "2EA59HUcPLTAwveLiqG2wAWc6iVxQ8MecchR43UD4kyWgQR8DReZcxcib1BCuo3tep8ZkZd8UD6Ght3kTnbPi5JK",
  "key3": "3LioTdocFN4iN8LyGmcy6zP7YV3U7fzMaR2tz3nA6KPNuHCPoBNZYNLQUHtKbNTLxN6w6uy81deA1NVpmeHdUbc6",
  "key4": "6213RHdgkXhDL4ZCYDXogGLXa6p7szkDcEaRmimTwETU2AQ7VQoMB8NzutHh7pWNbhi6Qghqtme2wenL3VKBuA3E",
  "key5": "4XojDUxDKFknTsBSvVkWwSF73th1PPKe5vy1AtX5jUjgQMEuvUURDVDN2DaMMyLVcEVUxsDuYd1mw41PXzc88DiW",
  "key6": "2fcvSALJeJnxkpECWdyJXihjabW3kW3E1LEK3S6p6f3ZngNmhVmnqUBt6fsYZmu6poMMA3bR23tKCzUXqdGrbXXF",
  "key7": "24BJJ6jiF1s8G7Ya6BDJNLEXn1BocTaZykoJzvkV6ZqiL77Rk1GPHACaMU41nJ7xKRwESdckVmoJzUEXBsHWNDbH",
  "key8": "3QCN7TAhYD8HoZoDW7h7UW8zuK7iQHv5MPPpgTtWbouVUwnPAMWEoyPm3wf781inaJNbRkZXWPZgxp7knNMmXtS5",
  "key9": "5uNEkZ1z642Mub7kJXj75rg49VKr6oBCfddQpUR8asXCjKPLPP2NjyDQ23YY7WZpcDeRv1PPFC8CSSJcfyRdYwyi",
  "key10": "CihAk9ZCwLweZf9gLEEGenM2qo3912TvXwT9t7zJq74t9Ggp9YT9SLGULdzEy1dDnxgKXKtQBcqKYH8uqADCyxu",
  "key11": "4b13pAkXykq3NXryTQ8kpMJHM4io849Hma5dzsvev76NBGQ9DtWMiT1R3mbMtWHzqo4xJhzcwtZKgmaxkPL7XKYm",
  "key12": "eyonL7jCyFXXrWez8QJgQfMFy8RWvPTLkD26amVfpMRra5B3XXsULKLWuncRoVwFMsXC25TcCJNJGQgc5M9GSyV",
  "key13": "oKfLqufu8cLyJC9tbYuvgPkxjmx26Tcpu45ejoqR2irML7RyE1N55RaqjsW6Lbwk8BuAWEPgzx21CjfMqNbe76o",
  "key14": "2DeFW8BDXp5YLVVyxAEvdU2XKvrwiuG4wEc9BGcjBZD1vpv5X86whZ3H19Ns3Y8foh3xH7tbKJc77MQxRh917nPG",
  "key15": "2tQU9Q6ndyF1dwRcCi5KfLopBx8QfVHiE3DuUiofPQTPjyb4wirVXAnF1KcRNojtSV4EDhwKHE6BGXRBPnKRhWLE",
  "key16": "2dTxS8rqGfzitSPNM8edjTP6DF7CPp2Fvu6VNmxg8KdJZG2fQmkH1x4oQhvy2hFQe3r5p5yGu95QoUbBHSz1oQbe",
  "key17": "4kUnnfUds8XygLuHdRnfiFic9gEKPMT4WUsNWfeYE2dPXJuAF2XiX14YxYcLVwRMrftcQxGMKX1ngbLhCk9xASF3",
  "key18": "4WVQTJfCuN7fAqzpQBcQ4oA1iHsfsemZdabtWqtQSUSJKq1qhzHaEGwykjtLQt3JT6pjkEkmbFA824Wi22NbwPHe",
  "key19": "5o4eyFT51F9vgJcoNHAmW9hiVT8sCKjDxUYsXECJfJcNyB9tjTjHw1pfqs96inTKdDPSGMX12phGjftYTvWw5Mma",
  "key20": "WueeyB4s9f8EusBgjG6tTsercJhodNpXZZy4tEvjcJT1FtNsUhBvT8cvqdRgGhqCQjkFvaAJjL45T7tY8fWyCN7",
  "key21": "5pggUKvpuxn6avHmz2kG3WujKz3TTgZMdqiaXe7eo4GkA8FVnDSH4whAuKTTx3WCm6pNxb4MYvgD6C5cvoxQihRX",
  "key22": "2oskmkG7SDCsuDUnFkTNpYAoNK1m6RL7vmrUVd7XZ5f53aTHsLLiyboa7hYUh21LDVaRunpgLZSkxXR5KfqNPvNP",
  "key23": "w7F7WLxqG3BnU9WjbPHpGfdnNjkudvoxovQ3hb8v2kswhK6vJMg6DtDrb9dWLKtAFXDuAnceH4phNeESvoeXj3u",
  "key24": "5dTG2bJVpEgQsEGPvh8SVfbVne4xbRZgCLgXFLyC4fWuNCL1TfBGeKbhnCyCeK83sGFDvpmipFHynBjoMvefwpHd"
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
