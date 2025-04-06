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
    "3fbUWcM3vKXM6sjtt5FeWaLLxYzcT3aUCutTizkcvFXcTS31o2BKAf2bgwiRN76iV91sZgVpi6EW4FErWgjSCoXg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65ZjhPrx6h1QfHCvw8wvBuJ91EDxpxsAvfGZHXut1V5cBT4sYxJWfFYaiik3EKRXJ1AZxW44CY49ScF43ESVE43X",
  "key1": "2HW5AKg3sRzyMSfNBvo6ppJysje4xmpbQ8r7RkX8j6A5QfRZYLVbMiU75c3Z2vfExo6czaDCPi8cY62vim4SwHyc",
  "key2": "3uGfeJLvhZEpBi6iGZ4wVmG4WxKJeYkFsspVKrCqsBvaTREY28gNgptqZsKkC7zYJiVgPoEbEesfEw4f7pye2CfB",
  "key3": "5mn3XQmX7xBkfwxyaDXDHnPmyhdUmZNSUMx2G8tamUpiCMJKZxnQZDkMud4ALjRcUzJ75NrnrD5mC5jjmcKRFx6k",
  "key4": "uj1eVcpYmxgJASkyxvkFmVwT7oUCbQ5oAVkzXc2AVk4eYebNYYrNgbPqVMctpHhZJ4eGjFCoGkMQEm3y6b2ZwW3",
  "key5": "5yb3cwDbQiJk4t5MVQy3xsPibG8UqCxXajaL1NCnhRzC4Pq5xvN7zVBX3RwrQqis5rbWwGMPXJnHkqYvUfasUPqp",
  "key6": "5cwfTeww4kYXC3TWSFNZc5thTjFvjubRzb53cix6wgxt6tGNoshA5KWi7oJth3tn3ZzbHV3PfxCb9Cc3dte8H5sA",
  "key7": "NEknrgYzcGtGwSXikgWBw9CRgUhcxt1KvrLdcjZsmskgUdofcoBTkrzKTyHpJn6G22wC1Ux6BMTuadVFEVyBF72",
  "key8": "5WvmJ4wzsog5ji5d2YMhBWAm58F29swSmwP1u7TJJRdRWhEXWE6k2kvC2AfCRPaX1mGeBWoP9BRjdTSx8qhF9WUJ",
  "key9": "7Dj8XKzfQkhFWX13LMLEYPceCywtnN7SAXb3nHiswLwJsKJU2fCNNLQL8WE5HFkyRtRR1DD6k3mKAxVAu54gveL",
  "key10": "4tUWNhmR9LBqhpCd1zbZPsZyZqa9TBPUH6cMkchQTMDJGuNVQQKxYv4pEupRanw8SiU1FH5p6BzdtGDUjPgFkG7p",
  "key11": "53ZA2kvr8b5HsmF5dit47AzGaXTaoaEhyxq1oCQmRUoiz9ipgUZ3duo4Mx3bfaqkAsPaeuwojneuG4qTqXY1cz4k",
  "key12": "2oqEFeMw3ymkvfWprZH2Qb4hYhMS2tRSfWoKB5EADxSWq8k6xLJuc96skskTTXQDCQFbjw7bmREYVdTWBHsDr7Cz",
  "key13": "iuqnaTJMeAnXjTvtTBwYz24gYXtAf5tQLS8vWzBK7WHFwdDJ6APv5WrBb1k96jS4rz5uCWNF6g2SMexRoM91Hdz",
  "key14": "4mtwZ4tiHoyrwNwgntWvR7551YrvJUGbKp2uis8VrXvBFwoc9G2goFzcFoEEuqfDwJ4ate56GTkC2WaJkEafr22a",
  "key15": "3dz1KcsHcgz3uLgAXW5SgMwmzc4EVQJEEafsfh34AJEGmBgJBTGhr46Pcq2ePiVskvWc2BzDFjnc26KYkS4bLwte",
  "key16": "59G7ZGNrcRqn4jvkupTeK1Z8x5mUL6cR69EXEkG7pZ2CxB3obVMtA5QdGeJie5B39f3n8Vvd5SYBfcFjHHkt4nzW",
  "key17": "2Z1yWmQsHVoNV8EgwL7Yh9asoGZsZwjWnYjwX4QCmyxffxcwyKNJdZbmPQrtps8wSUZj5GuP2YB8i12XQE6v6yba",
  "key18": "4AQT23iFj7aXnzqHkf2W68gMmK3CB1qNd5zkCdDbsd4uqRV87aBSk8yyZeEYJaYLpNxs914nvMYJU1ftyicCHXuu",
  "key19": "3sxQqSs8wuyN5xJdzo6z4WDhB8y4i4wqg8SndWcTAYKTdynJkduv99mpAYVP6GFFE7ntksPuMHBChyC8LLz1GqZC",
  "key20": "56ciKSj1YDbnz4bjbm4s7sALa9He9eogVS4wcrp1reYHLZSh1tQRG1TuUdF33FxgCxZBEBRaVVQ4JHjRDbSPp5Ci",
  "key21": "5TKWLooWdPm8Xa9fuJckYJt3dQDUaxu7mtB9mrB96kFZ11bxbC8dcVv3FXpWsXgdGJhSHeg9o7i9uXbfmysNpZ8K",
  "key22": "4XNYCZrhJLQPZ3DGCV8f1i4KTHBG1tES6oA56Lb4DnmgX4JTDnh26tmPDweXzYtGBaoeP4bPgNXYbLN1kWwqYwDb",
  "key23": "122pJ8EoZrUa5JvDMpFqvg1rMXEmvKZ4zBcCi6Mhpo1ZeUHBEssQnMbUQD4h7JpbWJGsKNUmTy1NQnRfvdPV98jQ",
  "key24": "3RveHiT3pJYTmALcGRb9ATE1Ts6Z1RQTmDnQ4pWEmJ1crrEptefT3aVMz6X9FQjvpjLYMCeYNbEoM5CcVJd32DcQ",
  "key25": "2gkJxsBoFZEmjLk8ocRHMPEtzNheMzLewkxbLNczXCrStuZHgbYrUKqdugnRo963YGcZo2PQ3paDsTD2E4yUb3GS",
  "key26": "4ngb81D4NzAbiXcGzv9LbkztmT8WUw3rxNtQiaCRvPSEvvfuWozj8AExRQU94282eTufBKYfL7XAyWoNEGxthKQ9",
  "key27": "5CdqpGzRdqQBrnAwoTyCipLY7unqfCHyEqiDJTVK9uUVjs16Qu21Tn57tw2QXMjM1nQhmTT5vMgwCqUEBEpToJck",
  "key28": "5NsHCwLLBH9Jz29Cwe6mqgJ2mz1fWusEKErUAv4CQj6vdZLeCw7BrbBmaR2h27ZcAhipwU5QQRoMspfYvA88Trdr",
  "key29": "5CjCQLK3QAj9KWGjXerqgFbrKWiL6dNnp821mBxG3CDiJSBw4uP4djaAm8Rfe2KRxvpTVcTzdf5hwtGJhGUw4cUL",
  "key30": "4vA5MD6W8jJ1rcZ73XaAq8gLNLGWnvaw3iDR2KCjAqHmdcw1Th3MX9BBkPLYeZahHJbQaA9f4aWXwEMxKtRtmVaK",
  "key31": "5wzEVwqKtaxWyRZAgXWbopJ7tpiiPW1JBFJ8mx9GFsM5HpweNTYCmW61PxDiE8PNA6cY7bAkAPoMNvXJVXhBWzr5",
  "key32": "3Ly32V6RCJrG6tWopAWDPYptgq4q6qxXRCoB7KZaxEki8JUiKXxb2sAatVjD3d9rP1vtczkiLykMSUDjC7tugBym",
  "key33": "3VNx8ryCWZuSKHB8NwnaQMre1qfUDLFz6nUiLg9V7pzdSZed91te9HJFThk8teCuz88DK1kxuUkURwVPXBXkbRY6",
  "key34": "4fVtmH1yfftRy7aKZd1PerfNk9p9RceEp8rvBNrS81VzigrvCfgTv19BYJp5xGH11iyAe5tCiKdrVefnUf5NxspP",
  "key35": "4yHkf8Hi7ZfPZvkV1nEmfzuhwBLDM7uytPXpve2VRrVw4wPdL512TMXSDaiRJrxUSbcu7wik24yaDv1Wegb5tqPF"
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
