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
    "5R8NxXDSwHYWv5DVdC4hJZs6SrKJULmAHpKKgFiauFj3YWo6nFLSRqktqDk2wgVcPvGTGo3RHGnmP4E7tBmNFxbp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GV1GZZP4pidisJTj9LG7hCzpi2uxsyF83z9kfoFJX5dSZ9BBuin4FyMNRbMgzF6jwBfRLonGDumUZqh8f9NLbWZ",
  "key1": "2hawDftUk1Teid6eAKPraFqXNs1Cb8nZnCsLhnXqjz9sWpoip86CAs7WCvRSCGtEgZ52bz4AdnFDqyLxqkmM8fk8",
  "key2": "3kf2Htso9Qxh4AtewmUUJeuF7bNzZNQz4B42cYx3abMiLYuHUJMW8joxcSsjfkcN5ER3u422kk99XHZUu68WK6Ji",
  "key3": "33AdMR5dQGJ37n6zeqHCUAvyVPUS8DZydXopbajVfh5KtE53i8Xb3AFAkJFRLDz939bJ81VXiDEb7Qa7J1d1KaZm",
  "key4": "uFGSBg5EPAQ9LpwbCEQeN5s3M5nz2aAP2NFCvGkTnZ87ruft93TxSoEdRa3s4PC4PPb1jUcznYHYZt6YofeYVER",
  "key5": "3gzttTy2vxRUfAUZptBfQinXXpEttWktCojTNnPjEjJtmtFur3TjrMEL7sc7UHUhD3RKMSnfSpm1mNQiCyTuPRcv",
  "key6": "wFRuDrSqfvVRgE3J2NH2SUR6uhQUAWHMBvtQSgZcwwm325qTyTJo3p3eQyEhjW9zC7KoJSp6zeeVE8o4v6RtGe8",
  "key7": "2CaBzkoCexULTVeSS9wP4FnpLm3M5DLQzq9vjLCbkcDkJHeiAG2ZYbMi8nPfLuQQvaBCjJ4DaTsM64AfEV1QxMBw",
  "key8": "4Nh81fjKZSfGkEeFTE5q5jWRQiCVK3kFYem8m6x7p3FCRQkYAec4ecHGqDHV4yR26MXLQCQheM3nmBoJDDqU8VXi",
  "key9": "EoBedZymvEnuf4sZhscabXYAFQDnkFiqLViPt2wtC9vSbNmURA5z8vk4T8GbMez2MKyJZLZJaC5pt28N42jBqSW",
  "key10": "3CRFLbR8DNfgPwz6PCXWZaYhDbwt1xzpnhvJRqTFnhgEvp5D9hyBcPe7t8zF2qgXpBS63Uu3vQy6j7TPxAZXQ3rH",
  "key11": "dpx2HymZmYAxzQttgrFEq3kHKwyMQoCNQhnXWc35EdwCvfZFS5m3qLfpsUWVrQrH4UiU4Be41fT1eoWGWWDcLcg",
  "key12": "3h8ncXJsKHramNgmxADCCjGpjEEpVYFQmAZDXPbDzhBc5AbFHcgYRuJmuRhaFtzdbEFomKE6bQHAVcuMXXffnumh",
  "key13": "41GP29wF83iUmko4kjUNKYypkbXrh5n8tbGNCYvd1kAYEYgTADg42qHKLFB97yRVrcvEqx4b9qHUHJAkDF5zHFfz",
  "key14": "2RG411FT9dHySwS2Ymsmfg52jTGjfpKKK5G6rpZuHvFWC9ryp3je5pL46K9XrC3LviudfzihhTbDCyUKuX8kuGpG",
  "key15": "QZuc3Npwrci5vPqhppiScKBqxWHRpCe62pfprNjU9pJo4Rh22SkEvUJNkoSiRK3g7Y6EBS3v6nT4hvAVjUZueWt",
  "key16": "4gdUzYySuvMXvtpVDLF8QSkhFiaA91vPMSpN87XLYCdtJc8Fco42dUwnMSLVVdJxjWWYDF5bGVi4rKw9S5XtWNGM",
  "key17": "3jRL53nD7wWo27PGpsrdVwPcC5VqiVuMZ7AZvE9XvmDKcuu6HDpr1huL6MQEwENABKYyPLk14PzEvKBJcTNkMEkZ",
  "key18": "3DRtL8w5BCTLSDoguingFtJugoL3AqJnwXzmFB5z1YJ2LKQPwrGYkdPia7SwuJjgbCF9p6PwFpXVjsp3mXCbAi4m",
  "key19": "3nSSTFsbBHuPKSD5xmDoLVziSYgBBk35DhXCEzze8D2medt1oT24Hr5fkfGptbwHynbASrd4FiPbFRQyKBoGLHNw",
  "key20": "2DMpY2SRHGKDuEHxJbbsB6Sa9F595tRbJ5bguhDCX8woYeQFhCYBFKA6fD8ZyFw7gjnWyqeqBXBshD5bAg8kBDUC",
  "key21": "CiL5LQHMemmdu2G3RzDdSCrde2HY6u56ki2dFLbxKirvAT97FFHydMnhg7aDuz5V8NbHckiXKAxZEhifNH5SHJ4",
  "key22": "3dEBncGe723iRgm9nnRA5ZjRnTmFWGwBvs7hFKojDGWi1nSktVzaUbGnxeTxxmqQyvoPcpdSxpW233GY7PuQds9n",
  "key23": "3woVG8krcb1eWHRuBKPMJsvCyH4ArAfMaWnS19jsMRLKREeocBxC889pZ1Uks7gJYvPRWVfr4PWUSqJSBxiLdNvb",
  "key24": "4ZQskJAMvCFehfagDYUAdE9Ry7tnNQttc6LvUJVzfuPZ8GqQKPWPcNMNkvdWcdVss25mGFt2yAHkYmRWk2M9JBZV",
  "key25": "G6HCZcBGFaucM5DmyoxXDcEjcSky34Dz6FSe6827CZaGbbX4DZgx92Akwb8Cmh1HsQrambGJpEYcSax6Wzdsii1",
  "key26": "4kZcjXwzXkuewcoyiEnGftKc7v5RvfEqStuAtPpR1tDtQUCUQFKV8KScJzcpBViX8uMbhvL671WmcGpAaeXy2GhD",
  "key27": "5YTN9MDuktBcmy2qFh7XdhUERKWw6oRrxKjD6upRSnxXsy5eS1zmX2agq8axDuGgVr9afxHtiXyWwXJHdsiSWnwe",
  "key28": "qSkB9qikhbFNfBVB8buJJgHfhsGsUJjvhEfH3dEMkAQETnBcJX2AKfD2cwTze7MGh1tnpXmFxLpQZjUKu2XKfXi",
  "key29": "3cL7anC4cdgQuadUZk1BsTnLf38nJfhDa5oamAyZMnAdJQpZsHoSwddahWfhcHPHgKNV1xdk73cWFS61o3fLrQJn",
  "key30": "64VSJLE6rrFNYEWbc5aXizBaDCeWeXEcLPC9pytkjbepqWqGokVbttiGMFtoHerZ3EXjf6UAwTJN45nruZXN6JpM",
  "key31": "2TApm5RvKuDucLDT3kF4LxNF1RZmvPBkzoyb1rrPM4Vgyik426JquuyerK3puXRMN9sHgsgX9bCo2b4hsvmR1U8J",
  "key32": "3m5m31bqMN5o7CCeUAdqaF1tNq9dGuGfAZNJKcqbSthwUjdTNTa811ATeh45n9E8PHt8LuMj83J3xzM44FHDXFCr",
  "key33": "3FcPjCAmVHVhJZWd4cfrfN9g63QTPizahJoRFBuERXkoHeFpRcPbKSeUp4S5jdFfyzb6q5myrfxjZowcLRYExTNU",
  "key34": "3PmjNHNHuon2tfog6n4SsoRHiprw5ztj9kdg489Vx7Lti9363MCwmTb9PYYpSEdoj2kk7vMC3Lsjt1P6ELDnPUF5",
  "key35": "jmaeTPtHfK2M8BHi8FswxS14r7juQLwLhfHJXs6rUnBB8yhnYkLxaxYfaDmjMazD772Qyc6rZW8AVKPA3JuBAsU",
  "key36": "5wRC4aMEHDE9zC4AJsvngpH8EsWR1iwJ8jePTSFN6K17Z3VggWLvWrb2bwoH4ctoZWkenKgdWUj2HMQjFBwMUjwa",
  "key37": "4Dboc68nXFCHukJisxkGB4U9qnwBQpvL4dXUaYC9FDC7anEcWvrVfHzhRT1F2Pf6ikRHVPNpa8vQQFUjeSgLpbF5",
  "key38": "64NN1mFjVvxURPwJHUy5BdmoP7sMarus4UiqZQKJ8TDzL5DPPy7JfeQ7XLAhsvRq64iMZ7QsdoJY3zYsVVDG5KYN",
  "key39": "5DRUGzUK7uBqjTEPnqFyfpkjHX3hpFrbqE8prueBvFNGtYtf2GMF8okUmh1YFACxHgX3TZQDTyyVDWKgjYrAvoYE",
  "key40": "8zuuT7FVojDdChTMvyTa52DgboXsu95Dkwr9NeQBjDkbL72BYYDhdVuBrTLdhDxzM2D16gCDygdXhNhT5dxC2fk",
  "key41": "FAfHsfacHt5FKDKDs4R9wXGbJKwkur34BfTCCycCKdVkBik3bR85ERzpH1K4zvAFXozNQD61FC4cPb5bFckjtcw",
  "key42": "2TXvC9paAkaVNz252aE2NQHQUD651qy5u1Mo9FWrZ6e4a7ZCMdwRcVEa4qu39cJMKgFNLajiEQck7MGG2rDnVVWi",
  "key43": "4XNH1vF9iN8VzwZcU1wCxDr1Nb8kTwktzxrgs9epEAVpEfcGERQgEw12G5piWdSYC6Zu19ds7e3WKASLafUXCbg9",
  "key44": "4iKgKT7snMvmzYKRpy15w73hwvBrzwJ9b3jZ2FxAa6FsJK9Bc6t6Qjgeb1P7qA6WrRCL1gAouPXPqXHERCSpZFuQ",
  "key45": "4qn4iCPTzFkawqkayvmmD1ngwZCz8KuN9pwz5MFdnjwFrENUcyoHLUHY9mfDCBS2v7g6VWFU6RXhHPPePdWspSQG"
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
