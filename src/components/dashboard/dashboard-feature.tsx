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
    "5eytkXdDDpwM7bkYD1iwVnM58W7b5Mrf1ck1aqUUanUx42rTBxofyDjmhbT528GFbbxema6RZ7jmDG1mrnCisszN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NnNYFfS7s8kTPhey56wBFbCs4zC7xFa9p82DBoqHNrjEpiVGpNsNLozcyzxcAuppyD5cey8CCELQ7D2qEU42MzB",
  "key1": "q6rZxxok7YRYnCbPeKQ3fcSGCn5MyPeTd9TtD4k7MJbxGMYhBccBzJDktQb5gJMFWnWtgDEecALSd8QJ4kVLeMv",
  "key2": "3mna4y1VPHh4mUDYy63WKx1dnQaFNmHLVS22MR1UqUov7ZAMGiA3yvAkdPZ6cbUCLprXio8Tc1pWo8eVb7ynxKNz",
  "key3": "46jZPdJ2RSqkUMx7xrGf5djkKcy9GdcCZRexQAnKujDnzUV7mkYYQw3isZrqjvMa3DMh1xqftszDt5Pw7Zt3PNT6",
  "key4": "5hBi7nTqkZVDjbsrE8x982fzHUEcZ6CQtzjp8YsPG9VPXASMxELiivpoaLnkAztx8QJ7kdFdsAzy9dAbRQXEuyix",
  "key5": "5P6vWQNG9tCQoQ3eQGLgtSYzUzbV6KWFkUTHgLWdGb15avqPjyw1jT2Mn1rT6idqt2xmJXwkGuuWYjke9fPewo8R",
  "key6": "2mCd8edMffzKjSaZh5wSxsE1HBzwgMK9wNbeHrsnjGf8wweRMkLe98HbPvb7Ec9jr2vnR9uNHG7eF9RuxNkvbpT5",
  "key7": "ymqUpitcxS5Pw2emGurmAwRWLMAFetp7vznPjDxe2FLoZwHg8yN5DdnxLUZQTcMKN8fZ7dqQsywAfVpumoFZoRu",
  "key8": "59j5KW1YXt9Un8sL5DQw6jjY9LbtCpDsPrxdgbu97z97hNCJwf3Qm9jZPsetD5Ue4UX7wU3UVRHtUxRitx2WRcJf",
  "key9": "3cDNiSikkKF661QBHzioB9thrrb7vN2VRJmG9J4J2EzpCbTTeXwUPHkAaS79tyXj48Y8Anr9YTEzCvjzAkptM4UB",
  "key10": "2xFuyoXYVX9sSNN68b35LV3DTRf2LHpyP9mkiQztNJyFSLn1UPjGvtLyJkMrXdg6J22Y4kqRpHdVL2cTVhgp53Rh",
  "key11": "3iKDcywdQL2p8qyVT4QF8rWjQUtzQU74wbVYu3VS9qogyLgaNZtqHgRzvg74LES4PbEgTE6LnH7KwHtdjBuwj7h4",
  "key12": "4pKDF2mLoSNzFGm7ouEPeA7gj2zMHW9QN8hXmMJRPD8JjULcLh1TUZq3e4TwgzWQpBNoabcr5XqpnxRDr3ePseEs",
  "key13": "5ckp9FXHYKaSWQm7JKSMGMLm6DeMbyp1HSBQF3FgXgY4AbsB8Ly2JipAGkNFGwrChXaW9VBEhLhqu7w4JN7t2iW7",
  "key14": "57oDZKSb8a4msFydX5WrhjYu5Fz2x7XGXVfvzHyoD4JkLkmJWgpwRvSMYkdAMsuCwQUJTrSHvz2Fb5GXLwKcSJci",
  "key15": "VLZgugsV8JMsoX9CFn91S664YXsAbL94hez9kdBuG6Ay1wAVmWnjq9jnSEmbtVgsJYz8A5REkE647stWduRmGTZ",
  "key16": "3HbDbDCVgHd6U1XZgm1gomswCktXLmqdp1qm2afAuDa5oD3URGru74137DpuHjwk2qTZsst2dg3o6Cyk4SK1tynU",
  "key17": "2qXeD2ftbopW7LrCWJkdY3Lq6UVzrif7SHxV7f8P1hDTZG6zB7dRqGaebY4jiqHb1aHUtG9zmD6Adg6XRjhaGr8Y",
  "key18": "2U9N4N4K5J7bixWy4WZqaHfJoriBRJQbiG2yEuxVHeKrJgKPht2E59YKgLpctRy76rRbTwhivvVRedLWntxkKh1u",
  "key19": "VahMoxg2WA9Syu4CbVmCi372gXFDj24Xvp5XkjTgktUUvTT3TQuAUATtTFhifN1veZNKRemUUBskv8MuuMpFqVG",
  "key20": "2xErBG5TwLALHie2PWNp7n9YjV9FG6hWpZdQ2gcRQ5uXJtj1iLjFszJ4zKnaaCEtciVWMhqFAfmFUV36kc3qDqe",
  "key21": "2QBQJYvzFCSZL1JpheFvBcHwULHyRaP6JuFTdejt54C1aT41RmEevh7pVb33asobJgevxQ4v68gGUDqywGCMsnRu",
  "key22": "5PgEQMEH5UGrnirzJ1LYkw2ZD2APvdBwx68dQgYpMFaBXzEe47RTqmHFXAvwxhjGphu2gU3iEtdZPL1W1VRkv6GZ",
  "key23": "3YjXvwJJB6bV6UYR2BjdH6WtEpbX34eKoBiXWJRRMn5qzZYsAt3E7zdsfzxtCxzWCyN9GTY88UrScvsauqmJGy3X",
  "key24": "5c8DKKK6eh6rcuio5B5EdGsJofMQx8RngGGqwU2XC8LEGa3ETfWyKobmhnH4cLmXuo2BRhwVVJX3y8dkGcJkksQp",
  "key25": "3LFb57BVMMEQBQSK3sX1NeMbSYffCu7vhfPPvJU8AmPkPY5DKJSHAH3wca9PxGG9i3YCJ3ck5y6VddRdZsaUwqhp",
  "key26": "sx7vZRGQzyWdWaVhPAWBiNj6W25qd4P9nAvQqDPnPCyBruYyqXfJ1At3U9rdKJd9FuwQDd87yDV6AjoKnArpUwC",
  "key27": "59i4q7TjaWWKLuvuiwYvgGt2Jf1o2T4hEMdnnxkwfhY5Q4R8YUFuFhaXve1xGpbmGKypxZaA86qnAX59faTiWYMJ",
  "key28": "4vjPCpw3QsUwtnA7myLdLUeLUNWJSmjsKUQoVNygdFBpj5df4KtTopp6NuNYQjuBkmLbCSiFe25F2dRGp6eRewb2",
  "key29": "4pNwbiYQYsW1iDuPJzU498JH8aBRrrocuPgys2viSFjNhYD428t23nvoeEAmW6X22piC255zYdg6xzTMUtaJyi7y",
  "key30": "32dFboiqcb5dU5P57bML5RcE23t25NTPu24yMRpifHf1Y63iTEDBP1EFniYKetBBApZttvQ5AsqpGXQGnwtXDTB8",
  "key31": "5RATTm2a7Mt5auf64TXkb34uQjLm76S28sBaBvLPNwgiwzdaCQaKJ8rapYBqTRQHwQwjKDh6gNZ8zgDdGwNM3zhd",
  "key32": "5f3XWGTKF5Tza7xVanVkcKxHv92Nx4HCt3SZVw4CRTGBVU3QXq2NmK8PNJrVJMrWBgjTZH2LvL3RjucrKMfcTzUx",
  "key33": "9kEgeFycqhohcJaB3BnGeEicYt926Nvo8N72XMmd4eUZprhNHNKSYbyicJfDAhVQHeZ2i2KNMnvLmSGDoiQPbWK",
  "key34": "Tu4FugRbrRTTbgKJTnzTJGhVjexvu7Dd1jeHkjQeKq1sU26Z7ki4nHLtkyK8pybLo28WRc7p7H6FvReg4ydtv6a",
  "key35": "22NzxFdXqHTAAcFcFywk8G1uHzS5yz97SnNxvtnnQzAvfV7cZMALtz5UH5mjtM6ANLTzfeDmTEXcRAwyL3b6jkXt",
  "key36": "2nodXee5oMZSts7M1qmB6kkszHo28ceEGUEtQxcf1rm2bkMe9dW8Zm7veivygfgYGWXFLAf4A56msjrBJxJxWz27",
  "key37": "2kSxeriHn5mWbTvRH3LrWMHFoBdB1PYU5Y6CobAzPiPkAKeDLgH3xn7Mp8idyv3FN9z37wKmqF8PzdETbsrLZE8q",
  "key38": "3tbRQs7tWBujWwBcoF1phFUnSik5DfVK2eQDHvzhLfyV4ooVXSJSHAanAS1xnd4yP2spBnGtQKpWxbjoUsuxzKxG",
  "key39": "4Wxbh9PDbDNYyBKPKktBS2mmHzmyQ7KnomU6ud3Rcp8ZatT5K3MdyEGYop1VxxEJ3dhhUa6TJdyQfx69oAQAgVPT",
  "key40": "3d41B3qxhmWp9gFe1y3PwJJvKq19b7DtLRiWJfrNcnzrYsw8TXPnoeNLKtFpY1wwDMNaYpuwEKGwmXzrJqPagWVX",
  "key41": "4HQ3xTVnHf6TmAoUwexas6zg7VcGTNuuBiY8C53EKRovSSazqAhxZa6AkHummyMSTFTZeyYC1U1DafzcFkbYhY1z",
  "key42": "5XkiNut8ghXEWeX2Q11cwukosohXXRJswuevQP9PJB4CgqgxQg5TSem9qpeVa5HFXdHzAAAorhxBigDzkWMmVkaG"
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
