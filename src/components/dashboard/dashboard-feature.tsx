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
    "5YBVEJB9MzswWiyMCGcMHM1CnzWA2vvqJLBwzXR4mxvaDnXjUP8jN9CJ8P6aMzTBuCz91B9u7tGkuxBDFrX7KjVE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "474vhnDKrBfDLH4mAPnTfSvMwMxAFwU5chrRwnUGWKLkzqLwotgfxTusSBsbkkDXLDqntKqYSPpngxsXsGWb3M1T",
  "key1": "5M7CCQMFK8nWbQMqWxw8G1rP95Zj9qFms9tkdHRqRf29TRv1hxFANgenV8KGA9xXPxPKDB6yZckVfden2brvyBPR",
  "key2": "248eECohUzBaPAT69uF8ZBJ2iBZK17ZUr7H4UTaPNoNsWgdMCV5KbApLQyYPMtjptKju3hWgVGbDCBF8ikjK4HZ1",
  "key3": "ZNMBZcbicBZ2yY1Ar1gwihRgsx88RAu7cBGzAhniAum8Y2yZjBAtnF2gemwx8GYJpbTkbheqd4ytmo6vMonzu9R",
  "key4": "YTaLjVsh9bmjLHpSmCPUUhQfBGnDptfarLFG6PYNbcLu7Crw2hJgtHya8WMb1AB8YNVWXHdM93txCqXsXkbQ3ui",
  "key5": "2tURHAgkmZhZoprJ3N4YsEq9SNhZPUkTNeJXDgspH2pfD4mmdwsQkLLLeDxMCFKWGeGwZUKjyk9Th6BTUp8dLbQu",
  "key6": "5Lof5KZ7BHHumRXfVZDqK5pyvGSupdVEHBEUayCK4H8TUVCN7MW1rJSSrjoJUogJNMPABqBbByteH1p2fMMM8LTr",
  "key7": "59W7mQ252FR2qJ1vbCEE5nLyNsEfxNYaqgs6YKxmiCHRQFQVE8KyhR8XhLAAZ3KSCQuzTkMLXHqPxBojyT5nvvQX",
  "key8": "5g84STTxNPg1ZFbfv3u6jmTCoga8gNveX2uHnD56gos43EtQAupQ8nB5nGzinqZsXkGg5gAQfqGCfYTADeoAckcd",
  "key9": "36adUXteofRTZVDiYQr8hBfMUjpXz2zjk2YcfZeB2nQ3pv6pz9EQ1Q2wiPMUNyJ33krXfgWoWv7aAuwafhyoB2iT",
  "key10": "2VPvRp6oYugJu72MyjEYBAwJs3YoRmE5XHkQSNnZaijx9u1BpvRoTFhZF7W6A4mhiV3pyN7Y7BJMzfwNNZhe6QQd",
  "key11": "3tvVcwqPaUnWywHvCbTaTjMM8v5SxqEoQxq1wcRRbcPZcnTGKF6UfoMckdyoSWXN1zwtrtMfuzhT6T3YQMkYgaih",
  "key12": "5KuT8oZE6WU8qfHGT7fR8DhB7YU1AHViCBKFp3HUd8ges8jYL1VSLJgwoYj6v1Di9Tt9TQR6hQjHc7NVbitQzG2p",
  "key13": "3xnheaatRNUjiDrXDehMGNR1XxWF9pjvf1Cy28k6moehb69MbrjR7iTRhjLtno45WJP2b3hvx6ocNUL6CUpwKnqB",
  "key14": "3Bis89jFr59LDw8Z4MmK493m6bHyj61v8AG6Ky8KU7x5jpSmUMvsv6fLs6wJMTYtoc4oeaphksK58AE5hM58ieiP",
  "key15": "n8CHBr66zR8cZJ4693MgtotdFmJcsqzq6kjQbCeeBofccZLGJ7WhBvoAsL3gtkyDbT4aNdzHN7n3NjsNXNGp8Ds",
  "key16": "3xqyjG5jczRV3nEREntznsxawkqS9tuado2ACF29pMVAUPv2Go71NcMHhCnGb93anzsppep5eHLz2G9HNqwrQHNv",
  "key17": "2JvFkUszx8Aa3bYHWiB2Mxvaqa54YhXxmCnkkzk19R3wcac4pxDDY9wH6EMFgefv3a3UEhG5G7YgVUimKAT9wPfu",
  "key18": "2BZajPRwcUkQN6aCjD5LBbB7KjfQ4SB86ZJgydmrZdsKe11HxyoLy9hKYZyaDN54YBMuZ3wgHevJSDEaCCVRNwbY",
  "key19": "vVtgCYx1j6YS5AXyTqSbo6FG4kfFEMBg6swnC65wjAQREoNzEL9NcNLbp4XkFsMgZiy7P75eXqpm756kVnaktFz",
  "key20": "32A57bSLdXnFzZ2DFn4B5NQ2Wm9XyKq9WVuY1pUheCuoTFfBsMU8qmgRbakieV6YkV9xth6RdK7w3rTLV8oKGvdv",
  "key21": "adgnJ1DB1tAMshL1GAyaucjdMGK1Kb1wpXdZy1biL9vMoFRAj6Vzq4BLaDUsTUZSBxx8CHJiX2kvZhAEF1nfjjH",
  "key22": "PWAHJ9z284uo8Pht8P3C7NFtEfR9Uwcj1WrtmdSm7LykE5jrv6VDBE63m1df8jJzLPci4dar9rJmn4eYDKkT63L",
  "key23": "611JYn9nDs9vPh1fmeakBW4hUC5kiwPDEsBSPhC8bmUMZM14e4q1wzzCK6BTn65HMf9MsroybgoZGvZ3TUtPuECV",
  "key24": "5573jC9sc4xVLGSvdTLZ838XbmntKWVjEJ6DW5ju8d7jeBfSu6RX6Hdx1R2QbgCTBm6bh2RBLiwqFXP6RRMQQShG",
  "key25": "59TnbwWsgkeP1g2PHyRae5DrYEVrFmqTPxU9oyPJMneNSYdbfd1gFK456rQm3HAzth2jamYYRZ7UudxuzMjwV2i7",
  "key26": "2SoPh1avAJXxxFdSRmkXJwdUiDxrpsa4tGnt4yQJQ2TcNvbeWqSgEcR4J3XAzr65MpqZCHvDstKmjg61qDM2f7RW",
  "key27": "2MFENghytZpVkyNM8skUQ9gAP6yU3zEyphipDJCrtuLLinm3N7poDzeRybXcEKMnRRN4jfHXNRmhqP75qPga1bjz",
  "key28": "3uEvYS6rC5M4GSgmQQWCCrYv8k5qWY5WhbYHuuqR8XFvVxrMSYww1JccFGDTp6SWqU1TkQpoZ5EwAKPri6bjPFkN",
  "key29": "5BCaXpn85EngfEqjtYgRCaC7RXYnp5GUwuFQi9VKuVq8Pm5QMvEAqoEG6APZ2GSnu92Ead4CHrtWtCSRxUR38v61",
  "key30": "5fX5wPxKkDee9CrYNiFULuBxawQFo46QHMwAg5sCMPHTGrMYiBnrf67oaS8uBLhAkB8eNpLjecoso5LapLXdxfCU",
  "key31": "26MfNPvHfR717fRZMhsKMG3ndk2Lq3iwyrT2mVV7K78DA3P31i2ubbWjiVzeCs2Wdnq1tTxVGcZQZxyMW2CF9891",
  "key32": "ueYDxecvhEcYbiPy21QKajFwK762Bqt5YveYy9qxq1GBjCDq9LdjiGeBFFDjp8UiiS8t3cUJnUSTc9S3kU4jh1w",
  "key33": "5jQm44dPwW8PvYmpTwue5NRXeA9SBTTYY1J7QhuzXBEjR45S51HVRdWYJLUiaKZap3CPPA6Qu76TMi9Dj639D6VV",
  "key34": "BGJb99YKhhKPSNZ85TAMGwZ5LNXjU8DWgBjayxWTPswZVWitqfdW9d8UWD3KUkdumv1M3zynNiEYrphpSkAQ7ce",
  "key35": "5cFXyTye3xX6B2fCibG6AUu5k9coxGEczab87nyz57KpUNFSKReVKEaS7Qg3SWzrw4gktND9FYR8yyY24CXNLBUH"
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
