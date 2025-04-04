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
    "5wrcwM8zbb384Y6bLuCXhgPgfYH8xsHX8VGZn5Ydd9YAdrz5KqeZcX6BM3dXyCPFx9Vwed7D5VNcDiZ9KscmgjHW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Pi7UgiRf1UHYfeUP4NqFXoPfT8RoPgZDRoiyet2yipwAXXUqhaKpEVRtwau6UDHeEvMMwGNE6qbbDTmZoFZr3KE",
  "key1": "4kdA2KHzgSjzQPNeD1AnG8E5LZoMSse9ohYXEY2pahDUBc3rhcwQxWzer4kSm1omQ2icDXt7ifAavBd29QrovHBE",
  "key2": "R31k8kzqd44wPfA1KVisvhiA27XycbQddWXLWWopmGwUUXCY1cEzxztu4Y7ap6M97xBu2QLfwtPt13imKwVnbwk",
  "key3": "5ns4ycfX9TcL24vWa5t58sGjiMJeijxxTUswE5fQ2E2o7vCRa5XaZh37FgyPBGhjkQw9L6f4aNjXwG2r1uQ7mfjJ",
  "key4": "3NCi5hTVKFTghYxUNAAnSoRMfmeGLYpLYsayEV8nEPuUbHyJjrnRSsQ9AgjAXcHauJSYH7DQKXEnQp1sP51suN5f",
  "key5": "3xxQhBJv3pBVyt5dZSzAS22ezqYcD4ogHTj6G9w65tsELC5QxF4BDoVd5fH5J543aJQRWukzAa8tVJgQM9w8uG3v",
  "key6": "nJSKke4LPNsmd8RuWyeU7ZgipuorR6srtcwtEfq2ZceLfjjkm7bJUBNnmdFLUXicYiHpExyo49jSjbUkbd7XiWo",
  "key7": "48u8wewQdF2AbbTYgJX8EPhysg8NPebRaFW32jJAtpzXwfFc25GurdrmdnHUN65PuSqtoMQMx7g1GViMKNwgQHLw",
  "key8": "4gj7V6rt6fkkN5uLZkpA2MM5qQvHQrDs2ZbnYknRfbgNwd7aadduxtJjhT49fNUTwkMqh98xJ9ewSfRZSJaNwiJp",
  "key9": "inCextPjoxKj7iXqBxtryDQTDr11ogdZGLr6rTooUfynAuJCBF5CgSES8VDf57NSRA6isSvytd1djqgWjYx9Q5u",
  "key10": "W5hZHMehd9WQpsgDq37SuU92dcBnHM5vTG8pnZ5Fb7c6uuP6tm8JcJKyRGJCNMRTTi84Wta9xcZ97VMoE6jrVSK",
  "key11": "5TXhosAjB5YqbiwB9gaUcM4bTMgqCnevy3XxtrdvfwgUFxcpu82wEma1jiqabYgMrGvX6RawXdoSaRqTXfVzxZ3Q",
  "key12": "3cLzgPWXru5xUPSDxzB9y4ML3kTF6AX9zZT77TWSD4uuUGSq3FsALu1RHuUHQpoNe53ZApHm9L9EPANqVxzsGAWL",
  "key13": "64YLMYQg1AXJzp9RJormZMUZrRB4FQF1vRYpsAMhDGqdRWPrBEX9Z9aCYhUQZUvVxwjAQedYp5gRhM2zu2rnU4i4",
  "key14": "2myWHHPzJGiYtXjNvovoZ8aLXvC211EXw2cq2WVJSfMEAaZPi7wrBTxjw9A629Exd61Gzt6TVrzSuFcuYAyZMkKv",
  "key15": "37NUsbw3Wt14J9USxTdzMrvjBjZizNjeojVasiZejbHfv49tQmmXggYvS88yDbB5HNKokJDzFaEoZTWCEfmcAmpS",
  "key16": "2kJgftsydHiJj8i718GfLQtkGa7H6VDjvkneXv44dptgSd1cEPVW2P9anGdUBjtswTtcyj2eMQPkNra8ZGwghCQR",
  "key17": "1qyVfLHJVcVgykQYEzCYQSZdA8RAAjJMayGXqsnUvgJ6CRNxrzLdu33kDjtjgBaZ3GYiKpgZK6WJWL1G7fKRv7k",
  "key18": "42UaVqYrfaiqwdkFLmVZiH9PdfnGUiam4qwbMTLNCyic2Qm1zZYCuQ2PD5z3MC93ayPPafKFkjNkeE6oyNR184Gi",
  "key19": "291FrSNEvqjnwbgLJYiDQoLssc117GChKj1tDUjwcSZs7NsJ6dBDzFscnrWidsV3pymFRbUBhaqjp3avzVWP1i6N",
  "key20": "63dp9P7PRzW9kNw4LmYv2oU7DqjVmTGeqkTkarnhiE772UwivSTJ48jFP8BgbcrWJ7vtcpmSUUy82VRbPMx253gv",
  "key21": "G7gTVhpxTEAenpw1ZrPYyL3Nfh7q1fttgw7beu64rfUaEqozs3A8NroTU7DVv7Bcn4vTggxdyvzgmqyrnvjBL3W",
  "key22": "3Rvra49U4gZnco5wXVGr7Kc8BcqkBp9K5eBP3bYSbnEVzxVy1ESopL6HzTysMqGax4QVyiCCvHrMmQDSd4YzdtTP",
  "key23": "FQKW1tTTQJp1SNr6sZL8ExWFE8eVsxRzLWf3vr8eX8hUWH1XZauZKxaSmm1iTGodfEJq6BN7EVYuu8Rar7Bpf4m",
  "key24": "5v3MgBvX7JypbqiTeEgjQ2h6RQMtGJRqept85f6igQmgyTDJSMAPqkuz3HdWGL34snLF8byZH8osxf554Tem8FsK",
  "key25": "43YvcnXdAwTrMtZAG2emSPMtXEAbq9E6ehgPhjuDMgJJLXYqRDW97CiTvPk7gZ71tSPJWFmHegnkoXD1iS4DPciR",
  "key26": "4cQJYNLSstnee7nJff3T5oP6f2CsQLyF8msqDN2ZgqHdQZSeoAe2MsVLYRUPhZFu4ZQ5r8iDnM7pUYoppeigh7ej",
  "key27": "54GKUsNvc6wDwR5TimhTPzQ6yS88vdkJeTpsg2TZeFMkTKwUy56UjCVmj26AP44ZU68ubyRR87Q7cXRQiCNWeRGP",
  "key28": "mftoHQpqqcXNF7LThgTy4GgFBUebGTXAzS73tT3TTAXGc6ES1Vx1BrpgT94Cs5yziXaqyXetGZ3xWt7ASSFoCgD",
  "key29": "57maDTihZNNt9oQr2YXki2h3GAHbC6gBZbnAmybvFd4tCYt3ATi74BfY4XsnXXVNye24qaM6FAabs6poeRh8Eoq6",
  "key30": "2CM45Su125eJcpNbeAUhYSiRKGLbZEtXNasiD8741ba2gnRJn2oMbRySV1nG6wgmyHZQrXeo1CBRLa7wUkRj7YPM",
  "key31": "615BPvkw5HV9LujjBhEm2Sw88zTrNfmp343bydhXS5WiGbm7SaS6utEepqVwGcrPK5ivsoB5Sp8upcT8muFMGhJa",
  "key32": "29ikrJWDDJmGKG17avzJgCnzGC95zLZPDGrvrxnasRozr4rgfZNXUrcdxEXzRkvKmM8W2jyVMzfZhdBm4dCrQjYg",
  "key33": "5djgEDYQBpEAMA9dTs6QkEnPsdrkhdpP8Br4cPY9pXfbP7vTeni6oCk7FyZNiBQuhnMfuV2Wia8hjZMZznCiuCCZ",
  "key34": "4mUDcT29bZ8QKw9wXCRYs5oLpopSQLkvbca9dmb5tpS9juTj2Q2Grtu8F8atnUngVmXo27793Ns1JKJNDJnPEDYW",
  "key35": "63BBcy4LCJsfrKLZ7YR7n24DJwCJEGFsyuYV6M4FwAejtYVE378JKAu3wX4hVp5hgPgTESMUrZVB2nR3i8cvLndm",
  "key36": "4rXEh5zx82TjiJxdPRhEzp86L84TJREA33o8auukhekzNXZ8GP6vNqrgwbies7yU9wxkS7ZzNfpKHMWUHTkzXrH3",
  "key37": "5Zwi43qh8E51L2MxBjBFyGJXLk1oJYErFEsteLjB1oDpxZAhqFc3e99Ce51TVM4aSCVVvYfS8kzcZ7DBjzy1Np65",
  "key38": "5DGXVAFDUXmYi37Pmp1DdFfB2WumJ5wg15G9zoLQJYgJRM14nGdhG8BBoawVGeNDTHPyfefprSuSRDJYkvKydtZB",
  "key39": "5r92mEUMzeRB6vT8TNDrcDbPEo9KXnXrdwopQM7XHfxvxXvVoyiHUou889kgDs55QQLbYRDJbwfTGg4qHeBHEyPF",
  "key40": "32UVFjjBKfvz11N5T2FQepxZfNfT7TUzbU2UJBHpyH5atNG9sVxqAmyQ5Ru3jUpYonVzDxxP8AMLZXnXFpsJEK6J",
  "key41": "hK4R3jUfRdLp6UKn4WbbBM5PtdhRNVeXg3VsNkQRsHC4MbGyscFrES5fRXQ7Hh1WMuBZq4oxRuG7QcfjTWHSUh2",
  "key42": "5caftLjcq3dsd9A9WRaqpUNvW46hhHHYdrwaw6n291QNcLYosEU2HNWQ6mJUoewQ4K4fsYLmZzadmK1Fhqxia9Xx"
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
