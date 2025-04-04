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
    "4ioNjshyr5umdwbVud1caU6bUvkK32KUMzEVGfDBX1dT6eZuXSJKLbgh3Ya96Ggtv5PAbnCrKjZRbct7iAzfQCsZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JtQ7iWhT96vsiNkY4FrKDmqNM6nbZvFCyNGZUxLg3JbopTted5wuYzvEd3Jbohh1bAZZuTRkVmMGmisPD4roiDE",
  "key1": "4VupBvfF4BkkoGuk3XsScpSxbHicW8w5xXwzc3aEtbKhu43ivveLR2sCZC1j25xmnwRWmo38Hzv24c9YR5Z28rRr",
  "key2": "3FZr6CS5TKzA5JTqtPRtQ7BxDTsY88dEBx32T2AQ5rPvq1N1HAco6mxU2ZDEMFa7DUtyLV7bMY1zh2Ptr5pDfyji",
  "key3": "37NYRQ2J1GndTpPHmoRwH8DAe9MCid7v44hfrS46ot24YyV9Mgr7yaK92nQupVjcLAt9ceXZKrai6n7ZRtqAVzE5",
  "key4": "4T88UeqQ5wUZugYBXaP4X4ptXZHn9pV5bSKqje5GtWm6zpDheGq4FDT3Li4dJn1q5btGiQNyrvP3o35Stfh2hghh",
  "key5": "ejJjBgQjyybxJxGpiHzntDYf8mi2mPg5F8vtwAWhm4fdWbBDQuEwNfjhojiBvExHXeSnP71wTr2YyaFgwvME2Su",
  "key6": "2WqyAYKM8f7QLqdiyYfFm7KYLUJdiBAuPLoBzGHnMtX1BGyPFocQYKGZjdSVfWKXyyVDhZAF3hjba8eUDfVd1tD4",
  "key7": "32dtXwCswfPkBjwTkPukFA1NjCwE1W9jMa6RnbdvgSs8GiV5V45DtDUGA6eq6YeoJBmLj5ZahM4Tx7RLquHVrWVr",
  "key8": "4nYBS1KnHGJprR3wZ87GqP5DDW8KtmqPGwVnJssNYfG5btd9cRfaKkcDWv2eszsutLFftT5qZ2UFMZ2uKfWvd8zk",
  "key9": "XyFJtTauuJSwKSAvX2aaxFY7TmcS1JqCF5KXnwsZBbmbVTacGqRUAAqY2MTmFa9GhEhafKhC64R9zSARZVGbUcP",
  "key10": "3ZuqpCkUFHb3oVoWvDa2fJk2ZpzxG3WzAiYjYbs9H8xzUFTkTzvL9rrDhvm9RiMSRTYDswCU2ATtSz2FEyx3fm2Y",
  "key11": "rF97bytc4dLR5rYVWJTUUH6t9DQzAJ2dt7VC629QAJY4crQeT8dDLEGibTuxhmhaYyQgZ18hAxK33mNLmwLEuqC",
  "key12": "aXLhfSb4DUtBUaHXBaub7dQ6ZjeQH9Vr91QrPz93kAaFjdnJ3gzUyLpVe87yRN3VpAFKeFLMcSyPUeQ4sCY2erW",
  "key13": "67HCxw3Z4U4ipYVa7vs1q6JMfVM1hib2XcWqsieec9KqyaN19WJZ6aUNC1teLepZwVKA4njggSACSmwthA7Bw2Ye",
  "key14": "4obMmXXT59oUD8CqJVzuyycxoMvMs8VTtsmxEs3psPKTcvmrD7yYmg89FQM6oPsveKFhHysYjkcrkpkqmsKLUH5x",
  "key15": "3B4jtfmKeuSLqgMfctuYTmoLaWyzRYrEm3KyVYcN5bb1K1HTRVDWoXaNjTQMteoxKR5x2XAm9wxmutXzGWy6StAc",
  "key16": "BASABGvPTD3sntyp1D2TopoXKBxt4VTzWpL8oRyXu2GVucYwjp1GLhCWLDBwTJPGSSPqj1AbaUMKWYELmMbAGS8",
  "key17": "oo1Pr9RAFtjfGQh9ajAYKAC4RU31GfjjuB6sgf4PHjubSdR9G4Zwe7SRLc2XdphvxM2ghsD7QTwZBP7CDV9zvSd",
  "key18": "3LwgBDFqUGa22ebmXSHAyd9a3q1uL4jbQWR169EFHMkympNspNoCcreZoJQLpoD1Jmp9bRaAuPMss89gXiXCvpMp",
  "key19": "U9FBaYRjiJ9VkKmx29kMa61drtuGZcCJnR5MQ7jjU6zVhxrPR419JH9rHitBisbdsS5bCeiCyW9hksE2KPKe8cf",
  "key20": "5L1iY5EKZ2k2bAqNUkEkMS33ADSHPhuoMMmcX5zm5LHU3eGKuq6AEUPeU7d57XtdeZ5mpyQjqf9GGqVrfR4NX7xF",
  "key21": "ZUNkKZ5M2CzrbdTtbJZVDzM3PHDBDAA3cF5bW8yt5mdZJzZFScucv2ue6JfS8TXmsLSCxQj7ffP6BSkzGdt5VQg",
  "key22": "5nqREbBh4jsKggoVLew6BBz8iRK1NvimnpCgr5mc2coZEBCL3CHcFiPTNr4fgk6hSNMLpNYjKX9XbHwxVAFVjq4Z",
  "key23": "MWEWaimDBrEyt3xotq2KxhJucReC2taK2NxSpupLDrU1t82KtH1rfU6URfjTbBPLP6cnEbxUU7Re9NU6Eq34RJe",
  "key24": "4snFtzQPBUGi7Xp3WbrkeEUjtHGCRpT6v73jfUaD21GQBqnsrCWErv8gu3gswx8PAFFzC7uK33YmwjYc7f49BZW5",
  "key25": "UKPdazeUW8sqUhUmFCywiNTWNYR9H9FY9DVCtXMSFiFfCS4uCURkeqoJ49Li37KCzhr2s1r2oaQGYpkX3Xd5Qt5",
  "key26": "4GyTU15dRgq65FPNtT1TKzvcg5GM9jv9umtTQ3fomrC6193D92ieruPnEqJY7aKeEGTV51xmE8WcrVZBU92oNPGS",
  "key27": "4n2gSgxNuEw85o8zsvGRfBVwUssnNpjMk81Eb3qwwkWdZeTof9BSzaoyifnYM7Aqsn7Eqt6owZ1wtf9G7UqVkurv",
  "key28": "4RKnBbWD3oWUd4h6pCGqHrCe7GqytcvbVpCERfnp74qDnuaJh7Dz4KBE5g6SQEMWLLCH33atHthj5q3JjEjT5fTt",
  "key29": "3J2eXvmgaHCLG2iYZEo8P4NA9LnBHjR76df7EgCz2cPo1zAS5Ki27xmFTn54UTjpdv5JSNnTcrFsnS8SoLGf5pNQ",
  "key30": "2L2L8YksNdUAwmk2nmNwMkznwZAz8Kpy2Haxo4XpPwSr3c5cuoNU6WDNYEGV9oVfAi5Tpr6xP3q1xjBF6ut1EY3t",
  "key31": "5AKPqXWaDehbX58BTVE11YM4spkdikmQfrN9fWiEugncNvKicQ2NYUDbx7yrknAXBzjXX2fBSqyTHmkcRj363PmJ",
  "key32": "2nP5HR3DpjDcot9d9Dk4nNRLstpNFVuvXKjwGUHHAaZs3Sq9BMjomoppn4gy6BPkdWEXud9zjr8Wg2bTpFwWsosM",
  "key33": "2LNWHVnki1LdEsZv4hHKgaLduQZeGx1gkcQNGAjEdNM6N57Zvk4NkKCvdaFbo4D2vZJehwzxYZaFpvXnVwZLV8sF",
  "key34": "4ePsuymZxMey6xJMbB3CqrWs9oLzHRJNj7eVeNKcbFLfXw7kM351nWtK3HwPJnScPAn8HEGRvX2CEC8QHaNBMxXf",
  "key35": "57wrzmSKj95gNpLBg5wsBFBCx2YdUjKEH61SbwYduRkh1BfrURQsbVy9PypGf4A8oGvpRSt3jPY9c48dXFomfu9s",
  "key36": "38EXgG1DEFaaQ9GovtbU5YPHd1uwm9SPfFLMSiB48jsAmQFmmvHP1p8Jp5ixNLDNqeXC2X1jW9PST6anfEWthGVX",
  "key37": "5u65BAWXC1xZ6XehepTXq56jGJd5zLVucQ8QPK9tANwCKVSfm8idjU9E58hmHr1x7z4XNyQ88ZSgqcEwfAGpxcJm",
  "key38": "RpS6DQUoA6YyWJWbPTCEy5yfVHpRpGGo4yY2vD1ryqf5PuN6hKCh6DTUCw3YeCqYKdRdyAzUhj9AjfXC58pG26J",
  "key39": "2FRgYBG1G2yW1WcaZ6LowtnhPDyBmZyWaBbsbZEHPYwB5gndjvQ5fPUowSbXQL3tj3Pf7urdS5JftdAs7FRuDuGZ",
  "key40": "3SvM8hwAEKKzQPi6DNioVneLhEf735Ek94UYuwgtq889peieYZFL7BBUnHFiHfxTYKyutbKMDQiXdPtLkyVWceCs",
  "key41": "62tYAwYLx6Py1j9R8Mv5yyS2MTX1NTsnS3Rw9xVwDgB1yHPYLDGWgdhadUCFcSLsNbN21abmizg7JYJcYiKvcZPt",
  "key42": "4o6buVay52aB5mKbxs9Hdd1iUvFpJTNpP4WooUJLRpSGVXQCKs4QxXwRuuoRwrzHLWF3Vjdb3FZGpVGJnVeVhQdz",
  "key43": "44mubzN4dGEV9EaBySA5z5oAnuWyM1MPWGy88FVH2U9FLHFhnC48CJ6CByYAqDk9Sk6x1dVHP3fYUYr5AvKrz5TC",
  "key44": "3cmjkA5rbyAu5JGf3chMLkjDsJsdyEYX8AkxpHrR8f78DJ6N5TrBckmjrd1VXAMEChsvhTNvoBtp5B2WVrVHZ5Ym",
  "key45": "3zQ8x8c978xdeMznid5Yw7XVv1NmwY6L1FwaWiCkFzhckKmLYjt4YxSmyZAwasyhJjS8vu8iHnzVoXHv6WzJXPgS",
  "key46": "iE9nizBVHWn5tHw2HAn3F9bwJby3poSKHZ6wPa7CKZ2jbf43xfjdwdxRYxEibm5WPsfCA374M1nTaNmKr15STDW",
  "key47": "4t9CWMoBy8z8WPGkJmc9zRZGAMZJddDrJ5GqmNeczEkviEQxCHLgEgjSqmYYyw1DynPLJEfhVMWTasPok465sujr",
  "key48": "2qDwKCtYRWsX2wodZJdZz1Tk5TC23F2aF749T9noXorpcveb6YaL6Ra5zPgeSPv2daMgaLtk1agJakdfKxZVha7F"
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
