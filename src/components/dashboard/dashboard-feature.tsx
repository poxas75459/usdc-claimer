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
    "39NvuSTbAiigh7zJgf6LGm1eNukA6k7NjAZdqhWUYvSb4BxcTtD2PtTpPJeKJTjBBEDVNcUYZhWoExGcnX2AzKXH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4C9YYhjTGyCSYuPnKvQL1BvzFCtXfH7GTpbejFj6qGbypuYvH1iBsQoLR82Z2RQVvtZxt9Xbfefx7uQ5jhqJf1z6",
  "key1": "Yzp4KTHgWN6cst6ocAdqu953MmgDARsuEDMEpAXzpUXKtuh8F3T2jtAiY4W93zXAZRoREDTuvFuohPCtBMsrgA5",
  "key2": "Ennbfx2oJNq6hymvRCifsdSRLnBMVagaMj6fYJdV1ubA36zVHrdZEc9z54Do74ncUeDcgm24CapmotYtfgpmsrq",
  "key3": "3zGtEGgBSXXWLxKaPpANBftJkCwCB92XN6NdHjFcSVK64ChXstqFXjFVcTNjfF8WCaRto2DjHuGHu9Q5hUzXtVT7",
  "key4": "43rGawbUqtsxmVdypwHCQmhR6XVB3zKkgAiUnkEBfDGZTN7M5n494wMWALy7w2cJTXd1XbGvVWk5gwTKHAchH8wZ",
  "key5": "2ZSNKkfU8cGQyjJ75HZRpjUjt1EiXVxnqXzHfmSN49cQnECvwveKLhMJ4YXmiM4joDCTAj1wyk9h9WBM7R4c2Hbn",
  "key6": "4PcczMZGqpLJ3gUqejGUiCLi73XsQ7oRKHhE1VjMsfTrikgvs26MMRpS8U7om6syyZRgc51HPCKF5J6YzDvwF28K",
  "key7": "4exVFRmEW5hH2SV3yFGCsANHmRKxyyzoXbiW3sYPpam4vyQTpD7kffH6FN7eM6D9hyfW3M8qCeXfQrUao9sCXpLM",
  "key8": "31F9SsYSkdNzscYNY6vCpSAY5y7CtGdGm4vcQcMXrBMKFQra17FB7RAtGzd9eHGKB7aPjmMjDuiqcWGJQss6MBqx",
  "key9": "2S24LWReKJSQLJd7dS4AmxE3WYCKAytWZuK52YSwNAs9BePgbpD3mrm38yog38uwP2Cmorya7hc5uruSU5wizhCh",
  "key10": "5RX5QTxirduj24CACQQwSCVeWcmht1BHJiK7VhKpuv6yj2SnAs9Q3nkdBHjKdmi49Eso7uX39y9Loo783jHepv7R",
  "key11": "526h87pg1n8c9fMMRnKeLZj1bkcZLiGkmqNAm1qaU3HSKArKB8pjq2J3X22iWuEa6WjTgESEDuKrCCh2H12xDfzN",
  "key12": "nWfXdiUjJUVgSRrSwELZZfHmfwvzxRNgmDv3yn55p1sYSCS5NDLfMpdahhP17g4usYJDm2UTh343fQnuJVvuyqd",
  "key13": "5YhEzkPP7jjZN6J5qNGLxtkv29bdpj8y5YX4YgdSTxKyuzeAkNoyxM7wZ1NdxaQxaMt3RPiPm91iqXqEPhdyzEZc",
  "key14": "4UoFn3Ljq5m5kvKS9fMXG1m5TQYDG8hwcAu9twRKkJWNLBC2steHqZ24BCLahop9VvNUgpD4GzyQtC6XrUwXv62E",
  "key15": "oKNeiKshV8ut7uhPXhmFu3WwwEABDasfTyESUERVLQbkWGX3we6jFibb5vVK8jHAYN67FJfZSgBbrste9qsTrrC",
  "key16": "3okJmopAJnRShaTy9nUwbiybRMixinHMQR3b7hUduS8o6ZBokkM7Xo6V6nWqHeq6c2QxtU9BEuQyHE4iwfRfMAQt",
  "key17": "4FtNxA9QPL785WgnxdPScFnKkLGt6bHqZMVC47S7G54tSqWHq1WRVBYziJnPCoiTpiZ3M6JoETngsdiXdTfqwKnR",
  "key18": "5qtY1LmVFd8HQjpVEzXK7ns2ewxfjZPbaEqfJSSugn1RsDqMWaNgZ8MgpsZfQcWAMLYncJJ1bYyjiNEUq8wwGhiq",
  "key19": "2qQJtP3ihuBPWqsq8xajMV8JBawgH96PHiiU7VSRM5tpgubp6f8WtTU63qGH3Jbceiq7C7zFtr2HpSbtUZekC4k8",
  "key20": "2gNwr62fBbkWhbHBFZDCX6uxUNAhCpYTGbdMNpxRWguuJidxmGo8YF3gx9yUDuD758NRhPUMxUHbkwNroK5KB2Vz",
  "key21": "5fiRKRiscMFJV3b7KCMsAgcpe6ceANkQ8mN3ABpB77pnzhnZyEQAJNUB5PDPcs34GouhHaYQ9E7RomavyWHoPner",
  "key22": "31nyPgz6iaPfu3rKMEuWXbjzbiVY9RRm7zDdLAFGhFA1chGPGByvGJz3MGcctBDW2pTpVzLhKbcZTR5Gh2knraJh",
  "key23": "kwQQ8fetFJywPjAQBtQq4uqA5ypPfvKz4H5DyJfbHJM6r3LYxvViCaggtZxGXngRX72m5XJaRAUDi9tnkWzi6pV",
  "key24": "DrhcrrDoKrdUrPm3nSj7PaaJrde6Z83jeknnuTVYgSaHN4yqfhAhJoNWfntr7Yc1Tx9uLuHYqM4n5TuQpJZaEou",
  "key25": "4JcJvZY7UgjUdfuMzapKp57S6aRyNKaw5zCLqKwtZeowXx3NM329zJWkwXh2q8u6BGwwp658JyfKC64B6DCms2Gs",
  "key26": "AtKHuYXeVbPDDz8eMT3jiNxuM2D7RaES2YFKoZS4EzWTgN5XrkVpxqLv8MpN5xkYbKyKEpQXvrbP9ViN7XVzJNf",
  "key27": "2BBTfz3FZ3XabUw8MpemymC5im3zaq4azNixNV1fshn13oGB8RYTGSuYfn6HsUAwLqpE6bvuGxNw5SkKAXda6xDw",
  "key28": "3DrBAkuuY5NTNEfUFLPHm94UaTmnZuZHHa7hLGZnsWrSsEDaf6EdLqmbvb6AXa6zSzRWnbjDFpcXPRrSy3f6S4MB",
  "key29": "4R7fGzKHxuxv1Ebhef8raBtCwDjanCvfJfHsBFM9pURUY82FvrpaKRYFsnH8q2TMkWRKQJaPQKCfhERNWqaDCh57",
  "key30": "3ivU6zFmNDgv6x43igsnJyptQmsKCTjGdxWGy5t2KRn3AF5i9xS4EJ2nbd9Q6Xv3cPR7ZuuF2chT4jxheS1Nc8qJ",
  "key31": "3Sa1iQEYGk6qM6arP4tGn74jFSqCK1DS6T6EtJhgATqRnYkSKYMWWLcR2ScVNA1JWpKs61bbndDejhSETxz2i6u",
  "key32": "K4nfU8qugrWfA6YgekqmDtHPV3jY73K5yQ6VfXPaejxW9rQYh2uFthH7pVxTWkWxNtwg22YEn6s125Ca82eLLV3",
  "key33": "327jzDE59yJixSG8zSKKEgbLwYXx58S8wgpaVSdthyQjhfuCNvorD5GxHVR9i3SP87QYnFMX3F7PyCeLcYQFc5gB",
  "key34": "2pHXwU3UWrtrToiGEvG24ZGiG6B6sUF8rMCVYfp5DkixyCAmtZnhvpn9jbpvuXjfhaMRrvote1NdFJb1dkpoJmpW",
  "key35": "2fMTuL7LQ3Jja6zFSyW8eRdcXzbdCDysdKzbMEaudB1DX3FxoLMnm5mZuWMhDsBfNTHes2vTwaXmRgHQ8Fy2cg6K",
  "key36": "2g475qdmWAxN3Hg4j7jAXswDTARNvmK3qiK1L3u8BSRyS2zvTwyWsjh7pC8ti9w2n6CM8fZJZGUhX6izaiqESNKB",
  "key37": "mvMPvPR7CboA9AG8gaNV3CEbcJPdUwamyPaJySqkLD3dJu1XNxqdEPx8tQ8wG4wiJLLdYN2fcteoveDYGMNTG3d",
  "key38": "5CAohARhW8iAKJaJAJVJQ215yFqqKdM3e4aEDNBdYhB45v2ehWgQmMLWGu5fjfuHNwA57JCY5GPnuwxGSyFwUZv9",
  "key39": "4pDb9UN2Mb6dQVjKCULXR79mBaCiFB69MzPAN64LyvpgYTErdbdey9E18MRwt1h9yZqzmsZwGZ8fhw8afoApzMgZ",
  "key40": "5xYh3T7729avLYGu4pYcKBpfurrRD5BmDxCHL8AzMnQh6k46c1JwY3NZDSMbfYhutLqRYVMr2DCEy1VDM2dFzXdw",
  "key41": "2pwkzWthNzLz2zdSHNPwtTwhWznZ5cCK8o8iBMiPcLXgwUbZyvL9md7mXNAwqkgpJ4fFxa5w4L4wTLJzHqpcUq96",
  "key42": "3bsidLyUwMcT2wyXJKDMMn3DdK5se65QmoxbvGigDHeAqmkoBek16xrXofzmRcVYau32Q1KbmGVmRNqpE7LMeG9E",
  "key43": "5vD39YSngzxvkpqHznvmvaPAsxygkfDCK5h4KV7Qj19rGiJbZG5fp2K8pV2Z44SQtHq8iF1PAEDxAzFN9tr7hJqP",
  "key44": "4FoCq5JwGZNGxVrVETMEX9cP8v2TVBuptferhRv8vjj7K6o91y3qnamsRGGCjnqLMLszfhA2dpACcN3apJokY7NQ",
  "key45": "5T5akS42fovUtx617CW3wHJ2x8qeRYR4WJ8krfnQf1XAV7q6AYZ6xPNWwZmEXSZemHcS79918qeohQK4x1eUwJCb",
  "key46": "449rRNvCHBFXjZyVSeJBVdKF8XxiKN6JFXjJXYj34Ns6M7vVBrtaHng7NBZx5TkaoNKfgzWYTWW8RGE9RnJrK8nG",
  "key47": "5rWAEGAT23mR3uSUc6khNVkQeV64q3Tf9sxtmzq4v3mQEco6zQ6AkB59feDt911G1WUE9jgtzHXajPASPxz9T1BP"
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
