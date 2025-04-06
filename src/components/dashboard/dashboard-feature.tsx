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
    "3rbCXsK4fLPaoUQTF9dLJui2r1UVeyDhKzZZucFSMpQ9zH5r3VXGgBAYVDMCg1dEdgM3EVSFsUtkMQyqr5j9YBz5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tCyYECmBGKTDNb8aWmY7aLhAxVUJwhS3vSiJiKg2qiGfMk8jzsWej17U8miXy3kmN2Kg5TqH7D1iqPpDt9U2Bq1",
  "key1": "42MvQQ6vHvcFQr9QRab5KKt7RYS9mi4wuhSesBChrWhztggrgSYitx2pZcArtneh2bjJjLLctJkh6dVXyNs1fJUj",
  "key2": "5ngQeatpg5ofTWRur5VA1VS85avgtYecmQwZ3hfGxA7xiZyiNPdE4EMtEM8vN5Gn9oz857sELjcv2eJR5sTWHFLd",
  "key3": "4yPZnqzFaWH9zvmX1tB2qrE7UxM8tTjbhay5aQKAaYb3rtRZ81oFFqL2hUku6CEhpjfGm53iDv6yMkKT5KzRsmiJ",
  "key4": "2xSM63QKzvi3rPtVkQNj5Sw9ZhZDPpXdPCEssRBypsUk79HJgsAp79Usmrau5asCyjuKMuEu3k1xiu4YQ5CTWZXg",
  "key5": "aMgSnbqK1De91hxo9XPLpDYy5bn742LxbCpD5pYGYXzXwZvKEbH99Tb3REK53tqBpRLZS5geK3yc3htHqut4Q4d",
  "key6": "36kd1G33u5nKXdehxK2VGKCYCLiGtzEJ9iZcATtF2jvATf8kBY4wrTJHzk1vJp2JvwdziZaYFM3gLhpCPUSgoEhB",
  "key7": "3RaWYA2NJMv9VkUyacY5ZkQ3WpD6yMXGrD7FvboymqKyae5SvWYcgz2LhP7RyLhkcc4V2cJRuf7zFvHCbYHAhDvS",
  "key8": "3W5ztFbxWicswoUa5TQxRaeEeAakQRKvVKV1qHMWVR1sNBRmc3hEsJv9opc4AeERNyrRZNA5fFQdyP8iCYmdBdTM",
  "key9": "4UWVdD2mZobQNqDh4AFt59ZimzGcUyCaqRdzFS86gWEoVdrTLWDyJxTxzk35M6JyxSjnRL66c16sGTDHQ4CD61WD",
  "key10": "5FTjhaix3ci2qrtmEp5zrvwz7oDYuEpUoRUqPipSKv6YK76xC2Zrn3WPjvzmf1WqZaCDnrMhFPdcogR1k5rAxvXL",
  "key11": "3spxh9GnbwNk1jgqFjVb3qMLj4bCDGKukjBqdxR8mAmbS6ydSEAUJhYnZHbG63udMjk9Xi77ChnUw925R9taDyPq",
  "key12": "5fkjGbGXgYHuU1SFvVkZHPuGk5J4jjkCJbsRwMhzLvg9pBWQe3TqQVyikJz15RpiB7DUCNpgAwjdBQmAzB3dgQqM",
  "key13": "3uLBd6iBUtXAZZH4HaMBzmyjSyGpgb848HksvPVrs2ExNYL8VLMzCDuthVpZfEd7fuDvor726PrZ2SVjPvXK6zfH",
  "key14": "9pSMxW6FEXWRqfAfbcs2WXCtXmqC4zYFhvbYwTBFb96ryYkLT3fz64N2yfbXkhp37ZfsCwXJB4KMsGuLH4m7GDg",
  "key15": "5e7ZiVfxYi6MyzDhbVHYgMi2sYpEUNRUrM26QyLM4nsi61dAmZyNYipB65kLwTdkMARCdiNgd9raRoGie4dYEYJC",
  "key16": "523HAJ4uKV2ayg5i8VJnxUpCVXXDCdx2cQMjrYj1XPyDRhYVHR1mNgCnEAS17kgrtNezVVBeEecEdiywV1HvWQuf",
  "key17": "2s96J244T5nkHDRxYxHsVQAgQAHBNeHZ4tSCaKgAjasjBEbQEqt9q2nHLygZZYwt9RwnqnCTfTJoLoP3Ti2FJkHc",
  "key18": "CgiCqL7UDd6rzexT6h1Xw9LTz1kXmhnxxY4PdzFNTNtnb2Rvn8pg7YVNhupnhXJieLfHaTjp2UR4KNA95Y1xhSa",
  "key19": "4jrdbEGuz3UhckUk5GLRy693M98iQN9ep9AF9GwUw91KLmK7ptjcaY3mp5xvSthdN1gWtzxcCjfk55J5nmZGu3c",
  "key20": "4cewck5yqWziUmNrPVcqSiKAVDJ3PXbhAjZn8LQS69ME2zBQFs7baYE8WQFXhdiZdruvLjXJapjnhq7vbp9T2qZn",
  "key21": "Mh1Mr5ay4hAZgRejFJJNtm2sDt3bDeyiDUy9AQcXV8ThjMoAZem2hjNi7UR2bLaFW8Jz7zps7WaRJoHSbx8CWZW",
  "key22": "wZzGZ4gaAmEQsie4S8cy4MJnpJVCtsjs1jRft9EXmnRxdDZ7KouxLBrbxxumG6tfLmayyjqzShwcxPS2EPBpUrb",
  "key23": "4irJfVRpMpZU2sLLmM6nEo9djwJTtzV2sPbwT5qsutd2iZLrSuHL2GM8Adrb1q9nDWh3cPGML3QQGErM2RiGW31x",
  "key24": "3Wa5g8N4Q942s1K7kEdhQ7iPDHV2r4xwT3v78UxVtriGuA5isK59jCsCLHBcxAV9ZuN4ZPHFgnYAADbf6aFH5jAo",
  "key25": "46EMRVHEbc2yy9SeXySfD2zU8pLTnCDxfwVsBmo4P1nhcdCXNvZLeVQV9BT4tf6QMmngau9eAdm9ju7hioLrDz99",
  "key26": "3pSYgcG61ufU5mP5ExDfZ2CWVDF5899Jn8nSqA2DCwmCfUrtDtFDxXnhBEzsiJEC4VfaHugAC58W3E3PYK98JFLa",
  "key27": "2kuKE6kLggZBNknuD57dnXCoTFZ1jYHJn4WHQp73ahUDBukZNoaACBGhjSXpupq7WdKNqA5YSAzKTTZx4ZiZD58Y",
  "key28": "2dDMFLLHyGEjLcEqefiNo7y2jDTRfECe3vBPQBGPhuSHi1sBdajN229saoJMgetZdU4eVDC84TRDs8BWVyBcmnfs",
  "key29": "3jiB6wruAAnkY19dBnZdargxQMhmuoG93Y25tzCfyVeJ4ySZgEnG6oFe44qmNRCu1yun2mg1qtSi4pD6Ci11tagw",
  "key30": "2yabFzqc46qpe8SQ5t98wo9jxkL2NuT89z3yLFAAcRkdDhE2GKPt11fkLnQTpkLCpRgSU58rdPfN3oDXebiWCTEv",
  "key31": "4DgKmf33RWBAfLynbzbFgs2KHo74Ci1wJtWVRVGFWC7nGXSjdrWXNeoMwhAsc9Wd4BG2DQqhNxntV2K3cdpdQpJ",
  "key32": "2fcYRQ1kPEGjPXkupFNrstm94GmZxwytn4amoV4wu2pWXGHegyxgrfmwz1AzoDVerorzJaxzuNsCjJnedC2cGsaC",
  "key33": "TLHbteHNQoLB4tecMfpTqThd7JSBLTyi4Arn9LDs5zMm5F2iszGR7fCCYwyQ7CHbBcNq49fTdcpqxf7jUs6opLi",
  "key34": "4DDKehfaNzDqLANYJa8qDpSntAoZPJFeo6N53yJxbyKtYseYfvJwDdqrWBL7oBoeeM9wg5rdwq2gKQQ1LLZZKmAr",
  "key35": "3Tb8akfvSjXQzUEwtG9XFsoTZAMzJRHUaL6HXbHNdL2bG2pCXKRsvnMptbcnZ9UtWtSQVB1pxb2ZpH2bzqoKdibc",
  "key36": "2eFw6UQfyoh5dAnEtLk3kkAGnVoes1V2zFvXidjCY6eBGJSYkq9ErXZQdvpPTCP1QtsmSqKFtHDDRBppBddBTk2Z",
  "key37": "KrAV9BJBCAu3irfetVoCT2EHjDtxzaAzQc5yq52JAX19RDWbPDVprq7yWX81JL4oq8KrRrJNbiV98CrfyaQcPh8",
  "key38": "oBfcRxD57U9CwxksTsGKEgTnKMNFjX2WFC5k9quQXaQUGtWVinG2oWDkpCtUdb4gN6fTKF6amovgQ2dLnydJcAu",
  "key39": "3AnWNUUjNKKJVDCAuRv3xxndYRkra1y3fZgbXG4YgJ6nZqkRN9quWKPtDWFk3c5BUCfVCGGGTFVywyQUzfvHRNBK",
  "key40": "5oifckDCBYkYQ865Wf13XCB1YChdzWzFktsuzNkY4WAe6Y6Vk7PkehAVZxrUCrSn4ADGZWy7SPJQNQrMK4Rpkkhq",
  "key41": "265dis5MtFtk2vDp4RcPB4gBQDvQ2o1UUSFPKfgwqtUQp1jshgiLZB7Px2QAcKU2BiCiYxkavacbLG3LXmf4HeNG",
  "key42": "br2rdG7uaRu5qW42Z2EWbSBRkaw3a8U1HR65ukDnC7zU3KV3t2fYbuXxDCWeUWt1LYFX4SccokEjYYYdE6NGsjr",
  "key43": "di3gsWKQuFr6dmXmtRxi6MTAJV6gTLQfyjJNcfGNm4PJnYdGDSiqsv7k4U6R8XuDYDzWL6uBRZXtJJX5q1GmXRS",
  "key44": "4HaRaoqWbfEnsomzjciubfN89nLTywrmiaJjh3Z8kmHY52RgRsC9QKrBYWCGSZwWDqCVNba4djfmohpLxMx8HM5c",
  "key45": "4hBQ34GALBvEmkEBkhqFxAWDdghYzEpua12tWshPohWvVmJU8fV6akRNkRaSf87xbTNJMX1oaictd12Tj64vLwVk",
  "key46": "24K8DasNeXN9JdkHnHmsnrzUVktGAxdNP4WUiV7tjcHZGYf9dGYeKSvoRrfuVmwfYcnzz7Buq7Gykz1yeQPzQRKN",
  "key47": "22wijfCg8T6txv6N3pPKoi1cKyNYgJiPJJgkLLLvci58NQHh1D2BjsammXhNDFWYMUXB5BPuxS7XyyySoqEyvAMk"
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
