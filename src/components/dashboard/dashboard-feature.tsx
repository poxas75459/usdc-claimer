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
    "5d2ngwNJ7kTUjLWBnm9jjNymbgJ8nhAKA4YRjKY56gMthN6nY1RNXrxPKM4usXctfTFGCB7EwZudUCsQHiK1vEc1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BNeGUcnXt8KcjU4cGQg8EQsS3wL49Ubq51NWa5i1yMy8Wh1msVCvAopRaeGV17SSga9QhAg3pVrAEjEsS5vxUMB",
  "key1": "uyZYYzWvz1a7rcjXXqgScsEgWtvTvP8ySXDeGHvRJhfwteG8Z3MqK1NASLUz9s8rkvVeJR99JLpfgXuJjz1r91K",
  "key2": "2Q39BtPvbt37EFMSpP4z1k177GTxtHW4FrUuy6HKaPrAAEuBQWZpEcc4F7FiheMdoDntoU8uKYzHVGu6S6DzsmHD",
  "key3": "2DQEn62K9QemLVA1RjYJgS9jrMhMgUDqBMEXeQZwqQf3XiLHCRF2bdWHkkrHkSF8AqWxuXXqNTWzqtF4P1X7sahQ",
  "key4": "4cwSMG4zprunYMjtnhD5tFJtexcpzk1FEbMk6GpJQGVJdj6AboJUUQ2A73HUHi94WLBRv1GRKq8UJDj3CrdYkV1V",
  "key5": "NPCr3e8efBvKbrveUUTvHYafkwxaDnvWC44ZrNStsFWZECc8khK1hHgRGuKgiDHNKzXb5x8MqKeqxjRffwRwB14",
  "key6": "287KqyBHftad6S6bDp7tyBFvFyjzLAgmtprs87aMKZYgdzZbbnVmLKsHSzXHqHUCawrmQQ7hWLFzubwtPc7fERsJ",
  "key7": "2wu11BX4yp8yQzDdWttvTzxncjEcF8yQuRBnneDaL9Td6a4MUMfnSNKKMcEVHan3diDG2YQgMdaeDSsKpM4B2qmu",
  "key8": "5q5NBqxRB8fEogGSvXBrxXr52tUcLYfKoLCeh9qihrKwkZDCuN6Ca8WEbGs5TjMDePKZiYgpv7ScNLak7rzCThcY",
  "key9": "5WXNox6rd8frE57GDFLrLGwELbVfkB3reQX7NwNh99zkXAuXzBy8UR7em8qyo1gdUveBskU13Lh5tTngKAVbF6mh",
  "key10": "3qZ9kTF8wkZEVJZuZ5ViENiC5CjEz7UfTALTe6iQFVHuCGXCTbMrmprZ2s8ru3LGpxwnEwJML62mAk1ioCz748M3",
  "key11": "2tBkhFvC6bkUtra462iFLzLgPatJhdrawVM1xRKHXPHirBoYcEUmQqrDqYJZxnjzyUHq7mXGfttELRtTMWs7mfZh",
  "key12": "3QohJH4fWjBFmENHXMLUix4NPkKAYR1cNHEgJwUQZ5rEMYYp7DpVm9U9Giajg429STinjxuAiGoBXPGG6WzVGz43",
  "key13": "FL1RV1mHmXDBXMCGqNwG1nUENoy9Yf3z6nzLRfUDLm7PehcRXXAkRi6r2j46vNe6nktaWZy3VcCbwaJuS3CUxae",
  "key14": "2wDMrTUPfK6eFtCiBkywqsP7vHsQc8k3ZAGBi3Vvw7rutNxxDUpQB7GSqoSD4V7NcqnEkSaswqVgPurSNfLGsN4T",
  "key15": "abYdNacEttSbfL7SvD5WJFCgxMZQofL6Ybj8VG4g3YQqGejr4QDipqqJmur3x7GmGwQBUfaLkSNDEViRsr7Reeq",
  "key16": "kxag61rAzbbT17hSjEX1QJtcDdZ8DUj2yvM44SMwh3ZNHHAhuwe39FNhSDprJ9rQMSv4Ge8YkJtovxpbyFKj6d9",
  "key17": "3UwMkecbpTjWHU6E3En64RByhRgRF7Wf1L83LX4HYoPGY2KWxZTwa6CzaiQEhgUUMChi5yn7XNaJkmFcwKaw8YYg",
  "key18": "28dEJN5aJN4pVQcFJZ5WTMj9ZLaRUoD75QtS4ZRfkGTpTXgm6rTvj7kQQhptLaff1aeARRnTRZ1az9WkJgScGYfp",
  "key19": "kL9NCYYr5yJ74K9Li9eyPwtCcprgyTkLfyHiFs4RqTweX5cGj4HeE22ibXB8LrbALigmV4RL1HmqFEGgzaJ3XUv",
  "key20": "RGaSvJrjv6cT9Rfv7crQRe4SCLyW8YopsBm8HytFk9vCsZrNzyozidF8ww42HWF6EE1zTbLBA2wzHh35oJ1ptzX",
  "key21": "2rHwjA6VH2T8LuLUKxvWrfrmjjVmYVYei1yV9zrXJFxYyCqSLC5kndUhhJnVPaozptVcQjhU9V1cWKAttuKSGNL",
  "key22": "qjiH6nZbJHAGVpXdzfQ4Cspcy1kEnZrKZPTAJQ5fUJH3vSH6DWugo56EDSZS3Up7Zoue8qwsVknkGkNT5tiZNsY",
  "key23": "3ypEKKf7L9cnDqjcRZu64NxhDPxg2Hzk2RrjdXa6CSbZErjoN6bNCmNmgcFgJ69ncAENMK71kiZWWJ7srETD2MeZ",
  "key24": "4dB5tEjewKrTg6mqiPXMus8cv4n87ePcmHAksWh1q3mVwLsT476VqCDF4LykxD4AWgQaS5dZR7iWTVYxjKM4iasC",
  "key25": "5jMLyetKXLiXVv7AbKFF5J6cgFYFnNWmd38nrfXG1V5GLSDu7knW7RAgAQiCwm8JhRan8pgD6TJw6mkyFdeYjFqQ",
  "key26": "5UjEdArRUik2cLjkaNSsYzxFf18UtPgxYvku6oixtzCX8kjevqUdVL1LmxfpX47tuh8YoSEHPozSZtWJwfWACqT9",
  "key27": "5ph2Bt2mSuKt1zdpHkpHQVt2p2t6pGpdy2cq9SQzqFHmsYnLj3cddxHXSdJJN4DFftuCveLbyhTxwi2yZmjWYDZd"
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
