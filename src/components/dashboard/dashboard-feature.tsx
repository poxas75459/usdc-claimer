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
    "yFyFFd81SfdTeiRq4aKPCqnz99u6XSQcE1j7FakuBWWW2kgDqKvSt4HQXEBjfeq2tsVxQ4Zuu8hPJYD9xAyRKfw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46UQGnfVuWwHHnBREzUApSkxZgVeZRb8v83nEcVPjYSC5xBBwKJs8fxcRYMDXRTRTMEYMiD7XJkUxdWFv29B7eYP",
  "key1": "3Rx9vUADhhhysnqphFJKWJiHvpwwtLUoZZU9Z4izThv19D5McTnUzYzhh3bxPaEgtro3a3x2395hfGV9wBaZnok3",
  "key2": "7moJFRTLAV35tvdmpocFTbPSzJV42hJou2FqposE6foWns6eKbGVjnS3C5RvdjEbV9NFWRmCTzt1uvQ4d4Bp1jV",
  "key3": "2DF9XydVrfcQ6XZcMjEnocZV5z61pfGJaeRTE1uHusNf1fiC4cCLAp8CgA5TXZQDgDaqPS7zj6ZQ8VAD2qJXJ6x7",
  "key4": "KuJctizuuBJvB4qycF6XVr5gXLLvvPMXinUkgyzWbCNLw9WnBk6uxtkhZyxgLEWLExgdgjHLqriQuHX3NRDFB8M",
  "key5": "57Jcn8ptugkZvDuTxkdoc6he5gE3Xci25c5UsGDFXA7oKLz8YdwAX1iwPibeNPAfR6mJMTK1kYsWPXffGgdLTMtp",
  "key6": "61VPTMrHWZaJLXpGB2Heoigu275WsRhCW94F88HFUmAmhjhgzMs2cfumAsknch3Ar3m18LU3UagskHbC2npPiqGG",
  "key7": "bxwNFN17HQ3ze7dfv9cHbyfGgFtA7E8YUo3cQSZZwawKTd91esKQTJKmLbnRMpFAi6WaPbVaqyi2n134e2UgDjK",
  "key8": "2igsAFw94QMiGJin5vfVFk2wxKe2ycPb9KhFMww9kVzUK4aTBjkTdhiCU6gjtTaUnSWrWkYTVTPVkk2XK1dfs6Ph",
  "key9": "4QdV7wzGq6KAj5YW8yeM2c7u5fDu7TJ1W3KM1F1uD9q9aXTDw2YrH4sPPWDbQrMFRA7BdAjAW5LmTBp68SYrxMa3",
  "key10": "3s26YEYdBrRZaSs8rQj3oqiLNboBgqkrgKt729QJJJjP3tGV4n1Grm3snbwPBGsAnaP6BBtRRmUertYE5kwBxrAC",
  "key11": "5sdLdoEfrkGFewbWBUzCVbfCqemHmi8RyBasXy7KMeBw1RwTFVnRbv26Ch2pYJGQx2aDqtHFH5YCYJDPZqfhxwmH",
  "key12": "3oFGjsrVk67XStjmuWV7C7toCpbiqet3r4SBRMXUr4899zdTLgQLZSCvAczA4FYuz2TCmXDAXZEJ3qPQncWYZ1Ni",
  "key13": "2sPSxGK7v4DinqgAghXNZpmFRnkbsx4J4y8ZBJAKtLC6mps9VSYhUhAjzF94AatBY6E9HGsNKE7iFnC9Pa7UV25b",
  "key14": "5ejS8Adhx8UqF8sYCe4KUu4YFXzxze2xmq5v2QsMtgmbfi2ikYhpJTqBCfPMqLejibpH54wSC4EKYg47UHZhG96x",
  "key15": "TYBeA7wKCWjLGpauzdsNtVUY6LdKiw7mC7C6JfBgH4zX2gF6A6umU3yWXUcT9PxVVTTNdNYEHyQxKvtswmaAZ2F",
  "key16": "335RYSwNGCFg2yZKhP3qyArKVuMS8og1WtGh1Kf5wYBByf6WPiZp5ZNfWVyKpkaqGMRs839YK8yXzRizrkj91uwb",
  "key17": "5WT1vNd8HtXyezyPQEX3UGz7t5PgcDqfKYDW3z4K52DLGQwgxBMiw2r4d73me7ct3G3YVkoXo5bHqD1botosj7Gu",
  "key18": "5Gg68hRVQpGs2Z5GTc42o915PiM1Y2iN1zSSXMjuyntTx5RijkKBoTBCKrkW1cEcPzNLgQXW7E4tr94PZtog34vM",
  "key19": "ozWYZR2nRK2uq34ZWNi4uTkW7zrZW3L1rob4KyVbTpq5GpdRwX5PgrPTpDWseRnihBTrF2zFrzqxjHNnYmVYBQF",
  "key20": "4cH4qrQaTZt9bac5vQJvT4qXP19kNSJjYJjoXimY26kHVJtNLwTejsKSmRAuafXp8TKcc4u87Aznfr2arcjA1SAo",
  "key21": "63B13V9sKcFsoefbLqbTkFCFMAytKGZjGWEyJaqBco4LqAZi5Ff2RKA8zAP1XUBAxLyuz6jTHWeSSteWZYBymYr7",
  "key22": "QnMWLUSyVh4KFs629fWtaq8gcs6hDPy23hZgywMJUoA4nS7r7bn4nVZSXfkh6xq3mzKtBTzNvMZ8QkqzSrpZMd4",
  "key23": "5Pjn7Gfn6NZSPXdmk9HtzJtpjGNPY4DV3CKc2Ep3LmCo5eNzC7CdRYnAVdyKWotLhUg4cAK7uucjugxmMDSveHyg",
  "key24": "ktoV2KUVxvJcC2Vbh6my49SbNvyyq4CCXYgVTC2r9tyDbF3ybifGLEhbVcSCHVj7eeuKe3MH7uA6MzCUCzPRsDK",
  "key25": "PsUyBSqrg7iv3T3XywZs7BZpmVY9iB4hgwwHkLKspxcTesgfazvk13upyMCNoSCUFqyLWSqUCcVj9Rfy33J9UV7",
  "key26": "xWQfgMmRTdgyr5woUE72nSgQa9E6AcEhNa11wtsMat5ThSAy9qDMy9MB1eoxyGGtDg5mQLA7v8SrkMnpQAjBpBt",
  "key27": "H8g35TXk9VnmnNZAhNi4meN34DdW7fWVVoLcuTxrVGoxKQeJJFp1i6F5ET2JPp3AHzFcPX2CrSpnoPsDsXynffx",
  "key28": "B2vc6evUVxwQ7dFuA9JCYo1zB1m43oJUbKb1B2Le3324rdQ3uxkxUBMiFjkfHdsEe33Cvy4Zz1849sHSdu27B4w",
  "key29": "JyzYQeEwd6YrCh6Hd9A1TDaW3CdqANfMFn918e4a51jBS9cYw5yatewThTsFgsZwW9accsoZfiRWTmbkMaeFRgy",
  "key30": "5mjtSXj1ZfnCTiPhuRYyGWqobRKScRGv3asTqcaX4kHZVEpPHLksPFGvh8ze92K6CghB9ct75kvLYzgUmkKe1u7x",
  "key31": "4evSVhvSvTtbXqhvJeyv3s1xuY8QkqKuAsVuFkBiRF5ELtUtbuB9tj9zmkMZtiU4YLS7gaQpp4mGJhKpi3KTYEtq",
  "key32": "V5xug72K4qzARWsiJSDVxqYaXQmBZWZ6Eh24XoceK7paz4vP1Uxrh9To3iDpBtu3bDevoxSivd2YQRebf7T74mp",
  "key33": "5KumhSM8BogPxZPvLNRMcRUTP6E6FT6tK3YcEwV7JBexhL457uCCvzrEqkMiLCzFWHadsjLC8bqPZLE3W6ahYtoE",
  "key34": "5FbmXQS5y4qZHYw3Xb5TWa3oqPdQpkn7yvfEK3i8s97GffE2UJPWdkig4pDyFzk6LyVpYwrT1dtSpc1zvJLw8nAB",
  "key35": "3a1SUGGxJ3rroAbDdbfufzpzzjDtEMY6nA9EoooTWQhLEkzRPTGY9yhN47JWb6exh1BEmZ6XDCqf9Y3mJcRhxRQu",
  "key36": "44PXmy9hGNrtwR8t27URuQ1AkPjj1W9PPUD7wT9jAzaJc42wFif25yq4B2iRsLWhZPkjBK9ibPTYTp2odN8p4wU5",
  "key37": "5yxafSgwi1H9KghAbr1eAZn8hYfTicDjLuVYJhKqsvQMQmZxCDhnRkFw1sFpjBZT7VyKJLeR56Za11pNexFHneCL",
  "key38": "3Xib6LuCaMDuiwv8DYoHLGYhvozvFjYoTKwhrY7Qvid7NT46FCFNcXvVZxxcy9sRMcr2FiP75F2x6CDYgCkPHXpU",
  "key39": "3LQriGGooMZutbAvFRSfFeaMx11Q6tX94e2uUGBACcMkhbHudze4qvSD9oY8BMbgFTw9XkAzewE9e8ApEHQ5oYzf",
  "key40": "32xh18x6aTBYDWBSkk1u3HAvpidgiWCau71KU2ZrYGKUojBVzWM7mXUKW9cEN5Di7jNwkTbTCHf4DuoW6ebYMqYL",
  "key41": "2j3YeU5zLjxUxizeQ8maw9Qqvs5eucvjP7VhbaGygyQ3yZR8iinHeyvdr8nQvHbw1Dqd9q5Ub3Qic9JhxPNRBFCz",
  "key42": "8GkFZpcS2gag5eZKrGNM5t5SzwR2kwoKvESTavgQYvs2QTLsa4QUeWcZQceP1MwX45tn3Hx5Kt7D6uzkgwFsg8x",
  "key43": "kVBdtfQkmc3iEgaHvNmDbLnUyqLxHvTJKRyngaPZGwDQfpxgWjJHKMR9e4LtLj4v6Rg4eaXZ7J1UQrGnkFp9S2i",
  "key44": "2hnpAFGa8FoV6HqTvLR663BGaXF7LDDPdkVMajKmCWKLdtDwktmhV48fKcxBazDBkrqMWcn4SKxBw6geUtQLv6wp",
  "key45": "2qRN161EYBuVL6qAtTevDUnMRT71b6EXK9etNzpmAEgpxpBqBmS1fPPzAcM7tTDCusQdWUF2e4BMFykhhUxEjL8o",
  "key46": "5jbEFQQkFBCDG687uMnQ5CuJprCP5KBDcQNWQjAMPHpLtaYujXkBqMDmCfezKh3Pnji49audHrcTnmvh2ubJzcJ",
  "key47": "39ED5q99BhreA3RBvhEihvvE5hotJA9PdP5n63xZeW4Rmeacub3zHyizq6pPyJj3gkhS8ZA3SncoF3Duz3xYGzWU",
  "key48": "WQCXb9KLH92Rpp4sESeqx6u1pJQ7ADbS4VB8TTeoHA3yS8fATPSxuQuCkSwPQckpKwcmSW4rxrK7nz9EdYeJYjS",
  "key49": "5DTSo73WuBgLcE2k6d2tjFzLX8WPxHYk3SYyTWSv8dPuZtA3dnLDLpMrMfGsigpAWP2tp48QpPFsar9asb3rie3H"
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
