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
    "58qGi1AjDF2SutpC8chDHVUuSwNoosX6zLmTidMAmxpLNDcCgKypRJKFhX1u1H3pv14fMKJqd1jy8AayNrbxzzJg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25aTwcbRwyt1B6APLbq2TbRFgM74GzQoSd9Yig45QtSmyoFFfMcUTNsCJ77fCpc55TiHDQUnNe5tbLAR7n3GMdds",
  "key1": "PUUDRHyGWPLVLVjitrcPw4pn2tnCodMkwKs6h7CPrLyfuoeAGnxX6Z3Xeo8wMTfiqRsHnWcGp8ggRQqXuhtmYyR",
  "key2": "4Tw9QD4dmvjXRWGnW9kRUiPwc2LNvR4BHuAddwBA6GGGsnheWhNywsv6rkk58HtF7WUYLdwd63GWwRqGAsAN9apH",
  "key3": "2TCVa3VGniwbSyzeS6zMrDpj65gLyz2xqnGd2XAUoJL1XVg29VfvE5YsDccqgWCcqqR5hdmJ4H5K48zcfQtynBde",
  "key4": "2AegrD4m5oSGm2EH8Z26T8Vk3urRmje7FHGvEZut3tiihckY89XkzuAwFrJR1YAfhA12DZZudgYXJaxRHLuuTWHr",
  "key5": "472BGqn9rKhgbKPuQvdqfMzkCBsiBo47e8tLuWUEuVBmyd6Suc1joZ2uHt2MGPdhstSAFib5pUw5Ec7PUmXWpWCi",
  "key6": "E2wzrg6V3yyk8oFs8TDv5Vm4Rc6yuNufSoQVDwE9758YLTGKeKWVkmyGuiQDmonZKNBTpDqgjudNBZzaKuyA8Ah",
  "key7": "4AzGbBwA9bN1xhqAUzXanaS9a3YDaV4tzsLEyhJNFMJ5ieZLGXXVaRT5cLgtq8dcwnnHs6ySG6eCNaXQjRUY6ahQ",
  "key8": "5rGYTeaHNGYeG9f1ktJR9QgLyQdts4aMZwvcNcWrmEV23dCYVkZ4YQCjruZGYmkQMZY53udL3TxTTziDjDa6y5nS",
  "key9": "21wPPFkVSPjh2yuQ66LsBCpgUwte6JYhCGqVsfNjELGa8Rh1d8ET8W9aVoY1f6LhxkvdA1HYcM8qCk7AVALAwEDn",
  "key10": "5DCLYERwjyJoUrdwn6XsjgSv6ymJz8cPPTXnU7et233pobcp89xbf4xMkDEqMhyafGUHrrjaxEZSrjFsNtwVfSi4",
  "key11": "GMchJGZ8uxkGnSY6dmf6B2v4FXW8cvmGH3RzcK8bJEhLzZ9vh8jvvnDhMpWtNWJhdKNDDYdkk67bkV1qwib7LCD",
  "key12": "4PpaMwWNKJ8BfoLomREoU9Mpyj3U6wBD4PugCettBt9G9WAwTz5MqSv3kKTyQzLPXXcx9voXUymgCeNA6vfPP7kp",
  "key13": "4rHemhCJqhTufWXmhFjp6ShzMCroaQKGEjy6SoTG5PjFXTCadPvS1goRYdEBJNJpEcPXPkijzRkX9fHAXKHpSqcZ",
  "key14": "2r3viquDmAVKBVWwLnRaPYnasyrTso1mPTFziC8pbMG7pM9zTXXK5h9iMTiLm2EgDcNQZPXNrJ8N6KSAwFJt5uu",
  "key15": "3Acxoa9oazDZswWLjkuFWwyyoDhnBd4T7NQdqXfEQoNFNVjJCGBHBhPWzUXyz366NNxKCdFSYVPfBXFWgcfTMpL5",
  "key16": "dkCQe79qefZBRCi5s2npweBtiv7uXAqbQ74NcQuKkcESz8kiCKDZvttxtZw8XKfo86N5cC3jopBATm8VZCs5gSA",
  "key17": "GkZjawNtRvpMULvSypLhxDSZ6dFy33MRYF3JqbjRjmeJ4zkpjWK5XetCU54mMvqZAKo7q51hwiRGqvScQcQrm5r",
  "key18": "5r3KcFvq6LL6eRa45rQVFY8KLALyHhb7cmSksXXNcDxJBvoFAgH9ecxdGfov63u7YLKzzX5yAY9L9THPs9p4JN8m",
  "key19": "2oPa4JQqf3xizhYSU7mxfpVuskyHJLRWQL3sx5NcYwK2MEmv5iFsGyWwJ1owuQGicwzN9H9vgW1wYK8d51Anm4Nn",
  "key20": "4L8Qfv3y9WxiSbbuNUFqKrU72Y1ZYVjYshn77jVgZomdzgFx9mmJ7TB6KwNQU3o9qZ8JLcjFqL4M9YEgWTHffzUo",
  "key21": "4qYkzL2m5cdma5eQc1TyAcfJZ4pKFCRaQGpSKsrHw2rBwgnTHztNFkyprGr62sQY8VVLzcWoZN7QKahuyoBEyufm",
  "key22": "16aL4SMZapZcHpAgrapySyFuTR9BawhENHcScgfJp8XDGqMhv4ZXtaghr9HcLGCunwnUKpRwUEm7TCzrVZvZkYh",
  "key23": "28ZyXcxBHpXADdfP4KpMUaDHnZVGw51VvnM9u6FnxipHUd3UorGRyDAwQQX16FVumCj1XJ5G27WtwYvR88739DRn",
  "key24": "5iHyGXJmjUgNCj428vw2vjQvr2kqEQNfMbntRpwd6W898VP7NF71eumXWB1gaSHAkC53qmrcAKPqoi4oqFNWsbb6",
  "key25": "3njzxXvB7g3MNFZDxQjTuizUgTMg5mF8oMEKsSaJviUkDV3oBsqL5evHyd11SakePxteDYqYUyftb2hqHAovtq2t",
  "key26": "4ViFDTw1DMdTeRdH4tBaVjMWzefad6mHAxeoKTxLvAh9SMLtfMKXXGzT9afLiXY2R7MffXQ1BPsaHFE6KNt448Me",
  "key27": "FEnapSPyc2G68RXGbhtEXvekfv8uBnZswvnRMSvuFxALQ3eG414mo2So1sbGQVH9EQPH6XPyoSVx3h6kRvTTSBG",
  "key28": "2zx17ZPwkx5mfpR3YzqVAvyFAs9zJxs3u3wLKrXor9wGk1J5coXQeRhRKQBdVxMFoXLJiYstgUBzP7PNFHTTqicE",
  "key29": "65NAZJzPBsKQsycmLKkRLF7QDG41vRARoqnqM2s4VBrq217WLRTUHxTUserhXZ5Jb5iUAFpd9gXtr1jarRCAwHjo",
  "key30": "SCSB9mibX2c6XZmJWpR3XVW5t9dMD276wWgPZbc45TVAcPQgzt82NzN3VZBG4a35knTPdNf93PNKCQRg8Yscgjs",
  "key31": "5eKpcm9UYVcMf7mz9o6rcQSRkJ52z7i6xsYo4jPdxpqWq9WCHARArkqnJ6uAP96ZrLWoJ8GVdNQNRn3cHaFPhdzT",
  "key32": "4czwPZKzVLwpfmQBC7D5edFxeakj4idaTcopZYhUWN95Ef1YRojE6Nr5fuVSZ2QU5hEMLct9BQzKPG5d8qoUjJng",
  "key33": "3RxmXqAJabvFS3JARFx7Kyuw2sDb5oERmMgaqxgB4Cg34JHbJUTARq3aYnEFZ2CT9jjCGxDZRY1UKgHgWAJDzN6X",
  "key34": "3pN1FbGfgmU7C2dEmn4RdtAGwGVY3Tu8UqGqDq6L1KAyV6MisjsAurkUdCWyTEUNBr55obQYVHCWdEEMg72eAqoU",
  "key35": "4Yoc6vx7JbtBZQSNbSdmkHnyuQQ7GKaPXmpVkEQypTTt2cFZKsCw3iAuxwD5Gt7nzcqUZpySfLrPg2oS3Mjh4WGL",
  "key36": "4zeTmGEJJbBx8cUYtKD5m12Ph8CeySY3oDsTowvE37H6aMKtcTtbg3CxCSySnHDLRw1hP1rmhf6CwtBdRvxWJKC8",
  "key37": "b3hSfDr8Km6NHWwp28ctZE68UmbGZnPptXQJCbr7KExGLNMx6bG4wAnQoS966LVy2GcRQL5r5dvwmRoJTFppUCn",
  "key38": "3DcGFBB894eUpLbTuLoXQohnMMXYS47M9SXHQKjkuGJQYH7joMKZ8dxFjbG8GcokdK161nL8G1JAP3Y4oC4pAvzp",
  "key39": "2PWx6QEu5HjczHoCAkFJ4LGrDPZJzwb9eoS6B7XxwT1Q2TtgbDbpKoebxEpRR5vmAWRS3JjvooNYWNH2EVwuFA8E",
  "key40": "4H2Unbb2i9g92CtaqRBG4JhXvdiFgqtNvu65adnoTtagci6SkCUQjsx22HDHAB5qXd5Z17SLoxBzgRDfjWGyhqRK",
  "key41": "JC99xqz3JJYNGieD41wLAXohHe4oUaUod7N16LCpiQg3vDPuRGYxuavLGpURtvQCWLzfMXoVdLeX11awHWxvjoq",
  "key42": "4sQzpCxoT8xHErZ1mFJGWCKs288eHnJ8cQPsAohyy8j68FUU9BaKKnHY17vikJBPoLaxg5mKWDzzfy8c1mMeFYF6",
  "key43": "5QJbVtVK8Nu4XPLBrFWCJ1UP9qH9gfbirnQ6EwyF2G6Da32YBSDnrmwMrwgeZTpBsUKxqc1akQbus6tCRvgLEPhe",
  "key44": "3fDu2TgrvAnSEA2UBf9czqYNsu4NwbBJcortRzPGf629yWhsLFnVMsmZB2WyvhtWC67Lss4H9f1fcNnJWyzTYrke",
  "key45": "5RFqdhqkywbePfTxqEaRpdYSk3J9NUJmrqr47Rq6XFx2LE8k2DX6JFksQLB6ncYycCMuErHNUPX9v2GBUJ7dYzbK",
  "key46": "4TT1VDjUhiqC2ttCLsuBAH5enKM4SjVxnTBACx5GcqE5RLPHM73FKf3j8Yg3eShGDh67aQxnxJ7EFqno75otZHQr",
  "key47": "3qgvysPQggWLaAga5nbCp7H2yqLpsD29QkmYa3BqfJB4sEQWkydzD4bf2sbUXaxxRqqhE79GdKa2MQxbYbpfrQME"
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
