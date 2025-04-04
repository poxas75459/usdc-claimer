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
    "21mnHagFhdXj2E9mtUPiHZL53UXRk9USiNEHp5rHAZzE8AC7XfuKrpWMJwoZQ2zNsPR8jPx7x2k5bBcSzLNN3mcd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iQBZsPCwkuKfzTN4sCakbogdsAGrDu7rxjsPfiWaZVjvKeDTKfseMyqnmMqLq6Rc53io5GfJxs1LWF1tAdiZ8fn",
  "key1": "5YhSzm21AoyeRQK5PR5NvNErDsckK7MjRLngYfn3MCAsCZ8jyx3aYZscvZEeHbjk2eWWsoa3jLgKWMx5CdMzFZuq",
  "key2": "3cprUfFzbbTUYdBJEPpGah5DyBMEbzxXLAsUtZ89N5N22rUUjVqVz6zaDT6covLNh4mvJkGM6Xhy5nV1tRdqGAnR",
  "key3": "5Q1NBZpdqsMLRg245NLD6jRaaEe2cJqdtM7hsokDu8ZoSLwDWzwiHNNNjEvAqcUe4HEXqS8AP9JZ5cyy8yh6jUBt",
  "key4": "3Qf9fFJ6LCyqWhmAnjUo2vK28chXKMuAd3QgP2eYcBfAgB2iR3QcfA71rP1No76xgmruuJorV7vTiq1AMSiG5U3i",
  "key5": "3nEH8PHeF9AH2UztegcBKrwmt4LYMZ6FxeXBuwbH8gxpibkcrfKNFTXhNiJ45UBHdP83G38V7NN52zhrMcRCqGPw",
  "key6": "DqZdoK9P3bHDgC2ADJaCGaUQjsbeeGFzMwYkMeVJEBwg4gNPKw3itzZQ1t8fx58J5ya2mboFeV32UTuLjbk4MzZ",
  "key7": "5prwRJsUthcmaYJksJTewohNh1fP77FbegU6Fr7TBadfatmkmf6dH1s7NKMiXyGgwVxSvEm4sd7FMaTY9EBxG9Yi",
  "key8": "2bfvTm66bKu2zejxujE4M5VjUUejWuH8UhFP26rnNkZdqtGM7iEp3yQQ6vxmt6ZNjQqczdE5qNHTq4SZQ7BvAP55",
  "key9": "5aRYeCVLzPdX2HgsT6RbRwCscXBGT8K3A3N2QhKrwoHbU46BUwiyQuB416P9ttv3oWVbMDt33q7s4qm7zoc8ukez",
  "key10": "3SsnsnZzNDyLW6SVyGXtD7FoZYNRBuvfNPcLduStk6HXdFBwzvD1d69PEzFWsb2kCrUfNwA9fdvd1xZNZ9vxwyeD",
  "key11": "2oqFi3cZDceu4XQJYxLUUdeYP49Mh4hYpjSimaBH3hLPNkxBw8hBVSf2yPBYM1mNxMDgZ4GuQFPWFz9ceUZvzErS",
  "key12": "5Mhi3j64aprrsDKMeSq5gnrmwJo48ddsnYgkK73gxqwVKLzqfX1mgbdmJuJdKLa54LuR6am6L3uc98XPVB83GvrD",
  "key13": "2uFF4dSEKKXE9zMkxJEAapuV5rjtCaJ26nhCE24UqG5HgDya8iczzay1khqwz8pxBdCWxmEiPAdwjc8fJ4MUkhfb",
  "key14": "5qqj57x5bwbZ8aA1hmZ95TTkBWgSzPvCsDjQBevGaGZQB8nidfTfDCLH6dbZVjbD71G27s4ht4YjDNkH9TDX5K5e",
  "key15": "5PyNyoC4T2bSMU5fXr3tNfFAXg6MNiRqB4ocvbFHdfcxRfBhDLsBT2UscysNP9forFZ2VHpyXCZZUFsqqhHsx6xT",
  "key16": "5jcsQvdn8sj3jhLYRryS8inykSEnTYaM1tRVA1BGkKmbRKVbBDrBeZZc763GCttidmCFu8gsZaqyhvt3BXPNV2Dz",
  "key17": "gJxmWpPCy3BmqV1sjHrTttT5R8S7UWTn8CLffHcGiH95aFZx1xh77DxX4zi2jZyZLJz98rYPMRmLNDRRzJBmdSJ",
  "key18": "3ANusfUJSGW6Evsy27ZxAVUzD9WUSXEeHbNPCPNq8P3t3js5G13HxzL2GwufYUDpTJrDB7gPXwyqSLbo7FYNh1Wb",
  "key19": "3kxzhzbJUNYEjpNm3sckUfdB6JmXb3kEgRwzsoXC1xjwwEmr8nQT1JUzQJHMaLCjgafc6ZDZ368epxvv4KHrxNSw",
  "key20": "46GG22VNvNDFW4uD5SUo7MayzMeiV9GULnjJnbf3vUdPVPHhLaKXxG3rTpGVmu8u5JoHHdhBZvKHL3AKvWoEN2m5",
  "key21": "PG9Xi4YxsrrNkxZ7r5PShDoNjn9rUkk2XhuJZuZnKYG7LzCaVxanc32rPn47WuuLaWM5KADauAyknnbJMB8DCEr",
  "key22": "3RpSTh3YnpRsRR5H2VcVDMik8zH6aYuCqeb7LA3bFKVBJUyx6H4MdWjT8sscmBLbz3aDLqKwapunej3ocgnEuhko",
  "key23": "5ig9dYwyXhm6LUBuiGMQxv4wKybrHMAJxvwx94E7ARJqPdJ3W12FLdCaXWT73QBZxL14kMHMB624xCwFPR3Bzp1j",
  "key24": "3qbXz723VMZXpPyRBsCkuw6U5b7wuMTiKgi5J3qFGb4J7txaeHCwsrMJe69sw5EhG7D1bMV9D2aesjPJhQy1CwVW",
  "key25": "L5Y2iSosCVgWaEXL2VFWXgJK2Lp7fk2djtVhZUuzWKNRWVPAy4x85xWoPb7bEXjPcSLj3D9XQPFKHncfB4Cc5AR",
  "key26": "K9g9enusC28o6sjVwEHDBiH78HPbMF8H94kmVBrZYNcFjhY2Yi67PLEtAdEfJLDMmX99wsvehm71QCpJVMNgBfY",
  "key27": "41XweqtDeBnyzMThWomLPhcMsEoVAjKu8Cina6DUPQZAEPAQLrzHpqLfoFtwfNcjHnSzj5XfqQPEayFnHbcEsWSA",
  "key28": "2FruYXUbKEPqqvo3PnSeekp2wTzT3EUa4yUFUd9NPihB99XzNa9yWK9o1TxWvTkjqhbyC9axwv8h9Vs4ZANuDccP",
  "key29": "3FpYV1hqpve7JTmGNVMesURPin9KtKKWoGrX1291m3tZ8fHswMu9caWEjVPg8G2M2Lb7rLRmD2WsogWQcqzjHFqi",
  "key30": "3RwGbxjJvDYNjBFcGJFLhtTj4ATiAJgTM9f8BVGvLgXQxqKCrwdVdV7tASu1n1uz5bHbcs25pFsuS4o96ZESTLsB",
  "key31": "6r6caVupM66a7JKgC7GTdQ2WNdLkssHwDe2yUjohNrbjEyrLjK4NxGHUyy6nkcL3HMft1L9F4JSqtwRSP1HAojh",
  "key32": "9PUz4yJVakRRKxQVaCeFFz6uCgvG5Dd2FXC7kvcDgZpa6FAJ3DNwFgCDfQqda83DFg1x1PAKzJBYaxCeZhNcxyT",
  "key33": "2Fw7oq9txfM5s9puMP31gDyxhDoGraMATWaiHMi2Wyu7FrTGNc6VMunibR41wVob1KuP1NkiZgg6gegrFfEKdfx2",
  "key34": "5JsddD4btXyU7ro9etWTgSndpSLN5NPZp1LxB57aJr5BhjwE4PV4JmKfn9Y5wTbp9oWa3Li7wXZMHKk8dbWoeohr",
  "key35": "2HH6amykmXnLfKQrv254SLCPGpRjZqUA4yGhX4jPQGqR2iotFS1KACxkY3oM79iV1FRVtWEacS4R2gyK3Q93dDJQ",
  "key36": "Uai5cjBeSSspmnoa25ttFCtMRunvKyTCxCXHPXsh4KxSVjEDyczv7VyDCWL2Qx6cV8h26P9mzaaA1q46DkFYKkS",
  "key37": "3sbwUrEjti2MjPeyshMG6w9D5sQFnR6fQBgsPBijB4dAe3D7AxHUtA39kvVSe5coSj5XrpnjMYfuhfy4CQa1n97n",
  "key38": "3Dbtrdt27MrqAd6Yw1ijJBJxdK6yxUEyBLkYHc7TS2BPDfDJLsiM4fSua4KRCq78JKAAWXdzFjmm5e4uZT5x66XH",
  "key39": "2Z4WRkMSiwQPXHAottgMerqY2s8yZj2NyGy7wdLq5RVj5VxizXPiKeviBA8D1Bc9UAftZ5MqE8tJ331yvTV2Skjs",
  "key40": "41SYa1aXLXcXMoSJPzc5PX7pkaFroX8QH1kozuhQMq22xTMsdtupxGeG69qttua88kGcANy9f5XeELqFgvcXkJTZ",
  "key41": "3kVEXQbcbrkaQtzs9CH1kQziZQ2Vx24BvHeWKjySYt8gQXzMPkg8wp5CxXh4Sqwdw7V8JmTfQYvvxWfyoZVbAGwi",
  "key42": "gsHW3XMrcWyUGZpNstgDMw4TZbC1VWqDyi2RJYe7w8aTTnaVnq44Dv82YyYHYpEEMnW2W7Yr9q2p8GHYm61ypon",
  "key43": "334NTVukssu2Lzvtgtk7xt56tPXbEBjpSRNTo8p4SKBe7obUE7P89oWEewaa8FF8kYD3vrdrnZEnNunRNgAtA7AL",
  "key44": "3mioAzfWWogJUWyZZxA4meBy3iY4C6sRY99WCDJ43V87RnzLBp7HN1R5D4mvdv5k4bqZKBq27uSY3GwnqTvDMYhR",
  "key45": "48KwvSWNLzM4dBn25ekJ6ijT4hpPAphZk56PuB8Ex25g4FmiyPtH8BGVPSom8D9inQwDZuWmAe1FEY6v4Kkp37Br"
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
