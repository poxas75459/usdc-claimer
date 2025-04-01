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
    "5yYbcasHjxmeUdCKkykd8hD8UY9DF8EPX2467CceaZN3RRpDZB5hyeVdYD4yLQJCPd4GnVmLMV19BFJwdPVkEruJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MBuBzVhVQphTv8NM9nhxXBGTWTSZPEddSRVkMWvvcgRTrtA7HpLANGBibZqEVRxCjcK1wm54mmujmvWaDoMJybB",
  "key1": "5w64FZhpHJJ8bB1Y8axgDhBf13GhGyz9odTXyy3pALsJGyrXxdrfPz19eiMiPGqSAY8gw29en7eQuCVRgdjy6QaC",
  "key2": "4GxbXE7BNrYuDtpF8xG1j14e3aFd2oxbCeMGm8FUrkZJQkUCB53CyZTsHBRyKDUz5odbrVSHjWuiXTMzcdPevKGa",
  "key3": "4Kfp5h7bLUKyeAVNcEeJjn9eN6gg5ryEwS6f4vPKDE4sp3eoeveo7J5MoxFiDsEmL98nadDSmUvqTKZEpprUh6a8",
  "key4": "5FNWTdHTuzwC9Cq3opiv86a2VeTvecicy5prwiuvkPr3iBxmMW2Wf5i2y6ho8YUHscJKa4BgGwpa4tprioERckrS",
  "key5": "3Pr4XRBcAjtTF4SoYBkGV7N9mtqLieQYM6c2gLznR2bk28CFJgQr67uvJR23S7SHeD8QNf4qZowooDgXFpntKE5d",
  "key6": "3xhXxTMC16wh1hkY7sNSsSrFXaVHnsk2MG9DjQTk8FV9RsBwPesLhT6rHWPqrXBirXz6rEC9g1hbYq9aaYZRY9rH",
  "key7": "4ThbMNF1EiLyWbYeHmmFrtPSvKcpqzLNKugYj93RHSCwb3AB1FfYhPPzu4y159SDHVaoqV2HzmC91JtHppXeycgT",
  "key8": "42oMTLMJZ354p7ZnjRvcqFrni9vJBgPWJL12z3KG82mQU4CdKWGySCAsJgF5vZPZBkREoztPFvWNXTugjZw2HGzC",
  "key9": "2TrT2o8UyyNhGZuEHJJZZJDhiV4iXDHiU3ZtqrscZ5QJnaUZgeraZDhzGaRnH1ieURf652mkpNXdcRTjzs274H1V",
  "key10": "AcBeDqyZFpm1xBDectT3KThuQGbf2Hfi1Xrd6t4PKfU7kSkKsiT6wtcaBqAXGk5ewJYS2vHKwHkSP8gjVm6bT6z",
  "key11": "5V8ix17exSjZ1LtMvuXoPi4gt3kSTDrUoGyAE5FTy3JghbaafPjDhSopNRc4u5sAW7yGbhedRp6w2SoL5sVK6mmS",
  "key12": "5fkYcrBaTS3Y6mLpDQPZJXXXboTyWXi2eaWVciCSSSvYH7yggvPgiNRiisAG75ztbjjeYa7SC3bHrJNKRYi6pT3N",
  "key13": "FDVSquad5SRYHHhGVGm6HUABrhYxSFGt2dM5WLDU9kZejLSK3y8kxrdX2Wf7TRteJ1Y6Z4UounzJfuhaKSAdnzH",
  "key14": "3mEP11q2SSVJnGf52Hj1KXbKdS2yWQiT3iBE9LpuVYY6gZPtoRnZ3Ba8QJvYHmckbi8BkkKaertWWKyVvr3RTnn5",
  "key15": "Ew3EMsVd2aMEFgcPvKqP9sEVoyBgR19HVCLN5vvVqc2TKDf3uQ1CciSvZudfCSbqGQScQxvUb68HzGy4ph9MnyB",
  "key16": "5W8oHugpwLomzGXaJrtKNhucCXye3VjzCVWhRYyvicuM3sZWssUhtjAPcDBdz1hBteMrDG5F1Vx16YrmfjF1sbgm",
  "key17": "2VtezBe8afysPtGFywkKMdLUSGbCj8uGfbyKbecBN2Dn4nFc3qJxrnaGybQgyYskgyb9kcnvL8KxC8SmmBxzyfSg",
  "key18": "7pWQ1LTcZMRwho62KaQZNCXjeAu3tb9jS5Ax3iYMjsiqYgW4rXwm8mYhDaEj6uKFtKJHbs4vSacpJYCADCJVGvJ",
  "key19": "9SKsqGUMhLpByFgdisC2PxDLsGzH2SXpCwyjaSGAGMtjCom7qXKrrLibiPBGSSp5q1ndWdLpiAmcvwtZz4h8iu7",
  "key20": "4iYMEad3QLVAHBTM3sJYFdSqfN52owdcKZzZyTN2hwKfGDmsvcTsJTzMjCHHCVzTzv1QUT2PN8SykbVt9criSBP4",
  "key21": "JJbmbvCGhtaMyvBw6qzyapRDQLKLGt6rJWscrZdHoKKJLC1MZUB582tBGMqSG34VQskFSj658Z34LUmWGciTzYR",
  "key22": "4CHVS5jJ8SmPLZHvMLR6aMQCyQXWgZaZkGgnFpF71S9oT9wBC51w3VSJv5YcPFL8Nqv2cr9x2odbQkxiKwFU3xYR",
  "key23": "2g9RRa4ryfYCTGFQGVWDj3g7fCs9tdXyecedVjUHfKotHvNDaAeQLhdBhYRR642bXY3ZLNJwr2eBs6popAqqsb8Z",
  "key24": "24U2K22dNQy97FTGy71LibzvbZNrqJibu1tgRk3ykEKLRm98wNgGAoFCt1tAo8okoxXjsnu3UkwEHCQoXpCTq41Y",
  "key25": "3SJSYSYBskSPT3szzY1DESHyuwmFBhhnUv2GS2ZMkiwtTAx6yEsb6BPLoYaPzynYtUcxKBwHUiFYey2i1t4Z8BRR",
  "key26": "4giALs2AGa7mgQBRK7o71U9CTNxV985uLB9ZT2Hh5zRuVTUE4WWqsHVhs9MuBWKDSzGJM6Bd5UamFffDSFiRMtq1",
  "key27": "2kALRd5VRCFYSbceVGHm36nLeJHJ5NDop6gLMGW7doKZCRuNEbU6qCYx6uBxHCBED4Gpkx4TR2MesTyrUyf5xLoh",
  "key28": "5NRiKGuyiKyDMDKNCxLF2czSgiMp6hGgQugbGjLhyCXycPKq3aiPAGDoAYEUEHM32HRKU3S2kXpYkfKnJR52qQVG",
  "key29": "3p8orkGhfh5ewtN2wBkpJJbMph8z5aHB5TqVUrngsQTYxRBQUZYp29kNgHPPav1aGjoSZgRG4vsip91BbHvy66jp",
  "key30": "3z2iPfzAYTDAySsGycn96aArNEHhYKX5iAGNSPbqwPbaS1tdSwaZ7YZY5FFLVdGQmQVFTRMLNM5q6qGgwtnUy88P",
  "key31": "51eRPp2V9cG2XsV2FCtP4JhAxje7hhSmfahWWPagXrbjzydwxzPHFHbLbW78maxVGNwvt77jzW9uUDHkLPc4fWcp",
  "key32": "MYSbLUoNT1mQCxWQt2xPLERP3xGhZVjuDZ2ukxcCNQGhsLFM99g97V6JRcKaH9umW47UTNf9wJf3C1FpfuPP2xA",
  "key33": "3GZNjWzBDGjaL3eGQDwsZ6YznSfVGuC3VTtJWqxLpmJNN74EaD6a5WHvqMZuqVh899uPtpmpaQqRxAJGrVRAXFZW",
  "key34": "3E1pJP3khrDLcauNN9rfDCDVMfteHyTodTmBX12xMiDGBrwviuFv42bx5sdp2g8sYoBLaLCp8jSBTCgxUHAabx5j",
  "key35": "5pSjkMY387382hvDZWyYM9YPYezH1X9wMBT684Qqe9GopFk6c2mTqzCLQwi8YEERpN66vCt6dhBdvwpqFors1VJc",
  "key36": "21N7MkPzdUgJeRWx3DLDc8RCo4mhRt3tiqfvfzFTPjPxGFg6jSY9mEDZaVvsyeqpvM55QPrW65mXomYrbC8MPKdB",
  "key37": "2KCskGzijmKRRqMeBR7fhYAdqn7q2oLMLEW3DvZRQSXCha9SW1vk9RK57R7EF39s4NYgVwW13oxsbpvuS3VP5p5g",
  "key38": "3bVGRD69M3C7siz3zXK3oW3fZPeFvFfhDzgMYaimhoJoJ7rwmgPwrXHMBYX6ppPCzKkHthDv8SE34KxVPoxkiT1n",
  "key39": "N1J9oWAKMN4nVpKzXDNMCy5E1yHjJ2RpZHyVj3E7VeyPTa9tnQiEpVLtJJhfqfRJAjpRtD5BbScDwE5jhGxsaka",
  "key40": "3bqQy6XzVsGiFS1MZMA9XVhgAfA8eTx133mhjJSSLtTZYSeBr9kTvvvy4zAdL48jKFk38zPPiz8F7jE88XYFgArp",
  "key41": "2cMhtkCsE8tLdwTepV7cCeyiMztD6eNczzHGsGStSxV86HJqRfuQ2fqS6oWH3ifUYh57NbaMkQMaErVbz5VWqVxb",
  "key42": "xwZihCtVF4vGQshiofGnCigb2J1itkYhohBwHxqUm2TZ2osJ55NnCnKokZi3KSyGjY2zwLwSEAs6QBmNBdKjvA5"
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
