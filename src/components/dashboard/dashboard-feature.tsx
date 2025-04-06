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
    "5qLUbYZ7MwVHCb1QnW1tTBZUiujV4GQLGCtszX4qji29LLUXBzUFvo3FKboWUUCgMnWSTTndHpTWUh8rvtSo9YTo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46SGMCAsLFyUZKxt2griD81D8mwiLj9wJDctueau6z554UCRYBwhFfLXtKL1GabbGLSdiz3ACnaNpAevFy2PMMZE",
  "key1": "5CVbFaRAvTfE9W4whrFRFA3uoGEUub4cn89KTYsLacgyZeP7JEKFekcmZDXTNrVk2HezyUHZqeUo18aVPVW18koD",
  "key2": "35ZdWdP4xkPtKEcBGUM4bAbGNaVqXT16RSEQnejXbGJumSgxGXmpu1wfarj248sJ8PbtV7BSqoJmz252mVb5wLD2",
  "key3": "3VT2BqmdzYPQRL9az2ncDPsVx1eeo2a6YqVW3D1PEdxTV46YQQwwdjDyZZN1o1KrYdPJLHoiu6s2GVJHGCCbvy4w",
  "key4": "2g3AZj6FDT6gnfMCRiDq9J1pBvHx2DJeCw72rVqb13XM6ZJJvqhzR3RwKrNaWBTrS1pR388qni8wg97MXUUBpiKR",
  "key5": "2k9dgE4Gcc2shg8Q9xL3NsCt1BybS85TKXYZkq1vz9Ms6bd8H92X5ERRg2iZL2R9jP58NyKjDW2umEAQDYaPRSqr",
  "key6": "4gtcb22Q6sgNHfpYQDiGigLeB4pFk1wnwP4RwYgwXbU7GWK831k6edUvF24oYsSkaR9iBjByko5YZg2ziFDMFzTH",
  "key7": "3DKwJ97BKtcbjfimhfRGh9b8J8EJkfuwv76Law9iLctU5LVqqdTiBfcCjuc2me2FacJAV4TYsiP2b14C929RNX1t",
  "key8": "4QJ4kAmPq8hNLkquKNBjGmcUqY6u27onFbQ6UFzZF8p31gKyUUwkzqo7oTefsJACRGh6AwALyEfR1aVbUuoXugmi",
  "key9": "3fZPkyu8yZN9ZoTQMpkxQ5jxiS3r6njt7Wni8sgVEqqyU2CEFA8h6UEsxteqLmazdsqnY4KDyXG2HLkE4VekZ6ev",
  "key10": "SWYb2MnXo6LMUaqv37m9Tvzw4mXNFNARk2uKrhwPGkV1R4MT2cvvZ37M8BWRqnWKd9iisFqfsaCit2PguGsoTqm",
  "key11": "5on5rgrZeYKz9n4GEANZVWcaoagaq2cVwBT7tJB5EfYJuLNjbrpBwrkXCtsXRyLXM1Mct2ki4vt5pBnxZnWHSrW3",
  "key12": "5oc3pn88JPgWAxGbVHoAKoo1cMV5Ryy87x3dpzQwDwXCKNcxbLUuXcbUpPUUd8bTHFUcRWC6k9CvNkQ5LmWXMZqU",
  "key13": "4CS1PQtB7HFKVgJPXZrFAX22q2pkiU1HxJHQBchktNMvFP8dberPjaKKp1f5BzTNeAp6MiHFkf4o6xePNazzXUN5",
  "key14": "2vnLKGkzwE7vNxmc622D8xq66xLbzGi9PFS1DAGh7mTabExfd2FXJCBpdRUs5t9wc9dgMVTK8LDaf5ZTqiUJtBgA",
  "key15": "22AWBe6MXthUhCcJ6i5Azwi8TNqxr3Jj8uQAznwXiH2jUU7AsrCC6kPvWFBRA4DXByL1ZNPjts5AfhyUL7zh8pYJ",
  "key16": "5AyUk2CJRcDnG6eZTShTKzgyj3Wx2iqkaF3XUEWm7UQvq8k2q2VaKc6uHxjXeBw31FpP7u23NKx761KpMyQoqez6",
  "key17": "TxKDdwakNFRhJw9tvySFibXFNjeYUkJDqi1qtLbkJVFhYAR86h8naEjjwyK3nYxQ1Wv8nTDYXPB9weFePbdWWdE",
  "key18": "5pxn3SY9LAfcEWVZptJwbMtyomcdRcwWNjPDrWMzmpWMLwZ6uFXmSAW3WzzB8LV5auwd99CfDLAXMj7Z5wLqmXje",
  "key19": "2wCc6mUX1LAGT6ufumkijVciprzizCkMC9bJ14CAXbhWg5zRjGmPi2AFBnsBBARyqdGRinDcbTasU295qPy86wPk",
  "key20": "5AroD7U6XFw3xdDgaZnWayeHtj2ZbWTyzQeZ7xcquKRDGRDHy6K7VaPnq9hdb7SQHsfNpj8wi5Yhopw2KgbcmVTS",
  "key21": "2Fxd3AiWwmXciCGnexcwP2cwNgpghqWfh5Eser5Bccsd31EZKxMDQVVsW96Ytf12A9MhxoUHCeCVNCCyEXSPxSrG",
  "key22": "2HafFfcyojMKgPaLorRD2gtJQceXHoNp6Q2G2mrp7Hrhk5GwaFxrN1vKRMWs9Q38QjZGSPU2AzqoeWbsReEEwgSd",
  "key23": "2tVGV7m3qTtfWoZUwqs8ZN5GA35ZqeV5F1NwYjVBCeqQygruDtwvaRvjWxqKqzHXoE1q9AF1FZ9w7jVZ5N2tDuGt",
  "key24": "3mxqovBdtXVc4knXSggySTukvp4TqAwSXMuwXwrGtyDiMA1ngKDwxdLcoTo9fYbmmjC4wCS4X2w8bSzNJB6MzS2Q",
  "key25": "5Ftgq5gacAwMg84Sdzf2k7xbqn6CeqWufqDvUCv3ydcRLRTABQaQXdSwQKm1x1iMCT7hHMgs1xHuuESfjoKdRZYm",
  "key26": "63ssWuKerHvXrb6pNvWYLmQyWYiVzffmfv5qBnjJxT5z2ycg44nGXBMrv8C1yMS1o6f1sNywtxDahLN7zqBJ9LZT",
  "key27": "3hhXhm28TQwBEwnWs3zwC4W3Exs56VV9zeosvLS2wB28WEFGeP2MyxAv3vzuDSLfb8e2dMsHhYKyNMuVyF669Dev",
  "key28": "5xSikx18gVSJcavyLwcGYLVSTdbwtsA7o2gsXbxdskVMfLhndpNyvE1XzYR513n7Ee1Ro4YU2cru3J5AYUwwz1uE",
  "key29": "3sFvq9EZH8wZfXbYqwVAZA3XcZVEEbL6EF1EbC6DbweZfdXMPA292czdn1ZS5SDUfCPw1eygYtuHnrEWztAifYuF",
  "key30": "26JotiqxQSPwrTXcdSogFiNXgK2vxf3AtuHNXEPNAagjfxFUtnBKkNU4Cy3dFUmaSYxMhoayQTbTPma8pJvzKhxg",
  "key31": "53AZ7T77cjgXqzk2A1ns4Ui3efFEeVuatMpYZGj8s1Ztxf949wcTi3YVvZNkpoJzfdCxTvQYVFW6JetWQcRCqJLA",
  "key32": "U3xcXwgNomr6ai9HjxFRnikNxe5kBsVwdTHrK1f7SKBjjNv4Lma3toqVZ55mgdKGHJ4TMdmzAq26gZZcMkKj8KS",
  "key33": "4PRR5Zzjwg1ZCkqcsnRuufjHDnXZz6B8awJAurwEcYAqFCpxuJrU3Y4XBnXqG8r8rhr75ngLdqBEZx86Dq6UMah2",
  "key34": "565PGuUUkHo8MVmCrj6MvbsPfeua499VrG7u5TZWssM8jmFZj9eQ7eP1RdXveG7Etw6CWS7TtMSwt71xrgJECH7z",
  "key35": "5KwRQQsdiVkVii9vhQJYLrYS7pfi6wVMWZ1nkdeKrbocTGX8AiP9ZrTyddmWb1nPxbSiAM2P8U6QjF5pgD9DcGPV",
  "key36": "8pUio2BQuFoEJYRnm6HWs9R5ckNL519eoApuGN5bzeoKEjeG1GWN57gzTEfzNSf19QJz4cCbQFuoumsMx9qDRHq",
  "key37": "2qYzy1TQRE5gnDuiuQBFuFMaHAPaAZstQsBb1iFFsLdgT1SeSx5N5B6xJ3i6uFVdu9vY7aFT26ZcXyGrTMhyMB1i",
  "key38": "2QGPzr6MLiopXxq8RXNrHqQm3Par8zzmd6nzBaY5Th4JcBhot68wT3DkpydiRLyTF5EsNAv8dpUAVrGgQh2Kc9N",
  "key39": "38z5tyqNG1PySExtUq6yLuEnbzhxCjGyimu2NqcrEdraB7XVykfBXwQjsmeLoQN1gnGhKGch2gEqypXk1xpWQ2cz"
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
