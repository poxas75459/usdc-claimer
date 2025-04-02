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
    "xsZVcBZffFZpGziYRKweWXVtTqdT9KxYGms1KGo4HyHzAKXMygr8oLGuxujQBJ5ov5ZaBCLAgw4YZjKQNNqzNEj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35ifHWPybuYv6qX6z8WRpn22ZaW7z8HQmcP62kkpZJdj7TxpLN3jhmqFFRFcVxg8k29N8CqowsYrworqntXPDUN3",
  "key1": "2dVfeiigr8yryxm5LbhVTnGBE5TBJ2FTjHtxSBMFfK6XBbUQ1yrhc8ZUP5E8PiPgJw2xW5D5JeD7efzQUrfJG6G1",
  "key2": "5wHRCc4bPjDCVEP7M13uBn2Z1KTQ2NwGnH8kf7HLmWFSeLP1HFHT8UH5a67F8ruavwGEXTb6gWSFLJkBkjb2vLha",
  "key3": "7V7s7SZ9sRTaVfMP2hSEujQ2YgvT9QbeMZrjx94esMAxqWZrFa59hCj1AnDcqjqGXj223fYyHZZh7jLaPTQYXgg",
  "key4": "2ekZcJjVyYGYu11QL9oyWZpFqXqEzAKspp9gqurNYaVk9rKPC93w1KFJi9ZH29ngLM6gKbadyCL5TNnb9DQYy7tw",
  "key5": "3rkyFJLuz67q4BaD6hCPgZDHJNhMTMeuJkdP1mDSx6EF4x8XVaouGimMeSwobswPZ2eS11PkBHHg82x1Jheid3Bt",
  "key6": "KFAdukX6ZErVkdA5L3twoZoQSpjjGSFu21QqJnfYsF4u2Qq3csTnoKedCYe1iYwzxsNvYEHmxds4wPEwczB2T7e",
  "key7": "5Bn7Kexy5RdborZtCm1boGWdbRqUYVq71jkQnnpft45BqWzyAbLFSKKWKHBrtiJYnLjSqrG15dCU8erdcGYqQuB3",
  "key8": "2CayxaE9uEfs9RaieTKewdAgdyKFZSAYgZKXivsDcbGoKXr6yFgEyXADCnPk7ax9yfHxCKu2iAShNBvmSp8xjRMJ",
  "key9": "awKj5QR7YZtdd6NgYLMYC4Akt3boBrpRZDsVjEU5pPaCYma3NDtH5gthXT2ZKATNWqcNwrgbm9exawkCMhpbxWQ",
  "key10": "24J8Mwcq2pcDaxJxFyb98CJqZxwYBHtZ46H9wrTcigdmQ273UpTaX2twywK3ctqiNw8yhrrTpXtJSHMm9ua72WVX",
  "key11": "aGofTeVfSjuubszRZDhiZkcexnoJMqKPHfPwF16oJUmHxgZdRZ3jGcHQcDM7B4tRa4vxXVuPEwYw4EjUUAtQUeh",
  "key12": "22KeF7scQ5mepoDKX2CPBXtQEEAaShxRF6KBXxu8VZvEs6ZdoDLfGRGCmSfonWHWxBnLSEtsL4kwE9iTUBvcYDbR",
  "key13": "3dxqTtM5xQYsGmeBaQuonDsqsnXkQkWCpmyJwcPPtUV7GBFzYPo2BPWBtbUMLcK288CF8dKSPYW6dbUhaM2n5GiM",
  "key14": "5Ezq61hD55TYJh5HymVprYV2TJF9WzcVu649Wecktnz9itw35qqwFH5UQ4sfwPk8ze5X1BiXHpLDoCVJNuqTYqxA",
  "key15": "3RPi7DWLsee3wnjJkLAQ4vXQRCpnbm51ey56mX4inw9CaddxUvRjy5LHXsEPoNrCdBpakvweZdqZdTzWqK5QMUSh",
  "key16": "4Tv1D3XbEm1GR2DoGBzeA83GySnXtipoVB9kVWZ5XWx3vg5hCk8A3ePMznv6XrbWPpp2NsBjnp1v95GaLKQM3NCw",
  "key17": "PESSHW31Bnf9S9PH41FyJsd1A5JszV59yTtCJECtT7MKzTkJJs6T2TGoGM6QcyDmUCsrEjp6NnZ78EF3YgkEXqg",
  "key18": "3PQmH5i5GKLx5jnaM6qmpifZfFn8sC4VB4jRc5sQK4AHu2rkhJPzf7vxFgxNwnrLouZNCAX2BozAK5voMq6UJkFG",
  "key19": "3m6w2VaNZ1pvR1dN14HASxayJcLM4NPccmVXys8Z89Ky6Wc9i5ALskrvj8ih9TrHMhpzp9ZpneKqVgXNxdPjbFhU",
  "key20": "TvNwbJDQ1uXggricMkZN4qvrmwPZhwBySdmP5PsKPqSTaQMYbsJRtnsV4Ljx3wyPQaNnymYHAqxXDZF6dTMDBFQ",
  "key21": "2tBBPYoBTfeWNuuiiUbMUBc3E3ihf7eh2zHiVmHN1Wym9HhbHirFXH8s9n1B6Kh2XoVqewQac3dXtaNUk715BcFZ",
  "key22": "4sKdzdnuCTpXnNQQiTg5jxhCHZr2BYJPtBFwVnPn9Chi1bhRUQRcqD4kUDT27NfXmWLAZxR1suX4w2nshZ6HPasR",
  "key23": "4N7Kqe6BspMa137pcExptrMKpMLmEo2WSHindWbj8KZjpsDutS6hjwwtnZTHUvyJvxMaZYtUqbMN45hM7mHGytSv",
  "key24": "4qrGnZ8PdSn6nggZkvfE94y4n6ZdhRPFuKfNMrB7saTu5YAYtjgW7hAA99nMUJkuXHr55CjLtkeoBvRbevtJztxD",
  "key25": "4fnfJ5bKfabWxvy4DUngFcnjmAhDW6dD7zLVRZN6KfFfHxwMmPJ3Lk7UMVV3vmg2WXSDE97rm8s5baw7rvEzrhG7",
  "key26": "2VQRY5eU9NfxiH7oH9i8pJy6umTPiYvaj6kJEp9kEDLhSGWPfMrMm5HemQEiEgAkVDAKWBrCqyp47EfgCFAA9Hz9",
  "key27": "5PWKSs2PFQaF4Uy6hKQEMVtU345gRUtAEJiUgq2ZK42qU3JCcmmhxghaNPcN5G9wsuQYMS8U1fNP9EybPze4VMBp",
  "key28": "J2J6GVS9pGeJibT686KCLMwtJgkwaS4ziS9RohU76ds3FKLsfzwbPxfsfHH7JgaK8j3pSvXhVt5vy4NkRCZ8yaJ",
  "key29": "4R4xu6goNj1uF19ogipsCyxhkfjdd2KvtkHXEKZiaWDhMvdjPAXcpTdsmSJ2n4DqVhfjLF5cfRiwkkQbF3gJunAx",
  "key30": "22nQ71SHS6dJeDcGDTtFBxA3HhG5qbUL6HhsfAf46K7KEcjXtMY2QcQsHePBVCNSvFMcWZ8uHw2jXR2xQbDwss85",
  "key31": "5o5xkHncC8Pvj45L8xSQAyTPtmYjjd8FLfgNr9pR75AoSotibBGSB8iMHHmtEq4b4PN3Z3AYDuUDFu88EGwr9dZA"
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
