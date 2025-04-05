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
    "4pWZwH4w15smSh8hTRQT9tY7YCjVZRts7uu2bEbUxxm828NYAro65DCGK1rZhwDKh91sYUF2Zt57Fc7Pwb8MD4u5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rEWXa4qCAUN43J9cRuf6uc9oqGs6vw49cPaaLXowb2ipMTT1BZT3pP7E1PgbgJJZ569M4huGZpAhuw5eJTNmMR7",
  "key1": "4yaPWL5F4tbPs88Q4Gzr7EnEfn1J7tbb5YTuTAkerskDmeuBgfzBjVG7Y4BeH46gRLEFV5a3PNgJjcTGcgHgtP3R",
  "key2": "29dmrmtECnacTWKYMZMUkKXnkGrpS3wRFdeVnJMaj7J71eYMPnTcFugrUtmmXjFEKR48hjhMHWPNfoLptW1APmvb",
  "key3": "4uvmDAhVARdM9Zwg9uSh3MPrdGNNDd5PBzQb37yRa3ajqX7ysLp2zPkZHZzn2XutMCHcWQZXauMXUxv2aGYm8NDj",
  "key4": "PDEnap3933hBJ9EEesbo8eSewDz3FSZiv5Ei2CfLtiGzc5ysfVFiQx7UqK5TPLAACPMmcYvJFLehdCdJGcc4VGH",
  "key5": "48DZFTss68453KkAvjRLpCURbuhrWjQ1ZgsRirXxt5qaWSEBNwyBziyFvXZ7nXeBaaUjmuMDxEH8b1iQT2hPDNQf",
  "key6": "2abxypwCL6jwxP4Nbm3znZeTvCMaMurtSCQ3DZm6WnazD48oc26Mn3tSnFbReKPCofcqacDjN5oDV24Hcfmy4zgs",
  "key7": "4LAgnQSxhxkTTEQtV2cS4vsN7kpRUJmRDLLuicUYf4Q7yAaE8B56L6iyxbfHYCKN3RzrUq4yeg7oL2XXZq8xUTiT",
  "key8": "upqw7UjyXoBGGQCKeznXNrnSF4MMP6HzeMCg45qVd1uPPZnPZnBoSV1E5ombMbFDoCZ2pgj8ZXBadUro6Qws98S",
  "key9": "3Hjjx8AeuiCt2wA9Q1CGzTQEBH9DHA7NquCTfP11biisxvVHkz5dVhLjDVr3woLat3bGLPfWgjaVrnufeX2Hm71o",
  "key10": "Txe6pZsoK9TQPzR811HPM5AvUH7whRE4VX4MdKXcT1Vq1QDeEExZ9QSy68rFgURNkiE9QgkuYXVmce3t6S7gBGY",
  "key11": "34HNKs1uqM7UDQndvgJhYXYk21pJJGvgFa2rTsdopZ84GTefTWo6msv4HqrhJ7RQX6WB8AgAWi5g4L37qMF9QV4T",
  "key12": "pBji1Ls4sR5rSeAxxCtwR9wNV7SgifJ2cq3YXPcyb6zC4JEbCpQUzV9dzHpJERRqH89nCBhnvvQjiR56Ujsj9aL",
  "key13": "4e9s6kQk16v85EzwoTkqq2LPFNdqb71hRzYn1cnwVeEi1wtFoJPgpfhP5X548bDEH1k5JBxUGhLZJ64owkiiVGAv",
  "key14": "3KpfKBy1ZUwDxH8v53T6MRkiuruW4TwTzQr61mWzJZUWfhZdVUr3h5GhKRTv4X8PVsqj3PMavgXvoCXRYdniPB59",
  "key15": "2AfhpfHPT7i9v2tSyiT3NV5dwUPfLJycuWrRYxdUd8Zg7uRDwGYp7tphLJEhYyFKMbGND1iBDorZrhdo2G2SaWZ7",
  "key16": "gc77jbAeM6XNS8J7jCbAjfDxAMffUmDxMHSGRR4i8Fk3hzSgnr3V9Y49VVDQEpR19jnmqLGE2AHJpZaZzcQQpiw",
  "key17": "5YnAcrtcMdySgBZL9j7gzn8zidrQc5Kjj9SEQu3yh8Amx5EhNh7FMUy6KRwKRRdA4uAqM8Z7cJN49WNAkYPN9NPe",
  "key18": "3Vp38gYasGpMpXJG2MZE7KUWs1DrnN7ucSoV1EZf1MPB2b9eToVnaEzqqY1ynLk4aKsdPF7Fqmrg2GcRpDk88n8H",
  "key19": "5zoewK2wkTsgsAfpQkxRoTxBQ1xYZaHPi8pEQXwmsvaQv7fwxmXqBrX7ftMdBgfguP8XBYkwpXMbcbrZ8Psc4Lx1",
  "key20": "43ycsPmHPeW4i9Wnq91DJyQQ4KVTPqCtkviFhQuUdqx5Xjh7yZC1Qofs39a364VhqqrQAqZ9TupTWjUmxYF9vRFF",
  "key21": "5SiZG64YeDNaRdKcdsvPE6sVRcnkYWbuTAhCzfXoXRa4E2WpxtURJXog5b59G4GUAsfFuHGgy7KhH7K48ec3GiKZ",
  "key22": "ZtiThZMm6tRULC3nTzJNxMJXJfJpqgntkbjKfZPgEUsicVgCf5C8omN15amH65jcUqoWVYjcjVChAC2MosHLc9N",
  "key23": "4uSMFzMVxygw2WeR1Xui7GP2fMVdBzngyH81DKmH9WzCGQXCm7Qqpsokj3q3HsbmMY7zex3hjaoH9MjkGnatKdc",
  "key24": "4aUTZpT3yipWyi9Z3Z6GVRt7JpdkzNFpTxCps95g2kQJ4XJVdexKUstkP6tjc9HzU7mnhwskLpgojGERHam6q2Em",
  "key25": "3cifFzXuxhEg9hKPuo5PZ2qh6kSZnvrL1peykPuzHuTtsxqq5K5g6KBPRJ8qGAnHYoHMAgtDnPDGhu4YSvrLZScu",
  "key26": "rbZUAWhkb6upAdkXxM2ED6rTfiVNkLtoQZ5FxDCV1rk1BjjJLGmxZRxAwopGE4FyjbRKjef2wRCapzvekyyPY3M",
  "key27": "4YGAGSVWL7cBNJA4mSPiFo763qxyt1wFszefGByAJJivgtEbvckJkfd6BS3XaactWvx2b5L29xJAXKWH6gtJQZ91",
  "key28": "83F6mZkvk1etKRsKC4Pjf7knw1qEVqZFSfDisJqBKpgWd6mStzwkbPAKbajwyhQnhiC26qu1ZuGid9GTmMiAy2p",
  "key29": "3imfnBPU5gk976MT9P47jqsBqVK6oXCzmqTg9Jrm6XJxKZi3tAPuroaCBwbi7rS1umHYgNpr2sr3qw6EtuRNARrx",
  "key30": "549rQESN8q4jy9Z2wkVyvoGGwF9ewx9yQFUprzGRBm8nA5odJzAZVRt6dk33fmJ6GNkMEUyjXnqcovz3RjNZ8bQN",
  "key31": "5yPvSaD2EU5nRaamunSWai2rzSLFBh4JSy5hHCAjGpVdY84u3mCAqE6Mg8kGsJTrHYZ2TgP4w1oXvgfy2y5XQfBv",
  "key32": "4ndBiafPZ5vayU3REAPwMDakkcTs2dHNea2fQz4PGZarxsDmo9S1ej7onadLPDz5QaGSyUbvsHoXiMNDGya2M84Z",
  "key33": "KJYvGmd4AKLU8N7oWNHyT1X1CEwaHyviqAvB12HzFycRxPy8bKqHXxC1iFM53fVqLBfgwc3jd4vZaB3fSnWpdDm",
  "key34": "5DYEhbiumGjWXCYETAUrxLPJPrR9R6fGGShtX46CZQTAWXNuG5sGce9KSTkQBZTfcr8ykUti57pCyM2BGVdWwA8k",
  "key35": "5UqAQYRf1odYh8M7rKC2FHzWEuQo6d8gpypqdMcHZhjYnfD57qrULzFqfeFpj9d2bNCPC13ZDjB1ePsUMPZWcmQo",
  "key36": "5CgYYu6hysTHowm4wVZxqfFH4saWHw8f36VDKvLPFBuEg5AocugksvcCDefzRCZvYCUFjqdJR3EHXWLktVaRt6fR",
  "key37": "y43C3WUXjL2rT7nsuj8ytPqQzQrp4Fm71NvWjJ7KnHiCkZ7jGSdJ9xr5tXe59YRShuifNjQqudwJVEnGxQpbNJs",
  "key38": "3p443pwo53Nnec7jR13r1qGZPvkZEZgodDXZPic5s2Sn5CXEL8VjW7a2KC3gYkZ2oKvDmenaCXjZ4n2djqJJK3Hf",
  "key39": "5RRpzNzVPiSYvPHbM1THo6ZaWNC1Da9pihdx6bnmGuTvRUopLPhuLetXMKeu59PyTjMpeMdN87tioJFKZAhZ7f2M",
  "key40": "33ATsUZq1nBtuv4fsKSKumpUKehmxxAnXx3Avqs5MDqFAo8M4ak45xfGTxEDDCarbAZMdRYfexSyty2GuhP68uUp",
  "key41": "2esFtHbpCKK8NHKgHypeUcpTuvYgmVe2pzPkM12tFqaRF6xrfFV1UmhSHW8hbjGEAFAKitcZe4wKG32tRe6dYFDb",
  "key42": "4yUd4Zn44xFjXSJgv6DP8KdcVA9gSBKFoKF5qS2jDTJedc4stxLHuhd8mFk3ZTSg2WSDGBxL5nxo256AwM2ZycyT",
  "key43": "3XYLiADM1VbsM6HUSw88Wbnki8gQGybBdmyoiDPW3Zrn7k8CFsjvqEEHbb3XkNGjkuumn2QK7dWU5RkYWEG5m5Ed",
  "key44": "tCE9Y4ZFJnN7QBwyECV95Q4SFpkoXLZ5n7HNYnfPLoDJa7oTb6fqw5kEJshMbLnFhihSGPeRtMWCrwztGj7afee",
  "key45": "41oRRonnEk8pPTf61T85EhPFhPRXgaSdqBBW35xg9ZMKWXYyYmYAT59pc8cHDjqKbAoLTWPCC9uG4HcUC48743iV"
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
