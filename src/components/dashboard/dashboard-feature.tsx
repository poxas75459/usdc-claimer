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
    "4R6X3dUSPgbbwgVetBajNfzhJk1x71Q7qZRU4r9wWpL3LZ71pLKDhSWV9gcXrFQXMPXtzy7QQecvL8AaB4aEipA7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CmCGbaaCk6Ekw4hwVEjBX5PA9dKy4HhSqHR8K6eEwippvgwX9VpDeHDRqDn6ffNCWadkEEvF3CJhU4HxRZ6tZT3",
  "key1": "2gnBKXjzMryiwcbRpxp8DF1y7emc3CtiXpmuCo7TVUUQYbEQBVYHHPuwnxyx4FLw9umE2kcstmBTvUW3aJfDPQWq",
  "key2": "5zPdnhUfZJdqBTgG5ypfBUx7iP8rNXm8YZo9wrMkK1vfduh3uMnZq36Ci3RGRf5udQZHT5eH32pEKh7i6YNNpLsr",
  "key3": "4KPZq4JJznTnfqYsTsxoB9sbQ4bpunpKjvtfaSkA8R3QmbXYT169oPj25YSMjKSf1Sd9oUrDgzX32GDqZNLCAAx6",
  "key4": "43YYxQiWmfAYjVvsFAuwQcZyvF6RAC8GNpYJrj7S6dsorBvfkC5FeXmJXUQTbntBoStgFh664d6YjHx92PWFUY5C",
  "key5": "3SAorSqa2ChG9DggSrVtKfNQjNmS9XR8saAVfp823stugzcrDv5FLrTSUMzFL2r18M2CdLteX7QxtQYkzSJbQj9c",
  "key6": "1287FfE2iujV4mVLJJLEgX3eqTaVdZXfDCQeo2f1zdJg4PJUYtbrWZjiMBbGz2SSj9GnNhzFJKge3txKB98B8vt5",
  "key7": "mqn8cXAadUMCe7ZRaNLCetBKusrqTMAyoVQPwCZ9uvQ4uckxLQGZJQYtzTJi18goLdJv3WZdu3NRZaVjeVvepAP",
  "key8": "5WWTPYHi7eVX98sB4GgRdEniupShxVdKC6ZDXY9nD95YadiwVutdAqpotdawWBrGkkZc7gDSQ2mzQzsgDynWAPSp",
  "key9": "4hpc8Es6Gb4SRcBk2Qmeo4vUQEMXheszhWFskmAouXXdwB5xeJCBh5DHpAvpEPEJPZF9Uh43utnAHMAscJjbR6oY",
  "key10": "4ZqDJXacmjiQQtRZZxyNNofWes9R7xfXprgPnbSJnFwoUTXmGo9DvJbwSGcK1U1im1H4a37YPA7xBziF443zR6PA",
  "key11": "4a3hiLGXY8qMxKY1z96ggjsg73mHW3ZGMXWCnNmxzNRD68WTUHj8u7keDSP8fgYHoDYSGY5eWvZ5vKKFYxqPnsGo",
  "key12": "2DJQYAL2kvisVC6mLf8eu9rbKT3yu9fah3YmQ68FTQuZP7SCUMPrBn3AHmDJA9D51k62enHPjUmYhqrazcKcSGEw",
  "key13": "2ehWKvqe6tUEz6cmKgboZj1CQDLNjFH5FYac1upD4BzVBHtdKzrcKGBjGqoUkTms7TU8hnvPRAPn7vXrmHAWs4ox",
  "key14": "2N7qeSiBjPQ2EeXWY4X3sFTXPFRjVAPFfiHETAJZKYxMeBxDc427uvPmGhHov2qZ5Q8Z91yWxWAJcn3T5pAocXpd",
  "key15": "Voh72HgenGPKNAfUDQ4WFQXfXU1MbMNYisU2eEKpVfARzGq3fu6fsK1jTqG4sG4Go4RY8vTWGxZK8vaycbKoLWe",
  "key16": "3X39D6z7f97vZQwGZYtvsxGpoZnnSYJtCo2LVmH8LRwPg4GBAAaQyswJjnFZnyr4fyTABPTnFa9sDWbcRk56tCJ8",
  "key17": "39RWg4iC4zc275N9bjzBoLFDnsk912ZtjuiYREijgxWqkv7qSJ1LsqMMXrG2YpU2k9iXGwApAfEi2y2u6CNZHQcU",
  "key18": "4rnFeuNLvd3ehLjcjykwtunVGJihNUY8fgDQ8EEUtPFztEMFdgz9MLJSMbHV2K8Zsi4YPJvAKHkBkbDezmfgNpL2",
  "key19": "4DjiKpxGE4CDEWM6Wg6XvakGMR7S4v7DREAEYyxPzvNY77Q5UnsTdVCDvkdghWiFJLeGRafMSrxGppsZ1x3egCv5",
  "key20": "5TWwnPj482iSSjfcxHAj1JkiAidXr7KQLfJJNyUAcXc4CWKWZYZdKgQCn74M4Va2anXvW41cZqMvAU6z3zGrKyi1",
  "key21": "QSPec8AvnDmsTPEFc6uPMH9PTDrB9heTZivQsL5R2E7MeU2g6mHj2aDhuqQNcsAXdwgvRVsjLF5tPtMjqf8P8Bp",
  "key22": "5fQXFBCmNiA7rFEuM618UZtA5xeUbjRL8xkoNSZ7irCeUVDLEtqxhWP76zusL2iCgM7R435jiVraAxq4xrKe8tnz",
  "key23": "2zCNBYcdEEfnKoD6DU3F6Seb2Uav3bAaccDTdrPJW73mvDc6sNJijz7xwMznnpCrhyDRErBS9vrZcVY7VokYAiUf",
  "key24": "3ZZwQMJYwqPkH11nFMPQdFW6EqAbjRphGZGu25Z6XA3ExLHaCrtF7SA4c1gmKQk2JXAjXVKugy2esQBLajMH8jFe",
  "key25": "5ZNJo4rCPfN4eks5j7eaRmeEANhWEqBWKaCXFRSwrEFYBekXUJxc9CmEp963RtzYLvzrTjGtrMFRtMnbHcrtXCLp",
  "key26": "4wGntJCetcMZaUbyo2vW3UwTFiepwBfMXsuYECkvkqBYNm6z5GeJKoNdZQ2MHeGrVaAMku4Y5sFSArdVHHoUmj3F",
  "key27": "5hnnkwugthvXxKExeBDaBDN2B1xsZeGAq3kRvWPCL5AenQ2tJc7uKdmy3FA7nVXDenp3fFhdBbrhgS6XjjRswNMQ",
  "key28": "2Kx3RjK6SZxrtX7ZWbENwioPSvQC8nhBF7wQzwUDPMscnmnG9MhFEgVc9sNStNN2PKBroNNeqhE3igsDqmWHxn6c",
  "key29": "9dYSj6qMZhsJgbD2YMfoTMxK4r5afB6t6LMF6qbCeMunsfpynZbSKQi8CUMK4BCJwDndonSGdMr9HMvYe7qH7RY",
  "key30": "5Joq54oRUh9XUYzS6NQa1ZgGLaZrCzmntfV1sWhUyGpXXoe6YSeiVkJ8n8rcNuKWaknqCTp4ujrCd48VSpLv5s6G",
  "key31": "29e53arLkKyzsy1WKbBg9a5DcPAK38kXzqgWvVRUZmMEKiDe1wnmJ3qHxd57BPV4z7kQWFQwkKnsNaFo7yQkZEuf",
  "key32": "QQtzSG8rSde19YfYUcCFuJmpCmVFb4njrNdNismiaoiYSAQVG96cjwm17FaanSPdgd5qdSeuf9JBxgaD43K1rbL",
  "key33": "4NzRcpeYd9FUoWL7M9eMVfydjxHQzozdfQqoRasR2k3qKEMkpUZyL2aGqrqPAjsBVo8nm1civ3f697zR1xc5FsLp",
  "key34": "2C6b35gDc8PvD4b46a3D3Eo1y4W92sXsmB34PoNDXPkaNeA7XeXTnqWGznSoMxCB974Ey2YYAWxwbYpcB9t4UWTU",
  "key35": "4x9NfutD41b1PpVkSSfhJQtfp14jTrUwrCsiBeyVZZ2F13QhCaCvb7jv3MuSXkdASYnxWB3r8n8Um8mjg1PKHnhb",
  "key36": "SrCXEnfqmwpTjQgko5awnuGa7WtzWMxBCgKdmcQKQswSjebdtyK1x7FKftPJ59FTGde7DDGcgyB2tNe7MxTgBKU",
  "key37": "4PUALcGeBVhxwnaAnLbwMF3SKqcFjBLv6mvuNHmVWBTdWrrHyzRyfZHjcCgsvD1aGv9Ee8y5doV1dNXFfrBYJz5p",
  "key38": "2poYZVdU7G2BcYVqpfQ4YcGkEQNoFLgMdYYbC2Bs2ZiaVrZ92snu84ruwB8xX1n5usv5yeiVQNVZ4PQWo3aSkzwN",
  "key39": "3STKPVKDFmegS82siuTreGimMawpJ7MTEMvrBGx4gdoTSBTKPCP8gGJ5kLQDPyvMTaviDtCLjtaUD6W67KSTvVqY"
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
