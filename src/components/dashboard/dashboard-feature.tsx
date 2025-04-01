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
    "fYWEzbtAt71SVqUs8CTLxZaZSqdWgzdZQ7JqcZyfmoJ2Mxpbhd8nkESNbYHY5qLd327UWhnWv5d8gWtv47F1xjq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RXXERRrFigwevCpZvpT4wbJwBafzPMJnz7pQi6qDt4Ku5A6G2LG2mEe8LrftBfTi9HgfJjYPkcncPMpkDV4dJCP",
  "key1": "2pQKNqBwvcH1i2hgoXMs4p5v2gdCymMfB5Q6DHSJyrFZDsKHPdJUGM5bzFDPuhk64T5R1mCSStEYDi1DB3i6A7cB",
  "key2": "2RyRX9GvtjVZtFvQpaeKweh53nCQeSHu2bdKrMdsuzQxJ2BkSYGwrmKLBZzeAUbY7F5FfaVdbt77Dwa9JX5P1xn2",
  "key3": "3WyxVNJjfmw7wRpBwejuipEjuh4vRUmw6yXDMbGwBT2PuuAUxQES23KcrByTnyH5Gepr9fgoMHYnGd3giAr8doCk",
  "key4": "3UL7rxqhRhy4wYEv2ejjw2evnCxrNUmw9AbMR7UMzNVsrFth1JSMZFMRjR51BbkPq2Rs9TdywtdKSV6vMGtfZa7",
  "key5": "3T3K4iTowfSF2kfAhqpxK6BJZA9gL6LofDaHeX7PXh2vXnfGiYCuvpSu6gsamqepNtXVr2TaJUH5gBX3nXXBhMms",
  "key6": "GPztozFdAUNQ5rCwR4RfWFZCYXDfc2Sypg1ETXa2u5nS1K8MURUSveDtkmBFCys3GwAFUWZ587KN7B5ZU8KGSFk",
  "key7": "4oLNdwB6zAyntqXeFfZzAPjgcxjawtAYJDk8jGra6GfZS4j1zFDiqa6NFgSUjWEvDNH8W1j29FkyYQV7spTCKnLb",
  "key8": "2zDpnqYaLcrf1bit77sGbHTxqEZZEn6qmpmG2i2t5RRiRE1YM9FCyutiQPKhxHqhvbtEmX6tPeRP9Vb7eNAHp1mS",
  "key9": "PSCR9Ki4T2ZrFtxjtPauTBja4zLrPeYouiNhH4HdtruHURNiEG8bo4RXUzzeQVvLamEinRXuRj4wgu2idsAaz5L",
  "key10": "o8A2gjkkuE1EeVnupxSUytENm9RKZBT8LxEibtafDpTiaW922XbAAzT3oMzLj6sn4CfvsCHkVTdHdRd6He4nkua",
  "key11": "83fUP4UnJ8LiihbDVssNMcbZjMcpT1ZwqD7ZJWqf5GtFUcg3fEH1ZvByQpHYLwWpfNXqDnbaCstLgFwhRK1KtkD",
  "key12": "4a5bL3E3cZkwRxNRkQyLPC9xFKXRDy11STuYqS4stVvhYHyQCExBbehs32bt1a4qdbV7iRQn5NdYEEvcES6fxDcn",
  "key13": "34uc3SkUBzBM92D2NjM9rrxHzVEoMJ7WzcctMGZWzLgRypMhMZQEwCbXdee7Sn3UHCDR57rX399tAwFwGetBxaks",
  "key14": "3RnM3sZf41aDqJd73a6s6jFaNJmc8jMFoekvcj4D2iq2XQdR7RXhhNJytc9HzuERVCLjzJdt58SkJBKk28LxrrPc",
  "key15": "tQ2ynYsWZjbcQVqViyRkj3EkUWgzxRkLrbvEw2z8sPM8WP7yHkNKihFcsm5tqZb51mkh72EsqsiVcAm8jzsC8mE",
  "key16": "3P7xc2vBer768UQDBr7c2E6UtKJwCsbqpCwVinokkXDdzkUY3cBouJ7HpBXNFfaceCD3tsUp5yBHhFhmAcKEe353",
  "key17": "67ExXaGjChfo56nKB8UceM6mVNREQAfEjAPYK2Gjz2wjDMinBiY8WpDz7t4dPmuXMV3pT55EqSvV2z5JynrJyQyK",
  "key18": "UxyXF9T3hyFvc1p8kXMZ97AjQfq3tCxQBzfyZBX6LFDc7kBqQqSoqtqLAfQSwYhh5wvDsNJqb6SQvjnyW3HsEAa",
  "key19": "5FmbTDroa19DSyGbU4nGC6pTCDctZzXTqBMYhMdm5f6h2LzpMxaATFTvU9T1ojnG5KiYrnXYLVE9BsyQ38h7Vsyh",
  "key20": "29KPFNVUepef8oiPPsrpQEQswMB24ff7xjXNEvwMf3KSDGTk464LyjP9h1pmgM3T3Wvk6tt6KVyh7g4DR97xxjpf",
  "key21": "4p43Miwn1YpQ6R2kWm9qNUBFZx5xxcoweT6MWNGmT3DTynPviU5oFjoMLFBHA7bfupjs5ZBMsJ1JSyjkF9ur5M3T",
  "key22": "5g5fEynKDhMKkcajvbUC3NcJJrT3osZRwuu1ecJ3wH9CGZbVCxogg5BKXCJTYhKtqLvZg83wy9m2hixd6QHZLn4Q",
  "key23": "f1QSLqEx96C49uzbNu99pBLxhtUKfKxyBsP4g6vgRGCtozpMLBtXbrbm96r3JWB5fzyZhzDJ3TqkSb3DPbZsYES",
  "key24": "iFodACfajXHQp6sjiLsxAL4GM3b6zKwQbHGyFxbMHULsv7eFTdgSjc2o893ejuT1Y7p65wQagjNw8Vz5HpEQ718",
  "key25": "4wBWbBkrG64YXrnZnTvhfaNmoHk5mFotrjihvBFV5r7Wk86smA7LEb6kxRt44mp49P4PTeJjQUgqhdcHTA2ruWCZ",
  "key26": "31DSs94Q4PGW159r9A9Sb3gvwFK5r3GWLUaVoyCq9BNJKkJNXCyMbEgLrM432sDdycUqx1EP8ezBV9u9sKoNjYdh",
  "key27": "8d5GbmKBrWkLEV9xmvGKv1ZbHtT6SLZ73P9XRVXNSegNaqRhN573dpUf4aX1Co2tDgY6uBEeAmgR3sNBDjX4JKZ",
  "key28": "UoS6dssHRwQZpzsafrh7G7PLqAuTb9HRcE5DMFtpr1FePfxvPFu1wooz9e7oHTRWU9FdUuDxUrhGeBWhEksHCY2",
  "key29": "4DUVwqWoVvfebCdhxNDBCbsQwgmDJQUwsDpB7JbTdBVuE17uJwQQTsq9tAdh4PdaepawiP6H2VjJo7rv6nohgSvB",
  "key30": "ZabnujLVN6owBWQb8V4MGEk3Bo1v1mwUgeFkCwteQwH7ufGAJe2kqSXHZMxxEK4jPEqHKpbgVnnjDDruGDh4fsW",
  "key31": "5t4UcvwgGZyEx4dVp44pVxdtLwFJYfGGkCeeromHT3wAucDQMKcSSPwPk9i61Pp4uGiKzJCfzgrAbVFYstvct8BF",
  "key32": "4jSkEgJvWnjcQmWWYM8iGDvxMt7bwWR2B3geiJ7bBtFWhdghyk3fU5chaWPZSFKukUESQKcPPXm5urYcZoKMpDab",
  "key33": "4VXrJpMxNkUUpSTxssoKSotw5FBiNdYUBreqaYZgJCKseKfyMMQKfXfqjLDXRJx46A7bdRMkY6pK3EyEA4tiWbz2",
  "key34": "3sigVanuSYFaPoWWvEr6VPvYMRbiuQwJFUzmN4jVCjn9kxVFoCYvsKajvZDG8RFDAUd89P7k9GxnkiSsCX2HZtGb",
  "key35": "3trZ39oRQLEH3mAbvKGtafkR79JKNikaseLm3hE4N9zx3DcsLzj4aWGDW3fTBRN2L21xthCCAdLugJXyyfT6xNav"
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
