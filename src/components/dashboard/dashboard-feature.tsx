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
    "2Y6UraxYWBYSQsQtKf5f9Pp9DuBLKxhy3PvAkAEi6TwawXbyd3VYoAWNBjnobrxiV8JDCre4teBAQdaS5SWgZ4R4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53uFPeLFdp9kVtCH37LNXA1hJ45wQwyXC2Bd9jyrahbmRFHnBr58teXz4SGsGyrdkLGkqidToa4A7e5zTmVniNRX",
  "key1": "3FuFtDJEkPx6b4T2GLNkic4xiNXohjy3SYq9hCyjffU9kLX5qw6ePSeiqrKGQUXrs5XuXcTtupLy8yt3mQkprgid",
  "key2": "cQjr56Xd6xhiJXn37LbSR1bTr1LozWeda8fhefZEEMGNYWtUNHHDUhyqq6DfxxnAEvqDUNAd3EwKx1Ca6f2WEDP",
  "key3": "22zA96YNHWXFRVR5SETWdkCLdr1cXFR5G93An94YkWjytTWR698KTkJNmB1FkazhRiJzjwmbNm6JuQy2po1H8mZm",
  "key4": "4ja8AzF2SbRSa6bRWkJU4DqKJmCu2vfb1H8ivCo29P46owvgRk4UHMfcB9ESgqEUFuWMqQt3Y989sMNJ7V72J1TA",
  "key5": "2AwyLPcXGey1ST9YdJryFZnbumDfdWQ5TtmzwW7wrtzGZYojn74UjXB3PEw3EE1XGtoKq1zk5VVyHAiigt7b2CwR",
  "key6": "jSm3zdb5yr9fpT3YuCtfSPedpdg7WRryJBZmPbBSUwaAxmB4GjLx1Jvwrbx6QTVSQPatVKsRkgZYLDqPAB9y9Hc",
  "key7": "5mRtuzt1T8fk2MGw5mTdcQcjJJ2e29BhsvhXQBPgPSBkVSZ8GuQjJa7cj6mH1gg1hks17XqJVw7poUmCs5fqtYnf",
  "key8": "2eTvNd7DDjMp3sHnrAFjJRtRX8h2LSb57B2e55zeT25qhXntxs8LeHxEo8Mb7obsi62HdDMQwiycpDniw4UmzLRa",
  "key9": "2cyGbVREMwn99EFoxCXihBZh4nqsb54FtzvKTQNjVqngvzNHYo3ux2b31n71gCnS1iwyjpN2V8Pgvo2dGoro67QR",
  "key10": "5NRJ3ptcQkMpsTrsizcDHeNTwYgvfjQfgvcanY2E5dgu4Wk26zMhRqdRCGE6dWJWo6roaP5rJrd8sekhKDimNaZM",
  "key11": "3QTZtMGbmGk68UKthRcerDm6AYa5uhkX5DCaEYK8JybP9kgczGQKVV6F4yZHCbLCoAhVBBqYdFcHsxGEw9DjkWLW",
  "key12": "35wxwamW9y47bzXVYv44C6HwmLUc2giNzBDZ8ZUfx3f4YTaG6MWF2H65XE5isUCZpJDK6hDsr4qnZJRXskgTmrrS",
  "key13": "2tKViRLWH7rPFQUWogYhfnSXUawWAwfk5gQJtcCUhzTCiFiMGv9UxeAGxbhZMQBrRiA7NCgFhXsDcz2eho45Rn8R",
  "key14": "3mkbToqcxYvx5PFKXCnmRqkiyRCBB4CnJoq7axTWhas8eVSoiuurSFgxsTMWZqbFy23M2oVUZ37bYVfKuQdigVGN",
  "key15": "5DKV4qA3FcW4veQsh1MUGXKTwvo8et6cUXAFH64wnuTF56g9ktX65Sjan3qUypBwUt2YDgYyNwFzB3UbCckFjzAn",
  "key16": "4nZhUf1NdooPg1YDhbZyoea9bSV7iWeHSJm1EkQ2miQEBTBeRcU8fmKdHN1XZj2xSritAEBL5j9EvRPBHctsy9Nd",
  "key17": "5L2SFYxBBCg3KDmEv8dXG3dnWB29f4Jnyc2wRxC3bSMqbWjeLe4PV1cwqn5Zpvi53SVJZbhdDM7XrQYfLTccitpF",
  "key18": "Du4JBYhC8dfmac274Mm9CdHpBR5Ne6sKx8CYSGgtcwF2omCdpDbqyR6p2vYkbqJs1T5ooZtNN7nyXkreSjs7riH",
  "key19": "guvuuMZMsre6UiqgCQSkaoySXASXboWBFnrkrJMeddJqb4GoCwyZooehexnW6PcTgcLMLXoyZatqigrELvEtmjD",
  "key20": "4LZZ2gVt6VJzCJgQwwG2WmuaAWpqwFLb35ALUpnTDyrkRu3ASjRnRmVyqcndhkfcF9sMPPtfVp18veub1rdBdif9",
  "key21": "2iYJHz6cCPf8UbLh9B8CQgAvFcxwirGvx5oGwvdFGiQUoZpC8BbyhRYh9k6NiiKgohbC7wB28QhYqmdL4XTsaivh",
  "key22": "4tzZt5KsxShnCYrhnTdpuQvhnyY2LVPUEYKVza62pegvSnFBaFYBoRZGxPJUB8uiNW2eA99rGuVTbZ5ZpVHZb85g",
  "key23": "39fQiVhfYtUUMW78AakEeae9fquBPdUFbGsh1vc3e47uJPxuNFMp2nUm5XsXXsbb8Ybd7DkpEpcGJ5LcngZGuKp",
  "key24": "2ypM75FdfkzCSdRSvHTXthmCsfzDwFSpzDLXJJtv7veG5wPtQG8QCgDNeT3QFD91iBXpoWWpYtaqKV6tB7mM4fUi",
  "key25": "2XhPNF1xjawingyvNhQA8c7M8eMRh92tdHn8612RaEkzgLdqJ5F7VyDs6AyAaHRiEKNRastb6vkbwkB2YaqVEEf5",
  "key26": "2ooosabKnBHCwrMEd9p5RwhQfB3b1GaCUDa4QP5MHdSg8iNvdVgN4r3hkZC4u2e38zijjtjskrHeQEMqbH56tgeM",
  "key27": "52HYXgPnLSFE8WehSJagPWJNifDAEFR5sxcmyGQasz2f3WZkeeSF7drCyfJsmTxAThbEbE4HtNWEpf4sJ9SUBDCK",
  "key28": "5uGLuYTFFAN7WYVwZToeodUFNJ9SjV3YJTH54aE9LBzxU57XGTDKLnDuAuXxUepr22FTJww53X165GK7P3p2Hc6r",
  "key29": "3G6VL7NtHiYjnw25skEdtBHubzwz21CqAuiqBQdiQWamdrAWpSLGVtPvZrcuMAQp8GzsVbwZvwJbR4w394netxHT",
  "key30": "2jbGrbEywJLrVmYtsswVPQNsn5uZFhLANu3cfFbMip2t3VAUHE3goDrUSZcGbzF6VjPqm8QoQWrasRtWhB9cFhZs",
  "key31": "2pmX1AhPbYu4nZyq4zKjqRGWFKEREekV8Fw6CKXpJGwggsBEHb61mceYQpLBGQjaGUWmQEp6azW9QHv3to9iWuPZ",
  "key32": "64fiNxY9j8RnodsCJQhrBC1NDeiErvS77mRrav3ia6pjkJCW7UyjhavNvzh6u73tn9GnAaRZj8s9Rgawzu5MaxoK"
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
