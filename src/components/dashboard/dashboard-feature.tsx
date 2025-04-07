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
    "2zgeSyCMnDLd8zLRJAsCvzKXcbxeYDV8iBAUTiCAQ1gD2Hf2FYtyrDUm2jzckvYxeET39YAgrnkStjZ7Q3VM9oBP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "citGMTZ6sDwg14UuQ4pLdvksnYEmyTsMjwUzR1ocGujjxkyFbRPSiXLU9Hg9DJBH1WywUdTi6hQuDke1HfWUjsc",
  "key1": "m9aWg8zcDSkXy1BZjp9F2e3Ga6xnWi6jS4TewuxHFC4aW1BTtfKiSRNmsTLd8QcohGZu1HShrb1qX8NA91qR571",
  "key2": "5W2FWJnyR3Esrn4C6Azsjsvt6CrMiVBE1fbzupjptk8arhU3Yjtnacca7GZFgPfE91nif5XNixQazPr5fDjQfqJR",
  "key3": "5Yu8eUnnVrgLygxiZZScxoZ2HUvqLARneYgY9F74mpPibFxbga7oGioA533JSpm8Y24ispCYqC63JFknGppjnWsB",
  "key4": "T3sG7ifdsXgZpABubiKNPThCNkSa1BdBL8ud5wW6gmjWWM9oXj616Zof44jr1vim3WN4miaki7HNLY4d3YUB8ve",
  "key5": "57pSYpQCf5pbVqB3fXzYxqBkQqmPX8fiXyXHqbJ97YCoCgw5FhwNaQ5FBdXCADw4xsZqaxWWtP67ZuytDn4qyWkm",
  "key6": "5fT8SWZK12Jus2RxLiJwFzYDQhRMBzYFUxWfTpXD55XXcbs5iHh6E2d6f1noeASHwh36SJWhxfqFppC5BwZuhEA7",
  "key7": "614MVSkTfJPDreE3JXyJtfR1AGWoLUq1PjeQ2A792EDxZp9pVhV6EM6zueD2DJvPPFnVvN26d67kTGvwdr1FDdbo",
  "key8": "2s6v8oy21yP8V1tv7ZsAB9nDwYQoHoEad7hCydP54vC2rHufffejnd5KNfgjHrG7MmiQVNHHNziJ9GCPeP53BTVy",
  "key9": "xmfFDqgSbVqfyRd22F16eKFoL3VDuxAiZHiuxT1JkRGAWiB1Uek4GQyuDtQG3v8pKDbCbngBGmFjU45sCMeMmcm",
  "key10": "24QWzSceCzBNk2AXE6TsnY12QaaHt5NTEgBSB2EEFeLwZiFAPExyGzHQT2m1kFqGsoonkPPS8h6W1gBCXGTjM4mL",
  "key11": "4cG45s4RRE5cqB1pDFdxrS9r3xeEEgWtPtm17bWjCaL5pAgVNKqakYDbcbh8XZpBg5i2uzTeYP6qfxb6nzxYLASL",
  "key12": "5G2CDQnym4EzqUvyavcFDfcTBjTKEcLugn74kBtfzvfE7gi42VwJNj7xz4GJiL2A27nMf7CgHi6dyc53rNRGBriH",
  "key13": "3MEc3VL5gE8qWRbMxWotCVHotopnZtNVBQCMoakFxjSbF3WwsRwP3FEDXxVvYHtCTYhqVwxd37i8ux3NoXeJ6c4z",
  "key14": "379Sn22mvwBqrqcfp4pFb9hYbCiTddh7jTh1BAaPkXDK7kaBN1yzzpWY8ZFFkGnh4vaVumzFQjqkkPh19hWnDaEt",
  "key15": "5pKgdMGNUTjSZewczFDAGQkpNWJJ7MHRAqb6nGe7PeDQgwstyM3QTfFT4u4CGCfmRwwmhRhwaptn4WUvbdZ1VTgo",
  "key16": "4JykfEwUnHnWSG3gBtmFLtpTh1TJcevyiec6eaNXyHRszaNpUcxVtAExBo9yS1K1MkmvsYvApE9Qqujqe7LV6yyC",
  "key17": "4Xow3z9uvkyMPhVyu9ipVGCMMD69DEiQGAg66gwWo7vm4troasnd8Md8ebYFaKt9oAMZyC9qFz6BZ7ABJfjZYGD9",
  "key18": "4BWGAS1GuJR24PZbaJ1gmSL5DCa14ecyFRqSMCwJd1eoi5yW82DnDhRzDr46AGph5FEYPDSoXWceWbTF9UdLC4eK",
  "key19": "yxUv9An5pBXGgW6oTo9X8Ha273jYWKSwrjywusZw1THpURRTopAv3NSEojdraCBybQFrwnMFVrsahpmW9m7EYfM",
  "key20": "5jKVDnJXR37rbddeA1Hny87sVc6MumaUbQ99zfHVyAgXUAtyoF1C2ZbwixtPF8wda2rpdWDCrYdGwowtUHayonQf",
  "key21": "2jysggsr4kQVZFYU9yvF7kJJrmLmzesLpriLczHw5nWVCz3XdsiJq9rxa6hgw1Yw3eNH3tdrnDENFYcPgz5avLVs",
  "key22": "2sXWnMQ9WHfkaW8HqjzCh2Rcy5cX1yQCSs1KWcXqaCgbvBVX4RMryw2NShnpaA2zATZmN3gstRa7PpomB2ncWkSy",
  "key23": "25NFS71nYTidHeMzzrwtKCiXmnKeqo3n174opTFSBHQBw2tTgqirHJaErQwYfUK93rQKr5eXL5buGrDWngrgGjvF",
  "key24": "3wf5hSbvLc89wdG23XozwdoxPSg8DHKkhWBKhTm8Va6jszXwaYTgY6GLgbrkgoxjVEEtLSwLcPgLBrhauvUbwitD",
  "key25": "32avU8PuFzM3ahoX5WpsN96QdpMvwws4ErJAaeRGyDNn7eAEd3GQwiiJE8sSLxu1s7W7pBgryBQSJU8gBsat5L3T",
  "key26": "2fPjF7Rxz8w3F1megasAjopsP8CsT6Yk3u4k3Y3xLk6L8JA8t3rkCSXSpLX3kV7C8ewM2rRnGog3t1WcEUyVnnWy",
  "key27": "39Hc7WAQ1cAr46PR6Z5kYVmM5zJ8gr2XoHMPRGdmRYsQPg2zJQa3dAGHyXkHZP3aSqo7Qn4hUgHydzfEiuCr5RMM",
  "key28": "3fTDikGi5UAH1UJ8DhS3kbM1STFioZV3uhCmRXPhogJdDoz2KgscntsLVqy6Rmrwy25DoTtWXH2vF5B8V8HjivjB",
  "key29": "2txTtuusFw3GzPtQ7EJ1Z7PsHnv7qKwk9hsppxBQY756t55rN7nuRP39sLEhoYwZEDi1S26gvTeLkL297LfrR3eJ",
  "key30": "2i9Cb5HssqPHu8RgK2Y914nY2B1teBER2yhiPrfhdPTvzGeaEkHp8fdoDjdY6gZpAB2ffTzG9xFETAoREt9jKd7K",
  "key31": "pkRcz89cE9YzBRvntGVdqNdhsQcR28y2ZmRwjLsbav7D7335bGq8YJawQbbzqxR1UudvHKJjwoedbPA6fWJVcv9",
  "key32": "3zbxYtDztfBqMJQugaUWNM78W9vbrXxXx8sMXC7ZjQt1cyd4fZDAHmpqWQeaZNkUsYvvXCT2FE4WTPyaWa5PHn46",
  "key33": "2iJ9zGnku8k5rXzLfUy1MMzbWK8SSAQ17H58iZALn1LhzvV8JpYQXPTTFtMqzaroNb7r6M5jSgPfu3bmYcky49Gx",
  "key34": "2KCRzBAUU3HfA2S35EYwLN3NTw5dnNoWCjJJ4uU42KZXuxBWKY6navJ2D443U9g7dtc22RmpjXxBD1vbVpCaWwyn",
  "key35": "2spEhWW7vrz6CEGBnRKRB1TFGTLU5WcrSnFbUp7V3GgBRW1WE2AAocbt2sK632XNFq8UYjVJQ9bLoXKnEz2CnFyf",
  "key36": "5EpueN6V7LKHqs37yWfa9xa8XrfEXvUBiRuMnpjy3TYJjZEAbaecQEpjDDqXt9HwCnCyKpZRZHgucUgvG5S8L6eu",
  "key37": "4FEfLApef82fCy2rKEvynguLNR3M6RgaJe41WfRkeVP7iK8zJZA8hYrHdvorgLL1cZWceBRTKiU4aCRXzn3s1E1P",
  "key38": "3o8UqJK8TBSavVVXwz2Ap6hFhfTqVu68h7NhnJfPmEhrRrFNdb7o6P6cQUSMBnh2UqLxwrnHht2wf8vtmUXA7zn7",
  "key39": "Lo7JkbYJ2rDBHiDtFo9hVsqenq1neurpgKxwgH2pvmwp2QXijDSG9MQpjfc3DnxKcH9GfBr84SiqrYfA23DPLbA",
  "key40": "34b7c47pBRaQ8SfatohMuA2M8gEozxfvcd1h7UNGUZ8sjwrYM1oTTsm4h4JQZiqJxLzqmBburuTuzNnvnyekNJT8",
  "key41": "5NQHfw4VU64VsU4Sh3RVRW3p4o4MhKahdENrGBcFQ7947ogi38EqJinXHqrxEtCiwDwGCS7iyfemFMFdY2NnnYF7",
  "key42": "2q38RN1bqeEE9pt3FMsznneExdXPYAcSuaRgv5HBWzvo3vfrbugjRpHA285vURCiZLWvh7eBCmorHZgn15nU72rd",
  "key43": "4J3bAXczjdGENhhz6YqjPt7sNFa1a1fy6JhMfmxFyy1vyDK3MZ6JVQEmh8qF8U1y3FyHf8TqXqHG9kiRz1LbzBFT",
  "key44": "61N2Gvh4nym41yAcrRLUwonCRZbgEAsyCAwJ2dMXmmFn4bGx163mwoC9pNGaKk59KiXtvLQ6DC5CQD8R918EcPoy",
  "key45": "4N6ngPzaF5jy2ZsNwQKSy2HRG5ZzEBQGmzWC8ik28u4Lt4LfeFHf9QCUCaGoWh4r2zu3Qsgt9iZQjTZX2jK7H3Wy",
  "key46": "RPLVQnP2h4oAVjy7uEneUzfHmnz49oZSNp1vma8ZGZqiK8zdz5j9dCXotiUELJeqLwD133s9neq3aTb38bLs2ej",
  "key47": "7mntHremmAenTewqaHmFo4kFXuXcDtviuFQsgTBxU9jdeQfi57ZYZc6BTbkTyCqZnXj9vxiCGVS9Q9pJ5mxmpsC",
  "key48": "H4PShe23pbkCbmvq7gyt8K5cNoh4vN8cHwoP1kociyxVvQ4sLXbhMzhbaJpw1zEZos4TosL2RGzNL7LnrqFAb1b"
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
