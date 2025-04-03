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
    "24adQPZae14DEW8aynoj2R9RXUFUsbkomo192a6K4XSZcT9aS3ANdgyx6HmskrWxmRQfNHCQAT5eJeb2EBkBosLt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hYcvS1fiUGu5ozA69vNE5d5CN6uvcMQQh53EAynGGYDNVRbaDPRX8N9f1PyAuimaaQt6wH4fWGQjw6pYdmjmcyU",
  "key1": "3UMcTuSNrkKN3fZ1jRzgAGM3322jAsTZoFtQ5YKJ8tziCzZ6WRrw5gbQCFJYLRLynM4cSqjGa96mxDqkToHvmLVE",
  "key2": "2uXJE1RmmcDtR8hpQ7kjszoZApC4b8TtoDPbwjWrpRo4J3ssy6CyBdh7Wytn6TpCdWaTcAsEUkboW9X12XoCMfJD",
  "key3": "4AahtT7Zki6hqtjvRp8CyZoAa9KwdnqVoD4LjXSieEDGm2xbfkxTZdacRmScyn7BgT61fTDE656zm7GgL6gP6EXm",
  "key4": "4GbCU5eFz95dL3U34PjoFPFzgDTqTj2Y1gbmx2APXTmyq154RCxB3PDnv9wgKrdr8mqYJKBfc216Mbq8Bsw84o1N",
  "key5": "zQqMkvvD9v38kaYbbr4ueA1HE3PJGkV9fdLt8LEEduGqjGV6XBVRkJut1gvBeSqGDoAQDtq9LNjfhrtwV776yCh",
  "key6": "3ZaKgVdDCbvYu6iiqcfMGpK892m6YboUpgJGBH8G8wNjBjBdwnQ3A3S4jJYDj5xfGKEHVXYxYeYN5w4oMTXDPqTo",
  "key7": "p2JRAWjz6xRStgsipkw4Q9Tihkqe9yvbo2VQN275k8jBZ7PysHQBVsveWTaGc5WzkxS9s24XjWQzAjr8HPhccpW",
  "key8": "37UmvqgYqmJzNpZPGxFAcVDubo3n44w9DDrPAtp9QJXm84wiHFg4w7NXdCBEqzLA1rZP3pR5JQo9pUkAvS3Gzgen",
  "key9": "5krCZ67cxPab5zoncoE9TYkyDevAmAxsWQYec4YR2gupK4JzVp4UrZxLi946fsrZAAyRm4RpraZZHHEEbQw1fhDt",
  "key10": "4C58CnZbwPYSCM12oSJK3W3hjGznweieCTs2DZ16qinbYNAjie7T78EwaPigcidj1CL6je1UUHX3qLuuxA3QAhbu",
  "key11": "4vFB6TaDpvA6hLwjUjXsxW2PLezEQNNwpvxWjCFezYzPSAsTyg4WXz8no5pdgNLPnYp7btFe1ERMynhJ4RcdDHZ9",
  "key12": "4g8M7bqmHcfQyVrYKUQwCb4NQkownudDir7Rpk2hDaKtSa4PUDexr9ekoSKbdBiTbYskLtK4kQxwHZ98xygeTEZ6",
  "key13": "5DGrGX5mfhvSx1QkNReneK8RnMeKeJaxb1MRkkWS977fwsnKS1tGNto9MvdsNit1AmepHY97HiS8o9s9KmmYDnyV",
  "key14": "2SExQkBrNstfJZiGfLQpWPswcvVrAYb6dhZ11Db1Y9Rq1DLqtuY9Wh8ztrmFzguDs9pUkqZvpLCzMyjrCH8R5a2b",
  "key15": "4wir5TnL4pLrj39aifLQD7f3z42hfh2VvuASoTxsYxPh5QPHPgC44QXsWtbTpoV8121gyx75v4uy3yoST5fuinF2",
  "key16": "2AfH6pHWBZASmSFXyB7ZWszDqRfYzHkXZ54rEHmsJgc3ECPp36Yk5wQcxbV4nRR6G5W4JRAaaSLfU7X8awxTzdQk",
  "key17": "5N2ikNCDPPvYRd9xeixgNcBhoZLDhT3QJkFy1XwFr3AeFTTd2YaXNwCvStv5tHHwZaEXw4RSzpHVnVkEUyHobpK3",
  "key18": "2jurxX7iNECGayHkfWgFuc2sqAGeXvuqomGE9nC22dwWDf7Jcz4c48WFHd5KsuqrDPqezg9SDyZ3J9hB3U8LeVvL",
  "key19": "4Nw8rnxycYCKcYCzoim4eZQuGK3ekjapDwspWwa8chKYvkcAjiP2amLaHqgvUWcvn1uihapmwZBtKPV9hTiw2MdQ",
  "key20": "5aLV2o5SJov3qcTnzsYxcua74xGE7L6nz2STuavGpSVxcfTm1v4RuR6XyBg95pB6s5TgEf8UpQ8N5DENnksAdPiP",
  "key21": "AGp9pASh3p1cEuzyxgepW9aFQF2RuSSFbeUTHMs1QxtrgoF48ajdofDHZNdpYySBmmb4KN7v1ieHPgca69NmhBv",
  "key22": "2Csx8mzpVzVcAv9ZpqHNux1mbVJrJtHUCzF1HLV4yaZaED9jLRJYD1rZ3ZDX4ggfBLeeXoJfbpi6TxzrfqJkwaLu",
  "key23": "5G2XPTreLSrU3YyVgBPU6EzWhpMUc9Tw1UZW2NJrVmtcBvJfRdFn94hx9mV36UWoctcWiebXfcttdD2WVLFxarNW",
  "key24": "2yEB4k72dtEawhsHfKoRL5UbS6YNgYzohBgJRq7xMharKPQF54mNbHmaWu2wMmjNwGTPyrWgaadsrLTjZwoCtdRp",
  "key25": "2Sf4V9eXRTxrkUaUCTiypzaRbpVRfiZdttYss7VZoizrKRST25Uk1TZj12hi6etw35d9RJxDpyfYoGS7xw7aDmfy",
  "key26": "5LFnetYfh6iwJEFiuKwPtvbQXGFDdYqVQMbgyY2F4vL3BfBWFeTmFFjWDy3Fw6mvpFwf2X59mn4tmPTrk5veysgV",
  "key27": "4SXc32cg7qi4RkPy1jP7dfqvp4n2eYMud3mXP4cS4f3pvSq6fSEDeVT53BTwzXEoJd1wJWDT2EQyNuPL4mXKwLVa",
  "key28": "qE9n3N36mP1HFD85qtD5hrUW4sBJJtLzBXrXgHy8yDTvBANiDgKCTsY2ke8jEyVcw6kn1Q3f8fhnsc6EqTBN3pV",
  "key29": "4EaLXmQfVgUZmZ7E3RyDvBzL4Utq41uVrZKr9MMZWGJ2a277VmqKd9eXnQap6mpxBtHRv3NVxh1b8SAB3FvZb2mk",
  "key30": "4AvSkDTSw3tMvG2JxrF2JSaVUheC8LYeSsHopEQikMu9FyWsTKEUSNXbaxPJmiPTdC9sqoMs3Q2AW2yM1mAGazDu",
  "key31": "FY2tGThcUj43y18XwhGtB8ArzRynUi3ccGVZCQhdKf53uYmkX39b6DpKwcX3GcQiysPPP5cGZ6QRTB35G2zhynK",
  "key32": "4XcQ82uYK7hEQ4cLBfRGAFEwPtUdm9WttydJKkLWdjjY2vmT71mXLfxwtSEzzTWNaJ169RNQHBVfPiF361govkww",
  "key33": "4j1kFXo3UEte5BVGUdxCpt18YUczYtdriy1gSmvGLi4BR1YovdFLhhTGnf9mBWDREVJFngBpmUYUugzvBCvay5RE",
  "key34": "21PnmhiBXYUMH5ajpfCwCNrDLQSvRgG1svp2Yzvn2mWKSSv58BWCWch7GC1GK3BE7Za51X7hVRpk583aBjZ5EpyV",
  "key35": "48m1hMjdpK7w1h47U7hHUGaK2NGS5gjXMmki3E58E9i33Rfeb7f4Znp88ACs1C27kGDapCwtSMoPiG5GwGa6b975",
  "key36": "5cNWfTDiE45V29McJ4KVgPtXu6JmwStNUVFG4DKzu3HZApWWCLzsqcPU8HpbgHTWaKQYuE3FxmSrdK2KzhHscLyX",
  "key37": "4mq7PnVtapHNLvg7mZbewAnRBaqbsYE4stAWLcMFueyhJRJEKqhSWpWaZXJg3aA2MmXYPdggAX4Mg1JkVZvr7cX7",
  "key38": "5rpjkRz5VhusdzA2v6FZiRRu1hgTV6PxXhmiLaqPvcNVr9d9CDPbhpbGiv2sLh43Yorixo5Ds1CoZR9skzpcNEif",
  "key39": "55yHcy6oE48Xqt98tQKZWHDWkEQzNFb6211hKnHU4z8uxZzaaA5MtPdgqQoGsK9B814npi7HzG5au5cwLzUqeU4v",
  "key40": "rS2HPFmQQHGkEmidrKMZnhGCNeKRrxTcx7kd5Py3s8DgpMWcvJqyv7Pms3RAzNMAzRW1AvVzpiGCxwL3TpkRQ8W",
  "key41": "xQLw9fddQ4uU3F18pG3TDVsNBWYiE7XThSDwvdfBxBYYDs7iiZCZun9NsBpDv3pQRCmfdButtjd96YRZipqicEE",
  "key42": "3e4RybBFwKXiCKjspegCJqdUVLcVSQbdqAXjTNJHFziuEUBp2Es6CDjr5QkpSQ2gduXQr5YX897hVUUkdJGzTHbY",
  "key43": "5QFLvpLBK9dzYDBSpHESosJnNDByNTDfLTT4hxhWiExxyuHDDkukGM9vcRa4H8y4LQhU7q76oavU1cfAJFQrJJjm"
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
