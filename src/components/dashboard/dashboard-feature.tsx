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
    "38e5L5wtYSBpwcrJqKeifiPmt5SyS378Jmq3JxWcx9NJd177zUJmFQxmyfzyqr4zwNZRXuHAULiHEdGXm2KwPcxB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xdEhbHvgNWQAh42WTxgenQwSFQhyetW7z3MsJEmrwZeGLiemmR92Gs8g8msTNMs15i5qQZWELCoui6c9Htgy3dP",
  "key1": "2U1a48egCFYRaeKRE8gLEFXGyQVm5WXnvkDJZgkRDwLrV4icLhKBrvuogunqUQLF3sxAeLf2nYFsQuGXZfEpfCRH",
  "key2": "63DBiUM3HGY43gPEeFkVdDiucTtkjDYbwHTzHr3H1g69n854dCA3LSmrSQYDfReVyGNdHXyUPZczwUu1xqnh4uGW",
  "key3": "R2JsST2sjjKdRYTuSKXabp19wcgD7ZJv7HSku2THofL5mDsaVVLztCLxM2PKg9R4Mep9PyqRm13FTufnfK2p82S",
  "key4": "4KahZKXXYotzLMXwByHRMPVyg9iPJA4wjmyGNbaQT8fUBk71dUVagVwzMbK6CC56Qx825TiequKGpMVm3Len2JLg",
  "key5": "3KY5NZcMYLYzXw8YCnX3TVFYv5K6b13aPAEofJ7m3oE3EFzoy8RMEohjzeQe2cQ7dA79p7jeRCxRpxspZtxnwK83",
  "key6": "jnFsu14gRdi2gFyKPL5k2FwXreQrtNDkyZYeqrzBtZ9bG8wfaGPZyt3rpHGnQMQSmbSaZVNJRKdREmZBfn7HpNL",
  "key7": "d8dV5z1K7q1Ro6iTMqr6Jret2rRwsb7usYjeJPdmpSnfDrunHWaVgkXF919hW3bA2wPRJhrk1zqsfsJvacXDAps",
  "key8": "4n1BDHK4aPkxtc6FUDFvVcGQ6nZx7wJP8kW7vrS5FwYw7jWJWYn8PLw6gcVCxbvZa24DB4NhpgZcybTwu1AXu4Ng",
  "key9": "4SFrzW1pg9PMGGsVmf1YrFBRgvPE42wU5vLzGWr5X8Pckar9CZdu4imdPy3KXYFU4k1UYQ71HnHr6VqyiaHjApMy",
  "key10": "4HH7QRN9C7SRwCAnxVv6PTi81KPLP9p1jncJ4C1UCxjHpcyRWC9Jw8a5SaNbSX5xWYMFiX9QDsCcDrnVTqpCfH9D",
  "key11": "4WmuS7ke6LeUbuvsnzBmusPytg14pi9gHJsyMAYdXgm3xVLgeQ37npKVoxy7EetrqEed3WrDfcPUxuB8TaT9SWwx",
  "key12": "4wzy4zb5JNy8JbK5bF3SanS47ndT2jGjoMqc2hEyLnfWzCdiBWrf8f62s4rBsA1ojufnNS6Vja26vFWo3kxbUdHf",
  "key13": "cuwz21kRQYkbDcmy6tsRjPU7AsLmAVsqzvGUZQNKpVMJcrqwwD6Fom5Wzk7RDwRCRNkCbwU1Mxjz4AC6kBhBCUf",
  "key14": "ZMRWSfwGtBAwCxU27t9HkvjXvkYdTXAeXhA6j8hnT5Q9bBVniYDWMa6NoCg9bXBbNAwy1nTzNpckzwMDRYtTvYp",
  "key15": "5KczA7JT9mDke7J4iXiok4gFDy343g28aipfrR8EbZ5HjPgJepZsNA8L1K9GZDyysbgicky6WhytcnZ5esApYQzZ",
  "key16": "5Veg7H9jqTDXeLcWqu7oz73K74teVzLrPGeEfxjA1GWc8Y2jrNJFFuBQsikGg2mUH5GARjHPxMYvBqUfEFunwfaK",
  "key17": "45qzQtL6xX4PKVA7abstsVyNNZXdA8cYwjDDVqmdKMoG5kvmjtLMWTpVQtSQH9Fbgs1SB9VbE71WBxCU56zMvSCq",
  "key18": "5qLoXBW2wM5tRRHFURwk27q3QQjKydBhuWZGvyvHgFp4SrP8XgnHC68CUDK86UEh57eFz6kyG2gUExtoASoeWZjv",
  "key19": "5TvoX619BaCYekJWS3QLuYnAbojB96S1j8L3JWPUctz1UwvvBkdjjaUUoDAXAwmisBkVuiuqHreYdoqZRYMTzk7w",
  "key20": "5WS2815Jr1a6ufEnGHTQDVcWtsbXSs1NcGbX9MtRDMAD4S6ZA4UPGh8J4V1wY8yAoZL8ZjkAN7uuayf2n8VprPrz",
  "key21": "Xe4G3PyLsWWJVTxgHfyhphGKdMY39TZPyHuVKywMjnKtUSgc8jL1oTfhWXGSB1gZSrLpq5D9y4jeQrH7NzP4UZ5",
  "key22": "227NkC8MZT2b3wwGyx9LQ5w69FjLH5xxAnG5grxy57vk7JBJwx33gp6R94hAFMuZJgcvvjy7jnnpUYsEK78NQX9m",
  "key23": "5qbZDq24BEmCUfLPKC7LR8TDDLfEXDXoRRKxLZNfAJuYyKjwqANZELApBNjaRxU6W7CRa7YVHTyAwZaHpQ3QMfdr",
  "key24": "ttUmuazkmN3dWhtBdk2iGFJ9zEBWkH5LneCS3a2e1bNw2PbtwLyph9Moz5MW3i7R95BbVJRzSkzec7gSk2hzH5P",
  "key25": "3LtvNArNrazpz1G6m6TzTopq8SdajWjR3RdTKtxinVyRNaYzw8antv2yzHneCbz7Ft1kwoGccDCwLyKvAqkK9U32",
  "key26": "3p4SmGUzFYpEcUV1gjijjvXGRtLusJtiQAD7MsobV1BnNsjyuFJ8V9mL6vRxDBgFyvgBphDcjzynnnm4mubpHJZn",
  "key27": "2UDgJQW7FqB6LyVn6gEcg1CkuJtEojRKjA9kSDg4CFEKd7NVXaMn6HKgFA1fCpLa4dyZYrkEi3omSBqV3x3tZrwn",
  "key28": "61EeNGSheBspkXRzUpB2r3T1niaExnvJc9nstzmeRtbN3qQyoBgSfx5StoiiRn5L8csjvPvFAZ4RpBXQzDzUoCwu",
  "key29": "anM8fV9Qn4AhEiChsMDXgWWzGbyEMgnRuePBEGLQEGEXy3Kx9h1s7KHX7KwKKSQMeAUaoSHfgkSmF6swFpH9U29",
  "key30": "2LEPCEXK1QzfaB1167C5kvGjX9KCFd2sTHrRQ5Hj74ymYZUbiruE143mhK8A9GmHHp7XFoFvbqmkJWkbjiDBQAkb",
  "key31": "3YMcp3Aqp88uC2iF5NjmXnFUBzzrMgHqvjeCmuXs3jzpSXnnKJ5VAZ3gmtxfdHGjMbkSvUpdcrvLrjEdU5nCmfGZ",
  "key32": "smEdVWyEkbYyxaFSDf2P1dnjSHmiw1b1guXnxHgdzdcWfshm2pQJeGVp5QuYsLx1vRV2KqRJRHboQeEM1S1Cqny",
  "key33": "4ZmSZxFCT6qwadrkSkzetUDdBstRRJx1CQJiziM14EfL4wX5CwUiTXjDh8o9qCGA52L7YWiHfShKQvhGfonZ36Qw",
  "key34": "44Sgzc78u2d7q52bR4vj1PZxEr92pDLncVnLjtL6X3BQsqQNx5imT4GcRZCnJRAwyLsUvtkgKnErzy3XEv8SRne7",
  "key35": "4CXktuzyFz4QTL8Do7pYdkwKSWGL4gJQZpnRpBy47JKwi4bUg41txb35KCuzLnmYdHg9bb5FJRBrXTMaW7r3zUP5",
  "key36": "29VnYzHF6s7Y8Z9zUWb8hHSr2G88afoNwFTS52tDttUsgRaf1hPV87jukBVVmqQ2LvKEn87ntVFYgBJ9FfncEspr",
  "key37": "4Vjv8TSdmtbiV1zwG7zJ2DQENkCsr74wfJWkni9Ajevpdv1aNDYErb9W8KwQpMZ9GQUAsUk4xNYyxWaSzaJXz8rQ",
  "key38": "N2H9p6SFBjP65RdN6bAEDcYrtnBaLFQcVowN5ubHseE8qdfLr8DJzs4u9G45r3TLsc2tGgwZuNhxPMVSk8ceoVw",
  "key39": "2XpApCk3HLFksyNmsAQRrHQ5tA6xLbdRiwYyhLLWRmUGgYkHH4zkaJYURNE3UQGN3pQ8Wceg6jctgNrxS8559hgH",
  "key40": "5aMdonjXbz7m4NRyDh2DwJY6z6xGawywb1FM6qBqoGc9ieVW4KQeTintjBgs9hbRCyUegCwveEzzNDrBBgguC3Cr",
  "key41": "3ogLQYtQWYzTSKijrBxJZPMaX5JiDcxoYhWnxHWQX2td4sPCStMLNHgP1GLNd5qJPPG87H9QCNa2x22uGMVGTc9p",
  "key42": "P4bXLvoSTANe9FLaQ1bWM87wZrw1Zf1Yrx5oNJA6KpxBup3w6qqF1hAvGVNyv7TGtoPW2bBQdTPsig76Qv4cjWR",
  "key43": "5VjuWi9aUTdWnYX6sMveHyU8Apyc2xLEHWwBjiQH8S3nEYujMg2pXEfXQZ3HB5TUmFQ2M2zDcu5nQxNqiPMZ3FNi",
  "key44": "5Hjpj8oY1VF6PZ4UEN4sVh1CY5PTxGVetGKgi2arY2jofUuxgTqD5jqV5MiJ9bpG3V3j3bi7BvcUm5d4SK8pG5Ah",
  "key45": "3oQwVHEC85ojsbTkfAvCw5jeQnCevvGUDM7ryZUEJjxyLKnw56aiPGvffW2ZAt6BFURhJMdULmPgyrXMEnpehMMP",
  "key46": "426axp4hnXcy5BtopQAQ2C5HfzYowCgfbPzgSTS84d3PLyUMyVkUXK7tTTy71WDZmb1PvZrb5etWmnDcxccLnHxo",
  "key47": "4mUnToRjDVq2VZ7V3Q95WLqzjLw1Qi7WYDUTGeQVJcBBAaEH9bMYAHJ9ov1R4qEQVFb21dG3Dnn2DzmjJ9kM68Wd",
  "key48": "Poz4mCX8d8bSg1mucs5xzNj1AecACkcpwCCvdMze46hMDesAji5gD3Pe2VEbuHKUkdD1cJQi3n5jNJxK7LyWgSd"
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
