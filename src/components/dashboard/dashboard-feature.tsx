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
    "2d772mwqmVmxk4HbCoXkHnkPnpL6LksssbbZJHpxM8pQTh6wPyocuqfkp7g4mvx5xenDmiN8oeb2h5hAUaoWrdS1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5B2rK9k7cRKuViPQymnMtnUCXTiCnhMPxsvTu23zXEiv4ayqNNg4i48Ff9erpbWUZVgVgEq8aQMfjpZXw3X2TquG",
  "key1": "3PtMuSR26cZAvS36vx1Mf7Ce4yShSnBNBhzVXPCp6MsoonwejLhNj2Mbh68z162y4BLpskqkithQbSUGsTdonYFY",
  "key2": "3MRCWXr6ooxuW3mEajNCdTN8iN89WnvSBCjtrg3W48T6Fbxc3XAGnefDEh6CVYvybEMPuPiheRGxyRsigMybjZky",
  "key3": "2NYJsS3CpKWbDa31YSvutVA3FnwXvRa1stwCf4vg2He4Ybhxy8vtaK4ur3nNV9yZqeYFPYE3dptefoJgDicoWRuS",
  "key4": "6aBi7fnuMRZFzGE6scwDwSm7yTfUvdQ1geCwy9aUeD3XrTYbFCNFDDzUT3KF3iQswtnfBGMrsp824FR4uB7px9m",
  "key5": "53yw3qEuu9BEZRVpLHr71xhDpZuzo3bXZtss1v1WszYtqABtnwzezYsmnLDAN8Z9gzHu7KErSD8Z1S4Fm8HnFjPF",
  "key6": "3e9EFiDgsYKv6Mxn8MfsrK4zqqxwtztfJ8TKWTyAxWh5N8DYkowAmfuszSssYQrkx5drC7fqLQcHCh5FVUg2Ho1h",
  "key7": "DprH5Ypk1qVT3B15JZJ9d8GysWzb4xq9F9enwWrXJd9bzAirtE6vSbDDZtZ6HvzTBrcRTRqsGYr7vDgpcdwNPsa",
  "key8": "47iNU48nPWkkTm72qBNanUBKhHnDUR4ZJpYZq9yYnt9LvhHzULFpkugeC6j3mjMqrjcLZAyeFhisvYQ8S6UwpV8e",
  "key9": "5FWEobkZVNqqkuv53spY29a1YaQA9pqBo5aXGWpzjPVpjf2qJXnVUSQSZX2fva88QvGfitU6FQ7ya2yP3eN4oXip",
  "key10": "LEEer1QAZMVULdKE6Hj6sgEG2cWZP9fNjQoEtrCMnYsJYdL1c94qP6xPCvk1mMEGPhzgJBXA44pP9GyUPXsj3m7",
  "key11": "3mgAG9GdGHrCsguTBYNRNwJ7EUDjypaBo1pHwaTqfDW8FVfRsZm2h24MStGYwNfDd1aAKZjyZDZ1HGSB8bdJ4v6e",
  "key12": "47dgxhZJLUUUtewqsacFKcRJpfZp2fUJjfL1ijc64YBNtVtw9D3SDJgpyLYETKmo9p7S8vpHKEiNzRqY7Qn9bDL8",
  "key13": "2QjPWAStsSFjK799mr8kQfeBiVEbi7hM5yJKgqwf8cRSwBZMFWACVoYXQ8dBF4be6EqdeJeUkDcqgPRer9E3BvnW",
  "key14": "5dTLqDGFfcmsaSEbLWJ8kew5p7zv4jtdozCi5TuPK1G6bYEtLXCHGuG76cLrAajJSFNByKJrZyNn6ETYLJTt9sz2",
  "key15": "9HmuXHryGzbEmKiPyMLMcptPNGHcwfn3jKPXJLjLRjwqgxyDPXunRGVdbPQ7pj9XhWV83yaiRge5TVUrAjBJ2BC",
  "key16": "MMYupQSitx6VVinTKttNqS7g8QNWTsMC9yWqMn3247NrnB4NGZpwuXMcianpZiDnSXEyp25DJvUHQkUjHvxP8mb",
  "key17": "37kg1eJpGqWqnRmgp59UuX6KSRq7J6u8WZjaLLg6xu2edgp89JHxLU5F41HLybg1jpJdniaxDycY7bLVPjTiGAJv",
  "key18": "4ynUmQCsJEmqnPPFvdV9EE4X4pEi4i79RyysKMrbAko4bcKTx6kNfbK19Kc3Nigcmrcj6PxQAU59mnsuE6yxJXdf",
  "key19": "3E31TpHGtomGKXP9ivYqegs4oP9XXB74e2dVhMLgEC72SAVjD2JNZbmMGVJhqroTh7p2CQcNgh1N3zackE4vCXKR",
  "key20": "3egVLuBhMbwmSA2ETPHWausY8xr3RGcnTqt7Mdeg9QDfkVGFTKxmByL7WzBqim2QTKZEjpVxroNR8zK4eJi9rCFa",
  "key21": "3ohnSMRP4VAgH7LFWVYsJH2UhZeFmKpg7NYFJSVZSDJmJ86uW3L3kvTfa9ma6ddpMUFgBWwF7VWDtJXkgz8Modxd",
  "key22": "8S17DoirgqJyct6nDZNNEboJhXUsGnGFHSDX4ZYd19rFtmq4x33VYoaQEBH5NfyRWNkevdcPReNrZP7KLxJS2H3",
  "key23": "5MwEGSM1CPXSD6xeAfr3nuwc5z3J2DXceibKQSGcak4sxBV5zVm1zfmn2DL5u6gWYgjH1ocmGvFG4vyGkpP8ZJVm",
  "key24": "3UzQ6L7uyaVnSjeXFQZ3QFfBN25yJLAMn2YnFp9QY5aKfpkE2cPwvCWjFVSdAuxFnv7ANFsW2bqw6nE382mYa1VP"
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
