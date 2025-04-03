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
    "QmGoBn2w7Trh39w8THfpo17mdG3b1ek3BMBeniDddxv6FSZWEduuZrn5x3rEAHAv7pXjuwePSXAEVv3NUuq4wGe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yd9sSCAZyZXtDJnJBtnaat4pa2vAZJc9ZFPg861Nr56cHoksitGWuoBrcbEGdVNdGGPumrXkjSWx7TA3jzkeQQu",
  "key1": "riq5AtogcqVvU2j7byX2imqUuSQkyR23juYAyftLyhmVQUjunyaC8zjwsYaHvn4QwTnK3XMpvDTPbg3F87J4XPn",
  "key2": "4nNKQsfGsjp7joEgr29rPs6swVbAYZKEtc2KPa6MVx6nGt969ztDwdgjwtwCT2SK1LeoziXihVQybMtuQ3dQTM2q",
  "key3": "43DCBgiVKmT6sS6GzEKoK3USwuZuLkVtPSzwymX14oc8d6UdngimCZZ5tpGqcjXtSmsjWPvJa3R3omveAE8qvBs4",
  "key4": "4i9weJCbnYKvDrF59D1dvtRgxih2EPVgLtenDMLGkbAwDDpVMh3QLaZ97WF1XopA3LiEuTrEef75GXhEwuo6TXvw",
  "key5": "TEnsajHekJt2mYyCdgtHjJUePr31eSpbCnufnFDBL37hKTVM6To5PMtUBPKRSvNko4R1o2VjrsaYaCVKmA4ZX9R",
  "key6": "3z8N2aTeRdr9wLmxTU6oH9LGKe5S7RbYx5TTsMdHjRnKWVZXvW7knjG4Z1r1QTXzVrpBSiUDe2NtBysUUV81mtaa",
  "key7": "2qWg9fveGtpaaCg6sxA7Rpbt56YzzQEh6Jpxy2V7pLgTwmD5mfsuCHuN7EiREzgW24dh7KV5S8xDNC4xXTKddE9s",
  "key8": "3sgoWuz4Yt3U93VrSbUqbhw2vZYQypzReWEJR6xb8PWwHSUHZni8aaqsj3jJsck4SZSBYaviaTzcnNVdrKSrxj5k",
  "key9": "4Q2nPfVy9sa8G2iZPQs6pXEk2gXCoaFp9XL1JhrGPszY8HUe8SsCYNvsXTM5bnQqtVhU735iRdeMeJwzMtq3KTEq",
  "key10": "26yXtvoiuMsqwxUSprdKMRM8xoq2CgsqQ9aJUaW3myWjUMrksu9Y5gBxCt7RuucfL3GXhqcArynjQjQcoNa6wuKt",
  "key11": "5F3edTBp2vJH8e7n6iv1XBnmBnTQSV4D1UmuQNvm3P4UMvCxZsbGirNwyjkTQBnAzji6UcXniiCvQEeMHCkhoRKU",
  "key12": "3GsUmgzqrNLn41ZrWSHRNDEc3fTL9d3feGhzjX2pZe3EeEkKJtQhTo2j45kkXytksntNEF4Q7diCe3UrLAf3suCR",
  "key13": "3X7JvkBLZxp7T3MtibctDbfjPoaNQfMcuVmNJH7po1mqE6HA8xViNWTwi8NCGW4keyw2xBvqWUtVwF5rjP4v3MHZ",
  "key14": "4K6dkdJZs5CcsXyDyQFVA5z97LGS9W1pozCLc8GqRQZ1GyTJhsVmWn32tk4jHE8EKdJo32SmSGSHjUsinw6Hs4cB",
  "key15": "4KoqGyeKTewzQvXUTEELUt5yLRygWrQSfqZmSJAMyPdsE4rvJ4YdJup8wJM4SysVFyQ18ij5Vn8xdoovK92sEaVL",
  "key16": "3WbkvW7BNdU656P92scyXPoehSQXExga5v4p8iRHoKdpT2UPTQVjdkNXsYZKZaRagXsvLHKCcRiKK5vKpgPjgsE1",
  "key17": "5ZonyAhbea16Fm4g6xGRDYryYSdGEBDQuxeofxo9S7PNdbEDq1yi1fJVVjwMaR5eDGUgZLnfv9aMXKjiJXZipSq2",
  "key18": "gDp75g1VeHGiQuoP2ysgGbcxN3ZuZFH7DGntAz1EQ2CHWXYgFYuDax8dVPs5H1TagzVXEvRkvhcrd2GJRdPZfhV",
  "key19": "21RMWUgW6T9jtn44CCiyhi3xYH533iNHHyg8hPcfQkB9JgQqnLeKys3A6C3JH3nefGx35fd2USQ7J1EEoNGTYYQh",
  "key20": "5LspnS4NrMnEeuUsjUmVzGo3g6TSCJ2t9PrKYt5zLhqcuVGRmghaB29bZMEXzEStGqTnxErjyCLPesKtGtPUzttX",
  "key21": "27znWR1rNqFLz3kmatujz9gM5RFvXq9J2Ebk6gn9M33EC1kd2axVjVTjDhmEm9o2nk3vvCxgmN1SAQhMpgPszXLX",
  "key22": "5tkaP2pWyEUQBxF5F9JP4mjBKRY893dLUhUmpm4MvNhWJ27JmKhjKYKGcry4buog8x1SiamygX5iZkMMzbo3VKBg",
  "key23": "2TD7EndfNxKUowPFjMpBb7fh3gSgCcjKoPDn9rtE7ivXaxYp6WgKcqPxnQoYhk8qpD84NzkoUo5t4XAKjh4CfvnP",
  "key24": "48QxmBzBkA1iDyqFc9MMDe2HYuzdt9wH8xq2CCEtMBsGHPV5W9zPtuNSg2MYd56W2v5PyALLDSeJuiZdFoodvzeL",
  "key25": "5Fnuw17E9SmaesP6Fjtj6xBPUtGpfysUh35DowPEi4iiyj1kv2hPnVFkW59TXytZxEqpTGnDwnkkt3xP2cJFVu4H",
  "key26": "22hpWLFcGQcJx5QD8SisZX86eYckcTJhm6iQZjFcsuZ5st58xGt1bgN5HeN9PDXWEFyym5mrG24fiFNJxVThcKA6",
  "key27": "5ryc4mY5gdDdM1nmRyXiJ7J66cF7NfqJH7v3BJSyiw9wYSmKLmYqU5cunpf1n4qxTG6ZHR4qmhqvAyckWcBbvNpS",
  "key28": "2Vm8pHa1PkmtnV9Rohgthh2Tvvw5fD3E48untcC4HJvHZxkassCwTsmJiEYWnzaDePZFoJDxU41h2Ucacaxn88EB",
  "key29": "2zBmQbAML4QzdaZCRT3Hmr5LGoGB4BvicdaoQh55bHVeQnwxFrmnAzm7xvwPbH5gA8TkThbp4gWARvoZPjaBjGuN",
  "key30": "3T5XsFXNWBe9SgDwDxKWPdgf3TdGKJyX4WCmPsLdjzkTB5XSMowNRB3VYKKrc9XG6BzxUjipJAQ2m91hJoJPq2M6",
  "key31": "mhwGbd26CQexcEVWEpP9utrXdkmhNBe5kHQRRMp8GeM9fE3MT9yNZppnDzv9DkE4PtNeNvosx4qAZiuEDj3xjSu",
  "key32": "3juFqW3QPK9vfkWupnrq11EiMtKqRtGXwrFCJjkijtyugsWTQBwedCrn5udH76JFkPwTSfEeiASArqujreEWaCsH",
  "key33": "2AcZUioaGa8Lu7xQoNnwEmRMdwAFE6YfGtqpfjn7TqLGBcmNakJHMEkjyt6NWhusu2r4fM5R7HQAb7Bav3LksnML",
  "key34": "TnEt2NvT7Vmkuq1njGL8pAQf8j3ggs36BHriSkd4e5pzKArj2QsgUQ3WChXSpXPV4bBvzW7EFjL5GyLvpiMfMTT",
  "key35": "o9xrCyLqNoMNkZdHCZPZr5US2FiaH7zm9BSfkmM2TDmuPEv81WeWsbnGyL3VCM7VLrioft16sAemEZw3Pq4nuov",
  "key36": "5xkdGykrVAqKvamXZg4b4ANorvTewxkSHYq1EQ5hPjquBuK2JvaHrQS373L4nocTpWScEKms2z13Df1ih7mUQHab",
  "key37": "PVv5ZDc735tBHjMbokgX2imrJp3f2KTNKSjBdKC2PkgmmSJ6hyo25V26t83u9KzAPW1gRDngwuZgU5vxHkFS8AV",
  "key38": "4Hp843CXLo9iotrgnnPE2CD9GqkaCNdtYcsSv6ndrt3fDexRBcs8x7txdK56TJL6TpYcuUhhvRgNGYexFM8UFo4b",
  "key39": "5WxjK2cQgrsUR6mGnuYy4E4Up7LRBVNTyWZn9YLS8XsM3tT1Jq9r7kR76PyNRL5zJGLgmbEnTToSZ4YRGdjFGYuT",
  "key40": "4Rx57x6dv11RyeYRqRT81R3dpKSpnHGGnz51xMbZK3eLV5riEcXPhATi9XduxZcewL1ze9BFCZMWgWisndaiuUMS",
  "key41": "5yNXtTw9wXk15nNDAkspobjNfEZG2Z7E8WcQSjQCq2KgdXGxSgXg4PW2HZYjyW5QbivnFipui7MA1g8jLgdVswLU",
  "key42": "59PFczSiFFeEJDEY2wcLcxB2nvKbX9oPoAHPNFDUgApLVjktLh7cvmRYfXrSDd6bALCiJFGwfFue7EQAFuhqPRHL",
  "key43": "vV8Dy41Qm4QWazTw9M8wceafypCD9wyRaw38bTqDA1VjURqNKuvsXLpuAs1YkSgs9rYT9oGdHTQHfUGs6Jrt89b",
  "key44": "5gX2p7K3htEQ83mZdyNsRwdRSUGN5s183GLHwkmnUTaPph4ioWyjZRd26kKg1nK9YzMSXPjfCfZ34ywyjBSeAoYq",
  "key45": "4HCSbhKfVT1CF9CYT5m7rBzygP9dtEjA4BzKBEAmYdNA1TCvrH1Ntp6wzFwwsZf5Uxv5pNQ1miuYumYCN6NuHt3y",
  "key46": "2LNtraYoLVr6SiNFHLyVbnfT6kHENSy7cwH8iNgzF15mtr5LJy8yw8hvD8uDpG6GsVmVMb7ZEs9j38grnEs3wBh9",
  "key47": "db77gN49gX4wuyCUh19GmukzpQUW8jGEn1DBiiEx9dokWiKEztgUC5UFo4KTQDwos8H1mo6wfv9wJkUjDA1zcD9",
  "key48": "2CbQ7xv8sZDfABcgWEe5pA4zszkT75JrGWS7fqnEPkufYmDq2RNpy6tHNvJvj59pCGP3KsG3HHDbJLFUvA42dZce"
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
