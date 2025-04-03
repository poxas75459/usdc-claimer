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
    "3Ux7pdwY8yfR6QjoLgobZe8RkQZTAjmdsxGd8Rhb3aotqJPL9H6PEKQ4tVa2JvZbQ3mzJLFY65ausQ5U7Ksdw2Mp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "D2EBqgVhbbJT8KqpPxbHde8TQJzBcS2k2ndEAFmCutHFDyVvYCbf1cwEsP78wyudseKLNYrgFi1UNwEGgWgWo2G",
  "key1": "32utyLkVwHt5LSyrHWSiXub2xebjXTziLndBU6GYq3TxockaELLoFqJuFqaCf2ZuUApy9SXjoTJdUdXJZTynnkDe",
  "key2": "5WW6ACVfr1LpofVHXZrFuyjVyLaaLksptqtESxBr9ha4xtHFVpma5FVFC6uSM2QNMJBcbRnte1ia1LXjr13LjEdv",
  "key3": "4m2T53y1VvBDsfrw4uoB5Nj4VntsNpF5g5Sh45g5JWM98RoBEtsGfhdYawR4Mjce3ohy4yRRcnWmV9hNYFsdH2hL",
  "key4": "5SEhPmXx881xdpUJ2aA6qcRFwSsgavQStzXq7Dd1VrdXsCH6qEBsTMW5b8JPNGMpxCFLZN4CZqW2Ld4nugA1Dzuz",
  "key5": "3xLX2z9wvhRy2adNexxT5558mNGkPTthFpqSgZW8fHPQz2BByMw8emSefyxX7buhK51BJDR9JwrNAUX6DLV5QKaY",
  "key6": "31S9MohXjQDiy2QgkrAT2oTTwhNvLdEC2XkEVo9ZmtvobKDojvKz2erU5dxwRsapzi2kNJBJuy73Up5tJNgm2LnD",
  "key7": "4VKyim2GzJAjYrkWWNvkHAyAYQbwqrPdoXc21Q114HP6B83FVGqGdZKXwDALEfXJjYzzMb3UmAK3QW7HYtTwaNmr",
  "key8": "yGWLoLqAMTNL8rwvCdVhfoNUASWTCG1GT5N6yLfDUHv4oPdSG4hQTeM7UCQV6yMFa6evJhXUqWj2SWhHzeJFSX6",
  "key9": "3pFbe3G3GqvEJhd2xso76GZECY9hAuiJtThQ1zTvpLXNGBN35f3CsqY9XAniPZRosAAoLd4UrZevgg2GF2ocQMdn",
  "key10": "2DuQFryUqDpzbcY9R5TwGnjuoBuQ7n2Bxnic9uvA7mXq1ewGew1gWnitFHSP85SFepRidYq1UsznqhWam5VkP5ef",
  "key11": "25gwo98wFpEaQjHPoED276a8LpLuRY46XmqLb9Wt4GqLin5rygfJXMb59HtQvhB4tnTXiRFfpeVmYBgwVk1eX9ov",
  "key12": "2dwURQc5Mi33NN4TpxfRK58SGv2QXLxGnn2MeYxiZNuskMDmaLPWWEB25piLYb1zSAZ4ZBeL7bMaHCfzHnSV4YTq",
  "key13": "4SXiTDzgVx2em3fFm1H8g3tm6GDR3grrhPg3nXj3nRTK1XRxzLFwHFf6x111tYuYbpkTXqDUFivE4vL7rm6Uq1jH",
  "key14": "5mqU4sR8teWpV1GAaN8zfwuyRe8AkTnG8eKfbPaLxN5mNs3MrLKyaZeorsY2cLaJXYeCq5rXbUGdxMrxo6b2C7Hm",
  "key15": "5WCDsBfpQfsGGHcafLvfHyfMvAeBe6azwvTLWaJ6oyP5xCme9oUtu4geMgP8dkhAB6me5fKUnc9QXqhmRs2pTxC4",
  "key16": "2X2WAoQV173ENGWn8oGryjaDaC6pvihUPt3HEqcAqRo27DfNPPZbd4j2Yy5btEyiGee7Peon2h7MUD3y7M7DdJfD",
  "key17": "ZxnUEiKL9BAgvWmhxYeYC3gqYQ349SR5sQAp5wM6xD8N3nSzEswTHRPYKkkueCk3r3D5XceqnWfcQjo4wTi2N9Q",
  "key18": "255HemYBovvfje5AHkCVnHRRxd9izviHaJnC9VKvfaLbETY7DybMTvv6E6A3R1BFgtSDaH57KzLAKUMN3Wv3ALH9",
  "key19": "4hgcnth2QVPZGHfUikEtBVPxzrFaBbkxAjFUNPKvBNK3Q4x9qeMHLeGpLd5to3S3xG5rCKvQXBELsGNUnXyQNTpa",
  "key20": "7SrAWapBLEdhkXxQP4D3YGUfQ31oiVtfVnVN9KSkJDUdEqBiK1qXxo2kbEaikmcjf1meD3nVRmfWV2uVCrWgt7W",
  "key21": "3Z1qbjZEjUpVvcy8TKGTddeeDA9D16dNUFj7qvWaiu28F1pK1S42HWbzBTHxsbkzrKCC55rcXvkVrVzLKoCw8MkV",
  "key22": "5nKdP7Z2NZvTsXsAejJTEfSpaCofMWWF7Q5uKD5TgerzGPPpm4miWYKJRx2yZ4WcUoBNJMymmPeXAti36zYPr7BZ",
  "key23": "B9xYEbKxiyUDwQ1xbqDryN8TmevQJxtsmQUqt2Z7g9YyHTXiMKhcrQAgLr8vYyYzdFdKau1VnPXZeYDfZmtHTJP",
  "key24": "4to3myGGHumfb1jTg4TfYVxWGAwpga1HCPCg3GQ2SneFtPhVS19ycJ62Gwy8xjGYMKXEaxkgnLDUVkBSYEQvPuTW",
  "key25": "3ZUdnoRJSCtEEoPKEH8aQ6FUjhnQCn2VPM2Z4cTaxT6y4PDKq1riqGpjR8s2bCcL1Agso4EHNh5MuErjKQ6ox4sW",
  "key26": "5uWvVa3vyo8gVQxwq6je379ffWbxAewBMRuXSBa9tbiiXFTAQJoi63pErc2sHjkq9CrtR7JEQNysKgY6sFN4ABJq",
  "key27": "deKHGU4csEAjJDjBVScRE4XXzT4n7Kzy5kd1TWGdouRrMuoFojrZbT8CfpGTskTDHpsxMYxeZrrsFV8UoGZDqWe",
  "key28": "jDhHn7oFbbtoaqaUy4TKvg34H54xXH83WNe1nk3ZAvC6BkRJwqFkSXUkU7JrXGbfVSc5yKmzCoZTsEJJSLtDT4A",
  "key29": "C63ZxX6Fg1NMRV2N91kmTKUgTwBDH7ojazCmRTRqZ1gaxhcQLeUy4oDoctQHMbZDeGnpvFidoAF9Mnd52qKMEQt",
  "key30": "5VN6baJ59KyHiB5ypQ8ECW5eNDPaaGLQiTjMrBN7mTypmtX12fLhdEeb9z2Vkz6AsD8ekuQmzHxDatjgGMY6PoUh",
  "key31": "2Xk3Fc2tVvGYExZyoYvH9XXGPe1SudZXGwH9hodQAZtMh3ETTMLabDCDZgrH8sjcy8x7VvUujLkGZbfZy2bc4WpV",
  "key32": "535kn77nxFDmdDe7sPUEwAz432Mj9qFZ7CXvzJEu5NzUyFq7QgKWZvfAC32qRXAVTf915P6PEKhtfTBSKv3uN1or"
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
