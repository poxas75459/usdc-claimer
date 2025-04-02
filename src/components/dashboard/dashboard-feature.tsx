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
    "3y6kgfQnFywBDNWVkBW5qjpX4XFEuJbEcEVCRaNjQvmQ2LutBfjz8i1uD3a8a3TKQACo8BWBNRw4dGqg7cb5fGJP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WD1ycRWTXJuQTKZEFWx9h6BKYJMbMDk1BSzDGUXd7i9XVg1TaKUpCirsYXF6mFHDrYfXZBYbmLrFyArpCNaLaUh",
  "key1": "4WgSVH97UnunvZTFavwNQ3PSVqajnQV4gH1AssthHiKGN16iq7yq7zW8wsfovaZurCAuipGXMb9aSsb4N8MZkrPK",
  "key2": "22E7ztNJFoomNmwPNH11NK6gecJMhGTtefcgRCHVqbpxANinU7docCc62AHvKV5mJxHRCTj1ywKpw2NqZsbtBRKP",
  "key3": "2fzMCmEsyXEMgPfZS3c8a1PioMZTn1rCcmFWmK7GFdGEGgfyEzEFdAy6CcDoWgtBiM4mz5CNdviQ4MukFVjcVRoZ",
  "key4": "3t3cJvXZjuHPWuddRQgLgZ4D7kyca6siFtJP4Poug23bTrUmoAhvemz23jvFhLrFmDzbZVRGsYhm8vNV2d3NhVsR",
  "key5": "4yPnkkfPkYDtSBF1qdn1nV4EKp6TKP5JHpY33Ph8eQr5oNWkaqvrqgKH6Gaie95djMMsDhn8c416Q1Pev7nVVTfe",
  "key6": "4EmQ7zHQYiTkuLzBn6Um3Bunco4EGXZKyvmwxfJWF8BEuN41yEhg6Ufqkzq9ETbTaqjvpKfZowgZowNMgDzFGPzD",
  "key7": "3SqCcVSxvhLxCSgbzsANQC1h5Q5Ug4mFqMxbcEPK3kcdWuPJXZpFovgp1RbARekEguNXenhDvdPRd98aHwodKpqC",
  "key8": "2ijvPswEPFXb4ypH8wzL7fvaqrBMAVWet4r7Bh8KGmedzkXP3QbcUpYisrkNe5uCN8Lydf2J65x6CgiQYTbDZZkB",
  "key9": "2wwTFEaerjoedevuV6u3NvNi62KW9FtdRWYjcF83vTxKvVYjfvvU4iCAqXtU775tArxyt39UqYWVkTZy5r8DNd4M",
  "key10": "XoGLvmGY9SN34DUw354gT7zLj4baFEUh5K8LBpAmVwVvt1t1oVmwt9BZ5ys9s9D5HCSH8jZLCfnxEnvixfGgwao",
  "key11": "5jSdzszSsqxKFoqwnKnQmmfJU1YQ8Zgg6Sf1xZtew4Nd84yav7uHHfDZ2pCFkwtnXYLCc5C8WSiAUBnd8wbzhU57",
  "key12": "46KKpn8cnuLkHdzwWAy9cArvn4ex3Z4MjXuNtgWnp166JNUDHykZhtjHihz1AEwAe5tF9kyF1W4o8LmKkF5mPJHf",
  "key13": "4z3tZFympoAEcK5zr4XrgtcNqKbU8eusZV2AxY2iU8dfoSLrU6bU6Px67c2WpJsWuvYu7952io4UqCY4fD98fGnN",
  "key14": "59qChwjdvDdY35857pWT6776ACcx5Ac3TPBPE2chfyv2nSbzfSTPywhTNFJqSBQ5h8sMDSihBst32sMFhtcwGTWn",
  "key15": "3DvF4Xr9doXmsMG554ZgqwGBDeuRyzKDTTzWnCPGNDCJi3qtpvCXg7kJ5doQghdDdSwkVtmVFLyMaZZy14sqxGkd",
  "key16": "3PvWv3M7KHPGno1db675EsXeV4K4vSw8n5Zj4NVn2Rbiv6xhN68Tu9GCyyTZHFzziUYEwb94HWkXEFmMU4KSLbnS",
  "key17": "59A9EGjXA1xvTFgawS8QnwxVuo242MofLCPydod5GxBB6DeYZntA7er163AouEH2MemhUd8SjqubSvfxk1Mn8zgq",
  "key18": "2Jt4N28mUH9gMi4NqDhtVTw8PPTqyvWHf7Nspcn1xwHaWjCtrcNVrnLLLNKgFQdCecavqMEN6JcsFZYjN5BVCXyA",
  "key19": "5XtJErFFbh1nS6riH3Nq2AroRkjngk1VZh6ntdKnd2GqeLKNx8UCcR4P2LbMXHgkbrrYiQHQzcN5oSoRwb79YGCe",
  "key20": "35Q6HZKC6xzX4g9gKACuuUz5KfFY8cKVLJifpWjzYgWFrjafMiUc9aotq53USyrBpy2bAQ2C2bPVTNEPkfBo5dj3",
  "key21": "54GCGr9aF5fZeSHQKTamDJWGxJnFAuUbYzcTEKqhTi55oiKfvQMriXc7A1xRQbV1ZVKRMD7DWZq4cUgojUsQ9m9Z",
  "key22": "5RT9dnaYgbB4i2rEn948ht14zVEScUFUnwsqWMGHLjXC7VfcUU6jZcQBQZEbnPiFZyM88NM39Tz6rAn7ysBYuGVR",
  "key23": "TwKJSxza65svcFs9MWAWdEnHXrCqzSqprnhLDE1rVVnhFZ3MK6xXUzuckWSpvbKBSoS4P3QNeLwR6XZw7jvXpUr",
  "key24": "58Bi4bRSTQWc72REzUWF8AL9bQMB9CTcdvFMWGowzD7x1JV4Q4ofWrYbxcoiACPwVkV86b8LoTpMWSL8LvtmALDp",
  "key25": "4XxdWYNDjZZTS88vDwfAhjFHc5tauiF8F3H42eJEB3kYgxozy9MSqZcvCY9HEq2FRSs54DULdmiwCXnRipkyeNnX",
  "key26": "3ryNUvtQL5oX79ss6SzqmmfRLFxJUjLYA7BKgNXzzBfSKdaLabtiAjQih9ZpYiYDxd8fkX26TAFhVTZ7QfrYxU9j",
  "key27": "4yir7Sit3ErUkHKDUV3aXodpNi7frsY4v6QQdLdcpFv9ymtAVBWiq39eBmjri1pxmSb5hwZsxcbxv2g5vmQ4EH8q",
  "key28": "qmxsahDueYTp5CSNvcpUr8nxYpFgWt5mKPfstakj8v7rXxkp5vW5ZXMwBHj7qyZBqQQ69AE32Bv99WqH3u1bT2E",
  "key29": "3k8gtk4EhGHcYkXuNeukgFPGyznP2pLTkakwYGbAF1WAycHAUdk8HY2Zgu28SLCp3kLX8ZABjN9fHMVQRB6YDhRQ",
  "key30": "28gSe364Ha2xSxeH9fjYa9ThgPwVeWXde82PVLF67jYDJrRFeq8EwLZdQFQR5fj3xWwKmvzwkhwy19qF7xiXa6Zj",
  "key31": "4VL8C4VNGKBRTsdjst35kP75AwpSaNbjwZhfS9yo7mfUKTqruhZszLYjp3v2oCKxNkz3LGtdFSkTxoD1RrvUXGg",
  "key32": "bW72znZBqb5BcUCHxGFuMvdGqogcJsPjWignG6cQ9jtnDg3kbprRK5QEteVS5a21m7nnL28F1G7VrQ4Zy6FMFQv",
  "key33": "4dsctb6zgMrufuam4GkgDf3fHboW9mymXhkjWP6hZeo2tiEzcXsrUYcFSJtE3TTg6Rwvy7qxgCU77WNsQNsTjoGu",
  "key34": "4vRWYsAHwVsv3Vj2iEKNKHjn3L5oaQd33kf5nw6quKHVA6kBi6j4crbFaC1ZcJckwKNABMxv4EGHndxboHDt76NK",
  "key35": "4hA6R73JE4rK78gyatyDhQkSAGQnvEZb8vtvpvg63mbVq45EVMzaU4j2Uo2E1sC34dte9pUQ4mKdDhGDM9C56T74",
  "key36": "3emBjYyXG1R7X7Uog5kNQGxw4G2YdbPNTYpY5V9J43ShDfzTuby6PPQSuitnrEUEZn7Lvuw54iLPTkDCZg16cyy4",
  "key37": "4GiN8c4B1ArfKdQCngUkTwFWQWdu92QC16e8LnZjYFzVUBVrhYFNMwcZx6yyj1UktkFjyfdoY8rf5fqoAg8gzb56",
  "key38": "2h5C2sWxrGY1BFPbVbPMfdvVHFMZHnMcPFz472mpXZHSbLNWkRjBLYFtwLbzjXLLVz8nHhGkDGTCS7Exak5zJ3WG",
  "key39": "4yJ6S8m2YqMA45YtpCDDmuoUBvQQMqEj4AYQL7RzQJcWLdEY76SrL5LC8jBNBjN7NkuDjEt18cTeSQCbKz8stzuE",
  "key40": "47CtZrcQXvVNkxY4i3WZ4NKcRpnE3pjygrMzYN3CSFYw1ARyLMLQ679dke1UTDyeBkzzKnran1W1NWXx1iUFufYb",
  "key41": "5omTeFnQNoNhDXTFx2udj5oL3bsMQo9vVsf3rmYchTd7kNF7psBBegyhk4TfGdoxZddT4d3hE5myGJ6VuizvVwhU",
  "key42": "5vox31bRLxYbwjjEwLZYC1HzbW5RgW8YGtsBQcer5tS96vP8MERdynqWwwsQSYpu1rSj55NRXpQryEMPiywAotCP"
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
