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
    "ndzUYe3TuoXtXMC1LGWb7wfawBRY8jKqyDn4Dm2yv9qUehTsk6bjQio2n4c5p9vTwCMDMPTZwwz3QZ9HwREvjWt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SW5LNJnrkf3bG4fogkNaqhLN4L4e7qzx9JPCyqL9i95kUqb8gh21ES5cSD4zeLayPoeuG2BAHW6ZTFHuEof8p84",
  "key1": "2vEFNkHSkzoYEeobivJbprWVLkakuXU66b4Kbf34JdnNXLPmEpktHCjDL5WCiXk2r6HfcK5gThjsRmHC7cQGLVkA",
  "key2": "5EgVeuqCd67pchVSbnCbALzBs2MwgxZZanZbAEzqNGvNGrLTtXjX65z4beuJvsxpEweGyQnfi8xdumh244wcoqej",
  "key3": "3yv84mzLS4Kp7ftwLF6FZxLeS3dsfK3qhRw6rjMSgr1J1rCKFdt63TCLYnoMyNXCkJwPMxH1R7MHUC55n3mQM8CJ",
  "key4": "22F4MBgoK5ohgqjwFhenwPqLqfk1fxXTRgvDgtrGVWhqqZ67fW7FJDiJ8LTA5nybNigfhKsVCJXmGYEx6UvjNBkD",
  "key5": "4o68b1PSYCs2oF6AQ2xXU9RzjXwDjQuFLB2uzJhQSzK3NV3zycVQx4THn5jv9CcCaLuFxwb6vEBfjAMx6gdzya3S",
  "key6": "5LNbyD21MU2stQA6M1CiGEUNCsSGiNDjbvsV3vmSESr1pc6TXNXwEQstYQEYTqcexgWZRmc11W58QcQQyawzgUiA",
  "key7": "2pMnXt3ZMb5ttMooe5Ery5gkb4qgwtNgtxbvM96qidZYB6uk9bmP45SgxfcuhoE717DY65haLGBeK4Qpypd9bYuX",
  "key8": "5h3br7jo9unGJKGXgMfTM8AeWdysL5t5sQ57zr5eFNbKcPEJkLZw3MCLrDkAA6QMR7g2n865gVbyELQtLzUtboqw",
  "key9": "4HxnDDvF4ZN8QUU2CS7uJsXjkKV9VfzCFsaQnzy5EbpGnBhhegaVop7jtdPE2RgTGoCkxdAFaN1XVA9iortE4eno",
  "key10": "4ZTiWEzn5kpyEPNRqhHtcaiddGVBTwkeFsQbrfRAw2P6ubdU9X6fV8yLus3ZveVVeBhZ3YyfdrD6Rr1yq2NpycZA",
  "key11": "2M1hrg1sKN4nCv3TyNmBdo8PWBrwxBpwWtwzmEYzRiD8uyBuKuNwBYwC76Z1Xzx49Gsz8xsCULR3jRtZGWNkbVM3",
  "key12": "5kHNLRwbTfb1p65VoRWLa3EzSgG75L1rcsUBCTCkVRueYcLCfUfhnnoSVMkzDcBReAqeDMP8Aqf5XFBKdfjZBmQi",
  "key13": "3Rg9FSK41974WmSHLyQBwQeSFpZwQxZfJmvVQMEnMMz3LGoYUv4Nci4dXzUksaUHirt9qUByv8J3errZFFksduk6",
  "key14": "2Ks2KuCihY14W5KuvqjURbNFtiUqLPovgiRXvntsCj9bG6bsJsSAAnoDWaNBTXrRbTuuctVYpfUnU8W9LRX5vzvN",
  "key15": "4d8goSaKVKU2zhjAPdUgJAZSs9ti8rvaL9xJFzZGq2nrKdHWX5jTjEsKz2Fw764WGvZ1DjSP7sTpASr7uxyCUhvX",
  "key16": "5hfLsHufc73WcoBK1AuRw2ZCg7GgLQHENVQY2GARNkpcSjfPyvurEJzpeQSCNk9yk6QtMZeNyHzxTgnKrPTKuzTn",
  "key17": "63ENwgXhbzzug1m4aVMcCVqjVLyrHJMyYQ8crSVhM1REfhfJT81Z1cimD96Gxfx5CPzqTrtsNT1cyvbMSgswDMvR",
  "key18": "4jAyaKcYr7FPRHBGhWhcNuivbDyD82k1xVfL7jiewzmtLienmZ4hkspku3FFAh5hoygnguFEsHHxGqwsCDTz12Hc",
  "key19": "YWQxtK5XhHp429TAKM1gRKBcUEarxo3gRAPoUKt2cVt7pS5EoAgKLqkEtQzQyWjRMxmMwWMgs3gjRbcReeHgces",
  "key20": "2qAGnR2dfdJJH4T8zeRBhD62F3TVq9ZDiZT5PXpGxydDBuqfxq9fRSjYERj7oPsfS1kibruuL1dfkG8NrGS99Xkh",
  "key21": "4PTB4qBLNNNhZnJTBE6sWLK8KoDrhkPU1KAVQkCvduNwZ32PtjdP9wQuyQ4xkz2cARfQYUW9Maezugt2VHC2Ps7H",
  "key22": "2eDeqhYGBnhykQzhESPWLxh4T6zRQB3vf62DfmX5VyQVZ4hwPNbDkNqJFuWFfm91VFkvd8QKrzUa43CpVb5J8sjv",
  "key23": "Ed7Wo623zRvVxv6EjQCejoyAKvGRaTZXW5toeAHWLBAzKNHy2XxsEdx2mTtefNxhZHKZ6pLjmCDZNFcsNNTzwkV",
  "key24": "2U6gk8WCWThGWLJvMDnWWneihhM7h8vq7UUDFNC2wMGFMo7AZpgwqDNRsM1BQYN25RCJhzPFV78VhZfCMeEwKJqM",
  "key25": "UxCuCLsLaz8W57phuuPjv47iWRkW2AjurjNWtrLCk3NrSKLE4rvVhfinELfwRVRosMh7BjUunV6dJ9RcjGF36jE",
  "key26": "5ixHyUKtSR1tdM7wpZNjhzsbe5jfWzoVp71EHXdeeLzsECb3GK3XJHY4boWkUmekZZ4kHwuyr6mKmNgscnpBsZzi",
  "key27": "58VWjFT3i4jb8afxKuAMQ9VJaG4jxy23PWMZowW64Hr5ukvYxQs1yGC4FWYHzibhE1NhyDzvrKC6o1mum9uEQRaj",
  "key28": "4xdxdJbwduZU7shhjfDncRQTF6TNbT2rE5XCVch5nPNmFt9mHAac2cWLnHi51eHqcPuNvKjAj3bmprZRKhxNwvhz",
  "key29": "2K7EGt3xJdLPJYiLQtJ3Z9tfzPv5bno23ZNqLDEowmXd8diWFaSiKo3evkj2H35pjTrJ8SpZ4j1QcBTXpkN1Vn4q",
  "key30": "2Bd3zP4Qqw72mURvwDyBqT4HCieq7wX3WrAjiv5iSXxYCFSAuXWTtYS3Ed4DdjoBvweHW7b6LLxtahBE6nbYmMW2",
  "key31": "3NXFfd8yb5SEnFSkMaj9YXhorjvbzxuTmyLf4jxK2CjTF1VLxv9Yx6wegBN9PZm6HYtgGhxerVE6wjmbq6bmuAqn",
  "key32": "4DcRcFxveRBvybf8qNGc6uVAc18fF6wtNFbwFMdDzJH959e4EwnqhgnKjCeLpXa4XCYJSZeC8caYR7ehLN845cag",
  "key33": "4KknD84XBzeF4jRGRA6Jg6a3fUr1yx6u5Rv94L8vK8L6DhMmWbnSBe3bVhPmojRoLQfZbzUazx87fkK7SkR1RwQU",
  "key34": "4CyXnQ6rsR2JExiq1o8bsfsnpzrsRtzBYNjbH6fymED2sFFJvierUTbPktmfvE3kZB4STjGKj565uRcotKbmLScN",
  "key35": "3X9wc1tWbTSCDpHTgmJVyzVSDBQNzT6FxCit3cZAViu3Sea2vAyAcu7tPvQ29FWqbUiHUC5YmgvrzWDkt2Cw15dQ",
  "key36": "2tphUhYQrmy2H6hHkE1WDcM3DcGDPUXUoGB1szE35s4HZ8oP2kg4S8VfNwZv8k3FJQofEyLmbQhFbdZcekEZ6P7t",
  "key37": "3CoLefvD1acMkZhhtp2obFHnS6dW2E6Ea8VpTEP9VtkAt8gWgavSpYB7ha7sY6iHNm7BsFyw5QCPpgtRK5vUxu1j",
  "key38": "4KwD2ACiYzUrLdsPaDRcsX1WahddwJyvgWLZRiXS4F3QxVXRQVLTcEUafuzZndkFMwMF1PNqbDz73DTYmcCnDKEC",
  "key39": "4j1SMoseudH1SbTtG2YNf9cKircznE4b3ey2z2ygr5LemCVp5iGn6Xc2SiprGo9NkHNskicdkM9b57tKJiP4BzNL",
  "key40": "rHFrg7X7N3kV1KhVgQ4MkxRZBVJyTJAt5MB3Fn58Jyoby9LBtNyViuwfw8TJJAaAvopmzvpJkQqS3gcHUnfNPem",
  "key41": "5rhG8cvYSW4bB6mgfK8oD3Qch6oz2oSBCd27Rqa3NmRioJGeB3pQGqDaMw9wGqg2c8zubmhhn4AGbNWDGWNNxmFo",
  "key42": "5jaUGyTpQEND5VYajDJ8Xwxc9eHgh6CQyHnXemfHjgc7htMuSTZS5MKDVdRWM3pQ78JEWTdFkQMYDUwgSGFVWLBw",
  "key43": "5awXyWemjH1bV8rRgvk2hSVUzTgKTqmzsXP5gg7C4H1jQ1wxwWfSsyfB9zdtpRDHSNjiEtdUvvKuSGdjJGrqfZ8R"
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
