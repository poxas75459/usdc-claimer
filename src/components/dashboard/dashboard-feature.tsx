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
    "4GMUFk99H8vbut2miiJ1oWbGZbPPzzwfEQ6h585nsnuR2LKxVR2EiJvXasoLU5SZd8yXhtgkZW76neNy7yPHM8rw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AVd386n61aaGfSyhCnoVGFCzTre337bHme1feAmabTLtgyAqZVysYFebJBUv1M43SbSX2wsTLv34HKeUjzq4EJZ",
  "key1": "5ryUSLGKVyKcUrvYZTvcaFXYnXAjGmHhLAnQMTnGjkCUeeG5x5d5seafp1Jput3ierWCgcD3Q5f8Xw319KBMVHmK",
  "key2": "64youBwgSJuakUfDafUT4AmCpYaDoArVN1SCYEc1FmMbPkB4XZXexYiXN9Uqftdo4PkwCRYa8jf5Kx91FJfidD9F",
  "key3": "5AX2qdUi8EH4SDzBeLVB9Afd29CjCVR1BcRvb88RyK28dA16zgcrXfbLNdmwGv1L1MQFBRvkvZ56pDo8SZ8GbMEe",
  "key4": "3j92TtbGoJbyDme9YZB2c3tkG168pDSNdhvRHdRhEtrY95C4Sh8GbzLie6ndSg44DHHevMZhhMo8ykBM7qpEMiUx",
  "key5": "4u45oprLPvz8hBnMf9G6GHQDjaU367UCeyBbPNBNAMeYYxwqz1xpHRerQVbNYJe9gzT8po45eZXNDuFZggdmZRQj",
  "key6": "65i92iMnXcm92TT79K3Ze7wWrASDQSB5NPmVGEnDGfuwn6XdWC5wYajAvfYocPvCifT3xrNYuVsntqtYCfvWGrcQ",
  "key7": "23xWVJiUQJZ9hMq8QnaPcK9s5NcSBiEJ7bVweQeMABH9UCrwm2RARGXUKDHdyqAc64thxNbW4hr1oi426JBJc624",
  "key8": "5tDNzq57Sa6np2H4tHbmsckt8g2AKBzzp3ZkLquPBPofTsibi8NrsDB6yumGwNFVrHxuBPPWuhWBwKStg8JLK5Bu",
  "key9": "3tUepQMG4msaBnSRW7dnPfmycEre5QdVpDQBZsvjNCymysFfJtDW5vCeUofFoxZC73ipAp36hGSP1svGQVwqUkio",
  "key10": "4EWUs1TXjbfzDzN8FemsPEjy3umptqysWBZ2q69L2EGc5H3spH7D2oSD114BXqy39DpyFvALNbaj8w3733V4UkSF",
  "key11": "RvBfSPEg9EkBZi46K1PBrrzRH8mJnp5MbfsPqJUEp6jdjxUWjLG8UdDSMmc5brNMnbDUVkCrX41XqTUJskrdmYr",
  "key12": "2sB6qy2GfuhKEhCAbcUMss1NQ87A2W7HqVgPVtovsGRNw1hPT6WVM7ctpsmdUiDcJQ7mJgADX2sxdUmmexEic313",
  "key13": "3DWwkUrkPuUWVohKBDHxUSbWZk4XXMfozYgREE4LQtfpYvUxjuNQGNqLSuWpXndBWFBpFYAzRGmYg93yqzfwT6cK",
  "key14": "499BB9qQKbWtz4579wembqeukqLvEngSog9MR9zpYMWBgmGpmSbUdqHmnAhenkhxMii1NcM8cYYvhWyxJLku2Yz9",
  "key15": "x8GjqGkQhz4W2KiY2FmUpDEuVzcmBx7FcMcdvxAv4sTC7rr1ttEe3z3BQ6Frdgf2mMG1Y2a33jPQNvU2irkyJQY",
  "key16": "2KjXQxsxzXYu5zNp6bTwGEvJTMHpAP971t5RrMK1ZYmQ1GgeVABtTXxzqXcFS5XnqSND4aa4ACGXuGHrKQsUywPQ",
  "key17": "33iutqVcfayS1TR5aVnVhnNGtqT3DjuLajhoH4PFXntSCeW3QQycGGicNmQM4HuJm5psnVf47nDLB7x9itQidaW4",
  "key18": "5UYjE6gKKM5NSLaEDhNJzafs52uJf1JPEJkLqMcPrVZKK8LeUFqj6htaXVMBMsoqm7HBMuuaUpwYnx6UtWWKMYar",
  "key19": "2Len8R2BXjzr3HvuLVEBB7UMjiqmuaVPJCEDPayyQJiHZJPrr8CJ7nMZKipD4Lr7L5GSxM2pvK6gAEjdBjQswKVM",
  "key20": "4fncqtDMY8zZpYmzk4NVZBz7b5xdTZMUjWpF9rMhzFzEJQigZv4E9wV5Pzmc2Kpk8uP71QXPvDMg2w11DCtfi7TE",
  "key21": "4k9gd2YChW9z3cDkDiTq8UuABmeFgoGRSYq311z7PWnrwBt3WifXj1PXXTNDqEjVHRyENjCFcoWdt9CNRMNJXRdV",
  "key22": "3Tevb1uEr9SP69fZLwKbquV3gJkKq8zjK6mEG7AKPUY8zQinC8RwTqjeUSVjGCMY2UGErND6XQWg27hViepkxKqX",
  "key23": "2h4ChWhPRTNaHsK9CkNkqqqZ4v5ZLjPvEAmeudYXJreMKC3dRfKEHtF1qEYwNWtbUUg3NHuVMqTwxd8fJ9f1GAC5",
  "key24": "5rk4FiRyzwAhS2HXYKYKEyZMs95bvSfuL96Lh746mCzoxK185fX3jutHug9koos9rreggGRdydFvUrEkaAH4YGRa",
  "key25": "3AjvZCqGoi1hqaxXSXsyJfvtSVnR47Xk1NH93go5KE1AevMfVdgnfb42aMWyhVaCd1P2iHGiip2XdU9bCD4q4ECW",
  "key26": "4ZmwQ929Rd8Xs3fndeyJpbBeNsEQDkUSLXtwysk66xis52Pt4uDWFKRfez6KNNvHgGyBZc1sBKPMcQknMViX9Ao3",
  "key27": "gEGGuYe9G5923cXyrZMtETgC2iPgmjXgeiaeFNWpW6F9Y2Vosk7Rsxs7VMPwow3EcuvCpg46yJKcUQVey9miahK",
  "key28": "Rr9GtxU4Db3gsodfGUdgcf4dT1SM8MixRCFKQSLnKv6PFYfP9EGDx56kfUHk8jckUdcr3PTe5tfLf1kUa96MkLe",
  "key29": "2xVkJgHJqHyRdQ2ZL7wV77AL5xbhQ78Gbs5RqPFdjY61RqCd6fyvGWe7Uy6y5dhvRwugpnx38FNuGi4n41BEKb4s",
  "key30": "359TTQb1NiUGuhFR2xAUjjELtuTkDvM4cfRGW8fz23Tv6MRMM5VBcqiMnmHzequAfyT4uj1wNbA9d3C6E6boJuXD",
  "key31": "48Kp1Ty2SFZdftgyosXAACYga8VLPiWC7w8JgMQk3N94ANxejymfX3nrb2jDmRxKEfY4kXUAASsK8kQuojYt91ZM",
  "key32": "2UA7YD8EkmAjN1PPsMHD3wnwE7QgyWoyboEdT387gNkEidU1C6gLG9yMgZSsboCw3LYHDksZEvRD3eGSqcZ1uEJ1"
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
