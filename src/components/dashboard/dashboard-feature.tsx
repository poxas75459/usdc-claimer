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
    "2qBk5KbTqvPiVR1stuPzNAP8ChDtY2VHtkGS5M7NniTVnDGv6AMJP95BY9yKzcP7td6TAohWouWvBqMzVrJfiFfa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UtN9eVZLovVgSpgBhHizavkDifyA5KphWY6UoGczPuBQANJqDFwYEap2nYGN4Ekyq46AJtqzedqnpiw6Jdt2782",
  "key1": "5RPkF5tEPTNezVtjw4QgfkB5x65EXYtshvsi6roYPfgiBspMuUtCGYvReytahWugSj88cPPXVtSGydjgcbVzB9Ye",
  "key2": "EAPsexxZZ7Wheg2brsBRHwMfAnRb5h5QRx9EtqpMh2PDFmBFLJBFMWd99NsLSA3osPy1eCTpdzJnGHe5Dwf1ufV",
  "key3": "3S1H5LjnY7MVmtpkatekf9rzx2UHB5Xu6WG7c8skmbuuMCdrfEY3qVpHnaV7dngr8LyH31t2SE47V3buTfYw3ue1",
  "key4": "3k9uX4ZZC9Lv8zF3fy79BVhotMt1E1QB1ZMfwhV9oMCMX7gmbhbLuDRvHFPGjrKSekBNGLGEiExYbF8T7pTW2iFL",
  "key5": "41WDt2EdRoQyFPLtUE1Ui4qVaKFyPTj31dht9Wqv8MvnhJr45bLKQUyo8ZCCq4zfaCA15uErsZqAJ5jjepV4Rrtp",
  "key6": "4icfZTfbKWBQTM7F4uK1PnxwyrpVPCH1TocNiyk2zSMGcWbZTKfCbAvo5PwM71fi4BAwhioTrNohygAvutHMKLkt",
  "key7": "xyMcccxo8m3DHCoVU1rGpb7thjJHXVQMaW8VLDhfDXPPuvxfgsmBWDSV9zbUmsDmJemr5HFwV3BVVu8NdTruCQ5",
  "key8": "51yTvrUxjKRLgp6ZZTXaDHFQEWuZsLwXmADVYH8uGiJLn8KxjfikJ7v9MTJdfJig15haWdAPYbDEYsfJ1HJgtNDz",
  "key9": "5AxNhBbF3pmNguZyDjs8f4omcw8owjKfvy9cBwp1XWtifxTKQsEaM81LZBWsx5yoXg54ocRmxkZUTaJphC4a7yYZ",
  "key10": "3cLU5CS4uijDUjHGvb76Ldy1858tFWWvLKgx7hUSg5hZWizHGuxDWGVWB5M6RyGTiRvRQoxMcswBnoP55qTjhhPu",
  "key11": "3dBUuZBLgKjzuBEDZEkbrgjwvDz8DWeYDpJuGWpeqpWKykWk8wuPMFtGbkzbZcVo1CZYe7Ez6a8tWgaogCLF8fUo",
  "key12": "586Y3HRDMryB6d69kRJZytAEkC2PQT6eoP6CcC3h7Jx6TvXaVPmmhPhDexp9LcjVMa6swycCR3ZcWZkb9HCGa8F8",
  "key13": "3r2pwRUneytogajVUEFvgZB4sVyafP14uPaJ7XEkHGxwgW5QscLQMbHpew49CTEongunC4X39RufyGBpiidGYsw8",
  "key14": "4nGb9pRbxYSkBT3iysa8VTRnc4iE5VCSojuEt9ANXasvbVGRvqW4TWtfhjzpmfWhGJt9v8ND9x1AS4rMH7k6d9QS",
  "key15": "5vA14k4wVgGoi6ucFxhKrkjocFzsM3EH7gZDNDFX3F1foHsXhBJA3E2gC3nML9UhasP26DCMdfr5vCrXzELEnJbF",
  "key16": "2vCvcL341nQVayTBinjhSThPQwHF1ieEAWNCXxJV8uLnPWsYqJ9b7TxbZrq6Mm5Qkg1RMerf1W6g5C87JA57Qs85",
  "key17": "PxZ6NGihy5jb3KRdUL5fibWwwSzRboa63HrBBHHm6CSzsLsq4XcZpxLJgoeGuZJSaULiwmcF7AehYtSpCLZ8UHH",
  "key18": "5pud3MVntC5QCSurLGfr1eUW9wnKQDie9Q3Fj5hqZsMxj6syHdxBRFjp62HADe98RwrkdxmxKsYv1gbbHozjQ7MQ",
  "key19": "5UvBRWSQDAzUy8TbxMqWoDQvHV2e1DgWt9B9EGWyetUBcR32285zeVneft7M2mVrWgVVLWsZ7LDxtaztNV5bTSNT",
  "key20": "3smb6N6SdsPC8u4bb7oL8da3R5ppoC77KqfX7FRufcUt8e6GeNsqXGyJsfSRwWDBwWqwLmds7ZeuVRtsjXnVruGT",
  "key21": "5QGp1jDW7Wk1VfRQ6uuG1hUG3KSYn5AhH2ycjad1Ey2dWnwenPRi2FxT8qafigaApJBDMzDfpgZiEVfTScydj8Yg",
  "key22": "49MKyoGDTEzD6KC9pW5qpUsE23YAwee9bgjZNwr6zJKMCqBzx5sTtvNPp4SqpUhJsFH2uVRQ25BTzC6XxvGQiJ14",
  "key23": "4KqTBwaVAz4neA2rfuzPULXsk8Ah7qjkK4g4kESsYgZ7DZmLjmAoUGxxoz54Zk1N6Cv4wPVEHNA8KVH4fByrUZhF",
  "key24": "2v3ULN8zm95eMKrcbHTZdCLLJexkakn7oTT76Lz6jTnrTQ8G2cBLxcKtjWxKx9C2DmpKizGNopjoUaREy7CWE736"
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
