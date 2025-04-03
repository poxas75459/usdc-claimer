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
    "5Lof6XQDuNW4LW17JweoGddWFdyeaspPp833m5saaKLY87Dx5Xw2GuVPRBkmFmKcijp8eHJXRQQACxkVKzx6vs91"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "byCqRXAn5YRNeAgvAaubhKgxDUU727FB2h5SsTz6tgEFy6vmSmbetMsWPSxcTheNFf8fDuxKPxz9Q9hams65dLT",
  "key1": "3sEdKAtny125KE2LBDuAPDUgZB6ZqTszcd5sq56nDhRAw1dKMQ1Cz4qDUxnUBJrMoBBgficuvszzNeaMwLMiHT1Q",
  "key2": "2mihzzJGW7S64eut6CM7UnBQTzGM3XyPwQpbvBCQiPSH7ZBu4on6Qdja4ZAodWs2wHYouFD6UtrVNYZuGvKnxgYw",
  "key3": "smVNdE1k1QiUfQL1WQSdK4XAR1BC5jhkwy5nuVCH3rFXzr2f1ney8ABscKwU4z8tdCVtWXFQkFqJkQx8Zezhm9i",
  "key4": "26rk77KkTuJDjbvMFjFNnkNNmGSzdNMQbxVfTs1Tuh1mEvd4FZEc17hAhLe7eFvA8eoosavdtAV64KsNsDLQrq7Z",
  "key5": "4TLjRevgLEgZR5dE5zRWJyWf5YrEGsrSpxEcazbF8zpPDNb77f3BPxxFYrhC8feEx6VaRW9BKJ4fnCzMA7qrmiAv",
  "key6": "4hbR6ZcBNnHraTX2B53eA1KAayYSDhozCwypbnuY9TpYLRqWppvgtLYvoCr4zbTqRNKoydYEq1fyncV5PB2hpNoY",
  "key7": "526LsPDw9jSFMLXKhJvQJDGvtGtFBxJAFhqKD7oSjd3wD9d5pKo3tULbxsXXsJftjA2Hwt42pT5iJ7TxsJJU4LFp",
  "key8": "4y63oWevAiPSfAE98TTWx1gkmpPTHGcBF5rUmhHw2oi6aQTqqP4peCZYhVnBhnvefZqGP3LCDL6t5eHVPZM9gVzA",
  "key9": "6FaGDCitquj4bWiWh3jC9PuRouT4hyC7yhQcUZwV7m37msQeK1ZJTY2tRbFSbUvsAbibFCDqxcSqjN7Y1P5UNEs",
  "key10": "3vHo3RCe4GkJhhxSbh8FSTStQHKDwcFq9pv8ms59bkmTeHxCN4sfXvkmgtuaczUywQP5U7U5vC7r1frhaAM5yYBu",
  "key11": "4gKZ5vn9Pg4viDf3UBmGDfP8iUUqweDHDSeffpdm7R5Wvkq1nqgudwsyW7GzRme7Y6P7bCFPt9zAoTCfKZk5hmFD",
  "key12": "4gHWEBJyELr4GPVQEq24F8198moPzjqfNkzzepsJM3TM7F7MDMb8Zx2iHU17mDr1eLDYiH16UQboMuBrb5mp2S54",
  "key13": "5TiutgBD28u9H3xhK8zkhhfe8cawH4AD49wiPAaMpcvzYa9Ag2HYTNVrA1ijUbEksPTKwoh4upip11hHX89tXdZa",
  "key14": "5dYmG8stnYMAkz4NLhuttPJnoYcqDNWKwuBM3eUE19uC9ygrS2nLgv1ppove76RnHigkGEdrsDWK2coakK7BCovt",
  "key15": "5c4USkG4PoEyceqTvNatgDnqYKyWjDHNQdWwZaVCNpMFFt399FUKEfrG7UvtGeuKaD2MrL1UE8EbLd8ndNyJmH1i",
  "key16": "25MJAmDNj1gh1kChW3bZWkpKygu7tz7yrvojGw75mJJ8vGpPeG45LHGxm6g2nVEsKxJqBkM5qp5bjxwYuFA6DmAL",
  "key17": "4QKe9y7ugmwr1We9oJJUQy1pyDEohTLcubzBMn2vQmLwgEHUp3duDGB2Tktxy27S4menVRkKqgXZUBU6mq1jJiDt",
  "key18": "5kJ9GYdQHYi88YUabXNJ21QDShSV7tTdZbsJz2T2VEFs15rfAwJEUAh2sDmX3gaLAxS85NWhRNmaYyCfeauijSVf",
  "key19": "5zatN8Ro6RYV8Buzvc5JnC1eFFyvxNyowd2obw2DGCVcvTftk6BaDZSgDYXPp8wqS6jKFK7Ys92cWLBdNNKzBct5",
  "key20": "2kZvsF74ZXibfk3E98LwuGmJn1XTU2yLHNNrLPf8bfZUNPFGviatSMBvxnbFUSR848hjKJwL2yNuD6CUTKnqx4og",
  "key21": "3CLpeJQnTiaRMC4zrmNhcpzd2zcX3utM1xMNcWLAaWQVXPMwJ8R3Dqx4q8s6mBt9FxiuR9fH3evQ8z99C6Fc4Ttm",
  "key22": "4zKy2SnWd53AZg4Rpxo58MPyRUuZbGpsZxnuMQu4Vbjr7xhfdrkKKqMhJywALnDbtsfUe8bij5HBDhmWeLxw9qg4",
  "key23": "3QeSqF1pCY3fT6Sr18sn8V4rGwd4hD4bMzFQFKTUvNHFv1oVBa731StFfAwxxanDz3Y1H4Rd7VDbkeUouE2V6yTR",
  "key24": "4LFPp83aMvRFwaBp2mDmiYzcMQ9pyGTVFCKWtvYdqdV2Kx7oP6NBmENmWM6k9ESVpHtweyGDp1yw3TbKKgSFuFhi",
  "key25": "2HtkW9BwrKEPMrsaDWmc34KCHkyt2zfk9j37GL3VyVhJZrhrCbkhrJggQgnCpcXTVMMKo2Gbyeckyk9DTA9bSu5b",
  "key26": "3yd3gBzrUrPMwyWzJkKsYCsapyGn1897K1zMsYt6QaGPsaw2ULoFAvzxZrSC6P3oBEuYRhEreXUAt41MxqfRntJh",
  "key27": "441N6Eib8gawbHwUuyY6mNhY7qeNdKr1cMtpNDShMNzdhtvzzTwomCM3Y57JLUp5jD5y9VpRVt6ypZAZJgQgpmes",
  "key28": "GSDX8ELUAkvy7LVWKzuHHuBvCXmvLeiY79URhPpzxkMrQcAPYQJKaQ3gniiCmwrh4ipPaZd3yPr6ws18FPzAgpL"
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
