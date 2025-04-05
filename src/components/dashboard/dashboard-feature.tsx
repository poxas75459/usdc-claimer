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
    "4RUHcAaKNeCQQVuAaDeZEgDdc9cFDh2xgd24EhSVhht4YsF9jRtnwrqw7uT8g95CuijFSVoVXYzRsQvYxNQHPAWM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KPRJMSzXT9kRix1BqLgB742qsKhp59VRFbpsPvQ546LpEd9r5Q3C546XWXGun61ZPtPWMPFR3QFzz4Z6VdsnV8Z",
  "key1": "2v5PqrvLwhFzbE1HkZJ24tDq4FGUCNyf9vUsxdo2mqDjY7ZZ7b5mfYh9MVWknC1hpDEoEXwjuRFhxzJbzEfaaHdS",
  "key2": "2MdSmot7uvTWgo6U5NK51t2eLPVwKo2tTeCnzWvtfPocSk2JfJha7WyGKFA3mFVaAUD8urtf1sgLkhPJAf3bsUqg",
  "key3": "XqeUwXzZ2DGFoLagqdGkD35DeybiEAx5xjnz8kWqxR5Uw4c7ztj49M9dTw6ig5Hph4q3geZvSS4cXaGbCYZpKfV",
  "key4": "4V8YQ7ncMYgFggD7D9bGPj5PHxG1dzE7bnc7DXgffCsqDNbbJdZHqajHd6HGyDyeGkarQqZeMyGXbyFm6RdWCDBz",
  "key5": "5yWwoi9TFHGkDBynhdpvA5qLicFLbaeygfFkk3fDtdYX9rbSZjXw8zGnXzBtYmVxiecEvQgKwKxbKzepehTDjiyB",
  "key6": "3Dwh6g9uLrCvKtte8q4agGFY42KhCcaWVE6bn69PxH9HxYp7FqsQ3rVCpFFGxKm4PrciUdiMtmXMmchgv53nidPw",
  "key7": "4MwSbUk48cH5C6Qj7ZW2wQptL4ZNQxCahQbMurM9Cnc5dgwSDaRzGzftYECC1UtmTYRgjQdy8cqDwoSXeimeSj27",
  "key8": "499pJQJjYwGjzLiLQ9Ug7spFvC6mjqrwsHmPw82pSLMC2XQNbyBqQr1c83RHv1Sqe96U7SCF11HDJBsYE166b84C",
  "key9": "35ogUmEDwmqM8tUzGF3Mh54HcJyFQZCJiZS8fhYea767mV3NhQzkaX72DT79fvLzaZbxCUhSJeuMwwWVPLbZYB1q",
  "key10": "3EgJgiPaPkwpUzNGgFGux7MoJ9tMmzv4NReQVyqf8zsYBjHWLTwWPoiyrBap1rjYU9ndi61dqaeg3pm1DqYBNEPw",
  "key11": "5uuiUTR5g44oTGAUZFiBGFb2r1XSJGVAgjPXzwtbbAAzS82jfZq1YyS7spMrjNSwGhMyFsa1H4UXskBVB8V6UDfH",
  "key12": "63yBRm8J3TFhmX28PWvKFK6Btg4tfo2oyi2vvwsbNpZCn5k5H9R87trZekFmNjf5yVa2DPn5Kwr5iL1khThyKGwe",
  "key13": "vzQv5jaqRHmgsEBTVnorzrQfN56msdLes7BR8VG4woHeCK1apnmk8diQnRqFq9moqTw2EyNKrW5s69wQAN7MJ1s",
  "key14": "34UWgcqPGuqnrQC62hW3Rjs8Utdc6KRb4y1u5EJ5Zy1SVVn9fbrwp4Vdo8864y8A52ncnGGkS3GvqXWQVPXWzH1d",
  "key15": "45Ft1e7eYs1VWHVvU9ydqKWZE5YBexDR7Zc3FpnhpHe4DWG1VStT8WLoSmxAmAg5cnADHVnHTDWK8tJuoxUndFJf",
  "key16": "3H6oEwyH8NRmQjomwqQ9nDXeeydTriqTz4zfruwFRkEUhBeg8upT6JHkQ2ze4rg7gWPvEbEmznerJyEiWgtye84d",
  "key17": "1mpKQ8jffbV8EbbadJv7L39QmzDz28syEdz2LaeZA4ZbzH3tMCJWT92BJu4jBXeKGhj6PKnRB8ViB7huSpYmK9w",
  "key18": "5ePrYG33rN8JSiX8VvEhumbxGmfFBeikZmFEzzTqLiXLcrqw9xqyJp2MC1YGsxUowqcWwfiVJ88FNz4CcfogysNA",
  "key19": "2UTDLgxW4HPeB9b4sX7vKSKPSDRTFt3cPB1ksL9TFYWUsqtTQL219wCBgzeTLgmf1af8qcCkmcyytvdyk4cUqESs",
  "key20": "5BHeKqhik8fUkNADibzRFWaYrBWLKg7J2DqatKzb5P4sEfarvZsDPK5rQhZBCE28t8WJF7qx146EEsjdfeuRwWz6",
  "key21": "5DVmJcmjFNLoqknwaV55sXvLhHt9WC2ee86Bsy82jVkJkzM97WP14JEt3T3fK9hGAWZ4SFAL8sAGaUqyqpPUn5Js",
  "key22": "v1H59XyYZHPa1RwbhnMavLMkjWYM6F1jrYTwk2P3oEzxT6Ds5Uv9t8bwgv3Ghezdw4Fbu71yuGszehMHwfCTcNa",
  "key23": "3SzzauEeCQ9dzP15AZwhNt1Y2xHR4bsvRGL34QMdYdo9P3CpGV5bLRvqG4cy21eYffLtKT9dEBDnb8TkiCkoYCk1",
  "key24": "2xSq4j7GeBWNX4r4dAZmoLWGyjU2cNX5TfgAvCnRjxqR4kfZiBQJtLQZCrVESSdTjqZu3aisVvHvqU5HWyiR5M5Z",
  "key25": "39CGQufrWZvyV4ZwiPpJuEUEJdBd9umCgKdQyPix3KgAwh1ngHTAAhz9DnQf7JYnVotwFr2DLACxjTe2PJBa8eJm",
  "key26": "2EwfiuaY52nnBwwVuqWRYFTMRQxYjhTwa1qAt9LWgfxER5yXmc8T6HsLYfcmJBAVwcgB6YijL6xJzLn84DuAUFfy",
  "key27": "5MJuXGAH1HArqADbG8FeA6azf7GjtZ1xLy8zTr6VatfBpk75AT9LFJjiRNnHK9zW79yCtPGEHHJHdNLHThVtpjQ7",
  "key28": "NA923khFC98XwGYJpUvPcQ91s2AxEQjNeHVLU4o6sDcJnYWoPq5ijs6uuBk7RAFzNp2puBGvMn5HBSQWS4C5xYS",
  "key29": "XJfLXHudhpvFF39tfAGyPCbzfQTr3B1SzL5ebTsSvTkgr4v9awvJttx8cnreEToiaSsFfHXZMFTNzjspujnvQBF",
  "key30": "LgbaU25CK3BUa7edquPVTZr5KDBgA9NyzVnsp8DENTMwYpVgtFDcNgPy1Xx1MQFxbPqPzudPUDgAB5476bwgdLd",
  "key31": "edms6JbRs82vTBhhUBq2GwbzfZi1Av8Gn1d8QTip2FVonenY3B7h5qEau4uTReN23EMWkUv9YEokKwH31r8Bopr"
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
