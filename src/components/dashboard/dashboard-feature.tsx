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
    "3LhpTjjsnzYC5V41jmqauxPz7Qztm7e6nn93XTNQ2VvXKCnGAwb8LgsPGfsrbp68qN9FbZDwosgM529YTsmgpJbm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RuCJwG2qKe8yxrmKrnHhBNFs3SbMHjmcuMVJaUwgARw5rMjfZu6TJvwi8TiWaTmsF4L2C1AHjVjLSnnD9Ptc8GR",
  "key1": "2t66BpkFkujQzzyMH6zUkJ98vBjpHAXiC48tDVBDSmmDG2CLhAjxTtKoryidMdwRSaWFHAWgiLR2sz8iv3bQWpmk",
  "key2": "4skaf1svzpEkKkET3us69iGE6ooni9zANJRcf7hh8bYrCmm38o74T6qVdF2SZBjJWzbJwX5g7NnoWdPg261k9qjo",
  "key3": "5gsNVVQkoWRGw9LDccJygAH8d9xaqXoRDZZbyjvu1FykTGL7Udq8tUQThjByszhmYL4YzyTLeraH9tWNEsk4SCrx",
  "key4": "4q366cZXFTQSpc6bYFz2kvLBDvsuHiETfSsoqAMAXGPUFnjKC3cY5SoBgZb4AnTuFDxQ3Hq5DGg9tvBSYkDQ1xMh",
  "key5": "2WQszNdEPq2E9t1U2Z15siqKKZfsjSpoQmqbuCpHsYcK2Q1vreshHZ9wJG3X9eLLGrDZRE8iXyNq7KhaA5LJbqM8",
  "key6": "57VpyYbs2u79Uqx2izZvy9njbemuSWd6rVmmB5ZV76XXZdDMM4toKkcHABnfFnShEMKwhhPgeHo2zsMvmx5k1yxH",
  "key7": "2wNaKpQiqDbXab1bHtZTAmzBm9XtkUuzuxNjnst7wa1dKRnRGnH19ZP72uHBXenAa4mZkMdqJ8q5V8a22FzFJGh7",
  "key8": "47uTu3ys1WMFQw1omwkNUUKfKf8duojboaqnnAGvccW4tDhFWFpdgGrzNcuBP8TCUo9EUkYtgktyeXyMrK74UquR",
  "key9": "2xxdp6W566RBJeRLprdToVV717hknz7HwwQivkgWYCWPiCBjs5VRkQjZNkkj6B2CNiqEuWhNx4LYVn1ELXoaMC3v",
  "key10": "5arZLTWc3JRPZm7x2VAWnE2yfr6jCM7kF64BwG6CvkdJU7x5b32N5zMySXgys9fXnS6WLAszqTtukq4cCqmaevJ1",
  "key11": "2rc8fpUvCd3EiD6os87q59vdq4f5iVQvfehoYkUGFAqvqFqenL6HpameF9FnBBzEzEH8MLCDi9V1Z6WgxGdBFxK6",
  "key12": "3AyNfPtDShmMSLfVjhUSiHocpeMPGYS9jo3RHuid8guXTDnUjgLK66o6b5z2h9T4ed7sQt3kmV17i5fzBX18bymB",
  "key13": "3M5pdckgajMShxCwcPTrhckumehiou3ekrMxVbqTkScTaKVZdzuok75e4w1La1VjQWLr9tPWkxXHRSSpNnkbuoKt",
  "key14": "38Nh6g1Qu3D3ci9dmrBHcsjzgXnND59GfNxELHcjfZqxN7wL3LLsiyE1iot5Qs5dXo6nqHRX1pv7UYwqq2rsJfc5",
  "key15": "QxGcsULrHoJN5nPXCa4fcXdFAfMfSeudVvVLeQFJn4BKfCwXNNHfEwCh2c7wVgypXRu687pVbAvB47vsEGJQwVs",
  "key16": "29eqvzkG7Vt9d7aihYsgyp3SHqqVNmvqh4wkUZy7kj3zJ8GLwdUjz3qqXHb45ADeuCE12HJ5LcXQ9MSEAK9pkigs",
  "key17": "2V4fP973W8gzE8iA4xZ7uSvvZDbwb4DgvuEF4J3NKkrbVeqBQQxAHEMg7VaBhqe2RhmhBksFZxjqXjuLn9KEmsiB",
  "key18": "58yfpfn97zRthRq2T56xCZX5NGrf4n6556gfoTUHRqpnB16CjvVziKVqLWqzF4KuQndbrY6TMsJrFaNp9BQTPQDD",
  "key19": "5tAX7UnsonqQXpPFPCmtNAZXoU82YiHUifbdxcM92yvhWdyeeJ3qpYCkPW2obfTYadR7QP1LSQzvYJMCp4rG3rKY",
  "key20": "3Xscq9AoT1P7JFYoUVkyeG2QEb1AYAMwyupaZHc9ugW7Na7zuKNbvg8r3JRtJzGUSmJ1pYSxMK3NvvanUq6Ten7v",
  "key21": "4d1ur1Gdr1x7eK8qzTzGnDsu3XtzUes2zjXs3ZSzv2znQSaFC8PFPECrNW1SAZugdXvSrhBZyWXquywhmcC189fJ",
  "key22": "f7vh8h5KZ85VumdpnZZe5sCwhn4HWHqXLYZeTvMuvmvPVkvRqGjY2htitNEUX6sM3Jh9aPCJfXoeLVbWq93qNsT",
  "key23": "5mAMV3efDJ5DUHNYKajpBDKzASREKCywuBTrwmVZKMQM2Xv8kZaQMVfkBzafp5NeDQ3W5uhw9eFwLEjCyoFTPFb9",
  "key24": "3iXvkyoNffZoHgFk5Y34GLQQJcwehAu7UYXHx3bjrvgQKq46XHZ8Ko4pCUZ7ibeqkZLUHfefJFaD9xZeStm2Xsua",
  "key25": "3v8tHHDcxPfKy3brktH5U3RSfmvyG4gB2zmPR7Z9fNUHDHp959vKhLcV3JENS5ASahbbuu3yQPyF9mrLqvn1Zhqq",
  "key26": "5ddzwfsaZ1QV1UCqgYD3Rgqn2U3v2CpYuFGmstaggYoZ3strrdEWzYdKEBKDbBPhtvCTGpYwfP4MXrCRHgo4mZuX",
  "key27": "4Au1YnvgLWHZvXGLdiqrsvu6cWgtZ3VfRm3nCwgwSP7XBq2LMyRq2HoDWNLs47dcAnp2B8MPQmBjixNdiTRFJjAn",
  "key28": "3Kdw25uH4tgqg7xjWgX6gEAveta57fqiGNsgPhZ4oh1dNFj774jcvBAg2Cdb9i4fGbAVJJsoVcXm948FVrv2686C",
  "key29": "4iu8YjkHBLQ5TcAmVzDxe3AxsDL6xu8R1LxEHdNcwkN5TEzrhxbVvyxaivaLoDML5WsAk2tCVQVk5C1pgT475aCj",
  "key30": "2CNKsHPM3ZvmkaNr6fxFE4EnqDgsSXNmJk27GJjsS5v1Jz73BdXG8gB3rNxdcfX5b51R23fZFciNrrmPzX1aTSL5",
  "key31": "2gLAzfuczaGUKkMCVhLr1tyHiB9m4bT9TdXEbPjSzWWpFMTLy6C2MmqNQAaUdMBw2gD4NR4oUTSmdLZFq5oLXjwE",
  "key32": "3rQsMhh28RPS78MpW52zz3x1uXLquWzJJm48s4pNPWBwmWUGGYpFTbNHEfwfv7UeW9uMC9QNRc6QsHNV44yxAvM7",
  "key33": "4J7G2GntgWkvmckyemT6G9GYwACvFcYTN9KFQxPNsaek3bbfXJsam6S6BxNCoknD3SovxMGUkZfDnM6iyLbQHeoR",
  "key34": "5vDLdrwvMgFH8Tunpk926RPbenWdT5h22Q1szPD4PTRpjJXEjn4A763PTaYaqCY86FTR6b7jJXw63PEX2pAGPLJ6",
  "key35": "7ZuhYBR67WEcP8k4N5FResfiK3UHqc6JfbApdGZ4Rjvpp9jgy8Qmbrv22Y94qbCWJZVfcBMjvTvSWfxzJmFJTrk",
  "key36": "282J1dKT1JPZTVLcjccivv3vrc7gGK2dwnQVPkgCV3GQgErGSy9WvnbLk86tWbwiHHvuAzPGbNQtbnASmmSgtDLM",
  "key37": "JBb4urtq4sY7TbhdyHK9a4LezvdtWbPHpgH2wJ3SMoV1yVi7QYfcTqTugu2Bo4KEnJ5nxC9ydmt59nV4NhTr7bv",
  "key38": "2rX4mNgHVBbzxr6BKYMtNWQZQCWrxqQcUsEK4FFF6iaE98JFVvsFYCVmmkGVY59vN7m7xRwbZF3hJVx8fahkkgZY",
  "key39": "JTzJpdXTbB2yauM4uVj3GrEzULgMQcVKoN2BY3sd7uxsque9nh5gDGgLgUtsF5NSnPdYcjeJDgEPFAWLmMPpnV5"
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
