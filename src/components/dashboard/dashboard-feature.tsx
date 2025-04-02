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
    "417yazLETFWsdKhGbicVG764YFP2i6z36hpsG3376xdRfUXMT6xhWyWHpaowm9ua7u33nCBE6koptdiF3d3zZLKJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kcm6c4wix5c5tsRi6kwZJf7HQjWhk6gX8B8SmLVK4twy6hAWL5LBYFc9vFZduuSRFaiSxwNjjyoUcPSC3Z3wVWT",
  "key1": "5KjAx7ePuXb9YR6i5U7S7Rk2F2wySD1WPgozmNHAAtQDrTPgyWNCumpqjNHfxv7KpBKwr892dY4SZcFjFejDw4is",
  "key2": "5dtphubiFLno5FiwXmdAf7k9NEcC4asQ2XQcNxG9swmraf18aMRBjPhAMntJ27fivdwqGMgptaw9pvUdA5DgQhfk",
  "key3": "5AbwFaWYxmUFBMC5giDFcufy8YjURkEwHoZTjRe1s8winyQbSqLHMNacVmcntEWjca8amscH1H3vBN5zs6WkwUWW",
  "key4": "g3rTG25RRW9gszivyvauEsXrvFthxG2uYATN1rTt2qggemu7aLpFrKCrkiZNWoUdZQkbjEahcNhYusbKstYuuY6",
  "key5": "3Ki1iVEjeLHnaZ3HQvMAX2HDpRMHroB2SzfHeSJHy7yQexd289xhC6nAe8mp3TX3kiiG6mHUYoWE9ejWytGnzg8E",
  "key6": "4FYJFvPxb2MR2VjJBDBScqyhVRKgvLAeRQtCm9GrxhsaDzPQb5sBfhRZec3QRvcTSZEzyiaY9nN3gjW6Gn8Z1mLU",
  "key7": "3VAFyxFzJhcYehq7v4bZWurm2LqNvWL7TuL1ozE25f5XpA8Uyun3gUC7iokrh3RstHrfXoSBxG6ukxNx5eVTuiEY",
  "key8": "33cxA2uXLmreV4G7hNzeoiL89qxufdjNg9xiBbq6Z41V7hFsU1VTkGLF8YaWPpdxSbDxH5JqidKTGAUyXb37TWqW",
  "key9": "K7FUc2UWb2VsaQAGkUMUPX9tMWbBVtutun52HFscZfKdG6FdBPRYibrp8H6WDEXnHr6hWTsYXwXU4rmvCyLuezA",
  "key10": "RenKZw8jfAjfjjfz8gXMpsfF5ZfJSDx5PBMhoTuZF921z41kyzeic49kQ2GkTZEwaQ94ocuMrb6Urwj1ZyjMwwn",
  "key11": "ErKFkQyKLWEaR5oCaTksnzSd8ypJuaqEs6HUtRLoFcdYekPYxDT6fKgCyu9569ND2iWJqyBZKaf9XzTC85RvzuT",
  "key12": "2KX5NCLyM7MM1DHT5EiYUU4orceivy7SdQQZh7GSoFb9LVHVEfGFgYjmzrVXutdfb94W6Unph8ttvfV3gsWRXaLp",
  "key13": "4DBkndUarLCm1iBZA8k8AzVCNoLawKezPxYVhZKaPJLUL9MAxnsRo4QF7hyAQcMzRegQUAAZAspswGgmgtRcfcNs",
  "key14": "5jfCgX4hHQcBAnd7GyREm1wvEnW7n8NgSCotoJwfPbHzeBqTueLjd8oofPAvzKV2xo9N5Q6UD4LC6HGCSJcu4VeX",
  "key15": "3tX6RHrYHmJQyKzvs2wFQkt4ab7UFmiYwPEWXzw2QyzqFc4xYaxCy3WDTCjrVHjJod9phszuVkr6mwXgtnbqSWLM",
  "key16": "5p5xzHdhJL9AprBFeiZzo2t39HG4ydLnuHhDzjxD3wEJwL2Sh2BemJRjZc1eLAkLHgnyZgUkjKDXTDFvZfTD8GW",
  "key17": "5sd8Ny2gUt9hFmEvaUc7UQJKHJhdNmcy1TKGWG1utYycvfge2GzEVh9c368KPiJnEJqGAfn8rNfkViP9ytTa9Ki6",
  "key18": "4ek5SgcdUbv5DshsnqkhEHFrKo3vyLYWZNbzP4UXQSfMzYj5CsQson4PADnMiBzSkips6MJXQW96ezDMxwkRGdBH",
  "key19": "3rQyk5eziT8RM9AJQMBoRzuVmK9mqU2kBqGpcp68vdEHytmCaEWyNUdSep3vWts12XrgjThH52ZcV4UZZ4m7MSVx",
  "key20": "4ZoNU5sL7D95hgn3DdhfzDZpzmDECfgL8uwGpmoZCPy2m5qZwGYctJh3Uxuo7peJhxoBTqrchjhbYLr3BsFUmmmS",
  "key21": "QcF1Au7UY9DU1fvZj8VsKr3WRb3VPUe8MVt9WjDDjKLR61XHRYetXyv2Q1A3ofmnKFCk1qnMAGZAGeGbM3RoBrp",
  "key22": "42X7tfTc3zfXSSzwgipHSiYsUSEtrptoLgUoNPaMUvz34cUpdVf1KiXK8tgi9Mi4Tos3Qvea3ydCyPjxSv7ARudf",
  "key23": "5VLsQFXPMuC5LQJvBE4CMTb1TaoGdveoAAKpkMFsrxVBgXVCxndbB2UucNJbLLqe3CbZnoVu4QhoZXounUZPsZ6a",
  "key24": "2Z16bVAxUfy49FuBf1VaLzdUhx53HmKW11b1R1pnxdReTGXtnJHLcnY5SaPZWuEGujTNL1Zjh4HNzY7ycjYh5Se6",
  "key25": "3rEdtBHVabHnD8ybxay3JGwArLUpg268nn8kY5bTJ3rMM5JKpoJN2mKTCCdFRP3oJVuW2Aa3DVewNGnRPPX3DtZg",
  "key26": "nqmDA8vDvnDXCB7gxzZVouTJqgrS1BPUKP5H189ATwCYVUEyPWGpj8P3RimwVev4s7HDEV4qhwd48aYu8paxEnD",
  "key27": "2MvHw6U86zd74FkRcNHevFiP4fwT9dCSxxQVB2Esv7Eb3yd5R3onFhYqcgVCYo2RF2pRtF5HczusqzwP1sHaQKDL",
  "key28": "3YFzcpznHaEHwLEFVmsz2gLDJVqqnDV3uJYdLhggPnRom3samSqUzirnoZERrLHchVByLdwXv4zcszdLtKJ4UMGd",
  "key29": "AnKqszmP9Qrzh39ruDa48eysEQWoLfxS5EMrjLjQK1dXRCtSSoRsHTRNf9s8hzpBhtPeNLfGpgDCL2iNQLBnS4K"
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
