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
    "38vWmtQZzM3jiVJsgYK4w6tinTUahtKUVmdhcYHUa4bGMGSzCU9QmAWcyp8PpP8rR8SH9yLAHBuMQG2ZejG1SMSo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uVrZBzTi1xpZMML9ZZgcL6n7AXywDQiEwxczmrVdkjVnUmWgKk3joU3DeVpdfN93dE1frjSsEiWrE9jTLBnMPrW",
  "key1": "4HBpHuV1rBca8rU2CyhCxcpMeKcXSDuiForX3AUpdiPdJ3PDMnUvmBqZpougiYWgBVBuz2DFetCMSD11sxmm8ji8",
  "key2": "4A8kcBB4xo9rDyACfNWUz944qWiHSXAn5FqPuu1oC2VQXopnFdZgY6zPdkn89mv8rFP7Qyc6Bf2MBxqDXq5Si5hS",
  "key3": "3LTMA194mE6JpK9a1VxLSfVEoFcdRxfgFKkkC8Erfy2MPNK2AHJsPvwe2WydceQwPhU1fJWKsB7HbRXfaqV9k2P3",
  "key4": "4T5S1du1kBZPaBDNgh3zDeEk8Mte8JHyH24ubU1B6yNnUi5CHirjBTmdeA3REZV6XN62XyuhdnxbBbtgWjGPAbeq",
  "key5": "59LFKVZLgoV2ErVkvS9JcQ5MxSVfLReG3U5pXnkR6nC1ZDUQWQ4ALv7VHcpupWSGgS8YiT2nFZxvnje2uY4aoARa",
  "key6": "cu31VycWinQv9R7cosdzK9AZX9njLsQrzBMhStqnSj8NW9m29sjwb8hgq5BpMkMWLAokoLTxQLNBdwviy8CviVF",
  "key7": "3jooUZwSFC8mvb1mkkQFbfX4htqsbP9wXAZhoUfN3zA5LdEM5uvdTyu9QV5Wy58mc1j1z6Fg8yU5QMgZf53oRSqB",
  "key8": "5fUdMXbUBCs35L41npyTVAEXZfgcmXAxfYKocnvW8mJzcnAyik7diT3nYZpSv6X4jae9upKQvTd5GazZubPr2d8F",
  "key9": "2FYref6spH94sDsAefcwZWwc3sraGZz3yzjfcyA51zX54ZGvgXC4464DX92dAJ8LXiycCeuKsiVj9NprCep2H9Uz",
  "key10": "2PUr8M66p9tKxqJ9DNYKa4oCb9LuAzfLkZ1zvzH6T863JhsKXXq2jjHAiK4x29wRedUhHRX6UUppjUnkLyG23x4W",
  "key11": "xF35Mxkydr6weiTAzuH3QnBKitSsoYrhyd9rw1QDBC4Gm48KDAxpSP14pfMiohQ24knzzdPbbc1nsNnRQrJifrr",
  "key12": "5fvEPhSmdfXH3nGk9KtJak5oJ1YkmFbkPtMQpvCZaGz3N7Ey2FkP9KQ23T9k6VqQtPN1H5D1xqGU1BSrBPPuUNoh",
  "key13": "4nAu5uK7Tu9H8yqTu895S78B8q7pDu7NT6gDqEReHBS4J3LDwCDDJEj6SXVn4H9HfyE6tJ9CH9akPXbX1ViprfHx",
  "key14": "3RUzkiJy2bnbT6KHtNgq2fqHkVSLKHfshytPnFAn9hbdP5up49yJdBDZfsG4qdFVX6yzax4bte5SbFbyZ7bxsizq",
  "key15": "2SP4tN2YEZvE94Q1RSjYEr9izgsKVPa9vMsWnvetTBhguFZdKv48JhcWCweEUVhLy5A4wY9iNK3jTL2KYd65xCgg",
  "key16": "dLWFun4HkS4EW9VgtgYT56ykVGDZK3jmkRt9mX1LL4ZKHCQbmmxJoAJ4MsvP2KsF31F8n1gHiX6csfyt7gzMjxe",
  "key17": "3W4FDNy9d5ig7WPJVgKXqLszbNzyguLAMyGeJC4Sc67bFy5L6q5WmQcaBYADxrWaAdhHYjcMeP75LFPSmgf2W7FB",
  "key18": "2ELjvoYKY3GFYk3fM11QnUN3zQpzRz3htdUWf6UCUqbWiD4nnVKU2Xk4CMftvv7TKxUz8XrmxTTaDeT6cfm6bvUr",
  "key19": "45YdNWnWPcVTnkHShMFRQrNDTetdYqzhzPbDzXFgaUfZNpSrVnWKyaNoHhKXsddwJHZXLfhVvDc9R1KGpVBCYacN",
  "key20": "3wRfCuKyJvh6Sq8wJuAJasGsqaS8FtPE3KJYPoBaWuXh1zCDKHcoPRM8rMVWk8qsJXAdJFkKnjPwKSzT7fHm2j2",
  "key21": "3b9x98kPoadL6b7yaHMGAAoUuGaceTYbBbXKyKx8wSMjjt4L3uSqZasFNS3SukZFC3J1euvae6ythQtcNxhQiGwo",
  "key22": "5xCCkNeSudH8Kq5RTWh3r1DPWxZ3b5yKkG3ZTFZwQ6wR4dCjX2Zq6vBDteeCU8DtrD1kGUaLMhZSDtnxKVwzBk5U",
  "key23": "3dvQgtbbqdcUubRDhHD8Py5MgY8aoZuNh5U15afYbjH8UmUWH7N9auW3q6DAn38rQdMnVf8gJEbTuaQxKeXThg16",
  "key24": "oJVN6FwhTDYt2eHnz3UtMm9gExq8JWVbhcQYWUWgE8wzgYv2oiazeQDq5sFqrRERsajLQ4Ruokbrrpkcm2TaKi6",
  "key25": "qqxRJWuQs2JggUrhL8vUHKr5kQRK98ZWniDV3QFSdp7EcFK9sM3ytdUFCadCkF8ToNbJkDjQpPTEXxPCEtmzwNh",
  "key26": "3cAA7igwEiwGtukF1vsE5CNxqAxqYLzKLF86stSatc7jQbceWD4shzK1sXsh7oy4UWaeFX8bdDrvsJNqkusvHCGR",
  "key27": "2kRPqtf2d3PM1N7jFFmrxvgoCdEBhmei2EBh5e78MKJk6VWQYubh4KBFFRzKYEzXghYWpnB2JNh7VBU2jJvTFm14",
  "key28": "67MsZq1JWJ77eV2NvPeXmSp5SifAfV5QRCQm7kC4BXLQLngmVCuqq1v3WqEyEq1iV9GkRzJSJZWtjmjXSTqqkgB2"
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
