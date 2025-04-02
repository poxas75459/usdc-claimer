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
    "4RikkxjvDntZkLnd4HPfukrBgneDRuR2WAKmyMcsNWQBDYaXu9WCU22TJdWhfbW4LrfpHz82HTbN4nVzYNPC33sU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dwwhmUfLG3z79FRdpxejjCK5jA34Qq1j3uu3wzMmYt19Q1HAfBobPfdovSY8YF4VbpdKJAzGiHvDvr3xSq3pUS7",
  "key1": "5P3QyFvvnHFEM12j96MJwmZ9yYK5m5rp7hoyt6FigBCBcwupg92tFoh51Rkwvdt5SK4xUGzzbujCNNgxa1mWKWuq",
  "key2": "592BvyJrmX4Cf8VPLkyxh25HCxd3bg7Fj26Y9cHEkmk53YnWGFKhd1sMaFraEoicj5yL4A5jSvjeWCjRZGqA25rG",
  "key3": "2tnw1qrCkWLAx9aWQHr4nWrXWeDUcLTLq2k7ec1uBshrQ2kzYw9aWPf3ZnNDBp3dV9DRyTYcP7zjARdqm1FVUaTE",
  "key4": "RKGzFH5MZVRUwsHWfezTCTjMR1C1B3KibnZEBxLu5QEf7RX7VL9f7q5guecbLLM3qioUw3hyGcRQuebbK644AxE",
  "key5": "3FcHtRuQqSG71kWKkcjnEJR1ykHHJoM68rVaqMJjrGjbXuvFh48CSLHU3Mrtmdxp3qdfa2tuCNjbYzuGBhELb4g6",
  "key6": "bgRW5NJvMeo35XcqsiBDrQkCx3jZ6dS3uXB1a8sAwrWU3dr1ncxpGXJV4akC4gfyZcS4D5CAdub1Je9fnTY9g11",
  "key7": "3NHmaYCie8SQVtMf2GqdDLPZaoemJrAzk56MZdm4CSv4r7gCsntiUNeWGeRo6QogWGkt6s2oXvM16UWGBN17cxxR",
  "key8": "5iE5XouibfBRasTHu6DN4NpMJh8zCKLR1KvpfeXiaXhfugukphXfydQTgQFwspSnv6LxTchGLnrV6VwHtN7557Fg",
  "key9": "3FwBdyqHbjxg8PFMJU8sMEJXJ3LE6PJSyZBLaLxcM2GKb2JYrpjZeNW6RD1jvEm7E2NpuJjLeCNEbrieDNZCjqjW",
  "key10": "5TfAoYBsoHvLjSNDi6e9pGbUDM7uZUcZ1WRgr6fjYJrjQRtH8jShZkAuU3iEBfF6GRUGcen2cSj9mW3hu1aTfCms",
  "key11": "dpF8o2UsKDWVzmFNbthzEevmsn6KVnHQRMLasGNHKtQh1wEwPyJqspw7Weg8xyvoSWQP1SazR85bEtXSnmd3F68",
  "key12": "m5MLz7KTMNqN2RYZojBtLP6rFcCkDDjKtiPXprru7kCkXHQrzKCBcttc9Bh8jFDQu5rv1U6trDCcE1G9FresXC7",
  "key13": "2axHwMZZfd1UVsbHjwthXufGHpBigBtiaTKuoR32LiDvNnpc3KfgntCo6vWYGZgHX7tweb5tWbhYMBQfZSyoAHYN",
  "key14": "2wFXcyP44zRh3nK3KZmCy32rVGmzZezzmsqR8vcL2SWXNfJwPkaZMVAaG3HHSyeDuWjyt4RiJmuPYFZjtJrZWtXj",
  "key15": "5N1utweHMdbmQ4MM4SfA8fjHYzDRE8knk5KpFyhQarV3eposNWddu2XynpnqYa2Q4cHMRCm63yZGUXJq1VrXTgFi",
  "key16": "5MwbhkMmY2Ex5ZidpUiLJcD6GVG1AkJR6vHaKrhXjYrDcsQKTRHrGABdTDPKWQSbwh9omRacgShuA1f29nVcX1iR",
  "key17": "4B2gHAc5oLBqf86gEPLkBZdXBLN7KKdynPUBiKtymtyUurHQWLpqAWbdphe8SxDDcSjDF5M1naxxRe9612HPkBTX",
  "key18": "4AAdc7RGuRbjmDngqU2qs84wSB2Jy61iui28whSqxrAn28n5ozxL3rkTzPsQtR5AkvGrxayTW8LFzaMVCDPw9zi8",
  "key19": "2ePdm1qoQs2rEpTpAzVc2WJh2mtQaNgQdrhhGeG6bK9y2cCgXyWzvRBpgiE8AJPbwFFepAPViBaUmVYp9XEvi3Hk",
  "key20": "9aGca8AvEbZmdbrSo31vfYNuXC5ATz5iu4t2P64rH9ZK1rBYVGWKTmkmubcvXj9J4zaGTEUTKETTaYGwogZQx3F",
  "key21": "4yAGjusUJc4kqF6cDJQHyvg4ovU58KMRUx5b8YoBR6H4uoQw5FtxMk2r3ZhyGQBt1ndEcWWPFEZ1CCe8dDzwdD98",
  "key22": "3uhMs7w1WiZSxaYLz5Xe2RMs2J4Ugs6LBowfHDsLGebU8T8EmB2LAkpioWntN4a4cZdFz8GHvrHa5vHoVeb8fZ69",
  "key23": "2HpKbRFtFHRbv4vrtbBKCSEQEBQDNgWV78qUVqGoW3yk9f2o2dZdrd1S8aNsXmHvhqMQhcWQBU1M7d3XEVrunbS2",
  "key24": "4FxR8279VfjXug7W54a9A33euzjpSuFPoDFzfUEErjcVMax3CQfDouY5YCbvWbKc8fdRDrZTU4zMto5zdiyQoZdZ",
  "key25": "4fF8SFenBKx9Zte68u4YiCjgAfvYRcz2QWrdU2ub67A79Sh2Natw2F2nbXDEH7zCL6gvPXMtQ1q14J91fVhfMdJQ",
  "key26": "38sRCU8TPXGqh9WNAxyYp7MYVF3Qi1yF3Qo9iH8iHPWfUApkcVx2FjqiZMr5Bz5dbPatrQ4SkAbgxY9cs8oo6X3e",
  "key27": "2AiPBdoFDCepHPCEzvsf8A6JEEe8xNxmK8vo8w8ZZcmqzkrFVcyEY9gs6CEYpwkQ1GJvbg5ttmKWTu488JWwmCki",
  "key28": "45spifyJswad96gDx38CgeQ2ryz8PAbafc6u4dG3K7VStttrAVL68r67ao2Y5myiwHzQ3upVvDqVkNWqVW1wQixV",
  "key29": "4N3TyxZnWQXBhNknTM3boFX1ZFnRTaWFt1dUPKaDPXiiYTjo5CdBkaSGUFtR7ZLNhkVMFzdGD6mJH85t6Sup9P4Z",
  "key30": "5pxFMu5DnG5ztzEmrDFkVK9CaoBK3aodbytqindy2nZEVMQcmnVuED1DHwXaKDE2RSbN8tbkza2e43uR1Rspgcpe",
  "key31": "4upqLsXv1hWiW3MVsTyjiAu3bgLf1Qm96eUbsgMrX6fosWKeDo1wycKqokthvgMfskXdEZVZPU3QDFzUp7dAy5u3",
  "key32": "3nt4Z4RHeNjb5zW3HfNyZc227A7t2ZjufByBTLohxJivAL1C8fdp6Bj6tQpBaCmA7xD9nY7YMd5Tj5PZayEqB4ks",
  "key33": "5FwqQgNVEZVddNmukgcwJZdHnYVLu9fDfu7ZgsaTr7rghs6y8C3VHR4Ddmd2o5TrbqB5zcDLZqw5WhaEowzgs5wd",
  "key34": "3k3YJwbMCzG2x7SkrfCSLDQCzJzJwHepjfyocK6Z4rL9mz2qigWdy2dCaNPxZ72R4BPXhNwTjcmGG1CdSWZMv3vt",
  "key35": "2FK6YYTZTSz68CSNECCtpgfDDZ9EL9rzE93tiXAdrbFBTkVfDv4HbrjbLVfPWU1RFXT8dn2gTcAC1JgfDcvBrtPV",
  "key36": "M2bNAc3LG51XKXDfKCT5V3zuoeVLHCsHPS1fr42KDztoGUxpe9e6gCezk2LPdDsw1CAuSK9BuVZpqsJBYRxofEN",
  "key37": "4VS3q8HRjNfSvDxnCoVdG5wQb24CL2XYkqQcxHE8fbmT2roWQLjSpejovUmgURjPchMnR96og38kuxS9WDg4Pv5w",
  "key38": "5CNtxgRKZ6TfkGbUtSTQ5cMZo6vsdACgDKN3MKxnTnebm8gqTY2Mb8KPhwamh7C1s4ZNCpZJEYmANYXfYy9JKfPm",
  "key39": "5ciuu5TTjb2AbXMmnooJdGJvdbgyPwjiWZfZqZop7J6x1iAWLpB9BTptcchv28v5CqCVRQ4ymdtFB2HDbmG6ZdX4",
  "key40": "5rY7QGeqXENKcPe46EbUMMPUmd4yZjBryG7pEjp62sCAXM7frZe8w72n1pDatyhB4RLrHJbR85dMfug94NWfyALf"
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
