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
    "PMhUQqy1EqxGhpkRACXn4KTvQxuxa22KwS1224cPrKEZNhW51udtyEEPdpHJbScBDRMbWKEjSJmaFL96awFJfXq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tghyLH7w2vADsGb4kMo13wRAPfZfVQeh8UhRFjrq4qC8exHfTSH5B8kYscJA8NXyKoqKYfXMFcFZ3xugnByEn3s",
  "key1": "UfH9xZz6Evj6utTG7EJ9Lnrhza4XkfRkYPsrPRZpnNKfbE9XTx9rGu3zEZhwipwAnAUH5yR9non3SRUtYE6j3uV",
  "key2": "4vVUFbFR7WhSLZgnxe8aAL5srb9iaX7TCPHAboWzHjoXJnXbEd4qc8UU6iVHCiYVVAUcogK4EL3U6xY4meUUE1tX",
  "key3": "3xztDFnYDZFtUD2TivcDG11nYaNhzsBYwgLykHAYYGhmtwzXremxSDZXWw98Qn8CWdzTJH8TUXK4y8dYvVffK8Ge",
  "key4": "3fsVTGtQt7gfwFgZdPYRj5UmxpZX26yXBNtR6bku1mQmzZGjzxoNxMJ86HXsaX5moyPFk4iTBseuReifB7wHVLqb",
  "key5": "KttsMo9iazoccTAmNooPUr4VY38pyXjmnmJt2TMvLkPsJ2pcjvMuyV6UVcQp9WXcjLC1Z1oDvZhqhmNZJg6hYWp",
  "key6": "2utz7TQ8UesydyVK2Fjiku3JTU2pZtP6Rfn7hAK3M3sJzaKhM7GunYAhQXRTi39vT6AbPTnNL4EnT9ghonK3ZWxE",
  "key7": "2niBviAxzwuLjDLFainoadZPtETYSJAqWFwk7o6k4epyfuPQ3YKcKjh91S7pEoF4QwK3B9WdWPPUCYo1E7BBWUD3",
  "key8": "ne1mZg7dHAGRzCd41yQXU7fwB3KfKbHeeodpk2QCAbiDW8ntULffjr3SRGN4waktmEJpJtj2hof8MPbQ4kGfzuQ",
  "key9": "CCXgaH8Sod9B3gcmveu5QcUonkCtNt3RieP7yxqQvkf3DGLvQ5MdsJA6mojcT5N982BcqJgiAebfmcBzJkWtucx",
  "key10": "4PiQ6JpCKB5er3tFr6NyS1DLr5JjjmLjDyKegxm8r2uRPqgbexXr1KhrHisuoYFUxmpQAUEMGdG1VwFDL7UaAbvh",
  "key11": "31tNJShkX2PUq2ovrXdLjCsTV7X5xmpSvZnvJt8TzU9qp1e1Y1yhmfQDUX1a5s9tiLwjrWoCu7vpAbAhpirYZiyE",
  "key12": "3WZnLeTmcKLXh174hfgxfj39hPPrmTnvENuqzoyCu55LzEjYJN8ecH3jsSfKEjU1bLKTPTzKLEfscdHm7d5m7Yuh",
  "key13": "5jUWJjVJwLTr2wMk3px6QS1mQHed8nFSsrPLBKkp2gPApGAFE7Xc4BAY52HcH3RgeDtwXmKC84J1YjfMJQPHMnQP",
  "key14": "4WyACNhpinnfrgnnrXwGMjZ6xDCcg81UQiny42E84Bnch7FfTz3JU6buPF1jPvLAGYLmyDkZZPKV2cJhPNKjpYDq",
  "key15": "8WE9nrhozawscDMXo6CTYukrVo7x5tzASDQFwhEzpKdWFsVJXeVQiGA2BkZF8FqKfrUR29uus8RLgbT9zqh1eeh",
  "key16": "3kxN7o5276FM35ZHwwgTY1cZYGPAPaT6MiRF7Lmus4DkNWkxo3Cy9BDbg9A91fcn29v4yT3Lc9BMbUWALrsU4FZS",
  "key17": "67nF2xPUNsjc9asguH4CSQoLp37UFjppE5H7xHJsY5sUngPVYGbD9y7v6ZyURg8oDK2w3ikGHvf1s1geSgTuxArd",
  "key18": "5yVwTs1SPDtKQzLT8VWscY12mKyZ5CYcY8e25Et91MaCXwvrD53hPR2JVsEmwNHnEgzoRERKsYV7CBoxfrvZNXGm",
  "key19": "ak8U8PK4nJ9K39kJzDFU58XB9Ff456KCJoPeRjfhDsdkJN9bmgopJcGRNmpPeWtss55ToJmZ2BYmWdCy3qm5bep",
  "key20": "4SSP946mbGcqXiGAMnYr5NYGAYwbHtDTofL6eFXMfGjagPoc2mdT79fiRjwer6jy5DU1LGhF2n6aQLQnTr196hwH",
  "key21": "3etLTSrZjGxoniSLxmfUJswwpJo28cg6i5LWFCbDDxYqvCRxbi58C1336o4SCVbMmppz352aN5hbBudWQKjZRSYz",
  "key22": "v2fsU4hyWjK1tFdvx6VrG3TtHmq6cZxCS6PLTXayQPNfYhXATYiwzeyTYYyaqwBWwU48VatBsXKuWpzHyNWPNCp",
  "key23": "4KwCu5FZMddUQaLjNqYB5KBPhUbBguSMx1y6DmevPW2pBFYRvjEy14oBE54pzz5T9ZCeLHpug967fxjbtz1fzKFA",
  "key24": "3F2GaWao7WeAJswRwPe9wpLQkHDRdiZYE1A4USMa5XrU1CeRsKeXEm28i9Cw9pNbSLwixL79XbYYb7Rnyke8mNdb",
  "key25": "2WZY1TXSqycaZsG72Kxer2kFuhaYKjUHzDa3QoBzynv4a45E7CUVScxCY8Ab8omkqAgwUuchysqiRRUntLZwekMt",
  "key26": "4MukKSCcAz7hEyLAhvMMRzJi6h4JVRSETs2UK8PKxKRy5UvRrmGrHNd3MQQUBefkXow6pJEhQ1sypDefnWZ8w4X5",
  "key27": "4zBkgSj1BpX8aW4nrFbsRtNJzHEmG6tGXLK5pVj4vL51r4V2XsvnojQdY8UYJkLGcKtqFbHkGYPUiuoiurmajW22",
  "key28": "5KU5Ke2FUeAJdVLexqFq1zPjiosyRrnLYkHBh9iXQDzHbt8hhNqpkHczQf5Ai26te8Cjs34R9hTnzu4iJfRJWmru",
  "key29": "yYEm8mtVFxgfBpAtj9kNPzqneezguDjp12fMgSVshdcQKVXuEwvcZoS5xwuUGpd66bi2nXWW5jGQNGy9VN3oqxF",
  "key30": "4U2rWmkfcjsTixBDgE3sNnw6o4L7HJkCSsMH84qjAbKCaSZbE9a59SfZ4A8RAkkVwFFayNCJZQs5G5GvRm6YWVX",
  "key31": "55UiQ5obPQHVfy3Ep3bPnAhJfpyLp7CEiHq66ajX5sGSp1kayuafP8znofvPEo8kf6cdwBGeHa83zdGSdqPveM6r",
  "key32": "47SKePSM8u1SaBi7fV6rPeMiR4nVSVcg8pL4hLejYeXDM4qn8XR2wMT9wvemiTbzmWevVivCHPfyFiAHhQ24QtDq",
  "key33": "2rwiE9h2tg5LArQVvgZKbw5MR9qhuWbdy5dZiPZfp32CLaU1uZs3ipiTb7siWYyKrJ1uDmTqcp5soRWwD9jsU8QQ",
  "key34": "2Yuun3Po48AqtxgmWLVLKQhgVB8gxTZQ1TyLY85C5UQcAxBAELenUkA1idjiBxhw49zSmUEnr4XGxW8TW8UJb6Zk",
  "key35": "5mRoTZvGXwbG7SoYRkfL7nKPV8Gfdx73ADFxvh4QxdFGwhtmTjdYj8R6M57s4QcbNqRbc5McCa5Nq2itextrXstz",
  "key36": "36ViFHbE6WWtNEbvz3CqqYJVjU8MYMTWBywiaQzhaSSd7a6gqrnkcdYYBFwiUZA8NyesfUES3x8cpiycK61ARepx",
  "key37": "W2D3pHiTmnD23CAagZJBc4Cj2734wKY7URGRYzHKyX5Do2bDRtV4Qi5HQSLjhQjBoTGqGEbQiEvzLweG6YreUf4",
  "key38": "ckx9MtBkzh6b8pdoiJDLhZ4XDCaeGP5h3Ebz2WkoFwfFXuP8PAKskxUauboWCFM2dak4MDRp4zrvXj9nw7d2Dnr",
  "key39": "4GxZ8C7cg7gSWR6fcQt3BzTW7rxWdda7MgKjPNz7cxXwUoik4agNuZVp9ka2s5PQY8GzPAbHCCkDDdfmWtH447m4",
  "key40": "2HorRzFDY8SYou8xUFRomURekTxU8QiDw2wtiBkWyTBEAbxpSHjJxQDoMj42WvnD2F1TcPvkYFXscEnci4pQYcJg",
  "key41": "mfhRzSG9BJBm5CCUiaTjvNPuTgZCntGn8K6hLHcZbQLma8AdMLoWhK4n85GBXaWyhWmrPLVK5QxrS6jAVg1YSEC",
  "key42": "3ZftnkTpW11GniqDTCv7DD2Qaeqak5WMrsUz7Nx1JRpWrugNjoaCNqYKp6BemT2zvmwAhXHdbPZPYv3VD1f9Re9G",
  "key43": "3adWYgrPjXtgWEx2xUKTSLoXxyuzcGVsQvX29qvn7iQXiYXxopp9iscgNmB87Ja2ZruvEvoU15VhGmVEiyRYiYPv",
  "key44": "4K58FVMRRcMCnw9MRdQty5rBHqxiuFFnxKMxJSYqcH8oPbX3Q6qbLFNYwcDUpkyTNDh5eofNvMF2mFkEp3XCUyZ2",
  "key45": "osWFjstwoCe6BFpVFqVrQhnfqjax2K49q4KGzdkvvsf1iEBsrLuoNH7kKJDLMXfGyjdTM8v6Ym8F6jaF2YA6dX6",
  "key46": "iocKJYDWiBaHzJUDXdUoZ1Gjg6QinbhgaG3162iAhD6SaupHZAfKLTUR7THYzCpatfMgim9uHgxmYt2Wx3Vf1pQ"
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
