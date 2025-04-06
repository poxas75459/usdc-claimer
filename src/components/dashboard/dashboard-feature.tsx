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
    "39MEWCRGiJumcH8vayxdUKAGahDADvnxFZB8HXT6odu8psjB8ywogxb9WtrPpnHA1kpq8wKtD4LTx7Q2tfZYMwrF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "H6uv7x6LE5VybGEsV3pfnCvaew5K5txNGTWZJicEZJYJ8XHzuizpnJMpQx31prprSPYp1gW3N8NnhjfgJqbCQ87",
  "key1": "3pQ2fHEeTk81pQtNgXAis7r7cjv55y7NcmqNAgYuBmmep46p55fRLrPTMXrFa7K9GUcQjp12kNpqoSWzQ7L7t7LX",
  "key2": "2Gg9mLk281RR3LLwEUiZ1KbwiaskTbuV8RELEndWe3XuuKP3NNGrecbVYgbWsxB5RtnW8v8xxsErcHu5btECdnSG",
  "key3": "4y7X2yr2qcqUFdz1eHYAzAuSrsQSj3o5kwHF5rQ4MeMS883RjZCrwfXYu27tstjG7Wa75K4h7Wo8guSmrQqTKj8p",
  "key4": "6459XYhCoK9eaSaB6NqodZpNytetxJ6HhNx6n9G2zuExeaqde9m5yoFpAp8mi6Bzp9esmT8Q5Zi1s6B7xxRgLTc1",
  "key5": "3nbHne11qp7hK5LV31Z1Go2Md5ZMJqfkFRNXZfgsDqVtka1N9ZQc9X8UhcaZNGdUpYcezyVi7QC7dDon5q9sfmcN",
  "key6": "vbRAj7gLsqdPTJoKSPQ28hcNqHMaF8ff6RmGzXYUvDakhFy3mMuxEPSJRF8D9fuUhRQzECe6EtYRwifKW7o8r7h",
  "key7": "5tox4kNHDsJtaLf8tZFwEYLBZf99qk4qkC4UU35G7J91M1buUY2bfTCf2JzqbWnmFRbtdhpqqhhfx9iToD2oF1pp",
  "key8": "6mmNSkyEFV5Dv1nLrC3DRmWJFjofyutC3gjevZZHfgYyWPtJQtgnqcP3ovjeshhv7hPmH3cWNsDwEAqGhc1muV6",
  "key9": "2nFatXnSkczfvDifBqwLee84wb3LDPEsW7LFVCTP1sTnRxmXzdVsmTzSczE22nzijYx76d9xaQ9FdifeSm2xpv94",
  "key10": "sY4SzUgxoVES6YH9VRBUnjGnWG8tab56KDnmPjnNE6exJqVYYaSbkAypzbHK3z7BHCaMY3xoFcpuhRknhesSBhR",
  "key11": "26dh3y3r37W26Km3UeAhhDrFLpjgVm1iMmNm1e1KWF7v6HXjKmAPA7vA3eppuKde1XY3g2dMzF56PmiKL57ThSXA",
  "key12": "ffKAaYR1Nzea9zbn9jSL7sMRfP8FcmUBkx1fNPoSmdPZCzxonw6XaYpgjsL19KGVfqyfJQbqf1NruaBGyZaD7u5",
  "key13": "4fXCyNLz77Ca4pTqEANep5ZpwTvpt6xZZpaqpq1XGJ3ULKLMJKtRps2vkGP7FEfHqFnHRCd4EAYVRj4vZiGaH9W",
  "key14": "4mSnfzkLyCxNjnmAeh55rrSwMDm78h9uyJCFcaBR3LVdwnjz5SqdYjHM21wzJiXUvsEXtxthmGQNq93CDnPL8MJm",
  "key15": "5BpdeFWF7AiNoGKh5SFpey2dYUMB1GSXgDK9ozYhJg8ErSmZNRqdvqk5EakHckUQWXGPEY9hnttw444wGjZKpE2T",
  "key16": "36f9eNm6LSvko57DzQHHVKX31NrEdmWEYSiJrewxGvZUP2BckeiZQDE5YtBNQWRVmd3HRuUVDBeQeKGrXXDQPejD",
  "key17": "542d8WzX7rJUUHAi7oxPJn7eY1tzfsSsUJKYLpKx1tb6i3ekjHqS1tcH8K2RtqsSUCqVFkMPsnugeqd7ekaQnNgF",
  "key18": "3ibgUpQCd5U9gcuMXNpacpQdsfFaa36Gmg8HkvFDX4hYfcA74WWmHy5bnnS44KXT1X8YEYdf19FzqUC1q73pCTge",
  "key19": "K8FomHi2La8Qz8CWTzThXp2Vqi5SBeRZTTeTG2JT6aSuTnd16WsKfzdoWKvFgVKRF2KoU2re2J1wgSpsU3FVhAp",
  "key20": "32HNiBPRp6fMeHLJpRzGnx7awxJzNSFrS2kUkPFYWb75NHJcNfpQAXLNrSUESmR8pn21vVPgtMycFfJ58C9vc1Uc",
  "key21": "5d6ocdh94fP2nn5KTx8hV8p3fKCTQqs3wf4fgwTQfh6v9p5fTFh8UNFhE2jsbqrQj8PzSZqULEhj9tRYFuqBGFJd",
  "key22": "5CNnJnWErKmAuvNjFtzyGdDHRAuJzqyEuafM92MzDKZdpKWqDHFVLGCXNJVE7fJz9y4FcHFPf8zFotSqnrcKXA8U",
  "key23": "5nkkoC4dcr5UeqeSvUyor7ytSsqhYTHXaCiAbDtY6QK39HdicEsjs38jQhsJQwgRmq1Tez6TgdxbxxqCpJgz6LmF",
  "key24": "3U4uPbKvEk2izz3kSpZWvnG92taASjchRbLoZy3B8YfiZwhfJ6PigwqXNU4euAaci91QAY3YANSvk2G7QshacC65"
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
