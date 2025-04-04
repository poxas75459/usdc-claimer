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
    "29bECVJh1AYBQTdZnpuiibQ2rKk476BfAhjSQrergprwbZEpovpYNURQm7zjRKvnAZmjnX9b4BR5gydNA6N2qfiM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44swHPRQJGDabumSVk5dDYaVyBiam3LRmXrsmpcXPLg69eo1rZC5oZEWFsK4yu2dcn1qNk8mhbEx1d4LSEVR4zyV",
  "key1": "2c4qsmT2Qu2uhyuJWiYcegbD7abH4kqkfBbLHra8xvsSQhZiNp4WuxHZNx2DPv16AM6MZzAhb99bawwbyo1TPXDo",
  "key2": "2WvUgBJp6XzwX6APuS5iwaCMtR4NyF7Ty7ydTV9TcvymDWH7JKjCqjKJ425MdwYkuLkQY3TvrrR3XjBsYDh7iDvi",
  "key3": "5aXpqNrVpCurtJQoaT15bijeD2oruTReyFBPBxQJepDnwKEdWmTTpfKMVz3aLXb1HstC28xsCNLsreMrmaVzQvxu",
  "key4": "P3oebrshybg4wHYGW1tSLEB89gX12iWLeJQV2MMcyfo15yzDtph6xsD3x2dFdXZ157KdahSt5zBM3GKUecs28VW",
  "key5": "3qc3xmMpNPgWGneiBpt1XXQ63wvEDNV9GmhQ8iz9tSjuPBTmwuTbYrf7T4bLwPd2Ky18yAaJ33uSHReuWV6e3ZLc",
  "key6": "2Hx1hAHgy56C5UNeCuDTk2unY45MBFTLGgrJhHxRUtsqBtSXs7unJRMPCV3SBHr2tnkiCWL7mgscnaEj5Xy58Md7",
  "key7": "3KJrEnGwcUpa2VvgkkPWx3rVcLkCV6p8oR1o6Zya5q4ibnqsNX2jWGhBDqwk3YeyqWQYsQ4eZPTnM1U3VWF3B7ZH",
  "key8": "3TQquK554LwbBBSD1B8ivuCkscKwRk7fAvDUi52pw7NK1zMtmrA94RYuuTqf1ETAvdAKJaZSKjBjYfkWdWocwYz7",
  "key9": "5X82ZZYccHoDsADrTaQ87GYfpFwdwbNnS4tqkiYcNtfwa19g4s8n1XQvJpMNQcyRu43Wpae1ecm6rtaGNshVXDd1",
  "key10": "4fe5gEQCNFbB1We8JvZGG576sw2SaJdtApyti85KYfZzFYiMP9fUyrRc1TXreeNvHtKLBrX2wjZfiV6E4niyWgML",
  "key11": "61RwXUCJmxBKHUFUZuzKV4Pb3hELN68F3pGWTKCng95Y5HFo1nD6RsPMBvW9DpPNhw3G1pESnMf7rvdB4fa8cU2w",
  "key12": "4pLBw3exarqC2UgMvGVrXUvZx7gBQ9Lmc8Fij4UaaamPp1Bx1Bv3HHGvS9VQRvXzcSA97rxgZhRCia69r9qNQtBK",
  "key13": "62JTH1KmmKdXKTswcwpc7VegJLCfHryzea9ZeTm8ATqkZgZVBFaRUbBsLaCJoZkVQhMwcLvLHA2Uxh9gTLiirMtQ",
  "key14": "2Zum8FNcdKbKKwEvvikWy31S2viP7KgMMMKEX7mXoPW8jUxV17CqQ4Vp8X23Kr8AmAhbiPx5pqgKhUnswdh7zr49",
  "key15": "3Y4g2dzEUz8rotjtrSu7AmDP58Kmga9tRc1YBJ6DRzUTca9NdpywYkroXckWMn4eP2ghUkFLBA6vkKD72ijmxtpU",
  "key16": "5HUJd2jfPN7TbXiVK5rJg7tw7uwu5dTodtudGNCpy2KXidnkZyE5Q7a8KfujnfF3g7BTzhBwwfGAZcQ9L3JjjkAL",
  "key17": "4KpHD43FDVfADxvCMswQ7s6sMivsZBVm37mDNCJbW4x4nhdpDxC6TqY6uCw59j7rA7LGiqhJqZb23KVeDioApwfK",
  "key18": "u5m9QLYSfgguMcH3zPLo7vRwesty8RjPCnJib72v6QhaCu52djME8kBiTJhfrW9KgEPi84cJpZfDJtTPysSyfKY",
  "key19": "3HEdsGjoCBLcsbKNKdxLvGkmJjiUaF8qRU9qfrvnJKhJVSkoLNJTF4XkCgFnuKq75ykJTrAgHVLpC5NueTg7DNgn",
  "key20": "B5BPxYr1fe7AycMjAQ3eCkb3vJqYruFFsmU9pLkRVUmDUgST8weHFFWLhrC9vyoDXNg2mKVs5UCnYYqUFF6pYvy",
  "key21": "yS4u58sft14NyEfKtLMwyaTTmDQKzq3FDm6gZ1FqfVgckmZCBSBankjgKtKERdHLbEg2MVcB3bEWSnbJbEQ7mAK",
  "key22": "44emHTYhWdbVE1wURaS2R9HLY8s7kokyCzX9FwjK9eg44qJFc88UTVqWYc7LQitqxZtUGmHqDeH4juX4WEWpEov6",
  "key23": "3JD73YMRHP82pbGaZybuRdeY5NVTfKBMhTLy2qUrzgQEX6ez21GrNDKbGyQpoCYXvEgJ1EYwZK53x7awSar96hS1",
  "key24": "2upEf7MyPc51AhasMRnJMhhNB6kY7midNLggCWzq8j7f8EeMCLH2ATG5nEXExf8ohyWBMZ4owuLsoibWVmZ2sN15",
  "key25": "2iFaHgaaZfzBQ7ji5uWzApr1PVo5GjEp1tQZY4zxkPQ6pDL8tmLdnRcgSrkxwA77AwW15K1m7prWF28VwtDiVYSJ",
  "key26": "26y9LoFAa3vgixHQxpmxtVHWnMBdMTmN19TMatYoBT1pQxWJ84gQVM2VN1N3EmbyHcKmGsTd1bGQE9u1CQfrctff",
  "key27": "D9RfbkM4SvQVrPBBG2MJ5TBHQhoJw5Ey6sVPGnowpM1ZnNqkk5Ux5HN3KDuxhxng5sHSiBs7rmxnHfuLGjrRXpN",
  "key28": "2gNCa7rn6UJy9qbhpVwZ22raodGFkn3nWPidASiujjQpCiXejpEWQmNrTWXBScQ8fEmGL7pr6dQNtyTx2pP8yaz2",
  "key29": "R9ikqLou74Lvs5eoNYRsX5tPSLJJv8kv4okXsCQPrzXz7RfTbf3RicW8s4WJr1RQwv5AB6t9RHsBNBrBZndao3E",
  "key30": "3GJp6PvoRwdPJcWyrBbTYFqv8AJ6WrXWdkC2oS8XUAgw8NxQ1wCMfPo14RJbBegLVvYDWDNTCWsch4SyjFTk1M7U",
  "key31": "5ziQ3xxRL42ryzXJmdgdALDLoVtKarSAxdKQri2X3vN39U89hqUmENX6Q4yUgqh8wuPTmuwsYxsec3T98C6EVc7E",
  "key32": "ZUVjoA9CyJKfKTiZGuGGPbsL7WmZAQ99LmPLhk8LSP81GoyQ2FKrUqxEFCWg1MEtL1vAemVA6yAtw4PGVpSBX49"
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
