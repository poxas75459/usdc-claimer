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
    "pHJKC9va9KXmUKoWuM9649aKUsZmZK5hPVv1oYaJ7nZNQibeGBLnT5N394VaAYEuvFCH9SsnyNTmQrM6AGvfpjm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4St7kym5eJfdzQp3QaBhp8EXozZ8zaTtHCFidUAxe1dntDVjhdVX5tma7ZBdP1sXZa4sHSW5q8Yip9UW6XfebY2Z",
  "key1": "5GrwwrqwFtTnWnQrCJGEz2Q66DAaRAB55mqtHAiUgB98DNHg5h4ZCSd86pL8SEn1aj1u5DcTmcQ4NH3TUGpygjec",
  "key2": "sQvKc83M19QuBjZDeexbtKYdXmHPWxnaZdhDeWXdCpB4XwAxehmFSkoSUi9ocFyWabckUugVnugWUDpaXrr4f75",
  "key3": "39ypVHrepEjziE1yNcboyHkWi5kAbBZah4t6BU7cSuMox9xRFKHKECRwYw9WAdxZALXQGfLv8XvuSW69pFL9Hc9h",
  "key4": "ymy1SMD8z3N49HxRqpXQs1YwePRxyoQYyaMPGSGn8heGXJs6cKdJAxxD18yHLkEggNAK9z1r3iDWNaztbkgb1uC",
  "key5": "28yDfWnZJ95QMQDVd5yjbQBsmZkbHPhuZbAMfVFa2CGGqwbcua8g3znJLcFn3t8bbv9myQUcUd69F9dB4aA1Q1kC",
  "key6": "wyfghN82cJp5ho6VbLk4sJaps7oHGvRggCG2kqBefHQhLaGXUExTw23xtktt6i2sMmVVr8p1WA15Ynh1ysJpY3C",
  "key7": "2gq8G5QQ7FY2dqViTbHeFFpQcfKLA85DAjdLcBupo3zp9ZwwHuCw87k61svQPyawexT7NUa9mNt6EZAaWnqjGEEX",
  "key8": "4a1DDn1iu7kKfog2Ug1ttiGnjSSswRtPdPCBzU18dsHhjvh6MrUrN5okCDftCeA4onbeNNwYJ5yoQa94DaMEKokC",
  "key9": "2yUZvN8UanjBwcyWG3N4CHC7bydTkTw4MaijbBCKu1xeEkcHgfLJXk5ZsUsbff64VLFqk3Q5u1YM4Kv8JYzxwpDR",
  "key10": "3dq7GdwjzUcg9MbACCqto6hpawtyVzP4qPdNTrAS3YoBPppq1RqD7bAhsJDrctQHQWaYVpBsnbJNwer25kqegGuR",
  "key11": "wehEfCP2actxnbGzw1yGRHx3hRAwUX8ehjZbGfW3ggGs7QXX3FrU6x59qGAG9ecitgP3uhB4DSbo9Z5FRkfpXSs",
  "key12": "3SrqieWGWVxvEhzEFQvFBReToC63YdfqHkskTAz4bRe3YWG5C2WJWTJ68zE4cnYeChxyEJFqLkJgEztEuAYSr6nn",
  "key13": "3XHUxgydvibiVVeUGGPWi3VisQuTEfTaos7bUnqfjYvJFR7D8bk9xVk16Ae6VRSsgNQeNLiWiChqAT6KeRwpR563",
  "key14": "4tgGZbuvms4bW6m1L5Thk74tKAoAbjVMLN6pMZCwhUTVFmSz2Az7xa3DGDvwnP27ZqYSoR6BCVbpcnedtTyqJqAC",
  "key15": "3Y3pCveSeKtcJRShco2YBvUy6y1xRDv2cPp6PKcUwHXTi7xXwm6JaS3WqrKjqfXLRRtzp2YkctatppW9HhS7X63W",
  "key16": "293suNLiynZAYCjMiVMqq6CGfjWcrnaVApAAZrxcUfnp6ZasXjw3kHcJMeTAmGoyo8C1jXErZxrcj3e54ji98KMN",
  "key17": "pk2mJnNkQti3BJqdQSWBWKSxWrnR2Lkfp13Xqu5AzobQknJqF1SSwKep6s119vohfQGLnYuQbDdWSHhK4T5gV81",
  "key18": "4w8U7sdH4mZGe5LpRh1wNdGxn4cTL1VFkyaERiV8HZFAyzrBnnfLrDi3qrmSyWMcLBTWvxduaRUsQDanySicE1RJ",
  "key19": "5FEzKyLLj8msHQU7PGeoVG4aFugLAwG4imGHSyJwnvusv3iZS7pvV1BoQ3p7w8cKmdBeEwR7oj6rrDQL363BqFpu",
  "key20": "4JeqEKh6HWzWd7N7GhbaXFqnXWmnBctKhrC7PmeHnzRgvsXGBzwqKCggFWMVUTNZQ6PGy1K1UTNTjEiVopCeH2i",
  "key21": "2g2QWqbV7dP2gaSr45LpcMHYNmUZzA91EDtGjkKKHPRAVAeFRBr7NuocYDripFxUGDt5w6KfhSduHn56jG66FJ9j",
  "key22": "5P4XNJo9rkgMNSF8trDnsbQoQDE3YcTfH9DvvdoRUmmEa1ZJWcjdY5ajVAGiwya1xYbxeA4ZP4KnUQpWqr66zVzh",
  "key23": "3Mz4kKfARA4yCV6BjeERFPA2QcmURPtaLSak1uCxAmtSqakskcCxX9B2w1SXY4NoJZv2WWY92m1tFZJKjnoZrM2q",
  "key24": "uND9tPAeuUaHcC9tHejWbjqJWpL4moZmgbXEq4PGo6k3wSBBQACupQXmHq5Nw1pxtSUSewfmVzvR3ZXeVWcGNZZ",
  "key25": "YAyWHYiVZU4AgC7UK5oBn6vLDUwjHX6PWx2CCQ67bKn2trRgqrEtWxxNCa2wRUEZvTvV7HRz81gKvrdBiAqrtxs",
  "key26": "2Bwftptd8bRVmCyq7sHxotxdKnbjfK6Lyp9XqmF21BDNWoDWjkcbTnws65ZcHSzsTziRrqWNCoTXJBifMzNXdjnz",
  "key27": "49xfejTP5ECtK43gEvTXKRfJp3Je7E4BJJ8foxZMCEky7YKNryMTRNRWJTDSMAak1M4LRzqGyAwApieKHGiFkrC2",
  "key28": "4wCGiQtnwTDAcLDnHp3otpogZJFG7qTkouABsZJ4aQaVZAEFLYUHQk29pvTEXZqpXmxigmStUcCNPViHs7ueZ3wn",
  "key29": "3ykn1Zox5L1kgskZecNf8P36zG9ZDrFjRAsN2XLa5pGxa5bP2RABHcQPbyd98Z5gbszrNKkxfWaZZDRuxm3jM7pw",
  "key30": "5iut9ktCxBZJFaAsDvF6ntbPvHNLa5xnFJGasTZsMKiTzaiqi8v4qs7TjJEmWuw12Wj5tJ1ZZa2dE68eTXjw5Xx6",
  "key31": "eC4mGKdn3dRpvFwVhwnCAptTdLDHUxLw3WFdrGjXJ269jtn76iEq8NyZwJUxPS87j39JeV8uHwnjbWxNWFDwuMT",
  "key32": "2anHtPFqKL2Mz5PeG9aHdB5NKKmX3fQGmmP3E9WjryDfuTTkLWe9MqzZ8q2fFmtpupptRxZDKeXPXiR2gS97W3on"
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
