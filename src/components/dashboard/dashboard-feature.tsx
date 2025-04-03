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
    "2sM3A8e9oGcR7j1yGxifN9hcxAGUGjyPSWnWpp8wQ8vGJsSLV3EWKqtNhMw4XyJ6KBTugn7cFvaLHG31C4EmjqYm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TyhnNvjTEmJDb6pAttFRp7e8U4w713G1ZX1QuvpGGMdKww5EoxGKDETkcWaqE3LXsmpWP8TUhCgj66Qj2Kiqskn",
  "key1": "dAX4Skf3r47vozfxkTLjrBvD3ZAxackdXP6N36v6WXZMsCDvVt25sUUkwuNqZjnpAGsFp7cnxigoUyyWXy1YQht",
  "key2": "4wB3yHvrvZDXeoptygtMc1HYSgiKd8bJHgaCqBdWXwTp17yPPTdQrKozkXjrrQ9NEBimCAoEr5K1U9yJuAyfguDG",
  "key3": "4oqohtqYjXhDDZbc8egC5os2GWaFKN7oxFL2XtW5Gnz8b25eTgjmYnobBbiQ7J92nLGg5DMMMupQqSnFBSbVHwfv",
  "key4": "2ypPhGkiaDVcR56FpTrHnAQ35UW3RaJDiQP5AxAL6zwH7PH33VJH8zsC77zT5Y2d7X7XTrseJYFndrSuT5CYsYaM",
  "key5": "54Bwbr6JuxoSY7wc2BiycfjjLPzj444oYvwGQ5o3DXNLAuuJRRaHxBbHG7bbmviz8sd8PgKtucSu4Hfd2Mss4ETk",
  "key6": "2DMmY9eucARWwwnQsTa9JiQ8keUX2ESyGURWzhzHgC3ES9cei54XoV2XKe2sKvEcXW5JHaErG3e9mDGCinntAtWK",
  "key7": "4hVjpk31ymQ6oQ7mHH3ZV7wm8PuikQXaKJnAwoFZcDPhy6L9sJK1AUULtPZTtkT4vn56U3BL3XwxkJVKMfCpF1X",
  "key8": "kJJsv86Yssu9sYnJHC3GEbLxXAPa9BDRhTsyfGM8zJDnGcrMykDjiEyiEEDwUiCskVt4Lmo82umY4G1LyufoMQq",
  "key9": "3AJtv3BoGmtrn39hb7y5gAJ79SirEBZyQ2MZKHrSxvkL9WEg7e13zDp4UZfWBCkP3i3HF3U8pGVcT4KfGBsMd2zF",
  "key10": "5Pdj2g1uGvDNnemqMzWwZVpcmdXbxq3S61SjKMyRK6U72ySqky2LRrESYQcVuphb8XAEW7w3vsCPBPJZpTCEtaQD",
  "key11": "Ewhcrv5YwLeskznKctUQJtFun31xF3MhMX5jpDjVGjXEgjaER3VCT7nfJunrmCWeQc12v4repq4WSSgSGdLu5zo",
  "key12": "5sz11CHnKd5tTnYPcX3eJP3hP9L2sz4BuTJ6PTjnTMu8sQ8Ks5ipkseqSv5C9Pn2DQ3CccfTVosAmtxHJ6fDkq8j",
  "key13": "3aXvFc77qvLcLjEDEaDfHHwZdhVJuYo2fUgC9phnM1srp2ECCUxTHduUqdX5rgDEsA5NBjEYw4Ap4WqS6XDUWkJ9",
  "key14": "qtgdJHkerjtU7gYQXRDasmprD6qzmCeBY2onczg4WJBevnr7vKnzTe5ftAQEFyTLTKfaaVihHwnEy82pTu2JTTA",
  "key15": "4zn9x4DbnGCm1zjCUNK7P8PvZX1ehe6kdn28KjN7vxVFWgyNL4tuRLR7AHyUQw1C5XzSvnDZazhGvvotSKpVv9wr",
  "key16": "5KsHP58qxHNSeCKBiBMX1fCD6oVPqxKvEYc7PNDLQLTsV2SUQtDnuJPn38Pirzy9REzNa8DKowJnFV2j6RUf9hQ2",
  "key17": "fpMQ1v4JNbmyGTuWXax3oa2kmXvEpXeQy8gn8h6rK2USYNYwLjFRecyuCUruvKtU47p2zvfFP3eyLZwQHbkqg9d",
  "key18": "5Kyn28FKC1AwEAx4PFJ82xX1CZeJ2u5Lz2UuLFbiQ6jnVqwHTZRG7JM3NKfVQNgsYNqux48PikZEDqh4YztirR1K",
  "key19": "2Xq6DbjNh8tF3wqr62g3U93Ev6Bm1mR9GYwK9BTA17yLik1SXAhV8W83nPAspASbE4tVUirja65tzzGvXcoGzALK",
  "key20": "hxGu5MLHvBJpuCvPy4Do34QHnXbGsmB4onfQ5by7a37FRm9CbjhBC6HnxDPYEXA3YX8UJDRuVRR6AKXr4nNFNvU",
  "key21": "4V4VcdGipvGNwcLKbDHxWPFBVeabsPvDSeDYRgcXyvuvPKBvG8t2Fg1YkZf4JwatnKsthwQkZJWVZUxLY7nmQoqz",
  "key22": "4rMmtYzJH3kSV8SdEY2ZjSQr7ajfuYXFag8Zrx6UXJwYCjSP8un6tvbuNq4tsna4LDMy2YfZpZyYdVTGDnSFf8FZ",
  "key23": "rjKU6pXev1j1Cm72Dc1EhC87XanKccC32guVwTCaUqp3wnzrBqpzdPRwkbKB6Td5XDW1MG7js4BaY8Lu349tjT9",
  "key24": "NEfBNWr1UE6WJXf49w27J3xboLHzgh7eqsCqmn2qVf4jthkrW1Nq1MmjJ5U8pjs6f5gk6PJSnWvQWqb57Pfrv4Y",
  "key25": "4G5WWv8b1rG99sWFZA2RRgcPgF4WDpyuj1cfVwjnWM7a5LnU7zMMtHBrbmqf3mTNhBnGxzTQQXdwcxfgqkgcEoL1",
  "key26": "39qoV8QUhkFws2LyCcbY6zfbTCNVyGweJqzMEgQmZj7fQzR4nnoPNMnUY1GynJap5S5BkpWoRSeR3Aa1rUUnzRdF",
  "key27": "3YTTyeR3Q9mGoTGYFixY5WMWrEK63oFS5H5Juif1cUGHZkNrUi2CUGPp6vmTQoVQhyK39UgWNheCxbgcwJZdCUeA",
  "key28": "Y6rpAg3UP6xjUomveDQ85YsADtw6MeQsR5p6jiE3GMR1Gq6uZ3gbWeGdMEexeMZm2QXwcLDpUrmNuDMbxTkkyLN",
  "key29": "4Tf7jHYLH5ZGYj6fxCRY4rAi8izFPEerG9Mc9w7HDqn6NdZkhGCLASujZSW1yvgEN3RQiRMupohP3mpzvzMu9WNw",
  "key30": "37qAxW42W7tvXvJ2qQLYehGEnk2xw4StcTzQmnXHwdaY5EqSukXuuWx4UiYhwKApjjLmQAU9gfBy9pr3wFuGHhEi",
  "key31": "3xK8NGCfgxkq2TPvDsQK5C9n1iCzGKrKU3ySGLsQdPWdCEUJdY3fBMcYN7QD8jaHNGRHgrVVPF7g2TCH5WdYnru2",
  "key32": "2P65Cengz2CsHiEF2JHbt9gdohGybohCLfSzVquYtzSTiUxjGJRMPxVnER9GPTaVqSSSCHQRTHWSPM2XybHaRNvH",
  "key33": "CPqh1GFLF9vi8j56sNFEVH4FuVfqfU8qj6dDXYftQSbsAGZJmG8Jtr6vUoDHHZPB9Uu9FmAp1oJaXRykC1h8bPa",
  "key34": "63Kjy397oZsyyiYDshC2wui8Wt4QWRQrevGHGs84zfXdk99zj2rVoitBCWtGQYi5MedqJd6cCxx1empRNkw5F5Gq",
  "key35": "4MgkzBGBKwqFcZGmMLzvLMxjRHMxaJkFafUCPSCGawd3fDujLWo9HXZVuvJCJcVMQpEoTFSeNcsPQuUx1AkCt14D",
  "key36": "4ZGaEoWXGX3mJuYA9CNmqvGpy3svZXVWt1Uj8L7aiMtcybmfVyVjq8xKWKdnacJHEwsUGx3njkTaAGMPNiGXv6iL",
  "key37": "2hzJqzeyHtYg2gL4CsTkeCLMYFMdc8G8EmtC2ta9pv9o1s4wKX9q58h5f2P4DioXcXcGHyrcUrBjrB9dSfqEpbao",
  "key38": "4odPZo2GkUTgW84rXxgEPi2iFdTbwL8wNbw8tkwFhTxGbd7awWBtyPr6Y5jKFo1xCpHCXpQgE5LLsFVHchDBrun3",
  "key39": "2MpXU3ZxJJ4226ryodiHARJ71mgANz9i8uVFr5rRT2keWuuXfmiheW4zZLUiR6dk5eg8XH5DQaCXaPPsRuupZGiV",
  "key40": "2AVv8smDjXy35LqBNPTtfuLJPipbPvTtGhpHjv1RGsQK7VbhcDJFp2wcwddXrQkBa52zbz1MdnAdfxZ34392NHKw",
  "key41": "3XniVi5NqYrj4T8MmiAuk4f9dPC71wpjHfPrXnjvuSiMLN9b5b4DzFRvmpxc38W23mbTtdsc8Pu7M8PgvjdmAX7P",
  "key42": "34mCHay3wWwtAQGaFgvzKFAToLULCYLJxVGMhrFPgXS1piR7hGznPfvQuwE7RkSiRyWut4DxUS65pyagQVH8ZEFa",
  "key43": "4LTJzZ7Xpe9854hKuUfQH7gcBRKm8CN7n8ECiTwrNvFmW7io5zeZPE3KHYaJKsvXM2T1ydVJ8TGvDW13RN5D1F4K",
  "key44": "eCNi7ALn1Vzdfr7B1SRk8W5xTvNG3tUQWNfHZX5qchfZSEgTBHfXdJiSpu1dR45s1ujhzzu6qPEqMCB8FJYMY3F",
  "key45": "4PvEFpEZcJjjNx4ir9epYLuUhhNubLch7k7zMDPMyv3xZ4oxZdTzheb3KoZPfMwHL6VV7nZBRrozLhVT893syPZq"
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
