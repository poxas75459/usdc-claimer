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
    "3TLVJ4F4JyK7T9A64xBubZr5aaY9tNLikiyLqcb1eF1mKxPEjvRfAh9zLqL3ckFmGD4fRW39nMYVVvonLoMMDTa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9WTr7NFiXdPVXtHEGhsPujYK7jMta2UgsX3NHhyrf5zn2PG2CNNKypBScg11o5ZGRyHc4nR5n4DZjNUmfMRzbet",
  "key1": "2DHs3KypU7t8TPoav5XtgwraYdfXABW9nYLQQwx7W1LhnaSBfE2bFHKZFZqVC77G7rxcaLQjB2su28EpsohEiTg1",
  "key2": "sWnA6pwj2Y7nH12W81kuqRAkw7Boa7kzs5BKsTyLvhcmb45tuppuYcNExX3SRQT4nKesQN3jk9FMYXjQGzXpzdN",
  "key3": "7RVsy6BBprqEXuJTDNiamZjcN5AtBF3FGmuHpaztLDoRZXnP1Ns5SFUFnKWMVpsWWRp5ommF5mq7p3JS3HouwES",
  "key4": "2VS83M9V2sLLxc4CXFhHVB4i28VECkyGBGUqxLjHP2yk9b4MEYgqnzBV7SnXnoppHpyUUYYUK59r88GiUCC8m35Y",
  "key5": "ppkEiWpFwVUSsvzxZF1JHpbp4Rva3T3HqQ1inHSqqo4PgxQPZoKRZ96Qb6qLipqRv515MbQ6kHV9XXzfe7fm5tj",
  "key6": "DHBDkYL6GNXRC5zDEbrpvBrKYBsHiXL8Z3ysdRYTiov6bhTkXgTqebJWnYgknXpVYTbppPLUaaiNpaAYgEpqQSe",
  "key7": "pTx9bsbHGGGbdkyMsg4N9DkH68bMLxGG1avvSPhFVNBHgKkA2jia7qiGkNSKGtAoBMRhHkX4AGFtbu9Mz9xrk9R",
  "key8": "5cdwJSF8pVvEWWdnCneYbtcyXSPgSVa6WXsTKtvniG8Py14ruyW6FSPrd2HNGAdKw2KPv3YNiVgbeqhHB4MhRhFJ",
  "key9": "3vPVdvvV46MDCDNhiKp4K3yiom9uXrGicksA8UZLJopPzDrSPLBZYh6cYyv6enYAF86mr3SdFGKF99X7F3qR2RdN",
  "key10": "4Wjd2FuXbZyvDm51gWP1WsZbqeooh4qTxecMmgzs8tpk43inq15VHM1x65QnLsbYZgiMQ638eN5EmN6sJpTC6x5o",
  "key11": "249BrycwycPx5V7BGBRjxD1q4iH33TjUerNtxXwtNZ25anxU7VrjPTFunsF4i49W9C271W5q8T4ifdjvVmTuQbtv",
  "key12": "myTHViNmyL5KveuQE6VQGaMPAMSsfmBTJyUqZ4ZwPEEKivQCaEyw7QDCUHh3haXDtNPJFcm4cutVQvQFs6drKZH",
  "key13": "3V2LbcGmgT6niU1FFd9oLXoQM3PBXkHooGaxtVtS3ZnZroYzgJubpzqnXBYp6nnMb4SmzZksA4xBytLJb1zR7o17",
  "key14": "2K5bP5AAjQd22615FXjVkKu7bn7K3NhMKHjk21x5EbCzYtMWiTTtKVt7kT1AE3x26NSVnP9VeaYALZd4HeP45oMY",
  "key15": "3Ehm1cYinxVVMG6Lu5QuKAQrPzhkYgq7MsosFvMTTo75aUqGR2kRLkCWMumezMscWWURFshYGQ1ikV74yCukwmLF",
  "key16": "4ad83i14iQpuiTquhFs4J1fMvpDTJLVuraZ8ppsor6NVdMMGPkfMp6cjZb7n7i5KfNu8kCLAnirHxrZh1s21FyWN",
  "key17": "3pBLdQ6VsfBy3deS6qbhS5bsvM7ZXKhrAZipPb7HdkWMYyVAMaM7182AoPvtjTjYQgkoYcQcQc3rpQ2FSgVEFLJ4",
  "key18": "75xG8sizjrejdjdxYkJZGNGR9yyWKbWCNzbHyps25ttPctup7dR48rL6PbtNvNkXDttaRxdaErdMvouT1WectFS",
  "key19": "4zhPLMoiQKmfHRPig24vRhnBm3Huy913VHHQ76rueENiWWWhfg7UZ2PYVxquFS1KQqtSxrwodz3JbHqRArdXzoWw",
  "key20": "5HTuQFjSzcbJckfvaGQk69rWne3H4ovcuodGGojnmfRhHJXn4A3hVDtxymzffRNAUJhE2cYN1ik4WDgysf6p2pek",
  "key21": "5vnoJazaqQSER6BjfTXtqvcKqCQLt25xpvXWEAUK3SfwS94LebrcsULLJTVkzXmcPbBB5bfw7VvZZiE9Wkm2ihHV",
  "key22": "28TH5SeF94eJQRgty62x7ngtiiPqrnRpKy8EZ8S5Y1bCapZ8G9rzpziaCBwcLg3LDie9dKzSVuEWrggFtFJCE9nh",
  "key23": "3v7B1eXuZxcfCQEqk5YAQESXvkFE5Z6UEi9cKGpaEfp2y7kt344Ydai9fCsqceRAuKRv8kMr7XsHonBH5RyHrHj9",
  "key24": "ZUkdS5FWdw5n53KUKpN1MGG76ht4WXiRCAenc8Ebi1mkrn9mzCXoWeun2wnuXTwEDfgPyg3bobBgDxcCgm1RZxm",
  "key25": "uJLT47WuLY6fsGhv4qAexkdnP2mUxXmSHR1tLqPsvQefR7LaGj2BccaZ3DJPGUpAZF9HRNv1U9iWFBLrjZaoy72",
  "key26": "tjkwsHpEGTiTRNRPCR15c5LtvkfL4zrmArijCCKicUc1JH6XniYrwd1bNFKSkApShNRhC3wtfu7hQLVUHLMsquP",
  "key27": "53tz5rbG1gd7drKpSB28t4VsMk1vrW1f8pkDvY86nNjqFo1FM9k9Vn9DhoN44PC3qRZzsWCuugRfE7xvYa6U2Dge",
  "key28": "2VyAxrw7MBWa5UUcBiCnhYqm53QNQjHXAT1S1z9cqAzaB8YHHo6ZpMMsuniVXgn1e271Ni74Vx7SH7GqXBJPKnRg",
  "key29": "3b8o4ymcBy76wnv2RjFy3r72bznr9GCyFC9bjSBjPxXfZVmZytGRAGq5V5q1aQwE1TU9by5RUAfDYUzaw9xyw7ec",
  "key30": "4s9mFeVMCh2vzGa7K2Cg7kUqwtwpyBfmQqC72V6AmpjDxi6qzvCBWSFtDSZ248byM9TXDnBQhT8FcT9ZuCxnCdWa",
  "key31": "5sPqH5N7uMgnEHv8fFSN1XdhxzXatiaqZY6bVhgARyyte9NYh9fPWa9a3SPCRYMk9inALQGW1oDxHnf5XC2SUbbQ",
  "key32": "4KUGRWRKKAvrHHDAgxWbT6zcTzw7EJ7YfeKpgWUzrkxyvZedxMCwqTN5oAmQJ2RGVwJvc1KNfEwWkKWBRwiiUHrC",
  "key33": "3BAxFRDWQvNm9jQbUYRfcLeN8ZP6ms1vrimqSYLrSmgr18ADUoRC8hYnZUXNhATM9aR6MidNNtmCHMqrbgLCJgsi",
  "key34": "5T4smSNYdVpKkNwKDqbnuXBmj6R1wrTDJM4ZSiB7KZGXopy9hbNayfRyaQWNbPH3QMPU1fYfYpw1RDGSbf67kuA2",
  "key35": "5GNcqRaQ8k3ke1qKYkSWCYpaCfQweCh44e455TkYXg3wMYKueG7hqWbD2w7Y7PkGd3sMGNqtNtNnR8SSapipxqZU",
  "key36": "77CkjmM1rWrvAA1BisspoJ7F4KwWojiBL9SJQNe9DaQK6Xm8sbiefZLyHNAYfVJzTUWdCP4AnA1ZUuTFjyXwQLn",
  "key37": "DKBsKcxxngrCzYf8B5NrNMgrHLNrkuQvko3fRd2rz37SsTR7EtpmZrNC7g3A5Dfr4pE24rLE3NgAUWyA7pFSuDG",
  "key38": "2w4r7Y3NHGdSfN6y6MBcGYa8avGtxtGn1PhSFGAtaswvrULYNqwn5pLs4t5QPpp9F2xckmfxsydsrqekMsHaGtTK",
  "key39": "4Bv87LXNLL8UjYxxzrCM61xDNQtaug1a5EJiKXowAy3unxhpDiNJhiD6xmZzvvGZzpAzSFU7ShP1ea6vQcG8BUW7"
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
