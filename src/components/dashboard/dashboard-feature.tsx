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
    "2R94Sb3iTCPjqkPsMJNTd36KWiGvWv6wiXkF3AS2FjCgJX9RcSPwJB6QfQj74ibVvBSoUYqmqZhVwuKSsavQTW5S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4od9X6MQseBn1tEXPJS7jixz5XeQa1EeVRXKspj3Co2e7Ui1pjeC2Zuj2cRt87upwTcKFz59y5nk3cdGjkYEwYEk",
  "key1": "52pdKXB4xkmawDzwwGHeFs9ZNYg3vQdz6H4o4BwvwpGY9PGDPTQoGxpxun87j5NRZDgP7uumxbW8zdMheCuyrvTg",
  "key2": "2kYfR99GpoyWgvVgtnA8F3MMtmD7RpZRVXrXsWzVHm8UzPNaZLjQ7YEXj654v6MKw6zTKKw6cULvmssbYcZ7ow1g",
  "key3": "3YNBRVTGf5jmzYNgnagCQgUKckGEhExEUMshNAP4BKh3855dpNdihijZUNzE6VrcWVnptQgkQXyZxGGwbSvy6VEX",
  "key4": "3vRJfMjfQWBG6rbmddFU2xvofFmyupoqTMTdofcCTfwPZXZP9Zgm2f6WNVc7nggBo2iU2JeqYf1JRuw1Pcn4Whoc",
  "key5": "zUv51q8Jpt6FQ3Nnbi7u7ZYXMqjceuJfuEusgQy1HikMR7wKdxDpiuYyvhcjJJBUHS4HJHvu73R2GrwC8aLseCz",
  "key6": "Z6HLfEhAyHSvdMXR511Hdkm5X94y1J99DP8MJN4d6k1PRTw4QqA4vPNP4NTRvCVqDorThrdXeGPEdEEFfpiBz6A",
  "key7": "362w4ksfNAXG1TUb1m2DMCfKBZawtmCMDmf38ByCEAUqY16yAkjgt5NMfWKwkFMTVupoeSzMrZ11z4GbAXuNZPjB",
  "key8": "273PfHKy3GHQyVay81rGCwMUGSDc6FQFceQZ3gQcNuzpbfSVcxNQ48BGR4pNM6ECE3bBogyqGs34sKZPQGDmBvr6",
  "key9": "km3f4k7CyPu6rSKHdZtG4neEcXZRWCGfz3PzqQBnUcKSSrDabax1NZivezHCcoMbRcj9QDLzbYPi4fqjgzAy5KV",
  "key10": "2zTHXewYRPMaZf2YC3nPHoEcSwfUpoioMDDtzXquy5RbihFi2TYQxNZvCJPES1SD4UzPZPTRToBGEJXLhZ7X2w75",
  "key11": "5Hjp6wMxmsSt6CzWSD16VpDTQcAyiauFMCoMEQeqYKnoFW7fCAJ1YXNsRKzNkeVQL8in1rHpeewJgVMU2Ecjg13F",
  "key12": "5cFLVV4rXa6VFZ3Qhvm1WUQjAQpStXaWJCumV2gZ2zzvCBfhU6sgfJtfiYaFEdFByCZ1K3ud1V1NQhjx3AYXi192",
  "key13": "48N1CK1ayjGmQuLKTGSzHVLVh7nvR5PkXdK39rZwT5z7xiewhsdy3jf8QuAE1XaX9VfpV4p3dgepsFab7GiP14Ge",
  "key14": "2HT885W6ApNL6UFsRWG7TF7A36SFxngyiKKmjq2Ur7VNP7peJSw8PGZ22hmGThiqQJqwjCisorF4oXQttNRvVskD",
  "key15": "QuhnzcNfAnzMVCJaW2GBiMpVvAud7UR8wprmiEaq8qkQHuK4wQCAqmoBNGgH6huqUhMTCejC4YK32YLtJHpBABt",
  "key16": "4TTDotdj8sutbLaUJKbG4vjpoSVZAeJd9va9ikwnpSbEL3TX7JMHVuY5g9e6LLzsucfMidGnnJ7KbK36ABW2iF3i",
  "key17": "No5fwmtwXifTRkoY9f22rn2D27ZtmczDuzFfMUqEqH7fJ2dEtPSb5J6SWLiS7txetDaWFPnSRiKk4Apx7virX9v",
  "key18": "3H3zZQh7SmWJ2Gn4MeAcnXkfPKQ3Ms9jDaPrLqT98qcDS6Rogg5JUhKwfLcNhNUZGb21rE5rJWMKJ2Z3UzcMzJJ4",
  "key19": "sSaiNVeru4Qf36xULnqzGa41PwUHhDVKhMBjRnsVLovY1vxTwkUnPBtFPgzDdrky9Eer3EaqXuQ4Wvks5Pt2cau",
  "key20": "2zosjAVMyrqA98AqFMYbgEZ4EftJ76bdnWbNaWavmwkq2638baW2d55fZzh7VnXeN6fWR4iXECxGZ1D4BXEz4k1j",
  "key21": "5AbD3Nf8d89Zm6pm2CfCWcuMnHHuJj5qA3xiUcAx1tXQP8aSn6cNuKcoYydmgws3RGnj9j846ywuAbLrBj9Pk1kj",
  "key22": "449J7LtTiwmjS4WcRAXrni7qaUq2eKw9BZ7Yqsc7KvvwARahf9EwZbe81oYcdiFNFLsJSg1dn3doLLA2xKCBZVnd",
  "key23": "3qKdmb5ZCMZYn2TN99XQZgTWG4mc7VEyDjJcYrprNdieXiw4Xw1b3769UaEKuBLFnWD7TfjvSLjrWxdzXCkSGd6A",
  "key24": "aAuEKvVeGsCosSUiS5nRpdyEfTto4tVm7AiQKCRxM9NA2WFqu43Pmj1ia8kMBpYVDB6aj9ssL7xcfLbsM2Xjmdg",
  "key25": "64mQTEwxbcZopmeoimafTCgcXWtNy4gmpvvGtxBdLRASEmDa41LV7Cad1BJQNSTG3jUzYvfDMQrUiQG8n8x6kSak",
  "key26": "3t2vLLyaq5FWVuAFzsW33ZbAEk5bwWKoT16ChhfkNNTgsf2iGzqDhQMgUaqvpFcUfpTy6B8m51APWaD8xPTXaYN6",
  "key27": "38NehVmrNBBSqPiG273PSN3bLB5MwHKvfRUPSSYvxCPa7NiLQMQWfBS6E3CknHKevnr1HCf8uyzm7e2cKzsXp51Z",
  "key28": "5t1NtwvprAKNWAoeD4WZh9R1H4iMRsvqpDNVGKdqmG5mPMDq7Cm5eChBUKRMdzbjYBPTbkxvUeV5d3mPrV1xZ6SD",
  "key29": "4ZYNuuCXifKEKEPEfp15PQHDDtsx8EHrHD7iWfkDYcjTk4BXJzwSaSnJruxLKtVWMkmcknPnJQ13SnsCE8778Njw",
  "key30": "3UqVXr6ZRqjjLW1w4eqsLVfHR772e8HW9L6SH7tf51jXbZP89sJg9kcy3qBYFY3EayzEXo3nnR5qfskiMHaV2RFe",
  "key31": "2vXfffSwaJtVpDnEV4xeEpfhsnEUQGuiRSGdo8m1pEnFNq3s5WyfHybnvHe16bF4dVA5Tf2QaSFE63pL2JpMvdpR",
  "key32": "3e1HY1Dt57pPtdd7i1HaTNEGqYEePN33WqcdvaDJkjG9qHXyELBkcrXtKTi989jmm5TjB35UgGy6Stb7TCRZZ5su",
  "key33": "26GaaQwiaSUjwjFkenZ5oZvF5KfNDmkBQ4K1cXNaS5hXxnjpXMSVUimyUxBzcv79jduCBwtnibk4JqCd1YSXoikq",
  "key34": "5fgymKmrGZ5hqfYBJFXowBcAoqpcSmqx46p6YgCdmhfY1cVKFPqCp2RQ9m3JLNCyg4HE2KotCgjuxFDdqqaw5LC7",
  "key35": "2QfsQGyrV2sf1Q4RtMtwLGqFh2VV3J2tNLzLKhwksByiMzvS9TFb5AWiMeau3cCR391MSh2Cfoa9qkGRJmuUf2uL",
  "key36": "5RUvA1wSxadGhU2RZn4u68f1QCSq3idbi2hVBo9sKuTxMAEXiCbcQQDY8wKhsyHQq8AVv7etZQqWyKjRxVQAUvah",
  "key37": "2kowB6qM4XVD9nLdKfUzaxRKLHcyMDyRRbbhU13NrXQwCVdv1seMF5N4QQFQWVrvPsuhCpYJEhqvuWGj5soWqH6c",
  "key38": "3Z84LM7SJwn2XwkdnfbSEEZ3ee8kuusS58mXU3CFfY1hQzVVQUVLUk9LEAJrnwp5uFWSfcTXyNDjXMWkJrdn7hoB",
  "key39": "3YgXLzVbDQFaXZhoKqAJGdrXzeW4VK1pKYUHWb1DtNLv5U7uPjuAkd1aW8Rdp3kQKKX5XWZ85uaUwCGd3XCKk6o1",
  "key40": "36xXCbm1QbDtvsHvqV5s3qDCuz5MKCVmnQxdhWCpBjUpbpZN4k7poPDzVFTXXYA4mPzbwE4nPE1ynqXTc59DUG9N",
  "key41": "NAo2xEa8LqMKNbfYo7YLrHCSape2ovRjh4nCxUQBnZxWBbeGhP2JBz5WDddUB9MFKN6pxWS5GrKvhNmEBwcHi68",
  "key42": "NKDFkkZnPpTbwdAst7TL7A9eoaZMCaK3cFfp56EDh7d6GrWqHgZQpMAjBsSaMW893EukTwKCfgpgynWdBrF7eSq"
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
