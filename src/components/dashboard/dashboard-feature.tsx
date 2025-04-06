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
    "3J1XZD9FdQCF2Kk6EH2WVjdpAxcDtY913MxGNMqYieDxKVm9j8Ha3gAD7LnUpyowKZp2Ddc6spnRx7gWR12qdyH1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nz4Hn6otiEPWYL9cWQRaFsXTMUPw27o1U3nK1XcNBdKXVdxCccQWC9KmnWE8QGRLyjcxog3Y9F7MebGaCk1eGe7",
  "key1": "3kwGXnTZETwV9Ee2q7znw49xc1eVDDV17CcCVr7eHa3zL8Sfg9ghUd5fv6PsnyMX6T3WQpNodjqGo5hxW7v2SxJj",
  "key2": "4miUdHMcjd72aN5YSUXLssTMdGfNkdcEpXqgEG7hLBJFjdcAh2QRQsjGKQvCx4vDvoQPVbKdXvVCAYKCJWWBZvkz",
  "key3": "5XTamVaaEtU2QcE6fn9dxWMaXvVtNLtd9s3TDQUjegvjLBSebMQAowe5P6GSq645Sya9Rq4FN7k7biS5hstNYj32",
  "key4": "5Ae5Q6NS36cNpc345SqDLTisRpeBARgnvyUM3LCSoBDKhttPuaDEhdsmZ5dR4TtaDao8Lcsob12o3qWvKGJn99do",
  "key5": "65fCQVFC9Uu6DRHYX18MBuMJBRQymf6PCiV7FtC8gN5z2sPFaNoRMUTTCCXVMjPXo8BRU7D5SJqcJUo6MAg7SkKN",
  "key6": "2v3R1bQjkcBRTbyxZmTqgbsSZCzNVY1dNBs5z7xqUxjVoL489zcRKWqWDn6kifKzws8PV3hL84DQctcxmicAxkEL",
  "key7": "xuME7F5Kzfj7VEj13USaJrFWVtb1KEqAaPmHQsh2aDZSj5aeCpcbuX7CN8P23j7NxrYo3qzHx4UbEsUimjx95Er",
  "key8": "3Y7SsJjxMtFyQnQDYana7vC2ThvFyp4kN3eigfAr8gNdhoLV2RugqMiDYS66gqMaJHUzDivVG3gDwEuKRZNo5fFJ",
  "key9": "T36iNxVyQq71z1co8F4K2PCyC9vEpPqF9NkL1sGgEsn5kEm8P2p69tmniQnUt7ZzzP9Xag9joLhLi2QwL4kPnrF",
  "key10": "5Tt7L7YXWqKCZJXPywLinZR8C3k6haz727RLABE7AdJqu3n4bZYKGcknPKdbLF5nuEEhxeSsf4AerpUbD4eL9Dh1",
  "key11": "21ouLvEUYG4vUdJcH2wVNCxzeeYH7ADr7VqRFz3hw6M8YTFT8JvLKrY9LRfG4R4235Yg3fAituqR1eXkANc4tqrm",
  "key12": "3KtnXDZLkmJwNkLhWuWHQoafqC6HiDjct4xmUuJ7tS7XbGQqaByhNyiiH3pcGgJdnPsdpUBTvFs1813F23Q2Vtu1",
  "key13": "RKGfKPZvxQZkf6cqmQSmEDYMg8DLNu6i9eb53SsoUt53zAAyBFZoH64vosWXNyxNH9G1cYwXfkPDQbumSZ5k6Hi",
  "key14": "4rDLUqnryodKJBN6KaeS6jgXvMaeGHE5KhsL834p65ZNju9GfSfS9rbzZvcF3ReMDAHgHnTBxVqzYjSw7gcL5anP",
  "key15": "2Cw9ZjVxAqHRZPcgEwpRKLdavY38ugHWp4mtHyDTWdoHBXxs746qGe6KPMY7jFwKf9yraHL5EgjDZLTapoXbcZCw",
  "key16": "4UgczhABxgtwPc1Tag64rrvnnxZ89vh1kL1gR6P58FLxNANwKZR9mEDQfQQULJiP6CxngPzeFji7XYt4XttiuZVw",
  "key17": "rTTgvST7sh4cKmoufdrPAEBx6VEoXQV6cDYNEVjeocnJrLobiGNxQRdNqm62VcCd6mkukV7FgAFNPjR21Z7kSov",
  "key18": "4uFeUm4WHie9zNEAJoMDFh4ogb35qb1umZ3G3gn7x3jskyHTv3bWQZvtS7c46qFds9fL4FyteL4RkrogKmwZzVnX",
  "key19": "5wFDorjfnQ7MebiUipCdBKQRzyLPBCJxqmyZXaPUaaF2j3eo64hyV1E4WTikLwtM2QeBMagbV4X9UmEE3i2C6EZG",
  "key20": "3kPiTdo83PhfRbjRLYgZVwzHPdUCSJD6P2mqxdNC5CtRvtUkn1TmXTQZUzPpCioWd8WrdjWtHQmixXVw66WJPRPX",
  "key21": "DrsWSy9Qndmd8mMHXZ17eUZT6RAg1Qmy8RNKkSdMLgnkNbtcj1dp33aeuRbGQSmT6PMB13WHwuDUFdVt7iApbnz",
  "key22": "2aTz3f6fkxETzWx8dSe9gDbKfrq2MDUjxGMdUsuW9CqLncMLiDf6McD2VhfSD4U3cKFSLGF2RtddUCsgGjEotwDd",
  "key23": "2Dr6DP23uyEpNQdAkcRL5XxrjRyyvfwFW6bXYEs2xk2ja6aR4jv825LgNHhokg7ZKYjQPUxY9R4MdP6BMukuZHut",
  "key24": "3pK1AskeoR36SmZoxQBnzPrqEjJEtA6pBhmpwzh6NMiaDsDhWAmLkkPkt5H9d7LAmb9j7V3iSND8yo2C2w4TuwZ7",
  "key25": "5kKNSoJUSb4mcZWmhx6ujki7gQorncSKD5RxMzpU6Q7vTqD7ov3CLuS4JcJktgDVRJ1MZLRL5WJypuJkLb9pu5iU",
  "key26": "g9QLiLjzsZSkojdcPBCiuf2CxPWkQfFsBsg6dXxAunvnWCRNbqZm7a9K2uySYRwLtCiFrFHKDZN3T4WkS7TbH8c",
  "key27": "2hR1MZa2uAqhMZbFSjCUSuXA2JjCK4Ut4wySm5ugBEzkR2EjcKjLKVrX5p4bwEdeCrMdzkeoVDRyV8euCRnnSUPT",
  "key28": "2xiNqg5suS74WZ5xWG2vnhdnpSehRZvFFmSpcjwoACi3MRHT2v3jj9dP2a2JUmQK5VnQLPx72goAnf7knDHgT2Pj",
  "key29": "3L1NAopjYZb1E9ts5YvYE5ihZbhfCYV7cAi8x4d7eYve7WKXLBpGGegjJdf5dLgT8CkAzvMVrMpGJWuNYX3GVXKC",
  "key30": "4ZA6H7a6A7j2MFmmvkzFV4YMCYvqQTTMHx77sG9V8uE2dsVh8Bpo3EVkcMHdNvbPQFdRMtrGh44raxZM75WZR8iv",
  "key31": "2Se8wnnCckzPprhnnFkEA74vWEm5jWXWj282zNnQ6RNzTgC2Gw5nV4jAcGWw9CDuRv8YYMVPX8pN8t5Dbb7r1kzM",
  "key32": "5xaKq8QGTEf8U7BHEjMYcfyzGKTmLPcSewF1mTRDuJ2nwuZrQzivXb4XvUiC4jrnYswMjkDNSZhzYZorvbA5MxVT",
  "key33": "2LJCeYAte2mGWWDHgtsFvVUL6WXgDDjFLYxKJN5TcgSK5fKuAnBdgSyWgtJAJvgw2LphszQb6ZGSso7cZ4UgVqAF",
  "key34": "3ZQrbtbz8wGyhuGvWLp9neE5hJCowxXa2QLznVFvpaQkYQmgsg8cYbjwbiqGXt3wLapr9j9ahuxVT9QWBq1DF1g4",
  "key35": "FLvXKzP2nSEEh5Zf5vB3rDmALhXZb1qTLL64jnx8At4mexWXt9TQUpJGSpT6i6Gjc7WgCAf7Rhh8M9PnfJwzya1",
  "key36": "58G7LKp2UqZeYgVxjeR1KFnrYHRPutAcTmLs2sU7eVXKwELsaaosGTqXB16MYpnnvJDmwpVkTL6qQBKrJTLCQiz2",
  "key37": "5inaZQUcsJdd3vG9sm7PXgFFVaWr9dj1rHLaZC2NiVvpJAxj74CCbdcfXerXajUXuZrQxSEiEdMxL2E7vK7YquDH",
  "key38": "2w2dPKyNuGY5d6Z2ufoV3LQi7G4Ce6QDAqTjLK135WU8ehLf4dB5arhSJDSMKNWNjgBGean8Ci47JqLud9KKKyUA",
  "key39": "2QyPmUG2LqejKN27EycAKc887KXaN2gZNHzxaQETM9iT48pjtPpNVMtF8JtCqhBJNqm7P25LvKGfxdZCN5agF8oy",
  "key40": "2ANSz5nbhcTJVoe9a7nVAC6b72fXX3afU6raF1xJBj5jjuhZXAqCNN1CSHLL9stzZtgevMbFEStH5QaLipfVG6gN",
  "key41": "3GLYFn3U16irUWFMFcTxfQZM5XnpaUGiqN7mBFoE7zxKtsofXNK3v57rWYtTRD2CQs66s7UiQNJf3iyymvZzt65A",
  "key42": "5W37MByLmcUNmrRJrBahWv6J5x8PZ6qs3pGdQcUjp86sx3Lm8Jyc7zU9aAZVRiLkLqoiDjsnaUo8i6Cq6sNdbvGM",
  "key43": "3FZDWT63eNM7fxiedev4GqLCTnv3RLA2i4xEHKi35JQ6biHcoCZAU3mvsRv7ZcaRGvA1no4VCGAuRzEbZ6ezQDgH",
  "key44": "2JQ6ZDZGaA6SinMfPiUCEkrDDpoMwaGsYiXREn977PB1FXiaNg2sdJi3vbmjF62imS1uEbfhbosQBAkFG48L7dV5",
  "key45": "4L93DRzz8PUANx2iGao31wK5MRCRbTbMxGf2pdPjsuPRBGoGh3MbisHz3wTbbNypxGY1cQ4xsG6jcdN99vEZsBqr",
  "key46": "2482PK9xpLf5QxHbG59k82CxX71FFpTtPAStrEeZBVZd5R4io87963FJBYc1sx4LvXdtJdT7TwrXSxSzHxXG6A5D",
  "key47": "5J7T33SqPqtfDJBcEjH6YVGuPns63Taow5uWekGaa4ta3Lf9mAK8uw1Wmp5cqE9owTNJhrQCb6uAQG76cP7HGCJr",
  "key48": "5bYq5SBShFzrLXjzReckTPeVaLSTkDAqdTPKzXKgUBJgLcz6uGLayeu8NCvspthnTLPueP5mexwrR7x78dUvzwQC"
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
