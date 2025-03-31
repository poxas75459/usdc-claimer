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
    "4zmt9WUkzJVvLQ8CNqbcNwdXFJ45kpudrqiknj3QtCYLRyDSyz91XTZMkQu1gJfpgFH3tkLqnUqz5zEDduYj8RnY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fyYa8LLPVocRAVSMsDT8aPjqjBEyFsm773WaETr9smxHrDod1jt9HiSvhtkTqyXUwDBdU6YdUm4h1vyvjW2DL5R",
  "key1": "3ds3VdUND65Z7SyLes1ZSPbdfaB5iL6r8tXgoSzUGuSazfemSZBHpRxMCLfwrmHBTCyEb16HYR6uvTRYeNaev4fT",
  "key2": "3GRer1xA8seo8eQaLiNhnCWnZgVA17ZDmjjpwzX98w4QDwwga4bCRTMRvd4nk2CiWS9UnqBREs2Ga2kWhqP35knL",
  "key3": "4GoQsG98TH5hUMGV823vUNAbR9BiJV3LioLyLy6rJHj9UWncTXpFxAZ1rkF5DxPf8XSBLgE4Ap4zCqjSBLXqME3y",
  "key4": "2wKFmnQ4tZw963aMKrFuLSBDWuyCyWTFKBYSroV9DY9EHA4z5eQzcHGzVeR8B1fyB1T4YCdSegADexCSFnC2s5FF",
  "key5": "5Axs32c3hwo9qE3cCjMSLgDY4CEZReBz4e4otqJzVhGrKDXDwuSPa7k3VXDYjpdPyGM4kuLheyp9CAZK3pYLiGez",
  "key6": "FJQnZeegaHFKUUjACzHM5A7E5ivyQoeAhikQRqin4Mz61docRJP7z6SdCaJTVFYDLU86rXBiMvZ3MVAi7xxnTqQ",
  "key7": "SpF2MM8wTvHEEgu3auPuW82n5VWWE2wtkiiBH6PYvrMaatiuPHJ3wyrf8Debc5r7XxWfn8s7TPZdz2RrTLBXNZZ",
  "key8": "ZWvcBnX9CsfE5WJTbXcVdXJb4hWPDbJwjzCQdqumLwaeaLE5K2deT6m6DoMFuG4Z9qNXm1KpnZVVcHmkPsAeb1d",
  "key9": "5oXEyR8EPaYHjfaXpg7SH4ibiy3Nuf9Sbq5nB81iej2H1PLGzgS6FoS5EtvzcqYTvdbxC8frMGfsMDsUJbwsvBUw",
  "key10": "5DvLdGcXnxeEo6qE2Jr9vPF6yb2rf7ikgmMDdWH9Ss9ZfUy1UBSUGaLhH2G89zdKt5LbbGRwaTacMjPfdAhQgq74",
  "key11": "3kTYKQXJquTkWg4FctiRjP9cABPP3DTmm5CMxZrn3ViVtyGP3dBoPRjsUUUVLzLoPpCnEPU6tSkaho5qqFdVD1x2",
  "key12": "4fLhXCC1Ka3pvqpx9UQ2GE2EjKRNbJB8Rkcz38SJ1PuY3kvVqPo2TotYywcvGNsiZ4LspFCyxAHPYyGHhd5zwBDi",
  "key13": "3ERNEjwSiMbBpXc7vpGzNoh559fFZ7xq9fV6NdFDGE6r31jhcoBs2KuzBZT1PzK678BaAVsaB27MBJWuZ97sZs6o",
  "key14": "2kQC7YwKXaYEeGJrB2aGcXJmEh3gBpoHk7zPH2xLKm7P9RgpTjBDmYcyWaiGKAiDdodsB5bpDZoS1EGpp2N2NcFp",
  "key15": "2V1rTzHZFfuxGiHw6pWyJKXy5qiVAg2uEXARAY2SRBqYSxCtfUbkVdc3yxDism2aF9xRSzh1RdEKevMo99x2Jqmr",
  "key16": "3pRrzxAj7qmx7gmxLQiuZdoSaj5Hwfhr3kHcmKUZsERU5qphhiES1wpVarUfCCh4nRfuahJJENPRiARr71xtW8Ud",
  "key17": "4ZGdc2FqvjN4pSF7UvRo8Dbb4qUzb1yrqLadcRVH1x3pjqeyN6G4z1Ko7XVbPnj5Udcb6mx5eFfyT1dxEnE1daC9",
  "key18": "4hNoWA9TxyRSrizsPjre7zjvL7oiYwXTNVcZwuCf5egQZP75EBLttVMvQfKZh7Yrao9CtHDn6qTysYZpE15hoqwR",
  "key19": "3CY1cPBczKxvSsDRCnV4k18KnmiHuBJh7sFE5ppvvipmCH2G8RN97HxjsKteT8mUESsCeGtcdEa9soBBvqU783vM",
  "key20": "5QJGBjeJDAyn8xGJSB51wtS7cNnLvxzvKE8QkK5RPfxhdhoNjjr1KcLgpam4vkR76vwrWAv97ZNUNvC3dt5oincW",
  "key21": "5gdbC3d4EotC42ZVTvrLPPMfkNoj19Xa2bU9XNwFXk1LsiSoPsPAu9ZzsBcGSP6SUhZkKt5mYRtHt4tTgDuS52DP",
  "key22": "3sEQMBysqaPdGdn54XNTMkh6BZvezCn2na5gu8xaD2xLMQ3sZWC5ibaCTcLugfJsg4QsX5Di55gD4Bmrp3cSC713",
  "key23": "5ur6zYEXSbdEBn57GVzKYUBVYKS1rzF3aMCiJnj18AQUPJ3zobnft8gguJ2iYGtWRZyMPE3XMUo6AE1KgNLJF5NY",
  "key24": "DRqk2FH9zoLXjVJqydTPJkcgTuKFvRzwHHd7tLV33E2igHRg5fGMJpsFavCfZh6BCB2GVQ4RzntQ44xnKQUSwu5",
  "key25": "aRmYGnBtc6XX7T4aqpyN6SqhMGa7baGgJLst1EU73jNq1s4pzPGF2Zvanr2sp6G3RVFPjQWn3yiKFaoyheLbGag",
  "key26": "1UE1WJMLH4ykGN4kaeETAmSv9SxKc5L6intJDsSZKKVTuTrfQrHMedsWcsD3fJAYsdirpwEwqXnYZkzUcEphnZa",
  "key27": "YLHgZtZb6k2PRymrxUTRn8DEu51KWw9BJ1NNi3pdjmnJsxgGg6DWpYToa1E5RWYsEoDfML9TvuE53ZQzSJew4hg",
  "key28": "5rq5aKsXj9akCWhuQ9UMi3CuqCdKvVuT4gCCJ4YaK66JoLBxW62GEdB5pupnfK757LrqSSQtDpHbCZBSqSygwtM8",
  "key29": "dS1nfFLTaE7tzUDMpDY4Nwa8kUGqbWQE1sm41QJmwnFXj5MM4KqxA3TV7eckbCNeWVfD3AUCFAHcBPEgdSemJLi",
  "key30": "sxwKKWaQUBEbT3mbbUZMvxXnsWJe44eJS399zmpYpfP5bhzAfTcf2VouEiFww117ucEzcuDyuxcYB6hPvQE9rhF",
  "key31": "4UCy33nBnBktdE1gKejHmMdSQmhKkXGgB2tSuMLUsosZByJZUEM1NULzzC6KJNDrnsEYzjxYWcWTbwqAUjiQ7xXR",
  "key32": "48LvSToLwedxVjyHgvzLXRNMAinQzFZeJ6u8V32C7JMBLHzv2ndCtwXQmzsVRn4qVrL6SgwcpDphFbmZpwPWrSqw",
  "key33": "23F6udAh4CWwJuwf6y5K9Uy6tbSK6B7LXxeLUHvf9h6TTqMRrgQ5et5GenhJ6473cBtnaLjLToa6dY91gonWzU2U",
  "key34": "5xa99d4QsNc78ErrBCiZ1ZoMGWFqngvAjCVm3TJdRumjysbU147tFKPoxxfQGK2HDJqn3EyLc5w7F28X8YDAJTv"
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
