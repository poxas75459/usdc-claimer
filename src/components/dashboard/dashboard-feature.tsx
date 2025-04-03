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
    "2CqkzYsgxEssrYXLssxm3QwMYxFHRCQiXRDQke3aVgpLFoK8KvmWWMjiiXaMBW51zCyRgrv6HChw5CE9moCVJ2Rh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bawEsBpYcFzfgbjGvJZyPZ5gRzC2qnssHT6PSPxRFpfjnhQbvsQZKVR98gCHycs6JkxzugtyMHbgv4PiSLAJqHX",
  "key1": "3PRMMStmfy1bn8BgxKfYsToNec7W9ugfVJb7TCkrDxQf8ZsnEjjSbgkcc1fe4VvRaQVGknV1PzrNAH5Zogw2oyMB",
  "key2": "2445GjawzoYTfmSjUx5X4fFfh3SAQono4SDT92bP8qWaXeAsKr3oxfrKXR1KarLoSDcrRNWwrDkZ1cvj8EioZ43y",
  "key3": "4yPy78GmZdfof7rXcFZNp1yBSCHjcnanMnL6P4MG9EpSBqBUwTMWvvoawx6RDHEKzQLtLJGTrXMm9i8JYSmdcpbr",
  "key4": "44jcYmLPbmWTKieARBAA7unMmhV6ceMXaEwiWSCCM7vYDMCraPcipuhRkeLjHFWdMscCoJ4bR9vdS62rjbjBNe4U",
  "key5": "2wukC6oDrMzbGnpteeAYwXgdPTEBwk9S9jCbRuLjhYdmCYgeY4wRADAkGLANwevpub9eiNofjt2qwoJz4eyShafK",
  "key6": "4SKmgMYkgzUfVRfDtvHy7xcn7XyUr7CybxoHarnn8cARVqbZn25yhx5wn7idYncPAkoF8j2YEabfWemFPkzjVcCg",
  "key7": "2eupaTV519mkF1V4L7884arftbnkWgHBgfX4BnPLm6SQiSJpQaS7cyRJmc8bK2bCA2UTRsc8Ndnj5EEPmGMVfZdw",
  "key8": "58ccU2Qyo9Dsa5zZpFG4DSV4MN2Fx4DDnqBWbB9C5RkkG9nzhrGsi8tjm3z5ebZ9PxJovZNr9ic1GZtdZgqaryT4",
  "key9": "5u3X5JiVAiTjmza3dkb4NT4CJu4ha2SZrHJSzZqo1YcHMbHTFxJj7rnuECD5NKdHyugVAEt85WHh2vZwtHPPZdeZ",
  "key10": "4xg83afMr4qHGBYqU2CdocmQ6buxvdzjJEBiRuaDss7exRvkg548ukSvbp5jVf97WLwXMwMWz8bewENDePvwQcbG",
  "key11": "3cHPGJ2VVbhB7EmfvsSRr8hXn6RuJvqozxewEJb6PBqJm3AJyABDXepFkgdFU1yNWX5HqSvdX7ZjQ5xtjQKiAXag",
  "key12": "4qQ3vbr9MNE77tVwLazi76Qja1stYydwxUoY6CmZ2rs6TEs2T1ex9HZqJKgvg2zDoRgTjZXQ5DHXZcWaz4ugfTGv",
  "key13": "5wswTyqungPnJ7EMcbx9PsLusR27CGyyNgpNP97dAA9MWRoyDuQD48NrZXDr7L9YKyMTBd2z92xzzj1Xxfhg96Vy",
  "key14": "pu29ZDJuTHY8nWbCAMzDT1Ns2bGTteHT9kdvbbKk7ZZYps7m8JRcjrTCe2VoiSzTgHDaBysRX5Ef9ZxRFRSpEnU",
  "key15": "5U1mFwdm8qmqB2LUD1VitGavYjqFwiMTgJEG9bimb62FugK5PzK5Sim1R6AZceAZifu7TUgjEbX5NsGvCWrNa7dh",
  "key16": "2WTtdTDXfehoGywncUD4qZsfJAHkheJ98Hw8YbpxTxRSWJJVcJM6vbVFAhyLurXnHVJyK37dvUiv2U9QWxMKCDms",
  "key17": "52d6DoRyxVMXPeaRzgYeL3pWci5jLzdSxWKqNz1PogGW8uM6bsEvvCJKaSJX5nqvSqgtWxrSrmxgqsWHUBdA6CCC",
  "key18": "2MDfD8KMQDwUhgGNbSgF4NpJiCKMSksszPuLufxymgJfwjMVzi4bJ89SjRkxtpSHiNDp6MgJQ5xSLJwHMArp7GER",
  "key19": "2ZGNoX61ejg4gBmrqqFcgbDZT3bghXd9B12qXbw7H5bJzpFepSm7bRK37dtP5owoHrx6WA7LtQRKN6vYnZbHLU8b",
  "key20": "3uZgp5wGZymU4qEeVRg5eTyK2ZK2n5PZAHQuqkUJXRhoAcMwaAC4ZCXSt9e6P1ZvC2yBYWvnGZgxpyQq69Se14LE",
  "key21": "rdSgaiGfdkwpt4J6Yg75enirbZyzUSBc3qppD3qiSA5wAVZqTLGQvnfwrsU7iVDa4JetX7rdQh74Yd7qqpaTgX4",
  "key22": "3fkb7sxtVPzSbqHm5kHW9s4eBNjG5A6YCq2YQSHSDhPgV2J6yeXf3YD1uQZaPf139wCXrdJnQWYnLKSUDhxTpxzE",
  "key23": "36UXoWpHGnmL2crofBqgXsQ6gs9c24xeJuAe3Ln3wgbwnDrQbV9rVjj6Fj3FeGCxhd5dTTekc18w2JR7eL2gfcSc",
  "key24": "5fh1SJGtyhyu7ZaVUgmz4f2ZUum6JuJK9qzy79gJz8nemUkz7t7fNJpJXv6HrN6QDG3bG99qgL35TV8PP2Y5A4h6",
  "key25": "2HqQCXrL5mpDyQDr9DczNBEUa1KTQcJ3zHwDkAGTfEacbSNryvWQ4G6HefY2RMFXqrpWaxUAYDMzmYvmYPckGiNm",
  "key26": "5km14RUReZRYLB9E5RnKRZFZ7qsJ86wNUBN5TtgzneSmrUyGJdAVt2J59t225kEazDBceMJduDoVVRG55bQ2T5jf",
  "key27": "2Yx6mjn5b4i3i2F4AMy7fBRPW5XxYzwLUrzpuT55RwgTkZW5CFcqN8DgUGyExcaFJxAy1ZN6i7pnkMmfLDdV9bkU",
  "key28": "2pDggzzfy7g3Qrx94r9xUUsnzRYVwSUBAx1L3z5AXG4578zLWMcRfSCyCVXuzmhgQUwQosV4hwg5kYzzGc1Jo24N",
  "key29": "67Avu56U5weSzBUL7oy4AUQ73hFPYw94BvLrUXr2wV7sjY6jcrDQ6cv24oKtXwcowQpEAVCmoLH9s95zioaE6xJh",
  "key30": "3puLp2YkZ4qzTWHZLxQpZbKWTiCpFeBzU3pjh1n8AXGWcuD7eYzHq9rdxyqMwqLFJbPbN4q1M2ErPXbzphTGS2o9",
  "key31": "44y9BfTNf9JK94ZcFiQ3qJcfMmCoApJMm1rXycfJ2x2WEXxgeWY7z82yPjS886GZq9GAvL8EcgXZQTKAiLA4pucT",
  "key32": "39MFWjhR9eqhkNhCmvFw6uxLEotLSebp1FbMzb6RBHX71x5YsPRY1BJ1Xss295CJUN6HkgPpeAk32zPxc43LvDcw",
  "key33": "367Sn8bYYomKuMLQuJAyjo4ZtHPYWBGw6WTR8zbUDqdkqWzbLAnbLxhLNtX4VCc6n7fytcxmWqo4LAWL9WJmbK3a",
  "key34": "2ooDLVyKRgoKicH6DJtXX3Da1gWjzJKiUXpCZcpbbezaCcP1izv81651ytH7gzteXgQP5U68o6AUhQSRm8XgSPfC",
  "key35": "3iVCp8JZXvxSedqw35nDUaVpHaLdAs2RBpEL6Zhr6pFAPTk5DaN9vuyDkef9fr3bFJQH5SirkX1uu9Yv3uGW15k8",
  "key36": "4ckj2BK892rvVioQvB56Lr4ZTkwTvFTn8hPJQNifdJsieX1SKDoe3Ftzw9EWTJGpx7xxmzCuZUPxGSnPsVM2S4jJ",
  "key37": "2dp5wKfvxcpEceC96EcoVkVPVSsWeoXrapvYsGXnFdhPXSR4SWwoEPrK4uaoTJEF4Q7FRPTiAoh814XeMbzKdSdg"
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
