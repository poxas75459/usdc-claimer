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
    "H3ms9SDgo28QbsUh5yd4EfTPPVonPidmSM51gpBwAq4ytnCXBRk6n49smQPSnKWwzu71YYiNiFZdk1qo6A5vmxr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52wkZEjqN8GPrqug1DBnE9UhuS3WCtdNbXxKdiw5fXLbwV6uhi77o8zA63CAd5PUCnP1zx5ucP1RYPGzPGrB72s5",
  "key1": "5nUPjak2RYPEAnq9XpCMkPnLVB2qJXqyQjUKbcUxxDfjY9YBeYMHrwa8iV3AGiqj1yTUmaqoZ4kcuFc31SQtCwjc",
  "key2": "3b1sKESWPa3ZF2gj5EtjqSCJygYcaz7X6dhRU2syutvK9T57QfdVDHuLpZc7AMHvLJD4Gk1uTugD7AFRydBepXDu",
  "key3": "Ag8qV6n1TMZNeTrqCNEAxUJDdhzWKyz8LY4BSQ49qaE3yzSvbYPYi6ntTUJKna1hg1QaAzpTzyZyLbLgzqv8Xf9",
  "key4": "3juHXTZD5hcDC4QBQp3tgBRi8tKMyrduFcByKipXbFSZjQqaEUTYhPaEcu6NMqwxvkkgRR7jv67cLnqMRzgK4jp8",
  "key5": "4qfY1c2huLq8a1zSTYWWNbi3mq6kk6q7R4ug3Hvs7jRN4VGc6iG2AK8oHfA86eVLpVjBZn5E2uoRV9SN62V5jA11",
  "key6": "MH3xXReLeauVoFz8oFDm3gFHsrhSvyqBdPmhQyY47jMmFEXvYmnFy2WJXr396mySgrRer5otpBjaATMMRCYF62g",
  "key7": "28R5cJdbyaVmYyuuDcqPvPywmmrKT782gS1uacHMs6qvEwuR9SAYYwDqLv7a7zW5M45ebN3RFmxvSgWKTh8636vk",
  "key8": "f8c2W9AxYcytAduA2qGwgQGdsRghpj6TwjahK5pgSrNJZtU1TkqQ1G7wXHXz7sA9MRTMiDftKWwzBt6hoSTeWMw",
  "key9": "vkBvKBcYjzjnCiXVjEX5sJDoXf5XU4xnxoBzt3r2SGV34PYJ7BgZ68QZqDPRap7UQ3b6F135BfxcgTALzH4Jxus",
  "key10": "mDuyNFxWUxCue7uY6wBgxwF86i8tcu1Gx7cNY5ciXcUwpm3q1uf3PtAtDPx7HfbRnXr9A9pYyXpKCN1siPyMQ3k",
  "key11": "3MmG3RDSeVSAwRZHH5WPcpVjfuifJhMmaz6qMRjMLo2hkf9GUUQTP2m4WpapnoMXcMC85UaRemGS9Rqmhs9CEyah",
  "key12": "61ENqXhArS6FyixEFPggLAGyNSARvsfrmWtGGN2pYcYzAjyoMeXxzU1Zne7Gk2EaZtrB7aj1ug3dB7iC22AMYJBe",
  "key13": "2PRznVrcJEZqeSm8n9nnBrimTMAqwFB2erayQ5vSTCFQYCaLBqFgNdTHtt8k2aSJ7p1mvBhxUTcEPdhhbPSHbqjD",
  "key14": "NfeV9qGLoRk6Sps2cG69GcTHH9moSCg7tiY9xUQzKFXeESNNXLSLwJegwZmnL8MnGXsMxfYsqcYBtpDnutHtx77",
  "key15": "3PQyRL7eMRt9FAGxmN63SACGXGwWBSBZtdafATmi36g7fixWNr3qCNHiC4z2XytExP9g3nYDFZeiQPBQrGUZGv9N",
  "key16": "2f4Dz4vGc8JtQ76nsSN3RbZz6F5EKsAfEF8KpWMiKHnAdHvSpVDdzqKZRJptBfmx3v7QwNQ18WoAxCdo1apEtKTy",
  "key17": "5DuBWRmcjYjvHn9Jfw6iC1Ng3HxSUjss5fd5p3dzowM5wSousRcYH8ns7wE62xu91fvCFvnAg7njVkQywLKc272K",
  "key18": "5MGJky9pgyzWn515PfuGnFhiBUMsTy6Xc4mvtYivrwAT8dZHUT9xdRhtQW2k6VtkGzi6CaGpwEb8FcjuW1KwZHTV",
  "key19": "5zBF6Cpwed5xY4puaLwSiDw8jfKn5dJHKHueoQBpZ3yXdTK55x5gBWc4FkuUY9iRq7PrDrqgkTy4ADhqERT2BK5S",
  "key20": "2p4rUMxaWF7wNErGEG7ydwH9zsXFQckBznnGuQuJSugSZfCeF7wcgRoA5PQRsoWXUFHWrXx3B69QLxXfme5H68zV",
  "key21": "3yTUQkT1jcnJ6yASmEP4XZABGGYbTffLz1Fm146jCV3Jo1P13FLf1RRqgPxEfaFSFd3446jXZiFzVVGtqShmXsdq",
  "key22": "3qKk9gZYZckJ6MznfZL8sWt4r44mv9cmfJ9RYW2e1NFKuzaoMjueQRna2pjNwRT7rnSve6HE4XVHLo2fv69R4irc",
  "key23": "39g7d7rxs5W92bnB2PKGpexgNdK2sgg6TrsjdB2sJjHRRdvcybmQbBRK6fU11LKpfpbHrxycNibJzszMLtqdCocg",
  "key24": "idsUfTv3Ncu7cBkGtmVAr2hLi3CbJWKkyS8jmZBdNkiVHwMtyumHyqDxRZpnBHqXwdezzfeRJ2oENkNhG6epwMY",
  "key25": "2iqQ7nzz8H9z4Z26aAJS9WktvAsmUUMMv96MN8gNkih8TRNqG27fhC59w2zy9p4dYsYft68GePCJSXZsTuPuFdRE",
  "key26": "SmzznZ6YgkTyokbkfTinPdV5kXsjjxV2vvuduMJao12yp1cQSFSje5XkUNffRJBiCB1k3oqxGiWioMAvPq8iRCk"
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
