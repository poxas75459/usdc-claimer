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
    "hYZdRb4VYaemEzNJFpGqYEzA6piVrxAvcyvZ939xrhJCVdgJ4s73FsZ6XJqafdZzRGAzeabRrdQHT2FbaDaLE8s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29e4EoxstZbKnBgVWLrRN6awyuRi6YzBWNoDPXvRxbayJframTijWJQYfFUhHWEYszesQjdKUS82ZM6znpkKVTeA",
  "key1": "xx9Nwe7jk2f4yXakPP2b1HmMKxenSgsDT8PFj2W9KhgTma7wCrahsfUURMwYFWotWrgCqa2ptHT46ju8H5aG9q8",
  "key2": "eRW1FLV8CAhwTbV1sdK4hNH3ppQzZGZpTgE41hCk22x2LmCmH2tH2ErZHnAAFZpNZ6kt1nF7JVhD4UQ2JiEZQ98",
  "key3": "XQwRe5XNyjk4jAxVBg5i37wVbWBLMhbZMrp4NqsqceH5pe5RM9GWLbfCPQCzscFCZusCwsvnJgBALj5QSBRQg35",
  "key4": "hrHprbhcKATFiy1gH3CCZV9i85iRWLYQbLFJt9AJvky7P1LczZvE32rrCw1ouDgk96cQ4U6VAJPpfRC35WLjkpE",
  "key5": "MJEBiuwEoS3PDf7qtNkhKWv7ybK2Mkg2ZAaw2SNfd6FVJErVgtZWpiFmj2XtMk5UCvpNQMhz88Lq8a8m2JRkvKf",
  "key6": "JrxPPwmALSBu7SrgBbkzTWtRTrjBcPqDytbzwFYCqoBbKyoTXDf8fSKqztf79R4VPN41M542Rfk3zjeXAXM4RZ7",
  "key7": "qY2fVU7W9doSh7zyheyBTNV4zV8GLez7m5V1bBzKD8bj9btLogg32ExxXnGFTddNtBrx3y9ocGaoMDpqRwm8r8m",
  "key8": "61tiPVGjDY2tFkNyJxVtdzVhuLy1BojCDWRdJZFkkFL7X9LXNX4exQ9ooKrjs8wuduS4WKgi8An7MNkFonBBpaD3",
  "key9": "2qiRAMMyesWYrHAUt8eDMS7Jr5fGLnmNzYHuzaSdWyzUCPJBrLTNjWu9QX9SBrVEySBD6c7G1XMA64sacfW86j7Q",
  "key10": "2QDkURjhKjthBQLCRHTkVjfKhtPvAFWsNccjV7JoCEowv2qtmzk7yei7YPuDqfoDcSehTMzSG5QN8bR6pNP9VXjr",
  "key11": "3jGVS6Vbnyj2JnsJzPb1p7hxGNSoRZmWaJSoNCTef7AnZjdYfXch8M9b8e6LFRxDt4gSuTUstCWY2yCLvmEBUQ1A",
  "key12": "5oyo71ZdgU5x3pFTnvAUSbpJPsBJ24ZmLBPtvWuLXs67uAeyHoauKduzpfnyrHeRKoHTjZmubEzzRmw3CosyEgTG",
  "key13": "4fn2XtF1wFCPbq482btycE13tkjypiynQwpnhWFsWQShHVcgxtvW6jTYqGv5frcwCpjqEp9cNEqVicUrPoGwDJSi",
  "key14": "51yv9qa6J9EeCXMwSWiR4ojTMxFhcr4MYV5eTTg2EvJTudst2KyNCn2EtuUBAoqBCWcFXt4WjEZKXrNSLrKfLk91",
  "key15": "oSmj9Ur7c831C6rFgLXjn7mebL21hEqtAKjPascH4fZFj56gMp5efFjZepDsJY13KJdUTXFFM1qcX3RH6NidgKA",
  "key16": "4yVg2yhUHNgtrjB115PW2u6y9zrqWpoABhBPjRQZjUTS76NcySTvh8ibrHKgvSK8DxeaFuwxS7CaH6dvqapHwPjj",
  "key17": "3JuSn7fUkUQooaQUiihi5YhSXSkyTRtQzbyMzjkG2P1h4wkW5ttWrW5uQvzKztmBtm8xsyiz7a9NnuB7m63VZeR6",
  "key18": "2VW9K1VQNduHMs8n5DX8UfMYAse5Le7vTUw2zGY2X4WkzVRFTc9EQgd3tYdwnoKELmQHgg5HEWpGPkFwrxJfMmLj",
  "key19": "3JE1PC4foFnfQ1BUmF3DZyTgYWYyPagDETYyLj5GhLubdi8ardNgb5qn41DUFdkTXR2eAsbPhRSpmSnhJwHYjcKq",
  "key20": "25whREg7zPgwKFtiurUsscjyUetjCvmSbug9RRXUbJBPQCdWrB5yekj2A1VGHsqiaaqDYo3tks5F5mejYvyj3VQT",
  "key21": "5mSjBdmFfrfmYRzFQT7ReFTmwV8vuf34nro2Ko62gfTEJXdmKkWpzMKRpsim1N7m7tXdbgFsJXpPu8ZGQCxN5raW",
  "key22": "4KAN6HBUUGwu7ZzDD18ix44cWT3519UcAQDfnufjtYq3spkqPFRLvz787Zfn4PC9sHPMq6genFQ7rxqgMyfRRgdK",
  "key23": "53ciqJCtQH141Ln5zZxtNdr3kbPFrXf9Rnn4TN3JR7Zw1MHgD7Zoy5cM3YKE7zV1ma3bkVPbxUxBdHTMbhL6SwEM",
  "key24": "3PjEVKQdn359qeFrKysQRWXCWnMeDCh6o63oNcqt5P2bYeyEsgdoSP9f5b6me4MnghyhUBMGokUevvPELNS9wzp3",
  "key25": "GWoh53HmqPH3x6D6tb5ZGj9vKT6krUWePpxnCZP1y3uN6zgiPackqCYAR29q25SqwNb2D7DnLGC2a41KR8suntV",
  "key26": "evraKhnGiSDGypGyMh6LsNM97F6VErW93CxpxyHLGp4etNgHCxQJHehYcpBAStXSTxFJXrzRKkcftFvq88LmZ6d",
  "key27": "RWwzht5jNQfJwUTaSvxsW5bJegEhcWaeNJLwsUgC48uMZUbpq61iEfmttnrBEDjHHgNNDhYkbLCrAndPAohQvFt",
  "key28": "2gBvSB2ayC1GsoMsSq9MBNvyXrp7NQiTEAcuwTe9rY27p6JK6gm7Jyu8D721N2CmiTexXk94BbNZLQeTRKhjBkED",
  "key29": "CoAJUDsuwjeEckWLZ6s7CEYoCrDoDWZWsenqEQt6JJNNVRtGqPb4QhYoigWcWWcaf2n8erMhjJHR5k6JKtXpzF9",
  "key30": "5ket2z2d2CinhGX78Lf4mY6YPKkMZhpE6BnqamknxUjXQ2LqjcxBkpFuPu5mXFbnDQsDKyGPQoiszriipekHcPSE",
  "key31": "3fA7DP54VtKy4ZFvqdVbtGFnrVPnXXW2gvQ2dzzh2BAXjAXz4wuTY2KToyyKGkYXzPfCjaA3wVXoEGrV5JdeTvkx",
  "key32": "6XTPnVhAReE3p4sRYjDZSDtm4bGry4pcPkxfx1iZtnqEiW9ifTrTphi1GDBbBYgzaGf4mo5mWdNCxFQRmMKxhaH",
  "key33": "67MSB6GWSaBo6Y91djXjCg5AsApH2zX9vFJxyZPfziZG2n2FerRDLMnF8Y3sZWT7vg9EYdeJwR7oP4Njp85NhMx2",
  "key34": "57zVvKUjdFaARJG79vXYLMy3qXwXBbaqcrVxHgb4UPo46EWSr9o4VwY5GTCsjof6YUqjP2FcrujzeHh3TGaaEJrR",
  "key35": "47PTK7LtW5hBFZgy2v2nBFYusvmgaqJiRJvHTxmFTqcaNwtscnHaCpn2pXyqHXU1r4MwTNqNshgxLnFx3MyjZe2F",
  "key36": "4GGgMhQFfFpj1uqPqT2Jt2nPJ2iKGv778un8y4dSeta4WwgwfmEauK49kyJ9NhoYxNSjrk8KhA3CKE3e1t8quncL",
  "key37": "4U4FhLE8D3CSXjyqfmGY8uYYo5hzZYv9uX818PaJMmL25WBigKw4G3HwCtjk31wnVT4aq8Lgc9T97dLkQ5YyQQS7"
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
