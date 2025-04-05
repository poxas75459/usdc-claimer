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
    "4JdGbcj1TgLMcyWgeKCoSkrjQLZsZzZvsA76T9ZBoGY7GmBxc2b4WXWVvYj7ieTfEyUVC1RmBRcJTWdniwnyTQfq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48gW89NNybjkYyr5hQMjLE8QJ7emVxfGvckGGSiBUKYTV4311KUZwqHNuKTdyeEYTGieUQbYUt2rXhZbLDjwQAaZ",
  "key1": "5eGHS1GiEgLKRXsU7hvJzKrpk8ftziXuf4e3JdCmfjtsjN3ZseLmtGBq2FMz2j3AXJPYfbs4wViLVvD4ERAKExZU",
  "key2": "XmgpGEwHdF3odTocQgRCFRGbcZXkahrQwBXztNNGgS2z3kbJcgTZpUh2BHZRoKTDGSVxKP1ayU1Q72TuHeNyHDC",
  "key3": "4gWqTTYyyd89zt5Bi9c6VaQY77NGGt99WjzhFkrsoLWEoN9jLNPyX7j8ddhMmtG7KJiQdvGKHpwUK2AihsgSXrFx",
  "key4": "4yRRS2EX6vYGUZUMSZaazMPN5XokuUXSZPxvrUGT3YJMTdYRkNz41VumjyzG7RQdsEgZFx3R5Hqa6yr619MpBXiU",
  "key5": "513ZULeLBQV44ZYWE6XRq3qNg6pCrczLHqPakFpVUE9VsKJffg8ZqMoKCruCWL2pJd6ZpyeCApRsk48kAhUvP9eU",
  "key6": "59kyvEQPuWJRBEckrBaGA3NUUHomyuHHbFpf8QS9e9dvrcbgQcbZoLU8tC5QEEakgTUjk7p4kqnsjCRj2yj1VWxC",
  "key7": "2JFxHnpvrY7e1pADLvnvAwfiwvPsDb2KAbjVMfXuE66N4pSGgoVJqLa3N1BSprhgUCLp5KXoCgWxhh9kmXgbhJtw",
  "key8": "4iARMKdoUTCZbihTfxRfu9BKSAhKJ4etaf7VSkEP8wMBjGqXPdmzS8VMhG8t7oRs3YS3otU27DwPsJ5Rt953TsgT",
  "key9": "4htRbXjVhre9QTSqZ9ZMPKCrLM1dbi8kQTmf6v7YC4QgNvE463ofj6jHSQAMEcujzs254ypUnB5wWMP5X4nXuGFx",
  "key10": "284uWCrAURMxwhzHsWK1ZGRbkupV9tAEtd6itJZDBEtZFrPckpQzzCdxM49Y4mCyyRtDbGn8EuWSCgMcbYBhn7ze",
  "key11": "4kqyqaV8HtaddyczAxttkB3u8WEXmMCgjNstEXLKoAcspZfJpdXp6aN6xVqKDU75zCtcPsZVU3ovPuiwXcpnamJc",
  "key12": "GqNG5f4i75QTcJgMPhE2Xy25SstaZp2gMTpzP5YBvQBdyMxFqNp69TzfVVfeDmE2gMJXSzptgsVji6C649BAwcA",
  "key13": "2A2n2xnJ57EGwjr9qTLo6nzDPCcSWACp4RWGffMjAMSdzRj1LqakFQkEdVtPcDkvxrrwJvVPLrde36pybWFXXzJW",
  "key14": "51zV1dzEFt72gDR7WQvGb5TLiJrxv6X1x5aFqWwaNEgd7GxypcQi1gR9vCoZ2sv2ubZf4KUV5cC8LjmWDhEmGBRS",
  "key15": "3dVHArphiPxgUEaPFYcUah1pmQg1BytSx63egHmS1s5BhgJUDguyWT2Nb3udUE6uYvWjfwzbzjJnwmdoBAugGLNG",
  "key16": "4iEb9mcwwU67idQktXPe21nhSYDfeYhGA6ro3EvysnuUCqaVPqZ1RHvU22Vton3iMxouP4svFxqHotKWwrqYJYZm",
  "key17": "2roSU5CB15VuM7i3RQeu6GBuEmV6x2kd8KUc4v7nLyyNLGdhaAGXYEb8fDFHXfVJwVCACfQwZtTKd8xi79d7qWVP",
  "key18": "3jsCSHtxQYiMPdsThoBby8K1vaFRhoAirkZX9TPRKpf1z1ET1Ao7FyJnJ6oX8JVnhQ9xCs3iHarD9e8Tw6huSmXt",
  "key19": "2CVm4N7uDHgjju1wrmr4teJzmi9nNUYmF3GtQDYZ3WvGSiaNcnoaePSkp5UoqPMTW7uuExEWYDJJ1Deb6wWHAZBZ",
  "key20": "4EbunvQCKw6FnGxa4vmvy1fxBgjngBPE4jJfZeQ5MNoXwckSev2A87ERaQwNppH78Gk8qTnm4jVYN7UuHf4qbAcc",
  "key21": "4FYtmdnkkQFgaEaWiAkwgVEx5ytvFqxtQL9PticbWe11AgYc8fN5SR7AMEG6xPc3EyTn9KHWf6tNTFv13jXQdE9Y",
  "key22": "66ThmDPvWrwSZFRvbPosYSfz1jhyvFeoi4aCPgiGNvDj1xus5mhVFPknCUzsJBeowrascwnizJ6tUHEGPUAjPA21",
  "key23": "2bgdiEBe3M5AjLRS3iX3mYJmcxXGcchkN1Y7qthn5H4GhFtkUUWG8AqQDYUEr7sVVafCDmhXyooX18DyL3X5sdkv",
  "key24": "TeZNh3poXU9MLPwvgcokDEiE1cuiZ35fniTee1MjaQaDPeASeiap5SSyp4r9W7tzwKykgkrSa3agU1enou8wUuj",
  "key25": "5w7DGn1BSsD4j9RLs6jk21H6tR177T4MkgHbomerWi9FyP7cD65ktbAenthyhpaJRv3Memqi9Z32WyRSdWCrT2gU",
  "key26": "4izQJyMwmnAPoDFHfngo6j5MVBj51yjbZHQunTUAnwxx3a35Jf7JjSYnpgZWeZgbKApV7RUh1casmHaqxpXTmvX8",
  "key27": "5mmUnhTon6csAJXbLpCug2bEmUy3camhpKzHVJVz1WCBgL7YoYUuos1xEJXr7XoxqUZwUna4oEzX5LXrs4sbAubW",
  "key28": "3j7QDP7HrQwFssJRS3JiVoLGT4NsTnpT3VGvyrXVw8r2Fc3TyzVDbbLQhmbboLuaD11Qaz2aHz5S7GLzeqePsm4K",
  "key29": "262KgKt5Lw6Rd9stas6rdfsdeomrKkGBruHhzHMPLSfA6y5tNK4Uw9WDnZccH6t9T2bBPnBFDzNXZRHa5BdqtRq9"
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
