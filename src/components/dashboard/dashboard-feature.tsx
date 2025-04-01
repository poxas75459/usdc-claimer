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
    "2CChDpZ5G8eV7qNsRxMa5iSaXG2uFHwTRroj8tg5uuBAsUgiWiCTigdLtrEpWokN7GUPTZt6LDwaPCmD2ELoUMJa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hXEQYZTDfoAS3kTnkTgtqLS9r3BqyEYt6zEXwb9S8EVXATrZTh8LDejXQi4dhcCD8xHdhacxcfyCuzNd1u1jYFH",
  "key1": "1re4Dxbx3sV7Ab2QuNVd72t7xUdC5urfJTGujuW5JfpNhV47JWENs4va81aKQD392CAAF3gXJqUVNYfj1vvxTAS",
  "key2": "4JXGHuyt4zigFvHexo5yGPMpSD6CtTGA9TYwGbhG1qv6skAri5PjX9gVJM2eCzATxmbKJuZDKeHvB3gezeQToffZ",
  "key3": "5BsjZqG1khGVRbvFYMLkLwDovWqFeGVJwMczSCpD6SHPVc29siT8Zxox6KroNsLcohQhVk8hbiGY25Waw9ShAJFq",
  "key4": "4nuTCEGaeFWfxMru9Nu6gdxZ2ddQEgcsciapnx4Qsz5KEuE3GgMh9xuJiFEDdnohoopLKVYs4SCn4yK4kATjHjNs",
  "key5": "QJSvtP2ee55Jf4JTydRLRMjgd2vzRJFsVw81SasGGYxH26uJjdpBFrJDRapara8rDUQ1efU3FSX5ZnubJEeYeK5",
  "key6": "64S5bqnTUBN8tbKL5ch4r91JccBFGy2m9XZRhzt5ENJBP634MtsHTaHW76KqoNUZrW8ePUFYtvdXv5ev2EFM9GG",
  "key7": "27vV1abJwm49dXvHnJ4vpjr68du4Yti6FBhKs2SSKTXK1AvpDfVwTSybHuWyZNTg877wZy8dyswXwY1SsyaMEJQF",
  "key8": "5L2mqELtGLdRFqsNPk6o6sKx5mcWUossoFCVPdiUXHSdpitLE78hGm7wkeCGJg5EerVBYq3Co92WncxBkqKo71Jk",
  "key9": "5TCAwM8CeSUEjqzacgNniSQzmG77FGpGFZTKGpvjiM7DbFqv5UEDcXqberDyCsUuXRacxfPY1kfGZWvqbyncrqS5",
  "key10": "5dwYB1rwb4pDXBBPYu5DG3bbzUqZggkWW3c6BddgviC9d7zP6stxSRwMcRcD1wtzZ6drUDYiVZ4QFsjx3uNDMHEe",
  "key11": "gFLeQfMKz7AbxDf9GLyxSuwCbZNMJeoJsr71yfr8kKoubgN3v4wmJcPLXDAuyjhtrq4M3o9q3ocH2MnqGpfK11C",
  "key12": "3GKdr1ru3KConegzx527PuULPSmNdPpt65RaEdpqQDJ49BbzVvmLcHYwXEk9E2fJmKsYR58evfPQ6qwVKd2gC4Lu",
  "key13": "2EgqcybXq7aiwMPhJqwNVmiuASNuT9kLnHUsycNKQmU5voivPdfsVKghayxZRcyYCAtXLNEQErZ956b6bugq5bMF",
  "key14": "Vtvo9bNfWkFyCApuSnZ3rFUa9ttvofT4GhhiamuWZ5iVxsiKi8DgXTEd1pTPhgyjiHEhBxihik7D2S9u2TdvbWh",
  "key15": "4P6uRRAi5CEsDGkVXjn8nywCptD6h3xTjZPD6hSdxGDEu8d7PHtsUgccNMkaBfy7nT4usCZmN5tTRZaNfR8vwATn",
  "key16": "2xCKyWAoG7J1TV9BppqL42rtKL9jvroE1rysHeJTJcxgsMKeySBZcLiDEuw9cuh6K8MMhGeM6kUqeAKVW9Uwc1Lv",
  "key17": "5xChKyvRwECUCbAmTc2uxxQ5qJ6mHth16GJs3HyvXpQDrafcu2BH9dSbzvDLD4zS61krXjTak4kbV241rY4huyfE",
  "key18": "2TxFD99noVyuDk2eVLj15PFuJkLpFCzitfzy98YkSt7qehYx2u12mKHsnhV4fJeHFkVfBm26bfJYhNaWVmkKxnaY",
  "key19": "5zYCnknfGGTeyLqAgNbR1TKoRmwtBa6Pae5Zk68Z5mmBUeE2iJpe1rWYSruevu8hmGG8yLTZMwaMpc4h6qpwNHK",
  "key20": "29MtDJNPfnAQD1GGzo3WzrEZQeKZo4622Y1FUad7gBqkc8Yx26v2sipY7z3udcCoWhxuxudCZKswCBRLfykph6nJ",
  "key21": "MydP4aMiXh6qKJ6Sz3aNY8V5vNLjGD5KQaGKnHXkokxyfzNtwbLj48PZMd9Vi9y9BcJ8GpwPmmKJzLVbDeJJLZk",
  "key22": "3vG6z9FNjWKKexX2wqRoruyC2XjMYFACLYNt2p8SGzKV29q8d1KKanZtfEGdVfpnH9rPrPnBfsmo3J76ubpjmX1A",
  "key23": "M6ELk2sQfZDYQ19JbHu7HUYdE5uSHg2STCeZG3pdSZKma7uvsAwsdW4doU6N8ydo5TFWSY9B5Me7icLhdZKigLS",
  "key24": "4H92r29AXumRHCAbPyAb6cCcRyy27eRikX6eHqgu3b3wJixtT4YRtHFRaxiyJ6iKEFSphauxfKnqTTCZeznnjUZQ",
  "key25": "4Tmd8GMVd4MhwVmPXYArUka2KQuNQjQE5VoEpmVSkxLtievuPtiLeLLF2Bqd9i71dayo46iMtTjgQH2JT1VQZDSa",
  "key26": "RYDEtBesgetkaTyxKarEUhJRf1ACa2dVThUMnkEVKFtstDSuVpPg11Dem8XAjBVqSdV4FQdJseQzMug8dK9e7Ue",
  "key27": "4d5KtujddaxoYFm9qcB83kaFPFVR4Zq7KrwhvD8Tb5hzwrTGR6o2Pd4Z8r7GMp6Cf8cYfPSQZ1jV9jfze1uPeoN5",
  "key28": "ra6QdxFKNTtBGPt4euAX1fHVZrJFfuZd9j94JhukSnFVjn5BbncNNnTii9orhGFrTybpisLKBqzPA8aQEr1hVdF",
  "key29": "4JYLwty4NrDtwjANQydT8yYZCWBD7XeWZxwnm6vXKsSM3862Lb92cmwoqZ4tr8j45CCdHVPPmntfhoy2snAxuCey",
  "key30": "opETzLf5ptXEULPyy9UDSNUXmPvnatD4qkT5Z3B815v46SKueVCDpK1oNVJ28bN85UyqwyTtccbCnNMHaMfKrdA",
  "key31": "5siKL4PZjMQANN6P6Rk1cfrTRyuk4yaDtbaq5bbYhFTJovYvk9dUMko9Ha6AqSAPwcMydKpGgi3bbmRHhncDwLBS",
  "key32": "5xuDNsBdWy5u8fZhDjYzmh4yBXAWVQhqWsFhgH5qq4KyCMsd2X9yvDrqeKq4BnVK1jmyc42d1TQMqVguzZKPaA5E",
  "key33": "3ZULKEFScRdWbGVr2JP3tTZbZWpkgpoZjcJvdQ1ymGt52swjXBpVs14W9joghKgGZ89iBieTn7vSqhRvCu2yc9g5",
  "key34": "51XQKkWABfmk7atxe9X7g6eaSKY6yPW53F7isxpfstz2kHgM6HBCi4uwvxU614wrcT7sGrXx5VrMDuWtsm8A1gk4",
  "key35": "2Zxku2SxA3tsrkpgTwMf4Dxm58fBAs8KqCrjPhu7r7sTceVfSK9UEGQhRv2kQoSzqPPfKK7MBM9XmxyWfZe2p5bk",
  "key36": "4pTZmfHWZ2u3hwZb9MBQv7fZiHWPCMtTqNwZ1BBkHrFMKmsU6e38p42dzCZZBWpibNZ4YHAWu9CXSTTtP4yNqtPC",
  "key37": "3d8WaawVKrtYzJXMDfDNcdFgrWUu1FjQeE5b2Ym5Na6unYj4kksuDmdBKe5vdR1BSidt8xQAVdtikQnBwYBeMdit",
  "key38": "4Lmow2kZmXhto85e845KbjqEPiz5db1wht2KkWfH17DBxNu12ouJowhbbkjaMEwi41pGsYvEuVJrk8NREusYrzP3",
  "key39": "4tymFwNj6onAMzFhzRGrq4NLdH9AyuRDKxndtDBeRwSAeKtLpLkdRE7MjgE8FPn3Ush2ucoWhgTrp8CwXSALePmx",
  "key40": "2Y6dets9m3dy6EDtT3ctpEaeAiXAPbLenL9vNviAWsEQT56AmC3fe87WdnLLC3gK3Bqj9ZkXzsd8i9zduHwCiXuh",
  "key41": "5bNaUWmM96WdEXKa3WhPfUw19Gqihz42NQ73EzJb9zRRRNauwZcifkcb7rzr7pz1u23ezaqzaSJbnAcdrwJQ4tN2",
  "key42": "yHThcmy7UR9FcTuhq3cErwLmmvNWtuofpqQqH8GTKU7GKTsMci3b9aTZeZLgXorLmK5tytuL2Fmh6fEujE35ZUL",
  "key43": "4Dg9GhXPV9mvNvQUMFrQgKM2X19YyBde98pb46XAzCUJKuX6peNXAAvWvqkN78ZkgoAJ8RjHna9sWjyic4bYV23j",
  "key44": "4tp9rsf6zVCegVWn38iQZAPsB73YBoFWFAYBKZPNctnySvoUp6w1dx1Ph1LsnN2Xrn6bcE4ZcXH6M26NPVK32PZP",
  "key45": "5KiNJZhP8JGXEchMVXeFixAo6WUXv24RcUKSVUFMrzggC4RGPAokuCpMKXirXEiupzhyFLUBKKLodW6SXeJkn816",
  "key46": "37MSimv1oxR8q9QUda4Zy8GX34RxdqdevYR61hG48nMmofHKN4gNELhzd8tbKLCifhs7txLoV9djKbr59GjXJwyo",
  "key47": "2bHnLu1ZdjLwSo5H9Uiydt5ARxxva5iwCrHzT4DQ3HDLVNbdPPgoPrexdGzKhaB9eLwEDcGuZ5nUZ4ALQYTi9kaF"
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
