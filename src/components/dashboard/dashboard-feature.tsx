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
    "34ZhaRci7z55dZQYn2VvNxoXXXZo8aXxB1xDhKi8tCdkftUccS78KYR2izqjgoCWsCg2XuMi7sHtntSBdx7ZWp5E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DdHjTJPZ6qU5HnYbwykFD7ZasdhitthgjMGdCyGcLWVrrK2oaxwq8gF5rW62k9Ga7aGTAkr9uGtjPCbxqM9qZ7r",
  "key1": "3a5uJAdq5Mx77FVMqUkJofZucAF3C3tD7am5Fs87syrjoFs3h7mS49qhYNCHE6Z1ZBFuSRBT82PH63Hyk8T7WhxZ",
  "key2": "3tVbrvhF1mCYYDksKP8MqtwnNoto6HqwLqtk4vPjYo8uw2HnsBmG29KvApDPaPK8H85PyujVmJA4zSAGzjyxpXEj",
  "key3": "FAqz5LppRcTVePFBd4bX1YjbzJSxjFvaDtTQeTh8ddfdggrNSU9UNmBv9fTr22wJi9CXPnru7LTgHU5dJgjCJxk",
  "key4": "4fcAhUwigvYN47vFfuvUCpo2XGaXXUjx234ejpXU9rPuydBMNgz7XwCYhLkTAZUruWrhmmCEttJkXgzJx2TNG2tn",
  "key5": "2e3hBxbnVvYT46yNnj8qvMBqfbM579QZVkv8YMr5LQuHe31V7gVnrKnMunymFo3SXMGMtFpmRZTAL8eoFhBV31cZ",
  "key6": "MCqSJr1DUbX4N2gFjU6Hk5mb5wG4hsrCuRFDunQdNgydVze2TLqRcRyyk4aukoTMJoc4eGhc8M1mCeHm9aRL3YL",
  "key7": "4itNaXh8s181ZDs2ZqsEW5cB4FmZFioi5UjuQTg42ZaDhAryUWsUcxPna75RE1H6DsFs5VaE8dqTZRHQcZW4RB2o",
  "key8": "5Mm1jSm2VBX2GfCBwa1fLYXe9GxGKYMghFtSAtCfixjVSMcKt87ti8JU61r2thXT1YNrpJvCZDcHyaug8ScxoQUz",
  "key9": "2HoMqdfSuNvnQ5QitNcNxoHvbSNFeELECvEf3CQJwKW7SMfAKiVzrY85SDBymb2pQkWMqrF6LyN8DsJvJvXDoh9q",
  "key10": "2pHsXE5kqFeeBQDVYZ4C6M4F7YQ13PebNT3ykd5URVoEZaorXGf4ZJ5pM8nMCvkebWHYmA6AfgFctyZrvMeGziJ7",
  "key11": "8FZyECQjLPqgvVf8AJJtnTHQaunGK1Jxzx8PWGKMWfc2MHmtLSUUSAvMGWzpf3qpEqrG3xZWa3hQiv2vd3MwRmm",
  "key12": "4ZBEMEMNQAUuRJ3uwS5fxG4CVR6MfofiWTApnxVdMWKE15c1pdQ5XCkK5MAhyneMRspQTcydd183MVUCRnxijNze",
  "key13": "JGswhp1NdFT7HQ3c4BjXFazjJo3cGN7mroa8navieQXA6WtTq1KNCuUnwR9f6D41sKCuc7Ftx2WJU46KWT8F8UU",
  "key14": "nSNn5mAAuzwrateWWwaKx9dQExGzGae9uKjuGtYHhdZht5ySTSqKNDbx4mmcKSscKtN7nRdLWWHQUrqE6Be1UDw",
  "key15": "uS4RMfW49ut3thXER1cfX87wbH3mZnuJJXwKYvESNa7HRapmtgBH2bgrTh44LVoqM4huURCQCHqUardxwJpEQRC",
  "key16": "2hAq91xZCV1FJeGKnRTazijUgRi8ABqwZyVu7igiKauf7SniErLYbGy98S91mkoKZMMSitka51XCgbpkXxokaajv",
  "key17": "43zVpnCGjdAkECV66bb4Ma3PSVXUNQDthiQ6kgvG42cKSyh6ZnGK78s7gRViUG5epRtgYEt8V1CaeBBsbkVnzuiR",
  "key18": "gF3PcnczcudyGMyMu7wNawLddyjCd3tkw6vJ3zim1wngsAR3Qc1M6Na1supkMC5588RXeYo61iMkwA6gqUVif2F",
  "key19": "5MH6yLogLEq1aGddns55LGvqQfk5qbv6ZyuM7Pxtup7mDfSBsJ37MA5JZAMBz6h9nzWMwP7X3G8mJyn5xb8hYnGy",
  "key20": "3gbXrPU9WaysfncKpsJz8kFb6Btcv4rXsck3x7Xs1o6WnJ2HFZTKWuh83jEeGjwQoHoHcSCAgXqaZctxY5isiMFA",
  "key21": "3dPTrQVzmXvmW5YH6KcUxjHra5Rj13gWy7qfK3ogAGndXfNeodqCUSiaHtSHjg8Cf4GpfLXpThHtNFQycXoVZsMa",
  "key22": "3grGhyg5Co3vxtYSzKwexmZtGnNuekkqab6Af1AixkFykDqXQCg9DLSPeYTCZUzNNSvkbv2JxHXpjBdh1bygLXE9",
  "key23": "5JYoTZwpzkHBKceeBcAafpo5uzC2H8HoYSjip1dS6pyUSHkLHh7gnK85i1Ry6cuCaasaz1tSNT7FeJK7JdgGtDz",
  "key24": "MSpsQy89q9QcAxwqxskz1iBhUtdSNeZHaMFtaZRDkhmXC3o1nBukMG98cP9JDtfS4nJdPMugVPx85ToAEvdUFXr",
  "key25": "32eR7BQaiq1mTj3RRNUGm67nDRT218USvtb6GCKGMTWWREtWoALsttmkX8BNeXuYYJeZ9SmqQwvKwj6EEQqqScNe",
  "key26": "3a7GPmAHhz8kvEgKpBuJ9774X1BM1XCD1foiejWH2FnMRMx4Wi3dRP2eZk8EJuP8cV5mcaqBmgyBLCSDKUTt2eoA",
  "key27": "4NRoKqCazTtoUqWmSi5DdsSYefhsQJhSvouc76Vqa1irHUuRZ1s7bE9kFAhzxbDEpdMzAUgi5LWAUzJH4M4ytRhE",
  "key28": "4uCpQdMjkJdeGxZK7vS5Yiei4RHah8RUyHdHiPCW1bTvgX36vJJZUFxFimLLASBVR8FShvihQPnxd1FMdLQBjtis",
  "key29": "76pRk4vshAv1wL2UDq1ho6454LyDrUksdxL5rU5Fju4DZ2oAszsNcaZWvsSMUvnFdM5px3CB7vmk7UHcBTzgSRF",
  "key30": "4gdu3PAPJZ9MC7AJzotH77oh5syWKXznX1r99EUphLdCWQ7vU1bDhX8F1b3qs6RUsQSex5oBec8jbMfeaXtkKhTp",
  "key31": "5RasUBJvNrX5CGUkW9YyHmcro2Ki4MbgTdqgyTRY3PgsQdST3yuYJkk1oBvvmvySSwxxkWEW8eVdm7TK5WPzLDb4",
  "key32": "2wvMATcnp6JC3RQVpBSnjg975xv3hS45NrW28hqkjBUdk6AaZF1pzLU5v7LuNT2G469DC7G5X9VzeT6XrDpb3Rck"
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
