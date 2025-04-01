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
    "4dZT8q7ag8bAjQnZeDMQAGYkcFf8z2eAGPLYhntwE9Kpf9FGbFX7WzNNH4uAYpZotn4CMBk8mxMvUrHZCC2MDx4S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "283rhqcjeomXvM9JACBfphihHA28VCPg8TZaZw89i4u8JuPgKmUvGapGT29ZMj8diTeGNZkACL1DYxHVen84meES",
  "key1": "k75LBF7MtF8inbmHnRynv9fgWENBPFK1MCRZGMfkPxg4gcBPkV9KBePxHdV8Dq2T1iTUpPLTNDu21y1xJi2P11i",
  "key2": "4N7YGnQDdLxUrju7HEgVrgii11nbjV8szLxXuyxULi5Q5TxScZ7Q2ADHRjsrGEjjTYFzpRJE876kW6YiGdNhrxcA",
  "key3": "4mpt5ndJLW8jynuzcrpekjQU2gvoZervUmqvF23Weirq9s3KcDwGJuMeQXnZ2yG3cobYrGMXZCbQZ35vtvPSQ9nM",
  "key4": "3L3j8cNEVecD8DGw9hVMJ2z8QU81FFZHNB2xS646cuS5vjaKFMNDNyHddhNypZYybEP2kuSDLXCzY88F1g4JTVPr",
  "key5": "5taQaE9ETsjPRxhcrLeDPT5LGX6F8MrJDRHLbcbV55ddQRHteZMyczd5R9QxjnRa19w2fZbHDeFL2muNbyt81hJq",
  "key6": "3siw5WSLs5ZUYf17xuJiGekjS1PVDae4ZX29QEVBMVoXmhReWfwUdD6VpnSCZsChXN7fJDZXgN3eRrQr8UPHHWFd",
  "key7": "7ajy1ezYUxWUMaXLpDakuriqAjT2u3CfTuVeBQZmKfy9demUiT5Ti75murvp5bqETqifW6CcxoaykQLkvnDpZqM",
  "key8": "58LVBCTXqdhcacksWnzgrRrbJFQgioPossVvBV92B95UvyNdNxt4srr2TYXg83eqEJKxVfgoMNLYW7c6Qo7YJtfd",
  "key9": "4rTo7cHGo4PB71B4ugDDZPL8mp8hAhFwGruRyfCWk8QsWUdguLSQLUDx5DQKk38NbqCi21Anz4WJtEXE7FbCBSc1",
  "key10": "1pUMnjUFgMF6AcNcHw7VL2mcqwEXugAkaTkMtSrK4nbFuoj7hgm14EiknfDCvnKAgKLoXLip9298bULxaR7WgAg",
  "key11": "63k7Lfi3RvoKMnTW8vEN8nc8aJ8rwkFW3fvkcWjKGTJD3x1KKpGdjE5hxu6aGey33Xe3qSh45fHmcPssv8yH7Jvj",
  "key12": "5FGTRmegYRdtjfFgEsGixwgzRRyYU8bc57jjnG8HFjPGFLmyMAYDa3xv3cx2Po8EcF8LJokZWX2znpjbq5BQqRoE",
  "key13": "65iB6zYoPFxu4FwGsGjHqKFZER8RqLd6VMasY6XNfYF8SPvBNdx9xwLoi26vWVh57v1i6oygsVSKRygq8jMtzeq",
  "key14": "5YaQ4F9rVYcuXoEdRhzMneW2pnHUuDaiEtJ3q4CSM3nLNYBLyNyPxR1coGyYzxdc3M8vxegpFgCYhrtFW7TeE9MX",
  "key15": "3VFaMLh8zXVBoktBtBsYmHUttjk3YqMWqR552BQhHcTqW9EKJcEsMmHirRmc6xA4pPxw4vfkNa9zAiM44MF7LmNt",
  "key16": "3fkhVtGfufix1rr6iqNcLpwhsbs3bCdSvkWcVcvteQX5Uj7zCtixwAk1MrdBnUH5gQoEQD5ibNdocHBqNXYjtxvv",
  "key17": "5Dnmgn26eU1nkgV5KHmtquW8ik7n2gmET7QWAVvaeqpqpapgpdzspbmqhTtFYn4s99ZfP7jQSurNGAgL1acZY28i",
  "key18": "XJTpJWCqbdwkLMQCeAA8pWVoVtiRPweYtsLBmU6MipZtrFpowN9DFYkoyRAKRKwkKJbsy4HNA8YCwtaz2No5XKU",
  "key19": "3rQppw7Gn8f1KsTyrwUqSbsyQRpWQ3sbckWtrcz8iJtuE3TA6bRTk2u7ejwSXczfWthxRJeJHH1JB8FwWSbkR4GV",
  "key20": "62FHY9JaNBitJbQEJpnC4JQMKAtFF4KYnAoDik5ihTCJGyK9VJe9npLEZvGHLzCCm1S8ujcMVxumoYvMqTef1t32",
  "key21": "5fdh65REBQ8w8vhzFpTYmasH7gqybJBPXsVXu92gZ6JNwNwRXwmFnn7h1fENgHQq9zseU4W5TZSm62tcVVaeBY1V",
  "key22": "2RufeEXdkMyL6B3WoR29wyhCsspDd2D2XR9CnG86P2ZGHbMnKpMzWgSsEdJo6oH1uC9R4htpmtAqhk1KBpcCPi4",
  "key23": "5P8BKYG7uSEW9EETYakLCwbqY9Wm7Gw1Ba8zxmC4LwvRVhdmNHNrw4Bmo9GhdpnZzZyXTDcRzniyAq3ZvXea83bk",
  "key24": "5XeqGphFCaHFeK3ahesQhdKxEuaDkWcVVuHCWYV4YKhmQZCwJPmKYbnxh919khCwNgDrxofWN5piuBcVhECBzV5B",
  "key25": "3xkCWFps3EV1N6UvFDXCV8ftPJT6UbPQv9zB1EANqvA2hXmiVuAcgVzk51BP2dorQmsaCReZkCjddCEWB6jq3Asm",
  "key26": "3t7DSM2HfriCcUafmATqh2KfoH2K6VocntS4BBJ9AUThZJnyxsBaBc2jFjpPqL1zG5NKUiHspi4e6CNF7cKt7Jo9",
  "key27": "258y42Yuadw6V1b3ULsDbXaW8zbKyrCF514n1o2HhwmsF3qDxkCQNvDxnGWc3buCpwSTdsBQZ2d17jfV1LqvQ5hQ",
  "key28": "4N3fDKrgzNGMcUhrWTQYu2EHECEspja5tSjGjGmSwu8crGNRsyPyKB34shBEsaLyJhcpXXhXRXj7UfBdJMwzE18U",
  "key29": "5FMXsy24vqpkeTkWJ92WevCUa7jXfs8yfD7JnnThwMbArfWtw8j5L7Wyqm7nhi2wCMfjQ7Ut1i2AJLLVKMA67phs",
  "key30": "tYjX9xDe62FEik3wkqBcwS6k7aiksgwghEgYg6bgrBTEtVAezybRwUWHZMEUXxQW9srANkoXB2sQimvb3hHTDp5",
  "key31": "5UELZFv87d5dvY3meaiUpvkcPA7ovakUyD86EmqQ39vg5z9dHxNhgP3QjH1XbqVoQxDiogaFCMR6Zr4ekTSx3JQR",
  "key32": "4TAaWa9XLm5EsrwqPG3wBNqFLMfFmFgud4aPk22b2pYMCJEXNm8FawVprtaKtYfWB34wUTY26DzdHJ1h7DRECFYg",
  "key33": "318vzTvgMFG5J9gnEFCLJZUoe2ajJDHZAKmtMvsjykumKaazM77P5e7AWKck5ieaWbwHznsFZueDBZkYDnBgKhNY",
  "key34": "4W6x6gpLsjjn1wnTCScccTTARTXmG9zF8odKNSGH4f28EoVch4Cnw5RCjLRaxsbiMxpC8Be4g8YMsC6MsKfjWJ6u",
  "key35": "SKT9kvbaB1KEVvcdGbbAUquQE29Pdkh9sUYgsZThxxvGVBZpVqNC681SCqQxZSgabyS158smkpfLvF3v4HYVsb1",
  "key36": "5pNvviMEGFNU6bxvyeAxDwyWnMebW63cQZfxRLDW83dNnPeePrqN7EZv3bNDw6XZk4SDcmZQPFXPNaYYjcgssgw3",
  "key37": "5NGBQF7CbFPnkw42aBJgbgdMHA4hoAk1eQN2zmsBxJFpjyJWjgnB8TYF2gpKUdZA7eJQixQLEp8mWYRU7K8wncRd",
  "key38": "4Z1Fa6JWoWjj6eE56dsa5V67gXiPEJh9u1zZvZRhQLgv45H1wVnaLoqzSPV8BKnqPD9V38gttxRrnQ3maWt3RyrH",
  "key39": "4UJfDVsmLYzN7XQ4sUVmGq5DSKS9VAbtgCzKrjKruBmws9e5CKKT58iwufMhRGAV3nr8kUvyAMixV5fXC8T4kUCB",
  "key40": "R4c2qTS3BH745n5WtJRf51z1QjG8xhdrbrMAeosTS8gCZuuCx6HKpmDihVmfmjkdMEB6t5FtizTcdjkCkH94EHE",
  "key41": "yZsUCPVfZvd8nAKCqShBonTKgXBPBHvEGviP87aWvsTG7TjhEtQFLj82LbBGjmN1314TWYDnpdnvUzmJaUKiteP",
  "key42": "5BbiPdZMVe7QaNoGETm7phiKkyPGQ15S3zq93SnWuiffoaFag3rBdb9AJGzdM6JtmcNqP5iqMj8hXfUs7dNY3etU",
  "key43": "YBiciZu9RuAYzxV51ACLe8DK5PiPeuF3M4iSGxBqGKXYsQcQmSnhUFPYMMhKv4SFkkaAq8PyLziCyGfA9zrpoEm"
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
