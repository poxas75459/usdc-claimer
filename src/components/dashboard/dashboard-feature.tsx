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
    "EYUyF6bnP3zb8P6umzoyUakyQfsrTDf62C2JPi83gBZLSxn9xCk9a7hqTGE4mrfSuq7uRHFMeNcLmZPPmgQbjzW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4giuCTW56NoJmNY8uimRp6Zg4cnRAVe9MMwzFkRC7RS2BrmzWG8zTvSdhcvQfx2MUL8nV9yydxc9m6P12h6M8hua",
  "key1": "5xsYH3mh2gp2wZoNEaeW5z6yQxoRLNTuANWaoqtZC687JWph69c85MuG9DJwsTQZ6sX46aRkLz4ZuBVpqG6X8kGu",
  "key2": "2WcZhtSHvpPTkhXUKXrGyJuy3JEDmz9FAw9yYnG548DhEZP5YM5dcHnMMwsbLbRKwMZoor916oT8hPJ9WNWwedJb",
  "key3": "8cuHoKznY6qvuvXHcLfa5h1miXFj8fXgSSoh3aMjV5DVLF1kM9j6v9iPPFMbW3ADzrhzTWAgA2P89VwWNJEjyoM",
  "key4": "5KTDphtobke57ZenhwGLxC197MZsNZ7kanagfdRx65VrKgBMoHp7UCogjTFVYsqK5ihurxoR8UMfXS2dfYSJnLg9",
  "key5": "5wYxGueoVFscSvqE9QicNbmCGkfSxfJSQAYrU2XFd5JY13B3Dkt3q3emPTEaYNWX9FrpKsDcmMcbmFgSKp4USHyD",
  "key6": "2YLxhTjiTABXuEC7WTuBYXAhsACWC111AmFxQG7B1tcodzs4ESuUCVBD4AzuyKXQYBfDNNxZVn7fDSEpFZXLcPzV",
  "key7": "5QdR68ix56A2RQPnz6eH2mE9fNsSFLMNvvoSEM3iwoSZtTR1ePWuusiTKdX29FMm8gjwL9aJutDQNWPHi2EUWEYB",
  "key8": "2mjBE9roFkUZ1tNEJnMGDwntZWZDAe18D53Y5mZTUdFPK8LzDKWKnfzhesKiRj8aqUu6g5fzfyCFZ2bhCDbnBeKa",
  "key9": "5wbByZZUH2F9qFj4srfFDSYtBCUzQFN2hW5Gnuqdb8LSAuSSVzVG1E8rv7b3ccaFS4iUJRa9RBPbmp5CpZzR6nQj",
  "key10": "4XzZ85PDU5WhntSjzvPSyUXf65mFEU7JDZBM7pRFeidCgXmvZXSbRaR9p6j5Un9H21PkbcqJbukkEbRHfpYUiDf3",
  "key11": "4wCBi57uBLKjg96cFScZRsA4yH42bw3niansPWTQk8AhbHr5f7EhzEsu2z1iSfZZnfqXo7qiboeovnGgJ7knoBAZ",
  "key12": "54rtR1C5Pys71gLo7ju9KSS2EvgMreGdK5cokEWCvR6guy2bRBPnmN7cpe5BvyQCoUUQYNSNnagsUekr4TrzhQQj",
  "key13": "5LXaMX1FhjMAa6W5mU7cWvTFVD81nirBHLKTcTWJ2DKLxJQYNTU8dw7MZ4ZVNXMX4cABZtRDwXfnWbbVFSpfxCLK",
  "key14": "4cYktKdRVS3tEqLWBoXfG8qog9B7ke7jMBueZyBBSmzf8XZBB2CvJ38fpSeQXESmVTvbLT6wjE1SWUVQo4hVRjEX",
  "key15": "5RMCe2uBAFZeKbjVNHy5JA7B92W21JStnCUmHBYE7m3aqAVMGTbiVn9UeDZANnwZaVSdMWHweqHQADKvvDDwjBtf",
  "key16": "ay4pySdhuwPCHTuWC5t6HE8BuBrzqXU1mYShFRyfdJ7LMQGu5Ksrcpfg2iSRsiWPPHxpGysDtfiFUMVwc2mAC55",
  "key17": "4h9KfgGvo9722d4eFj9q6tmLDrGLsUTFrbF87tFDhfi9brxHdar35cNa6ky9swWwssAkBUj8M4bCymRL1Jd5ZLwD",
  "key18": "RbpC7Fg8j3GUimLUmstyewhRfNZj8wb8pDrNvVHkvRtHVVRQMjWGbpRWwoqwhwEeN1tspaiNf4gJpJJ1n5rAZ47",
  "key19": "5R4tj1dTXxKWhh2yreJYYbW12CbmtKunjowtSGWUmc6Z2VFVe86Zcea5nmbdtS2bWFDo98KNjwJuqd19qpwPyBkn",
  "key20": "4naRYRW4xLD5hWbbeiyvZgbNW4H8FfJL5JpTpyCZYUWMbMubvqrYgZBe721nkc1QDM7fo5XsxsPvRvat3QEfrAtm",
  "key21": "zHfMnP7bUCarLCSL6x798V4DkvSSJFgXDiW94nqg3XWCsJcJJeF7KQG7ADTzFbZv79GxAHbjPEhpUYr2vE73rBx",
  "key22": "4ESh7uUPiaCYk88UaC97eHhfSULjoK3RsYadQxowRznrVhekvFve6iZ24WZBRGrDB8gTgRWrxJZhQpYLXEL1kivh",
  "key23": "3k1igvoYwXupVK6W4QPEZs6s3u7Vrgu2PxRdi4fZs5PxpsT9mqBFYkd1f2gVEwXaG9ws44BVcVoJSjRBXynukHp6",
  "key24": "4b2QHExNychYTAceEZ2QaCQHjjbftyZEnaDtCt8HQEbJAV3V91Dak68XNp8WhY1uUG4wCDYhC9Z5mbeDT99DGNew",
  "key25": "4S71yy5fdSwfgQ2MrzJCqqd3U3NyZ9nxje1WGNMNB3iPXpfR6Xwz3dSXkuj6WBjdMYqRhE8gnuNKGyfVs5eqdAzx",
  "key26": "5ZDEfAAMwn4JNb86MpXwvSAkvqHFCTn67EKZyWahPK2H2pR2rmJksRMn7pmEKY7LkPTrK66qa2KcsGXPm53hvddd",
  "key27": "3GDibdPmQpU1FXE1gwCvvdS9fYfkjhsfcpZnu1VwT9VA6fLkf2YA4q1HmRMZhirVHxkVg185EdQoj3RGFigNXKup",
  "key28": "3BvMcuTdXEd1Qtv5yUqKuTM6NQcuazySicYfuoGLUQEkR1LJZnfUhRU5rCLkrNTWq1J9f4zKtTz8Sb7TxgSUZ7io",
  "key29": "nd54aHaYcHHxhGLgPnQuiWdn4AgZs6xD6NL3WCmkqkHeGuzzaEPwTSd3F4AWzsc5yGeGsk29UpGQd8t2dCQhKrq",
  "key30": "22WMW4NMRrzTxmzeBnLQ3d1eiCJvQmAXQZ2P1zWj4BmmoyGZqBnMPwmsjFY96w4sSknmch26DqT4fdU1YU1MzgfY"
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
