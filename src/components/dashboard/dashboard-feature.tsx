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
    "4MccA3pXDwWNSDwQVLTWfsNUfEc4PmGYpPBNiof3MJCD9u4JXKfk2M4NUP5QuzVvbmkJwZ6DFcffYEBhHHu8PAMF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SwFHPmCBPZpXfwVRTpK15GpS6w1Sr2qRF6EQx59vuMGDQdFh9ttVBjjPsLw6NQSGXNt1miSNXDAFx76FtdBUVXb",
  "key1": "fwNDukrEvRARd5rX2zUuh8eT4tdu7ng6ZUf53Ph3Rw5E4WtFH8Pqy5J2XTQccFPece4atVj9tLjusGJ12iC2Re9",
  "key2": "5KXBXRqn4tihsf8WVsEBc2ovNoJzj6A2jz4cCuv1pmnhSPqQcFNuFshM9jGnmyqMyq3hakLL339exD3k5Y1wZD5C",
  "key3": "4DgQ68sKCAJAzoS8evct2w9wqXiczBDLbcJkEeU4pvkw9JckqoZDz3yP7N5vGjQVihGyNRKJAV3ARZnvznfzSprH",
  "key4": "jeihymZS7gFE8kRLg75HH1YE3oSzzFscfV7mqytXH77nrWKy8RsxJMh8vhxfeRpDdBWUZsveA98rnkefrXGJumK",
  "key5": "4mQe2QNUewVJUNk4MQwZyBtpdkvMBaWQBMnB6EEw1tH7GUXBbu6agqsscREREn2iVfq68mPazs6cyq32QTzceoFm",
  "key6": "3GA5SMQPx9xT8WwatUo1TdKMsnmYTqEDrCNjZB5A1xsmUTqo6B4RQJs7gaKLQcjibStevQU6kKTkc7TNFQaEU4iS",
  "key7": "5dqKqJRSiaaoJSRuT5qkiCjWzueJv2PXjHfiPXr23ZeJmTXyy9CF565GbKJkD2ydGRpfEDrmKw4h6iKfQSj3guEC",
  "key8": "42xRWu1KroaM7gqFqqbNDXgXZgEBbdkHnMfFbc8wJMxXdw8WrrunvWaJ45eCjXmrxuWbs2D5qUxurDjRoP2w5HtK",
  "key9": "5KQsWb6os5ZGLjm2iVCcTJqrpQ2RnBQbX25nMQdVhJSUHM1hQcxoXfgLaDgAxPaZdg7qYNmEsjKhgVemKW2d6ijh",
  "key10": "5rmrQn7sUcV2QFV3sUu3H9D9D1pG43Q9vh2ux8EkTT8uVDc1aydxv3o3d4a26LgzwoxSDQ9D1QHNmo1GUakJymtQ",
  "key11": "5BdPRTKZ8UzK26Y3TQQgLVzYN9RcZLNuzfc3ZiMQb2jDRXu2j1DYZP7qNM2mZsxVLAqZiTSSXraMmMp3S8jV2Hx8",
  "key12": "27fjZjsEwwqxQEf2HDQhGCaJkJt8VZbTZvqqsQJf7YAnGnWDSncULRp9kkL54XuZhVKAB2HNNB75u6XNdbvgVCbP",
  "key13": "4TgxqeD18GnFXpb3JQP3fwirPrDZL1N3jW2msN5oi4LDCeZiS8hNZf8iEmTFMVsbHD9Ez4Y8NtFxznSAC9b18UU",
  "key14": "4cPjnmc48EvPF9pfuCP3FCeCwsYKNcaEqr9pHE81Myd4KLMDwk39hsiKEo3uCRxSBfMZF2kGkaZiWSSjYR9KXzsz",
  "key15": "5GkoDbyqdvRsqkXCRpP855ghrrPtgAEzATaAPg1b8yzCyTsn2zm6pTZbpyvrvfLYZjauaCp2cqMQ742Nky8WvUrt",
  "key16": "5JxJ9ZXxjSeqX71f3PnYYZT85q9SuFJZqk5XBSYqhAGXtwuG7s4VdEYDK7mfwrShTXxgQntyvLtSdFp6uqv5WEZj",
  "key17": "4M7S1mVx73P8FRR8AZT3KGZvLcTLgatTFZoD35iGbGTWXNMKfBA2LzWWuRhRSYTxdSW3Qec4F7yvVgghWo7NXnFJ",
  "key18": "3DB3R5KRNV5447dGndnAWPgWCaDvW4GBGHE3rdEsQpPwFM82Rj12q17sCa9M5DzoYvxwPGBjQiVRLr82dE6kvXNN",
  "key19": "5q7GjFA2F5gpx27DEwQ7FZzeGqw1V8dBf1uWqyYRPgS4CWSHbP4L36ryUcFygRoJvHQwMAtHJh5rNB3Lt5BZ4xUt",
  "key20": "H9quy5sF6XMsCVFT14EEfUWmx1TE3eaHp9in8NVx3N4tDP6ErfM8iez6X9MSxvZwPSi21HBJtfkVdd7PDWtxQwd",
  "key21": "2AjbjaeAFhfSH5GhqFid6xPqfhzdnEz3FYs19F5vWJVZgfYYPbCgFooQLBu9seyh4UytaKtkxThVvj2KWK7CvhZw",
  "key22": "5Wyy6Bsdn6EnZJ7AFBVujREf7hsS5jwF661Z6N9byhD9TcEXmM2NzxqrHYXKeqE3PkVbsd1iQZFDoQEmqmt454MF",
  "key23": "2VrEZdj4h3StXXsUfhdFD6A5eMkU1Tw3tRqKKF6vXBoie9c9yCkB6yaRRk92Yps6rLNBzgdJHZEayw7R62WNV9bB",
  "key24": "58G1a6dm6vGcqtEXCPmTzyMdzstgzjACKr6WgwNzUg2kiZmNeSqT9P99JR5dr7449jQ7uvVyXrmxDeKjVQETnQwe",
  "key25": "5ddwDaRgvqkJLswhj6gh9opNcd1o7hHKoPYdno4qxxEKQipwJ46cyzSGZP1p9srpzJKogfcDQm8suagRY3KgU2hJ",
  "key26": "V8b1QUomMcrhXGwzhGWS3YfY93XPdH2FuLb2Q4KuSxrshVBvsDP97pUYDrV3vLCRZWHoyBYbFFFn1PG9PJttw19",
  "key27": "62MuCEHTv8qVXERyzAnoZyak8mRW1PpF9bFoXfxc2Xm2UHHCto9PxjMjMxHUohX4dxYv2DC9UJudFgTZy3wnnG2V",
  "key28": "5y1oQwt5uAcKaVxjWXVPnSrU1ZnUATytjXBBVmbennmEKMtVGGETsD6rmTPttqFN5oQU19d5oEMGFPqBLe4cwA6E",
  "key29": "GrqZHZAkGLQkMytL2fvz9XXJjehMig6iRdnGw7Awj4hUXLWe1PdXY1TqNmZJrL4WxeJRZkjn7Su9v29t1Jc46PG",
  "key30": "2EnoPPTWtD8FE1SQpyX3TVUukAmwzjkiT5A3mfQSorMRuHP2id3Pnrp5zPuPA5fFGe7wALzQJH19KsLDZygyA4GM",
  "key31": "5aaumQ5hni5zfgC2mGwA13Pr92cCJL2TdgdpaJdnhXQPS1ehfWQ9jBmSZUAAnV8uMA4Z3QNchVkdAGiAfbGtgsg1",
  "key32": "5mbC3qPUrKEZyk2mPACMuv3oXbLDtBANWaPib696QsJG8GfkuVfmhqUfnzLenYTNJpbWh9wrSnWek8pkRrEZxwvg",
  "key33": "4hryeqUw8AdcCXcHuQYfHmXinqbT4M9syu1rbWKeaQyCSDcwiN9SqS8bZNwppivXz32snTeNmNett4kwi6B4QFfw",
  "key34": "3Cbmxkv8QzDKHHxEKtf272ocUZnfJZ7ndgguHrfBYpGnJsvFMWQA2D51NvPgQyoBggKtutQ8mBWkR3WTg5p67z55",
  "key35": "2j9ZsEqKBoQ58YDcptrkrfNMZosxyWJ1Wnwx9G7jescKSqNWikXsKLxoS2q2daz4Nj5M5Eq8kscs93vis5AnehJj",
  "key36": "Qh35cnKHBsvv8qHsAA5UJ9vj33n8geSkT8v8uRq8ALqcpULUf8JdVRQRZv9d4S85zmCv7PgCyDDiXphsJPiGRmy",
  "key37": "5d7U37ntjzUJKkTCr7Ay6wM8YS31ajsmuP1b4qwTkfk3a7wy574hoedZAMF2kEphfEZLigy84xfaqnkkLCGsNL3j",
  "key38": "54f4DjdjyiLnjCVdsyhKtkFzsHSykrbwW4u4FA3Sgns3XGGiWQ6DgYiNa6hpP9YnoQLcBQx7zgxy9QnBGpCLbA5S",
  "key39": "4xya2iqWqgr9G7PwsMA3mmeeKry3GpnmKFnqwgXkkEukHxo7yggALdn2gYwK6MqG2X9yyKXmQUJTpmzcw1tp1pbj",
  "key40": "23aGsj9A7xF3DVBTEkXociBpYMVgnRgEdPfxPcE2gZdKivh9BwW1QPGq3YcVp5do1yAH5YJV5HodQNNqx7ozQfoM",
  "key41": "3N93cD4VZXFEgyZ9fy9MnBpWV2aFudeLrzt8uCG8va1Fr5cgE7ZgnwYfvaiBUEPqyhtBiXfm63uj1hd54akczqkH",
  "key42": "5ZeqaTMF5PWoKNTAx67UmdjD3otroH15NFie6dbA8M4cVsNnrm2J4mViuth5f9K4m2NfWNiFim37e2s7UVfVSa7E"
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
