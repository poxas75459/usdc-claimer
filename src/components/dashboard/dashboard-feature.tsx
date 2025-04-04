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
    "4SWEHSoSWH1uBuizBKmTFgWePMzE7i1tJD8MrVdQGW5PbSSTso4BrjgdEKhgpixW3Q7E86wPs1vCpEw2YMaJUwpj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FBWF4T8gbLFN6TCM9jhwqR9sqdburdXFqZG24QS34ozsMCMhA9PqPcYmK5XCMRk7mWzPRyhn2YE3DQTT6XCDe5Z",
  "key1": "5xQcx3oCfC216Zpzdm6Y7zJQvKswaU6TFDxUjFPZp56DaL1YnZ4uajRYgu5cHwbr63qQiMr2CnLjmxbJrp8NQT28",
  "key2": "aTpnWjd1WJfNfKPCf1TvqCVL6owXxR83NSwFTFUFvJ5XPuUjsxN5VP9jTBNHNwKeAtz4EkvAEmctPQTo3EGGFe2",
  "key3": "2whHbfEpaJVgk9vvSPn22Unm3yNMexPt1yB2zxApmcAFErCUqVFkELxXqSGZf1E52zj9KKxnS8CxyGSdLuz5iuwy",
  "key4": "3RdTdxnj1UujL3CUJAyZRf24rs3iQ1XRiBPyG4NwzfhmFBL2EQdozeHEFaDBtXLZritAgZqbkcYe7qoRwZngYUYH",
  "key5": "28kZF4v8RcWyAmcsonUpP1d8fGQv4QnvbE6PaaZAF2MEAGjnqaojHp4799fPMdi16YoYiswUCDxKbtet6uGS2K4n",
  "key6": "oCxXegFwMZge26MQaKMSLmYP7YddxuvfGoKvnB4szQ4QoUHxoycP4K1TTmxkVQRpk3xzgGkvywdi1FptJMYLTM7",
  "key7": "57QHUPhpeftawTF5nNMTQtEWQwqoSF2NF1asxAJ8uPrKHmHEd4TApjSNbWdGbCxuJBTQ1rva3nPmfchE51mxPvbf",
  "key8": "3FX7v5ZQAUQwpkWkUEcmCPiKNMN3Yy5G4RssE6VYqHsPa3ytxZBxE54QcWDuSJizA9apnxQAf26UwKfTryGJr3VJ",
  "key9": "4fsELtVLLyvMtE4nZVmaJgGmkL7MumyCZNqd6fMVs5Yeqffu9FKefmmDWCQeNCebGEP26DqVH4ZFgPeQa2E45wMp",
  "key10": "2wpb5sP2r22V9W2EPRJiYcHHCGZdmu25WAvCTJYjdurh3N4AobPyaCXCygKUJR71BUhggqh1KH4H9HA4ESpSiFDZ",
  "key11": "2fKtkAXGe28EeBTkrUAcg4CNiSExPDUrh4dtDv7i8Gubrtm4yLTGyeiX1vTjR1fPQWvcmWC9ZcLJFmcT8M32Q7DF",
  "key12": "2k5QLBQRSVarqRzDMSLWuh2C6C6ZgbLkqxvrq2PML8nQi7hbNFvk7Y2LhH6sJMp2TXZk5akHcZ6e1wi6bA4hd8gy",
  "key13": "2b3SLmScH1MTCsrmAoTwdfzgrCZAHjZsk5zAAeChxTmDjGNXYeagQTV1rqYkBXPrqZo4PLe4NxTSjKLLafiCg4cM",
  "key14": "R8fxLMzbR5FUN7gahmo6hvrHAcZSH2RuTDdbzyoUCSFd92er4nexCk5ysgyMAhg3Nz2DPTLRK2PdgD977vmybgJ",
  "key15": "24u1xmwvvCGEFw9ZXz41bfuE2ARXBoyCcMVDYt8XAbaPv1Vgzyem9VbsLikW3oRLGRtiJNjJSGGjoR5sETVS248V",
  "key16": "61DS8aoiQdcHr7wNvP1xSrbwLKmcdDxLLszb7Z6FuxNCTesKiknk5GvfraCaW6pJSLs4yoBLB5jQQyWZjrANukfp",
  "key17": "3362dHit8VveXQoScTSRyHKCtU5WbC13WNnhhhz4gUHVEBBfoTZ4nfLcM4UcuhHmDFq2cDvJ72k6jQj3vuLeNX3s",
  "key18": "er92A69F3vkEL7WrzTkWnNrpmXq4dBvYwkyw72fFwSrXYNeR9hjfd4C2am4yTsYHd29xMDCYkbQZFjwpZvWru9c",
  "key19": "5WDgf3uV75PGvYng3TcayHPFYXrUmmXFm4FU7fFebRmoUnDSQkFjncK8NRmhWxqyyoxC5iQ7L1McKG9K6mhzzvWB",
  "key20": "4XJwrEWLFDANohYMbQTMvjr8GywvvKqYDwpYfbsPF2ggLCC33bUtAwajhNhamRgPPeEPWShZBrie8q1BPZ9idFGP",
  "key21": "28fGecLyiG2RJ7wgT11pqmN8hQKRVndUAyb6iMhDBzxda3FpD24nEjhbHBeeCHKE3Uur3t9zD2ZnpmaczBkUSRda",
  "key22": "2LuWCUU9wDabLpPeDTkpi87JXiZ7r1VAQRKCx1tTMr9eXL89LtMeg1KomWsUDUwANVPuCoewvTH3UKrgNLpbT8L",
  "key23": "48LFkUCpC7Rbkef1pf1ARFtUM2sy7gQXR6EZ3grgxBJtU99T6tgnF2XT59Tbs25T73jE6mWkY2gyZHVrG9L9djBA",
  "key24": "27WvF3iKchBJnewqSxf98JaQv7DnMLb8yogjKkBRbxHhTwrtbz1i53HLtv999WQCrVEKicjec5tFaV1SWrrNX55U",
  "key25": "ytqNUX3HXnCMxrvsYQDMevQE8vdNo7PfQowZNw6gBhrxkk3bV9fCPWc5tyDoX4ZF4bfA8Q5YxTa9bRT4SjUjYCb",
  "key26": "32dymeUbfSWA3aRxr6CgS1rfycKucK4zu6UciXqU9HYHPGa17hsfNJYmgnJEsL58HYaVzn7zzCFL94tvG83FYAx",
  "key27": "3SkbCwDFXmqHQCQJQXGAhnr2UmzmrezBt255niHbXwizo376jbiVqayfU4MHkzTXdCiUhFXX9JRskyjKuAnh1QKm",
  "key28": "kVtQM69nyVdmp4NanMDG71UWEKvrANvmpzqDpRbhG1SYhh5LcqhuvdrTTw3zdRULw4gcCDoD4abC8CsajJ4LeVw",
  "key29": "2bRb5y9fYYd1FuctWXLJzrdkVrSVf23pWTLqi4JmQySWt61ivAtSG3hqcHJZaZuAbM1jjSnsahSCz3WiJr8DqzD2",
  "key30": "2SFG9bGYLHuT1vskm1i599Eg6R7DQZ7tT8whGHhoQXarQVksm3Z1SeqUtDNhpEu3jrCDLPbrkmFgGzwLEtan7rfg",
  "key31": "5BU1jPP1sE28DJeXnKQG9gqNSteJ6tnzs3EEy5sEK7SCwf5Hd9eHtgVGBX3Df3qV5MshV5LZrb5uEwBo3KSvCQBK",
  "key32": "AEumiJkDEMCjSrfsvxtBaVku94cEE4r4bEWKaNaFnoBNhLqv1cgTXK1vStZRf27JRpnNhQtmBJjSxvDRMLTDb87",
  "key33": "4GTYBToq1FxJmkmo5E799hvQUWZ8iH1SsqwGkrh9WtXvPxLuzAdonUr5ugBf1dmZuGJE6AnuhCd2d3MPWcmgurGi",
  "key34": "3o1nhC3mSHZeZMWvN1DbNNeKg3pWnrWzYQCgv1nUXYkFpwwUdFHJHsFGYwLhY29cXRhEbZzAUwpLUd4Z8VaH5jYZ",
  "key35": "Su69DwhXfSsPhWFRSSq3gYxeGPXoqCnHhVgtm97dtQ3RGXt1jYVJLx5HLip4u7qAYAe4o6Y66249nU5787Zxoyt",
  "key36": "2qHPhCQTwantMtTt4uJnoYhjWi6Ms2LpiLHcGSmGak8GVxTndJobRTsdb1XMXyFPwC7w1L6jiHV1v3MzmD2jzYCF",
  "key37": "U6EonzfNTpDXuo34ATEZuRxULEFBX7oF1QABSuu8Ci8xttEopecwh5Vst369RxkMZ5R4Qxgv8ev5qzJUPJbFuAL",
  "key38": "3yMVxvQFHQPjka3y49bbE8CbY4AoT14MPLAsDxCBr3eWg9wqkhzVH6iVorjufDVsvcoyYUCspjF5fqK45F8poZmk",
  "key39": "3yX92t95dL32g4spcax5PvubosDau8pb2HVY1yPBfQXeaxMtUaNMjfs8vd3qxSiyFMeuzFoJFpSEyrzJ2cAReL18",
  "key40": "3AfxLknDLKwyiv4rVLVWojcBydfxJ5QFd54nsHyQer4nd3CooSLjap54X8C9Ef96B7GuSjw6DAz2hLwQKRLa7bKB",
  "key41": "W1eCy5c4hjvnca26fdDhmfVyBRAyHoGx3px7mhpq7ssGd5xanf4rLfgvSJ5F2WPaNcaGYjsZCpLjHfG9Z8vJXoZ",
  "key42": "5f41ZuLm5sCZXdMrLHQSL2yrT5eMznuAsZpWH8vNi7HQYRPfp2Db42Q8kojkdBLdzXrNqS2jARfe1dcX7o2uUvaw",
  "key43": "5YBJY5hU3D7gV66fscR7xZCnF4maJw5w42ZFSDMq9Fmio2VshGYAGdWphVS4VV3oKejsV6iFLfhrhWpHv9LePwpX",
  "key44": "5ZDJkSHoGha7v2UxJAxdComnRha6LUYUGyNgc6bA8EXH1uv4D2MxakbDVVBMSge9KRWX5rJ89YvmEx3nJCdQSzwB",
  "key45": "2doCoBc6xxadvroJNARGExDPChj1ZjBfAjgshnHNwfsrPZESFFTP61ZDEHbKG8DJUtdfy8nspJ7YtG3HT9xJSnJN",
  "key46": "5YNgVFrmsA6AfexLKCQp7spMGPZTnB6J125zsBxAmRpsAsYqaDeao14phUMbhXBg7mXg5Y8Utim71AKAueMPfRnE",
  "key47": "4hmRF7Es78P7L192wy2sidYHNzby7grz6gXFS9bKfG7hX2fLRrUdSNo4tbM8YmHc1QXhJbDiQkhHCoVpRsy1H8e4"
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
