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
    "SPqwAzr3ks5zUMzHWS5aYahdthFqzVYrMWCbx4kDTCbNQLEAn1ULRywE4BiUXh8fQB93F2akeG3zYsZ95z3uxKj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5j7cjvKpZMrxxKBJ9CvLVTWPJpBBzmckzZTd1U8pkh8jCikrGzqLXyBFJEuzaHC1qz9R5YuGfXNX6BEovk565TAB",
  "key1": "PvQwTfYL2ct4e6bTBxA9NWG1K5oRZnpxvqT53QpfiHUFR9VAwQgDo5JRuBs4bTwuUrzWskGFq3UiZdjwAMhdL7H",
  "key2": "5uWHeoAywzYM23epLUFFvugwfJHcvapo9LNn7EdYAd6rbtQmMKxyemTbre5JaJySfHySU2yZzYdeq3xwxRnZu4wZ",
  "key3": "38WDGP9eMhBGXX2LzkC5aWMFYGP13sRakUYZnH5JndfKrtFEAAmKWw2uvm8N3Sd6zSE79sostyqVNUZQj4zoMUGD",
  "key4": "2cNHdtXX17oYWygi9VgLxFBcuqF3eF1jP1dGoXkFNYhxKATLGUToRA5z4aR24nqmiyAfVuCZEhEdZ7EU2vtMu65U",
  "key5": "4zwtCTjNNxUziPahRo9XoxTrKoBy3SW17gvbccmY6uxb2LUNyVaVUPnZuFefaGWgSNCWk2rizsgodGqvLH7ZUHAC",
  "key6": "nmDm2QZ4iZBMSL6g82VFuUPp7f66326W5ixKjrZS6zvqyxA5syTstcB645EiHvfZHQAhbJ8uP23T9whcPbuyusQ",
  "key7": "5FJqscRPwgS7MQSGhQsyAyp7z6ZYyCZQd3yEDb15RzHDPq4qZTYFSJZaWrY9AnB1JoopkLUtQmSoaBEA8hPZyr63",
  "key8": "Y4whuVCZfy1JsgxeHzGXBht9XcvvbenP9tM6bkdrHqeX4f64G5WuYGn2perNfGue6z1A7J6KEodgA6aSYppLkju",
  "key9": "2LrPM1K5mSS7TRpTWbwB9gKW4DKQWd8NbBekaL5oqeCEyjTwPsGSvNUnmQ5dNmjigDDrNw9G12dHyGKnz3XkpzxT",
  "key10": "58YULAr97eaeqUKUTu1Fr5hqX28FVkx8mia9yqDMhV1iPmKxL6Ny8mTHHq13nknMzp4vYpZKiKMPR7ciMPMyHi8C",
  "key11": "5uShtUBtFSDiYrUtZw5DopjHj9mVuEhtVGXAHzuRjLcT85pxDReSpABDFMMwz412t2aCrKkjXUTwzSQRhBpUK2XT",
  "key12": "4Fqp8bHJsk5Dm2kPmoMPEDCn8jp99fuCSh9aAJ5cWsU2Wtw5nrkx8CtTiuBcAmjigR2oLYd7GkJp2KruK6RS6sN3",
  "key13": "3fu2TAwVVwLALQVZFr4ZsmBNRAStg5QbmkkmWCiLceC6kthFbv8v61N5fXEgbJRYNQkhZVyRhoETN33HSw4pQSKE",
  "key14": "51HpHK3kTsNPtwELiU6WxgZUeti2VPov4DcuDhqTNHodkHyXZBWRd9wAa2A7kwcknDGeGhXC4C4qSRfd2LZAZBwu",
  "key15": "5Hf2CBwEvEdzNmTMrBUqnZup4jYCmDcyXx8ahSz2qD7gjCMNJPwJ4T3Kg2desYXFJh2zGns79jd5ctir5xvF1sdv",
  "key16": "4vZueFvMbAe8Vvswnz1rQDMSTPHoXWW3Ey3cFizH5wwnxBzmNnzcwPiWVh1DoKxYbBpZcsL5coQaxcuqQkaSufeq",
  "key17": "jLrMgAJHCPk41mADSSJJspZtMxgaXBDKKLMPz27gFRRwRUg88mhNtSJhbY2sPNwMExhAYwUccohZ1zrN3bi1XBc",
  "key18": "2GHTemPwHURRzRiv1q5h5SPXyKGoWgNuKPmys9547ixkGCujSNRjQetUNuGzBPmmwYpk7AVNEs5hC5vE7SzbMaay",
  "key19": "5juDkhYoyhxVKGsJPWovUEguD9DFs3gxM8TPD8En5fKxa1HMe4UYZdXzREUV5AgypBaA7XoGNa7zWSZinyCpQtMG",
  "key20": "5T9n2P471Sj2bCgdCGgaqyfTAjUodFCe8nZFTpfgx7y1r9mghydt6U34HR4RowAFiEW3RWE674zJnGvNFE7a37xH",
  "key21": "5UYkyP3vnTCvdasr9Sywqy4pCFSA4uQGEpw9nZqwY2La1f2aNUHfMuZkfYUwzgvq41Rbdhn6fPDY6hisACnoY3Jt",
  "key22": "2juWVYPmpqqUxUVPmt5mwTLevuMm6katnsL4DFFJsA4JoCHwWjuwj8qJDySB66p7Z3DQFF4GRaBQL2uK8ZSacgFW",
  "key23": "4W1QQWWLXsMa64G3HzBk4691ptFoidpb1GnYPAzv6TivWdeewQPdFVq3ywMwKHmxSidU6zrPJRdYKbyvzacoSmpA",
  "key24": "5fxt9qY9iMBNcWuvWmkn31rwE6rTfn2BqM78nrNoktbo7tSfFr4ii6QAMZ5XjXzDLAMCNpGpKb1q55uGZk96G3Du",
  "key25": "21Mi56WTnJpPvtoVmUJULGjAsNqspCR8SHxcTvAwswBmufeZb1M1q2Kos1Sfgmccry3snimfoHpkGV51dFhX8F2M",
  "key26": "52tAUJRKBGsPGmn5SiH7uoehRPkpV2SY1UMrXUYqk35jb16pmE6ZdiJxhkXFYeVeEkMsCSx7AKQmBBCZXXsqdJXD",
  "key27": "DkikP34AfEuZtcby8F4xUqMrw5xehEqzZEhfn5U4sA9sYuv27WbWqpXJ3zA81xQdtf2oqQL6mRwvLt72MoKFvvW"
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
