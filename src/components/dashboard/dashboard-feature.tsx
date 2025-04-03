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
    "2WZU6GMrWvNVpYndbhtWY3fiLd5nDtgQnRYmnawTGPX4b4Ku3LoTt7gu4T2iDXgR7grnMAomwogV2QbWgeYpfj6Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Jg8TgA2qhhFN4vuiWBUbWxZFUAjEbfCVLmrptYFVaS1drYDKoWojiksLR9aD3tqKuG65NqfEz4saLr4ojuawDCr",
  "key1": "4WBF8A5DeYA4bAUVGsa7ueHFUnBHtJcXGgSfPk74GCjvnKfYeiBbErzJAPP9g7bWMa4kqB2wLZaB5mMpEa4Y1Fkd",
  "key2": "4zAbUSBGToYGzDBZ6e59y3mn3s4GMhKRDwV8RcCHyev7MuF58D2whP8XsHaYDGN97rSbNszVP8KKqdcm7sDhCEv1",
  "key3": "91FfGCcjuJRKDsut9rhZQw15ztMmD9kZaRsWQRMnZyAMLo86HCdANNW7T7t4NsfxHZ9ut3U497ibvoaLZsGZXXk",
  "key4": "4stUMJjx5Je55F4smU5JuG5kMbmyp4nASJHHqBwnqN78oaE7L9v5j493PSx32NufPR8pmUxGLw2NuXgbRFG6HV8b",
  "key5": "5wtkmwp7P1aZre5SpLjcVtfcZWJczFZ8sVBCwdpjuWJEUatvANzHo8UwDPvkH9envw2Zv9zQZM2nEY4CJWoAcxEi",
  "key6": "48qVKHZhYSH111Noa2yPp8Ux7ccsGhBk1dHAw6XDEARV1pcPXgiCnPTqpqP65YAHA55UpciJpxEDh2godaKPP6yk",
  "key7": "382bZdTvSmRCn2BFwHJ1BQCRTUzSbPtjWoW77o78NmbnT1TKjoGtJNff7WBX5Y8MtHSpVkjDV3MagdTWScxi9pgs",
  "key8": "476TLHvk4iu4XzQisa6CTREj5Z36ymiJ4Dfp5XDTNcDYok8svhngy5mgnF9rsTAcUd5J5NMjQgNbJWizHBGwKLv4",
  "key9": "28xX1tk1B3CTxheeeiHKJTrfnhWp1Uyzfsg6ik4TRmw1Nmg3XaLMiqRmR8SrymxY1k4DJAKuf2m3YjbMBAxSdM9w",
  "key10": "3rCj5vrsJrugsZqKXFSTLGGvRvnczdyQFec5YH6MpfQ7xpBH6ZoKrjhpENUCuoW5Qbyg55o1fWtzHMEM3FoVv1zu",
  "key11": "4Tg6dSufMGyZbygAS99YwJ8oHAmHr6JHyyzeQYt6ZW6MUHfyrjgHtggYjuCvhR1G1sHhW4QSi7wbaHxEQNMmK4Px",
  "key12": "3cjMhXa7H36mkvCk7hNaLpKbhknCPwX5ovPK4WNcpcfuvg1omXYKx18rCofS17XahAh4pkQjJYpdKMwiXeYy6WMK",
  "key13": "3bXEqYNXjWaD9WfpKDsW8Tct6BECioQBQthXzHqKpsXrGDpGDAkKEk62u2kwJtFUVqaskK34VTGk9RcwfUtkpKoA",
  "key14": "3WW9XkYdANYdEPk3JGrbzv18M57WPtwLEspZLdXwqfnYB6MTMo1u3XNVUBJFKMzWoSPsPGcfjAroiyhnpcjXp5K8",
  "key15": "4398snLT6aXeUCSUBSJijapJcZy7kLLE7RZdR2yrTWGByJoZauLLFDiBHaRwAAQxtm677USvTE1zwGzVt9ZMLt9a",
  "key16": "RpH6zrUtPikomhr5XAhXYKsNrBZb8C3aWkgWmmF65fMzbF56v4j3E3wGWAbp2ZY3Rp1vH8C74fgYXTax5kybGs6",
  "key17": "4Q7fMMepBTGDWcw8HwVoKstjuWzVXWEfSw6P2F7Nja95WGqZLhJrRaWqD2DJMVZU3oJSNfonzkMgC7x7LhT66GsL",
  "key18": "3VasBBSVH89bMbsB5b7mJutDrM8jdtFSgY6q5jE4Lcwup2qoBNkXKKyp47gF5U98wnmp1oSExyA1MaivZGg1BfUX",
  "key19": "EM3Som71VZ5ps1rYjJUjS9R1eWSsaC85HogPSo47G9EpREA6CPpcAPSDhsFQ3qicyoLeEJxtD46QiKoH9ZoKBS1",
  "key20": "6iG4T4R7DTDYRFHDjv73Tom5f1NweGUzxx9pzDwWup9BmShhx3wqJTRh5TDqfa5Dyb9ez3fZZ7DBrhm1xsqqvwh",
  "key21": "5PUtU7eFa2g3ggCewvSWZr79iqEHd7FxaDuywS9XAvVgjcX5mzvLvGepQ4RQfZkcpS6ddWgpYq4tizwUYCrSxrZw",
  "key22": "4vZdA4mNCj8AY8ub4ErK7AK9nbgbin6Usv467PiWtoWdTtdQrr12yWR5zqoEEkcx1jMyEtxAeGR9cJs3CxbzLigu",
  "key23": "2VCMegw9r6dPtib8JkRW4zw8rTZ1c1x3swQyPTHgkabvsaeurSssqMzqHru6YuX5axavH3j7UBKdLjKsM6tGCkB7",
  "key24": "48B16BNKTk6cGnKT51g4Zs66spkHu5n7wESxbyvCJbBZXMhsAGsRHkPrFrMsYdVZmAj8PiGgxM6bM5VkHaLWLTbo",
  "key25": "3uLfX7Y3UG7E2KRPSbGEemAm1Y1TmsFthBRngWGso4NQs4Ts5hbo6Kbj2JEn7QszsDU2t8YAU6NmTqjLsgNrmvXE",
  "key26": "RDfxwQiMAEpmBqBp4sBTCJbxhEQ8BN69S11T3Vk1J1xLRpihbMMPW47RMYa7DiA31z8zrKnuKYFzHDHVTC24dmG",
  "key27": "2vQ8LKNghN1aFcaeSTDMXYzFE6vUudTjZS9ubuWGB5DXqByGsbLYQWcCRRKqnjQZVMHHHUy1zJrg3tmRctKGAUj2",
  "key28": "fn1CTii5YBmzHoXaACQ8mCcAzvpp2USWiEjBVM6J5e9Y9beDUaEmL9P6EEKrTFNE5yeHCZPkWjW6v4gHXf2b4Tw",
  "key29": "LZ38eARQsZDdRvZ5M9twCdnQMS5TueE9eYAtQ7XxgJ3ADo1wxpE3V7ou1mQDA4W91k7mav59KHcjiqrLJwDaQWF",
  "key30": "2Bw5MuCkKaDnc8u2ncy6Mc6iccstWrSmyxGfbMFhBi93Hfrj4zDb7r2bU7bsDGKXXHHs4SzMJvado14ACLMxzKsH",
  "key31": "sQirSftxy9K4zBVL1W6DndZW3yEgP3AzGsVHuNgzXnFgmwF1kSF37kAjsmVJUvKVLrCmqrTkS5xGX6e61vYFzEh",
  "key32": "3ZPJzwtuDPq8gmXQACWTLaDaJW2A7NzQUmziTk6z7ZC59Unorz813gyax2TVQ8owZSG2SdZLjLpMmiuygXyzDKMX",
  "key33": "5Bko2S3XMCwfL6EWbnR7oArrumuzM137Zz1jDDcec2xFPpEZCnUsD1xFtiNnXFKaHLfad4FdvFADTf5kzw4DXCy",
  "key34": "2F3KXb1nRn1tsLUJWcf2AKwedxrJxseiqN6zs18mzBPSki52rkqQx2Fdf3jmVGcn8DeZDuH1VA1HHUYqa7mnmkg",
  "key35": "3KFZ9yRwaTu7k2Y1ytmbwY8ciXnXDwruFCfUhiFboocc3p64WGPRGERZ2UugDnqAUMzEyPemkZMj4fhEMcZ5qHmE",
  "key36": "545TVBs8i5Dg9MFTxgnMFUqhFxYMuT1LMGMYggrtnyYjbLwUvfXyHpwQNVTLHw9pzX34wsbjcL32aqiEG2F9eddA",
  "key37": "36XuUV1muk8T5moFBuLkifF7wG9hm4D8ReaMMMVRe5puntLQ8dWFnPc9rs49kMsJrLwu5sjWgHoL1G5hWuRksrsq",
  "key38": "43uTKQsXg997D72nCV9tZKcCv5pwR7NydPWvQGwTwdXVdPqAxf1Eix7YuQApp4PPfMwKcgGQuEshNTddcxAhaDBo",
  "key39": "k6CygrjUe7juBN5PfAuYWytLNwf47s484RRJVPQbwQQiPF6ob97WQVxUBRytEETGJawLUdPQCfnUdFhZ1dCw4ZS",
  "key40": "2HYLFrpBfaxYY8EVxH7hzH6RdFaU5qE3Wb7LtYZRENVAMr26foMxwq8vSvxkGHLGB1YjqMpfciKbT6HykHcnPBNi",
  "key41": "5qSN5PFyuJ5YYpdMAtfLrfNF2Juj3AQamQfUjJhfBfufNUxA6dNiZFW3K6VKA3rDFL3FeQ4UVvbgwwWxTrxAaJni",
  "key42": "39YBu32ZAjrzMZeqAxdWbXYWajE5Q4YkQ9uA1hJuG6yrPEEtHYzbaLMmNVqR37DhVkkgad78zFp55cwztPrsWNqJ",
  "key43": "2RHZ6mcKuBbqoEEidBqHfMRQdC4cQnGE25ZBHbELUPkCfsJvDfQ6gD3HxVkjZHyAuN3oi9WhzWro9uTz6uUpiQ4n",
  "key44": "3GX5RaonP4oe7zCkHyYRyYiS38Sgo7pzuGeJCiQTgS2eF6hDkDuegXNvGQFMkT2wpqRPad1EEwsZvvWJCqXjwdNn",
  "key45": "21TW4ZQpsZjhSGB4sUWS41nA6ArHXV6dAcwXd4ADUHWb8vH8mJWdNgsANkjVpLJgfkxk5a8kUCnxk7SLBy3WeevJ",
  "key46": "2DvtWE6vwcLZmE9bU8ZzqryutArdqdBnHuiUKYXmwQaBPB1pKkFtdKtRP7oYgmRYgT3wb8reVaNHkVEe7m8vCyBc",
  "key47": "2cXm6wLziftCvoehWLHWyWEdvYa4evLJ9tJ6aiLm7gkwKkaUS2w4GKM7L2SUo56G9ZoJuqdeq3fcGnLkbE8YzQnz",
  "key48": "5QNc2nXAWP46CMo8BnTmYBmPzXJ4wgHgtbXfHYVsYu1WFFF8jst4S9ADU2xVRRYECGp4QMNyYw5rSaiQgEro26nh"
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
