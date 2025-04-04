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
    "5dSe4PCCopBnsrMUM1Bki7CbXfMyUXUHYLsitvgu6yJDQdWZQnswzaApGhpgddUwh678u5vsqDVp52C4MpkEhzz9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HeF7STDmkGoRfpbr6NX1GBjWZBMAaycE5BnfefdnUXsJwso8oURV4EHpDhVUGyaxVTfwQuqx5BDjWsaXhLe7Gdv",
  "key1": "2o8YT3RzgrrWAtDhH9Nj7AbvvPMBi4sZzgZ4VVP5Duqc4uQHzwwaijk7oT4PPvfrtizr1Sz4vx5vPLUFFVbbi5J5",
  "key2": "5xBZvqwP3CvpWKDzja2UXMYuxrbLq9KsaGjrk65pvo1f9jf6M8zVMmdjQzoo77VCDgquJXBGw9y4z2WuQCcgdU8C",
  "key3": "2x8yVAipbszUiZzVbrBXuMUiAgWZaDRy6n4iqegD6JD4U3128UDJFYds5Kr8SenSPRwmQTdCiJva9EP7VxoTA9ZL",
  "key4": "4wSennbkDxxX124a9koyFyb4QyHzoZ9cmUcGNZwbuRCMPw33ViALREWBf1XHSV4Z2MG9M9m3a5uHbgQnkHqRKhQF",
  "key5": "3wP8jKcdeodss4JFtHRXzDSfnbzCMs92Fb8HgpZuBrZTXQFqQpfq3F6FPgVsykvDG8LVeDGpUAgdDDeevKYvhq4h",
  "key6": "4FYfR3F3NKsK1MWzmehdf5bqTA9MW4vAxdguwFgDQDZey1NxcgrQGebC1xSZf6kkSk82Mcg7DXheqTwCNTpFbxFC",
  "key7": "5aZB6GVwhyFzBu6rcjFaR2ynDru6Zf2vCxxiW8FejXXP4BhUK8tfsHkZQoG4omuvu1rS2xHiANPKankTE9JMQ9TR",
  "key8": "3zkST39aWdaAcp7FzaPRvRAEpB3mfB57WT1xL4HpjDPNcaiuandnf2ug61KiLoM7hoVa4VTHpJruXFcN9cHggn6W",
  "key9": "nLStktLu2C3VkCkqRBE1aEGGBTuecteRKRcY1KhmfHoB7sgiAwrVjdoWMmoQ3ZiMcKzCEtDDByJSVoAvZHnVZ46",
  "key10": "2RPVff7E8JfcqtowdQiPy8u2GgJZMD4Af97q1UzxLeP4jEqWJCLPEJyE7n338CwqgDEi4u2Kcjp91XJMfJnimU2n",
  "key11": "3fjZjjXhGmTvoKANiWbgtCCeowgMTH7zgCet2ZvbfYhRonmcqTU3FpsFqFGYkAQZecpki7ENXbNcXnQnnjY2kniK",
  "key12": "4ADh297XWmSurr62m6oQBXf19SJ5hhbeLGtpDgq82MN52F7HDL1a5cPDiqjJPjbhdw8X4jURHVPBoR43XxWSJ9h1",
  "key13": "3w4CAEVShJMafVY27NdpBXujcRws5mRDXW5MbgSzjbUtiug1mpwX2LUbA2UBUq8q1aU2YcbRRtJRvzSLstJkPRkY",
  "key14": "36j3c9a2svWgdUN4bCAfC5w6mtUueRSprYf98SQZh4tg6FFpkbqhfUpcbugh4ZAjZE7uiLrdJPwjvmx6jdckSgfd",
  "key15": "4mWmGiLFPVypRgFUNYcYRbpUoDyFZxUENV8ASK3NS2ynA2xRuQuSUoVJh2k8JGh2ou5rkxKheDim4d9knPSbzGwo",
  "key16": "5btiYpof3cvnNXAr4X3HRDhRWWp4FYkZJa5J5fJEDhFfcz5DcYUYk9oaDERvDpUtJXTbefSCQsJVtNTVQ6pagxhU",
  "key17": "3LSbP9MX8fUjmvViVDJ1VbTfn7kaP9yF7cS3ewgtdT49nocqSEEbCaWHZh7SAMMXF7xj1iETSCc9gMJgDNRNwmgU",
  "key18": "2L3cuah87dhpz837Avewq2cUvxqiiPcYAzkz8VeTCTKssxUPK4zNFZty66w2eq15otFqkbzYUVjgTxT2kVQFQXM9",
  "key19": "2FqXcSewfnfSxVEUtpv7N5JXWHm9wwQACwz5VqHYDcBppLQmP9M6ptx41CRy6vU2M4gNc8DojN16k24ZNhDYJWtq",
  "key20": "2v56affLyK6ycPz9Q2jmgR57TZx9LNoqsm7F7WZmoxmxoTYbwjXiqx7oU8B1v4BgmDPaNvF95vFA4Pt3c4MZ86BH",
  "key21": "5V8pGFhrRE8iXbF41tpCZgoRRa5SAJ5ZWL9NVf973iUGWcShZ227E711GNwGgYbLdeNYpvniPjNu68ry7fdBvjEy",
  "key22": "2pDrZR8ce1McitvwZA3oDMP5fNwcrR3STzmz1BNyqicBRuAVbsUTFNszLLH5iFSzECkEYfLYQKajegx8BANj6Beh",
  "key23": "aTTvobQmrN1eA4F4DFX53nAHY3as3T8SFiivLZmRZPxR9PWRijbwgNA2yWrPbsotvmhujGswaVHWs12PPoq66qV",
  "key24": "3hH6WWVNbfCFxJFM1fyZt6GfDZ9tXTqDT4E9aT3ebCkcC5J2kqNG3n5vaqcXTRsJCUD6tKF7LetTAqbsRhWDBRFG",
  "key25": "3e6QGZJAtxd2KPwrr9sDuefTUWLpGtVhpef49SsoaHqu1V5YMjpmx3eRGmDv1ajR6ccabrLM9ZF77X41bvu5ikqF",
  "key26": "2ASpUrNUCqFEmWyZk5jZnocTwBmKvE9GG1QQWnfoQbprtsA6jNmQY175RUjzgR2eYUKBgLCjyNEZcRdueyL9Rfmg",
  "key27": "2nb6strxbQwHtHSofWVy9jorAybf161HMVbd2L868s3dshZLjwxj7pjDttfaDBENURUkmsXQiP4o47cQ46Ytb8Mo",
  "key28": "HPnCGXAA944Ay3XAnSd3nKd8ovt4ufNey9BmZUde6yMwD1oq62KziQwvcJEBHLENXGcqQE19L77pe6Q15nt55P6",
  "key29": "4DgSeBrVgXBETSnVMKjWAGUWfEpsN6wXogBrdu19W385ehvGDUDiFGaMwyTziG28gUVXMfHTwGyaruENvwdgkrqU",
  "key30": "NoB335HUY7FaFTdVTbbRx4nBRHSFNuzeCacAMxkmw75U3bDqftHHXEkNHKxwjTiNiD2oW5RGAts53SFiFt9BLk7",
  "key31": "5jJuymaa16CvE9JWJ3T2jrvxZWhvDqwgHwLiibnXnGpW3rMt6X6vs7fzq2EnA99S8uKgVxHYx8qKcEtibKtzdPtR",
  "key32": "3bx2nRwL6iTLMEjqRao5GUV3kyBXezmea95eZpBNWMtSApVexkFnU49Zu7AyecSaFJjtaMXE169yqKhVqdw87JQJ",
  "key33": "7GxPNCWgn6mtTggW9y89k3j7f5aBqVrJKCWVaL74QL66UQihgZjtXqAhoeWa9DezEg8Dnh3FFWP54sFezqjmmuf"
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
