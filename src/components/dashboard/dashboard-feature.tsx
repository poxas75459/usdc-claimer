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
    "3LZ44oUqwUyBCez7nRRJZn9wHJ5zzEvr9CoHrVNafBhNDWyCpZnJyLDZiQdf6CYmkxx8mygUN8YBqDAd2jKke3bQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6AMPTSbxejq21hFcPfHqfYdJfMwTsWWgyfLk6X41CwAN68iwky6jobZdL5quEYi8tSqLBBCLDJ98sPM6yPSVePW",
  "key1": "XSTMCAEKLNCXyfKpapxDKKNNXEsmaen93JdmJeyF9EoLncw6KDXR7fwoYe93eo2UuYJdYyDuAHrHNk1J9VxKmZm",
  "key2": "4vDBgEqDD8VQMSk8MYmzkbfXWDSfZicPCjD31YD8j4cpdbzxgxnDRpDUX88bkWfdh1JK6teDsYX22vVYNUXU8J1H",
  "key3": "47GKswJ2tmPFiF6Ey2ZCTbBGkR3ik1Bb2vzAmwoc9UFQrFgEcoGY5o6Px36GunwdMjD5D5icQR3XG1hcoMDyp9ZP",
  "key4": "569pHHXbvESw8bFig181NZ6QdZBZYcDhb2zyQekcPJ52zMw3wGtotMvrU8c3jZfK76NzY7kvb1NaFrTYeoXWV2Kq",
  "key5": "5bLrpkAM9eLVzT297ajWBWFvMk56gVjhEMyoLkrRuVquhoGhjdBaEZLGPgS8BYGk8GqpnDCHorjukPmLtFaaANkC",
  "key6": "3GfXRh1roD7G3dNtzukXGEUNzSfNTd7E8J7GB8gviRtLYHLafRoG3mwFjywzpyWHpvwn7w1QyRDyvmCmQb2cKcVU",
  "key7": "puE3gqqAeiCw2iMz79ZTTV6H4gLyYcyDUHjtgEf9n4JiLHf4P65aykvzPYsPvqt3sYdhbyWqtXGGX5sN7BzQ5Sh",
  "key8": "2LUK279rDoWQqXPYLEM6hyUuw5uEe2j6x5h1Eb3Ec8Sf6kjg6DstqPhEhBP3dJCVDx8WWDVRZQVrPDbEUq5eSCCS",
  "key9": "3LWWwA3REVT51KpaFKr3y9BXEJAmooXHEKh9uDAa5asZpxaNeNhiskLhopDjH38mMssBSjuyEUS1JaGeXsf1AyQ9",
  "key10": "4Q8v5JhVbcRQcQhkFkow5YH9HgAxNjTC4K4AULEyDPduhFsK5FsSA2hCjAGmUrQuFFFiLfhJduRU1XHEdrs2mYkd",
  "key11": "2ZGNAgDasajqrp35FDK2SEJt9w2ZAkwuE4Z8XV7vsTmuZchpnmEgfMthhvLZ3M9Ccgf1aTQAKLZsQZa2VrpdeeYH",
  "key12": "4tWQUs1UcCmCS8g5YDQ24iSfsnTZfNgdEk2K98bJZpCsh2dZBMZYZ7oeRTZ1VZrhhp1YxQDhPbqdSjHCgN3eVUaS",
  "key13": "5c11Ezx5qY7CHWtcQaeHCkgngoin6BDuKWhxHJBKBAECYA2Tv2oXBHDWn17BR6SSpZySFvUn9wuVQaq2BSK7A1fv",
  "key14": "3xErvkqZG3S7yMsoGczvF8ktd1n2fBhq2pbHki9AVxzs29WRLPJtYFVyR5y39Nf3nLRxC2hwmjJiTNMLocS5nd1A",
  "key15": "3yTxdNs3koNLGxyFghbgZUcY4CNKevy6w8EeQwTxqJqZW8h3gB9TgusDabt3Jx3XFNji2C4KZBWnAk9Lsjh5BhvM",
  "key16": "64qW3JmMB8SvNag6aHstJZ76T4CayZo4Lo3QFEM3tAR6njqvucLZrogeZBn3AcekJBAAYLh2wHt8YLQ8BqCkE59v",
  "key17": "2XtEfmswKfuNdfYLNM1VBQ1PTH3Z5mMyMM1djuxUdm3RBzWtRtDN5BeMG2nBxGYQcEupU4AqLJ7CtX9mrujZZrHu",
  "key18": "3MKHy69JHZi2MaE31PTehwjXpAcdKjoJnqyDLvZH3aBCthCti9GFFrAQF9tHnkAgw44PohXsDk6hdTXcixFQdesu",
  "key19": "2MJj5UVnbvYnGeMWdkqy2d8z361qQnXKnaeU8VxgCNS5JkNBaowTmNDppfWQcE1auVbDfYqC5dw9RS5Am5zQEXJb",
  "key20": "63Hz8paqiGMjv6bxtYf3cMmgBExyqCVYKSnrUK3z6Lj4tGXmcVnnn3LF1vsv1kUQb33JkWFgSKkx4u5gL1jLnTxd",
  "key21": "2VWdUDnFDoLCE9z4LMZLd3WmXnF8V1nVJ1vf4JBWN4KbDXrNwa3V12UUGzBJ4fKk4HRcpdUGytSkvpxk7ufWecLe",
  "key22": "2RfyBVEJwkUWa7DfjT1iGk4eWJBuZLummpz47yvBo6NK3xPTd1xp4tDQpzgu6uLCeCSZPWVDfQe4JBvxGmtC7FCM",
  "key23": "HyGk2L3veeGr3PQJBZoHZDEUn9wo3TMEfeRhFuu5CRFKB1gVUV6EDJETG7mN32UnvGDY1zh3KutRxjeV5YdxgMH",
  "key24": "33VWCVYKZ4cDNwDfbZL5x7UJ2Pk7UAYrsWpBxJGPAkzgAJG4EGiQZecN7Gyfx8KSpWkjAFrqcEHWeen6h4GtrNSN",
  "key25": "29WWb7G2sgXWfKQtju6f2Bz1GyjNLP1vdfoy6ysNdtTv5B9RLWKhUMcpKUhAMw5uEJdmcyBzAEVoCqDwmQMpvTad",
  "key26": "3wuCVghTcut3dnCsLbX1b3841zGb14ZMst8TradqfPVhSBS4GGUrcmvYySozkCdQ7hKgACHJvznBpSKx37pVixoF",
  "key27": "5MK9Ai2MV31qhgLp1FeT1KAXUidbeD2vKr8aXq8sqnJmV8Bn2zrGVtVuMbPpd8cdHhsRyvS69X2zmW4ejppoLkoG",
  "key28": "5qgktWstX8EDbTVrRkZ36TRcnreXBatExiTxTMhNb9wQtg2CgBtzXZkswgE33GMaUfNEY82FPTcv9uTL4TgwgfHk",
  "key29": "5tu6srTdVmRmEAeYgkuM41LRsBKmqThkMjDCSzTwJPHVYb7hDHJT9trR7sRfJwa2pBGY1FxYWkz8pikZ3XyC85Aw",
  "key30": "UBexqvtD1LuMTm1UTsRjN9e1ao4W8RJh8LHXecnd1PTkpDEAwrVYH19J2GayNnBDmW6AMDiaX6td2ibgdR3MsAJ",
  "key31": "2GmoujuZmPVho37yHLCmieJV9gR52tc5ANwJWbUeecTYELjtRMKMpnhfBspZ1arTuUdw7guQCrNmNQPnVf4fpfyw",
  "key32": "5kFTBv3uWhc5qaYAtxhAEPT8WdmGUX1RwhQJHmQ4XYUowj1pMG3MFLy91PgmboV76yain7hPVav5J23aerZaANHM",
  "key33": "2gKUSPk5abXcBQNNJFaCuYtnF7sm2h6Mn6pvHZFzLVELmdTytnoM89TNcNrxsh5eBoG2rABEZR3k8x6v2eN2YDh4",
  "key34": "4PDuVYFMXtDaRcT8v2TLwbRPoimyPEHW8btKkTBovoKujS5oKFHUm2ZNqPYKQu4y7j4BkQTB83qPd5sBK6AnvkUN",
  "key35": "2wXfckErKaHHTVugEwUhbhBv8CChcsjT2YXYaqAJH46MVuddbQ73zFC4PAgoyHHrpimuCfUFAeDYLSzSguzktZgG"
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
