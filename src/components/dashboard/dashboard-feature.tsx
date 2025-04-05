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
    "3mnrhVfW23ybkYmToscoztswHqsRzWSfMkjNFp19CxeWVm3XTMhtbjYAh336y3rM2bd7m8p8i6ZKRXELHa8M5Fj2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HktjpNg1qQPV64v3Gaxuec2H5pE69i8qB14Au37dFk4XTEmyj1otsW8gSjATFWtJo2MJyEPQLJFgEdKeshMTh2o",
  "key1": "3zLbLi7vcBLrS8hD1gVLkLwwdtu1job2rHxoJAGTLeySoonADH7mLLQBwvJzfsxu2ssQZQKWFgBzj14YaTTbmB1Y",
  "key2": "suhAjrvSYteeatJarSQLS7aRneN4MWawcUeds9gocBp1nJXNyZAjQVxUN64Ccfh4n6o4TxSGZNjxJm16AH9baiQ",
  "key3": "24BcDu9vd4zFwu9C81yqnGfKzur2sShz1WjoYroJoNggE78JXGvXjiLvrS9XSh97DKbwRs16cokJHswk3AujFJQe",
  "key4": "mneC7vgGk6qZsPFeeXJT1jpvU1PFv24U5C1WBGcfR9gRJWFwAyzqtGqzH7LNYYMY9jxAtG145bgg1Ad5rhmVBqv",
  "key5": "2yKtf5dN16bGH8PCuQj3iunQax3QBd1TmkEu9MrSXXRCnymMKmaCkjZui4yiL7JpqsnYsdWecvoJCXeAa4e63Eb6",
  "key6": "5UR37MedxJHV1imyidyk7SVzCB1Y7mbzUerrLFkrkGEUTbUecWpSJkaHgrbcsqhv158zJYY3gTZgMTtfZjdxExNW",
  "key7": "3pLDrES5FiEWgx1xTy4CShJ68U6YT6LkjL2fLETiXz4BF8BAVB99FVqUoYbJoiwEoYr8iKubAKDSnecj52iGJynh",
  "key8": "43Ww9wMzqHQs98X9RqAqPeZmveg3ggJUPty4ZxmmGyiZjawkVeMtrXMM7jRHTmy7N3KsgxvMdqBziQrydU8LfVf6",
  "key9": "4P4XfvrTBXErHyQ4oMY6c3Ut3GvUBZty8CdwupQrsyFKRsgkwZiXhsZ7W2a6aU5LDAbKVMYK9UfJNP8EpeyLVCqE",
  "key10": "3Aygzvjt2L9GtFcQtt1CVaHnysNsFUPozJ24bjyhJyb5gBPw2FrEyfM6uE5jx7nz8MWBY4zp3p86TmhQByhzAH9w",
  "key11": "5mS9jzuTkwWUXhMRVjmn7pCcx1aS7kGRWa6vy1Sx2Ht8YPocX85MFD8HLQho5i4ipcZFE9QC6ZddkqBCkLvTwvhc",
  "key12": "4JqaSvgPJer3tkptYKXstFDhLdZBi3UR8YjLUJaZ48G8DH741wr6AVQJfyAo4CRLt2xEpmoSHGNUAFTo36gRM4Yh",
  "key13": "sEuyTWwFKMfZg8VuGrr4XfdaakDAX4Uw2geWvEQM9go8V1jq5DNsv3d5SafNyYEyQDdxgti5z3eyCa598KUVFG7",
  "key14": "4guJVQHVd7y4nD3QY1nGoncu6v9Hu3xHovMhk79qH4mYqykXnmmKrNayL2xpQJiqjcVKzxhYcrJZFfftgGerXZnE",
  "key15": "2GmLAhsztmG5WgeT5vbVAmYYUGR2AQJiupSdgDmJmqKf5mL7c3cNF6YhJUCz8mdg6ktQ1GpCfgzEGc2TonW3agqu",
  "key16": "5rGJGrGaJForzkBKQdVKBVMngmXwfG1MeVaQDaVEAshsJCxeMiFF52wjwp1iwUivJH7fSN9WRiVoZZPVaWnQnYcL",
  "key17": "4YZ8G7awKPJfxScbJso7mPoKmNsLhaJqqfZgPMCrx5TZXAc9fhxhAENgYjrCkeq4d1WQTnxhhEmJFeyqnePUncnQ",
  "key18": "4fdenYKkB9r35W8NxQo5RCfKMPJCA21xf3SspttGApW3jDtYh8KC3V6kFuXst7H2BPc3LehPNxkniyvtbW9rY9B",
  "key19": "pPkcwNkMmcSytXeSsyRyULdmqAtsVyjRUfxHVBTZrvx3j7tb5z6StXsML54AgbHAQNiY94MXFc7UVb8JGNSwuQp",
  "key20": "3JPhnoar8NUGHiHDSDh4wCMaL4QZjX9QaTUAXYJ4VUY66c6mahibFauQDLKSKxFmc1XXWTBYTioxw4vnw8GVamjZ",
  "key21": "HfDDEadiHZhnqx7czjY5MTvUkFEeBLswzjZMUzgB42E9JYZmMb9W9k668XpCb5jZ668sL9fWjKgeYKerZrgMDkp",
  "key22": "MsdfoghPZLjNcysQDTf1qvmMRtD51fKQs7UFgz7xci84qQMNrFc7FJBqgnfbxuQQTC4b432PLRyYyGNYYBq2TGs",
  "key23": "2G77qqFtnjpZGqUTqFB6gnCh6eoj4qaDz9QZRymLzJLsy7vNi5AgervhetKkj4CiUg1afZzWYyjH31KqTWfV8EXf",
  "key24": "2Vd8m8siPPxxqKzW692CMA9xQrRe5CHxFPXcVkcP19n6hfNFL2sTh6R1ym378Vrj1Ka3CeD3jU545bgCAtnwUqqh",
  "key25": "4rJhTcci7FokMUhfu7MGqpua5uMkY3rgpGRrx68NHYojSNE39A9DF3NX4D2Qu971m3CMTtqCGu7nEKNaePfwXQBq",
  "key26": "3AhG3d17ayPVSW46DV7CxLzZfUjVKmYJBaMZD95yEgtk28bR3gjeyWA7FQHbg6rGkahQmbRn8dC67RoQ1Vduz5TP",
  "key27": "3CffFDFmyzXivQVgJdMkPX3bkabe9QPgAoogvHUFXR4D4nn1DDyDh4yPZtNpF7GtUCm5upXUY93gAsi4CGmh81Vy",
  "key28": "BhauRRwutFEBbk1TJhHSzKo4GMTJgeAt56yn6P1m75Tr3fAxgpJWrRt4oCdsZLjrKE5NBKEVK9SdbZjF2BeaWbf",
  "key29": "3stu21ifrMuSMc1bMbeS8ZN6YiZu39dq1UitE9wMp5fqA7K7wfduSxDB93f6A4WkGDYb1Tsq6tUdMgv6uN866nA",
  "key30": "4kYWsBDuMcFdnaFeHcd1UUMyyh35s91Nqy868SzW1htWrn6e9XyC9T7qaE8Zq8GaDwwnvVRW2Ymxomj3PrfUkUeC",
  "key31": "2umRU2nhD72zvGaM6g7issXHdDLXyq6HxyniaebVyF4scVyYWqaWLwVijU9bsLgW48p8E5KCpyjo41XG2U74N7uL",
  "key32": "24wyE2uXUR4aDCoLZiR6HJ97iLC2kjxQ1GLkGSAJCbS1PGbbQySw6W81EAn6odyompPZmZCwCXe8zuBExu689avS",
  "key33": "3YnQNGdvz6zPTqZFP6WwNXPA5s42DnbWFAVYf439xMsk5nKf3JQtPGzzQYc24mqSrgQMaYw5ZsBVH4MrpBWRUmSQ",
  "key34": "5Adm5oQ82fa66Ye7YunN5kcuLecHtaRA4m8EFCc2km9SpsVJpsDoV4oEEih8G9cLjuERevvPjJWHdgzHhX2nXBqg",
  "key35": "3dn7t6PDAB5oMUreGy86XXnTvw9r73gNFXmubca5zmf1VfAWHxPZUHUALu2vQVuPqEbn2p2bpYUtoyxRrwXDBhBQ",
  "key36": "3MxYrdfDdcZXv78Cz3aYesVdtm1QWi8QKaAqdv8Cw3S4yXT3YvxKRQPiz9Qru4ApRfXmfxRu6vC6BW71kk3DtDcG",
  "key37": "4knb6SiGmiWMevXqoGGTKm155XGAFKHHjTqXmjMghnMAb3RwUHe7exdyWN8yezWnuzcbruS6DygwmNSAiXZH42Yv",
  "key38": "4gDWSTbGFCBHMkgMMx7RoRJ767MT1hGN5LaJZpNEnrLTjoumC9FLEFPzK811H2ZZecay9mTUSdWcXxB1YtZVZGvB",
  "key39": "3Bb2oGrzDpvY6hJQoWkB1CYze8P7rR8vX1qLYG4nNjD2HqWT6UfkX4hwSdkaFgQb8PbxbwfvKma6DL4AQNGXA7sC",
  "key40": "8GdYMNj8xAE3AoEp6PKzmRhHAxJi99v4oM8Rw165RmnkXsNdS5abWa1Aj2wYz3arCr2D3gM21LyRYePbBXBD2xb",
  "key41": "5biV8AqMvCm8jMReMfZj8NpNRKuNm4KGBp1TTsAJmngh7X7sbH4vkS6UuhLYrGd7jH7UxFc41NWRDZeBZPgRUN3N",
  "key42": "3ow37ockpD883VAL5fBQRXgM6Dg4tsJicpLSA1cCufp5C3vTb3P895kbbdkfXyGzrQuhvVQaVR25VXUH5LBw2Hpt",
  "key43": "5tcsbBPTpbLLBkxG5BEYJsGBTrbyV3wkeV7sZA66yHBgAZ4pMjqgNo1PCMocdhiN9ckh85kmQKj1iVr5mEh1PdrG",
  "key44": "4dScVLYSS8SRiV5Bw3xc8GJZp5N4vu22RGFV41z2iPiSWxoF3kKjPVH6NXHp9w5d18yNhj6qz5a2BBYxPjyZkB4d",
  "key45": "3opb3eRwNXgQpL3ZrQpvcH6JP4uSuSVZqkbERQAUHj3hJMEEukECLVQbqFSuf5wzzT8dYyoHSh4hMy85gDN1rGui",
  "key46": "4jCkr8K3r6FULBHwp36U9a6eMVRNyUSMS1rEDTZ2dw14F8mNUpbHWNDFmxaHFjzC8RUv1kScXQqYpTAZQL41ewVZ",
  "key47": "5HMgPVJER72BZqeXuUFMtopAW1NeuNS7ggnDx7fBBuwPTBrU4Sf24v2WSz8qp1jhZZtBH3ukZjUkrST4VTFrnyVh",
  "key48": "21uSSmSF9MdE2K9tvaJZf92Gz8XEYZfdsZiFk3Z9Lf18ekiCmo8LX2mFNMmrsGDLtzJT5yZz7hDBCrup5H84bYQZ"
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
