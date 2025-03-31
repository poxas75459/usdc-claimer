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
    "5rcs538eBryNRZbvtE24HNKJbzGDH4MdzFWo79DoCtcdNK8mJyEGS5YHNrxDMoF6AsLznGicaHJkZZ1YF5pUJzbg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KiuUf1Uf13YgZsD4SAHbAjzqDxB7juxfFWcKGFCKnu2oubU5dviNJBkZf33XFdWVYvpd8CTzXAfcvdVszhyKKqs",
  "key1": "QNKdGesx4vhAWgPyvAJCRZfGpxMp9kwiwk5G4TTo7NZhzsHbxhU2VjeiQVtRzz7PEkcmidro9e8r6zAXmhBg95u",
  "key2": "3pAm4tqvHmioH819MqUVLJDmUZJ1NSFVsBmYarWhhbGqoyCP62xLmJzo5WuGKUasEzmcsCjJBQp5TBuHDgSeHSx4",
  "key3": "5AczE6Uh1ZN4rdbKRPyMSA5C2e3sVmAoSxHZQB5baE5zVN9rdfeS2ea5e15c53ri8ajvNLQwzvFZ9jH2ogh6m1fn",
  "key4": "5tYfoAHBeeosTuB1J3sq3K6sCER38qhSi2XRkqCv5HyEpM6Ytx9WGVwpwsSQaEjGGpvqyoUjztCDXq7LgWVy7cEc",
  "key5": "2Ewxiay73PZzEhamMSWKme3b8L3RAJ2jCkajWkGnufdSCWWPVCc8gY9TPvonTjwRNSgB96XJuCTNycRhgNyP9czF",
  "key6": "4LfUWFcfwUwkTxdYpUXYnWcZcb1amVjfHMPWAsC7sP6fY2Q4qokWD6vatZBnocHi1wuqutjhSnGxoC6aPYLyDpBq",
  "key7": "3SDJVgAuiPzZhteHgfYTPzGJhhhMCm3s1o477xyvd34nobVeKagt6fDNhSktdfXNV4CwHGN3mdJqKtTTBuQ1jj3r",
  "key8": "2e3nP9DabMPBP24TvcFGuwzJ5w3JCANpay24i1gvV6yQBxK5RAtWXtu7RvjVUuqzV1gxpETVaShojjPFSwsdXWYt",
  "key9": "xHijMSQVZYZPVwkkzSLBakNFtCMP8DVkTNyiRK89DzDeMoy9fQxH6KrSzUjJm4GD5HVk38RtJ4B2BWtoRDboFfD",
  "key10": "511o62g3UBrgEyJ4D2Dr5cASdEN31L9mM6xkdUYwAHMhZHv9F923g2t7arw7w3tbhbUzy4BNFdCQqGR5FFoRjUjm",
  "key11": "3HmftxTD3W1zAmtDow8DnCdc8uJPsf44d6vJmnUM8y7RksKg83Mdpwa9zmpiWBD7XoMmVY7AVzGn7FEL7WcMtGTT",
  "key12": "42VULNbjKxZDQo5TPV8PBDg83YsLH9s3SdPtu1eJbfVWqrUMEXa14D6RBJRSXpau6bnCBAZoRFyDob7b634MPLea",
  "key13": "4AvKYDv3ayPM3tD1iXT3ZUcETBA6uAryKdA57dP3nNbLttmYk56fFcCm1nz3qLXeCNGajEyinZH4SxD7dDqm55ao",
  "key14": "4ayTUWo2KVFLBrrzUz4rWypzCALX6ZAKoTxia8xYMMm96yuAW3C8qydw4QGwzHWoo5PD2kxPgL4HWvyW13tYBEDQ",
  "key15": "52rWF8VFkSNAuj3p41s8th5NqVU6L83NnggkF2ArkHn89nkJpZLu3sqDWRpaUqZDfDGdQh7Tfow2DeyP3DNzjUb1",
  "key16": "XuqT7KRqwEntGdKGj3d5SpWPo4Qt7R4QHRJA1YGi4qE1AfotLgdyLF6TfRnnxQdBcPg7VJTXso4MP81skZFDrba",
  "key17": "4n2BFtuAYyXP5s5sXwpqDQdJbKQghWeCNh2jbLsrNmzmmJX99yzpuq1z3B3Ggg7GPntM19agNrfXnjxa17dkSns6",
  "key18": "2MrpPMxkj6tCeKju2Pv2FQ4bdLwfMn7Ak8yQ7GMvLsFxSLaJRbbj6Q3HZWMKUrs8MuMtRWaVY1vo8ZccF124RaAS",
  "key19": "4yW1gZ6paqmj7BLHJnnoesWupdcSVUq7vg9QTWD47T7b9QuYz7cyLYrsXgrGaNUwHWvuyrA5CgRGBcpdVSK7ASB5",
  "key20": "XuhN8GUCBHickoVHddgAp5C74Sks6KnijT7JVL2FDpdhMtt1Mqag5SMpy7SAgcCSH7vo1i3KHpxnDm4gWbNQp6t",
  "key21": "4gnHQjbgdc3Bk9jafZsotsQJaG3a647aZsunQJ2VBjJYQ7L18FEv3cjBSqBVUhtFrQQ63kCP9gNYa5FpNzhgtKaq",
  "key22": "faBELkkFzTC7aewTUkGeWXhhapGae96m4mqtZv7WZ8Scfy2o8MX1aNmVBqsjFLmH7wvNY6rLsC3YMVuUsLBi5Fw",
  "key23": "YQyFB818BUVon2sjVzNs7ZwHqX4V6nM2fVJoJaueD22EyvTSmWaJSuLWbQ1iHwnK891HBuhjCWHBLLR23hWbx2J",
  "key24": "etmVFsu8FgEJUGr6PZbMbUMpFRr2US3QqUpvfUexe2nguqsozXRWs5iFGeYqzwnxib8AWWtiocwQW3TimiV51ne",
  "key25": "3tS8oKjcdGPQXTYcDN8Q22MxSjZ2KMV7zNSt3rBFjApJbhyn512ffbh7oC7yzu22CeJuiVVEVezAKPSn7iwg5DdC",
  "key26": "4tiYLah3G1tA8FeCJqR39zDRFajTBFvgQRtoTesFLGEobF2QHLnyEdeZCHAv193w1wiTkXA54JhYe8RYAA64YAnL",
  "key27": "41qy1CLYCsBRKTN4w8PxyBV35hdPTG9KuyayenMkphLv9mk4xWGXtiWuuCQ3NjWosfiM586TDmWMYxNkVc6X6san",
  "key28": "4x5oUoYyJEvKSfbqhBjFWb19Snd2WqhUbaYFaJCpd78kHciC3en7wi9DvWx1mgkcffo6VDyKxG6w7RwTduTndn1D",
  "key29": "4nzgqcG5L7odKHnsNRhi77yyRHXG8ZfWLDQSp6qST4Y71ieQZwQBzqxCUJFvkXZBm6CUw8zWmsbLFpwTdwcCkeLP",
  "key30": "4UQvMYHuiS18HrXRr2LFL7zPpXCiWV7mrKch2D3xs7KHKTCqhWdLrDo8c2HZniUh2fSt1xDNNYPsTSSPPPQjLgXP",
  "key31": "3ftfFPgbF5huGSHLHeTKazkUimoyaSqMQ1mp7VKVvzZuPcEce3pF4LLgDVc6U6QW8YXxhrLgLtkyQnuGrCc5tYJE",
  "key32": "2HHzxYhySpQMS9rr9FAJqFyezHGC9TS61DzwtK4pz3a8UuVUu2bE3br2Q5vX5YxMm4T1cySqqBrtcCBi5zFef7Bq",
  "key33": "W96fWZtfs2tK8fw21KQWwXYt8uz7v5YAszWDwKdWCBKQ6aQhXxt2ma2BwDVa2FzjK9M8NtVsmGY7C37DfUz1ccD",
  "key34": "2vVwVBzf7TCgJRcCqsikndCZDiVLnFjMSyZknupxBfdFfu3Pb2JrHoCx8UKj4j3j4nwn8vBKcgbpPzDMeRLyp2Ac"
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
