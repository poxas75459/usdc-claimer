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
    "LcVaC8dHzMxAbaTyggccFgisVrAXTUzQtnh8vKxZXfa1hHrSFNpdpinADQkvNzoNCx9vZ4f8Kmes5bnNyn9zsRN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58ESjKT6AxjJTKmVCbZqNczhtoN9U9ShmQ7mQZB9JCoTZChv5EPnG8YU7QADM5tpmcspnMgN8bwir4qKXLGcHp9P",
  "key1": "421yBnuegjU6rBqkEmsn9XUeF1zaXYAhT6L5LKA6ysRfcfbHgKc5TdZUF2amwi57WwHoRuQthQ1weuJNH7NEezN3",
  "key2": "Ui4i5aQ61FbDxFsVhxHkZrivPZk3J6SeaAMZ4xma4462QL8RaY2dwUNAcFnv52FxMu7jkgeKKThLxNE6Jm6nEDu",
  "key3": "3tNvd7kVWT1J2eeXfGRvfhnTfQw4uXeJHWrPDar4DGkcJzy9BgHYWejybFoXZC6iD2Ag1WJyJRDBrE3XtirtASdG",
  "key4": "4WywvS2wg7x9rYZbNnqX5fk2uL9K8FitXLtsZ5yZv681yqJ34UPk2AtXYzowZSfykQQn7JEVatX4sJErwE33onwR",
  "key5": "2Thd28nxiPA6osfAN5h9VkcLTB54LMjHxE45h2cRnL6GoASq1GtGCrikSb8J3SJjP9DHgYebXDJJR3fnhbDwAVkn",
  "key6": "5NMfKmEsZQw4FSBwRCqBp5qXhhfiJsru19rE5uN1jhWgadsmfv93X54Sf6Q8FQrAnKoyvvtXHr4KoeQcodxCc6dC",
  "key7": "2UcqC39vhhTCE77F4xDqCpr71pV2pzPDnRAfPsg3a1Q2nXhY3yVhsFxCP3jFoTmanYkZL7qGLdBAPpfuu7ZEac8C",
  "key8": "3wDVapVwvE21ghWe7xyhcQcmgh8L6sLEvNWW3x3j1Ek8CCPSmF33FW18EAdY9UN9gykDQbNN1jsP3LQiegdDw5QB",
  "key9": "3XAu1vb6YzWSUpHoK388bydcyUuemUkhquvARjJ1412DogL5hsqbmH3NLAptc35JREABDJmrLgoCc8qZpDu5fQKW",
  "key10": "4ofKmUxaxChc9svCsn35h6mdNuEMC9eUEUp6ePqFzQZ82Yg7yaXnm6LrSFXeRUW1eAatLwf137zqqdHCJA1HdsTW",
  "key11": "2NScuvJaL4xJJNks1LZgRQfzXW6AshBYQEWe8FzB7k8YdYi1K9vgmC4A6Z5fajKe4mRQdw7KcaxdrFiSv7Yi8yZ3",
  "key12": "4Teg6D5CvwSYBvPnZSHy9sd8eTbcUT4NCJijyGitrrupeW7v615ddExHkhittuhXWA37FtgTncdnTUxMEo78ePPs",
  "key13": "5uymx96iMq7xmKnUL42zCDLNeoN6H5fvmxHJmzc7eYcEeyU5RgRVFyVZx6EmC28CPVvb8vaF7dbYgeodXrTTEYsL",
  "key14": "hipdSwVQSWugBFA34m2TYkdKFfL7hb7m6rtuviVV16VL1Sv24zepwPrR4em7t76pfPcp37KFZoZ6SCmhu3FcWSZ",
  "key15": "ucEfJVRzdSmcc8csUj2Tym52NpRx3WXh3KUd3YejoY7Vs1rWwAxNspm7fdyHzQ43PnpRVinQWb1sqxdgcwxc4Cy",
  "key16": "5US1xfZ6QbKbHUaTPqD4szywvb3CpTV9ddf7RdDev5CRr2fAGbrRbjwwgTCh7RXi58Vks93dadD54TGiB7nNu4LH",
  "key17": "3bvE5dnJrQvHfRuQHrnnFSRzSUJcsHauk75bhwzh2jttwGFyd3rn8dFk6VvXDY2oP5SsqtduieWFS89KNR63VYHc",
  "key18": "4gRg9EahydrhanNajfDm8tCHwxmJssafccYZHPRe9koiH5D44Ukw3BbANQW6ceBoNHxiQo7M4WUL56UoXYuRYYbW",
  "key19": "3FA87mBNKHgqcqBJLrdeKqup4MXbmY5rTd2S3K4Dj6gnCq28F8MuuZgQXnTtu2bQvPYCUMsqgQp7RXptcoA27ypQ",
  "key20": "psFGS2dSLs7Zmwjz4YgT17eufkY4YpCKz3jfy16VCX52H5uNKsdeUr2VQMbW7idH2ZMQ32VYb4NymwmEsPSFATF",
  "key21": "2usMybf4vDEoi3MiaCDf5giGUHXwz1axuP2DhJBF3qwz3reiZ19qTJGiRHonBCF5BgvUxt9iJd2V2wwmJpJWeLuV",
  "key22": "4idaNccM2gMU72oygaGM9xBTTCTmNEbNUGYEEo9QgaY5ociuWQzhXtz1XSTWsvoqHUeWCswUiMG4Tm3J1oxQk2WT",
  "key23": "66cbpAcTVzR5AYugxdPD1Dc5EG67m3W8ZSpvSYCYwzKnDr8GyLRdsbkRog89oupyPjwWdBesTCXSUViVQMTm76M4",
  "key24": "5zodnFZKhExswREaq9y13xarb5we1PSMTKgq51Svyux3jM9MqKryo7t9bMDAsXcm7dAKTbyfk5yzZFTrMTHWFvGi",
  "key25": "2XHyPNwEA2JoVu18MvELwRYXjB8vf52gbM9PkDsn78N5ujCHfp1mvUphbJRXm3Xw4khgkqvAUGA83J8AAsVbhK1L",
  "key26": "5FXkXKTw2AiV2eX36T3tdcq7coKoEVvn8drWCyfqihPm3FpcXJ3Q3Gxx6Nc7Cnk8ot3MSKEH8nbimDg5kweFCa59",
  "key27": "2eP46GP8kWuNoyeknqYyRqSZp5VvoBNfzsQVMDMEK776dG57Ve7p1jTNxCYCFme73hGpTZVBHKEtVZ9XUbG453HJ",
  "key28": "3qvrmQ5JqxQX6GKzVySDUDd5JzkS4dyhTsWLV4vdztj5BMx7waTP7obYTYrRdP8SgCysXePxFFrDXU3wMAHFswKe",
  "key29": "4k52W9cbiEbEn3SdRpsCSFMFibUduXzUTufajFVnjmbdxwZVsiaBncJz6BFvFbYG7dEFBhjscEZauCeUyVFMjsxJ",
  "key30": "4MBKmUh8jbkG3Szv2KYoZhUmF53vkmmXYBFX6Z79Dia8CcEkozPqtdAmdmNpXmUTQmstLGWyqd2GYDwqD5YEotRc",
  "key31": "3Dk49WjPWNpMBxALwWWnUV2a3xGiaTukWqQYFuDrTULiLEM8Ng5x5xBCrW6942FZxXaGFHYBkq9SZi5rsZEpwhwF",
  "key32": "3RuuejGe9KJWuMzhjkJv8AEk3uxbqL2Dbj8fJMpocnxj32aYDB7zyXAmeZNHLS2rBPtw1hg17dXczD4LopVdxiyj",
  "key33": "5cixjczVAnXZSoM11jU8guJaD2sfTuBJ4bLMXfcs74qtvJzmBGZ4SAxRhKg7jsFTBLMpKzeHVJjKvYZ61znWHu9W",
  "key34": "qUwS5SafB5AWzkHxQh6hp82pme6gDhQLn14cS5wZMsSyS6ULg2ydEe9VCEYSBSBumz9xGpBkBov87LpGZ2H8AHA",
  "key35": "qA4G5yprYbDS7WzYxKxTvupZazHQizaGNLGFYYhtjwDdFu8UtLa8iVKhJbTY6GFWuh5CjY7dYdiJaLCX9vzAWyv",
  "key36": "3G6qDLtTaiKYifQDC4Dst9pKAu8tsHFf4r386rArMwsSvKLxzThgNtbvHvgj1N3bP591AbVbDJ6QMs9x37EHjGMo",
  "key37": "5A5R7W3x7iTeeRVwT6DJanTm6ePfsu6GN2L1v92Ed2x2dQMueHdE9u3D55Nxz1J6rEp5YrGyV2Ab88bqvPJxnn7y",
  "key38": "8b3JaHevozBzuhaVbmx7FGEEtRcgvETBmPj559KkeGhfkthDmK38UL1hFVfHUViZdDKWSzwaDcExwVMyZGEA2n7",
  "key39": "55Hm83GnzmyRc8mZwNngZckwWazeMRSDrMsUgRCH5pzTo9UCycLtVZFV46LTqYsRVaTbpfAQC37Y7ox1RAYE8LQm"
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
