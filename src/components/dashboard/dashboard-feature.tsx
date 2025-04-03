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
    "3PW7eyRnbQFCXXrWtk53mzfSxGVbXtuAGwQG4MHaAqyqgu3xxALDHC3EbgQiHcvZprw1DLhTYWdGd44rSQeYRFnu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gMfsPw8Kp78KbLXdEeqqgiRfVX9MbciAxTPBN6UBJhe6jKBpxFQwb1zY6PVaUJXrwtw5fD9XdRzw6F8pFpf4m5d",
  "key1": "4GK7NZvEbAijrgrhh2834Ae6zgcndA9hgkEbjTQXW1vJk7138Zdk6hELZmdx9KYnoFo7i8Ced5oR6a7YSf44Suy4",
  "key2": "2sjLE5JXKkUyBxBsr9ZrjMTbkQc57e87QMt9yLpXBUp4Tcey4ptW5PX81XSYDtp4L72ZhwwBwvLN9z4S637h7CTm",
  "key3": "4QgfiFCaHEryWgP7zDcbc4XhUYFKbX6eAxssKAgc2TyV4nr5WmzCiWjrQRd2PJSKmMeJXaSoc3XfFX2iFhxVx5sV",
  "key4": "266Fni7RZqDaKga3jbsmvbEaLSdjgTGeZWCwnmq14qf1B5yWVvoEYXvauZnv8ngJTcHmX3qx8eZLQKwH5DeVgVxQ",
  "key5": "2YiwCMzjWMPqS7zE8P1gqg7K3dEHV3xUPbyw1XGUXyFFh1UQAZ3466a4sPi2Bi6BwhN31a3c1EajhtzwcUnq3dUW",
  "key6": "5BiawfnrTm9SEnnG8Q4yhucJKC5YXZk21aNUXK7VLVz5nKDtnUvwVV6TPTmsaRTNUNwXd1sgpmmG37bS3akTFAXJ",
  "key7": "3UYREMNR8xCLysEYq1SiJEXYRUK2M1kvWZqg4WKkXU6bcNbVrd1LVzt9dFgcCETkQX3MwYkmQ2b5HRJN9Kn969M3",
  "key8": "2XBNPbHLFMCP8QMcvT9sU3GrETjZwF7bTxq6GfD96GaCnYFJy4pbNESgFsDrqDuoUCA7MhNEGiZoDNT9dAXmYgtQ",
  "key9": "4ThmECd1ufKAYwec1afu2JZQ2VqjvkL2b5HPEjaih9aBCtpzFcjBD5jM1cEhN7L9BJy8JwABCyCqC6UX5Aoi4KhM",
  "key10": "4Xtjh8zG8rkRQ5MMjr4gbcMewu7ixHeZ4SJaRfn4dAUac5gdxUbDdb2x6R9veKmGNMLipccf9J71Hypgy671TGSy",
  "key11": "51jHLetAYFL7NQj9NisbboY7RiwsyuA3gmdsrVXbbmCbbpqQPpSGgrFAGvLQ76ww6aeZ9NoGCDNchm6x9PYH8Xth",
  "key12": "37diviRwF133hjMnjRaANJxoEfHTCKTvjxycqo4gHnspdhCgVt7Pws9RFLUASotWJxUBbahW7jzwDQ2Y5XFnBj7L",
  "key13": "5SBCuZAtpKEXsYwKLFxT2y7ugApaKL5x1upWERmBUQc4aA1ks31mtCFQ4NXQEf4RRwRmqsMy7CHKN3noSkWc7qzF",
  "key14": "zR5Rb9u5vVULwQQhm7FUF3eBiY1L4RvXhxQ1FP5k9Khf7sWMBD7NmZNHcZeikB26vqVvp9RVY9CWoSrEKTgKQdu",
  "key15": "379ZPqpYEBDvjGsgyCGxN1bEYRxChyzQ2sNcBRCMdyXmpX7KumXzXVCzrBzCZhVs1qDMedPHW2DbAbQdACLse1Le",
  "key16": "2JD6zB9duyLRHxZp9td278r5iE6A1AmRnz5i89N9YwpUD7mt274VGUJGdTm2BpKCnQJGYtWjNVzbUYCqWWkMupuf",
  "key17": "4YBUZnRCAHLe75UympeAzQkANTJGhWJjGKtocyYA8oqPccFDHRPSvRWtkNcHnSJhLpSkQKZvNb23DSThRVGNPSmV",
  "key18": "49fRGR975MPrxvjZYDa4zrvZ8rbBMGErgFeVmXc1KCN3Btv3yoy6NFLaxWm25LzwhqcL3gw4MamJ9oFG9s1q6hY2",
  "key19": "YX1RVZMJmwK65iAVPtAAHEkEbqzgwzcRknm6mVH2aLAkwszQn5pdHseJkua2pY9nXAZqqKgtfTXNGtqq3Y6GCMY",
  "key20": "5KJ318u5dC77hLyozYCvkNNM4yyrTmLGnN8iafCscS87gTEoRzcbyMbjZDhyBVaC2wizfcR1B5timroKYpAahgi7",
  "key21": "5s2WGDfZNtfCMtF8So76QeZ5D379Q3WUF2XGufbrUai1t25cCZp4iSrSH3KkfGn9tNn7CWrzTkDyDH9FEF2w6svJ",
  "key22": "61wEWvzST6kzjqVRifpJfMzNSmanZwrmwRykVJFZCTrhPbhfuMMtMVPNPkEckgrp1TDZJ9oU4URgMvcq7vF8DnuU",
  "key23": "3SxJweXQs8strfrP3wLym9Bwxw16XMTMxV3w45bNH4EPBSCafEwEHMzmyfkVMz6UAkXWsWMmJazrATxhoj86ysAu",
  "key24": "5DMSru6xyrXPu1911ac7XJGEeG21fu3hxCM7UqpK5qTEGGpdwkWQew3ggjzwm7x8vXTQzsQUESW8arC1mccvuryN",
  "key25": "5jidCH5eoHso2rKz9VPkNGoo38VzFfdHU8UV5tjrrXyJ924DHXCMptXXsr9GkUUALv1Gde6rjQ35nHUucxJvtD4B",
  "key26": "4g8cR5zcNtjn4472QnmCqMkfJ2vYgziB3H1TqfbiAsVAdhrz2QNNNDSpgHTvzpjRCwiG3GvsWMoXXkjA9EknnQAG",
  "key27": "2h2bB83Mx8xURQmeHeZ8RwLSTymiyuqVaBiD8ZGEdxYiJeZCMfQNLiPjZ7mTGeTLNBmpA37rEMhiAFhqAxiJVJd4",
  "key28": "3yVt5t8yKvPaY8CdjE4aurTuEXc11Lqu3sSncg34r2pis7vjzkkPAEtWCLo1mQtuQfFrwsBneVJKDAa6pyAYwxCf",
  "key29": "38r8xWLoX2185Nt4zrNmaS23RDwYgLVJc7FkRdgpDBBVUe8bHQzQ1V6XdY1KpNZX9NVSQYEpBaU4JJZCsLm6ULsg",
  "key30": "ttoBSx1L7khH1WzobFpg2cKknmNRLmNMR8Wy453wfnrRqH2X9cQbPpfUMToNjYyMTD2YxmrmtAYNxxwcPCQRcWe",
  "key31": "jDFCoCVMzJXUux2X7YWjv54rbH4uED6pheSGPq1vZMsnfMRajssVSRiDjdW7Wu3DaSyGFALkXrqkWXa9hKrAyuX",
  "key32": "536zVmJPWh95V94L4cTm8xg8wwdCM8r9AnDto8tr8G9yy1vYu9D6aeocoH5gdoXc9346g94x41J949d5s7taVbi8",
  "key33": "53zkCVsgSCjCc5A35i9xXscKaFtTygjm85Ub4c9YMEdMqyRd66SMAveZr9Lkj3p2ouLuWgmMLsS2nDMhK3gCYUss",
  "key34": "2R4t2kMS1y62BpGT7jc8S4B7MYFXWkz1vSsFNdTQw1vhzUie5kPQzedoBk7eggfZnqKME4YXWcjRqhb6YRtkFMqR",
  "key35": "4gUvLbCiATfNzty75KhrTHWYfkaicx4k8TP1eFZVTzvgj3QeikrGQKtEWTNB3HLpT8unwvWyGrGQoDufxNj6xRex",
  "key36": "2sC1U5x6xuEbg5bG3TpY6CB4rYmPnUwX2nwS3rh4tbD1QXNRm4Q1jSoA6p7sxa9qgc5R9454Q8ZrRhR3Kb27gBWr",
  "key37": "2XKLg6jhsvx6o2UvvVFks8vxMZdnUNr6oiwZqdKRyjoKWXgh4SYg5dg4cNMc5EDAtemZNTCAd1b8eCsZ6Qe6hCnt",
  "key38": "4qocA7kbGSjjAxWUU1JTchm6WLWuGv5ko6Z8cwB4fv16E33y3o54apiodzLfBLKNFfQL9s99EmDczJ5EJnKGZvTi",
  "key39": "2fH6KEukRXjja7XFeDcAWxBEUDBzSR8iVtsbvr1KomFujnFDya9wb9Xy9NvFFzu1k4WsvFXsbaaNWXR3u6cLDSWK",
  "key40": "2hW1rZ2b5GimU143P3mtxyKsGqg8hZQwetE66YuQeqRLCdyiUideDXdYcPeSp5gGGyJuFMLVgafQJ1pbwNTbUwVd",
  "key41": "3DkbGizmfzqbaVZZwsKed2EtymH7Pwk16GTjyVuvBit3L4X2gknmTUdKUUQbMGi8F44f1Yb7A5sYsNkqBpmnwd6Z",
  "key42": "2s5YHpJhhtDxHJ9QNYTtxH4RH1WBMAP5TjRQ11YTaBtDUzr1z8LsjFCh6USGhcqH5ovm8rYB15PRDv7ZrefqPjfD",
  "key43": "4bFvXGAuaBUmRhvpCTteVo89M6hGcv9vXPk6y2jeKV3XTBYsJFXp53vUpZP3yNBUzNp26TX9cDx2hdiVBkdTgaPz",
  "key44": "37Lo3wJG9rvUpZ5AR4h27WwV3ULkpwSR9VB4VwFcnDYnj2ik3KRoG3jMijhQxuaU8NivNG6rTnDx3tWM5KVuae3i",
  "key45": "3TohASMzArsENRFQkQd1Seh8VHp8YwMVX5K5MPk2ai8risdRCmTciUw5zDxmymDvtS98aGPrAsb7eWsktmwSW7nu"
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
