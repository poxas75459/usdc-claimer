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
    "7YXFhtUZFZUJX5HfW46cGFt1nQwUDsV7Q1bJLcYyf2ATdH8vazyekVzrej5zXrf1sJWW9JjzonXakiWWWqCaodv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Y3TeDzG3uR8Cft56ps1kaY8MwDnLTbwf7cqMihPzgqh1B2WAmQJwUCXBzmhc6YiniWQnViiA1bqhmR1ZwsBaEfu",
  "key1": "47Wfv4i8sRsuoBwUUhekXdyM9Mfu9WeAnELucKQDtThgGnjg3jPbwkvMZQ7fcNMuBnnypF5ExdHwcKXLjgrYPZTW",
  "key2": "2U3GGEJqK5YrSEcJ7GS7pVidQyqaVG3xiqhz9q39qmWt8PsQgyC81EaL5p3GQFQoQLDdqrgiK578Pvw8s8d8Vg2y",
  "key3": "4hZ5kDgNhsHoLHwyKQwqzUeEJGBWdU6w76CKVRfqGG8SB2aksGqiQ7SMawMJfN2PShrv1nE2SpBSQCuQEKdhoceR",
  "key4": "5qqgmLHJvFEEvWVFhvtSczXbyMLK4pfvmEVRtvnbHCfkKo9abLshJKRc8VTZRcVuWJu6J9bRxuaWD5RrHx4CQKR9",
  "key5": "4zvG5wvq6xAcwCWkqaZzYiSgW4ewJHV7JFUKzeS845wN8px78vqZD6J4UnmXizisqYHHGtEmU1qjujQYe8Ap8cGb",
  "key6": "yw2iAp7KzJbDCA59n38JtpGTH2gqSWvvWrxwc2x1tXzXH13dSw2KCCJS5qxXvLHC9jFoxtmEuYUYznVgSbJPp2p",
  "key7": "2pmp2LihuReoPvA7kMmoSQMbdnjQxn9zzjU4Dcp3fzPKZ37euWA3aQVr69ZMiKXu4aFTF9qR6mDZ5LteQHL438Ju",
  "key8": "5MGLmnCVwPuop9Ma5NWej7ZixezSBWpEc5SCPxNLr4zehFUHPZg8SZWSUGH67Br7nY6ARx4bKu4uecMifqikFUfk",
  "key9": "2eqYT3zFpefxV8vu3fdkM1pDpQjeNVq6mkSmCZ5xLpC3dpuBxSaC2EHipwuabqG1dfybqLX9fG9AUdJgvbvcPVXq",
  "key10": "2KBqsF86bZHrXnQfhLXnZTdTLb5btMeUxN2fwVfZYuV6e9yxaLVbm5myEaWW1iyxUWjRJFnYD5Mme28FtRoRRMbL",
  "key11": "3f3GZpGvB6KxLX4NEGsDa8LSuV9187xUG6NHd72UV8nhcszJon7Dg2CMQe6TqKPT38CBtBXpcGMWcL7uDPB5DhWZ",
  "key12": "2bfAbaEjUftStuD7VLG5MeQmnWZa12aCHz82dMUnAi8SRmCEdG2afDbDBA2Ja6M2oNbvZaCjKejZFobLenMdyfpa",
  "key13": "yTYLaZSGrM8GVnZo2ufNsG6G4mTAQvi1z33XegZ3pcwYmoodCjp3JDXx1pZCGiEHT35E4dPFuf29aHo18jwb4WT",
  "key14": "3cjcKCaitdaRNiWA2j2Pt7SMLdKV9GHXKjpJZ7WwX1fLZq9eSBAuJwPqWPoUo31goSEBp8a7MtVwmYqkhqLXRL3S",
  "key15": "peXsYu5esSiQ9mmSmhtE7xU1919XQvQG2wz6e4JTBTcFXtPWWLDRiZDwxrHF2rejCnarLjtQJnv4oRCjGrC3Vi2",
  "key16": "nL18f6H32GqEBJBMrNT6dnhjahSYozXfwuN9DtCSRtToqm7c5V8f9FBLbDF5UKqRD2oD4Ldo3A4wVY7kYc6ui16",
  "key17": "24MpeDvanPq1WFvTHVig72CCnYzGVd6zY64CqWcTAdEbT7sBqDr7bSaMAizJLPu315vyKSDao67NmUf8T16tsMnn",
  "key18": "5W7TJq3jcpNEdfCaLTCWLaDqkzLLyecuU1qm9dKGEgM4KnBwsHNFLtftsjfWhRpih7uKcynvE5BKekyVMNidwutU",
  "key19": "45bf1Quv4J7Ja4Cvjjn6BZQvqMtkSWar1GGQEyeqSKtHXfz2uP46BUeAH7Ugso4zLoQgM1qNS4wgygKbuk9iEvHP",
  "key20": "5q5ZmproNxeWZxfzohHKKr6GxzCWiiJVHA7UecuJrss5oCr6dkBgHxt6u4iDBt6C8FGRfu67qfzEJjyZPk477HeQ",
  "key21": "3UroEFQS9FjM9pt4ieFtznDzp9VAX7Vku7NTviE9Rb13tKBqyu2n7KHQAC8GRHmtEjtqtuPMveZ75wexq5KyQQXA",
  "key22": "3NE8sLw6GgwgXNbEr6TQWaD6WLoy5JwTWpdBrJj7e8nnFMNe9REuSYo1b5fyhBg7p7eL6B311YHZiHAwN9yP49GP",
  "key23": "JrUra3AaxVGhSNgZtQafKRW1EXQirKokgCSZVpHVVeytTiho8qVjjW77TGZrva1FZrJuwSx5q6UwiKxuQpWxmfb",
  "key24": "56htWJa7A8JMVigV8TXEFKVSk27iVpKNiK14yHRwuFjq2ThaPghghchDV6PuQCyYiEperNvbRMaxQYbHhi7MQAPe",
  "key25": "2nGqg33zPwvGWHwyHrWsfwj1H8q4dCXpS5KZmonDwLXcwzds6yRJ6pPFquNXANoTAhprfo2qFtRfoQZXTGdtR4WD",
  "key26": "3tFHfYNjgfTxZCTJGLHaDVvzgkCuiQZvLDyPZCspNobEniGGze4x26czyJuUQtLYfqT1x1apnQJeUraMMcGv3k3b",
  "key27": "31PTUwpnMX2nXixDi4V1ByHKZLPYmrFwB7BtAMHbuw5sqpkjgEqMGuPJANCz6t5teL74jCmVBYLacaBXVoP2BPM7",
  "key28": "YbhcbEbFoqkBM5Zcjhjp1CDwk9wfpu1dxfYqbBvRmQZR2xbasXxMcWGfs2LGDYqqXP8vw83xZ6yz1zSKJMHCzyJ",
  "key29": "2qxfrZzVFkR5iFfuzetSXAmbZbaKTH1Jp3MCQaQnR6vdTyZh7GVnsF3i9bnTCqXQQKYmGQ23u9TiyDWNey4H5wkm",
  "key30": "4av5YVdrLgkCfe99VXphzeta1FXnoEpafmZnFmYxHzN1taGW3XEsWfo5FAeRhyhV2jG5PkYCaPT8HnUZMb4NtzVu",
  "key31": "iZ5MwXxQ5fG5XHEBunaqPMk8W9q8zJ5ht6ZGJ7T249mxCYG8udN9G7driU3TSCjhct9uYuZxkjm52GFr3znyTAU",
  "key32": "5jqynu9uVi48h7U9oLkVpnj1sNMpGXa3f5uKw9XSH4eA59fqTsPECMDXd3mnKs65ZYz7bSEdzNaZekuaFZqHWbRh",
  "key33": "2mgvfz1DE95NRWApKM77awp7KywMHcAM2BF51UBRvCXq5jiGjPdWHKam5iYGRondYghUWc7PNfdoAZeTRYZLoMJM",
  "key34": "5dekFwPCKnkTQW33d5RZRNUJNZbKETwrusSvqe5YKTcGeUFXCzGGeFnjbR2RocaLomFXEsAFmdPYfiYZGtUKQUDn"
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
