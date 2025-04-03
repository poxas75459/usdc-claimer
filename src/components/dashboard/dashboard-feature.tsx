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
    "YZLuNamfz4H5Rp7zugYeJiqCEA6cZidgETygv5RBKVBtrs4FoSX5kB5oWchzXSG94oYzCJB82KLhEdGPgr5u4am"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EYDFqEVC9MAHq3BLVU7WPQLKHTFQH1b9etAW68EAs9aXL9rhhfe1eCaaUsmjPpDSZsaGdjzjNxMQW5Nk88UVWBj",
  "key1": "Gpf96fqFz5qphtyXBvhD1xkmqZ6w1q2LEqMkmVq1rxxuW1s59K2RdFbSw1eEX1Wmjrc2tBC2rmdKvRfZLV65k2s",
  "key2": "2RuVZ53TAG7HoxKPkWLsDguDrbR2yrDYzzz75MtNJ34H5ia4LMDoUW6CAbC1jhu2g71iX9NVAX8mQHwSxuPdHAC9",
  "key3": "2GGRniRFG2KfKjWz49NuCAzcNr2NFsVt31sY5P392CCnX1ZaM7Z5jUjaeaooAfbzkPyX3wS1kix29g9fzjKd4tf3",
  "key4": "5DzofK6qLHnDSEDkXAUV98itmScfAmoddMmk9zov7jraqoZUC116rqxoQLjv1Zi8VHkqhsPhbd6tFmDapTZmRVe3",
  "key5": "K5zSN8t3Zb84AXifM6SdF84Y2yEPxw4enMiU6T6b7tGm54wb5unyMefdT1UubdHanLwEpPZkFAp3BXxGtiXFm8U",
  "key6": "4LjHduqSZoxzy8KGG3eniHb2PqZUyuh52HDEB4DFYKDK1ii1uHKrLfZchSXm9pPrGFDAd5oXMLbjh3CmnsgvGtr",
  "key7": "3AfuhdzqjQB2iRHDU7VQXegkJKJgzEsRWSY1hjzVafRp25atBWdqcN4hjVTxJeYgSFpLnYNxJGF9iR2cABUe1wFm",
  "key8": "4aNXjdr1CuHsbkH6brQDsLfURD4L8PtKjaCR6geo6w6iYvtYLHneepNGRDDgmM47dftVTqV345oG9ZoFkHontJUV",
  "key9": "3GWhdUKPxu3QVu7YXsYZU4xA9G4VsmGMqnUa4NzR1zk1w6pdMbJ8bYzcTVhoiiTm9dpurYZeZXoc5hhfe1QNsM8C",
  "key10": "4EyDYUtXuDr8ncJzidC1f9a1hNGmQ7jSSkpmn6AYTrxAXCp9pnhR6s8BojHnm7kzTX1RkhBsFGs45UWphnT7ywZF",
  "key11": "4JT2UnpNikCoGGQ6DW3go4EFzwY5uWQjLkf3BLZzdfqTjG8bw5KrBQ3QRZRPaxAm67LCNjwxqrj6WdGzFrvWiKzE",
  "key12": "5r155LUXvVHNq6Jaqxn3Pb33UnEYPfMK2e86NSPkwVLPRGrKsZV7jv6RsCDAcbVxmBJrqFe5Pzd6LVux2t8nbgEy",
  "key13": "5PaJjpvwZYatosASHzdKixjHzeqP9ctaqKG1cfNNdB7JtGbHiGSN7tBzMdDDvDUMgWEHMFF6Xi8emwLxSij7MDj9",
  "key14": "2tKds8tSw5et6WxXquvNpYf3UU4L1vYzcUW84Rb8JcbBCLAVnbteyjFLtZoX98a5tAnB5W3HM5CPjLDgva66yc93",
  "key15": "agEfWEeC6AD6dQiukgHoDmMZ4uc5mxYci1HGKEs9aRkn11SYDpExqySvCL97SWWaVmB2Jm8vAaGYNqDJn36dizE",
  "key16": "365LabJ37jfRXP8GPR2CeVWdpcJjjTcB84r4kDmoxt6mhUEAQzkHMdkjiWtPGHhTCg3QLTh1cbJpTxsUA2tQhceU",
  "key17": "2utuzPFh2Ksh9ugHSKrJJCaRZuzfvptUjohDYBRNGebk2NsUoxBuXn2H5qTYeeGPy7WdkH6CcuXnKqPdRCNm3mf3",
  "key18": "4WkEA37wxSDm2gXcpSJWTnTGzLqeg8wy3m4GNL6fXDhGtpP1zmEMQEtD5Jamms5WNwbpgGGycPkkRswz3X4SX6SJ",
  "key19": "3MMY1nnQq2wGbqAWQswQoU1g1mTLP4TN5zStJAPanJonWNanx4Xxx2SLoUAYD3tzVjot8MWb4WocHZAxUdr17Qj5",
  "key20": "5UADFx5mqyezEve6pKKWpNDF3BaM3nfLyajjcYC8FoLR9mZdn92RkMT6FtNuXajBeQouTeF3z9uMDo5byEeHjHvp",
  "key21": "8fhLR79gkth3o15ZBss7rEhmgqsgZjcMeGdKc8TXm4WTcsRrYL9CzwV9qys8rvvK78cZ5aPmVzcCYpCKQbjECX9",
  "key22": "5DfKxf6ebyspcKGrnodMb9YUDns2Zndku8Weo5Xq2hRSXofHBY6FAvt8HgVKQfWobzBcyGTVdRwPGuVnfsrLat8X",
  "key23": "LMcB142yHaXyNNaxe6Y232b2wpX2T5sjkEausYpYrMAVxRasRRG5Cdz4Cux1k4PDM1iSZiKTdsXPheQudX2kD6M",
  "key24": "RYMhDoAbHvMdLLd1KR1h2DwrCER2HQZA1zWh3icL1seqU9CeLWD7dHCZPTLWMNFsdsDcTABvFKMT29LLSa93sRU",
  "key25": "5qjM6uSvEywbck6XdxFMVriThS52n4hJfNxkJACh8Ac1uo4rFmmbacKi9WuwJPE5HqAPQepN4QwgUnfSaLGawJba",
  "key26": "5KiZ34gfXQ7SgdNNqHJ4C5ZbiwrHFhsCAQWMXDUb4khxV4PLGEZH865eCWQpbnDHbJqB34ycgEEG6tCeSPgy2BqJ",
  "key27": "2zX4ceq5sEMY9hNUTYFn6P7stkfU1EnDfj4dDM5mtiv6yDe91FZPS9r3Yw3KpqaRb5xEGP3zTJoHJgzpzwuMirw3",
  "key28": "39apMtqFNtefYfcYKW2WVXVnMzmQH7bPXiWspj5Stjq1KR9YHpDxQPmgUBq3JzrpRwAjokh6ErhpUENFbeUD6M3R",
  "key29": "2eVVAxNSV6DqgStdMMhKWViWM9uvaq1WnLNpJ9Z945HvXMs931ehCCy67n72jGuXWByEcVhL1xxYptsY8QWNm4m3",
  "key30": "3j4S4iJcSd63gcwbQjdB17Ye7Lz6NPr5tRX4Myu4P4n8qNVQhBZaysNeDvUGZiZSjbhhWwS2MdYADAXKuf65EeTq",
  "key31": "PCMez9nRMeMTXBFfouvRD5RwmLLVbYEaixBcxrY4qLzACz8jrkdGdyA5DVHyzH8CoESQyzoMtNQgkrWdJnex2Rb",
  "key32": "2MzouNZHynAysQxJ4JtCYuJGDemrzNp3JbN1r3kJnkkVTrWEcGC5F36mFsTErvG4Bn6TqbvoMHi9W6S771xAyvvc",
  "key33": "5fm79qcS8q7h8mgJwQwfNvL4gRGf5UT2WJF6wrsV9gbevdZTP2LNqQ7WbLgEzo9dgTwxpRCPFgfgJt7LM7qVhBww",
  "key34": "5nNb2peCSjjfHvUCk1uRXTUFyc1UtpvkgzpYEwFavocwYdXnAUZXrnopWHYktHP6khZRdcMQKSKaRoEpX89z1SpF",
  "key35": "2vGv5KrkTAEz2SzmvRGE8Mkynp67YtC4eBAwyi65Uxt8DCZ5DX18dfxg6CLrB1YJf8SSwGugvfUUHczmrAmyVSZm"
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
