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
    "2PzpgbJucKKFKit3X6UK4gThwtiKRcwjQY2vwqDyc1Z8VMRACC94Gw28xYsznW6sn5TvhUZThaw1aoBiW41oZb2Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3s8H3epwqzTuw8QEWzPShvV63EwPd1fh7GR6bRcy5Bjj7696Z5Ys1qGoPvX9D6rbSkwyhF8UZEeevmB17ZRYBfX4",
  "key1": "B4nT7S1Peg5dVDgTYwoNAJfJJKD1G2FAK6dLDYbg6jxB66HN7xwBJttESS4wyfWDpRZ7nonGrR1bdMmNcioPh2M",
  "key2": "2AAYkfs7rsmuouH9JLt2gqPmr6QkekaV2oR7gGMGMDSWpfnouvUKhLAfAH5Sg1xBBrehcwEZLvGmhMQgWRiDF3hf",
  "key3": "5SWh3UQMmHoKJyeFs1gAjwRraZehY28SGgQzr4fxNnYR1LTbwvPv4WzTeknjf4TzwenKfQnKpDMrDmFvU9pJJXz3",
  "key4": "En3GoK8J8ws5PTPrNqMqfwQAYRrCw9npLBQMTcbVdhwbEn7amwRDpNjK4FJZLze7i7AEjqJgVytMv4QRGHqtiq2",
  "key5": "3cZp9CFVEX7u3UALxNA4nxaanCJjQeZyNyPJSwY9KN3dntBBTSpouQGE4oc3QDLyyFbbdTKDzW68RmjCnzxtE1i6",
  "key6": "nXuqHbgqFsbqKshtdM9tCFEmYqu3jbVKqGoxFMUVFkFRRjxdX79d6v6BPcFrz452SBtftGZWyEHrDy1C6VkVu6U",
  "key7": "64WJCfLMDUyZCzdLMBAnNbD5NESkfbGL9af2JHvExF5Hjzh5CDnDeabtSzchuVf3eXgKkYXrk6WzXAKT7A45VFZf",
  "key8": "5Cq6Rjz7ZUAMufrYNPJHqDJxhpMXPoqU2nqz2tDCTgbawbhEFELoxkTamMngPDGuUeWw62CKLf5EJAM3q4V9qRFT",
  "key9": "3mfSPyuwYwTLEmk7rAKKqZ4ESUMGMMd9MzS2x6x6MHFK1MexJH6hAsx7nbELZv6cHw2VWBi5qbMdadW8QjyBtgy9",
  "key10": "2fHTMjaQUjJ8DEsAUdZyC4y6h1ggD1omz2SgeP96UWqRP3CkmybfycR3zoVQWBhjSUrfkFJ7osL5HW3wzECht7R",
  "key11": "3mY7WRnXcp1BqXAvLF5vu3LTpFNzwbZ3bXSzFqA6u9foT7vfvqsRCVADmgPC1UDEnj8A11AxAEEgGF4yUNxmis8o",
  "key12": "oqXFuVtKTmyWUmmYTmwd8NkkzeaXQousyxMQEepXAUjiR9gpphnEQvdi4GuX6LTBFxvjQMTvZ1QdAqmC9u5vxb9",
  "key13": "3ryrk737x6DqMDSxj3RNjga3kBdkUZDpZH26NnghY9nzJC1nyakuQpkoox1bi8Q7GuoUFgE5gWCxVrim1Wz6doMB",
  "key14": "36Z7tE3ee5PZJQ8sNVSsmck8F1cWuSRRbNUKSnQv2FNWucLPAyR91pqf1ftUAv5uSy5MiSQcdb1pfUYWhZRCHDpJ",
  "key15": "3ZqaJAR2yccmaPj1A7jgytVJ8kVL7JeUCSY4rw7WzuGajGWsYL3SvwN4FENxwt9pA1Tm57mF8AZAY5p55Q91hCnS",
  "key16": "iWqmpNRfDUo4rDPKuT9WAuDivuYSnVFubkXKk76VEdDgNFtr5W3X2Xf45XVuTR2fcTVhLgQfzBg7AD5FiXKUfPJ",
  "key17": "2H8RBXNjX8YjESmhjeaFn6yxoxF7FQUBv8mRxRHDeyn6NYMod2Cz7WbRaw1dwwkxo2oLrBVBVuuQRZkPXBw7czEU",
  "key18": "2dotSRkRouRsbghwMgUSeEzdPEcA3aNpfsmpnuTpiJxQqKFFw2oKnBJ6W7WdrQkK9Fk1JC9itqp62cojgkYkkBDC",
  "key19": "4D8FXgKJV8ngBPMbMaftNHRkagBeD5eDrbAGdoE4hREycejKKULFHotLMqH2syFgm6S8UFjcop5F3Mabq1HJU3Vi",
  "key20": "2ib8r9WxbKwbyN4djdZcH8QUy9WkKosZS5bFYjoribWebCEJPgYo3Tj8VmPwrAvbqc27db9hnYRzYZ9iGth4ZepR",
  "key21": "26n2j8czHuhoFShxqutCBZpudyBw91TZYFSu5jQamENty5Z4EXtXjT3uKTRNGGB7CJZw6MaxLBrmi2JQQjJVxLmT",
  "key22": "PexypyKDer5R3vjJfZanYqSmU6LFjeHNAe3LfwfUGEk6bJApwaUxmZWX4BtJe14jYafhf97pJxjU3t7aXtvvRGh",
  "key23": "3SfWEkQYYuPjkpBm68rujiXRVsHKUXYBBtAyA9naPwsZtXWNEaSGjpmVjuCZp3pkNpJv9UXKfZpx6ZZ7rewxMjYk",
  "key24": "2NtpDoXpC7pnMXKJoGQ8dmzs5R2Xgz1f4BFSiqNtQ241suMvLs41oP7DSKwYLD8NzcYEfbRNAN3JPwvzjDVd2rTL",
  "key25": "2q4NNUyPTDcr4ohV73Ca8Eatx3Be6ET7hvDd7KojPFMnQ2f9y5XTVBc7tjRsUQdLxm8X5sw132A2rFTJSsom5X5M",
  "key26": "kThTFMC1YNxGPYD5GSiFoKYnWCoaEXrAxZM8NyfNymbHf4KoCM5MpncrDJ22tobxfMbXTybK7vwwuNpPnuyReqH",
  "key27": "36Dbyff9KbWtpmtYjRu1MfNKyCV3xeMu3f8sqqzZfxqDxkLdRZeEfVQhGKf5xPpFuaMsajHXdUpoikgYo1823mpW",
  "key28": "5aniQw2QSSiidHu4X8caZMi4M13aH5cv5mCWg2JCU4ArhERNboV2oCErxBT5GLXkrEwigQyvrTqLikLN1KsCyEgr",
  "key29": "3w6iHgWWot56ZbWkkcCTnccfv4B5fdbtcNsT4bsmYbQLqwyJtzxZiEjS4qmqcWVByAaAM8K3MS1VFKeN1asAWeQC",
  "key30": "4zFoj5BcbVLaGbM15o99V95NcfHxDBwvaW5jy76LUUbhY36Ku8KdD1kTp1WJPsviCPiDmd4q11JfGvEPPwAwhQLg",
  "key31": "2hbmv2toBQFikBHHiSqpeAFfRRdaBGusjrtDYqfpyzuXPuFKfLd6nZyMdx48ccuAWdYy1cfzgsC4AGjPjcG7N5aa",
  "key32": "3DBGHYiMuavYLwjLhAYzFKWjTs5S6CWQgxB1hfJ3prWkraLXCm7NcEGtnpPMjbW579o2gBcfV6oSSJ7cTaFvJGf5",
  "key33": "4usifWWj5uVo7HPmqy6953TSSH7pkUNeLF3qtPRZKHWiyUke8PuvZPNEkRthYSiHYgV9QQtfJ7F6ht5PoWX1g5Sa",
  "key34": "4L2TUTsW1QKu3mEVyY9XzfuagJR3tBAnX7d5Gni5MzbhroPSXwfzz64X3AQBQQwuEfPczAYfvPFyyAF3QaT4fNSC"
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
