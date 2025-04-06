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
    "2Ycm95PtuWvdrhNBHVzV7r5qwSq6yQ4adPcj5APUmQsbmEFEKdYf7mpzSnLmP18QJCjuzSMt8nttyCrD9khNSApf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eHbmHqn3TLewn2NwPYxa3e9KtEpYTZ9hVKJvRub1cPBSJs2Nh3z1gG9WWJmvBaEC4Wqa1fP5hDq14dcq85agsdE",
  "key1": "3rfdtP4XqmvboMCai63XsCbx8eK4WALzLtSa1w6QknQb3MxCyQymxLeQGoYztd2ko9F5LT3FnLi4KLFsTMpqDJz3",
  "key2": "3anLcmcAJbxRCTSMMezJ2B6LpigFPwbdd1qFUXoFyaFhEikzKAVjGWmhsPkKJ7Zca3VDfG8bX5fgH6KCDrcRpFDW",
  "key3": "2MQjw1zawV841L3cWu7DYhNpophHX7kK6hDqauabWXXprdzEJnGALH8ZEFzJ177ZXNZiCmpdUWXLnEMTQSTrE4SY",
  "key4": "43fbu6Fi2v1Shnd2QJPVGxsfaBWMJAicLGH4WGGs6EsGG9AsCTSVMvChfkPZj7BnR8ArVs53vPwtq8cztjm25T6N",
  "key5": "5v7r6KfJtvynBd1cVkHuj3u9gW3e7kW1qm1D1Q6xKuskAo2dSsKCf2j457QpaeJh6YLohqjUzMPk6oGV8KP1vpKm",
  "key6": "4VnsyfYF8vvuXmeJBzkzGtKPz1HBbyjaj8V4iaKNUQrCp3Gr2Fp3Q7zDtKWVGbaG1hoGV3YD3hcg2N7tPQPTEmsM",
  "key7": "46jXCv5NzmzTpg2fviNDeGn42dm3X6VZ2JqUJ3wSwQMN5j6pyXZEXEhqVT8uovsFRP3ivCArfmeSpHM4Y7g6uWqU",
  "key8": "4iPYKou21pQ46bEHMeCZatVaeRJfGvjh8ASDTuqPpqhMUSmY9fqfthso7EgeKenuhSbKqo8VQJQGSwYk9eL3q9og",
  "key9": "2VE2kh4BuEWX8xQcmvRYE2Y9VAaSzkVmiJbFT3H2wyYNpEuMztEx7tSn2UTwNoSzG9Xo6Dsen9tUUoLWSGuxsNG",
  "key10": "2Y2H4nro2qSaQHxnWtmxtWrGyB7BLPyaKeCrRqrErUnREYWq17gg2Axi3ku3Pk3ruk3MkRY6cKHf1vnXRCQ5jNmd",
  "key11": "QBRReXxoR2sy6YCXXhWYZVTyKL2J7csgkxPybURnVTUodSBk3s6d1e1Wx7tgVuoaR2iRVLWF3UD3QSBZSmonjYK",
  "key12": "4pRaFabCnCucs16qVMBoWtwPRBZWhoiFW8uqJA8bN7375Medao5xnYKdXsV6txZ4NUcva2GAYxtKLGXnChphKu6h",
  "key13": "shWd6HtRFAnLjZw2PkkrfVaHdkiA98tzjLdBnTB76ftMQbWcBi41yCMdKdXKXyefuLBf2bQFi8BMXn3jjgh7zqv",
  "key14": "4PRFkXzcLcGswEMBiLcmerFg79MBatwVtcxKRSmwpjJJxpksLPiV7HkLHz8PKbsY2dMA7irXSDGgFiL3n5aBstr4",
  "key15": "5HsMHzyY1Y9pPg9FpiqX8gqiybWmWob8Zi9XNvZVSVD8pMzi1s51fCVEbkLgzKXyXCuZNRCpeaK5yF7PUYZeExGZ",
  "key16": "NqKYhXpVcGKHDnHMc8N1x8Go4XAJUrJG4L86WkHN8jtYFJkUbYpfYPDkc2mwCr9oZ5Z6boxVX19WjpnaYyXEZBJ",
  "key17": "633CjAkauRTG3AoSsZTJQdaCbk2wgSTHpbq6XqP3vd59SgHwRDw1NcmH5gA1C1Vt1UQhMPWog2MWUdtz7NZLedzD",
  "key18": "5Nc9QmYFQ8TXqrCAcmPMoMRPqzhVjYxMspvMxVriz1GxbsED7Xu2zMcxeYx8rrz3tydC9zTdGsLbSJfaXJRptKkB",
  "key19": "3Y8LVKmsbJfP5ksWWw2dHmNSBjs1k96w8ro3XBT6KNno8QNMXfjvu9XRnPRbUYnZJDEYXdjR8T1Mc21wZ2wqoedW",
  "key20": "2smRf2rpRfYP2QsNiNx8c3uHHKu5f2tGaGebps99eFaxNPwRhfynZK2FZBPbry8qesGwtdVoJEtosakdFn4jGa9W",
  "key21": "3fsnd6QjmmmEHbAxpMsHyA8TPi9TwYc4ufSewPUCSGtY5QQzVgvu1WB3HKe9wKipRXAF2py4uabnJhsybzoAzaEG",
  "key22": "AZeuUVAsGuNYrDoP1HNkArZfK5aaEdneVRW9dRUoRQxamuFZcjGBiByFmYyWQ1y5hLiuhr9jMrwgGyPx9LF9YzT",
  "key23": "u8tU5d3rbNWqenHNnpBeRYj16okzyWSGcAFYJqueeFEFnAW7afgMPbmFkTBDZJtvaaKgNZTDpg8HUdSds3nzGoP",
  "key24": "54cucubVAjHmmsqmwFYfYV5CHFQTkfXCVqyirYGxgpCvxFJJpevjRyxNEr9JgQpp3jWPRPD6tnmM8pcmrcAKi6TA",
  "key25": "8Han2GukjDMY9458e64WoKWCsYaJEzcxZQ36iacB6uRPoz3oXrn7KRSyuCbm2CiFsmSTpXkxvXYmsgD12FxRTaZ"
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
