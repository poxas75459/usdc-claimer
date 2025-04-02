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
    "5WBGpWK8EBBxLSMHSj4FdWwzrjJsKoNY4HsdhEWKoh9BjjurTfTuJtVAVAhubk3oyHKsxXj6njsp3d4cmdRa7LRx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zbH1iSXUWskY19Hmw1Ap2kHS1Hz1aM82XRzPvDuc1UXXang98nrSdSbfs5F9X4bcea9oL9uiChVNGm6oEGFWsKm",
  "key1": "34wLCxpa61fxTBQ5q3oY2cfR4XmE9QDtq4H9e2F6Q96bSJfp9pRBdgmy1dE5EXNkeznmSGHuud5g1fyLXwkXQGJN",
  "key2": "57w5BTues1ETYD6cAVNceRGmxCemdtxNebbAnm6EHEjCpHxsrS5uxBs3nyJLnMe1mSTVymQwP6Mzt7p9WjsAT7ko",
  "key3": "UE2gN3xUw1NWZws1aLjQuZ6j8ktoKfRYiwCmrsdHmZQTbMvmBiwYnTW1s58e9dgqsaJvNPzFhQbLE2ujZuxbnkp",
  "key4": "2V8EVEG3mxtys9sbCm1s7aK9mZKGGzUM1CvQz5d1y4AGGpzkHgcUyzYWTAmY25iY9xSrCa5ceKA7XdvVYRQ5LabR",
  "key5": "sSowrJAyFqjYuV3jgneN4b49DGuzeB1L86EwvoLM1u2nyXttnWJ3ojpahXF7XW2inWwxDjj6drHc1iQ5tHvqMbU",
  "key6": "2ddtkSkUB85i5SaPHFNTMPuDRJtySPCKTSgMm71uMRvKM9LXuegMfbmVmGRvVD69rC5Fgrkh5GFHUuDRfH4QiuEe",
  "key7": "FeKCpXm3kVG94VuX4UN7XN8PFkvpVZWcjkq23mwmXpE33KVq5AxWaWp56Dv2mBVvgXrCDwSrnUTGQQcC7kJEf3e",
  "key8": "23T7BsvFgMyieZbiG8TxvtDGCPV4jWa1ih7vP7HD4DKtBrn43tVV9c4paXwrC3XvtuiTynG8CMEedyN7hjmhnZKY",
  "key9": "5Cn88JfDTpP6FvCgaNd2QNbaEFfEBCCMP1619w7NA53UX86jfeABPy8ywdvUhZs2goB4gk8oVJWnFFX7tm7LGm4F",
  "key10": "29FjR3ZaxFkp3fxEBiU4hVLWXQi1vnVQLg4m1G8sprfLpNRzomvzmbaFWarwYmUh6ZMtSsSepm3YV8GwRFEFxTxJ",
  "key11": "32aqC5K1TsBSQxaa7tEbKec3XRteVLXJdRo87jf29jojuwKdpcmSG3KyW1s9QCiRzMvvQULngFm4jzEqsbyoMrVK",
  "key12": "2goccPTypSRUaZZnN4CmCFX2DZLZH2EvFa5Bm8zE8nPj2nXpMcEsyKaVa5QW8GxYMaAkcosrJDc3d97HY6q6LWHK",
  "key13": "5hXzWQGieiNFiUvtTY3PHyeJqr6dDQNK32ucXUNGRjBUzTVVUGEdKP9UqU1dVDRuBeiS9t8udHGeQCoQEmTbqTrG",
  "key14": "47ZiDuBGkf7deSELHS3SbhEWPggWZYAEjimu4i6Xrjf5YUZxfWc2g8umcATzd6CLAsp1SXbu1kVPbwQcbsgkySWh",
  "key15": "dfv9uVD2royoFeP99jqy4cr7pidW92rRAzQt8puPkjHvvutWS6DSCshSqCnEzjJq9pfHuWyTKz95F5vzf46g4dd",
  "key16": "2QfqnM4Jge6QHQyAGWE3UdkFYbLvHeNj2gCvxXYzHjFivD4JmrWh97HzGBZtfW8gSVhokRXT7wmVzWLRxbsgHQKj",
  "key17": "56BogLwbxaLqA596i47xGANHEaRyaQghU5jm4PioTL9qDo3xBqMfenxJ4CzcwTTP1ipT4CtXo9wKJjKq1g5r8521",
  "key18": "E7XJcJJrg4k348D4Q6NuubtsuthQm7nS4cQ63zH8NeQpKhBuu5XX83tmdokp7d8ASpAYwbvUf3iMudUDas3Sk6p",
  "key19": "2G6h3GsRs855p5ZmFv76z5twrh5YH4pMZXNmfPmtyym4YiP4NsLuKNh2TPacW9qZMH8PRAHvHV7Q9erz6JP1KiB1",
  "key20": "368vwk13vrTNxzGMq2dAdqLs6RMTz2v5Vw5XA7o1LRpXmqBhspNqoTen9kcMcciVoPp6Vk49C4Je7FvpBGXWPzSk",
  "key21": "5EY65LMgi7jjLkBng2bsDmDHqNtdgXDV416vekk2m5Q1xjKjQAaRifcGhzCHmNmhmCYkmCUaaLaVh3xFyoAdL7Vz",
  "key22": "XHF5hg15aFf7HB3BrAwHmr1M52JoD5r5jQZuRvhQ1ioT5mdcuptyvc2DwoZYaqsmwbxfL4WKvRdQesrRgrmFhiU",
  "key23": "RMGLWu1tut6mRHf8yUTH74zPryREU2Ny42YG84RzKAQWJJUaasgGL9WTGEGMyuatTiwaMo4NY2YF2nmccsFDXTK",
  "key24": "4am8QEiT6w4F8Uf4FgBMKwQ7K96ZeG1kD2TrcmaYUT7ZrHR6GBeFVcL2y357PcfmxLJm2zvEbAmZ5c3L57sms5Ms",
  "key25": "V3ECCNtQpfJimVtcRjEoRSggn6R1UraQ5EZxgHoyjnkeQUnyp75AioxkuqEMmZ5WpL5w3UBuggRKGaiYvp2Vkaz",
  "key26": "5jTNJq5nttB2uGEM6gdwjpXmVzb4HC5P33bBRBxpxnqKNHCc8XL23GRYnFkf1tw4AAU1Px4qMz1JfxM484EKVBoe",
  "key27": "3j7ijsix1Aa82JmF2Biw9suur3JCNx2rgEQtSLDGa8359JXRVJ3Z52WxjMGEovR9LyFmMfXE3iWVMJy9hW3o8URM",
  "key28": "JBQADLj6tAB69nHuLnndDrsoFN4r5YEGbcGViFSTTsZqZvWGrQqNWUMwoPpdyAcvhcw6HR8tE5JgLxadNaDBf2R"
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
