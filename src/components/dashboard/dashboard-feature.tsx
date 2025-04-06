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
    "5Ljb3fujcvRT9ruHgYQDEYxQz1yzuPrp3UpgPLmCLUFKaDHCgJypmkP2iQ5PPVW6QsXRq1iQh66Bs7rUZjLe5rgB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QQ4x9G4V7MGZhd1bUk43dzxL9rAobgscVzNBEkRjff73CTZLddsWsx3JEuMyx2put3Y7obN92EWYSETfifnL6iV",
  "key1": "4EW8FibzkEAhm6TxSsZbbMVk1bKhxrBwUnotKxV2pi4xXGPi4VhR74UatjVKgE3YmosCqBiEhnRSshBRf78vAtj4",
  "key2": "223ScjEeLNEMRt6ENYeqMJCeJHmRmo7S9Un5R1rQSu3oN9CQUoEk4ZZWse2yMTqFgrVNcA27E527PTzMZPK3arN6",
  "key3": "2oybZx2BzzW71B1LPq2RR1PDUnCgNuZsHVcFRwoyoXvU6qb5QuS1MvMc33F9aym8SQqZ2Pn9tGQpkeQKgVamtkaj",
  "key4": "3jT8fCmJypaoKcGmEELX2yGhiHPCjFN3dcjww41Y42iuwoqLWh7ceA9QkjERYBtaQ94FuNuVdfMsgzZhvAivuxQF",
  "key5": "3Keh5gEhAUqF2o6L5jk6njmSXpbgUE3Ee3CzJpXJ8uC64q3KT1yZ4Bh3LAS4EBwLWN1BggiVo68qiiuANbwDpcin",
  "key6": "KUmqCHWreXT5ToRa1xEA5tnvTLuo7HXt8xo7ZzGAkwk6r6kPHRtZaig1tYuY2qDSAb9Lrj76RwgEVxSgiGxv3Zv",
  "key7": "3YdjzUeNisHgvspzPvhwz4sJbcATeJMdAusSZ8FdvCYixc7RW1HMQiMYArZmehwUKeHK87dQ2onHDy4jkn8iyCZW",
  "key8": "4HKtVN7spDwNDQQMz37kkxrutEphmZdNga4VkAKW5yFoKYVuTCtsNCb9Za6rKrZS2M6CxANmuRTLU3R8z9fp9qTv",
  "key9": "2p2Rx9sdWoPvKCTeGMVporuw2jVTo3vcY7dakWYt7pjG1845B9p4QSznVqASi8G9wE8MCdHLKJoi4mirJM56r1YE",
  "key10": "JULna5amZatLKaL23nVYgBaRpBKqjZEWPCU6pFgVjyakNTCzH49DKWsoh54CvRrdBSnQZgDg946CJwqMNGYCWAV",
  "key11": "P5Ff2tyLhkuTT7MiU8ZZBxy7CsTeaAA3oT1vU85zFi913FEcNPmPmGbWuM28B1eeG8uyGALZKUAeHmVhtmMFQrh",
  "key12": "3QdrD3RjUe5d5y2R9K3zQSeXpjwwWNRbKMzFmcn8DDB8sdAYarYG2QoKK5rU1vmA3BZ21qRwMrH5savMNMc2PaCz",
  "key13": "4cbxo8nNLXTs6NhtYstuX4NBwrTDWHmNDQFfWk4nL9Ba2g1TsQ7ANV8sXWB7yXvuzj9QB7dAfS4u1BLdaAh6f2xZ",
  "key14": "3HyXWGne4zVtjNjCJkaHXdLZM9jYUJo6wbTMr4F49PYrDdNrLbtzg8cGPwKJE52ZAyRZRA3J2guTCwv54nnSR8bo",
  "key15": "qXRT4zWpVuep4BDhTj2SV28AZSzkStCKpVH8EuGoZpPhEhYan4kzzvX9APdNxZdgv9B9pq71ceuE95kTjBM2Z4a",
  "key16": "13LoABbhjKX2HM9RU3XK1yp17816AAi4y1JZip1uGuKChcP5BjBhAbHEbc6ALcE7R6tzS6AF5Tr56SuhUjtCHq1",
  "key17": "5h1VV2eSgcmAkXTaqTjKPrzS2AYj9U3M9sTko52hKTCNGRTm3RqgQfdnLAmU3apTzygTSnVM1Yg8hscgFtoARgn7",
  "key18": "3xsc82JMFSCtJLEjWVk472Zz7MYz2RbuLLjpWHGtBXNe5fqscia7ubJJaNuZf7bRciSvipBDp8sAUFDcSD1BRrSa",
  "key19": "wGhkakYuGw2DUEW8NvUV6QaSQyuZAHD5eLtoQdSBP7m6KcLa2XvDrC5wgfstAnEs3fqUss7usFe1FCPYZynkW2t",
  "key20": "Q3N7HAvShj2DG5eVjXZiezpk8g2XoxMEQSTXprM6sXzP9MzaBdx4EC776Qj4MQXqpgL5D49ToUqd81FyCnPpZnN",
  "key21": "517VyWA1hwL7SHz2tR1vtguoEjxEbT6inSHfkpf5umJMbixijHJgfwra3EqNnveeGwPgFQ6LCeLEts9AYMok6Jvi",
  "key22": "4G4Sh1XFVEYWfjZiuLcqBpN8Awd7AG6uQ1gLF2pcW5v3YoKFbGVhqYCXXKamFgg2YBFyXJkUmFFFAj1Ha7yU4xdf",
  "key23": "5o9kydJ9Abb4NcTqFCPfmv2Xa6DiqTbGqWs83okU4acqQgeVBRA31ezCGqHa4A4wbbjzXm2Z2a7hftTkkM7Ndd16",
  "key24": "4UHbV89hK3GFh6feobS7L89VTRtAYqdnAEgFRDD8kAA6fjtcGBiVgdbrJBUzZ99FEiSU5MQunMacdoTcNSM5Yu3e",
  "key25": "4mLM3x8NjYyzRaxdjyoLofBHZF34Txy25bMGqBtU9kVjxuJrcj8CXpa13smZ6B2RN4UTCw4WpFZq5S5awKuxbLMP",
  "key26": "4Q8VWxwwTTpNJKnftg5ffL973SDKFYxwNoMHWNPCg5RGngcBHuGSY9xCpJ5Esv1CUYmpuVHFdY3dGJMVYWF7BDoB",
  "key27": "2QynSdDzMGUbtfCnSJpYJD11MR4Tgpt1u1NknFfLGHKuyW1nSFShgCS4AQp33tPrcSVqDBZvLSSoHtitq8J4V8Tk",
  "key28": "4cWM4AFmt8RW8YWquVnu6nwt4izYropNur3BvtkpUpPBNaWr7Q3aR1zMuMSnFdH6oJZYqPWvNwYLPpCBzGztBD4",
  "key29": "3PvdMKDb9MnNuDU126YFhraK1rEvboVaxJvwdXMGxd2m5THCJcGtRdNkqwScvrT7rbPyoHMj9AXEva5ivYRfEgnp",
  "key30": "3gK63DiCfxRd3hR5fYCgNgJMgHkGvc1eUUmNd4JR53MEhtNNWp8V6MLuFYvy3Nezs6zJCxwcknYTc1R3SzS5FV9Y",
  "key31": "JChSbsDqG3Aop4fRDXrfraTVePjLWwe5UfouZb9KZbdM29s2RqrFGjV5UtE9ptMvkoFFbv1Y7wdD248BtUoJVrj",
  "key32": "2LsWjJ1HGHsFtuax73FX4CwbP4hBJk1xs9FqSi48qsxZeo6ipd43roLCmkmQ4CeoUCcKfqyomKQ6NZaGZAV3GE6a",
  "key33": "4nF7z51raEgN7qtGHN6XdkSVVPgcYQ9YdfRYQyMGise9nwCtX8jnaJ3gYzZgeVFH4HnCWxJhbfiUvRaspT3Wk8tw",
  "key34": "4hsHB583VyJ5txCQdKMFgRFc9g8gwiV6NeWztW3LFCFKoNn1a9BKffS5RWSpKd41RNoDw3DnyfXF3CVb76vTs16j",
  "key35": "fSeJRs6MpgDzUjdzSXSEkYRq86RJsSKCp9Rjuhhadieok5ELtZaw3EEEZibo5hrhVXAKE8yHW9cEArQwuBmmsuP",
  "key36": "4G9CNniwAuh5zuwu9Mi8KqpQxGR2cBHpdhajFGWpsiFD5smYNkkwHhweZiCayKeLHioeaxJUxCAxXcDoBRmELGKu",
  "key37": "4ZkkpQkUqGcsrrsvZm2pt8vpoGq3YyLZk7fitRNrAea7W4zx6Pmgkj6LJqyoNH7VsiC9V6b2T5qciVf2xHbGQqq",
  "key38": "9d4PPWxN3JhZeR47UkoVMAddrTADFmjDrUkirT5o6h4GUs1ymkZrpL6xn6ePvUthhkuc4CaX5PwLpCm7FudJStt",
  "key39": "3zEreVvwbnYE3PzxLqwRCvFDoaj7fDvSQ7v58daDM6VyjCwJeKy5KtW7YsYKr2gUYg44awbGKiUov1SPzpePbESv",
  "key40": "KhWk4fGsVikxfm8bvBN4rMS99C9pdbiQijkCpKqxqj9zdtRidsQSS3H94gW7PxEkNeuPtYEq162tdRZ77QJeYek",
  "key41": "5EHAqY9AFZJ2gNotLPArxZDvy14NtXq7wzXMp2trXrgefCFCMHBuUzCpAGUNFQBhAx7E7gs5ZGTjTKit78BF7Xa2",
  "key42": "3oKWyFmr6gViAPTrtAxbRmuWA3xP1BT3kKKysjn8dH7ibKB4grECyCqfCipygEt7UJTb93E2SXqewEPZ2d7somwX",
  "key43": "4jeFyEaTDFq6UcDBHX5p59b4je4mRqAnxArWqsXTro4eGRd5rR65TMRwjNbg6v1neKqd2VUmjCRnfNRahuFgxWx4",
  "key44": "5fZ2Cd5UhnorKE8yWUArT2Nj49McmtSbX9TKD5viY3LUPCKS76r2DTiSkVZPR3QSJvj2FtqEXw4tbDXF9JoriDYZ",
  "key45": "3tXGfaEJT1hzSai7AAxAFKkAmTxcLKnMeRTZtNRhYZPbx7HXRYHYNatJ9sgJgxfmUdruW9WedCtQcR14Pe2zkxUy",
  "key46": "35TiGt2cXCccoSbc5F3zYmSb1cQfGicivGCyDHg84HzXfeUe6CwWtpns6cDuGAZM5oH4kgFCiTwDej5L5kAq96hi",
  "key47": "426ziEou78jhRqAmLsxRbZGrXfy5fhpounwHv5gw41R8caRuAnA7ARim6giwXw8coWSCEjcwKy6buL1bnXrwzwCN",
  "key48": "4u41CTcRpuYUwr7Pb2ZSgbH51uAXgTjYEMP6PdqRMwfVYH3N7XsN1m1VCfiwCahqr92966MQPMtQJBb8S2S4xM67",
  "key49": "4hRkwhunYfYhi5wxcvbejhMNnChrJwa2ouPzgucwJcxBJCiTyLJp9inxCQeKbrMgeMXvVRKyjbj26aBiwg1Wr2B2"
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
