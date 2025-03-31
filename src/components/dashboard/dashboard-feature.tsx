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
    "4S7dkXWuFvqZSpC1pERkRsvXHCg77m36NscQi8PpBPcnMS3gyPhHbuAsE1VaRpHZucKYbX4ctnuKJT9x48HTUXfC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "L8rnXn8Bb6rR9fvc6V8vXcK166SXXM1jT3BeSg5oDXqbbHzGviT2Rf84cj3u2QhxwtmhDzY4Y5xDGZ6KPQTYuFe",
  "key1": "49YCPCkgGYFmioJqHn2gZPcPp3zNeBxyVFS7oWt2b4XvW2FBazuJovC92JcpabBMSvVw2J78iozodeDRDYQJy6Eh",
  "key2": "45JsMc7WaNHU572fZXbF25kmSV99g7EriXbLgLvfZhvwADdiM4r1UJ5c6FXjLceMcA3QXfK2tMoRD4pnMUV12mMG",
  "key3": "3pNvvF7292oHhNasGsoMGBbCUJdW2Rmmc8J62xidVQX7HKGEhZc5mjVUYDVRnps54mpMiaHi7j6K9BPZo7gSE3M6",
  "key4": "2K1eozkT5w3CF1ha7jyTSbNx9FpSZ17DkSU4rdbPPAZB2JvXLP8QNtCpbfTJfncjyUqKSM8SYMu7t7szGsLN4nZp",
  "key5": "2qE3s5m5ZqGJCgzDYGi44KxBYXPr1xZCMKQrJGknzT8DAPe1bTTtT683DqHhSThMRFC1dxmUTvGqGKgTKgecBkrq",
  "key6": "33EZ9ynnXJGZixhd3Rmyow5K3bzFUCbPXBW995GEGUvYBoJKuRKdnY3HxPbeHgZ34aRgQqKrKp6wVhhhuHgJ7zxX",
  "key7": "55gPByaBWxxw1G3M2fmBzLFBrjhh1WLGdk71SmKTC6VqWoFXLRS2bC78VKztAg1CuZ65BBpEQXBSx4udHWGqjYwa",
  "key8": "5RTFhQjRQ8Fy4yGh83Nw4XNMfsTir7WWBXjYAYpdyepypXvB4qJppuzWCn538vufZDD89xYXtujPH8ghHTmvo4TZ",
  "key9": "5vGvwv2Askw3PdcEAKXuyEHk18efYCG6PG5xJmuuMibQ3MAxo4gAYECnPdttFPg61rcS7gp1CtywvAbpPNemJpyV",
  "key10": "5z5jzBqFrkv6LtWsgMwjfnm9uCbz4cmp1pHitNhY4ntthH3dCJF8gr9AeVYQGYhuqrRPXkHdGKWY9qEBDoumcmW4",
  "key11": "3FLQpRkASRKDJgGimYF6FCvqMzqKbABkyfN6VinQLP8EtBNRhbSFgefSLFxL2ME5kPqb24B3o73qWbEzrNvGMf1G",
  "key12": "xitPWHsf6ojmdU3VfusPfT5TK16DGZjRFGRVt6y1YJfy7VMyyZw2b27Pg5eou7YBg26br1EQLLd7Gvg84ggqcV7",
  "key13": "9Hf31WSwLUNLzq5NU4f7xmcdoFbEZBVA39njrEiDzV45KQTeeyU8GwobzsGrZEwnxkoKv2iqTdz4vcGmyBGsmNP",
  "key14": "2sym1RZcvScLQhHiaGTyMX5qDccHnsnwtR84gadsoM2Rgsz9shMF2Ydr5TZk657rx6umzBNDopaynaeTaM2JpBUx",
  "key15": "2qDUHjMLrP5NgnCCgajH8p36Ng1qyUZBDPKtoFwYkC9aKatVRMrj6jt7nMQmq8dWdyF8jPnQ7SQzc8BWsJKMcDDF",
  "key16": "4oDmNtZLLctsgRGBGu1eG5mEArAq3puyRaobKWAGGpKZpNHbgPfdF2tkKCnNfciP21mHHgPEjXz4KtZHE81M4rEF",
  "key17": "4updB7KaH9qNE7BzTWq55nqS74oMh2jk3FTEyKuga1FfMq66BBrcLsXT8bm6ZLETNxtsKF1zRfVez3mqANsJ4E9a",
  "key18": "4V8MJJFdJahgcXxSb2rJ2JVGseCnavL9GN4pTrm9qwnmCRdADZ4BiY79a2oohgimK36PDjnYrLbD3E7h1aLZAgZN",
  "key19": "2MaMd79nVmxuA5b3ytr4AqCi9uWHLKYndAyS8uPhs5HmMg4ecUs3ao7Qf7nFow4wwkKpxYPRHmCFQvQVayR6KmnN",
  "key20": "33hxGTUkdBevoBJ8kiwadbsFN9tjJnVqBFDu2VtbKZr3ukDkne88eXdDo3ee6v7o4iWmZWNpPQDwrTzvJ1sSYmEh",
  "key21": "vAthTwb48aEfBKnpgFnL7cu1LjiJ9vaPBi4oxYGyjbwHu4fdRCYWVAKfsXUC7jCxsSt2EB6CWZV57NvjYcZeksy",
  "key22": "4TCjyb6rP5DiFiwjbqtKhNgv9o2F5HoupvskB5387f4EzG8AtdiaVMCRyvncQPnAavfgc72SQmmbGhdi1JEmTzXS",
  "key23": "26SA7ew2JdrLQuFcJg4LsWAXuyxwmew2G1HCmjV9UdHy2KGQLjVbgwTJdnaALsP4skska3ZKoW7SBX5XQZZWnJM5",
  "key24": "oxnMVjwU64enfZHrWkxwW1k7BzbMRK4GJkvREpmiKDRPHVbpcyKycgNj6DJmvs9zihTJk9oLkEHwCmxjXwfTZoz",
  "key25": "2TVT7v2wjJCmEBHvi92kMcSghAWZBJTWn8ZsB7zVpRSxTGJfokWjwSypZamHwAPTdB6WPVmrbDNAjDxuGb5gqTgc",
  "key26": "5Em75CjEhsCrRx1nvfQmfvRPBYRHessJzwhsJbp3axhrQa9AqmSTv61B56kR5NKBLgzrSqGUNhTVpHae5mL118CR",
  "key27": "5UZst16RTkEYA3kBUpNLF3xzXCB3q82JjLcPnPbYca8d9gN53F8xVkRYHQkA4TsFDiSuR98F6AdZKKCKaZT9ihtr"
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
