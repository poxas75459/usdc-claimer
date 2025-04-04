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
    "3KyywnLVSoZ6rzNwDXfPLXx4siU4j6cDELVT2adxYytN1R6sKSFkD8benPhjwoBANMDBt56qX7wsjB4WjNJpSpq9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MtDe7h6iywNjDo97erHAP97mKHvw2Vv9fMsEwiDRp2ALbUiGujvz4WPBwa1J32bUCwG7JmAnuCtf5rFDnnYD7Xa",
  "key1": "eG2PDhqqgRAXT76AwKNr6SxtY9WYuCriKZLE1Xccux6YqaxyW3BjKe9Yf46p8894z2RBckBZKxSPYnX5eQtnCGv",
  "key2": "2c7zqCfw6FWoMmbjGzX4ENh9B6YA95tisk889WktUYigJkFeqj2rC27JxNrjVsmoD61JEQcq7Ef9mByr4EpKQQ1b",
  "key3": "3hWguZ5Ue2ZfmEGnWuUg1br7q2GKWy2BQyKUSfmbzyoTxjyXPC9KMocdQQJazoZ59qTgWeKJruzVT6wjdeGYNtLc",
  "key4": "s2u5WKZ7ro64dYSFJ2xSi76n6cuH9FQrsxvJctHvgofXTDnHco1KZVPpPGM7Bj6SayxPNrJDxUTosLZsXUXU6co",
  "key5": "2uRdfBhR23W9fnwhR6NTh45TLmHcKrJqv6BFTsr4AdjDNdFEg3bwhPQQRvMxyMbB742HUV7vSktUwjsNzwujMvpB",
  "key6": "4gfRxbYETboVtpamQGFQ2DpCSPGnDvgv5P7Dzhtv5zeiyFgd5jVNeFSzRvhz11oSQ5E8tYwo7ZactEfPs3EDAuKM",
  "key7": "4NN7Q3cqbmw3Af8KmquM7GvF41CQfADXd9SGVhRf1VyqfvK4p7s1S8gyQC915jtoh5Z9wBeT1wcbTH3vGTvXWLnv",
  "key8": "5d65no3ZqXPTUwQGEgEWpDVbJ4zUvvRuRG1urYPd9Wi44DKxw6ZnHJH3Ph444c4kG8s1mYgmspiG8X8MHq9mWn8u",
  "key9": "5RjHojjQ3pM28oYG2U2rcfnrRQFKBYZkxsPYQMGZupFnMJPWzNFmtKdEYJzt15w3ne2gULk9U6W8HAnUfRs457rY",
  "key10": "4L7xYohb7KCeayj81oR98N71GwMgUqN9Qk96KeMRsUwawEvR5B4wmAZmY64DLYo23mN55zY6nbbb2rhFXdebSMHA",
  "key11": "p83dpk7spZihwJ5beCES9cpgxomtubbmDD6c8V5z5KHs2RntbhGNfpFZtoCFc8jUoTzxwRAWJT7oHDYr25Appj6",
  "key12": "2VtcbBZnbURihcGBBdqseJoUKLP8vk6wXYfmaewLAVGdMA7zkW2tKXfJz2Ei21DzwLfKZZ8wvHyDbwyfsN1tB1Du",
  "key13": "nDD8bGTEZ5Vfzg1tKkgdgWkLty8r6p6ouZbPD2i7Hwopdy3cNndZ8soGgtZfGf2wLvsJ5R1FfDdhHWu54xZHeCC",
  "key14": "45oMCy83wtADxCd8JchiTEWghyxnzCCzKqhKy5DYVZATu9DnSqms6nPcMgD2GeN45oxCaqVenh9rpxjEQU24dVMk",
  "key15": "5RxX3GJ4nPcuFiY62eRKEHUrzRGEvmAPdunUanz8djQs57tKqWvUEh8MDr8VRjjMDBkdPhbG9Uuqwq6XQ5uQGfxZ",
  "key16": "2ZkfUQMkacg3yBGqragUhUgieUp9YkFjdd57RCsojyaEW2ibAfY4DVysC6G3R2wmbN4iueALrw8XZN7zCZtzjz3L",
  "key17": "5B9hjC5xavRxHwiztmqBjjBpiDTTqLtxrrN29uGh7n1U1HkpELugYnyNTDPfsN3kWhNCtFfMjeeEnNFwtuD4A4p2",
  "key18": "3NUCKr3Lh69rCFkhqm5nCsoVkYhmfbXxh9kPHdWfX2H2kPHRUsz6koC586GjexDaYpq7oEw4UwtQj1HqBNdwPt48",
  "key19": "2MTfP7ko4bmkMnvsjycw6KtPVFEnK7NPfCwh1Q57ep8x5d5sU6D3no2GF6qLJXnfnRAf6qV6ZAhxLYadbwuigXcQ",
  "key20": "4erBe39Sj57QQXskdkw9DD1MyYXYhSdfstEBgKuvtd1J1eG3m5DK9xtBKmMSuCZR5brnkAgCSRr1vzmh3Znmjji",
  "key21": "2vR574KJwL1TUUywv9zgJdKSu2UDn7c9nQq74ysP5stbAzgga9PYknqGh7YSgF2nZdEPNcduuu6929r7MTZLpNmW",
  "key22": "JW8ffunX1x2zKouVcWJqbz7awaJQTDGDR7kr6uVExroKM1MywYJt1g2djuzVEXntWMzT5UhWoD2BLWoDtNBSZ5x",
  "key23": "429zakKDxmEWkq9KGn7gtyE85fBpbCwqmFd7CX2Rug6iFBgbBeeStMtWXVWxPSy8u1fAXr7tJnPN7iATyPAM713a",
  "key24": "xDq3M5cQXMPKp5XEEWCs2HMvk8oEzuFQiapMGfKCU3WYk7VxEh2dzBMaMffhKUeTGyoKLSB5Rih8MFhW2LUN6Yy",
  "key25": "2A6ACeKPrkafkywZvnXxvtXv4HXmwL2DKds5cCMijP2M9B8uTB1mDQTcBJ8gwJp2BLD2GDBHjKvDsS678atqENZg",
  "key26": "2dZUGVstDULF7QgkVDvnVGwE98Vd5uv3n2mEHbntFjs2nxQvfz6KpdfXLjNbrjvHGakKjTYJUMzEG9GvaTSisyaj",
  "key27": "25vJZWgRDeQGSf6asx5suBsZh84EUZKw9p3d2JskmdH2HZFGEThuhs38P2ukJqTWhhdhznHHfZJN2o4acCrhQgmW",
  "key28": "BtfkgBVp1WN73AyyCyWUsbMyNv2dCQquLweDHb6VTf5n89cKVSEyV9jokvUW6e58eb9vYtaDPWHorj18xfnGMpN",
  "key29": "3v74stBRH1wAokCNc3KEz5Z1Wx45ry7euupcEuiFzNsPGnQjii4cj3MStcHph1Pg8fhVU8SPuzYvuEbRwjXBRSeQ",
  "key30": "3XYQ4bb4FPC1jnXsDDAb3qwKdCF9iLXCLEdb29P6B9hVF35nEQEcgzFfe4EJwiR3kXf144ZbdaA2QzxNrh1dLVkF",
  "key31": "3U3Hgr6aFtHKmrh3mjEB5ma8Vt9Erw9Nso1Nhb5Ju5oMgt5G71JUGNyjk8r5qN47awgV1fgMskFqDkMsmiCdwH1Q",
  "key32": "3ZZw629J1LdAG8vc6Dqd6A7NxBWMrn15smDeCni6XJ77mtcY7PcAJPsJb2A8uihHvzkgyhznbhoUtx3gmNu1Zwdp",
  "key33": "5kzbirRaGDD5DaiYg7EajsxssijEEU2VidrFT5tSQMuA4ZsWBf8qewnYkqchbd3Yb25qT6QrwfqoRkab7NtReG87",
  "key34": "2XX3GV2NRyMfg4DfhHsrhNrBnf3nuhPeG2ykXWt9n841Q2hM2g7HyVtaAjQXTEgLCafGgvvZJhe6TTvrvP17gFUL",
  "key35": "2yf7tvhNwz5N3tnfNpZ6pk1H2kgU1evxD79jkUnu3P1inZpX7o616cLipRWFc2P5qeFY8mfhV7jNvnAAc4gRiNip",
  "key36": "6bgA3zcYSsRNKpcHYCLF22gdD6jPk648hLETJLug6pqB3kGdENgNSGdWieuH9HVxwei9UVeRLBjCsdxdoGtejBd",
  "key37": "4hfD3CGbeKSENWREu8vCQFCLv4wiknLMfCrin4fht9Zr3b8grJGAwscZCJALPDjm1ag7rjqTpiFAjCAjanBXm5uh",
  "key38": "61smxkp5s8yufeJt4sHWAzA4wmFdHiHTibmRS39rGzaLB48A9pYDiNEHw2THAi2xUUPrFoNR2EWv1Tq3HB2VG7Ya"
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
