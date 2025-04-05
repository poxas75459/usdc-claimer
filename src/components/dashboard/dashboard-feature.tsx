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
    "346N7kjNRCra229TSV1rcvu4ALntEHP569a2AChfHQhtMaLFW1CAPb5YABLVxBFBKPdBgyQ5BExJSfatbVDg339o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fKRd5u7QULr9eRrDuyoJqdbqoBd8wQPSGo6Rzo4MDmQvuhfdrthwZwa3nm8VyRz1sFcATtrY8WgMtDfkEDnqTLT",
  "key1": "4dCTqQTeYwyHqqdE1ebeYagDcbU26HATSyqL8qHk263hH8RCsAKR9R3TE7ZqViBm3Y7MzvqTATBZJhoRDz8EKjyj",
  "key2": "5zUTRAxkHp4GaMCzzYUYhMhJ2Gj9WfVZGZVrGTmaoR4aetJv8yGUHYTsPFR1Xykt6QL12vmoZ2S3h497fNXpp8H7",
  "key3": "2AAbaV9YLpj7pbiLgAENZsC1xQqzsLKGUCQZpfWEs19QG7aFTPsuofAx8XDTSCZEfjjSoGuu1B7h3qnXT1dMfMR5",
  "key4": "5k7tWCU9LMGE7oyeHAZuFh6V6XiBs7zCVQXgRTuYYFMNsAgi1F1Fpbip5g59gy2HR6RzkbwRvF26DzcGLpRedMxg",
  "key5": "3GrJ77X7KbK2XpCP8DyF2xmGjtpp5Gy3J18eTS3iuxVkcwVNafqav7syiAYVb75idRNAzfpX57o5pQvH1pLn2yfZ",
  "key6": "2YeAUYzGXnVouCvKN3SXto2ZtEN32ys6A1npVJKyBS1qRHrsfRt9cVKSVwu8KmWPK9KhB6D3X5tZ1bQ8TDkAUArn",
  "key7": "TJ6aHMsri55DugvhCeEqUjS8NW9jtVtvjirTo86qh6jgsftZyi4JpcSTUfRRSQ6g8eLSNTetp9e2qyCqQuB5RKC",
  "key8": "3FrHkdQ2623SRRQt9gTuosa83PDa5Byy3jkGKY2tRgCiuE78yNF6ksyAZLe7J81RCWF3HuGi5gcfhFb8sankxNY5",
  "key9": "5L5QWGfQHpVxnqCxc96dtuGHipuQrNnCLd3e23fjjTGNu3Pg3B8My8aqyt7ZBDUFrdBYYFr2nSiLv69iTXAe5fV1",
  "key10": "52vhujkYmqqGTQGmYYtFUkZHHRFLD9r7A8xQyjLKx3SvZd5taE4nJBgoodGXLLKDujA4dE9A6HVRQE2aXQbJ8xg8",
  "key11": "576KD8cdFiZHwui9NHP69rmqcmFLVAGP9BWtYWsRMwKf2pNwEmtVcTcjNHTPzFzZ9zvhEuPMQY79JXUT46PKLmdL",
  "key12": "4kujrLrpnWKJkorPNgQJftjcYwpHfeGxVzY7jyk5ig54tNbVyUWjXYbi12aJtRHDyenxDFsEp2fufKgDwaLWHxn4",
  "key13": "5LWikknixAaWQfsxQAyrmLLvvHmNc8uakxfG7hiS6aQNt1d9EXKdcJcUq8k2TRR7hZQHQRy6EWEvbd2oRuKoPEA8",
  "key14": "5hts1auc2Nb2VVjfZaxwzfJGxa7UYtSETsA9ZB3QjK76ZgDUR47KoBFbw4GafxSGt2qDjvKmzaw4xYPcYr6qLAfq",
  "key15": "2PAxfkt3frW9kx6bFkVjwZLLdczVqHSxH6UmzsjUaz8Uf29mh92NpKnsgApN4w1QJTiZ7z3Ew1CZB8HXiKvYdceb",
  "key16": "BVkzDr6Yen9jZUcZi7dVX6mrrXzifvVXbfq4aY7JSpaaoZuUV6rg41yDyHiz9LJgVAB3hpnHda3cV15TnTGCMiE",
  "key17": "5q1nUs8q1gi1URR9AFEDwUWHtBaocUNAxZb86PNRCw9iCbCavdRfRWCCJ9L8nZyGVdS3iAnCt7vQ4xcxzC9HoHoC",
  "key18": "4bEXJg1FAkpNPYdX9PQr7FqCbvwB8X1RJC6nMfvCVqX2RuZMrYXpauL4p3BKf1Yam92rXSmBgP1jM1oSz6tVQWPE",
  "key19": "3JBqfzoPKsYfK8GE3ZWwHijwKQPiwfcL4Gx4XcojsadXn6fjR1d3wsHrKmLRDdpzCAGvRwurnKxjRF3kbNYySz79",
  "key20": "22MppCRHnUoogYrgaaYmkf968XhvNU8bdXc3cdAt8k4px23ZSTYi27ajWMcsXUhUmPo8JC3HuEMDHyLzjgt7nLVx",
  "key21": "26GwDTLwUd1ED1N63FbQz1rL1gwdEBUktNEGNC6SMAN5mGU8K5VCQnarcLNweSuacnB4zmu3DCBjFAyzPYAN7x1o",
  "key22": "nkThMzhZ1Y6pCM1UNNs9PbTY6nrtVTJLdEeTeXBUNYD8GieXasVffS45fmFdv6zuAKuqTrvrk4p3SuujvRipPLe",
  "key23": "2uaChyqTmz8hyP3XBhT3CBdFt4w3tVhBBFuupkXboWJzzAcuW6RwnWJK1vkSSFHZXNJFdNcWTUYNJAsp27howKiG",
  "key24": "5PN7wd6gVH6s5FtovbWaxWRS2qPLP9gBEtAr12Rp4NjB6aZ4QbKT1hmdxEaXgtJJhUJhWUZ5Cb45WAg181MgxZN1",
  "key25": "3xF6ReJ4XAjqmqei5XLtrvynkbCSnGUAX1Q9KBAdwPTkNBYUqUjK4b5EnrQLyuVfCPxHDPxqooLTVmiw1t8BzJG",
  "key26": "4eW11TAe9xSNzGAFxgditwuwTN7QX9AKRtusZehwu6XtTM6QHAVpfb4z6eihxiSZxao2Q4oBi7kwZHw1mrKincaW",
  "key27": "437PMykjCqLHKDw3qd35HW9CtH45FPzw95VQrpbYbfhLLm9E7bor6ivymNwomAZcV6Cc3TirwZ9k37WHLP8usCYy",
  "key28": "5uQaiYcMmiUnqQ5JhhvfYAtkgTTkQuThuostRj1cHaVu5gk3erRMVfeVgjk8enKunSxBHyruKUZgdDnz1gpZJoPa",
  "key29": "61R39BXgsBAMQjB9nBMKyxnrHGjBKRrXX3ryu3r91NihAMrCmMLfBHK3qwor5eHmUVK7RityDJEW4vcyDT3Qp5Ji",
  "key30": "2Z2YtmQSGD8nvbsPNpXjMxLKUVrQtxSWXkyxoKK5vVU13QHkqe4ZxaBDwcn3iiL76ZQ6mfzfoRmvePNJY6RpgQuY",
  "key31": "24QTSJK5kPvvuGUeedb4bi8qEGGS51bsJhKYxe6kBvmtfkRdTT5cG9LHt6vbtHNCCXC2mrTzUcE2NccmVpsXiNqM",
  "key32": "2pHq4KAmqwHvUdgGwEvLDcQSCnqKmdzrMP5ihXazjXtcieDPZfEoU2pfwdHsqHYq9BMYeKkCfcVvehwtfv3PgLoo",
  "key33": "2ZLEjJjvUejtL2Q6KT7JskcynffmzqPBcvzwbCwVLCihMmB9z2rFfaZLGWkwbn5MdNUaKais3NXyGnTdScQwZfMQ",
  "key34": "4akRaC373gbXJbaN2DBXrLn1b6KqHu6g9EqrZ3VEhxQEXPtewyxFNEDuaNAYYPTBaiVXGogDhubGbGoDvFNPYMCE",
  "key35": "j8mHPuALbR7xurmxZPpTFofA6Dn91iov6wvdgKacFJiQwEZ2ahTJ126HdgoG8KKG3n6DNTwHtsgdk2fnVjgQy5F",
  "key36": "3ibr4nQsvxkYZHXQoFpEUhG6RHMP2JVgwHLnvqr6DtEz3wXN5Gz2JQDedY5YXeXz41QJ18vTjUBJuHnwiezFWo9G",
  "key37": "2TDsiwi5o6f7VBQSak1tdjrmPzrRctuYvKnfGRBXWwZKdyNmkJ9KpSdZppKNyZ73mizE5qgPhk9MyNzmHczBrCRT",
  "key38": "4v4vYMaj7LCa44SYBJMCMNFgoh6n9RAN9qh34VuUXsi2Gtp1PrZj98moQwwEtFy8MzGCjS21mJkk2byoTJBxzMs1",
  "key39": "5zxyyW53JtQR12eo38mtXVBjCkJEABsoYZ84bCvNA9nbVUbfVtYhYWhmvoqPb3BFxsW2UtrrJsST5ELXnC7UPXSw",
  "key40": "7GMSwbjgJJNsPtxyKwyiogy4SD9jCwCwcPUvvx4Pcyey3wUBknUte48Yq8eZd9pTQxCGLZYTxFnX12QDggGkRkx",
  "key41": "2YMyRR9KQf1M2DVtSnYH3ZFpBWSDPmkxehhjCPthkqcVNEgZRgYKVuZLocfR1moxPT1H37CqM29ffMizYmtoz7o7",
  "key42": "4jgaogXYNLifHKxiDMr4XzMcrfkAdeWwu9A8bJv8Tm1EraqRt8ZsircnE3hsLWGHNyvTby8ShVLZ51K52UL4DUJj"
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
