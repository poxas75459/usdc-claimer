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
    "2rXexphZewc7D97eBAzGvrAa47dWJwdvT1kscGNrKkSgUnHM2UYzuRkWs7zffkLcZdmiNtEQaA8HZGx1bMvUiVoH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZnqTqrAnSP9HevrbfFzHUwSsrVp2L5mJE9cbcTei2eYQLe616TMdMGikt7to1Yc3ZArCXUoA2TnyE67cR64wPe1",
  "key1": "PVAKua7n1ZbXkTFsJUY8S74zgKbAQzSzjCPgfj1S1sVRvHAnNHLdm6o6Ggo8ALMm9bFWL7Tt3CWY65W6HN6SoQX",
  "key2": "41fAV52Fma3sTtbX8c58QjqT4hhCHPHEfVptbAqXakaRuEMqk996xyfGdFtEYrvNNmxWt71UgQt8R9ThwWzzrbGU",
  "key3": "3d2Hw7YdzVLW6Jfoin8SyPNHSxB1bqifHpJpR1FNcgVC4wRjRM4Nwpn3e25RZ2ZEZAKVzUZpGHWcxHTCu2JYC29n",
  "key4": "5j1ZycZ443rseuWbCJTbAWZdvzvXJd3ZM2hZ65CKuoy76UnTRG2z7qSzK3Kur413Aia1bYE3PoiPnJj9Xwjn1rre",
  "key5": "VHjN3cuYbCvKRsnWTtYNc1LNFCFpA1itwhDtjJr9F6dkZEXE42skzyfGQVjH1s2X9YhEmfeXKASvs7hdbzS17nZ",
  "key6": "3uX4F3AQrgfpXueNhC3ubYSJY2R6ju3fHW114V1btGxrxaQctRyeW5iFLqbkcE7qkxn8ZXfVHgNS6hBG5HSS6zTR",
  "key7": "2shxX95ajD6WYrkeRCCCcGhoyn77oFQX6fSXKTD6oV5uLr7nWp26FJ1Ro7CiAf78D8ndXHP8ou9b4hZpW4AGZEAp",
  "key8": "3BmdPLFpqE3kJcJ3Y2GmHPPzJhz2S59h6snddUrFZqUmUTJJov1pZPexPmsNsqwvVEvFQR5qMuXP39QBMhmVQivx",
  "key9": "4YP22exAtiCoykVZzWNaAtyzQFvGcFX9vXAa4abiyeg2ZRP2a9PjLJGtaSfdq5CGwaBZUt5gvKwgVqzBvuMc6BMi",
  "key10": "2mDz1HY3T4sDagpm8i4qQgCPFxoEYrThbWj6QacsZ552WQkPjaRz4eDqyocMEDzEx5zdVFnL9XkJyNhs7qVN2kiz",
  "key11": "2w34XCWpUeDESfQ1xeWnThJ3N7kunqLXoXR9zGNVBcFuLDLUWQiA1JrdQhCirEd5aCsWFXWPQkXsHHqG7BmT7wTU",
  "key12": "4HAs1kBnLCiB6FReDdizZbhNoKmHHhpYd3HkyvJ2ihgLCfGSk7C9i28WFgGH7bDCKP9U9Zwpn3ctKWsgs6TnpNeK",
  "key13": "5Mcg9aGqoMm6MiZH3Tnn5JyiQMUQsbFw6dY9Pjnv9SauWkPmAGF7AiG2LPVmxRduttnK3zbnPq894TxmSMCrsqQg",
  "key14": "4HtTaYjFy2BcxqZpBRTHAg2PHMsH4RsQcq9x8RZeT8zkLeP5b3iX1G9NjaQ61fotJWkeLS9ME6xv6WjsyBsGBxFn",
  "key15": "38KjEQWaMgJAk2nFJt7ER5yPctUqNsFu8WfKBn8UQ4DwTKzdrDckX5D8ZwZG3ZGRMz5nH5WUeDYnW5CyYai4Ncio",
  "key16": "2GECLLqCREcU4yHPm8LCgeYKacb9JftK2LjDo4ZWfXrFW3cKh8CdKvKG28XdWrx4sXdrffVtmoQAEvzudynFb5mA",
  "key17": "5Vi3j14Ep8aV7X8FmcxH1t67sPK5kN3eNUfPeytwqeo2ERJdCwZYRQAdj6sCFvuEPJBAdPFmRCveU4nnTWqgtUy2",
  "key18": "5xE7xNEaHL9B6oC8PycZrHnGsrF4cFG6WBKg8fZNoo47RAXYEs6veWSyg1V1tqt4T4Df4bbNAwuxH2BBz4wNE41y",
  "key19": "4UbxaAGCS74XwBL1mUUHS69G2Dgaib3oPtDySxTsrw2EEQY5otEbhzS15ge1kWbDoyAxjhfFwEdYNc2iwHNAJWLV",
  "key20": "5BY5Cu7FJ7jjMh2MX94HpvrPgZcW1U7TWeH6odD5XqMcL6ANP7LW5o8XpJHvYv8kJjvFP3NCeMRou6asw5ouvTvs",
  "key21": "5r32BpcHMsgkXMHJG6M7bRjbuVuz5sJfSgEdbWf1SPVwtJbGn4KrKLv1jrgbmKAbmZR2KwQKZmVg9EWkTqgAnWsm",
  "key22": "2oBY42fQtFoq6RcMamLW9QEDwQitPXnDKUZbpTYLXCqLDcfzdcR8ZtyvvYhB1uAv4Z9x1UuTtxUBD9Fg2cx9q8K5",
  "key23": "5nXKbtHcRAznZG7XYqLqhM7QeZsC7H4wNCJpgAphCmi8zqHXvnFeewGdyGigSchiBiSis2TfkC5hqS8nJ8wkPdh1",
  "key24": "SW7y3AwUQwkzb4u2x4bQLVuGmeRicQDgG1vC6jQpayBTievQSo8NneopFfTr11Fv9nipiz5cjagNLwipq5nW8NT",
  "key25": "4s2ohxZFLhixiZF4ieaBuWRjn4vUQKybk9bNpzVRJ8Tn5H9xdisjuVDrPvFXSaq5KM68TmPFz3S5EBrvg2irLcer",
  "key26": "55rJUq4LiFF6FgFbm2q8dttqKw2eLMvns3rdNaGTd5DZjvYLoTp18MbkzBnJruUMZ5ohVy4RjzsLdeFexd1Hn319",
  "key27": "3jPGehEmrnYXZdsppu7p6psJW3EdzMu6KSvQcBfY74k9wefLsGZoz3erV3WdNAkKnwg9PkbLLZAFMQ1yaTqpiDj9",
  "key28": "5FBCfxcS6YU4YBXaZs4J8iGnNJAdy3frGggUJtB6qu5saQ5rFWoEPjnqSsCvZxqzZ8eAyzS356V9ZEh2zkS7P9wi",
  "key29": "5SRDXchQu4AiiMqJkFtyvN7W1hiT4YUXAcgn2BuRmmKMShUN45bm6TAqZw2wWmUnnLRK1BPuJsrGj3CGTu4y8Ba8",
  "key30": "2Ug4mUCSvCLQ1NKk7APY85rQWdEXUQ1CqP4tqJxVdJ46hvGuuzVow3HNHvEYervXzHqKGBdbHKP98RsZEHurEMbk",
  "key31": "2r23QxEqmR2m7cPjQaqjcprLQe3mi4rXPCwrtVQtHQeKXwxVhGGrqYT87Caw582f59is3TCCvyXQsaqGF53qybco",
  "key32": "4yJDFYqnHTZJtit5tTZALjt3Ku9BWiadmwrgxJkpWKtm8vu2Mx4cinYxf8v4a8jAzwVsDseagtQhGV86UXD3kk1L",
  "key33": "2g9YRgRRMJNf9tGtRkkdg6W4AWo1BDmTrE9i93gmPuCiASDgbErk5XUrqgfJHQk1uMKSxcVzk95tqWvLXJbBhBVQ",
  "key34": "eQ3C3TvgZXSRqcsLvHMLw9WZB8JVacREhSpVeQQvJLTEJY9ngRP75qUDvudVAPHX5gFKNs7dNP8fpLqXYbhvPh7",
  "key35": "dthzBx6Rs7i3vM3wUTQgTF7BSjgtK2UnscTBsF2gnDmJr6yEmhUKR34JXi8Aejq5X3RpMc91jGBpgmkuzzKtwEX",
  "key36": "4AcNQSL7G9XEfgFqYaQBPVK2Wr7KNEs1X3rN3FZPyEVD8vFsMov786a7aigoqFu8usyWace21U6XWaYFPgEYnFQ4",
  "key37": "36u2cxBwLpNAQk5vDV5p5xQJwwoLeFhUPfM28ep1tMXNbq73oJGrXLB2TmEig57WMxRLxFr2PNcUPEiSm3KX1qrb",
  "key38": "596zkK6qrEf5ScwyMKFNY27PBK2StjLvruvWrztLbDL2aPH8doxjcZJ2S91zsNiQrod9vVABenN5h26FL7jBkdYf",
  "key39": "5e4g1ZyGiATT9rH4sye967ZrcK9kRXghMzkY1LpWLLxLBjeM6aEDjPXAwy6A9KR6eXXwPsD2Duv95x1oAT5imipd",
  "key40": "55JoKvvjSdGiGpSRqrPqPEWQGPLsn2hH7jJg4n92BpVSkZ6XkCQQBKU7KienG4QoAMujp5XKgN6TiVia6mL2GX3b",
  "key41": "3RMHbsfn9qaSANGCrF4FY8ja1MjJDxfVjeQtEDP9PbyiFsfixdAQWWsxDz8RKgP56Hz6TLQ4eXy7AWYYstgTwsVb",
  "key42": "4r2LGwMyGqqcxWGxSyFnYEdSQ6hZGSaatNyhXjfLbyKvsraEsa1r1hvoiAG9jPWMnfWjqCVJktAH6fYQfBz8bGi9",
  "key43": "3vHax4AMMn5hkzKipUdJUNd1N6EY7bc4iYqoMkvYYy5c1PR1dHhVTUnEVrg27wRbSXoxuCszCt6GgPiYzBQe5551",
  "key44": "2igNgNE99kNnPCXnWKCdYfynaH99HFAaAMAfhdT8s2nX1GB6nq4xh2YPHknkJTX7aWAVEXAsNsmgJdxHryaa4cvu"
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
