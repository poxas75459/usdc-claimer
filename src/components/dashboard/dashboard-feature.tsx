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
    "2jvn8VRsGwd6dEKtoAP5XW1XxrTBxUMkhvdFLFdyA1UfkmGoV7rnnb9YjAfF3MKwobEJ98wMbAKCKTpmZ4vsvBgE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43MaYysKYoDeo8WnxJeQyWnzbQsemCZ3mkQx8B1vPjAvEqn1ATDSaqHEBPXFbjSmAUHBqWSG3h2yD8oyZtjZbURE",
  "key1": "dEL11m66BG75vBa7JR4XUpZ7L98Dwo4PiAkbQwtpcLhhagXWFfzGfXLBSuaYeteSVtSonqqzH7znzQ4kEsHYS1y",
  "key2": "5q4bsvek61r1F4Qe7H3Ap7hcjPv7AMsZi56whrLK3peuubv5wwvLiherjHZ8fKdhAyxAEspaau9NaAigdhRTBSsi",
  "key3": "3eFWqqDanAw93KE44F3UKQHArB6mQb8RkLsvbyYANSbcSJVRSScQzpTF1qehC2EGZQq9SkZbUtoHzY7RCpW1XoYj",
  "key4": "3DAypeFUc794JBN82noVjpNdALs4n2rB5H4RdkaQLe3xV6a1v1d7MMUNWZGAfgGEhHnhZ7jexizZGQHpSKHkicyZ",
  "key5": "3rzn4T14JAp8YwQNTPgg1yUw4NVg8YWmRRmm8rMGfCzRDrALiUSEqATPG88Loe3tGFmFSZCqJaHjtQ2FvtPPHiKz",
  "key6": "5DUPHvT5H77nYVY7V3oC3BJM2jUJqE8c5koFeCnxqo1jcGF65RkxCqB2rqEv2B36NZBy2vioDKx6VzH6qAzKEBTE",
  "key7": "4o1X4qcdxkhBA9LcAKgerBdwaYAHU5YvH3zhvb7CpyTL6rSQqQSc4sFHAV1qKEcmw2Cb8eWp5i4pLvMvmpp8Mg3u",
  "key8": "5V8r4iezKqrR3qMQr4Y3qNUtrc9QEpdSZC28Fm1Ch2gyZNVd3KKv6zMoWEwM1TEoRjTv8rTm6Mf6rhQFQ2kaaYPV",
  "key9": "2HRKQoeS2auEZUxGa7rGFSaSRxJGi1UQJoivgRyhFwt2pxTYVwBd9y9nvAt2sd9sGBKKnPbvEi4jdyxdZqkjsSbd",
  "key10": "3t8bhmUdGvLNuwo2YHmq9XYcZTVWKmecgp6ktreamfNWXJ1MMqxSx6gus87aJsVKGrTiush891ovTZyx1DGtqA4J",
  "key11": "5yexJKTF6qNAK7ZnEoqoSQVfNbuWAFuJedpdzkAdHouRmj3ZsuvhTZsLCvqg7APyooDaBfy4iKJpxsEPUR1tBGij",
  "key12": "54yviNdnkoYiqmVfPUjrZmETaSPP8oVaLPRqcpnLDqPTEWsKuGhyiSVC5bAcPCbUh2DaixUM5QTybGnUzJ5Ec9B6",
  "key13": "cFHEE1h7WEhB13v2D94efBqDZPBHr4uqLEjFRmGiJH5snDDm7oGBg5Bt9szr2gXq1cqTsFTi19MeQgqYLzUFr5b",
  "key14": "2heCFGKiRTFxDrGTVGYF1JjooytWcSD4yZNBLkUwj6r7fAJXrrchXkW7Xaz2Pa4QRYfQY6SNESg8w1JxvU6XnW8Z",
  "key15": "2DiFaFy6rdauK3DZVMeuaLkQHavnZxYzjvNYhPpDmj6ATw7yUKR53q6ANeynFRq9tisKdkdppeRqpLhiP7NmEcgF",
  "key16": "5pEsH3Vyum5bFrpX36PNQQaRWSCd6tyx2eYExHft9yvpg7BMEzfTNGFBQiTgqXpsufKYwQeCatzYR4CNcddV5a9K",
  "key17": "2HxpmBbr8wwwx1agWw3SkM5zo1hK2V16dgtwtJB2nUe5Hd5TAAhUHVx6mAKjok84Xbom9a8Ho5cPzZ8EByDesviJ",
  "key18": "2vZpstDCCrbS938MSYPAQv5XN2WDpzx6c3kq54jMLs9HgJHDdZzwqPBve2RRrkk8JZrY2qoGD24hBVF7H9iLXYJp",
  "key19": "2LtfyqKJULxkUmVf9sBdR3Dcz5gREoAzRnFygZ9ufszXoFZrfzRuJjjqwYoQF91Z1EX6Av2cST2ZZ83esS7Hq48N",
  "key20": "TYWikr1hLTqYJ3j69NndbGoAPJP6LXrkvd96Ljqin1RScLuZ6XWQvA1fBjmRdacA4dRfYbTqPmDXnDAK7jEkJFP",
  "key21": "neYVwoA4vfHXy1J5LXNbj4QwHG7AUF7HihnABm9XGbfT5pBYqW2inx8nS9ctnrTqwaGgNQocgY7tRX7Kwjv7837",
  "key22": "zTYQDomXgHqmGaTa2qPbhU5Uf2gBs4RqiwUyN4Mhekn5xYdaYHVWAqAVHnXxcf5LJK4pwPbRWmFaB8nhK8qWojd",
  "key23": "2SYY4RAJj2ARJugC9XtUyc6oh78VBqBmjZ2tFdDWjR7hfijGVcoi62CyzE7RB8t23hE3x2hAqipMUWBUtW2kbZX3",
  "key24": "5VRXfhkJPQD4UskgfQTZ6LNpFn6n2eAtYoBMEzm6UgbZq8FMcgNHgT122ivJUZ8hELF29hjhB459fvPyJm4vUKy7",
  "key25": "Q5pQLnDLZTzEVRGfodr5o8a56dvSyChQeUzPHrcNQ2F8XipX3bSP9wDxak5svzrZTJHaetRZU5cVFvve78LjMgL",
  "key26": "5JGL6eXB46uxyuFvAgYjgLvfs2AgvNiKyujwvuziy2q6CpLQYfD3FhkbAPARwd3bXuEvqoU9XRmG5tws3sBiiRaZ",
  "key27": "5Ao2Js9YMSznr3UcThf5rNCtPXSiRtqHVuUv5RNW7zcmqaDra9jLUyEp3MaYaP1AtKugtK18CmkpLKGAs8epuxox",
  "key28": "3nLJ3JLnjoZBj1NL3vgR2YfTRqV12t2R7pfZC8Rb9eKfdQ82BJJwC3g8TS6FNeTq1MJZrN4YcpNmScJnCizkPiZg",
  "key29": "3NhxixoQy9YVJkWtJnceVjibyUYR78suP3tgGVkDkD38aidkkQB39ut4Po134DFggweDEm2s7LxJcG1Gs1w1zLUD",
  "key30": "5QGpcFNThDVqQU2NLKmfbCLz5Cygxn4GB8iG3fyMJ9Xsusn8TYCHvQJfyWXNNbaB62iKF1uT4RiEKaUbBDo1bsdq",
  "key31": "2VRJphU2yxpvXb9wUrroGDzYt7Qy1zo9uymKjRumAXGFq211McyR5M4UoUN8dTE1ugUcRvotE7fTSEfPPzXP9YjU",
  "key32": "9wots3jpu4qToiVtqjaSoiGW5VQfhN4RSWeZ3qmX2495Lb6Ary9e1zAYvs4uEXouWhxYrYNcF6NrouRTVd8r53R",
  "key33": "3pNqBk9LAbxxU3mCkaaS8fy4FpGA6nvQckXyZerUzcGAmR1xUoprcQGFCuVpAQzTTwSmd5fMDaNEeF5NnU6nBo6n",
  "key34": "5f2AJgcMiDh6aFwHQhFMzv5zA6J8m3j1mK17X3Q4rELivP12Dy67Lo3RtBSTFkkM83PUb1YmCMx2KLSmcGNdmwHi",
  "key35": "5gvZPACdxbpt3s7FUS4KekN4SZKSRFDqW3jKd7ozJ4nm1v86JtmDo9uc11ewZogz4XCTT7hmok6w3qf5zdT4DBry",
  "key36": "3m8FDwnXVKMmbPViMeMc7vk8ezG5C8hpS5BUeCy5TsVt69pj59HTkHHg4ueRr2PJeBLaQ1VL5dKvpUGqELmUNBnN",
  "key37": "GzPe8AM7Z44S6rtcXqS3CkcB1k3n5qyY8QAs5oe6pwwPY51An61TMUE6sHznqZPsnxy6g7bRpCm1YVAS9TYWpYJ",
  "key38": "5B3wThcYjbMxU3hMkgrgCDVrv5XNttGzCJrjLsteizBC4VQm5yhKoKK1fMZVojmot75geDZuka4QpW5geEAjEtRe",
  "key39": "2qu5AqipiD5vy5YhJD1pTBuoqi1r4WBRKQnerPvy3MvnY6s2LXtNef9mp9kxCen1jrWaFDuHExA8RHr1CE8cNFJh",
  "key40": "3a7NdzeXDtuisrEQkucWJ6k31vCmGNDZWFYFZyAimwtmcQndP3TaMsYZZNNaZEKLfe9jE7T87tTC3JKw2sGrtQQ8",
  "key41": "E4HduUsXc96kcTMovnJDrp2EacJNbV5Hcy3GwZCrHZCFCed559tYrHzevZNXrY4Ptt7MwxtR4LhmTDiSWhaqKTP",
  "key42": "4movGpVAnpibiEdDDjCEr4Nxqn3UEt69rquEMRT1fzSaFMYRMQSTbdMs7RFWcSQo5YUT3s9PTRzrogz4roPVMSSc",
  "key43": "591Xy6kuMzug8ELXfKzuHmC3ThBBE78q3z7XfHrr2PaSrCiVoEtVADasmoepMH8RBrCaFRWuJXDQTyTcv8FZKwYz"
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
