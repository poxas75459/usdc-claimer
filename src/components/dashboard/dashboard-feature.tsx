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
    "5CcAC51sS3872X7bxZXgepm9EUeErp6RjGmtt5udw8jGjEYxNSqG5hZEBxop8Q3AccY14VttNquRdSYNQdKemHqU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UJSnqhmXGZiEmDmpRNjsv2hvTR9fmHNknBBTSCrBDWpVzM9pgNCVZtxxbPeddmXGegacgc5Vt33w1w6dsG13V4W",
  "key1": "4x82hiKoRUvHpExzT1AE2picBupFyUhW1zpf1u4i9VApYtABYd8TLudKkMVJqcZUgdwfPrK6BCBUA23hJAekUN8s",
  "key2": "4TyuJdhrZ5crzRDaRRshpLG2163oyDXeWakCAzFajES7n7jAzcC8yNCUQpSH6VULE1AUL7CgEAAEvXTPtDDity4Y",
  "key3": "3VDUmSYZ5bNPKqPdQJ6fUQWgxTDMRivkD6MNgEwckbWB8GZrQ1eBbr6gPwKDAoFkhKdYGYmRyQ69RCXA4bhefZgi",
  "key4": "iFkx3QvHPEssy37ffRUGYfwp6cs18oiddtunSspmPRvzJzVVTAUbSLWNwvFx83A3zTW2ZcosSxYUZG2kQXovEBe",
  "key5": "8HRY45Ef9umNkgRatSJrQHLtUogtBLRNj2UWyoLHUxvm5uLhc7ZJBZFTy1V2JnWDsk5yAJM2jxyDL7SG9chpwc7",
  "key6": "2fFYHrHUt4P7vxW6MGzA7RHpNmyqbC6Z9vua4Rf2QddED5EDRVikNwmy5HFKbtHCkJmpKfEDvJ3hTGpiMLmvLQUH",
  "key7": "4cZecZa1tWpC99hdSAtTKw9XX5EQhRVjdVE8njErdJuBobgMZdouQahAJkavv2mNvX5HUUaJP6cJ3KBuxGFAW6WV",
  "key8": "2ja16C2F6Q37T5DLTdMsZsQkp7pKJcov4G4BzbQi2KnyEmMthydTq9gyFgyEQri6Q6PU9NoRpVkT4LNdG94GcyzX",
  "key9": "5S4bN5HDRyk1XL9jLmj5PrzegPvX6gcvVE56zYqhjXXU6P71Xf1R7HSA6iKx5V5dMXUocwKRUVhofxjjJ72trq93",
  "key10": "3hz4LViwPpFH2rTH8zH1dYrUqVDtVDRAoj8GhCcR5FkMnVKy8JejwpNpMjLrw16br8Psr4KosLCtMcXMm3njDTjC",
  "key11": "sV823yfZeMN8LA2hjwgexyMwPHXqnHNWLVAtDK1vD9AL699qx3szgBFxo8wvQdLyAwALZ7daKPjo6qgEsqLgr2j",
  "key12": "MQeDaLXMfsBSGsTBaYFzHQkt9fXqo72PPHj5m4HFCRAzruJJM6xtZ3nErFhYScE2HrDR1yNAEsNFfg6gSSomLbo",
  "key13": "6GGn5pDmn2p178cy8vZYteH8AzovFhdkyod5ZkSV86GyfFBo54BEN255N1B1hCePwJoK7rDs2wJygf735JjqJwh",
  "key14": "53RqsHNdsUjQDwHxvasvKRAHXAZGGzwBwa71hoKnxZ1xxKiqnQpzFbcgrx5bFubYXXmawepyX2o3fkP9REVr9ysT",
  "key15": "ZHTHEgTmMxSYDweqAQDSgn75nk9TBP5JLDK6Me6RcEvk5LkG2i62Wdmt3Pi1XXY3DBnUqXMwspaFZ579hGexZiE",
  "key16": "2r25PuK2ma92aJgnfQC9Wwh2ydVv1zeyyWhWJkErEVyDNDjnDf9sYVDLENN34GHArDayNTLzQXWqnpNEY6qLdzES",
  "key17": "3zjWvvXzKvXnfm4dty9Gy3ebegfUD2Qtrx4tCNBDkK57sXYPgZLTVJQqSuQDUCAu4RRzzNd2bBSUMeY7VyzwybDR",
  "key18": "3cpe8VB7iBYZvy9hnfS4zbmKD3Rz2gab2L4Hb7FGeTJAVeRHt1NFUXzpBji9ktAmjcL4NoqoNrkXNm5Dsu3JBDDv",
  "key19": "2qtguKV2sCnuwsJfGMfA16HBQFBQz4F4dvpmfNqkHewCUERRndkL3qqpk6WMoKPWtUpiRygJSX4xzSi21Uowt3ua",
  "key20": "8ygLCSyE2phPdahhfjfEsH5fpJE2GCL6UuEcicD4T9iUD9WgnMUZ28R9LtcsBthjPgWoqwKF5s3kb3BbvCZVzfJ",
  "key21": "2fqXT3RkMg4R2kKfpyrG23zgzhXXzNx1jaMtggNdmg9uXRboBQ28cMHzH8i7wsMLn4GKMrM8KbYMWR2ggoTFnCmR",
  "key22": "3qGXJ6D6HvnhTVzAekjfKWjtDWGdCBr6YMEywGErzPKVnv52tbvNzNSYY9THrYBjqKiHx3RJ4Sk826RLQf6LW6cT",
  "key23": "3wTjAvxhnZi3ysoGrDnwgdJJmGAQPeC3vRpEbkkJPS6DS193XDoFXqeJnMBk8mkj7RtkmhnEUG93cnoJgd6dSrch",
  "key24": "jvaPxtJWRuRjtorv6BW238Fg4Tfv3XQxVVRFTn5Rvsk82Fu8viM43LbNadLv1cWJSacH34AMAzP7KP3rhG1N9ph",
  "key25": "4tKw6ASQ95XhYMcM9G2yUhestJDEDrSjpwjkTe5FCosK1x6V7RFEup9oWKU98dp9c6jB1Ce4Ko2GnShe9X89RSjC",
  "key26": "Tv4oiB9CtzH4natDa9azXtienEqXborQm9cHyfxCGSuWT6D83vFZLDvCuao89LXMD9xmmXgpRUC9WrWmzi1SUda",
  "key27": "3yD3MeqdwRBcK9PThXGDgAUMqxKQSrqdAZfKArdqBuxd7dezjwT4HjgaAQPWyWvNBQL3xBNFpn6BbfLhiBtt4JA7",
  "key28": "41Bg6k4zyxHErsYhd7XtT3aJUDyCpmwPE5otcwknRfFWy6Jm8Dk7rC83GJnsmgGbjQj9haiS93bqSEqNFwvgTkJc",
  "key29": "39hYZDWZ7aRbNXVdS7hc73Mo7FQEreqvEZfAXdSK8qEt4nq95jt9QvMXaBQNUYUmfmJ9C46dYinHG9H6SRCLRJcV",
  "key30": "3cuuP5vYnHQYf1pfoMd47g9mg58F2sm7eMGG6puERt87VMLN7ZSxXr69B7vxCraQLVDfEpzLbhyCYSBeQ3vZtNuT",
  "key31": "5ivXpYbxqUQmjxs3p6JqCXCVRyLzejf8jsj3zrGTRobREvUPJwJo4358c7qnxXM8i2uiPdvDmWjJo6KB3RMh2gpM",
  "key32": "4Jx167Sm3yfufGoH1AV3NhXNWEZqoUcSnMddXJExPa2DD51F9WGKbb36317ArBginoA6W7KuuPetiZDSgLA9F4JW",
  "key33": "dPuGQJzYkt5RBwM9kD3X4n4kuTKN17DALwxB1Jq1hb2aJA6oGmKnPXV7iUk67Xk7gYfbGLfA18kP1KBb6SJiqmH",
  "key34": "4G1D5fNKWvU5fo9pJgis6LzqXZ7JgyhQxmfKdMn2aBwtBwVfKd3H8WBEiSHTiL1CQ2ArBmm7AQxmHRANXijHPc8M",
  "key35": "RyPb2aA7TvU5yNULbw1MFsiG7VudKBDADYPuTXW5cNVMCDrkJf4PPiRGvGo8sgkPrYQ2pYqMdm7QVmsH3pM681F",
  "key36": "4q4suGsY9XpUBbyTFFTuqGxCf14tRngWvXDfvbUFGSSv47CSzcmtHWedmRpErf9SuWjJRi8AdGkvAPRcDkW2f1c9",
  "key37": "2dLETSVL7jtfGDbAC5T8CAfVoCffCLrDQiFrnqMaawHmkyx5FKX4jtC3axirkh5WgYekVqiV3E8JU3rFVdr735aP",
  "key38": "3fQD3mL6KJtpAxNqKbJdRjbfeRhdoUh9JAAJwoRvGxnzbUe1oEbh5j6ZTScdGFTYmiQfkvUr57PzqW43mN8qPa82",
  "key39": "2s8arRsqQF1Nqc9VN8Be5jCKjZQBrHvLWqZ8vnGALZS4NKWFNgjFBNDcPwSfU8mPhCxJwxkaYw7BnNVgpin6xbNh"
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
