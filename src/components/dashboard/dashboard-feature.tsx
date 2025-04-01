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
    "4TFVjsJYujD9yUJbGwhWxk84WremHryNLQTUgeH3ERujJX1haBBcpJBJaBWBgtsVRh3y1ZbnT6nBDPa44iqyABqt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29PwaxxmcmiJwMgXWnKhaPtikrPGuGpu8MR6gqMW97Trb5Vet32qGBqW975DxQcJDZkBFRXNZF6o7wophDkXemtf",
  "key1": "5KKHfkM7wedKzeUU9xMKNToyZczp4Qt2rWavwHWbWN7mxnKaWHd1yLGenZC9pgE87M4mJgEp4NpFZENgSnJ8SU5h",
  "key2": "QiJtS581z4MRm1ovrEkCi8pSNL538UjLZjXYL8EUYoe1w5zGHvuuQrrkJRtgfPgsia4JbjNB7dUcBdQHv7JYS18",
  "key3": "4LR9v7mgN4XLYLn9Ac7mguJgm3LsXoV3WvbksUb48CK1ATMqqLwzifGa1ic3JP982hYWwb6Aw4URHDc11MYkqGLd",
  "key4": "5Ak7hvXZzU7QkayL3tvyz46WyrfF81SjT2qgn8qG5oBacZQ9Fnw1JNMm8wkMqF8ywXi9j5rsGSKT8692Z1MYTwix",
  "key5": "2sH48Xuw26BKPGAaXKj9eX7eZ6MULFcocRTaTuvRG5nwt98u32KchBCkW4yq6KC9U88795xFtWK2GgjgRG77JaJT",
  "key6": "5AdwZT4PgT4Qay9KMNhdfDzYGrSYnyji8fHZ4E1DX256bXqNEZMo7FS9BHnv3cdSyguQodxkhinqmUKKrXeTM1Vv",
  "key7": "55imyzCjP3GvwNwhhKh2wq8Wm2Z8kTDsuiTB7T6uQ8W26irTQthyVWaCAVARSvGRJkW29BFrfq3nYvdYbQSRq5nU",
  "key8": "274mnCXKZRMQ5yBw5p4GU2NQKopGoXopt1Po3wFn9xXbvjZs3zH3KZnh82ty5owcWAA4S1wfy4kQ6Kp7V9ZvxybD",
  "key9": "eUVZqsWYXSomCEx72UbM9XTNkwB9RjQyZjZ9u7CQof5agtzp8ygGJxThr9kviH1kUE5QNtzdaqMZrUBYEoX8awA",
  "key10": "4B34p83cvAujedFXoLaoknWe1G9qw1YYsPr4DN1mtjQaFD6QGPMj2JtZghm9txZ6cg39jPSuvTaXSU6SbpKxHh5B",
  "key11": "2dKVsdLLdEho66wgBvDrjniCYUBvizQkAnoRQStZiQYMNjnfu6uokjc3xb3nfTYNkkiHtUjdGB7YPNhNFKyd2xx3",
  "key12": "sWDVvMHt8QX4EorvhkRUekBDipx4yLTGSyWFpQYs8RVi38Qa4LZQjxgqt5rfzAW2Jk53MCdGC5iLT8kWJQDQuzR",
  "key13": "LHwbXLuGdZadKJDVQR44kKxRDNGXj6JjLSi3aMeiMBASRUHDmy1yb59FnkCTfEcgFuVCufJjyBzmJGgutd2TMj1",
  "key14": "4K5kHMVfZHS1j5QzMXFzZWDSeBr8uiYcXa4AZa9svrh2PpqJCiRWDP9RkRdRQYSBSJc6pyEQWu15CBYTBVvEoveW",
  "key15": "31vJa3hwJtzRqiMfz9E33HJBSTo11Tqcja7shsnUzqprQYyvTEWCXgQaKsBk2KyUc7se3jXKpe3FiRsUi9KwJHqD",
  "key16": "ZTrEaXiAbKqRhNt7AdssWxg2tckaZspq4En4xGMz7RX1De4huwTVZgabTnRPT5DipbKowcSQRmy8GqWUC6JLHrZ",
  "key17": "XKgiHxgZQp6v2gV1VQAnBBjNciWvG5mxWauzckUPUXgoQSqRDRrSw8QebXJSzYR3KPfybDQhGBCFRLQ4pEBYwmU",
  "key18": "2uMbb9ANNMS9CDcFF1eQy3sLGqHyAmDupi83pqzew5iyWwRsnfcmtTjcFJHvpVejdoAsEMGhEuHwuQHjXF5r2Ljw",
  "key19": "J3PLEYLDf4MrRvQeF1iySKWQ7QBHxppCjopWui73VCw1Uc8JBrU7cgwscy998fyQvjj4yFsbtMqeSWSrLrnRqaa",
  "key20": "4jArw459rxRrJ5ewaEfSQLsN6jPJpzKpS7cr7Vm247DSeMjdxgWW7XseyUntUsHxqJ6aseVcxVupv4Hi9iTQv6Y3",
  "key21": "2nzsZovJNFpqVccN2JB1sGE2up2kBEQq5EgrXbJ7eC7MRdYMR6hCtd3BeVZGsgcd1qRdEV6qXhxy5XfA8AApjDJp",
  "key22": "4Dw9QFxq41HnAwwFiAxVCCYGTHDaSN9HN51eAZgCb3cysgV6JNhxpaad1acW84EPbQRL7157s5NPsTiHnEkrrAtb",
  "key23": "45DRCFy1j7VL1KurJB9y7wPwnLDFMGP3Q1fhLB1dvx5xM4Z7psnEzikMjQhBVRtHRCCG1FDpnzK7XseNDG2uaTxb",
  "key24": "4kPavcL8sthj938YAAmFSS6Vm7zdGrCxbb99nocZK9f1oCajoYC4F2f41mA5TSgDVU1QPtwq2JFthTSisvDt2sDZ",
  "key25": "4goBJVfbVdMgTSwHQ1ktVPL6jWELhCxURwExmtFjm1S1df9RB9W7hEVQbg2pujkvjFKdCHyWKj4U8KYquDD8q8gM",
  "key26": "gbsfAFH6ewzr56JxuecSFcBTztMV7ZCmnc3Nr4Eb3NM3vzSDm3VoY1QyY5a4bbUfLXZX2PoKXAwTRc9aqxa1Edm",
  "key27": "2xpoe7vDdBnesLvUXpZguJ5wz5gudhYzBuPsQAufDwu5DNKcV1SQBZkStf4HdWzNu48T76dbeq6bx6tUCYAJMuRf",
  "key28": "a5NtHTbt5vFtui2F1VQJfbgdPjRqPEAHNgN2v57tMAgsm3g5okZ3qsCsMbMhtT6k7XRbWDH4xMnN8K5rXPMati9",
  "key29": "5bQ5rkgBo9LsUoC884SYE77FR5a4j36Hd14hhkMef2SF5f3nr61uHMAKMRYT4347XLJZrFxE6RkqDRN1P9rVyio5",
  "key30": "5mwUZbTYTmkWw8xW7G8vppCFhNSf1ELyz3rt2RrcX97HucTEAEfo5v1EHHCFMvvhETCVa7JFidBH3FEUAS9XB27C",
  "key31": "28sitXrTyAu1dmAdkzevUmXarfFJLv4d7NB2KMkiDUhyxC3ZVcE4b23UBSTxseBpZJkC6Ycr4p765DYgmYrZ5u4J",
  "key32": "27krbxY1M5M9qjfntBwXrmChjHW8Xp2NPL8k5r2PRTDtBhsUHrQWu6fDNKcjHb6SE9X4YRijUMDVVfHGyqgiCdHf",
  "key33": "3bnMyL3BJrNo53HpJpKYY9dRNnv8DsmwYaEtkeQPPpmakoNravqzoCsw7kM4Ni2ggoQjJbc7KZ227czWBYSosENF",
  "key34": "2fezKf3qa2U56cwhHqWvR6Wy9AsiKBmZwrzPxE6SGfVBhQYq5fUmDht17HMzUinC1h5CDed7UBdxgr7RKddtH3j1",
  "key35": "5Wxnm2dQbNRUAGEkUnw8r95xY9Z9jVPZuEY12dAPREge5C3FqpgedDQU1eM5AXrU177rCurD67Chk6WVTjbF8YPV",
  "key36": "2SYmuEnJfDsD4eQbr4nez5Ryn4ifqtQ8avHS1bY2RUYyURo8FqgKVs1knpExSTeAP6f5KrAE1gztrHk3wUVz8pFh",
  "key37": "4f4uxHzqo3GEV2uBpeGEXSdLUcNTf3aFcoNThtqhbsYNrmReMN13MvDhSgQfHAS2krwRkmGeGPWSTqnSMhzJcmX8",
  "key38": "zNFRbFGqiP6UH2qLBGj4cjjoYyTdcs6J5Wmcrk9suwUs3XZuADYu3AkcWNBiJ6M8EzUaFSs5rNZ97ntZStoF5rb",
  "key39": "44cwYpk63YTPJozYhbZUrCbr1A7zWNd7m2bwqfkrZYV6VuYyVPwqGDZGCDD3ubmyfj9nmEcARYPs23xbq7xRiRKH"
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
