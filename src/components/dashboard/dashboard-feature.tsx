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
    "4xQF3UQAf8db6xKqBRjHCBX7eAiMX3a6rLRFu7m2Keq3CjRDbFRyLe65ASdo3fGpzySyHd5Q1YA44b8yj1JjqauN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DLLES3soFMZFV5TpaEqTdbyRiwCDT8citXqCiEyR7Aky61Lj5oyzRjKEMVXRMT6yMtEEbeU3vQ6rsFh8yWHsrgF",
  "key1": "53hmBMDBDXVgou9YPWxTm3DR5bGTyfDtW8AJznHotj1DKTR4gj5vYrTiaa9bfMAPTZSEm3B6TZCPbUbVmNERaJcj",
  "key2": "5eiy4ec7F6BJDo4diTswjgjGa7VMP5cyh559GcrCy5YfX5YFK4pwgCKvti7WMxnN4yntRTDp77Ma6x3ULDG1Esja",
  "key3": "4ND21PeHgaiCEpFqkvqCREe9SGLAoGtdMb9rLPf1bEcsuGYsXK5Bkshj98K7mLX2zoVE5QCcwn9G4jXyvwuJDxza",
  "key4": "3a5gqPYczqpiWoosNStyJnbMYaeaQwrahcbLinWW9uN54jfzbjotoTRmqdFmkutiPFRGe73HhqABgnqtBD9gs6oQ",
  "key5": "5FKVeM6og5deDiDYAyv1259iN3rKyU5oddcmzyAM7WDnGcSxX4JMGuyzfKWoW2NeMp6R4CdsJwi3aTdiKj6uj9DP",
  "key6": "3a3n1VUSobe9JZLTRzKW5QADsXBBSe671C7e35hXjAtDYQKi4qaHit8ufGvJx2yaaCjvUVHt6K3T5mFhKWQ3C3Yw",
  "key7": "5LRZTBsS6W7XasQdgz6YeJzaD5TgakSFCNaE4FCmHvobkyUi4C4UB1Uby2YLdWYcHhUQRbbbimFCTPLNj5b2dyLA",
  "key8": "2x3aUJKx6ufZeSuaVBAn4mjUbG5M7A8GbsFLRQSCyJzpLvsbkk2ap76rLMy7KJ8yonVwz3ynFp5UUhuwVieWmNmx",
  "key9": "5TRVCq9vHHk4sFcDsXvrsCcQfqvrG6Pv8mzuSxeSTpYghSN5WF7BRpPnkZhvDC4qntoNG6RCbn9etF6mQxUbC9Xh",
  "key10": "4G6agyvsW2MAz1R23BWATXST8hdypbva8A2LBGVnMmZNyj9w1FSSGprAQ2uEYabgJNhcKAsQoWgeowZQaGgD4bz1",
  "key11": "44LDFdXZvo7fY4aqv6e9imVCYMe35hStXRMCprmFuSZuAffGwyMNrrJpmxXoGy14fsbz8QexPxN9WA3nSH6NTyWQ",
  "key12": "45LbqrcDy3HGqNLAi9jEfuASaErdG1VTGkLAZaiG7hfCDnDHJ2w4JgtSi2itXeYXz6T8Hwue6gu9Z4q5LythcbpD",
  "key13": "4YJp4shcXMEP8xcyJY3uYBzVe7m7WiyTWgHd36RftXdrEYpWk6QABKnKBStvu9hfcnJYsN2NWD3UMHLpKzchBL3W",
  "key14": "2auC96LdaXZ8NjbDVQ1yozgAnDsff2nHK2SAF7YfXFKSUHV8zWxjbReVg3AE16xNqQsyRowkBGsXpqWfpeUftppG",
  "key15": "4cA4JXvQMWsYLWBwobF3s8K26tsqySq1GB8rhygBiTaHKow1vdGoTpAvUNaUfoHNfGCke7rTwVroxzSMF1LqWNyu",
  "key16": "3gtPd2uwW97QCNswmz74hjscMWAWUC8n3DDEofJto97fpqP84DQwPCKXCJncWF3FMMGKKfQQNBmFdY1d4HdL7jqe",
  "key17": "A7auhHWYw2zBnVjzGNrj2YE1zidVHpt8uSiBc5Ea6RT8dErf52EmnKmunQxpjrSrTG29Tc6sUuu8E86vV99SeDm",
  "key18": "28pgWjeh5faPkmMyENKt1hBo4bNLsjoPXNncfk4823Q7aCRfwfuQE7manCudnwtnF6NUtZwzy1RXRZazfcU89qLD",
  "key19": "2p6FGAzzfpnbNyBUBdMQRhdSpvhx7NCTsnbQvTrF27WyexGBH65e3ochNcUH69wfragbfzf97JGdgWHbv86W1ZDz",
  "key20": "3PrZbAbXcD893CXuLqpRQr3FHABBp1c1JRJZ73CCaPHgeBBVaBdqZjtp5cav8v7TrQBmWuLwa3bTe63Upy9yWh5p",
  "key21": "5rkX4s2HJd8Sro54NWZroHnks8Z1ATiZXVcMKgor2zVqDXSnAAZBibsCWNXL2pMcYhpuZYGHjSgDsnxDTcwGRtZm",
  "key22": "5eF68wXXfeseJQ5vaih3wjah3jj8uCiHwg3gGZrFTg6q7hPp6tb2eVmPFAF4Df9qWJSruahKbeNBEFkzjwpcnx6v",
  "key23": "327HP1prEqY37oRbCrFLygpMzgetMnuSUQpHZr2RtZV7xUH3wgTTXD9zLYUCMTLDjuQWLHf1U4JNQnrV8GZskBd7",
  "key24": "3DbEYB8nBAFLoBzB8sQvbgGoc9JgyTUy55LCeVa3aGH6fXaZhZgsJ6SZoXXWFWUmTTvXNtpHdLS9Pzr83z1wNJt2"
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
