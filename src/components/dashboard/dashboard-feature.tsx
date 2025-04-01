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
    "3J6BCQaLC8JKYU12mn19bePVf27CZUs2HkMMix3GmrtN1yPoEe2uEn8d18w8Mag8VaYYK3aqZj8gSL9sniMdE4SN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WZA5zsWSispnvruY5MCN8RjQM7Wgd9hdDJk6ywETtiwFwSWfkteH6bHMYDt33FXAcvyc3DfQhjn6SUbQTCS3MSM",
  "key1": "38aazwNy87wNcumaLUfgaTMQjbxWJtGKVj3AfUb6mhy6Lod8oTszu8z3T6cDB9ry9W961RGLE2dCbNi6GMKKQdPM",
  "key2": "363nCMEubprdtv7vXFJEoRnGqXhq5Gh3s9K2FnSZBAvhzVfXFTVEBk7B53p65SWvoQV5gTpTEMsFfDErr7V65CtR",
  "key3": "4DBazLpQwaQMAYFk9FNfaMnYqQBrRqanU8Qe8TckKobdhkJKLYJ9v8iBWsHHc3XLQwvvNUfAcnA32KMncFQRVfh",
  "key4": "X6UVsGhJ9buRxU3hsnD5VBrk3PwvTxRy7KJbyDMZi83U4H9xs7vGu14v8MYMfDYbyns2ZFbmE9HuG5MpyZcfy8x",
  "key5": "2N18mjStdRDTLJwzsq2sFv1PvxxL2E329AzV1mGpRjNYUYketQtf23dsaqT3R1qnRLLbXkeWUmjK7PGnkiCPw6t9",
  "key6": "4P3UT1GEGfY65s5ec3U17RCiz37Tm9KkxYStXc33WTDd1hPrKp7QxjsG83Kn3TKAN2ZoGDDFxgrZrciyLceVL3es",
  "key7": "WZ71p52Gie7Ff84RoC2kFTPpBf2BZs81QDyhnACVgyPSJmmE5btbsyRGmWqFP7777aEE9e9hDt3z7H1MUvzH5gw",
  "key8": "tJKdJe1TN2bzrCJLCqi87ix6T5r6j59rwCZT4bnovVfyTvpzZkfEPBUJT3R9NjLyKtKDC9JAJTDa3vTeXE1dWQL",
  "key9": "5awLQLGsw5BRAMHrtkPEGxM6XDicszqQPJBXAzqBJXW1frYAHhrcrEssarqjRTmmF3BCZjaMoKSb4JxZb2dwxb7Q",
  "key10": "LhDKUQmnvxoUEG2NCWJ9AzCvrw1133DvL8AW51YhsQKdkgcKn5A9wAyspwJ8pw4H17kfK5Rqs6qHMj6UWqJGbaU",
  "key11": "2cUTWq6Dxvy92gB1hNHJRy3ifVUsTtRuj38UAcw1HQwp2K79ezRsgYqGYoUBVEgZubUCR32Hdh6sC7kNNWWGhVLq",
  "key12": "3qTJtfNJ2qA1nW7WUzPMjPBx4NkRfSA4sqxLTa37Ms6VBWDiZQWn9kFg74bVteEXG7tyqBtvVkmTLfUb9U9wmY4S",
  "key13": "4evWerPnb8LwRo9Wox3sEvfaezeHjXb1YxYDgsPvpkfn6Xmsbm2KbpLDCSJh8aShjhscvrzBdwNvogh5fREY5Efv",
  "key14": "4rrqB8YJkxKpnS4rgpfFMnrKswjAFz5Uq4geRDcoqt9fBuEkHTh2TeMAyHFQiQg9odnMP3q3fw4HgH5uQexqvXdQ",
  "key15": "26f7HB2rAwZjTo6PiSMnZDQVPv7GZCu1n6FpdV9vnhSeq5wQUH3Ma7FCGAhiGXTSBqXA6Uu6WEksPRjkJAKFc9kd",
  "key16": "4XA91b74ZvpP5f5YxZxtGJsPTKNkMbtWJChugD6c9U9iXbUSdPXxcsDPBpvdKcJbnR4mKdEEcngrBeHudoxhspVh",
  "key17": "4PmvhzCrbBCNdXpaJA15zKgjHBWHHE3g8YnKw6U6qhdWcV1kd4pNqCvRyJrptw9d8Kzud6B9kJGFGzxPPHX4D8Lo",
  "key18": "3w636W2W5YYPUUabKarr2XxgyXebxdMJjq8sExZ5i46TABFCRsDkZZoRH9aS81Hoof5ikqPJYZpXe9gu5VY4tiyK",
  "key19": "4Vh2YpAeJtuMM3ieLff7iLkHsLAgZNBNyvb3fRszAqHGhxop7x6PAfv9kWSiF71tx8rRjwnWijYb2NGTuDnJ5f37",
  "key20": "5ctk1FftcRsopxeae1xxQKTCgELpVVaCbcauEENECCR5Cj49TEauztGFfh7EZsc2irDcE97uDp2a3KLe5CvLh6F2",
  "key21": "4xvTtFjfxWD4BCbPaSdFbxmyRdgDbqdNq1YKAmiQUd9a6NTohTGLwkQJ6dd7EwNwtshFPVfnq8U51wyhfzXTZoJj",
  "key22": "4VzFpiakooUrKkwYq9Ji3xkZCb9ma8CpCxMzEvbDrcvzmCSmqPvFtWucPjQVZLmxzLLvn7cSr5d3MoK36fxbNRoH",
  "key23": "25x8cVdHzZuS3zfcie9EkuoNehiP65z6n5uACnc4wsVKJcWkuKWiPoeiQ6siTryvuHKrHPEWWRHCZyR28bugWAJK",
  "key24": "qc1CqUVi9Qivfu3WqCug71n3yT5WTtEPaHQY8kYuSw2TP2ChsE2wpvdcfstF1UKb1h26SFon22f1crNd9FA53R8",
  "key25": "2Djzz65v8eZSG7UZvZNo4721r9Hz2YxhzPgmwFiuddYHR8V5SsPiB3jeEdv5VuWKtMemmXRn8Fu241MQV5P2McLs",
  "key26": "3NQZwhYk4KSp4LmetM8kkpLLxnRLqeiKToB5BM9HkEaN7F1tUdzZUAgLU3qCnL4RwiG9u64UGJJ8WbUVW2EmcrWw",
  "key27": "5wangTXXuiYPN1qQPHPoCqy2nstRWywKwVGWPhzK6KcPasfTuVYQ6oodQbtv2PYBknink1va7tdkDJpLH3Jr5aWy",
  "key28": "hAGm46rnpHdgrujrRPWYnifQUFe58nPdn7i45DjHRjqMA1v6tsSZSrm8V2iiUkDCVD2SMUsKfp8Sfk7j9GX2Jrm",
  "key29": "37ZonmcaSwGtHNPxPQ4ATxbHzRvm2SoYW1x98ivhQaTQJo9Ff1Avd7SaVW34wPmUWymmGgUCFbGXMShFaDfqb3Cs",
  "key30": "3toZw7BVqC8ka2NYDJLwMatjhWWjTuyHZjARZJkp7sxAAPgPAWpSwuq5xV8fUGWX7vF4qpusoW96LqQ3qZjL6Jqe",
  "key31": "4FyAzyYvjBHLKpCz9BNBZTJi5jagdn1F2WGDDDVu1Hec9JMfvQcvDj3SL2rFUdAqxYwQ11r9nY5SqB6HrZTEQvsT",
  "key32": "eh3kEJfQaVY1x1CEG3djwGN7iAfnAwHQjFdM7hq8CuFi1xUswjM6yNXZSJ4ttkiDK1NuoCmqmD4HCXsg4pUET3w",
  "key33": "2e4x7yWZm61Rh4sLXvmnwPXRqeFSJ7p6zrQNsoawngKVz8pfFuu7JoKkGrQy622kcBMJ9fB7HxircAm1xNiqsEYy",
  "key34": "2aYwim9Cuy9tzFgUGbiKrUeziCPSt2yuh5cCDsgUQt6Sj9pKJspqcJK2Smd1UfJnWS8C9ZJtJHSkqT5vhweF8mqJ",
  "key35": "2j8ypCDnJHpji5dXFBevWBnW6p4YLEbTEVxSAd5w8eiYtuveKXKxwwWqYbfqBE4njAfKfFzBBft9y6YcEtdCBPTL",
  "key36": "23bY6FUeGEfqHecTNCoTmzzgDgaYtphXXRPQm1t8oGX3HpjKS19ZSW9j9ku379W6yRqzZ9mj9JE9f1kFAUGbdpwp",
  "key37": "5U1JVfCyae2cgx3FVnbaDwZ6CYqdaXTaxFdZBudVstPtQA2m6wHx5vzoRXUfvQjqbSkHf7GbbU8q7sNcy4ESimzF",
  "key38": "4H9er4Ke1XTcbCr5HaUKrR7P5i3LVEQi8Uvr2ErSudJA7RK45yG811PqyFgA2qaxATjAopZjRXDQDKqADwW7iNe5",
  "key39": "5mYwFw9ssvA7DvxuapEP9XPmZM6dfDZ8mkHPog2FuToLhpNFQE7edhcJJH8X3BWDx5mYrnotTHnEQUoitHxyz2QX",
  "key40": "21mZi2TxdR9DCXRX2u61iyunK5uHakkc7vUr2a9En51PdTp1pNAMXjj5kjEBwdbgTm9YxKkQZ6jV4fsbBD18YDdD",
  "key41": "Xw5cKJYSW1sBSz86C7dtXi7voZmQJPe4oHPczuoFmwTWqchX1u4vXhQit9Ggz4jdZCz1KFTrdco2WUc1n1rADuV",
  "key42": "4533r7umnm2bpwuZuf2xLAB7gUGofgfVd89zbKm9XGiS66AHfmbJvbqEbhxFCHbtWM6KTus8kgBrnpdrtDk83zwE",
  "key43": "xaLJfhfk3tRp8zwm1oWLeFDHTvS8HHsGA27xe1Dmp4U86U8awj9YGvskDhJuSkkTzXVX82RUBLaB5cfzzLc94of",
  "key44": "iXKv2B9mTgHTEK2iJDSMjMy7ag8qVB2kaCxKkiUPFEgLDL18Pi6itCmdbzMUzeNir7KDRDGzVak1cTFewN3fWoM",
  "key45": "5FYK54bMrJJHKVjWyvAD3ytUskD5UC8qJ3AFs5dxaYyRfD4jKqaENyCP9TUi6cVkQQ4gUWiWad2iiCp1sF2M894A",
  "key46": "4d1xfMzfrdFGWFc2kQZ5cXwwJ7G8pGHcQyBXRsFAnJERneBR7rcL4NTbwn7kBwMoHQGUuAN4aXYhzgNpScDgJweC",
  "key47": "4U6duT4Q3ZSF8Wcqe153wpX8oUdCV7oyknM29CeNkoq7C8g4iKXdjxT7EWQCSTYhyTsLrqUmRWGJrkBJ8d3rqGCf"
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
