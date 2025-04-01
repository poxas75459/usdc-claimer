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
    "3J32Acc16Seahw9tdsburhwL2NYwG7f6YPnjjbTD7hYF8AEnFvPguxgo3xHskDGrCgF91HHGtZNdvtybVaUJuaHB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45ddFrtFUoJQnWmXS3FmJF48py7n2VRHKxRmbUqN2Qf11Bwz1dSMSMuBhbD8Lj7udQAkXqB9wQBw7TRa533R4ZpJ",
  "key1": "2YqjNA4QaxHemkCaL5YARL5Eu7oeERoa6YyA7QTrxM1Hmax7XXkmFVrc8PdK2BM3QvbqBHjhsfKMYiDQTLbZfzWL",
  "key2": "C34u2DwfrgT8uDYPVoBpbjhDQh6T4YHcZwFev271VqqUqG5LuKt4bW4U7aamwP3i4LYiEdxEeSrxDTuGwjgdpEF",
  "key3": "2ZzEocpcLDFdbbMkmkCASMsEM9nGqCvQWbW5Qaf2DhPQU3byJYDFyaH1jz9qCkzdbbsBxaVsjr6jTyqgSAfjjgs7",
  "key4": "44RxevR9eCafHyDnTWLC1jPincooAUVs6YHzjqXfFMfLUK51Y3FNHLffcMerejSrhBMk8So7oY5STjboC44qfVGS",
  "key5": "3kjWPu27MNQ3LTZwVPgJna46w6RPLJgsMaKHcdc4xR58WF3ewmfKL22iJhKt1en8xvq1R4HqzRkdTzZaxkWxhMGM",
  "key6": "2WyQ2NWRvzREZhG7UEcHcfCTzmerPueC5vm3Eg2PZdatURYCzmCxp4ehA2ptNqcUiMuzeksJVjXMQTPWRBJpv5mz",
  "key7": "3Th6UkVMdGcY9otei6CBQ7QuoEXmU828MrHztkKhPTAdBczxe9Wbx9X4xQ5R6UiokYQ3gcWupivrXgU8WJrRY7wR",
  "key8": "34X62Tk6JFLToHxuPbGoHpvmA6e6c2qWBpfDrV9HVWWheMPphh4rAJNwqKjyfxyvQkQoJ65TvzK7E5JpoFxQGV7z",
  "key9": "3bv2MpLHcpmnpiEM6d95DhEBWmhizV7U5K6qYm9qowSfHN15sHEEQp6RQ4QXJ8rmicW9KWyUXiLApZ8Q6dE2EVZq",
  "key10": "3CVz5TajANDEjfjbUoRBihKztABvEpwsTy3mJqwxDHCpwQPrvZE78vsoF9ai3iodTmSaLdeggiptVX7pCxeUjwrb",
  "key11": "2fb74kCvx5QhPWCXYyByP4LuhTH4XuJ2JyfHUoR3SSnR9kjcLUD8fbS3m7mAQHeRPEZUe7cfFWYtfGPZPbtcUz3q",
  "key12": "2TxPeuoLvmj1jdgeHGcbDRmx8Ae4DxhRTuMn5kFhh7MtMcsefJCTCRDxsAs5VC5e1dt3hWsZguKWvZUpre7nMKRQ",
  "key13": "3BSsvrB7Jj7ysWtJKU12gwMyog8Jvfg9CbsuKAPMruGELFPn3QicZyfgsm6pAmcxbQq96Def16DeDTCcXbgmD1en",
  "key14": "3ZA2xj5otSncLcT338npEr3Mz53MCWwHCRirEAnHVHaFtEWJjp9MB4twC1Yh4deUeHMEAGeWRhBttgyAV5N47Gsv",
  "key15": "5SqYmhWhNYhHJEdvnUq2EZcxVEN16FRDMJK3tvYqULVJnEqRzqzkRkbWMUbz9Lj3g7ugPSkYXW4HHC6eT5aTnFyZ",
  "key16": "2yZNCuTcAyMhu2jaGQfGiv2RN9SHQcPGo8wUjVSE6E128gEMx7Shaj9kWPt1weyb6FoVZckTZQVkDhZENLgUQy4j",
  "key17": "4hADHKaJKDxjGj261KcAjVJuJMbqqcf95QKKuJdKrfjEsVA6r9KDY3MvGq3n1uKSyeXfZKaWsmwXb2gw9V3xbwfc",
  "key18": "4Dv9AYvPYUd1PcjmmbngEKNx6mw2LwwYWfbrSj57bkdEeXMZSYD293aYp8SWrERNkifPUR58UaiTn6FvQR2gFNZs",
  "key19": "3nWpdopRqoYCqd7RiJfQCtT93dfYLG83eTdqikMT42iaz37nahHPk4yr8SSXJkBCji9psajK3bRoFUQ4q7D5ueW1",
  "key20": "3Vcoc2xHqFNeiH1b738r8BKZ5N3hSddGK5dwJNuP4FkNpFFJNrsh98tjWqdujPDFUo4W8pYAm4UaALCE91RHtdDj",
  "key21": "3us9bot7s8y1JL9rpo6XL378aJqedVgBKymxyuHKNyj32uMirLCezTSa9DuqyXvP8ZkUbSht2MBHtuzmpPpL8525",
  "key22": "123Lcxh1rt4SQaDwj7P932REar7U4nyv5KG8siEkzVZwni3YRWKcQMmtLbGVLqKUH9UTe6ELnNY5eeFPHHLxrUZT",
  "key23": "4jvKc22XeNTZR4XBPpuV8jhcJPbXu7EsCbxbXsrriva3V5MnzTtoQb5nLWMWPbLvdkS95kwYkhjbgkkQjSVTnqrF",
  "key24": "31FEfw6KctfWTbNHqYWthQzhhYK5RY7LVDLS3M3RZz5LCWHuFeryLQuYSgwK6nVom3QW2ip33Co9zKj88DEsD5Jo",
  "key25": "4L9iYRM4L78vpCiJdCtnhqCcJ53DtJfph6n6DpgQpzTQGVkCjp7m8TE8L7jVoSsRy7Z1wHkbE7r6wZvtY6JgY2vm",
  "key26": "2Hg4AwTsaSRVghDtM7K2V7zqCzrbiiszCcT54xCcM4jRhLM3FxgJWJNhoVW7z8Btf3FZkEGbiQtMk5DuspaMUHpy",
  "key27": "2zgfkTSM2D4ajDSwqCk1vyu1VLY97AN9mYBFzmbHiUvmcLGMjQFXDDMk7WrENUh4zheyuX6r9jumR79pSRv33ntZ",
  "key28": "4TDQZHahHXVuYTe3U12ZPjwwFce5yHe3KHigBMbuqfZGyuXGDYP5PBjte8LhPs6mFNpnJVgFqHeZCDU6nQMPCUQA",
  "key29": "2jEZ43DTsy1UrjNhdnEmwsbz4SsrHR9QbNECwiouAtMXqteSiVtQEE4FY9Cy7u6Tigf66VvkAq1ToyUnGw3vYx8B",
  "key30": "c6UAPRmQEjVWkVDkBRap7vX9xA69HTdkBwBaCmLqLAp2HNgKEXBUaHNehdy7tZ34xJhzAUv1gSDpMsMe7tur3L5",
  "key31": "2KsQ2RTBLTjXzhBYd93hCRgJALxMzdhLxzfN2CNFpfpUkCKsiHTQPYkBArsmoyCoZ99dUM9H6AojewMRof4zvpkZ",
  "key32": "3t1NX5N3VDsHziuXXQ1KHy98YLvAZzGZ915Gb1dctf2FgbA2zugSUBhFcyQac3Qr93G1NtNwpwbSKYPUTkVEgccc",
  "key33": "2yiMNRsDZbNs8dgCTtHjEeWdD8unHaEhFR5dBS1pJvA3yv41YGBKXX9YuuJa18gMtRnRQkTQpo6hQvQdgYeWN3y8",
  "key34": "5c6CWMDWNccaXtwUk3joPDtuVwQh5M6fkb6yT4qb5ypEv3ZejHCmZN3PdDfTj3yb3hE7NXWTbHvmsZfdnWEUCNNj",
  "key35": "dHFe2NriRem6hS1Xy2WxweFvBAGgtSr3QNER8ZsdQ4kZioYXkc1LW8ycxhFHQtMtkTYfrcKaQpXQMdMSP7wFxZr",
  "key36": "h5dXb2VpsHDkkgeixDu5ReMZMvEDGpaswuzZL8dscvCLrSRihjC1PaWyaFHtfEstB7XgGSoDCWZBo3JR1W5nHQd",
  "key37": "4M5RDwtEfriCj7rZzhZ8QdoyybEqowr1JTaM6frUgUS5v1FoT4epTLnNrL7g24fZYuxa426t5AQ2QyGM1qEe153F",
  "key38": "5GForgEiSUfh87QqFMQF6xzrVAH5xr1Kjt5jQpUeo9X6RnbvwDs7E5LMKpRBUZKob136iXBjCihxVmwjw2J2ddQn",
  "key39": "BasBNXZ8d2qKNP35RfCzHkG39dCGDTqmV8T8JuZM3XN2umeFEc9qnY9h4Rj8P49kD3HgLw9fZLHFXs1LjYKNPWd",
  "key40": "4EqFhLuKp8ePRsppK3sYncWDa5dXxzHXi7MTqM3jDyNQUmvwTF4pGXC4UWGTce5sT1YaYAHdZRo9bCZqL2Q6Sya7",
  "key41": "2SiKaLJLJ3PT6F7DG1DykfeupscT52toLBpP3TgYp8bSsKRsVSKhwzANFLmf8XwKfq817rmidrCs2HdMwxPzh3Gd",
  "key42": "2aHVt8QTqyfxhHL2K4B6sDF8yF3QRHcJQeTeS1aGi3LB7Z3DZngy5fuHUYb4FH41E5xEUVVg7RjEoeBk5JbDZPuH",
  "key43": "4NRLpC6J4AKV4QmGLZ6FVsPHL48x4q2MEsD61EvtiDR9RmTFZLxt41JeDzr4WpVgk5D3n1WknD6Qhsh873rAAegH",
  "key44": "TAGSwgtnX7cj2TYTKn3irPbvaTuuC7mNh6CnMJAbBPNidvE1TRqmYiH9mcjbnoryMxrhggkTfmQx1TTLz3sto7U",
  "key45": "3E7s4Cxz6pmEaZmwzX8K3CAgKosQFVsr1wehshTjBShXvFYqK4tXqC3vKdWxpDk9GCKBPqvqeXJHGNhoEoT258Si",
  "key46": "5b5hKYag1qLJFtEHzhCAatArpqqic6s1o5u2bQAVgEdygTGxvnkeaXvQxZxmLe1J5fZWxAhaTnazgjsLNgLm1Jms"
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
