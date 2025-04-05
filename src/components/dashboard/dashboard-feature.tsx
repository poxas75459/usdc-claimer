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
    "48tfK87epe4CG1xoofa19gSdmyygy5pUgtUeY6SMmLkDuMGcmBxKL5B3Cjygdg955DXUPravjUJPLMqGQ9tNvmkV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cuAoabmToFVq1fM2GK8uaSf8QJUJ9yGDGt7b5GcChDJ94mSsTUgYUj18j19KAP3KckZD3kxsJWdgwrk1EeDNiRg",
  "key1": "2JnXpi2bLJ4Vnd9v1gqeKwoQaLeZoFmEbbNFFNmFrZ2F7AgzKdfiyhhB1ytoaGyeAYfQfCMc6sXHRhnNQtg1SH4J",
  "key2": "2fJwqvR3uPScGE9gFVvHn5ZfpPyoADFuMkRFWH74TJRPao7Y21Pm5sSss22giosKHRWSgGRo2Fw8g1wKbywFei78",
  "key3": "2DKHgE1Qnn2fHKTErc9or2SshrDxV1N6WW28tcLR19BuBWzSw4iRcMyGbpJdSDF1hePcRE8mtiWEKvtRuMzGnQQe",
  "key4": "45M4cZu4iMAxBsjwcV5ZmM9eredsGUoJzzxFCx1X1rS6cLeUnFaYCMGeXMs16A9jVQQrrZJhCyxgxZkkcwyBCDbq",
  "key5": "5sWLEKGx4K3HTE1VA1z8cuxh7aTyGvhsMJYXrkqzLLfT7MQwpDPygLDbhFx7z5wJiMBj4HsQ1QtoMV9oTwZh2EHt",
  "key6": "63hW7ngiyALotoyXE9eBaGHHXpLo6XnK8Uc2w7jjyH5teS9FYZQ9vFf8Sp4rTCLVvTv2T6E9Kf1Ja1wbxq6MDb7F",
  "key7": "28uP8tjA6nZn24LPwqAcznQJ3w9iKu8XXeDBGtLppGfBMkZmVKSYUmh8yetUvV5ugHB8Q9hAA7DQu7JUnWqaEoY7",
  "key8": "3KMDDMU6wdB5VcWKGZxNvVDxqvVGSRtHxpRN2jh8RYypqJHw42ttuGQ3PqRnDQx9sAGs2sFaM1bBEJ4NJaeXDqYe",
  "key9": "49kAZF5tmaEtzABJiygdeYT9s3ua98J64d76Br5epaXBvTwdGf9gLvKyXRcRdkY3broEKwvLy179iYoPtX2xHvYz",
  "key10": "5ZgVBCb79NU2swauVgnvsyDY5ucaSz9jha7LoPo9zSBf3ULuq4KgTYAHxXmGb1z3sxkkr4YF26JfzBwEtzs3Qtrx",
  "key11": "5f3yykLSkACcSZ8AtD3B2dMk2YBa3vjRxkWdsScz6SCnmcgj2zvwuM6zG4t533sG5HpPFw1ePUoCDwVWWwrKX4NZ",
  "key12": "5KLerzdmpH4gLuLAEjjJCZ3iE1RXXx1azNQSo9FoVnj3TdcbwNZLLKaXTNHt3pDRu2rp8GHnUHae6Aycg84tWDvp",
  "key13": "s8CNkJawtrdcJSQvPZ7v4sPaqv2RRWTfBaTpiKWvviJSBh6bL1yff6JZSnjvk1wjV3eqVqQJp66FUYS7rRzqERs",
  "key14": "gUKZMWz8AVrSqoyVpwLXWbMbNNHPp7EJeXSAefxJ1zaEASVYbCu68QCyUzwjbgXCmPAAU8ZqSbocpehVvmCsKWU",
  "key15": "2QMLjRcZzsyeNPQM5KkztMsFAAmB8zBBiHamh7ZJCUT6tmgozHJiXprV358e8NEJVg1BpLJtguJhMPM7Nae8mhzd",
  "key16": "2RVcBeTA3uxaEHxT8zLuhH86RrDQrTaR9njJXwErHfXAyGSfRBeNiEuEV68Ca529nDpyvNedXDHjJV9Z2Rc3eF1s",
  "key17": "2Ht6ojcsRPMEZ7TWS52mB41YLZGCsTvY4zYSbcdjpMM3w7Bqof3UzC3bFrrctBwNAcSgs6A2aSKpbuo7BKbPiFWa",
  "key18": "5K1QAAF99qk8qsEQdHwxZ8b6WjCSexo9U7VJn2M4pyZsQEB6AthcvbN2RAdS7T3aC1FG28QpMxLxGWg8BrSqiTkp",
  "key19": "4GHh4DFV2aXVjxZdWf2bwADS7fnY71bxahkUbapo4LtfZvZSxYpzfFPsLyT7X6mFNPTQ8eVLLDG8pdKQNDE6CLe2",
  "key20": "AYUWVnFrE2KwwwfLvBuRsXXuD6PpWd2JV2hHZUS3pa6oHbPTjazk6hbBqfiJTgQHmQVVvegN79NTjtnopBfcQQ6",
  "key21": "4ZXAf1XsZNS1hSFSn1w4udQwxkDFAr7Z5pv6f18PyvMWdU6rTsbUrkY4pHVBbwK6Q4TdnLDzCMVxBEoua8UcahfW",
  "key22": "EUeut9tnYoLCsGptFu8dDtqbgVGWsHewzrXcRML6CDRbBYbbmjzXTj84W2rncG7DCwFKYZCbYMVLp48A5o9keWQ",
  "key23": "47ApU6Ta5BDW7EcNGH2bM8yTa4kPK8rioHzoEworvrwL5XKBPFBHBBMebg8nCiPwwbLFGh72aTu52LFUUbZCEPZC",
  "key24": "37JXPzx8AUkj8PoXgAiJiNDwSQReoThfmhqcMnBy2RV3uuXJrWHRRGWexbA7pBhyEjVfpLAHtAFADqaDPc4juS1b",
  "key25": "y8efLMtPbCwXt77uAk35CE1EE6Bm4GzGHCZdVwNgpjpMn79nKjDS7hhXEHWrh2aFM841TysxmsPzAGc2yUqsuTL",
  "key26": "5qaW4bwrL4FBh8SWZDHT7UijYPJCgsRFymsrD9KEsgnyT1DTWsjPpAbWqULnBMULtyTVs88jVJ57tcr7CnKtPnXv",
  "key27": "5vzjXW6aQqtjVGHs3nVbzhU55FwnQFidwt8ew348ABNMkLii31xhu7nPYTP4MfEPr6Q2oweJFSj6pKzYz12hQjhA",
  "key28": "5pVSrsVRRyWW1WiDT3p3c55rteCMJfsxYwcVNJ8YwxEvSjGVVxebnUxTwv1nRzXwoN3PPTHzJdmXE8TkXZS5Vm9R",
  "key29": "41VnWmPgsma49p8zoMEy8Fi9zxQCEPYXEEk5TCav7qoiQMuGJrgiVBF9DGp61s1qtUnpJTaNwBuEU5AQUbcfF5h4",
  "key30": "y4T2jmjZsu1kSADcMtDE4vgiE1CBHkFF289G3yJRmF4qGFqXJQsyPL8Ws2nyZyK1bgybGcBtMWFY5ejwe9skoZG",
  "key31": "29E52YeegPcGuWeUGjStK36YSEpHh96qeQGQpeR5BH8mbyGbVvBhrXR3sqvWtLJTpdvdg2MgJvQykAqJ4hmEzEes",
  "key32": "61uhQoiTajFy3dEvU9AoMYVDnBtttJn4WkQHCsnKvEjZ7cgUmCpvH4RFVWmpVBs264a9FEtLuJrH5SCEKWXmnKrM",
  "key33": "4QDYv5XPmoY1MU9N4skUE4uaD9o4YMEydzDAFdYMeQqf3otuCEjuF3xpXML4ZciMkcmJzPFKXQ2uBGqDQ78qDuyF",
  "key34": "j7CTuPt6dvx5F8RzKpmB55BN6YdqCK2PQiFDvgh52zfQJzK3BRmsbLYyYfgJL87o9iybRoKMGQ73GB6N4XJ8dhQ",
  "key35": "61eTqJYiiHUiPW3z734Z1B3g9qp2kjfutkDCLxxt2MePmuo4wEqkGCa6zDsKwFbn2TvGhM7whDUwXXYxrTHeJ2nG",
  "key36": "5cFZXs46gWSqBFM3rA4AyFY2mP6kwAB4yJX4Rco7V3CJY6MhUMvpaDB8eKeicdRqrvWGLcvX7KWjbRGwx2mbpjBt",
  "key37": "5QQZ3YnGuixncgZe3VHtPV9xNw3ipbD8SeS8ETgM3hwbsiyAEFPuprGsZsoeYW4wUpNzLKusNaZNEtrdvg9dtfkg",
  "key38": "3BGx2rrgEfQWRV1hFru57ccysCeFqzMTLaM4tgM8RiPBUmx67mUPRtrjaCm7ZtDrYzdjjbhqgN3BQAduyWXvFsTD",
  "key39": "32KHRyspTowj7A2VvFwttP7QCDuz4bzGwv2SW3w9RV14u4vNnTLcS69qX6mAYQtKSmypZxPh35qvrgeJxN89mRsc",
  "key40": "4jscvX3rQ1UrEb3RDjP8AvNpsA4zxtopcV2a7nS6p9ijCQHXsvcBuQTdDQQtmJXfKzAYt1TUcAT7g1t4RKv86ito",
  "key41": "3tRY18pNkqMzLo3DCbCWBBdnxauALK9WkGQeUtyBb1rWuhgnbW61En66HmnXE18JxGSw3gKqx75bjh18piM6MGzA",
  "key42": "2UshdPLFqjY5SVD7rSgT2uT3cRXVExXEMyfsWnWrY5nMoCYvPGw4YwZJ9wfrfYssChKXWCHGG8FKqVL629cx6DSQ",
  "key43": "37Br5EybJXGb7RLEtQDNPtkaHgCtBopfuTMhVa92L1AS5fMbHJEY533jN1KyKopn3bnsXJr5eyuFR6bTzmtt45e7",
  "key44": "5z8HVcFTxdipsFRgwRCqd7Wrf4Bmr8bmVJfd9spwTNBw5yjffUvWkJxwEUKGP5KBwWoCax8mNTWkELWRMugH3ZXZ",
  "key45": "4FKjvD2HPUWXqYRd7FN7muXWETy3m7mhNawNxWhYQg1b5QNDyk3YpJR6R3JBSB7hUqFeH6yJ1Vsq7VB1CsNo68NU",
  "key46": "2NvNAsAEPoxgBjuAah5L8LtUraNxhaKU8QnEsNF4dZjcg7vmiEveMCmCH16XYmt2dgoUbTehZY5xXgXe1r6RRbEb",
  "key47": "3JQx9eshA6AABTbs7eqjvNputQW7yJUXTTTaGmfbnzQD9sP6hpnaA1g3gFdeZ82X6RTjk7PeGGHtCvQNY6Gz2FwE",
  "key48": "5jUx272sjEAPFSwNUAzRrTqvQNYHysomhHGfK9GNeb24tMPQMZH7rhXSBwUSi8aScNWQfYbEtHmuc9C29L3brCuD"
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
