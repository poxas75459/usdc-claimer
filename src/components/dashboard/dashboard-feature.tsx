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
    "2YBFd38B36TCTc2jse5nKzRsGYn5H8xWgJLQAGf2h3b92BBDKQHZF91X2ynfjwZS6szbJ4APWuyZhfFAt5ZcU92v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4X3Ww8kbgiHm3Cg8LJbyLXtJJgxrcfc8Qph3gwLZFZmgZBtzpFEqw6hzTMugYsPBMjqudAkpiZ6HqNcikPrerJUm",
  "key1": "53Bs6vR4Vdi3wxXZ52Xea4ufmmCW7ECBoZsNa9vdWsuWTmYg3twZT3kopJ7WuvCWsn7moXXuF7LPm4Yv9odCXNXi",
  "key2": "3XTRN5d6wXvcLBJT6wBrj8Y9MGopDXpbsGxevAa2YTtVnzzX8aVRc9TAEejd32B54ZSd8b1hKF1beYV9qjgLmNk8",
  "key3": "2LELL6d2BSKuY2rZgmH4E9frTQqfCE2182BvqeHJoEK9Cstj5DTxvG9AQ4Sbx7nU9YmV5iPvdSragQxqq3cjpihm",
  "key4": "4WxzsvuGmGdt766bRYdEE32KQbftj2FStjFaHw31evvQr6csAUE8kZDxyeqPQb4rXnH6NUr7JZcgYaX6K6gGezx2",
  "key5": "5BwjfgBsy556ymrC4an18bhfgKVm8HvEpWrwrevf3HQ64Q8zeDQkHhsGaHSXSyzV4uaF7UQcJKq61Y5G19fS4b3g",
  "key6": "2V5HCQdEG6PHcUTJmsjUxayzsdnjG9vnzddExnsrZuzLABEq3MuawaQbk7Va11ZomMAEW2GJE1B6QRmTHeHbzdQc",
  "key7": "35z3arLZJfQAfHR96yJCHeHm7CQJwfZLnWryfstVue7pB387dEXRa7L6JWMU2gaKX2nZq987DdsFC6FkwqBfsUQv",
  "key8": "5pt8xRtijynKRwpjT9uQL4RY5HQaL5iAmmxip4AYBDyAEXYz1YVKiMCKsGdX4JNtfhtFhdckJa4XCidL5cMSqtho",
  "key9": "5hLRiSmky3nAFD2mR56Uoq3BKfUaFLTSFZSBeqJmKuBdgpZ1pPouL5nEuXNF5PJMKzYvUtfnzDHfpymEPqsebuek",
  "key10": "54F8nZFAnbr8fnVNGM2DHAPisBDiKuivDUUoy7mSw9KpF2Y558mvkVTTopNT96paw3gGGAPM7TFNNtLQYojdjdF9",
  "key11": "HUy5GYEeTVUf3ZL6drWWeVF4QanUSw9Co6SEr9QcTdGV577CBwofdSyB9CRmUZ3B7tbHaKUdoQ7t2zewkDEjN4F",
  "key12": "288hqJCZgs4hvv77gEbFE6gvmRTcuQu2pNnHhFucUfyMzqEC5k4VUoxser66oRnoQzA3R36mwBWvzwCK4hhTd6sc",
  "key13": "48L7x33NXQCsgcqGUpbQPWyyGSbSnYtyg6Vg9DY7gTWAVsqhqjYVtzgjVtSBbM4oz7hfdGKts5EHkvqUsSRKp1bK",
  "key14": "3BDK6JNZRk9X77hwmqxo3tnfj2FCJ72s1QUzhJ71gDyeJhMPZMWrrLYF7cfxomWXD5sszE73EU5au6zVQxseFSyH",
  "key15": "5oeDVBPj6TZaVeHA7URkMYy3xP1hRHwxFkb81BLiYS5STsKxb8qhE18DFaeZD2JkDfi7RDb3aPmXChDbzNPkK1Px",
  "key16": "4pCVswztAgu9Ct4nKeEpYxDhVM87iBPeg6Y4ayQ3FQ7gCXC4EXvXfF1kcKMxTtsJkWAh8cpcBguMHw55XKohmSNg",
  "key17": "34kLr9JKDRvAaa9H3PqV2Fk7AXJAfmpP3atLkYpuRap7uo7aYV8ryxeWZ7ZREMzvar6WWEf7QGUtv2espcEmnHtd",
  "key18": "5XXHTUhhcAg5KgGbfaSSMNvMJJKLmmzLXtyB3MDdtmtH4kVcKN241iPwAfadZyrHcqkLSJJgyWB78ycqYTyJArk6",
  "key19": "56r1rHEdbDks6eQo335wWpeH8YaYsXQ5uQ9eBAz71wcFLdeuuN3KwZbzoiWf8G87Z8rCVU21HeDGS88MJq1sGoP7",
  "key20": "5XSJaNkUUAkuChpKD2sRiKkw5QNiFP6mCRkA2bxXUYJX8EDEMeHBn2x4EzHEXraVBzRddDCrQb33jNKWs64AwUei",
  "key21": "4crVZCsT1bCQwgwdrSaXajgQEMxDpaumyLpKuPL8vF2FWii5u7LA4cKcLiqAwG3o18d6LsxwPLKNAWvoH9Deh72Y",
  "key22": "5idPnrFnt7BV1PfdUkXvd5EQnMcP5oRWfEqSdtwk4MmZbzTjfK35xf9ufH91aDQuRKxHcBqgo56gtdjNYqzUfnZK",
  "key23": "48pLMDMgHsGS5cPEB47McUR5y8tFfhW8uiMWPCgYYFrMvk9HW7PbzVtmv3qD3NqgqajttpffGMuFYf6o4B7FnzcC",
  "key24": "5SbE2FsjF4s1NMyBTe2UMDwaTxgkVqxfWRK1aopLEx7my6LSZ1tBofMjCswFS4LN9cBjwhN6E3BkfPtezaaGHJtK",
  "key25": "JrzJPCJpmrm3pSmQ7brvpwvfibFFqqczm3k5J5a71SibrXEZ7j73sDgBfkEUwEaYvkotFn2NX1HrfGiMb6unftK",
  "key26": "362t3BjNqNp3rUdqdgNp8CR4BwuGzjLodKuwhGr5VKrJTHg4i5upycoJ6QpZsrU2KF3Bvcms519qdndTHBRGWajv",
  "key27": "fNoAbehXA4Wo1ZTJXzcCgBHR73R3dJDLRyfMLzE3FcrkCUHxUPc8As8YcpQ72yV2ba1bvRfzirAK2sFD88C5gYa"
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
