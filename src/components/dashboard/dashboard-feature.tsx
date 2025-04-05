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
    "5xhLDFaqSJQ9KMUXNkARdjKxaQKBfxLhaG3sDi5zCj72QQA4o42UsaL6Bhc4EsKo523Aiq6G9upyeKCvexxVdhDH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BCDfsTd3kAKF8zTEhbQZTuUMCTAqUHK1iK1j36KpS1cSNDC35z2scUsH8P7DSzJCzsCR6JHENGZ8WAhJsHg4dMy",
  "key1": "5dj358vLhbv6TYj1UkgkCStL7bFbZUKY6gmmrp5toW6ZVz5DSmG86RyzBsmUTjiwEcxpqZmkdr5UpVaKRik9ahsT",
  "key2": "5vbZx7oR8oA7TDZXEbzVN5m9bbfKNj3me3uf6rEnEiLmej78LBv6dKKFYshfakJgKtGfFwDPHoavdwnjUyas5MN4",
  "key3": "uCvsMsHpKgujCURA6oQyXbM9uegaVVXoBfLRjHBhrVyni85HXuE4rcUYZA55SwEpKWSdVQPhnj1ahuKpXuTADxp",
  "key4": "2d76zkjw7kuxPFugCY3C7cmSTXrebau73QapafN1GpM1462c7VFgiVTLVPxozEcQsCUASZHATz46F6uWWVn4vTEF",
  "key5": "3DSnYYsNUbgfyJrYEfwgnUFxHPXjNqNASdatW67bxomei5kUiFSHpEDRfGWEqWbv2oJbKxkiCWg4tpt6qtetoe87",
  "key6": "4KMXFz23CQPBY87uzouY5XLsPvnJd8iXBwTM7gCoZtQ6gp6z7GvxQeqkEtyNRivyHazJPzS5a1Z4kZasgiZLaAeg",
  "key7": "5R6jCRm2cS1zgbp1G4QxaQ4QMC4cZYnQDKXYNHNSMwZjSfeKUFp5n4GiRfXrCMQYjVsKEvhczA5xMSmRzuMHgQXi",
  "key8": "uBgcSDzLfXvvnmZmpPppp57AXV5ZFbosx9ydkaESnThLG3emd2qUrVD3yL2b4LaR3LP8UwL9vPR8eyoHNaAy5GK",
  "key9": "ckFAFUpREYKF7HDxwcWWMMXCGowuHjoyS19yDjdvZUVBGXQYH45QAugigwFLFDYW3Nti9fo2ARnTo8zht6vzY3p",
  "key10": "4kmYTbHfyAnXFa1Pxc45J6brLhpZE8ww4NkZwpDepPJvrEGHpE9K4mAFmTwanQLgMA7bwGURmxdm9c2LFQBbaYL1",
  "key11": "5DHijPsgu4beKc9GznHxC6EvfsHucgw7wUmgA7dvTZjCpeWS19z1SRjrFGtWuHMQgeywAdeH28f8xCaUFkxye1WN",
  "key12": "63LWsh3i4GjdEG2i24vAFYwvvMxr6kLPZGJR7esCwKMQTacCekwLc2nHgZdpwudw75LdkuNA26BM4FiwcdwWi8G4",
  "key13": "27gzELwK5FT3y9TcXiDuEr1XSUURxi5SQMmDTc5ZNiMDzYN5TTkdVjL64yCbsHygKW6ZiasM3uhPeM9mivHXoXqc",
  "key14": "2Wvnz2uGEbz8R3WEWfysETuqqaeM3TrJXxLcbKjkHBv8iNXzMVx7jmWrcLvyaBz4ojFvv8AA4iLv7TiNcTpz1bb1",
  "key15": "62DPeJPNVheYhoYYj7XfT4PBNoouakdggSRccSaheEnYvfDKMXozfi3QEUvQvfsFErAXhrubJKf6KT9FgZKRAQn3",
  "key16": "4wYUEWTz2tVcRSDuDdDQ5qgFqGvbHtpnBkAYrsN9R3ZfmPZq77dgJQaPAdgonfvF3ya2VbaPDL7bjBQ5K4Xf8Vbq",
  "key17": "59onsabhkiUvoze63yqRaFuogFyikjLoBsaoWw6rkTRjP8hR8SnnpZC9mwFJZ1ZRpVXZFNADFb5wAhwEiiTJ8tAv",
  "key18": "5CDbC3efcCNJyrjVtwt4MBA9mAumyP6gTmeYRxLBaEeyBAhct2cMb6gvfEroSTkdQ7xnqgWWVs61c1vW9Vg3UEQh",
  "key19": "2CAxW8URG4N3wdNLXaaTuJ83vf6yfo4xmbxyZqb9UgUFAME4kknioYggoKq4u63LidZG9jsNcSEEzizrXEBpeRhZ",
  "key20": "54qhyGaEtiVhJriXZJhEYBbh9LSAL3bCyrmEcCdfi1K66utnJWRjeu3pPn74crNqNA3QRAghVFefc4oujdFfzi9i",
  "key21": "32PqSyRriiQx5TK8hhwEmjASxi6PCAfJVKVJSP9umj65khPPZB2bLRhLbSG1eYKY6f17zfekso7fpxe4xrD1gETV",
  "key22": "65SoYDQKLqsXdyhURuuXYzXzaXdKc5CuwCU9ePg5K9A3tRSkwgHH7sPXA948Rgg964R7x7Mk1B6re8eXR4q6cK7V",
  "key23": "3KSU8qDgLg4qXLzXSSyiKvGdNFpU3NMFUC3eXPdtuMrHDf1mDDRpwnXyDLeoSfKbE3CVJxLrqzdFH7yEGUFTHGmJ",
  "key24": "2KJuARtY9QX8Vf7ywf7PzrLGZzgg5CKBz8YWyC4zZMN2E4H1hjeTxQArwYmZj7igpbVx9T4Ls4TbWzE9WyYLa7wG"
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
