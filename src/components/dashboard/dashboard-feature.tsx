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
    "3QEjPMb1cAQNRmopZtcvpB8GU4opXjHDabheq3mChmXzpgKRptf4zkYeAwQqH3dwDCNCp6YtQ4weHghFfHVs9bc9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gEtv2USh3LCRRXxSAPnn13FwGMNiyv64buSDPLKyZgGjaZvLi1v7Z1gPdYSvS9cbmuX96sxHi2bfHNpUHHgDKUg",
  "key1": "2cMrwcWopVZhhG1vs5HZogqkYTrzXzfcB5gjxvpq3JbZDT4n9539jEYCLxVMTnXGeZfj5Su9AWsfQnU9HqWLo48b",
  "key2": "4FSC9VjdkcAHqKvN56cUHzEnxvkEytoJrL3rC6SLAC5bMhvKhfP9k9FwxutDGsEaDAsndpFWDK5U7JSC3uKdk5Ne",
  "key3": "5GvaRTHfFiRTvC2jUMcNd9eYVDuQw12fYccM95gNn5Jkhx7UkNZGaZ9vnQMpvURD4hvPwfcHC9RdDwHYPTRgNBgv",
  "key4": "3fy5XcRXozdJmhEgfL7CDvgb7cQtLursUYUynyD3JvTu97ZHCDzivVFtSyNFLCjF7x1d5Bjpe4WeY7yv2SoYXpS8",
  "key5": "4T7wVdD4oiwfUdwx4sheRFUcWmihDKuFNPdnqVms8KY9jrYpzNtT5YtRSyGSemH3tk4ChwDRruiAAEAmrTULvbQb",
  "key6": "5TWbwRFsxn2s9JMoMZ7jPfHoqfaLTz86tFJ35t7bw3zjZFw8PQKkm5hzGA7PeXqUtXFzkaFGurv3hBgd4xUTXv9K",
  "key7": "2Go3UUmWCVpbKC8pz8FNu4ySpPABhXbtRsPxUrgX3PuWqjczqRaYCESaADi66bnyRmFj81oXF5yVh7DS4FxdMBBy",
  "key8": "5vucRmvoddB3asWHPieYUxQBtMdXASVLsqtCpDuC5yMQbkGWWtmZjeLQVLWBaCJbWTCf6DJfjVfavAy8vvKtJgbq",
  "key9": "3qwsyNj5t8Zgu1SYpojeXhu4tfaHR9m88j9nNwwh2LJyguypPM2JkvqP1aVJrFERJ2xQgVrNbsGKwN1ffdHfDUea",
  "key10": "49ykk3arivdDtonQW86a9VSpGzUxMuqCxyUPX4jf2QN4GxNgyV2gL5YZpCo3Y2CSaHVupdCMorgFNKqbYba9LQnC",
  "key11": "2LNbup9o25bH1LbbDg24wJwXkPqSFwBbGiEtgFPgk6a64bySNM15VQvXCbpQkR1kmXMo26KfqjgojiYMfkiKokv2",
  "key12": "2NbucEtbCWUztag2fFRXa1nSCKB8C5kNkrwMYd3MPgCCpuihJG6fWwha29nWWKuejtjTkGJtvnyYBMHrYwKDj4po",
  "key13": "3roRHWaafRQnxG798HSvRQYo5M7EXgEmjAiBy9tj2n1wBgCciihVotJa1C8JgnD7q9EGY31f1RvCyKTEsxmQq8UF",
  "key14": "4jeQz2tRCvUPWXHvMVcJuQ4wAr5be7FYUn2UiXJzvzzuZBWharkEfHpCPp4fGpkTSskJHyokcNqftQKxEPFdzfbB",
  "key15": "3SXu69EbhCrsMiaHa2BXxrJUSFHby9MByqVJPPse5aGeE26U4Fxg4NDUbxNV7cPwhRmEnq4LhYEzeNUqS4ykq7SR",
  "key16": "2t1pizwkth7RzBddFYBjSwLqgf5icbBsipMtRqQQWnq4VLRrJL7KQtpftv9yzNnSR6sir93kXv6o24Az1DfMfxVg",
  "key17": "3mqjL13utS9TjgGYqwnWUCDmtzLZUStDN76gvByxaHazLNFVdX3QBSH5AQUyc3m492usAdiKLocqiVt42hDPsms4",
  "key18": "4v2u5nADLtWcsDW2ptbWpK1JNT8Qoo8gMqGGVUjze46baRGm2ud6LYmMGBraq6LsFUMA5zMg7h4xh6W5xEf7DtHf",
  "key19": "53sY43LipHGMnFbvJffWQJNzVMgAHDpUPEFyJA8XDYRUyzo5wGRY7Sghseuz7Qo2muVYMpwgRg6VQKNcfspsjrGR",
  "key20": "24rMom7M25iGK8SbuajmKDgzCYiK5gTtY8P9z3HT6fwmkp4LCcyaCbc6rEUUamVn4MksabT8SRGZgtRKFumhAgd1",
  "key21": "8mhWmMozAJabrP9TM1X3nymtshLKXPypdWm9Bbrqudy1XXmxdqixv2yBHEuxht6fX8UhcyUAxab2PgApJc24dZR",
  "key22": "DQAjbctYwqyk6uBCjkML8iN57KwNBwe6N9vtYEEZHn3Q2jq3FsG9d6Jqrd2CGhQXFngejxjTnbvxKKokprgiuJU",
  "key23": "TLsxfmX3yJz7dUgAqNuThDyFL3N1sH1WTSXkt4hDym2mFtSHJtXqqseDPw4yj2jJDeTkyjdGsKtFC3Ajr8Fkm3Y",
  "key24": "2gzN765qmKN933BEY588BFRvcu6ptG9MLWN1qNSJtBbes5W3BiXQy7FuZqiaPaiVSXc1C6TEv6sS1CKnNvLJpbaz",
  "key25": "X11jTv164q3q9Q7wSAqZQkCc3Sc1zbiaEeSm59Gi5kZNRXYrTyGPCbvymw3fXqQad47zFXuPh3G8j5TCrrkaQQ2",
  "key26": "XAa3khH48Ba59bzMP46TgD5Sp4wySLqLHDvaBCzTAjfrtFqSemgJZzbjxpAiSVAPX6zDtwmxQPbyokQsV8FCyDw",
  "key27": "3SVekrfGo59XuKp29s81aid8dXExUpK2yxg5ehXk9jv7FYzjKGaEHogA42k9XEukoeKEMfWBKspS5mrSVet2Jms4",
  "key28": "266hfKuyogUtWsubPPRcR6ctKPKXbvZr2KpECugasB5KVr1rLNeyZg5imDMC1kxSs2zChLHsQxkzRhQxf1JgNudp",
  "key29": "3z5jQg5wjsrABspsiiUhmxzQSfcUVNBNfrbiVnRynLcJVuZ94YWF2QegRH7AKjixjiRkDzwKtnpkFbismYuRqvtj",
  "key30": "3k4z1URjgdJSvNvLkFLiFTBXyUyTqCW3axeCFf9TicBF7TyebYa2rsrzFFj3Z9ZWZQS3XAx88zpjAct2ZE2Bon9H",
  "key31": "4UajvvXaBxgmNVrYBTVHp4VBwXGrP2dg8CQtU8QEX39dVu71QLBHEN8MTUebQYTRiKiWJ5zSfDqFor4YJE85TpiT",
  "key32": "2cCvFn1wyiX1oKiU8p9fQiPZW6RrxopTxRQyqsMUnQMwepJsSTodFrz8ghoxRdJ624JBQBvipPwVFFmKPUcJD3JZ",
  "key33": "5gBP3vqLfkns9sMtZ1Mh1U8PZXuAMKrkwYQifs4JjCseu4zY2E7mfVVddUEGhDCWpjWBU1L28YXc9ZT6EH71NASw",
  "key34": "2NXs4qhCzEeTZQXWWYMMBzEtiwZGMS9Mgp8d6UagWqDEas1WCXrNz5VmzBrmyZ77AuVrUWRVFqBmqnGHX8vpvf1Q",
  "key35": "4sqsdY7mc8Do81rmbZJbpDrKi5joVKQfpz9Y6VL1Ye5EBPft2vVxcuppXrSBiHUrQU5dh6AKb6iWbNAoxVTYe9LK",
  "key36": "3jDYm7rYQFeoL3hhNV1DcsJuGSV28nG4uRzeDP1sECZwnBozPx7StPhrD8zMnNmZzTr3DNigx64qKvwkFwkqF4jn",
  "key37": "5C7q31thgJSzxNVmwoUH1GQyJeajb1b6SGBuFmBRTnZBDFg7X3zz6yokrUDVrtvSpsDyUkfsPyNed1ZJpmNAa437"
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
