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
    "2noAtCG6B1ovDH28cSPmozN7g7rrLDDL7yLEiupSKDLumrzcA3ZiH3SyDNnrCHh71YM5sMqAbs2dvPyp26duzDzn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eTokmMk1qT8KvrHsZ2XY4TaXe4NV2BJcMSU67GAcBBiJWC4E4fVcCwCdQczUYnjYEK5z7UrHH8T4M46jyRZsiJk",
  "key1": "3FuhJzdhojTQ9gZBCGNnT4CJfk9FqxPQDT7Aosrq2DwaEi2ArdyfoTHB9zYxwE7BDB4emczj5V3PkX18Z239tuHZ",
  "key2": "dnC7esZrpb2FreRMQVyxKVWPjCjgQSruaNNZFXouHsdetgEc48zsydU6i5tvkocqPNm9H9oq7YhZLHt7kG7qhCA",
  "key3": "31qZnttd8S6SQedaf46u7S7fT1SWJWY13MqjV8D3iVfnrFqzVAF4RBgoj8Yo2VTHWhAoq2pdCLN7z3V6VvgmkY58",
  "key4": "5riaKkKnPkMs9Lvnk1iPpd7q3EcmFqnvu4qRAvc5eT2c2jyG3beMTqYrXHnjSTjiYuHxniUFYHtCg5iSf5i7NHfh",
  "key5": "5oCAofLoHkeSA46DWeLdKQ2MtoZjtaRbU6mx4RMxkYiW4AbhTN3hZFDTqEnRUuQMDwQi1bk4S5hXz2tFUwvJ82kw",
  "key6": "fLA5hsBBW6kmmkNNr9e8PmzSr7nRoXrqL8isYXo7wFz9uhyPjv9fR1rZv3jWyuTEi6FXKjyF3WNW8gjFbyBMmBb",
  "key7": "2JqarUM6s2DSfgMhJLE47cbwP3mvgKpR7rJgevNo11xwNJqzC7fBHK1nN2nKW2FZCHR8W4uE3jESaJR4t4r8VEEH",
  "key8": "48YTm97JvUumyz4ETqLMvDLPMsEBGTgHKV3ucfUeazsc8qS4Yy1mwgJLx5XWDNXVrwk1jf8r58yBgVrgNcraTNgU",
  "key9": "2UC9E93qbS48gA3FgRyKMe3xbjH1rkAPPWQnG3p6epiB1zkfVkQEmUWAsVoLjawKXjVf5KT5p2qXen9iPtzc1tNN",
  "key10": "29wVe6ttyk1sR2uXMuRtKZHWX8zjxmh2eRvMztNNvdHvK6SLaonHZj3xxNA14EvvbjvuzGi9m8QquKCgjQQKfab3",
  "key11": "2wsW9mmTmfDiU1KHwH9NdVKrwZoGP1j8mJvvUi5nNXWeggSrNAzJLDNu7CA8p7HvS7NHxUnVGvwNXukLDkuQ4RJU",
  "key12": "2TaMtrrEWUrtwwzrNwgegnURbQwKGuCEx1FP76y5FqPr9yyJc2R3FqoJmHZz6Q9AHdZKeYNMVVshD6DMqLPaVn67",
  "key13": "2FVoejs2Mc8Yjzx7TvAPpt8DpXNPncvN1ebdnua46PLR9s6rTLgDcMfwcG9vUQfMiEN7FXkjQJwbXuhzUVTPBbBX",
  "key14": "3eSQA8ntXfpwe75tvs1Z7YdyKx87NRdz6LiMmGWJPBUkB3GV1wVuvVjjkZW4BMpbrGy3A8M4YECxpy91wz7E8HU4",
  "key15": "5Pikw6aHJSw4VCPFZPJv77khA3a3SdvhiAPrCZurULRA656MdwU3KdVWVm38JCuPy3gssaiS34kWLqF588yA7z4B",
  "key16": "285oD2LByuc1UTjhuprULj4uuKGf3sT5UcCaqmAZkL5mn6YpC6Jo9kSivL97MD2qbgv7iQoTo9N1nJUzVFNZ4E4P",
  "key17": "4XS4U4QK9uYXjbCdUjk8NfuCbuHpkhQTF26PAKMPv2KBgvD4wi1xM9oLzG3UdKNwGhQkcTTruaSBBGEavHFR2U5j",
  "key18": "4Fo5bF8hwmLDdbj9RrQ7Pn4aEq74vMm8hJWKTca2Q9Td6HZXC9sYsApbQ7a5shZTZkWHVz6B4bb3o8CtrUyAkDJ9",
  "key19": "4B3MmNLntpMgswFpS5ezhE9h5wMTuVJ5L5AaAC8jNo1V88t8vWG59MQcmj8CBhguKYYNuNguNb5NKeZEh6x6kppD",
  "key20": "4WrMMLUsi2L7wmy17aXkSqx7cFC34pbm6KnB2cWxETQNEye5mKieA7idEP84oz7ELh6vjR5hkrKAbAu9rWyRAxdK",
  "key21": "4MSe6pA26iQQY4PQnJ8vYZPBBZuFoi6TACz4RSxsVheTjt5xDGnvhNQNxTLvRCeteJicKDK47Zzb1cfAkjWidrwp",
  "key22": "3M5zQ2Euwe1vps6nNupxfLanc3FumjdZrR87ivuXq6hZugPvbiGyuAYUewu4pFHr6k4YwWZN1NZqAH3xA4nm9C27",
  "key23": "5snj2azzbWeeGfMBG4tbFAqQ1ag7skExZ18yqUuxJnLNbSDEzgyz7aaG24qMsbgDN4dsEPj9Z26mqrLn6wVityaS",
  "key24": "2MKT2wa9oEzTLpW163hzqbWToiYBofgDgVPNDFHK5zCQoJrp8wZuTwj7hcCDRaAw62GnUxgm3TCLUnkK2UXsacAY",
  "key25": "4jnCPjnZRFbehGQqXzMoTuDS4uMbeTV4MdJKrsPzMqZT8CLsLFVtmkAkADt6cWCbMV427fAZX3ay5V3Qgkr2esbQ",
  "key26": "4qEehY4PKjQoGXfrh3fEqjSTjiNr3fJqhD6CLdji3bHETUxZbd7xLf5EADGBxSUp8S43bSb1HHQ9hed7rdPBbtoF",
  "key27": "5Wa11LCLhTv9ZT6Y7oR8bPXjf46sRVmHgd6Nh4e3E633U4fXZCPifxEkXLQM6zTbd8qjFoNDGNeqsf7xphL79tyH",
  "key28": "57uGWn11YR3dz3QEc7cL3dmW5Upy6o8GEoYmE5PXyKKkojY6bF7hQCC41VA9Gy9xtL5SbY2dg7A5aBZi1H4oaA1W",
  "key29": "4Kc1EyYPLMitejn4tS3XoPncmhrvRyzFpWdKsqLRzMdgWkwQfCaSnzBCF7p8SQgVDDH5jTmro6y9gtmbi3buhHVp",
  "key30": "5taFw9zYs2KmyuDzLorXZtkXCz2FjygmNAwK9cN3MXj92HxSydMGpFfjWWS1XiCE8zfyX9oQqKTvkJC3scnG1BpF",
  "key31": "3LdSqTS6gHNmYF854wdXXWM8vW637964qAjsYQEThWyXh9moae34v2NsyfwBDg3QoCHfe7LadMtohPYyKfKgXJdp",
  "key32": "2YCKd6b6qC1gbS478XaFZj9aJUqmbYGMGyuPuDSK6Qx8n8oLx359jk4H8xXTwrymDDUBtGb41QUn39K2fXVtbqNV",
  "key33": "Ajr675z8j1h1hWqWAEn3kiWowxhym2MEUVjpfMhPQnHsVf2NhhbcgBcMD1AVUgXL3o8kFvseFzJe59UtDJqWPL1",
  "key34": "49E8qZdxP2utFkocNTnGGN2aFMCoFs3qGajzQate23xgSGRecSKjHuD6hmCNqpyrRSUcmwFGw7qJW16UD3qsUz6t",
  "key35": "5e5wL6CWDaAVdoxNxjWHGxrCJmS3hTG5xBxJXKZxM3Hx3jchBGsVhpieNmBxMeV7qCKqjS7aUdHqSBLLRsGkA6ME",
  "key36": "582TTGS9ZDjbcyxkREyL5Yc88VpRnxewq9dXhs7ta4rx8GCXVA77Zcp7VUMZ9Gy8Bm4SgUprZ8NZwWK8TDhREzX2"
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
