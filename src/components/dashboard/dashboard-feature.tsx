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
    "2JaDtpXbjHv4AMfkvNxNeKQVHfBvNHZWkLaCM2Zqvox2uCpRp1SfH9cG5EVa77MBkNGe5q1PLWSkfFK86ZES7mGP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DFft1ansXTqFzrjtW282zqv6Hx6HM8KZomMQTcg4PFH4ypJWa9jNqZTfk959REwbxJ4ASsx5joZREyghYkj15HV",
  "key1": "2HNjMK6vYEzcEYfKdR34ajutLYjJzqmcswb5vZsJPd4kMgh7JLc3KrpBv8AZo8SfLVyjhB5fZ9EYQ8WKpnAHfCAc",
  "key2": "3jivitqPZWQNHajDwrG5BD8XFCsxmQJGQ2caDbVHD5RB1Uu9dExu9zGNQzaXGY1ZkMFGSSGoWkAa9qQeAunME7Jo",
  "key3": "39ZKivPgYmkeA5Yxhx9VGWeZpRX9xFQ22xTPeQip5y2TMkvvfqe7w4biuRPCx2mvbYEFCaRdUbrCd7JBpPDhzawv",
  "key4": "JaKDht5wyWZ6RWXqHDc31NN2fm3sK2U2DaaUgEqfMkeyLW9W7kSYU8tRezeVYEJN1bT2pDsepKjWeJHDg3vwPaS",
  "key5": "2bdVtSX7iAJ4M8dyiwXG9xwgmgWx4CJVzja14VGG9ffotbvVeSzkAghQvA6omJzaNWxBkLJsnwCt9GinLp5KhcHk",
  "key6": "4jjKcCayE4evzn52H7ffFcX8nUJV1uKiY1243hfGhro8o8AhtoqVkFVLm1HB7rRMAy3tZpCyixu28zRJmrDgKyQn",
  "key7": "3tgqwrr6PBHmjydNSZCHc8PnkJv2zsHj7kQaTdZKn15EyDeoD1tUQyKmePWvsiT2spShHufAkLt4Kz36RZCcQYmB",
  "key8": "23KWSBWE7KWoiJBXHPtLcrnAY5JkHGkQJUAnr2hWdkczMfdgVSt1F4y9zyh8cuZoc7XhQfdbfjZgRMBi55dFMuMY",
  "key9": "2Zqs3xiLqisZHd6ea3smTse5rHip5Wqz5T5uaAgLJTc8w7NfRnnV57SkVxRApbuhJTnF6AwCqVrtkNMpZgcyrfXP",
  "key10": "3aPzsL63seJNqAjCB1D1mfucEJosSbt5ogv9DYaVbDG48v1N7SUfXVgufJtKSbzdP22BC5EqXvdRd5oAfsq4QccW",
  "key11": "4jqmiszLm6xzX1dSoPKpAnRhTJfM1p8gvF8dVCcbqgMmHLGexNSyvwXGKkpFnaL5CAC8CBYuPLupSYu9ox3GnRmZ",
  "key12": "2Gm7p88JQiAkVKkiddCBySSfUM7Xb4wjLJGQoW9U6btiMEhgJM9VPatQG4NFNE6wSxshuvSovxtdcjBj9i9XPcaL",
  "key13": "4DrqprY5SWK5A86xAfCPxM92SWrq1Tb9zUueKvnVM3N5SbCDK84HL8z6udVLDjB6hLgFkWt4QZL9Tk6CFufkDctM",
  "key14": "mffKGcjhKvDp7turwJ58siXwXGVsMPWC3NdLx5CVoV6GXhaoiHy7tuRtyXc2wtsHMCLx6tnYpC62kA49B2hR4n7",
  "key15": "U4ES4oB5ZoDzVqARKCyfCHVSvEwFbE4mM5TLqnxvGvU6B5EMTk1qCE5ro4rqcGcYLG9GrfcYPy114oQNDCk7nnt",
  "key16": "4z3hYMuaPDrhkvzXgApvTGB36W2TAVzXoawSgSy4BePa5AUmmJja4Aqn9LQZQaaM436gJCzV3wgrBnRvkDnvxw99",
  "key17": "3CUVAs2NQ9pSkHok5zC79qQgKAh2uD98LyYttR2ZMd1WUDiQMYXYQRgxMTp2LbDwNdPbYEHvXyNYdhe8RdDnLkzf",
  "key18": "2yDsMwQ378cKFYqCSQd8yALQUh7gBmCGSGgXvqjGTN6z5o1CaFGgn8K5W9pS5CmbmpZMQQYcyjR4nRrbkWtD67b6",
  "key19": "2Gn3tmCbeWYTfkg5xf84sp2WtLmhN4Fp2nMPAJtTgAy85JMohZyaC6D9f3R3H9w6ty4k7mCnvh3a5bYXZPxoBF3j",
  "key20": "2Q1d64bEeu7ryThk5HrYeNNUxxBJKY66tCM9hMLf9YHnKMdKKk7UA6Uwwr6ikmKDsyaUqGRBSxtd6bbdtGYjwhN1",
  "key21": "4wF6cYkid7FcaScAWirbBMesEySK9Jb1Ju3bfGqJE5Qc6ZQ7zx4JWhN4UZF8LtNGDP3e91E7sHhmvBkeaCnkm2yc",
  "key22": "3MAWwYrjkwWfYKGmnvMqcUqCg7gDNLDLdhmuPtgsbgiVgGTGV6assa1oUZpRxpedaoQW2ZBwCmgKar6wFJApGz3d",
  "key23": "34DzQJKwo3HTF6BkA2FZ91ibx6xBuNW64Rd8u6n5vqPGqdPniEgMuNUMjEubGvGdWCZW8LT5tCGvDUWXicRZq75k",
  "key24": "xQcFN2RejKhyAkQCrqrdJXivMZa84bv45Fk6vJxXFj1XQ5hRry1Wp9dKHPkvQ5SFVMQTPCFBv3ZSjFXWUcEPD9f",
  "key25": "4joJZRNJMbxxUUtEZgZxRqpLwPCFy5kJ2shZFnr4K5h3MnXZ67gH2qhDAePgeGV2z8s4RtWUZNdtMzBsaiYF4B5p",
  "key26": "3UHAcD3XcdzEyAtmYuzw4i2N46rtahxrwxeSv4R5kiAEU9WmDiVdbVQBnuBT6MXj97w5hxW6A9vvNHDUWbdy4c59",
  "key27": "5M3umf3MG5FmiiN82rRNrwS7jmMB9puWNVxXreejpkxgumfQoEpnff7rMRDztRn7nJMTCACSjyNSMBfqX3rB4vN5",
  "key28": "2TWTPrsTVD2endDvz2XWBUiMszXjeA9vXNQ6A1LMLMgRhDyqVpE6q1rwkocEi2fkV7RFzfdnETJ2e2SufkPjes6D",
  "key29": "39qCCh4pAfDRWE8nhW7iwU4nQCkwWqw2sBuMyjr2Qndz7EQB46A7GPy2tUdtwJEnknK4FwcDngzEJzy3TeX5iJZe",
  "key30": "3HnqEpf17nKnbopYwcXLoJ3wGDuqs83sBLn6s2kE87c4LGLeBDWaGGqwWuVwN1cvhaxMEt5k1SknMdduaBCnspXw",
  "key31": "2ypBrZJFRuin84rQs91qDny8sQqgVGRxxG5eiJ9i3Qnern9E7GFE6BaotArqMcANx1wGrBAgRMsMyQhZWU3iULcG",
  "key32": "4ceqTotr5zHgnKJpedFLA9EqtwiEugMn5kNovn4o3uixoumvWUQEDztWtvexWj14d7NQEDsqoEMjA2Nn5VBbH3aH",
  "key33": "4MWnHKsFPRh8MCma3KRLNd3UJh2SPLGd7Ff5KzwgvC9CW2oaa3ZMkNySPWbtpHiCa1g54bAuHQ241sL41B1aLNY8"
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
