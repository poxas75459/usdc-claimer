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
    "2G2wLi9czqZ9oBd6NBicDMVo6i2JjHNYR9p7de6G3Prqo3kZTjnyrL23e3yWobZAEhJGsdNAoZKpTjfRSCzBwe2t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LyJRuhfjf9VoC5U8BTihkCehX3RmNjLHayPNPMqEjjRF1p38eNrCWtkowzQio2TMmUtPXD8zhPuNXmsqNw7QA6N",
  "key1": "3wDWVvXzxp9wXyZ3cje8HY9yeym6f1RzBq225mJNHQdbxe2vss4xqRWVUtWVGy4tJfcKS6gnceS6sXCXhHBcQGqG",
  "key2": "634MpG8Kawov5JsgxyP1mUPFWChRBsdfLYtFUDHLgC7zNyuPSvJXBh2w2g8tD3TSjHt5Qys6kHQJR6M6xg4qpuVc",
  "key3": "4n5xiZKcZfjn4pB7gGqEqhBr6qXfgbBE5zL8KYHEXRv1bQUwH4sh2aFiCWgEoksKRBtTAdYx2nztvs5qGBcPCygt",
  "key4": "2rzjj5PoRon7Hcw5L27zPt947NVu9Tg54MCXPJ6Qqwax8dzsQ7Vncazv51nvktKGTD83d8e6DvBj8EpMqXeVs4wq",
  "key5": "3yjhS49v5H3i6Beoi3dLrP84hoJw9NJD2gJ7j6oavEJJ8SyRKS9p9b7UxPVkJDR7zXw2hnUvt1uTCbW3w5HRvXfR",
  "key6": "5U1FfA9gxWrEkHwtqZGWGaDxw8bKCXtegwP4ZvEZVxLEdVQKmPmF8umcMMWMHE6EFjMKqpH5WC7ZYN3UoZfzJrzK",
  "key7": "3otaMY1mirLYytMqer9o2LCQn24NFyxc9PR9WJc8MCL7BtCzMxNqC8fnBxw6Yzt2sf9ayiKN59VfaBxh1Gw2T4cp",
  "key8": "2PBq2R2pqE6yRz7dZPLnc8kG2KsMqtaiJNVdQTC7NswqpDLwnfLRCMindBgYvGELVdu6pkesXCmf5NWzbi9JvJpS",
  "key9": "2UzcvfwoiRkAjRR61WzKcJaJgE3tZQmSeNndomCnHVDzVXjNQAjZxYYjsAQzrB7pTy94ni2jnZrdikbNtoXV4yXo",
  "key10": "33vdRB4TYZiipi7pBfpLrrwLS5Rdhv3tqHLcUXbPGx25RUdkE3JtNYkVF3e9dXDy62RTJuakPWPXzk397sTJwwec",
  "key11": "5attuccd7Ddq81ST3kyB7kFFUKTK3Jr3d92urqtzWHx9FouziPx7XJ5pcnLvd8UCtZDthXsw34yJKDbVbFFVQRgj",
  "key12": "27Xsy1PJy2T2eEfPhcAfJdti9YWnQ9WJkv1dWUPQrF7QXM2zM6CqBgvr6gytAcZXoQLcQ4Qef7JXdFphs9E6oz4o",
  "key13": "iKb7yppErdpRFDn5nv3HdFjwexMJXK6fjWeJYT5w819Fqt1PiVNWcZxYE79ScLJCuefEndGUj8rfN99jqP3Yxhb",
  "key14": "3rJmMhVw9oe2yUeLSp9w6zjxpw8BXqddQXta3u9ifzxe36dnG7Ln3JWQjNVkKXAjt5Bz3Fe2XvBmYdrR4d5eG9Zh",
  "key15": "3aMxGZc8eZQdJd3VVAT4tw2isTQAZfWP2qEeR6cx3XqWkxPtBn13jQLKrYCuzumuQADusemKe3DXxy94ZEZbyawH",
  "key16": "77vaydrga23rZqBEjxFVwrgg8dwP9Rwi4teozSthma6c82kHCXtS56eopfg6rATd152sqRVWtTTN4rntWaaEBuj",
  "key17": "4Tt6LDySkhkkxWhPmvzjCP7KkeaMEeuttCZir6uiQBeodJVBWPaoByTrw7jEycT3U55FvSxw63CL9J7gX4sE9XqB",
  "key18": "24AgPSQiuFin1PkAMYHfpsfZ31vt1xrx75EiCKneqeS8bd5drGaZuk3Zajvqrm9z9WQq4AztLYLTZQQfSep4w8ua",
  "key19": "gYknssXAV3n9DCKxhDHKUZ118qbmzA8tfQLC3E5kdc49zXGeebYVT3RCGpw2eo5imFb3HudrxpNrD5hp95GkhyV",
  "key20": "5Xn9eN6rhYyuwDXkNFzZ64Ep7DhVTWcmpXQAN6JvPtmN1Th5z3n6hQjUcXUeC8EbjyeBhFfYiVAJCkVeBHY8RXyE",
  "key21": "4A2bRivKD5Y2Jq6kMoRnwUjfrwGQiJ4DPW6bhtPq5GC8pUjMumphxtMB5XvYy9KiKjkNgn9J3Wp4UmhEbHZG9ofP",
  "key22": "3mKiYR4mMDveBrLr2jJtAjwjPRMj7otgR3TrZtXDzQHDVaVxzgVYGGJZdVZsPpZt4XmYxk3c4Nns33DL9MVFMjVL",
  "key23": "3o6KHfWACo4fDnGimmgkzhe7Mzwkaeo2e82GANGuyH5usz7PZa8Pz9wB7Y55h6nVvC1NAH9Dw2X9a83Y4sVCaeys",
  "key24": "6zhwnUoeKpefX8hCTMi3E8UWT4qNjZyHTC1QDpkiL4QjhYVUs2Z9UoxkF6WLaq325haHivA189KQfiJqwxkUu9m",
  "key25": "2Hew1cEYMZJkq9JAwonZ8sqYAr8wCwZ1ebFbv3TCLLJnG4mmepH7jwve2cRKXhCG9fweAE7Jw3nkPh2VeDLvH1gi",
  "key26": "3AZcjzgjuYXjX2FBbM418CN9BbgaLbGW6cFA1xaVms3PJRfwsCwDeFcDkV84dfNuoLBcR1v4RKomvpbWLYsuGgSM",
  "key27": "3h3221NiDHj3SCV4HSh5su76C1j5T5UaF2QVcHUN222nYQ677LVHLoVWVzf2m5DsbuidNZ1CUnouffQ3E3S3QSTW",
  "key28": "CNpP7J2WR3gcBW3mxQu34yiJJXr9Brnjsg2tY5nFirmj8K35zaV6fnVHRyd5AGDZs7PdjbtWNa4EqdZh6dp5P3h",
  "key29": "3K5NP6HRcuW6T8AyR8bub4Yh4jA19EaEP5rN62BGMPVwq7ZVgtPRWfdeNyX2sTrMBwELBHVUZGepA5FN2Vz2sRoF",
  "key30": "52T8cGwWRi8vZwjVtqH5P4gwCfNgW7Qweg1UshhVCmMUA1aL9ighfSddQe3HMPD3hGYmfNtTbu9chonDy7iFHPha",
  "key31": "48AE2zGoatUKtUJ5RezAuJ1gQyiP6KhzxJHfSXzEFiQTHmCRWCFVh5RwSKbsiqdcXaYby6GaqpKhz9LQWT7HHUX7"
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
