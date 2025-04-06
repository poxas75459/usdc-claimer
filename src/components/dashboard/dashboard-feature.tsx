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
    "3NqyMUEqxSLzm3Dx8dbvQX8bszLAH91nPrqZxtGouTdqFJPAeFngJmGMYkfzaipujVCVwGVrdeTpenSSyMxUxnHx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RFgvZ3fw7HahaUvpci1EPHHwSZ3QCTGbmyemPJDG5TtvCBu7GM8DDM5cSSMeL8NfSkU2TKWqTTJwtLWbB3B4RgF",
  "key1": "4n13oP4hRG1r3PkmziTst7EwEyMHSYjreAXZEtdgDKx2oNh2tzgU3Vdttn7yK7Lw2XLMt5Jj8G5E6i7D9yAnJAs",
  "key2": "2YnDWPmVDc1LSPSbjzDxHsBPavxCPhDiWDMmsBN2oqCWJwxVTHUoqUs5cgtyFggxuCb7R92cds7yNHzix9SGswzH",
  "key3": "2FcyVKRS2v55LDRxMMvPwFRP4cz3jXogCRF3uEugYo9KFotcTuGWfNrZHNbfy91uiEcWpqDQcBSLVhavJbXcdMmu",
  "key4": "3RZUbYL9mR3fRa4vuqkQPVXVUR9PiQhomXeFVG5vgkAucyeENB77KftENhJoKqsZguFLQwNrG4JGJBKhySYY3ftr",
  "key5": "3x1HEjKWdhomG7vxZ42oWBL9EUTqaFb7JamfkXMRSjxpRooUbH6w8efDeiFkfk2f28LqjrxrhCB5FoyoTK8aaCUe",
  "key6": "2MUMwi6HoHhDvCsCRGnrmhm7sXDW8VgADwArjrd9B4uePyiQbxN1if7Qzqur84zvDp7pjefyBz313ofZk5mP2u6H",
  "key7": "3WoJk3cAU9QSREB21rBqjKXs8C4bnjo9bg8k3gADtXKwXExs63Jc1BKdaE5ajKG2CmiPbkgnpvwXMbnaFdzcjBmj",
  "key8": "29TsiwtHFk7itRofhZQ7bNadhb77zeWjfD6qECsX2rxqLbHMqAzmrCjy5XA92x8SEcUHUQYzzCP8gugcwYc3ZfzZ",
  "key9": "oqr8UEZPARHWtcjR2hGZASxSRxuaSLu6uVbjGGrP4UpTQxMBdUfHYVKdfH314ovwftJRgCp2JPZ8vETLpPy4iH2",
  "key10": "4Wx7JEGs5tXTsRxcttrZ51JKebyN3P6CFso3gwKqD4egbDHi5EeyDNAfc9M4twtZt1eAZXYXgpYrcLS9GsJXqAnV",
  "key11": "2sWbchDG8zaK9P2inTwRAByGhzwNkkqfGvqcaRdfApNfFGFkoiJdcZWD6oC21yqjzrPEiD96grL8wh7GQjBt1zCC",
  "key12": "YU2bDVpS2mdKNGuQ83GRf1CUmmMfuXCLPx8UHjSjfDK1oDHqkaHHubYt6mvxW15523YBfjvUY9k5HKJ7iRWD8S6",
  "key13": "cp12B64ghZFTm3DXwubsQiLkTyAQMV784e1tYtTiin4VE2ST9GNFJexDK7qDZyxCP8T6Ya6SsVWrYJWzCQrdaQc",
  "key14": "2ZHAA8ciAHF9pqQJreYjguXX1gesSgv9Z7ANy1GCQvkCrNEuA6fUYqy5SUirM4YZHfM8V54SassLNbfmTDdnfjLj",
  "key15": "2aLfrc4kTwD6haEidmu1uQAZfQcLyW3LEveUmUov3VKZVNDwrCcNZyDJfDXFq2WEqGpcwpLoicNdnjnES3WeiviS",
  "key16": "5b2hPCBHJ5MonHpPqnPnMUgtRZ13yrUdgxTzEf91vTsdhk5g5xKcbCZfcY66jT15Lv4h5G9sE7pspDtcu8oxbpW5",
  "key17": "5kcPAsoXNm7XRBDmVTwoXVWdBC4BjGsXHMsBGwkEeavRBwNWBwoPdaPG9Jwv1U2shaBEPiiHHcYSiAsFtY5cE8WW",
  "key18": "33WD3FAHwX3srMsZRBwVRKcbsW8RgJfePNigMJDmWAThSfXgDQkeUBhEGjnPDgKVeWjJAp4ZgCVumkc238q6bFPj",
  "key19": "3taAcWxh8aesome6cWiYqGCfZjA5q8UHZLejAgLiHW1qAyKmm5PWjyfJQXSzZapfFzJd73AMmag59WDL2A2f8H8Z",
  "key20": "5CmijB2Tvo5Z3rL1vkzxFC9r2yaKyB8XoYn1yDH2wQ2tQjmdNgkyS2T4MyTW6NmD96anJoDzWsPKJUy83oxgnfQ1",
  "key21": "5XnuQDrxPBSax85mNezfSNQEQUynN5RMo8p7bcuaVo9rrt9aA4fgXZF1NnmFFm33pSwEcqfNjDF9VwVZiKmJmVQp",
  "key22": "4rDznhCax5VqhRyZ1mBP2P4fH1Vah5wVgHamC9RM74xXQqkRk16AaPXbm8pSNdr5yfW6pW9ic9xXUDB8Rw1TriLG",
  "key23": "4Q5zPMteZiSsqzzfwTbQubCbysrp2HvsV7BRVCzUwvLDXdJvTGYQUdVz3PhXom4YyLLgpfgX7SryiUBWQ9mMbuAM",
  "key24": "3A2S9tNg3cBnWwqmV9t5fT5Qu8F8c7Ncz4SPNnxsDdeGYyL24xmfHJynRHpzmrXSkg5wFCYV178v7npXvQwRWUXu",
  "key25": "3xUTaqf7emq5rL49HkmUWSS6VqVM3yZq23yGtcEW29616QvtTR1agRdnHGpf7v1gAWaddRLiiYsik6L9Rt6UN235",
  "key26": "33R7aeEekQtRYKgxNfBT6f69pvE19GQwaECuj364NTmoQvhBHjGC2j4p4QbTNN2pKxpdxHWJPG5kvgJy9ApdcC7p"
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
