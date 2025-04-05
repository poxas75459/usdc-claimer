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
    "37SRLCE1nRagtRVd5YLvVpcGppqoTbPFwuMs4bcyiD9GxDaJvVyQGwMuooftiMN9F3H1aUAr92fP2z8EJNLimivi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wk8F2KNibkrYVza86KceP817mdTGh1jLoNsYEaEmKpjH9HcVP5AsdNbWvcpW8JaajaD5Q9W1uUi8mAxJAmULYgW",
  "key1": "4HkqgxCLe75oZc1NDJVB2xnf1xBv1bbihq2tjXuLCNqhmCwxXktpz4gp6PPyEc5x52t8oN9krECgBVHudmKebvPH",
  "key2": "51HEkFD4RCoHUNFA3HwyyvNfejzdzA8eM8eMKXNhwuBQXBWMGBhwcMyq7mzvN3nRCFBqq4b83daabVFVX23JFJAz",
  "key3": "4uCNntR42KGwTqprHCEGwPeJx2NnHTzKos959jKmDnoWZ8AbRUbDTciJVr2sFeJbhfTFcPwkNw83LxvGYHKirF96",
  "key4": "2aiaTEsmYtv5cZPz93ZVnjps7mxfgziRQzEkJ7x8CJuZLmwb3rhiT2DtbJ1xd7AKxthEJCr7EagyKguEUBggrs6u",
  "key5": "5Y6Kuq1b64AAyJoLM4gVnVWwSJgub8XPaYL48QnomK6buUY8EqyBSJkNoGs9EybaoRNrrfhgsPCRKzFfTxCNzcQg",
  "key6": "62C2JhRNhEYeWRRGgbe5u1wMjSzYJFcHmFAqx4EcHwkU7rvWjxx9Bc6e94hABvCLHLAep12Mn95VTePnJaL9dfQR",
  "key7": "SX5WAuhqm6LChputz3YJw12ThG6sPmfcMqL3frCSbz9wnPE5pEkpKCxWpNufob8yLDk5E21U2yKi343Nb8UU2VD",
  "key8": "5vdKdvSm36aUQx1dyY3KB5mb2wCWYcgc6feV4WebFtoMyDFZdTuRRmtonWexZybVbLjMPhnz6uverND198jv3VYf",
  "key9": "3gZcqbWSnd35MpHJYBTKwJE83m4kV8JUshCZDBdf254x92ukrxYo5as98HJpd57NV1P5YCX5PmJ92Pbr4Mxuper2",
  "key10": "42GnERL8pBPQYpb4gHJoZQzbTnNE5jva5NAyUJb1Rmv6kueUNfsXJESQk9EfcjpSgpCV31ZDhzU8zJwjgmCAg1Vq",
  "key11": "3EkTjDysYtYYJDEGNdH9BKHhTTb9i51w4hmveiPgpDzppwyYARoi3ReiUWhVN4kDpuBJTKpGNtN7NjZnrnFCK9uq",
  "key12": "tNJVArboLG36raygEq4CzvY4NaKarQj7VnPmTseD8cpkTSGrWQR9MJmuQDRt4E5VYJrDh2KAJRQMSwgWwmdH9pq",
  "key13": "4eibVfPeSCenQrEFeoyrXghrX8TMqDXoMeTCmCBRCNeNkdKZvdTrN8RxbtgrgUaNfUzvrMkRnQVuJWjDdvnXXfEL",
  "key14": "3hd2t4XTftKNj9j5ibgYwpkCuLG3HMr5dL5j96eohwPkzGJcbJ3oDe2QErsHeKzWMTPJ75EkUSuSU6LPnoDTn5Xu",
  "key15": "4xDqbvgtD5GP7rqJDh5krizALZDSoWTp19jqpiHA1f3jdLu4HPCFNZbjhFDiqD4MqmAPZyQHDgRxSXCoUciCWTea",
  "key16": "2uB3SJidzFK7zAiUuKukf78zhbi85AKNZTcSJNLBVdPucEfB86armfQV5Ff6897VKNQZDQAGRByUFyBPvHQvvrPz",
  "key17": "j7wACsBmFKNsNYQygoewk1V4habncLz9hxuxtQw31SosSt5T9omUx7VFfZzEZmTt2v2GAd497byvHe857FjmXYr",
  "key18": "2pz49NBnyMjUzg3T16SU7a1xYYEBBUS8qY2pLFVceYR7NirqENEGuA7vzzG9Q22KmG6oRk69XTkT2ptmRmoDTras",
  "key19": "5bktDViFH2faLx884MtNQQbP6aH4eacJZ4mscGNr3rjxHVkLGyP2gjNoHakNKA4FDBZUNeyzkDab5FxfrS7mYpuD",
  "key20": "4bNvStkjSsQ9fz6btzQECYN1miHp5eZJAaky3Y1A2FtkPq9Ei8xWtgM9KJ5j1fNJ4iKd2ymzWaPB6Mgz6J2tGUj8",
  "key21": "htzVeN33Pk4bMmyYBRHqXPfAmFsQrdPzbiMzLqAv5KkRWHeVLkL6X6hmQkW3KYvd864Pm5iG7qPmhganF71SYVK",
  "key22": "4jV5Y2LDaYxKYuo3ZKpv8G5hCULqZiwgpNwhS4Ktqop46yiTDzvjiqFqNp7Ef9oGUYkWYBqRiFSSVzsC5qtBnQdQ",
  "key23": "2Uif7mJXrLZtwEVWmZTeyny5ZxATcrxCLqyaR1gCEwLHDQSzv6J6JW3JfcnBzxDNRNjm8hbu97xHgraHGv6bXgSB",
  "key24": "4wrqdTg9hzkC6FxQMe7vi4KCZQuuzrYRpohiQ92sdUUDsWSR6EbUYQRpFDKfDUjcEUChSqBJ8hTCKVpkYavTNgW9",
  "key25": "2ZV4pjVCQxisjFR8cfYBxvziKeGBeLBHBHZk4cfzaQGjH3pMH54BVGg2s7q6fG5sVQpzedDXDDJRC8NvfBKsNGN7",
  "key26": "mv5zJqCqjmCxHP3ZW7VR5L2FTBBqc6VAv2cpqTsoGJmDPA1v5tiris1RTLDxEa4JARavNLtcURaqDh2xZdgTavD",
  "key27": "592G4EALV76vrVHKArvuNwamMTCurL9krVqmqgwsi7wiyFwftkm1Xu177n1QcgcSXWQPt2b1Yc85W433wDQ5xnAT",
  "key28": "39Kgsbwkv4YpPEiMk3XCyLNX1BaXJyTnZYRtQgvyiqY9CmkDJbArJm6HdWx4CqgRpmmuC49KsLGEDy4UyESZEe5D",
  "key29": "47K2Y7HE2LoNHEqpP8CvR15WR17bAPEAkv144xSyQFUKF8NWQNQeGgebFsmafRpWvbxxPrv3eincQeJi8AE1ceDT",
  "key30": "V8gkMYvcH2BN5mrA59a9qKjhJpntcXtMm3YA2zLXj8Rh15A9zXaTVLwRFGQRkNHhPHNvdKfLxH67oYKbRDXuWdx",
  "key31": "2SteFEeY2jYEyxkzBAtcEyKyh7fMpBAuKBu6CDGp9HX5xMScShuce4Xs482eSgeYcQtTJRpeS35bVU8rV3u7abmy",
  "key32": "3GnQMwmfgySGhFBETSriehsGatGeJpR5NCTamyWZPQwmKT7Gmd2PEkbRCt7aFe9anxjEwRrrNXbm1m6hMrTjFjcq",
  "key33": "53uJFZgE9GeChzG8ugQ4pCFX7QcevrBhGCvhZLDkHx4ZurPQJD3UfegiFVPbSb8fgsxn1uenMWxKjJcxBmHj2c9u",
  "key34": "3k26v8tYjViKNJFQjkL9TszkHbCG1vpPJ2UqVBdGBzWejNkKUKA9yjM5vi77NwQjXvnwp6Gxvn82WRbtcStQyyYx",
  "key35": "5FDrcBrjfGnMX9fe35jBNU1oDYswuFsftYAfjEegUqo3Fd2DgRUNW9P7rkRpw9StVakWLXHJosqosB8ZKkaEBt6m",
  "key36": "3xywzRWRX4sxK2YyNzEjLyAJbzMXjrNtZQtoZ9j5Ruwjwnzz77CpLJHMqRxv4J32vsdBFuAWcRtPEsiywHCCavsc",
  "key37": "5sjqwFVPqJazX8aGQCuiNpyFwWiiNDrkCKo3AY7Smy6rFzvLT4WPBdtBs26mhXgDjN8E2e577Nq6eiUjMQL3myxF",
  "key38": "4m48HyoXVUYyQPVVTYxECEeqExhTejyCFncXwR6EoScvUArdM8Lwg5p8pbvK2LTawwf1wRtqRods2zPHJps2PVod",
  "key39": "U6tCbdwfNubUCp2gboqeQes9umZjhJ5nk2Spr2WCmFq2rSAdKTwgS1xscN3EbiWcsBFquwQ6TVGCZjECZmDPxBU",
  "key40": "ECujrJQbZTpSxm7zewGP9YcemKGietsdX18CQGS1F86gASGgMc4DFvB3GfyKQ4N4kKoZL62ZnT8rjH19DsYmiai",
  "key41": "4g5qxwo34rQv5ow7DVbcof3LWaJZdNyb87GNBvi8YWUUezYGcvSGctQzPApe1MLxppSRn5JE2GpfgV7jzf5uR6ro",
  "key42": "SAn3WS6czzTeCpA8aMqzv3PJqaDTCzbXf3kWeVJQrGcmEpc4dkUA4MsSHZX23m79jFUj77TnUADjcZeMX9CVXBZ"
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
