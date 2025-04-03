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
    "TNbdiYPUJ9pXujoNeoGKhzszh8Sf4egn5YfuJVztcKtM3Vz52ujCJQEQmqKUC8zC4fsKA87M1U9dGumgsQijT5p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51Zq7gZepEMyzVuZDja6XehsnCUt26DkphWXe43WWq1bUYp4XMzr6vnhLxTGWaQcco3PXAmzrPi2E1yeGQNkQfvJ",
  "key1": "44HyaGGPcsjMn9At9qwCTbseDaaTXG6dwg9MxpWS8VimX2RJn8DgpgBGY4zGsp1MJX2b3hyzjJGBK2Su95wXwTYJ",
  "key2": "63SgvSRWvtb6Fyho77R3pc1zqKrME2oWBb5KbovWZgGSfNVCky2cRgqE7VyikcvJmoSxZKHQaqNXF4guk4z2RAuc",
  "key3": "643Ezm8vmvB8XS7iJU8GKpYJsFn8ZGFVQgVf6MpoWcB1CrLGEHrQcwvH7SN1dhHvCWT9hbWuBvRu8QaNxWzB9jBR",
  "key4": "2rhJK7LfK7TGzXsBQ2cwqi8HJTkHgdaPdcYqLdppC2EAyTaSAYZYFw9HVUhiQV5yHgbTsDma9hUrscVt7Lt5kBpS",
  "key5": "4oeYSGhXnXBy8k4C9BnStaqjU357krgdWsBuMbyw7EiqP4UrLwwKwtuwNdJNajG2w1RzfFth3zvXtpfm8yaxEkuz",
  "key6": "22ATkLJfP24cZY1hNa5eUsx867m6Ww4aZwjVz2rfTTcPevQErViLTau5V8i8Zu2ZaRTh1MCDXqCFbpkz6CRyw3W1",
  "key7": "4WTH8frHjdWxExaEmpzyJZS84Y8yfNyEUwRYmMaui6T5612RsR46iiDebeeKRSEbLCnVEc5NaU3Xa5BC9DJ3oD2u",
  "key8": "5v1ZwtKdqgGrFD2x2Vds5XEeGvmhVgfzPnHR6woSi63mzJk77jjjyFLMexsZAMVQUXHUGdhMutmkyy1oZK2zubtt",
  "key9": "5meoUqpFFkU2XsAV6BZo9C3dPyXPW1fwm2FGqsuhJDp9kQyMdPBrkcFrf3tP9dqc5RkZmLSctPscST2UgfhnUguS",
  "key10": "3FNd6Egshuztk6nK31R3vSiYNG2o2PYpKK7V3NqR9M7GcvUx9QjwoXgWei1u4AbMvWLaWqyWd8MPx8KyuNWvCJND",
  "key11": "UUtTWgfgzRGqbFUhGy4hMu1cAoMTEBcZyRJh8UHjpB7o2LUi3Pin98iqMNvsceaLgVChKSCSjh14drvWUHXkP8Z",
  "key12": "5KGYuSNYjxLnnNKn8Ms5M2EVmRTSzBafwhVtrUn9VxH8FSfPi9ps9eYMzadATiWUAKu4Qmg6h1jF2zpBpUdyQUXT",
  "key13": "2uMY8NNpQJtKBtfieaBhTCUVsAsaLF24k4jGH4piPJevhqh1sEdZytoS2c2L6D4PbhGHes1MKp1wBYSJrmMHBRJN",
  "key14": "zSyky9GPf2getf5KKTeUmec6gy2JUcXhtShBHAEpMoYXVGSPhdEoPbYsoJnmGxe1etg3tAPwpnx3vuV5ZscDVAG",
  "key15": "4pTUVM6rUg8FUuaEfCRHFdWthhMTi9Jx7nc4raCWUddpojpQWhGV1F5V2K4gTBZeonP4zzJX4cYEQmLzHkFFSW31",
  "key16": "4iprF8QSWy4na834K9jDFRKRBZY5rFXficVSC8ZmAWQ1CrfUw15tfF9kiTEKviTFSZnZg9yyJEs5nm2UMWwoGCZR",
  "key17": "3ZMjEp4EgbLA7KTPdxeCE5eRRSZvcYzvwxNgpxjcQsyoFvWeyvrD1RgU2UHnFP8zgpqExd5VhsP2V67FHmkRTUeZ",
  "key18": "4KD9PVzVVizLV6yQwQDdxrUi6CJy9zrAK1TMHfUumgahEuNE54QFVQD32QjiaqpptJ4VohXCukdFKRB8Wx3j3ipZ",
  "key19": "32ikGdUJCqVWkL9ikfa4ny6LG2FuNJoZdFFXj6mX4zzgZYEpHb2e5zgtf13UScvdsSGSX5cP99eT6hSv7NAwd5ne",
  "key20": "3gc2iGcokzGSDLp3GQBhH6uVZ1ss4HYAYQEbF6bcb16jKQibgBYbEbJEiGGtDcr7Q7TW4PoweuQGt69JwAtGfVnh",
  "key21": "4LYfEauuZC1B5ufvm42vi1NHBFchRhsYK159Wm4fmnyq6nirN2KXQJiHbssKyUwZQDtHTf9XGDnuUbfu2d7RYDnt",
  "key22": "gtut5mwGMk6PkP63e1NSWsNF1e9mSafPB28uHN9fLhpZfadnhynY3Xfv8gMh2eqMqAtJem7rZtv66FBaVTmGLnY",
  "key23": "RfWWNJBGkdBaMYE3HjdawvafvyHhWvVMqi7wS3JWaxscwLhr4iR1iJGzqiC7JQYwCsvAG2vhCNeopjRD8UTTeos",
  "key24": "2KU2mvN3gQtKAS8zMvN7Meej1A6fTepGxXvjNdotogqoi48HzQj8PhFjbBa2edWVcBXHQJ836YQk7dmN1Ubq5pf1",
  "key25": "5gMATM4S1p5rzUMsgkuFwFDE5cVzFUp582B2AdXD7nV9K2fvLcU1w3Q1aZcCNukvU9g6Dxahtz8SNVP4kHreLwxb",
  "key26": "365dWZvCscLqR4wazXvSq8PDy255jzsozcFjtUPB52VKDN2JTwYKjyD9FzPTw5q62iT6Wq7UcCwKAiMASsif5dY",
  "key27": "5C1yvZfcp245HF9N3yi41FMku8yWRAXWBxaU5PuZVchm7gzDKgSLasiWpRsBNdDU7AGeZra5r2itVfVhQ1L9npRp",
  "key28": "57sGzx3wFjiWP7o9rv4mZ8Jk9pfUs2xRBvAFz4M4hkjmvtpsXQDE95cJHZh8cDgqwVfRVu7sGCAgQwnkSc81rzgE",
  "key29": "5xfhzZf5LwPNXzLWDD9i7R7ZKcDyRWERYWzR2FnVGvj1RZ331UeqYZQNf7VudrjDeR2CencwWqZakjtCq9wC6aSS",
  "key30": "4snbJrTJLkWf3qDqXD2bRkJkQi1qXCbExvXQJrGL16etFDDmbtvcvXEfv4UmtTLQfDRxdiGsyqmmqD1okrciAd83",
  "key31": "5Syav3CCSRWaSHxisPj3QKSxVbJd8Jc5PNXB2bijjDCjUeSEM7m9EM5ST9eLtYbAovsxWDrws46FYmBKSHv8wwyG",
  "key32": "5eVvb85PdhiDDJpXtufRZYwsyXmHgmjJufBzWbXgQC4VjXAxtJx5XyRWjPYmFggWc6GxsX7Tks5n19QBYBMquqmW",
  "key33": "2Rwzm8cD3c1MaZHc6Z5McqQnjAC95pHwb9VZiNgjARynLQkCcEcDn1rykinxWZst8U8fEQCXava91Ja7gFvz4PTB",
  "key34": "4Tupd9xAcPnQ4hZzQeRhpMhYVspSgGnS7SYWSPxV9dffHKd6W7JjBR867P3nduK4hexdRFzh1fToA94tabJgGQBb",
  "key35": "5bcjpFd7fWtuGEb9u6EofbscFtAg5jtPbRsT8ckm9Uqcq3rm5wMf6A7BPrsjYcBfG2GW1QjPqeEebBevQsKNTNqX",
  "key36": "5zus146gkEU5k6EpBiHmtb6w1RZznyxDJ8qnyxm9hNNr21nu6ExU6bjjXLx7hWwK2ZUpuAYCc25SmwGN6Lo62Tbi",
  "key37": "yNoKBRAxAx4bfQ8qXGThWnSoLprhpwrP3yjazssHUJsDthqUJTqESzqx3SoMiGinaEJhdK2W3becofugMdXC27y",
  "key38": "438H4ei9KkL98ZtvmoNxftRxsJwk95aepzpygBTZpitLFxwwwh5kLvfV3LC2EX72nDgSv2MgXwjUX1wEXfRTobaT",
  "key39": "3gwqZgyn7xUEC3SRh2KrMgMehfVk4v62fwo4zsyidNoWL3uw4wpespk7kXST3x2xV8fRwLx6hgg72TAKD6Dj5oRq",
  "key40": "Ju8272jPqGroZr52i9Tp47XmmginZcwKTdX1rPeChaKmVdhn1MuGSBVEQVjparEK66jaN6bo2pJNoqWbme5qTSB",
  "key41": "2nT6FWCCLRuLr3ptVmquochucjEqGZQTY6GZw7cou7DeNDw43CwLfTw2jATvQbSjXbduCG3BSgpi1NtraazcKQoN"
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
