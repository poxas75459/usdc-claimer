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
    "3TaiEypm7i85fdzsYXU2oivsa3XhExtbY7xyghUezZNuuzZis4S3njG6gw9cMkPhw41W6F12g7xAz77gpn6L6PFU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TPZMdcpntZv2iDvKkc68EDorcnXAns42jbT7HZyT6jGjrj4hiTc6hM4YaHxHgZdWW5HzDq5rRhweW4qN2SfY6vi",
  "key1": "56oq7ya3ZgXdV3kw6RVfAT5QKjNUY3M1wrstN1Q4aaMmBhDQjhYbdCjmTbZjUWaNCffcbV6WTZwtrpwYihkvNtfw",
  "key2": "3oRfMR5eHTkHFAUNTjmABdHBjiLtE4fqDDy9WVacRtUmwWCxFPog7iyp1e6Nbs7Px3tbc6xZPXucuNCi9rThsd6L",
  "key3": "4LNcQE6pZUXThVjp4u1hCvfcWKo8Lrd45tMKcNPMAHRrebpQotSC8sbXChHxiM7NjS96GAsU5kTTEPVNtSwvnZ74",
  "key4": "PQH3n1whdpEMXjNZ4w7pdfV6NcqBXJGYPdD2SDEqyx86r7XcbLsHrZEt4Cu7nCAyS7pkGvEeD6qzwVFN9aSgWd3",
  "key5": "62xhsy78U2YJbEhrk9tGGFKHKm7H6ZQg7aHeY5yxFAHj337vZefbK83RVFRDWz42NELv6GCGGpTbphAuhwbwu5AE",
  "key6": "24jSknHA4ZG2iBCZEjPFWcZKYwknXgxyi2BKQVJGU3sLjcGV8v3EVZFw3NLfa2QJeaKqSGCiRqfAHMfY1SiPcw8B",
  "key7": "3smvAyL8gVD64TD4Mv1ggCip26C8bMJBysC4dGwNbuwcqt7eyNCoJFjUdUVZ9USXhwNqHECtCrT2Bi1C2iw2cKaP",
  "key8": "2u5Y129uDi7Uim1GBMAc77ZS6JRFmH14YyJQbTnBfiE8D7DZkWa2bQYXuR16NoBjyDYvGVJDadBZHA4BVYL76Qrt",
  "key9": "2RimcNEMJqzUUQsCoj8x94nUk6KsPem1U5VuSBsLmYDFZYaEx1Acz5UvfnHZAhpJQ9SwMAZdTZM4y4AVncrAUX54",
  "key10": "2ZzLx8tpQKXpaC7XSSLQbhpnv6vRzVQ2FBaDpFwsX59GyKkxGhuqJvLs2GGP643DRUN1AM7kcyK7PwaG4uZwd28g",
  "key11": "34xycvai4f5wbgX3pu6LMiFb4dwBfYeriqYbS6pM1vunwLSesx6XK8KaqdqarfSNxBrCC4p4WfbCXpZS8GK4vUMM",
  "key12": "3KdKxgwT667qQFddVyknzmiA3DxLv2vqVfTAgXspapgVnnYC5Vep77ew2odpWFMwyZCsQbBPb7TaopyMrvwcBo83",
  "key13": "3aqU9rrqKbi9fEBTLexs3AHtg3HtefRVEQb6N7HB8SmVDp6LLTrXNY57CXUFsUNKqt3FMnVSP94MoazCtWG5LYyN",
  "key14": "3PjKa2hYsfCr2GEfWhNtJVEtYUiq5rcFg1V9Wn6WnRtnKfYoFu9xMZp5rU6RiSFBFbonvu4hiHWXZLnzT1LcXkJ6",
  "key15": "5CL8RaF3UpZ9UzVaT4cfm9nZ9fxwVVTYLbqnvchJqJ6QwUHqXfEmeJVsoZPtZGqhvssZ553uNpBYkNPCCLcoDxm9",
  "key16": "2rsj1BMkqAQb7SfEw2jBBdyRgdkRgCHmq8jpTnPXDt2BQ54nEt6EWXHp1efB7fE7VzV16be9zaHadm6ohjRtzNPM",
  "key17": "4sNwnQuTTANHwLQwciN5fPLP9MiLMfL58CqECTYqFAmpYWp4PUV8ypuRPwUCWDvRGJSZK6H7m1v8VcywebVtfA2n",
  "key18": "53kAVANrGSzdDPh5wwXEwxcw6RRgs476pDTbVDPEDjrjxtpCHwXJ16Py6FwHRWapHCkcPCro6YkeMhvBubayDmWm",
  "key19": "n2K5qVCNGZKqWzJhTdBqX2S7nLuBEy55QjZQgZiZ2aPF23kH95Tq5LM79DxP9PUP5NHLsf4wQxW3XrggCLmNFfA",
  "key20": "27bW3yy1KGaPUwE1LUd1TM1LkMtPBDfEprGTLU6nwf7ZjtQZQkdDQnxiouyngPagM8SHnmD689BCVFE7zHZxVAUK",
  "key21": "45fjAQzC4JKYYguapMwHvmFp85FreBzEWWPmfYgvZnUag7PP4o4eDnN2cZyvYMHTNFaxbnhYeH1WWuoqJ1JMTBbg",
  "key22": "48TUE6Y3TbcNnND4LBPQhhGYXD7V3C1daqfqLgpGiFnuPshAY9fCMd1GVv87Ukjp6z2c2HrG2XfjFU1zXaNvTbW8",
  "key23": "eHav2WeyRQNNRHKpSo28tJhdNtH5i6Vi3iv9AwLGYE5dGAYxNoq6o4y8kAp4rWnXjUZW38wVH34DTGArXgacctG",
  "key24": "4pJJfgv5v24GdAm6LAjkrZxMymyxN3rNqvXj886h6gUFUgcG9fSj5fJuNB5Wgbj4Lg9Z6ndLKxQZVuHEjzH4Gy1b",
  "key25": "3S92TyzEyYFM2rtHVokhSKN9fowSPsSGYmiYchSE1fpWeHgZSDYzK4QkMw9iZxP6NdyA89jN3bBVq6Ctt9iFqiUT",
  "key26": "tZTF1hpXU4Pok1SWRnmESx1xLmb5GEogrRvuGYfCcCraeGXZ7YyVMuvCLwTtc8Wi1YUGJ8bwa7KcaopteAfwYda",
  "key27": "3hr9c8fNQECS1KWmXZUbtScNsE1nu1kMyjKSPrLzMBuMoUs5BXsv81SBPSk6KB3ejNKZfXNC21sSFYqKwKhEKqNr",
  "key28": "61nP4QoMSKg9bpaMGBgWpWVTcaMXkFLgkyg3jEbUpevC3BkKcvBZUcqvhvFkMXPBzbwNntvs4fAxMrReik4PsptV",
  "key29": "4dJF9hoANhCmwvgUiBo5oGTJecLm5qykL5puDmGRxjbeaxe8fZn4C6HkxP4ko2a664Xwc5pXxdjR3ecE5MNhQZjF",
  "key30": "2EMrsS2HPcyLJAaXe49Txq4j1hAneaKiHtX14fgJLvmmdDsh5EypCx3A2r3qwErXxCgcJRzinFBGo8a23Wx9wXoX",
  "key31": "3GxjmWveUJn83CstRbCwyN4LQHQ8uYmKpdSnzGq7oai4sog1s5SBpXfB7FnuZ9W1Hyo9GmqzxSjQuUQSZLpyyDNY"
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
