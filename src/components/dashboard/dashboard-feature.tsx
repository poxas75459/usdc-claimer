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
    "4m7bzPV2jdiizdfaWJ1TnkRTaDYMhC65c2VeHvJVq5niCTUS3Z6w4Tq1vgP8UdttRirjB4bAjWiU1ZpNH7WkvVvf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PAAsDUVEe2E2fim7H7HyQ2Zw8WSW7vB19vFFZENTxkG14nU6pBUzTZe3xQmVPDdpC48gzsybSthbgBXo1Vh1B4M",
  "key1": "4gzJaeYSB4cieMXdqxr5wPETyw37RGaMk6boL5AFKXvyLF3kiawJUkbqSm6LzzwqQ5VsoQcr9eeFonBtnLZRSqw5",
  "key2": "2PQL93h4io1YpuZfH8k2xQw7W6TeHL47xLJBCWBX7wrkXKaXD52Kmbpxkx4iU666shMdwKNcFHHjFX7rVwPjhXd6",
  "key3": "uQynhbuyiqHZJxoFrJmmhoEH8igYtaCeLaRomMm9ai1V3TpBssvYwXpsmQ6XzmK4rbCzRU7xbS3ZM98T1c9bGJi",
  "key4": "yZptcQNo3YrP7JwAT4Xq5ePU7MRgAWd5bSEqoKs78Q6jgY9UuikFE2R5tfsvtd7ExYmYXPL2mdRGtQnLLN7VK83",
  "key5": "5skNvEN1zEe9B1Zp1ogJCyvLdhFPChZYPt7LXXEmMCskcXh9z4bdH6d22Tv48HYvB6DAhcdyn1DRcuLfuJpQ23sa",
  "key6": "5BG95zSWXTSEyMyr2MbkrGFKx7vEGjTCGoQgtEE9ZWJ6cxsnT8AMfhxuzUWhTaizeH3XbYHFmZLN8cxVNbh1Nru7",
  "key7": "5GjuERASPrJzQeac6M2rdQYuL6kTQbnXDfDEHZ9k4oqmxBjHgmLZejtfDZab45HU8bqQxAXEgB32DnaneswEo3HY",
  "key8": "4xoRRyLs63gVcvYCqhcKzisF257w7iBtQJPqHi8DZNo7YfWo2HmFSTfkuKFtCzc4QA6d8RLaJpSnHCfLdehhg4TB",
  "key9": "5WcCf3sCtA5QAoeqa2KbJ5FyYJBkoAsJLPycLJgkAWxSowpzapefz6tLQGyhqhzGnbWYv8rka9cST3w2AfVjDkJu",
  "key10": "VJV6haCQyPfugucmcY54V8UJTTjZgxCFLFcK89feuGh5fXjkonhYHPewsZkirvppwawZB1oHh8WmMcBuijipLLW",
  "key11": "52bS8mF3m7vm4UjcjRNcSqU8FZXBucmmSUE1cYCWPK5cUZEo4d3qSkesHEpp5DFNLjwzMTuWtLWL6xrght8js3fY",
  "key12": "2rrrsL6M2aAb6ULxhwDdV4zqsrxgQhG1RnY6fjGxuKRQUwnrYW39hqhb7z5CwwkKNKWPkiDzdKUn6UtwZvjn7vpt",
  "key13": "5g7xUGxSS2aSJTi6dVkzCAHJHt4ZEqFQU4m9KYegN9MauuzvVJ1nGNv1G4wefZiNF52TQXcz41JUmAqNgH2kJWGc",
  "key14": "5jzgifjMZDitexWX58joUMrH8FajvUSJbvWw3AnMz1ZSnW2w9m6JePF2u9zJfWqh4ud3tr8XR1rzSXeTq9gsB9xX",
  "key15": "5QWdcPTo8A76qBoawTftRVjeNhvW2VpZBtttRE1zUyWngXEro6rSU1x2scjNxcQp4rfspgofGYCB3HWR4LHPRrS1",
  "key16": "5HuSfMtnR8JwShhiFAebV7eBBK3X7SEn5r9dt8hBsXaqczBxtFU8m3g46N9ydkdYy6EMBfUUtvmmqCq9rNU9AJnL",
  "key17": "7aDJovMXfcjTa4yqHyaJ2d7Wf7xnHrFvhPNrDk8sf1TSqviEB8QA5R515XpEvST8dbtU6ARkddY4oEeARUDEeyi",
  "key18": "6WhXTdLW3SqLE1T5tbtU7zvNQVNSKTYY5Mqk9SfsHdfca1pN4Tw4opQAe3qwBYVs4rartMQ5PkjJtGf3UwpyPbb",
  "key19": "34w4izgXqx5RhQhPRVG1YUCZmvzG8WVN71bVjoS7YmuUZjB7dfkPFZrLaoe7jLbTpmonymwNatd7PPT3PLzfcasY",
  "key20": "4MFtQ8QMaGkTY8e3XXqbfnGUKst54KyMqcbPEVcy1P8wgWwWyu9sqz666paQGFQZZRVWZpZPZQNB27PKhqfsWmuk",
  "key21": "3jbcB4u6tEsUgApAj57bLDzF2aSUym78PJ1utDns3E6KFxUu6rUbxU4sEiKPchYRxminfNy9nW1FGp3Qy3qHXV6M",
  "key22": "4RGpzGtqqL5YeEXG5n1bnDEC9rDZVxGEmLT8MMPaLqrdWs5RUVQurrMRYt2MDfRsy98PHNtez3NSNjXABVUp4bmR",
  "key23": "s8ZEJyFRdqattBd6yjGgGRJJfUEFCdDZ4tTLA4CpB4biX5Av9fQbyq1XAwPT3cSaRJtSXyV5x3GZBSLJjNJBeo3",
  "key24": "3ArHUApiARAQ4fAohtijXd25PReEGMJZodzbqVuckyBpbhprT3iEJEZ7KXGHDsm3mZri5EKkqqEL8tYWdwaM8CMW",
  "key25": "52K482szwJDsK2xKVAZkeH7sou7Ap6keBji5uXMPvwpdVFizKLjjTymw3GTFGtHx4N7Bnnayb4C14iyUpS4bVxg2",
  "key26": "2NGmwxdT2iqCXDZMMuKXmRKFFUL8GKeNJfLdXsskXGTHP8wN5651LPEzodWCkQxJkQmVXXCmVbBi1DCx1zr3PaCu",
  "key27": "2ViSuZg9eLSauN1Y1XpSuuq4CsDTbR432VLBiGeQrmuvKyBVCC22F6XF7zcg6f5sC4FAZcAaMpPU6fmoriEkkRyP"
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
