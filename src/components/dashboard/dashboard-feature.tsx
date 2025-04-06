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
    "my2JVeXMfePnn77cF4j8vvFWEuUgqGEXESX7qexABapsS4rianvyM4Kdk7T47xRyY9vhPZWRoRyjD7LNDKvCA7g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3u3fnKs3Mrbr63sNc91oSjhfdwBueWsX7eHo58x4qtULKo55a8KtVyjTmhW3eND3XRiaBaRJceT1XnGMG5h8cHTH",
  "key1": "uffYGAa8gFjPq5Xq1WfYSbdwHzXwKjPwqvq9e4ezSbiGk8CtyyeQgbkQMm9rCg57zUGGVjwUSbp2jJ4XeSDDvpx",
  "key2": "37fbGn7b59FCoc84q9pH8sQT5AoK8KdS1qfPzEHfVYsKoh4duSbGM9R6DXsyUHhMCoNKcRiTw6MNXB6wYs7BLUHL",
  "key3": "2R3scHAAfPBDuFyKSYCqnsUhczPofpBepvqsHnfLFwYRbxV2NTp2XPB4JZgE1U7JpYmtk2eFVX7iS4ZnZPofkA6j",
  "key4": "2BswzTEPKFmsWhmSXz4xL3r2BHRHu2MGtzPqnx4aFJd1z5LPUpGBsLumkTC9jGfnF8PfN1L1EvD18mhTKiWzYJNz",
  "key5": "5ZZtQeSzFDfxSQumXa2TwmNFAMAnfpoqxQkEE65hv22beFaqK7p9etdSweoxa9KHJVwcyzNcjsN8F5UdCEujwq1Q",
  "key6": "3z7xbpXaBy89SucmBjHT1rcSDj24kYRXeqP5g82zru4zFo6xgZDqiz7RcYVH4Q6q7WFUgpgRVTqxK4D258o1GP8m",
  "key7": "4diggTmRTkbHVTVADWAh44MtLrn9M4vk5ndykzDVxQnZzYtvmb5uddtytYH95QQfdPMHRmcrTDkdxGYTbb2pPDdz",
  "key8": "5L3k8gYYhxEKeZZpYV5kWBofFigB7peECbW8vgQHMbXyGQEMFjPGpUP9TbB9tbtraD35ofqu8WsuajromroJfCgw",
  "key9": "KtKPkk5p8Y8xLGHmnJwRvWJfjsGPcGP7GLgtfCspTcshj2ogKcEYeafTr4zsnQ85WH5HYZK4SVKba5VWZfCdRgZ",
  "key10": "5ERQFUw5QoZHA7Sq41HwNp5jucpzC3vMBqfRYbvFnSrzRymYCarcAeWRvQMKeq71sroRBhn4SkLKgaRw83VN6dmn",
  "key11": "4DTZaS6tiXKHTiMouZw7iCiGqvt8SPYTqKtXGBKV5HRTz3zYXTZRev3orqEngmqDjYJN466zKnExLP426K81aHH2",
  "key12": "4bEBFgaWnx8zVMaQByDJRytvuXDj55eSQwqpNhbUE7UQFSMbsjRQh4LUg1q6gdcZ9Z9AYKL1HEVAioMsg2RZuX74",
  "key13": "4d5tt4jtXjbLzAxaGFU9mJRBBZJuCSaagLrE7UrvsfCjfRG5zpBXo8stMEGauXTGhioWxLU4qJJJQtuk61c6JkZY",
  "key14": "MwFGwTDwAf4x2aEHHa53jofMzmTVpUGNdmm4VDQ5FRLNM1eVzoJ3W9CFiJk9QnNg2ixt8PKFXeUjT9wzSgrTzmk",
  "key15": "5kJAmW1ZiYjdv4EWwjRX46sdsMMhudP768Yos8mwp6BvyTFAbm5z4MuDuGDzghW2rEN51mepfRNVHWNd3qhgwpBg",
  "key16": "4cC9C3QjPt6jkyNfJqg88Z4XqT6bqX3iETWXuwBf6SsccFcSvNc6TcriKWx8LaMdfa7eT34QSWnji27GkZUtUrhS",
  "key17": "3ekdz4qS4EPUhj6aEcrPbuKrJ1wAudRtFREL8ntxVxDNPH9SVtU1TzS1YBpVj8pXDRZAjr3ecaFCdzAdw1ZgBbBM",
  "key18": "2eFK8x2q75fx9N31eUq2rBJqM3x2rmQ4dyTBVeYZuaeYskm7EnfLhDEwrUj4825diAteRFa1n1LGRUufyTMda9yj",
  "key19": "3CrBvXKaW2WXMBh9LfRsUZZTxDDhcXrJRbeDfEcMLBWLUSS6Jh5DJVXy946Pf6S9ApPHY7fcu9F7zGxfE7GJnRnb",
  "key20": "wZvw7dDMHLg5pnS1d3hCEWYSYgqwtXJnm7bUJne142YAA4csvUT5idqix5ue1fosMKYpEE5UAvbjnvZn794svkS",
  "key21": "64ig2sYD9vPBBSZD6izThVM3U763eSQtYE72QBRYQ7k2pRymaCVT9nDvAunAKKyD3k8HBCf694zx4E5bmduxRwoW",
  "key22": "2drcTnBWZWRboBMD72P7XASHvbr4E6dRLBrEUEPgfAtNDDMx47qn6yyXaBAJBaLb7yi7p2UYJxPrfM9puFiWZtuX",
  "key23": "27DjaoW7Q6ESDBK1vZbEH8Cm1Au98E1NmCp5QvNjeFQ7A5mnHs51yZF7bJ7FEqnhbvtaHoB3qVT9Wkft3CTjuiZr",
  "key24": "4W4GtFB4ud7YM5F4RKnVY9eK815A1wTSYYgBqXbP53dhyFQqZ4u7JZ57TnG5BhzwTTCDnGdprYCRsWAPAaJduKtk",
  "key25": "3L9iXuSiqGxBccURYkjQYTgdcWn6NFnZkKDKopaQQEuKonnvzWyUYQJCjubazWQKWeEVienp28awokZHNiFmVUwG",
  "key26": "5YADGsgHBFoTXgycNYkcvXHy6gvosZetCJDgH9NaMfFTXBg7hkjegDJnQp7CGmVe4KB9GvHzjeoKdBLxfFeqY7tN",
  "key27": "5GdpXgHZRJccA7rraQjHcwdaVwtt72z2JdGxqTtuguyTmRbJCMkzXJYavrLQptSWB6t6nDWJaA5qXSGUskwjCsm7",
  "key28": "CDr3WQtBjK2j84ugBLH8vxRDRiqcgvoGCeeAR9UdRJrTVTF3NfDtp6GwvtRMYc8hp1Ep9QFAxRP5uTjYjpD8y9o",
  "key29": "42NnXRbiV2xNoSKVGMcGuXctNMzsHpPrvscm2UciMPJjba995Pi3HYjMLmMPawiSPB7qzW8ud5Stph9yWev2DP5q",
  "key30": "5pdPPaEoNHY8GME5ms5mNTGc7eGbGXLR56oGspQDVcqn58hSVk9E8TZJgBxoGF2JppAcFzFoYDQXF6zydwVVCABL",
  "key31": "4a9VVYofrXLNo4M3g2zYyDxhw9iStcSUe9nYTzHdm9GvJGeX44t6nowtwahTZGR4otZM9pYoM1oUuQpsB2aRoaGc",
  "key32": "5BpujqT5WC2KeB6vk4PFzT33gT24N9vi6WacwqSLCjRc4ryfQFGi3MkHsG9FTqXdWPoX67wqwKfDEqKTkeGzqt6k",
  "key33": "5vC2iZALPNmGu1EJvKtTVaagvvB4nNVWn2VfCmvcypTVwZ8MW7AZFZoN6e1JZC4pBHBTJ549qYwCYGufz4ey5jrm",
  "key34": "4ZU4FKuSoGR5CmU3gk2Zoky5UX6kQPtkDUqjZTWwmukujesEm6S7pnJ9EUcfFX9S3JCxomtQ5zzUzbunHDBzfzBa",
  "key35": "btna8rWYZ9krZhoqEAchRgzV8fE64DM1dSZRhk5w37QpzMRv74cxg8fB9WXbZwRGSZTx6LcqwDJJDRZpvrti1Uv",
  "key36": "3VKcnc4zYskbrFNsvuqdZUEe1PRLRkNJXSPgUQEwfRFvwDWz3mopmLVzxCP7WrqSj2aPyKHLnFKfD7z1rGy1ybCS",
  "key37": "5Z4r4p5NeCdLbdA5Eg1116g5tg2wNLqEB81Yt2B2d4mCqgfEeyi7PFA9TrMA4buNkCxEEzDySLZ988RW23TeETKC",
  "key38": "5MBYxkxgmtn9wwjfn28vweALACipTjQLDHfh1MPsNza79WNv4SfUE2JuFwVpuwndTv65kLTYb2Mi837ZJaSgJr9X",
  "key39": "3FK4o4EDa4PephY1Xf5Dmq5YQX6r7EPw3nNBsSwcvMk9p9Nd7m6guPiJXM33dbnXnuNWkGUNT83WAVnHaEeozGAg",
  "key40": "Q1vRPqF9PhZLhvpniQzM6TddsE3ZPMzwp8kknRLAWEEWmBkVuJEKQThoNz266CHPktqPbw9saH4Eb1VqVPcdHyn",
  "key41": "2d6Czg7LuQuZYwcp2TVcomVYQe2rYMCGgMBfKmSkQfQWw5o34nicdL6jJSd2xsWV9sTqQGnAkkUAokFFfK1Y7Fis"
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
