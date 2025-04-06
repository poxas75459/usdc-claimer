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
    "5ADvFCGi89t9ovFBxR9EwTvozWZLpw8uFvjiK3ZSwLvL4QHKTcb9wfe6cSSY3owjGegtnTYsdAfaNgjzKyPpmBSw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AHBJug2xsBpitSv29SoY6QvDPrBRbXztfoDBmXsMLuugH75bBLBEfvNP35gomGHWxDqNgT91SFEF15gKouauTcA",
  "key1": "423USA2EjonFG2JaBYSGSfGgZtXVjXG1KfhAKTWZAg7kCqkjYPdGDNDmMrZ1b46oEBpf6s43Mqrb8ozDLiAhQfxn",
  "key2": "3RWqypAKZA21wvZH359U5isabi7svfaLHQ58iK9QnGHiL5fAMTwZtbZ556vgVp42T6UNeRwxLqZcdHwM9TT5yBCd",
  "key3": "4LAjSfHLWfK1H2whpMMCovkjqXJSoA8zDgvmsUZG89m3zJD7GctS6cc8qSWjVojdaJZonUjdhgDD2kE8osrZ5AQU",
  "key4": "EWYkyjaMmbUTZ6WxnaMaiHib785EqMnhzpr1UDo9EgzysaXcp9tPZKff6Zc8XjwbKWpMTCyistFo8CRH4JKD2Py",
  "key5": "4hKxMKVqDMoGUVSVm7jromimzVpGhq1jqaSoZ88o6TNsU4ycs63mAMsoPaKhguXknTW3j8EDyT4Tf6kLfLhWouY6",
  "key6": "4qEzDYPTez38ECypWiw4Azs36QQnKotb3sMo6Xg9m6pvBwzYT7ThztW5BRAwT8EDKiExciyYHu4588rej6uLXuri",
  "key7": "553gGcxsqGUgyFBD7sZbkFfnb2trGCb478BTfKuz67MiYxTCbTHdUmDiPpWSuesT61mf5cxPMmwbLnSWUw1rZqVo",
  "key8": "4Wu61LKSsaiYDgh3YrXravd3DzQpg67XgFxiBbLsDQeP5k7sbwbyotoyHsBgZTnjkFMnG6gDPFRUCrNe5iLJ28dK",
  "key9": "tyN3tRp3qhG3oyUNZDVALhHEZJ4BPLhajEK3KfQLfb1JErVKEpV1x3PdGo14L9GmZZohV4CFZJnpz8Geuo9fPPz",
  "key10": "3nHyT54VmimWwW4s1vFFHqspN8xk2HhAmRAjt5wZPngzuRXzBxi6brU4yUGAxL9dkNWhrrAhS7JiAt2eG5yobxxh",
  "key11": "XdBzQodH3GvqW2s1xMjFH6EWC9QpkUBNEq6X8DQmCDdzVrm388TpgWXsM6hfzeKwtkvMEadhAkAoovw2ZQoVLN6",
  "key12": "32kJLiXHo2onNa6sDJcR71gK77dXusECkGCT63QuTFp7yC8nzfBV5hYKWoLF6sfcHbN4smSWihf9UtgAhnEAdtfZ",
  "key13": "3MnZUSviXsDKXGTzvdJioHM7bQqQuj3AZLQi6WZCQMJhqq6BqokynVhffVyA1ATscGqSpJaHP9fZawvMfXNadwwX",
  "key14": "4x4bnDtdfEZUh3RKi5dDHsAaKsJjExoWy7m2Gxip93kgfEdapY1numn1ES8y8dB95FCCA5UbCxkgKDmosXo9LusT",
  "key15": "5GqstZS6xXZjyRcSdDD8mRp8xenwDoMdK14mVXQLUY5LNN6J7v4M9N5akw1EuWgHmjiNoPvwRForS25HqiRZcsAN",
  "key16": "pMFLpgVEPaXWUbwzXb67eH5ZqUHeiP9Dy7z1Z1XHts7AUqvBaqw734GD8g8UUPW82yDirR1Vgp6Y37QbZnc6TQV",
  "key17": "5FEcu6Ng87cizFhSMjpWnE3KGyrUzjobF3GsjiB3VRAUdHNEu4m4Rk4cLpS3dhRFzPGH82mvcX4mb8LeBV3ZjT5p",
  "key18": "5251duNxDYB8w6oiJCvaZznJPQ1v9KtjBrLSLgftzm7NEUMBge3RHzZqQuX1FmrBubjmzTnnZirpuaTQFDppxnPw",
  "key19": "4h9Cv3u4yWctaEt3ZPU3cxgqu7QFwzTD1HdBzNEGi6vw7KXnKChKW4h2Wi3YweeXt9yZFZ4CBdod5QJLPZg7eZaY",
  "key20": "3qgdfWe2AqWkRai6tsJPRV5Zaa7eqzsGq3YRX5VWaFj5gRhXkTLcttJwKPLCXP8YB2gb1gM4XLcWPusjpaUPz5zT",
  "key21": "64ywRQyiRhwLzAujvdRC9qeb8tDN1DZvRnLf4Sw5bDhzcKVw9mm8Lrp6vUvXScdXuoPPM6Hz3tLWYPLukuNV63c9",
  "key22": "h7TGrXJxWEKggvSJjHqHhozd5kHruSXBb5DsGzzpHqZHfTXWC8QFENfxSiWYEeHnCM611L2n3RZ1ybb86YgHLKe",
  "key23": "3UpgW33Aw9vb6QxAmRsBfRkasoSHjdfsdULthJd7Mqayv9rx8ioVzbBJiTvpyVprmZxdXna3MbRwEwdQceePd57D",
  "key24": "4enqhkT9LgiQmu3HsqhPWaiCzq5AkvSyGat2Fe96HXQiLSVPozKjvNW5KYqu9f7LHGvEc7o9eL5Truy17sseuBML",
  "key25": "2698Fw4BjLyX9nHARecprZW895oqVK8wTQJYzxJab5JRPYDFGkgFjFLN1WfmbkD5aNXNbszL6XBK417gmpsua9zq",
  "key26": "38ZczT8uZLjp8bNiE8JRNZp28cirNcFdHDmXEDhQyat4GmiYwWvS6deU5Jv3SWUz2LkeXbwWKuVWcMw9bvyndFHV",
  "key27": "4aod6R6tY8mMeotxLf85ji29xE2t4pGrW1JQpPvzcjqCWPFGb1bQHpnokBLrB6eNuAhyhb1RconRcrV3KsYpGUez",
  "key28": "4bNjqe1Aqau4MqHnu8Cf4KYcts3sYxRGpfJPox3B7DtEreUBP7gopYN8KbRxoMMs2Ekx1wMewQabanzM1CknfzHF",
  "key29": "4aLSQxQUMVAErF4Tti3WyrigCqTbg4BGHgYubSU6ruYYYW62tzWe4opm28Jd94SgDZh7XjmAbr5hfP6yQuZCWxfJ",
  "key30": "3PdV91hE4TsoM7hUvuzP5FY6C3NhzF37CSAvinYqUq1YuNQSFnGkBkSY2rdmzmSiRqxiwoZCSKFqmbA4sh6N2gVd",
  "key31": "5pfw9QHUE4iJVAkwkFxkjrVzZnPYeDmV8aG21CnyV8SYLYfN3SnoyNnXao7qEbAcMVh13yZxfU89HTShi1DrHfKp",
  "key32": "4qwL1iDCerSRjZUCB6faRtWXTq8Jreyv5xT7Uf2XktuNCp43TKC2Z6jTGo4ayde4G6VbCdrY3wyVJqL8BQZP1b89",
  "key33": "TZNbuikve7pxzx861eWTez3qnevoshLXLHNLDEyNt3hs7qoNZkfTrozTxtZShZCLYUWDo8BakxrvH7zL826rPXX",
  "key34": "2ad7NnjaZncP4KkXbZCbJw2VQHBYwdbQEbvzA9vBR1vQktdan8vgQApeXJdnz9MWibXpPxRL5n6sUGray9tP3Xt",
  "key35": "2r4nKsystidMmfz5FxUkM3ApTpUUCw7ccjRTiBHwPAy5kNH4sZpeqy5BgRP1VeazQaaj6FxqoQvnFh4fuW8jis5o",
  "key36": "5rCE6ikSY5j68SFhjzGxWHug9XwpPhM9YpGtAWQzzrzqcJ5fNsFxqTWGFyMMsBGTMj33WAT5rcqK6SFNb1yfZYdG",
  "key37": "yP2rWqysrsvM9Q43adv9kTguUHGY68fSn2kftY6f6sRuZHq7DXY9mkskynjUwS7bqVhcWr23DqfwAUsn1eW6UFn",
  "key38": "4vFFtARG7BXs4r1diwfeScKhDf4cPEUd3dMB77ADZ2zTBDograwddktGhf6wh8GEtJ1ReLkAvDuPj3MfjMCiSNpa",
  "key39": "3XCob84k4UuAUQnfHQXVcdk3Q5Kv9pX59FAn8HVs6PM2ziqSZQPrPQVqxo2GVL1jN3rVin7Gm9Qf4njFbZ7KE3u9",
  "key40": "xMs7wHnasvYA4ERo9AvHUSF7NtKELYHsAP6ueeeJpU9gHDwF1vtW1VEZTuqWFRaaj3Z1icx3Z1uVfyHaYENyCzz",
  "key41": "2KuYAUadfiXRSxVW285hqhFH3ckRfjwqtFxc8zLmUhFDouF4MKrgiyk8nAubC2aihA5RNTtaG3DBHbq7grNkbPSy",
  "key42": "5CbfDua9mgQp7wvazZV3ce2y8MzA2GFE8rWmT7UKkX7A5KtYNqBXn7RdXEUmKzqjb1Mz9BeG9UTYm41aYwoWMJ3v",
  "key43": "4h6Ksu9KqMF82Mfy6JreYQhNHj1azRfRRt1F9s5c85hyuPitFRUEKw2tu3s5Xzf8orgMYGzZRfG1rX7NAZ32ZXnG",
  "key44": "4T6HLAVMEMjE8qPg5XnyKx5vEfGmzgMd7Lz1qVtRUdPWo3MhvXR9ngtypu9aYTN7U5VdCEWWTEiAWrFsT9H4AwE8",
  "key45": "56RpNBLeoJ11FZpfVhPFks7iG76ya3UpzAycpKW781k2C5C3GKx2AFuNfzCjbXiS5AS4nMoXq87pHyiE9ahiTWyZ",
  "key46": "312mL5nxfUaWM1qQfVRU3Q97jPwviCfKP9p5d98auUQuXfWqtGgTNtiddpAWzSWz1NvvsAPuwcoKLt6EidG1NP5G",
  "key47": "4HT6g4LHMTi8pmmkdLFAmPbGQUpJ3z6pMV4oJYnu5ZipLxNdrFHJ1nqkiijEgEzRiAUsmwcJhv9xjNX434jY2vqw",
  "key48": "4J3KuYPuYYGLbu1u1SPau2wyedWv9eGuHJ1qJCj7gBWzLLTYYySyNqUv1Vv6FDm6z81Dmf4zPzAoSPWoiTRrDvdY",
  "key49": "3Lk1HcpLYyk6KnZXDgskpdD8VYttomxudqNb2VnWFLhfkt42oE2bMbG8SA32t7gC6tEz8QfLkNUkwP3ppWNT8725"
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
