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
    "3WuRvk9kEL7CPxUhuLjC6vHpxrzEVvi4tUtWULQq9sCtogrmhqAsZPyvZH9twnCQyyEWbCDo1HnUhkUobShjEuHQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2J973Tho5Z2MVVVztp9aidLFWdvAJUdt3KfEXAZukdfkykVpnpqwkx4tsHfcKFEopwALrRrDVdQ15bYdLgNxcVCD",
  "key1": "29btPGVaxUxL8G7rfJXYQmFi1yqjkRBbzuRphF84WChRodVVrsB6uFdkg58fccXJHQjJ6ZDPnWhAi8GoBLA7Bh3W",
  "key2": "2nWLkWLzQhswsVbVcSzjCc6MczreUugdw9t8hyCm9v81a7ypARuMb2NHbAcVm3Xy3KmtBSJsePfQgpTjsgwq9C8n",
  "key3": "uTsntpd17Yk1KgDSvXJaTfY27oNhdYdGLcByYMWDxoHusePytrVZEw9NY1yifZE57ePha5JSUt1N7yF2XfAf1z9",
  "key4": "GUUEaVKi9m6WYiBhiSysc4PKXwzMsxEnkz4xii1gDzfCLVwxuBte35cJEA2yqxR6poYJgiJhJrTYyKCkyc5EkH3",
  "key5": "2AY7dU27bU592CkryvUkzzGKnPrv6ec39BHF2rRMWn39u8n3thgZV85CiZVvMLUTFXMdoV9BzTBm3hcV2iTsSC2t",
  "key6": "2BBT8vwsD9i33DMzXaUPuM4JaJYr9TiEAbCAQTtdKAefGe4ta4QsDecaVYoKo9EtaAWbYsMCdS83gqBjdTh4pdjd",
  "key7": "8Q9f3nswZCXobi6jEpeaH4Lc8HSGj2atSHTvzAM2uYX3XMfiyzKEtFPVwwJzyfzmFeJVaiy3TMYEVwFWV6AbXCc",
  "key8": "2r7QFy4ZAwAWM2WSdC8NYTkanAUsHJcNZJvKtwq5AdNbn1r7PEn7VYdZnVw2mywYgoKM2k6aJkoMHZHzTTLnaPcQ",
  "key9": "2C1vg8bpmGtxNdM2gbbiJm8Mt285DoMUL1a7JnLFkhqWNxffKqHGP5MpfUN6wLxBZwm4T1brMS31abya1KbmY3MF",
  "key10": "5eBYrJHwJEUDHXEzoUx28jxZXCV8Cq9r6X5jSKebgsL4QCVKMdS39gMd2Yw6Bmfw8Gi6rF4osuYPzfFdW2MbJZQR",
  "key11": "322ywrEKN8cjymZspYzznjktntXHQD543hmfsojgxoj4Mq7Vdxr7gug7dHRuzzrA8apSjKDH95L2Pi1421CPVYDq",
  "key12": "3sF9qDmH1mnLm2osHsVFWjwV5ybTGYYN1Qz2KowQFVg1BTctyY2EoZ4zvD424KjrTgrxtNZzBAHyswyKtpp7tvgF",
  "key13": "2UopP4v8Wv7qYYHDqptZZgvFHz2VGLHp1dmWWPyfJ7vFZyQJP2XekieNhhaQWiGxksrYKgW7PvUvwwt24TKoNw6R",
  "key14": "VSsK2zmbjqt8TdYdnu57yZqdu8FdvKmmFh75oUEREZgzZVp4Ebw2PXtbqPuZiCYU8wDJRczgF3GG4wDFfGQSboY",
  "key15": "3fRA7RjCAQzFXUNp9guxh3fEaUM1sxTnvdeK6Zri28Uw8pcdtcXFfCPLQfZtpbVNGketyxZKChFPNbLBs4XB2eTV",
  "key16": "ccAMA4qDyXuUBAoKpxCxPBG4cDjq9qHMXs1GcAshDLryQFFQdVNUNu23pQDoFwZ3m7PmQ9ndgrnAyGeDuuio4rN",
  "key17": "2UH5WYwTpuXrrPLgb8yvrAXjXrg8ay8uKcrUXdX75ghMVKYVBxxoFE2TiQR14Dq7n6chA7Aap1wx56e3unpscwGa",
  "key18": "45cWYiUdrpWu5WkppH1UafEGVSa1K82ryekhZXMhAmoixSLqEABC9duvihwbYLXTa9MBLjiSz7Ei2DtSGab3foy5",
  "key19": "5rYYTkzGS1NATtWyspYjAF1zU9evWyThazN1A2Zp3HhCsaSpWAQjDtuWXhXboz7wBsNi995SBrEzswJwxUeHLw8x",
  "key20": "2ujaKc1ij2mxDCsu79nmpSRD7uDdYbA92LuDKSwZmTN7znPNAMWLY9JUmXuhrohsvmviUKxjvhn3mhQCmtqCMTiK",
  "key21": "67r746Rh36GRCZ8AaytkC5CjEkoWT26vtv6PAXgE8QJ8xX9mScU9UikCFjJrvMs4vrfQDGgxy7WK9bn8w7egZKEQ",
  "key22": "4ehKrRWrbXwBPR84GSxD5xNU9GaEy5q3bmHjnxGcsiiW6wSEyo2o71WEFpTQ97JR2moqhWzPQGMJDVf6yr7SnWn7",
  "key23": "5RSBCoHH1Avviz1L7iq2TxpiyNaH6MbENiFQdZVmZHdrUNX8RGkfKCtXWsHrZt8FPhMCTzeLGJ8MAusRPYNSk7Fk",
  "key24": "97wHZpm8H9QVbD2bD3evrPXJTEeRbF8rZ1V4kFoZRwhm1Jxc7fSmZV83AuZeohXczLiCcV2QjruWUnWuXAa9XL4",
  "key25": "3QNoQgbWsjeCc72QUcWnUjXqJpPKmPfieg3J2SeqsQ6SvxJ4fgoggrA5RM3GDCVA8XyCfzV8DgYLuQVzGecnVvk5",
  "key26": "3qD8fRJKkL9EmDzGsrpWcwKJTdi4Gr6aGqeYrvjzWB4b3TFXNz3cB7XfdVJmvSrFaKpifxMEvMiaQEpsdtnEuZ55",
  "key27": "32Qaqmm4zqz5JUYYMeY64f7E7JC28dxBXHA1gPxxiQ7ooCXxNuevNMZFaz8ypMq2tKQ1WsrcQLMt6qdj1it5cGhP",
  "key28": "3psvY4suHxpCh5CwS7JSWSRk5QcJVJhaix9b1AR4z1Me6rV1vU9hYBVmKbGyYFhaTBu7YTpDvir7TvJC9PDzDmRt",
  "key29": "4ZXSewmQFwZjZ46SwK4Wv25sjqEbt7PeU5w8qZcdstQsA9qkEXGzTnxVfvo9gBsBM6snLwHtLVtnWG7wPxqPWNgj",
  "key30": "5ECWr4CQguGzgedVxFywwrgoFPxFEk3RnBF1s6BnE4fqDpTEDXVEKip2xa78jKoLzsbGiJeTeX1AKMyyRGj1Tuae",
  "key31": "4WUdHr4UqAt33EjgY9AC9dU1WwRBPss2noq7QYdFWRLQNaeBThMSgZ7sAwVezSmTyUY7LjXZK3QvGPw8G1xhZGgr",
  "key32": "4E6vStzGZE9oJfkKgnBTmTUeF4TfuhnV9kJry1FxQBjPPyFmFNVhw1NGigvZKHkWeonbCnsvXkNNMafwz91ZHU5o",
  "key33": "5uMxBtFAyhu5KtfF2Qi84nfZZ2q656t17CChAa8P1tM53FX5wRVAFVpx5QPzR6EHWrX9njV1Qq755Wr7gXoNMjod",
  "key34": "58m44k3HaV2GGx2pwkpBgHAngo8T7WHPj6BD4WAeETXEquCnxRBCGHziBui3a2NhHhxfefZ8EF2RjeX9GrE9FmW",
  "key35": "3xZDBpjje2cHyMRZFfj4unB6YQ9xYCZCKGtLX18M3PK3UDiXMMK3NqdiRt9FwWT3QJHcsPLHqp6Mxy2BKG3GmWCJ",
  "key36": "3up1wjhR79msj7tnoeizsctx6qxRiWNo5dRuMsVqFiciDfbbH4Cfz5VVN9zMpDtPQGikScAbsWmzQgqNjWwzJ4Zw",
  "key37": "2Qh9MhwkGeEpg979VXZ2Wdj6ux9tnLKyCRa2V43vyic5DtNNsF87SCvefGTrAfkiisbu1KGGa4HBEADiCfc7q5d2",
  "key38": "5HumknqRhqw4v2Q2Qw5FYY57LbTAW4B779SiXX6Qn4WqQS5jieWCaPwUKziEysvKyNHDUFeLHHmNAc9VdndRtiYb",
  "key39": "44U5ZpM1K8hDGyJuyZaQ4KE6BaaeQ168Kb9FNQSeWsuPKWTnNhezojDjYt6Wyram3kQ6cCUfYqxkPqeYr2ffR3he",
  "key40": "4eHyYkhHmyFpSWPdzTziGYbNAnssmo69zHCrCfBJr5CnE4DLPrWKUv232pVocjxjn3UEXHsRyxL3rZcL8pPNx2Zh",
  "key41": "4kbw6i6yDke7zax51RFsdik11jKF5Nksc71NnVEAENGJzzjdzrUuevNNTf7uwz2vxMtkc9GkdsW2cf2TzDt7LoSG",
  "key42": "A3NnRQ4wN2tH9ZU5z2dMWhP55JJYBxCUk7cygtMyD9XRAFvmhGUourzxwiiqwsKNmSZm9iT7wPhzykkydCWZBiU",
  "key43": "3D1o1WEyd8SYopuYcDUAtHacKmPhKHSeYB19uP2o9k59XfeBkcaqr32EfzwXsdgQfZxMFQGuyHLMio4i8REGWpwq",
  "key44": "5xM8GcryC3exk8N2AkWvmfJZRmtPif1kXU5wn5yhhXdM8qtBHKjSrD9MvLBTPRc4bm1RZ7t2EQgWRz5PTBiF7cUo",
  "key45": "5CaczFGXRE9xkm5YeGYydeNxrHjukVENkjXBQALZR3xqtxbpYPf5p9193ypRF8B8MwAGPB2NLnS4Dtsq57M1vv5c",
  "key46": "48aYGpn6E5dhZKFAmxQpNz9nBc1WsQJwuYfG3ZzQJCxWi7hxYHipQZFTwhtXsmc78PovwZM4Pqn5qcJPnVWJzy2v",
  "key47": "5womFwEf3MmqA8JYh3it8T6g8sv2EHnPuaytVz3h2nWzSXWi3JKokBrsgm7nAqRRCFmX8MyeVEy1osDrj7et3dbL",
  "key48": "348UiSfGfJkJKgaDBsPWaXt9e1sBS1g3LFxy42aiQhUWUzFcGi9Lme6CdnK3TULBGF1T2U52hmC1U33Nfsd5fiKo",
  "key49": "4tNzDU2HTAukSR2SuX68Q11MRWCTENUhFQsn1oYqG7UGQwqUBu4TQQHwJTsynyadgofKhWgY73fPt68sCA568hFb"
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
