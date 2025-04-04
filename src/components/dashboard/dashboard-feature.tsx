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
    "4eaTaFqYLRaRnp5m4xsX1sZehkwPWc42uNrQZJs28xtarJhrmTnEPqxyC9GRqWirddb3DHx7VhFJKteYAzum1T1j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jFVBJYFcN3zFaGZVrUXtxGk4pYMjsV2E59aEEgymf4tMgW9uFrohqSndGmb3VU6Z7RLaPagNuFojaWvD9X2eoNd",
  "key1": "5pQLMK2V89PgaKWWsm5ztnV4CELiwvyVDXjwx2msCjK6JdvJ9qHGznRTFUG1kZ8YyoX3ErDKNqaz2Na521ZAcvh",
  "key2": "4TqxBNSivC3azY43Mq3zLNqtUb8GKmPQhkeRzcD5P7c9WQrJZ6YEeUdohK4YYTMbiVrw3xF1xBWHCA6Fwp2818eg",
  "key3": "MFVmp2nLxxdXDhudmqfMRrW4hVmzbcuEv2RNmdBPoudXwHTndkiZrQ9mQGyGVp21UBq1bqcVdfRZu1TxvD5nrLT",
  "key4": "4dMCJhWRnXciqkSPkNsEsEPYub3JMwzcC8XKB3UNi39KarrBYz45F5eqFhjDMCiipPFFfkoHyf3XE16J1mYBJjkH",
  "key5": "4ceUSqpUEnkEZ4npPeqAXe1Ryg3rHFRyh2hL1ugKRgUFrxUsDxEwneR8zR5RjgHWw4FA3se8NzSnR9p4GNkEkcuE",
  "key6": "3bWtGWECrSM91oqgYAZX6vQY4NSWvYaUbovHP5jF4NkZnvVjBMeKUsU2whjtNQfaH96LQBriVASQGsw5MXRiXQLr",
  "key7": "4uVpEGmduXFLNGXZwHZkrF8MRqJ34acxxB1dRSxUAknN4b3xtnVNJEia5DXXKhK7WkfUJWzqWZrqm94bf3wdqqMi",
  "key8": "4zY4eLFoEhFK3Q2bUki4gFuKA1cGX7K95LayjMLoxqmTU4gzeoMGz68KxS2ZTZobiDxWf8eTSFnnQZDJeK18zt1J",
  "key9": "3hnyevUPUzFypvrUpnZmL13e7HHczYke2NsH25S3QhUa6d4n6Dj8X6jFJ3TV5oYtnTbinEVWkuQ8ZxovvtZutF2f",
  "key10": "49HrdhNEDfsBUV6BV85nxN9kUr4FzjYF6zr2AnHwj1VFWryKh2qpWYQxk6fjaYocnBSuAzqwZ2U6graenCk7NKsh",
  "key11": "4hm4f8QWZzLhHCPavfoYrNQjE3A5J9LfB2GHuY6Tss5ieWtB2sRYiy7KHTfDGTZBw6qjZbfcQ6zpx473DBKFWYsp",
  "key12": "2av6iCqz45c936HqV8NwVdiP5wsAAnxjSZPJov1qTm4ztnwjQh7g1RGsNsX3cfnPHycJMkNM1dURNmkvFyhymzpw",
  "key13": "5Van66m9oLZPSpbzUNXRsPgcCaY9y2cVBpTvv79ZobwciNWqeiL9TC83JEvvvgSGyi3oWX9hawq8e1PietsTGSF1",
  "key14": "8CCcoKSe9Yn2pL6AKD1Wftq5d7BLFhhRepQebRBfHj3vAKcQXcFJ2fxSvMhgmi3GeHUEGWjk41KMmNr1E7ZBFxQ",
  "key15": "3K28T4KxVUeHA7HnvomR3WeNKf3vVFu3qHw7pawiMhG3WBaaezTLwMtYeY57m5ihUKhxi9zjuJRXBtxFBXaFd62A",
  "key16": "jffDhfK73rEycr527kTGFZUzDvBX8jBfNMcvAcHwGew3h6stJx4AqiqFRaLyS5W4JK39A8AUFyMPiGEd9xksgKX",
  "key17": "2FCF3rpkmyZjGhuT2ps3C3HBXQTfSt2BbASknpowfniX1QWzMswLJwpUmdJBGk4gS9ytJ1XARB4Hq4u5f8fwXar8",
  "key18": "27y9df7C2eBGrs7RvibVWRF3HZ33uR6CnhTH2ebCQivzTzNXL91CkTFgWKRXieUSE6FfLWhZyQsqDJw2gvSZbtfK",
  "key19": "Jcibr4eFbFD3wjeGjJTQ5HJw1ZSYQG8mdvn7Xty5TnCKayffitrECUfu4eMmyqxedcc4axscr7kXgTmjzy8GoyV",
  "key20": "32QeHmhxs1KGsu9fErKpJ91Rsfs8tUJNfEmPxriXDKnPZy6PvKchWjQhKNVAvUCvJHMNSx2e9pew2f4isWNvubwx",
  "key21": "28DHogVMkmEixwsMyFkcpukY3zUjw4cjDDVpS3cuBvZm6XiuAk3AcjcJyyJdVWgmLRZRmFQQvFV8ZAQDA79pfbrF",
  "key22": "qj6bvmVrbUt3ZQP1Lkk14AU2BZAt8hwCVNhHKPoyXQWhPWBKqaR1v9V5mYNfspUJgZrFvUEsmHaYPQZz5miSVfH",
  "key23": "4jyjYrJkb989nR6LjaQSHD6SVunfmKBd7BdsbEwyGj5nPJ1rB4Bc4gDeszL7zY6YeDMnJsB23wJ49EKrzvpW2u4G",
  "key24": "4euHg9avTS8i17K5zAGbq9KaTXum5dc6buiDjyCoDJNCU9mMFedSs1NFXYhxKtd3dCD4jrLz3W8hrZFBGqTMCwMr",
  "key25": "2zHm9t9hstV9enaz4KoqzfRkMBbB8by7DPYAvWaKjeZ8tYSi14Mg6Yb6jqySEF44qMicCHZxPtnJhx9soy3MkxGM",
  "key26": "48tp6CbUUvpwh8i3wcYqoQ4bBEhdnoZ7DKCTjgBx2A67icr1ALSqPF7wvng1ocAZDFYLo6qvb7K9z91ckyZQ1XG8",
  "key27": "2WhuziaGrjkkZ9VctRVmcTwUUj3ZRD4naBhFtQAuSzguBPwJUBBfDPEyC1gnCgttiUGH6AKLxc7dZksxUfLktBDr",
  "key28": "4rghGqeCrPDyxVwyg7uG1JqZvAJgdiBgcxh2mSnkxRjwJ5u8txq4bSgd96FUn855FVMewPYckf1FBYtsiaT5mxH3",
  "key29": "24ncAPjSG15HMxtxmt9Ma7B91Qt518ZBBxjSvUHKmbHyhQobwoYY7V8hahaAVKU8ZuD5r33phopEv8qGua9g1WAD",
  "key30": "wda1go6L2Gxv9Rp8VRCHWG9rCcsfPX753gmfVMNkvekw1CEeDAQvKc3k92puUwsD3w1hBa2fYC9JhUzr4TTwBMu",
  "key31": "5Qxqd9aJL4b923fGY2JZXFWNVweQhqqp3xZjVnGGCTuqK6wxi1tb7XRwNVrt4Tyb8kBTCQXRWivo5NU2pN2akdEc",
  "key32": "F3WvNWFz9WpMKgg7fx9pREnU3Fp4iDL137j6aCcStQwm9LhTyU7P2Y5mTYP6oA31JLMZRivTw7Gcfwphcf1ay1v",
  "key33": "4qUizzvWMsRg54QgKV1qxaTR8oM83Bnzj2EDdMt9kj4xtpbDYKN1hZxx5S29x9afq46MkZtdDHUvcqFtQ4aQRa1h",
  "key34": "571CWmhjg4Tnf5X9E2ybcwbkL2yyoppM81pzFNhQoProhZJhAGZevFTGDQqQ4riVFyiRNEpW1SAfcYDpZX3uT7BK",
  "key35": "4GZ8JVohXn5idvXzP2neMuGjQtGQA1fzFi4uZfuK4frLdCDGyB8YnfWEpJ3b8FF5XjzyfQsoqyLMqG4KF5cDpnXz",
  "key36": "3XvGVWiXdrYBFt233ajHYagU54tYtMQkT4euyyfeo6VwemGWFk2rT14q4VX4B8suzsNqCebURVnzcS35DHaiKGvi",
  "key37": "vHFk37eiY949ttN1KotL1eCtbZVjoST6KMcCeemVqwFswNRLF7eojxawyLfCKPo2jNgXwSYLBSxCZEVWBuunFJ5",
  "key38": "2jvBZPSwdS2E5P6HPkG3bDgnsct7sMK5mx5HPDrwFpkwKff871uPJ6QBLRdBR3uSpLbAqp2UET8ZznCcVRR8VGvP",
  "key39": "4Mnx3tNSL4y37kBx7vCcBYrCMf5G9HXgqc8yhrS2qTCAiEAsny9ND9YVLAsZDidxFKcVJk2DeSDQJBwvCS4JPwqp",
  "key40": "VvWTiNJvwmvaTLoCGi1uLfKMywwebSTienWFYMaNZRWo5cJXMN84u9Aqnzfn8U85mjJ34bVNohKqrWYFWfkLqZ2",
  "key41": "2AUEdx6ary3FEMjLv3EtQuD9sTZD2ii93ghAe7HnjpShVT2q92pmoruJiXKSAuW5e8LYbn79tHU5SEqD15PyNp1S",
  "key42": "65KJWmW1CHGFmYu4ackspujS8UBk6qhJ6Gg5TnJY8iyfVc4WjATQCND4mTf4ttFiBWHwVivFibHpDePgG5B6Gq2T",
  "key43": "24ENQ7g1TETVpyLpxBCiMMEBYNKwrjxtsdJhNgte9tXRLhFU62KoGmdZdBeLf7EDXNE5dLe3GFgNPecUH4SaPgFg",
  "key44": "32BgUgbjyjxMj7uc6mDRNxBPeL6RdmfCyMgJXS55SHJTWvehHbHN6ELVzp9fPorQ5DVJF6aER6rjDYDdURSLdXaq",
  "key45": "55ibSXLv3XSPwcpQp5qxFDPrcGESFLmE9fmD7dbMvxVSwqA1wSvHd27ngjWCq35cjMaFR7XNkcPMvxrFRUqdFrGs"
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
