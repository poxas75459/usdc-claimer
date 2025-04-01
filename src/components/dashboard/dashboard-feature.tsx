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
    "4qih4wc6HuAYQMrnptnKB7AFJnfQNqv1W2aHqd6tieMghfYfonN1XBVtFxQGY1mgy2KPAD5AUQYUDp3XexChU2zV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qx1pPpFwREducdikRzPto7QNAqDoEdq9yX1DaQXioinsLcwQDDmDzVkrPYQoSJBmvVGtoLfGLVrWTkSVqGvjzFu",
  "key1": "27F3ByJS9SusbyuhjXin7dwQyTVQXQcWX1kgojXZow7GUsZyRzgjU8YediLpjnYDbxqwR2z4ten3a12L9zk86ENX",
  "key2": "3kVJf2U8JjzmHYgaFex6rS9zmQLj8pREM6Hr5t61XYvYdLXWGw5f1K7P9osauv52Bjhwq7BstXFytXvzBXdk34Jf",
  "key3": "4TxLdvNh1gRtXo6ygMW474tXbJeNZhKtCfMGKmC2ruX8un7F7ckRdiUHEqfRaHJy9NcEbNa9pXWRaWG99oCxA7DW",
  "key4": "4Lrni2ou5oehs7f4JU6D4omqrmGhtvgvH8EKbiNzvaw6KCp38fddU2bcDAKK4m6942MyAtRxag9jLfE8JZp2B2nZ",
  "key5": "4evvHVhsCAUsaf82Hr16ZFLnP81SpwUAD7bPuopdinJ9G3kKc3e9AZN1FNSuGH4DP1hhQYaL9Q2DmEHMYjnNTST4",
  "key6": "3d38bRvjoiWnw6Lr5A5BhZvaB3vvgVMDZWFnT311PazAjtZyUc8qMKGa3F4tKqFvNk6iAAos8xKMofJcJgiyQtUa",
  "key7": "3jwYhPRgaqzkURPtn1NDEY7ZiZC1Su2bD8ZpTcF2jDUyBCnP6UPCKZ1A4dGjjHZ9omCijAeg1ZP7qVF15mSxPQYP",
  "key8": "3BFXCBL5CHDJjwRzHvzFBqSha2j1DqzJZTbKfXvLonwDuAph3MduB5sgSJsFdTuWrdqqEN9NLBXkbQFEjCNDcC9W",
  "key9": "3bAdCdNxWg9fe58eVDxo8KHm4haX2JCZr9A4DNeEEb3wTpzRUc9qgY7PPW7UPBh2qNm5UakwULvcjFvTwbair97c",
  "key10": "3JDffoZzmsuZ9SD7Ri8dGVVZGsUksTFywK5aK5ZoTK3xZVRnjDiTSrhNy5RfZppPru9C8yL2Sy5bo3vAuGoTrHFj",
  "key11": "5GynR1K12EUnnKJF8BFejNeLutXcWMKLME2uq6kccsSN3EKh4fBcGTzXhCDwaTvc4nPcCcGNx6e8Ady7jAxMRkTG",
  "key12": "3KHvgaS13caGwkM95rUpnLVDKjgPudH7cmvMK4t43KoJVezsaPLmjQecEq5NMPZaBhrqThZSgCr98CrM9RyiTaQA",
  "key13": "5yy94y57VEToj44AzJjp8KLb8zabsD9CoG3SsRArWf55Mb4L6s36eJmM3WnwscQ1FyTstY1F3dFFgpSs5nNPDMJG",
  "key14": "5SHeNTAwSqB6j2nDv4sQ2xb3qYCLArBV24CVbXeW1M3i4o6VFch6fme5RXjKhTY2sxPRXwUKTsTkQJkfwoJBZnNv",
  "key15": "2fnemvyhc7BNpCo33HDiFW4WJ6X5S2T5gZ1K3sQmSQp1Ycj6fcJgFAXoFu6bvACj2bWFkR1vy6Nu8xXoPqv2gUKD",
  "key16": "67eG9besLFMAUj55uZyz3gCLtzGT5nuCWxmm3BgpcP2QL4DxwcYBtr6aqtTMXYCPUMwqhZtvpB5oayYCXWdK4Tgh",
  "key17": "27avSrood6wTbYxwbd6tc28wp13N48JfSfjmq5nBGQu2dyS1dETsQygcJKV9XkNExW1MPp6bGsnxi2ZBP9dy4V8R",
  "key18": "eqz9TA3bHdrYQQpx9hTWNGVottrzfqKuuyx16skparqJ1XWXxy7jdnvLa2HuztB9pJYQbL7AK2Pvvf8zUdgTwyC",
  "key19": "2fce4FzP9PVkDZrrdNLR9X1TnvCiS4zrbRyKhchtsTgkMNuHX36ac67FGppMY3iokUYbjACXfHbx6TgSy6e8GBa",
  "key20": "LHZY236TmehvAGvhFktEyX2ZyEDzFqTX2WHUvMa3w4SnbUJ1FXgnGkWJy6hfi9w8U9y4e6TgnjwFzMW4F6da4dA",
  "key21": "5zwcQNLUvKCL22PEtcrWForFJpvUUXTNbb6yFWRzVMFEk3zwpujfcynvgtn2NFqJobGanA1ABRSTU48QJpxxK8Po",
  "key22": "XLNdrJdRvTejPyDAToods4C4SfqRsbfdXndXYVbQ3V5SXsHCxtLoBaB8GeVNQaVGbjELnCcd7tTQWYRk6ipwJDM",
  "key23": "5UtQTjNiq1xcfMPzjUEx192M6vEAvWn6fKv6YwbHPgxKKXiqBsLKdeUxJr1DL32GGUia7NhpXvTvnUp9D71vskce",
  "key24": "4FsoKY1jBu9i9mCstFYy53FM1Mj9bu4B2ZCeS3PHLXXbSzK4iY7akk9hsye9ngkGGtsDEMgAvUx5ENLRQcCiVsaR",
  "key25": "NAxcT8df9ZtKuyCgVLEAgnCj65FJgmodP3ZGriLBidQsWF8HrnsjRb9W3czD3YiTLfjuFWUc1jiA9eF3jxCNJBV",
  "key26": "3vM4FmYN5u9p5Wpj9VFQtNtLURWvuDJGQNwuhotp6GxtVjuSWHtXxCGoEZmejBvXRbEoMJdank7ZxGsADXeBtjWt",
  "key27": "iQtyf6RF3sYxzfzBUkQn3GEPRFEM7AHbk5seSS5FUzpHaEb6hLmetv6pwyoYnZ9UR5hZSbj85BdKa5qgYXB73CT",
  "key28": "617mWKLqDKSs2NdzkVkdPGAPc9Bs7ufAS1Ww1T9fJZq1YmoCy75VjmsyLxEqyFRMMSNGrn2GWUxkVZQwW31oYt5P",
  "key29": "2tvm5LhbAskwKjwNePA64ACPFFv1EyGse5GQ4VfCwTK6P3Ga2C4pAFEM8tmdf9kZgptjD74LxQ4TaoXxLYG5jt2w",
  "key30": "3gQisbQaxioNqCKp6MPZvaPBNCCDwNdmdi1aeejA62uUdwU4g9yZuJtspV4dqiDKktykCFbXbRaY121tZZajZCip",
  "key31": "2cMKsb1X74oyN7Pm4GXxD729rkAsERYUVooV68Ac8TPQ1MeN7kLdGE8nMXYTyJoH5F1wd9ZKb9AAaNuGJ9hf4swP",
  "key32": "ZdB4Ah914Dxa8PNMrWMQCdkVL1WXL74Vt76cUHor9HXfwMHjaXRxPHWnJ7o8gW81omTwRxC3guU776fbwpm38qv",
  "key33": "59ayrmoU1siXhFgif9qmJbmXMnmt8wGQStEwC3LHMdWHEC1AFnv9UJZ4Y1Wh6banioEezSyfjfx9ytCAG7yLhnkc",
  "key34": "2mnFaYiRqN5hkerWspXiiLADc36ZrzRwStvdVkmqDg8hczAYytnxieNuv5pK24GwPsCyCBjv9bcotAJ5d8uCG5Gv",
  "key35": "2HeXYD3NLcGGh3CWoeQ7GD7Vun5tFhpPAgzgfiyKzDWFjNBMeA3JmTbYAG5GACwFHBsZJYDQ1LALWtpsdpqN4uWE",
  "key36": "1rTF1TKRHXNet4pFw563WogCPvR8czn3pjXfCSY3zZ73e3GqrafofNXAoecxRniqbk1PGdomxtP9yYKZkapFvwB",
  "key37": "33xHiPgFfS4yufxmCJtdNzt7WUFH9vs3KGEr9mbn4DNJVePBtqdAaYYTiZ3xKacjqoMtQrg9RkswBfMKebV3GLoi",
  "key38": "23GmMKAXFZ7tFUVDzxkvjH12XqwPhLLhSCjTiPLe5uPaz2MedeRQeVL1AVtuJ5ThZeyPxe41bm76tYfqFgJEDika",
  "key39": "4BYSQwR2J4S4mFvPdn1dELEuhh292k1WtSxJDEq6NDNQx4YiXmrwusvAaakVaM2AvAZek774aYciBJ2htqwRgVga",
  "key40": "21nP6HgaJJR2tpFkxBue8gehPViqztxSDKxmgrkUoUyvfaJu9DcjG57U8ZGnR5VPXhHj1BWez9ozB9gEuVdcQqan",
  "key41": "BA5WDJrRWLQFEhpwH2f7CZnZJCvMaPn93BLK1XfrYkMUGKX2Ktj961fDz5ytp4AtLu5VvvHt8pT5bGhhWUYV2bd",
  "key42": "ctJkN4UU1hoQwh1vWJurZhPNwLmbQxbrG316frixPdFZDCiVTkYQTZK7RiicZgiq9BpnMFmG56NfDr1rJgGBW4i",
  "key43": "Gzp6UsB7Rz1VdV9GzGSrtdBYf9xWpvsoFg5Kbfm1QRdcoMyHAKPuUTm8C3iy1gr4eDAUE9rwfTDAxkBCEv4t3xW",
  "key44": "41TeMSgRrifnQ3kv8hxme3LhHSnNqR2eazPD7cEvyJHv9cJbQj5Cnm3VPgkCsVDWH9DgyyTJbr2Ew4m7MdHtPMx5",
  "key45": "3yy9uWLjhTDvvUD3QtR7doskqc5vtGxvifbWfrBVSVEoEZmvA5J4E1hLp3gZD8YswewDLn4EWvRK3h1X6LmnujvN"
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
