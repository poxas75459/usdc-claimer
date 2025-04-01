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
    "384Qk3XVp3FQm9ecP26LSh1XWRRd4fJcfKrs4pboMydVcGAjY1PGmY2n5MrfJZ6DQQtn3ey8NNRtJiJj2FLM7uNG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gwVTrFceAv9WQzh7cvxuSsvbQyk1Kbv6AvYemSjN3aevYU8pGoMbLSFNiewzrKUURgoJazhjs6E4mZ2N2w6hYg2",
  "key1": "3XXpmxGbw5WuYfREBvd71apHbt8ea33DDhb81puM48kEL7SQWquiSQ1ADKZmzeqqaQokUdVmtBNMzsjApMmGwBZW",
  "key2": "2uEhozKWVkcYdyHqbgW91RD311bAM7CGcjsioSHxC9d36pP1ocL2FmciVwKbnSkn9PCyNE1HshmShuH9hsvwLW3A",
  "key3": "366rJkb5vKCXtEJH7JJdRQyzuja334xTaCsJFWVKjUVYHzfp9YeyMFetQeJfMq6zVoKFrEw9D3xo6yAJuzzY9bKa",
  "key4": "dy8x83paVMTAHqS1kfyeVzipzjvUNnTrEAmAYYEUQpc6mf93QLoSGp3THTjDhHeQGNGLHnjLjCqyZE1KYNfT8nK",
  "key5": "3jzD61inSSofpc3yyA4zB7t6WXA8uWixHaWA6nsYqRz4ogjGyzzpQSaoQktsaLJ86pffxeMdCeufiuZi52VKoMVx",
  "key6": "4mixxhzZvpQy4pU8dRr7uxv3srPFazvgN883wiJDiCJDkECUgvSJRuSRNKbCV1R24mibH6FQX7sLyTjYVy8MDoFa",
  "key7": "51apzkDhjaz8pgCbDQR4pPyZfYSoJqTAPTZT2Jp19qjAyLfR3BZmJ8dJymYEWC4zSsczaWWNBs189d2SbKmztZT",
  "key8": "xx6GxxfenhcjstLVcWJMdmsvRM6m8qj6VGNsVEnkEBLdPbtzNXob4ucpC2YNsVKwxhMhGFEpU8mJk1rXwkUzB9D",
  "key9": "2YnjQDoJYownw1XU8AK13p22etmrDjYqxuDvrAF5g6gt1iAsy2C64xSFqDUVPJ1hi2D5wjsnT6cHceSrQBznFHT9",
  "key10": "3v3Awp9GzpMc5TiH9EhvS7zDVUAk2vaetQmoHM9JmFnkRPGDA9frehWsDyMrfh1A5e4pk8e52L4By9ihx8ZaGsQp",
  "key11": "BQDBYuX4GhSW6a1rnMbB1LbN66VD7Aowt52s9ZfhN4bUgmKpD2AiVWQMfqxfw3NPgGRUiAQ8Rq5opwkvejsNaL4",
  "key12": "3iDwYnPP9Sid7RswZLRTqxwdPXPEdDX2F3M67DpefAJzeZWcPuvyQ9EGt6vyewzMA7qzzce3fufcjA1r3Vu2MXtH",
  "key13": "3E9H41rrijD74mWd4dbkqsRuPSM9Xci3JZSjLTtcULAT9FSjrK6yWptoXqniszo3NxEvQvF4oDsknFhwZwrGyxuB",
  "key14": "qspVqov5vSjdfS4xNGaxYF1EvzPgUtxNTZLEBMuvffqiC1s9au1LirmTFudKvXRYoNNHZWgXbvx31di8yX4fV7N",
  "key15": "2QcmsgA4QDaJHABVtbkEpKq7zmpKFcVPveYgEWcpf6bKkWfq9ARfEbwtzbFvTyWWRB1MPQ4igBbfvSC1KuFrPCRj",
  "key16": "mAcosS1HGjz5fADbpeRAagT1m3pZYDuiWncUe2nziaesBgnLWXLGD13wxamg1SM1qN7gdp7W77rgh5bVmT7Uqxs",
  "key17": "65cFvRpbUnKPD6BGcQwAd3ybKgTxUtpoTbSBVSxJdu22ZCa1aJfRY4ZKCH6xo4JtDuWRZLPwegJz8WJmrDP9f6mB",
  "key18": "VBXke3BpGpEiDq2iuv3u3SPvmRw5iN3vnU9GRoWk2NzqbiuKKknALnGA5KRZa97f69yEk1gKNFghD8Z24FTYZFy",
  "key19": "2BbQ4QBB4dVJmJsn7EeFLa8QGtqTuRzyvAU5SdHaEjadjU4XSk7J3AoGAMKyY2F7ooV151jKmjFJLaytoAuT6gE1",
  "key20": "52W2Bsq3p39ueUtuwagz5N7kAkWnamABy8MLJvVzYG6EVCi9VrKHytMf6SKLcB5iqCx1w54sdoZgzdeBBKGMNpjA",
  "key21": "5en5qe2kSWgqnEzhiT6628Zqmnt6NF8xexKrux1vS8EhjbEspHx3baXtQoysuufVAEMJDyMvyoKsnk4TSwnhBBoF",
  "key22": "5dS8meZ7snwTAHon1gC8GWdk5yS1KtF1AfxVc8WkLcosizroLvKLHswEGSxQpQY1GJthg9s7Vo8Qji3RuXsSZLuk",
  "key23": "5FzPtqpV6vPYMKB1pKi7H9xsMVe81H8ooeeg4xn7QTWas5iGpz4sjhfiD9oPsYG9x5UQSyYMfwR2Zt9MLhwZe6YS",
  "key24": "21wK19Smha1fyeEJBLUGbLQAwNopYwY7XCWz7gDCUVRViDLwahYDDxjvs5PWk7fp4aip4ypYaWJKDbMxeM8SJkke",
  "key25": "qHQDQhiRAX7VBPGivtxFkHfee9QuMJLVhqoSkQncrsUaATpMmcybjreqdnc2svuK7oD77qtYFTYafbk66je3ayT",
  "key26": "4KrwwSuFvYiyY7E9mTxm3m7R49BgZ4EvZ3NC5QUxUYotMPaW7tSr4WwQZKJw237uZqC8M6ddryVPKwnkmr29XeCA",
  "key27": "VmYDktE3D1Tk4ihwGQzM1DqkCtTYURMFYztrYKgev1LqytDfwULVA9GgH5muhmCZA1A3JSTatts4QZ7Q27NqwK8",
  "key28": "2CSTRsf2L3feEvKF7iKQ6hSVSs4jY9dGR1mHRLaWw6NPoaKpyxUXM6YBCVTEN445iHoRexqG4ATB2HgT9a9x2Pm8",
  "key29": "2dFZNqaAMdzCeJToodqs96DQtvu3QPRWVMhNghMNYNdgw1W7xLTTMWmC5nRi1W7BDQpscUrrHvDunRcvy8H1RtQW"
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
