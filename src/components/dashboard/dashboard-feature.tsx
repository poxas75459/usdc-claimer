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
    "47DWAfU8rVukcwwFgMP3TskvXS8JypLh5nKe3oHMfgT5pBN3pCajvrA9gw5L11T43KD8oGv94umADky7qZkSTMAM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SyrQ9nQAD6qu2BiprJnZzhwdZGD4GXqdR1rybcBMqx5GRwDiLp1vVaR4KzUB1wdGSpBM3uZM9bPYdb4Nnt8Nf3r",
  "key1": "4Z3czycABt3MWN3dwfTmV5pc55iwKyYQELFjz8pmoVvRE6U7g5KgKevXWPh56gkVde4dhFR2FA1wzJ9Q1gUrstuu",
  "key2": "5LnpjebmUnXsvkkG5QfMapsxqVkpWJwduNwCUMQM21vRmdjcQm2tGD5AZvQSLNrzXVtm43w9dLzmyDMaEk3oGYGC",
  "key3": "5uxhPRfrXGpp4rTfn5o4eLZhPKKnTuyhJJYiCwGRF4ju5mLFQxHFUqquvTx3Zu43srjXE2cRm6XrMKNuQEqeXebR",
  "key4": "5omQ1zdNEuKntZyRHH1xmvbbgiDpWHNPQys4GM3s7e4ABnhBmRvWGoBVQTaNeA6zVmB1dD48QnGmSrThEdsuxFSD",
  "key5": "2ByZBHZSpQiYzao15KURpx6mjf4tPDPvURNLMsPyt92DKfyVPZAsUwCcsSiQzBFB5ELfXnodPnBMWrTZxdLfDef9",
  "key6": "3xkavKR3z5pR9wWPKt2m5RNcfseXDaN44X3UU9oBMERkeUB3Y1Jx2S7uz8GxhYG8Z1EDrhpPNYPTigjF7dTY9iyE",
  "key7": "2nZpASRK2HQkpwRQL6fUjFVjm35AYSa1DdiJvHJ2NkMYZoGDsEi68WuAAVUq3XTfikpDM8igqgqJRNhqVF4Pa4J",
  "key8": "CZYCvWDaigpR7jZfPaP8pj3LZqdzvDKm8FNPnDnA7MTUKVSV96Qs2rMr5zTAg7BiykZM5D9QKZAeAWHGmJdnBes",
  "key9": "3YUioJAK6ekjvFbzojgg5nuUq6Apg4zvpGJM7gGwCKu2Dosx1Utadyk6KtFWBh2XUhsUu8NE2DixWdFG1FeF6sUY",
  "key10": "3dhxzwYgESbv3BekTRgLCQqVKE9VtqbMWsK34QYJDqhx4wy8ejhSg8mJf9QnczNsYQeDXxTmCo8BENZ7CDgAUnxJ",
  "key11": "4LSyNq6aQr9AnTM8MtMkzFo272BdvnhQW7eyRwrjt9646jufk3RXnZw8m4jSLGLMVCR3a11JJeosxZcRZmLNkG6C",
  "key12": "3phxAYNxYuPXarKXTKkMVPYLFi1LgS8t92GWs8V98ZK6mxjMfRFozyZc7Zz8D3LYfNUuMrTS368D6QxXoETZGyYs",
  "key13": "3e6S6ZZ7XgNXQrkiM9CbZVnv9omjEesoWkfXVdUp1x7E3rv3i7oWSYHHgLDZpW3VB3WSUPxXS61o3TLGbehevK4z",
  "key14": "cGYRFLEpQZCb1QKRsSmwuFquTxbSZ7rdRFsbDSUhGSyQujCT7g4pbBoRXyCEJADFKEJ3fVzv8bJNEL92s2YMT6U",
  "key15": "aGSCV3jh1854KJpQdasyUbUE97mY8z3gqvpnPum7x7PA9ra7KxCFF1fnF1ZEdpBxzHRmZRDULDSMjeX9SNpMMFH",
  "key16": "QdvKcYmXtLk95qnCa8RB11ngv4PHePZDyp7cuS3ZcW9iMSfyfU963CycpCZUKvnxV3kPRs2EL5UxnzxaD4VTihi",
  "key17": "NXJz8tpi8Ch1ND3XuzfzqQ6i3yw3Z7P77aP5UJYniAzqzEpPYgrweQjpApVoC28UKyX8YLWQojLAFNu72ecJNVT",
  "key18": "4hhmBPmQ3qApiz6pUibLzjk21PzvqUdQxpeaVzzWfb7MSnYLdwFf9ayKd6depcYve5pEznG3ZNnHCTpZ5EFjcTYL",
  "key19": "4FMfFDZ5mWyFDGYrxkeDKfVJNSZKAHhnTuzy7aGB6DsTMFbYFYxWenbYN74a3F4b6hWMwQt49o5rGA92Rpj4jUXV",
  "key20": "4DFzWJnpP6aJ9hWfhwvPrg1rinZTNwZoDpQoeQjPp3gvheSt8PBAX2bP22VRHQSVdUkVS47AcCcBbDj29JWSd346",
  "key21": "24g1t8keEEe3F7uCwCzohbG2qfmCRaX3CFgsAW1tTgmEq9JqHr4FwKVuazBvy8bA23vD3CN2wCPCW1FCasBpKfyg",
  "key22": "zuc8sLirdyeGrLGX94h5xS57TCi8gvCdkfzcp8pyJNmgabC5ANVXJYtfULwVRdz1fVNKwPXwHsSo4f4uyR1Y8H8",
  "key23": "3ctmuvBkRxAyHATJpZ3yN4RGu5MU6S3Q8zhE9Y288DkyVDAnFsfgsauymP3t83EzzWXjBLfS8V4g8uMaMFMk6xnF",
  "key24": "85rLsJav432y4ehvqMbyUAxS5dkmgAmVkHGpJdzsxSi9CSnmKrwd6RkyAzpP3ksKGGdrtvzxAhKFpfdUFTUqjzd",
  "key25": "58nZuYCb6SGLtwneyD4iRa7BrSdT5n5LQ3uvAcFzLLcji3Rw4odQ2KNeNVfFWmMkKhmW4WoNRL2qikYRQq2vEwp2",
  "key26": "5nCudZF6SKg3LkSps9FuX5QeNwQfsBwJosf5iVQCKPRru3T8L86hJmS2nBRrXKZFtKcSi9zqCxLW9tS27wDxpTfM",
  "key27": "3f3sggZ8PaQBBuQAegfqdQWNZiRAyrbaSVkkgumVwPsiSLgwM8XvHh2UXYyeamuypkHxGtoX2nEgdaQCDJgm2aN1",
  "key28": "3ukKxqYAb3pYVNF1UCR6H5BrwwXzF9FRWcFfEsFSNsxM5jCt4eGn1dRooMqbEQ4q3iFHFHpLd8n52Fj55z8vwmE",
  "key29": "65jqbZxmmowGwji1XpZs2dFCg3SzHpa8kE4gaPxDRrcy9adgrNuWzkHc4f5qxfM7swr8fyERHNevoGQhBoDKeBDr",
  "key30": "65CbAjV49x5NgMdv7juvPfq14aZKFGPfEQaiZZk4e7zfsrsohtq4BJb3REEQTcoVoTKHdsxm1vBs8wF6JmVj69LW",
  "key31": "RTdpA4qg976wEporVbi4DDYuAJPGzpmw63MnLg5xxrdePqTYCLph1oMMxrP4chAJXh2hNpiKc5mQhV9Mo1ugMRT",
  "key32": "4xd4462N5NaKX8V2a6k6Q22nWQvSvm6khCYRcRS8F5vSG4r388n8GNoCATGvbbg9KWgak86Q6sHhZj2eXRmNGbXx",
  "key33": "FYg6UDQvmKiux62ciGmq5BfhyERaUwYGxf1YLnKTHXeEUzRNyAis26VmDB3khH5zUKLVvtkBmd6Jyt11wVZ1yxY",
  "key34": "YHR7tYKLmZCZoSP15MGPLmcwgSzAYfsoxQeRnuQPYMbphN6VFJ8omsPMr7Awa3E6x8xmgSc5zUPXtNVd2uYs9Tj",
  "key35": "4eQ4x7mV1wmbfd7WuPw2XN8rbW5tZWHL8Lnm87VVDwN6sRzAzRcDJSuM32Vu9GYQPgevFKJ89MyNaQiYZhp53CQm",
  "key36": "5RSsc7fed3FPTYHeXVH7rQm763Ejra5vRZnWxVo5dtNaZvPj6sjRZRfa28ZYgjtbQaG3uBqPAiYvZEVLo7bsdzNy",
  "key37": "2k1BHC1stxXomhkAhFtHVizkzANyf9UDw65uYkRFVaqUJtUZWDZycDyQAJt8YpUr7kGpvB5tFouPAFdpunuMmHBX"
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
