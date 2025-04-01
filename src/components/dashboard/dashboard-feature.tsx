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
    "SkR85NYKZCRuFxek6dVcHmmF8sa9ttauh7SwsiEnXG5ZTsXbozQrkHaGwcwRfMMc3zp9XkCXuRG9N3fCjnSnQX9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2a9oX9GqcnC62E6tZKDFu88uSvWVcSjvAg2EGU3TRnXg5dU1nRRkPZbThXgzwdGpJjRUJ9GCPgVHqMDhSvTKTWLC",
  "key1": "3SkLLyqqJk8iC6SEUWGEB8V8N8Etm2H6ZU7R3HepQhusGT3ia2c21HKyS2rZzqishhi3CFTWr8ctVGiraPwwEefU",
  "key2": "3FbPBEKxbST66P8pMmdxv2vp1BkeuQcnwaQArX3CuP6WicaFbeVbHH6dz82oSDUPqyWdTt9CPf9q8kb6APzND2YZ",
  "key3": "594NHsqKgusC3US9JUsRgE17EfKzd62CFXnL4UkcTsvRnP2CZ8Uwum1tFL2TX2m8zm2tAcH1WTAib8WXREWHDaUf",
  "key4": "4MwJwRbF66Je4n3FaRKW1oVbRTBzr11QPauTfD8H8cM5oXMTEUPseq5ALMoNq55nwGiV1RMwBA8UGLJkE4PXEGeT",
  "key5": "3AVpSdkQp7pvVRcesDUxUyahqvd3Wuob1wSe2fAXqx6abtyCGDrByJGseonKKZsPAJbLcGbqiDPM7WLx2rLRfdFg",
  "key6": "UJktK1ep96BFTRgrHwf2tN7taxFky1w78AzZCCVatG3ZNup57owxfv3w2DTWkow5syJ4Dt8kqjE2ZquG192bxUh",
  "key7": "2iXwbRxJ1zTVmPs56jSAQeoyWwTCCkC7vj1HbchVJCVCSXWxv7ptnh86H9cbqULJCMvcAdLpzQNcy5FnBrtEYso4",
  "key8": "4RBHoqprZWpYZ2GHNwRELXy8AmF8MoHhfwUQNoaCUgT3xTrinyXnbYZeSgkvsvtQ8mwbry3YL5VdjxprtradCib6",
  "key9": "3bwVHV1xzvG9csJwTu8e8KbimmPkwqViCAEdVetMcaiv72iefhCmGYkNfoCQzd4WCKfa7ke2Zis3hLKFuXV4tKdZ",
  "key10": "5rwosn51bUheWQ7oEXTzyUNYCZqdNC3hgEZ1MQECz2hviL7ML6d2L8Q4NXk3f9GfVqXYBSsAh9jBEbTZLLXxqNvG",
  "key11": "482q18JVSMxdQHd2chD8u8sVgAbvh7QbkbkCBn185Fq3VxBy4E9iFETqKkduSazUettzdyqkedqEB8x7va32FULt",
  "key12": "2LurhTLAGvzraeMjpAQjSCmXLTB8Qu8LDySJg8BrR7gYJHsHQz6gppKhmg2Da7jcyBhChrN6z4E8oY7Juz6hUzBT",
  "key13": "5iwfNwkbpv4Lbwn8bUuGwu9AW4MRBL4ZgE2BUZXcRuKqzdvAKD6uivmNKYvFTNQhwURdEyvsTF2mkXPfvteiJEPY",
  "key14": "4ig3eve6PCP8ZNGyAURG78oCc8A4W8dMSxxaPHNsECXqQzgWwskKGB5tuBjk2Gv5PJp6GY3sNALbyFRHDJm8dxWd",
  "key15": "3k6ej73Wn9RUt2VHW2kRzKJXwvgSegrRA3tG5ach3i3fAbTkUZcCbsvPcMcPuKwm1REVL6PKZJrokWaHaET8t5fs",
  "key16": "5ohqyZza4tKk9CKtHRaLBDm1CyKetFns7LxPJrqF7dFf6pU9hvnVqMXJNR6dCZ1tjQodYS9hm3LYnVi7dXJBeq9B",
  "key17": "5jmRAVzc9VKZcGQKa5hB9raNdMGiBxEpUv885szyhBpBqWVF7doJcpec8aVeUvbhZBg6z6y7ZTHHAaDgqTrFiY6e",
  "key18": "4vePac4fRcLtQSJDGYWwWUufM7VMMURNGmgVF3oKXfpi9bK8Uk8d4Kwx23Re5Wqvfhu7gzRQ1dWZou3UKoQMhC6c",
  "key19": "4z9DG7H7wMYNYfBAsj8MJYUyj2XpcLHRZ2Lhupe33d4A6b1rEW4ev9Zzt5gArPGjUmJ1HCxZVne4nZkgp8aEa1Ar",
  "key20": "2zTQqoio7kGWeSH8fJKZXdP7kNpqgsU7tLmsa6Vc69QsLcQECjR6pDonMNsiWiNonv1o5hkyc4YXCsD77Wiq462t",
  "key21": "321z7tyq6TGb9nxb3RorgPPri88vSWqkXtfcomuoNn37QZDgqvKaDscVWx2fqEyP4UoBnwhe3oqjGioyjmRZ4RPn",
  "key22": "2TQzoGSWwwNaxHPY2uypU2vLAvQVwLyjQra4J6Jj2hqgQxiQw2ogpPLYy36QAm9WiTnBD5xqbaeCQkYMgJATbDs8",
  "key23": "243YsDiWFyYZfh4rX5KFuLzuLs6j3vAYCe8M1TppcXQX2p5WgdbvMPrtSWAGeTkuqe3ZMnnai8CfVqy3zbXHk1Kz",
  "key24": "26uUKv7uUpmF8uUPHmjnbfGCmTzUpB7oGg1BFwZuPoi8AMczYAZet1vKLXc4yeBSUFmcfX5Q8VBqthPQJUmLsFRi",
  "key25": "2t8WMDtVPXzFaadJJtUgBhdkWAqW3PWfxpCAV3AeJ7sKVD68ZmQ5nXsYYjVCgRtz4W3cE96j3Kd57zkUJxGk5beD",
  "key26": "5RpX3ecX27VzpGhTJ8jV1NXR9Q3sCfWC3e3kVtk2QsgqEPFSFArftP1QoMooEy7rtMKncSzuPVKRHxvefhtQR3Bm",
  "key27": "3oQMoGB9ZEtLGG8bsSJBxwgyYRgsueMxUrJkLSgcxK68imNMTkgnrYfDxuSdFRNNEAMD3ByQ1tUmVZnLo6ZnWGUk",
  "key28": "2y54DhgjgPPxiMs43t26v6h9FzPFBJVdPJsQVqKvN8sWSG6JnHSsyYDz5hfTTjopU98Gj5WaytLnrUxPrFmSWqJ5",
  "key29": "3ddcZrB4RJ6YjPmGGLJAeWD9VuCgNGJ7QEQjYf8WD9hZdW5WjWuzFP7xEcm3grAgKTq9SfrawtUhFjQA3ZuoDPdg",
  "key30": "3qT9w2ZHoDihz1Bj23gzPKLwhatkJMFJ3ngwurmh8cs6hewauQuRiAPfWbJPa6k3PhKG3caRZ5cg4KvXvzgyau7u",
  "key31": "3RJqzR2UtDTMC28khSpUDppU6MURAMguq7Wp7MsekBnjWe791Movg7zJFiYbT9kasvR4Jd4jnjQY7nkdSB6kk4bU",
  "key32": "474eLCqM4ZpCRVJwLCAWVSYHSzffwix6CbyHLRccTxzqwQhPZur6fFG1EpgD3ophV1rHH6bk3cs4LRwmYx8xxrEi",
  "key33": "T8i1aHXnomPdquCcnucPAAe3abwqjJuKqBBS6QXY45FFXMc1Hyi69BnWoSCbCc5oD35AyT3rcCVnkkzFTixTrfZ",
  "key34": "3quisSLbkdrNqBKd2zj9A8QbRhHAKydf8jFf1uy6wG3k1PFPndQbsLQVMWVmJahxdqxMvsNLx92Cuce5myyy28vV",
  "key35": "39NaZd8PuG2RtARswBkGUjR1Tyut7xjyf3Zrt34VZV3xz5xocytxFGRCGY9CF47FPH53QvVf1EYD2DTrYKwj59KL",
  "key36": "4PzTMdyRxcxmQxnvmM5fk8RqfniU6Soru2sPmHYj569zA6sWQupTkbHM2uygNRuNm7bnEaWdwEFHVRjCFnz9yTSQ",
  "key37": "5crqYD8eQh8nJZZYeo93YjpdMs2DyxQRm4tMASn7PQKziP2HpQVfQY9fmg8oEkCGiAJsP7eQy6GxJPS841Y7SriF",
  "key38": "2P7FAM3NZH4HAxxaBdgL27PLPgCtNbQVrm3cpUUdfd2sh6o3o62mF16U7PocvQDGJFpsf51Ep5uoGWiUGdvgmt9t",
  "key39": "3TfuZe4ZZujj6jYVMiWaLwGBgcEytKgnbTQaXNFpsss4gNUJzviPg94cJxWDMZtJZCgEDD2zPk7GisZgzSYrhHjc",
  "key40": "q4z56VJ7DyWczSe11rjHGoQHknrzZdHSPyn8xKeuGyXCUe1wkSujHuWKuEmj6ZiozWiJV4U9J6jisSEmwbhhjnz",
  "key41": "5YU8cNrH1NiBB8V8gWYcfNSLeAAwuuoNpqwW28dXGCvhhDAx28kfvUoupbYquEtegFejVQT3jxZmkLCJ6Cyd5igp",
  "key42": "2NMo9UL9JsZapfYLkKtNLi9nqcF5Lb7d8eYGrsQAZCUGZMTFZ5DC71G3E9Us8zuK6YU2e8StyMtuThe8rEL8Fp1X",
  "key43": "4Rxh2BkHM8eQmKSq7xvhmBEUvpXaTtDJxsYeAYTpti4j4MpGRCPbcgXkFscaA33nRyib3dzccJZ87Qtw6F2kwfnM",
  "key44": "393TevNfY19CLtvWKSHaawCtgpvyu47VwSQ5jvY6zCrTsYE28RsnMXAF2mVXK7tMMtvp2N7gE2tjuSvFTUvs4WDp",
  "key45": "364ZiVyZxiZy1bDd4sLz4FudUwWLBygp6NUt6nKVPSGv9rewYSV57z5cKZHCgZGwX2zjWoCApk9J1jrWjGzHtRZE",
  "key46": "kaeTnBhxco4bffzPBHnqpyNz3L3kqXU8iTHkwZGzjSgDUkP7e1Kc5KWdUheG7HLzvT3JtZk6sJUWX66B74EF1Eg"
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
