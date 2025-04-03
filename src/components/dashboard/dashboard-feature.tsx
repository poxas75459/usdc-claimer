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
    "4M6GwuJ8onvZ73o8ydCS5BSwf6sESx9f31oJgp4PhZJm8VAG388GJAUbZHQptRUxfyKBZtF8L61M8X1q3ASECPq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47YPbYe4RA3S11cN65w3SeiJHsrtkLZn9SupMVvFnsBoHKRjpS1ve3wSPAKRidJB1rQoAbqxZqrpRNRwMmAEFfbt",
  "key1": "mdM4vtLD1f9NX47VjcGiDVXxAMw4mvqcDocGNPSVcRiqdMCx6XAv2WHktvE43mJo9fCd7j9eMRnYHPwkciGNQgs",
  "key2": "4DkFBe72jJKJYjLraYiDXLU7viBduyzJcgHNfFrrRqm5WscyvdY8WXhJxU8FwmZNLTcxwi6Ani6g8SJ4gWUXW9i3",
  "key3": "63wHPZ3qsJju2rZLVv25pqeaiMq9v2KKBADXWQEGsULrvXaRjwZ47p5AYmz8zLVrLyYwd89t8f2QdAGBdxZZG5Th",
  "key4": "ypqix7imkAvDs7KLvNJQn1RyKyWVbrmE88KPgtQoyut16TjdUk9WtUJUVw7a6MtCPB2MzAEXwVTgrr9WyKMMdrB",
  "key5": "2udHEkLEoZxZgnw8mYwzoAjJF1jvm3f5iPCTxNGSzDNMdvswxAkq26qyWJYsF4tWXMuHUiQ517cmeBqGrWUo8YcP",
  "key6": "45jdSNjF61QTZKB47JWQozVfSkMRH89vL49ug9AaAv3SP6D7E7TkxPHTac8PZ38sKFkt1RDbTf1m7i6MJX3wFYhK",
  "key7": "aiwtcCNWCmLVfoBjV3Qv4xWWfqsAkKL8JwQhjf2fA4NEgA5AZ2UcyCsH7oLMVCVhbu6Us8eEaGFygYcyVKR3azs",
  "key8": "4bYKQ5EDnKcV4qBXgRz6BqitBNaDhhyysaR2Fcb6xXMM7gTgPySecZG4K9vtG3D3YmeKMvTNhX7U4TM3SHLfBBk2",
  "key9": "4dRPVMPmempuqao2g31vLAWMNHfKshqBQm8JuLWiA78b77u5WzRnpmXMepnApcKVjUQdna8LzJsTmykHrmQFkWyW",
  "key10": "5oUDhtmaVJU4dLwoccb5qGUvPwsDfTP4UrU6PHqcVv5wqpW7E6jcbJsoJAAqX9eQonnnpQBkaTSszQ4gRdrpQjW7",
  "key11": "5Chs54MUboUqvZS3VcjHRNLPDeRbbS4g77z76tyVk8unZwnacTzJcXaL4JswG39nawHmvZgoSGAkMSFSWpS81yJ3",
  "key12": "zvL6LfUEtTe1FaTeZHULHTu2283c2y6Za2FuaZbNMJB9gnYsjhxQMqH3cJq72rRhNrFtbGdeesaYsEFFxJF84tM",
  "key13": "4ANw26qA7k2Wf7gc1bmC16XLTBoUEZcy7hsGqshB3eF5rAGvnd9aVzXoL4wGaLcaP3YKCvN6EVoCBkaXYiYmekie",
  "key14": "5kqmadriGqXwg7QikApM58Mduo3pS8tuAqVcdH8R95x9RMjZzWQoZmx4hFKTSX5v4et9xWfKX3zKUFnFnb2hgGMS",
  "key15": "4iETosXSTWV431awFQcrCDQYFRZSvh1prfKi1Mkp8qEUZHzXoNGJCv5pT6enmAu4VEBck2cQ65179B1CNLsw4zRJ",
  "key16": "3pYKemvv5mWHovA4AgFtCMRHaKK1y9D6HG5tGrBk4Vqa14t73XdUqhDTaTQuSRjfBEQkzHxDkDtuDhnQVq7Gdhkm",
  "key17": "cgqKN8gn1Qrfbdf8xibYpsUDJyaPnwtBEutfeELeEbbQ7iFykihppnrKtxZk2qixNUyF4fq4hiRFnEDayCYmmS6",
  "key18": "NUf2gXMMskoM3hdqMJNATCZHshYJq4dsoGcnPqcVTnkUQUa5V1vhZpvjs5xVRBqVQwgPWVdhQVGyy7L94mY1KMt",
  "key19": "23BspxNyy4NnWxvB6WWW7f15MDqaXqQvDJdq8cE6ifyyk1R38u2DSsmUhtarX29uvWZy1kHohRN3PXxhkPoe42yb",
  "key20": "4uyVBfA2haaCaZup8pFSHnBo3ZntUFDRx3CX9CbhjcCEZGnTb27h376Y5rHRagzcdZLEjH32LRC3TXAad1R9cx1D",
  "key21": "3h91v8yGmozwNJMGuYvyUSd8Rfm9cWDaFwDYA5H3rz8rXQisFQXf9n6TUeqhYeZJpshTE2nR6Zqfr2PrCmopfnMC",
  "key22": "3Uq1JHc6rA9njvUFjVCri96tzRJ4ptpjSsrc7jkmPTyT3prHKfX5pvS9NEvco3QGSXLmcwK9QLqJzapthUJ4SV8Q",
  "key23": "3zkKWe9MCJgJtFMhQgZTaxZiwfU8zN6akCQQ7RYGBFRhXP2tDzE26XdwLz9W3PoTYqk2C6Ff5nFMJztSKAtPRKAb",
  "key24": "4gaiNGTLHHshY2CfiarGjBhYhQfTYV2ioHQtaBSsmvKnc5TmXGRw77As1YQHboW6mrvFPim2WCD8RKMSJsTkqN6K",
  "key25": "26Zk1ZsVEgpnN2oNSpswvWmj2G5d84vDhS9E77jxKCnBjxQNKtLGmfa1sYCW9koGBHocQAC4wme9RwBAjiwXPPoC",
  "key26": "5qXDrYc2X7aAzXvFBAwegNdForpGxjj5BY5xMT26cG3E6To2pp7M4jiGL2iuTKyCLUaAjGde7VgH469LWyaJNvuz",
  "key27": "4v6RtFqbTUqZXzGkp7p6MKSnWgbP6JYAdRs5p39Z5pDLZvzFr3TKphMiQVbG3A1SVZmF4GnYb5vZS8CSYtFnw2cu",
  "key28": "2WeWLfK2d7ZFTHwFYgyDk2AnDdqGg8GccqUwEs91WKF8pEhQjmJem4en9GE4oEYDVubr66Vjzm1Tuk1kcBCKZ4NZ",
  "key29": "49VJyWLcmEnX24TfxTJHhg3PJpQqkR8xpmzyj7kKQBdYUZoDCMVWjCcj7TYGgATjoU7sSghumMP5TDEbP1J9iq9M",
  "key30": "2ZtnTn35BTTfVoe3cRQDdR4wAQQteY4KgA4DvsdjrzvRQci4BqkUUSis1d39Nr99zvz7jjtQFZDtY97fgV6vQLD1",
  "key31": "3XCd5mmCsdGx2gpAQhgE7JNVNi7Dfn667FfgwsidYrC8ZNMWUrdettZHXJziyfDH73tm2QoNpKSWvo2nRdUvfcXT",
  "key32": "4DmsW2CrrCfUij8UN1K9DCgMWfu8bB6ZYQwHMRJfQx96whKXQ9dCTPRS6om2c6MXAk5mNR9ThHCu99Fy36eUsmcU",
  "key33": "5CKzYiFzqBV8NHuMgoBw98JmNx2kg7KS6TVMqn4nWVHrJVhw9Cogn5JPJfELk86nUCk2bWwVvG6a4deoxXiPCZyU",
  "key34": "56eaYFssotBC9yGVUZSEbjnB1hJ8ivNU6a9NnFhU5kMz5bBWHxZGgMriP7kW3mnbDQz3QZ3mCJ9AomBq5orMLDzT",
  "key35": "2owR51x68JrM7rDcWWKZTu5iq1ox8mELrHqiQ15MRHK4kWQx1cEtiXKkSVzdzt8poCdZLFQuXUwDAwhsFDVFUWvL",
  "key36": "5B83UsebKru8sgXCjuTWkJje6WZF28C9f2VHSBTtf976gLk6qMuhAktKoHT15y7DpUrkZT1V6jQzsmZy2ZwcuPH7",
  "key37": "5dwMo2UYGR4KeyoqNGEHB7x451PwacuDQWwogeEHVhTw9cC6CGGrmpKqPvvDXp7JZTKTD7DxGVLUxrQVhxzNHALx",
  "key38": "3tYY4vpAGyRQCteXtdj1RochPYLUWVMCS1QMyqpYB5YAPrrrDY86tvazB8PEgJmG7GNfMfmXTAi3Dorgvu5Mu8X3",
  "key39": "DevZnUkPjqi4k1exKGqWDRhRVie5iNRY9D5NNVSddJHiB5GQaXBNXDsxFRJekYkZaD6Xyp6R3QrNtaxyFNb8fY4",
  "key40": "45yA4JffxJXGs5BmKhikmYtVwgzaTKQxKAuQMXsH9kkscJWZPdcqP2386RLec1EaGApfNhByXMqxynoj3c94jrrE",
  "key41": "LSY7cjQWAKWwNWA9FZYy6MokTMmEEfzcHcEGLPhPUbi8ESd7rEYPtRSaEsbydVRMFGJEqsrCb9QX4gcB6CSyxpY",
  "key42": "22hLz8RBkrcgbce7zFPYn151k2jFSY4gU9RcBx26ANnbegCXKrosvR2WkLGRKnBww48arwJqSFyGVFqXCcFggaZ7",
  "key43": "4fBxXTs93t75EBqcpAcNWUpTR2KEkvYAc9pWDuk1UtxARbNNvGq7wpyb492oEnLpaYyzt3E6jy2cTCPJbDtRCPde",
  "key44": "DzSENUgbp5gHUSaJp29ykoHnbz9QnQHrGWhj9C4GExTt5DniM3AAhxh6qSuRv6Kzk4agWEruK3hsG4uh7GXJFDF",
  "key45": "mmCM1xXxx6JoZ3gV2F4euUmABr9ugGrvAPwrFXi54HYEdLJzrNHtcqT4Hiie1qa8D9eYSd8aRwcJ1LCVecoTQ2F",
  "key46": "4HaSrw5Ytd9TsjB42n95EVAuhC9nawbzk6XDs6fNWkb9Gk3B2d1TPLFQBQF9bpYCvCfeVsTiUEXS3YLEFxSbmEJr",
  "key47": "44TT2XsSHXKJdpBPNaYXBziiHNjavpL2cZMNntC2vCBM2KvWycybbiexceHQTaLvRUfoELbrmT7Ern38Tq73Fj7k",
  "key48": "5hvGZvGU1HSVCVLGnHc4uLjgBRgYbVe7utLQ2YAnsNqXGdxDkfAF4bgDYJPgwybXMtyZAcubWvZu7H7s7xA6Pupm"
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
