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
    "3xpKfWpxtCrBLD6Z1Lh89pCvJ5RzNKZs9Ezu9xoQ8RzdjzwRbAjNVifSJKNhZLa5k6P1zax3YNTvSTz4m3EoqqaL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nBohw16V4ZpEmNSTMESAZPuHAXe4uowrbxBe33n1E6m61ixbtjh2s4uqgzeK523ovgNRXyWxCXUQSyZSkLsLFbT",
  "key1": "4o4FwRpcyEq83UikFB4hj76YyD1H6P8NMY9V3gQQkZrCW8N2t1aTVGkBkBbMi43hyMQT5gX3AynqxNmMJrmzrtpy",
  "key2": "2uZ6ugs9pe6Pw9qGp57QKWogziGfgR8mT2xmkRcJkYrmBsvaTmxaAZ4CVXW9jRCLvJje983m6PTM8gs131NZcEKj",
  "key3": "53pp6SuQZrYfjg1oM45W79N8hUMXzuuw9WBedNpW9C7kng5RwxFsnUtc92yFJx5BFMD1HS5KmQkDJjJyytGN11iM",
  "key4": "4FJFmAAtzZyLnQYxCLbG6vdGzvXEj5W6x4L4PkTd7LF7d8Cemqpi2LPoaQFGLE7g1r4Fw8Gyvpj13B7mKbD2S3mR",
  "key5": "61gcfNaBE2gR9KSvjBw6fSRJ5X3tjPMnqE6VisAEd3eQVie7Jb65ZQKenJyqYndcSHQ18PVxW4pptkPKkVpPdXt8",
  "key6": "61kSD66ej7jrppbQUvsHySKpxrm31m3RVV4K2xGygbXcwW813takDWxCdadaj5mZEJeT2dWdAus8A7zSnA5SeHSe",
  "key7": "44yQe2CiXWCWhUX1wDM18WMmtPdExCKtHD1z8wmbYTsn1vKwnCghdRwL6tD72vTnvwcyhN4dE5g4HDvRmT1oWc7K",
  "key8": "3HaFLLKAgazGb3MfhZEpNsDZwNZuu8vaRHWeaDMYRkdAks3BwiUxokCiu6i56bTYgkmnxpiVXQQS1wXHNWRndTE5",
  "key9": "45Cjx2TByA64qL1pT3AmHrAr8K5NaYhjfEzT7fh8k99KLTxZw8tFsFS8QQejSNuou3EMfuNzZWbyxDFeFntDBsHJ",
  "key10": "46zVZ6H9FRvLrABrKcaGm8PATDjcvVtETMuVEH9bUtZrSej9CBy9FDrNzCru96E8u1aTXg7s1dZspLcGVnLY5TkP",
  "key11": "28EdusMNctw2pWF8LwaY9LqRfmjGrjM3sqCiJRkXfLdZURUrVCCMq8WtJaKVoPhZsgfzyjjGLrqntQ9XL1PtVX7h",
  "key12": "3PmADWKFEdiPrA5AoC7nHpfS5ftDSPoqRJsq9ap2c94kaBk9ogPRxvaN7CNjm27V2MtLnuBzp5kcD8dEbAAtc9wz",
  "key13": "4WH1qFiwQnTuJfsnhk8DnwmiuCmRvbZ66t6zJ8NRWysZTpMQ5rCtiqtHEgpjnYRdzJnrhXA8xqZkDBCgsQu1xwJK",
  "key14": "3ANcMh5Yer3MzmdE74Cit4vyZ3vLABNxN1qgqVhTYKRMRrTvMvaLzu5R812PhVThbC5xxA4799FPLYAqPaNxvnTD",
  "key15": "4pGCvFTau4fsAZcJW4yyzPt7qE9SCYAkt8e4SVPxpr8sFduhcnzAF7F3mN6Ji7hzWiCEawKHotBKLZjkMSxwSii5",
  "key16": "zL1fZ64ChNcMiAydNaKnPm3PNXBogkG6NBG1kYyQ7MVoFBdqBeo5rtbt42FKP7AuZ5v3ivQsfC4qeuw9Ded1Xu2",
  "key17": "3Xjb3tx65JU2QyErV6FjUa1S3Q41PzWAMz1WzQJtQkE6WGeYZX7kY12s1Ge4smm91dZFJ9idmgCKL1TnBucDWarR",
  "key18": "3gBj4vqRB829R2s8ZnR3xhRyZdP3MtLkfV3KTopnY3VY72uUY6Egdy48LEigYNX5qg2RGwUFNv4cSHYWddtWVN6E",
  "key19": "3qbRNjxgoxNFA7xYULdKgiWBgM6DWvKj1mhZpNY7fLXLBkcQMwHwoeUTQ1VGEjpJ6mp8NR75suV5mVFT7HXSv3k3",
  "key20": "39YfSaKxZeFw1Cdxu1npEUcNeYRGcDcdt1oWjJABUDqQPizbpJp18NaLJTYncHhSwyp3SaCXjjH7wCimgoCC4Bxg",
  "key21": "5y5oBQtuxALDWsG9TPxkHsxGUe69jsprKLffejiPPEAkREo8zGnh9x8XwfYSLd9k3CnppH1T7nqEeUSQQ5mt9r2E",
  "key22": "2XydeQZKte5QjvRBKwkZ7NtAm6cTr12LuB838QkEnP67Cp1oL3Zkf5PdxpXaVshyt11JBStetquWrWTk8tSvS6jX",
  "key23": "2iTnGWLZ7o1o5Ao4rUkb9juJ6iHAxbNq8awZhnuQWGha6FEfLzLY38K3kx6sJ5eeGd5Tm3CLGFcrbA3fBwiaJnUd",
  "key24": "VyXVRjLh9ZYYWD37aB5UkFjDuwo3hxnHUEYszjEohHycfAirhcycPoNfogsAesESRAovB2z3YB7GFMkmR8xtSUb",
  "key25": "93BnKcsozCTgkgkCH1jW5vsQV9ebn4NFzNQZo3dwrH9Wwzzvsp4P5WB476V3toz4Z6DMaC4yRfTdbDnUeo7fRnL"
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
