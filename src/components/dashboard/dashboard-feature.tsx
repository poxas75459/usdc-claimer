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
    "4zgXgwPaQ7NYsB1sikiBmSXGGy2Riq8jGK8QTBU2pyYoSRGBnA7KxUDyVV46A9aJ4yN7o37SGcMAgXWR4xn86aim"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "534BtwYEDi1a7wW3vLTvgqBZk9EW8HK8jBhtwdEo4RPT2KmmsVtgJNV9VemdV5VPCJ1Wwf5dkSnxUGNG1QVJQp4c",
  "key1": "mNDgah3r44vsrQzHyCMErma9tKSX6h8CHjQaaCbP29emMj5yBVHDcoimhcP5TPYEgJuLAULNsS7QKm6gfGSJ25y",
  "key2": "2KpAQgGTWdNUijk1JJCd5ys557ARsxkRA8eTm1ZYqgkxYJGZNVwdAvJybc7ctAMWjV3pAzCojjjiWPS5mfkeF7FA",
  "key3": "56Beb5CPpi7gSXeEd5Q7FpAaw6bxCaXrwrpKAKNNCxszVjrLqaP8UcdMxxED4fjnhh7bRj1qbHjnq3gCRYNZ8VWU",
  "key4": "4Ames4fwmXiH79zkmm3paRhYAiTMuSrWhAFQzFsF86NdsHwkrzt93amzKPRks6M2xGNCUmR65krnFvwtTMUsySwZ",
  "key5": "58MMsmk2EHPJJg92U7BGzMUsWWfVN62EzjcUW9tpbR3r5aaoM8sbWynfzSnzWAzyCe9cTE3VYBDLachfW1qDZVMF",
  "key6": "54cYcuRkBcx4jqxHYQUE6QaghuTT9LT61Q9AisxxuZRepQ1EjzRxA4m1C7uQfsrSiFjnyBrwnvjXqgEDkeYcBCvm",
  "key7": "4yfabGohG3ASgZfcEUtv9sbUcrLmhVUPMC8bWEw5egHZs1gUWPLX4cWygnjFiKvXqkPcPmseKnyeQFkE4ekpmXST",
  "key8": "2kH7ZYjwEtJkUEzDgJ6PBYoguVKpwksqyQzBCfoJcdpoT1SbSZEWQMWtAMNDmSjBnqiFwT66fqk28M3TsYdHKJjk",
  "key9": "51xcDQErMsGGu63a2ckDZSwPaKtNtCKhP1A76YjNh97aEFZAbvn4WAf6szRVLsXjoYETBWqD97c3P6AjH35vxT8P",
  "key10": "2NpahcEXF5d2bD6BinzUoPb51N8AsxEeWSSLuL7zPPShbB1onHoFHLxYsxKPJCfuFnoFYeqntj6tQcPcsJnbnuQh",
  "key11": "5vYPVBboZQ2FkZi1yhgkHGfFWxWXVsrKJQpFYWJPTYaeXG19cFXJU8oTricxPLSToWmspAXzrnhey1Jo4cvfkoYh",
  "key12": "KBbDF7j6DqCmxH1hS43DfpoJWG13SwjSomGCWi25YhqtNvrs7a9cFsxpeiiyNgjHNGo4SrLAT5KUcpW3VwqXe2o",
  "key13": "2EDwygR7sxqL6DGJSiggQMytXvW5rjJoPCMMzZxTmgMm968ysHQSnk1zbmZHRL9kTizdXJHbNfUft7GCBjMikVdM",
  "key14": "kdJHf9w1oBsMmwuWwKGbxVif3QjLWr6AokPhAmNLsScxhzYauTU2NMvztFX4wpmvkTxv24GZhvryubDWE9jbob4",
  "key15": "21tgucrnR3BPdx5LgeQEHZq2cW4wpbSU6WRFQ2UMZAhWjc97aKitydDaxTUttN59H7DgtWBuF7brsk9VEGE3rMKM",
  "key16": "21wU7jU31gZRrpTpa5k5caKHTCFvyyzU4ym1gKKidZz8Vp2MgQdYmbEFs41dnByJhKZ4B3BixAwdrCS1kwifctqZ",
  "key17": "4hkjFH2tEymna7qE6TgktfSqwKMSAJ746yZCoJ1KgC5Q7sbBrngT9X8VVnvG9YvALwLZBq1tpJHLYpDGqnPkmnvp",
  "key18": "5HoqHvBcTwEYHSs1mDbFyUpnHxbmjw77f5LwNWFzCnY9yaZxnkhYjcm9xG7ijzYARYui3ujnz7WjdUnS3A3WucWB",
  "key19": "2nkbPGHinerCSYpkKPUFqrty1PSrBMAvCyqfRLJRkzvLmamuDuT1gNR26tGvJhspkXhkJzmqHKeqdTvFZs45Edkf",
  "key20": "pkwqQw6PVWb6shi84Wfws2U3ArUxZ1C5Gjf77wJaGqYWkmsoaHsXxtwzYxWXYs8p3oBWHhzb4CTCHeWkkqAhHPr",
  "key21": "wucDAXeCyw2YPwMxsYNtGKBGr2dshZ1dLMkLopCP35m6kqY9AEF2ciipwSLMwDQqDDyMDHh7Em5j9s53BiiqscB",
  "key22": "211WCPHRmLWogS5dJuapFeAU8gFnViESbj95bz8qDdE87iSaeBR3US9LBa7UKUYT1YkDtHqXEZbZ213A4wfkLhZw",
  "key23": "39Ey5mnCZyutByLMciV2yAMgD82TxFiDtrz6wi6hN62G1DWtG86kWCR1Qcvsw5E5i7EZD4pDfP5g8oBBBpqn1guN",
  "key24": "kAJ1PbkCcUaifXuJK8VK2h36U2NeNUELFwwbqRcBu3UrPdXFGCDwbrRnjwEkXzqFUW1jEVvCEVo7XbLwNWUQFw2",
  "key25": "4R8hsynEpDJgkkmbwGDnHNcjej6KkTdyJxBsVMs2LWt5tBoCMgwEYYmYACrrW567eLL4sdhUN5wcwft6m41k23TH",
  "key26": "2pdQq31U557KXMKmYYZXow1iAwSu1Ay8vzFQCjrKEidumCoFaLoXw63WTXGivMi3nhjqmtiFkU2NcJDg8Agn4nx9",
  "key27": "26zAMTQNaJDJjwb2Jc3fLk5Lhke4vso3765UBTacsykbixbJ1LA1HfaupHDzDJVHhubbFEe9XSvLoZSQdDNoG733",
  "key28": "23V41s3pTNeYLqFZdRhcBeCQpZh1Bohi7yCGWnuEWKE7tmHWLmLapWcVARxgCVqevESXPEgvxnudmAzPdsXmqBgX",
  "key29": "3f5HSTUZZ9m6CK3oEWGgPG66upYD4QT3Pooq3PhkParriQfF8YAt29hcyBJBGSpXjbL7e7oGV9YqpKfbJcH9j5Sc",
  "key30": "TSbXKzSkkocTfUNFu6dvAVqUDJUr1m7aAn389T7pXbWhfNEHGrvCUoTNBhT3mVfEWrebPnbf15VJ6LjC7sjsMEB",
  "key31": "3yUCDJfqugosqhrQEbRqf62YfAnRkjV6SmqtZzL3YAnSnY8r1wL3h8sZdpp2zdSJAt2euKH9QxR7Kaia5CvdZBeD",
  "key32": "f36s6rXuCWmJUuNA734Em1eS6KWM9hpgeKMP1dC3jpHmoQQ8tpD8yg4hJmgwvQbGMaiwxTjBBiCa3CZPA9caVBd",
  "key33": "4AgbpR3UCLGDXB6ZiQTx1zwQvqLJSBXYJv72wT9g96bdQXquPADciGerR25uRow8E5YFZ7mP6TBpFQBkNzEbjQmM",
  "key34": "xLmGdQCeu93Qr8ywRixJ1C98ArNyGqDyLg8yJqkF98XfiZgd2Juzo7SKPW2qVitMiyxPgbt8AABapFn55KrbxXG",
  "key35": "4svou41xppzCRFYropEdj83Po48fP7SFa1JC1khifzzp2ELJNmd1rWB9vYw5sw26abGYwLiEcVyQw5deju7MdFwj",
  "key36": "62EtwkUjWqE4md6eYNfw4n9KhkpSGDyb7eVX2ER2Yf7yHNtCeDNvGuCUyHEpFEY9PbgSfhju1VkGQQhB2dDZrZog",
  "key37": "2KiSmH4nGyqs8cfCya9riuZjFejQ9LPHd9KcXBrsBB7LGMpzfsqFY6QitMWEnyWuH9WhfUN98WJjNURLLdZkPaHG",
  "key38": "3xuKkjLmjoZ8Gh4GV5B7Exm3VPVeY1BxLUpAG5wB1WquiuMU99XQeyhma358rmAQJ52bS6ozBp9iMKSUky8rvJAn",
  "key39": "23YjfhUtABvFKf5bUhkCNYSr5VzTaRWoRURhosJHzsxBLBGxNC9j7236PSSYRf1ED8i3Yq2pH9YAUexVngikeAqW",
  "key40": "3ZAwnR9RM8KSCbVqSWA77T7bmt8YAcKX9QfX9H8pzJasvtHrEAcpx9vzy7scUpFyjb7WGnCJiJ5vjcPoZtCawktT",
  "key41": "4KjeQqCgG4jy3Z8kh9cT2L8cUNona38Y7FVFZmSiMn55coX3jHkgBaQBy7qr4EkCQ7DBqc8mrcfR9UcNU4kDnB6F",
  "key42": "5e6t7ddX5tJsyfBqc7sbNhir2G69wJZUBJuokBJGVVvFZMp2FkFwa3PUrYA3FBkXf1P7NPDTiRDk4oiE8oP69rHw",
  "key43": "2Gz9KgLSmM1KvxM4hTjKnuy6RPaiHq4ZugGEQ4WxZFgtZW9QxfgaxnhgJN1hNXB7WsakdFKfhjd79jCiNFuVngWp",
  "key44": "3dMZ1Z8onGoTUsdb4eaFWrTjMn5ZBLrBsjfT4wcfrtcibJEepkzJAm57tRrwsmiFNNwFvSB32x7vu9KVvmaPrKVS"
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
