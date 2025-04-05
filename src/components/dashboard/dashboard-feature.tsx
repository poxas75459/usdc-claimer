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
    "KB9ec1GMa4LaP5zYfQZ9nvX57z2vZfTMGw9rLHZkvhJJxYe4LyQfLtW3yxU7xCKM9Fxmr2Ykqs8P3ugqu2CJWp5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Kq5YP1ei5iEN6WGNkTFAd6YCfBuyHyBkwhghCid9frM1k1CCDaR62e93FPPYxBNfinQ8DcHCadzwyyFLM7NboTf",
  "key1": "5ZLDQBLZT46XZabpZg2ood15fF6eYNVQ9EmzcZhzsUPPWXRoiPQp6ciADxQyE7LiPuNhAKhAFwHTQbnt2ZiQB3Gb",
  "key2": "2zTZuyMDYLrPUyRKUDs7Ab3KNxFJcyumPwpFY3JYVKfHbAYK5cZNNMyQPuP9256Txs4rtYQ98zvUqePN7RnN1oxJ",
  "key3": "2eSdSMbiCczJcNNWDLda6DLoVMzfBgdZkPaECNocdqujaMGSd1ymea6fD69Q5xTUZWqPJmLroJvEeyobWx1jvjCU",
  "key4": "3xxZrsnFYPNcHAJard9GDss4A38aaKvasbk2rvXfVZ4o5buwz3W6yvts5o6S18WzhDp7gT5ZmekYzpyaDAhgE2hX",
  "key5": "3YUeuwKZy6Y58V52XrGDnQfc4Yq6LgjUTqwNGcAFSh84FfjCyke1QpnhxJs9KUYKFezCxJchAntQAnsmmt7QJZtg",
  "key6": "faTynWYtMHrGjwwdFpzm4HSw9BNtnnpSb7dTPTFgyCEAAkoiHrtS7ReXZ2WRyp7MYt4Fck1kcKmHUGHdqG8Pksj",
  "key7": "XknXaPW5XhDzD2FkEEEeH3JXNSyqaowWbE2KEYMWKXuPJ3G5DYePZYtwz55nD2cgodY9a31oeZMg51RX5G49ddE",
  "key8": "5FNRdeWGEcAWbTBSkb5QqzYeYAumBw8ksM57kkCvEpr2w4b3fzpTZdcbaCkLsDfQrw9r75iLXFq9gj6FWjWCkYLS",
  "key9": "cLVY7sRR4s9Ca2XJbv3S2jHiU7hQ3o3yT3R7SCxrP1TLzmpeEkDs7W39QJLJTMD8WVfZATVQZqaEpT3o7QZJLgS",
  "key10": "33gwHm73z6Z55bC63N8sZvLwCSkFe34pZ9BbJrjKEQLBbdCKcPw9qmhUxG9a8Zpn8wG9KhBq5bNE7ECsjQVErfp",
  "key11": "3sFR8j2GvYBpQHUoVH37Apz8xEjN3Fw5XY8zVyDJXdkxB4WxZa7qMu3uJW8HC7Sj2oMffob2jj7UfXgFSfXBA9h4",
  "key12": "24R2CfZtiTG3BNaPSsReGVGbFe8XLwsiufiT3AvMfEyBKbBZBF9vaaq6W5YUeogPm2qbXZmDvAhLPkPnh51mRgCR",
  "key13": "39YCr4iwuCLqk8YxxQ9xJ21NpoYpiEzsqgRTqXUzxwMqW9tykMSJa1xbpU85vQQBuWsAVMK8TCg1ErsQQan8fuSB",
  "key14": "6cdrUGfs2Uari7fBU5AFnPujA3uX2T24sdinWg3oCKVgESimC8X7Ntu6RXoxBBUgEyCQgGeZVYnuWF4CHXtZ1gT",
  "key15": "3Wr6XM9L4QRuya1NVehUEcFHExNThxHdNbK6UWwDSrGBT1SPmLMDqg6hboQSkJVbSmAYh2NWYbFJjAwUX2YjPQNH",
  "key16": "3BxHygopjCF247GdVSJHusXxVA8KePH5ryeV2dsrqV7zEbSPzZ1ZAYFRr8B2YQSoieBGWw5BvLrecZHv3AtaKdb9",
  "key17": "23yvMmAWQgiM1GSesoVrQ6NSPzqDe72n8zvER3VU4hXcUfxktuSTUMYqJGXEsm8PtPuzzcJ44J7vHxWfuambHuJv",
  "key18": "44ZLuznbrGmWpNwKa7bsen635JvsBq1eyqt8wQCmYKtojxL8WSXje8d2N1QpE1AE5UzA3HzpncGKyK5VPNjNeXN3",
  "key19": "V1QFnqxf4Yz3xCPz6MnmumngS4i78SVPRrxrhstnEjRzG3SVoBGAqD1tY9HEz95scmeZy9RnM6U6aUEgToVvxvs",
  "key20": "KvPu272PL6MjcHNU3VF3Q1i9sXb6Hmdkkw5Rm68Y5VurzhNAKLNRmRy8XGFHTk16wF7X9gDrPTg6CTUKHaoFZkY",
  "key21": "jPBFSu1YJ4f8HP2HC5q6Po3BjWPT6HBdvoBjR2PrphdtmxH4ZmHqpgxmK6NZERkL7YtDrCV24RszPgb7gy5GM5a",
  "key22": "3GMajtYB8egBhqXACi1qV7LSB5PJYdqJGBHRLMLLqZeupmPwevuBqgYK6Jsnw3auJZvgPK7QojMFuTdLbBEaRdeW",
  "key23": "4dgiy46bacd17WTKiUT7kETNoHpbqykhwMhsUeM6JsXtDcgLgmpNPkmwpCKqAsozc5tSKif5ZzsGAwQWPFr89pbv",
  "key24": "2T6Rt2CSFaVEwoW3umbFyHGRf7QWVyqqA8U9gbaHbTZXWK8mFe3jE481RAre6jFLVBiQnSpUBCM5TS3sz3UaZNp3",
  "key25": "4N6wLv4r1ZT1ZZGHPE9zub9rDN4XkaHyk5QZbLYG9ZhXkUZqdMBWNSnYwh3cdAez6KzmLVeaiNmDBcxLS7eVYAKV",
  "key26": "4EPTqJrfCLtDT5coXqgDfY4X4689Pyv688EEn2BRVDpBTBsmFpT3haUyVyGppkjtX6DA8ozxBgtHrRTygBMN6LVQ",
  "key27": "2KMtbfVwF1veCJV3bNQwRZgbyKMfxk6yanfqAbCsx3ou1pH3ag2PA5bPspnGTkXawrKyFHmnxZFhFmn6aBbuLcGe",
  "key28": "2B5cr1SL7S8L8sr9Q4aXUgFzLyuMv5FjzS7eW6TpMqD7meqwApdaekdEGMYFADVApt58bzAwvGBM1nBdoHbrdv4y",
  "key29": "4v1S419Q1VJtoZpenKY4ZmDoBkJAiNgkhYhw7fpKsH6E4ihrdpNBqahEW9GTk3hPdFPAcDJ92UN2zjhXEJyG7EjJ",
  "key30": "4Jw261FMegfYU46pY7VWevapKjuSqV6bSm4dyVL8GNoT4U77nhiRNevAXE6nuBMhyn6T4svPEUZnMa9SMTMNvtDx",
  "key31": "3YC25VLWgBoCU3ng25VzHCcRnh4SYsGM1oozQXc9sjU5DEaJXpd93jv7LNSWJyrH9MNJA4VrPsv3wrkEmbNoVdcd",
  "key32": "91YxwBQ2gLgiRpMsMiPhUmiTRa8iEYPatj4oiSYZpoKunjqk5QQDSsDANCkMZTWhkCjWLH4EgdRwJFpyTozXYMf",
  "key33": "5cP57PUAmCek1Vqy7DkeTbRUvJsWsHXxGckobgZxwik2W9PXSQsPvSatJyC6EwvhSp5xA8FxgQgc3U6a8PLpUA2M",
  "key34": "vqeKu17XqvHCfG9QbZEqZJdxEPGSiezBwjUG8gj3fgH6Cp1gJ3fbCTcnjUTCAW8enAgXi96g1TgvN4ZtduYxUdX",
  "key35": "4V3om8fMYtnRs7SWsZdoqTmKoMcX8fR8G6cFHxii9HecWHkPud5Ft3yq3DSY2vWzz9EZG8qLHvKZzDWkqUP4vzGP",
  "key36": "2KP9v7AzuTEc136ZPLvi2aqCpf8btFgDtRkujEeprv7PwTTwr6mHuZE6K6XcG4Y7tvsCwXkSiJJ7SNLA4vbnqUdG",
  "key37": "2jcQ7LdPGZgdusw1SvFE8jKSwiBzczywXtUFBvr4uqBK279e9oUriPgoM2KnLCEz4rWKS6tLumwWmyt2PCuuNRNL",
  "key38": "5d79Jdu16kE5BRsAYWT3GYw4ceEYJJ8Q1XDvZYJdhfkNmdm7MKGP55eN7431iacbnknTcx1dcsbTK49uvU2MhF7k",
  "key39": "Nkerh4WoBncv9auwqoKvNB6rs1EN3f1UZcSPzCoKctiNR3QUpJ32zx6T2WWQEq6h29iqT6hfNyNWLtzT34be94R",
  "key40": "49PnGmaARuwmW9a7Z1H3sKWyr8oa72W4YLYSrXbYEfo6Fnn6nvkacFfWMP28B2RuJDp2Ycf9bMMUiu3pwhpdxm5R"
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
