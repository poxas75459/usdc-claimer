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
    "64cJAnQ2GRM8fUWeoe6HbPaM8DYQtU5vykLzotdihgjYwYrQykrWW8XNX7zJGjqMk2UUkhg5cpKhTLTiJrKpKSc7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26yNxnHBT1J2fuhN8sZMX9VTXfQ5H1Yb48xBQk6ycYrdP34A8GFkWKqApibv6H77T9ZvpPzhDpRtpnDhFb4kqxF6",
  "key1": "2UkZJV5C8mJhmY5X6CWo1219EKtk9H4dpCpKm5ikVz8Rt6ThCy3x56FjMUMcyy2gj2ZoApDGPRQB2CSwvwm7wd9M",
  "key2": "S18YbcEfwXvTtQWUsGnwJGp6tinf2N5UEZBAFvyLDBVsB7aracuHvZpH9oaHywTBbtDb14KNHZPe1XTVxs1jP76",
  "key3": "4dW4WuZR8YJdUuy9HoCZBaD1QwtRrfADuT7mfn7gLW7y55G5WDt5Usi6eALmE6WPRBZuyvGo5R55vmXQsgkbMN15",
  "key4": "2YXY7qqnfAKrxUnbxG7K7uCpofAyt5MpDoJysAChhMhWKY3oBpUTyfQcL6Fm5g8FJGV7pDiVTbUKyeWKtmtXgDSz",
  "key5": "6VwJgBZhd3d7MhoZkMb2z8Ad2RtQWEUiTpuerqoc6C1CgnHrAkhLyK6Q8nsoUx6CxNdxGsHEkCtxWrvu8FMC8Un",
  "key6": "DSmYtX5Stz1b3Xu2Z8ELwPK5hkbsS3htZLwA18ABu7CYZgrXGVtS5iahiXL8ZsoJCGGfHTH53SLDPJNr4s9hnzv",
  "key7": "4AHjmCLK8CJYHBENd4ELpmfLoDWYnFkHBLS9ET2Lrf4qGUb6QPfb3CytuLAd5cmxM3oaysFGmDEmPb1cq52krZVd",
  "key8": "5v6ZVJcg17BsvN9Jazvyw6AzEPFm1kRFMDTYkNeNMnApogyiyD9Cf52nJaL63QaUUaJSrBbrNYgQoyBZNVyY5FKc",
  "key9": "5sdobJPEc9cENvfeC3njFga2V2ToLtDbmUSg5RTw8z4V1kZbQL34xCffT8uWZ9fMgnBgwSQoM65eA5X829ad3kG7",
  "key10": "2pW6v9ZhhWyY6xRsT17ypBPePqL1u11iC14122YGoRw1GPiwzEdYHxtQmqC2fcuFbs5JdciNPEqYWftmN8yigfQQ",
  "key11": "8ckkHmbyA714Xruf6nqJmzM3zr3Ky8ZYcPLUYfUqdAg51GcdFpMn5v6pwYgrUDH7Pi5VjQAAGCUi9xB8rwSrohB",
  "key12": "5yMTE7bLp3MjHFfvvSKHiWcp8yudbMqeJigEmLujyVBTfMJeAUBq22n5RCJJHamefp6LX6y1kdyiPjaa6Ug8STxw",
  "key13": "28eWmquZraT2HD2ngFXeH3yYCDEdtwduMgLxfA7gqd3ofbSyRzVqpy4A2yzhN1krYFTVbUS8nSEb29uabhcdHmQt",
  "key14": "3yzJBdAXUF1M2q5rqA3tfJSb2Q4HE8D3FuAxYgEWRh34WKU89KWZsHdPmMVRqtfFcyveMTW8XNNmY5CGr6YJ7yTy",
  "key15": "w3iMUn4F5Po3SPKrFbMs5ymoWKg9CF3uuCGb3L74m6nCrjWTxPKTMAgPcpUYRV2SiFNqabZWKQdBXZHVF5e16An",
  "key16": "AUxY1vewLoR2E5D4DXWfWsP49CoFfnbAuXQFSicp7i2AgAqVTFm8cgNEcTVhRoGwqjDTrqmoyREaMRvrotdckRK",
  "key17": "37Ekpg9JCnNMPQfEhw7UrNw8jDundyWhkrpHzkgQhzLc5mXkc7APDNn6RhudpwBBVEsxyWuNbyj39YgZZCSrWq5W",
  "key18": "4ZdtA1YtEJLQhZDDd6TKbx2EvMC8ph86v91gSPmitWKhN78scEx6VkxQuDMK3BUKNtnrMQvh3i6YEysV2PTR2K5X",
  "key19": "3aSTNRoXyJsdQW5PSK2UgfZrsjZDbP4A25D9jrgwUhR7K1A8tN5ATAXkjksNHNPjc6WtJ6Yc6nY3ffCc6A8NY7X5",
  "key20": "4ztpyiCtJy5nLceeho4w56VyKgoExLXvakSRfG22Jzjr2SDEPbLnoFXFRr8bGUv7f8pFKRGhNQVRnmU7vgXe7Bc5",
  "key21": "3cFKoGEsSkqMzk87JyE6qoyinSFC9jDeRtcj2pKnzyjUDVdoPvTpXPDDes6KT4tkzvE8stwrmPBvKWzWZKTkJu4h",
  "key22": "4Zbko3U7YazWQ3qjHENZrQm7iuVtiAQmV2xQebwAWxxDyNkfvx1ZYk5mJ7B4eWPcMnZkcNYAcXjFLNC2FouzsFd2",
  "key23": "3mpfQo7HCnWnSYmCkcJRP9vVsaBF7pE6NpCfEyR1h4bhb4Gd6FMUdWwYGeNch8dnQRY8ZKvqMVF2FHUXaTqpqhdQ",
  "key24": "5v7LUPcA7Y4E4WFUgXJwvLrhgJ96yN6BvagCZQK7zC6FQeRna7xYuDZqSzLQLaUCwMgsGKefWyGsrA9n4kBj6VC6",
  "key25": "2qQQXCLJXDDNRegz61CdcohCGDFmYhvBN1MC22mPDqxLDMEL7LTJnDPYtBLkRHaKgSQtK4CnNRVTLV99juAD9Jxx",
  "key26": "2trAVUyQ9EC4HPEq98qvXHsqTaP5QHdc7u8vd9u9A37oU7tcKqc2Ttz76dHazTHYsoW2NffcArcN8K2Hj7JyX8Eg",
  "key27": "2f3D4xFDAJJ8xRo67tnMQY8tTGE3BokDMpcH7t2forU2QiVLKFBytwMSBvcFV5M6oymDp1JVsPG9cVMw5VLbA257",
  "key28": "63qiXvikXCC8fzn6JgUd9LEroWKhRTB7kz4kux4rTfUbqDRZQSijJ9DMtayen2aED2ZZusvhuhbhT52sF5fb2X8n",
  "key29": "335oLNhnRzBwzM81y5eCbc5mBbZA3FpZSwxzvVSquJyKnhtxhY3z5Zzzw91BJ7tdYa8W7g5AkSiLJLTxEuZrm6Xy",
  "key30": "2tqeQpHFrYN8BAskCFCN9k51ygJxq5i2zhdwncz7spg2EYKRjQmDk63QrXjGMEZEbRrZ1TYkTFAodyjAvvDgRKi6",
  "key31": "25wzTKHM5rdwEfRj5kjKpvAUCbSWQRBi8m8m3dhHAsfE1pTfdTrLzPcUwrMmrkFy1qd6C2nKLPcasMHfTbDYzcgU",
  "key32": "3ajcnYzit5UBMSixiCN7Thpi8sJnBbm7G1NwBUhXTJAf2Zkhnfe6jkwBTRWACaPpgcMyVD4R91RyzNCjSfMh5D2d",
  "key33": "54dWhNTGFLfy1kpPy9U55dX8T589DWuCpvyTCR6TCyKetgrPkhwoKSPKtGEGuth6vWXufAkH5bNFjbGE2gGsfoAs",
  "key34": "5VV8TJjBU2bijLmr2MGEgRG76duBZK4fgaDZ4WFXhaJabbY1HuEB1QdvEB2suiaSZKivMXmBJ6BuM1XEXevebYZv",
  "key35": "5Hr4RYHvVRsK76esDSMtTnt9PQifsW3GanmPDBj14MGxTyCM5y6hCzZF4JCAMWm4ibhhEHdzqo77AePkpabG6VwF",
  "key36": "22rH6AqanKRGjFHjca5fCMefTsGywRxEsudU8CP1z25Ah16hCgwpNEZCnKkDrERWW3ccsFaifGn4ca7gXnYqxpZm",
  "key37": "3uNRDJx4Z11shJiH6AiavVoQQNLwq7XTS8ePAubj9ueGEHAaozQQjUZF5ojYQLhjJBCYVRwg7aRab8hUNWPWkRGn",
  "key38": "2PVhwW7uXoMNV5orYpKJ5eCxavay4ZwmyMxbTNXK1nDz3XTT7kaCK4DiryggAoYVFW79UmBh7JcR6fGoCXAwFzm9",
  "key39": "4TEkS3gPJ31MwGWTtmS6nxW8uYZxAtxGicwhS536CmBs7UiHjQMVxaA9NAJZMHEPrnQb7pwAW2ftFGLycUUhZ63Y",
  "key40": "2EJoVshcJYcNoweRqQB6DvVGnifT2FAn1Gwbxit89genhGWcq19r5KA94R3t5ujE5xX4ZpVCxTCtF7i5A1pBjwx",
  "key41": "6dBj6TCyfFCZVno5tzDDN3C5jAoxRTm18T5Rgy8ZCRS2T5iCcYN4qLPdrcY1foA82nbhPvyNcJkMugBd6X4rJXQ",
  "key42": "2pHAzB4sTF5Z64M9b1dES9GBVWmUcYFiRG5HFSWYPMsuhGSpYnSu36R65spepaT2mD8SyY7EyJn21R1uUfkUP2gK",
  "key43": "5eaR7EJv8f9Bo2hPWF3VFpD6CXeCL4f2sPCKTw3z3E4TTyJXQLQtA1aXh1MbvV1nXvTat94r1QLLFcRFAGLJNikf"
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
