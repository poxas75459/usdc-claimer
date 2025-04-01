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
    "KeWZKLb25MFbrbuYgXvX7iF97SL6u27eSEwxb9Wtd8bojwHtaKuz55Za5PBNaTsAzFkMiHtrZ4dgjTDJ2itc8J9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nCaXL4iLqtdYBdZvibYLqW1c7LucZsE71Q4c7wV1oeK1dWkcymPtD17ti6orSehY6nJgMDxAnhJuZkjKn8eetRC",
  "key1": "5wPpZZXkaY3PE1V4a77ApKtZZBEwfhpMK77gdotfAZPjf8UW7PGhrSaHATUpNhgDZjC6QZifDsJwzviZWMkrBsdz",
  "key2": "58keZsytp3WHuhpPuyekuwPKNqAx3xv5BLJAvzr1nVf9g1ZLejddwtvKmMFRRNikCmwcAE318Jy9AyGxFov2aWxG",
  "key3": "519FzwFra55E3EyV7LcBX3yqFbGhdYjwUdVod2RKw1viJsGsyEjvR57PQwWXSbPoCSxsJz3b3txsYjyMHacLpUdz",
  "key4": "WdMxUsDxsgkYx5Wg3UaZio4MzBtz2rVTJXgGDwnQp8QjAHu4kvpNiDZg7TDh4d9FJe6oftk7und3hFGqUTjjKJn",
  "key5": "pcnRxfK9bZtwjvBuNYtH9yrjBtYUECimoNPF32Nv1YKn8WU6rd4nXKmEgcEZWvGyPNwPDugL1DJZNi13fmm8GK7",
  "key6": "3A9FWv4FNKMhyU3oqwpdVVQEiny6xLzwJ1JQFzKWfDxwZrUxcU4KrgQ1NFzTRvZvw2qBRFaBZPRTrxESb427nhMn",
  "key7": "5V1o62JJU9R92jhcbjzcRXqFGKK5MWf7dQp4gqP6qgmCDaAHrBcBZyzywefAkF4PfMav29AQXBE5i9UGvU7V66om",
  "key8": "2MvKHcFyFRpJbE99Kd3T1vGzkGSu6udAA5bbX8GZ4EpXza9Q4knyZoNbajmxvjKirbhm35pwczZV2UrCCykjdiXM",
  "key9": "3xFFzcv8X8kZJVxwGM3qNe2yWzXwTC17moTiQFMFZygbS4H3ZpZejL5QRdTj88w2vfRcFeTC4j9ntACubQb2P3Xf",
  "key10": "2oGoaebq3TyoqTfZ9zMCgJWpRhJXPkzz45ADvQRD1CBMMPHmDFPB2T1rwGyXpTbrmuygyRBcXHCZmsxmxrWBxha2",
  "key11": "3KgXGd2b53nYf5J36isJ5eZfK5D6abfmhhV5sYBVSBG5DSs6qvwYxsk4vonYXnJg9gUavJXbqAjC7aSmBHhx1Md1",
  "key12": "VwC7gYzYjQ79gx2tpkaTSoQoGx1TvdzUVSs5pEaY86V5GYVE5q32c5JwfnCcAsFfNDnjH7Y849S9KWcrSCW1LiH",
  "key13": "5p5E9H8sVcyexpsBC3hZEpDqT5agn1bbjfLWjazzGVFggCmsu8a65ZkpDroDG4AG1DxQEWqu974WcFZBPN47WEP1",
  "key14": "2EPhQoW6EriJNwvFRaPZN7QRozAruXr6FpqK6okDQQTsmESYygN5BTxDFpJuZNgiJMwcGJKrh6HpUAMQsQSXJdDy",
  "key15": "57RkybZdCSm3UY2QPjGTEHe6BqJundssDPDegxaktcSKDAd7xYAdHV5CqTpAqTFhT8DHtmAm7UwVG7rqNgDBnxWs",
  "key16": "3WG2noz8kyRDWNrJAhXUwf8AbFN7jb8LsE5mWN1UMiFNDY3MwJf5EaeoaKWGACmcLV2GjJemmJ3654ouNFbBUrGB",
  "key17": "4AbeYvrgCPGTAo5TJi8TZFHnWdWQT4EaX4mq1N2kwTLTbuMhP8y3qMhn1vbfU9V25rrt9o67w45wsFq4cBPdKoSy",
  "key18": "3aFEh995bFMAzMDLbELDtEC16ogVVzpeCzvC4XFyzuH5qy6yxfUgKF1gVQ1y8t6YyqhmmkBjMJRgci9iVf7mZjib",
  "key19": "5rf26wGKspiLXCLzaNd52BhPM2qSz6VajYS9GMu8gxbeTdbNHL9eCcmscWGmug18jfAmxzDjTba3nCH2ekmUbgRw",
  "key20": "43U6hWyMrdycLhJVkvSL4JKUuaR9qQGFqAfcPcpvBKN1F7koUPJM79XoES9vmvCmvT6kbMrnBRwGkczkXU3nmFYJ",
  "key21": "3CDyCXrzPaXjXh8PjT3q29UK1oBqSLQHALpFq6NZ4tULKbycxK1zAwN9b1q1n4W1r7sAWQ7EKxhrEWEBF2LPFfWb",
  "key22": "2e5ARsU6fh2XW2RczJjQetEz65wi66XX2CrqN3QmRt6xdkvRsGHe6vXLCjEiueJPKJeQsXUWL2WbH92dsMLMABob",
  "key23": "4ngqESnUwrSgBiCaiU6Hyo9BD1M3yir8W4aQieZG5maC2ow5bzg9FDyvQfLnmSQ2UqwBXB48YFGiwfVa4UbeTwUn",
  "key24": "3yR998BJBS8Vat5JL7kFrPHhzf7adq9m1KdvGvseQJXNiQzeioBVAiSCbqn34SLQU1h8AsdTjHQ5JVe82MWSePop",
  "key25": "2BMmro7d3kRoLKS88jCGaz8q1iY1b4LDwjwEdq2xsywUJzsDt9cya14cFrd2jhqJhbs2xLHQjXazhL8MeZXoPVc8",
  "key26": "4NY7LocYycdsLzi5XNAnv43EkFtfNL5pZ3SnxwHSBtpdqEoqpKHSDV6VM8YoQonUbmkeM32cuCoGRnEUHqBz4Rv2",
  "key27": "2AcuepJHwRnMcPM9LukAuNKvN7xp79N4Qr2Wj7qcwkXkfGSMnU8SLiFTcSTYVWovfGPXBF9YGL1KDvsFdR5YeXeP",
  "key28": "3nAtuLUP4qC4YvDJC2ftNm8XwhaWjS6N3S46bJiwxdiB1tYnxiMKYLVE888FsMDdg29E1nB5T1S7Tt49J4rmCYPx",
  "key29": "2f2BeKmSSRDCuAkiZCCaVBTSXMid1r5g2H5NZm6XWRvFVDMKrq4G8SfFJ7EaP7zi13Dm4pCj9jMXknUiUGQnP1L9",
  "key30": "39LMRYn8pYWVoPXdpUAruGP4onoxqDNP5goue9uAbq4mFwMisc1ar8BgBRaYrQ7iwZV67keWhPtw4WCoFHE4V53",
  "key31": "4UJQ1ABxbLtPQC9UZ1XTutaaTUUJ1TE8DdqWKgHXhuiWc8mLnAj3Ef4U7ds8nMARvyW7wj1YAwnoEEHRtHq66WJZ",
  "key32": "T85g2y8RCoQUYCwv92ZueqYnCKV8Xr1Dvvjj6P162qNyabBQvxzgofMJpx8KdVifVXQAFVjaAA87ghYYEBXT6gy",
  "key33": "5SrkYvFfv8YNGSYnvcBuo142384MKLNXLse6kLCPnYK5uHb7MFpfcio31tMjAmb8gJCgWZkQxe7M14d2PDFZiRaY",
  "key34": "3i81pqSnZYGjw5bwXnn8n5pbFp3fVQ4tBjfWyqF6zp8LLE3MLUA2GKY9GWzvjC5d74pbMEt1ibRLf8CYSUEu5fin",
  "key35": "4enZBctj2xH6qYLZa5KpCFpG5zjkTUMiAmVgP9R3Vz4Wzy7A5nCS7bdxcGBTFqbNgcjb9rA9i2bNtN7BxEcrCTZo",
  "key36": "27XuShZjCZc1JZxdXLod72Sk6Kzg9JMPe3MqZgorPMqx4GvC395ch2ue9gnRA7Vebzo99pmgtt6sPPNhjSyLixqd",
  "key37": "yjq8TovKcKWkdw6VmUGiaGDx2kpaHTTfaEn9sBaVgDTkWupoUZR5sdo8CdQuy3jAv2cTrJT2Jx7xfZ8yZwrTavg",
  "key38": "3yfcyUNPz9vLHEhmwvH8qCmJXZHCdJKxQEEn23mgN4kBdy3XkQCKa9iW2U6WqoJ6S4aVQW9vjK7c4MLz47iartdE",
  "key39": "2TLqqMDzKDLeRahj5dexHtpyNMvZXKwWN6c54ff3tPhwj8w2c9U3Lyyup5Y6RVKXHmrFtVjs55b6sJ6Ny44ApCRK",
  "key40": "4z11ednwhWtDVzpm9Jfc3gS3USE4jrJGX3yuZymG6dkQU76ZBUP8XCPfcRXWJHpJ5QzmLbcQSZrx1AkiFjmtCW5Y",
  "key41": "3F3CfXu5HU4gDDb9hznsnKv3ZDJDz2uAS8huodxg9uxoNoMFY7erZuSNCceQHzYRNbDJyBGy51oT7F1XWxv5mUnY",
  "key42": "2Xi3m3YSjp1HbfHvy1ESNx64GzgpXuyQHNho3UzdbkpBarB1QEsrhYLsxuFj6RSPVsvBchvSCPDu58iL48j8GDY3",
  "key43": "4UmZQToDYDckDPYukDE8dDHrSy6mJDW4VyMJKEQN6Mn57DozxGheFRvyyRyhxfLDwjPzKx2zwGFgd8qgiAF8Hhw7",
  "key44": "GxZ7wXG2pPrFDJtSimMaNvgSkNDr2utPBbaR8KFiNiQ4SqUC5acJpgkGpQFE3J5p7YULC1UPmsWxMKZMjpVDwpR",
  "key45": "4PWq1fGjMA5AmhEUCiqFdT1sXC6yzLkiLgYN6W39d9UVDFFcjVyzMJuMrFqdmqgYweo6m4TAmtgTamfeEYLm6yAk",
  "key46": "5oBUC7kwwnDSBpPyoiWeyHGWPgCAbLq1K6tWV3yMw8LfnkqLZowhSViBEb9R3zmWJvYDEzfnNGPUahk3LBqj6WFj",
  "key47": "4gTirmJEc4MHBsGjJk1UZjbWnz8bVQGScYrU2CcRL5spKH2M5W4rru7qpdo5CP1VxqyN2dG5ta57wmX5Pfj7i8Qt",
  "key48": "7idRq2JKVYNVy6ZfXfkQjSNrp2stxqPHbANFCv4g6htL1AKTxP6iWFpdG5zNH7FcrU8Tb2ESeMxZrKhdX92HpJU",
  "key49": "2bQMouwSMemUpirQp9gDfEajmjExA7bNnHZffxCtKe1kZTNpzHH4caxJcKntGgiKNhvX7etq3CttbLEfrPv9Wi9Z"
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
