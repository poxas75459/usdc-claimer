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
    "2eWfp65P5heyD6TNv7xhALbUjpJUxiuEkSkJXTvGvNiz6TwRTxL2z8tDumHvUt4sAniTGq3quJMn8ibswuvDJd2G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3T951rGbKvy1XEGpvTxmUMsZ8oDRCqtEamXEFyhWAiPz5XFB8ctBZB3LxQaS1U5cXt1uYSkPqxw1NQaMUD3Nw6hP",
  "key1": "2Ejovrvt3fqURFvUmQo2CfjHe5MtuR6xwGn7PKPPPLXR9A2cywM6W7c3ApdSc3txFGz8ex5d6FK9CvLHQSBWVvGk",
  "key2": "47t4aScCXiY9feeMY6Cwi3wVgV2gaSczV77CMYW4iebtQmVnbki9UNoeqBi2C4Wx8SbHG15vjbUprd1qH81kwRBG",
  "key3": "2poBFLXJeX94H5zx2UwJ2DhsrGPqYrHtTVVep135VycWdLWHk9HafpQJma9yqNbd9sPnDrD2nFeMxHyWiBrsFf5r",
  "key4": "2P2RE7VtmCaxbn4WcEi6qpQqCKepjUs5kPFhVLuE4SUoXkCC9dQkQHaj8hFAP6cp6fMiZwfn974BeaxiKkXaTvS8",
  "key5": "E9vkFbvuQkVjTmoPEBxhs1ox4orP8eF5mXp5B93FRvYWPazYoPHGHZNWgM5n8ywGS278ZTStJyCu3kG3t34sdms",
  "key6": "2U9vk2sAfeGqnDPCsBo7PEW258vrCZhqGGU3A8uZXCwQGnz7tSn1yj2S5VZecVcs5x6n3JJkMcYPdewM3fDsG1RE",
  "key7": "qJuikwecNH8RRPhd56nChZWKYgiAVeHgrZVeSuz8LQvVGXzhVBgjrDxhkbaDQHBeNqF9XnEbHbJQ23RL148sZiR",
  "key8": "3UPkmkUteo3mREYSZVL85danTjAxDYUNrvNDcrJYTjT9oL8XX938yoLZ5uTr46nceGqJwe4Th9uePU7wHYr8BqEQ",
  "key9": "2vZJBorE2ahHisJrjAnT7jFSKR3p54jTbpyKJFLkLqVhof9QEpHSE8tgyv4PKSBwoQR4ehSyqhfSQ9Q3nAxrKubq",
  "key10": "4hytncT8ZvN9rNnbqZH6AT7ZaGbXca1SY2tuC7kPy2k17nFGegCfhdQYBoLoYcihWnMNiejmZsN1KA9aCifdAmQh",
  "key11": "4dA8UGc7P7F8Henonrr7X62EcAReqNp8BHoUki6aExR9t21f86vkfrTYfawoSwPUkXe9sdaKYdxBFM5xWWNrtkv4",
  "key12": "4v35N6yBMWJESueENcqsfQkwienC2xzMEnXuyV36UZWAaT1rvjQWBuo65SiPWCRpfDDUshdJ1pHsVtqU2v63DLE3",
  "key13": "3M3YJEyb8eUv6oFF9ZaaihMp8vTQ7V1t1nDpPVUs5og1rYuMWQeYiVMJh3HkcVieBNTKR13PJVD4dK2wvvmEBTre",
  "key14": "5CAdeqpBBnaD5dfZX3PjoTa2AagfEEGVt4JtTLMXG3zeptBcAXUgfccUrSxeMA4nAq9mQcsMrneiNzAu6o7TncBF",
  "key15": "34m69aexvrosdqZkQALRXmjB3p3HrJtNmm25d8GQdBiVNyQd9mijR8h8ivDKszfCbL6zC6Fo4KQbnwgbHmj29vVk",
  "key16": "3DzYqvvdKgaR3HiYQ1QEwVuee68LBuixVLStdPXYPct49VwNqkX9DUX7yawuDrqNdt9mzpF1zckhwwEhEN4g8A13",
  "key17": "3AKT3ZoNxtmBJJduQcPZ746hbk31b7A7RAeJyU1W3Bn5F5iutcHtkqCLCuDNdR5QLALJ3ZFvDV6Y8ocSVm6kxgx2",
  "key18": "4HY4rKuvthigsDCoCww8uMv5dWpCveWDW4Q3N29mVJKRmB6yTRu1XYXsU2bU1u4a8MbGU5kwCfSJn9WZFMcCavF7",
  "key19": "5Y7NuPx1U9uRzwt28NzEuVzMCSw7NJKwP5oMWTUnqZjysSxRwBKLxQnqzoRaV32YhCNUNRTneHmj5m4d6aue25pQ",
  "key20": "4YmgFWAHsEYpTgksQmEqmx6ExuH7N3jHm3jPLs7zawPsEuDmciQ1mFPYWFjqFwuDJjtxvaw7MNtpDPgCUEBoFQk9",
  "key21": "25cybGSZF4X1BrUHNa8usCANsTUY1cJbC8vptAiJ5KKrMWTzgjUFQbZBU52zuw7Lw3EwivnfyUhE7LeFHe6MsfTm",
  "key22": "2NvFNncA8FKLVtjiqKX8pD4kHwGQ4ky87ZU3feo3LMCaxCrvkDW2vm91MdW37TJn3ohPf5KKqzAjfff2e5GepTyG",
  "key23": "3zfZoavP7Kf53eukjTS7f1xJmEZZzPDCgEuESG3vDin2152qMMaiuDzY5gagXqw7kiov4siAeDE33JX1mhJZ186M",
  "key24": "5UN13Usm8rtQrwnqneXL66jzrnUgKfkbKiKEUk6kCWuf6e8oyRmtBnDrLSjVc1qGQyRoXCTX7CWGcUXJUpKu6um4",
  "key25": "5fYGWQhZdgP6qgg3kuUxHJ1HMH7zaqRAZbYPBqp3UuPGeHzZF57YtJzTqCHs9H8oZ3Rujpp2r8C4u3XHRXSRe8W1",
  "key26": "3M5cKzJmmHViUSfWQDJ11MULkqCxTxVJihDCza4oLqi48kMBDKGAofghvREypnssRkGyef6iXRBiEGGKD4TruBJa",
  "key27": "4gWHK9aDce5pNX9PWcGBFUs4jd1uXDUqgTNgMy93AC5MDuU5awwXAr7eAAYskzYPXeP8iQ7cQzBUq273db5J7LdA",
  "key28": "2ZtjPqn1b9AkcgyPdRMT63htDSLhoPdkhbrzdCnZtLmdBnErd86TdWFk3XwAR63vB3SV3WNDexUg1gvWu1BeJHMR",
  "key29": "2ZJ3YzNKUZwYdw7eCVL3JGSy1pERSSMXYGw5KGh9ddfsY6i2KtTuZTjzBfdtvDuuytBuNkg4xqRSX5ssATKvgdeg",
  "key30": "4oWNxUvBjDng5hnWTYNrSrj9vgCeT4gKr7QVqv1n9H3TNXiPVtpg6psxAjVQNQoUSNnMcrBjc12vy8NQNqBVjaZe",
  "key31": "2JKxXDRK41Q7ppBPDkuNtFHrydRjmeiyv93EHwMaVXXCRq1tRKQ3ejbEYWpR6yxiiyPRB9JgCg7wiLsSr8fu89ME",
  "key32": "3iCoM2zLKqvHn5rjj8Lzj5RVxMs9J5pr4TLh7bUSHMTNBGcaKZCM7sW83QeMhjUkoXmNfeBveXjgbLijv3v6jeLu"
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
