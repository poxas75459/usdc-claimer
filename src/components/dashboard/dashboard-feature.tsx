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
    "54kP8NCGGJmNY7W53GEHLnHnUcxT4pEVCxAVbBBqbkbHmNRz87AmbN2grJ4papAdkVTKbkg6FfDTKkaBzmdAkkCW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Wf34sAvXdStYdHqeWFKMXNBNxFAoRvbDQtjo5NEjALDLvnyo4VUbKerQvFD91wdWK6XoiykjktHre6ewmgQMmiA",
  "key1": "D5CGRksyqtntnxajKUnLpNAPVWWNprcWkCoqCGVvUJKWXURpyvK3oDGUJyA3B2hSQUBnFz2EQqGjqFfeHYzDnVk",
  "key2": "4g54pNfbHEVwUAx8nEdmSTXxPFFBj1miteb9JVsSFzM5VJnmfKd8DQEFod4iHueY4E71ZbEfsXjoC9GiRRYvRHuq",
  "key3": "31SrHPPto7aYTokde6j4yxxqNhMjm9ssiraH7MoTWy9yKqYmfzVUeqGh86U3n4WFJ4qpfm6nzmwQXPxRhmntj6cY",
  "key4": "2PanyU9ecSrpNZFPmRYHk27Bjom6v8qXNFmtUiKHTHqGAw9ULu1zYqYkt4nLsKWpw96LnFUeq68NiESPWmtpc3Cb",
  "key5": "5Fx1izk2WqDMQEZcdQjqyrfbUGL48i8DLxXCXS6kmizQUiDBj8FAeSq5RaYFnhtiatkEfctZBD7ALSVwzAzPFDK2",
  "key6": "2zowdua1B39V4S1zwp1Bp2WdUbR4Y2Zg7wRaHLxgVTFtTiE6DnTykZXzfYhxPPV7AUtMR7KKBduUwGEfREU5SGNn",
  "key7": "5tvkpGo25erfKAB1mHPR4DQoEhScZ7wbL1uR4LNsNvwuhwGHARTxhYGTrKTKigZtRjM3Cbii8KatMXUZXyQNMPFE",
  "key8": "24B86f9uVoo1nYtsan9ZfG1f8Tx8AtRApwmbQU7iZy2cPhpD9xmo5ogJxTENoKQUf3m7Fiem7XMatdeovvecDi46",
  "key9": "2EKAgt1mLLLoqoT3CaPmJqwKiZBqFoHc6Lw7HK2jvXjZztnVr3MtFQQEfibAiFJNQp2KfvRcXtAM5bemtQyLMjmf",
  "key10": "57uBNRSj6RzkEzPcUgBdhmoMVv8upnWVhczSHi3UdWrwzc8En9B88UBoWQaxm7DQSrQQhXg9cyzdd3PuWwYNFJub",
  "key11": "31vqYxww5HoMdMz9u6EDJx28dV88W4Lw2qrv8q1NmKeyHbFavY3LucAmyMUoL4Tc8oDAmnmvQ5Mv4bVtzqcn6KFa",
  "key12": "2eHQHW42UgWcQBkPXaMkzXFBpDQkaEct27Dh6Yan3X5hQQ9SjKYsDkqRvg7Sa2hRs5C3GLnzkpfHqBR134XP4THr",
  "key13": "JWJBsLb2MQ5N42gDeAH3Z8TbJ75vFaFZRnYoWcibziVat4MXdnM2nvJCQnWJBNce2LMPTkG7hukeuR6C4s8bjsq",
  "key14": "4uTouHHa51SBpqBtJ2yekgCAr7HPFmvvRAJRSxwpjmfbUujx2AYq99A85kypq5CaGBai6GMiaKHPhTBmmveEHj3L",
  "key15": "52ydbpes8K9pF1yEQ3k9m764d5GRupwWxnww5oQijus4PRwMusQGqLSdpYD13Njj6QaFUEjrZY6ksTocpnkEKwHz",
  "key16": "4rE7d6VaJsoXk9JvTb8QQbwLYvWk2WHBTNEvfb6vvBJVKzkLHd9UwqHEXBAyBYNbnyMF7SFaRjVFAFs15tz3jY4t",
  "key17": "2tBU1jTwv1mWfkeifSNtzRre46iG4JJmPo1JUPhN8ZQs9WsNfw6BmUGqr3orSiMLcWCUiuxXmH1iz11K9YyAB4j9",
  "key18": "3YYikCBnSsYDJCgGw1JsydcyhdxUp8ETdBJCkaAQ9GZFQXpfcbaXsHVmDjpLzM1WkWmUo6BUMyVve7TWyFXZFfzx",
  "key19": "3V1w8BptPZ7tZk7XYG2iq4PPSU5z622cu2jcY3rTqq7qcVU3Kkxd8ErRm36dMeNqwZBcyRcRRfUAZzrxYZWJLVxG",
  "key20": "Z8ShJTbDJugpX1iVLj1dDr8zUQzqiDidcZxW9KNyFrfWyiaYGL77GCvPYEsEDRpVezeNuTWyom6hjDn1X4661oq",
  "key21": "5YymPGArK68pwDqAcrrcMryxjT5PiG5Muyp7Xqb8pHDpNPdMjXMTmHhx8NAVwFDuTcc4dXvmUWcn7kwMmerYZiyu",
  "key22": "3TtHZXdFS4hAnQKVHumxBGQgNoKx5JN1zZNtkZ1621ynG75fipJAvE2joBUhynqiT6GtzTxoaqtMZ6Zy1peos8od",
  "key23": "ikUJxBD3TU5xh6Xjr4iscLU2xkKKDDKn1DvY45ngjX2w4pocgs3ed2f3AUmZFzxJvDY5xfB5otGHqnFGDnSg9z8",
  "key24": "4VLLtEbXpXHAJdttbbEQgLQVjMd9U7Xg7xHaTem7mGUzqN48kGdRSZ54hGLn8EXRdqBxgHpFpveoXn8p85nRfGFP",
  "key25": "3S5DoffArs9Lvc3sWUaAJdM7HkF7SFWFz5Me5615V2g43Rgt8XFb6LJFmWUiCNeE5UWRLwDJkaitxBywtCQw3cfK",
  "key26": "346ZSzqCSggtnoHT2gjAiFmVELrWF5euL58Kst8198JKCeVt6kejZ3hKicJdQnPVjudk3cvHQBLSKKuRkxMSP6UZ",
  "key27": "Z3QPeL7bdgVZzjdjysoRRQP2Hd2rn5oMWJeeZBAnFRDEfgsHwaZ8PworAf77RRyoQ9g5vJiRh8RwtrnHM2f92N7",
  "key28": "5jGXQ3s15RMavHtz8XcPHfTo4K99tXqidB8pStnbLNQj5nqKM8JpAEcC4XrrZQvecssQ5ZTGEF14Tb3XN5mJtoqD",
  "key29": "63YEZ7sizgRQAYxChS3iwUuxExGDVHACzvxi3fvZnggEPrCEpk56uPKX8dYrasiJHNiKjF22UYUdmfmHniPydJTy",
  "key30": "2SMKD8xGHiXJHZ6GuWUTLLKcQGrnJbU513wWS84eZtdggVEge3us9ZRunqP9hdKznkgAhAWHcSKzhdBZGJJM6GjZ",
  "key31": "3uLA6MXCQapqMaZRmFmE4pQD7WQsMQusQGdJDipSSHSnTR4jGVjyXitDf6ZNrhBjYNrBL27tML56pK8RFV6CKJem",
  "key32": "4AwcqgVdhiREJ9aLRVceFZQGwHbSDScJoawhhoKcFnDyvSefCYxBSxM1wY4gTkruCxhNAkvT691BdXWZYi92nfXh",
  "key33": "4G71E9ouuFtaVpZEk7ysoMiNn1DGR1buLQe9EhyGe7g4czadpSANmPmCsT9Ge1LW85FGfodu5mAt28Pm4wZtchPp",
  "key34": "5QoxUQQ5DDMXa9hCTvuPGpKLHzEEz2te5wPHB8ZxkXVNey328TWDK9yjVSETHpdN4PPeE1pAeRvxRp15hSrSQxyN",
  "key35": "3oeAmFZJkKPznEfAYEPrhJmXH13NXLQsBsQpjkD83HnsC63eLrDXoz6MVRrTUazxbKejaYKTQiREUYAr6sRXkZ2U",
  "key36": "5GCBJsRn6ypb5yWskm4CG75CoyTKwxQg71NSUYSJY3ZpcgpQLdaPpgmqkgPq4SsHwe2UyFjLsrVM9GbjrnvBK1pT",
  "key37": "33TivPYheqoneB1Mi8w2FFEHw5u9Wb3MH46oxy8pk3PectGoKxAanUjxR5w4i8Fzj7JoQSPs7zmW7SwkMF1ENxaA"
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
