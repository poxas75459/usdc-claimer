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
    "5XnqGXA5cnUPLpp6hFpG8HuGuAioWdgWBUamKQ19E6mecpBQ9ReCpoWrdkXHqhWYzqpk7XakwJTdM3qBPN578J1c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48m7mWcwv7vtJuCJnsHAmq1tKTaDg53DWqKf7oGDYaMM73L6FtZRX8yWg6sXnKwxnCwZ4SEFUtu1MmQVq1GT39t1",
  "key1": "3AV1TDwDA49m7rPX1SsJBJwx78XZAtW888J64KDT2R7yZSKxJN5YGSkz3bMaBoBzVHQHWNzSnyJNJm91D7BM8ndv",
  "key2": "4GyF6XoPnKAmsGZRnmwkDq3CjmCShDdtryPKuTGm2mfA66NgKjA4P7aCJoJ7QLA75oKTrxwhSDX37f1qXyMX1fy3",
  "key3": "49diEbituGLUMth3MGCiFfskdNUmdJ9cHyy5CMoMsXP49WD19ubsJ1HnYdXGsgayoo8g68qj8YCYHmgM6rfosdHe",
  "key4": "acvJ5iygaeGbVWAGVy2fwMt5mpuSqhk7gwzp5bNNsc2mLcrKAdseYq2896gZTwJvzrMpFb9RqL9x6tEcM7aMYen",
  "key5": "2JNZxBTPYADetFyD97ifc7TfVeLghw6ehzyzaNYWsXGb2qxhGaEQ9zFnWuPMKXLu6e8gFvYPqGSRX73NgBYKQypm",
  "key6": "4F15EjQhuA8hAs4tq2PiTxz9NMxRhasx1YKogZ8DERmn6kexcgzYXNzRzW5yi3Tg9KAdZdcLiziNZmmYbcg5bC3z",
  "key7": "3CgbYQJ996ZnvvrphuKxW9dFoX8MxFG8SHKKqYVY9xaPqCFwUowjY2ErYzDGxPryXncHgYjzRwYcinyroUh3PxYi",
  "key8": "cCFutgVjGJrKjR7azvvEH4RsG5LYNX6qxywhYZ3n41NPSNL2zHQQvi6MAv2ZKy89GZC6LhF5fmeEBZvwge3wwh6",
  "key9": "3TZTPBxcH2yH6wHRT7m32fDoXoQ25otMiyxqPA2XvC6aBcBPKbMJKFJ6Bs1UumQiAZxvS7Nh2GYu1kpBuoqv59hb",
  "key10": "4cEh2qEJRMZGBuCfjxKJEYurbkBcHh34vGTNKCFdb5EsaaboGb1WBMuGaYHna3yRnA8y56T6YQF3MsLun2MYHUPR",
  "key11": "3GifoamssWBoVk9xw5pJCdEaDGq2GLnX4ZhGcGe3LF3we2u1qHokzJHe4SNpbFET1uCbLgZ1MZ8TrEcBoAhTo7M4",
  "key12": "24JpN95QwKTJHFJJ2at3qWrKMzNr8rbHL8yYmPKD5RUWLRaRp1PdxGjx5muBtrDJ59LGxaaVCzeeGuUuSTG5yT8S",
  "key13": "3tZs1HoShM1zmoS7qJ2ttNUoEx9W3AakUv4xHnj5rBaLZH9VFkiAKsu3jPYcKzJ7d5PadDQ7B3AYkJ29UpUTWN83",
  "key14": "3sWTqE4yPAXPRpsJwrAuQFMqovcDatSUGtPRYQv8G8b2mvYhP45V1r5fM8BK8UYosdgAKKo99CvZq2GtArUzroz4",
  "key15": "FEwdXvqiLEkVgUeuVYLbXvRBUxZuaSo5HwVSFq2EiFTzjD8y3JfsqpPWQ7VAEX5mcMfx3W2pRp8nVAbYJrimYBH",
  "key16": "3hwFiYxP2eBSab5VZGizFq3t7VWgKcgRWdrVhSR2dceXd4hnwCDgwSNeUkHybtztPbHYUWV1zw2YyCQszwpB6eDc",
  "key17": "23aRd8iu5U4QDnh5D8VV9bTQo97wKoCtU7Qrv61MWvuH91hwqKTyK5ToBzBztmndW1ZdcNByb8snM3mP37cWRskT",
  "key18": "21Tvmo3xUDm5b2J8qQsxx1mccthf2QhcRDicHtt4dYDqe9orwJZVsbWjfRAiPoqiWKX7HMfQQCc8JMQJFJEMtxLP",
  "key19": "5nH1266B7UDwXxwpj7UNr7tohZAgtSEmvt3DuSNKAXSftMEGGQQ5h3xWceComnKtHJPgqqoEfnLb4ucFWVa6MfzT",
  "key20": "4TR5ci6GSRpwMdL5mF6vfCjsghdpJtEpmrgTz1cDBH5rWPb67Fv1cYWbfb2Ftg8NK1aJ81wxxdofBpbBhuhYwqoz",
  "key21": "ovXcz5WG4Vo9gSoFtNarA1HpVSi8v1kSQ7Ugzf52rCCr2EBDuPPQSSrFYnDPFwroEYR4DfPRZjeooHiBA9cfoEi",
  "key22": "sjsb2HTzwReiwhSCMzip5JbkWApHFoCMBQVJdxKDy9cYyAFUAegr9Je2MXVfLJrn7b5qRdAPRtAL8vndoGxkdHB",
  "key23": "3fW32mvgXReYQpQAKM3qAzF4fwpnnGWrAH91cqwgair46vpgS3xhQG4Tx9epjwLr1abb5L4Dpz769UJnTeX7ZtZ4",
  "key24": "57JhoUstcQyutZHsUYDXodFRVGFy7ZeEQfafYcvTVUQUKSKAWAYsQ7rLFWBMzw4n5ABmnqi5gUTS6u3XuGNdEE5Z",
  "key25": "4jVqKKEu1QMmoxdhiiNdspecnmqWRpD5Wun8mEwqczYWWmxAyi7rfMKvstaa3XVnH97Jan8ZZtDR6VakbfvHAmfg"
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
