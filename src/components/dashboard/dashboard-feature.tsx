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
    "UCmPU2YrQRsfPN7cjvcMMJGFHn8tJrqUEhLqNyg6YvmSUDSpQitERhbTaByhKuN82sYbLswKag1Av3q8bNqhPtn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2p7FTmvqzgNYLuoVHV67QP6tbYdQjcBV8TL59bwPxEPQvJBpesNTZSxf8meuLxJTAsoRZYJHAqJCrNMfN6RTC5or",
  "key1": "QFHUpfhUimbd8UorjGbxi2FeRwtJ44c3Bzmdps3VoDeF2K4foMyVfUnGArqRo3jtUs3BRMPLQKdUimaoLe7qTA6",
  "key2": "2dC63zMGr7iLzYRjjQgYhGyNmmNTS4zBAp5PpAof5muJmgAfmybma7pcy76yUieqiytboq9oLYv9MTTY7yLSjEzL",
  "key3": "5ig5CaKw63LFtUHAXPADxgNhV4uMsdLEw4KLa2mtmt6i2mcvYTrLAfvpR1eUPxDzGwTTzyh7A8UGhtYwJymD6jSf",
  "key4": "2W5zP5Mk3rBoqvdTDbPHJRHStk1Zx2KyJUP4d5A5Hcq8iVXJvZU4hGPgxTjZDe5Nw3mw96UMtM6U1mVKzbNVprXQ",
  "key5": "35t6TtJScg5KqJNZn2hG88YsxVekBxdCtjtj26PK3qxWXngxnJNgnA4RwYpdpBoijySEbdHzepK7S58jaE31Tf7q",
  "key6": "56upQn91S3Ntq9cqPA6aeWEq7cqA4KfP8BWCe7FN9CK3mXf1Q13nNVyrAi7z9G89xYYLYyTLtLN9h2nx8RbmmETv",
  "key7": "MV7Zg4vub6zW2FXG7wDhpR467CVH9AnFPGPQM2xQLLXaNDW2QPqcGMFEJFdSMocudN3b2mXsfLDPuQ8J6qXzQzf",
  "key8": "57Hf5yXvCzf8MKCD2Rtxe4UkdXwCHzQx5hYtfPBfDjuGHUSx3yLfEYHc9SCvyEYn1sBGKR5tceRLkYxDaz4UdMtk",
  "key9": "3seMWVgZkHHs8NGiWazWrXmq5oJM8EHnXvFEgiRcSMCHVkhdU7LvXuuSigToXtFCMnUuFt4TiHjy25JxSBGYN4ov",
  "key10": "w3CbJ6RgSB6BHDtb65keFWztPwc7rfTMjowKycsfBQZiARWz3BeBb8FXPs4oWa3Lapsko6DnvQWzahkXTKLCdDk",
  "key11": "3M11AxGN7xkhSPx3NhrvrSfdjQzc2Zx461HQ7YPkYJJ4sYvBwkeRchfZ5ZdVgXgofNykqLehGhbnTNsEHChkGjFR",
  "key12": "4fcvuGJk36R2u6MyYvpAFprvqhe2SmegyBK1TgyeNEPvFbiJ5kYp8x3Y7RojRGCz3PiGgFcAEHB2RN29rvXAP15K",
  "key13": "4nb244NPnv4uTddQBjVtUzMqMm7XrFFJHg4qi3YpEos2ptL82sJvmc5wkFBZWaFBTv7KxGJbTSgHqGrBy94PrPid",
  "key14": "5rim68jW2xcHVNp7QNyUDhu16KGieW4JAWtKWHtNySNhR84SgLYRqwMxuYSgmRPpEzwZcWKV3rzbgN2ydTirMwkJ",
  "key15": "WJBMb6ghASX8fFgWsXbTkosNDbm7oaWDTwfzDBpDpp3UZ5dDTq2QVG17pkrokxWsKZ8NNStFoiRdBzBkcjSMGSY",
  "key16": "5qF3DZ6rRBPtC5JaiJMWPQtjM2BL5NA8LZmeGVANdCAoCZzzzxNVwKDhL9vdEn1fP279BTScqoh2Ly4Xys31g7WN",
  "key17": "5kV9CRpEXyHQLyfTyPNybqPGyJh47jRmRYXimR77dSjk4tuhjKx8CgDqQDkTYVmfhgzZfcZzQUbJiPSf1D6nw3Qj",
  "key18": "3e8es79vX4EQMqMw5g9XC18fGaPV3cJwcyuyLhFSXZEA4Sw8i19UKnjMPr1JwN2tdUY6uaAJ54Jrw43k4H3ToJvB",
  "key19": "65XXGX6KbbhPLMQ4goQaofdGLoy5CGTWjTSozouV7tL9NTgrZPghzURsRpLYq17TNtS5amchkSwSkUoXXK6xhrRP",
  "key20": "5NDpK9XCXt1i1juXKEFxohWMu6q1thR8BZUDhP8XUd1V8UtUtTm8yWuzd4zG2gaxtBvwkx7jUzEyBRF2TkhbftAT",
  "key21": "WhVxBQrZ81R7UCcbBY7gFHSH7nWBvqbaBrx1viUCq6TRG129xKG7gVcq39WGpKbyMaZyVv7Yx7wP3BzaFRFyhFs",
  "key22": "WxRPJ9T3oUNmC52BBxtKAJuUeE4VxRzCgi2Pv2USWjNrsJ7U2sZDmuxCMtGuKijYbSy7fdcit9P7MCmq3MKt7HV",
  "key23": "4czyVyFKVNS4T2t4cgTPk8jUbZ4Qk2AyxKLhphZU3URtKRxcr4umcAABw1V4bNrPNJPTkL1jscGkHuZhUBVnkQEk",
  "key24": "VooUpqCNEDSy9JszDPUvEfwreFCGGnpZihxTZaoFPRkfcc6xEcoqXP4HYzcUqUo4mVLQjV2PKRKpYGie8QtT4oe",
  "key25": "2jekHFF6YYifzmUyjqtwwTX9qE7bLBkRZq7hFNwGWGW2MnMpvAAtqKzgMMNVcKWFU1r1GRkmrjGv8URfMMEiEdJu",
  "key26": "2uGDLcxTibHFX7Qk9zkH6CEU3zegj4n3m4v8is2z6cLtFd8xDH5UhYKonthy7Hkt3MeDsWvbVLzJvEYV5d6vFxEw",
  "key27": "5KPMhVueBePo92skpnivJuoGVFQMEux3xq4eHx95begoofgTAqnffvft6yZF4YneFpT5ArQCQsELmF1Rhf4E1xVB",
  "key28": "64MUweg4G6zoW8gDZDb8enaXEbTphdYdtoAqE4EDMV9GqcRDBpPd6p3eTLBtp1pd5cNNpRv6zLSgnY8qap4yUDwN",
  "key29": "5v3GaXFAh4xPYMnsrQaAGw9hMtYEwYZL77uY8ZGzj1Uf1aUJQpKqZofiToW82NU4R8uJCwBboXPD32Mc21JzknYn",
  "key30": "41rXra98AQvnjD4zH8A4wqM8NLtTNm8Ah6F7WVBCxqiusbKkVV6PfzYLuKpJP3r5TgKYj2o2kcigfyAhYZ82D2oZ",
  "key31": "4df18nvXrg2odBiuWqpYUu6RV3Ut36hKr4K3B6ZtfBbJ5H9W2ZQjkNV1KE8AodD9fT7UA3LfrYZvdKWAq6FYTzrt",
  "key32": "3bBuHC6P4r3fTw8zMw1GwZZeMvCbfUsuXt5ZXGXLtcb2dB1Mc3QziejsUtYzekCuTPPpANNifGwhVwc9R57ihraN",
  "key33": "3xqU2oTq6d2jEqZLkCanXqceSkxdJWszFzYAYJbjDFe3JaMJm8C65GL65pvFX3MFpejz4CwYLgwZeyegcmpUD7kd",
  "key34": "62dMBa4iZExzbYmxRnUJSQx66wV1pdwZjJUTsU21UyAwNGz3rpV1wwjj7q345jwBZgzZ9GgLnUsMRxgfGjxD6NXJ",
  "key35": "5PYjrZ7sxjGCmEyAz6jvP3bzrA9DZgNr33eMrDjcCgnHaSm97dFaE3rGSAzoJ8KsPT9kmvRBvC83u9oarhqPmTQC",
  "key36": "ztTKH5fWBHv6u6kc3CvsdknHaxW96yh293s9VhVthYYaTR1hoGK8wRoPVqZYB4dGPyeHksgWNb45na8uQ2ddSsG",
  "key37": "3oKpRV9Xc4GRJgcAaCrk7Sjny8Ca24PnxDvB4bV93kbYWhPHxMvHiG87QzSuuMxKkW5KEyq2djoDdvKq68oHYh6o",
  "key38": "BXwXWDekZ4sm57Xy2tzX7LneZy3ttaPkMyAgE3hrBKhMkXwWgbP4SuH24tsE5kMxZWc5kB5xn1HtppLL6dbzBxw",
  "key39": "5YDrjfcWvHvqpV9bfqzQhGt3u2QTNyu5T5YHFkyzrYzjuSwjkPtz9p5umV8odUiKvjjzDSh5A2UTAfxAqB2geknb",
  "key40": "5YinnRxvwfCDGBwJyEhRLJLVmhXP1y2FCfiYLCvubaecTWgDBWTPRfgzhVTxiEU7Bgo8kqd2Zsq6xu4pZqYg32yQ",
  "key41": "2p8bHb1GbVPkhsyr1SBi3HyipV5AfTx6yBMWVEMJoNvi3YVAeQE9ZBnJGpKJoFv6wd6L6KszmHhW3wjqsJjsSdJ3",
  "key42": "2uWNUcbGAU1YDiNQYRaQvRFyaHDfR7JXcqpPkMEuGiQu1V3WZ7n5nn89aB1WSezL4zaxPoxFhQUzkNXJn9VTuqf3"
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
