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
    "4WhL5cmJcLRuHAiFDorufSi5wohrMdhi7QdhfqtU4oUxxnFFMpHNPZt7mux2N8LJp7nZPbzbpu9LAXNYerD7QpJF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FercSLk9dUiQmEL3mw5XfbG8EAUPh4rinDcvTdJyGEUcMM4FCvjHakpbu8oinkp2BLhuB4hpxAqrpKTtB8hi2Lb",
  "key1": "5PXvLGNAPF5nibFEEtfHKkuPTbL53rnYbrDVMSSzyVrfau4seTsvHE4gNN43fc3YNtL7tsUY9CWx2fyTc32WDLDw",
  "key2": "463W2HRDYPozge5kdzG6EL3qMh3nSvfx1MMSj6jt2WD22E2C135ZMRwEQKkR33xj51ryBnyBtex4KDEeZN85AXG6",
  "key3": "nPyGRCCvzt5nwooyL6ozrkAZWchnnkDJ3R3rQpRycEm9VXStkvejR178Q6Z8xtcadE6dbmvac9fyH8AcUZszUa7",
  "key4": "2y7x6hKuPN8ZR8SbBPsiBF7s9QnJk6y8uMoUZ8aiu1Fsfy9BDfLL2FwhE9rc6beaFM5DcN1Ag55BDcTJAMUpV7jc",
  "key5": "2HxaUGWGX1xDKstPhwCDupXVRuQ4EDSggars8NopUdiMW44QQsgKmT7NgTtGX5eLLtm7vzSJYPm4KYLom1eXmTp6",
  "key6": "wDmQddW45CTa73swFZsJTWEaoLzPj9zpFh4T55zLuLkDBBJrTQW6BgAYBRuHPaXW1Z7RejURFVgvMze9JRiokmN",
  "key7": "tva9dzPbAxh2j6WGghMAEk292xhtKehwsafcHCvQwrWsyBdcy2DcoxuUS8GQ8kXqxJTHKkiRVr4PtBR1GBMBsst",
  "key8": "2Momhgw9msBgd74NwGMdx7MPAjYF5398N8nK1v56GHSTmQKfu4jSY63Y2mwe1hJwJ4NcikXwM9WaXN8ThWZLP5oJ",
  "key9": "iwXC7iS2AWtniTaRjb8nQtKHnQW2DoXWMfs1koLq9k1K7mMmzqekfivpcnfAGRq7yvmGPUiMYCNhgYwipvMi2Ks",
  "key10": "M1dBVWQ4d8vVugRbZpzLmTttZWWiuJWZaxk1NC5THfaHsHEdqYB7fbQV9UYPWnBQW1qGx9kuTCpshBSnrXSe7nY",
  "key11": "5EYsKpduhKRSZyEQuJgWkZeTgVePvyHvktMQkqNPHdUPJLzoNzWhJSHKHGTgw1icLBS5AdQkb4wFDtdbFxL5ZBn2",
  "key12": "4CcZwKjqrvveKbf4qxpmPzvWDx8BcSdTxmBBTTiQBVPSi8j9LnRvvhaiGpaQSLiNE3oNqaQuyboknar4ghb8WLEk",
  "key13": "2fRQUV8bWgn4Q8AAQbWQSMXtAcUqqScTWavfg8JFjam22UoxLsi9sZj6JhvrdMMxL9VLhtD32R3qjx7buXLoFZUw",
  "key14": "3xvQfECzYSm2iQ3tS9Mksdii9e4gaG6hoZABbhesn9t4r4M7xyiNKGif2KW1MhSJA5p1yKcSDW5EeGt1QXXpseVo",
  "key15": "2Rpp4f8k5aGyPp3jhYfQkAZ8jXosW3BiA5v8LJ94WDigzEVsSbCnoQSexi6no1iYmB7JX1DBWkfGZorR8Ssov2Pt",
  "key16": "4eusj1J3qY9rywX8q9bzeb2Z743LDs7cgh1cQaCQcFjMkiqtQheDhRGPuywgvXG14vHRy3fxyf6MXLaPCNVyPzKA",
  "key17": "5iqHocpUTkMwNMRG6aWLraHLxny49tMgGTwNHdJRW6aQLVpzR2jPZY2hg65UBnq8vtKdxjCJv89EqqCCNDXa66Vm",
  "key18": "4uMTGTYMfxfSRqGFRo9hdb4dqeVwUjdcZ5ifnHszoSE3YDhsvU3kLNYWZdPbWQzwvB5gj5B475JoLdqEfweNQZ18",
  "key19": "C58G8Bx1LbYZQbhCum1iq45yzs4wQos8thscwt9C1ABVGvPXnNWi2qsSBrzAi1u6bArp3f89hLswPG3MakkhckX",
  "key20": "3SLhysKdsX5GwWnuPthdoxXvasheYtucBMgoir4NqiBcTnjduCRodLcdfmiB6Y7ke5AfRa98d5wSCx465wxd6UJE",
  "key21": "2HVzZ1xZ2vgFLo7GU3xhZpVQvjL4zZU3WjVcmXCSAhPHQjqnrrYWbvN2qKLBvZBEj2DJ5ibFW84Ljb8Q41a5gFHk",
  "key22": "4hjgYzdDbxcq5BPVB4D4XrYKyiBTW4jaFTwjnjW7pBZxiohtdJRP2fJgreHymN268dgXYjskPMCv2FR2XvnEGud7",
  "key23": "25QEutHqjX9M4RQb7QocuMCkDQAR6eQPLH3d1HLpN6hufL9miyBgAm2PqKfzUQFuEdonPTwnyRVwCnfzfGDmr5rP",
  "key24": "4WbtXnumiGa3NqmcivPbHfAeX8GyTUnQpnBZrvStQ9zSxD5mYDw3f2cuT3L4iQsGJc2pTaRLvHiHr2ZLz3DicgnZ",
  "key25": "36uMJCfnjSq7eisvZT77UZiXPP7qtkF7R86Hxs5GdVLs5twMQ1yWL12N5vhTRS7BkJ1dWmz5SqgJQnwbZt7dZpVc",
  "key26": "4kKFQW4KrjfLH6LKvH6z35LBvyzoaWAduMatDyMAyz5YdLbJAWNDnjv1NF3LkNgjbKCfJrrBGn8WjwzePWkshgtG",
  "key27": "4yq7ABGaaL9acFUDkBwCsppsHBG6ahnWf6fWX7AvDbbujFGH1ZwCzsQsVpwYrWJQvb5fJCrdVAp3srxCGzeaBRGe",
  "key28": "3JZ2BC4ZfhZssjCnC3QmbegCWL2JDfV94XKvef6QteANemadq9ayAqH8NLq3TegmWTcSJZNuC1rnuZfRGEZESQbh",
  "key29": "43XmX1YNsegT3yxtWrw1Y3i3VT6ZVc7rEdC9GoEfo7f4dQFWU4tF9ENEb1B1dCMoJbnuJgT18xm27U1Xj883jVb8",
  "key30": "L4ahE8RuHQ3RU7pLM8Sk6vT5gjw9ZQakiLmUbW5ZdpykN6yCoemb5GZrw2t5QjacRMfFrKf258krH1AcKERxbz8",
  "key31": "4CMAx2GuLt5Ymqt9gN15uL6oDsY9tXJmEcbpvDuu5wo7sswjwkq6GSwaz4q32zQD7GSKbgExqAFpQQRsWdf7KP9V",
  "key32": "5XocFx5R54CibReEaS8AoJQNgryZdBNbMX2svRLfZPKJTGQh4GXnSn4anX4TQzVNmkj2VYbr849qdiTvidqb8CAE",
  "key33": "5HwwW5p1nuA7sytDUn7wSyi3zHs8bDirGbk952b75YAn3173vcx1abz8fLic2amsY2WghvbHKQ5ky2Zhti9oafu8",
  "key34": "3V9zF532hwoyEqNnmwCZSfGnEdFMBPdgKu45qMYaF9sop7JTuvpw75Cvn2q1v472EBYDD7xHGXm8GwgckFn5S9PW",
  "key35": "5VMaYuQ5d59v8G7TDBFcV1XqtJsNjDFnTWqnJ6mYUA2Dw4Cpw2DbPLjA1kabQ8EodAhte9vT32J6EFY2PdyMHoWr",
  "key36": "3NUoMrMEUfiPVfgm1s8GwqX3FsXStAtwpMu9d272TBUyNQpZodZew7xuS2onHZXzxczrs1cU26it9Qo8yETPrSQy",
  "key37": "27K2UVS3G1drq4FY537y9r94AcEPaGT43eMKHb9VGLPgBkgDScxuxik4xsEu2DJSnrfdumb1KNGuD1d5Fu2BNmU4",
  "key38": "5gvpnJm2PW9qB5YQP9r4sr5AscuQvxNSGj9y11cehHAP6PWDzzq39XUNruH61mfSSaMQBhQmciDNNfPcwmK9NeU",
  "key39": "4S2MfJB9XUpNVifE1R9U7wHJLayhqvscumM4PAx28ZY1P2PAxYgnCrKCQMhkzzZEDPdf1G5YWgyiyubwRx2CUNjp"
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
