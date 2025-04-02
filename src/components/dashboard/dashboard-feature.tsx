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
    "3RUh34HtSFKhksbYBXrHCCPYmPDK1UBGWyAStgB5nsBEgnS7BEJHbECKwov864wydkaGxMz6364WCSioWQaLfWcS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46Z4QSRcR1qB7bpJA9ELg6sa3kMwo4MhtRNfbWNVaRo5CZTrBgJGAdmUE7ZJsNKsKMPAXLjejwqDkohgZ7Y6iE15",
  "key1": "4N9TJhE1rnTPaDkCcC5xch6Ru4znfsJUDJnivuj7yCFAfzDDxbtVMFR3PEgPbSzhP4XCCWM5LmJkpYLYYBDgkEvv",
  "key2": "31FcWkR9rWQkK2LhHxznbWF6hCBAEhRrMvovvBThQ2GHmQo7AWqepujudhc87JbQAS21yYULwapfKBS4AJ9UhoxU",
  "key3": "2Sjtt19EJUJCgdqfZPxvSPeqDr8V5jE75mQCvYsGAWWqiyovJmpG6rkHtM9vxCnRXsvQCjMMV8dmZjyN84w59tPn",
  "key4": "3Zp376oVNCgEj7YmLruP1gtZc1NNwF8Vg6pRxFwbH9jq16TuNSueD8dKt8qnQJ6JPgUMcThzGh4ctTxy1epGLs5S",
  "key5": "2NfzNeVvoFuJVc8jcJMrFDBCox32ck5R1tPrLuP2YZXSQTte7eFRbjJcaLfXVP1rwnPo4bj6hTg2pzgzQzuNJHo3",
  "key6": "4JoHXuzKoRGtGhRWqEeCbj9346wNn6TbuNKw1Zi1Q14HSiKJRFveisqALT2L4RFJW3u5PJVysckXaCqobhX1wmTV",
  "key7": "4dUHrjEkzK3sxkiZngWFpREeeM5H4uxrkoXS4ZqmvKrRDhWnLTCiFa6jkT1dcehCoR3nEjUDWTNyAq5ftJuR7BNK",
  "key8": "3S8p3wUdYeUPFWXcCHaANkjbBKgG8S85vF9WSi4zeMn5k4fMq9ayYGTUXvi86pVhq8zULR6EPiSwB7ZQK9svyLFa",
  "key9": "kBpUpzaH8EbuTguetiuUJDJ1ZwDZscro5FSmu9Xaw9tLPP5LSn4TUWGnfQC8siPFCwUUQaSjLpjTBHJUaqJspHd",
  "key10": "2w9HY8WCAtAcGUpnLw4LMYhJ9xqU5r2TVnnatAD9sqS7LDbgEmHFKYFh3RL2vUA4e7tdDfUSUsTcXCe8L5xcfkXq",
  "key11": "64eAsvh7fVMb41XMLDFtNjGARjUUnc2xFizbH5BRHSNLfrGGEQ2k8RzJR5dUEaXgRE7uKLh6WDneYe48RQ9VPzbG",
  "key12": "55P92iFtmDtV1xcWda81Ppkr5sN22s6NvFeyzLxxEGNjtPYcq3M9jhrfqQBprjpNBMUSkpwobi4PBu3VQtMxjqPV",
  "key13": "5Gmqxet5orcz65nZx6KMxXav6JuJCXprhpEfSLjzHYgsL6Hfi61hc3SeFjPJ5nUychQCyR5ZoTH2nDxJKRKDqNdt",
  "key14": "wPyJp3RdGHq4nuuLAqaaFwx8J9tbD8i6RkPLgnh2AfKLAtf16dcf1ennKWYk4ds4YsLfwj1pkjqEytDEez9YR8w",
  "key15": "2ypcQpuB4CDL5hAoMvKvVkovfQSZnYqPeBC9gK5rBH4tt1MkSVLx4RVSmEGsAVdGYLMkUUxuhmA1ZNmC8ngCwpJb",
  "key16": "59vguwjNKvqc6rWN9MeMH4FNWDF46qecEPb8ggpBGaCGNySusoupbb8psK9ynkMJkY5qwZSiFXtXr5M5nYpWxBSF",
  "key17": "2ktnsihMv3H245D5AUqW8ypxGyEaSzMgnvBzGXDgsK3NxwYd9tGuK1Ya4nQ4jhM6rYMKojzhD8bwyopP87qE34Mc",
  "key18": "5h7vFuZ4591JxJNUoWmzfsrJMbePNjaYjQ7bmhyn99xFZE94Nj5EmAEWsKQRNyEy6cPDPNbeLW9hXcCFBM1mpeVq",
  "key19": "5Fk6aPEGSjWvS199WFam11kDMaVZHZt9EdF9stSAXJU3GMedJhz6ppRGWyXTTbygt3m2CcPvon22vC3EhZMqVdD2",
  "key20": "243VoX532VwnVvv2rCvt61ZcAnDGVEKVbWHLqBwEMR9gLqZLWAZMCZtt9PaKXPkBHnHgbY6nwuF81TBhRz3rmUXh",
  "key21": "3NSRPjMt84pyrnZoFSvE8iZo9E4dPBR8HqgwTwkoy57e9bt661m7Qi2yTQPfadYsXrWwKi9ZMsevkAgvNmnQgUGv",
  "key22": "op4usjBcgQrkkATLuqNcjNTd3u4dKMdw32e934cZFKvC9NZqye6F5oDqRZw4vhHfRKW1hYjstxPXwSMp47vurzg",
  "key23": "3CuyDvamM7xUbHe36ZPVuJQyfNuZEjCnr4yjiunJXmCLd7k5LaasFEnmVfffGF61wk9ZmwyAqokULZcj7LX7jWEs",
  "key24": "bowUzggQQ5uEgAuxNvcoxWUqcxREUwVmCUJoP3fi6B9ww7bXTnfRmtJKfw4vuksMWiRXnM8MocqYZwcmUNjXTMg",
  "key25": "yDofcAA2GR72CFkgEmdk69ZuYC22dF9uZcmX1kJWtV8rNbKPcp8UqTJ764G1pWDU2dPekgyYc5sP3M7UF23TV1f",
  "key26": "3XDuiZA8rz9LJN968vf7UVJFj88y1DUUHNQan7kjbG5cx2ojwaby4inDKpZ2B8NYnzuNjTo4pXpVygthZW1TjnRe",
  "key27": "5S6mBUocsHuJ6KRRLimHTZQVWFFNZhc96FWwqJvSjLLooUqnFfE6iEA2E4afxLoxti3xESZakoSP8jndaxG7EQT9",
  "key28": "25nZu7oGbeLmFqxXG1UyG3VHgs7Dr7GVUh29YpmHDctBA6iqpaXEUV8jebpob5s2QrixssBiXjaiHXGc8mD6EiDK",
  "key29": "2Jf4UF3r3LnkvdsgCGQwZETGkNfG9gT6Q78Uap6DnAXbU2imcRArSW3txwTLi4WgqrPd8X9AApWtBdG63AKN1kpo",
  "key30": "4M14SHN6jCCLXYydy5df3eNWub4S3L6nu866PYkEqqBjxSwjkQDc73GGgcWh5Qu7JeZV5BNzWZzvv9fwJqja6WFm",
  "key31": "4uJEChF2CcsB9RuADgwzzUQw9hH1sZhAXh2d1P4ypHv3ho9aq4NQtDESH8CqNdWKkrTVoxuMLPq4k3oxU8zqstiU",
  "key32": "2MrvW8adZBxvQCLLugaEhik4BcLeT56bJacAmn4zpWY96E4XnL71oT5DCg3NSJp5Ru71bEX1tHKxi6jg5cfkDx9s",
  "key33": "LUEygiGhZnB23v59gr4fZbDPrgagfgNwFL1isJSqe7WM18YB72vxYJFEovDNAPSNXjgcMoB2cT8yiYKmP3eoyVi",
  "key34": "5xgAedWjfPh7o3HXSWux53Uwp2GG84avhYC6Rbd1P2xhiQdRGs6SQt7yJwPzU74QqvqqX4sLPJWzTeoBMP8Y12VT",
  "key35": "485PmeJSwEXmDHx1J8eyKZAgv2zhoW1sX9twpFSTUmEP1dCxNAhxfEMp3MeCjgfymxz4SG37CQ3Cuqo5Etv8Bcfd",
  "key36": "2X27zhqzCxVYkUBZVC7dDT12rgQ3GpdVXbC8Uz2nQazRf8AbnrtVmiNAuP9NCHpGLQdt3RWFK8TRK7UXAAhe6YsB",
  "key37": "2a4h1pGYMS9N3DFTh7uKKC7vzAsxeiQ5ctuU5ua81iyje1jVW636gZudtECtTRFzXi5z6ELboxeZ3PCfQRMp87RS",
  "key38": "2V1s4P2DLzbg4tGu3GLoqjhDKDqPvrenPpn5kCGsdQXd3V4hZ22EnB4KRDXDwy2xW9utesh1qVJkjvdpSyHbscj8",
  "key39": "2MepYoeBNuanthFqoPf5De68dsiGE6TJjR813d5GvReB53HpmqwT4ZuXfMqet8Ub7GDUaHUnhm56BG4tgnZVmByS",
  "key40": "3myZmDyZ5cH6iH2GrBcyyRXPeRwhLbdZPFigRMF5oBXXnbkFRFyK8rGMsxzSitAsLnTevssL5pAn9ZKKKX79XvW9",
  "key41": "5EfSybbvqn1NFwLAVvhAXYsMbjRXem2Ws3oRDZ7xkm3BNtM8J94XqEqb8YJrhd79cXCgPPMFmzBcDyw8yVZ7posW",
  "key42": "46b1H1ojNoKkXvBw55BXtDchRSBp9iqJptCBYjizKQ8gxHuZE3xUe99r2YxVQNboBupcauB1LSuYf2k9ZSf826Xs",
  "key43": "28Pp1GNRvuzQNNGeSjTaFKRNSEJGTwtP1dBuHveoDvV9EQ9eQK2dEQZegAfsab9yCiNupqghucMc2kwq4zSjv1rt",
  "key44": "4HZ8E7MW3swkXDfFCydmwnRHTSr9gy3Qyp73mbNuafv8zT1SYLju4sZEUvkExQAbJQSWLPinqPv7W4umAdiMsnKJ",
  "key45": "UP3jzGtbEV1wPyy9vGDXNQd9EGHLfZMJ9qP9ac14EzuPVWUP3JvUvtchAqgb3KqanGQaXeFJENTdcKdHDS7RxZM"
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
