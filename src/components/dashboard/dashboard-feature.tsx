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
    "4CxwMD2q7jYRJ9zc19HaAtTYJVkvk4eGkDoMjg863HzJrexYCJN4iEKN1p68MbdYRV7VoKVKUX7AXxccP5zBwKJ1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mDzQ2Uwxtw6HJDVxVnma4B4BuQrorotaVw9aA1gwPgVci6rcNu2wq1hKuAtv3tB6D9Q2gcT1PjUTBC2uDmVifQM",
  "key1": "4oHkwNkoHqjBhmGz5jeudMJCFCNVKQiRgUjQNzuF27tD5f35s2U2Ds6xUyK6m4vgggbVwwv7TbrNXjXrJjP26HyT",
  "key2": "2EQQECyw8XHoWh2kjXmgg9tTCGMu34sUPPE8tK86LdhzEA8rPBiUUyQSVkpU8dz8Wmgp17oGn6n6Fo7Bvq9wy2X8",
  "key3": "3UEAxRKNyuznHNhtQbQudhvexvkQ6S3WFAohWRwrhknv1Ds5VPaANCHH47dEr1GSmf2w15AmreCWQoPCdRH4okWN",
  "key4": "2nQNRhBMrbVkK5qjkMYjgPyAzJxhQzMsAkpckSmzDiGFxJ3Neo266Ck1aHBvtLUkFVahxYctf9QNifjSRb8gNSEK",
  "key5": "2iwsKa6ELA12bJZbc5UZUBaC9XEtx26bbSkZmiKLTCdmDc2b5MABhdoMN3ueGMNC4MWqEFZrqJ2pWAK5Fv4w1Fsz",
  "key6": "5Gz2odeQ1Ds9sVgFXVSd6eiBuRKKj5oqFD1BEVf2kirUBFmjQza47vomR6JsGTP3Qu2xam5acsYW34afJRtZYK9E",
  "key7": "4LQpnUWFArFX5EV6BBdMWjhmtbGyFZVZus85opXXAteoe4ERZbiPCWwKgnb9FRJBcbwccX4k9Lysx7PYjtdCVmW1",
  "key8": "3uh22EDdzWAXdiz9ZtJF33pKBSZYcYx2y97hhrfhd9FtfUbJRuDWhcXefT1Lefs1bW6i7s2e2Yv5Ri33oSipYu5z",
  "key9": "2FxFhHpQDuJTxYxxAz4n6LStgPv73eW3APnfVoVeoTv5HD63PXgawW3TMJTuLQABwavbcmMMPT7ueUmg83m1dCjZ",
  "key10": "TFHDbaMF6fTJoVv8mC8RwtQFiMtqwQxY8ukpsT6ic7Q9SVC6FFdWRVDQnE2u6TJSHQ6ki5Lg3GeV9uAGhF8UHU4",
  "key11": "4tRXUVqua1ZTzviSUsoiDyMBb5ia24RnbK5m3w8vXYCkkv2vExYNSGRwBevC822JNbdg9S9w2CEmBzETuCRFhhzh",
  "key12": "28hZQezSehr7c14yJChaAnZYMMSczP9hpbvZ2s24KV4388aytLwhUVMmT3Z2KpztpENaqcmpTmfqV7MJ721VL7FV",
  "key13": "58QeEbcPQ9tShcZd7eTTL7ZWp4gbTfgV3ebStmQ4Z9cBPTk4suFZmCyAX5fhqvxY7PpiuDrUNYmLZQx5Y4YJtb19",
  "key14": "4oKqeZnjTEHVHd419KwBQCFUWfcLjXSMbYovkS74NgYfhhxdX9LzZhwZWy2Xp4mvmm6yL5yXes5Jh4eEPit4amYk",
  "key15": "T1g7GetovTPPNiNsSttJWFevPunRZNua8PFK6fgmC9Nr3P2SQcUDjkxE2ZGSHrHr1MG6gXQsjDAAhrPRMkhrihy",
  "key16": "UzBgvJeFVqyYpYgEnhQmXjDVueVMt12xYh7PbXQH2haz1yz7ykSWQNjE5v3YwS6CgBBCeDzXUjgpdb9y3YtqqBE",
  "key17": "3cidLaEtSU9xxUZbbGwPaQScvpb8cPCbogPQf7o46VSzHy455puZMCZdjmQ8nYGQF84aCxzn4Z9yfqF4DqrUpogg",
  "key18": "4VSVZqQMoptZK7JLPF6GeqcsBQ7ixVmd11n3jzy1jft37qHvn3jHKbhzCm5f6c5BPJHAmjbtqmFjrZzpcNA7Q91q",
  "key19": "3keADLjjJRkqB6LMA5vmJgwopqmSvZ4cjcntH6okXwiWpFA7VDhF8GtvfoPNkjipz95fH6a5WKW4ehgaTBFNBjTF",
  "key20": "3zuXrBfYSyWun8fnsj7cPUh5ctQR4QovCurv7oE29ynLsCdzid3trwZ71YsS6ovXeL6Z8Yq2FWAJ6TAVua7J4u8m",
  "key21": "4q3szRXNQxCqrEU7hV5ok7KznLiTptiruPNxd8CkixaN3qBWB6QmPJBatG68Gd94D8Fg1iUWVH82jn4g2DeT9BRS",
  "key22": "4choRBwkwakf2DK5VeAjiepPmW42goJjedVfzmfqLm4sdCmeZBW3Hy3WkezjDSy6NSRf489RZMLZ1D7EvaadNd1o",
  "key23": "Qd6YtzhqgaXkfeRsa9JqoxNxQeL8GJWG26wCmxRjqdWLfzdPALdDDNkeddhCLYeihkMxvpkr4exqd2XNDt5qeii",
  "key24": "2SbPkbuKcSddbKtTX4XFjVwhVZza6XhEW2ZJcMgncbHB6ekyT1pgeoVxeM6USPpxw5WdUbLn5A8uvu34KM167oKr",
  "key25": "21agtQruuNHVKBzrARv8Sztihc8tQbBUdNvkRzhv3yCu1XTpAsaFj288NCpmqc8ZsWES11vY8tV996QU3tiV9eHo",
  "key26": "3vKbYgj39iHejHhMaQ9siQD686hEViyB2WD8MNptrVyoZLb51DRTmFtPfBmq8QQXsw8v3cEg317VEKTiRFJx2qs5",
  "key27": "5Rm2TYiRjqzXegNSX26eNeSp7WMCFmJTGMpn7oSpDMa36YdioWmLXcCYo32bRtWYXHqGPFQegkFoHwUiZ6hpL8so",
  "key28": "1rdgs1exdusDcgjhfbLtctnjWBDcKVxtamBe91CKpKx7jU2rKdvNgdFBrugarAsWhNQTCLGX4BL1nEMS1cfpywU",
  "key29": "28Yv2KVpaqZDi2sS6LoaUQtJBbt28ZSw8A1USZw9yeJfYsFFcvioNxx3nU1nLxJ72EdekX7gpSwSUzV581XzsVCq",
  "key30": "49MeNuq5v6BfmgPprqycYeCqBUBYniGKosxQT7a6JqubRYbRmeyXQb4wN14jPat5Uew9UZt4tSu7pUjnpoTHdrjy",
  "key31": "2HGPt2MhNtQrd8QTdFBw5ZKxh8JiB3m2ePS8oZxRXPmrWRRfUPj83xQFQjcqjnMFTbBNqaHnYhWQ77T6orJBKEYa",
  "key32": "5LfqtYzvUsGz2xehKD3Uy1RtzAxKfzWHSyf1BQE6co2G6QcuVpNea5ConN3jhq7hqmre24VLg6GwopMu8QzoxS6S",
  "key33": "5zh8yQVn7kDQQmzmQeWV3693xQQ3tMmf2nVeidLferdDEtQnFRSwcqbz2hBAbopbtNqGh5H8NXdaQDzTZr9sLEmb",
  "key34": "27c1GX199rr2u7M3zzEagKi3Wj3LhwEivC5ZKDMhtrTPg6UTdF9jFNr3izTji4ReyHBrrRpVPVYFyjGPvuT8iNrS",
  "key35": "5PFErFVsU4jRY6q7EpEKebxbVCi9KCAuQ2CEmhYMqbU7RuHoqFaiq6A3T65zVpGvjguC3EgjL7VnsChyCrMmLtaG",
  "key36": "3WMFLuE5hcvWf4i7UjxMmLNKVSLPPgLncbY8RXPyWG2boCtuYeoWw11tmcScPtRwEsKL4g1oUdMavRmmjc5ve5JV",
  "key37": "4QRSbv26bndtnZcz82gsC9zyf7StTdu9ofqAvKckV6PmSk8tXEnDr1d97fpn3MpJ13SD2hfzag9Vz1YbqQJuUYQA",
  "key38": "2nJEKgRjXckswWBgY1Sp5QqqCV5Uc2p4iHVgkDxX3A1tMnR1V8QuZZLdw4mLw21rPvX1r5cEEh8mkqPB7jhwZqU9",
  "key39": "4vdKk32HFLgzobVCBmCaV3ZYfJRTxJRamJHgC5X1ppNjHaEyu4q1eBaJ3aFMt1HCnrq391Xe4hJYGV9Z9QS3hMTh",
  "key40": "QJ7rLXut4woWHMp2KN7MPm3d16VcPifq4yfeXcCUPZhtzTJ4TrmLST43oHcjcRG6kxjVQPaxJTJirrZb1g2qugi",
  "key41": "5YtmBW34A8uSmfr8HVHsMfDtu2QzWvR6f45J7GX5cCssw8MwyBCB4v651iVzKRCirPHHyPqLoQuHjSri6YzrH12G",
  "key42": "4qLzyzgu2ETCMSGKmiQYveqzkquSJ6Hy3byjZoWJ2pZQGkMaTQ7grw5wYtbeCovTLZUvJJ2oG3H8atwPmA7Q4ZRx",
  "key43": "4RGSB7Dv2Y29ZtQeoSu54MdUVj3QHedL8fcgppotryfxk3EMbLE6PLFpVnPaAbdwWUwBe74jpY2VsQeBuJ7Xjsj8",
  "key44": "2kZwMjCk26np7PZSGVuCnk4UYtUE5CK5t9f3jmCAFdfYoLrqm8t13NwC8h2aRaiNVQbtG2S2rW47gidv9PoB1TUS",
  "key45": "vTJKHNz11yVxxsCojhAWmfR5r4d37nB99KPNng8ebxshwLLS9aRJHM6chqLcL7wu6DV1vkBUe9PP6pQBt8gk3jp",
  "key46": "5Dv95enFbxUyb7HM7W9onjtwzsT4XeTKiUW8DB26hTdRcauDwXFto5o18SujgL4omMyTaFv77TyE1mGpV2q2VfQ8",
  "key47": "5bDrprLoFnNPmx4wXcjCaLD7PhDP6vZvarzBm4ZxDTnHabg9hR4tBG6yM1Je6hCDKchurECPV62J6yNGHVtvcyu",
  "key48": "3LFLu51jjEZJbJ2whXKQHbLZ5CsCPsygxLPXw4SjExC4bZhg58PbJsWQocU45cnMLtjZCTXHPW4YtjzhjRjw3VVw"
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
