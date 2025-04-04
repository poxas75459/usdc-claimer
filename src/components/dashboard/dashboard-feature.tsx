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
    "3J5xbFt9aMJQovNeM2wyjse1xtiSXSHfPaimZwavUq1W4Br4mSCJLdNgiv9b8oxF87QdaK6CyENFwTUkEMozkaQt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FGmNbWd4FPGemwi3UvK85m36EAMgTXxmJgJqbXMcRZgW1pSMv4B9VxpojUgBN1SC6xX9SpSBCmsqn5PxGjUQJuy",
  "key1": "3ufnZ2Bo6dcVgucYCLiWPDg7yqJQwdEdJN6kBynoDB746r1KJPSdAjmsS8isMSfi8F6DHFNnJ2s4pYMf5K1AJj4A",
  "key2": "3PmvoxTYLpRnmu4ao4PuBT1DthYAwnpvYup9sqVUcF2xCWgvfXdkhvVRnmcRJFyjyVJ6Sqy5pePEdCMM8NHyQxPs",
  "key3": "QpNhNyxKwfh4818QTqYGPPV4rD2p8oDuR4tVLADya4TEQ2cS3BUZaEJP38qDZzpxisLZp5qj7w8mmPyEqEfr6E3",
  "key4": "3WZmEBeUgUDfdPW4LrrebatMpVNcr3QhdiEX8ZDbe8EF7PVnKQneuhens87i9heLekrJZLq3LNdSU8FGgNZxiWhE",
  "key5": "5t6VsySAH9c8uQ5CHeSnMRu275bxQjXTWJHWj4UJHPz48pRBv9jJxFkctJZ4Sz4S4LECmDxajKiHPoMQxHbpLd7y",
  "key6": "29KKUEMkCeuWxGnWhcvhgwFBj7aC2UAw69uvhqdSxhYCh5gYnPXHQxrDDGUFhnbHdZkmoiLfSZP9WCwVseJBS1ZE",
  "key7": "5UyeqDnNT4kx27fzjMSnZG8nc4L1qamxXTTNs7cSTP8SHwpVNrE9ZUbBMVWdqRhgSh7adaPWDKJDPGWzaiPwbD4j",
  "key8": "2ChpsWysDmJ6HWkLWWh4jN4McDd3rMCeqYRxFf1MQXoBpreU9HEwF1Hj3PkFQegS4DjEfUCTLP8xcuaQQM3cdxbP",
  "key9": "32XChB1BDvdjgHzhMwZFxfRrdXqVpaWShSqVqmBrUJcG6j5ijtsdXr4swKEea6j7FGsseA1P9oRH2RmnCt7tRxGA",
  "key10": "3LMjs6QqWBUKTj2jB3ESfNpeyBHc9z9gpAACA5stx2U7rY8n2yEFBaxTwJsq5p95pcM4W9hGv7HG7Jf2qoVrcfL5",
  "key11": "3R62mLsiWELD5tpHLuSHuqBKXSpAKKAQi4wrjNm7egJwyzA5Jw1SDVRA2AyazgdFvDwhsdU1P61NVvq2YTV1urAv",
  "key12": "5bdv1nDEJtvVYSw7FzhUsNmWQBrFN3FX5h523FbdQq68fbyCrsVKtaLWXQWuTw8qFQA8LaDJbfYms5RVFCzSx4Ei",
  "key13": "2XyJSUM718UXURgt5kVkosvyEERtdGqgqYjjty67YXBMB2a7auzxPkoXJS4edSugseF1VBhA6MnRSd8SUJdbaRrD",
  "key14": "63Va3NXLBrMzYDgc246y6LKD9kwKbmLKyLonnRvZCSChwzrrv7k5ALFLYSf8WV8Wb2azSNgyeHY1g2jvNAch89Tf",
  "key15": "2XxmqHZp4bKzUGL9UWgFXMvAiQbqSZq3ws9qzCStBz7bdnCUMr5K4EALD4uiBrdWL7cUGgSjx8ByqpxeJiGfKLfs",
  "key16": "492gM7tWcQzoW8AxHVcvbXqWKTyxLAqd4exQF74cUdH86XN6JsKQMcdDHmrh1mi1u8CSS1579UnRumXx8PFeVJUX",
  "key17": "P4Jf8RbCja6G4YrDXRqByX5UzQgSKStRpiUrgvwp5EQqHvhPTbs8KoaaR7Pks7CLTFPrSQ4iY4R61CWf3jRkwt9",
  "key18": "GUUENSryWf2uJYvzXEjxxo5qxf9R3UmGQckEtyux8VkLUWkLKVSDUy3fUEUVq9qQjtNjzbw48VCBAKDyRHw7CY2",
  "key19": "5GESJ47WAhNaK5MNW4fuD3wugTLn5UWkepjN5XejYE7qPeUDJ18cLMWZdc7Rv7vMbQdsWHyJjf1gs86ZS2j2Rd5m",
  "key20": "48t4ZxhQGcDQwEfKtQzxtkvAfw1a9Qn8Vr2oRX8LkMGERFPXrvCFeDDzgUNENvJojTJhDxzYhs57YU7eiEHd2QpA",
  "key21": "4Su6c4wBT28Szf9THCZbCrpsE4UDKmk54BeUMXKuqdY786NgH3CVtUWhMCtfhWy5qGAfBE2ZVTqFGe2EutGPozdb",
  "key22": "3ZypVP6MaHFoyue81tH4N5QeyupeSD5mMpfDCf2GayLsxnyHBP7pvvk2EASqtv1j2FiipkjvJbrUybSA5g9XUZDc",
  "key23": "4sfm6Y9iTBg3i7pxGnVqpG53bXbm9a97eNWLbsJYhWYXEkA5qkV7hvwAMwu43fhYSTsQcgNxn437GKjNQGeo1mMr",
  "key24": "4y8FeXUPtXRqp8HjXBoDmgedwo8erXvXY6qQdSHe4EyTqbKRokgKe7DuPM2sAEPFhuHFfyu6JPZAGHsVewdZYhiT",
  "key25": "4f54XTeZfRPbS3kNVe9tzNEQkJfk65Ws3XMjr6uHQ5WpDQA6FqAnrjHxGHAEQ4eqLThbEXERjJyGCo4TwkNLuHgb",
  "key26": "2j9VqY5s5ZThS7nioa2L6Z4SyZXjpPaiDuhaRRx3cN6zn71V7jdhMWxPL9JKCpeyH12GE8WhRhJceukMmZSqBjCS",
  "key27": "65Vy8jihHnPSJfu1SEmTx5C7P1uVjotHrzvxpkHaKPRoLhrCXWhKPxSr6go6bhQxFjvpicCaYtjmNkyHnXVEM1N9",
  "key28": "3h2RZUhKsVLGGPtBHdkmH7u3G2HpFUyZbYsS4mQAgYK1X2toorJGvDrG8b1v4mhV3v24DTh7KozYUCM8tZTe6G8b",
  "key29": "2xWiGrq7xe6NUCUV4ibZsmGoxKBwHkPCZUb6zFEt1PxoRhC8GtSrrMrFVFkRd9QQhLfVjXLyC1WtNuGhEo9CrCto",
  "key30": "4YPv6zvmcndV8EJi4Tbb9wFBLgUKNNxHTyJVVZTyp87GtxSAQvxDnshudfSqPDs4fDuqnCMkyxb4UYCY3Z93tLSi",
  "key31": "1YFssVT2tZ68LiboZHqM6n56fQVjx12eE791UZE5m8b2n1xVMe2awP72pAqVZkBgTgcP1AU5ToXEtQvhWsvMJiH",
  "key32": "2azeQW1KTumY4qg4TnuS1ay95a47P1KjQNvsKWNinRKZLyxaozAayCxt8vmKP6jGhVD9SiikD7HhScEmC3HuiXmm",
  "key33": "2FUTjdrbA4brdbRJXFSVBnPz6mjkztSFM9YakuixXUjnyDRzDJG9rg2XEk1FPnh3sZNtJkhBWoyc3xQpjDgu5dwS",
  "key34": "4FqMx6gYkt4tdhedfRBWuezZHEyMWEJ83RherZgaqf4z19H7udq5vwfmYQKK3EB165HwFp1wKLjLzhpEtuiuTvEV",
  "key35": "i2CHiK6dzMFx4Z4ZmCF21WRir78DHPxUe4zjtFnUEBySDJ5xVn4zrF3pun92zQUUYbDzyUkkGF841AKMCvAxJnm",
  "key36": "3oNNMw1tCLNyD3qHtcBmMfis9fZYqEeLSuHvvE2ho3qf3gPVoyp6P8drUfKSTFv4fU7f2XHyBrmHGcczTZhwW7nL",
  "key37": "4ghNQ21jynCqHTe6VBWCvX1teiTJP1MvsarT5enQNWR8pPBegmvw7tAcL7R4uYxoKGhwkcqNExuEf3wUHqUwoPsc",
  "key38": "4VN5GiT7wQhNQ3ymvD62q37Lrote6uJ92JBgzJqudunRyTJmWXGvZk6SydRFkqHZn2SNCrSKknQriyYi4mREeHAs",
  "key39": "3vcn8SAbgaPWaSrqc9CpUmMuWe8KCVjpnwv2DoiH81jQdtgeWh2XUN2DW9fiMUBS8GuZ1cQvmU4n16Mpp31qFY9h",
  "key40": "2AeBpt4jfugi8RwUmg1yP4cHbjZC1Gzb5AAtdd7wHpttDDPz1idBPhcWT8yi6DrD9Voyo1oKVtQQEXh9zo5tsESK",
  "key41": "3v2DcNXJMyJ6JYgmcr6ZbXAc3JwkPgtz5pdak5CVLDsbzMEvG2C2QXLXT7EznxrCGEkkK62oHdRsZKxduYtfuZwc",
  "key42": "2VV7gZ8dh8Y8s6kswbhJeb7xduPJ3nPDvPm96sBFF44gFc2qNEYUF9cL3Uno9E3X6kyg2AFR6aE6kLUg8KadkAEY",
  "key43": "2Uyp2ffPsgUdgUhMHi26J4nm1zi9sijxAZsMa2Lza34fxTuYJ5muG6ncMguenmBxSBQVfnmeYAyqAb1ovN1wWDC9",
  "key44": "38STWYqKkkJDRTb47DPb3jc3va1y4GAN3ZHiH3DLn7oseAw88hb8KEDPEGZ6VrG4ZQDZMoDw72HD9bm9tsCYmCtF",
  "key45": "5VSRak6YeLEE4Fv74W9jbCAenJdbpubmsn5fJhWNgYuKSg7b1vxzohHdNaKFKAMuk2ykuKycnDibU28HPJYsTCmj"
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
