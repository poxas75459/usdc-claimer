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
    "sNwYWSKspfVkpXsUYsRaH38HPy14img7Uyz9AFjFKWGAMgXYjgQPLV4dQtkm2cYYwZUzbtXxKYciWfNxcobymhX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nekhMw9SPdGD1TUPUZvGEERVY6dt5E8uWWCydSg3Yao4StECPrSXZ13Rjg26gz9BSttmR4Nrge954VVDatnDqL8",
  "key1": "3uXbiAPy7a1WxMdKxsEHaUKzQLRz9k71NawKNmnpy29koAPKffGAhaLA5zKZt1s3JNXjFn4uRa3uTh4pRMCbVJHh",
  "key2": "4MN7u5gLqTeUTUuHa6NA5v4vMVZ7fibpSgjax4YbEzunvJrcucAAzbFuB7G74cJaoS4WHXu3pdLzGtf6iHjtYHmm",
  "key3": "5mpP34Nw44hQvb8NHzSqAdYSvJLoRA7wFNHzZY64pnjhGSiJhRvBCgxh5zkuAeCDx5FQdBk8inFDFvLkuVmdBNcq",
  "key4": "4RWHPe4C4Ucs49LJnoHfbD5npZZHS6C8oV2JaP7TtwF1os62P9sSppHanbcuKTLMwy41bjrSNWLAmRHfgSCa9eW5",
  "key5": "49yUFXcz4fmu48YXw1wY7cL1APrygXTovdH49KJk3U1d8FnGiTNEofRMM5TzMLXgARFTGxaiJvmBANkL2hA5BjRR",
  "key6": "3xDTpP51cALeTtr9SsaiNMYCnx4VD28sb6iLM7ze797Urb6WU5XPdPx3zVLzG3W8xGV7y6g6nZHXsLCKTfwpAtf8",
  "key7": "3hcQTRbDwTdWipH5K5UoTravSc7r4mjpBo1Xt5WGHtRcKZKsNLb7jKH8DC3Hz854s9KSjCNFue6mkeJWgAXPz5zw",
  "key8": "8FywFUbC6sR5ZvrCcco8p9CUvAJyJdBE8iY6En6pPKsf4SujaejHVqEa364JJFAUDkubi3PsRH4Gat7FgXW2FhG",
  "key9": "2gLXoJgPXeRQFau6Lpr7mim3wDjvQYvj7B7bg7YvnSonD3nrNG6ZocprCXMwwoTPNHaZnpuJARRFNGkNqEYg3TkT",
  "key10": "5VDZNBQrcCgvNWs3kVDqiJRkQbFZqTBKrt6BWjuAqfKW3K7bq1739uXgVDG1YAuzTzSpj2uNyTAvVvFa12Y3jQUr",
  "key11": "4KntaTTXKFjdqDMsQEaWhDfHsEyatnw8qsARFCs18G5T9FtjZxV3tBjq2ZuCANDZDaAz286mQHJD3BsVSzfWBeBX",
  "key12": "4Mp2vM2Y9D5iS3KpAkW1DAqpLL6CAG6jZVru7QiQJuBFPQBKHWCQdTg8z6ngKGjGBPWqnrhxHQmHJJZCbXthjLij",
  "key13": "4SY1XuGBGzp9rSpNXKKr4xYE49CzuakWfPAiF8NUR4kNWRTsEo1pd69adwjGTiDMr9QYqFFy9NY2LGrQBEFqbzfb",
  "key14": "jwSBYqc59U5BLfSpWWHFUhTzyQi1rA73PthfiQNgQ7Tfjj8qu8SLk9B43MaKuBYZ5LCXPjGXopW4s92FJ68qpk5",
  "key15": "4uBgjwA1BziP7G9P6W4gJrchckwWzV8pJroXjDHLWpZ4xL1JXYeUQboGbDnxwqfcRQpC6AUEsUaMFgF1rXeH59se",
  "key16": "4u3dhBHTTcBUrMmVd7zTot8QV9iTYzLrv49yJXrRCeUsXi89gjSsFDy5f4wbGLobcyMTLRJXFR28jcw4WVvxxFVW",
  "key17": "4wXd6H4tBzxJFFrSS8FdCk2VC8JWQ44TCfUK41zdeAwYJjw3BZ71Mn8eGM5jQM7yUN4fgtDCuZTGtyPHjAoBHqKs",
  "key18": "2doTSjzB1WdhJrHTxBS2uzXKZrCDeqobANjhxh5WhyAuiVm4FixNtzqvVW28PGjdihzkZ7TcECeNxdXaEHWAPyym",
  "key19": "33q9KYo7TNYw6h49w6AaRiMGB8KyzFN6qgLfeKMnBfxZodHtTgEdvfM4EnkUYiRwzebRCczcARKAnEt3qxjYaLoq",
  "key20": "4SM1cD6ncvBeMMbyCD1zKdEE7YVsbeVWezeoiQMDfyMzbU5fxA26bURbAgHGrgpL3AtDaPkhGaQvuTdeQQebQqj6",
  "key21": "5QAtDc3kS8sAFLupZgmME24oCcgHsnstqa1ZyssRjyEkcnq7ZYyYCVPKJheSLMHULy9NQeNajWGf3Pafvnwq3cp1",
  "key22": "2xGesQBxE8nrKtEQ9bhgRzrBMi8SwsKwcExkfwhFkCBoDeXHGcSp4L58gFDgsD6DPHfM14qAZRmN1qDvVhWBNwRa",
  "key23": "3qfxUWtWhqnaLZjWUJTV184V5XLUUWM3mWAEFkcmu9u1MtBTmGjEAmicrZhAid5Z5imbi4MzCU6deLeheVZuT9SW",
  "key24": "2ZokE3axV8Y2XAt2zuoXGKYa2JqygB6CugweSyUFU52kqic8C6Yu8W9m3vTHGush5xXWUpcCPQPYtAnFTCikSgVN"
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
