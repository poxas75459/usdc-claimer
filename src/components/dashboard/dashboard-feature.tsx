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
    "3vkE3ADUKi7cBzuz3as3bMKrhQwDKjd8YycD9f1YdPMV4sLNLTf15WP6M1FiTF9h796pD8CinuzsvjFU3zieeF6D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66ma9MJtC6ZcUvtNQ5GBM2wefsws8TrkCZ3BYebjMVybCxTH4E9f8rzAn4Mm87kHRqaAUDmCmrPnStmdSpCPTzDc",
  "key1": "4xqXbJMf2HTbFtqVThSv8983h1yCfMLjHTq9fdQPSMrsQHK8wJ9tgv7kpRzsYqwEzGTR2CikAogS2AJjGhoJ9qHR",
  "key2": "3ERtfFKA3cNs6MEBFCaBLgjCXkGUHxMJSyHRnqWSJWXs9sU7VuuhiZ7encjKpr7Y6pYFUgUDsyn6uPS3Zgz4ujga",
  "key3": "XBK1vmhwE9WCn2ANUmwFG4MJ1Y3p1uSVALyzgJSdw39hD8AthsyQNMxEF9nan23WmAT6e3NyQWuVzYF2KXqehhY",
  "key4": "4JM2DorNpwDaSY3gUdbYykfvcwesJGU32c9RauCVvuR7EH1YpXJtxUaCw7nTiHgprKyon4CgP3K5SYgvKT5vtziV",
  "key5": "qw59553mmTn5K23NCoASSbRUQdQwA41SMGqY7dbHXvPo32CZHZARMaLXNg2ZuvDeBPsJwzporPBk2tbQttSguLo",
  "key6": "5s9oLQDFzZJpxYXFALXev1Wk5YRusZq7TDLX81CBwbH453mf7gAuUfBu2iCRtJa9NGZxKjrochq1JQ56KMjjr74o",
  "key7": "5sRMiVbdKPSQMr7gTZ3zxiN5vA8dqnc6RUTCc78gphPRvJWra7MECAfcVPcWu9bBszG9WBonSzAY4gF7UVooaSom",
  "key8": "3S2TMhAg1PrHfzDzVStCfWbpo1htMZhhEEa9Uvz7CzcQE2Tq45dBntwyCtQJcmEHFXiiPUz5eBV1Y4sKRhen2B8q",
  "key9": "5gy5SsbFHpPXKZ9YGWKMztZgu2XUk8DGxu96F4kasRJKPwsFRHgrwNq2zskgb61aFAPXXqQiSoHzbntyyQqp7MBE",
  "key10": "3yfdKLb8bzoW3nNsU1yoqgWCE2BWJag8x8uguPYTR1pE8uQMtopS24fY5vEZidCdQ44ow93nryqxiWeDKtWJegdx",
  "key11": "2r3jsDazsHxzS1E8CRHPzKq6mNz3pEWuAPgnMxtZF1N9oWVJerAQbG81DpSzgPkqyoxzSoyjMfetVUV46MrJ4f3a",
  "key12": "4wkB6T5EREPRM6cTUW75JTGNx8Y81GsfR6aUVMcQMmaYEgmopWm7P58JMFuV58wbesFyvNTPpXACiWBRuiRTfQP2",
  "key13": "27m4aD6mQxczyCb1orhqQcvoXmvrxei25wpLamLyAsEPMqXPT57K177CwwLkdxsjmfBgZ3B9fCkgctnVdyd6QaRi",
  "key14": "5GvJ1QeA43bPgw8fJWGufboDNShdWPmaDTXnmS1kZ9e9fgumSMU7U1sLF2Zqpbtinmwi1tQRAH4g1DrX7m5b1yKy",
  "key15": "ZWc4z8WXFzzPaNP3yRo67BHz5YyYwrVi5fP4vgfhUAojrCPk24y54LBqvNz1CR2xdaXfFr5j1tQitzF4U5s5hwK",
  "key16": "8cBNmcKcbXQrmrjWF2LcdK86N5Zx3EGqeFhCUgtpMxA5Dpc5Pcvw2XVY7ozrsUohE6i5vfFTwxynAtLAxGs5BHn",
  "key17": "37XTzWuYrTMu9ZS6zAkWc7p5wiESNWi5MEete6mKs86rz2fL5jRg9JZz3jfsW1jTcjD4VjBJ66n2apNKSgsdUqcM",
  "key18": "T3FeZXiDfQKtVS2vzkmw3ECySXSjLTFFG37AXxB2wDeUpXxdmbiqq55HthrZXDZDJnXhdxJ7LQ8PevkwTvoTX7m",
  "key19": "3HV73ZzVu4JmUeH8cnAA4iSDdzkBCA62BWzP43TmAzJD9t4LYoagsxyBaupAs2VBThWPD8TZNZwDkV4uBffa7nR2",
  "key20": "SbiaW9axGrAzvdyV6sC3aEociLQiX2kZiWsZQzKzkwi9eAUGDHg4V5v49aeJcWvv99vLJs6NGjBaFkkkSbTrTUh",
  "key21": "6MTiX1Kv2veGyp2wX7ZE5KaaMcXqxcDY3pCs96AjHNe7AkXu5jGBBhffkrjG9ofNnZegmAwmA4SvCvEvj4wXw3v",
  "key22": "Fsgir8ZGbG7VUzkHgunHhKXSBQKsHVRHWwAYyQjPRZZN7tyfzTr9jNsb3qUGfspwx1YoMm91ZHr4t54Y7Egbw3d",
  "key23": "45uNyHeqPn5doMsxmUdYLsHNs7kV3BNscoEAUYRRNcHdvTE1YPqTpAVDoZV3ojjS2sHZqphhNcAj97wrek2iRQH",
  "key24": "2NLxmnra2CS8fa6jXimTukiaahqsYdU9kpUpXdP5N6dASBmiRpnxrpd5pqWHSycG32UMgDaGTKqeX5e8wSjgzT2J",
  "key25": "34NogLMM24umdTZZF5ppbbQThXMkGa8z3VuHhTVwBbnmPtqaqWpn7xPEMczzA1rZZGhefqt61pfc5r5dUNrYyBey",
  "key26": "4h4rMGoyKiNiNiPguv5xbktgUBZxjuRUZq4hwPHiXmJ29k6jELXxC1CMUGa76QgcLxTMF1gTh47md16FypgMhvVe",
  "key27": "4N5HCUQtUEZuqttnJZZmR2bABcazfnZU2sbL6V1Zh28JX1bXK7ThUcWiwNe13wrmsKDWXRLwFbUBC9CUy4BoQGb4",
  "key28": "4zyVnBuzzhtBkW38CnBNPGD36LKRK4vT6fqwJGDVCGoQMriYtHahJfdZizuCqHx5Zviz4ipJLuqLZd12NhizMLcf",
  "key29": "3kniKFgpdgTtZqcFV9camLuG8a7MVfEG8Gm82o2b1ud6D9UA3YJKPkLcHuu3WGhHTZsBGRRqx1ZKfSQSb8ja48BY",
  "key30": "2GpK5KEvQp3uYeR8eWexWCLpGtWnApmmomgTin8QGdnNwdkxHvnkYvoyBRMZjR8jPL935PDWM482hM9ombCE8NRf",
  "key31": "4GwW52skF6wfnY87NhAZE83hoPFmobkgy84nAoHTjAQHv7HRxawju7o2DaZBUNLtjHMS4kdxhW1VmezQ1cLtLeLQ",
  "key32": "4zwGmiK9Qr8aEmUPzBwMQYAyeYDsnjX9JCUpHpuSwxjB6dbRncRpTQcXZYv2b6Eju3SUpYeohpRBineTc7XKnKLk",
  "key33": "4jFQxNk7SfKxfqu5VRXiywzX25Htb8N86ckRjocfjc3cAyb6itRigv2crEsyaTq5is3XWsxAAVpeihqHmw2D7S1f",
  "key34": "39UNTGVHkHfJEh7pnSjvrnG6FYx42LvGnNw2nWbJ3xSeiEP83cvcvAdTNTJaz1CUQMDMi7LXjAxpcNm3k9EJt4dT",
  "key35": "2y6hBRqpxXmE9hQkPY5gCRHHQY2udwX8U2MHhSTrFZRZNTycvg2fTm3rBDoDXF63dkepfH3PdeJPKMfNXikidRWh",
  "key36": "4YgsgtSyjPgpDB3m54tzziNUiaPTcbHdkas2JXydZVrFSpCETU8R44a2MQkZpMBXsZtfdNntWWLgit6mA1Ys4sg9",
  "key37": "3vicT4PWNcCtnjXW8ZCDwKfC1BWgHSGLbtDkrKrACvBEXyiymoj9mXTttRYyG6Vtcw9VomVVE58EWHFRHyL5veoR",
  "key38": "5Fx1Sd8ikGGMfTjH8dqgB9JwXWFao7cZT5beRvXboZo7KU58LJkAmnGHkTYxGc2o5jP3hNGKrs1kUn3LcPimCYiQ",
  "key39": "53BZYYxvC6t71e4Yny9mkcakLRVAxuguFNq4fgWPNAxJABTyb4yiL41vLdWQ6iPTVM2MpSHTFohDb89hrT1ES7ts",
  "key40": "4UDW9xBm9tvAjPVrmBjinaaLjNCYKqHhNq5xQzdyQTzq8p3d72tKi7Wb5ABaumt83Wt3bDDgypCvfWydADMsWE82",
  "key41": "49ZKkLw2jSpGjuNptHtZCLrrdxpYDQKTaRtgd9wEi3i2qVgEQhvMEhV4KY3s8hAuZAaLPcaPJ8PTwsDhy7eXu3EV",
  "key42": "582SyGAMhqcVYorYui8iKm1fNeQo5ZMd1erkGy8ny8tGKz5YL3c8bvbmFMXiRLXVqmU2ykGsmqmEHJzoFCwDYKjc",
  "key43": "4ET3ozfaWxLJEQg5qmFXewMTLzsJvvJFNyU6HLfg7zUWMiDFpzjGUMyH9Sq9WUNV5A1fWPwNtYNDhULrawQtuM7N",
  "key44": "23t47QQRV3wz4uWsJjLkbNzs9yDDQdK3t94DN4gHKfMb2v4ynQYRFfPT7DZ4f6iiUhfBnXxtusRLj2wAnRE9Xxj1",
  "key45": "2F86sxpsitApcJwsGZKr4uG2G5rYjBAD5vxkcNtjsw5uwevqUXdqLc4wQsV9ebYPThAHod8pT9BrD8jeNTv9shuj",
  "key46": "389CAfuX1jNpF4PrRCbZxWGQFQ1itf1t7BsspEW8QhEfZZWnkjUoCZM5KLQMbUCMK3BAc2wgbtwcJF97AEMaoZY4",
  "key47": "5YkJWXPZX6Ao3MGxpGi2mKTDRhHUD8Db4oLagE7PSYbQA45sgmXarLb4M4kjgJ14cBX5wbrGNPamEYmYP1gcd9mT",
  "key48": "5GY6UnrxV32xBQh5xpqoCZ1tbsfgctmVNvk8q6oNwtACQgHKtzVncvdNrdK5wouvGzTa7uHjUjArRnpTDTdBWkK3",
  "key49": "4ENSQ2DKkvu1Y1xe3oTiqqweBqFLi4x3aAKJ1So1UwdbtFVirVaBQ7LBAAWS75rQFkbNiq2eghimHvv2tTGCZiv2"
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
