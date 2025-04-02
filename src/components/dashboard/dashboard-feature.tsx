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
    "25Zxc5WoXzFMHrR98DBDYhyPpzB2JSNwJ9v7ffHLaM3Wn5TwRVKGZKVcN686fR5FrkqZLaF8HWTyzBBP2iaTGek7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CPbGJJcoeARe3AB1LKhFyKi1j8k8ZrMVbd8jiPVf4gTC9wWk2a4Mz893NBWJuM1jJdLwXtCJiyjAwD8KaLWGQvx",
  "key1": "vWRBKASaNff5n8PWApMVYSSmVJfMdUuzv7q38JCG5MBzHaBbEYiCCwDW1kWbVFHcpQs722D28J4gcU8mu2tpGSy",
  "key2": "2afuX9ByPVsKq4cAzeFfoUn9Vzce1oYpMdDQZb5sRFQCUBqo6tuBa6e4DQNFDdDRjdMuaspsSvNGVhD4QYssQ9nb",
  "key3": "2FPxPN1at7iJRenvQiV4MwdvfmqTTNZcpJLywsmZzcx7hsRCteThSMxGWefzr3CJB32NwbgCVzEWKAVnnH222sHh",
  "key4": "YH8GASLNr4asDNJhJ6oxje2ZoJYjuQCaDKR5QUacEnR3sddWwD9ezwcqRufunoaRkUzY2YsjVnsEaNBmn6z52NV",
  "key5": "31azDnNpS2XJnzRsCCgP4Szs9TVggkQWG1rcRuUMfuUj8WSrGp5o75pjpU7UjsdxW3eCFJgJzm72uy6D52KjxtHo",
  "key6": "2NSCpLcfW9M9auqqYYmKZhWej92zh5zoVZQE1rTM84UhpanAMx6XZVH5JgG2p6unP4uUiiQrzDykn537v5Fzzw9p",
  "key7": "2aPgHaopLuUhKoEF95kx1q9v8hqhGGfeuoiymdGK87RyfKbst6SPQBUTfGdd4HBJwGojrfWg5uQneCrYsN1Cvw59",
  "key8": "2kUj53g25dLNy1Sjqi9NvGjfHHcCxB3HAKNG6M31pCrQE76jWduDA4JnupXwrWacPmSLCnBW77sGTcvceQsfKUK",
  "key9": "2tEsRq2uQNZrYiLHMkPQRWaeYbAkCHY1dxaqELFscwaBdYCY9cAgJpKBAt4ZhssZ7RB8StB1cCs7oLAXyR5VnBG3",
  "key10": "5J1FUcVpUkxd7mNwC4VoWjwG9xocjG5S44k7N8M1oMfs3WFdYVKXrXXdzQPXBcnKKdfGE8WNVnsBzfu3HC3dcmLK",
  "key11": "5DkbW7fqfK7Nf5kPSA2LHjiwbhu7tmYEsdeGNtypatCus3teX4CT4ccDf8D89diWnNSo2Z74Pi53pNCosUckNwTy",
  "key12": "3RAZyadmFKESFfipi7Jvc8hDwmLYmNjvR8mwKsZzqiq72d2zX6LatA7kycNUENGBiAhVzdQuqcCh8d8DUXia4mFh",
  "key13": "67qkFwGcLfdqa8FLRT2LhCYtz6fTddmLHHECqVvSueTwEPdWtkxr9TmgtNjsUcbTxG974V3tvxxT1LgFuxegUFJ7",
  "key14": "35BfRandzBJA4AJekE3tNJLcsYFodYNNrN5hcR2N4J3rtBp31CeLePPWp25PfQ4pTrWyvsdLBRmshMYpzNSwbegF",
  "key15": "2un9JRHoKjgsSPNC7kyDZ5VaxKaB4y3mLuZnWuWap9eQpF5vnDDAFFzfernLvvFvkfwHhHrQQU3Vi6xBqd8dfhPh",
  "key16": "2cN4XnFj9R4GdRHzjcYCR6Z7ngT3zRXSPgLVkE2gHswmRYB7sNghAzVoYY7zxaQspS31DyisezwSMREWPBkB8KdF",
  "key17": "52HPr85KsW3Z2soyVwvqsMKbLc47mazBvWXCLQRKSVLJjzDiBSRdpQLdvVx3yfVQip8DWD2SquJfE8QB89t9iU1v",
  "key18": "37WUDsyRwxUeqrGhx3EDKaXWMjPXpQTf7cu31wTM1iJEv5TZvzpyrPVt4qBsH3khr4dkeD5kvwnzb7amXh1wLorw",
  "key19": "5HM5occT5XFokhRNXVSYaApwssnAqkQPBiyDpC8nQLR9QKgV2YKgaWPujBKuEZtWgAabbSN1W7ZjCoCEJ9NiYpTH",
  "key20": "5CnjKBKmCmeiLJXBw4T6ByjT7kNQXWrMGeXUXioud3Awrcakh63RUM27urLz97eDqVBgRJvKLas1cZ77gzaEWvzu",
  "key21": "5RC3vcTvziVXryHDDmR25dUvETTJ5PkLQzxQ8vJjqT2GDiADxqVSFtjRf89wQAjDGeez7NwjuCfJids4JCj9Jm6D",
  "key22": "55tB55KMGXe5cnmRMZesCyDyHLAJCEsDEoWi11BFs2RSPxxHDbmn7tEKvoy1irm6AXCR5AzE173U7a6jWBuMAm7d",
  "key23": "4joDRHFrfNN8CHvJt718KRAybe1nyVVPWHif8RADxT4qyenSWSVGzFN8HAqpmThmanTebgeaq3Cu5GkBD1spNM5D",
  "key24": "b6NBDA52o7P2QYtcmGVDbVG3HPTLQQLLjJgZNpeLWtRWGENnGnp9SAwHGGsvqD7d3bhrcHRdoY7XwcpJrKnBn3a",
  "key25": "5oSiJeDnEzZgpsaWjhtUVhQe6dwJ2ZUSMhLec8DtWSSnV9PkqPmtjvSxQWdY9qKts76bBgUVDFf2ks1yqVCiDs2u",
  "key26": "h25sWvFZ8eYqSpWbdKSYSaCRLEwB6Ke5THBSEmnvRpMJiRWM5nQ36JqswtFxJ6XJpKy9gU3YU4qyTifsPYyUwP4",
  "key27": "2ETPhM43bA419mNZoP7PVhpNqPfATBWyWvJHeEHPR2i2z8Ums1Jr8Fua7KNiKC6rsicAq2gLv4FCuji8xnPRt7a9",
  "key28": "5suJHsPQmotCfUN2FE5d9EEFfiokevggG1eo6ikB5BYQTgXoW3reDABPVzwUPRTMsm2DHsnuHxqbXmhiErfy4kXw",
  "key29": "yb4A52HhtZsLLznce4aZG8wCMsTeV2p7PUGojod6YXfQeUbFYgC1xkCwQeSRHaD6ziXGfe2eHXZkNsFG4szG26Y",
  "key30": "3KJEgwNLwujEykHDPwy9Saub5j2kdWYbPfQaiKGvYWxCfTbP9fomVxqQwTR5odv4xbX4NyM3RkYcmvJ1jhKY3Wzg",
  "key31": "3xcMST6LAZdipvF5HUhvRmudbkR34SmVsf5YmFSs4FgkJSbTt4TQb1uiMUFUemk5tREynt4ReAHeKcPsenYSRQRn",
  "key32": "DecBXg6H7kUhgHeuckjMKPjFdjvPzFikP2KmeevmtAzQRVZgCfeJmkKLyHLiGRgeFBJaker5cvcspE4j2jh96TQ",
  "key33": "2jS8dFBAdWomDa6hciJcruJkYfYXuCPj3uEVs3RodUpkshxMEzNBGdPXXioAaGNwmgkiJhUP4y6BsWYHGWvd4hWp",
  "key34": "25bQD1PPCggYTeUcemXTEGfTVMEt78TUfbYCaWcsEXopN3mDPidfgQKJoGdSCgork6YG4oWtDCQsknYDk74wFfpM",
  "key35": "2qPYpTWtXja3fMW7CUbUGDWEEMs5wRwkGwfQzn37wGmzzLgpUduyNMBjdfd9oSH7qFJBiaBUQVH7UhG5rvPMycob",
  "key36": "5X2Y1Uv1oZZ2Z77MjFwYLZurNqhrguVL5VAZWwyZSi469DUY4vYrhaLqrfZ1hdfbcnTRab38K2XTKm1pJ89MGqzG",
  "key37": "4WDWBXTdPACYUCYHeZefybwzp3dwzcq8AhyZ6wfYXrX1r4hmTDPTKA8vcrAARQJnmJoz7DPrFND58o4vZER7drr8",
  "key38": "5LthV52GqhbBFZBFjFTwvTZFUras7V1ciFd93FqKZevnYr2ZWd1RFtzoBjGtnTYZmdoy2iNjmXokvpn28br9xLkn",
  "key39": "2Trbq7iQijhXUZJBCBBqkm2fHp676ZMKsZPKJshBcmsHtFFaccMFfBZaWepoDxRcTUG71DxtdaKA8Jvwn3nQmVwr",
  "key40": "4ztJiGxDUTRjC7Y3Ya1fLC2ApeYmRP1JHeVih17LrGFZX8vitp9mSr9hk9FxTtLs5CfyVMauJBGoSoBUW1TToz7x",
  "key41": "64UZjC77XF8mYpywztTnzv5F6rSzTDVzogjF5YFu9xnWj5i9aqECTWmAa6yxEupA6i1XuMsaYJ5aAzZhWS7xq4Ek",
  "key42": "KtDMwtq6P26Qdb4NvXJfrtz5cg79fDLjNzTyWmCR2CE5VWof1rddUJBSRLeiM3GzMya4cs9bdyBU13KcoNnQuZj",
  "key43": "4H3UTCpU9dC2uXpUFfcMigsBhUcpyEqk5yyz1AMbb1nRcdBypASMc2jAuepcq6w9tw67EML3yVBeFBcuEwLTRhXf",
  "key44": "3Ev8xR91D6xsNMuPv9igtUQmz7W8FqCDwbLGtG9H9zwt3RYn2A2EWrjZRNuRqiJoYeZJwHrnZoaNoGVTdRP4FgGh",
  "key45": "5w2DanwSwMx8UjZtNSmQVW7WEhopFNHK39ZkYeyV74ceP4CXS2dhfjLc3Z2XsZRauQaSLdcJMLY57i5U4CGx9ni5",
  "key46": "3hpAJJNAqfiFEfej4UKGWDEb8gDF5vggxNBszJrVpsTvP8KuNrbZ3hyMm25HpwpA5NjQtQntbHAGdd1UyNwhm537",
  "key47": "5JMfKnuKKLd7VYCsVhdc5QhPKhvP1qKRVwYuP56qhtxVpbV4pvnmcTJ9zHi1soDw4FQLmPSkSa7JL2Nx4t6XJbhL",
  "key48": "5sFWXKq6KB7BjtPxVSQfPvkuq5hYiLsLYUkwmjRn3mCywEafSF45Y9wBReiaTrLNNG4wfBJRAGrpLgLsyh59NdxV",
  "key49": "bTwMiaGf9xss18P3Lin8JuYySBtiamfeNJCoJ1iEfoSV97r1qYGoRjvVmuXAC3qwKEWTBuu3ehtPoRZXz1SuLnE"
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
