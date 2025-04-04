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
    "52JYPeE5DcgPWy51KAAiKEk9fRWNfQotJ8MuDWFwDVG25qaJ76XQmGS59NAT1mYd2X2HoioSsCTEWd7usrxuYY6g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uvRgQiu1raz5rmCCMuSFJFKfDbE9zVjneiqgBexshjEK1fCG4jr9vPgnvNngRqtEKdznh3gjLE87bfewK5Cnvpm",
  "key1": "3FCeSKSfd3SszdXNQDnYdBqPM6iiAfVHjxx8XGSFHq192EzicfpzYS6pm5YrabkYXXTJijWLQLD4vCksLzr3L5ED",
  "key2": "5F6zLp2KNQmDYXjkxBEsvXM3kgyVr3bsnBAjRC2MU2rTwqM5A1hhC4jGXfocjVi9Hre4rP6AFJUtxvKy4r5fYxuk",
  "key3": "31orkfgY71CpxTEzgm51Jgv3WRT7TKUJDfj5MyRinEAh1oPGh5tNTKyk4tEhzQ9xf4bFZAQuvPTfQrZ2U9DXk4ov",
  "key4": "4HW8zyN6n35KdTAzJgmRaraCTnBsXXfViZd23F6RiD84CbYhAJHbCCjR1qCGiWt82puDbp8xztdDTgYvmBiRKpFH",
  "key5": "TYYVAB8H7KvTWS8LqAWNmhqV9FrWEumUvZc3u3vgY61FzGVC4Hwq5kXCcrmR8PmuefHdoYYN8BmE5APkE5wqdDV",
  "key6": "5PJCwt59bMdryebGm8FfbdJaQZ61UiA6n86LSz4f7d4TDyhubo9vvuEmFDRe4M5HtaiHXRsT7KQKbbzUGAARSgqs",
  "key7": "psab3brwzyaZjPhTkXgoAPWHwLZBZetXB67Snoq6ZS7gqo8TaMzTKRnGxYe1Wz3fvn1hq8ER3np7onrSMw5cynS",
  "key8": "58UEFge3gXeXPo31DEbkk4Qbq7GzVCGX98op55tTXmMA4nfffwsUXC8dvWNhaT4S3Vzc3HtdVLwCH2otUXKRQKRH",
  "key9": "kB4PRJ6e5NANgPgjQx3vH5pfXy3ou5MvocDzEWrr7ATmsaNZXoRpcvwuCnop4QuSx4UJgCvGgG2YT58tZrC3JdE",
  "key10": "5Vc7KV3YnfS7pQVDn5piktZSEytZevjvWAeF3Thm6GdBmw5TdTyWhTmLsQhY5nZM9FPVcfMCVfjqovNtnSE7wh4T",
  "key11": "3xfSmQLsaTBQ9WkgApH2vnUdcShh4TJ6Zn4NgdQvFMLhtpSd1T2uP8exfFkkd3XEppJr6Vd2U1VBqYvfWRuYK34U",
  "key12": "k4D3FKsSBMfiPhkKCCoQFd3bbMdSBQXcwRWtnLWu8xCv7DvfSVX5gc6zmgkzsbrqQc4vAaqrfP3oePYELLJAxo7",
  "key13": "4DEgfzq7Gg9fXQzcZMCRKsqAdhUe9bBZFLnCcXieppvBqGtoFGpS32SVQtCtGEXXrWV2RJ2ndCbm1HzYQTtvdA5U",
  "key14": "2bJgSAvH51dfC8u8s2u2TVeg5QYE2hpeDgntrM6HjmKZh2TeTUYk3LotejBNy9nhjr3LnjQ8Hid5vUgDdGPH1ReP",
  "key15": "39msWKwKAiv9v8oRx2ifyFwX4HaxzBnXe9pjB7fLu93RZZrbNyvvsCcgxEPmAkKtpDLTpwZxwYFZZkGCb2wWwfM6",
  "key16": "395HzRHt8E1tW2Bk7vmjcKThqsSXoCkQ9b7FR1tMZJNs3EyT1W7PhjMsKUUV9qshuY1j2ssSJSmJjpBU3tmWAkgM",
  "key17": "2xQxBJTWb6c7N3NbZmBQMfHVv4dB4WFPM5R4CzfwuErJ72Y5pNom1m5oDy4V8QMiAcdVAjD8f9pw5MPynWaQS1Pu",
  "key18": "3f4yDy4oRtMgBu6DBsGQ21b1KUmxQpaMRvvoaoG6mVhqVGtGpHQE7isvW4GwBqrWGkRBZAswuJRA5LambmYb1kda",
  "key19": "35fh9AiCNBXR9d258RTKoqgx2Ftq7RETqEp79VbHeDPGfxM9kEp2upm7gBG9wqYhaS18VNKDj67fyc9o7oAPgUMx",
  "key20": "4Qa9jV5RHHBGnx8m3Q36WpMn58enZfhUN6tesVmS7Fwg6o8uXzHuwgqty9sj8uztaWUiMLsayByC4dCg3KbZYovB",
  "key21": "4weRumbw5Hyusy7ZUVZ32BqXbrLGDTMECk5BD4obieU9e3wEAbAAtJDTWYNSqbquDsAiWqsLnaJmBACmkGt7mDdM",
  "key22": "4oHs4wPVpgr9f2uS6j5iPq7c22bVwfwfbpZ3CP1ndwgreGh9YLYAS11A5bLR2gqMrUuuuYVhQWUoxFJ7HBi44FNq",
  "key23": "2HmfwnNaXq1x9J5xhgdBKPsMkp4PVNPr5qkyuQ3oUNgVxF1oordsUNfW1tVoLttfn9WyH2XDZ26PAY3sDY1izzx4",
  "key24": "4M9EAf3RcGd23h3PzYC39cpqb5UaKJ6ZrdCPNDrZPCaFRyiUsFWFN3csDJFya2rRYVtZ2WupPKcvpUpJ5tXZxuiL",
  "key25": "4aEAGyPjQ6xCbJ4rLHTs2y9bLNL576bNFNjCNTpiygDVzbzLzeXGwik1Pn9MU9aqDQySxcB2Uz8me24PpTT7btue",
  "key26": "4CjFMy3cJdAZ7qZjhttFKKFtiDzW98PHj7paWZuwH15bXeyUqf9ztWxtiwY43YEcAZpbF7Bgn9Tn2NWRGGAtLFZb",
  "key27": "N3nqDtw62yX9pHEq5jTKV5YdKaJywh351ffW8WCdsGd764ZyH2a7mL57fYrNcsBaXNvLVHu8vmiG2EREBpN28hs",
  "key28": "TTQ2gRdR4rMBvxVknBR7Mi1fya8cNRfhBMJFgQ8cE99iur9fRFHzMWeUocdespKc1PVoiYendnu7SjxjjEFbQbg",
  "key29": "4agLowj6Qmdsf5Yvq6dah3pzdHQNU7GUZeSQrnj4TrAmzABLzC4dSTqo5ntQ8WsoxfGZX6YSjV9FfaLujpSoxztb",
  "key30": "4CQgPkGyKZmU67t5uzxy1TFq31dT8CzsHu5Dx5yPbU6uVsfuqMRDuzrwMmuUZX7r2wPbL4Wvsk7S54SMU8suZx8h",
  "key31": "44vkVcgyvFSgvi6tSop4C3TKF4tqLGsYZt48irKUNZAZoWX5ceLx3xeERcAEukFb4t126M6xKecgSAbiimiJL26C",
  "key32": "nshRs2gbSQcFJuHHXzLQpermatrgvVjfK8kyCh4BRKPK2wWYR47btraEyfgGDjBFCzk8HTsVFxvvkeBTrWdErv3",
  "key33": "4ZZX4G1JBwRd8Qe4JcW4rVB8GqXgsBmtGzKr24NPZHyw5zzfFzeEyqiigp9VMLTwFDqyb4CtzEVdgcXM4fUWdWWf",
  "key34": "3QuN535Nbb2PW7CzVNh6L3bzqeQY7PrCZpoZ85eDHZzBuMQpgrtd3hRuduRc8cVHQrsuceeWfFGhgyw6skqGPK9b",
  "key35": "27iwyDwgQz5nVoCRBKoWicCQDaBDAsCG6saFuEq9b9pZNJZ19YcSw4UrsSiSGu7hM1DGL7jdsWYeyjBtsR5YbeH9",
  "key36": "uidXW1WofPvSesep91nXBLaeB3Jw4ZK93cvAsLZkg8iAgepXc4jebiwVpQqtjm57Nv1xtubnUY6Km7NwEYBhTA2",
  "key37": "3NFt9PSZBqe24HaEruMvs1vCorxF25BvEBXLa8sjWVKMwoEsyfUvSBFkhddiHwd7Age8zouA5tZV2dyKhS3eByKp",
  "key38": "qCr5dyeXXmaLHrqnhVteh8ERFXKfVLoUpHjueUchGeVnUw6gUUKGDm2dt5jydME7Bfka3QzK82YAhuAKuuAbSJP",
  "key39": "5RkzHDahE1GRzRPbUv7amBtU9etbzJZAJKt4NXG7t4oUjrZCXN3wQL3we2p1crnrUxpoZ4rVym4APxEb9tRdV63p",
  "key40": "4ugpmayKVFtw2xZaVroPDPBbbF5KFAWauUoAqvibRh8oi7tMKq8NGAYK7iBuTJGpVEf4Wa2wG87VNb3tdrctUSiU"
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
