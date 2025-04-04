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
    "2S9ifQqUy25YdfTRZDbw5yqTRusuk7Yhvy5LKUdEND4QJ2GxGrD7NKziQ53CdCcBUNKKjxqz8ayUHWpKNdhm5doQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Sbcm2FPFcJKUAT9iaszb54rpSBtTKTAKdNKMASko5Ava95DyDbVwjuEayoAjCWyC4TeXPZ7hsAAoEiUcpEHJdZJ",
  "key1": "J68c58Wj4QMx4ztbPcowuT62sgGFrY5BXrVJdke46BhKeQv1N6hPwxiv3cxabA7DHSnfxKLBBRnLLpLANUkdwQJ",
  "key2": "2w66KKJrsjVpMRWTgJyPCLN2okXpwZWVAWLH6v6wBPPt3PaRwRzVqNR5qz3cJuiAzVR2vWz2MhGhu8cyWjUUKB2n",
  "key3": "4GjVknu51sm5HsHK2jjq5Rk1oURVfL5mLpjpNJjPrEky9bfzxS9ZeERrnRHHHs4M8wgfiswcTEjAUYe7FGDXtV4d",
  "key4": "4dNgE2uQDAx3cFcCg77xioHS4RAaGMiK4KAevcpyzbdBDnu1LssxcwmtHw6gaZnAZRAuZXz69c57hsjWsUALwD7r",
  "key5": "kPe84Sjoyvxf264uDFx4kLEuxKtJLp9m1TN56VfnA93wpyacqbpbMFMF39TaGiietfnheimaanKdVJ3QGJD3QQj",
  "key6": "4urNRjdJAujLYcMcTssGEpEuHtzNC8NfreGQZAQ94UW6o8FqAd4faGdKHswwgamgVAcyVK3EVwJqYFywKYPCejxi",
  "key7": "59s3dpgdeN2hqnUwQ834FoEZWbzKDHY7CbGwHr3vQDX6cc87NyyWQkeJtT9TKc1p6JqjDCgRPD258EL4grU7ncYC",
  "key8": "4KhS8ZSDJyjd9DHXQ56EL7q3gdNHaDqPkA43VmB1Awoow3874PQEcKQ7bcGh61fuHeeZfsFmHcyfVkiYAj74caDh",
  "key9": "5JiDCfL4Z9HzxaJPmTTE5pjXHbqLr14pPh9sdeEq8u21ykkebsfgRnUCZ3fWXMCdpRpabduULgmiG5DD5Jixqqiz",
  "key10": "tTTCSmFSLPmio2yFtbHaiM9ibAoGYLYmW3z6dzCRit4AdQRYmmKLUhjYUy9MSXvvTK7toJbNLuk3X5wNkoLs6iN",
  "key11": "33vYKnaK6bEVrmxZN9QXr3SiCbTrW6bJzap2SNxPHKKQGJ5APm3SaP5of41wAKNtJtNQQyP5oTB9icDJDuaQFU5s",
  "key12": "5Bh1zRfcKw6M76AxLjjpWxHrUyqN5MfPi4W51gz31t1hvY3JJqrbhM2tSTCiF6h4Us5XaSyN35Q5VZz5pCFRwmVP",
  "key13": "PKgFgaDAFVbRN22a9CwDxJtWDuKKfeKAEu5ZqHSum3ZCZHzmeYHPtwntwC2QvDWbcBvMVNzgAj5owWp4Rk4iHEr",
  "key14": "2yKMdyyvg5AimprkKshPk2DZE7cGzMy8H4kh3XwBBQ9DkAwD3YBb4wXTBXbnppbcw1HDjHJ5SNx3RMRjzN97GfDf",
  "key15": "5ks8bfLt9Hdt2vg7TTEjBYas4XkEzHmP9FbH6h9yzWG8K6bjJduNafg3Ertfr8r4dpsxpzBETCenRjdS4QFx4HuM",
  "key16": "49pgcNcJQrJ8W7UBFnSfDyw8QG2VeQcSB2oC2aKfKqHvtLaiAnU2YBdh3fSUh67rnKMDtbS8YXGgYLfBretZuqfc",
  "key17": "2xV58RpYFvL7k3GzUi8VjfZsZePAEEC3QJyERD8dY18YnHAEPf7oyVtq3sUSzSFogt5cAw3GDQeUvVayj9jer7Rq",
  "key18": "bMXnR3jS7nUTaAd9Bs53X6VBkWvedxmCDCsQC2HeNAyxGWtGXbRD6sRG5YS7T8VmT5HzhSLmUNBBQD9WctrmRCW",
  "key19": "22DWFy9sYYqdncQRBbAtgpzigaqa3kbxwc6ib3c1zeRi3ZRfoKgBeLhKTfKWhE2TXePaLHTHVUWLZobuQ7Ldxizw",
  "key20": "3U1mMn4Y6MfSmZepDwnVSXwmWHS4f6o418WJPK5VqSKMphUE2kE3NKr3EfYRZKzQiCEScXyP9XzwmpydHyXVKm9s",
  "key21": "26sQAthG62Brr7SM57SPWE45f3xh5U9hoCjkMpLnEpxtyBCBPemXUThQndZaMH63oEv7q34uTqs8YDyTThgCS9w2",
  "key22": "EvNX5YXrFqgDrgNuzHap2mXcYkqkHATgcUamNLTRg6q5dFQzJtJyKqiBDhnbD4J1dZbN88GbV4RExTcVQXXMf4E",
  "key23": "ZrEMSUN2VALwwqXaEE2WWgExEtJxqcCS3jbzfoTgUeQKyLzv6xdDUEsJqqRFmpuGzbhzNk1cBVgq4cBAU1SM1De",
  "key24": "61VKbFrGyuBtzffnq2SH99n7uTwr92FyWDnSEuNnEp3Ky6Gy5MgvcMqKmtDqdw552bToF9W6GiYhJtsrpSBMb1qz",
  "key25": "4kouiZEXVXAfr6nWJAdR9PC8soRmWzwmhw2nT9t4YsWenYtdtHRfMXNSpArBSwtNst2Aa7J9ZWy8vWu5sr56smoL",
  "key26": "4xXRC7cSiTvMaRmxWBg916UyrGd35Rat7qPZfbanLy1UP1JrnT3kGwVfxkgQTRxfCa8HMazZHWS97qfqhpQAjKQM",
  "key27": "Hx4rusikgs7pDLNXZqvbNfHXbPKPffU72cMXjFBvKJi5KiDjskmCvNqsMvQqBVxyzL92fdMqtJW1hNH663ghn69",
  "key28": "3HYBUjPB5116F7tCdRhHfNwsijWzd8x2vgHTzfYhJAut2dfpn2bsUT1pENPyf8ftEk7A3364S1Pj7ugjVo3cZey",
  "key29": "hb6PZG91jjX7Tgzx4bs479mQjApCWF6gu9N5vomxMDL7GJE5UuESK88DK8364ca6qZXQsMEqD63LcRaqddxviek",
  "key30": "2BxxCsqkFiUvFxFYxn4wd9Kmjz4sifvcUDRQ1bkWG9VpBzZdCtW2mtGcKtyrbBF1ALx9x4QbRvXaiyQFBenUXBFR",
  "key31": "oCPNsm37dSDwx6aQ3dEuXcjxmipCCMjyJesDqryK28pxHUqc1fWXc7poCVHJHYypyaomrmAjpEyg8MptWmJ93nQ",
  "key32": "UZYzSkDRCZgECMk9hkdnfqKcZdeBZx9W8ahpVo7pAu4buaEjbyC5Q2amqnfeHSWm8ZnL4g2g7mUagBtredkU2UY",
  "key33": "6KcvdHthv7wVa3vbT8ENunBfksWLpSenPo9qBs7Cqm6fTxSdmGn6zkZ1TtrtYMfoqxSzv2gokFzgQA24Nb5XPQU",
  "key34": "61dAUCKqmRgzMYT2QTDfybtTNiZwEyeQVyFDgjAYduWV7Z2rsUy5WtTjWL9JaByt3e7XBX9U7KY3rQ3oBHCsqZuj"
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
