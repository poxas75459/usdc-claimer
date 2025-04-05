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
    "3pif5vNnkPaviGUNcAVgKZetxRmdZJAZqbDr8yXqWJmiiGTSPyd8g2ocdHNTPDEX1t4qm1y7VG7ZTwfP7vZCspYV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mSmZ281CUb9YKaUaJhwhGCQy2bp3z3BYrLMj9a54fU6DH3nVTL7DCBHtFthZoUo4t2NafdUSCLEjceGn1kd8AHY",
  "key1": "21PdjvjSnxkdXCFMrMBQGjFDUh2U6WXz9zFvx8GgEuAukjZp4QEZ9kyEQevij1huFURqsfAk2YS3NqiZoDcbBP57",
  "key2": "4VUMgKdgaZtgYw66aR3BSAMFTstTUjqipeW9McmkyiDMfTFTSxux1bDJjoShAfAwqaD4ybwpJy6BFBQiH8xQpdbE",
  "key3": "AEU88MZGrZc8XvUoHLTb6j54Xaz3zWmrofKKyuzFP8NcdmSw4WHTwqBmy5V2jsEiyL6istdpCScNaXAKybFea2g",
  "key4": "2WYzU9z5bxxHg9zbbFAfGNk6fLRWsKkuciXwnDKwuvBgcy9wSDDmFrd3wHUks4bVjrxctXNMAdA9D8jKgYZgxiHx",
  "key5": "4ahCQtpy4cXHTBxnL5RmBNy1M96WjYFe8Yk3KmSuiEQX9p3fvBELWLEREaziWceHzUQnzSndJ7TZLXSA6zrNNP2N",
  "key6": "tqYCvf5564QMs6ZBSfur4tThsZ6LvtqbowGZkQHTP6MEBvskCXiQ9xZC8Ejm6gXpJjLUfRz2KhP3crHADrBNPUQ",
  "key7": "3UW9LjLog4Vdo7tCPqVryZYZ6pr2JUDo9G3DnNjzfaFW37VWTCn6khTSA3gcgzrgwdAUyuLBrZAkyVRD2xyCV67Q",
  "key8": "54C5osYgHhiY21pcwYr6m2RAE5jfxcua9LyD7MWoCF2xvhprWFHqSnVLxydWuF7Eex1gPW7T5WiXFghccnVGYviC",
  "key9": "57FrTBoVwvhVw6TmSq3TeFnQngNwY7uaYGNNb8mgja1TJYdP9xCfDdTsbWM84zpKCmhurCaHnvHrFCVP4kuv4Zi5",
  "key10": "4bNkomt9a2WyvNDjF68i1hN6oEJUjNpwUGXiqfuyaEuRCUdXdNH7KinSF2erZ3WbzqMwSMJbbFUbkfwa8JpCNkPA",
  "key11": "3HdQBFaB4pWckJaHiiWrLmWdWUbaYNmq6vnzqKKsGcAxdPbMDTwz9ZQKu78jPp8BijnYtCLbgpfnKxt1Ys6cXLvm",
  "key12": "3i2MYwTNHPV91Y44WPBy66SHc8uF2LkLqLC3dhnZPjUXYc9XWJaDfqCRU5gX1WsFW3L1UVMd9TYnLM9A1WgKeFBx",
  "key13": "2i8L4ywZeLECVTiDrKpYJDk4n24wuXVCyeAb8jagEGpTr25pJPZ26YccsZ85d9CHfCokCwQBYdEbW9qkU8K5MLgA",
  "key14": "F4eGBGUMFkf1r8YSSmGpCwF5nSe6LEBkVpvK515r15HcCYQxr46G85ChaHoxA3Geiy5dXvnEP5poYhuybfvcZKs",
  "key15": "24hs3hNPZ3otRLufAwonfLDzW83tp4MrFdHsfMi5V6bmvbiFKqX4ygcQfej1qfKayAwUdAwn97kj4XKKRWp7LAJ3",
  "key16": "qx6pLqYj6tE4mJ4GVdN7Lb7gh5ic1dFxMEN3sWnPy4dSZCNfVfBTiFhtxXEtGpJ3VYdZ8qj9JqLGumsASyxxj6T",
  "key17": "2esN7qCAeZ81r4uXoTdqgn7jpvK2Zr7FNwawYJL4Amkjssp8axegqA2Tb6q3jV5yxHaPQHhF6Xfpc3NWp6tzcHvg",
  "key18": "XrUa7Ex6onsaq5SWEsNauJt4GGSGXDLXt2sEwfRezj8CVjG8G2st3BKQMYoMbwYtLqYMH1HWehVPWd3BhaKbr9R",
  "key19": "4F7fdaUStqRoG6An6sonthvDZ4d1b3xPDUhgffreNR4c6BexWnNmMRTPmmGsbE1FQEmyjAbRbDtURjZSG3dsf9vi",
  "key20": "4h3t6XwSiiB4w5eowYn1vdtqxyr3CqdEhjcVwqLUYcj9xbacnkmajCM3Xyikd8zfsE1VbUZXvCiWyDqqCYR9ickd",
  "key21": "ppWEZkBE2QYpdQAzXiLB53Lkut6MMZoDLV9NZa5uE4Q9hixAaSVEr1UaLuKQnYo4R9KXqAMNXjJxDiPfyEKaAbo",
  "key22": "4wG4YpUu7mKcnA6DsnXfoCRoMKSqqQgTnCSkHL6C8ELdxC7i2saBBXqyAZgBtScrkF4atw1WqvAqJQYEvmot7DFb",
  "key23": "2xjZXnzLtgdhXUXADNzswKNW2zApkysxdMNDwQ3V6i2ZYnrKyA85kqxEQfcjb37ArGiUvNRLcQxzZJdhFZV1AHcQ",
  "key24": "3nwXYqoCyD4sfZJsPEYmswqRei17jr9irPe6nVurYsxXHnW8uuFMH5YjhcuvijYCJgF2Gze2Nc6dmnrzkXf5nhrA",
  "key25": "5wiTUyF2bf64C5s1cFKG8315P5AcdAf2viMDPfRLHvzjTNCc6rZwtEC2rsoUpbGtfYzyojvTS5eY9Gw4E41KzMmY",
  "key26": "5G12uBmPFdbCHSE6ieMAEAgmNBkLPHFStaxKhp4JP6pCWD2vVAiZ9kUWmnF3yGAdE3L98UBYzTiSwuuQrmtWtyMn",
  "key27": "59gwHrwiPKjoYFBrrQMbkWYdkXHvcST38rFWc7db8U5JUmaeNm8KYngCUFrHFD5Des6bd7d9yhVGZB1RB2ZiWha8",
  "key28": "4XgNhKR7gxwGZSwMY94JpAzGreLk1H83K3gykcXAkZJNSsrszxgmYpxNNCoLZNez66MvXARsTzZMcVVStVFyZbTn",
  "key29": "5V4gxr5PkXseY7BnBFbYkXkiSnABSq1AMmj52HhcTZUDsQCuBRTtn4JWrSv5xN6Aw9ZqG4ouxAoFkfDjSADHJ3mJ",
  "key30": "5rKy7qoQqLuqHALo65ALRNS9kBzh6LTizeyGL2bmWaNGLnreAzj2zQceZgEru1pBQq95nvud6kL4tCv3N1dEfnCA",
  "key31": "5P43QPEB3niHvEm8GBLeggHF4Qd8EqNsvN5Agn9SbJhg3ve4YCsp63As2dxCXRnKjTxkRvNwukzuSd8AgLgnsFvS",
  "key32": "5MP1dhqcc2nvc1LqgQ4Zf2hWL8b6hHvZvyBRa6A6kLGERtY8EhRatoynpJJB11B3rsjcaLAy6WxXkCXc8FMeM4h8",
  "key33": "xFkTxRuzTZEZmfLLQvFfqHM3hy21bqdp6aTpVi95qKdEHxbdRs7krr5MhrJF8bZuugg7S25Byichng1myYUQo8B",
  "key34": "5ityXGktaXbRwa31Ymgg899GxSxcSaZSLE1YYFaBid8UAZ2zpd18ir8s6suWYzSrRsN2Gihyc58es6tuJip3VBxk",
  "key35": "65sp6vxeTTD4LtDtMonwfCAXHW7HDwD82q2rgySsHLXHvWdHwdfARxeeUnCPhV9tgmHAh3PgjumztUCPTtg8NUQi",
  "key36": "43YhPCNB27yb6paECR3BzpUNUP5uZcJELgG7T7aTwyt5YghRciaPd4xYhGEWRmNuXDLaFB9UiBKuAyuXwe1k2wKw",
  "key37": "5v3HqnmDo9nMzkeCqXttDg3xoAriW1wQPxq3VxsVwwbLR6meiC1LnBT53w6KeKaHtjF1aCK3Bu8K66uyuthNzQKC",
  "key38": "4YRUb1EzuNmn3dSZTHRnyccLwwytwgyzPL4tPsooqfVkyYPgUg6Nqxphpo8N8AdN1u7W79Udyqp9514tnMzR9nL",
  "key39": "3NsFzK8YJVv1voKGiAgY93QjbVwKiGr25htT3MrmnMd8145Z9zHPngdj4pFCTAgzVAvRHSA6qQbioUGCT8hN3Dbg",
  "key40": "5VWs5ANz4nV3934r89KjMj54FPNbjBFd3ngSGWK3jSWUs4curGVcho16jikdN2hKZpKKyxVoz94fLo8UmiL8gaYg",
  "key41": "3bFu5nr2SvyzaKNWvYvHC4GQmRsMDnVTCU3QJqLF6UuKYWqXPD27SjhntYyM2Sv114rhXajVjMcRJQGVsydTkU1K",
  "key42": "3td9G5YmtFNdQA3XJQan1i6fpC1tVtdv1cPJkBCRVRnzJv4cN3A2eYky5naEpS2jNFfsfqBZ1nSCs4UXW1GfT35n",
  "key43": "7idPVM9HmgYwA4F6SnMJKb8P6zsrEpHs6g3A2kHjBXcj7HGdaFuP3sewBai6kfuR1KRraPhY2HFnXV5jH2UpVQa",
  "key44": "MbRtsXJ7sa52jF6b19dAojs8Zk9m1ZADPZWxf76kTBCqWp5AFsCkgft3KsintzVoSop8WzCvQn79JkJhqgCut5K",
  "key45": "EHL7TD8S4Zkmsomw5SueEtwdKcHinSq3KBfqw89BD6rRNYtZpiHBtp8e7ghk9dfAJBLBd6fah3LW1FYjWZw6156",
  "key46": "3zhn4WHKnQoeikerCoSbccAzhVqjbYVv2K1gsLT4yz4w5CBrJ248rKaLnhufbLkfXAZKfdNVy4pZa3btHNZx1SbR",
  "key47": "Q2d3rVry4TYokLkudA21mAnKNxmrBG8ohH23Nft49HsJd8D7S5F5A2jKvBqx2rMXhF4AMUrk1wLK6RMqnPyN2M5",
  "key48": "4VQU7FaQB4PszLGP6Ca3vonnS72CDrUdgLaLCenrgYyP9e9ydeLHd7pwdX3u1a4FLWLQ3FMG2xiQeK2fVAnxiMqp"
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
