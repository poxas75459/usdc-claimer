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
    "kD9T1rQVBpCTKoEaXzewGS1a1EAtzUgm6Rh1QNFiDEAsoMJ9mvnr3BcEx7EuqTBSfPZBqWCK5mY2LrZkija9n4C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56BXDRtCN3iWz74ExfHnnEf8FAhhtHH1zUsSrd3vtwLK2oQnoXhMYEW4Zq4eK4kJzVzeZpPhmmqAZrwhsFiWU5Mk",
  "key1": "57ukhj7ZHmEfuFh4yt7dT8pNSkQ4hbK6JE7qKeX1Ux6AHJCyXiw14d3nu4cmRq62ibm7rFjGT146W8xArJoPeAPm",
  "key2": "47uSggeaghwnt4QNXTnKWqRnEp248izcwFhmLQWcSXzXRbZudqWYghL784gT1atL9xe5ZFCfAGc1Qn1Z4BBTew1k",
  "key3": "3XmJRn2tqW6uAQt7M82vBk96tV75FZMjw6ddEjmTaTXXjLWAFweux8sC91uxtG3rx6wXidTThNbutcjf5PgLzLsE",
  "key4": "2ibnBM5kiGASVdq5koumk4yX2wd3wHkv2HDakfp396Szk3iQZRnFAWs1XEVWhLCVbEXt5qyd5vyv5VhJDBxGHZLp",
  "key5": "4EFQf7A7YfBHMiBLj5mANwAuvxH3jPUjsEJMGnwH3NGuoWELSLKHYgnU418sat7AR1GWbkDxT1T3zj1Aghstw33M",
  "key6": "aLu7hAJH7hnVYMs8Eov7zNhbihfisnX8LX2EwdAWPUgYUd2Nv58Zwyt8pguhuUW2Sdw7ZjYdWiF1CzWH2TqCn1i",
  "key7": "9yD9tQn4Pmzdz1LWE8rdQBJ4aHjNLjFMae9VLL1MuBbNzSZmAmD3LeD5vsjZF6iuqwThmjcQRomKfzmnX9iUvxB",
  "key8": "3PF8qsPfPZnZVokxFQm3TeFhhmA72urHJgCQPHaTAHQBeTxPTfUi7bD3C6xa8f2ZfDzS3hxcdJTpPdGisyvUZiwQ",
  "key9": "2E1oLJ4fon7CtyoLgYUmF6CbsAwq2rdXnxmhmdp5wmZ1JNBPZc9iDvNd8htMKUUhzBHCaoMkU66kp45nFh5S2toE",
  "key10": "4dXAzV844dHi6ErAx9xo1B952aDccS2Af1GN3q45uEdVyybyqZTdCGUoBqrsdbvf5HDuqsnmia5JyDM7kj3HeHJs",
  "key11": "2AtdeE5MaVMrcRw7LEqwhRCchFSWgjfYCfWMuMQpANuXvvyFVJncq4QwZNQkF6o69pEj98qSSLEVpYyuUHGZG764",
  "key12": "F4rKQgL4wYvqMVhZLtoUoyy2v6CNQMMUVRz2tZuD2GHgXGusHxedRgmc9QyXDdz9iE6bEcLYqf4u7niaX8hxBra",
  "key13": "4abafZBiqAPUYnSxcw4nfkzUT5bpEkRtN8XfcNRiSRUec9Bp4XXi56NGfP9vm1CehobTf5z3HguMpP4VcBxCmSex",
  "key14": "4c2VtRgCAFXu5J6LrMHcUuojjFjB7f7dSkv3joNCDNFxHCRcxU7nP26Aiw3r4tayyUddeh2Ebj2vXWqaFD1BPhgk",
  "key15": "4aXJ3oGtAjPRPhPAV6ty3Zca1E6Kth32ikhr6Acxgb7exbeo5wR9v2TBihE1Z7U6NMZUhn3wWCpdaDLCHM6eFFGw",
  "key16": "3LEq16E4HtMZwbzGfCVi9PrNJmSkuq1Ch4w8fx5j8RXP8CB7HxL2hbZz4Te2L2Xd3Qqsa7VHfDz8LYDU5rVqeK8D",
  "key17": "3jsxT6G9yRGq1HxoBxqfzZYFqhQJjaSDnDdivugsumCBkJ15pUxEb5VkQMduktfk1N22crYcEPvkELxyKtTXuWP3",
  "key18": "JowBi5r8hhE5E16jPzQoV2JKvVUAXB6dHfYANj6kberqoakUZiaSsHVbp1NWkvsRigP9N958jHnKEk7Dvf3E7vj",
  "key19": "2493EbXJArEAGzErqudWBRnuBWZ4jwU3UPNCmZaA8HWk3CPArVLpDyQ4e6EdBXkdyGGiSVTYYZDZMgiqNpgrVALz",
  "key20": "3j5xxjdJNtPtpf6SbctfBgkoiav9ueSUbM4CDW6WUDiqu31C4pLvasR8tXmibVXPyJeh4WJXdgFipDZ6oP43SwY7",
  "key21": "2seZdJUkFZXKQ1EPsjFHAVHqabqjrxwt8rW1ib76xTAUojw944kw4ab8qUzFZVUwEHQtxjqkYavJypxoryrEFmdX",
  "key22": "5t1LgeAtKcwgudSYiTmtWnEZy8WGoUovUCVanYpgpkMwkWmboq4UZKJRcnX92ap65cctRTZgX8zXSTmUrrWhoa5g",
  "key23": "2C6ZbTeqrdmPeVFDKh8FWhAwkqUqMAWCWCEUzCT4HJN1UXmBBfitLvgdWDXKX6ZF9XoPmsMXQxhCybfLKWcU2SCQ",
  "key24": "5LEEApmCUaE2NeULr3J1WD6JK6cBLXxFcMoSJmQKCGDQmxHbeFK6o6ucwMBPHiAHFz223E2jzcGpuNCHZB4uasNH",
  "key25": "3M6LnWvhchLFhi6Ve9mEdet4AVRnzFJ2BjV1MbFRt3PGXfSNS8tYgJ8qeNmUmrGg8C9dXxPTCBroNUModjYprBt8",
  "key26": "5a5FtBY46hYoHS4qhuAuPUeLDumfFPohmAETWRPA587YJWyqXDStSGJLnKqT5NFkKCwkHAgHf88wwHAMpVz3gwGv",
  "key27": "3V5LDgZ6HKWDKX5K7sGfekjf1Fee4TAuJL1L2zMnVdBKJYh5XrUk9Yev4PoZmzFCc86HnF8q7xjvxTpTbznj5dR9",
  "key28": "511z8qeHEMfX5Wn1EyeisjyFPGmfRuA7KmJFEYSVwjXEjmkbSZgCPBUC8ewcxTnzBMHtYJvtk7o3wxjpT9CzQbRV",
  "key29": "vtPmQqTvUcz5bqWvvPrMAgEVkjsv4gY9BR5qUndChdk4RCw8FpnffFL1FGkPXDEBed1JnBN8c16Yy7KRVgQvzDL",
  "key30": "2gvVYFqE2u1HNgU7uFbsvvHxZY3boVJdjpUveaCp9559CtGD9TYVzpqjxuEttWv85EodYWTB4u52jV8gLNPJkGGz",
  "key31": "3rh5Ab1LDZD1cN6EQTA8Se6HtA5vvvgZ22GeAaLQsfxqqYVX1X5NWy5uQ1smoh3SvuSATssB5HMxGt32kZ3vqRTT",
  "key32": "49WJepBGrB88VqNGeRea9eMZ6pXtTJdwL6NqJ3pXAU58LixaUEhYpkooTpFCF8u7LSbZ4TrFcfQa7tiLMbhmhUB9",
  "key33": "4dUzuw2LEH2D1mHLmKtLYhYbvA2agHne6RiTWzeEPfD7Q9vQUDiR7fB2dx8TqTuk8oU1K81i6iNCEVKuykLAHyqr",
  "key34": "5Z7NWp4BqXZk24SgU8oGikYFVYDtNNZxrTmKgkWXMyFu3UjWZjcLMgnfAqsS2UevU3wrrCzcE6QsXDzoq6DnySjW",
  "key35": "3iPFw5sLfDm7xFrihXRcxvT65xZJADeBjMXgGDVcH129HNr11S1CtF68G4YFgg91uWZfH63EeZ2xcAN3WS1f1iB9",
  "key36": "4iK7Vq1DBwBLZVVd6XrNxmoZRLfCsk7GBXSJRnHj8Lsnr9pDp1qq9PpAxwbjiy8maNiudSE1n4gakH1ZfjQ3WpyW",
  "key37": "3zXjWALV3ci8VzcZ5Z4bkqPPEue935AH2iqXiAKC9NJEeed9NLJYobgTnvUXHg3rAAVz3Yqhce98AZ8xYQ4K9bsD",
  "key38": "3ffMCU7Ry5WyqmyuCE6J3ejZB3DoxwAUNrn8NQyEkfVLwYb1z8ubgdmSLPWRFfG4j3RGLeb1ML3aAcizT3qGEsmm",
  "key39": "2wXkBL16VmBthYDAHTFUBnC3vgzi6d6hSgB4kCboJ9H8Wy8HveCX6g1C8YtG1oeMmwYK5TtfQh6YLPZxfCrt3wzh",
  "key40": "5z3fpCpj7wz96ryxViCBM8xwiGR4SReczLjXzuEGdeWe93Nk25VgNtE4chG8BfxF6A5ihvSq9YroMfnb9rexG8jj",
  "key41": "yLF9kiL2J4JNWnZuyNXmsiJGpofewpYQibe6US1hr36x7DmxRC9fdbHUfc62A6inJR5PiKRmvSDGCYAuvpsNzJT",
  "key42": "3CKLjBrfkcfj65wFcWett72KSXVFNu9GfaMdDJUwARbdYdDx9wMysxucBF2GJ1gRBK6qPeTgFtEnHuow1piqnAP",
  "key43": "3FMAmK2FDjDvssf3xcpgujATQXYSfrFtJDmYw4iPPmYH2qWe5C4NNbf736bkDimTm9jC3iygr436FyZX2izjPVm1",
  "key44": "TcHfCGu3sug8YxoXYALVfssaJMtabbbcqRVegmGuCxv9D9PF6znPrFzxZdk39mHjZYiHHXJE51L9iL2cYdmKo1g",
  "key45": "4YSNMdzVeCz2ZdbidLyuFKqZ7PVtVwsunk9Qu8v8wZkA1ajMzm1GyBqfmPbfUAYC5MVkU7gVvqhXToiWopq3XVKU",
  "key46": "3rjqLeB5BTAAfgEu6yWdm8fEvdCPSFu3JzCdxx74A5h32Th4U8F1iqDF7UDrBNjpJTNKtKTGDFxPSVHgkmAUBfX4",
  "key47": "4m3oQ6yY5KgGmrAgtzy6zStZMMWiKD1NCn6K6npnGTWV1JwGSjcYXeDm5iDL6qmgQgM2xV6Wpfg7E3DwnZxMdg2P",
  "key48": "3T8nHmHWLeJsXrfFwxTyDGKzxxA9r2nYgyqhSzTdvy5jApcMoV2ghN1shp94e1vncdrfKcnrETg2XLA98siUGa2p"
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
