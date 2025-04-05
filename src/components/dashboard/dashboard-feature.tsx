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
    "5U9dQyxvXWidE38fhifYQ5kRDPkNzhTmsFNqAcP4RXZnnJEgH3MYnYqAWdMyttmCUVn2MGtvEureaGDShYWcvwdm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25usXVebsSWPgHXxK96dv7kCBxKLhZ8C1udKaT1AyYpmGFYavRQ9vEsdVdc3bKSgJwZ1unbf554Ce5d69VbEGVPu",
  "key1": "4UDFrWFZ4geDiM3bSJSSurNzFNHDAF1QvoFrQA7QN1UEtdmueeGQsMaE7DLxSFegxuUEz6ZW5TVw4nBgyQSJWBG8",
  "key2": "4CqdbuFrkuW2spinX6AMkHfbo2oC6YHJku8TijA2GMeYqJfm6ovnzrBhAuDU1sBAYa7ABg7HgcggxWhs9cL3ese4",
  "key3": "53StEr2TqFVco4C4ezWdM6bmBEbQggGmfgNmyQEZsKirfM9SxwMZ3iRYDEgi9h84bdYyukuz1brGdmtL6F2PosLw",
  "key4": "4WgETVYKr3a82cg56FnHH23TaMqACF6ShLtounz4XShWG2ZovxjcTqJpDRJBD2zqFeK2BFtvSM8nB7Z3NqpBZxLz",
  "key5": "62d9ggbTRN5ZGTNv5zDMEG22dCxBm3s5vfRBiEM4BBJz1dw5Peukzk5o44ck3LwFB6gVCh7YyiLs8aPiLjzhUnEU",
  "key6": "hDBJ1eu6Tno1tp1WRV5XXDHyeooDzrjyErWVXFvYLqP8rgachriDPJe3ecsyBgdUX3RoDVepZ3MBRQcFwuvJ6JB",
  "key7": "4HzhmektnRiFGXiSwex33XBrysjDTQfiQzRivU3PhF4G4EbH7dZMwJAezngnXMB17N4tQxASNfHdTqUmJiXJqRDx",
  "key8": "dkv4NK5QtyBWC52KXoQmWAx5UaFv2RF3kRfTi8Z3dZfnbnHHAJbGYPfMiPGjAa8EuMBrFCkJXyuF7cDotMYNwJe",
  "key9": "3YCeP4X3dNgKSqMYdzcgXA9uiZiVGNXtz83suqgLtTfN5KTsQMGmLmjSeUzZUy6y2r8hYywUsHqfdPmCfoYkivjU",
  "key10": "4589Do9DX3fbbnADH5iHhSSN1cpcSuQXTJ37NG7TNDqhuAhPizpUyPq3Z5HdhgvCUr2XwNrBowgQeaM5wbB2LCBC",
  "key11": "gAeyDBkCu3c4cecVCB6qKsmfhcBVLYmSMNZxNdgatPZ3Mf3sVS6ugse8vTUQy3qdPgWCe2uiGXoU833E1bbsyps",
  "key12": "qTQJQJNbHojpvCDF4gPf9HynqprVmm42nVk3UXZ6QfAX5AqwLRANgj5S1JubGXKkvLuNGiSByNhDznNFA8PgyrJ",
  "key13": "2yNZnuzy258M6pKh6oU2spxn596e8fTAe9d9rJ6taiTKW28Bqf1f5eXx3WZEEmMWM6Jy98qvWHz7bdpQdjgvVF3P",
  "key14": "22z45S29WMvd83D6BavLfpHBxYhTnafYeQWqxSmTav3abNBXpNM2CgiXdeC7C8tAvAuJpivQXbgHMwmTbnv4X7Bd",
  "key15": "3B8ZAtuNPTsPy8vdNcqx4dmeWCP6SSrJN7ZspkbejQNPszEd7CyE1z5RLYpH2V4QgDijC6UTyKWUJh54gyYrKdX8",
  "key16": "21uxYeEkVuCehrvjzu9hya2YiMuESfkDgHtR1VLdUfi5Ba8t3pyFdGXB2sdqwTx8qwWQ2nKe2epKcaepxGCNWkNX",
  "key17": "2Y9CMKYHAX6G5wBYQbR9QCdSYnE1srgAJSm1Gy3pfWXGFGeZ2rJZcmqiayGS8Utpb5LN6YeXviWoiWjXk1TWrWD1",
  "key18": "2aZarW9AD6dRGkt9ZDLP4AF6mexLsVMCvx9dPUX64DqwSeQFx9E8mt6WwPfbjh3MGMJjnzCV7StS2pVxC9uh7TgT",
  "key19": "63jdg8jtjAdiKuVeKXP2XWau1Bmj512mYEYzia5gg7qaLSjwrCN1cHYGmYRXrKRP58HZ7QaXGZD59JaS7mPB8kYF",
  "key20": "51uMsSeK6cMufMpKuL5t6zweEZYqEsCc52qanaBZcUSW2nh3ArgjtE3wZMBDtNNrZ1gWxkWFUoKju4xWFBrCnmw4",
  "key21": "37GcsxXqXuBkjcGyiZSxEBaP6uyxsXSQXfK1VbpHyooakKHJYdSksUgrPz7oSrsNKwSZTtok6ipakWETNGyYZiJc",
  "key22": "4jb7uvftxw6em69wAwF9Vz62w8odX8dxQJcb5ywvVDhBLNGvHVUJLfTAq7QuJzdChComKCRqSR18EHQgcvjPKve5",
  "key23": "4nDgKhnwYvCPXvuFRecFvi2BRqj9Fs4Tewxxk5vpKZkhQxFDjusdptpNyBWYvuYLN95ADXNpWKMFTx6P3inic7Z7",
  "key24": "5ZSgV2Bhx8LWFA1Bi6KysuAhuVvJju9MKAAPaSRnypdgvWUjs5zeQwxtbfb1LMTTYogw8yeMjEQzmTjyueHtc8iP",
  "key25": "3UcUuQj7zN8pQixVbTUpwENULK6F7yMbrBzuJ4p1GdEx7uvmVau9GHVnQWiJjJYoWzfUHsJTXFQJiZcnaz5hRQCL",
  "key26": "2TPNjh2Z5DYUduMaUheDV1VqA8R9MxPUt3GqfivHGXKnkdkENDcofQZ6uDa6JHPaJbnJXVJctwbwWAfbsY8y4Gta",
  "key27": "sxvR9dD9TpV8eHBgqZ5qs9rGF1VUR7PuYPp21wWekzWUYWEjmbjhRTuGH3aibgCtbazDUBSREpUYLdPhdpz8FE5",
  "key28": "5f1fxiRpnkPoFzJ2Mx2egownmA4icNHimdjSr44HF7NTmbVSR6mGnczwSkuHVJVXMDV4UzRwmWsfaM1aV3xKpVze",
  "key29": "2SPaUQyfeJ99KRA2DQg43yMno9RZvKzXXiCDj1dHE1AZoPmoGohUWq8M9n9DAhU9chZEd8PRBqbGePLwweBjKEBs",
  "key30": "5pkMrikvBNiaVqEwRKZ4d8eRTMEcEdS2AYpSjsRxi7KRHQ6XNZBgppmKjLNrsUpeqA8JvtinqL9nkq1jsTKgUMJ9",
  "key31": "5ibwu4QJtuzWZNgBZDShVWg7gE8bjRb644ncroEZ7NodrfqEVS3rmGeVEYjocWVX5W92vktujhE7AKxLquu4Yqsp",
  "key32": "4dTbdkWWidHLxF2PsiQU9Q7taW74n4XwAmVPDVktrAbSFUFm2SWTUFLRkTjr3nDbYQgYrPyD6LnrG5A7URXXL7xF",
  "key33": "3Gu8h8m5TuoxqzkenwNc7fZrW2MPZ9fRQuEhveh7MQAXrWnALZjML1X2ybNwV89GUG5NdmurR8p12Fkfm652y3GZ",
  "key34": "5ZjGbnhYQiZbumcxm7ndfZ9S5Xza81dMYQfCEvovAHfw4KEtdvbhkUo2oihNpuF8kDPNqb2iCMD9Eb7maW6dUxqX",
  "key35": "3tN4QRNAfeJWfuK5uvseGxs1TkBuKjYUDsMSE1fGUdgkTWAgTFsVBfWwBn5vQDRWMpeBGcYsa7SXKDNLZyMDRwD8",
  "key36": "WV7E7GKhorEusg3xM4hHL44mJ5DDHc5imihvpgYD6qGvRu9bR1mkFyNTyek2PCyKDUEQ5vzrxf51yUcThXKXaYg",
  "key37": "jF762oX9EkX5Kt84rdQPEsXzWKAUCqGDo14aPg3eePN4QNT4PHMN1xgNkrLnTb4uLzgcKqtDx9KbiBJ96Jpw7pQ",
  "key38": "2y4QzT5yv4CjNqwMdszWYNXsSu3DwZgFKdfT2hZTasPKMWhSEHgtJQFdvXcpY7jQtreQMHbkp5tJahHG54Zc7eMd",
  "key39": "5yEE9cUdiv62ddZhEWwuKuo97gTAwcMGASyuCTe9LJrDfPSfEmYAozkgGGXKmZ85HxuNQt5iijQ3Xsa6R4yB4oTW"
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
