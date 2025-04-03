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
    "2mi7VQNR1yLQzZyRNvZXBqSKEjAoCBYBRt8JHfY4GfJa9qV1HMQHfjGi7yYSQR1YoBfbnLwxafgpDEKpj4ESnNyM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tsetozKFRkk9NCao71nER49n3M1m3r71nvVgU8AwoiWWPju454RTLww44aULrdKiqND9UR1o85SKqZyj5Abgn53",
  "key1": "Jv9NWGom8dtT8TAS8N86WGwCYU7xXz5F3wXBFSjmKnofYJiCvSUyt9XXwkhDXR9hCKV4j9HHrWXJfpNFU56TfXe",
  "key2": "CBtaVsSSuaqmLQcfZRakeM768ZFhgmYSv8vi5QfJY96jixYUSs5JKTieWVsxjofkDhv2usQDhFFFxo6UAnRzZbG",
  "key3": "64pwL7TYnbUtryqdYpkEh57CKkhgjb7dtyuDyStEQnjHsAhgo4mMvbedg7byJWPfxCgw2Y2NTEkrKobv8D7Kk1u5",
  "key4": "2Cc3sNUGmtuxk7NZxtQNzYz8pZwjFHFzPfimknDYsMWnHwVCCSdczXMSxePVQL7JYDuCJ6ZYJCE2XjVRHGKs2nBm",
  "key5": "2bzbvBCXxdCXRevSmGWiheaMx1ibu22TpDZiXQi9UE9qmJ5qX6gxSLDrr5rj26tfHP8tcmrYqZdwRWtUTX2TNqV9",
  "key6": "3Z2Av5SBUNU6SZ4kZeNnA1LupdsS6NHQsMiNU1Km5nqetfpx8MA8ZchT3gwE1VJd3Kgd3scT72PZuvqH7ASshgyL",
  "key7": "2AzEQygYtBdLpzLSPeQgSgBKbKcsKwarfGB2rARBkTk3vfATNm5QtzKAxSC6EQtAHfpYx1fAuLBAbS5mWZW7rXYq",
  "key8": "4WE1xwfUJVWoQQaEX3TTprPTBh1NLaSb6TV4BG4VEsPnq6xnh9rF8gViu887KVg2B6c2DTpy954STYh9vmmeNr7h",
  "key9": "3hdVhcW9g1aGrJSvqoSmx5Eb2tjcbkq4wLcwT7drdzD3vsGP92sk1mJgm3Gm4rSrsTuuyGkg4RqbG4k96io7tziA",
  "key10": "oQNP2LJt6Lu2ZPbfFDt6it9cJVGE6qCFcPHgiSn9ZLveC9piabonj4ef2tof25QuiGJfVgm15uTu844hDEJzv6Q",
  "key11": "3kStxACNHuVVkYjHvo7ddMoTEWnKfJ5kVZKkzR4ZuJWmZZP6utch23M2xpAgZ2RUbhChVbwntuWXWHbVZZ9T8Bvu",
  "key12": "3waVs16qfz5XGTm8azYYagjGR8LgmvmKBtUX9bDqZXCsYvT9rvtBdWb8Kw46bjeSDSF64KnRCAdexLTDJjG4w7Ki",
  "key13": "5udxCU34zGsX17qwsMMWZ5SQkhxjBJpVDdEcBJX1LMfpEeCoGRAmgDYbFfC3TTUiucNL1mF1VYbekE7vNiA5ttXn",
  "key14": "P1o5x7349rj4gqzpteDx29Cj5bVDyamycYArTRiB4dSzc1jaPvy6nWT7BrwVovTMGpKMaPRxYsD49SVnX4BbuB7",
  "key15": "5LAhpJyZGmj5DbcigWaYhKY1sSndBnR1iABxfSJd8QsyKVwDov5kLm92L1dxhmjABJK7xTPnw5SwB78x9p4qbZZb",
  "key16": "5buKyjX4H6onyJk9No34Xxc895wBenYF9Bv97izF6sYzGfEoVKqETfDA5ack5n4Srt9HNpBxDXCmNeSewDQXte6A",
  "key17": "5DUapoZEebzD2enXnwgPGTiFuh4YuDKeBo3p8uT9K8eN6SUEGrB6RhTQWKxWzcMR6ZexrX941fATBECgk6SgWjhx",
  "key18": "LnK44PxxGRmsiuN7rZFzqEHFvSPNErmdsqNfEKME44yaHmxVpV6o38bD3c43DbtsKzrHq5FCX55bTbWdbtfHawB",
  "key19": "5dqhQtmEzvUAfCcWfSgp5QTA3bv95omggtyC4GcKcyR1tE7AriTugb2dJ51xBrfFQKJvGEtpXpWR7nRWsMMQ6szh",
  "key20": "4XHQWcQjr9H4fNzWGbU1h6LpbMJoEhTRG835KzGhjQVHn19tTHK7MQn4XwjoQukd4mCEaAohY81W4YeL8DTzMqy2",
  "key21": "5Npm2MYw84AHpBDdzzWZrPf4i2vdunZq64tbfEb3rhZnnMtPT7Shcpgcw1X8Ayp91xahFmzqafvekkLsxqLhgGY1",
  "key22": "5Q1wbP2GfZTn1zcntXnBD1DqTTtS3SmgC2zXHVEffJ7RK6fAQqScrYVvxLgQxVPrtWC2BBF1feovKG6DUGryYCTo",
  "key23": "54KYdDbinbMQVUeWXbHYBX6ZRw8j6entfH14zpBjTVqUPfGyTLvELCRaGhZ31PVTSQp5WvZje6HsvMQ4awd7KkT7",
  "key24": "4hazimPorDU3a6YNPKiWYotjF5nf3Z5rfcdQkF4BUffSdTfNmw7EvEnLDTSK7TTpmAQvUCeJhqoartA9vHEVYAE",
  "key25": "5nnrNiSLYgeuvEvcsGAh3fz21AM3bdhn1W6HM7iJSKEQH4y3A7PMXwmxypowK5qxDm2PhvCJsAbBwnV4z5Yk1kaq",
  "key26": "4Bv1PfZ2Q8gVXzU9zBn228Ut7QbCSeEp5JnWjrz1Sj61upHUUZqzKWcuEftf7YuVcy9P3gdi3QWNKyeoZzdAz69e",
  "key27": "2yf1bu65XdMEe9pDC4MhBm3oAxpAmDYCGpU5yQTFjyvrT2oTyXsHHHL5utrDhuKQaCYEJgNPnYL4MfFgtvrSxyQZ",
  "key28": "zSfdqyYfqq6yDuQ9M3nRasaSfgu1wAckzzGWTrnGKkeNfYhrrwt5QNsiuTu3rx6chUHzTx8N84XQWBEzP5NJxgL",
  "key29": "5ih61qz9K1RbMbzuc2JNRMTBKGbffmUyQrYyrimHTsEQZvWShXK51mnDYx8BuMXz8o7AjHEA9po8wExT8CZ66FxL",
  "key30": "aMbMk7dcFHJN6fCxpr6YLVxSDSWKA4sAyd85fSt9qyVUB72LEEjqAaLemBM47j9vQxhXNVGbGFqGCEd6BVf4uAU",
  "key31": "5CdA7B1h7g1WhVpu26Mmg4G9sGKDCA3nDixUpTLa5BRBegvu9UY4JuUT37bKxeSme75KXGMDYDoVWx28yQjqPE5P",
  "key32": "2Sk9He7oX4xZC5v2mmDDvNY7nnSwk8LK9yHEfXMmvVHpSPQqbxSehPZ1QQV89CWu4hCzeshTUvL65GfM832HMr48",
  "key33": "5cVvoZAggC6hrmrErcUMJt4jXtKs52fcPY5N7DqhwvsrqR7bPUSbvTkkc2cmV4yHQooavTgvmSPmmiPGS1cyuHwo",
  "key34": "51DE3P3o1zjKkuQ9vskmrEsU1rf9sES6jdXdzSPtk6SVfMTCvNU9Ur6cz79Zh6qcfndCRdRKbvf49TrSXbdwvZcS",
  "key35": "ejrh8eY9ArxdAx94w9iqwegnF5dYUYuxeztX5WVYzjuTNgvszk5MvU9zEqbmkoDsNJDccbouqPaphJkZChurfhs",
  "key36": "3hqL54fZwxcfgz79JMzEZAf5H9QjVX7472pwgCYR8oE7GTkCNYmQKQduP5AXbZyttxrJKFf7DQBbifnsFbFazcD",
  "key37": "2qxWpi1DX4FxKuEqUWy6kqypHidz9X5WxgrpxDj1ZYs4BAjoUvXEdeNK8QCzik1gPuk88HVtDFHNUTQrLcCfPbjN",
  "key38": "po6TDGH2pPmjPcSmRubP1a1oYjx2mzyDBFP9mZ735ibBRATSpW591BjDGQC8sfATd1vLXUV4zMAoxXQXRTY1yiw",
  "key39": "4zqkUCgq9rA1HeWHLhddKXmqGyLCttR7dAwNCnT5qP7eqGoP7qkSSV5yrPDZKWMuXXNP9ybDx9tqiVuSCRpjBKeK",
  "key40": "e4sQ2sZBZDpAQNWs9eLXxuDygp13zePQKa2txonMxC4D9689emTEBipnoTHApdezVRbJwf5r6bhKT28iJAmTMGm",
  "key41": "ezJDk7LmVVAWsQoZ2dE1mJm6jLT3sHxq74i9KBNfS6w7SS1WqQ6KC54rhZaEo7UYGVv2Bt4zahxTsn6LEjhruc2",
  "key42": "4ReSzXGyatBgUL73spn6pBc1fiTa4r4GxAhQiWEWEDBQq5VcRu4Ty97dHiLBFB4umzfKsVAt3XaKXxrTRja9JLdr"
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
