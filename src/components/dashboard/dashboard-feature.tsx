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
    "4PnNPRY8rXx6iNQtm7uZhk7XYsqXYMaJAx2U5CnEWcpT6LkHRDa1pJgSVcuBFSoCvvUpkFDECmMDjPyHFMQknRL8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eB1t1S6kzPho2iDfb7Bx7gL5VV29TrAjDKLF4p7JBjzTESNL3f8ZsXCJVFCBQDUAKw35w61djqMjp3deTxggx92",
  "key1": "5bKdGWZsPH2tJoUtYhapotF5KLsZpvd6LK86brgmiNF1FBLK1CGVHXJe9qdhMCg6DafAzudm1YYeuJRsG1FvP1LC",
  "key2": "4vDfsLmmWMDz46UFp5DjgHe22hYf8G6BMtBxZMaM6DnqXWh2Xmjo5qUm6QGJeJb92GDSDBSjBm1JiFy1G7LigHMJ",
  "key3": "5zLdbjxGmQ464buGDmVYZQqoMKovcu5GrT42D1a2jCu9NPRBD26tuy48gERoBmwPzxsfvFAT2ATjT1yuJBerh4jW",
  "key4": "2kNCa4HDYgheMxHFopmpcNiJoTFFtX7q7PB3JSCcXxsNNSR5YZTFkybDPe1P8ypxo2RZM4Wm9GVrKfQ2aqgfDiS8",
  "key5": "3d5WwnvMSrP959DYDiLictp4JKvEPP2M8bYiaxWXmJ2bsr7c269XkDrmCRuBjfaamcM8TMYxBxbV1eJLFdRHQ2ZR",
  "key6": "4nxtHA2vSckxWnr7Lrkn9y9Ty9YLRmPXDkBj9i5NhN9XzbknUbu6aZERVAHqdjWhqErTBcjS46RbL79ePDNbGPTx",
  "key7": "4ptdVe3riX6osnBKzoswChW8dvtA6ZH7NTG8iuHoSn5oJE6nwZtu3yZ6QrwJBaesYkZnHATqeYap1ZkJMUadZS2R",
  "key8": "5MTaiS36agKyQCoHpe18YCF8CmHZxDA6KfEpNgMjmXyJJG7C4ofxLNuNVC6StAAYvwbABJm2SLHDjXmzjNhekEke",
  "key9": "5LGPh7aDsvAyydSor1582PUcqvqpW4M8Bm4NAuQmJj2DymnKabtGM3mSmVaX4YnQpGg7J7UD8oyfh7diHa8ZLTwu",
  "key10": "5enLUdA8HBxdXDw7E3Q5BtedVRVnEp5GoVrPZj4L4PYdCCwRSTsnCbG1TpVUaMyD9tcseogW8qFSNxD6j6R9g3Zz",
  "key11": "K3pw6CxGBQE54G3WjHokkCxXajQk2d2Rv45xMPEqMPLCHbVSfobDoLF5Y7yL6xLoFmjooGMjzb7UdYfniMWhE1m",
  "key12": "2wRfkr6biP8QsiHsg6YRaN2WyzoSnca6n9q5sM2gWuo7dw92FJMz4cDBG7rSVtyM2uWpbASD5H5pE5eUCyTgVXfd",
  "key13": "3VkyWrC1stw9XdvaYE6ZnaCk78TRXAei6Mrb9eoFQkNwVXdkvruSxUyXKpoCV5CinBYX2MfF7FELefXmsH3T1E73",
  "key14": "5R3ywTsigYT2vhV7P2tti4KAQNqtohgvRzWASpFCRMi3BGNMdgHyakZ5Vu8uJrnruimHb2y7FnXmRpf3PPgQKz92",
  "key15": "4YYxKcibBKByK98wFuB5PhLZ3KTVo34CyRkAA54GwTvpLHY9Yte2qVig6cEMH6zDqZBqaWnMcVjLbKGKmMfpfqUM",
  "key16": "5eWLGUTphX7rXtLXApmAcd6DZt194tfcj21it3DVyU5b8sNadUA3HipUm561vBNS5omngKPJqaUvocB1oAw6HjtQ",
  "key17": "668XhCZSNegEDJD8ZtFNdQ8XrTM3ug8zUGxK8hB2kXAxSKJDFPsDCdtHvBALRSAkJpWQK5Yja9AwyWuss3dn6AA5",
  "key18": "5U1ALiCFwoWvicw3dwVxCeLSWN3NQncvmYoUvBEwUKgSsMgQ5JtfoE7vcPWQErH9dykZm1mKiupB7pQQwMHWv8Dg",
  "key19": "5tFRcjcLUzVPmeSueiqE2hCQMAKFnJf7b7idFSkXnZnrdZ4GiuepFSyYzW6MfrqfzAmys3LMbioteXdKpFx1VXTx",
  "key20": "3C578uzqnCEMP5Qk5pPABdypqxmVcEimXZegVezoeiF5wKV9u6HPkTs8B9c3F4bmg9X13DvzufMUQQtWodS8rQ3r",
  "key21": "3vwmnQ4oj5JvjYxq3a587BZ273QYWtvMoB88KgVt6LGQYDtHQ9JNezQK97phYG9YNM9kMLikYWapeaV1Bujvbdhy",
  "key22": "5LFHoDNFiCzgTevsqpckSdTqczeWP8gA2J891tNPTd62FkboXU4WipomvHg9WfHVVibXWJTk34exDu7WKTJXtdX1",
  "key23": "3AGnjaeJRXPMFPtZc3yXSxfHBKKTbnecn12PnU5ZGeLAvL52keskeiFEaqXgAEuu3fg17PEio83oqetH8qmK5Edi",
  "key24": "45WVBQrD6ApYeoCZSrWSkTXdvDnFvi6C3q5WipuwByAfEkajdAL9NVbQ4csTC3SqnEMaBhdzvLrJgyYa6QbgBgde",
  "key25": "54AEkqQ741cx2ccwV3eBU51cNxCohCoYZrkX9jY6wzM5oDKb6Wk8VpzmZzR3yCSh8PfBQnoGSbwgCpgkx8ufMkne",
  "key26": "4cJAu5mMmnYWP8Bbna8omCC8WHrf7KZQTfqs9ey7LyAFBmL2wk5hViuCYuBVeR3d3NVgCn9tKPjfqaBZPyD9hFCf",
  "key27": "3wgQqZoAG8ojDrTRvXaRc8dH3efcTCwidNqwz2e1bCGSij3sFm4Y87mxknfN4LxszHjKvwL33XAtVzSXKAJkXFSv",
  "key28": "42dockQsrU6WhCVWXqiLvPvcMy3dDLXLLoyxGGVM9531jDuUKQuDZDbqDq4xHUMdsAjhWuA63kcqGRsooJe6WDFe",
  "key29": "4d2hUdrHBkQYvtNqGrgHdrXbTdLXtvzjFfLn4MM2tQyfcVCQwp1KJa5tsxkxtXQFYPiFs4YsS7zHphndKM6Axh82",
  "key30": "4h2vo2AMBCDcdeJJYdkD1Bv5EfsQDaHPmTdeXQq2gpmVZmBA8whfFtaPxXgGjad8GFxpah18qNHDYT3HYU5uxxoY",
  "key31": "2B6KtiGssNdPnKGkEviWGxVcdEkwwFSVUTEk6TCHgMSGkezXiGmGCuSJ4f1mZaxESrT3vQ9jtE4kAAUVjF1Ti8S",
  "key32": "4no7woEatfs8PWsBRboFZr5WhtXtBnheGYdfLzCzk6MKiThNxe8BZUkZo9zXNQDutSiFHc4XGhWA4XcPznWsuCSY",
  "key33": "qT61fMPUmfjFSmUCzN6uWyUT9mQRrPah3KFVFrkKr2k8o2HRSJG1Sih9FUiq3sKGXyTdJr791mM78bHpDgYEDtM",
  "key34": "5bVWDTD2yFswsmyYr8EbLb4cTCaiLy2MLNt82h1FQNgSMoDjMUfCbdZo9V38LCt9s7Fd4MztDWhq6GUDW59J9Tke",
  "key35": "5gfK1LbJUTFKAkiMQtyVVSByuXJv3aFxeWh7YArYsz9ZFia3GkRK7NJYJ1RXsPuQoX4FJ9trPn1TSkaHTRW5yUef",
  "key36": "38fqNqZm4D5iQRsgcLNKCWftkuidge5rQL4jXfKEeAMztkUtzWnFi8BkPtxJbWQkcGvaSV1jCGZGTzMGz7C19ryE",
  "key37": "2uzcXb7mE92UvLt7pZnriqqzypNoAJ1BqA1UMww6jYi1UEBC8RzNqmiPkM5jaYHuSmK1KWahYYuvudL7iVApunxE",
  "key38": "2EQpHhPpmi2LoNuDnNay2cqHKHEKKpCKGY8GU31ERQgqZ6KzswW65TVTbx8wHQPDf3D7FfbpLRxdTfPRHV9NNSik",
  "key39": "25moBmr6RoEGTgBkv8HENZ4XWAAvtV3s3XK679uD49KL4B7n81BTwH2boTC7xkqQ2NN7nwNaDFKfqamiEtMRPg9u",
  "key40": "2VoMGuNWQs3N51PrMFchub8eZEe4tVAFqp1aPu4QvUbWikBrgtraE6uT46hEiYGwVbS33edPeU8VsV6hSNueqeR",
  "key41": "3KWDHLmzPueD5uYGVBRLfzKKqzE5dwAG59RMz3Jg2aSg6hfQ4uSH9CS5n6TKTVhpNtvnHqVUWMz1ZrAGWi6rgYzy",
  "key42": "4oVwtabjC3KiRsT1WTW7FkNHWKrzxfx9M34QiFRUHnXppLdGJzZhyqnWChfyo29z9JyHdMQqBMkCEqdap47tYWpS",
  "key43": "5PCmGaa5DPfbWN5fqhiuzUpnzXPVzizGuHzRDRGSioRRSPfJ8QGnmsheKzvcPSa5ngea2DGERMAb6pmn9QAPbYf1",
  "key44": "3oKbgzwftceK49egyZSNij8SrDKSXGWdxiY64fiZ5feSRXEYQVn1t3UFWz2P37qHzgeSHFQzzbKdxxAqvuaM4HAH",
  "key45": "45wr4ZQYSbdYtKbQ6E47Ptgreh2NgGvyAbsmGmH3JA3zupG8Wyhi3wdJCuVFdTAKYDK6GHpeJjqoJGZsJi97u7v6",
  "key46": "3xB6YhE4WwdBqzzX6PA2m8GF2GBfMdk64cGLvoBGkR49ttcQdD78XPsTTq29AhCAMfLJNXoMsx2bG8TEaX2iNN1A",
  "key47": "t4BZ3xHG2NyJLT1VQNFmVfSSW8VWatonpA32LR93JNqTLExXiqsnqvqJ1a4pwq5kbQ9bzekh3AzZYAPJdZLmCmw"
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
