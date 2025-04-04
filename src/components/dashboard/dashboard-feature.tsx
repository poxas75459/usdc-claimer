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
    "5LKmWNwh91JZhXyLep9e54dqkmTicoiwWnSgdsrsnMaEFQFMUotmgFG57UpEcHTCoE7NguzCx2zP3BMxTTbREY4Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Brt4rDxK4pK1ZBE28jwDuM6DTW5CpcWtUmAsQnVHSG5SQitb6dgASuAzkj2qjMTz4H9WeD6guhjyz78rsgkS7b8",
  "key1": "5LjD6hG3nRWeEb7TDqyeVoWDz79eo7AwSyNzeQroCptdA73FqutjNVcgoqCq6Z3JvhHWD6vVJSLMPf4bUs92xYy7",
  "key2": "3rEPwrvPt76wVPw1LKNqF49SVemCFKy6F8u1TCSQuwzMHZt4H9oD9qwnoeCM3oH1BdCfaPHK2E7gmf9U11SZxRUe",
  "key3": "2HuoE9uackW1Zu1skApswF3L2fUkt6yfk3M9ZcAtTKGti8Kw6keZzLJnrE1meH6SZYaXkQx9LfMZ7Y57HVMCqZKn",
  "key4": "qA9rLowMBWAsrYUK22bnfkwRYzVuBhm6cD6DXgRmk95S7AszbDmbBYYhHnLt9cK3PVZysDQTDKFgVHNCUhPKREn",
  "key5": "3qScg3EBoANePutSQGAvZEpC8hf5Jey2sLQipehMRRzmzLAwdn7YWZHxbGcdAVF5BXySGsYR92ebDsgsHQcocVn7",
  "key6": "3L7QD7XpB6fcT8Ghwvx6WqsAD44yxuNq1CfiSSwxM12Rd7UsnRG5LxFDsHL8eRVberteqUzRmLuhqz6fBUWgbjd3",
  "key7": "42NTRaZv1GovCz49XQQuw72Cb9pxEY85ZC8ScaCakukUVSMmwozzyJ5xkoonmtVjsaLbtrQ5AFSaJtusyoCPSzr9",
  "key8": "4FVVazhXS6RQAnUV1pxVjUzCYQmFbDRdRZKwakmB4muQrsuwCZC4PrKDUg67frsyib4gY1D3BDn3CuTVSGZsDRPG",
  "key9": "2dHE3FMeJMT8YHVyjZUhQ7BfE6vypWLsZANGbgCwtVsMCKZvLyPb55JrqjYcY4umejbTshu3Vu3UpkqAze6ochvS",
  "key10": "5mgZWbrj8dRZFNws9e6CSecV6F6ZmRENhssRfAmJ1U9ZJoWxzgxq9phszChS643qSxdByjcokLuNfw4N3DYgTLME",
  "key11": "3DoxnRiUZaNvBfiWLkqDmXzFisSCgtaL7fyqgoeFLk5d6eqhTR13RfGwT7PpGJevephKUgmaWNaqXk3FZte3rRN",
  "key12": "4ZUFDwUdRSxvtMebHzkzWg1NxPrRgD7ozNbajDzeCoHWB3eR7Sqt5RqVAQ6n8Wwn6RdzVaJ63BSGQ3iijp8Hv2Ut",
  "key13": "5ULphaDwK9kcxgBbJ84stjasvodf8ovH24RonNKQfB3wctQ8fFtcEaLk4dZh7UDixio7aBwzkcAJGTwDQGoqvUxT",
  "key14": "5MechN1xrTGsvdQvAhDgQzrdmRY4b4DViuEVMmNnGPiS62Z3rD2dMxnfHKtJdbe2bpdwqbWqPBCLWQzCsTgMYAFc",
  "key15": "2SV79TvSoJykq4GC1Xaeg92c2nLnU6wn3hkH99Y6EUDGg6DGoEgPKconHySv2KYzNfABjGdK2FrhGLwYDE9ef7US",
  "key16": "64gQqpGCCA75NZuVqDuDgTFzp9U1jfhTqE4U51jm7Y9kYHEGwrJkRRquJNpmkLi8dDtgZU37YET3KYwVe3C2MV4L",
  "key17": "3zvXdLZcqvHd7NHBzvpGkR6CmRDHTC1NpcYXtBuvP87DuoFJ6vNP6R5RmTJR5NbV8MGcZf7F3XRzBwtJtGNuZYRu",
  "key18": "joxSSxMoCwJ3JwFJ6yrXA9h3sNo2jpBNvVugXjftzjiXCcgkh7XyWGVupfzF3fCw2S87DjMdc9UQoMwot8s19BX",
  "key19": "Uf3rYrthd9Wb38ua87RCX87PnXETJ3fHEjJoPDYMF77RWnHDT8bXQwMRAfvzGNFtr66KB5VUF3mdC5VwoiECWj7",
  "key20": "43KqzeYtDgsQYsxLBuFyypX5qHNT8obNwF3Xxi1cyEXucgot5kyXtr8aVzZcb3wYVV1j8iKvhzbKRh5McScbhdFG",
  "key21": "TpRsa3Mg8FaFXyyJQxguXwtNShztdy6w2fAo2vPWQvmewHcwzrPaqtMgNmSMzRSB2vHEHVqBdRvJGyAq8fMsp3g",
  "key22": "4cabiy6kSqDZgYU1RiL724VLBiMt914zB7ZktGc1ADepgcDTJrS9fYcj3zLP7WK541mmvAS9GytBrk8w43FcjPdC",
  "key23": "NfMm5SsCE91VJ5mwKqVGu4fpxpf7kD58VKcAnCzt36qSjddsdTV9YmCUZ7CK8bnksrTvG1q48DqCry4WEN2ewfL",
  "key24": "5qHAovK9NtoY7Mu4eie1V1RVxzPUtBxM9Xn8NaksbKPJUDt9K2zJKXmYH7QTerPWK5pAJCx8fc1ugSKxQbSy5qTu",
  "key25": "537TfYWHvV6S5gkW1byLYqB1AeAQpg1BhKfpfNcyDfhk7aKVpRyxS4Eh4ju9CCWNzXR1u7E1kBTZRCEQS4E3Exk5",
  "key26": "5UA4ZxpgQ61A3v1wYXcffuuHgX8Ls5t3vkdh421jfVKYXHBbutCnsSFSPqEqmNiY2i83fmmWBh2pN8LWPNVYzuNx",
  "key27": "5mCZMwo6V8723Y2UDojSEfRWJfYv7DmJLqmtA895yqiVCHpxzZkWukdeFC1CAEFouyiqQByhJrTDRcqR4zvXJSZZ",
  "key28": "XEfJWtxadKqwQeDFLJic5LfQUtBmSXm4EFGG9RFkB5iLzdJwPbX6fWP7fa6L2knRH1tA7z1po5eQULhvZwPSLqk",
  "key29": "33FiG5Ueu2iZo5hdxAVFFDdswT1KfPcK5FuJish8dGnFeTbQNG9yzquS3vHENukxRjAMFSD6ewT6G3HvmvSTqoDx",
  "key30": "4BXYAjWbf5VDjs5CdXWpPFnqHSxPE1TSSHytUF2tbfUhbd8gM2Gs5AJgKcNUPsWYvwjRPXpXk4cUBf1ixPM26CFK",
  "key31": "5rHtxfbkmybivgZR1WKf5XkhfBj9RPZaJm5c3GS9qMdEMtwrPbhg1QDLbUeDaxLrC3tMxK1iKuoQ7LtCBBvTw2Mk",
  "key32": "3pvZAydBLVLcgkQB3QSeCHXJpg4qTnfdujiD2jpRGvThdCT1VaXX1yyWz46ngftzZ4uqbQbSkf4XtYrAogxn4rbx",
  "key33": "67Cs17nWVzVKcjEmQ2fwxuoQgZYcyvxhswYRZc7PPVSfFyjujzwZZit1ckBuv1JNjUgEycsTuAkr3z8FQtSBZJde",
  "key34": "5s3FxdsNZhbQ7RhENirUjXpshdRpD3fEqJjGgG8ApBYdCsVkcsdD57ysmkGrYR4WRv3pJDHarHRNLbyFoxV9Nd3Y",
  "key35": "HyzFn8efR94XxytzqRPMHciTrQFEAEQfGjwSpNWafWRaQ6hyYvEurnByw1HKFBoqphvKtRUEh84jjZfd6sX8Bxh",
  "key36": "3JMto2eKotpfiUTxEWHM5jkTk8hGMYzN6hJ4yjHS2X2dmq6PvM8WrjXZvHXafa9AnN7A8DZkZ95FabA6QHnHLWMC",
  "key37": "KB2Ya1SrTRn4SvcPX3pcg2D8wLRLRCxcGtgFwAcbUwm1xxBga9QCk8quwFfenfB39oRFZN7wxbVes7q1voAqA4b",
  "key38": "3Z3xBYGCKM9c1iNa9TtBcT5P47uWhCjaEatiffXhsLzhE8jPbJyTjy8bVDjcwiwT2ahSx78UeGNc6NN1Laj7k5X4",
  "key39": "yWosgvt8uMMNRvNHeFmBv8n2aPfHk5y2vgWJXTSGVk3ms7EpM3aDEN2ug1eLm3wxFT7Q2rpuE24sXKNXNbdCp5y",
  "key40": "42oEf2kfPfEpsT8KL3NiDG2df8DRgdUPe8rygNJXHg7rgDgqTP1UyKJajB4nuDM66GvnKJtSiqm9BUKdnp7CFBBW",
  "key41": "Cm5vTNbKKB92QH2oMRCpyS8hPNwYTQtzxmNPiJYF3ME7esmJu8D9MRqYfwLgHHvo4TtZbS9EZZjirve86xxmeAv",
  "key42": "W8eWbdvg6HuakugrpEXHpuuPujdnXwpLcpnp54TghGS1Z5fqreXpt6RJBGpLwKV4TiG6zBqj43W7Umuxko7G3UJ",
  "key43": "642juiFA5ZNn7F4uv5zgKmZjiN5js3xxhBTLSoCeyA2pxCrijB1H5f6KtHXdbT7FreWSeQ1bFWNcw7Z66CgYnhVM",
  "key44": "3A7kJrWbif7gm5MyNcf4zhMt7xMYq6aT1kS5JX6NYXd2xAAxavitnwPRJS5yPCbVE9S2y6J6bQTH59ZpepKFg9RD",
  "key45": "2akA8UqEuKKDUqg2AXs5TDHjktr1nychkVMsVoPdEk4ZKehouovVcG1rgz7H4b6bWAc7CJPZ4c7KFRzHt9STDrfm",
  "key46": "rY8KhYbAszCxJDqQRgvcBBirWzKVvU59UxkAkpbQu42KnxC4DcHXVEodmnNe6bbdEJFqMZeoVAv9FaXTNtpSS4Y",
  "key47": "3bDu8GrPuzWzYUqM8MnsKbifiH3z7KGKYhv8QePSMgKeCKbacXiSuPxKdyt2sMWSGspR8N1Q5dXqHfectZpFsnVB"
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
