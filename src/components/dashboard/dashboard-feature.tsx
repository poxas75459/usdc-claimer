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
    "4JGTtMahNHDgNkJrqFTsMZwQijScdoy4iAyqKdXC7BAvrfENzLCsqndvoPUG9SaFuo93oSUJJ9LoTpUgn2UdhJWN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tcyX1ubWLP2wdZoAyQVbeKgkJ24jhacoc8ZXV5JJa3UFYhz8vTiz9iuiNJiWKW4bCeyLv8oZtZBjdAuBokFAPpR",
  "key1": "Z1Pzj5QkNbY8Fkn4UWfHV24fzY28NTbDL1H8C39USRNkiXg3uiMA57FW8yt9EhjtVQPoChW1tgd7KLevqWqLJni",
  "key2": "2pfLNEkDSZvBmdfRCds6XwoUS4qmDeGjnvwwKaGxGZmMDYE5qwYpHiRnN5Dg7wDTJJvUyjGgRg2CSm2HYNuUV5Yq",
  "key3": "2JSbPt11g6w4JPegZqeK33cjpGUXdy4vWXD9kbjUmjihLg8jKUVLohV6pzpe6qjUwcWi7UTDvqMxNfXzds5vASVm",
  "key4": "2tCheQCFbFmsFPTi6SzQgibyt2xJaG3HhCc1NUx8wU6BtnuNTTDMQyXMWd32KbX2YN18wtECuXrp3G2aHCZH7rzz",
  "key5": "5VkKY2XYP8uXuvQNyatGFvDtYWYNYJAnaWGGENm2gAwzojRzPNnJ35hT4biGZ7bw4ozAsm4qaYfCcFTVjhrj3SrJ",
  "key6": "Zo2vq5AzcuZV8RyzdnssWZb2Li9tp7ZPpF2GQxZtGJeXp9YDMHGgxx1but7CuktrAyafcsWZCutwbjcwFArTdqW",
  "key7": "2M6GtnWgCguPmM5Ws6azQnqqL86Q81QhG54gKQXRRp6avqoWz55Uui8ftTpCWZXJer2mdiaEUiHhssJjJHDcjsM1",
  "key8": "y3dTXNJxB92znbG1oZ5s5gfB89L1Peq9EGbu6UCLDxgQWVGFHKFFtMjMNYpJwczfGDoDkhvpLdBrXssBd1nF7ky",
  "key9": "3nKJSCbgwFJ52Q3WRftdBCta7x85DHXSWKhZVpiC12TDjVurMFWMGwjVWBaTMBmCQJBVbgRhz4wzBHLNqrbeS7US",
  "key10": "2sozfaFzZWPELVQkarS6PnD96o9L3xwzUHjbnZDkXpJKZkM7rQZPQht8vWvs3DB81doZExsR6vYJ51oMYrLfwhgx",
  "key11": "5qEwHuUvH9dod7DwyvVXmKzfAFnQ9ogUM4dYYCdRMptW796DtT9B1FApQEQC41sQkq4iCL5iB7GUS4uMiSTZu9Zt",
  "key12": "63vUPiMWhdCoKLxXfVYGtMpKP9V8wMubEsoQ2y3PRhEVsBiNCYfzbCZRNJs7othF2kLBUNhC6F8VngJ3DBA5RPb7",
  "key13": "CP1aLps32DKKY4zTzp29McMUfsAxPsgpJpVUkrtCaeniN687eUSUvZ3L7fKg8adCqSv6h7QbCqMxBRGAqPrC4XD",
  "key14": "2ResQJq1oFycP39NF6iEYsbfhASRa7TL7NGXeP11uMotBZN5fbfKA3WtWFQixMnt3GUY4a4U9RSdFrAiwBa5Q7on",
  "key15": "4WesVjqAAomTSd4FRfed3raJ8Cakryd5t4rYYHzJ3d6QmUZbzb5akzdJifkCC7kD7WoQNvN69kzddCnquSQmzdFK",
  "key16": "uc7N73FLRWYGmMos9bdUV83xiEdQJhhphae4pXe6L45Z9jJRXzT9dTPydPbHCASuLPZZRdvyfMgMCntGH1dBx8o",
  "key17": "2e3JjeuHvkD5TwnWMfKES4uVFrfLryfMZp7Abx4RU74gD8mpf6s8gNY9RBRXehxngwHN2TSsDFWyr6Ft9b8fYTKE",
  "key18": "29VBMJ8W7xjoUpxUARbJKR9nKmuzzhperF1d3LKAwtRbUxjRdJszfftA9Sj7LEozMJ3yi3ENrsD34XfZAFB2VJtt",
  "key19": "5hwZKYLUAczbJQhnt89yV32VxXwQgtJJSuH4dXdyFGion95kxZpFbyxWFZKBErEcHmzEaZkADdbaUszF8nS69fAQ",
  "key20": "4usZK2YHJzHHy45wiFKzEwvNBd5auaMgPnNyLUVkVj5hdEFg8ArC98JKLP4AGpzur7KQ9N8Z8q3APBpcL4ez7fSS",
  "key21": "LFMj6NEXZX7nnM1SKtuBnghRtwyvD6gD1xk7EPsWwY883PJqCcLESBebbzk1CAamZzf9bCmtfPoE51MDEBQ3iu2",
  "key22": "2xhuqBCmJ8k2iSgiSL8VkuPpDucEGBzcJvvT2CRGs5A3ngY9d2uKPWgY3zFYsHEvCEjh52CmkRFQzR2BTxNBBQyn",
  "key23": "2mdKmW7J3qFJwihc8hVU4AtTuk97cvHjaL24eK8AmDD32SUupiqfKBmuoyuPEnSQftZxUkXTaQMi462rUNcze9QT",
  "key24": "2NtZXUYsRvKaKMvZ9J2wKFbd39nP7BzkBe1Kbw2Pcf7NL4qr9LcZoTqUtJF6xCTKqdRCjEVAudKS9Ddg5nZaEsgS",
  "key25": "2iJ48CcvURYWSZhUuwaLbB52Fywvm38RTsZ1fKfVuefKJ8mJaq89L66MmTe36WPNaz7L2rsF7Ywg9L3BkEWtsYwm",
  "key26": "676MxFxY5d9ydrrm32vBMTBNHN5ZqCkSgmMMTRpFL5vMDAN5WWhoV78aoijHMoWwxHwjH18LB7jVgSKLexoF4Tgi",
  "key27": "2y5aK2UpCJuJLE1R1GcwFqxcXdtjCo6criToccesVMPGRxYxbVZLLtgnjmLDV5MUXLjdtqTREX9DoVPRdnRhthox",
  "key28": "axHJjMAYcwCogV9yssCPBCzV1ZBnHV1q7ALaAakhfxRvw4RxucD5r1uHZvzmqmZLmrWe5dBP8mZujQ26zxzdzpE",
  "key29": "JVfSbDYhsgNgiSuDbapgLq3kktEcQTwdULM95GivvA2q9mH5HbL56JBngJmRTN2DakA4p7DLVv9kCAn5XxPCAvH",
  "key30": "3T46SJgLazHxkEfctaWcoqUYfgpowXbpVJycw24P8A5PVcQFbbtvSujjYYUnQjGoi3afZjjMaF38TeQ1Mn4QT5UY",
  "key31": "5fPUpbwMwaQavqrWbqkJxmoct4iqD4XThJBp5rjtpYLnG26YCgjwY6vX3qJctfVpgBpCU7KWQezgcLoU6GpKhzC",
  "key32": "ko2TggQnsWW6bpgxdDXUZeih3DEgUHCJ8jigU8oXnqpzkkt18EVHR2dZMBDSkDFTkbJxcjJPqaX2Q9EoAJEbGhz",
  "key33": "nTUur3BhJ4KB4QkYkdeR6uQTybuXeEBoGdGaSb97LbcE8HMWuY8rU7UEtmcSNX5Kfw3gwEgPhSdx26d9DWXhRXY",
  "key34": "3AEr2gZnQFFrHu7ABaxkW82RV4o2rVXjZd6VtQg3NNzefzGkH9rZp8SEJ6rthwqxmbkL3BfjEzBvt8VYcub9QkQc",
  "key35": "4VmrX6iq7sBL6k9gGe83jPDkHDs2792yRvJd3XBAMcFbStJ2qC6Zjs1T11X8bEWZKqGbxUTdYWZFjEHSbDJaJzUx",
  "key36": "DaWhmsoZPChFhep3cCDGNPsUkYfmRWKjyapkn9JCvTqe7UAWcx78kNrMqjsy1aaCH8fE7uipTQ5hHh8vzqnW5r6",
  "key37": "BbppAf2ZtNvFmjJFcsDuTmcEvb86nYXFUjL6hzGd85SZPgBQfDMb4RuTeDbowfZ4v43ZCj62PkyBbMazHyjRmtf",
  "key38": "2uZmYgxYyxnhrFxYsy4JBUxknSjfNLdJ9oVmbEKgg7RQy7MHZ82m8bcTK4Mphr5eLFF2ifHuAigfbDaGuvtsmkGe",
  "key39": "4RxSGCTdQxE6mxHAXnEPTLaMEtsu2sNn3a4od8u7uyZUJXLP72Qn4shc7hfrxmh9vuC4cuLN6LLLdvoDduxfDXhh",
  "key40": "3VNwifH3Mwtm5g2fwbtaeZ6h1UU7VZgP9nhYaKmMHDFe81zjqTUXere7uAZjqpiCVwNkmFPPddUrzqJFjLb7fL2H",
  "key41": "37392EqoPA9vpPnKjs4sj5QMX2S2TREXNwDp7sC8kykgVvuH1RrBAodfVsYZHzRrR3vM1q7MqGFwpvpM9KqF57r",
  "key42": "2zB3CgPyS7fYHSPpe5LDKyFcZoTfrXMU2D1AVDz3Niasu1tx9vHEvjPYjqH4hsrCeQymfzyZzJbx6ARsSHhb3KD",
  "key43": "zvRhwGfs86QRa9mpvHzDiU8P2u3fn4L6hnN6DnTJnKU63mi7kS7tonN8zCXp99wZ4NhvPQMVpDuWK1rx3VYF3Fd",
  "key44": "4cJsNgNnA41sR3WkuS9uvGg6fhm4Hvyi33wsNa2UTFQ1deYUF3G997iaJkWjBJJQwYXcrnYoK8sNvbXk4sdbQBiZ",
  "key45": "ZKj6LFo7TcZmd2g57F4MqJUoPyVeR28Ny81NSNcXEp9mdgi7swYM1p4LNMTUHi8VTHZzycoxqHqUuawdSSdKkQC"
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
