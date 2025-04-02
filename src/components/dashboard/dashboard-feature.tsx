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
    "4tzmoLJnUQaKcujtRNEaHgypuFuAvo7BJRxXo1EYNpg5MUYNwUXbmJ1cCA7B6YDWpHXTXxxkN5zpzT8dqcxZ5pS4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5T6vK4qBwXtEEzamDsfn2rtYP7aTjtmKoL1akM67DAYmUtuhwZvyVEVBUsc1J3jsN1Xhzdngc3tVDUXk9FeinsbP",
  "key1": "2spbnezemaqpi9cQqi8hk4HUfQ2LdTUPC3a8RHz3arwk1regjkv2esGMVRKEwXFVQkoNnst7mzURr85YMgXDxPf1",
  "key2": "28PqC2cdXRy97rNghyak9MqQEpHtpVuSVvedgNBtX3jPwHte69UMT7YwB3Ly9YTRWqDPMuhNNKLupL1hLyt8wrqS",
  "key3": "54yyuMnn3GuANuCzmqKHKf4NKhtaiFEnvcoFd4e5bM1b5hVCuRirt5idrX4XnArJKpvLQuqmbC6v6nCviEkspEkD",
  "key4": "4KS8y2R6g8xmiZB3gjLnYZprWdx9RzsbwxUiRaYXYfcnrS1aMG3ewFLrYSrEWrRLj4Xbw9WkfEbeerbez97CTFnD",
  "key5": "2MhunSLikzfMoBgTJfmMWQhnWhxRdi4wbS5bWL7yqKCsUrLsM5FLjbPCtt9QJhzMDtCRKZMDHb5B2EQu8KE4AGC7",
  "key6": "45WqwizHVXvawDCYPDegQQAx8wFugRTKSUaSZEVN9G49CAVdnZsp1vHFLBhU6ZV1REuHcGYc1Zowen4iakMzsEx8",
  "key7": "2QC3KS64mQjN3UMr8hXGPGNuwADdRvYdPfPaSPzNjTteH4UjjYLDvDvC5sNfHmDrCnfTbBZTEgPEcwsor7eojpUY",
  "key8": "zacEaoKPTLMUdnHg8Gr3fmogm9EdiABwqQg4B8YX6hTAPEJgYk4KNsgZZq5mWBR1z5yFZ3gDtGXvnLoX58aU3fo",
  "key9": "2PVkScSqpTTAjKGNdsV56sAQ4N74JoPo9Q3pSeE4gy5uAZ4XR5sMZgSfwmtJY5bJgMjKNLRuRP78txLHW9jjb47W",
  "key10": "5WFKc3bUt54HAyN8RSzMzVyLu3jGmoz7t5Ai7LRj8VhEjsSpejdt53yjmUg6FPtXQJ3HRwn1zaMtQFMRNHNQAZGE",
  "key11": "5BEi9AEiNW5gktv87dKVqF6iLofYMmd65dr7wiTKLsNcg6Q9oCVZhua72rpBMGBuLZWvJAGLjKEpiTFBFoEXw9Mg",
  "key12": "2mE6YctBPf7UBpSa7x1PcvxUQk7ck6GHS9d78T5Di6QL4fXFdJLbLW94crMT8PaJonFAY1efD4fS5aqA4sGX8MGR",
  "key13": "2nG8vWDuPvvByJG9E6CmdsfXyCS6AESzE3BW1vNiPW2hVgo4VBCZGZZvwoSXrPCH7vhXCtqFhUaydtAAtoRAbXH7",
  "key14": "3SVNJD75rycuLbYSyFGqeQrqGFeBdnLZRLJ4mtzS96tpEAdnoFDbUHuAvYDTBxjxAS1T4SZ8iZVEPmLLJbhWBKCM",
  "key15": "4qH43EGQHeWz4zuHV4WQ6Jj5cHyFRwXJUveanyDYhkfqXJfcBcEsJ8oSPzDrP4bcdk7cP26QNTUuqnKQLcjyb5qK",
  "key16": "47RFMJrZvtssXhS2FLaoHDF766wXHqWonSN4N9n9HxxfdijNB5hmVd1ahKJXE8o5ESfBuoJogVuHiWhshjsVLZMx",
  "key17": "3rUJXR3CDEULM8m7bv9hLiBojkAJzFpLv7rbPXAxvCNaGJAruEyV3ebEFBhTmTiEzVewmEd3syrmVFDihdcZPZgx",
  "key18": "47gN8wtRpcmBXZkeoeaBYde2cJF6r4WJWrq1oRr6bZuT8zzECRgsc724PT4EFSUJLpjGo9UeRMWX15vcRSBp3tk4",
  "key19": "o9tJohRyU3YMMgKw95fVymCN26qLS2JEUbicfBjT7V8rnCJyRouC7tKDDD5LcqLpHkHWLePDzcdGfuyQwdaSzcm",
  "key20": "HVmL8DT1kq8rzcEkQWtnRTTJA4KpL9hugKZfowMgrKDu2SGa8XDqGvKMxQHtZ4KKxXHnY6kLCWNznGnUaAkUdJg",
  "key21": "65zLx4mkUj7rsWUGB3yy1g8vKtYUaZc6WcVN7gdYZXCRtxPG1o4tm6RtYXKq2DJ72vnrXKQPEKkRtEjXmRu6y8Ad",
  "key22": "HzufsRzKY5cgLEemjcpBfqNXbKFcy4HE47Rj7zfAdLitEFS6gX5P14FwKuLkNJXGfrtKvqaayEPQuKdP3ZjiSvD",
  "key23": "3i3pXPWu24U1pkVydhDEAxy4TaMBhwNsTcan9ahpfaxqmaGsGpAMeUZNHCGT57KYD6gwU2KW2GebboN6ZvBNRW2b",
  "key24": "55sUZBEnKA3ngCsywvEuqnC3yxcMho5DLaNdZX2BnKAdEb5FaT1XCdXSSWY2FaeL5weR8jHS7xWTd5Bd4gSLePGB",
  "key25": "5qo11wB9ALck23ycnAZKsGDSS85pQnBxdbj15KVjS1MDjR8dmsxFss5fe5kcHFvGKvaKbawHgo4DPKrbkdWnN5Q1",
  "key26": "22E97v5PUhWSXvMetX1VZpKxjnWd1UgKKQNhyPrwZnGePFnqMG4dDNNuwGMHi15xUzBUAUUAMvhkA3KcKJGWQ2Mk",
  "key27": "5dan51e5DYfGB64iat7z7sSQ6rYkMcNYCAMm2jjq7Y7ayHtSNZuvKy7UgpW2dSH7Lz5swVvM7VuWUsYCcdktshyY"
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
