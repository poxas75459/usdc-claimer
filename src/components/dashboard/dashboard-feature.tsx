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
    "3hsoRA4ySFRJNmhzqAwPn1cZ4RnrUUwtYDSX8SB8xpFhMsrAf6QF2N15rq7zkm4EZviW3AsCLoUJDzVc7g5UvKtS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xozt19tQVeXwAiunvLg77zHVeKKcrfPqe6zwVVvsGGHUJyZywf9Foms8ft98maQ6wy4DtfuwGfZ4pLz2qTQZNSF",
  "key1": "5Cyb4BMXcY2P3r8WcdgWubHWHgummVZc5WXd1AWsMZDJKutzpT5LjqNqKrduRhNzZPDrSeRDzP5xHssDM4Gk6bBB",
  "key2": "2pJE8PxTUxap1qaRNAACrEvGHfKJF4rpDTAwFZXSgmY2Mu9YchuqPK5xsDbWEcTjSZhJ3tWa4XrP82zdDMYReQUu",
  "key3": "2K1ju1L3zzkdvabgvVAemhSkEKH6fR3Ff6WWS1aDFt1iEM7nb7bk4db5tv5ZshyhwmNgsWPhrZHQF6tNihiqkR28",
  "key4": "haF41GvKhcsb8AGa3oo5VvdmtvqGYtRie5CUF9xh6yqHoXJN8Sh48ZdxDC2zqrokpbSFxxVF8hkLtJbKzqCJL8R",
  "key5": "9jgGisHDen9nPwuHjoM5DrSLWSLqtuLQcvobEEvfAbVej4EAwHCCU6hMnXJKuLfcqjWyzMEW5fCwLpghL2AGrNo",
  "key6": "5MxEJM93HRTiXMoSfiktTyDLoAFNqLxggZhByEnkshN2LX1974cnFGwbzabyokWRRQJbuSCR2JgVAWTLH55r6gHB",
  "key7": "pgAdQmvyf9PU9i3ZpH95VYWJtUWwv5dSKvprqV2u6VZ1o8VmsjZCtsDq5LVNe6bYxvJULkwaYccbEQYPVbQj3BM",
  "key8": "B6183kUkUfd65V9UWPUk6h47NxevY9N7i9DrD2BdXV8mdsm8KQCUHJzdPUPyo4fMCeETFiYC5PDD7NzsvNbNcWu",
  "key9": "MEGMiZuX3hG52Cb759iZdLy6YzNPY4rYsUWwEHXtZ855yeMaDQdSiDvFRwA48MM1TfaMJxzStQo2dkHvnaqG6te",
  "key10": "3vG6F1BNndV54h44jVdAR2sdgTFy4CcacowPGcvaTpYfqckG88etHb5yQp9MpB4xQFtU3fsovbzgUx9LCeKs2a43",
  "key11": "4jRD3tMeVxneRW8HVin3wKGDFzgubH5xfcr9M5LuUUX9ncPzAWRwqioaYDn1BfzDpYt9LSskyayUeqrW9BkRJeG1",
  "key12": "5RWKfipSLv2SvaRDC47hGvUKd5V4miRkNEKPE8UDc4XswW6X2outpDiKjvpxapdJnTdK1uMVx3d8mE5tETCFX87Q",
  "key13": "47ocdNHhfjks7CHfx6iK1tBiVgBqT99TB3hELzfz8ioENDsTyFvFz4uvUfyLGkgWu2tWQantzaYXHA35ZtvW3TRs",
  "key14": "SnG8wqLMoeg4sJ5iE43juHJRXdBbaBdEReXkRxAHSUVZvsaxfEwzehgouAaz4T1GNPLqdaG5MViUh5tSifJsyGJ",
  "key15": "5D2kfupLS2D2o2ZtSwto4j1HZav6mdWnzwCP1dKassD5tfJrGsNVULgdx3mBMb1W3jkM4gCcRHXFkf3RF7hExEnP",
  "key16": "3v5gWRJL8ArDJVa9wVLjTegCJ85ofxxC6SHfXve4LUpwjRHhGL8w2NZnhBxaxcqosRm5E5tAxwpFFVLz53c1Y3bc",
  "key17": "27de8LnuY1SxL1FJbav4vWEVGNVm8kHegmrLTVGCsGXGCKwgjnN8jYC1sDRnit6UrVUxz7c3JLxnQug1r5vxbiVp",
  "key18": "5FNHC5ZGro7MXxEGwtLU8G7xEtgXjbPmnv12RYiPrWELwSMRkYF6JtZR798yHLdKSREtsoS3y8ftZgLScDSHjirW",
  "key19": "64wJ5SZEfy8n5gdA6mRMjaB8ZNfmM9rhgCQbZou634v3bEnQXGM9qrkG9EuYJ11uEznimn9DJZ4JM5eMzvBvxev3",
  "key20": "3jVRvc9ALaqU8sR3NBLjgtYPcsVBvXLkaqogbiu7YwYCwd366dN5Hck2RovMfj1TkXN9xJ6fYJRQQd5XkNcjMg4p",
  "key21": "3JXMoWy4UGZD3bZT1Pu8vNWWq8EXoGzkcUmtbYtAEZGd2aZxfMs1aqu5zwHv4SndPvr6Kiz3jnU7KhkEeRYGG4w3",
  "key22": "4Tkzb1xQ7HfPsXrGivuHuSGSxPQgec8Vyf9KESdGwbpwPfe8ZexuMX6bB2oyNwioFGYFCJXxqoQL7XB29stcetG",
  "key23": "g8EcmUywV9rrcDkDPysNc5RYsmXv9NeeTAvS2xx9XiZqaW84kSF9GAPzjsJDNFnUXm1nm7hp19CZSkgQWvn7K5Y",
  "key24": "3CWkh2kbsrUVw4Xuf8yS6ZphGUeg8QL2fiuCmwfcM9CNSHfYVT8dEP9bxdCCRhzbu5gnDa2xkatx9S3HxNeXh7Kg",
  "key25": "2we2jaMRkxVSU2dhQtaWew97QdfNrmSb4Hq52ERCJ5V2NH8BVECLgxmi76LU6LDkrFdEUvBaGgLxdX53Uq1XTafd",
  "key26": "56byMKnY7NVNvhGoA4HGuLV2SBTmncJt4i5uQ1oM7FwnAcdJZN2FUzxB23Qxv74PffVvkpMHsCz6xJzGMpSBvL14",
  "key27": "5wNkhZucd7bYmu9JkM8FGLPhMPheVyQQydwmexESxyqJYpUKN2gtdNm8JvC8fahb5p87QCQF299v2dKw2DRyLAA4",
  "key28": "52QeThnut1HqTc7KsLqdR9hpd98796Yno82sDwXvpPfMNfqrmx1G9wYme6eARNcsCq29ThAyWrN3wHQk8sGRLgv2",
  "key29": "2zRFT4UKY8kmzEX8e1NSezPSsZpTsmMNs9cyaXmhisHT1yfckGKXfmmDQvxqTn815hNY2pC2qAAXxtZfKUyXtsct",
  "key30": "3NAfUmXXXUWFRtxB7GJ4XNi2WCEtQ8KcgVqzs4YRDiFzpFV62NNXccTrmZ8cXMnedQG63AFnRUqfNFp5SqBLXLez",
  "key31": "N4r4xuEMQkWbov6Fm6zWJ6nd1khgZjdsur65rkiRLY4z7wVvUu1hAkfC89NkW51FMBy8G6KF6qivyYJj99ZhXxB",
  "key32": "nbmjo6fRQvYNhefpHhuNPj71XGy98HX1EydFkCZGNzSFrD7oH9ZmBewACW5Tx5XkS1rMFAxk95WgfvDjNKQuWSx",
  "key33": "2mrQerKTyPqUfkiv5zt76Y4FJ6YK7CTdMEN2kvzpL62Xr57zWrqWDPQwZRnRGNG8ye1uFnWX3VTue6gmjfWEbmEr",
  "key34": "4wmf7A7T7Wy8gyoPwf8mtU3btireHfr4XJN24Un8F3f1AfV376ttXbyg3aULSu4hLEPCwBwMY6RZ8CVPPKR6d7XE",
  "key35": "27pA1CcTCTw56vR9Nxe2JSdTpkxF73k8xVTqdMb6wSFX1mJKXKTayVvaY3CogH2WFCqvRvZXm1XjFhn2ddF8NfHx",
  "key36": "3UuBV5G3kxxfv6u1eqX2A3tZnmfUzmmViYUCZvZuhsQf38QMyjcNyJ2kN1ymzFxjmC6M5UBNmQ4ySMmAAGm3AYHY",
  "key37": "35kuMAmjEqTMFWZw5NaGop2TaB8Rws9DWRVoq8DEYvNsLNtk3zJpdb7PbFkPcBud5MjA4VMAU6Hfw4KzsU1psWSL",
  "key38": "4btvu1ekBmVwdrSS5TrFy2ZFfLeoEytzMmPjY79JrLasG91fAsVtqoM1guCP6vQkF99V4H36KtQfrspncsAgU6wL",
  "key39": "4y82cWTRXRxzjWXfK6fZbxzfESay8fcLaygnYnMS3dMQK4zU4gEkafKXZ8HbZY7VdzHGdRZLxEdi3SjkcAXYFLBX",
  "key40": "4Puryrr9k6BxVyXG9wVVAWRUcmKFCh97fNiKxSdRk1V7THxYxdw686RTbHXjrnMQnyuuekB9ReSHbp6mu2r4MDdj",
  "key41": "3hMH5YgqiF82PCBaqZ3fxZHXyaMRnuFGMnZB3XSoosu9vaJn3BTz9n8LKjixTbLFTacZYdepRrRUqLpVnVqusJuu",
  "key42": "55yYrw2uME3tDUfBJqeaMB1Y1syxZP6PYdiahSy3oo3w6zBRbPJf1hjgi6Tk8dzfqhs58MzJK9RDDoZFdywz9XjG",
  "key43": "o2iCvDKtxKqJVfnQW1cBxWMzF7RibDLnE5NB1Eii2sVkULJNBGSUqJ68Skg7CgkHVmD2qnHem6ZFC2RJihi1GEe",
  "key44": "5rZ1kxcA9VGZiEaCVaz7wzApEehXAUcCXWgNho6U5p6wbd2pBLAxU1Km55g9Tr1GeY2HmVDXG4pan9wGfyezvwcM",
  "key45": "2SpSGZUvHbWod1hzKfWbLKVgrs8BuktbhsZQZvGGzyEUuVKNhBZBZkh3NFBMpAbyUGnrUYBhv6QGmhjM8T8jnXaH",
  "key46": "2q4tTaZWtj7SkTxLqWDRnYbxoFktvtyXRo4od5vUmoXwS2LpK9ssgFNMxKLYpV8z2m8UTauWBpFkZon5bVwhmHjN",
  "key47": "2Dvt7wMLqkcfmFP2BpffDqDMuvQeZEdW4GpcQYHsgysEUTJik7mHtAqwjD2gDFSxjxpbgCW5uWrioNwCoWqxZDmT",
  "key48": "35zM8c9eECLhBWM79aSkjYBY4gCwpR18aCVSo7yhVEvAxJEeUJcV2zuszq2T8ghV14HNzYEZP4BpBWscvrsa3VE7",
  "key49": "2SdgczGPmEEzGfqLgCKopbjwAzgrHD9Jb3MxvYtDEKmsNuUNnoqBRr95prwjwuJfQMZc8FjtGxVSFXWotcxtsaBg"
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
