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
    "4UBxGrCoRKQK5GMpsbmrdL3rcjFw5MPxvrffKJLzKT9asoyR9Tgs7Yv9KGbg72NaPqX66XyWMKNqMxpXizA2Qjx9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tHpBzdhPgmxaoJDX923wg9emSvsH7oYik4ouLZEZ2oQCA2mE1MveSbkWSbypLEqTi31M62yra91mwWQegBXQAmQ",
  "key1": "55C1CteXMDT3bb4txoMu3fPbSg5QGiJQn6kf29zhy5nDUUbsVPhPVWLHRLjam8M1DbGByHpDig2SB78RV7j2i9mv",
  "key2": "4NYvX9A4uxnXxVDgkMfgLx6Vp7UKewW9qmDkfe5gxvaB88z4ywRLhyb7c3VWuzHs1ahq6kzjMtt6niAjfM3fZcRC",
  "key3": "4cRnGuhykuE4tFaRKmTYsf1dfDC2puQKdGqTMniQAsFjscHRes8ZNHFVDDWtF7ZKbtUCxSkVxAMUE1pFMLmXFcsk",
  "key4": "3k74PE2MWTpeK7SAY9LBPwuPMM8dru6CT2U6q8FSfTS4RL4e1xwCev5u9WRGxofPzxvGT54h25q8JPH6Nk6fCGG",
  "key5": "3GiTPjGtkoYCDYhMp43xHpijEU3FwuvBX1DFeLRwDptdc6nkDNzn3Ar3rDw1mzjz8y85VRmdGqY48aCkThJfvEJa",
  "key6": "61W3LcVTb6NPAphdCbvqsZGbgd9uSatWTL6Q9eaNoSs1pWWPnUNoFo5Ky6PyruSTVUzuc41ioenQ8tkWnH4sjA63",
  "key7": "2361WbNCj4LqVcCSVGBLdYd1mRFomLyDDdaefS46s5pWhU5hkuqVwrqV7VMHp8XEsMuEH1CQUefKEFePAqHmkLur",
  "key8": "2o8gapNLAoRqzMnbitjna66YWAyeQ3PEEU7D3q47yNpnZRHR2dgD4P8BpXUcqU2epD27UNy1UQG6sTF5DCGnczYY",
  "key9": "516Wq7Qt8BU1SCbXgUW9xHtanonZdzJQHABvMVG917uu3ggtSim57QSUr4jr5ebGhwiNMFJNLCQtB6cVbFjSDuYE",
  "key10": "5YDAMvnQ83uZxMSPcu8NTGzcnE2WnUF7B8P4DZ5b8GoCtXhYWYoH3ivKewNJU5mxz57hcKRQzsa1fnNhY3xxnGiy",
  "key11": "4sxLYSHqb9CzvNRuG6avLt8heDLShNBG8qtYn8PXjVpVbrfmN1LzLYvZVCptBnZWnz2enr1CxaxVmDyoAByNijqP",
  "key12": "zphq3SSAfGYFS2FAi7YCpDtPYeEsi7iFNeaNevCtGxghocaLx4cagvAPnBnhfrwSwgi5fDFfqgy7szpQCkVzXPT",
  "key13": "4zerwsA4VykWJ9zunWWtDS9iyXusc5AaK4DHCYncSaDNxSFCdpGTpJVZ6msvgwfaoxoGYombGXvJc1WQ7F6Rs8Y6",
  "key14": "48FGGpvEqis2M6xWnFG7aXLr5zc7kyh869ynynrSm7HiQzKVoMgCT7RHSSny8pDajwbbWpYaUSiHKATeuuxRqUCJ",
  "key15": "4xQVbtjvjQw5jEgkR5GkAgQfP4tvJgY9HpCr2XjcU3gTHYkxFiCu5uNgkY88KaSFHMoi57djw1KWTiC2PVbRLMg1",
  "key16": "5E9pbnNxk4wi4U5jYBZ4C823mqqZNmZQbrHjr9aQjHefpGUuEAjeVYttviF8pLMDPAHBz4HzVFEzEzMFHAdvFc6p",
  "key17": "eVt3xS3bxfymreUSUDP1qwcWyAV1YpzTfLrccn47aVkCUi3UVm5qeKaE9zdAXFDdAeg31tjWRL7UktS6fQqHkWs",
  "key18": "HwHi783Pys74o2Ss6TmCQyuGwPrapzpoN1RPzfexMxArWydHsFFxnfmgwYofTmEbZJeftYQoePNCtSvu1rycBZB",
  "key19": "32iTcU6wSFP1R3CWdShRwxkYTnp7y11rJjQs545MLXoQJX1HPQNrbbbwn1L98y68P5YPv9HLtSVE7tHuKnxBSbBG",
  "key20": "jnXHWvjSyqdZMeG4SFHtwKzmrrtZ9oMjF5q1kycnYw8oDBBQF74mtzb4ojghv2rL2fqL3dk7TbKC6KgnFhPyWQv",
  "key21": "4zLinYFYHBx8Wk8kghP56QWNZ73LNeRhzDwGtZoVhQPq82GyoXYbb2ngEmfUso8KwDkbzHwYKcCpAGTvJwU16Etn",
  "key22": "3a8b8j9jJAZ7Znjqhxq3vUwB6bPfzLzMBkkox1bUqyFMLQq9uwqvoe8BgcoLqdEvhoVEZYKU7uh5VSGPY2UUw2JZ",
  "key23": "31UuVSZuzrgciosmvQPepDChgBchmQaJQsw4FNmJxLnwMxoCR962AmXtducbGcnD49UZyFr5yxZA1n9wgshohkXo",
  "key24": "3z4ArbDBGo4eQQK7pz4bpUR8ykeq48jXXD9ff8j2sqd5tMHBCdU8YivFhENv9Z8pZhpT3mfMAjXk3CeqCyoxi2qZ",
  "key25": "2Gr4tXY7pkNmQRtcsb7MQdV5fYHxuJBGRDkPeipdjQewhRj9HVBUMn61DkgFQNojsJS9LFYBdPPTr6qNrxFAmuDE",
  "key26": "3qfAf7u5ciYeK1g8NpEFGqbvW2HcEHHGP52P12fb1VM4DFggDJ2XwhLHNgfZQduFDaYhofkuEZjYFgNH44v3pdiW",
  "key27": "2B92YQEby3jDzaKDm9VWde4jaWjA6rNhDQUUaN4j1G9w3biDzkotcsn62fYkLpG9Hj5uSSP5GTVbXwkHG8Sj9XeD",
  "key28": "5xnURhry9DNcQrGFisJtQqb7iW4ucidX5RZGtVSQdgPXjjXhfTzVMXVbFUPkksuzxDXdCjgV8avBgFVXy9AT4yrU",
  "key29": "5FhThNLZD6A8mcPD5nNZKG7EAGErzwreSsXp8n2GPysW7euD8vwRqJN5tXqwfT7vGoJx3DYZe3wwfByHvUsAfoK6",
  "key30": "3M7iKBy7a2SCDytXNaR6RR9SggKBxd38CDSe8txv5wL1YnBKy1SLkz35ZbUJzKMLEG35cxcifpUyDaReptS5sCDp",
  "key31": "4U4YotjiHca3WmKLiVyB3Qu2V5SUD5eHHy8rmJV2ijyn87NgHBcPEanLb7w7o1gRr6nnPmxtVnTfcgw3vCD7sdtS",
  "key32": "LD8BqmMLeoboYZkBxLatHSMaAMCFpsxW74GkpyecEQmFaf98AHtDfyuNWSzzaZR5smSs3dZvs4JFheeXF9YfZyy",
  "key33": "3iSLWDm8mmUWqpgKUfpFxtZxxWyJc5hFmpm1Tp1wkkZvEyWZYevQr45C2bMN2tRjGEbhLPTeZKa7wXgxjZ7ypMfM",
  "key34": "3SuWzen3QgAA6aF68zMRLJpYzyRM7iPvCnjiQ57cfqFACpoBv8FDNH7Ve75fDT1772CPmRwQ6qfxE3AmD6eNG61B",
  "key35": "539rB56HaFtMjuVBx4LgmdajXZcCkCYnyseaUHMbq8nGGxRFM1UjbgB3anMP1hRjMqfbKYyGwhYNAeMG6GLdNcRA",
  "key36": "4Ea7CvXGLZuYEQp5uXWJKMWm6385nzPKn3VRM5HHUGuzwuHofCMtBYCkqb21PDJzVTXWe9Au8Ji8K3Qo3jNGbWgT",
  "key37": "39S9hwr1iyavEE16oa3nrJ3SmUmLzc283MtFoB458ghzjzc3NNfismYC6i43WcsraXpvWcbRHCmZMMnUGtqDXcXP",
  "key38": "57JbtKANEebE9CCuenwyqi1C8Gd9an21VQoSSvDimWnNAVsjRrwKnq6RKbWwbcdam5FwR5SQmgnbtK6ocYhViwQh",
  "key39": "4E8htU2m4tfvWXD7LoZNEyogJnQCrWF62T3EUgaRJPCMFeZ44PQDm5rSfCBvhvj1mv1S9Tw2UMgNSTrGeEa4ppD9",
  "key40": "35Hhd6mzGmXXLxDh1cMLWPSLaMGS4rRD63ijk5sz29Td8GE7Y35qpEMG4eLoWsCpxxfV87mg6cSm2UFwo6aF8KaK",
  "key41": "5PCvtftioMgmiZz5HGJsZzLmWCEzRgwgkMbwdgi4RwgegsoWDzuZx6H2T8e6gBQpE78yGRaegEDLst4CABYPE3Rm",
  "key42": "3m584P1fRMXe65BLyMnGvhgEgLbnKFvZ5snRducymtRsyC2Cuh8xnrVSoPUKFWvSyZzSBo7LUFALscoVQopBo2Yd",
  "key43": "37L7QthKKxieFz5fXmxzoSenncaaMxeE8wajsmu5JnL2AMaghW1APdEPDxNtzsFmv8SQsdYXVVZ7Tmkh9DGecUaj",
  "key44": "64GppM5wMLBeoqoC6SmtDqZknpZgDuaKyFSaLZmQLZwc3zw4XFqMjrCuspnMJNwjAczMs4rEp8A83xaDYtVbNSvN",
  "key45": "KijF1LBxdfnK3WeZ9aVxscupNj33bdqQrb47maDmfx56wP44CHGahQEBax8SbdPRTjqp2668qpaZcYUkekU6jD3",
  "key46": "2WN3uPydy7Yv8Lbo28NzwKwErqEJ6Ea3SHndpkqEmuWKFTqBdiAvTXY7AdRbXKu2QuSDtV6t2w29NQGYFjPFuhiR",
  "key47": "HxR63N3z9udX8UAAAtQX2neexuvRfJ5JdcGfiytRefQbgDi97R18CWhTeqQEWLK4cZBQrLDQcGkUtnSvtXdTyAG",
  "key48": "2K6VWWBe8aDgbQaeUYu8Yeib6rJD8kXYjYddwUq3hjgFpoYxT3EvWjZfXzmETZXoyKwLgkvtYq5J8tzZYEws8sMw",
  "key49": "56w14YGDRLZB91CMp5qMaCT1JsG8SUuB64Zui38VwNugDSCww7hhTxLnYeGH2XxNLEfLVHPALJcB5MLN96RTq5MH"
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
