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
    "5LKFVwA4ySuGQ5BiCi5p1KLz2KyjRJxgjxiuc8hDKAzWxPWDsibegXaDDTgZLEYSDYhVJEieU4aeyRCE9xouVcfM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BEuT7AG1qEkyLqFNyeyFGER2UboN4d6ze5F76j44vf1atNTCbXnfLcu9m2g3dq1pqfxQGhauDnHyR1FUVGdiBh9",
  "key1": "65mBdFrUXUrg8pes3rx2TRGHfEz2KoRZhayMSK8HXkGjyxkmGBNnydm8mvHA1Y5UNMjgH8mGuRN4pTPo4zLa5Fsj",
  "key2": "5JWpBtUNgW7nRaPn5EpJ8vPALjrwSdSYQ6gwVRZL3Skf9UEN5xpyNQJS1wMSnziwcSaxgRhYBc3xXT2pdUCWv955",
  "key3": "4VjrKbBUjUuvYto49YYpyCA1ZqJE7FutGuAbNNXDF65WwENoRfbZhmQ97EBmAuyX6t9Yqpq6u77NcGSawmbdZDTd",
  "key4": "4AM7HwDRhg19bKodqaPc7zFsKabK9wAi2oRf4F9r7LG2qMBWQdLpp6hb93PxV5iTMMa6KWoTxmXn9EoXyuWsWo8X",
  "key5": "2qw8Mx2BVCPwCi3tXyKYvsjVykDs7QVdhwd2j22nxkSNxqXMA2onqrsCsXs9PkW2mogeNgGXabZdd789Gx1SVuyL",
  "key6": "3iVYrWv24AZuwMofxwMugRx2LzbxVYWj7tK5pdiVS3aZro67SG2aSgr4Y3hZMubQpCTaq122nkyyX2XhpfvFsmRW",
  "key7": "5uhH37iEoZdtEk1CdNRWRXVM3qiL2ef777Sdfv1sBaP5fjKCt5eGPFtprgzr7w5G5Wo1fzBqmQJb7o7BCBdrXgDt",
  "key8": "eQ3ndKLWmiJeHpfNPofjRtj1u7weAgXXkL1ixZrPqLC7tFRjwcFjMw268UqHLFChWNqWLKkCCF3R9LDh29MvdL5",
  "key9": "3MuPqbuX7cCJU9X5kmaSugbUxfnVjiauNtNcVHr76Ra2sa5Y7dEdwvnFCsxEb6cydCpzMdeZYrT93Q8xiBVQntHa",
  "key10": "2B1XVBUPAFyewSJsJwXN3qEbvJ2nydQygh6jNuHnkSKcw3Tj3TS42buyhE7H8hnTkq5115Q5miSPMRe9ge5RpvHE",
  "key11": "2eKYCNrxHjhDyQTM5kxdUVa1U1ZrCEyK1jB5rWSrSJY2gd9hq8aUt5fyjexkfezqi4ytRVxGvqnS2y3UCWr949Gf",
  "key12": "5dwwAUWwqoR5wYXYSApmBHpe1ez2xSiFxj4RGV6n7o4sdQJXSqVyDmnf9hPprk3KpeJMoPixkaZaL8zmcsfD7PoW",
  "key13": "5kJW4DyTu9r4KAy8kQjcoG4omQtqU9C9KZAkS6VgPEJBCBC1r5DM9Rr2CjL5RcNA8YSCyapbJLvFhG8vgnQk3waP",
  "key14": "2wjyHnRbwH8iiJCciZ2mwn9SCbjnHS2ftdamPQ6uewtztLk6k5uLghQtw7ZdNNWQJM6exTcE3jsHuLKujDoR4JEW",
  "key15": "4a53xLXFxfmtqebsjnVGCUDxQ9JtCgJsDVjTeRGczzi1MscwnDFhPXQZJFetGzJc64Zc9gCh2kzrM4xVYS9fAVi",
  "key16": "5WtpAkmt3mGpdK3affpwbDCfCs4iKsxEKrq4UfZFCihhcK9HFBi4qJBCo3rruMWvETcYFGCJTmdKuaAjh5Zzp8To",
  "key17": "5xcX6YqhrC9u1EHU5cJo3ZRunpjSnzHn6D66crrvtuuszDasesGn3MdCvuBJ45bDuLAtDQi7p6doxau8tR5PGcj2",
  "key18": "3H9GgG1kVvXT8ZeZqGby53Zrr6AT3RUfoE4uK78SQTY67v3nTQeC49jTgSo6SRAdm8MQomhrWBqrvoHvoqoyJoSs",
  "key19": "3t7ESEPoighPLN9uuyFm28yATJohacEuRoPMCm58f1hV11n6r63S3cNz3kPtVoaw8CmDWsJgbXgweC9tWjiALy7Q",
  "key20": "2Fy7xj1q5vipyUrGpxKdZ52j5LR4EBGF9JMtd99RPnfBCR5oHMqcKo9j8ni4oYnhXx62buwbWKFbRMJUUWsFMz4F",
  "key21": "62fmHjTYZdukFXrtF1wQN92UdgogRyisjA2TYKdg9yLKsnsQ9oVt1diTNFF84d3ZcBZ4u9CnWGZ8ddmXxDEhUa19",
  "key22": "3QWNUWDwyZkGvBJpHsZttbe8qXNk5X5hv1xBNK9KRxn9V3gpBNisJjjP34NdoCVEymWnQoUqSByRyWaQLnNA4tib",
  "key23": "4kJZFiZ35BSiG9frC22LKwuG4xknmhoo4L8nhrxGA2nSyScUUU5Xp3dhmgJhurZxawRoM1vo1tNc5LSmttUo7EBo",
  "key24": "5EFK6iLqRL6vG3SwUaycxLu7SxQJuoG1s5hCbhtwL7T93tQz247ncYU5CeP4bD4fUBrYNsL1FMdiSQUV3jWfUqF7",
  "key25": "4iTjpNMLJVbT77r9w83cTnb2nb8xhThynaCJEuVyzDvUxsdgg125JQegfnm2jgKrwvAU7GaV91aQpvNGZyDVyVC3",
  "key26": "4djaF9JKBdA6nj1Eiys5QjvX8A4wPpkqq7BEeDgzpqFjHBHnnfrjPffzwKsAYJF6H8m3KYxiTHLce84m388n6NKu",
  "key27": "kENho1PyuH9h46b4sFmqfnn9YsFWwtu65SkkkaqNq5wa82tcUzeXTtKQLXEMBWDsmF7tSy64zz2jRmVzuFegdEg",
  "key28": "3ZEFtuZHhdBDtnJNCUcbukyq4zzyYwtrbHLedBPTRjqBvLEomuZTZcMG3nrZEDMK6yFXb4pVrympPrFoKDBVZCt",
  "key29": "9Wz1SZXUSihiMsbRVFqFYVMpifBdasEa9zDJjBCtAEzdwacuSxgvk8TDAZeme6uZm7o5NqfNxiWwYhptZW9MiqG",
  "key30": "27kK4CzKgCkWgJiLqJ9F9EygUQDdBPcZWSBrJfCVHRVixvtnrzwCwr4BL9bJaTevnk8AAiZyQY6hfM1yBFVHsXkJ",
  "key31": "dHzGWQZvK5eSMqsKHqnSZVuwxRPrEvcRUFY9CXFLpnB4R2GvhXuzdRmaHcctFLFY7cTXE75pdS2Ym54V2W1pXck",
  "key32": "5KkJZFHifCMmK9fox6tr1eJNbJj7cnRRrc47zhcTo7E77YpfggiRs2TADxuKu1UeoYQKcuiaiuHSJAM3uWucMpnw",
  "key33": "5iJausEXFRoNDqNWtba462nfXWcoBNj2T5pfGuHmtQTwhAWYiEWUNei9YS53k13y1V9Yk47e7ndZoDnsdfrXNqZX",
  "key34": "5Vzzwr61tb3KLP3JytVnhaWedqxnX2RzPR2E2hoCvZVGnDoZJYj3JrrLs47sSo4wLLSGwozRRojN6sRdjyxYC1CQ",
  "key35": "3qrmi6nemZZWDin1tmcYism6Gg9QyLUJCbHvA5tAsQLmd9Cnkdb5uaYTSo7W1q3dhFk9TaGsscEzVM55cF1YS7su",
  "key36": "4UeSM9XWhRHLye7PAC7xB46gc7dEbNQryz2qxCGETT112Rh2W2eC8iads9KSjRHs7K326FmbXtNUNYAeHJWYszjF",
  "key37": "2TzQszdRLY9Gcrm7ixH3LpyR91ZJSdySGLfgrs3nM3WKE25QdotNBvNtUxYtvZt1yVpW85g5QS7QrnXJHMg4EzEf",
  "key38": "5F7DJJ1TP6XB7jwoJBcnofijhenHcAoHRQ745ijV3SsZnraJyNX42XHZmUdmNzAbVkbKdPHhuAcdAu2PhiSDwBn2",
  "key39": "4t1TYHBfM4CBMmkx5Dnm3bP92AgsjP1Kfwf2oYo1uHNhcABLoNpD9xANb98dMDZYk6BSCzD3QBbC88FAC7uFikvh",
  "key40": "2Bi5wmTcghb6UiEiiwuqjS4LUdnF9UWzh3szSUAXR8E5QT9H4YJpAY42NAtCPdkb5MEALXdswPdMmqwuAXqJ341Y",
  "key41": "raPFzayVuJ3yURN5pg2jj3vUaJfejwCXF7CTzqE6J1tg18J6HjJXgNX5z29upcUQMagMoj546NP2EKXQagK4bxp",
  "key42": "bDGqqcmvn7ui3tyhBxbZW3ET1RHGgjNP3UVxzM83msqJNMgZfnNPRwa9KjsYDWCAYRqysiSnFN5iA2yyMdP39uw",
  "key43": "2cWNXr9ZnBe6ddUdWFcfQAfPbMGetqrr4ZvNvz8kYEb5KLvM1wSGH4QEw6EUhcwTTPN3xeibERPb3PBn8gu4yGXs",
  "key44": "5qfmCJMD5N3iWCGQKoyz51PEXc2QeaqZvVCHUBnf43fR2GWP1r7MNnMpnzHVa9dYS1tDfnLsuipQPtS1Hg3K5RxB",
  "key45": "2FcgMmMMFpxB4AN3EMVvuwjYrMJMtbscyZ3tUGWVhRv1UpwzmeV1Ss4eTERw6xzp9Zv446PMaYSy8je2SUiZhZNk",
  "key46": "4KGvp1nT9ziwxpX43BfQWkPXT36pGK1JjQT7bXdFzpkQnef4rjY6eTZGrKoA9Pns3TFuyucgy44h226uTniRnLG6",
  "key47": "28BrV9j2MgDVvt9HgHneUiq9Qn8j7GXbupZNBZJKToXAwVqr5EsyF2RkwArJoi99Tdwk621xun3NWDHDKj2eCduc",
  "key48": "41ARukCdhQ2KSWwM6W56SA6aFHQ5Y2aBFXMB4bhbVLKnKjWefBgQ7krFX4Zn85tGdUjQsgUpB1k2bn2UZZHJKVeQ"
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
