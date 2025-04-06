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
    "mWTaRQoJ1gB1bDgJaKy8WfHwZAHZaCEprbv2PNZQcCaGxk3ZsZRpQArfdx74nyvxZcpCkebpmwwzwHY4zjd4rSx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WhVtnz8D2gzTe6G74uhT4ZmzyZwZyKZopm3uHbnrnpkFTxaXwgkqF8Wq3Js6J27ovVtZDRYoGjstEtpq32Xx56S",
  "key1": "JwTPUUhmqZ86P1xBKRGVSVa9pRs2VbCPHTjKKgyXsaG55farAiqJtmqXrzsK3XqhKZcnMRPvAhwPQPpFwBWREJk",
  "key2": "3KsyVepkHfvBJ1P16KHfmEJxPt3Szcjb64KBM2zrE72uCpmx8rp3kcAdcSnYydW8YTrt23Ynt3Ciq9CePt6ECi5y",
  "key3": "5GQUe6eCb52Y5i3uokMVDoGSZLVEihxvjsXMqupYAYVhPfMD8hansicAeFsVCMF5yNFfof8tyFXCXBQ7QvMVn4A9",
  "key4": "3zvRoYwou5rZSwJx2A6qeA6LdYaCTXj91n9tuienEaJK4QSmvXiu7q2YQhe4LA9ie9jMZ7ZHiBhQ4AvcsVpyXeXw",
  "key5": "tNTuysied1CWKrFY9riPXeEPmFGDZLQWBWKKoGarvFKahdUBQ4xpAEfVLdPwkkfcur9vDEaBH69TUbJtrcWcSqC",
  "key6": "5i3jiHMQcqYgmTrxR2CBDNGi4wP2hcxoWnup6T37enVfvfRtmdZS9mZSq6fb2HTZbfRsLf79CN6XZ4B2EJAm5XCL",
  "key7": "5HGAn7rNQMgKkLUmGAC8EE4ARYgJweM2A5fCKhENHQTNP3FXTiNLPGnNAbvSKqYtcUgYPHJaZWs87eWEhqmSEYiU",
  "key8": "5Jkct7oPZxGeqxyALMrr7cXhVzAUBTza6GCspTYLJQjRhotDfMos3x2ezv3PREhkiYSvqpHVBm4NbiNpPaLRVir",
  "key9": "4pvf9qQ3zu4z5BAux3p9ucJHg1oA27gqs14Utsy2NcHfpCAbc474aBPjgEnNaJJHcJHFM32dbMMgZSiAoEFfYEpf",
  "key10": "5VRwvXT6gf6pSitxD1m4LGHu5Mhz7uHR7UbHbpFHmpsu8tgU5YSmoduHfBgSXTBMzXp5zyLTHQ7TXwYpaT2gvTCh",
  "key11": "5aKdnha7NF333oXk1vi1bp3xH6vSsAadWwzBEo572PfyqEoZhhHxXgzjherLoTSB8hZkySSpriDKS2JhryjKLgqA",
  "key12": "QNtvwQskedSL3P14HyFptHtKjNkTFM79iyPpS3YAvSZhk7DSxYksBMDsLTBccVuNZ3V4aoVLogdoNddkvrCddBN",
  "key13": "ov1W5CnDAcZg5DX8hLB6Gt65FNZy1rX91Nw3oaYWyW5bxPGQougHGUN3fXVQyJUimdCjSHUY8XagFfWPRdbCWxL",
  "key14": "3XNDBGbyL3bSgYo4PFTMxVRRMycitjc52g9pSDqY4RGCsngMpxSM5sPvS6gh4awxLMFpmdXDFkrGuzxfrEBWnktE",
  "key15": "4Dxt5S8o77V3eCMZMFfTa1BtxoqE3jvzZxAtKYMhNkbz9PMiot4Jho5C63wDprxMG6FXTWpKHdPXDBPYqokSatcr",
  "key16": "5XoSrerRV5EeeEUxu9igEBiKuQp3GBL6SbkSYhk4XEZiebhdmpXr68yvdqSbFBR7FbntWGK5Ub84wKmxRomxL84K",
  "key17": "2vNSNXNYmrUDT33WQzEBZWaYzzvP41ceKKPFoHRuVkS2RH6mzc5mc9dS4mLLytZ9itFFsvarp7si8nCFVUjAkSmt",
  "key18": "59aJGeVaeNrfmJQhJ31wicSiBPjxLRXENtYxZqR49rBiS17taXpWGkgyuP9ptErGWQSH4PJ4Y5VAorQRLh9StAqY",
  "key19": "37gwTADYbJphxGS45owPfQLqnyuuqE9XsJ8ByoNs9kgdu8GMsogMtPyUwReC6PaRcp4qGGQy8CsX5rzzUi8Som7B",
  "key20": "4rTW3P9nLMBhWdWgDMhZgYvAHrsXKGBP243BZjStbYrEUVnPkWmyjaEK1CPTH52cfTRXKgLqDrmFSGg9F1aDmvhZ",
  "key21": "3zqBiQK8cQGJ41QnW5sGWwEM8DLX18ZBy4xKiHaiZHG5YmHHEsZq5DhvPvyZo91jS3zTPeVRJEiCvcgV9zsfkC3i",
  "key22": "2hzvdMMZ9ism8x5F1Xa8Wiau2sS7Vc4aTe5PkZii7k2D1XFUCbgvxCdtwgBGGaNYiFbAouQQ6PGKwn62SQS4Ujz8",
  "key23": "438B8zYhuY4RnnSLSFJQ2ki5oZT5TQ1tJPPtHQxHtKMbHfh9KYfQ3hCMCbYJRPmCqtCU7amiCepbCdqaaoLsRFtY",
  "key24": "4hW7FxJdpXNCxrBJLGocZ48jBLRxJB7QkKqAZoxZ1sfkhNMZHPsgE4QqkhemVCehUASjq5VGHEAqFX7EmbJym3vF",
  "key25": "4fRFAXnj8zWksnFYX1hvn65tajUaTXPskQqM5Gw8GUVoGiUjniTQVB49W5cCpnzjhx3D2rkH6pYwDFUSwEYdLK7n",
  "key26": "2j1Gbr4p3fqvzC6kNwH38VXpukKmuWTAB6z6Zt5A3PEVQjqMnBSUQeAdRnv6qNg8WJ2spBWsnHEhGp9F9iKj2Uyt",
  "key27": "2GsUcnoTfCSnhnFD4DitEvWwvhrV2HrqQ17U4h3kqDWaRvcP4As92V8gbPyt5iNt7DdMMqrypXgD8SYQdGnuyBmR",
  "key28": "43DeJhofHBfbcEQHhqD8ygF75Zr4nfNfzXAq5G4G1fiqUjaWqj8SMGh7n8U5bYiDSyNcJmCLzNU7dy6KkgkMWJMA",
  "key29": "5h7u6wMGs77QV5oLFBhgJvcKEUXTsyQjRFy2eG2fFS7mxxGdc6U3KXqFgN7F5aTGadnKUfbER5AhNGaSFXgJmnUT",
  "key30": "3U7TFxenYq9tM45n5mm4xi6WD7s8AGAyvbWJ9tEd3ch2WVphHnre5cjA4ZJsn1GgBmNXCiL7QM7PKhzJdWxnYfsX",
  "key31": "3gaAVRqFpmSgTq2q4udpSHvRxqbCfTrNeSwG4H5tLEotaDQW5A5wiYY9LdvRtFvZfxqmxJAhUv6HECn5Fev6WnXK",
  "key32": "2jEGuNZwpwWVXMNnEWF12kucXbT9qU24eC8qjJ44Dk3gtNUvrJErXpqFaxkruoxAVWgngBK5qRkw8ERwYdJwjPEC",
  "key33": "2LLLADzWR4eeBNP9X6LumHefPCymA6xW7rSN5sdmehjzrcH96vUnCVh7TigaPVzaycLLenFd77stVPyzL1xtniso",
  "key34": "4LQgHCkfM5oes5ww28GkcTepBbtmWzoJJ8YCo3dLHf4bvXsuVfn6AKVqrAKp7cBQonyut8cgoW143HU4BhsFfT8x",
  "key35": "3yVVksrCUYA8TWLMTTvmd6Yf5wa9fhxzLvQy643nPqYqL3Yr3AN3a8ukie28z2vm2uX2u53A9JPViAV1hxuhaQzJ",
  "key36": "5PyLGiYyydZV5bSptaHVJwCbZ431swgsXF8GEdjZhX6H1RTemSwwdj7eFFD2QNuLYBBwrWkG4QXMUPoYDpELpqw",
  "key37": "4wega2vabxiB8Lx7oUi2Z8wgQZ9PTHnWTih9Xseuue7JHimJnDieXx5WwuNHDvTTzoHsfg6AjLJyJCTD9UdYRizp",
  "key38": "gz7mgbb9yCZpVtztQH9QP3M37bPwXGFfYdYSRFEvtg5BFYHju2iWsWgmrou2qy2SkdGSRhcNrfuaX1UvUBq8V2F",
  "key39": "5goYvamssDE44De3M43TWYE71Jg4gsEnDrKqPYZHdG8wzZkFLqEMb9HrXzFGapuNL4LkojN3kCp2RU5BPJ5skZbX",
  "key40": "5eCecHigvcwDQWC3xyaxQmkpKqnMhrdMZXqkkPvwrGXHLrx5z8TmB4a8bCJj157FimGh4QzGAD8Bn4HYfe3gw8kh",
  "key41": "63WYvxEbxy7XmHNFvEMDd4ixUXoJdjTT6dyzcRgUyQ9tNNk751V7n55Mbie5Xt1L3hA7po4dvv65tHoGX4vrMiJR",
  "key42": "57AaFjxbcT3LcEG1sPzik1ctqp3Z5qP8Zk8vRpskq7Rw4d16VsFaCwABFeCXg7i2rvPEBW6yrk7EQwKcxi8a5eo2",
  "key43": "2BxStibmWnpwKhkmQDGqP6ZgWWpJZEeMHkg4dUwTimhe5TqaeywUvhXCvTeUqnexqBqQDhmyzbY4pARMKyNP9pik"
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
