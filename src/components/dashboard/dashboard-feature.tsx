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
    "2qhmRiqVFGPf6zDedqSXTzc44gALQMesizU1Z7kJvSRTMckHTtNeuF9dH1uhre21Xj29gwTMF3cVUXAqtyqDfK8s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DcrHZoKg7j3Qi1T9hjb8ytPWXrAu8PYeeyCChh5ApUwJmyemMZXVgxG43xj5PBpQHbWcE3qdeJju8Ck1bJbFsoo",
  "key1": "5dKR8DYqJ5dkTbnTEJA6gskcDM8fYGwW6a6zcg7S4azTnxykLXFgLoKV9xriUVuvpFRYpu6vAHKg25aATxTemUeD",
  "key2": "56Ef7oRijkMMgk1UwFtkDQyqpJhBSK1P7J2NsboPqYqHQtWtvBR1iv1hmRCuvQ7JikEqeRfNbn1rR8Jyb4TKm5gc",
  "key3": "3kmUfArFCsjteu64kMTeULwtX6C94MsKjLQQoCBwmXQjZz6WENafwe7UgvgYn9FmAyH92vtQ8hQvEJsHVTsVkc2m",
  "key4": "2NtBJT4pnvQmSX9bt9aq9H1aBiNUqjf2Eh3YKULck9pgqGhGKohUo3PfPSaLrqnvAaB6aSqJqG6Xm4Lqt9Gu95py",
  "key5": "3ZJ5jZtVEdeu9mSLpPZys9pU3pu5MkyMSHrN6VncqUcL2Ud6reQ5yBC7QUmhhX4LcLAsKVq8ADd5ZAU5fPkMZ1ji",
  "key6": "2aYckMBzxvEbW8Uh2gXRMfuxtcXAzeXRzbHe8GFnygdQyxTbc5NjM2c4rvwFiYCr2drhYSrVwH6Wda91PED2RKYb",
  "key7": "2Q5uJTaJqCHnf2eJVoVrDAfLAAJ2mnRSkeTo3nmy4C7atPinrSatD9Kmw9TxFdbTfZaTeZ9vp4rdjgHrPRNuSugP",
  "key8": "2SDSDqfgSH2Zv48DxfbLuJa752UYnke6mAeq1kpQ3FnqJx2qgizhEGrp7aTyDnHJNLZTEnVGhydUitUxarB5L7zL",
  "key9": "mWRqNKSr8BJs6Fa6L3vvPJpVPxiEHVGwKqp9Uwh5xP3LEVzPp2buuvLGhyxg1GD6uPW1BsavsT9EPMv1LUqrHXw",
  "key10": "3Xfo5ZUpPwyw3hCZy8AFdEkkLA22CeXduuxPBTrjnmZhjm71j3ngnxoPT5mrmVnmNH21MfBF1aQuKgd3D2sUFLc9",
  "key11": "371bpCguz8tEvm5DEkZdWovBdMrxS5XByWM7FxNyLJ8BkPKE2VLcXqTD2zhNhWM9dZnQhsbE5Q9sWCr4M5YPtotr",
  "key12": "2ETscFuX6hFEnFMv37xw6LSiSt5FVE9w11yvqt7EyXjyGK9nJAFLe1GYKqVXqGPspuVVwn6uC4NMamEoaCqi5MXF",
  "key13": "CCQSyfaTTzRXWUth1Lcip8YnbNLtvRFPbzJkou2KBwLuvxR6TGiFHEXFFDXEptMcmmpMikQrsZXw9AgtQwB5R6E",
  "key14": "2jPXTbwWEBaAJjAW1h21EMCCwQnY8dyTWWHfCRJ8b215pZRHeyKtwiPAThw1Bs19hmLEyBMan6nGQWG9e3rhFJEF",
  "key15": "5E6uDVXNF5H4YaBXARGFUosPv91EBXiqsXP1kuc4SmV3eSkGDBoxWd61UkmkNVT3DLdfNt4N9oZJgdGoQe5Q1G9X",
  "key16": "5uiRUEoW3F3brMJK2haCyQDBqJSs2tKeqeFkNY1a4SFxcUwQ6g3QGvP2M3Ve3p6VYBkcfyd1wK7RJNJUGTYYPcHf",
  "key17": "2u7PAjemr65zw7rXMKhA7DmuTtfCj3HGGiUYeKxvPkEQuiJynF8S4QEyss2389oVesyibNCuLdGPqm1uRMuNpov3",
  "key18": "4wxYSwtjX5MDX8P2jJAnwsMx1DhMGju7SQQqZnwu7YEvEWrR8MLio7Z2cL8WxeFakY7uKofZFkH9uHtfFDwFbGnC",
  "key19": "7GsBsyBN2A8nCLpswbd9zZMLWzPFjSwy7sYa31bb1XaJRXu32opcF6qSEswd88j4MnEhduUNy3qLkUiqVbAEn5C",
  "key20": "nkVf2n8NDSfkdL9fW5U7hSSGW5y9ZYpdxgDYmUT4TCoxPWKScRpdpC7dC3s3otLVbq1fu2f6dYyyV8W8FxkVMcc",
  "key21": "soBtrqp8kP8jgPDByANp2idyebBeY2N9mCk62PTQLDotQLVSZGA4NgTGYHt1ouKCQXx36zHh5gnjgbqoPzoNa8b",
  "key22": "5JGvcbqNYpjbBkVsyRo3dTrx1qyXu8S25FZQoY6mPCwKzH5NLA2vfPE2JMgz7LrfR5BwxsJanZ4wCZxXuDxfKfm4",
  "key23": "4a8PeEgVX9bVcK3Xz7cjPW9jL2ZnFQP6hs4n8Rg2M5ANJiaFFkfYa9E173nBJW7bukxT7Gf3WmXh8i9DPV5nsjax",
  "key24": "23ik4dJ9sb2NHJEZLvi7QGDsKH2AV5wrNYJ1Hm2UA3wWXX88sPf3VyTUrLkfKbh5bpMHByJKQM7RrFtRPFqZMuiW",
  "key25": "5jguoERvkeyoAxJhH7F861NpgjvVeEbt5JrT9Q38c8be6JV8qKxiFtBh25hh1JMLgEH3CJjwhxfAfUicNMQYAYzS",
  "key26": "2cTzxac9BFh8H2ejEgBnaZKtzTd7G8WAoRzQH57bnxhV9s78X7hLu2v4Qbr8pA3w7XzpPFM2TjmEVnmRweu94gfd",
  "key27": "3NV5HZGWiMfszEP7PKrpj4xeY8ADNzk88cqrSSUQXw3JXSsK2RtK4FPpGMm28vK7FUXGavF6CmPSgerKKP5ws4sS"
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
