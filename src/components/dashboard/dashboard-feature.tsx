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
    "4YJfTZQDsHVyJUAD8RoeapjRqsgTj6LN1X68WrxJMJQKhReULxJSncrFSqeNT4u5c3VoGfCvshGfqxB6RZY3uTSo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YTFFo49kHSK9HvLDB3XFu8L1u7rMFsVmmP3r3FcX7WFHXF2WNWzzvxLL5Arcncqj8zRjYPaCkPEDNg9y4sWz2Hx",
  "key1": "rjTznbuW5YtFs7bSnapxXnZpEYBaK5fZGBAb93jZiR39fYMvsVRXRE6wtqRWbAZ2N58skpMAUwt58UrZh1J34Ho",
  "key2": "5Cryap2sFnaAD1JVDaXqLJTnCPwwSiKrC3wSUc1HuzWNtgk9oRsZJD9dtzcxo8vwFGXVYSdhSZp9KGMAgMjbAJvq",
  "key3": "3KTP6CTJMVwv9ZwMV1fDvGA2PkTDwHUa1VCrMDZnhHRUZCuMshtExJ4z42FYk8LT2ruR9apos9B6T18VX8zsZaXN",
  "key4": "5ecGf3nsRzpK6WsCPNNNgWJogCbkpBwVgt7a5r7UkFPNu27MBNvYBcHHS1NQGHixGkbdG4UQPnHUp638UMRRoftA",
  "key5": "5t79vT9fJwE1KN4NxNksAoKwHgTmdpH25xbJ2S8u7V98AqhBwYg6SQWECBQV9am8baSs8fQiXs3mwssbSz28Byfu",
  "key6": "3qaaak2XTze4cnDdwHHxuvZkEe2YBdAhyNsbVXy33m2DuQ5SoFQtEnjK6JgEYzaCAp9zvkvQ28Q96NDm72XzQvNv",
  "key7": "57x9QbRrgx7wsW3i4EWBRL3hL1LaqyvADWiW7EqLQNEoQ1y7u6aJdNZ6ogQsrpRxbxkqH4oSCnpormQcKMw3AYAV",
  "key8": "FAFPwkGgR4wZv7698MhFEmZW5bF8swDTfyx9iE95h39RBVi67DMqpGLzHCh7S3kNcMj6CgMFWa6o6ndsxFEtr9T",
  "key9": "AnMAuqYwJDr5SAENLCmZdpxrHHczAwohyuJ9Ad4j4Xjt6ojBqphmgxKMqFKp4FUJ58qQpcNt16Hym2uc1eZSB6V",
  "key10": "4SY2CFmJL7tVbiF4VCT4V9DtmDNW9oHdRXmYvTmG5uTZ3gKpayz3YqwiqJ5UCG4ZdJKr1VVfa41F7XPRJaqxeYtP",
  "key11": "2BqieYzbL8Lbm299HvJiZf2zkSsZ9drAZCzPrSg1pB1CcEs4znZnU6ihFhf6c8dttNnhyRtrDBkmdLNdHd5oS8z1",
  "key12": "2iBuKKP3aCeHX1roM7Ls2HTaUxeaNxqnS8uPgxmeTjf6xr2BCqe2WyfwUwiA4R8H4jgqGNavV9pRBkNsdzvySHi5",
  "key13": "4XjoEGtYWuYSeqmTaxiQMUmRLzT6ZjWMbQRYkvDJDPvQMiy8TY56rE8iefgWhddzuw8RQUAyv9nuLah1TnZZmJ3q",
  "key14": "32t7cc29LL2cqPnBqaCKEMgXCF664gkXmqt5eZE6eWn5KGfoeEnv6oJKCiqyiy2Kxqs2vfnDfpbAZspp2HdNgfX1",
  "key15": "2z1mphwYJXw1G3vWjtCfD2M6B7tKT2FaCTUtbeF63u8E64K9BPzSZqVZpCdsN9HvVvEtkF7Q1Q7WnYQQw8PX4hAj",
  "key16": "3TrgUUwpdC8B1jHByKvkpCV4oT85vd8L9YANmcWQJRof7sZqfL1a3gvAzgor6cCREieq3AEgcMCVQBFB3obLbe5L",
  "key17": "fMCgjuAXmo3zQSUz926y6riTRHTu5zU2AwDyo2ef2STCTebdhSkQF4nmf5UNeFwa2JbChBa7DUWtbubsKWH65jx",
  "key18": "3VbUbi53vYnjRU5LdA2B2cxJjTfjZxmpy8Teykh9GXFehcGy5nrnenLhJrrNmMmyFgdZbKsTeNUQZ58Z7kCfukRd",
  "key19": "2RVFyBa5tH3W25t92AjFgFSW52jXPopuCg3mtbhn6ZxiHDoM52VaW3YwyRDh9kB6HtjVAFTpSnddKGLEQLbvT9yW",
  "key20": "3DcyYavM7QrqH64XeJ5HJfRr16vCSxWseqpt2C3UDhoXnLQ1WJtcaUW1kE6fLddKDUh3VwdeMnBcsEi1XgPkvNQ8",
  "key21": "25KSiTpeKHDkNwYjmkvGwkYQmqHFF7PJ4hn97M3pE4LRLpahNDRGK7nkCrV4srMxsqfbKx3EJYDuHR5mab4LANaq",
  "key22": "2BLVTfMpe6FWbtJK4po7T2hD7j4bhXrHY1n8QigKjKtkBfTJmxDDLy2SL7Y39WxScJo5hMFxnuocD6YBzgBdbNta",
  "key23": "3fTFbDXdpUYDbCv2hwLeN7P36pCtxjQndeM8nEV6dB4xFHYNbGmPp3dYsNnicyaJE8Up38CBRMnpFnDAV7moMvcr",
  "key24": "3xhMgaeG8EatxGDhyL4kPpjQxvtRahYb28avgjeLCNKfgz71c5rQbwnUifPrbuPvDpwvRHiEuSa9CujeMWWsiFfW",
  "key25": "5FNnV6rBqnySn4RcL2pAJjufMRjRLD5Ahp1WyeTv7Wb4SXEbmr7Ujfcnqn1iJNXfURtf2oUYJhESoSB5NuhFjMSN",
  "key26": "297MVMi5MWR6JFBvPUJa5f58Jbj7XknJh53K1Rj5DXkcFTNpVXPxJvmZgAkdUN6fh4XU7DceSx8njZrtsPr1pbcb",
  "key27": "4boPYPqhGg8dwteB9zfM34Ao94Y9CCpWn6BeG9CgPwq1KY9vNZ5ZP9qXuZRyiYU7uwoKDM8KntQou1Pjw3Zatq2G",
  "key28": "2vPcRSHppzj5PDNdG1dXEBPZUuDAcibUFsvogR8wsSsfDs8MuMsyMGCooqdjUyVmf6RbajAeGsUDAdV6jnHNBaDv",
  "key29": "4Z3PtNwRyDDrygfhtYTfmFmmYwKEiZWnQrkJxGcC6J83p6FLoNLnrAxGCckWrnKttDA7n4vU3tADJdfchpXprmb8",
  "key30": "yNHpPVLTMPDsDnyLzvxqNhJELyvYhpip5SuHw5CfVHwnTv2DFfr8Lj8KzNWiChtYGsfwJNNDGg2s1rpmyMc8kNi",
  "key31": "3AobTgNj4CjEVow7U7N6a8VRLPSKCsvRpydvziHQMdHYPSLE1HiQj8cAFBdknToUsFMrhM1q69a6mm4L7kxqPg4n",
  "key32": "5WuAs3tJmEQJp3PkS5zhQJ2K6mV91zNrg6T5nHEib1WPJfzhLgAcQ6vYpp68MfVkHh8p9Bh2bBDP4Wm87qpomujF",
  "key33": "475rr5X6x3kfPQ2NncwnoGrvpyoy4m4e1k9WADwVrpoRG83RipDW7U3UgKAPzHLvysM67DUemYJZd36WHhfk2WNq",
  "key34": "58VkUTKLsPhCApXesLQ2ANPkeQEkUGWXoBnoUfTFLdxCghhVh4yogZHSto3B9KrjBjCNqcbWiZwyUtKFGNDiQLY8",
  "key35": "niriNzqPwwar4QDVYd6W6vFwxcZFA5ZN6s4iHajEEHZ5rH6UMvECT6E5gRbrFkhsMbfwpZohBGvKwJwX9knEJri",
  "key36": "2mMAvXW1dyReJNGijPizoYBLinnzuU3h8mwEYtL3TtMCuMgnWnUWDBcqpfDHNMJnqkuNWjmceFzi8R5q1HZftATM",
  "key37": "5Xwk8gFgnxKBHBpVTahERHC6ZAP9mYVxdcstcsPFZDYZAx9ydqx5iip24X85UBE2bVn4rWzMhjW9rzmAdbojLT4w",
  "key38": "29U8Xc2PumRK5VymPfPAUUb3kFsQmzzyyoHweytqi39yK42M3fiavhfz57PXpxivDMiYbUzfJWGR1VBUCkSiHqyX",
  "key39": "3F1DpWnwQ4it4GAZpRL1pNy1iUu8P2xjxZpzehJ7XkeW3GZMVyiMUUFDPhnqKQskDqTkUo4cqzZCzP3LsCsEmXgg",
  "key40": "5ecPN8cR9SRgubMK4fLvGCJZi2zSg4hdMS35vJyqpRNUKD5SA2CMMGbQrYkZUn9Y1zENS5okY2ggQ6NJsn6CMdrA",
  "key41": "3rw13REHjpCcRqgPRvgd6yK5MF4a89QB5gm51HRJCawz8h2pBhN9nyjLJYu3Ff4AyW9SsdMrNn32jp1xsrQYdFxp",
  "key42": "2br5mtcqkr3ExKicNVAtrTYSYM2A5gH82g67GHqfNvbgrEjcW8rX7gfmnng2frRETaRW5s3ReGC6HiiAYFMWDwGY",
  "key43": "4dqkBUhqsSQspmzwgr2BrcSAfNC7mZkj8k3Eh4hUehMbdz8f8mhQX7NmSDhyh4b6NXfi1QBRr4xPsnJVd2Fwzg2s",
  "key44": "442R94pnoeR7enhA6GoRkC9mFFbtwfU9J4QmbM1e6Uh7tg4o5jn6ZZWLnKcKNC1AJ1ZyhsRfiegNESehuqN9yjcV",
  "key45": "2rsoRe92USkxgvPLbRYKpz4DVF2VhjDMRM3WUWc9JsRSGQGNvK1L1GTatW8PvaCnu5B6SEmwJCLUM1KrKbkaboR3",
  "key46": "46wMdJK8J1HrnyxX67MJcKtQbX3pVCrhpkRbPK15DoY96PTtP9jaorFCYUoqXNLDGbh25FuBwcDHHSoMdc3NNLpb",
  "key47": "2hD8XTY4gwbzpnANMk9uyPNzMAcunMJjX1fvqcpMeBygQrnGorazC1GDevBSw1ioyDm7bqFYTbfE7n9CJTyUz1fv"
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
