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
    "3yMBcPHV7BPP18HmQ6mmYWajLs9agKobkjSKjb6ajz9hFefKAtFjhQ9HJkmZqoBkVPZPC5BQGgzvuBup37Fbhctw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zmNDVHYv24otmrshtAF8isJX5s5nLnYTCoyACf2uf7omaYYEw2VXG8NszXccLfc5eQe7AwjYqDWaTxQh6xtgeLn",
  "key1": "2cj5Ew3ycfgrRYi4rEEEh3SVRSTkBEPQFiCg4SYUt8w46S55zBLLwaje7WAgFtFn82SY4yMZEMPSiHeH7Qz7jTeZ",
  "key2": "5ZsotfpdZt4gSsSrZtSurAxbDoSWmBVbxNiL8E8Ncs8QamwNFGMVnCzLXV4KkqoEV9PRfzDzH27iEMDFj1X8GYMn",
  "key3": "3otDrMNCcWrUAY7Tm7SRSLhYhzS9N2AzmZ3MfvvtQk8vWtzfWq5Hw9NTDzpmVcCLx5SoWBpKP3QnetBHKq33CHwS",
  "key4": "2DfaHkiftyHDvtvJ3aaApkAdzWUJfqz95JiKyNmTedL7saeVtmz1qcHva1YWuk81hCnyRgcnhBqezrMGxTwaUZ5W",
  "key5": "2d7SvmFrgZJuYhkwKaH3SLs7KXyPUBNcKQyJv6wHNKvHFMk4k9CPdeNqjo5ubPHUdzGYdP8ucZSgDi5Y9sCwMhDS",
  "key6": "3N137aF1JPY8CtnBGLtXLw4sYW9zQiSAhevqhwGWjG3y9w5rcQkW3K46uzzCob4UCTF1UYg3csBwSz8p2svWadP2",
  "key7": "2o2FjUQGhQG9zjefu8418MJBDrPVLy2ysBAAYKQoAXCdQzat8rEXrFKvXkQ1rQ5GsuriVatj27tsmPnW4mu9EV4i",
  "key8": "5dJhZrzq9HshgC62kSTzyCaQFkR1vDtqurQXnkEYEZ16P1QZB8hQgH2HVtR4aPPkVeDhKrsgzpV1UUeLw6JWxC98",
  "key9": "w4tGMjQCxC13gUgYcriXhFuT9Qcbdyr5AgdbLaydhPfindfa7JcG2HPmFXx8JgYoknuzj221PEdCUamKEh5r9xb",
  "key10": "UmFWRcXEYwpVo3yC1oraxx4ApfydgbVhjmq5aJxzwFuALnfwDCCxLf9TvFb699bbKH3dp51uSpAoMFnHxUDnae5",
  "key11": "5E1JmmGAvtM5nsk4ThFDeZ1fovpwBfc88snFwgY9DiWeCWCkiTtX2HLsChxsAyF5GoThLyTroVAXCCcgVv3v1vCr",
  "key12": "4zVyUgWosoHYvbbvrDKw3nsNJBVSRjPRB2jKLLMahJvnNXZ8FvYt2wUGqVb8B1SYdazgHMUBAb6oBmSzbLeykLte",
  "key13": "dyT4NHFUt8CVP5ak76iHzh5odey8JLaFc2gaSEgwMTwCqdTLX412YSs5YXf7fBBEhR51xPZVNCZwPrLBe2Vs59k",
  "key14": "3BdxCc3aCs8nf6WEEePepTac2v6BwQTZ1a5a8mq5fYj3XEUH4SU6cc1WwiDWGsJa1ULrTYTqPtsdJ1eBZAxdhXhT",
  "key15": "4pXyfKvTtbkuAXg6ULRahVoBVRodRpzJvsDn5sDSshXEfFpn3vPqJUaaA9Ev2dRMjL3xsSrGiR6ZZhsfahVBG6kM",
  "key16": "5WsWhTPVVXrpARZ32Qn8bMRAL3DKLiwKT57MfcCNbS485zbVLShYBtFUyo5Ghiv5foKY1JG2eyGDVwBfkYKAxy7e",
  "key17": "3emcLhLJqTjwzCHNJYG6yup5SRENha8S9mhasjRjz9CbrtNNsFmVbYV6qDqP1UM6P9uUewyd4TVFvvBP1jvvrY3P",
  "key18": "2p6U9gWrG2KGvnoAK3MDpfsi9EaXY5bpLLRYNeGKcN4kXANXqxYLyuMxqWDZAVcxWRwfhd8mBpNGAdbV5ze8eR9",
  "key19": "2RBGe16Fc8nozecRps4CD7VHT2duw3S4iZUFqmajrL5y8UMm4MoyHo9towENmHJByYvM6qufkw3XepkLcGeVEZhQ",
  "key20": "3sgkkhFPcvUZfrVtdqXtEAuSiqVvBwjue82ANhHbXzZMLHYEyGkrsuVeEFeC5onxdSWoMQ5Q9H7R8xZv2kYvP5NB",
  "key21": "4ic2fXrdBN8MaedsVmFLBgfFuewMdXY7a4wsrXW9moGBDpy2zRtD1HiGLErB52HujiDvN7qvw4CYsRKJA5QjWroi",
  "key22": "5TYZN6tRUysu6uiKU77ULNoFDzSLWSGYhUipTCgiKH5uHqSKF2URgE7QhSPvq6nBXRWYbPkpxAp2vQyakrkg4T4",
  "key23": "5S8oHgzoCMz9cU7uB8LJAEBkVnKr7QPnxjzHfwWc726vDDAAKvGmbQnDxeUnpocNd4LRSHazXAvsjRNtmF4TogWC",
  "key24": "3pnSZpB214nyesEhMCp9r8HUfWttWp7tj3NjtEDSQQRZ8HvjcwnNAWWiBSik1PJ1xJyXZ3VT3ukkPcZJQaX1vBRG"
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
