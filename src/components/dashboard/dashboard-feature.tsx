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
    "54UASnjFhHDK1EVsLiVvzQxPKxfmgTGDvJg4W8mChkekG7fQW8WP8yWhzkEctAsga1YuGFGqgKD3wBT9T2spa39U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3D1b476oCD19SJBRrxASJDJvgzXQgjBW2noUA97Ukv94zZzMSGvnLTw8pAxmfNZyqGY9Y71GidCixub18DrfnP79",
  "key1": "5bWM7EfhB2WEvnmsfwBvZ55QnkFy7GeoxdiuSLLLfiqd15gxEqvVKd3rqzhHQvrj8NGogMSRVq6MMoinSB2op73h",
  "key2": "4jdKmmEj6btJWjHhJyUHko3c3GedBJ7LM8QLkEqn45TQ1ek5CFky5giYzpJo8jwNyz33NkbNBWYk19dtzv1yUysg",
  "key3": "5cmfVC6kkPPDUNdFvZyGaotZu15o3ejhpMWNwMPGH6wJBuZNKkRq3FjRjazjCRX5yf3t7y9ZUzXPtKpmneNLJpm9",
  "key4": "3k15D5GHwE4TZ7jXZMsbeFXYo6AWgymv5c33mkqZS8mzJw2WhBrrzhnGuyWuoir3iScXo629jzQAZCVdVLMZxfUW",
  "key5": "4t7dSJgHR9psAecmjA3adLrY3i8fhRYWeM21pXT2haToY5mNwnhxHfBkPWQWyHJPh9CrbNjeeS1LvYMhVgxSu9iS",
  "key6": "2A2FgG3b7KfJVGNqmdrQNAvRbBpEFC9uyVgUDkV97RmuiJd4wm457eLbPahY5sb1ZtipdgcTa8pqdi9p8ueDoCoR",
  "key7": "4fkLmzfguNgjdHwtPwWQwGrqy7WUKWVnd8todxDmfPGw4f6ZwaukPVRBMuMuwYtG6omBnYaYXuTwnA3J2P5AQMh1",
  "key8": "2Dyubh4uHATfBWWtN1tk1ccdDBLH8rUF29AXFoSfuPGwYmmH8o2ohmmFKGcgiTnWQxXXQqAV7yzg8nFt9SWDriZD",
  "key9": "3VyrikYcBQvLn6CnpSzM2FrvB2uNfxSsQ7c6ZCcSchwnScSccVxpVgYSHstx1bye4kpE4b5zZge1C92YmAo638Mr",
  "key10": "2v4vRB1ZHhTJzi3KMdAFUh379Cx8S3icMLuwF1Rfczfx1Lt7mvMABvEWiTo5dU6knyY7dCrpL9tb4uy17VpHNDXy",
  "key11": "22tqvDGzmoM4MTMuyZUiUq8rQWQxGaV76Kbe7wftuCqN9e2BP4FCbutrrXo8E8BEZqfpJ4br1auZzu1RE3NA8ahK",
  "key12": "5ays3LaKrTiA2nXrUSbkxm9x7P6CLpNrykQRqvTv4h96CMkNRU4D7m27e7PWwtmNJR2K53BnFi3tTfffc2s8dRxy",
  "key13": "2E47kueKTTdiUdYAXGQcqVQhcPCBj3re9rfnQf8k6PWaFFVShFJnpuL7LZmgWX3mrLTFTnsMEiihyuP42uqttxb4",
  "key14": "99wP2ebDLVay9vzmS4goErjEaX2hMf8TEg7iE8MEWDQNcj7co4VhXkVgvinJmDrb1TaWhJ7gTo86Yb6QFAh95Aa",
  "key15": "5PbjFYX6J4p4yK3ALVETLUNhKCab2QwuFEjvqr2c9QCkCE8KBWudg4a6gvBUMhzLTnzDeLKdzkZxNmgWRmp9wcHp",
  "key16": "58uJPkwh37moL7SirwppC4nTRaTcK6DyBkosgBjEgN8qaPJ8JZp3DEughW4tSE9RBKtoPBQDwwekqdt325KhWSMU",
  "key17": "4gGaDUEX3wuNvHNkggvJBTnPp9H9jkbJkwvPCTAgLiUKAa5DXnhCDFxWgPER87JEvFoFz6LTSQwHxXCpdYZ58Fe5",
  "key18": "5D8D1sKRywDwvjuMiHGFk7C9mvuTAP37jHeFnSneLqqnf6RZtTsw6FbTUiBVfbvPCCoZLNDdjA9JXYUjJq1RpXRF",
  "key19": "52rz28aTRKYGNFRKuKGtz5eG6QxtdCj5WLFggbAE2d3tgcdCSqUtknskCQ6gN8DGzzFW7e3qSHpCAKZpHx7Thd8B",
  "key20": "3sqkf1M6rRhi24MRkaEDAHZuZHpRMYVoL12SepHdsWTUvWQPzAKAHTGvc47kuqN1q1zr4uUvBTdFFgEH9a1xNg3D",
  "key21": "2KwajDdTuvk6vr4U5LprdFF6YZrfx7t4DJsWBFn34Lnfd4XZAdjer6SfbHG4ZxjKd89bvJxRxJPwP4tHSMCTuSnt",
  "key22": "266BgtzkeDvBTd2HYVEQJSFUskvXr1eGrvKMAkVeecdv1kusA9BtSn5L2moaSeC4mptXiHDfXFQTRfZ1YHJhkwEx",
  "key23": "5tfCvrCTM75obGg778EtpsdDgsQgPZzH2su6C4PRtvtSXMn9U36KS1n6vVb2wEUrbFkzpL3DxkhtM5TghEXgZzNd",
  "key24": "GFSXRLCcTdGbz3wxaCUbFV7yX2UFtsrsAf2SXfN9mMBLGvuoQtBpCmt7CZRTfXkNpnF1wjHia13sNFcQC9AVFrb",
  "key25": "5xjxssnbAFYDY7jxi6tnPz7tyWJia7EFsvCwDBLWJT53fBYnABkXXGAYc4QVWSKaKsceKk1FDd4imdb7p5ar2xuq",
  "key26": "4NbjJvHZzqZh5mMmMmtVcB9WuevWgfnFt26ay8GmJea2AGXWFzKt9KUJRFoRb2ExEDxewVKPjrz4pXsjfjuCJFex",
  "key27": "HNm7gjUQps22HQetu6YkrtEmZscWxGBfwJUEj2LVVxtE5Lwtuc7PjZP7Hx9EoUQDdodc1yR9rqrL9rr1hRxKA4Y",
  "key28": "5m78KwXNaSj7mxmVSMYT5muAbr5hnu5rB6W6f1EKfcwcSwFaRLYzCHPGTe5MQnVCkDUcmSvyw3CDpkywFXBL843K",
  "key29": "3VnF7h4mZM6mnEHWA4d88btxbjfiqb89T24CtZp8VdyhPnSvVwZ4RLKCeppi9tduYZLkFr2L3sH2QacKo22R1Ah4",
  "key30": "2KKYgrL4rBnkX4dAbs2VWs9xbNY9Gm4AgndrBa3abUQrEeaK7dHi4FoW6ubQk6CxCUmeKKtmpuG2QH8qeNR267KA",
  "key31": "sEscpgvBVJuzjTnH3ZTWXy9ebuVssG1mJJvbMSp1fdAYTgM8X3p9A37frNganCRYgYUwPdSfTC1RAwuoiWPso5s",
  "key32": "PKFnTTPbHfm8JUF3v4J5HpQKeGLRfRic5fJHCB7no4hq51T2tc9PGUcMrZbc3H6AjJeeRDr4ha4JYocJXxSeMhx",
  "key33": "M2rjbkrQDGd9UZkk1qWPo3YbuiJk47ZV6w4LqZWnTwtLcsVy3yAWpsuZjf7F8ymyk5tBcvc8EVhGEeJc21Lzcbc",
  "key34": "4UZrRNV3dEoY37D31f4N67r6wRin9FiDyfErEHqBPF7Bfpijdm8HaFK6pd4gqjUMpay6Jb54fN6LnGyCcbErVoRH",
  "key35": "4xjsukHjNEdMWFSffXJkw2aJWhX1CTQJQ7yYun6BfQ7JippLDy7LntkQRW4CdJwNbm9RkxnaReAZJyuTfvdSfrr6",
  "key36": "5vCgauFbTmKmxbynBQPKZvwkZW5hzwJjPkdmACJUQLrLnpMTStoFTdRHjPFicTXX1d5MLUGZ5WQmqFoCQjbFZh5G",
  "key37": "3AD6Sexssp2icwa193Rbf8vNydAwRyQzr2YSXPGFZsLo1WLBUuh3sXVJGV3YrSvAGifPX8RiAseNk8qVwu497QaW",
  "key38": "jTQqpybF5brH7NjEh2XdpuzmrZCYMJwfAvMkSM3bNAjKLDUEHD7t1KrbyqNa5vsV1gMDTf7iMNzLNM3BwTGbwQW",
  "key39": "3n9NL8qcnjW3uduLWRoAEv91vGh8yKxEiW1cKXWC6Moggn95MZHqK1UtUzsEv8c6TZFU1dWoCUEn9oftgEkRHkbs",
  "key40": "4oHm1YVPXLFx2bCPHByWzNM1tCEp4aeD3rwHyphGkFFHbgjqXJu7QEUQb85oAdToX5uWA986zQCRPYvPKdFBuNZK",
  "key41": "5H3Fh3zR8rKogCXzQj4W6H1yxb5jpJ8dUfLpJz7BcxzKHrU7iAY2w6eboMGNgbHnDYkBq16Ukk26zx8nnN47MC7f",
  "key42": "4NoXnUCVM2kCHC2FLUSEaobCaVVQRyBH6wi6WYKPketRSeDDnj7jB6fTYGSYicmFSgEfr9BA29gGdeiJ34s9vBq3",
  "key43": "j4qDJzmovrPrNKLGket4mnWiC8BQLr93FYvQYf2cGrnWfYCamo2jL7KEooXE5VCPk3gr7oWhtDxFbpyeRBKQrdt",
  "key44": "5ukPPLiSodcAVJrQr4YCAp2muddXdpJQif7Xwnf7ezvqELVYksHHEhLAYYfip27fRMJNT3uDeCsPdAHhB7sKzDkM"
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
