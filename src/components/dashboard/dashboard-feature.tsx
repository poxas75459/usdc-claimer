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
    "2bjSq5d6AeT47ifZeUVEL1G7kTwiwyHN8Frs7z3gXNkLk3YtNTCcWSGqkyuafDQ4HvbUEHGiRLKsNtU1pQN22cHv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MkfFqV2AatRXU2KDCsmsiSgJ57u1fUpyjbLNsdGbtnpsZUuqBMN3bAkwF1b5Kf95ySgiuLVPCCUApAUFqhUWGXx",
  "key1": "3aivRDjQddRmihqhnwP6B11MDpL8wUvP54yUdoyjMwoeMxvLWXAAH6nNDiTAAQtXrdMLcViGQypw2r4SyBC4jCGu",
  "key2": "3H8R1QxQ52veFojhHTMn4JMcE3oaTBnPeqe7GmrQJ7VNn8vaxUSg1RC7TpCQoUNxdd3piQpfQwYB6BCG38FevNyM",
  "key3": "2exJi8qDRK6ueqPXdjpFvFM7XZzkEXnEBVMC3987FMJLRCafuDZtKgvGtL4pE8eNbXhEt5y4zSecqr8XqEL2zPWQ",
  "key4": "3BCN7XWvUYVS5VkbeV82GaLaUYtuf7i5U1hsghvfqwc9Us47DtcXjEykeoyvQUs272HUZsjLuqfM764Vh18TkJ9B",
  "key5": "L1iVj9ba1R7PN9uuVTAMJiy1NNBUpb1sSkSCHs2URTdGhR8UeVHGvV7BMT7Eb9fnPtkugVJBJrgU3PLgyhPy1xV",
  "key6": "5fwp2FL1cxSMfP52yNPkFaVedZodkvWgEdxaZNQpjYSMSkZkyhKwt6ugbuzZPExjB31yujuwWHfoRJhfz2iDgEBt",
  "key7": "D6MnUCZr4QShiwpL3rpZ5GQ5XUEEkMgUgmao2GCX5fgHd7L6Lr7ZDz1GfGjhuuubLRXp5C9zxxh7wBJfZhJufXp",
  "key8": "44nCXExch6KddjBgbkvjVc12h437Fxqgy4V8nRejTSk55SMDxu9mDRYFRvMZNYSZBCgoUs7yL36tyyRQ2vg1bSXk",
  "key9": "2LwkMmDVnbGptU77sYRB5NGjU2ruyuMb972KgLgXbCkFGZr5n3Ej22HoqDuazweXksxBNZmvp4h3XVDKkzfTPq1S",
  "key10": "2Hj1edC4ch1cbbNFYFVHcDVhy4yfgudS3445i8qd8b7E9xoeAQHAKnzkRgwjoSKkgbSbSUxsLpnRLbuZjfQ3iC2S",
  "key11": "2kPQSXhnWEBxfv1h9L2QPNQwmQrNKWkd87dKHy3RF8wxjEoxSX37x4mtUG8YR3aERzffYkF2fZiwboUP8XoupHJ4",
  "key12": "4rRZihK7z1drH3LufPZAC4sPpgHWyjxXDb21x7XsvKi3vZ8kcUTK9a4NFM6kmE9n8sDx5NSxJt7B3TSZ9YHVUgxs",
  "key13": "N5yTTovuBrWMb33zk1PKJgJL5am7UcpkFmMpoatrSjJwe8QCaaUnXvXdv9E3KeWu7i5Kp13mgHLUtQXDAkqxejV",
  "key14": "5H27zwjhCFM6bnmWF4joy5aPSsNVoNfDtsN2YDpXrgfdVHJ2wNeJLy2SNcMhzy2QmQYpAJgRVbc1XcKxECvYQAvX",
  "key15": "46PEJJfDbWWgFwFscd1HSoMG95YxfE4kxKFSumZYyrps9xdiEMQTNLPnY26aN4DrwFeZs6LEnFoGzS6Zn8uAZtFJ",
  "key16": "KDsDeNpvSmdy2nVbYB9fXquHTrio3uTYV864Zm3ZShPY1tey28cT7QhTvfWnaozoyhLPcLnfGYFFqMCNYvzz3JE",
  "key17": "436PyndDc2NpHJKL8cNjGJg7zaSzTVZLpkxzi1MUnqeaoYGz9MzNaVhcJ87NL4yRRUwXwi36uQa1eFg8jwWwtt4n",
  "key18": "3wT7nBQFT8d76J6adMuZuzyKDe1XhXV2mEgHBEG9LmwXZfLjcWbmBZZT1DKkQD5W6RVA6QsSBnYePSAyKPeBHzzb",
  "key19": "5jMmxQMrxPz8JcuSqQd4KGEm2FgRruN4P7fwcincuvVwS8U2b37gThGSFB1fw9nBYVwq34Etpi9VxKA1J4ib4NLe",
  "key20": "3k2NrJusn5jh4ypdS1X5Waq61YSFQSEqx1KKygdvvfkon46tcxF3BP1tqAJbPLG9DzghCMz5g8YhbAeLnzTmzm2S",
  "key21": "5WhhQULSY26Nd2sskzdbxmLRvfmW3yNmnnmYjx2rS9uSexW1iFYwWzoBNqmq5SzMMi5m2LRyh2hf5QYdhbTdYbqz",
  "key22": "b6XWCdTq4Wdhf1TR4LfDtiuxG5WqGgeiheuP6G5U1UuVMQkikPfkss3Vp9ocqpxug22Hy72kKyE3XP3iPtcDpt5",
  "key23": "2yNbSE1jZYTHXhpgeUYYz8FqDnTgD6BaCq8VgGqy2QMbro1ujqjgojLGsrrC7N1k1znncYLuBZkkPKJp5tKZDzpF",
  "key24": "5MNfwoJqw9qikK29SMjwQpuzA2e6LixcSWhWFkYzwchXubLRxNyeKVX2Pkbc5KHc1U8QzMu7EbZuWk3y6a32nnH6",
  "key25": "5o2L6z3STRPrJ7yYEr1Cg2Ebc6Ww621yqeoP1ZDhFTjfnp8Qx9MWdNckx5XG7fiKj3SR8ju4Nomawt5zJf7H8TXp",
  "key26": "66BhZVxYKQnjwBxr9HTJouoeHTmPkLRwW8wn9GNSS96ZjeGm4Uou3vZS5vQfUsLbRpTyxgBjzmq1qqU3jazNWFeD"
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
