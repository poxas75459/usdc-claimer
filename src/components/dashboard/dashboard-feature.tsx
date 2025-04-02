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
    "4PwsMcMCP2t6DXWbK4eKakWErV2wA1v6FyDdS9bDeRnBwKo3fMUQXEA9VokwbjwSR1u2VmGH6eCvhPCk5NS7bQ1v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AhmQxKgGVuKThkiVfGMLDySEY8MkrsnE2Wp9r1BQV1ebAqWwbUMugcNUPkD13u6eesJChwXtLWnCPgtZt5VcH4o",
  "key1": "5H5kemY7Knu8HqLFSqc36gLz4DppiZH9aufCYo5CAKXshRgEE5iAbvsvmMa1mp25cqnw8QgDTzLgWivdCHhU1aYe",
  "key2": "mReWNUghon7M24mcmusaohzPpBuAZTBG5ygX7WKRL6uHkmGayq6xXv9rQzmvBQfnKwbvRUPbDUe21dVqBSbryMP",
  "key3": "3Yaoow6514ocSEpCqAPCkSYrJ7vjWyZi9pKSjVN4fGqJzrYQZkdkuh3PixtwyGz3YoDxhaJVj7DXdi8gimq3XCjJ",
  "key4": "656WKF4jJyeupRaJjDeXZ4y5bw13KbTsMLocHSMf8BRtJqKGdkHCZsncnWgiiEAMgUgWXT6Tnh5WX2T1V4rRF8ta",
  "key5": "fQmh99pCcu969kCw8c9kCppBjznDHMdNzPEjXAqr7dUKGCeDm4jUb3UUKpttGJfqc8y2BYRci6yYuZyREa3Ys1R",
  "key6": "5ZWiyusj1Yon6sXcUVo5CfzwWrPbgz5szMKaHMyqeGCVAssvBSXZhS9f9vqbK2JEAi7m74KXWvR4V3MfmRUa9qTP",
  "key7": "5QqxhVv47iyA9fw2WiTuw59cehpNgH8dUMi7sNboPxokeq1tPuTASqwowBj9XDrt8ycg7ZHaCYPaLErBFPJPZUqs",
  "key8": "2HZaFRWw5CBU5PSTBjEr5sScwCkuXt5pBWbK17yzWsbCNSKfag5NnFqPQR3R3bNEVVVHs9u6mn9SBSAuFMRUk7nM",
  "key9": "gab42KanNcCSvukcKmyri1R8PXyRMKQazh2jCvNSRJ4TCVD6Fo7viXbKnUD26oEp1N2oJbCGXHXDbMjVuj826Fq",
  "key10": "24xnDZ1pZTT2xiuniNgpfVNqDvta1EmhZmiwCXmum6c19US9XPCBVhimHw15FaSDrvB5ndvKqkUGddeCNy5xNx8h",
  "key11": "vxiqSq3w6bGGjYsssSjAKFhfMsYym8jhMUHh8agFpsZ3kxbgqC3N9xeR2MpEvTsX5Q58fk7YsYDusS25HFSGLnD",
  "key12": "8HfyM9XnUSgW3ZmwWoDx2JnXazBMu9XxMfWoKJWMEDdd2VdN5xmZqEWV8PsxQ7LwAfcPvZFM4qcpmtR4NbVRJP7",
  "key13": "5Gcze9Rhkbs9pSVtaDusNsMkATe5sgaQNhBP84p7u82yHgqaGDHBYrqwnd2Qikr6k8u3epLd4WnMCqvX8XeRcn4z",
  "key14": "5N8cuDdgAXhGxW49bKMrwy3LV9hnouUwYvetX7jFVLw8EWWqaAGMcytZf2LGVMWRjf4dxp8Lr5MpNus5KEEJWvia",
  "key15": "VzaWw3WPN5QomLNMfH8FrTwmKZPG4H2sLz7QtPtQJFiigjozfk9DmPXH4KnnRVro9PCL5qB56ENd43pZ5WFuDKr",
  "key16": "5gT22eqofFYi8MWe5NbFGJG5Ps4Fpas5ZAvmUMQHBiBZ3RRZbpos8FohEqVyz8xGGPcN5VqUXxGAttZdoAhdTYtd",
  "key17": "5DHoR6ZMi5SFhPG1ibsjYX1micxJLF6huRpMFWc1dYUMiC2NFVGbBZXsM7gdACn4RvW6K6ouJ4AAMJPHAbnw7j1D",
  "key18": "5eSGDLQjCb4UyXUsnEJso2pDE6UVz6AtEAqEJi6qDVL3yUxW4unogN5cXTx7hWjz7Yfj6vJTmTNYpC1WpD5pAgSU",
  "key19": "qnQFeHSVq2RJqjqccNNATZxA9tfPrNJQEL9jDRGNvSgWKthZekwqb27DBvu28qHqaWcJmLvvmMCG1NBXCy8sDjF",
  "key20": "3FpSdzN2dd4w5VdQgUQcvmFoDeiAfa9JKwXTfiRSjLrc9p2e1MLWHZdEfCrSDNAgYnDKQxY4xPKfiWpL9qrfWiB8",
  "key21": "5aX3J5K6AYR9XYNZWJMm6ZnSdqZgMjjcgNrsL9jbmSAcGaNBC7ukmn8Se6ymc85HqtjSCsfNhLDhfSAM27HAtv8k",
  "key22": "2b5SXivvtCC6Duu3DCYhaUia32JcP2j4xFByZZu51AyvNNJugX5RMrL8DpciuEwMZm6VWXvh2GoH6Jt65tiR8AGD",
  "key23": "AX8e2HrKFptC4eMYA2TN411mUUrinuZ3zEyWJMSSdPmTHT1uR1afex39xWdutwJmdFqvZxxJuBrXtSKvzLEMEic",
  "key24": "2GGkvfTQtqEcdRWQ9vADunmXwfHdmSToAyES9RVgACqwnLfsJVPKhtTXWfc3daDACm6oYpaM9MBcBZZ9Hw6XMR6X",
  "key25": "37o2YPkXuviXqW4YcWPbStDJRAY95sA1F3UbqaSQHmDCMHv4eyaEGJdMkbH8H7qYLU9gCHyfhbJw9Ztvc891MgV6",
  "key26": "5poxzgDXMyNx2JnBH2qBH8TJcQAVGbt8CkmbkqC6wAKa6C2dtSgngLoyz7X8bTQKnuaN1L8i2rbMHemakZukzdtg",
  "key27": "67DuQkrvwZFMz9y9ZrX9a5YJNbQrLTsTjy6vPV4fQJWshbG6WRfqRKDawGVrLaXF4rE53itsa5kMStvBSk3oxqc8",
  "key28": "4jw5ZRJWA57uxRB3vDdtTnVBRWBgJnd291SF1wwKHEptewSCnxvY44xHPVVtHkpdyGd53nJvMZzPSFURjwcNttxB",
  "key29": "TgoJRHDmJXHGz1DnH1JS4rKoGWxNpWvxkc6UabMGZXLFnxa6RRYw91WLMU7RTRX1Q35mnpaVkYrc5PyNTphES1W",
  "key30": "3EjkhFXWyBeQaUtduEBAfuyGiWzS34RfZgAxJpVsjjwjF8SJZ3Hd9p888jaxr5yvHwAvBNepNRzKpPST8oqhtD5L",
  "key31": "KUKNXkebsQsNn4yJkN1yhcfEa27XdeWFg87J1GLuqRFHiGSDaVGZLEAVoB7GcoGyt8SQmLjhWkoErxaNFB2njYf",
  "key32": "5mk4LZvU6zq6rT2bodmAbSZTXJLcYfw72pYfV7ykAvu5Tzh3FrwTUNGx2CYyD1gCY1YGkv9W2FAdNCBssmuxBN8Q",
  "key33": "4LehLFomzaZNGxtRF2yUetpqRy66yfNEL1K7tCyXLDYU3YgvSepaQ9jNY5YAgb4aPqfnJBVU2hN9iCrJNW1N77xL",
  "key34": "3SNSULMzkbB4R3PYcX8hgw9Kg1YtdEtQE1TU5QptutMBjqganiETVTwcbxZjjmeBtVL4DkKd17VKWgrjoJw22MPU",
  "key35": "4jSimeoPtTQo6sZVh6zbhF6MKLCcK8DVmeZXi8MuVHT6PiN6jS1kzbnGViNkDZT5wzyTvMXk5k871xZbwBybxFNG",
  "key36": "SAom9F83SaLBgpCcotE744sVvnapcb7GDYSZC1PToXkpr4hQQLnPMWE1sPJm8gwt8azDv6tUeWneoEeyBjDvZJ4",
  "key37": "5Bf93GbQAw8EdATfWUs9Q9xiNyLLS7KFbTNr3683862P1KRjkGHUnJdq5PEsybnr3knWUtsuQztkhrDGPwEvhZhy",
  "key38": "2jFAN1MuWReEGWnq3T9YN6HkL3ab4BHgcz2vhzks6xJ8nbGZBtAqh4kbE3qjivbKASedVEZmZyuif2QywCNAB7Jv",
  "key39": "nW8Ji7e4sQMD7UrvHiREaMXTgt9mM2ofVeX2iMjw86Z1YkdnP51n3xVUUQv11LkGymSXEpinJhqgRdJvqVThgsX",
  "key40": "215dqQbpbWwUSuLHxAz5SrGy6qtqe47gK2avG5hhLzAkgWYwzSkBPw3D14Roq6FS7UiooG4GJ8Cb9GkcTTxKmtv8",
  "key41": "HWYWojELSFAXeh4G6piakD9eMov17ZQt21xxWbh8fh9TRwAmRTAb2ugHdp3uB7MijmVnv3y9zmsbgnCELq9kqxg",
  "key42": "3E1nPbU4LzA21Y7JWSvUSGaeTggHSHeSBNBwLzaiDGUj3EGwfXfULY1Z8EUKKfHtuPPN4D4izBxhsuXgCqz1CfqL",
  "key43": "3Jd62UwWzXbMJJ1r7rurDiHcTgeHkNMFwhKTkSge8vi27fjroCULp21uZ1UqbKAyhdrb4a1gEvvgAdELp8VrHoUN"
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
