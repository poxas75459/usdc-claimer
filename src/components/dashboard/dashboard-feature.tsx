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
    "4MZiTRJLnsuZ2u9BSevYUbaDuiQzuE8qEZFYtVAVPvyvwi2KWpET7qXy89Hmr3Nye96Xz4nCcs87QXAypgjGU8ng"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vvqEpDsXn3fcGKKNpDjWdPojFYnkcVEURFbVYkoU9StwxQQzDTxY8R6rja7qvf13ETaYK6iu8mHwEzyc6v1Axb4",
  "key1": "3aKomZYFbCBr1gaPCRdZWRUn4xD44vSc65J7JbobwAqxZzWqBjx4ykvX4QnqpHufpm1xiTnzo7xKMuzkbGtR8Bxf",
  "key2": "61puzznDuKvGHN5fjPHYyAmCwAwoQx4xsP9uJWG3R4xxr1JhcogPT8FZsEW7WubY3SMwrQRThWyYSS5z9sRE1DSZ",
  "key3": "3KBW715pzV4LWGEr9CYgr7EqCWZTiqXKjK522brAp6XQtj6q279vCkZPGNVC7Nb6GNrXudRKgeZyeWaRtNaXPak7",
  "key4": "23M63iRyYGpRmPZduQsZ1KGP2nQprkiHpCQPwE6NrZdNNAB4zXNXvtznT2xAnZNqQt5wsjhsW52XtjPXvBTpw1jo",
  "key5": "2ohsFKLQbPxMAiNTwfZRSNfc619AfYvJRJSPo4UKBvZAEebvVJRWjaWUkpCXdK8gYwUcrYLkdavLmDpwxg7skuQS",
  "key6": "2a8AfTUdWcwABA5TPAEVUDHPsXwZeWFZ2TTtLv3cUSWWgGsHS1dt3xoCjTRLipfKXX8dEyUXtaJuXcyJR1j9xf8i",
  "key7": "3bWqe4PfgKCPJouuFtRrgmQbVBDH2H3sxYpNBEAmJZArrgA4tZzFyPESx4Qm6oYFdRrdHfbd9mfdsxYzaGkiXpfb",
  "key8": "5NV2vsQvxAv9MYtx424X75KPdf2F3UzcN6evkagdeKHZ1iq2mUgsCujdf7m8yEJq63kMLT5YCvaXiqT87UpCgJK6",
  "key9": "22RNkpokDubqb3nXapfFBnECNAhZYH3LSMXDQbUztn1am7WhRGb6nJWyGHUUbRxMNAcnEixC3gmjSt2yGo3tWmqc",
  "key10": "4h4KuVuPCKnNTzSfhmUwYePjsTZkWoFHC4Prs6MEby95zU9vb1DB2FFRwnvwStrnNVtAVykJCNmAG2aCXdKdAg7",
  "key11": "32jYxXUJxY9jhoq9ShR8B3NLGVTDAvn92qQbAGD3vVCsfbPwvGduZMKLZPVSk7eGZXwSYeTX4u1Dp4DG4j3JEdak",
  "key12": "55Pn6zyiS8eYQuMYjraDgopWCHjtReUQbQ2YYGcUWoqKCotFgqVrkMAUTjSMcG3dmodKwweCohAyPTC4boQikrs4",
  "key13": "5ZJbVGUnvkGdTBa5a2Krurf1etC5bBG2wRxkWRqaRr6A6zXbnuSkK2zDHYYpVxfNwQuYs56Zw533ySNLg1BK5B94",
  "key14": "3mfrknjb9JEYR6JdNQHJaty5KCbTeyQjHcAEokmTM5fJnRbdTF4EjwzRQiVWjMx6q9u7uuVSiM5nqLC4wFGmL43Q",
  "key15": "419G1h1RTMfEtPGVthjCLDdxUGCR2k57UDH8b3SVDTZVFxfbR62YQsYbcQe8sDsAE3hzj2TXjreuDiypmTHCqaQt",
  "key16": "boJ1JYZqxc4Z4qEzJ2KqL9maY97qPKZFungmrucUXYZFUUdjrs1dpMqBfeAuCjdXnLh6H5BLNeXnnzjVrCJLqJd",
  "key17": "uAuJLUAdnwdk7Mz9HJWKkJyvZAdyq3iKSzANRCcfUg7fDCV8Yom4z2mDANzALFxqMyyxfuPVjETEzjAmdUj33Nd",
  "key18": "4bBs45bpK5a7JYDSkFXJM5XHFfxnKFHekgAXBWs6idXwmrGThFd87ZeaJcKdoW6pgz5RazsSe57hu34uRoKqYyg3",
  "key19": "xakgZe2MjDHVdv6UQn1RrJ2XXSx3CCmTLPGsN3c3zvpiA1uaNvXMyXUJZShwcAHopyVGgfAC8Z1ntUu2ogV1NWQ",
  "key20": "5737KS5zc7KGmtqtpcz7kxXfQAhVhK6SsRFKBHcLGY4g3DQydU32MVFxYeMYfwEU4bF66i8jgbzMpy7oX5bJTFXU",
  "key21": "ssuVU18jwLjpNqr6Mt3WgroStfokw1iVrJe3RXwUb1PKoXyeKVUnHdCMeZsRU2GzHHmaxAAzXACPHSQWUZSig4w",
  "key22": "2452yM33NMRKXCMXEHM8UaWByxUvVKoJYMq6PEBFTbtUz9Tc3ys4VBiMCpHkb1XuBSx6yadNPerqM8V8G2wTcmbW",
  "key23": "3D8WHPeGS6BtHPjybFZ4XTL1cNjrbb6sKbR9T6SD1MDnSiUBQRbYwrLKdSKrDhFYp79yvYWoafWTAu41dwfJeTQp",
  "key24": "3pzyboBqgFykdxZd3mC1m4BBrGPeLmxnjaUJFji5QVRzbYACmAPeo7BK63nSu8mxresHbPzJkomRfYURvBQ4owba",
  "key25": "4SXh7G4YwjoJ72xjEzk7z1Zcsra8wJrwoMDDAqyboCt4AC28t6ZEf6g4ndZtAgr5DTwLFueMarFZ4fYYCJwpiZyt",
  "key26": "63r3kixCRroyQoPDcyMTyCbwHsmZf3s8x9K5YGCk5dJQpT7JbK5KJ5DfqCH5tKGJCwZKTDsVwAn99ddxC9MZSJsq",
  "key27": "Ap2BcDKTA2kmdWqv1ABUDqiDgvdZMumgvL1oWfyLumVJZz6jW5zJb1W6UXotPa6QuE3RLdWLqN7GSgiHuW7orZP",
  "key28": "6WiMirL3EjUMmWDexpHqQ22FGgAAvK3hA8QTFrazhWYzcWdJDPBg8B9yP6o8ch1WWdA7yw5dWCfLzAMkHd2h9qB",
  "key29": "waViyyznyCttsFHZV8p1RfCxe7WsETmZpmY5GipUaG3YktzQscChXV5JfJqH3ECC1rrnn7r2korFGmqFMNZkYtf",
  "key30": "3Rqn8s3Y1ZoDsy8smj3V7pmCqZjJ8Sqo2fWDPNnoQXWCP3iferExFtx4MQaerKeo4Kma2tp5LpVNVozJQvqdDwnH"
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
