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
    "5td9vYhMVeNPQN2Epo8ycLxfQdcm8yXw4r1tayTuDd7xUAj1sZ2yMdyDH64hBHNiCa8niRFKtZuA513APHMPxCf9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UYhChMvycLccozVZvTdsKaVPYah9mw8SxYA3D3eS7cmCZa6s3EXMd3YvBTUgTzdGGGD9UJSK46X9va9DquQ2MA5",
  "key1": "TSZ5WJuAof6PvxtarzpT9MHQNKmAdeZFnzyrt8jUbCGvzYgYp9KDQz9UDMj3FhgTRKxPxokiJxxkewQyCDE11GH",
  "key2": "52t2DgjgbzzG3ApqNje1rUhvGAEbDrv19SntWYB7QyEdx7jiUm1XECraHutAnv7DtwNMmEoL7qDJbAsNU8VGtMm3",
  "key3": "3CTPVsHy4sZsvP9meM3HcBQerBKC6a6Zyg8XCDnwxRsLMoPF3dwyJiqRS2DeQUAc3Vjqy49vvZXCqprFhZowF8Mc",
  "key4": "3otJFqaetU8NNpHvdj6oYoMwW97pdy14qVx7gHkm3yVyGEasoDR6xUPSE3hcAPVcN5s9PKuuSRFWVRih8JMqHUNy",
  "key5": "4UJenSW5hVFCZkYJwoqVQEELqjcwGuELZzRZao9SZa56wDTwqL5bvikTot8KCxRpwNQRUqviqxXUWr59HaiieKVr",
  "key6": "2xRegpWjcmmaQiZEngUSXdhNmseMv8xCQxNTqcoGYt1hfTtTbeoAxPoUsxaHTEsJdkh2oRnDCMN9i8a9YN8maJhU",
  "key7": "5GLB8btrZGKAdm3fYKYQfn8DexezHhuG9Ngc7uJLmthwq7HtmtUone6XHBLe6PKecxTQzrBepFpsHSyXN1cCr8KW",
  "key8": "21KwChWS1qFY1HVyWk54KYHT11zg94uDUdJUrL3wvPuyJ17ARQjJnPqQMuaRcaDgJaHCHvkq6QQWBLAhr7PgCDb6",
  "key9": "CHAh7Qjmngr3FxnthRMEiSaiycY9o24c18iy1PgB4oTBfypdDcr6myntcW3jnhx6AngC673N6xoRZYFWrMXifDn",
  "key10": "3hMa55yVyTPzSRHTu5zbggWuHoZHoDqM9boy6FvMF1Ux4sLG5GEG293ecBozBhbUScj7YDnMHXvTgGDineLD877i",
  "key11": "nSh3nrEnwGDJ1UWPEerDP9HNocUVs4jRpkuRnCcC3m8QoYcmXcSpxfQeUN5JWwZQWvV2wF729iK5F4Dfp583SgG",
  "key12": "2caQQQjmDZVYycyUka4LHsQCnKL2NQNtv8a9XRTDRfNPdZrbcxajMy2boY4PXrzPAYAYXjQw7g5z7JLYPim4znNt",
  "key13": "3yBYPqwNsJUyxMWKm8qDaKqzXT4Zf9M2dbdqWswjZ6iNCdR7TivuTBQeTy6UFdpPqzAJewJaY77dn17WSCDFrAgU",
  "key14": "48FRr9PkzfDtHeZ6LNby5WtcrBjiCYaNdi2FG3ECqEJKTVxhWc68CZn9KTSCm9g4jetWToRXr5ExjB16pxeh5bw9",
  "key15": "2QwPvk7DEtSjjmPqAgymWygjtSadsKDG7fj6hKvhzdyDswU6MydYvtnKZGUF7j1spR4V8zL79n3viP33fjmN1Lmt",
  "key16": "3NdCQ2uYtGn7RSG84rRG6831LMGa2h9DSgcvp3J6gcFESYGvNND135PJbh6roLFxVCLfSzUM5pzN4KQTmzLQKEdN",
  "key17": "2FDc6XnZYiVPrnJi5Jxgp9GbiYyjwEXwd6hBBK8nXAQwHBpR3ToXbd7rP6JVsowo2T8KGpuvLJjXNphhnX6Ra7QV",
  "key18": "4CaiJ7pw2Y4QWBC3HVtXw3Wipi8TnGNEYNQZ1vHqxEEWtipTrMKSujTjaMR7tcTiBXgVHJmxeck4j2Eh9gLjuH4p",
  "key19": "ky6KJGvfTs1W3rzrYZYhDovtKNxi8Zk2DfuaqmdqS1e4ADxJSDhHTVziz3UaiLkBg2WaninWGS7GPVWDRB4TA3M",
  "key20": "4baqe5t2xuPMb65x4poSUsbJxY6bBQiGDG4HQCWuEzbwaJizAtJPtjh6aAFdptg5mNaVjvjbHW6GWDwvLYQVDXpy",
  "key21": "29i262HzPr8nAQVeo4L73Hv2oaDzs4YYdhDNAjCyoyb7BVsTas6tUKmw6k51XJTYvxg3AkC1kFjAQNQwvDapy1E1",
  "key22": "aro3DBKm164F53g4Fz2TxdbQ5FVZCps4sf4frqifVuwUer8Te8EqvK3iZWNCsF1qqQqWhihL6aKBYJWF39vJm13",
  "key23": "3QQt4dH1DZ6h1bRgMQH5yJbeEWq9cCdyRRTsd9mrdw6CDjApvFBcB6yo9LFE3jfWVh9CmRewUhhM41N6HjnuV62j",
  "key24": "5WnewAHCdTHQZCrvALdCGdGctY6CbubuQHfjNPDHXaKszNFp1aKGFuukSHiq3xTsyApbH8aQGxtLPPbEucB7EvEk",
  "key25": "5rKzANpwwYX5PinQzvmetQXZ7T9ZKi3maEEtiovz2b7WYCzFM1cE7a25iuy57qwmDGSKcJ6fQKmbNF4ue5vMbTuE",
  "key26": "3UAGRywLTq6nmhQizjESgbQiT3u8J4DMRW1gHK2Lcm4iQAf5TzEqHeabV4raHYT2iteyEYnKGWxFbJggCuT6asCZ",
  "key27": "48jgfMJzh2TNfbqEnt3viujmBAxqFArPCios7TsFWtscy6veqoYgTZJanVAPBn8tkmh1cnNidUtRLJr9Cnh8c3F7",
  "key28": "3BUHLPFPtpVvEKGtYa5pdQczsaBtY3e1AKwCvRn7FCKfNLbuAv4LpcRyj2ENgDaUZC5BQi1RPkCvk59UGeg8yWEu",
  "key29": "2M3m6H1TDQmGij2xaT5C8NorMTdSKCBmMg2eUa2EsUmP9NsRWs1Zuq1D9GwPDVh8Bf5vKUjLn59VWBvTrh8awryA",
  "key30": "4BsNAqwgwdKhUsRWNzNRQyCuZo8PTZcD2YcqT1mUkywRJYosMctAfuqrBr3BgQujyxa8sJCWU4piksErBWR7qF4t",
  "key31": "1256Na57NBVWtimUy725L6nsJ3NgZFtzRRTobPwYF5QzHYEhhy8aTMceCQig11zNT8Gc4GUuP5Zsx2tx4r4F54yX",
  "key32": "2reQYMPAwFQgwGuY8WX7GzuZmVVxNMTXwqmDHA1oAvzx5dMQqsnayDbVbDApuGdGnXAef9vEh27fgbCvBazaU45F",
  "key33": "2T46NXqQ6r7GVf7U5iRNEe9Uej53jfh4LbhYPghyabB9xmLGcVgPfvDVE2SfBoAB4eQ6KKk8gQFxtsghPVHfHPUo",
  "key34": "AJ5Ks7VUWGNUF8SxDuAXftuWWZ6ye6ehTJgiPSYjsm3VswoLib1MdwcbXf7M8P7zs8Dw5MyyxTEqL616MCkacR4",
  "key35": "3VibhUjjR6fp7KrgnuGZgiVH4ejoXEn1ebQrxGaEVJ8vLqEzRNEKm715q8fvjceQTGs1tN2MppcbNCmpwaHgJVhK"
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
