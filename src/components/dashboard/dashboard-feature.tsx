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
    "3jvQkiN2pA4iZnY333xvU4F2T3zLP5RSvxNNzv7TYVA4g8yGsVA9u7iXkSP3ioboW3V9ScXWpoL192ZURb8Rvsj6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "436Lgb2yBHRG1rtK1pkcXoJoBxqpnsQcy2zLnNc1qSn55ZSQEYwQNqRFCRkUDb7EnmaZvruKWGSc79RwuB4Y96vV",
  "key1": "5rEk28MMK57i5fsnLCHnrK9EYd5DKvZRV1Ax1mtSHZpEABzzQBcNSZGY1uHgr8vkWYN6QSD476qv5U6zdgdQ72np",
  "key2": "5bWd8fky7j4HxGZHhUr1QPoLfGuE58z2qHCmJjogcEMuGCNeaXrWhTDg6ffeYPniRracfmh37wDfog85s2WTT1Y7",
  "key3": "5ojfokUQVm8P8yHKhCUrzV7Vhw1EpqQXhSheakkVJogUZ1DEEaQRiZkafU6K4SnW8Tmj4erRFU5bAsyQuyxu55xV",
  "key4": "5cXWsaUUPXEDMxJRa7zQ51EMmZhpSHsHfTZqDVr4RE1ZhneiZrj57RWdFPRLmp4RSkHqELM8ag3WRVRgWhnyVCPo",
  "key5": "5PEYW7ke5NBPwXfHPDHVQ875rQwvdTL1eBVDUHdS5gpFB9fJhDHDdU5kiRJpgU6c4QTVebfqLMFtQsD2cm47p894",
  "key6": "5pokTCQ6S2fVcdJ9CLcHdoUndUxseoKkQRKyMZZ5B4eMD9rZkoh9Kt96SHKXoDCjGifXdenDQ82BzKe22YMfSWZz",
  "key7": "CfbUS5qLRmtYfUKPQTR9pyozFcVXohLnFChDUXmX79kz5sCNE5V9i4JK2XcCKysgiAFFB8Tpr5y611vjF4D941J",
  "key8": "3iQrnrdhrWYeyFax7ewS48kWZfKtjk34dgZ9BLFGjsw8Mk27vS3jVSHXCmUJZAqwEFJCRP4nSakYrGFYmVhh1FcK",
  "key9": "2FhEqvzSAdyKSomtLxW3Xy96EjynrtzdLk8okFnSzUF2HwmbDNa7zaSEGw6Ec5z9v7FXVU119gmmBFobjchs6e3E",
  "key10": "3N1vwnXeVitQHXkpSHbHajnEvCop7JjAj7xqcPwtBaEcvUNKwcfYVu8n8GF2x74k6QJosY5Qo1BcMkVZAGmy9L4W",
  "key11": "29ZS8xRgECxRbsUs2FsKYxK2YqccCMeLoDMenG9jaT9R3EEoZzFGNro6Rqyg2NmbP2ABkBEeVUMwdo4qvPPfv8A8",
  "key12": "oxrXGstAdKaEW6AN8xU2TiNNy33i9ZgaCeqC7SXvuaaptMsPwLJj8vEcuvzHBMjda3wdmgrf5z4G5ra9sUcTo7T",
  "key13": "23rWV9JN9YaJ6WzLrN9H3B229DrHzESLV1iSbjBz78bvcVXazBFMSw1udDXZ7iG7JyhrTVKUdD4UgJr2ATuYxqkf",
  "key14": "ZirB3CC5xbfNmFjR79me3ZFmWFUX15FLLzyLqyu52QVd4zELwASJmr8HiiRvTjSSCQP6EW2Ybcp64Xs6moUMejw",
  "key15": "5jgbtt71Tzh2M7gZpnTDunHHPD2KmQrV6ji7DE4Czd2so66FMXk2ng5PV9bQtXGw9Nx6otXwxttHXwtVfiq1jBZ",
  "key16": "5379My1ngn4BrSkTCFecr7oyXat3iUUanbUkDLpAQqnv9XjRZxSFrcdCuft222AHrr7wG7HVfcs8QkBvoqwNx45t",
  "key17": "3heKjcp98BNUyv6uDwPaNCqALx4bahYbF5AvgpbHJrr2Ehgx8rjt3VBNRtLca8oe5LDH1ZGq7bX1HYhKJs2DY8MB",
  "key18": "42dq5quMkwH4iVKongq59oBYy5wu2LTpj86Cw2381urMiyJWtUoGEHHAoLAU2XkzTAZGz8R6DcKViL8XypBKkTcv",
  "key19": "5o2zsyNM5VeWUL8rccoAJ6AAxxX8jsk1z3E4PabcS1eFpNKr6mAJg78Hc9YAn17WsSk8wJaxFZueHuqbZJmJoqSU",
  "key20": "2Nq1Xqk5eH7i3hNcEUHhPnNWMWwfkroso3r9tZJTKWhzFrwpqnh5QV56YVRQkHYZG76rNroeUf6iydRiitT2r1yy",
  "key21": "EGn6SXRb5yczx57wDbiNBhjnLWGivh6bBP1k2sgi2aCuT75axhsU4EB9kjHbJZu2ZsRs4gkHzurwoXBi48GytxN",
  "key22": "4ip2EgAgkdZmvfB9aebA5w6QNs3HJyNdbaG3UobZnRdS4dgLRAKNMLd1KkvDtJoSzmXuvaouxWh5FdvuYNjaesDF",
  "key23": "27hNsUixW92nYXVWFZeT93YZ37LnnQBH3mMaKWFJ6GJPDdExie7V6GhQBWUCvpkesF2UneUk186XZMaG4XdK7bEm",
  "key24": "5ZPYJzGtMvNaGYVPfSFhMreFQ5efwxxnAyN7hcVsgA35TEc1PzBXScDxBduD32iGEufyv4YD7Z1wK7y6gbdV6ppX",
  "key25": "5iyFmUHihcgaWjmzB39c35hEgDPPV5eYsEMib3CGwinhWZdSGdxfJ9kNdEcDxWhWiUtj8XmDNZEu5jj9YJyeUKTn",
  "key26": "r4eH1y3Avw7SxMS3KXU7jj89yxnQshaTUD1kCEPWkXySePwYsb3aNjcooHWoi1yEWbMpcvmvX75MMiL9Mztrpkk",
  "key27": "4iyzkztR9xYpukrJQNWEeBorthuWfPU2gfb5TeMo57gXXbtCH3zxMnwEbWncbMSMhLnPiBm8zNtfaM2ZNQY6LqSY",
  "key28": "Sby7U9ibtzcc4VEwZotiyDigByF3EeESZS6HNkMNuacrqDddHs7FYtZU6j6xaBt4zJ85k61k4AUAg2YmtpmUQvg",
  "key29": "4KYJkGyUqsLsw98iA5g5ECjWoiPJ3x28x5ND5zXDX81CzJCDS88dK6UA9y59wJnWqqCBajLnQ55aM6BcgVjGoWj2",
  "key30": "2nRykbc9kL8GrjdRXZVxHRpQGZ78ERTXEpnKnLM8wsPAwGXqCm9M9tbrvqfn1EN6rRoxZsA6DTCa1HgLTPuqN4hn",
  "key31": "pnRWGsX99D8XxA7VB74XtYN55rgZJo2vZYRWyWbmKghUGrqnvEzwf2onmmSd2WeQyPHzSuwqjzSEnCgxzqSZYuG",
  "key32": "4JAKXXDwYbhhntaEYUShXLpDakeeyWuXosG3dMPd8CyUhhStjJp4HUSjqVw8doiP8TZK2anEZCWRmAA5mFW9RWEG",
  "key33": "2VkAv3QFKY9NU8xktiupjfB8dacHqwV8dEM1932dPVUCjhtx6iGDtGB78SKgW1fBnAQxAW6B3GwtDGxbnvX48pGa",
  "key34": "thy4Ce8uoCE1GjK7JRJHH4hbRKNXJPCngD6JjyxkP4UjYScT3a5Kn9G6pNR2pDJrXuJVPVtXGUJ8a8VyPavJBhJ",
  "key35": "5cz8BnhhZDXKJvKaGFUXYjBPo5sA2o5XHUk6nKBUmspzDao6A2za5fSYmyvEw29RRyoocvaffJweUa9B8VMhcSrG",
  "key36": "3syPfoh2ztz1orSaEGrNvrZ5aw5E5TEWXHvJZbjS9xCwBDHgAJY79MNPBUQWufXeUDH5im2gdQMXUQ2xU9viUURh",
  "key37": "3XMFpNGeeL9dsFnob4cfpB64MZjkmYNDAJTKwSWp32TqRaGfLESgU4Tje2qu349UpDvxJT63eUyLZejf6XmCh2Zq",
  "key38": "3cZXpdt3mLNRu1GyPdbHWTEhuh1dnW3rzKkAZWFqG3bPmov8QmfaksLTHEowZYSEwDJpEU4QmZRE38qc8cpPeYpT",
  "key39": "4F2LCe91P2kucvjB3j9hXxsF6ssKLCZzRi5tqTKCpTkUH3PoaRLHUWdr2kPt3t2PBQBBwLp2bXt79JSCZ4ZWbA5e",
  "key40": "3hzAsChAiaDn4CrAsNTd9Z2mATAAqYbe4j8qJrygcdPat4Sz2Hx4xCvnBFFkfrkQDh2GVdb7r4xUnmq71Po4Qbrx",
  "key41": "BJMzCdmkzdiYa3iXCuA81GHBw5sosPEB3kJwdDZ3vVBqdZL9FrS4TEY6zuWvSae8HpC9DMA6hRY77KUJXLk65QQ",
  "key42": "5i8Wa8a94a97S74opgMEj1cCyBe82SmptAwqboRksstzYZUUTZ9kfPZKetoW9r6BcNktwPGBMFawM277BGg6njcs",
  "key43": "3YCG6fEP8Yp4rH2GaNH43i4SnUKbsU1huTrYstwSvJAFSzvbJynvt98ypA26uvH1GP7H9CT2yrUFZfxukuXfRzyt"
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
