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
    "3S3yrZV5pudsNCPvBLnRDv47jivhW589ovq22kEGRva1mH3kxzRxzv7rnGCJCauvkwjc7Nm3Y3FVjo9tpPydwWyu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TYFWEnXBtYe4vsntkLvt5uNE4K2CyzD4zx6Tmvq5EuuCaEcaab1qq67ifTEHp9PFR7tSJD6XqAfAMVRajpncpWa",
  "key1": "2xvu5naLuxAfcyz5SK5nUQ6HBsKvkDz9zT5T8RmxC87nXD8NXgP12VqqjgAGW2hMNaxQzk2FHsMc7mUqeky83qYZ",
  "key2": "ZaXsMSxfqBwgyuaniMY73RTmdaG3SohCLBGxoDa6gvs4xC9819jhWgKXBkjbnHLx49PPD2eNHuQ3WDa8qAjshZf",
  "key3": "4eVnouucogKCGMyEW3PqTgFiAFmUYntzLMXqb3H3qzQrD527mKN9sNc2AajX5f6CFtTBPckJ41KNq5Ui4rEP8Nhf",
  "key4": "RFoZt2H2kSrskV1YMEVaPUtQeTrrE3dUQz9S23MBAegfNtaFccThvPhLqoSXG2mhCtqDR2xb5Z74VcoeDwkve6Q",
  "key5": "4ZDUFdCXdTQgjTv3jpwft6MnXeb3fWYn3RaVE71ta9SexvFPGeHsAmTNQnsSf6ErSe7h4dQBt6i1aYRaght3zXVf",
  "key6": "37s642szmhVBAiLNkn2NcuRyu17mxpdHVQF1TUtZ7Dj83MPruqi6fmrX9xTyNLYUjR2JsEYtURAXr5BHDU2nzifG",
  "key7": "4V97mRSmj82zz6niRtW6CcnM6gcFXoYKh3ix8WvmuDZGZg8xm1YVEtDAzjbnU4N5xBPiJoHxNekvb8X696rBvb8M",
  "key8": "s7X5Bjefro9cwxz2rnWiNanBtXLUYQ45ZrbfB9L9MyLNnLNGuPnZgRxWZFY6QoyyMSdyguV23ZwwYG3cKti4oXU",
  "key9": "5asGNwFymdbAyTX9AwYg42kMG33uE6p4d4EYdNseHPUq1rC2kaajtfYScXRNVhdQwofwT2G9HqDyFbED5d3o7G3V",
  "key10": "qNEhNHmrUpDmAGP3nzjVAcNLpm5qiZntVLGyrqdMVw5uFgddikYfFL1BwRgxp1krjqv5SN4FbeDwBdM1jFF4J5U",
  "key11": "5Dh4qBYwLio9oqQyZQJW8bns5WbCmcDvds8ce8LvDFoWKBheD7W7zcqQ3yce9R2S1Fu4RxcK4eK3x21nJNt5AbPH",
  "key12": "9r7CXwRLLRo224VQUnTXEP8XmuWjP1Mw4E1Wy6T3kfDhKUPREfjGWqwT2ua9MxTrjAGcZ5PXwo6Q2Z52iiwc9B7",
  "key13": "3AAjHFcCyTE5DeydA82gFGLDeCSCJSYDWyto6t931iuvAGDq21Rw3kwZeq1ikfCVpiMLpccXpPpbQiEGXFm2zugA",
  "key14": "62PyVG1VSd1eqdAdHCwSL4qC1gniFkU7CPtL9Kox3GCoDkNmua4SFF169EtTFaKrzY5i1YDJsc7UmdAT2H4tXAZA",
  "key15": "4R9DYmFUargQFUK4ouPUcPJppGTpVi9JEwyofTD3Uwa5NhBe9gcMG12qGyFU9yoNWVrMTPRADC6BSUws5Vw7AAzr",
  "key16": "5Ks1tTHqBvhrhPDbsu7wu1F8RtThBRbr4M4WpQ1aQ3AYnDhBcgJ9RBBqW9pvdqLT2h2Zek22RfHoYJeto8kgFVgF",
  "key17": "FchYVEFiMwhQmU9E3QKkremvAyYxJny2TM5MRARb3zYB4tWx1Fi1XPLix2NSdMaBmjDy2mErp66WPWh9vBcJrtQ",
  "key18": "27Z5zfcjq4xwarJoS4TxuxYKqmxeZP1Y9gXL7Zo9YRE36bs32ZUyKtVAqQTb1DHXNCYkvC5ZcSneBtzNrXeFTiC9",
  "key19": "2RvXUM9Htx7qAdbMh2sqAoSUu7iCtrLr7AEWPFUybvm3m5v8bHhiPPRj4qg7sorTXk3F6gBhZRzhpNN3CEbP4Nnx",
  "key20": "314ZW92iwzSCpimsEqJbPwQBntvW8eYk1d7ENSTgwJLQgktRSo2BLwNuVkLKNKB74fN7kAf9egsK4SuGuDo9KJ5Q",
  "key21": "T9U1gwfrCAaoeYM7gSRxSRfVWRmK45jhtpnQ9eU1aMWrsFzFfC2Rzrdwwen1cBvMF8fXBEBCKJcLab7A9CW7Gwd",
  "key22": "R3HbjXsc4DcJfwjWbJbej57Zh2JVaqWLoB6U5ATtAesV3GiBTRdgqfMFHVyXXcAsfwH8wUayyih1mUHb5nLwiUo",
  "key23": "3qdavs1gW6Uh5DpLqauvSuUp9VVgoucHqYhTYFzJc8KcprFyCb4bL3SB1UbfjcrojNkVAsdCQW62wKCgTP8fk2d7",
  "key24": "3jY4PCnjACWQ8ArL9aLoMBiy6WnyvN7k3qBMBQN4hpMkYh92sbs94xAzWF8XmKvTGp6mQzDwFE9A115LLwBmuZAV",
  "key25": "5KVE4e63DneoUC4VdjPFt2FUmS4nncDru8NqDJeEiqehVtnqQ6Etz6o2hGRjaDfuYRDRJPPPwutQ2WuNh2vUkWZf",
  "key26": "2YLpvMr1wva1FoEHb1mEbPHNiKgB9dY96GzujoU687j5R6zJbxr9Gk6TGmGnQZYprr5Wd9sAQ2LpnDd28o22k7Mh",
  "key27": "5uhojUaDyPZ6jqUMv3KGAPQaYjoBAUPP5c3HLjD3MSb3E9CLsmDxtPSx6MyLeBYh9oiUnXXNzAXSNoCTJpSsY4Gs",
  "key28": "NtqMkEoQMf2sktpURXaAhqKP5MK5qZpHUGMV7b9sc5ko33xE1gCCzJ4z4csBUh2ECFW3MVUu8xgLM2gkMHKwHUU",
  "key29": "2uxzubW5LQyrAB4L6HzcSKWAC4ZNN2ikTsQ8bc5ybwxtLwtBQaNPRTRtUMW3JVb56HknCiEWsH1KTiNSr4TadVW6",
  "key30": "3V3P531QjXqzdw3nhbHaqwvMs5qoNQJPUiKLg2LmBszArGfQJH1kyZPvXxhG6mD95QqcYUQy36QfKGH2SqwscJva",
  "key31": "63ftvGft3QFUtjL7GW2n2GeZGTbpZdgYbYtdPNaTxryDSbCYS6MxYVKeVY6VvVe5pBnc1RFfwLj628FnQUZ9oRd8",
  "key32": "2JJx1RoEFQ7m2qJ4HcyBVqhYFzDjGrUEkWJoQyF2EH3h4Z4ujXAR3jPcEH6UK8kwyrkHTWVSFDFVYgdnT9Fs25v",
  "key33": "5MiESwFxXHkHtr5YaKa7fLtWjPmdh6Ec7vXVhPtCDe88rk3AxmHzfVytf8zHJa6w8Ym64iiVg2kgBfTHq3A4zpTi",
  "key34": "5zeaX2KYNoip5cRHu95H4mLzpPvFKhv6d2mYrMupHPU475PQd3gGCoUEZCgahuj6JtH1ZV4qZpZkdhoBRqdiUhpU",
  "key35": "4JD6bV5vkALSSRK9puzVqK2C8tD1cvKdvH6t3CxA5bGY85oMx88Mcjp1denRhwrWykuwhkQdwt7SyvQFetNkQhs3",
  "key36": "4WLrduvjftPZaFpWFqXQYMLgHPLGy5a1irrjPgNVVY9NyAMXqk2DXigpYZBULEkh4mHk98LhdzoWeyyPd39V4GXS",
  "key37": "3CwnjdiwM6upQxqncKGnadEVEpkJUmMkF1GAgzGUzgkhzazuwdbRCWb1BCVypcQ1rD5ryK6Sfg6QUU7mVfNzjNDA",
  "key38": "2uG7Z8e1mkKeme5RFA877f7PDXtHZNVVK9TyNwh5rHX9WYdDaE1PiDCamYSntXaXjLMfJgejvRYKB4N1VVemkw67",
  "key39": "HaL7Rv2EFtwNX8ZR2y581Zed3tFmittVinas1LWK74Bs56erM58QdxyZuYdpcY16bjZisq5Fi4kjrqUcZSubdQ4"
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
