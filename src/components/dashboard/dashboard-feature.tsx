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
    "2trNxdnXLnWPw5oJbAPPmEiGCqReYJNTQc3A3uNSjewa59LkRCBsrmsnAjRC2wWaJyQ5ZZWtfas6h71he3fYUx3X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fsro9HgpECvjjLoGFbX2nXiY5Y3P49QUWTD9cQ4ACKE5K23V55Mw4JJzRDkBRz4iy7KS5mNjYtuEt7Q3cdqJ4fd",
  "key1": "27AYuoVShHzjFmKYy66orLQ6xJwAm2Wfm4jpXw79HLhSADTQSGXS4RBnmUsktPrSWnTnJZaUxzqE5EhKJLvRQBHe",
  "key2": "4oiTsZLCfy8xrdAfnm9Roy7FoFBGrh2w8NjuM15tQrvKoyftAafYnXtKZvtYkQSdGNR9n4BVzAERe59WiaTFaE9e",
  "key3": "41KKj3sjMYqZQTSTJQbAes477Wj67XKveWccVuWFbhiZbMPP3T1wJg4mXX3uKDrxnoNrQuQZqBYEpw19wd8xcn32",
  "key4": "4L7gELHoR1j4mEfoWFSkNaQU9PZncTSWtMebnFwqtBNnVuDBLpVjFfh7vFFh8JwXZ26JoHGRSKxUdcZxX9K9HQK",
  "key5": "3aJ513h9667dKtRQLwgmhPMA169XogQANb3ePNcxpV1PwLH8awyqRuwxpfEx654QioEqhxCgFEfL7knSapKxvyzS",
  "key6": "oWWWkcxfxXBm9NDVjvX1N3rrhAzVdQS1zTyKde5xkXrYVEX1bMCsJeaavuXgz6ZQgQ3FKzFjcQbS98EbhXCMAzt",
  "key7": "azwzyKA5oBPH16WCnFXXZGV5ANLVNVMreu4e7h5qvFhZqVjdpusZM2gTVQceR5WzRv7nuBAThpa2Y2iZq4eUWUs",
  "key8": "5coJdeeK5QfpCxCNPzhFR9jamXhcX6FzuyBNd5P1Jw44Ni4zwomRZunQ44ik1R1zELNcVF1TJWrBWpPPQsraRcpm",
  "key9": "5gK3XLKNzZbP7iwMMe7EonPxhhKm6FcxPDDdKsvNtr1isVqmmBzkaKhiwESE8hXNjdQz4i2SwXJCe9LLNcZqAVH3",
  "key10": "5kfKEXztLkMoVQDGLu6cWDuGmLzYCbHWBKF83pzM8zBKe2LAe58eF1M1MDfXbzPYLTg7KZeGDdJqdpGUpkcwusLY",
  "key11": "59d6UZwVaSKNQasHE5EdpDfeBa4d1ER5mLiGcVDWoz86DJegRyqoFk2Pc7xDzccLCUfEJH8TdJC5fmZ2cp2fnWqf",
  "key12": "3JiWYyRpCJAcFihFkYbBKxWjLWbjTNYej9U8CXnUzycqpXc2sUNj5ND8uFuMkteknZXvATQuadKppUPB5bqxP7mc",
  "key13": "62HDChgx1imokw21ziomY2HV3ijVY8d49B8rGwgZwkPiHqm78UP1TDe8zDGwVeJyUXMGEe7bY7wX3ixnNPD7g6w7",
  "key14": "sh1iD9N2TUL9LmeshdpG6SsvwiA7aSDgKG322RE3M5nLJuSuYFjCqGk32QJokigYPqTCdDzn7zmZr52rP8WRErY",
  "key15": "2Rhs1JeEGDMJPYKMYoYanU6rGxdvrnejxag9tejDDCEKtXVusZr4KohbiBHW6rAEdiDJpozTinyxRjTdYnVfZvY5",
  "key16": "2EJwMBAUpwq3XtQAdJckXtUebmTx2eVeHE1Q6oRRjnU66NbSxzqqPRJoRJqQbpH7TbibbH1trR9J8cP6TvWZtGAM",
  "key17": "2mkLqXYthPJhyCTLwK3sBXfy2ZrCXubVsXDZCWCBrexwYm5a59jKqiA5Ld3gC2KRQj1r3sWDnRZz5CxEBNLGfStu",
  "key18": "3M6FKUTYGUtf8ygcUwqUvPzp5fJ3jqm9jiZ3dc5te9AJnHhEPJMi578EJCrLZZWrCks5gcoLDaP6V8PRShK3dbEg",
  "key19": "2kdNdmGbyPQNMcqkakYr33nNHkkA2HnCmtd2nCYnSW7NYNQxUQhQKygLcX9yQ7o3x81WcdR6116vJG2w4tto6Qif",
  "key20": "43trTGbwVY46hpZJ9TiKnRxQuF62qFz4foXGsXTa9whqayhtYeJD75QuDgM1jcH4F27U25ywVcRc18fKKqFwWXbf",
  "key21": "4A7Uw1uJMEe1VnNid73UgC4gc8iq19wS4QaAtXEDVWytJ6xgoKMGyfeQsrbocc2x1SyPvSVpzKZDqHqYtqYXiZte",
  "key22": "2uPjg2iAkjbuuF4AWLuL5VhEr2ji874QHugeuNh9ki6Q6ugJWqr24cDJCooFL479yvjjKYesay76kJqPHAxy3ZBb",
  "key23": "4pmkRQNFUGd5JhArLgbr6hmoYbrSDYaLcdoLW8Php9dd2kaGFaWMLkfLRWHpdat7cHXtSdCKwv9hHVwshHoRji5x",
  "key24": "5wPjWyZrPp9KRvCSYNFtDnFMjP37ZcTECAYK9qzCSuzSykCgECgqqKajP2BW2WoSjDnRqXoViTeFWXTBxNkYJpTx",
  "key25": "3mZqDoiV7jQoSg8ZFPoyTszvhyZKVBd3V7LNTyrbiXen8m38y7DErdBBcEeVScHuFkVroVSkgUBEHPmRiPk8T6QF",
  "key26": "5TrBhQ5gJUasGLF3AgLYQmhA1yedLdKDu3AvZiLaS3v14P2cfXHmZDMGM4P5oCZqYfL6QZRMvacbm6LXDekALi9c",
  "key27": "5mbAc6rviCTqzA8i5GkMSy72w2qchHzfv2NyMinUWxumwLjZT9wyeJWQfgfg66JUCnGzcmjpN7m714nijEeik3xF",
  "key28": "5We7smkc8yH2MhjsDNAKoWeAeMdszZdsxW21d8hMFCEbfKMfd87S9YBZEnUyt8bhnkkmMeXfVEJ6u3vML6QGiUjU",
  "key29": "5KXLX9NGJuHbmqT5s8EGZNte27WiU5Wedxay1uAsanR7hHCg4hfD3eebZzB6q66X7nEo95cJaKKZPfR8xQwmZmjo",
  "key30": "2nNjS82KQUPwKRTFUmZiaKc96FEua4Xi6H2vPNkE39kemU2HBVhgCZzWDQqxompJWqUovawS9Y9izeDYEinFCsVD",
  "key31": "28GSmJbGJwYAKcWxy654m4KfvoGar6BrC9csFmVmJ7ndz15N8bdDTzq6wiYmX5K5vxy6o3S2gFZV4v6KVJpcArgz",
  "key32": "2RNkgXkuhawNxgUhno51fHaeEop7McunuFxjPWnQnwDYMU1oX1JLUtg3y7rkCg3UQj9PrFVbBnpkiQk3wV5R2tNP"
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
