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
    "2wgnDQRKTACAvSo2o8ZmsEwfkXvxRvqvkpa7TxixKvbNJthSFDNCVghALapwhohdJDcvYpWr7fU5APCUDScdWCWE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vm9h7EdZJGRsSKabkFyjRtpavdrzmmdbtdZnpisdevqVjdKPEincUihzzGYDZJccQpUJi8zKcRQQ9sz6NSNCK5v",
  "key1": "21PfAqzDCm3eogHDMcXSzuYjQ4r1JpxceUuVx1hMp6RQ8zrQauxjaUUtydpJxdq3nTFFZ2phbwupTU6isjoePf5S",
  "key2": "4BbErco7jScqWJULSTWtzNjg9T3mwAcuikWhEM3mDmmmQoYnoXyYPJMGcSrtRXvYf1TMEUdbH1DkroWCHSJPbL73",
  "key3": "2fzGEkLnRDaxbUz5wSmJJF8HN8foCDcMsWPVZuUEKK3v27qccbb4Uz9vwGyGMdRGr7iTonTGjQqYgMxW5u14BYhm",
  "key4": "3HN14J39RmXVP3ZTKw3grvmSnXvAGfE29tbKCn8toKtRoEsXS3XzQJc2PiUZT3oUAGQPKBnmeyXZpc1RCfTGM6A7",
  "key5": "3cu3eiJiqxrdNuqCYkHQSUeTJ9bcUcZxVWfo6LVarp8gyvK7nvyoRgFu3DMp7wSK3xbiCgimee6hFRmGcbhvA8zs",
  "key6": "4fTKQKxQgmrCHZQrVFkNMjgrBbRhW2w1tBviN3hTkKUee9rJ9fqKercgugZQ4H4FoYYf75JgGjxQxVHZueHTmhvP",
  "key7": "4jayn91pkKcs4LTYMHWYbGGK7RMVyaPYB35NoBZNccERB9m9QwrJM3hDNMRnMVGfzgEw9kAe8i2Q5xCSfZ79g4Jn",
  "key8": "341pZirhdxPy7temJhdnGJfp3rj5mM1FqGN9iFMpdKayd73McZe7NopiRA4CJEEmtBGmLfLGi5Fo7caPVVC7CgtP",
  "key9": "2YLmEmCh5YKtm6mbWQ4tWm2Hb4gait1go2wNMavo6v1qhTfA6T5XCxB7BW2Eh8rXLis5TVgK7p8JLWjxEvPevuJA",
  "key10": "4HfpLHUNpe1fo4uv4PGJfeEKYgnFv4hMr3Dmjfn53xLC1R7jkURNqLabXCoqLuX7jsF3kpJayFvHaoVvWq5kAKGd",
  "key11": "46x2RYtePno1WKhZEa6XwNesRzBhgiBsE2E3E3fGMmPFzk1d7rZExHVowwVx9n9MhgXUrhcYEtBX4Sva8TetHTN2",
  "key12": "4jQCAXnzeoAM5jhCYtVCc8k3VAYBeNficW9pbVaeUJw6gSENRuPxydZSaJXtAZS6WFmdFBLXmo99pxcD1UiWAt5R",
  "key13": "3dvEG7YnWQmWtTtSNTY3EZMBKsZndFTEZarVAQnB2UnovWqkfRvN54yWn3946fDXMvRej9SNjbuHFva4KmqpLY9b",
  "key14": "52B5MevHg3tqA6xZxZG8725dTB13wsDXPTReTUcsZwptM5X58cUfrb1rVnYCZUt4uEaCecfgiWr5bFvVNQpEzj3Y",
  "key15": "2SV98fDFMwPzkPuEs15yYgjGd3r5xtyEbwSLHi2dQjzLddymbBWSftmmEBYSDBTzqrF46Ja2oYa7mEEMCngvb6uy",
  "key16": "LTMTFv8bXgYkdgQ1x8guGGNuUx82MLGuJkiXEXhzhkJGXnmbqMPcmVoCi8pLakcn9CNbDNRK2JB3wcBLLWBfsY5",
  "key17": "2yd6jCfxi1LsJj1p6wXPwNKidghToQoLJh49xUbb9mjhBDXGH3sfY8K1ooPDr9AqQG3tUWAUXU6S7CvKT9XxoRiF",
  "key18": "5R5KoGasNi758e3em897qryBYpHMxN7nAave31bLwVMpv2QRBRbVsTDK2ZCsNRjSx1EnUHtc3VsPRRPetYtEAvJ4",
  "key19": "2Z2Ge5jMukKwxFbiMwqp9HuoWQsFGNwjrSSAPVRTz8ky96sA84f64C55zbRMkVz3h6ndEFtnRKSKFagiR3Vqj4WW",
  "key20": "2D7TUCECzipqUAJ6KzZ36gHCaDgSfjpefWRdTZdahwUTdGgRgHkgTnZRZ38mZFuc2NtidPHoNPQKdyDg9FtHrfhA",
  "key21": "2G7yZPtLMxAfjkmUPoseb86AMzoyFctNP3GmRa7kBPgeKbAehMCfU4QcpDTEWwzAPQZ3LfL1kx5QUis3cyN7AcqB",
  "key22": "57PBHqo7aDABjtDa5ERB2wTVrZYREEi1xwnMVkvg1fkX4iAE2MkCHKJq2MdNrSFZsFtZx1HxkxJhkipjMBLkETLq",
  "key23": "63gsTs39zFJCQFhdUPXBTcKqQbU44oZkoKoeujF8d4f5agZty4DB4iCm2CbGHtJ8d2P4S8vsCC5nVrYeTUh6tSvy",
  "key24": "4wPFd8g1K9wNr2WFZXFHEJrpG8meLnxfuJPHpXmE3ZmFy5ET8oBX9fb6Gnh31FLynVYVevcDLJ1cWBrSibGaPupT",
  "key25": "7ygKGLfKa2aJFW6MdyV9zC9KLSeF4TsQDQqSR7TEtzqD6zMc69XiXxR7r4eDk5FqEnZhdFYAt8RsSEpWHNma11M"
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
