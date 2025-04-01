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
    "3CUhWiU8ZfBMUztg2gms1KgDp5iD8aZo26YKqLq3Ega1W64hSveiq7S5eg3y5p9sEXiz1P48HCm2XfDaAc1yFGXm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CgfiyuaK6YdaJbMRmv1Rr8efbn1gV9cDtkbHpNt18HNmQt5GXnpRdxHjTy3aJQxH6LUz2jwzJASWBMv9gnsMwUH",
  "key1": "2VT2UKq6t89Em9rCTuwTaq8JrsRVSka2XLm88rGdB8vXJkXfo12eURtqfu3e99kd2PBbXo8HCMy1i8xP4xiJYgpc",
  "key2": "TWwGfaCtFzvdCDo846yRgv4Uq5cnpUfriBnxwMJ67aRYeni2KSBnLS5DHkzi8RcSDRLKKmHGkaCjrD3hKooDGET",
  "key3": "4Wv32sRv79Tn4ivMbPHN4S9uJjbhJpSaRt6f4JkRk4cqLp5spzYxEP1YBmNptWH3BYQX8kWWJTCbVHPBQVgu4LiK",
  "key4": "2y3JLFUrm7euRaybcJnWRjA5BGRp3AveV2x57NMhE1c6nvtyeFqnRuXGdCsxfPsW3ox1Dw6TjtE1Cb9D5KFFUTsC",
  "key5": "5qjFnRpL8oPr4t9BQAUGYmCVSET6Nz74GxvwQRGkHeMbfeAPEpoH8LhaMWAdDEReqshQidDMn2HKKSnm5uk1v7Ug",
  "key6": "4YbpPJCKQAy57oruep1iCfFP5Pu2hxWNkgUbkRzYmyVGvHrcf46fjHtdYUmojtTyZM8LTb7cV1TRgE9UAUHazyyE",
  "key7": "UhuAHkjFia4VPFFgfdEYaSwxN6hBgKcPigLMfbZxKdJj6dEpa2EMD8CAADPiw9PECDysGNGiErX1YMD6HpDvthL",
  "key8": "57b584YutkE7ZdStp1ccFkvpZaKZDdLAafhVvWq5GUK1huhsmEN62CBhyez4q1ThSodrHV5aGEp4Q7qaq7TL1u3L",
  "key9": "3SXueXZYhSuHqez9oyYGTCB5a9zPWUCbaSwJtySWJYN32crPfcyTohsn9hTJRZKBXM1KzDHVPGxFKJ5G7miCxwDz",
  "key10": "59b2JqacKknwV5KCbj6v3HJ8KWLwLbnhJJE4b5pU3nJxN79YLfTjgxUcEf2mjKk548NipTD4jZeYKYwzP4HZrfmc",
  "key11": "5pJBdwBH2VuhnEuUBn7AXPjAPZ7oge93xArjjys7wyWaGAY2iw5jr4vXtcbJZ5cRVcMY7tpGwMNrWnv6wcwHRYqt",
  "key12": "3jhe6LGHX3s3MVtgcUWUdhV2o5JcWBQLfrm7raH3iWbVLsCBdbknhjXQ6w1DYtGq2MjmMzvtJkyKs9WUwHC74zhR",
  "key13": "3uNa9WMVU15DVsz7tZjhLGqzmhZpDexjGjhAyscJNiBNpMvNmMXqKQ5q4yCktF713ywfgaiSgRUwez68qvCHixfo",
  "key14": "RkBbgAt4CY3kLZU3YQTyUEuxE2WA6p5VxzG6aYWsnZ4K4Tzp6YDAyqcA5kgKkeLF5k2ewTU9nNZ2kJRhV2KfjqY",
  "key15": "3sXRHQu667RvnkMv3zzmKSLF4ffkg7HPUVty842H9nBN3VqrioEdt7rxPLLdhP4t2xipxiCoEZsk7zN3xdK8LV1c",
  "key16": "8127YC9Mu9wxGuDk6AUcFZ9f6eX8VVyhuec4qwwZCKRBsswtNzmZFEwbhf6QG4Kew8ycTBGUmnTQqhxPM916Fq9",
  "key17": "3kjSeBAVbB6EmtZLDh95zRdz5UEqvh93Td2s23guRFgH379ChyCjLGaQjv4dPPSBqpsLpFtgqWPrnth63GKv14iD",
  "key18": "Fxt8UxZ2LnQxjARRybt1PtbzAGj5otThE8DjW18LbGiCcMpVhN3w9haV9AvhN87RKmfNYXDcyh3EahzQBNc8tcz",
  "key19": "5ewPP48U9tDPPEuswX81DSqu3vSoa4fNEHQRcLTAUQX5GwmeAcHZhtzJH6CZMGofvSLj4i2W8P66LA3BuExhWrAB",
  "key20": "5s9w8iEU4FbZ92zT1FCH26KE9yBRDcBASNZvk3WrFt6f2vi3jUQUMnfJicNKNvRoNHPdhBTeXmU8fAX5571vMsEn",
  "key21": "5zVXqSWWN17A96YiMQmgLzSMqpX5DnavE4V5PYviYP6Y8iJkMD9czviZDyXL6TcGGTSjL8XH8GPk1KRqHHzMvqGk",
  "key22": "23iVkevP17MHoenJsBsbK1r6hquR7iqxbiZGcn2yzwvmr3ohy6yFkEFvLzeuGQzfkYqeAGb7VEFj1urNK1MUcLEa",
  "key23": "2hcGCZ4VwuFtPzGFRnzTuwoxVjLuvKMVq8haHBuCgSEtvqJnsf7qAj3PHTimFgPBVR7HnCud56evDGJTm8Y5jwbL",
  "key24": "s42Vm3VMKPpkFnnkjZCP12YMuXau5vv3NmLTNo46ysH1frEKMPsPUVZ4kz3snPGbKDQBMKu7jg3ZTRsguyHsPzS",
  "key25": "4XwWDZ2hWaw2TvwzqDVw4YhwCRd3kXot7GLbE3fTG1pkfAgEMXucmSD2oo4bCK6TuqCRzyWW3cReUdmkmVLJnP2E",
  "key26": "3cdWKEgg4RxZRyXQAkKjD3rMWwkSLnFJD6Lspdrnb9bv1PAUBTKa4xdnZXvDcJx8K1R2usTS6mkLkPA8Ayq4jn4w",
  "key27": "58xZS9i1nxM2bXTEPesuf97oJkJqc43X3pLBAFf9oJfCzYZnD3FDsrqHWAHi4hxoeabtish48vHXq3bDLrSVhpxH",
  "key28": "3oVZX1s8YEPL7n3XoMfEw89cjtmyKQxDCE2PMwtLWdg4CcZ8hDiv8XZfsdRkLY6rNtduiBBgMGQAG8sXmjNmqcaZ",
  "key29": "5FbUNuk4gacXt4orWAfPZPtvyZj8hivQRaKNCWEfNdAdjig8BMQ4pgwMiFpeCeyzDV9DSG2CQeZXeut9ZqLTv4sL",
  "key30": "3sATXmbDiCnhj74D7LqFVtW23i5BksKkumJjhQYRjzjfQphMMuD5rQKt9Bdiw67JLLMxrHx8mPoAYtiaumoajt11",
  "key31": "5eCDhMWuk1ztobeLymUS5zazHxTRu7cr8ANAoaXccb4H4VK7nAmWU2MQ43bCpho3pJaAAemsiakFZeMUZYsuF1si",
  "key32": "jF2c1hk8ugyyF4yDvzSe4SdqQgGnbruVAd4TCMeFrEzxCPdu7y1DKUTEbN2wivYZg7ajiHu9cA5zD6bTX9tdfJW",
  "key33": "4QC4Mqe2gp7yZntgETpsjCu5jTovkYQKpNbkswxPvnxtfzcGk5pSWyNKgQxtnxUbQASY8ajSeG3p8KeTvwTDkiQP",
  "key34": "7fdfUcrbdF3bEyTCCHd3CVFtpptRkkboiFq6TzMwsP2qhXoB7Joo4JLg7SZZaCA7yRiqN9Zrc1sJd7kfjKaBMUM",
  "key35": "3zUEKQByk9roBQ1FrEPB9jR5STZU7t2v2QNcnLkTMnn4ezkm8FhdKTD6BVCRoHwPnati9nPrbVhnRBvuG3Su8r54",
  "key36": "3KjH9vmjEGFTyJc1YfT7js8Azgap88Z2iJxrDd5SJ516hrDV5DWYdgGMDAYcTm2GTQ639SjhuUEgeStWModzVAuW",
  "key37": "557n3SNzhNMbQwa2xtZmzX9gYzUYtm3hfwgr9iriX2jqdkKj8EodwXS4bv9eCh6X7b1mcXfrKvvjCHESa8UZUVvb",
  "key38": "3A44VoS6VMZvBd7mYPMtcXASSpzZtWwwzp7MCbgT8dqEkTomPCYkwQLMSqpUUqZqwHCpGosQiMNhd8BKyhV41Gx2",
  "key39": "5hFZNFRdA1mTqge61uqqaLvjrHzXXNQ1gP6SmR7TTA4ef2iqPPUneWPWW1uKcSk3HqnYtYyMHMBxtnzMydTxnbNq",
  "key40": "2zy3e3hER5sdDtCUWubwfNjp1KFAKHf2gk2SEpe2RPJ2PfoHPcWLLgPyk5YTk4aSLdsLQAN18FcizdoDBE1R7Hk",
  "key41": "G2i2YJsFLWoeXcqNdhv3tYfReZtPP2mBmutv3rbLSUTxjqCXCaQUXXbRRKdqAkWYHsswWD3L8Ya5BvdR1wvor2E",
  "key42": "yAbLePxPvB15jMLiQeJzhTb6sBDUjGAmMDRKjJMJfhXEAfsVBqhhVkY4Qmkc7eSY48AvkJGyz631xRRzSBFPo7h",
  "key43": "3Z5opG8CTce2TSH9tqphffjKosF1TW2KzkygvugfyiAYZ5SMP12bWUjkyA3V8t6SysMV2hGYipHdGhegUjvrLTfa",
  "key44": "23MggPHFobfdnbPSk1gSaKL64NabMeLVJAjfLrsY7uiREHMxJU3jNietKGZYsBTEMSNyecwYHqXaTupya659Y5qE",
  "key45": "5prVPWLAF45UnRdNQYrZqZqHf3Dm8h6Tu8VjjRokAiWpWJiUcQZHG7vsC2pB1oUXdZhDt8dUHHN16vRr3M3Mxuhq",
  "key46": "2mRKAQ4y4MGRk5TnKDz7aNYrrEojrnc5DM5Ldu1svkBQDdKMwxn32ihQthBsoSy1mdava2yuhdqRVsQUNy2n6BNb"
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
