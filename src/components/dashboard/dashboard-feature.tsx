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
    "GnXuCaYVpvysmMpqEAvy2qyP5oSmPeLj4ZG1DjH3seb9vT1DWzc952fwiLeeBqA1JwJw4kR9pSrkaCoNC5B2EuK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PVMbuNnk9MArvKECEz3ow6GzNQMRCPcB1y4725fZbjygsUVTjmkxgxuGjbjnqoFbzUFDod5w2V91nDBybZpiXpS",
  "key1": "3AZYVjz6J7879oWnmfXuYJFjqZzqap7SVSSyGv6LMhMmN2xkRC1HhDpcDXNVrysQEXvqfqZYVmGD2ts9QEibPSDq",
  "key2": "5UuA7fY7jgq9R4wrL8wCHyqsWWd1CN4eK2EZuV194Kyzhcswfa7BwfwkbAFZvC3PPQy6Bg9PprDVRQH9mBrcCH3A",
  "key3": "2BbA261EkyoDAbTdniV5oqj77KbwVa6Gvbwrd6m9SxEcvJjAryAQ2rvYEa6GqiHWDtU2yk4uEJHxtxiSxfy6ceTG",
  "key4": "3bLUafk1onzpNPosbVeQuzfS8CAriA8VkwTSkP6G4vYcWCRdvBmTNQxKaSHarkngf6YxhRb4pbMDbF1pJw8JGBSA",
  "key5": "5nchKSo71qJe36DqBKiBfapmMXyHEnJ89AcSwEMwvbGARi3xPy9FkEL2odf5R5VdMcu1Fmxfws1b9DxWdjjxcBVa",
  "key6": "3smzMenwvmDnXE7ocEFuqK7Rx8hQf9MSSwZx8iDbxPyFy8CoW4Z8WyUwdQxA1mKqM1xPWF2L8CKdFcrh9Rk1F4Td",
  "key7": "2ZFytcoNDP3JpLtS1qncbr5StXyjPZtiRjnZM5Sskx8hpDLKvQVLdksJHrDZnFKkQHR9f3vVVKFf2EkCCXkeaMRy",
  "key8": "5KUJC9mRPLku6yfaypTxuxUgHyNa93E9Wh1wiF65bK1Q9Y3TPXht4Arez69rm77SRyGFj8ciFdfA1goeRkird6Cd",
  "key9": "445rF3CPkCtSKyL7TPmSoDyvYMdPCiqPFBHpEPdhVr87vKXjbVNjPRixPz6G5XmXVcUGtDseZAnWYMQm87cpP11j",
  "key10": "yktipmxnRvV8As5LvjQWNPEQ3SEpdTmUMnRTAZd3oNufmW9fP3i5iAkhxeNeiSFePdjjn3pdWxhbdWFvfL2Qjmh",
  "key11": "kG7gL2menDRR6xfA3UzXuFZ4x9sSeRMcb1YocuSsVANudshGzB94RJNuMDLKZa88W9Cy1EzR8bjKvwLmEraznSP",
  "key12": "5W3vVQa8kKPPuxx2nawmxAFxEcHKq91ftHZ3VPSvTqAwdt3q7fMAqozDape13vCQurmCVLPK8t68owJVUmrphumW",
  "key13": "Ktxq9Q9Lgw7VfcFzpyEcXasNMxmqxBGbnyJDXkfH7KjUTHVjJ9C57CVcw9wcEfw3gU94Vh4ZTBGyAHYgJHg9QHD",
  "key14": "QBMN3iJi7NzvKa28ioCDwasiXc3qGjD7gLCA2ubBdhGABkbuFtZ5ptYrrQ5qZdgajqZc1TB8CQhPeoNBitsQJPj",
  "key15": "3hmo2mwDo9332BScrrwLLmckoYPUW9Xw3dhb2zjGGTkrxEcJ2yvp3yuo9cNX24ufoP8dtGJN8qjpieSDpw6XAWXe",
  "key16": "5K6QYqoPTtExtwjR8JHYesXwkSkAVJ2QYACzH79X35aGDqncxyJnv2DyziczaroQEkZnj74Z8VLzQbEr1FsnoZ9U",
  "key17": "ixkWqcqbgxyH6cDtLaaH8Q4uoAD5gm2XYM8zhPCqBFBoaB2bDmEqfsgaRQJPyd98gfqRGRdPzvWKynq2ZXyN1Tb",
  "key18": "26ZcWTyiEKu1gEN8UuxWeyRrjE8GhaYesKuD3v9gCsiwUmUAsxposp9m3mfYzaDeWs3gA95b3dMThNGYyEzSY12H",
  "key19": "4YSFLRNPT56zi4evraN9MNmK7mbo8zhR2iBpC4HKJNBN2JCCS43sfbS1Q6zpt6pJCNfnsUWBkaBhXz2H5oNo2ijR",
  "key20": "2NSLh1DBQbSMmQC9QUU1EGgUt9VNULd4Db2vZnSESuMY19ppNmuXjw1FpnXFSz6pZ1YgihV7mRqLaeWYwcDX5HNJ",
  "key21": "ctCMhWsS2pw58DKTdPpbSEyEEeizv4hNppy64pqp6DRrW8eoSBtMG3RUbi63TWXFukHNbM3RU7F9owSaR4YEz5u",
  "key22": "4HTotEfXk6pptkK1grp97p3yozqNcAVt2fdgPMt6ncS5joh7YHdQ7a2YcCQaYyTwrJseW25arb4P3vGgZdam6o7f",
  "key23": "HyoDqQ4VMM1NYzP2mdBHXuEEiYw7CkKmFoGSqNXVAzGWjWr1PEVn21E5m6f8QyMUTbu5UegpRAFNGvW7NuknkHg",
  "key24": "248GgXBxcBk755qg4e7v8SwGhAM5BjpHHxyKksUvQAtn77AWxQgHcmR2Ze7snFkJXQurTDciY8mRPNu7DxNePTab",
  "key25": "25z1BSmcx5uB8AwjEWGau3eS9q9SGMT6RHuEXduPuEy1cmpvT8dbANQXzjf9Xyk24cPTBUoSXfScLZ5sn3vtqkCi",
  "key26": "5CAuaGdcYw8rBQZUrKKwKNYYF5pZ8PBGWr73w84bsY2aPv3Hu1ks1zeVhkfeCh3UwrgHmX5v4JkNuP6fU6XExfqr",
  "key27": "3N1x5nLpSzR9aUAa6WmjqkNBnnY52PDgnQmfn4XS76fRHd7XT91WiLNbbbabFWt44hcZCwbnFtY5qjj4YzUBpc3F",
  "key28": "2oVdoi5mDMp2ioEgHC1B9XY9V1FDDegrCpzqQqJaT4hdnuXzAraBqnMTozYzZEtF2dmh59aDKR1YvFrUAcQxo87s",
  "key29": "2NXX7aBfM78S8t1msibminQoBDfGEamEHMkWms8VhMWtjqFhYGQ4EQcNAV4BiEtmmoJxtc4BTU8VTvGei2zEhWZk",
  "key30": "CccqtXoZ47UH7gUHrY15enWxzRBghbqbo4d8i5bZYGL6hk674Ft9Pd3sxRmdLNe2UjpsUuznHqwnLxFrEHdA7hi",
  "key31": "2BGWrgxYu4i7dwMti6Aa3wbPay6v2J28qDWz7evf5RD7YmFGT3s6ABU1CvzQDdmv6oAVVFLr2HXEEzJN1z6Cd18n",
  "key32": "3obg3oh9Mi5Ztq87aMYc47F2iTsgHzetPSa8JNmnVVQ9QHi2yo2UpYCfj5q5HHQ5j4X3dfDJGGzEfHQRWfDc3mTh",
  "key33": "613yhnjYcoFbgijCEZUVtnD3wfKSCC9wGk6MtBB4C2Uo8XYXTTB5x3fJqNU7r31nrxNNbagSPtbLcEZEo8BWadkc",
  "key34": "5jbrmrfCkPSBxtHZLCLJvtsHDMiPc85xDnWAYTh4vQ9CgrrFGs5JRU2KQvHs9rKm6871RaSDSNjeTpKGwaYMEyTr",
  "key35": "5oanwxfdwHxd6KG2FA4qtSkstCG7fpY3nuWfZREY6vzzadMYNyiEVm3zGJ3K7GzfaqwDsJFyvujQ8m6q7HuGgswG",
  "key36": "38eDaGaoRz69TjsuVW1aYWtLWnaSm7c7TA2M7UbfoH7RA37ifN2bQ5G2KBBMadRJ98QYDLeX1obCnS3oyjBxyrc8",
  "key37": "2cwU9jsdLbVGRnp3ctsuSAfqa85vYX6WxPNCN6Yu1uPW2Sm837BktVRhU2ngRcfVp5HhkLELDzVwa2ihX3jriS9q",
  "key38": "VC3FtjoAQu8W7w582AmEvTVRCj9aX1ZTGqkdGPYpqDdndfAUUoL99NzKPnzCohCSAh6YUjdLGmxUSeJr654vf4h",
  "key39": "27gskiFErdz4d9qcCF1qGQyXDF4VVQWEiU1y3W1Z3CSH6jmvLiHCPcn9xSfzWCpvn8taLZRJHFhkhXbiR9X43T1f",
  "key40": "2UAGcMGpDqt9C7G66HSjsTG9Bab9xmZ9iC2tGXTJVFBUtiZ7xKStxRYoJpKXf4YmMVTCf7GELV9x7vcufbR6C2kD",
  "key41": "2YzuAbv92fY65Fo5AonWpeU7a6nxt1jEuoMumPc5my3HX4z3tXEeG1sXZNBUjRTZsZWnG9R9DmkKtCKijHUQPU9",
  "key42": "5qdqoQUZvMySCwr1D4RjZY7bZNPd1gaUcsvy2Eq6LLxBvx7yErSADGZoACqmZuNJLxSdi3NShxC7dR4meFofJpo8",
  "key43": "vVJuqTfBG1HTGEnpHGS6NzRpyUYHxeaQghguAQwjvN8gfoYpRruaqYrK3fU7Zf4JVmn83WRmfG85WbKiuXq1FNK",
  "key44": "46GCy8TVveTvnbJZrSEPKQWGhkR2E2wkQ6trzdw7Bns2veCPTxNxBewxHbUcpiUnUyjFGgMyz2BGFEUxo3jZkrz"
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
