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
    "5P1SFvidG6N9NtovcEGGg4XjRjoUAJLsfLiSrXZVpE9ekZ7uj9b8QaYb9hhuw1nW3Zked2CxzFr1yKpnmK1xqAB7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QgMpBtGm7MFpt6tnDaRGvpzg4j9iYgRTqSJ3xB9f2NiiBqiLtq12CNasYA1CFUPyFxFFpZuRfKCwFtm71qncqRy",
  "key1": "2HaZDnyeHzGntpKv7nrvRj2kL3d1Rfutka1xGJ81ZWkuXvs9vf9YqXRcaqjZNH771zHsc52BXWbSg4pz5dG5QmcG",
  "key2": "eNmJRSdqxTichjFVp8FdYHen59fmgPhNT2rJmwWVH9QxYstuc13YUVCZSZK1Kfe5pLpUv9o8YQz3FCCnNkzV7Kn",
  "key3": "hb4u77JGEtUvF1ot7V3ZPbMTbhjMqeEQpu2EMuLZdMRzdCeGAsqiUtbCpmJAkovnS7GnEAvVedQkNWhXv8JVjSU",
  "key4": "RZsX2zZpZQLxx1uFi1Duz9hNrAF3odFrjRZHyaYKJ5zaMi45t8seTCD23qgH6bb6npcZPb927gfF8rgmnr6fL6g",
  "key5": "2SPdosKiHXoR25CMkuLV8vhVK8FJ3g7HKhyfV8EyWQW6RmJgBuNxpKRTag8W8QewkU7X8NSfnTfgjmEjRGA4cDNu",
  "key6": "2wzxn4KWoMX9SWEXVUv9WhG9FyMqZzfWGm2Fsn1NoSDQJTSHGTbkouFAUXMwZvSGmLggUjSaGiAn83ipaUNy6mPW",
  "key7": "2haPSp8F2T5pSE9A91rGEvRVVgCv5K2PDHm6F37RdraDJnrVuYvTMs8uwmuRd5ySq41mjbu7E6rodwDGAkBCpwwo",
  "key8": "62EK3GSsu2NqCoe3CqWBEuVTFna1GLnpcQynphTt2p8TmTuEJLZZUYksng35AQrqPwSSvj6W9EaWKkGuGWCAVNzv",
  "key9": "3MUpEN364EbPW2jagek3SXMQgz8FTsf2gyv7LTECPH7N4xBGnE8kGZXFmWK6JwQwEmAtEWUkTjPVVC2cPDeF7FCA",
  "key10": "3C7sWwQpq2wkVHMBcY6rCemCdPS3MpeAcmQ9DBputBZYdGmuRkB26pCdPHXWwfVMBrwnpRaPHBfWsvWL8UK4j4VS",
  "key11": "5XTDktkPiYuXY7STHVrmvRbtE1jgXq1eN6VhhGCfvDHmpPEEoaBW5Jo7aytKshwLF5psNxCy7Ss5gvWPtE3GLLyV",
  "key12": "5FxaUwsfsMCHJ18BBUE933AGJhm6GTtYw5VP7sFKUMAPkiA9E7kpcNkDXz7RNDNBbaF5yMPSE7VvuJah7j3rKBkQ",
  "key13": "3pG8NMYWjwEgah6hutwmGiawd86A7e4G6edw2pPxCYwXzD3bHePByEnjC4NkCCLnYKzx9gEQNeQQdjL8witmsshh",
  "key14": "37Maj8wVpoDrykNJEmwUDSFdmeJtmrX3KHuf8eLJELQFg3jYms1Au5MHG13MPFqkPQ8zR8Qn1U9cMuBAcZ3Kre8L",
  "key15": "NJq3LPzu5mWMC3yEfirgKRZGmWy2zvy1PxGbAkyx2eiLewrjVtUq2BUcXqg88rg1EWQVfX9BU62jT71p98dnnJe",
  "key16": "G7iH1cPoNFWD1qaWptttDgtxq5nZkUs2q847ryfwrZ6HwUU4XQFmhmJ7ULkR7SH9Lw17xgCNLrToP94HjJcny6b",
  "key17": "4HXyCVriiDTJCcrFWo5ZiATP7HSruoL7Z46sR21DJmQKoGT2c6GWe287RqJMmiJKvAmUNGFp6iu1rNnk5T4UNdEJ",
  "key18": "2PJRFS67YuN2Do3YL5CxQS2sFLYT7SLN4zcEPXAhVSdz3bScbYmqKNEqT9pcMYPCrscsbk8iirsfbHVXh6D8WQgG",
  "key19": "3QtxV1SPdxpT4YAGf25hTMCgEkyngaZP6AGisvR5DBpq3gKBh4XHWFuB2mqy9feBrWyPfMiP5aPGDwYd3TdjXbPh",
  "key20": "4EhZjLZvs8KXv86kv9E1Ppub7uW2pVwt8umNuBNcjLAP3tf7bmdK2otEJgsXuwH3bWspZqvyKpH7naqYnQ3RnF1G",
  "key21": "44DsQYSqajm5c9XyMzV9AheqMgkfEHvt5M9dYb85bUL8f1peB6Vj238mdPQaWoSyHabs9GRBU66Me4zZdkHhz98J",
  "key22": "5vpZjW6G7XUh6WJnzZEPZKEGVbG1eqeXV6trL3Tw416ctaGwTLLjYcTgCM9EEr4n9X6hCprdTogvjVb6D74GVCGz",
  "key23": "YaNK4zApSt94XRZdc4rqDxf9FwYp57QNx6coPraJxnsqTx4VoNDpk8DTHcTbcXHG5ymkCx2qoDrxbwTQuajGBCV",
  "key24": "G97BcZ5ZZPDB4YfWxf3RjVADErctpxPr2z5hvFKXHnjwo4cwsUNh1dSCKSCKDPqNPnnBWb983XcKWBHVYgPFVcJ",
  "key25": "2FWdHSV8NpgJWPxGFnJTQgt9k1mQnmQizUVUt6UtVH57BnRAcY8YL2VH4LRG7eXjBRm7Lx7XWLJj8sDkLSCNDY7Z",
  "key26": "27qXyXztXevHcedmUUcTRnAT8jC8koK6y2h1kVbLAqKZ3ewHiQgSrHgf5ZLPeiV9Eu2dqRNoNzipi2N7fAxcvivD",
  "key27": "yrJHUCEe9sqrwSzN1oY57w6iz25mTXgPYPUgkdG2qgxb5ddip2BTFKMSWTGDcK2wVoYgE8AKVCZb6YAqZABpGSE",
  "key28": "a5bA6iWgDXhevPfqBoLGeNwLvtCGmB1ekrhDF3Ym8e48vYVTHfMCL7f2Joib3fk9zQHRdJeH2gvShVNriteMj86",
  "key29": "3DpkF5adT7RTUMJV5zSDhp9KMLWq2jEiuTHSTsXcqLR4cNCaRag22HntbkDUsBLh46qAqFU2WJSJThKxACJaZ5WN",
  "key30": "5Pq3wxTwVcVFP1mXURZ8LJAgBdncDUqrAPxoULgXLLDXGdMEpecBtJsZsCczW97PcdnCGzvdBf9GgBCWoefbikDX",
  "key31": "2Y4xJAKrGCcaD37xpnKSt4kudPa2odz2as3b5S9P3FU2q6HCRy7MyBQvCjA8pnCKrKGQfV7GqaZtTjtUyCFxwMNi",
  "key32": "4DH2aBnc2uf6tJNoVQsJ91kVAaKMuzGj3iSxURFtBSXxUqBpnvLzyYhXEUsSC2hBBFqMzrAx7yoJaBQ8AqW2byv4",
  "key33": "2FacKhW3YjyhZQyaNhx4A6JjVM5sHtUH4szsUMFxuaB97Lf3ck7ipSJWktaCFzkutqeygy3AzpZ7tu71ArjEuN1u",
  "key34": "2yd7f9xHQXBDfjgsbnftysGmiuqdaesKgz6zAsxzdQoGUqMoggJQLMwRfSDEHr7vCXeqKYmbXA5NcYvH1q3zqFYs",
  "key35": "48YXx1hJ2WkHhKRiYzHsGfZJhJDVFi8WbWzzp3aj65N1L9wYphykwEmvgJTay4hWND3PUwSNoLnYEwV4Uv1cywdU",
  "key36": "3UjZXiZH15asKCf29JTsTo8u8qbZxMPYNVmmabu8T2sDPPBTJ5Me8U7eyfqtoEjF3RpfKG3DgcZGZmMj4y43kwaS",
  "key37": "3KQ2Lg2WWBjoyLKiMYGLRnnzWCBpV3daTiGrrM6pnTdv6RM5Cza2eMtuQtLgH14m6YNYdTxXXDBnA19k2m8Ca9Tu",
  "key38": "21p2Hr9dbhKd1Fp3B8v4JewzqwXFDCYoCQGqaBhgVT7dDMCzrXvGUBcA6siwyJyHjpwNpYubbUDKUiifGQzWQUGr",
  "key39": "5N4WRaeN6zgjbs4bo1CScz8m5YhMK3wi1xNoHL7grS9APdb27VFfHpSvmAD4pdgQBqxi1LM1ampkLNJHgJp9FNej",
  "key40": "efMf2zjRh3kXmAZ25PghiGY43NN3vsdMRHokVXB8AiZXP3tvf6xrrH8uFLozoaMHcdtYqsyHRr1dVHZ5XPJToSc",
  "key41": "KnwyNrtqyk8dwmunKrja425BYSyGCmf3EVp8fDEfi7gm7NmFmqhmzzcKXxFtCqN5DyCkoDBfRHKiB5i1CPu7VHm",
  "key42": "3BQBYKm1rX8meWL2DWS3tWiqFuwzsuPznDnNt8oSDdJWg5YmDnFjq6y7BdQQdx5S1U6WBPVvh6R66Sgu8ZMJV4kn",
  "key43": "3RwFE4iWebzF4KoJKQjbytLLqhVkSiDeoxAPWbb1Kkdcdw4LSVfdUcEJVCzFPjqGDPksuNduf9pPUh2SpptX8NK5",
  "key44": "2nQweEqwCZUomYwnxjbgqa8Z1WwGcHA1w7PxMnXjJdjTCrCYqshAFxktH2cCR3BnpGVmaHCBhons9GShtbzAVrFA",
  "key45": "t6mWcHNSRiDt14hm8RSgRWr8Y6sKVWpEqUXaTFwDXqwpUsWti1EbSB2SYrrDCv77KNfgN16hpKRWQS7HpqqKomX",
  "key46": "3pkGYgiZu7QkKySMfaQ5KrGbNkVtAdiRtWyQUs1Z6kH1qNi8AxsAhbk3a63zd3eNQ7wgZXebmSAjmVVo6smm1ttZ",
  "key47": "g8TgwbytFE3Nw3ebX2ze5XLavkbDtyu5gSi5Q1Lh8QAyLE33AcZNk3PirmbX7J1KbehdMWzDWFq5ABtKu56qymi"
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
