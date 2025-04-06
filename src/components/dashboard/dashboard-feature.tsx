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
    "2D51da6FH27qCqWnYL96RtYCgiJo5k8eYdEeTrzc4Tp3GfxRbWr4jTxw5e9nGnhrz6M9SENECT78FaGPLsBxYAdC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fXkLuda8TNd36UB6XSVq1ksuckV6hx98opTQmyWMFaJYeQ1D3f5Kdg9xAuKkDenhWd4rEDyoLj1CkTqKUZoJBcN",
  "key1": "274SaXmmHZHpUB9dcTo8nciysVUWj1By482ixdLBMM4dQdrYET7MtgnAmciD926gbg1V99umtbvM25F9u7fjhLDJ",
  "key2": "5Mzi5fNq6aGR3ddrapHsV6TgjKsZYrEijL69wmaUhgz79vhjCx4ZQjV5TJWzJUu1q8XXtZVw7mDhtsNXQgskQsLd",
  "key3": "2SCc161rf5Uz6vFkNXGccfd4PJ6mEGrtPScyTbf7DTFAQkTvY7PgvduM7pdXXfM6HwKDn8WpbM7gGVn212ygz1rH",
  "key4": "3wZRVPzseEPheXY7T7kR5rP2UDaiN31eLzADTJ33Q2eTvbmcXZjj4GWzF9NaxYr1SUHS9soRqkwgwyUyFQnZDa77",
  "key5": "p73k6Xnye5uc9CGFtkDPvNwsPYBwRyyXJWc28Mm7EpegLp9tE2CBfn6S78UHBXdfLF3T6JfL7dAVvknWXmz4k8S",
  "key6": "4dn874dSsE25yj2wTcrqPP2Q6TeSbYq731Cc9K5ziJ2aWsjCcCdPfiyaSatVtD4zf1r889BJavQwdwSrxg7838Dq",
  "key7": "2MLyo4DV71B2kBvFcsvacLKqLX7tMPxEQpNH46vH8Gvcszmtuof4fZPxg1AP7YDRycabjYU79zc2by24Vfyiutyh",
  "key8": "3a5z8iWyBnfJrnpoB9U6s1qumAnhS2ZoRBpz3ZcXm9aen8uy6Pdoj3ndvGmXCJNThEYXVcfbmRv7Ccmifr93JDD5",
  "key9": "4wsxMa2q42vpmDjqfEvuGUBSY4J2aiFW6TL1ebvu7Fg1WeXVPvWD7oxxzC1m6zEvxsQVYsi7nyh6D6NxR7g6zVNJ",
  "key10": "5XF1kEczn3BDHxzUxZSAKEuQCj286wN3qgiTdL6ZP7TV9jSGX2oFTW2L9p47kot79EG3bmzcW6psefwFkhvZWD9Z",
  "key11": "34EfDEkoCTba6Wd4PFgppRNbUoc62qgJFoz2qKmj6iiheGFLZMCPktQW4zqqNReCVTAEdSLFttF2gHXoQQb7SCjf",
  "key12": "4ABg353rAVbVBhTYMv3KyNmj6LvgopnD6wGj46y7WYLWp4x9sQRxDyUVNnDeXLaXew3VhzdZFZocLqKbaRkBojG7",
  "key13": "3VjAcTWfracbBDJF1gYYJR314vkGzWWKMjFNZjZnx4t9CBp2Pp8GXx2JixuK3qv3avxz9bVryfPe9CVZ51rcBfA2",
  "key14": "5QnieKnTMhCKUWFEnoj4m2rpvUdzcdiSjQBdkUJt9T2yrGZFanvzBvz3qnhCFeJWqquH8Nrdn3XH4S6jbNhyS3MH",
  "key15": "5V3SYyA93VqSJedZgqPSQYsAJQPcuwzg6uotJ54JUv3xC6eMNbY8jvHPD8zsgoihiU7JCaQgC289V2hnaoFomokn",
  "key16": "5ys3Nod9gZwYysz3ztwd1BKPZUucZ1VVtnG8enVYukiryTFDqmEhyiheYYqL37o7BXWDjf18YUfNoJRgc3u8L2wU",
  "key17": "pMFDdkqqg4Aj1TEbByDzE62m4M9foFw367VR9ryo7zhpkHX197Jo16qqnEHHDcgXTU3Y3YJD1o8vft1U2xMU4pR",
  "key18": "5Soc1MXiGc3CTSsBU1Q1Fg1K9sxJH5RF5iSaEVvXGwmJA7ZN1PXnw6YMnsVVSaJuLKVcBdhxVXmH8D5pdxQf7Ae8",
  "key19": "5tT9VF9iMt2RGuYtSq5uanY6LVaPLLMFpzdt4CCb9JMVWzX1BCGhkjD7zAt1KqS9oyTwP8xjZ1qvR7CmcvQVtfLe",
  "key20": "4f3B5baEWcvWKLBqnsXobXftHGuAeaG2UfxexDCAZtrdt2iBrWnxRbgV2K56gNNNtxeK3kT35RPwmTm6pvNAbCdC",
  "key21": "3HGNK245G1tmxR5XmZ8ujAC6wn7Xy8EyQXT5jHgJAGdQYmj4YrifKiWcpSSo39FQ47zyo5Ngix8vdKGWXAfeHPQe",
  "key22": "JuiJKMQadqraZPDhk4Y2FvDeD8XHd4J5HTemW9LHFeQfCPSGPhyDL1ayc7ta2ZSxuprv89MeJGaPwLC9jQ3ubwE",
  "key23": "3zjZz43UDt6fBU83TYUHh3rk1k6eCyPvWFm8stQM6ETtPb6psj6xTXsyZ3qVZ26GkWoZZNtsqRjrze7TQAVDj8gs",
  "key24": "4i7J6cxuHPgYHFm9imrKf8rDFfS1qeiryQNWkoK2d2aCw6ZKtLmpo4Lx4hSUMRybTYhFYSqLkGX2MGQCvqGm4Vzz",
  "key25": "qcHoLYjcGitWTjUjSuXoVDzeT9SmaSuayRjwdD2qS2Kme5N7S8aDvMdjiAHfdakkQZsaFMgJCKjGmNYrm21dsYW",
  "key26": "37iT4eEQsUjB2x1whaqWjY61NmzuHupYjwtHEBZwctw8YZSXih6yZkE5Qth4JCXsyFMLiygNqrYjtQfMsY9GyGSY",
  "key27": "56WF9fEbtyqqSq5rwPEJwsKcZdDHkfLVW8Qer919YBk3QXzav2KqATRYjq8n9wJGS3M3pbSYjuDMKmT5rX6AeTLq",
  "key28": "3asAJrQYYgPN6d8PZ24U6A2PjxxgjNfbVWuuDPSr8FUczkbm8QjqunqEMxbXFnZzFQ8qXYRrjCfY76XV2a8FHGD3",
  "key29": "4EX1ofcjSbaWwebMNxE8F2surLSKEX99KnK3UGSTqPDH4vAyXerNsNPRsQYEK7ZyfuXBd3xyo14TRAS1ky7KnfDR",
  "key30": "4JfmdUcwqPCasazzoKWtoUWwwmQNP4dZsYZT6k6aYjQdMhv1NCgExNzZTQiDF1cNQyftBrg8RuRT9SKDQXHKiP5H",
  "key31": "5CCZa7USs7sd9rFcUTs77Yd3XNnitsBswJWCKkHYQ4tfaByjHGaAjucZ75JRJYJu484w34zYi6JDm1F3XNXVSUAn",
  "key32": "4ThqFbXVifGwVmdrbukXqJ9hsoKg9mLYnDtacMXXws3So8g6q51paVvKioKsc8UhGXcaynU8eJ2fh1ahP87VczrV",
  "key33": "2YWh7KZDmM3HME5vd8pzvmvMGCZxqfZgSk1TJi6KJdJK4jLTNdBQfALszRBZJR2f3RHfzSGUtE5PQdm9cCE3GR1p",
  "key34": "3MSguNxbzrx3dZnA7N7gT2WLX5oreN2HjbpNQ3Deg5cVzSQ1VbVarScjAQJBTiNAq9Hq2nsJnxrDBFcJ2GMvfyEk",
  "key35": "5vquCvioYxfaiCYMZYCDRxvvFAQkUF9NFDf18jWSYwAtNfHhveQhyJ49tiNA4yKY7CSwgLYGq8gtVsAAab3JpRaX",
  "key36": "d96fpceo3TvFzNnWTk5zy3pEZ49hgE5yiPfY1hjJvCHdSXhfvFHEDuDe936UMjWTS5oF2uTVVhPVehs9d8DHzsT",
  "key37": "3nSVdmiRySTdJVPkdkyCCTau7L1cHMQ2JTxHgGVKCjb64NCFTApX8H6CwiXKmxrN64mvkRcR5bVfYa4jxmk1YnMd",
  "key38": "4XWrEvTQAKdtCCHgHWVznufUf1HTxCpD9AR3Vv5cQcd6vuAKnY6k7LuXWoRbVPqSSzYZgCCWViLkX6yKAX733EUr",
  "key39": "2AGvnUrL1aBm3ZjHxfZyUZpZP1w8WFDKXsTXYwf294GuVQytt7Z5S1sdvMhAogUBUWSBkxRif7eAoqxkbrgzsiiH"
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
