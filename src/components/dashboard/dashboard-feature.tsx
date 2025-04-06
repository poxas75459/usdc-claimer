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
    "3viECPbnUKq5715pBYf5zcHWLZEYyRXYHbC1Q6FsutUCM1jxw3CczVxoTY8biCUmNPEtbZSWESDW3CezfPs14iyp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MGt997Y4b9BJDszNpR78P9druFvcqrghvwZgXX8NTF7tca2QS7L1ZFxpByt3CSehZh7e9vB28tAh6SXs5QErPh",
  "key1": "mCiJGArLtnHzyyMK4YtC7sbcwsY7XxpwujbfQ1wV3PYEfVccJG7soZdWGV38yg8FA1MKRJtXP93aBwaHuuXLMH8",
  "key2": "46VWqHz6fPzGYE1MfsMxRkpavGGJbAat4q6eGr33Uh7rbWvVC6mRY6sKyQh1Upzp7eb1GKmvprvGXXVZoe6rFE72",
  "key3": "4RNouc3fL4C8rRa4cJFrCcsHmBN1xMonZQWbxNQX5jR1xz36iXVQri6qdjeHXjz8jvyQHekwX3sULZZ4dWd2xutk",
  "key4": "5SXYXAzD5f9RyBixZ5AgLaNhuPUinUvYMSWypzeduowcFPQzwUPwnpzTYSLLoc3idiVVpoWUeTzJ2yycS37LQSpw",
  "key5": "3GtYA43VEMp9tEuHnF6569E6a3yN6HQQsBcGDK59RzvtbqRWBouLJPwnsALMKr2UJNCnJwv7rHNPAwgt3oK63DbS",
  "key6": "48bsysvybY42EtmQ9AHNf7756kiXGN3Sz9ddKfENf5kx98xgkBAcLpGSEuxV5pfCx7pWrjjV31hWrKeJ5zZm96mA",
  "key7": "s3zS228nF7b4jJrEyfHZna3xcBKrH61mKECRkFuAMTBNgHAMq1LdLMCjQESRrWH7KBqaLikjpb7EzYvuHy19ucn",
  "key8": "66hGQcoXetRRNuCAmLcEypB1dRHEHjF8HerARxyFw5tgoqeYunzfFbkxQ3Ut23BEWZkA4Gz1XyTB3JjQatWdRAym",
  "key9": "627KpJXKx47N5nvuBkLVKtwPxd8cWbgtCiWhvX8i5U2Z6X1eBjWmDh3CuwS4vXP1a5w8ME2FnhW91vdwYZhHfARk",
  "key10": "52ufzV6ER4AQNYviVgbqNnkLdBB8DPZ8KSdxqC7Ww3QQ3q3ziETv5MpcN7oqhTpv4rJ1z2QsZmnQmvd7ykbuFbUA",
  "key11": "kHszEun9L7gjjLkAEBDncGWrZDNUxkUCLp9hb4DgXnRHxb76WcSwfAsScwFUVtW54D4Ayqa8Rvfixf7G1wPSdC2",
  "key12": "3fhwS4VymxysqxtwVeFatnf2sZdooF72bgmp2Ks8bBArHxPhuJCYyP4pRRKiCPTD4RTYdTyhjHN5HJv1ref8ABXj",
  "key13": "23e4WQ7dBFcLdVELnL5S3AoWYVqnYvDK8wWTnL3HDZpJM85fp2btVTs6UW7rVDwbomN4pD7oViw7WAGML7iVqt2t",
  "key14": "2Uxpb3g5u38KiP2JCqCkhFvmVQrdWvoCoqoHPHixAkZfX5Foi9z8PN1rtUudKg4VbUiD6Lt2X7SUScBELoy3LQAT",
  "key15": "jSBVwSAZxgg1s4N8M1tXcNVWjjPCE2q5N4V9a9upeuwEv8ybLs2bY6S7L7rnNjpWbZ3QKZPxnfCkpaBhvk6EDYA",
  "key16": "AiZEHTNs9BTzYzJPCD8A4nsJddvLp17dKrPHGdnf4KreBQ6AWo22KPAoG18KtfiH1efCU2w6qCq9ssVDxwZ9nY2",
  "key17": "JQLoHTx7JD233cKe9mSELVaToXfekJyn1yfGBWLo7tKcN3MneG2zi8nfvZWXwo4UZD7d2QZomNwWM4XTyXpQDjn",
  "key18": "5WE9siVbY8Zw4rZpQqf9jYPBtDGmciApt9BLLhyE6pXfLWCfF8U11L2xRzCEGzNHwVgy8zyEbJjz7JTgDrP5VptW",
  "key19": "2LRTHj5iM3vjzLtBKr8gEP2UPg4CKTVxabRuGWqnPyZz3kb6xiaWB6fsX8G1oWXy9XTF8rnsSMnnsSLTZwDqBoC1",
  "key20": "2gE4b7t4Tqnto6yqU6uqwtxmMWenBFbjA31DYoYHTNove7bfn5Biw267Ksna59HgrhHtb4HSX4BNYQA64Fnj1BV9",
  "key21": "4FkQfD8vhANTHhNYcAYvX2mz1kK4iUcKya9gU3m35JHq6rE6CQhHtaDQTGH4qp1MLjpSsdZYUovV9vTrHQkhtXqi",
  "key22": "EJP4vuwQXU5iEHnK3y6TWBAWCyaus9Gov84wzs2pM5JCokM16kmokK3nUAe9qHacRYJmBEPyrN91djMtGbgp8RF",
  "key23": "2qprXGPzyKVpuUU9W9uvocdemguJR3LVjnJ2ikMwEFkbio6gCteub17g9VyTJxWXXYcneY4jcFq32nHeKtKbxSfn",
  "key24": "2zhGCxB5BTjDmsUtYeX3fwZsHGhQFaWiiWyeMR3aH1sgSfUqpXQ5QHskwjmtZ3jnzdYFz8YRaRf1Be79mQT4c66X",
  "key25": "fu9pwxJKCFYvc9psZCcG1e9F89NMQnvFHeNkj2aD9TWymNbuMpUXqsq6TDExCYVtPcYoS17yHMhoh2UrsSDrzeZ",
  "key26": "2Yf7JoBMcpG6Bc8nN4Lr9JD1fyAhdxNY1g3EiH3UMaGYgcKbTk5DugL9daNUZbQBYEoutsUqLeZS9DvXQqvo3WTW",
  "key27": "oG39ATLMiSg9keS5sNSiPGehygTfqfgx3RgHqhgFJhCX6UiAxjy6frbHJEmTMix6SWudq144DTT1yM7jEe2FBcv",
  "key28": "4oUofbBjwm5jLaiEjnoJe83tRZKLmi7oy3NYtV7jonKVkehse3Sm3GtqXFkk6ibcN4NPWfL2e8RTfU1AUBMkUS59",
  "key29": "H5Pg5LfDeoeQgHSMBRTZ8vKfvjMbWiz1a7SQYniBiheEPjjGyv2Zt5b6WKuLUxWMvNtJ4Qm7o7h4FW2mt3W4m2P",
  "key30": "5QxjpCuEdmQiHrCw9w6PujZAy8gQkhSJYVN8UoQFT7RZSbu4WGuDEwkDMpEY7NHRz2BVrP2izbnVCVpU8CagJ8Xy",
  "key31": "5XK8uaSMGdV7QSAB53NCLUmKpzuNKYGeyPGdqm6VJqQorK34MkADAbyPgm89sck2nqfJUchdzTxRxwDAVgTy8iUN",
  "key32": "56ZoeYsLAFs3GAzrdtnRLdqdPErE7Xx911ce2WSs2dxs7iVpMZzvdwTJomeXBdr4xu5ieikz8dHeZiLqLFQ4rWhn",
  "key33": "3dSQLnCERtXgJuiqHVLAeeYhnr2L8Ax1ELUzEt7WTp3JAQMvGJNcbNJPE2NZFj2giC1ZKPX6NyAtFpnTPR7BsmsP",
  "key34": "5E8S84QEfPxDPBqE2cebXK7dZA32Qe219AKHVsHzBrjda64AwB4HUKRYHvW4ejgim9ov3RrHmrfeGj1aC8yjRerh",
  "key35": "K4hAdbgM57txEuBHnW6ufw258EfJrHVRAV29MB7PQ2h2hGCERTZKHY94syquwLhzJN71ExYef7sewiNrEm1orgm",
  "key36": "4oYpYLvh8sTA7UnUFARGXWfZkVtEHzP6R7kP5C3aJM6rsQNHCkv1DNWYa61f7HWZVirQkUEzx7n8XoJHUHb1KzhT",
  "key37": "3Qf1vFgE7MZzNatJcwbRLsTsVNh5TixAK1hcbRXyrEX84NoWdRBXNwqcDha8PdEMjgYCK1aKf6UvGMzCdLCV7eWN",
  "key38": "3FLEBA5BY1PeQkE8P4a8DzvzLwUUBEJUg4aE2GDzkMCZ11kpZaRd9E5WjjfGjp95p7pJ8Ade26xo2yAh3r9G1ptj"
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
