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
    "4YVjJSs2LciE2rv8FWJkGL8CXDhoZnqrEq19iiTzwp83vkSdpmDjfasU7CQuGZSYhUX3BNBKdGY1cLRiJ8bU6SyT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DJ5eNhEFFLbq88PMzihtBpsdYrfXACnnNE3v2V1tYP3p61keVtTGya5UPeqKGyK28jwNQNUuar1CLmDRvZD8PqD",
  "key1": "4aKR9LRZB1zBHbuMtD9vN5K1D2fwP8YVWwrSqY5L6ykX3TEhZL8xYQ2hyQBaGV2E6SNXXM1hE4PtV4WQLbQ3dLt6",
  "key2": "2DtdLvriioMgmd21VRKer2ASZM8ojqLga9zaJgqd6SXReZ444RRVB9RCjSmQmsGTZHc247wCXfnskrK934trjQX3",
  "key3": "5exoH6DwCefJSTJVEM2KvWjttvWVsWWXGBa4hAujZcwhmZPWHQK1d4W2e54g5w8rgHCvJebKk1iRxsG8iU8cWnRK",
  "key4": "5jTUmTedZopgH6hXkt7aWyiLbKKqKEYRTE8dJ9ehcwHcHmsENZvvWbsh8ks5gQWoRksFeo9egyfXW8Zz12Tdu16c",
  "key5": "4CdJ1vMkJDTWxQ8ujnwjNK73HGZw4rTJt7K3YJLQxEyadJtwVy2YX6SpLyuFsxiaxcqEEeUNZp6bKW1TF2QaF2BD",
  "key6": "4WhhvsCVksR7vZpp9ny3GVj4DC7QifgdaZ2B9wHhLtGgh1WfqGQAiEhbXRbntqPkh9tBGkEETiMHY1kHPFnLm3QW",
  "key7": "3QzE2iCFUqoCg6NvLyz3reveh858NTYeWsHqJMobb7H1Ud2TWWR6CGp7nHtfVJJVdj2ocwd3FFtM72jbBSgG2zEc",
  "key8": "9w9oiYVsJt8vagqPbNaPBm2xBUwzEG5CJjLNBXcbBzMpEDzmjqDYx63UN6jNVaqNHKzg6zMVY9juKbBr6yrPEKk",
  "key9": "2JXZfw2mzZVnCCYEYawUbPXYB95iTTpDckDkiXvJMbj18SH6MNEkbho2ynnH5i6tUv2veKU7SyABKKnJjdh2Bcpe",
  "key10": "3C6tbC1Xn5LWRzFn79peyUxghESSnGZHD1HeDnn7yzWueDPM65yUFMSXjkCJbqPQt9qfhAYTxNH4zqdJr6Q6T2SZ",
  "key11": "AXN9YCVC7rCPrSb2W7c4k6tSmLp47dKSomkHE1Hz5W4co5H5A3kjrDjMFKtm3L5DPoX72PbdhTwePRnLbFYx58S",
  "key12": "5YZ1fAD1i6A7Qmf3sVFoPjDAFhep8jMzQwwBRYw4gH1hq21xCmPCLuKvTiEqhWkNC7EYo1TNnSXcSoXmHBwhc8AK",
  "key13": "5TEY7D3FiZXf4WnLiHP8b6J7exSFVSbfjQVoACkYBpF3VkbYgXsuRVadpGdnDiq4jo43G5yVsE3NyHudquZocJfz",
  "key14": "3gmPeM1SUpTEmgbtZd5Hzt28PM6BXw6vqWUAGNgzPD7t9aZ5Sr73vbrgFRSfkwkKca2rBjsnMVdDjpfb713LfY68",
  "key15": "GeNzYmbtYNbXtemk8pYQELV87N8x3D5D947nRF9umEovKKpZgSXB975oX8W8yKe21MBzXLrCoPzhj9S1kvR8kcH",
  "key16": "496SfSRnwyX9wZuEvDNbWcZhMk2X976ZTUv3R5D8oGeNVxeJodxbJUdBw5eRZVsJwRuRin4HtBpGUu3bUoAh423e",
  "key17": "2eSB2kRQUZmnZHPsQJY3VSCwSzcsw3KzTajHmSbptKKCZ3k41iCUzGPs2kt97mjGaxSjKH5rSzkB8Zq7JmoaYGAN",
  "key18": "46XpbKsEgoDikKdKhNptQb29tArcutxNpDcMfyPaMhSLNKvTYD77mBwCTzo8T2VjBvUAdLXMdNEEMftB9keuvoT6",
  "key19": "3FrCUdjTPvFq3pqSdreMsyHeDi3AnjgXDXvm6Kdu1p2Yj7CRCprwiEz2whWvgHEt5nhoqXtjho59Q29zcNYjXfmq",
  "key20": "2JoteSV5onno1yTLXw59ooLKytiu5gBsZLP9HsoZtLW9CTpZVMMGMTNcWrTXdqAoDrNroPQKQjENiPWeFgEWnG1n",
  "key21": "2Es4CQcAukCHhdHSnJyWkgRvz8JbCo6g3C6ehLAqbiLgNkQiP7kXNYqxskH7PBtyXzqcqtNEebKqxGKgLJ7T2FAg",
  "key22": "2KfWhYkcKWE3s7TDJibm2W9pA8NAaFXG4Tu4uAuYWF8w4YanmAyAHrnUbXdvVURq1AdKScQ3fGFpKjKBt1jw49dn",
  "key23": "4iFw9NUBCgb3h4qTpsN5zC7D1osehnLkJeqRiS3MrCxtVwhqvPAjcHyG6en3RUz6hR5uzNVQzzJUaRnvBCnbhvn4",
  "key24": "5CdD1EFXjmrGBGtZAvDiDJqjwKdSG2MVGgW6xgqNcSdwGpDC7A9HXjra7bM8qj7E3QCr8BRh4TnUa917jrB7TtMR",
  "key25": "3b1MY29tSb7aVWznHnHZGJhwPpridProf5N6z8cpptgSJ5veQfCSHaNBdQHLVZftGqzaoTUYt5unhBSxRmQutUv4",
  "key26": "3nabsUSXrn7dsJyqBibF5eQ73y5sNz23WZhg1MqKym37McbQzhtwuQyJEYRsUzryp8rym2CnTrXs9kXKDDTkYyyD",
  "key27": "2MXoWuJvHuD3bXV4QhGpFgKmqjJ1zv9puo6Wc8BYgbwN9jWUgUtdvcC82mXTEkSeNLX2Xr2cfNi7drZiTNU2ZLdQ",
  "key28": "xq9b3nhCsPPriu5qXGvKFaYgjpbcioLuBdLyRhTi9Pj4vVyLbRz6aUmzibzxUcDzgWbQDehLQeyV8vJkQnaZtuD",
  "key29": "5rDbsxQ4NdrWJg77989kuNPHSjRWvLzyFDQ9f27U7gMV4stvQDqchRh4r4aESfjYutASKVgos4FnAsGMTdd8EUmH",
  "key30": "R3zFYuxETajKHVajJLjpgZ9YKGwx8v6QAaFvqRBfy34t7srrUkpLTCdwMpcdu3wDovDp2ZLyD4RWoBbGqdSWyoy",
  "key31": "4nAMX2gaPjtbPQsxNN86ujMvDsPXrHPcnTcnA4KtGTkZo65mivDgWiC6fPbUCz66Sw1qnxN9pYWSmzMg9mVw4yes"
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
