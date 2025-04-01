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
    "3KsuF7ZrQXoedvGrViTyJLyoJKWgdWzRnNzPJUnHbsV8xkmvyBjpUSQct1521n7RHCGhs7yvSDFn69BX8X8dzAU9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2w9HDZJo2BFmocr57gsniBh5EaHeY3Lytd7uGh2p83ZA775WepvtGRtGoYrvnSK7ZmjGMLUT29aMYfnJtSHuNEoZ",
  "key1": "5au23UEjBJmjfaANX4MwLtewSGyG7gxnSKR1FkDmZu1Fhw2FH9Ch7w4WycRPvNKV8NoPfQfKqrxGCXBxqT1qJWAU",
  "key2": "5Qr8ETwVw2pq277PmYs4J916byyAGpyBeje6TTJbjdQBEANUhyCfRuyBnuJHhDfLVXxmpctx3G2WUBM2p1GERgJt",
  "key3": "YNMB6y9DXyKz6kkZeCkof9g7xkkdsT8gNafzzyL1p59WnpkzWCYn9DAybh4jrzgYNnGGpcNDBaQQa76MWPfECyS",
  "key4": "4n78e7RLgUbonv1B3Zac1PugczgeLttRBRuLpJY9pjQWhB5ea3RzrUidPbNCffy9ac3QJmPvUmorzueCvD8kqijY",
  "key5": "U2LdaeJ9T3y4hzmRBCYqHv9qvE5p9BtqJHLMCPCXRoE7hzMJizYSN6UgXGXvAzxogoAxexXkFBe4fVZtDxBkDag",
  "key6": "aNkHsCLpjndy3e59TUXpnFY4V8AVPfPxuS2x3LbHsHUimXUoFFeReTjwG44brPAJiXTa3HSUw4WjgEeQRWyyrwS",
  "key7": "2DR2HAPqvh9Ccc9XwWM8kH411c7GbBerT5Jy5kuUZuCTCpEWHZ1zzNDhPtp48e69uEjw6iXxwGcjVRLK7BXFgSKP",
  "key8": "24xAHBj6fU6fEeA2qCzU4riVEyCKqTDzfPw6eWXKe89HrYGxGvTWbpcbMYD5LQYQvwCuXfFfLgD36bruLc9jb7Xf",
  "key9": "3kLGU2F1QzwDs62YMa2W8Sei2rtsxxNuXSjvc8UeKo5dxjBEuHFJbLwiYVp49G2weEAuNsKdDpc9djPMHLDneZKS",
  "key10": "2R66cS7qyeBwnwcJM66rnK7R5Qzqu6u3CTZcKHWnuGForf8XobQ5RZp5YbrdYjKq9agHbhfyF11XfVd2q66SYkFT",
  "key11": "525boGfkQucjV7r11Sq4kzCbF9sceiWxkzxWLu1ZZadZxeWMs4hJAS8tsv1kydkj6MXcRqLUzieYHdve9jx2yE6K",
  "key12": "BZeFSNTXVwWjZZ46GnhLxB3jt4v588So4RTVwP5qQggp2e2puebRvNuvj1zRgfaRqLzrwDe5unmTY3yxwP5zN1p",
  "key13": "3hDizTR4KLkCXrUdvKXYE1cxqURmD9i5jpiEvA2KZLn4zf1xbGstfb5PfpHVLNtqjozWwqgKgJRbMtHkV1YjdNyx",
  "key14": "5mcc7VE657s1xHokcTsMGaA2B1ZhANaH4DmHQmWxYpbw7L3TcSigKet6e7jHrQBdbBPbYGauxoVmTSfnh4oCvHWK",
  "key15": "4QpWYdvn8m5b9kgKhDbpq3Qt73rprr6oqGxBwwtmN8386PvSp3uYjqcK4SWuX1hPNY35jvFJaNoEEJwnccVdGkib",
  "key16": "5HiMmYH4zmuf9bnfBFtDjUCWVcZFnmi2DRNWrqisnv2wJJCyaWbGujxctoGvQMJch8i6h4X2zaCuMekEpGjrankT",
  "key17": "47SGT5C9hKth5WG4HuWSjhJrfHo16CuVof9F8j1tCNsRyKC92kzzCHejHwcHQ5EHrToSJ2aZHUyrJKQnWghWLFb6",
  "key18": "3sKjP9ZQ4aMCk2PVxMxvqKC1Mofyksw1UHiQF3HGfhXw5vhRvWXPYoDuKwkq5aJxAMcryDtTsEbfT4yRoZcKayZX",
  "key19": "2TVcTXaFtFxgsjufYw5Z9Kbhg2PQWNrMhMpoiWzs9im6vp8SkXWJ96XJhjmpMQf2i2VDknxN32t9LiAdkXH4sEeL",
  "key20": "4YAqdBmU2UiAjVGua7r7CYLEaFt8EnedFdSjoJ7dYAHtxjwpWoiVCeXTZqFVWQD9tJqrdzZ92zLsAHDJJS1Z6PHh",
  "key21": "37T1kby5cnre8hBvCT7o9T6QD6hrGwKZNaCfwK5L7g1zhDPaRsVuxPheWX5ztrXfnhKK7v5SWS6fbr4GPu7Uyhdf",
  "key22": "4euiJ5aXPNiVNHQ4YeEwLUGg7pQefegZWXK5CWM6REUP6UL2Go3HoWajMdEA7jxi2ovqBTc6z2vtFQXvqrtxLpKZ",
  "key23": "55KUxyAWdRuCB3REmDmzs915X3Aron3FuA4ZJEpwWL1dsGqj78vkRtZq43mJ3WUVMLj87wtdR1fBFbfvz7URQrTL",
  "key24": "4WgRv7ZUyF4khnp3tWQ7FQETZMoZSyMHgU8FcLC8mC9DLwaeeM3uWMmnVXGwLPF812RmjKFcwHjcVemoHBZvFH6",
  "key25": "2uQJchAEeSndzS3Tae4ahp9LFZkUNnfk5w2m7o1GHTyJkd7H441J8s95dBaxEU41tuZmC8FRvLxsFEKhGP9joy4t",
  "key26": "5Te4eA6X73DrtHCEFcteTw8MQoqRDpX7fbH2rdnrDvQz2SKznLerQARTVguceaiu4qeUeMebCFaRQ7SMr7eV6hgv",
  "key27": "53DN1JBhw5DQXLGV4XGiC1JtXZNyiUS1wX7PyHctsLCEAxHjhiFeQS5puZyCFubcrAUcHFGcxFY5GRTQ6GiSc9fD",
  "key28": "3HYZCyWwuG6AWtnvtn76eWTSwLzLSCo3Z9pCX7MeNa4prTkv4UcsTjbKBFAaN82aq94BKoMofAfXshsq8CbLjDbk"
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
