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
    "3w9nLWZ3sRZjkZuT5feJBLyYJEVfufX7NdZe7ohKwayjYDXYEvJUByJvSVmNqu8XS7rxKJdMx8R1w4VkHYCxaaZN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JgcYeGTvKDeQnHwX1um6qwxBf5JEXjz6fjRoB2VPfeT54nfJyt9ipvCa19KmiqgQSoWapKAee1GvTZr34E81Bn6",
  "key1": "61ZUByozqTFjSC7dPZMAWS6VEiKEmoppzDYXkAbjYpvuxqhi3Cb7qCHPNW35VmQH14JFqmiXbrnvnhZUiN2cQy2C",
  "key2": "3qSCnXBXtvP6o14ud7sDjb4FrsKwWSrHoUejR1asjq4fY7xxti81PHyw6e5c3hgktc4kwbYrXYvYjg5am9DyC3B6",
  "key3": "4FsoDPYyBfn9JPoqaTeZDG7dasMsCgs9e36pU7tmA17dY9HGYER9nUut22k6eZqQMz8sQALDmvjfi426anSQR9Tj",
  "key4": "469CRLB7XEdAUEjtn4JyuszDrwQSR1egc3umN692gmiVWnz6zgJeoZWJLdu7Gbf9XrxxvVg9Q5zGjiPjRJAQJb2b",
  "key5": "2tYpVr5c9t5xstjWa53PtYLVSVdCw46JANAH3yU51Wg3wNP7NJNa3DBmfvcSxo5D2G6wwXFg8MNmYwwVtjCusfd9",
  "key6": "46dsX2jKmYErTuXGe4DHXsPzmD1koxAerRukDDs9mpP285GA3uML6LxxTbmUkub7VgFByrk8p4CtTAQoVjGnKJqY",
  "key7": "67jprCyDYHV7K7gR5rGBjSDjpvUC9BAe8RLB2D8rnKp6KFDEL9VDZp6MHBCjLctXfKzXdFGnJBYnTGHdtcJSMcZg",
  "key8": "8siryeYnA2dRS1TsUtRc6GtDGitWtri9oGyeUCru8FBMr2vuwS4tTtEvLQTJPQNMni9L9J3pTa9NF8pKisK4q85",
  "key9": "3sfE8T33w6jYwdGc2UqGyRVRA2S8bhWXJTgG4d329khEMjBrG8tXN7vwX3b2bT94MEvdvqgCZvJQibXkWBG2e6K9",
  "key10": "5fGJddJFkCSkr9x1wgEDMMvK8frq3axw6LpjnQGybcmUCsFgHsPFFeLP4kpjrCdpaxjMgGcEtpBHbx3UkBpoPQ4S",
  "key11": "3KyeFpwe7jqMHzrLmcva3zFGozNqbPKaTAzTDQ8WEg2PYKZ1Yx99wc1uPr3UvLhfMECnba4gbjzfza4ZJ3ZKarVL",
  "key12": "5QaJ875bpzz2CeeZh2Cwrs9ujX7uRD5rQGvqKXMvBhPUH7VPYLvWuYKkbwvhZX6qGtHGLYV1szFwMMERbagZQzZL",
  "key13": "5WNiQsfrZKXDfUkuKM5vDwBCxEUTtTp2peHM3TcMQ9pnjKQvfPHaGkeyBTqtLi3vBUZp3Z64uLBwdte5KRHoMxKm",
  "key14": "AWJCij3R37a4WQgRrWf7VkDFi32UgipyNTdP4cpFZyiSqZU2LYYimDFaGhgADWaPKPDRj3nJguhJBuqngCH78ou",
  "key15": "5qgZ6qQQWVWZ6gxP3p54xtpoTGwNxt6gbDqxdRkQKFtAKQcJspRFFJYzJVt6YjnpBi19Uvc6gJYSLuyQzCeheyaJ",
  "key16": "5dU5hCXKDQTzu367rsJJZc22J28VLcq4chFaX9pY9eoaLrwNn7HAGPCEcnMx6o2YyAXvx293S7TyecUakgYr5BqR",
  "key17": "5xYEuQXRZbpcfwNLnxVQEP3N3WsF3LntQgJThDQHKQ6F24qJcL8z5wDGtcBjLiB6wkfbx29cxqLUvjeHV2y5HDrd",
  "key18": "4xDHGLJSMcfu2xnsmED7wC1XEtwGkoUGrfUuAqEdwkRCYpdNjBC5fyN5DascVe2E2VtaX1f6Mn4VUwECZFkKR4kr",
  "key19": "4xfd6drBv578x92zt2ap33MKhwwvAJXVLDNRT2Sa787fpnMb9YY4M2NnjqnTykc99UXTdEk6kPG6cs49ASsLZBJ",
  "key20": "5a427WKkwWB31PfdTLk97MRMCmQPP4UqMo2kE4D9SbdtmPHcncD5nZNUgYA9gqrw6hpk4eB5sYDzfaaZ7kaDTnpD",
  "key21": "2AUofPEk46znKzk83LRm9k1HZsSr3Nte8sLsGRHzXEWh3w5QcY6t5xFfFCQP7RceBpmg8CPM2AymsG6dH2FAH3QY",
  "key22": "36DBV77o2vh59UbvZHVtxWAGQC6kkAMSArKbNkBmbYx24Akm5y46We6RUFLfnLmp5xTR7aQqc2qV9dDaNPCgCc3V",
  "key23": "2oAQtDWiH13gc64z8gFBZQM14ndcRtTd2PTK6G5r7BKQ8VymjVQiLLuyWmeExt3DFyyaYb9XRpa9GuNR8GQ32NWT",
  "key24": "5PY5tXx3gu9oABqs7svSaZb96ZG6zQMiRHNEh6XsnXXqZoZEpT89XfduiwkMpsSSCizxcrnitqxGfzFFQTLhjqVU",
  "key25": "3AUykfWQgC5iJ15cn9a3dy1TwtoLuc5nZ9XXuJLoUFeiReNur79TZGmWp3MjjaNvC9Uu1Tn481L6QsBVN6chbGUF",
  "key26": "28pWozS6SRLMNZbrncNfNLTZd3THVr7AE9sFchozE23r2edaED6av53rp2VDPpT3sTAbXUdK86bq6FS2A9cpJFbj",
  "key27": "5CVdLgG5C6ciZVBH81RmYnffQzFrFEy6UVvUg7JV6Jm9me8BZ7d3geP18FBnofggMJ3NeWd12JRuXnYt6dQU5Kf4",
  "key28": "4iLijUkDK2xFH6m1YpewM13tasHYqvwgL4MYJfTYEwHkPgHSB4vEzxcu282CHN2r3djF7oLFFES1K9MK7ndUihEb",
  "key29": "qVaAtV1Ai8UxFodJq7A7vYbx5Um2gcA9KwdHmviU36fPjEd7Wkqgy3R8pLvmsFYnsMiDTBxnA8eoetT78dDZA6P",
  "key30": "bSa6Mosdm6ie6ELogBaiSK6yzQFbdqTDNG4q8tJivff9bGsVdwb6dkV7TdRFm9aCAt52Pxzr1DcvpqiRmkMjbAK",
  "key31": "5DNCzhqemD5cAyGXUKFX7L7xfsnBgt3uuFBgep6vFVRHML6hjQbhsw2Y8MJsaiGwfJxAtzthoa41w7Gtu6VYvBeZ",
  "key32": "3Y26jxEwJ1Ddb72JGXnQqtptHxmK6wzLc2DArHsycL7YeALrFuLZhbUczNCNs5tYtoM6JPBuUoPYfHtaZExnrPUA",
  "key33": "2fTuJajmbKhG2jKkpaRb26qBoD4ZLBmxZnudAQodnw2qMgc17Y5fhhn2KTNXvG9egcKmEFom4fQVq5Hv7dCTf44K",
  "key34": "2DsWwxxwj7dxYbtqriQAVKUthgqKRJt2YJExrKTJtQm5JiYvfS5N7nS3nhswMXSLjss5VuuRjJ5BzsUzSBRs3KrM",
  "key35": "4MMFtZbjujCAHGD1Rg7tDK8XLuFNcAPJ1fGE549siSCH2amuy3PC6xdC48Z4gQqeqQz3s4EvfivANDjQCb3oZUU8",
  "key36": "322az56ZrKzb1EXnZGHpVojK9tByCwDN51sFcBeMoEyc7hWeL6wWNYzjuHvKK9QRiriEJHdkmTEmG2kKgAiJm7c4",
  "key37": "26PW69hf3ykpT5j3o2MkdSLaPmYDTQHdJQLAyPjjTMBnHyKK8zxTgQBsNdGE4ZHixui5pEDpaJt5ELxKksKpths9",
  "key38": "35RLiNv6prhaLQqsbcXDGN3pgFD3dvWVDhgxt71fy1PobxtN9nwxiXwprPvn1egq69Yx1s3cbnFf4Lo74dhpgtaj",
  "key39": "55UvaGE9eRpEV4j1tY3hXveKWbf6ia2533nnh1asTn8KX2STnpeLYH4RGau1ppcAmSGWDdpTKrVcsPj6nimm4cu1",
  "key40": "4r2Fnqp41bquLjg6cxhb7Nmu14DAeVbHjpswad9C7w7jccsZYCCExQqAJYJtuZhxndbSnE5yvrCMH9oDN2WiULme",
  "key41": "24n8SZzxStd1gHvXeo2Ui4ZpFtuTM9gRAbLKmkYjoHKwK5wPPBYbesVktNKWaEXwGSMLEygu3mWWJ1df2KNbANQv",
  "key42": "3isbDDrFxfzP42H1bj2PhenmJsfJL6Te4Y1w8ovm6zbmnZv8X6NFHSQisqeEa7YgshC1Ee2Ewp642fkr4K5HcyfF",
  "key43": "2JQWSfh2MMu27qmz65UukZ7rcPpVZwsFJLzjk7fUXHivtegKQhCcWZsqrnJH2oYKkf95YmR1fnEXfhDRcpDKKReZ",
  "key44": "46Fk3Nw1KUry93AtsZ8L3R63RfXjdJeRkXnQyEVhX41xQd7nEkiwK54mBZobomWCaT11tBpZyx3YM2tkQ81yWckT",
  "key45": "34bT4fcGQb2oLkcsJx9WTRLtDyudujfiTrqJkT9LLwt4t64bFD3cRC7H1CqP4mkc2un5jQes9oWAi9FGTdZDaVQK",
  "key46": "4szUfdJhGY5DfLkyFGUuEBKg7XoxN6sfbdvFK2wGQWzLyPw4XiRdfiTN8Szg6eijvpccztRjxuXEzG5pcvE1EsL5",
  "key47": "3D1gSTfk9CEAZ5diFKZRRuACRAnNpXvycA6uxSWmzXbDZEdNmGSKVFfuzP75uA9VoBeKPEDHBpJx8HPw5xURZN3q",
  "key48": "2zHLLLoCFBZK6fY9Wfh8sf8doG3RizB5787c1ax7EDXZUKoiaaybJiiBWiRHFnnSguKkr8hx97QbMb6rY4Qz1EDm"
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
