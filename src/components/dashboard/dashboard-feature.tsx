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
    "XWrCAUaj89y4jFm9DNgSGtbkaGeH5fMxaYjmgFb76UaTs5hzKR71voxkT9kUnhaGvT1aJVYDVHkqycnc3UCJCzG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49PkS6QE6r3UAgBkV63y9G5C11fZGaWhr43toA7Z6xKLeg6jsA32p6cm3Doe8vzURt8GB2LCnFLFtbjRvZTDMbjk",
  "key1": "45F6Um3LhRaL2qxqAA66b9S4fdv97DVPugRmcGeSqBr5duFSNesPpQg41GMfyHxrv5BCpuHTMD3zPzjPZmdmZ6RJ",
  "key2": "35SdkTJVuBCkm82rVuycoDRMyBPLZFJ87jKBBNxqGmv5Buoqe9MX4sgrKrXKEnX18qLMgD75nazzwrHZ8x2d9jFZ",
  "key3": "63JQGfgyKUwgpMaTBv9U686qGwDS15c1XaWKieMW5hXDXKCW1b9HkuwCnBR1QffQ7F5VXtiHEwYMm5UB1HcoyCyQ",
  "key4": "88gaZrwVVLbUkXaLarbhcAkzgUJTZoZ3cA8mkJsWMSJbtdmdj6GXY6MqqnHZk2GDa16gm11T4ffK7NMNNCwhjiX",
  "key5": "4UJ6GPaUPyTqYxNC4afFU23uboLAd9BwJ2sEcEECCCgN8DUaGdxgxDrBFeRFSpaCDpndYEinGVEi9bWhShkxeSVr",
  "key6": "sFiZWkbavgPNJUDDGiU3AfEa3ojrxqSTu8sJHxkXjjFGc7ttgMqBTng6GeRfQ6avMm1c6g5Qou6R5ie9svLrmT7",
  "key7": "5hM5rwHL5sYTpQMnVuDanEzFAMjaB5HtykPmUhujLoKPqFAdvC71kV48ordZpRVaT6cTa5Q84X8kJ2zKdsaWkHPa",
  "key8": "5CsZYegkPKnCSfuWiBGH92wsoLkd9DmGy3GLPPMgdFXDhiJ5S8RU5iHshkH83g2LxyY9QyT9kusJ9V7WptTLFpQP",
  "key9": "5n73vxecGaqkSEaweL3pTtsCP5o23pg5qGDeH18furBhVkfSFGwvF48Ap4ni49nUik1coKwYZtv4sxfyx25TdpwV",
  "key10": "2gy1XJT4cnvcYUtth77wnEx1YFQhjrd6hmGNVnhSX9sx2oczWgafwL4zii1HEdGiC5GVHH5mvvf4pXmpL2HR9s2H",
  "key11": "3XJZkYAz1Xu9vMoawDBaMFCmYGSMHQBodLcRKhcE2L76F5FWoogpr9NXYdRS39P729YokzpyZuh6RtVTg192LyUS",
  "key12": "4ztKPgk9E5nTfMtyJCQsn1pnETqxapSeJpFF9JazfGTHhmZVTamWtnb9Gq4M1v6YFLoohoi9mBZfSP4BZ7iZQCXx",
  "key13": "3cYp6toWxUx9b551R3ihrBfGyjxVe4fHf23Ywf6xsuNyzMGUD59PaHi3M6N5vQLzDGLVE2KsrxK5P5YGr4Pin5gH",
  "key14": "2efeFtEgYunaTXhKsUt4KrYtk9VA7xXiAoURdUrpfWo5GLymhYMUy7QiSuw2ZPeVz6VrYgH4sZZygUJ2QgATtQeo",
  "key15": "3AepvW4FQtHtj5gEjGM2sLs4fkWkntgZsDsn58Y6FTryNnnKaJiLJZAvHGun5C1dB8aT6PYB1MgQTe8UdhXSQHTL",
  "key16": "36nEqe6dTw5drcrP7yxrRLH8CsA1hWvXEtwhgpJH48eXNkfHNQC1vqeUMtjzKfojSkeLmcx9gwLZNCgqg5FJBuRn",
  "key17": "4GY4bSbFRuhTwjHh1e9PxBC3U3AwWdbjgA78GcuAqcVgRHWSLZyugewWGqFr762QdF6cRj37dMyefr31GJXAE29p",
  "key18": "4aXhCBZKDJWePRUhjc8GwRK3B7NrE2UuuaaPYFm6vXtBit8v2p8PvwxEHeAdgjZamjA7wrF7n2phy4ZU8AAuvzGc",
  "key19": "5wQKqtXGPduKRxQ1M57rdhzDDeYt4WJFFHRXyqfZtsQzbPC2M8rG9VSQL1iJs2zoHeMX3eWDK9XPskk2Hwa4PT9z",
  "key20": "xcTCcVz3o3wM6BuRmcxuNDJp1jnibH6aXbrEYDcbnehpLEq69JuLCuukHSWCbGwy2U3XFtbC8UneAmKKtpAYqsE",
  "key21": "4bzUdHok6ri1qXmmxHo6L955hYiaRPQntN2tcdcE19zCPe7HoyGz1WWmzJPphRqpJAvupugF7JSwwnQNGvNLKhhw",
  "key22": "5CA8UryvwPNSdru661eSm386NySw7FmBuQ8JH2Biy5Dmnx6AzQMs5tb6ka8n2JkfnDQ6MCMimMYR57PQ2XMhWJ2w",
  "key23": "3KjKrZx2aMrbSgFVjcPYstAB6GJY4c5qYB5CWDfGWDudBzZKW5F6sqtVhucJSzMU1RZDF2fHwwVMiqBnU9iamRhA",
  "key24": "Xa6RD7uavdR28mwN5RRPT6yC66n95HgXzFuoCKtJYkYFuMDiQ95f7W8nhrkXm5W3hFpvz3c9zsjCjkUrpS9Bmu5",
  "key25": "2qHnAG2WvAN8pnkWKne9qUKTPfGGkb2FfkNrbMoYBVDRnu5sB1mzdXRy9BxDzawcD1Q93dKcdZAiuz3dmypgCy7S",
  "key26": "5WBurHAu6WfX3MVe7kUDf9QvaFa5V7goPkKBxozT8ScZrW8Qnd3GYfz9yJZy4WgRdYzie4oqEm8DapmPKLXBb8rE",
  "key27": "2mG67dhhUstxREcWj6DtAve7WzD3GQQMatC4MHnW4CgwZNiwrHPy5pR3cGBjT8XxpToUD8ozMAyvZrqLrt6MzPLK",
  "key28": "3VBrF3XULc8i2uoBUdezahhPSjo2XPxxDhnDbwWCLVvRe7vavZpktpfhCrC1vWgcQ8y5aAURxLuGktWrVZiCCp8J",
  "key29": "3gJuMU6xt1upsr8NMbYGN2YRL9Vu6auHYh38vDakbo7BCK5FodSqQ5f64mdmZBwaM8A3YbfuED2KJY9XDk9rjrEu",
  "key30": "244yqhzGdcTAMPH6KqzAEquTLbwcjb1hWZpLCmizqzvK2nkNyWYQTxCme2c8AmkmxzYrwhh8cpbaofo5wZ67dVnT",
  "key31": "5LEvUwB1uatp56PEEw9aW6KgeR2SovGwgjrCSygBukPpQQyFVfire4n8Qimf32cLTZLUygFx5JSAJE7Bra2vT9jY",
  "key32": "24fRsgkRZLv3St4rCUc6dwg3E6Hp2dngkcL6sWv6CwNJd4vABMeU4RKCS6d219gB5wjpyDapWWDos5saKa1o8dGp",
  "key33": "23VBr5aSsGPWpQHpAwXvdY4q5cnLd75o69LHzVgKdDtY7nJFJ3E9TjqjnhLGDMcvWQ9BWbcaSmQXttyNyQ9TvUUs"
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
