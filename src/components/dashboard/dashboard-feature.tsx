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
    "5rzcYaqPJmH8YrkRQYRJtkUJtudDEdVQDjvjq7kQaNgvFErdYNGokAjVCdMzxppq4TL41cSkk8AZY4XY9jXXkRPa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sTWU7T9Pp8nCAWb2qQpc4Ju7prRotemTaUyZVnn8WUNUzpB9uqTDFPp3iwGzaFoW9LYayLW8C4NjFYggWyCpKQH",
  "key1": "5Fo4z8KUTy1yuniQAYqdY3DWEKTSRBNarAUkqvmkJc8CJp2V9ZhNaYaN1AakiCGxat4HrcT3hbXXPkFBcyEX59Vf",
  "key2": "Fdn8BXWZ7kCWwd96zPHxYy44KKhRcEePBFDrK4Qf5nK62jJpc9DA262FCvNxxhCwHQgQFX2b7iNB7teGC7DJdoJ",
  "key3": "VeLvEm16UYXXB8LzHVhaU9xUbPzzbYsN6m18Jxm9ih4Vgm57j4BvdwtxJVUX5kqatpxSoon7vu5RVNYBm8ag3aT",
  "key4": "mnrujKKJB1H3de9jEXG79WL4okAY6FrGDDuvDZyZw2B8b57B3WjPE2Wvw5Lq8LjDapiryhkYK9kGaapBejU5FYR",
  "key5": "pcZ6hKaRYXaQvzf4d9FgZeH5A5LB1gbG5zjEqztDn1kWrKqdQPqDy9gCPPoQq5VNjQ2vbPUDqYpYZ6pfcvsfjdi",
  "key6": "4zK7UqxfcUtcJrHTQroyY8SG7nchRFtm7Dusj9mcKxvpw7yon98tRv11MRd9aLcXA4tASkadiYNnjpCoEwTK6sVQ",
  "key7": "4NUWrMtKpjeqm5fLJ8zrqEimQ2hTNQpUf3PfeGare2ZwjpWESEqan9bZHdMv7qFMZPF4nQCzxGPudpbGhmUsUznu",
  "key8": "4PCEugXy1i53RXbijWsnrhZ58iKvvmP2iZ1qiHWRihYAiNPwtgfG5gBL6SSF94AXRmoE1wSCfGUeTWWhxBy539Fk",
  "key9": "DvkcZZNU4NjzqWiVyF9tWGbALfoRoUPYPehRjfPJwQHCHHJqGtfpu6dWsWvEfMhLhftoooa6wLuGW1jJGsJAss3",
  "key10": "PLxn66D1ynLytroKnwWNJZBf2G6PSn26BukTY892NbCAQWy4izpD6Nsw5JaQhd7LJ4q99h44CM2pmZRG4bakSBp",
  "key11": "dhPzg5UD7R37vCL3CCo1WicRT7Ay1SJQffXodEhyRPyznEhRJWmse7NxQYrj9H9zsA9BbRLXV4nccJSBANdFbVX",
  "key12": "5jyiMCLSocEQhzJ6EYLnSXb56qgKx3Y5Fw5Hy7xqvgnpUocnDQdmF2iP6XjoTUSyQnU2CBfawwJ2KtgjrsSBfgkU",
  "key13": "3MxsnJTYDg1s7YMDQnCtUxPRRfVzEm4C8oQczJ7k8nzf3Y59tiB6U94idKxkJb5dxCrQshHEGuGbURaSy9pttiNQ",
  "key14": "321iKMgsV6vo7cxCvY2wMsbAsYfbDcunGgdgFuDR3SwUnVmc1R8yKKynWqCbptLcL9KNxjwfTVWh5U2juF38xnT3",
  "key15": "W6rSrgotdBsqFDAgyVaaGpY6GsDv7jUU1uFmG1q1GG1M3SwRaCP7hsNNhqG6p2RHF74V1KefKPLVL5xJV5JoqSs",
  "key16": "4986kJnAxkQeXnLi7ZjR8HBYswsdGUUHJAsex9WLDyVgrWjS8RiFZzLah9Je7sMmVTpucG1KdwuFqwE6CaLgoNGM",
  "key17": "3bknH1YCmXw1sYfgVcHpeTzcDC938GR4h9HFujXhfTU1c9hQGFNrJWSDFqzTEqqggvYqhruf8jRvmjZvw3qbspbj",
  "key18": "3QJhWiDtBdVk7ycL88GdzG77Qhbrsq64kn7uYNAR8DCudUHS2LqXQjKkZ98MjF3ay4ZHnrQ9eikZrCo5tVWnNkrw",
  "key19": "g9R9SPpnwjARw8SCxWrPbBmwLiUabeJqhZBxrtFeUKtWRaSkpCANgKma5ZTJ4w5D1RzWid9DaSiyjWSQJMCUQpu",
  "key20": "2nb9sXvtYteyTRmTxgzcw5BTZTf8KXc7XHFxw6b6DuFt815Y7T3r3XSuhHpksFYReB7HMYPB1f9Q9sXRX9kSxksc",
  "key21": "48WHcmdYJpiJyCnKyyRU3cVs4iFsnxb5oV4wnE1Jp6BpqF86wPGA1gAhXvZCzW9aMg9Vd7khfmmCveVhndKQpK1b",
  "key22": "2WyFHVeyxrp8k9MUtRyCpxjyoakgDSt75ZCUWNJpWuGVxeqMWPPzsx2ekioW56gnTjVhWeur8qdCdKjNj4UFwwe8",
  "key23": "2V47dfezGgiyHoDSkDCVU81vvSKKAWVuX8mYJiZpHcSetkDtvr7kfy4R5ghXu1ZW1ecFGmjdEjZZr9mosX1BN3JM",
  "key24": "4ivbVv1SYERKK4NDKfGcooUFhrfk9meLduLwSEd8CdGHpzWKdY3oajbXvGgkoLSQbC3gYB4YqRmJTjycpovnHVaB",
  "key25": "3kUnn2fW3u5N1hSMep5ohfCkLsTmSHQDGBW1xfG8jet8Kj4uUngreQf2P8EYtF5bW9PUnqsrSKzxagNEhnDTTqJw",
  "key26": "5JX7zNjxDdC6d6LK2sTPvjG6fPH78e7hiwe9Dre4sNcFbKyVKEaZgYtG3ap63LzA3xhQYDandxQcv8cMgMnc7pn9",
  "key27": "5uGvqQB8Hcyaav1XC2RuiByXmdzpKkBu2aessYxH4y6RkfWPYNT82fjagw6nfshEc2qAcmWtPvQQ2qAvgqUiWJU5",
  "key28": "3BkHMJFCYZLmxcv3UGjTkRYepZcaXhHoZUZ89B11PuCUmTynSKEKHoxX77y4wuaVM6bukhpoG3XdvPwe9MJoSeCE",
  "key29": "uhU3T8mdK2MmKasR6vrhQwSHJtmuDPkiTiNAxbnhXFfMNkkJCoxDstXfe1LCnsq3Bug85nv1JXL3VUKHQbXZckm",
  "key30": "5ktSQuB6ckyFfaU65X8syBYdyp6zr6mS4STJEGUpvzjxQuwDbjQkhj2MpApx89zag8TieiywQ1WU1XmJR89XtT4A",
  "key31": "3dwkn5ixEqXs3Hb7CryUENSnKfEcaTz8nAfXJ5NNAsJJPRceHYsVXRRiAYbFxxFkwm5yNa8aiHs3ei9T57FrpQcH",
  "key32": "9cvvuqnF7A4gPJzVLY3SsM43evE2NN5XrsF44rE829wkneRhNmudAM4m76MFQwkyqfEVPyBLvAhDtXFPPxJme5R",
  "key33": "2fmpRr62L4iVDp5ftD5heLzGLPx4uLQXLgMxrC4bUzUQP21umJb9qy6xbfGST2mzGADkvp6chQ4hcLMcgedkSXbr",
  "key34": "U6oRpk57tBUREer3u3RZiSNYcTvEbWtNLZJVSeufFQMpWwBheNj7tho86viwSJMTPcnD4uopxzVnaFwwRcWbqHP",
  "key35": "2U9ydKGjHCYqew1mqvcHEMjTiysPeQLFHUWST2d58NQA66trP3oyvFoxEjTR37k4gFAjzQ1XJhAvwgYu4apXHcVk",
  "key36": "5A5dcsK5UNS8GcPCeZEu9hG6oUrRYKKK97McMeoQMHjJujYik3fXEdzEchJp3dkpgNvB13711bB97Z9PTzJ4eCdK",
  "key37": "cPyyWfMxmgaUQrRZLPGH14ndyeVg7288ae9yN47z6p1R6zYZ5oBh6qU4oQGrBoJhgMf75UhopeFw533uyxU5Xwx",
  "key38": "37ThtiuReEWTVxViV1vw1D8SmzKSPXbrWYYeDMxk9gd9qjPsdtdH3umSv4R7Dgru6LVCFoaCTXnctgNdGFFj7mLm",
  "key39": "2a6wSdiLwX45zQNkiaduGVoH3uUM9RAkYy6vM4kyLBVaKbfDWqeBAp5HgvJsqQG4ak5cC4srBCDcdUuMCTkuhC4v",
  "key40": "2VPRgy14obuk4Go3PC2uLn9s4eBVNGwqaAMtcCuVsSxfr91DATARFXEQSBBpPMA6DE4wHsns6mC2fZ35RWfm7NaQ",
  "key41": "42EoqKdz6QSdVcfrdDwHfwia4d26xH7FWZWqi2vthbzkrvQdS2JwyiKDEr49MnF4qYQUxeeQRZqoiEqBLmKqs6T1",
  "key42": "3vgTpdYwmHLVpca4Ts7qqYBjMAkY4mU5dDs6nECqMmtxBuRemXVaBA6xDF4HZv3GC9CLiiZDE8bRU9XRh4CGgXAV"
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
