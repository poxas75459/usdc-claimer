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
    "5FuEmAw3taupEBJDhwkpBtgttCAfUqrrptbXnHqcrnFzxNTZ1pMG8gdtxYXYnTpSDcreGCNXAWYAP9Dm1zgQavBZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cwVBTw6YQpnWM4mDW2y5XaYPgW6P2oBJm7atzEtN46SF8fm1VCCupGR4WTJCgSCSwy9vT8b9Wo675XKMjdaftT9",
  "key1": "3nqaDMhH433ShYhMzqiLSZ4AYKiCNACteS2vBgPSSztT17R4KyuZuM5kTEcj1Rb718mjRwtacPS3d1DSbmCajKzp",
  "key2": "4tn4CrvPto6392coiZTzawYYs5grYkGY6v3c9VmYZ7vG8SmTg482fMcM3Ym6XPJwNxqVhfMiYkUAxCCUDdykVcAT",
  "key3": "QAxZ9hz1vnK5Q1Nd8fi8hbChUkbo2tnfmUN6BsrF5vfcABrZgjMMbQQ6KNezxTiMmLEkdgJhx7j9cEspXS6VED7",
  "key4": "3w9rD3ACzkXq1QDKkQAA5CVcu64RSQtf3L8dvYhihuet1qH7DzJertrHJKsihACyJyV1gumxyWtTvH3JnAN5cjVR",
  "key5": "3mE2HiZT4sdWrX2D8G5A5s4J9dQEZGdkymjbWDij8m3uZviV1yLFCXvzZHcVwk2Tq4NdonNweLV5E5oErjg9hji",
  "key6": "dykr4egCJ9e7ECBb5rQhUsqS5z5weryZwVDaCwfSWDo46BEZoKxQgahgGh9VZ8L9akMZjxpfw5qzbxQsdMZK8JW",
  "key7": "3EYmLRDGqmfq3251U1EK2ZPt45agYAkbeZTHfNyW82x3Gt6EXtbeHK3LsyvRc1Ja42BhEV36w4Sa1C8orV7AtEVN",
  "key8": "5pa7pU4krA7eKj7egZNCA4VunqjasL49LNHAcVjsh2QWA59JxDwWLHHKaFR4SgvymjnADBEEeGrnZeRc6WgicDgy",
  "key9": "WPWGRbihcBtcNtUuMavH8sbzo3JmorhwvXRrXvLJzrJBUSuuQ4TWrhNbB4YzDq47jzAreRUjdDzwMqDw2cPcBSt",
  "key10": "2ajak6QzgUM7hFD96NvXdiqdPgNE4aEpPEziDnHGnSQDkghPdM7iLxZTcrSeRqFyUdnJG8XJE76xZSU61syCcGvc",
  "key11": "4jsNgfWrGt2YTNPeXEdrv5ZKviA2CM9oNwgzTssNJt4ub5JfbW45MBAux3htPKbMGrecSidrfRUbpgZECa67Vzyc",
  "key12": "kh4AbBPvFdRJ1ihqfawajVkc88Eue1by2dPAtr3jPYoP5ayn9kChcufoymq6yYX6NkiWiVVAYtqfkmfgnnMoVF3",
  "key13": "4bN9DhZwDMwisvLYvTtHPfsbMDBDUr6fkePiUSkjRXKFMPtKr1WCqcFX8njBMrh7KrrUih921qnYqrjexD46wrp7",
  "key14": "4cspDrDjytFrfLX6jY9cRY6dDxzpocCmyjCSYdTpZKtu7z9ac5zRxP9qJC2hsAsmfUrvFVLyU4gjNaTdZYFUeRSR",
  "key15": "5zuwzpR5A1eNNeSkeadSEbiq7zyzu2twG4fyXQgrt463agty76yMiS1cSteHbEnY4YZhwj9j9kp4iRGYsR5C99Xq",
  "key16": "26jK1MZthn6i5DGH4cHWGsHXREyVXi8YPgQv2pEynNEsK5dJyHo5MqpJc67e38bAunSsCxjgE7aswsSVrafr1b2a",
  "key17": "5roW15FKkGgVF9VVV6rGSqN1o2FxcYG4cW8iyuc9iHrbd9FGpeMJ4M4cu4TUt57u9nWTjBdgrubfsVckmqr5FeWD",
  "key18": "5QWTsEqKVsMuStxFwAfJ7m8ZDVKPnMxzZ1nJdGvrLXGrPdVG7HMXtASZRtQ9h27rcD3vvq5GovS7fUUsDJ1aTDoL",
  "key19": "5hPn7RLEYmJYMMoLATDjME3vLNh74nb8ZPEQH26w3kKHqjKcqPFAFnfgjRBDSqDjgxoxBdYLX2BMvpw23CZzdpfe",
  "key20": "M2g6Py5cBzterTw1MmKQdBxn6LywPk6grNGJD6eQYaiwYaAu43jTfsfdrzUhQREbiNuevADDfFfT6UzfPFf9dk2",
  "key21": "5pmerzVe4M7S2qDp35tRNfH96bGjxfCx51iuKTZmoEg5EVDxzJRquSkyHLyDvSkkCRSSwNUVdVfyAViaqiqhYETi",
  "key22": "2286ymeke4Jny96dgewikGXkWFuJvixGAxcEgsYjqhpastNMp116xGToYEGu7yKpg1RNzfMjjKgtemwQSuBP1GWC",
  "key23": "3jeEkbUKapzMKw8s2VLJUajHmu8ZkcMXWeMmh1HNPwZUK8EtFCBStv4aS3HKzX5mjfSvfaSk6a6jBuGciBj4mLha",
  "key24": "3GhtYdXX4iwRQxdjLGUwbBQ5qMNLUj53aEQmYuN7rn9PXGqKL4CpQtCxL6hiusLWawauP9xJcbvJW6dkiHYDbzJw",
  "key25": "5svgogecZCGEBnjmmuPai3puNkszMpMWCs4kExX8Zuny8zZAGSSh9LfV63AQV7y7W7Au3vCJTf6sCgxED2gq2mRk",
  "key26": "5Y1j9QvZs9m5B6yomfqDGVJfVEgb7pRwECp5FjkZmArf5AbWMYZu5TFYiVBcPTvc6uE2rzDtniWcGdAzz7mxPsHy",
  "key27": "2iKJ23YfUEcn6YvitnSUrSnjyZaJrrJsEmJ1WZaurzhbLvFaRBbscKEKKNtQRM3hG6vh5infJBDs6y9CuPdD6rJc",
  "key28": "5APrMYgHa6zXSqMs4xo1VcZPAFumZgepUa3tXzCMb4mhxvPHh8o2sWeLuZasRuNqeNKNYHaWK4LyaQyvqiUNbShD",
  "key29": "3feCKFoBRg5t2RQkQ78Srz9qbkGuc5ErvFXDEihCV4CE4nh26NT59UXZxDtZA4ERWhrph5HhkEBd7C737tcnMjnn",
  "key30": "dg1vajtDvoKJLMJQpn9HLdB9XPVwRaeTaDp3yw6fAc27CnnnBX3x3zN38VhT6ftDgwHWJRAehcWcVDeMbk8NddJ",
  "key31": "3B98idn69vZvixko1tPDDE4XN2EQvUyvWuRmNnVo5RhF6W2QT9SjdDBtYrypftd18CHrLV4d6NKXmdpK8p3bcr2p",
  "key32": "4C8FxvxLxyxixTQ59aS2pM4m51QL72BsTvD7ozEMW9Y28VM4Ccxx1tMVXUtjsMBahLVmtuTF3aAdEMaXaaaL8ckk",
  "key33": "67ZVKdBBVA6DKEQSfJPyDjsQniHoMup6xGfNQR8K65HoSPvufqnBaQ3vPy9rr1T2qTsxMUHVkdyzF14tVNJ7Ywhq",
  "key34": "3tPcMVQXGNp5MNgUaoLhnvtb8ABsMitgWVfpPhe1b4KwYSRTccUKhAEstdxnnkZisZiYAhP65uUtWWS4jqz3hX3p",
  "key35": "2CfU3VT1qY8jtds2o9b7nojhytovjKgAxHeaoP9rZSkaGykuN4euSaKfB8mSFoQko26yFpX4MzoP3BvpXiKmiuHb",
  "key36": "4keWTkMPx7VyPpWpG9sf4o3U92rqY9cbSPAHBJgn6jvyRf1tUYQH2cA49SWTm2QG9iTxv8QmKPwz8TtpGDVk1s7A",
  "key37": "4D6JXh7G2SAK1kqumMU9hUmr43576NGgTnsQLLQDHZe6BX5QZ9yJUg9vRkkAKFMRtPdqnhCWmmSfKkw9wUainv2Y",
  "key38": "3oLHtfweMZkXYYNgUnM2Y76fGjN3wsdwjSfBqNyRx3LUxeiaxMnESttEJzzD6kAi7FsVdKLEjYXjsyhh3BrpZ4XT",
  "key39": "5gHYtW9DahWermHHjyVQtXFK87dZ6PBdfU1E8BZzcpzsd3QnPVzPs8pHvvbQqHRimtYYey8na7xxeCME6dptWXLm",
  "key40": "Wp7Ewq5UfrWUERkN7iJ5Wg88ge1Ak7xMtMm6nQK5a1MPQp2B7Zp982fnsR9vcwm6R5fpwGhUqR42rF99dZRqpyX",
  "key41": "4rHEUt9EYssM6spKZxCGD5AFq38mxUFxLACFk3w7gKjLoCHME3Z865ckcUWnDX7dWcfwjefMo79saXmfJAtS3sKt",
  "key42": "66GHFsM7FGYKMgDCjq8QYyvoUmdCja2q4ozfhYKmiUUfVs3SFpwnQQXcTVo2mMLDQzZDBwiLDG7JDFP7g2YH74Tb",
  "key43": "4GqR8AjrtNxtGtPenETqGjfyRh1KECGwVA9D9bW2eUxJa4CQYvnvKaPB53X3oiyH1c84aSSSKNJXftzpn7n8k4ZP",
  "key44": "3mAKQubFVNgYyQarVN2VXMWXfvAaTRjw95qFn4p4KdkqRPuYJudFZsf4PubzLVqY5ep6uD9BgD8cjXA3fuhSQnzc",
  "key45": "oeu1kdh5kk12E8ffe4T9vosCa5XyU1rD7fJnYAYVPvpswRGSADxzwEBQGLcsQ9Qnrwj4aEuWkbMdQn1YsQ9sCSH",
  "key46": "47eXVFHPmh2bNWYFupYDsefgnAkLNaxsz8wxKnLHjcoT4o31kbEosHrzj2UX8Hb7Z6oMMPAwYiEdZ2PDNsN82W9n"
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
