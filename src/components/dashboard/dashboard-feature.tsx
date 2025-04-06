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
    "gujAXWGi8Y8TF68rXrwzdeTiBz9Bke1643TPMDfSmDYDP3fScJeQ8h6UhR2rEiRGUNF7EAx3nVax6Cc2TQ6Anny"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3enwKntZh9V5HYNjjjLCVUwLp5BxZZGJUnLGVogCNp6vtaQZrdAZ8XTBA9ZT58EGJ1te1FJ1gwQzM4dC6KPfUCHh",
  "key1": "3WWch9XipeXN5gowZAscCx4DM6B83kWUwvYYK9VcFRxyAMzrkhPW8E58QK3up6RpSg8MoaTfSeJVWFMjYAq6RqAP",
  "key2": "hdcSHeKRChZMg6VMaV1G28oMqiyrXKzEhsTkRCSf1eWE13oHmTn3QDnW6d9yUUmM5qdGEbbjzpCXpbNzz7zqVDd",
  "key3": "5bDmDHWim5ej12NbNiYa66K7pi9wMahDfjoRA66NyFKazYTTQzn3dg8oGqaRfNpXBwKLPczDvNozrnyfGn5wAbaa",
  "key4": "5dAgCYKoRJAMWngGFp78D4BvzYqsh865VmynroAE6ZSrZYmJ5xDwyR85aWBTMAAmBjw83E13BvfySA7JCyCeF5aB",
  "key5": "qtw8nZybVhGmkrxEgrq5RgmKTBpB12zS4Gg5H7DhozYzkW994UTh1b9P68aoXLPSEDB8ARVTqo4XiMyJqUTjdXo",
  "key6": "5aU8EhQsAz1Vqwy74cj1cyNihTfG4EZiM3huGt7LENwFZJzzuAnaJ3mgsYmaJzXrvBfTuT9fN7tHoSxLTzE8gE5g",
  "key7": "3GtkW7Ndqz3Kk9cy3MqxYPtG16TDgRs7GwFpMA5vvwFtbt1jHWmVuErv2KYNNhXQEsPHrjbbzDrYxxAkQrebKVRU",
  "key8": "4aKtbVU8q5oshjtXr8fnLyJbno727ajgGZWQSz9Xw2ykP2srJtjpNeexeVEkUKzocjE2YhktZiXdBD2XGHgSrVxs",
  "key9": "5359eUYkypTJFd8AKP8K1o6tHX6ziZFqsxpwNJqTvZfy1Lh6kvETMqXn1bB4pp9RQB7PR12TvuusXXHzAcs3VniK",
  "key10": "4mWuhnKQJeAsmS6S28AjMd8qv4paBbNuMyzux18fZpSXtpRzuHiv1gCS2DXKgMQ2LnzsLsha5FbvfDner8PqGTXw",
  "key11": "5sRBxBxMyRA4N6V7zJU1YTEBgGm35g3dqGfznFVwpYAAkPBQB6UHDcFfFyNzMYMjb1ET5tG8Wdf7H6HgqGH5ZquJ",
  "key12": "LuttRvKWuBV1Lc77FT3EW2WWaG2cYPD4Kh4mXYszxutwuKFgGgvMQccShtpayGXnuDJ23eY1SfxFKkbzcmVt9Sz",
  "key13": "4FdQFcLfHPHGPv1XLCBXvpmSHsiWtdrmLA29nxaoYzd4xrLxpQQL84AwrBbLrqUFxapDTt8KUcxSieNTNcVzuHPJ",
  "key14": "ji25pDZKDyrwz95R5sYkneBJRSmHzKXQJjzdjjQg5BcR4tCeWKYi3YzfeExCKQAGaA4umfj6sbpbQEtHVd6iAPZ",
  "key15": "DRJea1kQeeWVJBefUbwjf6GrxcmKDsPCH1KBBEK9NbdxiQc5KpVGRDC84sGJeMBrGGpXct31UHLhuGPCmAExvfj",
  "key16": "5G5P1UzDnouUrTq8SLTF8BAJGSPmBCfxiXWSfnLsdcawrx8d4t1T4sNF4G5XCYGmKLHmUBpP1Tin9SC3t1pqatAa",
  "key17": "4ymLWgCXoLNTnt7ywktrkCGuUZkFkzso91rSK2taMo9FTLiprHH13iBDHvkgkzyBXFf1DgqLe3YjoXSAH1G6mMvY",
  "key18": "3wfJBm9kwQSUELbqCyjEvEkupKNQxZmtWKujtcJ9VS6HyLgyiCJa7oQEDZrMYCSbDAh3vT2tZiNxzmTrNCDrYzGh",
  "key19": "127aNWpkSrNZhi12e4q9ouA27PPhykM8mJ3mVxnAyAeXnAXSoHdNsgxuUmhpnN7MdeNQQgoftk6b2KTNx4gdoaB",
  "key20": "336hZbgcTzJdHoDGE6c4Ndy1pc4Rho3xU2DBNr85fx6ypRupgJaHg3npXe7heJLRkWv3fRDXdYgTwsYndAEhEKhn",
  "key21": "5wGzMnSuE123QMHK72S2P8nDiR7WFkdF38rCZgXcb2EvyYGVEt5jrpuPd2A4ibx4SroDzf75H7KHp8wzUVoYKVK4",
  "key22": "hjZyanGsdvdjWKrFnRcxcnSLHrufFYpo1ULdL655yDjzjPhnqRiV6PUPe9KSEb1YkrG1kaZiDNqL7831cpNDWim",
  "key23": "35q938Vk6zMYAEc4dNsRLuNvMasdg79h6tmpCjbTJtPGbAjpYT9XPG1Un93gGEWRF1uUZTrcC3RsTc2yg7k4qGqu",
  "key24": "YuoBwighJdYQjCrD8HqtqZcmEhzd8wkffsGKu9owEAZqb9EuUcejNppbA7i3XwuDtcEjP4ovAnjKdsFhqDW4RWX",
  "key25": "2YGjNu2PrpYCcxJTyhbo77dYF63YraD1TmvmB9mpvY67aSZTJD9YMjiWGz4EJrJCNZjkNqYxPQHCQ9fHQvxLzDAe",
  "key26": "5cmVXNoR92Ei6ckuFz8Yenw7tJ8uQLN1No4ezAiw3YkfnoX2vcyLehzDjBe2iBTsBty81j8vAGjEcQCTmkX9EYUQ",
  "key27": "3UypLbtt8rn32uGydgM4GZwrd6ijCsHBnrRG7hd8rAnrJykip5cCYU5yzuZv4X3Afx1ieTs9bw2TQEyNHzsVe84W",
  "key28": "2dmjqfqJgk2zFSEPPXMzPfYnupyEd5rGPSVmKCM9htwAaScvAeW7bUcpWMFZniCFpNCgU3UiB5wAAp7HKQb14WWn",
  "key29": "2GTau2tbxjF9YdA8GMcrkdHzmjy37z4y14LzDHMKH8Q3nKytNXYwN1Mz9RryESb2DwoLkUrPRNiMr4XmQwCnmNF2"
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
