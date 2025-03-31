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
    "5ax4czWqWM8bzTiQJ5Mc55Xuvf1vCDseGh18UZSELaYAfdhgj7wF3uEtzzsSr338n1aaEWxGoKSMcBkzjEW2biWN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4t7sfE86f2bfwUSF9FGELkMuAjn5oE6o9GQLXoMMKcup2J5YsLsHyeocnn5zGdJjPiDMLLscaVTi99p3BjQCoNag",
  "key1": "N6MAi2kiecxD1CZXMSUv9NgfAhyp51ocHjDeMPmr4AcPGmPSgKMNyPqYdUsbpqw66gFdMmKZLZHGcaNtbYG7wWC",
  "key2": "5z47W733SsveG2pdzYEs36oqQPbgdfv9pWThLAsNX3KSghTStJrspJJqknW4HJLbkYvdMsW1xZ42q7yqiT9ytzFS",
  "key3": "rnwjTKcz6sAaBdUSnMcaHHNDxVWP2XjituQpEkvk2LPtniit5FUXu7y8keDnQhCMmPwhPgYZqyN1K3r6UVwVLrt",
  "key4": "4qKav3eLxrw9DfspPnavDQo9qDNT4c2tv8D5nvSgipf6p8PyrSyGM5oE5yA6TkJHk7Res8HjDKUfJuHx2qT5Bzhk",
  "key5": "sfndxi58VbZopDBRPekdfMQWh6c9vegkDjKL3t9m7K16RBDkEXqYF16e6GpRKyrSpwFQVEhrCdB5pmeEcjk4XFh",
  "key6": "4Ud9e42zaES4njWcmB4cMEdCV9TnycqD8v9i4H32gPGEnhJJJE5iUviT2wzWzXM3u1qwUNgbeuuqssKHKCAu8Upi",
  "key7": "2xm8XNSuKoXtqoMiPx4gbHuji3RrvPrqVxyEEcGSBS25trLyhhUdHmxDo2eyEYgMtiusuFWE53r6uLyMNKxLAvNe",
  "key8": "5qMtzQA1g7uvVsQ2vAGoknnfzdD9qknsvNXXeD7byhiRVGzF4ZdktNRtctkkqChKq9rrJuxUdKyAL8ZQffQt9HYo",
  "key9": "3D9MY86cdxZmZ1pXFehZk5AaTf7vPAKBFmez15s5unVb9EQXts22PkYaAvizdCLTuffiEF5eELSi4ohEkmtfsJh8",
  "key10": "2LCDRfeaKx5MXR546XpxLZqnjDPoZkcwsw8b52ke9ZA9d6sdV67tgqdpGMo1EE4RvTpfUzHtnsERAgWLZ8KZxwyT",
  "key11": "5Csgkj7975sFGBvKB12Vkg5tHhPTZqDX91C7LqGzG31CpPTpNcBGDn5KyMgzc1CWWRffciu2VvnSWV7b6p9657zA",
  "key12": "42BtLmtQSnbWWewun7abACxSepj1v5oF5hXWX6xuczyePXSBbgwFW4HGixr6Jns1yam711PrdJaLUhjKdPTUDoPL",
  "key13": "5Xdqt7nUwbD56b7L7j6VKLmK1kKE59NccEJrGaQKwEk3XbSYevyseKh8qSxJFks89Tm1sDaQ2hVVENQgTYh4nJ2B",
  "key14": "5tj1G3bbjwFLzbUiu96EqS6HcBgh14F5vTkFNbCkEHChMtwSHXVLXXrtFVm9ciJf64iSwE6yykMcNcjETsa1NwQY",
  "key15": "3k7kgT1Si8rff8nybDzbmjgA76NCiyMvirhEusBN31NUp5jE9PGZg1dNMDgMnEYfpVbEB1EsWTmzsrW1qDc1hBV3",
  "key16": "25j1Gbapd8GpXnLcjMzPxw9FcVW9bm5aCBk5SwJ2SZq92wUfJh2f6LkuwQfM6CY9y5i7s5VCQ43SyWT48pVK1Pmv",
  "key17": "4GtBE6FiaLiZxtEATGfmJWCXSeK3i95tMuKBCmUahnYdcd5x8GXwYpDNFBBeLHmbodLBb7f9TSA3ouBRyfntqKcQ",
  "key18": "5xAEZoy9AJPRJ2wMHfrBDd1UBs5txezDMfkWx3a7gMZQZN2EMtuV1G5iEGEbLi8r5i4yQBTV1v4aEn3fkFNNDM5i",
  "key19": "2EG1oKQGrLB6CLdm3efqZ7bxdzDknsqghjKP7suZfbrR7R5djJ97wcc2bENcEBhVfFTX5mpTkcYQK7ekV8Ths3oA",
  "key20": "2aRVh2n4wUzUbE9BTq6bECuVhu9xFKoxZFHj81kvigpWY6YaxiNvZ2VoRQEC32aDFL4suLfuD19semtc3rpCAsQy",
  "key21": "479S7Lnv6Y9LDnDMVB1iUfaKm7LQC6VX9a3VmBvbvoBrGrGSxtaiEg7aiec6nbjg5UTdPKyPCfa12XChQnfaXYXR",
  "key22": "1ZA13WhemBoRLLFtehg9SHtiaUZHi4vFzwYNjDgkLxvh1gNPnUoKCaYL7ryToYYXkRxmcMs5AhaX7jCCfon1esh",
  "key23": "4fXqddGqSWYApZM3saXyXEEdMURxiEX9SmqLNsEqvUoaFWxumZ2hVRrQkvrxJ2xyizs8ugr1tFwRmBNQVSrv4Zdw",
  "key24": "4DPgagQoAAcJeERJ3dsiriabZip8rwp41JZAXoH6GzSJhWEbG1njAkjt59JQ81tQCsWVB9FgYt3h2Sf3qx7wwSzz",
  "key25": "3J6Fky1g3P3Ny5QqfhM4PXfiHcaNU8JnDZE5ugLqm6iHBkbQJqrtgFfMxmyjfg53jiRAXiYhTCQXvQbVp54d5EQm",
  "key26": "5JvGtYbXJn43JLWjkhsbMi6NFcGSDFZfPyQZSkqxqxLCk9RP5CnEzdAYAsSQEemstwS7svEgpUvnGTjC3GquGseZ",
  "key27": "2tB1vM8KzZB8YiLuFpiMKW9ushFwNbxjaZHhSPoTtAGm8sF4kGyFgJ3AmBU937bLVySTCFwYN1PBD4kyCTB2awnj",
  "key28": "2Y4ECeaRtLj1hvZtRq5dBrhoQq1gVzeeWCJaZoCEJwDGic4uPpDj2PuHkYM1QCEseMcnSR4J3hhMx4tqJHzTyRJc",
  "key29": "3DDKepCxSgkZFuSvPiW11cfSFZ6ZnQh38dMPfg2sMhF8fJJaJthq1t1osy1WNK3yHCXVc443rigSqbnbCjxVQD2E",
  "key30": "2qiLoLnHNRArgzMt2LwP8XBYCbPUmx2TjSJMgbXCyCBmVjXykx4r8vGt7gCKjAMeeTa9Wiz9JXvpnKCD7oCqWh9k",
  "key31": "4YvHo5bytmKGxNARsm3UVKpoWCFggGHnGFVdWkZMWzvCo2rEAnjT2iz29CBsr9YL2xSji7ziV4Qgr9eJMkqtytfE",
  "key32": "2kH7cjYesszT2UXPoxJoUj1iiovcyPjq34j3srWfDnXDVRSmsHU16fv8asxxNocqZmBJ2DtBbZQLox3NNBUVzw7Y",
  "key33": "uHpACbLrdJ1CfYbXu3bTE8bSFnCv8VhKj7WhhkKJV4YiDPa9DYGRszaeigk8UaybwAPwgKirkhLa8JGZWx83eMX",
  "key34": "2hTQPQhNsj9fJKYAxbufK9S9CQTPgvBrdhNmbXCnn1tLSZXVt65LyG51JEcZH8Cfd9Xi7zr21rTk4W1wPuwmehyH",
  "key35": "89SVbaJf6N3B5UpCPmKy76bxpafbCjGPbFnmNv9gxLqP168SNWnQ5SRK2obH11NMq3RdxdCAkjUiVw84xpjd3PF",
  "key36": "WrGH9Ts6zFtEnM8RoTbDfc2JEDA8SR63dzTxjBn6ejSoQJMeSb7NNcu9YC3o1Zvi2Mvu2RbmtPmxXGgMfQa4nKw",
  "key37": "GpUWURBTqAKkXo11rtd1mFMvLVn65uXZSnPZk7Aub9Sqv8pUwMQJd9Ds7Hcx2Syugp1ehsHWEHZprydAG9JtzAZ",
  "key38": "2akiss6ypaZHYCs81HhckeqpFNp7GMSiwTMesZy16yoouCtxENUFMBDxopuEDmV6nPeYo8sD5giYusQYFMgLojBe",
  "key39": "3HHuhTgGDThPX6iWgA5YrAbp13gnZdyXGBRBSS8keCHX1jgqhXSVEp97VRXtQJhB8jhKqTu1Jjamtpfwm4nV48cT",
  "key40": "4W5D6VY2755UPyGNswL5xMVXZ8t6vRqfQK99bdoPvic9pBdYYxUaiRvxJdB31f81ALu2TmYJx1UxAFytR9Fvg4uR",
  "key41": "2PonPtP6VZuG19hP2dFnxRtamUxKFzS2nviBfFHAE8rGAox59qWoqzaLN2QfY5cLPV4yPMxxWRCbbLxBMEXYoT1r",
  "key42": "iYzQQS8HptrbmjoibHvevNQNtxJhMAeaha91FRstfKeSLYrJFsm6Cy8oByGEj8DwmQCrqYP2MpyJHfUDuEoJdUL",
  "key43": "2U4yaNyYs3rsoU21iEceGRkA1KPNyqZaAQZ9E5CULMQ522wGXpwUfqAGt6R16fjnUno7EEm5NBKgfp9k1fCDGDY",
  "key44": "47FATSNChMBwiW8Z7qdNvU1BqZeXkGQ3g2w75sYWRsQ6J4HuV9wrJPTrMKoj21qDio1wR87tDTaCZG2uV2DaGMzy",
  "key45": "5DQKWPHZMJjbS8yLxfbGUWC6NnRaTVovjpqQ7oibETo8u4cYDLLXZvprMDs9L7GpH1LTgu4XWVotVYL6ssjAaZCp",
  "key46": "44vAoJg4FFpmDYuMeFqx9GBTLihCByt1A5bVhBL5hnjNJ8euMQptnbpzPvV9qRz1mbP2sL3LibWgwBqoN5kRtXBF"
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
