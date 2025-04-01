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
    "2ithNik8dQTE6HbYR82eviawEadHej5zzYigDvq5nuyu23cGXcA5B72druKpJ8jcs8kdNCXBDBze7MhoWxfZmE2J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oYKeNtY3XqsDqanHzcnymBWNwBgLT1moNAM4yiPrXVbznxsXkPPREe1ArWH2dejskTLpqxoAecQERH4wu7mK21G",
  "key1": "q5sZMhR92Rm4FRDa9M1uTXhgH1Zs1AR7jRDvAwBgHEmvNCgqPX6fD4kb7U1BXrPvBpUNDBwRvq2tQiLuUPma8BE",
  "key2": "3svJjnp4Be6frEDKyryKFUSdjv4Vwb5KgMo3YvEmFP5phmxqkyG1jsTDfDoDcrUuNLayYBgRW1gNw1juFiASaDnF",
  "key3": "3kyoKauka2j2Y8x7FaJeA2Cfxg8oPx14mnxpUL4kPcToqGXtg8ELUv9RJ479ACpWMtsAqc59nyruMdqi4PW1fLjS",
  "key4": "37cgGteP2dMU94ZkMrvHkrbQvVTAica36yhU73fewKz9Rq3BExdacVDf2b1xxddeC4Ae1y6EKgASuUo1hNStRsao",
  "key5": "2FANhZjSYFoGKRLypXBbGyqCZQWUiGkm4EnVXCuKjQwjxwmmoJ3jQzJR6JqwyNCwg7DEvrY4uu46UUiQU7ombuYr",
  "key6": "2dWqvxyeioyX6z16WgPKfyQXDNvsQpJt8mVBS8ZDwoanyZ5VmyqY7Vf86BiLSs2cJQe2cqumPhsA63yZUBLFLbjM",
  "key7": "2w7bdJuWkeKy9XAcX1Bc7QUYLwVsfTarYnA5Drk3e8W1GfBMnRpYdoaS3gmZXQpbNXb377SiT8YD3wYi2R6xN36g",
  "key8": "268CjKTtsjyLg9CQHxcprS3JzxQ8iAxC9Pgy3Fyx8AUMvUQJXWEnc6Qnjhn2w5soJ68Ac2Y1EwXFWCAGkEyja7zq",
  "key9": "3dNFUqbyKZpzW5RMaJHitAA8Ae8zcdUHpAAPqVFy3K18yKTCsEdg8G671pbw4qZ1TbfJ1i2fUoNpVK8R5ZiKTyDE",
  "key10": "3b3D7zgShK2cdbzV8z4CScHyNJ6J5g7FgGgBnSJNpufxBZYVkfrgDxSjuvc5trgovZYmsmi16rAMgQW8pgPGSTbx",
  "key11": "3iV6Fv17iDyAyefNQBCLUVpU4Mo11MgqGdBfUY6d3xppXYxVD6HDKf8FBt92aLUUNeTwzC9S35SK6fKHp2riyYuF",
  "key12": "4c6hFwrxndvg9nJq5tgeE5mZbaL1JmHgucuXYNScz5mykwN1jwu3aXU6YTAy1NkBYNYKnTKShsjF8UVHw1p842mE",
  "key13": "5bdeVAQruqeR4kn9frsKBSLwdbNKRz5sVvqecSkEXvXNmdPDwz67NNMnQupoSVEw85BCpwJQBtvYbus75qwZnT8o",
  "key14": "5LLsxPqb4d1Zp6cYnXYqc3o7F4v9CN6i1QfJp4c2Vy1bevhDK54PN4iUYcgz86tVHnHBWWfNEDMxY4HYXkkkrUTz",
  "key15": "4CEYUjBgRSdhU6g3ejn6JyWuZ1Xu3aLCuX6sG2Tbg3XKaCN9uK6UAdWaQ7eEKCYVRHqAjBXeXjYvFRxdpdkQHpWV",
  "key16": "2oX5GcfGazgfPe4fycN9Pihg832T2ydWhF4zxX6SpGJDnDvAECdpFdJHWmq4BTEYin6BWMVdHGqKjUtAKvKArzgx",
  "key17": "5S2ya9gxdysxitQRZgixm8pAaW5VPHnZhRDkXZdGfQoM8AUzWg15xkiENxCtHC1CCPEze6XeYeZL2H8ivuuiq3zQ",
  "key18": "3tkJksLXe6GDmhJHL8MKAVyQB7MGuNg2NEz4AF5BRHRzKHaQsRXSCacj3a6zZX9fGTcsV1GHosfyKCT3qfs9qVF3",
  "key19": "3Uw81vVMwuo2QjWpfrDRCKTZL41mw7hpqGx6qkWKMCg7yoR5n6G2ThiRL1QyHuNp4FsNgrG8NHk1N9Au5AvssB6D",
  "key20": "2yQ93mfJDL88EK2Ab8eJZr27sSZ9hKQ7qE32rsYtRq9xzv9pTQitmoMTSMqc3zEBvD3aiwzPtDkTMHsEccgCNUTU",
  "key21": "qhF5rpgxSMxug6uhxA1KBeiUWEakaK7YUuNCk7qhK5UkNNJkV54gKY8Vw6Jn1fZjVHGAjsYeBsShEbPdAvhwUTi",
  "key22": "5B6Pb2h75YaTqkjdVFgWHhcPY9M9vujUrLioELA13SCNiMgji96pYcSmdjcMfExWSErVeKAPe8sbtVBiiXhLGZRj",
  "key23": "4vMB5SMg2ffSf8vzme4gYK7PiynKtqCSG3xe7maxFnpeDiBbqYmZ5DtNTEirDKfGkWALVADkXsAQHoZcm6FBeq5d",
  "key24": "4KWcHpuiKx3UGfME5V5r6R969sD3kdBc3jGc9ZehQfJCt6h3UQB9YSSei7WizBHgY2iKR1DwNeaxVK7GaeLjDyDP",
  "key25": "3KFz4sbb8WiDRSPndpJ2w4jGoZPUywakY7BMjCwssW4EdfFHABQQd8Fs6bHyFqEkf9aSKpJtayXZhtLqh5frBwix",
  "key26": "c6g4NWCRMWgjzJ9447WKkVq7Xfchk5UnoXdW29wL8ccX1SUj5APZxzLBDrcAyN8j7enLe198ko8ZFkqr1vBxD5S",
  "key27": "5U7ybEX25z5rsjRx69LXkwtKdrvJTjyzLjTcL9AjM6oNR8mRLCd5iq83UDRHuX8MxWKjYLoDcesQvr7jsWzqUMzj",
  "key28": "2AmgGAWJBiZmYPDqiKSNihgcmDrRGUctagYKNgA3dEg5SaARCM3YYpsQbXxsrfsG37heLZ41tPKr8f7hFnZXibBf"
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
