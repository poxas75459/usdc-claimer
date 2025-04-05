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
    "2eHrTNu39zyixTErorvNeRkP8srt74WSYSjCyA4y5kGefRuEdwhWKARywP5KKHG2b9kVc8WKGfQewV4PfAvaZop2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45zD4xpLwuXuhRPhTy8qnqH6Z9rXjiWvzRtmwiCti1mPeiV49FxeV2ufwArs2Hc6SwjL2gY7SEbvWq6Mcfc8vFnC",
  "key1": "2pwzF8JXXWNBLPXYKPVhiivKyWycJ9KKWx1Q8MzxFNbv4vioUEcRTreU4RD3NUK19as2e6QKQy4aKMy34UpTQ1NM",
  "key2": "2eCAWzheQg61NGUugNMpXRSw3e77zUvkRLAHGsNBj9nSfxZB1Zd9p8ev8qsx8tHZZCDQ8HViz4gvvSMQWJRZUDi1",
  "key3": "3Pzpyg5J29vN5PtdTBdMWXQwuHXNjxhDTwJGpvXMs5hfhxymUo1YFcipF6RppNbtfkmmgyquR4oLiNsMCby3Q2KD",
  "key4": "3j1f5FY8j7s3mh7Zn4vPwxCvioA5JtourdsoUgjY1qw24SNAsvf4W2z1gwqDLD7gBADMDdbqQo5kbKxxP5PeDLM6",
  "key5": "53iFEtjGnKWqsS6JUkSPsCPP4wXBcH96itoMiyXqvvCoTceWou449uaWxsfuD7ccFtdSPyKYnTsp47f9ugXKqFmk",
  "key6": "4djKKJcFu1CPHyhbMhP432ej2mkn1ZHbGpsSWoEq97F1n4dTNSSqettWpfhXfxseg9VWekJh3Gjb7B8pQHqvfmaX",
  "key7": "e33DJNvP5TPZMxkZhAGCgVrThLMNoziEfpXQzzeUfpobvtYuFECj6WHRQ5tfogUpNA5scg7Wm14u85WYJC44LLB",
  "key8": "2Tzjkorru7dTM3ZTsBoZADT2UTDbzMEiLhjVDvxa1YXa1GuvEw35beooFxqHjmAhAsz34kgDL6guNZVpsbykuojb",
  "key9": "54e652vhfdXSyLgdP5yZNQstCvVFrQNHN8uuDzYqZBcApWz4kR1XCDdfNn7axCfPZYgiTTwFw7b2SgfWFay8kifL",
  "key10": "2mXrMHfcNTCKeVuCKVjBSS7Uwb9mMzzPm3yWfeFXQJMLwCKboas3QXnxgEhHDR3h5bUsytudXkRjLeBS2WwkT3UU",
  "key11": "51H9vjZgthWg4LgZjt899y5hyPW3NsSR5Ho5UtuDrMPEyJCGNoRVESDcSfUkuQdftXFsenQK8TCk2wcE7z91hUkg",
  "key12": "4ioLRuL8qefGdqNAQ2fFTscuWxRF5BGkRyAiX5BRE93hjtxyi7Cc261ottDSkhBpyNoeMJGWfdqFJURDhoXZrYWh",
  "key13": "HkqvbvG1VRS2g5TC2DPDNfBW98r19RNGomD5xSZbSTennE3zNhjoFQ5efy3ZaYWLszC4AYqcjji3PbXnZ4wZmdz",
  "key14": "vDEH6snwAc76rR1F5P9dshsJHXvo8FzD7b3J1pj6waNf2q4Zr7nt6cGcLxbcWmRyw9rhcWoyBHws2yALtXkTPRp",
  "key15": "4Kz4NS9LkBf9qdVq6ZiSzhaE5jDbQ4MxtKUeZJUBJ6e8PVicQcbj2L5E254Wb5bf7gkJjmvfYw7PDc2JyZHtkCoZ",
  "key16": "3XEwxq219VztVQR7TKTWUgEAn48r69E179C88W4f3QHfr22gaNmDqXboSuHL4jS8YTidxv1J9JbDSE7nAjHfiWEU",
  "key17": "5xbrcBQZkpBAGUHAFZ914jLsNuZRhqdZbTJ7DAcVpSvZdBT5PATsCCdsnYJofXVv8CSCGUpbhXvjqwgyQbfRPpzq",
  "key18": "LCReQCp3SbZ4bzfb5q7Q42e6rqi7nndzfzFgWSgRGmv4JurKnyqRsfhXDRfHovksPQZC364VqRrkQHuWLS1BXZa",
  "key19": "4FcLhmZusciBrkXVYwXViVR6QfzN8eDNB1G6Bf9r99BNxsgEnbCSyGWBDsqVNuYnxE74yDhBpDBobaU4AEesTHif",
  "key20": "4eB85FCmr7Rnvs8TfduqoWGRw2BkD4YvyPkp62uhjkn5fD6Eww7qeZxFqEpAenZ3CeWsxC1wgnGG8GykEKUeSpQx",
  "key21": "3EYUmepM5jHmHr1dPLhm2etKaPwkT7eXyi4dzQLg9qT5P8SoM2xrR294PxjVFryuukDZg9fPq9GSq1o4qtUZqm6P",
  "key22": "4fHdPCzLT38HKad5xchfWGrRxfycPg8gvCbEQzja2AMsg22uWNBNeCkya1W6DzT7Eqb7qGmaaZK7ZFB65NtEmVcS",
  "key23": "TzX62e8B8tyAm5TjXnhbF5sLZ8FGeFQdJTCNy9Rug6AckP2GzupkL2sEsnUuyQzLoHviH2Hrh6D1sg5tEph9ug7",
  "key24": "dsgL7gRE3L6eDHcRe2hBemmUaX6BpnS7wdg1iziifSPTdNHS9BYGkmvUaFVVF2b7rRmvHhEh1SAtaGpRnfo5uon",
  "key25": "ZbhCpEd3SVBhLm8sKzVvNFy6raVSvArYtBYQQmHxE3JZd3TeqrzuMf4eDwCk3VLhtLd216XxCo6VqmwTd64Ke2n",
  "key26": "5qXUikybJGYgieFSL7SN3jCznr2r3C8J8CZJFnpCrZt2PKHupifcFPTuM5csTD6LxBm6GcwAe7aR4zAL5qcZS7mA",
  "key27": "4kekezCTcAP9VujNpT2gV2Nbvqk9S2pFgoRMR3F5FHyjuMwedDgVPooPzZLfXNRdHNNBP2dwEAzsxGqrLbV3nZ8Q",
  "key28": "4cspZ99zdqgqpcCHhoFf6HemEEDP2cabRb2wkyr8PRrTSmFcnU2wKkQUgKnbjwwWR5jeQxRSVh6L5oU3JnKDn863",
  "key29": "3eAAR4c1MEwu6ZL8pS8sCV5EmMS6bEyC9Gtb7xZVFrPGobzLmjf3bvjtUx1PSNdh6aQVRQQUgScAuFrFwpfmz1R7",
  "key30": "4mt4p5nQQUfBGFamBDjDb5wwytgvrKUePokCELLiHrdPkuEfYr895Hrjpu6RSwmhSzByrFAwLSM6CxBELj7uaiD",
  "key31": "Mzx4o9SLTD2xmnaQAbNEKU5Js12e9TKhjznEBykxWtc7dAkjKkUXc6FFmnKH5kkLGCMz3eFs8tD7Sm3cCbAFMML",
  "key32": "3dSEUFN4zoasqoVY6ZfNUX4SccW8jfyUJ3hCNozJ3N1GYRQFCZ8DrBAPsuisNW6fw9LLdEsc5MCKN7SwbcPFER9A",
  "key33": "5ZF2aumqXp56s6iLooey7ASgJyBVX2ZjzsD3uNFyk7DGTFith1QywszDKujXXM4cdPgugXkpeJkKQkMKui9Do98K",
  "key34": "65LkvzgcbJGFBrpXHU28mPM2nQA3jvZ5M1XgubjYgsz2xkRhyCt1NS1F2Rs7w6grknmg7GLvyen6m7dzKhBtANWf",
  "key35": "5e8uoKPDJXhUtHVYGsWHWZJ2NxuBLN1sTqyqYB3hbGbjoRPtCCqZc5CwG64BYWUKaG6eE3xQSEXFLNTE7kAhuzdJ",
  "key36": "4my52K2qGgRmwUWEaEfsYuMSXv6ZGdgAKoDDKHjRDh3EEuHYA5BdSD3Rqp9UqG9KxN6xNVFZPQXvMUdGVwTBCmbD",
  "key37": "4VJbRaeqgyP3GVENmNyWP5x3f2z5corVjfH5Vev8jfe86ri54x7CpVP96263z5uJ653g28wQbJDan1VMLHatn4Ap",
  "key38": "51xuJphrCygtpAoZzmNTa2WzF4pPErYQKNyGkBWhRhd2T8EjahRT437aYq8WKoFTSnk6ztRXAVnwv7cDFZ1afqNC",
  "key39": "3my7QL4ensBsSaBa9FJUV9gzK3NV5KrQ4FNRTH2BpYpNFZQa3FL8k8GFMMpKARKWQ5Z7eBzucNJ2kgTJ8kXbEb3b",
  "key40": "2e9Kb7QFVHKipdm2u9eZ3z8EYPoDF6eftxysTcwoFzu3j4GUA7Wnwp1h9bj8wdB7ApCX1xvVUK2dhChh5CMMv7dQ",
  "key41": "1228ykzPVZtdsU6Voxf2gAfZuRw1LJpvDA4KGqSb3NNmKYYFcU52PJVgcwH3JETQ2dxns99ZMdTPd37sBhCpe5of",
  "key42": "4BBnqqAyr5EosrXtbLkEcyVrMDFuxs1jHtcaub4EH79e3kwDCJ7AS6z8JVo1FfkLcqG3spUFbTAUhMeLFfH57qTD",
  "key43": "2NynLREW3H3LDo4DFSBjoXeDZiHX6FRykeEzFMHVqnsKTLh83aPdSSpwo1UipvV62YZpRL7gfTwK4LjrNMxRNoEp",
  "key44": "2C9XfojYTqxD4FPGuDwrJs1pvV8SBPzSFmcacKsQ1Bz8eMZPmsxc4eFgjukmHknuADcnSZddRFjCuUfs4qAyiSyv",
  "key45": "57VjEXc3U5RJHdUN8cMJu8PBDa21ffaS2D6SjwQZMkdkFijW1CyQty5GBV8n1kyB8hSocJ2mQpp4xRtSwxWW3hFq",
  "key46": "3ag1jRLX2Rz9Wq8EZqfPuE1c9uMxKPDNpRRju3proohWruqLD3kcumBuYAf49nC3UdeDdXeTJ2koN8xxdtCxXDE",
  "key47": "4wKva6AK6Liw7vcN3XQRbvu8UyKTFXQAL63dtzDv1Jx1FNw85hp8s7myZD9fwTLy1RLwmDUqFEf6nwpexg7vnMaB",
  "key48": "5FFZTkUnLQo931wu23Z21udRpKLpY8u4WyzJJfocE7CJWpospz31mCtGuXWbjj9hSdzMcEae5viKd9Zp5byQb4eX"
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
