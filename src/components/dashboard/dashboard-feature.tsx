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
    "435KNRQeh1XezR2nM6tEm9f2ZvRaDPGVTu6vF112qGec4ctpJJZ5d8FFG9JbkY4NcV4vUNkKGvUHFtRrv67fmh7D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "x31MhRpPz5Axetjp38Gf65cDqii9Pszig3EnrSdxg3Vt4inSdYW8WbjhN9Ltgf2W5Xm6N2BYb6WGoFMHNQoSqfy",
  "key1": "3ewkKj2qhUD6VozjibAjsbqcTdWmcE22kNZFEZpmyK9TYoEb5ajDEKaRyJYQeiUQ8YehQUiEWckEReCXMEJTZ8vz",
  "key2": "3HK8gmoY1jRZk1m7vhx7ziHqu2vigr6m9VemR3irVFnhJaGEjiKM6VwU3GwTmZbQ125srrJSbVTisWtiebUPsPpi",
  "key3": "kdAkNNgEgB9dqhBM3UzUKBKfcMt7KtadhjgpUPxFhacACuGDNMS5HtuEYExfcct9zQVEAW9B58aJMXMMBhzJw77",
  "key4": "2ovsZGdDJH1h6zBa3KDGKQrDxmRCSWMK67WaBmTJNFg6v5ZcH7wn3JqcvD5NvoZALrscnSB52RAYbg1k9Yhvtgnw",
  "key5": "2MiU3AFEj3brGrrrznYrZq99g2vL48kxjXcdGFuw9NBKYPtzN8GyB1ZSrfoHqACqUt78EfEhjTQZmUCSGWR1r8pQ",
  "key6": "4VJ6i33Er8zdtEgaYLTamh3tb1ARoa4ZugLdVpCpT1hzuETtpmgv8fhUu62ubRFXeqzGP1cvQTfofM6X8ci7ZSW5",
  "key7": "3QZ6cNWZMa3qAMJeWgoMAW2jLNG2H1bdWwwoyZc5AiJiHC3eraxMgDgwaFji1DHux3e1diW1UoEJ28HfFExdPbdF",
  "key8": "49EXr6hEBxhe69o2smZWjHWD1LqMuLHuGaYYuVFNzL2LGjczkjSWmwBECA4nvQzGajQYbuLMnMifp9pm9VrMZPu7",
  "key9": "5gTu3W9CsQLFg1Sc4cjsvJ9tUGkUc6TYo8sgZRMZKV1SJX9gWfWwEixij4imhWhZVgkYJsSfMy86hhTqtT1ZQv6Q",
  "key10": "3LfTTnU3yUWMG9KpqFBgWMuPeHhY3NAUxR7zpCna7EsDyjbGnf6Ews6tNfSMRQ4fBg5uZ25rFkzjb4KQiAf1dt8c",
  "key11": "4AnPoE5LJaCv4a1HjpirEiKqQB7VkYWXCntq246n9LGYKtqQm6Fo4bd9nUYMgf7nq8NAieSNnWpHdJY73MMpbfLv",
  "key12": "3RAbVpkBv6scEMa7zUed7nVfwzo5nd795uQPAHquTximvdsnSu96Yt7FvbR7xfyHQvnybjbF1F5fjhBg8YKu5kh9",
  "key13": "5pTkfmnPjGJZYzGefQzRDbbx4UXaXYwJhxpLUWLoYYvPfFJggBbT1javREbFSrt3FxmwjsbpaWnaWuvfCJZRVdQR",
  "key14": "4kBmZb15jXSAuXyqvLz5Xw236DHr1sqVL6yrasBsjkhZQfk1ChMc67AD7jLtkw1qFiQbfbZpHKqpYYJfeWgVaLzs",
  "key15": "4hVRVX2eAvQdJYCz7zGWShuswxhA6AZjteWaG16wVWGeCqjyhUtf4cHW9XvioB6wyehK1VaMtcLYXVQ8chkJHCdw",
  "key16": "bETAfnpufRNpMMBWHpNb6759dvd2UYVaqkt7XRVnDZaoMp5WmebUYs8UStNZcNpeDxpXA8Tat6uExFybuhdVUJt",
  "key17": "61dVUNNhbGEtV1JSqs4chq41AfQhq3k1p3qpeLcLGJPefvrF8w9hDvr2PPwUWtJvZumqUoZd3d2v2AnQWv6bpHxs",
  "key18": "9pQds8b5HaiuPdqWr1aAaTcGTgLQfx6EqA8Q8DBnBjGgWqBLpnBXsgqJuYYXfBX3TYKy5Py8yYCEXQdL8Pdg73s",
  "key19": "2iYUy5YaQH4xujRfFsh7BPEVtAfHWDxqZi7yAtrocuRc8ow11wgL7m6x8j4k7V6ybwf6FC54EWyGwAHa7j4JG1Mz",
  "key20": "2oDm3YKvGP7HEP8KWDLQVjuQpQ3cUnHoUrFqGMug3xTUKzVFKm9oWniqqFakhxGam9195wsiAkTxK25qvuwkZKQq",
  "key21": "5vs1WjWH6jV972CTSx4X7zxvy1v4KjnXskcYw4VkWMw2kdJV2614U4vT77HS6H9RDAE8yRoWXWJ1Mqm8tTKo4QpA",
  "key22": "45beW54JoKCZeet35zNNTt8hCSKzo353RGvYmDxEfzPqza1nNdJxfh4jYh63HRKm7Ki8GFqdRDcnjZX2w4iNaz2u",
  "key23": "4PESUMYiApmaYWhq2UE3ti7aq5oZakStpTRV6MrUKnYZuocw27aXZ6xvncNgXSWXosKM9uBWtKiFLMJt6tFyHjNa",
  "key24": "ALyZ1LZrLjywfXZxnW2kt8cRuiB9AoMvbzQ9nWsBUS7tZNJcnsNn9cWkr7vTCE6XjjJ8i6s6ZXX5PKxmH94qWnW",
  "key25": "4oqbrj39SfaUzHd8Y6vVEkmA7Q4r9P28BmVUySrjGNeW1d9jSBJDWrSQ9gmxWjDugGgpTUMLefw6A9Z15MSwEwGu",
  "key26": "3Xxvqu8NqQoGgm1AaJehggT5i1MVpuLYr4UcYJkmSM6cF5bJ2XZZEFPg83VhEDY2dapDXizuicLjPhGbUoDbwwBv",
  "key27": "2oD3MB8fFFpy47B1JkysqZvfQBqGcJaGXaW4mgayiDVKyWMTQyUYHJKimdLUtZpQxzemCgSyixuT5VpCMTDzPrNR",
  "key28": "29A5fibrwjd4KRwJXoF4EmP3jtv8dP1uF82dtMydEQmDfw9EY6RUuqxNxsVTz5AuUkstFjxuczgxduqGKgMq6Xks",
  "key29": "4192SSCzJLKLNmDDXUW9N5sitjr4u4Sk3NPj7HcmWMd2i62c35SfC6ts5jQbNhtZxG9mtaabJNQyCV6eX2fbB7e6",
  "key30": "3yAprbombuAkyRCh7vKQqRkoKA3rLeNH3nKs6iEvg5P38iG1vj2TY3uNn9dJWmuZyz4CDukYtZRYpYuPRGvYEaEh",
  "key31": "U6aMdmAqeBTYBtYKPhc1qjM22zPQKym2yZ7ATSt5QvywAC3qW2Vv8sXhhaZc7GwsZ748CGcLmUU3k8Y1RZPAe9H",
  "key32": "uzu5DJnCxp8ARUkGq9LosP55BefrEvSuiL8Vr59R5jWUaUc3FGSKJHum1dCkHfxnUwBXRbVxNrTaidfjU2HnbuV",
  "key33": "3ydgbfayUuQa7RKZtkYkvS8mKr6sUBDjJrq7rANSr1s9D7FmfvdmxCWJobaBBtGth6gSUuaXtXfC2DrXA8vW4kaQ",
  "key34": "3nGDhexqEtaEpQnbVZqBafdxu8YRD36twCtbPf7xmFyu2czcS8PmxmgTWMMwWYjkr98NfndDTKhA8VWuP2YCCqFL",
  "key35": "4Nh8xwxsrEFePbZHzsxSygRJLzUi4AT73vWsqtwdRSwdX4pWgX2kzFgnJUteQxhGLgaf4PziZ3YPnRo8WCAu9UzX"
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
