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
    "2677t7CpykiZApCC62PLZ3UjF9CcjnXbN7xUvUM3TrX5goDBAEjGPy7c9v8BcGsT2Pn81zEGetpnRSzPZJWegueW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57LktYoHXsdrAQiGhr7WvAiesovmih7yZJxup5kQXeu1skaarHXSb36h5hQy3xZkHZnCaGaESfrXnnQLQyk8mBfr",
  "key1": "63rMDSFo5WsBodWp9Kykm1o7qDa9GNKPN8cijuPS4gTmqnXcm8CU4x3rAzDdEbiz8FAhWBy2Rbs4T8FZacq1fqch",
  "key2": "4rEuZVrtdtMrvsB4ixnBmHXs8DvxqRi75xoY15NXpaiUiqcAYA3Xxm2S8Xe9koo1Py99NBj8iDEQQXWVbxNYgR2Q",
  "key3": "2J7REHjXDXvtCT1GUAeLhLsVSWcoVzf6jVrnpDL3KNeP7qhXoD687WFUvEdMVerUySAD3x9BPLJEiLDVAuyodnSs",
  "key4": "5yLTfGeQb8Cpf5obyrY2ZJdqChDzyGmMfjnFVDFjufkCfjhnmapxgj35q6KPnXyJ6BCs4CbzHBMPBGpgerVxwuuq",
  "key5": "4s4PYmmvJiCERJdaXFwjGMqXqjZWC9uHZzDWVwkQcc6qFEzPQm1BMKpUfz2vvVVocX1aMECCWx1SeuPJ95gfYyFS",
  "key6": "5S1Q97JwN7ixq3QgLW3fEncRoPoQ9ZrQ32MsorT9tAsfXkCDvRAyMBRBFYeGN5LCXhmJ2yGVvkPfL795TtpCKM5x",
  "key7": "5VSRC6eFwmFzUyZLPxkASFN4rDJuo4SSgThgvxbtXXXtFbQiqESpsN7vQJewpvuibKXnHiL76vU3zK5R82vWxSP2",
  "key8": "3F2e3rfsoPTn19XMq1M8jA4JeyobuRxsDhL9rmdW2ZNAEESPiuv9xCGMkNLxtkahUXZzPqX5kFXGEafeVnB9QFXU",
  "key9": "3f7cEiUzRGfkFvrjfnH6yYoAqjkCmW9cWqpm7PqNuHY6K9yDAMDMXAVUhmnfwEQWJUBBPbkumTA3AcnHyaFt6YAm",
  "key10": "5eDFWNQfwvdqxuo7MSFqgZHq9MttKvGQfzSr2CLS3AKYoxMBCXxndC7jHK3Q7duwcFvZPw3fsQCFd2fs6TGDAQgq",
  "key11": "1cCcDGKG9fHHtPTqKxVj27RfS3gHxyM4twfJ7i1rCeC87oCoA46XURNE4DpZ399a7gxNW59hWTq8YsQWrDnof2x",
  "key12": "g7iE9ksxJan7kW9ZqBevLwnXzFvBKVsCUaRFPxo6yjVjp6PfkLJ4FjHAy3ZaXZU7GvDYNMAtcsRmizenX357EY2",
  "key13": "JxJoT3hiwkqB1W5caEmnSGi7SHeSXpkpoPfLimRaWr6AF2TdCHC7p66Vxxk1SdCPWuTpUdrZn6CaUtTD1g8mJoX",
  "key14": "4Wnw8NJDoihcYjwHmrnSsYWnmzBk1SLj9b1KnNMQv376TrJBqfS8RjH58obWc18L7ErtXPcrQ5UiiyHi8QJvibCw",
  "key15": "21rZT9dNMmpHe1a4ZKoHxEC3gCqa2ANeAG6xVKTUZYB4yQwVTEi9Yjv5RRsSvSgtX4dDyzMpCyVA1Hsi7KnkoHhg",
  "key16": "2G47M9LcvvBzK5em5c8xEMiarm2gib6fio1ieXfsrgrohqLTa7ngpXnviyHBU3VQG1YfPjuw7MemqsRsNrPJW7Qb",
  "key17": "2Ck7K8PNwNZv9FoPnEWZ2uAM8JH8xaNxuPLDCNu6xPg4iLPxc3PLLfNHoFhb1NSEg5scADmxirt7n7ZqKnLt5yRk",
  "key18": "3EgQTs4FiVWxMtUdgeA6HpTfMpALaz988TczihuhiZRZ7Fd5wUoFw4XYaacQmmWAP7mwEfVj6PUdQaeYBgQfn2pb",
  "key19": "64MHtQY3NegB4PwmzA1vPT5hUXxDbGYLrssnPCWQ8xUVspEnTUsohNJgbBMMCLFkDHpASMFPoe9DpFYKYLz27Xaz",
  "key20": "4ELe8bmn4uaLeV3NZFsp8GfjnEG6v4YqkWnUn4GvoaU2vzkmsqoheuvrBYzLF8dP1jp1SqBC5J2DkYvMCSNHxFbn",
  "key21": "2U7HDGmGpZd2J4UzAvs9iqq8mApsp2eeomEuJ3W5rgVmkj76aeJJJ6nvWqnyuhcsj4Dt4egnENDEbhgWGiSm87oN",
  "key22": "2CEkcQ5zZU2YWEwQHe2pTJdFSQ6ywcoxqa4Qw9g2eW4sX5s5BXfkGeTN57LsNp45AxFdbQRyAqsyVFac2TQm27Fu",
  "key23": "5FHuoSdEunBqbkksCH32iJ8Tsygqo6JCYuAkNMYS9i5wmWxfm1Bfx25HhMaAH6ozQQiBFU5cR3oy5Bqv7yp99WoX",
  "key24": "3Y91PqCv1Dsj7UAUu9uBBmsvv6fFxNfHVbixUBroftcxxL86swhwf2pWBJnRXsyaJtGKMRWj5yD7K1QpogQyrybg",
  "key25": "216bdPKCFLKp4tMfJvi4pV5LFiXHwFuh3Q8drR3vbUnzcgUe4LSJCA4CvafuJVwKdeDXpVDCFP5vSPYYuX98dcHg",
  "key26": "26weCzbXMjcXRzWTznbGg8jxn4bJ8YaUNNcuudmKzcF1YZrS6kmcgkebXmhMEv6uLfiEctqksTFik1ptsgvUd3bo",
  "key27": "3MKWHUHFWEV87tC9ixxWB7dKqwdgUKVu6uow7CKqd2PhXCQtDfFVztjDUNjpfbVHT4rEHD4XPNxQDGyicq7GaQ2C",
  "key28": "QTzUb4QbTx515WxSYhnumVSp4Qa4ShFStKJCFWDkrBdHnC7o4xPunmYo7vTfjm9hQ9GLfcAN8Pdds2rx7jZEecx",
  "key29": "4KAh8s5MAZVMHerXnqZdNNdrPp5N6kcdThQvJrrZpY4Uvkdtd93SbK3T9V3gUaREecukZmzLVQzKKcnxM9SezCx3",
  "key30": "3cZNn1oXitER43yyJ63GPbmok4FDMFKRKuFCap4tu5fmwrxSLAo42ds9soA1T5hUgn7LM2MZtwkzsrkpVMpeFnvR",
  "key31": "VDDEaTg3XR2FdWsFHL8LJi6cz66uY4xzBSsxAUzCZXemBurBCvASmf9td2qYfCbiAJqdu7mqkFzAYRActKhbnxp",
  "key32": "5iLTyue3FFc1LJEHWpFzHZKWNeZrBsFQmTxcBMprPZUzegYrUnUNRKBk3zZYRySAnis6S2r3EvxKg9yqb1xbynf",
  "key33": "4EL6VA99W7EL8XX8A7JH9BEE5C6S34zYLVuv8tHQ6oNpKoLFBPVNusqyE34ZcD27AyY2gS5BFTEzGF5M7zcLt6g4",
  "key34": "2bqW4VbpKRHoinkSxausdXXqBrick2EtEbBQHN2Sw5DUY1cZgC5PegpJRGnEHP3HrnXbBGrNe38mmRvBm1UPerUz",
  "key35": "5SNemYqbmhUxp4gVJybnR1fAiFQEnbs5phVDPVdqKv5sCxJc17zZsYKftqRdQkMyBxzxaS22qx3VJATDv8Qvis3f",
  "key36": "4uS7Ab9QLpiUXWqJTJRLZX8yUxySGJVQCU9TRqZPPfPivps7xvTDAojz4KwowkJz3vGny3BK2EtYgNFheNu5oogD",
  "key37": "3ijZqB3fzdKVYKBDvJK3XRuT2UToX5fiYy7haem7kSFWjTWgQMyjxBGcacN1UWVmXje1R9eBtowN6gZr4Ad3PiNR"
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
