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
    "22NAm6BUs8bbKUm7d9gzK4gNChtMiQYCh4JnUuRYhiiEknwiD6iCqHroWDf31ZTasSYyStPgVpAqVUBPCaw6zRmR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZEQ4XPM1AxA7d1F6guuFcfdpd366a2E7oZnL3MLbSMU5B2wf8RCY93yoj3wcMFuACnUch6R2d3ba8xuMCvaBPjw",
  "key1": "Df9BWs1DT5kvATfdT4mAtcLxWueGZiF4s6mHCF8UWK9ivk7GN2NWR2jRWip2HYyB83n9PJbFdvkiuDUyixE7SS4",
  "key2": "24ns6UjWGfbdFkwuCBifEf9bjmt1xgvkwwsJnsgk2PoncncYaN2JgTd9ArpjMDXQc5h5LKbYxYkFwTqqhxj7fyBn",
  "key3": "4wPM7LyL4wWPyci5kCXFLmUwtm4vdoD5GA79oEzT5B5Jfr2Ydvbc69xRUSnnqcukF7ZkxSrGMVsscax3XkKwUjjV",
  "key4": "yqLnPBTx3CsQvSmL76cZyb4qSbVaX6ed44ieGgfESEn5j1isLbPGynRsszgRTe6BjsYzFycdywiYK3aezDNWeoP",
  "key5": "wQwmMLo8u2F7ULfFDxbsKvyGDFa3mhKBiH9BaDMcpXA2diNWacdtg6vwsgkxPmmYRbjFL5NCT9BAXpWGjkiJwsd",
  "key6": "GzxcEWgZo4b7cxHxe5Ayjy4gG5bPZdUHfn2FoyxUGeH1Kqw72n22Zejv5UYbS1WVGi9maiXGYntT3GyYDH4GWW6",
  "key7": "5TrqK4jUSQNG7GNJv9JL59h4M7jHa3vuYVuup5k9eb3AkpCjzKNAEos4YU17BFg5sjD23WJpeNKk2YDgTGf7rCp7",
  "key8": "5Q7tGrHXUZouN4H3VF7wEGv4xc7Xm5Rs9xZWKNwSYUQiN6tuBmqxKLuxDCqndfFKHhQrzzhNSPvPd146XaFYJZU4",
  "key9": "2d4PNAQUNY8jQwjmDUqQhu4gSzHrXcDtex2crVWj1LnPNExboJpzWJB9Md7BJXTjBL8jkMrpjQjEhaS9LwBeuEmb",
  "key10": "3UDS9r2TUxGM7jfMptT4HGYL6mGTQAqm2NpdCnJiQ4EFJ469Q2TMmzdDwNMCm35yZ3tWUkrpnbkBkaHiGnr2o4hK",
  "key11": "4zxoUVssPqg677uoPYa2JnBRqHLgsJBDBDtn5GWFNoTHf6ZL9kHPQUAiYtycpc2hskcnp6p1kp6tS2aJJ9QHFXnG",
  "key12": "3y9f52ZNoec2TPXiaj6yu39T4ia17MyFKc1Q2tuQye7DDho1EU7xUxeGb9T3ayGBavbyLMoiEiGSGLzgEmBgrXnL",
  "key13": "t3nKszu8n3XjbMnMA3WbSGw99dvqPftHzhxuw9W8xCFxwGpqtj6GbnYpbFe17Eg8wEJMmjWsiUhuHVbu9sLM7oP",
  "key14": "3qNnVt1PT6ooGa2N42buc7TSg1tLqQa73sdsoTmSwqe59D3i5DWnVijURbciLGrpHAsxrS9wAn4tzGpowU6LhPKR",
  "key15": "56odKVyFaoWdT9qLgQxULfxfPc3dfkjCAVnB1TYzUsx9mkBx6WDnkwPgm7rKygLRw9GdAiJ1reE6doyUK885rxVq",
  "key16": "4xBvqLMzjXNUWN78B8CbVve7JM6ToYBndjE2yJKSQo7bHQS3imB7vPfWrNkEyP9eMm8L4oKTikNXpthRnU44ksa",
  "key17": "4GnNuqz1rakjy678wDL2WXtGpTk5rf4GSmrLDnQVxriPhUH9mxrqXsKxhXecpfJ5rQzaua6Rsm6RYG6AMiKoWxbb",
  "key18": "XD1duXUEvuyineKBuhJH5YesqG41kFwL6tPQrRu6YXk5x18mpHDpwPpzLA1Z4Ms3ENp4nCxfrWGnYtABqpPg2Xz",
  "key19": "oBNt6YG81zLQXb6RAdVqg7mr1jX6RHgKT1zP4dp7SQjicmeJiLfJ7Ezipy5rzFxEVP8NuWzPjAnUzeetLfdKQr4",
  "key20": "2LjBinxJuDk7PwUiz7qrKTcbabXhAcpUrUrVfNP9x16t4AnQwwXGYvs4pdeL91csQuZhZtFqEKTa1oVKQKeQx4cX",
  "key21": "57Je4sVcQrQAvEdS1TXNfvT4Kv1LztPM3Nzchai62AspmcRcmuMhE8B6QUU3nUA472okCHHd2TtAJCdNKUZjzhPX",
  "key22": "5tpQqvqu9FxcenfDWKQSBxEuYfMk6uZkihsFVubHk7c2895KLnAJrHztgJdDhseZ8LDncuoEGNDa39cnxbi38yyB",
  "key23": "2QdxmEXNY1UaHTmpVGxMoiffevLThG4x5ygUHTNPgbWCoSxsQAPTUcsBUBDafZ6pp25fWwT2s8KbGc74dB4q6hL8",
  "key24": "2tsoMmmAhMDkXYXE6JZnPsQwPcVxi8hHjzoNaeaLjMybnXEddqW3yCVz1gd7TR8xLHHUDouWbsux5BfvuT221J6u",
  "key25": "37Stj4uLrWDouky7Dehr5Sx3kV5qftDie9jJhynVnLt4XheafZsBxwSFxqE9h2h1esqYqjy2uT9GgaDDYibuPvTF",
  "key26": "ZHriELRWZb2SPxWSS2UFZWoBWC4m5hfw8Jb3BXGaTwaCGc4aGFPVXvMWaPM83sBeM5uNTaHz8CsrDWcSzkf7wrN",
  "key27": "2vfperCZKMXuyBYJHcCVKEynzPy5xZ1TrMSjnYtoiYFFXUbJmHp4NcUenNHVz8aMNJ1fCm6QGbhAoPuz37tommtL",
  "key28": "4vpb19ih6ceSM6gWrwwu37RBwFYRHsQkBiMmmgLX7cA7NU4tcMWsZxhHMqFWvkPCWuPBn9PQLzqyjeof7McbMjHc",
  "key29": "1dfPgawQ22v7GymR5MwiMitEVdGu8i3jMudiQYbJs1dHcQtJeCmiJ2ymwBMLRbQm6WMxB8ibjxKkueHHUL6onug",
  "key30": "4f1T3zXSqCE7Qoyn1vHEdVRtbva2x19s9oK3z9zV5nQxWZ9JuGHFtYeC5hoZXA9G9RYKGw7vhjjamyR7fAjidn6c",
  "key31": "5nNMLqdga1jS9vzLnbPiAnMbYEFDV2hNiPivpFP6JoYpop4Ba2TkM56nyPBb7DX5BcKhViZ6go1ZUrHU72zgkJjW",
  "key32": "5NaRS9PwdMK7TFPiUdvzYbNQrrcGqWq2ygS5VxT1mW8K89VFFv9HXbkWXmGGw2HX7PDaqeaJfXaESCsAVuU6FkT9"
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
