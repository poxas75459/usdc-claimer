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
    "3PpSB4M1PsS6H4BM9xhVNUsdSH6j5Jxb2EAemWNXuGMLHXiQ98WwCAfg9QBLfNJcuFE4VHdrRNtfAQxofMYwxPbo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33LE88H99E1nm5fitgig5GSLXqEuhkazWguk3S5J8Ke1Zgxata5WTjsFZs4aFqTuybTYs7ug3NJ9rw7U9MbwWCcj",
  "key1": "5PnDM4SCP4hEfPLxNbTc185Q2n8YwYeEBVfPgPdxTPwNcSDxFaPtTYWrcHytkGZGfchvVqz5Yoc7hNV6G7MbFRup",
  "key2": "5KMyUaivwaXVPnLfjvbWkJZftRa578t6KRW6ESNrvSBn2rc3ZomWi2zyJTYBFmSiciQHSvCEkbKuvRt2M2oTEX5z",
  "key3": "3zotiDrD1XkKc1ZhMiPwon2Bnyedicm9w4gz4zfenqLpfEwEeobtMfi1HpGDPfUNHbVExXAZZugs95n466CXPTQF",
  "key4": "3GooghkHde88wggx3y4zywrTEwdCBFjECfx9AndFKidthb66dqPMRrq3n3h4UxLzSwRjEq756mqf1WjzHZi69E1e",
  "key5": "53ETzkUBYVSV3cPKQccPdzq1WoWwh5PbK1s9VvYtE2uuWjaCBjuQ5B6yEw24wxoqVyMbAR4mberNKnNaKHHD7kq5",
  "key6": "3twN4kGVisMyZGV2GRHDaWfWDjw2EHCKHcewuqx62hmbGwQTKjzPBumr5WSZUdxtN4eeJobJHxyrTa2vqrGjF5hB",
  "key7": "3eHQ4XBMui3wSGXvt9W5p7SWhmz6nZT1AF5rJfJQYsUjTGmNJLokdm7bpiw1Yeh9RpM3c9HKaf3bzGb41jxTeBwW",
  "key8": "2HXhyEeo1t4xdYwy9drX59MGyFR8rjto5NP5m74JvWepqj4RSWRDNs5y5GPUBwmiozMJxYAGWZFf5r7J7jBL54h7",
  "key9": "3Kj8TCwdNxMn1oSKXhamfbvSKS54mXQhNVePDNwFTRMBn5hqoJvrxwJrFktb3hmTnft7ZvFJNfjvgHqVsLq5RQhQ",
  "key10": "3H1bfbfcLWmyi7ngGX4w7c3ENL6S5EHuteKhgL4JebdQHdPT6riPck11HhNa6xYxTH9QQ4sy6NBjcztHYbbcRJj8",
  "key11": "3CKWkgSYCpWusMexTgyB76XGmFcds1HCmWj9ct58vJ797qQxgVFgiZWr4F918LAwZbZtz7YLAuMKmarAko8fz4Ea",
  "key12": "3nYjwdKUgPqKxdZkEnZJvxpeG6fqaDZntsJG8nA84shVarrhJxDJhcBtd3Rb1A9uFNM9XknQWemfNp8vMeSJhMGC",
  "key13": "2PVLe6PPqtmqAD29tZn2bz29enzyzpg3AMNE3tjSVnFatkggYEUXVgcw2nTsRiigMLPpJV5RzcDpez3uer4iPvGo",
  "key14": "62XV4LdiJwH7MfNoRwAMnFzGr3THekatyiui8GbmoUqqzkGy7Wdtm1scTJYDofebdXg7zqWbLkz7MyXDW758Bheg",
  "key15": "CbBhbXBE6F3BMmP3K4zYLhCiS2wAJpbxAtLwo6hr5A3x3RB5pVLL1JqssYLVMnw6eLrrEFED3EKL5eMLHNKngd1",
  "key16": "4kJuR1kJEoBAjUhwTwMGYYxzk3hS3HqzS6tpCpyLcvMJ818nt6MsfuD6RG7r9v19VMGsM2iQyJYt3zgQtCRDqeye",
  "key17": "3wbPVu7PaaP3mu5ubKT1S7UZifhqabJ9UyJRWxDRVRXcj1kbFJWBmSDGGcUEqZXaWyvLrmNvKk7emFbxUTySjs7K",
  "key18": "5tS6FGtzPDbHFBeFYXzr7LmBe7BrozsdNBynLQchLWzH2kvxNB8S9PnsZHNWBjXpyy4YRgnYGNngaLee2AbL61s9",
  "key19": "4CL9p6kkRnXxgZmbnTLvLZ4MensY1kt8KnUUgjGU9PLbtgtzhmjZn4rne89aFywjyfzf4jQmMiXiYKH4sQGNx2Xu",
  "key20": "2kjd9qmdbJR3W8J4dpazGTB76ftK3S8L3pwfkEdMx3d7odoRyCLkJJd3Kw4Wo9J2LU3aBpJSduXsy9ejBzsn9vUn",
  "key21": "56rE5RT4s5tovW7pMnRVnYT7EzbuCFfEysXbcLL9FEAdVHj9doQHLt3KFHPJRRuRXqZ5ggi36nCHbVToz9rgL16f",
  "key22": "WdiZ28kfBaNDYKDK1V3a3MroyA6yFXqKpv1SGc9hmhb6bKnMr421w9SEFtJYLjaaVrzsHUtNCUSmMHfYAChycB1",
  "key23": "4pgof2Q3P5gW3KpxBhC6xWXw654jCsunyxENnw9CoWHqnnAFXd7fSxwYYBfXCiZc6uy6ys7pwxsdVkfxQm7sWabA",
  "key24": "4yoS5Aqk5MYByLX2y8jrUETo36g64sPcZCHi6cVtYeefKV6EG3HJ9cpwUBDHSnvpeBJmBjxkBvA1NEw8LGqzqYay",
  "key25": "5rzLen6nLZo5ojKYmaLSLv9A16nZMiwnV2Qf2ueAm6cfvoP4D6ucFP75mEPpUVhhd3mXLgb9ux7FQxpXkUGjgk7S",
  "key26": "JTwxDmhoc7fJd7Qohu85ZUr8GxZDbW4ikCX6ufCciC8B8yGQ4baS3oJo4DFLos8QCeWn4NQR61MuQ5re1YUCJjo"
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
