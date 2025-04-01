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
    "4hxK3XsMjSzbEgwAsms8oVA333CWDmzdw5YLXSqvzF9wXQrsx3mvyRWkSQ5wKX6szXzmjgynWMgywuhFmVQjZ26h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cbbKobWuQAUrgZhyZMQMJRQYGMu6MRdJMxKCpmMMk6bzYQoAQTNcQmE4iHMooNgXxAfF8j4dWSK92s61pgvMXzj",
  "key1": "47V286biESNTQthaKufx7sYQpZgcPGcxmGMZYAJNj4myMhys4GFEKsKSG1WX8pZp6fLKyFHLjH1QS8Ub1ASTfX5s",
  "key2": "48JhVrFMCheB7UMwkDJJrDJ8j3msbipTpiooBJfYPsEA5fpYwjgma6Adq9TedTCg3S2QfyWfXmREXxg89RJsd4Go",
  "key3": "2zJNyQ7anKHnv6bVw9BGHJAuB8FNCF8DHFCT4PZmzDR2GcVinjtdVuLSDSrLnZ5meZeh9ptmxUJZbp1hPxg9X7T3",
  "key4": "SYF9Bxom2B8JejYZb4CGNU5s54wzq6XRvXnksdxajRxrgNpXb9qCEH4QbeuJjPCpWcpMzUG8vzRq2Rh6Qo4e1qh",
  "key5": "4S2YLzJG1MgK4Qbapms1o9zjAYxxWrumjE6vAEdSfzb6srn7YT2BoJZjdWxdiz3rY9rmTBWa2djS4LcED4euF2LN",
  "key6": "4b2xJcC5xtFMtCyn2RJdKD4mtrGFfng5oGuFU8zRhqojzWZ9KmCZRKi8UbCfeaoJmfYT4iFZzi8Fdx6Go7NuKvRk",
  "key7": "58awm6gYWkGdFpCLhu8nHo92A6ZtQcwNNCWrn3H68X6LeaUrWrLaWuxMAgVS6ogcmSXCSmbFkR7T8nYaPFLBHurk",
  "key8": "5o1YzS2SFVQEgUW3YU7wus4YQ5baoYWr9mRBybD79JWrM4g7C9FUXugnMfGk6bnQCiP41R16kFrgKPPth5eThjFs",
  "key9": "2xJBqKcJCAr7AKJV9SA5zgLHwqvHy2FRKdgfMCjApc449byy6TJbGmxkC8qG156yymRysKTQMQ4wBHGfmocT1eZw",
  "key10": "58iDarpwAK2oHkeGVwTaiRagKqRkxQ5K63wBHxcFdp9iFmE7EuZP9VmnEVZU3nh5vPXJUDgrZsb9eA9dmrhW1Emr",
  "key11": "JSneSC1xxxnvox3TLH2gnKYJQC96z9kEMvsJNRvDAc2NjLhrh2dJd3ursnwV2mxPqkae8da79umQqKM3WBMSVYK",
  "key12": "3vDsGmNH8thzHH51Vq3zmSt3K6Jv2j4DcdaNqVyG9iqzB4qeT34X572xxeMpyPejEjaPrModZfP23Z8cBVwrCBwo",
  "key13": "3LMzWs4rTMLNuKuUnxwDuWHYHVk4hFFyTQ913hXUyDpxawGHFE9sjgNXrcSaXgK1GbWUsSNz1xiN8v5TkB9Hvw3P",
  "key14": "3n1D76BLLvC6n5e2Th1MdCsicwqbTvEngpHF6o87dhCyos4ikQUR5fxk9Yze1aELa8ebegcsWVvA7VYpLxCd7XUJ",
  "key15": "4hK6StTmuJPRMk5SyCEkLsjsncZFYhMgJ7vYgy4kwxzt5stZUX2eGCXyRq1fLkGMt7VykE9wMimgkWvJYAWBnpKi",
  "key16": "4EV786Yr5eWRXN4VyF4KoVofkopYNTYTFvgLKGx6QHnRY6gSPHE4zsKQipQxEisBm4KSDKafusTGC12qL3v133R",
  "key17": "a8p3YBiHocdBPFtezzSTP8aCX7wKoJzCKuT5iLcEK49Wt76Qwe4eDehhfHG3q6rpWfpqKd15NB7wFP8qn6epW9i",
  "key18": "65N4LVtyXcvGdTXDWn3FHC59hj9nVuaHcED5qyaEgST3Vn9VWnWmuDBtCYaBuzM39SoXg1u4Br9Nc8vSkJUmqWDu",
  "key19": "4QzJiJKq3T55upPsnbtFxEF7b9QU9VUqZ5tZwAYuTuHdb7iHdLE5s8JDqUsWosoBZb1cSx4aH1K6gSeDnaCyBALG",
  "key20": "54zKkarWZG4LndPrTip4NfXXNJmgL2PkjFygb6Scx7rBTJ49qZZVeJvLXc5vLJGxUBnaxJo892wUy6uKPz8M4AMV",
  "key21": "2arzVuWd8gJD2ZsQ6iNzhGvFLTj9mGjXCmDm8NRUsRQD7FcPJDmaZsnu1ZNj5kapSPcCbEM8JzuJJYrJn6DVuj1c",
  "key22": "3ZbxvUyZMUWA1AiukAs63KpjDZT3J6r3VWhRVz5tZdNWyGXq61sySupzDYgPz8XcAQAjAGkErbvD8Ly3VBqSbg8e",
  "key23": "5VFV3cp17RXKecUqWEGLjhvRdFTznzEcuGZRhzEgnRpuLRvevcEUyaj6gawUpxRY6PCnXNzAX2cQUm8UVm9cYEs7",
  "key24": "pEyndkrw5GEf7dJkzrVDisFd2n47bDDeTkymHVkrmB8HKLPrVEy85WkGeyej3Lo5mviz55NnJ8S6JSywFD9rA6r",
  "key25": "5p27dDAAi4xtqUNTokZ8nwynQEuZwutN5smQEJcYeyYEizagkdren1WxYiaZMJSNbxFFrvhvz6DYXV6mjtnpK2dY",
  "key26": "2bGRzrxAYtaHSHJQdGKhoEeFB7VjRytekQbjZQqERxpPKoNAnGFP7YqYpkVtf4RLsHPwhXdwiDo5kYF7JaZ9hNR5",
  "key27": "3e3cujmSn9JydVecCqRrwc5vCZsra2BigQCxvFrcuSScwY9M53S9224K8vE9J4J9UKSWuV3PaGQGY9t3tgsjx7nt",
  "key28": "UMMMamgv4TD3CjnJzti23rDD6YakYWMrfhnCQxUEB1VimRfEW5cPCU9hgvjqEWRDMTAShebm19Ax72HfhsjeP6i",
  "key29": "2ok57kTypQndYnSKb5dMQNeDGfYKiCW1kmmdeT67PmYWmYLPou3LKAakMwABrZ1DH9kg1pHoj8c6DTAV91Jz2wjC",
  "key30": "5Szp8zXScH9jHckD6i86o6LzmcfADSF7csgx2mcbvA2RzAhoUQYNR6NGNH52XLdtMwyEcukNhhnrvXRDYWhjLFzX",
  "key31": "3DHhdTeEEW1eugx8mhNLJTrHU2QQRf5D3iAbvh1jfJckeTRcw1jj7he6aztRWRBVGxCVsZRogSspaK3GAznUzkDK",
  "key32": "4KRkf4iT5dgRieMKiNnuzYspovetuRqMNjaDpTwUFs9Cfi3o8gF2x4mTDE7r6dCnZRMVj2D5uGHTUZayf6cqYqG9",
  "key33": "3odaCaepke9m2nejCugz3PcBQ6PYzrMzHbLEVkbdcH3eindcwY4UKXGMGCNcgCt8ZQKvdFxhhNnuomjE2ZLjTxrS",
  "key34": "61GJVQ6z2XR4susoe9pytU7R7rqushvyXbjzAtCzAswqNSt9hW9mJwbm12E58yokPQuxhR54B7ZDFJxy1jyfFxoz",
  "key35": "5JKRfV55KXPJRW2yvqLXSkd1g6QNDHbktW7Fn9Lgb2devjmxTgfpPV81oSqYWjdyoKgfUpa3XM4eWbvDazcbGrT2",
  "key36": "fPAUBjEEpPgBBaMNoKdDqae6vfkJFmCUXW9VDXLTN8EDQdczofjiWiBuX69MrUieRYBHDuwhFdeoxcsjVp1xoJf",
  "key37": "66XknEq7UAbbZK87NCThnEk7NpXrCkUdFEEe5BWW1FoJJ8sciVym2gWBRDb756NpXFJTBNuDkjazBGromYMsBK96",
  "key38": "5ukMzp26hLgQzbqng5PsJyVjAYx81iUU6P6MLEePupYbpcNk4GSPaZe1wV93dxm5AkJySx2gNUXEbcDkfPoubqTj",
  "key39": "2fBREUyNHo9ae7yCM3upzS33V1RrTGP3LSejXyPqAXaAaWdSkMvxJ8gGcfz6kHiupe8WyffhWjK8vGH66eBcnDeq",
  "key40": "2tcYYZN6n3Tvfq38StGRyTaKYJjp6xFkysmxT2j6gbxRfgduzPVDxw4VH1EUd3ahDE3xr6TKuZTj8N53TMBXPFqP",
  "key41": "32TkCWuaXAHeQSZheXiJEDWsQLojbqXbSBnqY8RcDado9SKVjxS197P2bbfQorUd5LUYs4QGfo1k8bRtJngBzyVw",
  "key42": "2mPcirnJtCXfgZp7x4FCwiFqGMoPedsi5P118fR4cJN3uG5TjrXFbJdXzGDy4RZLoK7UsP76DsaSZnrLJjddrwwY",
  "key43": "2HVDzwYRYyes2nKyhFeyiHyAX6BcJhCvZtKhnMXvdEKTBrUbj4u7g4icLGY33CZ5QzqWQuoC5wBVwzUUMg9mG8xQ",
  "key44": "3RiwF3as2bv44Ujf2kGbEd8dymyiX5UGFbrPMUpSsAPf2H8eRpNhhPnYwh39iYxVTXy9wsKWA9H2bpeAZrceNrYF"
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
