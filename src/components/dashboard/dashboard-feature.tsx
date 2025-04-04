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
    "4FLVoVBur2QTwfBZTqw3yUH7hbaDh9TZnDZECnS21ALV4WGtxoxRtgUg5DUsstRQRbQb1cYGTJD3oiMAcgvGwVPU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4R9amVkCbJ4koJRyjkrUvBQk15eGn7yuPCWQahUU4KFDkSmnfpAEndVeP5wWN2EGyTWDQwPVmUcAahnkGBhBuCF",
  "key1": "4HZHjoFEUqWh33Qde1t6nJoAYAcD3ERtFFD5gs9XA1T7VNME4e8CS4GgHSzr6PVwrTKinLPTJgA7dp6MfeCUHDBF",
  "key2": "5Ahyv21mssUepuMJ695jusGfLEANby93bVBnkNC4t64fkgeroiDQs95ea7w6xYhLgKfVmzYhu1yhvSGuSc1URXFN",
  "key3": "435um3Eq5uWT7ycFRCteqNGkqXvQ2KsYJDy16voXVnvkX2WCvrPxgAEfr4FxCHu79YvrCMgyDeWhzUYZxnp6pkg5",
  "key4": "52oYWvb1GLwxBv4thzm2ygZX7ncrUiT3TTcCztUfUEBW4PkhYSkbFscxJrkXk1TVX8ozPTKYdTUbu9UtwyxnQyen",
  "key5": "d86akz7pxiC8QxeiwiQewobwqLvANpuGvzVPtNjw6oYGmMHRCXef4B9fbctXxYxr19gGLqe4ekBaypmz8HGpk5m",
  "key6": "4XjEj8914RgxPAUasjxW7tGmM1Zk3hRa1yoZ971tuzwLwrwxKcDQhWYnMFFppL3xSbitFXK4FieFFtpqVa1vXF8P",
  "key7": "2HRh7WWv9AX6JmKRvVuQZEzynDjhVYzfkVKxEC9c52bPKieT2DsKYssSY5q1MxZRA7PEhnSBhEnyAuPyH5xb3FnV",
  "key8": "2wsFgJGvdxrLT4kYgmeuGEwiW9R7NiEZUxFkqcp2odUNmkfh2atNbHiQwV1Z9kwEaD42eL7vquYVMY53YtRU2eyY",
  "key9": "V5nAz21guFhnddTtCDQhrk6M5hVtZ3NVfmhh1VnHyEwvR9dM6E68WAyQKi2vbCWqW5mg7mGU3tz7Nngp6t3wcz1",
  "key10": "5khkPs3SzTKwYDZJckbC1s4Jfq1HV4LxNTncgwgLoj7UB3ASpFDRWXiXkDxuac1eSBHawaTgjgf81rt3Um94MjF2",
  "key11": "36Y5ALBW82TWWpkGH5caQ1SkQ7ZUGg7d4rFcR95Zs6A1WSQNwmeE7k8KpJcpreFYYTyyGyrsFEARgy7VTD3qKZT",
  "key12": "3eLbncfPLXwSqx2kuHnxzg4cqFTt89gzpvHceFhyLQaAaWGkBHaNcFsrxV5inveRNXx11gMUzg2wgbGcrJLmPpmw",
  "key13": "3bSBeASN7brPTQTVmVFh8c3iLKB4psgvu1CkVQ4RHjeonS9x7cP42Ryf8PT53hohXt7CMVswSbeFCBmizPjgnxva",
  "key14": "4unkjTaAm61SBxCxdbV8PC7rM1aEgu2NhK9bu19VFT1dWbDdenQ3CXPzM7jba25nQnBmAscoVekkZHh9hoxxsmsx",
  "key15": "2Ymv4YvCo8sd7UBT4a6hy7nxNYs2y1KmnZ4FnfdH85qbaM7kVwQcrHAfqkaEAcsYYv9CAuMd6a74dgXqsNQJcoTH",
  "key16": "75aq9Pj7btbHXtqhfPyYatCa8T2xgzFwJJsJubgMQt2aVcHQV1qJogmdjBniG9ATSDnWjgUHmqbd8S8difVSCp6",
  "key17": "2sPsLLaqgEST61oz5WWMHVdwvQwq44WU2PoDeyaTFsyD89AeCzKPeYxZ4EXvsw2o46yz69eWf6UmfLDWHm6fjufr",
  "key18": "4zHcV5kvvtfPp1SKyjm3ssASSbbP3Rh2ZJBRy7LRQnQ9XWTZ5VHD3Mk4uHZyYybr2KTkH6YM9vhAqB4eVutHRhK8",
  "key19": "2uYguVJRAUpv48L5NXE3FYTcMeQBGHdLWxp8RSNJ5ELb3UpdW4PRsNpY8KT9v99917rZaEyU77wEVHmDdmmLevxS",
  "key20": "2VUWLiG2BfWQr6XSCpE2asUDeWr7pz2n7P6GU4nz6zWEBuHnFgacSSXXkzv8rtrmsBJZoSy4Ny5TwFrzQAwaTmqz",
  "key21": "52UchAjzyiEKehjJYjikTcWQuzFTcFerBwm782zgALxxRa74SrhoLHsJyh3APA3Lfb3MCfypESooNXWMS74ryS8d",
  "key22": "5Xd2hUEuMW4awkeWZQr4tAAgRpiJEggoz9f1JAKQ3zD6FsTHHh75vwvDeXjH43yRDDruEjbbMfLg18KVwaHfTj6h",
  "key23": "2mhLYVBATQriQSWevM3u4v5fDWGLLwRg3yF4w8FMHHgEPwCAJh5avtCyqyv16uoQv1S2uySiuCjoQ6Nv45pjdcTD",
  "key24": "3P7C8swi2TSpXuGzHykYygoXSYpbdmdd2KYfHYurseBZtbSrNF3kTNvJG99bbtERezP1g8zt9EP6DJYdPsQVNV7F",
  "key25": "55jASieKPiqRzTgh6FiNxjk3vgmsQxF7p7qJ1DCAU2aybsmogcuBLWmTA9EwDuBEqBvDQsQkhgvzB4DeqeSbNpru",
  "key26": "25GBeCqM7ckuiyY18i7VDnHLc9j4gsTmx4NTJM4G7Me8RY6LbMNDkXCytGa1JiLUm9XYNRPC32wyM8xAUnFRDm3S",
  "key27": "4f3GZbj2xHnPdnj5D1S3xLHDryy2tpooHNFrS2Yyr4j4ZH9ThVSpxGG63CQH1bX9uQ5nKCckdsNiHTc2Unoy1JeH",
  "key28": "3EDGNKjGSfu6Hn72WfmuBVTETYeLMxFtkCVXXxw45z4had4KgXA7A2AstxJ6QvphS7TwhfsEpYhoQachKzAFTmJx",
  "key29": "4v3WBLyr7bKazH19yf8PVcZkj188WjhpYSzhU84DJReEG9FwJZSZeMBbfcGXzrAutRF48iwicndmh8BEvm5yKQYm",
  "key30": "2RY2GWMnf19ENbG2QCBMetT8RtZLzySkL7SaFnQJTwMsDGYmcFJMZAW4YDTrpu1MKXHPxWG8QMrmwCvWnDhuUyB6",
  "key31": "2BdrH4E4FoHtX5Ru7H1K71DeVaUfXKvY7iB8234aCcSkJUMETCbTCVnrir9memKRvbM8Z4dydDhugd1b6xNG9AXE",
  "key32": "4Cn3T8DDvRGzk8cSsMAnwiz2VE8EFyvHw2jaaBGkdt5i6w5yjKjmy4h2Wfyx3uSjZpieGo6ohZcuQayVXJGLMbfR",
  "key33": "2Jin9gcnA4hB8S9BcLERxKXa39WCY3j4bRH4AF5wdJYJHGs9mQ6Mrc4Rv8XLL3vYu5DooBbxPikKbfmZkHTA6e4U",
  "key34": "4rKcYf61fHU3yjt8BWMJqs8QPM6dSARy4cZnWBKhwCzQaGPN4FWw129T6aadtyi5PiRVrB3964zde36XMzVAgHq4",
  "key35": "66AXiugiNnHTvBZV9X6HQ4ZhBfAWsHMq8if7nKrNXsotfyjx76nULaDnz5JyE8CkGdPmUxC3kj21T3zu9TuVQDGo",
  "key36": "2P37z6wji1nBJAGN2e5zJzCn8thDv5W3B5qprXtrHtTumSqgu5dWo566dKyzm1vjTYhFrL418qrrmXDFXCwMbr4T",
  "key37": "5VSksjTYExQBuVNQSMZgef9v6HdcB9tZJ4zXKYGE2Mz9oDVTsNSK9sjfwi3d9CrFpUgbepXwyG6G7TQNKnjzgiZF",
  "key38": "2QPFdv4mprtgADKhoHKgssPZ4cRaFSgPoDpuFwcuvgHrNRLZ5AFwyJ1k716DSC2zPTbbwraeY7F9igmGSwzLtk7r",
  "key39": "5aTnerMLH3u35bSQnVdjnpTtsLyJb4iKdGKQYWtPbLWjwf1AofWQkRx3pfyT7Y9CarzXDt316CRs6xH1Vofc6nfV",
  "key40": "4q3sQK5qGUFfWr5mfbBsT75i443NGvHBbSv9qrHXyjGvBf6bWmTqQfFHjmtYXAZkNWLR7TFYXFkMmcaG4yeEmC9V",
  "key41": "24st1u9NenPusPLwR1DDyAmWc9NH8PtGFkvzk8d2pxZ7BMRmSzvUeeJLyDY3typDvHnyuxNvN5bCh7Ktgx3QLrbB",
  "key42": "3tr4xg8cr7vUDRWXYiieszivSW8BYAtSR5y4myF1F98zsB9VGc7uCHHxXMqdRe8tVy3RhqMYrhQCP6H2di4Suy7B",
  "key43": "3h55EE5hndLwuQALgr1RMBKqthwcwcw3EZ3rx2kq6qPhdFHwbj1m43AiJnW1hYgjHQ7nWGpbDeCHZGZAKuHV68bP",
  "key44": "3ZjJrnnNn5VwrGhPm9gVwaN7k2LT5KYC6eRnPHAV3RMYCecvCBgJZAU16xzzRiqMrUZThDijCHfgQB34ojcWp7Pi",
  "key45": "3qCK8ZupB2sCiXRWgP9dHkvZgoZpxiujTTojsvR8Byc13vhGxsQHcFAbDoGjF3fZPJUNHFT3VRFJX8edYq5wapwj",
  "key46": "2mnNk8XUHxfnjrwfaQTyx8it7CoKYhKaQTKfkJ2QcZMkZg9hBoFfkNRrp2mtK9skosrG12CUopgKcssarivcGA3v"
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
