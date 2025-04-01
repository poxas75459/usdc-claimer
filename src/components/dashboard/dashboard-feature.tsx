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
    "48UeZBhLMvdPefMiP7qLjaYPrGEiH2pMT4fCVRCDciMQLCQ3wpQkKrsfSMYwJe42zZ3s7Hzh8dEpBASMToRVFRSL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44UL6SwuqbqCtdgZuPKCnoHmWrCMxGLd7zdMyer5pfkpA4whqPvdmCxgH2sfmT1xAeKwP4ExjEbC1twuwf9yy5KS",
  "key1": "5BJzQ9JbbDUDjMHtDZRLJbu9XiHQ8oPaXgdTuneVnBjCRqBFKFuiRGSpiciN5QrkiisEXKzmebmg4LzieMqX6t9V",
  "key2": "26S7nNoUnaxQ2W1MVceHPsstJXaGcFUDQsqZoZTrqkC7RKYcfAiQBEoMktKV2GTUSukbeJGHSTDt4po2YigRqp6E",
  "key3": "57rqPdk4DDt4gf9hPxy1h94Q9a7n5TXd89E6L95dtQXtazYYgDt2tMbRxbBTckNxh4dTHfxQLcjhCLYeGE8zwTwn",
  "key4": "445UQED5habpEQjPT1HSUuxPcfWL4rrG5VVxitLJyhkzjELGGVLTLA1kPdMU8nXcN2JSfA3WXvndL4mhMke4ykh9",
  "key5": "5uLeft1p9oekK9qZ6oCPwpmNvPCTdeQBzZUCwNYKcTjc7CrjSUDA2UHiPRhDnK15dtxMqV9rQ3nd95rhFKr5zHuT",
  "key6": "5nc4EtKheHUWnawAZoyF7rAB9v5No2FeCbFH3rmMzsoT1QyZLUNDca1qXLD2b6rzQtJyBbLADYVbtkU9uk3YucTT",
  "key7": "4ynUFzAjyYL4Pt7s7XZ8AZ3DkCURNhP7P5sspXMLqmBKEPVm924PWeBYfYvwz6yFpJkAArfs6SjmfHNVerQBh9AD",
  "key8": "3uBwbkDfc8v5ChS5Ax8ZRUU1w1t6wTvPAQpDF3XNtmPECJsRjCkDNSVeZ4JHUK2Q4LwCa5Y4Twzd5JXrjo5zb1Qk",
  "key9": "5Ne6NaRbH9qo4ZxzsaumdNWZ8wc3WqxrF3PAuJbyVzeRZQYNbuAxXMKDDDnFio1MEdMLrxrtTMasMQKAZ1wkoW8p",
  "key10": "5vffW4dAh3juBeonzyCkUUqLmiMFJgpgQa2CNZKPqTLDnnG2rikqatZ9vKxPZhhW41v566o6EsHeTKpoLvuZbUvK",
  "key11": "4u3yboCzaMHqmbNkBoLx2JXwxDwNTBGJ4kazTTT25CvBgcTuWyFGdqEZkHhrPyh2bfQmFTgKxNcxP5uJ5tsfuMuu",
  "key12": "46YK4KxHge8jFZ7BKJrxZ6FuapzuzLyZxkCEichT7KL39MN3ib7YepVXWqvTG9LFe4WwLbMQD1PKiP4ozM1YaohK",
  "key13": "3hG8QHVQV8Frgy5LHCREzv1sxeMUoXW2GQRmJuSgs86PrWVUuo6ej7SWDVtJVCD6LLDrWNi8qzpYPcyqPVwanAx6",
  "key14": "38QjC8yFduB9G9ZaCzDHKmFuTWCJ63NrNXeubACBXC6x9QLu1ywbBsDWbwMMXkRD3EkoSeDRsgodSeHERBrp7TQn",
  "key15": "3mYrpYboG9LPY9VEqgx7iKmvBpGEGGee5gZTVMCbFddjSzKbCgcywjtRrLwdLFTTr4vZR9Uq4LNaXxFfU6KiZUjq",
  "key16": "5tbfpZVqiFNRqCnVMjo3snPPZhz4JrtyRd63vx3LrfDjJ7YcftfVf8W7jKGpnEkGeTz8VYv1ij7KifNmyEW6HwiJ",
  "key17": "4mhPSJ1mvWWwJtfh6QA7sEEuhx6w5ggSgVHqYqGe7QeB8UbzPEuhJnLTZpeS9HrurR8g7tkSyCMy6ov8NndK57h3",
  "key18": "4wcDRdtRKeZvCPL2ao4a49Nf3YFWFsodZSExGWenYa5kJbGYJXncoQBqA5mSF1UVM8fGixGks2wXWT3o5fFq7NjC",
  "key19": "41J6sGX2ojRDuDAGAueYcthagh9aLKNgQKBQzUdoFQ7WftUz7tMtps1Scx54eQoFM4zBsf34FDT2YXTx8tA7ELFU",
  "key20": "3Rg2euHrkYHtDSMQ7MSrhKHTWzJAwaWSvbN83j6Xh4UkevPUVxVMwUYJ6Gjnk8NaQpKQP1ceHciTVcBeefXxKkWB",
  "key21": "55KwM2bXNDF8gBBTi94utFvvwFwu76wVTgjKHYFwUReS7Zp6qVtHKd15gLbU2UuhRGWFzFBVtKR8Pb6gmtvAfw8K",
  "key22": "5hyshRb3iTYt3wyvaxRFfd2TT9E1mP7Q6RfEJe9aErqiE4sKz1Zxtv4SwTHbGbkTgLxWeoHtiHHnGTJCfWiRLK4C",
  "key23": "644m7Cphabye4wijRRguaZD692ooP6iQR9GcvSV6Lm86vJX4qSmXFasHUo33bEN1PrNf2nD3m1WspnLWGj7kvWQk",
  "key24": "4ZmVji8mnY8VsYqZWy3Wkq8SoERbXREsQE4n3HJHjCrvy5e6Rq3rE4DhvzG8848iZ3mTruN5JeVDAizaztPjhnCL",
  "key25": "5KQYNv4TjKpTQ1oFNzMH2yLzNXoKsFL7PjPAAZ3ixV64QJHCLc2e1hGvZkh1HFckugjBwM7muyMob2DLZpFt1i19",
  "key26": "7A7pQsSzBAbBCbMiHYvKQV19DCyT9auBEU1A21brweaZsJXTduNMtiJ6Y1iMtQBy9NmWNKvrw7L8PNLqAmMBZRm",
  "key27": "4Q9LNwF5checiyLPab95HJjy9FuYGL1CvDqZgWGgkccJJHh3xygXu8W7qXhfG7WAaMjGPLbUusKCgXZSSztZKTjH",
  "key28": "3PR1p3oaD4HeSakLRyT2fPgHFMxGjSfXaNb6TenPQQgasTUobRg4M2fTbdnroCBLon28k9D6uEb81oqjzCtymn3w",
  "key29": "2YJ4WS1onPvteibYzVsZxXfFiHNd8SuwBPJBWHevUwzAJVkVowtwbf2vJ6DMntmresqNwagMPoGjzWcUmGBy1r9c",
  "key30": "2oHrAMJX81ErJ4foQq5r8BM83LdtC7TiGKjRrawXehptaNR8NwRrrzh4takE3V1E9a7hjj6jjiTDD84kmrqtbw5Z",
  "key31": "5NqEVKvWwmv1Twq9KZBn8nn5CzsCQufJEYfxmHchLaGdJnBR4QMVTw77uZKgbtPFB9Vy6aaZ1GYRrKVfB7YYuhHm",
  "key32": "5gwFqSrBoJ4m9yzZaPcG8QL2FThzM46rBJdgHaJ4mFzkkkdYESVsr7VcvEkabBNN4ahnojjfDkZBGtTbeMZryynn",
  "key33": "3svJhDu9vevnv5GJZprQrD5Qefda3G4F3mpJKRjvCpqW8v1vgR598GQKkaDMMePmQ9SnN3uEaXCNyXhfdbypT7Vn",
  "key34": "stNCi6kPopNA49GVW1xLj4wNRBZB6afNptJ3haUjHN7b4MvkRw8JzKUtvhW67jq4kiQweMzZp6wpGtuE2Yu5Py5",
  "key35": "3gSSrg3NCApU6dFBnnpABuqG8uQfc7ncfxxQjfjCFNThfp3YDpSpW8AgBNebCqnsDPsdrwS6feAuU9Ryx4GdTrw7",
  "key36": "3BLc18aqf8rxua9okUHMWTWXXKvg1aiM2tpv1wuXxmK6eYeU3LrUU2MTJJkifH7E9MGD4fA4RcF5cj6BiMwva9CM",
  "key37": "51wD5E62sjdez8mP8Z3kqsfHcXdcSQrKA51mJykHpJ9v28q5XMLNHbacDFMebhx2uQqq6AtdVacwjDcPUcZjkLFm",
  "key38": "4BcAsM9d8hx2ZMDTp1HwCopgV4if5eocNPsbhEBkVUrJoBEsGqRpMmXRU8nLthY8vuMjMJSVKy1adg3irDKALE5c",
  "key39": "2QAvqTKtA78S6zpCyLjH69jhyNWnH2xd471fYcDbjU52EiJCUd1JuCZVmSRT26SFx39im2NDnXgdTP9GdFe1z9BB",
  "key40": "RWE1i7mWR7hcpRmnPmQM2QQrQf43PogBaNnaKcapngT9b9rDTxFqzGHJH4xryotUrtpUsaHP3QCpnJxTuN4eMVW",
  "key41": "2kCczKdrGpevKAWPvQiCLzwRMcsmdH3Hw6higuKFtwsgGzTqh7L5uQH6k5Yrnn2zSNS3DFxbJGwvtdpTpEZhBtK",
  "key42": "3sXuoRpCQZyduAN24uzb3fHAYsrVbAMX4qnEmRobTW2ELNrXFotNhrkFoQVdcjB8J5g1tAsJweJufzWGhVvyE7Yt",
  "key43": "2zw99N71UefDhvktQewc7g6USeEKLVMJWj9eXRpRwSdqWrj2kyEeTvwiFvW2945XJmpXNTFZyPkXf5xKgWm3psgY",
  "key44": "G22QRVmq9xXB3BsT7RPf5VfRckkfJ6EvkXHX4z2Qu318JXh3iNbivurPv7hTPgB8RmqDkBrxo3QhoUo3YgDxmgu",
  "key45": "4NGfEsshDuD7QFYkad1JoAQKxDtJfkReNcdmWYDdQcyFEC8Gzdh3a8WA5zZWSYKtgr2mVWat9g7nK693CDTWUxaZ",
  "key46": "mxHZVYpPMYWhvwcNW3cqwq8ctn3TH9NQDVqivWLkEpx9LJBkCdhZ3SZHCR1quhYyJ3xHiUvgRS3aEf5wWp26pTf",
  "key47": "5JAwcRqWRx3z22yFRkcp9nmunmdUfXKkjz2GR3aLdjYCCGdjCN2VyCTkVdTqmK6WNYMcBnBi4mmfDRh2FYkYEaV3",
  "key48": "3A2v6rh8UeusjvaaDg1srxvpYaiM7qZVoq5trwrkwK1ipvb1ksNsiwR95p4wD53gdJ3Mfcuhds3ZyNmNx2CxhCJN"
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
