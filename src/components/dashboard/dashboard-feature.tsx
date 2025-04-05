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
    "3PUUCKnkDfgJZK7PxbemMK4hRo7anQ5uzsAtEDHT356zFgBHhwHM46DnJ2Me9skPUHBNnFoTV65R7xK9RDo6Qj64"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PVmuxQnQ6z5St3oAKf4HXt5rEWxtwdFQN2GR8yeKX2bUQvtBfCisEHSukEpLkS64DYhpDh8YAoe13PsV2xmgZ4T",
  "key1": "3HzABHVGBkRvpJue4P54kcCqmSTCU7d72Q58jgAzECDBbWX7nZ3kUgqKe7uCaMEsFNomiPwWXdiNaiqKBDSgAK2e",
  "key2": "3VGbJrGGPfjbHLb61o7oxaeJET8JL6F864BYebA2tqL7vcUMnxnpd2x7157X8FqyYk2YdHRTvxaNFv5iUCSUSftv",
  "key3": "5JL1yYU3hwbUFoMB85J4uDYpKsF4yVxTXNPonebpk2BdLJAbYywuws1w9cpWGaWTqCceGpqBfcJH9Wfg3tezM71Y",
  "key4": "4mbeHBbxegyem13ag3KoHqxSDDYy4XwGQSy8298memh92BybZ8VPwTTX8BjJUGpV44As73Eeyfnww2tcV1KVjMSG",
  "key5": "51ofkoUkBKuNSTVTEqvPqf1YMyRaVkdhDzk8qbmeLHRrKdunUYJyaMeADQPCp3NV482hpkxL6uXGojzb8HLeETAo",
  "key6": "4mm4cGVnmRuYFSAYQ7fefiguwULWbxYX7xSVF2b1jujpZRGGskczKq9Xg9CG5BnDBMUQqQi558o6WG94NhiwRAK4",
  "key7": "2gNuh6D4nGB3W3678Ai6C7bRJoEX3W1ubXQWZMGLjzmRqUiSCEpshv2WLJhGrnBkmosqFaAHxLFVatXdEXstYhYy",
  "key8": "66NgRGa45fmj2AzrfMcJSvYdjvqnfMX4DaxnqSHXoLXeDt8wyTMGoojyJ3KVkKcNxjqmjR42fzz45iK6hs8cAQZC",
  "key9": "3FzfvC7oq5FK6r4z8fHkKxkmpQPsJTe7SuagkksWyBW32MmTpMhEHccG1fdjjadLUQPWdY3Qx8gfCq8w9nYGKqYj",
  "key10": "5DgcDkGwZDPWCE1A947F9xx1M7Jm5T4G1tgb2uajHerVmce6tj8ByDkR766bNhoVmhgjo9wJ7dJu7R7GG7xerWrf",
  "key11": "5vKtdBReTnMqehpS4e923Phk615Vx6rq5Duos2paKHiFzY6y2hWg1bLod9JZnHdgSCHZPznNMa1H5tw6heTLn62J",
  "key12": "3Egqt5fG4o2iTp5Ugu2AxhDdkJ19SRapUC1kbGSPZuEqoNtWHegxkE4zy2JuTQSJ7agnEA2Lya9HibcppZc9dzJQ",
  "key13": "2ckajjdP7sACaePLQR46WPAaCc7KXwQT2DJ8RpxgfSfYYXJmCey9JdKt5Q3s74HvhSP9CJFEHDGmpV2V7x71ERu9",
  "key14": "4gW5E86Ud23ikgNUFUTDSZZgdmVSkXBwddyf4LG4dxRDFpCP6GRuRb2hBRVZaiwum5LefTequ7JzsA2rvADiAfDf",
  "key15": "5YnK11bcuYTBahfsj2NfqM5TR4VeLHsQ3SauhnjmPg4eAFbhx3ZBSHVku9nCvS5Xz7YxKM4t7QN1w7of3GX8Nf96",
  "key16": "67F9FH1NJpBWkqcVkFyFTgFcCqPM17EZR9vU5sgrGHcpMCv8wNqELsjnR3AfpSVYJKTKP4xRWhPwS1XopX4vn7h7",
  "key17": "3fE9AoaamRmww8HULSVKrkuxoozPZsssa2hfCWjy5BvPdEtWMhyZxkpEtUuvRMHhGexcMe9TiKYBEpRVggh4uLCr",
  "key18": "3n4eZs7npkZ7GaJMbgYWppufowu1EwBqpE2a8W9pQVhyXTRFu6YbAW12f7aTTAm28a2oBGvPsVrM9mG9PzMxgbDR",
  "key19": "2mDsL9KB5YM9KgfHXZuWx2694mDYPbSR9XJwrWSjmKei3EH7z6ukQMGxn4rQXcQktT58Jo1J3Z6aYCpUtmsRwdzU",
  "key20": "4ESr8ihcpLDaGwPVnBbiMmTB7FzNaYRS5kH5E3dtzqZkcJggWS5KPsdPXu2uT9ARmPLMBfKV1jw17MhEhQkGAhwU",
  "key21": "2F9cU2EpLrDYQoGELU97iDYKaCdH4o2ZZnsSdK9WZo9k1rBCuGGiNBp1qZ2faGTmLooGfZrNY7auFvgQ9r6pqXws",
  "key22": "5GwimwVCjePonyF9XF4QpR3tjREnjhuoyJ8Y4pVNQcAZczGCcfZW15uVyTVk34A1vNaNePBc6d9aJYPUM9Mze9bV",
  "key23": "58qX7c1gAa5iHccE9ewtPvdE1WHykC8tS7Ekb29Fjrwx4ErNbiukQFqq9qe9WC2bUntgaUhup1DKsidZ2maWvzPz",
  "key24": "5ac2z8B1hggHBruSuY81LpffJozKwMYmzCQU3KPWjgLTNehaRddeHS166kKFRykkfCv1SYuzBAGeUt9V3c7v9iHw"
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
