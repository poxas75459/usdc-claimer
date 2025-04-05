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
    "AdT526ZDt4mT2oCjDicnzxNaFnYk44MJ9G9QqK7kvMBJjJaN1GiucEj2cowXTgx8gWRRjcJeaKBwR26wrCMn48a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5U1XoGWEn2PWKr1zXMoNNzeCPW27ordLktqX1z6NiH357HHt67DjtDX7PnoW5yrJZhrPyKYYuc6c8xvk21h6uDiB",
  "key1": "4GPqv762TggsnBenDv9zFBJQrNZWnns7SYSdnxeGq2nCCL5wyUeMA41WKdqgjV12ybBhJGYzEcWbrk9Q7nbJBxni",
  "key2": "2A5izaxgS88XvK4K2SXxhLUR52pEWepq5jU1bGJgeQzmWmhgZPBibCBvkHsvje3VdfJXjCSLwqLECVabmVgMUqP1",
  "key3": "2C1e5yuAUpjAHo4UFdqcQuFWi3fmB5VrJZADGdgLEVoeABKNwr1qe4xNM3SSaGRyPF5yZcuzAykUTDE2V2eNJQqq",
  "key4": "4tE2VtYR3pAngXBZodaGuLB4VmNeetPJ3ZU5ojXviDzCMNdzarXHJdSjSPGCGZANc9D3mQeJWvr6GEPbfykp2sXj",
  "key5": "63ZwXM3MnqSV2LhRF2fFRQUv3nL9svqsxKzW3qrJVHWDbeHKnMDT9CXPnhzdxrkFdHvmCkkEnNqe4SrXaLNVyqck",
  "key6": "5dEJia3hTA5zQfHwF8pR6BfsURZweqZX9ZrLTgUAddMzUHKnUDyGLWCAHSuETgDS7bq9poG1wA1miJdNh33t2hiw",
  "key7": "2x2X9NkodLsonuuhrRDy1fUHkLCASC73JWYKMWgVY2ZmWpGy3VgWSkmkA8Me1MdTv4a2NuFGw8ZX4YQ3Lj79cP1h",
  "key8": "2AcPqbpMpmCWfRFkS7L5jygKFLtnMzuPuccuQr28ZLShQTtytDi147pQnhE8nP83PXyhffpaPiJ1krt6YR5KRRhD",
  "key9": "3PKUwwWo6ZHVXmCwPSyvZTVrK3ZhBQT8Vq2QEG1H2rPoUPJr9bK6FKTgz8B7ToC7JUyXst12AoLgdyKyBoEfncQq",
  "key10": "56T3vdSvbfPSBJCcC7zbvPBuPqwKm5D3vttWdwfAXeCPK6DS56SxpNmDj1i2Xw1gST7VpxQEVMMMfP8B3zNsntCS",
  "key11": "5ZEoouEWZpXEJ9L4Sy1Pu68VUvzBMKNrYuvwf7igG82xR4TCHd9quVRuZRH1zb9BDFj4XZR5XrrkF734xoGB3DGA",
  "key12": "ZfgRK59ePcV5BCiezndDRtEaYWMxkBGkBrXydcGNSrRCbfNExWvgM6j6f4R8b1QtRvKYhyw83mUoADCUHU1cwv1",
  "key13": "649oEu3xhu3Q35zUG8HKKu2LZqAwjkKREJBpGuALBK3tCLtEnB94Dg8JpwRZZ4TRRSjBXsAna9XS63LZ3zkEpwUJ",
  "key14": "2kx8BBhrK6HfBcrCv7jeT45q3uvzd4JdaGXh8uuKsN1eUyaYMwaw6CQU4zQ38PSyyaS6orsijMLfBq9nurMtdRXc",
  "key15": "51b2zWRWongM9yyvaMy8mejj3WnuJMDcWz93vvoVYT9g19DL3qRMJdaRrPRRHjmYtbgHuU9ryeLgUPwfAtRtGgfm",
  "key16": "4AMWTQTH81dNvrrT7K7s5XEwCE15Cqd1RbkBiUfT6WVMjhYq92HMr7nwQHaPN2TWKHDjucYPVK6R9Xn4PesKo5o7",
  "key17": "2Tkm1e5ba2AjC1CbkeoA3yBN3FXQVrpTDZPLupxeUgjt1JnNQuRcmoD4J4D1NQoP5PHxz2vvGTierNE8bTekkM2i",
  "key18": "3Y2LZFFjVxx4ZCi58zAfKzhh7sKUbs9ZS7Q8TTvAFAXqhikf9bCb2EW6QNtwqcmAmghihqAqvdVsQNWb84R7f9Jx",
  "key19": "3mSNBbbcmKGhtojjMMEkeRedNpj5H4KeH5Hc8dX87HsdLtq1FRYiJuyAeWmyf6XPeASQAqwXGS9kxSr2M47skYxA",
  "key20": "3ntFhCzEPobEVA9wwZbDQHbWsfjmboWJyu34qM3oHmZdo86f7c35J4XHdVriTrXHuMaL1M8vZayeunRzEhGM1n4K",
  "key21": "8UtmxXNGKV1BVNNUbHoa2sE3T9X9jv9yx7kvSW4Ab53AZVy8BuzpPtCi365SwQ6Kzx7YBfyyk2eunfVzmJXJhkD",
  "key22": "VVovcFJjfduUeCvpeZtpqr2UEJwoaaToZuxL2ivuHWqDLTk8fgqJjBYBksLYTBuPiqKFsgM6d5YYiSguDcuUvrT",
  "key23": "4JNcA8rRoiPWZDkH5uFcfddbvLPSxCFahVqswDN9C5ZFaG5CWtA7n7HBqKLzqRPCU7BbwxTMNK66sYFUq5xKiz6m",
  "key24": "3d9hjVmYEzWziABkigMwD55D1yvAvnodcpUMGZRzGfiLrd9ewR9xDN23HXPdAmvFVGyB3CSHrHTammiNRHy1mw3e",
  "key25": "3hiwWBiU2vicuXQxFG8rWCSTy6RxpFKsVCqdv5ac8yFBEZS67EJCDpmdrKAEKKa1939i4AEEPjGrbtu7EiyChcBY",
  "key26": "4ZSeiSxnBoumC71adLL3oZEv3GchmS7CNMWj2bLXd5HjZAAoWhkRzZewjQmfkbPDso4wmbGBDvuwKe8sBVwWRDjS",
  "key27": "64zaHcSzM2kf1j9k3qxFVuThuTpcWK45JjRots2FLi3TuwzEe6QxzZFq1LsuKC33y6iYVUTnuS1VTTfY3xBQbZLB",
  "key28": "gkpZ2FAjifMNxVUa3c39gR5HgXMcMMtffi8G5QWYtgGQqsmKRE7wZfL1KiMSoh87oXNWTMuUDqYM1RoRY3U1hEJ",
  "key29": "3Q7RAUwP1FPtVaxy5NYRA6jq1pjjzjXKPLTMkQTCa7com4eNECFkDUdfHLBNS1445DsDM1gDv4P7W4htuivBYx4o",
  "key30": "PF6abNcVTXTp5LvWYA8hkroRVM741GpvVSZBHNrBxB8TZuQi31FaSM7BwSjB46zMue7Mrv1XgWo9DuPGsfLwjvR",
  "key31": "5UaqyEsnJgk4AajH6cVrDMragWRGJfywwz9FPbQ6jPAY7T5BDWGCXNJoGhEaoMCT8pUhBxhmMviYntbfza5NsZ9z",
  "key32": "afPuZodnC5pJW5u6dkRjYwUMYweQreaZMr2swduvB3FTuzVu3p8U8JUGMUeASKJv4VyT6jz2bEu9X8umofZ5HHr",
  "key33": "3PDwBYEtjDJCujay8vZswuDRnMhNQnXCoE6tiNExWUVcAh5y6hSypRzFvatJWLDpSwHJ54gTKv77ELhYg7LW18gn"
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
