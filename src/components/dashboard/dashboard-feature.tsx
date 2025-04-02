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
    "4bxmWjMR7bYkmTtVnyNyQ5kE5hVE7D3EX5iY6En6eRxTRgEm96cm2Pm5iUyT1P5iFXT8CJxECHx5kPa8HVdxBxMz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kk48vBxTW5kjYrc6msoLG9zn8xWUwVK2gRmzCWURfPfsu3MN6LyusRA4kuCaJpxrqhZ8bQqsAiB72k2EYSdrdHw",
  "key1": "4DMdFTnnq4HUMkwFPAU2w5NE4VYRJ6zhKh3N7xjg2LuvKzEtmwH6Zr3nqtNzDsAMCoHmN2UAa5GEoZVm3cjPJixe",
  "key2": "8sAczbJZArjjC8qBHGgyR6FXanTycK2nmEJbnTnwWcF8VXWSzq6mUXCbMPymaUANp6WXgjurnsSCNzS4hE3xFoh",
  "key3": "5h7Tc9QtZHnxK51edPNAXZxXn5BbsCfUFunkVBjKztWiNoMMg5EKWQzxadp75zArAcMF9wX3rFVVdYWDwnSbkas8",
  "key4": "36YfXV8Q2kRWPpMd1mnHSDy32k1RcyMvwNZQ2eSzr1iKoqmnZYrWVjCdmmLXKbZVMGeS7SVixdhCU1Eeuk4kLMUZ",
  "key5": "2gb6JUUGHLpAWqTvM6xNuKYwrCydKfMWgWe5sbYGUAtQYbirnhho68Hqwew3Tjgsrpz6H8W7kJe2ZFt68R8sGfZd",
  "key6": "RawcTC7souQ8RjR98FK3sXo5jehYS2k13NvdMxZpVifK6e62HeFyXJxNVc1PKc3sw6QonNbwRAF7DXg3FNvCmmi",
  "key7": "3jwnYQTiHcyyTpnEanzLj5rpxSe4wozABgaWarj1e9rtvtNBdaYjSX96QwBfZ3mzHHdRwyJ1gZ8jJC8R5eRrWxiB",
  "key8": "2woTJwEefHw1msoVHDDZX6QWWRpVcW7kHnMMZSQkxNRpgYMZDR9redRbyPfvdNpyFZ9WqNWLrK1N2X6TjQ28AKik",
  "key9": "5XWSWsDzbdXoNNUyHDsV4kWhH8yfvVofygyzp2D9s232MaCSeP22FHNMJ8ZjAtqzgjz4A9pGngDJjgvTJvg9qAye",
  "key10": "kSP6LG9pJhbPQi3bwzSRTSP8maYkKY9AXxmfVHkBjTnsCGhUhRC5wXzNAV8mjqnHD93kkzU1r7vV2qQAH5tVaMi",
  "key11": "2pbGpXRr9GzPTdgdu4Fs7iDz173XRrF8DtMwR6i7HGA8iMFwUSwWJA6QkK5eWvqftxK2VNgcJxaWVq1fJ5yakBCE",
  "key12": "2RJy1UunCMhEXEEdV8NE5SA81vu7KjqMoyqXFowKKcMtu2nzYggQxXhzM4dWwJmmbNexrXcSbacCKxS1rxRUVQUv",
  "key13": "2UttRTK3GYcWqcd8cgNrh9uW3HMG13VZ8ejwpXBN7M6xPTAyoBBnnEEmdKmLrFAbT5gvoqQkKFBSh6HRBabh69iv",
  "key14": "3DKakUsf7tv54LyMzijE65LhSLa73E9Ebi8Q2L1XFDpkEZ7y8J2isfaGHtQfLT9W1AHMvySkYjbXtrctrKXUALxv",
  "key15": "58bcKbfe1xA7soxWK3vh7DvGdbusbvRUhEiXyUsDqtWa8zHJt1AvNCWhnmKjSszkmYwjycCAWEsp4LJGRnuUyDP8",
  "key16": "3F42GBxzMyA134R43Q9C8q6wFThXMTWMpeLbhLkAgKUq1GsRD3Kme1GsDSuMdWpSQhVJv64eBond1uGhsBJ753b5",
  "key17": "3XK3AZrha4NvbTYjm3Tn3mQWwjXtBi86t6RkBk9XHEncNoGKGnL1AmcEdZoCyHKYhnsKihBnRB6VeppnCyzpWEcd",
  "key18": "hNWpcsqe5d3v9A97Bog6VL6P2CakPzJDeKWfHq2mHGnarT6uMCXj7mUbAumzkRetc82DoipAydpgQFpnrPJYuQa",
  "key19": "3gSeG8jmPVMHnaYmw6bkNJLBHenccvFsk5HrkiMnTzvVmFHTDhasyt52Pf542kDbUPyn3yXTyP1LV9RjsrzNuPLN",
  "key20": "4h9xEarPUrjUx9qvbTch2LyaoTtTXyzoCjeyrjL7kF33mzMLKZiRnBTC5ijj1tZzCZMxNiVKqSC834PsREykdUkq",
  "key21": "3A9s8TZKxFS3axWr32Mf8o8ixPgq83UYhqjHWa8kJMzAyUb7tz4CVFrtdMsg5ke6a58pyneRTVczeYFyRXKBugqV",
  "key22": "5reqVChnGqQrEJsQYuwdjb5Dntwk3cJj9Csf84U6NftSeogeFE8YtBM6Sx5179SeGe5USSFL1vadxAkbjU87kVrM",
  "key23": "3JPVuzz9YxsAtQ8MEChqcjWoCbPic2ZN6fS5SiaSABUvMkpGDxdJFMjTGDGfqVNrD8bZigeCT6D77cT3RxwZJzgF",
  "key24": "52dvYkfAk1R2ps56DpM56sNmYtozHsjLhrw3WGApwqzX26LMdYrrNnYwvQyQZTS5b1hNdzugwqLf7dbRu6sYfJQb",
  "key25": "hkcTbaFCAs7MsjfLr9dUKGVbYBvDtovcXW9f3oe3HSsvq249VTTtUxMqmyKxNiNm1XHAh42pkJf8quRy7mDLqPG",
  "key26": "NjhRjn8js8aq948TFfuiDBNL2dsJ3fikWm4CDabudGKFpdwdL7FqwjruaXB95DcY9XqibRojKiRmuZzZB1Na9Bs",
  "key27": "3G8iysHq5tSMde13Cmm8KQ8K4zEbEyKQHaewSEuCrrfDGZfmRxiF7TRPGnYq15i9hM6RaMsnKwuPBD1cBrmGp5kV",
  "key28": "Yuhk4W8T6vKtHT32rtFoJYzVUYUHj13dhdotrfCFmou3HsKcWW8Ci29yvXASkLdvgPbRtpa39fNsspoqG8r5egX",
  "key29": "3gaHsTWfmbCV8GZfFVyT6pLrhyoLMB1QYLuykysYGqPdUPonroW4oE3pe4oNTECttF8MQ816tCSq4bPVTPw8WL1d",
  "key30": "4UoaR3cfUdEtmw8TLF33yyRLuiY14rHLEanqiBAuhpYe2t7yUNPJGhVW5jLnF6SkukRLpmS43VgQCw8qMiVDjGDz",
  "key31": "54yMhFinrPc9rXGqH7RWYrHUz2pKJXLKzNaRwo5ZeoR6EFhkWKdtotDVeZGk8aBWhZE7picLNt13jHLamMpa8i1C",
  "key32": "5M35Fe5eQ7QqF4dpF5bE5HHGc7F48nHHikxaMnMpi1FRy6UPRCWJC1etQQbRjkGPRrjRwS5ZbtgQ43KceR92tBUR",
  "key33": "s6sXv2fqBjD4jPeL8RQ4Pk1Ym3ZDTxC2u6R3tmN3pjaLRYaFH7MZhodmUgcjpTDEXpV3W7nPPdhAjAgY9pmc8aM",
  "key34": "2NvKCq2WTqwVJC2UKewrkAwMDENbgKVHge4GpqHNubQ2MDobQemi63gT7S5ehQS4rqinJ9tu1JtgabjS1fSuCdBH",
  "key35": "4qpVtVmuQwfn4SDsibHWYe1vTMm5RXTxZ9osZMWU1WMjvBdRR9EHEkaZ6CZsHTYg5uu8TwBRtkfnbeAvytwRG6yY",
  "key36": "dygbvXc7Unu42xQWo5o3pN5C1jDsiYDwGXfg3avg69BV6QMX2Wof2iiUa9URsoRrnNmAfwvVpRCJAhVDgM9ModE",
  "key37": "2P77x4LnBSQT2qLuroCs7f4Fcs7xXnWJj2qP3GH9UfVry8js6aq5Zatfi8prAqtedCqeZQU2cuaMdz72vCs8Sthc",
  "key38": "5GTJdq9az6VECZxaY8G5sZMo715zQxtKiFARXkv3qAcymeafg8g9ShsYGXh2NHRda8vSa381fMw882dhNw2s6FzP",
  "key39": "2WHFrJFqJ7vBezMM2b62F9A8Sn9uJLhLcZZPfPF5ogmbCkcVFV61XwouGgRyTxp3dMH81mheyuEr9P6csHHMYUEA"
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
