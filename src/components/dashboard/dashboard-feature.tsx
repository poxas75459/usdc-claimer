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
    "2asKMWEx5zdFcdKHfNqqH7HbNS88C1X7MBVLBzwxNaaz6to5vdsmkw2cGWfbjZhV5zM8FAkQTFuV8pem2VAeQ4oe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2enf7AtWKyNdixDtzc3xye87p2xbquQpKsP5QXbLDCfywCU1tJPtjFHWCYekhJ7LdzS5AVjjKWngUVBQm7EbcEWW",
  "key1": "4UhoPECLaqc3i5MvESuehk2zjhWHiq4WFuemVpU8Qy6z6zc7XUFenMJKnKmJFb9QV6Nkz5Fzw7dJBzDm79NSWkau",
  "key2": "3HeZMizJdv3725LxEu7gw4WDysFRQVUAB1rZc9xU8BTF9YvM2sES63iZaXss56fx6ZRvLN7HQGL77yURXiQSxJDn",
  "key3": "65k4voBq4iC6Gu4ya9QhBZF2LWxRtHmimu2Gmc83UvJGNYd8nURPDrvxX31UJ9Rpjuu6mv5MgTzhum8chaGSc8QQ",
  "key4": "3mM5RbgBUNFUCrUrSwzH7RnmbXouLB7WPeDgx1V7xTwdpkidjZwPisPtXmbjTSdkbBX6EW362w1aUSNXRtyi6jPF",
  "key5": "5AFm9XnrpMYerhtFPaPA2Z7GmWthSBzn8iFPuPqxum91nMENZq7bY8Z6Y5sPeXCc3qSxL5woz9B8KjNiqNrMwxBa",
  "key6": "ETugWSpSj4vJ7AKRWR2Tm9XSsBnChWCf2dBUNVwjHhtr9bK6kyPwbMgQuqJsuqiPsDmaC8Wfvz3ZYKfTNeCkxcs",
  "key7": "b9MNj8SLad5KRUJCj2tpmQBA2QYJWFizZxKzeM6DXGyGM1wu1MFmZG6vWY2vrru9hBA13KRH6cY1ptXpWVxmhqF",
  "key8": "4TSZds5Gk7zQfKyVQwpLxwciweg59swQp6Y9oQpDctSsV1DEWVrhgyE25VdhYLJ7zXbomSntWk39XDCFfCT2cu5S",
  "key9": "3yEp46kymRzL6X34FVTGbdeA337k2XyVg7TK8fiAMzfmVcuk9BkAagrXf93SkcwNf9vsVri9yqXRfRLEErWHC3TL",
  "key10": "5rj163a2pwdhrCVBwHVx9UHDgUFcmRJpjCEeACKbWPavEXdmrKVKuWY98N2c6rme1WX7Dr2P944pRMB6iuz44oXY",
  "key11": "562PQ9TajAc7CUUYYySoTBbz2EAMeK6JCDWkoDTyzEAaHNx4kRRiNxFzRLFXJEoQTMHSdc5i6oYotzMsTxUr9cTM",
  "key12": "yfiJA1jKEtJ1ZBSBvjhPVN6Vk1eoZJNbVzd3xBPjgK3ZyDG1NdyqjoDNiti2oEggLsDxEAy24WmFHPZDEfm67Kx",
  "key13": "2rxgNAA1p2qPfwBAv7ogpCvoWxLbrmycufGicMA4WxATBaNjWy7BbcBS2wXfxuQby5rWjLFmARZarCdLvCMoWcor",
  "key14": "5gTNj99ujL3hJi5d8e6oxMriu8b5A2xPx1sEV5YqbpfgYsNyvxGLDeRgVepkqcWQ31ErsPQ5z98xPwVqKd7PC78",
  "key15": "5NoJqfpCXRZyaKSwpVZyKW8yFrKvsR9wGPkcuDVeZY6BRKdGvy9t3W4yp8nwE9eNLypQqCVrXveQ6bzSQGbFharp",
  "key16": "4NXEATMhpxvNaz9kr4jgKbqJDPDSjBmCdQ4sYEXwgV4X4bFpTxYUBY7fNNQoNZeoUQ6XCjErTE8XY5DUoSTDZ171",
  "key17": "3PmUAyRU8bqDVUs29f7DtdtXezCWqb8HMi5UwdcPL9HGjHLbhJjHWCNE9Kvdg8UcommM7iLPXrPuCHp8AYbZPkPq",
  "key18": "33A9FBKEGYjCkV9Qks6NZwuajU8WVet8s9oHdjLHGVmnP1JRZLn8P5CLdUxZBWN6vuRmq6GFBqxy3hSjGiuVG7Z",
  "key19": "3KU33jfeqtnWJuSUKDM72TMMiCs27Bz1ahurWwSKAWqpTmPgq4YZthNPGwknzpn7qywH15CZ3CrfHjzPtgMWCYBo",
  "key20": "53HXxv7A2jjTy9hS24USw52Lx7FyV1q9HqGzjjByX4V2S4b4Ay4rZgbzpzLtSyqpEqiXM9Pzc5mfeJkMh1MS3aA3",
  "key21": "6rMb1RVy1SpYi9gboUiPRuhLkUh2p7KeNB28hiKrdTACHBhfkwGVKieqK2QnHsXRCnWiWQx42XDGCbjrnrfh1sn",
  "key22": "2k3mEytB2JsSqkQaYNECHLsow7e2yCt3yN4E28ptRGCjruT97f49jDuWKi9t6xBKbfZibZqTz6RModKMLDdQmzSP",
  "key23": "e58RPxgh7mjnSHGU84csgnJuVg7eA7x6R8Ad5n5qky6GoUctatwNCssxdFopfEaWgi9XFcuM5XkqF3nWAzEgat6",
  "key24": "KcnG5QWzDsxzhtLqHsCJDqhhVBpCDMqspe1aedTR4WEH6iKvjisKYu1dtUQiJTVkNzHDpL1E6qXYL84FoZrmVw8",
  "key25": "33wmWQC9a6FfzfjfP1inAx9ZqXxYYdxWaHEb7cMyhiURDDxtJtu1CpzAhLbfb7RpDXEcQAc84WfAYuCvPxL4uzqv",
  "key26": "viKLo32WzotXBMgRFRj1BkhrKDmf1BRPWWrzZTGx6nZdpfKvsm25GMNnQidzzHShDQaywfusx5uNayyymZqpGBp",
  "key27": "634BiqMBm4eP4iJzycKjPVuyXeAPn4J36YKU2JsoTRw1i4QSXirUo6mezhoG6qfaUN3VcQgrbENKcE527uw2U3PV",
  "key28": "5ojbyxWY1VfHMaXuFmMRVfC4DjN3FZSGEmRWS91Vzy7g12P9dbPUsqpqVmnMS3HsyHvWLQp9ELf3mTaUG63EUYRu",
  "key29": "2DfWn2dkbwpoMt8Xsvo3i2HRjQKv5Q2QcSJ31v24eCd6BHsLqLVh5RSoXtBN4qHEWPHBLkLxdS9uNQfP7cjT1oZU",
  "key30": "58gc31A92bydZybN1qu9eTkjWsQPHPKq5CxEwFArefRpB9JQrdoALfJzSvvnXAgsuQMh2g6uuHdDEpvK4oePHdkv",
  "key31": "5bTcVe9a1N8vG4UzNLGQ9qUoxzZNa7M9LDr7GKNZRvz3qEiWN4ndbwoHHT8P1umvB35KCfMdznuMi4ADZhd3dMEi",
  "key32": "ENgxDYYApb3m3qHiFmPKDXkvayzJQ9rEnHr8bR5gz2PzaT6uSYaLzqaQyHUoXYVniQSuXfV5pJrMy8YGbcZcEVX",
  "key33": "4AHr6CG7CXAsZFr2swcgFLwvnexpBHkeD2NvwSgN84fUxkU5NT4LrmdzvDcK3JupPo4FAmHNTA2RzK9ztb83GVjg",
  "key34": "3UXaGaAVD9NP1fdMJ5uYfB3VB13aPb1n2ayReTH8y35vJSx43qzgSB3M8UFvdvEyoeEUu6YuvSMabPGcePSz5Pod",
  "key35": "3zJVsmoxvfbkRYRjr2BqANKERmEafLJaVx3V8Tm6BdZxPXuxxa3hg3ErjWCvoHFPeBmjoxpRmiyRgZoHwvg337Ur",
  "key36": "4y8qtGFm27kz9xXeUPKbns4x6n4CvU54LKmwjThU6rR5KXUrRUadV4QPUzPkHt4sf6EDUk11SNC1MVQcpfKwGs4q",
  "key37": "jFwfGugMntf54fpkjNoB8GuUNgkZXCYUb7JLZ6t5uGhyYkh3g7rpsaSkWMwC7AoACET9PSNGJCv5koVHRL74d9Q",
  "key38": "UGUMrQ8P3oDdps6JSHPS3fcSH7iDzbesZWMAzpEXgajTHzSqrkm4oaw5L3Dy9QrkdRPcmNZkm9b5jBMZkoc8Hqq",
  "key39": "hP1HYjXKfkKqAzVbyAyNwxstefcFBctpS3vSPyqvcBDxybNMgtdnEqsv3kpyKM9BGyyZaJ9NYaXPR6YyTuuNzx3",
  "key40": "4U6PCtRTdPUdctEdgky1dPG5uCpZ54ERn3vBZNcJyhsvAxQYU6uPbvQAoNi5jZGQeutfr77w9Phtfu6FQ5tWVZNH",
  "key41": "3nNCfJ2YRVRc8EBcU4VEZToUenjUQF42mHwW7RuJdhQdYkf3tpx6AkDjmH67iNecaHCxCgU7JdEdz9fjQdRsZn6h",
  "key42": "4TM5sBYsU7J1ETsFdE4s7bk6S9SZ9FgxzFZnWYAQRNLvW5yvL7ac8Gmx6EsMx8UUTTervQh7ge1EWF42hmm2T9g3",
  "key43": "35CVV7q8EJAGHgaGrLyBcxrENqz68J78vckX2x4RE7GknBHGK2PMSdfBYUyiD8Fm4RjpJx4yBh4bNqZsJ6AQWyB9",
  "key44": "5Phfxrek3b4XedJm8EHbB8mpC9GbFgqEtaRAuT1ypTWE23PQjY3jtNnUfpbXUqbcxYAkd7bF3pSe9Q3V6buS96LG",
  "key45": "hBYPRRvNP8EbcyhkbLvaUv7csT4U1Typi7C8kvqsrSJSHkhtjGSmT2qNkjQAF9fqtwyvA2U4N6MSggcCK1oMfJC",
  "key46": "3oig7rDHRC4cuWZ46Wy7R4hZgxPJTvWGyvSDiVbkuNdqNs6vBtRnhAu12o5S2awnAmoPpydDJoqcvH8WLKyoWviM",
  "key47": "3nV5SXDtdmPLK8KZhJKsuDkkp2rFLvoLexKNZAozw6x3YWZWnkP7T98HuV1KQGHH9zJPnpm6DxHyWAJCJEJA8qQ",
  "key48": "5UXm5HqY1ihzR1Hx8iEKRq15o2hz6LqtGQ8fVGq3d34SGXazWcCyuMsXU9dDSFVaC9zXZYaMd1p1AScYY9bjFGFC"
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
