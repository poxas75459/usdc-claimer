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
    "3KALGgpXdQm311zQTVhyX8KjqWJe8tm9gHnLi4UPUprvEnzYGabkMpZehAHEyLtrt5f5Fq56WjDwiNCY8E2PMFHp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3boRDkQVw9goR4x3qht2e2v1Vg7hYey2rmeY1V9xoMe5qrFhFtVcxUid5DJG1X9GarAvM9uMUJ53oAQRRiZbfD6A",
  "key1": "5vVeEWDW7NTMVpjb4gMJJMhNzAKEWp8U8UABLTFq3NbK3tjoRkf58yZz9wD3AD6cn9ux6XHuKUnEEYsrs2rYAHer",
  "key2": "39qu2DqocQ2ifaGynFNYwfxHtL6QGbF8HgHFRR1eBEwqPEjBMdQhhMbepJUR1niE9XSDk1F4U2vYQVBD58nbWHjy",
  "key3": "3DwcxEBLipRMeAFzvUWns7DLY8xZ4dSN2Sfxag3M18RjfidDC25UXEmT3tsdfzycHKt7j2q1QGp6VfWh7HVn3cqK",
  "key4": "3nDHUk2AVQUfV25ZibLDotbMXyngzTRjt7v2i9bMrufQgtnWFwrWEnWSZZrJYFoJn63vCXJJxwYQE7rXF5DG5anb",
  "key5": "PXDdEUrLyhNyBupvvC2Zbk5mRaHJTBLhtJpa82UhsVLiHPUKgVATY4hgdEu111t6LwPM3NDZFZmYK7HU8CuLwJo",
  "key6": "4d7LJjY9jc2kbFQJM7CcMZLC96SK7Fqiu2vUfw6R9Jqdb2tJNnoEdcn8BGVyUmMMWwQTkd4k2CmsfYU4868bSZs",
  "key7": "2NzK81jenk8shah2EUN7NKnSnNJ3d12BVWsWQQHY2FF8q56EcuBzyA3RcgrqQieoqqPy6aQWL4Focp5EvBVJEGo5",
  "key8": "2JN99AmjxY9iY2ThKn5bCN2XPCTpKDXw11vtk3JHQneLjDP69K7HJKUFbFitzZgkhJR81hVCY9qi8igBXkEKaTyQ",
  "key9": "BronAvJmBv1d6NfMQi77VG2pdsNW2A5MjW4q5Q9ojNGToNpPqKJvW72M6wc55xPMQ6m3JsTJV9Ygt9TL2oxHKzS",
  "key10": "62mvSSBvfoKbaHmkKUTEfjFsoVmFnFxtXBCaECyxQ6G8CCVS6YNW2tNqZLfqBuPz21Dg5goeuBkUtESCViqKHXD9",
  "key11": "4WUEBkUwAyMq6aLmTMVoGCVSXUCZ9Dc9pcfNnaHetoW6H5UurDns9XA1f3k5tVfwVibz3ddV8fbMfk22U6uqGub3",
  "key12": "42wtu82Tp5v9Dc4DXPJrA9U3jytz3y8g1TP6Phc4s9drrvJsQtmTGsnhcgXbUhS6gdCwvbMeQ6WN2mYKQp6BR5ST",
  "key13": "4mucKwVBapZyvhmfAAeMLpH5fvnivopZFhbDKN8YvsDB2FZEzcXfwVmBSSFHyCidyM5igFTp2mWJkR9VjSw6fpHi",
  "key14": "5pRvAcpUXymqymxcLNh31V8k1HSubkHByPZrFyJRkNDARUUyRYD6ufVoM4D5oHSvxscusg9QvrqwsjdwJhKrdj23",
  "key15": "3iEY4kuqxWGNB8wSXBJPfv3vtXmBrQgw9by5HiNowfibbJaUrHbfmjWNzqRBgdTYxhbdNCzpXrwAKadA6hT7NNPL",
  "key16": "2PaZphuFCZiNkt5GUhuP1dCXTYwu8f1TM8XftMBXBuBNm7gkkaQuYoeMsaQXaLLQvWvuxvtt9Kh9YemdQGifAXxF",
  "key17": "5yAyzXPy3MVD3r4A7jrSRhJX1DprhyJZE6ArdzgHrcoA8bUgBwbbLhi9SkTEnWUFN6Ur2Zf2xLdefWYzmibqrHT6",
  "key18": "4bJK64yyQcV5ECKPLN2eN63m4zSzMvZhXKVpf6cwqF562qZCYPqpmhTnffTmy2KEDQGedpCBwUVj91speMAHZeKT",
  "key19": "MSaaWggV4gUzGGiEWqwJ2LvSiJzj2MW2SDXpJuZVQFctL8mwHpiiSoPLD7pncF29qDjL9QF7gdh8K3oaoCndsbR",
  "key20": "9H5nhNoYJk81AP8bcF5Cix4CpS7fuXX1BKyUyz8ht1SXDutHBeyfG37sFF59hq4Cj32w8F8s4gsbHCMoStiKQLk",
  "key21": "2FkWHwsdmC3L7EmajTw9aFBNdvobjxsh6m1EBQgCp67Gud4MiFNVdtUtqVg3Xtnzj49zh6knxvt3hrbVhZ5FWcwj",
  "key22": "29JZ82AM5rTLRzrnAx2iJhHztMG3pmMmTeTrFT3h1VM7GG2buRdxQLng6U5WU1CBv81f6atfjgyf5XrFcscPEVAS",
  "key23": "5G7JBbHRmmMDnE8S7aE5JzUrAaz7DaMHgzRYky3tUHjBPSEJZa9hJg2ASD6DJLmmAY2YtSV3WpDqb157QR85UjPX",
  "key24": "286AGZMYe43QRooCt1Q7Whf4dhhEycwSveJVo7j9CHV9T1x56nYdiqA5PSVqpmVJDK6V87KANEdSGKnzmGXc2Yi5",
  "key25": "45CqPRMNVbviCHq6fcQC2CaFNbF6AQsHLj47qvSUyCkEBBtyNDbxmZYKPQSojYJQyCT2snYupn37VDnTPjWrz4DZ",
  "key26": "JESVfyERVp6cbZeDRruPf1Tm7qwzHibaVNWLaNWD7E7fk7cJsZeijSuiG829dnLmAw4Ls7o91b9giD3Ky1yrScZ",
  "key27": "3Zhaggj6bFaeGisYYmg7KfFC6sWDe1B7LmdW4csAPqMuxgtq8wuYnt1MsYha4g36ZiMikx1Ev2Lx6rcQRyyhoixZ",
  "key28": "5psKD3WbSr7gV6HuLJatcEjMcp1WkJWhiJYNfztwX2Eoj6KcifC2yiTx38Laennb5tmbfDSzskwRHpvktDsTgi3G",
  "key29": "Bss1gusJdcZ9DFPxXyXMAEReRLwzFqNv2vhry84i3KHNbcUW69684ggxiZtPYLt5cxXLmtRacSUnwuVpRJy2mbe",
  "key30": "xR7ZmxZwzGKyDnLMRkpizEpRjph653QufYgELaaELJ4qFxGQA6nN2prBzWZ1PqddY2LXG7NyB4yCcQntZen1hpk",
  "key31": "4WjikWc7fiuC9F3fcXH9cHipHdEAhdbTCLjtdHZNZ1q2jBKmbWfZu5KeFa51VsrsHEvNc31n8pHiGekv4fDhtoTy",
  "key32": "by56tnLhKAnBQP4SEjP39ap95zLWBvHRPfEXyKEu3Yz6xWymQiyqAfpdk4M2kwo8UnwHgJKRqyeB7yWb3ic6ETc",
  "key33": "3jGkuwsMDpyKBpEHyqcXQFhLntyQQmoLLrRVwGetAoM5cxj4ctTRu8kEXjBpbMUTKuSsp9wHmhi9vs2nCCRVgm8",
  "key34": "5uFMjDaY3aV7jKN8GwwydMBfTVmqaquuaytqqmLqBs4a7Gj6dYDzzqaKLDhD9L7nznMSwfFDpUWQqedpX59LSdzU"
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
