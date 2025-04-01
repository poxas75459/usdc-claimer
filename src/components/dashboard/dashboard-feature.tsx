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
    "4qJb59D25HMJUgatX6aeWmtw4XtQrwbyrRKpv4ZjEfptKeS3LV9doNi1p8gm7bebnpzpxRsrihYukYq7CFuQyP9W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6JYAF2ckZzxbgNNUTgThBK38NzUkegFxkuhytP12fTnZqB2Yy1uLqxyTMpj6kN66WV9DREj8dsjh4vKiBYt5hQA",
  "key1": "2mupxrTYUpGDgX4GLDNLxyuNvajQ3u92JMhZXNPtWyNHdZucKqk9FzhmZMatXgt92mBwCdsHBMcTRo5FH6d5iZhQ",
  "key2": "pjNiknGX87hwGMFr3Yym2ptLXQmHUsuz467823MP6oaNjwzV8CxnnSovaDstKuQzSiMTi8axRFhFwaSvx8yTiDZ",
  "key3": "624xNLrgaN7ZmB7sCHkKe8c5M3AWKjNmuSqJSDy4QVSCFab2eBP4hd6fmvP4Zwg29X5kmtzBynE5W8nJPLTNeFBU",
  "key4": "5QZV96sj55b8E797L9jw5rbjyxvL5vS2Tm8PmWvJsnE6wn62oh4iSXY1CgTueQnaSsCRcs12717KBpPa3ar7hFuc",
  "key5": "3VpZVuvxP4fCo3bru5efHSAkjw95z6V1ESeofUKo1zfWLEvhLK2Fs4ozCUivubGsMQFL9e4hPxnBH63eYBxQhrHz",
  "key6": "599z2e1xpg8hsB9iQ23tm5FdDfQZi3pXMyRvLU84hTTtuACCjwyyLr3xVMiGPnrS2p7Z6r9ej78X61wQ93vsuMFn",
  "key7": "8QvjTDMRjPd6rDmduetcTxTFCGn8uiZfXUngeBU67Gs3pDvM2bHB7Hv5ZpDiMJqDY7VF8sd6r5Pr9j256e6tV9C",
  "key8": "3Uc4epU86YB8M6qRSL66hWdtQbuQzbvtdSw3sMnABU28XsaHikKU8q5jny6QKeTVgNdkv3GvG6bJgVc8FQZ69dtG",
  "key9": "4KLqwGF1FAHxeCx3ACHSF9e2H8jZfNv6ac8b6CUVN7vspRvtKfTdB1baJwGANNjowqe9rPzCpXVo47UtjEbLfKXD",
  "key10": "4cjbBk5ALgAgwmAMYWWYMMsKtVUfGaVQiiNACAZD46bGCfGx3tg74Mbb7DWUAwRjmpUz6qvhjHgmPpqQWEQY6jig",
  "key11": "5gWu74Cczj4Ri6Q7bNQPXunSqiduHRJQco3BrEroTCjibs5quGuJ8N6YfGnK2P9PpyUo3FjKtuqHqzKVTRSQBVx1",
  "key12": "2uTP7x1sFBeedFYG5GAXXtiMaegp2o75ZpZEqX4QaCKrr3e6HWDdKi6Xb4LzAmFz4SZxBoUfT6n36MpHT9epdWzT",
  "key13": "12CzPriRFiZ2raF6yjtL7Em2DpxTaSPe8YX8avjGKqA7EKV4XLu3D8bnJ5H5GjAhoFkBsFqhJVAK1LtrrF6cEgu",
  "key14": "36hsCxhsb1mhnreu31EtA4pB1Sc3V1vzqqPvWfyZyQfXL99iCBW2ZzYXAYGcbrZeNyEM4p4BdBrScmmGyqbTLsQs",
  "key15": "59FYMBgrAGbV5Jk34sxCdiCyeH8VnDCPjQ6V96e9CLBHYtibjc4R1pkNFh7U91nMDLTGcMeTFsNzYwogYw46uq1b",
  "key16": "2DYFmuTmSJhbw35oGi3AjTwCw8oZ4n2bGE4YeeaKrix4KQYsnryJhusiX6v7knWgZ3hJfgyC2kdXntW66dzZxGzn",
  "key17": "3Bsgza8RjDWHF3VonNnpdoGoDvXJsth6XjHUGgZDhYqMJk8uG3BVSZLEuzwknDjXMUVEqowknKg1LDGyJdA4fALH",
  "key18": "4YnFAUP5Hdo2ufGQupEazvk6hcLhMEr3YJz1X1hscMjtQYE67LszPBkrsJLrYpEhG1GhyoPh4AQaRFRW9PQnhLky",
  "key19": "yKt36ioMJwbQ1P6DxYQvuNC9prTmqrcz3H2YDhiS6zwV5PTYw2QzN2AMoz9Q67QoF1ZqbdBqw5xA17Y1X77YXsd",
  "key20": "2gW1G385jgoCZKGLfSsKRTvAL8j9dwwN56TxN6sML5YjWM8nV8dfU9tSUfxfaw91n2sbF33QEHTJPNiDNcZvYQsi",
  "key21": "5aLZ2QmiWckGAXzL3b8Gr9tWrttKTf2GSD4eBAaJMFXA9y4eFojdNpvKfiBkq3P7YheBuvxbX2ycHK3XEEqX6E3z",
  "key22": "64xZeJeNSwcPhD5onHoNru3QocCNthiaEQvthFfKhjhQSdR348tv8WyWJbCSJSPbrdtCaJrmmQAKncpg1a3UKG7n",
  "key23": "3fHk97Ph3ZHZjMoXKyD4hLjb9ptLUibQG83Vp34mmSVsX2iLxom9HpbX6ARdEUwBdGRucvL6ZWCTYezX1aKNgZdw",
  "key24": "4VB8kFeBHeT7tWq4kuWVi8kLhEskjFe1Eivv3sJSp743XRj8X9uh7B2eae3yEnGDaKTHBEheHZhVxayNcxMTQR4",
  "key25": "5FBf5c7jAN2bXaHvDqDSgnoUdLuUXRd66y6wzXoTLprBEGLjnv5uNtpKMHPhcUQSX1oKDZmCLwgsMCezF38LHRtp",
  "key26": "2ttsVTiJzqHjFopJELEpVX2bBNWjtksTMCXcrL1e9x5Nrz8VGjSVu585XkAmY4uWs2r6tpCQHmYhn8DMuCS8XCyG",
  "key27": "4sFapX9wmKz94AUBfaanx1uw8vkfHq7YbtpeC5grDkXvKYWKTPJhgnVBkgrNwHu3TzE3nLMMm38dDG7zRXtyPBBs",
  "key28": "5oZwLRaq3DSdca35UBf7Zup6VhDb5rynrbyi9f2SBZfwQD2Ra4iMqZaU6uzQRyvBdDCiU6N7k4gLnBEWK7YBRGPw",
  "key29": "5YkqcipuX5bybsu1SRAQpPY97TQYzRLAH4M6pUiZ6rF9xSaKf443URaKf5WDJpHd6eSZh7xiJY9eEiKecgUtsZMg",
  "key30": "3VynwpuNgG4zXhgptjiyCETUNKGwCgqQsRuiRZiWgmgmb5wodSzzhiv9HjL5vD2waqu2aF6B8aphsq9NbMCuftLx",
  "key31": "55qhXJZneRMq1SKGQUMCgUo5ESm7LQkgisUHhcDFS1aqiDXcQTEt1SEhDMRwSddwAj8fgogvLDtiG38DUGx1N7Fw",
  "key32": "46gYnhYWMoFJCR6DDgtmNNWmDVBppuLwpqVUhDzUtW1DDaa1P7JtfncoaDRKEJ8jqRzn1Jajb1j9LS8eLoYKGFXe",
  "key33": "ibgZ8Rq8p1cKeLQTpDgiatVaSKw2cXdaR8phUYkYcGFWasmXhA9Y4bhu5MpBJZdaZa1R9hfYijtsRKhxKpeadAV",
  "key34": "3TKg9Mde64ntB6BHN8tqiPv1JtQY35FNVxsgKbhorp2i2z1fAYd2xHj7WMPgc76Docs9r6Ve1mknyRcSYjjCKjBo",
  "key35": "6qEDqAjR3VdFXyCGtGLoD4kF7vMv8GPUQ3JjcjkbnD3hPG4ZpJjWYKs2WZwukfG9oZcLz14ci7W92RbncbDAPVj",
  "key36": "1227HJYUY1GjkqDorjwUZ1CvRLDRTLbGSbfonn4umjFbSxcGzk3v5WEewGd8TyCSJCMc84q1eaB7pZaxgorJqKT9",
  "key37": "rRnQTMwNmL5dyqvbgbvcrYFyFaUpVkPFyY6ozVzmcEdGETkQHrRXqpE1Gt6QoSpMz2Jj29sE53KmEfWe87jXG17",
  "key38": "5qSNmQzNJ1tLi5xvFUkW1dMbPFjjvCVKgC1fEUQjoaq5uqHZb1hCJ6bAzJfnwZXGzqrJsSt415SEhjzt6wWkWf29"
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
