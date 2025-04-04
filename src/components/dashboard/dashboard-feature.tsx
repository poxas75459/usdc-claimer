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
    "aVSyLcFtkHvDmfchovVkwkSVLtqqoNecGHikcLNL4dt7amkT7BawwtrwG5LsfEwDpZf9m18VQkmUBKeCNWVFT9g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "589E3CArm7P5eoTe949x9NoVACvVqBH2GXGhhCX5eZFiDdL8EhyfPn1xjbDggMsFzhxQ6wMLKzqKAGYvcA1VHfMR",
  "key1": "5S9J6PWJPfVMZoBCWzzCDMqFrYvj5kTCqWWGDaHV43KKC1PeKF52FEmujFMUprra4poKZw2JvDMUZYP9kBNvscYL",
  "key2": "3KX56T1PvrMC1bKr9rwhDh5TybFH3Z77x2KuzJsTuFcMcVDtLL9ddj4CXUU7jz6h7rxcH953s2RB68xssLm699aF",
  "key3": "27fwvLiHag969DBB9NZB16PKPpqyfEXzp3NhuzeVgY2b87Nz26wXg3nuruJfqQx2G5xva44UETXDYnixcMd8b9nN",
  "key4": "2pxwd71PpCxgs2T9E3SfUvwV3wAwTGBJWgxqPyvoe82XjcBkr4oJBaedjKqNGbSRBsuMugF4JKB1aZkAgQU2TX28",
  "key5": "2UL5X8NaukS4jLQGRiG5CssAs2jpm54NXbiF9jx1TaFyNiXmn7t5JNo63piNW33JmUyzpVW6CKJeRdL3eg6tX3Wq",
  "key6": "2KsUw6e8hEiwvc89BvX9Yqwc3stYJVanLrpKp8q4mcv2HwdztMRfuBR2xMY3RuRQvFZRobztXXGqRM85NsSZ5NsY",
  "key7": "2NjUe54QkmUAgbeJSTxYGLvZLNNPbrdMM8baU1eGftpbaH7297MbnpGmAdXpwvY2wj5kZTzAXHS9sBgg2wEtRAGh",
  "key8": "5dovvTtE5CRFpCTBsxBni1Qo1ctnWv9tUnyotPFmmhfZYsqEropdkxgcC7qinzjmUbjwH3fmfUHpH4Fkm6r472AM",
  "key9": "3W3T1AWn251D2Lb2eK9b1Exaenz3dwW6wPFYwUkS9StjKex3KttvLVJvn2dYgAxnYVxC6K2LFL2bhuAmDjjNjqKa",
  "key10": "AqyE2tjPgcRFoxYGgaVonY3HkKjNeVa7eGqYKXbrB3W3woszMTHBSJWP3RCZWfp1BB6viZJ5HieyXK1nUzLAqEE",
  "key11": "41enUahvFAyj126irDdeWrbFxvwG2BbhDmUzWbjiJyPwVBRmf5zPcBbkWf6w4WP8rd5nHeN6gdrtPmqUgUVEoNua",
  "key12": "2ZjuJGQZnS6CM9Lskw9poXkKP9i1h4ApXAwerMVm2LKozuDCreXQJ6ppfRbjQadbc7cjPtsaNin5GYaJarY4iNBH",
  "key13": "ZCtu8TnTq29Y5spU35Y5iDiVyoK5DNspG8dCMf1e5FqMCwKThUiq3hjWDrtMRDb1sFq2F64apARx8CjhJxCtFbv",
  "key14": "2vHhWYdnpLkGuhZ4h3o3iwGX4MzJuBSiNp8YJdAJFG2CzXDfJa51rggqWiJfTUUT7JakagXPYYUGMTntrqnHQsjS",
  "key15": "EWwQuCnEXLDm6Xy69vqaxrw3pPXycxDXgTnxupzhBKKhDKZxDvroaZWRXrpMZaDgNkYJ96WkB8QACYTLDoRsa7j",
  "key16": "nWGKPvDJ3qFFcAzpsGRZp2rxDtWG7khz9yL1h77S2cvsQD8DnQKeXXuX2oPQmw6UKU7V4nNEbwUKQ79vx9AqCb7",
  "key17": "3Arsvg2wudn2BjwY2LeEs8wQe5NGkWUFTaUo9137A9Xn7fV5meufTqVcWRg9zHK4oGTYnLHW9VXn1kiKDrV2Em88",
  "key18": "5U5rMJ1S4AJ9wSs6znQ37XwiQCgJRyJMFBDYcUKA5MwHJ4TrCnRQXwHnRfmc45W3MBFPSJmMnDkQh7w8adW7xpB6",
  "key19": "62qXZAJCTNYwrrejeSZJcJ8PbZnTp87ALcaLx2Y3rPp9HfxrTZC1yKdABsYSpBVtZBWC6z5Kn1fFjpq1qxz6y1sx",
  "key20": "5E38FJw68m1sk4Sk5QPdDiMuTRb4DQLBiD5uJU3tuQwbfimxywUTGWL86CNqnXE2CCtYBv5Ae7BqDXMc9pdvYYrY",
  "key21": "v2Che8FqLGrbW1Wh2apBwL2jChsW6XUF9y4ru8eBLV4zS8RdjCHtNTJrb7vQKreTHgd2Wq4x7Le2QnQnKBvF8uk",
  "key22": "2Qp8QtC5cfGT3GwNu2TPpQBEzFju5d2pzQPBzqMxe2dgTUB1NDrGB3cdp1PxjBS8UpyCibeCMmLtGBVDvhjwv248",
  "key23": "4PXspyYgVbKCvbCCg1KJ3GtMkuKY2qn6as8XP1E4oxd1S2CdjKnZoHfr6DQkZVZwRMRuryYANXd7Tn2ufeS1yi4C",
  "key24": "2n95jqAkKN5d7nptUfi35jYxPDC6P8HCD5LXDm21FJXPNU2BTDAw9Sh5xTS8ej5fSXSxVB41gcDKL8Ncs1wpt5Ei"
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
