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
    "43UQTsiVkB8fcQCP5DJTMUgAc3rDsqR5TmaBpVc2eEAvxSBkWPTtGBL1mZgJTsS9zxqRBuqfHbzxTALtLSGq5scK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ww4yVUmUtEYX3W7Q16gyijC6VCRYdBQcE5syjGjxrxbwyM6HodcmBQoEBKgiMMtCAZKaJ8FSXWU1YVCNxt3hkz2",
  "key1": "41saFYHj7XPK1h519v75a8hdpydxpocVRvfdTHSv1s4ypyapXrv8GknMsoduZt9vXVExLhDrMRec5EccprFi42m",
  "key2": "xLyt24iGzSkB5BgkQXTSVxaUi8f9X5XSXZD8wLpzRRxXrhwVPQEXtNAePjkmAKzs84hTK9f5rr6Qqmka5BANHhF",
  "key3": "55BXwCiU1cEzpHy4SLBEGRU6ivG7MqgodcwSvyGyqcakrZFCYbSs1Pad3Y9mNZKeLriyCUBPyhnUHkkGJRhAzzke",
  "key4": "5HMhBgZvt9647eGDqjUzTfG7RyTm347DHL31nevDXpLSV8R3epjw4in9o3UgDXobV4g9E7G3QjSmJcTNgbRNByaZ",
  "key5": "5wVUM6muMDEC83ptywKqL2inmsioQcq4WFa5bnhKHQt1XZ1dRHwmz7HKXSutYJgDyuUNxMcPD1rN9B7Je5h5LizE",
  "key6": "3B4s2mKqeyHrWAwWjhx1CKvG919yXnG5LVJnbXTRC1WASkk8kiaLuM2pbyJmdyNWGiaWR1ffCtvEGD1jvAVEkDaR",
  "key7": "45B1XT122QYHhgWZFnNL9ASc1Vj7iYXMCRKfEKEii7hSbbQkZABES87zxRSVaDK6EZeRpRoEUMLXdujXssgw5VP8",
  "key8": "4mNF6yBsW6YKs4fW3sLKtVTGKWzsVDZE2SQNV9y7g8uqZH27MNAzbomLfQ5r9BpwPs71PPEmCKAZS3rAj39tjXo",
  "key9": "4TrY68RMkuyHJXm7ocgdf43bxcvUjBiLmJvaTUWDbQ2badwQp9nNi6KpaEg2zQAKK1wsR49fTbHs5uaEmTYr9PwC",
  "key10": "2gDrvsFgDzQNzQ2BZCapPLxPHiseDZbKFJubZpT5SBDb9bBEKeqe3HT3EUAFSathUrv66d2PaoHm74Cm49mbvNLh",
  "key11": "2ARWwfkvhhVPuBdmZi2TcWXburTHj3TAWGzzsSzCk1DYTLsekMCfLqJ8NtvmKjLaLAkusCzhvnEPNDYkk6UP7dux",
  "key12": "2xH7hMzMEQ4eUaLV7JKaJENfn2vNkNGSc8h6i59PiT97Ecr7nAm9iUciju9syrbETVQj7xUzkyYQs9timpJEWNQT",
  "key13": "2rzeyJqrZoKngwxyNUHPKfEW7KXxv91peGfa3UCJiYebixaks3BxvEwS1dJYqoFRcBj4bA793vNsB3J2i8aS5zKM",
  "key14": "3L4T8L7rR4D7RKUb3hNimWTA9SFJxKYUS8jXdoCWQxkU59417wvn2RZnsHSqNyJdv1sSHNhzJY7oj2D5Ch5p4FaY",
  "key15": "3v9F9rBQqxNZfjtfDNkfTt6i8TWybExUyZA6vyGSrq5gMvrKvLPZ3zs8Kgt6zguUzwV7nDhsXYS2SiZpJFNbyLyr",
  "key16": "2xpUaeB8Hz9S6tNopaDNGSbZPGjvjG29MbKA7x7q8X2qddHquj4yScZdL6GAeMTLcdW9tyZC5yPFph2h37cLquGz",
  "key17": "2EXwZbWo6WBCYuCnAFYpYLiMXNApiodxoCaGLNcpZgejwDjJfEjJJk7q5TkLUEEW7wmJpWd3V4R2MQcHA7mT6URm",
  "key18": "4sWZmb8eMjNa3smGDFHoPX9o84D9Avg6brE98pYBvCGXaxujbyVC9THnfur4dMDFecM3iE5Bww769aQMPQMLi48R",
  "key19": "2ny1NcNKju5L4uGDDVVrTk9NJCNvPhrtwoYM8rGk774Qc5gCz2g9BxWSJG3WVoHz6U38EaFZZC5YzxkiB7PQre5b",
  "key20": "2Hg1wWyG6Wugk1C1iw8dN3XRBGEerU9wMua3ZNATt4cpajYbUpNkvtpUyZ4uWeFAtt1sfzJxiPH4vEnXNqSeDKDw",
  "key21": "4tTYUjUs8jDvA1b8BxNyHM8D5VGomhBDSHntoNEAZnT6joUdYdbWSkNawdzkFBcgpp1r7CVPoFzjhmGtxRcc7pht",
  "key22": "4ihJykUF8XPR21CLYcC2jyWrtoxRLDcxTP1iePxCxrKDD5B9nSk8ZjJpAxJNnkLhDTgHttefZc3U1dJWRY7U2UEB",
  "key23": "3j3W5Z9hiXhKJLherFk6LoV3Q2sQT6g7GPcB5SHZk45ApeQzugb3HRv5R1jf5KotUPNfdzGR7FLF9MxtKhg9pHAT",
  "key24": "2wqCFHNxaXjWRnubXwMFPgBCG6E1T8EaMFSbm5d5LUhZEHC1PKHoCyXunWdvJ8mdqaymbRW3MBPHCTdVMeQNYtdD",
  "key25": "2YMnTZ9xGXAjggDJmEGoaAKWX2TUPA8oGd4vgJy794w3X2humhsEWiz2LxFd57Etxk5Dm8eeeiXoNAAWHMn83356",
  "key26": "584j9QuugcYcH9BkkbPqPr9xjm77hPhx5TjT838txddnzqJ4MkjHPD26jPfdAfuGhDBf6jFA9SWoWsYi9K9o348t",
  "key27": "67QMwjahRBJ6gsYZAVnY21eGBycwQYFhQ9mxGxCDSujSJKjfEmiWufYB7dXXhzZ3hXUE3QeekrjnsnUd9EUnjBQP",
  "key28": "5tuVjBn4mtgReaDsRnqL82wwjLZrrkg2T9tJoTSSEobxfcLdC31a4ZqxbL6oteUehDfh3nbHUSFg4zcULqomDisH",
  "key29": "2VAGEU2LUu8bqojW1fvAqDYrC1gzXTwRLNV8fEqqFmPKKFeNYJXodUw6xbuuEp84JCRXAAtCLZE4CjxgRUv37w3f",
  "key30": "3ipDnbrcFronBiy642BRvizK8JePryG6GRtHkrfoZYKJ1gTLWYyvogDXNpkmjFH397VZ7UtyeFPEon6K5ZytrB8V",
  "key31": "2AZ7nGvCp2hMaZVtEFNnVMepagfZYJBn8axA6wTTDNHdVKAfNAjsDotDPNRsen89CMa7Z5Ah4xRV4TE6LKWG7ePG",
  "key32": "5ifVu5jz7B57FbZrJ3yRUWG47meW7TJM5WUmUakMJuYBPHxaQQTU7Jvnutf8BbkJvJjApMhxZkvAsJNwUmPgJQXX",
  "key33": "E7Z7FAGWjkRnZ4Qa6FgpqeW2YSt7sobbe31wwjb5wvQcJAX3G87SBVUZNZvUnBsUe8bJxK9Vx3qeu3bQn3GSLBT",
  "key34": "4kDeVXZ7vrq784r6EEm1Ts58n6wm7GjtkqsLoqXc1sPpCKXwSczhugGuLEhvWoYhrLXr5oiWLXowA6G5kk6hfxNH",
  "key35": "5vbmfDX7LmH1XdYeqYRqv8iLLQKsCKVK5hNxi1fYkZsL5pvyzrYKxZeqRBjgw7WKZXT1uUmKesogFdSW81mcqaXi",
  "key36": "55uDytcfk67tbobU6Pb44HmS2k4hHiE4QSFvTWVrUQrBc6ruCm7vCvnxXhLmzbGzihfSGhursJ8qFz1dhwUFLm8",
  "key37": "3MnfEkTwF1XgV171gFHMwpnrjfM5XZ5QTqRAqLFeGcCfwBcVsSiQy7jrwTTGFKyVAgBz6EwkK9HcfSqEfoy6jNUi",
  "key38": "2GE6bo4RYjkWVzdNePRpooxWETuT9onf1P4UzTpHURKVjv5BZ3VTewGxU6ihSg8LWUyyTGw6rUhxXdfXGUMS7vB3",
  "key39": "CALum821kurGbTsgFQ1MCupzoy2yPDrP8sHaYCjWoww9spgDBXqnD5cNoUWpP4DWos5GcpbfGqgqXn4nQ15bvB7",
  "key40": "iWznS5VAvjZxbm6Fhdkt8YJ8EsdMf3ttymdv876h4FZGHSp8xcxwqDXPnWHVEaq2y1fQUCbCkWBGHsTbs9wLWed",
  "key41": "2dBjaZsfDTF9ypeWCv6BQA8UbZAF9JopbWoMuyQFoZvrpYcQP4Wf3g2sgPba5hNXu5raRLtoEZfKNtqQHo7ucFEb",
  "key42": "4umDfU2yL9BQ8Db7gSzSgkig5EGKpiGxjbaq79iZNAaDBYwe5PuZnSCnwu4E5MitWCjnNCD6TTZ33vS6spicY7a7",
  "key43": "6JPRkqb7vK8TdEQUvFpy5gr7hpvGcKMaaH6nxtPpwHueSJaDnvghEwAB9E2iLn1YYJCiijpFCVp7146bYgzcRdn",
  "key44": "3DKuVxQJQnFDHk7EHXC4jtAEYHMnutVKzwjcTQwxmBtiQ5hseV5tpWTjbY3YQKkXroGngtN2Df4wBxzhtbwWwBk",
  "key45": "F6eJTqiJVgsDH5ubGnDU4KYXFy7MvYNeT5cgzNgJiLv3W2kuX2pXcbchgfcUnnX5ndMgPgaAzSipNJSummdxXXF"
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
