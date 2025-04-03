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
    "4FsrTszcQa2W7BSqWjA8aAH4up1A4KnPEmnGBduatQsshctdWtGicsRiB9oB1vUMiz7am8t5ZkZT6ZeLLpg4VeEp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hxZSvcCQvBYfsV24RDBekSSF2rbvTq91SCC5rPGpGg1VjyB1Rs9auSFtDoK5o6JA5Yeg7LpZyD88yMcRT69FsMf",
  "key1": "2Tk42UWPGAqYEVycHrvGt5gXSHdqX1zUv5VQFauNj2nQydX5Yqf6XgbuxfsVcbkGiNPkGvEDpq5SumPf18mSTmZU",
  "key2": "24g2qDVB1a62zGAtvpeDawssrCMmapjzMJQAURDmW7Ymnya9GZzY8c11uBEjpmfjCtxFSXvPgrdHFQUDHVG73p6d",
  "key3": "5fS7Jc8uzFmaVt4fmk1bSvXyiLbUVg5eJkmtcX2FVmF4WrhyuRBWNLw8yaESTV1Fk44x3RGyyM4nRtWPDgquixrK",
  "key4": "3meMtJ9ZsmpdQcQyaGyD5SHPTmG7Dxsux12rmhQbuzw3ZuQFJJeyvSJeHkDehMQhUY4ubuQZbZM5pGYjyABwrshN",
  "key5": "2LBVZUvjXah6gv3qnWVAEyruAQqjVTusgARDsgQVyDcPF69QSfuYJcQq8idwMeYWpxqmLfempGZhV4p7hiHrj3mg",
  "key6": "4nqyrFBRYjaw3Rqs6VtuPemvoR5R97hvcmJzXCyyVB2MPiZs515ZGRAkXBT6t4QXMPptoHCt3gtq3ZN5qs2t2RmK",
  "key7": "2QiEZtNioWUfCgMN6Mr2UCFkFFTiryutdUukauy5FkCTXzaMiiLEsS2PhusnYFabSLT4iiS9ZDfizFpEsifPzeva",
  "key8": "3Tia1anaLoV7nRoGGHm3V4asRUbtcFd35N6zkBgUn3Cpk3BdPbCzqxrnuxQF8JNQujJJdcKWcNUNr4LXaSK28nU8",
  "key9": "3J3MynCmUKZf3ES8y2KWCLH9y1fPy7TMPgPo9WwAN6LQBZWfiHRcD5Wc9fU8k4SFqf5Zqvv47DP4R2GKJvets3n7",
  "key10": "5PrcQwJ3Ub7UBhET3LqKgxc5Pk1HgGrEoHYEFNJ5rLtSEpVJgmMeicRLmVmBYgm18NrBaaZuCct2owv3qxanK7zx",
  "key11": "sxXbM8DPHJz2PmgaXhiCVohqwxPaxNL3nnhHnzGGXKPowrddK3p3z8mXePWDcWP5mQsAHiYaqUMPuw9dKRM2jS8",
  "key12": "2jqkdEErijfetfugoECnsgYJCUjFW3XxqKaw4e6F3odaJuMiZKBeVyW7uvVL98QpJJYcRv2gea4TwE19nwYp7rXW",
  "key13": "5op3pjyTFzp743dByXz2M2SZSnb2ngegYRTYDDDNqXojvcTkzyjCm3VBSw2hXsZL2SrvT5VfFKfbiUudk1MXfyf9",
  "key14": "63W232ULasCTWkpWmBqbtUs23HWHBjBSAJddL6P7fzo4kL1jmK2WAwYGUi61UYJGrWDDTtWNkzjK1PjBGHdxqwLw",
  "key15": "xAahNwtPM7WxurvMiruJZxQZYfcFtC3ySTPGS6YKVkEw2jBaqtnYRZmuQdBMHcjEvEqMqCcMW79vtKjMqkqrPxf",
  "key16": "4zMSohEtDLaWLFoiARfMrQmrj9LQ8X8yaFXqc2hwL8s3k97oiFpXJGU8HSnvRg9ewt7hCaBx4quHPt8QbqBdRPUA",
  "key17": "2ckk3VVxDoxZiHkj2KR6438LCwCQyr4iby1yaegHhA7g9BiCjARyb9CDFQLRiaLZp8iJAGtoyz4nyQkn5NZWJYfo",
  "key18": "3Tc4sVG5fKj5YRncXzZGL3K2KWSHKJ7WpGbCndSrtxujhnA4xzscroeQNAdwJ26zhEvD3rsKeLJRo1Udb7DJfe1x",
  "key19": "5PLsKh4mBNTj9eGUhaMrWY9p4cBBX811GaUyGMEUiuQy6funU65PLY4pH6AHLXnSfy6aTXyZRxTtdU4MwgMPPfPQ",
  "key20": "pnqc2MT8jQNaT8r159gSC7gTeTyUqTbm9QtesFmEDJzeMm5946ncBwVWbuVgLhSeHTvxPfKhPhMXVfc5DDkJWYV",
  "key21": "4nSXdMspNz88zZmpotLJ2fDA3246votEhuoMHB9uiRz2weefRV8sQxP8YcaeCkNAc7Hx8AJj6PdQT1kLkMCsfnv4",
  "key22": "4SDztAAh8Af9HuFG9RAmVZ9qBV88rKSm2M3WCorEXnLUaX3jfaUbaD5B4P9YFfDXLT5MH18v1nB1t1SAWLWvK4YM",
  "key23": "2vU1vXb3jYA66TtJoj35RyLmyPeTZbUZAJQn9Ko1TVfpzqUkW2LrLkvd35ZxL4aZ1Twz9ToGnUkBDpHUCKvsNVSw",
  "key24": "5KhgSWc9aMwKeiw5NN9eMbrwtDKH6XtufASkqxhpJ6bCbwH6VD2Y5PY6eerE3wrKtUUJcJUEYQZq4yqEkM2fve2Q",
  "key25": "58eTonmEY56QwJLtLnhqG3PgHABdqH9QP9vgi2M2ZQSai3nwihNu7RnDcrRqBRkNjEM7ZfDR6LsrrqHEzNSz22u9",
  "key26": "7oknFq9NDJuHNiXLUPSncnCCVviDUenn82BmJk7aPPeNJeaSfqkiT5ur7mroNSRVtEQMWdXXjgRVdHsj9LhVzqW"
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
