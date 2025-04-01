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
    "xVbaf4XQaJk1pMM48SE4mCEsswSCMmvRdU6MSotqCbEnxhqKRXz76f1BaESFDDupcdivMtpMtJrN73E5MfLMn9c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CGRkSkq822Kuytd1scq2m7UQNwPwvzMkfgXSAG3xpUuDJhHCNR47GM1TH1qT16BrSg3hZYxFKcsgDxybhuJxZCM",
  "key1": "31qe4r1R27V5TbCcKio12uMLmPLKZZq7g6NEvU1S1bDqg4mgaTKZzd7kQ161Q9EZMALE6PYyDYiNEULDN5qV4M6i",
  "key2": "4qivQuuYdqRD8FzzEGxYbzANXMTg9kh3vBCqvKZwbGp5W4a4YKJ8ix7AamUnPTD9gNPJrHAFy57rKMJHzn44hBVp",
  "key3": "2DgJHMscKpwiapCMEmaivbZb4HsikTMCYB6MDbgGWdLG686B7pt5Jw3odRQshEy32jXYsXgVKSMqMMyrBU7Wnygn",
  "key4": "RXW5M74VF3SrM7Vz4tLxPFYBatC846kiWBe3xnbcxKzuuQConA7UC58WqErF32iRYCS8zguXkxa5rqFGuwxR6U2",
  "key5": "iV7P8YQWXpcTVi5dyhcgrqTnLHL4MybqBvDMa1rBVuYJN5dTWrFAE4XwxCLhThowq4vX2YNYKxmSWgRvDyPLWHu",
  "key6": "4ax6Ed7e8McrLzShnaAi1Abkvfw23Q4xkZ5uYtvxQ3o7w8RTQJ7mjGm7gi4DLTebSHC7y9RPV8QA7RnimFVxM8Xz",
  "key7": "2U64qKoq7GSiMi1ms1bpTWJ25Mx71jXjhF6ttABwzc65RjRbBboZc6mqysTKC7Hujzb2JbRdQ1jvnn41qaUqvJWq",
  "key8": "32Pqfr9tb3f31YByyn3cTpSUj9j47dmZjPHxDaYVNydjeE8JQ8jDuroVjsCsHGBDr4pkN9DAynhGy3pt4PstjgT2",
  "key9": "5JVwSbDruGMKXfafJDzchBddZJPXEgYaXc6C2gs5UaCXy8dYhnPXbKfSAyNU42BCj8e3gz4jaD3R3Fg2fYeqf2c9",
  "key10": "3M5sbnjRPWGNaqhFYy21CnD7hyxP5t9LSkmJx1JYacfvBJtUfaPJWCeF9Zyi2Nk25fSZs4MCr7YTGapznAdk7bwa",
  "key11": "3zDhiKA2Gkme1Tt4TyN97SADao2LmXobX48H79TDzvnKVH225RtN73mJT25eKGtrwnteBxjSDQzS6shKDkGnuqqP",
  "key12": "uC7BGAm8m5oPJWXZ5fKYQQpAM82za7ycKAtw4wXZFrBDKaKAsdj23eif14hdjeK9erGch7igN6oaxhXX5FWQhPt",
  "key13": "Zn3FviM1SsAYm7tuvNce8RUdppz9jqHrfJDaUsCHTmQbPjmEmjeLJJU8jPe31HosEmo2d1kFYs5MSWCKixaFr5g",
  "key14": "444m4mJEtZqz5rgY3pV3x63rDSprZeWnp6okhsau4Nq1P5uWe9VHuXrwK11rhpZuoTqwZRUVQ62HKf2TpHH14ZPC",
  "key15": "64qY3QxNTiB3iMgk2foZPfqsRPU2vFyVhSPTtYkoXyHCR37y1hXjanHzU7vPzbey8WYL2wZJfPBHrizf8tKuakjs",
  "key16": "2LSCpZwpQHEBUZzr3zhqy5kvAFKRWBCuCiQbhP4y1n5gcp4ZHfzdX98FsEewfkw1uLAYdrbPSSQetnopuMsxbWfG",
  "key17": "2kKLMk1eTxpyHE7VGv8bKFngG9Jg3Z3Eyaw49sD7sRT2nYDeCXeYtqFaauPaYTZ939cQjLVyycpZXB1Xo3f8qhn6",
  "key18": "2H89L1jUdkvSrVPHBM6VuZHKAPnJ622DDWuCh8j7fKUafHJpNYWr3Ku3yKt5vFqZxTXfoX7Rzk6xLr2cxuvbUb9D",
  "key19": "4JtKdmTE4orSqq3exXa4JvUEusoYz21Z7iYnD9RD8s9UXAYigZZ3rTnxui4kxh8toDF2dgj1xj3x4yMHg82ryuu2",
  "key20": "4rHfXZM26TuVWxCQo4UsYDwKCKPRPLtX5ZBBpPF7HTDzbgWuMdTGjqLf2yTbomet449b6yJJgCz2UodCqyYvnV7M",
  "key21": "2Z3kk2iWXBNW1aBthq3sfo1YLy8TWNbVqebFMELC6psh1VKZ9dXfXZA2gQG5Gj1SGmRdX6K7MAZhdY2fh3kLej24",
  "key22": "5L1HkyDfsz3an5Z1YnzUTjGTyYqP41QkUnGfm667UW9n3eNWsN21f17rJA82fsyvu5ppSpTgJH6zjGTfjtvSmcEa",
  "key23": "4Nx4z3ieBT7DmVTtHq9pqyDPuWHLSE9Cc1QFxhTEVqJdmeoJTifjXxv8RGMLzf41TXZHqj3GeMoQtZb6PcaV1pr8",
  "key24": "sobDC7wGyqQPv8bRns579WL3WygggLU5jJpsYZAqZFxnUdqtyw6fqtUm8CYFNyKZwijhqx6rbTg3nMKJQBMfa57",
  "key25": "4evnwDKQEHK5v9QV161bdrrzhs5DC3q71TvmaGmHcy4jBc6gyGz1375ZmfzbTve2UujTNRmKcrEDWdbwLGjZJuxT",
  "key26": "GYmrZe6wBm2Q7j3NWsngqoxkHbUCmuXbVwpo33TVVnKYq3iTSwwodAYay3fJyMDdo45vmSmZ1VAVQGUJhzGAu4C",
  "key27": "WdUV38cgxpzDGBsrZmgsfjM2HFnxhqMvudUdgjkmhmmtyjqGcCZpBeM1W2jsCDwonUiKee3PvbsZ3UvddtBKkbX"
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
