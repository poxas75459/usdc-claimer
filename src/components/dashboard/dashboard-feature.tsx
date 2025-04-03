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
    "3U25saskdg1vm7bhbo2rpCTRodEr1eJWkyBdgyhmuPiLcdaX2ud9QyxZe2iyFxTktGdSHw8x15BvNwKwT3FLaaT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ysA6QW2uDrhHMZoy1cBatVdY2vvyFDdGyLZ8JY168fx8wziLmNB4kEQU3HUKPWF5G7tccN5voPWNfN21G2SharB",
  "key1": "28KrDWhXypk8MWrg7yh9dwuD7ywCYMD62rCuKaMQzZn3v3gzi6BDLC7ai22QivWb2CwLEdkisaQ5pPhn7rvoBd1J",
  "key2": "3wSqmghmyvrWz8iVmEqhXHiCgrQSkCFs6haJopKvkBzjBx2EMpBkRSJ1rJpR6Qj2BpL4AwK2E1U2cPtd2qYbfhVg",
  "key3": "NVgEZ2gg1Ewd7CxViLKAnZA1c5K1tqoqt1XQcwiVBHrfgQtaj5ZJ1zWC1abZ5nuQXAAmsetLcgwJcU7okina2yG",
  "key4": "2u4sFZUXJeFRtPuEJKaRKUdemWH2nSxjySsKrFcmpEggHuMEujGSpAnA1FHu8TPbuyfizFQ6dxZ6KBotFu38WcaS",
  "key5": "2KuKQ3HGdkxiirTdrKZrBimBU7Uo7dZr7EqeaiTGmMgpLiBJKetVirxiffwH1ipcVTh1D5ffAFUCbpdTKHQ2HB4i",
  "key6": "5kEyzuHKqRfUyh4BS3eHXN75BDUdfnooBuMeyWmkhvLR9fLYxKBS1ySag9vw92wjTgW2J2FHv9tZuLmQC37H1zXa",
  "key7": "3Buw6YWKnRVvtNDAxwAvEUvBsRJcLBGwTACitXkpX7F7YwnzJWNukbjTQyGg8tUHMUoswxN73n16fEnxQCWMh3i8",
  "key8": "3HbD9XcW1nQYVzp4jZjGt8GpyKodz4UQYw8UJUzwhZ3HsvZxVn18DHktu4RmyHxkfsnddvrqzVobwYECdCvZwP97",
  "key9": "21EQMZtfiDygWjbLKgbv1ZTYVwNGgMo32gyWxndz2BkTR2TreSeJGcyKEXWLgp7AmeTcfGSxesTo29mST4w9CEAU",
  "key10": "2Pn2KcKaNGCFdAtEs17FbR1X5hi1xR3SVmfeimjmho36nb9eph5zQ9gXuZV94Rzs7cK6mrxPbQsd1i6zNsgzdEFJ",
  "key11": "2cKNVTEFzyXSNbcQVU8Sy9dS3NDP6rnMf1N62KC5fJAgaGzAtdbRgrMRVtDeFn5iZAFNE8r5Ltvo3WdQL1hfgi5i",
  "key12": "37zksed3i9CyJGhYzbP2gNLMP6bAvYT4ZPk9rYw61Ufesmc2kpusmG456KFdS8H4vU79rZM8wP7CSdXpApWHKGjJ",
  "key13": "YwvfDo9yfTYyfzgKWRyiVbaPhqr1KJCU8Sm4vudrMnRvvrHizBmDZY6KCy9tjUGnDj73Pb17ez85z9PpbtJyeEx",
  "key14": "5tYmjY3VuhY8M85zyUPKFwNhaB3jZTgZyVvt6Yc3Jy9Wx8obpu8mnbMwgB61fKSLC4h6uUbQP2E1NmphEJGJYLGM",
  "key15": "2DyE6iV9WYeQwXq3eaLDFaK17RpKR2MmZoJGEqbC8uNDCBJ2KvMWExf9RpPCjo7QKqzK7W2DMo27jmdo2W4M5GES",
  "key16": "2K1q5tZ1aUQgnNECFtix8U3uTZGBDsTGmzkpb7Hx9VjS5QrPD3kTgc9FLMu4LM2QJR9RzZzzsXpMfnumAdQqWpJH",
  "key17": "2GUfx146ce2fhD1nDstEEPfdYSjMneP2svR9v87fNLLk1nxb6YEJ3Tzqb2D7ooPtP6He6nEkBq6kqHJo2REoBotk",
  "key18": "58LVRvkei5NT9PTkmKiWpvHDYSYRCaQ8d26ig3nwvEAeQQEftP4DLapFAW1hSWCvr7ouf2V5jPHSh6QMuthFEMbS",
  "key19": "3kLUQu7C7P1MM6TSWjZaDXKqB8jyB7qWXofKqdDY9diXzqrMxJWJg59Uwnob35nJ93xzM9tJrZqekGH25w1j5RRg",
  "key20": "21jaF4kJtu6hgSvwwEVF9qb7vN5bUfFb2R9xUWsBNg3cEeh8ywuUWQchFC1gNz9k6aDDEcf9PyN3EDaSMsMG7hew",
  "key21": "4MdMz8hPsxENfDqqiSMyb263fMhmRos9ettFukp83kRzCPkrb5wX1PzrLcsMk9SRkXoEML7u6YQXCbmXFTwJLNMz",
  "key22": "5W8am8uUjS8u1YpuMn7xYwgBM6mgW6rNFr4iowydKWq89a5am8RzS5oFT1rBjFZDj1vmqXKzKj83AuA2fT1U5j1w",
  "key23": "4TCz8pT5JCGr9mQaJCwFEdPwsS5qPjrakg2xUjW6JfsbXCXwRsM745pUkBNBb3SqmStzNKiMwPPDSZdchcH4otwn",
  "key24": "2b7iHDeAN3LYJSuSByQFk1eZgxu2dD6LNCwdvo1yPH4vKNaRo26eSZ5eSSzURSWAp3SFPoVDLqTJSHZYQSRpkTLM",
  "key25": "3a53Ecy1LfUHL14cws5F23fo3yQszhkcdJjZbzb5dyoxnQWe9uE81ykf8ivHN73WZ33T6S7ApR3FnjEgaQNLs8qg",
  "key26": "5Ti9Bvir1v4X8jnzWUxUYZu6y9nZLRhw8GwtuXbNWAhuhrUCkT3UQw6PvWE23gGTeyorussxYvZwLwTsvkXbrqHU",
  "key27": "4QBjYneZrLjGKGSdJJmMtrMKFonKsquyZqkyeG78W4ksMweN76T8bnpRwu5F2ncm6d76kqFP7EcvRgZx3QyUz6NQ",
  "key28": "2cF9dSoaTi2rr4qApT9i7Tx4BC4QLaNkzoX54S8Qy5PAfspk5kTZJUc9SiZBrbpY8c16ZYxnLUtUyVrdNgPC6xdJ",
  "key29": "3sMK6s5Qd7m9yWZ5XUYcBCkGkmaKuxB6kPGQ56FYLLBo8rm6Ca1ChzEEkqRNDEmR3cd2Vn1j1UcXANVWdzgRQfzA"
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
