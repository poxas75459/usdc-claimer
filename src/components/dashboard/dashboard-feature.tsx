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
    "2Cnf8g3TbXpEmEskagBTnTkfckt4gU3F6CZc7N6newieJvp9kzvmVAvh7DYApgnAMwBSQXBFeLveG5jn95DiMsY4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3v3Qnqyiz4acCJdV38x9ASe4t1EP9SJQ2rLp32HuMmKsaKk43NhZyoJ9pcGkHqTfKJBjvY3kUexwb1akumBGxwtX",
  "key1": "4k9evjjDS45PLuf5MJE7QsMUEHfHTMbTttM8YZpEKCEbqKrvUJQBmdP6MW1EBvnP8ZocuKUBAQPAsse37CorqjLC",
  "key2": "242fv9BpDfoQY5NWRV8mbgaNe22jL1BF7vR8HFr5mtem2qniEcWsVuLX6LJvSzDHCiiVDi4zRnGEBk3Z9TMp2Bz7",
  "key3": "5tYuUC7R3otBqW2Aa8KboCtz1EHDofsL2BFWgwLi66FR4zeZ3jJ2EQrqjeonX9cJBoNhT6AP2zHFEBcuL4W3TGXW",
  "key4": "rdzPSDMhwcexF8NdHUrEZh9brUTJF8WkA3jNBF2zhLgek8jQA3ykKe5Gs9L8vZCbrZc4GTumBar95v3neGBcJiw",
  "key5": "4VXih3mKLGhEe7dskh8DvihpH8TkJEeBxURFSETDAZ4uPkeGXiAEawSQJSNTWPr4DoUeaTuZetktiwknLEjh5qJV",
  "key6": "5xt7DD3Et9EnD7yKRDqnvA1Z9KEHdCtmg7QBYGaKQoxQUnDtaBWSHdWbPET4RByUKgdcEvTUxzAGkQjfhYewzvDt",
  "key7": "55uEk9gwWoHxhHT9E93VB9wP9gJjHWtXqq9dqPCHi6pPWjxzt8yvTAY6zuduNg125fday9kGqy7bRAqNjbeFa8jz",
  "key8": "5VV3NaAiq5XqCJPHaYST5b5NR8tSiZs9Rdy5qSkqbEFzqGBet78zoDYdRpH8XYciYS53MHZrN9R27X5Cbmz5x5f1",
  "key9": "3umyYsQ6Pha7MSFoU4xwuHgfDeqBJnqCrevkDt5Hu3GZyjVVEZkxGGxwaSAmTwkF2ELUp5r6c3xLrCQgMcffXA98",
  "key10": "4ZPPxgbzRtJVyo8RPZbUVoEek9L5SDyNew3vmesnhKzk8DgKz5mRjsduCeumCoRuGBBtRRe1ZdFp1G93xDu5ZBE1",
  "key11": "5FcGrxDG9zUrxQU4ZeAtLyr13cpLJhhYfr8PFLefuRym5BcV8CJgy8jYbbwgScDKFHbbZBs4QnkrHF4iX8cZDLHX",
  "key12": "5e85UJRH9kpG1WdtrXoCZyAVdeCV4eVe9tQ8YG6oyPzNFXQwCxsTk468yDuQqZ5MeSzyUUnU8Ked164rpGGM8CxL",
  "key13": "2c8orGj3GxcttHZwycMpmy64JfENkB15Vx8iikR6khaUzzoj6M636dhUurVhwo6XFoNkV19EEEtMKerfTvwiYDNR",
  "key14": "4Bny5phg9vu56dj2YuV6eym5iy93RSpi278fjgB9bFXVP4oeFCru7Z7A32k5s2k6dSBGEaLeBxMa1cN97jtBSH2g",
  "key15": "2B2ik3TnuUBLcMG4WTzEygg3VLbaW2gyUZBQzZ7Lg73zFRsHFVj2f9JZjQoZMtGa6xsiRB7fRuop6M69iUoJKmm5",
  "key16": "5murseHnMmpXj9PsXomPBtKH7WsY3287JekjiuBTv7bSNWjunvsMPpZDVxnQNiqaKJL3CErRWph75kzTWkpcRjmm",
  "key17": "4GxrecdMru4FfVbCgeW5WhcgWc6US9TB3eFcVHfrpGumqtcGG4aGtQ7KXqk9gD4qby73BfKAbVfcxhWPXyzTQ7Mm",
  "key18": "2HR3Uo2zmcXnPZYbhtd8f1pE4WJ79busJesTxJNEM8LWJrtEmiTS5EUYD74fjohEy2S9kj5GgSGoE86E71eYEen9",
  "key19": "2eNjNZrzTEk8czUdaKcJJH9adFp7sGHTQqfN25CRgXWYdta9tRRJEMLFpVTk6pUBYfgDp9EBKwU2HPnScWRKfPQ9",
  "key20": "2x4FW9QjA61hw9jDvG7JRYg66aLbxqEF34haDGt9S2ZAEaLCxDuHAfnQFMFtQ92LtHfd1EbzmpES53guX81cqdkM",
  "key21": "tazYMqkuU1yidXD7s2T5q7i7XkxXVLrGipioGxxsa9bhVADYPGx7DuCHE6AVxdBvnbcso7AcMRWXoRjNB6y8iqE",
  "key22": "2JczGKvGCX8jXixB5G5pVxTxwzQqzD5cucaK5fJnfqVA7rmwLcv1mepNP4k3avtbuN1frUFDV7pTpw1nN956Gz4U",
  "key23": "3x7qvRNsGYZG1rieEQkmvQBUzafgHvFPTbUgygB8YtHsNxG5Mnv7hJFzHLaweNhSTBKyngJtAAyGUMbD7AqGaZ49",
  "key24": "2RU9soGqXAgo2TWxMJWuXeUDzBtBU6yEQjL4snXuxx84R5qRcKabBBt3QiZ1kWKL781vthjEzFEjmqJiPr4Uttku"
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
