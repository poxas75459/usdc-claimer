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
    "3ABKtSHX4oX8bRXTC4rzwFov35LyE9NKe2BjT5xiDogcZjYbX2bgcLs1NYcWKm877uTJP28wx49UwheJw2hik9ri"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jBF7eKp7MLcPxuPmL1HCgSiNdu7AzU3DhXedGN9w6qG7xrPfe5BBV3TA9Y6G2nQeE47zUwvaxZwV48zC2JBfpP4",
  "key1": "5nnQQkswuX6XroMRJWC21GL8LcKvmZ3pciF7tGTdF1NxdKBSFcRmMLZzvi8LqFrX4XQKGgPRnuyCfU6d4Bf3opHX",
  "key2": "3MZrcGzQyZe2QQBsFTDDa4Dx6rb1QMP7ceUyARAtSZQy8MdwmR9FpiKE6FMixjz1gytg14hohCCYfpmpttSjeA6P",
  "key3": "2rjXsEqjqzvkJG62eY3R1L56f9oF2ZupUYtyCLpedgtUfC1HuQvcGePAAyDo9zP6J8mfG13vKcs2Xfvcs926ZgVB",
  "key4": "3c1rJkSYx5UoGpm3ZvCPZafJ9ji59n5KrKjAYEzbqtQbERyVUpNvX7yDotGLXRkjdmaFJtQyhXxWLdXaRBM8xwLP",
  "key5": "9Ap74zHdK1xZjNuEEanovTHQQEGnT94QRxbDDQoxjhiagiw5MPc2M4mxuZ7Q2xCGnDk7HPQgbX5SHVHhxWfsRGG",
  "key6": "29zLZ6n94iveKWsKSGTaiAnWcu5MfKAizxv49N7kgwDmYhVjni7Gy6Gi3UV1zmgTEq4rTyBkPT4X3EAxrEhLBJjy",
  "key7": "58tqefDJYuNDAbfMkQ9Hov6BpLtmCAfpEStbS4MNLNoqzdyKfQkeT6JYHqt6iLdovrPEqwXaHko9aH3cLN7wXGCr",
  "key8": "3G3HY9hSQHQtCmfppQuNn7eYkoo8fzk5vGgf98XXKktXPTWeMKEAWDo5F479eshbqyKKc3qFLvQhwQ2RcNAGA4G4",
  "key9": "4iqGifm7R2JmzcnnRVzDjZMKeUWrNbXo1b9YyGZsMX5LkpjwPoVvszqTuQvVBmViitHvqjPP1Ap4YxNiDn5GRhBD",
  "key10": "da3qgMxNtPnpHWEP6tiUJ7Nn8RaQEPctnFTUgLW6zZDrkviNoJsrQcLRzZBeMpv2zLgfQRc1jewsbYtUza2zYby",
  "key11": "o34fbyw2qyuYmhnaNoMTuMvnLreFymUQyjAKnqu7Mhuig3yVhougYrjYSJrkgifFJ8oNG4ypcFJ35zDwAxRSoYL",
  "key12": "4rAi9RsiHHHL27hMdigWxpGwHJL5f7fXTrur9C14LhgDSV8FAfK8ncbPpQryZThU6w6z1LpGPkhotHwikA9QG8W1",
  "key13": "2h2f4aFtJFFNZdgk5VNdpHXBb9vxWtoi4NCgnHkALCFEQjzA44wbis5LwGti2ksEdo2DpxSaDfLmuTCrkNghcsRp",
  "key14": "32KoCs7oJ2YUJ5doB91DJRUDe7EKFEty5CxpEJ14ZqnRYTihyj8isB9RtWsSnk7JVZz1bpyw4peUY1sz495YM8DA",
  "key15": "3bv2KbKtQwHFTNMbUUuBbcDcWfMQACc1h9mBMF7vpwEQvdXysopUskwjtcwESLKpnhtnbzFwDXmzVBUQksViMMq2",
  "key16": "5iUxCExmFe6wD3PVnGxUUvBy4SmQ4QF5q8fynkdnPxPLofW7CzzpxPPzNso8szEEJcVe9VQpG9t4gjfVYCT2r3wq",
  "key17": "5ix9s7ek2LCYkkVtocgDZvarGRhhugMirhdWb8q2egUnMm4rLhHuVVSAQBBQd95inWQXpqpZUx8VzGXbiHw8kwfh",
  "key18": "3MYheqBCqGnunRPw9JkY1K8yVi75ZzcLEAxbze7tFkGfufsRDJjessLi6C8Ptq4ufyKbpcVqHkVbNhCVovKAXve7",
  "key19": "4UuNqivqZFLwNteFoNWMRKFtDgszGkEn9JyvLHHkzWuXciGC6C6m2pw2cZJUBzCzjXmTXzfff9yB4CpH4gTRfaPT",
  "key20": "3Ti5WYn3ddhgiVUgKXDvzkvsf93S9dataubPx8d7bLENJ4QRr7uPjWRh4wsGdabBmxSC45CBGbgWp4QCBznbFPGS",
  "key21": "3NsQaLiNGwCAenZzgJ4yCJXeqjLFLM8QJVWnTFjGwiGS46HAC5BqWhhPE9a96WzA2YiC94Ewv9zzUMocQS8Gs9na",
  "key22": "3wmjLmL7smHduXpoFvz2E6uunpi3K1qXN64THW1AdRjyMQzCZjMBzdpd7sPBydggKuUGAHx48mrkEUw1eR9f2CXT",
  "key23": "3cgwQ9cJ7tWXmHtQ2eaoV3vo5tNVmCkygqRSmk3VZLmRXEvQ9rXsP8LHMhMKJwfPeFV4r11GwBdXUj6TX542K6fh",
  "key24": "J5WiHX7xyHyB22HzavtYhNkgxese84vawUjDs4JNkkihiBvbsa3RZye9M617WmDLPmA2EXw7mNv9UG1c2PxhkiY",
  "key25": "GQzwrznscFnNmEwvY8ymDZQiG1By7XNxTPy5NmHsvKH4XPvCppbdSQshYcvMm2okJz7nKmhRuAypGYxnx8WvSca",
  "key26": "3SPbLa1miMNVNadcd2vUtCHEx8pYetWVN9Fk6o5Pc2Zx2LgJf9paEGFwgGEHQBEsneamY86FhTRrj4ubVPCSiBsJ",
  "key27": "4LVp41b51SGK2Sv2GSVJ8jvXWcd6HiQzgAbyWYuFPRsh1HcBh8uGuDD56PEQzsQrsQVMpXGZnhAmCDqGnLRpp8av",
  "key28": "28PMdH5qU5TbryiNw9G8QocMdX43G3vTSV3NKRTn2vqVdQv1jQjxeZ2RycdJ4twiwe97aEaykNgYk1Ds226EGtPT",
  "key29": "GvyPnt95vh4q75xcRLLTGpx8oQ9faSkFGAXx4fsdP5KnH8ULzmSwfwxJRBC5XSsGCxi1GBTpkkVqsgcdBSv5mq1",
  "key30": "3f2bBc8w5QSaf9mABL7QgYcR7j4GRHNGAk9jVjBdwGYsPJpW7R4SnKxWUqFKPo2ZHjL27Abq2CvuQLnSWoe7HUzD",
  "key31": "2DcQVHMkxMy632euL4CFEscSmpnHWe89A7XfBMg5aTqhtCoG3LK8GFaHDzLvuQUATkuoCb2Ntb7dQVSGBCLWWixM",
  "key32": "3vTeFAYTjDxCacaYWc748WdXYRcWnzXAffhPUfBcLhiqhGkcuui6LaMzp9LvBkktnTDEWWZnxWZCXVKA7VAPnzvc",
  "key33": "3bGvSmkqYBXB7vxNYRkAjCNfee3k1PHichnt1zVc65yu9brN92ccyahXjLph1GX3SSQBd4CPYBUZnJtFNADgFKrg",
  "key34": "4WQDaJK1WXdpZTxq42brc7twGsZYBjTN2rD7qN41PTSS2fNbEY3yL5s6aAbG2JDn4AGRmS8mDsL5uxn3X2xuxMFu",
  "key35": "5vjY1F3kjJKqqaQSYRtg1LjCx72AngxV4P685xTaGPgGhmLGW6ECHGcgmzytkTD7rjoaaqz72JmLcG2ymXwabFGh",
  "key36": "23EV196ZSUh9nAE8V3dcZEsaeAK3vrzrjVkvrGWs7b5aRQCLTtUPEfi8LyJDycHwHg6W7XKLVL4zrZhizsNCxXq4",
  "key37": "otUkXDu7qe59BxvfiPDyoN1Qu3vvUbMoXAbjJq5BgumaBh5Ege5qgzKy8DN8m29jUyVuQ95y7c6t492BbuJy4nu"
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
