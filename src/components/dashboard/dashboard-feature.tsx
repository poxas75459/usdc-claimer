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
    "yquSGVzGE9CdFxbQMU1K8hPt2yN21taupYc3ws5AybrCPxGHfHQJaifmWD8h7bkyeh8rJ9wszmvxMAS5tB7cAN4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44TQHSBGm4CPvQBn9K8c3oucuiitTkHxL83G8MH4PG9JKthhnsC6prQDtoAcxsGi3EwypvHxxMErzirPBPLnp8xw",
  "key1": "2h3hPRVbNUbUteUzaNKaBRpz8zQUWVA1CcPnyia52qVYQWr8MtU4KsX4NypEjiV1Pdk9XLYXtuB7YBdGKBz9JWzJ",
  "key2": "3rctzrFkWu1NBY2QC2Tbx2rX3VadULdsq4nSjL7cWX2MfKSh8kHEeYVoHcAoD6sgZy6hxK2U1xfFzeYfnEwrPE8s",
  "key3": "9AGUtshxxEKasnXoyatrXCdp8m1NxHg6yAT83dDHsdUwQ6jGuEJZndKeHPa3h2nUcFs9xfv9btkJK6VXcgr3u3m",
  "key4": "3fPAqBT6agYV3L7MGJdu3kLH8EruEuJzgrRt5FvEu7SJ7S26NAHQ9HiGLvUvbS23WnqAWs2TctijkffBdeQHVevV",
  "key5": "5B9XSg9eHC8nZPAaZ6sXQ4x2Ch2eAxbzsYm5QAtejjBwKAXZMWRmV1hDhbminpcHoNDZpRQ9SNo8nF3Eu113KgX1",
  "key6": "4KnFacWsgoTH1QWzYsGtDxkNsekHmPdp9WgiDUcQrbXkJb8M9TAAE8eqNNdLL5mQdtu8bTK2NxWVpFwwgwffi7Q6",
  "key7": "3ALgAZZNBau75Ag5n85sYjvVBPbgxTgcumMCtFsJvPSC64eiM3iqmhDTMjfk6vjrdWHphJggrczordvfRk4fTRwC",
  "key8": "3rfH7Nbn2fEoGhiK7tMU6JKoNgvQJjWrbpi2XTMJ1ynaCbEbNcQ3tTccATd1DtdQVVsGcCtKXc7gohgekZAUiB2p",
  "key9": "3qiYdSwddYwqKjXgZJGghHojUT1R8K2AmacSbeZNkjUUbZAFaz4kCqiRFxoqRkSrZ5QYKuVZApoDx3pyhtbQdghs",
  "key10": "4d1ugMaVwpgZ6TMgDhULoAejsNtvQoj6pMiivnm61xAYpEC5ZZXcsN5gJurTW6wVLNcpVKkLmxdcvikNSifoRDgy",
  "key11": "w8tDpYLM4tbeoCwpw6pqwzNoEdYrCm1na5H4dqVyvbmMMjhi8eYzQTpmz9BBzi1zpTodsjLmdrijJhGGxuJtKBA",
  "key12": "3LgJcwV8SveyspGU3yQnd1PxSyy32BJAztPS3zQf8uExVnHqw3zNnvsskCMonKX3oVqhRJsxGVQowXMwjcscK9aX",
  "key13": "3GLmEUaNZHoomJNoGjH3qDsc9UpRt1B59tyYsCZvixjCNS2qTcbbX1dMLA5bD8PnKCf93doJ5ihxhaDN2pt9X7W7",
  "key14": "3uhWTd56ZNwmLjELz2CTYWYbfENfu2UJscjek8fnYffEWDfrNS5Rg9fcPmvfNMXjxpK2xme7AvEKAvbyprMgS74e",
  "key15": "4ENHW5QnUihDnARFLS5ovJUxeYxJBpu47coUpacjMN1bBz1jK3XahDaPphnqttAdTm7QCJiitT3hNzTvWC5Add2b",
  "key16": "3TLYzBKvWt5ca7RegJbxaGwpwkvBmMMgbVayiTTttqsfJjhoUvLnmZiNXe6evBfBynwzxHYe7z7xmtnrCWy3mMGP",
  "key17": "53qitW1ZxjTcsDMgSDDMBeJqT3REgzVtRa2tbaHeJxzrqSVpfhFyHvhP4ShSTHXSCjmkhaSudiiCwAKqgmTyNpqo",
  "key18": "456m3kgnv4vRPAoNNeoXBMpdkhoGdK12Zj3ZKEjcgpWmBX3DojS3CTj2LiW1V88qq1B2F18TCpSUQauABbfCf3WK",
  "key19": "2o8jwZ5kXorBFnPV9AtPDZxNP6bWGxwkYqPdiQutgVh7Fh9QWnEEiyJk1XbieGczZwuPa73PBjeBaoYz8dMkVRE5",
  "key20": "4AY4Nrs1ZpFq5UB2z1FctKYBt9QALbZRic9yC5huChnTMPXVxFv7KDCr4cZzMpftUL9DPzEbNQXNQHSumJjtcBC4",
  "key21": "eXpPRgdV9zDmXLKTXyFrwHJe58xwzP7pE1hdPScwZR2CW9iQPa3KKpmDxGHFf4Ztqo1oXXNaEjE5wXKNUVtUkXh",
  "key22": "3k7RgKHF7BR3ohgfrNYW3G4jGiSumMu4dwa5VHgwox4BbVn2TvJ8rLsfaJsrcsGrQTPjSZ9qqpaqi7KKZRRgmzTL",
  "key23": "4RzGFfzJEURHZgrcwkmuo3gxnRMZYHmMobvg6GaEZD4JDnKrFxd3n9sKzk5PHKcdUfkPHZiWdH2TWYSw6EKN61c8",
  "key24": "5N5yDz2675Rhi6cADb4KDUreKbiqqHHiyibaBYR1kXviCZ7m6tHCvniY3S6Bf8HphWkt6i3h898nEbozbfFeUrkr",
  "key25": "25Y26L6qC4xscdbzW18wCScyh58B1AyhPBT4sdK5z11qGhuE6b8rCyBA1wx31zxzd3THdihsAiYjn3X8bZLydJje",
  "key26": "5D7K5Zy84WBqo4NuDobbSJmZkpwn9g26M2j8LU7oaBW4uYUqHcb8CtYXLMqeNCRMvH5FiBqC1n5RZyRS8G945VrZ",
  "key27": "3CQnTgv21CjbyM4WkRY9YZDWQk8cVNjcBVkeEim7aMw7o8ZnuabSK4orVNNiJf1BLXEbZmgMSX8PuAySBB9Lz2sy",
  "key28": "5TvWK7WoNavcsrf1db4H6YCGTmvGHMrbjwQPTqi3q3ekMCo7zvrq4jBDo2C2fECwCXpayzP8YLPRzai9vpKJAY4j",
  "key29": "QFBzfqrS7cBMAukCNouS7gF9f7pjoKiK6tWP7RQfRi4JDMnRnF1sQ8MdMhEqf9PeRPMb2m6zD7eSZBgRDk2ZeMz",
  "key30": "4r2W4GqQMenBny3mmEjzNLuYRD4B97KQ4nfdbhphsDUmHTmxmaBhXhLBccfoixqduX7TroRwPF9iFHE9tva6d69x",
  "key31": "4e7oVWmGKwB5ahJMyRoQA9KEsp2RVq5rWJ2pjKxS5y57y6Zmyzn2sRKzuWMwEyoWr7AmUDYdYHKkTzz6RvPQTzze"
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
