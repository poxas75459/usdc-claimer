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
    "4mymwMBDMZHpq82DmP4xq5aUbF1tapkCHmcDy4h1DLeUBF7mYJ9zTmMwV7W5FZNducTxb1sUQXC5W5QtT8xHqkHL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cdupMLBwLHQCNBdVy4Ko6twUjuuqSXmcAqdpz1vJsoZpMK7u1Q2LnadHe29dNTTZFubrC9sRTBdZaNraR5LNgYF",
  "key1": "2wujiLFoK2qdzQAqdpuH5XmyeQGRusrgECnakW7ejurNaKNY9weWdosC2YHmsmvcn3LapuDkn34tJgCKuZasGZzq",
  "key2": "4PhTMZz8GBiBBF353sWr2MV6f1sxsCPG8iRwJ6uv5z5aSr4SLrMsraaxNUmzSDE9A8AceyVBsVfbGQLPEZ5fmQ2n",
  "key3": "5t8VnKMWUyu7oyWqKsiDoCFTGvSgmcrZiHi5hvmsAknyNSHoThFe2ZCTqvZEkzdxVTfCjXvENdkPNnhj9cYWUqFq",
  "key4": "5jeihdwU9hamMd2Jnbhp7rACg6bR96SmGwe7Ln2ytJyh82aBuZaJ3KeNqYgTHvzEPQkyAG6braUh7sEC5rLdfyHv",
  "key5": "4kY6mcHSMQ8bfyQj99yV1ei1Dd8MQnSRXuSofR3X9feW8A5LmCjTPvHJHektcDBPmovBFEGaJ9ymsshMS3kYLJg5",
  "key6": "5P1iWUPff6ZeXeDbxtT4w2pytz5gbEP97r51MHAyixV12tVzHdhua2avrt9QAntrW4r47cTCLy58duBp5fQBKJNW",
  "key7": "5KGAAMSQYJYUiG3WoD3ZDMwLPCDBqFvd78JhFzMrU2xS7JuL8t1jGnvGBbnuEua1bCFcMVDuDxzpBNytcfrTp6UZ",
  "key8": "5X6pfqwgR3CDEc8cM1paxH8ZpdFJc1SMGFJpQaUkyCg3keZUcphAzGSpsZZywG3mNTAYZMxsWevm3ZL69u8LMFqC",
  "key9": "4tGo5XMND3rzc7BbhcUqA21QcJieQFe6LG7XbqXqZ3LAWZeYpPR5PYTXJo9vhvsDbfWgDnYQ8xZM8a3i4uB45cAY",
  "key10": "2ZVECDLBdiQqxgcdRaCy42tSfq8zzCqBUxRcZRpUiLaxmui73feKrowcFu5mxGhYyRQ53W5am644tVaTvNkvTGiW",
  "key11": "QPWeCfdbptENtjdbBA2YjoTzTiS3EXNhLksog6VMNecEH3isvr3A5WuWEb7urXRc37yy47J6HN4ihBtLnN4K4Fc",
  "key12": "2E28fXFX1H5kjxFgtkvgd8vqBLCYPt4MV2azcAvZ3ZrSSckpaQiLBdmXu6ZGX1MsWwFKMowGepSw8bFN5in5SRkh",
  "key13": "3vKzCqYBBVnm8dFqHzeTNVT4sKUCW5LpW9ud6Bh3iJupgRTmUWQfH3ZMEgc5yk4C6PNju7oH6nBHpAcpkUj6QXF1",
  "key14": "3oWoXAvp6MgJCVG1kCjLfdmSV9Bp3YTC8c5k1VNvJpUNzwHHo3sFsbj2pY7kFiBhmwf7GP7fHMYvSjYt9AEXxBxP",
  "key15": "pezBYkdqm3Qv8hLuzCGNWdhXWdwnPkhxyiL9ACjsp2TL5CXwujtqFiZ3QMkis45puEAYF6WqD7rHGn6cSxzsH6h",
  "key16": "3noMGuJJoSiF2EWGQQcdBtnQ1cVGYA8QNNYjdFeNk6d2JEN4Peipj1L6AqeJUUQZNoeJNCUMJfTS3WNiy57Y5Us5",
  "key17": "5MnBMKCkgVsHtriCn2CsFRdkcDc2zGGh67z879Efre2fjA4oU4TmH3ouL4RUPQ4mhEidVkv8Vk2bAyAfkePN9g24",
  "key18": "HDmKqovNBmSJqBqLBZJn9ZSSoZGMqHh7MNf8NePjU9zZLFPMJFmJX1XoWJBgvD3imaCZZZFEs83gcsYeDJyTz3e",
  "key19": "dYfEiCByJCxi8RmK2MdfmMML8vVFL1fzLrLrKSh4pVvBodhVtRQ3EpVZSKdTzqpvbcPtwPKnDxFC7A64noGnsnu",
  "key20": "aaiBBdwZx5fx5o1EyAtgDq6kJaPZpWFSJr5YRUV5ocvUSXdo22w8HcbV95Rv3e3AEcGG1Fuqi1gfgYhTMQZtRH8",
  "key21": "2w4nhh1XXTvY5nQrU5ngV4CxUtLJjgyma4jW2m13JBFh6f9czLVu7MmbLfQw59WT8zdEonts6H1AxQra2G3CSYXN",
  "key22": "2Yze9Y86NwwEo4WC4VTHJy29gHWqRYtAvhD1QTaShXEh3UTAjeEXbTorNbavgAPDy9C99tnCHeSLaRQRNG8jd7fc",
  "key23": "2Mpma9uAH11ufUatFmoSpvFtZGnGDJT3wq8LEWuzcBtpLANTaajcbn28QNBPTPQaHMbNJQj9YoJzyenR6LryJj9S",
  "key24": "2iThzzje7nTez9PYXCnf1AUARESm1qzvwyqihKkDNeXUFpHkSovpsscCjYH9qT8RBzSoFKQBdy7f3aqkgajLcK1g",
  "key25": "3W1zLpzSxuTDy6ooUJC3bAdURaDiWKncGaMPRZH8BHSMXBvBkKNB4K5QCEwKpE5iWFyuHha5AyMvvije27cCbgXQ",
  "key26": "3sFwQnSssmEzHqLzchMgJQY3yBy3sKK1thRaL9syjKmiEfmXHSRBmFKsyFzUAYac6RsxKBoNDxu8mMNoZyy8vQW",
  "key27": "4TeZvahhMbuFEV7EmCQaLx2jZBE5ztoWRrvfx1PtEMgEVoL8nrgLjE5zFZkoRHfCNXHRN6HEfkCoCqmWuuRNCBYx",
  "key28": "BYJjD9KFFuom21rQey1wmfrujWTEvjcNyXZpij87mk8qcurvxNvrCJE3bQLygdYDP34L7oVuhLZmbg7UunT65oL",
  "key29": "4eCerWwKJAgDHQidmE7M5TSbZLfZkYzyE1KWZrQYS4WDqiJ1PdJyLkhJpz6wrouhHokybFs6kibg9hgWHHESLs69",
  "key30": "2CBVVhkFfSEQS8AA5zokvsyc5bS9kBr8mEc16BfF7NfMn2uYJEAYqQmA8xGkNEQBnqzsA5KuSVuG5rFFBMThfcJU",
  "key31": "27kUpk7woVTSiRAPrV7JJhDobVvk7FcftPEKswvj8j8D4bmke5pjsxGGTQNXHiHmgJpCH4NUWSRy9dPTtQpk6J3i",
  "key32": "2RvbB6dWg52G5Fn6ZgUuJnaFuEi6PGstd7DLeY9U1jY78VmGAq6Knena5YrGFFmR1VYP9eD3TuJqGQhU5xmi939H",
  "key33": "2mMEBBojUCMvrKNXR1JAfb1pB1nBGUkcxYkMxPx13TGVyeu9ayZnruAhEsvsViJp3eEZqndpfkLmiVshjB8KorBk",
  "key34": "4kmNEmLQcU2X2CamSzSnytHsAbyXh6htME9abGFP8GQ1nuW1woyvNRMVfVeXXXppRsqya1bm8bYLANa4zfS3Yky6",
  "key35": "VpUFAGpoTK3ugqdBsbt6GPYm5ZjX3uGx9o36rRCG8Tc9a9Rnm7AVRYv47XfA3NqCgiachFLQnjeVgn5yPvynrUS",
  "key36": "2bQDmexnCEmENii5xNXqC3msJzA9GuG4mx4hX2uMvLfSc6iNXuGXS8VWtqE4wtgH9wQ5nBm4sSAWseQgwV3LUmD9",
  "key37": "23HAfN6S7aFL9L82oaTzqurKJmcxj9oB8YkNnAfGwCNHmmVBadQAaPd4Uv219ataJfNNSeyYv3sm4yo6RLaVS9XQ",
  "key38": "3kPzJRT3DsDffeXfMPX4yGVHaoorFtkKNX6ytRL9nPKXdojrNsBKQY57mq3psGa57zgzmBFBV8L8SfsJ9qSqN9AW",
  "key39": "Gi8Le2nLt4XhBJnCveaHsgCSM6VfACse7HVJvPzQGaink3hrpZ11XD6TCrn7QQaprBjeQ3VfLmRBNAJmZT2ykNx",
  "key40": "55JUghYwp93iTjmbxjw12FXH6YeT5QSPVaD4pJ1KQ2dLaKrG8dhXNEDpo5GfWUW1KtciN9RXkfGYWTM26RaKcKZ",
  "key41": "3qqpLg4iWeHGBTHZzrDmMHL7pZk9pS8xD3YDLgaaKPppxMTDrj5CjYVfuQWXnuqg6g49sscPpX9Q1EQhKEuBu1rH",
  "key42": "2taASYPymt74HcSj8BAspbq3wDaPN56evBPKgNnoxMN5aZYvfSdamSmHNShc8PCND8zHKVm9MWkNREHst4bqcZLc",
  "key43": "44vsTgdEv6aXe96qEvzPpwrJUahdxJhwdX71X6Ak98Uj7nK6Eair3WrxT7hxEmFYCcG7ttGE288B31qDWe7DPwns",
  "key44": "5nryFj51BYKJYn8b3gVCZxV62mpSEvNgY9saA3r7P7n7rV7ykn6VcViNtQLKD6gQL3eXog1yJxVRwuB8X4mzhfKv",
  "key45": "4t8rDRtfChzMqGre5cNoiKmS91FQBzqbZUhyv4HXj8Atb75HLMkHN7HJ37NSBTSLLDb67U5VQBD4tuNTLQatfN2V",
  "key46": "5ajN23mnSNGSEBSHXZ4esU1ALPiJaNvvmtBVtKXMXzekhAHkn8hxA6LdPeAZ7R6dgLsMGAku5hYpPhJSjbMBcN4J",
  "key47": "2nR2ASz8zLfCdhyZ8M3d8KC7S5DGYmUtwGnxHkbnDGVTj8nNmc12XWBUY9mQZAG24PTJfKbbCNAc5g4XKDdfZHQo",
  "key48": "5YskRM5SNqhrcnAb8P4CNRKRNfYs28ZGduZ1J3J4249TSprhuf1brQ3QB3P1DUw9LWmoVJHd1Xj7TkcvP18WSZvE"
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
