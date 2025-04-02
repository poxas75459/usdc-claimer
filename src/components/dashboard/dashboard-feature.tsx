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
    "5wkVNDG19TY1LvLFv5tvnFMjRkHQZLDckckWAnkztvw9ErvLVKADYd7FBHrqHpC3VZUHpbf8Y82PvQeSU7rqmnVK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47aL4Ar3uqFpnt8W9ru6Y5tz8zoqJ7hfTsDoWHjg27oCE6cnZubXSArYLhZryzRTBN3CMNhNmAnXWDToSUNaKykN",
  "key1": "2hpk8B76Vn2CN9MopeJWzLeqM9t2WX8NR7LsQ7QJ4eFxjpzJPgPPKW98s9qq6wy42AB7iH11PpTTUB1YWRXo9Z1Q",
  "key2": "vzcxNVQGJyWbSHidMXKqXJR3WwTCA5WsM8ZX2xAjUYTWWtda52YfjrqvVdHqLthG3asw8ScEtHtgqp7SRDLi2PF",
  "key3": "5CPSpnDsgBxQVjNvg4FnnHE8Ukh4CSm5jRVDwFPZNbg61q7q7dJP2q98tPP5KorpBno3PAvw9RSPRisPwGoznkq9",
  "key4": "2z23Tn7H5dNVdAzdHPHzWKWDpjhqYRhv8mdfEQy5BW3UYzHjYTPuZrcZWdURyaZZbgXmSoUQPtdgMrz9kx2pKsRn",
  "key5": "52UZfSBwjxk5a9uD6ryHwnzhPTGCnmC1Bz2TABSq6NXAa9jpv6KHnYGjpoY8GVgx4rN2tQt4ED1Uq9H2FQrnBPPD",
  "key6": "42SA62hpDYQ5t77fg99eAxR5Ze6cKrZEQQ5WLWSEqyyot9bCYPpfULRddSbYbub6tZAtGoPEpJG6X4cFWTYP8Zj9",
  "key7": "2QsUt7wqFNgcRSS91dzKY57P4jttN2syDfd7DZbMaLJkNzY3UvEQGdoHa3E2KNUE1R1YzHfhuApf68UVhzvLKUGD",
  "key8": "5f7KftTRA8pRfv85UTWjF3T3FgZvj8r2xtBCHjRMm7nRHMAbXaJAVFsuurdknUmf2xNBTEcMVWrrF2MKZr61u291",
  "key9": "5S2STWRtKfQgA9gV91S6Amo5WBMVgSY7nS6PrtNyp8NEr6mee2ayea5vN5rdyJ7wdQiHGxMAVKkDsrLC2AXspZSA",
  "key10": "5Ua1Hrn5ggwXpHQ81a1rouqW3NdSgJP3oDEVqBhdwcqjk3smxj7sv5976thvxqbUbcipuMdDdRAbe2u1QdPTRq96",
  "key11": "5GeDfmAm2EjtXemWcixSutToror1NAFu6yn8UT3J8BUYQtp8yYtGaqU9fYVZGsiJsW9JbFyUp7LJ2fuAdS7En185",
  "key12": "2Qyz42sEQJxZYBpuqTuWBXu8WaxgPpZeHwBXYzcAEU6Lgb2f38UwGs2w7Db1J2jUW556fLxZVCDaDVCJPqPnEyKR",
  "key13": "4vkNPvDijxy8uZrT22Vm5KSACTYzb2bc28JvTNifadu33fWZ3oMNKuncFLiqB4qNtoAstfffBAfWAxqAobemvBaN",
  "key14": "2hZw9sLK8x8pmjgCrg62ViXwFT1Y8nLaDqrLDsVDdQi4fnN1UYhE5YkfqnrzFrbk4BPrad4qhBbiJaMK36CLgstk",
  "key15": "5o1NqDHKt6UBYJfZNaYZbBq8UqnEkmeCZx1uCY15ux1yop2qSovf29uzT8Q1V9RUCWt4z4c3teRJZbsUHVV3rsrZ",
  "key16": "5wuTYZW9SREsFA13qPUC6tb9CyBkgPtMsZdCDw8cFbnM89Ro7Xegdk5RcgnJbwkNgQsom2ScP5Mqg1Vai3mJDbH7",
  "key17": "1uHSnrZZcGNG5as45Fo2N37J6vDxHjGp6zCZ1qouJtiMdBPBZ1qqELHbNuBtZyp7h1xrmTkdbURJ1dSBedS5MtZ",
  "key18": "5FqgLT4HRzPo3A2EWhWmarZuCQ6mWLfxWfiytrqGKQKFJxrXT7gc1FFoSbqRqbwv35gGxUWabUF7DDQ9ATcqDkZm",
  "key19": "4icLCwuw7KDX4ds4yKgkdrug4NGrwSCK8tML9KfPgSYBDZE36WVLHrbri13vSTfEcBBYDYiohtzv1g4St8sYJFtX",
  "key20": "2PYxkzCjPhySpYaC6vCEazL71WznYgMcAiphEyGraVv7wsCA7LEvfxdJQXzJ5TZGmyj4qs2msDDYWP2idL8ugveY",
  "key21": "3LrPa1zceLPCmehGjx1FPyAgpuoTyxeJPewzAbeuQrHx8qSUwM8DcTjGBT7uzugJSJTURhENmwwbQN6XNmTf8KU4",
  "key22": "4CWZMrkEZfejD3Cw2GBZ3AX12mR7ZtaYFv6ePuhrQXrMLiwKdKAnk8mvTyf9LfskBso8Ud4j84PrvMnmn3FkTNxw",
  "key23": "35hREH2zMidqkMWu2bDm1sz3ejVYjqZhPgZz4LZppXc3Qnq7AmSnFDb6BrpBBvX7T7Pxi1YDqWzctL7qQg5beav8",
  "key24": "3sERRRDbkccmDAzcZYedxayxZFhP5a57awAzJrGs5SCE9SQ8mJBaoBn8FysGkWYChydQubCaVDrqrytd5y7amxGF",
  "key25": "4ZeXZDLCok3DemBUM8YZuR4nyHL1ieDFkpsawaFDdVGg13DDDKtbTcHc8o8kxpRGUhXnokKB4AtaG94TVvYnk9FW",
  "key26": "2y9q9fg1gKYJvYT5Wq7LXFz88JQDwxwmz1euNbYgDdFt5u2QkgQ36tTq7kFR7eebcgASf5QzGCEw9XPBrkaXkrKv",
  "key27": "4annpydGZDuYurgMKRkLyGS6KvFVM2zU9DZRaaPoVemiXwDukEz8SL8qVkU2fA8v7qAuTH9ND5U3nemYxr3P3fPQ",
  "key28": "47aZXHk8nqCcb7kr7tMmTmme93VmnrLjmRjS5EcYMvEoLKjXvbZUMn9sPUWWihXF6J5QqnLuWAvFsmQuuxYz6Uom"
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
